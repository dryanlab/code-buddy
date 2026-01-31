"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

interface TutorialStep {
  target: string | null; // data-tutorial attribute value, null = center modal
  title: string;
  titleCn: string;
  description: string;
  descriptionCn: string;
  buttonText?: string;
  buttonTextCn?: string;
}

const STEPS: TutorialStep[] = [
  {
    target: null,
    title: "Welcome to Code Buddy!",
    titleCn: "欢迎来到 Code Buddy！",
    description: "Let's take a quick tour of everything you can do here.",
    descriptionCn: "让我们快速了解一下你可以做的所有事情。",
    buttonText: "Let's Go",
    buttonTextCn: "开始吧",
  },
  {
    target: "course-map",
    title: "Course Map",
    titleCn: "课程地图",
    description: "Start your journey here! Pick a course and follow the adventure map.",
    descriptionCn: "从这里开始你的旅程！选择课程，跟随冒险地图。",
  },
  {
    target: "lessons",
    title: "Lessons",
    titleCn: "课程",
    description: "Each lesson teaches concepts step by step with interactive exercises.",
    descriptionCn: "每节课都有互动练习，一步步学习编程概念。",
  },
  {
    target: "code-lab",
    title: "Code Lab",
    titleCn: "代码实验室",
    description: "Write and run code right in your browser! Your code auto-saves so you never lose progress.",
    descriptionCn: "在浏览器里写代码运行！代码自动保存，不会丢失进度。",
  },
  {
    target: "ai-buddy",
    title: "AI Buddy",
    titleCn: "AI 助手",
    description: "Stuck? Ask AI Buddy for help! It explains concepts and helps debug your code.",
    descriptionCn: "遇到困难？问AI助手！它能解释概念，帮你调试代码。",
  },
  {
    target: "explore-cs",
    title: "Explore CS",
    titleCn: "计算机探秘",
    description: "Discover how computer science connects to the real world.",
    descriptionCn: "探索计算机科学如何改变现实世界。",
  },
  {
    target: "ds-playground",
    title: "DS Playground",
    titleCn: "数据结构实验室",
    description: "Visualize data structures with interactive animations.",
    descriptionCn: "用动画可视化数据结构。",
  },
  {
    target: null,
    title: "You're All Set!",
    titleCn: "准备就绪！",
    description: "Start with the Course Map or jump into Code Lab. Have fun coding! 🚀",
    descriptionCn: "从课程地图开始，或直接进入代码实验室。编程快乐！🚀",
    buttonText: "Start Learning",
    buttonTextCn: "开始学习",
  },
];

interface TutorialProps {
  visible: boolean;
  onClose: () => void;
  forceSidebarOpen: (open: boolean) => void;
}

