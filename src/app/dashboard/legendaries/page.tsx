"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHRONICLES as BASE_CHRONICLES, CATEGORIES, type Chronicle } from "@/data/chronicles";
import { EXTRA_CHRONICLES } from "@/data/chronicles-extra";

const CHRONICLES = [...BASE_CHRONICLES, ...EXTRA_CHRONICLES];
const getRandomChronicle = () => CHRONICLES[Math.floor(Math.random() * CHRONICLES.length)];

const TAG_ZH: Record<string, string> = {
  history: "历史", mechanical: "机械", "women-in-tech": "女性科技先驱", programming: "编程",
  theory: "理论", turing: "图灵", foundational: "奠基性", crypto: "密码学", wwii: "二战",
  hardware: "硬件", "first-computer": "第一台计算机", bug: "Bug", "grace-hopper": "Grace Hopper",
  fun: "趣味", tradition: "传统", web: "网络", http: "HTTP", python: "Python", naming: "命名",
  compiler: "编译器", navy: "海军", nasa: "NASA", apollo: "阿波罗", math: "数学",
  architecture: "架构", legend: "传奇", "open-source": "开源", linux: "Linux",
  "operating-system": "操作系统", open: "开放", wireless: "无线", invention: "发明",
  apple: "苹果", hacker: "黑客", transistor: "晶体管", miniaturization: "微型化",
  uiuc: "UIUC", supercomputer: "超算", illiac: "ILLIAC", ic: "集成电路", chip: "芯片",
  moore: "摩尔", exponential: "指数增长", prediction: "预测", storage: "存储", ibm: "IBM",
  comparison: "对比", gpu: "GPU", nvidia: "英伟达", ai: "AI", gaming: "游戏",
  "punch-cards": "纸带", gnu: "GNU", freedom: "自由", git: "Git", github: "GitHub",
  "version-control": "版本控制", arpanet: "ARPANET", internet: "互联网", first: "第一",
  google: "谷歌", search: "搜索", startup: "创业", bitcoin: "比特币", blockchain: "区块链",
  mystery: "谜", chess: "国际象棋", milestone: "里程碑", deepmind: "DeepMind",
  go: "围棋", "neural-network": "神经网络", gpt: "GPT", llm: "大语言模型",
  chatgpt: "ChatGPT", transformer: "Transformer", quantum: "量子", future: "未来",
  physics: "物理", bci: "脑机接口", neuralink: "Neuralink", brain: "大脑",
  alphafold: "AlphaFold", science: "科学", discovery: "发现", "ai-coding": "AI编程",
  career: "职业", java: "Java", email: "电子邮件", symbol: "符号", secrets: "秘密",
  debugging: "调试", technique: "技巧", culture: "文化", formatting: "格式化",
  structured: "结构化", unicode: "Unicode", emoji: "Emoji", encoding: "编码",
  i18n: "国际化", unix: "Unix", "c-language": "C语言", "bell-labs": "贝尔实验室",
  protocol: "协议", "tcp-ip": "TCP/IP", algorithms: "算法", tex: "TeX",
  graphics: "图形", "3d": "3D", vr: "VR", data: "数据", imagenet: "ImageNet",
  icon: "图标", education: "教育", maker: "创客", affordable: "平价", space: "太空",
  evolution: "进化", assembly: "汇编", "low-level": "底层", languages: "语言",
  community: "社区", "q-and-a": "问答", methodology: "方法论", agile: "敏捷",
  management: "管理", communication: "通信", browser: "浏览器", microsoft: "微软",
  netscape: "Netscape", antitrust: "反垄断", "social-media": "社交媒体", cloud: "云",
  aws: "AWS", infrastructure: "基础设施", bubble: "泡沫", economy: "经济",
  "hype-cycle": "炒作周期", "deep-learning": "深度学习", alexnet: "AlexNet",
  autonomous: "自动驾驶", tesla: "特斯拉", robotics: "机器人", "ai-art": "AI艺术",
  creativity: "创造力", ethics: "伦理", "dall-e": "DALL-E", agi: "通用人工智能",
  philosophy: "哲学", safety: "安全", coding: "编码", dna: "DNA", biology: "生物",
  you: "你", inspiration: "启发", windows: "Windows",
};

type Lang = "en" | "zh" | "both";

function ReadBadge({ minutes }: { minutes: number }) {
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--theme-card-bg)", color: "var(--theme-text-secondary)", border: "1px solid var(--theme-border)" }}>
      ⏱ {minutes} min
    </span>
  );
}

