const fs = require('fs');

// Teaching content for each code section, keyed by line number of `type: "code"`
// Each entry: { content: string } - the new content field value
const teachings = {
  191: null, // Already has good content - skip
  233: null, // Already has Python comparison - skip
  339: null, // Already has Python comparison - skip

  373: `# Multiple Output Examples · 多种输出示例

🎯 **What you'll learn:** Different ways to format and combine output using \`cout\`.
学习目标：使用cout的多种输出方式。

Think of \`cout\` as a conveyor belt — you keep putting items on it with \`<<\`, and they all flow to the screen in order. You can mix text, numbers, and special characters like \`endl\` (new line) or \`\\t\` (tab).

🔑 **Key things to notice:**
- Chain multiple \`<<\` operators to combine different outputs
- \`endl\` starts a new line, \`\\t\` adds a tab space
- Numbers don't need quotes, but text does

👀 Run the code and see how each output method looks different!`,

  548: `# The Basic Types · 基本数据类型

🎯 **What you'll learn:** The fundamental data types in C++ and how they differ from Python's flexible types.
学习目标：C++的基本数据类型，以及它们与Python灵活类型的区别。

In Python, a variable can hold anything — number, text, whatever. C++ is strict: you must declare what *type* of data a variable holds, like labeling boxes in a warehouse. 📦 An \`int\` box can only hold whole numbers, a \`double\` box holds decimals, and so on.

🔑 **Key things to notice:**
- \`int\` = whole numbers, \`double\` = decimals, \`char\` = single character, \`bool\` = true/false, \`string\` = text
- Each type uses a different amount of memory

👀 Look at how each variable is declared with its type first!`,

  608: `# Declaring Variables · 声明变量

🎯 **What you'll learn:** Multiple ways to create and initialize variables in C++.
学习目标：在C++中创建和初始化变量的多种方式。

In Python you just write \`x = 5\`. In C++, you have several options for declaring variables — all requiring you to specify the type. Think of it like filling out a form: you must check the box for what kind of data you're storing.

🔑 **Key things to notice:**
- You can declare and assign in one line, or declare first and assign later
- \`const\` makes a variable that can never change (like a locked safe 🔒)
- C++11 introduced \`auto\` which lets the compiler guess the type

👀 Pay attention to the different declaration styles and when each is useful!`,

  681: null, // Already has Python comparison content

  783: `# Type Comparison Cheat Sheet · 类型对比速查表

🎯 **What you'll learn:** A side-by-side comparison of Python vs C++ variable declarations.
学习目标：Python和C++变量声明的对比。

This is your quick reference card! 🗂️ When you know how to do something in Python, this cheat sheet shows you the C++ equivalent. Keep it handy as you code.

🔑 **Key things to notice:**
- Every C++ variable starts with its type name
- Python's \`None\` becomes \`nullptr\` in C++
- C++ has more specific number types (\`int\`, \`long\`, \`float\`, \`double\`)

👀 Compare each Python line with its C++ equivalent — the logic is the same, just the syntax differs!`,

  960: `# cin Basics · cin基础

🎯 **What you'll learn:** How to read user input using \`cin\`, C++'s equivalent of Python's \`input()\`.
学习目标：使用cin读取用户输入——C++版的input()。

If \`cout\` is the mouth of your program (output), then \`cin\` is its ears (input) 👂. The \`>>\` operator points *into* your variable — data flows from the keyboard into the variable. It's the opposite direction of \`<<\`!

🔑 **Key things to notice:**
- \`cin >> variable\` reads input — note the \`>>\` arrows point toward the variable
- \`cin\` automatically converts input to match the variable's type
- \`cin\` stops reading at whitespace (spaces)!

👀 Try entering different types of values and see how cin handles them!`,

  999: null, // Already has good content

  1065: null, // Already has Python comparison

  1153: `# Input/Output Comparison Summary · 输入输出对比总结

🎯 **What you'll learn:** A complete summary comparing Python and C++ input/output operations.
学习目标：Python和C++输入输出操作的完整对比总结。

This is your I/O master reference! 📋 Everything you've learned about \`cin\`, \`cout\`, \`getline\`, and formatting — all in one place. Think of it as a cookbook with all the recipes side by side.

🔑 **Key things to notice:**
- Python's \`input()\` always returns a string; C++'s \`cin\` converts automatically
- Formatting in C++ uses \`<iomanip>\` instead of f-strings
- \`getline()\` is essential when you need to read spaces

👀 This is a great reference to bookmark — come back to it whenever you need an I/O reminder!`,

  1298: null, // Already has Python comparison
  1342: null, // Already has Python comparison

  1388: `# Type Casting in Math · 数学中的类型转换

🎯 **What you'll learn:** How to convert between types during math operations to avoid losing precision.
学习目标：如何在数学运算中转换类型以避免精度丢失。

Here's a sneaky bug: \`7 / 2\` in C++ gives \`3\`, not \`3.5\`! 😱 When both numbers are integers, C++ does integer division. It's like asking "how many whole pizzas can 2 people split from 7 slices?" You need to cast to \`double\` to get the decimal answer.

🔑 **Key things to notice:**
- \`static_cast<double>(x)\` converts \`x\` to a double
- Integer ÷ integer = integer (truncated!)
- Cast at least ONE operand to get a decimal result

👀 Compare the output of integer division vs casted division!`,

  1462: null, // Already has some comparison content

  1630: `# String Basics · 字符串基础

🎯 **What you'll learn:** How C++ strings work and compare to Python strings.
学习目标：C++字符串的基本用法，以及与Python字符串的对比。

C++ strings from \`<string>\` are like Python strings — you can create them, combine them with \`+\`, and check their length. But unlike Python, C++ strings are **mutable** (changeable)! You can modify individual characters directly. 🔤

🔑 **Key things to notice:**
- \`#include <string>\` is required to use strings
- \`+\` concatenates strings just like Python
- \`.length()\` or \`.size()\` gives the string length (Python uses \`len()\`)
- You can access/modify characters with \`s[i]\`

👀 Pay attention to how strings are created and combined!`,

  1670: `# String Methods · 字符串方法

🎯 **What you'll learn:** Common string methods in C++ and their Python equivalents.
学习目标：C++常用字符串方法及其Python对应。

Just like Python strings have methods like \`.upper()\`, \`.find()\`, and \`.replace()\`, C++ strings have their own toolbox 🧰. The names are a bit different, but the ideas are the same!

🔑 **Key things to notice:**
- \`.substr(pos, len)\` = Python's slicing \`s[pos:pos+len]\`
- \`.find()\` returns the position, or \`string::npos\` if not found
- Some operations need \`<algorithm>\` (like \`transform\` for uppercase)

👀 Compare each C++ method with its Python equivalent shown in comments!`,

  1722: `# Character Operations · 字符操作

🎯 **What you'll learn:** How to work with individual characters in C++ — something Python makes harder!
学习目标：C++中如何操作单个字符——这比Python更方便！

In C++, a \`char\` is actually a number (ASCII code)! This means you can do math with characters. \`'A' + 1\` gives you \`'B'\`. It's like each letter has a secret number identity 🕵️. The \`<cctype>\` library gives you handy functions like \`isalpha()\`, \`isdigit()\`, \`toupper()\`.

🔑 **Key things to notice:**
- \`char\` is a number type — you can add/subtract with it
- \`<cctype>\` provides character classification functions
- \`'a'\` (single quotes) is a char, \`"a"\` (double quotes) is a string

👀 See how character arithmetic converts between uppercase and lowercase!`,

  1831: `# Useful String Patterns · 实用字符串技巧

🎯 **What you'll learn:** Practical string manipulation patterns you'll use in real programs.
学习目标：实际编程中常用的字符串操作技巧。

These are the "recipes" that experienced C++ programmers use all the time 👨‍🍳: splitting strings, converting between strings and numbers, reversing, and more. Master these patterns and you'll handle any string problem!

🔑 **Key things to notice:**
- \`stringstream\` splits strings by spaces (like Python's \`.split()\`)
- \`to_string()\` and \`stoi()\` convert between strings and numbers
- \`reverse()\` from \`<algorithm>\` works in-place

👀 Try modifying the input strings to see how each pattern handles different cases!`,

  1986: null, // Already has Python comparison
  2020: null, // Already has Python comparison

  2071: `# Project 3: Mad Libs Game · 疯狂填词游戏

🎯 **What you'll learn:** Build a fun word game that combines input, strings, and output!
学习目标：构建一个有趣的填词游戏，综合运用输入、字符串和输出！

Mad Libs is a classic word game 🎮 where you ask for random words (nouns, verbs, adjectives) and plug them into a funny story. This project brings together everything you've learned: \`cin\`, \`getline\`, string concatenation, and formatted output.

🔑 **Key things to notice:**
- Uses \`getline()\` for multi-word inputs
- String concatenation with \`+\` builds the story
- The program flow: prompt → read → combine → display

👀 Play the game and try entering silly words for maximum fun!`,

  2345: `# Comparison & Logical Operators · 比较和逻辑运算符

🎯 **What you'll learn:** How to write conditions using comparison and logical operators in C++.
学习目标：如何在C++中使用比较和逻辑运算符编写条件。

Conditions are the brain 🧠 of your program — they let it make decisions. C++ uses the same comparison operators as Python (\`==\`, \`!=\`, \`<\`, \`>\`), but logical operators are different: \`&&\` (and), \`||\` (or), \`!\` (not) instead of Python's English words.

🔑 **Key things to notice:**
- \`&&\` = Python's \`and\`, \`||\` = Python's \`or\`, \`!\` = Python's \`not\`
- \`==\` for comparison (not \`=\`, which is assignment!)
- Conditions return \`true\` or \`false\` (not \`True\`/\`False\`)

👀 Check how each logical operator combines conditions!`,

  2386: `# Nested if & Common Patterns · 嵌套if和常见模式

🎯 **What you'll learn:** How to build complex decision trees with nested if/else statements.
学习目标：如何用嵌套if/else构建复杂的判断逻辑。

Sometimes one condition isn't enough — you need decisions inside decisions, like a flowchart 📊. "If it's raining, then check if you have an umbrella..." Nested ifs handle this. The \`else if\` chain is especially useful for grading scales, menus, and category checks.

🔑 **Key things to notice:**
- \`else if\` chains work like Python's \`elif\`
- Braces \`{}\` define the scope of each branch
- Conditions are checked top-to-bottom; first match wins

👀 Trace through the code with different score values to predict the output!`,

  2611: `# switch in Action · switch实战

🎯 **What you'll learn:** How to use \`switch\` for clean multi-way branching — a C++ feature Python doesn't have!
学习目标：使用switch进行简洁的多路分支——Python没有的C++特性！

When you're checking one variable against many specific values, \`switch\` is cleaner than a long \`if/else if\` chain. Think of it like a vending machine 🥤: you press a button (the value), and it goes directly to that option.

🔑 **Key things to notice:**
- \`break;\` is essential — without it, execution "falls through" to the next case!
- \`default:\` handles all unmatched values (like \`else\`)
- \`switch\` only works with integers and chars, not strings

👀 Try removing a \`break;\` statement and see what happens (fall-through behavior)!`,

  2687: null, // Already has content with Python comparison

  2906: `# for Loop Examples · for循环示例

🎯 **What you'll learn:** The C++ \`for\` loop syntax and common looping patterns.
学习目标：C++ for循环语法和常见循环模式。

C++'s \`for\` loop has three parts in parentheses: \`for(init; condition; update)\`. Think of it as: "start here; keep going while this is true; do this after each lap" 🏃. It's more explicit than Python's \`for x in range()\`, but also more flexible!

🔑 **Key things to notice:**
- \`for(int i = 0; i < n; i++)\` is the classic pattern
- The loop variable \`i\` is declared inside the loop
- You can count up, down, or by any step size

👀 Compare each loop pattern with how you'd write it in Python!`,

  2954: `# while and do-while · while和do-while循环

🎯 **What you'll learn:** Two more loop types — \`while\` (same as Python) and \`do-while\` (C++ exclusive!).
学习目标：while循环（和Python相同）和do-while循环（C++独有！）。

\`while\` works just like Python's — check condition first, then run. But \`do-while\` is special: it runs the body FIRST, then checks. It's like "try the food, then decide if you want more" vs "check the menu first" 🍽️.

🔑 **Key things to notice:**
- \`while\`: checks condition → runs body (might never run)
- \`do-while\`: runs body → checks condition (always runs at least once!)
- \`do-while\` ends with a semicolon: \`} while(condition);\`

👀 Notice which loop guarantees at least one execution!`,

  3076: `# Nested Loops · 嵌套循环

🎯 **What you'll learn:** How to use loops inside loops for grids, patterns, and 2D problems.
学习目标：使用嵌套循环处理网格、图案和二维问题。

A nested loop is a loop inside another loop — like a clock ⏰: the minute hand (inner loop) goes around completely for each tick of the hour hand (outer loop). If the outer loop runs 5 times and inner runs 3 times, the inner body runs 5 × 3 = 15 times!

🔑 **Key things to notice:**
- Outer loop controls rows, inner loop controls columns
- Total iterations = outer × inner
- Perfect for printing patterns and processing 2D data

👀 Trace the pattern output and predict what each row will look like!`,

  3165: `# break and continue · break和continue

🎯 **What you'll learn:** How to control loop flow with \`break\` (exit) and \`continue\` (skip).
学习目标：使用break（退出循环）和continue（跳过当前轮）控制循环流程。

Sometimes you need to escape a loop early or skip certain iterations. \`break\` is the emergency exit 🚪 — it immediately leaves the loop. \`continue\` is more like "skip this one" ⏭️ — it jumps to the next iteration.

🔑 **Key things to notice:**
- \`break\` exits the entire loop immediately
- \`continue\` skips the rest of the current iteration and goes to the next
- These work exactly like Python's \`break\` and \`continue\`

👀 Trace the output and identify which values get skipped or where the loop stops!`,

  3253: `# Classic Loop Patterns · 经典循环模式

🎯 **What you'll learn:** Common loop patterns used in programming interviews and competitions.
学习目标：编程面试和竞赛中常见的循环模式。

These are the "moves" every programmer needs in their toolkit 🧰: printing shapes with nested loops, building number pyramids, and creating diamond patterns. Master these and you can solve most pattern-printing problems!

🔑 **Key things to notice:**
- Patterns use spaces + characters, controlled by loop variables
- The relationship between row number and number of characters
- How to think about each row as a formula

👀 Try to predict the pattern before running, then check if you're right!`,

  3420: `# Function Examples · 函数示例

🎯 **What you'll learn:** How to write functions with return types, parameters, and overloads in C++.
学习目标：如何在C++中编写带返回类型、参数的函数。

Functions in C++ are like Python's \`def\`, but you must declare the return type and parameter types. Think of a function as a vending machine 🏭: you put in specific inputs (parameters with types) and get a specific output (return type).

🔑 **Key things to notice:**
- Return type comes BEFORE the function name: \`int add(int a, int b)\`
- \`void\` means the function returns nothing
- Parameters must have their types declared

👀 Look at how each function declares its input types and return type!`,

  3467: `# Function Overloading — Python CAN'T Do This! · 函数重载

🎯 **What you'll learn:** How C++ lets you have multiple functions with the same name but different parameters.
学习目标：C++如何允许同名函数有不同参数——Python做不到！

Imagine a Swiss Army knife 🔪 — one tool name, many functions depending on what you need. That's overloading! C++ picks the right function based on the argument types. Python can't do this natively.

🔑 **Key things to notice:**
- Same function name, different parameter types or counts
- The compiler picks the right version based on what you pass
- This makes code cleaner — no need for \`print_int\`, \`print_string\`, etc.

👀 See how calling the same function name with different arguments triggers different versions!`,

  3674: `# Value vs Reference Demo · 值传递 vs 引用传递

🎯 **What you'll learn:** The critical difference between passing by value (copy) and by reference (original).
学习目标：值传递（复制）和引用传递（原件）的关键区别。

When you hand someone a document 📄: passing by *value* is like giving them a photocopy — they can scribble on it, your original is safe. Passing by *reference* (\`&\`) is handing them your original — any changes affect YOUR copy!

🔑 **Key things to notice:**
- \`void func(int x)\` = pass by value (copy)
- \`void func(int& x)\` = pass by reference (the \`&\` makes the difference!)
- References let functions modify the original variable

👀 Compare the output of value vs reference functions — only one actually changes the variable!`,

  3722: `# const Reference — Read-Only Access · const引用

🎯 **What you'll learn:** How \`const&\` gives fast, read-only access without copying.
学习目标：const引用如何提供快速的只读访问，避免复制。

A \`const\` reference is the best of both worlds 🏆: it avoids the cost of copying (like a reference), but prevents accidental changes (like a value). Think of it as a museum exhibit — you can look but not touch! 🖼️

🔑 **Key things to notice:**
- \`const string& s\` = reference (fast) + read-only (safe)
- Used for large objects you don't need to modify
- The compiler will error if you try to change a const reference

👀 Notice how the function can read the data without making a copy!`,

  3911: `# C-Style Arrays vs Vectors · C数组 vs 向量

🎯 **What you'll learn:** The difference between old-school C arrays and modern C++ vectors.
学习目标：旧式C数组和现代C++ vector的区别。

C-style arrays are like fixed-size shelves 📚 — you decide the size when you build them and can't change it. Vectors are like magic expandable shelves — they grow and shrink as needed! In modern C++, vectors are almost always the better choice.

🔑 **Key things to notice:**
- C arrays: fixed size, no bounds checking, no \`.size()\`
- Vectors: dynamic size, safe, tons of methods
- Vectors use \`<vector>\` header and template syntax \`vector<int>\`

👀 Compare how the same operations look with arrays vs vectors!`,

  3959: `# Vector Operations · 向量操作

🎯 **What you'll learn:** Essential vector methods — adding, removing, searching, and sorting.
学习目标：vector的核心操作——添加、删除、搜索和排序。

Vectors are your Swiss Army knife for data in C++ 🔧. Like Python lists, they support adding (\`push_back\`), removing (\`pop_back\`), accessing by index, and sorting. They're your go-to container!

🔑 **Key things to notice:**
- \`push_back()\` = Python's \`append()\`
- \`pop_back()\` removes the last element
- \`v.size()\` = Python's \`len(v)\`
- Range-based for: \`for(auto& x : v)\` = Python's \`for x in v\`

👀 Follow each operation and predict the vector's contents at each step!`,

  4088: `# String Processing Patterns · 字符串处理模式

🎯 **What you'll learn:** Common string processing techniques used in real-world C++ programming.
学习目标：实际C++编程中常用的字符串处理技巧。

These are the patterns you'll use again and again 🔄: counting characters, reversing strings, checking palindromes, and transforming text. Think of them as recipes in a chef's cookbook!

🔑 **Key things to notice:**
- Range-based for loops make character iteration clean
- \`<algorithm>\` provides \`transform\`, \`reverse\`, and more
- \`<cctype>\` functions work on individual characters

👀 Try modifying the input strings to test edge cases!`,

  4194: `# String Comparison & Searching · 字符串比较和搜索

🎯 **What you'll learn:** How to compare, search within, and analyze strings in C++.
学习目标：如何在C++中比较、搜索和分析字符串。

Comparing strings in C++ is straightforward — you can use \`==\`, \`<\`, \`>\` directly (unlike C where you needed \`strcmp\`!). Searching uses \`.find()\` which returns the position or \`string::npos\` if not found 🔍.

🔑 **Key things to notice:**
- \`==\` compares content, just like Python
- \`.find()\` returns position (or \`string::npos\` = not found)
- \`<\` and \`>\` compare alphabetically (lexicographic order)

👀 Check what \`string::npos\` prints as — it's a very large number!`,

  4424: `# Creating a Header File · 创建头文件

🎯 **What you'll learn:** How to organize C++ code into header files (.h) and implementation files (.cpp).
学习目标：如何将C++代码组织为头文件(.h)和实现文件(.cpp)。

As your programs grow, putting everything in one file becomes messy 🗂️. Header files are like a table of contents — they declare *what* functions exist. Implementation files contain *how* they work. It's like a restaurant menu (header) vs the kitchen recipes (implementation)!

🔑 **Key things to notice:**
- Header files (\`.h\`) contain declarations (function signatures)
- Implementation files (\`.cpp\`) contain definitions (function bodies)
- \`#include "myfile.h"\` uses quotes for your own files

👀 See how the header declares functions and the implementation defines them!`,

  4524: `# Header Guards: Preventing Double Inclusion · 头文件保护

🎯 **What you'll learn:** Why header guards are essential and how they prevent compilation errors.
学习目标：头文件保护为什么重要，如何防止编译错误。

Without header guards, including the same file twice causes "redefinition" errors 💥. Header guards are like a bouncer at a club — they check if you've already entered, and only let you in once. The modern alternative is \`#pragma once\`.

🔑 **Key things to notice:**
- \`#ifndef\` / \`#define\` / \`#endif\` is the classic pattern
- \`#pragma once\` is the modern shortcut (same effect, less typing)
- Guards prevent the same declarations from appearing twice

👀 Look at how the guard pattern wraps the entire header content!`,

  4711: `# Class Split: Header + Implementation · 类的分离

🎯 **What you'll learn:** How to split a class across header and implementation files — the professional way.
学习目标：如何将类分离到头文件和实现文件——专业的做法。

In real projects, classes are split: the header has the class *declaration* (what it can do), and the \`.cpp\` file has the *definitions* (how it does it). It's like a blueprint vs the actual building 🏗️.

🔑 **Key things to notice:**
- Header: class with method declarations (no bodies)
- \`.cpp\`: method definitions using \`ClassName::methodName\` syntax
- The \`::\` is called the scope resolution operator

👀 Notice how \`ClassName::method()\` links the implementation back to the class!`,

  5065: `# Pointer Basics · 指针基础

🎯 **What you'll learn:** How to create pointers and use them to access memory addresses.
学习目标：如何创建指针并用它访问内存地址。

Every variable lives somewhere in your computer's memory, like houses on a street 🏘️. A **pointer** stores the address of that house — so you can visit the variable without knowing its name!

🔑 **Key things to notice:**
- \`&x\` = "address of x" (the house number)
- \`int* ptr\` = declares a pointer variable
- \`*ptr\` = "value at the address" (look inside the house)

👀 Run the code and compare the address output with the value output!`,

  5106: `# Pointers and Functions · 指针和函数

🎯 **What you'll learn:** How pointers let functions modify variables in the caller's scope.
学习目标：指针如何让函数修改调用者的变量。

Passing a pointer to a function is like giving someone your home address 📬 instead of a photo of your house. With the address, they can actually go there and change things. This is how C++ functions can modify external variables!

🔑 **Key things to notice:**
- \`void func(int* p)\` takes a pointer parameter
- Inside the function, \`*p = value\` changes the original variable
- The caller passes \`&variable\` (address of the variable)

👀 Compare pass-by-value vs pass-by-pointer — only the pointer version changes the original!`,

  5170: `# Arrays and Pointers · 数组和指针

🎯 **What you'll learn:** The deep connection between arrays and pointers in C++.
学习目标：C++中数组和指针的深层联系。

Here's a mind-bending fact: in C++, an array name IS basically a pointer to its first element! 🤯 When you pass an array to a function, it "decays" into a pointer. That's why C functions can modify arrays — they get the real address, not a copy.

🔑 **Key things to notice:**
- Array name = pointer to first element (\`arr == &arr[0]\`)
- \`arr[i]\` is really \`*(arr + i)\` under the hood
- When passed to functions, arrays become pointers (no size info!)

👀 Watch how the array name and a pointer to the first element are the same!`,

  5268: `# Pointer Arithmetic in Action · 指针运算实战

🎯 **What you'll learn:** How pointer arithmetic moves through memory by type-sized steps.
学习目标：指针运算如何按类型大小步进遍历内存。

When you add 1 to a pointer, it doesn't move 1 byte — it moves by the size of the type it points to! 📏 An \`int*\` moves 4 bytes per step, a \`double*\` moves 8 bytes. It's like walking on stepping stones of different sizes.

🔑 **Key things to notice:**
- \`ptr + 1\` moves to the next element, not next byte
- \`ptr[i]\` is identical to \`*(ptr + i)\`
- Pointer differences give element count, not byte count

👀 Check the addresses printed — they increase by \`sizeof(int)\` each step!`,

  5451: `# Struct Basics · 结构体基础

🎯 **What you'll learn:** How to group related data together using structs.
学习目标：如何使用结构体(struct)将相关数据组合在一起。

A struct is like a custom form 📋 where you define what fields it has. Instead of separate variables for a point's x and y, you bundle them into \`struct Point { double x, y; }\`. It's your first step toward object-oriented programming!

🔑 **Key things to notice:**
- \`struct\` groups related variables under one name
- Access members with dot notation: \`point.x\`
- You can add functions (methods) inside structs too!

👀 See how structs make code cleaner by grouping related data!`,

  5506: `# Classes: Data + Behavior · 类：数据+行为

🎯 **What you'll learn:** How C++ classes work — very similar to Python classes!
学习目标：C++类的工作方式——和Python类非常相似！

If a struct is a form, a class is a full agent 🤖 — it has both data (attributes) AND behavior (methods). C++ classes are almost identical to Python classes, just with explicit access control and type declarations.

🔑 **Key things to notice:**
- Constructor = Python's \`__init__\`
- \`this->\` = Python's \`self.\`
- Methods are defined inside (or outside) the class body

👀 Compare the C++ class with the Python equivalent in the comments!`,

  5555: `# Public vs Private · 公有vs私有

🎯 **What you'll learn:** How access control (\`public\`/\`private\`) protects your data.
学习目标：访问控制(public/private)如何保护数据。

Think of a bank account 🏦: the balance should be private (only the bank can change it), but checking the balance is public. \`private\` hides data so only the class's own methods can touch it. This prevents bugs from outside code messing with your internals!

🔑 **Key things to notice:**
- \`private:\` = only accessible inside the class
- \`public:\` = accessible from anywhere
- "Getter" and "setter" methods provide controlled access

👀 Try to access a private member directly — the compiler will stop you!`,

  5687: `# Student Grade System · 学生成绩系统

🎯 **What you'll learn:** A real-world OOP example — a complete student grade management system.
学习目标：一个实际的OOP示例——完整的学生成绩管理系统。

This is where OOP shines! ✨ A \`Student\` class encapsulates all the logic for managing grades: adding scores, calculating averages, and determining letter grades. The data is protected, and the interface is clean.

🔑 **Key things to notice:**
- Private data (\`grades\` vector) with public methods to interact
- Methods handle all the logic (average, letter grade)
- The class is a self-contained unit — easy to reuse!

👀 Follow how grades are added and the average is calculated!`,

  5749: `# Static Members & Operator Overloading · 静态成员和运算符重载

🎯 **What you'll learn:** Class-level variables (static) and custom operators for your types.
学习目标：类级变量（静态成员）和自定义运算符重载。

Static members belong to the class itself, not any object — like a shared whiteboard 📊 in a classroom. Operator overloading lets you use \`+\`, \`-\`, \`==\` with your custom types, so \`vector1 + vector2\` "just works"!

🔑 **Key things to notice:**
- \`static\` members are shared across all instances
- \`operator+\` lets you define what \`+\` means for your class
- \`operator<<\` lets you use \`cout <<\` with your class

👀 See how static count tracks total objects and operators make the code readable!`,

  5922: `# new and delete · 分配和释放内存

🎯 **What you'll learn:** Manual memory allocation with \`new\` and deallocation with \`delete\`.
学习目标：用new分配内存，用delete释放内存。

In Python, memory is managed automatically (garbage collection). In C++, \`new\` is like renting a storage unit 📦 — YOU must return it with \`delete\` when done, or you have a memory leak! It's more power, but more responsibility.

🔑 **Key things to notice:**
- \`new\` allocates memory on the heap and returns a pointer
- \`delete\` frees that memory (use \`delete[]\` for arrays)
- Forgetting \`delete\` = memory leak 💧

👀 Stack vs heap: notice which variables are automatically freed and which need manual cleanup!`,

  5962: `# Vectors vs Raw Arrays · vector对比原始数组

🎯 **What you'll learn:** Why \`vector\` is almost always better than raw arrays in modern C++.
学习目标：为什么在现代C++中vector几乎总是比原始数组更好。

Raw arrays are like driving without a seatbelt 🚗 — fast but dangerous. Vectors are safe, flexible, and nearly as fast. They handle memory automatically, know their own size, and can grow/shrink. Use vectors unless you have a specific reason not to!

🔑 **Key things to notice:**
- Vectors manage their own memory (no leaks!)
- \`.size()\` always knows the length (arrays don't!)
- Vectors can be returned from functions (arrays can't!)

👀 Compare the same operations with raw arrays vs vectors — see which is cleaner!`,

  6016: `# Structs with Dynamic Memory · 带动态内存的结构体

🎯 **What you'll learn:** How to use structs that manage dynamic memory safely.
学习目标：如何使用管理动态内存的结构体。

When structs contain vectors or pointers to heap memory, things get interesting 🧩. The good news: if you use vectors inside structs, they handle memory automatically. The key is understanding ownership — who's responsible for cleaning up?

🔑 **Key things to notice:**
- Vectors inside structs handle their own memory
- If using raw pointers, YOU must manage memory
- Modern C++: prefer containers (vector, string) over raw pointers

👀 See how the struct organizes complex data with automatic memory management!`,

  6097: `# Memory Leaks Demo · 内存泄漏演示

🎯 **What you'll learn:** What memory leaks are, how they happen, and how to avoid them.
学习目标：什么是内存泄漏，如何发生，如何避免。

A memory leak is like renting a storage unit and losing the key 🔑💨 — the space is occupied forever but you can't use it or return it. Over time, leaked memory piles up and your program (or computer) slows to a crawl.

🔑 **Key things to notice:**
- Every \`new\` MUST have a matching \`delete\`
- Losing the pointer to allocated memory = permanent leak
- Exception-thrown before \`delete\` = leak!

👀 Each function demonstrates a different way leaks happen — learn to spot them!`,

  6134: `# Smart Pointers: Modern C++ Memory Safety · 智能指针

🎯 **What you'll learn:** Smart pointers that automatically manage memory — no more leaks!
学习目标：自动管理内存的智能指针——不再有内存泄漏！

Smart pointers are C++'s answer to Python's automatic memory management 🧹. They wrap raw pointers and automatically call \`delete\` when they go out of scope. \`unique_ptr\` (one owner) and \`shared_ptr\` (multiple owners) are your new best friends!

🔑 **Key things to notice:**
- \`unique_ptr\`: sole ownership, auto-deletes when scope ends
- \`shared_ptr\`: shared ownership, deletes when last owner dies
- \`make_unique<T>()\` and \`make_shared<T>()\` are the preferred creation methods

👀 Notice how NO \`delete\` calls are needed — the smart pointers handle everything!`,

  6312: `# Inheritance Basics · 继承基础

🎯 **What you'll learn:** How classes can inherit from parent classes, just like Python!
学习目标：类如何从父类继承——和Python一样！

Inheritance is like a family tree 🌳: a \`Dog\` IS-A \`Animal\`, so it inherits all of Animal's traits and can add its own. In C++, \`: public Animal\` means "Dog publicly inherits from Animal." The child gets everything the parent has!

🔑 **Key things to notice:**
- \`: public Base\` = Python's \`class Child(Base)\`
- \`protected:\` members are accessible in subclasses but not outside
- \`virtual\` enables polymorphism (right method called for each type)

👀 See how the derived class gets parent methods automatically!`,

  6372: `# Practical OOP: Game Characters · 实际OOP：游戏角色

🎯 **What you'll learn:** A practical OOP example with game character classes using inheritance.
学习目标：使用继承的实际OOP示例——游戏角色系统。

Let's build something fun! 🎮 A base \`Character\` class with health and attack, then \`Warrior\` and \`Mage\` subclasses with special abilities. This is exactly how real game engines organize character types.

🔑 **Key things to notice:**
- Base class has common attributes (name, health, attack)
- Each subclass adds unique behavior
- \`virtual\` methods let each character type behave differently

👀 Watch how different character types use the same interface but behave uniquely!`,

  6595: `# RPG Character Hierarchy · RPG角色层次结构

🎯 **What you'll learn:** A complete RPG class hierarchy with polymorphism and smart pointers.
学习目标：使用多态和智能指针的完整RPG类层次结构。

This is the capstone of OOP! 🏰 A full RPG system where different character types share a common interface but each has unique abilities. Smart pointers manage memory, virtual functions enable polymorphism, and the code is clean and extensible.

🔑 **Key things to notice:**
- \`virtual\` methods + \`override\` keyword = safe polymorphism
- \`unique_ptr<Character>\` stores different character types
- The base class pointer calls the correct derived method

👀 Trace how a base class pointer calls different methods depending on the actual type!`,

  6826: `# map — Like Python's dict · map——类似Python的dict

🎯 **What you'll learn:** C++'s \`map\` container — an ordered key-value store like Python's dict.
学习目标：C++的map容器——类似Python的dict的有序键值存储。

If you loved Python dictionaries, you'll feel right at home! 🏠 C++ \`map\` stores key-value pairs and keeps them sorted by key. The syntax is different but the concept is identical: look up values by their keys.

🔑 **Key things to notice:**
- \`map<string, int>\` = key type, value type (both declared!)
- \`m["key"] = value\` works just like Python
- Maps are always sorted by key (unlike Python dicts)

👀 Notice how the output is alphabetically ordered by key!`,

  6876: `# set — Unique Sorted Collection · set——唯一有序集合

🎯 **What you'll learn:** C++'s \`set\` — a collection that automatically removes duplicates and stays sorted.
学习目标：C++的set——自动去重并保持排序的集合。

A set is like a VIP list 📋 — no name appears twice, and it's always in alphabetical order. Insert duplicates? The set quietly ignores them. Need to check membership? \`O(log n)\` — lightning fast!

🔑 **Key things to notice:**
- Duplicates are automatically ignored
- Elements are always sorted
- \`.count(x)\` returns 0 or 1 (exists or not)
- \`.find(x)\` returns an iterator (or \`end()\` if not found)

👀 Try inserting duplicate values and see that the set stays unique!`,

  6974: `# unordered_map — Hash Map (Faster!) · 哈希表（更快！）

🎯 **What you'll learn:** \`unordered_map\` — a hash-based map that's faster than \`map\` for most operations.
学习目标：unordered_map——比map更快的哈希表实现。

\`map\` keeps things sorted (O(log n)), but \`unordered_map\` uses hashing for O(1) average lookup — like the difference between searching a sorted bookshelf vs a hash table magic trick 🎩! When you don't need sorted order, unordered is faster.

🔑 **Key things to notice:**
- Same API as \`map\`, just unordered
- O(1) average vs O(log n) for map
- Use when you don't care about key order
- \`unordered_set\` also exists!

👀 Notice the output order is NOT sorted — that's the trade-off for speed!`,

  7041: `# multimap & multiset: Allowing Duplicates · 允许重复

🎯 **What you'll learn:** Containers that allow duplicate keys (\`multimap\`) and duplicate values (\`multiset\`).
学习目标：允许重复键(multimap)和重复值(multiset)的容器。

Regular maps and sets enforce uniqueness, but sometimes you NEED duplicates 👥. A phone book where one person has multiple numbers? \`multimap\`. A sorted list that keeps all duplicates? \`multiset\`. Same interface, different rules!

🔑 **Key things to notice:**
- \`multimap\`: one key can have multiple values
- \`multiset\`: duplicate elements are kept
- \`equal_range()\` finds all entries with a given key
- \`.count()\` can return more than 1!

👀 See how duplicate keys are stored and retrieved!`,

  7271: `# Sorting — The Most Important Algorithm · 排序——最重要的算法

🎯 **What you'll learn:** How to sort data using C++'s powerful \`std::sort\` and custom comparators.
学习目标：如何使用C++强大的std::sort和自定义比较器排序。

Sorting is THE most fundamental algorithm in programming 🏆. C++'s \`std::sort\` uses IntroSort (hybrid of quicksort + heapsort) and is incredibly fast. You can sort anything — numbers, strings, custom objects — with custom rules!

🔑 **Key things to notice:**
- \`sort(v.begin(), v.end())\` sorts ascending by default
- Pass a comparison function for custom order
- \`sort\` works on vectors, arrays, and any random-access container

👀 See how the same data gets sorted differently with different comparators!`,

  7315: `# Binary Search · 二分查找

🎯 **What you'll learn:** How to use binary search for O(log n) lookups in sorted data.
学习目标：如何使用二分查找在排序数据中进行O(log n)查找。

Binary search is like the "guess a number" game 🔢: always guess the middle, and you'll find any number in at most ~20 guesses out of a million! But the data MUST be sorted first. C++ provides \`binary_search\`, \`lower_bound\`, and \`upper_bound\`.

🔑 **Key things to notice:**
- Data must be sorted first!
- \`binary_search()\` returns true/false
- \`lower_bound()\` returns an iterator to the first element ≥ value
- O(log n) is exponentially faster than O(n) linear search

👀 Compare binary search results with the sorted data to verify correctness!`,

  7349: `# More Useful Algorithms · 更多实用算法

🎯 **What you'll learn:** Essential STL algorithms: min/max, accumulate, count, transform, and more.
学习目标：必备STL算法：min/max、accumulate、count、transform等。

The \`<algorithm>\` and \`<numeric>\` headers are a treasure chest 💎 of pre-built tools. Why write your own sum function when \`accumulate\` exists? Why write your own search when \`find\` is right there? Learn these and save hours of coding!

🔑 **Key things to notice:**
- Most algorithms work on iterator ranges: \`(begin, end)\`
- \`accumulate\` = Python's \`sum()\`
- \`count\` / \`count_if\` = Python's \`.count()\` / \`sum(1 for...)\`
- \`transform\` applies a function to every element

👀 Notice how each algorithm takes iterators — the universal interface!`,

  7468: `# Lambdas with STL Algorithms · Lambda和STL算法

🎯 **What you'll learn:** Lambda expressions — inline anonymous functions for STL algorithms.
学习目标：Lambda表达式——用于STL算法的内联匿名函数。

Lambdas are like Python's \`lambda\` but MORE powerful! 🚀 They can capture local variables and have multiple statements. The syntax is \`[capture](params) { body }\`. Combined with STL algorithms, they make your code concise and expressive.

🔑 **Key things to notice:**
- \`[]\` = capture nothing, \`[&]\` = capture all by reference, \`[=]\` = capture all by value
- \`(params)\` = just like function parameters
- Lambdas work beautifully with \`sort\`, \`for_each\`, \`count_if\`, etc.

👀 See how lambdas replace the need for separate named functions!`,

  7511: `# More Essential Algorithms · 更多必备算法

🎯 **What you'll learn:** Advanced STL algorithms for competitive programming and real projects.
学习目标：竞赛编程和实际项目中的高级STL算法。

These are the power tools 🔧 that separate beginners from experts: \`next_permutation\`, \`partial_sort\`, \`nth_element\`, \`unique\`, and more. Master these and you'll solve problems in minutes that others take hours to code from scratch!

🔑 **Key things to notice:**
- \`next_permutation\` generates all orderings
- \`unique\` removes consecutive duplicates (sort first!)
- \`nth_element\` partially sorts — O(n) for finding the k-th element

👀 Trace each algorithm's effect on the data step by step!`,

  7731: `# Stack — LIFO · 栈——后进先出

🎯 **What you'll learn:** The stack data structure — Last In, First Out (like a stack of plates).
学习目标：栈数据结构——后进先出（就像一摞盘子）。

Imagine a stack of plates 🍽️: you can only add to the top and remove from the top. The last plate you put on is the first one you take off. Stacks are used for undo systems, expression parsing, DFS, and function call tracking!

🔑 **Key things to notice:**
- \`push()\` = add to top, \`pop()\` = remove from top, \`top()\` = peek at top
- Python equivalent: just use a list with \`append()\` and \`pop()\`
- No random access — you can only see/remove the top element!

👀 Follow the push/pop operations and predict what's on top at each step!`,

  7782: `# Queue — FIFO · 队列——先进先出

🎯 **What you'll learn:** The queue data structure — First In, First Out (like a line at a store).
学习目标：队列数据结构——先进先出（就像排队买东西）。

A queue is like a line at a store 🏪: first person in line gets served first. You add to the back (\`push\`) and remove from the front (\`pop\`). Queues are essential for BFS, task scheduling, and buffering!

🔑 **Key things to notice:**
- \`push()\` = add to back, \`pop()\` = remove from front
- \`front()\` = peek at first element, \`back()\` = peek at last
- Python equivalent: \`from collections import deque\`

👀 Trace the queue operations and predict the order elements come out!`,

  7826: `# Priority Queue — Always Get the Best · 优先队列

🎯 **What you'll learn:** A queue where the highest priority element is always at the front.
学习目标：最高优先级元素总在最前面的队列。

A priority queue is like an emergency room 🏥 — the most urgent patient gets treated first, regardless of arrival order. In C++, it's a max-heap by default: the largest element is always on top. Essential for Dijkstra's algorithm, scheduling, and greedy problems!

🔑 **Key things to notice:**
- \`top()\` gives the maximum element (max-heap by default)
- For min-heap: \`priority_queue<int, vector<int>, greater<int>>\`
- Push and pop are O(log n)

👀 Watch elements come out in priority order, not insertion order!`,

  7952: `# Template Functions & Classes · 模板函数和类

🎯 **What you'll learn:** How templates let you write one function/class that works with ANY type.
学习目标：模板如何让你写一个适用于任何类型的函数/类。

Templates are like cookie cutters 🍪 — one shape, any dough flavor. Write \`findMax<T>\` once, and it works for \`int\`, \`double\`, \`string\`, anything! This is how STL containers (\`vector<T>\`, \`map<K,V>\`) work under the hood.

🔑 **Key things to notice:**
- \`template<typename T>\` declares a type parameter
- The compiler generates separate versions for each type used
- Templates = C++'s version of Python's "duck typing" but at compile time

👀 See how the same template function handles different types automatically!`,

  8188: `# Fast I/O Template · 快速I/O模板

🎯 **What you'll learn:** Speed up input/output for competitive programming — essential for time limits!
学习目标：加速输入输出——竞赛编程中通过时限的关键！

In competitions, slow I/O can cause Time Limit Exceeded (TLE) ⏱️. These tricks disable sync between C and C++ I/O and untie cin from cout, making your I/O orders of magnitude faster. Every competitive programmer starts with this template!

🔑 **Key things to notice:**
- \`ios::sync_with_stdio(false)\` disables C/C++ sync
- \`cin.tie(nullptr)\` unties cin from cout
- \`bits/stdc++.h\` includes everything (competition only, not production!)

👀 This is your starting template for every competition problem!`,

  8227: `# Full Competition Template · 完整竞赛模板

🎯 **What you'll learn:** A complete C++ template used by competitive programmers worldwide.
学习目标：全球竞赛选手使用的完整C++模板。

This is the "starter kit" 🎒 that competitive programmers paste at the top of every solution. Type aliases save typing, macros make code shorter, and utility functions handle common operations. Memorize this!

🔑 **Key things to notice:**
- \`typedef long long ll\` saves typing for 64-bit integers
- \`#define\` macros create shortcuts (\`FOR\`, \`ALL\`, etc.)
- Debug macros help during testing but are removed for submission

👀 Study each typedef and macro — you'll see them in every competitive solution!`,

  8297: `# Common Patterns · 常见模式

🎯 **What you'll learn:** Fundamental patterns that appear in most competitive programming problems.
学习目标：大多数竞赛题目中出现的基本模式。

These patterns are your building blocks 🧱: prefix sums, frequency counting, sliding windows, and more. About 70% of competition problems use one or more of these patterns. Recognize the pattern → apply the template → solve the problem!

🔑 **Key things to notice:**
- Prefix sums enable O(1) range sum queries
- Frequency arrays count occurrences efficiently
- Coordinate compression maps large values to small indices

👀 Each pattern is self-contained — study one at a time and practice applying it!`,

  8500: `# Classic Greedy Problems · 经典贪心问题

🎯 **What you'll learn:** The greedy algorithm strategy — make the locally optimal choice at each step.
学习目标：贪心算法策略——每一步做出局部最优选择。

Greedy algorithms are like always picking the biggest slice of pizza 🍕 — take the best option available right now and hope it leads to the best overall result. It doesn't always work, but when it does, it's beautifully simple and efficient!

🔑 **Key things to notice:**
- Sort the data first (most greedy algorithms need sorted input)
- Make the locally best choice at each step
- Prove your greedy choice is correct (not all problems can be solved greedily!)

👀 Trace through each problem and verify that the greedy choice gives the optimal answer!`,

  8551: `# Binary Search on Answer · 二分答案

🎯 **What you'll learn:** A powerful technique — binary search the answer space instead of the data!
学习目标：一种强大的技巧——对答案空间而非数据进行二分查找！

Instead of searching FOR the answer in data, you search ON possible answers: "Can we achieve X?" If yes, try higher; if no, try lower 🎯. It's like playing the number guessing game, but the thing you're guessing is the answer itself!

🔑 **Key things to notice:**
- The answer must be monotonic (if X works, all values < X also work, or vice versa)
- Write a \`check(mid)\` function that returns true/false
- \`lo\`, \`hi\` bracket the answer range; \`mid\` tests the middle

👀 Follow the binary search narrowing down to the exact answer!`,

  8600: `# Two Pointers Technique · 双指针技巧

🎯 **What you'll learn:** The two-pointer technique for solving problems on sorted arrays in O(n).
学习目标：双指针技巧——在排序数组上用O(n)时间解决问题。

Two pointers is like two people walking toward each other from opposite ends of a bridge 🌉. One starts at the beginning, one at the end. Based on what they see, one steps forward. This turns O(n²) brute force into O(n) elegance!

🔑 **Key things to notice:**
- One pointer at start, one at end (or both at start for sliding window)
- Move pointers based on comparison with target
- Works on sorted arrays or linked lists

👀 Trace both pointers and see how they converge to find the answer!`,

  8808: `# Fibonacci — DP Hello World · 斐波那契——DP入门

🎯 **What you'll learn:** Dynamic Programming basics through the classic Fibonacci problem.
学习目标：通过经典斐波那契问题学习动态规划基础。

Dynamic Programming (DP) is about solving problems by breaking them into overlapping subproblems and storing results 🧠. Naive Fibonacci is O(2ⁿ) — impossibly slow for n=50. With DP (memoization or tabulation), it becomes O(n). That's the magic!

🔑 **Key things to notice:**
- Recursive without memo: O(2ⁿ) — exponential explosion! 💥
- Top-down (memo): add a cache array, O(n)
- Bottom-up (tabulation): fill array from small to large, O(n)

👀 Compare the three approaches and their dramatically different speeds!`,

  8864: `# Classic DP: Climbing Stairs & Coin Change · 经典DP

🎯 **What you'll learn:** Two classic DP problems that teach the core DP thinking pattern.
学习目标：两个教你DP核心思维模式的经典问题。

DP problems all follow one pattern: "the answer for problem size N depends on answers for smaller sizes." 🪜 Climbing stairs: ways to reach step N = ways to reach N-1 + ways to reach N-2. Coin change: minimum coins for amount N = 1 + min coins for (N - each coin value).

🔑 **Key things to notice:**
- State definition: what does \`dp[i]\` represent?
- Transition: how does \`dp[i]\` relate to smaller subproblems?
- Base cases: what are \`dp[0]\`, \`dp[1]\`?

👀 Identify the state, transition, and base case for each problem!`,

  8912: `# 2D DP: Grid Problems · 二维DP：网格问题

🎯 **What you'll learn:** How to solve grid-based problems using 2D dynamic programming.
学习目标：如何使用二维动态规划解决网格问题。

2D DP extends the idea to grids 🗺️: "how many paths from top-left to bottom-right?" At each cell, the number of paths = paths from above + paths from the left. The 2D table fills cell by cell, building the answer from smaller subproblems.

🔑 **Key things to notice:**
- \`dp[i][j]\` represents the answer for the subgrid ending at (i,j)
- Fill row by row, left to right
- First row and first column are base cases

👀 Trace the 2D table filling and verify the final answer in the bottom-right corner!`,
};

