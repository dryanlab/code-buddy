#!/usr/bin/env python3
"""Transform all type: "code" sections in lessons.ts to add teaching explanations."""

import re

with open('src/data/lessons.ts', 'r') as f:
    content = f.read()

# Define replacements: (old_content, new_content)
# We match the exact content string for each code section

replacements = [
    # 1. L276 - First Hacker Screen (lesson 1-1)
    (
        'content: `## 🎬 Your First Hacker Screen!\n\nTime to create that epic green-text hacker look! Run this code:`,',
        'content: `## 🎬 Your First Hacker Screen!\n\n🎯 **What you\'ll learn:** How to use print() to display multiple lines of text on screen.\n学习目标：如何用 print() 在屏幕上显示多行文字。\n\nImagine you\'re a movie director 🎬 — each print() is one line of dialogue! The computer reads your script top to bottom and performs each line in order.\n\n🔑 **Key things to notice:**\n- Each print() creates one line of output\n- Text inside quotes is displayed exactly as written\n- Comments (# lines) are ignored by Python\n\n👀 Try changing the messages to create your own hacker story!`,',
    ),
    # 2. L477 - Mad Libs Story Generator (lesson 1-2)
    (
        'content: `## 🎪 The Ultimate Mad Libs Story Generator!`,',
        'content: `## 🎪 The Ultimate Mad Libs Story Generator!\n\n🎯 **What you\'ll learn:** How to combine input(), variables, and string concatenation (+) to build dynamic stories.\n学习目标：如何结合 input()、变量和字符串拼接（+）来构建动态故事。\n\nThink of this like a recipe 🧑‍🍳 — first you gather ingredients (input), store them in bowls (variables), then mix them together (+) into a delicious story!\n\n🔑 **Key things to notice:**\n- input() pauses the program and waits for the user to type\n- Each answer gets stored in a named variable\n- The + operator glues strings together like tape 🔗\n\n👀 Try adding more input() calls for extra story ingredients!`,',
    ),
    # 3. L660 - Pizza Party Calculator (lesson 1-3)
    (
        'content: `## 🍕 Pizza Party Calculator Supreme!`,',
        'content: `## 🍕 Pizza Party Calculator Supreme!\n\n🎯 **What you\'ll learn:** How to use // (floor division) and % (modulo) to solve real sharing problems.\n学习目标：如何用 //（整除）和 %（取余）解决真实的分配问题。\n\nDividing pizza is the perfect analogy! // tells you how many whole slices each person gets, and % tells you how many are left over. It\'s like dealing cards 🃏 — deal evenly, then count what\'s left.\n\n🔑 **Key things to notice:**\n- \\`//\\` gives whole number results (no decimals)\n- \\`%\\` gives the remainder after division\n- \\`str()\\` converts numbers to text for printing\n\n👀 Change the number of slices or friends and see how the results change!`,',
    ),
    # 4. L697 - Pizza Budget Calculator (lesson 1-3)
    (
        'content: `## 💰 Pizza Budget Calculator`,',
        'content: `## 💰 Pizza Budget Calculator\n\n🎯 **What you\'ll learn:** How to combine math operators for real-world budget calculations.\n学习目标：如何组合数学运算符进行实际的预算计算。\n\nThis is what real apps do! 💳 Your phone\'s calculator, shopping apps, even games — they all use these same math operations under the hood.\n\n🔑 **Key things to notice:**\n- \\`int()\\` converts decimals to whole numbers (chops off the decimal)\n- \\`round(number, 2)\\` keeps only 2 decimal places (for money!)\n- Percentage formula: \\`value * percent / 100\\`\n\n👀 Try changing the budget or pizza price!`,',
    ),
    # 5. L851 - First Turtle Drawing (lesson 1-4)
    (
        'content: `## 🟩 Your First Turtle Drawing - Perfect Square!\n\n🐢 **Click Run to see the turtle draw!** 点击运行看海龟画图！`,',
        'content: `## 🟩 Your First Turtle Drawing - Perfect Square!\n\n🎯 **What you\'ll learn:** How to use turtle graphics commands and a for loop to draw shapes.\n学习目标：如何使用海龟绘图命令和 for 循环画图形。\n\nThe turtle is like a robot artist 🤖🎨 — it follows your movement instructions exactly. A square is just: go forward, turn 90°, repeat 4 times!\n\n🔑 **Key things to notice:**\n- \\`import turtle\\` loads the drawing toolbox\n- \\`for side in range(4):\\` repeats the indented code 4 times\n- forward() moves, right() turns — that\'s it!\n\n👀 Click Run to see the turtle draw! 点击运行看海龟画图！`,',
    ),
    # 6. L902 - Triangle and Colorful Shapes (lesson 1-4)
    (
        'content: `## 🔺 Challenge: Triangle and Colorful Shapes!\n\n💻 **Copy this into Thonny and run it locally!**`,',
        'content: `## 🔺 Challenge: Triangle and Colorful Shapes!\n\n🎯 **What you\'ll learn:** How to use lists and nested loops to create colorful multi-shape drawings.\n学习目标：如何用列表和嵌套循环创建多彩的多图形绘画。\n\nThis is like having a box of crayons 🖍️ — you pick a color, draw a shape, pick another color, draw another shape. The outer loop changes colors, the inner loop draws each triangle!\n\n🔑 **Key things to notice:**\n- \\`colors[i]\\` picks a color from the list by position\n- Nested loops = a loop inside a loop (one for shapes, one for sides)\n- \\`penup()\\` / \\`pendown()\\` = lift/lower the pen to move without drawing\n\n👀 Try changing 120 to other angles or 3 to other numbers!`,',
    ),
    # 7. L1145 - Rollercoaster Safety System (lesson 1-5)
    (
        'content: `## 🎢 Rollercoaster Safety System v1.0`,',
        'content: `## 🎢 Rollercoaster Safety System v1.0\n\n🎯 **What you\'ll learn:** How to use if/else with boolean variables and the \\`and\\` operator for multi-condition checks.\n学习目标：如何用 if/else 配合布尔变量和 and 运算符进行多条件检查。\n\nThis is how real safety systems work! 🛡️ Like an airport security checkpoint — you must pass ALL checks (ID ✅ AND boarding pass ✅) before you can board.\n\n🔑 **Key things to notice:**\n- \\`int(input(...))\\` converts typed text into a number\n- Boolean variables (True/False) store check results for later\n- \\`and\\` means BOTH conditions must be True\n\n👀 Try different heights and gear answers to see all possible outcomes!`,',
    ),
    # 8. L1189 - Advanced Multi-Ride Safety (lesson 1-5)
    (
        'content: `## 🎡 Advanced Multi-Ride Safety System`,',
        'content: `## 🎡 Advanced Multi-Ride Safety System\n\n🎯 **What you\'ll learn:** How to use multiple independent if/else blocks to check different rules.\n学习目标：如何使用多个独立的 if/else 代码块检查不同规则。\n\nImagine a theme park map 🗺️ with different rides — each ride has its own rules. Your code checks them all, one by one, like a safety inspector walking through the park.\n\n🔑 **Key things to notice:**\n- Each ride has its OWN if/else block (they\'re independent!)\n- \\`and\\` combines two conditions: age AND height must both pass\n- Different rides = different thresholds\n\n👀 Try entering different ages and heights to unlock different rides!`,',
    ),
    # 9. L1351 - Game Foundation (lesson 1-6)
    (
        'content: `## Game Foundation - Setup & Introduction`,',
        'content: `## Game Foundation - Setup & Introduction\n\n🎯 **What you\'ll learn:** How to set up a game with variables, booleans, and user input — the foundation of every game.\n学习目标：如何用变量、布尔值和用户输入搭建游戏基础——每个游戏的起点。\n\nEvery game starts the same way: introduce the story, get player info, and set up the scoreboard 🎮. Think of this as building the stage before the actors perform!\n\n🔑 **Key things to notice:**\n- Boolean variables (True/False) track what the player has/hasn\'t done\n- \\`gold_coins = 0\\` and \\`courage_points = 50\\` set starting stats\n- \\`str()\\` converts numbers to text for display\n\n👀 This is Part 1 — the setup. Watch how these variables get used later!`,',
    ),
    # 10. L1384 - Mini Challenge Combine Everything (lesson 1-6)
    (
        'content: `## 🎮 Mini Challenge: Combine Everything!`,',
        'content: `## 🎮 Mini Challenge: Combine Everything!\n\n🎯 **What you\'ll learn:** How to combine variables, math, and if/else in one program — the core of game logic.\n学习目标：如何在一个程序中组合变量、数学运算和 if/else——游戏逻辑的核心。\n\nThis is like a mini video game engine ⚙️ — store data (variables), do math (damage calculation), then make decisions (if/else). Every game works this way!\n\n🔑 **Key things to notice:**\n- \\`hp = hp - damage\\` updates a variable using its old value\n- \\`str()\\` converts numbers so they can join text with +\n- The if/else checks the NEW value of hp after damage\n\n👀 Try changing damage to different values and predict the output!`,',
    ),
    # 11. L1537 - Polygon Factory (lesson 2-1)
    (
        'content: `## 🔺 Polygon Factory - Any Shape You Want!\n\n🐢 **Click Run to see the turtle draw!** 点击运行看海龟画图！`,',
        'content: `## 🔺 Polygon Factory - Any Shape You Want!\n\n🎯 **What you\'ll learn:** How to use a for loop with a calculated angle to draw ANY regular polygon.\n学习目标：如何用 for 循环和计算出的角度画任意正多边形。\n\nHere\'s the magic formula: turn angle = 360° ÷ number of sides 🔮. A square? 360÷4=90°. A hexagon? 360÷6=60°. With this one formula, you can draw ANY shape!\n\n🔑 **Key things to notice:**\n- \\`360 / sides\\` calculates the turn angle automatically\n- \\`range(sides)\\` repeats exactly the right number of times\n- Same code structure works for 3 sides or 100 sides!\n\n👀 Click Run to see the turtle draw! Try changing the number of sides!`,',
    ),
    # 12. L1586 - Kaleidoscope Creator (lesson 2-1)
    (
        'content: `## 🌈 Kaleidoscope Creator - Psychedelic Art!\n\n🐢 **Click Run to see the kaleidoscope!** 点击运行看万花筒！`,',
        'content: `## 🌈 Kaleidoscope Creator - Psychedelic Art!\n\n🎯 **What you\'ll learn:** How nested loops and color lists create mesmerizing repeating patterns.\n学习目标：如何用嵌套循环和颜色列表创建令人着迷的重复图案。\n\nA kaleidoscope works by repeating the same pattern with slight rotation 🔄. Our code does the same: draw, rotate a little, change color, repeat!\n\n🔑 **Key things to notice:**\n- The outer loop controls how many times the pattern repeats\n- Colors cycle through a list using \\`colors[i % len(colors)]\\`\n- Small angle changes between repetitions create the spiral effect\n\n👀 Click Run to see the kaleidoscope! Try changing colors or angles!`,',
    ),
    # 13. L1659 - Loop Circus Text Patterns (lesson 2-1)
    (
        'content: `## 🎪 Loop Circus - Text Patterns (runs in browser!)`,',
        'content: `## 🎪 Loop Circus - Text Patterns (runs in browser!)\n\n🎯 **What you\'ll learn:** How to use for loops with string multiplication to create visual text patterns.\n学习目标：如何用 for 循环和字符串乘法创建视觉文字图案。\n\nString multiplication is like a copy machine 📄 — \\`"⭐" * 3\\` makes \\`"⭐⭐⭐"\\`. Combine that with loops that change the count each time, and you get pyramids, diamonds, and progress bars!\n\n🔑 **Key things to notice:**\n- \\`"x" * n\\` repeats a string n times\n- \\`range(10, 0, -1)\\` counts backwards (10, 9, 8...)\n- f-strings make formatting easy: \\`f"[{bar}] {percent}%"\\`\n\n👀 Try changing the patterns — can you make an upside-down pyramid?`,',
    ),
    # 14. L1862 - Epic RPG Adventure Backpack (lesson 2-2)
    (
        'content: `## ⚔️ Epic RPG Adventure - Backpack Master!`,',
        'content: `## ⚔️ Epic RPG Adventure - Backpack Master!\n\n🎯 **What you\'ll learn:** How to use Python lists as an inventory system — adding, removing, and checking items.\n学习目标：如何用 Python 列表作为背包系统——添加、删除和检查物品。\n\nA list is like a real backpack 🎒 — you can stuff things in (append), take things out (remove), check what\'s inside (in), and count items (len). Every RPG game uses this!\n\n🔑 **Key things to notice:**\n- \\`.append()\\` adds items to the end of a list\n- \\`.remove()\\` takes a specific item out\n- \\`"item" in backpack\\` checks if something is in the list (True/False)\n\n👀 Follow the adventure and watch how the backpack changes!`,',
    ),
    # 15. L1931 - Backpack Organizer (lesson 2-2)
    (
        'content: `## 🏪 Backpack Organizer - Sort Your Loot!`,',
        'content: `## 🏪 Backpack Organizer - Sort Your Loot!\n\n🎯 **What you\'ll learn:** How to sort, slice, and organize lists — essential data management skills.\n学习目标：如何排序、切片和整理列表——必备的数据管理技能。\n\nOrganizing a list is like tidying your room 🧹 — sort alphabetically, grab the first 3 items, or reverse the order. These operations are the building blocks of search engines and databases!\n\n🔑 **Key things to notice:**\n- \\`.sort()\\` arranges items alphabetically/numerically\n- \\`list[:3]\\` grabs the first 3 items (slicing)\n- \\`.reverse()\\` flips the order\n\n👀 Try sorting your own list of favorite games or foods!`,',
    ),
    # 16. L2125 - Number Guessing Game 2.0 (lesson 2-3)
    (
        'content: `## 🎮 Number Guessing Game 2.0 - The Ultimate Version!`,',
        'content: `## 🎮 Number Guessing Game 2.0 - The Ultimate Version!\n\n🎯 **What you\'ll learn:** How to use while loops, random numbers, and counters to build a real game.\n学习目标：如何用 while 循环、随机数和计数器构建一个真正的游戏。\n\nA while loop is like a stubborn security guard 💂 — it keeps asking "password?" until you get it right! Combined with \\`random\\`, you get a game that\'s different every time.\n\n🔑 **Key things to notice:**\n- \\`while guess != secret:\\` keeps looping until correct\n- \\`import random\\` + \\`random.randint(1, 100)\\` generates a mystery number\n- A counter variable tracks how many attempts\n\n👀 Try playing the game — can you guess in under 7 tries?`,',
    ),
    # 17. L2200 - High Score Challenge Mode (lesson 2-3)
    (
        'content: `## 🏆 Advanced: High Score Challenge Mode!`,',
        'content: `## 🏆 Advanced: High Score Challenge Mode!\n\n🎯 **What you\'ll learn:** How to use loops within loops and track best scores across multiple rounds.\n学习目标：如何使用循环嵌套并跨多轮追踪最佳成绩。\n\nThis is how arcade games work! 🕹️ An outer loop runs multiple rounds, while the inner loop handles each guessing attempt. A "best score" variable remembers your record across all rounds.\n\n🔑 **Key things to notice:**\n- Outer for loop = multiple rounds; inner while loop = guessing\n- \\`min()\\` finds the smallest number (best/fewest attempts)\n- Variables outside the loop persist between rounds\n\n👀 Can you beat your own high score?`,',
    ),
    # 18. L2401 - Star Pattern Factory (lesson 2-4)
    (
        'content: `## ⭐ Star Pattern Factory - Your First Masterpieces!`,',
        'content: `## ⭐ Star Pattern Factory - Your First Masterpieces!\n\n🎯 **What you\'ll learn:** How nested loops (a loop inside a loop) create 2D patterns row by row.\n学习目标：如何用嵌套循环（循环中的循环）逐行创建二维图案。\n\nThink of it like a typewriter 📝 — the outer loop moves to a new line (row), and the inner loop types characters across (columns). Row by row, a pattern appears!\n\n🔑 **Key things to notice:**\n- Outer loop = which row we\'re on\n- Inner loop = what to print on that row\n- String multiplication \\`"⭐" * n\\` is a shortcut for repeating\n\n👀 Try changing the range numbers to make bigger or different patterns!`,',
    ),
    # 19. L2450 - Diamond & Pyramid Patterns (lesson 2-4)
    (
        'content: `## 💎 Advanced Pattern Academy - Diamond & Pyramid Masters!`,',
        'content: `## 💎 Advanced Pattern Academy - Diamond & Pyramid Masters!\n\n🎯 **What you\'ll learn:** How to calculate spaces and symbols mathematically to create centered patterns.\n学习目标：如何通过数学计算空格和符号来创建居中图案。\n\nA diamond shape is just two pyramids stacked! 💎 The secret is controlling spaces: more spaces = more centered. It\'s math + art working together.\n\n🔑 **Key things to notice:**\n- Spaces decrease as stars increase (they add up to a constant!)\n- The top half counts up, the bottom half counts down\n- \\`" " * (n - i)\\` creates the right amount of spacing\n\n👀 Can you figure out the math pattern before reading the code?`,',
    ),
    # 20. L2524 - Interactive Pattern Generator (lesson 2-4)
    (
        'content: `## 🎮 Interactive Pattern Generator - Build Your Own!`,',
        'content: `## 🎮 Interactive Pattern Generator - Build Your Own!\n\n🎯 **What you\'ll learn:** How to use user input to customize loop behavior — making programs interactive.\n学习目标：如何用用户输入来定制循环行为——让程序变得交互化。\n\nThis is like a pattern vending machine 🎰 — you choose the size and style, and the loops generate it for you! Input controls what the loops create.\n\n🔑 **Key things to notice:**\n- \\`int(input(...))\\` turns user text into a number for range()\n- The same loop code creates different results based on input\n- This is how customizable software works!\n\n👀 Try different sizes and see how the patterns scale!`,',
    ),
    # 21. L2740 - Caesar Cipher (lesson 2-5)
    (
        'content: `## 🕵️ Caesar Cipher Encryption Machine!`,',
        'content: `## 🕵️ Caesar Cipher Encryption Machine!\n\n🎯 **What you\'ll learn:** How to use string indexing, loops, and the \\`in\\` operator to encrypt messages character by character.\n学习目标：如何用字符串索引、循环和 in 运算符逐字符加密消息。\n\nCaesar Cipher is one of the oldest codes in history! 🏛️ Julius Caesar used it to send secret military messages. Each letter shifts forward by a fixed number — A becomes D (shift 3), B becomes E, etc.\n\n🔑 **Key things to notice:**\n- \\`.find()\\` locates a character\'s position in the alphabet\n- Modulo \\`% 26\\` wraps Z back to A (circular shifting!)\n- Non-letter characters pass through unchanged\n\n👀 Try encrypting your name and then decoding it!`,',
    ),
    # 22. L2789 - Message Decoder (lesson 2-5)
    (
        'content: `## 🔓 Message Decoder - Break the Code!`,',
        'content: `## 🔓 Message Decoder - Break the Code!\n\n🎯 **What you\'ll learn:** How to reverse an encryption by shifting letters in the opposite direction.\n学习目标：如何通过反方向移动字母来反转加密。\n\nDecoding is just encrypting in reverse! 🔄 If the encoder shifted +3, the decoder shifts -3. Same code, opposite direction. This is the foundation of all cryptography!\n\n🔑 **Key things to notice:**\n- Decoding uses the SAME logic as encoding, just subtract instead of add\n- A brute-force decoder tries ALL 26 shifts to crack unknown messages\n- \\`for shift in range(26):\\` systematically tries every possibility\n\n👀 Can you decode a secret message from a friend?`,',
    ),
    # 23. L2853 - String Art Creator (lesson 2-5)
    (
        'content: `## 🎨 String Art Creator - Text Transformation Magic!`,',
        'content: `## 🎨 String Art Creator - Text Transformation Magic!\n\n🎯 **What you\'ll learn:** How to use string methods like .upper(), .replace(), and slicing to transform text.\n学习目标：如何用字符串方法如 .upper()、.replace() 和切片来变换文字。\n\nStrings are like clay 🏺 — you can reshape them! Upper case, reverse, replace characters, extract parts. These are the tools that power text editors, search engines, and chat filters.\n\n🔑 **Key things to notice:**\n- \\`.upper()\\` / \\`.lower()\\` change case without changing content\n- \\`.replace("old", "new")\\` swaps text patterns\n- \\`text[::-1]\\` reverses a string (slicing trick!)\n\n👀 Try transforming your own name or favorite phrase!`,',
    ),
    # 24. L3077 - Rock Paper Scissors (lesson 2-6)
    (
        'content: `## 🪨📄✂️ Rock Paper Scissors Championship Engine!`,',
        'content: `## 🪨📄✂️ Rock Paper Scissors Championship Engine!\n\n🎯 **What you\'ll learn:** How to use random.choice(), while loops, and if/elif/else for game logic.\n学习目标：如何用 random.choice()、while 循环和 if/elif/else 实现游戏逻辑。\n\nThis is a complete game engine! 🎮 The computer picks randomly (AI opponent), you pick your move, and if/elif/else determines who wins. It\'s the same structure as turn-based games.\n\n🔑 **Key things to notice:**\n- \\`random.choice([...])\\` picks a random item from a list\n- Winning conditions use \\`and\\` to check two things at once\n- A while loop keeps the game running until someone quits\n\n👀 Play a few rounds — does the computer seem random?`,',
    ),
    # 25. L3190 - RPS Statistics & Tournament (lesson 2-6)
    (
        'content: `## 📊 Advanced Statistics & Tournament Mode!`,',
        'content: `## 📊 Advanced Statistics & Tournament Mode!\n\n🎯 **What you\'ll learn:** How to track statistics with counters and calculate percentages from game data.\n学习目标：如何用计数器追踪统计数据并从游戏数据中计算百分比。\n\nEvery esports game tracks stats! 📈 Win rate, streak, total games — it\'s all just counters and math. This is how leaderboards and analytics dashboards work.\n\n🔑 **Key things to notice:**\n- Counter variables (wins, losses, draws) increment with \\`+= 1\\`\n- Win rate = \\`wins / total * 100\\` (percentage formula)\n- Statistics persist across rounds because variables live outside the loop\n\n👀 Play 10+ rounds and check your win rate — is it close to 33%?`,',
    ),
    # 26. L3485 - Turtle House Builder Functions (lesson 3-1)
    (
        'content: `## 🏠 Turtle House Builder - Your First Function Factory!\n\n🐢 **Click Run to see turtle draw houses!** 点击运行看海龟画房子！`,',
        'content: `## 🏠 Turtle House Builder - Your First Function Factory!\n\n🎯 **What you\'ll learn:** How to define and call functions to avoid repeating code.\n学习目标：如何定义和调用函数来避免重复代码。\n\nFunctions are like recipes 📖 — write the instructions once, then use them whenever you want! Instead of copying "draw a square" code 10 times, just call \\`draw_square()\\` 10 times.\n\n🔑 **Key things to notice:**\n- \\`def function_name():\\` creates a reusable block of code\n- Calling the function: just write \\`function_name()\\`\n- Parameters let you customize: \\`draw_house(size=100)\\`\n\n👀 Click Run to see turtle draw houses! Watch how one function draws multiple houses.`,',
    ),
    # 27. L3563 - Advanced Function Factory Art (lesson 3-1)
    (
        'content: `## 🎨 Advanced Function Factory - Art Generator!\n\n🐢 **Click Run to see the art!** 点击运行看艺术作品！`,',
        'content: `## 🎨 Advanced Function Factory - Art Generator!\n\n🎯 **What you\'ll learn:** How to use functions with multiple parameters and return values for complex creations.\n学习目标：如何使用带多个参数和返回值的函数来创建复杂作品。\n\nParameters are like adjustable knobs 🎛️ on a machine — size, color, position. Twist the knobs differently and you get different artwork from the same machine!\n\n🔑 **Key things to notice:**\n- Multiple parameters: \\`def draw_flower(x, y, size, color):\\`\n- Each function call can use different arguments\n- Functions can call OTHER functions (composition!)\n\n👀 Click Run to see the art! Try changing the parameters to create new designs.`,',
    ),
    # 28. L3667 - Function Calculator (lesson 3-1)
    (
        'content: `## 🧮 Function Calculator - Building Blocks for Math!`,',
        'content: `## 🧮 Function Calculator - Building Blocks for Math!\n\n🎯 **What you\'ll learn:** How to use \\`return\\` to make functions that give back results you can use.\n学习目标：如何用 return 让函数返回可以使用的结果。\n\nSo far, functions just DID things (printed, drew). But with \\`return\\`, functions become like vending machines 🎰 — put something in, get something back! That\'s how real calculators and apps work.\n\n🔑 **Key things to notice:**\n- \\`return value\\` sends a result BACK to where the function was called\n- You can store returned values: \\`result = add(3, 5)\\`\n- Functions with return values can be used inside other expressions\n\n👀 Try building your own math functions!`,',
    ),
    # 29. L3942 - Agent Database Dictionaries (lesson 3-2)
    (
        'content: `## 📋 Agent Database - Create Secret Profiles!`,',
        'content: `## 📋 Agent Database - Create Secret Profiles!\n\n🎯 **What you\'ll learn:** How to use dictionaries to store structured data with key-value pairs.\n学习目标：如何用字典存储键值对形式的结构化数据。\n\nA dictionary is like a real ID card 🪪 — it has labeled fields (name, age, code_name) each with a value. Unlike lists which use number positions, dictionaries use meaningful names!\n\n🔑 **Key things to notice:**\n- \\`{"key": "value"}\\` creates a dictionary\n- \\`agent["name"]\\` accesses a value by its key\n- Dictionaries can hold any type: strings, numbers, lists, even other dicts!\n\n👀 Try creating a dictionary for your own secret agent profile!`,',
    ),
    # 30. L4062 - Mission Assignment Dictionaries (lesson 3-2)
    (
        'content: `## 🔍 Mission Assignment System - Advanced Dictionary Operations!`,',
        'content: `## 🔍 Mission Assignment System - Advanced Dictionary Operations!\n\n🎯 **What you\'ll learn:** How to loop through, update, and search dictionaries for complex operations.\n学习目标：如何遍历、更新和搜索字典以进行复杂操作。\n\nNow dictionaries get serious! 🕵️ You can loop through all agents, filter by skill level, update records — this is exactly how databases work in real apps like Instagram or Spotify.\n\n🔑 **Key things to notice:**\n- \\`.items()\\` lets you loop through both keys AND values\n- \\`.keys()\\` and \\`.values()\\` give you just one side\n- \\`if key in dict:\\` checks if a key exists before accessing it\n\n👀 Try adding new agents and assigning them missions!`,',
    ),
    # 31. L4372 - High Score File Writing (lesson 3-3)
    (
        'content: `## 📝 High Score Recorder - Writing Hall of Fame!`,',
        'content: `## 📝 High Score Recorder - Writing Hall of Fame!\n\n🎯 **What you\'ll learn:** How to write data to files so it persists even after the program ends.\n学习目标：如何把数据写入文件，使其在程序结束后依然保存。\n\nWithout files, your program\'s memory vanishes when it stops — like a dream you forget! 💭 File writing is how games save progress, apps store settings, and websites remember your login.\n\n🔑 **Key things to notice:**\n- \\`open("file.txt", "w")\\` opens a file for writing\n- \\`.write()\\` puts text into the file\n- \\`with open(...) as f:\\` automatically closes the file when done\n\n👀 Check if the file actually appears after running the code!`,',
    ),
    # 32. L4498 - Advanced Hall of Fame (lesson 3-3)
    (
        'content: `## 🥇 Advanced Hall of Fame - Top 10 Leaderboard!`,',
        'content: `## 🥇 Advanced Hall of Fame - Top 10 Leaderboard!\n\n🎯 **What you\'ll learn:** How to read, parse, sort, and rewrite files to maintain a leaderboard.\n学习目标：如何读取、解析、排序和重写文件来维护排行榜。\n\nThis is how EVERY leaderboard works — from video games to school rankings! 🏆 Read old scores, add the new one, sort them, keep only the top 10, save back to file.\n\n🔑 **Key things to notice:**\n- \\`.readlines()\\` reads a file into a list of strings\n- \\`.strip()\\` removes extra spaces/newlines from each line\n- \\`sorted(scores, reverse=True)\\` sorts highest-first\n\n👀 Try running this multiple times and watch the leaderboard grow!`,',
    ),
]

