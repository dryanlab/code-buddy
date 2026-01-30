// Code Buddy v2 - Fusion-style 5 Areas 30 Lessons
// Design Philosophy: Programming Skills + Computer Science + AI Thinking naturally integrated
// Target: Grade 4-10 (10-16 years old), Zero background
// Languages: English primary + Chinese subtitles
// Characters: 🐍Py (Python Snake), 🤖Botty (AI Assistant), 🔧Chip (Hardware Sprite)

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
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
  solution: string;
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
  concept?: ConceptData;
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
    lessons: ["5-1", "5-2", "5-3", "5-4", "5-5"],
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

Time to create that epic green-text hacker look! Run this code:`,
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
        type: "quiz",
        content: "🎓 Hacker Knowledge Check!",
        quiz: [
          {
            question: "🐍 Py asks: What does print() do?",
            options: ["Prints on paper like a printer", "Shows text on the screen like hackers", "Deletes secret files", "Shuts down the computer"],
            correctIndex: 1,
            explanation: "🐍 Py: 正确! print() makes text appear on screen - just like those cool hacker movies! 电影里的绿色文字就是这样显示的！",
          },
          {
            question: "🤖 Botty asks: What happens when you run multiple print() commands?",
            options: ["Only the last one shows", "They all show, line by line", "They merge into one line", "The computer explodes"],
            correctIndex: 1,
            explanation: "🤖 Botty: Yes! Each print() command creates a new line, just like a typewriter. That's how hackers make those scrolling text effects! 每个print()都会换行显示！",
          },
        ],
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
        content: `## 🎪 The Ultimate Mad Libs Story Generator!`,
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

print("\n" + "="*40)
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
        type: "quiz",
        content: "🎯 Mad Libs Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: What does name = 'Sarah' do?",
            options: ["Checks if name equals Sarah", "Creates a variable box called 'name' and puts 'Sarah' in it", "Deletes the name variable", "Prints Sarah on screen"],
            correctIndex: 1,
            explanation: "🐍 Py: Perfect! The = is like a magic spell that creates a labeled box and stores something inside. 就像给盒子贴标签然后放东西进去！",
          },
          {
            question: "😂 What makes Mad Libs so funny?",
            options: ["Using random words in unexpected places", "The computer making jokes", "Variables being broken", "Python telling stories"],
            correctIndex: 0,
            explanation: "😂 Exactly! Random + unexpected = comedy gold! AI chatbots work similarly - they mix words in creative ways! 随机组合词语就会产生搞笑效果！",
          },
          {
            question: "🤖 Botty asks: Why do we use input() in Mad Libs?",
            options: ["To print the story", "To let users add their own creative words", "To delete variables", "To make the computer think"],
            correctIndex: 1,
            explanation: "🤖 Botty: Right! input() makes programs INTERACTIVE - users become part of the creative process! 让用户参与创作过程！",
          },
        ],
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
        content: `## 🍕 Pizza Party Calculator Supreme!`,
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
        content: `## 💰 Pizza Budget Calculator`,
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
        type: "quiz",
        content: "🍕 Pizza Math Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: What does 17 % 5 equal?",
            options: ["3.4", "3", "2", "12"],
            correctIndex: 2,
            explanation: "🐍 Py: Correct! 17 ÷ 5 = 3 remainder 2, so 17 % 5 = 2. Perfect for calculating leftover pizza slices! 求余数运算非常适合计算剩余的披萨！",
          },
          {
            question: "🍕 If you have 23 slices and 7 people, how many slices per person (whole slices only)?",
            options: ["3 slices each", "3.28 slices each", "4 slices each", "2 slices each"],
            correctIndex: 0,
            explanation: "🍕 Right! 23 // 7 = 3 whole slices per person. Use // for 'floor division' to get whole numbers! 用//可以得到整数结果！",
          },
          {
            question: "🤖 Botty asks: Why is % useful in programming?",
            options: ["It makes numbers smaller", "It helps divide things fairly with leftovers", "It's faster than +", "It only works with pizza"],
            correctIndex: 1,
            explanation: "🤖 Botty: Exactly! % helps us handle 'leftover' situations - sharing pizza, wrapping around arrays, checking even/odd numbers! 处理「剩余」情况非常有用！",
          },
        ],
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

🐢 **Click Run to see the turtle draw!** 点击运行看海龟画图！`,
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

💻 **Copy this into Thonny and run it locally!**`,
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
        type: "quiz",
        content: "🐢 Turtle Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: To draw a square, how many degrees should the turtle turn at each corner?",
            options: ["45 degrees", "90 degrees", "180 degrees", "360 degrees"],
            correctIndex: 1,
            explanation: "🐍 Py: Perfect! A square has 4 equal sides and 4 right angles (90°). 360° ÷ 4 sides = 90° per turn! 正方形每个角都是90度！",
          },
          {
            question: "🔧 Chip asks: How does Code Buddy make turtle graphics work in the browser?",
            options: ["It downloads Python first", "It uses an HTML5 Canvas to simulate turtle drawing", "It sends code to a server", "It uses a browser plugin"],
            correctIndex: 1,
            explanation: "🔧 Chip: Right! Turtle graphics originally need a pop-up window, but Code Buddy has a built-in turtle simulator! You can draw right in the browser! 我们内置了海龟画图模拟器！",
          },
          {
            question: "🤖 Botty asks: What's the connection between turtle graphics and video games?",
            options: ["Nothing at all", "Both use movement and drawing commands", "Games are harder", "Turtles are in games"],
            correctIndex: 1,
            explanation: "🤖 Botty: Exactly! Video games move characters using similar commands - forward, turn, change color. Turtle graphics teaches the basics! 游戏角色移动用类似的指令！",
          },
        ],
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
        content: `## 🎢 Rollercoaster Safety System v1.0`,
        code: `# 🎢 MEGA LOOP ROLLERCOASTER SAFETY INSPECTOR
print("🎪 Welcome to MegaFun Amusement Park!")
print("🎢 Mega Loop Coaster Safety Check")
print("=" * 40)

# Get rider information
rider_name = input("👤 What's your name? ")
height_inches = int(input("📏 How tall are you (inches)? "))
has_gear = input("🎒 Do you have safety gear? (yes/no): ")

print("\n🔍 SAFETY INSPECTION IN PROGRESS...")
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
print("\n🎯 FINAL DECISION:")
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
        content: `## 🎡 Advanced Multi-Ride Safety System`,
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

print("\n🎯 Safety is our #1 priority!")

