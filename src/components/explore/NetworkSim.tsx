"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Step {
  label: string;
  labelCn: string;
  desc: string;
  descCn: string;
  from: number;
  to: number;
  color: string;
}

const STEPS: Step[] = [
  { label: "DNS Lookup", labelCn: "DNS 查询", desc: "Finding the server's IP address...", descCn: "查找服务器的 IP 地址...", from: 0, to: 1, color: "bg-yellow-500" },
  { label: "DNS Response", labelCn: "DNS 响应", desc: "Found it! IP: 142.250.80.46", descCn: "找到了！IP: 142.250.80.46", from: 1, to: 0, color: "bg-yellow-400" },
  { label: "TCP SYN", labelCn: "TCP 握手1", desc: "Hey server, can we talk? (SYN)", descCn: "嘿服务器，我们能聊聊吗？(SYN)", from: 0, to: 2, color: "bg-blue-500" },
  { label: "TCP SYN-ACK", labelCn: "TCP 握手2", desc: "Sure! I'm ready! (SYN-ACK)", descCn: "当然！我准备好了！(SYN-ACK)", from: 2, to: 0, color: "bg-blue-400" },
  { label: "TCP ACK", labelCn: "TCP 握手3", desc: "Great, let's go! (ACK) — 3-way handshake done!", descCn: "太好了，开始吧！(ACK) — 三次握手完成！", from: 0, to: 2, color: "bg-blue-300" },
  { label: "HTTP GET", labelCn: "HTTP 请求", desc: "GET /index.html — Please send me this page!", descCn: "GET /index.html — 请把这个页面发给我！", from: 0, to: 2, color: "bg-green-500" },
  { label: "HTTP 200 OK", labelCn: "HTTP 响应", desc: "Here's your page! 200 OK 📄", descCn: "这是你的页面！200 OK 📄", from: 2, to: 0, color: "bg-green-400" },
];

const NODES = [
  { emoji: "💻", label: "Your Computer", labelCn: "你的电脑" },
  { emoji: "📋", label: "DNS Server", labelCn: "DNS 服务器" },
  { emoji: "🌐", label: "Web Server", labelCn: "网站服务器" },
];

export default function NetworkSim() {
  const [running, setRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [packetPos, setPacketPos] = useState<{ from: number; to: number } | null>(null);

  const runSimulation = () => {
    setRunning(true);
    setCurrentStep(-1);
    setCompletedSteps([]);
    setPacketPos(null);

    STEPS.forEach((step, i) => {
      setTimeout(() => {
        setCurrentStep(i);
        setPacketPos({ from: step.from, to: step.to });
        setTimeout(() => {
          setCompletedSteps((prev) => [...prev, i]);
          setPacketPos(null);
        }, 600);
      }, i * 1200);
    });

    setTimeout(() => {
      setRunning(false);
      setCurrentStep(STEPS.length);
    }, STEPS.length * 1200 + 200);
  };

  const nodePositions = [0, 50, 100]; // percentage positions

  return (
    <div className="space-y-4">
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-6 border border-[var(--theme-border)]">
        <div className="text-center text-sm text-[var(--theme-text-secondary)] mb-1">🌐 Network Simulation</div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">网络模拟 — 看看访问网页时发生了什么！</div>

        {/* Network nodes */}
        <div className="flex justify-between items-center mb-6 px-4 relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-[var(--theme-border)]" />

          {NODES.map((node, i) => (
            <motion.div
              key={i}
              animate={{
                scale: packetPos && (packetPos.from === i || packetPos.to === i) ? 1.1 : 1,
                borderColor:
                  packetPos && packetPos.to === i
                    ? "#22c55e"
                    : packetPos && packetPos.from === i
                    ? "#3b82f6"
                    : "#374151",
              }}
              className="relative z-10 text-center p-3 bg-[var(--theme-card-bg)] rounded-xl border-2 min-w-[80px]"
            >
              <div className="text-3xl mb-1">{node.emoji}</div>
              <div className="text-[10px] font-bold">{node.label}</div>
              <div className="text-[10px] text-[var(--theme-text-muted)]">{node.labelCn}</div>
            </motion.div>
          ))}

          {/* Animated packet */}
          <AnimatePresence>
            {packetPos && currentStep >= 0 && (
              <motion.div
                key={currentStep}
                initial={{ left: `${nodePositions[packetPos.from]}%`, opacity: 1 }}
                animate={{ left: `${nodePositions[packetPos.to]}%`, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-6 h-6 ${STEPS[currentStep]?.color} rounded flex items-center justify-center text-[10px] font-bold text-black shadow-lg`}
              >
                📦
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Steps log */}
        <div className="space-y-1 max-h-60 overflow-y-auto">
          {completedSteps.map((stepIdx) => {
            const step = STEPS[stepIdx];
            return (
              <motion.div
                key={stepIdx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 p-2 bg-black/20 rounded text-xs"
              >
                <span className={`w-2 h-2 rounded-full ${step.color}`} />
                <span className="font-bold text-[var(--theme-text-secondary)] w-28">{step.label}</span>
                <span className="text-[var(--theme-text-muted)] flex-1">{step.desc}</span>
              </motion.div>
            );
          })}
          {currentStep >= STEPS.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center p-3 text-green-400 text-sm font-bold"
            >
              ✅ Page loaded! 页面加载完成！ ({(STEPS.length * 0.03).toFixed(1)}s in real life · 现实中约{(STEPS.length * 0.03).toFixed(1)}秒)
            </motion.div>
          )}
        </div>
      </div>

      <button
        onClick={runSimulation}
        disabled={running}
        className="w-full py-3 bg-blue-500 text-black font-bold rounded-lg hover:bg-blue-400 disabled:opacity-50 transition-colors"
      >
        {running ? "🌐 Sending packets... 发送数据包中..." : "▶ Visit a Website! · 访问一个网站！"}
      </button>
    </div>
  );
}
