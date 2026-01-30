"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { isPreviewMode, PREVIEW_ALLOWED_EXPLORE_TABS } from "@/lib/preview-mode";
import SignUpModal from "@/components/SignUpModal";

const BinaryLab = dynamic(() => import("@/components/explore/BinaryLab"), { ssr: false });
const CryptoLab = dynamic(() => import("@/components/explore/CryptoLab"), { ssr: false });
const PixelArt = dynamic(() => import("@/components/explore/PixelArt"), { ssr: false });
const NetworkSim = dynamic(() => import("@/components/explore/NetworkSim"), { ssr: false });

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
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-6 border border-[var(--theme-border)]">
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">
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
            className="bg-[var(--theme-card-bg)] rounded-lg p-4 border-2 text-center"
          >
            <div className="text-2xl mb-2">🧠</div>
            <div className="text-xs font-bold">MEMORY (RAM)</div>
            <div className="text-[10px] text-[var(--theme-text-muted)]">内存</div>
            <div className="text-[10px] text-[var(--theme-text-secondary)] mt-1 terminal-text">
              ADD x, 5<br />MOV y, x<br />PRINT y
            </div>
          </motion.div>

          {/* CPU */}
          <div className="col-span-2 bg-[var(--theme-card-bg)] rounded-lg p-4 border-2 border-[var(--theme-border)]">
            <div className="text-center text-xs font-bold mb-3">🖥️ CPU</div>
            <div className="grid grid-cols-2 gap-3">
              <motion.div
                animate={{
                  borderColor: currentStep.highlight === "cu" ? "#eab308" : "#374151",
                  scale: currentStep.highlight === "cu" ? 1.05 : 1,
                  boxShadow: currentStep.highlight === "cu" ? "0 0 20px rgba(234,179,8,0.3)" : "none",
                }}
                className="bg-[var(--theme-card-bg)] rounded p-3 border-2 text-center"
              >
                <div className="text-lg">🎛️</div>
                <div className="text-[10px] font-bold">Control Unit</div>
                <div className="text-[10px] text-[var(--theme-text-muted)]">控制单元</div>
              </motion.div>
              <motion.div
                animate={{
                  borderColor: currentStep.highlight === "alu" ? "#22c55e" : "#374151",
                  scale: currentStep.highlight === "alu" ? 1.05 : 1,
                  boxShadow: currentStep.highlight === "alu" ? "0 0 20px rgba(34,197,94,0.3)" : "none",
                }}
                className="bg-[var(--theme-card-bg)] rounded p-3 border-2 text-center"
              >
                <div className="text-lg">🔢</div>
                <div className="text-[10px] font-bold">ALU</div>
                <div className="text-[10px] text-[var(--theme-text-muted)]">算术逻辑单元</div>
              </motion.div>
              <motion.div
                animate={{
                  borderColor: currentStep.highlight === "register" ? "#a855f7" : "#374151",
                  scale: currentStep.highlight === "register" ? 1.05 : 1,
                  boxShadow: currentStep.highlight === "register" ? "0 0 20px rgba(168,85,247,0.3)" : "none",
                }}
                className="col-span-2 bg-[var(--theme-card-bg)] rounded p-3 border-2 text-center"
              >
                <div className="text-lg">📦</div>
                <div className="text-[10px] font-bold">Registers</div>
                <div className="text-[10px] text-[var(--theme-text-muted)]">寄存器</div>
                <div className="text-[10px] text-[var(--theme-text-secondary)] terminal-text">x=5, y=5</div>
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
            <div className="text-sm text-[var(--theme-text-secondary)]">{currentStep.desc}</div>
            <div className="text-xs text-[var(--theme-text-muted)]">{currentStep.descCn}</div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-4">
          {steps.map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: i === step ? 1.3 : 1 }}
              className={`w-3 h-3 rounded-full transition-colors ${i <= step ? "bg-green-500" : "bg-[var(--theme-card-bg)]"}`}
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
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-6 border border-[var(--theme-border)]">
        <div className="text-center text-sm text-[var(--theme-text-secondary)] mb-1">📦 RAM — Variables in Memory</div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">内存中的变量</div>
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
              <div className="text-[10px] terminal-text text-[var(--theme-text-muted)] w-12">{v.address}</div>
              <div className="font-bold text-sm flex-1">{v.name}</div>
              <div className="terminal-text text-sm">{v.value}</div>
              <div className="text-[10px] px-2 py-0.5 bg-[var(--theme-card-bg)] rounded">{v.type}</div>
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
          className="flex-1 px-3 py-2 bg-[var(--theme-card-bg)] border border-[var(--theme-border)] rounded-lg text-sm focus:outline-none focus:border-green-500 terminal-text"
        />
        <input
          value={newVarValue}
          onChange={(e) => setNewVarValue(e.target.value)}
          placeholder="Value · 值"
          className="flex-1 px-3 py-2 bg-[var(--theme-card-bg)] border border-[var(--theme-border)] rounded-lg text-sm focus:outline-none focus:border-green-500 terminal-text"
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
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-6 border border-[var(--theme-border)]">
        <div className="text-center text-sm text-[var(--theme-text-secondary)] mb-1">⚡ Speed Race</div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">速度大比拼 — 看看不同存储设备的速度差异！</div>

        <div className="space-y-3">
          {components.map((comp) => (
            <div key={comp.name} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-[var(--theme-text-secondary)]">{comp.name}</span>
                <span className="text-[var(--theme-text-muted)]">{comp.label}</span>
              </div>
              <div className="h-6 bg-[var(--theme-card-bg)] rounded-full overflow-hidden relative">
                <motion.div
                  className={`h-full ${comp.color} rounded-full`}
                  style={{ width: `${progress[comp.name] || 0}%` }}
                />
                {(progress[comp.name] || 0) >= 100 && (
                  <span className="absolute right-2 top-0.5 text-xs">🏁</span>
                )}
              </div>
              <div className="text-[10px] text-[var(--theme-text-muted)]">{comp.labelCn}</div>
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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const processes = [
    { name: "🎮 Game", color: "bg-red-500", slices: 3 },
    { name: "🎵 Music", color: "bg-blue-500", slices: 1 },
    { name: "💬 Chat", color: "bg-green-500", slices: 2 },
    { name: "📥 Download", color: "bg-yellow-500", slices: 1 },
  ];

  const [schedule, setSchedule] = useState<{ proc: number; slice: number }[]>([]);

  // Cleanup on unmount
  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

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
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (i >= sched.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setRunning(false);
        return;
      }
      const current = sched[i];
      if (!current) { if (intervalRef.current) clearInterval(intervalRef.current); intervalRef.current = null; setRunning(false); return; }
      setSchedule((prev) => [...prev, current]);
      setCurrentProcess(current.proc);
      setTimeSlice(i);
      i++;
    }, 500);
  };

  return (
    <div className="space-y-4">
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-6 border border-[var(--theme-border)]">
        <div className="text-center text-sm text-[var(--theme-text-secondary)] mb-1">⏱️ Process Scheduling</div>
        <div className="text-center text-xs text-[var(--theme-text-muted)] mb-4">进程调度 — CPU 如何在多个程序间快速切换（时间片轮转）</div>

        {/* Processes */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {processes.map((p, i) => (
            <motion.div
              key={i}
              animate={{
                scale: currentProcess === i && running ? 1.1 : 1,
                borderColor: currentProcess === i && running ? "#00ff88" : "#374151",
              }}
              className="text-center p-3 bg-[var(--theme-card-bg)] rounded-lg border-2"
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
        <div className="text-xs text-[var(--theme-text-muted)] mb-1">CPU Timeline:</div>
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
            <div className="text-[var(--theme-text-muted)] text-sm">Click start to see scheduling... 点击开始查看调度</div>
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
  {
    id: "gpu", icon: "🎮", title: "GPU — The Graphics Brain", subtitle: "图形处理器",
    content: "While CPU is like one brilliant professor, GPU is like 1000 students working together. Perfect for games and AI!",
    contentCn: "CPU像一个聪明的教授，GPU像1000个学生一起工作。最适合游戏和AI！",
    funFact: "💡 Modern GPUs have over 10,000 cores — that's why they're so fast at drawing millions of pixels!",
    funFactCn: "现代GPU有超过10,000个核心——所以它们画数百万像素时超快！",
    color: "from-red-500/20 to-orange-500/20 border-red-500/30",
  },
  {
    id: "network", icon: "🌐", title: "Network — The Internet Highway", subtitle: "网络",
    content: "Data travels across the world through undersea cables at the speed of light! Your message to China goes through the Pacific Ocean.",
    contentCn: "数据通过海底光缆以光速环游世界！你发给中国的消息穿越太平洋。",
    funFact: "💡 There are over 550 undersea cables connecting the world — some are eaten by sharks!",
    funFactCn: "世界上有超过550条海底光缆——有些还被鲨鱼咬过！",
    color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
  },
  {
    id: "os", icon: "🪟", title: "Operating System — The Manager", subtitle: "操作系统",
    content: "Windows, Mac, Linux — the OS is like a restaurant manager, coordinating waiters (programs), kitchen (CPU), and tables (memory).",
    contentCn: "操作系统像餐厅经理，协调服务员（程序）、厨房（CPU）和餐桌（内存）。",
    funFact: "💡 Linux runs on everything from phones (Android) to supercomputers to Mars rovers!",
    funFactCn: "Linux 运行在从手机(Android)到超级计算机再到火星车的一切设备上！",
    color: "from-sky-500/20 to-cyan-500/20 border-sky-500/30",
  },
  {
    id: "filesystem", icon: "📁", title: "File System — The Library", subtitle: "文件系统",
    content: "Files are organized like a library — shelves (drives), sections (folders), books (files). The path is like the address!",
    contentCn: "文件系统像图书馆——书架（硬盘）、分区（文件夹）、书（文件）。路径就是地址！",
    funFact: "💡 The deepest folder path in Windows can be 260 characters — longer names can actually crash old programs!",
    funFactCn: "Windows中最深的文件夹路径可以有260个字符——更长的名字能让旧程序崩溃！",
    color: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
  },
  {
    id: "bugs", icon: "🐛", title: "Bugs — The First Computer Bug", subtitle: "虫子传说",
    content: "In 1947, a real moth got stuck in a computer relay! Grace Hopper taped it in her log and called it 'debugging'.",
    contentCn: "1947年，一只真的飞蛾卡在计算机继电器里！Grace Hopper 把它贴在日志上，发明了'调试'这个词。",
    funFact: "💡 That original moth is still preserved at the Smithsonian Museum in Washington DC!",
    funFactCn: "那只飞蛾至今仍保存在华盛顿特区的史密森尼博物馆！",
    color: "from-lime-500/20 to-green-500/20 border-lime-500/30",
  },
  {
    id: "encoding", icon: "🔤", title: "ASCII & Unicode — How Computers Read Text", subtitle: "字符编码",
    content: "Computers store letters as numbers! A=65, B=66. Unicode added emoji: 😀=128512. That's why we can text across languages!",
    contentCn: "计算机用数字存字母！A=65, B=66。Unicode 加了 emoji：😀=128512。所以我们能跨语言发信息！",
    funFact: "💡 There are over 150,000 Unicode characters including ancient Egyptian hieroglyphs! 𓀀",
    funFactCn: "Unicode有超过15万个字符，包括古埃及象形文字！𓀀",
    color: "from-teal-500/20 to-emerald-500/20 border-teal-500/30",
  },
  {
    id: "encryption", icon: "🔒", title: "Encryption — Secret Codes", subtitle: "加密",
    content: "Encryption scrambles your messages so only the right person can read them. Like a secret language between you and your friend!",
    contentCn: "加密把消息打乱，只有对的人能解读。就像你和朋友的暗号！",
    funFact: "💡 Modern encryption is so strong that all computers in the world working together couldn't crack it in a billion years!",
    funFactCn: "现代加密技术如此强大，全世界所有计算机一起工作也无法在十亿年内破解！",
    color: "from-rose-500/20 to-pink-500/20 border-rose-500/30",
  },
  {
    id: "internet", icon: "🌍", title: "How the Internet Works — Digital Post Office", subtitle: "互联网原理",
    content: "When you visit a website: DNS finds the address → TCP breaks data into packets → packets travel different routes → reassemble at destination!",
    contentCn: "访问网站时：DNS找地址→TCP把数据分成小包→小包走不同路线→到达后重新组装！",
    funFact: "💡 A single Google search travels over 1,500 miles to a data center and back — all in 0.2 seconds!",
    funFactCn: "一次 Google 搜索要走超过2400公里到数据中心再返回——全程仅需0.2秒！",
    color: "from-violet-500/20 to-purple-500/20 border-violet-500/30",
  },
  {
    id: "ai_cs", icon: "🤖", title: "AI & Machine Learning — Teaching Computers", subtitle: "人工智能",
    content: "Instead of writing exact rules, ML lets computers learn from examples. Show it 1000 cat photos and it learns what 'cat' looks like!",
    contentCn: "不用写精确规则，机器学习让计算机从例子中学习。给它看1000张猫照片，它就学会认猫！",
    funFact: "💡 ChatGPT was trained on text from the internet — like reading millions of books in seconds!",
    funFactCn: "ChatGPT 是用互联网上的文本训练的——相当于几秒钟读完数百万本书！",
    color: "from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500/30",
  },
  {
    id: "io", icon: "⌨️", title: "Input/Output — Talking to Computers", subtitle: "输入输出",
    content: "Keyboard and mouse are INPUT — you talk to the computer. Screen and speakers are OUTPUT — the computer talks back!",
    contentCn: "键盘鼠标是输入——你对计算机说话。屏幕音箱是输出——计算机回答你！",
    funFact: "💡 The first mouse was made of wood in 1964! It had only one button.",
    funFactCn: "第一个鼠标是1964年用木头做的！只有一个按钮。",
    color: "from-orange-500/20 to-red-500/20 border-orange-500/30",
  },
];

export default function ExplorePage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("cards");
  const [preview, setPreview] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    setPreview(isPreviewMode());
  }, []);

  const tabs = [
    { id: "cards", icon: "🃏", label: "Knowledge Cards", labelCn: "知识卡片" },
    { id: "cpu", icon: "🖥️", label: "CPU Simulator", labelCn: "CPU 模拟器" },
    { id: "memory", icon: "🧠", label: "Memory Visualizer", labelCn: "内存可视化" },
    { id: "speed", icon: "⚡", label: "Speed Race", labelCn: "速度比赛" },
    { id: "scheduler", icon: "⏱️", label: "Process Scheduler", labelCn: "进程调度" },
    { id: "binary-converter", icon: "🔢", label: "Binary Lab", labelCn: "二进制实验室" },
    { id: "encryption-playground", icon: "🔐", label: "Crypto Lab", labelCn: "加密实验室" },
    { id: "pixel-art", icon: "🎨", label: "Pixel Art", labelCn: "像素画" },
    { id: "network-sim", icon: "🌐", label: "Network Sim", labelCn: "网络模拟" },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold mb-1">🔬 Computer Explorer</h1>
        <p className="text-sm text-[var(--theme-text-muted)] mb-1">计算机探秘</p>
        <p className="text-[var(--theme-text-secondary)] mb-6">Explore how computers work! 探索计算机的奥秘 🧪</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((tab) => {
          const tabLocked = preview && !PREVIEW_ALLOWED_EXPLORE_TABS.includes(tab.id);
          return (
            <button
              key={tab.id}
              onClick={() => tabLocked ? setShowSignUpModal(true) : setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] border border-[var(--theme-border)] hover:border-[var(--theme-border)]"
              }`}
              style={{ opacity: tabLocked ? 0.45 : 1 }}
            >
              <span>{tabLocked ? "🔒" : tab.icon} {tab.label}</span>
              <span className="block text-[10px] text-[var(--theme-text-muted)]">{tabLocked ? "Sign up · 注册解锁" : tab.labelCn}</span>
            </button>
          );
        })}
      </div>
      <SignUpModal open={showSignUpModal} onClose={() => setShowSignUpModal(false)} />

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
                <p className="text-xs text-[var(--theme-text-muted)] mb-3">{card.subtitle}</p>
                <p className="text-sm text-[var(--theme-text-secondary)]">{card.content}</p>
                <p className="text-xs text-[var(--theme-text-muted)] mt-1">{card.contentCn}</p>
                <AnimatePresence>
                  {activeCard === card.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-[var(--theme-border)]"
                    >
                      <p className="text-sm">{card.funFact}</p>
                      <p className="text-xs text-[var(--theme-text-muted)] mt-1">{card.funFactCn}</p>
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
        {activeTab === "binary-converter" && (
          <motion.div key="binary-converter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <BinaryLab />
          </motion.div>
        )}
        {activeTab === "encryption-playground" && (
          <motion.div key="encryption-playground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CryptoLab />
          </motion.div>
        )}
        {activeTab === "pixel-art" && (
          <motion.div key="pixel-art" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <PixelArt />
          </motion.div>
        )}
        {activeTab === "network-sim" && (
          <motion.div key="network-sim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <NetworkSim />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