# 🔧 Chip: "Real theme parks use computer systems exactly like this!"`,
      },
      {
        type: "quiz",
        content: "🎢 Safety Inspector Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: What's the difference between = and == ?",
            options: ["They're the same thing", "= stores a value, == checks if values are equal", "= checks equality, == stores values", "One is for numbers, one is for text"],
            correctIndex: 1,
            explanation: "🐍 Py: Perfect! = is assignment (putting data into a variable box), == is comparison (checking if two things are equal). Essential for safety checks! 赋值vs比较很重要！",
          },
          {
            question: "🎢 For a ride requiring age ≥ 12 and height ≥ 50, which code checks BOTH conditions?",
            options: ["if age >= 12 or height >= 50:", "if age >= 12 and height >= 50:", "if age == 12 and height == 50:", "if age > 12 or height > 50:"],
            correctIndex: 1,
            explanation: "🎢 Right! 'and' means BOTH conditions must be true for safety. 'or' would mean only ONE needs to be true - unsafe! 两个条件都必须满足才安全！",
          },
          {
            question: "🔧 Chip asks: Why are computers better than humans for safety checks?",
            options: ["They're faster", "They never get tired or distracted", "They're smarter", "They don't need training"],
            correctIndex: 1,
            explanation: "🔧 Chip: Exactly! Computers consistently follow rules without getting tired, distracted, or making human errors. Perfect for safety! 电脑不会疲劳走神，安全检查更可靠！",
          },
        ],
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

Let's build a **Text Adventure Game** — the same genre that inspired modern AI!`,
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
        content: `## Game Foundation - Setup & Introduction`,
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
        content: `## 🎮 Mini Challenge: Combine Everything!`,
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
        type: "quiz",
        content: "🏆 Graduation Quiz: Starter Island Mastery!",
        quiz: [
          {
            question: "🎮 What programming concepts did your text adventure game use?",
            options: ["Only print() and input()", "Variables, conditions, and user input", "Just basic math", "Only text manipulation"],
            correctIndex: 1,
            explanation: "🏆 Your game combined multiple concepts: variables (to store game state), conditions (if-else for different paths), user input (for choices), and output (to tell the story). This is how real software is built!",
          },
        ],
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
        type: "code",
        emoji: "🔺",
        content: `## 🔺 Polygon Factory - Any Shape You Want!

🐢 **Click Run to see the turtle draw!** 点击运行看海龟画图！`,
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

🐢 **Click Run to see the kaleidoscope!** 点击运行看万花筒！`,
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
        content: `## 🎪 Loop Circus - Text Patterns (runs in browser!)`,
        code: `# 🎪 LOOP CIRCUS - Amazing Text Patterns!
# This runs in the browser since it's just text!

print("🎪 Welcome to the Loop Circus! 🎪")
print("=" * 40)

# Pattern 1: Star Pyramid
print("\n⭐ STAR PYRAMID:")
for row in range(5):
    spaces = " " * (5 - row - 1)  # Decreasing spaces
    stars = "⭐" * (row + 1)      # Increasing stars
    print(spaces + stars)

# Pattern 2: Number Diamond  
print("\n💎 NUMBER DIAMOND:")
for i in range(1, 6):
    spaces = " " * (5 - i)
    numbers = ""
    for num in range(1, i + 1):
        numbers += str(num)
    print(spaces + numbers)

# Pattern 3: Countdown Rocket
print("\n🚀 COUNTDOWN ROCKET:")
for count in range(10, 0, -1):
    print("🚀 " + str(count))
print("💥 BLAST OFF!")

# Pattern 4: Progress Bar Simulation
print("\n📊 LOADING PROGRESS:")
for percent in range(0, 101, 10):
    filled = "█" * (percent // 10)
    empty = "░" * (10 - percent // 10)
    print(f"[{filled}{empty}] {percent}%")

print("\n🎉 Loop Circus Complete!")
# 🤖 Botty: "These are the building blocks of user interfaces!"`,
      },
      {
        type: "quiz",
        content: "🌀 Loop Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: To draw a hexagon (6 sides), what angle should the turtle turn?",
            options: ["45 degrees", "60 degrees", "90 degrees", "120 degrees"],
            correctIndex: 1,
            explanation: "🐍 Py: Perfect! 360° ÷ 6 sides = 60° per turn. This formula works for ANY polygon! 360度除以边数就是转弯角度！",
          },
          {
            question: "🌀 What makes the kaleidoscope pattern so mesmerizing?",
            options: ["Random colors", "Many polygons slightly rotated around a center", "Fast turtle speed", "Large size"],
            correctIndex: 1,
            explanation: "🌀 Right! The kaleidoscope repeats the same shape many times, slightly rotated each time. This creates symmetrical, beautiful patterns! 重复+旋转=美丽图案！",
          },
          {
            question: "🤖 Botty asks: How do for loops help with creative coding?",
            options: ["They make code shorter", "They create repetitive patterns impossible to draw by hand", "They're faster than while loops", "They use less memory"],
            correctIndex: 1,
            explanation: "🤖 Botty: Exactly! Loops let you create complex, beautiful patterns with just a few lines of code. Artists and designers use code loops to make impossible art! 循环让我们创造人手无法绘制的复杂图案！",
          },
        ],
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
        content: `## ⚔️ Epic RPG Adventure - Backpack Master!`,
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
        content: `## 🏪 Backpack Organizer - Sort Your Loot!`,
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
        type: "quiz",
        content: "🎒 RPG Backpack Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: How do you add dragon loot to your backpack?",
            options: ["backpack.add('Dragon Scale')", "backpack.append('Dragon Scale')", "backpack.insert('Dragon Scale')", "backpack + 'Dragon Scale'"],
            correctIndex: 1,
            explanation: "🐍 Py: append() adds the item to the END of your backpack list! Perfect for picking up new loot during adventures! 在列表末尾添加新物品！",
          },
          {
            question: "⚔️ You want to check if you have a Magic Sword before fighting a boss. Which code works?",
            options: ["if backpack.has('Magic Sword'):", "if 'Magic Sword' in backpack:", "if backpack.contains('Magic Sword'):", "if backpack['Magic Sword']:"],
            correctIndex: 1,
            explanation: "⚔️ Perfect! 'in' checks if an item exists in the list. Essential for RPG logic - always check your gear before boss fights! 检查装备是否存在！",
          },
          {
            question: "🤖 Botty asks: Why are lists perfect for RPG inventories?",
            options: ["They're faster than other data types", "They can hold different item types and change size", "They use less memory", "They automatically sort items"],
            correctIndex: 1,
            explanation: "🤖 Botty: Right! Lists can hold any items (weapons, potions, treasures) and grow/shrink as you loot and use items. Perfect for dynamic game inventories! 可以包含不同物品类型且大小可变！",
          },
        ],
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
        content: `## 🎮 Number Guessing Game 2.0 - The Ultimate Version!`,
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

