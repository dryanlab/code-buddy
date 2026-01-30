"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getProgress, type UserProgress } from "@/lib/progress-store";
import AdventureMap from "@/components/AdventureMap";

export default function CoursesPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 pt-16 md:p-6 md:pt-16 max-w-7xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold mb-1">🗺️ World of Code</h1>
          <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>代码世界冒险地图</p>
          <p className="text-sm mt-1" style={{ color: "var(--theme-text-secondary)" }}>
            Explore the map and tap any location to begin your adventure! 探索地图，点击任意地点开始冒险！
          </p>
        </motion.div>
      </div>

      {/* Map */}
      <div className="flex-1 px-4 pb-4 md:px-6 md:pb-6 max-w-7xl mx-auto w-full">
        <AdventureMap progress={progress} />
      </div>
    </div>
  );
}