function CategoryBadge({ category, lang = "both" }: { category: string; lang?: Lang }) {
  const cat = CATEGORIES.find(c => c.key === category);
  if (!cat) return null;
  const label = lang === "zh" ? `${cat.label.split(" ")[0]} ${cat.labelZh}` : lang === "both" ? `${cat.label} ${cat.labelZh}` : cat.label;
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${cat.color}18`, color: cat.color, border: `1px solid ${cat.color}30` }}>
      {label}
    </span>
  );
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "zh", label: "中文" },
    { value: "both", label: "Both" },
  ];
  return (
    <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid var(--theme-border)" }}>
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className="px-3 py-1.5 text-[11px] font-medium transition-all"
          style={{
            backgroundColor: lang === opt.value ? "var(--color-primary)" : "var(--theme-card-bg)",
            color: lang === opt.value ? "var(--theme-bg)" : "var(--theme-text-secondary)",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

// Parse inline markdown: **bold**, `code`
function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;
  while (remaining.length > 0) {
    // **bold**
    const bi = remaining.indexOf("**");
    const ci = remaining.indexOf("`");
    if (bi >= 0 && (ci < 0 || bi < ci)) {
      const end = remaining.indexOf("**", bi + 2);
      if (end > bi) {
        if (bi > 0) parts.push(<span key={key++}>{remaining.slice(0, bi)}</span>);
        parts.push(<strong key={key++} className="font-bold">{remaining.slice(bi + 2, end)}</strong>);
        remaining = remaining.slice(end + 2);
        continue;
      }
    }
    // `code`
    if (ci >= 0) {
      const end = remaining.indexOf("`", ci + 1);
      if (end > ci) {
        if (ci > 0) parts.push(<span key={key++}>{remaining.slice(0, ci)}</span>);
        parts.push(<code key={key++} className="text-xs px-1 py-0.5 rounded" style={{ backgroundColor: "var(--theme-card-bg)" }}>{remaining.slice(ci + 1, end)}</code>);
        remaining = remaining.slice(end + 1);
        continue;
      }
    }
    parts.push(<span key={key++}>{remaining}</span>);
    break;
  }
  return parts;
}

function renderMarkdownLines(text: string) {
  let inCodeBlock = false;
  const codeLines: string[] = [];

  return text.split("\n").map((line, i) => {
    const trimmed = line.trim();
    // Code block handling
    if (trimmed.startsWith("```")) {
      if (inCodeBlock) {
        inCodeBlock = false;
        const code = codeLines.join("\n");
        codeLines.length = 0;
        return <pre key={i} className="text-xs p-3 rounded-lg overflow-x-auto my-2 font-mono" style={{ backgroundColor: "var(--theme-card-bg)", color: "var(--theme-text-secondary)" }}>{code}</pre>;
      }
      inCodeBlock = true;
      return null;
    }
    if (inCodeBlock) { codeLines.push(line); return null; }
    if (!trimmed) return null;
    if (trimmed.startsWith("## ")) return <h2 key={i} className="text-lg font-bold mt-4 mb-2">{parseInline(trimmed.slice(3))}</h2>;
    if (trimmed.startsWith("### ")) return <h3 key={i} className="text-base font-bold mt-3 mb-1">{parseInline(trimmed.slice(4))}</h3>;
    if (trimmed.startsWith("> ")) return <blockquote key={i} className="border-l-3 pl-3 italic my-2" style={{ borderColor: "var(--color-primary)", color: "var(--theme-text-secondary)" }}>{parseInline(trimmed.slice(2))}</blockquote>;
    if (trimmed.startsWith("- ")) return <li key={i} className="ml-4 list-disc">{parseInline(trimmed.slice(2))}</li>;
    if (trimmed.startsWith("| ")) return <p key={i} className="font-mono text-xs" style={{ color: "var(--theme-text-secondary)" }}>{trimmed}</p>;
    return <p key={i}>{parseInline(trimmed)}</p>;
  });
}