print("\n🎯 Thanks for playing Number Guessing Game 2.0!")

# 🔧 Chip: "This game loop runs on every gaming device!"
# 🤖 Botty: "AI learns by making guesses and getting feedback, just like this!"`,
      },
      {
        type: "code",
        emoji: "🏆",
        content: `## 🏆 Advanced: High Score Challenge Mode!`,
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
        type: "quiz",
        content: "🎯 Number Guessing Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: When does a while loop stop running?",
            options: ["After 10 iterations", "When the condition becomes False", "When the user presses Enter", "Never"],
            correctIndex: 1,
            explanation: "🐍 Py: Perfect! A while loop keeps running as long as its condition is True, and stops the moment it becomes False. Essential for games! while循环条件为False时停止！",
          },
          {
            question: "🎮 In the guessing game, why do we use while instead of for?",
            options: ["while is faster", "We don't know how many guesses it will take", "for loops don't work with numbers", "while uses less memory"],
            correctIndex: 1,
            explanation: "🎮 Exactly! We don't know if the player will guess in 1 try or 50 tries. while loops are perfect for 'keep going until success' situations! 不知道需要多少次猜测！",
          },
          {
            question: "🤖 Botty asks: How is this similar to AI learning?",
            options: ["Both use random numbers", "Both keep trying until they get it right", "Both count attempts", "Both give hints"],
            correctIndex: 1,
            explanation: "🤖 Botty: Yes! AI learning is like our guessing game - the AI keeps adjusting its guesses based on feedback until it gets the right answer! AI学习就像猜数字游戏！",
          },
        ],
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
        content: `## ⭐ Star Pattern Factory - Your First Masterpieces!`,
        code: `# ⭐ STAR PATTERN FACTORY - Nested Loop Magic!

print("🌟 Welcome to the Star Pattern Factory! 🌟")
print("=" * 45)

# Pattern 1: Simple Square
print("\n🟦 PATTERN 1: Perfect Square")
for row in range(5):
    for col in range(5):
        print("⭐", end="")  # Print star without newline
    print()  # New line after each row completes

# Pattern 2: Right Triangle (Growing)
print("\n📐 PATTERN 2: Growing Triangle") 
for row in range(6):  # 6 rows
    for col in range(row + 1):  # Row 0→1 star, Row 1→2 stars, etc.
        print("⭐", end="")
    print()

# Pattern 3: Upside Down Triangle (Shrinking)
print("\n📐 PATTERN 3: Shrinking Triangle")
for row in range(5):
    for col in range(5 - row):  # Row 0→5 stars, Row 1→4 stars, etc.
        print("⭐", end="")
    print()

# Pattern 4: Number Stairs
print("\n🔢 PATTERN 4: Number Stairs")
for row in range(1, 6):  # Rows 1 to 5
    for number in range(1, row + 1):  # Numbers 1 to current row
        print(number, end="")
    print()

# Pattern 5: Multiplication Table Preview
print("\n📊 PATTERN 5: Mini Multiplication Table")
for row in range(1, 4):  # 3 rows
    for col in range(1, 4):  # 3 columns  
        result = row * col
        print(f"{result:2}", end=" ")  # Format with 2 spaces
    print(f" ← {row} × table")

print("\n✨ Pattern Factory Complete! Wasn't that AMAZING?")

# 🔧 Chip: "Your computer screen was drawn using patterns just like these!"`,
      },
      {
        type: "code",
        emoji: "💎",
        content: `## 💎 Advanced Pattern Academy - Diamond & Pyramid Masters!`,
        code: `# 💎 ADVANCED PATTERN ACADEMY - For Pattern Ninjas!

print("💎 ADVANCED PATTERN ACADEMY 💎")
print("🥷 Ninja-level nested loops ahead!")
print("=" * 40)

# Pattern 1: Centered Pyramid
print("\n🏔️ PATTERN 1: Centered Pyramid")
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
print("\n💎 PATTERN 2: Perfect Diamond")
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
print("\n🌈 PATTERN 3: Rainbow Pattern")
colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣"]
for row in range(6):
    color = colors[row]  # Pick color for this row
    for col in range(row + 1):
        print(color, end="")
    print(f" ← Row {row + 1}")

# Pattern 4: Chess Board Pattern
print("\n♟️ PATTERN 4: Mini Chessboard")
for row in range(4):
    for col in range(4):
        if (row + col) % 2 == 0:  # Even squares
            print("⬜", end="")
        else:  # Odd squares
            print("⬛", end="")
    print()

print("\n🏆 You've mastered advanced patterns! You're a nested loop ninja!")

# 🤖 Botty: "Video game textures are created with patterns like these!"`,
      },
      {
        type: "code",
        emoji: "🎮",
        content: `## 🎮 Interactive Pattern Generator - Build Your Own!`,
        code: `# 🎮 BUILD YOUR OWN PATTERN GENERATOR!

print("🎮 INTERACTIVE PATTERN GENERATOR")
print("Create any pattern you can imagine!")
print("=" * 40)

# Get user's creative input
pattern_height = int(input("🔢 How tall should your pattern be (1-10)? "))
pattern_char = input("✨ What character/emoji to use? ")
pattern_type = input("📐 Pattern type (square/triangle/diamond)? ").lower()

print(f"\n🎨 Creating your {pattern_type} pattern with {pattern_char}!")
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

print(f"\n🎉 Your custom {pattern_type} pattern is complete!")
print("🔧 You just used nested loops like a pro programmer!")

# 🐍 Py: "You're thinking like a computer graphics programmer now!"`,
      },
      {
        type: "quiz",
        content: "🎨 Pattern Printing Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: What creates a triangle pattern that grows by 1 star each row?",
            options: [
              "for row in range(5): for col in range(5): print('⭐')",
              "for row in range(5): for col in range(row + 1): print('⭐')",  
              "for row in range(5): for col in range(row): print('⭐')",
              "for row in range(5): print('⭐' * 5)"
            ],
            correctIndex: 1,
            explanation: "🐍 Py: Perfect! row + 1 makes row 0 print 1 star, row 1 print 2 stars, etc. The inner loop size changes based on the outer loop! 内循环的次数随外循环变化！",
          },
          {
            question: "🎨 To create a 5×5 square pattern, how many total characters get printed?",
            options: ["5 characters", "10 characters", "25 characters", "50 characters"],
            correctIndex: 2,
            explanation: "🎨 Right! 5 rows × 5 columns = 25 characters total. Each outer loop iteration runs the inner loop 5 times! 5×5=25个字符！",
          },
          {
            question: "🤖 Botty asks: How do nested loops relate to computer graphics?",
            options: ["They don't", "Every pixel on screen is positioned using row/column loops", "Only for text patterns", "Graphics use different methods"],
            correctIndex: 1,
            explanation: "🤖 Botty: Exactly! Your computer screen is a giant grid. Graphics programs use nested loops to set the color of each pixel at position (row, col)! 屏幕上每个像素都是用嵌套循环定位的！",
          },
        ],
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
        content: `## 🕵️ Caesar Cipher Encryption Machine!`,
        code: `# 🕵️ SECRET AGENT ENCRYPTION MACHINE v2.0!

print("🔐 ═══ SECRET AGENT HEADQUARTERS ═══")
print("🕵️ Welcome to the Encryption Academy!")
print("═" * 42)

# Get secret message from user
secret_message = input("🤫 Enter your secret message: ").upper()
shift = int(input("🔢 Enter shift amount (1-25): "))

print(f"\n🔒 Encrypting '{secret_message}' with Caesar cipher...")
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

print(f"\n🔐 ENCRYPTED MESSAGE: {encrypted}")
print(f"🎯 Original: {secret_message}")
print(f"✨ Encrypted: {encrypted}")

# Fun fact about encryption!
print("\n🤓 SECRET AGENT FACT:")
print("Julius Caesar used this cipher 2000+ years ago!")
print("🌐 Modern internet uses much stronger encryption!")

# 🤖 Botty: "AI language models work by turning words into numbers, just like this!"`,
      },
      {
        type: "code",
        emoji: "🔓",
        content: `## 🔓 Message Decoder - Break the Code!`,
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

print("\n🔍 Attempting to decode...")

for i, (encrypted_msg, shift, method) in enumerate(secret_messages):
    print(f"\n📨 Decoding Message {i+1}: {encrypted_msg}")
    
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
print("\n🎮 YOUR TURN TO DECODE!")
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

print(f"\n✨ YOUR DECODED MESSAGE: {decoded_message}")

# Real-world connection
print("\n🌐 REAL WORLD CONNECTION:")
print("🔐 HTTPS websites encrypt your data!")
print("💳 Credit cards, passwords, messages - all encrypted!")
print("🤖 AI models encrypt their training data too!")

# 🔧 Chip: "Modern encryption is like this but with HUGE numbers!"`,
      },
      {
        type: "code",
        emoji: "🎨",
        content: `## 🎨 String Art Creator - Text Transformation Magic!`,
        code: `# 🎨 STRING ART CREATOR - Transform Text Into Art!

print("🎨 STRING ART CREATOR")
print("Transform any text into beautiful patterns!")
print("=" * 40)

# Get user's text
text = input("✨ Enter text to transform: ")

print(f"\n🎨 Creating art from: '{text}'")
print("-" * 30)

# Transformation 1: Mirror Text
print("\n🪞 MIRROR WRITING:")
print(text + " | " + text[::-1])  # ::-1 reverses the string!

# Transformation 2: Zigzag Pattern
print("\n⚡ ZIGZAG PATTERN:")
for i, char in enumerate(text):
    if i % 2 == 0:
        print(char.upper(), end="")  # Even positions: uppercase
    else:
        print(char.lower(), end="")  # Odd positions: lowercase
print()

# Transformation 3: Letter Count Art
print("\n📊 LETTER ANALYSIS:")
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
print("\n🤐 SECRET CODE (every 2nd letter):")
secret = ""
for i in range(0, len(text), 2):  # Skip every other letter
    secret += text[i]
print(f"Hidden message: {secret}")

# Transformation 5: ASCII Art Letters
print("\n🔤 ASCII ART BLOCK LETTERS:")
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

print(f"\n🎉 String art complete for '{text}'!")

# 🐍 Py: "String manipulation is the foundation of all text processing!"`,
      },
      {
        type: "quiz",
        content: "🔐 Secret Agent String Master Quiz!",
        quiz: [
          {
            question: "🕵️ In Caesar cipher, if A becomes D, what does the letter M become?",
            options: ["N", "P", "J", "Q"],
            correctIndex: 1,
            explanation: "🕵️ Perfect! If A→D is a shift of +3, then M (13th letter) + 3 = P (16th letter). You cracked the code like a real secret agent! 破解了真正的密码！",
          },
          {
            question: "🔐 What does ord('A') return in Python?",
            options: ["1", "26", "65", "97"],
            correctIndex: 2,
            explanation: "🔐 Correct! ord('A') returns 65 - the ASCII number for uppercase A. This is how computers store letters as numbers for encryption! 计算机用数字存储字母！",
          },
          {
            question: "🌐 Why is encryption important in real life?",
            options: ["It makes text look cool", "It protects passwords and private data online", "It's only for spy movies", "It makes computers faster"],
            correctIndex: 1,
            explanation: "🌐 Exactly! Encryption protects your passwords, credit cards, messages, and private data. Every secure website uses it! 加密保护我们的隐私数据！",
          },
        ],
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

🤖 Botty says: "This project teaches the same logic used in gaming AI!"`,
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
        content: `## 🪨📄✂️ Rock Paper Scissors Championship Engine!`,
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

print(f"\n🎯 Championship Rules:")
print("🏅 First to 3 wins becomes champion!")
print("💫 Type your choice or 'quit' to exit")
print("🎨 Available moves: rock, paper, scissors")

# Main game loop!
while True:
    print(f"\n📊 SCOREBOARD:")
    print(f"🏆 {player_name}: {player_wins} | 🤖 Computer: {computer_wins} | 🤝 Ties: {ties}")
    
    # Check for championship victory!
    if player_wins == 3:
        print(f"\n🎉 CHAMPIONSHIP VICTORY! {player_name} wins!")
        print("🏆 You are the ULTIMATE CHAMPION!")
        break
    elif computer_wins == 3:
        print("\n💻 Computer wins the championship!")
        print("🎮 Better luck next time, champion!")
        break
    
    # Get player choice
    player_choice = input(f"\n🎯 Round {len(game_history) + 1} - Your move: ").lower()
    
    if player_choice == 'quit':
        print("👋 Thanks for playing! See you in the arena!")
        break
    
    if player_choice not in choice_list:
        print("🤔 Invalid move! Try 'rock', 'paper', or 'scissors'")
        continue
    
    # Computer makes its choice
    computer_choice = random.choice(choice_list)
    
    print(f"\n⚔️ BATTLE!")
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
print(f"\n🎪 CHAMPIONSHIP CEREMONY!")
print("=" * 30)
print(f"🏆 Final Score: {player_name} {player_wins} - {computer_wins} Computer")
print(f"📊 Total rounds: {len(game_history)}")
print(f"🤝 Ties: {ties}")

if len(game_history) > 0:
    print(f"\n📚 BATTLE HISTORY:")
    for battle in game_history:
        print(f"Round {battle['round']}: {choices[battle['player']]} vs {choices[battle['computer']]} → {battle['result']}")

print("\n🎮 Thanks for playing Rock Paper Scissors Championship!")

# 🔧 Chip: "This game uses every core programming concept you've learned!"`,
      },
      {
        type: "code",
        emoji: "📊",
        content: `## 📊 Advanced Statistics & Tournament Mode!`,
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
    print(f"\n📈 LIFETIME STATISTICS:")
    print(f"🎮 Games played: {total_games}")
    print(f"📊 Win rate: {calculate_win_rate()}%")
    print(f"🔥 Current streak: {win_streak}")
    print(f"🏆 Best streak: {best_streak}")
    
    play_again = input("\n🎯 Play a round? (yes/no): ").lower()
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
print(f"\n🏆 TOURNAMENT COMPLETE!")
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

print("\n🎪 Thanks for playing Advanced Championship!")

# 🤖 Botty: "You just built a game with AI learning capabilities!"`,
      },
      {
        type: "quiz",
        content: "🏆 Loop Forest Champion Graduation Quiz!",
        quiz: [
          {
            question: "🎮 Which Loop Forest skills did your Rock Paper Scissors game use?",
            options: ["Only if-else statements", "for loops, while loops, lists, strings, and random", "Just basic math", "Only variables and functions"],
            correctIndex: 1,
            explanation: "🏆 Perfect! Your championship game used the COMPLETE Loop Forest toolkit: for loops (rounds), while loops (game continuation), lists (history), strings (display), random (computer choices), and if-else (game logic). You're a programming champion! 你掌握了完整的编程工具包！",
          },
          {
            question: "🤖 How is Rock Paper Scissors related to AI and computer science?",
            options: ["It's just a simple game", "It teaches game theory, decision trees, and pattern recognition", "It only uses basic math", "It has no real applications"],
            correctIndex: 1,
            explanation: "🤖 Excellent insight! Rock Paper Scissors is used in computer science research for game theory, AI decision-making, and pattern recognition. Your simple game contains the same logic used in advanced AI systems! 包含了高级AI系统的逻辑！",
          },
          {
            question: "🔥 What's the most impressive part of your programming journey so far?",
            options: ["Learning individual commands", "Building complete interactive programs that combine multiple concepts", "Memorizing syntax", "Using a computer"],
            correctIndex: 1,
            explanation: "🔥 YES! You've evolved from learning individual commands to building complete, interactive programs that combine loops, lists, strings, conditionals, and random elements. You're thinking like a real software developer now! 你现在像真正的软件开发者一样思考！",
          },
        ],
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

🐢 **Click Run to see the turtle draw!** 点击运行看海龟画图！`,
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

print("\n🎉 NEIGHBORHOOD COMPLETE!")
print("🧱 Look how we built complex things from simple blocks!")

# 🔧 Chip: "This is exactly how video game graphics are programmed!"
# 🤖 Botty: "AI models work the same way - simple functions combined!"

turtle.done()`,
      },
      {
        type: "code",
        emoji: "🎨",
        content: `## 🎨 Advanced Function Factory - Art Generator!

💻 **Create amazing art with code building blocks!**`,
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
print(f"\n🏅 Your art scored {final_score} points!")

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
        content: `## 🧮 Function Calculator - Building Blocks for Math!`,
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
    print(f"\n🥊 AREA SHOWDOWN!")
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
    print(f"\n📊 CALCULATION REPORT:")
    print(f"📐 Rectangle area: {rect_area}")
    print(f"⭕ Circle area: {circ_area:.2f}")
    print(f"🏆 Area champion: {winner}")
    
    total_area = add_numbers(rect_area, circ_area)
    print(f"🏠 Combined area: {total_area:.2f}")
    
    return total_area

# Generate final report
total = generate_report(rectangle_area, circle_area, winner)

print(f"\n🎉 Calculator complete! Total area processed: {total:.2f}")

# 🔧 Chip: "Calculators and computers use functions exactly like this!"
# 🤖 Botty: "AI math models are just millions of functions like these!"`,
      },
      {
        type: "quiz",
        content: "🧱 Function Factory Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: What's the main advantage of functions?",
            options: ["They make code longer", "They create reusable building blocks", "They slow down programs", "They use more memory"],
            correctIndex: 1,
            explanation: "🐍 Py: Perfect! Functions create reusable building blocks - write once, use everywhere! Just like LEGO blocks for code! 函数是代码的乐高积木！",
          },
          {
            question: "🧱 What does 'return' do in a function?",
            options: ["Prints a message", "Gives back a result to whoever called the function", "Restarts the function", "Deletes the function"],
            correctIndex: 1,
            explanation: "🧱 Exactly! return sends the function's result back to the caller, like a factory delivering a finished product! 返回函数的计算结果！",
          },
          {
            question: "🏠 In our house builder, why is draw_square() better than writing 4 lines every time?",
            options: ["It's shorter to type", "It's reusable, readable, and easier to modify", "It runs faster", "It uses less memory"],
            correctIndex: 1,
            explanation: "🏠 Right! Functions make code reusable (use anywhere), readable (clear purpose), and maintainable (fix in one place). That's professional programming! 专业编程的精髓！",
          },
          {
            question: "🤖 Botty asks: How are functions related to AI?",
            options: ["They're not related", "AI models are made of millions of specialized functions working together", "AI only uses loops", "Functions are too simple for AI"],
            correctIndex: 1,
            explanation: "🤖 Botty: Brilliant! AI models like ChatGPT are made of millions of functions - each doing a small specialized job. You're learning the building blocks of AI! AI模型就是无数个函数的组合！",
          },
        ],
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
        content: `## 📋 Agent Database - Create Secret Profiles!`,
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
        print(f"\n🔍 AGENT PROFILE: {agent['codename']}")
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
print("\n🎮 TESTING AGENT DATABASE OPERATIONS:")

