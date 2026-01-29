# Code Buddy — Product Requirements Document (PRD)

> **Version:** 1.0
> **Author:** Su Yan
> **Date:** 2025-07-11
> **Status:** Draft

---

## Table of Contents

1. [项目概述与愿景](#1-项目概述与愿景)
2. [目标用户与用户故事](#2-目标用户与用户故事)
3. [功能需求](#3-功能需求)
4. [非功能需求](#4-非功能需求)
5. [技术架构概览](#5-技术架构概览)
6. [开发阶段规划](#6-开发阶段规划)
7. [成功指标](#7-成功指标)
8. [竞品分析](#8-竞品分析)
9. [风险与挑战](#9-风险与挑战)
10. [附录](#10-附录)

---

## 1. 项目概述与愿景

### 1.1 项目简介

**Code Buddy** 是一款面向 12 岁青少年的 Python 编程教育应用，涵盖编程逻辑思维、Python 语法实践、Debug 方法论、计算机体系结构、以及 AI 辅助编程五大模块。它不是又一个"学编程"的工具，而是一个培养 **计算思维和问题解决能力** 的完整学习系统。

### 1.2 教育理念

> *"只会写代码的人，未来很危险——AI 可以替代他们。但拥有编程思维和解决问题能力的人，能把 AI 当作工具，走得更远。"*
> — Su Yan, Howard University

Code Buddy 的设计基于三个核心信念：

1. **编程思维 > 编程语法**：语法会变，思维方式不会。先教 Computational Thinking，再教 Python。
2. **知其所以然**：理解计算机体系结构（CPU、内存、总线），才能写出好代码、理解性能瓶颈。
3. **AI 是工具，不是拐杖**：先打牢基础，再学 AI 辅助编程。能审查 AI 生成的代码，才是真正的 programmer。

### 1.3 产品定位

| 维度 | 定位 |
|------|------|
| 年龄 | 11-14 岁（核心：12 岁） |
| 深度 | 超越 Scratch，但不到大学 CS101 |
| 语言 | Python（工业级语言，非玩具） |
| 差异化 | 唯一同时教编程 + 计算机架构 + AI 辅助编程的青少年产品 |
| 形态 | PWA Web App（跨平台） |

---

## 2. 目标用户与用户故事

### 2.1 主要用户画像

**William — Primary Learner**

| 属性 | 描述 |
|------|------|
| 年龄 | 12 岁，6 年级 |
| 背景 | 美国学生，父亲是计算机教授 |
| 兴趣 | Boy Scout、户外活动、游戏 |
| 编程经验 | 零基础，但家庭有技术氛围 |
| 需求 | 从零开始但不能太幼稚，要有深度和趣味性 |
| 学习风格 | 动手实践 > 被动阅读，喜欢挑战和成就感 |

**Su Yan — Parent / Supervisor**

| 属性 | 描述 |
|------|------|
| 角色 | 家长，同时是课程设计的指导者 |
| 需求 | 能看到孩子的学习进度，确保内容有深度 |
| 期望 | 孩子能建立真正的 computational thinking，而非仅仅学语法 |

### 2.2 用户故事

#### 学生视角

| ID | 用户故事 | 优先级 |
|----|---------|--------|
| US-01 | 作为学生，我想通过趣味谜题理解"顺序、分支、循环"的概念，这样我就能像程序员一样思考 | P0 |
| US-02 | 作为学生，我想在浏览器里写 Python 代码并立刻看到运行结果，这样我不需要安装任何东西 | P0 |
| US-03 | 作为学生，我想一步一步看到代码执行时变量的变化，这样我能理解程序到底在做什么 | P0 |
| US-04 | 作为学生，当我被 bug 卡住时，我想得到提示（不是答案），引导我自己找到问题 | P0 |
| US-05 | 作为学生，我想通过做游戏和项目来学编程，而不是做无聊的练习题 | P0 |
| US-06 | 作为学生，我想通过动画看到 CPU 是怎么执行我的代码的，这样抽象概念变得具体 | P1 |
| US-07 | 作为学生，我想用 AI 助手帮我写代码，但我也要学会检查 AI 写的对不对 | P1 |
| US-08 | 作为学生，我想获得 XP、徽章和等级，这样我有动力继续学 | P1 |
| US-09 | 作为学生，我想看到技能树上我解锁了哪些技能，知道接下来学什么 | P1 |
| US-10 | 作为学生，我想把我做的项目分享给朋友或家人看 | P2 |

#### 家长视角

| ID | 用户故事 | 优先级 |
|----|---------|--------|
| UP-01 | 作为家长，我想看到孩子每天/每周的学习进度 | P1 |
| UP-02 | 作为家长，我想知道孩子在哪些概念上卡住了 | P2 |
| UP-03 | 作为家长，我想确保 AI 助手不会直接给答案 | P0 |

---

## 3. 功能需求

### 3.1 P0 — Must Have (Phase 1)

#### 3.1.1 交互式代码编辑器 (Interactive Code Editor)

| Feature | 描述 |
|---------|------|
| 浏览器内编辑器 | 基于 Monaco Editor 或 CodeMirror 6 的 Python 编辑器 |
| 代码运行 | 通过 Pyodide 在浏览器内执行 Python，无需后端服务器 |
| 语法高亮 | Python 关键字、字符串、注释等彩色高亮 |
| 错误提示 | 运行时错误以友好方式显示，配合 AI 解释 |
| 输入/输出面板 | 支持 `input()` 交互和 `print()` 输出 |
| 代码模板 | 每个练习/项目提供 starter code |

#### 3.1.2 步进执行器 (Step-Through Debugger)

| Feature | 描述 |
|---------|------|
| 逐行执行 | 点击 "Next Step" 逐行运行代码 |
| 变量监视 | 实时显示所有变量及其当前值 |
| 执行轨迹 | 高亮当前执行行 |
| 调用栈可视化 | 函数调用时显示调用栈（简化版） |

#### 3.1.3 课程系统 (Curriculum Engine)

| Feature | 描述 |
|---------|------|
| 模块化课程 | 5 大模块，每个模块包含多节课 |
| 课程内容渲染 | Markdown + 交互式代码块 + 内嵌练习 |
| 解锁机制 | 完成前置课程后解锁下一课 |
| 练习验证 | 自动检查代码输出是否正确 |
| 进度保存 | 本地存储 + 可选云端同步 |

#### 3.1.4 AI 教学助手 (AI Teaching Assistant)

| Feature | 描述 |
|---------|------|
| Socratic 对话 | 引导式提问，不直接给答案 |
| 错误解释 | 将 Python 错误信息翻译成 12 岁能懂的语言 |
| 提示系统 | 3 级提示：轻提示 → 方向引导 → 接近答案 |
| 代码 Review | 对学生提交的代码给出改进建议 |
| 上下文感知 | 知道学生当前在学哪一课、卡在哪里 |
| 安全限制 | 绝不直接输出完整答案；拒绝非课程相关请求 |

#### 3.1.5 进度系统 (Progress System)

| Feature | 描述 |
|---------|------|
| XP 积分 | 完成课程、练习、项目获得 XP |
| 等级系统 | XP 累积升级（e.g., Newbie → Apprentice → Coder → Hacker → Architect） |
| 成就徽章 | 完成特定挑战获得徽章 |
| 学习日历 | 显示每日学习记录和连续打卡天数 |
| 技能树 | 可视化展示 5 大模块的解锁进度 |

### 3.2 P1 — Should Have (Phase 2)

#### 3.2.1 计算机架构可视化 (Architecture Visualizations)

| Feature | 描述 |
|---------|------|
| CPU 动画 | Fetch-Decode-Execute 循环的动画演示 |
| 内存可视化 | 变量在 RAM 中的存储方式（地址、值、类型） |
| 数据流动画 | 键盘输入 → 内存 → CPU → 屏幕输出的完整数据流 |
| 总线速度对比 | 可视化不同组件之间的速度差异（CPU vs RAM vs Disk） |
| 分时调度动画 | 多进程如何共享 CPU 时间片 |

#### 3.2.2 项目式学习系统 (Project-Based Learning)

| Feature | 描述 |
|---------|------|
| 项目画廊 | 按模块分类的趣味项目列表 |
| 项目脚手架 | 每个项目提供分步指导和 starter code |
| 里程碑检查 | 项目拆分为多个 milestone，逐步完成 |
| 项目展示 | 完成的项目可生成分享链接 |

#### 3.2.3 Debug 训练场 (Bug Arena)

| Feature | 描述 |
|---------|------|
| Bug 挑战 | 给出有 bug 的代码，要求学生找到并修复 |
| 难度分级 | 语法错误 → 逻辑错误 → 边界条件 → 性能问题 |
| 错误信息教学 | 教学生如何读 Traceback |
| Debug 工具箱 | 教授 print debug、断点、分步排查方法 |

#### 3.2.4 家长仪表盘 (Parent Dashboard)

| Feature | 描述 |
|---------|------|
| 学习概览 | 总学习时间、完成课程数、当前进度 |
| 薄弱点分析 | 哪些概念重复出错 |
| 活动日志 | 每日学习活动时间线 |

### 3.3 P2 — Nice to Have (Phase 3)

#### 3.3.1 AI 辅助编程模块

| Feature | 描述 |
|---------|------|
| AI 代码生成 | 学生用自然语言描述需求，AI 生成代码 |
| 代码审查练习 | AI 故意生成有问题的代码，学生需找出问题 |
| AI 对比 | 展示学生代码 vs AI 代码，讨论优劣 |
| AI 限制实验 | 让学生体验 AI 无法处理的场景 |
| 毕业项目 | 用 AI 辅助完成一个综合项目 |

#### 3.3.2 社交功能

| Feature | 描述 |
|---------|------|
| 作品分享 | 生成项目分享页面 |
| 排行榜 | 可选的 XP 排行（家庭内或好友间） |
| 协作编程 | 多人同时编辑同一项目（远期） |

#### 3.3.3 扩展内容

| Feature | 描述 |
|---------|------|
| 更多语言 | JavaScript、Rust 入门 |
| 算法进阶 | 排序、搜索、递归可视化 |
| 网络基础 | HTTP、API 调用概念 |

---

## 4. 非功能需求

### 4.1 性能

| 指标 | 要求 |
|------|------|
| 首屏加载 | < 3 秒（CDN + 代码分割） |
| Pyodide 初始化 | < 5 秒（预加载 + 缓存） |
| 代码执行延迟 | < 500ms（简单程序） |
| AI 响应时间 | < 3 秒（首 token） |
| 动画帧率 | 60fps（可视化动画） |

### 4.2 可用性

| 指标 | 要求 |
|------|------|
| 离线支持 | PWA Service Worker 缓存课程内容和 Pyodide，离线可编码运行 |
| 响应式设计 | 支持 tablet (768px+) 和 desktop (1024px+)；手机端仅阅读模式 |
| 无障碍 | WCAG 2.1 AA 标准（键盘导航、屏幕阅读器支持） |
| 多语言 | 初期英文，预留 i18n 架构 |

### 4.3 安全

| 指标 | 要求 |
|------|------|
| 代码沙箱 | Pyodide 运行在 Web Worker 中，与主线程隔离 |
| AI 安全 | AI 助手不回答非课程相关内容；不输出完整答案 |
| 数据隐私 | COPPA 合规（13 岁以下用户数据保护） |
| 无账号模式 | 支持本地存储，无需注册即可使用 |

### 4.4 可维护性

| 指标 | 要求 |
|------|------|
| 课程内容 | Markdown/MDX 格式，易于编辑和新增 |
| 代码复用 | 与 AI Learning Buddy / English Buddy 共享核心组件 |
| 测试覆盖 | 核心逻辑 > 80% unit test coverage |
| CI/CD | GitHub Actions 自动构建 + Vercel 部署 |

---

## 5. 技术架构概览

### 5.1 技术栈

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│  Next.js 14+ (App Router) + React 18 + TypeScript│
│  Tailwind CSS + Framer Motion                    │
├─────────────────────────────────────────────────┤
│              Code Execution Layer                │
│  Pyodide (WASM Python) in Web Worker             │
│  Monaco Editor / CodeMirror 6                    │
├─────────────────────────────────────────────────┤
│              AI Layer                            │
│  Gemini API (primary) + OpenAI (fallback)        │
│  Shared ai-provider module                       │
├─────────────────────────────────────────────────┤
│              Visualization Layer                 │
│  Framer Motion (UI animations)                   │
│  D3.js / Canvas API (data viz & architecture)    │
├─────────────────────────────────────────────────┤
│              Data Layer                          │
│  localStorage (progress, settings)               │
│  IndexedDB (code projects, large data)           │
│  Optional: Supabase/Firebase (cloud sync)        │
├─────────────────────────────────────────────────┤
│              Infrastructure                      │
│  Vercel (hosting) + PWA (offline)                │
│  GitHub Actions (CI/CD)                          │
└─────────────────────────────────────────────────┘
```

### 5.2 Monorepo 结构（未来规划）

```
learning-platform/
├── packages/
│   ├── ai-provider/        # Gemini/OpenAI 统一接口
│   ├── ui-components/       # 共享 UI 组件库
│   ├── progress-engine/     # XP、等级、成就系统
│   └── content-renderer/    # MDX 课程内容渲染
├── apps/
│   ├── code-buddy/          # 本项目
│   ├── ai-learning-buddy/   # 数学/科学学习
│   └── english-buddy/       # 英语学习
└── configs/                 # 共享 ESLint, TS, Tailwind 配置
```

### 5.3 关键技术决策

| 决策 | 选择 | 理由 |
|------|------|------|
| Python 运行时 | Pyodide (WASM) | 纯浏览器执行，零后端成本，离线可用 |
| 代码编辑器 | Monaco Editor | VS Code 同款，功能完整，学生未来迁移零成本 |
| AI Provider | Gemini (primary) | 性价比高，长上下文窗口适合教学对话 |
| 可视化 | Framer Motion + Canvas | Framer 做 UI 动画，Canvas 做架构/算法可视化 |
| 部署 | Vercel | Next.js 原生支持，零配置，免费 tier 足够 |
| 数据存储 | localStorage + IndexedDB | 无需后端，COPPA 友好，可选加云同步 |

### 5.4 Pyodide 集成架构

```
Main Thread                  Web Worker
┌──────────────┐            ┌──────────────┐
│ Monaco Editor │───code───▶│   Pyodide    │
│              │            │   Runtime    │
│  Output Panel│◀──result──│              │
│              │            │  Sandboxed   │
│ Variable View│◀──state───│  Execution   │
└──────────────┘            └──────────────┘
```

- 代码发送到 Web Worker 执行，主线程不阻塞
- 执行超时保护（默认 10 秒，防止无限循环）
- 步进模式通过 AST 转换实现：在每行代码后插入 yield，实现逐行暂停

### 5.5 AI 教学助手架构

```
Student Input (question / code / error)
         │
         ▼
┌─────────────────────┐
│   Context Builder   │  ← 当前课程、历史对话、学生代码、错误信息
│                     │
│   System Prompt:    │
│   - Socratic method │
│   - Age-appropriate │
│   - Never give full │
│     answers         │
│   - 3-tier hints    │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│   Gemini API        │
│   (streaming)       │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  Safety Filter      │  ← 检查是否泄露答案、是否离题
└─────────┬───────────┘
          │
          ▼
    Student sees response
```

---

## 6. 开发阶段规划

### Phase 1 — 核心学习体验 (8 weeks)

> 目标：学生能完成模块一和模块二的课程，在浏览器内写并运行 Python 代码。

| Week | 任务 | 交付物 |
|------|------|--------|
| 1-2 | 项目脚手架、Pyodide 集成、Monaco Editor 集成 | 可运行代码的浏览器编辑器 |
| 3-4 | 课程内容渲染引擎、步进执行器 | 课程页面 + 逐行执行 |
| 5-6 | 模块一 + 模块二课程内容编写 | 20+ 节课程内容 |
| 7 | AI 教学助手（Socratic 模式） | 聊天界面 + 提示系统 |
| 8 | 进度系统（XP、等级、技能树） | 完整进度追踪 |

**Phase 1 交付：** 可用的 MVP，覆盖编程逻辑 + Python 基础。

### Phase 2 — 深度内容 + 可视化 (6 weeks)

> 目标：完成 Debug 模块和计算机架构模块的内容和可视化。

| Week | 任务 | 交付物 |
|------|------|--------|
| 9-10 | 模块三 Debug & Validation 内容 + Bug Arena | Debug 训练场 |
| 11-12 | 模块四计算机架构内容 + CPU/内存可视化动画 | 架构动画系统 |
| 13 | 项目式学习系统 + 3 个完整项目 | 项目画廊 |
| 14 | 家长仪表盘 + 学习报告 | 家长视图 |

**Phase 2 交付：** 完整的 4 模块学习体验，含可视化和项目。

### Phase 3 — AI 辅助编程 + 打磨 (4 weeks)

> 目标：完成模块五 AI 辅助编程，全面打磨体验。

| Week | 任务 | 交付物 |
|------|------|--------|
| 15-16 | 模块五 AI 辅助编程内容 + AI 代码生成/审查功能 | AI 编程模块 |
| 17 | PWA 优化、离线支持、性能调优 | 生产就绪 |
| 18 | 用户测试（William）、反馈迭代、Bug Fix | 正式版本 |

**Phase 3 交付：** 完整 5 模块产品，可日常使用。

---

## 7. 成功指标

### 7.1 学习效果指标

| 指标 | 目标 | 测量方式 |
|------|------|---------|
| 课程完成率 | > 70% 的开始课程被完成 | 进度系统数据 |
| 概念掌握 | 每个模块的练习通过率 > 80% | 练习验证结果 |
| Debug 能力 | Bug Arena 挑战成功率 > 60% | 挑战完成数据 |
| 项目完成 | 每个模块至少完成 1 个项目 | 项目提交记录 |
| AI 代码审查 | 能识别 AI 代码中 > 50% 的问题 | 模块五练习结果 |

### 7.2 参与度指标

| 指标 | 目标 | 测量方式 |
|------|------|---------|
| 日均学习时间 | 20-30 分钟 | 会话时长统计 |
| 周活跃天数 | ≥ 4 天/周 | 打卡记录 |
| 连续学习 | ≥ 7 天连续打卡 | Streak 数据 |
| AI 助手互动 | 平均每课 2-3 次提问 | 对话次数 |
| 自主探索 | 在课程之外自发写代码 | 非课程代码编辑记录 |

### 7.3 体验指标

| 指标 | 目标 | 测量方式 |
|------|------|---------|
| 学生满意度 | "很有趣" + "学到东西" | 定期口头反馈 |
| 家长满意度 | 认为内容有深度、教学方法好 | 家长访谈 |
| 技术稳定性 | 代码执行成功率 > 99% | 错误日志 |
| 首次使用体验 | 5 分钟内完成第一个代码运行 | 用户观察 |

---

## 8. 竞品分析

### 8.1 竞品对比矩阵

| 特性 | **Code Buddy** | Scratch | Codecademy | Replit | CS50 (Harvard) | Code.org |
|------|:-:|:-:|:-:|:-:|:-:|:-:|
| 目标年龄 | 11-14 | 8-12 | 15+ | 16+ | 18+ | 6-18 |
| 编程语言 | Python | 可视化块 | 多种 | 多种 | C/Python | 可视化块→JS |
| 计算机架构 | ✅ 完整模块 | ❌ | ❌ | ❌ | ✅ 大学深度 | ❌ |
| AI 辅助编程教学 | ✅ 专门模块 | ❌ | ❌ | ✅ (Ghostwriter) | ❌ | ❌ |
| 浏览器内运行 | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Socratic AI 助手 | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| 步进执行/变量可视化 | ✅ | N/A | ❌ | ❌ | ❌ | ❌ |
| 项目式学习 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Debug 专项训练 | ✅ | ❌ | 部分 | ❌ | ✅ | ❌ |
| 离线支持 | ✅ (PWA) | ❌ | ❌ | ❌ | ❌ | ❌ |
| 免费 | ✅ | ✅ | 部分 | 部分 | ✅ | ✅ |
| 成就/游戏化 | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |

### 8.2 竞品分析摘要

**Scratch** — 太简单，可视化编程块不适合有深度需求的学生，无法过渡到真实编程语言。

**Codecademy** — 内容扎实但界面和交互面向成人，缺乏趣味性，无计算机架构内容。

**Replit** — 强大的在线 IDE，但没有结构化课程，不是教学产品。

**CS50 (Harvard)** — 内容深度极佳（含计算机架构），但面向大学生，对 12 岁太难太枯燥。

**Code.org** — 覆盖面广但深度不够，偏低龄（Hour of Code 风格），缺 AI 模块。

### 8.3 Code Buddy 的差异化优势

1. **唯一同时教编程 + 计算机架构 + AI 编程的青少年产品**
2. **Socratic AI 助手**：不给答案，教思考方法
3. **步进执行 + 变量可视化**：让代码执行过程透明
4. **从 CS 基础到 AI 应用的完整路径**：不是教语法，是培养 computational thinking
5. **年龄适配**：既不幼稚也不过难，为 11-14 岁精心设计

---

## 9. 风险与挑战

### 9.1 技术风险

| 风险 | 影响 | 概率 | 缓解措施 |
|------|------|------|---------|
| Pyodide WASM 加载慢 | 首次体验差 | 中 | 预加载 + 缓存 + 加载动画 + 精简 Pyodide 包 |
| Pyodide 不支持所有 Python 库 | 限制项目类型 | 低 | 课程只使用标准库；复杂库用模拟 API |
| 步进执行器实现复杂 | 开发延期 | 中 | 先实现简化版（AST 插桩），后续迭代优化 |
| AI 助手偶尔给出答案 | 违反教学理念 | 中 | 多层 prompt engineering + 输出过滤 + 人工审查 |
| 可视化动画性能 | 低端设备卡顿 | 低 | Canvas 代替 DOM 动画，提供"简化模式" |

### 9.2 内容风险

| 风险 | 影响 | 概率 | 缓解措施 |
|------|------|------|---------|
| 课程内容太难 | 学生放弃 | 中 | 每课内测（William）后调整难度曲线 |
| 课程内容太简单 | 学生无聊 | 低 | 提供"挑战模式"和扩展项目 |
| 计算机架构太抽象 | 学生不理解 | 高 | 大量动画可视化 + 生活类比（Su 的专业指导） |
| 内容制作工作量大 | 延期 | 高 | 用 AI 辅助生成初稿，Su 审核把关 |

### 9.3 产品风险

| 风险 | 影响 | 概率 | 缓解措施 |
|------|------|------|---------|
| 学生没有持续动力 | 中途放弃 | 中 | 游戏化系统 + 项目驱动 + 家长参与 |
| 手机端体验差 | 使用场景受限 | 中 | 优先 tablet/desktop；手机端提供阅读模式 |
| 市场上类似产品出现 | 竞争 | 低 | 这是个人项目，不以商业为目标 |

---

## 10. 附录

### 附录 A：完整课程大纲

---

#### 模块一：编程逻辑思维 (Computational Thinking)

**目标：** 在写任何代码之前，建立编程思维的基础。

| 课号 | 标题 | 内容概要 | 练习/活动 |
|------|------|---------|----------|
| 1.1 | What is Programming? 编程是什么 | 编程 = 给计算机写指令；类比：给机器人写操作手册 | 用自然语言写"做三明治"的步骤，体验指令必须精确 |
| 1.2 | Think Like a Computer 像计算机一样思考 | 计算机只能按指令一步一步执行；顺序执行的概念 | "Robot Game"：同学扮演机器人，按指令行动 |
| 1.3 | Decomposition 问题分解 | 把大问题拆成小问题；例：规划一次 Boy Scout 露营 | 将"组织一次露营"分解为具体步骤清单 |
| 1.4 | Pattern Recognition 模式识别 | 找到问题中的重复模式；例：日程安排中的规律 | 从数列中找规律，从地图路线中找最优模式 |
| 1.5 | Abstraction 抽象 | 忽略细节、抓住本质；地图就是现实世界的抽象 | 为不同动物设计"通用档案卡"（提取共同属性） |
| 1.6 | Algorithm Design 算法设计 | 用流程图表示解决方案；顺序、分支、循环的流程图 | 画"早上出门上学"的流程图（含天气分支） |
| 1.7 | Flowcharts in Action 流程图实战 | 更复杂的流程图练习；嵌套分支和循环 | 设计"猜数字游戏"的流程图 |
| 1.8 | From Problem to Solution 从问题到方案 | 综合练习：完整的 CT 四步流程 | 选择一个实际问题，用 CT 四步法设计解决方案 |

---

#### 模块二：Python 基础语法与实践

**目标：** 掌握 Python 核心语法，能独立编写 50-100 行的程序。

| 课号 | 标题 | 内容概要 | 练习/项目 |
|------|------|---------|----------|
| 2.1 | Hello, Python! 你好 Python | 第一个程序：`print("Hello, World!")`；Python 是什么 | 打印自我介绍、ASCII Art |
| 2.2 | Variables: Boxes for Data 变量：数据的盒子 | 变量的概念、命名规则、赋值 | 计算 Boy Scout 活动的装备重量 |
| 2.3 | Data Types 数据类型 | int, float, str, bool；`type()` 函数 | 类型转换练习：用户输入计算器 |
| 2.4 | Math Operations 数学运算 | `+` `-` `*` `/` `//` `%` `**`；运算优先级 | 露营费用计算器 |
| 2.5 | Strings 字符串 | 字符串拼接、f-string、切片、常用方法 | 密码生成器、名字颠倒器 |
| 2.6 | User Input 用户输入 | `input()` 函数；类型转换 | 互动问答游戏（猜年龄） |
| 2.7 | If-Else: Making Decisions 条件分支 | `if` / `elif` / `else`；比较运算符 | 天气穿衣建议程序 |
| 2.8 | Logical Operators 逻辑运算 | `and` / `or` / `not`；复合条件 | 露营安全检查清单（多条件判断） |
| 2.9 | While Loops 循环：重复做事 | `while` 循环；无限循环和 `break` | 猜数字游戏（1-100） |
| 2.10 | For Loops 遍历循环 | `for` + `range()`；遍历字符串 | 乘法表生成器 |
| 2.11 | Lists: Collections of Data 列表 | 创建、访问、修改列表；`append`/`remove`/`sort` | 露营装备清单管理器 |
| 2.12 | Loops + Lists 循环与列表 | 遍历列表、列表推导式基础 | 成绩统计器（最高分、平均分） |
| 2.13 | Functions: Reusable Code 函数 | 定义函数、参数、返回值 | 温度转换器（华氏 ↔ 摄氏） |
| 2.14 | Functions in Practice 函数实战 | 多参数、默认值、函数组合 | 文字冒险游戏的场景函数 |
| 2.15 | Dictionaries 字典 | 键值对、访问、修改、遍历 | 简易通讯录 / 宝可梦图鉴 |
| 2.16 | Nested Structures 嵌套数据结构 | 列表中的字典、字典中的列表 | 课程表生成器 |
| 2.17 | File I/O 文件读写 | 读写文本文件（Pyodide 虚拟文件系统） | 日记本程序（保存和读取日记） |
| 2.18 | 🎮 Mini Project: Adventure Game 文字冒险游戏 | 综合项目：用前面所学做一个文字冒险游戏 | 多场景、物品系统、战斗逻辑 |
| 2.19 | 🎮 Mini Project: Quiz Master 问答大师 | 从文件/字典加载题库，随机出题，计分 | 可自定义题库的问答游戏 |
| 2.20 | 🎮 Mini Project: Camping Planner 露营规划器 | 综合项目：规划露营（人员、装备、食物、预算） | 使用函数、列表、字典、文件 I/O |

---

#### 模块三：Debug & Validation

**目标：** 学会系统性地找 bug、修 bug、验证代码。

| 课号 | 标题 | 内容概要 | 练习/活动 |
|------|------|---------|----------|
| 3.1 | What is a Bug? Bug 是什么 | Bug 的历史（Grace Hopper 的飞蛾）；为什么程序会有错 | 阅读真实 bug 故事，讨论后果 |
| 3.2 | Reading Error Messages 读懂错误信息 | SyntaxError, NameError, TypeError, IndexError | 错误信息配对游戏：匹配错误和原因 |
| 3.3 | Syntax Errors 语法错误 | 拼写、缩进、括号、引号 | Bug Arena：修复 10 个语法错误 |
| 3.4 | Runtime Errors 运行时错误 | ZeroDivisionError, IndexError, KeyError | Bug Arena：修复导致崩溃的代码 |
| 3.5 | Logic Errors 逻辑错误 | 程序不崩溃但结果不对；这是最难的 bug | Bug Arena：找出逻辑上"偷偷错了"的代码 |
| 3.6 | Print Debugging Print 调试法 | 在关键位置加 `print()` 查看变量值 | 用 print 调试一个排序算法 |
| 3.7 | Step-Through Debugging 分步调试 | 使用步进执行器逐行检查 | 用步进执行器找到一个循环 bug |
| 3.8 | Edge Cases 边界条件 | 空列表、零、负数、超长输入等 | 给已有程序添加边界条件测试 |
| 3.9 | Testing Your Code 测试你的代码 | 什么是测试；手动测试 vs 自动测试；`assert` | 为函数写简单的 assert 测试 |
| 3.10 | Try-Except 异常处理 | 用 `try/except` 优雅处理错误 | 改造之前的项目，加入异常处理 |
| 3.11 | 🎮 Bug Bounty Challenge Bug 赏金挑战 | 综合挑战：一个完整程序有 10 个 bug，全部找出 | 计时挑战，获得"Bug Hunter"徽章 |

---

#### 模块四：计算机体系结构 (Computer Architecture)

**目标：** 理解软件如何在硬件上运行，建立对计算机的整体认知。

| 课号 | 标题 | 内容概要 | 可视化/活动 |
|------|------|---------|------------|
| 4.1 | Inside Your Computer 计算机的内部 | 拆解一台电脑：CPU、RAM、硬盘、主板、显卡 | 交互式电脑内部 3D/2D 图 |
| 4.2 | Binary: The Language of Machines 二进制 | 计算机只懂 0 和 1；十进制 → 二进制转换 | 二进制转换游戏 + 用灯泡模拟 bit |
| 4.3 | How CPU Works: Fetch-Decode-Execute CPU 工作原理 | CPU 的三步循环；时钟频率 | 动画：CPU 执行 `x = 5 + 3` 的完整过程 |
| 4.4 | Memory: RAM vs Storage 内存 vs 存储 | RAM 是临时的、快的；硬盘是永久的、慢的 | 动画：变量 `name = "William"` 存入 RAM 的过程 |
| 4.5 | Variables in Memory 变量在内存中 | 变量名 → 内存地址 → 值；引用的概念 | Python Tutor 风格的内存可视化 |
| 4.6 | The Bus: Data Highway 总线：数据高速公路 | CPU、RAM、设备之间的通信通道；带宽概念 | 动画：数据在总线上的流动；速度对比图 |
| 4.7 | Speed Matters: Why Things Are Slow 速度的秘密 | CPU 速度 vs RAM 速度 vs 硬盘速度 vs 网络速度 | 瀑布图：不同操作的时间对比（ns/μs/ms/s） |
| 4.8 | From Keyboard to Screen 从键盘到屏幕 | 完整数据流：按键 → 中断 → CPU → RAM → 屏幕 | 全链路动画：输入 `print("hi")` 的完整旅程 |
| 4.9 | Multitasking: Time-Sharing 多任务与分时 | 一个 CPU 如何同时运行多个程序；时间片轮转 | 动画：3 个程序轮流使用 CPU 的过程 |
| 4.10 | Operating System: The Manager 操作系统：大管家 | OS 管理内存、进程、I/O；用户程序 vs 系统程序 | 交互式：模拟 OS 调度 3 个程序 |
| 4.11 | Why Programs Crash 程序为什么会崩溃 | 内存不足、栈溢出、死锁（简化版） | 实验：写一个递归函数直到 stack overflow |
| 4.12 | From Python to Machine Code 从 Python 到机器码 | 解释器 vs 编译器；Python 代码 → 字节码 → CPU 执行 | 动画：Python 代码的"翻译"过程 |
| 4.13 | 🎮 Build a Virtual Computer 搭建虚拟计算机 | 综合项目：用 Python 模拟一个超简单的 CPU | 实现 ADD, SUB, LOAD, STORE, JUMP 指令 |

---

#### 模块五：AI 辅助编程 (AI-Assisted Programming)

**前置条件：** 完成模块一至四。

| 课号 | 标题 | 内容概要 | 练习/活动 |
|------|------|---------|----------|
| 5.1 | What is AI? AI 是什么 | 机器学习基础概念；AI 不是"会思考"，是"会统计" | 体验 AI 猜数字（简单的模式识别） |
| 5.2 | AI Coding Assistants AI 编程助手 | Copilot、ChatGPT 等工具介绍；它们是如何训练的 | 观看 AI 写代码的演示 |
| 5.3 | Prompt Engineering: Talking to AI 提示工程 | 如何清晰描述需求；好 prompt vs 坏 prompt | 练习：用不同 prompt 让 AI 写同一个函数 |
| 5.4 | AI Code Generation AI 生成代码 | 实际使用 AI 生成 Python 代码 | 用 AI 生成一个简单游戏，对比自己写的版本 |
| 5.5 | Code Review: Trust but Verify 代码审查 | AI 生成的代码可能有 bug、效率低、逻辑错 | 审查 AI 生成的 5 段代码，找出问题 |
| 5.6 | AI for Debugging 用 AI Debug | 把错误信息发给 AI，让它帮忙分析 | 用 AI 辅助修复之前 Bug Arena 中的难题 |
| 5.7 | AI Limitations AI 的局限性 | AI 不理解意图、会"幻觉"、不会做创新设计 | 实验：给 AI 一个模糊需求，观察它的混乱输出 |
| 5.8 | When NOT to Use AI 什么时候不该用 AI | 学习阶段、安全关键、需要创新的场景 | 讨论：哪些情况应该自己写、哪些可以用 AI |
| 5.9 | 🎮 Capstone: AI-Assisted Project 毕业项目 | 用 AI 辅助完成一个完整项目（自选主题） | 记录：哪些部分用了 AI、哪些自己写、为什么 |
| 5.10 | Reflection: The Future of Programming 反思：编程的未来 | 讨论 AI 时代程序员的角色变化 | 写一篇短文：你认为未来程序员最重要的能力是什么 |

---

### 附录 B：项目列表

| # | 项目名称 | 所属模块 | 难度 | 描述 |
|---|---------|---------|------|------|
| P1 | 🥪 Sandwich Instruction Writer | 模块一 | ⭐ | 用精确的自然语言写出做三明治的步骤 |
| P2 | 🏕️ Camping Planner Flowchart | 模块一 | ⭐⭐ | 用流程图设计露营计划的决策流程 |
| P3 | 🎨 ASCII Art Generator | 模块二 | ⭐ | 用 print 创造文字艺术 |
| P4 | 🔢 Number Guessing Game | 模块二 | ⭐⭐ | 猜数字游戏（1-100，有提示"大了/小了"） |
| P5 | 🌡️ Temperature Converter | 模块二 | ⭐ | 华氏 ↔ 摄氏 ↔ 开尔文 转换器 |
| P6 | 📋 Scout Gear Checklist | 模块二 | ⭐⭐ | Boy Scout 装备清单管理器（增删改查） |
| P7 | ⚔️ Text Adventure Game | 模块二 | ⭐⭐⭐ | 多场景文字冒险游戏 |
| P8 | 🧠 Quiz Master | 模块二 | ⭐⭐ | 可自定义题库的问答游戏 |
| P9 | 🏕️ Camping Budget Planner | 模块二 | ⭐⭐⭐ | 露营预算规划器（人员、装备、食物） |
| P10 | 🔐 Caesar Cipher | 模块二 | ⭐⭐ | 凯撒密码加密/解密器 |
| P11 | 🐛 Bug Bounty Challenge | 模块三 | ⭐⭐⭐ | 找出并修复 10 个隐藏 bug |
| P12 | ✅ Test Suite Builder | 模块三 | ⭐⭐ | 为给定函数编写测试用例 |
| P13 | 💻 Virtual CPU Simulator | 模块四 | ⭐⭐⭐ | 用 Python 模拟简单 CPU（5 条指令） |
| P14 | 🧮 Memory Visualizer | 模块四 | ⭐⭐ | 可视化展示变量的内存分配 |
| P15 | 🤖 AI Code Reviewer | 模块五 | ⭐⭐ | 审查 AI 生成的代码并打分 |
| P16 | 🎮 Capstone: My AI Project | 模块五 | ⭐⭐⭐⭐ | 自选主题，AI 辅助完成完整项目 |

---

### 附录 C：计算机架构知识点清单

#### 硬件组件

- [ ] CPU (Central Processing Unit) — 中央处理器
  - [ ] ALU (Arithmetic Logic Unit) — 算术逻辑单元
  - [ ] Control Unit — 控制单元
  - [ ] Registers — 寄存器
  - [ ] Clock Speed / GHz — 时钟频率
  - [ ] Fetch-Decode-Execute Cycle — 取指-解码-执行循环
- [ ] RAM (Random Access Memory) — 随机访问内存
  - [ ] Volatile (断电丢失)
  - [ ] 内存地址
  - [ ] 数据存取速度 (~100ns)
- [ ] Storage (HDD/SSD) — 存储设备
  - [ ] Non-volatile (断电不丢失)
  - [ ] 存取速度对比 (SSD ~100μs, HDD ~10ms)
- [ ] Bus — 总线
  - [ ] Data Bus / Address Bus / Control Bus
  - [ ] 带宽 (Bandwidth)
- [ ] I/O Devices — 输入输出设备
  - [ ] 键盘、鼠标、屏幕、网络接口

#### 软件概念

- [ ] Binary / Hexadecimal — 二进制 / 十六进制
- [ ] Machine Code → Assembly → High-Level Language 编程语言层次
- [ ] Compiler vs Interpreter — 编译器 vs 解释器
- [ ] Python Bytecode — Python 字节码
- [ ] Operating System — 操作系统
  - [ ] Process Management — 进程管理
  - [ ] Memory Management — 内存管理
  - [ ] Time-Sharing / Scheduling — 分时调度
- [ ] Stack vs Heap — 栈 vs 堆
- [ ] Stack Overflow — 栈溢出

#### 性能概念

- [ ] Latency vs Throughput — 延迟 vs 吞吐量
- [ ] I/O Bottleneck — I/O 瓶颈
- [ ] Memory Hierarchy — 存储层次（寄存器 → 缓存 → RAM → SSD → HDD）
- [ ] Cache — 缓存（为什么存在、怎么工作）
- [ ] 为什么程序有时候很慢

---

### 附录 D：成就徽章设计

| 徽章 | 名称 | 获得条件 |
|------|------|---------|
| 🌱 | First Steps | 完成第一课 |
| 🐍 | Python Tamer | 运行第一个 Python 程序 |
| 💡 | Problem Solver | 完成模块一所有课程 |
| 🔁 | Loop Master | 正确使用 3 种循环结构 |
| 📦 | Data Wizard | 掌握列表和字典 |
| 🏗️ | Function Builder | 自己定义 10 个函数 |
| 🐛 | Bug Hunter | 在 Bug Arena 修复 20 个 bug |
| 🛡️ | Error Handler | 使用 try/except 处理 5 种异常 |
| 🔬 | Test Writer | 为函数写出完整的测试 |
| 💻 | Hardware Hacker | 完成计算机架构模块 |
| 🧠 | CPU Whisperer | 理解 Fetch-Decode-Execute |
| ⚡ | Speed Demon | 理解内存层次和性能优化 |
| 🤖 | AI Collaborator | 完成 AI 辅助编程模块 |
| 🔍 | AI Skeptic | 成功发现 AI 生成代码中的 5 个 bug |
| 🏕️ | Scout Coder | 完成所有露营主题项目 |
| ⚔️ | Adventure Creator | 完成文字冒险游戏项目 |
| 🎓 | Code Buddy Graduate | 完成所有 5 个模块 |
| 🔥 | 7-Day Streak | 连续学习 7 天 |
| 🌟 | 30-Day Streak | 连续学习 30 天 |
| 💎 | Perfectionist | 任一模块所有练习 100% 通过 |

---

### 附录 E：等级系统

| 等级 | 名称 | 所需 XP | 对应进度 |
|------|------|---------|---------|
| 1 | 🌱 Newbie 新手 | 0 | 刚开始 |
| 2 | 📖 Learner 学习者 | 100 | 模块一进行中 |
| 3 | 🔧 Tinkerer 修补匠 | 300 | 模块一完成 |
| 4 | 💻 Coder 编码者 | 600 | 模块二进行中 |
| 5 | 🐍 Pythonista Python玩家 | 1000 | 模块二完成 |
| 6 | 🐛 Debugger 调试者 | 1500 | 模块三进行中 |
| 7 | 🔬 Engineer 工程师 | 2000 | 模块三完成 |
| 8 | 🧠 Architect 架构师 | 2800 | 模块四进行中 |
| 9 | ⚡ Hacker 黑客 | 3500 | 模块四完成 |
| 10 | 🤖 AI Master AI大师 | 4500 | 模块五完成 |

**XP 获取方式：**
- 完成一课：+20 XP
- 完成练习：+10 XP
- 完成项目：+50-100 XP
- Bug Arena 挑战：+15 XP / 个
- 连续打卡奖励：+5 XP / 天（Streak > 7 天后翻倍）

---

*End of PRD*
