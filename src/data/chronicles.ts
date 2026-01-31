// CS/CE Legendaries — 传奇：计算机科学与工程的传奇故事
// Fun stories about the history, people, and milestones of computing

export interface Chronicle {
  id: string;
  title: string;
  titleZh: string;
  hook: string; // One-line teaser
  hookZh: string;
  category: "origins" | "legends" | "people" | "hardware" | "software" | "internet" | "ai" | "future";
  year: number; // Primary year for timeline
  yearLabel?: string; // e.g. "1940s" or "2012"
  readMinutes: number;
  tags: string[];
  emoji: string;
  image?: string; // URL of a real photo/illustration
  imageCaption?: string; // Caption for the image
  content: string; // Markdown-ish content
  contentZh: string; // Chinese translation of content
  funFacts: string[]; // "Did you know?" popups
  funFactsZh: string[]; // Chinese translations of fun facts
  relatedCourse?: string; // Link to a course module
}

export const CATEGORIES = [
  { key: "origins", label: "🏛️ Origins", labelZh: "起源", color: "#8b5cf6" },
  { key: "legends", label: "🐛 Legends", labelZh: "传奇", color: "#f59e0b" },
  { key: "people", label: "👤 People", labelZh: "人物", color: "#3b82f6" },
  { key: "hardware", label: "🔧 Hardware", labelZh: "硬件", color: "#ef4444" },
  { key: "software", label: "💻 Software", labelZh: "软件", color: "#22c55e" },
  { key: "internet", label: "🌐 Internet", labelZh: "互联网", color: "#06b6d4" },
  { key: "ai", label: "🤖 AI Era", labelZh: "AI时代", color: "#a855f7" },
  { key: "future", label: "🔮 Future", labelZh: "未来", color: "#ec4899" },
] as const;

