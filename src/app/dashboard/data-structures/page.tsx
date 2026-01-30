"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

const ArrayVisualizer = dynamic(() => import("@/components/data-structures/ArrayVisualizer"), { ssr: false });
const ListVisualizer = dynamic(() => import("@/components/data-structures/ListVisualizer"), { ssr: false });
const LinkedListVisualizer = dynamic(() => import("@/components/data-structures/LinkedListVisualizer"), { ssr: false });
const StackVisualizer = dynamic(() => import("@/components/data-structures/StackVisualizer"), { ssr: false });
const QueueVisualizer = dynamic(() => import("@/components/data-structures/QueueVisualizer"), { ssr: false });
const HashMapVisualizer = dynamic(() => import("@/components/data-structures/HashMapVisualizer"), { ssr: false });
const BSTVisualizer = dynamic(() => import("@/components/data-structures/BSTVisualizer"), { ssr: false });
const SortingArena = dynamic(() => import("@/components/data-structures/SortingArena"), { ssr: false });

const TABS = [
  { id: "array", icon: "📦", label: "Array", labelCn: "数组" },
  { id: "list", icon: "📝", label: "List", labelCn: "列表" },
  { id: "linked-list", icon: "🔗", label: "Linked List", labelCn: "链表" },
  { id: "stack", icon: "📚", label: "Stack", labelCn: "栈" },
  { id: "queue", icon: "🎟️", label: "Queue", labelCn: "队列" },
  { id: "hashmap", icon: "📖", label: "HashMap", labelCn: "哈希表" },
  { id: "bst", icon: "🌳", label: "BST", labelCn: "二叉搜索树" },
  { id: "sorting", icon: "🏆", label: "Sorting", labelCn: "排序" },
];

export default function DataStructuresPage() {
  const [activeTab, setActiveTab] = useState("array");

  return (
    <div className="min-h-screen p-4 pt-16 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-1">
          📦 Data Structure Playground
        </h1>
        <p className="text-sm text-[var(--theme-text-muted)] mb-4">
          Interactive visualizations — click, explore, learn! 互动可视化——点击、探索、学习！
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex gap-1 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors border ${
              activeTab === tab.id
                ? "border-[var(--theme-primary)] text-[var(--theme-primary)] bg-[var(--theme-primary)]/10"
                : "border-transparent text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-card-bg)]"
            }`}
          >
            <span>{tab.icon}</span>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium">{tab.label}</span>
              <span className="text-[10px] text-[var(--theme-text-muted)]">{tab.labelCn}</span>
            </div>
          </button>
        ))}
      </div>

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
          {activeTab === "sorting" && <SortingArena />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
