#!/usr/bin/env python3
"""
Update all 82 type:"code" sections in cpp-lessons.ts with teaching content.
Match by title string in content field for robustness.
"""

# Teaching content keyed by the title that appears in the content field
# Each value is the FULL new content (without surrounding backticks)
T = {}

T["Your First C++ Program"] = r"""# Your First C++ Program · 你的第一个C++程序

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

👀 Compare this to the Python version — same output, different syntax!"""

T["cout — Your New print()"] = r"""# cout — Your New print() · cout是你的新print()

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

👀 Try changing the messages and see how \`<<\` chains work!"""

T["Comments in C++"] = r"""# Comments in C++ · C++中的注释

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

👀 Read through both styles and notice which feels more natural!"""

T["Multiple Output Examples"] = r"""# Multiple Output Examples · 多种输出示例

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

👀 Try predicting the output before running each example!"""

T["The Basic Types"] = r"""# The Basic Types · 基本数据类型

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

👀 Look at how each type is declared and what values it can hold!"""

T["Declaring Variables"] = r"""# Declaring Variables · 声明变量

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

👀 Notice how every variable declaration starts with its type!"""

T["Type Conversion"] = r"""# Type Conversion · 类型转换

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

👀 Watch what happens when a double gets converted to an int!"""

T["Type Comparison Cheat Sheet"] = r"""# Type Comparison Cheat Sheet · 类型对比速查表

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

👀 Use this as a cheat sheet when converting your Python code!"""

T["cin Basics"] = r"""# cin Basics · cin基础

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

👀 Try entering different types of input and see what happens!"""

T["getline() — Read Full Lines"] = r"""# getline() — Read Full Lines · 读取整行

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

👀 Notice how getline handles sentences that cin would split up!"""

T["Output Formatting"] = r"""# Output Formatting · 输出格式化

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

👀 Compare this to Python's f-string formatting!"""

T["Input/Output Comparison Summary"] = r"""# Input/Output Comparison Summary · 输入输出对比总结

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

👀 Bookmark this as a reference for future projects!"""

T["Integer Division — The Big Difference!"] = r"""# Integer Division — The Big Difference! · 整数除法的大区别！

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

👀 Watch the integer division — this will save you hours of debugging!"""

T["Increment & Decrement — Python Doesn't Have These!"] = r"""# Increment & Decrement — Python Doesn't Have These! · 自增自减

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

👀 Pay attention to pre vs post increment — the difference matters!"""

T["Type Casting in Math"] = r"""# Type Casting in Math · 数学中的类型转换

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

👀 Look at how casting changes the division results!"""

T["Math Library Functions"] = r"""# Math Library Functions · 数学库函数

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

👀 Try these functions with different values!"""

T["String Basics"] = r"""# String Basics · 字符串基础

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

👀 Notice that C++ strings can be changed in place — Python strings can't!"""

T["String Methods"] = r"""# String Methods · 字符串方法

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

👀 Pay attention to \`substr()\` — it takes (start, LENGTH), not (start, end)!"""

T["Character Operations"] = r"""# Character Operations · 字符操作

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

👀 Try the ASCII math — characters behave like numbers in C++!"""

T["Useful String Patterns"] = r"""# Useful String Patterns · 实用字符串技巧

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

👀 These patterns come up constantly in coding challenges!"""

T["Project 1: Temperature Converter"] = r"""# Project 1: Temperature Converter · 温度转换器

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

👀 Compare this to the Python version — spot all the syntax differences!"""

T["Project 2: Simple Calculator"] = r"""# Project 2: Simple Calculator · 简单计算器

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

👀 Try adding more operators like \`%\` (modulo) or power!"""

T["Project 3: Mad Libs Game"] = r"""# Project 3: Mad Libs Game · 疯狂填词游戏

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

👀 Try creating your own Mad Libs template with different word types!"""

T["Comparison & Logical Operators"] = r"""# Comparison & Logical Operators · 比较和逻辑运算符

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

👀 Just memorize the three logical operator changes!"""

