# 📚 CS Curriculum Roadmap — Code Buddy

> Target: K-12 (Grades 4-12) | Bilingual (EN + ZH)
> Last Updated: 2026-01-30

---

## 🏗️ Architecture: Course Tracks

The app organizes CS education into **Tracks** (课程体系). Each track is a standalone learning path with its own modules and lessons, but they share a unified skill tree and progress system.

```
Dashboard
├── 🐍 Python Programming    ← Track 1 (CURRENT, 5 Areas, 31 Lessons)
├── 📦 Data Structures        ← Track 2 (Wave 1)
├── ⚡ Algorithms             ← Track 3 (Wave 1)
├── 🤖 AI & Machine Learning  ← Track 4 (Wave 1)
├── 🌐 Web Development        ← Track 5 (Wave 2)
├── 🗄️ Databases & SQL        ← Track 6 (Wave 2)
├── 🔒 Cybersecurity          ← Track 7 (Wave 2)
├── 🖥️ Computer Architecture  ← Track 8 (Wave 3)
├── 👥 Software Engineering    ← Track 9 (Wave 3)
├── 📱 App Development         ← Track 10 (Wave 3)
└── 🎮 Game Development        ← Track 11 (Wave 3)
```

---

## 🌊 Wave 1: Core CS Foundation (Current Sprint)

### Track 1: 🐍 Python Programming ✅ DONE
- 5 Areas, 31 Lessons, 35 Code Lab exercises
- Prerequisite: None
- Status: Complete

### Track 2: 📦 Data Structures & Visualization
**大学定位:** CS2核心课，编程→工程的桥梁
**K-12改造:** 可视化动画教学，用日常生活类比

| Module | Topics | K-12 Approach |
|--------|--------|---------------|
| DS-1: Lists & Stacks | Array, LinkedList, Stack | 叠盘子、排队模型 |
| DS-2: Queues & Trees | Queue, Deque, Binary Tree | 家谱树、文件夹结构 |
| DS-3: Graphs & Maps | Graph, HashMap, Set | 社交网络、地图导航 |
| DS-4: Projects | Undo系统、表达式计算器、迷宫 | 动手做真实工具 |

- **Prerequisites:** Python Track Areas 1-3
- **Lessons:** ~16-20
- **Key Feature:** Interactive visualizer (animated data structure operations)

### Track 3: ⚡ Algorithms & Problem Solving
**大学定位:** 算法设计与分析，CS核心方法论
**K-12改造:** 游戏化+可视化，竞赛入门

| Module | Topics | K-12 Approach |
|--------|--------|---------------|
| ALG-1: Searching | Linear, Binary Search | 猜数字游戏 |
| ALG-2: Sorting | Bubble, Selection, Merge, Quick | 排序动画竞赛 |
| ALG-3: Recursion | 递归思维、分治 | 俄罗斯套娃、Koch雪花 |
| ALG-4: Dynamic Programming | 基础DP概念 | 爬楼梯、零钱问题 |
| ALG-5: Graph Algorithms | BFS, DFS, Shortest Path | 迷宫寻路、地图导航 |

- **Prerequisites:** Python Track + DS Track Module 1
- **Lessons:** ~20
- **Key Feature:** Algorithm race visualizer (compare algorithm speeds)

### Track 4: 🤖 AI & Machine Learning
**大学定位:** AI入门/ML入门
**K-12改造:** 最高兴趣度，可视化工具丰富

| Module | Topics | K-12 Approach |
|--------|--------|---------------|
| AI-1: What is AI? | AI概念、历史、伦理 | 图灵测试游戏 |
| AI-2: Data & Patterns | 数据收集、清洗、可视化 | 自己收集数据做分析 |
| AI-3: Machine Learning | 分类、回归、聚类 | Teachable Machine风格 |
| AI-4: Neural Networks | 感知器、简单网络 | 手写数字识别 |
| AI-5: NLP & Vision | 文本分析、图像识别 | 情感分析、滤镜 |
| AI-6: AI Projects | 综合项目 | 做自己的AI应用 |

- **Prerequisites:** Python Track Areas 1-4
- **Lessons:** ~20
- **Key Feature:** Built-in ML playground (train models in browser)

---

## 🌊 Wave 2: Applied CS (中期)

### Track 5: 🌐 Web Development
- HTML/CSS/JS基础 → React → 全栈
- 学生做自己的网站/portfolio
- Prerequisites: Python Track

### Track 6: 🗄️ Databases & SQL
- 数据建模、SQL查询、数据分析
- 内置SQL练习环境
- Prerequisites: Python Track Areas 1-3

### Track 7: 🔒 Cybersecurity & CTF
- 密码学、网络安全、CTF闯关
- 攻防游戏化教学
- Prerequisites: Python Track + Web Track Module 1

---

## 🌊 Wave 3: Advanced Topics (远期)

### Track 8: 🖥️ Computer Architecture
- 二进制、逻辑门、简易CPU模拟器
- Prerequisites: Python Track

### Track 9: 👥 Software Engineering
- Git、团队协作、设计模式、项目管理
- Prerequisites: Python Track + any one applied track

### Track 10: 📱 App Development
- 移动端入门 (React Native / Flutter)
- Prerequisites: Web Track

### Track 11: 🎮 Game Development
- Pygame / 游戏引擎基础
- Prerequisites: Python Track + DS Track

---

## 🗺️ Knowledge Map (知识地图)

The Dashboard features a **Course Map** showing prerequisites and relationships:

```
                    🐍 Python Programming
                   /        |           \
          📦 Data      🤖 AI/ML      🌐 Web Dev
         Structures        |              |
              |        (standalone)   🗄️ Database
         ⚡ Algorithms                    |
              |                      🔒 Cybersecurity
         🖥️ Architecture
                                    📱 App Dev
         👥 Software Eng            🎮 Game Dev
```

---

## 📐 App Structure Design

### Dashboard Changes
1. **Course Selector** — Top-level navigation between tracks
2. **Knowledge Map** — Visual graph of track relationships and prerequisites
3. **Unified Progress** — XP and level system spans all tracks
4. **Track Cards** — Each track shows progress, locked/unlocked status

### Shared Infrastructure
- Code Lab: shared across all tracks (exercises tagged by track)
- AI Chat: context-aware for current track
- Progress Store: unified XP + per-track completion
- Skill Quiz: per-track placement tests

### URL Structure
```
/dashboard                    → Course map + track selector
/dashboard/lessons/[id]       → Lesson viewer (works for all tracks)
/dashboard/code-lab           → Code Lab (filterable by track)
/dashboard/explore            → Knowledge map visualization
```

---

## 🚀 Implementation Priority (Wave 1)

### Phase 1: Infrastructure (Current)
- [ ] Add `Track` data model and track selector UI
- [ ] Refactor MODULES/LESSONS to support multiple tracks
- [ ] Add knowledge map / course overview page
- [ ] Update navigation and sidebar

### Phase 2: Data Structures Track
- [ ] 16-20 lessons with interactive visualizations
- [ ] DS-specific Code Lab exercises
- [ ] Animated data structure component

### Phase 3: Algorithms Track
- [ ] 20 lessons with algorithm visualizations
- [ ] Algorithm race/comparison tool
- [ ] Competition-prep exercises

### Phase 4: AI/ML Track
- [ ] 20 lessons with ML playground
- [ ] Browser-based model training
- [ ] AI project exercises

---

*This is a living document. Updated as development progresses.*