# Display all agent profiles
for codename in agent_database:
    display_agent_profile(codename)

# Update agent statuses
print("\n📝 STATUS UPDATES:")
update_agent_status("007", "On Mission")
update_agent_status("phoenix", "Training")

# Complete missions
print("\n🎯 MISSION COMPLETIONS:")
complete_mission("007")
complete_mission("black_widow")

# Show updated profile
print("\n🔍 UPDATED PROFILE:")
display_agent_profile("007")

print("\n🔒 Database operations complete!")

# 🔧 Chip: "This is exactly how real databases work!"`,
      },
      {
        type: "code",
        emoji: "🔍",
        content: `## 🔍 Mission Assignment System - Advanced Dictionary Operations!`,
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
    
    print(f"\n🎯 ANALYZING: {mission['mission_name']}")
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
    
    print(f"\n📋 MISSION ASSIGNED!")
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
print(f"\n📊 FINAL STATUS REPORT:")
print("AGENT STATUS:")
for agent_code, agent_data in agents.items():
    print(f"🕵️ Agent {agent_code}: {agent_data['status']}")

print("\nMISSION STATUS:")
for mission_key, mission_data in missions.items():
    print(f"🎯 {mission_data['mission_name']}: {mission_data['status']}")

print("\n🔒 Mission assignment complete!")

# 🤖 Botty: "This is how AI systems match data and make decisions!"`,
      },
      {
        type: "quiz",
        content: "🕵️ Secret Agent Dictionary Master Quiz!",
        quiz: [
          {
            question: "🐍 Py asks: How do you access Agent 007's real name from the dictionary?",
            options: ["agent_007[0]", "agent_007['real_name']", "agent_007.real_name", "agent_007(real_name)"],
            correctIndex: 1,
            explanation: "🐍 Py: Perfect! Use dictionary['key'] to access values. Much clearer than remembering position numbers! 用键名访问字典值！",
          },
          {
            question: "🕵️ What's the main advantage of dictionaries over lists for agent profiles?",
            options: ["Dictionaries are faster", "Meaningful key names instead of position numbers", "Dictionaries use less memory", "Dictionaries are newer"],
            correctIndex: 1,
            explanation: "🕵️ Exactly! 'clearance_level' is much clearer than 'position 3'. Dictionaries make data self-documenting! 键名比位置更有意义！",
          },
          {
            question: "🔍 How do you check if an agent exists in the database?",
            options: ["agent in database", "database.has(agent)", "database.contains(agent)", "database.find(agent)"],
            correctIndex: 0,
            explanation: "🔍 Right! 'if key in dictionary:' checks if a key exists. Essential for preventing database errors! 检查键是否存在防止错误！",
          },
          {
            question: "🤖 Botty asks: How are dictionaries used in real-world systems?",
            options: ["Only in Python programs", "JSON APIs, databases, configuration files, web data", "Just for games", "Only for storing numbers"],
            correctIndex: 1,
            explanation: "🤖 Botty: Brilliant! Dictionaries (key-value pairs) power the internet - JSON APIs, databases, config files, web forms. You're learning universal data structures! 字典结构无处不在！",
          },
        ],
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
        content: `## 📝 High Score Recorder - Writing Hall of Fame!`,
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
        content: `## 🥇 Advanced Hall of Fame - Top 10 Leaderboard!`,
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
        type: "quiz",
        content: "🏆 High Score File Master Quiz!",
        quiz: [
          {
            question: "🔧 Chip asks: What's the main difference between variables and files?",
            options: ["Files are faster", "Variables survive program restarts, files don't", "Files survive program restarts, variables don't", "No difference"],
            correctIndex: 2,
            explanation: "🔧 Chip: Perfect! Files are PERSISTENT - they survive restarts, while variables are TEMPORARY - gone when the program ends. Essential for saving game progress! 文件是持久存储！",
          },
          {
            question: "💾 What does 'with open(filename, \"a\")' do?",
            options: ["Opens file and erases everything", "Opens file to add new content at the end", "Opens file to read only", "Creates a new file"],
            correctIndex: 1,
            explanation: "💾 Right! 'a' means APPEND - add new content without erasing existing data. Perfect for growing high score lists! append模式在末尾添加内容！",
          },
          {
            question: "🏆 Why is exception handling important when working with files?",
            options: ["Files are unreliable", "File operations can fail (missing files, permissions, etc.)", "It makes code faster", "It's required by Python"],
            correctIndex: 1,
            explanation: "🏆 Exactly! File operations can fail for many reasons - file doesn't exist, no permissions, disk full, etc. Good programmers always handle these cases gracefully! 文件操作需要异常处理！",
          },
          {
            question: "🤖 Botty asks: How are files used in AI and real applications?",
            options: ["Only for simple text storage", "Configuration, data storage, model saving, logs, backups", "Just for game scores", "AI doesn't use files"],
            correctIndex: 1,
            explanation: "🤖 Botty: Brilliant! Files are everywhere - AI model weights, configuration settings, training data, log files, backups. Every serious application depends on file I/O! 文件是现代应用的基础！",
          },
        ],
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
        type: "quiz",
        content: "🔍 Bug Detective Quiz!",
        quiz: [
          {
            question: "🔍 What's the best way to find a logic error?",
            options: ["Guess randomly", "Add print statements to trace values", "Rewrite everything", "Ask someone else"],
            correctIndex: 1,
            explanation: "🔍 Adding print statements helps you trace what your program is actually doing!",
          },
        ],
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
        type: "quiz",
        content: "🛡️ Error Shield Quiz!",
        quiz: [
          {
            question: "🛡️ What does try-except do?",
            options: ["Prevents all errors", "Catches and handles specific errors gracefully", "Fixes bugs automatically", "Makes code run faster"],
            correctIndex: 1,
            explanation: "🛡️ try-except catches specific errors and lets you handle them gracefully instead of crashing!",
          },
        ],
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
        type: "quiz",
        content: "🧰 Module Quiz!",
        quiz: [
          {
            question: "🧰 How do you use code from another file?",
            options: ["copy and paste", "import module_name", "download module_name", "link module_name"],
            correctIndex: 1,
            explanation: "🧰 Use 'import module_name' to bring in code from other files or libraries!",
          },
        ],
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
- 🛡️ **Error handling** for robust operation`,
      },
      {
        type: "quiz",
        content: "🏗️ Builder City Graduation Quiz!",
        quiz: [
          {
            question: "🏗️ What makes you a 'builder' now?",
            options: ["You can write longer programs", "You can create reusable tools and organize complex data", "You memorized more functions", "You can type faster"],
            correctIndex: 1,
            explanation: "🏗️ You're now a builder because you create reusable functions, organize data with dictionaries, and build systems that persist!",
          },
        ],
      },
    ],
  },

  // Area 4: Science Lab (6 lessons) - abbreviated
  {
    id: "4-1",
    moduleId: "area-4",
    title: "Math Canvas",
    subtitle: "Data visualization basics · 数学画板：数据可视化基础",
    icon: "📊",
    xp: 35,
    duration: "25 min",
    order: 1,
    gradeRange: [7, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "📊",
        content: `## 📊 Welcome to the Science Lab!

**🧪 Now you'll use programming to solve real scientific problems!**`,
      },
      {
        type: "quiz",
        content: "📊 Math Canvas Quiz!",
        quiz: [
          {
            question: "📊 Why is data visualization important?",
            options: ["It looks pretty", "It helps us see patterns in data", "It's required by computers", "It uses more memory"],
            correctIndex: 1,
            explanation: "📊 Visualization helps us see patterns and trends that are hidden in raw numbers!",
          },
        ],
      },
    ],
  },

  {
    id: "4-2",
    moduleId: "area-4",
    title: "Random World",
    subtitle: "Probability and simulation · 随机世界：概率和模拟",
    icon: "🎲",
    xp: 35,
    duration: "22 min",
    order: 2,
    gradeRange: [7, 10],
    difficulty: "intermediate",
    skillLevel: "intermediate",
    sections: [
      {
        type: "text",
        emoji: "🎲",
        content: `## 🎲 Randomness in Computing

**🤖 Botty:** "Randomness powers AI learning and decision making!"`,
      },
      {
        type: "quiz",
        content: "🎲 Random World Quiz!",
        quiz: [
          {
            question: "🎲 How does randomness help in programming?",
            options: ["It makes programs unpredictable", "It enables simulations, games, and AI learning", "It breaks programs", "It's only for entertainment"],
            correctIndex: 1,
            explanation: "🎲 Randomness enables simulations, game variety, AI exploration, and statistical modeling!",
          },
        ],
      },
    ],
  },

  {
    id: "4-3",
    moduleId: "area-4",
    title: "Physics Simulator",
    subtitle: "Code meets physics · 物理模拟器：代码遇见物理",
    icon: "🚀",
    xp: 35,
    duration: "25 min",
    order: 3,
    gradeRange: [7, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🚀",
        content: `## 🚀 Programming Physics

**🔧 Chip:** "The same formulas that control rockets can be programmed!"`,
      },
      {
        type: "quiz",
        content: "🚀 Physics Simulator Quiz!",
        quiz: [
          {
            question: "🚀 How do physics engines in games work?",
            options: ["Magic", "Mathematical formulas calculated many times per second", "Random guessing", "Pre-recorded movements"],
            correctIndex: 1,
            explanation: "🚀 Physics engines use mathematical formulas calculated 60+ times per second to simulate realistic motion!",
          },
        ],
      },
    ],
  },

  {
    id: "4-4",
    moduleId: "area-4",
    title: "Data Detective",
    subtitle: "Find patterns in numbers · 数据侦探：在数字中找规律",
    icon: "🔍",
    xp: 35,
    duration: "22 min",
    order: 4,
    gradeRange: [7, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🔍",
        content: `## 🔍 Data Analysis Skills

**🤖 Botty:** "This is how AI finds patterns — by analyzing lots of data!"`,
      },
      {
        type: "quiz",
        content: "🔍 Data Detective Quiz!",
        quiz: [
          {
            question: "🔍 What can data analysis reveal?",
            options: ["Nothing useful", "Hidden patterns and trends", "Only obvious information", "Random noise"],
            correctIndex: 1,
            explanation: "🔍 Data analysis reveals hidden patterns, trends, and insights that aren't obvious from raw data!",
          },
        ],
      },
    ],
  },

  {
    id: "4-5",
    moduleId: "area-4",
    title: "Cryptography Intro",
    subtitle: "Codes and computer security · 密码学入门：编码与计算机安全",
    icon: "🔐",
    xp: 35,
    duration: "25 min",
    order: 5,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🔐",
        content: `## 🔐 Secret Codes and Security

**🔧 Chip:** "Every secure website uses cryptography to protect your data!"`,
      },
      {
        type: "quiz",
        content: "🔐 Cryptography Quiz!",
        quiz: [
          {
            question: "🔐 Why is cryptography important?",
            options: ["It's not important", "It protects private information from unauthorized access", "It makes computers slower", "It's only for spies"],
            correctIndex: 1,
            explanation: "🔐 Cryptography protects your passwords, messages, and personal data from being stolen!",
          },
        ],
      },
    ],
  },

  {
    id: "4-6",
    moduleId: "area-4",
    title: "🎮 Science Report Generator",
    subtitle: "Complete lab project · 科学实验报告生成器：完整实验项目",
    icon: "🎮",
    xp: 50,
    duration: "30 min",
    order: 6,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🎮",
        content: `## 🎮 Science Lab Final Project!

**🧪 Create a complete science report generator using:**
- 📊 **Data visualization** for charts
- 🎲 **Random simulation** for experiments
- 🚀 **Physics calculations** for analysis
- 🔍 **Data analysis** for conclusions`,
      },
      {
        type: "quiz",
        content: "🧪 Science Lab Graduation Quiz!",
        quiz: [
          {
            question: "🧪 How does programming help scientists?",
            options: ["It doesn't help", "It automates calculations, simulations, and data analysis", "Only for writing reports", "Just for making charts"],
            correctIndex: 1,
            explanation: "🧪 Programming automates complex calculations, runs simulations, analyzes data, and helps scientists focus on discovery!",
          },
        ],
      },
    ],
  },

  // Area 5: AI Frontier (5 lessons)
  {
    id: "5-1",
    moduleId: "area-5",
    title: "What is AI?",
    subtitle: "Understanding artificial intelligence · AI是什么：理解人工智能",
    icon: "🤖",
    xp: 35,
    duration: "20 min",
    order: 1,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🤖",
        content: `## 🤖 Welcome to the AI Frontier!

**🤖 Botty:** "Finally, you're ready to understand how I work!"

AI isn't magic — it's advanced programming using the same concepts you've learned:
- **Variables** to store data
- **Loops** for processing 
- **Functions** for organization
- **Math** for calculations

The difference? **Scale and complexity!**`,
      },
      {
        type: "quiz",
        content: "🤖 AI Understanding Quiz!",
        quiz: [
          {
            question: "🤖 What is AI fundamentally based on?",
            options: ["Magic", "Advanced mathematics and programming", "Alien technology", "Random guessing"],
            correctIndex: 1,
            explanation: "🤖 AI is advanced mathematics and programming! Every 'intelligent' behavior comes from mathematical calculations.",
          },
        ],
      },
    ],
  },

  {
    id: "5-2",
    moduleId: "area-5",
    title: "Code with AI",
    subtitle: "Collaborative programming · 跟AI合作写代码：协作编程",
    icon: "🤝",
    xp: 35,
    duration: "25 min",
    order: 2,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🤝",
        content: `## 🤝 AI as Your Programming Partner

**🤖 Botty:** "I'm here to help, but you're still the boss!"

AI can help with:
- ✅ **Code suggestions** and completion
- ✅ **Explaining errors** in plain English
- ✅ **Generating boilerplate** code
- ❌ But YOU still need to understand and verify everything!`,
      },
      {
        type: "quiz",
        content: "🤝 AI Collaboration Quiz!",
        quiz: [
          {
            question: "🤝 What's the best way to use AI for coding?",
            options: ["Copy everything AI suggests without thinking", "Use AI suggestions as starting points, then review and improve", "Never use AI", "Only use AI for simple tasks"],
            correctIndex: 1,
            explanation: "🤝 Use AI as a starting point, then apply your programming knowledge to review, improve, and verify!",
          },
        ],
      },
    ],
  },

  {
    id: "5-3",
    moduleId: "area-5",
    title: "AI Makes Mistakes Too",
    subtitle: "Critical thinking with AI · AI也会犯错：与AI的批判性思维",
    icon: "🔍",
    xp: 35,
    duration: "22 min",
    order: 3,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🔍",
        content: `## 🔍 AI Isn't Perfect!

**🤖 Botty:** "I make mistakes too! That's why you need to think critically."

Common AI coding mistakes:
- 🐛 **Logic errors** that look correct
- ❌ **Outdated solutions** using old methods
- 🔍 **Missing edge cases**
- 🎯 **Over-complicated solutions**

**Your job:** Be the smart human who catches these!`,
      },
      {
        type: "quiz",
        content: "🔍 AI Critical Thinking Quiz!",
        quiz: [
          {
            question: "🔍 Why is it important to review AI-generated code?",
            options: ["AI never makes mistakes", "AI can have logic errors and miss edge cases", "It's not important", "AI is always better than humans"],
            correctIndex: 1,
            explanation: "🔍 AI can make subtle logic errors, use outdated methods, or miss edge cases. Human review is essential!",
          },
        ],
      },
    ],
  },

  {
    id: "5-4",
    moduleId: "area-5",
    title: "Simple Classifier",
    subtitle: "Build basic AI logic · 简单分类器：构建基础AI逻辑",
    icon: "🧠",
    xp: 40,
    duration: "25 min",
    order: 4,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🧠",
        content: `## 🧠 Build Your Own "AI"

**🤖 Botty:** "Let's build a simple classifier using if-else statements — it's baby AI!"

You'll create a program that categorizes things, just like AI does (but simpler):
- **Input:** Description of something
- **Processing:** Use if-else logic to categorize  
- **Output:** Category prediction

This is the foundation of machine learning!`,
      },
      {
        type: "quiz",
        content: "🧠 AI Logic Quiz!",
        quiz: [
          {
            question: "🧠 What's the basic pattern of AI classification?",
            options: ["Random guessing", "Input → Processing → Output category", "Magic prediction", "Copy-paste answers"],
            correctIndex: 1,
            explanation: "🧠 All AI classification follows: Input (data) → Processing (analysis) → Output (category/prediction)!",
          },
        ],
      },
    ],
  },

  {
    id: "5-5",
    moduleId: "area-5",
    title: "🎮 Graduation Project",
    subtitle: "My AI Helper · 毕业项目：我的AI助手",
    icon: "🎮",
    xp: 60,
    duration: "35 min",
    order: 5,
    gradeRange: [8, 10],
    difficulty: "advanced",
    skillLevel: "advanced",
    sections: [
      {
        type: "text",
        emoji: "🎮",
        content: `## 🎮 The Ultimate Graduation Project!

**🏆 Congratulations! You've reached the final challenge!**

**Build your own AI assistant using EVERYTHING you've learned:**

🏝️ **Starter Island:** Variables, input/output, decisions
🌀 **Loop Forest:** Loops, lists, string processing  
🏗️ **Builder City:** Functions, dictionaries, files
🧪 **Science Lab:** Data analysis, math, simulations
🤖 **AI Frontier:** Understanding and collaborating with AI

**Create an AI helper that can:**
- 💬 Have conversations
- 📊 Analyze data
- 🧮 Perform calculations
- 💾 Remember information
- 🎯 Make decisions`,
      },
      {
        type: "quiz",
        content: "🏆 Final Graduation Quiz!",
        quiz: [
          {
            question: "🏆 What programming concepts have you mastered?",
            options: ["Just basic syntax", "Complete programming toolkit: variables, loops, functions, data structures, AI collaboration", "Only Python basics", "Just simple math"],
            correctIndex: 1,
            explanation: "🏆 You've mastered the complete programming toolkit! You can build interactive programs, process data, create tools, and collaborate with AI!",
          },
          {
            question: "🤖 How has your understanding of AI changed?",
            options: ["AI is still magic to me", "I understand AI is advanced programming using familiar concepts", "AI is too complex to understand", "AI is just for experts"],
            correctIndex: 1,
            explanation: "🤖 You now understand that AI is advanced programming using the same fundamental concepts you've learned — variables, loops, functions, and math at massive scale!",
          },
          {
            question: "🚀 What can you build now?",
            options: ["Only simple scripts", "Interactive applications with data processing, AI collaboration, and real-world problem solving", "Just homework assignments", "Only what tutorials teach"],
            correctIndex: 1,
            explanation: "🚀 You can now build real applications! Games, data analyzers, AI-assisted tools, scientific calculators — you have the complete toolkit!",
          },
        ],
      },
    ],
  },
];

