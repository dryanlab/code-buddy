"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TRACKS, type Track } from "@/data/tracks";
import { LESSONS } from "@/data/lessons";
import type { UserProgress } from "@/lib/progress-store";

// ═══════════════════════════════════════════════════
// 🗺️ ADVENTURE MAP — Reusable Component
// ═══════════════════════════════════════════════════

interface MapHotspot {
  trackId: string;
  x: number;
  y: number;
}

const MAP_HOTSPOTS: MapHotspot[] = [
  { trackId: "python", x: 15, y: 88 },
  { trackId: "data-structures", x: 22, y: 65 },
  { trackId: "algorithms", x: 52, y: 62 },
  { trackId: "ai-ml", x: 80, y: 65 },
  { trackId: "web-dev", x: 32, y: 42 },
  { trackId: "databases", x: 52, y: 42 },
  { trackId: "cybersecurity", x: 78, y: 40 },
  { trackId: "computer-architecture", x: 30, y: 20 },
  { trackId: "software-engineering", x: 52, y: 20 },
  { trackId: "app-dev", x: 72, y: 20 },
  { trackId: "game-dev", x: 90, y: 20 },
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
}: {
  spot: MapHotspot;
  track: Track;
  progress: UserProgress | null;
  onClick: () => void;
}) {
  let pct = 0;
  if (track.id === "python" && progress) {
    const total = LESSONS.length;
    const done = LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length;
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
        <div className="absolute inset-[-35%] pointer-events-none">
          {/* Cloud layer 1 - large soft cloud */}
          <svg viewBox="0 0 120 120" className="w-full h-full opacity-80">
            <defs>
              <filter id={`cloud-blur-${spot.trackId}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
              </filter>
            </defs>
            <g filter={`url(#cloud-blur-${spot.trackId})`}>
              <ellipse cx="60" cy="55" rx="42" ry="28" fill="#b8c5d6" opacity="0.7" />
              <ellipse cx="45" cy="50" rx="30" ry="22" fill="#c9d4e2" opacity="0.8" />
              <ellipse cx="75" cy="52" rx="32" ry="24" fill="#bcc8d8" opacity="0.75" />
              <ellipse cx="55" cy="45" rx="25" ry="18" fill="#d4dde8" opacity="0.85" />
              <ellipse cx="65" cy="60" rx="28" ry="20" fill="#c2ced9" opacity="0.7" />
            </g>
          </svg>
        </div>
      )}

      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-full h-full rounded-full cursor-pointer flex items-center justify-center group"
        style={{ opacity: isFuture ? 0.5 : 1 }}
      >
        <div
          className="absolute inset-[-30%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${track.colorHex}40 0%, transparent 70%)`,
          }}
        />

        {isAvailable && (
          <>
            {/* Outer glow */}
            <motion.div
              className="absolute inset-[-40%] rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${track.colorHex}50 0%, ${track.colorHex}20 40%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.4, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-[-25%] rounded-full pointer-events-none"
              style={{ border: `3px solid ${track.colorHex}`, boxShadow: `0 0 12px ${track.colorHex}80` }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </>
        )}

        {isAvailable && pct > 0 && pct < 100 && (
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg pointer-events-none"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            📍
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

function TrackPopup({
  track,
  progress,
  onClose,
}: {
  track: Track;
  progress: UserProgress | null;
  onClose: () => void;
}) {
  let pct = 0;
  let completedCount = 0;
  if (track.id === "python" && progress) {
    const total = LESSONS.length;
    completedCount = LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length;
    pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  }

  const diffEmoji = track.difficulty === "beginner" ? "🟢" : track.difficulty === "intermediate" ? "🟡" : "🔴";
  const diffLabel = track.difficulty === "beginner" ? "Beginner · 初级" : track.difficulty === "intermediate" ? "Intermediate · 中级" : "Advanced · 高级";
  const prereqTracks = track.prerequisites.map((pid) => TRACKS.find((t) => t.id === pid)).filter(Boolean) as Track[];

  const statusBadge = track.status === "available"
    ? { label: "✅ Available", bg: "#22c55e20", color: "#22c55e" }
    : track.status === "coming-soon"
      ? { label: "🔜 Coming Soon", bg: "#eab30820", color: "#eab308" }
      : { label: "🔮 Future", bg: "#64748b20", color: "#64748b" };

  const href = track.status === "available" ? "/dashboard/lessons"
    : track.id === "data-structures" ? "/dashboard/data-structures" : null;

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
        className="relative rounded-2xl p-5 w-full max-w-md overflow-hidden z-10"
        style={{
          backgroundColor: "var(--theme-card-bg)",
          border: `2px solid ${track.colorHex}40`,
          boxShadow: `0 20px 60px ${track.colorHex}20, 0 4px 20px rgba(0,0,0,0.3)`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: track.colorHex }} />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg opacity-50 hover:opacity-100 transition-opacity w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10"
        >
          ✕
        </button>

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

        {track.status === "available" && progress && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span style={{ color: "var(--theme-text-secondary)" }}>Progress · 进度</span>
              <span style={{ color: track.colorHex }}>{completedCount}/{track.lessonCount} ({pct}%)</span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--theme-border)" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8 }}
                className="h-full rounded-full"
                style={{ backgroundColor: track.colorHex }}
              />
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
              {pct > 0 ? "▶ Continue Learning · 继续学习" : "🚀 Start Learning · 开始学习"}
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
      </motion.div>
    </motion.div>
  );
}

export default function AdventureMap({ progress }: { progress: UserProgress | null }) {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [mapHover, setMapHover] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const selectedTrack = selectedTrackId ? TRACKS.find((t) => t.id === selectedTrackId) ?? null : null;

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
