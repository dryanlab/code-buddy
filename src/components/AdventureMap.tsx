"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TRACKS, type Track } from "@/data/tracks";
import { LESSONS } from "@/data/lessons";
import { CPP_LESSONS } from "@/data/cpp-lessons";
import { DS_LESSONS } from "@/data/ds-lessons";
import type { UserProgress } from "@/lib/progress-store";

// ═══════════════════════════════════════════════════
// 🗺️ ADVENTURE MAP — Reusable Component
// ═══════════════════════════════════════════════════

interface MapHotspot {
  trackId: string;
  x: number;
  y: number;
  cloudOffsetX?: number; // % shift for cloud overlay
  cloudOffsetY?: number;
  cloudScale?: number; // scale multiplier for cloud size
}

const MAP_HOTSPOTS: MapHotspot[] = [
  { trackId: "python", x: 15, y: 88 },
  { trackId: "data-structures", x: 22, y: 65 },
  { trackId: "algorithms", x: 52, y: 62, cloudOffsetY: 40, cloudScale: 1.4 },
  { trackId: "ai-ml", x: 80, y: 65 },
  { trackId: "web-dev", x: 32, y: 42 },
  { trackId: "databases", x: 52, y: 42 },
  { trackId: "cybersecurity", x: 78, y: 40 },
  { trackId: "computer-architecture", x: 30, y: 20 },
  { trackId: "software-engineering", x: 52, y: 20 },
  { trackId: "app-dev", x: 72, y: 20, cloudOffsetX: -15 },
  { trackId: "game-dev", x: 90, y: 20, cloudOffsetX: -30 },
];

function ProgressRing({ pct, color, size = 48 }: { pct: number; color: string; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} className="absolute -top-2 -right-2 pointer-events-none">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={3} opacity={0.15} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={3}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x={size / 2} y={size / 2 + 4} textAnchor="middle" fontSize={10} fontWeight="bold" fill={color}>
        {pct}%
      </text>
    </svg>
  );
}

