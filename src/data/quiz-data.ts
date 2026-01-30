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
      question: "What does max([3, 7, 2, 9]) return?",
      options: ["3", "7", "9", "2"],
      correctIndex: 2,
      explanation: "max() finds the largest value in a list. 9 is the biggest! max()找最大值！",
    },
    {
      question: "What does sum([10, 20, 30]) / len([10, 20, 30]) calculate?",
      options: ["60", "20.0", "30", "3"],
      correctIndex: 1,
      explanation: "sum=60, len=3, 60/3=20.0. That's the average (mean)! 这就是平均值！",
    },
    {
      question: "What does enumerate(['a', 'b', 'c']) give you?",
      options: ["Just the values", "Just the indices", "Both index and value pairs", "The length"],
      correctIndex: 2,
      explanation: "enumerate() gives (0,'a'), (1,'b'), (2,'c') — index AND value! 同时给索引和值！",
    },
    {
      question: 'What does "█" * 5 produce?',
      options: ['"█5"', '"█████"', '"5█"', 'Error'],
      correctIndex: 1,
      explanation: "String * number repeats the string. '█' * 5 = '█████'. Great for bar charts! 字符串重复！",
    },
    {
      type: "coding",
      question: "Average calculation",
      prompt: "🎯 Calculate and print the average of [10, 20, 30, 40, 50].",
      starterCode: "data = [10, 20, 30, 40, 50]\n",
      expectedOutput: "30.0",
      hint: "print(sum(data) / len(data))",
      explanation: "sum=150, len=5, 150/5=30.0! 平均值计算！",
    },
    {
      question: "What does sorted([5, 2, 8, 1], reverse=True) return?",
      options: ["[1, 2, 5, 8]", "[8, 5, 2, 1]", "[5, 2, 8, 1]", "Error"],
      correctIndex: 1,
      explanation: "reverse=True sorts from largest to smallest! 反向排序：从大到小！",
    },
    {
      question: "How would you find the index of the maximum value in a list?",
      options: ["max(data)", "data.index(max(data))", "data.max()", "data.find(max)"],
      correctIndex: 1,
      explanation: "First find max value, then use .index() to find where it is! 先找最大值，再找位置！",
    },
    {
      type: "coding",
      question: "Find the range",
      prompt: "🎯 Find and print the range (max - min) of [15, 3, 42, 8, 27].",
      starterCode: "data = [15, 3, 42, 8, 27]\n",
      expectedOutput: "39",
      hint: "print(max(data) - min(data))",
      explanation: "42 - 3 = 39. Range shows data spread! 范围=最大-最小！",
    },
    {
      question: "What is an ASCII bar chart?",
      options: ["A graphical image", "Text-based visualization using characters like █", "A Python library", "A type of list"],
      correctIndex: 1,
      explanation: "ASCII bar charts use text characters to represent data visually in the terminal! 用文本字符可视化数据！",
    },
    {
      question: "What does f'{value:.1f}' do?",
      options: ["Rounds to 1 digit", "Shows 1 decimal place", "Multiplies by 0.1", "Converts to integer"],
      correctIndex: 1,
      explanation: ":.1f formats a float to show exactly 1 decimal place! 显示1位小数！",
    },
  ],

  "4-2": [
    {
      question: "What does random.randint(1, 6) return?",
      options: ["A float between 1 and 6", "An integer from 1 to 6 inclusive", "Always 1 or 6", "A random string"],
      correctIndex: 1,
      explanation: "randint(1, 6) returns 1, 2, 3, 4, 5, or 6 — like rolling a die! randint()随机整数！",
    },
    {
      question: "What is a Monte Carlo simulation?",
      options: ["A casino game", "Running an experiment many times to estimate probability", "A type of graph", "A random number generator"],
      correctIndex: 1,
      explanation: "Monte Carlo = run thousands of random trials to discover real probabilities! 蒙特卡洛模拟！",
    },
    {
      question: "What does random.random() return?",
      options: ["An integer", "A float between 0 and 1", "A float between -1 and 1", "A random string"],
      correctIndex: 1,
      explanation: "random.random() gives a float from 0.0 to just under 1.0! random()返回0到1的小数！",
    },
    {
      question: "What is the Law of Large Numbers?",
      options: ["Big numbers are always random", "More trials = results closer to true probability", "Random numbers get larger over time", "Computers can't handle large numbers"],
      correctIndex: 1,
      explanation: "More trials → more accurate! Flip a coin 10 times might be 60/40, but 10000 times → ~50/50! 大数定律！",
    },
    {
      type: "coding",
      question: "Coin flip probability",
      prompt: "🎯 A coin is flipped 10000 times. About how many heads? Print 5000 (approximately half).",
      starterCode: "# Fair coin: 50% heads\ntotal = 10000\n",
      expectedOutput: "5000",
      hint: "50% of 10000 = 5000",
      explanation: "A fair coin gives ~50% heads. 10000 × 0.5 = 5000! 公平硬币50%正面！",
    },
    {
      question: "What does random.choice(['A', 'B', 'C']) do?",
      options: ["Returns 'A'", "Returns a random item from the list", "Returns all items", "Sorts the list"],
      correctIndex: 1,
      explanation: "choice() picks one random item from the list! choice()随机选一个！",
    },
    {
      question: "If a game has 40% player win rate, who profits long-term?",
      options: ["The player", "The casino/house", "Both equally", "Neither"],
      correctIndex: 1,
      explanation: "40% player win = 60% house win. Long term, the house always profits! 庄家永远赢！",
    },
    {
      type: "coding",
      question: "Dice sum probability",
      prompt: "🎯 How many ways can 2 dice sum to 7? (Count all combinations where d1+d2=7, d1 and d2 from 1-6). Print the count.",
      starterCode: "count = 0\nfor d1 in range(1, 7):\n    for d2 in range(1, 7):\n        if d1 + d2 == 7:\n            count += 1\n",
      expectedOutput: "6",
      hint: "Pairs: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6 ways",
      explanation: "6 out of 36 total outcomes = 1/6 ≈ 16.7% chance! 掷两个骰子和为7有6种！",
    },
    {
      question: "Why do casinos always win in the long run?",
      options: ["They cheat", "Games are designed so house has higher probability", "Players make mistakes", "It's random luck"],
      correctIndex: 1,
      explanation: "Casino games are mathematically designed to give the house an edge! 赌场游戏数学上有庄家优势！",
    },
    {
      question: "What does '_ in for _ in range(n)' mean?",
      options: ["Error", "The loop variable is unused — we just want n repetitions", "It creates an underscore", "It skips iterations"],
      correctIndex: 1,
      explanation: "_ means 'I don't need this variable' — just repeat n times! _表示不需要这个变量！",
    },
  ],

  "4-3": [
    {
      question: "What does math.radians(180) return?",
      options: ["180", "3.14159... (π)", "90", "0"],
      correctIndex: 1,
      explanation: "180° = π radians ≈ 3.14159. Python trig functions need radians! 180度=π弧度！",
    },
    {
      question: "In projectile motion, what does gravity do?",
      options: ["Speeds up horizontally", "Pulls the projectile down", "Pushes it up", "Has no effect"],
      correctIndex: 1,
      explanation: "Gravity accelerates objects downward at 9.8 m/s² on Earth! 重力向下加速！",
    },
    {
      question: "What angle gives maximum range for a projectile (no air resistance)?",
      options: ["30°", "45°", "60°", "90°"],
      correctIndex: 1,
      explanation: "45° perfectly balances horizontal distance and flight time! 45度最远！",
    },
    {
      question: "What does math.sin(math.radians(90)) return?",
      options: ["0", "0.5", "1.0", "90"],
      correctIndex: 2,
      explanation: "sin(90°) = 1.0. The maximum value of sine! sin(90°)=1.0！",
    },
    {
      type: "coding",
      question: "Calculate distance",
      prompt: "🎯 A projectile is launched at 45° with speed 20 m/s, g=10. Calculate distance = speed²×sin(2×angle)/g. Print the result.",
      starterCode: "import math\nspeed = 20\nangle = 45\ng = 10\n",
      expectedOutput: "40.0",
      hint: "distance = (speed**2) * math.sin(2 * math.radians(angle)) / g",
      explanation: "400 × sin(90°) / 10 = 400 × 1 / 10 = 40.0 meters! 抛体距离公式！",
    },
    {
      question: "What is dt (delta time) in a simulation?",
      options: ["Total time", "A small time step between calculations", "A Python variable type", "The end time"],
      correctIndex: 1,
      explanation: "dt is the tiny time slice between updates. Smaller dt = more accurate! dt是时间步长！",
    },
    {
      question: "What does vx = speed × cos(angle) calculate?",
      options: ["Total speed", "Horizontal velocity component", "Vertical velocity component", "Acceleration"],
      correctIndex: 1,
      explanation: "cos() extracts the horizontal part of the launch velocity! cos()提取水平速度！",
    },
    {
      type: "coding",
      question: "Flight time",
      prompt: "🎯 A ball is thrown up at vy=30 m/s, g=10. Time to land = 2×vy/g. Print the time.",
      starterCode: "vy = 30\ng = 10\n",
      expectedOutput: "6.0",
      hint: "time = 2 * vy / g",
      explanation: "2 × 30 / 10 = 6.0 seconds! Up 3s + down 3s! 飞行时间=2×垂直速度/重力！",
    },
    {
      question: "Why does a 30° shot go the same distance as a 60° shot?",
      options: ["It doesn't", "sin(2×30°) = sin(2×60°) = sin(60°) = sin(120°)", "They have the same speed", "Gravity is different"],
      correctIndex: 1,
      explanation: "sin(60°) = sin(120°) ≈ 0.866. Complementary angles have equal range! 互补角等距！",
    },
    {
      question: "What happens if you increase launch speed but keep the angle the same?",
      options: ["Same distance", "Greater distance", "Less distance", "It depends on gravity"],
      correctIndex: 1,
      explanation: "Distance ∝ speed². Double the speed = 4× the distance! 距离与速度平方成正比！",
    },
  ],

  "4-4": [
    {
      question: "What does [x for x in data if x > 10] do?",
      options: ["Removes items > 10", "Creates a new list with only items > 10", "Counts items > 10", "Sorts items > 10"],
      correctIndex: 1,
      explanation: "List comprehension with filter! Keeps only items matching the condition! 列表推导式过滤！",
    },
    {
      question: 'What does "ATC" in "GATCGATCG" return?',
      options: ["True", "False", "3", "'ATC'"],
      correctIndex: 0,
      explanation: "'in' checks if a substring exists — 'ATC' is found in the string! in检查子串是否存在！",
    },
    {
      question: "What does 'banana'.count('a') return?",
      options: ["1", "2", "3", "6"],
      correctIndex: 2,
      explanation: ".count() counts how many times 'a' appears: b-a-n-a-n-a → 3 times! count()计数出现次数！",
    },
    {
      question: "What does all([True, True, False]) return?",
      options: ["True", "False", "[True, True]", "Error"],
      correctIndex: 1,
      explanation: "all() returns True only if ALL items are True. One False = result is False! all()要求全部为真！",
    },
    {
      type: "coding",
      question: "Filter a list",
      prompt: "🎯 From [5, 12, 3, 18, 7, 20], print only numbers greater than 10 as a list.",
      starterCode: "data = [5, 12, 3, 18, 7, 20]\n",
      expectedOutput: "[12, 18, 20]",
      hint: "print([x for x in data if x > 10])",
      explanation: "List comprehension filters: keep 12, 18, 20! 列表推导式过滤！",
    },
    {
      question: "What does .find('xyz') return if 'xyz' is NOT in the string?",
      options: ["0", "-1", "None", "Error"],
      correctIndex: 1,
      explanation: ".find() returns -1 when the substring is not found! 找不到时返回-1！",
    },
    {
      question: "What does any([False, False, True]) return?",
      options: ["False", "True", "[True]", "1"],
      correctIndex: 1,
      explanation: "any() returns True if at least ONE item is True! any()只需一个为真！",
    },
    {
      type: "coding",
      question: "Count pattern",
      prompt: '🎯 Count how many times "ab" appears in "ababcababd". Print the count.',
      starterCode: 'text = "ababcababd"\n',
      expectedOutput: "3",
      hint: 'print(text.count("ab"))',
      explanation: '"ab" appears at positions 0, 2, 5 → 3 times! count()统计子串！',
    },
    {
      question: "How do you filter a list of dictionaries by a key value?",
      options: ["data.filter(key)", "[d for d in data if d['key'] == value]", "data.get(key)", "filter(data, key)"],
      correctIndex: 1,
      explanation: "List comprehension with dict access — the Python way to filter! 用列表推导式过滤字典列表！",
    },
    {
      question: "What's the difference between .find() and .index()?",
      options: ["They're identical", ".find() returns -1 if not found, .index() raises an error", ".index() is faster", ".find() only works on lists"],
      correctIndex: 1,
      explanation: ".find() is safer — returns -1. .index() crashes if not found! find()更安全！",
    },
  ],

  "4-5": [
    {
      question: "What does ord('A') return?",
      options: ["1", "65", "'A'", "Error"],
      correctIndex: 1,
      explanation: "ord() returns the ASCII/Unicode number for a character. 'A' = 65! ord()返回字符编码！",
    },
    {
      question: "What does chr(97) return?",
      options: ["'A'", "'a'", "'97'", "97"],
      correctIndex: 1,
      explanation: "chr() converts a number back to its character. 97 = 'a'! chr()数字转字符！",
    },
    {
      question: "In a Caesar cipher with shift 3, what does 'A' become?",
      options: ["'B'", "'C'", "'D'", "'Z'"],
      correctIndex: 2,
      explanation: "A→B→C→D. Shift 3 positions forward! 向前移3位！",
    },
    {
      question: "What makes XOR (^) special for encryption?",
      options: ["It's fast", "Applying it twice returns the original", "It creates random numbers", "It's unbreakable"],
      correctIndex: 1,
      explanation: "a ^ key ^ key = a. XOR is its own reverse! That's encryption magic! 异或两次得原文！",
    },
    {
      type: "coding",
      question: "Caesar shift",
      prompt: "🎯 Encrypt the letter 'H' with a Caesar shift of 5. Print the resulting character.",
      starterCode: "letter = 'H'\nshift = 5\n",
      expectedOutput: "M",
      hint: "chr(ord('H') + 5) = chr(72 + 5) = chr(77) = 'M'",
      explanation: "H(72) + 5 = M(77). Caesar cipher shifts letters! 凯撒密码移位！",
    },
    {
      question: "Why is a 4-digit PIN weak?",
      options: ["PINs are always weak", "Only 10,000 combinations — a computer tries them in milliseconds", "4 is an unlucky number", "PINs can't use letters"],
      correctIndex: 1,
      explanation: "10,000 combinations is nothing for a computer! Use longer passwords! 10000种太少了！",
    },
    {
      question: "What is a hash function?",
      options: ["Encryption that can be reversed", "A one-way function that turns data into a fixed-size code", "A random number generator", "A password generator"],
      correctIndex: 1,
      explanation: "Hashes are one-way — you can't get the original back! Used for password storage. 哈希是单向的！",
    },
    {
      type: "coding",
      question: "XOR encrypt/decrypt",
      prompt: "🎯 Encrypt 'X' with XOR key 10, then decrypt it. Print both the encrypted number and decrypted character.",
      starterCode: "letter = 'X'\nkey = 10\n",
      expectedOutput: "82\nX",
      hint: "encrypted = ord('X') ^ 10. decrypted = chr(encrypted ^ 10).",
      explanation: "ord('X')=88. 88^10=82. 82^10=88. chr(88)='X'. XOR round-trip! 异或往返！",
    },
    {
      question: "What makes a strong password?",
      options: ["Your birthday", "Long + mixed case + numbers + symbols", "A common word", "Same as your username"],
      correctIndex: 1,
      explanation: "Length and complexity matter! Each character type multiplies the possibilities! 长度+复杂度=安全！",
    },
    {
      question: "How does Morse code work?",
      options: ["It uses colors", "It encodes letters as sequences of dots and dashes", "It uses numbers only", "It's a programming language"],
      correctIndex: 1,
      explanation: "Morse code: A=.-, B=-..., SOS=...---... Dots and dashes! 莫尔斯电码用点和横！",
    },
  ],

  "4-6": [
    {
      question: "What does max(0, value) ensure?",
      options: ["Value is always 0", "Value never goes below 0", "Value is always positive", "Value equals max"],
      correctIndex: 1,
      explanation: "max(0, x) clamps to 0 minimum — populations can't be negative! 确保不为负数！",
    },
    {
      question: "In a predator-prey simulation, what happens when predators increase?",
      options: ["Prey increase too", "Prey decrease because more are eaten", "Nothing changes", "Predators decrease"],
      correctIndex: 1,
      explanation: "More predators = more hunting = fewer prey. Then predators starve too — it's a cycle! 更多捕食者=更多猎杀！",
    },
    {
      question: "Why do we use .copy() when saving state to history?",
      options: ["It's faster", "Without copy, all history entries point to the same dict that changes", "It uses less memory", "It's required by Python"],
      correctIndex: 1,
      explanation: "Dicts are references! Without copy, every history entry shows the CURRENT state, not the past! 字典是引用！",
    },
    {
      question: "What is a simulation time step?",
      options: ["Total simulation time", "One iteration of the main loop representing a time unit", "A debugging tool", "A random interval"],
      correctIndex: 1,
      explanation: "Each loop iteration = one 'day' or 'turn' in the simulation! 每次循环=一个时间单位！",
    },
    {
      type: "coding",
      question: "Population update",
      prompt: "🎯 Start with 100 rabbits. Each day: +10% births, -15% eaten. What's the count after 1 day? Print it.",
      starterCode: "rabbits = 100\n",
      expectedOutput: "95",
      hint: "births = int(100 * 0.10) = 10. eaten = int(100 * 0.15) = 15. 100 + 10 - 15 = 95.",
      explanation: "10 born - 15 eaten = net -5. 100 - 5 = 95 rabbits! 出生-被吃=净变化！",
    },
    {
      question: "What happens in an ecosystem if all predators disappear?",
      options: ["Nothing", "Prey population explodes, then crashes due to food shortage", "Prey stay the same", "Prey also disappear"],
      correctIndex: 1,
      explanation: "Without predators, prey overpopulate → eat all food → mass starvation! 没有捕食者→猎物过多→食物耗尽！",
    },
    {
      question: "What does history.append(dict(world)) do?",
      options: ["Adds the world dict directly", "Adds a COPY of the world dict to history", "Deletes the world", "Creates a new world"],
      correctIndex: 1,
      explanation: "dict(world) creates a new copy, so history preserves past states! dict()创建副本！",
    },
    {
      type: "coding",
      question: "Simple simulation",
      prompt: "🎯 Start with grass=100. It grows 20% per day but max is 200. After 5 days, print the amount.",
      starterCode: "grass = 100\nfor day in range(5):\n    grass += int(grass * 0.20)\n    grass = min(grass, 200)\n",
      expectedOutput: "200",
      hint: "Day 1: 120, Day 2: 144, Day 3: 172, Day 4: 200 (capped), Day 5: 200 (still capped)",
      explanation: "100→120→144→172→206→200(capped). Min caps at 200! 增长到上限就停！",
    },
    {
      question: "Why add random events to a simulation?",
      options: ["To make it harder to code", "To model real-world unpredictability", "Computers need randomness", "To slow it down"],
      correctIndex: 1,
      explanation: "Real ecosystems have droughts, diseases, etc. Random events make simulations realistic! 随机事件让模拟更真实！",
    },
    {
      question: "What programming concepts does this lesson combine?",
      options: ["Only loops", "Data tracking, randomness, math formulas, and analysis", "Only functions", "Only print statements"],
      correctIndex: 1,
      explanation: "Life Simulator combines EVERYTHING: lists, dicts, loops, random, math, analysis! 综合运用所有概念！",
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // 🤖 AREA 5: AI FRONTIER
  // ═══════════════════════════════════════════════════════════════

  "5-1": [
    {
      question: "What is a rule-based AI system?",
      options: [
        "A neural network",
        "A system that uses if/elif/else rules to make decisions",
        "A random number generator",
        "A database"
      ],
      correctIndex: 1,
      explanation: "Rule-based AI uses explicit if/elif/else rules to decide — the simplest form of AI! 基于规则的AI用if/elif/else决策！",
    },
    {
      question: "What does .lower() do to a string?",
      options: [
        "Makes it shorter",
        "Converts all characters to lowercase",
        "Removes spaces",
        "Reverses the string"
      ],
      correctIndex: 1,
      explanation: ".lower() converts 'HELLO' → 'hello'. Essential for input normalization! .lower()转换为小写！",
    },
    {
      question: "What is a 'knowledge base' in AI?",
      options: [
        "A school library",
        "A data structure (like a dictionary) storing what the AI knows",
        "The internet",
        "A type of loop"
      ],
      correctIndex: 1,
      explanation: "A knowledge base stores the AI's knowledge — often as a dictionary of rules/facts! 知识库存储AI所知！",
    },
    {
      question: "Why is input normalization important for AI?",
      options: [
        "It makes code run faster",
        "So 'SIT', 'Sit', and 'sit' are all treated the same way",
        "It saves memory",
        "It's not important"
      ],
      correctIndex: 1,
      explanation: "Normalization ensures different forms of input (SIT, Sit, sit) all match the same rule! 标准化确保匹配！",
    },
    {
      type: "coding",
      question: "Pet trick lookup",
      prompt: "🎯 Create a dictionary tricks = {\"sit\": \"sits down\", \"shake\": \"offers paw\"}. Print tricks[\"sit\"].",
      starterCode: "# Create tricks dictionary and look up \"sit\"\n",
      expectedOutput: "sits down",
      hint: "tricks = {\"sit\": \"sits down\", \"shake\": \"offers paw\"}\nprint(tricks[\"sit\"])",
      explanation: "Dictionary lookup with tricks[\"sit\"] returns the matching value! 字典查找返回匹配值！",
    },
    {
      question: "What does 'in' check in Python?",
      options: [
        "If a variable exists",
        "If a value is inside a collection (string, list, dict)",
        "If a function is defined",
        "If a file exists"
      ],
      correctIndex: 1,
      explanation: "'in' checks membership — 'cat' in 'the cat sat' → True! in检查是否包含！",
    },
    {
      question: "How does an AI pet 'learn' new tricks?",
      options: [
        "Magic",
        "By adding new entries to its knowledge base (dictionary)",
        "By restarting the program",
        "By connecting to the internet"
      ],
      correctIndex: 1,
      explanation: "Learning = adding new key-value pairs to the dictionary! tricks['new'] = 'response' 学习=添加新键值对！",
    },
    {
      type: "coding",
      question: "Emotion detection",
      prompt: "🎯 Check if 'happy' is in the message 'I am so happy today'. Print the result (True/False).",
      starterCode: "message = \"I am so happy today\"\n",
      expectedOutput: "True",
      hint: "print(\"happy\" in message)",
      explanation: "'happy' is found in the message → True! 'happy'在消息中找到！",
    },
    {
      question: "What is a decision tree?",
      options: [
        "A tree data structure in memory",
        "A series of if/elif/else questions that lead to a decision",
        "A machine learning library",
        "A type of forest"
      ],
      correctIndex: 1,
      explanation: "Decision trees are chains of yes/no questions — the backbone of simple AI! 决策树是一连串判断问题！",
    },
    {
      question: "What happens when the AI pet gets an unknown command?",
      options: [
        "It crashes",
        "It falls into the 'else' branch and gives a default response",
        "It learns the command automatically",
        "It ignores it"
      ],
      correctIndex: 1,
      explanation: "The 'else' branch handles unknown inputs — good AI always has a fallback! else处理未知输入！",
    },
  ],

  "5-2": [
    {
      question: "What is the simplest game AI strategy?",
      options: [
        "Always pick the best move",
        "Random selection — just pick any valid move",
        "Copy the opponent",
        "Do nothing"
      ],
      correctIndex: 1,
      explanation: "Random AI picks randomly — it's dumb but makes a good baseline to compare against! 随机AI是最简单的基准！",
    },
    {
      question: "What does a smart Tic-Tac-Toe AI check first?",
      options: [
        "Random empty spot",
        "Can I win this turn? If yes, take the winning move!",
        "The center",
        "The corners"
      ],
      correctIndex: 1,
      explanation: "Priority 1: Win if possible! Then block opponent, then strategic positions. 优先级1：能赢就赢！",
    },
    {
      question: "How can an AI learn your patterns in Rock-Paper-Scissors?",
      options: [
        "Read your mind",
        "Track your move history and find the most common choice",
        "Use a camera",
        "Ask you"
      ],
      correctIndex: 1,
      explanation: "By counting your past moves, AI predicts you'll repeat your favorite! 统计历史找你的偏好！",
    },
    {
      question: "What is an evaluation function in game AI?",
      options: [
        "A test function",
        "A function that scores how good a game position is",
        "A function that evaluates Python code",
        "A debugging tool"
      ],
      correctIndex: 1,
      explanation: "Evaluation functions score positions: winning = +10, losing = -10, draw = 0. 评估函数给位置打分！",
    },
    {
      type: "coding",
      question: "Counter move",
      prompt: "🎯 Write a function get_counter(move) that returns what beats rock/paper/scissors. Test with get_counter(\"rock\") and print the result.",
      starterCode: "def get_counter(move):\n    counters = {\"rock\": \"paper\", \"paper\": \"scissors\", \"scissors\": \"rock\"}\n    return counters[move]\n\n",
      expectedOutput: "paper",
      hint: "Just call print(get_counter(\"rock\")) — paper beats rock!",
      explanation: "Dictionary lookup for game strategy! Paper beats rock. 字典查找游戏策略！",
    },
    {
      question: "Why is a strategy AI better than a random AI?",
      options: [
        "It's faster",
        "It uses rules/priorities to make smarter decisions",
        "It uses more memory",
        "It's always perfect"
      ],
      correctIndex: 1,
      explanation: "Strategy AI follows priorities (win > block > position), making smarter choices! 策略AI用优先级决策！",
    },
    {
      question: "What does 'counter' mean in Rock-Paper-Scissors AI?",
      options: [
        "Count the score",
        "Play the move that beats the predicted opponent move",
        "Copy the opponent",
        "Count to three"
      ],
      correctIndex: 1,
      explanation: "If you predict 'rock', counter with 'paper' (which beats rock)! 预测对手出石头就出布！",
    },
    {
      type: "coding",
      question: "Winner check",
      prompt: "🎯 Given board = ['X','O','X','X','O','X','O','X','O'], count how many 'X' are on the board. Print the count.",
      starterCode: "board = ['X','O','X','X','O','X','O','X','O']\n",
      expectedOutput: "5",
      hint: "Use board.count('X') and print the result!",
      explanation: ".count() counts occurrences in a list! .count()计算列表中的出现次数！",
    },
    {
      question: "In a game tournament, why run multiple games?",
      options: [
        "One game is boring",
        "To reduce luck — more games show which strategy is truly better",
        "Computers need warm-up",
        "To waste time"
      ],
      correctIndex: 1,
      explanation: "Multiple games reduce randomness and reveal true strategy strength! 多场比赛减少运气成分！",
    },
    {
      question: "What is the 'Minimax' concept in game AI?",
      options: [
        "Minimize code, maximize speed",
        "Maximize your score while minimizing your opponent's",
        "Use minimum and maximum functions",
        "A Python library"
      ],
      correctIndex: 1,
      explanation: "Minimax: pick the move that maximizes your advantage while minimizing opponent's! 极大极小：最大化自己，最小化对手！",
    },
  ],

  "5-3": [
    {
      question: "What is 'generative' in generative algorithms?",
      options: [
        "A type of battery",
        "Algorithms that CREATE new content (art, text, music)",
        "A debugging technique",
        "A type of loop"
      ],
      correctIndex: 1,
      explanation: "Generative algorithms create new content — art, poetry, music! 生成算法创造新内容！",
    },
    {
      question: "What is controlled randomness?",
      options: [
        "True random chaos",
        "Using random.choice() from a curated list — random but within rules",
        "Not using random at all",
        "A Python error"
      ],
      correctIndex: 1,
      explanation: "Pick randomly from a carefully chosen set — randomness within structure! 从精心选择的集合中随机挑选！",
    },
    {
      question: "What is a Markov chain?",
      options: [
        "A blockchain",
        "Predicting the next word/state based on the current one",
        "A type of chain necklace",
        "A linked list"
      ],
      correctIndex: 1,
      explanation: "Markov chains predict what comes NEXT based on what's happening NOW. Like auto-complete! 马尔可夫链预测下一个！",
    },
    {
      question: "How does template-based generation work?",
      options: [
        "Copy paste",
        "Define a structure (template) and fill in random words/parts",
        "Write everything manually",
        "Use AI images"
      ],
      correctIndex: 1,
      explanation: "Templates provide structure, random fills provide variety! Like Mad Libs! 模板提供结构，随机填充变化！",
    },
    {
      type: "coding",
      question: "Random choice",
      prompt: "🎯 Use random.choice() to pick a word from ['sun', 'moon', 'star'] with seed 42, and print it.",
      starterCode: "import random\nrandom.seed(42)\nwords = [\"sun\", \"moon\", \"star\"]\n",
      expectedOutput: "moon",
      hint: "print(random.choice(words))",
      explanation: "random.choice() picks one random element from a list! random.choice()随机选一个！",
    },
    {
      question: "In a Markov chain text generator, what is 'training text'?",
      options: [
        "The output text",
        "The source text the AI learns word patterns from",
        "A textbook about AI",
        "A code comment"
      ],
      correctIndex: 1,
      explanation: "Training text teaches the AI which words typically follow which! 训练文本教AI词语规律！",
    },
    {
      question: "What is procedural generation?",
      options: [
        "Following a procedure",
        "Building content step-by-step using algorithms and randomness",
        "Writing procedures in Python",
        "A game engine feature only"
      ],
      correctIndex: 1,
      explanation: "Procedural generation builds worlds, art, etc. algorithmically — used in games like Minecraft! 程序化生成用算法创建内容！",
    },
    {
      type: "coding",
      question: "String formatting",
      prompt: "🎯 Use .format() to fill in: 'The {adj} {noun}'.format(adj='bright', noun='moon'). Print the result.",
      starterCode: "",
      expectedOutput: "The bright moon",
      hint: "print('The {adj} {noun}'.format(adj='bright', noun='moon'))",
      explanation: ".format() fills in template placeholders with values! .format()填充模板占位符！",
    },
    {
      question: "Why does each run of a random art generator create different art?",
      options: [
        "The code changes itself",
        "random.choice() picks different values each time",
        "The computer's mood changes",
        "It doesn't — always the same"
      ],
      correctIndex: 1,
      explanation: "Random functions return different values each run — that's the 'creative' part! 随机函数每次返回不同值！",
    },
    {
      question: "What does random.seed(42) do?",
      options: [
        "Plants a seed",
        "Makes random results reproducible — same seed = same 'random' results",
        "Generates 42 random numbers",
        "Nothing"
      ],
      correctIndex: 1,
      explanation: "Setting a seed makes random() predictable — great for testing! seed让随机可重现！",
    },
  ],

  "5-4": [
    {
      question: "What is a prediction in programming?",
      options: [
        "Magic fortune-telling",
        "Using data patterns to estimate future or unknown values",
        "Random guessing",
        "Reading a file"
      ],
      correctIndex: 1,
      explanation: "Prediction = finding patterns in past data and extending them to new cases! 预测=找规律推测新值！",
    },
    {
      question: "What is a linear trend?",
      options: [
        "A straight line",
        "A pattern where values increase/decrease at a constant rate (y = mx + b)",
        "A zigzag pattern",
        "No pattern at all"
      ],
      correctIndex: 1,
      explanation: "Linear trends follow y = mx + b — a straight line relationship! 线性趋势遵循 y = mx + b！",
    },
    {
      question: "What is KNN (K-Nearest Neighbors)?",
      options: [
        "A social network",
        "Predict by finding the K most similar data points and averaging",
        "A keyboard shortcut",
        "A type of neural network"
      ],
      correctIndex: 1,
      explanation: "KNN finds the K closest examples and uses their average to predict! KNN找最近的K个点取平均！",
    },
    {
      question: "Why is more data usually better for predictions?",
      options: [
        "It makes the code longer",
        "More data reveals more reliable patterns and reduces noise",
        "Computers like big numbers",
        "It's not — less is better"
      ],
      correctIndex: 1,
      explanation: "More data = more reliable patterns. Small datasets can be misleading! 更多数据=更可靠的模式！",
    },
    {
      type: "coding",
      question: "Simple prediction",
      prompt: "🎯 Given the pattern score = 10 * hours + 45, predict the score for 6 hours of study. Print the result.",
      starterCode: "hours = 6\n",
      expectedOutput: "105",
      hint: "score = 10 * hours + 45, then print(score)",
      explanation: "Linear prediction: plug in the value! 10 × 6 + 45 = 105. 线性预测：代入数值！",
    },
    {
      question: "What is the 'average' useful for in prediction?",
      options: [
        "Nothing",
        "It's a simple prediction: future values will be close to the average",
        "It only works for grades",
        "It's only for reports"
      ],
      correctIndex: 1,
      explanation: "The average is the simplest prediction — tomorrow will be close to the historical average! 平均值是最简单的预测！",
    },
    {
      question: "What does 'confidence' mean in a prediction?",
      options: [
        "The AI is brave",
        "How sure the system is about its prediction (0-100%)",
        "The speed of calculation",
        "The amount of data"
      ],
      correctIndex: 1,
      explanation: "Confidence = how reliable the prediction is. High confidence = very likely correct! 置信度=预测有多可靠！",
    },
    {
      type: "coding",
      question: "Calculate average",
      prompt: "🎯 Calculate the average of [70, 80, 90, 85, 75]. Print the result.",
      starterCode: "data = [70, 80, 90, 85, 75]\n",
      expectedOutput: "80.0",
      hint: "avg = sum(data) / len(data), then print(avg)",
      explanation: "Average = sum / count = 400 / 5 = 80.0. 平均数 = 总和 / 个数！",
    },
    {
      question: "What is a transition pattern in weather prediction?",
      options: [
        "A weather forecast app",
        "What weather typically follows another (sunny → sunny 70%, cloudy 30%)",
        "A change in temperature",
        "A Python transition"
      ],
      correctIndex: 1,
      explanation: "Transition patterns track what typically follows — if sunny, next is usually sunny! 转换模式追踪后续规律！",
    },
    {
      question: "Why should predictions be 'clamped' (e.g., 0-100 for scores)?",
      options: [
        "For style",
        "To prevent impossible predictions like 150% or -20 score",
        "To save memory",
        "It's not necessary"
      ],
      correctIndex: 1,
      explanation: "Clamping prevents unrealistic values — a score can't be 150 or -20! 夹紧防止不现实的值！",
    },
  ],

  "5-5": [
    {
      question: "What is AI bias?",
      options: [
        "AI preferring certain programming languages",
        "Systematic unfairness in AI decisions due to training data or design",
        "AI being too smart",
        "A Python error"
      ],
      correctIndex: 1,
      explanation: "AI bias = unfair treatment of groups due to biased data or design. Garbage in = garbage out! AI偏见=因数据或设计导致不公平！",
    },
    {
      question: "How can you detect bias in an AI system?",
      options: [
        "Look at the code",
        "Compare approval/rejection rates across different groups",
        "Ask the AI if it's biased",
        "You can't"
      ],
      correctIndex: 1,
      explanation: "Compare outcomes across groups — if rates differ significantly, bias exists! 比较各组结果差异来检测偏见！",
    },
    {
      question: "What is 'explainability' in AI?",
      options: [
        "Writing good comments",
        "Being able to explain WHY an AI made a particular decision",
        "Explaining Python to beginners",
        "A documentation tool"
      ],
      correctIndex: 1,
      explanation: "Explainable AI shows its reasoning — no black boxes! 可解释AI展示推理过程！",
    },
    {
      question: "Why is ZIP code a biased feature for AI decisions?",
      options: [
        "ZIP codes are random",
        "ZIP codes correlate with race and wealth, creating hidden discrimination",
        "ZIP codes are too long",
        "They're not biased"
      ],
      correctIndex: 1,
      explanation: "ZIP codes act as proxies for race/wealth — using them can discriminate! 邮编与种族/财富相关，使用它们可能歧视！",
    },
    {
      type: "coding",
      question: "Calculate approval rate",
      prompt: "🎯 Group A: 8 approved out of 10. Group B: 4 approved out of 10. Print both rates as percentages.",
      starterCode: "approved_a, total_a = 8, 10\napproved_b, total_b = 4, 10\n",
      expectedOutput: "Group A: 80%\nGroup B: 40%",
      hint: "rate = approved / total * 100, print with f-string!",
      explanation: "80% vs 40% is a 40% gap — clear bias! 80%对40%差距=明显偏见！",
    },
    {
      question: "Who is responsible when AI makes unfair decisions?",
      options: [
        "Nobody — it's just code",
        "The developers, companies, and organizations who build and deploy the AI",
        "The users only",
        "The AI itself"
      ],
      correctIndex: 1,
      explanation: "Humans who build and deploy AI are accountable for its fairness! 构建和部署AI的人要负责！",
    },
    {
      question: "What is 'fairness metric' in AI?",
      options: [
        "A ruler",
        "A measurement to compare how equally the AI treats different groups",
        "The AI's speed",
        "A Python library"
      ],
      correctIndex: 1,
      explanation: "Fairness metrics measure equality of treatment across groups! 公平指标衡量各组受到的平等对待！",
    },
    {
      type: "coding",
      question: "Check for bias",
      prompt: "🎯 If rate_a = 90 and rate_b = 40, calculate the difference. If difference > 15, print 'BIAS DETECTED', otherwise print 'FAIR'.",
      starterCode: "rate_a = 90\nrate_b = 40\ndiff = abs(rate_a - rate_b)\n",
      expectedOutput: "BIAS DETECTED",
      hint: "if diff > 15: print('BIAS DETECTED') else: print('FAIR')",
      explanation: "50% difference is way above 15% threshold — clear bias! 50%差异远超15%阈值！",
    },
    {
      question: "How do you fix AI bias?",
      options: [
        "Delete the AI",
        "Use balanced training data, remove biased features, audit regularly",
        "Make the AI faster",
        "Add more code"
      ],
      correctIndex: 1,
      explanation: "Fix bias: balance data, remove proxy features, test regularly! 修复偏见：平衡数据、移除代理特征、定期审计！",
    },
    {
      question: "What is a real-world example of AI bias?",
      options: [
        "AI that runs slowly",
        "Facial recognition working worse for certain skin tones",
        "AI that can't play games",
        "AI that doesn't understand Chinese"
      ],
      correctIndex: 1,
      explanation: "Facial recognition has shown bias — working worse for darker skin tones due to unbalanced training data! 面部识别对某些肤色效果差！",
    },
  ],

  "5-6": [
    {
      question: "What is the first step in planning a big project?",
      options: [
        "Start coding immediately",
        "Plan the structure: functions, data, and flow",
        "Copy from the internet",
        "Ask AI to write everything"
      ],
      correctIndex: 1,
      explanation: "Planning first! Decide what functions, data structures, and flow you need. 先规划！",
    },
    {
      question: "What is the DRY principle?",
      options: [
        "Don't Run Yet",
        "Don't Repeat Yourself — use functions instead of copy-paste",
        "Debug Run Yield",
        "Don't Restart Yesterday"
      ],
      correctIndex: 1,
      explanation: "DRY = Don't Repeat Yourself. Repeated code → make it a function! DRY=不要重复！",
    },
    {
      question: "Which data structure is best for storing structured records?",
      options: [
        "A single variable",
        "A dictionary or list of dictionaries",
        "A print statement",
        "A comment"
      ],
      correctIndex: 1,
      explanation: "Dictionaries store structured data with keys! Lists of dicts = databases! 字典存储结构化数据！",
    },
    {
      question: "Why should you build projects piece by piece?",
      options: [
        "It's slower that way",
        "Easier to test, debug, and understand each part",
        "Computers prefer it",
        "It's the only way"
      ],
      correctIndex: 1,
      explanation: "Small pieces are easier to test and debug. Build → test → add more! 小块更容易测试和调试！",
    },
    {
      type: "coding",
      question: "Password check",
      prompt: "🎯 Check if the password 'Hello123!' has at least 8 characters AND contains a digit. Print True or False.",
      starterCode: "password = \"Hello123!\"\n",
      expectedOutput: "True",
      hint: "len(password) >= 8 and any(c.isdigit() for c in password)",
      explanation: "Multiple checks combined: length + digit = True! 多重检查组合！",
    },
    {
      question: "What makes a good password?",
      options: [
        "Short and simple",
        "Long with mixed uppercase, lowercase, digits, and special characters",
        "Your name repeated",
        "Just numbers"
      ],
      correctIndex: 1,
      explanation: "Strong passwords mix: length + uppercase + lowercase + digits + special chars! 强密码混合多种字符！",
    },
    {
      question: "What is the most important programming skill?",
      options: [
        "Memorizing all syntax",
        "Problem-solving and logical thinking",
        "Typing speed",
        "Knowing every language"
      ],
      correctIndex: 1,
      explanation: "Problem-solving is #1! Syntax can be looked up, thinking cannot. 解决问题最重要！",
    },
    {
      type: "coding",
      question: "Format output",
      prompt: "🎯 Create stars = '★' * 3 + '☆' * 2. Print the result.",
      starterCode: "",
      expectedOutput: "★★★☆☆",
      hint: "stars = '★' * 3 + '☆' * 2, then print(stars)",
      explanation: "String multiplication creates repeated patterns — great for ratings! 字符串乘法创建重复模式！",
    },
    {
      question: "What should you do after completing your project?",
      options: [
        "Delete it",
        "Test it, polish the output, and share it with others",
        "Never look at it again",
        "Start over from scratch"
      ],
      correctIndex: 1,
      explanation: "Test → polish → share! Every project is worth celebrating! 测试→美化→分享！",
    },
    {
      question: "What comes after Code Buddy? 🚀",
      options: [
        "Nothing — programming is done",
        "Web development, game engines, data science, AI/ML, and endless possibilities!",
        "More print statements",
        "Reading books only"
      ],
      correctIndex: 1,
      explanation: "This is just the beginning! Flask, Pygame, TensorFlow, and so much more await! 这只是开始！",
    },
  ],
};
