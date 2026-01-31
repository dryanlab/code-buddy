# Code Buddy — Development Documentation

> **Python 编程教育平台** · 面向 10-16 岁零基础学生
> 学编程 · 懂计算机 · 用 AI — 从零开始，成为真正的 Programmer 🚀

**Live**: https://code-buddy-ruddy.vercel.app
**Repo**: https://github.com/dryanlab/code-buddy
**Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Pyodide + Supabase

---

## 目录

1. [项目概览](#项目概览)
2. [技术架构](#技术架构)
3. [目录结构](#目录结构)
4. [课程体系](#课程体系)
5. [核心功能](#核心功能)
6. [数据模型](#数据模型)
7. [Python 执行引擎](#python-执行引擎)
8. [认证与云同步](#认证与云同步)
9. [主题系统](#主题系统)
10. [部署](#部署)
11. [已知问题](#已知问题)
12. [开发路线图](#开发路线图)

---

## 项目概览

Code Buddy 是 "My Buddies" 教育套装的一部分，专为 William（12岁）设计，面向所有 Grade 4-10 学生。

### 设计理念
- **一条递进路线，不同起点，同终点** — 按编程水平分级，不按年龄
- **寓教于乐** — 每课有故事场景，coding challenge 用游戏包装
- **主线扎实，练习好玩** — concept 教真知识，project 做有趣的东西
- **真实 Python** — 在浏览器里跑真正的 CPython（Pyodide），不是模拟器
- **中英双语** — 英文主、中文辅

### 三大支柱
| 支柱 | 页面 | 内容 |
|------|------|------|
| 🐍 Python 编程 | `/dashboard/lessons` | 31 节课，5 个区域 |
| 🔬 计算机科学 | `/dashboard/explore` | 14 张知识卡片 + 9 个互动模块 |
| 📦 数据结构 | `/dashboard/data-structures` | 8 个可视化交互模块 |

---

## 技术架构

### 依赖
| 技术 | 用途 |
|------|------|
| **Next.js 16** | App Router, Server Components |
| **React 19** | UI framework |
| **TypeScript 5** | 类型安全 |
| **Tailwind CSS 4** | 样式（CSS 变量主题系统） |
| **Pyodide 0.27.7** | 浏览器端 Python 执行（WebAssembly CPython） |
| **Monaco Editor** | 代码编辑器（VS Code 同款） |
| **Framer Motion 12** | 动画 |
| **Supabase** | 认证（Google OAuth）+ 云端数据同步 |
| **@google/generative-ai** | Gemini AI 聊天 |
| **@dnd-kit** | 拖拽排序（Parsons puzzles） |
| **canvas-confetti** | 庆祝特效 |

### 外部服务
| 服务 | 配置 |
|------|------|
| **Supabase** | Project: my-buddies, URL: `lsdgefrafvyuwydnjsqq.supabase.co` |
| **Google OAuth** | Client ID: `139470594768-...` |
| **Gemini AI** | API Key 在 Vercel 环境变量 `GOOGLE_AI_API_KEY` |
| **Vercel** | 自动部署，team: dryans-projects-e0a9645e |

---

## 目录结构

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Landing page（首页）
│   ├── login/page.tsx            # 登录
│   ├── register/page.tsx         # 注册
│   ├── complete-profile/page.tsx # 完善资料
│   ├── api/chat/route.ts         # Gemini AI chat API
│   └── dashboard/
│       ├── layout.tsx            # Dashboard 布局（Sidebar + auth check）
│       ├── page.tsx              # Dashboard 首页
│       ├── lessons/
│       │   ├── page.tsx          # 课程列表（5 个 Area）
│       │   └── [id]/page.tsx     # 单课页面（sections 渲染）
│       ├── explore/page.tsx      # 🔬 Explore CS（知识卡片 + 互动模块）
│       ├── data-structures/page.tsx  # 📦 Data Structure Playground
│       ├── code-lab/page.tsx     # 自由代码实验室
│       ├── ai-chat/page.tsx      # AI 助教聊天
│       ├── progress/page.tsx     # 学习进度
│       ├── shop/page.tsx         # 金币商店
│       ├── settings/page.tsx     # 设置（主题等）
│       ├── skill-quiz/page.tsx   # 技能评估测试
│       └── debug/page.tsx        # 调试工具页面
│
├── components/
│   ├── CodeEditor.tsx            # ⭐ 主代码编辑器（Monaco + Run/Step + Output）
│   ├── ConceptSection.tsx        # ⭐ 概念教学组件（Code Anatomy + Step）
│   ├── MemoryModel.tsx           # 变量内存可视化面板
│   ├── InteractiveExercises.tsx  # 交互练习（填空/Parsons/选择）
│   ├── InlineCodeExercise.tsx    # 嵌入式代码练习
│   ├── TurtleQuiz.tsx            # 🐢 测验（龟进度条）
│   ├── SkillQuiz.tsx             # 技能评估组件
│   ├── Celebration.tsx           # 🎉 confetti 庆祝动画
│   ├── Sidebar.tsx               # 侧边栏导航
│   ├── ThemeChooserModal.tsx     # 主题选择器
│   ├── GoogleSignInButton.tsx    # Google 登录按钮
│   ├── data-structures/          # 📦 数据结构可视化组件
│   │   ├── shared.tsx            # 共享 UI（InfoCard, ControlPanel, OperationLog）
│   │   ├── ArrayVisualizer.tsx   # 数组
│   │   ├── ListVisualizer.tsx    # 列表
│   │   ├── LinkedListVisualizer.tsx  # 链表
│   │   ├── StackVisualizer.tsx   # 栈（含括号匹配游戏）
│   │   ├── QueueVisualizer.tsx   # 队列
│   │   ├── HashMapVisualizer.tsx # 哈希表
│   │   ├── BSTVisualizer.tsx     # 二叉搜索树（含猜数字游戏）
│   │   └── SortingArena.tsx      # 排序竞技场（4种算法赛跑）
│   └── explore/                  # 🔬 Explore CS 互动模块
│       ├── BinaryLab.tsx         # 二进制实验室
│       ├── CryptoLab.tsx         # 加密实验室（凯撒密码）
│       ├── PixelArt.tsx          # 像素画（8x8 bitmap）
│       └── NetworkSim.tsx        # 网络传输模拟
│
├── lib/
│   ├── pyodide-engine.ts         # ⭐ Python 执行引擎（Pyodide + AST trace）
│   ├── turtle-graphics.ts        # 🐢 Turtle 图形模拟
│   ├── auth-store.ts             # 用户认证（Supabase + localStorage fallback）
│   ├── supabase.ts               # Supabase 客户端
│   ├── cloud-sync.ts             # 云端进度同步
│   ├── progress-store.ts         # 学习进度存储
│   ├── skill-store.ts            # 技能等级存储
│   ├── coin-store.ts             # 金币系统
│   ├── ai-provider.ts            # Gemini AI 接口
│   ├── theme-context.tsx          # 主题 Context
│   ├── themes.ts                 # 9 套主题定义
│   ├── mock-python.ts            # Python mock（备用）
│   └── useUserProfile.ts         # 用户资料 hook
│
├── data/
│   ├── lessons.ts                # ⭐ 全部课程数据（~8800 行）
│   └── quiz-data.ts              # 全部测验数据（~2500 行，310+ 题）
```

---

## 课程体系

### 5 个区域，31 节课

#### 🏝️ Area 1: Starter Island（新手岛）— 6 课
| ID | 标题 | 主题 | 核心知识 |
|----|------|------|----------|
| 1-1 | Hacker Invasion! | 黑客入侵 | `print()`, 字符串, 转义字符 |
| 1-2 | Mad Libs Story Generator! | 傻瓜造句机 | 变量, `input()`, f-string |
| 1-3 | Pizza Calculator Supreme! | 披萨计算器 | 数学运算, `int()`, `float()`, 类型转换 |
| 1-4 | Turtle Art Master! | 海龟画图大师 | `import turtle`, 基本画图命令 |
| 1-5 | Rollercoaster Safety Inspector! | 过山车安检员 | `if`/`elif`/`else`, 比较运算, 逻辑运算 |
| 1-6 | Text Adventure Game | 冒险文字游戏 | 综合项目：组合以上所有概念 |

#### 🌀 Area 2: Loop Forest（循环森林）— 6 课
| ID | 标题 | 主题 | 核心知识 |
|----|------|------|----------|
| 2-1 | Turtle Polygon Master + Kaleidoscope! | 多边形大师 | `for` 循环, `range()` |
| 2-2 | RPG Backpack System! | RPG背包系统 | 列表, `append`/`remove`/`pop`, 索引 |
| 2-3 | Guess Number 2.0 | 猜数字游戏 | `while` 循环, `break`, `continue` |
| 2-4 | Pattern Printing Palace! | 图案打印宫 | 嵌套循环 |
| 2-5 | Password Encoder | 密码加密器 | 字符串方法, 切片, `ord()`/`chr()` |
| 2-6 | Rock Paper Scissors Championship | 石头剪刀布大赛 | 综合项目：循环+列表+条件 |

#### 🏗️ Area 3: Builder City（建造城）— 7 课
| ID | 标题 | 主题 | 核心知识 |
|----|------|------|----------|
| 3-1 | Code Block Factory | 代码积木工厂 | 函数定义, 参数, 返回值 |
| 3-2 | Spy Database | 特工档案系统 | 字典, key-value, 嵌套字典 |
| 3-3 | High Score Board | 高分榜 | 文件 I/O, `open`/`read`/`write` |
| 3-4 | Bug Detective Agency | Bug侦探社 | 调试技巧, `print` debugging |
| 3-5 | Error Shield | 错误防护盾 | `try`/`except`/`finally`, 异常类型 |
| 3-6 | Module Toolbox | 模块工具箱 | `import`, 标准库, `random`/`math` |
| 3-7 | Student Grade Manager | 学生成绩管理器 | 综合项目：函数+字典+文件+异常 |

#### 🧪 Area 4: Science Lab（实验室）— 6 课
| ID | 标题 | 主题 | 核心知识 |
|----|------|------|----------|
| 4-1 | 🎮 Space Invader Data Station | 太空入侵数据站 | 数据统计, ASCII可视化, `max`/`min`/`sum` |
| 4-2 | 🎰 Casino Tycoon | 赌场大亨 | `random`模块, 概率模拟, 蒙特卡洛 |
| 4-3 | 🏗️ Demolition City | 毁灭城市 | 物理公式, 三角函数, 抛体运动 |
| 4-4 | 🕵️ CSI: Code Scene Investigation | 编程探案 | 搜索, 过滤, 模式匹配 |
| 4-5 | 🕶️ The Matrix: Hacker Academy | 黑客帝国 | 凯撒密码, XOR加密, 密码强度 |
| 4-6 | 🧬 Life Simulator | 生命模拟器 | 生态系统模拟, 捕食者-猎物 |

#### 🤖 Area 5: AI Frontier（AI前哨站）— 6 课
| ID | 标题 | 主题 | 核心知识 |
|----|------|------|----------|
| 5-1 | 🧠 Train Your AI Pet | 训练AI宠物 | 规则系统, if/else决策树, 情感分析 |
| 5-2 | 🎮 Build a Game AI | AI游戏对手 | 井字棋AI, 策略算法, 模式学习 |
| 5-3 | 🎨 AI Artist | AI艺术家 | ASCII艺术生成, 马尔可夫链文本生成 |
| 5-4 | 🔮 Prediction Machine | 预言机器 | 线性回归, KNN分类, 趋势预测 |
| 5-5 | 🤖 AI Detective | AI侦探 | 偏见检测, AI伦理, 公平性 |
| 5-6 | 🎓 My Masterpiece | 毕业创作 | 6个方向自选综合项目 |

### 每课结构（6-8 个 Sections）
```
text        → 故事引入（中英双语，有代入感）
concept     → 语法教学（syntaxCards + codeAnatomy 逐行解释）
interactive → 热身练习（填空 / Parsons拖拽 / 输出选择）
code        → 跟做示例（可运行 + 可Step）
challenge   → 2-3个 coding challenge（starterCode + hint + solution）
quiz        → 综合测验（选择题 + coding题，🐢龟进度条）
```

### 技能分级
| 等级 | 名称 | 描述 |
|------|------|------|
| 🌱 Explorer | 探索者 | 零基础，从 print 开始 |
| 🌿 Builder | 建造者 | 懂基础，从循环/函数开始 |
| 🚀 Hacker | 黑客 | 有经验，从高级主题开始 |

通过 `/dashboard/skill-quiz` 评估，所有内容始终可访问。

---

## 核心功能

### 🔬 Explore CS（计算机科学探秘）

**14 张知识卡片**：CPU, RAM, SSD/HDD, Binary, GPU, Network, OS, FileSystem, Bugs, Encoding, Encryption, Internet, AI/ML, Input/Output

**9 个互动模块**：
| Tab | 功能 |
|-----|------|
| CPU Simulator | Fetch-Decode-Execute-Store 循环动画 |
| Memory Visualizer | RAM 地址+数据可视化 |
| Speed Race | 不同存储/计算速度对比 |
| Process Scheduler | 进程调度模拟 |
| Binary Lab | 文本 ↔ 二进制互转（Matrix风格） |
| Crypto Lab | 凯撒密码加密/解密 |
| Pixel Art | 8×8 bitmap 像素画编辑器 |
| Network Sim | DNS→TCP→HTTP 数据包传输动画 |

### 📦 Data Structure Playground（数据结构游乐场）

| Tab | 数据结构 | 交互 |
|-----|----------|------|
| Array | 编号储物柜 | Read/Write/Insert/Delete + 复杂度对比 |
| List | 购物清单 | append/insert/remove/pop/sort/reverse |
| Linked List | 寻宝链条 | 节点+箭头动画，搜索遍历高亮 |
| Stack | 叠盘子 | Push/Pop弹跳动画 + **括号匹配游戏** |
| Queue | 排队买票 | Enqueue/Dequeue 人物动画 |
| HashMap | 字典 | Hash函数齿轮动画 + 碰撞演示 |
| BST | 猜数字树 | 插入/搜索路径动画 + **1-100猜数字游戏** |
| Sorting Arena | 排序竞技场 | 4种算法柱状图赛跑 + 速度控制 |

### 💻 Code Lab（Python IDE）

完整的浏览器端 Python IDE：
| 功能 | 描述 |
|------|------|
| **项目管理** | 创建/重命名/删除/复制项目，云端同步（Supabase）+ 本地存储 |
| **多文件 Tab** | 同时打开多个项目/练习，tab 切换 |
| **代码模板** | 6 种模板：空白、Hello World、计算器、Turtle、游戏、数据分析 |
| **自动保存** | 2 秒 debounce 自动保存 |
| **断点调试** | 点击行号设断点，Step Over / Continue / Variable Watch |
| **练习系统** | 分难度练习题（和项目管理并列 tab） |

> ⚠️ 需在 Supabase 创建 `user_projects` 表（SQL 见 commit message）

### 👀 预览模式（试用版）

未注册用户可通过首页 "Try Free" 按钮体验：
| 内容 | 预览权限 |
|------|----------|
| 课程 | 每个 Area 第一课（1-1, 2-1, 3-1, 4-1, 5-1） |
| Explore CS | 知识卡片全开，互动模块前 2 个 |
| Data Structures | Array + Stack |
| Code Lab | Free Mode + 前 3 个练习 |
| Progress/Shop/Settings/AI Chat | 🔒 锁定 |

锁定内容显示 🔒 + 优雅注册弹窗，顶部有可关闭的预览横幅（5分钟后重现）。

### 其他功能
- **AI Chat** — Gemini AI 助教
- **Progress** — 学习进度追踪
- **Shop** — 金币商店（用 XP 换装备）
- **Skill Quiz** — 编程水平评估

---

## 数据模型

### Lesson 数据结构 (`src/data/lessons.ts`)
```typescript
interface Lesson {
  id: string;              // "1-1", "2-3", "4-5" etc.
  moduleId: string;        // "area-1" to "area-5"
  title: string;
  subtitle: string;        // English + Chinese
  icon: string;            // emoji
  xp: number;              // 经验值奖励
  duration: string;        // "15 min"
  order: number;
  gradeRange: [number, number];
  difficulty: string;
  skillLevel: string;      // "beginner" | "intermediate" | "advanced"
  sections: LessonSection[];
}

interface LessonSection {
  type: "text" | "concept" | "interactive" | "code" | "challenge" | "quiz";
  emoji?: string;
  content?: string;        // markdown text
  concept?: ConceptData;   // syntaxCards + codeAnatomy
  quiz?: QuizQuestion[];
  challenges?: CodeChallenge[];
  interactive?: InteractiveExercise;
}

interface CodeChallenge {
  title: string;
  description: string;
  starterCode: string;     // 带注释的起始代码
  hint: string;
  solution: string;
  expectedOutput?: string;
}
```

### Quiz 数据结构 (`src/data/quiz-data.ts`)
```typescript
interface QuizQuestion {
  type?: "multiple-choice" | "coding";
  question: string;
  options?: string[];
  correctIndex?: number;
  prompt?: string;         // coding challenge 题目
  starterCode?: string;
  expectedOutput?: string;
  hint?: string;
  explanation: string;     // 中英双语解释
}
```

### ⚠️ 代码中的转义规则
所有 Python 代码在 JS 模板字符串（backticks）中：
- `\n` → 必须写成 `\\n`
- `\t` → 必须写成 `\\t`
- `${` → 必须写成 `\${`
- 这个规则已导致过 48+ 处 bug，修改课程内容时要特别注意！

---

## Python 执行引擎

文件：`src/lib/pyodide-engine.ts`

### 架构
```
浏览器 → Pyodide (WebAssembly CPython) → 执行 Python 代码
                                        ↓
                              stdout 捕获 → Output 面板
                              变量捕获 → Memory Model 面板
                              turtle mock → Canvas 渲染
```

### 关键函数

| 函数 | 功能 |
|------|------|
| `loadPyodideEngine()` | 加载 Pyodide WASM（首次约 10MB） |
| `runPython(code)` | 执行 Python 代码，返回 output + variables |
| `traceExecution(code)` | ⭐ 逐行追踪执行（用于 Step 模式） |

### Step 执行原理（AST 代码注入）
```
原始代码 → AST 解析 → _LineInjector 注入 _trace_line(N) → 编译执行
```

1. **`_LineInjector`**（AST NodeTransformer）递归遍历所有 body（Module, For, While, If, With, Try, FunctionDef, ClassDef），在每个语句前注入 `_trace_line(lineno)` 调用
2. **`_trace_line(n)`** 在每行执行前捕获：当前行号、累计 stdout 输出、全局变量快照
3. **Output 偏移**：`_trace_line` 在语句执行前触发，所以 step[i] 的执行后状态 = step[i+1] 的捕获值
4. **为什么不用 `sys.settrace()`**：Pyodide 的 WebAssembly 环境中不可靠

### Turtle 图形
- 文件：`src/lib/turtle-graphics.ts`
- 浏览器端 mock 实现，渲染到 `#turtle-output` canvas
- 支持基本命令：forward, backward, left, right, penup, pendown, color, etc.

### Input 处理
- Step 模式：首次执行收集所有 `input()` 值，回放时自动填入
- 普通模式：使用 `js.prompt()` 弹窗

---

## 认证与云同步

### 认证流程
```
Google OAuth → Supabase Auth → profiles 表 → localStorage 缓存
                                              ↓
                              fallback: localStorage-only（无需注册）
```

### 数据库表（Supabase）
- **profiles** — 用户资料（name, avatar, grade）
- **progress** — 学习进度
- **settings** — 用户设置

### ⚠️ 已知问题
- RLS policy 阻止新用户注册（`new row violates row-level security policy for table "profiles"`）
- 需要在 Supabase Dashboard 检查 profiles 表的 INSERT policy

---

## 主题系统

文件：`src/lib/themes.ts` + `src/lib/theme-context.tsx`

### 9 套主题
| 名称 | 描述 |
|------|------|
| Default | 深蓝 |
| Sakura 樱花 | 粉色 |
| Magic 魔法 | 紫金 |
| Space 太空 | 深紫蓝 |
| Cyber 科技 | 绿色（默认选中） |
| Ocean 海洋 | 蓝绿 |
| Arcade 游戏 | 橙黄 |
| Nature 自然 | 绿色 |
| Flame 烈焰 | 红橙 |

### CSS 变量
所有组件使用 `var(--theme-*)` CSS 变量，切换主题只需改变变量值：
```css
--theme-bg, --theme-card-bg, --theme-text-primary,
--theme-text-secondary, --theme-text-muted, --theme-border,
--theme-input-bg, --theme-accent, --theme-success, --theme-error
```

---

## 部署

### Vercel 自动部署
- Push to `main` → 自动触发 Vercel 部署
- Team: `dryans-projects-e0a9645e`
- Project: `code-buddy`
- Production URL: https://code-buddy-ruddy.vercel.app

### 环境变量（Vercel Dashboard）
```
NEXT_PUBLIC_SUPABASE_URL=https://lsdgefrafvyuwydnjsqq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
GOOGLE_AI_API_KEY=AIzaSy...
```

### 本地开发
```bash
cd projects/code-buddy
npm install
npm run dev          # http://localhost:3000
npm run build        # 生产构建
npm run lint         # ESLint 检查
```

---

## ⚠️ 课程内容质量标准 (MANDATORY)

**所有课程（Python / C++ / DS / Algorithms / 未来课程）必须遵循以下标准。**
**违反此标准的课程不得上线。**

### Code Section 教学讲解要求

每个 `type: "code"` section 的 `content` 字段**必须包含详细教学讲解**，不能只写一两句话就上代码。

✅ **正确示范**（参考 Python 课 / DS 课）：
```
🎯 What you'll learn: [具体学习目标]
学习目标：[中文]

[生动的现实世界类比，让概念具象化]
[详细解释原理、为什么这样做、什么时候用]

🔑 Key things to notice:
- [关键点1]
- [关键点2]
- [关键点3]

👀 [引导学生观察代码的提示]
```

❌ **错误示范**（算法课初版犯过的错误）：
```
Linear search isn't just for numbers! Let's try different uses.
线性搜索不只能搜数字！
[直接上代码，没有讲解]
```

### 最低内容要求 Checklist（每课）

- [ ] 每个 code section 有 🎯学习目标 + 类比 + 🔑关键点
- [ ] 每个 code section 有 `exercise` 嵌入式练习（学完立即动手）
- [ ] 至少 2 个 `type: "challenge"` 综合编程挑战
- [ ] 至少 1 个 Code Lab 项目（链接到 code-challenges.ts）
- [ ] 8-10 道 quiz 题（选择题 + coding 题，答案分布均匀）
- [ ] 所有内容双语（English + Chinese）
- [ ] 课程末尾引导到 Code Lab：`💡 This lesson's project is available in Code Lab!`

### 新课程开发流程

1. **创建课程结构** — modules, lessons, sections 骨架
2. **填写教学内容** — 每个 code section 的详细讲解（🎯+类比+🔑+👀）
3. **添加嵌入式练习** — 每个 code section 的 exercise
4. **添加 challenges** — 每课至少 2 个综合挑战
5. **添加 Code Lab 项目** — 写入 code-challenges.ts，关联 fromLesson
6. **添加 quiz** — 8-10 题/课，答案均匀分布
7. **TypeScript 编译检查** — `npx tsc --noEmit`
8. **浏览器 QA 测试** — 每页打开、每按钮点击、每交互功能操作
9. **部署** — `npx vercel --prod --yes`

> 🚨 **教训记录**: 2026-01-30 算法课初版只生成了代码和简短描述，缺少详细教学讲解、练习、项目。
> 必须参考 Python/DS 课的质量标准，不能降低要求。生成课程时必须一步到位，不能分多次补。

### 双语言练习要求（DS + Algorithms）

DS 和 Algorithms 课程的 **所有练习和项目** 必须提供 Python 和 C++ 两个版本：
- `exercise` = Python 版本（默认）
- `exerciseCpp` = C++ 版本
- `challenge` / `challengeCpp` 同理
- Code Lab 项目：同一题目两个 entry（`language: "python"` 和 `language: "cpp"`）
- UI 提供语言切换 toggle，学生可自由选择

> 原因：DS 和算法是语言无关的知识，学 Python 或 C++ 的学生都需要练习。

### 地图跳转规则

冒险地图（AdventureMap）中所有课程区域的 "Start Learning" 按钮：
- **必须跳到课程列表页** `/dashboard/lessons?track=xxx`，自动选中对应 tab
- **不能直接跳到某一课**（如 `/dashboard/lessons/alg-1-1`）
- 适用于所有现有和未来课程（Python/C++/DS/ALG/...）

---

## ⚠️ 新增 Track/课程 Checklist (MANDATORY)

> 🚨 **2026-01-30 深夜教训**: 加 AI-ML 课程时漏更新了 4 处硬编码映射，导致链接跳错页面、Python 代码被当 C++ 编译。
> **这类 bug 反复出现是不可原谅的。** 以下 checklist 必须逐项执行。

### 每次新增 Track 必须更新的文件（全部！）

| # | 文件 | 要改什么 | 漏改后果 |
|---|------|----------|----------|
| 1 | `src/data/tracks.ts` | 添加 track 定义 | 课程不显示 |
| 2 | `src/components/AdventureMap.tsx` | `trackTabMap` 添加映射 | 地图岛屿点击跳到 Python |
| 3 | `src/app/dashboard/page.tsx` | `getHref()` 添加映射 | Dashboard 课程卡片跳到世界地图 |
| 4 | `src/app/dashboard/lessons/page.tsx` | tab 数组 + `initialTrack` 类型 + `activeModules`/`activeLessons` | 课程列表无法切换到新 tab |
| 5 | `src/app/dashboard/lessons/[id]/page.tsx` | `codeLang` 初始化逻辑 | 新课程可能继承错误的语言设置 |
| 6 | `src/components/Sidebar.tsx` | 如有独立页面需添加导航项 | 侧边栏找不到入口 |

### codeLang 初始化规则
```
cpp- 开头 → 强制 "cpp"
ai- 开头  → 强制 "python"（AI课程只用Python）
其他      → 读 localStorage，默认 "python"
```
> **规则**: 任何纯 Python 课程（无 C++ 版本）的 lessonId 前缀必须加入强制 Python 的判断，避免 localStorage 残留的 C++ 设置污染。

### Wikimedia 图片 URL 验证规则

> 🚨 **教训**: Wikimedia Commons 的 URL hash 路径（如 `/a/a4/`）经常猜错导致 404。

1. **永远不要猜 Wikimedia URL 的 hash 路径**
2. **必须从 Commons 文件页面获取真实 URL**（页面中显示 `upload.wikimedia.org/wikipedia/commons/X/XX/Filename`）
3. **每张图片 `curl -sI` 验证 HTTP 200 后才能写入代码**
4. **批量验证脚本**（部署前运行）：
```bash
grep -oh 'https://upload.wikimedia.org/[^"]*' src/data/chronicles*.ts | \
while read url; do
  code=$(curl -sI -o /dev/null -w "%{http_code}" "$url")
  [ "$code" != "200" ] && echo "❌ $code $url"
done
```
5. **`onError` handler 已有**（隐藏坏图），但不能依赖它——用户看不到图是 bug，不是 feature

---

## 已知问题

### 🔴 严重
- **Supabase RLS**: profiles 表 INSERT policy 阻止新用户注册，需修复 RLS policy
- **Turtle Step 模式**: (1) Run 后再 Step，canvas 不清除旧图 (2) 直接 Step 图像一次性出来，不是逐行绘制。根因：Step 是先完整运行再回放 trace，turtle 命令在 trace 阶段全部执行了

### 🟡 中等
- **C++ Step 模式**: 目前只隐藏了 Step 按钮，未实现 C++ 逐行执行
- **Pyodide 首次加载**: ~10MB WASM 下载，首次加载慢
- **Turtle 图形**: mock 实现，部分高级命令不支持
- **bits/stdc++.h**: 9个 C++ 代码块使用竞赛头文件，macOS clang 不支持（GCC/在线编译器可用）

### 🟢 低优先级
- **Builder City (Area 3)**: Python 课 7 课只有 concept+quiz，缺 coding challenges
- **git config**: 未设置 user.name/email，每次 commit 有 warning

---

## 2026-01-30 开发总结

### 今日成果概览

```
四门课程完整状态
═══════════════════════════════════════════════════════════

📗 Python (30课)         📘 C++ (30课)
  Code sections: 57        Code sections: 82
  教学讲解 🎯: 128          教学讲解 🎯: 98
  Exercise: 23             Exercise: 24
  Challenge: 62            Challenge: 54 (4→54 ✨)
  Quiz: 310                Quiz: 142
  Code Lab: 290            Code Lab: 250

📙 DS (18课)             📒 ALG (20课)
  Code sections: 28        Code sections: 51
  教学讲解 🎯: 70           教学讲解 🎯: 96
  codeCpp: 28 ✨           codeCpp: 51 ✨
  Exercise: 28 Py+C++ ✨   Exercise: 71 Py + 50 C++ ✨
  Challenge: 17            Challenge: 40 ✨
  ChallengeCpp: 17 ✨      Quiz: 160 ✨
  Quiz: 148 ✨             Code Lab: 21 ✨
  Code Lab: 12 ✨

✨ = 今日新增/大幅增强
```

### 经验教训

#### 1. 课程生成必须一步到位
> 🚨 算法课初版只生成了代码骨架，缺少教学讲解、练习、项目，后续补了5轮才完整。
> **教训**: 新课程必须按"新课程开发流程"9步全部走完再上线，不能分批补。

#### 2. 子 Agent 的任务描述要具体
> 派出的 agent 如果任务描述模糊，产出质量不稳定。
> **教训**: 给 agent 的 task 必须包含：具体的文件路径、数据格式示例（从现有代码复制）、验收标准、禁止修改的范围。

#### 3. QA 必须用编译器/运行器验证
> C++ 代码在 TypeScript 模板字符串中，`\n` 会被解释为真换行符，导致 C++ 字符串断裂。
> **教训**: 不能只检查 TypeScript 编译通过，必须提取实际代码用 `python3` / `g++` 真正运行验证。

#### 4. 不能只读代码做 QA
> Su 明确要求：必须在浏览器中逐页点击测试，不能只看代码。
> **教训**: QA = 真实运行环境测试。代码审查 ≠ QA。

#### 5. 数据文件位置要搞清楚
> Python quiz 数据在 `quiz-data.ts`，不在 `lessons.ts`。统计时数错了位置，误报缺口。
> **教训**: 统计前先搞清楚数据架构，用实际 import 链追踪数据源。

#### 6. 模板字符串中的转义陷阱
> TypeScript backtick 字符串中：`\n` = 真换行，`\\n` = 字面 `\n`。
> C++ 代码需要字面 `\n`（如 `cout << "\n"`），所以必须写 `\\n`。
> 同理：backtick 需要 `\\\``，反斜杠需要 `\\\\`。

#### 7. 课程内容必须双语言（DS/ALG）
> DS 和算法是语言无关的知识，学 Python 或 C++ 的学生都要练。
> **规则**: DS/ALG 的 code, exercise, challenge 必须有 Python + C++ 双版本。

#### 8. UI/路由要实际点击测试
> 地图跳转链接指向了不存在的页面（`/dashboard/cpp-lessons` → 404）。
> **教训**: 每个链接/按钮都要实际点击验证目标页面存在。

#### 9. 新增 Track 必须全局搜索所有硬编码映射
> 🚨 加 AI-ML track 时漏更新了 `trackTabMap`（地图）、`getHref`（Dashboard卡片）、`codeLang` 初始化（课程页）。
> **教训**: 新增 track 必须按"新增 Track Checklist"逐项更新 6 个文件。用 `grep -rn` 搜索所有 track id 硬编码点。

#### 10. Wikimedia 图片 URL 不能猜 hash
> 50+ 张 Wikimedia 图片中有 6+ 张 URL hash 路径错误（如 `/5/53/` 应为 `/b/bb/`），直接 404。
> **教训**: 必须从 Commons 文件页面获取真实 URL，`curl` 验证 200 后才写入。部署前跑批量验证脚本。

#### 11. localStorage 状态泄漏到新课程
> 用户在 DS/ALG 课切换到 C++ 后，localStorage 保存了 `codeLang=cpp`。打开 AI 课时继承了这个设置，Python 代码被当 C++ 编译。
> **教训**: 每个 track 的语言设置必须显式初始化，不能盲目读取全局 localStorage。纯 Python track 必须强制覆盖。

### 今日架构改动

#### 新增数据字段 (LessonSection)
```typescript
// src/data/lessons.ts
codeCpp?: string;                    // C++ 版本代码
codeAnatomyCpp?: CodeAnatomyItem[];  // C++ 代码解析
exerciseCpp?: InlineExercise;        // C++ 版本练习
challengeCpp?: CodeChallenge;        // C++ 版本挑战
```

#### 新增组件
- `src/components/Header.tsx` — 固定顶栏（汉堡菜单 + Logo + 标题）

#### 新增数据文件
- `src/data/alg-lessons.ts` — 算法课程 (5,247+ lines)
- `src/data/ds-exercises-extracted.ts` — DS 练习提取到 Code Lab
- `src/data/alg-exercises-extracted.ts` — ALG 练习提取到 Code Lab

#### 课程列表页 URL 参数
- `/dashboard/lessons?track=python|cpp|ds|alg` — 自动选中对应 tab

---

## 开发路线图

### 近期 (v1.1) — 稳定 + 修复
- [ ] 修复 Supabase RLS 注册问题
- [ ] Turtle Step 模式修复（canvas 清除 + 逐行绘制）
- [ ] C++ Step 模式实现（目前只隐藏了按钮）
- [ ] Builder City (Area 3) 补充 coding challenges
- [ ] Logo 优化（当前用的是 jpg，可能需要优化为 svg/webp）
- [ ] 移动端 Header 适配检查

### 中期 (v1.5) — Wave 1 课程完善
- [ ] AI/ML 课程（Wave 1 第4门）
- [ ] DS/ALG Code Lab 项目的 C++ 版本
- [ ] Parsons puzzles 和 debug challenges
- [ ] 课程进度跨设备同步优化
- [ ] Explore CS 和 DS Playground UI 打磨
- [ ] 排行榜 / 社交功能

### 远期 (v2.0) — Wave 2 + 平台化
- [ ] Wave 2 课程: Web Dev + Databases + Cybersecurity
- [ ] Wave 3 课程: Architecture + SE + App Dev + Game Dev
- [ ] 多人协作编程（WebSocket）
- [ ] 老师 Dashboard（查看学生进度）
- [ ] 自定义课程编辑器
- [ ] 移动端优化（PWA）
- [ ] Monorepo 迁移 (learning-platform/)

---

## 数据统计 (2026-01-30 更新)

```
课程体系
────────────────────────────────────
课程数             4 门 (Python/C++/DS/ALG)
总课数             98 课 (30+30+18+20)
Code sections     218 个
codeCpp           79 个 (DS 28 + ALG 51)
教学讲解 🎯        392 个

练习与挑战
────────────────────────────────────
Quiz 总题数        760+ 题
Exercise          196 个 (Python) + 79 个 (C++)
Challenge         173 个
Code Lab 练习      770 个
Code Lab 项目      153 个

技术指标
────────────────────────────────────
QA 测试通过        289/289 代码块
C++ 编译验证       181/181 代码块
源文件             60+
课程数据           ~25,000+ 行
```

---

*Last updated: 2026-01-30*
*Maintained by: Zoe (AI) + Dr. Su Yan*