// Read the file
let content = fs.readFileSync('src/data/cpp-lessons.ts', 'utf8');
let lines = content.split('\n');

// Process each code section
let lineNums = Object.keys(teachings).map(Number).sort((a,b) => b - a); // Process bottom-up to preserve line numbers

for (const lineNum of lineNums) {
  const newContent = teachings[lineNum];
  if (newContent === null) continue; // Skip already-good sections
  
  const idx = lineNum - 1; // 0-indexed
  
  // Find the content: line
  let contentLineIdx = idx;
  while (contentLineIdx < lines.length && !lines[contentLineIdx].includes('content:')) {
    contentLineIdx++;
  }
  
  // Find the end of content (line with closing backtick before code:)
  let contentEndIdx = contentLineIdx;
  if (lines[contentLineIdx].trim().endsWith('`,')) {
    // Single-line content
    contentEndIdx = contentLineIdx;
  } else {
    contentEndIdx = contentLineIdx + 1;
    while (contentEndIdx < lines.length) {
      if (lines[contentEndIdx].trim().startsWith('code:')) {
        contentEndIdx--; // Back up to the line before code:
        break;
      }
      if (lines[contentEndIdx].includes('`,') && !lines[contentEndIdx].trim().startsWith('\\`') && !lines[contentEndIdx].trim().startsWith('`\\`')) {
        break;
      }
      contentEndIdx++;
    }
  }
  
  // Get the indentation
  const indent = lines[contentLineIdx].match(/^(\s*)/)[1];
  
  // Build the new content line(s)
  const escapedContent = newContent.replace(/\\/g, '\\');
  const newLine = `${indent}content: \`${newContent}\`,`;
  
  // Replace the content lines
  lines.splice(contentLineIdx, contentEndIdx - contentLineIdx + 1, newLine);
}

fs.writeFileSync('src/data/cpp-lessons.ts', lines.join('\n'));
console.log('Done! Processed', lineNums.filter(n => teachings[n] !== null).length, 'code sections');
