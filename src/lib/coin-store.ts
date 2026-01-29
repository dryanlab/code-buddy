// Coin system — earn coins through progress, spend on avatars, titles, themes

const COIN_KEY = "code-buddy-coins";

export interface CoinState {
  coins: number;
  totalEarned: number;
  unlockedAvatars: string[];
  unlockedTitles: string[];
  unlockedThemes: string[];
  equippedTitle: string;
}

const defaultState: CoinState = {
  coins: 0,
  totalEarned: 0,
  unlockedAvatars: [],
  unlockedTitles: [],
  unlockedThemes: [],
  equippedTitle: "",
};

// ─── Reward catalog ──────────────────────────────────────────

export interface RewardItem {
  id: string;
  name: string;
  nameCn: string;
  icon: string;
  cost: number;
  category: "avatar" | "title" | "theme";
  rarity: "common" | "rare" | "epic" | "legendary";
}

export const REWARD_CATALOG: RewardItem[] = [
  // ── Avatars (common: 50, rare: 150, epic: 400, legendary: 800) ──
  // Common
  { id: "av-cat", name: "Cool Cat", nameCn: "酷猫", icon: "🐱", cost: 50, category: "avatar", rarity: "common" },
  { id: "av-dog", name: "Loyal Pup", nameCn: "忠犬", icon: "🐶", cost: 50, category: "avatar", rarity: "common" },
  { id: "av-rabbit", name: "Quick Bunny", nameCn: "飞兔", icon: "🐰", cost: 50, category: "avatar", rarity: "common" },
  { id: "av-bear", name: "Code Bear", nameCn: "代码熊", icon: "🐻", cost: 50, category: "avatar", rarity: "common" },
  { id: "av-monkey", name: "Smart Monkey", nameCn: "聪明猴", icon: "🐵", cost: 50, category: "avatar", rarity: "common" },
  // Rare
  { id: "av-wolf", name: "Lone Wolf", nameCn: "独狼", icon: "🐺", cost: 150, category: "avatar", rarity: "rare" },
  { id: "av-owl", name: "Wise Owl", nameCn: "智慧猫头鹰", icon: "🦉", cost: 150, category: "avatar", rarity: "rare" },
  { id: "av-tiger", name: "Fierce Tiger", nameCn: "猛虎", icon: "🐯", cost: 150, category: "avatar", rarity: "rare" },
  { id: "av-shark", name: "Code Shark", nameCn: "代码鲨", icon: "🦈", cost: 150, category: "avatar", rarity: "rare" },
  { id: "av-eagle", name: "Sky Eagle", nameCn: "天鹰", icon: "🦅", cost: 150, category: "avatar", rarity: "rare" },
  // Epic
  { id: "av-dragon", name: "Fire Dragon", nameCn: "火龙", icon: "🐲", cost: 400, category: "avatar", rarity: "epic" },
  { id: "av-phoenix", name: "Phoenix", nameCn: "凤凰", icon: "🔥", cost: 400, category: "avatar", rarity: "epic" },
  { id: "av-alien", name: "Alien Coder", nameCn: "外星程序员", icon: "👽", cost: 400, category: "avatar", rarity: "epic" },
  { id: "av-ninja", name: "Code Ninja", nameCn: "忍者", icon: "🥷", cost: 400, category: "avatar", rarity: "epic" },
  // Legendary
  { id: "av-crown", name: "Code King", nameCn: "编程之王", icon: "👑", cost: 800, category: "avatar", rarity: "legendary" },
  { id: "av-galaxy", name: "Galaxy Brain", nameCn: "银河大脑", icon: "🌌", cost: 800, category: "avatar", rarity: "legendary" },

  // ── Titles (common: 30, rare: 100, epic: 250, legendary: 500) ──
  { id: "ti-newbie", name: "Bug Squasher", nameCn: "灭虫达人", icon: "🪲", cost: 30, category: "title", rarity: "common" },
  { id: "ti-curious", name: "Curious Explorer", nameCn: "好奇探索者", icon: "🔍", cost: 30, category: "title", rarity: "common" },
  { id: "ti-fast", name: "Speed Coder", nameCn: "闪电码手", icon: "⚡", cost: 100, category: "title", rarity: "rare" },
  { id: "ti-creative", name: "Creative Mind", nameCn: "创意达人", icon: "🎨", cost: 100, category: "title", rarity: "rare" },
  { id: "ti-wizard", name: "Code Wizard", nameCn: "编程巫师", icon: "🧙", cost: 250, category: "title", rarity: "epic" },
  { id: "ti-master", name: "Grand Master", nameCn: "大宗师", icon: "🏆", cost: 250, category: "title", rarity: "epic" },
  { id: "ti-legend", name: "Living Legend", nameCn: "传奇人物", icon: "🌟", cost: 500, category: "title", rarity: "legendary" },

  // ── Themes (rare: 120, epic: 300, legendary: 600) ──
  { id: "th-neon", name: "Neon Glow", nameCn: "霓虹光", icon: "💜", cost: 120, category: "theme", rarity: "rare" },
  { id: "th-forest", name: "Forest Green", nameCn: "森林绿", icon: "🌲", cost: 120, category: "theme", rarity: "rare" },
  { id: "th-sunset", name: "Sunset Orange", nameCn: "日落橙", icon: "🌅", cost: 120, category: "theme", rarity: "rare" },
  { id: "th-galaxy", name: "Galaxy Purple", nameCn: "星河紫", icon: "🔮", cost: 300, category: "theme", rarity: "epic" },
  { id: "th-golden", name: "Golden Hour", nameCn: "黄金时刻", icon: "✨", cost: 300, category: "theme", rarity: "epic" },
  { id: "th-matrix", name: "Matrix Rain", nameCn: "矩阵之雨", icon: "🟢", cost: 600, category: "theme", rarity: "legendary" },
];

