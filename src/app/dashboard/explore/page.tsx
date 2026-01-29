"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// ═══ CPU Fetch-Decode-Execute Animation ═══
function CPUAnimation() {
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  const steps = [
    { phase: "FETCH", label: "📥 Fetch", desc: "CPU fetches the next instruction from memory", descCn: "CPU 从内存中获取下一条指令", highlight: "memory", color: "text-cyan-400" },
    { phase: "DECODE", label: "🔍 Decode", desc: "Control Unit analyzes what the instruction means", descCn: "控制单元分析指令的含义", highlight: "cu", color: "text-yellow-400" },
    { phase: "EXECUTE", label: "⚡ Execute", desc: "ALU performs the calculation", descCn: "ALU 执行运算，得到结果", highlight: "alu", color: "text-green-400" },
    { phase: "STORE", label: "💾 Store", desc: "Result is stored back to registers or memory", descCn: "结果写回寄存器或内存", highlight: "register", color: "text-purple-400" },
  ];

  const currentStep = steps[step % steps.length];

  const runCycle = () => {
    setIsRunning(true);
    setStep(0);
    let s = 0;
    const interval = setInterval(() => {
      s++;
      if (s >= steps.length) {
        clearInterval(interval);
        setIsRunning(false);
        setCycleCount((c) => c + 1);
      } else {
        setStep(s);
      }
    }, 1200);
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <div className="text-center text-xs text-slate-500 mb-4">
          CPU Cycle #{cycleCount + 1} — Fetch → Decode → Execute → Store
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Memory */}
          <motion.div
            animate={{
              borderColor: currentStep.highlight === "memory" ? "#00bfff" : "#374151",
              scale: currentStep.highlight === "memory" ? 1.05 : 1,
              boxShadow: currentStep.highlight === "memory" ? "0 0 20px rgba(0,191,255,0.3)" : "none",
            }}
            className="bg-slate-800 rounded-lg p-4 border-2 text-center"
          >
            <div className="text-2xl mb-2">🧠</div>
            <div className="text-xs font-bold">MEMORY (RAM)</div>
            <div className="text-[10px] text-gray-500">内存</div>
            <div className="text-[10px] text-slate-400 mt-1 terminal-text">
              ADD x, 5<br />MOV y, x<br />PRINT y
            </div>
          </motion.div>

          {/* CPU */}
          <div className="col-span-2 bg-slate-800 rounded-lg p-4 border-2 border-slate-600">
            <div className="text-center text-xs font-bold mb-3">🖥️ CPU</div>
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                animate={{
                  borderColor: currentStep.highlight === "cu" ? "#eab308" : "#374151",
                  scale: currentStep.highlight === "cu" ? 1.05 : 1,
                  boxShadow: currentStep.highlight === "cu" ? "0 0 20px rgba(234,179,8,0.3)" : "none",
                }}
                className="bg-slate-700 rounded p-3 border-2 text-center"
              >
                <div className="text-lg">🎛️</div>
                <div className="text-[10px] font-bold">Control Unit</div>
                <div className="text-[10px] text-gray-500">控制单元</div>
              </motion.div>
              <motion.div
                animate={{
                  borderColor: currentStep.highlight === "alu" ? "#22c55e" : "#374151",
                  scale: currentStep.highlight === "alu" ? 1.05 : 1,
                  boxShadow: currentStep.highlight === "alu" ? "0 0 20px rgba(34,197,94,0.3)" : "none",
                }}
                className="bg-slate-700 rounded p-3 border-2 text-center"
              >
                <div className="text-lg">🔢</div>
                <div className="text-[10px] font-bold">ALU</div>
                <div className="text-[10px] text-gray-500">算术逻辑单元</div>
              </motion.div>
              <motion.div
                animate={{
                  borderColor: currentStep.highlight === "register" ? "#a855f7" : "#374151",
                  scale: currentStep.highlight === "register" ? 1.05 : 1,
                  boxShadow: currentStep.highlight === "register" ? "0 0 20px rgba(168,85,247,0.3)" : "none",
                }}
                className="col-span-2 bg-slate-700 rounded p-3 border-2 text-center"
              >
                <div className="text-lg">📦</div>
                <div className="text-[10px] font-bold">Registers</div>
                <div className="text-[10px] text-gray-500">寄存器</div>
                <div className="text-[10px] text-slate-400 terminal-text">x=5, y=5</div>
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center"
          >
            <div className={`text-lg font-bold ${currentStep.color}`}>{currentStep.label}</div>
            <div className="text-sm text-slate-300">{currentStep.desc}</div>
            <div className="text-xs text-gray-500">{currentStep.descCn}</div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-4">
          {steps.map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: i === step ? 1.3 : 1 }}
              className={`w-3 h-3 rounded-full transition-colors ${i <= step ? "bg-green-500" : "bg-slate-700"}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={runCycle}
        disabled={isRunning}
        className="w-full py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 disabled:opacity-50 transition-colors"
      >
        {isRunning ? "⏳ Running cycle... 运行中..." : "▶ Run CPU Cycle · 运行 CPU 周期"}
      </button>
    </div>
  );
}

// ═══ Memory Visualization with Animation ═══
function MemoryVisualization() {
  const [variables, setVariables] = useState([
    { name: "name", value: '"William"', type: "str", address: "0x001" },
    { name: "age", value: "12", type: "int", address: "0x002" },
    { name: "score", value: "95.5", type: "float", address: "0x003" },
    { name: "is_scout", value: "True", type: "bool", address: "0x004" },
  ]);
  const [newVarName, setNewVarName] = useState("");
  const [newVarValue, setNewVarValue] = useState("");
  const [flash, setFlash] = useState<string | null>(null);

  const typeColors: Record<string, string> = {
    str: "bg-blue-500/20 border-blue-500/30 text-blue-400",
    int: "bg-green-500/20 border-green-500/30 text-green-400",
    float: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
    bool: "bg-purple-500/20 border-purple-500/30 text-purple-400",
  };

  const addVariable = () => {
    if (!newVarName.trim()) return;
    const val = newVarValue.trim() || "0";
    const type = /^".*"$/.test(val) ? "str" : /^\d+\.\d+$/.test(val) ? "float" : /^(True|False)$/.test(val) ? "bool" : "int";
    const addr = `0x${(variables.length + 1).toString(16).padStart(3, "0")}`;
    const newVar = { name: newVarName.trim(), value: val, type, address: addr };
    setVariables([...variables, newVar]);
    setFlash(addr);
    setTimeout(() => setFlash(null), 1000);
    setNewVarName("");
    setNewVarValue("");
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <div className="text-center text-sm text-slate-300 mb-1">📦 RAM — Variables in Memory</div>
        <div className="text-center text-xs text-gray-500 mb-4">内存中的变量</div>
        <div className="space-y-2">
          {variables.map((v, i) => (
            <motion.div
              key={v.address}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                boxShadow: flash === v.address ? "0 0 20px rgba(0,255,136,0.5)" : "none",
              }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-lg border ${typeColors[v.type]}`}
            >
              <div className="text-[10px] terminal-text text-slate-500 w-12">{v.address}</div>
              <div className="font-bold text-sm flex-1">{v.name}</div>
              <div className="terminal-text text-sm">{v.value}</div>
              <div className="text-[10px] px-2 py-0.5 bg-slate-700/50 rounded">{v.type}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add variable form */}
      <div className="flex gap-2">
        <input
          value={newVarName}
          onChange={(e) => setNewVarName(e.target.value)}
          placeholder="Variable name · 变量名"
          className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-green-500 terminal-text"
        />
        <input
          value={newVarValue}
          onChange={(e) => setNewVarValue(e.target.value)}
          placeholder="Value · 值"
          className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-green-500 terminal-text"
        />
        <button
          onClick={addVariable}
          className="px-4 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors text-sm"
        >
          ➕ Store · 存入
        </button>
      </div>
    </div>
  );
}