T["Nested if & Common Patterns"] = r"""# Nested if & Common Patterns · 嵌套if和常见模式

🎯 **What you'll learn · 你将学到:**
- Nesting \`if\` statements inside each other
- Grade classification pattern
- How C++ braces \`{}\` replace Python's indentation

Nested ifs are like a **decision tree** 🌳 — each branch leads to more branches. In Python, indentation shows nesting. In C++, curly braces \`{}\` do the job!

🔑 **Key things to notice · 注意要点:**
- Braces \`{}\` define code blocks (not indentation like Python)
- \`else if\` (two words) instead of Python's \`elif\`
- Indent your code for readability even though C++ doesn't require it!

👀 Trace through with a test score — which branch does the code take?"""

T["switch in Action"] = r"""# switch in Action · switch实战

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

👀 Try removing a \`break;\` — see what "fall-through" does!"""

T["Ternary Operator"] = r"""# Ternary Operator · 三元运算符

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

👀 Compare the C++ and Python ternary syntax — notice the different word order!"""

T["for Loop Examples"] = r"""# for Loop Examples · for循环示例

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

👀 Try different start values, conditions, and step sizes!"""

T["while and do-while"] = r"""# while and do-while · while和do-while循环

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

👀 Compare while vs do-while — when would you choose each?"""

T["Nested Loops"] = r"""# Nested Loops · 嵌套循环

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

👀 Trace through manually — draw what each iteration prints!"""

T["break and continue"] = r"""# break and continue · break和continue

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

👀 Trace the output carefully — break and continue change the flow!"""

T["Classic Loop Patterns"] = r"""# Classic Loop Patterns · 经典循环模式

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

👀 Try to understand the math behind each pattern before running!"""

T["Function Examples"] = r"""# Function Examples · 函数示例

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

👀 Notice the return types — every function declares what it gives back!"""

T["Function Overloading — Python CAN'T Do This!"] = r"""# Function Overloading — Python CAN'T Do This! · 函数重载

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

👀 Watch how the same function name behaves differently with different arguments!"""

T["Value vs Reference Demo"] = r"""# Value vs Reference Demo · 值传递 vs 引用传递

🎯 **What you'll learn · 你将学到:**
- Pass by value: function gets a COPY (original unchanged)
- Pass by reference (\`&\`): function gets the ORIGINAL
- C++'s most important function concept!

Pass by value = giving a **photocopy** 📄 (original safe). Pass by reference = giving your **actual document** 📋 (changes affect your copy)!

🔑 **Key things to notice · 注意要点:**
- By value: \`void func(int x)\` — copy, original unchanged
- By reference: \`void func(int& x)\` — the \`&\` means "actual variable"
- Use reference when you WANT to modify the original

👀 Compare the output — see how \`&\` modifies the original!"""

T["const Reference — Read-Only Access"] = r"""# const Reference — Read-Only Access · const引用

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

👀 Notice how const reference prevents accidental modifications!"""

T["C-Style Arrays vs Vectors"] = r"""# C-Style Arrays vs Vectors · C数组 vs 向量

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

👀 Compare the two — see why modern C++ prefers vectors!"""

T["Vector Operations"] = r"""# Vector Operations · 向量操作

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

👀 Try the range-based for loop — closest to Python's \`for x in list\`!"""

T["String Processing Patterns"] = r"""# String Processing Patterns · 字符串处理模式

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

👀 Try modifying these patterns to solve different challenges!"""

T["String Comparison & Searching"] = r"""# String Comparison & Searching · 字符串比较和搜索

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

👀 Watch for \`string::npos\` — C++ says "I didn't find it"!"""

T["Creating a Header File"] = r"""# Creating a Header File · 创建头文件

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

👀 This concept is unique to C++ — understand the header/source split!"""

T["Header Guards: Preventing Double Inclusion"] = r"""# Header Guards: Preventing Double Inclusion · 头文件保护

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

👀 \`#pragma once\` is simpler — most modern projects use it!"""

T["Class Split: Header + Implementation"] = r"""# Class Split: Header + Implementation · 类的分离

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

👀 Notice the \`::\` syntax — it connects implementations to their class!"""

T["Pointer Basics"] = r"""# Pointer Basics · 指针基础

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

👀 Draw arrows between pointers and values — visualize the connections!"""

T["Pointers and Functions"] = r"""# Pointers and Functions · 指针和函数

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

👀 Compare pointer vs reference style — which is cleaner?"""

