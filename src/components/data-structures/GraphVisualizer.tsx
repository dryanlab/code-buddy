"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef, useEffect } from "react";
import { InfoCard, ControlButton, OperationLog } from "./shared";

interface GraphNode { id: string; x: number; y: number; }
interface GraphEdge { from: string; to: string; weight?: number; }

const INITIAL_NODES: GraphNode[] = [
  { id: "A", x: 150, y: 40 },
  { id: "B", x: 60, y: 130 },
  { id: "C", x: 240, y: 130 },
  { id: "D", x: 30, y: 240 },
  { id: "E", x: 150, y: 220 },
  { id: "F", x: 270, y: 240 },
];

const INITIAL_EDGES: GraphEdge[] = [
  { from: "A", to: "B" }, { from: "A", to: "C" },
  { from: "B", to: "D" }, { from: "B", to: "E" },
  { from: "C", to: "E" }, { from: "C", to: "F" },
  { from: "E", to: "F" },
];

export default function GraphVisualizer() {
  const [nodes, setNodes] = useState<GraphNode[]>(INITIAL_NODES);
  const [edges, setEdges] = useState<GraphEdge[]>(INITIAL_EDGES);
  const [visited, setVisited] = useState<string[]>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const [traversalQueue, setTraversalQueue] = useState<string[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const [inputFrom, setInputFrom] = useState("");
  const [inputTo, setInputTo] = useState("");
  const [inputNode, setInputNode] = useState("");
  const cancelRef = useRef(false);

  const addLog = (msg: string) => setLog(p => [...p, msg]);

  const getNeighbors = useCallback((nodeId: string): string[] => {
    const neighbors: string[] = [];
    for (const e of edges) {
      if (e.from === nodeId) neighbors.push(e.to);
      if (e.to === nodeId) neighbors.push(e.from);
    }
    return [...new Set(neighbors)].sort();
  }, [edges]);

  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  const bfs = async () => {
    if (nodes.length === 0) return;
    cancelRef.current = false;
    setRunning(true);
    setVisited([]);
    setCurrent(null);
    setTraversalQueue([]);

    const start = inputNode.toUpperCase() || nodes[0].id;
    const visitedSet = new Set<string>();
    const queue = [start];
    const order: string[] = [];

    addLog(`BFS from "${start}" — O(V + E)`);

    while (queue.length > 0 && !cancelRef.current) {
      setTraversalQueue([...queue]);
      const node = queue.shift()!;
      if (visitedSet.has(node)) continue;
      visitedSet.add(node);
      order.push(node);
      setCurrent(node);
      setVisited([...visitedSet]);
      await sleep(700);

      for (const neighbor of getNeighbors(node)) {
        if (!visitedSet.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
    setCurrent(null);
    setTraversalQueue([]);
    setRunning(false);
    addLog(`BFS order: ${order.join(" → ")}`);
  };

  const dfs = async () => {
    if (nodes.length === 0) return;
    cancelRef.current = false;
    setRunning(true);
    setVisited([]);
    setCurrent(null);
    setTraversalQueue([]);

    const start = inputNode.toUpperCase() || nodes[0].id;
    const visitedSet = new Set<string>();
    const order: string[] = [];

    addLog(`DFS from "${start}" — O(V + E)`);

    const dfsRec = async (node: string) => {
      if (cancelRef.current || visitedSet.has(node)) return;
      visitedSet.add(node);
      order.push(node);
      setCurrent(node);
      setVisited([...visitedSet]);
      await sleep(700);

      for (const neighbor of getNeighbors(node)) {
        if (!visitedSet.has(neighbor)) {
          await dfsRec(neighbor);
        }
      }
    };

    await dfsRec(start);
    setCurrent(null);
    setRunning(false);
    addLog(`DFS order: ${order.join(" → ")}`);
  };

  const reset = () => {
    cancelRef.current = true;
    setVisited([]);
    setCurrent(null);
    setTraversalQueue([]);
    setRunning(false);
  };

  const addEdge = () => {
    const from = inputFrom.toUpperCase();
    const to = inputTo.toUpperCase();
    if (!from || !to || from === to) return;
    if (!nodes.find(n => n.id === from) || !nodes.find(n => n.id === to)) return;
    if (edges.some(e => (e.from === from && e.to === to) || (e.from === to && e.to === from))) return;
    setEdges(p => [...p, { from, to }]);
    addLog(`Added edge ${from} — ${to}`);
    setInputFrom(""); setInputTo("");
  };

  const addNode = () => {
    const id = inputNode.toUpperCase();
    if (!id || nodes.find(n => n.id === id)) return;
    const x = 50 + Math.random() * 220;
    const y = 50 + Math.random() * 200;
    setNodes(p => [...p, { id, x, y }]);
    addLog(`Added node ${id}`);
    setInputNode("");
  };

  const removeNode = () => {
    const id = inputNode.toUpperCase();
    if (!id || !nodes.find(n => n.id === id)) return;
    setNodes(p => p.filter(n => n.id !== id));
    setEdges(p => p.filter(e => e.from !== id && e.to !== id));
    addLog(`Removed node ${id} and its edges`);
    setInputNode("");
  };

  return (
    <div>
      <InfoCard
        icon="🕸️" title="Graph — Social Network" titleCn="图 — 社交网络"
        description="Nodes connected by edges — like a social network or city map. BFS explores layer by layer, DFS goes deep first!"
        descriptionCn="节点通过边连接——就像社交网络或城市地图。BFS 逐层探索，DFS 深入到底！"
        analogy="Like a city map — BFS explores all nearby streets first, DFS follows one road to the end!"
        analogyCn="就像城市地图——BFS 先探索附近所有街道，DFS 一条路走到底！"
      />

      {/* Graph Visualization */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <svg width="300" height="290" viewBox="0 0 300 290" className="mx-auto">
          {/* Edges */}
          {edges.map((e, i) => {
            const from = nodes.find(n => n.id === e.from);
            const to = nodes.find(n => n.id === e.to);
            if (!from || !to) return null;
            const bothVisited = visited.includes(e.from) && visited.includes(e.to);
            return (
              <motion.line
                key={`${e.from}-${e.to}-${i}`}
                x1={from.x} y1={from.y}
                x2={to.x} y2={to.y}
                stroke={bothVisited ? "#22c55e" : "#4b5563"}
                strokeWidth={bothVisited ? 3 : 2}
                strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              />
            );
          })}
          {/* Nodes */}
          {nodes.map(node => {
            const isVisited = visited.includes(node.id);
            const isCurrent = current === node.id;
            const inQueue = traversalQueue.includes(node.id) && !isVisited;
            return (
              <motion.g key={node.id} initial={{ scale: 0 }} animate={{ scale: 1 }}>
                {isCurrent && (
                  <motion.circle
                    cx={node.x} cy={node.y} r={26}
                    fill="none" stroke="#facc15" strokeWidth={3}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                )}
                <motion.circle
                  cx={node.x} cy={node.y} r={20}
                  fill={isCurrent ? "#854d0e" : isVisited ? "#166534" : inQueue ? "#1e3a5f" : "#1e293b"}
                  stroke={isCurrent ? "#facc15" : isVisited ? "#22c55e" : inQueue ? "#3b82f6" : "#6b7280"}
                  strokeWidth={2.5}
                  animate={{
                    fill: isCurrent ? "#854d0e" : isVisited ? "#166534" : inQueue ? "#1e3a5f" : "#1e293b",
                    stroke: isCurrent ? "#facc15" : isVisited ? "#22c55e" : inQueue ? "#3b82f6" : "#6b7280",
                  }}
                />
                <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                  {node.id}
                </text>
              </motion.g>
            );
          })}
        </svg>
        <div className="flex justify-center gap-4 text-[10px] text-[var(--theme-text-muted)] mt-2">
          <span>⬜ Unvisited</span>
          <span className="text-blue-400">🟦 In Queue</span>
          <span className="text-yellow-400">🟨 Current</span>
          <span className="text-green-400">🟩 Visited</span>
        </div>
      </div>

      {/* Traversal Controls */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="text-sm font-bold mb-2">🔍 Traversal / 遍历</div>
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputNode} onChange={e => setInputNode(e.target.value)} placeholder="start node" className="w-24 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={bfs} color="#3b82f6" disabled={running}>🌊 BFS 广度优先</ControlButton>
          <ControlButton onClick={dfs} color="#8b5cf6" disabled={running}>🏊 DFS 深度优先</ControlButton>
          <ControlButton onClick={reset} color="#ef4444">🔄 Reset</ControlButton>
        </div>
      </div>

      {/* Edit Graph */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="text-sm font-bold mb-2">✏️ Edit Graph / 编辑图</div>
        <div className="flex flex-wrap gap-2 mb-3">
          <input value={inputFrom} onChange={e => setInputFrom(e.target.value)} placeholder="from" className="w-16 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
          <input value={inputTo} onChange={e => setInputTo(e.target.value)} placeholder="to" className="w-16 px-2 py-1.5 rounded-lg bg-[var(--theme-bg)] border border-[var(--theme-border)] text-sm" />
          <ControlButton onClick={addEdge} color="#22c55e">🔗 Add Edge</ControlButton>
        </div>
        <div className="flex flex-wrap gap-2">
          <ControlButton onClick={addNode} color="#22c55e">➕ Add Node</ControlButton>
          <ControlButton onClick={removeNode} color="#ef4444">🗑️ Remove Node</ControlButton>
        </div>
      </div>

      {/* Complexity */}
      <div className="bg-[var(--theme-card-bg)] rounded-xl p-4 border border-[var(--theme-border)] mb-4">
        <div className="text-sm font-bold mb-2">⏱️ Complexity / 复杂度</div>
        <div className="text-xs text-[var(--theme-text-secondary)] space-y-1">
          <div>• <strong>BFS / DFS:</strong> O(V + E) — visit all vertices and edges</div>
          <div className="text-[var(--theme-text-muted)]">BFS/DFS: O(V + E) — 遍历所有顶点和边</div>
          <div>• <strong>Space:</strong> BFS uses a queue, DFS uses a stack (or recursion)</div>
          <div className="text-[var(--theme-text-muted)]">空间：BFS 用队列，DFS 用栈（或递归）</div>
        </div>
      </div>

      <OperationLog log={log} />
    </div>
  );
}
