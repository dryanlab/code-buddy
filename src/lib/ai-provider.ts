import { GoogleGenerativeAI } from "@google/generative-ai";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AIProvider {
  name: string;
  model: string;
  streamChat(systemPrompt: string, messages: ChatMessage[]): AsyncIterable<string>;
}

class GeminiProvider implements AIProvider {
  name = "gemini";
  model: string;
  private apiKey: string;

  constructor(apiKey: string, model: string) {
    this.apiKey = apiKey;
    this.model = model;
  }

  async *streamChat(systemPrompt: string, messages: ChatMessage[]): AsyncIterable<string> {
    const genAI = new GoogleGenerativeAI(this.apiKey);
    const model = genAI.getGenerativeModel({
      model: this.model,
      systemInstruction: systemPrompt,
    });

    // Filter history: Gemini requires first message to be 'user' role
    const rawHistory = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? ("model" as const) : ("user" as const),
      parts: [{ text: m.content }],
    }));
    // Drop leading 'model' messages so first entry is always 'user'
    const firstUserIdx = rawHistory.findIndex((m) => m.role === "user");
    const history = firstUserIdx > 0 ? rawHistory.slice(firstUserIdx) : firstUserIdx === 0 ? rawHistory : [];

    const lastMessage = messages[messages.length - 1];
    const chat = model.startChat({
      history,
      generationConfig: { maxOutputTokens: 800, temperature: 0.7 },
    });

    const result = await chat.sendMessageStream(lastMessage.content);
    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) yield text;
    }
  }
}

class OpenAIProvider implements AIProvider {
  name = "openai";
  model: string;
  private apiKey: string;

  constructor(apiKey: string, model = "gpt-4o-mini") {
    this.apiKey = apiKey;
    this.model = model;
  }

  async *streamChat(systemPrompt: string, messages: ChatMessage[]): AsyncIterable<string> {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: this.model,
        messages: [{ role: "system", content: systemPrompt }, ...messages.slice(-20)],
        stream: true,
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`OpenAI API error (${response.status}): ${err}`);
    }

    const decoder = new TextDecoder();
    const reader = response.body!.getReader();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        const data = trimmed.slice(6);
        if (data === "[DONE]") return;
        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) yield content;
        } catch {
          // skip
        }
      }
    }
  }
}

export function getProvider(): AIProvider | null {
  const googleKey = process.env.GOOGLE_AI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (googleKey) {
    return new GeminiProvider(googleKey, "gemini-2.5-flash");
  }
  if (openaiKey) {
    return new OpenAIProvider(openaiKey);
  }
  return null;
}