T["Arrays and Pointers"] = r"""# Arrays and Pointers · 数组和指针

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

👀 Notice that arrays lose their size info when passed to functions!"""

T["Pointer Arithmetic in Action"] = r"""# Pointer Arithmetic in Action · 指针运算实战

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

👀 Watch the addresses — see how they increase by the size of int!"""

T["Struct Basics"] = r"""# Struct Basics · 结构体基础

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

👀 Think of structs as simple containers for grouping related data!"""

T["Classes: Data + Behavior"] = r"""# Classes: Data + Behavior · 类：数据+行为

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

👀 Compare side-by-side with Python class — very similar structure!"""

T["Public vs Private"] = r"""# Public vs Private · 公有vs私有

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

👀 Notice how private members can only be accessed through public methods!"""

T["Student Grade System"] = r"""# Student Grade System · 学生成绩系统

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

👀 Think about what other methods you'd add to this class!"""

T["Static Members & Operator Overloading"] = r"""# Static Members & Operator Overloading · 静态成员和运算符重载

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

👀 Look at how \`operator+\` lets you add Vector2D objects with \`+\`!"""

T["new and delete"] = r"""# new and delete · 分配和释放内存

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

👀 This is why C++ is harder but faster — you manage your own memory!"""

T["Vectors vs Raw Arrays"] = r"""# Vectors vs Raw Arrays · vector对比原始数组

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

👀 See the danger of raw arrays vs the safety of vectors!"""

T["Structs with Dynamic Memory"] = r"""# Structs with Dynamic Memory · 带动态内存的结构体

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

👀 Notice how vectors inside structs give you the best of both worlds!"""

T["Memory Leaks Demo"] = r"""# Memory Leaks Demo · 内存泄漏演示

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

👀 This is the #1 reason modern C++ avoids raw \`new\`/\`delete\`!"""

T["Smart Pointers: Modern C++ Memory Safety"] = r"""# Smart Pointers: Modern C++ Memory Safety · 智能指针

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

👀 Smart pointers give you C++'s power with Python's safety!"""

T["Inheritance Basics"] = r"""# Inheritance Basics · 继承基础

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

👀 Notice the \`: public\` syntax — it replaces Python's parentheses!"""

T["Practical OOP: Game Characters"] = r"""# Practical OOP: Game Characters · 实际OOP：游戏角色

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

👀 Think about what other character types you could add!"""

T["RPG Character Hierarchy"] = r"""# RPG Character Hierarchy · RPG角色层次结构

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

👀 Study the hierarchy — this is how real RPGs organize code!"""

T["map — Like Python's dict"] = r"""# map — Like Python's dict · map——类似Python的dict

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

👀 Notice that map entries are always sorted by key!"""

T["set — Unique Sorted Collection"] = r"""# set — Unique Sorted Collection · set——唯一有序集合

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

👀 Try inserting duplicates — the set silently ignores them!"""

T["unordered_map — Hash Map (Faster!)"] = r"""# unordered_map — Hash Map (Faster!) · 哈希表（更快！）

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

👀 For most problems, \`unordered_map\` is the better choice!"""

T["multimap & multiset: Allowing Duplicates"] = r"""# multimap & multiset: Allowing Duplicates · 允许重复

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

👀 Think about when you'd need duplicate keys!"""

T["Sorting — The Most Important Algorithm"] = r"""# Sorting — The Most Important Algorithm · 排序——最重要的算法

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

👀 Try different comparators — custom sorting is essential!"""

T["Binary Search"] = r"""# Binary Search · 二分查找

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

👀 Binary search is a TOP competition algorithm — master it!"""

T["More Useful Algorithms"] = r"""# More Useful Algorithms · 更多实用算法

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

👀 Explore the algorithm library — your secret competition weapon!"""

T["Lambdas with STL Algorithms"] = r"""# Lambdas with STL Algorithms · Lambda和STL算法

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

👀 Lambdas + sort = the most common competition pattern!"""

T["More Essential Algorithms"] = r"""# More Essential Algorithms · 更多必备算法

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

👀 \`next_permutation\` is a competition favorite!"""

T["Stack — LIFO"] = r"""# Stack — LIFO · 栈——后进先出

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

👀 Think LIFO — last pushed = first popped!"""