// Helper functions remain the same
export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id);
}

export function getModuleById(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}

export function getLessonsByModule(moduleId: string): Lesson[] {
  return LESSONS.filter((l) => l.moduleId === moduleId).sort((a, b) => a.order - b.order);
}

/** Get all lessons in module order (flattened) */
export function getAllLessonsOrdered(): Lesson[] {
  const ordered: Lesson[] = [];
  for (const mod of MODULES) {
    const modLessons = LESSONS.filter((l) => l.moduleId === mod.id).sort((a, b) => a.order - b.order);
    ordered.push(...modLessons);
  }
  return ordered;
}

/** Get the previous and next lesson relative to the given lesson ID */
export function getAdjacentLessons(lessonId: string): { prev: Lesson | null; next: Lesson | null; isLastInModule: boolean; isVeryLast: boolean; nextModuleTitle?: string } {
  const all = getAllLessonsOrdered();
  const idx = all.findIndex((l) => l.id === lessonId);
  if (idx === -1) return { prev: null, next: null, isLastInModule: false, isVeryLast: false };

  const current = all[idx];
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;
  const isVeryLast = idx === all.length - 1;
  const isLastInModule = next ? next.moduleId !== current.moduleId : true;
  const nextModuleTitle = next && isLastInModule ? MODULES.find((m) => m.id === next.moduleId)?.title : undefined;

  return { prev, next, isLastInModule, isVeryLast, nextModuleTitle };
}