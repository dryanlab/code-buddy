// Code Buddy - C++ Track
// 6 Modules, 25 Lessons
// Target: High school students WITH Python basics
// Characters: 🐍Py (Python comparison), ⚡Volt (C++ guide), 🔧Chip (Hardware/performance)

import type {
  Lesson,
  Module,
  LessonSection,
} from "./lessons";

// ═══════════════════════════════════════════════════════════════
// C++ MODULES
// ═══════════════════════════════════════════════════════════════

export const CPP_MODULES: Module[] = [
  {
    id: "cpp-1",
    title: "⚡ C++ Basics",
    subtitle: "From Python to C++ · 从Python到C++",
    icon: "⚡",
    color: "from-blue-500 to-indigo-600",
    lessons: ["cpp-1-1", "cpp-1-2", "cpp-1-3", "cpp-1-4", "cpp-1-5", "cpp-1-6"],
  },
  {
    id: "cpp-2",
    title: "🔀 Control Flow",
    subtitle: "Decisions and loops with braces · 用花括号控制流程",
    icon: "🔀",
    color: "from-emerald-500 to-teal-600",
    lessons: ["cpp-2-1", "cpp-2-2", "cpp-2-3", "cpp-2-4"],
  },
  {
    id: "cpp-3",
    title: "📦 Functions & Arrays",
    subtitle: "Typed functions, arrays, vectors · 类型化函数、数组和向量",
    icon: "📦",
    color: "from-orange-500 to-amber-600",
    lessons: ["cpp-3-1", "cpp-3-2", "cpp-3-3", "cpp-3-4", "cpp-3-5"],
  },
  {
    id: "cpp-4",
    title: "🔗 Pointers & OOP",
    subtitle: "Memory and object-oriented programming · 指针与面向对象",
    icon: "🔗",
    color: "from-red-500 to-rose-600",
    lessons: ["cpp-4-1", "cpp-4-2", "cpp-4-3", "cpp-4-4"],
  },
  {
    id: "cpp-5",
    title: "🧰 STL Power",
    subtitle: "Standard Template Library mastery · STL标准模板库",
    icon: "🧰",
    color: "from-purple-500 to-violet-600",
    lessons: ["cpp-5-1", "cpp-5-2", "cpp-5-3"],
  },
  {
    id: "cpp-6",
    title: "🏆 Competition Prep",
    subtitle: "Competitive programming skills · 竞赛编程技巧",
    icon: "🏆",
    color: "from-yellow-500 to-orange-600",
    lessons: ["cpp-6-1", "cpp-6-2", "cpp-6-3"],
  },
];

// ═══════════════════════════════════════════════════════════════
// MODULE CPP-1: C++ BASICS — 从Python到C++ (6 lessons, EXTRA DETAILED)
// ═══════════════════════════════════════════════════════════════

const cpp_1_1: Lesson = {
  id: "cpp-1-1",
  moduleId: "cpp-1",
  title: "Welcome to C++! Hello, Compiler!",
  subtitle: "Your first C++ program · 你的第一个C++程序",
  icon: "👋",
  xp: 150,
  duration: "25 min",
  order: 1,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "⚡",
      content: `# Welcome to C++! 欢迎来到C++！

⚡ **Volt says:** "Hey there! You already know Python — awesome! Now let's learn C++, one of the most powerful programming languages ever created."

🐍 **Py says:** "Don't worry, I'll be here to remind you how we did things in Python. You'll see — a lot of the *logic* is the same, just the *syntax* is different!"

## Why C++? 为什么学C++？

C++ is used for:

- 🎮 **Game engines** (Unreal Engine, Unity internals)

- 💻 **Operating systems** (Windows, macOS, Linux)

- 🏎️ **Competitive programming** (USACO, Codeforces, IOI)

- 🤖 **Robotics & embedded systems**
- 🚀 **High-performance applications** (10-100x faster than Python!)

🔧 **Chip says:** "C++ gives you direct control over memory and hardware. Python is like driving an automatic car; C++ is like driving a manual — more control, more power, but you need to learn more!"`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Your First C++ Tools",
      concept: {
        title: "🧰 New Syntax: Your First C++ Tools",
        titleZh: "新语法：你的第一批 C++ 工具",
        syntaxCards: [
            {
              symbol: "#include <iostream>",
              name: "Include a Library",
              nameZh: "引入库",
              emoji: "📦",
              description: "Like importing a toolbox 📦 before you start building. #include brings in pre-made tools. <iostream> gives you input/output (cin/cout).",
              example: "#include <iostream>\n// Now you can use cout and cin!",
            },
            {
              symbol: "std::cout <<",
              name: "Print / Output to screen",
              nameZh: "输出到屏幕",
              emoji: "📢",
              description: "Like Python's print()! cout is a megaphone 📢 and << points your message toward the screen. std:: tells C++ where to find it.",
              example: "std::cout << \"Hello!\" << std::endl;",
            },
            {
              symbol: "std::endl",
              name: "End Line (new line)",
              nameZh: "换行",
              emoji: "↩️",
              description: "Like pressing Enter ↩️ on your keyboard. Moves the cursor to the next line after printing.",
              example: "std::cout << \"Line 1\" << std::endl;\nstd::cout << \"Line 2\" << std::endl;",
            },
            {
              symbol: "int main() { }",
              name: "Main Function (entry point)",
              nameZh: "主函数（程序入口）",
              emoji: "🚪",
              description: "The front door 🚪 of your program. Every C++ program starts running from main(). The { } braces are the walls of your house.",
              example: "int main() {\n  // your code here\n  return 0;\n}",
            },
            {
              symbol: "return 0;",
              name: "Return success code",
              nameZh: "返回成功代码",
              emoji: "✅",
              description: "Like giving a thumbs up 👍 to the operating system. return 0 means \"everything went fine!\" Don't forget the semicolon!",
              example: "int main() {\n  return 0; // success!\n}",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import the I/O library — like \"import\" in Python, but for input/output tools", explanationZh: "引入输入输出库 — 类似 Python 的 import，用于输入输出工具" },
              { code: "int main() {", explanation: "Start of the main function — every C++ program begins here", explanationZh: "主函数开始 — 每个 C++ 程序从这里开始执行" },
              { code: "    std::cout << \"Hello, World!\" << std::endl;", explanation: "Print \"Hello, World!\" to the screen, then go to a new line", explanationZh: "在屏幕上打印 \"Hello, World!\"，然后换行" },
              { code: "    return 0;", explanation: "Tell the OS the program finished successfully (0 = no errors)", explanationZh: "告诉操作系统程序成功结束（0 = 没有错误）" },
              { code: "}", explanation: "End of the main function — closing brace matches the opening one", explanationZh: "主函数结束 — 右花括号与左花括号配对" },
          ],
        },
      },
    },
    {
      type: "text",
      emoji: "🔄",
      content: `# Compiled vs Interpreted · 编译 vs 解释

## 🐍 Python (Interpreted 解释型)
You write code → Python reads it line by line → runs it immediately.
\`\`\`
python my_program.py  →  runs directly!
\`\`\`

## ⚡ C++ (Compiled 编译型)
You write code → **Compiler** translates it to machine code → THEN you run it.
\`\`\`
g++ my_program.cpp -o my_program  →  creates executable
./my_program                       →  runs the executable
\`\`\`

⚡ **Volt says:** "The extra compilation step is why C++ is SO fast. The compiler optimizes your code into machine language that the CPU understands directly!"

🔧 **Chip says:** "Think of it this way: Python is like having a translator speaking for you in real-time. C++ is like translating the whole book first — takes time upfront, but then reading is instant!"`,
    },
    {
      type: "code",
      emoji: "📝",
      content: `# Your First C++ Program · 你的第一个C++程序

🎯 **What you'll learn · 你将学到:**
- The basic structure of every C++ program
- How \`#include\`, \`main()\`, and \`cout\` work together
- Why C++ needs more "ceremony" than Python

Think of a C++ program like a **formal letter** ✉️ — Python is a text message (quick, casual), but C++ is a letter with a header, greeting, body, and signature. More structure, but more powerful!

🔑 **Key things to notice · 注意要点:**
- \`#include <iostream>\` = importing the I/O library (like Python's import)
- \`int main()\` = the starting point of EVERY C++ program
- \`cout << "text"\` = C++'s version of \`print()\`
- \`return 0;\` = tells the OS "everything went fine!" 👍
- Every statement ends with a semicolon \`;\`

👀 Compare this to the Python version — same output, different syntax!`,
      code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "🔬",
      content: `# Line-by-Line Breakdown · 逐行解析

Let's understand every single line:

| Line | What it does | 中文解释 |
|------|-------------|---------|
| \`#include <iostream>\` | Import the input/output library | 导入输入输出库 |
| \`using namespace std;\` | Use the standard namespace (so we can write \`cout\` instead of \`std::cout\`) | 使用标准命名空间 |
| \`int main() {\` | The main function — every C++ program starts here | 主函数，程序从这里开始 |
| \`cout << "Hello, World!" << endl;\` | Print text to the screen | 输出文字到屏幕 |
| \`return 0;\` | Tell the OS the program finished successfully | 告诉系统程序成功结束 |
| \`}\` | End of main function | 主函数结束 |

🐍 **Py says:** "In Python, the program just runs top to bottom. In C++, everything must be inside \`main()\`. Think of \`main()\` as the starting gate!"

⚡ **Volt says:** "The \`#include\` is like Python's \`import\`. And \`return 0\` means 'everything went fine!' — it's like giving a thumbs up to the operating system."`,
    },
    {
      type: "code",
      emoji: "🖨️",
      content: `# cout — Your New print() · cout是你的新print()

🎯 **What you'll learn · 你将学到:**
- How to use \`cout\` to display text, numbers, and variables
- The \`<<\` operator chains multiple items together
- \`endl\` vs \`\\n\` for new lines

Think of \`cout\` like a **conveyor belt** 🏭 — the \`<<\` arrows push items onto the belt one by one, and they come out on screen in order!

🔑 **Key things to notice · 注意要点:**
- \`cout << "text"\` prints text (like Python's \`print()\`)
- Chain multiple items: \`cout << "Age: " << 15 << endl;\`
- \`endl\` = end line (like Python's automatic newline)
- No automatic spaces between items — you must add them yourself!

👀 Try changing the messages and see how \`<<\` chains work!`,
      code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl;
    cout << "My name is " << "Volt" << endl;
    cout << "Age: " << 15 << endl;
    
    // You can chain multiple items with <<
    cout << "I am " << 15 << " years old and love " << "C++" << endl;
    
    // endl = end line (like pressing Enter)
    // You can also use \\n inside strings:
    cout << "Line 1\\nLine 2\\nLine 3\\n";
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "⚠️",
      content: `# What Could Go Wrong? · 常见错误

## ❌ Error 1: Missing semicolon 忘记分号
\`\`\`cpp
cout << "Hello" << endl   // ERROR! Missing ;
\`\`\`
**Fix:** Every statement in C++ ends with \`;\` (semicolon). Python doesn't need this!

## ❌ Error 2: Missing #include 忘记包含头文件
\`\`\`cpp
int main() {
    cout << "Hello";  // ERROR! cout is not declared
    return 0;
}
\`\`\`
**Fix:** Add \`#include <iostream>\` at the top.

## ❌ Error 3: Wrong quotes 引号错误
\`\`\`cpp
cout << 'Hello';  // ERROR! Single quotes are for single characters only
\`\`\`
**Fix:** Use double quotes \`"Hello"\` for strings. Single quotes \`'H'\` are only for one character.

## ❌ Error 4: Missing return 忘记return
\`\`\`cpp
int main() {
    cout << "Hello";
    // Missing return 0; — actually this is OK in C++11+, but good practice to include it
}
\`\`\`

🐍 **Py says:** "In Python, we never worry about semicolons or includes. C++ is pickier — but that pickiness helps catch bugs early!"`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Write a C++ program that prints your name and your favorite food on separate lines.

Example output:
\`\`\`
My name is Alex
My favorite food is pizza
\`\`\``,
      exercise: {
        prompt: "Print your name and favorite food on separate lines",
        promptZh: "在两行分别打印你的名字和你最喜欢的食物",
        starterCode: `#include <iostream>
using namespace std;

int main() {
    // Print your name here
    
    // Print your favorite food here
    
    return 0;
}`,
        expectedOutput: "My name is Alex\nMy favorite food is pizza",
        hint: "Use cout << \"text\" << endl; for each line",
        hintZh: "每行使用 cout << \"文字\" << endl;",
        solution: `#include <iostream>
using namespace std;

int main() {
    cout << "My name is Alex" << endl;
    cout << "My favorite food is pizza" << endl;
    return 0;
}`,
      },
    },
    {
      type: "code",
      emoji: "💬",
      content: `# Comments in C++ · C++中的注释

🎯 **What you'll learn · 你将学到:**
- Single-line comments with \`//\`
- Multi-line comments with \`/* */\`
- How C++ comments compare to Python's \`#\`

Comments are like **sticky notes** 📝 on your code — the computer ignores them, but they help humans understand what's going on!

🔑 **Key things to notice · 注意要点:**
- \`//\` = single line comment (Python uses \`#\`)
- \`/* ... */\` = multi-line comment (Python uses triple quotes)
- Good comments explain WHY, not just WHAT
- Comments don't affect how the program runs

👀 Read through both styles and notice which feels more natural!`,
      code: `#include <iostream>
using namespace std;

int main() {
    // This is a single-line comment (like Python's #)
    
    /* This is a
       multi-line comment
       (Python uses triple quotes) */
    
    cout << "Comments are ignored by the compiler!" << endl;
    
    // Comments help explain your code
    // ALWAYS comment your C++ code -- it's harder to read than Python!
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🎨",
      content: `# Multiple Output Examples · 多种输出示例

🎯 **What you'll learn · 你将学到:**
- Different ways to format output with \`cout\`
- Combining text, numbers, and special characters
- Using escape sequences like \`\\n\` and \`\\t\`

Think of \`cout\` as your program's **megaphone** 📢 — these examples show all the different ways you can shout information to the screen!

🔑 **Key things to notice · 注意要点:**
- \`\\n\` inside strings = new line (alternative to \`endl\`)
- \`\\t\` = tab character for alignment
- You can mix strings and numbers freely with \`<<\`
- Each \`cout\` statement doesn't automatically start a new line unless you add one

👀 Try predicting the output before running each example!`,
      code: `#include <iostream>
using namespace std;

int main() {
    // Method 1: Simple text
    cout << "Hello!" << endl;
    
    // Method 2: Numbers
    cout << 42 << endl;
    cout << 3.14 << endl;
    
    // Method 3: Mix text and numbers
    cout << "The answer is " << 42 << endl;
    
    // Method 4: Multiple items chained
    cout << "Pi is approximately " << 3.14159 << " and e is " << 2.71828 << endl;
    
    // Method 5: Using \\n instead of endl
    cout << "Line 1\\n";
    cout << "Line 2\\n";
    cout << "Line 3\\n";
    
    // Method 6: Printing special characters
    cout << "She said \\"Hello!\\"" << endl;  // Use \\" for quotes
    cout << "Path: C:\\\\Users\\\\Name" << endl;  // Use \\\\ for backslash
    cout << "Tab\\there" << endl;  // \\t for tab
    
    return 0;
}`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quick Quiz · 小测验",
      quiz: [
        {
          question: "What does `#include <iostream>` do in C++?\n`#include <iostream>` 在C++中做什么？",
          options: ["Creates a variable 创建变量", "Imports the input/output library 导入输入输出库", "Ends the program 结束程序", "Runs the program 运行程序"],
          correctIndex: 1,
          explanation: "#include <iostream> imports the I/O library so we can use cout and cin. It's like Python's 'import' statement! · 它导入I/O库，这样我们才能使用cout和cin。",
        },
        {
          question: "Which symbol ends every C++ statement?\n哪个符号结束每个C++语句？",
          options: ["!", ";", ":", "."],
          correctIndex: 1,
          explanation: "Every C++ statement ends with a semicolon (;). This is one of the biggest differences from Python! · 每个C++语句以分号(;)结尾。这是与Python最大的区别之一！",
        },
        {
          question: "What does `return 0;` mean in main()?\n在main()中 `return 0;` 是什么意思？",
          options: ["Print the number 0 打印数字0", "Restart the program 重启程序", "The program finished successfully 程序成功结束", "The program has an error 程序有错误"],
          correctIndex: 2,
          explanation: "return 0 tells the operating system that the program completed without errors. Non-zero values indicate errors. · return 0 告诉操作系统程序无错误完成。",
        },
        {
                  "question": "What is the purpose of `int main()` in a C++ program?\n`int main()` 在C++程序中有什么作用？",
                  "options": [
                            "It creates a variable called main · 创建一个叫main的变量",
                            "It imports libraries · 导入库",
                            "It's the entry point where the program starts running · 程序开始运行的入口",
                            "It prints output · 打印输出"
                  ],
                  "correctIndex": 2,
                  "explanation": "Every C++ program starts executing from main(). It's the entry point, like the front door of your program! · 每个C++程序从main()开始执行。"
        },
        {
                  "question": "What does `using namespace std;` do?\n`using namespace std;` 做什么？",
                  "options": [
                            "Lets you write cout instead of std::cout · 让你写cout而不是std::cout",
                            "Creates a new namespace · 创建新命名空间",
                            "Imports the math library · 导入数学库",
                            "Ends the program · 结束程序"
                  ],
                  "correctIndex": 0,
                  "explanation": "using namespace std; allows you to use cout, cin, endl etc. without the std:: prefix. · 它让你可以不写std::前缀直接使用cout等。"
        },
        {
                  "question": "What is the difference between a compiled and interpreted language?\n编译型和解释型语言的区别是什么？",
                  "options": [
                            "Compiled runs line by line; interpreted converts all at once · 编译逐行运行；解释一次性转换",
                            "Compiled is slower · 编译更慢",
                            "There is no difference · 没有区别",
                            "Compiled converts to machine code first, then runs; interpreted runs line by line · 编译先转机器码再运行；解释逐行运行"
                  ],
                  "correctIndex": 3,
                  "explanation": "C++ is compiled: the compiler translates your entire program to machine code first. Python is interpreted: it runs line by line. · C++先编译再运行，Python逐行运行。"
        },
        {
                  "question": "Which is the correct way to print in C++?\nC++中正确的打印方式是？",
                  "options": [
                            "cout << \"Hello\" << endl;",
                            "print(\"Hello\")",
                            "System.out.println(\"Hello\")",
                            "printf << \"Hello\""
                  ],
                  "correctIndex": 0,
                  "explanation": "cout << is the C++ way to print. print() is Python, System.out.println is Java! · cout <<是C++的打印方式。"
        },
        {
                  "type": "coding",
                  "question": "Write a C++ program that prints 'Hello, C++!' on one line and 'Goodbye, Python!' on the next.\n编写一个C++程序，第一行打印'Hello, C++!'，第二行打印'Goodbye, Python!'",
                  "prompt": "Print two lines: Hello, C++! and Goodbye, Python!",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Your code here\n    \n    return 0;\n}",
                  "expectedOutput": "Hello, C++!\nGoodbye, Python!",
                  "hint": "Use cout << \"text\" << endl; for each line · 每行使用 cout << \"文字\" << endl;",
                  "explanation": "Use two cout statements with endl to print on separate lines. · 使用两个cout语句加endl来分行打印。"
        },
        {
                  "type": "coding",
                  "question": "Write a program that prints the numbers 1, 2, 3 each on a separate line.\n编写程序，每行打印一个数字：1、2、3",
                  "prompt": "Print 1, 2, 3 on separate lines",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print 1, 2, 3 on separate lines\n    \n    return 0;\n}",
                  "expectedOutput": "1\n2\n3",
                  "hint": "You can print numbers directly: cout << 1 << endl; · 可以直接打印数字：cout << 1 << endl;",
                  "explanation": "cout can print numbers directly without quotes. Each endl creates a new line. · cout可以直接打印数字，endl换行。"
        },
      ],
    },
  ],
};

const cpp_1_2: Lesson = {
  id: "cpp-1-2",
  moduleId: "cpp-1",
  title: "Types are Serious Business",
  subtitle: "Static typing in C++ · C++的静态类型系统",
  icon: "🏷️",
  xp: 150,
  duration: "30 min",
  order: 2,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "🏷️",
      content: `# Types Matter in C++! · 类型在C++中很重要！

⚡ **Volt says:** "In C++, every variable has a TYPE, and you must declare it. No exceptions!"

🐍 **Py says:** "In Python, we just write \`x = 5\` and Python figures out it's an integer. In C++, you must TELL the compiler what type each variable is."

## 🐍 In Python (Dynamic Typing 动态类型):
\`\`\`python
x = 5           # Python knows it's an int
x = "hello"     # Now it's a string — Python is fine with this!
x = 3.14        # Now it's a float — no problem!
\`\`\`

## ⚡ In C++ (Static Typing 静态类型):
\`\`\`cpp
int x = 5;          // x is an integer — FOREVER
x = "hello";        // ❌ ERROR! Can't put a string in an int variable
x = 3.14;           // ⚠️ Converts to 3 (truncates decimal)
\`\`\`

🔧 **Chip says:** "Static typing makes C++ faster because the compiler knows exactly how much memory each variable needs. No guessing at runtime!"`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: C++ Data Types",
      concept: {
        title: "🧰 New Syntax: C++ Data Types",
        titleZh: "新语法：C++ 数据类型",
        syntaxCards: [
            {
              symbol: "int",
              name: "Integer (whole number)",
              nameZh: "整数",
              emoji: "🔢",
              description: "A box 📦 that only holds whole numbers — no decimals allowed! Like counting apples: 1, 2, 3, not 1.5.",
              example: "int age = 16;\nint score = 100;",
            },
            {
              symbol: "double",
              name: "Decimal number",
              nameZh: "小数",
              emoji: "💧",
              description: "A box for numbers with decimal points 💧. Use double when you need precision — like measuring height or GPA.",
              example: "double pi = 3.14159;\ndouble gpa = 3.95;",
            },
            {
              symbol: "char",
              name: "Single character",
              nameZh: "单个字符",
              emoji: "🔤",
              description: "A tiny box that holds exactly ONE character 🔤. Use single quotes! Think of it as a single letter locker.",
              example: "char grade = 'A';\nchar initial = 'J';",
            },
            {
              symbol: "bool",
              name: "Boolean (true/false)",
              nameZh: "布尔值（真/假）",
              emoji: "🔘",
              description: "A light switch 🔘 — it's either ON (true) or OFF (false). That's it! Great for yes/no decisions.",
              example: "bool isStudent = true;\nbool graduated = false;",
            },
            {
              symbol: "std::string",
              name: "Text string",
              nameZh: "字符串（文本）",
              emoji: "📝",
              description: "A box for text 📝 — any sequence of characters. Use double quotes. Like Python strings but you need to declare the type!",
              example: "std::string name = \"Alice\";\nstd::string greeting = \"Hello!\";",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library for cout", explanationZh: "引入输入输出库" },
              { code: "#include <string>", explanation: "Import string library — needed to use std::string", explanationZh: "引入字符串库 — 使用 std::string 需要" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    int age = 16;", explanation: "Declare an integer variable \"age\" and set it to 16", explanationZh: "声明一个整数变量 age 并赋值为 16" },
              { code: "    double gpa = 3.95;", explanation: "Declare a decimal variable \"gpa\" with value 3.95", explanationZh: "声明一个小数变量 gpa，值为 3.95" },
              { code: "    std::string name = \"Alice\";", explanation: "Declare a string variable \"name\" with text \"Alice\"", explanationZh: "声明一个字符串变量 name，文本为 \"Alice\"" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📊",
      content: `# The Basic Types · 基本数据类型

🎯 **What you'll learn · 你将学到:**
- C++ has MANY types — unlike Python's flexible typing
- \`int\`, \`double\`, \`char\`, \`string\`, \`bool\` are the essential five
- Each type has a fixed size in memory

In Python, a variable is like a **stretchy bag** 🎒 — it holds anything. In C++, variables are like **labeled containers** 🗃️ — each one only fits a specific type, but that makes them super efficient!

🔑 **Key things to notice · 注意要点:**
- \`int\` = whole numbers (no decimals)
- \`double\` = decimal numbers (like Python's \`float\`)
- \`char\` = single character in single quotes \`'A'\`
- \`string\` = text in double quotes \`"Hello"\`
- \`bool\` = \`true\` or \`false\` (lowercase, not Python's \`True/False\`)

👀 Look at how each type is declared and what values it can hold!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Integer types 
    int age = 16;                    // Whole numbers: -2billion to +2billion
    long long bigNum = 9000000000LL; // Really big numbers (for competitive programming!)
    
    // Floating point types 
    double pi = 3.14159;             // Decimal numbers (most common)
    float piF = 3.14f;              // Less precise, rarely used
    
    // Character type 
    char grade = 'A';               // Single character (use single quotes!)
    char newline = '\\n';            // Special characters work too
    
    // Boolean type 
    bool isStudent = true;          // true or false (like Python's True/False)
    bool isTired = false;
    
    // String type 
    string name = "Volt";           // Text (use double quotes!)
    string empty = "";              // Empty string
    
    // Print them all
    cout << "Age: " << age << endl;
    cout << "Big number: " << bigNum << endl;
    cout << "Pi: " << pi << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is student? " << isStudent << endl;  // Prints 1 (true) or 0 (false)
    cout << "Name: " << name << endl;
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "📏",
      content: `# Type Sizes & Ranges · 类型大小和范围

| C++ Type | Size | Range | Python Equivalent |
|----------|------|-------|-------------------|
| \`int\` | 4 bytes | ±2.1 billion | \`int\` (but Python int has no limit!) |
| \`long long\` | 8 bytes | ±9.2 quintillion | \`int\` (for big numbers) |
| \`double\` | 8 bytes | ±1.7×10³⁰⁸ | \`float\` |
| \`char\` | 1 byte | -128 to 127 (or a character) | No direct equivalent |
| \`bool\` | 1 byte | true/false | \`bool\` (True/False) |
| \`string\` | varies | any text | \`str\` |

🔧 **Chip says:** "In Python, an integer can be infinitely large. In C++, \`int\` maxes out at about 2.1 billion. For competitive programming, use \`long long\` when numbers might be big!"

⚡ **Volt says:** "Pro tip: When in doubt about size, use \`long long\` for integers and \`double\` for decimals."`,
    },
    {
      type: "code",
      emoji: "📝",
      content: `# Declaring Variables · 声明变量

🎯 **What you'll learn · 你将学到:**
- How to create variables with explicit types
- Multiple ways to initialize variables
- \`const\` for values that never change

In Python you just write \`x = 5\`. In C++, you must **introduce yourself first** 🤝 — tell the compiler your type AND your name: \`int x = 5;\`

🔑 **Key things to notice · 注意要点:**
- Always specify the type: \`int age = 15;\`
- \`const\` = constant, can't be changed later
- You can declare without initializing: \`int x;\` (risky — may contain garbage!)
- Multiple variables of same type: \`int a = 1, b = 2, c = 3;\`

👀 Notice how every variable declaration starts with its type!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Method 1: Declare and initialize (most common)
    int x = 10;
    double price = 9.99;
    string greeting = "Hello";
    
    // Method 2: Declare first, assign later
    int y;          // y exists but has GARBAGE value (undefined!)
    y = 20;         // Now y has a value
    
    // Method 3: Multiple variables of same type
    int a = 1, b = 2, c = 3;
    
    // Method 4: const -- value cannot change (like Python's convention for CONSTANTS)
    const double PI = 3.14159;
    const int MAX_SCORE = 100;
    // PI = 3.0;  // [X] ERROR! Cannot modify a const
    
    // Method 5: auto -- let the compiler figure out the type (C++11)
    auto num = 42;           // compiler knows it's int
    auto text = string("hi"); // compiler knows it's string
    
    cout << "x = " << x << ", y = " << y << endl;
    cout << "a = " << a << ", b = " << b << ", c = " << c << endl;
    cout << "PI = " << PI << endl;
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "⚠️",
      content: `# Common Type Mistakes · 常见类型错误

## ❌ Mistake 1: Using uninitialized variables
\`\`\`cpp
int x;           // x has GARBAGE value!
cout << x;       // Might print -8573629 or anything random
\`\`\`

🐍 **Py says:** "In Python, you can't use a variable before assigning it. C++ lets you — but the value is garbage!"

## ❌ Mistake 2: Integer overflow
\`\`\`cpp
int x = 2147483647;  // Maximum int value
x = x + 1;           // OVERFLOW! x becomes -2147483648
\`\`\`
**Fix:** Use \`long long\` for big numbers.

## ❌ Mistake 3: Wrong quotes
\`\`\`cpp
char c = "A";     // ❌ ERROR! Double quotes = string, not char
char c = 'A';     // ✅ Correct! Single quotes for char
string s = 'Hi';  // ❌ ERROR! Single quotes = char, not string
string s = "Hi";  // ✅ Correct! Double quotes for string
\`\`\`

## ❌ Mistake 4: Forgetting #include <string>
\`\`\`cpp
string name = "Volt";  // Might work or might not without #include <string>
\`\`\`
**Fix:** Always \`#include <string>\` when using strings.`,
    },
    {
      type: "code",
      emoji: "🔄",
      content: `# Type Conversion · 类型转换

🎯 **What you'll learn · 你将学到:**
- Implicit (automatic) vs explicit (manual) type conversion
- C++ casting syntax: \`static_cast<type>(value)\`
- How Python and C++ handle conversions differently

Type conversion is like **currency exchange** 💱 — you're converting one "type" of data into another. Sometimes it happens automatically, sometimes you have to ask!

🔑 **Key things to notice · 注意要点:**
- Implicit: \`int\` to \`double\` happens automatically (safe)
- Implicit: \`double\` to \`int\` loses decimals! ⚠️
- Explicit: \`static_cast<int>(3.14)\` = "I know I'm losing data, do it anyway"
- Python's \`int()\`, \`float()\`, \`str()\` → C++ uses \`static_cast<type>()\`

👀 Watch what happens when a double gets converted to an int!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Implicit conversion (automatic) 
    int a = 5;
    double b = a;       // int -> double: 5 becomes 5.0 (safe!)
    cout << "b = " << b << endl;
    
    int c = 3.99;       // double -> int: 3.99 becomes 3 (truncated! [!])
    cout << "c = " << c << endl;
    
    // Explicit casting (you ask for it) 
    double pi = 3.14159;
    int rounded = (int)pi;              // C-style cast: 3
    int rounded2 = static_cast<int>(pi); // C++ style cast (preferred): 3
    cout << "rounded = " << rounded << endl;
    
    // String conversions 
    string numStr = "42";
    int num = stoi(numStr);       // string to int (stoi = string to integer)
    double dec = stod("3.14");    // string to double
    string back = to_string(num); // int to string
    
    cout << "num = " << num << endl;
    cout << "dec = " << dec << endl;
    cout << "back = " << back << endl;
    
    // char is actually a number!
    char letter = 'A';
    int ascii = letter;            // 'A' = 65
    cout << "ASCII of A = " << ascii << endl;
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Declare variables of different types and print them. Create:

- An int for your age

- A double for your height in meters

- A string for your name

- A bool for whether you like C++`,
      exercise: {
        prompt: "Declare and print variables of different types",
        promptZh: "声明并打印不同类型的变量",
        starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Declare your variables here
    
    
    // Print them
    
    
    return 0;
}`,
        expectedOutput: "Name: Alex\nAge: 16\nHeight: 1.75\nLikes C++: 1",
        hint: "Use int, double, string, and bool. Print with cout <<",
        hintZh: "使用 int, double, string 和 bool。用 cout << 打印",
        solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "Alex";
    int age = 16;
    double height = 1.75;
    bool likesCpp = true;
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Likes C++: " << likesCpp << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "code",
      emoji: "🧮",
      content: `# Type Comparison Cheat Sheet · 类型对比速查表

🎯 **What you'll learn · 你将学到:**
- Side-by-side Python vs C++ variable declarations
- How both languages handle the same data differently
- Quick reference you can come back to anytime

This is your **Rosetta Stone** 🗿 — the same ideas in two languages! Keep this in mind whenever you're translating Python to C++.

🔑 **Key things to notice · 注意要点:**
- Python auto-detects types; C++ needs explicit declarations
- Python \`str\` → C++ \`string\` (needs \`#include <string>\`)
- Python \`True/False\` → C++ \`true/false\` (lowercase!)
- Python has no \`char\` type — single characters are just strings

👀 Use this as a cheat sheet when converting your Python code!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Python: x = 10          ->  C++: int x = 10;
    int x = 10;
    
    // Python: pi = 3.14       ->  C++: double pi = 3.14;
    double pi = 3.14;
    
    // Python: name = "Volt"   ->  C++: string name = "Volt";
    string name = "Volt";
    
    // Python: is_cool = True  ->  C++: bool isCool = true;
    bool isCool = true;
    
    // Python: letter = "A"    ->  C++: char letter = 'A'; (single char!)
    char letter = 'A';
    
    // Python: big = 10**18    ->  C++: long long big = 1e18;
    long long big = 1000000000000000000LL;
    
    // Python: CONSTANT = 42   ->  C++: const int CONSTANT = 42;
    const int CONSTANT = 42;
    
    cout << "All types working!" << endl;
    cout << x << " " << pi << " " << name << " " 
         << isCool << " " << letter << " " << big << endl;
    
    return 0;
}`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quick Quiz · 小测验",
      quiz: [
        {
          question: "What happens when you write `int x = 3.99;` in C++?\n当你写 `int x = 3.99;` 时会发生什么？",
          options: ["x becomes 3 (truncates) · x变成3（截断）", "Compilation error · 编译错误", "x becomes 4 (rounds up) · x变成4（向上取整）", "x becomes 3.99 · x变成3.99"],
          correctIndex: 0,
          explanation: "C++ truncates (cuts off) the decimal part. 3.99 becomes 3, not 4! This is called narrowing conversion. · C++截断小数部分，3.99变成3，不是4！",
        },
        {
          question: "Which type should you use for very large numbers in competitive programming?\n竞赛编程中处理很大的数应该用什么类型？",
          options: ["double", "long long", "char", "int"],
          correctIndex: 1,
          explanation: "long long can hold numbers up to about 9.2 × 10¹⁸, while int maxes out at about 2.1 billion. · long long可以存储约9.2×10¹⁸的数字。",
        },
        {
          question: "What's wrong with: `char c = \"A\";`?\n这行代码有什么问题？",
          options: [
            "Nothing, it's correct · 没问题",
            "Double quotes should be single quotes for char · 双引号应该是单引号",
            "char can't hold letters · char不能存字母",
            "Missing semicolon · 缺少分号",
          ],
          correctIndex: 1,
          explanation: "In C++, single quotes 'A' are for char (one character). Double quotes \"A\" create a string. · 单引号用于char，双引号用于string。",
        },
        {
                  "question": "What value does `bool isHappy = true;` print when you do `cout << isHappy;`?\n`bool isHappy = true;` 用cout打印时显示什么？",
                  "options": [
                            "true",
                            "1",
                            "yes",
                            "TRUE"
                  ],
                  "correctIndex": 1,
                  "explanation": "In C++, bool prints as 1 (true) or 0 (false) by default, unlike Python which prints True/False. · C++中bool默认打印1或0。"
        },
        {
                  "question": "What happens if you declare `int x;` without initializing it?\n如果声明 `int x;` 但不初始化会怎样？",
                  "options": [
                            "x is 0 · x为0",
                            "x has a garbage/random value · x有垃圾值",
                            "Compilation error · 编译错误",
                            "x is null · x为null"
                  ],
                  "correctIndex": 1,
                  "explanation": "Uninitialized local variables in C++ contain garbage values — whatever was in that memory before! Always initialize! · 未初始化的变量有垃圾值！"
        },
        {
                  "question": "Which requires `#include <string>`?\n哪个需要 `#include <string>`？",
                  "options": [
                            "int x = 5;",
                            "double pi = 3.14;",
                            "char c = 'A';",
                            "string name = \"Volt\";"
                  ],
                  "correctIndex": 3,
                  "explanation": "The string type needs #include <string>. Basic types like int, double, char, bool are built-in. · string类型需要#include <string>。"
        },
        {
                  "question": "What does `const int MAX = 100;` mean?\n`const int MAX = 100;` 是什么意思？",
                  "options": [
                            "MAX can be changed later · MAX以后可以修改",
                            "MAX is a constant that cannot be changed · MAX是不能修改的常量",
                            "MAX is deleted after use · MAX使用后被删除",
                            "It creates 100 variables · 创建100个变量"
                  ],
                  "correctIndex": 1,
                  "explanation": "const makes a variable read-only. Trying to modify it causes a compilation error. · const使变量只读，修改会编译报错。"
        },
        {
                  "type": "coding",
                  "question": "Declare an int, a double, and a string, then print them.\n声明一个int、一个double和一个string，然后打印它们。",
                  "prompt": "Declare age=15, height=1.68, name=\"Coder\" and print each on a separate line",
                  "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Declare variables here\n    \n    // Print them\n    \n    return 0;\n}",
                  "expectedOutput": "15\n1.68\nCoder",
                  "hint": "Use int age = 15; double height = 1.68; string name = \"Coder\"; · 分别用int、double、string声明",
                  "explanation": "Each type must be declared explicitly in C++. Use cout << variable << endl to print. · C++中每个类型必须显式声明。"
        },
        {
                  "type": "coding",
                  "question": "Convert a double to int and print both values.\n将double转换为int并打印两个值。",
                  "prompt": "Create double pi = 3.14159, convert to int, print both",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    double pi = 3.14159;\n    // Convert to int and print both\n    \n    return 0;\n}",
                  "expectedOutput": "3.14159\n3",
                  "hint": "Use int intPi = (int)pi; or static_cast<int>(pi) · 使用(int)pi或static_cast<int>(pi)",
                  "explanation": "Casting double to int truncates the decimal part. 3.14159 becomes 3, not 4! · double转int截断小数部分。"
        },
      ],
    },
  ],
};

const cpp_1_3: Lesson = {
  id: "cpp-1-3",
  moduleId: "cpp-1",
  title: "Input & Output Mastery",
  subtitle: "cin, cout, and formatting · 输入输出与格式化",
  icon: "⌨️",
  xp: 150,
  duration: "25 min",
  order: 3,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "⌨️",
      content: `# Input in C++ · C++中的输入

🐍 **Py says:** "In Python, \`input()\` always returns a string and we convert it. Let's see how C++ handles input!"

⚡ **Volt says:** "In C++, \`cin >>\` reads input and automatically converts it to the variable's type. No need for int() or float() conversion!"

## 🐍 In Python:
\`\`\`python
name = input("Enter your name: ")        # Always returns string
age = int(input("Enter your age: "))      # Must convert to int
height = float(input("Enter height: "))   # Must convert to float
\`\`\`

## ⚡ In C++:
\`\`\`cpp
string name;
int age;
double height;

cout << "Enter your name: ";
cin >> name;          // Reads a word (stops at space!)
cout << "Enter your age: ";
cin >> age;           // Automatically reads as int
cout << "Enter height: ";
cin >> height;        // Automatically reads as double
\`\`\`

⚠️ **BIG DIFFERENCE:** \`cin >> name\` only reads ONE WORD! It stops at spaces. To read a full line, use \`getline()\`.`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Input & Output",
      concept: {
        title: "🧰 New Syntax: Input & Output",
        titleZh: "新语法：输入与输出",
        syntaxCards: [
            {
              symbol: "std::cin >>",
              name: "Read input from keyboard",
              nameZh: "从键盘读取输入",
              emoji: "⌨️",
              description: "Like Python's input()! cin is a microphone 🎤 and >> catches what the user types into your variable.",
              example: "int age;\nstd::cin >> age;\n// User types: 16",
            },
            {
              symbol: "std::getline()",
              name: "Read a whole line of text",
              nameZh: "读取一整行文本",
              emoji: "📜",
              description: "cin >> stops at spaces! getline() grabs the ENTIRE line 📜 — perfect for names with spaces like \"John Smith\".",
              example: "std::string name;\nstd::getline(std::cin, name);",
            },
            {
              symbol: "std::setw()",
              name: "Set output width",
              nameZh: "设置输出宽度",
              emoji: "📏",
              description: "Like adding padding 📏 to make columns line up. setw(10) means \"use at least 10 characters wide\". Need <iomanip>!",
              example: "#include <iomanip>\nstd::cout << std::setw(10) << \"Hello\";",
            },
            {
              symbol: "std::fixed",
              name: "Fixed decimal notation",
              nameZh: "固定小数表示",
              emoji: "📌",
              description: "Pin 📌 your decimals! Stops scientific notation and shows numbers like 3.14 instead of 3.14e+00.",
              example: "std::cout << std::fixed\n          << std::setprecision(2)\n          << 3.14159;\n// Output: 3.14",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library for cin and cout", explanationZh: "引入输入输出库" },
              { code: "#include <string>", explanation: "Import string library for std::string and getline", explanationZh: "引入字符串库" },
              { code: "int main() {", explanation: "Program starts here", explanationZh: "程序从这里开始" },
              { code: "    std::string name;", explanation: "Declare an empty string variable to store the name", explanationZh: "声明一个空字符串变量来存储名字" },
              { code: "    std::cout << \"Enter your name: \";", explanation: "Print a prompt (no endl — cursor stays on same line)", explanationZh: "打印提示（没有 endl — 光标留在同一行）" },
              { code: "    std::getline(std::cin, name);", explanation: "Read the entire line (including spaces) into \"name\"", explanationZh: "读取整行输入（包括空格）到 name 变量" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📥",
      content: `# cin Basics · cin基础

🎯 **What you'll learn · 你将学到:**
- How to read user input with \`cin >>\`
- \`cin\` is C++'s version of Python's \`input()\`
- The \`>>\` operator "extracts" data from the keyboard

If \`cout <<\` is a megaphone (output), then \`cin >>\` is a **microphone** 🎤 — it listens for input and stores it in a variable!

🔑 **Key things to notice · 注意要点:**
- \`cin >> x;\` reads input into variable \`x\`
- The variable must already be declared with a type!
- \`cin\` automatically converts input to the variable's type
- \`cin\` stops reading at whitespace (spaces, tabs, newlines)

👀 Try entering different types of input and see what happens!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Reading different types
    int age;
    double gpa;
    string name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Enter your GPA: ";
    cin >> gpa;
    
    cout << "Enter your first name: ";
    cin >> name;
    
    cout << "\\n--- Your Info ---" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "GPA: " << gpa << endl;
    
    // Reading multiple values on one line
    int a, b, c;
    cout << "\\nEnter 3 numbers separated by spaces: ";
    cin >> a >> b >> c;
    cout << "Sum = " << a + b + c << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "📜",
      content: `# getline() — Read Full Lines · 读取整行

🎯 **What you'll learn · 你将学到:**
- Why \`cin >>\` can't read sentences with spaces
- How \`getline()\` reads an entire line
- The \`cin\`/\`getline()\` mixing trap and how to fix it

\`cin >>\` is like a **picky eater** 🍽️ — it stops at the first space. \`getline()\` is like a **vacuum cleaner** 🧹 — it grabs EVERYTHING until the end of the line!

🔑 **Key things to notice · 注意要点:**
- \`cin >> name\` only reads ONE word (stops at space)
- \`getline(cin, line)\` reads the ENTIRE line including spaces
- ⚠️ After \`cin >>\`, use \`cin.ignore()\` before \`getline()\`
- Python's \`input()\` always reads the full line — C++ makes you choose!

👀 Notice how getline handles sentences that cin would split up!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string fullName;
    
    // Method 1: getline reads the ENTIRE line
    cout << "Enter your full name: ";
    getline(cin, fullName);
    cout << "Hello, " << fullName << "!" << endl;
    
    // [!] TRICKY: Mixing cin >> and getline()
    int age;
    string hobby;
    
    cout << "Enter your age: ";
    cin >> age;
    cin.ignore();  // IMPORTANT! Clear the leftover newline character
    
    cout << "Enter your hobby: ";
    getline(cin, hobby);  // Without cin.ignore(), this would read an empty string!
    
    cout << "You are " << age << " and you like " << hobby << endl;
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "⚠️",
      content: `# The cin.ignore() Trap · cin.ignore()陷阱

This is the #1 bug beginners hit when mixing \`cin >>\` and \`getline()\`:

## What happens without cin.ignore():
\`\`\`
Enter your age: 16↵     ← You type 16 and press Enter
Enter your hobby:        ← SKIPPED! getline reads the leftover ↵
\`\`\`

## Why? 为什么？
When you type \`16\` and press Enter, \`cin >> age\` reads \`16\` but leaves the Enter key (\`\\n\`) in the buffer. Then \`getline()\` sees that \`\\n\` and thinks you entered an empty line!

## The Fix: 解决方法
\`\`\`cpp
cin >> age;
cin.ignore();        // Throw away the leftover \\n
getline(cin, hobby); // Now this works correctly!
\`\`\`

🐍 **Py says:** "Python's input() never has this problem because it always reads the full line. This is one of those C++ quirks you just have to remember!"`,
    },
    {
      type: "code",
      emoji: "🎨",
      content: `# Output Formatting · 输出格式化

🎯 **What you'll learn · 你将学到:**
- \`setw()\`, \`setprecision()\`, \`fixed\` for formatted output
- How to align columns and control decimal places
- C++ formatting vs Python's f-strings

Output formatting is like being a **newspaper typesetter** 📰 — you control exactly how everything lines up on the page!

🔑 **Key things to notice · 注意要点:**
- \`#include <iomanip>\` is needed for formatting tools
- \`setw(n)\` = set minimum width (like Python's \`{:>n}\`)
- \`fixed << setprecision(n)\` = show exactly n decimal places
- \`left\` / \`right\` = alignment direction
- These are "sticky" — they stay in effect until changed!

👀 Compare this to Python's f-string formatting!`,
      code: `#include <iostream>
#include <iomanip>  // Required for formatting!
using namespace std;

int main() {
    double pi = 3.14159265358979;
    double price = 9.5;
    
    // Fixed decimal places (like Python's :.2f)
    cout << fixed << setprecision(2);
    cout << "Price: $" << price << endl;       // $9.50
    cout << "Pi: " << pi << endl;              // 3.14
    
    // Reset to default
    cout << defaultfloat;
    cout << "Pi default: " << pi << endl;      // 3.14159
    
    // Set width (like Python's format alignment)
    cout << "--- Score Table ---" << endl;
    cout << left << setw(10) << "Name" << right << setw(5) << "Score" << endl;
    cout << left << setw(10) << "Alice" << right << setw(5) << 95 << endl;
    cout << left << setw(10) << "Bob" << right << setw(5) << 87 << endl;
    cout << left << setw(10) << "Charlie" << right << setw(5) << 92 << endl;
    
    // Fill character
    cout << setfill('*') << setw(20) << "" << endl;  // ********************
    cout << setfill('-') << setw(20) << "" << endl;  // --------------------
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Write a program that reads two numbers and prints their sum, difference, product, and quotient (with 2 decimal places).`,
      exercise: {
        prompt: "Read two numbers and print arithmetic results",
        promptZh: "读取两个数字并打印四则运算结果",
        starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    
    // Print sum, difference, product, quotient
    
    
    return 0;
}`,
        expectedOutput: "Sum: 15.00\nDifference: 5.00\nProduct: 50.00\nQuotient: 2.00",
        hint: "Use fixed << setprecision(2) for formatting, then cout for each operation",
        hintZh: "使用 fixed << setprecision(2) 格式化，然后用cout输出每个运算",
        solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    
    cout << fixed << setprecision(2);
    cout << "Sum: " << a + b << endl;
    cout << "Difference: " << a - b << endl;
    cout << "Product: " << a * b << endl;
    cout << "Quotient: " << a / b << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "code",
      emoji: "🔄",
      content: `# Input/Output Comparison Summary · 输入输出对比总结

🎯 **What you'll learn · 你将学到:**
- Complete side-by-side I/O comparison: Python vs C++
- All input and output techniques in one place
- When to use each approach

This is your **I/O master reference** 📋 — everything about getting data in and out, in both languages!

🔑 **Key things to notice · 注意要点:**
- Python \`input()\` → C++ \`cin >>\` or \`getline()\`
- Python \`print()\` → C++ \`cout <<\`
- Python f-strings → C++ \`<iomanip>\` functions
- C++ gives more control but requires more code

👀 Bookmark this as a reference for future projects!`,
      code: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    // === INPUT COMPARISON ===
    // Python: name = input()         ->  C++: getline(cin, name);
    // Python: n = int(input())       ->  C++: cin >> n;  (auto-converts)
    // Python: x = float(input())     ->  C++: cin >> x;  (auto-converts)
    
    // === OUTPUT COMPARISON ===
    // Python: print("hi")            ->  C++: cout << "hi" << endl;
    // Python: print(x, y)            ->  C++: cout << x << " " << y << endl;
    // Python: print(f"{x:.2f}")      ->  C++: cout << fixed << setprecision(2) << x;
    // Python: print(end="")          ->  C++: cout << "no newline";
    // Python: print("a", end=" ")    ->  C++: cout << "a" << " ";
    
    cout << "Comparison complete!" << endl;
    return 0;
}`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz Time · 测验时间",
      quiz: [
        {
          question: "What does `cin >> name` do if you type 'John Smith'?\n如果你输入'John Smith'，`cin >> name`会怎样？",
          options: ["Reads 'John' only · 只读取'John'", "Reads 'Smith' only · 只读取'Smith'", "Error · 报错", "Reads 'John Smith' · 读取'John Smith'"],
          correctIndex: 0,
          explanation: "cin >> stops at whitespace (spaces, tabs, newlines). To read a full line, use getline(cin, name). · cin >>在空白处停止，要读整行请用getline。",
        },
        {
          question: "When do you need `cin.ignore()`?\n什么时候需要`cin.ignore()`？",
          options: ["After getline() · 在getline()之后", "After cin >> before getline() · 在cin >>之后getline()之前", "Before every cin · 每次cin之前", "Never · 从不需要"],
          correctIndex: 1,
          explanation: "cin.ignore() clears the leftover newline after cin >> so that getline() works correctly. · cin.ignore()清除cin >>后残留的换行符。",
        },
        {
                  "question": "What header is needed for setprecision()?\nsetprecision()需要什么头文件？",
                  "options": [
                            "<iostream>",
                            "<string>",
                            "<iomanip>",
                            "<cmath>"
                  ],
                  "correctIndex": 2,
                  "explanation": "setprecision() and other formatting functions are in <iomanip> (input/output manipulation). · setprecision()在<iomanip>头文件中。"
        },
        {
                  "question": "What does `cout << fixed << setprecision(2) << 3.14159;` output?\n这行代码输出什么？",
                  "options": [
                            "3.14159",
                            "3.14",
                            "3.1",
                            "3"
                  ],
                  "correctIndex": 1,
                  "explanation": "fixed + setprecision(2) formats the number to exactly 2 decimal places: 3.14. · fixed加setprecision(2)保留2位小数。"
        },
        {
                  "question": "Which reads an entire line including spaces?\n哪个能读取包含空格的整行？",
                  "options": [
                            "cin >> name",
                            "scanf(name)",
                            "getline(cin, name)",
                            "cin.read(name)"
                  ],
                  "correctIndex": 2,
                  "explanation": "getline(cin, name) reads the entire line. cin >> stops at the first space! · getline读整行，cin >>在空格处停止。"
        },
        {
                  "question": "After `cin >> age;`, why do we need `cin.ignore();` before `getline()`?\n为什么cin >>之后需要cin.ignore()？",
                  "options": [
                            "To clear the screen · 清屏",
                            "To reset the variable · 重置变量",
                            "To remove the leftover newline from the buffer · 清除缓冲区中残留的换行符",
                            "It's optional · 可选的"
                  ],
                  "correctIndex": 2,
                  "explanation": "cin >> leaves a '\\n' in the buffer. Without cin.ignore(), getline() reads that empty line! · cin >>留下换行符，getline会读到空行。"
        },
        {
                  "type": "coding",
                  "question": "Read two integers and print their sum.\n读取两个整数并打印它们的和。",
                  "prompt": "Read a and b, print 'Sum: ' followed by their sum",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // Print the sum\n    \n    return 0;\n}",
                  "expectedOutput": "Sum: 15",
                  "hint": "Use cout << \"Sum: \" << a + b << endl; · 使用cout打印Sum:加上a+b",
                  "explanation": "cin >> a >> b reads two integers. Then cout << a + b prints their sum. · cin读取两个整数，cout打印它们的和。"
        },
        {
                  "type": "coding",
                  "question": "Read a decimal number and print it with exactly 3 decimal places.\n读取一个小数并保留3位小数打印。",
                  "prompt": "Read a double, print with 3 decimal places",
                  "starterCode": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double x;\n    cin >> x;\n    // Print x with 3 decimal places\n    \n    return 0;\n}",
                  "expectedOutput": "3.142",
                  "hint": "Use cout << fixed << setprecision(3) << x; · 使用fixed和setprecision(3)",
                  "explanation": "fixed << setprecision(3) formats the output to exactly 3 decimal places. · fixed和setprecision(3)保留3位小数。"
        },
      ],
    },
  ],
};

const cpp_1_4: Lesson = {
  id: "cpp-1-4",
  moduleId: "cpp-1",
  title: "Math & Operators",
  subtitle: "Arithmetic, casting, and operators · 算术、转换和运算符",
  icon: "🧮",
  xp: 150,
  duration: "25 min",
  order: 4,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "🧮",
      content: `# Math in C++ · C++中的数学

⚡ **Volt says:** "Most math operators are the same as Python, but there are some important differences — especially with integer division!"

## Quick Comparison:

| Operation | Python | C++ | Notes |
|-----------|--------|-----|-------|
| Add | \`a + b\` | \`a + b\` | Same! |
| Subtract | \`a - b\` | \`a - b\` | Same! |
| Multiply | \`a * b\` | \`a * b\` | Same! |
| Divide | \`a / b\` | \`a / b\` | ⚠️ DIFFERENT for ints! |
| Modulo | \`a % b\` | \`a % b\` | Same! |
| Power | \`a ** b\` | \`pow(a, b)\` | Need \`#include <cmath>\` |
| Floor divide | \`a // b\` | \`a / b\` (int) | C++ int division IS floor division |`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Math Operations",
      concept: {
        title: "🧰 New Syntax: Math Operations",
        titleZh: "新语法：数学运算",
        syntaxCards: [
            {
              symbol: "% (modulo)",
              name: "Remainder after division",
              nameZh: "取余数",
              emoji: "🍕",
              description: "Like dividing a pizza 🍕 and checking what's left! 10 % 3 = 1 because 10 ÷ 3 = 3 remainder 1. Only works with integers!",
              example: "int remainder = 10 % 3;\n// remainder = 1",
            },
            {
              symbol: "pow()",
              name: "Power / Exponent",
              nameZh: "幂运算",
              emoji: "💪",
              description: "Flex that math muscle 💪! pow(2, 10) = 2¹⁰ = 1024. Need #include <cmath>. Returns a double!",
              example: "#include <cmath>\ndouble result = pow(2, 10);\n// result = 1024.0",
            },
            {
              symbol: "sqrt()",
              name: "Square root",
              nameZh: "平方根",
              emoji: "√",
              description: "Find the square root √ of a number. sqrt(144) = 12. Also needs <cmath>. Returns a double.",
              example: "double root = sqrt(144);\n// root = 12.0",
            },
            {
              symbol: "static_cast<int>()",
              name: "Type casting (safe)",
              nameZh: "类型转换（安全）",
              emoji: "🔄",
              description: "Like pouring liquid 💧 into an ice cube tray 🧊 — it changes shape! Converts one type to another safely.",
              example: "double pi = 3.14;\nint rounded = static_cast<int>(pi);\n// rounded = 3 (truncates!)",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O for printing results", explanationZh: "引入输入输出库" },
              { code: "#include <cmath>", explanation: "Import math library for pow() and sqrt()", explanationZh: "引入数学库，用于 pow() 和 sqrt()" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    int a = 17, b = 5;", explanation: "Declare two integers in one line — a=17, b=5", explanationZh: "一行声明两个整数 a=17, b=5" },
              { code: "    std::cout << a % b << std::endl;", explanation: "17 % 5 = 2 (remainder). Print 2 to screen.", explanationZh: "17 % 5 = 2（余数）。打印 2 到屏幕" },
              { code: "    std::cout << pow(2, 10) << std::endl;", explanation: "2 to the power of 10 = 1024. Print it!", explanationZh: "2 的 10 次方 = 1024。打印结果" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "⚠️",
      content: `# Integer Division — The Big Difference! · 整数除法的大区别！

🎯 **What you'll learn · 你将学到:**
- C++ integer division truncates (cuts off decimals)
- How to get decimal results when you need them
- The \`%\` modulo operator

This is the #1 bug trap! 🪤 In Python, \`7/2 = 3.5\`. In C++, \`7/2 = 3\` — the decimals just vanish! Like a **coin machine** 🪙 that only gives whole coins.

🔑 **Key things to notice · 注意要点:**
- \`int / int\` = integer result (decimals truncated!)
- To get decimals: make one operand a \`double\`
- \`7.0 / 2\` or \`(double)7 / 2\` → \`3.5\`
- \`%\` (modulo) gives the remainder: \`7 % 2 = 1\`

👀 Watch the integer division — this will save you hours of debugging!`,
      code: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // Integer division -- TRUNCATES in C++!
    cout << "=== Integer Division ===" << endl;
    cout << "7 / 2 = " << 7 / 2 << endl;         // 3 (not 3.5!)
    cout << "10 / 3 = " << 10 / 3 << endl;        // 3
    cout << "-7 / 2 = " << -7 / 2 << endl;        // -3 (truncates toward zero)
    
    // To get decimal division, at least one operand must be double
    cout << "\\n=== Decimal Division ===" << endl;
    cout << "7.0 / 2 = " << 7.0 / 2 << endl;     // 3.5
    cout << "7 / 2.0 = " << 7 / 2.0 << endl;     // 3.5
    
    int a = 7, b = 2;
    cout << "(double)a / b = " << (double)a / b << endl;  // 3.5
    
    // Modulo (remainder)
    cout << "\\n=== Modulo ===" << endl;
    cout << "7 % 2 = " << 7 % 2 << endl;          // 1
    cout << "10 % 3 = " << 10 % 3 << endl;        // 1
    
    // Power -- use pow() from <cmath>
    cout << "\\n=== Power ===" << endl;
    cout << "2^10 = " << pow(2, 10) << endl;       // 1024
    cout << "3^4 = " << pow(3, 4) << endl;         // 81
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "➕",
      content: `# Increment & Decrement — Python Doesn't Have These! · 自增自减

🎯 **What you'll learn · 你将学到:**
- \`++\` and \`--\` operators (C++ exclusive!)
- Pre-increment (\`++x\`) vs post-increment (\`x++\`)
- Why C++ is literally named after this operator!

Fun fact: C++ is called "C++" because it's "C incremented by 1"! The \`++\` operator is like a **turbo button** 🚀 — one symbol does what Python needs a whole statement for.

🔑 **Key things to notice · 注意要点:**
- \`x++\` or \`++x\` = add 1 (Python: \`x += 1\`)
- \`x--\` or \`--x\` = subtract 1 (Python: \`x -= 1\`)
- Pre (\`++x\`): increment THEN use the value
- Post (\`x++\`): use the value THEN increment

👀 Pay attention to pre vs post increment — the difference matters!`,
      code: `#include <iostream>
using namespace std;

int main() {
    int x = 5;
    
    // Compound assignment (same as Python)
    x += 3;    // x = x + 3  -> x is 8
    x -= 2;    // x = x - 2  -> x is 6
    x *= 4;    // x = x * 4  -> x is 24
    x /= 6;    // x = x / 6  -> x is 4
    x %= 3;    // x = x % 3  -> x is 1
    
    cout << "After compound ops: x = " << x << endl;
    
    // C++ EXCLUSIVE: ++ and --
    int y = 10;
    y++;       // y = y + 1  -> y is 11
    y--;       // y = y - 1  -> y is 10
    ++y;       // y = y + 1  -> y is 11 (prefix)
    --y;       // y = y - 1  -> y is 10 (prefix)
    
    cout << "y = " << y << endl;
    
    // Pre vs Post increment (tricky!)
    int a = 5;
    cout << "a++ = " << a++ << endl;   // Prints 5, THEN increments (a becomes 6)
    cout << "a is now " << a << endl;  // 6
    cout << "++a = " << ++a << endl;   // Increments FIRST, then prints 7
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🔄",
      content: `# Type Casting in Math · 数学中的类型转换

🎯 **What you'll learn · 你将学到:**
- How integer math can give wrong answers
- Using \`static_cast\` to force correct results
- Common pitfalls when mixing types in calculations

Type casting in math is like using a **measuring cup** 🥤 instead of counting — sometimes you need more precision!

🔑 **Key things to notice · 注意要点:**
- \`int / int\` always gives \`int\` (decimals lost!)
- Cast before dividing: \`static_cast<double>(total) / count\`
- Even one \`double\` makes the result \`double\`
- This is the most common math bug in C++!

👀 Look at how casting changes the division results!`,
      code: `#include <iostream>
using namespace std;

int main() {
    // Be careful with integer math!
    int total = 7;
    int count = 2;
    
    // Wrong way:
    double avg1 = total / count;    // 3.0 (integer division happened first!)
    
    // Right way:
    double avg2 = (double)total / count;  // 3.5
    double avg3 = total * 1.0 / count;    // 3.5 (trick: multiply by 1.0)
    
    cout << "Wrong average: " << avg1 << endl;
    cout << "Right average: " << avg2 << endl;
    cout << "Trick average: " << avg3 << endl;
    
    // Overflow danger!
    int bigA = 100000;
    int bigB = 100000;
    // int product = bigA * bigB;  // OVERFLOW! 10^10 > int max
    long long product = (long long)bigA * bigB;  // Cast BEFORE multiply
    cout << "Product: " << product << endl;
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Calculate the average of 3 integers with proper decimal output.`,
      exercise: {
        prompt: "Read 3 integers and print their average with 2 decimal places",
        promptZh: "读取3个整数并输出保留2位小数的平均值",
        starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    
    // Calculate and print average with 2 decimal places
    
    
    return 0;
}`,
        expectedOutput: "Average: 3.33",
        hint: "Cast to double before dividing! Use (double)(a+b+c) / 3",
        hintZh: "除法前先转为double！使用 (double)(a+b+c) / 3",
        solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    
    double avg = (double)(a + b + c) / 3;
    cout << fixed << setprecision(2);
    cout << "Average: " << avg << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "code",
      emoji: "📐",
      content: `# Math Library Functions · 数学库函数

🎯 **What you'll learn · 你将学到:**
- \`#include <cmath>\` for math functions
- \`sqrt()\`, \`pow()\`, \`abs()\`, \`ceil()\`, \`floor()\`
- How C++ math functions compare to Python's \`math\` module

The math library is your **scientific calculator** 🧮 built into C++! Same functions you know from Python's \`math\` module, just with a different import.

🔑 **Key things to notice · 注意要点:**
- \`#include <cmath>\` instead of Python's \`import math\`
- \`sqrt(x)\` = square root, \`pow(x, n)\` = x to the power n
- \`abs()\` = absolute value, \`ceil()\`/\`floor()\` = round up/down
- Functions work on \`double\` — be careful with \`int\` inputs!

👀 Try these functions with different values!`,
      code: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // Common math functions
    cout << "abs(-5) = " << abs(-5) << endl;           // 5
    cout << "sqrt(16) = " << sqrt(16) << endl;         // 4
    cout << "pow(2, 10) = " << pow(2, 10) << endl;     // 1024
    cout << "ceil(3.2) = " << ceil(3.2) << endl;       // 4
    cout << "floor(3.8) = " << floor(3.8) << endl;     // 3
    cout << "round(3.5) = " << round(3.5) << endl;     // 4
    cout << "max(5, 3) = " << max(5, 3) << endl;       // 5
    cout << "min(5, 3) = " << min(5, 3) << endl;       // 3
    
    // Useful for competitive programming:
    cout << "log2(1024) = " << log2(1024) << endl;     // 10
    cout << "log10(1000) = " << log10(1000) << endl;   // 3
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "🔑",
      content: `# Operator Precedence · 运算符优先级

Same as Python (and math class!):

1. \`()\` — Parentheses first
2. \`++\` \`--\` — Increment/decrement
3. \`*\` \`/\` \`%\` — Multiply, divide, modulo
4. \`+\` \`-\` — Add, subtract
5. \`=\` \`+=\` \`-=\` etc. — Assignment last

⚡ **Volt says:** "When in doubt, use parentheses! \`(a + b) * c\` is always clearer than \`a + b * c\`."`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What does `7 / 2` give in C++ (both are int)?\n在C++中 `7 / 2`（都是int）的结果是？",
          options: ["3", "3.0", "3.5", "4"],
          correctIndex: 0,
          explanation: "Integer division in C++ truncates the decimal. 7/2 = 3, not 3.5! To get 3.5, use 7.0/2. · C++整数除法截断小数部分。",
        },
        {
          question: "What does `x++` do?\n`x++`做了什么？",
          options: ["Adds 2 to x · 给x加2", "Adds 1 to x · 给x加1", "Doubles x · x翻倍", "Error · 报错"],
          correctIndex: 1,
          explanation: "x++ increments x by 1. It's equivalent to x = x + 1 or x += 1. · x++相当于x = x + 1。",
        },
        {
                  "question": "What does `10 % 3` evaluate to?\n`10 % 3` 的结果是？",
                  "options": [
                            "3.33",
                            "3",
                            "1",
                            "0"
                  ],
                  "correctIndex": 2,
                  "explanation": "% gives the remainder. 10 ÷ 3 = 3 remainder 1, so 10 % 3 = 1. · %取余数，10÷3余1。"
        },
        {
                  "question": "What's the output of `cout << 5 / 2 * 2;`?\n输出是什么？",
                  "options": [
                            "5",
                            "4",
                            "5.0",
                            "2.5"
                  ],
                  "correctIndex": 1,
                  "explanation": "5/2 = 2 (integer division), then 2*2 = 4. Integer division truncates! · 5/2=2（整数除法），2*2=4。"
        },
        {
                  "question": "Which header provides pow() and sqrt()?\n哪个头文件提供pow()和sqrt()？",
                  "options": [
                            "<iostream>",
                            "<string>",
                            "<algorithm>",
                            "<cmath>"
                  ],
                  "correctIndex": 3,
                  "explanation": "<cmath> provides math functions like pow(), sqrt(), abs(), ceil(), floor(). · <cmath>提供数学函数。"
        },
        {
                  "question": "What does `int a = 5; cout << a++;` print?\n输出是什么？",
                  "options": [
                            "5",
                            "6",
                            "4",
                            "Error"
                  ],
                  "correctIndex": 0,
                  "explanation": "Post-increment (a++) returns the OLD value (5), THEN increments a to 6. · 后置++返回旧值5，然后a变为6。"
        },
        {
                  "type": "coding",
                  "question": "Calculate the area of a circle given its radius.\n给定半径计算圆的面积。",
                  "prompt": "Read radius, print area with 2 decimal places. Use pi = 3.14159",
                  "starterCode": "#include <iostream>\n#include <iomanip>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double r;\n    cin >> r;\n    // Calculate area = pi * r * r and print with 2 decimal places\n    \n    return 0;\n}",
                  "expectedOutput": "78.54",
                  "hint": "Area = 3.14159 * r * r. Use fixed << setprecision(2). · 面积=3.14159*r*r",
                  "explanation": "Use the formula pi*r*r and format with fixed << setprecision(2). · 圆面积公式π*r²。"
        },
        {
                  "type": "coding",
                  "question": "Given total cents, find how many dollars and remaining cents.\n给定总分数，求美元数和剩余分数。",
                  "prompt": "Read total cents, print dollars and cents. E.g., 365 → 3 dollars and 65 cents",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int totalCents;\n    cin >> totalCents;\n    // Calculate dollars and cents\n    \n    return 0;\n}",
                  "expectedOutput": "3 dollars and 65 cents",
                  "hint": "Use / for dollars and % for remaining cents · 用/求美元数，%求余数",
                  "explanation": "Integer division (/) gives dollars, modulo (%) gives remaining cents. 365/100=3, 365%100=65. · 整除得美元，取余得分。"
        },
      ],
    },
  ],
};

const cpp_1_5: Lesson = {
  id: "cpp-1-5",
  moduleId: "cpp-1",
  title: "Strings: Not as Easy as Python",
  subtitle: "C++ strings vs Python strings · C++字符串的挑战",
  icon: "🔤",
  xp: 150,
  duration: "30 min",
  order: 5,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "🔤",
      content: `# Strings in C++ · C++中的字符串

🐍 **Py says:** "In Python, strings are SO easy — slicing, methods, f-strings... C++ strings are... more work."

⚡ **Volt says:** "C++ has TWO kinds of strings: C-style char arrays (old school) and std::string (modern). We'll focus on std::string, which is closer to Python strings."

## Key Differences:
| Feature | Python | C++ |
|---------|--------|-----|
| Type | \`str\` | \`string\` (need \`#include <string>\`) |
| Mutable? | ❌ No (immutable) | ✅ Yes (mutable!) |
| Slicing | \`s[1:4]\` | \`s.substr(1, 3)\` (start, LENGTH not end!) |
| Length | \`len(s)\` | \`s.length()\` or \`s.size()\` |
| Concat | \`s1 + s2\` | \`s1 + s2\` (same!) |
| Repeat | \`s * 3\` | No direct equivalent |
| f-string | \`f"Hello {name}"\` | No direct equivalent (use \`+\` or stringstream) |`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: String Operations",
      concept: {
        title: "🧰 New Syntax: String Operations",
        titleZh: "新语法：字符串操作",
        syntaxCards: [
            {
              symbol: ".length()",
              name: "Get string length",
              nameZh: "获取字符串长度",
              emoji: "📏",
              description: "Count the characters 📏 in your string! Like counting beads on a necklace. \"Hello\" has length 5.",
              example: "std::string s = \"Hello\";\nstd::cout << s.length(); // 5",
            },
            {
              symbol: ".substr(pos, len)",
              name: "Get a substring",
              nameZh: "获取子字符串",
              emoji: "✂️",
              description: "Cut ✂️ out a piece of your string! substr(start, length) — starts at position, grabs that many chars.",
              example: "std::string s = \"Hello World\";\nstd::cout << s.substr(0, 5);\n// Output: Hello",
            },
            {
              symbol: ".find()",
              name: "Find text in string",
              nameZh: "在字符串中查找",
              emoji: "🔍",
              description: "Like Ctrl+F 🔍 for your string! Returns the position where the text starts, or string::npos if not found.",
              example: "std::string s = \"Hello World\";\nsize_t pos = s.find(\"World\");\n// pos = 6",
            },
            {
              symbol: "+ (concatenation)",
              name: "Join strings together",
              nameZh: "拼接字符串",
              emoji: "🔗",
              description: "Chain strings together 🔗 like connecting train cars! Just use + between strings.",
              example: "std::string full = \"Hello\" + \" \" + \"World\";\n// full = \"Hello World\"",
            },
            {
              symbol: "std::to_string()",
              name: "Number to string",
              nameZh: "数字转字符串",
              emoji: "🏷️",
              description: "Put a label 🏷️ on a number! Converts int/double to text so you can concatenate with other strings.",
              example: "int age = 16;\nstd::string s = \"Age: \" + std::to_string(age);\n// s = \"Age: 16\"",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "#include <string>", explanation: "Import string library for string operations", explanationZh: "引入字符串库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    std::string msg = \"Hello C++\";", explanation: "Create a string variable with text", explanationZh: "创建一个字符串变量" },
              { code: "    std::cout << msg.length() << std::endl;", explanation: "Print the length of the string (9 characters)", explanationZh: "打印字符串长度（9个字符）" },
              { code: "    std::cout << msg.substr(6, 3) << std::endl;", explanation: "Extract \"C++\" starting at position 6, length 3", explanationZh: "从位置6开始提取3个字符，得到 \"C++\"" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📝",
      content: `# String Basics · 字符串基础

🎯 **What you'll learn · 你将学到:**
- Creating and combining strings in C++
- \`#include <string>\` is required!
- String concatenation with \`+\` and comparison with \`==\`

Strings in C++ are like Python strings, but you need to **invite them first** 🎟️ with \`#include <string>\`. Once included, most things work similarly!

🔑 **Key things to notice · 注意要点:**
- Must \`#include <string>\` to use string functions
- Concatenation: \`"Hello" + " " + "World"\` (same as Python!)
- \`.length()\` or \`.size()\` = string length (Python: \`len()\`)
- Access characters: \`s[0]\` works in both languages
- Strings are mutable in C++ (unlike Python!)

👀 Notice that C++ strings can be changed in place — Python strings can't!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // Creating strings
    string s1 = "Hello";
    string s2 = "World";
    string s3;           // Empty string ""
    
    // Concatenation (same as Python!)
    string greeting = s1 + ", " + s2 + "!";
    cout << greeting << endl;  // Hello, World!
    
    // Length
    cout << "Length: " << greeting.length() << endl;  // 13
    // Python: len(greeting)
    
    // Access individual characters
    cout << "First char: " << greeting[0] << endl;    // H
    cout << "Last char: " << greeting[greeting.length()-1] << endl;  // !
    // Python: greeting[0], greeting[-1]  <- C++ has NO negative indexing!
    
    // Modify characters (C++ strings ARE mutable!)
    greeting[0] = 'J';
    cout << greeting << endl;  // Jello, World!
    // Python: Can't do this! Strings are immutable in Python.
    
    // String comparison
    string a = "apple", b = "banana";
    if (a < b) cout << a << " comes before " << b << endl;
    // Python: same! "apple" < "banana"
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "✂️",
      content: `# String Methods · 字符串方法

🎯 **What you'll learn · 你将学到:**
- C++ string methods vs Python string methods
- \`find()\`, \`substr()\`, \`replace()\`, \`append()\`
- Method names differ but concepts are the same

String methods are your **text editing toolkit** ✂️ — find, cut, replace, and rearrange text!

🔑 **Key things to notice · 注意要点:**
- Python \`.find()\` → C++ \`.find()\` (returns position or \`string::npos\`)
- Python \`s[a:b]\` → C++ \`s.substr(a, length)\` (length, not end!)
- Python \`.replace()\` → C++ \`.replace(pos, len, new_str)\`
- Python \`.upper()\` → No direct equivalent (need loop or \`<algorithm>\`)

👀 Pay attention to \`substr()\` — it takes (start, LENGTH), not (start, end)!`,
      code: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s = "Hello, World!";
    
    // Substring (Python: s[7:12] -> C++: s.substr(start, length))
    cout << s.substr(7, 5) << endl;     // World
    // NOTE: It's (start, LENGTH), not (start, end)!
    
    // Find (Python: s.find("World") -> same in C++!)
    size_t pos = s.find("World");
    cout << "Found at: " << pos << endl;  // 7
    
    // Not found check
    if (s.find("xyz") == string::npos) {
        cout << "Not found!" << endl;
    }
    // Python: s.find("xyz") returns -1
    
    // Replace
    string s2 = s;
    s2.replace(7, 5, "C++");  // Replace 5 chars starting at pos 7
    cout << s2 << endl;        // Hello, C++!
    
    // Insert & erase
    string s3 = "Hello World";
    s3.insert(5, ",");         // Insert at position
    cout << s3 << endl;        // Hello, World
    s3.erase(5, 1);           // Erase 1 char at position 5
    cout << s3 << endl;        // Hello World
    
    // Append
    string s4 = "Hello";
    s4.append(" World");       // or s4 += " World";
    cout << s4 << endl;
    
    // Clear
    s4.clear();
    cout << "Empty? " << s4.empty() << endl;  // 1 (true)
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🔡",
      content: `# Character Operations · 字符操作

🎯 **What you'll learn · 你将学到:**
- C++ has a dedicated \`char\` type (Python doesn't!)
- Character functions: \`isalpha()\`, \`isdigit()\`, \`toupper()\`
- Characters are secretly numbers (ASCII)

Characters in C++ are like **individual LEGO bricks** 🧱 — each one is a single piece you can examine and transform. Python treats characters as one-character strings; C++ gives them their own type!

🔑 **Key things to notice · 注意要点:**
- \`char c = 'A';\` — single quotes for characters!
- \`isalpha(c)\`, \`isdigit(c)\` = check character type
- \`toupper(c)\`, \`tolower(c)\` = convert case
- Characters are numbers: \`'A'\` = 65, \`'a'\` = 97

👀 Try the ASCII math — characters behave like numbers in C++!`,
      code: `#include <iostream>
#include <string>
#include <cctype>  // Character functions
using namespace std;

int main() {
    // Characters are numbers (ASCII)!
    char c = 'A';
    cout << "A as number: " << (int)c << endl;   // 65
    cout << "A + 1 = " << (char)(c + 1) << endl; // B
    
    // Character checking functions from <cctype>
    cout << "isalpha('A'): " << isalpha('A') << endl;   // non-zero (true)
    cout << "isdigit('5'): " << isdigit('5') << endl;   // non-zero (true)
    cout << "isspace(' '): " << isspace(' ') << endl;   // non-zero (true)
    cout << "isupper('A'): " << isupper('A') << endl;   // non-zero (true)
    cout << "islower('a'): " << islower('a') << endl;   // non-zero (true)
    
    // Convert case
    cout << "toupper('a'): " << (char)toupper('a') << endl;  // A
    cout << "tolower('Z'): " << (char)tolower('Z') << endl;  // z
    
    // Iterate over string characters
    string word = "Hello";
    for (int i = 0; i < word.length(); i++) {
        cout << word[i] << " ";
    }
    cout << endl;  // H e l l o
    
    // Convert whole string to uppercase
    string upper = "hello";
    for (int i = 0; i < upper.length(); i++) {
        upper[i] = toupper(upper[i]);
    }
    cout << upper << endl;  // HELLO
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "📊",
      content: `# String Method Comparison Chart · 字符串方法对照表

| Python | C++ | Notes |
|--------|-----|-------|
| \`len(s)\` | \`s.length()\` / \`s.size()\` | Both work in C++ |
| \`s.find("x")\` | \`s.find("x")\` | Returns \`string::npos\` if not found |
| \`s[1:4]\` | \`s.substr(1, 3)\` | C++ uses (start, LENGTH) |
| \`s.upper()\` | Loop with \`toupper()\` | No built-in method! |
| \`s.lower()\` | Loop with \`tolower()\` | No built-in method! |
| \`s.replace("a","b")\` | \`s.replace(pos, len, "b")\` | C++ replaces by position |
| \`s.split()\` | Manual parsing | No built-in split! 😱 |
| \`",".join(list)\` | Manual building | No built-in join! |
| \`s.strip()\` | Manual trimming | No built-in strip! |
| \`s * 3\` | Loop or \`string(3, 'x')\` | Only for single char repeat |
| \`f"Hi {name}"\` | \`"Hi " + name\` | No f-strings in C++ |
| \`s in "hello"\` | \`s.find(s) != npos\` | No \`in\` operator for strings |

🐍 **Py says:** "Yeah... Python strings are way more convenient. But C++ gives you more control and speed!"`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Write a program that reads a word and prints it reversed.`,
      exercise: {
        prompt: "Read a word and print it reversed",
        promptZh: "读取一个单词并反向输出",
        starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string word;
    cin >> word;
    
    // Reverse and print the word
    
    
    return 0;
}`,
        expectedOutput: "olleH",
        hint: "Loop from the last index to 0, printing each character",
        hintZh: "从最后一个索引循环到0，打印每个字符",
        solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string word;
    cin >> word;
    
    for (int i = word.length() - 1; i >= 0; i--) {
        cout << word[i];
    }
    cout << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "code",
      emoji: "🔧",
      content: `# Useful String Patterns · 实用字符串技巧

🎯 **What you'll learn · 你将学到:**
- Common string manipulation patterns
- Counting, reversing, splitting, and transforming strings
- Using \`stringstream\` for string splitting

These are your **string recipes** 🍳 — common patterns you'll use over and over in real programs and competitions!

🔑 **Key things to notice · 注意要点:**
- Count characters by looping through the string
- \`reverse(s.begin(), s.end())\` reverses in-place
- \`stringstream\` splits strings by spaces (like Python's \`.split()\`)
- Transform case with loops and \`toupper()\`/\`tolower()\`

👀 These patterns come up constantly in coding challenges!`,
      code: `#include <iostream>
#include <string>
#include <sstream>  // For stringstream
using namespace std;

int main() {
    // Count character occurrences
    string text = "hello world";
    int count = 0;
    for (char c : text) {  // Range-based for loop (like Python's for c in text)
        if (c == 'l') count++;
    }
    cout << "'l' appears " << count << " times" << endl;
    
    // Split by delimiter (manual -- no built-in!)
    string csv = "apple,banana,cherry";
    stringstream ss(csv);
    string token;
    while (getline(ss, token, ',')) {
        cout << token << endl;
    }
    
    // Build a string with numbers
    string result = "";
    for (int i = 1; i <= 5; i++) {
        result += to_string(i);
        if (i < 5) result += ", ";
    }
    cout << result << endl;  // 1, 2, 3, 4, 5
    
    // Check if string starts/ends with (C++20, or manual)
    string s = "Hello World";
    if (s.substr(0, 5) == "Hello") {
        cout << "Starts with Hello!" << endl;
    }
    if (s.substr(s.length()-5) == "World") {
        cout << "Ends with World!" << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What does `s.substr(2, 3)` return if s = \"Hello\"?\n如果s = \"Hello\"，`s.substr(2, 3)`返回什么？",
          options: ["\"llo\"", "\"ll\"", "\"lo\"", "\"el\""],
          correctIndex: 0,
          explanation: "substr(2, 3) means: start at index 2, take 3 characters → 'l', 'l', 'o' = \"llo\". Remember: it's (start, LENGTH) not (start, end)! · substr(2,3)从索引2开始取3个字符。",
        },
        {
          question: "Can you do `s[0] = 'X'` in C++?\n在C++中可以写 `s[0] = 'X'` 吗？",
          options: ["Only for char arrays · 只对字符数组可以", "Only with const · 只能用const", "No, strings are immutable · 不行，字符串不可变", "Yes, C++ strings are mutable! · 可以，C++字符串可变！"],
          correctIndex: 3,
          explanation: "Unlike Python, C++ strings ARE mutable! You can change individual characters. · 与Python不同，C++字符串是可变的！",
        },
        {
                  "question": "How do you get the length of a string in C++?\nC++中怎么获取字符串长度？",
                  "options": [
                            "len(s)",
                            "s.length() or s.size()",
                            "strlen(s)",
                            "s.count()"
                  ],
                  "correctIndex": 1,
                  "explanation": "C++ strings use .length() or .size() method. len() is Python, strlen() is for C-strings. · C++用.length()或.size()。"
        },
        {
                  "question": "What does `s.substr(2, 3)` return if s = \"Hello\"?\ns=\"Hello\"时，s.substr(2,3)返回什么？",
                  "options": [
                            "\"He\"",
                            "\"llo\"",
                            "\"Hel\"",
                            "\"lo\""
                  ],
                  "correctIndex": 1,
                  "explanation": "substr(2, 3) means starting at index 2, take 3 characters: 'l', 'l', 'o' → \"llo\". · 从索引2开始取3个字符。"
        },
        {
                  "question": "How do you concatenate strings in C++?\nC++中如何连接字符串？",
                  "options": [
                            "s1.join(s2)",
                            "s1 & s2",
                            "s1 + s2",
                            "concat(s1, s2)"
                  ],
                  "correctIndex": 2,
                  "explanation": "Just like Python, C++ uses + to concatenate strings. \"Hello\" + \" World\" = \"Hello World\". · 和Python一样用+连接字符串。"
        },
        {
                  "question": "What's the difference between 'A' and \"A\" in C++?\nC++中'A'和\"A\"有什么区别？",
                  "options": [
                            "No difference · 没区别",
                            "'A' is char, \"A\" is string · 'A'是字符，\"A\"是字符串",
                            "'A' is string, \"A\" is char · 反过来",
                            "Both are strings · 都是字符串"
                  ],
                  "correctIndex": 1,
                  "explanation": "Single quotes = char (one character). Double quotes = string. This matters in C++! · 单引号=字符，双引号=字符串。"
        },
        {
                  "type": "coding",
                  "question": "Read a string and print its length and first character.\n读取字符串，打印长度和第一个字符。",
                  "prompt": "Read a word, print its length and first character",
                  "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string word;\n    cin >> word;\n    // Print length and first character\n    \n    return 0;\n}",
                  "expectedOutput": "Length: 5\nFirst: H",
                  "hint": "Use word.length() and word[0] · 使用word.length()和word[0]",
                  "explanation": "string.length() gives the size, and [0] accesses the first character, just like Python! · .length()取长度，[0]取首字符。"
        },
        {
                  "type": "coding",
                  "question": "Concatenate two strings with a space between them.\n用空格连接两个字符串。",
                  "prompt": "Read two words, print them joined with a space",
                  "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string first, second;\n    cin >> first >> second;\n    // Print them joined with a space\n    \n    return 0;\n}",
                  "expectedOutput": "Hello World",
                  "hint": "Use first + \" \" + second · 使用first + \" \" + second",
                  "explanation": "String concatenation with + works the same as Python. · 字符串用+连接，和Python一样。"
        },
      ],
    },
  ],
};

const cpp_1_6: Lesson = {
  id: "cpp-1-6",
  moduleId: "cpp-1",
  title: "Your First C++ Projects",
  subtitle: "Mini projects combining basics · 综合小项目",
  icon: "🚀",
  xp: 200,
  duration: "30 min",
  order: 6,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "🚀",
      content: `# Time to Build! · 动手做项目！

⚡ **Volt says:** "You've learned the basics — variables, types, I/O, math, and strings. Now let's combine everything into real mini-projects!"

🐍 **Py says:** "I'll show you the Python version first so you can see how the logic translates."

We'll build:
1. 🌡️ Temperature Converter
2. 🧮 Simple Calculator
3. 🎲 Mad Libs Game`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "Review: All C++ Basics",
      concept: {
        title: "🧰 Review: All C++ Basics So Far",
        titleZh: "复习：目前所有 C++ 基础",
        syntaxCards: [
            {
              symbol: "#include",
              name: "Include libraries",
              nameZh: "引入库",
              emoji: "📦",
              description: "Always start your program by importing the toolboxes 📦 you need! <iostream> for I/O, <string> for strings, <cmath> for math.",
              example: "#include <iostream>\n#include <string>\n#include <cmath>",
            },
            {
              symbol: "int / double / string",
              name: "Variable types",
              nameZh: "变量类型",
              emoji: "📋",
              description: "In C++ you MUST declare the type 📋 of every variable. It's like labeling your containers before filling them.",
              example: "int count = 0;\ndouble price = 9.99;\nstd::string name = \"Bob\";",
            },
            {
              symbol: "cin >> / cout <<",
              name: "Input / Output",
              nameZh: "输入 / 输出",
              emoji: "🔄",
              description: "cin >> reads IN from keyboard 🎤, cout << sends OUT to screen 📢. Remember the arrow direction!",
              example: "std::cout << \"Hi!\" << std::endl;\nint x;\nstd::cin >> x;",
            },
            {
              symbol: "; (semicolon)",
              name: "Statement terminator",
              nameZh: "语句结束符",
              emoji: "🔚",
              description: "Every statement needs a period — that's the semicolon! 🔚 Forget it and the compiler will yell at you. Python doesn't need this!",
              example: "int x = 5;  // semicolon!\nstd::cout << x; // semicolon!",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O tools", explanationZh: "引入输入输出工具" },
              { code: "#include <string>", explanation: "Import string tools", explanationZh: "引入字符串工具" },
              { code: "int main() {", explanation: "Program starts here", explanationZh: "程序从这里开始" },
              { code: "    std::string name;", explanation: "Declare a string variable", explanationZh: "声明一个字符串变量" },
              { code: "    std::cout << \"Name: \";", explanation: "Prompt the user", explanationZh: "提示用户输入" },
              { code: "    std::getline(std::cin, name);", explanation: "Read full line of input", explanationZh: "读取一整行输入" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🌡️",
      content: `# Project 1: Temperature Converter · 温度转换器

🎯 **What you'll learn · 你将学到:**
- Building a complete program with input, math, and output
- Applying everything from Lessons 1-5
- Formatted output with decimal places

Your first real project! 🎉 Like building your first **gadget** 🔧 — it takes input, processes it, and gives output. Simple but satisfying!

🔑 **Key things to notice · 注意要点:**
- Formula: \`F = C * 9/5 + 32\`
- Use \`double\` for temperature (decimals matter!)
- Format output with \`fixed << setprecision(1)\`
- The logic is identical to Python — only syntax changes

👀 Compare this to the Python version — spot all the syntax differences!`,
      code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double celsius;
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;
    
    double fahrenheit = celsius * 9.0 / 5.0 + 32.0;
    
    cout << fixed << setprecision(1);
    cout << celsius << " deg C = " << fahrenheit << " deg F" << endl;
    
    // Bonus: Convert back
    double backToCelsius = (fahrenheit - 32.0) * 5.0 / 9.0;
    cout << fahrenheit << " deg F = " << backToCelsius << " deg C" << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🧮",
      content: `# Project 2: Simple Calculator · 简单计算器

🎯 **What you'll learn · 你将学到:**
- Using \`if/else if\` with character comparison
- Reading different types of input
- Handling edge cases (division by zero)

A calculator is the **Swiss Army knife** 🔪 of beginner projects — it combines input, conditionals, and math all in one!

🔑 **Key things to notice · 注意要点:**
- Use \`char\` for the operator (single character)
- \`if/else if\` chain to handle +, -, *, /
- Always check for division by zero!
- Compare with the Python version — very similar logic

👀 Try adding more operators like \`%\` (modulo) or power!`,
      code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a, b;
    char op;
    
    cout << "Simple Calculator" << endl;
    cout << "Enter: number operator number" << endl;
    cout << "Example: 5 + 3" << endl;
    cout << "> ";
    cin >> a >> op >> b;
    
    cout << fixed << setprecision(2);
    
    if (op == '+') {
        cout << a << " + " << b << " = " << a + b << endl;
    } else if (op == '-') {
        cout << a << " - " << b << " = " << a - b << endl;
    } else if (op == '*') {
        cout << a << " * " << b << " = " << a * b << endl;
    } else if (op == '/') {
        if (b != 0) {
            cout << a << " / " << b << " = " << a / b << endl;
        } else {
            cout << "Error: Cannot divide by zero!" << endl;
        }
    } else {
        cout << "Unknown operator: " << op << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🎲",
      content: `# Project 3: Mad Libs Game · 疯狂填词游戏

🎯 **What you'll learn · 你将学到:**
- Reading multiple string inputs with \`getline()\`
- Combining strings into a fun story
- Making interactive programs that are actually fun!

Mad Libs is like a **story template** 📝 with blanks — the user fills in words, and hilarious stories appear!

🔑 **Key things to notice · 注意要点:**
- Use \`getline()\` to read multi-word inputs
- String concatenation builds the final story
- The \`+\` operator joins strings together
- This is pure creativity — make your story funny! 😄

👀 Try creating your own Mad Libs template with different word types!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name, animal, food, adjective, verb;
    int number;
    
    cout << "=== Mad Libs Game ===" << endl;
    
    cout << "Enter a name: ";
    getline(cin, name);
    
    cout << "Enter an animal: ";
    getline(cin, animal);
    
    cout << "Enter a food: ";
    getline(cin, food);
    
    cout << "Enter an adjective: ";
    getline(cin, adjective);
    
    cout << "Enter a verb (past tense): ";
    getline(cin, verb);
    
    cout << "Enter a number: ";
    cin >> number;
    
    cout << "\\n=== Your Story ===" << endl;
    cout << "Once upon a time, " << name << " found a " << adjective 
         << " " << animal << "." << endl;
    cout << "The " << animal << " " << verb << " " << number 
         << " times and then ate " << food << "." << endl;
    cout << "\\"That was " << adjective << "!\\" said " << name << "." << endl;
    cout << "The End." << endl;
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Your Turn! · 你来写！

Write a program that calculates the area and perimeter of a rectangle.
Input: length and width
Output: area and perimeter with 2 decimal places`,
      exercise: {
        prompt: "Calculate rectangle area and perimeter",
        promptZh: "计算矩形的面积和周长",
        starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double length, width;
    
    cout << "Enter length: ";
    cin >> length;
    cout << "Enter width: ";
    cin >> width;
    
    // Calculate and print area and perimeter
    
    
    return 0;
}`,
        expectedOutput: "Area: 50.00\nPerimeter: 30.00",
        hint: "Area = length * width, Perimeter = 2 * (length + width)",
        hintZh: "面积 = 长 × 宽，周长 = 2 × (长 + 宽)",
        solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double length, width;
    
    cout << "Enter length: ";
    cin >> length;
    cout << "Enter width: ";
    cin >> width;
    
    double area = length * width;
    double perimeter = 2 * (length + width);
    
    cout << fixed << setprecision(2);
    cout << "Area: " << area << endl;
    cout << "Perimeter: " << perimeter << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "text",
      emoji: "📋",
      content: `# Module 1 Cheat Sheet · 第一模块速查表

## Essential C++ Structure:
\`\`\`cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    // Your code here
    return 0;
}
\`\`\`

## Types: \`int\`, \`double\`, \`char\`, \`string\`, \`bool\`, \`long long\`

## Output: \`cout << "text" << variable << endl;\`

## Input: \`cin >> variable;\` or \`getline(cin, stringVar);\`

## Formatting: \`fixed << setprecision(n)\` (need \`#include <iomanip>\`)

## Math: \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`++\`, \`--\`, \`pow()\`

## Strings: \`.length()\`, \`.substr()\`, \`.find()\`, \`+\` to concatenate

🐍 **Py says:** "You've learned the C++ versions of everything in Python's first chapter. The syntax is different but the logic is the same!"

⚡ **Volt says:** "Next up: control flow! if/else, switches, and loops — with braces! 🏗️"`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Module 1 Final Quiz · 第一模块测验",
      quiz: [
        {
          question: "Which line correctly reads a full name with spaces?\n哪行代码能正确读取带空格的全名？",
          options: ["`scanf(name);`", "`getline(cin, name);`", "`read(name);`", "`cin >> name;`"],
          correctIndex: 1,
          explanation: "getline(cin, name) reads the entire line including spaces. cin >> only reads one word! · getline读取整行包括空格。",
        },
        {
          question: "What's the output of: `cout << 10 / 3;`?\n`cout << 10 / 3;` 输出什么？",
          options: ["4", "3.0", "3", "3.33"],
          correctIndex: 2,
          explanation: "Both 10 and 3 are integers, so integer division gives 3 (truncated). · 两个都是整数，整数除法得3。",
        },
        {
                  "question": "What is the correct order to build a C++ project?\n构建C++项目的正确顺序是？",
                  "options": [
                            "Run → Compile → Write · 运行→编译→编写",
                            "Compile → Write → Run · 编译→编写→运行",
                            "Write → Compile → Run · 编写→编译→运行",
                            "Write → Run → Compile · 编写→运行→编译"
                  ],
                  "correctIndex": 2,
                  "explanation": "Write code first, compile with g++, then run the executable. · 先写代码，再编译，最后运行。"
        },
        {
                  "question": "What does `g++ -o myprogram main.cpp` do?\n这个命令做什么？",
                  "options": [
                            "Runs the program · 运行程序",
                            "Compiles main.cpp into an executable called myprogram · 编译main.cpp为可执行文件myprogram",
                            "Deletes main.cpp · 删除main.cpp",
                            "Opens the file · 打开文件"
                  ],
                  "correctIndex": 1,
                  "explanation": "g++ is the C++ compiler. -o names the output executable. · g++是编译器，-o指定输出文件名。"
        },
        {
                  "question": "Which is good C++ coding practice?\n哪个是好的C++编程习惯？",
                  "options": [
                            "Never use comments · 从不写注释",
                            "Use meaningful variable names and add comments · 使用有意义的变量名并添加注释",
                            "Put everything on one line · 所有代码写一行",
                            "Avoid using functions · 避免使用函数"
                  ],
                  "correctIndex": 1,
                  "explanation": "Good code is readable! Use meaningful names, comments, and proper indentation. · 好代码要可读！"
        },
        {
                  "question": "What file extension do C++ source files use?\nC++源文件用什么扩展名？",
                  "options": [
                            ".py",
                            ".java",
                            ".cpp",
                            ".js"
                  ],
                  "correctIndex": 2,
                  "explanation": "C++ source files use .cpp (or sometimes .cc, .cxx). .py is Python, .java is Java. · C++用.cpp扩展名。"
        },
        {
                  "type": "coding",
                  "question": "Write a simple calculator that reads two numbers and an operator (+), and prints the result.\n编写简单计算器：读取两个数和运算符(+)，打印结果。",
                  "prompt": "Read two doubles and print their sum in format: a + b = result",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    cin >> a >> b;\n    // Print: a + b = result\n    \n    return 0;\n}",
                  "expectedOutput": "3 + 5 = 8",
                  "hint": "Use cout << a << \" + \" << b << \" = \" << a+b << endl; · 用cout格式化输出",
                  "explanation": "Chain multiple items with << to format the output nicely. · 用<<连接多项来格式化输出。"
        },
        {
                  "type": "coding",
                  "question": "Convert temperature from Celsius to Fahrenheit.\n将摄氏温度转换为华氏温度。",
                  "prompt": "Read Celsius, print Fahrenheit (F = C * 9/5 + 32) with 1 decimal place",
                  "starterCode": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double celsius;\n    cin >> celsius;\n    // Convert and print Fahrenheit\n    \n    return 0;\n}",
                  "expectedOutput": "212.0",
                  "hint": "F = celsius * 9.0 / 5.0 + 32. Use fixed << setprecision(1) · 公式：F = C * 9/5 + 32",
                  "explanation": "Use 9.0/5.0 to avoid integer division. Format with setprecision(1). · 用9.0/5.0避免整数除法。"
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE CPP-2: CONTROL FLOW (4 lessons)
// ═══════════════════════════════════════════════════════════════

const cpp_2_1: Lesson = {
  id: "cpp-2-1",
  moduleId: "cpp-2",
  title: "if/else with Braces",
  subtitle: "Conditionals in C++ · C++条件语句",
  icon: "🔀",
  xp: 150,
  duration: "20 min",
  order: 7,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "🔀",
      content: `# if/else: Python vs C++ · 条件语句对比

🐍 **Py says:** "In Python, we use indentation and colons. In C++, we use braces \`{}\`."

## 🐍 Python:
\`\`\`python
age = 16
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")
\`\`\`

## ⚡ C++:
\`\`\`cpp
int age = 16;
if (age >= 18) {
    cout << "Adult" << endl;
} else if (age >= 13) {
    cout << "Teen" << endl;
} else {
    cout << "Child" << endl;
}
\`\`\`

### Key Differences:
- Python: \`if condition:\` → C++: \`if (condition) {\`
- Python: \`elif\` → C++: \`else if\`
- Python uses **indentation** → C++ uses **braces \`{}\`**
- C++ conditions MUST be in parentheses \`()\``,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: if/else Branching",
      concept: {
        title: "🧰 New Syntax: if/else Branching",
        titleZh: "新语法：if/else 分支",
        syntaxCards: [
            {
              symbol: "if (condition) { }",
              name: "If statement",
              nameZh: "If 条件语句",
              emoji: "🚦",
              description: "A traffic light 🚦 for your code! If the condition is true (green light), the code inside { } runs. Otherwise, it's skipped.",
              example: "if (age >= 18) {\n    std::cout << \"Adult\";\n}",
            },
            {
              symbol: "else if (condition) { }",
              name: "Else-if (another check)",
              nameZh: "否则如果",
              emoji: "🔀",
              description: "A fork in the road 🔀! If the first \"if\" was false, try this condition instead. You can chain many else-ifs.",
              example: "if (score >= 90) {\n    std::cout << \"A\";\n} else if (score >= 80) {\n    std::cout << \"B\";\n}",
            },
            {
              symbol: "else { }",
              name: "Else (default/fallback)",
              nameZh: "否则（默认）",
              emoji: "🛟",
              description: "The safety net 🛟! If ALL conditions above were false, this code runs. It's the \"everything else\" option.",
              example: "} else {\n    std::cout << \"Other\";\n}",
            },
            {
              symbol: "== != < > <= >=",
              name: "Comparison operators",
              nameZh: "比较运算符",
              emoji: "⚖️",
              description: "Like a judge ⚖️ comparing two values! == means equal (not =, which assigns!). These return true or false.",
              example: "if (x == 5)   // equal?\nif (x != 5)   // not equal?\nif (x >= 10)  // at least 10?",
            },
            {
              symbol: "&& || !",
              name: "Logical operators",
              nameZh: "逻辑运算符",
              emoji: "🧠",
              description: "&& = AND (both must be true), || = OR (at least one true), ! = NOT (flips true↔false). Brain 🧠 logic!",
              example: "if (age >= 13 && age <= 19) {\n    std::cout << \"Teenager\";\n}",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    int score = 85;", explanation: "Declare and initialize score to 85", explanationZh: "声明并初始化 score 为 85" },
              { code: "    if (score >= 90) {", explanation: "Check: is score at least 90? (false here)", explanationZh: "检查：score 是否 >= 90？（这里为假）" },
              { code: "    } else if (score >= 80) {", explanation: "Second check: is score at least 80? (true! 85 >= 80)", explanationZh: "第二个检查：score >= 80？（真！85 >= 80）" },
              { code: "        std::cout << \"Grade: B\" << std::endl;", explanation: "This runs! Print \"Grade: B\"", explanationZh: "这会执行！打印 \"Grade: B\"" },
              { code: "    }", explanation: "Close else-if block", explanationZh: "关闭 else-if 代码块" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📝",
      content: `# Comparison & Logical Operators · 比较和逻辑运算符

🎯 **What you'll learn · 你将学到:**
- Comparison operators: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`
- Logical operators: \`&&\` (and), \`||\` (or), \`!\` (not)
- How they compare to Python's English words

Comparisons are the same, but logical operators got a **costume change** 🎭! Python says \`and\`, \`or\`, \`not\` in English. C++ uses symbols: \`&&\`, \`||\`, \`!\`

🔑 **Key things to notice · 注意要点:**
- Comparisons (\`==\`, \`!=\`, \`<\`, etc.) = same as Python!
- Python \`and\` → C++ \`&&\`
- Python \`or\` → C++ \`||\`
- Python \`not\` → C++ \`!\`

👀 Just memorize the three logical operator changes!`,
      code: `#include <iostream>
using namespace std;

int main() {
    int x = 10, y = 20;
    
    // Comparison operators (same as Python!)
    cout << (x == y) << endl;   // 0 (false) -- equal
    cout << (x != y) << endl;   // 1 (true)  -- not equal
    cout << (x < y) << endl;    // 1 (true)  -- less than
    cout << (x > y) << endl;    // 0 (false) -- greater than
    cout << (x <= y) << endl;   // 1 (true)
    cout << (x >= y) << endl;   // 0 (false)
    
    // Logical operators
    // Python: and -> C++: &&
    // Python: or  -> C++: ||
    // Python: not -> C++: !
    
    bool isStudent = true;
    int age = 16;
    
    if (isStudent && age < 18) {
        cout << "Student discount!" << endl;
    }
    
    if (age < 13 || age > 65) {
        cout << "Special ticket" << endl;
    }
    
    if (!isStudent) {
        cout << "Not a student" << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🏗️",
      content: `# Nested if & Common Patterns · 嵌套if和常见模式

🎯 **What you'll learn · 你将学到:**
- Nesting \`if\` statements inside each other
- Grade classification pattern
- How C++ braces \`{}\` replace Python's indentation

Nested ifs are like a **decision tree** 🌳 — each branch leads to more branches. In Python, indentation shows nesting. In C++, curly braces \`{}\` do the job!

🔑 **Key things to notice · 注意要点:**
- Braces \`{}\` define code blocks (not indentation like Python)
- \`else if\` (two words) instead of Python's \`elif\`
- Indent your code for readability even though C++ doesn't require it!

👀 Trace through with a test score — which branch does the code take?`,
      code: `#include <iostream>
using namespace std;

int main() {
    int score;
    cout << "Enter your score (0-100): ";
    cin >> score;
    
    // Grade calculator
    char grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    cout << "Grade: " << grade << endl;
    
    // Nested if
    if (score >= 60) {
        cout << "You passed!" << endl;
        if (score >= 90) {
            cout << "Excellent work!" << endl;
        }
    } else {
        cout << "You need to study more." << endl;
    }
    
    // Single-line if (no braces needed for one statement)
    if (score == 100) cout << "PERFECT!" << endl;
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "⚠️",
      content: `# Common Mistakes · 常见错误

## ❌ Mistake 1: Using = instead of ==
\`\`\`cpp
if (x = 5) {  // WRONG! This ASSIGNS 5 to x (always true!)
if (x == 5) { // CORRECT! This COMPARES x to 5
\`\`\`

## ❌ Mistake 2: Missing parentheses
\`\`\`cpp
if x > 5 {    // WRONG! Missing ()
if (x > 5) {  // CORRECT!
\`\`\`

## ❌ Mistake 3: Dangling else
\`\`\`cpp
if (x > 0)
    if (x > 10)
        cout << "Big";
else                    // This belongs to the INNER if, not the outer!
    cout << "Negative?"; // Bug! Use braces to be safe.
\`\`\`

⚡ **Volt says:** "ALWAYS use braces, even for single statements. It prevents subtle bugs!"`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Write a program that reads a year and checks if it's a leap year.
Leap year rules: divisible by 4, BUT not by 100, UNLESS also by 400.`,
      exercise: {
        prompt: "Check if a year is a leap year",
        promptZh: "判断是否为闰年",
        starterCode: `#include <iostream>
using namespace std;

int main() {
    int year;
    cin >> year;
    
    // Check leap year and print result
    
    
    return 0;
}`,
        expectedOutput: "2024 is a leap year",
        hint: "A year is leap if: (divisible by 4 AND not by 100) OR (divisible by 400)",
        hintZh: "闰年条件：(能被4整除且不能被100整除) 或 (能被400整除)",
        solution: `#include <iostream>
using namespace std;

int main() {
    int year;
    cin >> year;
    
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        cout << year << " is a leap year" << endl;
    } else {
        cout << year << " is not a leap year" << endl;
    }
    
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What's the C++ equivalent of Python's `elif`?\nPython的`elif`在C++中是什么？",
          options: ["elsif", "else if", "elif", "elseif"],
          correctIndex: 1,
          explanation: "C++ uses `else if` (two words). Python shortened it to `elif`. · C++使用`else if`（两个词）。",
        },
        {
          question: "What's the C++ equivalent of Python's `and`?\nPython的`and`在C++中是什么？",
          options: ["&&", "&", "AND", "and"],
          correctIndex: 0,
          explanation: "Python uses `and`, C++ uses `&&`. Similarly: `or` → `||`, `not` → `!`. · Python用and，C++用&&。",
        },
        {
                  "question": "What replaces Python's `elif` in C++?\nC++中什么替代Python的elif？",
                  "options": [
                            "elseif",
                            "else if",
                            "elif",
                            "elsif"
                  ],
                  "correctIndex": 1,
                  "explanation": "C++ uses 'else if' (two words) instead of Python's 'elif'. · C++用else if（两个词）。"
        },
        {
                  "question": "What are the braces {} used for in if statements?\nif语句中花括号{}的作用是什么？",
                  "options": [
                            "Decoration · 装饰",
                            "They define the code block to execute · 定义要执行的代码块",
                            "They end the program · 结束程序",
                            "They create variables · 创建变量"
                  ],
                  "correctIndex": 1,
                  "explanation": "Braces {} define code blocks in C++, replacing Python's indentation. · 花括号定义代码块，替代Python的缩进。"
        },
        {
                  "question": "What is the C++ equality operator?\nC++的相等运算符是什么？",
                  "options": [
                            "=",
                            "==",
                            "===",
                            "equals()"
                  ],
                  "correctIndex": 1,
                  "explanation": "== checks equality (comparison). = is assignment. Don't mix them up! · ==比较，=赋值，别搞混！"
        },
        {
                  "question": "What do && and || mean in C++?\nC++中&&和||是什么意思？",
                  "options": [
                            "Add and subtract · 加和减",
                            "AND and OR · 与和或",
                            "Bitwise shift · 位移",
                            "Pointer operations · 指针操作"
                  ],
                  "correctIndex": 1,
                  "explanation": "&&  is logical AND (Python's 'and'), || is logical OR (Python's 'or'). · &&是与，||是或。"
        },
        {
                  "type": "coding",
                  "question": "Write a program that reads an integer and prints whether it's positive, negative, or zero.\n读取整数，判断正数、负数还是零。",
                  "prompt": "Read n, print 'positive', 'negative', or 'zero'",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // Use if/else if/else to check\n    \n    return 0;\n}",
                  "expectedOutput": "positive",
                  "hint": "Use if (n > 0), else if (n < 0), else · 用if/else if/else判断",
                  "explanation": "Use if/else if/else chain to check conditions. Remember braces {}! · 用if/else if/else链判断条件。"
        },
        {
                  "type": "coding",
                  "question": "Check if a number is even or odd.\n判断一个数是奇数还是偶数。",
                  "prompt": "Read n, print 'even' or 'odd'",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // Check even or odd\n    \n    return 0;\n}",
                  "expectedOutput": "even",
                  "hint": "Use n % 2 == 0 to check if even · 用n%2==0判断偶数",
                  "explanation": "If n % 2 equals 0, the number is even; otherwise it's odd. · n%2==0则为偶数。"
        },
      ],
    },
  ],
};

const cpp_2_2: Lesson = {
  id: "cpp-2-2",
  moduleId: "cpp-2",
  title: "switch & Ternary",
  subtitle: "New tools Python doesn't have! · Python没有的新工具！",
  icon: "🔃",
  xp: 150,
  duration: "20 min",
  order: 8,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "🔃",
      content: `# switch Statement · switch语句

⚡ **Volt says:** "The \`switch\` statement is like a super-powered if/else chain for checking one variable against many values. Python doesn't have this! (Python 3.10 added match/case, but switch is different.)"

## When to use switch:
- Checking ONE variable against MANY specific values
- The values are constants (not ranges!)
- Cleaner than a long if/else if chain`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: switch & Ternary",
      concept: {
        title: "🧰 New Syntax: switch & Ternary",
        titleZh: "新语法：switch 和三元运算符",
        syntaxCards: [
            {
              symbol: "switch (value) { }",
              name: "Switch statement",
              nameZh: "Switch 选择语句",
              emoji: "🎰",
              description: "Like a vending machine 🎰! Put in a value, and it jumps to the matching case. Cleaner than many if/else chains.",
              example: "switch (day) {\n    case 1: cout << \"Mon\"; break;\n    case 2: cout << \"Tue\"; break;\n}",
            },
            {
              symbol: "case value:",
              name: "Case label",
              nameZh: "分支标签",
              emoji: "🏷️",
              description: "Each label 🏷️ is an option in your vending machine. If the switch value matches, execution starts here.",
              example: "case 1:\n    std::cout << \"One\";\n    break;",
            },
            {
              symbol: "break;",
              name: "Break out of switch",
              nameZh: "跳出 switch",
              emoji: "🛑",
              description: "STOP 🛑 sign! Without break, code \"falls through\" to the next case. Almost always add break after each case!",
              example: "case 1:\n    cout << \"One\";\n    break; // stop here!",
            },
            {
              symbol: "default:",
              name: "Default case",
              nameZh: "默认分支",
              emoji: "🛟",
              description: "The catch-all 🛟! If no case matches, default runs. Like else for switch.",
              example: "default:\n    std::cout << \"Unknown\";\n    break;",
            },
            {
              symbol: "condition ? a : b",
              name: "Ternary operator",
              nameZh: "三元运算符",
              emoji: "⚡",
              description: "A mini if/else in one line ⚡! If condition is true → use a, if false → use b. Super compact!",
              example: "int max = (a > b) ? a : b;\nstd::string s = (age>=18) ? \"adult\" : \"minor\";",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    int day = 3;", explanation: "Variable representing day of the week (3 = Wednesday)", explanationZh: "表示星期几的变量（3 = 星期三）" },
              { code: "    switch (day) {", explanation: "Start switch — check which case matches \"day\"", explanationZh: "开始 switch — 检查哪个 case 匹配 day" },
              { code: "        case 3: std::cout << \"Wednesday\"; break;", explanation: "day is 3, so this matches! Print and break out", explanationZh: "day 是 3，匹配！打印并跳出" },
              { code: "        default: std::cout << \"Other day\"; break;", explanation: "Fallback if no case matches (not reached here)", explanationZh: "没有匹配时的默认选项（这里不会执行）" },
              { code: "    }", explanation: "Close switch block", explanationZh: "关闭 switch 代码块" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📝",
      content: `# switch in Action · switch实战

🎯 **What you'll learn · 你将学到:**
- The \`switch\` statement — C++ exclusive!
- \`case\`, \`break\`, and \`default\` keywords
- When to use \`switch\` vs \`if/else\`

\`switch\` is like a **vending machine** 🎰 — you put in a value, and it jumps directly to the matching case!

🔑 **Key things to notice · 注意要点:**
- \`switch\` only works with integers and characters (not strings!)
- Each \`case\` needs a \`break;\` or it "falls through"
- \`default:\` = the "else" of switch
- Python has no \`switch\` — uses \`if/elif\` or \`match\` (3.10+)

👀 Try removing a \`break;\` — see what "fall-through" does!`,
      code: `#include <iostream>
using namespace std;

int main() {
    int day;
    cout << "Enter day number (1-7): ";
    cin >> day;
    
    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        case 6:
            cout << "Saturday " << endl;
            break;
        case 7:
            cout << "Sunday " << endl;
            break;
        default:
            cout << "Invalid day!" << endl;
            break;
    }
    
    // With fall-through (intentional):
    cout << "\\nIs it a weekday or weekend?" << endl;
    switch (day) {
        case 1: case 2: case 3: case 4: case 5:
            cout << "Weekday" << endl;
            break;
        case 6: case 7:
            cout << "Weekend!" << endl;
            break;
        default:
            cout << "Invalid" << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "⚠️",
      content: `# Don't Forget break! · 别忘了break！

The \`break\` statement is CRITICAL in switch. Without it, execution "falls through" to the next case!

\`\`\`cpp
switch (x) {
    case 1:
        cout << "One" << endl;
        // No break! Falls through to case 2!
    case 2:
        cout << "Two" << endl;
        break;
}
// If x is 1, this prints BOTH "One" AND "Two"!
\`\`\`

⚡ **Volt says:** "Always include \`break\` unless you intentionally want fall-through. It's one of the most common bugs in C++!"`,
    },
    {
      type: "code",
      emoji: "❓",
      content: `# Ternary Operator · 三元运算符

🎯 **What you'll learn · 你将学到:**
- One-line if/else with \`condition ? valueA : valueB\`
- Comparing to Python's \`valueA if condition else valueB\`
- When to use ternary vs regular if/else

The ternary operator is a **mini if/else** in one line ❓ — great for simple choices!

🔑 **Key things to notice · 注意要点:**
- Syntax: \`condition ? if_true : if_false\`
- Python: \`if_true if condition else if_false\` (different order!)
- Perfect for simple assignments
- Don't nest ternaries — it becomes unreadable! 🤯

👀 Compare the C++ and Python ternary syntax — notice the different word order!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int x = 7;
    
    // Ternary: condition ? value_if_true : value_if_false
    string result = (x % 2 == 0) ? "Even" : "Odd";
    cout << x << " is " << result << endl;
    
    // Use directly in cout
    int age = 16;
    cout << "You are " << (age >= 18 ? "an adult" : "a minor") << endl;
    
    // Nested ternary (use sparingly!)
    int score = 85;
    string grade = (score >= 90) ? "A" :
                   (score >= 80) ? "B" :
                   (score >= 70) ? "C" : "F";
    cout << "Grade: " << grade << endl;
    
    // Useful for min/max
    int a = 10, b = 20;
    int smaller = (a < b) ? a : b;
    cout << "Smaller: " << smaller << endl;
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Write a simple calculator using switch on the operator character.`,
      exercise: {
        prompt: "Calculator using switch statement",
        promptZh: "用switch语句写计算器",
        starterCode: `#include <iostream>
using namespace std;

int main() {
    double a, b;
    char op;
    cin >> a >> op >> b;
    
    // Use switch on op to calculate and print result
    
    
    return 0;
}`,
        expectedOutput: "Result: 8",
        hint: "switch(op) { case '+': ... break; case '-': ... }",
        hintZh: "switch(op) { case '+': ... break; case '-': ... }",
        solution: `#include <iostream>
using namespace std;

int main() {
    double a, b;
    char op;
    cin >> a >> op >> b;
    
    switch (op) {
        case '+': cout << "Result: " << a + b << endl; break;
        case '-': cout << "Result: " << a - b << endl; break;
        case '*': cout << "Result: " << a * b << endl; break;
        case '/': cout << "Result: " << a / b << endl; break;
        default: cout << "Unknown operator" << endl;
    }
    
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What happens if you forget `break` in a switch case?\n如果在switch的case中忘了break会怎样？",
          options: ["Compilation error · 编译错误", "Only that case runs · 只运行那个case", "Program crashes · 程序崩溃", "Falls through to next case(s) · 继续执行下一个case"],
          correctIndex: 3,
          explanation: "Without break, execution 'falls through' and continues into the next case(s). This is a common source of bugs! · 没有break会继续执行下一个case。",
        },
        {
                  "question": "What happens if you forget `break;` in a switch case?\n如果switch中忘记break会怎样？",
                  "options": [
                            "Compilation error · 编译错误",
                            "Only that case runs · 只运行该case",
                            "It falls through to the next case · 会继续执行下一个case",
                            "The program crashes · 程序崩溃"
                  ],
                  "correctIndex": 2,
                  "explanation": "Without break, execution 'falls through' to the next case. This is a common bug! · 没有break会穿透到下一个case。"
        },
        {
                  "question": "What does the ternary operator `a ? b : c` do?\n三元运算符 `a ? b : c` 做什么？",
                  "options": [
                            "Adds a, b, and c · 将a、b、c相加",
                            "If a is true, returns b; otherwise returns c · 如果a为真返回b，否则返回c",
                            "Compares all three values · 比较三个值",
                            "Creates three variables · 创建三个变量"
                  ],
                  "correctIndex": 1,
                  "explanation": "condition ? valueIfTrue : valueIfFalse — it's a shorthand for simple if/else! · 条件?真值:假值，是if/else的简写。"
        },
        {
                  "question": "Which types can switch operate on in C++?\nC++中switch能操作哪些类型？",
                  "options": [
                            "Any type · 任何类型",
                            "Only int and char (integral types) · 只有int和char（整数类型）",
                            "Only strings · 只有字符串",
                            "Only bool · 只有布尔"
                  ],
                  "correctIndex": 1,
                  "explanation": "switch works with integral types (int, char, enum). You cannot switch on strings in C++! · switch只能用于整数类型。"
        },
        {
                  "question": "What does `default:` do in a switch?\nswitch中的default做什么？",
                  "options": [
                            "Runs first · 最先运行",
                            "Runs when no case matches · 没有case匹配时运行",
                            "Resets the variable · 重置变量",
                            "Causes an error · 导致错误"
                  ],
                  "correctIndex": 1,
                  "explanation": "default is like the else in an if/else chain — it handles all unmatched cases. · default像else，处理所有未匹配的情况。"
        },
        {
                  "type": "coding",
                  "question": "Use the ternary operator to print 'adult' if age >= 18, else 'minor'.\n用三元运算符判断成年或未成年。",
                  "prompt": "Read age, use ternary to print 'adult' or 'minor'",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int age;\n    cin >> age;\n    // Use ternary operator\n    \n    return 0;\n}",
                  "expectedOutput": "adult",
                  "hint": "cout << (age >= 18 ? \"adult\" : \"minor\") << endl; · 使用三元运算符",
                  "explanation": "The ternary operator is a concise way to choose between two values based on a condition. · 三元运算符简洁地根据条件选值。"
        },
        {
                  "type": "coding",
                  "question": "Write a switch statement that prints the day name for numbers 1-7.\n用switch语句根据数字1-7打印星期名。",
                  "prompt": "Read day number (1=Monday), print day name. Print 'Invalid' for other numbers.",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int day;\n    cin >> day;\n    // Use switch to print day name\n    \n    return 0;\n}",
                  "expectedOutput": "Monday",
                  "hint": "switch(day) { case 1: cout << \"Monday\"; break; ... } · 用switch/case/break",
                  "explanation": "Switch maps each case value to an action. Don't forget break after each case! · switch将每个case映射到操作，别忘break！"
        },
      ],
    },
  ],
};

const cpp_2_3: Lesson = {
  id: "cpp-2-3",
  moduleId: "cpp-2",
  title: "Loops: for, while, do-while",
  subtitle: "All three C++ loop types · C++的三种循环",
  icon: "🔁",
  xp: 150,
  duration: "25 min",
  order: 9,
  gradeRange: [9, 12],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      type: "text",
      emoji: "🔁",
      content: `# Loops: Python vs C++ · 循环对比

## The for loop is VERY different in C++!

### 🐍 Python for loop:
\`\`\`python
for i in range(5):     # 0, 1, 2, 3, 4
    print(i)
for i in range(1, 11): # 1, 2, ..., 10
    print(i)
\`\`\`

### ⚡ C++ for loop:
\`\`\`cpp
for (int i = 0; i < 5; i++) {   // 0, 1, 2, 3, 4
    cout << i << endl;
}
for (int i = 1; i <= 10; i++) {  // 1, 2, ..., 10
    cout << i << endl;
}
\`\`\`

### C++ for loop anatomy:
\`\`\`
for (initialization; condition; update) {
    // body
}
\`\`\`
- **initialization**: runs once at the start (\`int i = 0\`)
- **condition**: checked before each iteration (\`i < 5\`)
- **update**: runs after each iteration (\`i++\`)`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Loops",
      concept: {
        title: "🧰 New Syntax: Loops",
        titleZh: "新语法：循环",
        syntaxCards: [
            {
              symbol: "for (init; cond; step) { }",
              name: "For loop",
              nameZh: "For 循环",
              emoji: "🔁",
              description: "A counting machine 🔁! init = start value, cond = keep going?, step = how to count. All in one line!",
              example: "for (int i = 0; i < 5; i++) {\n    std::cout << i << \" \";\n}\n// Output: 0 1 2 3 4",
            },
            {
              symbol: "while (condition) { }",
              name: "While loop",
              nameZh: "While 循环",
              emoji: "🔄",
              description: "Keep spinning 🔄 as long as the condition is true! Check first, then run. Like Python's while loop.",
              example: "int i = 0;\nwhile (i < 5) {\n    std::cout << i;\n    i++;\n}",
            },
            {
              symbol: "do { } while (cond);",
              name: "Do-while loop",
              nameZh: "Do-while 循环",
              emoji: "🎯",
              description: "Fire first, ask questions later 🎯! Runs the body at LEAST once, then checks the condition. Python doesn't have this!",
              example: "int x;\ndo {\n    std::cin >> x;\n} while (x <= 0);",
            },
            {
              symbol: "break",
              name: "Break out of loop",
              nameZh: "跳出循环",
              emoji: "🛑",
              description: "Emergency exit 🛑! Immediately stops the loop and jumps to the code after it.",
              example: "for (int i = 0; i < 100; i++) {\n    if (i == 5) break;\n}\n// stops at i=5",
            },
            {
              symbol: "continue",
              name: "Skip to next iteration",
              nameZh: "跳过当前轮",
              emoji: "⏭️",
              description: "Skip button ⏭️! Skips the rest of the current loop body and jumps to the next iteration.",
              example: "for (int i = 0; i < 5; i++) {\n    if (i == 2) continue;\n    std::cout << i;\n}\n// Output: 0134",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    for (int i = 1; i <= 5; i++) {", explanation: "Loop from 1 to 5: start at 1, go while <=5, add 1 each time", explanationZh: "从 1 循环到 5：从1开始，<=5 时继续，每次加1" },
              { code: "        std::cout << i << \" \";", explanation: "Print current number followed by a space", explanationZh: "打印当前数字，后面加一个空格" },
              { code: "    }", explanation: "End of for loop body", explanationZh: "for 循环体结束" },
              { code: "    return 0;", explanation: "Program ends successfully", explanationZh: "程序成功结束" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🔄",
      content: `# for Loop Examples · for循环示例

🎯 **What you'll learn · 你将学到:**
- C++ for loop: \`for (init; condition; update)\`
- Three parts give you complete control
- Counting up, down, by 2s, and more

C++ for loops are like a **treadmill with controls** 🏃 — you set the start speed, when to stop, and how fast to accelerate!

🔑 **Key things to notice · 注意要点:**
- Three parts: \`(initialization; condition; increment)\`
- Python \`for i in range(5)\` → C++ \`for (int i = 0; i < 5; i++)\`
- Count backwards: \`for (int i = 10; i > 0; i--)\`
- Skip: \`for (int i = 0; i < 100; i += 2)\`

👀 Try different start values, conditions, and step sizes!`,
      code: `#include <iostream>
using namespace std;

int main() {
    // Count up
    cout << "Count 1-5: ";
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // Count down
    cout << "Countdown: ";
    for (int i = 5; i >= 1; i--) {
        cout << i << " ";
    }
    cout << endl;
    
    // Step by 2 (Python: range(0, 10, 2))
    cout << "Evens: ";
    for (int i = 0; i <= 10; i += 2) {
        cout << i << " ";
    }
    cout << endl;
    
    // Sum of numbers
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    cout << "Sum 1-100 = " << sum << endl;
    
    // Range-based for loop (C++11) -- closest to Python!
    // Python: for c in "Hello":
    string word = "Hello";
    cout << "Characters: ";
    for (char c : word) {
        cout << c << " ";
    }
    cout << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "⏳",
      content: `# while and do-while · while和do-while循环

🎯 **What you'll learn · 你将学到:**
- \`while\` loops work the same as Python
- \`do-while\` is C++ exclusive — runs at least once!
- Choosing between \`for\`, \`while\`, and \`do-while\`

\`while\` is like a **cautious guard** 🛡️ — checks before entering. \`do-while\` is like a **rollercoaster** 🎢 — you ride at least once, THEN it asks again!

🔑 **Key things to notice · 注意要点:**
- \`while\`: check FIRST, then run (same as Python)
- \`do-while\`: run FIRST, then check (no Python equivalent!)
- \`do-while\` is perfect for menus
- Don't forget the semicolon after \`while(condition);\` in do-while!

👀 Compare while vs do-while — when would you choose each?`,
      code: `#include <iostream>
using namespace std;

int main() {
    // while loop (same concept as Python!)
    // Python: while x > 0:    C++: while (x > 0) {
    int x = 5;
    cout << "while loop: ";
    while (x > 0) {
        cout << x << " ";
        x--;
    }
    cout << endl;  // 5 4 3 2 1
    
    // do-while loop (C++ EXCLUSIVE -- Python doesn't have this!)
    // Runs the body AT LEAST ONCE before checking condition
    int guess;
    cout << "\\nGuess the number (hint: it's 7): ";
    do {
        cin >> guess;
        if (guess != 7) {
            cout << "Wrong! Try again: ";
        }
    } while (guess != 7);
    cout << "Correct!" << endl;
    
    // When to use each:
    // for -> know how many iterations
    // while -> don't know when to stop, check BEFORE
    // do-while -> want to run at least once, check AFTER
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Print the multiplication table for a given number (1-10).`,
      exercise: {
        prompt: "Print multiplication table",
        promptZh: "打印乘法表",
        starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    // Print n x 1 = ?, n x 2 = ?, ..., n x 10 = ?
    
    
    return 0;
}`,
        expectedOutput: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
        hint: "Use a for loop from 1 to 10: cout << n << \" x \" << i << \" = \" << n*i",
        hintZh: "用for循环从1到10",
        solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << i << " = " << n * i << endl;
    }
    
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What's the C++ equivalent of `for i in range(5):`?\n`for i in range(5):`的C++等价是？",
          options: ["`for (int i = 0; i <= 5; i++)`", "`for (int i = 0; i < 5; i++)`", "`for i in range(5)`", "`for (int i = 1; i <= 5; i++)`"],
          correctIndex: 1,
          explanation: "range(5) gives 0,1,2,3,4. In C++: start at 0, go while < 5, increment by 1. · range(5)产生0到4，C++中从0开始，条件<5。",
        },
        {
          question: "What's special about do-while?\ndo-while有什么特别的？",
          options: ["It runs at least once · 至少执行一次", "It's the same as while · 和while一样", "It runs backwards · 反向执行", "It's faster · 更快"],
          correctIndex: 0,
          explanation: "do-while checks the condition AFTER running the body, so it always runs at least once. · do-while先执行再检查条件，所以至少执行一次。",
        },
        {
                  "question": "What are the 3 parts of a C++ for loop?\nC++ for循环的3个部分是什么？",
                  "options": [
                            "start, stop, step",
                            "init; condition; update (e.g., int i=0; i<n; i++)",
                            "begin, end, next",
                            "for, in, range"
                  ],
                  "correctIndex": 1,
                  "explanation": "C++ for loop: for(init; condition; update). Python's range(start,stop,step) maps to this! · for(初始化;条件;更新)。"
        },
        {
                  "question": "What does `do { } while(condition);` guarantee?\ndo-while循环保证什么？",
                  "options": [
                            "Runs exactly twice · 运行两次",
                            "Never runs · 从不运行",
                            "Runs at least once · 至少运行一次",
                            "Runs forever · 永远运行"
                  ],
                  "correctIndex": 2,
                  "explanation": "do-while checks the condition AFTER running the body, so it always executes at least once. · do-while先执行再判断。"
        },
        {
                  "question": "How do you write Python's `for i in range(10):` in C++?\n如何用C++写Python的for i in range(10)?",
                  "options": [
                            "for i in range(10)",
                            "for(int i=0; i<10; i++)",
                            "for(i, 10)",
                            "loop(10)"
                  ],
                  "correctIndex": 1,
                  "explanation": "for(int i=0; i<10; i++) is the C++ equivalent of range(10). · for(int i=0;i<10;i++)等价于range(10)。"
        },
        {
                  "question": "What does `break;` do inside a loop?\nbreak在循环中做什么？",
                  "options": [
                            "Skips to next iteration · 跳到下一次迭代",
                            "Exits the loop immediately · 立即退出循环",
                            "Pauses the program · 暂停程序",
                            "Restarts the loop · 重启循环"
                  ],
                  "correctIndex": 1,
                  "explanation": "break immediately exits the innermost loop. continue skips to the next iteration. · break退出循环，continue跳过当前迭代。"
        },
        {
                  "type": "coding",
                  "question": "Print numbers from 1 to 5 using a for loop.\n用for循环打印1到5。",
                  "prompt": "Print 1 2 3 4 5 each on a new line",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Use a for loop to print 1 to 5\n    \n    return 0;\n}",
                  "expectedOutput": "1\n2\n3\n4\n5",
                  "hint": "for(int i = 1; i <= 5; i++) { cout << i << endl; } · for循环从1到5",
                  "explanation": "for(int i=1; i<=5; i++) loops from 1 to 5 inclusive. · for循环从1循环到5。"
        },
        {
                  "type": "coding",
                  "question": "Calculate the sum of numbers from 1 to n using a while loop.\n用while循环计算1到n的和。",
                  "prompt": "Read n, print the sum of 1+2+...+n",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // Calculate sum using while loop\n    \n    return 0;\n}",
                  "expectedOutput": "55",
                  "hint": "int sum=0, i=1; while(i<=n) { sum+=i; i++; } · 用while循环累加",
                  "explanation": "Use a while loop with a counter and accumulator. Sum of 1 to 10 = 55. · 用while循环和累加器。"
        },
      ],
    },
  ],
};

const cpp_2_4: Lesson = {
  id: "cpp-2-4",
  moduleId: "cpp-2",
  title: "Loop Challenges",
  subtitle: "Nested loops, break, continue · 嵌套循环和控制",
  icon: "🎯",
  xp: 200,
  duration: "25 min",
  order: 10,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "code",
      emoji: "🔲",
      content: `# Nested Loops · 嵌套循环

🎯 **What you'll learn · 你将学到:**
- Loops inside loops for 2D patterns
- How the inner loop completes for each outer iteration
- Building grids, triangles, and patterns

Nested loops are like a **clock** ⏰ — the minute hand (inner) goes around 60 times for every tick of the hour hand (outer)!

🔑 **Key things to notice · 注意要点:**
- Outer loop = rows, inner loop = columns
- Total iterations = outer × inner
- Use \`i\` for outer, \`j\` for inner (convention)
- \`endl\` after inner loop = move to next row

👀 Trace through manually — draw what each iteration prints!`,
      code: `#include <iostream>
using namespace std;

int main() {
    // Rectangle pattern
    cout << "=== Rectangle ===" << endl;
    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 5; col++) {
            cout << "* ";
        }
        cout << endl;
    }
    
    // Right triangle
    cout << "\\n=== Triangle ===" << endl;
    for (int i = 1; i <= 5; i++) {
        for (int j = 0; j < i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    
    // Multiplication table
    cout << "\\n=== 5x5 Table ===" << endl;
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            cout << i * j << "\\t";
        }
        cout << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Nested Loops",
      concept: {
        title: "🧰 New Syntax: Nested Loops",
        titleZh: "新语法：嵌套循环",
        syntaxCards: [
            {
              symbol: "for inside for",
              name: "Nested for loops",
              nameZh: "嵌套 for 循环",
              emoji: "🎯",
              description: "A loop inside a loop 🎯! The inner loop runs COMPLETELY for each step of the outer loop. Like a clock: minutes inside hours.",
              example: "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        std::cout << i << j << \" \";\n    }\n}",
            },
            {
              symbol: "std::setw(n)",
              name: "Set output width",
              nameZh: "设置输出宽度",
              emoji: "📐",
              description: "Make columns line up 📐 perfectly! setw(n) pads the next output to be n characters wide. Great for tables and patterns.",
              example: "#include <iomanip>\nstd::cout << std::setw(5) << 42;\n// Output: \"   42\"",
            },
            {
              symbol: "i * j pattern",
              name: "Pattern with loop variables",
              nameZh: "用循环变量做图案",
              emoji: "🎨",
              description: "Combine outer (i) and inner (j) loop variables 🎨 to create patterns — multiplication tables, triangles, grids!",
              example: "for (int i = 1; i <= 3; i++)\n    for (int j = 1; j <= i; j++)\n        std::cout << \"* \";",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    for (int i = 1; i <= 3; i++) {", explanation: "Outer loop: rows 1 to 3", explanationZh: "外层循环：第1到第3行" },
              { code: "        for (int j = 1; j <= i; j++) {", explanation: "Inner loop: columns 1 to i (grows each row!)", explanationZh: "内层循环：第1到第i列（每行增长！）" },
              { code: "            std::cout << \"* \";", explanation: "Print a star and space", explanationZh: "打印一个星号和空格" },
              { code: "        }", explanation: "End inner loop — done with this row's stars", explanationZh: "内层循环结束 — 这行的星号打完了" },
              { code: "        std::cout << std::endl;", explanation: "New line after each row", explanationZh: "每行结束后换行" },
              { code: "    }", explanation: "End outer loop", explanationZh: "外层循环结束" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "⏹️",
      content: `# break and continue · break和continue

🎯 **What you'll learn · 你将学到:**
- \`break\` exits the loop entirely
- \`continue\` skips to the next iteration
- Same concepts as Python, same keywords!

\`break\` is the **emergency exit** 🚪 — leave completely. \`continue\` is like **skipping a song** ⏭️ — skip this round but keep going!

🔑 **Key things to notice · 注意要点:**
- \`break\` = stop the loop RIGHT NOW
- \`continue\` = skip rest of this iteration, go to next
- Works exactly like Python's \`break\` and \`continue\`
- In nested loops, they only affect the innermost loop

👀 Trace the output carefully — break and continue change the flow!`,
      code: `#include <iostream>
using namespace std;

int main() {
    // break -- exit the loop entirely
    cout << "Finding first multiple of 7 after 50:" << endl;
    for (int i = 51; ; i++) {  // infinite loop!
        if (i % 7 == 0) {
            cout << "Found: " << i << endl;
            break;  // Exit the loop
        }
    }
    
    // continue -- skip to next iteration
    cout << "\\nOdd numbers 1-10: ";
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) continue;  // Skip even numbers
        cout << i << " ";
    }
    cout << endl;
    
    // break only affects the INNERMOST loop
    cout << "\\nBreaking inner loop:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 5; j++) {
            if (j == 3) break;  // Only breaks inner loop!
            cout << "(" << i << "," << j << ") ";
        }
        cout << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Pattern Challenge · 图案挑战

Print this number triangle:
\`\`\`
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
\`\`\``,
      exercise: {
        prompt: "Print a number triangle pattern",
        promptZh: "打印数字三角形",
        starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    // Print the number triangle
    
    
    return 0;
}`,
        expectedOutput: "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
        hint: "Outer loop for rows (1 to n), inner loop for numbers (1 to row)",
        hintZh: "外层循环控制行(1到n)，内层循环控制数字(1到当前行)",
        solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j;
            if (j < i) cout << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
      },
    },
    {
      type: "code",
      emoji: "🏆",
      content: `# Classic Loop Patterns · 经典循环模式

🎯 **What you'll learn · 你将学到:**
- Diamond, pyramid, and number patterns
- These appear in coding interviews and competitions!
- Building complex patterns from simple loop logic

Loop patterns are the **gym workout** 💪 for your programming brain — they build muscle memory for nested loops!

🔑 **Key things to notice · 注意要点:**
- Each pattern uses nested loops with different conditions
- Spaces are just as important as stars for alignment
- Work out the math: how many spaces? how many stars?
- Common in AP CS and coding competitions

👀 Try to understand the math behind each pattern before running!`,
      code: `#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    // Diamond pattern
    cout << "=== Diamond ===" << endl;
    // Top half
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < n - i; j++) cout << " ";
        for (int j = 0; j < 2*i - 1; j++) cout << "*";
        cout << endl;
    }
    // Bottom half
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 0; j < n - i; j++) cout << " ";
        for (int j = 0; j < 2*i - 1; j++) cout << "*";
        cout << endl;
    }
    
    // Prime number check
    cout << "\\n=== Primes up to 30 ===" << endl;
    for (int num = 2; num <= 30; num++) {
        bool isPrime = true;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "In nested loops, which loop does `break` exit?\n在嵌套循环中，`break`退出哪个循环？",
          options: ["The outermost loop · 最外层循环", "Random · 随机", "All loops · 所有循环", "The innermost loop · 最内层循环"],
          correctIndex: 3,
          explanation: "break only exits the innermost loop that contains it. To exit outer loops, you need flags or goto (avoid goto!). · break只退出包含它的最内层循环。",
        },
        {
                  "question": "What does `continue;` do in a loop?\ncontinue在循环中做什么？",
                  "options": [
                            "Exits the loop · 退出循环",
                            "Skips to the next iteration · 跳到下一次迭代",
                            "Pauses execution · 暂停执行",
                            "Continues to the next function · 继续到下一个函数"
                  ],
                  "correctIndex": 1,
                  "explanation": "continue skips the rest of the current iteration and jumps to the next one. · continue跳过当前迭代的剩余部分。"
        },
        {
                  "question": "How do you create an infinite loop in C++?\n如何创建无限循环？",
                  "options": [
                            "for(;;)",
                            "while(true)",
                            "Both a and b work · a和b都可以",
                            "loop(forever)"
                  ],
                  "correctIndex": 2,
                  "explanation": "Both for(;;) and while(true) create infinite loops. Use break to exit! · for(;;)和while(true)都能创建无限循环。"
        },
        {
                  "question": "What's a nested loop?\n什么是嵌套循环？",
                  "options": [
                            "A loop that never ends · 永远不结束的循环",
                            "A loop inside another loop · 循环中的循环",
                            "Two loops side by side · 两个并排的循环",
                            "A loop with no body · 没有循环体的循环"
                  ],
                  "correctIndex": 1,
                  "explanation": "A nested loop is a loop inside another loop. Used for 2D patterns, grids, etc. · 嵌套循环是循环里的循环。"
        },
        {
                  "question": "What does this print? `for(int i=0; i<3; i++) for(int j=0; j<2; j++) cout << \"*\";`\n这段代码打印什么？",
                  "options": [
                            "** · 2 stars",
                            "*** · 3 stars",
                            "***** · 5 stars",
                            "****** · 6 stars"
                  ],
                  "correctIndex": 3,
                  "explanation": "Outer loop runs 3 times, inner loop 2 times each → 3×2 = 6 stars. · 外循环3次×内循环2次=6个星号。"
        },
        {
                  "type": "coding",
                  "question": "Print all even numbers from 2 to 10.\n打印2到10的所有偶数。",
                  "prompt": "Print 2 4 6 8 10, each on a new line",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print even numbers from 2 to 10\n    \n    return 0;\n}",
                  "expectedOutput": "2\n4\n6\n8\n10",
                  "hint": "Use for(int i=2; i<=10; i+=2) or check i%2==0 · 用i+=2或i%2==0",
                  "explanation": "Increment by 2: for(int i=2; i<=10; i+=2). Or use if(i%2==0). · 步长为2或用取余判断。"
        },
        {
                  "type": "coding",
                  "question": "Print a right triangle pattern of stars with n rows.\n打印n行的直角三角形星号图案。",
                  "prompt": "Read n=3, print: *\\n**\\n***",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // Print triangle pattern\n    \n    return 0;\n}",
                  "expectedOutput": "*\n**\n***",
                  "hint": "Use nested loops: outer for rows, inner for stars per row · 嵌套循环：外层行，内层星号",
                  "explanation": "Row i has i stars. Use nested for loops with endl after each row. · 第i行有i个星号，用嵌套循环。"
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE CPP-3: FUNCTIONS & ARRAYS (4 lessons)
// ═══════════════════════════════════════════════════════════════

const cpp_3_1: Lesson = {
  id: "cpp-3-1",
  moduleId: "cpp-3",
  title: "Functions with Types",
  subtitle: "Typed functions and overloading · 类型化函数和重载",
  icon: "🔧",
  xp: 150,
  duration: "25 min",
  order: 11,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔧",
      content: `# Functions: Python vs C++ · 函数对比

## 🐍 Python:
\`\`\`python
def add(a, b):
    return a + b
\`\`\`

## ⚡ C++:
\`\`\`cpp
int add(int a, int b) {
    return a + b;
}
\`\`\`

### Key Differences:
- C++ needs **return type** before function name
- C++ needs **parameter types**
- \`void\` = no return value (like Python returning \`None\`)
- Functions must be **declared before use** (or use forward declaration)`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Functions",
      concept: {
        title: "🧰 New Syntax: Functions",
        titleZh: "新语法：函数",
        syntaxCards: [
            {
              symbol: "void funcName() { }",
              name: "Void function (no return)",
              nameZh: "Void 函数（无返回值）",
              emoji: "📣",
              description: "A function that just DOES something 📣 but doesn't give anything back. Like telling someone to clap — no answer expected.",
              example: "void sayHi() {\n    std::cout << \"Hi!\" << std::endl;\n}",
            },
            {
              symbol: "int funcName() { return x; }",
              name: "Function with return type",
              nameZh: "有返回类型的函数",
              emoji: "🎁",
              description: "A function that gives back a gift 🎁! The return type (int, double, etc.) tells what kind of gift to expect.",
              example: "int add(int a, int b) {\n    return a + b;\n}",
            },
            {
              symbol: "function parameters",
              name: "Parameters (inputs)",
              nameZh: "参数（输入）",
              emoji: "📥",
              description: "The ingredients 📥 your function needs! Each parameter has a TYPE and a name. Separate multiple with commas.",
              example: "double average(double a, double b) {\n    return (a + b) / 2.0;\n}",
            },
            {
              symbol: "function overloading",
              name: "Same name, different params",
              nameZh: "函数重载",
              emoji: "🎭",
              description: "Same function name, different costumes 🎭! C++ picks the right version based on the arguments you pass. Python can't do this!",
              example: "int add(int a, int b) { return a+b; }\ndouble add(double a, double b) { return a+b; }",
            },
            {
              symbol: "default parameters",
              name: "Default parameter values",
              nameZh: "默认参数值",
              emoji: "🏷️",
              description: "Pre-set values 🏷️ for lazy callers! If you don't pass a value, the default kicks in. Must be rightmost parameters.",
              example: "void greet(std::string name = \"World\") {\n    std::cout << \"Hello, \" << name;\n}",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "int add(int a, int b) {", explanation: "Define a function \"add\" that takes two ints and returns an int", explanationZh: "定义函数 add，接受两个 int 参数，返回 int" },
              { code: "    return a + b;", explanation: "Return the sum of a and b", explanationZh: "返回 a 和 b 的和" },
              { code: "}", explanation: "End of function definition", explanationZh: "函数定义结束" },
              { code: "int main() {", explanation: "Main function — execution starts here", explanationZh: "主函数 — 程序从这里开始执行" },
              { code: "    std::cout << add(3, 4) << std::endl;", explanation: "Call add(3,4) → returns 7 → print it", explanationZh: "调用 add(3,4) → 返回 7 → 打印" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📝",
      content: `# Function Examples · 函数示例

🎯 **What you'll learn · 你将学到:**
- Declaring functions with return types and parameters
- \`void\` functions (no return value)
- How C++ functions compare to Python's \`def\`

Functions in C++ are like **vending machines** 🎰 — put in parameters, get a result. But you must specify what TYPE of result comes out!

🔑 **Key things to notice · 注意要点:**
- Return type BEFORE the function name: \`int add(int a, int b)\`
- Python \`def\` → C++ specifies return type
- \`void\` = no return value
- Functions must be declared BEFORE they're called (or use prototypes)

👀 Notice the return types — every function declares what it gives back!`,
      code: `#include <iostream>
#include <string>
using namespace std;

// Function that returns an int
int add(int a, int b) {
    return a + b;
}

// Function that returns a double
double average(double a, double b) {
    return (a + b) / 2.0;
}

// Function that returns a string
string greet(string name) {
    return "Hello, " + name + "!";
}

// void function -- no return value
void printLine(int length) {
    for (int i = 0; i < length; i++) {
        cout << "-";
    }
    cout << endl;
}

// Function with default parameter (like Python!)
void sayHello(string name = "World") {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    cout << add(3, 5) << endl;          // 8
    cout << average(10, 20) << endl;    // 15
    cout << greet("Volt") << endl;      // Hello, Volt!
    printLine(20);                       // --------------------
    sayHello();                          // Hello, World!
    sayHello("Alice");                   // Hello, Alice!
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🔄",
      content: `# Function Overloading — Python CAN'T Do This! · 函数重载

🎯 **What you'll learn · 你将学到:**
- Multiple functions with the SAME name but different parameters
- The compiler picks the right one based on argument types
- This is impossible in Python!

Function overloading is like a **Swiss Army knife** 🔪 — one name, different tools depending on what you give it!

🔑 **Key things to notice · 注意要点:**
- Same function name, different parameter types or count
- Compiler automatically picks the correct version
- Python can't do this — it would overwrite the first function!
- Makes code cleaner: one name for similar operations

👀 Watch how the same function name behaves differently with different arguments!`,
      code: `#include <iostream>
#include <string>
using namespace std;

// Three functions named "print" with different parameter types!
void print(int x) {
    cout << "Integer: " << x << endl;
}

void print(double x) {
    cout << "Double: " << x << endl;
}

void print(string x) {
    cout << "String: " << x << endl;
}

// Different number of parameters also works
int multiply(int a, int b) {
    return a * b;
}

int multiply(int a, int b, int c) {
    return a * b * c;
}

int main() {
    print(42);           // Calls print(int)
    print(3.14);         // Calls print(double)
    print(string("Hi")); // Calls print(string)
    
    cout << multiply(3, 4) << endl;     // 12
    cout << multiply(2, 3, 4) << endl;  // 24
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Write a function \`isPrime\` that returns true if a number is prime.`,
      exercise: {
        prompt: "Write an isPrime function",
        promptZh: "写一个判断素数的函数",
        starterCode: `#include <iostream>
using namespace std;

bool isPrime(int n) {
    // Return true if n is prime, false otherwise
    
}

int main() {
    for (int i = 2; i <= 20; i++) {
        if (isPrime(i)) {
            cout << i << " ";
        }
    }
    cout << endl;
    return 0;
}`,
        expectedOutput: "2 3 5 7 11 13 17 19",
        hint: "Check if n is divisible by any number from 2 to sqrt(n)",
        hintZh: "检查n是否能被2到sqrt(n)之间的数整除",
        solution: `#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    for (int i = 2; i <= 20; i++) {
        if (isPrime(i)) {
            cout << i << " ";
        }
    }
    cout << endl;
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What does `void` mean as a return type?\n`void`作为返回类型是什么意思？",
          options: ["Error · 错误", "Returns null · 返回null", "Returns nothing · 不返回任何值", "Returns zero · 返回零"],
          correctIndex: 2,
          explanation: "void means the function doesn't return any value. Like a Python function that doesn't have a return statement. · void表示函数不返回任何值。",
        },
        {
                  "question": "What must a C++ function declaration include that Python doesn't require?\nC++函数声明需要什么Python不需要的？",
                  "options": [
                            "Function name · 函数名",
                            "Return type and parameter types · 返回类型和参数类型",
                            "The word 'def' · def关键字",
                            "Indentation · 缩进"
                  ],
                  "correctIndex": 1,
                  "explanation": "C++ needs explicit return type and parameter types: int add(int a, int b). Python just uses def. · C++需要显式返回类型和参数类型。"
        },
        {
                  "question": "What does `void` mean as a return type?\nvoid作为返回类型是什么意思？",
                  "options": [
                            "Returns 0 · 返回0",
                            "Returns nothing · 不返回任何值",
                            "Returns a string · 返回字符串",
                            "Error · 报错"
                  ],
                  "correctIndex": 1,
                  "explanation": "void means the function doesn't return a value. Like Python functions without return. · void表示函数不返回值。"
        },
        {
                  "question": "Where must a function be defined relative to where it's called?\n函数必须在调用之前定义在哪里？",
                  "options": [
                            "After main() · 在main()之后",
                            "Before it's called, or use a forward declaration · 在调用之前，或使用前向声明",
                            "In a different file · 在不同文件中",
                            "Anywhere · 任何位置"
                  ],
                  "correctIndex": 1,
                  "explanation": "Functions must be declared before use. You can use a prototype (forward declaration) above main(). · 函数必须在使用前声明。"
        },
        {
                  "question": "What is function overloading?\n什么是函数重载？",
                  "options": [
                            "Calling a function too many times · 调用函数太多次",
                            "Multiple functions with the same name but different parameters · 同名但参数不同的多个函数",
                            "A function that's too long · 太长的函数",
                            "An error · 错误"
                  ],
                  "correctIndex": 1,
                  "explanation": "C++ allows multiple functions with the same name if they have different parameter types/counts. Python can't do this! · C++允许同名不同参数的函数。"
        },
        {
                  "type": "coding",
                  "question": "Write a function that returns the larger of two integers.\n写一个返回两个整数中较大值的函数。",
                  "prompt": "Write function int maxOf(int a, int b) and call it from main",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write your maxOf function here\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << maxOf(a, b) << endl;\n    return 0;\n}",
                  "expectedOutput": "7",
                  "hint": "int maxOf(int a, int b) { return (a > b) ? a : b; } · 用三元运算符或if/else",
                  "explanation": "Define return type, parameter types, and use return to send back the value. · 定义返回类型和参数类型，用return返回值。"
        },
        {
                  "type": "coding",
                  "question": "Write a function that checks if a number is prime.\n写一个判断质数的函数。",
                  "prompt": "Write bool isPrime(int n), print 'yes' or 'no'",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write isPrime function here\n\nint main() {\n    int n;\n    cin >> n;\n    cout << (isPrime(n) ? \"yes\" : \"no\") << endl;\n    return 0;\n}",
                  "expectedOutput": "yes",
                  "hint": "Check if any number from 2 to sqrt(n) divides n · 检查2到sqrt(n)是否能整除n",
                  "explanation": "Loop from 2 to sqrt(n). If any divides n evenly, it's not prime. · 从2循环到sqrt(n)，如果能整除则不是质数。"
        },
      ],
    },
  ],
};

const cpp_3_2: Lesson = {
  id: "cpp-3-2",
  moduleId: "cpp-3",
  title: "Pass by Value vs Reference",
  subtitle: "The & operator explained · 引用传递详解",
  icon: "🔗",
  xp: 150,
  duration: "25 min",
  order: 12,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔗",
      content: `# How Are Parameters Passed? · 参数如何传递？

⚡ **Volt says:** "This is one of the MOST IMPORTANT concepts in C++. Understanding pass-by-value vs pass-by-reference will save you from countless bugs!"

## Pass by Value (default):

- A **COPY** of the variable is made

- Changes inside the function don't affect the original

- Like giving someone a photocopy of a document

## Pass by Reference (&):

- The function gets the **ORIGINAL** variable (via reference)

- Changes inside the function DO affect the original

- Like giving someone the actual document`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Arrays",
      concept: {
        title: "🧰 New Syntax: Arrays",
        titleZh: "新语法：数组",
        syntaxCards: [
            {
              symbol: "int arr[5]",
              name: "Declare a fixed-size array",
              nameZh: "声明固定大小数组",
              emoji: "📦",
              description: "A row of labeled boxes 📦! You decide the size upfront and can't change it later. Like a row of lockers at school.",
              example: "int scores[5] = {90, 85, 77, 92, 88};",
            },
            {
              symbol: "arr[i]",
              name: "Access element by index",
              nameZh: "通过索引访问元素",
              emoji: "👆",
              description: "Point 👆 to a specific box! Index starts at 0 (not 1!). arr[0] is the first element, arr[4] is the fifth.",
              example: "int first = scores[0];  // 90\nscores[2] = 100; // change 3rd element",
            },
            {
              symbol: "sizeof(arr)/sizeof(arr[0])",
              name: "Get array length",
              nameZh: "获取数组长度",
              emoji: "📏",
              description: "C++ arrays don't know their own size 😱! sizeof gives bytes, so divide by one element's size to get count.",
              example: "int arr[5] = {1,2,3,4,5};\nint len = sizeof(arr)/sizeof(arr[0]);\n// len = 5",
            },
            {
              symbol: "void func(int arr[], int n)",
              name: "Pass array to function",
              nameZh: "把数组传给函数",
              emoji: "📤",
              description: "Arrays are passed by reference automatically 📤! You must also pass the size since the function can't figure it out.",
              example: "void print(int arr[], int n) {\n    for(int i=0; i<n; i++)\n        std::cout << arr[i];\n}",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    int nums[5] = {10, 20, 30, 40, 50};", explanation: "Create an array of 5 integers with initial values", explanationZh: "创建一个有5个整数的数组并初始化" },
              { code: "    int len = sizeof(nums)/sizeof(nums[0]);", explanation: "Calculate array length: total bytes / one element bytes", explanationZh: "计算数组长度：总字节数 / 单个元素字节数" },
              { code: "    for (int i = 0; i < len; i++) {", explanation: "Loop through each index from 0 to len-1", explanationZh: "从索引 0 循环到 len-1" },
              { code: "        std::cout << nums[i] << \" \";", explanation: "Print each element followed by a space", explanationZh: "打印每个元素，后面加空格" },
              { code: "    }", explanation: "End of for loop", explanationZh: "for 循环结束" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📝",
      content: `# Value vs Reference Demo · 值传递 vs 引用传递

🎯 **What you'll learn · 你将学到:**
- Pass by value: function gets a COPY (original unchanged)
- Pass by reference (\`&\`): function gets the ORIGINAL
- C++'s most important function concept!

Pass by value = giving a **photocopy** 📄 (original safe). Pass by reference = giving your **actual document** 📋 (changes affect your copy)!

🔑 **Key things to notice · 注意要点:**
- By value: \`void func(int x)\` — copy, original unchanged
- By reference: \`void func(int& x)\` — the \`&\` means "actual variable"
- Use reference when you WANT to modify the original

👀 Compare the output — see how \`&\` modifies the original!`,
      code: `#include <iostream>
using namespace std;

// Pass by VALUE -- gets a COPY
void doubleValue(int x) {
    x = x * 2;
    cout << "Inside function: x = " << x << endl;
}

// Pass by REFERENCE -- gets the ORIGINAL
void doubleReference(int &x) {  // Note the &
    x = x * 2;
    cout << "Inside function: x = " << x << endl;
}

// Classic example: swap function
void swapValues(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int num = 10;
    
    cout << "=== Pass by Value ===" << endl;
    cout << "Before: " << num << endl;
    doubleValue(num);
    cout << "After: " << num << endl;  // Still 10!
    
    cout << "\\n=== Pass by Reference ===" << endl;
    cout << "Before: " << num << endl;
    doubleReference(num);
    cout << "After: " << num << endl;  // Now 20!
    
    cout << "\\n=== Swap ===" << endl;
    int a = 5, b = 10;
    cout << "Before: a=" << a << " b=" << b << endl;
    swapValues(a, b);
    cout << "After: a=" << a << " b=" << b << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🛡️",
      content: `# const Reference — Read-Only Access · const引用

🎯 **What you'll learn · 你将学到:**
- \`const &\` = pass by reference but READ ONLY
- Best practice for passing large objects
- The "best of both worlds" parameter style

\`const &\` is like a **museum display** 🏛️ — you can look at the original (efficient!) but can't touch it (safe!)

🔑 **Key things to notice · 注意要点:**
- \`const string& s\` = efficient (no copy) + safe (can't modify)
- Use for strings, vectors, and other large objects
- Trying to modify a \`const &\` = compiler error!
- This is the #1 best practice for C++ function parameters

👀 Notice how const reference prevents accidental modifications!`,
      code: `#include <iostream>
#include <string>
using namespace std;

// const reference: can read but NOT modify
void printInfo(const string &name, const int &age) {
    cout << name << " is " << age << " years old" << endl;
    // name = "test";  // ERROR! Can't modify const reference
}

// Why use const &?
// 1. Passing by value copies the string (slow for large strings)
// 2. Passing by reference allows modification (might not want that)
// 3. const & = fast (no copy) + safe (can't modify)

// Return multiple values via reference
void getMinMax(int a, int b, int c, int &minVal, int &maxVal) {
    minVal = min({a, b, c});
    maxVal = max({a, b, c});
}

int main() {
    printInfo("Alice", 16);
    
    int lo, hi;
    getMinMax(5, 2, 8, lo, hi);
    cout << "Min: " << lo << ", Max: " << hi << endl;
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Write a function that takes two integers by reference and sorts them so the smaller comes first.`,
      exercise: {
        prompt: "Sort two numbers using pass by reference",
        promptZh: "用引用传递排序两个数",
        starterCode: `#include <iostream>
using namespace std;

void sortPair(int &a, int &b) {
    // Make sure a <= b
    
}

int main() {
    int x, y;
    cin >> x >> y;
    sortPair(x, y);
    cout << x << " " << y << endl;
    return 0;
}`,
        expectedOutput: "3 7",
        hint: "If a > b, swap them!",
        hintZh: "如果a > b就交换它们！",
        solution: `#include <iostream>
using namespace std;

void sortPair(int &a, int &b) {
    if (a > b) {
        int temp = a;
        a = b;
        b = temp;
    }
}

int main() {
    int x, y;
    cin >> x >> y;
    sortPair(x, y);
    cout << x << " " << y << endl;
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What does `&` do in a function parameter `void f(int &x)`?\n`void f(int &x)`中的`&`有什么作用？",
          options: ["Gets the address of x · 获取x的地址", "Makes x a reference (alias) to the original · 使x成为原始变量的引用", "Makes x constant · 使x为常量", "Creates a pointer · 创建指针"],
          correctIndex: 1,
          explanation: "& in a parameter makes it a reference — an alias for the original variable. Changes to x change the original! · &使参数成为原始变量的别名。",
        },
        {
                  "question": "What does pass by reference (&) allow?\n传引用(&)允许什么？",
                  "options": [
                            "Faster printing · 更快打印",
                            "The function can modify the original variable · 函数可以修改原始变量",
                            "Automatic type conversion · 自动类型转换",
                            "Multiple return values only · 仅多返回值"
                  ],
                  "correctIndex": 1,
                  "explanation": "Pass by reference gives the function direct access to the original variable, not a copy. · 传引用让函数直接访问原始变量。"
        },
        {
                  "question": "What does `void swap(int &a, int &b)` do differently than `void swap(int a, int b)`?\n这两个函数有什么不同？",
                  "options": [
                            "No difference · 没区别",
                            "The & version modifies the original values · &版本修改原始值",
                            "The & version is slower · &版本更慢",
                            "The & version returns a value · &版本有返回值"
                  ],
                  "correctIndex": 1,
                  "explanation": "Without &, changes only affect local copies. With &, changes affect the original variables! · 没有&只改副本，有&改原始变量。"
        },
        {
                  "question": "What does `const int& x` mean as a parameter?\n`const int& x` 作为参数是什么意思？",
                  "options": [
                            "x can be modified · x可以修改",
                            "x is a reference but cannot be modified · x是引用但不能修改",
                            "x is a pointer · x是指针",
                            "x is deleted · x被删除"
                  ],
                  "correctIndex": 1,
                  "explanation": "const reference: efficient (no copy) + safe (can't modify). Best practice for large objects! · const引用：高效且安全。"
        },
        {
                  "question": "In Python, are lists passed by value or reference?\nPython中列表是值传递还是引用传递？",
                  "options": [
                            "By value · 值传递",
                            "By reference (similar to C++ references) · 引用传递",
                            "By copy · 副本传递",
                            "Neither · 都不是"
                  ],
                  "correctIndex": 1,
                  "explanation": "Python lists behave like C++ references — changes inside functions affect the original. · Python列表类似C++引用传递。"
        },
        {
                  "type": "coding",
                  "question": "Write a swap function using references.\n用引用写一个交换函数。",
                  "prompt": "Write void swap(int &a, int &b) that swaps two values",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write swap function with references\n\nint main() {\n    int x = 3, y = 7;\n    swap(x, y);\n    cout << x << \" \" << y << endl;\n    return 0;\n}",
                  "expectedOutput": "7 3",
                  "hint": "void swap(int &a, int &b) { int temp = a; a = b; b = temp; } · 用临时变量交换",
                  "explanation": "References let the function modify the caller's variables directly. · 引用让函数直接修改调用者的变量。"
        },
        {
                  "type": "coding",
                  "question": "Write a function that doubles a number using a reference parameter.\n用引用参数写一个将数字翻倍的函数。",
                  "prompt": "Write void doubleIt(int &n) that doubles n in place",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write doubleIt function\n\nint main() {\n    int val = 5;\n    doubleIt(val);\n    cout << val << endl;\n    return 0;\n}",
                  "expectedOutput": "10",
                  "hint": "void doubleIt(int &n) { n = n * 2; } · 用引用修改原值",
                  "explanation": "With a reference parameter, n *= 2 modifies the original variable. · 引用参数直接修改原始变量。"
        },
      ],
    },
  ],
};

const cpp_3_3: Lesson = {
  id: "cpp-3-3",
  moduleId: "cpp-3",
  title: "Arrays & Vectors",
  subtitle: "C arrays and std::vector · 数组和向量",
  icon: "📦",
  xp: 150,
  duration: "25 min",
  order: 13,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `# Arrays in C++ · C++中的数组

🐍 **Py says:** "Python lists are flexible — they grow, shrink, hold any type. C++ has two options: C-style arrays (fixed size) and vectors (flexible like Python lists)."

## Quick Comparison:
| Feature | Python list | C++ array | C++ vector |
|---------|-------------|-----------|------------|
| Size | Dynamic | Fixed | Dynamic |
| Types | Mixed | Same type | Same type |
| Syntax | \`[1,2,3]\` | \`{1,2,3}\` | \`{1,2,3}\` |
| Add items | \`.append()\` | Can't! | \`.push_back()\` |
| Get size | \`len()\` | Manual | \`.size()\` |

⚡ **Volt says:** "Use \`vector\` for almost everything. C-style arrays are for competitive programming speed and when you know the exact size."`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Vectors",
      concept: {
        title: "🧰 New Syntax: Vectors",
        titleZh: "新语法：向量（动态数组）",
        syntaxCards: [
            {
              symbol: "std::vector<int>",
              name: "Declare a vector",
              nameZh: "声明一个向量",
              emoji: "📋",
              description: "Like a Python list 📋 — it can grow and shrink! The <int> tells what type it holds. Much more flexible than arrays.",
              example: "#include <vector>\nstd::vector<int> nums = {1, 2, 3};",
            },
            {
              symbol: ".push_back(val)",
              name: "Add element to end",
              nameZh: "在末尾添加元素",
              emoji: "➕",
              description: "Like Python's .append()! Adds a new element to the end ➕ and the vector grows automatically.",
              example: "std::vector<int> v = {1, 2};\nv.push_back(3);\n// v = {1, 2, 3}",
            },
            {
              symbol: ".size()",
              name: "Get number of elements",
              nameZh: "获取元素个数",
              emoji: "📏",
              description: "Returns how many items 📏 are in the vector. Like Python's len(). Way easier than sizeof tricks!",
              example: "std::vector<int> v = {1,2,3};\nstd::cout << v.size(); // 3",
            },
            {
              symbol: "for (int x : vec)",
              name: "Range-based for loop",
              nameZh: "范围 for 循环",
              emoji: "🔁",
              description: "Like Python's \"for x in list\" 🔁! Loops through every element automatically. Cleanest way to iterate!",
              example: "for (int x : nums) {\n    std::cout << x << \" \";\n}",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "#include <vector>", explanation: "Import vector library — needed for std::vector", explanationZh: "引入 vector 库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    std::vector<int> nums = {10, 20, 30};", explanation: "Create a vector with 3 integers", explanationZh: "创建一个有3个整数的向量" },
              { code: "    nums.push_back(40);", explanation: "Add 40 to the end — vector is now {10,20,30,40}", explanationZh: "在末尾添加 40 — 向量变为 {10,20,30,40}" },
              { code: "    for (int x : nums) { std::cout << x << \" \"; }", explanation: "Range-for loop: print each element", explanationZh: "范围for循环：打印每个元素" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📝",
      content: `# C-Style Arrays vs Vectors · C数组 vs 向量

🎯 **What you'll learn · 你将学到:**
- Old-school C arrays: fixed size
- Modern \`vector\`: dynamic size, can grow and shrink
- Why vectors are almost always better!

C arrays are like **fixed mailboxes** 📬 — size set forever. Vectors are like **expandable folders** 📁 — they grow as needed!

🔑 **Key things to notice · 注意要点:**
- C array: \`int arr[5] = {1,2,3,4,5};\` — size fixed
- Vector: \`vector<int> v = {1,2,3,4,5};\` — can grow/shrink
- Vectors need \`#include <vector>\`
- Vectors are like Python lists — dynamic and flexible

👀 Compare the two — see why modern C++ prefers vectors!`,
      code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // === C-style array ===
    int arr[5] = {10, 20, 30, 40, 50};  // Fixed size!
    cout << "Array: ";
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    arr[2] = 99;  // Modify element
    cout << "Modified: " << arr[2] << endl;
    
    // === Vector (preferred!) ===
    vector<int> vec = {10, 20, 30, 40, 50};
    
    // Python: list.append(60)  ->  C++: vec.push_back(60)
    vec.push_back(60);
    
    // Python: len(list)  ->  C++: vec.size()
    cout << "Vector size: " << vec.size() << endl;
    
    // Python: for x in list:  ->  C++: for (int x : vec)
    cout << "Vector: ";
    for (int x : vec) {
        cout << x << " ";
    }
    cout << endl;
    
    // Python: list.pop()  ->  C++: vec.pop_back()
    vec.pop_back();
    
    // Python: list[-1]  ->  C++: vec.back()
    cout << "Last element: " << vec.back() << endl;
    
    // Python: list[0]  ->  C++: vec.front() or vec[0]
    cout << "First element: " << vec.front() << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🔧",
      content: `# Vector Operations · 向量操作

🎯 **What you'll learn · 你将学到:**
- \`push_back()\`, \`pop_back()\`, \`size()\`, \`sort()\`
- Iterating with range-based for loops
- Vectors are C++'s answer to Python lists!

Vectors are your **toolbox** 🧰 for collections — the closest thing C++ has to Python's lists!

🔑 **Key things to notice · 注意要点:**
- \`v.push_back(x)\` = Python's \`list.append(x)\`
- \`v.pop_back()\` = remove last element
- \`v.size()\` = Python's \`len(list)\`
- \`sort(v.begin(), v.end())\` = Python's \`list.sort()\`
- Range-based for: \`for (int x : v)\` = Python's \`for x in list\`

👀 Try the range-based for loop — closest to Python's \`for x in list\`!`,
      code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9, 3};
    
    // Sort (Python: list.sort())
    sort(v.begin(), v.end());
    cout << "Sorted: ";
    for (int x : v) cout << x << " ";
    cout << endl;
    
    // Reverse (Python: list.reverse())
    reverse(v.begin(), v.end());
    cout << "Reversed: ";
    for (int x : v) cout << x << " ";
    cout << endl;
    
    // Find min/max (Python: min(list), max(list))
    cout << "Min: " << *min_element(v.begin(), v.end()) << endl;
    cout << "Max: " << *max_element(v.begin(), v.end()) << endl;
    
    // Create vector of specific size
    vector<int> zeros(10, 0);     // 10 zeros
    vector<int> fives(5, 5);     // [5, 5, 5, 5, 5]
    
    // 2D vector (like 2D list in Python)
    vector<vector<int>> grid(3, vector<int>(4, 0));  // 3x4 grid of zeros
    grid[1][2] = 42;
    cout << "Grid[1][2] = " << grid[1][2] << endl;
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Read N numbers, store in a vector, then print them sorted.`,
      exercise: {
        prompt: "Read numbers into vector and sort them",
        promptZh: "读取数字到向量并排序输出",
        starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<int> nums;
    // Read n numbers and sort them
    
    
    return 0;
}`,
        expectedOutput: "1 2 3 4 5",
        hint: "Use push_back to add, sort() to sort, range-for to print",
        hintZh: "用push_back添加，sort()排序，范围for循环打印",
        solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<int> nums;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        nums.push_back(x);
    }
    
    sort(nums.begin(), nums.end());
    
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i];
        if (i < nums.size() - 1) cout << " ";
    }
    cout << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What's the C++ equivalent of Python's `list.append(x)`?\nPython的`list.append(x)`在C++中是什么？",
          options: ["`vec.add(x)`", "`vec.append(x)`", "`vec.insert(x)`", "`vec.push_back(x)`"],
          correctIndex: 3,
          explanation: "push_back() adds an element to the end of a vector, just like Python's append(). · push_back()向向量末尾添加元素，类似Python的append()。",
        },
        {
                  "question": "What's the main advantage of vector over arrays?\nvector相比数组的主要优势是什么？",
                  "options": [
                            "Faster · 更快",
                            "Dynamic size — can grow and shrink · 动态大小，可增可减",
                            "Uses less memory · 用更少内存",
                            "Easier to declare · 更容易声明"
                  ],
                  "correctIndex": 1,
                  "explanation": "Vectors can change size with push_back() and pop_back(). Arrays have fixed size! · vector可以动态改变大小。"
        },
        {
                  "question": "How do you add an element to the end of a vector?\n如何在vector末尾添加元素？",
                  "options": [
                            "v.add(x)",
                            "v.append(x)",
                            "v.push_back(x)",
                            "v.insert(x)"
                  ],
                  "correctIndex": 2,
                  "explanation": "push_back() adds to the end. Python uses append(), C++ uses push_back(). · push_back()在末尾添加。"
        },
        {
                  "question": "What happens if you access `arr[10]` in an array of size 5?\n访问大小为5的数组的arr[10]会怎样？",
                  "options": [
                            "Returns 0 · 返回0",
                            "Compilation error · 编译错误",
                            "Undefined behavior (could crash or return garbage) · 未定义行为",
                            "Returns -1 · 返回-1"
                  ],
                  "correctIndex": 2,
                  "explanation": "C++ doesn't check array bounds! Accessing out of bounds is undefined behavior. · C++不检查数组越界！"
        },
        {
                  "question": "How do you get the size of a vector v?\n如何获取vector v的大小？",
                  "options": [
                            "len(v)",
                            "v.length()",
                            "v.size()",
                            "sizeof(v)"
                  ],
                  "correctIndex": 2,
                  "explanation": "v.size() returns the number of elements. len() is Python, sizeof() gives bytes. · v.size()返回元素数量。"
        },
        {
                  "type": "coding",
                  "question": "Create a vector of 5 integers and print their sum.\n创建包含5个整数的vector并打印它们的和。",
                  "prompt": "Read 5 integers into a vector, print their sum",
                  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v;\n    // Read 5 numbers and calculate sum\n    \n    return 0;\n}",
                  "expectedOutput": "15",
                  "hint": "Use push_back to add, then loop to sum · 用push_back添加，循环求和",
                  "explanation": "Read with cin, push_back into vector, loop through to accumulate sum. · 读取后push_back，循环累加求和。"
        },
        {
                  "type": "coding",
                  "question": "Find the maximum value in a vector.\n找到vector中的最大值。",
                  "prompt": "Read n numbers into a vector, print the maximum",
                  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    // Find and print the maximum\n    \n    return 0;\n}",
                  "expectedOutput": "9",
                  "hint": "Track the max as you loop: if(v[i] > maxVal) maxVal = v[i]; · 循环中追踪最大值",
                  "explanation": "Initialize max to v[0], then compare each element. · 初始化max为v[0]，逐个比较。"
        },
      ],
    },
  ],
};

const cpp_3_4: Lesson = {
  id: "cpp-3-4",
  moduleId: "cpp-3",
  title: "String Processing",
  subtitle: "Advanced string algorithms · 高级字符串处理",
  icon: "🔤",
  xp: 150,
  duration: "25 min",
  order: 14,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "code",
      emoji: "🔤",
      content: `# String Processing Patterns · 字符串处理模式

🎯 **What you'll learn · 你将学到:**
- Counting vowels, reversing strings, changing case
- Common competition-style string problems
- Applying character operations at scale

These are your **string kung fu moves** 🥋 — essential techniques for string problems!

🔑 **Key things to notice · 注意要点:**
- Loop through characters: \`for (char c : str)\`
- Check with \`isalpha()\`, \`isdigit()\`, \`isupper()\`, \`islower()\`
- Transform with \`toupper()\`, \`tolower()\`
- Build new strings character by character

👀 Try modifying these patterns to solve different challenges!`,
      code: `#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>
using namespace std;

int main() {
    // Count vowels
    string text = "Hello World";
    int vowels = 0;
    for (char c : text) {
        c = tolower(c);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            vowels++;
        }
    }
    cout << "Vowels: " << vowels << endl;
    
    // Reverse a string
    string rev = text;
    reverse(rev.begin(), rev.end());
    cout << "Reversed: " << rev << endl;
    
    // Check palindrome
    string word = "racecar";
    string reversed = word;
    reverse(reversed.begin(), reversed.end());
    cout << word << " is palindrome: " << (word == reversed) << endl;
    
    // Count words (split by spaces)
    string sentence = "The quick brown fox";
    int wordCount = 1;
    for (char c : sentence) {
        if (c == ' ') wordCount++;
    }
    cout << "Words: " << wordCount << endl;
    
    // Convert to uppercase
    string upper = text;
    for (char &c : upper) {  // Note: reference to modify!
        c = toupper(c);
    }
    cout << "Upper: " << upper << endl;
    
    return 0;
}`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: References",
      concept: {
        title: "🧰 New Syntax: References",
        titleZh: "新语法：引用",
        syntaxCards: [
            {
              symbol: "int& ref = var",
              name: "Reference (alias)",
              nameZh: "引用（别名）",
              emoji: "🪞",
              description: "A mirror 🪞 — the reference IS the same variable, just with another name. Change one, the other changes too!",
              example: "int x = 10;\nint& ref = x;\nref = 20;\n// x is now 20!",
            },
            {
              symbol: "void func(int& x)",
              name: "Pass by reference",
              nameZh: "按引用传递",
              emoji: "🔗",
              description: "Send the REAL variable 🔗 to the function, not a copy! The function can modify the original. Like sharing a Google Doc.",
              example: "void doubleIt(int& x) {\n    x = x * 2;\n}\n// original x changes!",
            },
            {
              symbol: "void func(int x)",
              name: "Pass by value (copy)",
              nameZh: "按值传递（复制）",
              emoji: "📋",
              description: "Send a COPY 📋 of the variable. The function gets its own version. Changes inside don't affect the original.",
              example: "void tryChange(int x) {\n    x = 999;\n}\n// original unchanged!",
            },
            {
              symbol: "const int& ref",
              name: "Const reference",
              nameZh: "常量引用",
              emoji: "🔒",
              description: "Read-only access 🔒! You can look but NOT modify. Fast (no copying) and safe (no accidental changes). Best of both worlds!",
              example: "void print(const std::string& s) {\n    std::cout << s; // can read\n    // s = \"new\"; // ERROR!\n}",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "void swap(int& a, int& b) {", explanation: "Function that takes two ints BY REFERENCE — can modify originals", explanationZh: "函数接受两个 int 的引用 — 可以修改原始值" },
              { code: "    int temp = a; a = b; b = temp;", explanation: "Classic swap using a temporary variable", explanationZh: "用临时变量进行经典交换" },
              { code: "}", explanation: "End of swap function", explanationZh: "swap 函数结束" },
              { code: "int main() {", explanation: "Main function", explanationZh: "主函数" },
              { code: "    int x=1, y=2; swap(x,y);", explanation: "After swap: x=2, y=1 — originals changed!", explanationZh: "交换后：x=2, y=1 — 原始值被改变了！" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🧩",
      content: `# String Comparison & Searching · 字符串比较和搜索

🎯 **What you'll learn · 你将学到:**
- Comparing strings with \`==\`, \`<\`, \`>\`
- Finding substrings with \`.find()\`
- \`string::npos\` = "not found" indicator

String searching is like **Ctrl+F** 🔍 — you look for a pattern inside text!

🔑 **Key things to notice · 注意要点:**
- \`s1 == s2\` compares content (same as Python)
- \`s1 < s2\` = lexicographic (dictionary) comparison
- \`.find("text")\` returns position, or \`string::npos\` if not found
- Python's \`"text" in s\` → C++ \`s.find("text") != string::npos\`

👀 Watch for \`string::npos\` — C++ says "I didn't find it"!`,
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "hello";
    string s2 = "world";
    
    // Compare strings (Python: ==, <, >)
    if (s1 == s2) cout << "Equal" << endl;
    if (s1 < s2) cout << s1 << " comes before " << s2 << endl;
    
    // Find substring (Python: str.find())
    string text = "The quick brown fox jumps";
    size_t pos = text.find("brown");
    if (pos != string::npos) {
        cout << "Found 'brown' at index " << pos << endl;
    }
    
    // Substring (Python: str[start:end])
    string sub = text.substr(4, 5);  // "quick"
    cout << "Substring: " << sub << endl;
    
    // Replace (Python: str.replace())
    string modified = text;
    modified.replace(modified.find("brown"), 5, "red");
    cout << "Replaced: " << modified << endl;
    
    // String to int (Python: int(str))
    string numStr = "42";
    int num = stoi(numStr);  // string to int
    cout << "Number + 1 = " << num + 1 << endl;
    
    // Int to string (Python: str(int))
    string back = to_string(num);
    cout << "Back to string: " << back << endl;
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Read a string and check if it's a palindrome (reads same forwards and backwards).`,
      exercise: {
        prompt: "Check if a string is a palindrome",
        promptZh: "检查字符串是否是回文",
        starterCode: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    // Check palindrome
    
    
    return 0;
}`,
        expectedOutput: "YES",
        hint: "Reverse a copy and compare with the original",
        hintZh: "反转一个副本并与原始字符串比较",
        solution: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    string rev = s;
    reverse(rev.begin(), rev.end());
    
    if (s == rev) {
        cout << "YES" << endl;
    } else {
        cout << "NO" << endl;
    }
    
    return 0;
}`,
      },
    },
    {
      type: "text",
      emoji: "🐍",
      content: `# Python vs C++ Strings · Python和C++字符串对比

🐍 **Py says:** "Here's your cheat sheet for string conversions!"

| Python | C++ | What it does |
|--------|-----|-------------|
| \`s.find("x")\` | \`s.find("x")\` | Find substring |
| \`s[1:4]\` | \`s.substr(1, 3)\` | Substring (C++ uses start, length!) |
| \`len(s)\` | \`s.length()\` or \`s.size()\` | String length |
| \`s.upper()\` | \`transform + toupper\` | To uppercase |
| \`int(s)\` | \`stoi(s)\` | String to int |
| \`str(n)\` | \`to_string(n)\` | Int to string |
| \`s + t\` | \`s + t\` | Concatenate |
| \`s[i]\` | \`s[i]\` | Get character |

⚡ **Volt says:** "C++ strings are mutable! You can change individual characters with \`s[i] = 'x'\`. In Python, strings are immutable."`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What does `s.substr(3, 5)` return?\n`s.substr(3, 5)`返回什么？",
          options: ["Characters from index 3 to 5 · 索引3到5的字符", "The first 5 characters · 前5个字符", "3 characters starting from index 5 · 从索引5开始的3个字符", "5 characters starting from index 3 · 从索引3开始的5个字符"],
          correctIndex: 3,
          explanation: "substr(pos, len) returns `len` characters starting at position `pos`. Different from Python's [start:end] slicing! · substr(pos, len)返回从位置pos开始的len个字符。",
        },
        {
                  "question": "How do you access the i-th character of a string s?\n如何访问字符串s的第i个字符？",
                  "options": [
                            "s(i)",
                            "s[i]",
                            "s.get(i)",
                            "s.char(i)"
                  ],
                  "correctIndex": 1,
                  "explanation": "Use s[i] just like Python! Index starts at 0. · 用s[i]，和Python一样从0开始。"
        },
        {
                  "question": "What does `s.find(\"abc\")` return if not found?\n如果没找到，s.find(\"abc\")返回什么？",
                  "options": [
                            "-1",
                            "0",
                            "string::npos",
                            "null"
                  ],
                  "correctIndex": 2,
                  "explanation": "string::npos is a special value meaning 'not found'. It's like Python returning -1 from find(). · string::npos表示未找到。"
        },
        {
                  "question": "What's the C++ equivalent of Python's `s.upper()`?\nPython的s.upper()在C++中怎么写？",
                  "options": [
                            "s.upper()",
                            "toupper(s)",
                            "transform with ::toupper",
                            "s.toUpper()"
                  ],
                  "correctIndex": 2,
                  "explanation": "C++ has no built-in string upper(). Use transform(s.begin(), s.end(), s.begin(), ::toupper). · C++没有内置字符串大写方法。"
        },
        {
                  "question": "What does `s.push_back('!')` do?\ns.push_back('!')做什么？",
                  "options": [
                            "Adds '!' to the front · 在前面加'!'",
                            "Adds '!' to the end · 在末尾加'!'",
                            "Removes '!' · 删除'!'",
                            "Finds '!' · 查找'!'"
                  ],
                  "correctIndex": 1,
                  "explanation": "push_back appends a character to the end of the string. · push_back在字符串末尾追加字符。"
        },
        {
                  "type": "coding",
                  "question": "Count the number of vowels in a string.\n统计字符串中的元音字母数量。",
                  "prompt": "Read a word, print the count of vowels (a,e,i,o,u)",
                  "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    // Count vowels\n    \n    return 0;\n}",
                  "expectedOutput": "2",
                  "hint": "Loop through each character and check if it's a vowel · 遍历每个字符检查是否为元音",
                  "explanation": "Loop through the string, check each char against 'aeiouAEIOU'. · 遍历字符串检查元音。"
        },
        {
                  "type": "coding",
                  "question": "Reverse a string.\n反转一个字符串。",
                  "prompt": "Read a word and print it reversed",
                  "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    // Reverse and print\n    \n    return 0;\n}",
                  "expectedOutput": "olleH",
                  "hint": "Loop from the end: for(int i=s.length()-1; i>=0; i--) · 从末尾向前遍历",
                  "explanation": "Loop backwards through the string, or use reverse(s.begin(), s.end()). · 反向遍历或用reverse()。"
        },
      ],
    },
  ],
};

const cpp_3_5: Lesson = {
  id: "cpp-3-5",
  moduleId: "cpp-3",
  title: "Header Files & Multi-file Code",
  subtitle: "Organize your C++ like a pro · 像专业人士一样组织C++代码",
  icon: "📂",
  xp: 130,
  duration: "25 min",
  order: 5,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    // 1. Text intro: Why header files matter
    {
      type: "text",
      emoji: "📂",
      content: `# Header Files: The Blueprints of C++ · 头文件：C++的蓝图

⚡ **Volt says:** "Imagine building a house. You don't just start hammering — you need **blueprints** first. In C++, **header files** are your blueprints. They tell the compiler *what exists* before the actual code runs."

🐍 **Py says:** "In Python, you just \`import math\` and everything works. C++ needs more setup — but that's what makes it fast and powerful!"

## Why Do Header Files Exist? 为什么需要头文件？

In a real C++ project, code is split across **many files**:

- 📄 **Header files** (\`.h\` or \`.hpp\`) — contain **declarations** (what functions/classes exist)
- 📄 **Source files** (\`.cpp\`) — contain **implementations** (how functions/classes work)

This separation gives you:

- 🧩 **Modularity** — each file has one job
- 🔄 **Reusability** — include a header anywhere you need it
- ⚡ **Faster compilation** — only recompile changed files
- 👥 **Team collaboration** — different people work on different files

> 💡 **Note:** Our online compiler runs single files, but understanding headers is **essential** for real C++ projects, reading library code, and competitions. The examples below are educational — we'll simulate multi-file structure in single files!`,
    },
    // 2. Concept section with syntaxCards + codeAnatomy
    {
      type: "concept",
      emoji: "🧠",
      content: `# The #include System · #include 系统`,
      concept: {
        title: "#include — Bringing Code Together",
        titleZh: "#include — 将代码组合在一起",
        syntaxCards: [
          {
            symbol: '#include <header>',
            name: "System Include",
            nameZh: "系统包含",
            emoji: "📦",
            example: '#include <iostream>',
            description: "Angle brackets <> search system directories first. Used for standard library headers like iostream, vector, string.",
          },
          {
            symbol: '#include "header.h"',
            name: "Local Include",
            nameZh: "本地包含",
            emoji: "📄",
            example: '#include "math_utils.h"',
            description: 'Double quotes "" search the current directory first, then system directories. Used for your own header files.',
          },
          {
            symbol: "#ifndef / #define / #endif",
            name: "Header Guard",
            nameZh: "头文件保护",
            emoji: "🛡️",
            example: "#ifndef MATH_UTILS_H\\n#define MATH_UTILS_H\\n...\\n#endif",
            description: "Prevents double inclusion. The preprocessor skips the content if the guard macro is already defined.",
          },
          {
            symbol: "#pragma once",
            name: "Modern Header Guard",
            nameZh: "现代头文件保护",
            emoji: "✨",
            example: "#pragma once\\n// declarations here",
            description: "A simpler alternative to #ifndef guards. Supported by all major compilers (GCC, Clang, MSVC).",
          },
        ],
        codeAnatomy: {
          lines: [
            { code: '#include <iostream>', explanation: "System header — from the C++ standard library", explanationZh: "系统头文件 — 来自C++标准库" },
            { code: '#include <vector>', explanation: "Another system header — dynamic arrays", explanationZh: "另一个系统头文件 — 动态数组" },
            { code: "", explanation: "" },
            { code: "// In a real project, you'd put this in my_utils.h:", explanation: "Header = declarations only", explanationZh: "实际项目中，这会放在 my_utils.h 里：" },
            { code: "int add(int a, int b);", explanation: "Function declaration (forward declaration)", explanationZh: "函数声明（前向声明）" },
            { code: "", explanation: "" },
            { code: "// In a real project, this would be in my_utils.cpp:", explanation: "Source = implementations", explanationZh: "实际项目中，这会放在 my_utils.cpp 里：" },
            { code: "int add(int a, int b) { return a + b; }", explanation: "Function definition (has body)", explanationZh: "函数定义（有函数体）" },
            { code: "", explanation: "" },
            { code: "int main() {", explanation: "Entry point", explanationZh: "程序入口" },
            { code: '    std::cout << "2 + 3 = " << add(2, 3) << std::endl;', explanation: "Call the function we declared above", explanationZh: "调用上面声明的函数" },
            { code: "    return 0;", explanation: "Success!", explanationZh: "成功！" },
            { code: "}", explanation: "End of main", explanationZh: "main结束" },
          ],
        },
      },
    },
    // 3. Code example: Creating math_utils.h
    {
      type: "code",
      emoji: "📄",
      content: `# Creating a Header File · 创建头文件

🎯 **What you'll learn · 你将学到:**
- What header files (\`.h\`) are and why they exist
- Separating declarations from implementations
- How \`#include\` actually works

Header files are like a **table of contents** 📑 — they list what's available without showing all the details!

🔑 **Key things to notice · 注意要点:**
- Header (\`.h\`): declarations — WHAT functions exist
- Source (\`.cpp\`): implementations — HOW functions work
- \`#include "myfile.h"\` for your headers (quotes)
- \`#include <iostream>\` for system headers (angle brackets)

👀 This concept is unique to C++ — understand the header/source split!`,
      code: `#include <iostream>
#include <cmath>
using namespace std;

// ==========================================
// Imagine this is "math_utils.h"
// ==========================================
// #pragma once  (would go at the top of the .h file)

// Function DECLARATIONS (prototypes)
double circleArea(double radius);
double rectangleArea(double w, double h);
bool isPrime(int n);

// ==========================================
// Imagine this is "math_utils.cpp"
// It would have: #include "math_utils.h"
// ==========================================

// Function DEFINITIONS (implementations)
double circleArea(double radius) {
    return M_PI * radius * radius;
}

double rectangleArea(double w, double h) {
    return w * h;
}

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// ==========================================
// Imagine this is "main.cpp"
// It would have: #include "math_utils.h"
// ==========================================
int main() {
    cout << "Circle area (r=5): " << circleArea(5.0) << endl;
    cout << "Rectangle area (3x4): " << rectangleArea(3, 4) << endl;
    cout << "Is 17 prime? " << (isPrime(17) ? "Yes" : "No") << endl;
    cout << "Is 20 prime? " << (isPrime(20) ? "Yes" : "No") << endl;
    return 0;
}`,
    },
    // 4. Text: System vs local headers
    {
      type: "text",
      emoji: "📚",
      content: `# System vs Local Headers · 系统头文件 vs 本地头文件

## \`<angle brackets>\` — System Headers 系统头文件

These are part of the C++ Standard Library. The compiler knows where to find them.

| Header | What It Provides | Python Equivalent |
|--------|-----------------|-------------------|
| \`<iostream>\` | cout, cin, endl | \`print()\`, \`input()\` |
| \`<string>\` | std::string | Built-in \`str\` |
| \`<vector>\` | Dynamic arrays | Built-in \`list\` |
| \`<cmath>\` | Math functions | \`import math\` |
| \`<algorithm>\` | sort, find, etc. | Built-in + \`itertools\` |
| \`<fstream>\` | File I/O | \`open()\` |
| \`<map>\` | Key-value pairs | Built-in \`dict\` |
| \`<set>\` | Unique collections | Built-in \`set\` |
| \`<queue>\` | Queue & priority queue | \`from collections import deque\` |
| \`<stack>\` | Stack (LIFO) | \`list\` as stack |

## \`"quotes"\` — Local Headers 本地头文件

These are files **you** create in your project:

\`\`\`cpp
#include "player.h"      // Your Player class
#include "game_engine.h"  // Your game logic
#include "utils/math.h"   // Can use relative paths!
\`\`\`

## 🔧 Include Order Best Practice 最佳引入顺序

Professional C++ projects follow this order:

1. **Related header** — \`#include "myclass.h"\` (if in myclass.cpp)
2. **C system headers** — \`#include <cstdio>\`
3. **C++ standard headers** — \`#include <iostream>\`, \`<vector>\`
4. **Third-party headers** — \`#include "lib/json.h"\`
5. **Project headers** — \`#include "myproject/utils.h"\`

> This order catches missing includes early! Google's C++ Style Guide recommends this.`,
    },
    // 5. Code example: Header guards
    {
      type: "code",
      emoji: "🛡️",
      content: `# Header Guards: Preventing Double Inclusion · 头文件保护

🎯 **What you'll learn · 你将学到:**
- Why including the same header twice causes errors
- \`#ifndef / #define / #endif\` pattern
- Modern alternative: \`#pragma once\`

Header guards are like a **"Do Not Enter If Already Inside"** sign 🚫 — they prevent duplicate inclusion!

🔑 **Key things to notice · 注意要点:**
- Without guards: including twice = "already defined" errors
- Classic: \`#ifndef MYFILE_H / #define MYFILE_H / ... / #endif\`
- Modern shortcut: \`#pragma once\`
- Python handles this automatically — no duplicate import issues!

👀 \`#pragma once\` is simpler — most modern projects use it!`,
      code: `#include <iostream>
#include <cmath>
using namespace std;

// ==========================================
// WITHOUT header guards -- PROBLEM!
// If "point.h" were included twice:
//   #include "point.h"
//   #include "point.h"  // ERROR: struct Point redefined!
// ==========================================

// ==========================================
// WITH header guards -- SAFE! [OK]
// This is what "point.h" should look like:
// ==========================================

// Method 1: Traditional #ifndef guard
#ifndef POINT_H
#define POINT_H

struct Point {
    double x, y;
    
    double distanceTo(Point other) {
        double dx = x - other.x;
        double dy = y - other.y;
        return sqrt(dx*dx + dy*dy);
    }
};

#endif // POINT_H

// Method 2: Modern #pragma once
// #pragma once
// struct Point { ... };
// (Simpler! Same effect. Works on all major compilers.)

// ==========================================
// Even if "included" twice, the guard prevents
// the second definition from being processed!
// ==========================================

int main() {
    Point a = {0, 0};
    Point b = {3, 4};
    
    cout << "Point A: (" << a.x << ", " << a.y << ")" << endl;
    cout << "Point B: (" << b.x << ", " << b.y << ")" << endl;
    cout << "Distance: " << a.distanceTo(b) << endl;  // 5.0!
    
    return 0;
}`,
    },
    // 6. Interactive: Build your own header
    {
      type: "interactive",
      emoji: "🔨",
      content: `# Build Your Own Header · 构建你自己的头文件

🔧 **Chip says:** "Time to practice! Write a header file for a temperature converter."

**Your task:** Complete the header file and implementation below.

The header should declare these functions:
- \`double celsiusToFahrenheit(double c)\`
- \`double fahrenheitToCelsius(double f)\`
- \`double celsiusToKelvin(double c)\``,
      code: `#include <iostream>
using namespace std;

// ==========================================
// "temperature.h" -- YOUR HEADER FILE
// ==========================================
// TODO: Add #pragma once (or #ifndef guard)
// TODO: Declare 3 functions (no bodies!)

double celsiusToFahrenheit(double c);
double fahrenheitToCelsius(double f);
double celsiusToKelvin(double c);

// ==========================================
// "temperature.cpp" -- YOUR IMPLEMENTATION
// ==========================================
// TODO: Implement all 3 functions

double celsiusToFahrenheit(double c) {
    return c * 9.0 / 5.0 + 32.0;
}

double fahrenheitToCelsius(double f) {
    return (f - 32.0) * 5.0 / 9.0;
}

double celsiusToKelvin(double c) {
    return c + 273.15;
}

// ==========================================
// "main.cpp" -- uses the temperature header
// ==========================================
int main() {
    double tempC = 100.0;
    
    cout << tempC << " deg C = " 
         << celsiusToFahrenheit(tempC) << " deg F" << endl;
    cout << tempC << " deg C = " 
         << celsiusToKelvin(tempC) << "K" << endl;
    
    double tempF = 98.6;
    cout << tempF << " deg F = " 
         << fahrenheitToCelsius(tempF) << " deg C" << endl;
    
    return 0;
}`,
      exercise: {
        prompt: "This program simulates a multi-file project. Try modifying the conversion functions!",
        promptZh: "这个程序模拟了一个多文件项目。试着修改转换函数！",
        starterCode: `double celsiusToFahrenheit(double c) {\n    return c * 9.0 / 5.0 + 32.0;\n}`,
        expectedOutput: "100°C = 212°F",
        hint: "The declarations (no body) go in the .h file, implementations (with body) go in the .cpp file.",
        hintZh: "没有函数体的声明放在.h文件中，有函数体的实现放在.cpp文件中。",
        solution: `double celsiusToFahrenheit(double c) {\n    return c * 9.0 / 5.0 + 32.0;\n}\ndouble fahrenheitToCelsius(double f) {\n    return (f - 32.0) * 5.0 / 9.0;\n}\ndouble celsiusToKelvin(double c) {\n    return c + 273.15;\n}`,
      },
    },
    // 7. Text: Separating declaration and implementation
    {
      type: "text",
      emoji: "✂️",
      content: `# Declaration vs Definition · 声明 vs 定义

This is one of the most important concepts in C++:

## Declaration 声明 — "This exists"

\`\`\`cpp
// In player.h
class Player {
    string name;
    int health;
public:
    Player(string n, int hp);  // Constructor declaration
    void takeDamage(int dmg);  // Method declaration
    bool isAlive();            // Method declaration
    string getName();          // Method declaration
};
\`\`\`

## Definition 定义 — "Here's how it works"

\`\`\`cpp
// In player.cpp
#include "player.h"

Player::Player(string n, int hp) : name(n), health(hp) {}

void Player::takeDamage(int dmg) {
    health -= dmg;
    if (health < 0) health = 0;
}

bool Player::isAlive() { return health > 0; }

string Player::getName() { return name; }
\`\`\`

Notice the \`Player::\` prefix — this tells the compiler "this function belongs to the Player class."

## Forward Declarations 前向声明

Sometimes you just need to tell the compiler a name exists:

\`\`\`cpp
class Enemy;  // Forward declaration — "Enemy exists, details later"

class Player {
    void attack(Enemy& e);  // Can use Enemy& because of forward declaration
};
\`\`\`

This avoids circular includes (A.h includes B.h which includes A.h... 💥)`,
    },
    // 8. Code example: Class in header + implementation in .cpp
    {
      type: "code",
      emoji: "🎮",
      content: `# Class Split: Header + Implementation · 类的分离

🎯 **What you'll learn · 你将学到:**
- How real C++ projects organize classes across files
- Header file for the class declaration
- Source file for method implementations

This is how **professional C++ projects** 🏗️ work — like separating ingredients (header) from cooking instructions (source)!

🔑 **Key things to notice · 注意要点:**
- Header: class definition with method signatures
- Source: implementations using \`ClassName::methodName()\`
- \`::\` is the "scope resolution operator"
- Python puts everything in one file; C++ spreads across files

👀 Notice the \`::\` syntax — it connects implementations to their class!`,
      code: `#include <iostream>
#include <string>
using namespace std;

// ==========================================
// "inventory.h" -- Class DECLARATION
// ==========================================
// #pragma once

class Inventory {
    string items[100];
    int count;

public:
    Inventory();                    // Constructor
    void addItem(string item);     // Add an item
    bool removeItem(string item);  // Remove an item
    void display();                // Show all items
    int getCount();                // Get item count
};

// ==========================================
// "inventory.cpp" -- Class IMPLEMENTATION
// ==========================================
// #include "inventory.h"

Inventory::Inventory() : count(0) {}

void Inventory::addItem(string item) {
    if (count < 100) {
        items[count] = item;
        count++;
        cout << "[OK] Added: " << item << endl;
    } else {
        cout << "[X] Inventory full!" << endl;
    }
}

bool Inventory::removeItem(string item) {
    for (int i = 0; i < count; i++) {
        if (items[i] == item) {
            // Shift remaining items
            for (int j = i; j < count - 1; j++) {
                items[j] = items[j + 1];
            }
            count--;
            cout << "[del] Removed: " << item << endl;
            return true;
        }
    }
    cout << "[?] Not found: " << item << endl;
    return false;
}

void Inventory::display() {
    cout << "\\n Inventory (" << count << " items):" << endl;
    for (int i = 0; i < count; i++) {
        cout << "  " << (i+1) << ". " << items[i] << endl;
    }
    if (count == 0) cout << "  (empty)" << endl;
}

int Inventory::getCount() { return count; }

// ==========================================
// "main.cpp"
// ==========================================
int main() {
    Inventory inv;
    
    inv.addItem("Sword");
    inv.addItem("Shield");
    inv.addItem("Health Potion");
    inv.addItem("Magic Scroll");
    inv.display();
    
    inv.removeItem("Shield");
    inv.display();
    
    cout << "\\nItems remaining: " << inv.getCount() << endl;
    return 0;
}`,
    },
    // 9. Quiz: Header file concepts
    {
      type: "quiz",
      emoji: "❓",
      content: `# Header File Quiz · 头文件测验`,
      quiz: [
        {
          question: "What's the difference between `#include <header>` and `#include \"header\"`?",
          options: [
            "<> is for .h files, \"\" is for .hpp files · <>用于.h文件，\"\"用于.hpp文件",
            "<> searches system directories, \"\" searches local directory first · <>搜索系统目录，\"\"先搜索本地目录",
            "<> is faster than \"\" · <>比\"\"更快",
            "There is no difference · 没有区别",
          ],
          correctIndex: 1,
          explanation: "Angle brackets <> search system/standard library paths. Double quotes \"\" search the current project directory first, then fall back to system paths. · 尖括号搜索系统路径，双引号先搜索项目目录再搜索系统路径。",
        },
        {
          question: "What problem do header guards (#ifndef) solve?",
          options: ["They prevent a header from being included twice · 防止头文件被重复包含", "They hide private variables · 隐藏私有变量", "They protect against hackers · 防止黑客攻击", "They make code run faster · 让代码运行更快"],
          correctIndex: 0,
          explanation: "Without header guards, including the same header twice causes redefinition errors. Guards ensure the contents are only processed once. · 没有头文件保护，重复包含会导致重定义错误。保护确保内容只被处理一次。",
        },
        {
          question: "In a multi-file project, where does `int add(int a, int b);` (no body) go?",
          options: ["In the .h header file · 在.h头文件中", "Nowhere — it's not valid C++ · 这不是有效的C++", "In the .cpp file · 在.cpp文件中", "In the main() function · 在main()函数中"],
          correctIndex: 0,
          explanation: "A function declaration (prototype) without a body goes in the header file (.h). The definition (with body) goes in the .cpp file. · 没有函数体的函数声明放在头文件(.h)中，定义放在.cpp文件中。",
        },
        {
          question: "What does `Player::takeDamage` mean?",
          options: ["Player inherits from takeDamage · Player继承自takeDamage", "A function called Player that takes Damage · 一个叫Player的函数接受Damage", "takeDamage is a member function of the Player class · takeDamage是Player类的成员函数", "A pointer from Player to takeDamage · 从Player到takeDamage的指针"],
          correctIndex: 2,
          explanation: "The :: scope resolution operator means 'belongs to'. Player::takeDamage defines the takeDamage method that was declared inside the Player class. · ::作用域运算符表示'属于'。Player::takeDamage定义了在Player类中声明的方法。",
        },
        {
                  "question": "What goes in a header file (.h)?\n头文件(.h)里放什么？",
                  "options": [
                            "main() function · main()函数",
                            "Function declarations (prototypes) · 函数声明（原型）",
                            "All the program code · 所有程序代码",
                            "Only comments · 只有注释"
                  ],
                  "correctIndex": 1,
                  "explanation": "Header files contain declarations/prototypes. Implementation goes in .cpp files. · 头文件放声明，实现放.cpp文件。"
        },
        {
                  "question": "What does `#pragma once` do?\n`#pragma once` 做什么？",
                  "options": [
                            "Runs the file once · 运行文件一次",
                            "Prevents the header from being included multiple times · 防止头文件被多次包含",
                            "Deletes the file · 删除文件",
                            "Compiles faster · 编译更快"
                  ],
                  "correctIndex": 1,
                  "explanation": "#pragma once is an include guard — prevents duplicate inclusion errors. · 防止头文件重复包含。"
        },
        {
                  "question": "What's the difference between `#include <file>` and `#include \"file\"`?\n尖括号和双引号include的区别？",
                  "options": [
                            "No difference · 没区别",
                            "<> for system headers, \"\" for your own files · <>系统头文件，\"\"自己的文件",
                            "<> is faster · <>更快",
                            "\"\" only works on Windows · \"\"只在Windows上有效"
                  ],
                  "correctIndex": 1,
                  "explanation": "<> searches system directories first. \"\" searches your project directory first. · <>先搜系统目录，\"\"先搜项目目录。"
        },
        {
                  "question": "Why split code into multiple files?\n为什么把代码分成多个文件？",
                  "options": [
                            "Makes it slower · 让它更慢",
                            "Better organization and reusability · 更好的组织和复用",
                            "Required by C++ · C++要求的",
                            "Takes more memory · 占更多内存"
                  ],
                  "correctIndex": 1,
                  "explanation": "Multi-file projects are organized, maintainable, and enable code reuse. · 多文件项目更有组织、可维护、可复用。"
        },
        {
                  "type": "coding",
                  "question": "Write a function in one 'file' and call it from main.\n在一个'文件'中写函数并从main调用。",
                  "prompt": "Write int square(int n) above main, call it to print the square of input",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write square function here\n\nint main() {\n    int n;\n    cin >> n;\n    cout << square(n) << endl;\n    return 0;\n}",
                  "expectedOutput": "25",
                  "hint": "int square(int n) { return n * n; } · 返回n*n",
                  "explanation": "Define the function before main() so the compiler knows about it. · 在main()前定义函数。"
        },
        {
                  "type": "coding",
                  "question": "Write a function prototype (declaration) and define it after main.\n写函数原型（声明）并在main后定义。",
                  "prompt": "Declare int cube(int n); before main, define after main, print cube of input",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write function prototype here\n\nint main() {\n    int n;\n    cin >> n;\n    cout << cube(n) << endl;\n    return 0;\n}\n\n// Write function definition here\n",
                  "expectedOutput": "27",
                  "hint": "Prototype: int cube(int n); Definition: int cube(int n) { return n*n*n; } · 原型声明在前，定义在后",
                  "explanation": "Forward declaration (prototype) lets you define the function after main(). · 前向声明让你在main()后定义函数。"
        },
      ],
    },
    // 10. Challenge: Create a multi-file program
    {
      type: "challenge",
      emoji: "🏆",
      content: `# Challenge: Multi-file Student Records · 挑战：多文件学生记录系统

Create a program that simulates a multi-file structure with a Student class. Include:
- A "header section" with the Student class declaration
- An "implementation section" with method definitions using \`Student::\`
- A main function that creates students and displays their info

The Student class should have: name, grade, GPA, and methods to display info and check honor roll (GPA ≥ 3.5).`,
      challenge: {
        title: "Multi-file Student Records",
        description: "Create a Student class with name, grade, GPA. Separate declaration from implementation using Student:: syntax. Add displayInfo() and isHonorRoll() (GPA ≥ 3.5) methods.",
        starterCode: `#include <iostream>
#include <string>
using namespace std;

// "student.h" — Class Declaration
class Student {
    // TODO: Add private members
public:
    // TODO: Declare constructor, displayInfo(), isHonorRoll()
};

// "student.cpp" — Implementation
// TODO: Implement methods with Student:: prefix

int main() {
    // TODO: Create students and display info
    return 0;
}`,
        hint: "Use Student:: prefix for method definitions outside the class. Honor roll = GPA >= 3.5.",
        solution: `#include <iostream>
#include <string>
using namespace std;

class Student {
    string name;
    int grade;
    double gpa;
public:
    Student(string n, int g, double g_);
    void displayInfo();
    bool isHonorRoll();
};

Student::Student(string n, int g, double g_) : name(n), grade(g), gpa(g_) {}
void Student::displayInfo() {
    cout << name << " | Grade " << grade << " | GPA: " << gpa;
    if (isHonorRoll()) cout << " Honor Roll!";
    cout << endl;
}
bool Student::isHonorRoll() { return gpa >= 3.5; }

int main() {
    Student s1("Alice", 10, 3.8);
    Student s2("Bob", 11, 3.2);
    Student s3("Carol", 12, 4.0);
    s1.displayInfo();
    s2.displayInfo();
    s3.displayInfo();
    return 0;
}`,
      },
    },
    // 11. Text: Common standard headers reference
    {
      type: "text",
      emoji: "📖",
      content: `# C++ Standard Headers Quick Reference · C++标准头文件速查

## Most Used Headers 最常用的头文件

| Header | Key Features | When to Use |
|--------|-------------|-------------|
| \`<iostream>\` | \`cout\`, \`cin\`, \`endl\` | Any program with input/output |
| \`<string>\` | \`string\`, \`getline()\` | Working with text |
| \`<vector>\` | \`vector<T>\`, dynamic sizing | Lists that grow/shrink |
| \`<algorithm>\` | \`sort()\`, \`find()\`, \`count()\` | Sorting, searching |
| \`<cmath>\` | \`sqrt()\`, \`pow()\`, \`abs()\` | Math operations |
| \`<fstream>\` | \`ifstream\`, \`ofstream\` | Reading/writing files |
| \`<map>\` | \`map<K,V>\` | Key-value dictionaries |
| \`<set>\` | \`set<T>\` | Unique sorted collections |
| \`<queue>\` | \`queue<T>\`, \`priority_queue\` | BFS, scheduling |
| \`<stack>\` | \`stack<T>\` | DFS, expression parsing |
| \`<sstream>\` | \`stringstream\` | String ↔ number conversion |
| \`<climits>\` | \`INT_MAX\`, \`INT_MIN\` | Boundary values |
| \`<cstdlib>\` | \`rand()\`, \`srand()\` | Random numbers |
| \`<iomanip>\` | \`setprecision()\`, \`setw()\` | Formatted output |
| \`<numeric>\` | \`accumulate()\`, \`gcd()\` | Numeric algorithms |

## 🏆 Competition Tip 竞赛技巧

Many competitive programmers use:
\`\`\`cpp
#include <bits/stdc++.h>  // Includes EVERYTHING (GCC only!)
\`\`\`
This is **not** standard C++ and won't work on all compilers, but it's popular in competitions because it saves time.

## 🎯 Key Takeaways 要点总结

1. **Headers = declarations**, source files = implementations
2. **Always use header guards** (\`#pragma once\` or \`#ifndef\`)
3. **\`<>\` for system**, \`""\` for your own files
4. **Separate declaration from definition** for clean, maintainable code
5. Real projects have hundreds of files — headers keep them organized!

⚡ **Volt says:** "You now understand how professional C++ code is organized. Even when writing single-file programs, think about *where* each piece would go in a real project!"`,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE CPP-4: POINTERS & OOP (4 lessons)
// ═══════════════════════════════════════════════════════════════

const cpp_4_1: Lesson = {
  id: "cpp-4-1",
  moduleId: "cpp-4",
  title: "Pointers: Memory Addresses",
  subtitle: "Understanding memory · 理解内存和指针",
  icon: "📍",
  xp: 200,
  duration: "30 min",
  order: 15,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📍",
      content: `# What Are Pointers? · 什么是指针？

🐍 **Py says:** "In Python, every variable is already a reference — you just don't see it. In C++, you get to see and control the actual memory addresses!"

🔧 **Chip says:** "Think of memory as a huge array of boxes. Each box has an address (a number) and can hold data. A pointer is a variable that stores one of those addresses."

## Key Concepts:

- **&** (address-of): Gets the memory address of a variable

- **\\*** (dereference): Gets the value at an address

- A pointer variable stores an address, not a value

⚡ **Volt says:** "Pointers are THE key concept that separates C++ from Python. Master this and you'll understand how computers really work!"`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Pointers",
      concept: {
        title: "🧰 New Syntax: Pointers",
        titleZh: "新语法：指针",
        syntaxCards: [
            {
              symbol: "int* ptr",
              name: "Pointer declaration",
              nameZh: "指针声明",
              emoji: "📍",
              description: "A pointer is a GPS coordinate 📍 — it stores the ADDRESS of another variable, not the value itself!",
              example: "int x = 42;\nint* ptr = &x;\n// ptr holds x's address",
            },
            {
              symbol: "&variable",
              name: "Address-of operator",
              nameZh: "取地址运算符",
              emoji: "🏠",
              description: "Ask \"where do you live?\" 🏠 — & gives you the memory address of a variable.",
              example: "int x = 42;\nstd::cout << &x;\n// prints address like 0x7fff...",
            },
            {
              symbol: "*ptr",
              name: "Dereference (follow pointer)",
              nameZh: "解引用（跟随指针）",
              emoji: "🔓",
              description: "Unlock the door 🔓 and see what's inside! *ptr follows the address and gives you the VALUE stored there.",
              example: "int x = 42;\nint* ptr = &x;\nstd::cout << *ptr; // 42",
            },
            {
              symbol: "nullptr",
              name: "Null pointer",
              nameZh: "空指针",
              emoji: "🚫",
              description: "A pointer that points NOWHERE 🚫. Use it to say \"I don't point to anything yet.\" Always check before dereferencing!",
              example: "int* ptr = nullptr;\nif (ptr != nullptr) {\n    std::cout << *ptr;\n}",
            },
            {
              symbol: "ptr->",
              name: "Arrow operator",
              nameZh: "箭头运算符",
              emoji: "➡️",
              description: "Shortcut ➡️ for (*ptr).member — dereference AND access a member in one step. Used with objects/structs.",
              example: "struct Point { int x, y; };\nPoint p = {3, 4};\nPoint* ptr = &p;\nstd::cout << ptr->x; // 3",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    int x = 42;", explanation: "Regular integer variable with value 42", explanationZh: "普通整数变量，值为 42" },
              { code: "    int* ptr = &x;", explanation: "Pointer ptr stores the ADDRESS of x", explanationZh: "指针 ptr 存储 x 的地址" },
              { code: "    std::cout << *ptr << std::endl;", explanation: "Dereference ptr → get value at that address → print 42", explanationZh: "解引用 ptr → 获取该地址的值 → 打印 42" },
              { code: "    *ptr = 100;", explanation: "Change value at ptr's address — x is now 100!", explanationZh: "改变 ptr 地址处的值 — x 现在是 100！" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🔍",
      content: `# Pointer Basics · 指针基础

🎯 **What you'll learn · 你将学到:**
- What pointers are: variables that store memory addresses
- \`&\` = "address of", \`*\` = "value at address"
- Why pointers make C++ powerful (and tricky!)

A pointer is like a **home address** 🏠 — it doesn't contain the house, just tells you WHERE to find it. \`&\` asks "what's your address?" and \`*\` says "take me there!"

🔑 **Key things to notice · 注意要点:**
- \`int* p = &x;\` — p stores the ADDRESS of x
- \`*p\` = "go to that address and get/set the value"
- \`&x\` = "what is x's address?"
- Python has no pointers — everything uses references behind the scenes

👀 Draw arrows between pointers and values — visualize the connections!`,
      code: `#include <iostream>
using namespace std;

int main() {
    int x = 42;
    
    // & = "address of"
    cout << "Value of x: " << x << endl;
    cout << "Address of x: " << &x << endl;
    
    // Declare a pointer with *
    int* ptr = &x;  // ptr stores the address of x
    
    cout << "ptr stores: " << ptr << endl;       // The address
    cout << "ptr points to: " << *ptr << endl;    // The value (42)
    
    // Modify through pointer
    *ptr = 100;
    cout << "x is now: " << x << endl;  // 100! Changed via pointer
    
    // Pointer to different types
    double pi = 3.14;
    double* dPtr = &pi;
    cout << "Pi: " << *dPtr << endl;
    
    // nullptr -- pointer to nothing (Python's None)
    int* nothing = nullptr;
    // *nothing would CRASH! Always check before dereferencing
    if (nothing != nullptr) {
        cout << *nothing << endl;
    } else {
        cout << "Pointer is null!" << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🔗",
      content: `# Pointers and Functions · 指针和函数

🎯 **What you'll learn · 你将学到:**
- Passing pointers to functions
- Pointers vs references for modifying values
- Why C used pointers before references existed

Passing pointers is like giving someone your **home address** 📮 — they can go there and change things directly!

🔑 **Key things to notice · 注意要点:**
- Pass pointer: \`void func(int* p)\` — uses \`*p\` to access
- Pass reference: \`void func(int& x)\` — cleaner, same effect
- Pointers can be \`nullptr\`; references can't!
- Modern C++ prefers references for function parameters

👀 Compare pointer vs reference style — which is cleaner?`,
      code: `#include <iostream>
using namespace std;

// Pass by value -- makes a COPY (Python default for ints)
void addTenCopy(int n) {
    n += 10;  // Only changes the copy!
}

// Pass by pointer -- modifies the ORIGINAL
void addTenPtr(int* n) {
    *n += 10;  // Changes the original!
}

// Pass by reference -- cleaner syntax, same effect
void addTenRef(int& n) {
    n += 10;  // Changes the original!
}

// Swap using pointers (classic!)
void swapPtr(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5;
    
    addTenCopy(x);
    cout << "After copy: " << x << endl;  // Still 5
    
    addTenPtr(&x);
    cout << "After pointer: " << x << endl;  // 15!
    
    addTenRef(x);
    cout << "After reference: " << x << endl;  // 25!
    
    int a = 1, b = 2;
    swapPtr(&a, &b);
    cout << "Swapped: " << a << " " << b << endl;  // 2 1
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "🐍",
      content: `# Python vs C++ — Passing Data · 传递数据对比

🐍 **Py says:** "In Python, everything is passed by object reference. Numbers and strings are immutable so they SEEM like copies. Lists are mutable so changes stick."

| Python | C++ | Effect |
|--------|-----|--------|
| \`def f(x)\` | \`void f(int x)\` | Copy — changes don't affect original |
| (no equivalent) | \`void f(int* x)\` | Pointer — modify original with \`*x\` |
| (no equivalent) | \`void f(int& x)\` | Reference — modify original directly |
| \`def f(lst)\` | \`void f(vector<int>& v)\` | Both modify the original |

⚡ **Volt says:** "Use references (\`&\`) for most cases. Use pointers (\`*\`) when you need nullptr or pointer arithmetic. Pass by value for small types you don't need to modify."`,
    },
    {
      type: "code",
      emoji: "📊",
      content: `# Arrays and Pointers · 数组和指针

🎯 **What you'll learn · 你将学到:**
- Arrays "decay" into pointers when passed to functions
- Array name = pointer to first element
- Why C++ arrays and pointers are deeply connected

Arrays and pointers are **best friends** 👯 — an array name IS basically a pointer to its first element!

🔑 **Key things to notice · 注意要点:**
- \`arr\` = pointer to \`arr[0]\` (first element)
- Passing array to function = passing pointer
- Must pass size separately (arrays don't know their size!)
- This is why vectors (which know their size) are preferred

👀 Notice that arrays lose their size info when passed to functions!`,
      code: `#include <iostream>
using namespace std;

// Arrays decay to pointers when passed to functions!
void printArray(int* arr, int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";  // arr[i] same as *(arr + i)
    }
    cout << endl;
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    
    // Array name IS a pointer to first element
    cout << "arr points to: " << arr << endl;
    cout << "First element: " << *arr << endl;     // 10
    cout << "Second element: " << *(arr+1) << endl; // 20
    
    // Pointer arithmetic
    int* p = arr;
    cout << "p[0] = " << p[0] << endl;  // 10
    p++;  // Move to next element
    cout << "After p++, *p = " << *p << endl;  // 20
    
    // Pass array to function
    printArray(arr, 5);
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Write a function that takes a pointer to an int array and its size, and returns the sum.`,
      exercise: {
        prompt: "Sum array elements using a pointer",
        promptZh: "使用指针求数组元素之和",
        starterCode: `#include <iostream>
using namespace std;

int arraySum(int* arr, int size) {
    // Calculate sum using pointer
    
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    cout << arraySum(arr, 5) << endl;
    return 0;
}`,
        expectedOutput: "15",
        hint: "Loop through using arr[i] or *(arr + i)",
        hintZh: "用arr[i]或*(arr + i)遍历数组",
        solution: `#include <iostream>
using namespace std;

int arraySum(int* arr, int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    cout << arraySum(arr, 5) << endl;
    return 0;
}`,
      },
    },
    {
      type: "text",
      emoji: "🧮",
      content: `# Pointer Arithmetic · 指针运算

🔧 **Chip says:** "Pointers aren't just addresses — you can do math on them! When you add 1 to a pointer, it moves forward by the size of the type it points to."

## How Pointer Arithmetic Works:
\`\`\`cpp
int arr[] = {10, 20, 30, 40, 50};
int* p = arr;       // points to arr[0]
p + 1               // points to arr[1] (moves 4 bytes for int)
*(p + 2)            // value at arr[2] = 30
\`\`\`

## Key Rules:
- \`ptr + n\` moves forward by n elements
- \`ptr2 - ptr1\` gives the number of elements between two pointers
- You can compare pointers with <, >, ==`,
    },
    {
      type: "code",
      emoji: "🔢",
      content: `# Pointer Arithmetic in Action · 指针运算实战

🎯 **What you'll learn · 你将学到:**
- Moving pointers with \`+\`, \`-\`, \`++\`, \`--\`
- Pointer arithmetic accounts for type size automatically
- Walking through arrays using pointers

Pointer arithmetic is like walking along a **number line** 📏 — each step moves by the SIZE of the data type!

🔑 **Key things to notice · 注意要点:**
- \`p + 1\` = next element (not next byte!)
- \`*p\` = value at current position
- \`p[i]\` is the same as \`*(p + i)\`
- The compiler handles the size math

👀 Watch the addresses — see how they increase by the size of int!`,
      code: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int* p = arr;
    
    cout << "p points to: " << *p << endl;       // 10
    cout << "p+1 points to: " << *(p+1) << endl; // 20
    cout << "p+4 points to: " << *(p+4) << endl; // 50
    
    // Walking through array with pointer
    cout << "Array via pointer: ";
    for (int* q = arr; q < arr + 5; q++) {
        cout << *q << " ";
    }
    cout << endl;
    
    // Pointer difference = number of elements
    int* start = &arr[1];
    int* end = &arr[4];
    cout << "Elements between: " << (end - start) << endl;  // 3
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "🆚",
      content: `# References vs Pointers · 引用vs指针

| Feature | Pointer (int*) | Reference (int&) |
|---------|----------------|-------------------|
| Can be null? | Yes (nullptr) | No |
| Can be reassigned? | Yes | No — bound at creation |
| Syntax | *ptr to use | Just the name |
| For arrays? | Common | Not typical |

**When to use which?**
- **Reference**: Default for function params — cleaner syntax

- **Pointer**: Need nullptr, pointer arithmetic, or dynamic memory

- **const reference**: Read-only access to big objects

\`\`\`cpp
int x = 42;
int& ref = x;   // ref IS x (alias)
int* ptr = &x;  // ptr POINTS TO x (address)
ref = 100;       // x is now 100
*ptr = 200;      // x is now 200
\`\`\``,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Pointer Arithmetic Quiz · 指针运算测验",
      quiz: [
        {
          question: "If int* p = arr; and arr = {10,20,30}, what is *(p+2)?\n如果 int* p = arr; 且 arr = {10,20,30}，*(p+2)是什么？",
          options: ["20", "Undefined", "10", "30"],
          correctIndex: 3,
          explanation: "p+2 moves the pointer 2 int positions forward, pointing to arr[2] which is 30. · p+2将指针向前移动2个int位置。",
        },
        {
          question: "Which CANNOT be null?\n哪个不能为null？",
          options: ["int* arr", "int** pptr", "int& ref", "int* ptr"],
          correctIndex: 2,
          explanation: "References must always refer to a valid object. Pointers can be nullptr. · 引用必须始终引用有效对象。",
        },
        {
                  "question": "What does the `*` symbol mean when declaring `int *p;`?\n声明 `int *p;` 时*是什么意思？",
                  "options": [
                            "Multiply · 乘法",
                            "p is a pointer to an int · p是指向int的指针",
                            "p is an int · p是整数",
                            "Dereference · 解引用"
                  ],
                  "correctIndex": 1,
                  "explanation": "In a declaration, * means 'pointer to'. int *p means p holds the address of an int. · 声明中*表示'指向'。"
        },
        {
                  "question": "What does `&x` give you?\n`&x` 给你什么？",
                  "options": [
                            "The value of x · x的值",
                            "The memory address of x · x的内存地址",
                            "A reference to x · x的引用",
                            "A copy of x · x的副本"
                  ],
                  "correctIndex": 1,
                  "explanation": "& (address-of operator) returns the memory address where x is stored. · &返回x的内存地址。"
        },
        {
                  "question": "If `int *p = &x;`, what does `*p = 10;` do?\n这行代码做什么？",
                  "options": [
                            "Changes p's address · 改变p的地址",
                            "Changes x's value to 10 · 将x的值改为10",
                            "Creates a new variable · 创建新变量",
                            "Error · 报错"
                  ],
                  "correctIndex": 1,
                  "explanation": "*p dereferences the pointer — it accesses the value at the address p points to. So *p = 10 changes x to 10. · *p解引用，修改x的值。"
        },
        {
                  "type": "coding",
                  "question": "Create a pointer to an integer and modify the value through the pointer.\n创建指向整数的指针并通过指针修改值。",
                  "prompt": "Create int x=5, pointer p to x, change *p to 10, print x",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    // Create pointer and modify value\n    \n    cout << x << endl;\n    return 0;\n}",
                  "expectedOutput": "10",
                  "hint": "int *p = &x; *p = 10; · 用指针修改值",
                  "explanation": "int *p = &x creates a pointer to x. *p = 10 modifies x through the pointer. · 指针指向x后通过*p修改x。"
        },
        {
                  "type": "coding",
                  "question": "Write a function that uses a pointer parameter to set a value.\n写一个用指针参数设置值的函数。",
                  "prompt": "Write void setTo100(int *p) that sets the value to 100",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write setTo100 function\n\nint main() {\n    int val = 0;\n    setTo100(&val);\n    cout << val << endl;\n    return 0;\n}",
                  "expectedOutput": "100",
                  "hint": "void setTo100(int *p) { *p = 100; } · 用*p = 100设置值",
                  "explanation": "Pass the address with &val, receive with pointer, modify with *p. · 传地址，用指针接收，用*p修改。"
        },
      ],
    },
    
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What does `int* ptr = &x;` do?\n`int* ptr = &x;`做了什么？",
          options: ["Creates a pointer storing x's address · 创建一个存储x地址的指针", "Declares an array · 声明一个数组", "Multiplies ptr by x · 将ptr乘以x", "Creates a copy of x · 创建x的副本"],
          correctIndex: 0,
          explanation: "The * in a declaration makes ptr a pointer, and &x gets the address of x. So ptr now points to x. · 声明中的*使ptr成为指针，&x获取x的地址。",
        },
      ],
    },
  ],
};

const cpp_4_2: Lesson = {
  id: "cpp-4-2",
  moduleId: "cpp-4",
  title: "Structs & Classes",
  subtitle: "Custom data types · 自定义数据类型",
  icon: "🏗️",
  xp: 200,
  duration: "30 min",
  order: 16,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🏗️",
      content: `# Structs: Grouping Data · 结构体：数据分组

🐍 **Py says:** "In Python, you'd use a class or dataclass. In C++, \`struct\` is the simplest way to bundle related data together."

⚡ **Volt says:** "Structs are like classes where everything is public by default. For competitive programming, structs are super common!"

🐍 **Python:**
\`\`\`python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
\`\`\`

⚡ **C++:**
\`\`\`cpp
struct Point {
    int x;
    int y;
};
\`\`\``,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Classes",
      concept: {
        title: "🧰 New Syntax: Classes & Objects",
        titleZh: "新语法：类和对象",
        syntaxCards: [
            {
              symbol: "class ClassName { };",
              name: "Class definition",
              nameZh: "类的定义",
              emoji: "📐",
              description: "A blueprint 📐 for creating objects! Like a cookie cutter — define the shape once, stamp out many cookies.",
              example: "class Dog {\npublic:\n    std::string name;\n    void bark() {\n        std::cout << \"Woof!\";\n    }\n};",
            },
            {
              symbol: "public:",
              name: "Public access",
              nameZh: "公开访问",
              emoji: "🔓",
              description: "Open to everyone 🔓! Anyone can access public members from outside the class. Like a store's front counter.",
              example: "class Cat {\npublic:\n    std::string name; // anyone can see\n};",
            },
            {
              symbol: "private:",
              name: "Private access",
              nameZh: "私有访问",
              emoji: "🔒",
              description: "Secret vault 🔒! Only the class itself can access private members. Use to hide internal data. Default in class!",
              example: "class BankAccount {\nprivate:\n    double balance; // hidden!\npublic:\n    double getBalance() { return balance; }\n};",
            },
            {
              symbol: "ClassName() { }",
              name: "Constructor",
              nameZh: "构造函数",
              emoji: "🏗️",
              description: "The builder 🏗️! Runs automatically when you create an object. Use it to set up initial values.",
              example: "class Dog {\npublic:\n    std::string name;\n    Dog(std::string n) : name(n) {}\n};",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "class Dog {", explanation: "Start defining a Dog class (blueprint)", explanationZh: "开始定义 Dog 类（蓝图）" },
              { code: "public:", explanation: "Everything below is publicly accessible", explanationZh: "下面的内容都可以公开访问" },
              { code: "    std::string name;", explanation: "Public data member — the dog's name", explanationZh: "公开数据成员 — 狗的名字" },
              { code: "    Dog(std::string n) : name(n) {}", explanation: "Constructor — initializes name when creating a Dog", explanationZh: "构造函数 — 创建 Dog 时初始化名字" },
              { code: "    void bark() { std::cout << name << \" says Woof!\\n\"; }", explanation: "Method — a function that belongs to Dog", explanationZh: "方法 — 属于 Dog 类的函数" },
              { code: "};", explanation: "End of class definition (note the semicolon!)", explanationZh: "类定义结束（注意分号！）" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📐",
      content: `# Struct Basics · 结构体基础

🎯 **What you'll learn · 你将学到:**
- Creating custom data types with \`struct\`
- Grouping related data together
- How C++ structs compare to Python classes

A struct is like a **form template** 📋 — it groups related info (name, age, grade) into one package!

🔑 **Key things to notice · 注意要点:**
- \`struct Student { string name; int age; };\` — semicolon after \`}\`!
- Access members with dot: \`s.name\`, \`s.age\`
- Like a simplified Python class (data only)
- Great for competition programming!

👀 Think of structs as simple containers for grouping related data!`,
      code: `#include <iostream>
#include <string>
#include <cmath>
using namespace std;

struct Point {
    double x;
    double y;
};

struct Student {
    string name;
    int age;
    double gpa;
};

double distance(Point a, Point b) {
    double dx = a.x - b.x;
    double dy = a.y - b.y;
    return sqrt(dx*dx + dy*dy);
}

int main() {
    // Create and initialize structs
    Point p1 = {3.0, 4.0};
    Point p2 = {0.0, 0.0};
    
    cout << "Point: (" << p1.x << ", " << p1.y << ")" << endl;
    cout << "Distance: " << distance(p1, p2) << endl;
    
    Student s;
    s.name = "Alice";
    s.age = 16;
    s.gpa = 3.9;
    
    cout << s.name << " age " << s.age << " GPA " << s.gpa << endl;
    
    // Array of structs
    Student roster[3] = {
        {"Alice", 16, 3.9},
        {"Bob", 17, 3.5},
        {"Charlie", 15, 4.0}
    };
    
    for (int i = 0; i < 3; i++) {
        cout << roster[i].name << ": " << roster[i].gpa << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🎓",
      content: `# Classes: Data + Behavior · 类：数据+行为

🎯 **What you'll learn · 你将学到:**
- C++ classes combine data AND methods
- Constructor = Python's \`__init__\`
- How C++ OOP compares to Python OOP

Classes are **blueprints** 🏗️ — they define what data an object has AND what it can do. Same idea as Python classes!

🔑 **Key things to notice · 注意要点:**
- \`class Dog { };\` — semicolon after \`}\`!
- Constructor: same name as class (Python uses \`__init__\`)
- \`this->\` = Python's \`self.\`
- \`public:\` and \`private:\` sections control access

👀 Compare side-by-side with Python class — very similar structure!`,
      code: `#include <iostream>
#include <string>
using namespace std;

// Python:                     C++:
// class Dog:                  class Dog {
//     def __init__(self,...):  public:
//         self.name = name        string name;
//     def bark(self):              int age;
//         print("Woof!")           
//                                  void bark() {
//                                      cout << name << " says Woof!" << endl;
//                                  }
//                              };

class Dog {
public:
    string name;
    int age;
    
    // Constructor (like Python's __init__)
    Dog(string n, int a) {
        name = n;
        age = a;
    }
    
    void bark() {
        cout << name << " says Woof!" << endl;
    }
    
    void info() {
        cout << name << " is " << age << " years old" << endl;
    }
};

int main() {
    Dog d1("Rex", 5);
    Dog d2("Buddy", 3);
    
    d1.bark();    // Rex says Woof!
    d2.info();    // Buddy is 3 years old
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🔒",
      content: `# Public vs Private · 公有vs私有

🎯 **What you'll learn · 你将学到:**
- \`public\`: accessible from anywhere
- \`private\`: only accessible inside the class
- Getters and setters for controlled access

Public vs Private is like a **restaurant** 🍽️ — dining area is public, kitchen is private. You interact with the kitchen through the waiter (getters/setters)!

🔑 **Key things to notice · 注意要点:**
- \`private:\` data + \`public:\` methods = best practice
- Getters read private data; setters write with validation
- Python uses \`_underscore\` convention; C++ enforces with \`private:\`
- Classes default to private; structs default to public

👀 Notice how private members can only be accessed through public methods!`,
      code: `#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    double balance;  // Can't access from outside!
    string owner;

public:
    // Constructor
    BankAccount(string name, double initial) {
        owner = name;
        balance = initial;
    }
    
    // Getter (Python: @property)
    double getBalance() {
        return balance;
    }
    
    // Methods that safely modify private data
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited $" << amount << endl;
        }
    }
    
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrew $" << amount << endl;
        } else {
            cout << "Insufficient funds!" << endl;
        }
    }
    
    void display() {
        cout << owner << ": $" << balance << endl;
    }
};

int main() {
    BankAccount acc("Alice", 1000.0);
    acc.display();
    acc.deposit(500);
    acc.withdraw(200);
    acc.display();
    // acc.balance = 999999;  // ERROR! balance is private
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Create a Rectangle struct with width and height, and a function to compute the area.`,
      exercise: {
        prompt: "Create Rectangle struct with area function",
        promptZh: "创建Rectangle结构体和面积函数",
        starterCode: `#include <iostream>
using namespace std;

// Define Rectangle struct


// Function to compute area


int main() {
    Rectangle r = {5, 3};
    cout << area(r) << endl;
    return 0;
}`,
        expectedOutput: "15",
        hint: "struct Rectangle { int width; int height; }; then area returns r.width * r.height",
        hintZh: "struct Rectangle { int width; int height; }; area返回r.width * r.height",
        solution: `#include <iostream>
using namespace std;

struct Rectangle {
    int width;
    int height;
};

int area(Rectangle r) {
    return r.width * r.height;
}

int main() {
    Rectangle r = {5, 3};
    cout << area(r) << endl;
    return 0;
}`,
      },
    },
    {
      type: "text",
      emoji: "🔐",
      content: `# Encapsulation: Why Private Matters · 封装的重要性

🔧 **Chip says:** "Encapsulation is like a car dashboard — you see the steering wheel (public interface), but the engine is hidden (private). You don't need to know how fuel injection works to drive!"

## Benefits of Encapsulation:
1. **Data Protection** — Prevent invalid states (negative balance, age = -5)
2. **Easy to Change** — Internal implementation can change without affecting users
3. **Easier Debugging** — Only class methods modify data, so bugs are isolated
4. **Self-documenting** — Public methods show what the class CAN do

## Getter/Setter Pattern:
\`\`\`cpp
class Student {
private:
    string name;
    int grade;  // 0-100
public:
    string getName() const { return name; }
    int getGrade() const { return grade; }
    void setGrade(int g) {
        if (g >= 0 && g <= 100) grade = g;
        else cout << "Invalid grade!" << endl;
    }
};
\`\`\``,
    },
    {
      type: "code",
      emoji: "🎓",
      content: `# Student Grade System · 学生成绩系统

🎯 **What you'll learn · 你将学到:**
- Building a complete class with real-world purpose
- Methods that process internal data
- Combining everything from OOP lessons

A **real-world mini project** 🎓 — shows classes in action with constructors, methods, and practical logic!

🔑 **Key things to notice · 注意要点:**
- Private data stores grades; public methods analyze them
- Methods calculate averages, find highest/lowest
- The class encapsulates all student-related logic
- Same design pattern used in real school software!

👀 Think about what other methods you'd add to this class!`,
      code: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Student {
private:
    string name;
    vector<int> grades;
public:
    Student(string n) : name(n) {}
    
    void addGrade(int g) {
        if (g >= 0 && g <= 100) grades.push_back(g);
        else cout << "Invalid grade: " << g << endl;
    }
    
    double getAverage() const {
        if (grades.empty()) return 0.0;
        int sum = 0;
        for (int g : grades) sum += g;
        return (double)sum / grades.size();
    }
    
    char getLetterGrade() const {
        double avg = getAverage();
        if (avg >= 90) return 'A';
        if (avg >= 80) return 'B';
        if (avg >= 70) return 'C';
        if (avg >= 60) return 'D';
        return 'F';
    }
    
    void display() const {
        cout << name << " | Avg: " << getAverage()
             << " | Grade: " << getLetterGrade() << endl;
    }
};

int main() {
    Student s("Alice");
    s.addGrade(95);
    s.addGrade(87);
    s.addGrade(92);
    s.addGrade(-5);   // Rejected!
    s.display();
    
    vector<Student> roster;
    roster.push_back(Student("Bob"));
    roster.back().addGrade(78);
    roster.back().addGrade(85);
    roster.push_back(Student("Charlie"));
    roster.back().addGrade(96);
    
    for (const auto& st : roster) st.display();
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "⚡",
      content: `# Static Members & Operator Overloading · 静态成员和运算符重载

🎯 **What you'll learn · 你将学到:**
- \`static\` members shared across ALL objects
- Operator overloading: make \`+\`, \`==\` work with your classes
- Python's \`__add__\` → C++ \`operator+\`

Static members are like a **class scoreboard** 📊 — shared by everyone. Operator overloading teaches your objects to **understand math** ➕!

🔑 **Key things to notice · 注意要点:**
- \`static int count;\` = shared by ALL objects
- \`operator+\` defines what \`+\` does for your type
- Python \`__add__\` → C++ \`operator+\`
- Python \`__str__\` → C++ \`operator<<\` (with \`friend\`)

👀 Look at how \`operator+\` lets you add Vector2D objects with \`+\`!`,
      code: `#include <iostream>
using namespace std;

class Vector2D {
public:
    double x, y;
    static int count;
    
    Vector2D(double x = 0, double y = 0) : x(x), y(y) { count++; }
    
    Vector2D operator+(const Vector2D& other) const {
        return Vector2D(x + other.x, y + other.y);
    }
    
    bool operator==(const Vector2D& other) const {
        return x == other.x && y == other.y;
    }
    
    friend ostream& operator<<(ostream& os, const Vector2D& v) {
        os << "(" << v.x << ", " << v.y << ")";
        return os;
    }
};

int Vector2D::count = 0;

int main() {
    Vector2D a(3, 4), b(1, 2);
    Vector2D c = a + b;
    
    cout << a << " + " << b << " = " << c << endl;
    cout << "Vectors created: " << Vector2D::count << endl;
    cout << "a == b? " << (a == b) << endl;
    return 0;
}`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# OOP Concepts Quiz · OOP概念测验",
      quiz: [
        {
          question: "What does static int count; in a class mean?\n类中的static int count;是什么意思？",
          options: ["count is only accessible in main() · count只能在main()中访问", "count is shared across all objects of the class · count被该类所有对象共享", "Each object has its own count · 每个对象有自己的count", "count cannot be changed · count不能修改"],
          correctIndex: 1,
          explanation: "Static members belong to the class itself, not individual objects. All instances share the same static variable. · 静态成员属于类本身。",
        },
        {
          question: "What does operator+ let you do?\noperator+让你能做什么？",
          options: ["Add integers faster · 更快地加整数", "Use + with your custom class objects · 对自定义类对象使用+", "Override the = operator · 重载=运算符", "Create a new class · 创建新类"],
          correctIndex: 1,
          explanation: "Operator overloading lets you define how operators like +, -, == work with your custom types. · 运算符重载定义自定义类型的运算符行为。",
        },
        {
                  "question": "What keyword creates a struct in C++?\nC++中用什么关键字创建结构体？",
                  "options": [
                            "class",
                            "struct",
                            "type",
                            "record"
                  ],
                  "correctIndex": 1,
                  "explanation": "struct is used to group related variables together. Like a simple class with public members. · struct将相关变量组合在一起。"
        },
        {
                  "question": "What's the default access modifier in a class vs struct?\nclass和struct的默认访问修饰符有什么不同？",
                  "options": [
                            "Both public · 都是public",
                            "Both private · 都是private",
                            "class is private, struct is public · class是private，struct是public",
                            "class is public, struct is private · 反过来"
                  ],
                  "correctIndex": 2,
                  "explanation": "In class, members are private by default. In struct, they're public by default. · class默认private，struct默认public。"
        },
        {
                  "question": "What is a constructor?\n什么是构造函数？",
                  "options": [
                            "A function that deletes objects · 删除对象的函数",
                            "A special function that initializes an object · 初始化对象的特殊函数",
                            "A regular function · 普通函数",
                            "A loop · 循环"
                  ],
                  "correctIndex": 1,
                  "explanation": "Constructors are called automatically when creating an object. They initialize member variables. · 构造函数在创建对象时自动调用。"
        },
        {
                  "type": "coding",
                  "question": "Create a struct for a 2D point with x and y coordinates.\n创建一个包含x和y坐标的二维点结构体。",
                  "prompt": "Create struct Point with int x, y. Read values and print 'Point: (x, y)'",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Define Point struct here\n\nint main() {\n    Point p;\n    cin >> p.x >> p.y;\n    cout << \"Point: (\" << p.x << \", \" << p.y << \")\" << endl;\n    return 0;\n}",
                  "expectedOutput": "Point: (3, 4)",
                  "hint": "struct Point { int x, y; }; · 定义结构体",
                  "explanation": "struct groups related data. Access members with the dot operator. · struct组合相关数据，用.访问成员。"
        },
        {
                  "type": "coding",
                  "question": "Create a class with a constructor and a method.\n创建一个有构造函数和方法的类。",
                  "prompt": "Create class Rectangle with width/height, method area(). Print the area.",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Define Rectangle class here\n\nint main() {\n    int w, h;\n    cin >> w >> h;\n    Rectangle r(w, h);\n    cout << r.area() << endl;\n    return 0;\n}",
                  "expectedOutput": "20",
                  "hint": "class Rectangle { public: int w, h; Rectangle(int w, int h) : w(w), h(h) {} int area() { return w*h; } }; · 用构造函数初始化",
                  "explanation": "The constructor initializes width and height. area() returns their product. · 构造函数初始化，area()返回面积。"
        },
      ],
    },
    
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What's the difference between `struct` and `class` in C++?\n`struct`和`class`在C++中有什么区别？",
          options: ["struct members are public by default, class members are private · struct默认公有，class默认私有", "struct can't have methods · struct不能有方法", "There's no difference · 没有区别", "class can't have data · class不能有数据"],
          correctIndex: 0,
          explanation: "The only difference is default access: struct = public by default, class = private by default. Both can have methods, constructors, etc. · 唯一区别是默认访问权限。",
        },
      ],
    },
  ],
};

const cpp_4_3: Lesson = {
  id: "cpp-4-3",
  moduleId: "cpp-4",
  title: "Dynamic Memory",
  subtitle: "new, delete, and smart pointers · 动态内存管理",
  icon: "🧠",
  xp: 200,
  duration: "25 min",
  order: 17,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🧠",
      content: `# Dynamic Memory · 动态内存

🐍 **Py says:** "Python handles memory automatically — garbage collection cleans up. In C++, you sometimes allocate memory manually with \`new\` and MUST free it with \`delete\`."

🔧 **Chip says:** "Memory has two regions:
- **Stack**: fast, automatic, limited size (local variables)
- **Heap**: slower, manual, huge (dynamic allocation)

When you use \`new\`, memory comes from the heap. When you forget \`delete\`, you get a **memory leak**."

⚡ **Volt says:** "Modern C++ has smart pointers that handle cleanup automatically. But understanding raw pointers is essential for competitions and interviews."`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Inheritance & Polymorphism",
      concept: {
        title: "🧰 New Syntax: Inheritance & Polymorphism",
        titleZh: "新语法：继承和多态",
        syntaxCards: [
            {
              symbol: "class Child : public Parent",
              name: "Inheritance",
              nameZh: "继承",
              emoji: "🧬",
              description: "DNA inheritance 🧬! The child class gets ALL the parent's public members for free. Add new features on top!",
              example: "class Animal { public: void eat(); };\nclass Dog : public Animal {\n    void bark();\n};",
            },
            {
              symbol: "virtual void func()",
              name: "Virtual function",
              nameZh: "虚函数",
              emoji: "🎭",
              description: "Wearing a mask 🎭! Tells C++ \"this function might be different in child classes.\" Enables polymorphism.",
              example: "class Animal {\npublic:\n    virtual void speak() {\n        std::cout << \"...\";\n    }\n};",
            },
            {
              symbol: "void func() override",
              name: "Override parent function",
              nameZh: "覆盖父类函数",
              emoji: "✏️",
              description: "Rewrite ✏️ the parent's version! The child provides its OWN implementation. override keyword catches typos.",
              example: "class Dog : public Animal {\n    void speak() override {\n        std::cout << \"Woof!\";\n    }\n};",
            },
            {
              symbol: "Parent* ptr = &child",
              name: "Polymorphism",
              nameZh: "多态",
              emoji: "🎪",
              description: "Magic show 🎪! A parent pointer can hold child objects. Calling virtual functions runs the CHILD's version. One interface, many forms!",
              example: "Animal* a = new Dog();\na->speak(); // \"Woof!\" not \"...\"",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "class Shape {", explanation: "Base class — the parent blueprint", explanationZh: "基类 — 父级蓝图" },
              { code: "public:", explanation: "Public section", explanationZh: "公开部分" },
              { code: "    virtual double area() { return 0; }", explanation: "Virtual function — children can override this", explanationZh: "虚函数 — 子类可以覆盖" },
              { code: "};", explanation: "End of Shape class (don't forget the semicolon!)", explanationZh: "Shape 类结束（别忘了分号！）" },
              { code: "class Circle : public Shape {", explanation: "Circle inherits from Shape — gets all Shape's features", explanationZh: "Circle 继承 Shape — 获得 Shape 的所有功能" },
              { code: "    double area() override { return 3.14*r*r; }", explanation: "Override area() with circle's formula: πr²", explanationZh: "覆盖 area() 用圆的公式：πr²" },
              { code: "};", explanation: "End of Circle class", explanationZh: "Circle 类结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📦",
      content: `# new and delete · 分配和释放内存

🎯 **What you'll learn · 你将学到:**
- \`new\` allocates memory on the heap
- \`delete\` frees that memory
- Stack vs heap — where do variables live?

Memory management is like **renting an apartment** 🏢 — \`new\` signs the lease, \`delete\` ends it. Forget to \`delete\` = paying rent on empty space forever!

🔑 **Key things to notice · 注意要点:**
- Stack: automatic, freed when function ends
- Heap: manual with \`new\`/\`delete\`, YOU control lifetime
- \`int* p = new int(42);\` → creates on heap
- \`delete p;\` → frees memory (ALWAYS do this!)
- Python handles this automatically with garbage collection

👀 This is why C++ is harder but faster — you manage your own memory!`,
      code: `#include <iostream>
using namespace std;

int main() {
    // Stack allocation (automatic)
    int x = 42;  // Freed when function ends
    
    // Heap allocation (manual)
    int* p = new int;       // Allocate one int on heap
    *p = 42;
    cout << "*p = " << *p << endl;
    delete p;               // Free it! MUST do this!
    
    // Dynamic array
    int n = 5;
    int* arr = new int[n];  // Allocate array on heap
    for (int i = 0; i < n; i++) {
        arr[i] = i * 10;
    }
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    delete[] arr;  // Free array! Note the []
    
    // Why dynamic? Size can be decided at runtime!
    int size;
    cout << "Enter size: ";
    cin >> size;
    int* dynArr = new int[size];
    // ... use it ...
    delete[] dynArr;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🛡️",
      content: `# Vectors vs Raw Arrays · vector对比原始数组

🎯 **What you'll learn · 你将学到:**
- Why raw \`new[]\` arrays are dangerous
- How vectors handle memory automatically
- Modern C++ best practice: always prefer vectors!

Raw arrays are like juggling **sharp knives** 🔪 — one mistake = memory leak! Vectors are a **knife holder** 🧰 — safe and automatic!

🔑 **Key things to notice · 注意要点:**
- \`new int[n]\` → must remember \`delete[] arr\`
- \`vector<int>\` → automatically manages memory
- Vectors know their size; raw arrays don't
- Modern C++: NEVER use \`new[]\` — use vectors!

👀 See the danger of raw arrays vs the safety of vectors!`,
      code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // DON'T do this (old C++ style):
    int* arr = new int[100];
    // ... easy to forget delete[] ...
    delete[] arr;
    
    // DO this (modern C++):
    vector<int> vec(100);  // Automatically managed!
    // No delete needed -- vector cleans up itself
    
    // Vectors resize automatically
    vector<int> v;
    for (int i = 0; i < 1000; i++) {
        v.push_back(i);  // Grows as needed
    }
    cout << "Size: " << v.size() << endl;
    
    // For competitive programming, vectors are almost
    // always better than raw new/delete
    
    // Dynamic 2D array with vectors
    int rows = 3, cols = 4;
    vector<vector<int>> grid(rows, vector<int>(cols, 0));
    grid[1][2] = 42;
    cout << "Grid[1][2] = " << grid[1][2] << endl;
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "💡",
      content: `# Memory Best Practices · 内存管理最佳实践

⚡ **Volt's Rules:**

1. **Prefer vector over new[]** — vectors manage memory automatically
2. **Every new needs a delete** — or you leak memory
3. **new[] needs delete[]** — don't mix them!
4. **Set pointers to nullptr after delete** — prevents "dangling pointers"
5. **Use smart pointers in real projects** — \`unique_ptr\` and \`shared_ptr\`

🔧 **Chip says:** "Memory leaks are bugs where you allocate memory but never free it. In a short program, the OS cleans up when the program ends. But in long-running programs (servers, games), leaks accumulate and crash!"

🐍 **Py says:** "This is the ONE thing I love about Python — no memory management headaches! But the tradeoff is speed."`,
    },
    {
      type: "code",
      emoji: "✨",
      content: `# Structs with Dynamic Memory · 带动态内存的结构体

🎯 **What you'll learn · 你将学到:**
- Using vectors inside structs
- Combining custom types with dynamic collections
- Real-world data modeling

Structs with dynamic data are like **expandable binders** 📒 — fixed label, growing contents!

🔑 **Key things to notice · 注意要点:**
- Vectors inside structs = dynamic collections in custom types
- No manual memory management needed!
- Super common pattern in real programs
- Think: Team has name (fixed) + roster of players (dynamic)

👀 Notice how vectors inside structs give you the best of both worlds!`,
      code: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct Team {
    string name;
    vector<string> members;  // Vector handles memory!
    
    void addMember(string m) {
        members.push_back(m);
    }
    
    void display() {
        cout << name << " (" << members.size() << " members):" << endl;
        for (const string& m : members) {
            cout << "  - " << m << endl;
        }
    }
};

int main() {
    Team t;
    t.name = "Alpha";
    t.addMember("Alice");
    t.addMember("Bob");
    t.addMember("Charlie");
    t.display();
    
    // Vector of structs
    vector<Team> teams;
    teams.push_back({"Beta", {"Dave", "Eve"}});
    teams.push_back({"Gamma", {"Frank"}});
    
    for (auto& team : teams) {
        team.display();
    }
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "📊",
      content: `# Stack vs Heap: A Visual Guide · 栈vs堆

🏢 **Stack** (Auto-managed):

- Variables inside functions live here

- **Fast** allocation, **automatic** cleanup

- **Limited** size (~1-8 MB)

- Like a stack of plates: last on, first off

🏗️ **Heap** (You manage):

- new allocates memory here

- **Slower** allocation, **manual** cleanup with delete

- **Huge** size (GBs available)

- Like a warehouse: you rent and return space

\`\`\`
STACK (auto)          HEAP (manual)
┌──────────┐          ┌──────────────┐
│ int x=5  │          │ new int(42)  │ ← ptr
│ int y=10 │          │              │
│ int* ptr │──────────│ new int[100] │ ← arr
│ int* arr │──────────│              │
└──────────┘          └──────────────┘
 auto cleanup          YOU must delete!
\`\`\``,
    },
    {
      type: "code",
      emoji: "💀",
      content: `# Memory Leaks Demo · 内存泄漏演示

🎯 **What you'll learn · 你将学到:**
- What memory leaks are and why they're dangerous
- How to spot and prevent leaks
- Why Python programmers never worry about this!

A memory leak is like leaving the **faucet running** 🚰 — water (memory) keeps flowing but nobody's using it!

🔑 **Key things to notice · 注意要点:**
- Leak = \`new\` without matching \`delete\`
- In long-running programs, leaks crash the system!
- Tools like Valgrind help detect leaks
- Best prevention: vectors, smart pointers, and RAII

👀 This is the #1 reason modern C++ avoids raw \`new\`/\`delete\`!`,
      code: `#include <iostream>
using namespace std;

void leak1() {
    int* p = new int(42);
    // Function returns, p is gone, memory stays allocated = LEAK!
}

void leak2() {
    int* p = new int(10);
    p = new int(20);  // Lost first allocation!
    delete p;          // Only frees the second one
}

void noLeak() {
    int* p = new int(10);
    delete p;
    p = new int(20);
    delete p;
    p = nullptr;  // Good practice
}

int main() {
    // GOOD: clean up each iteration
    for (int i = 0; i < 5; i++) {
        int* p = new int(i);
        cout << *p << " ";
        delete p;
    }
    cout << endl;
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🛡️",
      content: `# Smart Pointers: Modern C++ Memory Safety · 智能指针

🎯 **What you'll learn · 你将学到:**
- \`unique_ptr\` and \`shared_ptr\` — automatic memory management
- No more \`delete\` needed!
- Modern C++ approaches Python's automatic memory management

Smart pointers are **self-returning library books** 📚 — they return themselves when you're done!

🔑 **Key things to notice · 注意要点:**
- \`unique_ptr<T>\` = one owner, auto-deletes
- \`shared_ptr<T>\` = multiple owners, deletes when last is done
- \`make_unique<T>()\` and \`make_shared<T>()\` to create
- Needs \`#include <memory>\`
- Modern rule: avoid raw \`new\`/\`delete\` — use smart pointers!

👀 Smart pointers give you C++'s power with Python's safety!`,
      code: `#include <iostream>
#include <memory>
#include <string>
using namespace std;

class Player {
public:
    string name;
    Player(string n) : name(n) { cout << name << " created" << endl; }
    ~Player() { cout << name << " destroyed" << endl; }
};

int main() {
    // unique_ptr -- ONE owner, auto-deletes
    {
        unique_ptr<Player> p1 = make_unique<Player>("Alice");
        cout << "Playing as " << p1->name << endl;
    }  // Alice auto-destroyed here
    
    cout << "---" << endl;
    
    // shared_ptr -- MULTIPLE owners
    shared_ptr<Player> p2;
    {
        shared_ptr<Player> p3 = make_shared<Player>("Bob");
        p2 = p3;  // Both own Bob
        cout << "Owners: " << p3.use_count() << endl;  // 2
    }  // p3 gone, p2 still owns Bob
    cout << "Bob alive! Owners: " << p2.use_count() << endl;  // 1
    
    // When to use which?
    // unique_ptr: Default (90%). Single ownership.
    // shared_ptr: Multiple things need the same resource.
    // raw pointer: Non-owning, legacy code, competitions.
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "📏",
      content: `# Rule of Three/Five · 三/五法则

If your class manages a resource (memory, file), you likely need:

## Rule of Three (C++98):
1. **Destructor** ~MyClass()
2. **Copy Constructor** MyClass(const MyClass& other)
3. **Copy Assignment** MyClass& operator=(const MyClass& other)

## Rule of Five (C++11) — add:
4. **Move Constructor** MyClass(MyClass&& other)
5. **Move Assignment** MyClass& operator=(MyClass&& other)

## Rule of Zero (Best!):
Use vector, string, unique_ptr — they handle memory FOR you. Then you don't need any of the five!

⚡ **Volt says:** "For competitions, use vectors and smart pointers. Know Rule of Five for interviews!"`,
    },
    
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What happens if you `new` memory but never `delete` it?\n如果`new`了内存但从不`delete`会怎样？",
          options: ["The compiler catches the error · 编译器会捕获错误", "Nothing — it's automatically freed · 没事——会自动释放", "The program crashes immediately · 程序立即崩溃", "Memory leak — the memory is wasted · 内存泄漏——内存被浪费"],
          correctIndex: 3,
          explanation: "Memory leaks mean allocated memory is never freed. The program keeps running but wastes memory. The OS reclaims it when the program exits. · 内存泄漏意味着分配的内存永远不会被释放。",
        },
        {
                  "question": "What does `new int` do?\n`new int` 做什么？",
                  "options": [
                            "Creates a stack variable · 创建栈变量",
                            "Allocates memory on the heap and returns a pointer · 在堆上分配内存并返回指针",
                            "Declares an integer · 声明整数",
                            "Deletes an integer · 删除整数"
                  ],
                  "correctIndex": 1,
                  "explanation": "new allocates memory on the heap (dynamic memory). You must delete it later! · new在堆上分配内存，必须delete释放。"
        },
        {
                  "question": "What happens if you forget to `delete` after `new`?\n如果new之后忘记delete会怎样？",
                  "options": [
                            "Nothing · 没事",
                            "Memory leak — the memory is never freed · 内存泄漏",
                            "Compilation error · 编译错误",
                            "Automatic cleanup · 自动清理"
                  ],
                  "correctIndex": 1,
                  "explanation": "Memory leaks waste RAM. In long-running programs, this can crash the system! · 内存泄漏浪费内存，可能导致系统崩溃。"
        },
        {
                  "question": "What's the difference between `delete p;` and `delete[] p;`?\n它们的区别是什么？",
                  "options": [
                            "No difference · 没区别",
                            "delete for single objects, delete[] for arrays · delete用于单对象，delete[]用于数组",
                            "delete[] is faster · delete[]更快",
                            "delete is for classes only · delete只用于类"
                  ],
                  "correctIndex": 1,
                  "explanation": "Use delete for new, delete[] for new[]. Mixing them is undefined behavior! · new对应delete，new[]对应delete[]。"
        },
        {
                  "question": "What is a smart pointer?\n什么是智能指针？",
                  "options": [
                            "A faster pointer · 更快的指针",
                            "A pointer that automatically manages memory · 自动管理内存的指针",
                            "A pointer to smart devices · 指向智能设备的指针",
                            "A debugging tool · 调试工具"
                  ],
                  "correctIndex": 1,
                  "explanation": "Smart pointers (unique_ptr, shared_ptr) automatically delete memory when no longer needed. · 智能指针自动释放内存。"
        },
        {
                  "type": "coding",
                  "question": "Allocate an integer on the heap, set its value, print it, and free the memory.\n在堆上分配整数，设值，打印，释放内存。",
                  "prompt": "Use new to allocate, set to 42, print, then delete",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Allocate, set, print, delete\n    \n    return 0;\n}",
                  "expectedOutput": "42",
                  "hint": "int *p = new int; *p = 42; cout << *p; delete p; · 分配、赋值、打印、释放",
                  "explanation": "new allocates, *p accesses the value, delete frees the memory. Always pair new with delete! · new分配，*p访问，delete释放。"
        },
        {
                  "type": "coding",
                  "question": "Allocate a dynamic array of n integers, fill with 1 to n, print sum, and free.\n分配n个整数的动态数组，填入1到n，打印和，释放。",
                  "prompt": "Read n, allocate array, fill 1..n, print sum, delete array",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // Dynamic array operations\n    \n    return 0;\n}",
                  "expectedOutput": "15",
                  "hint": "int *arr = new int[n]; fill with loop; sum with loop; delete[] arr; · 用new int[n]分配",
                  "explanation": "new int[n] allocates an array. Always use delete[] (not delete) for arrays! · new int[n]分配数组，用delete[]释放。"
        },
      ],
    },
  ],
};

const cpp_4_4: Lesson = {
  id: "cpp-4-4",
  moduleId: "cpp-4",
  title: "Inheritance & Polymorphism",
  subtitle: "OOP hierarchy · 面向对象继承和多态",
  icon: "🌳",
  xp: 200,
  duration: "30 min",
  order: 18,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🌳",
      content: `# Inheritance · 继承

🐍 **Py says:** "Inheritance works similarly! A child class extends a parent class."

🐍 **Python:**
\`\`\`python
class Animal:
    def speak(self):
        print("...")

class Dog(Animal):
    def speak(self):
        print("Woof!")
\`\`\`

⚡ **C++:**
\`\`\`cpp
class Animal {
public:
    virtual void speak() {
        cout << "..." << endl;
    }
};

class Dog : public Animal {
public:
    void speak() override {
        cout << "Woof!" << endl;
    }
};
\`\`\`

⚡ **Volt says:** "The \`virtual\` keyword enables polymorphism — calling the right method based on the actual object type, not the pointer type."`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Memory Management",
      concept: {
        title: "🧰 New Syntax: Memory Management",
        titleZh: "新语法：内存管理",
        syntaxCards: [
            {
              symbol: "new Type",
              name: "Allocate on heap",
              nameZh: "在堆上分配",
              emoji: "🏗️",
              description: "Build something on the heap 🏗️! Unlike stack variables, heap memory persists until YOU delete it. Returns a pointer.",
              example: "int* ptr = new int(42);\n// ptr points to heap memory",
            },
            {
              symbol: "delete ptr",
              name: "Free heap memory",
              nameZh: "释放堆内存",
              emoji: "🗑️",
              description: "Clean up after yourself 🗑️! Every new needs a delete, or you get a memory leak. Python does this automatically!",
              example: "int* ptr = new int(42);\ndelete ptr;\nptr = nullptr;",
            },
            {
              symbol: "std::unique_ptr<T>",
              name: "Unique smart pointer",
              nameZh: "独占智能指针",
              emoji: "👤",
              description: "One owner only 👤! Automatically deletes memory when it goes out of scope. No manual delete needed. RAII in action!",
              example: "#include <memory>\nauto ptr = std::make_unique<int>(42);\n// auto-deleted when scope ends!",
            },
            {
              symbol: "std::shared_ptr<T>",
              name: "Shared smart pointer",
              nameZh: "共享智能指针",
              emoji: "👥",
              description: "Multiple owners 👥! Counts how many pointers share the object. Deletes when the LAST one is gone. Like reference counting.",
              example: "auto p1 = std::make_shared<int>(42);\nauto p2 = p1; // both own it\n// deleted when both are gone",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "#include <memory>", explanation: "Import smart pointer library", explanationZh: "引入智能指针库" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    auto ptr = std::make_unique<int>(42);", explanation: "Create a unique_ptr owning an int with value 42", explanationZh: "创建一个独占指针，管理值为42的int" },
              { code: "    std::cout << *ptr << std::endl;", explanation: "Dereference to get the value — prints 42", explanationZh: "解引用获取值 — 打印 42" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}  // ptr auto-deleted here!", explanation: "End of main — when ptr goes out of scope, memory freed automatically", explanationZh: "main 结束 — 当 ptr 离开作用域时，内存自动释放" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🐾",
      content: `# Inheritance Basics · 继承基础

🎯 **What you'll learn · 你将学到:**
- Creating child classes that extend parent classes
- \`: public Base\` syntax for inheritance
- \`virtual\` functions for polymorphism

Inheritance is like **family traits** 👨‍👩‍👧 — child inherits from parent and adds unique features!

🔑 **Key things to notice · 注意要点:**
- \`class Dog : public Animal\` — Dog inherits from Animal
- Python \`class Dog(Animal)\` → C++ \`class Dog : public Animal\`
- \`virtual\` = method can be overridden
- \`override\` keyword confirms intentional overriding

👀 Notice the \`: public\` syntax — it replaces Python's parentheses!`,
      code: `#include <iostream>
#include <string>
using namespace std;

class Animal {
protected:  // Accessible by subclasses (Python: convention _name)
    string name;
public:
    Animal(string n) : name(n) {}
    
    virtual void speak() {
        cout << name << " says ..." << endl;
    }
    
    string getName() { return name; }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}  // Call parent constructor
    
    void speak() override {
        cout << name << " says Woof!" << endl;
    }
    
    void fetch() {
        cout << name << " fetches the ball!" << endl;
    }
};

class Cat : public Animal {
public:
    Cat(string n) : Animal(n) {}
    
    void speak() override {
        cout << name << " says Meow!" << endl;
    }
};

int main() {
    Dog d("Rex");
    Cat c("Whiskers");
    
    d.speak();   // Rex says Woof!
    c.speak();   // Whiskers says Meow!
    d.fetch();   // Dog-specific method
    
    // Polymorphism: pointer to base class
    Animal* animals[] = {&d, &c};
    for (auto a : animals) {
        a->speak();  // Calls the RIGHT version!
    }
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🎮",
      content: `# Practical OOP: Game Characters · 实际OOP：游戏角色

🎯 **What you'll learn · 你将学到:**
- Building a game character hierarchy with OOP
- Abstract base classes and polymorphism
- Real-world OOP design in action!

OOP in action with a **video game** 🎮! Different character types share common traits but have unique abilities. This is how real games are coded!

🔑 **Key things to notice · 注意要点:**
- Base class: common attributes (name, HP, attack)
- Derived classes: unique abilities
- Virtual functions let each type behave differently
- This pattern is used in real game engines!

👀 Think about what other character types you could add!`,
      code: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Character {
protected:
    string name;
    int hp;
    int attack;
public:
    Character(string n, int h, int a) : name(n), hp(h), attack(a) {}
    
    virtual void specialMove() = 0;  // Pure virtual = abstract
    
    void takeDamage(int dmg) {
        hp -= dmg;
        if (hp < 0) hp = 0;
        cout << name << " takes " << dmg << " damage! HP: " << hp << endl;
    }
    
    bool isAlive() { return hp > 0; }
    string getName() { return name; }
    int getAttack() { return attack; }
};

class Warrior : public Character {
public:
    Warrior(string n) : Character(n, 100, 15) {}
    
    void specialMove() override {
        cout << name << " uses SHIELD BASH! (double damage)" << endl;
    }
};

class Mage : public Character {
public:
    Mage(string n) : Character(n, 60, 25) {}
    
    void specialMove() override {
        cout << name << " casts FIREBALL! (area damage)" << endl;
    }
};

int main() {
    Warrior w("Thor");
    Mage m("Gandalf");
    
    w.specialMove();
    m.specialMove();
    
    m.takeDamage(w.getAttack());
    w.takeDamage(m.getAttack());
    
    // Polymorphic container
    vector<Character*> party = {&w, &m};
    cout << "\\nParty:" << endl;
    for (auto c : party) {
        cout << c->getName() << " alive: " << c->isAlive() << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "🐍",
      content: `# Python vs C++ OOP · Python和C++ OOP对比

| Feature | Python | C++ |
|---------|--------|-----|
| Inheritance | \`class Dog(Animal)\` | \`class Dog : public Animal\` |
| Constructor | \`__init__(self)\` | \`ClassName()\` |
| Call parent | \`super().__init__()\` | \`: ParentClass()\` |
| Virtual | All methods are virtual | Must mark \`virtual\` |
| Override | Just redefine | \`override\` keyword |
| Abstract | \`@abstractmethod\` | \`= 0\` (pure virtual) |
| Access | Convention (\`_name\`) | \`private/protected/public\` |
| Multiple inheritance | Supported | Supported (but complex) |

🔧 **Chip says:** "C++'s virtual dispatch uses a 'vtable' — a hidden lookup table. Non-virtual calls are faster because the compiler knows exactly which function to call at compile time!"`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Create a Shape base class with an area() method, and Circle and Square subclasses.`,
      exercise: {
        prompt: "Create Shape hierarchy with area()",
        promptZh: "创建Shape层次结构和area()方法",
        starterCode: `#include <iostream>
#include <cmath>
using namespace std;

class Shape {
public:
    virtual double area() = 0;
};

// Create Circle and Square classes


int main() {
    Circle c(5.0);
    Square s(4.0);
    cout << "Circle: " << c.area() << endl;
    cout << "Square: " << s.area() << endl;
    return 0;
}`,
        expectedOutput: "Circle: 78.5398\nSquare: 16",
        hint: "Circle area = pi * r * r, Square area = side * side. Use M_PI or 3.14159.",
        hintZh: "圆面积 = pi * r * r，正方形面积 = side * side",
        solution: `#include <iostream>
#include <cmath>
using namespace std;

class Shape {
public:
    virtual double area() = 0;
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override {
        return M_PI * radius * radius;
    }
};

class Square : public Shape {
    double side;
public:
    Square(double s) : side(s) {}
    double area() override {
        return side * side;
    }
};

int main() {
    Circle c(5.0);
    Square s(4.0);
    cout << "Circle: " << c.area() << endl;
    cout << "Square: " << s.area() << endl;
    return 0;
}`,
      },
    },
    {
      type: "text",
      emoji: "🎭",
      content: `# Abstract Classes & Interfaces · 抽象类和接口

A class with a **pure virtual function** (= 0) is abstract — can't be instantiated.

\`\`\`cpp
class Shape {  // ABSTRACT
public:
    virtual double area() = 0;      // Pure virtual
    virtual string name() = 0;
    void display() {                 // Regular method
        cout << name() << ": area = " << area() << endl;
    }
};
\`\`\`

## Interface Pattern:
An abstract class with ONLY pure virtual functions:
\`\`\`cpp
class Printable {
public:
    virtual void print() const = 0;
    virtual ~Printable() = default;
};

class Serializable {
public:
    virtual string serialize() const = 0;
    virtual ~Serializable() = default;
};

// Implement multiple interfaces!
class Document : public Printable, public Serializable { ... };
\`\`\``,
    },
    {
      type: "text",
      emoji: "⚠️",
      content: `# Virtual Destructor — Critical Rule! · 虚析构函数

If a class has virtual methods, give it a **virtual destructor**.

## Without virtual destructor:
\`\`\`cpp
class Base {
public:
    ~Base() { }  // NOT virtual!
};
class Derived : public Base {
    int* data;
public:
    Derived() : data(new int[100]) {}
    ~Derived() { delete[] data; }
};

Base* obj = new Derived();
delete obj;  // ONLY calls ~Base()! data LEAKED!
\`\`\`

## Fix:
\`\`\`cpp
class Base {
public:
    virtual ~Base() = default;  // VIRTUAL!
};
// Now delete obj calls ~Derived() then ~Base(). No leak!
\`\`\``,
    },
    {
      type: "code",
      emoji: "⚔️",
      content: `# RPG Character Hierarchy · RPG角色层次结构

🎯 **What you'll learn · 你将学到:**
- Multi-level inheritance hierarchy
- Abstract classes with pure virtual functions
- The full OOP toolkit together

The **boss battle** 👾 of OOP — a complete RPG system combining everything about classes, inheritance, and polymorphism!

🔑 **Key things to notice · 注意要点:**
- Abstract base class with \`= 0\` pure virtual functions
- Multiple derived classes with unique implementations
- Vectors of base class pointers for polymorphism
- Professional-grade OOP design!

👀 Study the hierarchy — this is how real RPGs organize code!`,
      code: `#include <iostream>
#include <string>
#include <vector>
#include <memory>
using namespace std;

class Character {
protected:
    string name;
    int hp, maxHp, atk;
public:
    Character(string n, int h, int a) : name(n), hp(h), maxHp(h), atk(a) {}
    virtual ~Character() = default;
    
    virtual void specialAbility() = 0;
    virtual string className() const = 0;
    
    void takeDamage(int dmg) {
        hp = max(0, hp - dmg);
        cout << name << " takes " << dmg << " dmg! HP: " << hp << "/" << maxHp << endl;
    }
    
    bool isAlive() const { return hp > 0; }
    string getName() const { return name; }
    
    void status() const {
        cout << "[" << className() << "] " << name
             << " HP:" << hp << "/" << maxHp << " ATK:" << atk << endl;
    }
};

class Warrior : public Character {
public:
    Warrior(string n) : Character(n, 120, 15) {}
    string className() const override { return "Warrior"; }
    void specialAbility() override {
        cout << name << " uses SHIELD WALL!" << endl;
    }
};

class Mage : public Character {
public:
    Mage(string n) : Character(n, 70, 30) {}
    string className() const override { return "Mage"; }
    void specialAbility() override {
        cout << name << " casts METEOR!" << endl;
    }
};

int main() {
    vector<unique_ptr<Character>> party;
    party.push_back(make_unique<Warrior>("Thor"));
    party.push_back(make_unique<Mage>("Gandalf"));
    
    for (auto& c : party) {
        c->status();
        c->specialAbility();
    }
    
    party[0]->takeDamage(25);
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "💎",
      content: `# Multiple Inheritance Warning · 多重继承警告

C++ allows inheriting from multiple classes, but beware!

\`\`\`cpp
class A { public: void hello() { cout << "A"; } };
class B { public: void hello() { cout << "B"; } };
class C : public A, public B {};

C obj;
// obj.hello();  // AMBIGUOUS! Which hello()?
obj.A::hello();   // Must specify
\`\`\`

## Diamond Problem:
\`\`\`
    Base
   /    \\
  A      B
   \\    /
    C       ← TWO copies of Base!
\`\`\`
**Fix:** virtual inheritance: class A : virtual public Base {}

⚡ **Volt says:** "Avoid multiple inheritance of data classes. It's fine for interfaces (pure virtual classes)."`,
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Inheritance Quiz · 继承测验",
      quiz: [
        {
          question: "What happens if a base class destructor is NOT virtual and you delete through a base pointer?\n基类析构函数不是virtual通过基类指针delete会怎样？",
          options: ["Works fine · 正常运行", "Compilation error · 编译错误", "Only base destructor runs — derived resources leak! · 只运行基类析构函数！", "Program crashes · 程序崩溃"],
          correctIndex: 2,
          explanation: "Without virtual destructor, only ~Base() is called. ~Derived() is skipped, causing resource leaks. · 没有虚析构函数只调用~Base()。",
        },
        {
          question: "Which keyword prevents overriding a virtual function? (C++11)\n哪个关键字阻止重写虚函数？",
          options: ["static", "private", "const", "final"],
          correctIndex: 3,
          explanation: "The 'final' keyword prevents further overriding. · 'final'阻止进一步重写。",
        },
        {
                  "question": "How does C++ denote inheritance?\nC++如何表示继承？",
                  "options": [
                            "class Dog(Animal):",
                            "class Dog extends Animal",
                            "class Dog : public Animal",
                            "class Dog inherits Animal"
                  ],
                  "correctIndex": 2,
                  "explanation": "C++ uses colon syntax: class Derived : public Base. Python uses parentheses. · C++用冒号语法表示继承。"
        },
        {
                  "question": "What does `virtual` keyword enable?\nvirtual关键字启用什么？",
                  "options": [
                            "Faster code · 更快的代码",
                            "Polymorphism — derived classes can override the function · 多态性，派生类可以重写函数",
                            "Static binding · 静态绑定",
                            "Multiple inheritance · 多重继承"
                  ],
                  "correctIndex": 1,
                  "explanation": "virtual enables runtime polymorphism — the correct overridden function is called based on the actual object type. · virtual启用运行时多态。"
        },
        {
                  "question": "What is a pure virtual function?\n什么是纯虚函数？",
                  "options": [
                            "A function that returns void · 返回void的函数",
                            "A function with = 0, making the class abstract · 带=0的函数，使类成为抽象类",
                            "A static function · 静态函数",
                            "A private function · 私有函数"
                  ],
                  "correctIndex": 1,
                  "explanation": "virtual void func() = 0; makes a pure virtual function. The class becomes abstract and can't be instantiated. · 纯虚函数使类成为抽象类。"
        },
        {
                  "type": "coding",
                  "question": "Create a base class Shape and derived class Circle with an area method.\n创建基类Shape和派生类Circle，包含面积方法。",
                  "prompt": "Shape has virtual double area(). Circle overrides it. Print circle area.",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Define Shape and Circle classes\n\nint main() {\n    double r;\n    cin >> r;\n    Circle c(r);\n    cout << fixed;\n    cout.precision(2);\n    cout << c.area() << endl;\n    return 0;\n}",
                  "expectedOutput": "78.54",
                  "hint": "class Shape { public: virtual double area() = 0; }; class Circle : public Shape { ... }; · 虚函数和继承",
                  "explanation": "Override virtual functions in derived classes to implement polymorphism. · 在派生类中重写虚函数实现多态。"
        },
        {
                  "type": "coding",
                  "question": "Demonstrate polymorphism with a base pointer.\n用基类指针演示多态。",
                  "prompt": "Create Shape* pointing to Circle, call area() through pointer",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual double area() = 0;\n    virtual ~Shape() {}\n};\n\n// Add Circle class\n\nint main() {\n    double r;\n    cin >> r;\n    Shape* s = new Circle(r);\n    cout << fixed;\n    cout.precision(2);\n    cout << s->area() << endl;\n    delete s;\n    return 0;\n}",
                  "expectedOutput": "28.27",
                  "hint": "class Circle : public Shape { double r; public: Circle(double r):r(r){} double area() override { return 3.14159*r*r; } }; · 继承并重写",
                  "explanation": "A base class pointer can call derived class methods through virtual dispatch. · 基类指针通过虚函数调用派生类方法。"
        },
      ],
    },
    
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What does `= 0` mean in `virtual void speak() = 0;`?\n`virtual void speak() = 0;`中的`= 0`是什么意思？",
          options: ["The function does nothing · 函数什么都不做", "It's a pure virtual function — subclasses MUST implement it · 纯虚函数——子类必须实现", "The function returns 0 · 函数返回0", "The function is deleted · 函数被删除"],
          correctIndex: 1,
          explanation: "= 0 makes it a pure virtual function (abstract). The class becomes abstract and can't be instantiated directly. · = 0使之成为纯虚函数，类变为抽象类。",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE CPP-5: STL POWER (3 lessons)
// ═══════════════════════════════════════════════════════════════

const cpp_5_1: Lesson = {
  id: "cpp-5-1",
  moduleId: "cpp-5",
  title: "Maps & Sets",
  subtitle: "Key-value pairs and unique collections · 映射和集合",
  icon: "🗺️",
  xp: 200,
  duration: "25 min",
  order: 19,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🗺️",
      content: `# STL Containers · STL容器

🐍 **Py says:** "Python has \`dict\` and \`set\`. C++ has \`map\` and \`set\` — they work similarly but are sorted by default!"

⚡ **Volt says:** "The STL (Standard Template Library) gives you powerful, optimized data structures. Know these well for competitions!"

| Python | C++ (sorted) | C++ (hash/fast) |
|--------|-------------|------------------|
| \`dict\` | \`map\` | \`unordered_map\` |
| \`set\` | \`set\` | \`unordered_set\` |
| — | \`multiset\` | \`unordered_multiset\` |

🔧 **Chip says:** "\`map\` and \`set\` use balanced BSTs — O(log n) operations. \`unordered_\` versions use hash tables — O(1) average."`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: STL Containers",
      concept: {
        title: "🧰 New Syntax: STL Containers",
        titleZh: "新语法：STL 容器",
        syntaxCards: [
            {
              symbol: "std::map<K,V>",
              name: "Map (key-value pairs)",
              nameZh: "映射（键值对）",
              emoji: "🗺️",
              description: "Like Python's dict 🗺️! Keys are sorted automatically. Each key maps to one value. Use [] to access.",
              example: "#include <map>\nstd::map<std::string, int> ages;\nages[\"Alice\"] = 16;",
            },
            {
              symbol: "std::set<T>",
              name: "Set (unique values)",
              nameZh: "集合（唯一值）",
              emoji: "🎯",
              description: "No duplicates allowed 🎯! Like Python's set. Values are auto-sorted. Great for checking membership.",
              example: "#include <set>\nstd::set<int> s = {3, 1, 2, 1};\n// s = {1, 2, 3} (sorted, no dup)",
            },
            {
              symbol: "std::unordered_map<K,V>",
              name: "Hash map (faster lookup)",
              nameZh: "哈希映射（更快查找）",
              emoji: "⚡",
              description: "Like map but uses hashing ⚡ for O(1) average lookup! Not sorted, but much faster for large data.",
              example: "#include <unordered_map>\nstd::unordered_map<std::string,int> m;\nm[\"key\"] = 42;",
            },
            {
              symbol: "std::pair<A,B>",
              name: "Pair (two values)",
              nameZh: "对（两个值）",
              emoji: "👫",
              description: "A couple 👫! Holds exactly two values of any types. Access with .first and .second. Used everywhere in STL!",
              example: "std::pair<std::string,int> p = {\"Alice\", 16};\nstd::cout << p.first; // Alice",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "#include <map>", explanation: "Import map container", explanationZh: "引入 map 容器" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    std::map<std::string, int> scores;", explanation: "Create a map: string keys → int values", explanationZh: "创建映射：字符串键 → 整数值" },
              { code: "    scores[\"Alice\"] = 95;", explanation: "Insert key \"Alice\" with value 95", explanationZh: "插入键 \"Alice\"，值为 95" },
              { code: "    for (auto& [name, score] : scores)", explanation: "Structured binding: loop through all key-value pairs", explanationZh: "结构化绑定：遍历所有键值对" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📖",
      content: `# map — Like Python's dict · map——类似Python的dict

🎯 **What you'll learn · 你将学到:**
- \`map<Key, Value>\` = C++'s sorted dictionary
- Inserting, accessing, and iterating key-value pairs
- Comparison with Python's \`dict\`

\`map\` is like a **phone book** 📞 — look up a name (key) and get a number (value). C++'s map keeps entries sorted!

🔑 **Key things to notice · 注意要点:**
- \`map<string, int> ages;\` — specify key AND value types
- \`ages["Alice"] = 15;\` — same syntax as Python dict!
- \`map\` keeps keys SORTED (Python dict keeps insertion order)
- \`.count(key)\` or \`.find(key)\` to check if key exists
- Needs \`#include <map>\`

👀 Notice that map entries are always sorted by key!`,
      code: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    // Python: scores = {"Alice": 95, "Bob": 87}
    map<string, int> scores;
    scores["Alice"] = 95;
    scores["Bob"] = 87;
    scores["Charlie"] = 92;
    
    // Access (Python: scores["Alice"])
    cout << "Alice: " << scores["Alice"] << endl;
    
    // Check existence (Python: "Alice" in scores)
    if (scores.count("Alice")) {
        cout << "Alice found!" << endl;
    }
    
    // Iterate (automatically sorted by key!)
    // Python: for name, score in scores.items():
    for (auto& [name, score] : scores) {
        cout << name << ": " << score << endl;
    }
    // Output: Alice: 95, Bob: 87, Charlie: 92 (sorted!)
    
    // Size (Python: len(scores))
    cout << "Size: " << scores.size() << endl;
    
    // Erase (Python: del scores["Bob"])
    scores.erase("Bob");
    
    // Word frequency counter (very common pattern!)
    string words[] = {"the", "cat", "the", "hat", "the"};
    map<string, int> freq;
    for (const string& w : words) {
        freq[w]++;  // Auto-initializes to 0!
    }
    for (auto& [word, count] : freq) {
        cout << word << ": " << count << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🎯",
      content: `# set — Unique Sorted Collection · set——唯一有序集合

🎯 **What you'll learn · 你将学到:**
- \`set<T>\` stores unique values in sorted order
- Insert, find, and erase operations
- Comparison with Python's \`set\`

A \`set\` is like a **guest list** 📋 — each name appears once, automatically alphabetized!

🔑 **Key things to notice · 注意要点:**
- \`set<int> s;\` — unique values, auto-sorted
- \`.insert(x)\` = add (duplicates ignored)
- \`.count(x)\` = 0 or 1
- \`.erase(x)\` = remove
- C++ \`set\` is sorted; Python \`set\` is unordered

👀 Try inserting duplicates — the set silently ignores them!`,
      code: `#include <iostream>
#include <set>
#include <vector>
using namespace std;

int main() {
    // Python: s = {3, 1, 4, 1, 5, 9}
    set<int> s = {3, 1, 4, 1, 5, 9};
    // Duplicates removed, sorted: {1, 3, 4, 5, 9}
    
    cout << "Set: ";
    for (int x : s) cout << x << " ";
    cout << endl;
    
    // Insert (Python: s.add(7))
    s.insert(7);
    s.insert(3);  // Already exists, ignored
    
    // Check membership (Python: 4 in s)
    if (s.count(4)) {
        cout << "4 is in the set" << endl;
    }
    
    // Remove (Python: s.remove(1))
    s.erase(1);
    
    // Size
    cout << "Size: " << s.size() << endl;
    
    // Practical: Remove duplicates from vector
    vector<int> v = {5, 2, 8, 2, 5, 1, 8, 3};
    set<int> unique(v.begin(), v.end());
    cout << "Unique: ";
    for (int x : unique) cout << x << " ";
    cout << endl;
    
    // Find first element >= value (lower_bound)
    auto it = s.lower_bound(4);
    if (it != s.end()) {
        cout << "First >= 4: " << *it << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Count the frequency of each character in a string using a map.`,
      exercise: {
        prompt: "Count character frequency",
        promptZh: "统计字符频率",
        starterCode: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    // Count frequency of each character
    
    
    return 0;
}`,
        expectedOutput: "a:2 b:1 c:1 ...",
        hint: "Use map<char, int> and freq[c]++ for each character",
        hintZh: "用map<char, int>和freq[c]++统计每个字符",
        solution: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    map<char, int> freq;
    for (char c : s) {
        freq[c]++;
    }
    
    for (auto& [ch, count] : freq) {
        cout << ch << ":" << count << " ";
    }
    cout << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "code",
      emoji: "⚡",
      content: `# unordered_map — Hash Map (Faster!) · 哈希表（更快！）

🎯 **What you'll learn · 你将学到:**
- \`unordered_map\` = hash table, faster than \`map\`
- O(1) average lookup vs \`map\`'s O(log n)
- When to use \`map\` vs \`unordered_map\`

\`unordered_map\` uses a **hash function** 🗄️ to jump directly to the right spot — WAY faster than sorted search!

🔑 **Key things to notice · 注意要点:**
- Same interface as \`map\`, but O(1) average
- Closer to Python's \`dict\` (both use hashing!)
- Not sorted — iteration order is unpredictable
- Use \`map\` for sorted keys; \`unordered_map\` for speed
- Needs \`#include <unordered_map>\`

👀 For most problems, \`unordered_map\` is the better choice!`,
      code: `#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;

int main() {
    // Same API as map, but uses hashing
    // Average O(1) instead of O(log n)!
    unordered_map<string, int> scores;
    scores["Alice"] = 95;
    scores["Bob"] = 87;
    
    // Access same as map
    cout << scores["Alice"] << endl;
    
    // When to use which?
    // map:           sorted keys, O(log n), uses less memory
    // unordered_map: unsorted, O(1) average, uses more memory
    
    // For competitive programming:
    // - Need sorted order? -> map
    // - Need fastest lookup? -> unordered_map
    // - Default choice? -> unordered_map (usually faster)
    
    // Two Sum problem (classic!)
    int arr[] = {2, 7, 11, 15};
    int target = 9;
    unordered_map<int, int> seen;
    for (int i = 0; i < 4; i++) {
        int complement = target - arr[i];
        if (seen.count(complement)) {
            cout << "Found pair: indices " 
                 << seen[complement] << " and " << i << endl;
        }
        seen[arr[i]] = i;
    }
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "🔄",
      content: `# Iterator Categories · 迭代器类别

Iterators are the "glue" between containers and algorithms — like generalized pointers.

| Category | Can do | Example containers |
|----------|--------|--------------------|
| **Input** | Read forward once | istream_iterator |
| **Forward** | Read/write forward, multiple passes | unordered_set |
| **Bidirectional** | + backward | set, map, list |
| **Random Access** | Any position O(1) | vector, deque, array |

\`\`\`cpp
auto it = v.begin();  // First element
auto end = v.end();   // PAST last element
*it                    // Get value
++it                   // Move forward
--it                   // Backward (bidirectional+)
it + n                 // Jump (random access only)
\`\`\``,
    },
    {
      type: "code",
      emoji: "📇",
      content: `# multimap & multiset: Allowing Duplicates · 允许重复

🎯 **What you'll learn · 你将学到:**
- \`multimap\` allows duplicate keys
- \`multiset\` allows duplicate values
- When duplicates are actually useful!

Regular containers are **exclusive clubs** 🎪 — no duplicates. Multi-containers are **open events** — everyone welcome!

🔑 **Key things to notice · 注意要点:**
- \`multimap<string, int>\` = same key can appear multiple times
- \`multiset<int>\` = same value can appear multiple times
- \`.count(key)\` can return > 1
- \`.equal_range(key)\` gets all values for a key
- Python equivalent: \`defaultdict(list)\`

👀 Think about when you'd need duplicate keys!`,
      code: `#include <iostream>
#include <map>
#include <set>
#include <string>
using namespace std;

int main() {
    // multiset -- sorted, allows duplicates
    multiset<int> ms = {3, 1, 4, 1, 5, 9, 2, 6, 5};
    cout << "multiset: ";
    for (int x : ms) cout << x << " ";  // 1 1 2 3 4 5 5 6 9
    cout << endl;
    cout << "Count of 5: " << ms.count(5) << endl;  // 2
    
    // multimap -- duplicate keys allowed
    multimap<string, int> grades;
    grades.insert({"Alice", 95});
    grades.insert({"Alice", 87});
    grades.insert({"Bob", 92});
    
    cout << "\\nAll grades:" << endl;
    for (auto& [name, grade] : grades) {
        cout << name << ": " << grade << endl;
    }
    
    // Find all entries for "Alice"
    auto range = grades.equal_range("Alice");
    cout << "\\nAlice's grades: ";
    for (auto it = range.first; it != range.second; ++it) {
        cout << it->second << " ";
    }
    cout << endl;
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "🤔",
      content: `# When to Use Which Container? · 选择容器指南

**Need key-value pairs?**
- Sorted keys? → map (O(log n))

- Fastest access? → unordered_map (O(1) avg)

- Duplicate keys? → multimap

**Need unique elements?**
- Sorted? → set

- Fastest? → unordered_set

**Need ordered sequence?**
- Default → vector (random access, fast end ops)

- Both ends → deque

- Middle insert/delete → list

**Restricted access?**
- LIFO → stack

- FIFO → queue

- By priority → priority_queue

⚡ **Competition Tips:**
- Default to vector

- map/set for sorted data or log-time ops

- unordered_map for O(1) lookups

- priority_queue for greedy & Dijkstra's`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `# Challenge: Contact Book · 挑战：通讯录`,
      challenge: {
        title: "Implement a contact book with map",
        description: "用map实现通讯录",
        starterCode: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, string> contacts;
    contacts["Alice"] = "555-0101";
    contacts["Bob"] = "555-0102";
    contacts["Charlie"] = "555-0103";
    
    // TODO: Print all contacts, search for Bob, check Dave
    
    return 0;
}`,
        expectedOutput: "Alice: 555-0101\nBob: 555-0102\nCharlie: 555-0103\nBob: 555-0102\nDave not found",
        hint: "range-for to list, [] to access, count() to check",
        solution: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, string> contacts;
    contacts["Alice"] = "555-0101";
    contacts["Bob"] = "555-0102";
    contacts["Charlie"] = "555-0103";
    
    for (auto& [name, num] : contacts)
        cout << name << ": " << num << endl;
    
    cout << "Bob: " << contacts["Bob"] << endl;
    
    if (contacts.count("Dave"))
        cout << "Dave: " << contacts["Dave"] << endl;
    else
        cout << "Dave not found" << endl;
    return 0;
}`,
      },
    },
    
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What's the time complexity of `map` lookup vs `unordered_map`?\n`map`和`unordered_map`查找的时间复杂度？",
          options: ["map: O(log n), unordered_map: O(1) average", "Both O(log n) · 都是O(log n)", "map: O(n), unordered_map: O(log n)", "Both O(1) · 都是O(1)"],
          correctIndex: 0,
          explanation: "map uses a balanced BST (O(log n)), while unordered_map uses a hash table (O(1) average, O(n) worst case). · map用平衡BST，unordered_map用哈希表。",
        },
        {
                  "question": "What's the C++ equivalent of Python's dictionary?\nC++中什么等价于Python的字典？",
                  "options": [
                            "vector",
                            "array",
                            "map",
                            "set"
                  ],
                  "correctIndex": 2,
                  "explanation": "std::map stores key-value pairs, like Python's dict. map is sorted by key. · map存储键值对，类似Python字典。"
        },
        {
                  "question": "What does `set` guarantee about its elements?\nset对元素有什么保证？",
                  "options": [
                            "They're sorted and unique · 排序且唯一",
                            "They're in insertion order · 按插入顺序",
                            "They can repeat · 可以重复",
                            "They're always integers · 总是整数"
                  ],
                  "correctIndex": 0,
                  "explanation": "std::set stores unique elements in sorted order. Use unordered_set for faster unsorted access. · set存储排序的唯一元素。"
        },
        {
                  "question": "How do you check if a key exists in a map?\n如何检查map中是否存在某个键？",
                  "options": [
                            "m.has(key)",
                            "m.contains(key) or m.find(key) != m.end()",
                            "m[key] != null",
                            "key in m"
                  ],
                  "correctIndex": 1,
                  "explanation": "Use m.count(key) > 0, m.find(key) != m.end(), or m.contains(key) (C++20). · 用count、find或contains检查。"
        },
        {
                  "question": "What happens when you access `m[key]` for a nonexistent key?\n访问不存在的键m[key]会怎样？",
                  "options": [
                            "Error · 报错",
                            "Returns null · 返回null",
                            "Creates the key with default value · 用默认值创建该键",
                            "Returns -1 · 返回-1"
                  ],
                  "correctIndex": 2,
                  "explanation": "m[key] auto-creates the entry with default value (0 for int). This is different from Python's KeyError! · m[key]自动创建默认值条目。"
        },
        {
                  "type": "coding",
                  "question": "Count the frequency of each character in a string using a map.\n用map统计字符串中每个字符的频率。",
                  "prompt": "Read a word, print each character and its count (sorted)",
                  "starterCode": "#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    // Count character frequencies\n    \n    return 0;\n}",
                  "expectedOutput": "a: 1\nb: 1\nc: 1",
                  "hint": "map<char,int> freq; for(char c : s) freq[c]++; · 用map计数",
                  "explanation": "map[key]++ increments the count. Range-for loops make iteration easy. · map[key]++自增计数。"
        },
        {
                  "type": "coding",
                  "question": "Use a set to find unique elements from input.\n用set找出输入中的唯一元素。",
                  "prompt": "Read n numbers, print count of unique values",
                  "starterCode": "#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    int n, x;\n    cin >> n;\n    set<int> unique;\n    // Read and insert into set\n    \n    return 0;\n}",
                  "expectedOutput": "3",
                  "hint": "Loop n times, cin >> x, unique.insert(x). Print unique.size(). · 插入set后输出size",
                  "explanation": "Sets automatically handle duplicates. size() gives the count of unique elements. · set自动去重，size()给出唯一元素数。"
        },
      ],
    },
  ],
};

const cpp_5_2: Lesson = {
  id: "cpp-5-2",
  moduleId: "cpp-5",
  title: "STL Algorithms",
  subtitle: "sort, binary_search, and more · 排序、二分查找等",
  icon: "🔧",
  xp: 200,
  duration: "25 min",
  order: 20,
  gradeRange: [9, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔧",
      content: `# STL Algorithms · STL算法

🐍 **Py says:** "Python has \`sorted()\`, \`min()\`, \`max()\`. C++ has ALL of those and way more in \`<algorithm>\`!"

⚡ **Volt says:** "The STL algorithm library is a competitive programmer's best friend. These are highly optimized and battle-tested."

Key header: \`#include <algorithm>\`

Most algorithms work with **iterators** — think of them as generalized pointers that work with any container.`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Algorithms & Lambdas",
      concept: {
        title: "🧰 New Syntax: Algorithms & Lambdas",
        titleZh: "新语法：算法和 Lambda",
        syntaxCards: [
            {
              symbol: "std::sort()",
              name: "Sort a container",
              nameZh: "排序",
              emoji: "📊",
              description: "Like Python's sorted() 📊! Sorts in-place. Blazingly fast O(n log n). Pass begin() and end() iterators.",
              example: "#include <algorithm>\nstd::vector<int> v = {3,1,2};\nstd::sort(v.begin(), v.end());\n// v = {1,2,3}",
            },
            {
              symbol: "std::find()",
              name: "Find an element",
              nameZh: "查找元素",
              emoji: "🔍",
              description: "Search 🔍 for a value! Returns an iterator to the element, or end() if not found. Linear search O(n).",
              example: "auto it = std::find(v.begin(), v.end(), 42);\nif (it != v.end())\n    std::cout << \"Found!\";",
            },
            {
              symbol: "std::count()",
              name: "Count occurrences",
              nameZh: "计数",
              emoji: "🔢",
              description: "Tally counter 🔢! Counts how many times a value appears in a range.",
              example: "int c = std::count(v.begin(), v.end(), 5);\n// c = number of 5s in v",
            },
            {
              symbol: "[](params) { body }",
              name: "Lambda (anonymous function)",
              nameZh: "Lambda（匿名函数）",
              emoji: "⚡",
              description: "A function without a name ⚡! Like Python's lambda but way more powerful. [] captures variables, () takes parameters.",
              example: "auto square = [](int x) { return x * x; };\nstd::cout << square(5); // 25",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "#include <vector>", explanation: "Import vector", explanationZh: "引入 vector" },
              { code: "#include <algorithm>", explanation: "Import STL algorithms (sort, find, count...)", explanationZh: "引入 STL 算法（sort, find, count...）" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    std::vector<int> v = {5, 2, 8, 1, 9};", explanation: "Create a vector with unsorted values", explanationZh: "创建一个未排序的向量" },
              { code: "    std::sort(v.begin(), v.end());", explanation: "Sort the entire vector in ascending order", explanationZh: "将整个向量升序排序" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📊",
      content: `# Sorting — The Most Important Algorithm · 排序——最重要的算法

🎯 **What you'll learn · 你将学到:**
- \`sort()\` from \`<algorithm>\` — fast and easy!
- Custom comparison functions
- THE most asked topic in competitions!

Sorting is the **bread and butter** 🍞 of algorithms — almost every problem involves it!

🔑 **Key things to notice · 注意要点:**
- \`sort(v.begin(), v.end())\` — ascending by default
- \`sort(v.begin(), v.end(), greater<int>())\` — descending
- Custom comparator for your own rules
- C++ \`sort()\` is O(n log n) and blazing fast
- Python's \`sorted()\` → C++ \`sort()\`

👀 Try different comparators — custom sorting is essential!`,
      code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9, 3};
    
    // Basic sort (ascending) -- Python: list.sort()
    sort(v.begin(), v.end());
    for (int x : v) cout << x << " ";  // 1 2 3 5 8 9
    cout << endl;
    
    // Sort descending -- Python: list.sort(reverse=True)
    sort(v.begin(), v.end(), greater<int>());
    for (int x : v) cout << x << " ";  // 9 8 5 3 2 1
    cout << endl;
    
    // Custom sort -- Python: list.sort(key=lambda x: ...)
    vector<string> words = {"banana", "apple", "cherry", "date"};
    
    // Sort by length
    sort(words.begin(), words.end(), [](const string& a, const string& b) {
        return a.length() < b.length();
    });
    for (const string& w : words) cout << w << " ";
    cout << endl;  // date apple banana cherry
    
    // Sort pairs (common in competitions)
    vector<pair<int,int>> pts = {{3,1}, {1,5}, {3,0}, {1,2}};
    sort(pts.begin(), pts.end());  // Sorts by first, then second
    for (auto& [x,y] : pts) {
        cout << "(" << x << "," << y << ") ";
    }
    cout << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🔍",
      content: `# Binary Search · 二分查找

🎯 **What you'll learn · 你将学到:**
- \`binary_search()\`, \`lower_bound()\`, \`upper_bound()\`
- O(log n) searching — insanely fast!
- Array MUST be sorted first!

Binary search is the **guessing game** 🎯 — "higher or lower?" Each guess eliminates HALF. 1 million items = only 20 guesses!

🔑 **Key things to notice · 注意要点:**
- Array MUST be sorted before binary search!
- \`binary_search()\` = does value exist? (true/false)
- \`lower_bound()\` = first element >= value
- \`upper_bound()\` = first element > value
- O(log n) vs O(n) — massive speedup!

👀 Binary search is a TOP competition algorithm — master it!`,
      code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {1, 3, 5, 7, 9, 11, 13, 15};
    // Must be sorted for binary search!
    
    // Check if element exists -- O(log n)
    bool found = binary_search(v.begin(), v.end(), 7);
    cout << "7 found: " << found << endl;  // 1 (true)
    
    // lower_bound: first element >= value
    auto lb = lower_bound(v.begin(), v.end(), 6);
    cout << "First >= 6: " << *lb << endl;  // 7
    cout << "Index: " << (lb - v.begin()) << endl;  // 3
    
    // upper_bound: first element > value
    auto ub = upper_bound(v.begin(), v.end(), 7);
    cout << "First > 7: " << *ub << endl;  // 9
    
    // Count elements in range [5, 11]
    auto lo = lower_bound(v.begin(), v.end(), 5);
    auto hi = upper_bound(v.begin(), v.end(), 11);
    cout << "Elements in [5,11]: " << (hi - lo) << endl;  // 4
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🛠️",
      content: `# More Useful Algorithms · 更多实用算法

🎯 **What you'll learn · 你将学到:**
- \`min_element()\`, \`max_element()\`, \`accumulate()\`
- \`count()\`, \`find()\`, \`reverse()\`, \`unique()\`
- The \`<algorithm>\` header is a goldmine!

The algorithm library is a **Swiss Army toolkit** 🛠️ — ready-made tools so you don't code from scratch!

🔑 **Key things to notice · 注意要点:**
- \`*min_element()\` = Python's \`min()\`
- \`accumulate()\` = Python's \`sum()\`
- \`count()\` = Python's \`list.count()\`
- \`reverse()\` = Python's \`list.reverse()\`
- Use these instead of writing your own loops!

👀 Explore the algorithm library — your secret competition weapon!`,
      code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6};
    
    // min/max element
    cout << "Min: " << *min_element(v.begin(), v.end()) << endl;
    cout << "Max: " << *max_element(v.begin(), v.end()) << endl;
    
    // count -- how many times value appears
    cout << "Count of 1: " << count(v.begin(), v.end(), 1) << endl;
    
    // accumulate -- sum (Python: sum())
    int total = accumulate(v.begin(), v.end(), 0);
    cout << "Sum: " << total << endl;
    
    // reverse
    reverse(v.begin(), v.end());
    
    // unique -- remove consecutive duplicates
    vector<int> u = {1, 1, 2, 2, 3, 1, 1};
    sort(u.begin(), u.end());  // Sort first!
    auto last = unique(u.begin(), u.end());
    u.erase(last, u.end());  // Actually remove
    for (int x : u) cout << x << " ";  // 1 2 3
    cout << endl;
    
    // next_permutation -- generate all permutations!
    vector<int> perm = {1, 2, 3};
    do {
        for (int x : perm) cout << x;
        cout << " ";
    } while (next_permutation(perm.begin(), perm.end()));
    cout << endl;  // 123 132 213 231 312 321
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Read N numbers and find how many are less than a target value using binary search.`,
      exercise: {
        prompt: "Count elements less than target using lower_bound",
        promptZh: "用lower_bound统计小于目标值的元素数",
        starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, target;
    cin >> n >> target;
    
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    
    // Sort and count elements < target
    
    
    return 0;
}`,
        expectedOutput: "3",
        hint: "Sort the vector, then use lower_bound to find the first element >= target. The answer is the iterator minus begin().",
        hintZh: "排序向量，用lower_bound找到第一个>=target的元素，答案是迭代器减去begin()",
        solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, target;
    cin >> n >> target;
    
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    
    sort(v.begin(), v.end());
    auto it = lower_bound(v.begin(), v.end(), target);
    cout << (it - v.begin()) << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "text",
      emoji: "🔥",
      content: `# Lambda Functions Deep Dive · Lambda函数详解

Lambdas are anonymous functions — essential for STL algorithms!

## Syntax:
\`\`\`cpp
[capture](parameters) -> return_type { body }
\`\`\`

## Capture Modes:
| Capture | Meaning |
|---------|---------|
| [] | Nothing |
| [x] | x by value (copy) |
| [&x] | x by reference |
| [=] | ALL by value |
| [&] | ALL by reference |
| [=, &x] | All by value, x by reference |

🐍 **Py says:** "Python lambdas are one expression only. C++ lambdas can have full function bodies — way more powerful!"`,
    },
    {
      type: "code",
      emoji: "🎯",
      content: `# Lambdas with STL Algorithms · Lambda和STL算法

🎯 **What you'll learn · 你将学到:**
- Lambda = inline anonymous function
- \`[capture](params) { body }\` syntax
- Using lambdas with \`sort()\`, \`for_each()\`, \`find_if()\`

Lambdas are **quick Post-it notes** 📝 of code — small anonymous functions right where you need them!

🔑 **Key things to notice · 注意要点:**
- Syntax: \`[](int a, int b) { return a > b; }\`
- \`[]\` = capture list (outside variables to use)
- Python \`lambda\` → C++ \`[](params) { body }\`
- Perfect for custom sort comparators!
- Capture by value \`[=]\` or reference \`[&]\`

👀 Lambdas + sort = the most common competition pattern!`,
      code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6};
    
    // sort descending
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
    cout << "Desc: ";
    for (int x : v) cout << x << " ";
    cout << endl;
    
    // count_if
    int evens = count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });
    cout << "Evens: " << evens << endl;
    
    // find_if
    auto it = find_if(v.begin(), v.end(), [](int x) { return x > 5; });
    if (it != v.end()) cout << "First > 5: " << *it << endl;
    
    // transform (like Python's map())
    vector<int> doubled(v.size());
    transform(v.begin(), v.end(), doubled.begin(), [](int x) { return x * 2; });
    
    // accumulate with lambda
    int product = accumulate(v.begin(), v.end(), 1, [](int a, int b) { return a * b; });
    cout << "Product: " << product << endl;
    
    // Capture example
    int threshold = 4;
    auto above = count_if(v.begin(), v.end(), [threshold](int x) { return x > threshold; });
    cout << "Above " << threshold << ": " << above << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🧹",
      content: `# More Essential Algorithms · 更多必备算法

🎯 **What you'll learn · 你将学到:**
- \`next_permutation()\` — generates permutations!
- \`nth_element()\` — partial sorting
- More powerful STL algorithms

**Advanced power tools** ⚡ — algorithms that save dozens of lines of code!

🔑 **Key things to notice · 注意要点:**
- \`next_permutation()\` = all orderings (Python: \`itertools.permutations\`)
- \`nth_element()\` = find nth smallest efficiently
- \`partial_sort()\` = sort only first k elements
- Know what's available — don't reinvent the wheel!

👀 \`next_permutation\` is a competition favorite!`,
      code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    
    // erase-remove idiom
    v.erase(remove_if(v.begin(), v.end(), [](int x) { return x < 3; }), v.end());
    cout << "After removing < 3: ";
    for (int x : v) cout << x << " ";
    cout << endl;
    
    // unique (sort first!)
    sort(v.begin(), v.end());
    v.erase(unique(v.begin(), v.end()), v.end());
    cout << "Unique: ";
    for (int x : v) cout << x << " ";
    cout << endl;
    
    // partial_sort -- only sort first K
    vector<int> w = {9, 3, 7, 1, 5, 8, 2};
    partial_sort(w.begin(), w.begin() + 3, w.end());
    cout << "Top 3 smallest: " << w[0] << " " << w[1] << " " << w[2] << endl;
    
    // nth_element -- O(n) to find nth
    vector<int> z = {9, 3, 7, 1, 5, 8, 2, 4, 6};
    nth_element(z.begin(), z.begin() + 4, z.end());
    cout << "Median: " << z[4] << endl;
    
    // all_of, any_of, none_of
    vector<int> pos = {1, 2, 3, 4, 5};
    cout << "All positive? " << all_of(pos.begin(), pos.end(), [](int x){ return x > 0; }) << endl;
    
    return 0;
}`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `# Challenge: Word Frequency Counter · 挑战：词频统计`,
      challenge: {
        title: "Count word frequencies and sort by count",
        description: "统计词频并按频率排序",
        starterCode: `#include <iostream>
#include <map>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

int main() {
    string words[] = {"the", "cat", "sat", "on", "the", "mat", "the", "cat"};
    int n = 8;
    // TODO: Count and sort by frequency
    
    return 0;
}`,
        expectedOutput: "the: 3\ncat: 2\nmat: 1\non: 1\nsat: 1",
        hint: "map for counting, vector<pair> for sorting",
        solution: `#include <iostream>
#include <map>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

int main() {
    string words[] = {"the", "cat", "sat", "on", "the", "mat", "the", "cat"};
    int n = 8;
    map<string, int> freq;
    for (int i = 0; i < n; i++) freq[words[i]]++;
    
    vector<pair<string, int>> sorted_freq(freq.begin(), freq.end());
    sort(sorted_freq.begin(), sorted_freq.end(),
         [](auto& a, auto& b) { return a.second > b.second; });
    
    for (auto& [w, c] : sorted_freq) cout << w << ": " << c << endl;
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Algorithm Quiz · 算法测验",
      quiz: [
        {
          question: "What does [&] mean in a lambda capture?\nlambda中[&]是什么意思？",
          options: ["All by value · 按值捕获全部", "Capture nothing · 不捕获", "All by reference · 按引用捕获全部", "Syntax error · 语法错误"],
          correctIndex: 2,
          explanation: "[&] captures all variables by reference. Changes inside the lambda affect originals. · [&]按引用捕获所有外部变量。",
        },
        {
          question: "What's the erase-remove idiom for?\nerase-remove惯用法做什么？",
          options: ["Sorting · 排序", "Finding elements · 查找", "Actually removing elements from a container · 真正删除元素", "Copying · 复制"],
          correctIndex: 2,
          explanation: "remove_if moves unwanted elements to the end. erase actually removes them. · remove_if移到末尾，erase真正删除。",
        },
        {
                  "question": "Which header provides sort(), find(), etc.?\n哪个头文件提供sort()、find()等？",
                  "options": [
                            "<iostream>",
                            "<vector>",
                            "<algorithm>",
                            "<cmath>"
                  ],
                  "correctIndex": 2,
                  "explanation": "<algorithm> contains most STL algorithms: sort, find, count, reverse, etc. · <algorithm>包含大多数STL算法。"
        },
        {
                  "question": "What's the time complexity of std::sort()?\nstd::sort()的时间复杂度是？",
                  "options": [
                            "O(n)",
                            "O(n log n)",
                            "O(n²)",
                            "O(log n)"
                  ],
                  "correctIndex": 1,
                  "explanation": "std::sort uses IntroSort (hybrid of quicksort, heapsort, insertion sort) — O(n log n). · std::sort是O(n log n)。"
        },
        {
                  "question": "How do you sort a vector in descending order?\n如何降序排序vector？",
                  "options": [
                            "sort(v.begin(), v.end())",
                            "sort(v.rbegin(), v.rend())",
                            "sort(v.end(), v.begin())",
                            "reverse_sort(v)"
                  ],
                  "correctIndex": 1,
                  "explanation": "Use reverse iterators rbegin/rend, or pass greater<int>() as the third argument. · 用反向迭代器或greater<int>()。"
        },
        {
                  "type": "coding",
                  "question": "Sort a vector and print the result.\n排序vector并打印结果。",
                  "prompt": "Read n numbers, sort them, print space-separated",
                  "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    // Sort and print\n    \n    return 0;\n}",
                  "expectedOutput": "1 2 3 4 5",
                  "hint": "sort(v.begin(), v.end()); then loop to print · sort排序后循环打印",
                  "explanation": "sort(v.begin(), v.end()) sorts in ascending order. Print with a loop. · sort()升序排序。"
        },
        {
                  "type": "coding",
                  "question": "Find the number of occurrences of a value in a vector.\n统计vector中某值出现的次数。",
                  "prompt": "Read n numbers and a target, print count of target",
                  "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int n, target;\n    cin >> n;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    cin >> target;\n    // Count occurrences\n    \n    return 0;\n}",
                  "expectedOutput": "3",
                  "hint": "Use count(v.begin(), v.end(), target) · 用count()统计",
                  "explanation": "STL count() returns the number of elements matching the value. · count()返回匹配值的元素数。"
        },
      ],
    },
    
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What does `lower_bound(v.begin(), v.end(), 5)` return?\n`lower_bound`返回什么？",
          options: ["Iterator to the first element >= 5 · 指向第一个>=5的元素的迭代器", "Iterator to the largest element < 5 · 指向最大的<5的元素的迭代器", "The value 5 · 值5", "Iterator to element equal to 5 · 指向等于5的元素的迭代器"],
          correctIndex: 0,
          explanation: "lower_bound returns an iterator to the first element that is NOT less than the given value (i.e., >= value). · lower_bound返回第一个不小于给定值的元素的迭代器。",
        },
      ],
    },
  ],
};

const cpp_5_3: Lesson = {
  id: "cpp-5-3",
  moduleId: "cpp-5",
  title: "Stacks, Queues & Priority Queues",
  subtitle: "Essential data structures · 栈、队列和优先队列",
  icon: "📚",
  xp: 200,
  duration: "25 min",
  order: 21,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "📚",
      content: `# Stack & Queue · 栈和队列

🐍 **Py says:** "Python uses lists as stacks (\`append/pop\`) and \`collections.deque\` as queues. C++ has dedicated \`stack\` and \`queue\` classes!"

⚡ **Volt says:** "These are essential for BFS, DFS, expression parsing, and many competition problems."

| Structure | Analogy | Operations | Order |
|-----------|---------|------------|-------|
| Stack | Plates | push, pop, top | LIFO (Last In, First Out) |
| Queue | Line at store | push, pop, front | FIFO (First In, First Out) |
| Priority Queue | ER triage | push, pop, top | Highest priority first |`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Templates",
      concept: {
        title: "🧰 New Syntax: Templates",
        titleZh: "新语法：模板",
        syntaxCards: [
            {
              symbol: "template<typename T>",
              name: "Template declaration",
              nameZh: "模板声明",
              emoji: "🧩",
              description: "A blank puzzle piece 🧩! T is a placeholder for ANY type. The compiler fills it in when you use the function/class.",
              example: "template<typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}",
            },
            {
              symbol: "function template",
              name: "Generic function",
              nameZh: "泛型函数",
              emoji: "🔧",
              description: "One wrench 🔧 that fits all bolts! Write the function once with T, use it with int, double, string — anything!",
              example: "template<typename T>\nvoid print(T val) {\n    std::cout << val;\n}\nprint(42);     // T = int\nprint(\"hello\"); // T = const char*",
            },
            {
              symbol: "class template",
              name: "Generic class",
              nameZh: "泛型类",
              emoji: "📦",
              description: "A box 📦 that can hold anything! std::vector<T> is a class template — that's how it works with any type!",
              example: "template<typename T>\nclass Box {\n    T value;\npublic:\n    Box(T v) : value(v) {}\n    T get() { return value; }\n};",
            },
            {
              symbol: "Template<Type>",
              name: "Template instantiation",
              nameZh: "模板实例化",
              emoji: "🎯",
              description: "Fill in the blank 🎯! When you write Box<int>, the compiler creates a version of Box specifically for int.",
              example: "Box<int> b1(42);\nBox<std::string> b2(\"Hello\");\nstd::cout << b1.get(); // 42",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <iostream>", explanation: "Import I/O library", explanationZh: "引入输入输出库" },
              { code: "template<typename T>", explanation: "Template declaration — T is a placeholder for any type", explanationZh: "模板声明 — T 是任意类型的占位符" },
              { code: "T getMax(T a, T b) {", explanation: "Function takes two values of type T, returns T", explanationZh: "函数接受两个 T 类型的值，返回 T" },
              { code: "    return (a > b) ? a : b;", explanation: "Ternary: if a>b return a, else return b", explanationZh: "三元运算：如果 a>b 返回 a，否则返回 b" },
              { code: "}", explanation: "End of template function", explanationZh: "模板函数结束" },
              { code: "// getMax(3, 7) → 7, getMax(1.5, 2.5) → 2.5", explanation: "Works with int, double, string — any comparable type!", explanationZh: "适用于 int、double、string — 任何可比较的类型！" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📦",
      content: `# Stack — LIFO · 栈——后进先出

🎯 **What you'll learn · 你将学到:**
- Stack = Last In, First Out (LIFO)
- \`push()\`, \`pop()\`, \`top()\`, \`empty()\`
- Used for undo operations, parsing, DFS

A stack is a **stack of plates** 🍽️ — add to top, remove from top. Last on = first off!

🔑 **Key things to notice · 注意要点:**
- \`push(x)\` = add to top, \`pop()\` = remove from top
- \`top()\` = peek without removing
- Python: \`append()\`/\`pop()\` → C++: \`push()\`/\`pop()\`
- Used in: undo/redo, parenthesis matching, DFS
- Needs \`#include <stack>\`

👀 Think LIFO — last pushed = first popped!`,
      code: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    stack<int> s;
    
    // Push elements (Python: list.append())
    s.push(10);
    s.push(20);
    s.push(30);
    
    cout << "Top: " << s.top() << endl;  // 30
    cout << "Size: " << s.size() << endl;  // 3
    
    // Pop and print all (Python: while list: list.pop())
    while (!s.empty()) {
        cout << s.top() << " ";
        s.pop();
    }
    cout << endl;  // 30 20 10
    
    // Classic: Check balanced parentheses
    string expr = "({[()]})";
    stack<char> brackets;
    bool valid = true;
    for (char c : expr) {
        if (c == '(' || c == '{' || c == '[') {
            brackets.push(c);
        } else {
            if (brackets.empty()) { valid = false; break; }
            char top = brackets.top();
            brackets.pop();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) {
                valid = false; break;
            }
        }
    }
    valid = valid && brackets.empty();
    cout << expr << " is " << (valid ? "valid" : "invalid") << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🚶",
      content: `# Queue — FIFO · 队列——先进先出

🎯 **What you'll learn · 你将学到:**
- Queue = First In, First Out (FIFO)
- \`push()\`, \`pop()\`, \`front()\`, \`back()\`
- Used for BFS, scheduling, buffering

A queue is a **line at a store** 🏪 — first in line gets served first!

🔑 **Key things to notice · 注意要点:**
- \`push(x)\` = add to back, \`pop()\` = remove from front
- \`front()\` = first element, \`back()\` = last
- Python: \`collections.deque\` → C++: \`queue\`
- Essential for BFS graph traversal
- Needs \`#include <queue>\`

👀 Think FIFO — first in, first out!`,
      code: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    
    // Enqueue (Python: deque.append())
    q.push(10);
    q.push(20);
    q.push(30);
    
    cout << "Front: " << q.front() << endl;  // 10
    cout << "Back: " << q.back() << endl;    // 30
    
    // Dequeue all (Python: while deque: deque.popleft())
    while (!q.empty()) {
        cout << q.front() << " ";
        q.pop();  // Removes from front!
        // Note: pop() doesn't return the value in C++!
    }
    cout << endl;  // 10 20 30
    
    // BFS simulation
    cout << "\\nBFS level-order:" << endl;
    queue<pair<int,int>> bfs;
    bfs.push({0, 0});  // Start position
    int steps = 0;
    while (!bfs.empty() && steps < 3) {
        auto [x, y] = bfs.front();
        bfs.pop();
        cout << "Visit (" << x << "," << y << ")" << endl;
        bfs.push({x+1, y});
        bfs.push({x, y+1});
        steps++;
    }
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🏆",
      content: `# Priority Queue — Always Get the Best · 优先队列

🎯 **What you'll learn · 你将学到:**
- Priority queue = highest priority item first
- Default: max-heap (largest first)
- Essential for Dijkstra's, greedy algorithms

A priority queue is an **ER waiting room** 🏥 — most urgent patient gets seen first, regardless of arrival!

🔑 **Key things to notice · 注意要点:**
- Default: max-heap (largest on top)
- Same interface: \`push()\`, \`pop()\`, \`top()\`
- Min-heap: \`priority_queue<int, vector<int>, greater<int>>\`
- Python \`heapq\` (min) → C++ \`priority_queue\` (max!)
- Used in: shortest path, scheduling, top-K

👀 Default is MAX-heap — opposite of Python's heapq!`,
      code: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;

int main() {
    // Max-heap by default (largest on top)
    priority_queue<int> maxPQ;
    maxPQ.push(30);
    maxPQ.push(10);
    maxPQ.push(50);
    maxPQ.push(20);
    
    cout << "Max-heap:" << endl;
    while (!maxPQ.empty()) {
        cout << maxPQ.top() << " ";  // 50 30 20 10
        maxPQ.pop();
    }
    cout << endl;
    
    // Min-heap (smallest on top) -- note the syntax!
    priority_queue<int, vector<int>, greater<int>> minPQ;
    minPQ.push(30);
    minPQ.push(10);
    minPQ.push(50);
    minPQ.push(20);
    
    cout << "Min-heap:" << endl;
    while (!minPQ.empty()) {
        cout << minPQ.top() << " ";  // 10 20 30 50
        minPQ.pop();
    }
    cout << endl;
    
    // Practical: Find K largest elements
    vector<int> nums = {3, 7, 1, 9, 4, 6, 2, 8, 5};
    int k = 3;
    priority_queue<int> pq;
    for (int x : nums) pq.push(x);
    cout << "Top " << k << ": ";
    for (int i = 0; i < k; i++) {
        cout << pq.top() << " ";
        pq.pop();
    }
    cout << endl;  // 9 8 7
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Use a stack to reverse a string.`,
      exercise: {
        prompt: "Reverse string using a stack",
        promptZh: "用栈反转字符串",
        starterCode: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    // Use a stack to reverse the string
    
    
    return 0;
}`,
        expectedOutput: "olleh",
        hint: "Push each character, then pop them all into a result string",
        hintZh: "将每个字符入栈，然后全部弹出到结果字符串",
        solution: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    
    stack<char> st;
    for (char c : s) st.push(c);
    
    string result = "";
    while (!st.empty()) {
        result += st.top();
        st.pop();
    }
    
    cout << result << endl;
    
    return 0;
}`,
      },
    },
    {
      type: "text",
      emoji: "📐",
      content: `# Templates: Write Once, Use for Any Type · 模板

🐍 **Py says:** "Python is dynamic — functions work with any type automatically. C++ templates achieve the same at compile time!"

## Function Templates:
\`\`\`cpp
// Without: separate functions for each type
int maxInt(int a, int b) { return a > b ? a : b; }
double maxDbl(double a, double b) { return a > b ? a : b; }

// With templates: ONE function for ALL types!
template<typename T>
T myMax(T a, T b) { return a > b ? a : b; }

myMax(3, 5);       // T = int
myMax(3.14, 2.71); // T = double
\`\`\`

⚡ **Volt says:** "Templates are THE secret behind the entire STL. vector<int>, map<string, int> — the angle brackets ARE templates!"`,
    },
    {
      type: "code",
      emoji: "🔧",
      content: `# Template Functions & Classes · 模板函数和类

🎯 **What you'll learn · 你将学到:**
- Templates = code that works with ANY type
- \`template <typename T>\` syntax
- How C++ achieves Python's duck typing

Templates are **cookie cutters** 🍪 — one template, many types! Write once with placeholder \`T\`, works for int, double, string, anything!

🔑 **Key things to notice · 注意要点:**
- \`template <typename T>\` before the function/class
- \`T\` is a placeholder — compiler fills in the actual type
- This is the secret behind \`vector<int>\`, \`map<string, int>\`
- Templates = zero runtime cost (resolved at compile time!)

👀 Templates are why C++ can be both type-safe AND generic!`,
      code: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

template<typename T>
T findMax(const vector<T>& v) {
    T maxVal = v[0];
    for (const T& x : v) {
        if (x > maxVal) maxVal = x;
    }
    return maxVal;
}

template<typename T, typename U>
void printPair(T first, U second) {
    cout << "(" << first << ", " << second << ")" << endl;
}

// Class template
template<typename T>
class SimpleStack {
    T data[100];
    int topIdx = -1;
public:
    void push(const T& val) { data[++topIdx] = val; }
    T pop() { return data[topIdx--]; }
    T top() const { return data[topIdx]; }
    bool empty() const { return topIdx < 0; }
};

int main() {
    vector<int> nums = {3, 7, 1, 9, 4};
    cout << "Max int: " << findMax(nums) << endl;
    
    vector<string> words = {"banana", "apple", "cherry"};
    cout << "Max string: " << findMax(words) << endl;
    
    printPair(42, "hello");
    
    SimpleStack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    cout << "Stack top: " << intStack.top() << endl;
    
    SimpleStack<string> strStack;
    strStack.push("world");
    cout << "String top: " << strStack.top() << endl;
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "🌟",
      content: `# Template Specialization & C++20 Concepts · 模板特化与概念

## Template Specialization:
Make a template behave differently for specific types:
\`\`\`cpp
template<typename T>
void print(T val) { cout << val << endl; }

template<>
void print<bool>(bool val) {
    cout << (val ? "true" : "false") << endl;
}

print(42);      // "42"
print(true);    // "true" (not "1"!)
\`\`\`

## C++20 Concepts (Preview):
Constrain what types a template accepts:
\`\`\`cpp
template<typename T>
concept Addable = requires(T a, T b) { a + b; };

template<Addable T>
T add(T a, T b) { return a + b; }
\`\`\`

⚡ **Volt says:** "Concepts make template errors readable. Without them, errors can be 200 lines of gibberish!"`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `# Challenge: Template Pair · 挑战：模板Pair`,
      challenge: {
        title: "Create template Pair<T, U> class",
        description: "创建模板Pair<T, U>类",
        starterCode: `#include <iostream>
#include <string>
using namespace std;

// TODO: Create Pair<T, U> with first, second, and print()


int main() {
    Pair<int, string> p1(1, "hello");
    Pair<double, bool> p2(3.14, true);
    p1.print();  // (1, hello)
    p2.print();  // (3.14, 1)
    return 0;
}`,
        expectedOutput: "(1, hello)\n(3.14, 1)",
        hint: "template<typename T, typename U> class Pair { ... };",
        solution: `#include <iostream>
#include <string>
using namespace std;

template<typename T, typename U>
class Pair {
public:
    T first;
    U second;
    Pair(T f, U s) : first(f), second(s) {}
    void print() { cout << "(" << first << ", " << second << ")" << endl; }
};

int main() {
    Pair<int, string> p1(1, "hello");
    Pair<double, bool> p2(3.14, true);
    p1.print();
    p2.print();
    return 0;
}`,
      },
    },
    
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "Which STL container gives you the largest element first?\n哪个STL容器首先给你最大的元素？",
          options: ["set", "queue", "priority_queue", "stack"],
          correctIndex: 2,
          explanation: "priority_queue is a max-heap by default — top() always returns the largest element. Use greater<int> for a min-heap. · priority_queue默认是最大堆。",
        },
        {
                  "question": "What is a stack's access pattern?\n栈的访问模式是什么？",
                  "options": [
                            "FIFO (First In First Out)",
                            "LIFO (Last In First Out)",
                            "Random access · 随机访问",
                            "Sorted order · 排序顺序"
                  ],
                  "correctIndex": 1,
                  "explanation": "Stack is LIFO: the last element pushed is the first one popped. Like a stack of plates! · 栈是后进先出。"
        },
        {
                  "question": "What's the difference between a queue and a stack?\n队列和栈有什么区别？",
                  "options": [
                            "No difference · 没区别",
                            "Queue is FIFO, stack is LIFO · 队列先进先出，栈后进先出",
                            "Queue is faster · 队列更快",
                            "Stack can hold more elements · 栈能存更多元素"
                  ],
                  "correctIndex": 1,
                  "explanation": "Queue is FIFO (like a line at a store). Stack is LIFO (like a stack of books). · 队列先进先出，栈后进先出。"
        },
        {
                  "question": "What does priority_queue give you first by default?\npriority_queue默认先给什么？",
                  "options": [
                            "Smallest element · 最小元素",
                            "Largest element · 最大元素",
                            "First inserted · 先插入的",
                            "Random element · 随机元素"
                  ],
                  "correctIndex": 1,
                  "explanation": "C++ priority_queue is a max-heap by default — top() gives the largest element. · priority_queue默认最大堆。"
        },
        {
                  "question": "Which STL container would you use for BFS (Breadth-First Search)?\nBFS用哪个STL容器？",
                  "options": [
                            "stack",
                            "vector",
                            "queue",
                            "set"
                  ],
                  "correctIndex": 2,
                  "explanation": "BFS uses a queue (FIFO) to process nodes level by level. DFS uses a stack. · BFS用队列，DFS用栈。"
        },
        {
                  "type": "coding",
                  "question": "Use a stack to reverse a string.\n用栈反转字符串。",
                  "prompt": "Read a word, push each char to stack, pop and print to reverse",
                  "starterCode": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    stack<char> st;\n    // Push all chars, then pop to reverse\n    \n    return 0;\n}",
                  "expectedOutput": "olleH",
                  "hint": "Push each char, then pop and print: while(!st.empty()) { cout << st.top(); st.pop(); } · 入栈再出栈",
                  "explanation": "Stack's LIFO property naturally reverses the order of elements. · 栈的后进先出特性自然反转顺序。"
        },
        {
                  "type": "coding",
                  "question": "Find the top 3 largest numbers using a priority queue.\n用优先队列找最大的3个数。",
                  "prompt": "Read n numbers, print the 3 largest in descending order",
                  "starterCode": "#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    priority_queue<int> pq;\n    // Read numbers and find top 3\n    \n    return 0;\n}",
                  "expectedOutput": "9 7 5",
                  "hint": "Push all numbers, then pop top 3: pq.top() then pq.pop() three times · 插入所有数字，弹出前3个",
                  "explanation": "priority_queue (max-heap) gives the largest element first with top(). · 最大堆用top()获取最大元素。"
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE CPP-6: COMPETITION PREP (3 lessons)
// ═══════════════════════════════════════════════════════════════

const cpp_6_1: Lesson = {
  id: "cpp-6-1",
  moduleId: "cpp-6",
  title: "Fast I/O & Templates",
  subtitle: "Competition programming setup · 竞赛编程设置",
  icon: "🚀",
  xp: 250,
  duration: "25 min",
  order: 22,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🚀",
      content: `# Competitive Programming Setup · 竞赛编程设置

🐍 **Py says:** "In Python competitions, speed is always a concern. In C++, you're already fast — but these tricks make you EVEN faster!"

⚡ **Volt says:** "Every competitive programmer has a template. Let's build yours!"

🔧 **Chip says:** "The biggest time savings: fast I/O. Default \`cin/cout\` is slow because it syncs with C's \`printf/scanf\`. Turn that off!"`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Time Complexity",
      concept: {
        title: "🧰 New Syntax: Time Complexity",
        titleZh: "新语法：时间复杂度",
        syntaxCards: [
            {
              symbol: "O(1)",
              name: "Constant time",
              nameZh: "常数时间",
              emoji: "⚡",
              description: "Lightning fast ⚡! No matter how big the input, it takes the same time. Like looking up arr[5] — instant!",
              example: "int x = arr[5]; // O(1)\nmap[\"key\"];     // O(1) average",
            },
            {
              symbol: "O(log n)",
              name: "Logarithmic time",
              nameZh: "对数时间",
              emoji: "🔍",
              description: "Like binary search 🔍! Cuts the problem in half each step. 1 billion items? Only ~30 steps!",
              example: "// Binary search is O(log n)\n// Halving each time:\n// 1000 → 500 → 250 → 125 → ...",
            },
            {
              symbol: "O(n)",
              name: "Linear time",
              nameZh: "线性时间",
              emoji: "📏",
              description: "Proportional to input size 📏. Read every element once = O(n). Twice through = still O(n). Like reading a book page by page.",
              example: "for (int i = 0; i < n; i++)\n    sum += arr[i]; // O(n)",
            },
            {
              symbol: "O(n²)",
              name: "Quadratic time",
              nameZh: "二次时间",
              emoji: "🐌",
              description: "Slow for big inputs 🐌! Nested loops usually mean O(n²). 10K items = 100M operations. Avoid when possible!",
              example: "for (int i = 0; i < n; i++)\n    for (int j = 0; j < n; j++)\n        // O(n²) total",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "// O(1) - Array access", explanation: "Direct access by index — instant regardless of size", explanationZh: "通过索引直接访问 — 不管大小都是瞬间" },
              { code: "int x = arr[1000];", explanation: "Same speed as arr[0] — that's constant time!", explanationZh: "和 arr[0] 一样快 — 这就是常数时间！" },
              { code: "// O(n) - Linear scan", explanation: "Must look at every element once", explanationZh: "必须看每个元素一次" },
              { code: "for (int i = 0; i < n; i++) sum += arr[i];", explanation: "n elements → n operations → O(n)", explanationZh: "n 个元素 → n 次操作 → O(n)" },
              { code: "// O(n²) - Nested loops", explanation: "Inner loop runs n times FOR EACH outer iteration", explanationZh: "内层循环对每次外层迭代运行 n 次" },
              { code: "for (int i=0;i<n;i++) for(int j=0;j<n;j++) ...", explanation: "n × n = n² operations — gets slow fast!", explanationZh: "n × n = n² 次操作 — 很快就变慢！" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "⚡",
      content: `# Fast I/O Template · 快速I/O模板

🎯 **What you'll learn · 你将学到:**
- Speed up I/O for competitive programming
- \`ios_base::sync_with_stdio(false)\` and \`cin.tie(NULL)\`
- The competition starter template

Fast I/O is switching from a **bicycle to a race car** 🏎️ — these two lines can save you from Time Limit Exceeded!

🔑 **Key things to notice · 注意要点:**
- \`ios_base::sync_with_stdio(false);\` = unsync C/C++ I/O
- \`cin.tie(NULL);\` = untie cin from cout
- Can make I/O 10x faster!
- Put as FIRST lines in \`main()\`
- After these, don't mix \`printf/scanf\` with \`cin/cout\`

👀 Memorize this template — use it in every competition!`,
      code: `#include <bits/stdc++.h>  // Includes EVERYTHING (competition only!)
using namespace std;

// Type shortcuts
typedef long long ll;
typedef pair<int,int> pii;
typedef vector<int> vi;
typedef vector<ll> vll;

// Macros (use sparingly in real code)
#define pb push_back
#define all(x) (x).begin(), (x).end()
#define sz(x) (int)(x).size()
#define FOR(i, a, b) for (int i = (a); i < (b); i++)

int main() {
    // THE magic lines -- makes cin/cout as fast as scanf/printf
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    // Now cin/cout are fast!
    int n;
    cin >> n;
    
    vi v(n);
    FOR(i, 0, n) cin >> v[i];
    
    sort(all(v));
    
    for (int x : v) cout << x << " ";
    cout << "\\n";  // \\n is faster than endl (no flush)
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "📋",
      content: `# Full Competition Template · 完整竞赛模板

🎯 **What you'll learn · 你将学到:**
- A complete competitive programming template
- Common includes, typedefs, and macros
- The starting point for every contest problem

Your **competition battle suit** 🦸 — everything pre-loaded so you focus on the problem!

🔑 **Key things to notice · 注意要点:**
- \`#include <bits/stdc++.h>\` = includes EVERYTHING (competition only!)
- \`typedef long long ll;\` = shorter type names
- \`#define\` macros for common patterns
- Fast I/O at start of main
- NEVER use in production — only competitions!

👀 Save this template — your competition starting kit!`,
      code: `#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<int,int> pii;
typedef vector<int> vi;

#define pb push_back
#define all(x) (x).begin(), (x).end()
#define sz(x) (int)(x).size()

const int MOD = 1e9 + 7;
const int INF = 1e9;

void solve() {
    // Your solution here for each test case
    int n;
    cin >> n;
    
    vi a(n);
    for (int& x : a) cin >> x;
    
    // Process...
    ll sum = 0;
    for (int x : a) sum += x;
    
    cout << sum << "\\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int t = 1;
    // cin >> t;  // Uncomment for multiple test cases
    while (t--) {
        solve();
    }
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "💡",
      content: `# Competition Tips · 竞赛技巧

⚡ **Volt's Competition Checklist:**

1. **Always use** \`ios::sync_with_stdio(false); cin.tie(nullptr);\`
2. **Use** \`long long\` for anything that might exceed 2 billion
3. **Use** \`\\n\` instead of \`endl\` (endl flushes the buffer, slow!)
4. **Watch for overflow:** \`int\` max ≈ 2×10⁹, \`long long\` max ≈ 9×10¹⁸
5. **Read the constraints!** They tell you the expected time complexity
6. **Test edge cases:** n=0, n=1, negative numbers, maximum values

🐍 **Py says:** "Many competitive programmers start with Python for prototyping, then translate to C++ for speed. The algorithm is the same — only syntax changes!"

| Constraint | Expected complexity | Typical approach |
|------------|-------------------|------------------|
| n ≤ 10 | O(n!) | Brute force / backtracking |
| n ≤ 20 | O(2ⁿ) | Bitmask / subset DP |
| n ≤ 1000 | O(n²) | Nested loops / simple DP |
| n ≤ 100,000 | O(n log n) | Sorting / binary search |
| n ≤ 1,000,000 | O(n) | Greedy / linear scan |`,
    },
    {
      type: "code",
      emoji: "🔢",
      content: `# Common Patterns · 常见模式

🎯 **What you'll learn · 你将学到:**
- Frequency counting, prefix sums, sliding window
- Patterns in 80%+ of competition problems
- Building blocks for harder algorithms

These are **chess openings** ♟️ — standard moves that pros use automatically!

🔑 **Key things to notice · 注意要点:**
- Frequency counting: \`map\` or array to count occurrences
- Prefix sum: precompute cumulative sums for range queries
- Sliding window: efficiently process fixed-size subarrays
- Reduce O(n²) to O(n)!
- Practice recognizing WHICH pattern fits

👀 Master these three — they solve most beginner competition problems!`,
      code: `#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    // Pattern 1: Read until EOF
    // int x;
    // while (cin >> x) { ... }
    
    // Pattern 2: Multiple test cases
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        // solve...
    }
    
    // Pattern 3: Modular arithmetic
    ll a = 1e18, b = 1e18;
    ll MOD = 1e9 + 7;
    ll result = ((a % MOD) * (b % MOD)) % MOD;
    cout << result << "\\n";
    
    // Pattern 4: Prefix sums (fast range queries)
    int arr[] = {1, 3, 5, 7, 9};
    int n = 5;
    vector<int> prefix(n + 1, 0);
    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + arr[i];
    }
    // Sum of arr[1..3] = prefix[4] - prefix[1]
    cout << "Sum [1,3]: " << prefix[4] - prefix[1] << "\\n";  // 15
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Given an array and Q queries, each asking for sum of range [l, r], answer using prefix sums.`,
      exercise: {
        prompt: "Answer range sum queries with prefix sums",
        promptZh: "用前缀和回答区间求和查询",
        starterCode: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int n, q;
    cin >> n >> q;
    
    vector<int> a(n);
    for (int& x : a) cin >> x;
    
    // Build prefix sum and answer queries
    
    
    return 0;
}`,
        expectedOutput: "12\n7",
        hint: "Build prefix[i+1] = prefix[i] + a[i]. Answer = prefix[r+1] - prefix[l]",
        hintZh: "构建prefix[i+1] = prefix[i] + a[i]，答案 = prefix[r+1] - prefix[l]",
        solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int n, q;
    cin >> n >> q;
    
    vector<int> a(n);
    for (int& x : a) cin >> x;
    
    vector<long long> prefix(n + 1, 0);
    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + a[i];
    }
    
    while (q--) {
        int l, r;
        cin >> l >> r;
        cout << prefix[r + 1] - prefix[l] << "\\n";
    }
    
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "Why do we use `\\n` instead of `endl` in competitions?\n为什么竞赛中用`\\n`而不是`endl`？",
          options: ["No difference · 没有区别", "`endl` flushes the buffer which is slow · `endl`刷新缓冲区，很慢", "`\\n` looks cleaner · `\\n`看起来更整洁", "`endl` is not valid C++ · `endl`不是有效的C++"],
          correctIndex: 1,
          explanation: "endl outputs a newline AND flushes the output buffer. In competitions with lots of output, this flush is wasteful. · endl输出换行并刷新缓冲区，竞赛中这很浪费时间。",
        },
        {
                  "question": "What does `ios::sync_with_stdio(false);` do?\n这行代码做什么？",
                  "options": [
                            "Makes the program slower · 让程序更慢",
                            "Disables sync between C and C++ I/O for faster input/output · 禁用C和C++的I/O同步以加速",
                            "Enables debugging · 启用调试",
                            "Formats output · 格式化输出"
                  ],
                  "correctIndex": 1,
                  "explanation": "Disabling sync makes cin/cout much faster — essential for competitive programming with large inputs! · 禁用同步让cin/cout快很多。"
        },
        {
                  "question": "What is a template in C++?\nC++中什么是模板？",
                  "options": [
                            "A pre-written program · 预写的程序",
                            "A way to write generic code that works with any type · 编写适用于任何类型的通用代码",
                            "A design pattern · 设计模式",
                            "A type of class · 一种类"
                  ],
                  "correctIndex": 1,
                  "explanation": "Templates let you write one function/class that works with int, double, string, etc. — any type! · 模板让你写一次代码适用于任何类型。"
        },
        {
                  "question": "What does `cin.tie(NULL);` do?\n这行代码做什么？",
                  "options": [
                            "Ties cin to a file · 将cin绑定到文件",
                            "Unties cin from cout for faster I/O · 解绑cin和cout以加速I/O",
                            "Creates a null pointer · 创建空指针",
                            "Closes input · 关闭输入"
                  ],
                  "correctIndex": 1,
                  "explanation": "Untying cin from cout means cout doesn't flush before each cin, making I/O faster. · 解绑让I/O更快。"
        },
        {
                  "question": "What does `#include <bits/stdc++.h>` do?\n这个include做什么？",
                  "options": [
                            "Includes only iostream · 只包含iostream",
                            "Includes ALL standard headers at once · 一次包含所有标准头文件",
                            "Causes an error · 导致错误",
                            "Includes bit manipulation only · 只包含位操作"
                  ],
                  "correctIndex": 1,
                  "explanation": "bits/stdc++.h includes everything — convenient for competitive programming but not standard! · 包含所有标准库头文件。"
        },
        {
                  "type": "coding",
                  "question": "Write a template function that returns the maximum of two values.\n写一个模板函数返回两个值中的最大值。",
                  "prompt": "Write template<typename T> T maxVal(T a, T b) and test with int and double",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\n// Write template maxVal function\n\nint main() {\n    cout << maxVal(3, 7) << endl;\n    cout << maxVal(3.14, 2.72) << endl;\n    return 0;\n}",
                  "expectedOutput": "7\n3.14",
                  "hint": "template<typename T> T maxVal(T a, T b) { return (a > b) ? a : b; } · 模板函数",
                  "explanation": "Templates generate type-specific code at compile time. One function works for any comparable type! · 模板在编译时生成特定类型代码。"
        },
        {
                  "type": "coding",
                  "question": "Set up fast I/O and read/print n numbers quickly.\n设置快速I/O并快速读写n个数字。",
                  "prompt": "Use fast I/O setup, read n numbers, print their sum",
                  "starterCode": "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    // Set up fast I/O\n    \n    int n;\n    cin >> n;\n    long long sum = 0;\n    // Read and sum\n    \n    cout << sum << endl;\n    return 0;\n}",
                  "expectedOutput": "15",
                  "hint": "ios::sync_with_stdio(false); cin.tie(NULL); · 快速I/O设置",
                  "explanation": "Fast I/O is crucial in competitive programming. Always add these two lines at the start! · 快速I/O在竞赛中至关重要。"
        },
      ],
    },
  ],
};

const cpp_6_2: Lesson = {
  id: "cpp-6-2",
  moduleId: "cpp-6",
  title: "Greedy & Searching",
  subtitle: "Greedy algorithms and binary search · 贪心算法和二分查找",
  icon: "🎯",
  xp: 250,
  duration: "30 min",
  order: 23,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🎯",
      content: `# Greedy Algorithms · 贪心算法

🐍 **Py says:** "Greedy algorithms make the locally optimal choice at each step, hoping it leads to a global optimum. Same concept in Python or C++!"

⚡ **Volt says:** "Greedy works when you can prove that local best = global best. Common in sorting-based problems, scheduling, and intervals."

**When to use greedy:**
- Sort + scan patterns

- Interval scheduling

- Activity selection

- Making change with coins

- Minimum/maximum with constraints`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Classic Algorithm Patterns",
      concept: {
        title: "🧰 New Syntax: Classic Algorithm Patterns",
        titleZh: "新语法：经典算法模式",
        syntaxCards: [
            {
              symbol: "Binary Search",
              name: "Divide and conquer search",
              nameZh: "二分查找",
              emoji: "🔍",
              description: "Guess a number between 1-100? Always guess the middle! 🔍 Cut the range in half each time. O(log n) — insanely fast!",
              example: "int lo = 0, hi = n-1;\nwhile (lo <= hi) {\n    int mid = lo + (hi-lo)/2;\n    if (arr[mid] == target) return mid;\n    else if (arr[mid] < target) lo = mid+1;\n    else hi = mid-1;\n}",
            },
            {
              symbol: "Two Pointers",
              name: "Two pointer technique",
              nameZh: "双指针",
              emoji: "👆👆",
              description: "Two fingers 👆👆 on a sorted array! One starts left, one starts right, they walk toward each other. Solves many problems in O(n).",
              example: "int left = 0, right = n-1;\nwhile (left < right) {\n    int sum = arr[left] + arr[right];\n    if (sum == target) break;\n    else if (sum < target) left++;\n    else right--;\n}",
            },
            {
              symbol: "Sliding Window",
              name: "Sliding window technique",
              nameZh: "滑动窗口",
              emoji: "🪟",
              description: "Like sliding a window 🪟 across your array! Keep a fixed or variable-size \"window\" and slide it to find the best subarray.",
              example: "int maxSum = 0, windowSum = 0;\nfor (int i = 0; i < n; i++) {\n    windowSum += arr[i];\n    if (i >= k) windowSum -= arr[i-k];\n    maxSum = std::max(maxSum, windowSum);\n}",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "// Binary Search Pattern", explanation: "Search for target in a SORTED array", explanationZh: "在已排序数组中查找目标" },
              { code: "int lo = 0, hi = n - 1;", explanation: "Two boundaries: lo=start, hi=end of search range", explanationZh: "两个边界：lo=起始, hi=搜索范围末尾" },
              { code: "while (lo <= hi) {", explanation: "Keep going while search range is valid", explanationZh: "搜索范围有效时继续" },
              { code: "    int mid = lo + (hi - lo) / 2;", explanation: "Find middle index (avoids overflow vs (lo+hi)/2)", explanationZh: "找中间索引（避免 (lo+hi)/2 的溢出）" },
              { code: "    if (arr[mid] == target) return mid;", explanation: "Found it! Return the index", explanationZh: "找到了！返回索引" },
              { code: "    if (arr[mid] < target) lo = mid + 1;", explanation: "Target is in the right half — move lo up", explanationZh: "目标在右半部分 — 向上移动 lo" },
              { code: "    else hi = mid - 1;", explanation: "Target is in the left half — move hi down", explanationZh: "目标在左半部分 — 向下移动 hi" },
              { code: "}", explanation: "End of while loop", explanationZh: "while 循环结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🪙",
      content: `# Classic Greedy Problems · 经典贪心问题

🎯 **What you'll learn · 你将学到:**
- Greedy strategy: always pick the locally best choice
- Classic problems: activity selection, coin change
- When greedy works vs when it doesn't

Greedy is like **eating the biggest slice first** 🍕 — always pick what looks best NOW!

🔑 **Key things to notice · 注意要点:**
- Greedy = locally optimal choice at each step
- Sort first, then greedily select (common pattern!)
- Works for: activity selection, intervals
- Doesn't work for: 0/1 knapsack (use DP instead)
- Key skill: proving greedy gives optimal solution

👀 Think about WHY the greedy choice works — can you prove it?`,
      code: `#include <bits/stdc++.h>
using namespace std;

// Problem 1: Coin change (greedy works with standard denominations)
void coinChange(int amount) {
    int coins[] = {25, 10, 5, 1};
    int count = 0;
    cout << amount << " cents = ";
    for (int coin : coins) {
        while (amount >= coin) {
            amount -= coin;
            count++;
            cout << coin << " ";
        }
    }
    cout << "(" << count << " coins)" << endl;
}

// Problem 2: Activity Selection
void activitySelection() {
    // Each activity: {end_time, start_time}
    vector<pair<int,int>> activities = {
        {3, 1}, {4, 2}, {6, 3}, {7, 5}, {9, 6}, {10, 8}
    };
    
    // Sort by end time (greedy choice!)
    sort(activities.begin(), activities.end());
    
    int count = 0;
    int lastEnd = 0;
    cout << "Selected activities: ";
    for (auto& [end, start] : activities) {
        if (start >= lastEnd) {
            cout << "[" << start << "-" << end << "] ";
            lastEnd = end;
            count++;
        }
    }
    cout << "\\nTotal: " << count << endl;
}

int main() {
    coinChange(67);
    activitySelection();
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🔍",
      content: `# Binary Search · 二分查找

🎯 **What you'll learn · 你将学到:**
- \`binary_search()\`, \`lower_bound()\`, \`upper_bound()\`
- O(log n) searching — insanely fast!
- Array MUST be sorted first!

Binary search is the **guessing game** 🎯 — "higher or lower?" Each guess eliminates HALF. 1 million items = only 20 guesses!

🔑 **Key things to notice · 注意要点:**
- Array MUST be sorted before binary search!
- \`binary_search()\` = does value exist? (true/false)
- \`lower_bound()\` = first element >= value
- \`upper_bound()\` = first element > value
- O(log n) vs O(n) — massive speedup!

👀 Binary search is a TOP competition algorithm — master it!`,
      code: `#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

// Classic: Can we split array into k parts each with sum <= maxSum?
bool canSplit(vector<int>& arr, int k, ll maxSum) {
    int parts = 1;
    ll currentSum = 0;
    for (int x : arr) {
        if (currentSum + x > maxSum) {
            parts++;
            currentSum = x;
            if (parts > k) return false;
        } else {
            currentSum += x;
        }
    }
    return true;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    // Minimize the maximum sum when splitting array into k parts
    vector<int> arr = {7, 2, 5, 10, 8};
    int k = 2;
    
    ll lo = *max_element(arr.begin(), arr.end());  // Min possible
    ll hi = accumulate(arr.begin(), arr.end(), 0LL);  // Max possible
    
    while (lo < hi) {
        ll mid = lo + (hi - lo) / 2;
        if (canSplit(arr, k, mid)) {
            hi = mid;  // Try smaller
        } else {
            lo = mid + 1;  // Need bigger
        }
    }
    
    cout << "Minimum max-sum: " << lo << endl;  // 18
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "📊",
      content: `# Two Pointers Technique · 双指针技巧

🎯 **What you'll learn · 你将学到:**
- Two pointers moving through an array simultaneously
- Converging (from both ends) and same-direction pointers
- O(n²) → O(n) for many problems!

Two pointers = **two fingers** 👆👆 on a book — one at start, one at end, moving toward each other!

🔑 **Key things to notice · 注意要点:**
- Converging: left at 0, right at end, move toward middle
- Same direction: slow/fast pointers (tortoise and hare 🐢🐇)
- Classic: two-sum, palindrome check, removing duplicates
- Array must often be SORTED first
- O(n) instead of O(n²)!

👀 Two pointers + sorting = top competition combo!`,
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Problem: Find pair with given sum in sorted array
    vector<int> v = {1, 3, 5, 7, 9, 11};
    int target = 12;
    
    int left = 0, right = v.size() - 1;
    while (left < right) {
        int sum = v[left] + v[right];
        if (sum == target) {
            cout << "Found: " << v[left] << " + " << v[right] << endl;
            break;
        } else if (sum < target) {
            left++;   // Need bigger sum
        } else {
            right--;  // Need smaller sum
        }
    }
    
    // Problem: Remove duplicates from sorted array (in-place)
    vector<int> a = {1, 1, 2, 2, 3, 4, 4, 5};
    int write = 1;
    for (int read = 1; read < a.size(); read++) {
        if (a[read] != a[read-1]) {
            a[write++] = a[read];
        }
    }
    cout << "Unique: ";
    for (int i = 0; i < write; i++) cout << a[i] << " ";
    cout << endl;  // 1 2 3 4 5
    
    // Problem: Sliding window max sum of size k
    vector<int> nums = {1, 3, 2, 5, 1, 1, 7, 2};
    int k = 3;
    int windowSum = 0;
    for (int i = 0; i < k; i++) windowSum += nums[i];
    int maxSum = windowSum;
    for (int i = k; i < nums.size(); i++) {
        windowSum += nums[i] - nums[i-k];
        maxSum = max(maxSum, windowSum);
    }
    cout << "Max window sum: " << maxSum << endl;  // 10
    
    return 0;
}`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Given a sorted array, use two pointers to find if any pair sums to target.`,
      exercise: {
        prompt: "Two-pointer pair sum search",
        promptZh: "双指针查找目标和对",
        starterCode: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, target;
    cin >> n >> target;
    
    vector<int> v(n);
    for (int& x : v) cin >> x;
    
    // Find pair summing to target
    
    
    return 0;
}`,
        expectedOutput: "YES",
        hint: "Start with left=0, right=n-1. If sum too small, move left++. Too big, move right--.",
        hintZh: "从left=0，right=n-1开始。和太小就left++，太大就right--",
        solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, target;
    cin >> n >> target;
    
    vector<int> v(n);
    for (int& x : v) cin >> x;
    
    int l = 0, r = n - 1;
    bool found = false;
    while (l < r) {
        int s = v[l] + v[r];
        if (s == target) { found = true; break; }
        else if (s < target) l++;
        else r--;
    }
    
    cout << (found ? "YES" : "NO") << "\\n";
    
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "When can you use a greedy algorithm?\n什么时候可以使用贪心算法？",
          options: ["When the locally optimal choice leads to the global optimum · 当局部最优能导致全局最优时", "Only for sorting problems · 只用于排序问题", "Always — it's the fastest · 总是——它最快", "Never — dynamic programming is always better · 从不——动态规划总是更好"],
          correctIndex: 0,
          explanation: "Greedy works when you can prove that making the best local choice at each step gives the best overall solution. · 贪心在可以证明局部最优等于全局最优时有效。",
        },
        {
                  "question": "What is a greedy algorithm?\n什么是贪心算法？",
                  "options": [
                            "An algorithm that uses all memory · 使用所有内存的算法",
                            "An algorithm that makes the locally optimal choice at each step · 每步选局部最优的算法",
                            "An algorithm that searches everything · 搜索所有内容的算法",
                            "A slow algorithm · 慢算法"
                  ],
                  "correctIndex": 1,
                  "explanation": "Greedy algorithms make the best choice at each step, hoping it leads to a global optimum. · 贪心每步选最优。"
        },
        {
                  "question": "What is binary search's time complexity?\n二分搜索的时间复杂度是？",
                  "options": [
                            "O(n)",
                            "O(n²)",
                            "O(log n)",
                            "O(1)"
                  ],
                  "correctIndex": 2,
                  "explanation": "Binary search halves the search space each step: O(log n). But the data must be sorted! · 二分搜索每步减半，O(log n)。"
        },
        {
                  "question": "What's required before using binary search?\n使用二分搜索前需要什么？",
                  "options": [
                            "Data must be sorted · 数据必须有序",
                            "Data must be unique · 数据必须唯一",
                            "Data must be integers · 数据必须是整数",
                            "Nothing · 没有要求"
                  ],
                  "correctIndex": 0,
                  "explanation": "Binary search only works on sorted data. Sort first, then search! · 二分搜索只能用于有序数据。"
        },
        {
                  "question": "Which STL function performs binary search?\n哪个STL函数执行二分搜索？",
                  "options": [
                            "find()",
                            "search()",
                            "lower_bound() / upper_bound()",
                            "binary_find()"
                  ],
                  "correctIndex": 2,
                  "explanation": "lower_bound and upper_bound perform binary search on sorted containers. Also binary_search() returns bool. · lower_bound/upper_bound执行二分搜索。"
        },
        {
                  "type": "coding",
                  "question": "Implement binary search on a sorted array.\n在有序数组上实现二分搜索。",
                  "prompt": "Read sorted array and target, print index or -1 if not found",
                  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n, target;\n    cin >> n;\n    vector<int> v(n);\n    for(int i = 0; i < n; i++) cin >> v[i];\n    cin >> target;\n    // Binary search\n    \n    return 0;\n}",
                  "expectedOutput": "2",
                  "hint": "int lo=0, hi=n-1; while(lo<=hi) { int mid=(lo+hi)/2; ... } · 二分搜索模板",
                  "explanation": "Binary search: compare middle element, narrow to left or right half. · 二分：比较中间值，缩小搜索范围。"
        },
        {
                  "type": "coding",
                  "question": "Solve the coin change greedy problem: use fewest coins for amount.\n贪心解硬币找零：用最少硬币凑金额。",
                  "prompt": "Coins: 25, 10, 5, 1. Read amount, print minimum coins needed.",
                  "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int amount;\n    cin >> amount;\n    int coins[] = {25, 10, 5, 1};\n    int count = 0;\n    // Greedy: use largest coin first\n    \n    cout << count << endl;\n    return 0;\n}",
                  "expectedOutput": "4",
                  "hint": "For each coin: count += amount/coin; amount %= coin; · 对每种硬币：整除得数量，取余得剩余",
                  "explanation": "Greedy: always use the largest coin possible. Works for US coin system! · 贪心：总是用最大面值。"
        },
      ],
    },
  ],
};

const cpp_6_3: Lesson = {
  id: "cpp-6-3",
  moduleId: "cpp-6",
  title: "Dynamic Programming Intro",
  subtitle: "Breaking problems into subproblems · 动态规划入门",
  icon: "🧩",
  xp: 300,
  duration: "30 min",
  order: 24,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🧩",
      content: `# Dynamic Programming · 动态规划

🐍 **Py says:** "DP is the same in any language — break a problem into overlapping subproblems and store results to avoid recalculating."

⚡ **Volt says:** "DP is the most important technique in competitive programming. If greedy doesn't work, try DP!"

🔧 **Chip says:** "DP trades memory for speed. Instead of recomputing the same thing millions of times, we store it in a table."

**Two approaches:**
1. **Top-down (memoization):** Recursion + cache (natural but can stack overflow)
2. **Bottom-up (tabulation):** Iterative, fill a table (preferred in competitions)`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Syntax: Competition C++",
      concept: {
        title: "🧰 New Syntax: Competition C++ Tricks",
        titleZh: "新语法：竞赛 C++ 技巧",
        syntaxCards: [
            {
              symbol: "ios::sync_with_stdio(false)",
              name: "Fast I/O",
              nameZh: "快速输入输出",
              emoji: "🚀",
              description: "Rocket boost 🚀 for I/O! Disables sync between C and C++ I/O streams. Can make input 10x faster!",
              example: "ios::sync_with_stdio(false);\ncin.tie(nullptr);\n// Now cin/cout are much faster!",
            },
            {
              symbol: "#define",
              name: "Macro definition",
              nameZh: "宏定义",
              emoji: "📝",
              description: "Text replacement 📝! The preprocessor replaces the macro name with its value before compilation. Use sparingly!",
              example: "#define ll long long\n#define pb push_back\n#define FOR(i,n) for(int i=0;i<n;i++)",
            },
            {
              symbol: "using namespace std;",
              name: "Skip the std:: prefix",
              nameZh: "省略 std:: 前缀",
              emoji: "✂️",
              description: "Cut ✂️ the typing! In competitions, this saves time. In real projects, avoid it (name conflicts!).",
              example: "using namespace std;\ncout << \"No std:: needed!\" << endl;\nvector<int> v; // instead of std::vector",
            },
            {
              symbol: "Competition template",
              name: "Common starter code",
              nameZh: "常用起始代码",
              emoji: "📋",
              description: "Your battle template 📋! Most competitive programmers start with a pre-written template with all common includes and macros.",
              example: "#include <bits/stdc++.h>\nusing namespace std;\ntypedef long long ll;\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n}",
            },
          ],
        codeAnatomy: {
          lines: [
              { code: "#include <bits/stdc++.h>", explanation: "Include EVERYTHING — only for competitions, not production!", explanationZh: "包含所有标准库 — 仅限竞赛，不用于生产！" },
              { code: "using namespace std;", explanation: "Skip typing std:: everywhere — saves contest time", explanationZh: "省略 std:: — 节省竞赛时间" },
              { code: "typedef long long ll;", explanation: "Shorthand: \"ll\" instead of \"long long\" — for big numbers", explanationZh: "简写：\"ll\" 代替 \"long long\" — 用于大数" },
              { code: "int main() {", explanation: "Program entry point", explanationZh: "程序入口" },
              { code: "    ios::sync_with_stdio(false); cin.tie(nullptr);", explanation: "Fast I/O — almost always needed in contests", explanationZh: "快速 I/O — 竞赛中几乎总是需要" },
              { code: "    int n; cin >> n;", explanation: "Read input — the contest begins!", explanationZh: "读取输入 — 竞赛开始！" },
              { code: "    return 0;", explanation: "Return success", explanationZh: "返回成功" },
              { code: "}", explanation: "End of main function", explanationZh: "main 函数结束" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🐰",
      content: `# Fibonacci — DP Hello World · 斐波那契——DP入门

🎯 **What you'll learn · 你将学到:**
- Dynamic Programming = solve by breaking into subproblems
- Memoization: remember what you already computed
- Fibonacci: the classic DP introduction

DP is using a **notebook** 📓 during a test — write down answers instead of recalculating!

🔑 **Key things to notice · 注意要点:**
- Naive recursion: O(2^n) — exponentially slow!
- With memoization: O(n) — linear!
- Bottom-up: build table from small to large
- \`dp[i] = dp[i-1] + dp[i-2]\`
- DP = recursion + memoization = no repeated work

👀 Compare naive vs DP — the speed difference is mind-blowing!`,
      code: `#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

// Bad: O(2^n) -- exponential!
int fibSlow(int n) {
    if (n <= 1) return n;
    return fibSlow(n-1) + fibSlow(n-2);
}

// Good: Top-down with memoization -- O(n)
map<int, ll> memo;
ll fibMemo(int n) {
    if (n <= 1) return n;
    if (memo.count(n)) return memo[n];
    return memo[n] = fibMemo(n-1) + fibMemo(n-2);
}

// Best: Bottom-up DP -- O(n) time, O(n) space
ll fibDP(int n) {
    if (n <= 1) return n;
    vector<ll> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// Space-optimized: O(1) space!
ll fibOpt(int n) {
    if (n <= 1) return n;
    ll a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        ll c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    int n = 40;
    // cout << fibSlow(n) << endl;  // Slow!
    cout << "Memo: " << fibMemo(n) << endl;
    cout << "DP: " << fibDP(n) << endl;
    cout << "Opt: " << fibOpt(n) << endl;
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "🎒",
      content: `# Classic DP: Climbing Stairs & Coin Change · 经典DP

🎯 **What you'll learn · 你将学到:**
- Climbing Stairs: how many ways to reach the top?
- Coin Change: minimum coins for target amount
- The DP problem-solving framework

Classic DP is like **leveling up** 🎮 — each problem teaches a new pattern!

🔑 **Key things to notice · 注意要点:**
- Climbing Stairs: \`dp[i] = dp[i-1] + dp[i-2]\` (like Fibonacci!)
- Coin Change: \`dp[amt] = min(dp[amt], dp[amt-coin] + 1)\`
- DP steps: 1) Define state, 2) Find transition, 3) Base cases
- These two cover 80% of DP patterns!

👀 Identify the state and transition for each problem!`,
      code: `#include <bits/stdc++.h>
using namespace std;

// Climbing stairs: How many ways to reach step n?
// Can take 1 or 2 steps at a time
int climbStairs(int n) {
    if (n <= 2) return n;
    vector<int> dp(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// Coin change: Minimum coins to make amount
// Python: same logic, just different syntax
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);  // Initialize to "impossible"
    dp[0] = 0;  // 0 coins needed for amount 0
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}

int main() {
    cout << "Stairs(5): " << climbStairs(5) << endl;  // 8
    cout << "Stairs(10): " << climbStairs(10) << endl;  // 89
    
    vector<int> coins = {1, 5, 10, 25};
    cout << "Coins for 30: " << coinChange(coins, 30) << endl;  // 2 (25+5)
    cout << "Coins for 67: " << coinChange(coins, 67) << endl;  // 6
    
    return 0;
}`,
    },
    {
      type: "code",
      emoji: "📊",
      content: `# 2D DP: Grid Problems · 二维DP：网格问题

🎯 **What you'll learn · 你将学到:**
- DP on 2D grids (rows and columns)
- Path counting and minimum path sum
- Extending 1D DP to 2D

2D DP is navigating a **city grid** 🏙️ — only go right or down, find the best path!

🔑 **Key things to notice · 注意要点:**
- \`dp[i][j]\` = answer for cell (i, j)
- Transition: \`dp[i][j] = dp[i-1][j] + dp[i][j-1]\`
- Base cases: first row and first column
- Same logic as 1D DP, just two dimensions
- Grid problems are VERY common in competitions!

👀 Draw the grid and fill values manually — see how DP builds the answer!`,
      code: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // How many paths from top-left to bottom-right?
    // Can only move right or down
    int m = 3, n = 3;  // 3x3 grid
    
    vector<vector<int>> dp(m, vector<int>(n, 0));
    
    // Base cases: first row and first column = 1 path each
    for (int i = 0; i < m; i++) dp[i][0] = 1;
    for (int j = 0; j < n; j++) dp[0][j] = 1;
    
    // Fill table: paths = from above + from left
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    cout << "Paths in " << m << "x" << n << " grid: " << dp[m-1][n-1] << endl;
    
    // Print the DP table
    cout << "\\nDP Table:" << endl;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << dp[i][j] << "\\t";
        }
        cout << endl;
    }
    
    return 0;
}`,
    },
    {
      type: "text",
      emoji: "💡",
      content: `# DP Problem-Solving Framework · DP解题框架

⚡ **Volt's DP Checklist:**

1. **Define state:** What does dp[i] (or dp[i][j]) represent?
2. **Base case:** What's the simplest case you know the answer to?
3. **Transition:** How does dp[i] relate to smaller subproblems?
4. **Answer:** Where is the final answer in the table?

**Common DP patterns:**
| Pattern | Example | State |
|---------|---------|-------|
| Linear | Fibonacci, stairs | dp[i] |
| Knapsack | Coin change | dp[amount] |
| Grid | Path counting | dp[i][j] |
| Interval | Matrix chain | dp[i][j] = range [i,j] |
| Subsequence | LCS, LIS | dp[i][j] or dp[i] |

🐍 **Py says:** "The thinking process is identical in Python and C++. Only the syntax differs. If you can solve it in Python, you can solve it in C++!"`,
    },
    {
      type: "interactive",
      emoji: "🎮",
      content: `# Try It! · 动手试试！

Solve the climbing stairs problem: given n stairs and you can take 1, 2, or 3 steps, how many ways?`,
      exercise: {
        prompt: "Count ways to climb n stairs (1, 2, or 3 steps)",
        promptZh: "计算爬n级台阶的方法数（可走1、2或3步）",
        starterCode: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    // Count ways with 1, 2, or 3 steps
    
    
    return 0;
}`,
        expectedOutput: "7",
        hint: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]. Base cases: dp[0]=1, dp[1]=1, dp[2]=2",
        hintZh: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]，基础情况：dp[0]=1, dp[1]=1, dp[2]=2",
        solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<long long> dp(n + 1, 0);
    dp[0] = 1;
    if (n >= 1) dp[1] = 1;
    if (n >= 2) dp[2] = 2;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    
    cout << dp[n] << "\\n";
    
    return 0;
}`,
      },
    },
    {
      type: "quiz",
      emoji: "🧪",
      content: "# Quiz · 测验",
      quiz: [
        {
          question: "What's the key difference between greedy and DP?\n贪心和DP的关键区别是什么？",
          options: ["Greedy uses more memory · 贪心用更多内存", "Greedy makes irrevocable choices; DP considers all subproblems · 贪心做不可撤销的选择；DP考虑所有子问题", "DP can't use recursion · DP不能用递归", "DP is always faster · DP总是更快"],
          correctIndex: 1,
          explanation: "Greedy commits to the locally best choice. DP explores all possibilities via subproblems and picks the overall best. DP is more general but usually slower. · 贪心选择局部最优，DP探索所有子问题选全局最优。",
        },
        {
                  "question": "What is the key idea behind dynamic programming?\n动态规划的核心思想是什么？",
                  "options": [
                            "Use recursion only · 只用递归",
                            "Break problem into overlapping subproblems and store results · 分解为重叠子问题并存储结果",
                            "Always use greedy approach · 总是用贪心",
                            "Brute force search · 暴力搜索"
                  ],
                  "correctIndex": 1,
                  "explanation": "DP = optimal substructure + overlapping subproblems + memoization/tabulation. · DP=最优子结构+重叠子问题+记忆化。"
        },
        {
                  "question": "What's the difference between top-down and bottom-up DP?\n自顶向下和自底向上DP的区别？",
                  "options": [
                            "No difference · 没区别",
                            "Top-down uses recursion+memo; bottom-up uses iteration+table · 自顶向下用递归+记忆；自底向上用迭代+表格",
                            "Top-down is always faster · 自顶向下总是更快",
                            "Bottom-up uses recursion · 自底向上用递归"
                  ],
                  "correctIndex": 1,
                  "explanation": "Top-down (memoization) = recursive. Bottom-up (tabulation) = iterative. Both give same results. · 自顶向下递归，自底向上迭代。"
        },
        {
                  "question": "What's the time complexity of the Fibonacci DP solution?\nFibonacci DP解法的时间复杂度？",
                  "options": [
                            "O(2^n)",
                            "O(n²)",
                            "O(n)",
                            "O(n log n)"
                  ],
                  "correctIndex": 2,
                  "explanation": "DP Fibonacci is O(n) — each subproblem computed once. Naive recursion is O(2^n)! · DP Fibonacci是O(n)。"
        },
        {
                  "question": "What data structure typically stores DP results?\n通常用什么数据结构存DP结果？",
                  "options": [
                            "Stack · 栈",
                            "Queue · 队列",
                            "Array or vector · 数组或向量",
                            "Set · 集合"
                  ],
                  "correctIndex": 2,
                  "explanation": "DP tables are usually arrays/vectors indexed by the subproblem parameters. · DP表通常是按子问题参数索引的数组。"
        },
        {
                  "type": "coding",
                  "question": "Compute the nth Fibonacci number using bottom-up DP.\n用自底向上DP计算第n个Fibonacci数。",
                  "prompt": "Read n, print fib(n). fib(0)=0, fib(1)=1, fib(2)=1, ...",
                  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // Bottom-up DP for Fibonacci\n    \n    return 0;\n}",
                  "expectedOutput": "55",
                  "hint": "vector<long long> dp(n+1); dp[0]=0; dp[1]=1; loop from 2 to n · 从2循环到n",
                  "explanation": "Build the table from small to large: dp[i] = dp[i-1] + dp[i-2]. O(n) time, O(n) space. · 自底向上构建表格。"
        },
        {
                  "type": "coding",
                  "question": "Solve the climbing stairs problem with DP.\n用DP解决爬楼梯问题。",
                  "prompt": "n stairs, can climb 1 or 2 at a time. Print number of ways to reach top.",
                  "starterCode": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // DP: ways to climb n stairs\n    \n    return 0;\n}",
                  "expectedOutput": "8",
                  "hint": "dp[i] = dp[i-1] + dp[i-2], dp[0]=1, dp[1]=1 · 和Fibonacci类似",
                  "explanation": "Same recurrence as Fibonacci! dp[i] = ways from (i-1) + ways from (i-2). · 和Fibonacci相同递推！"
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// EXPORT ALL LESSONS
// ═══════════════════════════════════════════════════════════════

export const CPP_LESSONS: Lesson[] = [
  cpp_1_1, cpp_1_2, cpp_1_3, cpp_1_4, cpp_1_5, cpp_1_6,
  cpp_2_1, cpp_2_2, cpp_2_3, cpp_2_4,
  cpp_3_1, cpp_3_2, cpp_3_3, cpp_3_4, cpp_3_5,
  cpp_4_1, cpp_4_2, cpp_4_3, cpp_4_4,
  cpp_5_1, cpp_5_2, cpp_5_3,
  cpp_6_1, cpp_6_2, cpp_6_3,
];