"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getCoinState,
  spendCoins,
  equipTitle,
  isOwned,
  REWARD_CATALOG,
  COIN_RATES,
  getRarityColor,
  getRarityLabel,
  type CoinState,
  type RewardItem,
} from "@/lib/coin-store";

type Category = "all" | "avatar" | "title" | "theme";

function CoinDisplay({ coins }: { coins: number }) {
  return (
    <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2">
      <span className="text-2xl">🪙</span>
      <span className="text-xl font-bold text-yellow-400">{coins}</span>
      <span className="text-xs text-yellow-400/60">coins · 金币</span>
    </div>
  );
}

function RewardCard({
  item,
  owned,
  canAfford,
  onBuy,
  coinState,
}: {
  item: RewardItem;
  owned: boolean;
  canAfford: boolean;
  onBuy: (id: string) => void;
  coinState: CoinState;
}) {
  const rarity = getRarityColor(item.rarity);
  const rarityLabel = getRarityLabel(item.rarity);
  const isEquipped = item.category === "title" && coinState.equippedTitle === item.id;

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      className={`relative border rounded-xl p-4 transition-all ${rarity} ${
        owned ? "ring-2 ring-green-500/30" : ""
      }`}
    >
      {/* Rarity badge */}
      <div className="absolute top-2 right-2">
        <span className={`text-[10px] font-bold uppercase tracking-wider ${rarity.split(" ")[0]}`}>
          {rarityLabel.en}
        </span>
      </div>

      {/* Icon */}
      <div className="text-5xl text-center mb-3 mt-1">{item.icon}</div>

      {/* Name */}
      <div className="text-center mb-1">
        <div className="text-sm font-bold">{item.name}</div>
        <div className="text-[10px] text-[var(--theme-text-muted)]">{item.nameCn}</div>
      </div>

      {/* Price or status */}
      <div className="text-center mt-3">
        {owned ? (
          <div className="space-y-1">
            <div className="text-xs text-green-400 font-medium">✅ Owned · 已拥有</div>
            {item.category === "title" && (
              <button
                onClick={() => onBuy(item.id)}
                className={`text-[10px] px-3 py-1 rounded-full transition-colors ${
                  isEquipped
                    ? "bg-green-500/20 text-green-400"
                    : "bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] hover:bg-[var(--theme-card-bg)]"
                }`}
              >
                {isEquipped ? "🏷️ Equipped · 已装备" : "Equip · 装备"}
              </button>
            )}
          </div>
        ) : (
          <button
            onClick={() => onBuy(item.id)}
            disabled={!canAfford}
            className={`flex items-center justify-center gap-1 mx-auto px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              canAfford
                ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 cursor-pointer"
                : "bg-[var(--theme-card-bg)] text-[var(--theme-text-muted)] cursor-not-allowed"
            }`}
          >
            <span>🪙</span>
            <span>{item.cost}</span>
          </button>
        )}
      </div>
    </motion.div>
  );
}