T["Queue — FIFO"] = r"""# Queue — FIFO · 队列——先进先出

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

👀 Think FIFO — first in, first out!"""

T["Priority Queue — Always Get the Best"] = r"""# Priority Queue — Always Get the Best · 优先队列

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

👀 Default is MAX-heap — opposite of Python's heapq!"""

T["Template Functions & Classes"] = r"""# Template Functions & Classes · 模板函数和类

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

👀 Templates are why C++ can be both type-safe AND generic!"""

T["Fast I/O Template"] = r"""# Fast I/O Template · 快速I/O模板

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

👀 Memorize this template — use it in every competition!"""

T["Full Competition Template"] = r"""# Full Competition Template · 完整竞赛模板

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

👀 Save this template — your competition starting kit!"""

T["Common Patterns"] = r"""# Common Patterns · 常见模式

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

👀 Master these three — they solve most beginner competition problems!"""

T["Classic Greedy Problems"] = r"""# Classic Greedy Problems · 经典贪心问题

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

👀 Think about WHY the greedy choice works — can you prove it?"""

T["Binary Search on Answer"] = r"""# Binary Search on Answer · 二分答案

🎯 **What you'll learn · 你将学到:**
- Binary search on the ANSWER space, not arrays!
- "Can I do it with X?" — yes→try smaller, no→try bigger
- One of the most powerful competition techniques

Binary search on answer: **"Can I achieve X?"** 🤔 — binary search the answer itself!

🔑 **Key things to notice · 注意要点:**
- Search the range of possible answers, not an array
- Define \`check(mid)\`: "Is this answer achievable?"
- If true → try better, if false → try other direction
- Reduces O(n) answer search to O(log n)!

👀 This technique appears in MANY competition problems!"""

T["Two Pointers Technique"] = r"""# Two Pointers Technique · 双指针技巧

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

👀 Two pointers + sorting = top competition combo!"""

T["Fibonacci — DP Hello World"] = r"""# Fibonacci — DP Hello World · 斐波那契——DP入门

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

👀 Compare naive vs DP — the speed difference is mind-blowing!"""

T["Classic DP: Climbing Stairs & Coin Change"] = r"""# Classic DP: Climbing Stairs & Coin Change · 经典DP

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

👀 Identify the state and transition for each problem!"""

T["2D DP: Grid Problems"] = r"""# 2D DP: Grid Problems · 二维DP：网格问题

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

👀 Draw the grid and fill values manually — see how DP builds the answer!"""

# Now do the replacement
import re

with open('src/data/cpp-lessons.ts', 'r') as f:
    lines = f.readlines()

# Find all code sections and their content ranges
sections = []
for i, line in enumerate(lines):
    if 'type: "code"' in line:
        for j in range(i, min(i + 5, len(lines))):
            stripped = lines[j].strip()
            if stripped.startswith('content:'):
                # Find closing backtick
                end = j
                bt_count = 0
                for k in range(j, min(j + 100, len(lines))):
                    bt_count += lines[k].count('`')
                    bt_count -= lines[k].count('\\`')
                    if bt_count >= 2:
                        end = k
                        break
                
                # Extract title from content
                content_text = ''.join(lines[j:end+1])
                title = None
                for key in T:
                    if key in content_text:
                        title = key
                        break
                
                sections.append({
                    'start': j,
                    'end': end,
                    'title': title,
                    'line': i + 1,
                })
                break

print(f"Found {len(sections)} code sections")

matched = 0
unmatched = []
for sec in sections:
    if sec['title']:
        matched += 1
    else:
        unmatched.append(sec['line'])

print(f"Matched: {matched}, Unmatched: {len(unmatched)}")
if unmatched:
    print(f"Unmatched lines: {unmatched}")

# Process backwards to maintain indices
for sec in reversed(sections):
    if not sec['title']:
        continue
    
    start = sec['start']
    end = sec['end']
    indent = lines[start][:len(lines[start]) - len(lines[start].lstrip())]
    
    new_content = T[sec['title']]
    new_line = f'{indent}content: `{new_content}`,\n'
    
    lines[start:end+1] = [new_line]

with open('src/data/cpp-lessons.ts', 'w') as f:
    f.writelines(lines)

print(f"Updated {matched} sections successfully!")