// ─── Coin earning rates ──────────────────────────────────────

export const COIN_RATES = {
  lessonComplete: 10,       // per lesson
  quizPerfect: 15,          // 100% quiz score bonus
  quizGood: 5,              // ≥80% quiz score bonus
  challengeComplete: 8,     // per coding challenge
  streakBonus3: 20,         // 3-day streak bonus
  streakBonus7: 50,         // 7-day streak bonus
  streakBonus30: 200,       // 30-day streak bonus
  codeRun10: 10,            // every 10 code runs
  firstLogin: 5,            // daily login bonus
  moduleComplete: 50,       // finish a whole module
};

// ─── State management ────────────────────────────────────────

export function getCoinState(): CoinState {
  if (typeof window === "undefined") return { ...defaultState };
  try {
    const raw = localStorage.getItem(COIN_KEY);
    if (!raw) return { ...defaultState };
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return { ...defaultState };
  }
}

function saveCoinState(s: CoinState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(COIN_KEY, JSON.stringify(s));
}

export function earnCoins(amount: number, _reason?: string): CoinState {
  const s = getCoinState();
  s.coins += amount;
  s.totalEarned += amount;
  saveCoinState(s);
  return s;
}

export function spendCoins(itemId: string): { success: boolean; error?: string; state: CoinState } {
  const s = getCoinState();
  const item = REWARD_CATALOG.find((r) => r.id === itemId);
  if (!item) return { success: false, error: "Item not found", state: s };

  // Check already owned
  const owned =
    item.category === "avatar" ? s.unlockedAvatars :
    item.category === "title" ? s.unlockedTitles :
    s.unlockedThemes;
  if (owned.includes(itemId)) return { success: false, error: "Already owned!", state: s };

  // Check balance
  if (s.coins < item.cost) return { success: false, error: `Need ${item.cost - s.coins} more coins!`, state: s };

  // Purchase
  s.coins -= item.cost;
  if (item.category === "avatar") s.unlockedAvatars.push(itemId);
  else if (item.category === "title") s.unlockedTitles.push(itemId);
  else s.unlockedThemes.push(itemId);

  saveCoinState(s);
  return { success: true, state: s };
}

export function equipTitle(titleId: string): CoinState {
  const s = getCoinState();
  if (s.unlockedTitles.includes(titleId) || titleId === "") {
    s.equippedTitle = titleId;
    saveCoinState(s);
  }
  return s;
}

export function isOwned(itemId: string): boolean {
  const s = getCoinState();
  const item = REWARD_CATALOG.find((r) => r.id === itemId);
  if (!item) return false;
  if (item.category === "avatar") return s.unlockedAvatars.includes(itemId);
  if (item.category === "title") return s.unlockedTitles.includes(itemId);
  return s.unlockedThemes.includes(itemId);
}

export function getRarityColor(rarity: string): string {
  switch (rarity) {
    case "common": return "text-slate-300 border-slate-500/30 bg-slate-500/10";
    case "rare": return "text-blue-400 border-blue-500/30 bg-blue-500/10";
    case "epic": return "text-purple-400 border-purple-500/30 bg-purple-500/10";
    case "legendary": return "text-yellow-400 border-yellow-500/30 bg-yellow-500/10";
    default: return "text-slate-300";
  }
}

export function getRarityLabel(rarity: string): { en: string; cn: string } {
  switch (rarity) {
    case "common": return { en: "Common", cn: "普通" };
    case "rare": return { en: "Rare", cn: "稀有" };
    case "epic": return { en: "Epic", cn: "史诗" };
    case "legendary": return { en: "Legendary", cn: "传说" };
    default: return { en: "", cn: "" };
  }
}
