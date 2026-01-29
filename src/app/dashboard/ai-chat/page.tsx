"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { incrementChatCount } from "@/lib/progress-store";
import { useUserProfile } from "@/lib/useUserProfile";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "🐍 What is Python?",
  "🔢 Explain variables",
  "🔁 How do loops work?",
  "🐛 Help me fix a bug",
  "💡 What is an algorithm?",
  "🖥️ How does CPU work?",
];

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey there! 👋 I'm your Code Buddy AI assistant! 🤖\n\nI'm here to help you learn programming. I won't just give you answers — I'll help you **think through problems** like a real programmer!\n\nAsk me anything about:\n- 🐍 Python programming\n- 🧠 How computers work\n- 🐛 Debugging your code\n- 💡 Programming concepts\n\nWhat would you like to learn about today?\n你想学什么呢？随便问！",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userProfile = useUserProfile();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg || isLoading) return;

    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    incrementChatCount();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({ role: m.role, content: m.content })),
          userName: userProfile?.name || undefined,
          grade: userProfile?.grade || 6,
        }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body?.getReader();
      
      if (!reader) {
        const text = await res.text();
        setMessages((prev) => [...prev, { role: "assistant", content: text || "Hmm, I got nothing back. Try again! 🤔" }]);
        return;
      }

      const decoder = new TextDecoder();
      let assistantContent = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        assistantContent += text;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: assistantContent };
          return updated;
        });
      }

      if (!assistantContent.trim()) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: "Hmm, something went wrong with my response. Try asking again! 🤔\n\n好像出了点问题，再问一次试试！" };
          return updated;
        });
      }
    } catch {
      const mockResponses = [
        "Great question! 🤔 Let me help you think through this...\n\nInstead of telling you the answer directly, let me ask you: **what do you think happens when Python sees the `print()` function?**\n\nTry to think about it step by step:\n1. Python reads your code line by line\n2. When it sees `print()`, it knows you want to display something\n3. It takes whatever is inside the parentheses and shows it on screen\n\nDoes that help? Try it in the Code Lab! 💻\n\n试着在代码实验室里运行一下看看！",
        "Hmm, that's an interesting problem! 🧩\n\nBefore I help, can you tell me:\n- **What did you expect** your code to do?\n- **What did it actually do** instead?\n\nThinking about the gap between \"expected\" and \"actual\" is the #1 debugging skill! 🐛\n\nOnce you describe the problem clearly, you're already halfway to solving it!\n\n把问题描述清楚，你就已经解决了一半！",
        "Let's break this down together! 🔍\n\nThink of it like building with LEGO blocks:\n- Each **variable** is a labeled box 📦\n- Each **function** is a set of instructions 📋\n- Each **loop** is doing something over and over 🔁\n\nWhich part would you like to explore? I'll guide you through it step by step! 🚀\n\n你想从哪个部分开始？我一步步带你探索！",
      ];
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: mockResponses[Math.floor(Math.random() * mockResponses.length)] },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="p-4" style={{ borderBottom: "1px solid var(--theme-border)" }}>
        <h1 className="text-xl font-bold">🤖 AI Code Buddy</h1>
        <p className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>Your Socratic coding assistant — I help you think, not just give answers!</p>
        <p className="text-xs" style={{ color: "var(--theme-text-muted)" }}>你的编程助手 — 引导你思考，而不只是给答案！</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[80%] rounded-xl px-4 py-3"
              style={{
                backgroundColor: msg.role === "user"
                  ? `color-mix(in srgb, var(--color-primary) 15%, var(--theme-card-bg))`
                  : "var(--theme-card-bg)",
                border: `1px solid ${msg.role === "user" ? "var(--color-primary)" : "var(--theme-border)"}`,
                borderColor: msg.role === "user"
                  ? `color-mix(in srgb, var(--color-primary) 30%, transparent)`
                  : "var(--theme-border)",
              }}
            >
              {msg.role === "assistant" && <div className="text-xs mb-1 font-bold" style={{ color: "var(--color-primary)" }}>🤖 Code Buddy</div>}
              <div className="text-sm whitespace-pre-wrap leading-relaxed">
                {msg.content.split(/(\*\*.*?\*\*)/).map((part, j) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={j} style={{ color: "var(--color-primary)" }}>{part.slice(2, -2)}</strong>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="rounded-xl px-4 py-3" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "var(--color-primary)" }} />
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "var(--color-primary)", animationDelay: "0.1s" }} />
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: "var(--color-primary)", animationDelay: "0.2s" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="px-3 py-1.5 text-xs rounded-full transition-colors"
                style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4" style={{ borderTop: "1px solid var(--theme-border)" }}>
        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask me anything about coding... 问我任何编程问题 🐍"
            className="flex-1 px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
            style={{
              backgroundColor: "var(--theme-input-bg)",
              border: "1px solid var(--theme-input-border)",
              color: "var(--theme-text-primary)",
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || isLoading}
            className="px-6 py-3 font-bold rounded-xl disabled:opacity-50 transition-colors"
            style={{ backgroundColor: "var(--color-primary)", color: "var(--theme-bg)" }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
