import type { Chronicle } from "./chronicles";

// Additional stories to merge with main CHRONICLES array
export const EXTRA_CHRONICLES: Chronicle[] = [
  // ============ LEGENDS ============
  {
    id: "java-almost-oak",
    title: "Java Was Almost Called Oak",
    titleZh: "Java差点叫Oak",
    hook: "A cup of coffee changed the name of one of the world's most popular languages.",
    hookZh: "一杯咖啡改变了世界上最流行编程语言之一的名字。",
    category: "legends",
    year: 1995,
    readMinutes: 3,
    tags: ["java", "naming", "fun"],
    emoji: "☕",
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    imageCaption: "Java logo — a coffee cup",
    content: `## From Oak to Java

James Gosling at Sun Microsystems created a new programming language in 1991. He named it **Oak**, after an oak tree outside his office window.

But there was a problem — "Oak" was already trademarked by another tech company. They needed a new name, fast.

The team brainstormed in a coffee shop. Names considered included: Silk, DNA, Ruby (later used by another language!), and even WRL (WebRunner Language).

Then someone looked at their coffee cup. **Java** — a slang term for coffee, from the Indonesian island famous for its beans. Short, punchy, memorable. Perfect.

### Java's Logo
The Java logo is a steaming coffee cup ☕ — now you know why!

### Java's Impact
- Runs on 3+ billion devices
- Powers Android apps, enterprise software, and Minecraft!
- Famous motto: "Write Once, Run Anywhere"
- One of the top 3 most-used programming languages for 25+ years

### The Coffee Connection
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World! ☕");
    }
}
\`\`\`
Compare that to Python:
\`\`\`python
print("Hello, World! ☕")
\`\`\`
Java is more verbose, but its strict structure helps catch bugs in large projects.`,
    contentZh: `## 从Oak到Java

**James Gosling**（詹姆斯·高斯林）在1991年于Sun Microsystems创造了一种新编程语言。他用办公室窗外的一棵橡树给它命名——**Oak**。

但有个问题——"Oak"已经被另一家科技公司注册商标了。他们得赶紧想个新名字。

团队在咖啡店里头脑风暴。考虑过的名字包括：Silk、DNA、Ruby（后来被另一种语言用了！），甚至还有WRL（WebRunner Language）。

然后有人看了看自己的咖啡杯。**Java**——咖啡的俚语，来自以咖啡豆闻名的印尼爪哇岛。简短、有力、好记。完美！

### Java的Logo
Java的标志就是一个冒热气的咖啡杯 ☕——现在你知道为什么了吧！

### Java的影响
- 运行在30多亿台设备上
- 驱动着Android应用、企业软件，还有Minecraft！
- 著名口号："Write Once, Run Anywhere"（一次编写，到处运行）
- 25年来一直是最常用的前3名编程语言之一

### 咖啡的联系
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World! ☕");
    }
}
\`\`\`
对比Python：
\`\`\`python
print("Hello, World! ☕")
\`\`\`
Java更啰嗦，但它严格的结构在大项目中能帮你抓住更多bug。`,
    funFacts: [
      "Minecraft is written in Java! That blocky world runs on coffee-named code.",
      "The original Java team consumed so much coffee during development that their coffee budget was reportedly larger than their equipment budget.",
    ],
    funFactsZh: [
      "Minecraft就是用Java写的！那个方块世界跑在以咖啡命名的代码上。",
      "据说Java开发团队喝的咖啡太多了，咖啡预算比设备预算还高。",
    ],
  },
  {
    id: "at-sign",
    title: "The @ Symbol: Medieval to Email",
    titleZh: "@ 符号的前世今生",
    hook: "From medieval monks to your inbox — the @ symbol has a 500-year history.",
    hookZh: "从中世纪修道士到你的收件箱——@符号有500年的历史。",
    category: "legends",
    year: 1971,
    readMinutes: 3,
    tags: ["email", "history", "symbol"],
    emoji: "📧",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/At_char.svg",
    imageCaption: "The @ symbol",
    content: `## The Most Important Symbol on Your Keyboard

The **@** symbol wasn't invented for email. It's been around since at least the 1500s!

### Medieval Origins
Medieval monks used @ as a shorthand for the Latin word "ad" (meaning "at" or "toward") when copying manuscripts. Merchants later used it to mean "at the rate of" — like "10 items @ $5 each."

### The Email Moment
In 1971, **Ray Tomlinson** was building the first network email system on ARPANET. He needed a symbol to separate the user's name from their computer's name. He looked at his keyboard and chose **@** because:
1. It wasn't used in anyone's name
2. It literally meant "at" — user AT computer
3. It was already on every keyboard

So "tomlinson@bbna" became the first email address format.

### @ Around the World
Different countries have adorable names for @:
- 🇩🇪 Germany: "Klammeraffe" (spider monkey)
- 🇮🇹 Italy: "chiocciola" (snail)
- 🇸🇪 Sweden: "snabel-a" (elephant trunk A)
- 🇨🇳 China: "小老鼠" (little mouse)
- 🇰🇷 Korea: "달팽이" (snail)
- 🇷🇺 Russia: "собака" (dog)`,
    contentZh: `## 你键盘上最重要的符号

**@** 符号不是为电子邮件发明的。它至少从1500年代就存在了！

### 中世纪的起源
中世纪的修道士在抄写手稿时，用@作为拉丁语"ad"（意思是"在"或"到"）的缩写。后来商人用它表示"按...价格"——比如"10件商品 @ 5美元一件"。

### Email的诞生时刻
1971年，**Ray Tomlinson**（雷·汤姆林森）在ARPANET上开发第一个网络邮件系统。他需要一个符号来分隔用户名和计算机名。他看了看键盘，选了**@**，因为：
1. 没人的名字里会有这个符号
2. 它字面意思就是"在"——用户 在（AT） 计算机
3. 它已经在每个键盘上了

于是"tomlinson@bbna"成了第一个电子邮件地址格式。

### @ 在世界各地的叫法
不同国家给@起了超可爱的名字：
- 🇩🇪 德国："Klammeraffe"（蜘蛛猴）
- 🇮🇹 意大利："chiocciola"（蜗牛）
- 🇸🇪 瑞典："snabel-a"（大象鼻子A）
- 🇨🇳 中国："小老鼠"
- 🇰🇷 韩国："달팽이"（蜗牛）
- 🇷🇺 俄罗斯："собака"（狗）`,
    funFacts: [
      "Ray Tomlinson can't remember what his first email said. He thinks it was something like 'QWERTYUIOP' — just a keyboard test.",
      "In 2010, New York's Museum of Modern Art (MoMA) added the @ symbol to its permanent design collection.",
    ],
    funFactsZh: [
      "Ray Tomlinson已经不记得他的第一封电子邮件写了什么。他觉得大概是'QWERTYUIOP'之类的——只是个键盘测试。",
      "2010年，纽约现代艺术博物馆（MoMA）把@符号收入了永久设计藏品。",
    ],
  },
  {
    id: "easter-eggs",
    title: "Easter Eggs: Secrets Hidden in Software",
    titleZh: "软件里的彩蛋",
    hook: "Developers have been hiding secret surprises in software since the 1970s.",
    hookZh: "从1970年代起，程序员们就一直在软件里藏秘密惊喜。",
    category: "legends",
    year: 1979,
    readMinutes: 3,
    tags: ["fun", "secrets", "gaming"],
    emoji: "🥚",
    image: "https://upload.wikimedia.org/wikipedia/en/5/51/Atari-2600-Adventure-Easter-Egg.png",
    imageCaption: "The first Easter egg in the Atari game Adventure",
    content: `## Hidden Treasures in Code

An **Easter egg** in software is a hidden feature, message, or joke that developers sneak in for fun.

### The First Easter Egg
In 1979, Atari game developer **Warren Robinett** was frustrated that Atari didn't credit game creators. So he hid a secret room in his game *Adventure* that displayed: "Created by Warren Robinett." Players had to find an invisible dot and carry it to a specific wall.

When Atari found out, they were annoyed — but it became so popular they kept it! The term "Easter egg" was born.

### Famous Easter Eggs
- **Konami Code** (1986): ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA — Try it on many websites!
- **Google**: Search "do a barrel roll" — the page spins!
- **Chrome**: No internet? The 🦖 dinosaur game appears — press Space to play!
- **Excel 97**: Had a hidden flight simulator
- **Python**: \`import antigravity\` opens a webcomic about Python
- **Android**: Every version has a hidden game in Settings → About Phone → tap version number

### Try This!
\`\`\`python
import this  # The Zen of Python
import antigravity  # Opens xkcd comic
from __future__ import braces  # SyntaxError: not a chance
\`\`\``,
    contentZh: `## 代码里的隐藏宝藏

软件中的**彩蛋**（Easter egg）是开发者偷偷藏进去的隐藏功能、消息或玩笑。

### 第一个彩蛋
1979年，Atari游戏开发者**Warren Robinett**很生气，因为Atari不给游戏创作者署名。于是他在游戏*Adventure*里藏了一个秘密房间，显示："Created by Warren Robinett。"玩家必须找到一个隐形的点，把它搬到特定的墙边。

Atari发现后很恼火——但这太受欢迎了，他们决定保留！"彩蛋"这个词就这么诞生了。

### 著名的彩蛋
- **科乐美秘技**（1986）：⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA——在很多网站上都能试！
- **Google**：搜索"do a barrel roll"——页面会旋转！
- **Chrome**：没网？🦖恐龙游戏出现——按空格键玩！
- **Excel 97**：藏了一个飞行模拟器
- **Python**：\`import antigravity\` 会打开一个关于Python的网络漫画
- **Android**：每个版本在 设置→关于手机→连点版本号 都有隐藏游戏

### 试试这个！
\`\`\`python
import this  # Python之禅
import antigravity  # 打开xkcd漫画
from __future__ import braces  # SyntaxError: not a chance（语法错误：没门）
\`\`\``,
    funFacts: [
      "The Chrome dinosaur game is played 270 million times per month! Google calls it 'Project Bolan' after T. Rex band member Marc Bolan.",
      "Microsoft Word 97 had a hidden pinball game. You had to follow a very specific set of steps to find it.",
    ],
    funFactsZh: [
      "Chrome恐龙游戏每月被玩2.7亿次！Google内部叫它'Project Bolan'，以T. Rex乐队成员Marc Bolan命名。",
      "Microsoft Word 97藏了一个弹球游戏。你得按照非常特定的步骤才能找到它。",
    ],
    relatedCourse: "python",
  },
  {
    id: "rubber-duck",
    title: "Rubber Duck Debugging",
    titleZh: "橡皮鸭调试法",
    hook: "Professional programmers solve bugs by talking to a rubber duck. Seriously.",
    hookZh: "专业程序员靠对着橡皮鸭说话来修bug。真的。",
    category: "legends",
    year: 1999,
    readMinutes: 3,
    tags: ["debugging", "fun", "technique"],
    emoji: "🦆",
    content: `## The Duck That Fixes Code

**Rubber duck debugging** is a real technique used by real programmers. The idea is simple: when you're stuck on a bug, explain your code **line by line** to a rubber duck (or any object).

### Why It Works
The act of explaining forces you to:
1. Slow down and think carefully
2. Articulate what each line SHOULD do
3. Notice the gap between what you THINK the code does and what it ACTUALLY does

Often, you'll find the bug mid-sentence: "So this line adds the numbers and— wait, I'm adding strings, not numbers!"

### Origin
The technique comes from the book *The Pragmatic Programmer* (1999) by Andrew Hunt and David Thomas. A programmer in the story carried a rubber duck and debugged by explaining code to it.

### It's Everywhere Now
- Many tech companies keep rubber ducks at desks
- Amazon sells "debugging ducks"
- Some programmers use cats, plants, or teddy bears instead
- Stack Overflow's offices had rubber ducks everywhere

\`\`\`python
# Rubber duck debugging in action:
def average(numbers):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)  # 🦆 "Wait... what if the list is empty?"

# The duck helped you find a ZeroDivisionError!
\`\`\``,
    contentZh: `## 会修代码的鸭子

**橡皮鸭调试法**是真实的程序员在用的真实技巧。方法很简单：当你被bug卡住时，**逐行**向一只橡皮鸭（或任何物体）解释你的代码。

### 为什么有效
解释的过程迫使你：
1. 放慢速度，仔细思考
2. 说清楚每一行代码应该做什么
3. 发现你以为代码在做什么和它实际在做什么之间的差距

经常你话说到一半就发现bug了："所以这行把数字加起来——等等，我在拼接字符串，不是加数字！"

### 起源
这个技巧来自Andrew Hunt和David Thomas的书《程序员修炼之道》（*The Pragmatic Programmer*，1999）。书中一个程序员随身带着橡皮鸭，通过向它解释代码来调试。

### 现在到处都是
- 很多科技公司在桌子上放橡皮鸭
- 亚马逊上卖"调试鸭"
- 有些程序员用猫、植物或泰迪熊代替
- Stack Overflow的办公室里到处都是橡皮鸭

\`\`\`python
# 橡皮鸭调试实战：
def average(numbers):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)  # 🦆 "等等…如果列表是空的呢？"

# 鸭子帮你发现了ZeroDivisionError！
\`\`\``,
    funFacts: [
      "Some companies include a rubber duck in their new employee welcome kits!",
      "There's a website called rubberduckdebugging.com where you can chat with a virtual duck.",
    ],
    funFactsZh: [
      "有些公司在新员工入职礼包里放橡皮鸭！",
      "有个网站叫rubberduckdebugging.com，你可以和虚拟鸭子聊天。",
    ],
    relatedCourse: "python",
  },
  {
    id: "tabs-vs-spaces",
    title: "Tabs vs Spaces: The Eternal War",
    titleZh: "Tabs vs Spaces：永恒之战",
    hook: "The silliest debate in programming has lasted 30 years and still isn't settled.",
    hookZh: "编程界最傻的辩论持续了30年，至今没有定论。",
    category: "legends",
    year: 1990,
    yearLabel: "1990s",
    readMinutes: 3,
    tags: ["fun", "culture", "formatting"],
    emoji: "⌨️",
    content: `## The Debate That Will Never Die

Should you indent your code with **tabs** or **spaces**? This question has divided programmers for decades.

### Team Tab
- One keystroke = one indent
- You can set how wide it looks (2, 4, 8 spaces)
- Smaller file size
- "It's what the Tab key is FOR!"

### Team Space
- Looks the same on EVERY computer and editor
- More precise alignment
- Most style guides require spaces
- Python officially recommends 4 spaces

### The Data
A 2017 Stack Overflow survey found that **spaces users earn more money** than tab users (on average $59,140 vs $43,750). This is probably a coincidence... probably. 🤔

### Silicon Valley
The TV show *Silicon Valley* dedicated an entire scene to this debate, where a character breaks up with someone over tabs vs spaces. It's funny because it's TRUE.

### The Real Answer
Use whatever your team's style guide says. And use an auto-formatter so you never have to think about it again!

\`\`\`python
# Python's answer: 4 spaces. Period.
if True:
    print("4 spaces")  # ✅ PEP 8 approved
\`\`\``,
    contentZh: `## 永远不会结束的辩论

代码缩进应该用**Tab**还是**空格**？这个问题已经让程序员们争了几十年。

### Tab派
- 按一次键 = 一次缩进
- 可以自定义显示宽度（2、4、8个空格宽）
- 文件更小
- "Tab键就是干这个的！"

### 空格派
- 在所有电脑和编辑器上看起来一样
- 对齐更精确
- 大多数代码规范要求用空格
- Python官方推荐4个空格

### 数据说话
2017年Stack Overflow调查发现，**用空格的人比用Tab的人赚更多钱**（平均59,140美元 vs 43,750美元）。这大概是巧合……大概吧。🤔

### 硅谷（电视剧）
电视剧《硅谷》专门用了一整个场景来演这个辩论，一个角色因为Tab vs 空格跟人分手了。好笑的是因为这太真实了。

### 真正的答案
用你团队代码规范说的那个。然后用自动格式化工具，这样你永远不用再想这个问题！

\`\`\`python
# Python的答案：4个空格。就这样。
if True:
    print("4个空格")  # ✅ PEP 8认证
\`\`\``,
    funFacts: [
      "GitHub's analysis of millions of repos found spaces are 4x more common than tabs.",
      "Linux kernel uses tabs (8-wide). Linus Torvalds says if your code needs more than 3 indent levels, it's broken anyway.",
    ],
    funFactsZh: [
      "GitHub分析了数百万个代码仓库，发现空格的使用频率是Tab的4倍。",
      "Linux内核用Tab（8格宽）。Linus Torvalds说如果你的代码需要超过3层缩进，那代码本身就有问题。",
    ],
    relatedCourse: "python",
  },
  {
    id: "goto-harmful",
    title: "Goto Considered Harmful",
    titleZh: "Goto有害论",
    hook: "A one-page letter in 1968 changed how all programmers write code.",
    hookZh: "1968年的一封一页纸的信改变了所有程序员写代码的方式。",
    category: "legends",
    year: 1968,
    readMinutes: 3,
    tags: ["programming", "history", "structured"],
    emoji: "⛔",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Edsger_Wybe_Dijkstra.jpg",
    imageCaption: "Edsger Dijkstra",
    content: `## The Letter That Killed GOTO

In 1968, Dutch computer scientist **Edsger Dijkstra** wrote a short letter to a journal titled *"Go To Statement Considered Harmful."*

### What's GOTO?
In early programming, **GOTO** was how you controlled flow — jump to any line number:
\`\`\`
10 PRINT "HELLO"
20 GOTO 10
\`\`\`
Sounds simple, but in big programs, GOTO created "spaghetti code" — tangled, impossible-to-follow logic jumping all over the place.

### Dijkstra's Argument
Dijkstra argued that GOTO makes programs nearly impossible to understand and debug. Instead, use **structured programming**: if/else, while loops, for loops, and functions.

### The Impact
- Most modern languages either don't have GOTO or strongly discourage it
- Python doesn't have GOTO at all!
- The phrase "X considered harmful" became a meme — there are now papers titled "Considered Harmful Essays Considered Harmful"

### Dijkstra's Other Wisdom
> "If debugging is the process of removing bugs, then programming must be the process of putting them in."

> "Computer science is no more about computers than astronomy is about telescopes."`,
    contentZh: `## 杀死GOTO的那封信

1968年，荷兰计算机科学家**Edsger Dijkstra**（迪杰斯特拉）给一个学术期刊写了一封短信，标题是《Go To语句被认为有害》。

### GOTO是什么？
在早期编程中，**GOTO**是控制流程的方式——跳到任意行号：
\`\`\`
10 PRINT "HELLO"
20 GOTO 10
\`\`\`
听起来简单，但在大程序中，GOTO会造成"意大利面代码"——纠缠在一起、完全跟不上的逻辑到处乱跳。

### Dijkstra的论点
Dijkstra认为GOTO让程序几乎不可能理解和调试。应该用**结构化编程**：if/else、while循环、for循环和函数。

### 影响
- 大多数现代语言要么没有GOTO，要么强烈不推荐使用
- Python根本就没有GOTO！
- "X被认为有害"成了一个梗——后来有人写了《"被认为有害"的文章被认为有害》

### Dijkstra的其他名言
> "如果调试是移除bug的过程，那编程就是放入bug的过程。"

> "计算机科学跟计算机的关系，就像天文学跟望远镜的关系一样。"`,
    funFacts: [
      "Dijkstra also invented the shortest path algorithm (Dijkstra's algorithm) — which GPS uses to find routes!",
      "Dijkstra handwrote all his manuscripts and letters. He never used email or a word processor.",
    ],
    funFactsZh: [
      "Dijkstra还发明了最短路径算法（Dijkstra算法）——GPS就是用它来找路的！",
      "Dijkstra手写所有手稿和信件。他从不用电子邮件或文字处理软件。",
    ],
  },
  {
    id: "unicode-emoji",
    title: "Unicode: Every Language + Emoji 😀",
    titleZh: "Unicode：让计算机说所有语言",
    hook: "How computers went from English-only to speaking every language — including emoji.",
    hookZh: "计算机如何从只懂英语变成会说所有语言——包括emoji。",
    category: "legends",
    year: 1991,
    readMinutes: 4,
    tags: ["unicode", "emoji", "encoding", "i18n"],
    emoji: "🌍",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Unicode_logo.svg",
    imageCaption: "Unicode Consortium logo",
    content: `## From 128 Characters to 150,000+

Early computers only understood **ASCII** — 128 characters covering English letters, digits, and some symbols. If you spoke Chinese, Arabic, or Japanese? Tough luck.

### The Problem
Different countries created their own encodings, but they were incompatible. A Chinese text file opened on a Japanese computer would show garbage characters (文字化け — "mojibake").

### Unicode: One System to Rule Them All
In 1991, **Unicode** was created to assign a unique number to every character in every writing system:
- Latin: A = U+0041
- Chinese: 中 = U+4E2D
- Arabic: ع = U+0639
- Emoji: 😀 = U+1F600

### Emoji: The Unexpected Addition
In 2010, Unicode added **emoji** — originally from Japanese mobile phones (絵文字 = "picture character"). Now there are 3,600+ emoji!

Fun fact: New emoji go through a formal approval process at the Unicode Consortium. People write actual proposals for new emoji.

\`\`\`python
# Python handles Unicode natively!
print("Hello 你好 مرحبا こんにちは 🌍")
print(ord("A"))       # 65
print(ord("中"))      # 20013
print("\\U0001F600")  # 😀
\`\`\`

### The Most Requested Emoji
The "face with tears of joy" 😂 was the most-used emoji worldwide for years, until ❤️ and 🤣 overtook it.`,
    contentZh: `## 从128个字符到15万+

早期计算机只懂**ASCII**——128个字符，覆盖英文字母、数字和一些符号。如果你说中文、阿拉伯语或日语？那就没办法了。

### 问题
不同国家创建了自己的编码，但它们互不兼容。中文文本文件在日文电脑上打开会显示乱码（文字化け——"mojibake"）。

### Unicode：一统天下的系统
1991年，**Unicode** 被创建，为每种书写系统的每个字符分配一个唯一的编号：
- 拉丁文：A = U+0041
- 中文：中 = U+4E2D
- 阿拉伯文：ع = U+0639
- Emoji：😀 = U+1F600

### Emoji：意外的加入
2010年，Unicode加入了**emoji**——最初来自日本手机（絵文字 = "图片字符"）。现在有3600多个emoji！

有趣的是：新emoji要经过Unicode联盟的正式审批流程。人们要写正式的提案来申请新emoji。

\`\`\`python
# Python原生支持Unicode！
print("Hello 你好 مرحبا こんにちは 🌍")
print(ord("A"))       # 65
print(ord("中"))      # 20013
print("\\U0001F600")  # 😀
\`\`\`

### 最受欢迎的Emoji
"笑哭"😂 多年来是全球使用最多的emoji，直到 ❤️ 和 🤣 超过了它。`,
    funFacts: [
      "There's a Unicode character for 'PILE OF POO' (💩, U+1F4A9). It was one of the original emoji from Japanese phones.",
      "Unicode currently has 154,998 characters covering 168 writing systems, including Egyptian hieroglyphs and Linear B (an ancient Greek script).",
    ],
    funFactsZh: [
      "Unicode里有个字符叫'一坨便便'（💩，U+1F4A9）。它是日本手机上最早的emoji之一。",
      "Unicode目前有154,998个字符，覆盖168种书写系统，包括埃及象形文字和线形文字B（一种古希腊文字）。",
    ],
  },

  // ============ PEOPLE ============
  {
    id: "ritchie-thompson",
    title: "Ritchie & Thompson: Unix and C",
    titleZh: "Dennis Ritchie & Ken Thompson：Unix和C语言",
    hook: "They created the language behind everything and the OS that spawned all others.",
    hookZh: "他们创造了一切背后的语言和衍生出所有其他系统的操作系统。",
    category: "people",
    year: 1972,
    readMinutes: 4,
    tags: ["unix", "c-language", "bell-labs"],
    emoji: "⚙️",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Ken_Thompson_and_Dennis_Ritchie--1973.jpg",
    imageCaption: "Ken Thompson (left) and Dennis Ritchie at Bell Labs, 1973",
    content: `## The Invisible Foundation

Almost every device you use runs software influenced by two Bell Labs engineers: **Dennis Ritchie** and **Ken Thompson**.

### Unix (1969)
Thompson created **Unix** partly because he wanted to play a space travel game he'd written. He needed an operating system for a spare PDP-7 computer, so he built one — in THREE WEEKS.

Unix introduced ideas that every OS uses today:
- "Everything is a file"
- Small tools that do one thing well
- Pipes to connect tools: \`cat file.txt | grep "hello" | wc -l\`
- Hierarchical file system (/home/user/documents)

### C Language (1972)
Ritchie created **C** so they could rewrite Unix in a portable language. Before C, every OS was written in assembly specific to one machine.

C's descendants include: C++, Java, C#, JavaScript, Python, Go, Rust, Swift...

### The Tragedy
When **Steve Jobs** died in 2011, it was worldwide news. Dennis Ritchie died ONE WEEK later. Almost nobody noticed.

Yet Ritchie's work underlies everything Jobs built. Your iPhone runs iOS (descended from Unix) written in languages descended from C.

> "Ritchie's influence on programming is rivaled only by that of Turing." — Joel Spolsky`,
    contentZh: `## 看不见的地基

你用的几乎每台设备都运行着受两位贝尔实验室工程师影响的软件：**Dennis Ritchie**（丹尼斯·里奇）和**Ken Thompson**（肯·汤普森）。

### Unix（1969）
Thompson创建**Unix**部分原因是他想玩自己写的太空旅行游戏。他需要一个操作系统来运行在一台闲置的PDP-7电脑上，于是他造了一个——用了**三个星期**。

Unix引入的理念至今每个操作系统都在用：
- "一切皆文件"
- 小工具各做一件事
- 管道连接工具：\`cat file.txt | grep "hello" | wc -l\`
- 层级文件系统（/home/user/documents）

### C语言（1972）
Ritchie创造了**C语言**，这样他们就能用可移植的语言重写Unix。在C之前，每个操作系统都用特定机器的汇编语言写的。

C的后代包括：C++、Java、C#、JavaScript、Python、Go、Rust、Swift……

### 悲剧
2011年**Steve Jobs**去世时，全球轰动。Dennis Ritchie在**一周后**去世。几乎没人注意到。

然而Ritchie的工作是Jobs所有成就的基础。你的iPhone运行的iOS（源自Unix）是用C的后代语言写的。

> "Ritchie对编程的影响只有图灵能与之相比。" — Joel Spolsky`,
    funFacts: [
      "Ken Thompson created Unix partly to play his space travel game. Some of the best software is built to solve personal problems!",
      "Thompson also co-created Go (the programming language) at Google in 2009, at age 66. He also created the first computer chess program to beat a human master.",
    ],
    funFactsZh: [
      "Ken Thompson创建Unix部分是为了玩他的太空旅行游戏。有些最好的软件就是为解决个人问题而造的！",
      "Thompson还在2009年（66岁时）在Google参与创造了Go编程语言。他还创建了第一个击败人类大师的计算机国际象棋程序。",
    ],
  },
  {
    id: "vint-cerf-bob-kahn",
    title: "Vint Cerf & Bob Kahn: Internet Fathers",
    titleZh: "Vint Cerf & Bob Kahn：互联网之父",
    hook: "They designed the rules (TCP/IP) that let every computer on Earth talk to each other.",
    hookZh: "他们设计了让地球上每台电脑互相通信的规则（TCP/IP）。",
    category: "people",
    year: 1974,
    readMinutes: 3,
    tags: ["internet", "tcp-ip", "protocol"],
    emoji: "🌐",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Vint_Cerf_-_2010.jpg",
    imageCaption: "Vint Cerf, Father of the Internet",
    content: `## The Rules of the Internet

In the 1970s, different computer networks existed but couldn't talk to each other. It was like having phones that only worked within one city.

**Vint Cerf** and **Bob Kahn** solved this by inventing **TCP/IP** (1974) — the protocol that lets ANY computer communicate with ANY other computer, regardless of manufacturer or network.

### How TCP/IP Works (Simply)
- **IP** (Internet Protocol): Gives every device an address (like a street address)
- **TCP** (Transmission Control Protocol): Ensures data arrives correctly (like registered mail)

Together, they break data into packets, route them across the world, and reassemble them perfectly at the destination.

### The Design Was Brilliant Because:
1. **Decentralized**: No single point of failure
2. **Open**: Anyone can connect
3. **Scalable**: Works for 4 computers or 4 billion
4. **Protocol-agnostic**: Doesn't care about the physical network

### Vint Cerf
Often called the "Father of the Internet." Now works at Google as "Chief Internet Evangelist" (yes, that's his real title). He's partially deaf and has said the internet's text-based nature helped him communicate.

### Legacy
TCP/IP now connects 5+ billion people and 30+ billion devices. Every text, email, video call, and web page you've ever used traveled over TCP/IP.`,
    contentZh: `## 互联网的规则

1970年代，不同的计算机网络存在但无法互相通信。就像手机只能在一个城市内通话。

**Vint Cerf**（文特·瑟夫）和**Bob Kahn**（鲍勃·卡恩）发明了**TCP/IP**（1974）解决了这个问题——这个协议让任何计算机都能与任何其他计算机通信，不管制造商或网络是什么。

### TCP/IP如何工作（简单版）
- **IP**（互联网协议）：给每台设备一个地址（像街道地址）
- **TCP**（传输控制协议）：确保数据正确到达（像挂号信）

它们把数据拆成数据包，在全世界路由传输，然后在目的地完美重组。

### 这个设计很天才因为：
1. **去中心化**：没有单点故障
2. **开放**：任何人都能连接
3. **可扩展**：4台电脑到40亿台都行
4. **协议无关**：不关心物理网络是什么

### Vint Cerf
常被称为"互联网之父"。现在在Google工作，头衔是"首席互联网布道师"（对，这是真的职位）。他有听力障碍，曾说互联网的文字特性帮助了他的沟通。

### 遗产
TCP/IP现在连接着50多亿人和300多亿台设备。你用过的每条消息、每封邮件、每次视频通话、每个网页都通过TCP/IP传输。`,
    funFacts: [
      "Vint Cerf's business card at Google says 'Chief Internet Evangelist.' He's had the title since 2005.",
      "Cerf and Kahn received the Presidential Medal of Freedom, the Turing Award, and the National Medal of Technology for their work on TCP/IP.",
    ],
    funFactsZh: [
      "Vint Cerf在Google的名片上写着'首席互联网布道师'。这个头衔从2005年就有了。",
      "Cerf和Kahn因TCP/IP的工作获得了总统自由勋章、图灵奖和国家技术奖章。",
    ],
  },
  {
    id: "donald-knuth",
    title: "Donald Knuth: The Art of Programming",
    titleZh: "Donald Knuth：计算机编程的艺术",
    hook: "He's been writing one book series for 60 years — and invented a typesetting system because publishers couldn't print his math properly.",
    hookZh: "他写一套书写了60年——还因为出版社排不好他的数学公式发明了一个排版系统。",
    category: "people",
    year: 1968,
    readMinutes: 3,
    tags: ["algorithms", "tex", "legend"],
    emoji: "📖",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/ArtOfComputerProgramming.svg",
    imageCaption: "The Art of Computer Programming, Volume 1",
    content: `## The Professor Who Sends Checks for $2.56

**Donald Knuth** (born 1938) is perhaps the most respected computer scientist alive. His magnum opus, *The Art of Computer Programming* (TAOCP), has been in progress since **1962** — and he's still writing it.

### The Book(s)
Originally planned as ONE book with 12 chapters, TAOCP grew into a planned 7-volume series. As of 2024, volumes 1-3 and part of 4 are published. Bill Gates said: "If you can read the whole thing, send me a résumé."

### The $2.56 Bug Bounty
Knuth pays **$2.56** (one "hexadecimal dollar" = 0x$1.00) to anyone who finds an error in his books. The checks are so prized that most people frame them rather than cash them!

### TeX
In the 1970s, Knuth was so unhappy with how his publisher typeset Volume 2 that he created **TeX** — a typesetting system. It's still used by virtually every scientist and mathematician to write papers today (including LaTeX, which is built on TeX).

### Fun Personality
- Knuth doesn't use email. He reads printed emails once every 3 months.
- He has an organ in his home and plays Bach.
- His license plate reads "TEX"

### Knuth on Algorithms
> "Premature optimization is the root of all evil."

This is one of the most quoted phrases in programming!`,
    contentZh: `## 寄2.56美元支票的教授

**Donald Knuth**（高德纳，1938年生）可能是在世最受尊敬的计算机科学家。他的巨著《计算机程序设计艺术》（TAOCP）从**1962年**开始写——现在还在写。

### 这套书
原计划是一本12章的书，TAOCP膨胀成了7卷系列。到2024年，已出版第1-3卷和第4卷的一部分。比尔·盖茨说过："如果你能读完整套书，请把简历发给我。"

### 2.56美元的Bug赏金
Knuth给任何在他书中发现错误的人**2.56美元**（一个"十六进制美元" = 0x$1.00）。这些支票太珍贵了，大多数人都把它们裱起来而不是去兑现！

### TeX
1970年代，Knuth对出版社排版第2卷的效果非常不满，于是他创造了**TeX**——一个排版系统。至今几乎每个科学家和数学家写论文都用它（包括基于TeX的LaTeX）。

### 有趣的个性
- Knuth不用电子邮件。他每3个月读一次打印出来的邮件。
- 他家里有个管风琴，弹巴赫。
- 他的车牌号是"TEX"

### Knuth论算法
> "过早优化是万恶之源。"

这是编程界被引用最多的名言之一！`,
    funFacts: [
      "Knuth estimates TAOCP will be finished around 2025... but he's been saying 'a few more years' since the 1990s.",
      "The TeX version number approaches π (currently 3.141592653). Each update adds another digit. Knuth says on his death, the version should be set to π.",
    ],
    funFactsZh: [
      "Knuth估计TAOCP会在2025年前后完成……但他从1990年代就一直说'再过几年'。",
      "TeX的版本号趋近于π（目前是3.141592653）。每次更新加一位数字。Knuth说他去世后，版本号应该设为π。",
    ],
  },
  {
    id: "john-carmack",
    title: "John Carmack: The Wizard of 3D",
    titleZh: "John Carmack：3D图形的巫师",
    hook: "He revolutionized 3D graphics three times — with Doom, Quake, and VR.",
    hookZh: "他三次革命了3D图形——用Doom、Quake和VR。",
    category: "people",
    year: 1993,
    readMinutes: 3,
    tags: ["gaming", "graphics", "3d", "vr"],
    emoji: "🎮",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/John_Carmack_2025.jpg",
    imageCaption: "John Carmack",
    content: `## The Programmer's Programmer

**John Carmack** is considered one of the greatest programmers alive. He didn't just make games — he invented the technology that made modern 3D graphics possible.

### The Breakthroughs
- **Wolfenstein 3D** (1992): First popular first-person shooter
- **Doom** (1993): Revolutionized gaming with pseudo-3D graphics, networked multiplayer, and modding
- **Quake** (1996): First true 3D FPS engine, with real-time 3D rendering

Each game pushed graphics technology forward by YEARS.

### The Fast Inverse Square Root
Quake III Arena contained one of the most famous code snippets ever — a hack to calculate 1/√x extremely fast:
\`\`\`c
float Q_rsqrt(float number) {
    long i = *(long*)&number;
    i = 0x5f3759df - (i >> 1);  // what the...?
    // It works. Nobody fully understood why for years.
}
\`\`\`
This "magic number" trick was 4x faster than normal methods. It's legendary in programming culture.

### From Games to Space
Carmack left gaming to work on **VR** (Oculus, now Meta) and then **rockets** (Armadillo Aerospace). He's now working on **AGI** at his startup.

### Work Ethic
Carmack is famous for coding 60-80 hours per week, sleeping at the office, and living on pizza and Diet Coke.`,
    contentZh: `## 程序员中的程序员

**John Carmack**（约翰·卡马克）被认为是在世最伟大的程序员之一。他不只是做游戏——他发明了让现代3D图形成为可能的技术。

### 突破性成就
- **Wolfenstein 3D**（1992）：第一个流行的第一人称射击游戏
- **Doom**（1993）：用伪3D图形、网络多人对战和模组支持革新了游戏
- **Quake**（1996）：第一个真正的3D FPS引擎，实时3D渲染

每款游戏都把图形技术推进了好几年。

### 快速平方根倒数
Quake III Arena包含了史上最著名的代码片段之一——一个极快计算 1/√x 的黑科技：
\`\`\`c
float Q_rsqrt(float number) {
    long i = *(long*)&number;
    i = 0x5f3759df - (i >> 1);  // 这什么鬼...？
    // 它就是能用。好几年都没人完全理解为什么。
}
\`\`\`
这个"魔术数字"技巧比普通方法快4倍。它在编程文化中是传奇。

### 从游戏到太空
Carmack离开游戏行业去做**VR**（Oculus，现在的Meta），然后是**火箭**（Armadillo Aerospace）。他现在在自己的创业公司研究**AGI**。

### 工作狂
Carmack以每周编程60-80小时、在办公室睡觉、靠披萨和无糖可乐维生而闻名。`,
    funFacts: [
      "Carmack open-sourced all his game engines. The Doom engine has been ported to everything — including a pregnancy test, a thermostat, and an ATM.",
      "At age 14, Carmack broke into a school to steal Apple II computers. He was caught by police and sent to juvenile detention for a year.",
    ],
    funFactsZh: [
      "Carmack开源了他所有的游戏引擎。Doom引擎被移植到了所有东西上——包括验孕棒、温控器和ATM机。",
      "14岁时，Carmack闯入学校偷Apple II电脑。被警察抓住，在少管所待了一年。",
    ],
  },
  {
    id: "fei-fei-li",
    title: "Fei-Fei Li: The Data Visionary",
    titleZh: "李飞飞：数据的远见者",
    hook: "She built the dataset that launched the deep learning revolution — when nobody believed in it.",
    hookZh: "在没人相信的时候，她建立了引发深度学习革命的数据集。",
    category: "people",
    year: 2009,
    readMinutes: 3,
    tags: ["ai", "imagenet", "women-in-tech", "data"],
    emoji: "🖼️",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Fei-Fei_Li_at_AI_for_Good_2017.jpg",
    imageCaption: "Fei-Fei Li at AI for Good, 2017",
    content: `## The Woman Who Taught AI to See

**Fei-Fei Li** (李飞飞) grew up in China and immigrated to the US as a teenager, working in a laundromat while studying physics at Princeton.

### The Big Idea
In the mid-2000s, most AI researchers focused on building better algorithms. Li had a different idea: **the data matters more than the algorithm.** If you give AI enough examples, it will learn.

### ImageNet
Starting in 2007, Li led the creation of **ImageNet** — a dataset of 14 million hand-labeled images in 20,000+ categories. It took 3 years and 25,000 workers on Amazon Mechanical Turk.

Many colleagues thought it was a waste of time. "Why do you need millions of images?" they asked.

### The Revolution
In 2012, a team using ImageNet proved Li right. **AlexNet** — a deep neural network trained on ImageNet — crushed all competitors in image recognition. This was the spark that ignited the deep learning revolution.

Without ImageNet, there would be no:
- Google Photos face recognition
- Self-driving car vision
- Medical image diagnosis AI
- DALL-E or Midjourney

### Legacy
Li became Director of the Stanford AI Lab and co-led Stanford's Human-Centered AI Institute. She's a champion for AI ethics and diversity.

> "If we want machines to think, we need to teach them to see." — Fei-Fei Li`,
    contentZh: `## 教AI看世界的女人

**李飞飞**在中国长大，十几岁时移民美国，一边在洗衣店打工一边在普林斯顿学物理。

### 伟大的想法
2000年代中期，大多数AI研究者专注于构建更好的算法。李飞飞有不同的想法：**数据比算法更重要。**如果你给AI足够多的例子，它就能学会。

### ImageNet
从2007年开始，李飞飞领导创建了**ImageNet**——一个包含1400万张手工标注图片、覆盖2万多个类别的数据集。花了3年时间和亚马逊Mechanical Turk上的25,000名工人。

很多同事觉得这是浪费时间。"你为什么需要几百万张图片？"他们问。

### 革命
2012年，一个团队用ImageNet证明了李飞飞是对的。**AlexNet**——一个在ImageNet上训练的深度神经网络——在图像识别中碾压了所有竞争对手。这就是点燃深度学习革命的火花。

没有ImageNet，就不会有：
- Google Photos的人脸识别
- 自动驾驶汽车的视觉系统
- 医学图像诊断AI
- DALL-E或Midjourney

### 遗产
李飞飞成为斯坦福AI实验室主任，并共同领导斯坦福以人为本AI研究所。她是AI伦理和多样性的倡导者。

> "如果我们想让机器思考，就需要教它们看。" — 李飞飞`,
    funFacts: [
      "Li's mother worked in a laundromat and her father was a camera repairman. She became one of the most influential AI researchers in the world.",
      "ImageNet's annual competition (ILSVRC) reduced image recognition error from 28% (2010) to 2.3% (2017) — better than humans (~5%)!",
    ],
    funFactsZh: [
      "李飞飞的母亲在洗衣店工作，父亲修相机。她成为了世界上最有影响力的AI研究者之一。",
      "ImageNet年度比赛（ILSVRC）把图像识别错误率从28%（2010）降到了2.3%（2017）——比人类（~5%）还好！",
    ],
    relatedCourse: "ai-ml",
  },

  // ============ HARDWARE ============
  {
    id: "floppy-disk",
    title: "The Floppy Disk: Save Icon Origin 💾",
    titleZh: "软盘：保存图标的由来 💾",
    hook: "Kids today don't know what the save icon is — because they've never seen a floppy disk.",
    hookZh: "现在的孩子不知道保存图标是什么——因为他们从没见过软盘。",
    category: "hardware",
    year: 1971,
    readMinutes: 3,
    tags: ["storage", "icon", "history"],
    emoji: "💾",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Floppy_disk_2009_G1.jpg",
    imageCaption: "A 3.5-inch floppy disk — the save icon",
    content: `## The Most Famous Icon Nobody Recognizes

Click "Save" in almost any app and you'll see this icon: 💾. It's a **floppy disk** — a storage medium that hasn't been used since the early 2000s.

### The Evolution of Floppies
- **1971**: IBM introduces the 8-inch floppy (pizza-sized!) — 80 KB
- **1976**: 5.25-inch floppy — 360 KB
- **1982**: 3.5-inch floppy (the save icon shape) — 1.44 MB
- **2011**: Sony stops making floppies. End of an era.

### How They Worked
A floppy disk is literally a thin, flexible ("floppy") magnetic disk inside a protective casing. Data is read/written by a magnetic head, similar to a tiny record player.

### The Save Icon Debate
Some designers have tried to replace the floppy icon with something modern — a cloud, a download arrow, a hard drive. But the floppy persists because it's universally recognized. Even people who've never seen a real floppy know it means "save."

It's become an **abstract symbol**, like how the phone icon 📞 shows a handset nobody uses anymore.

### Storage Comparison
\`\`\`python
floppy = 1.44  # MB
usb_drive = 128_000  # MB (128 GB)
ratio = usb_drive / floppy
print(f"A USB drive holds {ratio:,.0f}x more than a floppy!")
# Output: A USB drive holds 88,889x more than a floppy!
\`\`\``,
    contentZh: `## 没人认识的最著名图标

在几乎任何应用里点"保存"，你会看到这个图标：💾。它是**软盘**——一种2000年代初就不再使用的存储介质。

### 软盘的进化
- **1971年**：IBM推出8英寸软盘（披萨大小！）——80 KB
- **1976年**：5.25英寸软盘——360 KB
- **1982年**：3.5英寸软盘（保存图标的形状）——1.44 MB
- **2011年**：索尼停产软盘。一个时代的终结。

### 工作原理
软盘字面意思就是一张薄的、可弯曲的（"floppy"）磁性盘片，装在保护外壳里。数据通过磁头读写，类似一个微型唱片机。

### 保存图标之争
有些设计师试图用更现代的东西替换软盘图标——云、下载箭头、硬盘。但软盘图标一直存在，因为它被普遍认知。即使从没见过真正软盘的人也知道它代表"保存"。

它已经变成了一个**抽象符号**，就像电话图标 📞 显示的是一个没人再用的听筒。

### 存储对比
\`\`\`python
floppy = 1.44  # MB
usb_drive = 128_000  # MB (128 GB)
ratio = usb_drive / floppy
print(f"U盘比软盘多存 {ratio:,.0f} 倍！")
# 输出：U盘比软盘多存 88,889 倍！
\`\`\``,
    funFacts: [
      "The US nuclear arsenal was controlled by 8-inch floppy disks until 2019. Yes, really.",
      "A single modern microSD card (1.5 TB) holds the equivalent of about 1 MILLION floppy disks.",
    ],
    funFactsZh: [
      "美国核武库直到2019年还在用8英寸软盘控制。真的。",
      "一张现代microSD卡（1.5TB）相当于大约100万张软盘。",
    ],
  },
  {
    id: "raspberry-pi",
    title: "Raspberry Pi: $35 Computer",
    titleZh: "树莓派：35美元的电脑",
    hook: "A credit-card-sized computer that's sold 60 million units and changed education worldwide.",
    hookZh: "一台信用卡大小的电脑卖了6000万台，改变了全球教育。",
    category: "hardware",
    year: 2012,
    readMinutes: 3,
    tags: ["education", "maker", "affordable"],
    emoji: "🍓",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Raspberry_Pi_4_Model_B_-_Side.jpg",
    imageCaption: "Raspberry Pi 4",
    content: `## The Little Computer That Could

In 2012, the **Raspberry Pi Foundation** in the UK released a tiny, cheap computer to help kids learn programming. It cost just **$35**.

### Why It Exists
Eben Upton, a Cambridge professor, noticed fewer students were applying to study computer science. Kids were using phones and tablets but never learning HOW they worked. He wanted a cheap computer kids could tinker with.

### What You Can Do With It
- 🎮 Build a retro game console
- 🤖 Control a robot
- 📷 Make a security camera
- 🌡️ Build a weather station
- 🖥️ Use it as a desktop computer
- 🏠 Run a home media server
- 🌐 Host a website

### The Numbers
- 60+ million sold worldwide
- Used in 100+ countries
- Powers the International Space Station experiments
- Used in industrial applications, from factories to farms

### Specs (Pi 5, 2023)
\`\`\`
CPU: 4-core ARM @ 2.4 GHz
RAM: 4 or 8 GB
Storage: microSD
Ports: USB, HDMI, GPIO pins
Price: $60
Size: 85mm × 56mm (credit card!)
\`\`\`

Compare that to ENIAC: 30 tons, $500,000, filled a room. The Pi is millions of times more powerful.`,
    contentZh: `## 能干大事的小电脑

2012年，英国的**Raspberry Pi基金会**发布了一台微型廉价电脑，帮助孩子们学编程。售价仅**35美元**。

### 为什么要做它
剑桥教授Eben Upton注意到申请学计算机的学生越来越少了。孩子们在用手机和平板，但从不了解它们是怎么工作的。他想做一台便宜的电脑让孩子们可以折腾。

### 你能用它做什么
- 🎮 搭一台复古游戏机
- 🤖 控制机器人
- 📷 做安防摄像头
- 🌡️ 搭气象站
- 🖥️ 当桌面电脑用
- 🏠 搭家庭媒体服务器
- 🌐 搭网站

### 数据
- 全球卖出6000多万台
- 在100多个国家使用
- 在国际空间站上运行实验
- 用于工业应用，从工厂到农场

### 规格（Pi 5，2023年）
\`\`\`
CPU：4核 ARM @ 2.4 GHz
RAM：4或8 GB
存储：microSD
接口：USB、HDMI、GPIO引脚
价格：60美元
尺寸：85mm × 56mm（信用卡大小！）
\`\`\`

对比ENIAC：30吨，50万美元，占满一个房间。树莓派的性能是它的几百万倍。`,
    funFacts: [
      "The name 'Raspberry Pi' follows the tradition of naming computers after fruit (Apple, Blackberry, Apricot). 'Pi' is for Python, the intended programming language.",
      "Students have sent Raspberry Pis to the edge of space on weather balloons, where they took photos from 30+ km altitude!",
    ],
    funFactsZh: [
      "'Raspberry Pi'（树莓派）延续了用水果给电脑命名的传统（Apple、Blackberry、Apricot）。'Pi'代表Python，最初打算用的编程语言。",
      "学生们用气象气球把树莓派送到了太空边缘，在30多公里的高度拍了照片！",
    ],
  },
  {
    id: "apollo-computer",
    title: "Apollo Guidance Computer: 2KB to the Moon",
    titleZh: "阿波罗导航计算机：2KB登月",
    hook: "The computer that landed humans on the Moon had less memory than a calculator watch.",
    hookZh: "把人类送上月球的计算机内存还没计算器手表多。",
    category: "hardware",
    year: 1969,
    readMinutes: 3,
    tags: ["nasa", "apollo", "space", "miniaturization"],
    emoji: "🚀",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Agc_view.jpg",
    imageCaption: "Apollo Guidance Computer and DSKY interface",
    content: `## Less Power Than a USB Charger

The **Apollo Guidance Computer (AGC)** that guided astronauts to the Moon had:
- **RAM:** 2 KB (your phone has ~6,000,000 KB)
- **Storage:** 36 KB of ROM
- **Speed:** 0.043 MHz (your phone: ~3,000 MHz)
- **Weight:** 32 kg (70 lbs)

### Rope Memory
The AGC's permanent memory was literally **woven by hand**. Women workers (called "little old ladies" by the engineers, though many were young) threaded copper wires through magnetic cores. Wire through a core = 1, around a core = 0. It took 8 weeks to weave one program.

### The Software
Margaret Hamilton's team wrote the software in assembly language. Every bit mattered — there was no room for waste. The code included:
- Navigation calculations
- Autopilot
- Display interface
- Priority-based task scheduling (which saved Apollo 11!)

### Comparison
\`\`\`python
agc_memory = 2  # KB
iphone_memory = 6_000_000  # KB (6 GB)
print(f"iPhone has {iphone_memory/agc_memory:,.0f}x more RAM than Apollo!")
# Output: iPhone has 3,000,000x more RAM than Apollo!
\`\`\`

They landed on the Moon with 3 million times LESS memory than your phone. Let that sink in.`,
    contentZh: `## 还不如USB充电器的算力

引导宇航员登月的**阿波罗导航计算机（AGC）**：
- **内存：** 2 KB（你的手机大约有6,000,000 KB）
- **存储：** 36 KB ROM
- **速度：** 0.043 MHz（你的手机：~3,000 MHz）
- **重量：** 32公斤

### 绳索内存
AGC的永久存储器是**手工编织**的。女工们（被工程师们叫做"老太太们"，虽然很多人很年轻）把铜线穿过磁芯。线穿过磁芯 = 1，绕过磁芯 = 0。编织一个程序需要8周。

### 软件
Margaret Hamilton的团队用汇编语言编写软件。每一位都很重要——没有浪费的空间。代码包括：
- 导航计算
- 自动驾驶
- 显示界面
- 基于优先级的任务调度（这拯救了阿波罗11号！）

### 对比
\`\`\`python
agc_memory = 2  # KB
iphone_memory = 6_000_000  # KB (6 GB)
print(f"iPhone的内存是阿波罗的 {iphone_memory/agc_memory:,.0f} 倍！")
# 输出：iPhone的内存是阿波罗的 3,000,000 倍！
\`\`\`

他们用比你手机少300万倍的内存登上了月球。想想这意味着什么。`,
    funFacts: [
      "The AGC source code was uploaded to GitHub in 2016. Developers found comments like 'BURN BABY BURN' and 'PLEASE CRANK THE SILLY THING AROUND' in the code.",
      "A modern musical greeting card has more computing power than the AGC.",
    ],
    funFactsZh: [
      "AGC源代码在2016年被上传到了GitHub。开发者在代码注释中发现了'BURN BABY BURN'（烧吧宝贝烧）和'PLEASE CRANK THE SILLY THING AROUND'（请转动这个蠢东西）这样的话。",
      "一张现代音乐贺卡的计算能力比AGC还强。",
    ],
  },
  {
    id: "storage-evolution",
    title: "Floppy → CD → USB → Cloud",
    titleZh: "软盘→光盘→U盘→云",
    hook: "From pizza-sized disks to invisible storage — the wild evolution of saving stuff.",
    hookZh: "从披萨大小的磁盘到看不见的存储——保存东西的疯狂进化。",
    category: "hardware",
    year: 1956,
    yearLabel: "1956–2020s",
    readMinutes: 3,
    tags: ["storage", "evolution", "history"],
    emoji: "📀",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Floppy_disk_2009_G1.jpg",
    imageCaption: "A 3.5-inch floppy disk",
    content: `## Where Does Data Live?

### The Timeline
- **1956**: Hard disk (IBM RAMAC) — 5 MB, weighs 1 ton
- **1971**: 8" floppy disk — 80 KB, pizza-sized
- **1982**: 3.5" floppy — 1.44 MB
- **1982**: CD — 700 MB
- **1995**: DVD — 4.7 GB
- **2000**: USB flash drive — first ones were 8 MB
- **2006**: Blu-ray — 25 GB
- **2006**: Amazon S3 (cloud storage) launches
- **2024**: microSD — 1.5 TB in a fingernail

### The Cloud
"The cloud" is just other people's computers. When you save to Google Drive or iCloud, your data goes to massive data centers — warehouses full of hard drives kept at exactly the right temperature.

### Perspective
\`\`\`python
storage = {
    "1956 IBM RAMAC": 5,         # MB
    "1982 Floppy": 1.44,         # MB
    "1995 DVD": 4_700,            # MB
    "2024 microSD": 1_500_000,    # MB (1.5 TB)
}
for name, mb in storage.items():
    songs = mb / 4  # ~4 MB per song
    print(f"{name}: {songs:,.0f} songs")
\`\`\`

From 1 song to 375,000 songs — in your pocket!`,
    contentZh: `## 数据住在哪？

### 时间线
- **1956年**：硬盘（IBM RAMAC）——5 MB，重1吨
- **1971年**：8英寸软盘——80 KB，披萨大小
- **1982年**：3.5英寸软盘——1.44 MB
- **1982年**：CD——700 MB
- **1995年**：DVD——4.7 GB
- **2000年**：U盘——最早的只有8 MB
- **2006年**：蓝光光盘——25 GB
- **2006年**：亚马逊S3（云存储）上线
- **2024年**：microSD——指甲盖大小存1.5 TB

### 云
"云"就是别人的电脑。当你保存到Google Drive或iCloud时，你的数据去了巨大的数据中心——装满硬盘的仓库，温度精确控制。

### 感受一下
\`\`\`python
storage = {
    "1956 IBM RAMAC": 5,         # MB
    "1982 软盘": 1.44,            # MB
    "1995 DVD": 4_700,            # MB
    "2024 microSD": 1_500_000,    # MB (1.5 TB)
}
for name, mb in storage.items():
    songs = mb / 4  # 每首歌约4 MB
    print(f"{name}: {songs:,.0f} 首歌")
\`\`\`

从1首歌到375,000首歌——在你口袋里！`,
    funFacts: [
      "Google, Amazon, and Microsoft's data centers combined use more electricity than some countries.",
      "If you stored 1 TB of data on floppy disks, the stack would be about 1 kilometer tall!",
    ],
    funFactsZh: [
      "Google、亚马逊和微软的数据中心加起来用的电比一些国家还多。",
      "如果你用软盘存1TB数据，叠起来大约有1公里高！",
    ],
  },

  // ============ SOFTWARE ============
  {
    id: "assembly-language",
    title: "Assembly: Talking to Machines",
    titleZh: "汇编语言：和机器说话",
    hook: "Before Python, before C, programmers wrote code that only machines could love.",
    hookZh: "在Python之前，在C之前，程序员写的代码只有机器才爱看。",
    category: "software",
    year: 1949,
    readMinutes: 3,
    tags: ["assembly", "low-level", "history"],
    emoji: "🔩",
    content: `## The Language of the Machine

Computers only understand **machine code** — raw binary numbers like 10110000 01100001. Writing in pure binary is torture.

**Assembly language** was the first step up: human-readable mnemonics that map directly to machine instructions.

### Example: Add Two Numbers
Machine code (x86):
\`\`\`
10110000 00000011  (move 3 into register)
00000100 00000101  (add 5)
\`\`\`

Assembly:
\`\`\`asm
MOV AL, 3    ; Put 3 in register AL
ADD AL, 5    ; Add 5 to AL
; Result: AL = 8
\`\`\`

Python:
\`\`\`python
result = 3 + 5  # That's it. That's the whole thing.
\`\`\`

### Why Assembly Still Matters
- 🎮 Game engines use it for performance-critical code
- 🔒 Security researchers reverse-engineer malware in assembly
- 🖥️ Operating system kernels have some assembly
- 📱 Embedded systems (watches, cars) sometimes need it

### Fun Fact About "Hello World"
In Python: 1 line. In Assembly (x86 Linux): about 15 lines including system calls, memory addresses, and register manipulation.

Assembly teaches you what the computer is ACTUALLY doing when you write \`print("hello")\`.`,
    contentZh: `## 机器的语言

计算机只懂**机器码**——像10110000 01100001这样的纯二进制数字。用纯二进制写代码简直是折磨。

**汇编语言**是第一次升级：用人类可读的助记符直接对应机器指令。

### 例子：两个数相加
机器码（x86）：
\`\`\`
10110000 00000011  （把3放进寄存器）
00000100 00000101  （加5）
\`\`\`

汇编：
\`\`\`asm
MOV AL, 3    ; 把3放进AL寄存器
ADD AL, 5    ; 把5加到AL
; 结果：AL = 8
\`\`\`

Python：
\`\`\`python
result = 3 + 5  # 就这样。就这么多。
\`\`\`

### 为什么汇编仍然重要
- 🎮 游戏引擎用它写性能关键代码
- 🔒 安全研究员用汇编逆向分析恶意软件
- 🖥️ 操作系统内核里有一些汇编
- 📱 嵌入式系统（手表、汽车）有时需要它

### 关于"Hello World"的趣事
Python里：1行。x86 Linux汇编里：大约15行，包括系统调用、内存地址和寄存器操作。

汇编让你了解当你写\`print("hello")\`时计算机**实际上**在做什么。`,
    funFacts: [
      "The Apollo Guidance Computer was programmed entirely in assembly. Every instruction counted when you only have 36 KB!",
      "Some competitive programmers still use assembly to squeeze out maximum performance in extreme optimization challenges.",
    ],
    funFactsZh: [
      "阿波罗导航计算机完全用汇编编程。当你只有36KB时，每条指令都很重要！",
      "一些竞赛程序员至今还用汇编来在极限优化挑战中榨出最大性能。",
    ],
  },
  {
    id: "language-explosion",
    title: "The Programming Language Explosion",
    titleZh: "高级语言大爆发",
    hook: "From FORTRAN to Python — 70 years and 700+ languages later.",
    hookZh: "从FORTRAN到Python——70年，700多种语言。",
    category: "software",
    year: 1957,
    yearLabel: "1957–2024",
    readMinutes: 4,
    tags: ["languages", "history", "evolution"],
    emoji: "🌳",
    content: `## The Family Tree of Programming

### The Timeline
- **1957**: **FORTRAN** — First high-level language. "FORmula TRANslation." Still used in scientific computing!
- **1959**: **COBOL** — Business language. Still processes 95% of ATM transactions
- **1964**: **BASIC** — "Beginner's All-purpose Symbolic Instruction Code." Made programming accessible
- **1972**: **C** — The language that built everything (see Ritchie & Thompson)
- **1983**: **C++** — C with objects. Powers games, browsers, OSes
- **1991**: **Python** — Named after Monty Python, became the world's most popular language
- **1995**: **Java** — "Write once, run anywhere." Powers Android and enterprise
- **1995**: **JavaScript** — Created in 10 DAYS. Now runs the entire web
- **2009**: **Go** — Google's language for cloud services
- **2010**: **Rust** — Memory-safe systems programming
- **2014**: **Swift** — Apple's language for iOS/macOS

### How Many Languages Exist?
Over **700** programming languages have been created. Most are forgotten, but about 20-30 are widely used today.

### Why So Many?
Different problems need different tools:
\`\`\`python
# Python: Great for AI, data science, scripting
model.fit(data)

# JavaScript: Web pages
document.getElementById("btn").click()

# C: Operating systems, embedded
malloc(sizeof(int) * 100)

# SQL: Databases
SELECT * FROM students WHERE grade > 90
\`\`\`

### Which Should You Learn First?
Python. It reads like English, has huge community support, and is used in almost every field.`,
    contentZh: `## 编程语言的家族树

### 时间线
- **1957年**：**FORTRAN**——第一个高级语言。"公式翻译"。至今还在科学计算中使用！
- **1959年**：**COBOL**——商业语言。至今处理着95%的ATM交易
- **1964年**：**BASIC**——"初学者通用符号指令代码"。让编程变得可及
- **1972年**：**C**——构建了一切的语言（见Ritchie & Thompson的故事）
- **1983年**：**C++**——带对象的C。驱动游戏、浏览器、操作系统
- **1991年**：**Python**——以Monty Python命名，成为世界上最流行的语言
- **1995年**：**Java**——"一次编写，到处运行"。驱动Android和企业应用
- **1995年**：**JavaScript**——**10天**创造的。现在整个网页都靠它
- **2009年**：**Go**——Google的云服务语言
- **2010年**：**Rust**——内存安全的系统编程
- **2014年**：**Swift**——Apple的iOS/macOS语言

### 有多少种语言？
已经创造了超过**700种**编程语言。大多数被遗忘了，但大约20-30种今天广泛使用。

### 为什么这么多？
不同的问题需要不同的工具：
\`\`\`python
# Python：适合AI、数据科学、脚本
model.fit(data)

# JavaScript：网页
document.getElementById("btn").click()

# C：操作系统、嵌入式
malloc(sizeof(int) * 100)

# SQL：数据库
SELECT * FROM students WHERE grade > 90
\`\`\`

### 应该先学哪个？
Python。它读起来像英语，有庞大的社区支持，几乎每个领域都在用。`,
    funFacts: [
      "JavaScript was created by Brendan Eich in just 10 days in 1995. It was originally called 'Mocha,' then 'LiveScript,' then 'JavaScript' (to ride Java's popularity).",
      "COBOL, created in 1959, still runs most of the world's banking systems. There are more lines of COBOL in use today than any other language.",
    ],
    funFactsZh: [
      "JavaScript由Brendan Eich在1995年仅用10天创建。它最初叫'Mocha'，然后叫'LiveScript'，最后改名'JavaScript'（蹭Java的热度）。",
      "1959年创建的COBOL至今运行着世界上大多数银行系统。今天在使用的COBOL代码行数比任何其他语言都多。",
    ],
  },
  {
    id: "stack-overflow",
    title: "Stack Overflow: Programmer's Lifeline",
    titleZh: "Stack Overflow：程序员的救命稻草",
    hook: "The website that saved millions of deadlines — and taught a generation to code.",
    hookZh: "拯救了无数deadline的网站——培养了一代程序员。",
    category: "software",
    year: 2008,
    readMinutes: 3,
    tags: ["community", "q-and-a", "culture"],
    emoji: "📚",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg",
    imageCaption: "Stack Overflow logo",
    content: `## Copy-Paste Engineering

**Stack Overflow** launched in 2008, created by **Jeff Atwood** and **Joel Spolsky**. It's a Q&A site for programmers, and it changed everything.

### The Impact
- 100+ million monthly visitors
- 23+ million questions asked
- 35+ million answers
- Available in multiple languages

### The Programmer's Workflow (Honest Version)
1. Try to write code
2. Get an error
3. Copy the error message
4. Paste it into Google
5. Click the Stack Overflow link
6. Copy the top answer
7. It works!
8. Move on without fully understanding why

This is SO common that there are memes about it. "I'm not a programmer, I'm a Stack Overflow search specialist."

### The Culture
Stack Overflow has a reputation system (karma points). Top contributors are treated like celebrities in the dev world. But it's also known for being harsh to beginners — "duplicate question!" "read the docs!" 

### The AI Challenge
Since ChatGPT arrived in 2022, Stack Overflow's traffic dropped ~50%. Many programmers now ask AI instead. Stack Overflow responded by building their own AI features.

\`\`\`python
# The most viewed Python question on SO:
# "How do I merge two dictionaries?"
a = {"x": 1}
b = {"y": 2}
merged = {**a, **b}  # 16 million views for this!
\`\`\``,
    contentZh: `## 复制粘贴工程学

**Stack Overflow**于2008年上线，由**Jeff Atwood**和**Joel Spolsky**创建。它是程序员的问答网站，改变了一切。

### 影响力
- 每月1亿+访问者
- 2300万+个问题
- 3500万+个回答
- 支持多种语言

### 程序员的真实工作流程（诚实版）
1. 尝试写代码
2. 报错
3. 复制错误消息
4. 粘贴到Google
5. 点Stack Overflow的链接
6. 复制最高票答案
7. 能用了！
8. 在完全不理解为什么的情况下继续

这太常见了，都成梗了。"我不是程序员，我是Stack Overflow搜索专家。"

### 文化
Stack Overflow有声望系统（积分）。顶级贡献者在开发者圈子里像名人。但它也以对新手苛刻著称——"重复问题！""去看文档！"

### AI的挑战
自从2022年ChatGPT出现后，Stack Overflow的流量下降了约50%。很多程序员现在问AI了。Stack Overflow回应说要建自己的AI功能。

\`\`\`python
# SO上浏览量最高的Python问题：
# "怎么合并两个字典？"
a = {"x": 1}
b = {"y": 2}
merged = {**a, **b}  # 1600万次浏览就为了这个！
\`\`\``,
    funFacts: [
      "The name 'Stack Overflow' is a programming term for when a program runs out of memory — a common bug that frustrates programmers.",
      "The most upvoted question on Stack Overflow is 'Why is processing a sorted array faster than processing an unsorted array?' with 27,000+ upvotes.",
    ],
    funFactsZh: [
      "'Stack Overflow'（栈溢出）是一个编程术语，指程序耗尽内存——一个常让程序员崩溃的bug。",
      "Stack Overflow上投票最高的问题是'为什么处理排序数组比处理未排序数组快？'，有27000+赞。",
    ],
  },
  {
    id: "agile-vs-waterfall",
    title: "Agile vs Waterfall",
    titleZh: "Agile vs Waterfall：方法论之战",
    hook: "In 2001, 17 programmers met at a ski resort and changed how software is built.",
    hookZh: "2001年，17个程序员在滑雪度假村碰面，改变了软件的构建方式。",
    category: "software",
    year: 2001,
    readMinutes: 3,
    tags: ["methodology", "agile", "management"],
    emoji: "🔄",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum_process.svg",
    imageCaption: "Agile methodology",
    content: `## How to Build Software: The Great Debate

### Waterfall (The Old Way)
Like building a house — complete each phase before starting the next:
1. Requirements → 2. Design → 3. Build → 4. Test → 5. Deploy

Problem: What if you realize in Step 4 that Step 1 was wrong? Too late — go back to start!

### The Agile Manifesto (2001)
17 frustrated developers met at the Snowbird ski resort in Utah. They wrote a manifesto with 4 core values:

1. **People** over processes
2. **Working software** over documentation
3. **Collaboration** over contracts
4. **Responding to change** over following a plan

### Agile in Practice
Instead of building everything at once, work in 2-week **"sprints"**:
- Sprint 1: Build login page
- Sprint 2: Build user profile
- Sprint 3: Fix bugs, add search
- (Get feedback, adjust, repeat)

### Scrum (Popular Agile Method)
- **Daily standup**: 15-min meeting — "What did you do? What will you do? Any blockers?"
- **Sprint review**: Demo what you built
- **Retrospective**: What went well? What didn't?

### The Reality
Most teams today use some form of Agile. But the debate continues — some say Agile has become the very bureaucracy it was meant to replace!`,
    contentZh: `## 怎么造软件：大辩论

### 瀑布模型（传统方式）
像盖房子——完成每个阶段才能开始下一个：
1. 需求 → 2. 设计 → 3. 构建 → 4. 测试 → 5. 部署

问题：如果你在第4步发现第1步搞错了怎么办？太晚了——从头来！

### 敏捷宣言（2001年）
17个受够了的开发者在犹他州Snowbird滑雪度假村碰面。他们写了一个包含4个核心价值观的宣言：

1. **人**重于流程
2. **能用的软件**重于文档
3. **协作**重于合同
4. **响应变化**重于遵循计划

### 敏捷实践
不是一次性构建所有东西，而是以2周为一个**"冲刺"**（Sprint）：
- 冲刺1：做登录页面
- 冲刺2：做用户资料
- 冲刺3：修bug，加搜索
- （获取反馈，调整，重复）

### Scrum（流行的敏捷方法）
- **每日站会**：15分钟会议——"你做了什么？要做什么？有什么障碍？"
- **冲刺评审**：演示你做的东西
- **回顾会**：什么做得好？什么不好？

### 现实
今天大多数团队都用某种形式的敏捷。但争论还在继续——有人说敏捷已经变成了它本来要取代的那种官僚主义！`,
    funFacts: [
      "The Agile Manifesto was written in just 2 days at a ski resort. Most of the time was spent skiing.",
      "Studies show that Agile projects are 28% more successful than Waterfall projects, but 'success' is hard to define!",
    ],
    funFactsZh: [
      "敏捷宣言在滑雪度假村只用了2天就写完了。大部分时间都在滑雪。",
      "研究表明敏捷项目比瀑布项目成功率高28%，但'成功'很难定义！",
    ],
  },

  // ============ INTERNET ============
  {
    id: "email-invention",
    title: "Email: The Killer App",
    titleZh: "Email的发明",
    hook: "The most important internet application was a side project nobody planned.",
    hookZh: "最重要的互联网应用是一个没人计划的副项目。",
    category: "internet",
    year: 1971,
    readMinutes: 3,
    tags: ["email", "arpanet", "communication"],
    emoji: "📬",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28Apple%29_logo.png",
    imageCaption: "Email icon",
    content: `## The Accidental Revolution

In 1971, **Ray Tomlinson** was working on ARPANET and decided to see if he could send a message between two computers sitting next to each other. He could!

He chose **@** to separate user names from computer names (see the @ story!), and the first network email was born.

### Why Email Won
ARPANET was designed for remote computing and file transfers. Nobody planned for messaging. But within two years, **75% of all ARPANET traffic was email**. People just wanted to talk to each other!

### Email Milestones
- **1971**: First network email (Tomlinson)
- **1976**: Queen Elizabeth II sends an email
- **1991**: First email sent from space (shuttle Atlantis)
- **1996**: Hotmail launches (free web email!)
- **2004**: Gmail launches with 1 GB storage (100x more than Hotmail)
- **2024**: 350+ billion emails sent per DAY

### The Spam Problem
The first spam email was sent in 1978 to 393 ARPANET users, advertising a new computer. People were FURIOUS. Today, ~45% of all email is spam.

### Email vs Everything
Despite Slack, Teams, WhatsApp, and dozens of messaging apps, email refuses to die. It's still how most business communication happens.`,
    contentZh: `## 意外的革命

1971年，**Ray Tomlinson**（雷·汤姆林森）在ARPANET上工作，决定试试能不能在旁边两台电脑之间发消息。成功了！

他选了**@**来分隔用户名和计算机名（见@的故事！），第一封网络电子邮件就诞生了。

### 为什么Email赢了
ARPANET是为远程计算和文件传输设计的。没人计划过消息功能。但两年内，**75%的ARPANET流量都是电子邮件**。人们就是想互相聊天！

### Email里程碑
- **1971年**：第一封网络邮件（Tomlinson）
- **1976年**：英国女王伊丽莎白二世发了一封邮件
- **1991年**：第一封从太空发的邮件（亚特兰蒂斯号航天飞机）
- **1996年**：Hotmail上线（免费网页邮箱！）
- **2004年**：Gmail上线，1GB存储（比Hotmail多100倍）
- **2024年**：每天发送3500亿+封邮件

### 垃圾邮件问题
第一封垃圾邮件在1978年发给了393个ARPANET用户，推销一台新电脑。人们气疯了。今天，约45%的邮件都是垃圾邮件。

### Email vs 一切
尽管有Slack、Teams、微信和几十种消息应用，Email拒绝消亡。它仍然是大多数商业沟通的方式。`,
    funFacts: [
      "Ray Tomlinson doesn't remember what the first email said. 'It was something like QWERTYUIOP,' he recalled.",
      "The first email sent from space said: 'Hello Earth! Greetings from the STS-43 Crew. This is the first AppleLink from space.'",
    ],
    funFactsZh: [
      "Ray Tomlinson不记得第一封邮件写了什么。'大概是QWERTYUIOP之类的，'他回忆说。",
      "从太空发的第一封邮件写的是：'你好地球！来自STS-43机组的问候。这是来自太空的第一封AppleLink邮件。'",
    ],
  },
  {
    id: "browser-wars",
    title: "Netscape vs IE: The First Browser War",
    titleZh: "Netscape vs IE：第一次浏览器大战",
    hook: "Microsoft nearly killed the first web browser — and got sued by the US government for it.",
    hookZh: "微软差点杀死了第一个网页浏览器——美国政府因此起诉了微软。",
    category: "internet",
    year: 1995,
    readMinutes: 3,
    tags: ["browser", "microsoft", "netscape", "antitrust"],
    emoji: "🌊",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Netscape_Navigator_logo_%281994-2007%29.png",
    imageCaption: "Netscape Navigator logo",
    content: `## The War for the Web

### Netscape Navigator
In 1994, **Marc Andreessen** (who built Mosaic at UIUC!) co-founded Netscape. Their browser, **Netscape Navigator**, was the gateway to the web. By 1995, it had **80% market share**.

Netscape's IPO in August 1995 was legendary — the stock doubled on day one. Andreessen (age 24) was on the cover of Time magazine, barefoot.

### Microsoft Strikes Back
Bill Gates saw the web as a threat. Microsoft bundled **Internet Explorer** FREE with Windows. If every PC comes with a browser, why download Netscape?

### The Nuclear Option
Microsoft also pressured PC manufacturers NOT to include Netscape, and designed Windows to work better with IE. Netscape's market share plummeted:
- 1995: 80% Netscape
- 1999: 70% Internet Explorer
- 2002: Netscape was essentially dead

### The Lawsuit
The US Department of Justice sued Microsoft for antitrust violations in 1998. The trial revealed internal emails where Microsoft executives discussed "cutting off Netscape's air supply."

### The Phoenix
Netscape open-sourced its code before dying, creating **Mozilla**. Mozilla later built **Firefox** (2004), which challenged IE. Then **Chrome** (2008) came and now dominates with 65% market share.

The web won. No single company controls it.`,
    contentZh: `## 争夺网络的战争

### Netscape Navigator
1994年，**Marc Andreessen**（就是在UIUC做Mosaic的那个！）联合创立了Netscape。他们的浏览器**Netscape Navigator**是通往网络的大门。到1995年，它占了**80%的市场份额**。

Netscape 1995年8月的IPO是传奇——股价第一天就翻倍。Andreessen（24岁）光着脚登上了《时代》杂志封面。

### 微软反击
比尔·盖茨视网络为威胁。微软把**Internet Explorer**免费捆绑在Windows里。如果每台电脑自带浏览器，谁还去下载Netscape？

### 核选项
微软还施压PC厂商不要预装Netscape，并让Windows和IE配合得更好。Netscape的市场份额暴跌：
- 1995年：80% Netscape
- 1999年：70% Internet Explorer
- 2002年：Netscape基本死了

### 诉讼
美国司法部在1998年以反垄断罪起诉微软。审判中曝光了内部邮件，微软高管讨论要"切断Netscape的氧气供应"。

### 凤凰涅槃
Netscape在死前把代码开源了，创建了**Mozilla**。Mozilla后来做了**Firefox**（2004），挑战了IE。然后**Chrome**（2008）来了，现在以65%的市场份额称霸。

网络赢了。没有一家公司能控制它。`,
    funFacts: [
      "Marc Andreessen built Mosaic (the first popular web browser) while a student at UIUC — earning $6.85/hour!",
      "Internet Explorer's peak market share was 95% in 2003. Microsoft finally killed IE in 2022, replacing it with Edge.",
    ],
    funFactsZh: [
      "Marc Andreessen在UIUC读书时做了Mosaic（第一个流行的网页浏览器）——时薪6.85美元！",
      "Internet Explorer在2003年达到95%的市场份额峰值。微软终于在2022年杀死了IE，用Edge取代了它。",
    ],
  },
  {
    id: "social-networks",
    title: "Social Networks: The Timeline",
    titleZh: "社交网络的诞生",
    hook: "From BBS to TikTok — how humans connected online over 40 years.",
    hookZh: "从BBS到TikTok——人类40年的在线社交进化。",
    category: "internet",
    year: 2004,
    yearLabel: "1978–2020s",
    readMinutes: 3,
    tags: ["social-media", "history", "culture"],
    emoji: "👥",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2023_Facebook_icon.svg",
    imageCaption: "Facebook logo",
    content: `## Connecting the World, One Platform at a Time

### The Timeline
- **1978**: BBS (Bulletin Board Systems) — dial-in message boards
- **1997**: Six Degrees — first "friend" connections online
- **1999**: **ICQ** / MSN Messenger — real-time chat
- **2003**: **MySpace** — the first big social network. Custom profiles with glittery backgrounds and auto-playing music
- **2004**: **Facebook** — started at Harvard, then took over the world
- **2005**: **YouTube** — "Broadcast Yourself"
- **2006**: **Twitter** — 140 characters changed news forever
- **2010**: **Instagram** — photos + filters
- **2011**: **Snapchat** — disappearing messages
- **2016**: **TikTok (Douyin)** — short videos conquered the planet
- **2022**: **BeReal** — "be authentic" (remember this one?)

### The Numbers (2024)
- Facebook: 3.0 billion monthly users
- YouTube: 2.5 billion
- Instagram: 2.0 billion
- TikTok: 1.5 billion
- That's more than half the world's population!

### The Dark Side
Social media connects us but also:
- 😰 Increases anxiety and FOMO
- 🤖 Enables misinformation
- ⏰ Is designed to be addictive
- 🔒 Raises privacy concerns

Understanding how these platforms work (algorithms, engagement metrics, data collection) is an important part of digital literacy.`,
    contentZh: `## 一个平台一个平台地连接世界

### 时间线
- **1978年**：BBS（电子公告板）——拨号留言板
- **1997年**：Six Degrees——第一个在线"好友"连接
- **1999年**：**ICQ** / MSN Messenger——实时聊天
- **2003年**：**MySpace**——第一个大型社交网络。可以自定义闪闪发光的主页背景和自动播放音乐
- **2004年**：**Facebook**——从哈佛起步，然后征服了世界
- **2005年**：**YouTube**——"传播你自己"
- **2006年**：**Twitter**——140个字符改变了新闻
- **2010年**：**Instagram**——照片+滤镜
- **2011年**：**Snapchat**——阅后即焚
- **2016年**：**TikTok（抖音）**——短视频征服了地球
- **2022年**：**BeReal**——"做真实的自己"（还记得这个吗？）

### 数据（2024年）
- Facebook：30亿月活用户
- YouTube：25亿
- Instagram：20亿
- TikTok：15亿
- 这是全世界一半以上的人口！

### 阴暗面
社交媒体连接了我们，但也：
- 😰 增加焦虑和FOMO（错过恐惧症）
- 🤖 助长虚假信息
- ⏰ 被设计成让人上瘾
- 🔒 引发隐私问题

理解这些平台如何运作（算法、互动指标、数据收集）是数字素养的重要部分。`,
    funFacts: [
      "Mark Zuckerberg built the first version of Facebook in his Harvard dorm room in just 2 weeks.",
      "The average person spends about 2.5 hours per day on social media. That's over 900 hours per year!",
    ],
    funFactsZh: [
      "扎克伯格在哈佛宿舍里只用了2周就做出了Facebook的第一个版本。",
      "普通人每天在社交媒体上花约2.5小时。一年就是900多小时！",
    ],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing: Other People's Computers",
    titleZh: "云计算：别人的电脑",
    hook: "'The cloud' is just a fancy name for someone else's computer in a warehouse.",
    hookZh: "'云'只是'仓库里别人的电脑'的花哨说法。",
    category: "internet",
    year: 2006,
    readMinutes: 3,
    tags: ["cloud", "aws", "infrastructure"],
    emoji: "☁️",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    imageCaption: "AWS logo",
    content: `## Why Nobody Buys Servers Anymore

### Before the Cloud
Want to launch a website? You need to:
1. Buy a server ($5,000+)
2. Set up a room with cooling
3. Install and configure everything
4. Hope it doesn't crash at 3 AM
5. If you get popular, buy MORE servers

### After the Cloud
1. Go to AWS/Azure/Google Cloud
2. Click "create server"
3. Done. Scale up or down anytime.

### Amazon Web Services (AWS)
In 2006, Amazon realized it had massive spare computing capacity (built for holiday shopping peaks). They started renting it out. AWS was born.

Today AWS powers:
- Netflix, Airbnb, NASA, the CIA
- ~33% of the entire internet's infrastructure

### How It Changed Everything
- **Startups**: Launch with $0 infrastructure cost (pay as you go)
- **Scaling**: Handle 10 or 10 million users without buying hardware
- **Global**: Deploy to data centers worldwide in minutes
- **Netflix**: Streams to 250 million subscribers using AWS

### The Joke
There's a famous programmer saying:

> "There is no cloud. It's just someone else's computer."

And it's true! "Cloud" sounds magical, but it's just very well-managed servers in very large warehouses.`,
    contentZh: `## 为什么没人再买服务器了

### 云之前
想上线一个网站？你需要：
1. 买服务器（5000美元+）
2. 设置一个有制冷的房间
3. 安装和配置一切
4. 祈祷凌晨3点不会崩
5. 如果火了，再买更多服务器

### 云之后
1. 打开AWS/Azure/Google Cloud
2. 点"创建服务器"
3. 搞定。随时扩容或缩容。

### Amazon Web Services (AWS)
2006年，亚马逊发现自己有大量闲置计算能力（为假日购物高峰建的）。他们开始出租。AWS诞生了。

今天AWS驱动着：
- Netflix、Airbnb、NASA、CIA
- 整个互联网基础设施的约33%

### 如何改变了一切
- **创业公司**：零基础设施成本启动（按需付费）
- **扩展**：10个或1000万个用户都不用买硬件
- **全球化**：几分钟内部署到全球数据中心
- **Netflix**：用AWS给2.5亿订阅者提供流媒体

### 段子
有一句著名的程序员名言：

> "没有什么云。只是别人的电脑。"

这是真的！"云"听起来很神奇，但它只是管理得很好的服务器，放在很大的仓库里。`,
    funFacts: [
      "AWS earns more profit for Amazon than their entire e-commerce business!",
      "The world's largest data centers can be as big as 60 football fields and use as much electricity as a small city.",
    ],
    funFactsZh: [
      "AWS给亚马逊赚的利润比整个电商业务还多！",
      "世界上最大的数据中心可以有60个足球场那么大，用电量相当于一个小城市。",
    ],
  },
  {
    id: "dot-com-bubble",
    title: "The Dot-Com Bubble",
    titleZh: "互联网泡沫",
    hook: "In 2000, the internet went crazy — companies with no profits were worth billions.",
    hookZh: "2000年互联网疯了——没有利润的公司价值数十亿。",
    category: "internet",
    year: 2000,
    readMinutes: 3,
    tags: ["bubble", "startup", "history", "economy"],
    emoji: "🫧",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Nasdaq_IXIC_-_dot-com_bubble.png",
    imageCaption: "NASDAQ during the dot-com bubble",
    content: `## When Everyone Lost Their Minds

### The Boom (1995–2000)
The web was new and exciting. Investors poured money into anything with ".com" in its name. Companies didn't need profits — just a website and a dream.

### The Craziest Examples
- **Pets.com**: Sold pet food online (at a loss). Spent $11.8 million on a Super Bowl ad. Went bankrupt 9 months later.
- **Webvan**: Online grocery delivery. Raised $375 million. Dead in 2 years.
- **Boo.com**: Fashion e-commerce. Burned through $188 million in 18 months.
- **TheGlobe.com**: IPO rose 606% on day one. Worth $0 two years later.

### The Crash (March 2000)
The NASDAQ stock market peak hit 5,048 in March 2000, then collapsed. By October 2002, it had fallen to 1,114 — a **78% drop**.

- $5 TRILLION in market value evaporated
- Thousands of companies went bankrupt
- Silicon Valley offices emptied overnight

### The Survivors
Some companies made it through: **Amazon** (stock fell 90% but survived), **eBay**, **Google** (launched during the crash!). These companies had actual business models.

### The Lesson
Technology changes the world — but that doesn't mean every tech company is a good investment. Fundamentals matter.

History rhymed with the 2021–2022 crypto/NFT crash. Bubbles happen when hype outpaces reality.`,
    contentZh: `## 所有人都疯了的时候

### 繁荣期（1995–2000）
网络是新鲜刺激的。投资者给所有名字里带".com"的公司砸钱。公司不需要利润——只要有个网站和一个梦想。

### 最疯狂的例子
- **Pets.com**：在网上卖宠物食品（亏本卖）。花了1180万美元打超级碗广告。9个月后破产。
- **Webvan**：在线杂货配送。融了3.75亿美元。2年后死了。
- **Boo.com**：时尚电商。18个月烧光1.88亿美元。
- **TheGlobe.com**：IPO首日涨了606%。两年后一文不值。

### 崩溃（2000年3月）
纳斯达克在2000年3月达到5048点的峰值，然后崩了。到2002年10月，跌到了1114——**下跌78%**。

- 5万亿美元市值蒸发
- 数千家公司破产
- 硅谷的办公室一夜之间人去楼空

### 幸存者
一些公司挺过来了：**亚马逊**（股票跌了90%但活了下来）、**eBay**、**Google**（在崩溃期间创立的！）。这些公司有真正的商业模式。

### 教训
技术改变世界——但这不意味着每家科技公司都值得投资。基本面很重要。

历史在2021-2022年的加密货币/NFT崩溃中重演了。泡沫发生在炒作超过现实的时候。`,
    funFacts: [
      "Amazon's stock fell from $107 to $7 during the crash. Jeff Bezos lost 90% of his paper wealth. He kept going. Amazon is now worth $2 trillion.",
      "During the boom, a company called 'Internet' changed its name from 'Zapata Corporation' (an oil company) and its stock rose 1,100% in one day.",
    ],
    funFactsZh: [
      "亚马逊的股票在崩溃期间从107美元跌到7美元。贝索斯账面财富损失了90%。但他坚持下来了。亚马逊现在市值2万亿美元。",
      "繁荣期间，一家叫'Internet'的公司（原名Zapata Corporation，一家石油公司）改了名字，股票一天涨了1100%。",
    ],
  },

  // ============ AI ============
  {
    id: "ai-winters",
    title: "AI Winters: When Hope Froze",
    titleZh: "AI寒冬：希望冻结的时候",
    hook: "Twice, the world gave up on AI. Twice, it came roaring back.",
    hookZh: "世界两次放弃了AI。两次，它又卷土重来。",
    category: "ai",
    year: 1974,
    yearLabel: "1974 & 1987",
    readMinutes: 4,
    tags: ["ai", "history", "hype-cycle"],
    emoji: "❄️",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Gartner_Hype_Cycle.svg",
    imageCaption: "The Gartner Hype Cycle",
    content: `## The Hype Cycle of AI

### First Summer (1956–1974)
After the Dartmouth conference, optimism was sky-high. Researchers promised thinking machines within a decade. Governments poured in money.

But progress stalled. AI couldn't handle the real world — too complex, too ambiguous, not enough computing power.

### First Winter (1974–1980)
The UK government published the **Lighthill Report** (1973) declaring AI research a failure. Funding was slashed worldwide. Researchers couldn't even use the word "AI" in grant proposals — they called it "machine learning" or "pattern recognition" instead.

### Second Summer (1980–1987)
**Expert systems** — programs with hand-coded rules for specific tasks — seemed to work! Companies invested billions. Japan launched the ambitious "Fifth Generation Computer" project.

### Second Winter (1987–1993)
Expert systems were expensive, brittle, and couldn't learn. Japan's project failed. The AI bubble burst again.

### The Final Spring (2012–Present)
What changed? Three things:
1. **Big data**: The internet created massive training datasets
2. **GPU computing**: Graphics cards made neural networks practical
3. **Algorithms**: Deep learning breakthroughs (AlexNet, 2012)

This time feels different. AI is generating real value — but history teaches us to be cautious about hype.

### The Pattern
\`\`\`
Hype → Overpromise → Disappointment → Winter → Quiet progress → Breakthrough → Repeat
\`\`\``,
    contentZh: `## AI的炒作周期

### 第一个夏天（1956–1974）
达特茅斯会议之后，乐观情绪高涨。研究者承诺十年内造出会思考的机器。政府大量投入资金。

但进展停滞了。AI处理不了现实世界——太复杂、太模糊、算力不够。

### 第一个寒冬（1974–1980）
英国政府发布了**Lighthill报告**（1973），宣告AI研究失败。全球资金大幅削减。研究者甚至不敢在基金申请中用"AI"这个词——他们改叫"机器学习"或"模式识别"。

### 第二个夏天（1980–1987）
**专家系统**——为特定任务手工编码规则的程序——似乎管用了！企业投入数十亿。日本启动了雄心勃勃的"第五代计算机"计划。

### 第二个寒冬（1987–1993）
专家系统昂贵、脆弱，而且不能学习。日本的计划失败了。AI泡沫再次破裂。

### 最后的春天（2012–至今）
什么变了？三件事：
1. **大数据**：互联网创造了海量训练数据集
2. **GPU计算**：显卡让神经网络变得实用
3. **算法**：深度学习突破（AlexNet，2012）

这次感觉不同了。AI在创造真正的价值——但历史教我们对炒作保持警惕。

### 规律
\`\`\`
炒作 → 过度承诺 → 失望 → 寒冬 → 默默进步 → 突破 → 重复
\`\`\``,
    funFacts: [
      "During the first AI winter, some researchers received death threats from people who believed they had wasted taxpayer money.",
      "The term 'AI winter' was coined by analogy with 'nuclear winter' — a period when the sun (funding) is blocked and everything dies.",
    ],
    funFactsZh: [
      "在第一个AI寒冬期间，一些研究者收到了死亡威胁，来自认为他们浪费纳税人钱的人。",
      "'AI寒冬'这个词借用了'核冬天'的比喻——太阳（资金）被遮挡，一切都死了。",
    ],
    relatedCourse: "ai-ml",
  },
  {
    id: "imagenet-revolution",
    title: "ImageNet: The Data Revolution",
    titleZh: "ImageNet和深度学习革命",
    hook: "In 2012, a neural network shocked the world — and proved that data + GPUs = magic.",
    hookZh: "2012年，一个神经网络震惊了世界——证明了数据+GPU=魔法。",
    category: "ai",
    year: 2012,
    readMinutes: 3,
    tags: ["imagenet", "deep-learning", "alexnet"],
    emoji: "📊",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Geoffrey_Hinton_-_NIPS_2013_%28cropped%29.jpg",
    imageCaption: "Geoffrey Hinton, Godfather of AI",
    content: `## The Day Deep Learning Won

Every year from 2010 to 2017, teams competed in the **ImageNet Large Scale Visual Recognition Challenge** — identify objects in images from 1,000 categories.

### Before 2012
The best algorithms used hand-crafted features (edges, colors, textures) and got about **25% error rate**. Progress was slow and incremental.

### The AlexNet Moment (2012)
**Alex Krizhevsky**, supervised by **Geoffrey Hinton** at the University of Toronto, entered a deep neural network trained on two NVIDIA GPUs. Result: **15.3% error** — crushing the second-place team at 26.2%.

The gap was so large that the AI community collectively said: "Wait, what?!"

### What Made It Work
1. **ImageNet data**: 1.2 million labeled training images (thanks, Fei-Fei Li!)
2. **GPUs**: Parallel processing made training feasible
3. **ReLU activation**: A simple math trick that helped networks learn faster
4. **Dropout**: Randomly turning off neurons during training to prevent overfitting

### The Cascade
After AlexNet, deep learning exploded:
- 2014: GoogLeNet (6.7% error)
- 2015: ResNet (3.6% error — **better than humans** at ~5%!)

This wasn't just about image recognition. It proved deep learning works — launching the AI revolution we're living through today.`,
    contentZh: `## 深度学习获胜的那一天

从2010到2017年，每年都有团队参加**ImageNet大规模视觉识别挑战赛**——从1000个类别中识别图像中的物体。

### 2012年之前
最好的算法用手工设计的特征（边缘、颜色、纹理），错误率大约**25%**。进步缓慢而渐进。

### AlexNet时刻（2012）
多伦多大学**Geoffrey Hinton**指导的**Alex Krizhevsky**提交了一个在两块NVIDIA GPU上训练的深度神经网络。结果：**15.3%错误率**——把第二名的26.2%远远甩在身后。

差距大到AI圈集体说："等等，什么？！"

### 什么让它成功了
1. **ImageNet数据**：120万张标注的训练图片（感谢李飞飞！）
2. **GPU**：并行处理让训练变得可行
3. **ReLU激活函数**：一个简单的数学技巧帮助网络学得更快
4. **Dropout**：训练时随机关闭神经元防止过拟合

### 连锁反应
AlexNet之后，深度学习爆发了：
- 2014年：GoogLeNet（6.7%错误率）
- 2015年：ResNet（3.6%错误率——**比人类好**，人类约5%！）

这不只是关于图像识别。它证明了深度学习有效——开启了我们正在经历的AI革命。`,
    funFacts: [
      "Geoffrey Hinton, Alex Krizhevsky, and Ilya Sutskever sold their AI startup to Google for $44 million right after AlexNet's victory.",
      "Hinton won the 2024 Nobel Prize in Physics for foundational work in neural networks. He's often called the 'Godfather of AI.'",
    ],
    funFactsZh: [
      "AlexNet获胜后，Geoffrey Hinton、Alex Krizhevsky和Ilya Sutskever把他们的AI创业公司以4400万美元卖给了Google。",
      "Hinton因神经网络的奠基性工作获得了2024年诺贝尔物理学奖。他常被称为'AI教父'。",
    ],
    relatedCourse: "ai-ml",
  },
  {
    id: "self-driving",
    title: "Self-Driving Cars: The Long Road",
    titleZh: "自动驾驶简史",
    hook: "We've been promised self-driving cars for 20 years. Where are they?",
    hookZh: "我们被承诺自动驾驶已经20年了。它们在哪？",
    category: "ai",
    year: 2004,
    yearLabel: "2004–2024",
    readMinutes: 3,
    tags: ["autonomous", "tesla", "ai", "robotics"],
    emoji: "🚗",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Waymo_Chrysler_Pacifica_in_Los_Altos%2C_2017.jpg",
    imageCaption: "A Waymo self-driving car",
    content: `## Always 5 Years Away

### DARPA Grand Challenge (2004)
The US military offered $1 million for a self-driving car that could complete a 142-mile desert course. The best car made it... **7.4 miles** before getting stuck. Nobody won.

### 2005 Challenge
The next year, **5 vehicles** finished the course. Stanley (Stanford) won. The technology worked!

### The Hype Train
- 2015: Tesla launches Autopilot. Elon Musk promises fully self-driving "next year"
- 2016: Uber starts self-driving taxi tests
- 2018: Self-driving Uber kills a pedestrian in Arizona. Testing paused nationwide.
- 2020: Waymo launches driverless taxis in Phoenix (limited area)
- 2023: Cruise (GM) robotaxi runs over a pedestrian in San Francisco. Service suspended.
- 2024: Waymo expanding slowly. Tesla still promising "next year."

### The Levels of Autonomy
- **Level 0**: No automation (you drive)
- **Level 1**: Cruise control
- **Level 2**: Lane keeping + adaptive cruise (Tesla Autopilot)
- **Level 3**: Car drives in some conditions (driver must be ready)
- **Level 4**: Fully autonomous in limited areas (Waymo)
- **Level 5**: Fully autonomous everywhere, any conditions ← WE'RE NOT HERE YET

### Why It's So Hard
Driving requires handling infinite edge cases: a ball rolling into the street (kid might follow!), construction zones, emergency vehicles, people doing unexpected things...

AI is great at the 99%. That last 1% is what kills people.`,
    contentZh: `## 永远还差5年

### DARPA大挑战（2004）
美国军方悬赏100万美元，要求自动驾驶汽车完成142英里的沙漠赛道。最好的车开了……**7.4英里**就卡住了。没人赢。

### 2005年挑战
第二年，**5辆车**完成了赛道。斯坦福的Stanley获胜。技术可行了！

### 炒作列车
- 2015年：特斯拉推出Autopilot。马斯克承诺"明年"全自动驾驶
- 2016年：Uber开始测试自动驾驶出租车
- 2018年：Uber的自动驾驶车在亚利桑那撞死一名行人。全国暂停测试。
- 2020年：Waymo在凤凰城推出无人出租车（限定区域）
- 2023年：Cruise（通用汽车）的机器人出租车在旧金山碾过一名行人。服务暂停。
- 2024年：Waymo缓慢扩展。特斯拉仍然承诺"明年"。

### 自动化等级
- **Level 0**：无自动化（你自己开）
- **Level 1**：定速巡航
- **Level 2**：车道保持+自适应巡航（特斯拉Autopilot）
- **Level 3**：某些条件下汽车自己开（驾驶员需随时准备）
- **Level 4**：限定区域完全自主（Waymo）
- **Level 5**：任何地方、任何条件完全自主 ← 我们还没到这里

### 为什么这么难
开车需要处理无穷无尽的边缘情况：一个球滚到路上（后面可能跟着小孩！）、施工区、救护车、人做出意外行为……

AI擅长处理99%的情况。致命的是最后那1%。`,
    funFacts: [
      "Waymo's self-driving cars have driven over 20 million miles on public roads — but still only operate in a few cities.",
      "The 2004 DARPA Grand Challenge's best vehicle (from Carnegie Mellon) caught fire after getting stuck on a rock.",
    ],
    funFactsZh: [
      "Waymo的自动驾驶汽车已经在公共道路上行驶了超过2000万英里——但仍然只在几个城市运营。",
      "2004年DARPA大挑战中表现最好的车（来自卡内基梅隆）卡在一块石头上后着火了。",
    ],
  },
  {
    id: "ai-art",
    title: "AI Art: Who Is the Artist?",
    titleZh: "AI艺术争议",
    hook: "When a machine creates a masterpiece, who deserves the credit?",
    hookZh: "当机器创造出杰作，谁该得到认可？",
    category: "ai",
    year: 2022,
    readMinutes: 3,
    tags: ["ai-art", "creativity", "ethics", "dall-e"],
    emoji: "🎨",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Th%C3%A9%C3%A2tre_D%27op%C3%A9ra_Spatial.png",
    imageCaption: "Théâtre D'opéra Spatial — AI art that won a competition",
    content: `## The Creativity Question

In September 2022, **Jason Allen** won first place in an art competition at the Colorado State Fair with "Théâtre D'opéra Spatial" — made entirely with **Midjourney** (an AI art tool). Artists were furious.

### The AI Art Tools
- **DALL-E** (OpenAI, 2022): Text-to-image generation
- **Midjourney**: Known for artistic, painterly quality
- **Stable Diffusion**: Open-source, runs locally
- **Sora** (OpenAI, 2024): Text-to-video

### How They Work
Trained on millions of images, these models learn patterns — what "sunset" looks like, what "impressionist style" means — and combine concepts in new ways.

### The Debate
**"Not real art":** AI does the creative work; it's trained on artists' work without permission; it devalues skill.

**"IS creative expression":** Humans choose prompts, curate output, make aesthetic decisions. Photography was once rejected as "not art" too.

### Legal Questions
- Can AI art be copyrighted? (Courts say: probably not)
- Should artists be compensated when AI trains on their work?
- Who owns the output?

These questions are being debated in courts worldwide right now.`,
    contentZh: `## 创造力之问

2022年9月，**Jason Allen** 用 **Midjourney**（AI绘图工具）创作的"太空歌剧院"在科罗拉多州博览会艺术比赛中获得第一名。艺术家们愤怒了。

### AI艺术工具
- **DALL-E**（OpenAI，2022）：文本生成图像
- **Midjourney**：以艺术性、绘画质感著称
- **Stable Diffusion**：开源，可以本地运行
- **Sora**（OpenAI，2024）：文本生成视频

### 工作原理
这些模型在数百万张图片上训练，学习模式——"日落"长什么样、"印象派风格"是什么意思——然后以新方式组合概念。

### 争论
**"不是真正的艺术"：** AI做了创造性工作；未经许可在艺术家作品上训练；贬低了技能的价值。

**"是创造性表达"：** 人类选择提示词、筛选输出、做审美决策。摄影曾经也被拒绝为"不是艺术"。

### 法律问题
- AI生成的作品能被版权保护吗？（法院说：可能不行）
- AI在艺术家作品上训练时，艺术家应该获得补偿吗？
- 谁拥有输出的作品？

这些问题正在全球法院中辩论。`,
    funFacts: [
      "Jason Allen spent 80+ hours refining his Midjourney prompts and selecting from hundreds of outputs. He argues that IS creative work.",
      "Getty Images sued Stability AI for training on 12 million copyrighted images without permission.",
    ],
    funFactsZh: [
      "Jason Allen花了80多个小时打磨Midjourney的提示词，从数百张输出中筛选。他认为这就是创造性工作。",
      "Getty Images起诉Stability AI未经许可在1200万张版权图片上训练。",
    ],
  },
  {
    id: "agi",
    title: "AGI: The Ultimate Goal",
    titleZh: "AGI：通用人工智能",
    hook: "We have narrow AI everywhere. But 'real' AI that thinks like a human? Still a dream.",
    hookZh: "窄AI到处都是。但像人类一样思考的'真正'AI？还是个梦。",
    category: "future",
    year: 2024,
    readMinutes: 4,
    tags: ["agi", "future", "philosophy"],
    emoji: "🧬",
    content: `## The Difference Between AI and AGI

### Narrow AI (What We Have Now)
Today's AI is incredible at SPECIFIC tasks:
- ChatGPT: Amazing at text, terrible at math
- AlphaGo: World champion at Go, can't play checkers
- Tesla Autopilot: Drives on highways, confused by unusual intersections

Each AI is a specialist. None can do EVERYTHING a human can.

### AGI (Artificial General Intelligence)
AGI would be a system that can:
- Learn ANY task a human can learn
- Transfer knowledge between domains
- Reason about novel situations
- Understand context and common sense

### How Far Are We?
Nobody knows! Estimates range from:
- **Optimists** (OpenAI, Elon Musk): 3-10 years
- **Moderates**: 20-50 years
- **Skeptics**: 100+ years or never

### The Challenges
1. **Common sense**: AI doesn't know that you can't put a cat in a microwave
2. **Transfer learning**: Mastering chess doesn't help with cooking
3. **Embodiment**: Understanding the physical world may require a body
4. **Consciousness**: Does AGI need to be conscious? What IS consciousness?

### The Risks
If AGI arrives, it would be the most transformative technology in human history. Some researchers (like those at the Alignment Research Center) worry about ensuring AGI is safe and beneficial.

> "The development of full artificial intelligence could spell the end of the human race." — Stephen Hawking`,
    contentZh: `## AI和AGI的区别

### 窄AI（我们现在有的）
今天的AI在特定任务上很厉害：
- ChatGPT：文字很牛，数学很烂
- AlphaGo：围棋世界冠军，不会下跳棋
- 特斯拉Autopilot：高速公路上能开，遇到不寻常的路口就懵了

每个AI都是专家。没有一个能做人类能做的所有事。

### AGI（通用人工智能）
AGI将是一个能够：
- 学习人类能学会的任何任务
- 在不同领域间迁移知识
- 对新情况进行推理
- 理解上下文和常识

### 还有多远？
没人知道！估计从：
- **乐观派**（OpenAI、马斯克）：3-10年
- **温和派**：20-50年
- **怀疑派**：100年以上或永远不会

### 挑战
1. **常识**：AI不知道你不能把猫放进微波炉
2. **迁移学习**：精通国际象棋对做饭没帮助
3. **具身性**：理解物理世界可能需要一个身体
4. **意识**：AGI需要有意识吗？意识到底是什么？

### 风险
如果AGI到来，它将是人类历史上最具变革性的技术。一些研究者担心确保AGI安全和有益。

> "完全人工智能的发展可能意味着人类的终结。" — 斯蒂芬·霍金`,
    funFacts: [
      "OpenAI, originally a non-profit, has raised over $10 billion (mostly from Microsoft) in the race toward AGI.",
      "The 'Chinese Room' thought experiment by John Searle argues that even if a computer perfectly simulates understanding, it still doesn't truly 'understand' anything.",
    ],
    funFactsZh: [
      "OpenAI最初是非营利组织，在通往AGI的竞赛中已筹集超过100亿美元（主要来自微软）。",
      "John Searle的'中文房间'思想实验认为，即使计算机完美模拟了理解，它仍然没有真正'理解'任何东西。",
    ],
  },
  {
    id: "space-programming",
    title: "Space Programming: Code for the Stars",
    titleZh: "太空编程",
    hook: "NASA's code requirements are out of this world — literally. One bug could kill astronauts.",
    hookZh: "NASA的代码要求超出这个世界——真的。一个bug可能杀死宇航员。",
    category: "future",
    year: 1969,
    yearLabel: "1969–2024",
    readMinutes: 3,
    tags: ["nasa", "space", "safety", "coding"],
    emoji: "🛸",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
    imageCaption: "NASA logo",
    content: `## Where Bugs Can Be Fatal

On Earth, a software bug means a crash or reboot. In space, a bug means people die. NASA's coding standards reflect this.

### NASA's Power of Ten Rules
1. No goto statements
2. All loops must have fixed upper bounds
3. No dynamic memory allocation after initialization
4. No function longer than 60 lines
5. At least 2 assertions per function
6. Data must be declared at the smallest scope
7. Return values must always be checked
8. Limited use of the preprocessor
9. Pointer use must be restricted
10. All code must compile with ALL warnings enabled — and have ZERO warnings

### Famous Space Software Bugs
- **Mariner 1** (1962): A missing hyphen in the code caused the rocket to go off course. It was destroyed 293 seconds after launch. Cost: $18.5 million.
- **Mars Climate Orbiter** (1999): One team used metric units, another used imperial. The spacecraft crashed into Mars.
- **Ariane 5** (1996): A 64-bit number was converted to 16-bit, causing overflow. The $370 million rocket self-destructed 37 seconds after launch.

### Mars Rover Code
The Mars rovers run on radiation-hardened processors slower than a 1990s computer. Curiosity's computer runs at 200 MHz with 256 MB RAM. But the software is rock-solid.

\`\`\`python
# Space code principle: ALWAYS handle errors
def fire_thruster(power):
    if power < 0 or power > 100:
        log_error("Invalid thruster power!")
        return False  # NEVER crash silently in space
    return execute_thruster(power)
\`\`\``,
    contentZh: `## Bug可能致命的地方

在地球上，软件bug意味着崩溃或重启。在太空中，bug意味着人会死。NASA的编码标准反映了这一点。

### NASA的十大准则
1. 不用goto语句
2. 所有循环必须有固定上限
3. 初始化后不进行动态内存分配
4. 函数不超过60行
5. 每个函数至少2个断言
6. 数据在最小作用域声明
7. 返回值必须检查
8. 限制预处理器使用
9. 限制指针使用
10. 所有代码必须在开启所有警告的情况下编译——并且零警告

### 著名太空软件Bug
- **Mariner 1**（1962）：代码中少了一个连字符导致火箭偏离航线。发射293秒后被摧毁。损失：1850万美元。
- **火星气候探测器**（1999）：一个团队用公制单位，另一个用英制。飞船撞上了火星。
- **Ariane 5**（1996）：64位数转换为16位导致溢出。3.7亿美元的火箭在发射37秒后自毁。

### 火星车代码
火星车运行在比1990年代电脑还慢的抗辐射处理器上。好奇号的电脑运行在200 MHz，256 MB内存。但软件极其可靠。

\`\`\`python
# 太空代码原则：永远处理错误
def fire_thruster(power):
    if power < 0 or power > 100:
        log_error("推进器功率无效！")
        return False  # 在太空中永远不要静默崩溃
    return execute_thruster(power)
\`\`\``,
    funFacts: [
      "NASA's space shuttle software had a bug rate of just 0.1 per 1,000 lines of code — compared to industry average of 15-50 bugs per 1,000 lines.",
      "The Voyager 1 spacecraft (launched 1977) is still running its original code in deep space, over 15 billion miles from Earth.",
    ],
    funFactsZh: [
      "NASA航天飞机软件的bug率仅为每1000行代码0.1个——而行业平均是每1000行15-50个bug。",
      "旅行者1号（1977年发射）至今仍在深空运行其原始代码，距地球超过150亿英里。",
    ],
  },
  {
    id: "dna-storage",
    title: "DNA Storage: Biology Meets Data",
    titleZh: "DNA存储",
    hook: "All of humanity's data could be stored in a room-sized container of DNA.",
    hookZh: "人类所有的数据可以存在一个房间大小的DNA容器里。",
    category: "future",
    year: 2012,
    readMinutes: 3,
    tags: ["dna", "storage", "biology", "future"],
    emoji: "🧬",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png",
    imageCaption: "DNA double helix structure",
    content: `## Storing Data in the Language of Life

DNA has been storing biological data for 3.8 billion years. Now scientists want to use it for digital data too.

### Why DNA?
- **Density**: 1 gram of DNA can store 215 petabytes (215 million GB)
- **Durability**: DNA survives thousands of years (we've read 700,000-year-old DNA!)
- **Efficiency**: No electricity needed for storage
- **Size**: ALL the world's data could fit in a room

### How It Works
Digital data is 0s and 1s. DNA has four bases: A, T, C, G. So you can encode:
- A = 00, T = 01, C = 10, G = 11

\`\`\`python
def text_to_dna(text):
    binary = ''.join(format(ord(c), '08b') for c in text)
    mapping = {'00': 'A', '01': 'T', '10': 'C', '11': 'G'}
    dna = ''
    for i in range(0, len(binary), 2):
        dna += mapping[binary[i:i+2]]
    return dna

print(text_to_dna("Hi"))  # "CTAACTA" (simplified)
\`\`\`

### Milestones
- **2012**: Harvard researchers stored a 53,000-word book in DNA
- **2017**: All 16 GB of Wikipedia's text encoded in DNA
- **2021**: DNA storage startup Catalog wrote the entire English Wikipedia in 12 hours

### The Catch
Reading and writing DNA is currently SLOW and EXPENSIVE. But costs are dropping fast — just like computers in the 1960s.`,
    contentZh: `## 用生命的语言存储数据

DNA已经存储生物数据38亿年了。现在科学家们想用它来存数字数据。

### 为什么选DNA？
- **密度**：1克DNA可以存储215 PB（2.15亿GB）
- **耐久性**：DNA能存活数千年（我们读过70万年前的DNA！）
- **效率**：存储不需要电
- **体积**：全世界所有数据可以装进一个房间

### 工作原理
数字数据是0和1。DNA有四个碱基：A、T、C、G。所以可以编码：
- A = 00, T = 01, C = 10, G = 11

\`\`\`python
def text_to_dna(text):
    binary = ''.join(format(ord(c), '08b') for c in text)
    mapping = {'00': 'A', '01': 'T', '10': 'C', '11': 'G'}
    dna = ''
    for i in range(0, len(binary), 2):
        dna += mapping[binary[i:i+2]]
    return dna

print(text_to_dna("Hi"))  # "CTAACTA"（简化版）
\`\`\`

### 里程碑
- **2012年**：哈佛研究者把一本53000字的书存进了DNA
- **2017年**：维基百科全部16GB文本被编码进DNA
- **2021年**：DNA存储创业公司Catalog用12小时写入了整个英文维基百科

### 问题
目前读写DNA很慢也很贵。但成本正在快速下降——就像1960年代的计算机一样。`,
    funFacts: [
      "Microsoft has a working prototype that can write and read DNA storage automatically. They plan to have a commercial product by 2030.",
      "A woolly mammoth's DNA survived 1.2 million years in Siberian permafrost. Try that with a USB drive!",
    ],
    funFactsZh: [
      "微软有一个能自动读写DNA存储的原型机。他们计划在2030年前推出商业产品。",
      "猛犸象的DNA在西伯利亚永久冻土中存活了120万年。你的U盘试试看！",
    ],
  },
  {
    id: "your-cs-story",
    title: "Your CS Story",
    titleZh: "你的CS故事",
    hook: "The greatest computing story hasn't been written yet — it's yours.",
    hookZh: "最伟大的计算故事还没被写出来——那是你的。",
    category: "future",
    year: 2025,
    readMinutes: 2,
    tags: ["you", "future", "inspiration"],
    emoji: "✨",
    content: `## This Page Is Blank. On Purpose.

Every story in this collection was made by someone who started knowing NOTHING about computers.

- Ada Lovelace was a teenager who loved math
- Grace Hopper was a teacher who joined the Navy at 37
- Linus Torvalds was a college student with a hobby project
- Fei-Fei Li was an immigrant working in a laundromat

They didn't know they'd change the world. They just started.

### What's YOUR Story?

Maybe you'll:
- 🎮 Create the next hit game
- 🧬 Use AI to cure a disease
- 🌍 Build technology that helps millions
- 🚀 Write code that runs on Mars
- 🎨 Create an entirely new art form
- 🔐 Make the internet safer for everyone
- 💡 Invent something nobody's thought of yet

### Start Writing

\`\`\`python
# Your story starts with a single line of code
name = input("What's your name? ")
dream = input("What do you want to build? ")
print(f"The story of {name} begins here.")
print(f"Chapter 1: The day {name} decided to build {dream}...")
print("...")
print("(You write the rest.)")
\`\`\`

The future of computing isn't in this book. It's in you. 🚀`,
    contentZh: `## 这一页是空白的。故意的。

这个系列里的每一个故事，都是由一个对电脑一无所知的人开始的。

- Ada Lovelace是一个热爱数学的少女
- Grace Hopper是一个37岁参军的老师
- Linus Torvalds是一个有爱好项目的大学生
- 李飞飞是一个在洗衣店打工的移民

他们不知道自己会改变世界。他们只是开始了。

### 你的故事是什么？

也许你会：
- 🎮 创造下一个爆款游戏
- 🧬 用AI治愈一种疾病
- 🌍 构建帮助数百万人的技术
- 🚀 写在火星上运行的代码
- 🎨 创造一种全新的艺术形式
- 🔐 让互联网对所有人更安全
- 💡 发明没人想到过的东西

### 开始写吧

\`\`\`python
# 你的故事从一行代码开始
name = input("你叫什么名字？")
dream = input("你想造什么？")
print(f"{name}的故事从这里开始。")
print(f"第一章：{name}决定要造{dream}的那天……")
print("……")
print("（剩下的由你来写。）")
\`\`\`

计算的未来不在这本书里。在你身上。🚀`,
    funFacts: [
      "The average age of a first-time startup founder is 31, but many legendary programmers started coding as teenagers. You're never too young!",
      "There are about 28 million software developers in the world. By 2030, there will be over 45 million. The industry needs YOU.",
    ],
    funFactsZh: [
      "第一次创业的创始人平均年龄是31岁，但很多传奇程序员十几岁就开始编程。你永远不会太年轻！",
      "全世界大约有2800万软件开发者。到2030年将超过4500万。这个行业需要你。",
    ],
  },
];