export default function Tutorial({ visible, onClose, forceSidebarOpen }: TutorialProps) {
  const [step, setStep] = useState(0);
  const [spotlightRect, setSpotlightRect] = useState<DOMRect | null>(null);
  const { theme } = useTheme();
  const recalcTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentStep = STEPS[step];
  const isModal = !currentStep.target;
  const isSidebarStep = !!currentStep.target;

  const finish = useCallback(() => {
    localStorage.setItem("code-buddy-tutorial-done", "true");
    forceSidebarOpen(false);
    onClose();
  }, [onClose, forceSidebarOpen]);

  // Force sidebar open for sidebar-targeting steps
  useEffect(() => {
    if (!visible) return;
    if (isSidebarStep) {
      forceSidebarOpen(true);
    }
  }, [visible, step, isSidebarStep, forceSidebarOpen]);

  // Calculate spotlight position
  useEffect(() => {
    if (!visible || isModal) {
      setSpotlightRect(null);
      return;
    }

    const calculate = () => {
      const el = document.querySelector(`[data-tutorial="${currentStep.target}"]`);
      if (el) {
        const rect = el.getBoundingClientRect();
        setSpotlightRect(rect);
      } else {
        setSpotlightRect(null);
      }
    };

    // Delay to allow sidebar animation
    recalcTimer.current = setTimeout(calculate, 300);
    return () => {
      if (recalcTimer.current) clearTimeout(recalcTimer.current);
    };
  }, [visible, step, isModal, currentStep.target]);

  // Recalculate on resize
  useEffect(() => {
    if (!visible) return;
    const onResize = () => {
      if (!isModal && currentStep.target) {
        const el = document.querySelector(`[data-tutorial="${currentStep.target}"]`);
        if (el) setSpotlightRect(el.getBoundingClientRect());
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [visible, isModal, currentStep.target]);

  if (!visible) return null;

  const pad = 8;
  const spotlightStyle = spotlightRect
    ? {
        clipPath: `polygon(
          0% 0%, 0% 100%, 
          ${spotlightRect.left - pad}px 100%, 
          ${spotlightRect.left - pad}px ${spotlightRect.top - pad}px, 
          ${spotlightRect.right + pad}px ${spotlightRect.top - pad}px, 
          ${spotlightRect.right + pad}px ${spotlightRect.bottom + pad}px, 
          ${spotlightRect.left - pad}px ${spotlightRect.bottom + pad}px, 
          ${spotlightRect.left - pad}px 100%, 
          100% 100%, 100% 0%
        )`,
      }
    : {};

  // Position tooltip near spotlight
  const getTooltipStyle = (): React.CSSProperties => {
    if (isModal || !spotlightRect) {
      return {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "400px",
        width: "90vw",
      };
    }
    // Position to the right of sidebar item, or below on small screens
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    if (isMobile) {
      return {
        position: "fixed",
        top: `${Math.min(spotlightRect.bottom + pad + 12, window.innerHeight - 250)}px`,
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "340px",
        width: "85vw",
      };
    }
    return {
      position: "fixed",
      top: `${Math.max(spotlightRect.top - 10, 20)}px`,
      left: `${spotlightRect.right + pad + 16}px`,
      maxWidth: "360px",
    };
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="tutorial-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200]"
        >
          {/* Dark overlay with spotlight cutout */}
          <div
            className="absolute inset-0 bg-black/70 transition-all duration-300"
            style={spotlightStyle}
            onClick={finish}
          />

          {/* Spotlight border glow */}
          {spotlightRect && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute rounded-xl pointer-events-none"
              style={{
                top: spotlightRect.top - pad,
                left: spotlightRect.left - pad,
                width: spotlightRect.width + pad * 2,
                height: spotlightRect.height + pad * 2,
                boxShadow: `0 0 0 3px ${theme.colors.primary}60, 0 0 20px ${theme.colors.primary}30`,
              }}
            />
          )}

          {/* Tooltip card */}
          <motion.div
            key={`tooltip-${step}`}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="rounded-2xl border shadow-2xl p-6 z-[201]"
            style={{
              ...getTooltipStyle(),
              backgroundColor: theme.colors.cardBg,
              borderColor: theme.colors.border,
              color: theme.colors.textPrimary,
            }}
          >
            {/* Step indicator */}
            <div className="text-xs font-medium mb-3" style={{ color: theme.colors.textMuted }}>
              {step + 1} / {STEPS.length}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-1" style={{ color: theme.colors.textPrimary }}>
              {currentStep.title}
            </h3>
            <p className="text-sm mb-3" style={{ color: theme.colors.primary }}>
              {currentStep.titleCn}
            </p>

            {/* Description */}
            <p className="text-sm mb-1" style={{ color: theme.colors.textSecondary }}>
              {currentStep.description}
            </p>
            <p className="text-xs mb-5" style={{ color: theme.colors.textMuted }}>
              {currentStep.descriptionCn}
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={finish}
                className="text-sm px-3 py-1.5 rounded-lg transition-colors hover:opacity-80"
                style={{ color: theme.colors.textMuted }}
              >
                Skip · 跳过
              </button>

              {step === STEPS.length - 1 ? (
                <button
                  onClick={finish}
                  className="text-sm font-bold px-5 py-2 rounded-xl transition-opacity hover:opacity-90"
                  style={{
                    background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primaryLight || theme.colors.primary})`,
                    color: theme.colors.bg,
                  }}
                >
                  {currentStep.buttonText} · {currentStep.buttonTextCn}
                </button>
              ) : step === 0 ? (
                <button
                  onClick={() => setStep(1)}
                  className="text-sm font-bold px-5 py-2 rounded-xl transition-opacity hover:opacity-90"
                  style={{
                    background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primaryLight || theme.colors.primary})`,
                    color: theme.colors.bg,
                  }}
                >
                  {currentStep.buttonText} · {currentStep.buttonTextCn}
                </button>
              ) : (
                <button
                  onClick={() => setStep(s => s + 1)}
                  className="text-sm font-bold px-5 py-2 rounded-xl transition-opacity hover:opacity-90"
                  style={{
                    background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primaryLight || theme.colors.primary})`,
                    color: theme.colors.bg,
                  }}
                >
                  Next · 下一步
                </button>
              )}
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full transition-colors"
                  style={{
                    backgroundColor: i === step ? theme.colors.primary : `${theme.colors.textMuted}40`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