export const CHRONICLES: Chronicle[] = [
  // ============================================================
  // 🏛️ ORIGINS — 计算的起源
  // ============================================================
  {
    id: "abacus-to-babbage",
    title: "From Abacus to Babbage",
    titleZh: "从算盘到巴贝奇",
    hook: "Humans have been building calculators for 4,000 years.",
    hookZh: "人类造计算工具已经4000年了。",
    category: "origins",
    year: 1837,
    yearLabel: "2000 BC–1837",
    readMinutes: 4,
    tags: ["history", "mechanical"],
    emoji: "🧮",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Babbage_Difference_Engine.jpg",
    imageCaption: "Babbage's Difference Engine",
    content: `## The Quest to Count Faster

For as long as humans have traded goods, we've needed ways to count. The **abacus** appeared around 2000 BC in Mesopotamia — beads on rods that could add and subtract faster than fingers.

Fast forward to 1642: **Blaise Pascal**, a French teenager (yes, teenager!), built the **Pascaline** — a mechanical calculator with gears and wheels. His dad was a tax collector who was drowning in arithmetic, so young Blaise built a machine to help.

Then came **Gottfried Leibniz** in 1694 with a machine that could multiply and divide too. He also invented binary (0s and 1s) — the language every computer speaks today!

But the real visionary was **Charles Babbage** in 1837. He designed the **Analytical Engine** — a steam-powered general-purpose computer with a CPU ("mill"), memory ("store"), and even loops. It was never built in his lifetime, but its design was essentially a modern computer... 100 years early.

### Why It Matters
Every computer you use today — from your phone to a supercomputer — follows the same basic ideas: input → process → store → output. Babbage saw it first.`,
    contentZh: `## 追求更快的计算

自从人类开始做生意，我们就需要计数的工具。**算盘**（Abacus）大约在公元前2000年出现在美索不达米亚——杆子上的珠子能比手指更快地做加减法。

快进到1642年：法国少年 **布莱兹·帕斯卡**（Blaise Pascal）——没错，是个十几岁的少年！——造出了 **帕斯卡计算器**（Pascaline），一台用齿轮和轮子运转的机械计算器。他老爸是个税务官，天天被算术淹没，所以小帕斯卡就造了台机器来帮忙。

接着是1694年的 **戈特弗里德·莱布尼茨**（Gottfried Leibniz），他的机器还能做乘法和除法。他还发明了二进制（0和1）——今天每台计算机说的语言！

但真正的远见者是1837年的 **查尔斯·巴贝奇**（Charles Babbage）。他设计了 **分析机**（Analytical Engine）——一台蒸汽驱动的通用计算机，有CPU（"磨坊"）、内存（"仓库"），甚至还有循环。虽然在他有生之年没能造出来，但它的设计基本上就是一台现代计算机……早了100年。

### 为什么重要
你今天用的每台计算机——从手机到超级计算机——都遵循同样的基本原理：输入 → 处理 → 存储 → 输出。巴贝奇最先看到了这一点。`,
    funFacts: [
      "The abacus is STILL used in some parts of Asia. Expert abacus users can add faster than people with calculators!",
      "Babbage spent £17,000 of government money (about $3 million today) and never finished his engine. The government was NOT happy.",
    ],
    funFactsZh: [
      "算盘在亚洲一些地方至今还在使用。算盘高手的加法速度比用计算器的人还快！",
      "巴贝奇花了政府17,000英镑（相当于今天的300万美元），结果机器都没造完。政府非常不高兴。",
    ],
  },
  {
    id: "ada-lovelace",
    title: "Ada Lovelace: The First Programmer",
    titleZh: "Ada Lovelace：第一个程序员",
    hook: "She wrote the first algorithm before computers even existed.",
    hookZh: "她在计算机存在之前就写出了第一个算法。",
    category: "origins",
    year: 1843,
    readMinutes: 4,
    tags: ["history", "women-in-tech", "programming"],
    emoji: "👩‍💻",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    imageCaption: "Ada Lovelace, the first programmer",
    content: `## The Enchantress of Numbers

**Ada Lovelace** (1815–1852) was the daughter of the famous poet Lord Byron. But while her father wrote poetry, Ada wrote... programs.

She met Charles Babbage at a party when she was 17 and became fascinated with his Analytical Engine. While translating an Italian article about the Engine, she added her own notes — and those notes were THREE TIMES longer than the original article!

In "Note G," she described a step-by-step procedure for the Engine to compute **Bernoulli numbers**. This is widely considered the **first computer program ever written**.

But Ada saw something even bigger. While Babbage thought of his engine as a fancy calculator, Ada realized it could do much more:

> "The Engine might compose elaborate and scientific pieces of music of any degree of complexity."

She predicted computers could create art and music — 180 years before AI art generators!

### The Ada Programming Language
In 1980, the U.S. Department of Defense named a programming language "Ada" in her honor. It's still used in aircraft and spacecraft systems today.`,
    contentZh: `## 数字女巫

**Ada Lovelace**（1815–1852）是著名诗人拜伦勋爵的女儿。不过她爸写诗，Ada写的是……程序。

她17岁时在一个派对上遇到了查尔斯·巴贝奇，立刻被他的分析机迷住了。在翻译一篇关于分析机的意大利文章时，她加了自己的注释——这些注释的篇幅是原文的三倍！

在"注释G"中，她描述了一个让分析机计算 **伯努利数**（Bernoulli numbers）的分步过程。这被公认为 **史上第一个计算机程序**。

但Ada看到了更大的图景。巴贝奇觉得他的机器只是个高级计算器，Ada却意识到它能做更多的事：

> "这台机器可以创作任何复杂程度的精妙科学音乐作品。"

她预言了计算机可以创作艺术和音乐——比AI艺术生成器早了180年！

### Ada编程语言
1980年，美国国防部以她的名字命名了一种编程语言"Ada"。这个语言至今仍在飞机和航天器系统中使用。`,
    funFacts: [
      "Ada was homeschooled in math and science by her mother, who feared Ada would inherit her father's 'poetic' (and wild) temperament.",
      "Ada called herself an 'Analyst & Metaphysician' — basically a data scientist, 170 years early.",
    ],
    funFactsZh: [
      "Ada由她妈妈在家教数学和科学，因为她妈妈怕Ada遗传她爸的'诗人'（也就是疯狂的）性格。",
      "Ada自称'分析师与形而上学家'——基本上就是个数据科学家，只不过早了170年。",
    ],
  },
  {
    id: "turing-machine",
    title: "Turing and His Paper Machine",
    titleZh: "图灵和他的纸上机器",
    hook: "A thought experiment on paper became the foundation of ALL computing.",
    hookZh: "一个纸上的思想实验成为了所有计算的基础。",
    category: "origins",
    year: 1936,
    readMinutes: 5,
    tags: ["theory", "turing", "foundational"],
    emoji: "📜",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
    imageCaption: "Alan Turing, aged 16",
    content: `## The Machine That Never Existed

In 1936, a 23-year-old Cambridge student named **Alan Turing** was thinking about a math problem: "Is there a procedure that can decide if any mathematical statement is true or false?"

His answer was no — but to prove it, he invented something incredible: the **Turing Machine**.

It's not a real machine. It's an imaginary device with:
- An infinitely long **tape** divided into cells (each holds a symbol)
- A **head** that reads/writes symbols and moves left or right
- A **state table** — the "program" telling it what to do

That's it. Three simple components. Yet Turing proved that this simple machine could compute **anything that's computable**. Every program on your laptop, every app on your phone, every website — all are things a Turing machine could do (given enough tape and time).

### The Turing Test
In 1950, Turing asked: "Can machines think?" He proposed a test: if a human can't tell whether they're chatting with a person or a computer, the computer passes. We're STILL debating this today with ChatGPT!

### The Tragic Ending
Despite saving millions of lives by breaking the Enigma code in WWII, Turing was persecuted for being gay. He died in 1954 at age 41. In 2013, Queen Elizabeth II granted him a royal pardon.`,
    contentZh: `## 从未存在的机器

1936年，一个23岁的剑桥学生 **艾伦·图灵**（Alan Turing）在思考一个数学问题："有没有一种方法能判断任何数学命题是真还是假？"

他的答案是"没有"——但为了证明这一点，他发明了一个不可思议的东西：**图灵机**（Turing Machine）。

它不是一台真正的机器。它是一个想象中的设备，只有：
- 一条无限长的 **纸带**，分成格子（每格放一个符号）
- 一个 **读写头**，能读写符号并左右移动
- 一张 **状态表**——告诉它该做什么的"程序"

就这些。三个简单的部件。但图灵证明了这台简单的机器可以计算 **一切可计算的东西**。你笔记本上的每个程序、手机上的每个app、每个网站——都是图灵机能做的事情（只要给它足够的纸带和时间）。

### 图灵测试
1950年，图灵问了一个问题："机器能思考吗？"他提出了一个测试：如果人类分不清自己在跟人还是跟电脑聊天，那电脑就通过了。我们现在用ChatGPT还在争论这个问题！

### 悲惨的结局
尽管图灵在二战中破解了Enigma密码，拯救了数百万人的生命，他却因为同性恋身份遭到迫害。他在1954年去世，年仅41岁。2013年，英国女王伊丽莎白二世授予他皇家赦免。`,
    funFacts: [
      "Turing was an elite marathon runner. His best time (2:46:03) would have qualified him for the 1948 Olympics!",
      "The Turing Award — the 'Nobel Prize of Computing' — is named after him. Winners get $1 million.",
    ],
    funFactsZh: [
      "图灵是个精英马拉松选手。他的最好成绩（2:46:03）够资格参加1948年奥运会！",
      "图灵奖——被称为'计算机界的诺贝尔奖'——就是以他命名的。获奖者能拿到100万美元。",
    ],
  },
  {
    id: "enigma",
    title: "Breaking Enigma",
    titleZh: "破解Enigma",
    hook: "Cracking Nazi codes shortened WWII by 2 years and saved millions of lives.",
    hookZh: "破解纳粹密码使二战缩短了2年，拯救了数百万人。",
    category: "origins",
    year: 1941,
    readMinutes: 5,
    tags: ["crypto", "turing", "wwii"],
    emoji: "🔐",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/EnigmaMachineLabeled.jpg",
    imageCaption: "An Enigma machine with its rotors visible",
    content: `## The Code That Couldn't Be Broken (Until It Was)

During World War II, Nazi Germany used a machine called **Enigma** to encrypt military messages. With 158 million million million possible settings that changed DAILY, the Germans believed it was unbreakable.

At **Bletchley Park** in England, Alan Turing and his team built **"the Bombe"** — an electromechanical device that could test thousands of Enigma settings per second. By exploiting patterns (like weather reports always starting with "WETTER"), they cracked the code.

### How Enigma Worked
Imagine typing a letter on a keyboard. It passes through:
1. A **plugboard** that swaps pairs of letters
2. Three **rotors** that each scramble the letter differently
3. A **reflector** that sends it back through the rotors

Each key press rotates the rotors, so pressing 'A' twice gives different outputs!

### The Secret That Lasted 30 Years
The Bletchley Park codebreakers were sworn to secrecy. For 30 years after the war, nobody knew. Turing's contribution wasn't publicly recognized until the 1970s.

Historians estimate that breaking Enigma shortened the war by **at least 2 years**, saving an estimated **14 million lives**.`,
    contentZh: `## 不可能被破解的密码（直到被破解了）

二战期间，纳粹德国使用一种叫 **Enigma**（恩尼格玛）的机器来加密军事通信。它有158,000,000,000,000,000,000种可能的设置，而且每天都在变。德国人认为它绝对不可能被破解。

在英国的 **布莱切利庄园**（Bletchley Park），艾伦·图灵和他的团队建造了 **"炸弹机"（the Bombe）**——一种机电设备，每秒能测试数千种Enigma设置。通过利用规律（比如天气预报总是以"WETTER"开头），他们破解了密码。

### Enigma是怎么工作的
想象你在键盘上按一个字母。它会经过：
1. 一个 **插线板**，交换字母对
2. 三个 **转子**，每个都以不同方式打乱字母
3. 一个 **反射器**，把信号送回转子

每按一次键，转子就转一下，所以按两次'A'会得到不同的结果！

### 保守了30年的秘密
布莱切利庄园的破译人员宣誓保密。战后30年，没有人知道这件事。图灵的贡献直到1970年代才被公开。

历史学家估计，破解Enigma使战争缩短了 **至少2年**，拯救了大约 **1400万条生命**。`,
    funFacts: [
      "Bletchley Park employed about 10,000 people at its peak — most of them women who operated the decryption machines.",
      "The word 'computer' originally meant a PERSON who computes. The women at Bletchley were literally called 'computers'.",
    ],
    funFactsZh: [
      "布莱切利庄园鼎盛时期有大约10,000名员工——其中大部分是操作解密机器的女性。",
      "'Computer'这个词最初指的是做计算的人。布莱切利的女性们确实就被叫做'computers'（计算员）。",
    ],
  },
  {
    id: "eniac",
    title: "ENIAC: The 30-Ton Calculator",
    titleZh: "ENIAC：30吨重的计算器",
    hook: "The first electronic computer filled an entire room and used 18,000 vacuum tubes.",
    hookZh: "第一台电子计算机占满了整个房间，用了18000个真空管。",
    category: "origins",
    year: 1945,
    readMinutes: 4,
    tags: ["hardware", "first-computer"],
    emoji: "🏗️",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/ENIAC_Penn1.jpg",
    imageCaption: "ENIAC at the University of Pennsylvania, 1946",
    content: `## A Room-Sized Brain

**ENIAC** (Electronic Numerical Integrator and Computer) was built at the University of Pennsylvania in 1945. It was designed to calculate artillery firing tables for the U.S. Army.

### By the Numbers
- **Weight:** 30 tons (about 5 elephants)
- **Size:** 1,800 square feet (a large apartment)
- **Vacuum tubes:** 17,468
- **Power:** 150 kilowatts (enough for 50 homes)
- **Speed:** 5,000 additions per second

By comparison, your smartphone can do about 15 BILLION operations per second. ENIAC would need to run for **95 years** to match what your phone does in ONE SECOND.

### Programming ENIAC
There was no keyboard, no screen, no programming language. To "program" ENIAC, six women — **Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Meltzer, Fran Bilas, and Ruth Lichterman** — physically reconnected cables and flipped switches. It could take DAYS to set up a new program.

These six women were essentially the world's first professional programmers, yet they were largely forgotten for decades.

### The Vacuum Tube Problem
Vacuum tubes burned out constantly. With 17,468 of them, on average one would fail every few hours. A team of engineers was always on standby, and they even placed mothballs around the machine because moths were attracted to the warm glow — literally causing "bugs"!`,
    contentZh: `## 一个房间大小的"大脑"

**ENIAC**（电子数值积分计算机，Electronic Numerical Integrator and Computer）于1945年在宾夕法尼亚大学建成。它是为美国陆军计算炮弹弹道表而设计的。

### 数据一览
- **重量：** 30吨（大约5头大象）
- **大小：** 170平方米（一套大公寓那么大）
- **真空管：** 17,468个
- **功耗：** 150千瓦（够50户人家用电）
- **速度：** 每秒5,000次加法

相比之下，你的智能手机每秒能做大约150亿次运算。ENIAC需要运行 **95年** 才能追上你手机一秒钟的工作量。

### 给ENIAC编程
没有键盘，没有屏幕，没有编程语言。要给ENIAC"编程"，六位女性——**Kay McNulty、Betty Jennings、Betty Snyder、Marlyn Meltzer、Fran Bilas和Ruth Lichterman**——需要亲手重新连接电缆和拨动开关。设置一个新程序可能需要好几天。

这六位女性基本上是世界上第一批专业程序员，但她们几十年来几乎被遗忘了。

### 真空管的烦恼
真空管经常烧坏。有17,468个真空管，平均每隔几小时就有一个会坏掉。一个工程师团队随时待命，他们甚至在机器周围放樟脑丸，因为飞蛾会被温暖的光芒吸引——真的是在制造"bug"（虫子）！`,
    funFacts: [
      "ENIAC's first public demonstration in 1946 calculated a trajectory in 20 seconds that would take a human 3 days with a desk calculator.",
      "Legend says ENIAC dimmed the lights in Philadelphia when it was turned on, though this is probably not true!",
    ],
    funFactsZh: [
      "ENIAC在1946年首次公开演示时，20秒就算出了一条弹道——人工用台式计算器需要3天。",
      "传说ENIAC开机时会让整个费城的灯光变暗，不过这个故事很可能不是真的！",
    ],
  },

  // ============================================================
  // 🐛 LEGENDS — 传奇故事
  // ============================================================
  {
    id: "the-first-bug",
    title: "The First Computer Bug",
    titleZh: "第一个计算机Bug",
    hook: "A literal moth crashed a $2 million computer.",
    hookZh: "一只真正的蛾子让一台200万美元的计算机崩溃了。",
    category: "legends",
    year: 1947,
    readMinutes: 3,
    tags: ["bug", "grace-hopper", "fun"],
    emoji: "🐛",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/First_Computer_Bug%2C_1947.jpg",
    imageCaption: "The actual moth found in the Harvard Mark II, 1947",
    content: `## The Bug That Named All Bugs

On September 9, 1947, engineers working on the **Harvard Mark II** computer found that something was wrong. After searching, they found a moth trapped in a relay (an electromechanical switch).

**Grace Hopper** taped the moth into the logbook and wrote: *"First actual case of bug being found."*

The moth is still preserved in the Smithsonian Institution in Washington, D.C.!

### But Wait...
The word "bug" for a technical problem actually predates computers. Thomas Edison used it in 1878 to describe flaws in his inventions. But the Mark II moth made it FAMOUS in computing.

### Debugging
Today, when programmers fix errors in code, they call it **"debugging"** — literally removing bugs. Every time you get a syntax error in Python, you're fighting the descendants of that 1947 moth!

\`\`\`python
# This code has a bug! Can you find it?
for i in range(10)
    print(i)
# Missing colon after range(10)!
\`\`\``,
    contentZh: `## 给所有Bug命名的那只Bug

1947年9月9日，在 **Harvard Mark II** 计算机上工作的工程师们发现机器出了问题。排查之后，他们发现一只飞蛾卡在了一个继电器（一种机电开关）里。

**Grace Hopper** 把这只蛾子用胶带粘在了日志本上，写道：*"第一个被发现的真正的bug（虫子）。"*

这只蛾子至今还保存在华盛顿特区的史密森尼博物馆里！

### 等等……
用"bug"来形容技术故障其实比计算机还早。托马斯·爱迪生在1878年就用它来描述发明中的缺陷。但Mark II的这只蛾子让"bug"在计算机领域出了名。

### 调试（Debugging）
今天，程序员修复代码中的错误叫做 **"debugging"**——字面意思就是"除虫"。每次你遇到Python语法错误的时候，你其实在和1947年那只蛾子的后代战斗！

\`\`\`python
# 这段代码有个bug！你能找到吗？
for i in range(10)
    print(i)
# range(10)后面少了冒号！
\`\`\``,
    funFacts: [
      "The original 'bug' logbook page is preserved at the Smithsonian National Museum of American History.",
      "Modern software has about 15-50 bugs per 1,000 lines of code. Windows 10 has ~50 million lines of code. That's a LOT of bugs!",
    ],
    funFactsZh: [
      "那页原始的'bug'日志保存在史密森尼国家美国历史博物馆里。",
      "现代软件平均每1,000行代码有15-50个bug。Windows 10有大约5000万行代码。那可是超级多的bug！",
    ],
    relatedCourse: "python",
  },
  {
    id: "hello-world",
    title: "Where 'Hello, World!' Came From",
    titleZh: "Hello World的来历",
    hook: "The most famous two words in programming were a casual afterthought.",
    hookZh: "编程界最著名的两个词其实是随手写的。",
    category: "legends",
    year: 1978,
    readMinutes: 3,
    tags: ["programming", "tradition", "fun"],
    emoji: "👋",
    image: "https://upload.wikimedia.org/wikipedia/en/3/34/The_C_Programming_Language_cover.svg",
    imageCaption: "The C Programming Language by Kernighan & Ritchie",
    content: `## The Two Words Every Programmer Knows

When you learn a new programming language, the first thing you write is almost always:

\`\`\`python
print("Hello, World!")
\`\`\`

But why? Where did this tradition come from?

In 1978, **Brian Kernighan** and **Dennis Ritchie** published *"The C Programming Language"* — one of the most influential programming books ever. The very first example program was:

\`\`\`
#include <stdio.h>
main() {
    printf("hello, world\\n");
}
\`\`\`

But Kernighan had actually used "hello, world" even earlier, in a 1974 internal Bell Labs memo about the B programming language.

Why those words? Kernighan later said there was no deep reason — it was just a friendly, simple phrase. But it stuck, and now it's been translated into EVERY programming language ever created.

### Hello World in Different Languages
\`\`\`
Python:     print("Hello, World!")
JavaScript: console.log("Hello, World!")
Java:       System.out.println("Hello, World!");
Rust:       println!("Hello, World!");
Brainfuck:  ++++++++++[>+++++++>++++++++++...
\`\`\`

Yes, Brainfuck is a real programming language. No, you don't want to use it. 😅`,
    contentZh: `## 每个程序员都知道的两个词

学一门新编程语言时，你写的第一段代码几乎总是：

\`\`\`python
print("Hello, World!")
\`\`\`

但为什么？这个传统从哪来的？

1978年，**Brian Kernighan** 和 **Dennis Ritchie** 出版了《C程序设计语言》——有史以来最有影响力的编程书之一。书中第一个示例程序是：

\`\`\`
#include <stdio.h>
main() {
    printf("hello, world\\n");
}
\`\`\`

但其实Kernighan更早就用过"hello, world"——在1974年贝尔实验室一份关于B语言的内部备忘录里。

为什么选这两个词？Kernighan后来说没什么深层原因——就是一句友好、简单的话。但它流传了下来，现在已经被翻译成了有史以来创造的每一种编程语言。

### 不同语言的Hello World
\`\`\`
Python:     print("Hello, World!")
JavaScript: console.log("Hello, World!")
Java:       System.out.println("Hello, World!");
Rust:       println!("Hello, World!");
Brainfuck:  ++++++++++[>+++++++>++++++++++...
\`\`\`

是的，Brainfuck是一门真正的编程语言。不，你不会想用它的。😅`,
    funFacts: [
      "There are Hello World programs in over 600 programming languages, including some designed as jokes.",
      "Brian Kernighan says he doesn't remember exactly why he chose 'hello, world' — it just felt right.",
    ],
    funFactsZh: [
      "超过600种编程语言都有Hello World程序，包括一些专门设计来搞笑的语言。",
      "Brian Kernighan说他不记得当时为什么选了'hello, world'——只是觉得顺口。",
    ],
    relatedCourse: "python",
  },
  {
    id: "404-not-found",
    title: "The Secret of Error 404",
    titleZh: "404错误的秘密",
    hook: "Why 404? Is it really about a room at CERN?",
    hookZh: "为什么是404？真的是因为CERN的一间办公室吗？",
    category: "legends",
    year: 1992,
    readMinutes: 3,
    tags: ["web", "http", "fun"],
    emoji: "🔍",
    content: `## The Most Famous Error on the Internet

You've seen it: **404 Not Found**. But why "404"?

### The Legend
There's a popular story that at **CERN** (where the web was invented), Room 404 was where the main server was kept. When people couldn't find a file, they were told "go check room 404" — and the number stuck.

### The Reality
This is probably a myth! HTTP status codes were designed systematically:
- **1xx:** "Hold on, I'm working on it"
- **2xx:** "Here you go!" (200 = OK)
- **3xx:** "Go look over there" (redirect)
- **4xx:** "You messed up" (client error)
- **5xx:** "I messed up" (server error)

Within the 4xx range, 404 just means "the thing you asked for doesn't exist." The '4' in the tens place means a URL problem, and '04' is the specific code for "not found."

### Creative 404 Pages
Many websites have turned the boring error into art:
- **GitHub** shows a Star Wars-themed "This is not the page you're looking for"
- **Pixar** shows a sad version of the character Sadness from Inside Out
- **LEGO** shows a broken LEGO figure

### Fun Challenge
Build your own creative 404 page! What would yours look like?`,
    contentZh: `## 互联网上最有名的错误

你肯定见过：**404 Not Found**。但为什么是"404"呢？

### 传说
有一个很流行的故事：在 **CERN**（万维网的诞生地），404号房间是放主服务器的地方。当人们找不到文件时，就会被告知"去404房间看看"——于是这个数字就留下来了。

### 真相
这个故事很可能是编的！HTTP状态码是按系统设计的：
- **1xx：** "稍等，我在处理"
- **2xx：** "给你！"（200 = OK）
- **3xx：** "去那边找"（重定向）
- **4xx：** "你搞错了"（客户端错误）
- **5xx：** "我搞错了"（服务器错误）

在4xx范围内，404的意思就是"你要找的东西不存在"。十位上的'4'表示URL出了问题，'04'是"找不到"的具体编码。

### 创意404页面
很多网站把这个无聊的错误变成了艺术品：
- **GitHub** 展示一个星球大战主题的"This is not the page you're looking for"
- **Pixar** 展示《头脑特工队》里忧忧的悲伤版本
- **LEGO** 展示一个碎掉的乐高小人

### 小挑战
设计你自己的创意404页面！你会做成什么样？`,
    funFacts: [
      "HTTP 418 'I'm a teapot' is a real status code, created as an April Fools' joke in 1998. Some websites actually use it!",
      "The very first website (info.cern.ch) is still online. You can visit it today!",
    ],
    funFactsZh: [
      "HTTP 418 'I'm a teapot'（我是茶壶）是一个真正的状态码，1998年的愚人节玩笑创造的。有些网站还真的在用它！",
      "世界上第一个网站（info.cern.ch）至今还在线。你今天就可以访问它！",
    ],
  },
  {
    id: "why-python",
    title: "Why Is Python Called Python?",
    titleZh: "Python为什么叫Python？",
    hook: "It's NOT named after the snake. 🐍",
    hookZh: "它不是以蛇命名的。🐍",
    category: "legends",
    year: 1991,
    readMinutes: 3,
    tags: ["python", "naming", "fun"],
    emoji: "🐍",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg",
    imageCaption: "Python logo",
    content: `## Not a Snake — A Comedy Show!

When **Guido van Rossum** created Python in 1991, he needed a name. He was a fan of the British comedy group **Monty Python's Flying Circus**, and he wanted something short, unique, and slightly mysterious.

So he named it Python. The snake logo came later, added by the community.

### Other Languages Named After... Things
- **Java** — Named after Java coffee (the logo is a coffee cup ☕)
- **Ruby** — Creator's birthstone
- **Perl** — Originally "Pearl" (shortened because another language had that name)
- **Go** — Google wanted something short
- **Rust** — Named after a fungus (the rust fungus is "robust and over-engineered" — the creator's joke)
- **C** — Because it came after B (which came after BCPL)
- **C++** — C "plus one" (++ is the increment operator in C)

### Guido's Zen
Guido embedded a philosophy into Python. Try this:

\`\`\`python
import this
\`\`\`

You'll see "The Zen of Python" — 19 guiding principles including:
- "Beautiful is better than ugly"
- "Simple is better than complex"
- "There should be one obvious way to do it"

This is why Python code looks so clean compared to other languages!`,
    contentZh: `## 不是蛇——是个喜剧节目！

1991年 **Guido van Rossum** 创造Python时，他需要取个名字。他是英国喜剧团体 **Monty Python's Flying Circus**（巨蟒剧团的飞行马戏团）的粉丝，想要一个简短、独特、略带神秘感的名字。

于是他就叫它Python了。蛇的logo是后来社区加的。

### 其他语言都是怎么取名的
- **Java** — 以Java咖啡命名（logo就是个咖啡杯 ☕）
- **Ruby** — 创造者的诞生石
- **Perl** — 原本叫"Pearl"（因为另一个语言已经叫这名了，就缩短了）
- **Go** — Google想要个简短的名字
- **Rust** — 以一种真菌命名（锈菌"坚固而过度设计"——创造者的玩笑）
- **C** — 因为它排在B后面（B排在BCPL后面）
- **C++** — C"加一"（++是C语言中的自增运算符）

### Guido的禅
Guido在Python中嵌入了一套哲学。试试这个：

\`\`\`python
import this
\`\`\`

你会看到"Python之禅"——19条指导原则，包括：
- "优美胜于丑陋"
- "简单胜于复杂"
- "应该有一种——最好只有一种——显而易见的实现方法"

这就是为什么Python代码看起来比其他语言干净多了！`,
    funFacts: [
      "Guido van Rossum was Python's 'Benevolent Dictator For Life' (BDFL) until he retired from the role in 2018.",
      "Python is the most popular first programming language taught in universities worldwide.",
    ],
    funFactsZh: [
      "Guido van Rossum一直是Python的'终身仁慈独裁者'（BDFL），直到2018年退休。",
      "Python是全球大学教得最多的入门编程语言。",
    ],
    relatedCourse: "python",
  },
  {
    id: "y2k",
    title: "Y2K: The Millennium Bug",
    titleZh: "千年虫：Y2K",
    hook: "Two missing digits almost crashed the world on January 1, 2000.",
    hookZh: "两个缺失的数字差点在2000年1月1日让世界崩溃。",
    category: "legends",
    year: 2000,
    readMinutes: 4,
    tags: ["bug", "history", "fun"],
    emoji: "💥",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Year_2000_bug.jpg",
    imageCaption: "Y2K bug illustration",
    content: `## When Saving Memory Almost Ended Civilization

In the 1960s-80s, computer memory was incredibly expensive. To save space, programmers stored years as TWO digits: 1998 became "98", 1999 became "99".

But what happens on January 1, 2000? The year becomes "00" — which computers might interpret as 1900!

### The Panic
People feared:
- ✈️ Planes falling from the sky
- 🏦 Banks losing all records
- ⚡ Power grids shutting down
- 🚀 Nuclear missiles launching accidentally

Governments and companies spent an estimated **$300 BILLION** fixing the problem. Programmers who knew COBOL (a language from 1959!) were suddenly in huge demand because that's what most old banking systems used.

### What Actually Happened
...Not much! Because of all the fixes. Midnight came and went. A few minor glitches:
- Some parking meters in NYC stopped working
- A few websites displayed "19100" instead of "2000"
- One man in the UK received a $100,000 late fee on a video rental

### The Lesson
This is why writing good, future-proof code matters! Always think about edge cases.

\`\`\`python
# Bad (Y2K-style):
year = 99  # What year is this??

# Good:
year = 1999  # Clear and future-proof!
\`\`\``,
    contentZh: `## 省内存差点毁了文明

1960到80年代，计算机内存贵得吓人。为了省空间，程序员用两位数存储年份：1998变成"98"，1999变成"99"。

但2000年1月1日会怎样？年份变成了"00"——计算机可能把它当成1900年！

### 全球恐慌
人们担心：
- ✈️ 飞机从天上掉下来
- 🏦 银行丢失所有记录
- ⚡ 电网瘫痪
- 🚀 核导弹意外发射

各国政府和企业估计花了 **3000亿美元** 来修复这个问题。会COBOL（一种1959年的编程语言！）的程序员突然变得超级抢手，因为大多数老银行系统都是用它写的。

### 实际发生了什么
……没什么大事！因为都被修好了。午夜来了又走了。只有几个小故障：
- 纽约的一些停车计费器不工作了
- 几个网站显示"19100"而不是"2000"
- 英国一个人收到了一笔10万美元的录像带逾期费

### 教训
这就是为什么写好的、面向未来的代码很重要！要始终考虑边界情况。

\`\`\`python
# 差劲的写法（Y2K风格）：
year = 99  # 这是哪一年？？

# 好的写法：
year = 1999  # 清晰又不怕过期！
\`\`\``,
    funFacts: [
      "Some people stockpiled food, water, and even built bunkers to prepare for Y2K.",
      "The Y2K fix effort employed about 300,000 programmers worldwide — many came out of retirement.",
    ],
    funFactsZh: [
      "有些人囤积了食物、水，甚至建了地堡来为Y2K做准备。",
      "Y2K修复工作在全球雇用了大约30万名程序员——其中很多是退休后重新出山的。",
    ],
  },
  {
    id: "bsod",
    title: "The Blue Screen of Death",
    titleZh: "蓝屏死机简史",
    hook: "Windows' most famous 'feature' has terrified users since 1993.",
    hookZh: "Windows最著名的'功能'从1993年就开始吓人了。",
    category: "legends",
    year: 1993,
    readMinutes: 3,
    tags: ["windows", "bug", "fun"],
    emoji: "💀",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Bsodwindows10.png",
    imageCaption: "Windows 10 Blue Screen of Death",
    content: `## The Screen Everyone Dreads

The **Blue Screen of Death (BSOD)** appears when Windows encounters a fatal error it can't recover from. It shows cryptic text like "KERNEL_DATA_INPAGE_ERROR" and restarts your computer.

### Famous BSODs
- **1998:** During a live demo of Windows 98, Bill Gates' computer got a BSOD on stage. The audience laughed. Gates said: "That must be why we're not shipping Windows 98 yet."
- **2020:** A BSOD appeared on a billboard in Times Square, New York. Millions of tourists saw it.
- **2024:** A CrowdStrike update caused millions of Windows computers worldwide to blue-screen simultaneously — disrupting airlines, banks, and hospitals.

### Why Blue?
Microsoft chose blue because it's calming (ironic, right?). Early versions of the BSOD in Windows 3.1 were actually just text on a black screen. The blue was added to make it look "less scary." It didn't work.

### Modern BSODs
Windows 10 and 11 BSODs are actually friendlier: they show a sad face 😢, a QR code for help, and a simpler error message. But they're still terrifying when you haven't saved your homework!

**Pro tip:** Always save your work. Ctrl+S is your best friend!`,
    contentZh: `## 人人都怕的屏幕

**蓝屏死机（BSOD，Blue Screen of Death）** 在Windows遇到无法恢复的致命错误时出现。它会显示像"KERNEL_DATA_INPAGE_ERROR"这样的神秘文字，然后重启你的电脑。

### 著名的蓝屏事件
- **1998年：** 在Windows 98的现场演示中，比尔·盖茨的电脑在台上蓝屏了。观众大笑。盖茨说："这大概就是我们还没发布Windows 98的原因。"
- **2020年：** 纽约时代广场的一个广告牌上出现了蓝屏。数百万游客都看到了。
- **2024年：** CrowdStrike的一次更新导致全球数百万台Windows电脑同时蓝屏——航空公司、银行和医院全都受到影响。

### 为什么是蓝色？
微软选蓝色是因为它"令人平静"（讽刺对吧？）。Windows 3.1早期版本的蓝屏其实只是黑屏上的白字。后来换成蓝色是为了看起来"没那么吓人"。然而并没有用。

### 现代的蓝屏
Windows 10和11的蓝屏其实友好多了：会显示一个悲伤的表情 😢、一个帮助二维码和更简单的错误信息。但当你的作业还没保存时，它还是很恐怖的！

**小贴士：** 一定要随时保存。Ctrl+S是你最好的朋友！`,
    funFacts: [
      "Steve Ballmer (Microsoft CEO) once threw a chair in a meeting. Legend says it was because of a BSOD during a demo.",
      "The BSOD has appeared in movies, art exhibits, and even on wedding photos (projected by accident).",
    ],
    funFactsZh: [
      "微软CEO史蒂夫·鲍尔默曾在会议上扔过一把椅子。传说是因为演示时蓝屏了。",
      "蓝屏出现过在电影里、艺术展上，甚至出现在了婚纱照里（被意外投影上去的）。",
    ],
  },

  // ============================================================
  // 👤 PEOPLE — 关键人物
  // ============================================================
  {
    id: "von-neumann",
    title: "Von Neumann: The Last Polymath",
    titleZh: "冯·诺依曼：最后的通才",
    hook: "He designed modern computer architecture AND was the life of every party.",
    hookZh: "他设计了现代计算机架构，而且还是派对之王。",
    category: "people",
    year: 1945,
    readMinutes: 4,
    tags: ["architecture", "math", "legend"],
    emoji: "🧠",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/JohnvonNeumann-LosAlamos.gif",
    imageCaption: "John von Neumann at Los Alamos",
    content: `## The Smartest Person in Every Room

**John von Neumann** (1903–1957) might have been the most brilliant person of the 20th century. He made groundbreaking contributions to mathematics, physics, economics, AND computer science.

### The Von Neumann Architecture
In 1945, he wrote a report describing a computer design where **the program and data are stored in the same memory**. Before this, programs were hardwired or entered on switches.

This "stored-program" concept is called the **Von Neumann Architecture**, and virtually every computer today — from your phone to supercomputers — uses it:

\`\`\`
[Input] → [CPU (Control + ALU)] ↔ [Memory] → [Output]
\`\`\`

### The Human Calculator
- At age 6, he could divide 8-digit numbers in his head
- He could memorize entire books and recite them years later
- He could do complex math faster than early computers (they timed him!)

### Party Animal
Despite his genius, Von Neumann loved parties, loud music, and fast cars. His wife said: "He can count everything except calories." He was also known for driving dangerously — he wrecked his car so often that one intersection in Princeton was nicknamed "Von Neumann Corner."

### Legacy
His ideas are everywhere: game theory (used in economics and AI), cellular automata, nuclear physics, and of course, the fundamental design of every computer.`,
    contentZh: `## 每个房间里最聪明的人

**约翰·冯·诺依曼**（John von Neumann，1903–1957）可能是20世纪最聪明的人。他在数学、物理、经济学和计算机科学领域都做出了突破性贡献。

### 冯·诺依曼架构
1945年，他写了一份报告，描述了一种 **程序和数据存储在同一内存中** 的计算机设计。在此之前，程序都是硬连线或用开关输入的。

这种"存储程序"概念叫做 **冯·诺依曼架构**（Von Neumann Architecture），今天几乎所有计算机——从你的手机到超级计算机——都在使用它：

\`\`\`
[输入] → [CPU（控制器 + 运算器）] ↔ [内存] → [输出]
\`\`\`

### 人肉计算器
- 6岁时，他能在脑子里做8位数的除法
- 他能背下整本书，多年后还能复述
- 他做复杂数学比早期的计算机还快（他们计时了！）

### 派对达人
尽管是天才，冯·诺依曼热爱派对、大声的音乐和跑车。他妻子说："他什么都能算，就是算不清卡路里。"他还因为危险驾驶出了名——他撞车太频繁了，普林斯顿的一个路口被称为"冯·诺依曼拐角"。

### 遗产
他的思想无处不在：博弈论（用于经济学和AI）、元胞自动机、核物理，当然还有每台计算机的基本设计。`,
    funFacts: [
      "Von Neumann once memorized the entire Buenos Aires phone book — just for fun.",
      "He was the inspiration for the character Dr. Strangelove in Stanley Kubrick's famous film.",
    ],
    funFactsZh: [
      "冯·诺依曼曾经背下了整本布宜诺斯艾利斯电话簿——纯粹是好玩。",
      "他是斯坦利·库布里克著名电影中奇爱博士这个角色的灵感来源。",
    ],
  },
  {
    id: "grace-hopper",
    title: "Grace Hopper: Queen of Code",
    titleZh: "Grace Hopper：代码女王",
    hook: "She invented the compiler and lived by: 'It's easier to ask forgiveness than permission.'",
    hookZh: "她发明了编译器，座右铭是：'先做再说，请求原谅比请求许可容易。'",
    category: "people",
    year: 1952,
    readMinutes: 4,
    tags: ["compiler", "women-in-tech", "navy"],
    emoji: "⚓",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
    imageCaption: "Rear Admiral Grace Hopper, US Navy",
    content: `## Amazing Grace

**Grace Hopper** (1906–1992) was a U.S. Navy Rear Admiral and one of the most important figures in computing history.

### The Compiler
In the early 1950s, programming meant writing in machine code — raw numbers that computers understand. Grace thought: "Why can't we write in something closer to English?"

She built the first **compiler** — a program that translates human-readable code into machine code. People told her it was impossible. "Nobody believed that," she recalled. "I had a running compiler, and nobody would touch it. They told me computers could only do arithmetic."

Her work led to **COBOL** (1959), one of the first programming languages that used English-like words. COBOL is STILL used today — banks process trillions of dollars with it.

### Amazing Facts
- She joined the Navy at age 37 during WWII
- She retired at age 79 as a Rear Admiral — the oldest serving officer
- She carried a piece of wire exactly 11.8 inches long — the distance electricity travels in one nanosecond — to explain why speed matters
- She popularized the term "debugging" (see the moth story!)

### Her Famous Quote
> "The most dangerous phrase in the language is: 'We've always done it this way.'"

She challenged everyone to question assumptions and try new approaches. That's what good programming is all about.`,
    contentZh: `## 了不起的Grace

**Grace Hopper**（1906–1992）是美国海军少将，也是计算机历史上最重要的人物之一。

### 编译器
1950年代初期，编程意味着写机器码——计算机能理解的原始数字。Grace想："为什么我们不能用更接近英语的东西来写程序？"

她构建了第一个 **编译器**（compiler）——一个把人类可读的代码翻译成机器码的程序。人们告诉她这不可能。"没人相信，"她回忆道，"我已经有一个能运行的编译器了，但没人愿意碰它。他们说计算机只能做算术。"

她的工作催生了 **COBOL**（1959），最早使用类英语词汇的编程语言之一。COBOL至今仍在使用——银行用它处理数万亿美元的交易。

### 惊人的事实
- 她37岁时在二战期间加入了海军
- 她79岁以少将军衔退役——当时最年长的现役军官
- 她随身携带一根11.8英寸长的电线——电在一纳秒内传播的距离——用来解释为什么速度很重要
- 她让"debugging"（调试）这个词流行起来（参见飞蛾的故事！）

### 她的名言
> "语言中最危险的一句话就是：'我们一直都是这么做的。'"

她激励每个人质疑假设、尝试新方法。这正是好的编程的核心。`,
    funFacts: [
      "A U.S. Navy destroyer (USS Hopper) and a supercomputer at NERSC (Cray XE6 'Hopper') are named after her.",
      "She appeared on the Late Show with David Letterman at age 79, still in uniform!",
    ],
    funFactsZh: [
      "一艘美国海军驱逐舰（USS Hopper）和NERSC的一台超级计算机（Cray XE6 'Hopper'）都以她命名。",
      "她79岁时穿着军装上了大卫·莱特曼的深夜秀！",
    ],
  },
  {
    id: "margaret-hamilton",
    title: "Margaret Hamilton: The Moon Coder",
    titleZh: "Margaret Hamilton：登月程序员",
    hook: "Her code saved Apollo 11 from crashing — three minutes before landing on the Moon.",
    hookZh: "她的代码在登月前三分钟拯救了阿波罗11号。",
    category: "people",
    year: 1969,
    readMinutes: 4,
    tags: ["nasa", "apollo", "women-in-tech"],
    emoji: "🌙",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Margaret_Hamilton_-_restoration.jpg",
    imageCaption: "Margaret Hamilton next to the Apollo guidance software printout",
    content: `## The Woman Who Landed Us on the Moon

**Margaret Hamilton** led the team that wrote the flight software for **NASA's Apollo program**. She was 32 years old, leading a team of engineers at MIT.

### The Save That Changed History
On July 20, 1969, as Apollo 11 descended to the Moon, alarms started blaring: **1202** and **1201 errors**. Mission Control almost aborted the landing.

But Hamilton's software was designed to handle exactly this. She had built a **priority system** that let the computer drop low-priority tasks and focus on the critical ones — landing the spacecraft. The computer kept going, and Neil Armstrong stepped onto the Moon.

### The Famous Photo
There's an iconic photo of Hamilton standing next to a STACK OF PAPER as tall as she is — that's the printout of the Apollo guidance software code. Her team wrote it by hand, and it had to be PERFECT. A single bug could have killed astronauts.

### "Software Engineering"
Hamilton actually coined the term **"software engineering."** At the time, people laughed — software wasn't considered "real" engineering. Now it's one of the biggest engineering fields in the world.

### Legacy
In 2016, President Obama awarded her the **Presidential Medal of Freedom** — the highest civilian honor in the United States.`,
    contentZh: `## 把我们送上月球的女人

**Margaret Hamilton** 领导了为 **NASA阿波罗计划** 编写飞行软件的团队。当时她32岁，在MIT带领一支工程师团队。

### 改变历史的救援
1969年7月20日，阿波罗11号正在向月球降落时，警报响了：**1202** 和 **1201错误**。任务控制中心差点取消登月。

但Hamilton的软件恰恰是为应对这种情况而设计的。她建立了一个 **优先级系统**，让计算机丢掉低优先级的任务，专注于关键任务——降落飞船。计算机继续运行，尼尔·阿姆斯特朗踏上了月球。

### 那张著名的照片
有一张经典照片：Hamilton站在一摞跟她一样高的纸旁边——那就是阿波罗导航软件代码的打印稿。她的团队手写了所有代码，而且必须完美无缺。一个bug就可能害死宇航员。

### "软件工程"
Hamilton实际上创造了 **"软件工程"（software engineering）** 这个词。当时人们都笑了——软件不被认为是"真正的"工程。现在它是世界上最大的工程领域之一。

### 遗产
2016年，奥巴马总统授予她 **总统自由勋章**——美国最高平民荣誉。`,
    funFacts: [
      "Apollo's computer had about 72 KB of memory — less than a single photo on your phone!",
      "Hamilton often brought her daughter to the MIT lab. The little girl once crashed the simulator by pressing random buttons — which inspired Hamilton to add better error handling!",
    ],
    funFactsZh: [
      "阿波罗的计算机只有大约72KB的内存——还不到你手机上一张照片的大小！",
      "Hamilton经常带女儿去MIT实验室。小姑娘有一次乱按按钮把模拟器弄崩了——这反而启发Hamilton加入了更好的错误处理机制！",
    ],
  },
  {
    id: "katherine-johnson",
    title: "Katherine Johnson: The Human Computer",
    titleZh: "Katherine Johnson：人肉计算机",
    hook: "NASA's astronauts refused to fly until she verified the computer's math.",
    hookZh: "NASA的宇航员拒绝起飞，直到她验证了电脑的数学计算。",
    category: "people",
    year: 1962,
    readMinutes: 4,
    tags: ["nasa", "math", "women-in-tech"],
    emoji: "🚀",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Katherine_Johnson_1983.jpg",
    imageCaption: "Katherine Johnson at NASA, 1966",
    content: `## The Woman NASA Couldn't Do Without

**Katherine Johnson** (1918–2020) was a mathematician at NASA whose calculations were so accurate that astronaut **John Glenn** refused to fly unless she personally verified the numbers the electronic computer had produced.

"Get the girl to check the numbers," Glenn said. "If she says the numbers are good, I'm ready to go."

### Against All Odds
Katherine was a Black woman working in 1950s Virginia, where racial segregation was law. She had to use separate bathrooms, eat in separate dining areas, and was initially assigned to a "colored computing" pool.

But her math was SO good that she was soon moved to the main Flight Research Division. She calculated the trajectory for Alan Shepard's first U.S. spaceflight (1961), John Glenn's orbital mission (1962), and Apollo 11's path to the Moon (1969).

### Hidden Figures
Her story was told in the 2016 movie **"Hidden Figures"**, along with colleagues Dorothy Vaughan and Mary Jackson — all brilliant Black women who made space exploration possible.

### The Math
Katherine calculated orbital trajectories by hand using:
- Euler's method
- Orbital mechanics equations
- Spherical trigonometry

These same equations are now computed by machines billions of times faster — but the math is exactly the same.`,
    contentZh: `## NASA离不开的女人

**Katherine Johnson**（1918–2020）是NASA的数学家，她的计算精确到什么程度呢？宇航员 **John Glenn** 拒绝起飞，除非她亲自验证电子计算机算出的数字。

"让那个姑娘核对一下数字，"Glenn说，"如果她说数字没问题，我就准备出发。"

### 逆境中崛起
Katherine是一位黑人女性，在1950年代的弗吉尼亚州工作，那时种族隔离是法律。她必须使用单独的洗手间、在单独的餐厅吃饭，最初被分配到"有色人种计算池"。

但她的数学实在太强了，很快就被调到了主要的飞行研究部门。她计算了Alan Shepard首次美国太空飞行的轨道（1961年）、John Glenn的轨道飞行任务（1962年）以及阿波罗11号飞往月球的路径（1969年）。

### 隐藏人物
她的故事在2016年的电影《**隐藏人物**》（Hidden Figures）中被讲述，一同出场的还有同事Dorothy Vaughan和Mary Jackson——都是让太空探索成为可能的杰出黑人女性。

### 数学
Katherine用手工计算轨道，使用的是：
- 欧拉方法
- 轨道力学方程
- 球面三角学

这些方程如今被机器以快几十亿倍的速度计算——但数学本身完全一样。`,
    funFacts: [
      "Katherine skipped several grades and started college at age 15.",
      "In 2015, at age 97, President Obama awarded her the Presidential Medal of Freedom.",
    ],
    funFactsZh: [
      "Katherine跳了好几级，15岁就上了大学。",
      "2015年，97岁的她被奥巴马总统授予了总统自由勋章。",
    ],
  },
  {
    id: "linus-torvalds",
    title: "Linus Torvalds: The Accidental Revolutionary",
    titleZh: "Linus Torvalds：意外的革命者",
    hook: "A Finnish college student's 'small hobby project' now runs 96% of the world's servers.",
    hookZh: "一个芬兰大学生的'小爱好项目'现在运行着全球96%的服务器。",
    category: "people",
    year: 1991,
    readMinutes: 4,
    tags: ["linux", "open-source", "operating-system"],
    emoji: "🐧",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
    imageCaption: "Linus Torvalds at LinuxCon",
    content: `## "Just a Hobby, Won't Be Big and Professional"

On August 25, 1991, a 21-year-old Finnish student named **Linus Torvalds** posted this message on an internet newsgroup:

> "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu)..."

That "hobby" became **Linux** — the operating system that now powers:
- 📱 Every Android phone (3 billion+ devices)
- ☁️ 96% of the world's top 1 million servers
- 🖥️ All of the world's top 500 supercomputers
- 🚗 Tesla cars, smart TVs, routers, spacecraft...

### Git: His Other Revolution
In 2005, Linus created **Git** in just 10 days because he was frustrated with existing version control tools. Today, **GitHub** (built on Git) hosts over 200 million repositories and is where most of the world's software is developed.

### Personality
Linus is famously blunt. He once told a developer: "Please just kill yourself now. The world will be a better place." (He has since worked on being nicer.) His motto:

> "Talk is cheap. Show me the code."

### The Name
Linux = Linus + Unix. The penguin mascot (Tux) was chosen because Linus was once bitten by a penguin at a zoo and thought they were cute!`,
    contentZh: `## "只是个爱好，不会变大也不会变专业"

1991年8月25日，一个21岁的芬兰学生 **Linus Torvalds** 在一个网络论坛上发了这条消息：

> "我在做一个（免费的）操作系统（只是个爱好，不会像GNU那样大而专业）……"

这个"爱好"变成了 **Linux**——如今驱动着：
- 📱 每一部安卓手机（30亿+台设备）
- ☁️ 全球排名前100万的服务器中的96%
- 🖥️ 全球排名前500的所有超级计算机
- 🚗 特斯拉汽车、智能电视、路由器、航天器……

### Git：他的另一场革命
2005年，Linus因为对现有的版本控制工具感到烦躁，仅用10天就创造了 **Git**。如今，建立在Git之上的 **GitHub** 托管了超过2亿个代码仓库，是全球大部分软件的开发平台。

### 性格
Linus以直言不讳著称。他曾经对一个开发者说："请现在就去死吧。世界会变得更好。"（他后来努力变得更友善了。）他的座右铭：

> "废话少说，给我看代码。"

### 名字的由来
Linux = Linus + Unix。企鹅吉祥物（Tux）被选中是因为Linus有一次在动物园被企鹅咬了，然后觉得企鹅很可爱！`,
    funFacts: [
      "Linus has said he's 'not a people person' and mostly works from home in Portland, Oregon.",
      "The Linux kernel has contributions from over 20,000 developers and 1,700 companies, including Microsoft (once Linux's biggest enemy!).",
    ],
    funFactsZh: [
      "Linus说过自己'不擅长跟人打交道'，主要在俄勒冈州波特兰的家里工作。",
      "Linux内核有超过20,000名开发者和1,700家公司贡献代码，其中包括微软（曾经是Linux最大的敌人！）。",
    ],
    relatedCourse: "python",
  },
  {
    id: "tim-berners-lee",
    title: "Tim Berners-Lee: Web for All",
    titleZh: "Tim Berners-Lee：让网络属于所有人",
    hook: "He invented the World Wide Web and gave it away for free.",
    hookZh: "他发明了万维网，然后免费送给了全世界。",
    category: "people",
    year: 1989,
    readMinutes: 3,
    tags: ["web", "internet", "open"],
    emoji: "🌍",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg",
    imageCaption: "Sir Tim Berners-Lee",
    content: `## The Gift That Changed Everything

In 1989, a British scientist at CERN named **Tim Berners-Lee** wrote a proposal titled "Information Management: A Proposal." His boss's response? He wrote "Vague, but exciting" on the cover.

That "vague" proposal became the **World Wide Web** — HTML, URLs, HTTP, and the first web browser.

### The Crucial Decision
Berners-Lee could have patented the web and become the richest person in history. Instead, he convinced CERN to release it **for free** in 1993. No licensing fees. No restrictions. Free for everyone.

> "Had the technology been proprietary, and in my total control, it would probably not have taken off."

### The First Website
The first ever website (http://info.cern.ch) went live on August 6, 1991. It explained what the World Wide Web was. You can still visit it today!

### Legacy
Because the web was free, it exploded: from 1 website in 1991 to over **1.9 billion websites** today. It created Google, Amazon, YouTube, Wikipedia, social media — the entire digital economy.

Tim Berners-Lee was knighted by the Queen and received the Turing Award. But he remains humble and continues fighting for a free, open internet.`,
    contentZh: `## 改变一切的礼物

1989年，一位在CERN工作的英国科学家 **Tim Berners-Lee** 写了一份提案，标题叫"信息管理：一份提案"。他老板的回复？在封面上写了"模糊，但令人兴奋"。

这份"模糊"的提案变成了 **万维网**（World Wide Web）——HTML、URL、HTTP以及第一个网页浏览器。

### 关键决定
Berners-Lee本可以给万维网申请专利，成为历史上最富有的人。相反，他说服CERN在1993年将它 **免费** 发布。没有许可费。没有限制。对所有人免费。

> "如果这项技术是专有的，完全在我的控制之下，它可能不会流行起来。"

### 第一个网站
史上第一个网站（http://info.cern.ch）于1991年8月6日上线。它解释了什么是万维网。你今天还可以访问它！

### 遗产
因为万维网是免费的，它爆发式增长：从1991年的1个网站到今天的超过 **19亿个网站**。它创造了Google、亚马逊、YouTube、维基百科、社交媒体——整个数字经济。

Tim Berners-Lee被女王封为爵士，还获得了图灵奖。但他依然谦逊，继续为自由开放的互联网而奋斗。`,
    funFacts: [
      "Berners-Lee's web browser was also a web EDITOR — he envisioned the web as a two-way medium where everyone creates content, not just reads it.",
      "He is estimated to have passed up becoming a trillionaire by giving the web away.",
    ],
    funFactsZh: [
      "Berners-Lee的浏览器同时也是网页编辑器——他设想的万维网是一个双向媒介，每个人都能创建内容，而不只是阅读。",
      "据估计，他因为免费赠送万维网而放弃了成为万亿富翁的机会。",
    ],
  },
  {
    id: "hedy-lamarr",
    title: "Hedy Lamarr: Hollywood's Secret Inventor",
    titleZh: "Hedy Lamarr：好莱坞的秘密发明家",
    hook: "A 1940s movie star co-invented the technology behind WiFi and Bluetooth.",
    hookZh: "一位1940年代的电影明星参与发明了WiFi和蓝牙的核心技术。",
    category: "people",
    year: 1942,
    readMinutes: 3,
    tags: ["wireless", "women-in-tech", "invention"],
    emoji: "📡",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg",
    imageCaption: "Hedy Lamarr, 1944",
    content: `## The Most Beautiful Mind in Hollywood

**Hedy Lamarr** (1914–2000) was one of the biggest movie stars of the 1940s, called "the most beautiful woman in the world." But her real genius was in engineering.

### Frequency Hopping
During WWII, Lamarr and composer **George Antheil** invented **frequency-hopping spread spectrum** — a way to make radio-guided torpedoes unjammable by rapidly switching frequencies.

The Navy didn't use their patent during the war (they thought it was too complicated). But decades later, the same principle became the foundation of:
- 📶 **WiFi**
- 📱 **Bluetooth**
- 📞 **CDMA** (cell phone technology)

### The Tragedy
Lamarr received almost no recognition for her invention during her lifetime. It wasn't until the 1990s that people realized the actress and the inventor were the same person.

In 2014, she was posthumously inducted into the **National Inventors Hall of Fame**.

> "Any girl can be glamorous. All you have to do is stand still and look stupid. But I wasn't willing to do that."

### The Lesson
Never assume someone can only be one thing. A movie star can be an inventor. A kid who loves games can become a great programmer. You are more than any single label.`,
    contentZh: `## 好莱坞最美的头脑

**Hedy Lamarr**（1914–2000）是1940年代最大牌的电影明星之一，被称为"世界上最美的女人"。但她真正的天才在于工程学。

### 跳频技术
二战期间，Lamarr和作曲家 **George Antheil** 发明了 **跳频扩频通信**（frequency-hopping spread spectrum）——一种通过快速切换频率使无线电制导鱼雷无法被干扰的方法。

海军在战争中没有使用他们的专利（觉得太复杂了）。但几十年后，同样的原理成为了以下技术的基础：
- 📶 **WiFi**
- 📱 **蓝牙**（Bluetooth）
- 📞 **CDMA**（手机通信技术）

### 遗憾
Lamarr在有生之年几乎没有因为她的发明获得任何认可。直到1990年代，人们才意识到那位女演员和那位发明家是同一个人。

2014年，她被追授进入了 **美国国家发明家名人堂**。

> "任何女孩都能光彩照人。你只需要站在那里装傻就行。但我不愿意那样做。"

### 启示
永远不要假设一个人只能做一件事。电影明星可以是发明家。爱打游戏的孩子可以成为出色的程序员。你不该被任何单一标签定义。`,
    funFacts: [
      "Lamarr also designed an improved traffic light and a tablet that dissolved in water to create a carbonated drink (an early 'instant soda').",
      "November 9 (her birthday) is 'Inventors Day' in German-speaking countries.",
    ],
    funFactsZh: [
      "Lamarr还设计了改进版的交通灯和一种溶于水就能产生碳酸饮料的药片（早期的'速溶汽水'）。",
      "11月9日（她的生日）是德语国家的'发明家日'。",
    ],
  },
  {
    id: "wozniak",
    title: "Steve Wozniak: The Garage Genius",
    titleZh: "Steve Wozniak：车库里的天才",
    hook: "He single-handedly built the Apple I — then gave the designs away to friends.",
    hookZh: "他独自一人造出了Apple I——然后把设计图免费送给了朋友们。",
    category: "people",
    year: 1976,
    readMinutes: 3,
    tags: ["apple", "hardware", "hacker"],
    emoji: "🍎",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Steve_Wozniak.jpg",
    imageCaption: "Steve Wozniak",
    content: `## The Other Steve

Everyone knows Steve Jobs. But it was **Steve Wozniak** who actually BUILT the computers that started Apple.

### The Apple I
In 1976, Woz designed and hand-built the **Apple I** — a complete computer on a single circuit board. He did it alone, in his spare time, while working at HP.

Jobs saw the business potential and convinced Woz to sell them. They founded Apple Computer in Jobs' garage, with a starting price of $666.66 (Woz liked repeating digits).

### The Apple II
The **Apple II** (1977) was Woz's masterpiece. It was one of the first successful mass-produced personal computers and made Apple a real company. Woz designed almost everything: the hardware, the disk drive, even the BASIC interpreter.

### Woz vs Jobs
While Jobs was the business visionary, Woz was the pure engineer who loved building things. He once said:

> "Steve Jobs didn't know technology. He knew how to pick people and motivate them and sell things. I was the technology person."

After leaving Apple, Woz became a beloved teacher and philanthropist, often visiting schools to inspire kids to learn engineering.`,
    contentZh: `## 另一个Steve

每个人都知道Steve Jobs。但真正造出苹果公司第一批电脑的人是 **Steve Wozniak**。

### Apple I
1976年，Woz设计并亲手制造了 **Apple I**——一台完整的单板计算机。他是独自一人在业余时间完成的，当时还在惠普上班。

Jobs看到了商业潜力，说服Woz一起卖电脑。他们在Jobs的车库里成立了苹果电脑公司，起售价666.66美元（Woz喜欢重复数字）。

### Apple II
**Apple II**（1977）是Woz的杰作。它是最早成功量产的个人电脑之一，让苹果成为了一家真正的公司。几乎所有东西都是Woz设计的：硬件、磁盘驱动器，甚至BASIC解释器。

### Woz vs Jobs
Jobs是商业远见家，Woz则是热爱造东西的纯粹工程师。他曾说：

> "Steve Jobs不懂技术。他懂得挑人、激励人和卖东西。我才是搞技术的人。"

离开苹果后，Woz成了一位备受喜爱的教师和慈善家，经常到学校激励孩子们学工程。`,
    funFacts: [
      "Woz used to build 'blue boxes' that could make free long-distance phone calls. He and Jobs sold them to college students!",
      "Woz holds Tetris high scores on the original Game Boy. When Nintendo Power magazine wouldn't print his scores anymore, he submitted them under 'Evets Kainzow' (his name backwards).",
    ],
    funFactsZh: [
      "Woz曾经制造'蓝盒子'——可以免费打长途电话的设备。他和Jobs把它们卖给了大学生！",
      "Woz保持着原版Game Boy上的俄罗斯方块最高分记录。当《Nintendo Power》杂志不再刊登他的分数时，他用'Evets Kainzow'（名字倒写）继续提交。",
    ],
  },

  // ============================================================
  // 🔧 HARDWARE — 硬件革命
  // ============================================================
  {
    id: "vacuum-tube-to-transistor",
    title: "From Vacuum Tubes to Transistors",
    titleZh: "从真空管到晶体管",
    hook: "One tiny invention shrank computers from room-sized to pocket-sized.",
    hookZh: "一个小发明把计算机从房间大小缩小到口袋大小。",
    category: "hardware",
    year: 1947,
    readMinutes: 4,
    tags: ["transistor", "miniaturization"],
    emoji: "💡",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Elektronenroehren-auswahl.jpg",
    imageCaption: "Various vacuum tubes",
    content: `## The Invention That Changed Everything

Early computers used **vacuum tubes** — glass bulbs the size of your thumb that could switch electric signals on and off. But they were:
- 🔥 Hot (they literally glowed)
- ⚡ Power-hungry
- 💔 Fragile (burned out constantly)
- 📦 BIG

In 1947, at **Bell Labs** in New Jersey, three physicists — **William Shockley, John Bardeen, and Walter Brattain** — invented the **transistor**: a tiny semiconductor device that did the same job but was smaller, cooler, faster, and much more reliable.

### The Impact
| | Vacuum Tube | Transistor |
|---|---|---|
| Size | Thumb-sized | Microscopic |
| Power | High | Low |
| Heat | Very hot | Cool |
| Lifespan | ~1,000 hours | Decades |
| Speed | Slow | Fast |

### From There to Here
- 1947: First transistor (one per device)
- 1958: Integrated circuit (multiple transistors on one chip)
- 1971: Intel 4004 — 2,300 transistors
- 2024: Apple M4 — 28 BILLION transistors

That's a 12-million-fold increase in 53 years!`,
    contentZh: `## 改变一切的发明

早期计算机使用 **真空管**——拇指大小的玻璃灯泡，能开关电信号。但它们：
- 🔥 热（真的会发光）
- ⚡ 耗电
- 💔 脆弱（经常烧坏）
- 📦 巨大

1947年，在新泽西州的 **贝尔实验室**（Bell Labs），三位物理学家——**William Shockley、John Bardeen和Walter Brattain**——发明了 **晶体管**（transistor）：一种微小的半导体器件，能做同样的工作，但更小、更凉、更快、更可靠。

### 影响
| | 真空管 | 晶体管 |
|---|---|---|
| 大小 | 拇指大小 | 微观 |
| 功耗 | 高 | 低 |
| 发热 | 非常热 | 凉爽 |
| 寿命 | ~1,000小时 | 几十年 |
| 速度 | 慢 | 快 |

### 从那时到现在
- 1947年：第一个晶体管（每个设备一个）
- 1958年：集成电路（一个芯片上多个晶体管）
- 1971年：Intel 4004——2,300个晶体管
- 2024年：Apple M4——280亿个晶体管

53年里增长了1200万倍！`,
    funFacts: [
      "Bardeen, Brattain, and Shockley won the 1956 Nobel Prize in Physics. Bardeen later won ANOTHER Nobel Prize (the only person to win two Nobel Prizes in Physics)!",
      "The first transistor was made of gold contacts on a germanium crystal. It cost about the same as a small car.",
    ],
    funFactsZh: [
      "Bardeen、Brattain和Shockley获得了1956年诺贝尔物理学奖。Bardeen后来又获得了一个诺贝尔奖（唯一一个两次获得诺贝尔物理学奖的人）！",
      "第一个晶体管是用锗晶体上的金触点做的。造价差不多相当于一辆小汽车。",
    ],
  },
  {
    id: "bardeen-uiuc",
    title: "John Bardeen: UIUC's Double Nobel Laureate",
    titleZh: "John Bardeen：UIUC的双诺贝尔奖得主",
    hook: "The only person to win two Nobel Prizes in Physics — and the most humble genius you've never heard of.",
    hookZh: "唯一一位两次获得诺贝尔物理学奖的人——也是你从未听说过的最谦虚的天才。",
    category: "people",
    year: 1956,
    yearLabel: "1947–1972",
    readMinutes: 4,
    tags: ["bardeen", "uiuc", "transistor", "nobel", "superconductivity"],
    emoji: "🏅",
    content: `## The Quiet Genius Who Changed the World — Twice

Ask most people to name the greatest physicist of the 20th century, and they'll say Einstein. But **John Bardeen** (1908–1991) did something Einstein never did: he won the **Nobel Prize in Physics twice**.

### Nobel Prize #1: The Transistor (1956)

At **Bell Labs** in 1947, Bardeen, **Walter Brattain**, and **William Shockley** invented the **transistor** — the tiny switch that replaced vacuum tubes and made modern electronics possible. Every chip in every phone, computer, and car today is built from billions of transistors.

The transistor is arguably the most important invention of the 20th century. And Bardeen was its theoretical mastermind.

### Moving to UIUC

In 1951, Bardeen left Bell Labs (partly due to conflicts with the difficult Shockley) and joined the **University of Illinois at Urbana-Champaign** as a professor of physics and electrical engineering.

### Nobel Prize #2: Superconductivity (1972)

At UIUC, Bardeen tackled one of physics' biggest mysteries: **superconductivity** — why some materials lose all electrical resistance at very low temperatures. With **Leon Cooper** and **Robert Schrieffer**, he developed **BCS theory** (named after their initials), which finally explained it.

This earned his second Nobel in 1972, making him the only person in history with two Nobel Prizes in Physics.

### The King of Sweden Anecdote

When Bardeen won his first Nobel in 1956, the **King of Sweden** scolded him at the ceremony for only bringing one of his three children. Bardeen replied: "Next time, I'll bring them all."

And he did. When he won his second Nobel in 1972, all three children were there. The King reportedly smiled and said, "I see you kept your promise."

### The Humble Genius

Despite being arguably the most accomplished physicist of his generation, Bardeen was famously modest:
- He drove a beat-up car and lived in a simple house
- His neighbors thought he was a retired accountant
- He played golf every week and was terrible at it
- Students often didn't realize they were being taught by a double Nobel laureate
- He once arrived late to a lecture because he stopped to fix a student's flat tire

### Legacy at UIUC

Bardeen spent 40 years at UIUC. The **Bardeen Quad** and multiple buildings honor his name. His legacy isn't just in his discoveries — it's in the generations of students he mentored who went on to shape physics and engineering.`,
    contentZh: `## 改变了世界两次的低调天才

问大多数人20世纪最伟大的物理学家是谁，他们会说爱因斯坦。但 **John Bardeen**（1908-1991）做到了爱因斯坦没做到的事：他**两次获得诺贝尔物理学奖**。

### 第一个诺贝尔奖：晶体管（1956年）

1947年在**贝尔实验室**，Bardeen、**Walter Brattain** 和 **William Shockley** 发明了**晶体管**——取代真空管、让现代电子技术成为可能的微小开关。今天每部手机、电脑和汽车中的每个芯片都由数十亿个晶体管构成。

晶体管可以说是20世纪最重要的发明。而Bardeen是其理论核心。

### 来到UIUC

1951年，Bardeen离开贝尔实验室（部分原因是与难相处的Shockley产生矛盾），加入**伊利诺伊大学厄巴纳-香槟分校（UIUC）**，担任物理和电气工程教授。

### 第二个诺贝尔奖：超导性（1972年）

在UIUC，Bardeen攻克了物理学最大的谜团之一：**超导性**——为什么某些材料在极低温度下完全失去电阻。他与 **Leon Cooper** 和 **Robert Schrieffer** 一起发展了**BCS理论**（以三人姓氏首字母命名），终于解释了这一现象。

这为他赢得了1972年的第二个诺贝尔奖，使他成为历史上唯一一位两次获得诺贝尔物理学奖的人。

### 瑞典国王的故事

Bardeen在1956年获得第一个诺贝尔奖时，**瑞典国王**在颁奖典礼上批评他只带了三个孩子中的一个。Bardeen回答说："下次，我会把他们都带来。"

他真的做到了。1972年获得第二个诺贝尔奖时，三个孩子都在场。据说国王微笑着说："我看你信守了承诺。"

### 谦虚的天才

尽管可以说是他那一代最有成就的物理学家，Bardeen以谦虚著称：
- 他开一辆破旧的车，住在简朴的房子里
- 邻居们以为他是个退休的会计师
- 他每周打高尔夫，而且打得很烂
- 学生们常常不知道教他们的是一位双诺贝尔奖得主
- 他曾经因为停下来帮一个学生修瘪了的轮胎而迟到上课

### 在UIUC的遗产

Bardeen在UIUC度过了40年。**Bardeen Quad** 和多栋建筑以他的名字命名。他的遗产不仅在于他的发现——更在于他培养的一代又一代学生，这些人后来塑造了物理学和工程学。`,
    funFacts: [
      "Bardeen was so unassuming that when he told people he'd won the Nobel Prize, they often didn't believe him. He just didn't look or act like a 'famous scientist.'",
      "Bardeen's theoretical work on the transistor was so important that his Bell Labs colleague Walter Brattain once said: 'Bardeen is the brains. Shockley didn't contribute to the discovery — but he sure took credit.'",
    ],
    funFactsZh: [
      "Bardeen太不起眼了，以至于当他告诉别人他获得了诺贝尔奖时，人们常常不相信。他看起来和表现得都不像一个'著名科学家'。",
      "Bardeen在晶体管上的理论工作非常重要，他的贝尔实验室同事Walter Brattain曾说：'Bardeen是大脑。Shockley没有对这个发现做出贡献——但他确实抢了功劳。'",
    ],
  },
  {
    id: "illiac-uiuc",
    title: "ILLIAC: UIUC's Supercomputer Legacy",
    titleZh: "ILLIAC：UIUC的超算传奇",
    hook: "One university built a dynasty of supercomputers — AND invented the web browser.",
    hookZh: "一所大学建造了一个超级计算机王朝——还发明了网页浏览器。",
    category: "hardware",
    year: 1952,
    yearLabel: "1952–1995",
    readMinutes: 4,
    tags: ["uiuc", "illiac", "supercomputer", "plato", "mosaic", "ncsa"],
    emoji: "🖥️",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Donald_Betsy_Gillies_Illiac_I.jpg",
    imageCaption: "Betsy and Donald Gillies with the ILLIAC I at UIUC, circa 1957",
    content: `## The Machines That Shaped Computing History

While most people know Stanford and MIT for their computing contributions, the **University of Illinois at Urbana-Champaign (UIUC)** quietly built some of the most important computers in history — and launched the internet revolution along the way.

### ILLIAC I (1952): The University Pioneer

**ILLIAC I** (Illinois Automatic Computer) was one of the first computers built and owned by a university. Designed by **Ralph Meagher** and **Abraham Taub**, based on the von Neumann architecture, it was used for:
- Weather prediction calculations
- Nuclear physics simulations
- And most charmingly — the **first computer-composed music!**

In 1957, composer **Lejaren Hiller** used ILLIAC I to compose the **"Illiac Suite"** — a string quartet written entirely by algorithmic rules. It was performed live and became a landmark in computational creativity.

### ILLIAC II (1962): Fastest in the World

When completed, ILLIAC II was the **fastest computer on Earth**. It introduced innovations in:
- Pipelining (doing multiple things at once)
- Floating-point arithmetic
- Advanced transistor-based circuits

### ILLIAC III (1966): Learning to See

ILLIAC III was a specialized machine for **pattern recognition and image processing** — essentially an ancestor of today's computer vision. It could scan and analyze images, decades before AI learned to "see."

### ILLIAC IV (1975): The First Massively Parallel Computer

ILLIAC IV was revolutionary: **64 processors working simultaneously** — the first large-scale parallel computer. Originally designed for UIUC, it was so advanced (and expensive — $31 million, about $170 million today) that it was moved to NASA's Ames Research Center. The NSA also used it for code-breaking.

It was controversial — Vietnam War-era protests targeted it because of its military funding. But its architecture influenced every supercomputer that followed.

### PLATO (1960s): The Internet Before the Internet

UIUC's **PLATO** (Programmed Logic for Automatic Teaching Operations) was the first large-scale online educational system. Built on ILLIAC hardware, PLATO invented:
- **Online forums** and message boards
- **Instant messaging** (called "Talkomatic")
- **Multiplayer online games** (including a Star Trek game and a dungeon crawler)
- **Touchscreen interfaces**
- **Emoji-like characters** (30 years before emoji!)

All of this in the 1960s and 70s — decades before the World Wide Web.

### Mosaic & NCSA (1993): Launching the Web

UIUC's **National Center for Supercomputing Applications (NCSA)** hired a student named **Marc Andreessen**. In 1993, he and **Eric Bina** created **Mosaic** — the first web browser with inline images and a user-friendly interface.

Mosaic made the World Wide Web accessible to regular people. Andreessen went on to co-found **Netscape**, igniting the internet boom. Without UIUC, the web as we know it might have taken years longer to arrive.

### The Legacy Continues

From ILLIAC I to Blue Waters to today's AI research, UIUC has been at the forefront of computing for over 70 years. It's a reminder that world-changing technology doesn't always come from Silicon Valley — sometimes it comes from a cornfield in central Illinois.`,
    contentZh: `## 塑造计算历史的机器

虽然大多数人知道斯坦福和MIT对计算的贡献，但**伊利诺伊大学厄巴纳-香槟分校（UIUC）** 悄悄建造了历史上一些最重要的计算机——还顺便引发了互联网革命。

### ILLIAC I（1952年）：大学先驱

**ILLIAC I**（伊利诺伊自动计算机）是最早由大学建造和拥有的计算机之一。由 **Ralph Meagher** 和 **Abraham Taub** 设计，基于冯·诺依曼架构，用于：
- 天气预测计算
- 核物理模拟
- 最有趣的是——**第一首由计算机创作的音乐！**

1957年，作曲家 **Lejaren Hiller** 使用ILLIAC I创作了 **"ILLIAC组曲"** ——一首完全由算法规则编写的弦乐四重奏。它被现场演奏，成为计算创造力的里程碑。

### ILLIAC II（1962年）：世界最快

建成时，ILLIAC II是**地球上最快的计算机**。它引入了创新：
- 流水线（同时做多件事）
- 浮点运算
- 先进的晶体管电路

### ILLIAC III（1966年）：学会看

ILLIAC III是一台专门用于**模式识别和图像处理**的机器——本质上是今天计算机视觉的祖先。它可以扫描和分析图像，比AI学会"看"早了几十年。

### ILLIAC IV（1975年）：第一台大规模并行计算机

ILLIAC IV是革命性的：**64个处理器同时工作**——第一台大规模并行计算机。最初为UIUC设计，它太先进（也太贵了——3100万美元，相当于今天的1.7亿美元），被移到了NASA的艾姆斯研究中心。NSA也用它来破译密码。

它曾引发争议——越战时期的抗议者因其军事资金而抗议它。但它的架构影响了后来的每一台超级计算机。

### PLATO（1960年代）：互联网之前的互联网

UIUC的 **PLATO**（自动教学操作编程逻辑）是第一个大规模在线教育系统。建立在ILLIAC硬件上，PLATO发明了：
- **在线论坛**和留言板
- **即时通讯**（叫"Talkomatic"）
- **多人在线游戏**（包括一个星际迷航游戏和一个地下城探险游戏）
- **触摸屏界面**
- **类似表情包的字符**（比emoji早了30年！）

这一切都在1960-70年代——比万维网早了几十年。

### Mosaic和NCSA（1993年）：启动Web

UIUC的**国家超级计算应用中心（NCSA）** 雇用了一个叫 **Marc Andreessen** 的学生。1993年，他和 **Eric Bina** 创建了 **Mosaic** ——第一个带有内嵌图片和友好界面的网页浏览器。

Mosaic让普通人也能使用万维网。Andreessen后来联合创立了 **Netscape**，点燃了互联网热潮。没有UIUC，我们今天的网络可能要晚很多年才能到来。

### 遗产延续

从ILLIAC I到Blue Waters再到今天的AI研究，UIUC已经在计算前沿活跃了70多年。这提醒我们，改变世界的技术并不总是来自硅谷——有时候它来自伊利诺伊中部的一片玉米地。`,
    funFacts: [
      "The ILLIAC Suite (1957) was the first significant piece of music composed by a computer. It was performed by a real string quartet — and audiences couldn't tell the difference from human-composed music!",
      "PLATO (invented at UIUC in the 1960s) had chat rooms, message boards, multiplayer games, and even emoji-like symbols — all 30 years before the commercial internet. Marc Andreessen, who later built Mosaic at UIUC, grew up using PLATO.",
    ],
    funFactsZh: [
      "ILLIAC组曲（1957年）是第一首由计算机创作的重要音乐作品。它由真正的弦乐四重奏演奏——观众分辨不出它和人类创作的音乐的区别！",
      "PLATO（1960年代在UIUC发明）有聊天室、留言板、多人游戏，甚至类似表情包的符号——全都比商业互联网早了30年。后来在UIUC构建Mosaic的Marc Andreessen就是用PLATO长大的。",
    ],
  },
  {
    id: "integrated-circuit",
    title: "The Chip That Shrank the World",
    titleZh: "缩小世界的芯片",
    hook: "Two inventors, same idea, same year — and a patent war that lasted decades.",
    hookZh: "两个发明家，同一个想法，同一年——以及一场持续数十年的专利战。",
    category: "hardware",
    year: 1958,
    readMinutes: 3,
    tags: ["ic", "chip", "miniaturization"],
    emoji: "🔬",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Kilby_solid_circuit.jpg",
    imageCaption: "Jack Kilby's first integrated circuit, 1958",
    content: `## The Parallel Invention

In 1958, **Jack Kilby** at Texas Instruments and **Robert Noyce** at Fairchild Semiconductor independently invented the **integrated circuit** — multiple transistors on a single chip.

Kilby's was first (July 1958), but Noyce's design (January 1959) was more practical and is closer to what we use today.

### Why It Matters
Before ICs, each transistor, resistor, and capacitor had to be individually wired together. A circuit with 100 components needed hundreds of hand-soldered connections. Expensive, unreliable, and slow to build.

With ICs, you could put everything on ONE tiny chip. More components = more powerful. And they got smaller and cheaper every year.

### The Numbers Game
- 1958: 1 transistor per chip
- 1971: 2,300 (Intel 4004)
- 1989: 1.2 million (Intel 486)
- 2005: 1.7 billion (Xbox 360 GPU)
- 2024: 28 billion (Apple M4)

### Noyce's Legacy
Robert Noyce co-founded **Intel** in 1968 — the company that makes chips for most of the world's computers. He's often called the "Mayor of Silicon Valley."

Kilby won the Nobel Prize in Physics in 2000. Noyce had passed away in 1990 and couldn't share it — the Nobel Prize is not awarded posthumously.`,
    contentZh: `## 平行的发明

1958年，德州仪器的 **Jack Kilby** 和仙童半导体的 **Robert Noyce** 各自独立发明了 **集成电路**（integrated circuit）——在一个芯片上放多个晶体管。

Kilby的更早（1958年7月），但Noyce的设计（1959年1月）更实用，更接近我们今天使用的。

### 为什么重要
在集成电路出现之前，每个晶体管、电阻器和电容器都必须单独用线连接。一个有100个元件的电路需要数百个手工焊接。昂贵、不可靠、制造缓慢。

有了集成电路，你可以把所有东西放在一块小芯片上。元件越多=性能越强。而且每年都在变得更小、更便宜。

### 数字游戏
- 1958年：每个芯片1个晶体管
- 1971年：2,300个（Intel 4004）
- 1989年：120万个（Intel 486）
- 2005年：17亿个（Xbox 360 GPU）
- 2024年：280亿个（Apple M4）

### Noyce的遗产
Robert Noyce在1968年联合创办了 **Intel**——为全球大多数计算机制造芯片的公司。他常被称为"硅谷的市长"。

Kilby在2000年获得了诺贝尔物理学奖。Noyce已于1990年去世，无法同享此荣——诺贝尔奖不追授已故之人。`,
    funFacts: [
      "Jack Kilby's first IC was built on a piece of germanium the size of a paper clip.",
      "Robert Noyce's nickname was 'the Mayor of Silicon Valley.' He was known for wearing khakis and open-collar shirts when every other executive wore suits.",
    ],
    funFactsZh: [
      "Jack Kilby的第一块集成电路是在一块回形针大小的锗片上制造的。",
      "Robert Noyce的外号是'硅谷市长'。在其他所有高管都穿西装的时候，他以穿卡其裤和开领衬衫闻名。",
    ],
  },
  {
    id: "moores-law",
    title: "Moore's Law: The 50-Year Prophecy",
    titleZh: "摩尔定律：50年的预言",
    hook: "The number of transistors on a chip doubles every two years — and it actually held true for 50 years.",
    hookZh: "芯片上的晶体管数量每两年翻一倍——而且这个预言真的准了50年。",
    category: "hardware",
    year: 1965,
    readMinutes: 3,
    tags: ["moore", "exponential", "prediction"],
    emoji: "📈",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Moore%27s_Law_Transistor_Count_1970-2020.png",
    imageCaption: "Moore's Law: transistor count over time",
    content: `## The Most Famous Prediction in Tech

In 1965, **Gordon Moore** (co-founder of Intel) observed that the number of transistors on a chip was **doubling roughly every year**. He later revised it to every two years.

This became **Moore's Law** — not a law of physics, but an observation about engineering progress that proved remarkably accurate for FIVE DECADES.

### What Doubling Means
Doubling sounds small, but exponential growth is mind-blowing:

\`\`\`python
transistors = 1
for year in range(0, 60, 2):  # 1958 to 2018
    print(f"Year {1958+year}: {transistors:,} transistors")
    transistors *= 2
\`\`\`

After 30 doublings: **1 billion**. After 40: **1 trillion**.

### Is Moore's Law Dead?
We're approaching physical limits — transistors are now just a few ATOMS wide. You can't make something smaller than an atom!

But new approaches are emerging:
- 3D chip stacking
- New materials (graphene, carbon nanotubes)
- Quantum computing
- AI-optimized chip design

Moore's Law as stated may be slowing, but the spirit of exponential progress continues.`,
    contentZh: `## 科技界最著名的预言

1965年，Intel联合创始人 **戈登·摩尔**（Gordon Moore）观察到芯片上的晶体管数量 **大约每年翻一番**。他后来修正为每两年。

这就是 **摩尔定律**（Moore's Law）——不是物理定律，而是一个关于工程进步的观察，竟然准确了整整五十年。

### 翻倍意味着什么
翻倍听起来不多，但指数增长是非常惊人的：

\`\`\`python
transistors = 1
for year in range(0, 60, 2):  # 1958 to 2018
    print(f"Year {1958+year}: {transistors:,} transistors")
    transistors *= 2
\`\`\`

翻30次：**10亿**。翻40次：**1万亿**。

### 摩尔定律死了吗？
我们正在接近物理极限——晶体管现在只有几个原子那么宽。你没法把东西做得比原子还小！

但新方法正在出现：
- 3D芯片堆叠
- 新材料（石墨烯、碳纳米管）
- 量子计算
- AI优化的芯片设计

摩尔定律本身可能在放缓，但指数进步的精神仍在继续。`,
    funFacts: [
      "If cars had improved at the same rate as chips, a Rolls Royce today would cost $1, get 1 million miles per gallon, and go faster than the speed of light.",
      "Gordon Moore's original paper was written for Electronics Magazine's 35th anniversary issue. The editor asked him to predict the future of chips.",
    ],
    funFactsZh: [
      "如果汽车以和芯片同样的速度进步，今天的劳斯莱斯只要1美元，百万英里只需一加仑油，而且比光速还快。",
      "戈登·摩尔的原始论文是为《Electronics》杂志35周年纪念刊写的。编辑请他预测芯片的未来。",
    ],
  },
  {
    id: "first-hard-disk",
    title: "The First Hard Disk: One Ton for 5 MB",
    titleZh: "第一块硬盘：一吨重存5MB",
    hook: "IBM's first hard drive weighed a ton and stored less than a single photo.",
    hookZh: "IBM的第一个硬盘重一吨，存储量还不到一张照片。",
    category: "hardware",
    year: 1956,
    readMinutes: 3,
    tags: ["storage", "ibm", "comparison"],
    emoji: "💾",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/IBM_350_RAMAC.jpg",
    imageCaption: "IBM 305 RAMAC hard disk, 1956",
    content: `## Storage: Then and Now

In 1956, IBM shipped the **305 RAMAC** — the first computer with a hard disk drive.

### The Specs
- **Capacity:** 5 MB (about one MP3 song)
- **Weight:** 1 ton (1,000 kg!)
- **Size:** Two refrigerators side by side
- **Cost:** $10,000/month rental ($110,000/month in today's dollars)
- **Disks:** 50 spinning platters, each 24 inches wide

### The Evolution
| Year | Device | Capacity | Size |
|------|--------|----------|------|
| 1956 | IBM RAMAC | 5 MB | 2 refrigerators |
| 1980 | 5.25" HDD | 5 MB | Shoebox |
| 1998 | 3.5" HDD | 10 GB | Deck of cards |
| 2007 | Flash drive | 32 GB | Thumb |
| 2024 | microSD | 1.5 TB | Fingernail |

That's a **300-million-fold** increase in storage density, while shrinking from refrigerator to fingernail!

### The Price Drop
- 1956: $10,000 per MB per month
- 2024: $0.000015 per MB

If gasoline had dropped in price the same way, a gallon would cost 1/100,000th of a cent.`,
    contentZh: `## 存储：过去和现在

1956年，IBM推出了 **305 RAMAC**——第一台带硬盘驱动器的计算机。

### 参数
- **容量：** 5 MB（大约一首MP3歌曲）
- **重量：** 1吨（1,000公斤！）
- **大小：** 两台冰箱并排
- **费用：** 每月租金10,000美元（相当于今天的110,000美元/月）
- **磁盘：** 50个旋转盘片，每个24英寸宽

### 进化史
| 年份 | 设备 | 容量 | 大小 |
|------|--------|----------|------|
| 1956 | IBM RAMAC | 5 MB | 2台冰箱 |
| 1980 | 5.25" 硬盘 | 5 MB | 鞋盒 |
| 1998 | 3.5" 硬盘 | 10 GB | 一副扑克牌 |
| 2007 | U盘 | 32 GB | 大拇指 |
| 2024 | microSD | 1.5 TB | 指甲盖 |

存储密度增长了 **3亿倍**，同时从冰箱缩小到了指甲盖！

### 价格暴跌
- 1956年：每MB每月10,000美元
- 2024年：每MB 0.000015美元

如果汽油也这样降价，一加仑只要十万分之一美分。`,
    funFacts: [
      "The IBM RAMAC had to be transported by forklift and a special cargo plane.",
      "A 1TB microSD card today stores 200,000 times more data than the RAMAC — in a chip smaller than your thumbnail.",
    ],
    funFactsZh: [
      "IBM RAMAC必须用叉车和专用货运飞机来运输。",
      "今天一张1TB的microSD卡存储的数据是RAMAC的20万倍——而芯片比你的大拇指指甲还小。",
    ],
  },
  {
    id: "gpu-rise",
    title: "GPUs: From Gaming to AI",
    titleZh: "GPU的崛起：从游戏到AI",
    hook: "Graphics cards designed for video games accidentally became the engine of the AI revolution.",
    hookZh: "为电子游戏设计的显卡意外成为了AI革命的引擎。",
    category: "hardware",
    year: 2012,
    readMinutes: 4,
    tags: ["gpu", "nvidia", "ai", "gaming"],
    emoji: "🎮",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    imageCaption: "NVIDIA — from gaming to AI",
    content: `## The Accidental AI Engine

**GPUs** (Graphics Processing Units) were designed for one thing: making video games look amazing. They're really good at doing millions of simple math operations simultaneously (parallel processing) — perfect for rendering 3D graphics.

In 2012, researchers discovered that GPUs were ALSO perfect for training **neural networks**, which need to do millions of matrix multiplications.

### The AlexNet Moment
In 2012, **Alex Krizhevsky** used two NVIDIA GPUs to train **AlexNet**, a deep neural network that crushed the ImageNet competition. This was the spark that ignited the deep learning revolution.

### NVIDIA's Transformation
NVIDIA went from a gaming company to the world's most valuable company:
- 2012 stock price: ~$3
- 2024 stock price: ~$140 (after splits)
- Market cap: Over $3 TRILLION

CEO **Jensen Huang** saw the AI opportunity early and pivoted hard. He now gives keynotes in his signature leather jacket, treated like a rock star.

### Why GPUs Beat CPUs for AI
\`\`\`
CPU: Like one very smart professor solving problems one at a time
     → Great for complex, sequential tasks

GPU: Like 10,000 students each solving a simple problem simultaneously
     → Perfect for matrix math (the core of AI)
\`\`\`

A modern GPU has over 16,000 cores vs a CPU's 8-24 cores. For AI training, GPUs can be 100x faster.`,
    contentZh: `## 意外的AI引擎

**GPU**（图形处理单元，Graphics Processing Unit）最初是为一件事设计的：让电子游戏画面变得超级棒。它们特别擅长同时做数百万次简单的数学运算（并行处理）——非常适合渲染3D图形。

2012年，研究人员发现GPU也非常适合训练 **神经网络**——因为神经网络需要做数百万次矩阵乘法。

### AlexNet时刻
2012年，**Alex Krizhevsky** 用两块NVIDIA GPU训练了 **AlexNet**——一个深度神经网络，在ImageNet竞赛中碾压了所有对手。这就是点燃深度学习革命的火花。

### NVIDIA的转型
NVIDIA从一家游戏公司变成了全球市值最高的公司：
- 2012年股价：约$3
- 2024年股价：约$140（拆股后）
- 市值：超过3万亿美元

CEO **黄仁勋**（Jensen Huang）很早就看到了AI的机会，果断转型。他现在穿着标志性的皮衣做主题演讲，像摇滚明星一样受追捧。

### 为什么GPU在AI方面吊打CPU
\`\`\`
CPU: 像一位非常聪明的教授，一次解决一个问题
     → 擅长复杂的、顺序执行的任务

GPU: 像10,000个学生同时各解一道简单题
     → 非常适合矩阵数学（AI的核心）
\`\`\`

现代GPU有超过16,000个核心，而CPU只有8-24个。在AI训练方面，GPU可以快100倍。`,
    funFacts: [
      "NVIDIA's name comes from 'invidia' (Latin for 'envy'). They wanted other companies to envy their technology!",
      "Training GPT-4 required an estimated 25,000 NVIDIA A100 GPUs running for months. The electricity bill alone was millions of dollars.",
    ],
    funFactsZh: [
      "NVIDIA的名字来自'invidia'（拉丁语，意为'嫉妒'）。他们希望其他公司嫉妒他们的技术！",
      "训练GPT-4估计需要25,000块NVIDIA A100 GPU运行数月。光电费就要几百万美元。",
    ],
    relatedCourse: "ai-ml",
  },

  // ============================================================
  // 💻 SOFTWARE — 软件革命
  // ============================================================
  {
    id: "punch-cards",
    title: "Punch Card Programming",
    titleZh: "纸带编程",
    hook: "The first programmers wrote code by punching holes in paper cards.",
    hookZh: "最早的程序员是靠在纸牌上打孔来写代码的。",
    category: "software",
    year: 1950,
    yearLabel: "1890s–1970s",
    readMinutes: 4,
    tags: ["programming", "history", "punch-cards"],
    emoji: "🕳️",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Used_Punchcard_%285151286161%29.jpg",
    imageCaption: "A punched card used for programming",
    content: `## Coding Without a Screen

Before keyboards and screens, programming meant **punching holes in paper cards**. Each card represented one line of code. A program might be a stack of hundreds or thousands of cards.

### How It Worked
1. Write your program on paper
2. Give it to a **keypunch operator** who types it onto cards (one card per line)
3. Carry your deck of cards to the computer room
4. Hand it to the **computer operator**
5. Wait **hours or even days** for your output
6. Get a printout back — often saying "ERROR"

If your program had a bug, you'd fix the card (or get a new one punched), and start the whole process over!

### The Nightmare Scenario
Imagine carrying 2,000 cards to the computer room... and dropping them. If they weren't numbered, you'd have to sort them back in order BY HAND. Programmers learned to write sequence numbers on the edges!

### Herman Hollerith
Punch cards were first used for the **1890 U.S. Census** by **Herman Hollerith**. His machine processed census data in 1 year instead of 8. He founded a company that later became **IBM**.

### Legacy
The standard punch card had **80 columns**. That's why early computer screens were 80 characters wide, and why some coding style guides STILL recommend keeping lines under 80 characters!

\`\`\`python
# This line is exactly 80 characters long — the width of a punch card! Cool, right?
\`\`\``,
    contentZh: `## 没有屏幕的编程

在键盘和屏幕出现之前，编程意味着 **在纸卡上打孔**。每张卡代表一行代码。一个程序可能是一摞几百甚至几千张卡片。

### 工作流程
1. 在纸上写程序
2. 交给 **打孔机操作员**，把代码打到卡片上（每行一张卡）
3. 抱着你那叠卡片走到计算机房
4. 交给 **计算机操作员**
5. 等 **几小时甚至几天** 才能拿到输出
6. 拿回一张打印纸——上面经常写着"ERROR"

如果你的程序有bug，你需要修改那张卡片（或者重新打一张），然后从头来过！

### 噩梦场景
想象一下抱着2,000张卡片走向计算机房……然后掉了。如果卡片上没有编号，你就得手动把它们按顺序排回去。程序员们学会了在卡片边缘写上序号！

### Herman Hollerith
打孔卡最早被 **Herman Hollerith** 用于 **1890年美国人口普查**。他的机器用1年而不是8年就处理完了普查数据。他创立的公司后来变成了 **IBM**。

### 遗产
标准打孔卡有 **80列**。这就是为什么早期电脑屏幕是80个字符宽，也是为什么一些编程风格指南至今仍建议每行不超过80个字符！

\`\`\`python
# 这行代码刚好80个字符宽——打孔卡的宽度！很酷对吧？
\`\`\``,
    funFacts: [
      "A single punch card held about 80 bytes of data. Your phone's storage could hold about 8 BILLION punch cards.",
      "Some universities used punch cards well into the 1980s. Your parents might have used them!",
    ],
    funFactsZh: [
      "一张打孔卡只能存大约80字节数据。你手机的存储空间大约能装80亿张打孔卡。",
      "一些大学一直用打孔卡到1980年代。你爸妈可能用过！",
    ],
    relatedCourse: "python",
  },
  {
    id: "open-source",
    title: "The Open Source Revolution",
    titleZh: "开源运动",
    hook: "One man's crusade for free software changed how the world builds technology.",
    hookZh: "一个人对自由软件的执着改变了世界构建技术的方式。",
    category: "software",
    year: 1983,
    readMinutes: 4,
    tags: ["open-source", "gnu", "linux", "freedom"],
    emoji: "🔓",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Richard_Stallman_at_CommonsFest_Athens_2015_2.JPG",
    imageCaption: "Richard Stallman, founder of the Free Software movement",
    content: `## Code Should Be Free

In the early days of computing, software was shared freely. But as companies realized software could make money, they started locking it down.

**Richard Stallman** didn't like this. In 1983, he launched the **GNU Project** and the **Free Software Foundation** with a radical idea: software should be free — not as in "free beer," but as in "free speech."

### The Four Freedoms
1. **Freedom 0:** Run the program for any purpose
2. **Freedom 1:** Study how it works and change it
3. **Freedom 2:** Redistribute copies to help others
4. **Freedom 3:** Distribute your modified versions

### The GPL
Stallman invented the **GPL** (GNU General Public License) — a legal hack that uses copyright law to ENSURE software stays free. If you use GPL code, your code must also be GPL. This is called "copyleft" (a play on "copyright").

### The Impact Today
Open source is now EVERYWHERE:
- **Linux** (96% of servers)
- **Android** (3 billion phones)
- **Firefox, Chrome** (web browsers)
- **Python, JavaScript** (programming languages)
- **TensorFlow, PyTorch** (AI frameworks)
- **Wikipedia** (open knowledge)

Even Microsoft — once open source's biggest enemy — now owns GitHub and contributes more to open source than almost anyone.

Companies like Google, Meta, and Amazon build their empires on open source software.`,
    contentZh: `## 代码应该是自由的

计算机早期，软件是自由共享的。但当公司意识到软件能赚钱后，就开始把它锁起来。

**Richard Stallman** 不喜欢这样。1983年，他发起了 **GNU项目** 和 **自由软件基金会**，带着一个激进的理念：软件应该是自由的——不是"免费啤酒"的"免费"，而是"言论自由"的"自由"。

### 四大自由
1. **自由0：** 出于任何目的运行程序
2. **自由1：** 研究它的工作原理并修改它
3. **自由2：** 重新分发副本来帮助别人
4. **自由3：** 分发你修改后的版本

### GPL
Stallman发明了 **GPL**（GNU通用公共许可证）——一个利用版权法来确保软件保持自由的法律黑客技巧。如果你使用了GPL代码，你的代码也必须是GPL的。这叫做"copyleft"（是对"copyright"的文字游戏）。

### 今天的影响
开源现在无处不在：
- **Linux**（96%的服务器）
- **Android**（30亿部手机）
- **Firefox、Chrome**（网页浏览器）
- **Python、JavaScript**（编程语言）
- **TensorFlow、PyTorch**（AI框架）
- **维基百科**（开放知识）

连微软——曾经开源最大的敌人——现在拥有GitHub，对开源的贡献比几乎任何人都多。

Google、Meta和亚马逊等公司都在开源软件上建立了他们的帝国。`,
    funFacts: [
      "Stallman is famous for his eccentric behavior: he's been known to eat things off his feet during conference talks.",
      "The word 'Linux' technically only refers to the kernel. The full system is 'GNU/Linux' — but almost nobody calls it that (which annoys Stallman).",
    ],
    funFactsZh: [
      "Stallman以古怪行为闻名：据说他在会议演讲时当众啃自己的脚。",
      "'Linux'这个词严格来说只是指内核。完整的系统叫'GNU/Linux'——但几乎没人这么叫（这让Stallman很不高兴）。",
    ],
  },
  {
    id: "git-born",
    title: "Git: Built in 10 Days",
    titleZh: "Git：10天造出来的",
    hook: "Linus Torvalds was angry at a company, so he built the world's most popular version control system in 10 days.",
    hookZh: "Linus Torvalds对一个公司很生气，于是他用10天写了世界上最流行的版本控制系统。",
    category: "software",
    year: 2005,
    readMinutes: 3,
    tags: ["git", "github", "version-control"],
    emoji: "🔀",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    imageCaption: "Git logo",
    content: `## Rage-Coding at Its Finest

In 2005, the Linux kernel team had been using a proprietary tool called BitKeeper for version control. When the company revoked their free license after a dispute, **Linus Torvalds** decided to build his own tool.

He started on **April 3, 2005**. By **April 7** — just 4 days later — Git was self-hosting (tracking its own source code). By April 13, it was fast enough to handle the Linux kernel.

### Why "Git"?
Linus explained: "I'm an egotistical bastard, so I name all my projects after myself. First Linux, now Git." ("Git" is British slang for an annoying person.)

He later also said it stands for:
- **G**lobal **I**nformation **T**racker (when it works)
- "Goddamn **I**diotic **T**ruckload of sh*t" (when it doesn't)

### Git + GitHub = Revolution
In 2008, **GitHub** was built on top of Git, adding a social layer. It became the world's largest code hosting platform:
- 200+ million repositories
- 100+ million developers
- Microsoft bought it for **$7.5 billion** in 2018

### What Git Does
\`\`\`
git add .          # Stage your changes
git commit -m "fixed bug"  # Save a snapshot
git push           # Upload to GitHub
git pull           # Download latest changes
\`\`\`

Every professional developer uses Git daily. Learning it is one of the most valuable skills you can have!`,
    contentZh: `## 怒气编程的巅峰之作

2005年，Linux内核团队一直在使用一个叫BitKeeper的专有工具做版本控制。当这家公司因为纠纷收回了他们的免费许可后，**Linus Torvalds** 决定自己造一个。

他在 **2005年4月3日** 开始。到 **4月7日**——仅仅4天后——Git已经能自我托管了（跟踪自己的源代码）。到4月13日，它已经快到能处理Linux内核了。

### 为什么叫"Git"？
Linus解释说："我是个自大的混蛋，所以用自己来命名所有项目。先是Linux，现在是Git。"（"Git"在英国俚语中是"讨厌的人"的意思。）

他后来还说它代表：
- **G**lobal **I**nformation **T**racker（能用的时候）
- "该死的白痴破烂"（不能用的时候）

### Git + GitHub = 革命
2008年，**GitHub** 建立在Git之上，加了一个社交层。它成为了世界上最大的代码托管平台：
- 2亿+代码仓库
- 1亿+开发者
- 微软在2018年以 **75亿美元** 收购了它

### Git做什么
\`\`\`
git add .          # 暂存你的修改
git commit -m "fixed bug"  # 保存一个快照
git push           # 上传到GitHub
git pull           # 下载最新更改
\`\`\`

每个专业开发者每天都在用Git。学会它是你能拥有的最有价值的技能之一！`,
    funFacts: [
      "The very first Git commit message was: 'Initial revision of \"git\", the information manager from hell'",
      "GitHub's mascot is an 'Octocat' — a cat with octopus tentacles. It was drawn by a designer on the site iStock for $7.",
    ],
    funFactsZh: [
      "Git的第一条提交信息是：'来自地狱的信息管理器\"git\"的初始版本'",
      "GitHub的吉祥物是'Octocat'——一只长着章鱼触手的猫。是一个设计师在iStock网站上花7美元画的。",
    ],
  },

  // ============================================================
  // 🌐 INTERNET — 互联网时代
  // ============================================================
  {
    id: "arpanet",
    title: "ARPANET: The First Network Message",
    titleZh: "ARPANET：第一条网络消息",
    hook: "The first internet message was 'LO' — because the computer crashed before finishing 'LOGIN'.",
    hookZh: "第一条互联网消息是'LO'——因为计算机在打完'LOGIN'之前就崩了。",
    category: "internet",
    year: 1969,
    readMinutes: 3,
    tags: ["arpanet", "internet", "first"],
    emoji: "📡",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Arpanet_logical_map%2C_march_1977.png",
    imageCaption: "ARPANET logical map, March 1977",
    content: `## The Internet's First Word

On **October 29, 1969**, UCLA student programmer **Charley Kline** sent the first message over **ARPANET** (the predecessor to the internet) to Stanford Research Institute.

He tried to type "LOGIN." He typed "L"... "O"... and the system crashed.

The first message ever sent on the internet was "**LO**."

(They fixed the bug and successfully sent "LOGIN" an hour later.)

### What Was ARPANET?
The U.S. Department of Defense wanted a network that could survive a nuclear attack. If one connection was destroyed, data could find another route — **packet switching**.

ARPANET started with just 4 nodes:
1. UCLA
2. Stanford Research Institute
3. UC Santa Barbara
4. University of Utah

By 1981, it had grown to 213 computers. By 1990, ARPANET was decommissioned and replaced by the **internet** we know today.

### The Key Idea: Packet Switching
Instead of sending data as one continuous stream (like a phone call), data is broken into small **packets** that can take different routes and reassemble at the destination. If one route is blocked, packets find another way.

This is why the internet is so resilient — there's no single point of failure.`,
    contentZh: `## 互联网的第一个词

**1969年10月29日**，UCLA的学生程序员 **Charley Kline** 通过 **ARPANET**（互联网的前身）向斯坦福研究所发送了第一条消息。

他想输入"LOGIN"。他打了"L"……"O"……然后系统崩了。

互联网上发送的第一条消息是"**LO**"。

（他们修好了bug，一小时后成功发送了"LOGIN"。）

### ARPANET是什么？
美国国防部想要一个能在核攻击中存活的网络。如果一条连接被摧毁，数据可以找到另一条路——这就是 **分组交换**（packet switching）。

ARPANET最初只有4个节点：
1. UCLA
2. 斯坦福研究所
3. 加州大学圣巴巴拉分校
4. 犹他大学

到1981年，它增长到213台计算机。到1990年，ARPANET退役了，被我们今天所知的 **互联网** 取代。

### 关键思想：分组交换
数据不是作为一个连续的流发送（像打电话那样），而是被分成小的 **数据包**，可以走不同的路线，到达目的地后重新组装。如果一条路被堵了，数据包会找另一条路。

这就是为什么互联网如此坚韧——没有单点故障。`,
    funFacts: [
      "The first ARPANET message was sent from a computer the size of a refrigerator over a connection slower than a 1990s dial-up modem.",
      "Email wasn't planned — it was invented by Ray Tomlinson in 1971 as a fun side project on ARPANET.",
    ],
    funFactsZh: [
      "第一条ARPANET消息是从一台冰箱大小的计算机上发出的，连接速度比1990年代的拨号上网还慢。",
      "电子邮件不在计划之中——它是Ray Tomlinson在1971年作为ARPANET上的一个有趣的副项目发明的。",
    ],
  },
  {
    id: "google-garage",
    title: "Google: The Garage That Indexed the World",
    titleZh: "Google：索引了全世界的车库",
    hook: "Two Stanford PhD students built a search engine in a garage — now it handles 8.5 billion searches per day.",
    hookZh: "两个斯坦福博士生在车库里造了个搜索引擎——现在它每天处理85亿次搜索。",
    category: "internet",
    year: 1998,
    readMinutes: 3,
    tags: ["google", "search", "startup"],
    emoji: "🔍",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Garage_in_Menlo_Park.jpg",
    imageCaption: "The garage where Google was born",
    content: `## The Algorithm That Changed Everything

In 1996, Stanford PhD students **Larry Page** and **Sergey Brin** had an idea: what if you ranked web pages by how many OTHER pages linked to them? Popular pages that many sites reference must be important.

They called this **PageRank** (named after Larry Page, and also because it ranks pages — a perfect pun).

### The Garage
In 1998, they rented a garage in Menlo Park, California for $1,700/month from Susan Wojcicki (who later became YouTube's CEO!). Their first server was built from LEGO blocks to hold 40 hard drives.

### Why "Google"?
It's a misspelling of "googol" — the number 1 followed by 100 zeros (10¹⁰⁰). It represented their mission to organize a seemingly infinite amount of information.

### The Growth
- 1998: 10,000 searches per day
- 2000: 100 million searches per day
- 2024: 8.5 BILLION searches per day

Google now also runs:
- YouTube (2 billion monthly users)
- Android (3 billion devices)
- Chrome (65% of browser market)
- Gmail, Maps, Drive, Cloud, AI...

### The Lesson
\`\`\`python
# PageRank in 5 lines (simplified!)
def pagerank(pages, links, iterations=10):
    rank = {p: 1/len(pages) for p in pages}
    for _ in range(iterations):
        new_rank = {}
        for p in pages:
            new_rank[p] = sum(rank[src]/len(links[src])
                           for src in pages if p in links[src])
        rank = new_rank
    return rank
\`\`\``,
    contentZh: `## 改变一切的算法

1996年，斯坦福博士生 **Larry Page** 和 **Sergey Brin** 有一个想法：如果根据有多少其他页面链接到一个网页来给它排名呢？被很多网站引用的页面一定很重要。

他们把这个算法叫做 **PageRank**（以Larry Page命名，同时也因为它给pages排名——一个完美的双关语）。

### 车库
1998年，他们以每月1,700美元的价格在加州门洛帕克租了Susan Wojcicki的车库（她后来成了YouTube的CEO！）。他们的第一台服务器是用乐高积木搭的架子来放40个硬盘。

### 为什么叫"Google"？
这是"googol"的拼写错误——googol是1后面跟100个零的数字（10¹⁰⁰）。它代表了他们组织看似无限信息的使命。

### 增长
- 1998年：每天10,000次搜索
- 2000年：每天1亿次搜索
- 2024年：每天85亿次搜索

Google现在还运营着：
- YouTube（20亿月活用户）
- Android（30亿台设备）
- Chrome（65%的浏览器市场份额）
- Gmail、地图、Drive、Cloud、AI……

### 代码示例
\`\`\`python
# 5行代码的PageRank（简化版！）
def pagerank(pages, links, iterations=10):
    rank = {p: 1/len(pages) for p in pages}
    for _ in range(iterations):
        new_rank = {}
        for p in pages:
            new_rank[p] = sum(rank[src]/len(links[src])
                           for src in pages if p in links[src])
        rank = new_rank
    return rank
\`\`\``,
    funFacts: [
      "Google's first tweet (in 2009) was 'I'm feeling lucky' written in binary: 01001001 00100111...",
      "The original Google homepage was so simple because Larry and Sergey didn't know HTML well enough to make it fancy!",
    ],
    funFactsZh: [
      "Google的第一条推文（2009年）是用二进制写的'I'm feeling lucky'：01001001 00100111……",
      "Google最初的主页那么简洁，是因为Larry和Sergey的HTML水平不够，做不了花哨的！",
    ],
  },
  {
    id: "bitcoin-mystery",
    title: "Bitcoin: The Mystery of Satoshi",
    titleZh: "比特币：中本聪之谜",
    hook: "Someone invented a trillion-dollar currency — and nobody knows who they are.",
    hookZh: "有人发明了一种价值万亿美元的货币——没人知道他是谁。",
    category: "internet",
    year: 2009,
    readMinutes: 4,
    tags: ["bitcoin", "blockchain", "crypto", "mystery"],
    emoji: "₿",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
    imageCaption: "Bitcoin logo",
    content: `## The Phantom Inventor

On January 3, 2009, someone using the name **Satoshi Nakamoto** launched **Bitcoin** — the first decentralized digital currency. Then, after communicating with developers for a couple of years, Satoshi vanished in 2011.

Nobody knows who Satoshi Nakamoto really is. They could be one person, a group, a man, a woman — nobody knows.

### What Satoshi Built
The genius of Bitcoin is the **blockchain** — a public ledger that records every transaction, verified by thousands of computers worldwide. No bank, no government, no single point of control.

### The Numbers
- Satoshi's Bitcoin wallet contains about 1.1 million Bitcoin
- At peak prices, that's worth over **$70 BILLION**
- This Bitcoin has NEVER been moved or spent

### The Technology: Blockchain
Imagine a notebook where:
1. Everyone has a copy
2. New pages can only be added, never erased
3. Each page references the previous one (chained together)
4. Everyone agrees on what's written (consensus)

That's a blockchain. It's now used far beyond money — for supply chains, voting systems, digital art (NFTs), and more.

### The Controversy
Bitcoin uses enormous amounts of electricity for "mining" — the process of verifying transactions. At its peak, Bitcoin mining used more electricity than some countries!`,
    contentZh: `## 幽灵发明家

2009年1月3日，一个使用 **中本聪**（Satoshi Nakamoto）这个名字的人推出了 **比特币**（Bitcoin）——第一种去中心化的数字货币。然后，在与开发者交流了几年后，中本聪在2011年消失了。

没人知道中本聪到底是谁。可能是一个人，可能是一个团队，可能是男的，可能是女的——没人知道。

### 中本聪建造了什么
比特币的天才之处在于 **区块链**（blockchain）——一个公开的账本，记录每笔交易，由全球数千台计算机验证。没有银行，没有政府，没有单一控制点。

### 数据
- 中本聪的比特币钱包里有大约110万个比特币
- 在最高价时，价值超过 **700亿美元**
- 这些比特币从未被移动或花费过

### 技术：区块链
想象一个笔记本：
1. 每个人都有一份副本
2. 只能添加新页，不能擦除
3. 每一页都引用前一页（链在一起）
4. 每个人都同意上面写的内容（共识）

这就是区块链。它现在的用途远不止货币——供应链、投票系统、数字艺术（NFT）等等。

### 争议
比特币的"挖矿"（验证交易的过程）消耗大量电力。在高峰期，比特币挖矿的用电量超过了一些国家！`,
    funFacts: [
      "The first real Bitcoin transaction was 10,000 BTC for two pizzas in 2010. Those Bitcoins would be worth over $600 million today.",
      "There are dozens of theories about who Satoshi is. Suspects include a Japanese mathematician, an Australian entrepreneur, and even Elon Musk (he denies it).",
    ],
    funFactsZh: [
      "2010年第一笔真正的比特币交易是用10,000个BTC买了两个披萨。那些比特币今天价值超过6亿美元。",
      "关于中本聪是谁有几十种理论。嫌疑人包括一位日本数学家、一位澳大利亚企业家，甚至Elon Musk（他否认了）。",
    ],
  },

  // ============================================================
  // 🤖 AI ERA — AI时代
  // ============================================================
  {
    id: "dartmouth-1956",
    title: "The Birth of AI: Dartmouth 1956",
    titleZh: "AI的诞生：1956年达特茅斯会议",
    hook: "The term 'Artificial Intelligence' was coined at a summer workshop where scientists thought they'd solve it in a few months.",
    hookZh: "'人工智能'这个词诞生于一个暑期研讨会，当时科学家以为几个月就能搞定。",
    category: "ai",
    year: 1956,
    readMinutes: 3,
    tags: ["ai", "history", "foundational"],
    emoji: "🌅",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/John_McCarthy_Stanford.jpg",
    imageCaption: "John McCarthy, who coined 'Artificial Intelligence'",
    content: `## The Summer AI Was Born

In the summer of 1956, a group of scientists gathered at **Dartmouth College** in New Hampshire. Their proposal stated:

> "We propose that a 2-month, 10-man study of artificial intelligence be carried out... An attempt will be made to find how to make machines use language, form abstractions and concepts, solve kinds of problems now reserved for humans."

They thought it would take one summer. It's been nearly 70 years and we're still working on it!

### The Attendees
The workshop was organized by **John McCarthy** (who coined the term "artificial intelligence"), **Marvin Minsky**, **Nathaniel Rochester**, and **Claude Shannon** (the father of information theory).

### Early Optimism
- 1958: Herbert Simon predicted computers would be chess champions within 10 years (it took 39)
- 1967: Marvin Minsky said AI would be "solved" within a generation
- 1970: Life magazine said intelligent machines would exist in 3-8 years

### The Reality Check
AI turned out to be MUCH harder than anyone expected. The field went through two "AI Winters" — periods of reduced funding and interest:
- **First winter** (1974–1980): Governments cut funding after unrealistic promises
- **Second winter** (1987–1993): Expert systems failed to deliver

But the optimists weren't wrong — just early. The breakthroughs came, they just needed better hardware and more data.`,
    contentZh: `## AI诞生的那个夏天

1956年夏天，一群科学家聚集在新罕布什尔州的 **达特茅斯学院**（Dartmouth College）。他们的提案写道：

> "我们提议进行一项为期2个月、10人参与的人工智能研究……将尝试找出如何让机器使用语言、形成抽象概念、解决目前只有人类才能解决的问题。"

他们以为一个夏天就够了。快70年了，我们还在研究！

### 参与者
研讨会由 **John McCarthy**（他创造了"人工智能"这个术语）、**Marvin Minsky**、**Nathaniel Rochester** 和 **Claude Shannon**（信息论之父）组织。

### 早期的乐观
- 1958年：Herbert Simon预测计算机将在10年内成为国际象棋冠军（实际花了39年）
- 1967年：Marvin Minsky说AI将在一代人内被"解决"
- 1970年：《Life》杂志说智能机器将在3-8年内出现

### 现实的打脸
AI比任何人预期的都难得多。这个领域经历了两次"AI寒冬"——资金和兴趣减少的时期：
- **第一次寒冬**（1974–1980）：不切实际的承诺后，政府削减了资金
- **第二次寒冬**（1987–1993）：专家系统未能兑现承诺

但乐观主义者并没有错——只是太早了。突破最终来了，只是需要更好的硬件和更多的数据。`,
    funFacts: [
      "The Dartmouth proposal asked for $13,500 in funding (about $150,000 today). Modern AI companies raise billions.",
      "John McCarthy also invented LISP (1958), one of the oldest programming languages still in use today.",
    ],
    funFactsZh: [
      "达特茅斯提案申请了13,500美元的资金（相当于今天的15万美元）。现代AI公司动辄筹集数十亿。",
      "John McCarthy还发明了LISP（1958），至今仍在使用的最古老的编程语言之一。",
    ],
    relatedCourse: "ai-ml",
  },
  {
    id: "deep-blue",
    title: "Deep Blue vs Kasparov",
    titleZh: "深蓝击败卡斯帕罗夫",
    hook: "In 1997, a machine beat the world's best chess player — and changed how we think about intelligence.",
    hookZh: "1997年，一台机器击败了世界最强棋手——改变了我们对智能的理解。",
    category: "ai",
    year: 1997,
    readMinutes: 4,
    tags: ["chess", "ibm", "milestone"],
    emoji: "♟️",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Deep_Blue.jpg",
    imageCaption: "The Deep Blue computer at the Smithsonian",
    content: `## The Day a Machine Outsmarted a Grandmaster

On May 11, 1997, IBM's **Deep Blue** defeated world chess champion **Garry Kasparov** in a six-game match. It was the first time a computer beat a reigning world champion under standard chess tournament conditions.

### How Deep Blue Worked
Deep Blue wasn't "intelligent" — it was incredibly FAST:
- Evaluated **200 million positions per second**
- Looked 12+ moves ahead
- Used a massive database of grandmaster games
- Custom-designed chips specifically for chess calculations

### The Controversy
After losing Game 2, Kasparov accused IBM of cheating, claiming a human must have intervened. He was especially disturbed by a move in Game 2 that seemed "too human" — creative rather than computational.

IBM denied cheating. Years later, it was revealed that the "creative" move was actually a **bug** — Deep Blue made a random move because it couldn't decide! But that random move happened to be brilliant, and it psychologically destroyed Kasparov.

### The Aftermath
Kasparov demanded a rematch. IBM refused and dismantled Deep Blue. Kasparov has never fully gotten over the experience.

### What It Means
Deep Blue didn't "think" — it calculated. But it showed that brute-force computation could match human intuition in specific domains. This was a preview of the AI revolution to come.`,
    contentZh: `## 机器智胜大师的那一天

1997年5月11日，IBM的 **深蓝**（Deep Blue）在六局比赛中击败了国际象棋世界冠军 **加里·卡斯帕罗夫**（Garry Kasparov）。这是计算机首次在标准锦标赛条件下击败在位世界冠军。

### 深蓝是怎么工作的
深蓝并不"聪明"——它只是极其快：
- 每秒评估 **2亿个棋局**
- 能看到12步以上
- 使用了大量国际特级大师的棋局数据库
- 专门为象棋计算定制设计的芯片

### 争议
在输掉第二局后，卡斯帕罗夫指控IBM作弊，声称一定有人类干预了。他特别被第二局中一步看起来"太像人类"的棋感到不安——那步棋更像是创造性而非计算性的。

IBM否认作弊。多年后才揭晓，那步"创造性"的棋实际上是一个 **bug**——深蓝因为无法做出决定而走了一步随机的棋！但那步随机的棋恰好非常精彩，从心理上摧毁了卡斯帕罗夫。

### 后续
卡斯帕罗夫要求再战一场。IBM拒绝了并拆解了深蓝。卡斯帕罗夫从未完全释怀。

### 意义
深蓝不会"思考"——它只会计算。但它证明了在特定领域，暴力计算可以匹敌人类直觉。这是即将到来的AI革命的预演。`,
    funFacts: [
      "Deep Blue could evaluate more chess positions in 3 minutes than Kasparov could in his entire lifetime.",
      "Today's chess programs on a smartphone are MUCH stronger than Deep Blue was. AI has gotten that much better.",
    ],
    funFactsZh: [
      "深蓝3分钟内评估的棋局数量比卡斯帕罗夫一生能评估的还多。",
      "今天智能手机上的象棋程序比深蓝强得多。AI已经进步了那么多。",
    ],
    relatedCourse: "ai-ml",
  },
  {
    id: "alphago",
    title: "AlphaGo: The Game No One Thought AI Could Win",
    titleZh: "AlphaGo：没人以为AI能赢的游戏",
    hook: "Go has more possible positions than atoms in the universe. AI mastered it anyway.",
    hookZh: "围棋的可能局面比宇宙中的原子还多。AI还是掌握了它。",
    category: "ai",
    year: 2016,
    readMinutes: 4,
    tags: ["deepmind", "go", "neural-network", "milestone"],
    emoji: "⚫",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/FloorGoban.JPG",
    imageCaption: "A Go board — the game AlphaGo mastered",
    content: `## The Game That Was "Impossible" for AI

Chess has about 10⁴⁷ possible positions. **Go** has about 10¹⁷⁰ — more than the number of atoms in the observable universe. Experts said AI wouldn't master Go for at least 100 years.

In March 2016, Google DeepMind's **AlphaGo** beat world champion **Lee Sedol** 4-1.

### Move 37
In Game 2, AlphaGo played **Move 37** — a move so unusual that no human would have played it. Go experts called it "beautiful" and "creative." Lee Sedol left the room for 15 minutes to compose himself.

This wasn't brute force like Deep Blue. AlphaGo used **deep neural networks** trained on millions of human games, plus reinforcement learning where it played against itself millions of times.

### Lee Sedol's Victory
Lee Sedol won Game 4 with his own brilliant move (Move 78). It's called "God's Touch" — a move that exposed a weakness in AlphaGo's neural network. It remains the only game a human has won against AlphaGo.

Lee Sedol retired from professional Go in 2019, saying: "With the debut of AI in Go games, I've realized that I'm not at the top even if I become the number one."

### AlphaGo Zero: Even Better
In 2017, **AlphaGo Zero** learned Go from SCRATCH — no human games, just the rules. It beat the original AlphaGo 100-0. In 3 days of self-play.`,
    contentZh: `## AI"不可能"赢的游戏

国际象棋大约有10⁴⁷种可能的局面。**围棋** 大约有10¹⁷⁰种——比可观测宇宙中的原子数还多。专家们说AI至少100年内无法掌握围棋。

2016年3月，Google DeepMind的 **AlphaGo** 以4比1击败了世界冠军 **李世石**。

### 第37手
在第二局中，AlphaGo下出了 **第37手**——一步如此不寻常的棋，以至于没有任何人类会这样下。围棋专家称之为"美丽"和"富有创造力"。李世石离开房间15分钟来平复心情。

这不像深蓝那样是暴力计算。AlphaGo使用了在数百万盘人类棋局上训练的 **深度神经网络**，加上强化学习——它跟自己对弈了数百万次。

### 李世石的胜利
李世石在第四局以他自己的精彩一手（第78手）取胜。这被称为"神之一手"——一步暴露了AlphaGo神经网络弱点的棋。这仍然是人类唯一一次赢了AlphaGo的比赛。

李世石在2019年退出了职业围棋，他说："随着AI出现在围棋赛场上，我意识到即使我成为第一，我也不是最强的。"

### AlphaGo Zero：更强
2017年，**AlphaGo Zero** 从零开始学习围棋——没有人类棋局，只有规则。它以100比0击败了最初的AlphaGo。只用了3天的自我对弈。`,
    funFacts: [
      "After Move 37, AlphaGo's creators said the AI calculated only a 1-in-10,000 chance that a human would play that move. It played it anyway.",
      "AlphaGo's neural network was trained using 1,920 CPUs and 280 GPUs.",
    ],
    funFactsZh: [
      "第37手之后，AlphaGo的创造者说AI计算出人类下出那步棋的概率只有万分之一。但它还是下了。",
      "AlphaGo的神经网络是用1,920个CPU和280个GPU训练的。",
    ],
    relatedCourse: "ai-ml",
  },
  {
    id: "gpt-revolution",
    title: "GPT: From Predicting Words to Writing Code",
    titleZh: "GPT：从预测文字到编写代码",
    hook: "The AI that learned to write, code, and create — all from predicting the next word.",
    hookZh: "这个AI学会了写作、编程和创造——全都源于预测下一个词。",
    category: "ai",
    year: 2022,
    readMinutes: 4,
    tags: ["gpt", "llm", "chatgpt", "transformer"],
    emoji: "💬",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    imageCaption: "ChatGPT logo",
    content: `## The AI That Surprised Everyone

In November 2022, OpenAI released **ChatGPT**. Within 5 days, it had 1 million users. Within 2 months, 100 million. It was the fastest-growing application in history.

### How It Works (Simply)
At its core, GPT (Generative Pre-trained Transformer) does one thing: **predict the next word**.

Given "The cat sat on the ___", it predicts "mat" (or "couch" or "roof"). Do this billions of times with trillions of words, and something magical emerges: the model learns grammar, facts, reasoning, coding, and even humor.

### The Transformer Architecture
In 2017, Google researchers published "Attention Is All You Need" — introducing the **Transformer** architecture. The key innovation: **self-attention**, which lets the model focus on relevant parts of the input.

\`\`\`python
# Simplified: GPT is basically this, done billions of times
def predict_next_word(text):
    # Look at all previous words
    # Pay "attention" to the most relevant ones
    # Predict the most likely next word
    return most_likely_word
\`\`\`

### The Scale
- GPT-2 (2019): 1.5 billion parameters
- GPT-3 (2020): 175 billion parameters
- GPT-4 (2023): estimated ~1.8 trillion parameters

### What It Can Do
Write essays, poems, code, translations, summaries, math proofs, legal documents, medical diagnoses, jokes, song lyrics, recipes...

### What It Can't Do (Yet)
- True understanding (it predicts patterns, doesn't "think")
- Consistent factual accuracy (it "hallucinates")
- Real-time information (training data has a cutoff)
- Common sense reasoning (sometimes spectacularly wrong)

### The Big Question
Is this intelligence? Or very sophisticated pattern matching? That debate continues...`,
    contentZh: `## 让所有人惊讶的AI

2022年11月，OpenAI发布了 **ChatGPT**。5天内就有了100万用户。2个月内达到1亿。它是历史上增长最快的应用程序。

### 它是怎么工作的（简单版）
GPT（生成式预训练Transformer）的核心只做一件事：**预测下一个词**。

给定"猫坐在___上"，它预测"垫子"（或"沙发"或"屋顶"）。用数万亿个词做数十亿次这样的预测，神奇的事情发生了：模型学会了语法、事实、推理、编程，甚至幽默。

### Transformer架构
2017年，Google研究人员发表了"Attention Is All You Need"——引入了 **Transformer** 架构。关键创新是 **自注意力机制**（self-attention），让模型能聚焦于输入中最相关的部分。

\`\`\`python
# 简化版：GPT基本上就是这个，做几十亿次
def predict_next_word(text):
    # 看所有之前的词
    # 对最相关的词给予"注意力"
    # 预测最可能的下一个词
    return most_likely_word
\`\`\`

### 规模
- GPT-2（2019）：15亿参数
- GPT-3（2020）：1750亿参数
- GPT-4（2023）：估计约1.8万亿参数

### 它能做什么
写文章、诗歌、代码、翻译、摘要、数学证明、法律文件、医疗诊断、笑话、歌词、食谱……

### 它（还）不能做什么
- 真正的理解（它预测模式，不"思考"）
- 一致的事实准确性（它会"幻觉"）
- 实时信息（训练数据有截止日期）
- 常识推理（有时会错得很离谱）

### 大问题
这是智能吗？还是非常复杂的模式匹配？这场辩论还在继续……`,
    funFacts: [
      "The 'T' in GPT stands for 'Transformer.' The original Transformer paper's authors chose the title 'Attention Is All You Need' partly as a Beyoncé reference.",
      "GPT-3's training data included most of the public internet — about 570 GB of text, equivalent to about 1 million books.",
    ],
    funFactsZh: [
      "GPT中的'T'代表'Transformer'。原始Transformer论文的作者选择'Attention Is All You Need'这个标题，部分原因是在致敬Beyoncé。",
      "GPT-3的训练数据包括了公共互联网的大部分——大约570GB的文本，相当于约100万本书。",
    ],
    relatedCourse: "ai-ml",
  },

  // ============================================================
  // 🔮 FUTURE — 未来展望
  // ============================================================
  {
    id: "quantum-computing",
    title: "Quantum Computing: Schrödinger's Bit",
    titleZh: "量子计算：薛定谔的比特",
    hook: "A bit that's 0 AND 1 at the same time — welcome to the quantum world.",
    hookZh: "一个同时是0又是1的比特——欢迎来到量子世界。",
    category: "future",
    year: 2019,
    readMinutes: 4,
    tags: ["quantum", "future", "physics"],
    emoji: "⚛️",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/IBM_Q_System_One.jpg",
    imageCaption: "IBM Q System One quantum computer",
    content: `## Beyond Binary

Regular computers use **bits** — each is either 0 or 1. Quantum computers use **qubits** — which can be 0, 1, or BOTH at the same time (superposition).

### The Cat Analogy
Schrödinger's famous thought experiment: a cat in a box is both alive AND dead until you open the box and look. A qubit is both 0 AND 1 until you measure it.

### Why It Matters
With regular bits, 3 bits can represent ONE of 8 states (000, 001, 010, ..., 111).
With qubits, 3 qubits can represent ALL 8 states SIMULTANEOUSLY.

Add more qubits and the power grows exponentially:
- 10 qubits: 1,024 states at once
- 50 qubits: ~1 quadrillion states at once
- 300 qubits: more states than atoms in the universe

### What Quantum Computers Could Do
- 🔐 Break current encryption (scary!)
- 💊 Simulate molecules for drug discovery
- 🌡️ Optimize climate models
- 🤖 Supercharge AI training

### What They Can't Do
Quantum computers aren't "faster computers." They're DIFFERENT computers. They're only better for specific types of problems. Your regular laptop will still be better for browsing the web, writing documents, and playing games.

### Current State
Google's Sycamore (2019) claimed "quantum supremacy" — solving a problem in 200 seconds that would take a classical supercomputer 10,000 years. IBM disputed this claim, but the race is on.`,
    contentZh: `## 超越二进制

普通计算机使用 **比特**（bit）——每个要么是0，要么是1。量子计算机使用 **量子比特**（qubit）——可以同时是0、1或两者兼有（叠加态）。

### 猫的比喻
薛定谔著名的思想实验：盒子里的猫在你打开盒子看之前，同时是活的又是死的。量子比特在你测量之前，同时是0又是1。

### 为什么重要
普通比特中，3个比特可以表示8种状态中的一种（000、001、010……111）。
量子比特中，3个量子比特可以同时表示全部8种状态。

增加更多量子比特，能力指数级增长：
- 10个量子比特：同时1,024种状态
- 50个量子比特：同时约1千万亿种状态
- 300个量子比特：比宇宙中的原子还多的状态

### 量子计算机能做什么
- 🔐 破解现有加密（吓人！）
- 💊 模拟分子以发现新药
- 🌡️ 优化气候模型
- 🤖 大幅加速AI训练

### 它们不能做什么
量子计算机不是"更快的计算机"。它们是完全不同的计算机。只在特定类型的问题上更强。你的普通笔记本电脑在浏览网页、写文档和玩游戏方面仍然更好。

### 现状
Google的Sycamore（2019）宣称实现了"量子霸权"——在200秒内解决了一个经典超级计算机需要10,000年的问题。IBM对此提出了异议，但竞赛已经开始了。`,
    funFacts: [
      "Quantum computers need to be cooled to near absolute zero (-273°C) — colder than outer space!",
      "A quantum computer's biggest enemy is noise. Even tiny vibrations can destroy quantum states. They're incredibly fragile.",
    ],
    funFactsZh: [
      "量子计算机需要冷却到接近绝对零度（-273°C）——比外太空还冷！",
      "量子计算机最大的敌人是噪声。即使微小的振动也能摧毁量子态。它们极其脆弱。",
    ],
  },
  {
    id: "brain-computer",
    title: "Brain-Computer Interfaces",
    titleZh: "脑机接口",
    hook: "Controlling computers with your thoughts — science fiction becoming science fact.",
    hookZh: "用意念控制电脑——科幻正在变成现实。",
    category: "future",
    year: 2024,
    readMinutes: 3,
    tags: ["bci", "neuralink", "future", "brain"],
    emoji: "🧠",
    content: `## Thinking Is the New Typing

A **Brain-Computer Interface (BCI)** reads electrical signals from your brain and translates them into computer commands. Think about moving a cursor — and it moves.

### Where We Are Now
- **2024:** Neuralink implanted its first chip in a human patient, allowing a paralyzed person to control a computer cursor and play chess with their thoughts
- **BrainGate:** Has let paralyzed patients type at 90 characters per minute using thought alone
- **Non-invasive BCIs:** Headbands that can detect basic brain states (focus, relaxation)

### The Vision
- 🎮 Play games with your mind
- 💬 Communicate without speaking
- 📚 Download knowledge directly (Matrix-style!)
- 🦿 Give paralyzed people full mobility
- 🧠 Enhance human memory and cognition

### The Concerns
- 🔒 Who owns your brain data?
- 🎭 Could someone hack your thoughts?
- ⚖️ Will it create inequality between enhanced and non-enhanced humans?
- 🤔 What does it mean to be human if your brain is connected to the internet?

### The Timeline
Basic BCIs for medical use: **now**
Consumer BCIs for typing/gaming: **5-10 years**
Full brain-internet connection: **decades away, if ever**`,
    contentZh: `## 用思想打字

**脑机接口（BCI，Brain-Computer Interface）** 读取你大脑的电信号，并将其转化为计算机命令。想着移动光标——光标就动了。

### 现在在哪个阶段
- **2024年：** Neuralink在一名人类患者体内植入了第一颗芯片，让一个瘫痪的人能用思想控制电脑光标和下棋
- **BrainGate：** 让瘫痪患者仅用思想就能以每分钟90个字符的速度打字
- **非侵入式BCI：** 能检测基本脑状态（专注、放松）的头带

### 愿景
- 🎮 用意念玩游戏
- 💬 不说话也能交流
- 📚 直接下载知识（《黑客帝国》那种！）
- 🦿 让瘫痪的人恢复完全行动能力
- 🧠 增强人类记忆和认知

### 担忧
- 🔒 谁拥有你的大脑数据？
- 🎭 有人能黑入你的思想吗？
- ⚖️ 会不会在增强和未增强的人之间制造不平等？
- 🤔 如果你的大脑连接到互联网，作为人类意味着什么？

### 时间线
医疗用基础BCI：**现在**
消费级BCI（打字/游戏）：**5-10年**
完全的大脑-互联网连接：**几十年后，如果能实现的话**`,
    funFacts: [
      "The first person with a Neuralink implant chose to play online chess as their first activity. They won!",
      "Your brain generates about 20 watts of electrical power — enough to power a dim light bulb.",
    ],
    funFactsZh: [
      "第一个植入Neuralink芯片的人选择下在线国际象棋作为第一个活动。他赢了！",
      "你的大脑产生大约20瓦的电力——够点亮一个暗灯泡。",
    ],
  },
  {
    id: "ai-science",
    title: "AI + Science: The New Discovery Engine",
    titleZh: "AI + 科学：新的发现引擎",
    hook: "AI solved a 50-year-old biology problem in days — what else can it crack?",
    hookZh: "AI在几天内解决了一个50年的生物学难题——它还能破解什么？",
    category: "future",
    year: 2020,
    readMinutes: 4,
    tags: ["alphafold", "science", "ai", "discovery"],
    emoji: "🔬",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Protein_fold.png",
    imageCaption: "Protein folding — solved by AlphaFold",
    content: `## When AI Becomes a Scientist

In 2020, DeepMind's **AlphaFold** solved one of biology's biggest challenges: **protein folding** — predicting the 3D shape of a protein from its amino acid sequence.

Scientists had been working on this for 50 YEARS. AlphaFold achieved accuracy comparable to experimental methods — in minutes instead of months.

### Why Protein Folding Matters
Proteins are the workhorses of your body. Their 3D shape determines their function. Understanding their shape helps us:
- 💊 Design better drugs
- 🦠 Understand diseases
- 🌱 Create better crops
- 🧬 Engineer new materials

AlphaFold has since predicted structures for nearly ALL known proteins (~200 million). This data is freely available to researchers worldwide.

### AI in Other Sciences
- 🔭 **Astronomy:** AI discovers exoplanets in telescope data
- ⚡ **Physics:** AI helps design fusion reactor configurations
- 🧪 **Chemistry:** AI predicts new materials and chemical reactions
- 🌊 **Climate:** AI improves weather prediction from days to weeks
- 🧬 **Genomics:** AI identifies disease-causing mutations

### The Future of Scientific Discovery
Imagine an AI that can:
1. Read all scientific papers ever written
2. Identify gaps in knowledge
3. Propose experiments
4. Analyze results
5. Write up findings

We're not there yet, but each piece is being built. The next big scientific breakthroughs might come from human-AI teams.`,
    contentZh: `## 当AI成为科学家

2020年，DeepMind的 **AlphaFold** 解决了生物学最大的挑战之一：**蛋白质折叠**（protein folding）——根据蛋白质的氨基酸序列预测其3D形状。

科学家们在这个问题上研究了整整50年。AlphaFold达到了与实验方法相当的精确度——只用几分钟而不是几个月。

### 为什么蛋白质折叠重要
蛋白质是你身体的劳动主力。它们的3D形状决定了功能。理解它们的形状有助于：
- 💊 设计更好的药物
- 🦠 理解疾病
- 🌱 培育更好的作物
- 🧬 设计新材料

AlphaFold已经预测了几乎所有已知蛋白质（约2亿种）的结构。这些数据免费提供给全球研究人员。

### AI在其他科学领域
- 🔭 **天文学：** AI在望远镜数据中发现系外行星
- ⚡ **物理学：** AI帮助设计核聚变反应堆配置
- 🧪 **化学：** AI预测新材料和化学反应
- 🌊 **气候：** AI将天气预测从几天提高到几周
- 🧬 **基因组学：** AI识别致病突变

### 科学发现的未来
想象一个AI能够：
1. 阅读所有已发表的科学论文
2. 找出知识空白
3. 提出实验方案
4. 分析结果
5. 撰写研究发现

我们还没到那一步，但每个部分都在被建造。下一个重大科学突破可能来自人类-AI团队。`,
    funFacts: [
      "AlphaFold's predictions have been accessed by over 1 million researchers in 190 countries.",
      "The 2024 Nobel Prize in Chemistry was awarded to the creators of AlphaFold — the first Nobel for an AI-driven discovery.",
    ],
    funFactsZh: [
      "AlphaFold的预测已被190个国家的超过100万名研究人员访问。",
      "2024年诺贝尔化学奖颁给了AlphaFold的创造者——这是第一个因AI驱动的发现而颁发的诺贝尔奖。",
    ],
    relatedCourse: "ai-ml",
  },
  {
    id: "future-of-programming",
    title: "The Future of Programming",
    titleZh: "编程的未来",
    hook: "Will AI replace programmers? Or make them 100x more powerful?",
    hookZh: "AI会取代程序员吗？还是会让他们强大100倍？",
    category: "future",
    year: 2025,
    readMinutes: 4,
    tags: ["ai-coding", "future", "career"],
    emoji: "🔮",
    content: `## The Question Every Student Asks

"If AI can write code, why should I learn programming?"

Great question. Here's the answer:

### What AI Can Do NOW
- ✅ Write simple functions from descriptions
- ✅ Fix common bugs
- ✅ Translate between programming languages
- ✅ Generate boilerplate code
- ✅ Explain code in plain English

### What AI Still Can't Do Well
- ❌ Design complex systems
- ❌ Understand business requirements
- ❌ Make architectural decisions
- ❌ Debug subtle, system-level issues
- ❌ Create truly novel algorithms
- ❌ Take responsibility for mistakes

### The Real Future
AI won't replace programmers. It will **amplify** them. A programmer with AI tools can do the work of 5-10 programmers without them.

Think of it like calculators and math:
- Calculators didn't make math obsolete
- They made mathematicians MORE powerful
- But you still need to understand math to use them well

Similarly:
- AI coding tools won't make programming obsolete
- They'll make programmers MORE powerful
- But you still need to understand code to use them well

### What to Learn
1. **Fundamentals:** Algorithms, data structures, logic (this doesn't change)
2. **Problem-solving:** Breaking complex problems into small pieces
3. **Communication:** Explaining what you want to AI (prompt engineering)
4. **Verification:** Checking if AI's output is correct
5. **Creativity:** Coming up with ideas that AI can help execute

### The Bottom Line
The best programmers of the future won't be those who memorize syntax. They'll be those who **think clearly, communicate well, and use AI as a superpower**.

You're learning those skills right now. Keep going! 🚀`,
    contentZh: `## 每个学生都会问的问题

"如果AI能写代码，我为什么还要学编程？"

好问题。答案是这样的：

### AI现在能做什么
- ✅ 根据描述写简单函数
- ✅ 修复常见bug
- ✅ 在编程语言之间翻译
- ✅ 生成样板代码
- ✅ 用白话解释代码

### AI还做不好什么
- ❌ 设计复杂系统
- ❌ 理解业务需求
- ❌ 做架构决策
- ❌ 调试微妙的系统级问题
- ❌ 创造真正新颖的算法
- ❌ 为错误承担责任

### 真正的未来
AI不会取代程序员。它会 **放大** 他们的能力。一个有AI工具的程序员能做5-10个没有AI工具的程序员的工作。

想想计算器和数学：
- 计算器没有让数学过时
- 它们让数学家更强大了
- 但你仍然需要懂数学才能用好它们

同样：
- AI编程工具不会让编程过时
- 它们会让程序员更强大
- 但你仍然需要懂代码才能用好它们

### 该学什么
1. **基础：** 算法、数据结构、逻辑（这些不会变）
2. **解决问题：** 把复杂问题拆成小块
3. **沟通：** 向AI解释你想要什么（提示工程）
4. **验证：** 检查AI的输出是否正确
5. **创造力：** 想出AI能帮助执行的点子

### 总结
未来最好的程序员不是那些背语法的人。而是那些 **思维清晰、善于沟通、把AI当超能力用** 的人。

你现在正在学习这些技能。继续加油！🚀`,
    funFacts: [
      "GitHub Copilot (an AI coding assistant) writes about 46% of the code for developers who use it.",
      "The most in-demand skill in tech isn't any specific language — it's the ability to learn new things quickly.",
    ],
    funFactsZh: [
      "GitHub Copilot（一个AI编程助手）为使用它的开发者编写了大约46%的代码。",
      "科技界最需要的技能不是任何特定的语言——而是快速学习新东西的能力。",
    ],
    relatedCourse: "python",
  },
];

// Helper functions
export function getChroniclesByCategory(cat: string): Chronicle[] {
  return CHRONICLES.filter(c => c.category === cat);
}

export function getChronicleById(id: string): Chronicle | undefined {
  return CHRONICLES.find(c => c.id === id);
}

export function getRandomChronicle(): Chronicle {
  return CHRONICLES[Math.floor(Math.random() * CHRONICLES.length)];
}

export function getTimelineYears(): number[] {
  return [...new Set(CHRONICLES.map(c => c.year))].sort();
}