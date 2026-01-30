#!/usr/bin/env python3
"""
Update all 82 type:"code" sections in cpp-lessons.ts with teaching content.
Strategy: Find each content field, replace it with enriched version.
"""

# Teaching content for all 82 code sections
# Key: line number of type:"code" -> new content string
# The content must use escaped backticks (\`) for template literals

TEACHING = {}

# 1. Line 191: Your First C++ Program
TEACHING[191] = r"""# Your First C++ Program · 你的第一个C++程序

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

# 2. Line 233: cout — Your New print()
TEACHING[233] = r"""# cout — Your New print() · cout是你的新print()

🎯 **What you'll learn · 你将学到:**
- How to use \`cout\` to display text, numbers, and variables
- The \`<<\` operator chains multiple items together
- \`endl\` vs \`\\n\` for new lines

Think of \`cout\` like a **conveyor belt** 🏭 — the \`<<\` arrows push items onto the belt one by one, and they come out on screen in order!

\`\`\`
cout << item1 << item2 << item3;
       ➡️       ➡️       ➡️  (all flow to the screen)
\`\`\`

🔑 **Key things to notice · 注意要点:**
- \`cout << "text"\` prints text (like Python's \`print()\`)
- Chain multiple items: \`cout << "Age: " << 15 << endl;\`
- \`endl\` = end line (like Python's automatic \\n)
- No automatic spaces between items — you must add them yourself!

👀 Try changing the messages and see how \`<<\` chains work!"""

# 3. Line 339: Comments in C++
TEACHING[339] = r"""# Comments in C++ · C++中的注释

🎯 **What you'll learn · 你将学到:**
- Single-line comments with \`//\`
- Multi-line comments with \`/* */\`
- How C++ comments compare to Python's \`#\`

Comments are like **sticky notes** 📝 on your code — the computer ignores them, but they help humans understand what's going on!

🔑 **Key things to notice · 注意要点:**
- \`//\` = single line comment (Python uses \`#\`)
- \`/* ... */\` = multi-line comment (Python uses \`\"\"\"...\"\"\"\`)
- Good comments explain WHY, not just WHAT
- Comments don't affect how the program runs

👀 Read through both styles and notice which feels more natural!"""

# 4. Line 373: Multiple Output Examples
TEACHING[373] = r"""# Multiple Output Examples · 多种输出示例

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

# 5. Line 538: The Basic Types
TEACHING[538] = r"""# The Basic Types · 基本数据类型

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

# 6. Line 598: Declaring Variables
TEACHING[598] = r"""# Declaring Variables · 声明变量

🎯 **What you'll learn · 你将学到:**
- How to create variables with explicit types
- Multiple ways to initialize variables
- \`const\` for values that never change

In Python you just write \`x = 5\`. In C++, you must **introduce yourself first** 🤝 — tell the compiler your type AND your name: \`int x = 5;\`

🔑 **Key things to notice · 注意要点:**
- Always specify the type: \`int age = 15;\`
- \`const\` = constant, can't be changed later (like Python's convention of ALL_CAPS)
- You can declare without initializing: \`int x;\` (but it's risky — it might contain garbage!)
- Multiple variables of same type: \`int a = 1, b = 2, c = 3;\`

👀 Notice how every variable declaration starts with its type!"""

# 7. Line 671: Type Conversion
TEACHING[671] = r"""# Type Conversion · 类型转换

🎯 **What you'll learn · 你将学到:**
- Implicit (automatic) vs explicit (manual) type conversion
- C++ casting syntax: \`static_cast<type>(value)\`
- How Python and C++ handle conversions differently

Type conversion is like **currency exchange** 💱 — you're converting one "type" of data into another. Sometimes it happens automatically, sometimes you have to ask!

🔑 **Key things to notice · 注意要点:**
- Implicit: \`int\` to \`double\` happens automatically (safe, no data loss)
- Implicit: \`double\` to \`int\` loses decimals! (dangerous ⚠️)
- Explicit: \`static_cast<int>(3.14)\` = "I know I'm losing data, do it anyway"
- Python's \`int()\`, \`float()\`, \`str()\` → C++ uses \`static_cast<type>()\`

👀 Watch what happens when a double gets converted to an int — where do the decimals go?"""

# 8. Line 773: Type Comparison Cheat Sheet
TEACHING[773] = r"""# Type Comparison Cheat Sheet · 类型对比速查表

🎯 **What you'll learn · 你将学到:**
- Side-by-side Python vs C++ variable declarations
- How both languages handle the same data differently
- Quick reference you can come back to anytime

This is your **Rosetta Stone** 🗿 — the same ideas in two languages! Keep this in mind whenever you're translating Python code to C++.

🔑 **Key things to notice · 注意要点:**
- Python auto-detects types; C++ needs explicit declarations
- Python \`str\` → C++ \`string\` (needs \`#include <string>\`)
- Python \`True/False\` → C++ \`true/false\` (lowercase!)
- Python has no \`char\` type — single characters are just strings

👀 Use this as a cheat sheet when converting your Python code!"""

# 9. Line 945: cin Basics
TEACHING[945] = r"""# cin Basics · cin基础

🎯 **What you'll learn · 你将学到:**
- How to read user input with \`cin >>\`
- \`cin\` is C++'s version of Python's \`input()\`
- The \`>>\` operator "extracts" data from the keyboard

If \`cout <<\` is a megaphone (output), then \`cin >>\` is a **microphone** 🎤 — it listens for input from the user and stores it in a variable!

\`\`\`
cin >> variable;
🎤 ➡️ 📦 (keyboard input flows into the variable)
\`\`\`

🔑 **Key things to notice · 注意要点:**
- \`cin >> x;\` reads input into variable \`x\`
- The variable must already be declared with a type!
- \`cin\` automatically converts input to the variable's type
- \`cin\` stops reading at whitespace (spaces, tabs, newlines)

👀 Try entering different types of input and see what happens!"""

# 10. Line 984: getline() — Read Full Lines
TEACHING[984] = r"""# getline() — Read Full Lines · 读取整行

🎯 **What you'll learn · 你将学到:**
- Why \`cin >>\` can't read sentences with spaces
- How \`getline()\` reads an entire line
- The \`cin\`/\`getline()\` mixing trap and how to fix it

\`cin >>\` is like a **picky eater** 🍽️ — it stops at the first space. \`getline()\` is like a **vacuum cleaner** 🧹 — it grabs EVERYTHING until the end of the line!

🔑 **Key things to notice · 注意要点:**
- \`cin >> name\` only reads ONE word (stops at space)
- \`getline(cin, line)\` reads the ENTIRE line including spaces
- ⚠️ Trap: After \`cin >>\`, there's a leftover newline — use \`cin.ignore()\` before \`getline()\`
- Python's \`input()\` always reads the full line — C++ makes you choose!

👀 Notice how getline handles sentences that cin would split up!"""

# 11. Line 1050: Output Formatting
TEACHING[1050] = r"""# Output Formatting · 输出格式化

🎯 **What you'll learn · 你将学到:**
- \`setw()\`, \`setprecision()\`, \`fixed\` for formatted output
- How to align columns and control decimal places
- C++ formatting vs Python's f-strings

Output formatting is like being a **newspaper typesetter** 📰 — you control exactly how everything lines up on the page. C++ gives you precise control!

🔑 **Key things to notice · 注意要点:**
- \`#include <iomanip>\` is needed for formatting tools
- \`setw(n)\` = set minimum width (like Python's \`{:>n}\`)
- \`fixed << setprecision(n)\` = show exactly n decimal places
- \`left\` / \`right\` = alignment direction
- These are "sticky" — they stay in effect until changed!

👀 Compare this to Python's f-string formatting — which do you find clearer?"""

# 12. Line 1138: Input/Output Comparison Summary
TEACHING[1138] = r"""# Input/Output Comparison Summary · 输入输出对比总结

🎯 **What you'll learn · 你将学到:**
- Complete side-by-side I/O comparison: Python vs C++
- All input and output techniques in one place
- When to use each approach

This is your **I/O master reference** 📋 — everything about getting data in and out of your program, in both languages!

🔑 **Key things to notice · 注意要点:**
- Python \`input()\` → C++ \`cin >>\` (single values) or \`getline()\` (full lines)
- Python \`print()\` → C++ \`cout <<\`
- Python f-strings → C++ \`<iomanip>\` functions
- C++ gives more control but requires more code

👀 This is a great reference to bookmark for future projects!"""

# 13. Line 1273: Integer Division
TEACHING[1273] = r"""# Integer Division — The Big Difference! · 整数除法的大区别！

🎯 **What you'll learn · 你将学到:**
- C++ integer division truncates (cuts off decimals)
- How to get decimal results when you need them
- The \`%\` modulo operator works the same as Python

This is the #1 bug trap for Python programmers! 🪤 In Python, \`7/2 = 3.5\`. In C++, \`7/2 = 3\` — the decimals just vanish! It's like a **coin machine** 🪙 that only gives whole coins back.

🔑 **Key things to notice · 注意要点:**
- \`int / int\` = integer result (decimals truncated, not rounded!)
- To get decimals: make at least one operand a \`double\`
- \`7.0 / 2\` or \`(double)7 / 2\` → \`3.5\`
- \`%\` (modulo) gives the remainder: \`7 % 2 = 1\`

👀 Watch what happens with integer division — this will save you hours of debugging!"""

# 14. Line 1317: Increment & Decrement
TEACHING[1317] = r"""# Increment & Decrement — Python Doesn't Have These! · 自增自减

🎯 **What you'll learn · 你将学到:**
- \`++\` and \`--\` operators (C++ exclusive!)
- Pre-increment (\`++x\`) vs post-increment (\`x++\`)
- Why C++ is literally named after this operator!

Fun fact: C++ is called "C++" because it's "C incremented by 1" — it's the NEXT version of C! The \`++\` operator is like a **turbo button** 🚀 — one symbol does what Python needs a whole statement for.

🔑 **Key things to notice · 注意要点:**
- \`x++\` or \`++x\` = add 1 to x (Python: \`x += 1\`)
- \`x--\` or \`--x\` = subtract 1 from x (Python: \`x -= 1\`)
- Pre (\`++x\`): increment THEN use the value
- Post (\`x++\`): use the value THEN increment
- In loops, \`i++\` is the most common pattern

👀 Pay attention to pre vs post increment — the difference matters!"""

# 15. Line 1363: Type Casting in Math
TEACHING[1363] = r"""# Type Casting in Math · 数学中的类型转换

🎯 **What you'll learn · 你将学到:**
- How integer math can give wrong answers
- Using \`static_cast\` to force correct results
- Common pitfalls when mixing types in calculations

Type casting in math is like using a **measuring cup** 🥤 instead of counting — sometimes you need more precision! If you divide with integers, C++ gives you a rough count. Cast to double for the exact amount.

🔑 **Key things to notice · 注意要点:**
- \`int / int\` always gives \`int\` (decimals lost!)
- Cast before dividing: \`static_cast<double>(total) / count\`
- Even one \`double\` in the expression makes the result \`double\`
- This is the most common math bug in C++ — always check your types!

👀 Look at how casting changes the division results!"""

# 16. Line 1437: Math Library Functions
TEACHING[1437] = r"""# Math Library Functions · 数学库函数

🎯 **What you'll learn · 你将学到:**
- \`#include <cmath>\` for math functions
- \`sqrt()\`, \`pow()\`, \`abs()\`, \`ceil()\`, \`floor()\`, and more
- How C++ math functions compare to Python's \`math\` module

The math library is your **scientific calculator** 🧮 built into C++! Same functions you know from Python's \`math\` module, just with a different import.

🔑 **Key things to notice · 注意要点:**
- \`#include <cmath>\` instead of Python's \`import math\`
- \`sqrt(x)\` = square root, \`pow(x, n)\` = x to the power n
- \`abs()\` = absolute value, \`ceil()\`/\`floor()\` = round up/down
- Functions work on \`double\` — be careful with \`int\` inputs!

👀 Try these functions with different values — they work just like Python's math module!"""

# 17. Line 1600: String Basics
TEACHING[1600] = r"""# String Basics · 字符串基础

🎯 **What you'll learn · 你将学到:**
- Creating and combining strings in C++
- \`#include <string>\` is required!
- String concatenation with \`+\` and comparison with \`==\`

Strings in C++ are like strings in Python, but you need to **invite them first** 🎟️ with \`#include <string>\`. Once included, most things work similarly!

🔑 **Key things to notice · 注意要点:**
- Must \`#include <string>\` to use string functions
- Concatenation: \`"Hello" + " " + "World"\` (same as Python!)
- \`.length()\` or \`.size()\` = string length (Python: \`len()\`)
- Access characters: \`s[0]\` works in both languages
- Strings are mutable in C++ (unlike Python!)

👀 Notice that C++ strings can be changed in place — Python strings can't!"""

# 18. Line 1640: String Methods
TEACHING[1640] = r"""# String Methods · 字符串方法

🎯 **What you'll learn · 你将学到:**
- C++ string methods vs Python string methods
- \`find()\`, \`substr()\`, \`replace()\`, \`append()\`
- Method names are different but concepts are the same

String methods are your **text editing toolkit** ✂️ — find, cut, replace, and rearrange text. The tools are the same; only the names changed!

🔑 **Key things to notice · 注意要点:**
- Python \`.find()\` → C++ \`.find()\` (returns position or \`string::npos\`)
- Python \`s[a:b]\` → C++ \`s.substr(a, length)\` (length, not end index!)
- Python \`.replace()\` → C++ \`.replace(pos, len, new_str)\`
- Python \`.upper()\` → No direct equivalent (need to loop or use \`<algorithm>\`)

👀 Pay special attention to \`substr()\` — it takes (start, LENGTH), not (start, end)!"""

# 19. Line 1692: Character Operations
TEACHING[1692] = r"""# Character Operations · 字符操作

🎯 **What you'll learn · 你将学到:**
- C++ has a dedicated \`char\` type (Python doesn't!)
- Character functions: \`isalpha()\`, \`isdigit()\`, \`toupper()\`
- Characters are secretly numbers (ASCII)

Characters in C++ are like **individual LEGO bricks** 🧱 — each one is a single piece you can examine and transform. Python treats single characters as one-character strings; C++ gives them their own type!

🔑 **Key things to notice · 注意要点:**
- \`char c = 'A';\` — single quotes for characters!
- \`isalpha(c)\`, \`isdigit(c)\` = check character type
- \`toupper(c)\`, \`tolower(c)\` = convert case
- Characters are numbers: \`'A'\` = 65, \`'a'\` = 97
- \`c - '0'\` converts digit character to integer

👀 Try the ASCII math — characters behave like numbers in C++!"""

# 20. Line 1801: Useful String Patterns
TEACHING[1801] = r"""# Useful String Patterns · 实用字符串技巧

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

👀 These patterns come up constantly in coding challenges — practice them!"""

# 21. Line 1951: Project 1: Temperature Converter
TEACHING[1951] = r"""# Project 1: Temperature Converter · 温度转换器

🎯 **What you'll learn · 你将学到:**
- Building a complete program with input, math, and output
- Applying everything from Lessons 1-5
- Formatted output with decimal places

Your first real project! 🎉 This is like building your first **gadget** 🔧 — it takes input (temperature), processes it (math formula), and gives output (converted temperature). Simple but satisfying!

🔑 **Key things to notice · 注意要点:**
- Formula: \`F = C × 9/5 + 32\`
- Use \`double\` for temperature (decimals matter!)
- Format output with \`fixed << setprecision(1)\`
- The logic is identical to Python — only syntax changes

👀 Compare this to the Python version — spot all the syntax differences!"""

# 22. Line 1985: Project 2: Simple Calculator
TEACHING[1985] = r"""# Project 2: Simple Calculator · 简单计算器

🎯 **What you'll learn · 你将学到:**
- Using \`if/else if\` with character comparison
- Reading different types of input
- Handling edge cases (division by zero)

A calculator is the **Swiss Army knife** 🔪 of beginner projects — it combines input, conditionals, and math all in one! Plus, you're building something actually useful.

🔑 **Key things to notice · 注意要点:**
- Use \`char\` for the operator (single character)
- \`if/else if\` chain to handle +, -, *, /
- Always check for division by zero!
- Compare with the Python version — very similar logic

👀 Try adding more operators like \`%\` (modulo) or \`^\` (power)!"""

# 23. Line 2036: Project 3: Mad Libs Game
TEACHING[2036] = r"""# Project 3: Mad Libs Game · 疯狂填词游戏

🎯 **What you'll learn · 你将学到:**
- Reading multiple string inputs with \`getline()\`
- Combining strings into a fun story
- Making interactive programs that are actually fun!

Mad Libs is like a **story template** 📝 with blanks — the user fills in words, and hilarious stories appear! This project practices strings, input, and output all at once.

🔑 **Key things to notice · 注意要点:**
- Use \`getline()\` to read multi-word inputs
- String concatenation builds the final story
- The \`+\` operator joins strings together
- This is pure creativity — make your story funny! 😄

👀 Try creating your own Mad Libs template with different word types!"""

# 24. Line 2305: Comparison & Logical Operators
TEACHING[2305] = r"""# Comparison & Logical Operators · 比较和逻辑运算符

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
- These return \`true\`/\`false\` (lowercase in C++)

👀 The comparison operators are identical — just memorize the three logical operator changes!"""

# 25. Line 2346: Nested if & Common Patterns
TEACHING[2346] = r"""# Nested if & Common Patterns · 嵌套if和常见模式

🎯 **What you'll learn · 你将学到:**
- Nesting \`if\` statements inside each other
- Grade classification pattern
- How C++ braces \`{}\` replace Python's indentation

Nested ifs are like a **decision tree** 🌳 — each branch leads to more branches. In Python, indentation shows the nesting. In C++, curly braces \`{}\` do the job!

🔑 **Key things to notice · 注意要点:**
- Braces \`{}\` define code blocks (not indentation like Python)
- \`else if\` (two words) instead of Python's \`elif\`
- You can nest as deep as you want (but keep it readable!)
- Indent your code even though C++ doesn't require it — readability matters!

👀 Trace through with a test score — which branch does the code take?"""

# 26. Line 2571: switch in Action
TEACHING[2571] = r"""# switch in Action · switch实战

🎯 **What you'll learn · 你将学到:**
- The \`switch\` statement — C++ exclusive (no Python equivalent!)
- \`case\`, \`break\`, and \`default\` keywords
- When to use \`switch\` vs \`if/else\`

\`switch\` is like a **vending machine** 🎰 — you put in a value, and it jumps directly to the matching case! Faster and cleaner than checking each option with \`if/else\`.

🔑 **Key things to notice · 注意要点:**
- \`switch\` only works with integers and characters (not strings!)
- Each \`case\` needs a \`break;\` or it "falls through" to the next case
- \`default:\` = the "else" of switch (handles unmatched values)
- Python has no \`switch\` — it uses \`if/elif\` chains or \`match\` (3.10+)

👀 Try removing a \`break;\` statement — see what "fall-through" does!"""

# 27. Line 2647: Ternary Operator
TEACHING[2647] = r"""# Ternary Operator · 三元运算符

🎯 **What you'll learn · 你将学到:**
- One-line if/else with \`condition ? valueA : valueB\`
- Comparing to Python's \`valueA if condition else valueB\`
- When to use ternary vs regular if/else

The ternary operator is a **mini if/else** in one line — like a quick yes/no question ❓! Great for simple choices, but don't overuse it for complex logic.

🔑 **Key things to notice · 注意要点:**
- Syntax: \`condition ? if_true : if_false\`
- Python: \`if_true if condition else if_false\` (order is different!)
- Perfect for simple assignments and return values
- Don't nest ternaries — it becomes unreadable! 🤯

👀 Compare the C++ and Python ternary syntax — notice the different word order!"""

# 28. Line 2861: for Loop Examples
TEACHING[2861] = r"""# for Loop Examples · for循环示例

🎯 **What you'll learn · 你将学到:**
- C++ for loop: \`for (init; condition; update)\`
- Three parts give you complete control over the loop
- Counting up, down, by 2s, and more

C++ for loops are like a **treadmill with controls** 🏃 — you set the start speed, when to stop, and how fast to accelerate. Python's \`for i in range()\` is simpler but less flexible!

\`\`\`
for (int i = 0; i < 5; i++)
     ⬆️ start   ⬆️ keep going?  ⬆️ next step
\`\`\`

🔑 **Key things to notice · 注意要点:**
- Three parts: \`(initialization; condition; increment)\`
- Python \`for i in range(5)\` → C++ \`for (int i = 0; i < 5; i++)\`
- You can count backwards: \`for (int i = 10; i > 0; i--)\`
- You can skip: \`for (int i = 0; i < 100; i += 2)\`

👀 Try different start values, conditions, and step sizes!"""

# 29. Line 2909: while and do-while
TEACHING[2909] = r"""# while and do-while · while和do-while循环

🎯 **What you'll learn · 你将学到:**
- \`while\` loops work the same as Python
- \`do-while\` is C++ exclusive — runs at least once!
- Choosing between \`for\`, \`while\`, and \`do-while\`

\`while\` is like a **cautious guard** 🛡️ — it checks before letting you in. \`do-while\` is like a **rollercoaster** 🎢 — you ride at least once, THEN it asks if you want to go again!

🔑 **Key things to notice · 注意要点:**
- \`while\`: check condition FIRST, then run (same as Python)
- \`do-while\`: run FIRST, then check condition (Python has no equivalent!)
- \`do-while\` is perfect for menus: show options at least once
- Don't forget the semicolon after \`while(condition);\` in do-while!

👀 Compare while vs do-while — when would you choose each one?"""

# 30. Line 3021: Nested Loops
TEACHING[3021] = r"""# Nested Loops · 嵌套循环

🎯 **What you'll learn · 你将学到:**
- Loops inside loops for 2D patterns
- How the inner loop completes for each outer loop iteration
- Building grids, triangles, and patterns

Nested loops are like a **clock** ⏰ — the minute hand (inner loop) goes around 60 times for every 1 tick of the hour hand (outer loop). Together they cover every combination!

🔑 **Key things to notice · 注意要点:**
- Outer loop = rows, inner loop = columns (for grids)
- Total iterations = outer × inner (5×5 = 25 iterations!)
- Use \`i\` for outer, \`j\` for inner (convention)
- \`endl\` after inner loop = move to next row

👀 Trace through manually — draw what each iteration prints!"""

# 31. Line 3110: break and continue
TEACHING[3110] = r"""# break and continue · break和continue

🎯 **What you'll learn · 你将学到:**
- \`break\` exits the loop entirely
- \`continue\` skips to the next iteration
- Same concepts as Python, same keywords!

\`break\` is the **emergency exit** 🚪 — you leave the loop completely. \`continue\` is like **skipping a song** ⏭️ — you skip this round but keep the playlist going!

🔑 **Key things to notice · 注意要点:**
- \`break\` = stop the loop RIGHT NOW
- \`continue\` = skip the rest of this iteration, go to next
- Works exactly like Python's \`break\` and \`continue\`
- In nested loops, they only affect the innermost loop

👀 Trace the output carefully — break and continue change the flow!"""

# 32. Line 3198: Classic Loop Patterns
TEACHING[3198] = r"""# Classic Loop Patterns · 经典循环模式

🎯 **What you'll learn · 你将学到:**
- Diamond, pyramid, and number patterns
- These appear in coding interviews and competitions!
- Building complex patterns from simple loop logic

Loop patterns are the **gym workout** 💪 for your programming brain — they build the muscle memory for thinking in nested loops. Plus, they look cool!

🔑 **Key things to notice · 注意要点:**
- Each pattern uses nested loops with different conditions
- Spaces are just as important as stars for alignment
- Work out the math: how many spaces? how many stars per row?
- These patterns are common in AP CS and coding competitions

👀 Try to understand the math behind each pattern before running!"""

# 33. Line 3360: Function Examples
TEACHING[3360] = r"""# Function Examples · 函数示例

🎯 **What you'll learn · 你将学到:**
- Declaring functions with return types and parameters
- \`void\` functions (no return value)
- How C++ functions compare to Python's \`def\`

Functions in C++ are like **vending machines** 🎰 — you put in parameters (coins), the function does its work (makes your drink), and returns a result. But unlike Python, you must specify what TYPE of drink comes out!

🔑 **Key things to notice · 注意要点:**
- Return type goes BEFORE the function name: \`int add(int a, int b)\`
- Python \`def\` → C++ specifies return type (\`int\`, \`string\`, \`void\`, etc.)
- \`void\` = no return value (like Python functions without \`return\`)
- Functions must be declared BEFORE they're called (or use prototypes)

👀 Notice the return types — every function declares what it gives back!"""

# 34. Line 3407: Function Overloading
TEACHING[3407] = r"""# Function Overloading — Python CAN'T Do This! · 函数重载

🎯 **What you'll learn · 你将学到:**
- Multiple functions with the SAME name but different parameters
- The compiler picks the right one based on argument types
- This is impossible in Python!

Function overloading is like having a **Swiss Army knife** 🔪 with one name but different tools depending on what you give it. Call \`add(1, 2)\` → uses int version. Call \`add(1.5, 2.5)\` → uses double version!

🔑 **Key things to notice · 注意要点:**
- Same function name, different parameter types or count
- Compiler automatically picks the correct version
- Python can't do this — it would just overwrite the first function!
- Makes code cleaner: one name for similar operations

👀 Watch how the same function name behaves differently with different argument types!"""

# 35. Line 3609: Value vs Reference Demo
TEACHING[3609] = r"""# Value vs Reference Demo · 值传递 vs 引用传递

🎯 **What you'll learn · 你将学到:**
- Pass by value: function gets a COPY (original unchanged)
- Pass by reference (\`&\`): function gets the ORIGINAL
- This is C++'s most important concept for functions!

Pass by value is like giving someone a **photocopy** 📄 — they can scribble on it, but your original is safe. Pass by reference is like giving them your **actual document** 📋 — any changes affect YOUR copy!

🔑 **Key things to notice · 注意要点:**
- By value: \`void func(int x)\` — gets a copy, original unchanged
- By reference: \`void func(int& x)\` — the \`&\` means "the actual variable"
- Python passes objects by reference (for lists/dicts), values for ints/strings
- Use reference when you WANT to modify the original

👀 Compare the output — see how \`&\` makes the function modify the original!"""

# 36. Line 3657: const Reference
TEACHING[3657] = r"""# const Reference — Read-Only Access · const引用

🎯 **What you'll learn · 你将学到:**
- \`const &\` = pass by reference but READ ONLY
- Best practice for passing large objects (strings, vectors)
- The "best of both worlds" parameter style

\`const &\` is like a **museum display** 🏛️ — you can look at the original (efficient!) but you can't touch it (safe!). It combines the speed of reference with the safety of a copy.

🔑 **Key things to notice · 注意要点:**
- \`const string& s\` = efficient (no copy) + safe (can't modify)
- Use for strings, vectors, and other large objects
- Trying to modify a \`const &\` parameter = compiler error!
- This is the #1 best practice for function parameters in C++

👀 Notice how const reference prevents accidental modifications!"""

# 37. Line 3841: C-Style Arrays vs Vectors
TEACHING[3841] = r"""# C-Style Arrays vs Vectors · C数组 vs 向量

🎯 **What you'll learn · 你将学到:**
- Old-school C arrays: fixed size, declared at compile time
- Modern \`vector\`: dynamic size, can grow and shrink
- Why vectors are almost always better!

C arrays are like **fixed mailboxes** 📬 — you choose the size when you build them, and that's it forever. Vectors are like **expandable folders** 📁 — they grow as you add more items!

🔑 **Key things to notice · 注意要点:**
- C array: \`int arr[5] = {1,2,3,4,5};\` — size fixed forever
- Vector: \`vector<int> v = {1,2,3,4,5};\` — can grow/shrink
- Vectors need \`#include <vector>\`
- Vectors are like Python lists — dynamic and flexible
- Use vectors unless you have a specific reason for arrays!

👀 Compare the two — see why modern C++ prefers vectors!"""

# 38. Line 3889: Vector Operations
TEACHING[3889] = r"""# Vector Operations · 向量操作

🎯 **What you'll learn · 你将学到:**
- \`push_back()\`, \`pop_back()\`, \`size()\`, \`sort()\`
- Iterating with range-based for loops
- Vectors are C++'s answer to Python lists!

Vectors are your **toolbox** 🧰 for storing collections of data. They're the closest thing C++ has to Python's lists, and they come packed with useful operations!

🔑 **Key things to notice · 注意要点:**
- \`v.push_back(x)\` = Python's \`list.append(x)\`
- \`v.pop_back()\` = remove last element
- \`v.size()\` = Python's \`len(list)\`
- \`sort(v.begin(), v.end())\` = Python's \`list.sort()\`
- Range-based for: \`for (int x : v)\` = Python's \`for x in list\`

👀 Try the range-based for loop — it's the closest to Python's \`for x in list\`!"""

# 39. Line 4013: String Processing Patterns
TEACHING[4013] = r"""# String Processing Patterns · 字符串处理模式

🎯 **What you'll learn · 你将学到:**
- Counting vowels, reversing strings, changing case
- Common competition-style string problems
- Applying character operations at scale

These are your **string kung fu moves** 🥋 — essential techniques you'll use in almost every string problem. Master these patterns and string questions become easy!

🔑 **Key things to notice · 注意要点:**
- Loop through characters: \`for (char c : str)\`
- Check with \`isalpha()\`, \`isdigit()\`, \`isupper()\`, \`islower()\`
- Transform with \`toupper()\`, \`tolower()\`
- Build new strings character by character
- These patterns appear in AP CS and USACO problems!

👀 Try modifying these patterns to solve different string challenges!"""

# 40. Line 4119: String Comparison & Searching
TEACHING[4119] = r"""# String Comparison & Searching · 字符串比较和搜索

🎯 **What you'll learn · 你将学到:**
- Comparing strings with \`==\`, \`<\`, \`>\` (lexicographic order)
- Finding substrings with \`.find()\`
- \`string::npos\` = "not found" indicator

String searching is like using **Ctrl+F** 🔍 in a document — you look for a pattern inside text. C++ gives you precise tools to find, compare, and analyze strings!

🔑 **Key things to notice · 注意要点:**
- \`s1 == s2\` compares content (same as Python)
- \`s1 < s2\` = lexicographic (dictionary) comparison
- \`.find("text")\` returns position, or \`string::npos\` if not found
- Always check \`if (pos != string::npos)\` after finding!
- Python's \`"text" in s\` → C++ \`s.find("text") != string::npos\`

👀 Watch for \`string::npos\` — it's how C++ says "I didn't find it"!"""

# 41. Line 4344: Creating a Header File
TEACHING[4344] = r"""# Creating a Header File · 创建头文件

🎯 **What you'll learn · 你将学到:**
- What header files (\`.h\`) are and why they exist
- Separating declarations from implementations
- How \`#include\` actually works

Header files are like a **table of contents** 📑 in a book — they list what's available without showing all the details. Other files read the table of contents to know what functions exist!

🔑 **Key things to notice · 注意要点:**
- Header (\`.h\`): declarations — WHAT functions exist
- Source (\`.cpp\`): implementations — HOW functions work
- \`#include "myfile.h"\` for your own headers
- \`#include <iostream>\` for system headers (angle brackets)
- Python doesn't have this — \`import\` does everything at once!

👀 This concept is unique to C++ — understand the header/source split!"""

# 42. Line 4444: Header Guards
TEACHING[4444] = r"""# Header Guards: Preventing Double Inclusion · 头文件保护

🎯 **What you'll learn · 你将学到:**
- Why including the same header twice causes errors
- \`#ifndef / #define / #endif\` pattern
- Modern alternative: \`#pragma once\`

Header guards are like a **"Do Not Enter If Already Inside"** sign 🚫 — they prevent the same header from being included twice, which would confuse the compiler!

🔑 **Key things to notice · 注意要点:**
- Without guards: including twice = "already defined" errors
- Classic pattern: \`#ifndef MYFILE_H / #define MYFILE_H / ... / #endif\`
- Modern shortcut: \`#pragma once\` (works on all modern compilers)
- Python handles this automatically — no duplicate import issues!

👀 The \`#pragma once\` approach is simpler — most modern projects use it!"""

# 43. Line 4631: Class Split: Header + Implementation
TEACHING[4631] = r"""# Class Split: Header + Implementation · 类的分离

🎯 **What you'll learn · 你将学到:**
- How real C++ projects organize classes across files
- Header file for the class declaration
- Source file for method implementations

This is how **professional C++ projects** 🏗️ are organized — like separating a recipe's ingredients list (header) from the cooking instructions (source). It keeps large projects manageable!

🔑 **Key things to notice · 注意要点:**
- Header: class definition with method signatures
- Source: method implementations using \`ClassName::methodName()\`
- The \`::\` is the "scope resolution operator" — says which class the method belongs to
- Python puts everything in one file — C++ spreads it across files for better organization

👀 Notice the \`::\` syntax — it connects implementations to their class!"""

# 44. Line 4970: Pointer Basics
TEACHING[4970] = r"""# Pointer Basics · 指针基础

🎯 **What you'll learn · 你将学到:**
- What pointers are: variables that store memory addresses
- \`&\` = "address of", \`*\` = "value at address"
- Why pointers make C++ so powerful (and tricky!)

A pointer is like a **home address** 🏠 — it doesn't contain the house itself, just the address telling you WHERE to find it. The \`&\` operator asks "what's your address?" and \`*\` says "take me there!"

🔑 **Key things to notice · 注意要点:**
- \`int* p = &x;\` — p stores the ADDRESS of x
- \`*p\` = "go to that address and get/set the value" (dereferencing)
- \`&x\` = "what is x's address?"
- Python has no pointers — everything uses references behind the scenes
- Pointers are THE concept that makes C++ unique!

👀 Draw arrows between pointers and values — visualize the connections!"""

# 45. Line 5011: Pointers and Functions
TEACHING[5011] = r"""# Pointers and Functions · 指针和函数

🎯 **What you'll learn · 你将学到:**
- Passing pointers to functions
- Pointers vs references for modifying values
- Why C used pointers before references existed

Pointers in functions are like giving someone your **actual home address** 📮 instead of a description — they can go there and change things directly!

🔑 **Key things to notice · 注意要点:**
- Pass pointer: \`void func(int* p)\` — uses \`*p\` to access value
- Pass reference: \`void func(int& x)\` — cleaner syntax, same effect
- Pointers can be \`nullptr\` (null) — references can't!
- Modern C++ prefers references over pointers for function parameters
- Pointers are still needed for arrays and dynamic memory

👀 Compare pointer vs reference parameter style — which is cleaner?"""

# 46. Line 5075: Arrays and Pointers
TEACHING[5075] = r"""# Arrays and Pointers · 数组和指针

🎯 **What you'll learn · 你将学到:**
- Arrays "decay" into pointers when passed to functions
- Array name = pointer to first element
- Why C++ arrays and pointers are deeply connected

Arrays and pointers are **best friends** 👯 in C++ — an array name IS basically a pointer to its first element! This is why you can pass arrays to functions so easily.

🔑 **Key things to notice · 注意要点:**
- \`arr\` = pointer to \`arr[0]\` (first element)
- Passing array to function = passing pointer to first element
- Must pass size separately (arrays don't know their own size!)
- Python lists carry their size — C++ arrays don't
- This is why vectors (which know their size) are preferred

👀 Notice that arrays lose their size info when passed to functions!"""

# 47. Line 5173: Pointer Arithmetic
TEACHING[5173] = r"""# Pointer Arithmetic in Action · 指针运算实战

🎯 **What you'll learn · 你将学到:**
- Moving pointers with \`+\`, \`-\`, \`++\`, \`--\`
- Pointer arithmetic automatically accounts for type size
- Walking through arrays using pointers

Pointer arithmetic is like walking along a **number line** 📏 — but each step moves by the SIZE of the data type. For \`int*\`, each \`+1\` jumps 4 bytes forward!

🔑 **Key things to notice · 注意要点:**
- \`p + 1\` = next element (not next byte!)
- \`p + n\` = jump n elements forward
- \`*p\` = value at current position, \`*(p+1)\` = next value
- \`p[i]\` is the same as \`*(p + i)\`
- The compiler knows the type size and handles the math

👀 Watch the addresses — see how they increase by the size of int!"""

# 48. Line 5358: Struct Basics
TEACHING[5358] = r"""# Struct Basics · 结构体基础

🎯 **What you'll learn · 你将学到:**
- Creating custom data types with \`struct\`
- Grouping related data together
- How C++ structs compare to Python classes

A struct is like a **form template** 📋 — it groups related information (name, age, grade) into one package. Instead of separate variables, one struct holds everything about an entity!

🔑 **Key things to notice · 注意要点:**
- \`struct Student { string name; int age; double gpa; };\` — don't forget the semicolon!
- Access members with dot: \`s.name\`, \`s.age\`
- Like a simplified Python class (data only, no methods)
- Structs default to \`public\` (classes default to \`private\`)
- Great for competition programming — quick custom types!

👀 Think of structs as simple containers — perfect for grouping related data!"""

# 49. Line 5413: Classes: Data + Behavior
TEACHING[5413] = r"""# Classes: Data + Behavior · 类：数据+行为

🎯 **What you'll learn · 你将学到:**
- C++ classes combine data AND methods
- Constructor = Python's \`__init__\`
- How C++ OOP compares to Python OOP

Classes are like **blueprints** 🏗️ for objects — they define both what data the object has (attributes) AND what it can do (methods). Same idea as Python classes!

🔑 **Key things to notice · 注意要点:**
- \`class Dog { };\` — don't forget the semicolon after \`}\`!
- Constructor: same name as class (Python uses \`__init__\`)
- \`this->\` = Python's \`self.\` (refers to the current object)
- \`public:\` and \`private:\` sections control access
- Create objects: \`Dog myDog("Rex", 5);\` (no \`new\` keyword needed!)

👀 Compare side-by-side with Python class — the structure is very similar!"""

# 50. Line 5462: Public vs Private
TEACHING[5462] = r"""# Public vs Private · 公有vs私有

🎯 **What you'll learn · 你将学到:**
- \`public\`: accessible from anywhere
- \`private\`: only accessible inside the class
- Getters and setters for controlled access

Public vs Private is like a **restaurant** 🍽️ — the dining area is public (customers can access it), but the kitchen is private (only chefs allowed). You interact with the kitchen through the waiter (getter/setter methods)!

🔑 **Key things to notice · 注意要点:**
- \`private:\` data + \`public:\` methods = best practice (encapsulation)
- Getters: \`int getAge() { return age; }\` — read private data
- Setters: \`void setAge(int a) { age = a; }\` — write private data with validation
- Python uses \`_underscore\` convention; C++ enforces it with \`private:\`
- Classes default to private; structs default to public

👀 Notice how private members can only be accessed through public methods!"""

# 51. Line 5594: Student Grade System
TEACHING[5594] = r"""# Student Grade System · 学生成绩系统

🎯 **What you'll learn · 你将学到:**
- Building a complete class with real-world purpose
- Methods that process internal data
- Combining everything from OOP lessons

This is a **real-world mini project** 🎓 — a student grade system that shows classes in action! It combines constructors, methods, private data, and practical logic.

🔑 **Key things to notice · 注意要点:**
- Private data stores grades; public methods analyze them
- Methods can calculate averages, find highest/lowest grades
- The class encapsulates all student-related logic
- Same design pattern used in real school software!

👀 Think about what other methods you'd add to this class!"""

# 52. Line 5656: Static Members & Operator Overloading
TEACHING[5656] = r"""# Static Members & Operator Overloading · 静态成员和运算符重载

🎯 **What you'll learn · 你将学到:**
- \`static\` members shared across ALL objects
- Operator overloading: make \`+\`, \`-\`, \`==\` work with your classes
- Python's \`__add__\` → C++ \`operator+\`

Static members are like a **class scoreboard** 📊 — shared by everyone in the class, not individual. Operator overloading is like teaching your objects to **understand math** ➕ — you define what \`+\` means for your custom type!

🔑 **Key things to notice · 注意要点:**
- \`static int count;\` = one variable shared by ALL objects
- \`Vector2D operator+(const Vector2D& other)\` = define what \`+\` does
- Python \`__add__\` → C++ \`operator+\`
- Python \`__str__\` → C++ \`operator<<\` (with \`friend\`)
- Operator overloading makes custom classes feel like built-in types!

👀 Look at how \`operator+\` lets you add two Vector2D objects with \`+\`!"""

# 53. Line 5814: new and delete
TEACHING[5814] = r"""# new and delete · 分配和释放内存

🎯 **What you'll learn · 你将学到:**
- \`new\` allocates memory on the heap
- \`delete\` frees that memory
- Stack vs heap memory — where do variables live?

Memory management is like **renting an apartment** 🏢 — \`new\` signs the lease (allocates memory), and \`delete\` ends it (frees memory). Forget to \`delete\` = you're paying rent on an empty apartment forever! (memory leak)

🔑 **Key things to notice · 注意要点:**
- Stack: automatic, freed when function ends (local variables)
- Heap: manual with \`new\`/\`delete\`, YOU control the lifetime
- \`int* p = new int(42);\` → creates int on heap
- \`delete p;\` → frees the memory (ALWAYS do this!)
- Python handles this automatically with garbage collection

👀 This is why C++ is harder but faster — you manage your own memory!"""

# 54. Line 5854: Vectors vs Raw Arrays
TEACHING[5854] = r"""# Vectors vs Raw Arrays · vector对比原始数组

🎯 **What you'll learn · 你将学到:**
- Why raw \`new[]\` arrays are dangerous
- How vectors handle memory automatically
- Modern C++ best practice: always prefer vectors!

Raw arrays with \`new\` are like juggling **sharp knives** 🔪 — one mistake and you're hurt (memory leak!). Vectors are like using a **knife holder** 🧰 — safe, organized, and automatic!

🔑 **Key things to notice · 注意要点:**
- \`new int[n]\` → must remember \`delete[] arr\` (easy to forget!)
- \`vector<int>\` → automatically manages memory
- Vectors know their size; raw arrays don't
- Modern C++: NEVER use \`new[]\` for arrays — use vectors!
- This matches Python's approach — lists handle everything

👀 See the danger of raw arrays vs the safety of vectors!"""

# 55. Line 5908: Structs with Dynamic Memory
TEACHING[5908] = r"""# Structs with Dynamic Memory · 带动态内存的结构体

🎯 **What you'll learn · 你将学到:**
- Using vectors inside structs
- Combining custom types with dynamic collections
- Real-world data modeling patterns

Structs with dynamic data are like **expandable binders** 📒 — the binder (struct) has a label and some fixed info, but inside it can hold a growing collection of pages (vector)!

🔑 **Key things to notice · 注意要点:**
- Vectors inside structs = dynamic collections in your custom type
- No manual memory management needed (vectors handle it!)
- This pattern is super common in real programs
- Think: a Team has a name (fixed) and a roster of players (dynamic)

👀 Notice how vectors inside structs give you the best of both worlds!"""

# 56. Line 5989: Memory Leaks Demo
TEACHING[5989] = r"""# Memory Leaks Demo · 内存泄漏演示

🎯 **What you'll learn · 你将学到:**
- What memory leaks are and why they're dangerous
- How to spot and prevent leaks
- Why Python programmers never worry about this!

A memory leak is like leaving the **faucet running** 🚰 — water (memory) keeps flowing but nobody's using it. Eventually, you run out! Professional C++ devs spend lots of time hunting these bugs.

🔑 **Key things to notice · 注意要点:**
- Leak = \`new\` without matching \`delete\`
- Each leak wastes memory until the program ends
- In long-running programs, leaks can crash the system!
- Tools like Valgrind help detect leaks
- Best prevention: use vectors, smart pointers, and RAII

👀 This is the #1 reason modern C++ avoids raw \`new\`/\`delete\`!"""

# 57. Line 6026: Smart Pointers
TEACHING[6026] = r"""# Smart Pointers: Modern C++ Memory Safety · 智能指针

🎯 **What you'll learn · 你将学到:**
- \`unique_ptr\` and \`shared_ptr\` — automatic memory management
- No more \`delete\` needed!
- How modern C++ approaches Python's automatic memory management

Smart pointers are like **self-returning library books** 📚 — when you're done with them, they return themselves automatically! No more forgetting to \`delete\`.

🔑 **Key things to notice · 注意要点:**
- \`unique_ptr<T>\` = one owner, auto-deletes when done
- \`shared_ptr<T>\` = multiple owners, deletes when last owner is done
- \`make_unique<T>()\` and \`make_shared<T>()\` to create them
- Needs \`#include <memory>\`
- Modern C++ rule: avoid raw \`new\`/\`delete\` — use smart pointers!

👀 Smart pointers give you C++'s power with Python's safety!"""

# 58. Line 6210: Inheritance Basics
TEACHING[6210] = r"""# Inheritance Basics · 继承基础

🎯 **What you'll learn · 你将学到:**
- Creating child classes that extend parent classes
- \`: public Base\` syntax for inheritance
- \`virtual\` functions for polymorphism

Inheritance is like **family traits** 👨‍👩‍👧 — the child class inherits everything from the parent and can add its own unique features. A Dog IS an Animal with extra dog-specific stuff!

🔑 **Key things to notice · 注意要点:**
- \`class Dog : public Animal\` — Dog inherits from Animal
- Python \`class Dog(Animal)\` → C++ \`class Dog : public Animal\`
- \`virtual\` = method can be overridden by child classes
- \`override\` keyword confirms you're intentionally overriding
- Constructor calls parent: \`Dog() : Animal("dog") { }\`

👀 Notice the \`: public\` syntax — it replaces Python's parentheses!"""

# 59. Line 6270: Practical OOP: Game Characters
TEACHING[6270] = r"""# Practical OOP: Game Characters · 实际OOP：游戏角色

🎯 **What you'll learn · 你将学到:**
- Building a game character hierarchy with OOP
- Abstract base classes and polymorphism
- Real-world OOP design in action!

This is OOP in action with a **video game** 🎮! Different character types (warrior, mage, archer) share common traits but have unique abilities. This is EXACTLY how real games are coded!

🔑 **Key things to notice · 注意要点:**
- Base class: common attributes (name, HP, attack)
- Derived classes: unique abilities and behaviors
- Polymorphism: treat different characters uniformly
- Virtual functions let each character type behave differently
- This pattern is used in real game engines!

👀 Think about what other character types you could add to this system!"""

# 60. Line 6493: RPG Character Hierarchy
TEACHING[6493] = r"""# RPG Character Hierarchy · RPG角色层次结构

🎯 **What you'll learn · 你将学到:**
- Multi-level inheritance hierarchy
- Abstract classes with pure virtual functions
- Putting the full OOP toolkit together

This is the **boss battle** 👾 of OOP — a complete RPG system with multiple character types, abilities, and interactions. It combines everything you've learned about classes, inheritance, and polymorphism!

🔑 **Key things to notice · 注意要点:**
- Abstract base class with \`= 0\` pure virtual functions
- Multiple derived classes with unique implementations
- Using vectors of base class pointers for polymorphism
- This is professional-grade OOP design!

👀 This is how real RPG games organize their code — study the hierarchy!"""

# 61. Line 6714: map — Like Python's dict
TEACHING[6714] = r"""# map — Like Python's dict · map——类似Python的dict

🎯 **What you'll learn · 你将学到:**
- \`map<Key, Value>\` = C++'s sorted dictionary
- Inserting, accessing, and iterating over key-value pairs
- Comparison with Python's \`dict\`

\`map\` is like a **phone book** 📞 — you look up a name (key) and get a number (value). C++'s map keeps entries sorted alphabetically, like a real phone book!

🔑 **Key things to notice · 注意要点:**
- \`map<string, int> ages;\` — specify key AND value types
- \`ages["Alice"] = 15;\` — same syntax as Python dict!
- \`map\` keeps keys SORTED (Python dict keeps insertion order)
- \`.count(key)\` or \`.find(key)\` to check if key exists
- Needs \`#include <map>\`

👀 Notice that map entries are always sorted by key — Python dicts aren't!"""

# 62. Line 6764: set — Unique Sorted Collection
TEACHING[6764] = r"""# set — Unique Sorted Collection · set——唯一有序集合

🎯 **What you'll learn · 你将学到:**
- \`set<T>\` stores unique values in sorted order
- Insert, find, and erase operations
- Comparison with Python's \`set\`

A \`set\` is like a **guest list** 📋 — each name appears only once, and the list is automatically alphabetized. Try to add a duplicate? It just ignores it!

🔑 **Key things to notice · 注意要点:**
- \`set<int> s;\` — only unique values, automatically sorted
- \`.insert(x)\` = add element (duplicates ignored)
- \`.count(x)\` = 0 or 1 (is it in the set?)
- \`.erase(x)\` = remove element
- C++ \`set\` is sorted; Python \`set\` is unordered

👀 Try inserting duplicates — the set silently ignores them!"""

# 63. Line 6862: unordered_map
TEACHING[6862] = r"""# unordered_map — Hash Map (Faster!) · 哈希表（更快！）

🎯 **What you'll learn · 你将学到:**
- \`unordered_map\` = hash table, faster than \`map\`
- O(1) average lookup vs \`map\`'s O(log n)
- When to use \`map\` vs \`unordered_map\`

\`unordered_map\` is like a **hash table** 🗄️ — instead of searching through a sorted list, it uses a magic formula (hash function) to jump directly to the right spot. WAY faster!

🔑 **Key things to notice · 注意要点:**
- Same interface as \`map\`, but O(1) average operations
- \`unordered_map\` = closer to Python's \`dict\` (both use hashing!)
- Not sorted — iteration order is unpredictable
- Use \`map\` when you need sorted keys; \`unordered_map\` for speed
- Needs \`#include <unordered_map>\`

👀 For most problems, \`unordered_map\` is the better choice — just like Python's dict!"""

# 64. Line 6929: multimap & multiset
TEACHING[6929] = r"""# multimap & multiset: Allowing Duplicates · 允许重复

🎯 **What you'll learn · 你将学到:**
- \`multimap\` = map that allows duplicate keys
- \`multiset\` = set that allows duplicate values
- When duplicates are actually useful!

Regular \`map\` and \`set\` are **exclusive clubs** 🎪 — no duplicates allowed! \`multimap\` and \`multiset\` are **open events** — everyone's welcome, even if you have the same name!

🔑 **Key things to notice · 注意要点:**
- \`multimap<string, int>\` = same key can appear multiple times
- \`multiset<int>\` = same value can appear multiple times
- \`.count(key)\` can return > 1
- \`.equal_range(key)\` gets all values for a duplicate key
- Python has no direct equivalent — use \`defaultdict(list)\`

👀 Think about when you'd need duplicate keys — student grades by subject?"""

# 65. Line 7154: Sorting — The Most Important Algorithm
TEACHING[7154] = r"""# Sorting — The Most Important Algorithm · 排序——最重要的算法

🎯 **What you'll learn · 你将学到:**
- \`sort()\` from \`<algorithm>\` — fast and easy!
- Custom comparison functions for sorting
- Sorting is THE most asked topic in competitions!

Sorting is the **bread and butter** 🍞 of algorithms — almost every competition problem involves sorting at some point. C++'s \`sort()\` is blazing fast and super flexible!

🔑 **Key things to notice · 注意要点:**
- \`sort(v.begin(), v.end())\` — sorts ascending by default
- \`sort(v.begin(), v.end(), greater<int>())\` — sorts descending
- Custom comparator: define your own sorting rules!
- C++ \`sort()\` is O(n log n) — among the fastest implementations
- Python's \`sorted()\` → C++ \`sort()\`

👀 Try different comparators — custom sorting is a competition essential!"""

# 66. Line 7198: Binary Search
TEACHING[7198] = r"""# Binary Search · 二分查找

🎯 **What you'll learn · 你将学到:**
- \`binary_search()\`, \`lower_bound()\`, \`upper_bound()\`
- O(log n) searching — insanely fast!
- The array MUST be sorted first!

Binary search is like the **guessing game** 🎯 — "Is your number higher or lower?" Each guess eliminates HALF the possibilities. 1 million items? Only 20 guesses needed!

🔑 **Key things to notice · 注意要点:**
- Array/vector MUST be sorted before binary search!
- \`binary_search()\` = true/false, does the value exist?
- \`lower_bound()\` = iterator to first element >= value
- \`upper_bound()\` = iterator to first element > value
- O(log n) vs O(n) linear search — massive speedup!

👀 Binary search is a TOP competition algorithm — master it!"""

# 67. Line 7232: More Useful Algorithms
TEACHING[7232] = r"""# More Useful Algorithms · 更多实用算法

🎯 **What you'll learn · 你将学到:**
- \`min_element()\`, \`max_element()\`, \`accumulate()\`
- \`count()\`, \`find()\`, \`reverse()\`, \`unique()\`
- The \`<algorithm>\` header is a goldmine!

The algorithm library is like a **Swiss Army toolkit** 🛠️ — packed with ready-made tools so you don't have to code common operations from scratch!

🔑 **Key things to notice · 注意要点:**
- \`*min_element(v.begin(), v.end())\` = Python's \`min(list)\`
- \`accumulate(v.begin(), v.end(), 0)\` = Python's \`sum(list)\`
- \`count(v.begin(), v.end(), x)\` = Python's \`list.count(x)\`
- \`reverse(v.begin(), v.end())\` = Python's \`list.reverse()\`
- Always use these instead of writing your own loops!

👀 Explore the algorithm library — it's your secret weapon in competitions!"""

# 68. Line 7351: Lambdas with STL Algorithms
TEACHING[7351] = r"""# Lambdas with STL Algorithms · Lambda和STL算法

🎯 **What you'll learn · 你将学到:**
- Lambda = inline anonymous function
- \`[capture](params) { body }\` syntax
- Using lambdas with \`sort()\`, \`for_each()\`, \`find_if()\`

Lambdas are like **quick Post-it notes** 📝 of code — small, anonymous functions you write right where you need them. No need to create a whole named function for a simple task!

🔑 **Key things to notice · 注意要点:**
- Syntax: \`[](int a, int b) { return a > b; }\`
- \`[]\` = capture list (what outside variables to use)
- Python: \`lambda a, b: a > b\` → C++: \`[](int a, int b) { return a > b; }\`
- Perfect for custom sort comparators!
- C++ lambdas can capture by value \`[=]\` or reference \`[&]\`

👀 Lambdas + sort = the most common competition pattern!"""

# 69. Line 7394: More Essential Algorithms
TEACHING[7394] = r"""# More Essential Algorithms · 更多必备算法

🎯 **What you'll learn · 你将学到:**
- \`next_permutation()\` — generates permutations!
- \`nth_element()\` — partial sorting
- More powerful STL algorithms for competitions

These are **advanced power tools** ⚡ — algorithms that would take dozens of lines to write yourself, but C++ gives them to you in one function call!

🔑 **Key things to notice · 注意要点:**
- \`next_permutation()\` = generate all permutations (Python: \`itertools.permutations\`)
- \`nth_element()\` = find the nth smallest element efficiently
- \`partial_sort()\` = sort only the first k elements
- These algorithms save huge amounts of code in competitions
- Know what's available — don't reinvent the wheel!

👀 \`next_permutation\` is a competition favorite — it generates all orderings!"""

# 70. Line 7599: Stack — LIFO
TEACHING[7599] = r"""# Stack — LIFO · 栈——后进先出

🎯 **What you'll learn · 你将学到:**
- Stack = Last In, First Out (LIFO)
- \`push()\`, \`pop()\`, \`top()\`, \`empty()\`
- Used for undo operations, expression parsing, DFS

A stack is like a **stack of plates** 🍽️ — you can only add to the top and remove from the top. The last plate you put on is the first one you take off!

🔑 **Key things to notice · 注意要点:**
- \`push(x)\` = add to top, \`pop()\` = remove from top
- \`top()\` = peek at top without removing
- Python list as stack: \`append()\`/\`pop()\` → C++: \`push()\`/\`pop()\`
- Used in: browser back button, undo/redo, parenthesis matching
- Needs \`#include <stack>\`

👀 Think LIFO — the last item pushed is the first one popped!"""

# 71. Line 7650: Queue — FIFO
TEACHING[7650] = r"""# Queue — FIFO · 队列——先进先出

🎯 **What you'll learn · 你将学到:**
- Queue = First In, First Out (FIFO)
- \`push()\`, \`pop()\`, \`front()\`, \`back()\`
- Used for BFS, scheduling, buffering

A queue is like a **line at a store** 🏪 — first person in line gets served first. Fair and orderly!

🔑 **Key things to notice · 注意要点:**
- \`push(x)\` = add to back, \`pop()\` = remove from front
- \`front()\` = peek at first element, \`back()\` = peek at last
- Python: \`collections.deque\` → C++: \`queue\`
- Essential for BFS (Breadth-First Search) in graph problems
- Needs \`#include <queue>\`

👀 Think FIFO — first in, first out, like a fair line!"""

# 72. Line 7694: Priority Queue
TEACHING[7694] = r"""# Priority Queue — Always Get the Best · 优先队列

🎯 **What you'll learn · 你将学到:**
- Priority queue = always get the highest/lowest priority item
- Default: max-heap (largest first)
- Essential for Dijkstra's, greedy algorithms

A priority queue is like an **ER waiting room** 🏥 — it doesn't matter who arrived first; the most urgent patient gets seen first!

🔑 **Key things to notice · 注意要点:**
- Default: max-heap (largest element on top)
- \`push()\`, \`pop()\`, \`top()\` — same interface as stack
- For min-heap: \`priority_queue<int, vector<int>, greater<int>>\`
- Python: \`heapq\` (min-heap) → C++: \`priority_queue\` (max-heap)
- Used in: shortest path, scheduling, top-K problems

👀 Note the default is MAX-heap — opposite of Python's heapq!"""

# 73. Line 7820: Template Functions & Classes
TEACHING[7820] = r"""# Template Functions & Classes · 模板函数和类

🎯 **What you'll learn · 你将学到:**
- Templates = write code that works with ANY type
- \`template <typename T>\` syntax
- How C++ achieves what Python does naturally with duck typing

Templates are like **cookie cutters** 🍪 — one template, many types! Write the function once with a placeholder type \`T\`, and it works for int, double, string, anything!

🔑 **Key things to notice · 注意要点:**
- \`template <typename T>\` before the function/class
- \`T\` is a placeholder — compiler fills in the actual type
- Python doesn't need this — it's dynamically typed
- C++ templates = the secret behind \`vector<int>\`, \`map<string, int>\`
- Templates are resolved at COMPILE time — zero runtime cost!

👀 Templates are why C++ can be both type-safe AND generic!"""

# 74. Line 8051: Fast I/O Template
TEACHING[8051] = r"""# Fast I/O Template · 快速I/O模板

🎯 **What you'll learn · 你将学到:**
- Speed up input/output for competitive programming
- \`ios_base::sync_with_stdio(false)\` and \`cin.tie(NULL)\`
- The competitive programming starter template

Fast I/O is like switching from a **bicycle to a race car** 🏎️ — for competition problems with massive input, these two lines can mean the difference between Time Limit Exceeded and Accepted!

🔑 **Key things to notice · 注意要点:**
- \`ios_base::sync_with_stdio(false);\` = unsync C and C++ I/O
- \`cin.tie(NULL);\` = untie cin from cout
- These two lines can make I/O 10x faster!
- Put them as the FIRST lines in \`main()\`
- After these, DON'T mix \`printf/scanf\` with \`cin/cout\`

👀 Memorize this template — you'll use it in every competition!"""

# 75. Line 8090: Full Competition Template
TEACHING[8090] = r"""# Full Competition Template · 完整竞赛模板

🎯 **What you'll learn · 你将学到:**
- A complete competitive programming template
- Common includes, typedefs, and macros
- The starting point for every contest problem

This is your **competition battle suit** 🦸 — a template with everything you need pre-loaded so you can focus on solving the problem, not boilerplate setup!

🔑 **Key things to notice · 注意要点:**
- \`#include <bits/stdc++.h>\` = includes EVERYTHING (competition only!)
- \`typedef long long ll;\` = shorter name for common types
- \`#define\` macros for frequently used patterns
- Fast I/O at the start of main
- NEVER use this in production code — only competitions!

👀 Save this template — it's your competition starting kit!"""

# 76. Line 8160: Common Patterns
TEACHING[8160] = r"""# Common Patterns · 常见模式

🎯 **What you'll learn · 你将学到:**
- Frequency counting, prefix sums, sliding window
- Patterns that appear in 80%+ of competition problems
- Building blocks for harder algorithms

These patterns are like **chess openings** ♟️ — standard moves that experienced players use automatically. Learn them, and you'll recognize them instantly in problems!

🔑 **Key things to notice · 注意要点:**
- Frequency counting: use \`map\` or array to count occurrences
- Prefix sum: precompute cumulative sums for range queries
- Sliding window: efficiently process subarrays of fixed size
- These patterns reduce O(n²) solutions to O(n)!
- Practice recognizing WHICH pattern fits each problem

👀 Master these three patterns — they solve most beginner competition problems!"""

# 77. Line 8358: Classic Greedy Problems
TEACHING[8358] = r"""# Classic Greedy Problems · 经典贪心问题

🎯 **What you'll learn · 你将学到:**
- Greedy algorithm strategy: always pick the locally best choice
- Classic problems: activity selection, coin change
- When greedy works vs when it doesn't

Greedy algorithms are like **eating the biggest slice first** 🍕 — always make the choice that looks best RIGHT NOW. Sometimes this gives the perfect answer; sometimes it doesn't!

🔑 **Key things to notice · 注意要点:**
- Greedy = make the locally optimal choice at each step
- Sort first, then greedily select (common pattern!)
- Works for: activity selection, fractional knapsack, intervals
- Doesn't work for: 0/1 knapsack, shortest path (use DP instead)
- Key skill: proving that greedy gives the optimal solution

👀 Think about WHY the greedy choice works — can you prove it?"""

# 78. Line 8409: Binary Search on Answer
TEACHING[8409] = r"""# Binary Search on Answer · 二分答案

🎯 **What you'll learn · 你将学到:**
- Binary search isn't just for finding elements!
- Search the ANSWER space: "What's the minimum/maximum possible?"
- One of the most powerful competition techniques

Binary search on answer is like asking **"Can I do it with X?"** 🤔 — if yes, try smaller. If no, try bigger. You binary search on the answer itself!

🔑 **Key things to notice · 注意要点:**
- Instead of searching an array, search the range of possible answers
- Define a \`check(mid)\` function: "Is this answer achievable?"
- If \`check(mid)\` is true → try better (smaller/larger depending on problem)
- If false → try the other direction
- Reduces O(n) answer search to O(log n)!

👀 This technique appears in MANY competition problems — learn to recognize it!"""

# 79. Line 8458: Two Pointers Technique
TEACHING[8458] = r"""# Two Pointers Technique · 双指针技巧

🎯 **What you'll learn · 你将学到:**
- Two pointers moving through an array simultaneously
- Converging pointers (from both ends) and same-direction pointers
- Reduces O(n²) to O(n) for many problems!

Two pointers is like having **two fingers** 👆👆 on a book — one at the start, one at the end, and they move toward each other. Together they scan the data much faster than one finger alone!

🔑 **Key things to notice · 注意要点:**
- Converging: left starts at 0, right starts at end, move toward middle
- Same direction: slow and fast pointers (like tortoise and hare 🐢🐇)
- Classic problems: two-sum on sorted array, palindrome check, removing duplicates
- Array must often be SORTED first
- O(n) instead of O(n²) — huge improvement!

👀 Two pointers + sorting = one of the most common competition combos!"""

# 80. Line 8661: Fibonacci — DP Hello World
TEACHING[8661] = r"""# Fibonacci — DP Hello World · 斐波那契——DP入门

🎯 **What you'll learn · 你将学到:**
- Dynamic Programming (DP) = solving problems by breaking them into subproblems
- Memoization: remember what you've already computed
- Fibonacci: the classic DP introduction

DP is like using a **notebook** 📓 during a test — instead of recalculating the same thing over and over, you write down the answer and look it up next time. Fibonacci without DP = super slow. With DP = instant!

🔑 **Key things to notice · 注意要点:**
- Naive recursion: O(2^n) — exponentially slow!
- With memoization (top-down DP): O(n) — linear!
- Bottom-up DP: build the table from small to large
- \`dp[i] = dp[i-1] + dp[i-2]\` — the magic formula
- DP = recursion + memoization = avoid repeated work

👀 Compare naive vs DP Fibonacci — the speed difference is mind-blowing!"""

# 81. Line 8717: Classic DP: Climbing Stairs & Coin Change
TEACHING[8717] = r"""# Classic DP: Climbing Stairs & Coin Change · 经典DP

🎯 **What you'll learn · 你将学到:**
- Climbing Stairs: how many ways to reach the top?
- Coin Change: minimum coins to make a target amount
- The DP problem-solving framework

Classic DP problems are like **leveling up** 🎮 in an RPG — each one teaches you a new DP pattern. Climbing Stairs = "how many paths?" Coin Change = "what's the minimum?"

🔑 **Key things to notice · 注意要点:**
- Climbing Stairs: \`dp[i] = dp[i-1] + dp[i-2]\` (same as Fibonacci!)
- Coin Change: \`dp[amount] = min(dp[amount], dp[amount-coin] + 1)\`
- Key DP steps: 1) Define state, 2) Find transition, 3) Set base cases
- These two problems cover 80% of DP patterns!
- Practice the framework — it works for most DP problems

👀 Try to identify the state and transition for each problem!"""

# 82. Line 8765: 2D DP: Grid Problems
TEACHING[8765] = r"""# 2D DP: Grid Problems · 二维DP：网格问题

🎯 **What you'll learn · 你将学到:**
- DP on 2D grids (rows and columns)
- Path counting and minimum path sum
- Extending 1D DP thinking to 2D

2D DP is like navigating a **city grid** 🏙️ — you can only go right or down, and you want to find the best path. Each intersection's answer depends on the intersections before it!

🔑 **Key things to notice · 注意要点:**
- \`dp[i][j]\` = answer for cell (i, j)
- Transition: \`dp[i][j] = dp[i-1][j] + dp[i][j-1]\` (paths from above + left)
- Base cases: first row and first column
- Same logic as 1D DP, just with two dimensions
- Grid problems are VERY common in competitions!

👀 Draw the grid and fill in values manually — see how DP builds the answer!"""


import re

with open('src/data/cpp-lessons.ts', 'r') as f:
    content = f.read()
    lines = content.split('\n')

# Find all type:"code" sections and replace their content fields
line_nums = []
for i, line in enumerate(lines):
    if 'type: "code"' in line:
        line_nums.append(i)

print(f"Found {len(line_nums)} code sections")

changes = 0
for idx, code_line_idx in enumerate(line_nums):
    line_num = code_line_idx + 1  # 1-indexed
    
    if line_num not in TEACHING:
        print(f"WARNING: No teaching content for line {line_num}")
        continue
    
    # Find the content field
    content_line_idx = None
    for j in range(code_line_idx, min(code_line_idx + 5, len(lines))):
        if lines[j].strip().startswith('content:'):
            content_line_idx = j
            break
    
    if content_line_idx is None:
        print(f"WARNING: Could not find content field for code section at line {line_num}")
        continue
    
    # Find the end of the content field (closing backtick)
    # Content is a template literal: content: `...`,
    content_start = content_line_idx
    
    # Check if it's a single-line content
    stripped = lines[content_line_idx].strip()
    if stripped.count('`') >= 2:
        # Could be single-line: content: `...`,
        # Or multi-line starting with backtick
        pass
    
    # Find the closing backtick line
    # The content field starts with content: ` and ends with `,
    content_end = content_start
    backtick_count = 0
    for j in range(content_start, min(content_start + 100, len(lines))):
        backtick_count += lines[j].count('`')
        # Subtract escaped backticks
        backtick_count -= lines[j].count('\\`')
        if backtick_count >= 2:
            content_end = j
            break
    
    # Get indentation
    indent = '      '  # 6 spaces typically
    
    # Build new content line(s)
    new_content = TEACHING[line_num]
    
    # Replace the content field
    # We need to replace from content_start to content_end
    old_lines = lines[content_start:content_end + 1]
    
    new_lines = [f'{indent}content: `{new_content}`,']
    
    lines[content_start:content_end + 1] = new_lines
    
    # Adjust subsequent indices since we may have changed line count
    diff = len(new_lines) - len(old_lines)
    # No need to adjust - we process in order and indices shift
    # Actually we need to recompute since we modified the list
    # Let's use a different approach - work backwards
    changes += 1