function StoryCard({ story, onClick, lang }: { story: Chronicle; onClick: () => void; lang: Lang }) {
  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="text-left w-full rounded-xl p-4 transition-all"
      style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl">{story.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <CategoryBadge category={story.category} lang={lang} />
            <ReadBadge minutes={story.readMinutes} />
            <span className="text-[10px]" style={{ color: "var(--theme-text-muted)" }}>{story.yearLabel || story.year}</span>
          </div>
          <h3 className="font-bold text-sm leading-tight mb-0.5">{story.title}</h3>
          <p className="text-[11px]" style={{ color: "var(--theme-text-secondary)" }}>{story.titleZh}</p>
          <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "var(--theme-text-secondary)" }}>
            {story.hook}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function StoryDetail({ story, onClose, lang }: { story: Chronicle; onClose: () => void; lang: Lang }) {
  const [revealedFacts, setRevealedFacts] = useState<Set<number>>(new Set());

  const facts = lang === "en" ? story.funFacts
    : lang === "zh" ? story.funFactsZh
    : story.funFacts.map((f, i) => `${f}\n${story.funFactsZh[i] || ""}`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="fixed inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6"
        style={{ backgroundColor: "var(--theme-bg)", border: "1px solid var(--theme-border)" }}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-xl opacity-60 hover:opacity-100 z-10 rounded-full w-8 h-8 flex items-center justify-center" style={{ backgroundColor: "var(--theme-card-bg)" }}>✕</button>

        {/* Image — as part of content, before title */}
        {story.image && (
          <div className="relative -mx-6 -mt-6 mb-4 rounded-t-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={story.image}
              alt={story.imageCaption || story.title}
              className="w-full max-h-64 object-contain rounded-t-2xl"
              style={{ backgroundColor: "#111" }}
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
            />
            {story.imageCaption && (
              <span className="absolute bottom-1 left-2 right-2 text-[9px] text-white/80 bg-black/50 rounded px-2 py-0.5 backdrop-blur-sm">
                📷 {story.imageCaption}
              </span>
            )}
          </div>
        )}

        {/* Title area */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">{story.emoji}</span>
            <div className="flex items-center gap-2 flex-wrap">
              <CategoryBadge category={story.category} lang={lang} />
              <ReadBadge minutes={story.readMinutes} />
              <span className="text-xs" style={{ color: "var(--theme-text-muted)" }}>{story.yearLabel || story.year}</span>
            </div>
          </div>
          <h2 className="text-xl font-bold">{story.title}</h2>
          <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>{story.titleZh}</p>
        </div>

        <p className="text-sm italic mb-4 px-3 py-2 rounded-lg" style={{ backgroundColor: "var(--theme-card-bg)", color: "var(--theme-text-secondary)" }}>
          {lang === "zh" ? `"${story.hookZh}"` : lang === "en" ? `"${story.hook}"` : `"${story.hook}"\n"${story.hookZh}"`}
        </p>

        {/* Content */}
        <div className="prose prose-sm max-w-none text-sm leading-relaxed space-y-3" style={{ color: "var(--theme-text)" }}>
          {lang === "en" && renderMarkdownLines(story.content)}
          {lang === "zh" && renderMarkdownLines(story.contentZh)}
          {lang === "both" && (
            <>
              {renderMarkdownLines(story.content)}
              <hr className="my-4 border-dashed" style={{ borderColor: "var(--theme-border)" }} />
              <div style={{ color: "var(--theme-text-secondary)" }}>
                {renderMarkdownLines(story.contentZh)}
              </div>
            </>
          )}
        </div>

        {/* Fun Facts */}
        {story.funFacts.length > 0 && (
          <div className="mt-6 space-y-2">
            <h3 className="text-sm font-bold">{lang === "zh" ? "💡 你知道吗？" : "💡 Did You Know?"}</h3>
            {facts.map((fact, i) => {
              const revealed = revealedFacts.has(i);
              return (
                <button
                  key={i}
                  onClick={() => { if (!revealed) setRevealedFacts(prev => new Set(prev).add(i)); }}
                  className="w-full text-left rounded-lg p-3 text-xs transition-all whitespace-pre-line"
                  style={{
                    backgroundColor: revealed ? "var(--color-primary)" + "15" : "var(--theme-card-bg)",
                    border: `1px solid ${revealed ? "var(--color-primary)" + "40" : "var(--theme-border)"}`,
                    color: "var(--theme-text-secondary)",
                    cursor: revealed ? "default" : "pointer",
                  }}
                >
                  {revealed ? (
                    <span>{fact}</span>
                  ) : (
                    <span>{lang === "zh" ? `🎲 点击揭晓趣知识 #${i + 1}...` : `🎲 Tap to reveal fun fact #${i + 1}...`}</span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {story.tags.map(tag => {
            const zh = TAG_ZH[tag];
            const label = lang === "zh" ? (zh || tag) : lang === "both" ? (zh ? `${tag} · ${zh}` : tag) : tag;
            return (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--theme-card-bg)", color: "var(--theme-text-muted)", border: "1px solid var(--theme-border)" }}>
                #{label}
              </span>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

function TimelineBar({ stories, onSelect }: { stories: Chronicle[]; onSelect: (s: Chronicle) => void }) {
  const sorted = useMemo(() => [...stories].sort((a, b) => a.year - b.year), [stories]);
  const decades = useMemo(() => {
    const d = new Map<number, Chronicle[]>();
    sorted.forEach(s => {
      const decade = Math.floor(s.year / 10) * 10;
      if (!d.has(decade)) d.set(decade, []);
      d.get(decade)!.push(s);
    });
    return [...d.entries()].sort((a, b) => a[0] - b[0]);
  }, [sorted]);

  return (
    <div className="mb-4 rounded-xl p-3" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {decades.map(([decade, items]) => (
          <div key={decade} className="flex items-center gap-1">
            <span className="text-[9px] font-mono w-8 shrink-0" style={{ color: "var(--theme-text-muted)" }}>{decade}s</span>
            <div className="flex gap-1">
              {items.map(item => {
                const cat = CATEGORIES.find(c => c.key === item.category);
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelect(item)}
                    title={`${item.year}: ${item.title}`}
                    className="w-2.5 h-2.5 rounded-full opacity-80 hover:opacity-100 hover:ring-2 hover:ring-offset-1 transition-all"
                    style={{ backgroundColor: cat?.color || "#888", ["--tw-ring-color" as string]: cat?.color || "#888" }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LegendariesPage() {
  const [selected, setSelected] = useState<Chronicle | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState<Lang>("both");

  const filtered = useMemo(() => {
    let list = CHRONICLES;
    if (filter !== "all") list = list.filter(c => c.category === filter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.titleZh.includes(q) ||
        c.hook.toLowerCase().includes(q) ||
        c.tags.some(t => t.includes(q))
      );
    }
    return list.sort((a, b) => a.year - b.year);
  }, [filter, search]);

  const handleRandom = () => setSelected(getRandomChronicle());

  return (
    <div className="min-h-screen p-4 max-w-3xl mx-auto pb-20">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            📜 <span>Legendaries</span>
          </h1>
          <p className="text-xs mt-1" style={{ color: "var(--theme-text-secondary)" }}>
            Computer Science & Engineering 传奇 — Epic stories of computing history, legends, and the future
          </p>
        </div>
        <LangToggle lang={lang} onChange={setLang} />
      </div>

      {/* Random Story Button */}
      <button
        onClick={handleRandom}
        className="w-full mb-4 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
        style={{
          background: "linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 70%, #fff))",
          color: "var(--theme-bg)",
        }}
      >
        🎲 Today&apos;s Random Story · 今日随机故事
      </button>

      {/* Timeline */}
      <TimelineBar stories={CHRONICLES} onSelect={setSelected} />

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search stories..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-3 px-3 py-2 rounded-lg text-sm outline-none"
        style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)", color: "var(--theme-text)" }}
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <button
          onClick={() => setFilter("all")}
          className="text-[11px] px-2.5 py-1 rounded-full font-medium transition-all"
          style={{
            backgroundColor: filter === "all" ? "var(--color-primary)" : "var(--theme-card-bg)",
            color: filter === "all" ? "var(--theme-bg)" : "var(--theme-text-secondary)",
            border: `1px solid ${filter === "all" ? "var(--color-primary)" : "var(--theme-border)"}`,
          }}
        >
          All ({CHRONICLES.length})
        </button>
        {CATEGORIES.map(cat => {
          const count = CHRONICLES.filter(c => c.category === cat.key).length;
          return (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className="text-[11px] px-2.5 py-1 rounded-full font-medium transition-all"
              style={{
                backgroundColor: filter === cat.key ? cat.color : "var(--theme-card-bg)",
                color: filter === cat.key ? "#fff" : "var(--theme-text-secondary)",
                border: `1px solid ${filter === cat.key ? cat.color : "var(--theme-border)"}`,
              }}
            >
              {lang === "zh" ? `${cat.label.split(" ")[0]} ${cat.labelZh}` : lang === "both" ? `${cat.label} ${cat.labelZh}` : cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Story Grid */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-sm" style={{ color: "var(--theme-text-muted)" }}>
            No stories found. Try a different filter or search term.
          </div>
        ) : (
          filtered.map(story => (
            <StoryCard key={story.id} story={story} onClick={() => setSelected(story)} lang={lang} />
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-6 text-center text-[11px]" style={{ color: "var(--theme-text-muted)" }}>
        📜 {CHRONICLES.length} stories · ⏱ ~{CHRONICLES.reduce((s, c) => s + c.readMinutes, 0)} min total reading time
      </div>

      {/* Story Detail Modal */}
      <AnimatePresence>
        {selected && <StoryDetail story={selected} onClose={() => setSelected(null)} lang={lang} />}
      </AnimatePresence>
    </div>
  );
}
