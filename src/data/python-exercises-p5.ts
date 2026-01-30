import type { PythonExercise } from './python-exercises';

export const PYTHON_EXERCISES_P5: PythonExercise[] = [
  // ============================================================
  // LEVEL 1: MORE STRING OPS, INPUT PARSING, MATH, FORMATTING (15)
  // ============================================================
  {
    id: 'py-ex-1-86',
    title: 'Title Case',
    titleZh: '标题大小写',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'title'],
    description: 'Read a string and print it in title case (first letter of each word capitalized).',
    descriptionZh: '读取一个字符串，将每个单词的首字母大写后输出。',
    examples: [{ input: 'hello world', output: 'Hello World' }],
    starterCode: `# TODO: Convert input to title case\n`,
    solution: `# Use .title() to capitalize first letter of each word
s = input()
print(s.title())`,
    hints: ['Use the .title() method', 'It capitalizes the first letter of every word'],
    hintsZh: ['使用 .title() 方法', '它会将每个单词的首字母大写'],
    testCases: [
      { input: 'hello world', expectedOutput: 'Hello World' },
      { input: 'python is fun', expectedOutput: 'Python Is Fun' },
    ],
  },
  {
    id: 'py-ex-1-87',
    title: 'Capitalize First',
    titleZh: '首字母大写',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'capitalize'],
    description: 'Read a string and print it with only the first character capitalized and the rest lowercase.',
    descriptionZh: '读取一个字符串，仅将第一个字符大写，其余小写后输出。',
    examples: [{ input: 'hELLO', output: 'Hello' }],
    starterCode: `# TODO: Capitalize only the first character\n`,
    solution: `# Use .capitalize() — first char upper, rest lower
s = input()
print(s.capitalize())`,
    hints: ['Use the .capitalize() method', 'It lowercases everything except the first character'],
    hintsZh: ['使用 .capitalize() 方法', '它会把除第一个字符外的所有字母变为小写'],
    testCases: [
      { input: 'hELLO', expectedOutput: 'Hello' },
      { input: 'python', expectedOutput: 'Python' },
    ],
  },
  {
    id: 'py-ex-1-88',
    title: 'Center String',
    titleZh: '居中字符串',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'center'],
    description: 'Read a string and a width (on separate lines). Print the string centered in that width, padded with dashes "-".',
    descriptionZh: '读取一个字符串和一个宽度（分两行输入），将字符串居中显示在该宽度内，用短横线"-"填充。',
    examples: [{ input: 'hi\n10', output: '----hi----' }],
    starterCode: `# TODO: Center the string with dash padding\n`,
    solution: `# Use .center(width, fillchar) to center a string
s = input()
w = int(input())
print(s.center(w, '-'))`,
    hints: ['Use .center(width, char)', 'The second argument is the fill character', 'Convert width to int'],
    hintsZh: ['使用 .center(width, char)', '第二个参数是填充字符', '将宽度转换为整数'],
    testCases: [
      { input: 'hi\n10', expectedOutput: '----hi----' },
      { input: 'ab\n6', expectedOutput: '--ab--' },
    ],
  },
  {
    id: 'py-ex-1-89',
    title: 'Left Justify String',
    titleZh: '左对齐字符串',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'ljust'],
    description: 'Read a string and a width. Print the string left-justified, padded with dots "." to the given width.',
    descriptionZh: '读取一个字符串和宽度，将字符串左对齐输出，用点号"."填充至指定宽度。',
    examples: [{ input: 'hi\n10', output: 'hi........' }],
    starterCode: `# TODO: Left-justify with dot padding\n`,
    solution: `# Use .ljust(width, fillchar)
s = input()
w = int(input())
print(s.ljust(w, '.'))`,
    hints: ['Use .ljust(width, fillchar)', 'Default fill is space, but we want dots'],
    hintsZh: ['使用 .ljust(width, fillchar)', '默认填充是空格，但这里要用点号'],
    testCases: [
      { input: 'hi\n10', expectedOutput: 'hi........' },
      { input: 'abc\n6', expectedOutput: 'abc...' },
    ],
  },
  {
    id: 'py-ex-1-90',
    title: 'Zero Fill',
    titleZh: '零填充',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'zfill'],
    description: 'Read a number string and a width. Print it zero-padded to that width using zfill.',
    descriptionZh: '读取一个数字字符串和宽度，使用 zfill 将其补零至指定宽度后输出。',
    examples: [{ input: '42\n5', output: '00042' }],
    starterCode: `# TODO: Zero-pad the number string\n`,
    solution: `# Use .zfill(width) to pad with leading zeros
s = input()
w = int(input())
print(s.zfill(w))`,
    hints: ['Use .zfill(width)', 'It pads the string with leading zeros'],
    hintsZh: ['使用 .zfill(width)', '它会在字符串前面补零'],
    testCases: [
      { input: '42\n5', expectedOutput: '00042' },
      { input: '7\n3', expectedOutput: '007' },
    ],
  },
  {
    id: 'py-ex-1-91',
    title: 'Replace Substring',
    titleZh: '替换子字符串',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'replace'],
    description: 'Read a string, an old substring, and a new substring (each on a separate line). Print the result of replacing all occurrences.',
    descriptionZh: '读取一个字符串、旧子串和新子串（分三行输入），输出替换所有匹配后的结果。',
    examples: [{ input: 'hello world\nworld\nPython', output: 'hello Python' }],
    starterCode: `# TODO: Replace old substring with new one\n`,
    solution: `# Use .replace(old, new) to substitute substrings
s = input()
old = input()
new_s = input()
print(s.replace(old, new_s))`,
    hints: ['Use .replace(old, new)', 'It replaces all occurrences by default'],
    hintsZh: ['使用 .replace(old, new)', '默认会替换所有出现的地方'],
    testCases: [
      { input: 'hello world\nworld\nPython', expectedOutput: 'hello Python' },
      { input: 'aaa\na\nb', expectedOutput: 'bbb' },
    ],
  },
  {
    id: 'py-ex-1-92',
    title: 'Split and Join',
    titleZh: '拆分与连接',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'split', 'join'],
    description: 'Read a sentence (words separated by spaces). Print the words joined by hyphens "-".',
    descriptionZh: '读取一个句子（单词以空格分隔），将单词用连字符"-"连接后输出。',
    examples: [{ input: 'hello world python', output: 'hello-world-python' }],
    starterCode: `# TODO: Split by spaces, join with hyphens\n`,
    solution: `# Split into list, then join with hyphens
s = input()
print('-'.join(s.split()))`,
    hints: ['Use .split() to break into words', 'Use "-".join(list) to combine'],
    hintsZh: ['使用 .split() 拆分单词', '使用 "-".join(列表) 组合'],
    testCases: [
      { input: 'hello world python', expectedOutput: 'hello-world-python' },
      { input: 'a b c', expectedOutput: 'a-b-c' },
    ],
  },
  {
    id: 'py-ex-1-93',
    title: 'Starts and Ends With',
    titleZh: '前后缀检查',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'startswith', 'endswith'],
    description: 'Read a string, a prefix, and a suffix (each on a separate line). Print "YES" if the string starts with the prefix AND ends with the suffix, otherwise "NO".',
    descriptionZh: '读取一个字符串、前缀和后缀（分三行输入）。如果字符串以该前缀开头且以该后缀结尾，输出 "YES"，否则输出 "NO"。',
    examples: [{ input: 'hello world\nhello\nworld', output: 'YES' }],
    starterCode: `# TODO: Check prefix and suffix\n`,
    solution: `# Use .startswith() and .endswith()
s = input()
prefix = input()
suffix = input()
if s.startswith(prefix) and s.endswith(suffix):
    print("YES")
else:
    print("NO")`,
    hints: ['Use .startswith(prefix)', 'Use .endswith(suffix)', 'Combine with "and"'],
    hintsZh: ['使用 .startswith(prefix)', '使用 .endswith(suffix)', '用 "and" 组合条件'],
    testCases: [
      { input: 'hello world\nhello\nworld', expectedOutput: 'YES' },
      { input: 'hello world\nhi\nworld', expectedOutput: 'NO' },
    ],
  },
  {
    id: 'py-ex-1-94',
    title: 'Check Digit or Alpha',
    titleZh: '判断数字或字母',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'isdigit', 'isalpha'],
    description: 'Read a string. If it contains only digits, print "DIGIT". If only letters, print "ALPHA". Otherwise print "MIXED".',
    descriptionZh: '读取一个字符串。如果全是数字输出 "DIGIT"；全是字母输出 "ALPHA"；否则输出 "MIXED"。',
    examples: [{ input: '123', output: 'DIGIT' }],
    starterCode: `# TODO: Check if string is all digits, all letters, or mixed\n`,
    solution: `# Use .isdigit() and .isalpha() to classify
s = input()
if s.isdigit():
    print("DIGIT")
elif s.isalpha():
    print("ALPHA")
else:
    print("MIXED")`,
    hints: ['Use .isdigit() to check for digits', 'Use .isalpha() to check for letters', 'Use elif for the branching'],
    hintsZh: ['使用 .isdigit() 检查数字', '使用 .isalpha() 检查字母', '使用 elif 进行分支判断'],
    testCases: [
      { input: '123', expectedOutput: 'DIGIT' },
      { input: 'abc', expectedOutput: 'ALPHA' },
      { input: 'a1b2', expectedOutput: 'MIXED' },
    ],
  },
  {
    id: 'py-ex-1-95',
    title: 'Multiple Inputs on One Line',
    titleZh: '一行多输入',
    difficulty: 'easy',
    level: 1,
    category: 'Input/Output',
    categoryZh: '输入输出',
    tags: ['input', 'split', 'map'],
    description: 'Read three integers from a single line (space-separated) and print their sum.',
    descriptionZh: '从一行中读取三个整数（空格分隔），输出它们的和。',
    examples: [{ input: '1 2 3', output: '6' }],
    starterCode: `# TODO: Read three integers from one line and print their sum\n`,
    solution: `# Use split() and map() to read multiple integers
a, b, c = map(int, input().split())
print(a + b + c)`,
    hints: ['Use input().split() to get a list of strings', 'Use map(int, ...) to convert to integers', 'Unpack into three variables'],
    hintsZh: ['使用 input().split() 获取字符串列表', '使用 map(int, ...) 转换为整数', '解包到三个变量中'],
    testCases: [
      { input: '1 2 3', expectedOutput: '6' },
      { input: '10 20 30', expectedOutput: '60' },
    ],
  },
  {
    id: 'py-ex-1-96',
    title: 'Absolute Value',
    titleZh: '绝对值',
    difficulty: 'easy',
    level: 1,
    category: 'Math',
    categoryZh: '数学',
    tags: ['math', 'abs'],
    description: 'Read an integer and print its absolute value.',
    descriptionZh: '读取一个整数，输出它的绝对值。',
    examples: [{ input: '-5', output: '5' }],
    starterCode: `# TODO: Print the absolute value of the input\n`,
    solution: `# Use abs() to get absolute value
n = int(input())
print(abs(n))`,
    hints: ['Use the abs() built-in function', 'Convert input to int first'],
    hintsZh: ['使用内置函数 abs()', '先将输入转换为整数'],
    testCases: [
      { input: '-5', expectedOutput: '5' },
      { input: '3', expectedOutput: '3' },
      { input: '0', expectedOutput: '0' },
    ],
  },
  {
    id: 'py-ex-1-97',
    title: 'Round a Float',
    titleZh: '四舍五入',
    difficulty: 'easy',
    level: 1,
    category: 'Math',
    categoryZh: '数学',
    tags: ['math', 'round'],
    description: 'Read a float and an integer n (on separate lines). Print the float rounded to n decimal places.',
    descriptionZh: '读取一个浮点数和整数 n（分两行输入），输出浮点数保留 n 位小数的结果。',
    examples: [{ input: '3.14159\n2', output: '3.14' }],
    starterCode: `# TODO: Round the float to n decimal places\n`,
    solution: `# Use round(number, ndigits)
f = float(input())
n = int(input())
print(round(f, n))`,
    hints: ['Use round(number, ndigits)', 'Convert inputs to float and int'],
    hintsZh: ['使用 round(number, ndigits)', '将输入分别转换为 float 和 int'],
    testCases: [
      { input: '3.14159\n2', expectedOutput: '3.14' },
      { input: '2.71828\n3', expectedOutput: '2.718' },
    ],
  },
  {
    id: 'py-ex-1-98',
    title: 'Min and Max of Three',
    titleZh: '三个数的最大最小值',
    difficulty: 'easy',
    level: 1,
    category: 'Math',
    categoryZh: '数学',
    tags: ['math', 'min', 'max'],
    description: 'Read three integers from one line. Print the minimum and maximum separated by a space.',
    descriptionZh: '从一行读取三个整数，输出最小值和最大值，用空格分隔。',
    examples: [{ input: '3 1 2', output: '1 3' }],
    starterCode: `# TODO: Find and print min and max\n`,
    solution: `# Use min() and max() built-in functions
nums = list(map(int, input().split()))
print(min(nums), max(nums))`,
    hints: ['Use min() and max()', 'You can pass a list to both functions'],
    hintsZh: ['使用 min() 和 max()', '可以传入列表作为参数'],
    testCases: [
      { input: '3 1 2', expectedOutput: '1 3' },
      { input: '5 5 5', expectedOutput: '5 5' },
    ],
  },
  {
    id: 'py-ex-1-99',
    title: 'Power Function',
    titleZh: '幂运算',
    difficulty: 'easy',
    level: 1,
    category: 'Math',
    categoryZh: '数学',
    tags: ['math', 'pow'],
    description: 'Read base and exponent (on separate lines). Print base raised to the power of exponent using pow().',
    descriptionZh: '读取底数和指数（分两行输入），使用 pow() 输出底数的指数次幂。',
    examples: [{ input: '2\n10', output: '1024' }],
    starterCode: `# TODO: Calculate and print base ** exponent\n`,
    solution: `# Use pow(base, exp) or ** operator
base = int(input())
exp = int(input())
print(pow(base, exp))`,
    hints: ['Use pow(base, exponent)', 'Or use the ** operator'],
    hintsZh: ['使用 pow(base, exponent)', '或者使用 ** 运算符'],
    testCases: [
      { input: '2\n10', expectedOutput: '1024' },
      { input: '3\n4', expectedOutput: '81' },
    ],
  },
  {
    id: 'py-ex-1-100',
    title: 'F-String Alignment',
    titleZh: 'F-String 对齐',
    difficulty: 'easy',
    level: 1,
    category: 'Formatting',
    categoryZh: '格式化',
    tags: ['f-string', 'format', 'alignment'],
    description: 'Read a string and a width. Print three lines: the string left-aligned, centered, and right-aligned within the given width, using f-string format specs. Use "*" as fill character.',
    descriptionZh: '读取一个字符串和宽度。分三行输出：在指定宽度内左对齐、居中和右对齐的字符串，用 f-string 格式化，用 "*" 填充。',
    examples: [{ input: 'hi\n10', output: 'hi********\n****hi****\n********hi' }],
    starterCode: `# TODO: Print left, center, right aligned with * padding\n`,
    solution: `# Use f-string format specs: < (left), ^ (center), > (right)
s = input()
w = int(input())
print(f"{s:*<{w}}")
print(f"{s:*^{w}}")
print(f"{s:*>{w}}")`,
    hints: ['f-string format: {value:fill<width}', 'Use < for left, ^ for center, > for right', 'The fill character goes before the alignment symbol'],
    hintsZh: ['f-string 格式：{value:填充符<宽度}', '使用 < 左对齐，^ 居中，> 右对齐', '填充字符放在对齐符号前面'],
    testCases: [
      { input: 'hi\n10', expectedOutput: 'hi********\n****hi****\n********hi' },
      { input: 'ab\n6', expectedOutput: 'ab****\n**ab**\n****ab' },
    ],
  },

  // ============================================================
  // LEVEL 2: PATTERNS, NUMBER THEORY, CONVERSION (15)
  // ============================================================
  {
    id: 'py-ex-2-47',
    title: 'Hollow Square',
    titleZh: '空心正方形',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['pattern', 'loop', 'nested'],
    description: 'Read an integer n. Print an n×n hollow square using "*". The border is filled, the interior is spaces.',
    descriptionZh: '读取整数 n，用 "*" 打印一个 n×n 的空心正方形。边框用 * 填充，内部用空格。',
    examples: [{ input: '4', output: '****\n*  *\n*  *\n****' }],
    starterCode: `# TODO: Print a hollow square of size n\n`,
    solution: `# First and last rows are full, middle rows have border only
n = int(input())
for i in range(n):
    if i == 0 or i == n - 1:
        print('*' * n)
    else:
        print('*' + ' ' * (n - 2) + '*')`,
    hints: ['First and last rows are all stars', 'Middle rows: star + spaces + star', 'Interior width is n-2'],
    hintsZh: ['第一行和最后一行全是星号', '中间行：星号 + 空格 + 星号', '内部宽度为 n-2'],
    testCases: [
      { input: '4', expectedOutput: '****\n*  *\n*  *\n****' },
      { input: '3', expectedOutput: '***\n* *\n***' },
    ],
  },
  {
    id: 'py-ex-2-48',
    title: "Floyd's Triangle",
    titleZh: 'Floyd 三角形',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['pattern', 'loop'],
    description: "Read n rows. Print Floyd's triangle: consecutive numbers starting from 1, row i has i numbers, space-separated.",
    descriptionZh: '读取行数 n，打印 Floyd 三角形：从 1 开始连续编号，第 i 行有 i 个数字，用空格分隔。',
    examples: [{ input: '4', output: '1\n2 3\n4 5 6\n7 8 9 10' }],
    starterCode: `# TODO: Print Floyd's triangle with n rows\n`,
    solution: `# Keep a running counter, print i numbers per row
n = int(input())
num = 1
for i in range(1, n + 1):
    row = []
    for j in range(i):
        row.append(str(num))
        num += 1
    print(' '.join(row))`,
    hints: ['Keep a counter that increments with each number', 'Row i has exactly i numbers', 'Use a list to collect numbers per row'],
    hintsZh: ['维护一个递增的计数器', '第 i 行有 i 个数字', '用列表收集每行数字'],
    testCases: [
      { input: '4', expectedOutput: '1\n2 3\n4 5 6\n7 8 9 10' },
      { input: '3', expectedOutput: '1\n2 3\n4 5 6' },
    ],
  },
  {
    id: 'py-ex-2-49',
    title: "Pascal's Triangle",
    titleZh: '杨辉三角',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['pattern', 'math', 'list'],
    description: "Read n. Print the first n rows of Pascal's triangle. Each row's numbers are space-separated.",
    descriptionZh: '读取 n，输出杨辉三角的前 n 行，每行数字用空格分隔。',
    examples: [{ input: '5', output: '1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1' }],
    starterCode: `# TODO: Print first n rows of Pascal's triangle\n`,
    solution: `# Each element is sum of two elements above it
n = int(input())
row = [1]
for i in range(n):
    print(' '.join(map(str, row)))
    # Build next row
    new_row = [1]
    for j in range(len(row) - 1):
        new_row.append(row[j] + row[j + 1])
    new_row.append(1)
    row = new_row`,
    hints: ['Start with [1]', 'Each new element = sum of two adjacent elements above', 'Always start and end each row with 1'],
    hintsZh: ['从 [1] 开始', '每个新元素 = 上方两个相邻元素之和', '每行首尾都是 1'],
    testCases: [
      { input: '5', expectedOutput: '1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1' },
      { input: '3', expectedOutput: '1\n1 1\n1 2 1' },
    ],
  },
  {
    id: 'py-ex-2-50',
    title: 'Butterfly Pattern',
    titleZh: '蝴蝶图案',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['pattern', 'loop'],
    description: 'Read n. Print a butterfly pattern of height 2n-1 using "*" and spaces. Row i (1-indexed) of the top half has i stars, then 2*(n-i) spaces, then i stars. The middle row is 2n stars. Bottom mirrors top.',
    descriptionZh: '读取 n，打印高度为 2n-1 的蝴蝶图案。上半部分第 i 行（从 1 开始）有 i 个星号、2*(n-i) 个空格、i 个星号。中间行 2n 个星号。下半部分与上半部分镜像。',
    examples: [{ input: '3', output: '*    *\n**  **\n******\n**  **\n*    *' }],
    starterCode: `# TODO: Print a butterfly pattern of size n\n`,
    solution: `# Top half + middle + bottom half (mirror)
n = int(input())
for i in range(1, n + 1):
    print('*' * i + ' ' * (2 * (n - i)) + '*' * i)
for i in range(n - 1, 0, -1):
    print('*' * i + ' ' * (2 * (n - i)) + '*' * i)`,
    hints: ['Top half: stars increase, spaces decrease', 'Middle row has 2*n stars', 'Bottom half mirrors the top'],
    hintsZh: ['上半部分：星号递增，空格递减', '中间行有 2*n 个星号', '下半部分是上半部分的镜像'],
    testCases: [
      { input: '3', expectedOutput: '*    *\n**  **\n******\n**  **\n*    *' },
      { input: '2', expectedOutput: '*  *\n****\n*  *' },
    ],
  },
  {
    id: 'py-ex-2-51',
    title: 'Collatz Conjecture',
    titleZh: 'Collatz 猜想',
    difficulty: 'easy',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['math', 'loop', 'collatz'],
    description: 'Read a positive integer n. Apply the Collatz sequence: if even, divide by 2; if odd, multiply by 3 and add 1. Print each number in the sequence (including n) until you reach 1, space-separated on one line.',
    descriptionZh: '读取正整数 n，应用 Collatz 序列：偶数除以 2，奇数乘 3 加 1。在一行中输出序列中的每个数（包括 n），直到到达 1，用空格分隔。',
    examples: [{ input: '6', output: '6 3 10 5 16 8 4 2 1' }],
    starterCode: `# TODO: Print the Collatz sequence starting from n\n`,
    solution: `# Apply Collatz rules until reaching 1
n = int(input())
seq = [n]
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    seq.append(n)
print(' '.join(map(str, seq)))`,
    hints: ['Use a while loop until n becomes 1', 'Even: n // 2, Odd: 3*n + 1', 'Collect results in a list'],
    hintsZh: ['使用 while 循环直到 n 变为 1', '偶数：n // 2，奇数：3*n + 1', '将结果收集到列表中'],
    testCases: [
      { input: '6', expectedOutput: '6 3 10 5 16 8 4 2 1' },
      { input: '3', expectedOutput: '3 10 5 16 8 4 2 1' },
    ],
  },
  {
    id: 'py-ex-2-52',
    title: 'Perfect Number',
    titleZh: '完美数',
    difficulty: 'easy',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['math', 'divisor'],
    description: 'Read a positive integer n. Print "YES" if it is a perfect number (equal to the sum of its proper divisors), otherwise "NO".',
    descriptionZh: '读取正整数 n。如果它是完美数（等于其真因子之和），输出 "YES"，否则输出 "NO"。',
    examples: [{ input: '6', output: 'YES' }],
    starterCode: `# TODO: Check if n is a perfect number\n`,
    solution: `# Sum all proper divisors and compare to n
n = int(input())
divisor_sum = sum(i for i in range(1, n) if n % i == 0)
print("YES" if divisor_sum == n else "NO")`,
    hints: ['Proper divisors exclude n itself', 'Sum all i where n % i == 0 and i < n', '6 = 1 + 2 + 3'],
    hintsZh: ['真因子不包括 n 本身', '求所有满足 n % i == 0 且 i < n 的 i 之和', '6 = 1 + 2 + 3'],
    testCases: [
      { input: '6', expectedOutput: 'YES' },
      { input: '28', expectedOutput: 'YES' },
      { input: '12', expectedOutput: 'NO' },
    ],
  },
  {
    id: 'py-ex-2-53',
    title: 'Amicable Numbers',
    titleZh: '亲和数',
    difficulty: 'easy',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['math', 'divisor'],
    description: 'Read two positive integers a and b (on separate lines). Print "YES" if they are amicable numbers (sum of proper divisors of a equals b, and sum of proper divisors of b equals a, and a != b), otherwise "NO".',
    descriptionZh: '读取两个正整数 a 和 b（分两行输入）。如果它们是亲和数（a 的真因子之和等于 b，b 的真因子之和等于 a，且 a ≠ b），输出 "YES"，否则输出 "NO"。',
    examples: [{ input: '220\n284', output: 'YES' }],
    starterCode: `# TODO: Check if a and b are amicable numbers\n`,
    solution: `# Sum proper divisors of each, check cross-equality
def sum_divisors(n):
    return sum(i for i in range(1, n) if n % i == 0)

a = int(input())
b = int(input())
print("YES" if a != b and sum_divisors(a) == b and sum_divisors(b) == a else "NO")`,
    hints: ['Write a helper to sum proper divisors', 'Check: sum_divisors(a) == b AND sum_divisors(b) == a', 'a must not equal b'],
    hintsZh: ['写一个辅助函数求真因子之和', '检查：sum_divisors(a) == b 且 sum_divisors(b) == a', 'a 不能等于 b'],
    testCases: [
      { input: '220\n284', expectedOutput: 'YES' },
      { input: '6\n6', expectedOutput: 'NO' },
    ],
  },
  {
    id: 'py-ex-2-54',
    title: 'Multiplication Table',
    titleZh: '乘法表',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['loop', 'format'],
    description: 'Read n. Print an n×n multiplication table. Each number should be right-aligned in a field of width 4.',
    descriptionZh: '读取 n，打印 n×n 乘法表。每个数字右对齐，宽度为 4。',
    examples: [{ input: '3', output: '   1   2   3\n   2   4   6\n   3   6   9' }],
    starterCode: `# TODO: Print an n×n multiplication table\n`,
    solution: `# Nested loop with formatted output
n = int(input())
for i in range(1, n + 1):
    row = ''
    for j in range(1, n + 1):
        row += f'{i * j:4d}'
    print(row)`,
    hints: ['Use nested loops for rows and columns', 'Use f-string with :4d for width-4 alignment', 'Product is i * j'],
    hintsZh: ['使用嵌套循环处理行和列', '使用 f-string 的 :4d 进行4位宽对齐', '乘积为 i * j'],
    testCases: [
      { input: '3', expectedOutput: '   1   2   3\n   2   4   6\n   3   6   9' },
      { input: '2', expectedOutput: '   1   2\n   2   4' },
    ],
  },
  {
    id: 'py-ex-2-55',
    title: 'Decimal to Binary',
    titleZh: '十进制转二进制',
    difficulty: 'easy',
    level: 2,
    category: 'Number Systems',
    categoryZh: '进制转换',
    tags: ['conversion', 'binary'],
    description: 'Read a non-negative integer and print its binary representation (without "0b" prefix).',
    descriptionZh: '读取一个非负整数，输出其二进制表示（不带 "0b" 前缀）。',
    examples: [{ input: '10', output: '1010' }],
    starterCode: `# TODO: Convert decimal to binary\n`,
    solution: `# Use bin() and strip the '0b' prefix
n = int(input())
print(bin(n)[2:])`,
    hints: ['Use bin() to convert to binary', 'bin() returns a string starting with "0b"', 'Slice from index 2 to remove prefix'],
    hintsZh: ['使用 bin() 转换为二进制', 'bin() 返回以 "0b" 开头的字符串', '从索引 2 开始切片去掉前缀'],
    testCases: [
      { input: '10', expectedOutput: '1010' },
      { input: '0', expectedOutput: '0' },
      { input: '255', expectedOutput: '11111111' },
    ],
  },
  {
    id: 'py-ex-2-56',
    title: 'Decimal to Octal and Hex',
    titleZh: '十进制转八进制和十六进制',
    difficulty: 'easy',
    level: 2,
    category: 'Number Systems',
    categoryZh: '进制转换',
    tags: ['conversion', 'octal', 'hex'],
    description: 'Read a non-negative integer. Print its octal and hexadecimal (uppercase) representations on two lines, without prefixes.',
    descriptionZh: '读取一个非负整数，分两行输出其八进制和十六进制（大写）表示，不带前缀。',
    examples: [{ input: '255', output: '377\nFF' }],
    starterCode: `# TODO: Convert to octal and hex\n`,
    solution: `# Use oct() and hex(), strip prefixes
n = int(input())
print(oct(n)[2:])
print(hex(n)[2:].upper())`,
    hints: ['Use oct() and hex()', 'Strip "0o" and "0x" prefixes', 'Use .upper() for uppercase hex'],
    hintsZh: ['使用 oct() 和 hex()', '去掉 "0o" 和 "0x" 前缀', '使用 .upper() 转为大写十六进制'],
    testCases: [
      { input: '255', expectedOutput: '377\nFF' },
      { input: '16', expectedOutput: '20\n10' },
    ],
  },
  {
    id: 'py-ex-2-57',
    title: 'Count Set Bits',
    titleZh: '计数置位位数',
    difficulty: 'easy',
    level: 2,
    category: 'Bit Manipulation',
    categoryZh: '位运算',
    tags: ['binary', 'bits'],
    description: 'Read a non-negative integer. Print the number of 1-bits in its binary representation.',
    descriptionZh: '读取一个非负整数，输出其二进制表示中 1 的个数。',
    examples: [{ input: '7', output: '3' }],
    starterCode: `# TODO: Count the number of 1-bits\n`,
    solution: `# Use bin() and count '1' characters
n = int(input())
print(bin(n).count('1'))`,
    hints: ['Convert to binary string with bin()', 'Use .count("1") to count ones'],
    hintsZh: ['用 bin() 转为二进制字符串', '用 .count("1") 计数 1 的个数'],
    testCases: [
      { input: '7', expectedOutput: '3' },
      { input: '0', expectedOutput: '0' },
      { input: '255', expectedOutput: '8' },
    ],
  },
  {
    id: 'py-ex-2-58',
    title: 'Matrix Diagonal Sum',
    titleZh: '矩阵对角线之和',
    difficulty: 'easy',
    level: 2,
    category: 'Matrix',
    categoryZh: '矩阵',
    tags: ['matrix', 'loop'],
    description: 'Read n, then n lines each with n space-separated integers. Print the sum of both diagonals. If n is odd, do not double-count the center element.',
    descriptionZh: '读取 n，然后读取 n 行，每行 n 个空格分隔的整数。输出两条对角线的元素之和（n 为奇数时不要重复计算中心元素）。',
    examples: [{ input: '3\n1 2 3\n4 5 6\n7 8 9', output: '25' }],
    starterCode: `# TODO: Calculate the sum of both diagonals\n`,
    solution: `# Sum primary and secondary diagonals, subtract center if odd
n = int(input())
matrix = []
for _ in range(n):
    matrix.append(list(map(int, input().split())))
total = 0
for i in range(n):
    total += matrix[i][i]           # primary diagonal
    total += matrix[i][n - 1 - i]   # secondary diagonal
if n % 2 == 1:
    total -= matrix[n // 2][n // 2]  # remove double-counted center
print(total)`,
    hints: ['Primary diagonal: matrix[i][i]', 'Secondary diagonal: matrix[i][n-1-i]', 'If n is odd, center is counted twice'],
    hintsZh: ['主对角线：matrix[i][i]', '副对角线：matrix[i][n-1-i]', 'n 为奇数时中心元素被计算了两次'],
    testCases: [
      { input: '3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '25' },
      { input: '2\n1 2\n3 4', expectedOutput: '10' },
    ],
  },
  {
    id: 'py-ex-2-59',
    title: 'Number Spiral Pattern',
    titleZh: '数字螺旋图案',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['pattern', 'loop'],
    description: 'Read n. Print n rows where row i (1-indexed) contains the number i repeated i times, space-separated.',
    descriptionZh: '读取 n，打印 n 行，第 i 行包含数字 i 重复 i 次，用空格分隔。',
    examples: [{ input: '4', output: '1\n2 2\n3 3 3\n4 4 4 4' }],
    starterCode: `# TODO: Print the number pattern\n`,
    solution: `# Row i has the number i repeated i times
n = int(input())
for i in range(1, n + 1):
    print(' '.join([str(i)] * i))`,
    hints: ['Use [str(i)] * i to repeat', 'Join with spaces'],
    hintsZh: ['使用 [str(i)] * i 重复', '用空格连接'],
    testCases: [
      { input: '4', expectedOutput: '1\n2 2\n3 3 3\n4 4 4 4' },
      { input: '2', expectedOutput: '1\n2 2' },
    ],
  },
  {
    id: 'py-ex-2-60',
    title: 'Calendar Row',
    titleZh: '日历行',
    difficulty: 'easy',
    level: 2,
    category: 'Formatting',
    categoryZh: '格式化',
    tags: ['format', 'loop'],
    description: 'Read a start day (0=Mon, 6=Sun) and number of days in the month. Print a simple calendar row: 7 columns, each 3 chars wide right-aligned. Empty slots before the start day. Print newline after every 7th column.',
    descriptionZh: '读取起始日（0=周一，6=周日）和月份天数。打印简单日历：7 列，每列 3 字符右对齐。起始日之前为空格。每 7 列换行。',
    examples: [{ input: '2\n30', output: '         1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30' }],
    starterCode: `# TODO: Print a simple calendar\n`,
    solution: `# Print calendar with 7-column layout
start = int(input())
days = int(input())
# Print leading spaces
line = '   ' * start
col = start
for d in range(1, days + 1):
    line += f'{d:3d}'
    col += 1
    if col == 7:
        print(line)
        line = ''
        col = 0
if line:
    print(line)`,
    hints: ['Track current column position', 'Print leading blank cells for the start offset', 'Newline after every 7th column'],
    hintsZh: ['跟踪当前列位置', '在起始偏移前打印空白单元格', '每 7 列换行'],
    testCases: [
      { input: '2\n30', expectedOutput: '         1  2  3  4  5\n 6  7  8  9 10 11 12\n13 14 15 16 17 18 19\n20 21 22 23 24 25 26\n27 28 29 30' },
      { input: '0\n7', expectedOutput: ' 1  2  3  4  5  6  7' },
    ],
  },
  {
    id: 'py-ex-2-61',
    title: 'Collatz Steps Count',
    titleZh: 'Collatz 步数',
    difficulty: 'easy',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['math', 'collatz', 'loop'],
    description: 'Read a positive integer n. Print the number of steps it takes to reach 1 using the Collatz sequence (even: n/2, odd: 3n+1).',
    descriptionZh: '读取正整数 n，输出使用 Collatz 序列到达 1 所需的步数（偶数：n/2，奇数：3n+1）。',
    examples: [{ input: '6', output: '8' }],
    starterCode: `# TODO: Count Collatz steps to reach 1\n`,
    solution: `# Count iterations until reaching 1
n = int(input())
steps = 0
while n != 1:
    if n % 2 == 0:
        n //= 2
    else:
        n = 3 * n + 1
    steps += 1
print(steps)`,
    hints: ['Use a counter variable', 'Same Collatz rules: even halve, odd 3n+1', 'Stop when n becomes 1'],
    hintsZh: ['使用计数器变量', '同样的 Collatz 规则：偶数除 2，奇数 3n+1', 'n 变为 1 时停止'],
    testCases: [
      { input: '6', expectedOutput: '8' },
      { input: '1', expectedOutput: '0' },
      { input: '27', expectedOutput: '111' },
    ],
  },

  // ============================================================
  // LEVEL 3: ADVANCED DATA STRUCTURES, CLOSURES, HIGHER-ORDER (15)
  // ============================================================
  {
    id: 'py-ex-3-41',
    title: 'Flatten Nested List',
    titleZh: '展平嵌套列表',
    difficulty: 'medium',
    level: 3,
    category: 'Lists',
    categoryZh: '列表',
    tags: ['list', 'recursion', 'flatten'],
    description: 'Read a Python literal representing a nested list (e.g., "[1,[2,[3]],4]"). Print the flattened list as space-separated values.',
    descriptionZh: '读取一个表示嵌套列表的 Python 字面量（如 "[1,[2,[3]],4]"），输出展平后的列表，用空格分隔。',
    examples: [{ input: '[1,[2,[3]],4]', output: '1 2 3 4' }],
    starterCode: `# TODO: Flatten a nested list\nimport ast\n`,
    solution: `# Recursively flatten any nested list structure
import ast

def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

data = ast.literal_eval(input())
print(' '.join(map(str, flatten(data))))`,
    hints: ['Use ast.literal_eval to parse the input', 'Recursively check if each item is a list', 'Use extend() to add flattened sublists'],
    hintsZh: ['使用 ast.literal_eval 解析输入', '递归检查每个元素是否为列表', '使用 extend() 添加展平的子列表'],
    testCases: [
      { input: '[1,[2,[3]],4]', expectedOutput: '1 2 3 4' },
      { input: '[[1,2],[3,[4,5]]]', expectedOutput: '1 2 3 4 5' },
    ],
  },
  {
    id: 'py-ex-3-42',
    title: 'Deep Merge Dicts',
    titleZh: '深度合并字典',
    difficulty: 'medium',
    level: 3,
    category: 'Dictionaries',
    categoryZh: '字典',
    tags: ['dict', 'recursion', 'merge'],
    description: 'Read two lines, each a Python dict literal. Deep merge them: if both values for a key are dicts, merge recursively; otherwise the second dict\'s value wins. Print the sorted result as key=value pairs, one per line.',
    descriptionZh: '读取两行 Python 字典字面量。深度合并：如果某个键的两个值都是字典则递归合并，否则第二个字典的值优先。按键排序输出 key=value，每行一个。',
    examples: [{ input: '{"a":1,"b":{"x":1}}\n{"b":{"y":2},"c":3}', output: "a=1\nb={'x': 1, 'y': 2}\nc=3" }],
    starterCode: `# TODO: Deep merge two dictionaries\nimport ast\n`,
    solution: `# Recursively merge dicts; second wins for non-dict conflicts
import ast

def deep_merge(d1, d2):
    result = dict(d1)
    for k, v in d2.items():
        if k in result and isinstance(result[k], dict) and isinstance(v, dict):
            result[k] = deep_merge(result[k], v)
        else:
            result[k] = v
    return result

d1 = ast.literal_eval(input())
d2 = ast.literal_eval(input())
merged = deep_merge(d1, d2)
for k in sorted(merged.keys()):
    print(f"{k}={merged[k]}")`,
    hints: ['Use recursion when both values are dicts', 'Start with a copy of d1', 'Iterate d2 and update/merge'],
    hintsZh: ['当两个值都是字典时使用递归', '从 d1 的副本开始', '遍历 d2 并更新/合并'],
    testCases: [
      { input: '{"a":1,"b":{"x":1}}\n{"b":{"y":2},"c":3}', expectedOutput: "a=1\nb={'x': 1, 'y': 2}\nc=3" },
      { input: '{"a":1}\n{"a":2}', expectedOutput: 'a=2' },
    ],
  },
  {
    id: 'py-ex-3-43',
    title: 'Group By Key',
    titleZh: '按键分组',
    difficulty: 'medium',
    level: 3,
    category: 'Dictionaries',
    categoryZh: '字典',
    tags: ['dict', 'groupby', 'list'],
    description: 'Read n, then n lines each with "key value". Group values by key. Print each key (sorted) followed by its values (in input order), space-separated.',
    descriptionZh: '读取 n，然后 n 行 "key value"。按 key 分组。按 key 排序输出，每行为 key 后跟其对应值（按输入顺序），用空格分隔。',
    examples: [{ input: '4\na 1\nb 2\na 3\nb 4', output: 'a 1 3\nb 2 4' }],
    starterCode: `# TODO: Group values by their key\n`,
    solution: `# Use a dict of lists to group values
from collections import defaultdict

n = int(input())
groups = defaultdict(list)
for _ in range(n):
    parts = input().split()
    key, val = parts[0], parts[1]
    groups[key].append(val)
for k in sorted(groups.keys()):
    print(k, ' '.join(groups[k]))`,
    hints: ['Use defaultdict(list)', 'Append each value to the list for its key', 'Sort keys for output'],
    hintsZh: ['使用 defaultdict(list)', '将每个值追加到对应键的列表中', '按键排序输出'],
    testCases: [
      { input: '4\na 1\nb 2\na 3\nb 4', expectedOutput: 'a 1 3\nb 2 4' },
      { input: '3\nx 10\ny 20\nx 30', expectedOutput: 'x 10 30\ny 20' },
    ],
  },
  {
    id: 'py-ex-3-44',
    title: 'Partition List',
    titleZh: '列表分区',
    difficulty: 'medium',
    level: 3,
    category: 'Lists',
    categoryZh: '列表',
    tags: ['list', 'partition', 'function'],
    description: 'Read a list of integers (space-separated) and a pivot integer (on the next line). Print two lines: first line has elements <= pivot, second line has elements > pivot. Preserve original order.',
    descriptionZh: '读取一行整数（空格分隔）和一个基准值。输出两行：第一行是 <= 基准的元素，第二行是 > 基准的元素。保持原始顺序。',
    examples: [{ input: '3 1 4 1 5 9 2 6\n4', output: '3 1 4 1 2\n5 9 6' }],
    starterCode: `# TODO: Partition list around a pivot\n`,
    solution: `# Split list into two based on pivot comparison
nums = list(map(int, input().split()))
pivot = int(input())
left = [x for x in nums if x <= pivot]
right = [x for x in nums if x > pivot]
print(' '.join(map(str, left)))
print(' '.join(map(str, right)))`,
    hints: ['Use list comprehensions with conditions', 'One for <= pivot, one for > pivot', 'Preserve original order'],
    hintsZh: ['使用带条件的列表推导式', '一个用于 <= 基准，一个用于 > 基准', '保持原始顺序'],
    testCases: [
      { input: '3 1 4 1 5 9 2 6\n4', expectedOutput: '3 1 4 1 2\n5 9 6' },
      { input: '5 3 8 1\n3', expectedOutput: '3 1\n5 8' },
    ],
  },
  {
    id: 'py-ex-3-45',
    title: 'Sliding Window Maximum',
    titleZh: '滑动窗口最大值',
    difficulty: 'medium',
    level: 3,
    category: 'Lists',
    categoryZh: '列表',
    tags: ['list', 'sliding-window'],
    description: 'Read a list of integers (space-separated) and a window size k. Print the maximum of each window of size k as you slide from left to right, space-separated.',
    descriptionZh: '读取一行整数和窗口大小 k。从左到右滑动窗口，输出每个大小为 k 的窗口中的最大值，空格分隔。',
    examples: [{ input: '1 3 -1 -3 5 3 6 7\n3', output: '3 3 5 5 6 7' }],
    starterCode: `# TODO: Find the maximum in each sliding window\n`,
    solution: `# Slide a window of size k and find max each time
from collections import deque

nums = list(map(int, input().split()))
k = int(input())
dq = deque()  # stores indices
result = []
for i in range(len(nums)):
    # Remove elements outside the window
    while dq and dq[0] < i - k + 1:
        dq.popleft()
    # Remove smaller elements from the back
    while dq and nums[dq[-1]] < nums[i]:
        dq.pop()
    dq.append(i)
    if i >= k - 1:
        result.append(str(nums[dq[0]]))
print(' '.join(result))`,
    hints: ['Use a deque to track indices of potential maxima', 'Remove elements outside the current window', 'Remove elements smaller than the current one from the back'],
    hintsZh: ['使用双端队列跟踪可能的最大值索引', '移除不在当前窗口内的元素', '从队尾移除比当前元素小的元素'],
    testCases: [
      { input: '1 3 -1 -3 5 3 6 7\n3', expectedOutput: '3 3 5 5 6 7' },
      { input: '1 2 3 4\n2', expectedOutput: '2 3 4' },
    ],
  },
  {
    id: 'py-ex-3-46',
    title: 'Chunk List',
    titleZh: '列表分块',
    difficulty: 'medium',
    level: 3,
    category: 'Lists',
    categoryZh: '列表',
    tags: ['list', 'chunk', 'slice'],
    description: 'Read a list of integers (space-separated) and chunk size k. Print each chunk on its own line, space-separated. The last chunk may be smaller.',
    descriptionZh: '读取一行整数和块大小 k。每块一行输出（空格分隔）。最后一块可能较小。',
    examples: [{ input: '1 2 3 4 5\n2', output: '1 2\n3 4\n5' }],
    starterCode: `# TODO: Split list into chunks of size k\n`,
    solution: `# Use slicing to break list into chunks
nums = list(map(int, input().split()))
k = int(input())
for i in range(0, len(nums), k):
    print(' '.join(map(str, nums[i:i+k])))`,
    hints: ['Use range(0, len, k) to step through', 'Slice nums[i:i+k] for each chunk', 'Python slicing handles the last smaller chunk automatically'],
    hintsZh: ['使用 range(0, len, k) 步进', '用 nums[i:i+k] 切片每块', 'Python 切片会自动处理最后一个较小的块'],
    testCases: [
      { input: '1 2 3 4 5\n2', expectedOutput: '1 2\n3 4\n5' },
      { input: '1 2 3 4 5 6\n3', expectedOutput: '1 2 3\n4 5 6' },
    ],
  },
  {
    id: 'py-ex-3-47',
    title: 'Rotate Matrix 90°',
    titleZh: '矩阵旋转90度',
    difficulty: 'medium',
    level: 3,
    category: 'Matrix',
    categoryZh: '矩阵',
    tags: ['matrix', 'rotate', 'zip'],
    description: 'Read n, then an n×n matrix (each row as space-separated integers). Print the matrix rotated 90° clockwise.',
    descriptionZh: '读取 n，然后读取 n×n 矩阵。输出顺时针旋转 90° 后的矩阵。',
    examples: [{ input: '3\n1 2 3\n4 5 6\n7 8 9', output: '7 4 1\n8 5 2\n9 6 3' }],
    starterCode: `# TODO: Rotate the matrix 90 degrees clockwise\n`,
    solution: `# Transpose then reverse each row = 90° clockwise rotation
n = int(input())
matrix = []
for _ in range(n):
    matrix.append(list(map(int, input().split())))
# Rotate: zip columns bottom-to-top
rotated = [list(row) for row in zip(*matrix[::-1])]
for row in rotated:
    print(' '.join(map(str, row)))`,
    hints: ['Transpose + reverse rows = 90° clockwise', 'zip(*matrix[::-1]) does both steps', 'Reverse the matrix first, then transpose with zip'],
    hintsZh: ['转置 + 反转行 = 顺时针 90°', 'zip(*matrix[::-1]) 同时完成两步', '先反转矩阵再用 zip 转置'],
    testCases: [
      { input: '3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '7 4 1\n8 5 2\n9 6 3' },
      { input: '2\n1 2\n3 4', expectedOutput: '3 1\n4 2' },
    ],
  },
  {
    id: 'py-ex-3-48',
    title: 'Spiral Matrix',
    titleZh: '螺旋矩阵',
    difficulty: 'medium',
    level: 3,
    category: 'Matrix',
    categoryZh: '矩阵',
    tags: ['matrix', 'spiral'],
    description: 'Read n, then an n×n matrix. Print all elements in spiral order (clockwise from top-left), space-separated on one line.',
    descriptionZh: '读取 n，然后读取 n×n 矩阵。按螺旋顺序（从左上角顺时针）输出所有元素，空格分隔。',
    examples: [{ input: '3\n1 2 3\n4 5 6\n7 8 9', output: '1 2 3 6 9 8 7 4 5' }],
    starterCode: `# TODO: Print matrix elements in spiral order\n`,
    solution: `# Peel layers: top row, right col, bottom row, left col
n = int(input())
matrix = []
for _ in range(n):
    matrix.append(list(map(int, input().split())))

result = []
top, bottom, left, right = 0, n - 1, 0, n - 1
while top <= bottom and left <= right:
    for j in range(left, right + 1):
        result.append(matrix[top][j])
    top += 1
    for i in range(top, bottom + 1):
        result.append(matrix[i][right])
    right -= 1
    if top <= bottom:
        for j in range(right, left - 1, -1):
            result.append(matrix[bottom][j])
        bottom -= 1
    if left <= right:
        for i in range(bottom, top - 1, -1):
            result.append(matrix[i][left])
        left += 1
print(' '.join(map(str, result)))`,
    hints: ['Use four boundaries: top, bottom, left, right', 'Traverse top row, right column, bottom row, left column', 'Shrink boundaries after each traversal'],
    hintsZh: ['使用四个边界：上、下、左、右', '依次遍历顶行、右列、底行、左列', '每次遍历后收缩边界'],
    testCases: [
      { input: '3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '1 2 3 6 9 8 7 4 5' },
      { input: '2\n1 2\n3 4', expectedOutput: '1 2 4 3' },
    ],
  },
  {
    id: 'py-ex-3-49',
    title: 'Transpose Matrix',
    titleZh: '矩阵转置',
    difficulty: 'medium',
    level: 3,
    category: 'Matrix',
    categoryZh: '矩阵',
    tags: ['matrix', 'transpose', 'zip'],
    description: 'Read r and c, then r lines each with c space-separated integers. Print the transposed matrix (c rows, r columns).',
    descriptionZh: '读取 r 和 c，然后 r 行每行 c 个整数。输出转置矩阵（c 行 r 列）。',
    examples: [{ input: '2 3\n1 2 3\n4 5 6', output: '1 4\n2 5\n3 6' }],
    starterCode: `# TODO: Transpose the matrix\n`,
    solution: `# Use zip(*matrix) to transpose rows and columns
r, c = map(int, input().split())
matrix = []
for _ in range(r):
    matrix.append(list(map(int, input().split())))
for row in zip(*matrix):
    print(' '.join(map(str, row)))`,
    hints: ['zip(*matrix) transposes a matrix', 'It turns rows into columns', 'Output has c rows and r columns'],
    hintsZh: ['zip(*matrix) 可以转置矩阵', '它将行变为列', '输出有 c 行 r 列'],
    testCases: [
      { input: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 4\n2 5\n3 6' },
      { input: '3 2\n1 2\n3 4\n5 6', expectedOutput: '1 3 5\n2 4 6' },
    ],
  },
  {
    id: 'py-ex-3-50',
    title: 'Closure Counter',
    titleZh: '闭包计数器',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['closure', 'function'],
    description: 'Read n operations, each "inc" or "get". Implement a counter using a closure: "inc" increments by 1, "get" prints the current count. Start at 0.',
    descriptionZh: '读取 n 个操作，每个为 "inc" 或 "get"。用闭包实现计数器："inc" 加 1，"get" 输出当前计数。从 0 开始。',
    examples: [{ input: '5\ninc\ninc\nget\ninc\nget', output: '2\n3' }],
    starterCode: `# TODO: Implement a counter using a closure\n`,
    solution: `# A closure captures mutable state via a list or nonlocal
def make_counter():
    count = [0]
    def counter(op):
        if op == 'inc':
            count[0] += 1
        elif op == 'get':
            print(count[0])
    return counter

n = int(input())
c = make_counter()
for _ in range(n):
    c(input())`,
    hints: ['Use a list [0] to hold mutable state in the closure', 'Or use nonlocal keyword', 'Return the inner function'],
    hintsZh: ['在闭包中用列表 [0] 保存可变状态', '或使用 nonlocal 关键字', '返回内部函数'],
    testCases: [
      { input: '5\ninc\ninc\nget\ninc\nget', expectedOutput: '2\n3' },
      { input: '3\nget\ninc\nget', expectedOutput: '0\n1' },
    ],
  },
  {
    id: 'py-ex-3-51',
    title: 'Higher-Order: Apply Twice',
    titleZh: '高阶函数：应用两次',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['higher-order', 'function'],
    description: 'Read an integer n and a function name ("double" or "square"). Apply the function twice to n and print the result. double(x)=2*x, square(x)=x*x.',
    descriptionZh: '读取整数 n 和函数名（"double" 或 "square"）。对 n 连续应用该函数两次并输出结果。double(x)=2*x，square(x)=x*x。',
    examples: [{ input: '3\ndouble', output: '12' }],
    starterCode: `# TODO: Apply a function twice using higher-order functions\n`,
    solution: `# Define apply_twice as a higher-order function
def apply_twice(f, x):
    return f(f(x))

def double(x):
    return 2 * x

def square(x):
    return x * x

n = int(input())
name = input()
fn = double if name == 'double' else square
print(apply_twice(fn, n))`,
    hints: ['Define a function that takes a function and a value', 'Apply f(f(x))', 'Map the name string to the actual function'],
    hintsZh: ['定义一个接受函数和值的函数', '计算 f(f(x))', '将函数名映射到实际函数'],
    testCases: [
      { input: '3\ndouble', expectedOutput: '12' },
      { input: '3\nsquare', expectedOutput: '81' },
    ],
  },
  {
    id: 'py-ex-3-52',
    title: 'Manual Memoization',
    titleZh: '手动记忆化',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['memoization', 'recursion', 'dict'],
    description: 'Read n. Compute the n-th Fibonacci number using recursion with manual memoization (a dictionary cache). Print the result.',
    descriptionZh: '读取 n。使用递归和手动记忆化（字典缓存）计算第 n 个斐波那契数并输出。',
    examples: [{ input: '10', output: '55' }],
    starterCode: `# TODO: Compute Fibonacci with manual memoization\n`,
    solution: `# Use a dict as cache for memoized Fibonacci
cache = {}

def fib(n):
    if n in cache:
        return cache[n]
    if n <= 1:
        result = n
    else:
        result = fib(n - 1) + fib(n - 2)
    cache[n] = result
    return result

n = int(input())
print(fib(n))`,
    hints: ['Create a dictionary to store computed results', 'Check cache before computing', 'Store result in cache before returning'],
    hintsZh: ['创建字典存储已计算的结果', '计算前先检查缓存', '返回前将结果存入缓存'],
    testCases: [
      { input: '10', expectedOutput: '55' },
      { input: '0', expectedOutput: '0' },
      { input: '20', expectedOutput: '6765' },
    ],
  },
  {
    id: 'py-ex-3-53',
    title: 'Generator Pipeline',
    titleZh: '生成器管道',
    difficulty: 'medium',
    level: 3,
    category: 'Generators',
    categoryZh: '生成器',
    tags: ['generator', 'pipeline', 'yield'],
    description: 'Read a list of integers. Build a generator pipeline: first filter out negatives, then square each remaining value, then keep only values < 100. Print the results space-separated.',
    descriptionZh: '读取一行整数。构建生成器管道：先过滤负数，然后对剩余值平方，再保留 < 100 的值。输出结果，空格分隔。',
    examples: [{ input: '-3 2 5 -1 10 7', output: '4 25 49' }],
    starterCode: `# TODO: Build a generator pipeline\n`,
    solution: `# Chain generators: filter negatives -> square -> filter < 100
def filter_positive(nums):
    for n in nums:
        if n >= 0:
            yield n

def square(nums):
    for n in nums:
        yield n * n

def filter_less_than(nums, limit):
    for n in nums:
        if n < limit:
            yield n

nums = list(map(int, input().split()))
pipeline = filter_less_than(square(filter_positive(nums)), 100)
print(' '.join(map(str, pipeline)))`,
    hints: ['Use yield to create generators', 'Chain generators by passing one as input to the next', 'Each generator processes one element at a time'],
    hintsZh: ['使用 yield 创建生成器', '将一个生成器作为下一个的输入来链接', '每个生成器一次处理一个元素'],
    testCases: [
      { input: '-3 2 5 -1 10 7', expectedOutput: '4 25 49' },
      { input: '1 2 3 11', expectedOutput: '1 4 9' },
    ],
  },
  {
    id: 'py-ex-3-54',
    title: 'Custom Map and Filter',
    titleZh: '自定义 Map 和 Filter',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['higher-order', 'map', 'filter'],
    description: 'Read a list of integers. Using only your own my_map and my_filter (no built-in map/filter), double each number then keep only those > 10. Print result space-separated.',
    descriptionZh: '读取一行整数。仅使用自定义的 my_map 和 my_filter（不用内置 map/filter），将每个数翻倍后保留 > 10 的。输出结果，空格分隔。',
    examples: [{ input: '3 5 6 2 8', output: '12 16' }],
    starterCode: `# TODO: Implement my_map and my_filter\n`,
    solution: `# Implement map and filter from scratch
def my_map(func, lst):
    return [func(x) for x in lst]

def my_filter(pred, lst):
    return [x for x in lst if pred(x)]

nums = list(map(int, input().split()))
doubled = my_map(lambda x: x * 2, nums)
result = my_filter(lambda x: x > 10, doubled)
print(' '.join(map(str, result)))`,
    hints: ['my_map applies a function to each element', 'my_filter keeps elements where predicate is True', 'Use list comprehensions inside your implementations'],
    hintsZh: ['my_map 对每个元素应用函数', 'my_filter 保留谓词为 True 的元素', '在实现内部使用列表推导式'],
    testCases: [
      { input: '3 5 6 2 8', expectedOutput: '12 16' },
      { input: '1 2 3 4 5 6', expectedOutput: '12' },
    ],
  },
  {
    id: 'py-ex-3-55',
    title: 'Compose Functions',
    titleZh: '函数组合',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['higher-order', 'compose', 'closure'],
    description: 'Read an integer n. Define compose(f, g) that returns a new function h where h(x) = f(g(x)). Compose add1 (x+1) and double (2*x): first double then add1. Print the result of applying the composed function to n.',
    descriptionZh: '读取整数 n。定义 compose(f, g) 返回新函数 h，其中 h(x) = f(g(x))。组合 add1(x+1) 和 double(2*x)：先 double 再 add1。输出对 n 应用组合函数的结果。',
    examples: [{ input: '5', output: '11' }],
    starterCode: `# TODO: Implement function composition\n`,
    solution: `# compose(f, g) returns h(x) = f(g(x))
def compose(f, g):
    def h(x):
        return f(g(x))
    return h

def add1(x):
    return x + 1

def double(x):
    return 2 * x

n = int(input())
# add1(double(n)) = 2*n + 1
fn = compose(add1, double)
print(fn(n))`,
    hints: ['compose returns a new function', 'The returned function calls g first, then f', 'add1(double(5)) = add1(10) = 11'],
    hintsZh: ['compose 返回一个新函数', '返回的函数先调用 g 再调用 f', 'add1(double(5)) = add1(10) = 11'],
    testCases: [
      { input: '5', expectedOutput: '11' },
      { input: '0', expectedOutput: '1' },
      { input: '10', expectedOutput: '21' },
    ],
  },
];
