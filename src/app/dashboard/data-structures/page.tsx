"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { isPreviewMode, PREVIEW_ALLOWED_DS_TABS } from "@/lib/preview-mode";
import SignUpModal from "@/components/SignUpModal";

const ArrayVisualizer = dynamic(() => import("@/components/data-structures/ArrayVisualizer"), { ssr: false });
const ListVisualizer = dynamic(() => import("@/components/data-structures/ListVisualizer"), { ssr: false });
const LinkedListVisualizer = dynamic(() => import("@/components/data-structures/LinkedListVisualizer"), { ssr: false });
const StackVisualizer = dynamic(() => import("@/components/data-structures/StackVisualizer"), { ssr: false });
const QueueVisualizer = dynamic(() => import("@/components/data-structures/QueueVisualizer"), { ssr: false });
const HashMapVisualizer = dynamic(() => import("@/components/data-structures/HashMapVisualizer"), { ssr: false });
const BSTVisualizer = dynamic(() => import("@/components/data-structures/BSTVisualizer"), { ssr: false });
const GraphVisualizer = dynamic(() => import("@/components/data-structures/GraphVisualizer"), { ssr: false });
const SortingArena = dynamic(() => import("@/components/data-structures/SortingArena"), { ssr: false });

const TABS = [
  { id: "array", icon: "📦", label: "Array", labelCn: "数组" },
  { id: "list", icon: "📝", label: "List", labelCn: "列表" },
  { id: "linked-list", icon: "🔗", label: "Linked List", labelCn: "链表" },
  { id: "stack", icon: "📚", label: "Stack", labelCn: "栈" },
  { id: "queue", icon: "🎟️", label: "Queue", labelCn: "队列" },
  { id: "hashmap", icon: "📖", label: "HashMap", labelCn: "哈希表" },
  { id: "bst", icon: "🌳", label: "BST", labelCn: "二叉搜索树" },
  { id: "graph", icon: "🕸️", label: "Graph", labelCn: "图" },
  { id: "sorting", icon: "🏆", label: "Sorting", labelCn: "排序" },
];

export default function DataStructuresPage() {
  const [activeTab, setActiveTab] = useState("array");
  const [preview, setPreview] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    setPreview(isPreviewMode());
    // Auto-select tab from URL hash fragment
    const hash = window.location.hash.replace("#", "");
    if (hash && TABS.some(t => t.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  return (
    <div className="min-h-screen p-4 pt-16 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(202,138,4,0.15)", color: "#a16207" }}>
            🔜 Coming Soon Track · 即将推出
          </span>
          <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(59,130,246,0.15)", color: "#3b82f6" }}>
            Wave 1 · 第一期
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-1">
          📦 Data Structure Playground
        </h1>
        <p className="text-sm text-[var(--theme-text-muted)] mb-2">
          Interactive visualizations — click, explore, learn! 互动可视化——点击、探索、学习！
        </p>

        {/* Track info banner */}
        <div className="rounded-xl p-4 mb-4" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1))", border: "1px solid var(--theme-border)" }}>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 min-w-0">
              <p className="text-sm" style={{ color: "var(--theme-text-secondary)" }}>
                📖 <strong>18 lessons</strong> planned across 4 modules: Lists & Stacks, Queues & Trees, Graphs & Maps, Projects
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--theme-text-muted)" }}>
                🔗 Prerequisite: Python Areas 1-3 · 前置要求：Python 前三个领域
              </p>
            </div>
            <span className="text-3xl">📦</span>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--theme-text-muted)" }}>
            🎮 Meanwhile, explore the interactive playground below! 先来体验互动可视化吧！
          </p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex gap-1 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {TABS.map(tab => {
          const tabLocked = preview && !PREVIEW_ALLOWED_DS_TABS.includes(tab.id);
          return (
            <button
              key={tab.id}
              onClick={() => tabLocked ? setShowSignUpModal(true) : setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors border ${
                activeTab === tab.id
                  ? "border-[var(--theme-primary)] text-[var(--theme-primary)] bg-[var(--theme-primary)]/10"
                  : "border-transparent text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-card-bg)]"
              }`}
              style={{ opacity: tabLocked ? 0.45 : 1 }}
            >
              <span>{tabLocked ? "🔒" : tab.icon}</span>
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium">{tab.label}</span>
                <span className="text-[10px] text-[var(--theme-text-muted)]">{tabLocked ? "Sign up · 注册" : tab.labelCn}</span>
              </div>
            </button>
          );
        })}
      </div>
      <SignUpModal open={showSignUpModal} onClose={() => setShowSignUpModal(false)} />

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "array" && <ArrayVisualizer />}
          {activeTab === "list" && <ListVisualizer />}
          {activeTab === "linked-list" && <LinkedListVisualizer />}
          {activeTab === "stack" && <StackVisualizer />}
          {activeTab === "queue" && <QueueVisualizer />}
          {activeTab === "hashmap" && <HashMapVisualizer />}
          {activeTab === "bst" && <BSTVisualizer />}
          {activeTab === "graph" && <GraphVisualizer />}
          {activeTab === "sorting" && <SortingArena />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