# Since working forward with list modifications is tricky, let's redo with backward processing
print(f"Processed {changes} sections (forward pass - may have issues)")
print("Switching to backward processing...")

# Re-read original
with open('src/data/cpp-lessons.ts', 'r') as f:
    lines = f.readlines()

# Find all sections again
sections = []
for i, line in enumerate(lines):
    if 'type: "code"' in line:
        # Find content field
        for j in range(i, min(i + 5, len(lines))):
            if lines[j].strip().startswith('content:'):
                # Find end of content (closing backtick)
                end = j
                bt = 0
                for k in range(j, min(j + 100, len(lines))):
                    bt += lines[k].count('`')
                    bt -= lines[k].count('\\`')
                    if bt >= 2:
                        end = k
                        break
                sections.append({
                    'type_line': i + 1,  # 1-indexed for TEACHING lookup
                    'start': j,
                    'end': end,
                })
                break

print(f"Found {len(sections)} sections for backward processing")

# Process backwards to maintain line indices
for sec in reversed(sections):
    line_num = sec['type_line']
    if line_num not in TEACHING:
        print(f"SKIP: No content for line {line_num}")
        continue
    
    start = sec['start']
    end = sec['end']
    
    # Get indent from original
    original = lines[start]
    indent = original[:len(original) - len(original.lstrip())]
    
    new_content = TEACHING[line_num]
    new_line = f'{indent}content: `{new_content}`,\n'
    
    lines[start:end+1] = [new_line]

with open('src/data/cpp-lessons.ts', 'w') as f:
    f.writelines(lines)

print("Done! File updated.")