function EarnInfo() {
  const rates = [
    { action: "Complete a lesson", actionCn: "完成一节课", coins: COIN_RATES.lessonComplete, icon: "📚" },
    { action: "Perfect quiz score", actionCn: "测验满分", coins: COIN_RATES.quizPerfect, icon: "💯" },
    { action: "Good quiz (≥80%)", actionCn: "测验≥80分", coins: COIN_RATES.quizGood, icon: "👍" },
    { action: "Coding challenge", actionCn: "编程挑战", coins: COIN_RATES.challengeComplete, icon: "🏆" },
    { action: "Daily login", actionCn: "每日登录", coins: COIN_RATES.firstLogin, icon: "📅" },
    { action: "3-day streak", actionCn: "连续3天", coins: COIN_RATES.streakBonus3, icon: "🔥" },
    { action: "7-day streak", actionCn: "连续7天", coins: COIN_RATES.streakBonus7, icon: "🔥" },
    { action: "Complete module", actionCn: "完成整个模块", coins: COIN_RATES.moduleComplete, icon: "🎓" },
  ];

  return (
    <div className="rounded-xl p-5" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
      <h3 className="text-lg font-bold mb-1">💰 How to Earn Coins</h3>
      <p className="text-xs mb-4" style={{ color: "var(--theme-text-muted)" }}>如何赚取金币</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {rates.map((r) => (
          <div key={r.action} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ backgroundColor: "var(--theme-bg)" }}>
            <div className="flex items-center gap-2">
              <span>{r.icon}</span>
              <div>
                <div className="text-xs font-medium">{r.action}</div>
                <div className="text-[10px]" style={{ color: "var(--theme-text-muted)" }}>{r.actionCn}</div>
              </div>
            </div>
            <span className="text-yellow-400 text-sm font-bold">+{r.coins} 🪙</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [coinState, setCoinState] = useState<CoinState | null>(null);
  const [category, setCategory] = useState<Category>("all");
  const [showPurchase, setShowPurchase] = useState<string | null>(null);
  const [purchaseMsg, setPurchaseMsg] = useState("");

  useEffect(() => {
    setCoinState(getCoinState());
  }, []);

  if (!coinState) return null;

  const filteredItems = category === "all"
    ? REWARD_CATALOG
    : REWARD_CATALOG.filter((r) => r.category === category);

  // Sort: legendary first, then by cost descending
  const rarityOrder = { legendary: 0, epic: 1, rare: 2, common: 3 };
  const sorted = [...filteredItems].sort(
    (a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity] || b.cost - a.cost
  );

  const handleAction = (itemId: string) => {
    const item = REWARD_CATALOG.find((r) => r.id === itemId)!;

    // If already owned title → equip
    if (item.category === "title" && isOwned(itemId)) {
      const s = equipTitle(coinState.equippedTitle === itemId ? "" : itemId);
      setCoinState({ ...s });
      return;
    }

    // If already owned → ignore
    if (isOwned(itemId)) return;

    // Buy
    const result = spendCoins(itemId);
    if (result.success) {
      setCoinState({ ...result.state });
      setShowPurchase(itemId);
      setPurchaseMsg(`🎉 Unlocked ${item.name}!`);
      setTimeout(() => setShowPurchase(null), 2000);
    } else {
      setPurchaseMsg(result.error || "");
      setShowPurchase("error");
      setTimeout(() => setShowPurchase(null), 2000);
    }
  };

  const categories: { key: Category; label: string; labelCn: string; icon: string }[] = [
    { key: "all", label: "All", labelCn: "全部", icon: "🛍️" },
    { key: "avatar", label: "Avatars", labelCn: "头像", icon: "😎" },
    { key: "title", label: "Titles", labelCn: "称号", icon: "🏷️" },
    { key: "theme", label: "Themes", labelCn: "主题", icon: "🎨" },
  ];

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">🏪 Reward Shop</h1>
            <p className="text-sm" style={{ color: "var(--theme-text-muted)" }}>奖励商店 — 用金币兑换酷炫奖品！</p>
          </div>
          <CoinDisplay coins={coinState.coins} />
        </div>
      </motion.div>

      {/* Purchase notification */}
      <AnimatePresence>
        {showPurchase && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`text-center py-3 rounded-xl font-bold ${
              showPurchase === "error"
                ? "bg-red-500/20 text-red-400"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            {purchaseMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{
              backgroundColor: category === c.key ? "color-mix(in srgb, var(--color-warning) 20%, transparent)" : "var(--theme-card-bg)",
              color: category === c.key ? "var(--color-warning)" : "var(--theme-text-secondary)",
              border: `1px solid ${category === c.key ? "color-mix(in srgb, var(--color-warning) 30%, transparent)" : "var(--theme-border)"}`,
            }}
          >
            <span>{c.icon}</span>
            <span>{c.label}</span>
            <span className="text-[10px]" style={{ color: "var(--theme-text-muted)" }}>{c.labelCn}</span>
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-lg p-3 text-center" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
          <div className="text-2xl font-bold text-yellow-400">{coinState.totalEarned}</div>
          <div className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>Total Earned · 累计获得</div>
        </div>
        <div className="rounded-lg p-3 text-center" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
          <div className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
            {coinState.unlockedAvatars.length + coinState.unlockedTitles.length + coinState.unlockedThemes.length}
          </div>
          <div className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>Unlocked · 已解锁</div>
        </div>
        <div className="rounded-lg p-3 text-center" style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}>
          <div className="text-2xl font-bold text-purple-400">{REWARD_CATALOG.length}</div>
          <div className="text-xs" style={{ color: "var(--theme-text-secondary)" }}>Total Items · 总商品</div>
        </div>
      </div>

      {/* Reward grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
      >
        {sorted.map((item) => (
          <RewardCard
            key={item.id}
            item={item}
            owned={isOwned(item.id)}
            canAfford={coinState.coins >= item.cost}
            onBuy={handleAction}
            coinState={coinState}
          />
        ))}
      </motion.div>

      {/* How to earn */}
      <EarnInfo />
    </div>
  );
}
