// Extended Quiz Data - 8-10 questions per lesson with coding challenges
// Auto-imported by lessons.ts

import type { QuizQuestion } from "./lessons";

export const QUIZ_DATA: Record<string, QuizQuestion[]> = {
  // ═══════════════════════════════════════════════════════════════
  // 🏝️ AREA 1: STARTER ISLAND
  // ═══════════════════════════════════════════════════════════════

  "1-1": [
    {
      question: "🐍 Py asks: What does print() do?",
      options: ["Prints on paper like a printer", "Shows text on the screen like hackers", "Deletes secret files", "Shuts down the computer"],
      correctIndex: 1,
      explanation: "🐍 print() makes text appear on screen — just like those cool hacker movies! 电影里的绿色文字就是这样显示的！",
    },
    {
      question: "🤖 Botty asks: What happens when you run multiple print() commands?",
      options: ["Only the last one shows", "They all show, line by line", "They merge into one line", "The computer explodes"],
      correctIndex: 1,
      explanation: "🤖 Each print() command creates a new line. That's how hackers make those scrolling text effects! 每个print()都会换行显示！",
    },
    {
      question: "What do you need around text inside print()?",
      options: ["Square brackets [ ]", "Curly braces { }", "Quotes \" \" or ' '", "Nothing special"],
      correctIndex: 2,
      explanation: "Text (strings) must be wrapped in quotes so Python knows it's words, not code! 文字要用引号包起来！",
    },
    {
      question: "What does the # symbol do in Python?",
      options: ["Makes text bold", "Creates a comment that Python ignores", "Multiplies numbers", "Starts a new program"],
      correctIndex: 1,
      explanation: "# starts a comment — a note for humans that Python skips! 注释是给人看的，Python会跳过！",
    },
    {
      question: "Which of these is correct Python?",
      options: ["print Hello", "print(Hello)", 'print("Hello")', "Print(\"Hello\")"],
      correctIndex: 2,
      explanation: 'You need parentheses AND quotes: print("Hello"). Python is case-sensitive too — lowercase p! 需要括号和引号，p要小写！',
    },
    {
      type: "coding",
      question: "Write code to print: I am a hacker!",
      prompt: "🎯 Write a print statement that shows exactly: I am a hacker!",
      starterCode: "# Write your code below\n",
      expectedOutput: "I am a hacker!",
      hint: 'Use print() with the text in quotes: print("...")',
      explanation: 'print("I am a hacker!") — remember the quotes and parentheses! 记住引号和括号！',
    },
    {
      question: "What happens if you forget the closing quote in print(\"Hello)?",
      options: ["Python adds it automatically", "Python shows an error", "It prints Hello anyway", "The computer restarts"],
      correctIndex: 1,
      explanation: "Missing quotes cause a SyntaxError — Python needs both opening and closing quotes! 缺引号会报错！",
    },
    {
      type: "coding",
      question: "Print two lines: Hello and World",
      prompt: "🎯 Write TWO print statements: first prints 'Hello', second prints 'World'",
      starterCode: "# Line 1:\n\n# Line 2:\n",
      expectedOutput: "Hello\nWorld",
      hint: "Use two separate print() statements, one for each word",
      explanation: "Each print() creates a new line of output! 每个print()输出一行！",
    },
    {
      question: "Which character is NOT used in a basic print statement?",
      options: ["( )", "\" \"", "@ @", "# (in comments)"],
      correctIndex: 2,
      explanation: "@ is not used in basic print() — we use parentheses () and quotes \"\"! @ 不用在print里！",
    },
    {
      question: "🐍 Py asks: What is Python?",
      options: ["A type of snake only", "A programming language", "A video game", "A math formula"],
      correctIndex: 1,
      explanation: "🐍 Python is a programming language — named after the snake but used to write code! Python是一种编程语言！",
    },
  ],

  "1-2": [
    {
      question: "What does the = sign mean in Python?",
      options: ["Equals (math comparison)", "Put this value INTO that box (assignment)", "Greater than", "Delete the variable"],
      correctIndex: 1,
      explanation: "= is assignment, not math equality! It means 'store this value in this variable'. = 是赋值，不是等于！",
    },
    {
      question: "What is a variable?",
      options: ["A type of loop", "A labeled box that stores data", "A Python command", "A type of error"],
      correctIndex: 1,
      explanation: "Variables are like labeled boxes — you name them and store values inside! 变量就像贴标签的盒子！",
    },
    {
      question: 'What does input("Enter name: ") do?',
      options: ["Prints 'Enter name'", "Waits for user to type something", "Creates a variable called name", "Deletes previous input"],
      correctIndex: 1,
      explanation: "input() shows the prompt and waits for the user to type. Like handing them a microphone! 🎤 input()等用户输入！",
    },
    {
      question: 'What does f"Hello {name}" create?',
      options: ["An error", "The text 'Hello {name}' literally", "A string with the value of name inserted", "A new variable called name"],
      correctIndex: 2,
      explanation: "f-strings let you plug variables into text with {curly braces}! f字符串用花括号插入变量！",
    },
    {
      type: "coding",
      question: "Create a variable and print it",
      prompt: "🎯 Create a variable called 'name' with value 'Python', then print it",
      starterCode: '# Create variable and print it\n',
      expectedOutput: "Python",
      hint: 'First: name = "Python", then: print(name) — no quotes around the variable name in print!',
      explanation: 'name = "Python" then print(name) — variables don\'t need quotes when used! 使用变量时不加引号！',
    },
    {
      question: "Which variable name is NOT valid in Python?",
      options: ["my_name", "age2", "2fast", "_secret"],
      correctIndex: 2,
      explanation: "Variable names can't start with a number! 2fast is invalid. Use fast2 instead. 变量名不能以数字开头！",
    },
    {
      question: 'What does "Hello" + " " + "World" produce?',
      options: ["HelloWorld", "Hello World", "An error", "Hello + + World"],
      correctIndex: 1,
      explanation: 'String + joins text together (concatenation). The " " adds a space between! 加号连接字符串！',
    },
    {
      type: "coding",
      question: "Use an f-string to combine text",
      prompt: '🎯 Set animal = "cat" and print "I love cat" using an f-string',
      starterCode: '# Create the variable\nanimal = "cat"\n# Use f-string to print\n',
      expectedOutput: "I love cat",
      hint: 'Use print(f"I love {animal}")',
      explanation: 'f-strings insert variable values using {braces}! f字符串用花括号插入值！',
    },
    {
      question: "What type of data is the number 42 in Python?",
      options: ["String", "Integer (int)", "Float", "Boolean"],
      correctIndex: 1,
      explanation: "42 is an integer (whole number). If it were 42.0, it'd be a float! 42是整数！",
    },
    {
      question: "What happens if you type: print(name) but never defined 'name'?",
      options: ["It prints nothing", "It prints 'name'", "NameError — variable not found", "It asks for your name"],
      correctIndex: 2,
      explanation: "Using a variable before defining it causes a NameError! Always assign first. 用未定义的变量会报错！",
    },
  ],

  "1-3": [
    {
      question: "What is the result of 10 / 3 in Python?",
      options: ["3", "3.33", "3.3333333333333335", "3 remainder 1"],
      correctIndex: 2,
      explanation: "/ does true division and returns a float (decimal). 10/3 = 3.3333... / 做真除法返回小数！",
    },
    {
      question: "What does // do in Python?",
      options: ["Regular division", "Floor division (round down)", "Makes a comment", "Power/exponent"],
      correctIndex: 1,
      explanation: "// is floor division — it divides and rounds DOWN. 10 // 3 = 3. // 是整除，向下取整！",
    },
    {
      question: "What is 2 ** 3?",
      options: ["6", "8", "5", "23"],
      correctIndex: 1,
      explanation: "** means power/exponent. 2 ** 3 = 2×2×2 = 8. ** 是指数运算！",
    },
    {
      question: "What does % (modulo) give you?",
      options: ["A percentage", "The remainder after division", "The quotient", "A decimal number"],
      correctIndex: 1,
      explanation: "% gives the remainder. 10 % 3 = 1 (because 10 ÷ 3 = 3 remainder 1). % 取余数！",
    },
    {
      type: "coding",
      question: "Calculate pizza slices",
      prompt: "🎯 Calculate: 15 pizzas with 8 slices each. Print the total slices.",
      starterCode: "# Calculate total pizza slices\n",
      expectedOutput: "120",
      hint: "Multiply 15 * 8 and print the result: print(15 * 8)",
      explanation: "15 * 8 = 120. Simple multiplication! 简单乘法！",
    },
    {
      question: 'What does int("42") do?',
      options: ["Creates the text '42'", "Converts string '42' to number 42", "Causes an error", "Prints 42"],
      correctIndex: 1,
      explanation: 'int() converts text to a whole number. Useful after input()! int()把文字转成数字！',
    },
    {
      type: "coding",
      question: "Calculate the remainder",
      prompt: "🎯 Print the remainder when 17 is divided by 5",
      starterCode: "# What's left over?\n",
      expectedOutput: "2",
      hint: "Use the % operator: print(17 % 5)",
      explanation: "17 % 5 = 2 (17 ÷ 5 = 3 remainder 2). 取余运算！",
    },
    {
      question: "Which converts a number to text?",
      options: ["int()", "str()", "float()", "num()"],
      correctIndex: 1,
      explanation: "str() converts anything to a string (text). str(42) → '42'. str()转成字符串！",
    },
    {
      question: "What is round(3.7)?",
      options: ["3", "4", "3.7", "3.0"],
      correctIndex: 1,
      explanation: "round() rounds to the nearest integer. 3.7 rounds up to 4! round()四舍五入！",
    },
    {
      type: "coding",
      question: "Floor division practice",
      prompt: "🎯 Print the result of 17 floor-divided by 5",
      starterCode: "# Use // for floor division\n",
      expectedOutput: "3",
      hint: "Use //: print(17 // 5)",
      explanation: "17 // 5 = 3 (rounds down from 3.4). 整除向下取整！",
    },
  ],

  "1-4": [
    {
      question: "What module lets you draw with a turtle in Python?",
      options: ["drawing", "turtle", "canvas", "art"],
      correctIndex: 1,
      explanation: "import turtle gives you a little turtle that draws as it moves! turtle模块让你画画！",
    },
    {
      question: "What does turtle.forward(100) do?",
      options: ["Turns the turtle 100 degrees", "Moves the turtle forward 100 pixels", "Draws a circle of size 100", "Waits 100 seconds"],
      correctIndex: 1,
      explanation: "forward(100) moves the turtle 100 pixels in the direction it's facing! 向前走100像素！",
    },
    {
      question: "What does turtle.right(90) do?",
      options: ["Moves right 90 pixels", "Turns right 90 degrees", "Draws a right angle", "Goes to position 90"],
      correctIndex: 1,
      explanation: "right(90) turns the turtle 90 degrees clockwise. It doesn't move! 右转90度！",
    },
    {
      question: "How do you draw a square with turtle?",
      options: [
        "Draw 4 lines of equal length with 90° turns",
        "Use turtle.square()",
        "Draw 3 lines with 120° turns",
        "Use turtle.rectangle()"
      ],
      correctIndex: 0,
      explanation: "A square = forward + right(90), repeated 4 times! 正方形 = 4次前进+右转90度！",
    },
    {
      question: "What angle do you turn to draw an equilateral triangle?",
      options: ["60 degrees", "90 degrees", "120 degrees", "180 degrees"],
      correctIndex: 2,
      explanation: "For a triangle, turn 120° (external angle). The interior angle is 60° but the turtle turns the exterior! 等边三角形转120度！",
    },
    {
      question: "What does turtle.penup() do?",
      options: ["Makes the pen thicker", "Stops drawing while moving", "Picks up the turtle", "Ends the program"],
      correctIndex: 1,
      explanation: "penup() lifts the pen so the turtle can move without drawing. pendown() starts drawing again! 抬笔后移动不画线！",
    },
    {
      question: 'What does turtle.color("red") do?',
      options: ["Paints the screen red", "Changes the drawing color to red", "Creates a red turtle", "Fills the shape with red"],
      correctIndex: 1,
      explanation: "color() changes the pen color for future drawing! color()改变画笔颜色！",
    },
    {
      question: "How many degrees in a full circle?",
      options: ["180", "270", "360", "90"],
      correctIndex: 2,
      explanation: "A full circle is 360 degrees. This is key for turtle art! 一圈是360度！",
    },
    {
      question: "What does turtle.speed(0) set?",
      options: ["Turtle stops moving", "Slowest speed", "Fastest speed", "Normal speed"],
      correctIndex: 2,
      explanation: "speed(0) is actually the FASTEST setting! 1 is slowest, 0 = instant. speed(0)是最快速度！",
    },
    {
      question: "To draw a circle, you use:",
      options: ["turtle.circle(radius)", "turtle.round(size)", "turtle.oval(r)", "turtle.draw_circle()"],
      correctIndex: 0,
      explanation: "turtle.circle(radius) draws a circle with the given radius! circle(半径)画圆！",
    },
  ],

  "1-5": [
    {
      question: "What does an if statement do?",
      options: ["Repeats code", "Makes decisions based on conditions", "Defines a function", "Imports a module"],
      correctIndex: 1,
      explanation: "if lets Python make decisions — run code only when a condition is True! if让Python做决定！",
    },
    {
      question: "What does == mean in Python?",
      options: ["Assignment (put value in box)", "Comparison (are they equal?)", "Not equal", "Greater than"],
      correctIndex: 1,
      explanation: "== compares two values. = assigns. Don't mix them up! == 是比较，= 是赋值！",
    },
    {
      question: "What does else do?",
      options: ["Runs when the if condition is True", "Runs when the if condition is False", "Always runs", "Never runs"],
      correctIndex: 1,
      explanation: "else is the fallback — it runs when the if condition is False! else在条件为假时执行！",
    },
    {
      question: "What does elif mean?",
      options: ["else if — another condition to check", "end life — stop the program", "elephant if — a Python joke", "else loop — repeat if false"],
      correctIndex: 0,
      explanation: "elif = else if. Check another condition when the first if is False! elif是再检查一个条件！",
    },
    {
      question: "Which comparison operator means 'not equal'?",
      options: ["!=", "<>", "=/=", "!=="],
      correctIndex: 0,
      explanation: "!= means not equal in Python. if x != 5 checks if x is NOT 5. != 表示不等于！",
    },
    {
      type: "coding",
      question: "Write a simple if statement",
      prompt: "🎯 Set age = 15, then print 'teen' if age >= 13",
      starterCode: "age = 15\n# Write your if statement\n",
      expectedOutput: "teen",
      hint: 'Use: if age >= 13: then print("teen") on the next indented line',
      explanation: 'if age >= 13: print("teen") — the condition is True so it prints! 条件为真就执行！',
    },
    {
      question: "What must come at the end of an if line?",
      options: ["Semicolon ;", "Colon :", "Period .", "Nothing"],
      correctIndex: 1,
      explanation: "if, elif, and else lines MUST end with a colon :! It tells Python the body comes next. 冒号不能忘！",
    },
    {
      question: "What does 'and' do in a condition?",
      options: ["Both conditions must be True", "Either condition can be True", "Negates the condition", "Adds numbers"],
      correctIndex: 0,
      explanation: "'and' requires BOTH sides to be True. age >= 13 and age <= 19 means 'between 13 and 19'. and要两边都为真！",
    },
    {
      question: "What does 'or' do in a condition?",
      options: ["Both must be True", "At least one must be True", "Neither can be True", "Exactly one must be True"],
      correctIndex: 1,
      explanation: "'or' needs at least ONE side True. color == 'red' or color == 'blue'. or只需一边为真！",
    },
    {
      type: "coding",
      question: "Check if a number is positive",
      prompt: "🎯 Set x = 10. If x > 0, print 'positive'. Otherwise print 'not positive'.",
      starterCode: "x = 10\n",
      expectedOutput: "positive",
      hint: "Use if x > 0: print(...) else: print(...)",
      explanation: "10 > 0 is True, so 'positive' prints! 10大于0为真！",
    },
  ],

  "1-6": [
    {
      question: "What is a text adventure game?",
      options: ["A game with 3D graphics", "A game where you type choices to progress the story", "A typing speed test", "A text editor"],
      correctIndex: 1,
      explanation: "Text adventures use text input/output for storytelling — the OG video games! 文字冒险用打字来玩游戏！",
    },
    {
      question: "Which Python feature is most useful for game choices?",
      options: ["print() only", "if/elif/else statements", "import turtle", "# comments"],
      correctIndex: 1,
      explanation: "if/elif/else lets you branch the story based on player choices! if/elif/else让故事分支！",
    },
    {
      question: "How do you get player input in a game?",
      options: ["player.read()", "input()", "get()", "keyboard()"],
      correctIndex: 1,
      explanation: 'input("What do you do? ") waits for the player to type their choice! input()等待玩家输入！',
    },
    {
      question: 'What does .lower() do to a string?',
      options: ["Deletes it", "Makes it all lowercase", "Makes it all uppercase", "Reverses it"],
      correctIndex: 1,
      explanation: '"HELLO".lower() → "hello". Useful so "YES", "Yes", and "yes" all work! lower()转成小写！',
    },
    {
      question: "Why is .lower() useful for game input?",
      options: [
        "Makes the game faster",
        "Players can type in any case and it still works",
        "It looks nicer",
        "Python requires lowercase"
      ],
      correctIndex: 1,
      explanation: "Players might type 'LEFT', 'Left', or 'left' — .lower() handles all cases! 不管大小写都能识别！",
    },
    {
      type: "coding",
      question: "Print a game intro",
      prompt: '🎯 Print these two lines:\nWelcome to the dungeon!\nChoose wisely...',
      starterCode: "# Print the game intro\n",
      expectedOutput: "Welcome to the dungeon!\nChoose wisely...",
      hint: "Use two print() statements",
      explanation: "Two print() statements, one per line! 两个print语句！",
    },
    {
      question: "What is nesting in if statements?",
      options: ["Putting an if inside another if", "Using elif", "Using else", "Creating a loop"],
      correctIndex: 0,
      explanation: "Nesting = an if inside another if. It creates deeper story branches! 嵌套是if里面再放if！",
    },
    {
      question: "What does while True: do?",
      options: ["Runs once", "Runs forever until you break out", "Never runs", "Runs twice"],
      correctIndex: 1,
      explanation: "while True creates an infinite loop — great for game loops! Use break to exit. 无限循环，用break退出！",
    },
    {
      question: "How do you exit a while True loop?",
      options: ["stop()", "break", "exit loop", "end"],
      correctIndex: 1,
      explanation: "'break' immediately exits the current loop. Essential for game logic! break退出循环！",
    },
    {
      type: "coding",
      question: "Game choice check",
      prompt: '🎯 Set choice = "left". If choice is "left", print "You found treasure!"',
      starterCode: 'choice = "left"\n',
      expectedOutput: "You found treasure!",
      hint: 'Use: if choice == "left": print("You found treasure!")',
      explanation: 'String comparison with == checks if they match! 字符串比较用==！',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // 🌀 AREA 2: LOOP FOREST
  // ═══════════════════════════════════════════════════════════════

  "2-1": [
    {
      question: "What does a for loop do?",
      options: ["Makes a decision", "Repeats code a specific number of times", "Defines a function", "Handles errors"],
      correctIndex: 1,
      explanation: "for loops repeat code — perfect for drawing patterns and shapes! for循环重复执行代码！",
    },
    {
      question: "What does range(5) produce?",
      options: ["Numbers 1 to 5", "Numbers 0 to 5", "Numbers 0 to 4", "Just the number 5"],
      correctIndex: 2,
      explanation: "range(5) gives 0, 1, 2, 3, 4 — starts at 0, stops BEFORE 5! range(5)是0到4！",
    },
    {
      question: "What does range(2, 8) produce?",
      options: ["2 to 8 inclusive", "2 to 7 (stops before 8)", "0 to 8", "2 and 8 only"],
      correctIndex: 1,
      explanation: "range(start, stop) goes from start up to but NOT including stop. range(2,8)是2到7！",
    },
    {
      question: "How many sides does a regular hexagon have?",
      options: ["4", "5", "6", "8"],
      correctIndex: 2,
      explanation: "A hexagon has 6 sides. Turn 360/6 = 60° at each corner! 六边形有6条边！",
    },
    {
      question: "To draw a regular polygon with N sides, you turn ____ degrees each time.",
      options: ["N", "360", "360 / N", "N / 360"],
      correctIndex: 2,
      explanation: "The exterior angle = 360 / N. For a pentagon (5 sides): 360/5 = 72°! 外角=360/N！",
    },
    {
      type: "coding",
      question: "Print numbers 0 to 4",
      prompt: "🎯 Use a for loop to print numbers 0 through 4, each on a new line",
      starterCode: "# Use for and range\n",
      expectedOutput: "0\n1\n2\n3\n4",
      hint: "for i in range(5): print(i)",
      explanation: "range(5) gives 0,1,2,3,4 and the loop prints each one! range(5)输出0到4！",
    },
    {
      question: "What does range(0, 10, 2) produce?",
      options: ["0, 2, 4, 6, 8", "0, 2, 4, 6, 8, 10", "2, 4, 6, 8, 10", "0, 1, 2, 3, 4"],
      correctIndex: 0,
      explanation: "range(0, 10, 2) counts by 2s: 0, 2, 4, 6, 8. The third number is the step! 第三个参数是步长！",
    },
    {
      type: "coding",
      question: "Repeat a message",
      prompt: '🎯 Print "Ha" exactly 3 times, each on a new line',
      starterCode: "# Use a for loop\n",
      expectedOutput: "Ha\nHa\nHa",
      hint: 'for i in range(3): print("Ha")',
      explanation: "range(3) repeats 3 times! The variable i isn't used here, just the repetition. 重复3次！",
    },
    {
      question: "What is a nested loop?",
      options: ["A broken loop", "A loop inside another loop", "A loop that runs once", "A loop with no body"],
      correctIndex: 1,
      explanation: "Nested loops = a loop inside a loop. The inner loop runs completely for each outer iteration! 嵌套循环是循环套循环！",
    },
    {
      question: "How many times does the inner print run? for i in range(3): for j in range(4): print('*')",
      options: ["3", "4", "7", "12"],
      correctIndex: 3,
      explanation: "3 × 4 = 12! The inner loop runs 4 times for EACH of the 3 outer iterations. 3×4=12次！",
    },
  ],

  "2-2": [
    {
      question: "What is a list in Python?",
      options: ["A single value", "An ordered collection of items in [ ]", "A type of loop", "A function"],
      correctIndex: 1,
      explanation: "Lists store multiple items in order, using square brackets: [1, 2, 3]. 列表用方括号存多个元素！",
    },
    {
      question: "How do you access the FIRST item in a list?",
      options: ["my_list[1]", "my_list[0]", "my_list.first()", "my_list[-1]"],
      correctIndex: 1,
      explanation: "Python lists start at index 0! my_list[0] is the first item. 列表从0开始！",
    },
    {
      question: "What does .append() do?",
      options: ["Removes the last item", "Adds an item to the END of the list", "Sorts the list", "Counts items"],
      correctIndex: 1,
      explanation: "append() adds a new item to the end. Like putting something in your backpack! append()添加到末尾！",
    },
    {
      question: "What does len([10, 20, 30]) return?",
      options: ["30", "10", "3", "60"],
      correctIndex: 2,
      explanation: "len() counts how many items are in the list. 3 items → len = 3! len()返回元素个数！",
    },
    {
      question: "How do you loop through every item in a list?",
      options: ["for item in my_list:", "while my_list:", "loop my_list:", "each item in my_list:"],
      correctIndex: 0,
      explanation: "for item in my_list: gives you each item one at a time! Perfect! for...in遍历列表！",
    },
    {
      type: "coding",
      question: "Create and print a list",
      prompt: '🎯 Create a list called fruits with "apple", "banana", "cherry". Print the list.',
      starterCode: "# Create your list\n",
      expectedOutput: "['apple', 'banana', 'cherry']",
      hint: 'fruits = ["apple", "banana", "cherry"] then print(fruits)',
      explanation: "Lists are created with square brackets and commas! 用方括号和逗号创建列表！",
    },
    {
      question: "What does my_list[-1] access?",
      options: ["The first item", "Causes an error", "The last item", "Nothing"],
      correctIndex: 2,
      explanation: "Negative indexing counts from the end! -1 = last item. 负索引从后面数！",
    },
    {
      question: "What does .remove() do?",
      options: ["Removes the first matching item", "Removes all items", "Removes by index", "Removes the last item"],
      correctIndex: 0,
      explanation: "remove() finds and removes the first matching value. remove()删除第一个匹配项！",
    },
    {
      type: "coding",
      question: "Access a list element",
      prompt: '🎯 Given colors = ["red", "green", "blue"], print the second element',
      starterCode: 'colors = ["red", "green", "blue"]\n# Print the second element\n',
      expectedOutput: "green",
      hint: "Remember: indexing starts at 0! The second element is index 1",
      explanation: 'colors[1] = "green" — index 1 is the second item! 索引1是第二个元素！',
    },
    {
      question: 'What does "in" check for lists?',
      options: ["If list is empty", "If an item exists in the list", "The length of the list", "The index of an item"],
      correctIndex: 1,
      explanation: '"apple" in fruits returns True if "apple" is in the list! in检查元素是否在列表中！',
    },
  ],

  "2-3": [
    {
      question: "What does a while loop do?",
      options: ["Runs once", "Repeats while a condition is True", "Repeats a fixed number of times", "Makes a decision"],
      correctIndex: 1,
      explanation: "while loops keep going as long as the condition remains True! while条件为真就继续循环！",
    },
    {
      question: "What module provides random numbers?",
      options: ["math", "random", "numbers", "dice"],
      correctIndex: 1,
      explanation: "import random gives you random.randint(), random.choice(), and more! random模块给随机数！",
    },
    {
      question: "What does random.randint(1, 10) return?",
      options: ["Always 1", "Always 10", "A random number from 1 to 10 inclusive", "A random decimal"],
      correctIndex: 2,
      explanation: "randint(1, 10) returns a random integer from 1 to 10, including both ends! 1到10的随机整数！",
    },
    {
      question: "What happens if a while condition is NEVER False?",
      options: ["The loop runs once", "Infinite loop!", "Python auto-stops after 100", "The program crashes gracefully"],
      correctIndex: 1,
      explanation: "If the condition never becomes False, the loop runs forever! Always make sure it can end. 永远为真=无限循环！",
    },
    {
      question: "What does break do inside a loop?",
      options: ["Pauses the loop", "Exits the loop immediately", "Skips to the next iteration", "Breaks the computer"],
      correctIndex: 1,
      explanation: "break immediately exits the current loop. break立即退出循环！",
    },
    {
      question: "What does continue do inside a loop?",
      options: ["Exits the loop", "Skips to the next iteration", "Restarts the loop", "Does nothing"],
      correctIndex: 1,
      explanation: "continue skips the rest of the current iteration and goes to the next one! continue跳过当前轮！",
    },
    {
      type: "coding",
      question: "Count to 5 with while",
      prompt: "🎯 Use a while loop to print numbers 1 through 5",
      starterCode: "i = 1\n# Write your while loop\n",
      expectedOutput: "1\n2\n3\n4\n5",
      hint: "while i <= 5: print(i) then i = i + 1",
      explanation: "Increment i each time until the condition becomes False! 每次i加1直到条件为假！",
    },
    {
      question: "What does += do?",
      options: ["Compares values", "Adds and assigns (x += 1 means x = x + 1)", "String concatenation only", "Boolean AND"],
      correctIndex: 1,
      explanation: "x += 1 is shorthand for x = x + 1. Works with -, *, / too! += 是加法简写！",
    },
    {
      type: "coding",
      question: "Sum numbers",
      prompt: "🎯 Calculate the sum of numbers 1 to 5 using a loop and print it",
      starterCode: "total = 0\nfor i in range(1, 6):\n    total = total + i\n",
      expectedOutput: "15",
      hint: "Add print(total) at the end (not inside the loop!)",
      explanation: "1+2+3+4+5 = 15. The loop accumulates the sum! 循环累加求和！",
    },
    {
      question: "In a guessing game, what should happen when the guess is correct?",
      options: ["print an error", "break out of the loop", "continue the loop", "start over"],
      correctIndex: 1,
      explanation: "When they guess right, break exits the guessing loop! 猜对了用break退出！",
    },
  ],

  "2-4": [
    {
      question: "What is a nested loop?",
      options: ["A loop that doesn't work", "A loop inside another loop", "A loop with no variables", "A very fast loop"],
      correctIndex: 1,
      explanation: "Nested = a loop inside a loop. The inner loop completes fully for each outer step! 嵌套循环套循环！",
    },
    {
      question: "What does the * operator do with strings?",
      options: ["Multiplies the string's length", "Repeats the string", "Deletes the string", "Converts to uppercase"],
      correctIndex: 1,
      explanation: '"*" * 5 = "*****" — string repetition! Great for patterns! 字符串重复！',
    },
    {
      type: "coding",
      question: "Print a row of stars",
      prompt: '🎯 Print a row of 5 stars: *****',
      starterCode: "# Print 5 stars in one line\n",
      expectedOutput: "*****",
      hint: 'Use string multiplication: print("*" * 5)',
      explanation: '"*" * 5 repeats the star 5 times! 字符串乘法重复5次！',
    },
    {
      question: "How many times does the inner code run? for i in range(4): for j in range(3): print('X')",
      options: ["4", "3", "7", "12"],
      correctIndex: 3,
      explanation: "4 × 3 = 12. Nested loops multiply! 嵌套循环次数相乘！",
    },
    {
      question: 'What does end="" do in print()?',
      options: ["Ends the program", "Prints nothing", "Prevents the newline at the end", "Adds an empty line"],
      correctIndex: 2,
      explanation: 'print("X", end="") prints X without moving to a new line. Great for patterns! end=""不换行！',
    },
    {
      type: "coding",
      question: "Print a triangle pattern",
      prompt: "🎯 Print this pattern:\n*\n**\n***",
      starterCode: "# Use a loop!\n",
      expectedOutput: "*\n**\n***",
      hint: 'for i in range(1, 4): print("*" * i)',
      explanation: "Each line has i stars, with i going from 1 to 3! 每行i个星号！",
    },
    {
      question: "What is the output of: for i in range(3): print(i, end=' ')?",
      options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2 3 "],
      correctIndex: 1,
      explanation: "range(3) = 0, 1, 2 and end=' ' puts spaces instead of newlines. 输出0 1 2！",
    },
    {
      question: "A staircase pattern going UP from left requires:",
      options: ["Decreasing spaces, increasing stars", "Increasing spaces, decreasing stars", "Same spaces and stars", "Only stars, no spaces"],
      correctIndex: 0,
      explanation: "As you go up, fewer spaces on the left and more stars on the right! 空格减少，星号增加！",
    },
    {
      type: "coding",
      question: "Count backwards",
      prompt: "🎯 Print numbers 5, 4, 3, 2, 1 (each on a new line)",
      starterCode: "# Count down!\n",
      expectedOutput: "5\n4\n3\n2\n1",
      hint: "Use range(5, 0, -1) to count backwards",
      explanation: "range(5, 0, -1) counts from 5 down to 1! 反向range倒数！",
    },
    {
      question: "Which creates a diamond pattern?",
      options: [
        "One loop only",
        "Two loops: one expanding, one shrinking",
        "Three nested loops",
        "A while loop only"
      ],
      correctIndex: 1,
      explanation: "Diamond = top half grows, bottom half shrinks. Two loops (or two phases)! 菱形分上半和下半！",
    },
  ],

  "2-5": [
    {
      question: "What is a string in Python?",
      options: ["A number", "A sequence of characters (text)", "A list of numbers", "A boolean"],
      correctIndex: 1,
      explanation: "Strings are sequences of characters — letters, numbers, symbols, spaces! 字符串是字符序列！",
    },
    {
      question: "How do you access individual characters in a string?",
      options: ["string.char(0)", "string[0]", "string.get(0)", "char(string, 0)"],
      correctIndex: 1,
      explanation: 'Strings use indexing like lists! "hello"[0] = "h". 字符串像列表一样用索引！',
    },
    {
      question: "What does .upper() do?",
      options: ["Makes first letter uppercase", "Makes ALL letters uppercase", "Counts uppercase letters", "Checks if uppercase"],
      correctIndex: 1,
      explanation: '"hello".upper() = "HELLO". Converts all letters! upper()全部大写！',
    },
    {
      question: "How can you reverse a string in Python?",
      options: ['string.reverse()', 'reverse(string)', 'string[::-1]', 'string.flip()'],
      correctIndex: 2,
      explanation: '[::-1] is slice notation that reverses! "hello"[::-1] = "olleh". [::-1]反转字符串！',
    },
    {
      question: "What is the Caesar cipher?",
      options: [
        "A type of Python error",
        "Shifting each letter by a fixed number",
        "A random password generator",
        "A compression algorithm"
      ],
      correctIndex: 1,
      explanation: "Caesar cipher shifts letters: A→D, B→E, etc. One of the oldest encryption methods! 凯撒密码移位加密！",
    },
    {
      type: "coding",
      question: "Reverse a word",
      prompt: '🎯 Set word = "python" and print it reversed',
      starterCode: 'word = "python"\n# Print it reversed\n',
      expectedOutput: "nohtyp",
      hint: "Use word[::-1]",
      explanation: "[::-1] reverses any sequence! 切片反转！",
    },
    {
      question: "What does ord('A') return?",
      options: ["1", "65", "97", "0"],
      correctIndex: 1,
      explanation: "ord() gives the ASCII/Unicode number. A=65, a=97, 0=48. ord()返回字符编码！",
    },
    {
      question: "What does chr(66) return?",
      options: ["'A'", "'B'", "'66'", "'b'"],
      correctIndex: 1,
      explanation: "chr() converts a number back to a character. 66 = 'B'. chr()把数字转回字符！",
    },
    {
      type: "coding",
      question: "Make it uppercase",
      prompt: '🎯 Set msg = "secret" and print it in all uppercase',
      starterCode: 'msg = "secret"\n',
      expectedOutput: "SECRET",
      hint: "Use msg.upper()",
      explanation: ".upper() converts all characters to uppercase! upper()全大写！",
    },
    {
      question: "What does .replace('old', 'new') do?",
      options: ["Deletes 'old'", "Replaces first 'old' with 'new'", "Replaces ALL 'old' with 'new'", "Checks if 'old' exists"],
      correctIndex: 2,
      explanation: 'replace() swaps ALL occurrences of the old text with new! replace()替换所有匹配！',
    },
  ],

  "2-6": [
    {
      question: "What does random.choice() do?",
      options: ["Picks a random number", "Picks a random item from a list", "Creates a random list", "Shuffles a list"],
      correctIndex: 1,
      explanation: "random.choice(['rock','paper','scissors']) picks one randomly! choice()随机选一个！",
    },
    {
      question: "In Rock Paper Scissors, what beats rock?",
      options: ["Scissors", "Rock", "Paper", "Nothing"],
      correctIndex: 2,
      explanation: "Paper covers rock! 📄 beats 🪨. 纸包石头！",
    },
    {
      question: "How do you compare strings in Python?",
      options: ["string1 = string2", "string1 == string2", "string1.equals(string2)", "compare(string1, string2)"],
      correctIndex: 1,
      explanation: "Use == for comparison, = for assignment! == 比较，= 赋值！",
    },
    {
      question: "What's a good way to keep a game running until the player quits?",
      options: ["for loop", "while True with break", "if statement", "import game"],
      correctIndex: 1,
      explanation: "while True runs forever, break exits when player wants to quit! while True持续运行！",
    },
    {
      type: "coding",
      question: "Pick from a list",
      prompt: '🎯 Print "rock" (simulating a choice)',
      starterCode: 'choice = "rock"\n',
      expectedOutput: "rock",
      hint: "Just print(choice)",
      explanation: "In the real game, random.choice() would pick randomly! 实际游戏用random.choice()！",
    },
    {
      question: "How do you track wins in a game?",
      options: ["Use a variable as a counter: wins += 1", "Use print()", "Use input()", "Use import"],
      correctIndex: 0,
      explanation: "A counter variable incremented with += tracks the score! 用变量计数！",
    },
    {
      question: "What does .strip() do to a string?",
      options: ["Removes all spaces", "Removes leading/trailing whitespace", "Makes it lowercase", "Splits into a list"],
      correctIndex: 1,
      explanation: "strip() removes spaces/newlines from both ends. Great for cleaning user input! strip()去除首尾空白！",
    },
    {
      type: "coding",
      question: "Count wins",
      prompt: "🎯 Set wins = 3 and losses = 1. Print the total games played.",
      starterCode: "wins = 3\nlosses = 1\n",
      expectedOutput: "4",
      hint: "print(wins + losses)",
      explanation: "Total games = wins + losses! 总场数=赢+输！",
    },
    {
      question: "What is a good game loop structure?",
      options: [
        "Get input → process → show result → repeat",
        "Show result → get input only",
        "Process → process → process",
        "Input only"
      ],
      correctIndex: 0,
      explanation: "Input → Process → Output → Repeat is the classic game loop pattern! 输入→处理→输出→重复！",
    },
    {
      question: "How can you make a game best-of-5?",
      options: [
        "Use while wins < 3 and losses < 3",
        "Use for i in range(5)",
        "Use if wins == 5",
        "You can't"
      ],
      correctIndex: 0,
      explanation: "First to 3 wins! The while loop continues until someone reaches 3. 先赢3局！",
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // 🏗️ AREA 3: BUILDER CITY
  // ═══════════════════════════════════════════════════════════════

  "3-1": [
    {
      question: "What is a function in Python?",
      options: ["A variable", "A reusable block of code with a name", "A type of loop", "A data type"],
      correctIndex: 1,
      explanation: "Functions are reusable code blocks — define once, use many times! 函数是可重用的代码块！",
    },
    {
      question: "What keyword defines a function?",
      options: ["function", "func", "def", "define"],
      correctIndex: 2,
      explanation: "def is Python's keyword for defining functions: def my_function(): def定义函数！",
    },
    {
      question: "What is a parameter?",
      options: ["The result of a function", "A variable that receives input when the function is called", "A type of error", "A Python module"],
      correctIndex: 1,
      explanation: "Parameters are the 'input slots' of a function. They receive values when called! 参数是函数的输入！",
    },
    {
      question: "What does return do?",
      options: ["Prints a value", "Sends a value back to the caller", "Ends the program", "Repeats the function"],
      correctIndex: 1,
      explanation: "return sends a value back. Without return, the function gives None! return返回值！",
    },
    {
      type: "coding",
      question: "Call a simple function",
      prompt: "🎯 Define a function greet() that prints 'Hello!' then call it",
      starterCode: "# Define and call the function\n",
      expectedOutput: "Hello!",
      hint: 'def greet(): print("Hello!") then call: greet()',
      explanation: "Define with def, call by adding ()! 用def定义，加()调用！",
    },
    {
      question: "What's the difference between parameters and arguments?",
      options: [
        "Parameters are in the definition, arguments are in the call",
        "They're the same thing",
        "Arguments are in the definition",
        "Parameters are only for numbers"
      ],
      correctIndex: 0,
      explanation: "Parameters = placeholders in def. Arguments = actual values when calling! 形参vs实参！",
    },
    {
      question: "What does a function return if there's no return statement?",
      options: ["0", "Empty string", "None", "An error"],
      correctIndex: 2,
      explanation: "Functions without return give back None — Python's 'nothing' value! 没return返回None！",
    },
    {
      type: "coding",
      question: "Function with parameter",
      prompt: '🎯 Define add(a, b) that prints the sum. Call add(3, 5).',
      starterCode: "# Define add function\n",
      expectedOutput: "8",
      hint: "def add(a, b): print(a + b) then add(3, 5)",
      explanation: "The function receives 3 and 5, adds them, prints 8! 函数接收参数并计算！",
    },
    {
      question: "Can a function call another function?",
      options: ["No, that's illegal", "Yes! Functions can call any other function", "Only built-in functions", "Only with special permission"],
      correctIndex: 1,
      explanation: "Functions can call other functions freely! This is how we build complex programs. 函数可以互相调用！",
    },
    {
      question: "What is a default parameter?",
      options: [
        "A parameter that has a backup value if not provided",
        "The first parameter",
        "A parameter that can't be changed",
        "A hidden parameter"
      ],
      correctIndex: 0,
      explanation: 'def greet(name="World") — if no name given, uses "World"! 默认参数有备用值！',
    },
  ],

  "3-2": [
    {
      question: "What is file I/O?",
      options: ["A type of variable", "Reading from and writing to files", "Internet access", "A Python error"],
      correctIndex: 1,
      explanation: "I/O = Input/Output. File I/O means reading/writing files on disk! 文件读写！",
    },
    {
      question: 'What does open("file.txt", "r") do?',
      options: ["Creates a new file", "Opens a file for reading", "Deletes a file", "Runs a file"],
      correctIndex: 1,
      explanation: '"r" = read mode. Opens the file to read its contents! r模式读取文件！',
    },
    {
      question: 'What does "w" mode do when opening a file?',
      options: ["Reads the file", "Writes to file (overwrites!)", "Appends to file", "Watches the file"],
      correctIndex: 1,
      explanation: '"w" = write mode. WARNING: it erases existing content! Use "a" to append. w模式覆盖写入！',
    },
    {
      question: "What does the 'with' keyword do for files?",
      options: ["Nothing special", "Automatically closes the file when done", "Opens multiple files", "Encrypts the file"],
      correctIndex: 1,
      explanation: "'with' ensures the file is properly closed, even if errors occur! with自动关闭文件！",
    },
    {
      question: "What does .read() return?",
      options: ["One line", "All content as one string", "A list of lines", "A number"],
      correctIndex: 1,
      explanation: ".read() reads the entire file as a single string! read()读取全部内容！",
    },
    {
      question: "What does .readlines() return?",
      options: ["One string", "A list where each item is a line", "A number", "A dictionary"],
      correctIndex: 1,
      explanation: ".readlines() returns a list of strings, one per line! readlines()返回行列表！",
    },
    {
      type: "coding",
      question: "String split",
      prompt: '🎯 Split "apple,banana,cherry" by comma and print the result',
      starterCode: 'text = "apple,banana,cherry"\n',
      expectedOutput: "['apple', 'banana', 'cherry']",
      hint: 'Use text.split(",") and print it',
      explanation: "split() breaks a string into a list at each separator! split()分割字符串！",
    },
    {
      question: 'What does "a" mode do?',
      options: ["Reads the file", "Overwrites the file", "Appends to the end of file", "Archives the file"],
      correctIndex: 2,
      explanation: '"a" = append mode. Adds new content to the END without erasing! a模式追加到末尾！',
    },
    {
      type: "coding",
      question: "Join strings",
      prompt: '🎯 Join ["Hello", "World"] with a space and print it',
      starterCode: 'words = ["Hello", "World"]\n',
      expectedOutput: "Hello World",
      hint: 'Use " ".join(words)',
      explanation: 'join() combines list items with a separator between them! join()用分隔符合并！',
    },
    {
      question: "Why should you always close files?",
      options: [
        "To save memory and prevent data loss",
        "It's optional, doesn't matter",
        "Python crashes otherwise",
        "To make files readable"
      ],
      correctIndex: 0,
      explanation: "Unclosed files can lose data and waste memory. Use 'with' to auto-close! 及时关闭防止数据丢失！",
    },
  ],

  "3-3": [
    {
      question: "What is a dictionary in Python?",
      options: ["A list of words", "Key-value pairs in { }", "A type of function", "A sorted list"],
      correctIndex: 1,
      explanation: 'Dictionaries store key:value pairs: {"name": "Py", "age": 5}. 字典存键值对！',
    },
    {
      question: 'How do you access a value in a dictionary?',
      options: ["dict[0]", "dict.get_value()", 'dict["key"]', "dict.value()"],
      correctIndex: 2,
      explanation: 'Use the key in brackets: scores["Alice"] returns Alice\'s score! 用键访问值！',
    },
    {
      question: "How do you add a new key-value pair?",
      options: ["dict.add(key, value)", 'dict["new_key"] = value', "dict.insert(key, value)", "dict.put(key, value)"],
      correctIndex: 1,
      explanation: 'Just assign it! dict["new_key"] = value creates the pair. 直接赋值添加！',
    },
    {
      question: "What does .keys() return?",
      options: ["All values", "All keys", "All key-value pairs", "The length"],
      correctIndex: 1,
      explanation: ".keys() gives you all the keys in the dictionary! keys()返回所有键！",
    },
    {
      question: "What does .values() return?",
      options: ["All keys", "All values", "All key-value pairs", "True or False"],
      correctIndex: 1,
      explanation: ".values() gives you all the values! values()返回所有值！",
    },
    {
      type: "coding",
      question: "Create a dictionary",
      prompt: '🎯 Create a dict: score = {"Alice": 95, "Bob": 87}. Print Alice\'s score.',
      starterCode: '# Create dict and print\n',
      expectedOutput: "95",
      hint: 'score = {"Alice": 95, "Bob": 87} then print(score["Alice"])',
      explanation: 'Access with the key in brackets! 用键名访问字典！',
    },
    {
      question: "What happens if you access a key that doesn't exist with dict[key]?",
      options: ["Returns None", "Returns 0", "KeyError", "Returns empty string"],
      correctIndex: 2,
      explanation: "Missing keys cause KeyError! Use .get(key, default) to be safe. 访问不存在的键会报错！",
    },
    {
      question: "What does .get(key, default) do?",
      options: [
        "Always returns the default",
        "Returns value if key exists, otherwise returns default",
        "Creates the key",
        "Deletes the key"
      ],
      correctIndex: 1,
      explanation: ".get() is the safe way to access — no error if key is missing! get()安全访问！",
    },
    {
      type: "coding",
      question: "Loop through a dictionary",
      prompt: '🎯 Given d = {"a": 1, "b": 2}. Print each key.',
      starterCode: 'd = {"a": 1, "b": 2}\n# Print each key\n',
      expectedOutput: "a\nb",
      hint: "for key in d: print(key)",
      explanation: "Looping through a dict gives you the keys! 遍历字典得到键！",
    },
    {
      question: "What's the difference between a list and a dictionary?",
      options: [
        "Lists use index numbers, dicts use named keys",
        "They're the same",
        "Lists are faster",
        "Dicts can only store numbers"
      ],
      correctIndex: 0,
      explanation: "Lists: ordered by position [0,1,2...]. Dicts: accessed by name/key! 列表用索引，字典用键！",
    },
  ],

  "3-4": [
    {
      question: "What is debugging?",
      options: ["Adding bugs to code", "Finding and fixing errors in code", "Writing new code", "Deleting code"],
      correctIndex: 1,
      explanation: "Debugging = finding bugs (errors) and fixing them! 调试就是找错误并修复！",
    },
    {
      question: "What is a SyntaxError?",
      options: ["A logic mistake", "A grammar mistake in your code", "A missing file", "A network error"],
      correctIndex: 1,
      explanation: "SyntaxError means Python can't understand your code — like a grammar mistake! 语法错误！",
    },
    {
      question: "What is a NameError?",
      options: ["Wrong variable name format", "Using a variable that doesn't exist", "File not found", "Function error"],
      correctIndex: 1,
      explanation: "NameError means you used a name Python doesn't recognize — probably a typo! 变量未定义！",
    },
    {
      question: "What is a TypeError?",
      options: ["Typing too fast", "Wrong type of data in an operation", "Type not found", "Keyboard error"],
      correctIndex: 1,
      explanation: 'TypeError: wrong data type. Like "hello" + 5 — can\'t add string and number! 类型错误！',
    },
    {
      question: "What is a logic error?",
      options: ["Python shows an error message", "Code runs but gives wrong results", "The code won't start", "A missing module"],
      correctIndex: 1,
      explanation: "Logic errors are the sneakiest — no error message, just wrong output! 逻辑错误最难找！",
    },
    {
      type: "coding",
      question: "Fix the bug",
      prompt: '🎯 This code has a bug. Fix it to print "hello world": print("hello world")',
      starterCode: 'print("hello world")\n',
      expectedOutput: "hello world",
      hint: "The code shown is actually correct! Just run it.",
      explanation: "Reading carefully is the first debugging skill! 仔细阅读是调试第一步！",
    },
    {
      question: "What is print debugging?",
      options: [
        "Printing error messages",
        "Adding print() statements to see variable values at different points",
        "Printing the entire code",
        "Debugging the print function"
      ],
      correctIndex: 1,
      explanation: "Print debugging: add print() to see what variables contain at each step! 打印调试查看变量值！",
    },
    {
      question: "What does a traceback show you?",
      options: ["The entire program", "Where the error occurred and the chain of function calls", "How to fix the bug", "The program's speed"],
      correctIndex: 1,
      explanation: "Tracebacks show the error location and call stack — read from bottom up! 追溯显示错误位置！",
    },
    {
      question: "What is an IndexError?",
      options: [
        "Wrong variable name",
        "Accessing a list index that doesn't exist",
        "A math error",
        "A file error"
      ],
      correctIndex: 1,
      explanation: "IndexError: list index out of range — you asked for an item that doesn't exist! 索引越界！",
    },
    {
      type: "coding",
      question: "Debug arithmetic",
      prompt: "🎯 Print the result of 10 + 5 * 2 (remember order of operations!)",
      starterCode: "# What's the answer?\n",
      expectedOutput: "20",
      hint: "Python follows math order: multiplication first, then addition",
      explanation: "5*2=10, then 10+10=20. Order of operations matters! 先乘后加！",
    },
  ],

  "3-5": [
    {
      question: "What is error handling?",
      options: ["Preventing all errors", "Gracefully dealing with errors when they happen", "Ignoring errors", "Showing errors to users"],
      correctIndex: 1,
      explanation: "Error handling lets your program deal with problems gracefully instead of crashing! 错误处理让程序优雅应对问题！",
    },
    {
      question: "What does try/except do?",
      options: ["Tries to run code, catches errors if they occur", "Tries twice", "Only runs in debug mode", "Prevents all errors"],
      correctIndex: 0,
      explanation: "try: runs the code. except: catches errors. Your program doesn't crash! try尝试，except捕获错误！",
    },
    {
      question: "What goes in the try block?",
      options: ["Error handling code", "Code that might cause an error", "Only print statements", "Nothing"],
      correctIndex: 1,
      explanation: "Put the 'risky' code in try — the code that might fail! try里放可能出错的代码！",
    },
    {
      question: "What goes in the except block?",
      options: ["The main code", "Code to handle the error", "A loop", "More errors"],
      correctIndex: 1,
      explanation: "except contains the backup plan — what to do when things go wrong! except里放处理错误的代码！",
    },
    {
      question: "Can you have multiple except blocks?",
      options: ["No, only one", "Yes, for different error types", "Only two", "Only with a loop"],
      correctIndex: 1,
      explanation: "You can catch different error types separately! except ValueError, except TypeError, etc. 可以分别捕获不同错误！",
    },
    {
      question: "What does finally do?",
      options: ["Runs only if no error", "Runs only if error", "ALWAYS runs, error or not", "Ends the program"],
      correctIndex: 2,
      explanation: "finally always runs — perfect for cleanup like closing files! finally总是执行！",
    },
    {
      type: "coding",
      question: "Safe division",
      prompt: "🎯 Print the result of 10 divided by 2",
      starterCode: "# Safe division\nresult = 10 / 2\n",
      expectedOutput: "5.0",
      hint: "print(result) — note that / always returns a float!",
      explanation: "10 / 2 = 5.0 (always a float with /). Use // for integer division! /总是返回浮点数！",
    },
    {
      question: "What error does dividing by zero cause?",
      options: ["ValueError", "TypeError", "ZeroDivisionError", "MathError"],
      correctIndex: 2,
      explanation: "You can't divide by zero! Python raises ZeroDivisionError. 除以零会报错！",
    },
    {
      question: "What is a ValueError?",
      options: [
        "Wrong value type for an operation",
        "Variable not found",
        "File not found",
        "Index out of range"
      ],
      correctIndex: 0,
      explanation: 'ValueError: right type but wrong value. Like int("hello") — can\'t convert! 值不对！',
    },
    {
      type: "coding",
      question: "Convert safely",
      prompt: '🎯 Convert "42" to an integer and print it',
      starterCode: 'text = "42"\n',
      expectedOutput: "42",
      hint: "Use int(text) and print it",
      explanation: 'int("42") = 42. String to integer conversion! 字符串转整数！',
    },
  ],

  "3-6": [
    {
      question: "What is a module in Python?",
      options: ["A type of variable", "A file containing reusable code", "A loop type", "A data structure"],
      correctIndex: 1,
      explanation: "Modules are Python files with functions/classes you can import and reuse! 模块是可重用的代码文件！",
    },
    {
      question: "How do you use code from a module?",
      options: ["include module", "import module", "use module", "require module"],
      correctIndex: 1,
      explanation: "import brings a module's code into your program! import导入模块！",
    },
    {
      question: "What does 'from math import sqrt' do?",
      options: [
        "Imports the entire math module",
        "Imports only the sqrt function from math",
        "Creates a new function called sqrt",
        "Deletes the math module"
      ],
      correctIndex: 1,
      explanation: "from...import lets you import specific items. Then use sqrt() directly! 只导入特定功能！",
    },
    {
      question: "What does 'import math as m' do?",
      options: ["Renames the module for convenience", "Creates a copy", "Deletes math", "Nothing"],
      correctIndex: 0,
      explanation: "'as' gives the module a shorter nickname. m.sqrt(16) instead of math.sqrt(16)! as给模块起别名！",
    },
    {
      question: "Which is a built-in Python module?",
      options: ["numpy", "random", "flask", "tensorflow"],
      correctIndex: 1,
      explanation: "random comes with Python! numpy, flask, tensorflow need to be installed. random是内置模块！",
    },
    {
      question: "What does math.pi give you?",
      options: ["3", "3.14", "3.141592653589793", "A function"],
      correctIndex: 2,
      explanation: "math.pi is a constant with the value of π to many decimal places! math.pi是圆周率！",
    },
    {
      type: "coding",
      question: "Use math module",
      prompt: "🎯 Print the square root of 16 (should be 4.0)",
      starterCode: "import math\n",
      expectedOutput: "4.0",
      hint: "print(math.sqrt(16))",
      explanation: "math.sqrt(16) = 4.0. The math module has many useful functions! math.sqrt求平方根！",
    },
    {
      question: "What is pip?",
      options: ["A Python function", "Python's package installer", "A module name", "A variable type"],
      correctIndex: 1,
      explanation: "pip install package_name downloads and installs external packages! pip安装外部包！",
    },
    {
      question: "What does __name__ == '__main__' check?",
      options: [
        "If the file is being run directly (not imported)",
        "If the function name is main",
        "If the program has errors",
        "If Python is installed"
      ],
      correctIndex: 0,
      explanation: "This check lets code run only when the file is executed directly, not when imported! 检查是否直接运行！",
    },
    {
      type: "coding",
      question: "Simple calculation",
      prompt: "🎯 Print the value of 2 raised to the power of 10",
      starterCode: "# Calculate 2^10\n",
      expectedOutput: "1024",
      hint: "Use 2 ** 10 or pow(2, 10)",
      explanation: "2 ** 10 = 1024. That's 2 multiplied by itself 10 times! 2的10次方！",
    },
  ],

  "3-7": [
    {
      question: "What is a good way to organize student data?",
      options: ["Many separate variables", "A dictionary for each student", "Just print statements", "Comments only"],
      correctIndex: 1,
      explanation: "Dictionaries are perfect for structured data — each student has name, grades, etc! 字典适合组织结构化数据！",
    },
    {
      question: "How do you calculate an average?",
      options: ["Sum / count", "Sum * count", "Max - min", "Sum + count"],
      correctIndex: 0,
      explanation: "Average = sum of all values ÷ number of values! 平均值=总和÷个数！",
    },
    {
      question: "What does sum() do on a list?",
      options: ["Counts items", "Adds all numbers together", "Finds the maximum", "Sorts the list"],
      correctIndex: 1,
      explanation: "sum([90, 85, 92]) = 267. Adds all numbers in the list! sum()求总和！",
    },
    {
      question: "What does max() do?",
      options: ["Returns the smallest value", "Returns the largest value", "Returns the average", "Returns the count"],
      correctIndex: 1,
      explanation: "max([90, 85, 92]) = 92. Finds the biggest number! max()找最大值！",
    },
    {
      question: "What does min() do?",
      options: ["Returns the largest value", "Returns the smallest value", "Returns the middle value", "Removes the smallest"],
      correctIndex: 1,
      explanation: "min([90, 85, 92]) = 85. Finds the smallest number! min()找最小值！",
    },
    {
      type: "coding",
      question: "Calculate average",
      prompt: "🎯 Calculate the average of [80, 90, 100] and print it",
      starterCode: "grades = [80, 90, 100]\n",
      expectedOutput: "90.0",
      hint: "print(sum(grades) / len(grades))",
      explanation: "sum=270, len=3, average=90.0! 总和除以个数！",
    },
    {
      question: "What does sorted() do?",
      options: ["Modifies the original list", "Returns a NEW sorted list", "Counts items", "Reverses the list"],
      correctIndex: 1,
      explanation: "sorted() returns a new sorted list without changing the original! sorted()返回新的排序列表！",
    },
    {
      question: "What does .sort() do?",
      options: ["Returns a new list", "Sorts the list IN PLACE (modifies it)", "Counts items", "Checks if sorted"],
      correctIndex: 1,
      explanation: ".sort() modifies the list directly (in place). No new list! sort()原地排序！",
    },
    {
      type: "coding",
      question: "Find the max",
      prompt: "🎯 Find and print the highest score in [75, 92, 88, 95, 80]",
      starterCode: "scores = [75, 92, 88, 95, 80]\n",
      expectedOutput: "95",
      hint: "Use max(scores)",
      explanation: "max() scans the list and returns the biggest value! max()找最大值！",
    },
    {
      question: "A grade manager project combines which skills?",
      options: [
        "Only print statements",
        "Lists, dictionaries, functions, loops, and conditionals",
        "Only variables",
        "Only imports"
      ],
      correctIndex: 1,
      explanation: "Real projects combine everything you've learned! 真正的项目综合运用所有知识！",
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // 🧪 AREA 4: SCIENCE LAB
  // ═══════════════════════════════════════════════════════════════

  "4-1": [
    {
      question: "What does the math module provide?",
      options: ["Game tools", "Mathematical functions and constants", "File I/O tools", "Network tools"],
      correctIndex: 1,
      explanation: "math gives you sqrt, pi, sin, cos, ceil, floor, and more! math模块提供数学工具！",
    },
    {
      question: "What is math.floor(3.7)?",
      options: ["4", "3", "3.7", "3.0"],
      correctIndex: 1,
      explanation: "floor() rounds DOWN to the nearest integer. 3.7 → 3. floor()向下取整！",
    },
    {
      question: "What is math.ceil(3.2)?",
      options: ["3", "4", "3.2", "3.0"],
      correctIndex: 1,
      explanation: "ceil() rounds UP to the nearest integer. 3.2 → 4. ceil()向上取整！",
    },
    {
      question: "What is abs(-5)?",
      options: ["-5", "5", "0", "Error"],
      correctIndex: 1,
      explanation: "abs() returns the absolute value — distance from zero, always positive! abs()绝对值！",
    },
    {
      type: "coding",
      question: "Circle area",
      prompt: "🎯 Calculate the area of a circle with radius 5 (use 3.14159 for pi). Print rounded to 2 decimal places.",
      starterCode: "import math\nradius = 5\n",
      expectedOutput: "78.54",
      hint: "area = math.pi * radius ** 2, then print(round(area, 2))",
      explanation: "π × r² = 3.14159... × 25 ≈ 78.54! 圆面积公式！",
    },
    {
      question: "What does pow(2, 3) return?",
      options: ["5", "6", "8", "23"],
      correctIndex: 2,
      explanation: "pow(2, 3) = 2³ = 8. Same as 2 ** 3! pow()幂运算！",
    },
    {
      question: "What is math.sqrt(144)?",
      options: ["12.0", "72", "14.4", "144"],
      correctIndex: 0,
      explanation: "√144 = 12.0. The square root! sqrt()求平方根！",
    },
    {
      type: "coding",
      question: "Temperature conversion",
      prompt: "🎯 Convert 100 Celsius to Fahrenheit. Print the result. (F = C × 9/5 + 32)",
      starterCode: "celsius = 100\n",
      expectedOutput: "212.0",
      hint: "fahrenheit = celsius * 9/5 + 32",
      explanation: "100°C × 9/5 + 32 = 212°F. Water's boiling point! 摄氏转华氏！",
    },
    {
      question: "What does the // operator do?",
      options: ["Comment", "Division", "Floor division (integer result)", "Exponent"],
      correctIndex: 2,
      explanation: "// divides and rounds down. 7 // 2 = 3 (not 3.5). 整除！",
    },
    {
      question: "What number system does a computer use internally?",
      options: ["Decimal (base 10)", "Binary (base 2)", "Hexadecimal (base 16)", "Octal (base 8)"],
      correctIndex: 1,
      explanation: "Computers use binary (0s and 1s) for everything! 计算机用二进制！",
    },
  ],

  "4-2": [
    {
      question: "What does random.randint(a, b) return?",
      options: ["A float between a and b", "An integer from a to b inclusive", "Always a or b", "A random string"],
      correctIndex: 1,
      explanation: "randint(1, 6) returns 1, 2, 3, 4, 5, or 6 — like rolling a die! randint()随机整数！",
    },
    {
      question: "What does random.random() return?",
      options: ["An integer", "A float between 0 and 1", "A float between -1 and 1", "A random string"],
      correctIndex: 1,
      explanation: "random.random() gives a float from 0.0 to just under 1.0! random()返回0到1的小数！",
    },
    {
      question: "What does random.choice(list) do?",
      options: ["Returns the first item", "Returns a random item from the list", "Sorts the list randomly", "Removes a random item"],
      correctIndex: 1,
      explanation: "choice() picks one random item from the list! choice()随机选一个！",
    },
    {
      question: "What does random.shuffle(list) do?",
      options: ["Sorts the list", "Randomizes the order of items in place", "Reverses the list", "Removes items randomly"],
      correctIndex: 1,
      explanation: "shuffle() mixes up the list items randomly, in place! shuffle()打乱顺序！",
    },
    {
      question: "What is a seed in random?",
      options: ["A plant reference", "A starting value that makes random repeatable", "The first random number", "A type of error"],
      correctIndex: 1,
      explanation: "random.seed(42) makes the 'random' numbers reproducible! seed让随机可重复！",
    },
    {
      type: "coding",
      question: "Simulate a die",
      prompt: "🎯 Print a number that simulates rolling a 6-sided die (just print 4 for this exercise)",
      starterCode: "# Simulating a die roll\nresult = 4\n",
      expectedOutput: "4",
      hint: "In real code you'd use random.randint(1, 6). Just print(result) here.",
      explanation: "random.randint(1, 6) simulates a die! Here we used a fixed value. 模拟掷骰子！",
    },
    {
      question: "How do you generate a random float between 5 and 10?",
      options: [
        "random.randint(5, 10)",
        "random.uniform(5, 10)",
        "random.float(5, 10)",
        "random.range(5, 10)"
      ],
      correctIndex: 1,
      explanation: "uniform(a, b) returns a random float between a and b! uniform()随机浮点数！",
    },
    {
      question: "What does random.sample(list, k) return?",
      options: ["k random items without replacement", "k random items with replacement", "The first k items", "A shuffled list"],
      correctIndex: 0,
      explanation: "sample() picks k unique items — no repeats! sample()不重复采样！",
    },
    {
      type: "coding",
      question: "List length",
      prompt: '🎯 Print the number of items in ["a", "b", "c", "d", "e"]',
      starterCode: 'items = ["a", "b", "c", "d", "e"]\n',
      expectedOutput: "5",
      hint: "Use len(items)",
      explanation: "len() counts the items: 5 elements! len()计数！",
    },
    {
      question: "Probability of getting heads in a fair coin flip?",
      options: ["25%", "50%", "75%", "100%"],
      correctIndex: 1,
      explanation: "50% — two equally likely outcomes! 公平硬币50%正面！",
    },
  ],

  "4-3": [
    {
      question: "What is a physics simulation?",
      options: [
        "A physics textbook",
        "Using code to model physical phenomena",
        "A physics video game only",
        "A calculator"
      ],
      correctIndex: 1,
      explanation: "Simulations use code to model real-world physics — gravity, motion, collisions! 用代码模拟物理现象！",
    },
    {
      question: "What is the formula for distance with constant speed?",
      options: ["d = s + t", "d = s × t", "d = s / t", "d = s - t"],
      correctIndex: 1,
      explanation: "Distance = speed × time. Simple but fundamental! 距离=速度×时间！",
    },
    {
      question: "What does gravity do to a falling object?",
      options: ["Keeps it at constant speed", "Accelerates it downward", "Slows it down", "Moves it sideways"],
      correctIndex: 1,
      explanation: "Gravity accelerates objects at ~9.8 m/s² on Earth! 重力加速度约9.8！",
    },
    {
      question: "In a bouncing ball sim, what happens at the ground?",
      options: ["Ball stops", "Velocity reverses (with energy loss)", "Ball goes underground", "Simulation ends"],
      correctIndex: 1,
      explanation: "The ball bounces — velocity reverses direction, usually with some energy lost! 球反弹，速度反向！",
    },
    {
      type: "coding",
      question: "Calculate distance",
      prompt: "🎯 A car goes 60 km/h for 2.5 hours. Print the distance.",
      starterCode: "speed = 60\ntime = 2.5\n",
      expectedOutput: "150.0",
      hint: "distance = speed * time",
      explanation: "60 × 2.5 = 150.0 km! 距离=速度×时间！",
    },
    {
      question: "What is acceleration?",
      options: ["Speed", "Change in speed over time", "Distance", "A type of force"],
      correctIndex: 1,
      explanation: "Acceleration = how quickly speed changes. Measured in m/s². 加速度=速度变化率！",
    },
    {
      question: "How do you simulate time steps in code?",
      options: ["Use time.sleep() only", "Use a loop where each iteration is a small time step", "You can't", "Use import physics"],
      correctIndex: 1,
      explanation: "Each loop iteration advances the simulation by a small dt (delta time)! 每次循环是一个时间步！",
    },
    {
      type: "coding",
      question: "Velocity after falling",
      prompt: "🎯 An object falls for 3 seconds with gravity = 10 m/s². Print final velocity. (v = g × t)",
      starterCode: "g = 10\nt = 3\n",
      expectedOutput: "30",
      hint: "velocity = g * t",
      explanation: "v = 10 × 3 = 30 m/s. Velocity increases linearly! 速度=加速度×时间！",
    },
    {
      question: "What is a simulation timestep (dt)?",
      options: [
        "The total simulation time",
        "A small time increment between calculations",
        "A Python variable type",
        "A measurement of distance"
      ],
      correctIndex: 1,
      explanation: "dt is the tiny time slice between updates. Smaller dt = more accurate! dt是时间步长！",
    },
    {
      question: "Energy conservation in a bouncing ball means:",
      options: [
        "The ball bounces higher each time",
        "The ball bounces to the same height forever",
        "Each bounce loses some energy, getting lower",
        "The ball gains speed"
      ],
      correctIndex: 2,
      explanation: "Real bouncing balls lose energy to heat/sound — each bounce is lower! 每次弹跳损失能量！",
    },
  ],

  "4-4": [
    {
      question: "What is data analysis?",
      options: ["Deleting data", "Examining data to find patterns and insights", "Creating data randomly", "Encrypting data"],
      correctIndex: 1,
      explanation: "Data analysis = exploring data to find patterns, trends, and answers! 数据分析找规律！",
    },
    {
      question: "What is the mean (average)?",
      options: ["The middle value", "Sum of all values ÷ count", "The most common value", "The range"],
      correctIndex: 1,
      explanation: "Mean = sum ÷ count. [2,4,6] → (2+4+6)/3 = 4! 平均值=总和÷个数！",
    },
    {
      question: "What is the median?",
      options: ["The average", "The middle value when sorted", "The most common value", "The largest value"],
      correctIndex: 1,
      explanation: "Median = middle value when sorted. [1,3,7] → median is 3! 中位数是排序后中间的值！",
    },
    {
      question: "What is the mode?",
      options: ["The average", "The middle value", "The most frequently occurring value", "The range"],
      correctIndex: 2,
      explanation: "Mode = most common value. [1,2,2,3] → mode is 2! 众数是出现最多的值！",
    },
    {
      type: "coding",
      question: "Find the mean",
      prompt: "🎯 Calculate the mean of [10, 20, 30, 40, 50] and print it",
      starterCode: "data = [10, 20, 30, 40, 50]\n",
      expectedOutput: "30.0",
      hint: "print(sum(data) / len(data))",
      explanation: "Sum=150, count=5, mean=30.0! 平均值计算！",
    },
    {
      question: "What is the range of a dataset?",
      options: ["The average", "Max value - Min value", "The number of items", "The middle value"],
      correctIndex: 1,
      explanation: "Range = max - min. Shows the spread of data! 范围=最大-最小！",
    },
    {
      question: "What is a CSV file?",
      options: [
        "A Python script",
        "Comma Separated Values — a text file with data",
        "A compressed file",
        "A database"
      ],
      correctIndex: 1,
      explanation: "CSV = Comma Separated Values. Simple text format for tabular data! CSV是逗号分隔值文件！",
    },
    {
      type: "coding",
      question: "Find the range",
      prompt: "🎯 Find the range of [5, 12, 3, 8, 20] and print it",
      starterCode: "data = [5, 12, 3, 8, 20]\n",
      expectedOutput: "17",
      hint: "print(max(data) - min(data))",
      explanation: "max=20, min=3, range=17! 最大减最小！",
    },
    {
      question: "Why is data visualization important?",
      options: ["It's not", "Humans understand pictures better than raw numbers", "It makes data bigger", "It's required by Python"],
      correctIndex: 1,
      explanation: "Visualizations reveal patterns that are hard to see in raw numbers! 可视化让数据更直观！",
    },
    {
      question: "What is an outlier?",
      options: [
        "A normal data point",
        "A data point far from the others",
        "The mean of the data",
        "A missing value"
      ],
      correctIndex: 1,
      explanation: "Outliers are unusual data points that are far from the rest! 离群值是远离其他数据的点！",
    },
  ],

  "4-5": [
    {
      question: "What is an algorithm?",
      options: ["A Python module", "A step-by-step procedure to solve a problem", "A type of error", "A variable"],
      correctIndex: 1,
      explanation: "An algorithm is a clear, step-by-step plan — like a recipe! 算法是解决问题的步骤！",
    },
    {
      question: "What is linear search?",
      options: ["Searching in a tree", "Checking every item one by one", "Jumping to the middle", "Random searching"],
      correctIndex: 1,
      explanation: "Linear search checks each element from start to end. Simple but slow for big lists! 线性搜索逐个检查！",
    },
    {
      question: "What is binary search?",
      options: [
        "Searching two lists at once",
        "Cutting the search space in half each step",
        "Searching backwards",
        "Random searching"
      ],
      correctIndex: 1,
      explanation: "Binary search halves the list each time. Much faster but list must be sorted! 二分搜索每次减半！",
    },
    {
      question: "Binary search requires the list to be:",
      options: ["Empty", "Sorted", "Reversed", "Very long"],
      correctIndex: 1,
      explanation: "Binary search only works on SORTED lists — that's the tradeoff! 二分搜索要求有序！",
    },
    {
      question: "What is bubble sort?",
      options: [
        "Sorting by random bubbles",
        "Comparing adjacent items and swapping if out of order",
        "Finding the minimum each time",
        "Splitting and merging"
      ],
      correctIndex: 1,
      explanation: "Bubble sort compares neighbors and swaps — big values 'bubble' to the top! 冒泡排序比较相邻元素！",
    },
    {
      type: "coding",
      question: "Linear search",
      prompt: "🎯 Check if 7 is in the list [3, 5, 7, 9]. Print True or False.",
      starterCode: "numbers = [3, 5, 7, 9]\n",
      expectedOutput: "True",
      hint: "print(7 in numbers)",
      explanation: "'in' does a linear search! 7 is in the list → True! in做线性搜索！",
    },
    {
      question: "How many checks does linear search need for a list of 100 items (worst case)?",
      options: ["7", "10", "50", "100"],
      correctIndex: 3,
      explanation: "Worst case: check ALL 100 items. That's O(n) — linear time! 最坏检查全部100个！",
    },
    {
      question: "How many checks does binary search need for 100 items (worst case)?",
      options: ["100", "50", "7", "10"],
      correctIndex: 2,
      explanation: "log₂(100) ≈ 7 checks! Binary search is O(log n) — much faster! 二分搜索只需约7次！",
    },
    {
      type: "coding",
      question: "Find minimum",
      prompt: "🎯 Find and print the minimum value in [42, 17, 93, 8, 55]",
      starterCode: "numbers = [42, 17, 93, 8, 55]\n",
      expectedOutput: "8",
      hint: "Use min(numbers)",
      explanation: "min() finds the smallest value by scanning the list! min()找最小值！",
    },
    {
      question: "What makes an algorithm 'efficient'?",
      options: [
        "It uses many lines of code",
        "It uses fewer steps/resources for the same result",
        "It's written in Python only",
        "It's always fast"
      ],
      correctIndex: 1,
      explanation: "Efficient = getting the same result with fewer steps/memory! 效率=用更少步骤完成！",
    },
  ],

  "4-6": [
    {
      question: "What is web scraping?",
      options: ["Building websites", "Extracting data from websites", "Hacking websites", "Designing web pages"],
      correctIndex: 1,
      explanation: "Web scraping = programmatically extracting data from web pages! 网页爬虫提取数据！",
    },
    {
      question: "What format do APIs usually return data in?",
      options: ["HTML", "CSV", "JSON", "XML only"],
      correctIndex: 2,
      explanation: "JSON (JavaScript Object Notation) is the most common API data format! API通常返回JSON！",
    },
    {
      question: "What does JSON look like?",
      options: ["Like Python code", "Like key-value pairs with { }", "Like a spreadsheet", "Like binary data"],
      correctIndex: 1,
      explanation: 'JSON uses {key: value} pairs — very similar to Python dictionaries! JSON像Python字典！',
    },
    {
      question: "What is an API?",
      options: [
        "A type of Python file",
        "Application Programming Interface — a way for programs to talk to each other",
        "A web browser",
        "A database"
      ],
      correctIndex: 1,
      explanation: "APIs let different programs communicate and share data! API让程序互相通信！",
    },
    {
      question: "What Python module is commonly used for HTTP requests?",
      options: ["http", "requests", "urllib only", "web"],
      correctIndex: 1,
      explanation: "The 'requests' library is the most popular for HTTP in Python! requests库最常用！",
    },
    {
      type: "coding",
      question: "Parse JSON-like data",
      prompt: '🎯 Given data as a dictionary, print the value of "name"',
      starterCode: 'data = {"name": "Python", "year": 1991}\n',
      expectedOutput: "Python",
      hint: 'print(data["name"])',
      explanation: 'Access dict values with the key! 用键访问字典值！',
    },
    {
      question: "What is rate limiting in APIs?",
      options: [
        "How fast the API responds",
        "Limiting how many requests you can make per time period",
        "The API's download speed",
        "A type of error"
      ],
      correctIndex: 1,
      explanation: "Rate limits prevent overloading the server — be respectful! 速率限制防止过载！",
    },
    {
      question: "What HTTP method gets data?",
      options: ["POST", "GET", "PUT", "DELETE"],
      correctIndex: 1,
      explanation: "GET retrieves data, POST sends data. Most API reads use GET! GET获取数据！",
    },
    {
      type: "coding",
      question: "Access nested data",
      prompt: '🎯 Given d = {"user": {"name": "Alice"}}, print "Alice"',
      starterCode: 'd = {"user": {"name": "Alice"}}\n',
      expectedOutput: "Alice",
      hint: 'print(d["user"]["name"])',
      explanation: 'Chain the keys for nested access! 链式访问嵌套数据！',
    },
    {
      question: "What status code means 'OK' in HTTP?",
      options: ["404", "500", "200", "301"],
      correctIndex: 2,
      explanation: "200 = OK, 404 = Not Found, 500 = Server Error. 200表示成功！",
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // 🤖 AREA 5: AI FRONTIER
  // ═══════════════════════════════════════════════════════════════

  "5-1": [
    {
      question: "What is Artificial Intelligence?",
      options: [
        "Robots that think like humans",
        "Computer programs that can learn and make decisions",
        "The internet",
        "A programming language"
      ],
      correctIndex: 1,
      explanation: "AI = programs that learn from data and make decisions! AI是能学习和决策的程序！",
    },
    {
      question: "What is machine learning?",
      options: [
        "Machines learning to walk",
        "Programs that improve from experience/data without explicit programming",
        "Memorizing everything",
        "A type of hardware"
      ],
      correctIndex: 1,
      explanation: "ML = learning from data patterns rather than being explicitly programmed! 机器学习从数据中学习！",
    },
    {
      question: "What is training data?",
      options: [
        "Data used to teach a model",
        "Data from a gym",
        "Encrypted data",
        "Random numbers"
      ],
      correctIndex: 0,
      explanation: "Training data is what the AI learns from — like a textbook! 训练数据是AI学习的材料！",
    },
    {
      question: "What is a chatbot?",
      options: [
        "A robot that chats in person",
        "A program that can have conversations",
        "A social media app",
        "A chat room"
      ],
      correctIndex: 1,
      explanation: "Chatbots are AI programs that understand and generate human language! 聊天机器人理解和生成语言！",
    },
    {
      question: "What is a Large Language Model (LLM)?",
      options: [
        "A very big dictionary",
        "An AI trained on massive text data that can understand and generate language",
        "A language translator only",
        "A spell checker"
      ],
      correctIndex: 1,
      explanation: "LLMs like GPT are trained on vast text to understand and produce language! LLM是大型语言模型！",
    },
    {
      type: "coding",
      question: "Simple AI logic",
      prompt: '🎯 Write an if statement: if the word "hello" is found in "hello world", print "Greeting detected!"',
      starterCode: 'text = "hello world"\n',
      expectedOutput: "Greeting detected!",
      hint: 'if "hello" in text: print("Greeting detected!")',
      explanation: '"in" checks if a substring exists — basic pattern matching! in检查子串！',
    },
    {
      question: "What does 'bias' mean in AI?",
      options: [
        "The AI is too smart",
        "The AI's predictions are unfairly skewed due to training data",
        "The AI is broken",
        "A Python error"
      ],
      correctIndex: 1,
      explanation: "AI bias comes from biased training data — garbage in, garbage out! AI偏见来自训练数据！",
    },
    {
      question: "What is a neural network inspired by?",
      options: ["The internet", "The human brain", "A spider web", "A computer chip"],
      correctIndex: 1,
      explanation: "Neural networks are inspired by how brain neurons connect and fire! 神经网络模仿大脑！",
    },
    {
      type: "coding",
      question: "Keyword detection",
      prompt: '🎯 Check if "python" is in the sentence "I love python programming". Print the result (True/False).',
      starterCode: 'sentence = "I love python programming"\n',
      expectedOutput: "True",
      hint: 'print("python" in sentence)',
      explanation: '"in" returns True if the substring is found! in返回布尔值！',
    },
    {
      question: "What is supervised learning?",
      options: [
        "Learning with a teacher who provides correct answers",
        "Learning without any data",
        "Learning from random guesses only",
        "Learning from videos"
      ],
      correctIndex: 0,
      explanation: "Supervised learning uses labeled data — each example has the correct answer! 有监督学习用标注数据！",
    },
  ],

  "5-2": [
    {
      question: "How can AI help you write code?",
      options: [
        "It writes perfect code every time",
        "It can suggest code, explain errors, and help debug",
        "It replaces programmers entirely",
        "It can't help with code"
      ],
      correctIndex: 1,
      explanation: "AI is a coding assistant — it suggests, explains, and helps debug. But you're the pilot! AI是编程助手！",
    },
    {
      question: "What is a prompt in AI?",
      options: [
        "An error message",
        "The input/instructions you give to an AI",
        "The AI's response",
        "A Python command"
      ],
      correctIndex: 1,
      explanation: "A prompt is what you ask/tell the AI. Better prompts = better responses! 提示词是给AI的指令！",
    },
    {
      question: "Should you blindly trust AI-generated code?",
      options: ["Yes, AI is always right", "No, always review and test it yourself", "Only for simple code", "Only from paid AI"],
      correctIndex: 1,
      explanation: "ALWAYS review AI code! AI makes mistakes, generates bugs, and can misunderstand. 永远要审查AI代码！",
    },
    {
      question: "What makes a good prompt for AI coding help?",
      options: [
        "Being vague: 'write some code'",
        "Being specific: describe the goal, language, constraints, and expected behavior",
        "Using only one word",
        "Copying the entire codebase"
      ],
      correctIndex: 1,
      explanation: "Specific, clear prompts get better results. Tell AI what, why, and how! 具体清晰的提示更好！",
    },
    {
      type: "coding",
      question: "Fix AI suggestion",
      prompt: '🎯 The AI suggested this to print numbers 1-3. It works! Just run it.',
      starterCode: 'for i in range(1, 4):\n    print(i)\n',
      expectedOutput: "1\n2\n3",
      hint: "This code is correct — just run it!",
      explanation: "Sometimes AI code is right — but you should always verify! 有时AI的代码是对的！",
    },
    {
      question: "What is 'hallucination' in AI?",
      options: [
        "The AI seeing images",
        "The AI confidently generating incorrect or made-up information",
        "A hardware problem",
        "A type of model"
      ],
      correctIndex: 1,
      explanation: "AI hallucination = making up facts confidently. That's why you must verify! AI会编造信息！",
    },
    {
      question: "What is pair programming with AI?",
      options: [
        "Two AIs coding together",
        "You write code while AI assists, suggests, and reviews",
        "AI writes everything",
        "You watch AI code"
      ],
      correctIndex: 1,
      explanation: "You're the driver, AI is the navigator. Work together! 你是驾驶员，AI是导航！",
    },
    {
      question: "When should you NOT use AI for coding?",
      options: [
        "When learning fundamentals — try yourself first!",
        "Never, always use AI",
        "When writing print statements",
        "When using variables"
      ],
      correctIndex: 0,
      explanation: "When learning, try first! Use AI to check your work, not replace your thinking. 学习时先自己试！",
    },
    {
      type: "coding",
      question: "Verify AI output",
      prompt: "🎯 AI says 3 + 4 * 2 = 14. Is that right? Print the correct answer.",
      starterCode: "# Check: is 3 + 4 * 2 really 14?\n",
      expectedOutput: "11",
      hint: "Remember order of operations: multiplication first! print(3 + 4 * 2)",
      explanation: "4*2=8, then 3+8=11. AI was WRONG! Always verify. AI说错了！要验证！",
    },
    {
      question: "What's the best approach to using AI tools?",
      options: [
        "Let AI do everything",
        "Never use AI",
        "Use AI as a tool while maintaining your own understanding",
        "Only use AI for testing"
      ],
      correctIndex: 2,
      explanation: "AI is a powerful tool, but understanding is YOUR responsibility! AI是工具，理解是你的！",
    },
  ],

  "5-3": [
    {
      question: "Can AI make mistakes?",
      options: ["Never, AI is perfect", "Yes, AI frequently makes errors", "Only in math", "Only in language"],
      correctIndex: 1,
      explanation: "AI makes mistakes in code, facts, reasoning, and more. Always verify! AI经常犯错！",
    },
    {
      question: "What is AI bias?",
      options: [
        "AI preferring Python over JavaScript",
        "Systematic unfairness in AI outputs due to training data or design",
        "AI being too smart",
        "A programming error"
      ],
      correctIndex: 1,
      explanation: "Bias in AI comes from biased data, design choices, or societal patterns. AI偏见来自数据和设计！",
    },
    {
      question: "What is critical thinking with AI?",
      options: [
        "Criticizing AI",
        "Questioning and verifying AI outputs instead of blindly trusting",
        "Using AI for criticism",
        "Making AI think critically"
      ],
      correctIndex: 1,
      explanation: "Critical thinking = question, verify, and think about AI's answers! 批判性思维=质疑和验证！",
    },
    {
      question: "AI trained mostly on English text might:",
      options: [
        "Work perfectly in all languages",
        "Perform worse in other languages",
        "Only work in English",
        "Translate perfectly"
      ],
      correctIndex: 1,
      explanation: "AI reflects its training data — less data in a language means worse performance! 训练数据少的语言表现差！",
    },
    {
      question: "What should you do if AI gives you wrong information?",
      options: [
        "Report it and move on",
        "Trust it anyway",
        "Verify with other sources and correct your understanding",
        "Stop using AI forever"
      ],
      correctIndex: 2,
      explanation: "Cross-reference with trusted sources. AI is a helper, not an authority! 交叉验证，AI不是权威！",
    },
    {
      type: "coding",
      question: "Spot the AI mistake",
      prompt: '🎯 AI claims len("Hi") returns 3. Print the ACTUAL result.',
      starterCode: '# What does len("Hi") really return?\n',
      expectedOutput: "2",
      hint: 'print(len("Hi")) — count the characters!',
      explanation: '"Hi" has 2 characters, not 3! AI was wrong again. "Hi"只有2个字符！',
    },
    {
      question: "What is a deepfake?",
      options: [
        "A deep learning model",
        "AI-generated fake images, videos, or audio",
        "A debugging technique",
        "A type of neural network"
      ],
      correctIndex: 1,
      explanation: "Deepfakes are AI-generated fake media that look real. Be aware! 深度伪造是AI生成的假内容！",
    },
    {
      question: "What is data privacy in AI?",
      options: [
        "Making AI private",
        "Protecting personal information from being misused by AI systems",
        "Encrypting AI code",
        "Hiding AI from users"
      ],
      correctIndex: 1,
      explanation: "Data privacy means protecting personal info. Be careful what data you share with AI! 数据隐私保护个人信息！",
    },
    {
      question: "What ethical consideration is important when building AI?",
      options: [
        "Making it as fast as possible",
        "Fairness, transparency, and accountability",
        "Using the most data",
        "Making it profitable"
      ],
      correctIndex: 1,
      explanation: "Ethical AI should be fair, transparent, and accountable! AI伦理：公平、透明、负责！",
    },
    {
      type: "coding",
      question: "Check a claim",
      prompt: '🎯 AI says 10 / 3 = 3.33. Print the actual result of 10 / 3.',
      starterCode: "# Verify the claim\n",
      expectedOutput: "3.3333333333333335",
      hint: "print(10 / 3)",
      explanation: "10/3 = 3.3333...335 (floating point). AI's rounded answer was close but not exact! 浮点数精度！",
    },
  ],

  "5-4": [
    {
      question: "What is classification in AI/programming?",
      options: [
        "Organizing files into folders",
        "Sorting things into categories based on rules or patterns",
        "A type of loop",
        "A Python module"
      ],
      correctIndex: 1,
      explanation: "Classification = assigning items to categories based on features/rules! 分类=按规则归类！",
    },
    {
      question: "What is a simple if/else classifier?",
      options: [
        "An AI model",
        "Using if/elif/else to categorize based on conditions",
        "A random classifier",
        "A neural network"
      ],
      correctIndex: 1,
      explanation: "Simple classifiers use rules (if/elif/else) to decide categories! 简单分类器用规则判断！",
    },
    {
      question: "What is a decision tree?",
      options: [
        "A tree data structure",
        "A series of yes/no questions that lead to a classification",
        "A random forest",
        "A Python library"
      ],
      correctIndex: 1,
      explanation: "Decision trees ask yes/no questions to narrow down to a category! 决策树问是/否问题来分类！",
    },
    {
      question: "What is a feature in machine learning?",
      options: [
        "A Python feature",
        "A measurable property used to make predictions",
        "A software update",
        "A bug fix"
      ],
      correctIndex: 1,
      explanation: "Features are the input attributes (like height, weight, color) used for predictions! 特征是用于预测的属性！",
    },
    {
      type: "coding",
      question: "Simple classifier",
      prompt: '🎯 Classify temperature: if temp >= 30, print "hot". Given temp = 35.',
      starterCode: "temp = 35\n",
      expectedOutput: "hot",
      hint: 'if temp >= 30: print("hot")',
      explanation: "35 >= 30 is True → prints 'hot'! Simple threshold classifier. 简单阈值分类！",
    },
    {
      question: "What is accuracy in classification?",
      options: [
        "How fast the classifier is",
        "Percentage of correct predictions",
        "The number of categories",
        "The amount of training data"
      ],
      correctIndex: 1,
      explanation: "Accuracy = correct predictions ÷ total predictions × 100%! 准确率=正确预测/总预测！",
    },
    {
      question: "What is overfitting?",
      options: [
        "The model is too big",
        "The model memorizes training data but fails on new data",
        "The model is too fast",
        "The model is perfect"
      ],
      correctIndex: 1,
      explanation: "Overfitting = great on training data, bad on new data. Like memorizing answers! 过拟合=记住答案但不会举一反三！",
    },
    {
      type: "coding",
      question: "Multi-class classifier",
      prompt: '🎯 Given score = 85, classify: A(90+), B(80+), C(70+), F(below 70). Print the grade.',
      starterCode: "score = 85\n# Classify the grade\n",
      expectedOutput: "B",
      hint: 'Use if/elif: if score >= 90: print("A") elif score >= 80: print("B") ...',
      explanation: "85 >= 80 → grade B! Elif chain classifies into ranges. elif链分级！",
    },
    {
      question: "What is unsupervised learning?",
      options: [
        "Learning with labeled data",
        "Finding patterns in data WITHOUT labels",
        "Learning without a computer",
        "Random learning"
      ],
      correctIndex: 1,
      explanation: "Unsupervised learning discovers patterns without being told the answers! 无监督学习无标签！",
    },
    {
      question: "K-Nearest Neighbors (KNN) classifies by:",
      options: [
        "Random guessing",
        "Looking at the K closest data points and voting",
        "Using a formula",
        "Asking the user"
      ],
      correctIndex: 1,
      explanation: "KNN checks the K nearest neighbors and picks the most common category! KNN看最近的K个邻居投票！",
    },
  ],

  "5-5": [
    {
      question: "What is a graduation project?",
      options: [
        "A final test",
        "A project that combines everything you've learned",
        "A Python module",
        "A type of certificate"
      ],
      correctIndex: 1,
      explanation: "Your graduation project combines ALL skills into one real project! 毕业项目综合所有技能！",
    },
    {
      question: "Which Python concept is used to organize code into reusable pieces?",
      options: ["Variables", "Functions", "Comments", "Print statements"],
      correctIndex: 1,
      explanation: "Functions make code reusable and organized — essential for big projects! 函数让代码可重用！",
    },
    {
      question: "What data structure stores key-value pairs?",
      options: ["List", "Tuple", "Dictionary", "Set"],
      correctIndex: 2,
      explanation: "Dictionaries use key:value pairs — perfect for structured data! 字典存键值对！",
    },
    {
      question: "What should you do before writing a big project?",
      options: [
        "Just start coding",
        "Plan the structure: what functions, data, and flow you need",
        "Copy someone else's code",
        "Ask AI to write everything"
      ],
      correctIndex: 1,
      explanation: "Planning = success! Design your functions, data structures, and flow first. 先规划再编码！",
    },
    {
      question: "What is the DRY principle?",
      options: [
        "Don't Run Yet",
        "Don't Repeat Yourself — use functions instead of copy-paste",
        "Debug, Run, Yell",
        "Don't Rewrite Yesterday"
      ],
      correctIndex: 1,
      explanation: "DRY = Don't Repeat Yourself. If you copy-paste code, make it a function! DRY=不要重复！",
    },
    {
      type: "coding",
      question: "Final challenge: greeting",
      prompt: '🎯 Define a function greet(name) that prints "Welcome, {name}!". Call it with "Coder".',
      starterCode: "# Define and call greet\n",
      expectedOutput: "Welcome, Coder!",
      hint: 'def greet(name): print(f"Welcome, {name}!") then greet("Coder")',
      explanation: "Functions + f-strings + calling = real programming! 函数+f字符串+调用=真正编程！",
    },
    {
      question: "What is code refactoring?",
      options: [
        "Deleting all code",
        "Improving code structure without changing what it does",
        "Adding more features",
        "Removing all comments"
      ],
      correctIndex: 1,
      explanation: "Refactoring = cleaner, better-organized code that does the same thing! 重构=改善结构不改功能！",
    },
    {
      question: "What is version control (like Git)?",
      options: [
        "Numbering Python versions",
        "Tracking changes to code over time",
        "Controlling who can run code",
        "A backup tool only"
      ],
      correctIndex: 1,
      explanation: "Git tracks every change — you can go back in time! Version control saves you. Git追踪代码变更！",
    },
    {
      type: "coding",
      question: "Dictionary access",
      prompt: '🎯 Create student = {"name": "William", "grade": "A"}. Print the grade.',
      starterCode: "# Create dict and access it\n",
      expectedOutput: "A",
      hint: 'student = {"name": "William", "grade": "A"} then print(student["grade"])',
      explanation: 'Dictionary access with the key in brackets! 用键访问字典！',
    },
    {
      question: "What's the most important skill for a programmer?",
      options: [
        "Memorizing syntax",
        "Problem-solving and logical thinking",
        "Typing speed",
        "Knowing every language"
      ],
      correctIndex: 1,
      explanation: "Problem-solving is #1! Languages and syntax can be looked up. 解决问题能力最重要！",
    },
  ],
};
