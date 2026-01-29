"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

interface CelebrationProps {
  type?: "lesson" | "badge" | "levelup" | "module";
  xp?: number;
  badgeName?: string;
  badgeIcon?: string;
  levelName?: string;
}

const MESSAGES = {
  lesson: { emoji: "🎉", title: "Lesson Complete!", subtitle: "课程完成！", color: "text-green-400" },
  badge: { emoji: "🏅", title: "Badge Earned!", subtitle: "获得徽章！", color: "text-yellow-400" },
  levelup: { emoji: "⬆️", title: "Level Up!", subtitle: "升级了！", color: "text-cyan-400" },
  module: { emoji: "🏆", title: "Module Complete!", subtitle: "模块完成！", color: "text-purple-400" },
};

export default function Celebration({ type = "lesson", xp, badgeName, badgeIcon, levelName }: CelebrationProps) {
  useEffect(() => {
    import("canvas-confetti").then((confetti) => {
      const fire = confetti.default;
      fire({ particleCount: 80, spread: 70, origin: { x: 0.2, y: 0.6 } });
      fire({ particleCount: 80, spread: 70, origin: { x: 0.8, y: 0.6 } });
      setTimeout(() => {
        fire({ particleCount: 50, spread: 100, origin: { x: 0.5, y: 0.5 } });
      }, 300);
      if (type === "module") {
        setTimeout(() => {
          fire({ particleCount: 100, spread: 120, origin: { x: 0.5, y: 0.3 } });
        }, 600);
      }
    });
  }, [type]);

  const msg = MESSAGES[type];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="text-8xl mb-4">{badgeIcon || msg.emoji}</div>
        <div className={`text-3xl font-bold ${msg.color}`}>{msg.title}</div>
        <div className="text-sm text-gray-400">{msg.subtitle}</div>
        {badgeName && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-yellow-300 mt-2 font-semibold"
          >
            {badgeName}
          </motion.div>
        )}
        {levelName && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-cyan-300 mt-2 font-semibold"
          >
            {levelName}
          </motion.div>
        )}
        {xp && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-green-400 mt-2"
          >
            +{xp} XP!
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
