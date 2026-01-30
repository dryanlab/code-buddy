import type { PythonExercise } from './python-exercises';

export const PYTHON_EXERCISES_P2: PythonExercise[] = [
  // ============================================================
  // LEVEL 1 EXTRAS: String Methods, Slicing, Operators (25 exercises)
  // ============================================================
  {
    id: 'py-ex-1-61',
    title: 'String Upper',
    titleZh: '字符串转大写',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'upper'],
    description: 'Read a string and print it in uppercase.',
    descriptionZh: '读取一个字符串并将其转换为大写后输出。',
    examples: [{ input: 'hello', output: 'HELLO' }],
    starterCode: `# TODO: Convert input string to uppercase\n`,
    solution: `# Use .upper() to convert to uppercase
s = input()
print(s.upper())`,
    hints: ['Use the .upper() method', 'Call it on the string variable'],
    hintsZh: ['使用 .upper() 方法', '在字符串变量上调用它'],
    testCases: [
      { input: 'hello', expectedOutput: 'HELLO' },
      { input: 'Python', expectedOutput: 'PYTHON' },
    ],
  },
  {
    id: 'py-ex-1-62',
    title: 'String Lower',
    titleZh: '字符串转小写',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'lower'],
    description: 'Read a string and print it in lowercase.',
    descriptionZh: '读取一个字符串并将其转换为小写后输出。',
    examples: [{ input: 'HELLO', output: 'hello' }],
    starterCode: `# TODO: Convert input string to lowercase\n`,
    solution: `# Use .lower() to convert to lowercase
s = input()
print(s.lower())`,
    hints: ['Use the .lower() method', 'It returns a new string'],
    hintsZh: ['使用 .lower() 方法', '它返回一个新字符串'],
    testCases: [
      { input: 'HELLO', expectedOutput: 'hello' },
      { input: 'PyThOn', expectedOutput: 'python' },
    ],
  },
  {
    id: 'py-ex-1-63',
    title: 'String Strip',
    titleZh: '去除空白',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'strip'],
    description: 'Read a string and print it with leading and trailing whitespace removed.',
    descriptionZh: '读取字符串并去除前后空白后输出。',
    examples: [{ input: '  hello  ', output: 'hello' }],
    starterCode: `# TODO: Strip whitespace from the input\n`,
    solution: `# Use .strip() to remove leading/trailing whitespace
s = input()
print(s.strip())`,
    hints: ['Use the .strip() method', 'It removes spaces, tabs, and newlines from both ends'],
    hintsZh: ['使用 .strip() 方法', '它会去除两端的空格、制表符和换行符'],
    testCases: [
      { input: '  hello  ', expectedOutput: 'hello' },
      { input: '  world', expectedOutput: 'world' },
    ],
  },
  {
    id: 'py-ex-1-64',
    title: 'String Replace',
    titleZh: '字符串替换',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'replace'],
    description: 'Read a string and two words (old, new) on separate lines. Replace all occurrences of old with new and print the result.',
    descriptionZh: '读取一个字符串和两个单词（旧词、新词），将字符串中所有旧词替换为新词后输出。',
    examples: [{ input: 'hello world\nworld\nPython', output: 'hello Python' }],
    starterCode: `# TODO: Replace old word with new word in the string\n`,
    solution: `# Use .replace(old, new) to substitute substrings
s = input()
old = input()
new = input()
print(s.replace(old, new))`,
    hints: ['Use .replace(old, new)', 'Read three lines of input'],
    hintsZh: ['使用 .replace(old, new)', '读取三行输入'],
    testCases: [
      { input: 'hello world\nworld\nPython', expectedOutput: 'hello Python' },
      { input: 'aaa\na\nb', expectedOutput: 'bbb' },
    ],
  },
  {
    id: 'py-ex-1-65',
    title: 'String Find',
    titleZh: '查找子串',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'find'],
    description: 'Read a string and a substring. Print the index of the first occurrence, or -1 if not found.',
    descriptionZh: '读取字符串和子串。输出子串首次出现的索引，找不到则输出 -1。',
    examples: [{ input: 'hello world\nworld', output: '6' }],
    starterCode: `# TODO: Find the index of a substring\n`,
    solution: `# Use .find() to locate a substring
s = input()
sub = input()
print(s.find(sub))`,
    hints: ['Use .find() method', 'It returns -1 if not found'],
    hintsZh: ['使用 .find() 方法', '找不到时返回 -1'],
    testCases: [
      { input: 'hello world\nworld', expectedOutput: '6' },
      { input: 'hello\nxyz', expectedOutput: '-1' },
    ],
  },
  {
    id: 'py-ex-1-66',
    title: 'String Count',
    titleZh: '计算子串出现次数',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'count'],
    description: 'Read a string and a character. Print how many times the character appears.',
    descriptionZh: '读取字符串和一个字符。输出该字符出现的次数。',
    examples: [{ input: 'banana\na', output: '3' }],
    starterCode: `# TODO: Count occurrences of a character\n`,
    solution: `# Use .count() to count substring occurrences
s = input()
c = input()
print(s.count(c))`,
    hints: ['Use .count() method', 'It works for any substring, not just single characters'],
    hintsZh: ['使用 .count() 方法', '它适用于任何子串，不仅是单个字符'],
    testCases: [
      { input: 'banana\na', expectedOutput: '3' },
      { input: 'hello\nl', expectedOutput: '2' },
    ],
  },
  {
    id: 'py-ex-1-67',
    title: 'String Starts With',
    titleZh: '字符串前缀检查',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['string', 'startswith'],
    description: 'Read a string and a prefix. Print True if the string starts with the prefix, else False.',
    descriptionZh: '读取字符串和前缀。如果字符串以该前缀开头则输出 True，否则输出 False。',
    examples: [{ input: 'hello\nhel', output: 'True' }],
    starterCode: `# TODO: Check if string starts with prefix\n`,
    solution: `# Use .startswith() for prefix checking
s = input()
prefix = input()
print(s.startswith(prefix))`,
    hints: ['Use .startswith() method', 'It returns a boolean'],
    hintsZh: ['使用 .startswith() 方法', '它返回布尔值'],
    testCases: [
      { input: 'hello\nhel', expectedOutput: 'True' },
      { input: 'hello\nworld', expectedOutput: 'False' },
    ],
  },
  {
    id: 'py-ex-1-68',
    title: 'String Slicing: First N',
    titleZh: '字符串切片：前N个字符',
    difficulty: 'easy',
    level: 1,
    category: 'Slicing',
    categoryZh: '切片',
    tags: ['string', 'slicing'],
    description: 'Read a string and an integer n. Print the first n characters.',
    descriptionZh: '读取字符串和整数 n。输出前 n 个字符。',
    examples: [{ input: 'hello\n3', output: 'hel' }],
    starterCode: `# TODO: Print first n characters using slicing\n`,
    solution: `# Use slicing s[:n] to get first n characters
s = input()
n = int(input())
print(s[:n])`,
    hints: ['Use s[:n] for the first n characters', 'Remember to convert n to int'],
    hintsZh: ['使用 s[:n] 获取前 n 个字符', '记得将 n 转为整数'],
    testCases: [
      { input: 'hello\n3', expectedOutput: 'hel' },
      { input: 'Python\n4', expectedOutput: 'Pyth' },
    ],
  },
  {
    id: 'py-ex-1-69',
    title: 'String Slicing: Last N',
    titleZh: '字符串切片：后N个字符',
    difficulty: 'easy',
    level: 1,
    category: 'Slicing',
    categoryZh: '切片',
    tags: ['string', 'slicing'],
    description: 'Read a string and an integer n. Print the last n characters.',
    descriptionZh: '读取字符串和整数 n。输出后 n 个字符。',
    examples: [{ input: 'hello\n3', output: 'llo' }],
    starterCode: `# TODO: Print last n characters using slicing\n`,
    solution: `# Use slicing s[-n:] to get last n characters
s = input()
n = int(input())
print(s[-n:])`,
    hints: ['Use negative indexing: s[-n:]', 'This gets the last n characters'],
    hintsZh: ['使用负数索引：s[-n:]', '这会获取最后 n 个字符'],
    testCases: [
      { input: 'hello\n3', expectedOutput: 'llo' },
      { input: 'Python\n2', expectedOutput: 'on' },
    ],
  },
  {
    id: 'py-ex-1-70',
    title: 'String Slicing: Reverse',
    titleZh: '字符串切片：反转',
    difficulty: 'easy',
    level: 1,
    category: 'Slicing',
    categoryZh: '切片',
    tags: ['string', 'slicing', 'reverse'],
    description: 'Read a string and print it reversed using slicing.',
    descriptionZh: '读取字符串并使用切片将其反转后输出。',
    examples: [{ input: 'hello', output: 'olleh' }],
    starterCode: `# TODO: Reverse the string using slicing\n`,
    solution: `# Use [::-1] to reverse a string
s = input()
print(s[::-1])`,
    hints: ['Use s[::-1] to reverse', 'The step of -1 goes backwards'],
    hintsZh: ['使用 s[::-1] 反转', '步长 -1 表示倒序'],
    testCases: [
      { input: 'hello', expectedOutput: 'olleh' },
      { input: 'Python', expectedOutput: 'nohtyP' },
    ],
  },
  {
    id: 'py-ex-1-71',
    title: 'String Slicing: Every Other',
    titleZh: '字符串切片：隔一取一',
    difficulty: 'easy',
    level: 1,
    category: 'Slicing',
    categoryZh: '切片',
    tags: ['string', 'slicing'],
    description: 'Read a string and print every other character (indices 0, 2, 4, ...).',
    descriptionZh: '读取字符串并输出每隔一个的字符（索引 0, 2, 4, ...）。',
    examples: [{ input: 'abcdef', output: 'ace' }],
    starterCode: `# TODO: Print every other character\n`,
    solution: `# Use step in slicing: s[::2]
s = input()
print(s[::2])`,
    hints: ['Use s[::2] with step 2', 'This picks characters at even indices'],
    hintsZh: ['使用 s[::2]，步长为 2', '这会选取偶数索引的字符'],
    testCases: [
      { input: 'abcdef', expectedOutput: 'ace' },
      { input: 'Python', expectedOutput: 'Pto' },
    ],
  },
  {
    id: 'py-ex-1-72',
    title: 'Escape Characters: Newline',
    titleZh: '转义字符：换行',
    difficulty: 'easy',
    level: 1,
    category: 'Output',
    categoryZh: '输出',
    tags: ['print', 'escape'],
    description: 'Print "Line1" and "Line2" on separate lines using a single print statement with \\n.',
    descriptionZh: '使用单个 print 语句和 \\n 在不同行输出 "Line1" 和 "Line2"。',
    examples: [{ input: '', output: 'Line1\nLine2' }],
    starterCode: `# TODO: Print two lines using \\n in one print\n`,
    solution: `# Use \\n for newline inside a string
print("Line1\\nLine2")`,
    hints: ['Use \\n inside the string for a newline', 'Only use one print() call'],
    hintsZh: ['在字符串中使用 \\n 换行', '只用一个 print() 调用'],
    testCases: [
      { input: '', expectedOutput: 'Line1\nLine2' },
    ],
  },
  {
    id: 'py-ex-1-73',
    title: 'Escape Characters: Tab',
    titleZh: '转义字符：制表符',
    difficulty: 'easy',
    level: 1,
    category: 'Output',
    categoryZh: '输出',
    tags: ['print', 'escape'],
    description: 'Read two words on separate lines. Print them separated by a tab character.',
    descriptionZh: '读取两个单词（分行）。用制表符分隔输出。',
    examples: [{ input: 'Hello\nWorld', output: 'Hello\tWorld' }],
    starterCode: `# TODO: Print two words separated by a tab\n`,
    solution: `# Use \\t for a tab character
a = input()
b = input()
print(f"{a}\\t{b}")`,
    hints: ['Use \\t for tab', 'You can use f-string or concatenation'],
    hintsZh: ['使用 \\t 表示制表符', '可以用 f-string 或拼接'],
    testCases: [
      { input: 'Hello\nWorld', expectedOutput: 'Hello\tWorld' },
      { input: 'A\nB', expectedOutput: 'A\tB' },
    ],
  },
  {
    id: 'py-ex-1-74',
    title: 'Multiple Assignment',
    titleZh: '多重赋值',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['assignment', 'variables'],
    description: 'Read three integers on one line. Using multiple assignment, assign them to a, b, c and print their sum.',
    descriptionZh: '在一行读取三个整数。使用多重赋值分别赋给 a, b, c 并输出它们的和。',
    examples: [{ input: '1 2 3', output: '6' }],
    starterCode: `# TODO: Use multiple assignment to read three numbers\n`,
    solution: `# Multiple assignment unpacks values
a, b, c = map(int, input().split())
print(a + b + c)`,
    hints: ['Use a, b, c = map(int, input().split())', 'This unpacks three values at once'],
    hintsZh: ['使用 a, b, c = map(int, input().split())', '这会一次解包三个值'],
    testCases: [
      { input: '1 2 3', expectedOutput: '6' },
      { input: '10 20 30', expectedOutput: '60' },
    ],
  },
  {
    id: 'py-ex-1-75',
    title: 'Modulo Operator',
    titleZh: '取余运算符',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['modulo', 'arithmetic'],
    description: 'Read two integers a and b. Print a % b (the remainder of a divided by b).',
    descriptionZh: '读取两个整数 a 和 b。输出 a % b（a 除以 b 的余数）。',
    examples: [{ input: '7\n3', output: '1' }],
    starterCode: `# TODO: Print the remainder of a divided by b\n`,
    solution: `# Use % for modulo (remainder)
a = int(input())
b = int(input())
print(a % b)`,
    hints: ['Use the % operator', 'It gives the remainder after division'],
    hintsZh: ['使用 % 运算符', '它给出除法的余数'],
    testCases: [
      { input: '7\n3', expectedOutput: '1' },
      { input: '10\n4', expectedOutput: '2' },
    ],
  },
  {
    id: 'py-ex-1-76',
    title: 'Floor Division',
    titleZh: '整除运算',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['floor-division', 'arithmetic'],
    description: 'Read two integers a and b. Print a // b (floor division).',
    descriptionZh: '读取两个整数 a 和 b。输出 a // b（整除结果）。',
    examples: [{ input: '7\n3', output: '2' }],
    starterCode: `# TODO: Print the floor division of a by b\n`,
    solution: `# Use // for floor division
a = int(input())
b = int(input())
print(a // b)`,
    hints: ['Use the // operator', 'It rounds down to the nearest integer'],
    hintsZh: ['使用 // 运算符', '它向下取整到最近的整数'],
    testCases: [
      { input: '7\n3', expectedOutput: '2' },
      { input: '10\n3', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-1-77',
    title: 'Exponentiation',
    titleZh: '幂运算',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['exponent', 'arithmetic'],
    description: 'Read base and exponent. Print base ** exponent.',
    descriptionZh: '读取底数和指数。输出底数的指数次方。',
    examples: [{ input: '2\n10', output: '1024' }],
    starterCode: `# TODO: Calculate and print base raised to exponent\n`,
    solution: `# Use ** for exponentiation
base = int(input())
exp = int(input())
print(base ** exp)`,
    hints: ['Use the ** operator', '2 ** 10 means 2 to the power of 10'],
    hintsZh: ['使用 ** 运算符', '2 ** 10 表示 2 的 10 次方'],
    testCases: [
      { input: '2\n10', expectedOutput: '1024' },
      { input: '3\n4', expectedOutput: '81' },
    ],
  },
  {
    id: 'py-ex-1-78',
    title: 'Type Check',
    titleZh: '类型检查',
    difficulty: 'easy',
    level: 1,
    category: 'Types',
    categoryZh: '类型',
    tags: ['type', 'basics'],
    description: 'Read a value. Try to convert it to int. If successful, print "int". Otherwise try float and print "float". Otherwise print "str".',
    descriptionZh: '读取一个值。尝试转为 int，成功则输出 "int"；否则尝试 float 输出 "float"；否则输出 "str"。',
    examples: [{ input: '42', output: 'int' }],
    starterCode: `# TODO: Determine the type of the input value\n`,
    solution: `# Try converting to determine type
val = input()
try:
    int(val)
    print("int")
except ValueError:
    try:
        float(val)
        print("float")
    except ValueError:
        print("str")`,
    hints: ['Use try/except to test conversions', 'Try int first, then float'],
    hintsZh: ['使用 try/except 测试转换', '先试 int，再试 float'],
    testCases: [
      { input: '42', expectedOutput: 'int' },
      { input: '3.14', expectedOutput: 'float' },
      { input: 'hello', expectedOutput: 'str' },
    ],
  },
  {
    id: 'py-ex-1-79',
    title: 'String Length',
    titleZh: '字符串长度',
    difficulty: 'easy',
    level: 1,
    category: 'String Methods',
    categoryZh: '字符串方法',
    tags: ['len', 'string'],
    description: 'Read a string and print its length.',
    descriptionZh: '读取字符串并输出其长度。',
    examples: [{ input: 'hello', output: '5' }],
    starterCode: `# TODO: Print the length of the input string\n`,
    solution: `# Use len() to get string length
s = input()
print(len(s))`,
    hints: ['Use the len() function', 'It works on strings, lists, etc.'],
    hintsZh: ['使用 len() 函数', '它适用于字符串、列表等'],
    testCases: [
      { input: 'hello', expectedOutput: '5' },
      { input: 'Python', expectedOutput: '6' },
    ],
  },
  {
    id: 'py-ex-1-80',
    title: 'Math: Square Root',
    titleZh: '数学：平方根',
    difficulty: 'easy',
    level: 1,
    category: 'Math',
    categoryZh: '数学',
    tags: ['math', 'import'],
    description: 'Read an integer and print its square root as an integer (floor). Use math.isqrt().',
    descriptionZh: '读取一个整数并输出其整数平方根（向下取整）。使用 math.isqrt()。',
    examples: [{ input: '16', output: '4' }],
    starterCode: `# TODO: Import math and compute integer square root\n`,
    solution: `# Use math.isqrt() for integer square root
import math
n = int(input())
print(math.isqrt(n))`,
    hints: ['Import the math module', 'Use math.isqrt() for integer square root'],
    hintsZh: ['导入 math 模块', '使用 math.isqrt() 计算整数平方根'],
    testCases: [
      { input: '16', expectedOutput: '4' },
      { input: '10', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-1-81',
    title: 'Math: Absolute Value',
    titleZh: '数学：绝对值',
    difficulty: 'easy',
    level: 1,
    category: 'Math',
    categoryZh: '数学',
    tags: ['abs', 'math'],
    description: 'Read an integer and print its absolute value.',
    descriptionZh: '读取一个整数并输出其绝对值。',
    examples: [{ input: '-5', output: '5' }],
    starterCode: `# TODO: Print the absolute value\n`,
    solution: `# Use abs() for absolute value
n = int(input())
print(abs(n))`,
    hints: ['Use the abs() built-in function', 'abs(-5) returns 5'],
    hintsZh: ['使用内置函数 abs()', 'abs(-5) 返回 5'],
    testCases: [
      { input: '-5', expectedOutput: '5' },
      { input: '3', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-1-82',
    title: 'Boolean Logic: AND',
    titleZh: '布尔逻辑：与',
    difficulty: 'easy',
    level: 1,
    category: 'Boolean',
    categoryZh: '布尔',
    tags: ['boolean', 'and'],
    description: 'Read two integers. Print True if both are positive, else False.',
    descriptionZh: '读取两个整数。如果两个都为正数则输出 True，否则输出 False。',
    examples: [{ input: '3\n5', output: 'True' }],
    starterCode: `# TODO: Check if both numbers are positive\n`,
    solution: `# Use 'and' for boolean conjunction
a = int(input())
b = int(input())
print(a > 0 and b > 0)`,
    hints: ['Use the "and" keyword', 'Check a > 0 and b > 0'],
    hintsZh: ['使用 "and" 关键字', '检查 a > 0 and b > 0'],
    testCases: [
      { input: '3\n5', expectedOutput: 'True' },
      { input: '-1\n5', expectedOutput: 'False' },
    ],
  },
  {
    id: 'py-ex-1-83',
    title: 'Boolean Logic: OR',
    titleZh: '布尔逻辑：或',
    difficulty: 'easy',
    level: 1,
    category: 'Boolean',
    categoryZh: '布尔',
    tags: ['boolean', 'or'],
    description: 'Read two integers. Print True if at least one is even, else False.',
    descriptionZh: '读取两个整数。如果至少一个为偶数则输出 True，否则输出 False。',
    examples: [{ input: '3\n4', output: 'True' }],
    starterCode: `# TODO: Check if at least one number is even\n`,
    solution: `# Use 'or' for boolean disjunction
a = int(input())
b = int(input())
print(a % 2 == 0 or b % 2 == 0)`,
    hints: ['Use the "or" keyword', 'Check if a % 2 == 0 or b % 2 == 0'],
    hintsZh: ['使用 "or" 关键字', '检查 a % 2 == 0 or b % 2 == 0'],
    testCases: [
      { input: '3\n4', expectedOutput: 'True' },
      { input: '3\n5', expectedOutput: 'False' },
    ],
  },
  {
    id: 'py-ex-1-84',
    title: 'Ternary Expression',
    titleZh: '三元表达式',
    difficulty: 'easy',
    level: 1,
    category: 'Conditionals',
    categoryZh: '条件',
    tags: ['ternary', 'conditional'],
    description: 'Read an integer. Print "even" if it is even, "odd" otherwise. Use a ternary expression.',
    descriptionZh: '读取一个整数。如果是偶数输出 "even"，否则输出 "odd"。使用三元表达式。',
    examples: [{ input: '4', output: 'even' }],
    starterCode: `# TODO: Use a ternary expression to check even/odd\n`,
    solution: `# Ternary: value_if_true if condition else value_if_false
n = int(input())
print("even" if n % 2 == 0 else "odd")`,
    hints: ['Syntax: x if condition else y', 'Check n % 2 == 0'],
    hintsZh: ['语法：x if condition else y', '检查 n % 2 == 0'],
    testCases: [
      { input: '4', expectedOutput: 'even' },
      { input: '7', expectedOutput: 'odd' },
    ],
  },
  {
    id: 'py-ex-1-85',
    title: 'Formatted Output',
    titleZh: '格式化输出',
    difficulty: 'easy',
    level: 1,
    category: 'Output',
    categoryZh: '输出',
    tags: ['format', 'f-string'],
    description: 'Read a name and age (on separate lines). Print "Name: <name>, Age: <age>".',
    descriptionZh: '读取姓名和年龄（分行）。输出 "Name: <name>, Age: <age>"。',
    examples: [{ input: 'Alice\n25', output: 'Name: Alice, Age: 25' }],
    starterCode: `# TODO: Format and print name and age\n`,
    solution: `# Use f-string for formatted output
name = input()
age = input()
print(f"Name: {name}, Age: {age}")`,
    hints: ['Use f-string: f"Name: {name}, Age: {age}"', 'Read name and age on separate lines'],
    hintsZh: ['使用 f-string：f"Name: {name}, Age: {age}"', '分行读取姓名和年龄'],
    testCases: [
      { input: 'Alice\n25', expectedOutput: 'Name: Alice, Age: 25' },
      { input: 'Bob\n30', expectedOutput: 'Name: Bob, Age: 30' },
    ],
  },

  // ============================================================
  // LEVEL 2 EXTRAS: Patterns, Enumerate, Zip, etc. (15 exercises)
  // ============================================================
  {
    id: 'py-ex-2-32',
    title: 'Diamond Pattern',
    titleZh: '菱形图案',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['loops', 'pattern'],
    description: 'Read an odd integer n. Print a diamond of stars with width n. Each line is centered.',
    descriptionZh: '读取一个奇数 n。打印宽度为 n 的菱形星号图案。每行居中。',
    examples: [{ input: '5', output: '  *\n ***\n*****\n ***\n  *' }],
    starterCode: `# TODO: Print a diamond pattern of width n\n`,
    solution: `# Build diamond: top half expands, bottom half shrinks
n = int(input())
mid = n // 2
for i in range(mid + 1):
    stars = 2 * i + 1
    print(' ' * (mid - i) + '*' * stars)
for i in range(mid - 1, -1, -1):
    stars = 2 * i + 1
    print(' ' * (mid - i) + '*' * stars)`,
    hints: ['Split into top half and bottom half', 'Use spaces for centering', 'Stars per row: 1, 3, 5, ... then back down'],
    hintsZh: ['分为上半部分和下半部分', '用空格居中', '每行星号数：1, 3, 5, ... 然后递减'],
    testCases: [
      { input: '5', expectedOutput: '  *\n ***\n*****\n ***\n  *' },
      { input: '3', expectedOutput: ' *\n***\n *' },
    ],
  },
  {
    id: 'py-ex-2-33',
    title: 'Hourglass Pattern',
    titleZh: '沙漏图案',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['loops', 'pattern'],
    description: 'Read an odd integer n. Print an hourglass: starts with n stars, shrinks to 1, then expands back to n.',
    descriptionZh: '读取奇数 n。打印沙漏：从 n 个星号开始缩小到 1，再扩大回 n。',
    examples: [{ input: '5', output: '*****\n ***\n  *\n ***\n*****' }],
    starterCode: `# TODO: Print an hourglass pattern\n`,
    solution: `# Hourglass: shrink then expand
n = int(input())
mid = n // 2
for i in range(mid, -1, -1):
    stars = 2 * i + 1
    print(' ' * (mid - i) + '*' * stars)
for i in range(1, mid + 1):
    stars = 2 * i + 1
    print(' ' * (mid - i) + '*' * stars)`,
    hints: ['It is the reverse of a diamond', 'Top half shrinks, bottom half expands'],
    hintsZh: ['它是菱形的反转', '上半部分缩小，下半部分扩大'],
    testCases: [
      { input: '5', expectedOutput: '*****\n ***\n  *\n ***\n*****' },
      { input: '3', expectedOutput: '***\n *\n***' },
    ],
  },
  {
    id: 'py-ex-2-34',
    title: 'Number Pyramid',
    titleZh: '数字金字塔',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['loops', 'pattern'],
    description: 'Read n. Print a pyramid where row i has the number i repeated i times, centered in width n*2-1.',
    descriptionZh: '读取 n。打印金字塔，第 i 行为数字 i 重复 i 次，在宽度 n*2-1 内居中。',
    examples: [{ input: '3', output: '  1\n 22\n333' }],
    starterCode: `# TODO: Print a number pyramid\n`,
    solution: `# Each row i has str(i) * i, right-justified in width n
n = int(input())
for i in range(1, n + 1):
    row = str(i) * i
    print(row.rjust(n))`,
    hints: ['Use str(i) * i to repeat the digit', 'Use .rjust(n) for right alignment'],
    hintsZh: ['使用 str(i) * i 重复数字', '使用 .rjust(n) 右对齐'],
    testCases: [
      { input: '3', expectedOutput: '  1\n 22\n333' },
      { input: '4', expectedOutput: '   1\n  22\n 333\n4444' },
    ],
  },
  {
    id: 'py-ex-2-35',
    title: 'Enumerate List',
    titleZh: '枚举列表',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['enumerate', 'list'],
    description: 'Read space-separated words. Print each word with its index, one per line as "index: word".',
    descriptionZh: '读取空格分隔的单词。每行输出 "索引: 单词"。',
    examples: [{ input: 'a b c', output: '0: a\n1: b\n2: c' }],
    starterCode: `# TODO: Use enumerate to print index and word\n`,
    solution: `# Use enumerate() to get index-value pairs
words = input().split()
for i, w in enumerate(words):
    print(f"{i}: {w}")`,
    hints: ['Use enumerate() in the for loop', 'It returns (index, value) pairs'],
    hintsZh: ['在 for 循环中使用 enumerate()', '它返回 (索引, 值) 对'],
    testCases: [
      { input: 'a b c', expectedOutput: '0: a\n1: b\n2: c' },
      { input: 'x y', expectedOutput: '0: x\n1: y' },
    ],
  },
  {
    id: 'py-ex-2-36',
    title: 'Zip Two Lists',
    titleZh: '合并两个列表',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['zip', 'list'],
    description: 'Read two lines of space-separated words. Print pairs from both lists, one per line as "word1 word2".',
    descriptionZh: '读取两行空格分隔的单词。每行输出一对 "单词1 单词2"。',
    examples: [{ input: 'a b c\n1 2 3', output: 'a 1\nb 2\nc 3' }],
    starterCode: `# TODO: Use zip to pair elements from two lists\n`,
    solution: `# Use zip() to iterate over two lists in parallel
list1 = input().split()
list2 = input().split()
for a, b in zip(list1, list2):
    print(f"{a} {b}")`,
    hints: ['Use zip(list1, list2)', 'It pairs elements by index'],
    hintsZh: ['使用 zip(list1, list2)', '它按索引配对元素'],
    testCases: [
      { input: 'a b c\n1 2 3', expectedOutput: 'a 1\nb 2\nc 3' },
      { input: 'x y\np q', expectedOutput: 'x p\ny q' },
    ],
  },
  {
    id: 'py-ex-2-37',
    title: 'While Sentinel',
    titleZh: 'While 哨兵循环',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while', 'sentinel'],
    description: 'Read integers one per line until 0 is entered. Print the sum of all non-zero values.',
    descriptionZh: '逐行读取整数直到输入 0。输出所有非零值的和。',
    examples: [{ input: '3\n5\n2\n0', output: '10' }],
    starterCode: `# TODO: Sum integers until 0 is entered\n`,
    solution: `# Use while with sentinel value 0
total = 0
while True:
    n = int(input())
    if n == 0:
        break
    total += n
print(total)`,
    hints: ['Use while True with break', '0 is the sentinel (stop signal)'],
    hintsZh: ['使用 while True 和 break', '0 是哨兵值（停止信号）'],
    testCases: [
      { input: '3\n5\n2\n0', expectedOutput: '10' },
      { input: '1\n0', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-2-38',
    title: 'Digit Sum',
    titleZh: '数字各位之和',
    difficulty: 'easy',
    level: 2,
    category: 'Math',
    categoryZh: '数学',
    tags: ['digits', 'math'],
    description: 'Read a non-negative integer. Print the sum of its digits.',
    descriptionZh: '读取一个非负整数。输出各位数字之和。',
    examples: [{ input: '123', output: '6' }],
    starterCode: `# TODO: Calculate the sum of digits\n`,
    solution: `# Convert to string and sum each digit
n = input()
print(sum(int(d) for d in n))`,
    hints: ['Convert the number to a string', 'Iterate over each character and convert back to int'],
    hintsZh: ['将数字转为字符串', '遍历每个字符并转回整数'],
    testCases: [
      { input: '123', expectedOutput: '6' },
      { input: '9999', expectedOutput: '36' },
    ],
  },
  {
    id: 'py-ex-2-39',
    title: 'Reverse Number',
    titleZh: '反转数字',
    difficulty: 'easy',
    level: 2,
    category: 'Math',
    categoryZh: '数学',
    tags: ['reverse', 'number'],
    description: 'Read a positive integer. Print its digits reversed (no leading zeros).',
    descriptionZh: '读取一个正整数。反转其数字后输出（无前导零）。',
    examples: [{ input: '1230', output: '321' }],
    starterCode: `# TODO: Reverse the digits of the number\n`,
    solution: `# Reverse string and convert to int to remove leading zeros
n = input()
print(int(n[::-1]))`,
    hints: ['Reverse the string with [::-1]', 'Convert to int to remove leading zeros'],
    hintsZh: ['用 [::-1] 反转字符串', '转为 int 去除前导零'],
    testCases: [
      { input: '1230', expectedOutput: '321' },
      { input: '456', expectedOutput: '654' },
    ],
  },
  {
    id: 'py-ex-2-40',
    title: 'Count Digits',
    titleZh: '计算位数',
    difficulty: 'easy',
    level: 2,
    category: 'Math',
    categoryZh: '数学',
    tags: ['digits', 'len'],
    description: 'Read a non-negative integer. Print how many digits it has.',
    descriptionZh: '读取一个非负整数。输出它有几位数。',
    examples: [{ input: '12345', output: '5' }],
    starterCode: `# TODO: Count the number of digits\n`,
    solution: `# Use len() on the string representation
n = input()
print(len(n))`,
    hints: ['The number is already a string from input()', 'Use len()'],
    hintsZh: ['input() 读取的就是字符串', '使用 len()'],
    testCases: [
      { input: '12345', expectedOutput: '5' },
      { input: '0', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-2-41',
    title: 'Sum of Squares Series',
    titleZh: '平方和级数',
    difficulty: 'easy',
    level: 2,
    category: 'Series',
    categoryZh: '级数',
    tags: ['math', 'series'],
    description: 'Read n. Print 1² + 2² + ... + n².',
    descriptionZh: '读取 n。输出 1² + 2² + ... + n²。',
    examples: [{ input: '3', output: '14' }],
    starterCode: `# TODO: Calculate sum of squares from 1 to n\n`,
    solution: `# Sum of squares using generator expression
n = int(input())
print(sum(i * i for i in range(1, n + 1)))`,
    hints: ['Use sum() with a generator', 'Square each i: i * i or i**2'],
    hintsZh: ['使用 sum() 和生成器', '每个 i 求平方：i * i 或 i**2'],
    testCases: [
      { input: '3', expectedOutput: '14' },
      { input: '5', expectedOutput: '55' },
    ],
  },
  {
    id: 'py-ex-2-42',
    title: 'Harmonic Series (Truncated)',
    titleZh: '调和级数（截断）',
    difficulty: 'easy',
    level: 2,
    category: 'Series',
    categoryZh: '级数',
    tags: ['math', 'series', 'float'],
    description: 'Read n. Print the sum 1/1 + 1/2 + ... + 1/n rounded to 2 decimal places.',
    descriptionZh: '读取 n。输出 1/1 + 1/2 + ... + 1/n 的和，保留 2 位小数。',
    examples: [{ input: '4', output: '2.08' }],
    starterCode: `# TODO: Calculate harmonic sum to n terms\n`,
    solution: `# Sum 1/i for i in 1..n, round to 2 decimals
n = int(input())
result = sum(1 / i for i in range(1, n + 1))
print(f"{result:.2f}")`,
    hints: ['Sum 1/i for each i from 1 to n', 'Use f-string with :.2f for rounding'],
    hintsZh: ['对 1 到 n 的每个 i 求 1/i 的和', '使用 f-string 的 :.2f 格式化'],
    testCases: [
      { input: '4', expectedOutput: '2.08' },
      { input: '1', expectedOutput: '1.00' },
    ],
  },
  {
    id: 'py-ex-2-43',
    title: 'List Comprehension: Squares',
    titleZh: '列表推导：平方',
    difficulty: 'easy',
    level: 2,
    category: 'Lists',
    categoryZh: '列表',
    tags: ['list-comprehension'],
    description: 'Read space-separated integers. Print a list of their squares.',
    descriptionZh: '读取空格分隔的整数。输出它们平方值组成的列表。',
    examples: [{ input: '1 2 3', output: '[1, 4, 9]' }],
    starterCode: `# TODO: Create list of squares using list comprehension\n`,
    solution: `# List comprehension for squares
nums = list(map(int, input().split()))
print([x ** 2 for x in nums])`,
    hints: ['Use [x**2 for x in nums]', 'Print the resulting list directly'],
    hintsZh: ['使用 [x**2 for x in nums]', '直接打印结果列表'],
    testCases: [
      { input: '1 2 3', expectedOutput: '[1, 4, 9]' },
      { input: '4 5', expectedOutput: '[16, 25]' },
    ],
  },
  {
    id: 'py-ex-2-44',
    title: 'List Comprehension: Filter',
    titleZh: '列表推导：过滤',
    difficulty: 'easy',
    level: 2,
    category: 'Lists',
    categoryZh: '列表',
    tags: ['list-comprehension', 'filter'],
    description: 'Read space-separated integers. Print a list of only the even numbers.',
    descriptionZh: '读取空格分隔的整数。输出仅包含偶数的列表。',
    examples: [{ input: '1 2 3 4 5 6', output: '[2, 4, 6]' }],
    starterCode: `# TODO: Filter even numbers using list comprehension\n`,
    solution: `# List comprehension with condition
nums = list(map(int, input().split()))
print([x for x in nums if x % 2 == 0])`,
    hints: ['Add a condition: if x % 2 == 0', 'Goes at the end of the comprehension'],
    hintsZh: ['添加条件：if x % 2 == 0', '放在推导式末尾'],
    testCases: [
      { input: '1 2 3 4 5 6', expectedOutput: '[2, 4, 6]' },
      { input: '1 3 5', expectedOutput: '[]' },
    ],
  },
  {
    id: 'py-ex-2-45',
    title: 'Dictionary from Two Lists',
    titleZh: '从两个列表创建字典',
    difficulty: 'easy',
    level: 2,
    category: 'Dicts',
    categoryZh: '字典',
    tags: ['dict', 'zip'],
    description: 'Read two lines: keys (words) and values (integers). Print the dict mapping keys to values.',
    descriptionZh: '读取两行：键（单词）和值（整数）。输出键值映射的字典。',
    examples: [{ input: 'a b c\n1 2 3', output: "{'a': 1, 'b': 2, 'c': 3}" }],
    starterCode: `# TODO: Create a dictionary from keys and values\n`,
    solution: `# Use zip and dict() to combine keys and values
keys = input().split()
values = list(map(int, input().split()))
print(dict(zip(keys, values)))`,
    hints: ['Use zip(keys, values) to pair them', 'Wrap with dict() to create dictionary'],
    hintsZh: ['使用 zip(keys, values) 配对', '用 dict() 包装创建字典'],
    testCases: [
      { input: 'a b c\n1 2 3', expectedOutput: "{'a': 1, 'b': 2, 'c': 3}" },
      { input: 'x y\n10 20', expectedOutput: "{'x': 10, 'y': 20}" },
    ],
  },
  {
    id: 'py-ex-2-46',
    title: 'Fibonacci Series',
    titleZh: '斐波那契数列',
    difficulty: 'easy',
    level: 2,
    category: 'Series',
    categoryZh: '级数',
    tags: ['fibonacci', 'loop'],
    description: 'Read n. Print the first n Fibonacci numbers space-separated (starting 0, 1, 1, 2, ...).',
    descriptionZh: '读取 n。输出前 n 个斐波那契数，空格分隔（从 0, 1, 1, 2, ... 开始）。',
    examples: [{ input: '6', output: '0 1 1 2 3 5' }],
    starterCode: `# TODO: Generate first n Fibonacci numbers\n`,
    solution: `# Iterative Fibonacci sequence
n = int(input())
a, b = 0, 1
result = []
for _ in range(n):
    result.append(a)
    a, b = b, a + b
print(' '.join(map(str, result)))`,
    hints: ['Start with a=0, b=1', 'Each step: a, b = b, a + b', 'Collect results in a list'],
    hintsZh: ['从 a=0, b=1 开始', '每步：a, b = b, a + b', '将结果收集到列表中'],
    testCases: [
      { input: '6', expectedOutput: '0 1 1 2 3 5' },
      { input: '1', expectedOutput: '0' },
    ],
  },
];