# Now handle the remaining sections that have multi-line content with embedded code examples
# These are from Area 4 and 5 lessons

replacements_multiline = [
    # 33. L4775 - Assert Self-Check
    (
        """content: `## ✅ Assert: Your Code's Self-Check

\\`\\`\\`python
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
\\`\\`\\`

**🐍 Py:** "assert catches bugs EARLY — before they cause mysterious problems later!"`,""",
        """content: `## ✅ Assert: Your Code's Self-Check

🎯 **What you'll learn:** How to use \\`assert\\` to automatically verify your code works correctly.
学习目标：如何用 assert 自动验证代码是否正确运行。

Think of assert like a bouncer at a club 🚪 — it checks conditions at the door and stops everything if something's wrong. Way better than finding the bug 3 hours later!

🔑 **Key things to notice:**
- \\`assert condition, "error message"\\` crashes on purpose if condition is False
- Great for catching impossible inputs (negative money, etc.)
- Use during development to find bugs early

\\`\\`\\`python
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
\\`\\`\\`

👀 Try uncommenting the last line to see assert in action!`,""",
    ),
    # 34. L4796 - Type Checking for Debugging
    (
        """content: `## 🏷️ Type Checking for Debugging""",
        """content: `## 🏷️ Type Checking for Debugging

🎯 **What you'll learn:** How to use \\`type()\\` and \\`isinstance()\\` to check and debug data types.
学习目标：如何用 type() 和 isinstance() 检查和调试数据类型。

Type errors are like putting diesel in a gasoline car ⛽ — it looks similar but breaks everything! type() is your fuel tester.""",
    ),
    # 35. L4936 - Multiple Exception Types
    (
        """content: `## 🥅 Multiple Exception Types""",
        """content: `## 🥅 Multiple Exception Types

🎯 **What you'll learn:** How to catch different types of errors with specific except blocks.
学习目标：如何用特定的 except 块捕获不同类型的错误。

Different errors need different fixes — like a doctor treating different symptoms 🏥. ValueError needs different handling than ZeroDivisionError!""",
    ),
    # 36. L4960 - Raise Your Own Errors
    (
        """content: `## 🚨 Raise Your Own Errors""",
        """content: `## 🚨 Raise Your Own Errors

🎯 **What you'll learn:** How to use \\`raise\\` to create your own custom error messages.
学习目标：如何用 raise 创建自己的自定义错误消息。

Sometimes YOU know something is wrong before Python does! 🚨 raise lets you pull the fire alarm yourself instead of waiting for the building to catch fire.""",
    ),
    # 37. L5102 - Random Module
    (
        """content: `## 🎲 The Random Module — Fun with Chance!""",
        """content: `## 🎲 The Random Module — Fun with Chance!

🎯 **What you'll learn:** How to use the random module for games, simulations, and unpredictable behavior.
学习目标：如何用 random 模块实现游戏、模拟和不可预测的行为。

Random is the spice of programming! 🎲 Without it, games would be boring (same enemy every time) and simulations would be useless.""",
    ),
    # 38. L5127 - Useful Built-in Modules
    (
        """content: `## 📅 Useful Built-in Modules""",
        """content: `## 📅 Useful Built-in Modules

🎯 **What you'll learn:** How to import and use Python's built-in modules like math, datetime, and os.
学习目标：如何导入和使用 Python 内置模块如 math、datetime 和 os。

Python comes with batteries included! 🔋 These modules are pre-built toolboxes — no need to build everything from scratch.""",
    ),
    # 39. L5271 - Complete Grade Manager System
    (
        """content: `## 📊 Complete Grade Manager System""",
        """content: `## 📊 Complete Grade Manager System

🎯 **What you'll learn:** How to combine functions, dictionaries, and file I/O into a complete application.
学习目标：如何将函数、字典和文件读写组合成一个完整的应用程序。

This is your graduation project for Area 3! 🎓 Everything you've learned — functions, dicts, files — comes together into one real-world app.""",
    ),
    # 40. L5316 - Saving Data with JSON
    (
        """content: `## 💾 Saving Data to Files with JSON""",
        """content: `## 💾 Saving Data to Files with JSON

🎯 **What you'll learn:** How to use the json module to save and load structured data.
学习目标：如何用 json 模块保存和加载结构化数据。

JSON is the universal language of data! 🌐 Every app, website, and API uses it. Think of it as a standardized way to pack your Python dictionaries into a file.""",
    ),
    # 41. L5498 - Alien Radar Report
    (
        """content: `## 🛸 Follow Along: Alien Radar Report

Let's build a complete radar scanning report! Run this code and watch the alien data come alive:`,""",
        """content: `## 🛸 Follow Along: Alien Radar Report

🎯 **What you'll learn:** How to use enumerate(), f-strings, and conditional formatting to create data reports.
学习目标：如何用 enumerate()、f字符串和条件格式化来创建数据报告。

This is how real dashboards work! 📊 Data goes in, formatted reports come out. You'll build a bar chart using nothing but text characters — data visualization with pure Python!

🔑 **Key things to notice:**
- \\`enumerate()\\` gives you both the index AND the value
- \\`f"{text:>8}"\\` right-aligns text (great for tables!)
- Conditional expressions add warnings only when needed

👀 Run this code and watch the alien data come alive!`,""",
    ),
    # 42. L5842 - Dice Gambling Game
    (
        """content: `## 🎲 Follow Along: The Dice Gambling Game

Build a complete dice game with betting! Watch your money go up and down:`,""",
        """content: `## 🎲 Follow Along: The Dice Gambling Game

🎯 **What you'll learn:** How to combine loops, random, conditionals, and variables to build a complete game with state.
学习目标：如何组合循环、随机数、条件判断和变量来构建一个有状态的完整游戏。

This is game development 101! 🎮 Every casino game, card game, and board game app works on these same principles: random events + player choices + persistent state (your money).

🔑 **Key things to notice:**
- Game state (money) persists across rounds in a while loop
- \\`random.randint()\\` simulates dice rolls
- The game ends when you run out of money or choose to quit

👀 Build this game and see if you can beat the house!`,""",
    ),
    # 43. L6151 - Cannon Trajectory Simulator
    (
        """content: `## 💣 Follow Along: Cannon Trajectory Simulator

Let's simulate projectile physics with Python! Fire a cannon and track where the ball lands:`,""",
        """content: `## 💣 Follow Along: Cannon Trajectory Simulator

🎯 **What you'll learn:** How to use math formulas in code to simulate real-world physics.
学习目标：如何在代码中使用数学公式来模拟真实世界的物理现象。

This is how game physics engines work! 🎯 The same math that scientists use to launch rockets, game developers use to make Angry Birds fly. You'll turn physics equations into Python code!

🔑 **Key things to notice:**
- \\`import math\\` gives you sin(), cos(), and pi
- Physics formulas translate directly into Python expressions
- A loop simulates time steps to track the projectile's path

👀 Fire the cannon and watch the trajectory unfold!`,""",
    ),
    # 44. L6581 - Suspect Filter
    (
        """content: `## 🔍 Follow Along: The Suspect Filter

Build a detective's suspect filtering system! Use logic to narrow down who did it:`,""",
        """content: `## 🔍 Follow Along: The Suspect Filter

🎯 **What you'll learn:** How to filter lists of dictionaries using multiple conditions — like a database query.
学习目标：如何用多个条件过滤字典列表——就像数据库查询一样。

This is how detectives AND search engines work! 🔎 Start with a big list, apply filters one by one, and narrow down to the answer. SQL databases do the exact same thing.

🔑 **Key things to notice:**
- List of dictionaries = a simple database
- List comprehensions with \\`if\\` = powerful filtering
- Multiple filters can chain together to narrow results

👀 Build the suspect filter and solve the mystery!`,""",
    ),
    # 45. L6864 - Caesar Cipher Machine (Area 4)
    (
        """content: `## 🔐 Follow Along: Caesar Cipher Machine

Build a complete encryption/decryption system with a menu:`,""",
        """content: `## 🔐 Follow Along: Caesar Cipher Machine

🎯 **What you'll learn:** How to build a complete tool with encrypt, decrypt, and brute-force features using functions.
学习目标：如何用函数构建一个包含加密、解密和暴力破解功能的完整工具。

This is real cryptography in action! 🔐 You'll build a tool that secret agents would actually use — encrypt messages, decrypt them with a key, and even crack codes without knowing the key!

🔑 **Key things to notice:**
- Functions organize code into reusable encrypt/decrypt operations
- \\`chr()\\` and \\`ord()\\` convert between characters and numbers
- A brute-force attack tries all possible keys systematically

👀 Build the cipher machine and send secret messages!`,""",
    ),
    # 46. L7255 - Predator-Prey Ecosystem
    (
        """content: `## 🧬 Follow Along: Predator-Prey Ecosystem

Simulate nature's balance! Watch rabbit and fox populations change over time:`,""",
        """content: `## 🧬 Follow Along: Predator-Prey Ecosystem

🎯 **What you'll learn:** How to simulate dynamic systems where populations affect each other over time.
学习目标：如何模拟种群之间随时间互相影响的动态系统。

This is computational science! 🔬 The same simulation techniques are used to model climate change, disease spread, and stock markets. You'll watch virtual rabbits and foxes dance in the balance of nature.

🔑 **Key things to notice:**
- Each time step recalculates populations based on growth/death rates
- Predator-prey dynamics create natural oscillation (up-down cycles)
- Small parameter changes can dramatically affect the outcome

👀 Simulate the ecosystem and observe the population cycles!`,""",
    ),
    # 47. L7762 - Pet Commands Exercise (AI Area)
    (
        """content: `## 🐾 Exercise 1: Teach Your Pet Commands! 教宠物识别命令！

This pet knows 5 tricks. Type a command and watch it respond!`,""",
        """content: `## 🐾 Exercise 1: Teach Your Pet Commands! 教宠物识别命令！

🎯 **What you'll learn:** How to build a simple AI that maps commands to responses using dictionaries.
学习目标：如何用字典构建一个将命令映射到响应的简单AI。

This is how voice assistants start! 🗣️ Siri and Alexa use the same basic idea — match what you say to a known command, then respond. Your pet is a mini AI assistant!

🔑 **Key things to notice:**
- A dictionary maps commands → responses (the pet's "brain")
- \\`.lower().strip()\\` normalizes input so "SIT" and "sit" both work
- Unknown commands get a random confused response

👀 Type commands and watch your AI pet respond!`,""",
    ),
    # 48. L7810 - Pet Emotion Reader
    (
        """content: `## 😊 Exercise 2: Teach Your Pet to Read Emotions! 教宠物读情绪！

Now let's make the pet understand how you FEEL based on keywords in your message!`,""",
        """content: `## 😊 Exercise 2: Teach Your Pet to Read Emotions! 教宠物读情绪！

🎯 **What you'll learn:** How to build a simple sentiment analyzer using keyword matching.
学习目标：如何用关键词匹配构建一个简单的情感分析器。

This is basic Natural Language Processing (NLP)! 🧠 Real AI chatbots use similar (but fancier) techniques to understand if you're happy, sad, or angry. Your pet reads your mood from your words!

🔑 **Key things to notice:**
- Keywords like "happy", "sad", "angry" trigger different responses
- \\`if keyword in message:\\` searches for words in text
- Multiple keywords can match — priority order matters

👀 Try typing different emotional messages and see how the pet reacts!`,""",
    ),
    # 49. L8038 - Tic-Tac-Toe AI
    (
        """content: `## ⭕ Exercise 1: Tic-Tac-Toe AI · 井字棋AI

Build a tic-tac-toe game where the computer plays against you!`,""",
        """content: `## ⭕ Exercise 1: Tic-Tac-Toe AI · 井字棋AI

🎯 **What you'll learn:** How to build game AI that makes strategic decisions using rules and board analysis.
学习目标：如何用规则和棋盘分析构建能做出战略决策的游戏AI。

This is your first real AI opponent! 🤖 The computer evaluates the board, looks for winning moves, blocks your wins, and makes smart choices. It's simple rule-based AI — the foundation of game intelligence.

🔑 **Key things to notice:**
- A 2D list represents the game board
- The AI checks: can I win? → can I block? → take center? → random
- A function checks all 8 possible winning lines

👀 Build this and try to beat the AI — it's harder than you think!`,""",
    ),
    # 50. L8157 - Rock-Paper-Scissors AI
    (
        """content: `## ✊ Exercise 2: Rock-Paper-Scissors AI · 石头剪刀布AI

Build a smart RPS opponent that learns from your patterns!`,""",
        """content: `## ✊ Exercise 2: Rock-Paper-Scissors AI · 石头剪刀布AI

🎯 **What you'll learn:** How to build an AI that tracks patterns and predicts your next move.
学习目标：如何构建一个追踪模式并预测你下一步行动的AI。

This AI gets smarter as you play! 📈 It remembers your history, finds patterns, and exploits your habits. Humans are surprisingly predictable — this AI will prove it!

🔑 **Key things to notice:**
- A frequency dictionary tracks how often you play each move
- The AI predicts your MOST LIKELY move and picks the counter
- This is basic machine learning: learn from data, make predictions

👀 Play many rounds — can you trick the AI by being truly random?`,""",
    ),
    # 51. L8382 - ASCII Art Generator
    (
        """content: `## 🖼️ Exercise 1: ASCII Art Generator · ASCII艺术生成器

Turn text into big ASCII art letters!`,""",
        """content: `## 🖼️ Exercise 1: ASCII Art Generator · ASCII艺术生成器

🎯 **What you'll learn:** How to use dictionaries of multi-line strings to create a text-to-art converter.
学习目标：如何用多行字符串字典创建文字转艺术的转换器。

Before graphics cards existed, ASCII art was how computers made visuals! 🖥️ Each letter is stored as a multi-line string pattern, and your code assembles them side by side.

🔑 **Key things to notice:**
- Each letter is a list of strings (one per row)
- To display a word, print row 0 of all letters, then row 1, etc.
- This is how old-school banner printers worked!

👀 Type different words and see them transformed into giant text!`,""",
    ),
    # 52. L8471 - AI Poet Markov Chain
    (
        """content: `## 📝 Exercise 2: AI Poet — Markov Chain Text Generator · AI诗人

Build an AI that writes poetry by learning from example text!`,""",
        """content: `## 📝 Exercise 2: AI Poet — Markov Chain Text Generator · AI诗人

🎯 **What you'll learn:** How Markov chains generate text by predicting the next word from learned patterns.
学习目标：如何用马尔可夫链通过学习到的模式预测下一个词来生成文本。

This is how early AI text generators worked! ✍️ Before ChatGPT, Markov chains were the go-to method. The AI learns which words tend to follow other words, then generates new text one word at a time.

🔑 **Key things to notice:**
- A dictionary maps each word to a list of words that follow it
- \\`random.choice()\\` picks the next word from possible options
- More training text = better, more natural output

👀 Feed it different texts and see how the poetry style changes!`,""",
    ),
    # 53. L8687 - Grade Predictor
    (
        """content: `## 📊 Exercise 1: Grade Predictor · 成绩预测器

Build a simple ML model that predicts grades from study hours!`,""",
        """content: `## 📊 Exercise 1: Grade Predictor · 成绩预测器

🎯 **What you'll learn:** How to build a simple linear regression model that predicts outcomes from data.
学习目标：如何构建一个简单的线性回归模型，从数据中预测结果。

This is real machine learning! 📈 Given data about study hours and grades, the AI finds the pattern (a line) and predicts future grades. It's the same math behind stock predictions and weather forecasting.

🔑 **Key things to notice:**
- Training data = pairs of (input, output) examples
- The model finds slope and intercept (y = mx + b)
- Prediction = plug new input into the learned formula

👀 Try predicting grades for different study hours!`,""",
    ),
    # 54. L8747 - Weather Predictor
    (
        """content: `## 🌤️ Exercise 2: Weather Predictor · 天气预测器

Build a weather prediction system using historical patterns!`,""",
        """content: `## 🌤️ Exercise 2: Weather Predictor · 天气预测器

🎯 **What you'll learn:** How to use historical data and probability to make predictions.
学习目标：如何使用历史数据和概率来做出预测。

Real weather apps use the same idea, just with WAY more data! 🌦️ Look at past patterns, calculate probabilities, and make educated guesses. Your simple model is a baby version of what meteorologists use.

🔑 **Key things to notice:**
- Historical data is stored as a list of past observations
- Probability = count of event / total observations
- The prediction is the most likely outcome based on history

👀 Add more weather data and see if predictions improve!`,""",
    ),
    # 55. L8965 - Bias Detector
    (
        """content: `## 🔎 Exercise 1: Bias Detector · 偏见检测器

Build a tool that detects bias in text or data!`,""",
        """content: `## 🔎 Exercise 1: Bias Detector · 偏见检测器

🎯 **What you'll learn:** How to analyze text for potential bias using word frequency and keyword detection.
学习目标：如何通过词频和关键词检测来分析文本中的潜在偏见。

AI ethics is HUGE right now! ⚖️ Real AI systems can accidentally be biased because of their training data. Learning to detect bias is a superpower — you'll understand why AI fairness matters.

🔑 **Key things to notice:**
- Keyword lists define what counts as potentially biased language
- Frequency analysis reveals overrepresented patterns
- No detector is perfect — this is about awareness, not perfection

👀 Try feeding it different texts and see what the detector finds!`,""",
    ),
    # 56. L9053 - AI Judge
    (
        """content: `## ⚖️ Exercise 2: AI Judge · AI判官

Build a simple AI system that makes judgments — and learn why it's tricky!`,""",
        """content: `## ⚖️ Exercise 2: AI Judge · AI判官

🎯 **What you'll learn:** How AI decision-making works and why fairness in AI systems is critical.
学习目标：了解AI决策如何运作以及为什么AI系统的公平性至关重要。

Should AI make important decisions about people? 🤔 This exercise shows both the power AND the danger. Your AI judge follows rules, but rules can be unfair if the data or criteria are biased.

🔑 **Key things to notice:**
- Rules-based AI can be transparent but rigid
- Different criteria weights lead to different outcomes
- "Fair" depends on what you're optimizing for

👀 Change the judging criteria and see how outcomes shift!`,""",
    ),
    # 57. L9268 - Mini Text Adventure
    (
        """content: `## 🎮 Starter Example: Mini Text Adventure · 迷你文字冒险

Your capstone project combines everything: variables, conditions, loops, functions, and more!`,""",
        """content: `## 🎮 Starter Example: Mini Text Adventure · 迷你文字冒险

🎯 **What you'll learn:** How to combine ALL your skills into one complete project — your coding graduation piece!
学习目标：如何将所有技能组合到一个完整项目中——你的编程毕业作品！

This is the final boss! 🎮 Variables, if/else, loops, functions, lists, dictionaries, files — everything comes together. It's like building with LEGO: each piece you learned is one brick, and now you build the castle!

🔑 **Key things to notice:**
- Game state lives in variables and dictionaries
- Functions organize different game actions
- A main game loop ties everything together
- Player choices drive the story with if/elif/else

👀 Play through the adventure, then modify it to create your own story!`,""",
    ),
]

# Apply single-line replacements
count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        count += 1
    else:
        print(f"WARNING: Could not find replacement #{count+1}: {old[:60]}...")

print(f"Applied {count} single-line replacements")

# Apply multi-line replacements
multi_count = 0
for old, new in replacements_multiline:
    if old in content:
        content = content.replace(old, new, 1)
        multi_count += 1
    else:
        print(f"WARNING: Could not find multi-line replacement: {old[:60]}...")

print(f"Applied {multi_count} multi-line replacements")
print(f"Total: {count + multi_count} replacements")

with open('src/data/lessons.ts', 'w') as f:
    f.write(content)

print("File written successfully!")
