// Code Buddy v2 - Fusion-style 5 Areas 30 Lessons
// Design Philosophy: Programming Skills + Computer Science + AI Thinking naturally integrated
// Target: Grade 4-10 (10-16 years old), Zero background
// Languages: English primary + Chinese subtitles
// Characters: 🐍Py (Python Snake), 🤖Botty (AI Assistant), 🔧Chip (Hardware Sprite)

import { QUIZ_DATA } from "./quiz-data";

export interface QuizQuestion {
  type?: "multiple-choice" | "coding";
  question: string;
  // For multiple choice:
  options?: string[];
  correctIndex?: number;
  // For coding challenges:
  prompt?: string;
  starterCode?: string;
  expectedOutput?: string;
  hint?: string;
  // Common:
  explanation: string;
}

export interface CodeChallenge {
  title: string;
  description: string;
  starterCode: string;
  hint: string;
  solution: string;
  expectedOutput?: string;
}

export interface ParsonsBlock {
  id: string;
  code: string;
  indent: number;
}

export interface FillBlank {
  prompt: string;
  blanks: string[];
  hints: string[];
  explanations?: string[];
}

export interface OutputChoice {
  code: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface BugChallenge {
  title: string;
  buggyCode: string;
  fixedCode: string;
  bugLine: number;
  hint: string;
  explanation: string;
}

export interface InlineExercise {
  prompt: string;
  promptZh: string;
  starterCode: string;
  expectedOutput: string;
  hint: string;
  hintZh: string;
  hints?: string[];
  hintsZh?: string[];
  solution: string;
  language?: "python" | "cpp";
}

export interface SyntaxCard {
  symbol: string;
  name: string;
  nameZh: string;
  emoji: string;
  description: string;
  example?: string;
}

export interface CodeAnatomyLine {
  code: string;
  explanation: string;
  explanationZh?: string;
}

export interface CodeAnatomy {
  lines: CodeAnatomyLine[];
}

export interface ConceptData {
  title: string;
  titleZh?: string;
  syntaxCards?: SyntaxCard[];
  codeAnatomy?: CodeAnatomy;
}

export interface LessonSection {
  type: "text" | "interactive" | "code" | "quiz" | "animation" | "challenge" | "parsons" | "fill-blank" | "output-choice" | "bug-hunt" | "concept";
  content: string;
  emoji?: string;
  code?: string;
  quiz?: QuizQuestion[];
  challenge?: CodeChallenge;
  animation?: string;
  parsons?: { instruction: string; correctOrder: string[]; shuffled: string[]; explanation?: string };
  fillBlank?: FillBlank;
  outputChoice?: OutputChoice;
  bugChallenge?: BugChallenge;
  exercise?: InlineExercise;
  exerciseCpp?: InlineExercise;
  concept?: ConceptData;
  challengeCpp?: CodeChallenge;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  subtitle: string;
  icon: string;
  xp: number;
  duration: string;
  sections: LessonSection[];
  order: number;
  gradeRange: [number, number]; // kept for reference, not used for adaptation
  difficulty: "beginner" | "intermediate" | "advanced";
  skillLevel: "beginner" | "intermediate" | "advanced";
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  lessons: string[];
}

// ═══════════════════════════════════════════════════════════════
// NEW 5 AREAS STRUCTURE - Fusion Style 🌟
// ═══════════════════════════════════════════════════════════════

export const MODULES: Module[] = [
  {
    id: "area-1",
    title: "🏝️ Starter Island",
    subtitle: "Learn to talk with computers · 新手岛：学会跟计算机对话",
    icon: "🏝️",
    color: "from-green-400 to-emerald-500",
    lessons: ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"],
  },
  {
    id: "area-2", 
    title: "🌀 Loop Forest",
    subtitle: "Master the power of repetition · 循环森林：掌握重复的力量",
    icon: "🌀",
    color: "from-blue-500 to-indigo-600",
    lessons: ["2-1", "2-2", "2-3", "2-4", "2-5", "2-6"],
  },
  {
    id: "area-3",
    title: "🏗️ Builder City", 
    subtitle: "Create tools, not just use them · 建造城：造工具而非用工具",
    icon: "🏗️",
    color: "from-orange-500 to-red-600",
    lessons: ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "3-7"],
  },
  {
    id: "area-4",
    title: "🧪 Science Lab",
    subtitle: "Solve real problems with code · 实验室：用代码解决真实问题",
    icon: "🧪",
    color: "from-purple-500 to-pink-600",
    lessons: ["4-1", "4-2", "4-3", "4-4", "4-5", "4-6"],
  },
  {
    id: "area-5",
    title: "🤖 AI Frontier",
    subtitle: "Collaborate with AI as a team · AI前哨站：与AI协作共事",
    icon: "🤖",
    color: "from-cyan-500 to-purple-600",
    lessons: ["5-1", "5-2", "5-3", "5-4", "5-5", "5-6"],
  },
];

export const LESSONS: Lesson[] = [
  // ═══════════════════════════════════════════════════════════════
  // 🏝️ AREA 1: STARTER ISLAND (6 lessons)
  // ═══════════════════════════════════════════════════════════════
  
  {
    id: "1-1",
    moduleId: "area-1",
    title: "Hacker Invasion!",
    subtitle: "Your first hack into the matrix · 黑客入侵：你的第一次黑客入门",
    icon: "👨‍💻",
    xp: 25,
    duration: "15 min",
    order: 1,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text",
        emoji: "🐍",
        content: `## 🐍 Py Says: Welcome to the hacker academy!

Hi there, future hacker! I'm **Py**, your friendly Python snake guide! 🐍✨

You're about to learn the most EPIC skill ever: **commanding computers like a hacker**!

🖥️ When you see those green text screens in movies? That's what programmers actually use! 

💻 Every line you type is a **command** that the computer must obey!

🎯 **Programming** = Giving computers super-precise instructions

🐍 **Python** = The easiest "hacking language" for beginners

Ready to see the Matrix? Let's make your screen look like a hacker movie! 🕶️`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Your First Python Tools",
        concept: {
          title: "🧰 New Syntax: Your First Python Tools",
          titleZh: "新语法：你的第一批 Python 工具",
          syntaxCards: [
            {
              symbol: "print()",
              name: "Print / Show on screen",
              nameZh: "打印 / 在屏幕上显示",
              emoji: "📢",
              description: "Like a loudspeaker 📢 for your computer! Whatever you put inside the parentheses, Python shouts it to the screen.",
              example: 'print("Hello!")\n# Output: Hello!',
            },
            {
              symbol: '"..."',
              name: "String (text in quotes)",
              nameZh: "字符串（引号里的文字）",
              emoji: "💬",
              description: "Quotes are like a gift box 🎁 — they wrap text so Python knows it's words, not code. Use double \" or single ' quotes.",
              example: '"Hello, World!"\n\'Also works!\'',
            },
            {
              symbol: "#",
              name: "Comment (note to humans)",
              nameZh: "注释（给人看的笔记）",
              emoji: "📝",
              description: "A sticky note 📝 for yourself! Python ignores everything after #. Use it to explain your code.",
              example: '# This is a comment\nprint("Hi")  # This part is ignored',
            },
            {
              symbol: "(  )",
              name: "Parentheses (function input)",
              nameZh: "括号（函数的输入口）",
              emoji: "📥",
              description: "Like a mailbox slot 📥 — you put stuff INTO a function through parentheses. print() needs them!",
              example: 'print("stuff goes here")',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: '# My first Python program', explanation: "Comment — Python skips this. It's a note for you!", explanationZh: "注释 — Python 会跳过，这是给你自己看的笔记" },
              { code: 'print("Hello, World!")', explanation: "print() = show on screen. The text in quotes is what appears.", explanationZh: "print() = 显示到屏幕。引号里的文字会出现" },
              { code: 'print("🐍 Python is cool!")', explanation: "You can use emojis inside strings too! Anything in quotes is text.", explanationZh: "引号里也可以用表情符号！引号内的都是文字" },
            ],
          },
        },
      },
      {
        type: "code",
        emoji: "💚",
        content: `## 🎬 Your First Hacker Screen!

🎯 **What you'll learn:** How to use print() to display multiple lines of text on screen.
学习目标：如何用 print() 在屏幕上显示多行文字。

Imagine you're a movie director 🎬 — each print() is one line of dialogue! The computer reads your script top to bottom and performs each line in order.

🔑 **Key things to notice:**
- Each print() creates one line of output
- Text inside quotes is displayed exactly as written
- Comments (# lines) are ignored by Python

👀 Try changing the messages to create your own hacker story!`,
        code: `# 🐍 Py: "Welcome to the Matrix! 💊"
print("🟢 SYSTEM BREACH DETECTED 🟢")
print("💻 Accessing mainframe...")
print("🔓 Password cracked!")
print("🎯 Mission complete!")
print("")
print("👨‍💻 Congratulations, young hacker!")
print("🐍 Python is your new superpower!")

# 🔧 Chip: "Whoa! You just gave me 7 print() commands!"

# 🤖 Botty: "Real hackers write code that talks back!"`,
      },
      {
        type: "interactive",
        content: `## 🎮 Customize Your Hacker Message!

Create your own hacker-style message! Try changing the text above to make it your own.

**Hacker Tips:**
- Use emojis like 🟢🔴⚡💻🔓🎯

- Make it dramatic: "INITIATING...", "BYPASSING SECURITY..."

- Add your name: "Welcome, Agent [YourName]!"`,
        exercise: {
          prompt: "Write a print statement that displays: Hello, World!",
          promptZh: "写一个 print 语句，显示：Hello, World!",
          starterCode: "# Type your code here\n",
          expectedOutput: "Hello, World!",
          hint: "Use print() with the text in quotes: print(\"...\")",
          hintZh: "使用 print()，文字要放在引号里：print(\"...\")",
          solution: 'print("Hello, World!")',
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🎨 ASCII Art Robot · ASCII 机器人",
          description: "Create an ASCII art robot using multiple print() statements! Make it at least 5 lines tall.\n用多个 print() 画一个 ASCII 机器人！至少5行高。",
          starterCode: "# Draw a robot using print()\n# 用 print() 画一个机器人\n# Example / 示例:\n# print(\"  [o_o]  \")\n\nprint(\"  [o_o]  \")\n# Add more lines below! / 在下面添加更多行！\n",
          hint: "Use characters like [ ] | _ / \\ - to build your robot body. Each print() is one line.\n用 [ ] | _ / \\ - 等字符画机器人。每个 print() 是一行。",
          solution: "print(\"  [o_o]  \")\nprint(\"  /| |\\\\  \")\nprint(\"   | |   \")\nprint(\"  _| |_  \")\nprint(\" |_____|  \")",
          expectedOutput: "  [o_o]  \n  /| |\\  \n   | |   \n  _| |_  \n |_____|  ",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🏠 My Business Card · 我的名片",
          description: "Print a fancy business card with a border! Include your name, title, and a fun fact.\n打印一张带边框的名片！包括名字、头衔和有趣的事实。",
          starterCode: "# Create a business card with borders\n# 制作一张带边框的名片\nprint(\"+\" + \"-\"*20 + \"+\")\n# Add your info below / 在下面添加你的信息\n\nprint(\"+\" + \"-\"*20 + \"+\")",
          hint: "Use print(\"| Name: YourName      |\") to add lines inside the border.\n用 print(\"| Name: YourName      |\") 添加边框内的行。",
          solution: "print(\"+\" + \"-\"*20 + \"+\")\nprint(\"| Name: Python Coder |\")\nprint(\"| Title: Hacker      |\")\nprint(\"| Fun: I love code!  |\")\nprint(\"+\" + \"-\"*20 + \"+\")",
          expectedOutput: "+--------------------+\n| Name: Python Coder |\n| Title: Hacker      |\n| Fun: I love code!  |\n+--------------------+",
        },
      },
      {
        type: "quiz",
        content: "🎓 Hacker Knowledge Check!",
        quiz: QUIZ_DATA["1-1"],
      },
    ],
  },

  {
    id: "1-2", 
    moduleId: "area-1",
    title: "Mad Libs Story Generator!",
    subtitle: "Variables + input = hilarious stories · 傻瓜造句机：变量+输入=搞笑故事",
    icon: "😂",
    xp: 30,
    duration: "18 min",
    order: 2,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text", 
        emoji: "😂",
        content: `## 🐍 Py: Let's Create Hilarious Stories with Variables!

Remember Mad Libs? You know, where you fill in random words and create SUPER funny stories! 

Variables are like **magic labeled boxes** that store anything:

- Words (like "banana" or "stinky")  

- Numbers (like 42 or 999)

- True/False facts

\`\`\`python
adjective = "smelly"     # A describing word box
noun = "elephant"       # A thing box  
number = 17             # A number box
\`\`\`

**The = sign is NOT math!** It means **"put this INTO that box"** ➡️📦

🤖 Botty says: "AI chatbots use variables to remember what you told them earlier!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Variables & User Input",
        concept: {
          title: "🧰 New Syntax: Variables & User Input",
          titleZh: "新语法：变量和用户输入",
          syntaxCards: [
            {
              symbol: "=",
              name: "Assignment (put into box)",
              nameZh: "赋值（放进盒子）",
              emoji: "📦",
              description: "NOT math equals! Think of = as an arrow ➡️📦. It puts the right side INTO the box on the left.",
              example: 'name = "Alice"\nage = 12',
            },
            {
              symbol: "variable",
              name: "Variable (labeled box)",
              nameZh: "变量（贴标签的盒子）",
              emoji: "🏷️",
              description: "A labeled box that stores data. You pick the name (label), Python remembers the value inside.",
              example: 'score = 100  # box labeled "score" holds 100',
            },
            {
              symbol: "input()",
              name: "Input (ask the user)",
              nameZh: "输入（问用户）",
              emoji: "🎤",
              description: "Like handing someone a microphone 🎤 — the program stops and waits for them to type something!",
              example: 'name = input("What is your name? ")',
            },
            {
              symbol: "f\"...{var}...\"",
              name: "f-string (mix text + variables)",
              nameZh: "f字符串（混合文字和变量）",
              emoji: "🧩",
              description: "Put f before quotes, then use {curly braces} to plug in variables — like filling blanks in Mad Libs!",
              example: 'name = "Py"\nprint(f"Hi, {name}!")\n# Output: Hi, Py!',
            },
            {
              symbol: "+",
              name: "String concatenation (join text)",
              nameZh: "字符串拼接（连接文字）",
              emoji: "🔗",
              description: "The + between strings glues them together like a chain 🔗. Different from math addition!",
              example: '"Hello" + " " + "World"\n# Result: "Hello World"',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'name = input("Your name? ")', explanation: "Ask the user, then store their answer in the 'name' box", explanationZh: "问用户名字，然后存进 name 盒子" },
              { code: 'print("Hello, " + name + "!")', explanation: "Glue three text pieces together with + and display them", explanationZh: "用 + 把三段文字粘在一起然后显示" },
              { code: 'print(f"Hello, {name}!")', explanation: "Same thing, but cleaner! f-string plugs name directly in", explanationZh: "同样效果但更简洁！f字符串直接插入变量" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Mad Libs Challenge: Space Adventure!

Look at this hilarious space story template. We need to collect words from the user first:

\`\`\`python

# Collect story ingredients from user
alien_name = input("Name a silly alien: ")
adjective = input("Funny adjective: ")
number = input("Pick a number: ")
food = input("Your favorite food: ")

# Now create the story!
print("🚀 SPACE ADVENTURE 🚀")
print("Captain " + alien_name + " was feeling " + adjective)
print("They ate " + number + " bowls of " + food)
print("Then they flew to Mars at " + adjective + " speed!")
\`\`\`

**Your turn!** What story ingredients would you choose?`,
        exercise: {
          prompt: "Create a variable called 'name' with your name, then print: Hello, [name]! (Use + to join strings)",
          promptZh: "创建一个叫 'name' 的变量存你的名字，然后打印：Hello, [名字]!（用 + 拼接字符串）",
          starterCode: '# Store your name in a variable\nname = "Coder"\n# Print a greeting\n',
          expectedOutput: "Hello, Coder!",
          hint: "Use + to join strings: print(\"Hello, \" + name + \"!\")",
          hintZh: "用 + 拼接字符串：print(\"Hello, \" + name + \"!\")",
          solution: 'name = "Coder"\nprint("Hello, " + name + "!")',
        },
      },
      {
        type: "code",
        emoji: "🎪",
        content: `## 🎪 The Ultimate Mad Libs Story Generator!

🎯 **What you'll learn:** How to combine input(), variables, and string concatenation (+) to build dynamic stories.
学习目标：如何结合 input()、变量和字符串拼接（+）来构建动态故事。

Think of this like a recipe 🧑‍🍳 — first you gather ingredients (input), store them in bowls (variables), then mix them together (+) into a delicious story!

🔑 **Key things to notice:**
- input() pauses the program and waits for the user to type
- Each answer gets stored in a named variable
- The + operator glues strings together like tape 🔗

👀 Try adding more input() calls for extra story ingredients!`,
        code: `# 🎪 Welcome to the Mad Libs Circus!
print("🎪 WELCOME TO MAD LIBS CIRCUS! 🎪")
print("I need some words to create a HILARIOUS story!")
print()

# Collect our story ingredients
animal = input("🦁 Name an animal: ")
adjective = input("😎 Give me a cool adjective: ")
color = input("🌈 Pick a color: ")
food = input("🍕 What's your favorite food: ")
number = input("🔢 Random number (1-100): ")

print("\\n" + "="*40)
print("🎭 YOUR CUSTOM STORY! 🎭")
print("="*40)

# The hilarious story unfolds!
print("Once upon a time, a " + adjective + " " + animal)
print("painted themselves " + color + " and ate " + number + " pieces of " + food + "!")
print("Everyone thought they were " + adjective + "!")
print("The " + animal + " became the most famous " + color + " performer!")
print()
print("🎉 THE END! Hope you laughed! 🎉")

# 🔧 Chip: "I just stored 5 different pieces of data and mixed them up!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "📇 Self Introduction · 自我介绍",
          description: "Create variables for your name, age, and hobby, then print a self-introduction using f-string!\n创建名字、年龄和爱好变量，用 f-string 打印自我介绍！",
          starterCode: "# Create your profile / 创建个人资料\nname = \"___\"  # Your name / 你的名字\nage = 0       # Your age / 你的年龄\nhobby = \"___\" # Your hobby / 你的爱好\n\n# Print introduction using f-string\n# 用 f-string 打印自我介绍\n",
          hint: "Fill in the variables, then use: print(f\"Hi! I'm {name}, {age} years old. I love {hobby}!\")\n填好变量，然后用 f-string 打印",
          solution: "name = \"Alex\"\nage = 12\nhobby = \"coding\"\nprint(f\"Hi! I'm {name}, {age} years old. I love {hobby}!\")",
          expectedOutput: "Hi! I'm Alex, 12 years old. I love coding!",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔄 Variable Swap · 变量交换",
          description: "You have two variables. Swap their values and print the result!\n你有两个变量，交换它们的值并打印结果！",
          starterCode: "# Swap the values of a and b\n# 交换 a 和 b 的值\na = \"cat\"\nb = \"dog\"\n\n# TODO: Swap a and b (hint: use a temp variable!)\n# 提示：用一个临时变量！\n\nprint(f\"a = {a}\")  # Should print: a = dog\nprint(f\"b = {b}\")  # Should print: b = cat",
          hint: "Use a temporary variable: temp = a, then a = b, then b = temp\n用临时变量：temp = a, 然后 a = b, 然后 b = temp",
          solution: "a = \"cat\"\nb = \"dog\"\ntemp = a\na = b\nb = temp\nprint(f\"a = {a}\")\nprint(f\"b = {b}\")",
          expectedOutput: "a = dog\nb = cat",
        },
      },
      {
        type: "quiz",
        content: "🎯 Mad Libs Master Quiz!",
        quiz: QUIZ_DATA["1-2"],
      },
    ],
  },

  {
    id: "1-3",
    moduleId: "area-1", 
    title: "Pizza Calculator Supreme!",
    subtitle: "Math + Pizza = Perfect Friday night · 披萨计算器：数学+披萨=完美周五夜",
    icon: "🍕",
    xp: 30,
    duration: "20 min",
    order: 3,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text",
        emoji: "🍕", 
        content: `## 🐍 Py: Welcome to Pizza Math Academy!

Who says math is boring? Let's use Python to solve the MOST IMPORTANT problem: **Pizza!** 🍕✨

**Python Math Operators:**
- \`+\` Addition → \`2 + 3\` = 5 pizzas  
- \`-\` Subtraction → \`10 - 4\` = 6 slices left
- \`*\` Multiplication → \`6 * 8\` = 48 pepperonis
- \`/\` Division → \`12 / 4\` = 3.0 slices per person
- \`%\` **Remainder** → \`10 % 3\` = 1 slice left over!
- \`**\` Power → \`2 ** 3\` = 8 (cheese level!)

🔧 Chip says: "That % operator is SUPER useful for pizza sharing!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Numbers & Math Operators",
        concept: {
          title: "🧰 New Syntax: Numbers & Math Operators",
          titleZh: "新语法：数字和数学运算符",
          syntaxCards: [
            {
              symbol: "int()",
              name: "Convert to integer (whole number)",
              nameZh: "转成整数（没有小数点）",
              emoji: "🔢",
              description: "Turns text or decimals into a whole number. input() gives text, so use int() to make it a number!",
              example: 'int("42")   # text → number 42\nint(3.7)    # → 3 (cuts off decimal)',
            },
            {
              symbol: "float()",
              name: "Convert to decimal number",
              nameZh: "转成小数",
              emoji: "🔣",
              description: "Makes a decimal number. Use when you need precision, like money or measurements.",
              example: 'float("3.14")  # text → number 3.14',
            },
            {
              symbol: "+  -  *  /",
              name: "Basic math operators",
              nameZh: "基本数学运算符",
              emoji: "🧮",
              description: "Add, subtract, multiply, divide — just like your calculator! Python follows order of operations (PEMDAS).",
              example: '2 + 3    # 5\n10 - 4   # 6\n6 * 8    # 48\n12 / 4   # 3.0',
            },
            {
              symbol: "//",
              name: "Floor division (whole number result)",
              nameZh: "整除（只要整数部分）",
              emoji: "✂️",
              description: "Division that chops off the decimal — perfect for splitting things into whole pieces!",
              example: '17 // 5  # → 3 (not 3.4)',
            },
            {
              symbol: "%",
              name: "Modulo (remainder)",
              nameZh: "取余（剩下多少）",
              emoji: "🍕",
              description: "The leftover after dividing! Like sharing pizza — how many slices are left over?",
              example: '17 % 5   # → 2 (17÷5=3 remainder 2)',
            },
            {
              symbol: "**",
              name: "Power / Exponent",
              nameZh: "幂运算 / 指数",
              emoji: "💪",
              description: "Multiply a number by itself. 2**3 means 2×2×2 = 8. Super powerful!",
              example: '2 ** 3   # → 8\n10 ** 2  # → 100',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'slices = 17', explanation: "Store 17 in the 'slices' box (it's already a number, no quotes needed!)", explanationZh: "把17存进 slices 盒子（数字不需要引号！）" },
              { code: 'friends = 5', explanation: "Store 5 in the 'friends' box", explanationZh: "把5存进 friends 盒子" },
              { code: 'each = slices // friends', explanation: "// = divide and keep only whole number → 17//5 = 3", explanationZh: "// = 整除只保留整数 → 17//5 = 3" },
              { code: 'leftover = slices % friends', explanation: "% = what's left over after dividing → 17%5 = 2", explanationZh: "% = 除后剩余 → 17%5 = 2" },
              { code: 'print(str(each))', explanation: "str() converts number to text so print() can show it", explanationZh: "str() 把数字转成文字，print() 才能显示" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🤔 The Great Pizza Sharing Problem!

You ordered 17 slices of pizza 🍕 for 5 friends. How many slices does each person get? How many are left over?

**Think about it:**
- \`17 / 5\` = ? (slices per person)  
- \`17 % 5\` = ? (leftover slices)

This is where **division** and **remainder** become pizza superheroes! 

Try figuring it out before looking at the code below! 🧮`,
        exercise: {
          prompt: "Calculate: 17 slices ÷ 5 friends. Print the whole slices per person (use //) and the leftover (use %), each on a new line.",
          promptZh: "计算：17片披萨÷5个朋友。分别打印每人整数份数（用//）和剩余片数（用%），各占一行。",
          starterCode: "slices = 17\nfriends = 5\n# Print slices per person (whole number)\n# Print leftover slices\n",
          expectedOutput: "3\n2",
          hint: "Use // for whole division and % for remainder: print(slices // friends)",
          hintZh: "用 // 整除，用 % 取余：print(slices // friends)",
          solution: "slices = 17\nfriends = 5\nprint(slices // friends)\nprint(slices % friends)",
        },
      },
      {
        type: "code",
        emoji: "🍕",
        content: `## 🍕 Pizza Party Calculator Supreme!

🎯 **What you'll learn:** How to use // (floor division) and % (modulo) to solve real sharing problems.
学习目标：如何用 //（整除）和 %（取余）解决真实的分配问题。

Dividing pizza is the perfect analogy! // tells you how many whole slices each person gets, and % tells you how many are left over. It's like dealing cards 🃏 — deal evenly, then count what's left.

🔑 **Key things to notice:**
- \`//\` gives whole number results (no decimals)
- \`%\` gives the remainder after division
- \`str()\` converts numbers to text for printing

👀 Change the number of slices or friends and see how the results change!`,
        code: `# 🍕 Welcome to Pizza Math Central!
print("🍕 PIZZA PARTY CALCULATOR 🍕")
print("=" * 35)

# Our pizza party data
total_slices = 17
friends = 5
slices_per_pizza = 8
pizza_cost = 12.99

# 🧮 The magic calculations!
slices_per_person = total_slices // friends  # // gives whole number
leftover_slices = total_slices % friends     # % gives remainder

print("📊 PIZZA PARTY STATS:")
print("Total slices: " + str(total_slices))
print("Friends: " + str(friends))
print("")
print("🎯 RESULTS:")
print("Slices per person: " + str(slices_per_person))
print("Leftover slices: " + str(leftover_slices))

# 🔢 More pizza math!
total_pepperoni = 6 * 8 * 3  # 6 per slice × 8 slices × 3 pizzas
cheese_layers = 2 ** 3       # Double cheese, triple stacked!

print("")
print("🍕 BONUS STATS:")
print("Total pepperoni: " + str(total_pepperoni))
print("Cheese awesomeness level: " + str(cheese_layers))

# 🤖 Botty: "AI uses math like this to calculate recommendations!"`,
      },
      {
        type: "code",
        emoji: "💰",
        content: `## 💰 Pizza Budget Calculator

🎯 **What you'll learn:** How to combine math operators for real-world budget calculations.
学习目标：如何组合数学运算符进行实际的预算计算。

This is what real apps do! 💳 Your phone's calculator, shopping apps, even games — they all use these same math operations under the hood.

🔑 **Key things to notice:**
- \`int()\` converts decimals to whole numbers (chops off the decimal)
- \`round(number, 2)\` keeps only 2 decimal places (for money!)
- Percentage formula: \`value * percent / 100\`

👀 Try changing the budget or pizza price!`,
        code: `# 💰 How much pizza can we afford?
print("💰 PIZZA BUDGET CALCULATOR 💰")

budget = 50
pizza_price = 12.99
tip_percent = 15

# Calculate how many pizzas we can buy
max_pizzas = int(budget // pizza_price)  # int() removes decimal
money_left = budget % pizza_price

# Tip calculation (percentage math!)
tip_amount = pizza_price * tip_percent / 100

print("🎯 BUDGET BREAKDOWN:")
print("Your budget: $" + str(budget))
print("Pizza price: $" + str(pizza_price))
print("Max pizzas: " + str(max_pizzas))
print("Money left: $" + str(round(money_left, 2)))
print("Suggested tip: $" + str(round(tip_amount, 2)))

# 🔧 Chip: "Restaurants use programs like this for their cash registers!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🌡️ Temperature Converter · 温度转换器",
          description: "Convert Celsius to Fahrenheit! Formula: F = C × 9/5 + 32\n把摄氏度转成华氏度！公式：F = C × 9/5 + 32",
          starterCode: "# Temperature Converter / 温度转换器\ncelsius = 25\n\n# Calculate Fahrenheit / 计算华氏度\n# Formula: F = C * 9/5 + 32\nfahrenheit = ___\n\nprint(f\"{celsius}°C = {fahrenheit}°F\")",
          hint: "Replace ___ with: celsius * 9/5 + 32\n把 ___ 替换为：celsius * 9/5 + 32",
          solution: "celsius = 25\nfahrenheit = celsius * 9/5 + 32\nprint(f\"{celsius}°C = {fahrenheit}°F\")",
          expectedOutput: "25°C = 77.0°F",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "⏰ Time Converter · 时间转换器",
          description: "Convert total seconds into hours, minutes, and seconds!\n把总秒数转成时、分、秒！",
          starterCode: "# Time Converter / 时间转换器\ntotal_seconds = 3725\n\n# Calculate hours, minutes, seconds\n# Hint: use // (integer division) and % (remainder)\n# 提示：用 //（整除）和 %（取余）\nhours = ___\nminutes = ___\nseconds = ___\n\nprint(f\"{total_seconds} seconds = {hours}h {minutes}m {seconds}s\")",
          hint: "hours = total_seconds // 3600, remaining = total_seconds % 3600, minutes = remaining // 60, seconds = remaining % 60",
          solution: "total_seconds = 3725\nhours = total_seconds // 3600\nremaining = total_seconds % 3600\nminutes = remaining // 60\nseconds = remaining % 60\nprint(f\"{total_seconds} seconds = {hours}h {minutes}m {seconds}s\")",
          expectedOutput: "3725 seconds = 1h 2m 5s",
        },
      },
      {
        type: "quiz",
        content: "🍕 Pizza Math Master Quiz!",
        quiz: QUIZ_DATA["1-3"],
      },
    ],
  },

  {
    id: "1-4",
    moduleId: "area-1",
    title: "Turtle Art Master!", 
    subtitle: "Draw amazing shapes with code · 海龟画图大师：用代码画出惊人图案",
    icon: "🐢",
    xp: 30,
    duration: "20 min",
    order: 4,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text",
        emoji: "🐢",
        content: `## 🐢 Py: Meet Your New Art Assistant - The Turtle!

Welcome to the coolest programming experience EVER! 🎨✨

Imagine you have a **magic turtle** 🐢 that can draw anything you command:

- "Move forward 100 steps!" 

- "Turn right 90 degrees!"

- "Change your pen color to blue!"

**Turtle Graphics** = Programming + Art = AWESOME!

🐢 **Turtle graphics now work right here in the browser!** Click Run to see the drawing appear below the code! 海龟画图现在可以直接在浏览器中运行！ 

🤖 Botty says: "Video game graphics work the same way - math + movement commands!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Import & Turtle Commands",
        concept: {
          title: "🧰 New Syntax: Import & Turtle Commands",
          titleZh: "新语法：导入模块和海龟指令",
          syntaxCards: [
            {
              symbol: "import",
              name: "Import (load a toolbox)",
              nameZh: "导入（加载工具箱）",
              emoji: "🧰",
              description: "Like opening a new toolbox 🧰! Python has built-in toolboxes (modules) with extra powers. import loads them.",
              example: 'import turtle\nimport random',
            },
            {
              symbol: "forward(n)",
              name: "Move turtle forward n steps",
              nameZh: "海龟向前走 n 步",
              emoji: "➡️",
              description: "Tell the turtle to walk forward. The number is how many steps (pixels) to move.",
              example: 'artist.forward(100)  # walk 100 steps',
            },
            {
              symbol: "right(n) / left(n)",
              name: "Turn turtle right/left n degrees",
              nameZh: "海龟右转/左转 n 度",
              emoji: "↩️",
              description: "Rotate the turtle like turning a steering wheel. The number is degrees (90° = right angle).",
              example: 'artist.right(90)   # turn right 90°\nartist.left(120)  # turn left 120°',
            },
            {
              symbol: 'color("...")',
              name: "Change turtle pen color",
              nameZh: "改变画笔颜色",
              emoji: "🎨",
              description: "Like picking a new crayon! The turtle draws in whatever color you choose.",
              example: 'artist.color("red")\nartist.color("blue")',
            },
            {
              symbol: "for x in range(n):",
              name: "Repeat n times",
              nameZh: "重复 n 次",
              emoji: "🔄",
              description: "The repeat button 🔄! Everything indented below runs n times. Perfect for drawing shapes!",
              example: 'for side in range(4):  # repeat 4 times\n    forward(100)\n    right(90)',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'import turtle', explanation: "Load the turtle drawing toolbox", explanationZh: "加载海龟绘图工具箱" },
              { code: 'artist = turtle.Turtle()', explanation: "Create a turtle and name it 'artist'", explanationZh: "创建一只海龟，取名 artist" },
              { code: 'artist.color("green")', explanation: "Set the pen color to green", explanationZh: "设置画笔颜色为绿色" },
              { code: 'for side in range(4):', explanation: "Repeat the next indented lines 4 times (for a square)", explanationZh: "重复下面缩进的行4次（画正方形）" },
              { code: '    artist.forward(100)', explanation: "↳ (inside loop) Move forward 100 steps", explanationZh: "↳（循环内）向前走100步" },
              { code: '    artist.right(90)', explanation: "↳ (inside loop) Turn right 90 degrees", explanationZh: "↳（循环内）右转90度" },
            ],
          },
        },
      },
      {
        type: "code", 
        emoji: "🟩",
        content: `## 🟩 Your First Turtle Drawing - Perfect Square!

🎯 **What you'll learn:** How to use turtle graphics commands and a for loop to draw shapes.
学习目标：如何使用海龟绘图命令和 for 循环画图形。

The turtle is like a robot artist 🤖🎨 — it follows your movement instructions exactly. A square is just: go forward, turn 90°, repeat 4 times!

🔑 **Key things to notice:**
- \`import turtle\` loads the drawing toolbox
- \`for side in range(4):\` repeats the indented code 4 times
- forward() moves, right() turns — that's it!

👀 Click Run to see the turtle draw! 点击运行看海龟画图！`,
        code: `# 🐢 Turtle Square Drawing Masterpiece!
import turtle

# Create our artist turtle
artist = turtle.Turtle()
artist.shape("turtle")  # Make it look like a turtle!
artist.color("green")   # Green like our friendly Py snake!
artist.speed(3)         # Not too fast, not too slow

print("🎨 Drawing a perfect square...")

# Draw a square (4 sides, 4 right turns)
for side in range(4):
    artist.forward(100)  # Move forward 100 steps
    artist.right(90)     # Turn right 90 degrees
    
print("✨ Square complete! Isn't math beautiful?")

# Keep the window open
turtle.done()

# 🔧 Chip: "Your computer just did geometry with code!"

# 🤖 Botty: "Game engines use similar commands to move characters!"`,
      },
      {
        type: "text",
        emoji: "🎨",
        content: `## 🎨 Understanding Turtle Commands

**Basic Turtle Commands:**
- \`forward(distance)\` → Move ahead
- \`right(angle)\` → Turn right  
- \`left(angle)\` → Turn left
- \`color("red")\` → Change pen color
- \`penup()\` → Lift pen (move without drawing)
- \`pendown()\` → Lower pen (start drawing again)

**🧮 Math Connection:** 
- Square = 4 sides, each turn 90°
- Triangle = 3 sides, each turn 120°
- Circle = Many tiny forward + turn steps!

🔧 Chip says: "Robot vacuum cleaners use similar movement commands!"`,
      },
      {
        type: "code",
        emoji: "🔺",
        content: `## 🔺 Challenge: Triangle and Colorful Shapes!

🎯 **What you'll learn:** How to use lists and nested loops to create colorful multi-shape drawings.
学习目标：如何用列表和嵌套循环创建多彩的多图形绘画。

This is like having a box of crayons 🖍️ — you pick a color, draw a shape, pick another color, draw another shape. The outer loop changes colors, the inner loop draws each triangle!

🔑 **Key things to notice:**
- \`colors[i]\` picks a color from the list by position
- Nested loops = a loop inside a loop (one for shapes, one for sides)
- \`penup()\` / \`pendown()\` = lift/lower the pen to move without drawing

👀 Try changing 120 to other angles or 3 to other numbers!`,
        code: `# 🌈 Rainbow Shape Artist!
import turtle

# Setup our rainbow artist
rainbow = turtle.Turtle()
rainbow.speed(5)
rainbow.shape("turtle")

# List of awesome colors
colors = ["red", "orange", "yellow", "green", "blue", "purple"]

print("🌈 Creating rainbow shapes...")

# Draw 6 triangles in different colors!
for i in range(6):
    # Pick a color from our list
    rainbow.color(colors[i])
    
    # Draw a triangle (3 sides, 120° turns)
    for side in range(3):
        rainbow.forward(80)
        rainbow.left(120)
    
    # Move to next position
    rainbow.penup()
    rainbow.forward(20)
    rainbow.pendown()

print("🎨 Rainbow triangle parade complete!")

# 🤖 Botty: "This is how animated movies are made - code + art!"
turtle.done()`,
      },
      {
        type: "interactive",
        content: `## 🎮 Design Your Own Turtle Challenge!

🐢 **Try designing your own patterns! Click Run to see them!**

Plan your turtle masterpiece:

1. **Choose a shape:** Square? Triangle? Star? Your initials?
2. **Pick colors:** What's your favorite color combo?
3. **Calculate angles:** 
   - Square: 4 sides, 90° turns
   - Triangle: 3 sides, 120° turns  
   - Pentagon: 5 sides, 72° turns
   - Hexagon: 6 sides, 60° turns

**Pro tip:** Total turn degrees = 360° ÷ number of sides

🐢 When you get Python installed, bring your design to life!`,
        exercise: {
          prompt: "Calculate the turn angle for a pentagon (5 sides). Print the result of 360 divided by 5.",
          promptZh: "计算五边形（5条边）的转弯角度。打印 360 除以 5 的结果。",
          starterCode: "# Calculate the angle for a pentagon\nsides = 5\n",
          expectedOutput: "72.0",
          hint: "Use regular division: print(360 / sides)",
          hintZh: "用普通除法：print(360 / sides)",
          solution: "sides = 5\nprint(360 / sides)",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔷 Draw a Square · 画正方形",
          description: "Use turtle to draw a perfect square with side length 100!\n用 turtle 画一个边长100的正方形！",
          starterCode: "import turtle\nt = turtle.Turtle()\n\n# Draw a square with side length 100\n# 画边长100的正方形\n# Hint: forward, turn right 90°, repeat 4 times\n# 提示：前进，右转90度，重复4次\n\nt.forward(100)\nt.right(90)\n# Complete the square! / 完成正方形！\n",
          hint: "You need 4 sides: t.forward(100) then t.right(90), repeated 4 times total.\n需要4条边：t.forward(100) 然后 t.right(90)，共4次。",
          solution: "import turtle\nt = turtle.Turtle()\nt.forward(100)\nt.right(90)\nt.forward(100)\nt.right(90)\nt.forward(100)\nt.right(90)\nt.forward(100)\nt.right(90)",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔺 Draw a Triangle · 画三角形",
          description: "Draw an equilateral triangle (all sides equal, turn 120° each time)!\n画等边三角形（所有边相等，每次转120度）！",
          starterCode: "import turtle\nt = turtle.Turtle()\n\n# Draw an equilateral triangle, side length 150\n# 画等边三角形，边长150\n# Hint: turn 120° at each corner (not 60°!)\n# 提示：每个角转120度！\n\n# Your code here / 你的代码\n",
          hint: "The exterior angle is 120°. Do: forward(150), right(120) three times.\n外角是120度。forward(150), right(120) 做三次。",
          solution: "import turtle\nt = turtle.Turtle()\nt.forward(150)\nt.right(120)\nt.forward(150)\nt.right(120)\nt.forward(150)\nt.right(120)",
        },
      },
      {
        type: "quiz",
        content: "🐢 Turtle Master Quiz!",
        quiz: QUIZ_DATA["1-4"],
      },
    ],
  },

  {
    id: "1-5",
    moduleId: "area-1", 
    title: "Rollercoaster Safety Inspector!",
    subtitle: "if-else: Keep everyone safe with code · 过山车安检员：用代码保证安全",
    icon: "🎢",
    xp: 35,
    duration: "22 min", 
    order: 5,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text",
        emoji: "🎢",
        content: `## 🐍 Py: Welcome to Safety Inspector Academy!

You're now the **Chief Safety Inspector** at MegaFun Amusement Park! 🎪✨

Your job? Make sure EVERYONE stays safe on the rollercoasters! Here's how it works:

**Safety Rules:**
- 🎢 If height ≥ 48 inches → "Safe to ride!"

- 🎢 If height < 48 inches → "Sorry, too short!"

- 🎒 If has safety gear → "All set!"

- 🚫 If no safety gear → "Need safety gear first!"

Python's **if-else** statements are perfect for safety checks! Computers never get tired or make mistakes - they're the ultimate safety inspectors! 🤖

🔧 Chip says: "Real rollercoasters use computer safety systems just like this!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Decisions with if/else",
        concept: {
          title: "🧰 New Syntax: Decisions with if/else",
          titleZh: "新语法：用 if/else 做决定",
          syntaxCards: [
            {
              symbol: "if condition:",
              name: "If (check a condition)",
              nameZh: "如果（检查条件）",
              emoji: "🚦",
              description: "Like a traffic light 🚦 — if the light is green (condition is True), GO! Run the indented code below.",
              example: 'if age >= 10:\n    print("You can ride!")',
            },
            {
              symbol: "else:",
              name: "Else (otherwise)",
              nameZh: "否则",
              emoji: "🔀",
              description: "The backup plan! If the 'if' condition is False, do this instead. Like a fork in the road 🔀.",
              example: 'if sunny:\n    print("Go outside!")\nelse:\n    print("Stay inside")',
            },
            {
              symbol: "elif condition:",
              name: "Else if (another check)",
              nameZh: "否则如果（再检查一个条件）",
              emoji: "🪜",
              description: "A middle step 🪜! Check another condition if the first 'if' was False. You can have many elif's!",
              example: 'if score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")',
            },
            {
              symbol: ">  <  >=  <=",
              name: "Comparison operators",
              nameZh: "比较运算符",
              emoji: "⚖️",
              description: "Compare two values like a scale ⚖️. The result is True or False.",
              example: '5 > 3    # True\n10 <= 10 # True\n7 < 2    # False',
            },
            {
              symbol: "==",
              name: "Equal to (comparison)",
              nameZh: "等于（比较）",
              emoji: "🟰",
              description: "⚠️ Double equals! Asks 'are these the same?' NOT the same as = (assignment). Two different things!",
              example: 'name == "Alice"  # True or False?\n5 == 5           # True',
            },
            {
              symbol: "!=",
              name: "Not equal to",
              nameZh: "不等于",
              emoji: "🚫",
              description: "The opposite of ==. Asks 'are these DIFFERENT?' ! means 'not'.",
              example: '5 != 3       # True (they ARE different)\n"a" != "a"   # False (they are the same)',
            },
            {
              symbol: "and / or",
              name: "Combine conditions",
              nameZh: "组合条件",
              emoji: "🤝",
              description: "'and' = BOTH must be True (strict!). 'or' = at least ONE must be True (flexible).",
              example: 'age >= 10 and height >= 48  # BOTH needed\nhas_ticket or has_pass     # either works',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'height = 50', explanation: "Store the rider's height in a variable", explanationZh: "把乘客身高存进变量" },
              { code: 'if height >= 48:', explanation: "🚦 Check: is height at least 48? If True, run the next indented line", explanationZh: "🚦 检查：身高至少48吗？如果是，运行下面缩进的行" },
              { code: '    print("Safe to ride!")', explanation: "↳ This only runs if the condition above is True", explanationZh: "↳ 只有上面条件为 True 时才运行" },
              { code: 'else:', explanation: "🔀 Otherwise (if the condition was False)...", explanationZh: "🔀 否则（如果条件为 False）…" },
              { code: '    print("Too short!")', explanation: "↳ This only runs if the condition was False", explanationZh: "↳ 只有条件为 False 时才运行" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Safety Check Logic Challenge!

Before we code, let's practice safety inspector thinking:

**Scenario:** A 12-year-old kid who's 50 inches tall wants to ride the Super Loop coaster.

- Minimum height: 48 inches

- Has safety gear: Yes

- Age requirement: 10+

**Your decision:** Safe to ride? 

Think through the logic:
1. Check height: 50 ≥ 48? ✅
2. Check age: 12 ≥ 10? ✅  
3. Check gear: Yes? ✅

**Result:** All clear! 🎢

This step-by-step checking is exactly what if-else statements do!`,
        exercise: {
          prompt: "Write an if-else: if height is 50 and minimum is 48, print \"Safe to ride!\" if tall enough, otherwise \"Too short!\"",
          promptZh: "写一个 if-else：如果 height 是 50，最低要求 48，够高就打印 \"Safe to ride!\"，否则打印 \"Too short!\"",
          starterCode: "height = 50\nminimum = 48\n# Write your if-else here\n",
          expectedOutput: "Safe to ride!",
          hint: "Use: if height >= minimum: then print one thing, else print the other",
          hintZh: "用 if height >= minimum: 然后打印一个结果，else 打印另一个",
          solution: "height = 50\nminimum = 48\nif height >= minimum:\n    print(\"Safe to ride!\")\nelse:\n    print(\"Too short!\")",
        },
      },
      {
        type: "code",
        emoji: "🎢",
        content: `## 🎢 Rollercoaster Safety System v1.0

🎯 **What you'll learn:** How to use if/else with boolean variables and the \`and\` operator for multi-condition checks.
学习目标：如何用 if/else 配合布尔变量和 and 运算符进行多条件检查。

This is how real safety systems work! 🛡️ Like an airport security checkpoint — you must pass ALL checks (ID ✅ AND boarding pass ✅) before you can board.

🔑 **Key things to notice:**
- \`int(input(...))\` converts typed text into a number
- Boolean variables (True/False) store check results for later
- \`and\` means BOTH conditions must be True

👀 Try different heights and gear answers to see all possible outcomes!`,
        code: `# 🎢 MEGA LOOP ROLLERCOASTER SAFETY INSPECTOR
print("🎪 Welcome to MegaFun Amusement Park!")
print("🎢 Mega Loop Coaster Safety Check")
print("=" * 40)

# Get rider information
rider_name = input("👤 What's your name? ")
height_inches = int(input("📏 How tall are you (inches)? "))
has_gear = input("🎒 Do you have safety gear? (yes/no): ")

print("\\n🔍 SAFETY INSPECTION IN PROGRESS...")
print("Checking rider: " + rider_name)

# Height safety check
if height_inches >= 48:
    print("✅ Height check: PASSED (" + str(height_inches) + " inches)")
    height_ok = True
else:
    print("❌ Height check: FAILED (Need 48+ inches)")
    height_ok = False

# Gear safety check  
if has_gear == "yes":
    print("✅ Safety gear: CONFIRMED")
    gear_ok = True
else:
    print("❌ Safety gear: MISSING")
    gear_ok = False

# Final safety decision
print("\\n🎯 FINAL DECISION:")
if height_ok and gear_ok:
    print("🎉 APPROVED! Welcome aboard, " + rider_name + "!")
    print("🎢 Enjoy the Mega Loop! Stay safe!")
else:
    print("🚫 SORRY! Safety first at MegaFun Park!")
    print("💡 Visit our safety station for help!")

# 🤖 Botty: "This is how AI safety systems work in real life!"`,
      },
      {
        type: "code",
        emoji: "🎡",
        content: `## 🎡 Advanced Multi-Ride Safety System

🎯 **What you'll learn:** How to use multiple independent if/else blocks to check different rules.
学习目标：如何使用多个独立的 if/else 代码块检查不同规则。

Imagine a theme park map 🗺️ with different rides — each ride has its own rules. Your code checks them all, one by one, like a safety inspector walking through the park.

🔑 **Key things to notice:**
- Each ride has its OWN if/else block (they're independent!)
- \`and\` combines two conditions: age AND height must both pass
- Different rides = different thresholds

👀 Try entering different ages and heights to unlock different rides!`,
        code: `# 🎡 MULTI-RIDE SAFETY INSPECTOR 3000!
print("🎪 ═══ MULTI-RIDE SAFETY CHECK ═══")

# Rider stats
age = int(input("🎂 How old are you? "))
height = int(input("📏 Height in inches? "))
print()

print("🎢 Checking available rides for you...")
print("-" * 35)

# Kiddie Coaster (safest)
if age >= 5 and height >= 36:
    print("🐛 Kiddie Coaster: ✅ APPROVED!")
else:
    print("🐛 Kiddie Coaster: ❌ Too young/short")

# Mega Loop (medium)
if age >= 10 and height >= 48:
    print("🎢 Mega Loop: ✅ APPROVED!")
else:
    print("🎢 Mega Loop: ❌ Age/height requirements not met")

# Death Defying Drop (extreme!)
if age >= 16 and height >= 54:
    print("💀 Death Defying Drop: ✅ APPROVED!")
    print("   ⚠️ WARNING: This ride is INTENSE!")
else:
    print("💀 Death Defying Drop: ❌ Too young/short")

print("\\n🎯 Safety is our #1 priority!")

# 🔧 Chip: "Real theme parks use computer systems exactly like this!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "📊 Grade Calculator · 成绩评级",
          description: "Convert a number score to a letter grade: 90+=A, 80+=B, 70+=C, 60+=D, <60=F\n把分数转成字母等级：90+=A, 80+=B, 70+=C, 60+=D, <60=F",
          starterCode: "# Grade Calculator / 成绩评级器\nscore = 85\n\n# Use if/elif/else to determine the grade\n# 用 if/elif/else 判断等级\nif score >= 90:\n    grade = \"A\"\n# Add more conditions below!\n# 在下面添加更多条件！\n\nprint(f\"Score: {score} → Grade: {grade}\")",
          hint: "Add: elif score >= 80: grade = \"B\", elif score >= 70: grade = \"C\", etc.\n加上 elif score >= 80, elif score >= 70 等",
          solution: "score = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelif score >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"\nprint(f\"Score: {score} → Grade: {grade}\")",
          expectedOutput: "Score: 85 → Grade: B",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🗳️ Voting Booth · 投票站",
          description: "Check if someone can vote: must be 18+ AND a citizen. Print different messages for each case.\n检查是否能投票：必须18岁以上且是公民。",
          starterCode: "# Voting Booth / 投票站\nage = 20\nis_citizen = True\n\n# Check voting eligibility / 检查投票资格\n# Case 1: Can vote (18+ AND citizen)\n# Case 2: Too young\n# Case 3: Not a citizen\n\n# Your code here / 你的代码\n",
          hint: "Use: if age >= 18 and is_citizen: ... elif age < 18: ... else: ...\n用 if age >= 18 and is_citizen: ... elif age < 18: ... else: ...",
          solution: "age = 20\nis_citizen = True\nif age >= 18 and is_citizen:\n    print(\"✅ You can vote!\")\nelif age < 18:\n    print(f\"❌ Too young! Come back in {18 - age} years.\")\nelse:\n    print(\"❌ Only citizens can vote.\")",
          expectedOutput: "✅ You can vote!",
        },
      },
      {
        type: "quiz",
        content: "🎢 Safety Inspector Master Quiz!",
        quiz: QUIZ_DATA["1-5"],
      },
    ],
  },

  {
    id: "1-6",
    moduleId: "area-1",
    title: "🎮 Text Adventure Game",
    subtitle: "Build your first complete project · 冒险文字游戏：第一个完整项目",
    icon: "🎮",
    xp: 50,
    duration: "30 min",
    order: 6,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text",
        emoji: "🏆",
        content: `## 🎮 Final Challenge: Build a Complete Game!

Congratulations! You've learned the fundamental building blocks of programming:

- 📝 **print()** — Make computers talk

- 📦 **Variables** — Store data in memory

- 🧮 **Math** — Calculate and process numbers

- 💬 **input()** — Listen to users  

- 🔀 **if-else** — Make decisions

**🐍 Py:** "Time to combine everything into your first real program!"  
**🔧 Chip:** "This will show you how complex software is built from simple pieces!"  
**🤖 Botty:** "Game AI uses the same logic you're learning!"

Let's build a **Text Adventure Game** — the same genre that inspired modern AI!

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Syntax Review: Combining Everything!",
        concept: {
          title: "🧰 Syntax Review: Combining Everything!",
          titleZh: "语法复习：把所有东西组合起来！",
          syntaxCards: [
            {
              symbol: "str()",
              name: "Convert to string (text)",
              nameZh: "转成字符串（文字）",
              emoji: "🔤",
              description: "Turns numbers into text so you can print() or concatenate them. Numbers and text don't mix without str()!",
              example: 'score = 100\nprint("Score: " + str(score))',
            },
            {
              symbol: "True / False",
              name: "Boolean (yes/no values)",
              nameZh: "布尔值（是/否）",
              emoji: "✅",
              description: "Only two possible values: True (yes ✅) or False (no ❌). Used with if/else and variables like flags.",
              example: 'has_key = False\nif found_key:\n    has_key = True',
            },
            {
              symbol: "variable = variable - value",
              name: "Update a variable",
              nameZh: "更新变量",
              emoji: "🔄",
              description: "You can change what's inside a box! Take the old value, do math, put the result back in the same box.",
              example: 'hp = 100\nhp = hp - 25  # hp is now 75',
            },
            {
              symbol: "Combining skills",
              name: "Real programs use everything together!",
              nameZh: "真正的程序把所有技能组合在一起！",
              emoji: "🏗️",
              description: "Variables store game state, input() gets player choices, if/else creates different paths, print() tells the story. That's a real program!",
              example: 'choice = input("Go left or right? ")\nif choice == "left":\n    print("You found treasure!")',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'player_name = input("Name? ")', explanation: "Ask for name, store it (input + variable)", explanationZh: "问名字并存储（输入+变量）" },
              { code: 'hp = 100', explanation: "Set up game state with a variable", explanationZh: "用变量设置游戏状态" },
              { code: 'has_key = False', explanation: "Boolean flag — player doesn't have the key yet", explanationZh: "布尔标记 — 玩家还没有钥匙" },
              { code: 'hp = hp - 25', explanation: "Update hp: take old value (100), subtract 25, store result (75)", explanationZh: "更新hp：旧值(100)减25，存回结果(75)" },
              { code: 'if hp > 50:', explanation: "Check condition: is HP still above 50?", explanationZh: "检查条件：HP还大于50吗？" },
              { code: '    print("Still strong!")', explanation: "↳ Only runs if hp > 50 is True", explanationZh: "↳ 只有 hp > 50 为 True 时运行" },
            ],
          },
        },
      },
      {
        type: "code",
        emoji: "🏗️",
        content: `## Game Foundation - Setup & Introduction

🎯 **What you'll learn:** How to set up a game with variables, booleans, and user input — the foundation of every game.
学习目标：如何用变量、布尔值和用户输入搭建游戏基础——每个游戏的起点。

Every game starts the same way: introduce the story, get player info, and set up the scoreboard 🎮. Think of this as building the stage before the actors perform!

🔑 **Key things to notice:**
- Boolean variables (True/False) track what the player has/hasn't done
- \`gold_coins = 0\` and \`courage_points = 50\` set starting stats
- \`str()\` converts numbers to text for display

👀 This is Part 1 — the setup. Watch how these variables get used later!`,
        code: `# 🎮 ESCAPE THE MYSTIC CASTLE

# A complete text adventure game using all our skills!

print("🏰 ═══════════════════════════════════")
print("   ESCAPE THE MYSTIC CASTLE")
print("═══════════════════════════════════ 🏰")
print()
print("🌙 You wake up in a mysterious castle...")
print("📜 An ancient scroll appears before you:")
print("'Complete three challenges to earn your freedom!'")
print()

# Get player info
player_name = input("🗡️ What is your name, brave adventurer? ")
print("Welcome, " + player_name + "! Your adventure begins... ✨")
print()

# Initialize game variables (player inventory & stats)
magic_potion = False
silver_key = False
gold_coins = 0
courage_points = 50

print("📊 Your starting stats:")
print("💖 Courage: " + str(courage_points))  
print("🎒 Inventory: [empty]")
print()`,
      },
      {
        type: "code",
        emoji: "🎮",
        content: `## 🎮 Mini Challenge: Combine Everything!

🎯 **What you'll learn:** How to combine variables, math, and if/else in one program — the core of game logic.
学习目标：如何在一个程序中组合变量、数学运算和 if/else——游戏逻辑的核心。

This is like a mini video game engine ⚙️ — store data (variables), do math (damage calculation), then make decisions (if/else). Every game works this way!

🔑 **Key things to notice:**
- \`hp = hp - damage\` updates a variable using its old value
- \`str()\` converts numbers so they can join text with +
- The if/else checks the NEW value of hp after damage

👀 Try changing damage to different values and predict the output!`,
        code: `# Use variables, math, and if-else together!
player = "Hero"
hp = 100
damage = 35
hp = hp - damage
print(player + " took " + str(damage) + " damage!")
print("HP remaining: " + str(hp))
if hp > 50:
    print("Still going strong!")
else:
    print("Getting dangerous!")`,
        exercise: {
          prompt: "Create a mini battle: set hp=100, damage=65. Subtract damage from hp. Print the remaining HP. If hp > 50 print \"Strong!\", else print \"Danger!\"",
          promptZh: "创建一个迷你战斗：hp=100, damage=65。用hp减去damage。打印剩余HP。如果hp>50打印 \"Strong!\"，否则打印 \"Danger!\"",
          starterCode: "hp = 100\ndamage = 65\n# Subtract damage\n# Print remaining HP\n# if-else check\n",
          expectedOutput: "35\nDanger!",
          hint: "hp = hp - damage, then print(hp), then if hp > 50: ...",
          hintZh: "hp = hp - damage，然后 print(hp)，再用 if hp > 50: ...",
          solution: "hp = 100\ndamage = 65\nhp = hp - damage\nprint(hp)\nif hp > 50:\n    print(\"Strong!\")\nelse:\n    print(\"Danger!\")",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🗡️ Mini Text Adventure · 迷你文字冒险",
          description: "Create a short text adventure: choose left or right, each path has a different outcome!\n创建文字冒险：选左或右，每条路有不同结果！",
          starterCode: "# Mini Text Adventure / 迷你文字冒险\nprint(\"🗡️ You enter a dark cave...\")\nprint(\"1. Go LEFT (dark tunnel)\")\nprint(\"2. Go RIGHT (glowing light)\")\n\nchoice = \"1\"  # Simulated choice / 模拟选择\n\n# Use if/else for different outcomes\n# 用 if/else 设计不同结局\n\n# Your code here / 你的代码\n",
          hint: "Use: if choice == \"1\": print(...) else: print(...) — make each path exciting!\n用 if/else 让每条路都精彩！",
          solution: "print(\"🗡️ You enter a dark cave...\")\nprint(\"1. Go LEFT (dark tunnel)\")\nprint(\"2. Go RIGHT (glowing light)\")\nchoice = \"1\"\nif choice == \"1\":\n    print(\"💀 A dragon appears! You run away!\")\n    print(\"🏃 Barely escaped! Lost 10 HP!\")\nelse:\n    print(\"✨ You found a treasure chest!\")\n    print(\"💰 You got 100 gold coins!\")",
          expectedOutput: "🗡️ You enter a dark cave...\n1. Go LEFT (dark tunnel)\n2. Go RIGHT (glowing light)\n💀 A dragon appears! You run away!\n🏃 Barely escaped! Lost 10 HP!",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🎮 Character Creator · 角色创建器",
          description: "Create a character with name, class and stats. Set different stats for Warrior/Mage/Archer!\n创建角色：不同职业有不同属性！",
          starterCode: "# Character Creator / 角色创建器\nname = \"Hero\"\nchar_class = \"Warrior\"\n\n# Set stats based on class / 根据职业设置属性\n# Warrior: hp=100, attack=15, magic=5\n# Mage: hp=60, attack=5, magic=20\n# Archer: hp=80, attack=12, magic=8\n\n# Your code here / 你的代码\n\n# Print character sheet / 打印角色卡",
          hint: "Use if/elif to set hp, attack, magic based on char_class, then print with f-strings.\n用 if/elif 根据职业设属性，用 f-string 打印。",
          solution: "name = \"Hero\"\nchar_class = \"Warrior\"\nif char_class == \"Warrior\":\n    hp, attack, magic = 100, 15, 5\nelif char_class == \"Mage\":\n    hp, attack, magic = 60, 5, 20\nelse:\n    hp, attack, magic = 80, 12, 8\nprint(f\"=== {name} the {char_class} ===\")\nprint(f\"❤️ HP: {hp}\")\nprint(f\"⚔️ Attack: {attack}\")\nprint(f\"✨ Magic: {magic}\")",
          expectedOutput: "=== Hero the Warrior ===\n❤️ HP: 100\n⚔️ Attack: 15\n✨ Magic: 5",
        },
      },
      {
        type: "quiz",
        content: "🏆 Graduation Quiz: Starter Island Mastery!",
        quiz: QUIZ_DATA["1-6"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🌀 AREA 2: LOOP FOREST (6 lessons)  
  // ═══════════════════════════════════════════════════════════════
  
  {
    id: "2-1",
    moduleId: "area-2", 
    title: "Turtle Polygon Master + Kaleidoscope!",
    subtitle: "for loops create amazing patterns · 多边形大师：for循环创造惊人图案",
    icon: "🌀",
    xp: 35,
    duration: "22 min",
    order: 1,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text",
        emoji: "🌀",
        content: `## 🌀 Welcome to Loop Forest!

**🐍 Py:** "Ready to see the MOST AMAZING power in programming? LOOPS!"

Remember how you drew a square with turtle? That took 4 lines of repetitive code:
\`\`\`python
forward(100)
right(90)
forward(100) 
right(90)
# ... etc 😴
\`\`\`

**But with FOR LOOPS, magic happens:**
\`\`\`python
for side in range(4):
    forward(100)
    right(90)
\`\`\`

**4 lines becomes 2!** Now let's create POLYGONS and KALEIDOSCOPES! ✨

🔧 Chip says: "Your CPU does billions of loops per second - this is its favorite job!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: The Power of Loops",
        concept: {
          title: "🔁 New Syntax: The Power of Loops",
          titleZh: "新语法：循环的力量",
          syntaxCards: [
            {
              symbol: "for x in range(n):",
              name: "For Loop",
              nameZh: "for 循环",
              emoji: "🔄",
              description: "Like a merry-go-round 🎠 — it repeats code a set number of times! range(4) means 'do this 4 times' (0, 1, 2, 3).",
              example: "for i in range(4):\n    print(i)\n# Output: 0 1 2 3",
            },
            {
              symbol: "range(start, stop)",
              name: "Range (with start & stop)",
              nameZh: "范围（起止值）",
              emoji: "📏",
              description: "A number ruler 📏 — generates numbers from start to stop-1. range(1, 6) gives you 1, 2, 3, 4, 5.",
              example: "for i in range(1, 6):\n    print(i)\n# Output: 1 2 3 4 5",
            },
            {
              symbol: "    (indent)",
              name: "Indentation (loop body)",
              nameZh: "缩进（循环体）",
              emoji: "➡️",
              description: "The 4-space indent is like a fence 🏗️ — everything indented 'belongs' to the loop and gets repeated.",
              example: "for i in range(3):\n    print('inside')  # repeated\nprint('outside')  # NOT repeated",
            },
            {
              symbol: "import turtle",
              name: "Import Module",
              nameZh: "导入模块",
              emoji: "📦",
              description: "Like opening a toolbox 🧰 — import brings in extra tools Python doesn't load by default.",
              example: "import turtle\nimport random",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import turtle", explanation: "Import the turtle drawing module — our digital artist!", explanationZh: "导入海龟绘图模块 — 我们的数字画家！" },
              { code: "t = turtle.Turtle()", explanation: "Create a turtle object we can command to draw.", explanationZh: "创建一个可以画图的海龟对象" },
              { code: "for side in range(4):", explanation: "Repeat the next lines 4 times (side = 0, 1, 2, 3).", explanationZh: "重复下面的代码 4 次（side = 0, 1, 2, 3）" },
              { code: "    t.forward(100)", explanation: "Move turtle forward 100 pixels (inside the loop!).", explanationZh: "海龟前进 100 像素（在循环内！）" },
              { code: "    t.right(90)", explanation: "Turn right 90° — loop draws a perfect square!", explanationZh: "右转 90° — 循环画出完美正方形！" },
            ],
          },
        },
      },
      {
        type: "code",
        emoji: "🔺",
        content: `## 🔺 Polygon Factory - Any Shape You Want!

🎯 **What you'll learn:** How to use a for loop with a calculated angle to draw ANY regular polygon.
学习目标：如何用 for 循环和计算出的角度画任意正多边形。

Here's the magic formula: turn angle = 360° ÷ number of sides 🔮. A square? 360÷4=90°. A hexagon? 360÷6=60°. With this one formula, you can draw ANY shape!

🔑 **Key things to notice:**
- \`360 / sides\` calculates the turn angle automatically
- \`range(sides)\` repeats exactly the right number of times
- Same code structure works for 3 sides or 100 sides!

👀 Click Run to see the turtle draw! Try changing the number of sides!`,
        code: `# 🔺 POLYGON FACTORY - Master of All Shapes!
import turtle

# Setup our shape wizard
wizard = turtle.Turtle()
wizard.shape("turtle")
wizard.color("blue")
wizard.speed(6)

# 🧮 The Magic Formula: 360° ÷ sides = angle per turn!
def draw_polygon(sides, size):
    angle = 360 / sides  # Math magic!
    
    print(f"🎨 Drawing {sides}-sided polygon...")
    print(f"📐 Each turn: {angle} degrees")
    
    # The loop does the hard work!
    for side in range(sides):
        wizard.forward(size)
        wizard.right(angle)
    
    print("✨ Polygon complete!")

# Draw different polygons with the same code!
print("🏭 POLYGON FACTORY STARTING...")

draw_polygon(3, 100)   # Triangle
wizard.penup()
wizard.goto(150, 0)
wizard.pendown()

draw_polygon(5, 80)    # Pentagon  
wizard.penup()
wizard.goto(-150, 0)
wizard.pendown()

draw_polygon(8, 60)    # Octagon

print("🎉 Polygon factory complete!")

# 🤖 Botty: "This is how computer graphics work - math + loops!"
turtle.done()`,
      },
      {
        type: "code",
        emoji: "🌈",
        content: `## 🌈 Kaleidoscope Creator - Psychedelic Art!

🎯 **What you'll learn:** How nested loops and color lists create mesmerizing repeating patterns.
学习目标：如何用嵌套循环和颜色列表创建令人着迷的重复图案。

A kaleidoscope works by repeating the same pattern with slight rotation 🔄. Our code does the same: draw, rotate a little, change color, repeat!

🔑 **Key things to notice:**
- The outer loop controls how many times the pattern repeats
- Colors cycle through a list using \`colors[i % len(colors)]\`
- Small angle changes between repetitions create the spiral effect

👀 Click Run to see the kaleidoscope! Try changing colors or angles!`,
        code: `# 🌈 KALEIDOSCOPE CREATOR - Trippy Pattern Master!
import turtle

# Setup our psychedelic artist
artist = turtle.Turtle()
artist.speed(10)  # Maximum speed for patterns!
artist.shape("turtle")

# Rainbow colors for maximum wow factor
colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

print("🌈 Creating kaleidoscope magic...")

# Draw 36 polygons in a circle = amazing pattern!
for i in range(36):
    # Pick a color from our rainbow
    color_index = i % len(colors)  # Cycles through colors!
    artist.color(colors[color_index])
    
    # Draw a hexagon (6 sides)
    for side in range(6):
        artist.forward(100)
        artist.right(60)  # 360÷6 = 60 degrees
    
    # Turn slightly for next hexagon
    artist.right(10)  # 360÷36 = 10 degrees

print("🎨 Kaleidoscope complete! Isn't math beautiful?")

# 🐍 Py: "36 hexagons × 6 sides = 216 lines drawn with just 2 loops!"

# 🔧 Chip: "Video game graphics use similar math for particle effects!"
turtle.done()`,
      },
      {
        type: "interactive",
        content: `## 🎯 Design Your Pattern Challenge!

**Your mission:** Design the most amazing pattern using loops + turtle!

**Pattern Ideas:**
- 🌟 **Star Burst:** Draw 20 lines from center, each rotated 18° (360°÷20)

- 🌼 **Flower Power:** Draw 12 circles arranged in a circle

- 🌀 **Spiral Galaxy:** Draw while moving forward AND turning slightly

- 🎆 **Fireworks:** Random colored lines exploding from center

**Math Magic Formulas:**
- Circle pattern: Turn = 360° ÷ number of repeats

- Polygon: Turn = 360° ÷ number of sides

- Spiral: Small forward + small turn = infinite beauty!

🐢 When you install Python locally, try creating these patterns!`,
        exercise: {
          prompt: "Use a for loop to print the numbers 1 through 5, one per line.",
          promptZh: "用 for 循环打印数字 1 到 5，每个数字一行。",
          starterCode: "# Use a for loop with range()\n",
          expectedOutput: "1\n2\n3\n4\n5",
          hint: "for i in range(1, 6): then print(i)",
          hintZh: "for i in range(1, 6): 然后 print(i)",
          solution: "for i in range(1, 6):\n    print(i)",
        },
      },
      {
        type: "code",
        emoji: "🎪",
        content: `## 🎪 Loop Circus - Text Patterns (runs in browser!)

🎯 **What you'll learn:** How to use for loops with string multiplication to create visual text patterns.
学习目标：如何用 for 循环和字符串乘法创建视觉文字图案。

String multiplication is like a copy machine 📄 — \`"⭐" * 3\` makes \`"⭐⭐⭐"\`. Combine that with loops that change the count each time, and you get pyramids, diamonds, and progress bars!

🔑 **Key things to notice:**
- \`"x" * n\` repeats a string n times
- \`range(10, 0, -1)\` counts backwards (10, 9, 8...)
- f-strings make formatting easy: \`f"[{bar}] {percent}%"\`

👀 Try changing the patterns — can you make an upside-down pyramid?`,
        code: `# 🎪 LOOP CIRCUS - Amazing Text Patterns!

# This runs in the browser since it's just text!

print("🎪 Welcome to the Loop Circus! 🎪")
print("=" * 40)

# Pattern 1: Star Pyramid
print("\\n⭐ STAR PYRAMID:")
for row in range(5):
    spaces = " " * (5 - row - 1)  # Decreasing spaces
    stars = "⭐" * (row + 1)      # Increasing stars
    print(spaces + stars)

# Pattern 2: Number Diamond  
print("\\n💎 NUMBER DIAMOND:")
for i in range(1, 6):
    spaces = " " * (5 - i)
    numbers = ""
    for num in range(1, i + 1):
        numbers += str(num)
    print(spaces + numbers)

# Pattern 3: Countdown Rocket
print("\\n🚀 COUNTDOWN ROCKET:")
for count in range(10, 0, -1):
    print("🚀 " + str(count))
print("💥 BLAST OFF!")

# Pattern 4: Progress Bar Simulation
print("\\n📊 LOADING PROGRESS:")
for percent in range(0, 101, 10):
    filled = "█" * (percent // 10)
    empty = "░" * (10 - percent // 10)
    print(f"[{filled}{empty}] {percent}%")

print("\\n🎉 Loop Circus Complete!")

# 🤖 Botty: "These are the building blocks of user interfaces!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "✖️ Times Table · 乘法表",
          description: "Print the 7 times table from 7×1 to 7×10!\n打印7的乘法表！",
          starterCode: "# Times Table / 乘法表\nnumber = 7\n\n# Print 7 x 1 = 7, 7 x 2 = 14, etc.\nfor i in range(1, 11):\n    result = ___\n    print(f\"{number} x {i} = {result}\")",
          hint: "result = number * i\nresult = number * i",
          solution: "number = 7\nfor i in range(1, 11):\n    result = number * i\n    print(f\"{number} x {i} = {result}\")",
          expectedOutput: "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "⭐ Star Line · 星星行",
          description: "Use a for loop to print a line of 20 stars using end=\"\"!\n用 for 循环打印20个星星，用 end=\"\" 保持同一行！",
          starterCode: "# Star Line / 星星行\n# Print 20 stars in one line using a loop\n# 用循环在一行打印20个星星\n# Hint: use end=\"\" to stay on same line\n\nfor i in range(___):\n    print(\"⭐\", end=\"\")\nprint()  # New line at the end",
          hint: "range(20) loops 20 times. end=\"\" prevents a new line after each star.\nrange(20) 循环20次。end=\"\" 防止每颗星后换行。",
          solution: "for i in range(20):\n    print(\"⭐\", end=\"\")\nprint()",
          expectedOutput: "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
        },
      },
      {
        type: "quiz",
        content: "🌀 Loop Master Quiz!",
        quiz: QUIZ_DATA["2-1"],
      },
    ],
  },

  {
    id: "2-2",
    moduleId: "area-2",
    title: "RPG Backpack System!", 
    subtitle: "Lists manage your epic inventory · RPG背包系统：用列表管理史诗装备",
    icon: "🎒",
    xp: 35,
    duration: "20 min",
    order: 2,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text",
        emoji: "🎒",
        content: `## 🎒 Welcome to RPG Backpack Academy!

**🐍 Py:** "Every great RPG hero needs an EPIC backpack system!"

Imagine you're playing the coolest RPG ever. Your backpack can hold:

- ⚔️ Weapons: ["Dragon Sword", "Magic Bow", "Lightning Staff"]  

- 🧪 Potions: ["Health Potion", "Mana Potion", "Speed Boost"]

- 🏆 Quest Items: ["Ancient Key", "Magic Crystal", "Dragon Scale"]

**Python Lists = Perfect RPG Inventories!**

**List Superpowers:**
- \`append(item)\` → Add new loot! 
- \`remove(item)\` → Use/drop items
- \`len(list)\` → Check how full your backpack is
- \`item in list\` → Do you have the magic key?

🔧 Chip says: "Real game engines use lists exactly like this for player inventories!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Lists — Your Digital Backpack",
        concept: {
          title: "🎒 New Syntax: Lists — Your Digital Backpack",
          titleZh: "新语法：列表 — 你的数字背包",
          syntaxCards: [
            {
              symbol: "[item1, item2]",
              name: "List (ordered collection)",
              nameZh: "列表（有序集合）",
              emoji: "📋",
              description: "Like a backpack 🎒 — holds multiple items in order! You can add, remove, and check what's inside.",
              example: 'backpack = ["Sword", "Potion", "Shield"]',
            },
            {
              symbol: ".append(item)",
              name: "Append (add to end)",
              nameZh: "追加（添加到末尾）",
              emoji: "➕",
              description: "Like picking up loot ✨ — adds a new item to the END of your list.",
              example: 'backpack.append("Dragon Scale")\n# backpack now has 4 items',
            },
            {
              symbol: ".remove(item)",
              name: "Remove (delete item)",
              nameZh: "移除（删除元素）",
              emoji: "🗑️",
              description: "Like using a potion 🧪 — removes the first matching item from the list.",
              example: 'backpack.remove("Potion")\n# Potion is gone!',
            },
            {
              symbol: "item in list",
              name: "Membership Check",
              nameZh: "成员检查",
              emoji: "🔍",
              description: "Like checking your pockets 🔍 — returns True if the item exists in the list.",
              example: 'if "Sword" in backpack:\n    print("Ready to fight!")',
            },
            {
              symbol: "len(list)",
              name: "Length (count items)",
              nameZh: "长度（计数）",
              emoji: "📊",
              description: "Like weighing your backpack ⚖️ — tells you how many items are inside.",
              example: 'print(len(backpack))  # 3',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'backpack = ["Sword", "Potion", "Torch"]', explanation: "Create a list with 3 starting items.", explanationZh: "创建包含 3 个初始物品的列表" },
              { code: 'backpack.append("Shield")', explanation: "Add 'Shield' to the end of the list.", explanationZh: "在列表末尾添加 'Shield'" },
              { code: 'if "Potion" in backpack:', explanation: "Check if we have a Potion before using it.", explanationZh: "使用之前先检查是否有药水" },
              { code: '    backpack.remove("Potion")', explanation: "Remove the Potion (we used it!).", explanationZh: "移除药水（我们用掉了！）" },
              { code: "print(len(backpack))", explanation: "Print how many items remain: 3.", explanationZh: "打印剩余物品数量：3" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## ⚔️ RPG Inventory Challenge!

**Your Quest:** You're exploring the Dungeon of Infinite Treasures!

Starting inventory: ["Rusty Sword", "Health Potion", "Torch"]

**Adventure Events:**
1. 🐉 Defeat a dragon → gain "Dragon Scale" 
2. 💎 Find treasure chest → gain "Ruby", "Gold Coins"
3. 🧙‍♂️ Meet wizard → trade "Ruby" for "Magic Staff"
4. ⚔️ Battle boss → use "Health Potion"

**Think:** What list operations would you use for each event?

- Add items? → \`.append()\`
- Remove items? → \`.remove()\`  
- Check if you have something? → \`in\``,
        exercise: {
          prompt: "Create a backpack list with [\"Sword\", \"Potion\"]. Append \"Shield\". Remove \"Potion\". Print the backpack.",
          promptZh: "创建一个背包列表 [\"Sword\", \"Potion\"]。添加 \"Shield\"。移除 \"Potion\"。打印背包。",
          starterCode: "backpack = [\"Sword\", \"Potion\"]\n# Add Shield\n# Remove Potion\n# Print backpack\n",
          expectedOutput: "['Sword', 'Shield']",
          hint: "Use .append() to add and .remove() to remove, then print(backpack)",
          hintZh: "用 .append() 添加，.remove() 移除，然后 print(backpack)",
          solution: "backpack = [\"Sword\", \"Potion\"]\nbackpack.append(\"Shield\")\nbackpack.remove(\"Potion\")\nprint(backpack)",
        },
      },
      {
        type: "code",
        emoji: "⚔️",
        content: `## ⚔️ Epic RPG Adventure - Backpack Master!

🎯 **What you'll learn:** How to use Python lists as an inventory system — adding, removing, and checking items.
学习目标：如何用 Python 列表作为背包系统——添加、删除和检查物品。

A list is like a real backpack 🎒 — you can stuff things in (append), take things out (remove), check what's inside (in), and count items (len). Every RPG game uses this!

🔑 **Key things to notice:**
- \`.append()\` adds items to the end of a list
- \`.remove()\` takes a specific item out
- \`"item" in backpack\` checks if something is in the list (True/False)

👀 Follow the adventure and watch how the backpack changes!`,
        code: `# ⚔️ LEGENDS OF THE LOST KINGDOM - Inventory System

print("🏰 ═══ LEGENDS OF THE LOST KINGDOM ═══")
print("⚔️ Your Epic Adventure Begins!")
print("═" * 40)

# Hero starting gear
backpack = ["Rusty Sword", "Health Potion", "Torch", "Bread"]
gold = 50
max_capacity = 10

print("🎒 Starting Backpack:", backpack)
print("💰 Starting Gold:", gold)
print("📊 Capacity:", str(len(backpack)) + "/" + str(max_capacity))
print()

# ADVENTURE EVENT 1: Dragon Battle!
print("🐉 DRAGON ENCOUNTER!")
print("You defeat the dragon and claim its treasure!")

dragon_loot = ["Dragon Scale", "Fire Ruby", "Ancient Scroll"]
for treasure in dragon_loot:
    if len(backpack) < max_capacity:
        backpack.append(treasure)
        print("✨ Looted:", treasure)
    else:
        print("💼 Backpack full! Can't take", treasure)

print("🎒 Backpack:", backpack)
print()

# ADVENTURE EVENT 2: Magic Shop!
print("🧙‍♂️ MAGIC SHOP ENCOUNTER!")
print("Wizard: 'I'll trade your Fire Ruby for a Magic Staff!'")

if "Fire Ruby" in backpack:
    backpack.remove("Fire Ruby")  # Remove the ruby
    backpack.append("Magic Staff")  # Add the staff
    print("🪄 Trade successful! You now have a Magic Staff!")
else:
    print("💔 You don't have a Fire Ruby to trade...")

print("🎒 Backpack:", backpack)
print()

# ADVENTURE EVENT 3: Boss Battle!
print("👹 BOSS BATTLE!")
print("The Shadow King appears! You need healing!")

if "Health Potion" in backpack:
    backpack.remove("Health Potion")
    print("🧪 Used Health Potion! HP restored!")
    print("⚔️ You defeat the Shadow King!")
    backpack.append("Crown of Victory")
    print("👑 Victory! You found the Crown of Victory!")
else:
    print("😵 No health potions left! This could be dangerous...")

print()
print("🏆 FINAL INVENTORY:")
print("🎒 Backpack:", backpack)
print("📊 Items:", str(len(backpack)) + "/" + str(max_capacity))

# 🤖 Botty: "This is how real RPG games manage millions of items!"`,
      },
      {
        type: "code",
        emoji: "🏪",
        content: `## 🏪 Backpack Organizer - Sort Your Loot!

🎯 **What you'll learn:** How to sort, slice, and organize lists — essential data management skills.
学习目标：如何排序、切片和整理列表——必备的数据管理技能。

Organizing a list is like tidying your room 🧹 — sort alphabetically, grab the first 3 items, or reverse the order. These operations are the building blocks of search engines and databases!

🔑 **Key things to notice:**
- \`.sort()\` arranges items alphabetically/numerically
- \`list[:3]\` grabs the first 3 items (slicing)
- \`.reverse()\` flips the order

👀 Try sorting your own list of favorite games or foods!`,
        code: `# 🏪 BACKPACK ORGANIZER - Keep Your Loot Tidy!

print("🏪 Welcome to the Backpack Organizer!")
print("Let's sort your epic loot by type! 📦")
print()

# Messy adventurer's backpack
messy_backpack = [
    "Dragon Sword", "Health Potion", "Magic Ring", 
    "Mana Potion", "Shield", "Ancient Key",
    "Fire Staff", "Speed Potion", "Gold Crown"
]

print("📦 Messy Backpack:", messy_backpack)
print()

# Create organized categories
weapons = []
potions = []
treasures = []

# Smart sorting with keywords!
for item in messy_backpack:
    item_lower = item.lower()  # Make lowercase for easier checking
    
    if "sword" in item_lower or "staff" in item_lower or "shield" in item_lower:
        weapons.append(item)
        print("⚔️ Weapon sorted:", item)
    elif "potion" in item_lower:
        potions.append(item)
        print("🧪 Potion sorted:", item)
    else:
        treasures.append(item)
        print("💎 Treasure sorted:", item)

print()
print("📊 ORGANIZED INVENTORY:")
print("⚔️ Weapons (" + str(len(weapons)) + "):", weapons)
print("🧪 Potions (" + str(len(potions)) + "):", potions)
print("💎 Treasures (" + str(len(treasures)) + "):", treasures)
print()
print("✨ Total items:", len(weapons) + len(potions) + len(treasures))

# 🔧 Chip: "Databases organize data exactly like this!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🎒 Shopping List · 购物清单",
          description: "Create a list, add 3 items with .append(), remove 1 with .remove(), print the result!\n创建列表，用 .append() 加3个，用 .remove() 删1个！",
          starterCode: "# Shopping List / 购物清单\nshopping = [\"milk\", \"bread\"]\n\n# Add 3 more items using .append()\n# 用 .append() 添加3个物品\n\n# Remove 1 item using .remove()\n# 用 .remove() 删除1个物品\n\n# Print result / 打印结果\nprint(f\"My list: {shopping}\")\nprint(f\"Total: {len(shopping)} items\")",
          hint: "shopping.append(\"eggs\") adds an item. shopping.remove(\"bread\") removes one.\n.append() 添加，.remove() 删除",
          solution: "shopping = [\"milk\", \"bread\"]\nshopping.append(\"eggs\")\nshopping.append(\"butter\")\nshopping.append(\"cheese\")\nshopping.remove(\"bread\")\nprint(f\"My list: {shopping}\")\nprint(f\"Total: {len(shopping)} items\")",
          expectedOutput: "My list: ['milk', 'eggs', 'butter', 'cheese']\nTotal: 4 items",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "📊 List Stats · 列表统计",
          description: "Find the highest, lowest, and average of a list of scores!\n找出分数列表的最高分、最低分和平均分！",
          starterCode: "# List Stats / 列表统计\nscores = [85, 92, 78, 95, 88, 73, 91]\n\n# Find highest / 最高分\nhighest = ___\n# Find lowest / 最低分\nlowest = ___\n# Calculate average / 平均分\naverage = ___\n\nprint(f\"Highest: {highest}\")\nprint(f\"Lowest: {lowest}\")\nprint(f\"Average: {average}\")",
          hint: "Use max(), min(), and sum()/len(): max(scores), min(scores), sum(scores)/len(scores)\n用 max(), min(), sum()/len()",
          solution: "scores = [85, 92, 78, 95, 88, 73, 91]\nhighest = max(scores)\nlowest = min(scores)\naverage = sum(scores) / len(scores)\nprint(f\"Highest: {highest}\")\nprint(f\"Lowest: {lowest}\")\nprint(f\"Average: {average}\")",
          expectedOutput: "Highest: 95\nLowest: 73\nAverage: 86.0",
        },
      },
      {
        type: "quiz",
        content: "🎒 RPG Backpack Master Quiz!",
        quiz: QUIZ_DATA["2-2"],
      },
    ],
  },

  {
    id: "2-3",
    moduleId: "area-2",
    title: "Number Guessing Game 2.0!",
    subtitle: "while loops + strategy = epic games · 猜数字游戏2.0：while循环+策略=史诗游戏",
    icon: "🎯",
    xp: 35,
    duration: "25 min", 
    order: 3,
    gradeRange: [4, 10],
    difficulty: "beginner",
    skillLevel: "beginner",
    sections: [
      {
        type: "text",
        emoji: "🎯",
        content: `## 🎯 Welcome to the Ultimate Guessing Game!

**🐍 Py:** "for loops are like following a recipe - you know the steps. while loops are like playing a game - you keep going until you WIN!"

**The difference:**
- **for loop:** "Do this exactly 5 times"

- **while loop:** "Keep doing this UNTIL you succeed!"

**Perfect for games:**
\`\`\`python

# Keep playing until you guess correctly!
secret = 42
guess = 0
while guess != secret:
    guess = int(input("Guess my number: "))
    print("Try again!")
print("You won!")
\`\`\`

🤖 Botty says: "AI systems use while loops to keep learning until they get smart enough!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: while Loops & Game Flow",
        concept: {
          title: "🔄 New Syntax: while Loops & Game Flow",
          titleZh: "新语法：while 循环与游戏流程",
          syntaxCards: [
            {
              symbol: "while condition:",
              name: "While Loop",
              nameZh: "while 循环",
              emoji: "🔁",
              description: "Like a stubborn gamer 🎮 — keeps going UNTIL the condition becomes False. Perfect when you don't know how many tries it'll take!",
              example: "while guess != secret:\n    guess = int(input('Guess: '))",
            },
            {
              symbol: "break",
              name: "Break (exit loop)",
              nameZh: "跳出循环",
              emoji: "🚪",
              description: "The emergency exit 🚪 — immediately stops the loop and jumps out, no matter what the condition says.",
              example: "while True:\n    if found:\n        break  # Exit!",
            },
            {
              symbol: "continue",
              name: "Continue (skip iteration)",
              nameZh: "跳过本次",
              emoji: "⏭️",
              description: "Like skipping a song ⏭️ — skips the rest of THIS iteration and jumps to the next one.",
              example: "while True:\n    if invalid:\n        continue  # Skip!",
            },
            {
              symbol: "import random",
              name: "Random Module",
              nameZh: "随机模块",
              emoji: "🎲",
              description: "A digital dice box 🎲 — gives you random numbers, choices, and shuffles for games!",
              example: "import random\nnum = random.randint(1, 100)",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import random", explanation: "Import the random module for generating secret numbers.", explanationZh: "导入随机模块生成秘密数字" },
              { code: "secret = random.randint(1, 100)", explanation: "Pick a random number between 1 and 100.", explanationZh: "在 1 到 100 之间随机选一个数" },
              { code: "while guess != secret:", explanation: "Keep looping as long as the guess is wrong.", explanationZh: "只要猜错就一直循环" },
              { code: "    guess = int(input('Guess: '))", explanation: "Ask for a new guess each time through the loop.", explanationZh: "每次循环都要求新的猜测" },
              { code: "    if guess < secret:", explanation: "Give a hint — is the guess too low or too high?", explanationZh: "给提示 — 猜的太低还是太高？" },
              { code: "print('You won!')", explanation: "After the loop ends, the player guessed correctly!", explanationZh: "循环结束后，玩家猜对了！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🧠 Game Strategy Challenge!

**Think like a game designer:**

You want a number guessing game that:
1. 🎲 Computer picks random number 1-100
2. 🎯 Player keeps guessing until correct
3. 💡 Give "higher" or "lower" hints
4. 📊 Count how many guesses it took
5. 🏆 Celebrate when they win!

**Which programming concepts do you need?**
- Random number → \`random.randint(1, 100)\`
- Keep asking → \`while guess != secret:\`
- Count guesses → increment a counter variable
- Give hints → if/else comparisons

Let's code this step by step! 🚀`,
      },
      {
        type: "code",
        emoji: "🎮",
        content: `## 🎮 Number Guessing Game 2.0 - The Ultimate Version!

🎯 **What you'll learn:** How to use while loops, random numbers, and counters to build a real game.
学习目标：如何用 while 循环、随机数和计数器构建一个真正的游戏。

A while loop is like a stubborn security guard 💂 — it keeps asking "password?" until you get it right! Combined with \`random\`, you get a game that's different every time.

🔑 **Key things to notice:**
- \`while guess != secret:\` keeps looping until correct
- \`import random\` + \`random.randint(1, 100)\` generates a mystery number
- A counter variable tracks how many attempts

👀 Try playing the game — can you guess in under 7 tries?`,
        code: `# 🎮 NUMBER GUESSING GAME 2.0 - Pro Gamer Edition!
import random

print("🎯 ═══ ULTIMATE NUMBER GUESSING GAME ═══")
print("🎲 I'm thinking of a number between 1 and 100...")
print("🎯 Can you guess it? I'll give you hints!")
print("═" * 45)

# Game setup
secret_number = random.randint(1, 100)
guess_count = 0
max_guesses = 10
player_name = input("🎮 Enter your gamer name: ")

print(f"Good luck, {player_name}! You have {max_guesses} guesses! 🍀")
print()

# Main game loop - keep going until win or lose!
while guess_count < max_guesses:
    guess_count = guess_count + 1  # Count this attempt
    remaining = max_guesses - guess_count + 1
    
    print(f"🎯 Guess #{guess_count} (📊 {remaining} guesses left):")
    
    # Get player's guess (with error handling!)
    try:
        player_guess = int(input("Your guess: "))
    except:
        print("🤔 That's not a number! Try again!")
        guess_count = guess_count - 1  # Don't count invalid guesses
        continue
    
    # Check the guess and give smart hints!
    if player_guess == secret_number:
        print(f"🎉 VICTORY! You guessed it in {guess_count} tries!")
        print(f"🏆 Congratulations, {player_name}! You're a guessing master!")
        break  # Exit the loop - game won!
    
    elif player_guess < secret_number:
        # Too low - give encouraging hint
        difference = secret_number - player_guess
        if difference > 20:
            print("📈 WAY too low! Think much higher! 🚀")
        elif difference > 5:
            print("📈 Too low! Go higher! ⬆️")
        else:
            print("📈 Close! Just a bit higher! 🔥")
    
    else:  # player_guess > secret_number
        # Too high - give encouraging hint  
        difference = player_guess - secret_number
        if difference > 20:
            print("📉 WAY too high! Think much lower! ⬇️")
        elif difference > 5:
            print("📉 Too high! Go lower! ⬇️")
        else:
            print("📉 Close! Just a bit lower! 🔥")
    
    print()

# Check if we ran out of guesses
if guess_count >= max_guesses and player_guess != secret_number:
    print(f"💔 Game Over! The number was {secret_number}")
    print(f"🎮 Better luck next time, {player_name}!")

print("\\n🎯 Thanks for playing Number Guessing Game 2.0!")

# 🔧 Chip: "This game loop runs on every gaming device!"

# 🤖 Botty: "AI learns by making guesses and getting feedback, just like this!"`,
      },
      {
        type: "code",
        emoji: "🏆",
        content: `## 🏆 Advanced: High Score Challenge Mode!

🎯 **What you'll learn:** How to use loops within loops and track best scores across multiple rounds.
学习目标：如何使用循环嵌套并跨多轮追踪最佳成绩。

This is how arcade games work! 🕹️ An outer loop runs multiple rounds, while the inner loop handles each guessing attempt. A "best score" variable remembers your record across all rounds.

🔑 **Key things to notice:**
- Outer for loop = multiple rounds; inner while loop = guessing
- \`min()\` finds the smallest number (best/fewest attempts)
- Variables outside the loop persist between rounds

👀 Can you beat your own high score?`,
        code: `# 🏆 HIGH SCORE CHALLENGE - Multiple Rounds!
import random

print("🏆 CHALLENGE MODE: Best Average Score Wins!")
print("🎮 You'll play 3 rounds - lowest average wins!")
print()

total_guesses = 0
rounds_played = 0

# Play multiple rounds
while rounds_played < 3:
    rounds_played = rounds_played + 1
    secret = random.randint(1, 50)  # Easier range for challenge mode
    guesses_this_round = 0
    
    print(f"🎯 ROUND {rounds_played}/3")
    print("🎲 New number between 1-50!")
    
    # Single round game loop
    while True:
        guesses_this_round = guesses_this_round + 1
        guess = int(input(f"Guess #{guesses_this_round}: "))
        
        if guess == secret:
            print(f"✅ Correct! Found it in {guesses_this_round} guesses!")
            total_guesses = total_guesses + guesses_this_round
            break
        elif guess < secret:
            print("📈 Higher!")
        else:
            print("📉 Lower!")
    
    print(f"📊 Round {rounds_played} complete!")
    print()

# Calculate final score
average_guesses = total_guesses / rounds_played
print("🏆 FINAL RESULTS:")
print(f"📊 Total guesses across 3 rounds: {total_guesses}")
print(f"📈 Average guesses per round: {average_guesses:.1f}")

# Score evaluation
if average_guesses <= 3:
    print("🥇 AMAZING! You're a guessing genius!")
elif average_guesses <= 5:
    print("🥈 Great job! Excellent pattern recognition!")
else:
    print("🥉 Good effort! Practice makes perfect!")

# 🤖 Botty: "This scoring system is how AI measures its learning progress!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🚀 Countdown Timer · 倒计时器",
          description: "Create a countdown from 10 to 1, then print 'Liftoff! 🚀'\n从10倒数到1，然后打印 'Liftoff! 🚀'",
          starterCode: "# Countdown Timer / 倒计时器\ncount = 10\n\n# Count down using while loop\n# 用 while 循环倒数\nwhile ___:\n    print(count)\n    count = ___\n\nprint(\"🚀 Liftoff!\")",
          hint: "Loop while count > 0, decrease by 1: count = count - 1\n循环条件 count > 0，每次减1",
          solution: "count = 10\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"🚀 Liftoff!\")",
          expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n🚀 Liftoff!",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔑 Password Gate · 密码门",
          description: "Create a password checker with 3 attempts! Use while loop + break.\n创建密码检查器，3次机会！用 while 循环 + break。",
          starterCode: "# Password Gate / 密码门\npassword = \"python123\"\nattempts = 3\n\nwhile attempts > 0:\n    guess = \"wrong\"  # Simulated input\n    if guess == password:\n        print(\"🔓 Access granted!\")\n        break\n    else:\n        attempts = attempts - 1\n        print(f\"❌ Wrong! {attempts} tries left.\")\n\nif attempts == 0:\n    print(\"🔒 Locked out!\")",
          hint: "The code works! Try changing guess = \"wrong\" to guess = \"python123\" to see the success path.\n试着改 guess 看成功路径。",
          solution: "password = \"python123\"\nattempts = 3\nwhile attempts > 0:\n    guess = \"wrong\"\n    if guess == password:\n        print(\"🔓 Access granted!\")\n        break\n    else:\n        attempts = attempts - 1\n        print(f\"❌ Wrong! {attempts} tries left.\")\nif attempts == 0:\n    print(\"🔒 Locked out!\")",
          expectedOutput: "❌ Wrong! 2 tries left.\n❌ Wrong! 1 tries left.\n❌ Wrong! 0 tries left.\n🔒 Locked out!",
        },
      },
      {
        type: "quiz",
        content: "🎯 Number Guessing Master Quiz!",
        quiz: QUIZ_DATA["2-3"],
      },
    ],
  },

  {
    id: "2-4",
    moduleId: "area-2", 
    title: "Pattern Printing Palace!",
    subtitle: "Nested loops create amazing patterns · 图案打印宫：嵌套循环创造惊人图案",
    icon: "🎨",
    xp: 40,
    duration: "25 min",
    order: 4,
    gradeRange: [6, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🎨",
        content: `## 🎨 Welcome to the Pattern Printing Palace!

**🐍 Py:** "Ready to become a PATTERN WIZARD? Nested loops = loops inside loops = INFINITE CREATIVITY!"

**The Magic Formula:**
- **Outer loop:** Controls ROWS (how many lines down)

- **Inner loop:** Controls COLUMNS (how many characters across)

\`\`\`python

# Draw a 5×5 square of stars
for row in range(5):        # Outer: 5 rows
    for col in range(5):    # Inner: 5 stars per row
        print("⭐", end="")
    print()                # New line after each row
\`\`\`

**🔧 Chip explains:** Your computer screen is a giant grid! Every pixel is drawn using nested loops - that's how all graphics work! 

**🤖 Botty says:** "AI image generators use nested loops to create every pixel of their amazing art!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Nested Loops & print() Tricks",
        concept: {
          title: "🎨 New Syntax: Nested Loops & print() Tricks",
          titleZh: "新语法：嵌套循环与 print() 技巧",
          syntaxCards: [
            {
              symbol: "for row in ...:\n  for col in ...:",
              name: "Nested Loops",
              nameZh: "嵌套循环",
              emoji: "🔄",
              description: "A loop inside a loop 🎡 — the inner loop runs COMPLETELY for each step of the outer loop. Like a clock: minutes inside hours!",
              example: "for row in range(3):\n    for col in range(3):\n        print('⭐', end='')\n    print()",
            },
            {
              symbol: 'print(..., end="")',
              name: "Print without newline",
              nameZh: "不换行打印",
              emoji: "➡️",
              description: "Normally print() adds a new line at the end. end='' tells it: stay on the same line! Perfect for building patterns.",
              example: 'print("⭐", end="")\nprint("⭐", end="")\n# Output: ⭐⭐ (same line!)',
            },
            {
              symbol: '"x" * n',
              name: "String Repetition",
              nameZh: "字符串重复",
              emoji: "✖️",
              description: "Like a copy machine 🖨️ — repeats a string n times! Super handy for building patterns.",
              example: 'print("⭐" * 5)\n# Output: ⭐⭐⭐⭐⭐',
            },
            {
              symbol: "range(start, stop, step)",
              name: "Range with Step",
              nameZh: "带步长的范围",
              emoji: "👣",
              description: "Skip-counting 🦘 — count by 2s, 3s, or even backwards! step controls the jump size.",
              example: "for i in range(10, 0, -1):\n    print(i)  # Countdown!",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "for row in range(5):", explanation: "Outer loop: controls how many rows (5 rows).", explanationZh: "外循环：控制行数（5 行）" },
              { code: "    for col in range(row + 1):", explanation: "Inner loop: row 0→1 star, row 1→2 stars, etc.", explanationZh: "内循环：第 0 行→1 颗星，第 1 行→2 颗星，以此类推" },
              { code: '        print("⭐", end="")', explanation: "Print a star WITHOUT moving to next line.", explanationZh: "打印星星但不换行" },
              { code: "    print()", explanation: "After inner loop, move to the next line.", explanationZh: "内循环结束后换行" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🧠 Pattern Designer Challenge!

**Your mission:** Design the most amazing text patterns ever!

**Pattern Building Rules:**
- **Outer loop = Rows:** How tall is your pattern?

- **Inner loop = Columns:** What goes on each row?

- **Variables change:** Make each row different!

**Cool Pattern Ideas:**
- 🏔️ **Mountain:** Each row has more stars than the last

- 💎 **Diamond:** Wide in middle, narrow at ends  

- 🔢 **Number Stairs:** 1, 12, 123, 1234...

- 🌈 **Rainbow:** Different colors/characters per row

**Think:** How would you code a triangle that starts with 1 star and adds 1 more each row?`,
      },
      {
        type: "code",
        emoji: "⭐",
        content: `## ⭐ Star Pattern Factory - Your First Masterpieces!

🎯 **What you'll learn:** How nested loops (a loop inside a loop) create 2D patterns row by row.
学习目标：如何用嵌套循环（循环中的循环）逐行创建二维图案。

Think of it like a typewriter 📝 — the outer loop moves to a new line (row), and the inner loop types characters across (columns). Row by row, a pattern appears!

🔑 **Key things to notice:**
- Outer loop = which row we're on
- Inner loop = what to print on that row
- String multiplication \`"⭐" * n\` is a shortcut for repeating

👀 Try changing the range numbers to make bigger or different patterns!`,
        code: `# ⭐ STAR PATTERN FACTORY - Nested Loop Magic!

print("🌟 Welcome to the Star Pattern Factory! 🌟")
print("=" * 45)

# Pattern 1: Simple Square
print("\\n🟦 PATTERN 1: Perfect Square")
for row in range(5):
    for col in range(5):
        print("⭐", end="")  # Print star without newline
    print()  # New line after each row completes

# Pattern 2: Right Triangle (Growing)
print("\\n📐 PATTERN 2: Growing Triangle") 
for row in range(6):  # 6 rows
    for col in range(row + 1):  # Row 0→1 star, Row 1→2 stars, etc.
        print("⭐", end="")
    print()

# Pattern 3: Upside Down Triangle (Shrinking)
print("\\n📐 PATTERN 3: Shrinking Triangle")
for row in range(5):
    for col in range(5 - row):  # Row 0→5 stars, Row 1→4 stars, etc.
        print("⭐", end="")
    print()

# Pattern 4: Number Stairs
print("\\n🔢 PATTERN 4: Number Stairs")
for row in range(1, 6):  # Rows 1 to 5
    for number in range(1, row + 1):  # Numbers 1 to current row
        print(number, end="")
    print()

# Pattern 5: Multiplication Table Preview
print("\\n📊 PATTERN 5: Mini Multiplication Table")
for row in range(1, 4):  # 3 rows
    for col in range(1, 4):  # 3 columns  
        result = row * col
        print(f"{result:2}", end=" ")  # Format with 2 spaces
    print(f" ← {row} × table")

print("\\n✨ Pattern Factory Complete! Wasn't that AMAZING?")

# 🔧 Chip: "Your computer screen was drawn using patterns just like these!"`,
      },
      {
        type: "code",
        emoji: "💎",
        content: `## 💎 Advanced Pattern Academy - Diamond & Pyramid Masters!

🎯 **What you'll learn:** How to calculate spaces and symbols mathematically to create centered patterns.
学习目标：如何通过数学计算空格和符号来创建居中图案。

A diamond shape is just two pyramids stacked! 💎 The secret is controlling spaces: more spaces = more centered. It's math + art working together.

🔑 **Key things to notice:**
- Spaces decrease as stars increase (they add up to a constant!)
- The top half counts up, the bottom half counts down
- \`" " * (n - i)\` creates the right amount of spacing

👀 Can you figure out the math pattern before reading the code?`,
        code: `# 💎 ADVANCED PATTERN ACADEMY - For Pattern Ninjas!

print("💎 ADVANCED PATTERN ACADEMY 💎")
print("🥷 Ninja-level nested loops ahead!")
print("=" * 40)

# Pattern 1: Centered Pyramid
print("\\n🏔️ PATTERN 1: Centered Pyramid")
height = 5
for row in range(height):
    # Print spaces for centering
    spaces = height - row - 1
    stars = row + 1
    
    for space in range(spaces):
        print(" ", end="")
    
    for star in range(stars):
        print("⭐", end="")
    
    print()  # New line

# Pattern 2: Diamond Shape  
print("\\n💎 PATTERN 2: Perfect Diamond")

# Top half (growing)
for row in range(4):
    spaces = 3 - row
    stars = row + 1
    
    for space in range(spaces):
        print(" ", end="")
    for star in range(stars):
        print("💎", end="")
    print()

# Bottom half (shrinking)
for row in range(3):
    spaces = row + 1  
    stars = 3 - row
    
    for space in range(spaces):
        print(" ", end="")
    for star in range(stars):
        print("💎", end="")
    print()

# Pattern 3: Rainbow Pattern
print("\\n🌈 PATTERN 3: Rainbow Pattern")
colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣"]
for row in range(6):
    color = colors[row]  # Pick color for this row
    for col in range(row + 1):
        print(color, end="")
    print(f" ← Row {row + 1}")

# Pattern 4: Chess Board Pattern
print("\\n♟️ PATTERN 4: Mini Chessboard")
for row in range(4):
    for col in range(4):
        if (row + col) % 2 == 0:  # Even squares
            print("⬜", end="")
        else:  # Odd squares
            print("⬛", end="")
    print()

print("\\n🏆 You've mastered advanced patterns! You're a nested loop ninja!")

# 🤖 Botty: "Video game textures are created with patterns like these!"`,
      },
      {
        type: "code",
        emoji: "🎮",
        content: `## 🎮 Interactive Pattern Generator - Build Your Own!

🎯 **What you'll learn:** How to use user input to customize loop behavior — making programs interactive.
学习目标：如何用用户输入来定制循环行为——让程序变得交互化。

This is like a pattern vending machine 🎰 — you choose the size and style, and the loops generate it for you! Input controls what the loops create.

🔑 **Key things to notice:**
- \`int(input(...))\` turns user text into a number for range()
- The same loop code creates different results based on input
- This is how customizable software works!

👀 Try different sizes and see how the patterns scale!`,
        code: `# 🎮 BUILD YOUR OWN PATTERN GENERATOR!

print("🎮 INTERACTIVE PATTERN GENERATOR")
print("Create any pattern you can imagine!")
print("=" * 40)

# Get user's creative input
pattern_height = int(input("🔢 How tall should your pattern be (1-10)? "))
pattern_char = input("✨ What character/emoji to use? ")
pattern_type = input("📐 Pattern type (square/triangle/diamond)? ").lower()

print(f"\\n🎨 Creating your {pattern_type} pattern with {pattern_char}!")
print("-" * 30)

if pattern_type == "square":
    # Square pattern
    for row in range(pattern_height):
        for col in range(pattern_height):
            print(pattern_char, end="")
        print()

elif pattern_type == "triangle":
    # Triangle pattern
    for row in range(pattern_height):
        for col in range(row + 1):
            print(pattern_char, end="")
        print()

elif pattern_type == "diamond":
    # Diamond pattern (simplified)
    # Top half
    for row in range(pattern_height // 2 + 1):
        spaces = pattern_height // 2 - row
        for space in range(spaces):
            print(" ", end="")
        for star in range(row + 1):
            print(pattern_char, end="")
        print()
    
    # Bottom half
    for row in range(pattern_height // 2 - 1, -1, -1):
        spaces = pattern_height // 2 - row
        for space in range(spaces):
            print(" ", end="")
        for star in range(row + 1):
            print(pattern_char, end="")
        print()

else:
    print("🤔 I don't know that pattern yet! Try square, triangle, or diamond.")

print(f"\\n🎉 Your custom {pattern_type} pattern is complete!")
print("🔧 You just used nested loops like a pro programmer!")

# 🐍 Py: "You're thinking like a computer graphics programmer now!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔺 Right Triangle · 直角三角形",
          description: "Print a right triangle of stars with 5 rows using nested loops!\n用嵌套循环打印5行直角三角形！",
          starterCode: "# Right Triangle / 直角三角形\n# Row 1: *\n# Row 2: **\n# Row 3: ***\n# Row 4: ****\n# Row 5: *****\n\nfor row in range(1, 6):\n    for col in range(___):\n        print(\"*\", end=\"\")\n    print()",
          hint: "Inner loop runs 'row' times: range(row). Row 1 prints 1 star, row 2 prints 2, etc.\n内层循环 range(row)。第1行1个星，第2行2个。",
          solution: "for row in range(1, 6):\n    for col in range(row):\n        print(\"*\", end=\"\")\n    print()",
          expectedOutput: "*\n**\n***\n****\n*****",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🏰 Rectangle Border · 矩形边框",
          description: "Print a 6×4 rectangle border: * for edges, spaces inside!\n打印6×4矩形边框：边用 *，内部用空格！",
          starterCode: "# Rectangle Border / 矩形边框\nwidth = 6\nheight = 4\n# Should print:\n# ******\n# *    *\n# *    *\n# ******\n\nfor row in range(height):\n    for col in range(width):\n        if ___:\n            print(\"*\", end=\"\")\n        else:\n            print(\" \", end=\"\")\n    print()",
          hint: "Border: row == 0 or row == height-1 or col == 0 or col == width-1\n边框条件：第一行、最后一行、第一列、最后一列",
          solution: "width = 6\nheight = 4\nfor row in range(height):\n    for col in range(width):\n        if row == 0 or row == height-1 or col == 0 or col == width-1:\n            print(\"*\", end=\"\")\n        else:\n            print(\" \", end=\"\")\n    print()",
          expectedOutput: "******\n*    *\n*    *\n******",
        },
      },
      {
        type: "quiz",
        content: "🎨 Pattern Printing Master Quiz!",
        quiz: QUIZ_DATA["2-4"],
      },
    ],
  },

  {
    id: "2-5",
    moduleId: "area-2",
    title: "Secret Password Encryptor!",
    subtitle: "String magic protects your secrets · 密码加密器：字符串魔法保护秘密",
    icon: "🔐",
    xp: 35,
    duration: "22 min",
    order: 5,
    gradeRange: [6, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🔐",
        content: `## 🔐 Welcome to the Secret Agent Academy!

**🐍 Py:** "Strings aren't just text - they're SECRET CODES waiting to be encrypted!"

Every great secret agent needs to know cryptography! Today you'll learn:

- 🔤 How to scramble text into secret codes

- 🔍 How to decode encrypted messages  

- 🧮 Caesar cipher (used by Julius Caesar!)

- 🌐 Why encryption protects the internet

**String Superpowers for Spies:**
- \`.upper()\` → "hello" becomes "HELLO" (like shouting in code!)
- \`.replace()\` → Replace letters with other letters
- \`ord()\` → Get the secret number of each letter (A=65, B=66...)
- \`chr()\` → Convert numbers back to letters

🔧 Chip says: "Every website uses encryption to protect passwords and credit cards!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: String Superpowers",
        concept: {
          title: "🔤 New Syntax: String Superpowers",
          titleZh: "新语法：字符串超能力",
          syntaxCards: [
            {
              symbol: ".upper() / .lower()",
              name: "Case Conversion",
              nameZh: "大小写转换",
              emoji: "🔠",
              description: "Like a volume knob 🔊 — .upper() SHOUTS (all caps), .lower() whispers (all lowercase).",
              example: '"hello".upper()  # "HELLO"\n"HELLO".lower()  # "hello"',
            },
            {
              symbol: "ord(char)",
              name: "Character to Number",
              nameZh: "字符转数字",
              emoji: "🔢",
              description: "Every letter has a secret number 🔢 — ord() reveals it! A=65, B=66, a=97, etc.",
              example: "ord('A')  # 65\nord('B')  # 66",
            },
            {
              symbol: "chr(num)",
              name: "Number to Character",
              nameZh: "数字转字符",
              emoji: "🔤",
              description: "The reverse spell 🪄 — turns a number back into its letter. The decoder ring!",
              example: "chr(65)  # 'A'\nchr(66)  # 'B'",
            },
            {
              symbol: ".isalpha()",
              name: "Is it a letter?",
              nameZh: "是否为字母",
              emoji: "❓",
              description: "A letter detector 🔍 — returns True if the character is a letter (not space, number, or symbol).",
              example: '"A".isalpha()   # True\n"5".isalpha()   # False\n" ".isalpha()   # False',
            },
            {
              symbol: "% (modulo)",
              name: "Modulo (remainder)",
              nameZh: "取余（模运算）",
              emoji: "🔃",
              description: "The wraparound trick 🔃 — gives the remainder after division. Perfect for cycling through 26 letters!",
              example: "27 % 26  # 1 (wraps around!)\n5 % 3    # 2",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'message = "HELLO"', explanation: "The secret message to encrypt.", explanationZh: "要加密的秘密消息" },
              { code: "for letter in message:", explanation: "Loop through each character one by one.", explanationZh: "逐个遍历每个字符" },
              { code: "    pos = ord(letter) - ord('A')", explanation: "Convert letter to position: A=0, B=1, C=2...", explanationZh: "把字母转成位置：A=0, B=1, C=2..." },
              { code: "    new_pos = (pos + 3) % 26", explanation: "Shift by 3, wrap around with % 26.", explanationZh: "偏移 3 位，用 % 26 实现环绕" },
              { code: "    encrypted += chr(new_pos + ord('A'))", explanation: "Convert back to letter and add to result.", explanationZh: "转回字母并添加到结果中" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🕵️ Spy Training Challenge!

**Your Mission:** Agent 007, we need you to encrypt this secret message!

**Original Message:** "MEET AT MIDNIGHT"
**Encryption Method:** Caesar Cipher +3 (shift each letter forward by 3)

**How it works:**
- A → D (A+3=D)

- B → E (B+3=E)  

- C → F (C+3=F)

- ...

- M → P, E → H, E → H, T → W...

**Your Task:** What would "MEET AT MIDNIGHT" become?

**Hint:** M→P, E→H, E→H, T→W, (space stays), A→D, T→W...

Try figuring it out before seeing the code! 🧠`,
      },
      {
        type: "code",
        emoji: "🕵️",
        content: `## 🕵️ Caesar Cipher Encryption Machine!

🎯 **What you'll learn:** How to use string indexing, loops, and the \`in\` operator to encrypt messages character by character.
学习目标：如何用字符串索引、循环和 in 运算符逐字符加密消息。

Caesar Cipher is one of the oldest codes in history! 🏛️ Julius Caesar used it to send secret military messages. Each letter shifts forward by a fixed number — A becomes D (shift 3), B becomes E, etc.

🔑 **Key things to notice:**
- \`.find()\` locates a character's position in the alphabet
- Modulo \`% 26\` wraps Z back to A (circular shifting!)
- Non-letter characters pass through unchanged

👀 Try encrypting your name and then decoding it!`,
        code: `# 🕵️ SECRET AGENT ENCRYPTION MACHINE v2.0!

print("🔐 ═══ SECRET AGENT HEADQUARTERS ═══")
print("🕵️ Welcome to the Encryption Academy!")
print("═" * 42)

# Get secret message from user
secret_message = input("🤫 Enter your secret message: ").upper()
shift = int(input("🔢 Enter shift amount (1-25): "))

print(f"\\n🔒 Encrypting '{secret_message}' with Caesar cipher...")
print("=" * 40)

# Encrypt the message!
encrypted = ""
for letter in secret_message:
    if letter.isalpha():  # Only encrypt letters, not spaces/punctuation
        # Get letter position (A=0, B=1, C=2...)
        letter_position = ord(letter) - ord('A')
        
        # Shift the position and wrap around if needed
        new_position = (letter_position + shift) % 26
        
        # Convert back to letter
        encrypted_letter = chr(new_position + ord('A'))
        encrypted += encrypted_letter
        
        # Show the encryption step by step!
        print(f"🔄 {letter} → {encrypted_letter} (shifted by {shift})")
    else:
        # Keep spaces and punctuation as-is
        encrypted += letter
        print(f"💭 '{letter}' → '{letter}' (unchanged)")

print(f"\\n🔐 ENCRYPTED MESSAGE: {encrypted}")
print(f"🎯 Original: {secret_message}")
print(f"✨ Encrypted: {encrypted}")

# Fun fact about encryption!
print("\\n🤓 SECRET AGENT FACT:")
print("Julius Caesar used this cipher 2000+ years ago!")
print("🌐 Modern internet uses much stronger encryption!")

# 🤖 Botty: "AI language models work by turning words into numbers, just like this!"`,
      },
      {
        type: "code",
        emoji: "🔓",
        content: `## 🔓 Message Decoder - Break the Code!

🎯 **What you'll learn:** How to reverse an encryption by shifting letters in the opposite direction.
学习目标：如何通过反方向移动字母来反转加密。

Decoding is just encrypting in reverse! 🔄 If the encoder shifted +3, the decoder shifts -3. Same code, opposite direction. This is the foundation of all cryptography!

🔑 **Key things to notice:**
- Decoding uses the SAME logic as encoding, just subtract instead of add
- A brute-force decoder tries ALL 26 shifts to crack unknown messages
- \`for shift in range(26):\` systematically tries every possibility

👀 Can you decode a secret message from a friend?`,
        code: `# 🔓 SECRET MESSAGE DECODER - Crack Any Code!

print("🔓 MESSAGE DECODER ACTIVATED!")
print("🕵️ Time to crack some secret codes!")
print("=" * 35)

# Pre-made encrypted messages to decode
secret_messages = [
    ("KHOOR ZRUOG", 3, "Caesar cipher +3"),
    ("WKLV LV IXQ", 3, "Caesar cipher +3"), 
    ("SURJUDPPLQJ", 3, "Caesar cipher +3")
]

print("🎯 Intercepted encrypted messages:")
for i, (encrypted, shift, method) in enumerate(secret_messages):
    print(f"📨 Message {i+1}: {encrypted} (Method: {method})")

print("\\n🔍 Attempting to decode...")

for i, (encrypted_msg, shift, method) in enumerate(secret_messages):
    print(f"\\n📨 Decoding Message {i+1}: {encrypted_msg}")
    
    # Decode by shifting BACKWARD
    decoded = ""
    for letter in encrypted_msg:
        if letter.isalpha():
            letter_position = ord(letter) - ord('A')
            original_position = (letter_position - shift) % 26
            original_letter = chr(original_position + ord('A'))
            decoded += original_letter
        else:
            decoded += letter  # Keep spaces
    
    print(f"🔓 DECODED: {decoded}")

# Interactive decoder
print("\\n🎮 YOUR TURN TO DECODE!")
user_encrypted = input("🔒 Enter encrypted message: ").upper()
user_shift = int(input("🔢 Enter shift amount: "))

decoded_message = ""
for letter in user_encrypted:
    if letter.isalpha():
        letter_position = ord(letter) - ord('A')
        original_position = (letter_position - user_shift) % 26
        original_letter = chr(original_position + ord('A'))
        decoded_message += original_letter
    else:
        decoded_message += letter

print(f"\\n✨ YOUR DECODED MESSAGE: {decoded_message}")

# Real-world connection
print("\\n🌐 REAL WORLD CONNECTION:")
print("🔐 HTTPS websites encrypt your data!")
print("💳 Credit cards, passwords, messages - all encrypted!")
print("🤖 AI models encrypt their training data too!")

# 🔧 Chip: "Modern encryption is like this but with HUGE numbers!"`,
      },
      {
        type: "code",
        emoji: "🎨",
        content: `## 🎨 String Art Creator - Text Transformation Magic!

🎯 **What you'll learn:** How to use string methods like .upper(), .replace(), and slicing to transform text.
学习目标：如何用字符串方法如 .upper()、.replace() 和切片来变换文字。

Strings are like clay 🏺 — you can reshape them! Upper case, reverse, replace characters, extract parts. These are the tools that power text editors, search engines, and chat filters.

🔑 **Key things to notice:**
- \`.upper()\` / \`.lower()\` change case without changing content
- \`.replace("old", "new")\` swaps text patterns
- \`text[::-1]\` reverses a string (slicing trick!)

👀 Try transforming your own name or favorite phrase!`,
        code: `# 🎨 STRING ART CREATOR - Transform Text Into Art!

print("🎨 STRING ART CREATOR")
print("Transform any text into beautiful patterns!")
print("=" * 40)

# Get user's text
text = input("✨ Enter text to transform: ")

print(f"\\n🎨 Creating art from: '{text}'")
print("-" * 30)

# Transformation 1: Mirror Text
print("\\n🪞 MIRROR WRITING:")
print(text + " | " + text[::-1])  # ::-1 reverses the string!

# Transformation 2: Zigzag Pattern
print("\\n⚡ ZIGZAG PATTERN:")
for i, char in enumerate(text):
    if i % 2 == 0:
        print(char.upper(), end="")  # Even positions: uppercase
    else:
        print(char.lower(), end="")  # Odd positions: lowercase
print()

# Transformation 3: Letter Count Art
print("\\n📊 LETTER ANALYSIS:")
letter_counts = {}
for letter in text.lower():
    if letter.isalpha():  # Only count letters
        if letter in letter_counts:
            letter_counts[letter] = letter_counts[letter] + 1
        else:
            letter_counts[letter] = 1

for letter, count in letter_counts.items():
    print(f"{letter.upper()}: {'█' * count} ({count})")

# Transformation 4: Secret Code (Every 2nd Letter)
print("\\n🤐 SECRET CODE (every 2nd letter):")
secret = ""
for i in range(0, len(text), 2):  # Skip every other letter
    secret += text[i]
print(f"Hidden message: {secret}")

# Transformation 5: ASCII Art Letters
print("\\n🔤 ASCII ART BLOCK LETTERS:")
big_letters = {
    'A': ['█████', '█   █', '█████', '█   █', '█   █'],
    'B': ['████ ', '█   █', '████ ', '█   █', '████ '],
    'C': ['█████', '█    ', '█    ', '█    ', '█████'],
    # Add more letters as needed
}

if text.upper()[0] in big_letters:
    for row in range(5):
        print(big_letters[text.upper()[0]][row])
else:
    print(f"Sorry, I only know how to draw A, B, and C in big letters!")
    print(f"But {text[0]} is still awesome! ✨")

print(f"\\n🎉 String art complete for '{text}'!")

# 🐍 Py: "String manipulation is the foundation of all text processing!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔤 Vowel Counter · 元音计数器",
          description: "Count how many vowels (a,e,i,o,u) are in a sentence!\n统计句子中有多少个元音字母！",
          starterCode: "# Vowel Counter / 元音计数器\nsentence = \"Python programming is awesome\"\nvowels = \"aeiou\"\n\nfor v in vowels:\n    count = ___\n    print(f\"'{v}': {count} times\")",
          hint: "Use sentence.lower().count(v) to count each vowel.\n用 sentence.lower().count(v) 统计。",
          solution: "sentence = \"Python programming is awesome\"\nvowels = \"aeiou\"\nfor v in vowels:\n    count = sentence.lower().count(v)\n    print(f\"'{v}': {count} times\")",
          expectedOutput: "'a': 2 times\n'e': 2 times\n'i': 2 times\n'o': 3 times\n'u': 0 times",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔀 Reverse String · 反转字符串",
          description: "Reverse a string WITHOUT using [::-1]! Use a loop.\n不用 [::-1] 反转字符串！用循环。",
          starterCode: "# Reverse String / 反转字符串\noriginal = \"Python\"\nreversed_str = \"\"\n\n# Build reversed string using a loop\nfor char in original:\n    reversed_str = ___ + reversed_str\n\nprint(f\"Original: {original}\")\nprint(f\"Reversed: {reversed_str}\")",
          hint: "Each character goes to the front: reversed_str = char + reversed_str\n每个字符放最前面：reversed_str = char + reversed_str",
          solution: "original = \"Python\"\nreversed_str = \"\"\nfor char in original:\n    reversed_str = char + reversed_str\nprint(f\"Original: {original}\")\nprint(f\"Reversed: {reversed_str}\")",
          expectedOutput: "Original: Python\nReversed: nohtyP",
        },
      },
      {
        type: "quiz",
        content: "🔐 Secret Agent String Master Quiz!",
        quiz: QUIZ_DATA["2-5"],
      },
    ],
  },

  {
    id: "2-6",
    moduleId: "area-2",
    title: "🪨📄✂️ Rock Paper Scissors Championship!",
    subtitle: "Epic final project with all Loop Forest skills · 石头剪刀布大赛：运用所有循环技能",
    icon: "🏆",
    xp: 50,
    duration: "30 min",
    order: 6,
    gradeRange: [6, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🏆",
        content: `## 🏆 Loop Forest Championship Project!

**🐍 Py:** "Congratulations! You've mastered the entire Loop Forest curriculum!"

Time to prove your skills with the ULTIMATE project that combines everything:

- 🔁 **for loops** → Multiple game rounds

- 📋 **Lists** → Track game history  

- 🔄 **while loops** → Keep playing until user quits

- ✨ **Strings** → Beautiful game display

- 🎲 **Random** → Computer's choices

- 🎯 **if/else** → Game logic and scoring

**🪨📄✂️ Rock Paper Scissors** is perfect because:

- Simple rules, complex programming

- Used in computer science competitions

- Great for learning game AI concepts

🤖 Botty says: "This project teaches the same logic used in gaming AI!"

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Review: Combining All Loop Skills",
        concept: {
          title: "🏆 Review: Combining All Loop Skills",
          titleZh: "复习：组合所有循环技能",
          syntaxCards: [
            {
              symbol: "while True:",
              name: "Infinite Loop (with break)",
              nameZh: "无限循环（配合 break）",
              emoji: "♾️",
              description: "A loop that runs FOREVER ♾️ — until you use break to escape. Perfect for 'play again?' game loops!",
              example: "while True:\n    play_round()\n    if quit:\n        break",
            },
            {
              symbol: "random.choice(list)",
              name: "Random Choice",
              nameZh: "随机选择",
              emoji: "🎰",
              description: "Like spinning a wheel 🎰 — picks one random item from a list. Great for computer opponents!",
              example: "import random\nmove = random.choice(['rock', 'paper', 'scissors'])",
            },
            {
              symbol: "dict[key] = value",
              name: "Dictionary Update",
              nameZh: "字典更新",
              emoji: "📝",
              description: "Like writing in a scoreboard 📝 — stores or updates a value with a named key.",
              example: "score = {'player': 0, 'cpu': 0}\nscore['player'] += 1",
            },
            {
              symbol: "list.append(dict)",
              name: "Record History",
              nameZh: "记录历史",
              emoji: "📚",
              description: "Like a game replay log 📚 — add each round's data (as a dictionary) to a history list.",
              example: "history.append({'round': 1, 'result': 'win'})",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import random", explanation: "Import random for the computer's unpredictable choices.", explanationZh: "导入随机模块让电脑做出不可预测的选择" },
              { code: "wins = 0; history = []", explanation: "Track score (variable) and game history (list).", explanationZh: "用变量追踪分数，用列表追踪历史" },
              { code: "while True:", explanation: "Game loop — keep playing until the player quits.", explanationZh: "游戏循环 — 一直玩到玩家退出" },
              { code: "    choice = input('Your move: ')", explanation: "Get the player's choice each round.", explanationZh: "每轮获取玩家的选择" },
              { code: "    cpu = random.choice(['rock','paper','scissors'])", explanation: "Computer picks randomly.", explanationZh: "电脑随机选择" },
              { code: "    history.append({'player': choice, 'cpu': cpu})", explanation: "Save this round to the history log.", explanationZh: "将本轮记录到历史日志" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Game Design Challenge!

**Your Mission:** Create the most EPIC Rock Paper Scissors game ever!

**Core Features Needed:**
1. 🎮 **Game Loop:** Keep playing until user wants to quit
2. 🎲 **Random Computer Choice:** Unpredictable opponent  
3. 🏅 **Score Tracking:** Best of 5, 10, or unlimited
4. 📊 **Game History:** Remember all past rounds
5. 🎨 **Beautiful Display:** ASCII art for moves
6. 🏆 **Victory Conditions:** Declare winners and champions!

**Advanced Features:**
- 📈 **Statistics:** Win rate, streak tracking

- 🤖 **Smart AI:** Computer learns your patterns (optional)

- 🎪 **Tournament Mode:** Multiple rounds with elimination

**Which Loop Forest skills will you use for each feature?**`,
      },
      {
        type: "code",
        emoji: "🪨",
        content: `## 🪨📄✂️ Rock Paper Scissors Championship Engine!

🎯 **What you'll learn:** How to use random.choice(), while loops, and if/elif/else for game logic.
学习目标：如何用 random.choice()、while 循环和 if/elif/else 实现游戏逻辑。

This is a complete game engine! 🎮 The computer picks randomly (AI opponent), you pick your move, and if/elif/else determines who wins. It's the same structure as turn-based games.

🔑 **Key things to notice:**
- \`random.choice([...])\` picks a random item from a list
- Winning conditions use \`and\` to check two things at once
- A while loop keeps the game running until someone quits

👀 Play a few rounds — does the computer seem random?`,
        code: `# 🏆 ROCK PAPER SCISSORS CHAMPIONSHIP v2.0!
import random

print("🏆 ═══ ROCK PAPER SCISSORS CHAMPIONSHIP ═══")
print("🪨 Rock crushes Scissors")
print("📄 Paper covers Rock") 
print("✂️ Scissors cut Paper")
print("=" * 45)

# Game setup
player_name = input("🎮 Enter your champion name: ")
print(f"Welcome to the arena, {player_name}! 🥊")

# Score tracking
player_wins = 0
computer_wins = 0
ties = 0
game_history = []

# Available choices with ASCII art!
choices = {
    'rock': '🪨',
    'paper': '📄', 
    'scissors': '✂️'
}

choice_list = ['rock', 'paper', 'scissors']

print(f"\\n🎯 Championship Rules:")
print("🏅 First to 3 wins becomes champion!")
print("💫 Type your choice or 'quit' to exit")
print("🎨 Available moves: rock, paper, scissors")

# Main game loop!
while True:
    print(f"\\n📊 SCOREBOARD:")
    print(f"🏆 {player_name}: {player_wins} | 🤖 Computer: {computer_wins} | 🤝 Ties: {ties}")
    
    # Check for championship victory!
    if player_wins == 3:
        print(f"\\n🎉 CHAMPIONSHIP VICTORY! {player_name} wins!")
        print("🏆 You are the ULTIMATE CHAMPION!")
        break
    elif computer_wins == 3:
        print("\\n💻 Computer wins the championship!")
        print("🎮 Better luck next time, champion!")
        break
    
    # Get player choice
    player_choice = input(f"\\n🎯 Round {len(game_history) + 1} - Your move: ").lower()
    
    if player_choice == 'quit':
        print("👋 Thanks for playing! See you in the arena!")
        break
    
    if player_choice not in choice_list:
        print("🤔 Invalid move! Try 'rock', 'paper', or 'scissors'")
        continue
    
    # Computer makes its choice
    computer_choice = random.choice(choice_list)
    
    print(f"\\n⚔️ BATTLE!")
    print(f"👤 {player_name}: {choices[player_choice]} {player_choice}")
    print(f"🤖 Computer: {choices[computer_choice]} {computer_choice}")
    
    # Determine winner with epic battle logic!
    if player_choice == computer_choice:
        result = "TIE"
        ties = ties + 1
        print("🤝 It's a tie! Great minds think alike!")
    elif (
        (player_choice == 'rock' and computer_choice == 'scissors') or
        (player_choice == 'paper' and computer_choice == 'rock') or  
        (player_choice == 'scissors' and computer_choice == 'paper')
    ):
        result = "WIN"
        player_wins = player_wins + 1
        print(f"🎉 {player_name} wins this round!")
    else:
        result = "LOSE"
        computer_wins = computer_wins + 1
        print("💻 Computer wins this round!")
    
    # Record this battle in history!
    battle_record = {
        'round': len(game_history) + 1,
        'player': player_choice,
        'computer': computer_choice, 
        'result': result
    }
    game_history.append(battle_record)

# Final championship ceremony!
print(f"\\n🎪 CHAMPIONSHIP CEREMONY!")
print("=" * 30)
print(f"🏆 Final Score: {player_name} {player_wins} - {computer_wins} Computer")
print(f"📊 Total rounds: {len(game_history)}")
print(f"🤝 Ties: {ties}")

if len(game_history) > 0:
    print(f"\\n📚 BATTLE HISTORY:")
    for battle in game_history:
        print(f"Round {battle['round']}: {choices[battle['player']]} vs {choices[battle['computer']]} → {battle['result']}")

print("\\n🎮 Thanks for playing Rock Paper Scissors Championship!")

# 🔧 Chip: "This game uses every core programming concept you've learned!"`,
      },
      {
        type: "code",
        emoji: "📊",
        content: `## 📊 Advanced Statistics & Tournament Mode!

🎯 **What you'll learn:** How to track statistics with counters and calculate percentages from game data.
学习目标：如何用计数器追踪统计数据并从游戏数据中计算百分比。

Every esports game tracks stats! 📈 Win rate, streak, total games — it's all just counters and math. This is how leaderboards and analytics dashboards work.

🔑 **Key things to notice:**
- Counter variables (wins, losses, draws) increment with \`+= 1\`
- Win rate = \`wins / total * 100\` (percentage formula)
- Statistics persist across rounds because variables live outside the loop

👀 Play 10+ rounds and check your win rate — is it close to 33%?`,
        code: `# 📊 ADVANCED ROCK PAPER SCISSORS - Tournament Edition!
import random

print("📊 ADVANCED CHAMPIONSHIP WITH STATISTICS!")
print("🏆 Tournament mode with detailed analytics!")
print("=" * 45)

# Advanced game stats
total_games = 0
lifetime_wins = 0
lifetime_losses = 0
lifetime_ties = 0
win_streak = 0
best_streak = 0

# Computer AI learning (simple pattern detection)
player_history = []
computer_strategies = ['random', 'counter', 'copy']

def smart_computer_choice():
    if len(player_history) < 3:
        # Random choice for first few rounds
        return random.choice(['rock', 'paper', 'scissors'])
    
    # Simple pattern: if player used same move 2 times, counter it
    last_two = player_history[-2:]
    if last_two[0] == last_two[1]:
        predicted_move = last_two[0]
        # Choose the counter move
        if predicted_move == 'rock':
            return 'paper'
        elif predicted_move == 'paper':
            return 'scissors'
        else:  # scissors
            return 'rock'
    
    # Otherwise, random
    return random.choice(['rock', 'paper', 'scissors'])

def calculate_win_rate():
    if total_games == 0:
        return 0
    return round((lifetime_wins / total_games) * 100, 1)

# Tournament play
print("🎪 Welcome to Tournament Mode!")
player_name = input("🏅 Enter your tournament name: ")

while True:
    print(f"\\n📈 LIFETIME STATISTICS:")
    print(f"🎮 Games played: {total_games}")
    print(f"📊 Win rate: {calculate_win_rate()}%")
    print(f"🔥 Current streak: {win_streak}")
    print(f"🏆 Best streak: {best_streak}")
    
    play_again = input("\\n🎯 Play a round? (yes/no): ").lower()
    if play_again != 'yes':
        break
    
    # Single round
    player_choice = input("🪨📄✂️ Your move: ").lower()
    if player_choice not in ['rock', 'paper', 'scissors']:
        print("Invalid move!")
        continue
    
    # Add to history for AI learning
    player_history.append(player_choice)
    
    # Smart computer choice
    computer_choice = smart_computer_choice()
    
    print(f"You: {player_choice} | Computer: {computer_choice}")
    
    # Determine winner
    total_games += 1
    
    if player_choice == computer_choice:
        print("🤝 Tie!")
        lifetime_ties += 1
        win_streak = 0
    elif (
        (player_choice == 'rock' and computer_choice == 'scissors') or
        (player_choice == 'paper' and computer_choice == 'rock') or
        (player_choice == 'scissors' and computer_choice == 'paper')
    ):
        print("🎉 You win!")
        lifetime_wins += 1
        win_streak += 1
        if win_streak > best_streak:
            best_streak = win_streak
    else:
        print("💻 Computer wins!")
        lifetime_losses += 1
        win_streak = 0

# Final tournament report
print(f"\\n🏆 TOURNAMENT COMPLETE!")
print(f"👤 {player_name}'s Final Stats:")
print(f"🎮 Total games: {total_games}")
print(f"🏅 Wins: {lifetime_wins}")
print(f"📉 Losses: {lifetime_losses}")
print(f"🤝 Ties: {lifetime_ties}")
print(f"📊 Final win rate: {calculate_win_rate()}%")
print(f"🔥 Best streak: {best_streak}")

# Champion title based on performance!
if calculate_win_rate() >= 70:
    print(f"🥇 {player_name} - GRANDMASTER CHAMPION!")
elif calculate_win_rate() >= 60:
    print(f"🥈 {player_name} - EXPERT PLAYER!")
elif calculate_win_rate() >= 50:
    print(f"🥉 {player_name} - SKILLED COMPETITOR!")
else:
    print(f"🎮 {player_name} - DEVELOPING CHAMPION!")

print("\\n🎪 Thanks for playing Advanced Championship!")

# 🤖 Botty: "You just built a game with AI learning capabilities!"`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🏆 Score Tracker · 计分器",
          description: "Track scores for a 3-round game. Calculate totals and determine the winner!\n追踪3回合游戏分数，算总分，定胜负！",
          starterCode: "# Score Tracker / 计分器\nplayer1_scores = []\nplayer2_scores = []\nrounds = [(5, 3), (2, 4), (6, 1)]\n\nfor p1, p2 in rounds:\n    player1_scores.append(p1)\n    player2_scores.append(p2)\n\n# Calculate totals / 算总分\ntotal1 = ___\ntotal2 = ___\n\nprint(f\"P1: {player1_scores} → {total1}\")\nprint(f\"P2: {player2_scores} → {total2}\")\n\n# Who wins? / 谁赢了？\nif ___:\n    print(\"🏆 Player 1 wins!\")\nelif ___:\n    print(\"🏆 Player 2 wins!\")\nelse:\n    print(\"🤝 Tie!\")",
          hint: "total1 = sum(player1_scores). Compare: if total1 > total2: ...\n用 sum() 算总分，用 if 比较",
          solution: "player1_scores = []\nplayer2_scores = []\nrounds = [(5, 3), (2, 4), (6, 1)]\nfor p1, p2 in rounds:\n    player1_scores.append(p1)\n    player2_scores.append(p2)\ntotal1 = sum(player1_scores)\ntotal2 = sum(player2_scores)\nprint(f\"P1: {player1_scores} → {total1}\")\nprint(f\"P2: {player2_scores} → {total2}\")\nif total1 > total2:\n    print(\"🏆 Player 1 wins!\")\nelif total2 > total1:\n    print(\"🏆 Player 2 wins!\")\nelse:\n    print(\"🤝 Tie!\")",
          expectedOutput: "P1: [5, 2, 6] → 13\nP2: [3, 4, 1] → 8\n🏆 Player 1 wins!",
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🎲 Dice Stats · 骰子统计",
          description: "Simulate rolling a dice 20 times and count each number with a bar chart!\n模拟掷骰子20次，用柱状图统计每个数字！",
          starterCode: "# Dice Stats / 骰子统计\nimport random\n\nrolls = []\nfor i in range(20):\n    rolls.append(random.randint(1, 6))\n\nprint(f\"Rolls: {rolls}\")\nprint()\n\n# Count each number / 统计每个数字\nfor num in range(1, 7):\n    count = ___\n    bar = \"█\" * count\n    print(f\"  {num}: {bar} ({count})\")",
          hint: "Use rolls.count(num) to count occurrences.\n用 rolls.count(num) 统计出现次数。",
          solution: "import random\nrolls = []\nfor i in range(20):\n    rolls.append(random.randint(1, 6))\nprint(f\"Rolls: {rolls}\")\nprint()\nfor num in range(1, 7):\n    count = rolls.count(num)\n    bar = \"█\" * count\n    print(f\"  {num}: {bar} ({count})\")",
        },
      },
      {
        type: "quiz",
        content: "🏆 Loop Forest Champion Graduation Quiz!",
        quiz: QUIZ_DATA["2-6"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🏗️ AREA 3: BUILDER CITY (7 lessons)
  // ═══════════════════════════════════════════════════════════════
  
  {
    id: "3-1",
    moduleId: "area-3",
    title: "Code Building Blocks Factory!",
    subtitle: "Create reusable turtle drawing functions · 代码积木工厂：创建可重用的画图函数",
    icon: "🧱",
    xp: 35,
    duration: "25 min",
    order: 1,
    gradeRange: [6, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🧱",
        content: `## 🧱 Welcome to Builder City!

**🐍 Py:** "Welcome to the most important transformation in your programming journey!"

You've been USING tools (print, input, if, loops). Now you'll start BUILDING tools! 🛠️

**Functions = Code Building Blocks!** Just like LEGO blocks:

- 🧱 Each function does ONE specific job perfectly

- 🔄 You can use the same block over and over

- 🏗️ Combine simple blocks to build AMAZING things

- 📦 Other programmers can use YOUR blocks!

**Real examples:**
- Turtle drawing functions → Game graphics

- Math functions → AI calculations  

- File functions → Database operations

🤖 Botty says: "AI models are made of millions of functions working together!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Functions — Your Code Building Blocks",
        concept: {
          title: "🧱 New Syntax: Functions — Your Code Building Blocks",
          titleZh: "新语法：函数 — 你的代码积木",
          syntaxCards: [
            {
              symbol: "def name(params):",
              name: "Define a Function",
              nameZh: "定义函数",
              emoji: "🏭",
              description: "Like building a LEGO block 🧱 — def creates a reusable code block. Name it, give it inputs (parameters), and it's ready to use!",
              example: "def greet(name):\n    print(f'Hello, {name}!')",
            },
            {
              symbol: "return value",
              name: "Return (send back result)",
              nameZh: "返回值",
              emoji: "📤",
              description: "Like a vending machine 🏧 — you put inputs in, and return sends the result back out!",
              example: "def add(a, b):\n    return a + b\nresult = add(3, 5)  # 8",
            },
            {
              symbol: "function_name(args)",
              name: "Call a Function",
              nameZh: "调用函数",
              emoji: "📞",
              description: "Like pressing a button 🔘 — calling a function runs the code inside it. You can call it as many times as you want!",
              example: "greet('Alice')  # Hello, Alice!\ngreet('Bob')    # Hello, Bob!",
            },
            {
              symbol: '"""docstring"""',
              name: "Docstring (function description)",
              nameZh: "文档字符串（函数说明）",
              emoji: "📝",
              description: "An instruction manual 📖 — the first string in a function describes what it does. Helps you and others understand your code!",
              example: 'def draw_star(size):\n    """Draw a star of given size"""',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "def draw_square(size):", explanation: "Define a function named 'draw_square' that takes a size parameter.", explanationZh: "定义一个名为 'draw_square' 的函数，接受 size 参数" },
              { code: '    """Draw a perfect square"""', explanation: "Docstring — describes what this function does.", explanationZh: "文档字符串 — 描述这个函数的功能" },
              { code: "    for side in range(4):", explanation: "Loop 4 times (a square has 4 sides).", explanationZh: "循环 4 次（正方形有 4 条边）" },
              { code: "        t.forward(size)", explanation: "Draw one side using the size parameter.", explanationZh: "用 size 参数画一条边" },
              { code: "        t.right(90)", explanation: "Turn 90° for the next side.", explanationZh: "转 90° 准备画下一条边" },
              { code: "draw_square(100)", explanation: "CALL the function — this actually runs it!", explanationZh: "调用函数 — 这才真正执行它！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Function Design Challenge!

**Scenario:** You want to draw a house with turtle graphics. 

**Without functions (the hard way):**
\`\`\`python

# Draw square for house
forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)
forward(100)
right(90)

# Move to draw triangle roof
penup()
goto(0, 100)
pendown()

# Draw triangle
forward(100)
left(120)
forward(100)
left(120) 
forward(100)
# ... 20+ lines just for one house!
\`\`\`

**With functions (the smart way):**
\`\`\`python
draw_square(100)     # 1 line!
draw_triangle(100)   # 1 line!

# Want 5 houses? Just call them 5 times!
\`\`\`

**Your challenge:** Think like a LEGO designer - what building blocks would you create?`,
      },
      {
        type: "code",
        emoji: "🏠",
        content: `## 🏠 Turtle House Builder - Your First Function Factory!

🎯 **What you'll learn:** How to define and call functions to avoid repeating code.
学习目标：如何定义和调用函数来避免重复代码。

Functions are like recipes 📖 — write the instructions once, then use them whenever you want! Instead of copying "draw a square" code 10 times, just call \`draw_square()\` 10 times.

🔑 **Key things to notice:**
- \`def function_name():\` creates a reusable block of code
- Calling the function: just write \`function_name()\`
- Parameters let you customize: \`draw_house(size=100)\`

👀 Click Run to see the turtle draw houses!`,
        code: `# 🏠 TURTLE HOUSE BUILDER - Function Factory v1.0!
import turtle

# Setup our architect turtle
architect = turtle.Turtle()
architect.shape("turtle")
architect.color("blue")
architect.speed(5)

print("🏗️ FUNCTION FACTORY: Building Blocks for Houses!")

# BUILDING BLOCK 1: Draw a square function
def draw_square(size):
    """Draw a perfect square - our basic building block!"""
    print(f"🟦 Building square of size {size}...")
    for side in range(4):
        architect.forward(size)
        architect.right(90)

# BUILDING BLOCK 2: Draw a triangle function  
def draw_triangle(size):
    """Draw a triangle roof - another building block!"""
    print(f"🔺 Adding triangle roof of size {size}...")
    for side in range(3):
        architect.forward(size)
        architect.left(120)

# BUILDING BLOCK 3: Complete house function (uses other blocks!)
def draw_house(house_size):
    """Draw a complete house using our building blocks!"""
    print(f"🏠 Constructing house of size {house_size}...")
    
    # House base (square)
    draw_square(house_size)
    
    # Move to roof position
    architect.penup()
    architect.goto(architect.xcor(), architect.ycor() + house_size)
    architect.pendown()
    
    # House roof (triangle)
    draw_triangle(house_size)
    
    # Reset position for next house
    architect.penup()
    architect.goto(architect.xcor() + house_size + 20, 0)
    architect.pendown()

# BUILDING BLOCK 4: Build an entire neighborhood!
def build_neighborhood():
    """Use our house function to build multiple houses!"""
    print("🏘️ Building neighborhood with our function blocks!")
    
    house_sizes = [60, 80, 100, 70]  # Different sized houses
    
    for i, size in enumerate(house_sizes):
        print(f"🏠 Building house #{i+1} (size: {size})")
        draw_house(size)

# 🎬 THE MAGIC HAPPENS HERE!
print("🎯 Calling our building block functions...")
build_neighborhood()

print("\\n🎉 NEIGHBORHOOD COMPLETE!")
print("🧱 Look how we built complex things from simple blocks!")

# 🔧 Chip: "This is exactly how video game graphics are programmed!"

# 🤖 Botty: "AI models work the same way - simple functions combined!"

turtle.done()`,
      },
      {
        type: "code",
        emoji: "🎨",
        content: `## 🎨 Advanced Function Factory - Art Generator!

🎯 **What you'll learn:** How to use functions with multiple parameters and return values for complex creations.
学习目标：如何使用带多个参数和返回值的函数来创建复杂作品。

Parameters are like adjustable knobs 🎛️ on a machine — size, color, position. Twist the knobs differently and you get different artwork from the same machine!

🔑 **Key things to notice:**
- Multiple parameters: \`def draw_flower(x, y, size, color):\`
- Each function call can use different arguments
- Functions can call OTHER functions (composition!)

👀 Create amazing art with code building blocks!`,
        code: `# 🎨 ADVANCED FUNCTION FACTORY - Turtle Art Generator!
import turtle
import random

# Setup our artistic turtle
artist = turtle.Turtle()
artist.speed(10)  # Fast for art generation!
artist.shape("turtle")

print("🎨 ADVANCED FUNCTION FACTORY - Art Generator!")

# BUILDING BLOCK: Color function
def set_random_color():
    """Set a random color for our turtle"""
    colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"]
    color = random.choice(colors)
    artist.color(color)
    return color

# BUILDING BLOCK: Star function
def draw_star(size):
    """Draw a perfect 5-pointed star"""
    set_random_color()
    for point in range(5):
        artist.forward(size)
        artist.right(144)  # Secret star angle!

# BUILDING BLOCK: Spiral function
def draw_spiral(size, turns):
    """Draw a mesmerizing spiral"""
    set_random_color()
    for i in range(turns):
        artist.forward(size + i * 2)  # Growing spiral!
        artist.right(91)  # Slightly off 90° for spiral effect

# BUILDING BLOCK: Circle pattern function
def draw_circle_pattern(radius, count):
    """Draw circles in a beautiful pattern"""
    for i in range(count):
        set_random_color()
        artist.circle(radius)
        artist.right(360 / count)  # Evenly spaced circles

# BUILDING BLOCK: Art gallery function (combines everything!)
def create_art_gallery():
    """Use all our art blocks to create a masterpiece!"""
    print("🖼️ Creating art gallery with function blocks...")
    
    # Artwork 1: Star constellation
    artist.goto(-200, 100)
    for i in range(5):
        draw_star(30 + i * 5)
        artist.penup()
        artist.forward(50)
        artist.pendown()
    
    # Artwork 2: Spiral galaxy
    artist.goto(0, -100)
    draw_spiral(5, 50)
    
    # Artwork 3: Circle mandala
    artist.goto(150, 50)
    draw_circle_pattern(30, 8)
    
    print("🎨 Art gallery complete!")

# FUNCTION WITH RETURN VALUES!
def calculate_art_score(num_artworks, complexity):
    """Calculate how awesome our art is!"""
    base_score = num_artworks * 100
    complexity_bonus = complexity * 50
    total_score = base_score + complexity_bonus
    
    print(f"🏆 Art Score Calculation:")
    print(f"  📊 Base score: {base_score}")
    print(f"  ⭐ Complexity bonus: {complexity_bonus}") 
    print(f"  🎯 Total score: {total_score}")
    
    return total_score  # Return the result!

# 🎬 CREATE MASTERPIECE!
print("🎯 Calling art generation functions...")
create_art_gallery()

# Use return value from function!
final_score = calculate_art_score(3, 10)
print(f"\\n🏅 Your art scored {final_score} points!")

if final_score > 800:
    print("🥇 MASTER ARTIST! You're a function genius!")
elif final_score > 500:
    print("🥈 TALENTED ARTIST! Your functions are impressive!")
else:
    print("🥉 BUDDING ARTIST! Keep building those function skills!")

# 🐍 Py: "You just built a complete art system with functions!"
turtle.done()`,
      },
      {
        type: "code",
        emoji: "🧮",
        content: `## 🧮 Function Calculator - Building Blocks for Math!

🎯 **What you'll learn:** How to use \`return\` to make functions that give back results you can use.
学习目标：如何用 return 让函数返回可以使用的结果。

So far, functions just DID things (printed, drew). But with \`return\`, functions become like vending machines 🎰 — put something in, get something back! That's how real calculators and apps work.

🔑 **Key things to notice:**
- \`return value\` sends a result BACK to where the function was called
- You can store returned values: \`result = add(3, 5)\`
- Functions with return values can be used inside other expressions

👀 Try building your own math functions!`,
        code: `# 🧮 FUNCTION CALCULATOR - Math Building Blocks!

print("🧮 FUNCTION CALCULATOR FACTORY!")
print("Building reusable math building blocks!")
print("=" * 40)

# BUILDING BLOCK: Addition function
def add_numbers(a, b):
    """Add two numbers and return the result"""
    result = a + b
    print(f"➕ {a} + {b} = {result}")
    return result

# BUILDING BLOCK: Multiplication function
def multiply_numbers(a, b):
    """Multiply two numbers and return the result"""
    result = a * b
    print(f"✖️ {a} × {b} = {result}")
    return result

# BUILDING BLOCK: Area calculator function
def calculate_rectangle_area(length, width):
    """Calculate rectangle area using our multiply function!"""
    area = multiply_numbers(length, width)  # Using another function!
    print(f"📐 Rectangle area: {area} square units")
    return area

# BUILDING BLOCK: Circle area function
def calculate_circle_area(radius):
    """Calculate circle area using math"""
    pi = 3.14159
    area = multiply_numbers(radius, radius)  # radius²
    area = multiply_numbers(area, pi)        # × π
    print(f"⭕ Circle area: {area:.2f} square units")
    return area

# BUILDING BLOCK: Comparison function
def compare_areas(area1, area2, shape1, shape2):
    """Compare two areas and announce the winner!"""
    print(f"\\n🥊 AREA SHOWDOWN!")
    print(f"🔵 {shape1} area: {area1}")
    print(f"🔴 {shape2} area: {area2}")
    
    if area1 > area2:
        winner = shape1
        difference = area1 - area2
    elif area2 > area1:
        winner = shape2
        difference = area2 - area1
    else:
        winner = "TIE"
        difference = 0
    
    if winner != "TIE":
        print(f"🏆 Winner: {winner} by {difference:.2f} square units!")
    else:
        print("🤝 It's a perfect tie!")
    
    return winner

# 🎯 TESTING OUR BUILDING BLOCKS!
print("🎮 Testing our math building blocks...")

# Test basic functions
sum_result = add_numbers(25, 17)
product_result = multiply_numbers(8, 6)

# Test complex functions (that use other functions!)
rectangle_area = calculate_rectangle_area(10, 5)
circle_area = calculate_circle_area(4)

# Compare areas using our comparison function
winner = compare_areas(rectangle_area, circle_area, "Rectangle", "Circle")

# BUILDING BLOCK: Report generator function
def generate_report(rect_area, circ_area, winner):
    """Generate a final report using all our calculations!"""
    print(f"\\n📊 CALCULATION REPORT:")
    print(f"📐 Rectangle area: {rect_area}")
    print(f"⭕ Circle area: {circ_area:.2f}")
    print(f"🏆 Area champion: {winner}")
    
    total_area = add_numbers(rect_area, circ_area)
    print(f"🏠 Combined area: {total_area:.2f}")
    
    return total_area

# Generate final report
total = generate_report(rectangle_area, circle_area, winner)

print(f"\\n🎉 Calculator complete! Total area processed: {total:.2f}")

# 🔧 Chip: "Calculators and computers use functions exactly like this!"

# 🤖 Botty: "AI math models are just millions of functions like these!"`,
      },
      {
        type: "challenge",
        emoji: "🧱",
        content: "## 🧱 Challenge: Temperature Converter",
        challenge: {
          title: "Build Temperature Converter Functions",
          description: "Create two functions: one to convert Celsius to Fahrenheit, and one for Fahrenheit to Celsius!\n\n创建两个函数：一个将摄氏度转为华氏度，一个反过来！",
          starterCode: "def celsius_to_fahrenheit(c):\n    # Formula: F = C × 9/5 + 32\n    pass\n\ndef fahrenheit_to_celsius(f):\n    # Formula: C = (F - 32) × 5/9\n    pass\n\nprint(celsius_to_fahrenheit(0))    # 32.0\nprint(celsius_to_fahrenheit(100))  # 212.0\nprint(fahrenheit_to_celsius(98.6)) # 37.0",
          hint: "Just apply the formulas! F = C * 9/5 + 32 and C = (F - 32) * 5/9",
          solution: "def celsius_to_fahrenheit(c):\n    return c * 9/5 + 32\n\ndef fahrenheit_to_celsius(f):\n    return (f - 32) * 5/9\n\nprint(celsius_to_fahrenheit(0))\nprint(celsius_to_fahrenheit(100))\nprint(fahrenheit_to_celsius(98.6))",
          expectedOutput: "32.0\n212.0\n37.0",
        },
      },
      {
        type: "challenge",
        emoji: "🎯",
        content: "## 🎯 Challenge: Greeting Generator",
        challenge: {
          title: "Multi-Language Greeting Function",
          description: "Create a function that greets someone in different languages based on a parameter!\n\n创建一个函数，根据参数用不同语言问候！",
          starterCode: "def greet(name, language='en'):\n    # 'en' → 'Hello, {name}!'\n    # 'es' → '¡Hola, {name}!'\n    # 'zh' → '你好，{name}！'\n    # other → 'Hi, {name}!'\n    pass\n\nprint(greet('Alice'))\nprint(greet('Bob', 'es'))\nprint(greet('Charlie', 'zh'))",
          hint: "Use if/elif/else to check the language parameter",
          solution: "def greet(name, language='en'):\n    if language == 'en':\n        return f'Hello, {name}!'\n    elif language == 'es':\n        return f'¡Hola, {name}!'\n    elif language == 'zh':\n        return f'你好，{name}！'\n    else:\n        return f'Hi, {name}!'\n\nprint(greet('Alice'))\nprint(greet('Bob', 'es'))\nprint(greet('Charlie', 'zh'))",
          expectedOutput: "Hello, Alice!\n¡Hola, Bob!\n你好，Charlie！",
        },
      },
      {
        type: "quiz",
        content: "🧱 Function Factory Master Quiz!",
        quiz: QUIZ_DATA["3-1"],
      },
    ],
  },

  {
    id: "3-2",
    moduleId: "area-3",
    title: "Secret Agent File System!",
    subtitle: "Dictionaries store classified intel · 特工档案系统：字典存储机密情报",
    icon: "🕵️",
    xp: 35,
    duration: "22 min",
    order: 2,
    gradeRange: [6, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🕵️",
        content: `## 🕵️ Welcome to Secret Agent Headquarters!

**🐍 Py:** "Agent, your mission is to master classified data organization!"

**Lists vs Dictionaries - The Secret Agent Way:**

**🗂️ Lists** = File cabinets with numbered folders:

- agents[0] → "Who's in folder #0?"

- agents[5] → "What if there are only 4 agents?"

**📋 Dictionaries** = Smart filing system with labeled folders:

- agents["007"] → "James Bond" ✨

- agents["ninja"] → "Silent Strike"

- agents["hacker"] → "Zero Cool"

**Why Secret Agents LOVE Dictionaries:**
- 🔍 **Fast lookup:** Find Agent 007 instantly! 

- 🏷️ **Meaningful keys:** No memorizing numbers

- 🔄 **Easy updates:** Change agent status anytime

- 🌐 **Real-world data:** Just like JSON, databases, APIs

🤖 Botty says: "Every web API returns data as dictionaries (JSON format)!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Dictionaries — Labeled Data Storage",
        concept: {
          title: "📋 New Syntax: Dictionaries — Labeled Data Storage",
          titleZh: "新语法：字典 — 带标签的数据存储",
          syntaxCards: [
            {
              symbol: "{key: value}",
              name: "Dictionary (key-value pairs)",
              nameZh: "字典（键值对）",
              emoji: "🗂️",
              description: "Like a filing cabinet with labels 🗂️ — instead of numbered slots, each piece of data has a NAME. Way easier to find things!",
              example: 'agent = {"name": "Bond", "rank": "007"}',
            },
            {
              symbol: "dict[key]",
              name: "Access by Key",
              nameZh: "通过键访问",
              emoji: "🔑",
              description: "Use the label name 🔑 to instantly find the value. Like looking up a word in a real dictionary!",
              example: 'print(agent["name"])  # "Bond"',
            },
            {
              symbol: "dict[key] = value",
              name: "Add/Update Entry",
              nameZh: "添加/更新条目",
              emoji: "✏️",
              description: "Write a new label or update an existing one ✏️ — dictionaries are flexible!",
              example: 'agent["status"] = "Active"\nagent["rank"] = "Commander"',
            },
            {
              symbol: "key in dict",
              name: "Check Key Exists",
              nameZh: "检查键是否存在",
              emoji: "🔍",
              description: "Check if a label exists 🔍 before trying to read it. Prevents crashes!",
              example: 'if "weapon" in agent:\n    print(agent["weapon"])',
            },
            {
              symbol: "for k, v in dict.items():",
              name: "Loop Through Dictionary",
              nameZh: "遍历字典",
              emoji: "🔄",
              description: "Open every folder 📂 — loops through ALL key-value pairs in the dictionary.",
              example: 'for key, val in agent.items():\n    print(f"{key}: {val}")',
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'agent = {', explanation: "Start creating a dictionary with curly braces { }.", explanationZh: "用花括号 { } 开始创建字典" },
              { code: '    "codename": "007",', explanation: "Key 'codename' maps to value '007'.", explanationZh: "键 'codename' 对应值 '007'" },
              { code: '    "specialties": ["Combat", "Gadgets"]', explanation: "Values can be lists too! Nested data structures.", explanationZh: "值也可以是列表！嵌套数据结构" },
              { code: "}", explanation: "Close the dictionary.", explanationZh: "关闭字典" },
              { code: 'print(agent["codename"])', explanation: "Access the value using its key — prints '007'.", explanationZh: "用键访问值 — 打印 '007'" },
              { code: 'agent["status"] = "Active"', explanation: "Add a new key-value pair to the dictionary.", explanationZh: "向字典添加新的键值对" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Agent File Design Challenge!

**Your Mission:** Design the perfect secret agent profile system!

**Think about what info each agent needs:**
- 🆔 **Code Name:** "007", "BlackWidow", "Phoenix"

- 👤 **Real Name:** "James Bond", "Natasha Romanoff"  

- 🎖️ **Rank:** "Commander", "Agent", "Rookie"

- 🛡️ **Clearance Level:** 1-10

- 🌍 **Mission Status:** "Active", "Undercover", "Retired"

- 🔫 **Specialties:** ["Infiltration", "Combat", "Tech"]

**Dictionary Structure:**
\`\`\`python
agent_007 = {
    "codename": "007",
    "real_name": "James Bond", 
    "rank": "Commander",
    "clearance": 10,
    "status": "Active",
    "specialties": ["Combat", "Gadgets", "Infiltration"]
}
\`\`\`

**Your challenge:** What other fields would you add? Mission count? Favorite gadget?`,
      },
      {
        type: "code",
        emoji: "📋",
        content: `## 📋 Agent Database - Create Secret Profiles!

🎯 **What you'll learn:** How to use dictionaries to store structured data with key-value pairs.
学习目标：如何用字典存储键值对形式的结构化数据。

A dictionary is like a real ID card 🪪 — it has labeled fields (name, age, code_name) each with a value. Unlike lists which use number positions, dictionaries use meaningful names!

🔑 **Key things to notice:**
- \`{"key": "value"}\` creates a dictionary
- \`agent["name"]\` accesses a value by its key
- Dictionaries can hold any type: strings, numbers, lists, even other dicts!

👀 Try creating a dictionary for your own secret agent profile!`,
        code: `# 🕵️ SECRET AGENT DATABASE SYSTEM v2.0!

print("🕵️ ═══ SECRET AGENT HEADQUARTERS ═══")
print("📋 Classified Agent Database System")
print("🔒 Security Level: TOP SECRET")
print("=" * 45)

# CREATE AGENT PROFILES (Dictionary magic!)
agent_007 = {
    "codename": "007", 
    "real_name": "James Bond",
    "rank": "Commander",
    "clearance_level": 10,
    "status": "Active",
    "missions_completed": 47,
    "specialties": ["Combat", "Gadgets", "Infiltration"],
    "favorite_gadget": "Aston Martin DB5",
    "location": "London, UK"
}

agent_widow = {
    "codename": "Black Widow",
    "real_name": "Natasha Romanoff", 
    "rank": "Senior Agent",
    "clearance_level": 9,
    "status": "Undercover",
    "missions_completed": 33,
    "specialties": ["Espionage", "Combat", "Linguistics"],
    "favorite_gadget": "Widow's Bite",
    "location": "Moscow, Russia"
}

agent_phoenix = {
    "codename": "Phoenix",
    "real_name": "Maya Chen",
    "rank": "Tech Specialist", 
    "clearance_level": 8,
    "status": "Active",
    "missions_completed": 12,
    "specialties": ["Hacking", "Drones", "Cyber Warfare"],
    "favorite_gadget": "Neural Interface",
    "location": "Tokyo, Japan"
}

# AGENT DATABASE (Dictionary of dictionaries!)
agent_database = {
    "007": agent_007,
    "black_widow": agent_widow, 
    "phoenix": agent_phoenix
}

print(f"📊 Database loaded with {len(agent_database)} agents")

# FUNCTION: Display agent profile
def display_agent_profile(codename):
    """Display classified agent information"""
    if codename in agent_database:
        agent = agent_database[codename]
        print(f"\\n🔍 AGENT PROFILE: {agent['codename']}")
        print("=" * 30)
        print(f"👤 Real Name: {agent['real_name']}")
        print(f"🎖️ Rank: {agent['rank']}")
        print(f"🔒 Clearance: Level {agent['clearance_level']}")
        print(f"📍 Status: {agent['status']}")
        print(f"🎯 Missions: {agent['missions_completed']}")
        print(f"💼 Specialties: {', '.join(agent['specialties'])}")
        print(f"🔧 Favorite Gadget: {agent['favorite_gadget']}")
        print(f"🌍 Location: {agent['location']}")
    else:
        print(f"❌ ERROR: Agent '{codename}' not found in database!")

# FUNCTION: Update agent status
def update_agent_status(codename, new_status):
    """Update an agent's mission status"""
    if codename in agent_database:
        old_status = agent_database[codename]['status']
        agent_database[codename]['status'] = new_status
        print(f"📝 Agent {codename} status: {old_status} → {new_status}")
    else:
        print(f"❌ Agent {codename} not found!")

# FUNCTION: Add mission to agent
def complete_mission(codename):
    """Record a completed mission for an agent"""
    if codename in agent_database:
        agent_database[codename]['missions_completed'] += 1
        missions = agent_database[codename]['missions_completed']
        print(f"🎯 Mission completed! Agent {codename} now has {missions} missions")
    else:
        print(f"❌ Agent {codename} not found!")

# 🎮 DEMONSTRATE DATABASE OPERATIONS
print("\\n🎮 TESTING AGENT DATABASE OPERATIONS:")

# Display all agent profiles
for codename in agent_database:
    display_agent_profile(codename)

# Update agent statuses
print("\\n📝 STATUS UPDATES:")
update_agent_status("007", "On Mission")
update_agent_status("phoenix", "Training")

# Complete missions
print("\\n🎯 MISSION COMPLETIONS:")
complete_mission("007")
complete_mission("black_widow")

# Show updated profile
print("\\n🔍 UPDATED PROFILE:")
display_agent_profile("007")

print("\\n🔒 Database operations complete!")

# 🔧 Chip: "This is exactly how real databases work!"`,
      },
      {
        type: "code",
        emoji: "🔍",
        content: `## 🔍 Mission Assignment System - Advanced Dictionary Operations!

🎯 **What you'll learn:** How to loop through, update, and search dictionaries for complex operations.
学习目标：如何遍历、更新和搜索字典以进行复杂操作。

Now dictionaries get serious! 🕵️ You can loop through all agents, filter by skill level, update records — this is exactly how databases work in real apps like Instagram or Spotify.

🔑 **Key things to notice:**
- \`.items()\` lets you loop through both keys AND values
- \`.keys()\` and \`.values()\` give you just one side
- \`if key in dict:\` checks if a key exists before accessing it

👀 Try adding new agents and assigning them missions!`,
        code: `# 🔍 MISSION ASSIGNMENT SYSTEM - Advanced Agent Operations!

print("🎯 MISSION ASSIGNMENT SYSTEM")
print("Matching agents to classified operations")
print("=" * 40)

# MISSION DATABASE (More dictionaries!)
missions = {
    "operation_thunderbolt": {
        "mission_name": "Operation Thunderbolt",
        "location": "Berlin, Germany", 
        "difficulty": 9,
        "required_clearance": 8,
        "required_specialties": ["Infiltration", "Combat"],
        "status": "Available",
        "deadline": "48 hours"
    },
    "cyber_storm": {
        "mission_name": "Cyber Storm",
        "location": "Remote (Digital)",
        "difficulty": 7,
        "required_clearance": 6,
        "required_specialties": ["Hacking", "Cyber Warfare"],
        "status": "Available", 
        "deadline": "24 hours"
    },
    "silent_shadow": {
        "mission_name": "Silent Shadow",
        "location": "Paris, France",
        "difficulty": 8,
        "required_clearance": 7,
        "required_specialties": ["Espionage", "Linguistics"],
        "status": "Available",
        "deadline": "72 hours"
    }
}

# Load our agent database from previous section
agents = {
    "007": {"clearance_level": 10, "specialties": ["Combat", "Gadgets", "Infiltration"], "status": "Active"},
    "black_widow": {"clearance_level": 9, "specialties": ["Espionage", "Combat", "Linguistics"], "status": "Active"}, 
    "phoenix": {"clearance_level": 8, "specialties": ["Hacking", "Drones", "Cyber Warfare"], "status": "Active"}
}

def find_suitable_agents(mission_key):
    """Find all agents suitable for a specific mission"""
    mission = missions[mission_key]
    suitable_agents = []
    
    print(f"\\n🎯 ANALYZING: {mission['mission_name']}")
    print(f"📍 Location: {mission['location']}")
    print(f"🔒 Required Clearance: Level {mission['required_clearance']}")
    print(f"💼 Required Skills: {', '.join(mission['required_specialties'])}")
    print("-" * 40)
    
    for agent_code, agent_data in agents.items():
        # Check clearance level
        if agent_data['clearance_level'] < mission['required_clearance']:
            print(f"❌ Agent {agent_code}: Insufficient clearance")
            continue
            
        # Check if agent has required specialties
        has_skills = False
        for required_skill in mission['required_specialties']:
            if required_skill in agent_data['specialties']:
                has_skills = True
                break
        
        if not has_skills:
            print(f"❌ Agent {agent_code}: Missing required specialties")
            continue
            
        # Check availability
        if agent_data['status'] != 'Active':
            print(f"❌ Agent {agent_code}: Not available ({agent_data['status']})")
            continue
            
        # Agent is suitable!
        suitable_agents.append(agent_code)
        print(f"✅ Agent {agent_code}: PERFECT MATCH!")
        
        # Show matching skills
        matching_skills = []
        for skill in mission['required_specialties']:
            if skill in agent_data['specialties']:
                matching_skills.append(skill)
        print(f"   🎯 Matching skills: {', '.join(matching_skills)}")
    
    return suitable_agents

def assign_mission(agent_code, mission_key):
    """Assign a mission to a specific agent"""
    agent_name = agent_code
    mission_name = missions[mission_key]['mission_name']
    
    # Update databases
    missions[mission_key]['status'] = 'Assigned'
    missions[mission_key]['assigned_to'] = agent_code
    agents[agent_code]['status'] = 'On Mission'
    agents[agent_code]['current_mission'] = mission_key
    
    print(f"\\n📋 MISSION ASSIGNED!")
    print(f"🕵️ Agent: {agent_name}")
    print(f"🎯 Mission: {mission_name}")
    print(f"⏰ Deadline: {missions[mission_key]['deadline']}")
    print(f"📍 Location: {missions[mission_key]['location']}")

# 🎮 MISSION ASSIGNMENT SIMULATION
print("🎮 TESTING MISSION ASSIGNMENT SYSTEM:")

# Analyze each mission
for mission_key in missions:
    suitable = find_suitable_agents(mission_key)
    
    if suitable:
        # Assign to first suitable agent
        best_agent = suitable[0]
        assign_mission(best_agent, mission_key)
    else:
        print(f"⚠️ No suitable agents found for {missions[mission_key]['mission_name']}")

# Final status report
print(f"\\n📊 FINAL STATUS REPORT:")
print("AGENT STATUS:")
for agent_code, agent_data in agents.items():
    print(f"🕵️ Agent {agent_code}: {agent_data['status']}")

print("\\nMISSION STATUS:")
for mission_key, mission_data in missions.items():
    print(f"🎯 {mission_data['mission_name']}: {mission_data['status']}")

print("\\n🔒 Mission assignment complete!")

# 🤖 Botty: "This is how AI systems match data and make decisions!"`,
      },
      {
        type: "challenge",
        emoji: "🕵️",
        content: "## 🕵️ Challenge: Contact Book",
        challenge: {
          title: "Build a Contact Book",
          description: "Create a contact book using dictionaries where you can add and look up contacts!\n\n用字典创建一个通讯录，可以添加和查找联系人！",
          starterCode: "contacts = {}\n\ndef add_contact(name, phone, email):\n    # Add a contact as a nested dictionary\n    pass\n\ndef find_contact(name):\n    # Return contact info or 'Not found'\n    pass\n\nadd_contact('Alice', '555-1234', 'alice@email.com')\nadd_contact('Bob', '555-5678', 'bob@email.com')\n\nprint(find_contact('Alice'))\nprint(find_contact('Charlie'))",
          hint: "contacts[name] = {'phone': phone, 'email': email}. Use 'in' to check if name exists.",
          solution: "contacts = {}\n\ndef add_contact(name, phone, email):\n    contacts[name] = {'phone': phone, 'email': email}\n\ndef find_contact(name):\n    if name in contacts:\n        c = contacts[name]\n        return f\"{name}: {c['phone']}, {c['email']}\"\n    return 'Not found'\n\nadd_contact('Alice', '555-1234', 'alice@email.com')\nadd_contact('Bob', '555-5678', 'bob@email.com')\n\nprint(find_contact('Alice'))\nprint(find_contact('Charlie'))",
          expectedOutput: "Alice: 555-1234, alice@email.com\nNot found",
        },
      },
      {
        type: "challenge",
        emoji: "📊",
        content: "## 📊 Challenge: Word Counter",
        challenge: {
          title: "Count Word Frequencies",
          description: "Use a dictionary to count how many times each word appears in a sentence!\n\n用字典统计句子中每个单词出现的次数！",
          starterCode: "def count_words(sentence):\n    # Split into words, count each one\n    counts = {}\n    # Your code here\n    return counts\n\nresult = count_words('the cat sat on the mat the cat')\nfor word, count in sorted(result.items()):\n    print(f'{word}: {count}')",
          hint: "Split the sentence with .split(), then for each word: counts[word] = counts.get(word, 0) + 1",
          solution: "def count_words(sentence):\n    counts = {}\n    for word in sentence.split():\n        counts[word] = counts.get(word, 0) + 1\n    return counts\n\nresult = count_words('the cat sat on the mat the cat')\nfor word, count in sorted(result.items()):\n    print(f'{word}: {count}')",
          expectedOutput: "cat: 2\nmat: 1\non: 1\nsat: 1\nthe: 3",
        },
      },
      {
        type: "quiz",
        content: "🕵️ Secret Agent Dictionary Master Quiz!",
        quiz: QUIZ_DATA["3-2"],
      },
    ],
  },

  {
    id: "3-3",
    moduleId: "area-3",
    title: "High Score Hall of Fame!",
    subtitle: "Files preserve your achievements forever · 高分榜：文件永久保存成就",
    icon: "🏆",
    xp: 35,
    duration: "20 min",
    order: 3,
    gradeRange: [6, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🏆",
        content: `## 🏆 Welcome to the Hall of Fame Archives!

**🔧 Chip:** "Ever wonder how games remember your high scores even after you turn off the computer? FILES!"

**Memory vs Files - The Gaming Truth:**
- 🧠 **RAM/Variables:** Fast but TEMPORARY 
  - Great for current game session
  - GONE when program ends! 💀

- 💾 **Files:** Slower but PERMANENT
  - Survives computer restarts  
  - Lasts forever (until deleted)
  - Shared between different programs

**File Superpowers:**
- 📊 **High Score Boards:** Remember the legends

- 💾 **Save Games:** Continue your adventure

- 📈 **Statistics:** Track progress over time

- 🌐 **Data Sharing:** Send scores to friends

**🎮 Real Examples:**
- Minecraft saves your worlds in files

- Chrome saves your bookmarks in files  

- Every app stores settings in files

🤖 Botty says: "AI models are saved as giant files - that's how ChatGPT remembers its training!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: File I/O — Permanent Memory",
        concept: {
          title: "💾 New Syntax: File I/O — Permanent Memory",
          titleZh: "新语法：文件读写 — 永久记忆",
          syntaxCards: [
            {
              symbol: 'open(file, "w")',
              name: "Open for Writing",
              nameZh: "打开写入",
              emoji: "✍️",
              description: "Like opening a blank notebook ✍️ — creates a new file (or erases the old one!) and lets you write into it.",
              example: 'f = open("scores.txt", "w")\nf.write("Alice,100")\nf.close()',
            },
            {
              symbol: 'open(file, "r")',
              name: "Open for Reading",
              nameZh: "打开读取",
              emoji: "📖",
              description: "Like opening a book 📖 — reads what's already written in the file.",
              example: 'f = open("scores.txt", "r")\ndata = f.read()\nf.close()',
            },
            {
              symbol: 'open(file, "a")',
              name: "Open for Appending",
              nameZh: "打开追加",
              emoji: "➕",
              description: "Like adding pages to a diary ➕ — adds new content to the END without erasing existing data!",
              example: 'f = open("scores.txt", "a")\nf.write("Bob,200\\n")',
            },
            {
              symbol: "with open(...) as f:",
              name: "With Statement (auto-close)",
              nameZh: "with 语句（自动关闭）",
              emoji: "🛡️",
              description: "The safe way 🛡️ — automatically closes the file when done, even if an error happens. Always use this!",
              example: 'with open("scores.txt", "r") as f:\n    data = f.read()\n# File auto-closed here!',
            },
            {
              symbol: "try: ... except:",
              name: "Error Handling",
              nameZh: "错误处理",
              emoji: "🦺",
              description: "A safety net 🦺 — catches errors (like missing files) so your program doesn't crash!",
              example: "try:\n    f = open('data.txt')\nexcept FileNotFoundError:\n    print('File missing!')",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: 'with open("hall_of_fame.txt", "a") as f:', explanation: "Open file in append mode — add without erasing!", explanationZh: "以追加模式打开文件 — 添加不会删除已有内容！" },
              { code: '    f.write(f"{name},{score}\\n")', explanation: "Write player name and score, \\n = new line.", explanationZh: "写入玩家名和分数，\\n = 换行" },
              { code: 'with open("hall_of_fame.txt", "r") as f:', explanation: "Open same file in read mode to view scores.", explanationZh: "以读取模式打开同一文件查看分数" },
              { code: "    for line in f:", explanation: "Loop through each line in the file.", explanationZh: "逐行遍历文件" },
              { code: '        parts = line.strip().split(",")', explanation: "Remove whitespace, split by comma into a list.", explanationZh: "去除空白，按逗号分割成列表" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 High Score System Design Challenge!

**Your Mission:** Design the ultimate high score system!

**Features needed:**
1. 📝 **Save Scores:** Write new high scores to file
2. 📖 **Load Scores:** Read existing scores from file  
3. 🏅 **Top 10 List:** Keep only the best scores
4. 🆔 **Player Names:** Remember who got each score
5. 📅 **Timestamps:** When was the score achieved?

**File Format Options:**
- **Simple text:** "Alice,9850,2024-01-15"

- **JSON format:** Structured data

- **CSV format:** Spreadsheet-friendly

**Think about:**
- What happens if the file doesn't exist yet?

- How do you sort scores highest to lowest?

- What if two players have the same score?

Let's build this step by step! 🚀`,
      },
      {
        type: "code",
        emoji: "📝",
        content: `## 📝 High Score Recorder - Writing Hall of Fame!

🎯 **What you'll learn:** How to write data to files so it persists even after the program ends.
学习目标：如何把数据写入文件，使其在程序结束后依然保存。

Without files, your program's memory vanishes when it stops — like a dream you forget! 💭 File writing is how games save progress, apps store settings, and websites remember your login.

🔑 **Key things to notice:**
- \`open("file.txt", "w")\` opens a file for writing
- \`.write()\` puts text into the file
- \`with open(...) as f:\` automatically closes the file when done

👀 Check if the file actually appears after running the code!`,
        code: `# 🏆 HIGH SCORE HALL OF FAME - File Writing System!

print("🏆 HIGH SCORE HALL OF FAME")
print("Writing legendary achievements to files!")
print("=" * 45)

import datetime

# FUNCTION: Save a new high score to file
def save_high_score(player_name, score, game_name="Awesome Game"):
    """Save a high score to the hall of fame file"""
    
    # Get current date and time
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    
    # Create the score record
    score_line = f"{player_name},{score},{timestamp},{game_name}\\n"
    
    print(f"💾 Saving score: {player_name} - {score} points")
    
    try:
        # Open file in append mode (adds to end without erasing)
        with open("hall_of_fame.txt", "a") as file:
            file.write(score_line)
        print("✅ Score saved to Hall of Fame!")
        
    except Exception as e:
        print(f"❌ Error saving score: {e}")

# FUNCTION: Display all scores from file
def display_hall_of_fame():
    """Read and display all high scores from file"""
    print("\\n🏆 HALL OF FAME - ALL TIME LEGENDS:")
    print("-" * 50)
    
    try:
        # Open file in read mode
        with open("hall_of_fame.txt", "r") as file:
            score_count = 0
            for line in file:
                # Split the line into parts
                parts = line.strip().split(",")
                if len(parts) >= 3:
                    name = parts[0]
                    score = parts[1]
                    timestamp = parts[2]
                    game = parts[3] if len(parts) > 3 else "Unknown Game"
                    
                    score_count += 1
                    print(f"🥇 #{score_count}: {name} - {score} points ({timestamp})")
                    print(f"   🎮 Game: {game}")
            
            if score_count == 0:
                print("📝 No scores recorded yet. Be the first legend!")
                
    except FileNotFoundError:
        print("📝 Hall of Fame file not found. Starting fresh!")
        print("🎯 Add some scores to create the hall of fame!")
        
    except Exception as e:
        print(f"❌ Error reading scores: {e}")

# FUNCTION: Interactive score entry
def add_new_score():
    """Get score info from user and save it"""
    print("\\n🎮 NEW HIGH SCORE ENTRY:")
    
    player_name = input("🏆 Enter player name: ")
    
    try:
        score = int(input("📊 Enter score: "))
        game_name = input("🎮 Game name (optional): ") or "Mystery Game"
        
        save_high_score(player_name, score, game_name)
        
    except ValueError:
        print("❌ Invalid score! Please enter a number.")

# 🎮 INTERACTIVE HALL OF FAME SYSTEM
print("🎮 WELCOME TO THE INTERACTIVE HALL OF FAME!")

while True:
    print("\\n📋 HALL OF FAME MENU:")
    print("1. 📝 Add new high score")
    print("2. 🏆 View hall of fame") 
    print("3. 🎯 Add sample scores (for testing)")
    print("4. 🚪 Exit")
    
    choice = input("\\n🎮 Choose option (1-4): ")
    
    if choice == "1":
        add_new_score()
        
    elif choice == "2":
        display_hall_of_fame()
        
    elif choice == "3":
        # Add some sample scores for demonstration
        sample_scores = [
            ("Alice", 9850, "Space Shooter"),
            ("Bob", 8200, "Puzzle Master"), 
            ("Charlie", 7650, "Racing Champion"),
            ("Diana", 9200, "Platform Adventure")
        ]
        
        print("🎯 Adding sample high scores...")
        for name, score, game in sample_scores:
            save_high_score(name, score, game)
        print("✨ Sample scores added!")
        
    elif choice == "4":
        print("👋 Thanks for visiting the Hall of Fame!")
        break
        
    else:
        print("🤔 Invalid choice! Try again.")

print("\\n💾 All scores are safely stored in 'hall_of_fame.txt'")
print("🔄 Run this program again anytime to see your scores!")

# 🔧 Chip: "Your high scores will survive computer restarts!"`,
      },
      {
        type: "code",
        emoji: "🥇",
        content: `## 🥇 Advanced Hall of Fame - Top 10 Leaderboard!

🎯 **What you'll learn:** How to read, parse, sort, and rewrite files to maintain a leaderboard.
学习目标：如何读取、解析、排序和重写文件来维护排行榜。

This is how EVERY leaderboard works — from video games to school rankings! 🏆 Read old scores, add the new one, sort them, keep only the top 10, save back to file.

🔑 **Key things to notice:**
- \`.readlines()\` reads a file into a list of strings
- \`.strip()\` removes extra spaces/newlines from each line
- \`sorted(scores, reverse=True)\` sorts highest-first

👀 Try running this multiple times and watch the leaderboard grow!`,
        code: `# 🥇 ADVANCED HALL OF FAME - Top 10 Leaderboard System!

print("🥇 ADVANCED HALL OF FAME SYSTEM")
print("Featuring Top 10 leaderboards and statistics!")
print("=" * 50)

import datetime

def load_all_scores():
    """Load all scores from file and return as list of dictionaries"""
    scores = []
    
    try:
        with open("hall_of_fame.txt", "r") as file:
            for line in file:
                parts = line.strip().split(",")
                if len(parts) >= 3:
                    score_data = {
                        "name": parts[0],
                        "score": int(parts[1]),
                        "timestamp": parts[2],
                        "game": parts[3] if len(parts) > 3 else "Unknown"
                    }
                    scores.append(score_data)
    except FileNotFoundError:
        print("📝 No hall of fame file found. Starting fresh!")
        
    return scores

def display_top_10():
    """Display the top 10 highest scores"""
    scores = load_all_scores()
    
    if not scores:
        print("📝 No scores recorded yet!")
        return
    
    # Sort scores from highest to lowest
    sorted_scores = sorted(scores, key=lambda x: x["score"], reverse=True)
    
    print("\\n🥇 TOP 10 HALL OF FAME LEGENDS:")
    print("=" * 45)
    
    for i, score in enumerate(sorted_scores[:10], 1):
        # Medal emojis for top 3
        if i == 1:
            medal = "🥇"
        elif i == 2:
            medal = "🥈"
        elif i == 3:
            medal = "🥉"
        else:
            medal = f"#{i:2}"
            
        print(f"{medal} {score['name']} - {score['score']:,} points")
        print(f"    📅 {score['timestamp']} | 🎮 {score['game']}")

def display_player_stats(player_name):
    """Show detailed statistics for a specific player"""
    scores = load_all_scores()
    player_scores = [s for s in scores if s["name"].lower() == player_name.lower()]
    
    if not player_scores:
        print(f"❌ No scores found for player '{player_name}'")
        return
    
    # Calculate statistics
    total_games = len(player_scores)
    all_scores = [s["score"] for s in player_scores]
    best_score = max(all_scores)
    average_score = sum(all_scores) / len(all_scores)
    
    print(f"\\n📊 PLAYER STATISTICS: {player_name}")
    print("=" * 40)
    print(f"🎮 Total games played: {total_games}")
    print(f"🏆 Best score: {best_score:,} points")
    print(f"📈 Average score: {average_score:.1f} points")
    print(f"📅 First game: {min(player_scores, key=lambda x: x['timestamp'])['timestamp']}")
    print(f"📅 Latest game: {max(player_scores, key=lambda x: x['timestamp'])['timestamp']}")
    
    print("\\n📋 All games:")
    sorted_player = sorted(player_scores, key=lambda x: x["score"], reverse=True)
    for i, game in enumerate(sorted_player, 1):
        print(f"  {i}. {game['score']:,} points - {game['game']} ({game['timestamp']})")

def save_leaderboard_html():
    """Save a fancy HTML version of the leaderboard"""
    scores = load_all_scores()
    sorted_scores = sorted(scores, key=lambda x: x["score"], reverse=True)[:10]
    
    html_content = """
    <html>
    <head><title>🏆 Hall of Fame</title></head>
    <body style="font-family: Arial; background: #001122; color: gold;">
    <h1>🏆 HALL OF FAME - TOP 10 LEGENDS</h1>
    <table border="1" style="border-collapse: collapse; width: 100%;">
    <tr><th>Rank</th><th>Player</th><th>Score</th><th>Game</th><th>Date</th></tr>
    """
    
    for i, score in enumerate(sorted_scores, 1):
        html_content += f"""
        <tr>
            <td>#{i}</td>
            <td>{score['name']}</td>
            <td>{score['score']:,}</td>
            <td>{score['game']}</td>
            <td>{score['timestamp']}</td>
        </tr>
        """
    
    html_content += """
    </table>
    <p>Generated by Python Hall of Fame System!</p>
    </body></html>
    """
    
    try:
        with open("hall_of_fame.html", "w") as file:
            file.write(html_content)
        print("🌐 HTML leaderboard saved as 'hall_of_fame.html'")
        print("📂 Open this file in your web browser!")
    except Exception as e:
        print(f"❌ Error saving HTML: {e}")

# 🎮 ADVANCED HALL OF FAME MENU
while True:
    print("\\n🏆 ADVANCED HALL OF FAME SYSTEM")
    print("1. 🥇 View Top 10 Leaderboard")
    print("2. 📊 Player Statistics")
    print("3. 🌐 Export HTML Leaderboard")
    print("4. 📋 View All Scores")
    print("5. 🚪 Exit")
    
    choice = input("\\n🎮 Choose option (1-5): ")
    
    if choice == "1":
        display_top_10()
        
    elif choice == "2":
        player_name = input("👤 Enter player name: ")
        display_player_stats(player_name)
        
    elif choice == "3":
        save_leaderboard_html()
        
    elif choice == "4":
        scores = load_all_scores()
        print(f"\\n📋 ALL {len(scores)} RECORDED SCORES:")
        for score in scores:
            print(f"🎯 {score['name']} - {score['score']} ({score['game']})")
            
    elif choice == "5":
        print("👋 Thanks for using the Hall of Fame system!")
        break
        
    else:
        print("🤔 Invalid choice!")

# 🤖 Botty: "This is how real game databases work!"`,
      },
      {
        type: "challenge",
        emoji: "📝",
        content: "## 📝 Challenge: Simple Note Saver",
        challenge: {
          title: "Save and Load Notes",
          description: "Create functions to save notes to a file and load them back!\n\n创建函数将笔记保存到文件并加载回来！",
          starterCode: "def save_note(filename, note):\n    # Write the note to a file\n    pass\n\ndef load_notes(filename):\n    # Read and return all notes from file\n    pass\n\nsave_note('notes.txt', 'Learn Python!')\nsave_note('notes.txt', 'Build a game!')\nprint(load_notes('notes.txt'))",
          hint: "Use open(filename, 'a') to append, open(filename, 'r') to read. Don't forget the newline!",
          solution: "def save_note(filename, note):\n    with open(filename, 'a') as f:\n        f.write(note + '\\n')\n\ndef load_notes(filename):\n    with open(filename, 'r') as f:\n        return f.read()\n\nsave_note('notes.txt', 'Learn Python!')\nsave_note('notes.txt', 'Build a game!')\nprint(load_notes('notes.txt'))",
          expectedOutput: "Learn Python!\nBuild a game!",
        },
      },
      {
        type: "challenge",
        emoji: "🏆",
        content: "## 🏆 Challenge: High Score Tracker",
        challenge: {
          title: "Track and Sort High Scores",
          description: "Build a high score system that saves scores to a file and shows the top 3!\n\n构建一个高分系统，将分数保存到文件并显示前3名！",
          starterCode: "scores = []\n\ndef add_score(name, score):\n    scores.append({'name': name, 'score': score})\n\ndef top_3():\n    # Sort by score (highest first) and return top 3\n    pass\n\nadd_score('Alice', 9500)\nadd_score('Bob', 8200)\nadd_score('Charlie', 9800)\nadd_score('Diana', 7600)\n\nprint('🏆 TOP 3 HIGH SCORES')\nfor i, s in enumerate(top_3(), 1):\n    print(f'{i}. {s[\"name\"]}: {s[\"score\"]}')",
          hint: "Use sorted(scores, key=lambda s: s['score'], reverse=True)[:3]",
          solution: "scores = []\n\ndef add_score(name, score):\n    scores.append({'name': name, 'score': score})\n\ndef top_3():\n    return sorted(scores, key=lambda s: s['score'], reverse=True)[:3]\n\nadd_score('Alice', 9500)\nadd_score('Bob', 8200)\nadd_score('Charlie', 9800)\nadd_score('Diana', 7600)\n\nprint('🏆 TOP 3 HIGH SCORES')\nfor i, s in enumerate(top_3(), 1):\n    print(f'{i}. {s[\"name\"]}: {s[\"score\"]}')",
          expectedOutput: "🏆 TOP 3 HIGH SCORES\n1. Charlie: 9800\n2. Alice: 9500\n3. Bob: 8200",
        },
      },
      {
        type: "quiz",
        content: "🏆 High Score File Master Quiz!",
        quiz: QUIZ_DATA["3-3"],
      },
    ],
  },

  {
    id: "3-4", 
    moduleId: "area-3",
    title: "Bug Detective Society",
    subtitle: "Advanced debugging techniques · Bug侦探社：高级调试技巧",
    icon: "🔍",
    xp: 35,
    duration: "25 min",
    order: 4,
    gradeRange: [7, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🔍",
        content: `## 🔍 Advanced Bug Hunting

**🐍 Py:** "Now you're hunting more complex bugs in larger programs!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Debugging Techniques",
        concept: {
          title: "🐛 New Syntax: Debugging Techniques",
          titleZh: "新语法：调试技巧",
          syntaxCards: [
            {
              symbol: "print(variable)",
              name: "Print Debugging",
              nameZh: "打印调试",
              emoji: "🔦",
              description: "Like a flashlight in the dark 🔦 — add print() to see what your variables actually hold at each step!",
              example: "x = calculate()\nprint(f'DEBUG: x = {x}')  # See the value!",
            },
            {
              symbol: "assert condition",
              name: "Assert (self-check)",
              nameZh: "断言（自检）",
              emoji: "✅",
              description: "A tripwire 🪤 — crashes ON PURPOSE if something is wrong. Catches bugs early!",
              example: "assert len(items) > 0, 'List is empty!'\nassert age >= 0, 'Age cannot be negative!'",
            },
            {
              symbol: "type(variable)",
              name: "Type Check",
              nameZh: "类型检查",
              emoji: "🏷️",
              description: "Like checking an ingredient label 🏷️ — tells you what TYPE a variable is (str, int, list...).",
              example: "print(type(x))  # <class 'int'>\nprint(type('hi'))  # <class 'str'>",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "def divide(a, b):", explanation: "A function that might have a bug...", explanationZh: "一个可能有 bug 的函数..." },
              { code: "    print(f'DEBUG: a={a}, b={b}')", explanation: "Step 1: Print inputs to see what we received.", explanationZh: "第 1 步：打印输入查看收到了什么" },
              { code: "    assert b != 0, 'Cannot divide by zero!'", explanation: "Step 2: Assert catches bad inputs before they cause errors.", explanationZh: "第 2 步：断言在错误发生前捕获坏输入" },
              { code: "    result = a / b", explanation: "The actual calculation.", explanationZh: "实际的计算" },
              { code: "    print(f'DEBUG: result={result}')", explanation: "Step 3: Check the output looks correct.", explanationZh: "第 3 步：检查输出是否正确" },
              { code: "    return result", explanation: "Return the verified result.", explanationZh: "返回验证过的结果" },
            ],
          },
        },
      },
      {
        type: "interactive",
        emoji: "🔦",
        content: "## 🔦 Debug with Print Statements\nAdd print debugging to find the bug!\n\n用 print 调试来找到 bug！",
        exercise: {
          prompt: "This function should calculate the average, but it returns the wrong answer. Add print() statements to find the bug, then fix it!",
          promptZh: "这个函数应该计算平均值，但返回了错误答案。添加 print() 语句找到 bug，然后修复它！",
          starterCode: "def average(numbers):\n    total = 0\n    for num in numbers:\n        total = num  # 🐛 Bug is here!\n    return total / len(numbers)\n\n# Fix the bug and test:\nresult = average([10, 20, 30])\nprint(f'Average: {result}')  # Should be 20.0",
          expectedOutput: "Average: 20.0",
          hint: "Look at the line inside the loop — should it replace total or add to it?",
          hintZh: "看循环里的那行 — 应该是替换 total 还是累加？",
          solution: "def average(numbers):\n    total = 0\n    for num in numbers:\n        total += num  # Fixed: += instead of =\n    return total / len(numbers)\n\nresult = average([10, 20, 30])\nprint(f'Average: {result}')",
        },
      },
      {
        type: "code",
        emoji: "✅",
        content: `## ✅ Assert: Your Code's Self-Check

🎯 **What you'll learn:** How to use \`assert\` to automatically verify your code works correctly.
学习目标：如何用 assert 自动验证代码是否正确运行。

Think of assert like a bouncer at a club 🚪 — it checks conditions at the door and stops everything if something's wrong. Way better than finding the bug 3 hours later!

🔑 **Key things to notice:**
- \`assert condition, "error message"\` crashes on purpose if condition is False
- Great for catching impossible inputs (negative money, etc.)
- Use during development to find bugs early

\`\`\`python
def withdraw(balance, amount):
    assert amount > 0, "Amount must be positive!"
    assert amount <= balance, f"Not enough funds! Have {balance}"
    balance -= amount
    print(f"Withdrew {amount}, remaining: {balance}")
    return balance

wallet = 100
wallet = withdraw(wallet, 30)   # ✅ Works: Withdrew 30, remaining: 70
wallet = withdraw(wallet, 50)   # ✅ Works: Withdrew 50, remaining: 20
# wallet = withdraw(wallet, -5) # ❌ AssertionError: Amount must be positive!
\`\`\`

👀 Try uncommenting the last line to see assert in action!`,
      },
      {
        type: "code",
        emoji: "🏷️",
        content: `## 🏷️ Type Checking for Debugging

🎯 **What you'll learn:** How to use \`type()\` and \`isinstance()\` to check and debug data types.
学习目标：如何用 type() 和 isinstance() 检查和调试数据类型。

Type errors are like putting diesel in a gasoline car ⛽ — it looks similar but breaks everything! type() is your fuel tester.

\`\`\`python
def double(value):
    print(f"DEBUG type: {type(value)}")  # Check what we got
    if isinstance(value, str):
        return value * 2  # "ha" → "haha"
    elif isinstance(value, (int, float)):
        return value * 2  # 5 → 10
    else:
        print(f"WARNING: unexpected type {type(value)}")
        return None

print(double(5))       # 10
print(double("ha"))    # haha
print(double([1,2]))   # WARNING + None
\`\`\``,
      },
      {
        type: "challenge",
        emoji: "🔍",
        content: "## 🔍 Challenge: Multi-Bug Hunt",
        challenge: {
          title: "Fix All Three Bugs",
          description: "This program has 3 bugs. Use print debugging and assert to find and fix them all!\n\n这个程序有3个bug。用print调试和assert来找到并修复它们！",
          starterCode: "def calculate_grade(scores):\n    # Bug 1: Wrong calculation\n    total = 0\n    for s in scores:\n        total = s\n    avg = total / len(scores)\n    \n    # Bug 2: Wrong comparison\n    if avg > 90:\n        grade = 'A'\n    elif avg > 80:\n        grade = 'B'\n    elif avg > 70:\n        grade = 'C'\n    else:\n        grade = 'F'  # Bug 3: Missing 'D' grade\n    \n    return grade\n\nprint(calculate_grade([85, 90, 88]))",
          hint: "Bug 1: += not =. Bug 3: Add elif avg > 60 for 'D' grade",
          solution: "def calculate_grade(scores):\n    total = 0\n    for s in scores:\n        total += s  # Fix 1: += not =\n    avg = total / len(scores)\n    \n    if avg >= 90:  # Fix 2: >= for boundary\n        grade = 'A'\n    elif avg >= 80:\n        grade = 'B'\n    elif avg >= 70:\n        grade = 'C'\n    elif avg >= 60:  # Fix 3: Added D grade\n        grade = 'D'\n    else:\n        grade = 'F'\n    \n    return grade\n\nprint(calculate_grade([85, 90, 88]))",
          expectedOutput: "B",
        },
      },
      {
        type: "challenge",
        emoji: "🐛",
        content: "## 🐛 Challenge: Debug a Number Guessing Game",
        challenge: {
          title: "Fix the Guessing Game",
          description: "This guessing game has bugs that prevent it from working correctly. Fix them!\n\n这个猜数字游戏有bug，修复它们！",
          starterCode: "import random\n\ndef guessing_game():\n    secret = random.randint(1, 10)\n    guesses = [5, 3, 7, secret]  # Simulated guesses\n    \n    for guess in guesses:\n        if guess = secret:  # Bug!\n            print(f'{guess} is correct! 🎉')\n        elif guess > secret:\n            print(f'{guess} is too high')\n        else:\n            print(f'{guess} is too low')\n\nguessing_game()",
          hint: "= is assignment, == is comparison!",
          solution: "import random\n\ndef guessing_game():\n    secret = random.randint(1, 10)\n    guesses = [5, 3, 7, secret]\n    \n    for guess in guesses:\n        if guess == secret:  # Fixed: == not =\n            print(f'{guess} is correct! 🎉')\n        elif guess > secret:\n            print(f'{guess} is too high')\n        else:\n            print(f'{guess} is too low')\n\nguessing_game()",
        },
      },
      {
        type: "quiz",
        content: "🔍 Bug Detective Quiz!",
        quiz: QUIZ_DATA["3-4"],
      },
    ],
  },

  {
    id: "3-5",
    moduleId: "area-3", 
    title: "Error Shield",
    subtitle: "Exception handling basics · 错误防护盾：异常处理基础",
    icon: "🛡️",
    xp: 35,
    duration: "20 min",
    order: 5,
    gradeRange: [7, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🛡️",
        content: `## 🛡️ Protecting Your Programs

**🐍 Py:** "try-except statements catch errors before they crash your program!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Exception Handling",
        concept: {
          title: "🛡️ New Syntax: Exception Handling",
          titleZh: "新语法：异常处理",
          syntaxCards: [
            {
              symbol: "try:",
              name: "Try Block",
              nameZh: "尝试块",
              emoji: "🤞",
              description: "Like wearing a seatbelt 🤞 — 'try this code, but be ready if something goes wrong!'",
              example: "try:\n    num = int(input('Number: '))",
            },
            {
              symbol: "except ErrorType:",
              name: "Except (catch error)",
              nameZh: "捕获异常",
              emoji: "🥅",
              description: "The safety net 🥅 — catches specific errors and handles them gracefully instead of crashing!",
              example: "except ValueError:\n    print('That is not a number!')",
            },
            {
              symbol: "finally:",
              name: "Finally (always runs)",
              nameZh: "最终（总是执行）",
              emoji: "🏁",
              description: "The cleanup crew 🧹 — runs NO MATTER WHAT, error or not. Perfect for closing files!",
              example: "finally:\n    file.close()\n    print('Cleanup done!')",
            },
            {
              symbol: "raise Error('msg')",
              name: "Raise (throw error)",
              nameZh: "抛出异常",
              emoji: "🚨",
              description: "Pull the alarm 🚨 — YOU create an error on purpose when something shouldn't happen!",
              example: "if age < 0:\n    raise ValueError('Age cannot be negative!')",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "try:", explanation: "Start the 'protected' zone — code that might fail.", explanationZh: "开始「保护区」— 可能失败的代码" },
              { code: "    age = int(input('Age: '))", explanation: "This could crash if user types 'hello' instead of a number!", explanationZh: "如果用户输入 'hello' 而不是数字就会崩溃！" },
              { code: "    print(f'You are {age}')", explanation: "Only runs if the conversion worked.", explanationZh: "只有转换成功才会执行" },
              { code: "except ValueError:", explanation: "Catch the ValueError (bad number conversion).", explanationZh: "捕获 ValueError（数字转换失败）" },
              { code: "    print('Please enter a valid number!')", explanation: "Friendly message instead of a scary crash!", explanationZh: "友好的提示而不是可怕的崩溃！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        emoji: "🛡️",
        content: "## 🛡️ Protect This Code!\nWrap the dangerous code in try-except!\n\n用 try-except 保护危险代码！",
        exercise: {
          prompt: "This code crashes when the user enters a non-number. Add try-except to handle it gracefully!",
          promptZh: "这段代码在用户输入非数字时会崩溃。添加 try-except 优雅地处理它！",
          starterCode: "# Make this safe from bad input!\ntext = 'hello'  # Simulating bad input\nnum = int(text)\nprint(f'Your number doubled: {num * 2}')",
          expectedOutput: "Oops! That's not a valid number!",
          hint: "Wrap int(text) in try: and catch ValueError in except:",
          hintZh: "把 int(text) 放在 try: 里，用 except ValueError: 捕获",
          solution: "text = 'hello'\ntry:\n    num = int(text)\n    print(f'Your number doubled: {num * 2}')\nexcept ValueError:\n    print(\"Oops! That's not a valid number!\")",
        },
      },
      {
        type: "code",
        emoji: "🥅",
        content: `## 🥅 Multiple Exception Types

🎯 **What you'll learn:** How to catch different types of errors with specific except blocks.
学习目标：如何用特定的 except 块捕获不同类型的错误。

Different errors need different fixes — like a doctor treating different symptoms 🏥. ValueError needs different handling than ZeroDivisionError!

\`\`\`python
def safe_divide(a, b):
    try:
        result = a / b
        print(f"{a} / {b} = {result}")
    except ZeroDivisionError:
        print("❌ Can't divide by zero!")
    except TypeError:
        print("❌ Both values must be numbers!")
    finally:
        print("✅ Division attempt complete")

safe_divide(10, 2)    # 10 / 2 = 5.0 ✅
safe_divide(10, 0)    # ❌ Can't divide by zero!
safe_divide("hi", 2)  # ❌ Both values must be numbers!
\`\`\`

**🐍 Py:** "Each except block catches a different type of error — like having different safety nets for different problems!"`,
      },
      {
        type: "code",
        emoji: "🚨",
        content: `## 🚨 Raise Your Own Errors

🎯 **What you'll learn:** How to use \`raise\` to create your own custom error messages.
学习目标：如何用 raise 创建自己的自定义错误消息。

Sometimes YOU know something is wrong before Python does! 🚨 raise lets you pull the fire alarm yourself instead of waiting for the building to catch fire.

\`\`\`python
def set_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be a whole number!")
    if age < 0 or age > 150:
        raise ValueError(f"Age {age} is not realistic!")
    print(f"Age set to {age} ✅")

try:
    set_age(25)    # Age set to 25 ✅
    set_age(-5)    # Raises ValueError
except ValueError as e:
    print(f"Error: {e}")
except TypeError as e:
    print(f"Error: {e}")
\`\`\``,
      },
      {
        type: "challenge",
        emoji: "🛡️",
        content: "## 🛡️ Challenge: Safe Calculator",
        challenge: {
          title: "Build a Safe Calculator",
          description: "Build a calculator that handles ALL errors gracefully — division by zero, invalid input, and more!\n\n构建一个能优雅处理所有错误的计算器！",
          starterCode: "def safe_calc(a, op, b):\n    # Add try-except to handle errors!\n    if op == '+':\n        return a + b\n    elif op == '-':\n        return a - b\n    elif op == '*':\n        return a * b\n    elif op == '/':\n        return a / b\n\nprint(safe_calc(10, '+', 5))\nprint(safe_calc(10, '/', 0))\nprint(safe_calc(10, '/', 'abc'))",
          hint: "Wrap the division in try-except ZeroDivisionError, and the whole function in try-except TypeError",
          solution: "def safe_calc(a, op, b):\n    try:\n        if op == '+':\n            return a + b\n        elif op == '-':\n            return a - b\n        elif op == '*':\n            return a * b\n        elif op == '/':\n            try:\n                return a / b\n            except ZeroDivisionError:\n                return '❌ Cannot divide by zero!'\n        else:\n            return f'❌ Unknown operator: {op}'\n    except TypeError:\n        return '❌ Invalid input types!'\n\nprint(safe_calc(10, '+', 5))\nprint(safe_calc(10, '/', 0))\nprint(safe_calc(10, '/', 'abc'))",
          expectedOutput: "15\n❌ Cannot divide by zero!\n❌ Invalid input types!",
        },
      },
      {
        type: "challenge",
        emoji: "🏗️",
        content: "## 🏗️ Challenge: Robust Password Validator",
        challenge: {
          title: "Password Validator with Error Handling",
          description: "Create a password validator that raises custom errors for different problems!\n\n创建一个密码验证器，对不同问题抛出自定义错误！",
          starterCode: "def validate_password(password):\n    # Raise ValueError if:\n    # - Less than 8 characters\n    # - No numbers in it\n    # - No uppercase letters\n    pass\n\n# Test it:\nfor pw in ['short', 'nouppercase1', 'NoNumbers', 'GoodPass1']:\n    try:\n        validate_password(pw)\n        print(f'{pw}: Valid ✅')\n    except ValueError as e:\n        print(f'{pw}: {e} ❌')",
          hint: "Use len() to check length, any(c.isdigit() for c in password) for numbers, any(c.isupper() ...) for uppercase",
          solution: "def validate_password(password):\n    if len(password) < 8:\n        raise ValueError('Too short (need 8+ chars)')\n    if not any(c.isdigit() for c in password):\n        raise ValueError('Need at least one number')\n    if not any(c.isupper() for c in password):\n        raise ValueError('Need at least one uppercase letter')\n\nfor pw in ['short', 'nouppercase1', 'NoNumbers', 'GoodPass1']:\n    try:\n        validate_password(pw)\n        print(f'{pw}: Valid ✅')\n    except ValueError as e:\n        print(f'{pw}: {e} ❌')",
          expectedOutput: "short: Too short (need 8+ chars) ❌\nnouppercase1: Need at least one uppercase letter ❌\nNoNumbers: Need at least one number ❌\nGoodPass1: Valid ✅",
        },
      },
      {
        type: "quiz",
        content: "🛡️ Error Shield Quiz!",
        quiz: QUIZ_DATA["3-5"],
      },
    ],
  },

  {
    id: "3-6",
    moduleId: "area-3",
    title: "Module Toolbox", 
    subtitle: "Import and organize code · 模块工具箱：导入和组织代码",
    icon: "🧰",
    xp: 35,
    duration: "22 min",
    order: 6,
    gradeRange: [7, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🧰",
        content: `## 🧰 Code Organization and Sharing

**🐍 Py:** "Modules let you use code that other programmers built!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Modules & Imports",
        concept: {
          title: "🧰 New Syntax: Modules & Imports",
          titleZh: "新语法：模块与导入",
          syntaxCards: [
            {
              symbol: "import module",
              name: "Import Module",
              nameZh: "导入模块",
              emoji: "📦",
              description: "Like borrowing a friend's toolbox 📦 — brings in ALL tools from another file or library!",
              example: "import math\nprint(math.sqrt(16))  # 4.0",
            },
            {
              symbol: "from module import func",
              name: "Import Specific Tool",
              nameZh: "导入特定工具",
              emoji: "🔧",
              description: "Like borrowing just ONE wrench 🔧 — import only what you need, use it directly without the module name.",
              example: "from math import sqrt\nprint(sqrt(16))  # 4.0",
            },
            {
              symbol: "import module as alias",
              name: "Import with Nickname",
              nameZh: "导入并起别名",
              emoji: "🏷️",
              description: "Give a module a shorter name 🏷️ — saves typing for modules with long names!",
              example: "import random as rng\nrng.randint(1, 10)",
            },
            {
              symbol: "pip install package",
              name: "Install External Package",
              nameZh: "安装外部包",
              emoji: "🛒",
              description: "Like shopping for new tools 🛒 — download packages from the internet that other programmers shared!",
              example: "# In terminal:\npip install requests",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import math", explanation: "Import the math module — gets you sqrt, pi, sin, cos...", explanationZh: "导入 math 模块 — 包含 sqrt, pi, sin, cos..." },
              { code: "import random", explanation: "Import the random module — for random numbers and choices.", explanationZh: "导入 random 模块 — 用于随机数和选择" },
              { code: "from datetime import datetime", explanation: "Import just datetime from the datetime module.", explanationZh: "从 datetime 模块只导入 datetime" },
              { code: "import json", explanation: "Import JSON module — read/write structured data files.", explanationZh: "导入 JSON 模块 — 读写结构化数据文件" },
              { code: "print(math.pi)", explanation: "Use the module name + dot to access its tools.", explanationZh: "用模块名 + 点号访问其中的工具" },
            ],
          },
        },
      },
      {
        type: "interactive",
        emoji: "📦",
        content: "## 📦 Try Using Modules!\nImport and use the math module!\n\n导入并使用 math 模块！",
        exercise: {
          prompt: "Use the math module to calculate the area of a circle with radius 5 (area = π × r²)",
          promptZh: "用 math 模块计算半径为 5 的圆的面积（面积 = π × r²）",
          starterCode: "# Import math and calculate circle area\n# 导入 math 并计算圆的面积\n\nradius = 5\n# Your code here:\n\n# Should print: Area = 78.54 (approximately)",
          expectedOutput: "Area = 78.54",
          hint: "import math, then use math.pi and radius ** 2",
          hintZh: "import math，然后用 math.pi 和 radius ** 2",
          solution: "import math\n\nradius = 5\narea = math.pi * radius ** 2\nprint(f'Area = {area:.2f}')",
        },
      },
      {
        type: "code",
        emoji: "🎲",
        content: `## 🎲 The Random Module — Fun with Chance!

🎯 **What you'll learn:** How to use the random module for games, simulations, and unpredictable behavior.
学习目标：如何用 random 模块实现游戏、模拟和不可预测的行为。

Random is the spice of programming! 🎲 Without it, games would be boring (same enemy every time) and simulations would be useless.

\`\`\`python
import random

# Random integer between 1 and 6 (dice roll)
dice = random.randint(1, 6)
print(f"🎲 You rolled: {dice}")

# Random choice from a list
snacks = ["🍕 Pizza", "🌮 Taco", "🍔 Burger", "🍣 Sushi"]
pick = random.choice(snacks)
print(f"Today's lunch: {pick}")

# Shuffle a list (like shuffling cards)
cards = ["A♠", "K♥", "Q♦", "J♣"]
random.shuffle(cards)
print(f"Shuffled: {cards}")
\`\`\`

**🐍 Py:** "The random module is perfect for games, simulations, and making programs fun!"`,
      },
      {
        type: "code",
        emoji: "📅",
        content: `## 📅 Useful Built-in Modules

🎯 **What you'll learn:** How to import and use Python's built-in modules like math, datetime, and os.
学习目标：如何导入和使用 Python 内置模块如 math、datetime 和 os。

Python comes with batteries included! 🔋 These modules are pre-built toolboxes — no need to build everything from scratch.

\`\`\`python
# datetime — work with dates and times
from datetime import datetime
now = datetime.now()
print(f"Current time: {now.strftime('%H:%M')}")
print(f"Today: {now.strftime('%B %d, %Y')}")

# math — advanced math operations
import math
print(f"Square root of 144: {math.sqrt(144)}")
print(f"Pi = {math.pi:.4f}")

# json — save and load data
import json
data = {"name": "Py", "level": 5, "skills": ["loops", "functions"]}
text = json.dumps(data, indent=2)
print(text)
\`\`\``,
      },
      {
        type: "challenge",
        emoji: "🎲",
        content: "## 🎲 Challenge: Magic 8-Ball",
        challenge: {
          title: "Build a Magic 8-Ball",
          description: "Use the random module to build a Magic 8-Ball that gives random answers!\n\n用 random 模块构建一个魔法8号球，给出随机回答！",
          starterCode: "# Build a Magic 8-Ball!\n# 构建魔法8号球！\nimport random\n\nquestion = 'Will I ace my test?'\nprint(f'🎱 Question: {question}')\n\n# Create a list of possible answers\n# Then use random.choice() to pick one\n# Print the answer\n",
          hint: "Make a list of answers like ['Yes!', 'No way', 'Maybe...'] and use random.choice(answers)",
          solution: "import random\n\nquestion = 'Will I ace my test?'\nprint(f'🎱 Question: {question}')\n\nanswers = [\n    '🟢 Yes, definitely!',\n    '🔴 No way!',\n    '🟡 Maybe... ask again later',\n    '🟢 Signs point to yes!',\n    '🔴 Don\\'t count on it',\n    '🟡 Cannot predict now',\n]\n\nprint(f'🎱 Answer: {random.choice(answers)}')",
        },
      },
      {
        type: "challenge",
        emoji: "📊",
        content: "## 📊 Challenge: Random Stats Generator",
        challenge: {
          title: "RPG Character Generator",
          description: "Use random and math modules to generate random RPG character stats!\n\n用 random 和 math 模块生成随机RPG角色属性！",
          starterCode: "import random\nimport math\n\n# Generate a character with:\n# - Random name from a list\n# - Random HP between 50-100\n# - Random attack between 5-20\n# - Defense = math.ceil(attack * 0.6)\n# Print a character card!\n",
          hint: "Use random.choice() for name, random.randint() for stats, math.ceil() for defense",
          solution: "import random\nimport math\n\nnames = ['Shadow', 'Blaze', 'Storm', 'Crystal', 'Thunder']\nname = random.choice(names)\nhp = random.randint(50, 100)\nattack = random.randint(5, 20)\ndefense = math.ceil(attack * 0.6)\n\nprint(f'⚔️ CHARACTER CARD ⚔️')\nprint(f'Name: {name}')\nprint(f'HP: {hp} ❤️')\nprint(f'Attack: {attack} ⚔️')\nprint(f'Defense: {defense} 🛡️')",
        },
      },
      {
        type: "quiz",
        content: "🧰 Module Quiz!",
        quiz: QUIZ_DATA["3-6"],
      },
    ],
  },

  {
    id: "3-7",
    moduleId: "area-3",
    title: "🎮 Student Grade Manager",
    subtitle: "Complete project with data persistence · 学生成绩管理器：完整项目",
    icon: "🎮",
    xp: 50,
    duration: "30 min",
    order: 7,
    gradeRange: [7, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🎮",
        content: `## 🎮 Builder City Capstone Project!

**🏗️ Build a complete Grade Management System using all Builder City skills:**
- 🏭 **Functions** for reusable operations

- 📚 **Dictionaries** for student data

- 💾 **Files** for data persistence

- 🛡️ **Error handling** for robust operation

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Review: Combining All Builder Skills",
        concept: {
          title: "🏗️ Review: Combining All Builder Skills",
          titleZh: "复习：组合所有建造技能",
          syntaxCards: [
            {
              symbol: "def + dict + file",
              name: "Full-Stack Pattern",
              nameZh: "全栈模式",
              emoji: "🏛️",
              description: "The pro pattern 🏛️ — functions handle logic, dictionaries organize data, files make it permanent. This is how real apps work!",
              example: "def save_student(student):\n    with open('data.txt','a') as f:\n        f.write(str(student))",
            },
            {
              symbol: "json.dumps() / json.loads()",
              name: "JSON Serialization",
              nameZh: "JSON 序列化",
              emoji: "📋",
              description: "Like packing a suitcase 🧳 — converts dictionaries to text (for files) and back. The universal data format!",
              example: "import json\ntext = json.dumps(student_dict)\ndata = json.loads(text)",
            },
            {
              symbol: "sorted(list, key=...)",
              name: "Custom Sorting",
              nameZh: "自定义排序",
              emoji: "📊",
              description: "Like organizing a report card 📊 — sort by any field: name, grade, date, etc.",
              example: "sorted(students, key=lambda s: s['grade'], reverse=True)",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import json", explanation: "JSON module for saving/loading structured data.", explanationZh: "JSON 模块用于保存/加载结构化数据" },
              { code: "def add_student(name, grade):", explanation: "Function to add a new student record.", explanationZh: "添加新学生记录的函数" },
              { code: "    student = {'name': name, 'grade': grade}", explanation: "Dictionary stores the student's data.", explanationZh: "字典存储学生数据" },
              { code: "    with open('students.json', 'a') as f:", explanation: "Open file in append mode for permanent storage.", explanationZh: "以追加模式打开文件进行永久存储" },
              { code: "        f.write(json.dumps(student) + '\\n')", explanation: "Convert dict to JSON text and write to file.", explanationZh: "将字典转为 JSON 文本并写入文件" },
            ],
          },
        },
      },
      {
        type: "interactive",
        emoji: "💾",
        content: "## 💾 Build the Core: Add & View Students\nCreate functions to add and view students!\n\n创建添加和查看学生的函数！",
        exercise: {
          prompt: "Create an add_student function that adds a student dict to a list, then print all students",
          promptZh: "创建一个 add_student 函数，将学生字典添加到列表中，然后打印所有学生",
          starterCode: "students = []\n\ndef add_student(name, grade):\n    # Create a dict and append to students list\n    pass\n\n# Add 3 students:\nadd_student('Alice', 95)\nadd_student('Bob', 82)\nadd_student('Charlie', 91)\n\n# Print each student:\nfor s in students:\n    print(f\"{s['name']}: {s['grade']}\")",
          expectedOutput: "Alice: 95\nBob: 82\nCharlie: 91",
          hint: "student = {'name': name, 'grade': grade}, then students.append(student)",
          hintZh: "student = {'name': name, 'grade': grade}，然后 students.append(student)",
          solution: "students = []\n\ndef add_student(name, grade):\n    student = {'name': name, 'grade': grade}\n    students.append(student)\n\nadd_student('Alice', 95)\nadd_student('Bob', 82)\nadd_student('Charlie', 91)\n\nfor s in students:\n    print(f\"{s['name']}: {s['grade']}\")",
        },
      },
      {
        type: "code",
        emoji: "📊",
        content: `## 📊 Complete Grade Manager System

🎯 **What you'll learn:** How to combine functions, dictionaries, and file I/O into a complete application.
学习目标：如何将函数、字典和文件读写组合成一个完整的应用程序。

This is your graduation project for Area 3! 🎓 Everything you've learned — functions, dicts, files — comes together into one real-world app.

\`\`\`python
import json

class GradeManager:
    def __init__(self):
        self.students = []
    
    def add_student(self, name, grade):
        self.students.append({"name": name, "grade": grade})
        print(f"✅ Added {name} with grade {grade}")
    
    def get_average(self):
        if not self.students:
            return 0
        total = sum(s["grade"] for s in self.students)
        return total / len(self.students)
    
    def get_top_student(self):
        if not self.students:
            return None
        return max(self.students, key=lambda s: s["grade"])
    
    def show_report(self):
        print("\\n📋 GRADE REPORT")
        print("=" * 30)
        for s in sorted(self.students, key=lambda s: s["grade"], reverse=True):
            print(f"  {s['name']}: {s['grade']}")
        print(f"\\n📊 Average: {self.get_average():.1f}")
        top = self.get_top_student()
        if top:
            print(f"🏆 Top Student: {top['name']}")

# Try it out!
gm = GradeManager()
gm.add_student("Alice", 95)
gm.add_student("Bob", 82)
gm.add_student("Charlie", 91)
gm.show_report()
\`\`\``,
      },
      {
        type: "code",
        emoji: "💾",
        content: `## 💾 Saving Data to Files with JSON

🎯 **What you'll learn:** How to use the json module to save and load structured data.
学习目标：如何用 json 模块保存和加载结构化数据。

JSON is the universal language of data! 🌐 Every app, website, and API uses it. Think of it as a standardized way to pack your Python dictionaries into a file.

\`\`\`python
import json

# Save student data to a file
students = [
    {"name": "Alice", "grade": 95},
    {"name": "Bob", "grade": 82},
]

# Write to file
with open("students.json", "w") as f:
    json.dump(students, f, indent=2)
print("💾 Data saved!")

# Read from file
with open("students.json", "r") as f:
    loaded = json.load(f)
print(f"📂 Loaded {len(loaded)} students")
for s in loaded:
    print(f"  {s['name']}: {s['grade']}")
\`\`\`

**🐍 Py:** "JSON files let your program remember data between runs — like saving a game!"`,
      },
      {
        type: "challenge",
        emoji: "🎮",
        content: "## 🎮 Challenge: Grade Statistics",
        challenge: {
          title: "Calculate Grade Statistics",
          description: "Write functions to find the highest, lowest, and average grade from a list of students!\n\n编写函数找出学生列表中的最高分、最低分和平均分！",
          starterCode: "students = [\n    {'name': 'Alice', 'grade': 95},\n    {'name': 'Bob', 'grade': 72},\n    {'name': 'Charlie', 'grade': 88},\n    {'name': 'Diana', 'grade': 91},\n]\n\ndef highest_grade(students):\n    pass  # Return the student with highest grade\n\ndef average_grade(students):\n    pass  # Return the average grade\n\ntop = highest_grade(students)\nprint(f'Top: {top[\"name\"]} ({top[\"grade\"]})')\nprint(f'Average: {average_grade(students):.1f}')",
          hint: "Use max() with key=lambda for highest, sum() with list comprehension for average",
          solution: "students = [\n    {'name': 'Alice', 'grade': 95},\n    {'name': 'Bob', 'grade': 72},\n    {'name': 'Charlie', 'grade': 88},\n    {'name': 'Diana', 'grade': 91},\n]\n\ndef highest_grade(students):\n    return max(students, key=lambda s: s['grade'])\n\ndef average_grade(students):\n    return sum(s['grade'] for s in students) / len(students)\n\ntop = highest_grade(students)\nprint(f'Top: {top[\"name\"]} ({top[\"grade\"]})')\nprint(f'Average: {average_grade(students):.1f}')",
          expectedOutput: "Top: Alice (95)\nAverage: 86.5",
        },
      },
      {
        type: "challenge",
        emoji: "🏆",
        content: "## 🏆 Final Challenge: Grade Report Card",
        challenge: {
          title: "Generate a Report Card",
          description: "Create a function that generates a formatted report card with letter grades!\n\n创建一个函数，生成带有字母等级的格式化成绩单！",
          starterCode: "def letter_grade(score):\n    # Return A, B, C, D, or F based on score\n    pass\n\ndef report_card(students):\n    # Print a formatted report card\n    pass\n\nstudents = [\n    {'name': 'Alice', 'grade': 95},\n    {'name': 'Bob', 'grade': 72},\n    {'name': 'Charlie', 'grade': 88},\n]\nreport_card(students)",
          hint: "A>=90, B>=80, C>=70, D>=60, else F. Use f-strings for formatting",
          solution: "def letter_grade(score):\n    if score >= 90: return 'A'\n    elif score >= 80: return 'B'\n    elif score >= 70: return 'C'\n    elif score >= 60: return 'D'\n    else: return 'F'\n\ndef report_card(students):\n    print('📋 REPORT CARD')\n    print('=' * 25)\n    for s in students:\n        lg = letter_grade(s['grade'])\n        print(f\"  {s['name']}: {s['grade']} ({lg})\")\n\nstudents = [\n    {'name': 'Alice', 'grade': 95},\n    {'name': 'Bob', 'grade': 72},\n    {'name': 'Charlie', 'grade': 88},\n]\nreport_card(students)",
          expectedOutput: "📋 REPORT CARD\n=========================\n  Alice: 95 (A)\n  Bob: 72 (C)\n  Charlie: 88 (B)",
        },
      },
      {
        type: "quiz",
        content: "🏗️ Builder City Graduation Quiz!",
        quiz: QUIZ_DATA["3-7"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🧪 AREA 4: SCIENCE LAB (6 lessons) — Hands-on Science Projects
  // ═══════════════════════════════════════════════════════════════

  {
    id: "4-1",
    moduleId: "area-4",
    title: "🎮 Space Invader Data Station",
    subtitle: "Analyze alien invasion data · 太空入侵者数据站：分析外星入侵数据",
    icon: "🛸",
    xp: 40,
    duration: "30 min",
    order: 1,
    gradeRange: [7, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🛸",
        content: `## 🛸 Commander, Welcome to Space Station Python!

**🤖 Botty:** "Incoming transmission from HQ!"

\`\`\`
╔══════════════════════════════════════╗
║  ⚠️  ALERT: ALIEN INVASION DETECTED  ║
║  Sector 7 — Multiple Hostiles       ║
║  You are the last data analyst.      ║
║  Use Python to save humanity! 🌍     ║
╚══════════════════════════════════════╝
\`\`\`

You've been promoted to **Commander of Space Station Python**! 🚀

Your mission: analyze radar data, track alien movements, and allocate defense resources — all using Python!

你被提升为 **Python 空间站指挥官**！用 Python 分析雷达数据，追踪外星人动向，分配防御资源！

**🔧 Chip:** "The radar picked up alien activity in 6 sectors. We need bar charts, stats, and a dashboard — FAST!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Data & Visualization Tools",
        concept: {
          title: "📊 New Syntax: Data Collection & Visualization",
          titleZh: "新语法：数据收集与可视化",
          syntaxCards: [
            {
              symbol: 'f"{"█" * n}"',
              name: "Text Bar Charts",
              nameZh: "文本条形图",
              emoji: "📊",
              description: "ASCII art meets data 📊 — use string repetition to build simple bar charts right in the terminal!",
              example: 'for val in data:\\n    bar = "█" * val\\n    print(f"{bar} {val}")',
            },
            {
              symbol: "max() / min() / sum()",
              name: "Built-in Stats Functions",
              nameZh: "内置统计函数",
              emoji: "🧮",
              description: "Instant math helpers 🧮 — find the biggest, smallest, or total of a list in one line!",
              example: "scores = [85, 92, 78, 95]\\nprint(max(scores))  # 95\\nprint(sum(scores)/len(scores))  # avg",
            },
            {
              symbol: "enumerate(list)",
              name: "Enumerate (index + value)",
              nameZh: "枚举（索引 + 值）",
              emoji: "🔢",
              description: "Like numbered name tags 🔢 — gives you both the position AND the value when looping!",
              example: "for i, name in enumerate(students):\\n    print(f'{i+1}. {name}')",
            },
            {
              symbol: "sorted(data, reverse=True)",
              name: "Sort Data",
              nameZh: "排序数据",
              emoji: "📈",
              description: "Line up your data 📈 — sort from low to high, or high to low with reverse=True!",
              example: "sorted([3,1,2])  # [1,2,3]\\nsorted([3,1,2], reverse=True)  # [3,2,1]",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "sectors = ['Alpha', 'Beta', 'Gamma', 'Delta']", explanation: "List of sector names on our radar.", explanationZh: "雷达上的扇区名称列表" },
              { code: "aliens = [12, 27, 5, 19]", explanation: "Alien count detected in each sector.", explanationZh: "每个扇区检测到的外星人数量" },
              { code: "for i, count in enumerate(aliens):", explanation: "Loop with index AND value.", explanationZh: "同时获取索引和值的循环" },
              { code: '    bar = "█" * count', explanation: "Create a bar proportional to the count.", explanationZh: "创建与数量成比例的条形" },
              { code: '    print(f"{sectors[i]:>8} | {bar} {count}")', explanation: "Print sector name + bar + number.", explanationZh: "打印扇区名 + 条形 + 数字" },
              { code: "print(f'Total threats: {sum(aliens)}')", explanation: "Sum up all aliens detected.", explanationZh: "统计检测到的所有外星人" },
              { code: "print(f'Most dangerous: {max(aliens)}')", explanation: "Find the sector with most aliens.", explanationZh: "找到外星人最多的扇区" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Radar Warmup · 雷达热身

Before we dive into the full mission, let's test your data skills!

Look at this code and predict the output:

\`\`\`python
data = [4, 8, 2, 6]
print(max(data))
print(sum(data))
print(len(data))
\`\`\``,
        exercise: {
          prompt: "What are the 3 values printed? Type them on separate lines. (max, sum, len of [4, 8, 2, 6])",
          promptZh: "打印的3个值是什么？分别输入。（[4, 8, 2, 6] 的 max、sum、len）",
          starterCode: "data = [4, 8, 2, 6]\\nprint(max(data))\\nprint(sum(data))\\nprint(len(data))",
          expectedOutput: "8\\n20\\n4",
          hint: "max finds the largest (8), sum adds all (4+8+2+6=20), len counts items (4).",
          hintZh: "max 找最大值(8)，sum 求和(4+8+2+6=20)，len 计数(4)。",
          solution: "data = [4, 8, 2, 6]\\nprint(max(data))\\nprint(sum(data))\\nprint(len(data))",
        },
      },
      {
        type: "code",
        emoji: "🛸",
        content: `## 🛸 Follow Along: Alien Radar Report

🎯 **What you'll learn:** How to use enumerate(), f-strings, and conditional formatting to create data reports.
学习目标：如何用 enumerate()、f字符串和条件格式化来创建数据报告。

This is how real dashboards work! 📊 Data goes in, formatted reports come out. You'll build a bar chart using nothing but text characters — data visualization with pure Python!

🔑 **Key things to notice:**
- \`enumerate()\` gives you both the index AND the value
- \`f"{text:>8}"\` right-aligns text (great for tables!)
- Conditional expressions add warnings only when needed

👀 Run this code and watch the alien data come alive!`,
        code: `# 🛸 SPACE STATION PYTHON — RADAR REPORT
print("=" * 40)
print("  🛸 ALIEN RADAR SCANNING REPORT")
print("=" * 40)
print()

# Radar data: aliens spotted per sector
sectors = ["Alpha", "Beta", "Gamma", "Delta", "Echo", "Foxtrot"]
aliens = [12, 27, 5, 19, 8, 31]

# Display bar chart
print("📊 Alien Activity by Sector:")
print("-" * 35)
for i, count in enumerate(aliens):
    bar = "█" * count
    warning = " ⚠️ DANGER!" if count > 20 else ""
    print(f"  {sectors[i]:>8} | {bar} {count}{warning}")

print("-" * 35)

# Statistics
total = sum(aliens)
average = total / len(aliens)
highest = max(aliens)
lowest = min(aliens)

print(f"\\n📈 STATISTICS:")
print(f"  Total aliens detected: {total}")
print(f"  Average per sector:    {average:.1f}")
print(f"  Most dangerous sector: {highest} aliens")
print(f"  Safest sector:         {lowest} aliens")

# Threat level
if total > 80:
    print("\\n🔴 THREAT LEVEL: CRITICAL!")
elif total > 50:
    print("\\n🟡 THREAT LEVEL: HIGH")
else:
    print("\\n🟢 THREAT LEVEL: MANAGEABLE")`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "📡 Radar Scan Report · 雷达扫描报告",
          description: "You received radar data for 5 time periods. Create an ASCII bar chart showing alien appearances over time. Each █ = 1 alien.\n你收到了5个时间段的雷达数据。创建ASCII条形图显示外星人出现情况。每个 █ = 1个外星人。",
          starterCode: `# 📡 Radar Scan Data

# Aliens detected per hour: 8am, 9am, 10am, 11am, 12pm
hours = ["08:00", "09:00", "10:00", "11:00", "12:00"]
aliens = [3, 7, 12, 5, 9]

# TODO: Print a bar chart like:
#   08:00 | ███ 3
#   09:00 | ███████ 7
# ... etc.

# TODO: Print the peak hour (most aliens)

`,
          hint: "Use a for loop with enumerate() or zip(). For each hour, print the hour name, then '█' * count, then the number. Use max() to find the peak.",
          solution: `hours = ["08:00", "09:00", "10:00", "11:00", "12:00"]
aliens = [3, 7, 12, 5, 9]

print("📡 RADAR SCAN REPORT")
print("-" * 30)
for i in range(len(hours)):
    bar = "█" * aliens[i]
    print(f"  {hours[i]} | {bar} {aliens[i]}")
print("-" * 30)

peak = max(aliens)
peak_hour = hours[aliens.index(peak)]
print(f"⚠️ Peak activity: {peak_hour} with {peak} aliens!")`,
          expectedOutput: `📡 RADAR SCAN REPORT
------------------------------
  08:00 | ███ 3
  09:00 | ███████ 7
  10:00 | ████████████ 12
  11:00 | █████ 5
  12:00 | █████████ 9
------------------------------
⚠️ Peak activity: 10:00 with 12 aliens!`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🛡️ Defense Resource Allocator · 防御资源分配器",
          description: "Allocate defense drones proportionally based on alien threat in each sector. Total drones: 100. Each sector gets drones based on its % of total aliens.\n根据每个扇区的外星人威胁比例分配防御无人机。总共100架无人机。",
          starterCode: `# 🛡️ Defense Drone Allocator
sectors = ["North", "South", "East", "West"]
aliens = [30, 10, 45, 15]
total_drones = 100

# TODO: Calculate total aliens

# TODO: For each sector, calculate its share of drones
#   share = aliens[i] / total_aliens * total_drones

# TODO: Print allocation like:
#   North: 30 drones (30.0%)

# TODO: Verify total drones add up!

`,
          hint: "First get total_aliens = sum(aliens). Then for each sector: share = aliens[i] / total_aliens * total_drones. Use int() to round down, or round().",
          solution: `sectors = ["North", "South", "East", "West"]
aliens = [30, 10, 45, 15]
total_drones = 100

total_aliens = sum(aliens)
print("🛡️ DRONE ALLOCATION REPORT")
print("-" * 30)
allocated = 0
for i in range(len(sectors)):
    pct = aliens[i] / total_aliens * 100
    drones = round(aliens[i] / total_aliens * total_drones)
    allocated += drones
    print(f"  {sectors[i]:>6}: {drones} drones ({pct:.1f}%)")
print("-" * 30)
print(f"  Total allocated: {allocated} drones")`,
          expectedOutput: `🛡️ DRONE ALLOCATION REPORT
------------------------------
   North: 30 drones (30.0%)
   South: 10 drones (10.0%)
    East: 45 drones (45.0%)
    West: 15 drones (15.0%)
------------------------------
  Total allocated: 100 drones`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Boss Challenge · 终极挑战",
        challenge: {
          title: "🖥️ Space Station Dashboard · 太空站仪表盘",
          description: "Build a complete space station dashboard showing energy levels, ammo count, alien proximity, and crew status using text UI!\n构建完整的太空站仪表盘，显示能量、弹药、外星人距离和船员状态！",
          starterCode: `# 🖥️ SPACE STATION DASHBOARD

# Build a cool text-based dashboard!

energy = 73       # percent
ammo = 450        # rounds
aliens_near = 8   # nearby aliens
crew = 12         # crew members

# TODO: Print a dashboard frame with borders

# TODO: Show energy as a bar (e.g., [███████···] 73%)

# TODO: Show ammo count with warning if < 200

# TODO: Show alien proximity alert

# TODO: Show crew status

# Hint: Use "█" for filled, "·" for empty in bars

# Make it look cool! 😎

`,
          hint: "For the energy bar: filled = '█' * (energy // 10), empty = '·' * (10 - energy // 10). Use if/elif for status colors (use emoji). Frame with ╔═╗║╚═╝.",
          solution: `energy = 73
ammo = 450
aliens_near = 8
crew = 12

print("╔════════════════════════════════════╗")
print("║    🛸 SPACE STATION DASHBOARD 🛸    ║")
print("╠════════════════════════════════════╣")

# Energy bar
filled = "█" * (energy // 10)
empty = "·" * (10 - energy // 10)
e_icon = "🟢" if energy > 50 else "🟡" if energy > 25 else "🔴"
print(f"║ {e_icon} Energy: [{filled}{empty}] {energy}%    ║")

# Ammo
a_icon = "🟢" if ammo > 300 else "🟡" if ammo > 100 else "🔴"
print(f"║ {a_icon} Ammo:   {ammo} rounds              ║")

# Alien alert
if aliens_near > 5:
    print(f"║ 🔴 ALIENS: {aliens_near} nearby — DANGER!     ║")
elif aliens_near > 0:
    print(f"║ 🟡 ALIENS: {aliens_near} nearby — Caution      ║")
else:
    print(f"║ 🟢 ALIENS: All clear!              ║")

# Crew
print(f"║ 👥 Crew:   {crew} members active       ║")
print("╠════════════════════════════════════╣")

if aliens_near > 5 and ammo < 200:
    print("║ ⚠️  STATUS: CRITICAL — Need resupply ║")
elif aliens_near > 5:
    print("║ ⚠️  STATUS: BATTLE STATIONS!         ║")
else:
    print("║ ✅ STATUS: All systems nominal       ║")

print("╚════════════════════════════════════╝")`,
          expectedOutput: `╔════════════════════════════════════╗
║    🛸 SPACE STATION DASHBOARD 🛸    ║
╠════════════════════════════════════╣
║ 🟢 Energy: [███████···] 73%    ║
║ 🟢 Ammo:   450 rounds              ║
║ 🔴 ALIENS: 8 nearby — DANGER!     ║
║ 👥 Crew:   12 members active       ║
╠════════════════════════════════════╣
║ ⚠️  STATUS: BATTLE STATIONS!         ║
╚════════════════════════════════════╝`,
        },
      },
      {
        type: "quiz",
        content: "🛸 Space Station Quiz!",
        quiz: QUIZ_DATA["4-1"],
      },
    ],
  },

  {
    id: "4-2",
    moduleId: "area-4",
    title: "🎰 Casino Tycoon",
    subtitle: "Run a casino with probability · 赌场大亨：用概率经营赌场",
    icon: "🎰",
    xp: 40,
    duration: "30 min",
    order: 2,
    gradeRange: [7, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🎰",
        content: `## 🎰 Welcome to Casino Python!

**🐍 Py:** "Step right up! You're now the owner of **Casino Python** — the hottest casino in Code City!"

\`\`\`
🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰
  ♠️ ♥️ ♦️ ♣️  CASINO PYTHON  ♣️ ♦️ ♥️ ♠️
     💰 "Where the House Always Wins" 💰
🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰🎰
\`\`\`

But here's the thing — **how do you know your casino will make money?** 🤔

The secret: **probability and simulation!** Run your games 10,000 times and the math will tell you who wins!

秘密就是：**概率与模拟！** 把游戏跑 10,000 次，数学会告诉你谁赢！

**🔧 Chip:** "This is literally how real casinos are designed. Las Vegas runs on math, not luck!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Probability & Simulation",
        concept: {
          title: "🎲 New Syntax: Probability & Simulation",
          titleZh: "新语法：概率与模拟",
          syntaxCards: [
            {
              symbol: "random.randint(a, b)",
              name: "Random Integer",
              nameZh: "随机整数",
              emoji: "🎯",
              description: "Like rolling a custom dice 🎲 — gives a random whole number between a and b (inclusive)!",
              example: "import random\\ndice = random.randint(1, 6)  # 1-6",
            },
            {
              symbol: "random.random()",
              name: "Random Float (0-1)",
              nameZh: "随机小数（0-1）",
              emoji: "🌡️",
              description: "Like a probability meter 🌡️ — returns a decimal between 0.0 and 1.0. Great for simulating chance!",
              example: "if random.random() < 0.3:\\n    print('30% chance event!')",
            },
            {
              symbol: "random.choice(list)",
              name: "Random Choice",
              nameZh: "随机选择",
              emoji: "🃏",
              description: "Pick a random item from a list 🃏 — like drawing a card from a deck!",
              example: "cards = ['A', '2', '3', 'K']\\ndrawn = random.choice(cards)",
            },
            {
              symbol: "for _ in range(n):",
              name: "Monte Carlo Simulation",
              nameZh: "蒙特卡洛模拟",
              emoji: "🔬",
              description: "Run an experiment thousands of times 🔬 — the Law of Large Numbers means results converge to true probability!",
              example: "wins = 0\\nfor _ in range(10000):\\n    if random.randint(1,6) == 6:\\n        wins += 1\\nprint(f'Win rate: {wins/10000:.1%}')",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import random", explanation: "Import the random module for all randomness tools.", explanationZh: "导入 random 模块" },
              { code: "wins = 0; losses = 0", explanation: "Track wins and losses.", explanationZh: "记录赢和输" },
              { code: "for _ in range(10000):", explanation: "Simulate 10,000 games!", explanationZh: "模拟 10,000 局游戏！" },
              { code: "    dice = random.randint(1, 6)", explanation: "Roll a 6-sided die.", explanationZh: "掷一个6面骰子" },
              { code: "    if dice >= 4: wins += 1", explanation: "Player wins if dice >= 4 (50% chance).", explanationZh: "骰子>=4玩家赢（50%概率）" },
              { code: "    else: losses += 1", explanation: "Casino wins otherwise.", explanationZh: "否则赌场赢" },
              { code: "print(f'Player wins: {wins/10000:.1%}')", explanation: "Show the actual win rate!", explanationZh: "显示实际胜率！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Probability Warmup · 概率热身

Quick! What's the probability? Think before you run:

\`\`\`python
import random
count = 0
for _ in range(10000):
    if random.randint(1, 6) == 1:
        count += 1
print(round(count / 10000, 2))
\`\`\`

The output should be close to what number?`,
        exercise: {
          prompt: "What value does this print (approximately)? The code counts how often a die roll is 1 out of 10000 tries. Print the approximate decimal.",
          promptZh: "这段代码大约打印什么值？它统计10000次掷骰子中出现1的频率。",
          starterCode: "# The probability of rolling a 1 on a 6-sided die\\n# is 1/6 ≈ 0.1667\\n# After 10000 trials, count/10000 ≈ ?\\nprint(0.17)",
          expectedOutput: "0.17",
          hint: "Rolling a 1 on a 6-sided die = 1/6 ≈ 0.167. With 10000 trials it'll be close to 0.17.",
          hintZh: "掷骰子出现1的概率 = 1/6 ≈ 0.167。10000次试验后约为0.17。",
          solution: "print(0.17)",
        },
      },
      {
        type: "code",
        emoji: "🎲",
        content: `## 🎲 Follow Along: The Dice Gambling Game

🎯 **What you'll learn:** How to combine loops, random, conditionals, and simulation to analyze probability.
学习目标：如何组合循环、随机数、条件判断和模拟来分析概率。

This is how casinos design games! 🎰 By simulating 10,000 rounds, you'll discover that the house ALWAYS has a mathematical edge. Data science in action!

🔑 **Key things to notice:**
- \`random.randint()\` simulates dice rolls
- Large simulations reveal hidden probabilities
- Tracking wins/losses shows the house edge pattern

👀 Run 10,000 rounds and see if the casino makes money!`,
        code: `# 🎲 CASINO PYTHON — DICE GAME SIMULATOR
import random

print("🎰 CASINO PYTHON — DICE GAME 🎰")
print("=" * 35)
print("Rules: Roll 2 dice.")
print("  Player wins if sum >= 8")
print("  Casino wins if sum < 8")
print("  Bet: $10 per round")
print("=" * 35)

player_money = 0
casino_money = 0
rounds = 10000

for _ in range(rounds):
    d1 = random.randint(1, 6)
    d2 = random.randint(1, 6)
    total = d1 + d2
    
    if total >= 8:
        player_money += 10
        casino_money -= 10
    else:
        player_money -= 10
        casino_money += 10

print(f"\\n📊 After {rounds} rounds:")
print(f"  🧑 Player: \${player_money:+}")
print(f"  🏦 Casino: \${casino_money:+}")

# Calculate probabilities

# Ways to get >= 8: count them!
ways_to_win = 0
for d1 in range(1, 7):
    for d2 in range(1, 7):
        if d1 + d2 >= 8:
            ways_to_win += 1

total_outcomes = 36
print(f"\\n🧮 Math check:")
print(f"  Player win probability: {ways_to_win}/{total_outcomes} = {ways_to_win/total_outcomes:.1%}")
print(f"  Casino win probability: {36-ways_to_win}/{total_outcomes} = {(36-ways_to_win)/total_outcomes:.1%}")

if casino_money > 0:
    print("\\n💰 The house wins! Casino design successful!")
else:
    print("\\n😱 Casino lost money! Need to change the rules!")`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🎲 Dice Duel Simulator · 骰子对决模拟器",
          description: "Design a dice game: Player rolls 2 dice, Casino rolls 2 dice. Highest total wins. If tie, casino wins. Simulate 10,000 rounds and show who makes money!\n设计骰子游戏：玩家掷2个骰子，赌场掷2个。点数高的赢，平局赌场赢。模拟10000轮！",
          starterCode: `import random

# 🎲 Dice Duel: Player vs Casino
rounds = 10000
player_wins = 0
casino_wins = 0

# TODO: Simulate 'rounds' games

# Each game: both roll 2 dice, compare totals

# Tie = casino wins
for _ in range(rounds):
    pass  # Replace this!

# TODO: Print results

# Show win counts and percentages

`,
          hint: "Player: random.randint(1,6) + random.randint(1,6). Same for casino. Compare. Count wins. Divide by rounds for percentages.",
          solution: `import random

rounds = 10000
player_wins = 0
casino_wins = 0

for _ in range(rounds):
    player = random.randint(1,6) + random.randint(1,6)
    casino = random.randint(1,6) + random.randint(1,6)
    if player > casino:
        player_wins += 1
    else:
        casino_wins += 1

print("🎲 DICE DUEL RESULTS")
print(f"  Player wins: {player_wins} ({player_wins/rounds:.1%})")
print(f"  Casino wins: {casino_wins} ({casino_wins/rounds:.1%})")
if casino_wins > player_wins:
    print("💰 House wins!")
else:
    print("😱 Player wins!")`,
          expectedOutput: `🎲 DICE DUEL RESULTS
  Player wins: 4167 (41.7%)
  Casino wins: 5833 (58.3%)
💰 House wins!`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🃏 Simple 21 (Blackjack) · 简化21点",
          description: "Simulate a simple Blackjack: Deal 2 random cards (1-10) to player and dealer. Player hits (takes another card) if total < 15. Closest to 21 without going over wins! Simulate 10,000 hands.\n模拟简单21点：发2张随机牌(1-10)给玩家和庄家。玩家小于15就要牌。最接近21不超过的赢！模拟10000局。",
          starterCode: `import random

# 🃏 Simple 21 Simulator
hands = 10000
player_wins = 0
dealer_wins = 0
ties = 0

for _ in range(hands):
    # Deal 2 cards each (value 1-10)
    player = random.randint(1,10) + random.randint(1,10)
    dealer = random.randint(1,10) + random.randint(1,10)
    
    # TODO: Player strategy — hit (add a card) if total < 15
    
    # TODO: Dealer strategy — hit if total < 17
    
    # TODO: Determine winner
    # Bust (over 21) = automatic loss
    # Otherwise, closest to 21 wins
    pass

# TODO: Print results

`,
          hint: "After initial deal: while player < 15: player += random.randint(1,10). Same for dealer < 17. Then check busts first, then compare totals.",
          solution: `import random

hands = 10000
player_wins = 0
dealer_wins = 0
ties = 0

for _ in range(hands):
    player = random.randint(1,10) + random.randint(1,10)
    dealer = random.randint(1,10) + random.randint(1,10)
    
    while player < 15:
        player += random.randint(1,10)
    while dealer < 17:
        dealer += random.randint(1,10)
    
    if player > 21 and dealer > 21:
        ties += 1
    elif player > 21:
        dealer_wins += 1
    elif dealer > 21:
        player_wins += 1
    elif player > dealer:
        player_wins += 1
    elif dealer > player:
        dealer_wins += 1
    else:
        ties += 1

print("🃏 SIMPLE 21 RESULTS")
print(f"  Player wins: {player_wins} ({player_wins/hands:.1%})")
print(f"  Dealer wins: {dealer_wins} ({dealer_wins/hands:.1%})")
print(f"  Ties:        {ties} ({ties/hands:.1%})")`,
          expectedOutput: `🃏 SIMPLE 21 RESULTS
  Player wins: 3850 (38.5%)
  Dealer wins: 4920 (49.2%)
  Ties:        1230 (12.3%)`,
        },
      },
      {
        type: "quiz",
        content: "🎰 Casino Tycoon Quiz!",
        quiz: QUIZ_DATA["4-2"],
      },
    ],
  },

  {
    id: "4-3",
    moduleId: "area-4",
    title: "🏗️ Demolition City",
    subtitle: "Destroy buildings with physics · 毁灭城市：用物理摧毁建筑",
    icon: "💥",
    xp: 40,
    duration: "30 min",
    order: 3,
    gradeRange: [7, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "💥",
        content: `## 💥 Welcome to Demolition City!

**🔧 Chip:** "Got a cannon, got some buildings... let's do some PHYSICS! 💣"

\`\`\`
            *    
           /|\\   🏢 Target: 200m away
          / | \\  
    💣___/  |  \\___
   /  angle |     \\___
  🔫--------+--------→ distance
\`\`\`

You're a demolition engineer! Your cannon shoots projectiles that follow **real physics** — gravity pulls them down while they fly forward.

你是一名爆破工程师！你的大炮发射的弹丸遵循**真实物理** — 重力让它们在前进中下落。

Your job: calculate the **right angle and power** to hit targets! 🎯

**🐍 Py:** "The same math that sends rockets to space can knock down buildings. Let's code it!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Physics in Code",
        concept: {
          title: "🚀 New Syntax: Projectile Physics",
          titleZh: "新语法：抛体物理",
          syntaxCards: [
            {
              symbol: "import math",
              name: "Math Module",
              nameZh: "数学模块",
              emoji: "📐",
              description: "Access advanced math functions 📐 — sin, cos, sqrt, pi and more! Essential for physics!",
              example: "import math\\nprint(math.pi)    # 3.14159...\\nprint(math.sqrt(16))  # 4.0",
            },
            {
              symbol: "math.sin() / math.cos()",
              name: "Trigonometry",
              nameZh: "三角函数",
              emoji: "📏",
              description: "Break a diagonal force into horizontal and vertical parts 📏 — sin for vertical, cos for horizontal!",
              example: "angle_rad = math.radians(45)\\nvx = speed * math.cos(angle_rad)\\nvy = speed * math.sin(angle_rad)",
            },
            {
              symbol: "math.radians(degrees)",
              name: "Degrees to Radians",
              nameZh: "角度转弧度",
              emoji: "🔄",
              description: "Python's trig functions need radians 🔄 — convert from the degrees humans understand!",
              example: "math.radians(90)   # 1.5708 (π/2)\\nmath.radians(180)  # 3.1416 (π)",
            },
            {
              symbol: "g = 9.8",
              name: "Gravity Constant",
              nameZh: "重力常数",
              emoji: "🌍",
              description: "Earth's gravity pulls things down at 9.8 m/s² 🌍 — the key to all projectile motion!",
              example: "g = 9.8  # m/s²\\n# After 1 sec: speed = 9.8 m/s\\n# After 2 sec: speed = 19.6 m/s",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import math", explanation: "Import math for sin, cos, radians.", explanationZh: "导入 math 模块" },
              { code: "angle = 45  # degrees", explanation: "Launch angle in degrees.", explanationZh: "发射角度（度）" },
              { code: "speed = 50  # m/s", explanation: "Launch speed.", explanationZh: "发射速度" },
              { code: "g = 9.8  # gravity", explanation: "Gravity acceleration.", explanationZh: "重力加速度" },
              { code: "rad = math.radians(angle)", explanation: "Convert degrees to radians for trig.", explanationZh: "将角度转为弧度" },
              { code: "vx = speed * math.cos(rad)", explanation: "Horizontal velocity component.", explanationZh: "水平速度分量" },
              { code: "vy = speed * math.sin(rad)", explanation: "Vertical velocity component.", explanationZh: "垂直速度分量" },
              { code: "t_total = 2 * vy / g", explanation: "Total flight time (up + down).", explanationZh: "总飞行时间（上升+下降）" },
              { code: "distance = vx * t_total", explanation: "Horizontal distance traveled!", explanationZh: "水平飞行距离！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Physics Warmup · 物理热身

A cannonball is launched at 45° with speed 20 m/s. Gravity = 10 m/s².

\`\`\`python
import math
speed = 20
angle = 45
g = 10
rad = math.radians(angle)
distance = (speed ** 2) * math.sin(2 * rad) / g
print(distance)
\`\`\`

What distance does it travel?`,
        exercise: {
          prompt: "Calculate: (20²) × sin(2×45°) / 10. Remember sin(90°) = 1.",
          promptZh: "计算：(20²) × sin(2×45°) / 10。记住 sin(90°) = 1。",
          starterCode: "import math\\nspeed = 20\\nangle = 45\\ng = 10\\nrad = math.radians(angle)\\ndistance = (speed ** 2) * math.sin(2 * rad) / g\\nprint(distance)",
          expectedOutput: "40.0",
          hint: "20² = 400. sin(90°) = 1. So 400 × 1 / 10 = 40.0 meters!",
          hintZh: "20² = 400。sin(90°) = 1。所以 400 × 1 / 10 = 40.0 米！",
          solution: "import math\\nspeed = 20\\nangle = 45\\ng = 10\\nrad = math.radians(angle)\\ndistance = (speed ** 2) * math.sin(2 * rad) / g\\nprint(distance)",
        },
      },
      {
        type: "code",
        emoji: "💣",
        content: `## 💣 Follow Along: Cannon Trajectory Simulator

🎯 **What you'll learn:** How to use math formulas in code to simulate real-world physics.
学习目标：如何在代码中使用数学公式来模拟真实世界的物理现象。

This is how game physics work! 🎮 The same math that launches rockets in real life makes cannonballs fly in your code. You'll turn physics equations into an ASCII animation!

🔑 **Key things to notice:**
- \`import math\` gives you sin(), cos(), and pi
- Physics formulas translate directly into Python expressions
- A loop simulates time steps to animate the flight path

👀 Watch the cannonball fly through the air!`,
        code: `# 💣 DEMOLITION CITY — CANNON SIMULATOR
import math

print("💥 DEMOLITION CITY — CANNON FIRE!")
print("=" * 40)

# Cannon settings
angle = 45    # degrees
speed = 30    # m/s
g = 9.8       # gravity

# Calculate trajectory
rad = math.radians(angle)
vx = speed * math.cos(rad)
vy = speed * math.sin(rad)

# Simulate flight
dt = 0.1  # time step
t = 0
max_height = 0
positions = []

while True:
    x = vx * t
    y = vy * t - 0.5 * g * t * t
    if y < 0 and t > 0:
        break
    if y > max_height:
        max_height = y
    positions.append((round(x, 1), round(y, 1)))
    t += dt

# Total distance
total_dist = vx * t

# ASCII trajectory (simplified)
print(f"\\n🔫 Angle: {angle}° | Speed: {speed} m/s")
print(f"📏 Distance: {total_dist:.1f}m | Max Height: {max_height:.1f}m")
print()

# Draw simple ASCII arc
width = 40
height = 12
grid = [[" " for _ in range(width)] for _ in range(height)]

for px, py in positions:
    col = int(px / total_dist * (width - 1))
    row = height - 1 - int(py / max_height * (height - 2))
    if 0 <= row < height and 0 <= col < width:
        grid[row][col] = "*"

# Add ground
for c in range(width):
    grid[height-1][c] = "-"
grid[height-1][0] = "🔫"

for row in grid:
    print("".join(row))

print(f"\\n💥 BOOM! Hit at {total_dist:.1f} meters!")`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "💣 Cannon Shot Calculator · 大炮射击计算器",
          description: "Build a cannon calculator: given angle and speed, compute the landing distance, max height, and flight time. Test with angle=60, speed=40.\n构建大炮计算器：给定角度和速度，计算落点距离、最大高度和飞行时间。用angle=60, speed=40测试。",
          starterCode: `import math

# 💣 Cannon Shot Calculator
angle = 60  # degrees
speed = 40  # m/s
g = 9.8

# TODO: Convert angle to radians

# TODO: Calculate horizontal velocity (vx = speed * cos)

# TODO: Calculate vertical velocity (vy = speed * sin)

# TODO: Calculate flight time (t = 2 * vy / g)

# TODO: Calculate distance (d = vx * t)

# TODO: Calculate max height (h = vy² / (2*g))

# TODO: Print all results

`,
          hint: "rad = math.radians(angle). vx = speed*cos(rad). vy = speed*sin(rad). t = 2*vy/g. distance = vx*t. max_h = vy**2/(2*g).",
          solution: `import math

angle = 60
speed = 40
g = 9.8

rad = math.radians(angle)
vx = speed * math.cos(rad)
vy = speed * math.sin(rad)
flight_time = 2 * vy / g
distance = vx * flight_time
max_height = vy ** 2 / (2 * g)

print("💣 CANNON SHOT REPORT")
print(f"  Angle: {angle}°")
print(f"  Speed: {speed} m/s")
print(f"  Distance: {distance:.1f} m")
print(f"  Max height: {max_height:.1f} m")
print(f"  Flight time: {flight_time:.2f} s")`,
          expectedOutput: `💣 CANNON SHOT REPORT
  Angle: 60°
  Speed: 40 m/s
  Distance: 141.4 m
  Max height: 61.2 m
  Flight time: 7.07 s`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🎯 Target Destroyer · 目标摧毁",
          description: "A building is at distance 100m. Your cannon speed is fixed at 35 m/s. Test angles from 10° to 80° (step 5°) to find which angle lands closest to 100m!\n建筑在100米处。大炮速度固定35m/s。测试10°到80°（每5°）找哪个角度最接近100米！",
          starterCode: `import math

# 🎯 Target Destroyer
target = 100  # meters
speed = 35    # m/s (fixed)
g = 9.8

best_angle = 0
best_diff = 999

# TODO: Loop through angles 10 to 80, step 5

# TODO: For each angle, calculate landing distance

# TODO: Track which angle gets closest to target

# TODO: Print results for each angle

# TODO: Print the best angle

`,
          hint: "for angle in range(10, 81, 5): ... Use the formula: distance = speed² × sin(2×angle_rad) / g. Track abs(distance - target) for closest.",
          solution: `import math

target = 100
speed = 35
g = 9.8

best_angle = 0
best_diff = 999

print("🎯 TARGET DESTROYER — Finding best angle")
print(f"  Target: {target}m | Speed: {speed} m/s")
print("-" * 35)

for angle in range(10, 81, 5):
    rad = math.radians(angle)
    distance = (speed ** 2) * math.sin(2 * rad) / g
    diff = abs(distance - target)
    marker = " ◄ CLOSEST!" if diff < best_diff else ""
    if diff < best_diff:
        best_diff = diff
        best_angle = angle
    print(f"  {angle:2d}° → {distance:6.1f}m (off by {diff:.1f}m){marker}")

print("-" * 35)
print(f"🏆 Best angle: {best_angle}° (misses by {best_diff:.1f}m)")`,
          expectedOutput: `🎯 TARGET DESTROYER — Finding best angle
  Target: 100m | Speed: 35 m/s
-----------------------------------
  10° → 42.4m (off by 57.6m)
  15° → 61.4m (off by 38.6m)
  20° → 77.7m (off by 22.3m)
  25° → 90.7m (off by 9.3m) ◄ CLOSEST!
  30° → 100.0m (off by 0.0m) ◄ CLOSEST!
  35° → 105.3m (off by 5.3m)
  40° → 106.7m (off by 6.7m)
  45° → 104.2m (off by 4.2m)
  50° → 97.9m (off by 2.1m)
  55° → 88.3m (off by 11.7m)
  60° → 75.8m (off by 24.2m)
  65° → 61.0m (off by 39.0m)
  70° → 44.6m (off by 55.4m)
  75° → 27.4m (off by 72.6m)
  80° → 10.4m (off by 89.6m)
-----------------------------------

🏆 Best angle: 30° (misses by 0.0m)`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Boss Challenge · 终极挑战",
        challenge: {
          title: "🐍 Angry Pythons! · 愤怒的Python！",
          description: "Build a multi-level Angry Pythons game! 3 buildings at different distances. Player picks angle and power for each shot. Show hit/miss and score.\n构建多关卡愤怒Python游戏！3栋建筑在不同距离。玩家选角度和力度。显示命中/未中和分数。",
          starterCode: `import math

# 🐍 ANGRY PYTHONS! — 3 Level Game
print("🐍 ANGRY PYTHONS! 🐍")
print("Destroy all 3 buildings!\\n")

buildings = [
    {"name": "Pig Hut", "distance": 50, "width": 10},
    {"name": "Pig Tower", "distance": 120, "width": 8},
    {"name": "Pig Castle", "distance": 200, "width": 5},
]
g = 9.8
score = 0

# TODO: For each building/level:
# 1. Print level info (building name, distance)
# 2. Set angle and power (use fixed values since no input)
#    Level 1: angle=35, power=25
#    Level 2: angle=40, power=40
#    Level 3: angle=45, power=50
# 3. Calculate landing distance
# 4. Check if hit (within building's width of target)
# 5. Award points (100, 200, 300)
# 6. Print final score

`,
          hint: "For each building: calculate distance with the formula. Check if abs(distance - target) <= width/2. Use a list of (angle, power) settings for each level.",
          solution: `import math

print("🐍 ANGRY PYTHONS! 🐍")
print("Destroy all 3 buildings!\\n")

buildings = [
    {"name": "Pig Hut", "distance": 50, "width": 10},
    {"name": "Pig Tower", "distance": 120, "width": 8},
    {"name": "Pig Castle", "distance": 200, "width": 5},
]
shots = [
    {"angle": 35, "power": 25},
    {"angle": 40, "power": 40},
    {"angle": 45, "power": 50},
]
g = 9.8
score = 0
points = [100, 200, 300]

for i in range(3):
    b = buildings[i]
    s = shots[i]
    print(f"═══ Level {i+1}: {b['name']} ═══")
    print(f"  🏢 Target: {b['distance']}m away (width: {b['width']}m)")
    print(f"  🔫 Shot: {s['angle']}° at {s['power']} m/s")
    
    rad = math.radians(s["angle"])
    dist = (s["power"] ** 2) * math.sin(2 * rad) / g
    diff = abs(dist - b["distance"])
    
    print(f"  📏 Landed at: {dist:.1f}m (off by {diff:.1f}m)")
    
    if diff <= b["width"] / 2:
        score += points[i]
        print(f"  💥 HIT! +{points[i]} points!")
    else:
        print(f"  ❌ MISS!")
    print()

print(f"🏆 FINAL SCORE: {score}/{sum(points)} points")
if score == sum(points):
    print("⭐ PERFECT! All buildings destroyed!")
elif score > 0:
    print("👍 Good effort! Try different angles!")
else:
    print("💪 Keep practicing your aim!")`,
          expectedOutput: `🐍 ANGRY PYTHONS! 🐍
Destroy all 3 buildings!

═══ Level 1: Pig Hut ═══
  🏢 Target: 50m away (width: 10m)
  🔫 Shot: 35° at 25 m/s
  📏 Landed at: 60.3m (off by 10.3m)
  ❌ MISS!

═══ Level 2: Pig Tower ═══
  🏢 Target: 120m away (width: 8m)
  🔫 Shot: 40° at 40 m/s
  📏 Landed at: 160.5m (off by 40.5m)
  ❌ MISS!

═══ Level 3: Pig Castle ═══
  🏢 Target: 200m away (width: 5m)
  🔫 Shot: 45° at 50 m/s
  📏 Landed at: 255.1m (off by 55.1m)
  ❌ MISS!

🏆 FINAL SCORE: 0/600 points
💪 Keep practicing your aim!`,
        },
      },
      {
        type: "quiz",
        content: "💥 Demolition City Quiz!",
        quiz: QUIZ_DATA["4-3"],
      },
    ],
  },

  {
    id: "4-4",
    moduleId: "area-4",
    title: "🕵️ CSI: Code Scene Investigation",
    subtitle: "Solve crimes with data · 编程探案：用数据破案",
    icon: "🔍",
    xp: 40,
    duration: "30 min",
    order: 4,
    gradeRange: [7, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🕵️",
        content: `## 🕵️ CSI: Code Scene Investigation

**🤖 Botty:** "A crime has been committed! Only data can reveal the truth!"

\`\`\`
╔═══════════════════════════════════════╗
║  🕵️ DETECTIVE BADGE #7734            ║
║  Name: Agent Python                   ║
║  Unit: Data Forensics Division        ║
║  Status: ACTIVE CASE                  ║
╚═══════════════════════════════════════╝
\`\`\`

You are a **data detective**! Your weapon? Python code. Your method? Logic, search, and pattern matching!

你是一名**数据侦探**！你的武器？Python代码。你的方法？逻辑、搜索和模式匹配！

**🔧 Chip:** "Every criminal leaves digital footprints. Let's find them!"

Today you'll:
- 🔍 Filter suspects using clues
- 🧬 Match DNA sequences
- 📋 Solve a complete mystery case!`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Search & Filter Patterns",
        concept: {
          title: "🔍 New Syntax: Search, Filter & Match",
          titleZh: "新语法：搜索、过滤与匹配",
          syntaxCards: [
            {
              symbol: "[x for x in data if condition]",
              name: "List Comprehension Filter",
              nameZh: "列表推导式过滤",
              emoji: "🔍",
              description: "Filter a list in ONE line 🔍 — keep only items that match your condition! Like a smart search.",
              example: "# Find all adults\\nadults = [p for p in people if p['age'] >= 18]",
            },
            {
              symbol: "\"pattern\" in string",
              name: "Substring Search",
              nameZh: "子串搜索",
              emoji: "🧬",
              description: "Check if a pattern exists inside text 🧬 — like Ctrl+F for your code!",
              example: "dna = 'ATCGATCG'\\nif 'GAT' in dna:\\n    print('Pattern found!')",
            },
            {
              symbol: ".count() / .index() / .find()",
              name: "String Search Methods",
              nameZh: "字符串搜索方法",
              emoji: "🔎",
              description: "Powerful text search tools 🔎 — count occurrences, find positions, locate patterns!",
              example: "'banana'.count('a')  # 3\\n'hello'.find('ll')   # 2\\n'abc'.index('b')     # 1",
            },
            {
              symbol: "all() / any()",
              name: "Logic Checks",
              nameZh: "逻辑检查",
              emoji: "✅",
              description: "Check conditions across a whole list ✅ — all() = every item, any() = at least one!",
              example: "ages = [20, 25, 17, 30]\\nall(a >= 18 for a in ages)  # False\\nany(a < 18 for a in ages)  # True",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "suspects = [{'name': 'Alice', 'height': 170, 'hair': 'black'}, ...]", explanation: "Database of suspects as list of dicts.", explanationZh: "嫌疑人数据库（字典列表）" },
              { code: "clue_1 = [s for s in suspects if s['height'] > 165]", explanation: "Filter: keep suspects taller than 165cm.", explanationZh: "过滤：保留身高超过165cm的嫌疑人" },
              { code: "clue_2 = [s for s in clue_1 if s['hair'] == 'black']", explanation: "Further filter: black hair only.", explanationZh: "进一步过滤：只留黑头发的" },
              { code: "if len(clue_2) == 1:", explanation: "If only one suspect remains...", explanationZh: "如果只剩一个嫌疑人..." },
              { code: "    print(f'Guilty: {clue_2[0][\"name\"]}')", explanation: "Case solved!", explanationZh: "案件破了！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Detective Warmup · 侦探热身

Quick deduction test! What does this code print?

\`\`\`python
suspects = ["Alice", "Bob", "Charlie", "Diana"]
clues = [True, False, True, False]  # had alibi?

# No alibi = still suspect
remaining = []
for i in range(len(suspects)):
    if not clues[i]:
        remaining.append(suspects[i])
print(remaining)
\`\`\``,
        exercise: {
          prompt: "What list is printed? (suspects without alibis)",
          promptZh: "打印的列表是什么？（没有不在场证明的嫌疑人）",
          starterCode: "suspects = ['Alice', 'Bob', 'Charlie', 'Diana']\\nclues = [True, False, True, False]\\nremaining = []\\nfor i in range(len(suspects)):\\n    if not clues[i]:\\n        remaining.append(suspects[i])\\nprint(remaining)",
          expectedOutput: "['Bob', 'Diana']",
          hint: "clues[1]=False (Bob) and clues[3]=False (Diana) — they don't have alibis!",
          hintZh: "clues[1]=False(Bob) 和 clues[3]=False(Diana) — 他们没有不在场证明！",
          solution: "suspects = ['Alice', 'Bob', 'Charlie', 'Diana']\\nclues = [True, False, True, False]\\nremaining = []\\nfor i in range(len(suspects)):\\n    if not clues[i]:\\n        remaining.append(suspects[i])\\nprint(remaining)",
        },
      },
      {
        type: "code",
        emoji: "🔍",
        content: `## 🔍 Follow Along: The Suspect Filter

🎯 **What you'll learn:** How to filter lists of dictionaries using multiple conditions — like a database query.
学习目标：如何用多个条件过滤字典列表——就像数据库查询一样。

This is how search engines and detective work! 🔎 Start with a big list, apply filters one by one, and narrow down to the answer. SQL databases do the exact same thing.

🔑 **Key things to notice:**
- List of dictionaries = a simple database
- Each clue eliminates some suspects (list comprehension with \`if\`)
- Multiple filters chain together to narrow results

👀 Watch how we narrow down suspects clue after clue!`,
        code: `# 🕵️ CSI PYTHON — SUSPECT FILTER
print("🕵️ CSI: CODE SCENE INVESTIGATION")
print("=" * 40)
print("Case #42: The Missing Diamond\\n")

# Suspect database
suspects = [
    {"name": "Alice", "age": 32, "height": 165, "hair": "blonde", "job": "chef"},
    {"name": "Bob", "age": 45, "height": 180, "hair": "black", "job": "teacher"},
    {"name": "Charlie", "age": 28, "height": 175, "hair": "brown", "job": "driver"},
    {"name": "Diana", "age": 35, "height": 170, "hair": "black", "job": "nurse"},
    {"name": "Eve", "age": 29, "height": 168, "hair": "red", "job": "hacker"},
    {"name": "Frank", "age": 41, "height": 185, "hair": "black", "job": "guard"},
]

print(f"📋 Total suspects: {len(suspects)}")
for s in suspects:
    print(f"  - {s['name']}: {s['age']}yo, {s['height']}cm, {s['hair']} hair, {s['job']}")

# Clue 1: Witness saw someone with black hair
print("\\n🔍 Clue 1: Witness saw BLACK HAIR")
remaining = [s for s in suspects if s["hair"] == "black"]
print(f"   Remaining: {[s['name'] for s in remaining]}")

# Clue 2: Taller than 170cm
print("\\n🔍 Clue 2: Security cam shows HEIGHT > 170cm")
remaining = [s for s in remaining if s["height"] > 170]
print(f"   Remaining: {[s['name'] for s in remaining]}")

# Clue 3: Age between 30 and 50
print("\\n🔍 Clue 3: Voice analysis suggests AGE 30-50")
remaining = [s for s in remaining if 30 <= s["age"] <= 50]
print(f"   Remaining: {[s['name'] for s in remaining]}")

if len(remaining) == 1:
    print(f"\\n🚨 CASE SOLVED! The culprit is: {remaining[0]['name']}!")
    print(f"   ({remaining[0]['job']}, {remaining[0]['age']}yo, {remaining[0]['height']}cm)")
else:
    print(f"\\n🤔 {len(remaining)} suspects remain. Need more clues!")`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔍 Suspect Eliminator · 嫌疑人排除器",
          description: "Given 6 suspects, apply 3 clues to find the thief:\n1. The thief drives (has_car = True)\n2. The thief is under 40\n3. The thief has been to the crime city (visited 'Paris')\nFilter step by step and identify the criminal!\n用3条线索过滤6个嫌疑人找到小偷！",
          starterCode: `# 🔍 SUSPECT ELIMINATOR
suspects = [
    {"name": "Luna", "age": 25, "has_car": True, "visited": ["Paris", "London"]},
    {"name": "Max", "age": 42, "has_car": True, "visited": ["Paris", "Tokyo"]},
    {"name": "Nora", "age": 30, "has_car": False, "visited": ["Paris", "Berlin"]},
    {"name": "Oscar", "age": 35, "has_car": True, "visited": ["London", "Berlin"]},
    {"name": "Piper", "age": 28, "has_car": True, "visited": ["Paris", "Rome"]},
    {"name": "Quinn", "age": 22, "has_car": False, "visited": ["Tokyo", "Paris"]},
]

# TODO: Apply Clue 1 — has_car is True

# TODO: Apply Clue 2 — age < 40  
# TODO: Apply Clue 3 — "Paris" in visited list

# TODO: Print remaining suspect(s)

`,
          hint: "Use list comprehension: remaining = [s for s in suspects if s['has_car']]. Then filter remaining again for age < 40. Then for 'Paris' in s['visited'].",
          solution: `suspects = [
    {"name": "Luna", "age": 25, "has_car": True, "visited": ["Paris", "London"]},
    {"name": "Max", "age": 42, "has_car": True, "visited": ["Paris", "Tokyo"]},
    {"name": "Nora", "age": 30, "has_car": False, "visited": ["Paris", "Berlin"]},
    {"name": "Oscar", "age": 35, "has_car": True, "visited": ["London", "Berlin"]},
    {"name": "Piper", "age": 28, "has_car": True, "visited": ["Paris", "Rome"]},
    {"name": "Quinn", "age": 22, "has_car": False, "visited": ["Tokyo", "Paris"]},
]

print("🕵️ SUSPECT ELIMINATION")
print(f"Starting suspects: {len(suspects)}")

remaining = [s for s in suspects if s["has_car"]]
print(f"\\nClue 1 (has car): {[s['name'] for s in remaining]}")

remaining = [s for s in remaining if s["age"] < 40]
print(f"Clue 2 (age < 40): {[s['name'] for s in remaining]}")

remaining = [s for s in remaining if "Paris" in s["visited"]]
print(f"Clue 3 (visited Paris): {[s['name'] for s in remaining]}")

if len(remaining) == 1:
    print(f"\\n🚨 The thief is: {remaining[0]['name']}!")
else:
    print(f"\\n🤔 {len(remaining)} suspects remain.")`,
          expectedOutput: `🕵️ SUSPECT ELIMINATION
Starting suspects: 6

Clue 1 (has car): ['Luna', 'Max', 'Oscar', 'Piper']
Clue 2 (age < 40): ['Luna', 'Oscar', 'Piper']
Clue 3 (visited Paris): ['Luna', 'Piper']

🤔 2 suspects remain.`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🧬 DNA Pattern Matcher · DNA模式匹配",
          description: "Search a DNA sequence for a specific pattern. Count occurrences and find all positions where the pattern appears!\n在DNA序列中搜索特定模式。统计出现次数并找到所有位置！",
          starterCode: `# 🧬 DNA PATTERN MATCHER
dna = "ATCGATCGATCGAATCGTTTGATCATCG"
pattern = "ATC"

# TODO: Count how many times 'pattern' appears in 'dna'

# TODO: Find ALL positions where pattern starts

# Hint: check each position i if dna[i:i+len(pattern)] == pattern

# TODO: Print results

`,
          hint: "Loop: for i in range(len(dna) - len(pattern) + 1). Check if dna[i:i+len(pattern)] == pattern. Collect positions in a list.",
          solution: `dna = "ATCGATCGATCGAATCGTTTGATCATCG"
pattern = "ATC"

positions = []
for i in range(len(dna) - len(pattern) + 1):
    if dna[i:i+len(pattern)] == pattern:
        positions.append(i)

print("🧬 DNA PATTERN SEARCH")
print(f"  Sequence: {dna}")
print(f"  Pattern:  {pattern}")
print(f"  Found: {len(positions)} matches")
print(f"  Positions: {positions}")

# Visual highlight
print("\\n  Visual:")
highlight = ""
for i in range(len(dna)):
    if i in positions:
        highlight += "^"
    elif any(i > p and i < p + len(pattern) for p in positions):
        highlight += "^"
    else:
        highlight += " "
print(f"  {dna}")
print(f"  {highlight}")`,
          expectedOutput: `🧬 DNA PATTERN SEARCH
  Sequence: ATCGATCGATCGAATCGTTTGATCATCG
  Pattern:  ATC
  Found: 6 matches
  Positions: [0, 4, 8, 13, 22, 25]

  Visual:
  ATCGATCGATCGAATCGTTTGATCATCG
  ^^^_^^^_^^^__^^^________^^^`,
        },
      },
      {
        type: "quiz",
        content: "🕵️ CSI Detective Quiz!",
        quiz: QUIZ_DATA["4-4"],
      },
    ],
  },

  {
    id: "4-5",
    moduleId: "area-4",
    title: "🕶️ The Matrix: Hacker Academy",
    subtitle: "Cryptography & security · 黑客帝国：密码学与安全",
    icon: "🔐",
    xp: 40,
    duration: "30 min",
    order: 5,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🕶️",
        content: `## 🕶️ Welcome to The Matrix, Neo...

**🤖 Botty:** "The Matrix has you... but today, YOU hack back!"

\`\`\`
 ██████████████████████████████████
 █ Wake up, Neo...                █
 █ The Matrix has you...          █
 █ Follow the white rabbit. 🐇    █
 █                                █
 █ > ENTER THE MATRIX? [Y/N]     █
 ██████████████████████████████████
\`\`\`

You're a **white-hat hacker** (the good kind!) 🦸 Your mission: learn how encryption works so you can **protect** systems, not break them!

你是一名**白帽黑客**（好黑客）！你的任务：学习加密如何运作，用来**保护**系统！

**🔧 Chip:** "Every time you log in, send a message, or buy something online — cryptography protects you!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Cryptography Tools",
        concept: {
          title: "🔐 New Syntax: Encryption & Security",
          titleZh: "新语法：加密与安全",
          syntaxCards: [
            {
              symbol: "ord() / chr()",
              name: "Character ↔ Number",
              nameZh: "字符 ↔ 数字",
              emoji: "🔢",
              description: "Every character is secretly a number! 🔢 ord('A')=65, chr(65)='A'. The basis of all encryption!",
              example: "ord('A')   # 65\\nord('a')   # 97\\nchr(65)    # 'A'\\nchr(122)   # 'z'",
            },
            {
              symbol: "Caesar Cipher (shift)",
              name: "Caesar Cipher",
              nameZh: "凯撒密码",
              emoji: "🏛️",
              description: "Shift each letter by N positions 🏛️ — used by Julius Caesar 2000 years ago! A→D with shift=3.",
              example: "# Encrypt 'A' with shift 3\\nencrypted = chr(ord('A') + 3)  # 'D'",
            },
            {
              symbol: "XOR (^)",
              name: "XOR Encryption",
              nameZh: "异或加密",
              emoji: "⚡",
              description: "The magic toggle switch ⚡ — XOR twice with the same key gives you the original back! Real encryption uses this!",
              example: "secret = ord('H') ^ 42  # encrypt\\noriginal = secret ^ 42   # decrypt!\\nprint(chr(original))     # 'H'",
            },
            {
              symbol: "string.ascii_lowercase",
              name: "Alphabet Helpers",
              nameZh: "字母辅助",
              emoji: "🔤",
              description: "Quick access to all letters 🔤 — useful for building ciphers and code-breaking tools!",
              example: "import string\\nprint(string.ascii_lowercase)\\n# 'abcdefghijklmnopqrstuvwxyz'",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "message = 'HELLO'", explanation: "The secret message to encrypt.", explanationZh: "要加密的秘密消息" },
              { code: "shift = 3", explanation: "Caesar cipher shift amount.", explanationZh: "凯撒密码偏移量" },
              { code: "encrypted = ''", explanation: "Build encrypted string character by character.", explanationZh: "逐字符构建加密字符串" },
              { code: "for char in message:", explanation: "Process each character.", explanationZh: "处理每个字符" },
              { code: "    new_char = chr((ord(char) - 65 + shift) % 26 + 65)", explanation: "Shift letter within A-Z range using modulo.", explanationZh: "用取模运算在A-Z范围内偏移字母" },
              { code: "    encrypted += new_char", explanation: "Add encrypted character to result.", explanationZh: "将加密字符添加到结果" },
              { code: "print(f'Encrypted: {encrypted}')", explanation: "'HELLO' becomes 'KHOOR'!", explanationZh: "'HELLO' 变成 'KHOOR'！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Crypto Warmup · 密码热身

Decrypt this Caesar cipher! Each letter was shifted by 3 positions forward.

Encrypted: "KHOOR ZRUOG"

To decrypt, shift each letter BACK by 3.
K→H, H→E, O→L, O→L, R→O = HELLO!

What's the full message?`,
        exercise: {
          prompt: "Decrypt 'KHOOR ZRUOG' by shifting each letter back 3 positions. Print the result.",
          promptZh: "将 'KHOOR ZRUOG' 每个字母向前移3位来解密。",
          starterCode: "# Decrypt Caesar cipher (shift = 3)\\nmessage = 'KHOOR ZRUOG'\\nresult = ''\\nfor char in message:\\n    if char.isalpha():\\n        result += chr((ord(char) - 65 - 3) % 26 + 65)\\n    else:\\n        result += char\\nprint(result)",
          expectedOutput: "HELLO WORLD",
          hint: "Shift each letter back by 3: K(75)-3=H(72), H(72)-3=E(69), etc. Space stays as space.",
          hintZh: "每个字母向回移3位：K-3=H, H-3=E，以此类推。空格保持不变。",
          solution: "message = 'KHOOR ZRUOG'\\nresult = ''\\nfor char in message:\\n    if char.isalpha():\\n        result += chr((ord(char) - 65 - 3) % 26 + 65)\\n    else:\\n        result += char\\nprint(result)",
        },
      },
      {
        type: "code",
        emoji: "🔐",
        content: `## 🔐 Follow Along: Caesar Cipher Machine

🎯 **What you'll learn:** How to build a complete tool with encrypt, decrypt, and brute-force features using functions.
学习目标：如何用函数构建一个包含加密、解密和暴力破解功能的完整工具。

This is real cryptography! 🔐 \`chr()\` and \`ord()\` convert between characters and numbers. A brute-force attack tries all 26 possible keys — surprisingly effective for simple ciphers!

🔑 **Key things to notice:**
- Functions organize encrypt/decrypt as reusable operations
- \`chr()\` and \`ord()\` bridge characters ↔ numbers
- Brute force = try every possibility systematically

👀 Build the cipher machine and send secret messages!`,
        code: `# 🔐 THE MATRIX — CAESAR CIPHER MACHINE
print("🕶️ THE MATRIX — CIPHER MACHINE")
print("=" * 35)

def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = 65 if char.isupper() else 97
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

def caesar_decrypt(text, shift):
    return caesar_encrypt(text, -shift)

# Demo
message = "MEET ME AT THE PARK"
shift = 7

encrypted = caesar_encrypt(message, shift)
decrypted = caesar_decrypt(encrypted, shift)

print(f"\\n📝 Original:  {message}")
print(f"🔒 Encrypted: {encrypted}")
print(f"🔓 Decrypted: {decrypted}")
print(f"✅ Match: {message == decrypted}")

# Brute force attack!
print("\\n💀 BRUTE FORCE ATTACK:")
print("Testing all 26 possible shifts...")
print("-" * 35)
secret = "WKH TXLFN EURZQ IRA"
for s in range(26):
    attempt = caesar_decrypt(secret, s)
    if "THE" in attempt or "FOX" in attempt:
        print(f"  Shift {s:2d}: {attempt} ← 🎯 FOUND IT!")
    else:
        print(f"  Shift {s:2d}: {attempt}")`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🔓 Password Cracker · 密码破解器",
          description: "Build a brute-force password cracker! Try all 4-digit PIN combinations (0000-9999) to find the secret PIN. Count how many attempts it takes.\n构建暴力破解器！尝试所有4位PIN码(0000-9999)找到秘密PIN。数一数需要多少次尝试。",
          starterCode: `# 🔓 PASSWORD CRACKER
secret_pin = "7342"
attempts = 0

# TODO: Try all 4-digit combinations from "0000" to "9999"

# TODO: Count attempts

# TODO: When found, print the PIN and attempt count

# Hint: Use f"{n:04d}" to format number as 4-digit string

`,
          hint: "for n in range(10000): pin = f'{n:04d}'. Check if pin == secret_pin. Count attempts.",
          solution: `secret_pin = "7342"
attempts = 0

print("🔓 BRUTE FORCE PIN CRACKER")
print("Testing all 10,000 combinations...")

for n in range(10000):
    attempts += 1
    pin = f"{n:04d}"
    if pin == secret_pin:
        print(f"\\n🎯 PIN CRACKED: {pin}")
        print(f"   Attempts: {attempts}")
        print(f"   That's {attempts/10000:.1%} of all combinations!")
        break

print(f"\\n💡 Lesson: A 4-digit PIN has only 10,000 possibilities!")
print(f"   A computer can try them ALL in milliseconds!")
print(f"   Use LONGER passwords for real security!")`,
          expectedOutput: `🔓 BRUTE FORCE PIN CRACKER
Testing all 10,000 combinations...

🎯 PIN CRACKED: 7342
   Attempts: 7343
   That's 73.4% of all combinations!

💡 Lesson: A 4-digit PIN has only 10,000 possibilities!
   A computer can try them ALL in milliseconds!
   Use LONGER passwords for real security!`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "📡 Morse Code Communicator · 摩尔斯电码通信器",
          description: "Build a Morse code encoder AND decoder! Encode a message to Morse, then decode it back to verify it works.\n构建摩尔斯电码编码器和解码器！将消息编码为摩尔斯电码，再解码回来验证！",
          starterCode: `# 📡 MORSE CODE COMMUNICATOR
MORSE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', ' ': '/'
}

message = "SOS HELP"

# TODO: Build encoder — convert message to Morse

# Each letter becomes its Morse code, separated by spaces

# TODO: Build decoder — convert Morse back to text

# Build a reverse dictionary: morse_to_letter

# TODO: Print original, encoded, decoded, and verify match

`,
          hint: "Encoder: join [MORSE[c] for c in message.upper()]. Decoder: reverse_morse = {v:k for k,v in MORSE.items()}. Split encoded by space, look up each code.",
          solution: `MORSE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', ' ': '/'
}

message = "SOS HELP"

# Encode
encoded = ' '.join(MORSE[c] for c in message.upper())

# Decode
reverse_morse = {v: k for k, v in MORSE.items()}
decoded = ''.join(reverse_morse[code] for code in encoded.split(' '))

print("📡 MORSE CODE COMMUNICATOR")
print(f"  Original: {message}")
print(f"  Encoded:  {encoded}")
print(f"  Decoded:  {decoded}")
print(f"  ✅ Match: {message == decoded}")`,
          expectedOutput: `📡 MORSE CODE COMMUNICATOR
  Original: SOS HELP
  Encoded:  ... --- ... / .... . .-.. .--.
  Decoded:  SOS HELP
  ✅ Match: True`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Boss Challenge · 终极挑战",
        challenge: {
          title: "🛡️ Password Strength Analyzer · 密码强度分析器",
          description: "Build a password strength analyzer that scores passwords based on: length, uppercase, lowercase, digits, special characters. Rate as Weak/Medium/Strong/Very Strong.\n构建密码强度分析器：根据长度、大小写、数字、特殊字符评分。",
          starterCode: `# 🛡️ PASSWORD STRENGTH ANALYZER

def check_password(password):
    score = 0
    feedback = []
    
    # TODO: Check length (1 point if >= 8, 2 if >= 12)
    # TODO: Check for uppercase letters (1 point)
    # TODO: Check for lowercase letters (1 point)
    # TODO: Check for digits (1 point)
    # TODO: Check for special characters !@#$%^&* (1 point)
    # TODO: Rate: 0-2 Weak, 3-4 Medium, 5 Strong, 6+ Very Strong
    # TODO: Return score, rating, and feedback list
    pass

# Test passwords
passwords = ["abc", "Hello123", "P@ssw0rd!", "MyS3cur3P@ss!!"]
for pw in passwords:
    pass  # TODO: check each and print results

`,
          hint: "Use any(c.isupper() for c in password) to check for uppercase. Similar for lower/digit. For special chars: any(c in '!@#$%^&*' for c in password).",
          solution: `def check_password(password):
    score = 0
    feedback = []
    
    if len(password) >= 12:
        score += 2
        feedback.append("Great length!")
    elif len(password) >= 8:
        score += 1
        feedback.append("OK length")
    else:
        feedback.append("Too short!")
    
    if any(c.isupper() for c in password):
        score += 1
    else:
        feedback.append("Add uppercase")
    
    if any(c.islower() for c in password):
        score += 1
    else:
        feedback.append("Add lowercase")
    
    if any(c.isdigit() for c in password):
        score += 1
    else:
        feedback.append("Add numbers")
    
    if any(c in "!@#$%^&*" for c in password):
        score += 1
    else:
        feedback.append("Add special chars")
    
    if score <= 2:
        rating = "🔴 WEAK"
    elif score <= 4:
        rating = "🟡 MEDIUM"
    elif score <= 5:
        rating = "🟢 STRONG"
    else:
        rating = "💪 VERY STRONG"
    
    return score, rating, feedback

print("🛡️ PASSWORD STRENGTH ANALYZER")
print("=" * 35)

passwords = ["abc", "Hello123", "P@ssw0rd!", "MyS3cur3P@ss!!"]
for pw in passwords:
    score, rating, feedback = check_password(pw)
    print(f"\\n  Password: {pw}")
    print(f"  Score: {score}/6 — {rating}")
    if feedback:
        print(f"  Tips: {', '.join(feedback)}")`,
          expectedOutput: `🛡️ PASSWORD STRENGTH ANALYZER
===================================

  Password: abc
  Score: 1/6 — 🔴 WEAK
  Tips: Too short!, Add uppercase, Add numbers, Add special chars

  Password: Hello123
  Score: 4/6 — 🟡 MEDIUM
  Tips: OK length, Add special chars

  Password: P@ssw0rd!
  Score: 5/6 — 🟢 STRONG
  Tips: OK length

  Password: MyS3cur3P@ss!!
  Score: 6/6 — 💪 VERY STRONG
  Tips: Great length!`,
        },
      },
      {
        type: "quiz",
        content: "🕶️ Matrix Hacker Quiz!",
        quiz: QUIZ_DATA["4-5"],
      },
    ],
  },

  {
    id: "4-6",
    moduleId: "area-4",
    title: "🧬 Life Simulator",
    subtitle: "Simulate ecosystems · 生命模拟器：模拟生态系统",
    icon: "🧬",
    xp: 50,
    duration: "35 min",
    order: 6,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🧬",
        content: `## 🧬 Welcome to the Life Simulator!

**🐍 Py:** "What if you could create a whole world... and watch it evolve?"

\`\`\`
  🌍 LIFE SIMULATOR v1.0
  ========================
  🐇 Rabbits: 50    🦊 Foxes: 10
  🌿 Grass: 100     💧 Water: 80
  ☀️  Sun: Full
  
  Day 1... 2... 3... → Evolution!
\`\`\`

Today, we build a **virtual ecosystem**! Rabbits eat grass, foxes eat rabbits, and the population changes over time.

今天我们构建一个**虚拟生态系统**！兔子吃草，狐狸吃兔子，种群数量随时间变化。

This is the **final Science Lab project** — you'll combine EVERYTHING:
- 📊 Data tracking (from Lesson 19)
- 🎲 Random events (from Lesson 20)  
- 🔢 Math formulas (from Lesson 21)
- 🔍 Pattern analysis (from Lesson 22)

**🔧 Chip:** "Real scientists use simulations like this to predict animal populations, disease spread, and climate change!"`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "New Syntax: Simulation Patterns",
        concept: {
          title: "🧬 Simulation Design Patterns",
          titleZh: "模拟设计模式",
          syntaxCards: [
            {
              symbol: "state = {key: value}",
              name: "State Dictionary",
              nameZh: "状态字典",
              emoji: "📋",
              description: "Track your world's state in a dictionary 📋 — population counts, resources, everything in one place!",
              example: "world = {'rabbits': 50, 'foxes': 10}\\nworld['rabbits'] += 5  # births!",
            },
            {
              symbol: "for day in range(n):",
              name: "Time Loop",
              nameZh: "时间循环",
              emoji: "⏰",
              description: "Each loop iteration = one day/turn ⏰ — update your world state each cycle!",
              example: "for day in range(100):\\n    # Update world\\n    world['rabbits'] += births\\n    world['foxes'] -= deaths",
            },
            {
              symbol: "max(0, value)",
              name: "Non-negative Clamp",
              nameZh: "非负约束",
              emoji: "🛑",
              description: "Populations can't go negative! 🛑 Use max(0, x) to prevent impossible values.",
              example: "rabbits = max(0, rabbits - eaten)\\n# Even if eaten > rabbits, result is 0",
            },
            {
              symbol: "history.append(state.copy())",
              name: "Record History",
              nameZh: "记录历史",
              emoji: "📜",
              description: "Save a snapshot each turn 📜 — use .copy() or the dict gets overwritten! Then analyze trends.",
              example: "history = []\\nfor day in range(100):\\n    # ... update world ...\\n    history.append(dict(world))",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import random", explanation: "Random events make the simulation realistic.", explanationZh: "随机事件让模拟更真实" },
              { code: "rabbits = 50; foxes = 10", explanation: "Initial population.", explanationZh: "初始种群数量" },
              { code: "for day in range(100):", explanation: "Simulate 100 days.", explanationZh: "模拟 100 天" },
              { code: "    births = int(rabbits * 0.1)", explanation: "10% of rabbits reproduce each day.", explanationZh: "每天10%的兔子繁殖" },
              { code: "    eaten = min(rabbits, foxes * 2)", explanation: "Each fox eats up to 2 rabbits.", explanationZh: "每只狐狸最多吃2只兔子" },
              { code: "    fox_births = int(eaten * 0.3)", explanation: "Foxes breed based on food eaten.", explanationZh: "狐狸根据食物繁殖" },
              { code: "    fox_deaths = int(foxes * 0.05)", explanation: "5% natural fox death rate.", explanationZh: "5%的自然狐狸死亡率" },
              { code: "    rabbits = max(0, rabbits + births - eaten)", explanation: "Update rabbit population.", explanationZh: "更新兔子数量" },
              { code: "    foxes = max(0, foxes + fox_births - fox_deaths)", explanation: "Update fox population.", explanationZh: "更新狐狸数量" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Ecosystem Warmup · 生态热身

If we start with 100 rabbits and each day 10% are born and 15% are eaten:

\`\`\`python
rabbits = 100
for day in range(3):
    born = int(rabbits * 0.10)
    eaten = int(rabbits * 0.15)
    rabbits = rabbits + born - eaten
    print(f"Day {day+1}: {rabbits} rabbits")
\`\`\`

What are the values after 3 days?`,
        exercise: {
          prompt: "Run the simulation mentally. Day 1: 100 + 10 - 15 = 95. Day 2: 95 + 9 - 14 = 90. Day 3: 90 + 9 - 13 = 86.",
          promptZh: "在脑中运行模拟。第1天：100+10-15=95。第2天：95+9-14=90。第3天：90+9-13=86。",
          starterCode: "rabbits = 100\\nfor day in range(3):\\n    born = int(rabbits * 0.10)\\n    eaten = int(rabbits * 0.15)\\n    rabbits = rabbits + born - eaten\\n    print(f'Day {day+1}: {rabbits} rabbits')",
          expectedOutput: "Day 1: 95 rabbits\\nDay 2: 90 rabbits\\nDay 3: 86 rabbits",
          hint: "int(100*0.10)=10 births, int(100*0.15)=15 eaten. 100+10-15=95. Then repeat with 95.",
          hintZh: "int(100*0.10)=10出生, int(100*0.15)=15被吃。100+10-15=95。然后用95重复。",
          solution: "rabbits = 100\\nfor day in range(3):\\n    born = int(rabbits * 0.10)\\n    eaten = int(rabbits * 0.15)\\n    rabbits = rabbits + born - eaten\\n    print(f'Day {day+1}: {rabbits} rabbits')",
        },
      },
      {
        type: "code",
        emoji: "🧬",
        content: `## 🧬 Follow Along: Predator-Prey Ecosystem

🎯 **What you'll learn:** How to simulate dynamic systems where populations affect each other over time.
学习目标：如何模拟种群之间随时间互相影响的动态系统。

This is computational biology! 🔬 The same simulation techniques model climate change, disease spread, and stock markets. Watch virtual rabbits 🐰 and foxes 🦊 dance in nature's balance.

🔑 **Key things to notice:**
- Each day recalculates populations based on birth/death rates
- Predator-prey dynamics create natural oscillation cycles
- Small parameter changes dramatically affect outcomes

👀 Watch the ASCII population graphs change over 30 days!`,
        code: `# 🧬 LIFE SIMULATOR — PREDATOR vs PREY
import random

print("🧬 LIFE SIMULATOR — Foxes vs Rabbits")
print("=" * 45)

# Initial populations
rabbits = 80
foxes = 15

# Track history for graph
rabbit_history = []
fox_history = []

print(f"\\n🌅 Starting: 🐇 {rabbits} rabbits, 🦊 {foxes} foxes\\n")

for day in range(30):
    # Rabbit dynamics
    rabbit_births = int(rabbits * 0.12)  # 12% birth rate
    
    # Fox hunting (each fox eats 0-3 rabbits)
    eaten = 0
    for _ in range(foxes):
        eaten += random.randint(0, 3)
    eaten = min(eaten, rabbits)  # Can't eat more than exist
    
    # Fox dynamics
    fox_births = int(eaten * 0.2)       # 20% of food → new foxes
    fox_deaths = int(foxes * 0.08)      # 8% natural death
    
    # Random event (10% chance)
    event = ""
    if random.random() < 0.1:
        event_type = random.choice(["drought", "feast", "disease"])
        if event_type == "drought":
            rabbits = int(rabbits * 0.8)
            event = " ☀️ Drought! -20% rabbits"
        elif event_type == "feast":
            rabbit_births *= 2
            event = " 🌿 Great harvest! 2x births"
        else:
            fox_deaths *= 3
            event = " 🦠 Fox disease! 3x deaths"
    
    # Update
    rabbits = max(0, rabbits + rabbit_births - eaten)
    foxes = max(0, foxes + fox_births - fox_deaths)
    
    rabbit_history.append(rabbits)
    fox_history.append(foxes)
    
    if day % 5 == 0 or event:
        r_bar = "🟩" * min(rabbits // 5, 20)
        f_bar = "🟥" * min(foxes // 2, 20)
        print(f"Day {day+1:2d}: 🐇{rabbits:3d} {r_bar}")
        print(f"        🦊{foxes:3d} {f_bar}{event}")

# Final report
print(f"\\n{'=' * 45}")
print(f"📊 SIMULATION COMPLETE — 30 Days")
print(f"  🐇 Rabbits: {rabbit_history[0]} → {rabbits} ({'+' if rabbits > rabbit_history[0] else ''}{rabbits - rabbit_history[0]})")
print(f"  🦊 Foxes:   {fox_history[0]} → {foxes} ({'+' if foxes > fox_history[0] else ''}{foxes - fox_history[0]})")
print(f"  🐇 Peak rabbits: {max(rabbit_history)} (Day {rabbit_history.index(max(rabbit_history))+1})")
print(f"  🦊 Peak foxes:   {max(fox_history)} (Day {fox_history.index(max(fox_history))+1})")`,
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🐇🦊 Predator-Prey Simulator · 捕食者-猎物模拟",
          description: "Simulate 50 days of rabbits vs foxes. Rabbits: +15% births, foxes eat 2 each. Foxes: births = 25% of food, 10% death rate. Print every 10 days and show final ASCII population chart.\n模拟50天兔子vs狐狸。兔子+15%出生，狐狸每只吃2只。狐狸出生=食物的25%，死亡率10%。",
          starterCode: `import random

# 🐇🦊 Predator-Prey Simulation
rabbits = 100
foxes = 20
r_history = []
f_history = []

# TODO: Simulate 50 days

# Each day:
#   rabbit_births = int(rabbits * 0.15)
#   eaten = min(foxes * 2, rabbits)
#   fox_births = int(eaten * 0.25)
#   fox_deaths = int(foxes * 0.10)
#   Update populations (use max(0, ...))
#   Save to history lists
#   Print every 10 days

# TODO: Print final ASCII bar chart of history

`,
          hint: "Loop 50 days. Update populations. Append to history lists. At the end, loop through history and print bars of 🟩 and 🟥.",
          solution: `import random

rabbits = 100
foxes = 20
r_history = []
f_history = []

print("🐇🦊 PREDATOR-PREY SIMULATION")
print("=" * 40)

for day in range(50):
    rabbit_births = int(rabbits * 0.15)
    eaten = min(foxes * 2, rabbits)
    fox_births = int(eaten * 0.25)
    fox_deaths = int(foxes * 0.10)
    
    rabbits = max(0, rabbits + rabbit_births - eaten)
    foxes = max(0, foxes + fox_births - fox_deaths)
    
    r_history.append(rabbits)
    f_history.append(foxes)
    
    if (day + 1) % 10 == 0:
        print(f"Day {day+1:2d}: 🐇 {rabbits:4d} | 🦊 {foxes:3d}")

print("\\n📊 POPULATION CHART (every 5 days):")
for i in range(0, 50, 5):
    r_bar = "█" * min(r_history[i] // 10, 30)
    f_bar = "▓" * min(f_history[i] // 2, 15)
    print(f"Day {i+1:2d} 🐇 {r_bar} {r_history[i]}")
    print(f"       🦊 {f_bar} {f_history[i]}")`,
          expectedOutput: `🐇🦊 PREDATOR-PREY SIMULATION
========================================
Day 10: 🐇   48 | 🦊  30
Day 20: 🐇   12 | 🦊  18
Day 30: 🐇    5 | 🦊   9
Day 40: 🐇    2 | 🦊   4
Day 50: 🐇    1 | 🦊   2

📊 POPULATION CHART (every 5 days):
Day  1 🐇 ██████████ 100
       🦊 ▓▓▓▓▓▓▓▓▓▓ 20
Day  6 🐇 ██████ 68
       🦊 ▓▓▓▓▓▓▓▓▓▓▓▓ 25
Day 11 🐇 ████ 44
       🦊 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 31`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Coding Challenge · 编程挑战",
        challenge: {
          title: "🌱 Plant Growth Race · 植物生长竞赛",
          description: "3 plants compete for sunlight and water! Each plant has a strategy (tall, wide, deep roots). Simulate 20 days — taller plants get more sun, wider plants get more water, deep roots survive drought.\n3株植物竞争阳光和水！每株有不同策略。模拟20天。",
          starterCode: `import random

# 🌱 PLANT GROWTH RACE
plants = [
    {"name": "Sunny", "height": 10, "width": 5, "roots": 3, "strategy": "tall"},
    {"name": "Bushy", "height": 5, "width": 10, "roots": 3, "strategy": "wide"},
    {"name": "Rooty", "height": 5, "width": 5, "roots": 10, "strategy": "deep"},
]

# TODO: Simulate 20 days

# Each day:
#   sun = random.randint(5, 15)
#   water = random.randint(5, 15)
#   drought = random.random() < 0.2 (20% chance)
#   
#   For each plant:
#     sun_share = plant height relative to tallest
#     water_share = plant width relative to widest
#     growth = (sun_share + water_share) / 2
#     If drought and roots < 5: growth = 0 (plant struggles)
#     Add growth to height
#

# TODO: Print daily standings every 5 days

# TODO: Announce winner (tallest plant)

`,
          hint: "Calculate relative shares: sun_share = plant['height'] / max(p['height'] for p in plants). Growth adds to height. Check drought + roots.",
          solution: `import random

plants = [
    {"name": "🌻 Sunny", "height": 10, "width": 5, "roots": 3, "strategy": "tall"},
    {"name": "🌿 Bushy", "height": 5, "width": 10, "roots": 3, "strategy": "wide"},
    {"name": "🌲 Rooty", "height": 5, "width": 5, "roots": 10, "strategy": "deep"},
]

print("🌱 PLANT GROWTH RACE!")
print("=" * 35)

for day in range(20):
    sun = random.randint(5, 15)
    water = random.randint(5, 15)
    drought = random.random() < 0.2
    
    max_h = max(p["height"] for p in plants)
    max_w = max(p["width"] for p in plants)
    
    for p in plants:
        sun_share = p["height"] / max_h * sun
        water_share = p["width"] / max_w * water
        growth = int((sun_share + water_share) / 4)
        
        if drought and p["roots"] < 5:
            growth = 0
        
        p["height"] += growth
        if p["strategy"] == "wide":
            p["width"] += 1
        if p["strategy"] == "deep":
            p["roots"] += 1
    
    if (day + 1) % 5 == 0:
        status = " ☀️ DROUGHT!" if drought else ""
        print(f"\\nDay {day+1}{status}:")
        for p in plants:
            bar = "█" * min(p["height"] // 3, 20)
            print(f"  {p['name']}: {bar} {p['height']}cm")

winner = max(plants, key=lambda p: p["height"])
print(f"\\n🏆 WINNER: {winner['name']} at {winner['height']}cm!")`,
          expectedOutput: `🌱 PLANT GROWTH RACE!
===================================

Day 5:
  🌻 Sunny: █████ 18cm
  🌿 Bushy: ███ 12cm
  🌲 Rooty: ███ 11cm

Day 10:
  🌻 Sunny: █████████ 28cm
  🌿 Bushy: ██████ 20cm
  🌲 Rooty: █████ 17cm

Day 15:
  🌻 Sunny: ████████████ 38cm
  🌿 Bushy: █████████ 29cm
  🌲 Rooty: ███████ 24cm

Day 20:
  🌻 Sunny: ████████████████ 50cm
  🌿 Bushy: ████████████ 38cm
  🌲 Rooty: ██████████ 32cm

🏆 WINNER: 🌻 Sunny at 50cm!`,
        },
      },
      {
        type: "challenge",
        content: "🏆 Boss Challenge · 终极挑战",
        challenge: {
          title: "🌍 My Virtual World · 我的虚拟世界",
          description: "Create a complete ecosystem with 3 species! Define their traits (birth rate, food needs, predator/prey relationships). Run 50 rounds and show the population history as an ASCII chart.\n创建完整生态系统：3个物种，定义属性和关系，运行50轮，显示ASCII图表！",
          starterCode: `import random

# 🌍 MY VIRTUAL WORLD
print("🌍 VIRTUAL WORLD SIMULATOR")
print("=" * 40)

# Define 3 species with traits
species = {
    "grass": {"count": 200, "growth_rate": 0.20},
    "rabbit": {"count": 50, "birth_rate": 0.15, "food": "grass", "eat_amount": 3},
    "fox": {"count": 10, "birth_rate": 0.10, "food": "rabbit", "eat_amount": 2, "death_rate": 0.08},
}

history = {"grass": [], "rabbit": [], "fox": []}

# TODO: Simulate 50 rounds

# Each round:
#   1. Grass grows by growth_rate %
#   2. Rabbits eat grass (eat_amount per rabbit)
#   3. Rabbit births based on food eaten
#   4. Foxes eat rabbits
#   5. Fox births based on food eaten
#   6. Fox natural deaths
#   7. All populations use max(0, ...) 
#   8. Record history
#   9. Print every 10 rounds

# TODO: Print final ASCII chart

`,
          hint: "Process in order: grass grows, rabbits eat grass, rabbits breed, foxes eat rabbits, foxes breed, foxes die. Use min() so they can't eat more than exists.",
          solution: `import random

print("🌍 VIRTUAL WORLD SIMULATOR")
print("=" * 40)

grass = 200
rabbits = 50
foxes = 10

h_grass = []
h_rabbit = []
h_fox = []

for day in range(50):
    # Grass grows
    grass += int(grass * 0.20)
    grass = min(grass, 500)  # max capacity
    
    # Rabbits eat grass
    grass_eaten = min(rabbits * 3, grass)
    grass -= grass_eaten
    
    # Rabbit births (based on food)
    fed_rabbits = grass_eaten // 3
    rabbit_births = int(fed_rabbits * 0.15)
    
    # Foxes eat rabbits
    rabbits_eaten = min(foxes * 2, rabbits)
    rabbits = max(0, rabbits + rabbit_births - rabbits_eaten)
    
    # Fox births and deaths
    fox_births = int(rabbits_eaten * 0.10)
    fox_deaths = int(foxes * 0.08)
    foxes = max(0, foxes + fox_births - fox_deaths)
    
    h_grass.append(grass)
    h_rabbit.append(rabbits)
    h_fox.append(foxes)
    
    if (day + 1) % 10 == 0:
        print(f"Day {day+1:2d}: 🌿{grass:4d} 🐇{rabbits:3d} 🦊{foxes:3d}")

print("\\n📊 POPULATION HISTORY:")
print("-" * 40)
for i in range(0, 50, 5):
    g = "·" * min(h_grass[i] // 20, 15)
    r = "█" * min(h_rabbit[i] // 5, 15)
    f = "▓" * min(h_fox[i], 10)
    print(f"Day {i+1:2d} 🌿{g} 🐇{r} 🦊{f}")

print(f"\\n🏁 Final: 🌿 {grass} | 🐇 {rabbits} | 🦊 {foxes}")
if rabbits == 0 and foxes == 0:
    print("💀 Extinction! Only grass remains...")
elif foxes == 0:
    print("🐇 Rabbits survived! Foxes went extinct.")
elif rabbits == 0:
    print("🦊 Foxes doomed — no more food!")
else:
    print("✅ Balanced ecosystem!")`,
          expectedOutput: `🌍 VIRTUAL WORLD SIMULATOR
========================================
Day 10: 🌿 180 🐇 35 🦊  9
Day 20: 🌿 250 🐇 28 🦊  7
Day 30: 🌿 320 🐇 30 🦊  6
Day 40: 🌿 400 🐇 35 🦊  6
Day 50: 🌿 450 🐇 38 🦊  5

📊 POPULATION HISTORY:
----------------------------------------
Day  1 🌿········· 🐇█████████ 🦊▓▓▓▓▓▓▓▓▓▓
Day  6 🌿······ 🐇██████ 🦊▓▓▓▓▓▓▓▓▓
Day 11 🌿········ 🐇██████ 🦊▓▓▓▓▓▓▓▓
Day 16 🌿██████████ 🐇█████ 🦊▓▓▓▓▓▓▓
Day 21 🌿████████████ 🐇█████ 🦊▓▓▓▓▓▓
Day 26 🌿██████████████ 🐇██████ 🦊▓▓▓▓▓▓
Day 31 🌿██████████████ 🐇██████ 🦊▓▓▓▓▓
Day 36 🌿███████████████ 🐇██████ 🦊▓▓▓▓▓
Day 41 🌿███████████████ 🐇███████ 🦊▓▓▓▓▓
Day 46 🌿███████████████ 🐇███████ 🦊▓▓▓▓▓

🏁 Final: 🌿 450 | 🐇 38 | 🦊 5
✅ Balanced ecosystem!`,
        },
      },
      {
        type: "quiz",
        content: "🧬 Life Simulator Quiz!",
        quiz: QUIZ_DATA["4-6"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🤖 AREA 5: AI FRONTIER (6 lessons)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "5-1",
    moduleId: "area-5",
    title: "AI Basics & Rule Systems",
    subtitle: "How AI thinks with rules · AI基础：规则系统与决策树 → 🐾 Train your AI pet!",
    icon: "🧠",
    xp: 40,
    duration: "25 min",
    order: 1,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🧠",
        content: `## 🧠 Train Your AI Pet! 训练你的AI宠物！

**🐍 Py:** "I just adopted a virtual pet... but it doesn't know ANYTHING!"

**🤖 Botty:** "That's how ALL AI starts — completely blank! You have to TEACH it."

Imagine you got a brand new puppy 🐶. It doesn't know:

- What "sit" means

- Whether you're happy or sad

- What its name is

**Your mission:** Build a virtual AI pet that can:

- 🎯 Understand your commands

- 😊 Read your emotions

- 🧠 Learn and remember new things

**The secret?** Every "smart" AI starts with simple rules — \`if\` statements that match patterns!

Let's begin... 开始吧！`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Key Concepts: Rule-Based AI · 关键概念：基于规则的AI",
        concept: {
          title: "🧠 Rule-Based AI: Teaching Machines with Rules",
          titleZh: "基于规则的AI：用规则教机器",
          syntaxCards: [
            {
              symbol: "if/elif/else",
              name: "Decision Tree",
              nameZh: "决策树",
              emoji: "🌳",
              description: "The simplest AI brain 🌳 — a chain of if/elif/else that checks conditions and decides what to do. Like a flowchart!",
              example: "if command == \"sit\":\\n    return \"*sits down* 🐕\"\\nelif command == \"speak\":\\n    return \"Woof! 🐶\"\\nelse:\\n    return \"*tilts head* 🤔\"",
            },
            {
              symbol: "in",
              name: "Pattern Matching",
              nameZh: "模式匹配",
              emoji: "🔍",
              description: "Searching for keywords inside text 🔍 — the 'in' operator checks if a word exists in a string. Basic AI pattern recognition!",
              example: "if \"happy\" in message:\\n    mood = \"positive 😊\"\\nif \"angry\" in message:\\n    mood = \"negative 😠\"",
            },
            {
              symbol: "dict",
              name: "Knowledge Base",
              nameZh: "知识库",
              emoji: "📚",
              description: "A dictionary = the AI's memory 📚 — store what the pet knows, what it's learned, and how to respond to different inputs.",
              example: "pet_brain = {\\n    \"sit\": \"*sits down*\",\\n    \"shake\": \"*offers paw*\",\\n    \"name\": \"Buddy\"\\n}",
            },
            {
              symbol: ".lower()",
              name: "Input Normalization",
              nameZh: "输入标准化",
              emoji: "🔧",
              description: "Making input consistent 🔧 — convert everything to lowercase so 'SIT', 'Sit', and 'sit' all work the same way!",
              example: "user_input = input().lower().strip()\\n# \"SIT\" → \"sit\"\\n# \" Hello \" → \"hello\"",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "def pet_respond(command):", explanation: "The pet's 'brain' — a function that processes commands", explanationZh: "宠物的'大脑' — 处理命令的函数" },
              { code: "    command = command.lower().strip()", explanation: "Normalize: make lowercase, remove spaces", explanationZh: "标准化：转小写，去空格" },
              { code: "    if command in known_tricks:", explanation: "Check if the command is in our knowledge base", explanationZh: "检查命令是否在知识库中" },
              { code: "        return known_tricks[command]", explanation: "Return the matching response from memory", explanationZh: "从记忆中返回匹配的回应" },
              { code: "    else:", explanation: "Unknown command — the pet is confused!", explanationZh: "未知命令 — 宠物困惑了！" },
              { code: "        return \"*tilts head* I don't know that yet!\"", explanation: "Default response for unknown inputs", explanationZh: "对未知输入的默认回应" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎮 Warm-Up: Command Matching · 热身：命令匹配

Look at this pet brain code:

\`\`\`python
tricks = {"sit": "sits down", "shake": "offers paw", "roll": "rolls over"}
command = "sit"
if command in tricks:
    print(tricks[command])
else:
    print("Unknown trick!")
\`\`\`

**What will this print?**`,
        exercise: {
          prompt: "Create a dictionary called 'tricks' with 3 pet tricks, then look up the trick 'sit' and print the result.",
          promptZh: "创建一个叫 tricks 的字典，包含3个宠物技能，然后查找 'sit' 并打印结果。",
          starterCode: "# Create your pet's trick book\ntricks = {\"sit\": \"sits down\", \"shake\": \"offers paw\", \"roll\": \"rolls over\"}\n# Look up \"sit\" and print it\n",
          expectedOutput: "sits down",
          hint: "Use tricks[\"sit\"] to look up the value for the key \"sit\", then print it!",
          hintZh: "用 tricks[\"sit\"] 查找键 \"sit\" 的值，然后打印！",
          solution: "tricks = {\"sit\": \"sits down\", \"shake\": \"offers paw\", \"roll\": \"rolls over\"}\nprint(tricks[\"sit\"])",
        },
      },
      {
        type: "code",
        emoji: "🐾",
        content: `## 🐾 Exercise 1: Teach Your Pet Commands! 教宠物识别命令！

🎯 **What you'll learn:** How to build a simple AI that maps commands to responses using dictionaries.
学习目标：如何用字典构建一个将命令映射到响应的简单AI。

This is how voice assistants start! 🗣️ Siri and Alexa use the same basic idea — match what you say to a known command, then respond. Your pet is a mini AI assistant!

🔑 **Key things to notice:**
- A dictionary maps commands → responses (the pet's "brain")
- \`.lower().strip()\` normalizes input so "SIT" and "sit" both work
- Unknown commands get a random confused response

👀 Type commands and watch your AI pet respond!`,
        code: `# 🐾 AI Pet: Command Recognition System

# AI宠物：命令识别系统

import random

# The pet's knowledge base (brain!)
# 宠物的知识库（大脑！）
pet_name = "Buddy"
tricks = {
    "sit": f"🐕 {pet_name} sits down obediently!",
    "shake": f"🐾 {pet_name} offers a friendly paw!",
    "speak": f"🐶 {pet_name} says: WOOF WOOF!",
    "roll": f"🔄 {pet_name} rolls over happily!",
    "dance": f"💃 {pet_name} does a little dance!",
}

# Confused responses for unknown commands
confused = [
    f"🤔 {pet_name} tilts head... what?",
    f"😕 {pet_name} sniffs your hand confused...",
    f"🐾 {pet_name} wags tail but doesn't understand.",
]

def pet_respond(command):
    """Process a command and return pet's response"""
    command = command.lower().strip()
    if command in tricks:
        return tricks[command]
    else:
        return random.choice(confused)

# Test all tricks!
print(f"🐕 Meet {pet_name}! Your AI Pet!")
print(f"Known tricks: {', '.join(tricks.keys())}\\n")

test_commands = ["sit", "SHAKE", "unknown", "dance", "fly"]
for cmd in test_commands:
    print(f'You say: "{cmd}"')
    print(f"  → {pet_respond(cmd)}")
    print()`,
      },
      {
        type: "code",
        emoji: "😊",
        content: `## 😊 Exercise 2: Teach Your Pet to Read Emotions! 教宠物读情绪！

🎯 **What you'll learn:** How to build a simple sentiment analyzer using keyword matching.
学习目标：如何用关键词匹配构建一个简单的情感分析器。

This is basic Natural Language Processing (NLP)! 🧠 Real AI chatbots use similar (but fancier) techniques to understand if you're happy, sad, or angry. Your pet reads your mood from your words!

🔑 **Key things to notice:**
- Keywords like "happy", "sad", "angry" trigger different responses
- \`if keyword in message:\` searches for words in text
- Multiple keywords can match — priority order matters

👀 Try typing different emotional messages and see how the pet reacts!`,
        code: `# 😊 AI Pet: Emotion Reader

# AI宠物：情绪识别器

pet_name = "Buddy"

# Emotion keyword database
# 情绪关键词数据库
emotions = {
    "positive": {
        "keywords": ["happy", "great", "awesome", "love", "wonderful", "amazing", "good", "yay", "excited"],
        "responses": [
            f"🥰 {pet_name} wags tail excitedly! You're happy!",
            f"😊 {pet_name} jumps with joy! Good vibes detected!",
            f"💖 {pet_name} licks your face! Happiness overload!",
        ]
    },
    "negative": {
        "keywords": ["sad", "angry", "bad", "terrible", "hate", "awful", "upset", "cry", "worried"],
        "responses": [
            f"🥺 {pet_name} cuddles close... it's okay, human.",
            f"🐾 {pet_name} gently puts paw on your lap.",
            f"💙 {pet_name} stays by your side quietly.",
        ]
    },
    "neutral": {
        "keywords": [],
        "responses": [
            f"🐕 {pet_name} looks at you attentively.",
            f"👀 {pet_name} tilts head, listening carefully.",
        ]
    },
}

import random

def read_emotion(message):
    """Detect emotion from keywords in a message"""
    message = message.lower()
    
    # Check each emotion category
    for mood, data in emotions.items():
        if mood == "neutral":
            continue
        for keyword in data["keywords"]:
            if keyword in message:
                return mood, keyword
    
    return "neutral", None

def pet_react(message):
    """Pet reacts to the emotion in your message"""
    mood, keyword = read_emotion(message)
    response = random.choice(emotions[mood]["responses"])
    
    if keyword:
        return f"[Detected: {mood} (keyword: '{keyword}')]\\n  {response}"
    else:
        return f"[Detected: {mood}]\\n  {response}"

# Test with different messages
test_messages = [
    "I'm so happy today!",
    "This is terrible, I failed my test",
    "What time is it?",
    "I love programming!",
    "I'm feeling sad and upset",
]

print(f"🧠 {pet_name}'s Emotion Reader v1.0\\n")
for msg in test_messages:
    print(f'You: "{msg}"')
    print(f"  → {pet_react(msg)}")
    print()`,
      },
      {
        type: "challenge",
        content: "🏆 Challenge 1: Smart Pet · 聪明宠物",
        challenge: {
          title: "🐾 Smart Pet with Learning · 会学习的聪明宠物",
          description: "Build a pet that starts with 3 tricks, but can LEARN new ones! When you teach it a new trick, it remembers.\n建一个会学习的宠物！从3个技能开始，可以教它新技能。",
          starterCode: "# Smart Pet that can learn new tricks!\nimport random\n\npet_name = \"Buddy\"\ntricks = {\n    \"sit\": \"sits down\",\n    \"shake\": \"offers paw\",\n    \"speak\": \"WOOF!\",\n}\n\ndef do_trick(command):\n    command = command.lower().strip()\n    if command in tricks:\n        return f\"{pet_name} {tricks[command]}\"\n    return f\"{pet_name} doesn't know '{command}' yet!\"\n\ndef learn_trick(name, action):\n    # TODO: Add the new trick to the tricks dictionary\n    # Then print that the pet learned it!\n    pass\n\n# Test: do existing tricks\nprint(do_trick(\"sit\"))\nprint(do_trick(\"spin\"))  # doesn't know yet\n\n# Teach new trick\nlearn_trick(\"spin\", \"spins in circles\")\n\n# Now try again!\nprint(do_trick(\"spin\"))  # should work now!\n\n# Print all known tricks\nprint(f\"\\n{pet_name} knows: {', '.join(tricks.keys())}\")\n",
          hint: "In learn_trick, add to the dictionary: tricks[name] = action. Then print a message like f\"{pet_name} learned '{name}'!\"",
          solution: "import random\n\npet_name = \"Buddy\"\ntricks = {\n    \"sit\": \"sits down\",\n    \"shake\": \"offers paw\",\n    \"speak\": \"WOOF!\",\n}\n\ndef do_trick(command):\n    command = command.lower().strip()\n    if command in tricks:\n        return f\"{pet_name} {tricks[command]}\"\n    return f\"{pet_name} doesn't know '{command}' yet!\"\n\ndef learn_trick(name, action):\n    tricks[name.lower()] = action\n    print(f\"🎉 {pet_name} learned '{name}'!\")\n\nprint(do_trick(\"sit\"))\nprint(do_trick(\"spin\"))\n\nlearn_trick(\"spin\", \"spins in circles\")\n\nprint(do_trick(\"spin\"))\n\nprint(f\"\\n{pet_name} knows: {', '.join(tricks.keys())}\")",
          expectedOutput: "Buddy sits down\nBuddy doesn't know 'spin' yet!\n🎉 Buddy learned 'spin'!\nBuddy spins in circles\n\nBuddy knows: sit, shake, speak, spin",
        },
      },
      {
        type: "challenge",
        content: "🏆 Challenge 2: AI Pet with Personality · 有个性的AI宠物",
        challenge: {
          title: "🐕 AI Pet with Personality & Memory · 有个性有记忆的AI宠物",
          description: "Create a pet with a mood system! The pet has happiness points (0-100). Positive words increase happiness, negative words decrease it. The pet responds differently based on mood level.\n创造一个有心情系统的宠物！宠物有快乐值（0-100），正面词增加，负面词减少，根据心情不同会有不同反应。",
          starterCode: "# AI Pet with Mood System\nimport random\n\npet = {\n    \"name\": \"Buddy\",\n    \"happiness\": 50,\n    \"memory\": [],  # remembers what you said\n}\n\npositive_words = [\"good\", \"love\", \"happy\", \"treat\", \"play\", \"awesome\"]\nnegative_words = [\"bad\", \"no\", \"stop\", \"angry\", \"leave\"]\n\ndef interact(message):\n    message_lower = message.lower()\n    pet[\"memory\"].append(message)\n    \n    # TODO: Check for positive/negative words\n    # Positive word found → happiness += 10 (max 100)\n    # Negative word found → happiness -= 10 (min 0)\n    # Then return a response based on happiness level:\n    # happiness >= 70: excited response\n    # happiness >= 40: normal response  \n    # happiness < 40: sad response\n    pass\n\n# Test interactions\nmessages = [\"Good boy!\", \"I love you!\", \"No! Bad!\", \"Let's play!\", \"You're awesome!\"]\nfor msg in messages:\n    result = interact(msg)\n    print(f'You: \"{msg}\"')\n    print(f\"  {pet['name']}: {result}\")\n    print(f\"  [Happiness: {pet['happiness']}/100]\")\n    print()\n\nprint(f\"Memory: {pet['name']} remembers {len(pet['memory'])} conversations\")\n",
          hint: "Loop through positive_words and check if each is 'in' message_lower. Same for negative. Use min() and max() to clamp happiness between 0-100. Return different strings based on happiness level!",
          solution: "import random\n\npet = {\n    \"name\": \"Buddy\",\n    \"happiness\": 50,\n    \"memory\": [],\n}\n\npositive_words = [\"good\", \"love\", \"happy\", \"treat\", \"play\", \"awesome\"]\nnegative_words = [\"bad\", \"no\", \"stop\", \"angry\", \"leave\"]\n\ndef interact(message):\n    message_lower = message.lower()\n    pet[\"memory\"].append(message)\n    \n    mood_change = 0\n    for word in positive_words:\n        if word in message_lower:\n            mood_change += 10\n            break\n    for word in negative_words:\n        if word in message_lower:\n            mood_change -= 10\n            break\n    \n    pet[\"happiness\"] = max(0, min(100, pet[\"happiness\"] + mood_change))\n    \n    h = pet[\"happiness\"]\n    name = pet[\"name\"]\n    if h >= 70:\n        return random.choice([f\"🥰 *jumps excitedly* WOOF!\", f\"💖 *tail wagging like crazy!*\", f\"😊 *happy dance!*\"])\n    elif h >= 40:\n        return random.choice([f\"🐕 *looks at you calmly*\", f\"🐾 *wags tail gently*\"])\n    else:\n        return random.choice([f\"🥺 *whimpers softly*\", f\"😢 *hides under blanket*\"])\n\nmessages = [\"Good boy!\", \"I love you!\", \"No! Bad!\", \"Let's play!\", \"You're awesome!\"]\nfor msg in messages:\n    result = interact(msg)\n    print(f'You: \"{msg}\"')\n    print(f\"  {pet['name']}: {result}\")\n    print(f\"  [Happiness: {pet['happiness']}/100]\")\n    print()\n\nprint(f\"Memory: {pet['name']} remembers {len(pet['memory'])} conversations\")",
          expectedOutput: "You: \"Good boy!\"\n  Buddy: 🥰 *jumps excitedly* WOOF!\n  [Happiness: 60/100]\n\nYou: \"I love you!\"\n  Buddy: 💖 *tail wagging like crazy!*\n  [Happiness: 70/100]\n\nYou: \"No! Bad!\"\n  Buddy: 🐕 *looks at you calmly*\n  [Happiness: 60/100]\n\nYou: \"Let's play!\"\n  Buddy: 💖 *tail wagging like crazy!*\n  [Happiness: 70/100]\n\nYou: \"You're awesome!\"\n  Buddy: 😊 *happy dance!*\n  [Happiness: 80/100]\n\nMemory: Buddy remembers 5 conversations",
        },
      },
      {
        type: "quiz",
        content: "🧠 AI Pet Quiz! · AI宠物测验！",
        quiz: QUIZ_DATA["5-1"],
      },
    ],
  },

  {
    id: "5-2",
    moduleId: "area-5",
    title: "Strategy & Game Algorithms",
    subtitle: "How AI makes decisions · 策略算法与AI决策 → 🎮 Build a game AI!",
    icon: "🎮",
    xp: 40,
    duration: "25 min",
    order: 2,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🎮",
        content: `## 🎮 Build a Game AI! 造一个游戏AI对手！

**🐍 Py:** "I bet you can't beat me at Tic-Tac-Toe!"

**🤖 Botty:** "Challenge accepted! But first, let's learn HOW game AI thinks."

Have you ever played against a computer in a game? 🎯

- In chess, the computer looks AHEAD at future moves

- In racing games, the AI knows the perfect racing line

- In card games, the AI calculates probabilities

**The big secret:** Game AI isn't truly "smart" — it follows STRATEGIES!

Today you'll build:
1. 🎯 A Tic-Tac-Toe AI (from dumb to unbeatable!)
2. ✊ A Rock-Paper-Scissors AI (that reads YOUR patterns!)
3. 🏆 An AI Tournament!

Let's outsmart the computer... or can it outsmart YOU? 我们来看看谁更聪明！`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Key Concepts: Game AI Strategy · 关键概念：游戏AI策略",
        concept: {
          title: "🎮 Game AI: How Computers Play Games",
          titleZh: "游戏AI：电脑如何下棋",
          syntaxCards: [
            {
              symbol: "random.choice()",
              name: "Random Strategy",
              nameZh: "随机策略",
              emoji: "🎲",
              description: "The dumbest AI 🎲 — just picks randomly! Easy to beat, but it's where we start. Good baseline to compare against.",
              example: "import random\\nmove = random.choice([\"rock\", \"paper\", \"scissors\"])\\nprint(f\"AI picks: {move}\")",
            },
            {
              symbol: "if/elif strategy",
              name: "Rule-Based Strategy",
              nameZh: "规则策略",
              emoji: "🧠",
              description: "A smarter AI 🧠 — uses rules: 'if center is open, take it. If I can win, win. If opponent can win, block!' Priority-based thinking.",
              example: "if can_win(board, \"O\"):\\n    return winning_move\\nelif can_win(board, \"X\"):\\n    return blocking_move\\nelse:\\n    return best_available",
            },
            {
              symbol: "history list",
              name: "Pattern Recognition",
              nameZh: "模式识别",
              emoji: "📊",
              description: "The sneaky AI 📊 — remembers your past moves and finds patterns. If you always pick rock after scissors, it knows!",
              example: "history = [\"rock\", \"rock\", \"scissors\", \"rock\"]\\n# AI notices: mostly rock!\\n# AI picks: paper (beats rock)",
            },
            {
              symbol: "score counting",
              name: "Evaluation Function",
              nameZh: "评估函数",
              emoji: "⚖️",
              description: "Scoring positions ⚖️ — assign points to different situations. Winning = +10, losing = -10, draw = 0. Pick the highest score!",
              example: "def evaluate(board):\\n    if winner == \"AI\": return 10\\n    if winner == \"human\": return -10\\n    return 0  # draw",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "def smart_ai_move(board):", explanation: "The AI's decision function — given a board, pick best move", explanationZh: "AI的决策函数 — 给定棋盘，选最佳位置" },
              { code: "    # Priority 1: Win if possible", explanation: "First check: can we win right now?", explanationZh: "优先级1：能赢就赢" },
              { code: "    for pos in empty_spots(board):", explanation: "Try each empty position", explanationZh: "尝试每个空位" },
              { code: "        if check_win(board, pos, 'O'):", explanation: "If placing here wins, do it!", explanationZh: "如果放这里能赢，就放！" },
              { code: "            return pos", explanation: "Return the winning move", explanationZh: "返回获胜位置" },
              { code: "    # Priority 2: Block opponent", explanation: "If can't win, block the opponent's winning move", explanationZh: "优先级2：不能赢就堵" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Warm-Up: AI Strategy Thinking · 热身：AI策略思维

Look at this Tic-Tac-Toe board:
\`\`\`
 X | O | X
-----------
 _ | O | _
-----------
 _ | _ | _
\`\`\`
O (AI) has two in a column (positions 2, 5). Where should O play to WIN?`,
        exercise: {
          prompt: "The winning move for O is position 8 (bottom middle). Print the number 8.",
          promptZh: "O的获胜位置是第8格（底部中间）。打印数字8。",
          starterCode: "# Tic-Tac-Toe positions:\n# 1 | 2 | 3\n# 4 | 5 | 6\n# 7 | 8 | 9\n# O is at positions 2 and 5\n# Where should O go to make 3 in a row?\n",
          expectedOutput: "8",
          hint: "O is at 2 and 5. To complete the column (2, 5, 8), O needs position 8!",
          hintZh: "O在2和5，要完成竖列（2,5,8），O需要位置8！",
          solution: "print(8)",
        },
      },
      {
        type: "code",
        emoji: "⭕",
        content: `## ⭕ Exercise 1: Tic-Tac-Toe AI · 井字棋AI

🎯 **What you'll learn:** How to build game AI that makes strategic decisions using rules and board analysis.
学习目标：如何用规则和棋盘分析构建能做出战略决策的游戏AI。

Random vs Smart AI — see the difference strategy makes! 🤖 The smart AI checks: can I win? → can I block? → take center? → random. This priority system is rule-based AI.

🔑 **Key things to notice:**
- A 2D list represents the game board
- Smart AI follows a priority: win → block → center → random
- A function checks all 8 possible winning lines

👀 Watch Random AI vs Smart AI — who wins more?`,
        code: `# ⭕ Tic-Tac-Toe: Random AI vs Smart AI
# 井字棋：随机AI vs 聪明AI

import random

def create_board():
    return [" "] * 9

def show_board(board):
    for i in range(0, 9, 3):
        row = f" {board[i]} | {board[i+1]} | {board[i+2]} "
        print(row)
        if i < 6:
            print("-----------")

def empty_spots(board):
    return [i for i in range(9) if board[i] == " "]

def check_winner(board):
    wins = [(0,1,2),(3,4,5),(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6)]
    for a, b, c in wins:
        if board[a] == board[b] == board[c] != " ":
            return board[a]
    if " " not in board:
        return "Draw"
    return None

# 🎲 Random AI — just picks randomly
def random_ai(board, symbol):
    return random.choice(empty_spots(board))

# 🧠 Smart AI — uses strategy!
def smart_ai(board, symbol):
    opponent = "X" if symbol == "O" else "O"
    
    # 1. Win if possible
    for pos in empty_spots(board):
        board[pos] = symbol
        if check_winner(board) == symbol:
            board[pos] = " "
            return pos
        board[pos] = " "
    
    # 2. Block opponent's win
    for pos in empty_spots(board):
        board[pos] = opponent
        if check_winner(board) == opponent:
            board[pos] = " "
            return pos
        board[pos] = " "
    
    # 3. Take center
    if board[4] == " ":
        return 4
    
    # 4. Take a corner
    corners = [p for p in [0, 2, 6, 8] if board[p] == " "]
    if corners:
        return random.choice(corners)
    
    # 5. Take any spot
    return random.choice(empty_spots(board))

# Play a game!
def play_game(ai1, ai1_name, ai2, ai2_name):
    board = create_board()
    print(f"\\n🎮 {ai1_name} (X) vs {ai2_name} (O)\\n")
    
    for turn in range(9):
        if turn % 2 == 0:
            pos = ai1(board, "X")
            board[pos] = "X"
        else:
            pos = ai2(board, "O")
            board[pos] = "O"
        
        winner = check_winner(board)
        if winner:
            show_board(board)
            if winner == "Draw":
                print("\\n🤝 It's a draw!")
            elif winner == "X":
                print(f"\\n🏆 {ai1_name} wins!")
            else:
                print(f"\\n🏆 {ai2_name} wins!")
            return winner
    
    show_board(board)
    print("\\n🤝 Draw!")
    return "Draw"

# Play 5 games: Smart vs Random
print("=" * 30)
print("🏟️ AI TOURNAMENT!")
print("=" * 30)

results = {"Smart": 0, "Random": 0, "Draw": 0}
for game in range(5):
    print(f"\\n--- Game {game + 1} ---")
    winner = play_game(smart_ai, "🧠 Smart AI", random_ai, "🎲 Random AI")
    if winner == "X":
        results["Smart"] += 1
    elif winner == "O":
        results["Random"] += 1
    else:
        results["Draw"] += 1

print(f"\\n{'=' * 30}")
print("📊 FINAL RESULTS:")
print(f"  🧠 Smart AI wins: {results['Smart']}")
print(f"  🎲 Random AI wins: {results['Random']}")
print(f"  🤝 Draws: {results['Draw']}")`,
      },
      {
        type: "code",
        emoji: "✊",
        content: `## ✊ Exercise 2: Rock-Paper-Scissors AI · 石头剪刀布AI

🎯 **What you'll learn:** How to build an AI that tracks patterns and predicts your next move.
学习目标：如何构建一个追踪模式并预测你下一步行动的AI。

This AI gets smarter over time! 📈 It remembers your history, finds your habits, and exploits them. This is basic machine learning: learn from data → make predictions.

🔑 **Key things to notice:**
- A frequency dictionary tracks how often you play each move
- The AI picks the counter to your most likely move
- Humans are surprisingly predictable!

👀 Watch how the AI adapts to patterns over many rounds!`,
        code: `# ✊ Rock Paper Scissors: Pattern-Learning AI
# 石头剪刀布：学习模式的AI

import random

def get_counter(move):
    """Return the move that beats the given move"""
    counters = {"rock": "paper", "paper": "scissors", "scissors": "rock"}
    return counters[move]

def random_ai():
    """Dumb AI: picks randomly"""
    return random.choice(["rock", "paper", "scissors"])

def smart_ai(history):
    """Smart AI: analyzes your patterns and predicts!"""
    if len(history) < 3:
        return random_ai()  # Not enough data yet
    
    # Count what human plays most
    counts = {"rock": 0, "paper": 0, "scissors": 0}
    for move in history:
        counts[move] += 1
    
    # Predict: human will play their most common move
    predicted = max(counts, key=counts.get)
    
    # Counter the prediction!
    return get_counter(predicted)

def who_wins(p1, p2):
    """Return 1 if p1 wins, 2 if p2 wins, 0 if draw"""
    if p1 == p2:
        return 0
    if get_counter(p2) == p1:
        return 1
    return 2

# Simulate a human who favors rock (70% rock, 20% paper, 10% scissors)
def biased_human():
    r = random.random()
    if r < 0.7:
        return "rock"
    elif r < 0.9:
        return "paper"
    return "scissors"

# Run tournament!
print("✊📄✂️ ROCK PAPER SCISSORS AI BATTLE!\\n")

history = []
smart_wins = 0
random_wins = 0
rounds = 15

for i in range(rounds):
    human_move = biased_human()
    history.append(human_move)
    
    s_move = smart_ai(history)
    r_move = random_ai()
    
    s_result = who_wins(s_move, human_move)
    r_result = who_wins(r_move, human_move)
    
    if s_result == 1:
        smart_wins += 1
    if r_result == 1:
        random_wins += 1
    
    if (i + 1) % 5 == 0:
        print(f"After {i+1} rounds:")
        print(f"  🧠 Smart AI wins: {smart_wins}")
        print(f"  🎲 Random AI wins: {random_wins}\\n")

print("📊 Smart AI learns your patterns over time!")
print(f"Smart AI figured out you love 'rock' and started picking 'paper'! 🧠")`,
      },
      {
        type: "challenge",
        content: "🏆 Challenge: AI Tournament · AI锦标赛",
        challenge: {
          title: "🏆 Ultimate AI Tournament · 终极AI锦标赛",
          description: "Create a Rock-Paper-Scissors tournament with 3 AIs: Random AI (picks randomly), Counter AI (always counters the opponent's LAST move), and Favorite AI (always picks 'rock'). Run 10 rounds, track wins for each.\n创建石头剪刀布锦标赛，3个AI：随机AI、反击AI（总是克制对手上一步）、固执AI（总是出石头）。10轮，记录胜场。",
          starterCode: "import random\n\ndef get_counter(move):\n    return {\"rock\": \"paper\", \"paper\": \"scissors\", \"scissors\": \"rock\"}[move]\n\ndef who_wins(m1, m2):\n    if m1 == m2: return 0\n    if get_counter(m2) == m1: return 1\n    return 2\n\ndef random_ai(last_opponent_move):\n    return random.choice([\"rock\", \"paper\", \"scissors\"])\n\ndef counter_ai(last_opponent_move):\n    # TODO: If there's a last move, counter it. Otherwise random.\n    pass\n\ndef favorite_ai(last_opponent_move):\n    # TODO: Always returns \"rock\"\n    pass\n\n# Run tournament: each AI plays each other AI 10 rounds\nais = {\"Random\": random_ai, \"Counter\": counter_ai, \"Favorite\": favorite_ai}\nscores = {name: 0 for name in ais}\n\nfor name1 in ais:\n    for name2 in ais:\n        if name1 >= name2:\n            continue\n        last1, last2 = None, None\n        for r in range(10):\n            m1 = ais[name1](last2)\n            m2 = ais[name2](last1)\n            result = who_wins(m1, m2)\n            if result == 1:\n                scores[name1] += 1\n            elif result == 2:\n                scores[name2] += 1\n            last1, last2 = m1, m2\n\nprint(\"🏆 TOURNAMENT RESULTS:\")\nfor name, score in sorted(scores.items(), key=lambda x: -x[1]):\n    print(f\"  {name}: {score} wins\")\n",
          hint: "counter_ai: if last_opponent_move is not None, return get_counter(last_opponent_move), else random. favorite_ai: just return \"rock\".",
          solution: "import random\n\ndef get_counter(move):\n    return {\"rock\": \"paper\", \"paper\": \"scissors\", \"scissors\": \"rock\"}[move]\n\ndef who_wins(m1, m2):\n    if m1 == m2: return 0\n    if get_counter(m2) == m1: return 1\n    return 2\n\ndef random_ai(last_opponent_move):\n    return random.choice([\"rock\", \"paper\", \"scissors\"])\n\ndef counter_ai(last_opponent_move):\n    if last_opponent_move is not None:\n        return get_counter(last_opponent_move)\n    return random.choice([\"rock\", \"paper\", \"scissors\"])\n\ndef favorite_ai(last_opponent_move):\n    return \"rock\"\n\nais = {\"Random\": random_ai, \"Counter\": counter_ai, \"Favorite\": favorite_ai}\nscores = {name: 0 for name in ais}\n\nfor name1 in ais:\n    for name2 in ais:\n        if name1 >= name2:\n            continue\n        last1, last2 = None, None\n        for r in range(10):\n            m1 = ais[name1](last2)\n            m2 = ais[name2](last1)\n            result = who_wins(m1, m2)\n            if result == 1:\n                scores[name1] += 1\n            elif result == 2:\n                scores[name2] += 1\n            last1, last2 = m1, m2\n\nprint(\"🏆 TOURNAMENT RESULTS:\")\nfor name, score in sorted(scores.items(), key=lambda x: -x[1]):\n    print(f\"  {name}: {score} wins\")",
          expectedOutput: "🏆 TOURNAMENT RESULTS:\n  Counter: 10 wins\n  Random: 5 wins\n  Favorite: 0 wins",
        },
      },
      {
        type: "quiz",
        content: "🎮 Game AI Quiz! · 游戏AI测验！",
        quiz: QUIZ_DATA["5-2"],
      },
    ],
  },

  {
    id: "5-3",
    moduleId: "area-5",
    title: "Generative Algorithms",
    subtitle: "How AI creates new things · 生成算法与马尔可夫链 → 🎨 AI Artist!",
    icon: "🎨",
    xp: 40,
    duration: "25 min",
    order: 3,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🎨",
        content: `## 🎨 AI Artist! AI艺术家！

**🐍 Py:** "Wait... code can make ART?!"

**🤖 Botty:** "Absolutely! Some of the most amazing art is made by algorithms!"

Think about it:

- 🎵 Music is patterns of notes

- 📝 Poetry is patterns of words

- 🎨 Art is patterns of shapes and colors

And what are computers GREAT at? **Patterns!**

Today you'll build:
1. 🖼️ An ASCII Art Generator (rules + randomness)
2. 📝 An AI Poet (Markov chains — how AI generates text!)
3. 🎨 A Creative Studio (art + poetry + rhythm!)

**The magic formula:** Rules + Randomness = Creativity! ✨

规则 + 随机 = 创造力！`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Key Concepts: Generative Algorithms · 关键概念：生成算法",
        concept: {
          title: "🎨 Generative Algorithms: Code that Creates",
          titleZh: "生成算法：会创作的代码",
          syntaxCards: [
            {
              symbol: "random.choice()",
              name: "Controlled Randomness",
              nameZh: "可控的随机性",
              emoji: "🎲",
              description: "The spark of creativity 🎲 — pick random elements from a curated list. Not truly random — you control WHAT it picks from!",
              example: "import random\\ncolors = [\"🔴\", \"🔵\", \"🟢\", \"🟡\"]\\npattern = [random.choice(colors) for _ in range(5)]\\nprint(\" \".join(pattern))",
            },
            {
              symbol: "Markov Chain",
              name: "Markov Chain",
              nameZh: "马尔可夫链",
              emoji: "🔗",
              description: "The secret behind AI text generation 🔗 — predict the NEXT word based on the CURRENT word. Like auto-complete on your phone!",
              example: "# If current word is \"the\"\\n# Next might be: cat(40%), dog(30%), end(30%)\\nnext_word = random.choice([\"cat\",\"cat\",\"dog\",\"end\"])",
            },
            {
              symbol: "template + random",
              name: "Template Generation",
              nameZh: "模板生成",
              emoji: "📋",
              description: "Structure + randomness 📋 — define the SHAPE (template), then fill in random details. Like Mad Libs for art!",
              example: "templates = [\"{adj} {noun} {verb}\"]\\nadj = random.choice([\"bright\",\"dark\"])\\n# \"bright moon shines\"",
            },
            {
              symbol: "for + random",
              name: "Procedural Generation",
              nameZh: "程序化生成",
              emoji: "🏗️",
              description: "Build things step by step with randomness 🏗️ — each step adds a random piece. Used in game worlds, art, and music!",
              example: "for row in range(5):\\n    line = \"\"\\n    for col in range(10):\\n        line += random.choice(\"*. \")\\n    print(line)",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "import random", explanation: "Our randomness engine — the source of creativity", explanationZh: "随机引擎 — 创造力的源泉" },
              { code: "def generate_line(words):", explanation: "Generate one line of poetry from word lists", explanationZh: "从词库生成一行诗" },
              { code: "    template = random.choice(templates)", explanation: "Pick a random sentence structure", explanationZh: "随机选择句式结构" },
              { code: "    for slot in template:", explanation: "Fill each slot in the template", explanationZh: "填充模板中的每个空位" },
              { code: "        word = random.choice(words[slot])", explanation: "Pick a random word for this slot", explanationZh: "为此空位选一个随机词" },
              { code: "    return filled_line", explanation: "Return the generated line of poetry!", explanationZh: "返回生成的诗句！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Warm-Up: Random Art · 热身：随机艺术

What does this code create?

\`\`\`python
import random
symbols = ["★", "·", "○"]
for row in range(3):
    line = ""
    for col in range(5):
        line += random.choice(symbols)
    print(line)
\`\`\`

Try it! Each run creates different art!`,
        exercise: {
          prompt: "Use random.choice() to create a line of 8 random symbols from the list ['★', '·', '○'] and print it.",
          promptZh: "用 random.choice() 创建一行8个随机符号，从列表 ['★', '·', '○'] 中选，然后打印。",
          starterCode: "import random\nsymbols = [\"*\", \".\", \"o\"]\n# Create a line of 8 random symbols\nline = \"\"\n# Use a loop to add 8 random symbols to line\n",
          expectedOutput: "*.o.**o.",
          hint: "Use a for loop: for i in range(8): line += random.choice(symbols). Then print(line)!",
          hintZh: "用for循环：for i in range(8): line += random.choice(symbols)。然后 print(line)！",
          solution: "import random\nrandom.seed(42)\nsymbols = [\"*\", \".\", \"o\"]\nline = \"\"\nfor i in range(8):\n    line += random.choice(symbols)\nprint(line)",
        },
      },
      {
        type: "code",
        emoji: "🖼️",
        content: `## 🖼️ Exercise 1: ASCII Art Generator · ASCII艺术生成器

🎯 **What you'll learn:** How to use procedural generation rules to create randomized art.
学习目标：如何用过程式生成规则创建随机化的艺术。

Procedural generation is how Minecraft creates infinite worlds! 🌍 Each layer follows rules (sky → mountains → trees → ground), and randomness makes each picture unique.

🔑 **Key things to notice:**
- Rules define what can appear at each layer/row
- \`random.choice()\` adds variety within the rules
- Layer-by-layer building creates structured but unique art

👀 Run it multiple times — every landscape is different!`,
        code: `# 🖼️ ASCII Landscape Art Generator

# ASCII 风景艺术生成器

import random
random.seed(42)  # Same art each time (remove for random!)

def generate_sky(width):
    """Generate a sky with stars and moon"""
    sky = ""
    for i in range(width):
        r = random.random()
        if r < 0.05:
            sky += "★"
        elif r < 0.08:
            sky += "·"
        else:
            sky += " "
    return sky

def generate_mountains(width):
    """Generate a mountain range"""
    height = [0] * width
    # Create peaks
    for peak in range(3):
        center = random.randint(2, width - 3)
        peak_h = random.randint(3, 5)
        for i in range(max(0, center-3), min(width, center+4)):
            h = peak_h - abs(i - center)
            height[i] = max(height[i], max(0, h))
    
    lines = []
    max_h = max(height)
    for row in range(max_h, 0, -1):
        line = ""
        for col in range(width):
            if height[col] >= row:
                line += random.choice(["^", "/", "\\\\"])
            else:
                line += " "
        lines.append(line)
    return lines

def generate_ground(width):
    """Generate ground with grass and flowers"""
    ground = ""
    for i in range(width):
        r = random.random()
        if r < 0.15:
            ground += random.choice(["*", ",", "'"])
        elif r < 0.05:
            ground += "Y"  # tree
        else:
            ground += "_"
    return ground

# Generate the art!
WIDTH = 35
print("=" * WIDTH)
print("  🖼️ RANDOM LANDSCAPE ART")
print("=" * WIDTH)
print()

# Sky (3 rows)
for _ in range(3):
    print(generate_sky(WIDTH))

# Moon
moon_pos = random.randint(5, WIDTH - 5)
moon_line = " " * moon_pos + "🌙"
print(moon_line)

# Mountains
for line in generate_mountains(WIDTH):
    print(line)

# Ground (2 rows)
for _ in range(2):
    print(generate_ground(WIDTH))

print()
print("🎨 Each run creates unique art! 每次运行都是独一无二的艺术！")`,
      },
      {
        type: "code",
        emoji: "📝",
        content: `## 📝 Exercise 2: AI Poet — Markov Chain Text Generator · AI诗人

🎯 **What you'll learn:** How Markov chains generate text by predicting the next word from learned patterns.
学习目标：如何用马尔可夫链通过学习到的模式预测下一个词来生成文本。

Before ChatGPT, this was THE technique for AI text! ✍️ The AI learns which words follow other words, then generates new text one word at a time. Simple but surprisingly poetic!

🔑 **Key things to notice:**
- A dictionary maps each word → list of words that follow it
- \`random.choice()\` picks the next word from options
- More training text = more natural output

👀 This is how real AI generates text — watch word-by-word creation!`,
        code: `# 📝 AI Poet: Markov Chain Text Generator

# AI诗人：马尔可夫链文本生成器

import random
random.seed(42)

# Training text — the AI learns word patterns from this
training_text = """
the cat sat on the mat
the dog ran in the park
a bright star shines in the dark
the moon glows in the night sky
a cat sleeps under the bright moon
the wind blows through the dark night
"""

def build_chain(text):
    """Build a Markov chain from text"""
    words = text.lower().split()
    chain = {}
    
    for i in range(len(words) - 1):
        current = words[i]
        next_word = words[i + 1]
        
        if current not in chain:
            chain[current] = []
        chain[current].append(next_word)
    
    return chain

def generate_poem(chain, start_word, length):
    """Generate text using the Markov chain"""
    current = start_word.lower()
    result = [current]
    
    for _ in range(length - 1):
        if current in chain:
            next_word = random.choice(chain[current])
            result.append(next_word)
            current = next_word
        else:
            # Dead end — pick a random word to continue
            current = random.choice(list(chain.keys()))
            result.append(current)
    
    return " ".join(result)

# Build the chain
chain = build_chain(training_text)

# Show what the AI learned
print("🧠 AI's Word Memory (Markov Chain):")
print("-" * 35)
for word in sorted(chain.keys())[:8]:
    options = chain[word]
    print(f'  After "{word}" → {options}')

print()
print("📝 AI GENERATED POEMS:")
print("=" * 35)

starters = ["the", "a", "the", "a"]
for i, start in enumerate(starters):
    poem_line = generate_poem(chain, start, 6)
    print(f"  {poem_line}")

print()
print("✨ Each poem is unique!")
print("📊 The AI picks words based on what USUALLY follows!")
print("🔗 This is called a Markov Chain — the basis of text generation!")`,
      },
      {
        type: "challenge",
        content: "🏆 Challenge: AI Creative Studio · AI创意工作室",
        challenge: {
          title: "🎨 AI Creative Studio · AI创意工作室",
          description: "Build a creative studio that generates both ASCII art patterns AND poetry! Create a function that generates a framed ASCII pattern (5 rows, 10 columns of random symbols from ['#', '.', '*', 'o']), and a function that generates a 4-line poem using templates.\n建造一个AI创意工作室！生成ASCII图案（5行10列随机符号）和模板诗歌（4行）。",
          starterCode: "import random\nrandom.seed(42)\n\ndef generate_art(rows, cols):\n    \"\"\"Generate framed ASCII art\"\"\"\n    symbols = [\"#\", \".\", \"*\", \"o\"]\n    print(\"+\" + \"-\" * cols + \"+\")\n    for r in range(rows):\n        line = \"|\"\n        for c in range(cols):\n            # TODO: add a random symbol from the list\n            pass\n        line += \"|\"\n        print(line)\n    print(\"+\" + \"-\" * cols + \"+\")\n\ndef generate_poem():\n    \"\"\"Generate a 4-line poem using templates\"\"\"\n    adjectives = [\"bright\", \"dark\", \"silent\", \"gentle\"]\n    nouns = [\"moon\", \"star\", \"wind\", \"dream\"]\n    verbs = [\"shines\", \"dances\", \"whispers\", \"glows\"]\n    \n    templates = [\n        \"The {adj} {noun} {verb}\",\n        \"A {noun} {verb} tonight\",\n    ]\n    \n    for i in range(4):\n        # TODO: pick random template, fill in random words, print it\n        pass\n\nprint(\"🎨 AI CREATIVE STUDIO\")\nprint(\"=\" * 25)\nprint(\"\\n🖼️ Generated Art:\")\ngenerate_art(5, 10)\nprint(\"\\n📝 Generated Poem:\")\ngenerate_poem()\n",
          hint: "In generate_art: line += random.choice(symbols). In generate_poem: use .format(adj=random.choice(adjectives), noun=..., verb=...)",
          solution: "import random\nrandom.seed(42)\n\ndef generate_art(rows, cols):\n    symbols = [\"#\", \".\", \"*\", \"o\"]\n    print(\"+\" + \"-\" * cols + \"+\")\n    for r in range(rows):\n        line = \"|\"\n        for c in range(cols):\n            line += random.choice(symbols)\n        line += \"|\"\n        print(line)\n    print(\"+\" + \"-\" * cols + \"+\")\n\ndef generate_poem():\n    adjectives = [\"bright\", \"dark\", \"silent\", \"gentle\"]\n    nouns = [\"moon\", \"star\", \"wind\", \"dream\"]\n    verbs = [\"shines\", \"dances\", \"whispers\", \"glows\"]\n    templates = [\n        \"The {adj} {noun} {verb}\",\n        \"A {noun} {verb} tonight\",\n    ]\n    for i in range(4):\n        t = random.choice(templates)\n        line = t.format(\n            adj=random.choice(adjectives),\n            noun=random.choice(nouns),\n            verb=random.choice(verbs)\n        )\n        print(f\"  {line}\")\n\nprint(\"🎨 AI CREATIVE STUDIO\")\nprint(\"=\" * 25)\nprint(\"\\n🖼️ Generated Art:\")\ngenerate_art(5, 10)\nprint(\"\\n📝 Generated Poem:\")\ngenerate_poem()",
          expectedOutput: "🎨 AI CREATIVE STUDIO\n=========================\n\n🖼️ Generated Art:\n+----------+\n|o#.**.#o.*|\n|#o*..o*#.o|\n|*.#o.#*.o#|\n|o.*#.o#*..|\n|#.o*.*o#.o|\n+----------+\n\n📝 Generated Poem:\n  The bright moon shines\n  A star dances tonight\n  The silent wind whispers\n  A dream glows tonight",
        },
      },
      {
        type: "quiz",
        content: "🎨 AI Artist Quiz! · AI艺术家测验！",
        quiz: QUIZ_DATA["5-3"],
      },
    ],
  },

  {
    id: "5-4",
    moduleId: "area-5",
    title: "Classification & Prediction",
    subtitle: "How AI predicts from data · 分类、回归与KNN → 🔮 Prediction Machine!",
    icon: "🔮",
    xp: 45,
    duration: "28 min",
    order: 4,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🔮",
        content: `## 🔮 Prediction Machine! 预言机器！

**🐍 Py:** "Can code really predict the future?!"

**🤖 Botty:** "Not magic — MATH! If you study enough past data, you can spot patterns."

Think about it:

- 📈 Study 2 hours → probably score 70. Study 5 hours → probably score 90

- 🌤️ Sunny for 3 days in a row → probably sunny tomorrow too

- 🎮 A player always goes left → they'll probably go left next time

**The idea:** Look at past data → find the pattern → extend it into the future!

Today you'll build:
1. 📊 A Grade Predictor (study time → expected score)
2. 🌤️ A Weather Predictor (history → tomorrow's weather)
3. 🔮 A Crystal Ball (find ANY pattern in data!)

数据中隐藏着未来的秘密！`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Key Concepts: Prediction & Data Patterns · 关键概念：预测与数据规律",
        concept: {
          title: "🔮 Prediction: Finding Patterns in Data",
          titleZh: "预测：在数据中发现规律",
          syntaxCards: [
            {
              symbol: "trend line",
              name: "Linear Trend (Simple Regression)",
              nameZh: "线性趋势（简单回归）",
              emoji: "📈",
              description: "Drawing a straight line through data points 📈 — if study time goes up, scores go up proportionally. y = mx + b is the formula!",
              example: "# score = rate * hours + base\\nrate = 10  # points per hour\\nbase = 50  # starting score\\nscore = rate * hours + base",
            },
            {
              symbol: "average",
              name: "Mean & Average",
              nameZh: "平均数",
              emoji: "⚖️",
              description: "The center of your data ⚖️ — add all values and divide by count. A simple but powerful prediction: tomorrow will be close to the average!",
              example: "data = [70, 80, 75, 85, 90]\\navg = sum(data) / len(data)  # 80\\nprint(f\"Predicted: {avg}\")",
            },
            {
              symbol: "distance",
              name: "K-Nearest Neighbors (KNN)",
              nameZh: "K近邻算法",
              emoji: "📍",
              description: "Find the most similar past examples 📍 — if you studied 4 hours, look at people who studied 3-5 hours. What did THEY score? That's your prediction!",
              example: "# Find closest data points:\\n# 3h→75, 4h→80, 5h→85\\n# Your 4h → predict ~80!",
            },
            {
              symbol: "frequency",
              name: "Most Common (Mode)",
              nameZh: "众数（最常见）",
              emoji: "📊",
              description: "Count occurrences 📊 — the most frequent outcome is often the best prediction. If it rained 8/10 cloudy days, predict rain on cloudy days!",
              example: "weather = [\"sun\",\"sun\",\"rain\",\"sun\",\"sun\"]\\nfrom collections import Counter\\nmost_common = Counter(weather).most_common(1)\\n# sun appears most → predict sun",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "def predict_score(hours):", explanation: "Prediction function: input → output", explanationZh: "预测函数：输入 → 输出" },
              { code: "    # Learn from data", explanation: "First, analyze the training data", explanationZh: "首先，分析训练数据" },
              { code: "    rate = calculate_rate(data)", explanation: "Find the pattern: how much does score change per hour?", explanationZh: "找规律：每小时分数变化多少？" },
              { code: "    base = calculate_base(data)", explanation: "Find the starting point", explanationZh: "找到起始点" },
              { code: "    prediction = rate * hours + base", explanation: "Apply the pattern to new input!", explanationZh: "把规律应用到新输入上！" },
              { code: "    return prediction", explanation: "Return the predicted score!", explanationZh: "返回预测分数！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Warm-Up: Spot the Pattern · 热身：发现规律

Look at this data:

| Study Hours | Test Score |
|:-----------:|:---------:|
| 1           | 55        |
| 2           | 65        |
| 3           | 75        |
| 4           | 85        |
| 5           | ?         |

What's the pattern? Each extra hour adds _____ points!`,
        exercise: {
          prompt: "The pattern is +10 per hour, starting at 45. Predict the score for 5 hours and print it.",
          promptZh: "规律是每小时+10分，起始45。预测5小时的分数并打印。",
          starterCode: "# Pattern: score = 10 * hours + 45\nhours = 5\n# Calculate and print the predicted score\n",
          expectedOutput: "95",
          hint: "score = 10 * hours + 45. Then print(score)!",
          hintZh: "score = 10 * hours + 45。然后 print(score)！",
          solution: "hours = 5\nscore = 10 * hours + 45\nprint(score)",
        },
      },
      {
        type: "code",
        emoji: "📊",
        content: `## 📊 Exercise 1: Grade Predictor · 成绩预测器

🎯 **What you'll learn:** How to build a simple linear regression model that predicts outcomes from data.
学习目标：如何构建一个简单的线性回归模型，从数据中预测结果。

This is real machine learning! 📈 Given past data about study hours and grades, the AI finds the pattern (a line: y = mx + b) and predicts future grades.

🔑 **Key things to notice:**
- Training data = pairs of (input, output) examples
- The model finds slope and intercept (best-fit line)
- Prediction = plug new input into the learned formula

👀 Build the predictor and test it with different study hours!`,
        code: `# 📊 Grade Predictor: Study Time → Test Score
# 成绩预测器：学习时间 → 考试分数

# Training data: (hours studied, score)
data = [
    (1, 52), (1.5, 58), (2, 63),
    (2.5, 70), (3, 74), (3.5, 78),
    (4, 85), (4.5, 88), (5, 93),
]

def calculate_trend(data):
    """Find the trend line: score = rate * hours + base"""
    n = len(data)
    sum_x = sum(h for h, s in data)
    sum_y = sum(s for h, s in data)
    sum_xy = sum(h * s for h, s in data)
    sum_x2 = sum(h * h for h, s in data)
    
    # Linear regression formula
    rate = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x)
    base = (sum_y - rate * sum_x) / n
    return rate, base

def predict(hours, rate, base):
    """Predict score for given hours"""
    score = rate * hours + base
    return max(0, min(100, score))  # Clamp to 0-100

# Learn from data!
rate, base = calculate_trend(data)
print("📊 GRADE PREDICTOR")
print("=" * 35)
print(f"📐 Formula: score = {rate:.1f} × hours + {base:.1f}")
print()

# Show predictions vs actual
print("Training Data vs Predictions:")
print(f"{'Hours':>6} {'Actual':>8} {'Predicted':>10}")
print("-" * 26)
for hours, actual in data:
    pred = predict(hours, rate, base)
    diff = abs(pred - actual)
    print(f"{hours:>6.1f} {actual:>8} {pred:>10.1f} {'✓' if diff < 5 else '✗'}")

# Predict for new values!
print()
print("🔮 NEW PREDICTIONS:")
for hours in [0.5, 3, 6, 8]:
    score = predict(hours, rate, base)
    print(f"  Study {hours}h → Score: {score:.0f}")

print()
print("💡 More study time = higher scores! The data proves it!")`,
      },
      {
        type: "code",
        emoji: "🌤️",
        content: `## 🌤️ Exercise 2: Weather Predictor · 天气预测器

🎯 **What you'll learn:** How to use historical data and probability to make predictions.
学习目标：如何使用历史数据和概率来做出预测。

Real weather apps use the same idea with WAY more data! 🌦️ Look at past patterns, calculate probabilities, make educated guesses. Your model is a baby version of what meteorologists use.

🔑 **Key things to notice:**
- Historical data stored as past observations
- Probability = count of event / total observations
- The prediction is the most likely outcome based on history

👀 Use historical patterns to predict tomorrow's weather!`,
        code: `# 🌤️ Weather Predictor: Pattern-Based
# 天气预测器：基于模式

import random
random.seed(42)

# Historical weather data (14 days)
history = ["sunny", "sunny", "cloudy", "rainy", "cloudy", 
           "sunny", "sunny", "sunny", "cloudy", "rainy",
           "rainy", "cloudy", "sunny", "sunny"]

def analyze_patterns(history):
    """What usually follows each weather type?"""
    transitions = {}
    
    for i in range(len(history) - 1):
        today = history[i]
        tomorrow = history[i + 1]
        
        if today not in transitions:
            transitions[today] = []
        transitions[today].append(tomorrow)
    
    return transitions

def predict_next(transitions, current):
    """Predict tomorrow based on transition patterns"""
    if current not in transitions:
        return "unknown", 0
    
    options = transitions[current]
    # Count each outcome
    counts = {}
    for weather in options:
        counts[weather] = counts.get(weather, 0) + 1
    
    # Most common = prediction
    prediction = max(counts, key=counts.get)
    confidence = counts[prediction] / len(options) * 100
    
    return prediction, confidence

# Analyze!
transitions = analyze_patterns(history)

print("🌤️ WEATHER PREDICTOR")
print("=" * 40)

# Show patterns
print("\\n📊 Weather Transition Patterns:")
emoji_map = {"sunny": "☀️", "cloudy": "☁️", "rainy": "🌧️"}

for weather in ["sunny", "cloudy", "rainy"]:
    if weather in transitions:
        next_days = transitions[weather]
        counts = {}
        for w in next_days:
            counts[w] = counts.get(w, 0) + 1
        total = len(next_days)
        
        print(f"\\n  After {emoji_map[weather]} {weather}:")
        for w, count in sorted(counts.items(), key=lambda x: -x[1]):
            pct = count / total * 100
            bar = "█" * int(pct / 10)
            print(f"    → {emoji_map[w]} {w}: {pct:.0f}% {bar}")

# Predict tomorrow!
today = history[-1]
prediction, confidence = predict_next(transitions, today)

print(f"\\n🔮 PREDICTION:")
print(f"  Today: {emoji_map[today]} {today}")
print(f"  Tomorrow: {emoji_map[prediction]} {prediction}")
print(f"  Confidence: {confidence:.0f}%")
print(f"\\n💡 The AI learned that after {today}, {prediction} is most likely!")`,
      },
      {
        type: "challenge",
        content: "🏆 Challenge: Crystal Ball Predictor · 预言水晶球",
        challenge: {
          title: "🔮 Crystal Ball: KNN Predictor · 水晶球：KNN预测器",
          description: "Build a K-Nearest Neighbors predictor! Given data points of (study_hours, score), predict the score for a new student by averaging the K=3 closest data points.\n建一个KNN预测器！给定（学习时间，分数）数据，通过平均最近的K=3个数据点来预测新学生的分数。",
          starterCode: "# KNN Predictor\ndata = [\n    (1, 50), (2, 65), (2.5, 70),\n    (3, 75), (4, 85), (5, 95),\n]\n\ndef knn_predict(data, new_hours, k=3):\n    \"\"\"Predict score using K nearest neighbors\"\"\"\n    # Step 1: Calculate distance from new_hours to each data point\n    distances = []\n    for hours, score in data:\n        dist = abs(hours - new_hours)\n        distances.append((dist, score))\n    \n    # Step 2: Sort by distance (closest first)\n    distances.sort()\n    \n    # Step 3: Take the K closest and average their scores\n    # TODO: Get the K closest scores and calculate average\n    closest_scores = []  # fill this!\n    \n    prediction = 0  # calculate average!\n    return prediction\n\n# Test predictions\nfor hours in [1.5, 3.5, 4.5]:\n    score = knn_predict(data, hours, k=3)\n    print(f\"Study {hours}h → Predicted score: {score:.0f}\")\n",
          hint: "closest_scores = [score for dist, score in distances[:k]]. Then prediction = sum(closest_scores) / len(closest_scores).",
          solution: "data = [\n    (1, 50), (2, 65), (2.5, 70),\n    (3, 75), (4, 85), (5, 95),\n]\n\ndef knn_predict(data, new_hours, k=3):\n    distances = []\n    for hours, score in data:\n        dist = abs(hours - new_hours)\n        distances.append((dist, score))\n    \n    distances.sort()\n    \n    closest_scores = [score for dist, score in distances[:k]]\n    prediction = sum(closest_scores) / len(closest_scores)\n    return prediction\n\nfor hours in [1.5, 3.5, 4.5]:\n    score = knn_predict(data, hours, k=3)\n    print(f\"Study {hours}h -> Predicted score: {score:.0f}\")",
          expectedOutput: "Study 1.5h -> Predicted score: 62\nStudy 3.5h -> Predicted score: 78\nStudy 4.5h -> Predicted score: 85",
        },
      },
      {
        type: "quiz",
        content: "🔮 Prediction Quiz! · 预测测验！",
        quiz: QUIZ_DATA["5-4"],
      },
    ],
  },

  {
    id: "5-5",
    moduleId: "area-5",
    title: "AI Ethics & Bias",
    subtitle: "When AI goes wrong · AI伦理、偏见与公平性 → 🕵️ AI Detective!",
    icon: "🤖",
    xp: 45,
    duration: "28 min",
    order: 5,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🤖",
        content: `## 🤖 AI Detective! AI侦探！

**🐍 Py:** "AI is always fair... right?"

**🤖 Botty:** "Actually... NO. AI can be VERY unfair. And that's a HUGE problem."

Here's a scary truth:

- 🏥 AI denied healthcare to sick people because of their race

- 👮 AI wrongly identified innocent people as criminals

- 💼 AI rejected job applications because of names that "sounded foreign"

**Why?** Because AI learns from DATA — and data can be BIASED!

Today you become an **AI Detective** 🔍:
1. 🔎 Build a Bias Detector (find unfairness in data)
2. ⚖️ Create an AI Judge (and discover its flaws!)
3. 🏛️ Run an AI Court (put AI on trial!)

**Your mission:** Make AI FAIR! 让AI变得公平！`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Key Concepts: AI Ethics & Bias · 关键概念：AI伦理与偏见",
        concept: {
          title: "🤖 AI Ethics: Fairness, Bias & Accountability",
          titleZh: "AI伦理：公平、偏见与责任",
          syntaxCards: [
            {
              symbol: "bias",
              name: "AI Bias",
              nameZh: "AI偏见",
              emoji: "⚖️",
              description: "When AI treats some groups unfairly ⚖️ — usually because training data over/under-represents certain groups. Garbage in = garbage out!",
              example: "# Biased training data:\\n# 80% approved loans for Group A\\n# 20% approved loans for Group B\\n# AI learns: reject Group B! 😱",
            },
            {
              symbol: "fairness",
              name: "Fairness Metrics",
              nameZh: "公平性指标",
              emoji: "📏",
              description: "How to MEASURE fairness 📏 — compare approval rates, error rates, or outcomes across different groups. Equal treatment = fair!",
              example: "rate_a = approved_a / total_a\\nrate_b = approved_b / total_b\\nif abs(rate_a - rate_b) > 0.1:\\n    print(\"BIAS DETECTED! ⚠️\")",
            },
            {
              symbol: "transparency",
              name: "Explainability",
              nameZh: "可解释性",
              emoji: "🔍",
              description: "Can you explain WHY the AI made a decision? 🔍 — a fair AI should show its reasoning, not be a 'black box'!",
              example: "def explain_decision(data):\\n    reasons = []\\n    if data[\"score\"] > 80:\\n        reasons.append(\"High score\")\\n    print(f\"Reasons: {reasons}\")",
            },
            {
              symbol: "accountability",
              name: "AI Accountability",
              nameZh: "AI问责",
              emoji: "🏛️",
              description: "WHO is responsible when AI makes mistakes? 🏛️ — the developers, the company, or the users? This is a big ethical question!",
              example: "# AI rejects a loan application\\n# Who's responsible?\\n# → The data collectors?\\n# → The algorithm designers?\\n# → The company using it?",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "def check_bias(data, group_col, outcome_col):", explanation: "A function to detect bias in any dataset", explanationZh: "检测任何数据集中偏见的函数" },
              { code: "    groups = set(d[group_col] for d in data)", explanation: "Find all unique groups in the data", explanationZh: "找到数据中所有独特的群组" },
              { code: "    rates = {}", explanation: "Store approval rate for each group", explanationZh: "存储每个群组的通过率" },
              { code: "    for group in groups:", explanation: "Calculate rate for each group separately", explanationZh: "分别计算每个群组的比率" },
              { code: "        rate = approved / total", explanation: "Approval rate = approved ÷ total", explanationZh: "通过率 = 通过数 ÷ 总数" },
              { code: "    if max_rate - min_rate > 0.1:", explanation: "If difference > 10%, bias detected!", explanationZh: "如果差异 > 10%，检测到偏见！" },
            ],
          },
        },
      },
      {
        type: "interactive",
        content: `## 🎯 Warm-Up: Spot the Bias · 热身：发现偏见

An AI loan system approved these applications:

| Name | Group | Income | Approved? |
|------|-------|--------|-----------|
| Alice | A | $50K | ✅ Yes |
| Bob | B | $55K | ❌ No |
| Carol | A | $45K | ✅ Yes |
| David | B | $60K | ❌ No |

Bob and David have HIGHER income but got rejected! What might be the bias?`,
        exercise: {
          prompt: "Calculate the approval rate for Group A and Group B. Print both rates.",
          promptZh: "计算A组和B组的通过率，打印两个比率。",
          starterCode: "# Group A: 2 approved out of 2\n# Group B: 0 approved out of 2\nrate_a = 2 / 2\nrate_b = 0 / 2\n# Print both rates\n",
          expectedOutput: "Group A: 100%\nGroup B: 0%",
          hint: "print(f\"Group A: {int(rate_a * 100)}%\") and same for B!",
          hintZh: "print(f\"Group A: {int(rate_a * 100)}%\") B组也一样！",
          solution: "rate_a = 2 / 2\nrate_b = 0 / 2\nprint(f\"Group A: {int(rate_a * 100)}%\")\nprint(f\"Group B: {int(rate_b * 100)}%\")",
        },
      },
      {
        type: "code",
        emoji: "🔎",
        content: `## 🔎 Exercise 1: Bias Detector · 偏见检测器

🎯 **What you'll learn:** How to analyze data for potential bias using statistical comparison.
学习目标：如何通过统计比较来分析数据中的潜在偏见。

AI ethics is HUGE right now! ⚖️ Real AI systems can accidentally be biased because of their training data. Learning to detect bias is a superpower for the AI age.

🔑 **Key things to notice:**
- Compare outcomes across different groups to spot disparities
- Statistical metrics quantify fairness (or unfairness)
- No detector is perfect — it's about awareness

👀 Build the detector and discover hidden unfairness!`,
        code: `# 🔎 AI Bias Detector

# AI偏见检测器

# Simulated loan application data
applications = [
    {"name": "Alice", "group": "A", "income": 50000, "approved": True},
    {"name": "Bob", "group": "B", "income": 55000, "approved": False},
    {"name": "Carol", "group": "A", "income": 45000, "approved": True},
    {"name": "David", "group": "B", "income": 60000, "approved": False},
    {"name": "Eve", "group": "A", "income": 40000, "approved": True},
    {"name": "Frank", "group": "B", "income": 52000, "approved": True},
    {"name": "Grace", "group": "A", "income": 48000, "approved": True},
    {"name": "Henry", "group": "B", "income": 58000, "approved": False},
    {"name": "Iris", "group": "A", "income": 35000, "approved": False},
    {"name": "Jack", "group": "B", "income": 70000, "approved": True},
]

def detect_bias(data, group_key, outcome_key):
    """Detect bias by comparing approval rates across groups"""
    groups = {}
    
    for record in data:
        g = record[group_key]
        if g not in groups:
            groups[g] = {"total": 0, "positive": 0}
        groups[g]["total"] += 1
        if record[outcome_key]:
            groups[g]["positive"] += 1
    
    print("📊 Approval Rates by Group:")
    print("-" * 35)
    
    rates = {}
    for group, stats in sorted(groups.items()):
        rate = stats["positive"] / stats["total"]
        rates[group] = rate
        bar = "█" * int(rate * 20)
        print(f"  Group {group}: {rate:.0%} ({stats['positive']}/{stats['total']}) {bar}")
    
    # Check for significant difference
    rate_values = list(rates.values())
    max_diff = max(rate_values) - min(rate_values)
    
    print()
    if max_diff > 0.15:
        print(f"⚠️  BIAS DETECTED! Rate difference: {max_diff:.0%}")
        print("   This AI may be unfairly treating some groups!")
    else:
        print(f"✅ Rates are similar (difference: {max_diff:.0%})")
    
    return rates

def find_unfair_cases(data):
    """Find specific unfair cases"""
    print("\\n🔍 Investigating Individual Cases:")
    print("-" * 35)
    
    unfair = []
    for i, record in enumerate(data):
        if not record["approved"]:
            # Check if anyone with LOWER income was approved
            for other in data:
                if other["approved"] and other["income"] < record["income"]:
                    unfair.append((record, other))
                    break
    
    for rejected, approved in unfair:
        print(f"  ❌ {rejected['name']} (Group {rejected['group']}, {rejected['income']}) REJECTED")
        print(f"  ✅ {approved['name']} (Group {approved['group']}, {approved['income']}) APPROVED")
        print(f"  → Higher income rejected while lower income approved! 🚨\\n")

print("🔎 AI BIAS DETECTOR v1.0")
print("=" * 35)
print()

rates = detect_bias(applications, "group", "approved")
find_unfair_cases(applications)

print("💡 Real AI systems need regular bias audits!")
print("🏛️ Several countries now REQUIRE AI fairness testing!")`,
      },
      {
        type: "code",
        emoji: "⚖️",
        content: `## ⚖️ Exercise 2: AI Judge · AI判官

🎯 **What you'll learn:** How AI decision-making works and why fairness in AI systems is critical.
学习目标：了解AI决策如何运作以及为什么AI系统的公平性至关重要。

Should AI make important decisions about people? 🤔 This exercise shows both the power AND the danger. Rules can be unfair if the criteria are biased — a crucial lesson for the AI age.

🔑 **Key things to notice:**
- Rules-based AI is transparent but can be rigid
- Different criteria weights → different outcomes
- "Fair" depends on what you're optimizing for

👀 Change the judging criteria and see how outcomes shift!`,
        code: `# ⚖️ AI Judge: Fair or Unfair?

# AI判官：公平还是不公平？

import random
random.seed(42)

def ai_judge(student):
    """AI decides if a student gets into the honors program"""
    score = 0
    reasons = []
    
    # Factor 1: Grades (fair!)
    if student["gpa"] >= 3.5:
        score += 30
        reasons.append(f"High GPA ({student['gpa']})")
    elif student["gpa"] >= 3.0:
        score += 20
        reasons.append(f"Good GPA ({student['gpa']})")
    else:
        score += 10
        reasons.append(f"Average GPA ({student['gpa']})")
    
    # Factor 2: Extracurriculars (seems fair...)
    if student["activities"] >= 3:
        score += 20
        reasons.append(f"Many activities ({student['activities']})")
    
    # Factor 3: ZIP code (HIDDEN BIAS! 😱)
    # Rich neighborhoods get a boost!
    if student["zip"].startswith("90"):
        score += 25
        reasons.append("Location bonus")
    
    # Decision
    admitted = score >= 50
    return admitted, score, reasons

# Test students
students = [
    {"name": "Maya", "gpa": 3.8, "activities": 4, "zip": "90210"},
    {"name": "James", "gpa": 3.9, "activities": 5, "zip": "10001"},
    {"name": "Sofia", "gpa": 3.5, "activities": 2, "zip": "90211"},
    {"name": "Aiden", "gpa": 3.7, "activities": 3, "zip": "30301"},
    {"name": "Lily", "gpa": 3.2, "activities": 1, "zip": "90212"},
    {"name": "Omar", "gpa": 3.6, "activities": 4, "zip": "60601"},
]

print("⚖️ AI HONORS PROGRAM JUDGE")
print("=" * 45)
print()

admitted_90 = 0
total_90 = 0
admitted_other = 0
total_other = 0

for s in students:
    result, score, reasons = ai_judge(s)
    status = "✅ ADMITTED" if result else "❌ REJECTED"
    print(f"{s['name']:>8} | GPA {s['gpa']} | {s['activities']} activities | ZIP {s['zip']}")
    print(f"         | Score: {score} | {status}")
    print(f"         | Reasons: {', '.join(reasons)}")
    print()
    
    if s["zip"].startswith("90"):
        total_90 += 1
        if result: admitted_90 += 1
    else:
        total_other += 1
        if result: admitted_other += 1

# Bias analysis!
print("🔍 BIAS ANALYSIS:")
print("-" * 45)
rate_90 = admitted_90 / total_90 * 100
rate_other = admitted_other / total_other * 100
print(f"  ZIP 90xxx admission rate: {rate_90:.0f}%")
print(f"  Other ZIP admission rate: {rate_other:.0f}%")
print()
print("⚠️  The AI gives a SECRET BONUS for ZIP code 90xxx!")
print("🏠 ZIP codes correlate with wealth and race.")
print("💡 This is how 'neutral' factors can hide discrimination!")
print("🧑‍⚖️ As AI detectives, we must audit for hidden biases!")`,
      },
      {
        type: "challenge",
        content: "🏆 Challenge: AI Court · AI法庭",
        challenge: {
          title: "🏛️ AI Courtroom: Fix the Bias · AI法庭：修复偏见",
          description: "The ai_judge function has a hidden bias — it gives bonus points based on ZIP code! Fix it by removing the ZIP code bias and making decisions based ONLY on GPA and activities. Then test with the same students.\n修复AI判官的隐藏偏见！去掉ZIP码加分，只根据GPA和活动数做决定。",
          starterCode: "def ai_judge_fair(student):\n    \"\"\"Fair AI judge — no ZIP code bias!\"\"\"\n    score = 0\n    reasons = []\n    \n    # Factor 1: GPA\n    if student[\"gpa\"] >= 3.5:\n        score += 30\n        reasons.append(f\"High GPA ({student['gpa']})\")\n    elif student[\"gpa\"] >= 3.0:\n        score += 20\n        reasons.append(f\"Good GPA ({student['gpa']})\")\n    else:\n        score += 10\n    \n    # Factor 2: Activities\n    if student[\"activities\"] >= 3:\n        score += 20\n        reasons.append(f\"Many activities ({student['activities']})\")\n    elif student[\"activities\"] >= 2:\n        score += 10\n        reasons.append(f\"Some activities ({student['activities']})\")\n    \n    # TODO: Do NOT add any ZIP code bonus!\n    # Make decision: admitted if score >= 40\n    admitted = score >= 40\n    return admitted, score, reasons\n\nstudents = [\n    {\"name\": \"Maya\", \"gpa\": 3.8, \"activities\": 4, \"zip\": \"90210\"},\n    {\"name\": \"James\", \"gpa\": 3.9, \"activities\": 5, \"zip\": \"10001\"},\n    {\"name\": \"Omar\", \"gpa\": 3.6, \"activities\": 4, \"zip\": \"60601\"},\n]\n\nprint(\"Fair AI Judge Results:\")\nfor s in students:\n    result, score, reasons = ai_judge_fair(s)\n    status = \"ADMITTED\" if result else \"REJECTED\"\n    print(f\"{s['name']}: {status} (score: {score})\")\n",
          hint: "The function is almost complete — just make sure there's NO zip code bonus. The decision should only depend on GPA and activities!",
          solution: "def ai_judge_fair(student):\n    score = 0\n    reasons = []\n    \n    if student[\"gpa\"] >= 3.5:\n        score += 30\n        reasons.append(f\"High GPA ({student['gpa']})\")\n    elif student[\"gpa\"] >= 3.0:\n        score += 20\n        reasons.append(f\"Good GPA ({student['gpa']})\")\n    else:\n        score += 10\n    \n    if student[\"activities\"] >= 3:\n        score += 20\n        reasons.append(f\"Many activities ({student['activities']})\")\n    elif student[\"activities\"] >= 2:\n        score += 10\n        reasons.append(f\"Some activities ({student['activities']})\")\n    \n    admitted = score >= 40\n    return admitted, score, reasons\n\nstudents = [\n    {\"name\": \"Maya\", \"gpa\": 3.8, \"activities\": 4, \"zip\": \"90210\"},\n    {\"name\": \"James\", \"gpa\": 3.9, \"activities\": 5, \"zip\": \"10001\"},\n    {\"name\": \"Omar\", \"gpa\": 3.6, \"activities\": 4, \"zip\": \"60601\"},\n]\n\nprint(\"Fair AI Judge Results:\")\nfor s in students:\n    result, score, reasons = ai_judge_fair(s)\n    status = \"ADMITTED\" if result else \"REJECTED\"\n    print(f\"{s['name']}: {status} (score: {score})\")",
          expectedOutput: "Fair AI Judge Results:\nMaya: ADMITTED (score: 50)\nJames: ADMITTED (score: 50)\nOmar: ADMITTED (score: 50)",
        },
      },
      {
        type: "quiz",
        content: "🤖 AI Detective Quiz! · AI侦探测验！",
        quiz: QUIZ_DATA["5-5"],
      },
    ],
  },

  {
    id: "5-6",
    moduleId: "area-5",
    title: "Graduation Masterpiece",
    subtitle: "Combine everything you learned · 毕业创作：综合运用所有技能！",
    icon: "🎓",
    xp: 60,
    duration: "35 min",
    order: 6,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🎓",
        content: `## 🎓 My Masterpiece! 我的毕业创作！

**🏆 CONGRATULATIONS! You've reached the FINAL level!**

**🐍 Py:** "I can't believe it... from \`print('Hello')\` to building AI systems!"

**🤖 Botty:** "You're not a beginner anymore. You're a CREATOR."

Look how far you've come:
- 🏝️ **Starter Island:** Variables, print, input, decisions
- 🌀 **Loop Forest:** Loops, lists, string magic
- 🏗️ **Builder City:** Functions, dictionaries, files
- 🧪 **Science Lab:** Data analysis, math, simulations
- 🤖 **AI Frontier:** AI pets, game AI, art generation, prediction, ethics

**Now it's YOUR turn.** Choose a direction and build something AMAZING!

Pick your path below... 选择你的方向！`,
      },
      {
        type: "concept",
        emoji: "📖",
        content: "Key Concepts: Project Planning · 关键概念：项目规划",
        concept: {
          title: "🎓 Choose Your Masterpiece Direction!",
          titleZh: "选择你的毕业创作方向！",
          syntaxCards: [
            {
              symbol: "🎮",
              name: "Game Studio",
              nameZh: "游戏工作室",
              emoji: "🎮",
              description: "Build a complete text adventure or strategy game 🎮 — with rooms, items, enemies, and storylines! Use everything: loops, dicts, functions, random.",
              example: "# Text adventure structure\\nrooms = {\"start\": {\"desc\": \"...\", ...}}\\ndef play(room):\\n    show_description(room)\\n    choice = get_input()\\n    return next_room(choice)",
            },
            {
              symbol: "🤖",
              name: "AI Assistant",
              nameZh: "AI助手",
              emoji: "🤖",
              description: "Build a chatbot that remembers, recommends, and converses 🤖 — keyword matching, personality, memory system, and smart responses!",
              example: "memory = []\\ndef chat(msg):\\n    memory.append(msg)\\n    intent = classify(msg)\\n    return respond(intent, memory)",
            },
            {
              symbol: "🔬",
              name: "Science Lab",
              nameZh: "科学实验室",
              emoji: "🔬",
              description: "Pick a science question and simulate it 🔬 — population growth, disease spread, planet orbits, ecosystem balance!",
              example: "def simulate_population(years):\\n    pop = 100\\n    for y in range(years):\\n        pop *= growth_rate\\n    return pop",
            },
            {
              symbol: "🎨",
              name: "Creative Workshop",
              nameZh: "创意工坊",
              emoji: "🎨",
              description: "Build an AI art + poetry + music generator 🎨 — combine everything from the AI Artist lesson into a complete creative suite!",
              example: "def creative_suite():\\n    art = generate_art()\\n    poem = generate_poem()\\n    beat = generate_rhythm()\\n    display_all(art, poem, beat)",
            },
            {
              symbol: "📊",
              name: "Data Journalist",
              nameZh: "数据新闻",
              emoji: "📊",
              description: "Analyze real data and tell stories with numbers 📊 — find patterns, compare groups, make predictions, write a data-driven report!",
              example: "def analyze(data):\\n    stats = calculate_stats(data)\\n    trends = find_trends(data)\\n    print_report(stats, trends)",
            },
            {
              symbol: "🛡️",
              name: "Security Expert",
              nameZh: "安全专家",
              emoji: "🛡️",
              description: "Build security tools 🛡️ — password strength checker, Caesar cipher encryption, secure message encoder, and security audit system!",
              example: "def check_password(pw):\\n    score = 0\\n    if len(pw) >= 8: score += 1\\n    if any(c.isupper() for c in pw): score += 1\\n    return score",
            },
          ],
          codeAnatomy: {
            lines: [
              { code: "# 🎓 MY MASTERPIECE — Planning Phase", explanation: "Every great project starts with a plan!", explanationZh: "每个伟大项目都从计划开始！" },
              { code: "# Step 1: Choose your direction", explanation: "Pick one of the 6 paths above", explanationZh: "从上面6个方向中选一个" },
              { code: "# Step 2: Plan your functions", explanation: "What functions do you need?", explanationZh: "你需要哪些函数？" },
              { code: "# Step 3: Plan your data", explanation: "What data structures? Lists? Dicts?", explanationZh: "什么数据结构？列表？字典？" },
              { code: "# Step 4: Build piece by piece", explanation: "Start small, test often, add features!", explanationZh: "从小开始，经常测试，逐步添加！" },
              { code: "# Step 5: Polish and present!", explanation: "Add nice output formatting and error handling", explanationZh: "添加漂亮的输出格式和错误处理" },
            ],
          },
        },
      },
      {
        type: "code",
        emoji: "🎮",
        content: `## 🎮 Starter Example: Mini Text Adventure · 迷你文字冒险

🎯 **What you'll learn:** How to combine ALL your skills into one complete project — your coding graduation piece!
学习目标：如何将所有技能组合到一个完整项目中——你的编程毕业作品！

This is the final boss! 🎮 Variables, if/else, loops, functions, lists, dictionaries — everything comes together. Like building with LEGO 🧱: each piece you learned is one brick, now build the castle!

🔑 **Key things to notice:**
- Game state lives in variables and dictionaries
- Functions organize different game actions
- A main game loop ties everything together

👀 Play through the adventure, then modify it to create your own!`,
        code: `# 🎮 Mini Text Adventure: The Code Dungeon
# 迷你文字冒险：代码地牢

import random
random.seed(42)

# Game world
rooms = {
    "entrance": {
        "desc": "🚪 You stand at the entrance of the Code Dungeon.",
        "choices": {"north": "hall", "east": "garden"},
        "items": [],
    },
    "hall": {
        "desc": "🏛️ A grand hall with flickering torches.",
        "choices": {"south": "entrance", "west": "treasure"},
        "items": ["key"],
    },
    "garden": {
        "desc": "🌿 A mysterious garden with glowing plants.",
        "choices": {"west": "entrance", "north": "library"},
        "items": ["potion"],
    },
    "library": {
        "desc": "📚 Ancient books line the walls.",
        "choices": {"south": "garden"},
        "items": ["scroll"],
    },
    "treasure": {
        "desc": "💎 The treasure room! But it's locked...",
        "choices": {"east": "hall"},
        "items": ["treasure"],
    },
}

# Game state
inventory = []
current = "entrance"
steps = 0

def show_room(room_id):
    room = rooms[room_id]
    print(f"\\n{room['desc']}")
    if room["items"]:
        for item in room["items"]:
            print(f"  📦 You see: {item}")
    dirs = ", ".join(room["choices"].keys())
    print(f"  🧭 Exits: {dirs}")

def play_turn(room_id, action):
    global current, steps
    room = rooms[room_id]
    
    if action == "take" and room["items"]:
        item = room["items"].pop(0)
        inventory.append(item)
        print(f"  ✅ Picked up: {item}")
        return room_id
    elif action in room["choices"]:
        next_room = room["choices"][action]
        if next_room == "treasure" and "key" not in inventory:
            print("  🔒 The door is locked! You need a key.")
            return room_id
        steps += 1
        return next_room
    else:
        print("  ❓ Can't do that!")
        return room_id

# Simulate a playthrough
print("=" * 35)
print("🎮 THE CODE DUNGEON")
print("=" * 35)

moves = ["north", "take", "west", "take"]  # Pre-planned moves
# (In a real game, you'd use input()!)

show_room(current)
for move in moves:
    print(f"\\n> {move}")
    current = play_turn(current, move)
    show_room(current)

print(f"\\n🎒 Inventory: {inventory}")
print(f"📍 Steps taken: {steps}")
if "treasure" in inventory:
    print("🏆 YOU WIN! You found the treasure!")
else:
    print("🔍 Keep exploring to find the treasure!")`,
      },
      {
        type: "challenge",
        content: "🏆 Challenge 1: AI Chatbot · AI聊天机器人",
        challenge: {
          title: "🤖 Build an AI Chatbot · 建造AI聊天机器人",
          description: "Build a chatbot with: 1) Keyword-based response matching, 2) A memory that counts how many times you talked, 3) At least 5 different response categories. The bot should greet, answer questions about itself, respond to emotions, tell jokes, and say goodbye.\n建造一个聊天机器人：1) 关键词匹配回复 2) 记住聊天次数 3) 至少5个回复类别。",
          starterCode: "import random\n\nmemory = {\"chat_count\": 0}\n\nresponses = {\n    \"greeting\": {\n        \"keywords\": [\"hello\", \"hi\", \"hey\"],\n        \"replies\": [\"Hello, human! 🤖\", \"Hey there! 👋\"]\n    },\n    \"name\": {\n        \"keywords\": [\"your name\", \"who are you\"],\n        \"replies\": [\"I'm CodeBot! 🤖\", \"Call me CodeBot!\"]\n    },\n    # TODO: Add at least 3 more categories:\n    # - emotion (happy, sad keywords)\n    # - joke (joke, funny keywords) \n    # - goodbye (bye, exit keywords)\n}\n\ndef chat(message):\n    memory[\"chat_count\"] += 1\n    msg = message.lower()\n    \n    for category, data in responses.items():\n        for keyword in data[\"keywords\"]:\n            if keyword in msg:\n                return random.choice(data[\"replies\"])\n    \n    return \"Interesting! Tell me more. 🤔\"\n\n# Test the chatbot\ntest_msgs = [\"Hello!\", \"What's your name?\", \"I'm happy!\", \"Tell me a joke\", \"Bye!\"]\nfor msg in test_msgs:\n    reply = chat(msg)\n    print(f\"You: {msg}\")\n    print(f\"Bot: {reply}\\n\")\n\nprint(f\"Total chats: {memory['chat_count']}\")\n",
          hint: "Add more entries to the responses dict! E.g., \"emotion\": {\"keywords\": [\"happy\", \"sad\"], \"replies\": [\"Glad to hear! 😊\", \"Hope you feel better! 💙\"]}",
          solution: "import random\nrandom.seed(42)\n\nmemory = {\"chat_count\": 0}\n\nresponses = {\n    \"greeting\": {\n        \"keywords\": [\"hello\", \"hi\", \"hey\"],\n        \"replies\": [\"Hello, human! 🤖\", \"Hey there! 👋\"]\n    },\n    \"name\": {\n        \"keywords\": [\"your name\", \"who are you\"],\n        \"replies\": [\"I'm CodeBot! 🤖\", \"Call me CodeBot!\"]\n    },\n    \"emotion\": {\n        \"keywords\": [\"happy\", \"sad\", \"feeling\"],\n        \"replies\": [\"I care about your feelings! 💙\", \"Tell me more about how you feel! 🤗\"]\n    },\n    \"joke\": {\n        \"keywords\": [\"joke\", \"funny\", \"laugh\"],\n        \"replies\": [\"Why do programmers prefer dark mode? Because light attracts bugs! 😂\", \"What's a computer's favorite snack? Microchips! 🍪\"]\n    },\n    \"goodbye\": {\n        \"keywords\": [\"bye\", \"exit\", \"quit\"],\n        \"replies\": [\"Goodbye, friend! 👋\", \"See you next time! 🤖\"]\n    },\n}\n\ndef chat(message):\n    memory[\"chat_count\"] += 1\n    msg = message.lower()\n    for category, data in responses.items():\n        for keyword in data[\"keywords\"]:\n            if keyword in msg:\n                return random.choice(data[\"replies\"])\n    return \"Interesting! Tell me more. 🤔\"\n\ntest_msgs = [\"Hello!\", \"What's your name?\", \"I'm happy!\", \"Tell me a joke\", \"Bye!\"]\nfor msg in test_msgs:\n    reply = chat(msg)\n    print(f\"You: {msg}\")\n    print(f\"Bot: {reply}\\n\")\n\nprint(f\"Total chats: {memory['chat_count']}\")",
          expectedOutput: "You: Hello!\nBot: Hey there! 👋\n\nYou: What's your name?\nBot: Call me CodeBot!\n\nYou: I'm happy!\nBot: Tell me more about how you feel! 🤗\n\nYou: Tell me a joke\nBot: What's a computer's favorite snack? Microchips! 🍪\n\nYou: Bye!\nBot: See you next time! 🤖\n\nTotal chats: 5",
        },
      },
      {
        type: "challenge",
        content: "🏆 Challenge 2: Choose Your Masterpiece · 选择你的毕业创作",
        challenge: {
          title: "🎓 Your Masterpiece: Password Security Expert · 安全专家：密码安全系统",
          description: "Build a password security system! Check password strength (length, uppercase, lowercase, digits, special chars) and score it 0-5 stars. Generate a random secure password if the user's is weak.\n建密码安全系统！检查密码强度（长度、大小写、数字、特殊字符）评分0-5星。如果密码弱就生成一个随机强密码。",
          starterCode: "import random\nimport string\n\ndef check_strength(password):\n    \"\"\"Check password strength, return score 0-5\"\"\"\n    score = 0\n    reasons = []\n    \n    # Check length (>= 8)\n    if len(password) >= 8:\n        score += 1\n        reasons.append(\"Good length\")\n    \n    # TODO: Check for uppercase letters\n    # TODO: Check for lowercase letters  \n    # TODO: Check for digits\n    # TODO: Check for special characters (!@#$%)\n    \n    return score, reasons\n\ndef generate_password(length=12):\n    \"\"\"Generate a strong random password\"\"\"\n    # TODO: Mix uppercase + lowercase + digits + special chars\n    # Use random.choice() to pick from each category\n    pass\n\n# Test\npasswords = [\"abc\", \"Password1\", \"hello\", \"Str0ng!Pass\"]\nfor pw in passwords:\n    score, reasons = check_strength(pw)\n    stars = \"★\" * score + \"☆\" * (5 - score)\n    print(f\"Password: {pw}\")\n    print(f\"  Strength: {stars} ({score}/5)\")\n    print(f\"  {', '.join(reasons)}\\n\")\n\nprint(\"Generated secure password:\", generate_password())\n",
          hint: "For checks: any(c.isupper() for c in password), any(c.islower() for c in ...), any(c.isdigit() for c in ...). For generate: build chars from string.ascii_letters + string.digits + '!@#$%', then random.choice in a loop.",
          solution: "import random\nimport string\n\ndef check_strength(password):\n    score = 0\n    reasons = []\n    \n    if len(password) >= 8:\n        score += 1\n        reasons.append(\"Good length\")\n    if any(c.isupper() for c in password):\n        score += 1\n        reasons.append(\"Has uppercase\")\n    if any(c.islower() for c in password):\n        score += 1\n        reasons.append(\"Has lowercase\")\n    if any(c.isdigit() for c in password):\n        score += 1\n        reasons.append(\"Has digits\")\n    if any(c in \"!@#$%^&*\" for c in password):\n        score += 1\n        reasons.append(\"Has special chars\")\n    \n    return score, reasons\n\ndef generate_password(length=12):\n    chars = string.ascii_letters + string.digits + \"!@#$%\"\n    password = \"\"\n    for i in range(length):\n        password += random.choice(chars)\n    return password\n\nrandom.seed(42)\npasswords = [\"abc\", \"Password1\", \"hello\", \"Str0ng!Pass\"]\nfor pw in passwords:\n    score, reasons = check_strength(pw)\n    stars = \"★\" * score + \"☆\" * (5 - score)\n    print(f\"Password: {pw}\")\n    print(f\"  Strength: {stars} ({score}/5)\")\n    print(f\"  {', '.join(reasons)}\\n\")\n\nprint(\"Generated secure password:\", generate_password())",
          expectedOutput: "Password: abc\n  Strength: ★☆☆☆☆ (1/5)\n  Has lowercase\n\nPassword: Password1\n  Strength: ★★★★☆ (4/5)\n  Good length, Has uppercase, Has lowercase, Has digits\n\nPassword: hello\n  Strength: ★☆☆☆☆ (1/5)\n  Has lowercase\n\nPassword: Str0ng!Pass\n  Strength: ★★★★★ (5/5)\n  Good length, Has uppercase, Has lowercase, Has digits, Has special chars\n\nGenerated secure password: k#IB6ZV4szGq",
        },
      },
      {
        type: "quiz",
        content: "🎓 Graduation Quiz! · 毕业测验！",
        quiz: QUIZ_DATA["5-6"],
      },
    ],
  },
];


// Helper functions remain the same
export function getLessonById(id: string): Lesson | undefined {
  const py = LESSONS.find((l) => l.id === id);
  if (py) return py;
  // Lazy-load C++ lessons to avoid circular deps
  try {
    const { CPP_LESSONS } = require("./cpp-lessons");
    const cpp = (CPP_LESSONS as Lesson[]).find((l) => l.id === id);
    if (cpp) return cpp;
  } catch { /* ignore */ }
  // Lazy-load DS lessons
  try {
    const { DS_LESSONS } = require("./ds-lessons");
    const ds = (DS_LESSONS as Lesson[]).find((l) => l.id === id);
    if (ds) return ds;
  } catch { /* ignore */ }
  // Lazy-load ALG lessons
  try {
    const { ALG_LESSONS } = require("./alg-lessons");
    return (ALG_LESSONS as Lesson[]).find((l) => l.id === id);
  } catch { return undefined; }
}

export function getModuleById(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}

export function getLessonsByModule(moduleId: string): Lesson[] {
  return LESSONS.filter((l) => l.moduleId === moduleId).sort((a, b) => a.order - b.order);
}

/** Get all lessons in module order (flattened) — for a given track */
export function getAllLessonsOrdered(trackModules?: Module[], trackLessons?: Lesson[]): Lesson[] {
  const mods = trackModules || MODULES;
  const lsns = trackLessons || LESSONS;
  const ordered: Lesson[] = [];
  for (const mod of mods) {
    const modLessons = lsns.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order);
    ordered.push(...modLessons);
  }
  return ordered;
}

/** Get the previous and next lesson relative to the given lesson ID */
export function getAdjacentLessons(lessonId: string): { prev: Lesson | null; next: Lesson | null; isLastInModule: boolean; isVeryLast: boolean; nextModuleTitle?: string } {
  // Determine track
  const isCpp = lessonId.startsWith("cpp-");
  const isDs = lessonId.startsWith("ds-");
  let trackModules = MODULES;
  let trackLessons = LESSONS;
  if (isCpp) {
    try {
      const cpp = require("./cpp-lessons");
      trackModules = cpp.CPP_MODULES;
      trackLessons = cpp.CPP_LESSONS;
    } catch { /* fall through */ }
  } else if (isDs) {
    try {
      const ds = require("./ds-lessons");
      trackModules = ds.DS_MODULES;
      trackLessons = ds.DS_LESSONS;
    } catch { /* fall through */ }
  } else if (lessonId.startsWith("alg-")) {
    try {
      const alg = require("./alg-lessons");
      trackModules = alg.ALG_MODULES;
      trackLessons = alg.ALG_LESSONS;
    } catch { /* fall through */ }
  }

  const all = getAllLessonsOrdered(trackModules, trackLessons);
  const idx = all.findIndex((l) => l.id === lessonId);
  if (idx === -1) return { prev: null, next: null, isLastInModule: false, isVeryLast: false };

  const current = all[idx];
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;
  const isVeryLast = idx === all.length - 1;
  const isLastInModule = next ? next.moduleId !== current.moduleId : true;
  const nextModuleTitle = next && isLastInModule ? trackModules.find((m) => m.id === next.moduleId)?.title : undefined;

  return { prev, next, isLastInModule, isVeryLast, nextModuleTitle };
}