// ═══ Speed Comparison Visualization ═══
function SpeedComparison() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState<Record<string, number>>({});

  const components = [
    { name: "CPU Cache (L1)", speed: 1, color: "bg-red-500", label: "1 ns", labelCn: "最快！CPU 内部缓存" },
    { name: "RAM", speed: 10, color: "bg-yellow-500", label: "~100 ns", labelCn: "内存，程序运行的地方" },
    { name: "SSD", speed: 250, color: "bg-green-500", label: "~25,000 ns", labelCn: "固态硬盘，存文件" },
    { name: "HDD", speed: 5000, color: "bg-blue-500", label: "~5,000,000 ns", labelCn: "机械硬盘，老式存储" },
    { name: "Internet", speed: 50000, color: "bg-purple-500", label: "~50,000,000 ns", labelCn: "网络请求" },
  ];

  const runRace = () => {
    setRunning(true);
    setProgress({});
    const maxTime = 3000;

    components.forEach((comp) => {
      const duration = (comp.speed / 50000) * maxTime;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const p = Math.min(elapsed / duration, 1);
        setProgress((prev) => ({ ...prev, [comp.name]: p * 100 }));
        if (p < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });

    setTimeout(() => setRunning(false), maxTime + 100);
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <div className="text-center text-sm text-slate-300 mb-1">⚡ Speed Race</div>
        <div className="text-center text-xs text-gray-500 mb-4">速度大比拼 — 看看不同存储设备的速度差异！</div>

        <div className="space-y-3">
          {components.map((comp) => (
            <div key={comp.name} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-300">{comp.name}</span>
                <span className="text-slate-500">{comp.label}</span>
              </div>
              <div className="h-6 bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                  className={`h-full ${comp.color} rounded-full`}
                  style={{ width: `${progress[comp.name] || 0}%` }}
                />
                {(progress[comp.name] || 0) >= 100 && (
                  <span className="absolute right-2 top-0.5 text-xs">🏁</span>
                )}
              </div>
              <div className="text-[10px] text-gray-500">{comp.labelCn}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={runRace}
        disabled={running}
        className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 disabled:opacity-50 transition-colors"
      >
        {running ? "🏃 Racing... 比赛中..." : "🏁 Start Speed Race! · 开始速度比赛！"}
      </button>
    </div>
  );
}

// ═══ Process Scheduling Animation ═══
function ProcessScheduler() {
  const [running, setRunning] = useState(false);
  const [currentProcess, setCurrentProcess] = useState(0);
  const [timeSlice, setTimeSlice] = useState(0);

  const processes = [
    { name: "🎮 Game", color: "bg-red-500", slices: 3 },
    { name: "🎵 Music", color: "bg-blue-500", slices: 1 },
    { name: "💬 Chat", color: "bg-green-500", slices: 2 },
    { name: "📥 Download", color: "bg-yellow-500", slices: 1 },
  ];

  const [schedule, setSchedule] = useState<{ proc: number; slice: number }[]>([]);

  const runScheduler = () => {
    setRunning(true);
    setSchedule([]);
    setCurrentProcess(0);
    setTimeSlice(0);

    const totalSlices = 12;
    let idx = 0;
    const sched: { proc: number; slice: number }[] = [];
    for (let i = 0; i < totalSlices; i++) {
      sched.push({ proc: idx % processes.length, slice: i });
      idx++;
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i >= sched.length) {
        clearInterval(interval);
        setRunning(false);
        return;
      }
      setSchedule((prev) => [...prev, sched[i]]);
      setCurrentProcess(sched[i].proc);
      setTimeSlice(i);
      i++;
    }, 500);
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <div className="text-center text-sm text-slate-300 mb-1">⏱️ Process Scheduling</div>
        <div className="text-center text-xs text-gray-500 mb-4">进程调度 — CPU 如何在多个程序间快速切换（时间片轮转）</div>

        {/* Processes */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {processes.map((p, i) => (
            <motion.div
              key={i}
              animate={{
                scale: currentProcess === i && running ? 1.1 : 1,
                borderColor: currentProcess === i && running ? "#00ff88" : "#374151",
              }}
              className="text-center p-3 bg-slate-800 rounded-lg border-2"
            >
              <div className="text-2xl">{p.name.split(" ")[0]}</div>
              <div className="text-xs mt-1">{p.name.split(" ")[1]}</div>
              {currentProcess === i && running && (
                <div className="text-[10px] text-green-400 mt-1">▶ Running</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="text-xs text-slate-500 mb-1">CPU Timeline:</div>
        <div className="flex gap-1 flex-wrap">
          {schedule.map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`w-8 h-8 ${processes[s.proc].color} rounded flex items-center justify-center text-xs font-bold text-black`}
            >
              {processes[s.proc].name.split(" ")[0]}
            </motion.div>
          ))}
          {schedule.length === 0 && (
            <div className="text-slate-600 text-sm">Click start to see scheduling... 点击开始查看调度</div>
          )}
        </div>
      </div>

      <button
        onClick={runScheduler}
        disabled={running}
        className="w-full py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 disabled:opacity-50 transition-colors"
      >
        {running ? "⏳ Scheduling... 调度中..." : "▶ Start Process Scheduler · 启动进程调度器"}
      </button>
    </div>
  );
}

// ═══ Knowledge Cards ═══
const KNOWLEDGE_CARDS = [
  {
    id: "cpu", icon: "🖥️", title: "CPU — The Brain", subtitle: "中央处理器",
    content: "The CPU is the computer's brain! It executes all calculations and instructions. Modern CPUs can execute billions of instructions per second!",
    contentCn: "CPU 是计算机的大脑！它执行所有的计算和指令。现代 CPU 每秒能执行数十亿条指令！",
    funFact: "💡 Your Mac's M-series chip has about 20 billion transistors — more than all people on Earth!",
    funFactCn: "你的 Mac 的 M 系列芯片有约 200 亿个晶体管——比地球上所有人口还多！",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  },
  {
    id: "ram", icon: "🧠", title: "RAM — Short-term Memory", subtitle: "随机访问内存",
    content: "RAM is like your short-term memory — super fast to read and write, but forgets everything when the power is off!",
    contentCn: "RAM 就像你的短期记忆——读写超快，但断电就忘记一切！",
    funFact: "💡 RAM is about 100,000 times faster than a hard drive!",
    funFactCn: "RAM 的速度大约是硬盘的 100,000 倍！",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  },
  {
    id: "ssd", icon: "💾", title: "SSD/HDD — Long-term Memory", subtitle: "存储设备",
    content: "The hard drive is the computer's long-term memory. Files, photos, and programs are all stored here.",
    contentCn: "硬盘是计算机的长期记忆。文件、照片、程序都存在这里。",
    funFact: "💡 The first hard drive in 1956 weighed a ton and stored only 5MB — not even one song!",
    funFactCn: "1956年第一个硬盘重一吨，只存 5MB——一首歌都存不下！",
    color: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  },
  {
    id: "binary", icon: "0️⃣1️⃣", title: "Binary — Computer Language", subtitle: "二进制",
    content: "Computers only understand 0 and 1! All text, images, and videos are combinations of 0s and 1s.",
    contentCn: "计算机只懂 0 和 1！所有文字、图片、视频都是 0 和 1 的组合。",
    funFact: "💡 The letter 'A' = 01000001. Your name needs dozens of 0s and 1s!",
    funFactCn: "字母 'A' = 01000001。你的名字需要几十个 0 和 1！",
    color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
  },
];

export default function ExplorePage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("cards");

  const tabs = [
    { id: "cards", icon: "🃏", label: "Knowledge Cards", labelCn: "知识卡片" },
    { id: "cpu", icon: "🖥️", label: "CPU Simulator", labelCn: "CPU 模拟器" },
    { id: "memory", icon: "🧠", label: "Memory Visualizer", labelCn: "内存可视化" },
    { id: "speed", icon: "⚡", label: "Speed Race", labelCn: "速度比赛" },
    { id: "scheduler", icon: "⏱️", label: "Process Scheduler", labelCn: "进程调度" },
  ];

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-1">🔬 Computer Explorer</h1>
        <p className="text-sm text-gray-400 mb-1">计算机探秘</p>
        <p className="text-slate-400 mb-6">Explore how computers work! 探索计算机的奥秘 🧪</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600"
            }`}
          >
            <span>{tab.icon} {tab.label}</span>
            <span className="block text-[10px] text-gray-500">{tab.labelCn}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "cards" && (
          <motion.div key="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {KNOWLEDGE_CARDS.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
                className={`bg-gradient-to-br ${card.color} border rounded-xl p-5 cursor-pointer`}
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-bold mb-1">{card.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{card.subtitle}</p>
                <p className="text-sm text-slate-300">{card.content}</p>
                <p className="text-xs text-gray-500 mt-1">{card.contentCn}</p>
                <AnimatePresence>
                  {activeCard === card.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-slate-600/50"
                    >
                      <p className="text-sm">{card.funFact}</p>
                      <p className="text-xs text-gray-500 mt-1">{card.funFactCn}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
        {activeTab === "cpu" && (
          <motion.div key="cpu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CPUAnimation />
          </motion.div>
        )}
        {activeTab === "memory" && (
          <motion.div key="memory" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MemoryVisualization />
          </motion.div>
        )}
        {activeTab === "speed" && (
          <motion.div key="speed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SpeedComparison />
          </motion.div>
        )}
        {activeTab === "scheduler" && (
          <motion.div key="scheduler" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProcessScheduler />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