function HotspotOverlay({
  spot,
  track,
  progress,
  onClick,
  isActive,
}: {
  spot: MapHotspot;
  track: Track;
  progress: UserProgress | null;
  onClick: () => void;
  isActive?: boolean;
}) {
  let pct = 0;
  if (track.id === "python" && progress) {
    const allLessons = [...LESSONS, ...CPP_LESSONS];
    const total = allLessons.length;
    const done = allLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
    pct = total > 0 ? Math.round((done / total) * 100) : 0;
  } else if (track.id === "data-structures" && progress) {
    const total = DS_LESSONS.length;
    const done = DS_LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length;
    pct = total > 0 ? Math.round((done / total) * 100) : 0;
  }

  const isFuture = track.status === "future";
  const isComingSoon = track.status === "coming-soon";
  const isAvailable = track.status === "available";

  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        left: `${spot.x}%`,
        top: `${spot.y}%`,
        transform: "translate(-50%, -50%)",
        width: "8%",
        minWidth: 56,
        aspectRatio: "1",
      }}
    >
      {(isFuture || isComingSoon) && (
        <div className="absolute pointer-events-none" style={{ inset: "-90%", zIndex: 5, transform: `translate(${spot.cloudOffsetX || 0}%, ${spot.cloudOffsetY || 0}%) scale(${spot.cloudScale || 1})` }}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <filter id={`cloud-blur-${spot.trackId}`} x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
              </filter>
            </defs>
            <g filter={`url(#cloud-blur-${spot.trackId})`}>
              {/* Uniform light clouds — building clearly visible */}
              <ellipse cx="100" cy="100" rx="60" ry="45" fill="#a0b0c0" opacity="0.45" />
              <ellipse cx="85" cy="95" rx="50" ry="38" fill="#aab8c8" opacity="0.4" />
              <ellipse cx="115" cy="98" rx="52" ry="40" fill="#a5b5c5" opacity="0.4" />
              <ellipse cx="100" cy="88" rx="42" ry="32" fill="#b0bece" opacity="0.35" />
              {/* Outer wisps */}
              <ellipse cx="100" cy="72" rx="48" ry="20" fill="#bcc8d4" opacity="0.2" />
              <ellipse cx="100" cy="125" rx="45" ry="18" fill="#b8c4d0" opacity="0.18" />
            </g>
          </svg>
        </div>
      )}

      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-full h-full rounded-full cursor-pointer flex items-center justify-center group"
        style={{ opacity: 1 }}
      >
        <div
          className="absolute inset-[-30%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${track.colorHex}40 0%, transparent 70%)`,
          }}
        />

        {/* "You are here" cartoon arrow for active track */}
        {isActive && (
          <motion.div
            className="absolute -top-24 left-1/2 -translate-x-1/2 pointer-events-none"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.5))" }}
          >
            <Image src="/images/you-are-here-arrow.png" alt="You are here" width={72} height={96} className="w-[72px] h-auto" draggable={false} />
          </motion.div>
        )}

        {isAvailable && pct > 0 && (
          <ProgressRing pct={pct} color={track.colorHex} />
        )}

        {isComingSoon && (
          <motion.div
            className="absolute -top-3 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full pointer-events-none whitespace-nowrap"
            style={{ backgroundColor: "#eab30830", color: "#eab308", border: "1px solid #eab30860" }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SOON
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}

function TrackCard({
  icon,
  title,
  titleZh,
  description,
  descriptionZh,
  colorHex,
  difficulty,
  lessonCount,
  completedCount,
  pct,
  href,
}: {
  icon: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  colorHex: string;
  difficulty: string;
  lessonCount: number;
  completedCount: number;
  pct: number;
  href: string;
}) {
  const diffEmoji = difficulty === "beginner" ? "🟢" : difficulty === "intermediate" ? "🟡" : "🔴";
  const diffLabel = difficulty === "beginner" ? "Beginner · 初级" : difficulty === "intermediate" ? "Intermediate · 中级" : "Advanced · 高级";

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-xl p-4 h-full flex flex-col cursor-pointer"
        style={{
          backgroundColor: "var(--theme-card-bg)",
          border: `2px solid ${colorHex}40`,
          backgroundImage: `linear-gradient(135deg, ${colorHex}10, transparent)`,
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-5xl">{icon}</span>
          <div className="min-w-0">
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>{titleZh}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#22c55e20", color: "#22c55e" }}>✅ Available</span>
          <span className="text-xs">{diffEmoji} {diffLabel}</span>
        </div>

        <p className="text-sm mb-1 flex-1" style={{ color: "var(--theme-text-secondary)" }}>{description}</p>
        <p className="text-xs mb-4" style={{ color: "var(--theme-text-muted)" }}>{descriptionZh}</p>

        <div className="mt-auto">
          <div className="flex justify-between text-xs mb-1">
            <span style={{ color: "var(--theme-text-secondary)" }}>📖 {lessonCount} lessons</span>
            <span style={{ color: colorHex }}>{completedCount}/{lessonCount} ({pct}%)</span>
          </div>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: colorHex }} />
          </div>
        </div>

        <div className="mt-4 text-center py-3 rounded-xl font-bold text-sm" style={{ backgroundColor: colorHex, color: "#000" }}>
          {pct > 0 ? "▶ Continue · 继续" : "🚀 Start · 开始"}
        </div>
      </motion.div>
    </Link>
  );
}

function TrackPopup({
  track,
  progress,
  onClose,
}: {
  track: Track;
  progress: UserProgress | null;
  onClose: () => void;
}) {
  // For Starter Island (python), show dual cards for Python + C++
  const isDualTrack = track.id === "python";

  const cppTrack = TRACKS.find((t) => t.id === "cpp");

  // Python progress
  const pyTotal = LESSONS.length;
  const pyDone = progress ? LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length : 0;
  const pyPct = pyTotal > 0 ? Math.round((pyDone / pyTotal) * 100) : 0;

  // C++ progress
  const cppTotal = CPP_LESSONS.length;
  const cppDone = progress ? CPP_LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length : 0;
  const cppPct = cppTotal > 0 ? Math.round((cppDone / cppTotal) * 100) : 0;

  // Single track stats
  const diffEmoji = track.difficulty === "beginner" ? "🟢" : track.difficulty === "intermediate" ? "🟡" : "🔴";
  const diffLabel = track.difficulty === "beginner" ? "Beginner · 初级" : track.difficulty === "intermediate" ? "Intermediate · 中级" : "Advanced · 高级";
  const prereqTracks = track.prerequisites.map((pid) => TRACKS.find((t) => t.id === pid)).filter(Boolean) as Track[];

  const statusBadge = track.status === "available"
    ? { label: "✅ Available", bg: "#22c55e20", color: "#22c55e" }
    : track.status === "coming-soon"
      ? { label: "🔜 Coming Soon", bg: "#eab30820", color: "#eab308" }
      : { label: "🔮 Future", bg: "#64748b20", color: "#64748b" };

  // DS progress
  const dsTotal = DS_LESSONS.length;
  const dsDone = progress ? DS_LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length : 0;
  const dsPct = dsTotal > 0 ? Math.round((dsDone / dsTotal) * 100) : 0;

  const href = track.id === "data-structures" ? "/dashboard/data-structures"
    : track.status === "available" ? "/dashboard/lessons"
    : null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`relative rounded-2xl p-6 w-full overflow-hidden z-10 ${isDualTrack ? "max-w-2xl" : "max-w-md"}`}
        style={{
          backgroundColor: "var(--theme-card-bg)",
          border: `2px solid ${track.colorHex}40`,
          boxShadow: `0 20px 60px ${track.colorHex}20, 0 4px 20px rgba(0,0,0,0.3)`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: track.colorHex }} />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg opacity-50 hover:opacity-100 transition-opacity w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 z-10"
        >
          ✕
        </button>

        {isDualTrack ? (
          <>
            <div className="text-center mb-5">
              <h3 className="text-xl font-bold">🏝️ Starter Island</h3>
              <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>新手岛 — 选择你的编程语言！</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <TrackCard
                icon="🐍"
                title="Python"
                titleZh="Python 编程"
                description="Learn programming fundamentals with Python — easy to read, fun to write!"
                descriptionZh="用 Python 学编程基础——易读易写！"
                colorHex="#22c55e"
                difficulty="beginner"
                lessonCount={pyTotal}
                completedCount={pyDone}
                pct={pyPct}
                href="/dashboard/lessons"
              />
              <TrackCard
                icon="⚡"
                title="C++"
                titleZh="C++ 编程"
                description="Level up with C++! Types, pointers, OOP, and competition prep."
                descriptionZh="进阶 C++！类型、指针、面向对象。"
                colorHex={cppTrack?.colorHex || "#4f46e5"}
                difficulty="intermediate"
                lessonCount={cppTotal}
                completedCount={cppDone}
                pct={cppPct}
                href="/dashboard/cpp-lessons"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl">{track.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{track.title}</h3>
                <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>{track.titleZh}</p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: statusBadge.bg, color: statusBadge.color }}>
                    {statusBadge.label}
                  </span>
                  <span className="text-xs">{diffEmoji} {diffLabel}</span>
                  <span className="text-xs" style={{ color: "var(--theme-text-muted)" }}>📖 {track.lessonCount} lessons</span>
                </div>
              </div>
            </div>

            <p className="text-sm mb-1" style={{ color: "var(--theme-text-secondary)" }}>{track.description}</p>
            <p className="text-xs mb-4" style={{ color: "var(--theme-text-muted)" }}>{track.descriptionZh}</p>

            {track.id === "data-structures" && (
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: "var(--theme-text-secondary)" }}>📖 {dsTotal} lessons</span>
                  <span style={{ color: track.colorHex }}>{dsDone}/{dsTotal} ({dsPct}%)</span>
                </div>
                <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${dsPct}%`, backgroundColor: track.colorHex }} />
                </div>
              </div>
            )}

            {prereqTracks.length > 0 && (
              <div className="mb-4">
                <div className="text-xs font-semibold mb-1" style={{ color: "var(--theme-text-muted)" }}>🔗 Prerequisites · 前置要求</div>
                <div className="flex gap-2 flex-wrap">
                  {prereqTracks.map((pt) => (
                    <span key={pt.id} className="text-xs px-2 py-1 rounded-lg" style={{ backgroundColor: `${pt.colorHex}15`, color: pt.colorHex }}>
                      {pt.icon} {pt.title}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {href ? (
              <Link href={href}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: track.colorHex, color: "#000" }}
                >
                  {(track.id === "data-structures" ? dsPct : 0) > 0 ? "▶ Continue · 继续" : "🚀 Start Learning · 开始学习"}
                </motion.button>
              </Link>
            ) : track.status === "coming-soon" ? (
              <div className="text-center py-3 rounded-xl text-sm font-medium" style={{ backgroundColor: `${track.colorHex}15`, color: track.colorHex }}>
                🔔 Coming Soon! · 即将推出！
              </div>
            ) : (
              <div className="text-center py-3 rounded-xl text-sm" style={{ backgroundColor: "var(--theme-border)", color: "var(--theme-text-muted)" }}>
                🔮 Future Track · 未来计划
              </div>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function AdventureMap({ progress }: { progress: UserProgress | null }) {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [mapHover, setMapHover] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const selectedTrack = selectedTrackId ? TRACKS.find((t) => t.id === selectedTrackId) ?? null : null;

  // Determine active track from lastLessonId
  const activeTrackId = (() => {
    const lastId = progress?.lastLessonId;
    if (!lastId) return "python"; // default
    if (lastId.startsWith("cpp-")) return "python"; // C++ is part of Starter Island
    if (lastId.startsWith("ds-")) return "data-structures";
    return "python";
  })();

  return (
    <>
      <motion.div
        ref={mapRef}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: "4px solid #3a2a1a",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 0 30px rgba(0,0,0,0.1)",
        }}
        onMouseEnter={() => setMapHover(true)}
        onMouseLeave={() => setMapHover(false)}
      >
        <motion.div
          animate={{ scale: mapHover ? 1.02 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full overflow-x-auto"
        >
          <div className="relative min-w-[600px]">
            <Image
              src="/images/course-map.jpg"
              alt="World of Code — Adventure Map"
              width={1350}
              height={1000}
              className="w-full h-auto block"
              priority
              draggable={false}
            />

            {MAP_HOTSPOTS.map((spot) => {
              const track = TRACKS.find((t) => t.id === spot.trackId);
              if (!track) return null;
              return (
                <HotspotOverlay
                  key={spot.trackId}
                  spot={spot}
                  track={track}
                  progress={progress}
                  onClick={() => setSelectedTrackId(spot.trackId)}
                  isActive={spot.trackId === activeTrackId}
                />
              );
            })}
          </div>
        </motion.div>

        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ boxShadow: "inset 0 0 50px rgba(0,0,0,0.25)" }}
        />
      </motion.div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm" style={{ color: "var(--theme-text-muted)" }}>
        <div className="flex items-center gap-4">
          <span>🟢 Available · 可学</span>
          <span>🟡 Coming Soon · 即将</span>
          <span>⚪ Future · 未来</span>
        </div>
        <div className="text-xs">
          📚 {TRACKS.length} Tracks · {TRACKS.reduce((s, t) => s + t.lessonCount, 0)}+ Lessons
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedTrack && (
          <TrackPopup
            key={selectedTrack.id}
            track={selectedTrack}
            progress={progress}
            onClose={() => setSelectedTrackId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
