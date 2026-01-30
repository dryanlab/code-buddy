"use client";
import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

type SortAlgo = "bubble" | "selection" | "insertion" | "quick";

function generateArray(n: number): number[] {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 95) + 5);
}

async function* bubbleSort(arr: number[]): AsyncGenerator<{ arr: number[]; comparing: number[]; swapped: number[] }> {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      yield { arr: [...a], comparing: [j, j + 1], swapped: [] };
      if (a[j] > a[j + 1]) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; yield { arr: [...a], comparing: [], swapped: [j, j + 1] }; }
    }
  }
  yield { arr: [...a], comparing: [], swapped: [] };
}

async function* selectionSort(arr: number[]): AsyncGenerator<{ arr: number[]; comparing: number[]; swapped: number[] }> {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      yield { arr: [...a], comparing: [min, j], swapped: [] };
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) { [a[i], a[min]] = [a[min], a[i]]; yield { arr: [...a], comparing: [], swapped: [i, min] }; }
  }
  yield { arr: [...a], comparing: [], swapped: [] };
}

async function* insertionSort(arr: number[]): AsyncGenerator<{ arr: number[]; comparing: number[]; swapped: number[] }> {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    let j = i;
    while (j > 0 && a[j - 1] > a[j]) {
      yield { arr: [...a], comparing: [j - 1, j], swapped: [] };
      [a[j - 1], a[j]] = [a[j], a[j - 1]];
      yield { arr: [...a], comparing: [], swapped: [j - 1, j] };
      j--;
    }
  }
  yield { arr: [...a], comparing: [], swapped: [] };
}

async function* quickSortGen(arr: number[], lo = 0, hi = arr.length - 1): AsyncGenerator<{ arr: number[]; comparing: number[]; swapped: number[] }> {
  const a = arr;
  if (lo >= hi) return;
  const pivot = a[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    yield { arr: [...a], comparing: [j, hi], swapped: [] };
    if (a[j] < pivot) { [a[i], a[j]] = [a[j], a[i]]; yield { arr: [...a], comparing: [], swapped: [i, j] }; i++; }
  }
  [a[i], a[hi]] = [a[hi], a[i]];
  yield { arr: [...a], comparing: [], swapped: [i, hi] };
  yield* quickSortGen(a, lo, i - 1);
  yield* quickSortGen(a, i + 1, hi);
}

const ALGO_NAMES: Record<SortAlgo, { en: string; cn: string; complexity: string }> = {
  bubble: { en: "Bubble Sort", cn: "冒泡排序", complexity: "O(n²)" },
  selection: { en: "Selection Sort", cn: "选择排序", complexity: "O(n²)" },
  insertion: { en: "Insertion Sort", cn: "插入排序", complexity: "O(n²)" },
  quick: { en: "Quick Sort", cn: "快速排序", complexity: "O(n log n) avg" },
};

export default function SortingArena() {
  const [arr, setArr] = useState(() => generateArray(20));
  const [comparing, setComparing] = useState<number[]>([]);
  const [swapped, setSwapped] = useState<number[]>([]);
  const [algo, setAlgo] = useState<SortAlgo>("bubble");
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [log, setLog] = useState<string[]>([]);
  const cancelRef = useRef(false);

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const reset = () => {
    cancelRef.current = true;
    const na = generateArray(20);
    setArr(na);
    setComparing([]);
    setSwapped([]);
    setRunning(false);
  };

  const run = async () => {
    cancelRef.current = false;
    setRunning(true);
    const generators: Record<SortAlgo, (a: number[]) => AsyncGenerator<{ arr: number[]; comparing: number[]; swapped: number[] }>> = {
      bubble: bubbleSort,
      selection: selectionSort,
      insertion: insertionSort,
      quick: (a) => quickSortGen([...a]),
    };
    const gen = generators[algo]([...arr]);
    let steps = 0;
    const start = Date.now();
    for await (const state of gen) {
      if (cancelRef.current) break;
      setArr(state.arr);
      setComparing(state.comparing);
      setSwapped(state.swapped);
      steps++;
      await new Promise(r => setTimeout(r, Math.max(5, 200 - speed * 2)));
    }
    const elapsed = Date.now() - start;
    addLog(`${ALGO_NAMES[algo].en}: ${steps} steps in ${elapsed}ms`);
    setRunning(false);
    setComparing([]);
    setSwapped([]);
  };

  const maxVal = Math.max(...arr, 1);

  return (
    <div>
      <InfoCard
        icon="🏆" title="Sorting Arena" titleCn="排序竞技场"
        description="Watch different sorting algorithms compete! See how they compare and swap elements step by step."
        descriptionCn="观看不同排序算法比赛！一步步看它们如何比较和交换元素。"
        analogy="Like organizing books on a shelf — different methods, same goal!"
        analogyCn="就像整理书架上的书——方法不同，目标一样！"
      />

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-5 border border-[var(--theme-border)] mb-4">
        <div className="flex items-end gap-[2px] h-48 justify-center">
          {arr.map((val, i) => (
            <motion.div
              key={i}
              animate={{
                height: `${(val / maxVal) * 100}%`,
                backgroundColor: comparing.includes(i) ? "#eab308" : swapped.includes(i) ? "#22c55e" : "#6366f1",
              }}
              transition={{ duration: 0.1 }}
              className="rounded-t-sm"
              style={{ width: `${Math.max(8, 100 / arr.length - 1)}%` }}
              title={`${val}`}
            />
          ))}
        </div>
      </div>

      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {(Object.keys(ALGO_NAMES) as SortAlgo[]).map(a => (
            <button
              key={a}
              onClick={() => !running && setAlgo(a)}
              className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${algo === a ? "border-[var(--theme-primary)] text-[var(--theme-primary)] bg-[var(--theme-primary)]/10" : "border-[var(--theme-border)] text-[var(--theme-text-secondary)]"}`}
            >
              {ALGO_NAMES[a].en} {ALGO_NAMES[a].complexity}
              <br /><span className="text-[10px]">{ALGO_NAMES[a].cn}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-[var(--theme-text-muted)]">🐢 Speed 速度</span>
          <input type="range" min={1} max={100} value={speed} onChange={e => setSpeed(parseInt(e.target.value))} className="flex-1" />
          <span className="text-xs text-[var(--theme-text-muted)]">🐇</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={run} color="#22c55e" disabled={running}>▶️ Start 开始</ControlButton>
          <ControlButton onClick={reset} color="#ef4444">🔄 Reset 重置</ControlButton>
        </div>
      </div>

      <OperationLog log={log} />
    </div>
  );
}
