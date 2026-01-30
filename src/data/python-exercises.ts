export interface PythonExercise {
  id: string;
  title: string;
  titleZh: string;
  difficulty: 'easy' | 'medium' | 'hard';
  level: number;
  category: string;
  categoryZh: string;
  tags: string[];
  description: string;
  descriptionZh: string;
  examples: { input: string; output: string }[];
  starterCode: string;
  solution: string;
  hints: string[];
  hintsZh: string[];
  testCases: { input: string; expectedOutput: string }[];
}

export const PYTHON_EXERCISES: PythonExercise[] = [
  // ============================================================
  // LEVEL 1: BASICS (25 exercises)
  // ============================================================
  {
    id: 'py-ex-1-01',
    title: 'Hello World',
    titleZh: 'Hello World',
    difficulty: 'easy',
    level: 1,
    category: 'Output',
    categoryZh: '输出',
    tags: ['print', 'basics'],
    description: 'Write a program that prints "Hello, World!" to the console.',
    descriptionZh: '编写一个程序，在控制台输出 "Hello, World!"。',
    examples: [{ input: '', output: 'Hello, World!' }],
    starterCode: `# TODO: Print "Hello, World!"
`,
    solution: `# Use the print() function to output text
print("Hello, World!")`,
    hints: ['Use the print() function', 'Put your text inside quotes'],
    hintsZh: ['使用 print() 函数', '将文本放在引号中'],
    testCases: [
      { input: '', expectedOutput: 'Hello, World!' },
      { input: '', expectedOutput: 'Hello, World!' },
    ],
  },
  {
    id: 'py-ex-1-02',
    title: 'Print Your Name',
    titleZh: '打印你的名字',
    difficulty: 'easy',
    level: 1,
    category: 'Input/Output',
    categoryZh: '输入输出',
    tags: ['input', 'print', 'string'],
    description: 'Read a name from input and print "Hello, <name>!".',
    descriptionZh: '从输入读取一个名字，然后输出 "Hello, <name>!"。',
    examples: [{ input: 'Alice', output: 'Hello, Alice!' }],
    starterCode: `# TODO: Read a name using input() and print a greeting
`,
    solution: `# Read name from user, then format a greeting
name = input()
print(f"Hello, {name}!")`,
    hints: ['Use input() to read a string', 'Use f-string to format the output', 'Don\'t forget the exclamation mark'],
    hintsZh: ['使用 input() 读取字符串', '使用 f-string 来格式化输出', '不要忘记感叹号'],
    testCases: [
      { input: 'Alice', expectedOutput: 'Hello, Alice!' },
      { input: 'Bob', expectedOutput: 'Hello, Bob!' },
    ],
  },
  {
    id: 'py-ex-1-03',
    title: 'Add Two Numbers',
    titleZh: '两数之和',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'input', 'arithmetic'],
    description: 'Read two integers from input and print their sum.',
    descriptionZh: '从输入读取两个整数，然后输出它们的和。',
    examples: [{ input: '3\n5', output: '8' }],
    starterCode: `# TODO: Read two integers and print their sum
`,
    solution: `# Read two integers and compute their sum
a = int(input())
b = int(input())
print(a + b)`,
    hints: ['Use int() to convert input to integer', 'Use + operator to add', 'Print the result with print()'],
    hintsZh: ['使用 int() 将输入转换为整数', '使用 + 运算符相加', '使用 print() 输出结果'],
    testCases: [
      { input: '3\n5', expectedOutput: '8' },
      { input: '10\n20', expectedOutput: '30' },
    ],
  },
  {
    id: 'py-ex-1-04',
    title: 'Subtract Two Numbers',
    titleZh: '两数之差',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'arithmetic'],
    description: 'Read two integers and print the result of the first minus the second.',
    descriptionZh: '读取两个整数，输出第一个减第二个的结果。',
    examples: [{ input: '10\n3', output: '7' }],
    starterCode: `# TODO: Read two integers and print the difference (a - b)
`,
    solution: `# Subtract second number from first
a = int(input())
b = int(input())
print(a - b)`,
    hints: ['Use int(input()) to read integers', 'Use the - operator'],
    hintsZh: ['使用 int(input()) 读取整数', '使用 - 运算符'],
    testCases: [
      { input: '10\n3', expectedOutput: '7' },
      { input: '5\n8', expectedOutput: '-3' },
    ],
  },
  {
    id: 'py-ex-1-05',
    title: 'Multiply Two Numbers',
    titleZh: '两数之积',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'arithmetic'],
    description: 'Read two integers and print their product.',
    descriptionZh: '读取两个整数，输出它们的乘积。',
    examples: [{ input: '4\n5', output: '20' }],
    starterCode: `# TODO: Read two integers and print their product
`,
    solution: `# Multiply two integers
a = int(input())
b = int(input())
print(a * b)`,
    hints: ['Use * for multiplication', 'Convert input to int first'],
    hintsZh: ['使用 * 进行乘法', '先将输入转换为 int'],
    testCases: [
      { input: '4\n5', expectedOutput: '20' },
      { input: '7\n3', expectedOutput: '21' },
    ],
  },
  {
    id: 'py-ex-1-06',
    title: 'Integer Division',
    titleZh: '整数除法',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'division'],
    description: 'Read two integers and print the result of integer division (a // b).',
    descriptionZh: '读取两个整数，输出整数除法的结果 (a // b)。',
    examples: [{ input: '10\n3', output: '3' }],
    starterCode: `# TODO: Read two integers and print integer division result
`,
    solution: `# Integer division using //
a = int(input())
b = int(input())
print(a // b)`,
    hints: ['Use // for integer (floor) division', 'Regular / gives a float result'],
    hintsZh: ['使用 // 进行整数（向下取整）除法', '普通 / 会给出浮点数结果'],
    testCases: [
      { input: '10\n3', expectedOutput: '3' },
      { input: '7\n2', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-1-07',
    title: 'Modulo Operation',
    titleZh: '取模运算',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'modulo'],
    description: 'Read two integers and print the remainder of a divided by b.',
    descriptionZh: '读取两个整数，输出 a 除以 b 的余数。',
    examples: [{ input: '10\n3', output: '1' }],
    starterCode: `# TODO: Read two integers and print a % b
`,
    solution: `# Remainder using % operator
a = int(input())
b = int(input())
print(a % b)`,
    hints: ['Use the % operator for modulo', 'a % b gives the remainder of a / b'],
    hintsZh: ['使用 % 运算符取余', 'a % b 给出 a 除以 b 的余数'],
    testCases: [
      { input: '10\n3', expectedOutput: '1' },
      { input: '15\n4', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-1-08',
    title: 'Float Division',
    titleZh: '浮点除法',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['float', 'division'],
    description: 'Read two numbers and print their float division result with 2 decimal places.',
    descriptionZh: '读取两个数字，输出浮点除法结果，保留两位小数。',
    examples: [{ input: '10\n3', output: '3.33' }],
    starterCode: `# TODO: Read two numbers, divide, and print with 2 decimal places
`,
    solution: `# Float division with formatting
a = float(input())
b = float(input())
print(f"{a / b:.2f}")`,
    hints: ['Use / for float division', 'Use f-string with :.2f for 2 decimal places'],
    hintsZh: ['使用 / 进行浮点除法', '使用 f-string 的 :.2f 保留两位小数'],
    testCases: [
      { input: '10\n3', expectedOutput: '3.33' },
      { input: '7\n2', expectedOutput: '3.50' },
    ],
  },
  {
    id: 'py-ex-1-09',
    title: 'Power Calculation',
    titleZh: '幂运算',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['power', 'arithmetic'],
    description: 'Read base and exponent, print base raised to the power of exponent.',
    descriptionZh: '读取底数和指数，输出底数的指数次幂。',
    examples: [{ input: '2\n10', output: '1024' }],
    starterCode: `# TODO: Read base and exponent, print base ** exponent
`,
    solution: `# Power using ** operator
base = int(input())
exp = int(input())
print(base ** exp)`,
    hints: ['Use ** for exponentiation', 'You can also use pow(base, exp)'],
    hintsZh: ['使用 ** 进行幂运算', '也可以使用 pow(base, exp)'],
    testCases: [
      { input: '2\n10', expectedOutput: '1024' },
      { input: '3\n4', expectedOutput: '81' },
    ],
  },
  {
    id: 'py-ex-1-10',
    title: 'Variable Swap',
    titleZh: '变量交换',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['variables', 'swap'],
    description: 'Read two integers, swap them, and print them on separate lines.',
    descriptionZh: '读取两个整数，交换它们，然后分别输出。',
    examples: [{ input: '3\n5', output: '5\n3' }],
    starterCode: `# TODO: Read two integers, swap them, print each on a new line
`,
    solution: `# Python's elegant tuple swap
a = int(input())
b = int(input())
a, b = b, a
print(a)
print(b)`,
    hints: ['Python supports tuple unpacking: a, b = b, a', 'No temp variable needed in Python'],
    hintsZh: ['Python 支持元组解包：a, b = b, a', 'Python 中不需要临时变量'],
    testCases: [
      { input: '3\n5', expectedOutput: '5\n3' },
      { input: '10\n20', expectedOutput: '20\n10' },
    ],
  },
  {
    id: 'py-ex-1-11',
    title: 'Check Data Type',
    titleZh: '检查数据类型',
    difficulty: 'easy',
    level: 1,
    category: 'Types',
    categoryZh: '类型',
    tags: ['type', 'basics'],
    description: 'Read an input string. If it can be converted to an integer print "int", if to a float print "float", otherwise print "str".',
    descriptionZh: '读取一个输入字符串。如果能转换为整数输出 "int"，如果能转换为浮点数输出 "float"，否则输出 "str"。',
    examples: [{ input: '42', output: 'int' }, { input: '3.14', output: 'float' }],
    starterCode: `# TODO: Read input and determine if it's int, float, or str
`,
    solution: `# Check type by trying conversions
s = input()
try:
    int(s)
    print("int")
except ValueError:
    try:
        float(s)
        print("float")
    except ValueError:
        print("str")`,
    hints: ['Use try/except to test conversions', 'Check int first, then float', 'If both fail, it\'s a string'],
    hintsZh: ['使用 try/except 测试转换', '先检查 int，再检查 float', '如果都失败，就是字符串'],
    testCases: [
      { input: '42', expectedOutput: 'int' },
      { input: '3.14', expectedOutput: 'float' },
      { input: 'hello', expectedOutput: 'str' },
    ],
  },
  {
    id: 'py-ex-1-12',
    title: 'String Length',
    titleZh: '字符串长度',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'len'],
    description: 'Read a string and print its length.',
    descriptionZh: '读取一个字符串并输出其长度。',
    examples: [{ input: 'hello', output: '5' }],
    starterCode: `# TODO: Read a string and print its length
`,
    solution: `# Use len() to get string length
s = input()
print(len(s))`,
    hints: ['Use len() function', 'input() returns a string'],
    hintsZh: ['使用 len() 函数', 'input() 返回字符串'],
    testCases: [
      { input: 'hello', expectedOutput: '5' },
      { input: 'Python', expectedOutput: '6' },
    ],
  },
  {
    id: 'py-ex-1-13',
    title: 'String Uppercase',
    titleZh: '字符串大写',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'upper'],
    description: 'Read a string and print it in uppercase.',
    descriptionZh: '读取一个字符串并以大写形式输出。',
    examples: [{ input: 'hello', output: 'HELLO' }],
    starterCode: `# TODO: Read a string and print it in uppercase
`,
    solution: `# Use upper() method
s = input()
print(s.upper())`,
    hints: ['Strings have an upper() method', 'It returns a new string'],
    hintsZh: ['字符串有 upper() 方法', '它返回一个新字符串'],
    testCases: [
      { input: 'hello', expectedOutput: 'HELLO' },
      { input: 'Python', expectedOutput: 'PYTHON' },
    ],
  },
  {
    id: 'py-ex-1-14',
    title: 'String Reverse',
    titleZh: '字符串反转',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'slicing'],
    description: 'Read a string and print it reversed.',
    descriptionZh: '读取一个字符串并反转输出。',
    examples: [{ input: 'hello', output: 'olleh' }],
    starterCode: `# TODO: Read a string and print it reversed
`,
    solution: `# Use slicing to reverse
s = input()
print(s[::-1])`,
    hints: ['Python slicing s[::-1] reverses a string', 'You can also use reversed()'],
    hintsZh: ['Python 切片 s[::-1] 可以反转字符串', '也可以使用 reversed()'],
    testCases: [
      { input: 'hello', expectedOutput: 'olleh' },
      { input: 'Python', expectedOutput: 'nohtyP' },
    ],
  },
  {
    id: 'py-ex-1-15',
    title: 'F-String Formatting',
    titleZh: 'F-String 格式化',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['f-string', 'format'],
    description: 'Read a name and age, then print "My name is <name> and I am <age> years old." using an f-string.',
    descriptionZh: '读取姓名和年龄，使用 f-string 输出 "My name is <name> and I am <age> years old."。',
    examples: [{ input: 'Alice\n25', output: 'My name is Alice and I am 25 years old.' }],
    starterCode: `# TODO: Read name and age, print formatted message using f-string
`,
    solution: `# Use f-string for clean formatting
name = input()
age = input()
print(f"My name is {name} and I am {age} years old.")`,
    hints: ['f-strings use f"..." syntax', 'Put variables inside {curly braces}'],
    hintsZh: ['f-string 使用 f"..." 语法', '将变量放在 {花括号} 中'],
    testCases: [
      { input: 'Alice\n25', expectedOutput: 'My name is Alice and I am 25 years old.' },
      { input: 'Bob\n30', expectedOutput: 'My name is Bob and I am 30 years old.' },
    ],
  },
  {
    id: 'py-ex-1-16',
    title: 'String Repeat',
    titleZh: '字符串重复',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'multiplication'],
    description: 'Read a string and an integer n. Print the string repeated n times.',
    descriptionZh: '读取一个字符串和整数 n，输出字符串重复 n 次的结果。',
    examples: [{ input: 'ha\n3', output: 'hahaha' }],
    starterCode: `# TODO: Read a string and number, print string repeated n times
`,
    solution: `# String multiplication with *
s = input()
n = int(input())
print(s * n)`,
    hints: ['Use * to repeat a string', 's * 3 gives "sss" if s is "s"'],
    hintsZh: ['使用 * 来重复字符串', '如果 s 是 "s"，s * 3 就是 "sss"'],
    testCases: [
      { input: 'ha\n3', expectedOutput: 'hahaha' },
      { input: 'ab\n4', expectedOutput: 'abababab' },
    ],
  },
  {
    id: 'py-ex-1-17',
    title: 'String Slicing',
    titleZh: '字符串切片',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'slicing'],
    description: 'Read a string and two integers start and end. Print the substring from index start to end (exclusive).',
    descriptionZh: '读取一个字符串和两个整数 start 和 end，输出从 start 到 end（不含）的子串。',
    examples: [{ input: 'HelloWorld\n2\n7', output: 'lloWo' }],
    starterCode: `# TODO: Read string, start, end; print the slice s[start:end]
`,
    solution: `# String slicing with [start:end]
s = input()
start = int(input())
end = int(input())
print(s[start:end])`,
    hints: ['Use s[start:end] for slicing', 'End index is exclusive'],
    hintsZh: ['使用 s[start:end] 进行切片', 'end 索引不包含在内'],
    testCases: [
      { input: 'HelloWorld\n2\n7', expectedOutput: 'lloWo' },
      { input: 'Python\n0\n3', expectedOutput: 'Pyt' },
    ],
  },
  {
    id: 'py-ex-1-18',
    title: 'Type Conversion: Int to Float',
    titleZh: '类型转换：整数转浮点',
    difficulty: 'easy',
    level: 1,
    category: 'Types',
    categoryZh: '类型',
    tags: ['type', 'conversion'],
    description: 'Read an integer and print it as a float (with one decimal place).',
    descriptionZh: '读取一个整数，以浮点数形式输出（保留一位小数）。',
    examples: [{ input: '5', output: '5.0' }],
    starterCode: `# TODO: Read an integer and print as float
`,
    solution: `# Convert int to float
n = int(input())
print(float(n))`,
    hints: ['Use float() to convert', 'float(5) gives 5.0'],
    hintsZh: ['使用 float() 转换', 'float(5) 得到 5.0'],
    testCases: [
      { input: '5', expectedOutput: '5.0' },
      { input: '42', expectedOutput: '42.0' },
    ],
  },
  {
    id: 'py-ex-1-19',
    title: 'Boolean Check: Even or Odd',
    titleZh: '布尔判断：奇偶',
    difficulty: 'easy',
    level: 1,
    category: 'Types',
    categoryZh: '类型',
    tags: ['bool', 'modulo'],
    description: 'Read an integer. Print "Even" if even, "Odd" if odd.',
    descriptionZh: '读取一个整数。如果是偶数输出 "Even"，奇数输出 "Odd"。',
    examples: [{ input: '4', output: 'Even' }],
    starterCode: `# TODO: Read an integer and print "Even" or "Odd"
`,
    solution: `# Check even/odd with modulo
n = int(input())
print("Even" if n % 2 == 0 else "Odd")`,
    hints: ['Use % 2 to check even/odd', 'If n % 2 == 0, it\'s even'],
    hintsZh: ['使用 % 2 检查奇偶', '如果 n % 2 == 0，是偶数'],
    testCases: [
      { input: '4', expectedOutput: 'Even' },
      { input: '7', expectedOutput: 'Odd' },
    ],
  },
  {
    id: 'py-ex-1-20',
    title: 'Multiple Inputs on One Line',
    titleZh: '单行多输入',
    difficulty: 'easy',
    level: 1,
    category: 'Input/Output',
    categoryZh: '输入输出',
    tags: ['input', 'split'],
    description: 'Read two space-separated integers on one line and print their sum.',
    descriptionZh: '在一行中读取两个用空格分隔的整数，输出它们的和。',
    examples: [{ input: '3 5', output: '8' }],
    starterCode: `# TODO: Read two space-separated integers on one line, print sum
`,
    solution: `# Use split() and map() for space-separated input
a, b = map(int, input().split())
print(a + b)`,
    hints: ['Use input().split() to split by spaces', 'Use map(int, ...) to convert all to int'],
    hintsZh: ['使用 input().split() 按空格分割', '使用 map(int, ...) 将所有值转换为 int'],
    testCases: [
      { input: '3 5', expectedOutput: '8' },
      { input: '10 20', expectedOutput: '30' },
    ],
  },
  {
    id: 'py-ex-1-21',
    title: 'Absolute Value',
    titleZh: '绝对值',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['abs', 'math'],
    description: 'Read an integer and print its absolute value.',
    descriptionZh: '读取一个整数并输出其绝对值。',
    examples: [{ input: '-5', output: '5' }],
    starterCode: `# TODO: Read an integer and print its absolute value
`,
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
    id: 'py-ex-1-22',
    title: 'Min and Max',
    titleZh: '最小值和最大值',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['min', 'max'],
    description: 'Read three integers (one per line) and print the minimum and maximum, each on a separate line.',
    descriptionZh: '读取三个整数（每行一个），分别输出最小值和最大值。',
    examples: [{ input: '3\n1\n5', output: '1\n5' }],
    starterCode: `# TODO: Read three integers, print min then max
`,
    solution: `# Use min() and max() built-in functions
a = int(input())
b = int(input())
c = int(input())
print(min(a, b, c))
print(max(a, b, c))`,
    hints: ['Use min() and max() functions', 'They accept multiple arguments'],
    hintsZh: ['使用 min() 和 max() 函数', '它们可以接受多个参数'],
    testCases: [
      { input: '3\n1\n5', expectedOutput: '1\n5' },
      { input: '10\n20\n15', expectedOutput: '10\n20' },
    ],
  },
  {
    id: 'py-ex-1-23',
    title: 'Circle Area',
    titleZh: '圆的面积',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['math', 'pi', 'float'],
    description: 'Read a radius (float) and print the area of the circle rounded to 2 decimal places. Use π = 3.14159265.',
    descriptionZh: '读取半径（浮点数），输出圆的面积，保留两位小数。使用 π = 3.14159265。',
    examples: [{ input: '5', output: '78.54' }],
    starterCode: `# TODO: Read radius and compute circle area (pi * r^2), print with 2 decimals
`,
    solution: `# Area = pi * r * r
import math
r = float(input())
area = math.pi * r * r
print(f"{area:.2f}")`,
    hints: ['Import math and use math.pi', 'Area formula: π × r²', 'Use f-string with :.2f'],
    hintsZh: ['导入 math 并使用 math.pi', '面积公式：π × r²', '使用 f-string 的 :.2f'],
    testCases: [
      { input: '5', expectedOutput: '78.54' },
      { input: '10', expectedOutput: '314.16' },
    ],
  },
  {
    id: 'py-ex-1-24',
    title: 'Temperature Conversion',
    titleZh: '温度转换',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['float', 'formula'],
    description: 'Read a temperature in Celsius and convert it to Fahrenheit. Print with 1 decimal place. Formula: F = C × 9/5 + 32.',
    descriptionZh: '读取摄氏温度并转换为华氏温度，保留一位小数。公式：F = C × 9/5 + 32。',
    examples: [{ input: '100', output: '212.0' }],
    starterCode: `# TODO: Read Celsius, convert to Fahrenheit, print with 1 decimal
`,
    solution: `# Celsius to Fahrenheit conversion
c = float(input())
f = c * 9 / 5 + 32
print(f"{f:.1f}")`,
    hints: ['Formula: F = C × 9/5 + 32', 'Use :.1f for 1 decimal place'],
    hintsZh: ['公式：F = C × 9/5 + 32', '使用 :.1f 保留一位小数'],
    testCases: [
      { input: '100', expectedOutput: '212.0' },
      { input: '0', expectedOutput: '32.0' },
    ],
  },
  {
    id: 'py-ex-1-25',
    title: 'String Contains Check',
    titleZh: '字符串包含检查',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'in'],
    description: 'Read two strings. Print "Yes" if the second string is found in the first, otherwise "No".',
    descriptionZh: '读取两个字符串。如果第二个字符串在第一个中出现，输出 "Yes"，否则输出 "No"。',
    examples: [{ input: 'hello world\nworld', output: 'Yes' }],
    starterCode: `# TODO: Read two strings, check if second is in first
`,
    solution: `# Use 'in' operator for substring check
s = input()
sub = input()
print("Yes" if sub in s else "No")`,
    hints: ['Use the "in" keyword', '"abc" in "xabcx" is True'],
    hintsZh: ['使用 "in" 关键字', '"abc" in "xabcx" 为 True'],
    testCases: [
      { input: 'hello world\nworld', expectedOutput: 'Yes' },
      { input: 'hello\nxyz', expectedOutput: 'No' },
    ],
  },
  // ============================================================
  // LEVEL 2: CONTROL FLOW (20 exercises)
  // ============================================================
  {
    id: 'py-ex-2-01',
    title: 'Positive, Negative, or Zero',
    titleZh: '正数、负数还是零',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['if', 'elif', 'else'],
    description: 'Read an integer. Print "Positive", "Negative", or "Zero".',
    descriptionZh: '读取一个整数。输出 "Positive"、"Negative" 或 "Zero"。',
    examples: [{ input: '5', output: 'Positive' }],
    starterCode: `# TODO: Read integer, print "Positive", "Negative", or "Zero"
`,
    solution: `# Use if/elif/else for three-way check
n = int(input())
if n > 0:
    print("Positive")
elif n < 0:
    print("Negative")
else:
    print("Zero")`,
    hints: ['Use if/elif/else', 'Check > 0, < 0, and == 0'],
    hintsZh: ['使用 if/elif/else', '检查 > 0、< 0 和 == 0'],
    testCases: [
      { input: '5', expectedOutput: 'Positive' },
      { input: '-3', expectedOutput: 'Negative' },
      { input: '0', expectedOutput: 'Zero' },
    ],
  },
  {
    id: 'py-ex-2-02',
    title: 'Grade Calculator',
    titleZh: '成绩等级',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['if', 'elif'],
    description: 'Read a score (0-100). Print the grade: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).',
    descriptionZh: '读取分数（0-100）。输出等级：A（90-100）、B（80-89）、C（70-79）、D（60-69）、F（0-59）。',
    examples: [{ input: '85', output: 'B' }],
    starterCode: `# TODO: Read a score and print the grade letter
`,
    solution: `# Grade calculator using if/elif chain
score = int(input())
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")`,
    hints: ['Use if/elif chain from highest to lowest', 'Check >= 90 first, then >= 80, etc.'],
    hintsZh: ['使用 if/elif 从高到低检查', '先检查 >= 90，然后 >= 80，依此类推'],
    testCases: [
      { input: '85', expectedOutput: 'B' },
      { input: '55', expectedOutput: 'F' },
      { input: '92', expectedOutput: 'A' },
    ],
  },
  {
    id: 'py-ex-2-03',
    title: 'Leap Year Check',
    titleZh: '闰年判断',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['if', 'logic'],
    description: 'Read a year. Print "Leap" if it\'s a leap year, otherwise "Not Leap". A year is leap if divisible by 4 but not 100, or divisible by 400.',
    descriptionZh: '读取一个年份。如果是闰年输出 "Leap"，否则输出 "Not Leap"。闰年：能被4整除但不能被100整除，或能被400整除。',
    examples: [{ input: '2000', output: 'Leap' }],
    starterCode: `# TODO: Read a year and check if it's a leap year
`,
    solution: `# Leap year logic
year = int(input())
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("Leap")
else:
    print("Not Leap")`,
    hints: ['Divisible by 4 AND not by 100, OR divisible by 400', 'Use and/or for combining conditions'],
    hintsZh: ['能被4整除且不能被100整除，或能被400整除', '使用 and/or 组合条件'],
    testCases: [
      { input: '2000', expectedOutput: 'Leap' },
      { input: '1900', expectedOutput: 'Not Leap' },
      { input: '2024', expectedOutput: 'Leap' },
    ],
  },
  {
    id: 'py-ex-2-04',
    title: 'Count Down',
    titleZh: '倒计时',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for', 'range'],
    description: 'Read an integer n. Print numbers from n down to 1, each on a new line.',
    descriptionZh: '读取整数 n。从 n 倒数到 1，每行输出一个数。',
    examples: [{ input: '5', output: '5\n4\n3\n2\n1' }],
    starterCode: `# TODO: Read n and print countdown from n to 1
`,
    solution: `# Countdown using range with step -1
n = int(input())
for i in range(n, 0, -1):
    print(i)`,
    hints: ['Use range(n, 0, -1) to count down', 'The third argument is the step'],
    hintsZh: ['使用 range(n, 0, -1) 倒数', '第三个参数是步长'],
    testCases: [
      { input: '5', expectedOutput: '5\n4\n3\n2\n1' },
      { input: '3', expectedOutput: '3\n2\n1' },
    ],
  },
  {
    id: 'py-ex-2-05',
    title: 'Sum of N Numbers',
    titleZh: 'N个数之和',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for', 'sum'],
    description: 'Read n, then read n integers (one per line). Print their sum.',
    descriptionZh: '读取 n，然后读取 n 个整数（每行一个）。输出它们的和。',
    examples: [{ input: '3\n10\n20\n30', output: '60' }],
    starterCode: `# TODO: Read n numbers and print their sum
`,
    solution: `# Sum n numbers using a loop
n = int(input())
total = 0
for _ in range(n):
    total += int(input())
print(total)`,
    hints: ['Use a for loop with range(n)', 'Accumulate sum in a variable', 'Use _ as loop variable when not needed'],
    hintsZh: ['使用 for 循环和 range(n)', '在变量中累加和', '不需要循环变量时用 _'],
    testCases: [
      { input: '3\n10\n20\n30', expectedOutput: '60' },
      { input: '2\n5\n7', expectedOutput: '12' },
    ],
  },
  {
    id: 'py-ex-2-06',
    title: 'FizzBuzz',
    titleZh: 'FizzBuzz',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for', 'modulo', 'conditionals'],
    description: 'Read n. For numbers 1 to n: print "FizzBuzz" if divisible by both 3 and 5, "Fizz" if by 3, "Buzz" if by 5, otherwise the number.',
    descriptionZh: '读取 n。对于 1 到 n：能被3和5整除输出 "FizzBuzz"，被3整除输出 "Fizz"，被5整除输出 "Buzz"，否则输出数字。',
    examples: [{ input: '15', output: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz' }],
    starterCode: `# TODO: Implement FizzBuzz from 1 to n
`,
    solution: `# Classic FizzBuzz - check divisible by both first
n = int(input())
for i in range(1, n + 1):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
    hints: ['Check divisible by 15 (both 3 and 5) first', 'Use % operator for divisibility', 'Order of checks matters'],
    hintsZh: ['先检查能否被15整除（同时被3和5整除）', '使用 % 运算符判断整除', '检查顺序很重要'],
    testCases: [
      { input: '5', expectedOutput: '1\n2\nFizz\n4\nBuzz' },
      { input: '15', expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz' },
    ],
  },
  {
    id: 'py-ex-2-07',
    title: 'Prime Number Check',
    titleZh: '素数判断',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for', 'math', 'prime'],
    description: 'Read an integer n (n >= 2). Print "Prime" if it\'s prime, otherwise "Not Prime".',
    descriptionZh: '读取整数 n（n >= 2）。如果是素数输出 "Prime"，否则输出 "Not Prime"。',
    examples: [{ input: '7', output: 'Prime' }],
    starterCode: `# TODO: Check if the input number is prime
`,
    solution: `# Check prime by testing divisors up to sqrt(n)
import math
n = int(input())
if n < 2:
    print("Not Prime")
else:
    is_prime = True
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            is_prime = False
            break
    print("Prime" if is_prime else "Not Prime")`,
    hints: ['Only check divisors up to √n', 'Use break to exit early when a divisor is found', '2 is the smallest prime'],
    hintsZh: ['只需检查到 √n 的因子', '找到因子时用 break 提前退出', '2 是最小的素数'],
    testCases: [
      { input: '7', expectedOutput: 'Prime' },
      { input: '10', expectedOutput: 'Not Prime' },
      { input: '2', expectedOutput: 'Prime' },
    ],
  },
  {
    id: 'py-ex-2-08',
    title: 'GCD (Greatest Common Divisor)',
    titleZh: '最大公约数',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while', 'math', 'gcd'],
    description: 'Read two positive integers. Print their GCD using the Euclidean algorithm.',
    descriptionZh: '读取两个正整数，使用欧几里得算法输出它们的最大公约数。',
    examples: [{ input: '12\n8', output: '4' }],
    starterCode: `# TODO: Compute GCD using Euclidean algorithm
`,
    solution: `# Euclidean algorithm: gcd(a, b) = gcd(b, a % b)
a = int(input())
b = int(input())
while b:
    a, b = b, a % b
print(a)`,
    hints: ['Euclidean algorithm: gcd(a, b) = gcd(b, a % b)', 'Loop while b != 0', 'When b becomes 0, a is the GCD'],
    hintsZh: ['欧几里得算法：gcd(a, b) = gcd(b, a % b)', '当 b != 0 时循环', '当 b 变为 0 时，a 就是 GCD'],
    testCases: [
      { input: '12\n8', expectedOutput: '4' },
      { input: '21\n14', expectedOutput: '7' },
    ],
  },
  {
    id: 'py-ex-2-09',
    title: 'Fibonacci Sequence',
    titleZh: '斐波那契数列',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for', 'fibonacci'],
    description: 'Read n. Print the first n Fibonacci numbers, space-separated. Start with 0, 1.',
    descriptionZh: '读取 n。输出前 n 个斐波那契数，用空格分隔。以 0, 1 开头。',
    examples: [{ input: '7', output: '0 1 1 2 3 5 8' }],
    starterCode: `# TODO: Print the first n Fibonacci numbers
`,
    solution: `# Generate Fibonacci sequence iteratively
n = int(input())
a, b = 0, 1
result = []
for _ in range(n):
    result.append(str(a))
    a, b = b, a + b
print(" ".join(result))`,
    hints: ['Start with a=0, b=1', 'Each step: a, b = b, a + b', 'Collect results in a list then join'],
    hintsZh: ['从 a=0, b=1 开始', '每一步：a, b = b, a + b', '收集结果到列表再 join'],
    testCases: [
      { input: '7', expectedOutput: '0 1 1 2 3 5 8' },
      { input: '5', expectedOutput: '0 1 1 2 3' },
    ],
  },
  {
    id: 'py-ex-2-10',
    title: 'Factorial',
    titleZh: '阶乘',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for', 'math'],
    description: 'Read n. Print n! (n factorial).',
    descriptionZh: '读取 n。输出 n!（n 的阶乘）。',
    examples: [{ input: '5', output: '120' }],
    starterCode: `# TODO: Compute and print n factorial
`,
    solution: `# Compute factorial iteratively
n = int(input())
result = 1
for i in range(1, n + 1):
    result *= i
print(result)`,
    hints: ['Multiply from 1 to n', 'Start with result = 1', '0! = 1'],
    hintsZh: ['从 1 乘到 n', '从 result = 1 开始', '0! = 1'],
    testCases: [
      { input: '5', expectedOutput: '120' },
      { input: '0', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-2-11',
    title: 'Number Pyramid',
    titleZh: '数字金字塔',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['nested-loops', 'pattern'],
    description: 'Read n. Print a pyramid pattern where row i (1-indexed) has numbers 1 to i, space-separated.',
    descriptionZh: '读取 n。打印金字塔图案，第 i 行（从1开始）有数字 1 到 i，用空格分隔。',
    examples: [{ input: '4', output: '1\n1 2\n1 2 3\n1 2 3 4' }],
    starterCode: `# TODO: Print a number pyramid of n rows
`,
    solution: `# Nested loop for number pyramid
n = int(input())
for i in range(1, n + 1):
    print(" ".join(str(j) for j in range(1, i + 1)))`,
    hints: ['Use nested loops: outer for rows, inner for columns', 'Use range(1, i+1) for each row', 'Join numbers with spaces'],
    hintsZh: ['使用嵌套循环：外层行，内层列', '每行使用 range(1, i+1)', '用空格连接数字'],
    testCases: [
      { input: '4', expectedOutput: '1\n1 2\n1 2 3\n1 2 3 4' },
      { input: '3', expectedOutput: '1\n1 2\n1 2 3' },
    ],
  },
  {
    id: 'py-ex-2-12',
    title: 'Star Triangle',
    titleZh: '星号三角形',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['nested-loops', 'pattern'],
    description: 'Read n. Print a right-aligned triangle of stars with n rows.',
    descriptionZh: '读取 n。打印一个右对齐的星号三角形，共 n 行。',
    examples: [{ input: '4', output: '   *\n  **\n ***\n****' }],
    starterCode: `# TODO: Print a right-aligned star triangle
`,
    solution: `# Right-aligned star triangle using string methods
n = int(input())
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * i)`,
    hints: ['Each row has (n-i) spaces and i stars', 'Use string multiplication: " " * count', 'Concatenate spaces and stars'],
    hintsZh: ['每行有 (n-i) 个空格和 i 个星号', '使用字符串乘法：" " * count', '拼接空格和星号'],
    testCases: [
      { input: '4', expectedOutput: '   *\n  **\n ***\n****' },
      { input: '3', expectedOutput: '  *\n **\n***' },
    ],
  },
  {
    id: 'py-ex-2-13',
    title: 'Multiplication Table',
    titleZh: '乘法表',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for', 'nested-loops'],
    description: 'Read n. Print the multiplication table for n (from n×1 to n×10), one per line in format "n x i = result".',
    descriptionZh: '读取 n。打印 n 的乘法表（n×1 到 n×10），每行格式 "n x i = result"。',
    examples: [{ input: '3', output: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30' }],
    starterCode: `# TODO: Print multiplication table for n
`,
    solution: `# Print multiplication table
n = int(input())
for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`,
    hints: ['Loop from 1 to 10', 'Use f-string for formatting'],
    hintsZh: ['从 1 循环到 10', '使用 f-string 格式化'],
    testCases: [
      { input: '3', expectedOutput: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30' },
      { input: '5', expectedOutput: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50' },
    ],
  },
  {
    id: 'py-ex-2-14',
    title: 'Digit Sum',
    titleZh: '数字各位之和',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while', 'digits'],
    description: 'Read a non-negative integer. Print the sum of its digits.',
    descriptionZh: '读取一个非负整数，输出其各位数字之和。',
    examples: [{ input: '123', output: '6' }],
    starterCode: `# TODO: Compute sum of digits
`,
    solution: `# Sum digits by iterating over characters
n = input()
print(sum(int(d) for d in n))`,
    hints: ['You can iterate over a string character by character', 'Convert each character to int with int()', 'Use sum() to add them up'],
    hintsZh: ['可以逐字符遍历字符串', '用 int() 将每个字符转换为整数', '使用 sum() 求和'],
    testCases: [
      { input: '123', expectedOutput: '6' },
      { input: '9999', expectedOutput: '36' },
    ],
  },
  {
    id: 'py-ex-2-15',
    title: 'Reverse a Number',
    titleZh: '反转数字',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while', 'digits'],
    description: 'Read a positive integer and print it reversed (as an integer, no leading zeros).',
    descriptionZh: '读取一个正整数并反转输出（作为整数，无前导零）。',
    examples: [{ input: '1200', output: '21' }],
    starterCode: `# TODO: Reverse the digits of the number
`,
    solution: `# Reverse using string slicing, convert back to int to remove leading zeros
n = input()
print(int(n[::-1]))`,
    hints: ['Reverse the string with [::-1]', 'Convert to int to remove leading zeros'],
    hintsZh: ['用 [::-1] 反转字符串', '转换为 int 去除前导零'],
    testCases: [
      { input: '1200', expectedOutput: '21' },
      { input: '12345', expectedOutput: '54321' },
    ],
  },
  {
    id: 'py-ex-2-16',
    title: 'Palindrome Check',
    titleZh: '回文判断',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['string', 'palindrome'],
    description: 'Read a string. Print "Yes" if it\'s a palindrome, "No" otherwise (case-sensitive).',
    descriptionZh: '读取一个字符串。如果是回文输出 "Yes"，否则输出 "No"（区分大小写）。',
    examples: [{ input: 'racecar', output: 'Yes' }],
    starterCode: `# TODO: Check if the string is a palindrome
`,
    solution: `# Compare string with its reverse
s = input()
print("Yes" if s == s[::-1] else "No")`,
    hints: ['A palindrome reads the same forwards and backwards', 'Compare s with s[::-1]'],
    hintsZh: ['回文正读和反读相同', '比较 s 和 s[::-1]'],
    testCases: [
      { input: 'racecar', expectedOutput: 'Yes' },
      { input: 'hello', expectedOutput: 'No' },
    ],
  },
  {
    id: 'py-ex-2-17',
    title: 'Count Vowels',
    titleZh: '统计元音',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['string', 'for', 'count'],
    description: 'Read a string. Print the count of vowels (a, e, i, o, u, case-insensitive).',
    descriptionZh: '读取一个字符串。输出元音字母的数量（a, e, i, o, u，不区分大小写）。',
    examples: [{ input: 'Hello World', output: '3' }],
    starterCode: `# TODO: Count vowels in the string
`,
    solution: `# Count vowels using sum and generator
s = input().lower()
print(sum(1 for c in s if c in 'aeiou'))`,
    hints: ['Convert to lowercase first', 'Check each char against "aeiou"', 'Use sum() with a generator expression'],
    hintsZh: ['先转换为小写', '将每个字符与 "aeiou" 比较', '使用 sum() 配合生成器表达式'],
    testCases: [
      { input: 'Hello World', expectedOutput: '3' },
      { input: 'Python', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-2-18',
    title: 'List Comprehension: Squares',
    titleZh: '列表推导式：平方数',
    difficulty: 'easy',
    level: 2,
    category: 'List Comprehension',
    categoryZh: '列表推导式',
    tags: ['list-comprehension'],
    description: 'Read n. Print a list of squares from 1² to n² using list comprehension, space-separated.',
    descriptionZh: '读取 n。使用列表推导式输出 1² 到 n² 的平方数，用空格分隔。',
    examples: [{ input: '5', output: '1 4 9 16 25' }],
    starterCode: `# TODO: Use list comprehension to create squares from 1 to n
`,
    solution: `# List comprehension for squares
n = int(input())
squares = [i * i for i in range(1, n + 1)]
print(" ".join(map(str, squares)))`,
    hints: ['Syntax: [expr for var in iterable]', 'Use i*i or i**2 for square'],
    hintsZh: ['语法：[表达式 for 变量 in 可迭代对象]', '用 i*i 或 i**2 求平方'],
    testCases: [
      { input: '5', expectedOutput: '1 4 9 16 25' },
      { input: '3', expectedOutput: '1 4 9' },
    ],
  },
  {
    id: 'py-ex-2-19',
    title: 'List Comprehension: Even Filter',
    titleZh: '列表推导式：过滤偶数',
    difficulty: 'easy',
    level: 2,
    category: 'List Comprehension',
    categoryZh: '列表推导式',
    tags: ['list-comprehension', 'filter'],
    description: 'Read n space-separated integers. Print only the even ones, space-separated.',
    descriptionZh: '读取 n 个空格分隔的整数。只输出偶数，用空格分隔。',
    examples: [{ input: '1 2 3 4 5 6', output: '2 4 6' }],
    starterCode: `# TODO: Filter even numbers using list comprehension
`,
    solution: `# Filter evens with list comprehension
nums = list(map(int, input().split()))
evens = [x for x in nums if x % 2 == 0]
print(" ".join(map(str, evens)))`,
    hints: ['Add if condition to list comprehension', 'Syntax: [x for x in list if condition]'],
    hintsZh: ['在列表推导式中添加 if 条件', '语法：[x for x in list if 条件]'],
    testCases: [
      { input: '1 2 3 4 5 6', expectedOutput: '2 4 6' },
      { input: '10 15 20 25 30', expectedOutput: '10 20 30' },
    ],
  },
  {
    id: 'py-ex-2-20',
    title: 'While Loop: Collatz Sequence',
    titleZh: 'While循环：Collatz序列',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while', 'sequence'],
    description: 'Read a positive integer n. Print the Collatz sequence starting from n until reaching 1, space-separated. Rules: if even, divide by 2; if odd, multiply by 3 and add 1.',
    descriptionZh: '读取正整数 n。输出从 n 开始直到 1 的 Collatz 序列，用空格分隔。规则：偶数除以2，奇数乘3加1。',
    examples: [{ input: '6', output: '6 3 10 5 16 8 4 2 1' }],
    starterCode: `# TODO: Print the Collatz sequence from n to 1
`,
    solution: `# Collatz sequence using while loop
n = int(input())
seq = [n]
while n != 1:
    n = n // 2 if n % 2 == 0 else 3 * n + 1
    seq.append(n)
print(" ".join(map(str, seq)))`,
    hints: ['Use while n != 1', 'If even: n = n // 2, if odd: n = 3 * n + 1', 'Collect all values in a list'],
    hintsZh: ['使用 while n != 1', '偶数：n = n // 2，奇数：n = 3 * n + 1', '将所有值收集到列表中'],
    testCases: [
      { input: '6', expectedOutput: '6 3 10 5 16 8 4 2 1' },
      { input: '3', expectedOutput: '3 10 5 16 8 4 2 1' },
    ],
  },
  // ============================================================
  // LEVEL 3: FUNCTIONS & DATA STRUCTURES (15 exercises)
  // ============================================================
  {
    id: 'py-ex-3-01',
    title: 'Recursive Factorial',
    titleZh: '递归阶乘',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'function'],
    description: 'Read n. Compute and print n! using a recursive function.',
    descriptionZh: '读取 n。使用递归函数计算并输出 n!。',
    examples: [{ input: '5', output: '120' }],
    starterCode: `def factorial(n):
    # TODO: Implement recursive factorial
    pass

n = int(input())
print(factorial(n))`,
    solution: `def factorial(n):
    # Base case: 0! = 1
    if n <= 1:
        return 1
    # Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1)

n = int(input())
print(factorial(n))`,
    hints: ['Base case: factorial(0) = 1', 'Recursive case: n * factorial(n-1)', 'Don\'t forget to return the value'],
    hintsZh: ['基础情况：factorial(0) = 1', '递归情况：n * factorial(n-1)', '不要忘记返回值'],
    testCases: [
      { input: '5', expectedOutput: '120' },
      { input: '0', expectedOutput: '1' },
      { input: '10', expectedOutput: '3628800' },
    ],
  },
  {
    id: 'py-ex-3-02',
    title: 'Recursive Fibonacci',
    titleZh: '递归斐波那契',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'fibonacci'],
    description: 'Read n. Print the nth Fibonacci number (0-indexed: fib(0)=0, fib(1)=1).',
    descriptionZh: '读取 n。输出第 n 个斐波那契数（0索引：fib(0)=0，fib(1)=1）。',
    examples: [{ input: '6', output: '8' }],
    starterCode: `def fib(n):
    # TODO: Return the nth Fibonacci number recursively
    pass

n = int(input())
print(fib(n))`,
    solution: `def fib(n):
    # Base cases
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

n = int(input())
print(fib(n))`,
    hints: ['Base cases: fib(0)=0, fib(1)=1', 'Recursive: fib(n) = fib(n-1) + fib(n-2)'],
    hintsZh: ['基础情况：fib(0)=0，fib(1)=1', '递归：fib(n) = fib(n-1) + fib(n-2)'],
    testCases: [
      { input: '6', expectedOutput: '8' },
      { input: '10', expectedOutput: '55' },
    ],
  },
  {
    id: 'py-ex-3-03',
    title: 'Lambda and Sorting',
    titleZh: 'Lambda与排序',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['lambda', 'sorted'],
    description: 'Read n, then n lines each containing a name and age separated by space. Sort by age (ascending) and print each "name age" on a line.',
    descriptionZh: '读取 n，然后 n 行，每行包含用空格分隔的姓名和年龄。按年龄升序排序，每行输出 "name age"。',
    examples: [{ input: '3\nAlice 30\nBob 25\nCharlie 35', output: 'Bob 25\nAlice 30\nCharlie 35' }],
    starterCode: `# TODO: Read people, sort by age using lambda, print results
`,
    solution: `# Sort using lambda as key function
n = int(input())
people = []
for _ in range(n):
    parts = input().split()
    people.append((parts[0], int(parts[1])))
# Sort by age using lambda
people.sort(key=lambda p: p[1])
for name, age in people:
    print(f"{name} {age}")`,
    hints: ['Use sort() with key parameter', 'key=lambda x: x[1] sorts by second element', 'Store as list of tuples'],
    hintsZh: ['使用 sort() 的 key 参数', 'key=lambda x: x[1] 按第二个元素排序', '存储为元组列表'],
    testCases: [
      { input: '3\nAlice 30\nBob 25\nCharlie 35', expectedOutput: 'Bob 25\nAlice 30\nCharlie 35' },
      { input: '2\nZoe 20\nAnn 18', expectedOutput: 'Ann 18\nZoe 20' },
    ],
  },
  {
    id: 'py-ex-3-04',
    title: 'Map and Filter',
    titleZh: 'Map和Filter',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['map', 'filter', 'lambda'],
    description: 'Read space-separated integers. Use map to double each number, then filter to keep only those > 10. Print result space-separated.',
    descriptionZh: '读取空格分隔的整数。使用 map 将每个数翻倍，然后用 filter 保留 > 10 的数。用空格分隔输出。',
    examples: [{ input: '1 3 5 7 9', output: '14 18' }],
    starterCode: `# TODO: Use map to double, filter to keep > 10
`,
    solution: `# Chain map and filter operations
nums = list(map(int, input().split()))
doubled = map(lambda x: x * 2, nums)
result = filter(lambda x: x > 10, doubled)
print(" ".join(map(str, result)))`,
    hints: ['map(func, iterable) applies func to each element', 'filter(func, iterable) keeps elements where func returns True', 'Chain them: filter on the map result'],
    hintsZh: ['map(func, iterable) 对每个元素应用函数', 'filter(func, iterable) 保留函数返回 True 的元素', '链式调用：对 map 结果进行 filter'],
    testCases: [
      { input: '1 3 5 7 9', expectedOutput: '14 18' },
      { input: '2 4 6 8 10', expectedOutput: '12 16 20' },
    ],
  },
  {
    id: 'py-ex-3-05',
    title: 'List Operations',
    titleZh: '列表操作',
    difficulty: 'medium',
    level: 3,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['list', 'operations'],
    description: 'Read n space-separated integers. Print: the list sorted, the sum, the average (2 decimal places), each on a new line.',
    descriptionZh: '读取 n 个空格分隔的整数。分别输出：排序后的列表、总和、平均值（2位小数），每项一行。',
    examples: [{ input: '5 3 8 1 9', output: '[1, 3, 5, 8, 9]\n26\n5.20' }],
    starterCode: `# TODO: Read list, print sorted, sum, and average
`,
    solution: `# Demonstrate list operations
nums = list(map(int, input().split()))
print(sorted(nums))
s = sum(nums)
print(s)
print(f"{s / len(nums):.2f}")`,
    hints: ['Use sorted() for sorted copy', 'sum() adds all elements', 'Average = sum / len'],
    hintsZh: ['使用 sorted() 获取排序副本', 'sum() 求和', '平均值 = sum / len'],
    testCases: [
      { input: '5 3 8 1 9', expectedOutput: '[1, 3, 5, 8, 9]\n26\n5.20' },
      { input: '10 20 30', expectedOutput: '[10, 20, 30]\n60\n20.00' },
    ],
  },
  {
    id: 'py-ex-3-06',
    title: 'Dictionary: Word Count',
    titleZh: '字典：单词计数',
    difficulty: 'medium',
    level: 3,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['dict', 'count'],
    description: 'Read a line of words. Print each unique word and its count, sorted alphabetically, one per line as "word count".',
    descriptionZh: '读取一行单词。按字母顺序输出每个唯一单词及其出现次数，每行格式 "word count"。',
    examples: [{ input: 'apple banana apple cherry banana apple', output: 'apple 3\nbanana 2\ncherry 1' }],
    starterCode: `# TODO: Count word frequencies using a dictionary
`,
    solution: `# Word count using dictionary
words = input().split()
count = {}
for w in words:
    count[w] = count.get(w, 0) + 1
for w in sorted(count):
    print(f"{w} {count[w]}")`,
    hints: ['Use dict.get(key, default) to handle missing keys', 'Sort the dictionary keys for output', 'Or use collections.Counter'],
    hintsZh: ['使用 dict.get(key, default) 处理缺失的键', '对字典键排序后输出', '或使用 collections.Counter'],
    testCases: [
      { input: 'apple banana apple cherry banana apple', expectedOutput: 'apple 3\nbanana 2\ncherry 1' },
      { input: 'a b a c b a', expectedOutput: 'a 3\nb 2\nc 1' },
    ],
  },
  {
    id: 'py-ex-3-07',
    title: 'Set Operations',
    titleZh: '集合运算',
    difficulty: 'medium',
    level: 3,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['set', 'operations'],
    description: 'Read two lines of space-separated integers. Print their intersection (sorted, space-separated), then their union (sorted, space-separated), each on a new line.',
    descriptionZh: '读取两行空格分隔的整数。分别输出它们的交集和并集（排序后，空格分隔），每项一行。',
    examples: [{ input: '1 2 3 4 5\n3 4 5 6 7', output: '3 4 5\n1 2 3 4 5 6 7' }],
    starterCode: `# TODO: Compute set intersection and union
`,
    solution: `# Set operations: intersection and union
a = set(map(int, input().split()))
b = set(map(int, input().split()))
print(" ".join(map(str, sorted(a & b))))
print(" ".join(map(str, sorted(a | b))))`,
    hints: ['Use & for intersection, | for union', 'Convert to set with set()', 'Sort the result before printing'],
    hintsZh: ['使用 & 求交集，| 求并集', '用 set() 转换为集合', '输出前排序'],
    testCases: [
      { input: '1 2 3 4 5\n3 4 5 6 7', expectedOutput: '3 4 5\n1 2 3 4 5 6 7' },
      { input: '1 2\n2 3', expectedOutput: '2\n1 2 3' },
    ],
  },
  {
    id: 'py-ex-3-08',
    title: 'Tuple Unpacking',
    titleZh: '元组解包',
    difficulty: 'medium',
    level: 3,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['tuple', 'unpacking'],
    description: 'Read n lines, each with a name and score separated by space. Find and print the name with the highest score as "name score".',
    descriptionZh: '读取 n 行，每行有用空格分隔的姓名和分数。找出并输出最高分的姓名，格式 "name score"。',
    examples: [{ input: '3\nAlice 85\nBob 92\nCharlie 78', output: 'Bob 92' }],
    starterCode: `# TODO: Find the person with the highest score
`,
    solution: `# Find max using tuple comparison
n = int(input())
best = ("", 0)
for _ in range(n):
    parts = input().split()
    name, score = parts[0], int(parts[1])
    if score > best[1]:
        best = (name, score)
print(f"{best[0]} {best[1]}")`,
    hints: ['Store as tuple (name, score)', 'Track the best score found so far', 'Or use max() with key'],
    hintsZh: ['存储为元组 (name, score)', '跟踪目前找到的最高分', '或使用 max() 配合 key'],
    testCases: [
      { input: '3\nAlice 85\nBob 92\nCharlie 78', expectedOutput: 'Bob 92' },
      { input: '2\nX 100\nY 99', expectedOutput: 'X 100' },
    ],
  },
  {
    id: 'py-ex-3-09',
    title: 'String Manipulation: Caesar Cipher',
    titleZh: '字符串操作：凯撒密码',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'cipher', 'ord', 'chr'],
    description: 'Read a string and a shift value. Encrypt using Caesar cipher (shift lowercase letters only, wrap around). Print the result.',
    descriptionZh: '读取一个字符串和偏移值。使用凯撒密码加密（仅移位小写字母，循环）。输出结果。',
    examples: [{ input: 'hello\n3', output: 'khoor' }],
    starterCode: `# TODO: Implement Caesar cipher for lowercase letters
`,
    solution: `# Caesar cipher shifting lowercase letters
text = input()
shift = int(input())
result = ""
for c in text:
    if c.islower():
        result += chr((ord(c) - ord('a') + shift) % 26 + ord('a'))
    else:
        result += c
print(result)`,
    hints: ['Use ord() and chr() for character math', 'Formula: (ord(c) - ord("a") + shift) % 26 + ord("a")', 'Only shift lowercase letters'],
    hintsZh: ['使用 ord() 和 chr() 进行字符运算', '公式：(ord(c) - ord("a") + shift) % 26 + ord("a")', '只移位小写字母'],
    testCases: [
      { input: 'hello\n3', expectedOutput: 'khoor' },
      { input: 'xyz\n3', expectedOutput: 'abc' },
    ],
  },
  {
    id: 'py-ex-3-10',
    title: 'Matrix Transpose',
    titleZh: '矩阵转置',
    difficulty: 'medium',
    level: 3,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['list', 'matrix', 'zip'],
    description: 'Read rows and cols, then the matrix (rows lines of space-separated integers). Print the transposed matrix.',
    descriptionZh: '读取行数和列数，然后读取矩阵（行数行，每行空格分隔的整数）。输出转置矩阵。',
    examples: [{ input: '2 3\n1 2 3\n4 5 6', output: '1 4\n2 5\n3 6' }],
    starterCode: `# TODO: Read a matrix and print its transpose
`,
    solution: `# Transpose using zip
r, c = map(int, input().split())
matrix = []
for _ in range(r):
    matrix.append(list(map(int, input().split())))
# zip(*matrix) transposes the rows and columns
for row in zip(*matrix):
    print(" ".join(map(str, row)))`,
    hints: ['zip(*matrix) transposes a matrix', 'The * unpacks the list of rows', 'Each zipped tuple becomes a new row'],
    hintsZh: ['zip(*matrix) 可以转置矩阵', '* 将行列表解包', '每个 zip 元组成为新的一行'],
    testCases: [
      { input: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 4\n2 5\n3 6' },
      { input: '3 2\n1 2\n3 4\n5 6', expectedOutput: '1 3 5\n2 4 6' },
    ],
  },
  {
    id: 'py-ex-3-11',
    title: 'Flatten Nested List',
    titleZh: '展平嵌套列表',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['recursion', 'list'],
    description: 'Read a line of space-separated integers. Group them into sublists of 3 (last group may have fewer), then flatten and print space-separated.',
    descriptionZh: '读取一行空格分隔的整数。将它们分为每3个一组（最后一组可能不足3个），然后展平并用空格分隔输出。',
    examples: [{ input: '1 2 3 4 5 6 7', output: '1 2 3 4 5 6 7' }],
    starterCode: `# TODO: Group into sublists of 3, then flatten
`,
    solution: `# Group and flatten using list comprehension
nums = list(map(int, input().split()))
# Group into chunks of 3
groups = [nums[i:i+3] for i in range(0, len(nums), 3)]
# Flatten
flat = [x for group in groups for x in group]
print(" ".join(map(str, flat)))`,
    hints: ['Use slicing nums[i:i+3] to chunk', 'Nested list comprehension flattens', '[x for group in groups for x in group]'],
    hintsZh: ['使用切片 nums[i:i+3] 分组', '嵌套列表推导式可以展平', '[x for group in groups for x in group]'],
    testCases: [
      { input: '1 2 3 4 5 6 7', expectedOutput: '1 2 3 4 5 6 7' },
      { input: '10 20 30', expectedOutput: '10 20 30' },
    ],
  },
  {
    id: 'py-ex-3-12',
    title: 'Dictionary Inversion',
    titleZh: '字典反转',
    difficulty: 'medium',
    level: 3,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['dict', 'inversion'],
    description: 'Read n lines of "key value" pairs. Invert the dictionary (swap keys and values) and print sorted by new key, one "key value" per line.',
    descriptionZh: '读取 n 行 "key value" 对。反转字典（交换键和值），按新键排序，每行输出 "key value"。',
    examples: [{ input: '3\na 1\nb 2\nc 3', output: '1 a\n2 b\n3 c' }],
    starterCode: `# TODO: Read key-value pairs, invert, print sorted
`,
    solution: `# Invert dictionary by swapping keys and values
n = int(input())
d = {}
for _ in range(n):
    k, v = input().split()
    d[k] = v
# Invert: swap key and value
inv = {v: k for k, v in d.items()}
for k in sorted(inv):
    print(f"{k} {inv[k]}")`,
    hints: ['Use dictionary comprehension to invert', '{v: k for k, v in d.items()}', 'Sort by new keys'],
    hintsZh: ['使用字典推导式反转', '{v: k for k, v in d.items()}', '按新键排序'],
    testCases: [
      { input: '3\na 1\nb 2\nc 3', expectedOutput: '1 a\n2 b\n3 c' },
      { input: '2\nx 10\ny 20', expectedOutput: '10 x\n20 y' },
    ],
  },
  {
    id: 'py-ex-3-13',
    title: 'Find Duplicates',
    titleZh: '查找重复元素',
    difficulty: 'medium',
    level: 3,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['set', 'list'],
    description: 'Read space-separated integers. Print duplicates in sorted order, space-separated. If none, print "None".',
    descriptionZh: '读取空格分隔的整数。按排序顺序输出重复元素，空格分隔。如果没有重复，输出 "None"。',
    examples: [{ input: '1 2 3 2 4 3 5', output: '2 3' }],
    starterCode: `# TODO: Find and print duplicate numbers
`,
    solution: `# Find duplicates using set tracking
nums = list(map(int, input().split()))
seen = set()
dups = set()
for n in nums:
    if n in seen:
        dups.add(n)
    seen.add(n)
result = sorted(dups)
print(" ".join(map(str, result)) if result else "None")`,
    hints: ['Use two sets: seen and duplicates', 'If number already in seen, add to duplicates', 'Sort before printing'],
    hintsZh: ['使用两个集合：已见和重复', '如果数字已在 seen 中，加入 duplicates', '输出前排序'],
    testCases: [
      { input: '1 2 3 2 4 3 5', expectedOutput: '2 3' },
      { input: '1 2 3 4 5', expectedOutput: 'None' },
    ],
  },
  {
    id: 'py-ex-3-14',
    title: 'Anagram Check',
    titleZh: '变位词检查',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'sorted', 'anagram'],
    description: 'Read two strings. Print "Yes" if they are anagrams (same letters, different order), "No" otherwise. Case-insensitive, ignore spaces.',
    descriptionZh: '读取两个字符串。如果它们是变位词（相同字母，不同顺序），输出 "Yes"，否则 "No"。不区分大小写，忽略空格。',
    examples: [{ input: 'listen\nsilent', output: 'Yes' }],
    starterCode: `# TODO: Check if two strings are anagrams
`,
    solution: `# Anagram check by sorting characters
a = input().lower().replace(" ", "")
b = input().lower().replace(" ", "")
print("Yes" if sorted(a) == sorted(b) else "No")`,
    hints: ['Sort both strings and compare', 'Convert to lowercase and remove spaces first', 'sorted() works on strings too'],
    hintsZh: ['排序两个字符串然后比较', '先转换为小写并去除空格', 'sorted() 也适用于字符串'],
    testCases: [
      { input: 'listen\nsilent', expectedOutput: 'Yes' },
      { input: 'hello\nworld', expectedOutput: 'No' },
    ],
  },
  {
    id: 'py-ex-3-15',
    title: 'File I/O Simulation',
    titleZh: '文件I/O模拟',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['function', 'string'],
    description: 'Read n lines of text. Print the number of lines, total words, and total characters (excluding newlines), each on a separate line.',
    descriptionZh: '读取 n 行文本。分别输出行数、总单词数和总字符数（不含换行），每项一行。',
    examples: [{ input: '2\nHello World\nPython is great', output: '2\n5\n26' }],
    starterCode: `# TODO: Count lines, words, and characters
`,
    solution: `# Count lines, words, characters
n = int(input())
lines = []
for _ in range(n):
    lines.append(input())
total_words = sum(len(line.split()) for line in lines)
total_chars = sum(len(line) for line in lines)
print(n)
print(total_words)
print(total_chars)`,
    hints: ['Use split() to count words in a line', 'Use len() for character count', 'Sum across all lines'],
    hintsZh: ['使用 split() 计算每行单词数', '使用 len() 计算字符数', '对所有行求和'],
    testCases: [
      { input: '2\nHello World\nPython is great', expectedOutput: '2\n5\n26' },
      { input: '1\nabc def', expectedOutput: '1\n2\n7' },
    ],
  },
  // ============================================================
  // LEVEL 4: OOP (10 exercises)
  // ============================================================
  {
    id: 'py-ex-4-01',
    title: 'Basic Class: Rectangle',
    titleZh: '基础类：矩形',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'method'],
    description: 'Read width and height. Create a Rectangle class with area() and perimeter() methods. Print area and perimeter on separate lines.',
    descriptionZh: '读取宽和高。创建 Rectangle 类，包含 area() 和 perimeter() 方法。分别输出面积和周长。',
    examples: [{ input: '5 3', output: '15\n16' }],
    starterCode: `class Rectangle:
    def __init__(self, width, height):
        # TODO: Store width and height
        pass

    def area(self):
        # TODO: Return area
        pass

    def perimeter(self):
        # TODO: Return perimeter
        pass

w, h = map(int, input().split())
r = Rectangle(w, h)
print(r.area())
print(r.perimeter())`,
    solution: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

w, h = map(int, input().split())
r = Rectangle(w, h)
print(r.area())
print(r.perimeter())`,
    hints: ['Use self.width and self.height in __init__', 'Area = width × height', 'Perimeter = 2 × (width + height)'],
    hintsZh: ['在 __init__ 中使用 self.width 和 self.height', '面积 = 宽 × 高', '周长 = 2 × (宽 + 高)'],
    testCases: [
      { input: '5 3', expectedOutput: '15\n16' },
      { input: '10 4', expectedOutput: '40\n28' },
    ],
  },
  {
    id: 'py-ex-4-02',
    title: 'Inheritance: Shape Hierarchy',
    titleZh: '继承：形状层次',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'inheritance'],
    description: 'Read a shape type ("circle" or "rect") and its dimensions. Circle gets radius; rect gets width and height. Print the area (2 decimal places). Use inheritance from a base Shape class.',
    descriptionZh: '读取形状类型（"circle" 或 "rect"）和尺寸。圆形读取半径；矩形读取宽和高。输出面积（2位小数）。使用 Shape 基类继承。',
    examples: [{ input: 'circle\n5', output: '78.54' }],
    starterCode: `import math

class Shape:
    def area(self):
        # TODO: Base method
        pass

class Circle(Shape):
    def __init__(self, radius):
        # TODO
        pass

    def area(self):
        # TODO
        pass

class Rect(Shape):
    def __init__(self, width, height):
        # TODO
        pass

    def area(self):
        # TODO
        pass

# TODO: Read input, create shape, print area`,
    solution: `import math

class Shape:
    def area(self):
        raise NotImplementedError

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

class Rect(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

shape_type = input()
if shape_type == "circle":
    r = float(input())
    s = Circle(r)
else:
    w, h = map(float, input().split())
    s = Rect(w, h)
print(f"{s.area():.2f}")`,
    hints: ['Override area() in each subclass', 'Circle area: π × r²', 'Use isinstance or if/else for shape type'],
    hintsZh: ['在每个子类中重写 area()', '圆面积：π × r²', '使用 isinstance 或 if/else 判断形状类型'],
    testCases: [
      { input: 'circle\n5', expectedOutput: '78.54' },
      { input: 'rect\n4 6', expectedOutput: '24.00' },
    ],
  },
  {
    id: 'py-ex-4-03',
    title: 'Magic Methods: __str__ and __eq__',
    titleZh: '魔术方法：__str__ 和 __eq__',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'magic-methods'],
    description: 'Create a Point class with x, y. Implement __str__ (format: "(x, y)") and __eq__. Read two points and print each, then print whether they are equal ("Equal" or "Not Equal").',
    descriptionZh: '创建 Point 类，有 x, y。实现 __str__（格式："(x, y)"）和 __eq__。读取两个点并输出，然后输出是否相等（"Equal" 或 "Not Equal"）。',
    examples: [{ input: '1 2\n1 2', output: '(1, 2)\n(1, 2)\nEqual' }],
    starterCode: `class Point:
    def __init__(self, x, y):
        # TODO
        pass

    def __str__(self):
        # TODO: Return "(x, y)"
        pass

    def __eq__(self, other):
        # TODO: Compare x and y
        pass

# Read two points, print them, check equality`,
    solution: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())
p1 = Point(x1, y1)
p2 = Point(x2, y2)
print(p1)
print(p2)
print("Equal" if p1 == p2 else "Not Equal")`,
    hints: ['__str__ should return a string representation', '__eq__ compares self with other', 'print() automatically calls __str__'],
    hintsZh: ['__str__ 应返回字符串表示', '__eq__ 比较 self 和 other', 'print() 自动调用 __str__'],
    testCases: [
      { input: '1 2\n1 2', expectedOutput: '(1, 2)\n(1, 2)\nEqual' },
      { input: '1 2\n3 4', expectedOutput: '(1, 2)\n(3, 4)\nNot Equal' },
    ],
  },
  {
    id: 'py-ex-4-04',
    title: 'Decorator: Timer',
    titleZh: '装饰器：计时器',
    difficulty: 'medium',
    level: 4,
    category: 'Decorators',
    categoryZh: '装饰器',
    tags: ['decorator', 'function'],
    description: 'Create a decorator that prints "START" before and "END" after a function call. Apply it to a function that reads a string and prints it uppercased.',
    descriptionZh: '创建一个装饰器，在函数调用前输出 "START"，调用后输出 "END"。将其应用于一个读取字符串并输出大写的函数。',
    examples: [{ input: 'hello', output: 'START\nHELLO\nEND' }],
    starterCode: `def my_decorator(func):
    # TODO: Create wrapper that prints START/END
    pass

@my_decorator
def process():
    # TODO: Read string and print uppercase
    pass

process()`,
    solution: `def my_decorator(func):
    # Wrapper prints START and END around the function
    def wrapper(*args, **kwargs):
        print("START")
        result = func(*args, **kwargs)
        print("END")
        return result
    return wrapper

@my_decorator
def process():
    s = input()
    print(s.upper())

process()`,
    hints: ['A decorator returns a wrapper function', 'The wrapper calls the original function inside', 'Use *args, **kwargs for flexibility'],
    hintsZh: ['装饰器返回一个包装函数', '包装函数在内部调用原函数', '使用 *args, **kwargs 增加灵活性'],
    testCases: [
      { input: 'hello', expectedOutput: 'START\nHELLO\nEND' },
      { input: 'world', expectedOutput: 'START\nWORLD\nEND' },
    ],
  },
  {
    id: 'py-ex-4-05',
    title: 'Generator: Range Clone',
    titleZh: '生成器：Range克隆',
    difficulty: 'medium',
    level: 4,
    category: 'Generators',
    categoryZh: '生成器',
    tags: ['generator', 'yield'],
    description: 'Implement a generator function my_range(start, end, step) that yields values from start up to (not including) end with given step. Read start, end, step and print all values space-separated.',
    descriptionZh: '实现生成器函数 my_range(start, end, step)，从 start 到 end（不含）按 step 生成值。读取 start、end、step 并用空格输出所有值。',
    examples: [{ input: '1 10 2', output: '1 3 5 7 9' }],
    starterCode: `def my_range(start, end, step):
    # TODO: Yield values from start to end with step
    pass

start, end, step = map(int, input().split())
print(" ".join(str(x) for x in my_range(start, end, step)))`,
    solution: `def my_range(start, end, step):
    # Generator using yield
    current = start
    while current < end:
        yield current
        current += step

start, end, step = map(int, input().split())
print(" ".join(str(x) for x in my_range(start, end, step)))`,
    hints: ['Use yield instead of return', 'Keep a current variable, increment by step', 'Loop while current < end'],
    hintsZh: ['使用 yield 而不是 return', '维护 current 变量，每次加 step', '当 current < end 时循环'],
    testCases: [
      { input: '1 10 2', expectedOutput: '1 3 5 7 9' },
      { input: '0 15 3', expectedOutput: '0 3 6 9 12' },
    ],
  },
  {
    id: 'py-ex-4-06',
    title: 'Context Manager',
    titleZh: '上下文管理器',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['context-manager', 'class'],
    description: 'Create a context manager class Indent that prints "BEGIN" on enter and "END" on exit. Inside the with block, read and print a string. Output should be: BEGIN, the string, END.',
    descriptionZh: '创建上下文管理器类 Indent，进入时输出 "BEGIN"，退出时输出 "END"。在 with 块中读取并输出一个字符串。输出顺序：BEGIN、字符串、END。',
    examples: [{ input: 'hello', output: 'BEGIN\nhello\nEND' }],
    starterCode: `class Indent:
    def __enter__(self):
        # TODO: Print BEGIN
        pass

    def __exit__(self, *args):
        # TODO: Print END
        pass

with Indent():
    # TODO: Read and print a string
    pass`,
    solution: `class Indent:
    def __enter__(self):
        print("BEGIN")
        return self

    def __exit__(self, *args):
        print("END")

with Indent():
    s = input()
    print(s)`,
    hints: ['__enter__ is called when entering "with"', '__exit__ is called when leaving "with"', '__enter__ should return self'],
    hintsZh: ['__enter__ 在进入 "with" 时调用', '__exit__ 在离开 "with" 时调用', '__enter__ 应该返回 self'],
    testCases: [
      { input: 'hello', expectedOutput: 'BEGIN\nhello\nEND' },
      { input: 'test', expectedOutput: 'BEGIN\ntest\nEND' },
    ],
  },
  {
    id: 'py-ex-4-07',
    title: 'Custom Exception',
    titleZh: '自定义异常',
    difficulty: 'medium',
    level: 4,
    category: 'Exceptions',
    categoryZh: '异常处理',
    tags: ['exception', 'class'],
    description: 'Read an integer age. If age < 0 or > 150, catch the error and print "Invalid age: <age>". Otherwise print "Valid: <age>". Use a custom InvalidAgeError exception.',
    descriptionZh: '读取整数年龄。如果 age < 0 或 > 150，捕获错误并输出 "Invalid age: <age>"。否则输出 "Valid: <age>"。使用自定义 InvalidAgeError 异常。',
    examples: [{ input: '25', output: 'Valid: 25' }],
    starterCode: `class InvalidAgeError(Exception):
    # TODO: Custom exception
    pass

def validate_age(age):
    # TODO: Raise InvalidAgeError if invalid
    pass

# TODO: Read age, validate, handle exception`,
    solution: `class InvalidAgeError(Exception):
    def __init__(self, age):
        self.age = age
        super().__init__(f"Invalid age: {age}")

def validate_age(age):
    if age < 0 or age > 150:
        raise InvalidAgeError(age)

age = int(input())
try:
    validate_age(age)
    print(f"Valid: {age}")
except InvalidAgeError as e:
    print(f"Invalid age: {e.age}")`,
    hints: ['Inherit from Exception', 'Use raise to throw the exception', 'Catch with try/except'],
    hintsZh: ['继承 Exception', '使用 raise 抛出异常', '用 try/except 捕获'],
    testCases: [
      { input: '25', expectedOutput: 'Valid: 25' },
      { input: '-5', expectedOutput: 'Invalid age: -5' },
      { input: '200', expectedOutput: 'Invalid age: 200' },
    ],
  },
  {
    id: 'py-ex-4-08',
    title: 'Property Decorator',
    titleZh: 'Property装饰器',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['property', 'class'],
    description: 'Create a Temperature class with a Celsius value. Use @property to provide a fahrenheit property. Read Celsius, print Fahrenheit with 1 decimal place.',
    descriptionZh: '创建 Temperature 类，包含摄氏值。使用 @property 提供华氏温度属性。读取摄氏度，输出华氏度（1位小数）。',
    examples: [{ input: '100', output: '212.0' }],
    starterCode: `class Temperature:
    def __init__(self, celsius):
        # TODO
        pass

    @property
    def fahrenheit(self):
        # TODO: Return Fahrenheit value
        pass

c = float(input())
t = Temperature(c)
print(f"{t.fahrenheit:.1f}")`,
    solution: `class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    @property
    def fahrenheit(self):
        # F = C * 9/5 + 32
        return self.celsius * 9 / 5 + 32

c = float(input())
t = Temperature(c)
print(f"{t.fahrenheit:.1f}")`,
    hints: ['@property makes a method behave like an attribute', 'Access with t.fahrenheit (no parentheses)', 'F = C × 9/5 + 32'],
    hintsZh: ['@property 让方法像属性一样访问', '用 t.fahrenheit 访问（无括号）', 'F = C × 9/5 + 32'],
    testCases: [
      { input: '100', expectedOutput: '212.0' },
      { input: '0', expectedOutput: '32.0' },
    ],
  },
  {
    id: 'py-ex-4-09',
    title: 'Magic Method: __add__',
    titleZh: '魔术方法：__add__',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'magic-methods', 'operator-overload'],
    description: 'Create a Vector class with x, y. Implement __add__ to add vectors and __str__ to print as "(x, y)". Read two vectors and print their sum.',
    descriptionZh: '创建 Vector 类，有 x, y。实现 __add__ 进行向量加法，__str__ 输出 "(x, y)"。读取两个向量并输出它们的和。',
    examples: [{ input: '1 2\n3 4', output: '(4, 6)' }],
    starterCode: `class Vector:
    def __init__(self, x, y):
        # TODO
        pass

    def __add__(self, other):
        # TODO: Return new Vector with added components
        pass

    def __str__(self):
        # TODO: Return "(x, y)"
        pass

x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())
v1 = Vector(x1, y1)
v2 = Vector(x2, y2)
print(v1 + v2)`,
    solution: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        # Add corresponding components
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"({self.x}, {self.y})"

x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())
v1 = Vector(x1, y1)
v2 = Vector(x2, y2)
print(v1 + v2)`,
    hints: ['__add__ is called when using +', 'Return a new Vector from __add__', '__str__ is called by print()'],
    hintsZh: ['使用 + 时调用 __add__', '__add__ 返回一个新的 Vector', 'print() 调用 __str__'],
    testCases: [
      { input: '1 2\n3 4', expectedOutput: '(4, 6)' },
      { input: '10 20\n-5 -10', expectedOutput: '(5, 10)' },
    ],
  },
  {
    id: 'py-ex-4-10',
    title: 'Iterator Protocol',
    titleZh: '迭代器协议',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['iterator', 'class'],
    description: 'Create a Countdown class that implements the iterator protocol (__iter__ and __next__). Read n, iterate and print each value from n down to 1, space-separated.',
    descriptionZh: '创建 Countdown 类，实现迭代器协议（__iter__ 和 __next__）。读取 n，迭代输出从 n 到 1 的值，空格分隔。',
    examples: [{ input: '5', output: '5 4 3 2 1' }],
    starterCode: `class Countdown:
    def __init__(self, start):
        # TODO
        pass

    def __iter__(self):
        # TODO
        pass

    def __next__(self):
        # TODO: Return next value or raise StopIteration
        pass

n = int(input())
print(" ".join(str(x) for x in Countdown(n)))`,
    solution: `class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current < 1:
            raise StopIteration
        val = self.current
        self.current -= 1
        return val

n = int(input())
print(" ".join(str(x) for x in Countdown(n)))`,
    hints: ['__iter__ returns self', '__next__ returns the next value', 'Raise StopIteration when done'],
    hintsZh: ['__iter__ 返回 self', '__next__ 返回下一个值', '结束时抛出 StopIteration'],
    testCases: [
      { input: '5', expectedOutput: '5 4 3 2 1' },
      { input: '3', expectedOutput: '3 2 1' },
    ],
  },
  // ============================================================
  // LEVEL 5: ADVANCED (10 exercises)
  // ============================================================
  {
    id: 'py-ex-5-01',
    title: 'Bubble Sort',
    titleZh: '冒泡排序',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['sorting', 'algorithm'],
    description: 'Read space-separated integers. Implement bubble sort and print the sorted list space-separated.',
    descriptionZh: '读取空格分隔的整数。实现冒泡排序并输出排序后的列表，空格分隔。',
    examples: [{ input: '5 3 8 1 9 2', output: '1 2 3 5 8 9' }],
    starterCode: `def bubble_sort(arr):
    # TODO: Implement bubble sort in-place
    pass

nums = list(map(int, input().split()))
bubble_sort(nums)
print(" ".join(map(str, nums)))`,
    solution: `def bubble_sort(arr):
    # Repeatedly swap adjacent elements if out of order
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break  # Optimization: stop if no swaps occurred

nums = list(map(int, input().split()))
bubble_sort(nums)
print(" ".join(map(str, nums)))`,
    hints: ['Compare adjacent elements and swap if needed', 'Outer loop runs n times', 'Inner loop shrinks each iteration'],
    hintsZh: ['比较相邻元素，如果需要就交换', '外层循环运行 n 次', '内层循环每次缩短'],
    testCases: [
      { input: '5 3 8 1 9 2', expectedOutput: '1 2 3 5 8 9' },
      { input: '1', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-5-02',
    title: 'Binary Search',
    titleZh: '二分查找',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['search', 'algorithm'],
    description: 'Read a sorted list of space-separated integers, then a target. Print the index (0-based) if found, or -1.',
    descriptionZh: '读取排序的空格分隔整数列表，然后读取目标值。如果找到输出索引（0开始），否则输出 -1。',
    examples: [{ input: '1 3 5 7 9\n5', output: '2' }],
    starterCode: `def binary_search(arr, target):
    # TODO: Implement binary search, return index or -1
    pass

nums = list(map(int, input().split()))
target = int(input())
print(binary_search(nums, target))`,
    solution: `def binary_search(arr, target):
    # Classic binary search with two pointers
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

nums = list(map(int, input().split()))
target = int(input())
print(binary_search(nums, target))`,
    hints: ['Maintain lo and hi pointers', 'Check mid = (lo + hi) // 2', 'Narrow the search range each step'],
    hintsZh: ['维护 lo 和 hi 指针', '检查 mid = (lo + hi) // 2', '每步缩小搜索范围'],
    testCases: [
      { input: '1 3 5 7 9\n5', expectedOutput: '2' },
      { input: '1 3 5 7 9\n4', expectedOutput: '-1' },
    ],
  },
  {
    id: 'py-ex-5-03',
    title: 'Two Sum',
    titleZh: '两数之和',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['hash-map', 'algorithm'],
    description: 'Read space-separated integers and a target. Find two indices (0-based) whose values sum to target. Print them space-separated (smaller index first). Guaranteed exactly one solution.',
    descriptionZh: '读取空格分隔的整数和目标值。找出两个索引（0开始），其值之和等于目标。用空格输出（小索引在前）。保证恰好有一个解。',
    examples: [{ input: '2 7 11 15\n9', output: '0 1' }],
    starterCode: `def two_sum(nums, target):
    # TODO: Return indices of the two numbers that add up to target
    pass

nums = list(map(int, input().split()))
target = int(input())
a, b = two_sum(nums, target)
print(a, b)`,
    solution: `def two_sum(nums, target):
    # Use hash map for O(n) lookup
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i

nums = list(map(int, input().split()))
target = int(input())
a, b = two_sum(nums, target)
print(a, b)`,
    hints: ['Use a dictionary to store seen values and their indices', 'For each number, check if (target - number) exists in the dict', 'O(n) time complexity with hash map'],
    hintsZh: ['使用字典存储已见值和索引', '对每个数，检查 (target - number) 是否在字典中', '使用哈希表实现 O(n) 时间复杂度'],
    testCases: [
      { input: '2 7 11 15\n9', expectedOutput: '0 1' },
      { input: '3 2 4\n6', expectedOutput: '1 2' },
    ],
  },
  {
    id: 'py-ex-5-04',
    title: 'Stack Implementation',
    titleZh: '栈实现',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['stack', 'class'],
    description: 'Implement a Stack class. Read operations: "push X", "pop", "peek", "size". For pop and peek, print the value. For size, print the count. Print "Empty" for pop/peek on empty stack.',
    descriptionZh: '实现 Stack 类。读取操作："push X"、"pop"、"peek"、"size"。pop 和 peek 输出值，size 输出数量。空栈 pop/peek 输出 "Empty"。',
    examples: [{ input: '5\npush 1\npush 2\npeek\npop\nsize', output: '2\n2\n1' }],
    starterCode: `class Stack:
    def __init__(self):
        # TODO
        pass

    def push(self, val):
        # TODO
        pass

    def pop(self):
        # TODO
        pass

    def peek(self):
        # TODO
        pass

    def size(self):
        # TODO
        pass

# TODO: Read and process operations`,
    solution: `class Stack:
    def __init__(self):
        self.items = []

    def push(self, val):
        self.items.append(val)

    def pop(self):
        if not self.items:
            return "Empty"
        return self.items.pop()

    def peek(self):
        if not self.items:
            return "Empty"
        return self.items[-1]

    def size(self):
        return len(self.items)

s = Stack()
n = int(input())
for _ in range(n):
    line = input().split()
    op = line[0]
    if op == "push":
        s.push(int(line[1]))
    elif op == "pop":
        print(s.pop())
    elif op == "peek":
        print(s.peek())
    elif op == "size":
        print(s.size())`,
    hints: ['Use a list as the underlying storage', 'append() for push, pop() for pop', 'Check if empty before pop/peek'],
    hintsZh: ['使用列表作为底层存储', 'append() 用于 push，pop() 用于 pop', 'pop/peek 前检查是否为空'],
    testCases: [
      { input: '5\npush 1\npush 2\npeek\npop\nsize', expectedOutput: '2\n2\n1' },
      { input: '3\npop\npush 5\npeek', expectedOutput: 'Empty\n5' },
    ],
  },
  {
    id: 'py-ex-5-05',
    title: 'Queue Implementation',
    titleZh: '队列实现',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['queue', 'deque'],
    description: 'Implement a Queue using collections.deque. Read operations: "enqueue X", "dequeue", "front", "size". Print values for dequeue/front/size. Print "Empty" for dequeue/front on empty queue.',
    descriptionZh: '使用 collections.deque 实现队列。读取操作："enqueue X"、"dequeue"、"front"、"size"。dequeue/front/size 输出值。空队列 dequeue/front 输出 "Empty"。',
    examples: [{ input: '5\nenqueue 1\nenqueue 2\nfront\ndequeue\nsize', output: '1\n1\n1' }],
    starterCode: `from collections import deque

class Queue:
    def __init__(self):
        # TODO
        pass

    def enqueue(self, val):
        # TODO
        pass

    def dequeue(self):
        # TODO
        pass

    def front(self):
        # TODO
        pass

    def size(self):
        # TODO
        pass

# TODO: Read and process operations`,
    solution: `from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, val):
        self.items.append(val)

    def dequeue(self):
        if not self.items:
            return "Empty"
        return self.items.popleft()

    def front(self):
        if not self.items:
            return "Empty"
        return self.items[0]

    def size(self):
        return len(self.items)

q = Queue()
n = int(input())
for _ in range(n):
    line = input().split()
    op = line[0]
    if op == "enqueue":
        q.enqueue(int(line[1]))
    elif op == "dequeue":
        print(q.dequeue())
    elif op == "front":
        print(q.front())
    elif op == "size":
        print(q.size())`,
    hints: ['deque.append() adds to right, popleft() removes from left', 'FIFO: first in, first out', 'Check empty before dequeue/front'],
    hintsZh: ['deque.append() 从右添加，popleft() 从左移除', 'FIFO：先进先出', 'dequeue/front 前检查是否为空'],
    testCases: [
      { input: '5\nenqueue 1\nenqueue 2\nfront\ndequeue\nsize', expectedOutput: '1\n1\n1' },
      { input: '2\ndequeue\nfront', expectedOutput: 'Empty\nEmpty' },
    ],
  },
  {
    id: 'py-ex-5-06',
    title: 'Linked List',
    titleZh: '链表',
    difficulty: 'hard',
    level: 5,
    category: 'Data Structures',
    categoryZh: '数据结构',
    tags: ['linked-list', 'class'],
    description: 'Implement a singly linked list with append and display. Read n integers, append each, then print all values separated by " -> " ending with "None".',
    descriptionZh: '实现单链表，支持 append 和 display。读取 n 个整数，逐个添加，然后用 " -> " 分隔输出所有值，以 "None" 结尾。',
    examples: [{ input: '3\n1\n2\n3', output: '1 -> 2 -> 3 -> None' }],
    starterCode: `class Node:
    def __init__(self, val):
        # TODO
        pass

class LinkedList:
    def __init__(self):
        # TODO
        pass

    def append(self, val):
        # TODO
        pass

    def display(self):
        # TODO: Return string like "1 -> 2 -> None"
        pass

# TODO: Read n integers, build list, display`,
    solution: `class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new_node

    def display(self):
        parts = []
        curr = self.head
        while curr:
            parts.append(str(curr.val))
            curr = curr.next
        parts.append("None")
        return " -> ".join(parts)

n = int(input())
ll = LinkedList()
for _ in range(n):
    ll.append(int(input()))
print(ll.display())`,
    hints: ['Each Node has val and next', 'Traverse to the end to append', 'For display, walk through all nodes'],
    hintsZh: ['每个 Node 有 val 和 next', '遍历到末尾进行添加', '显示时遍历所有节点'],
    testCases: [
      { input: '3\n1\n2\n3', expectedOutput: '1 -> 2 -> 3 -> None' },
      { input: '1\n42', expectedOutput: '42 -> None' },
    ],
  },
  {
    id: 'py-ex-5-07',
    title: 'Regex: Email Validation',
    titleZh: '正则表达式：邮箱验证',
    difficulty: 'hard',
    level: 5,
    category: 'Regex',
    categoryZh: '正则表达式',
    tags: ['regex', 're'],
    description: 'Read n strings. Print only the valid email addresses (simple pattern: word chars, @, word chars, dot, 2-4 letters), one per line. If none valid, print "None".',
    descriptionZh: '读取 n 个字符串。只输出有效的邮箱地址（简单模式：单词字符、@、单词字符、点、2-4个字母），每行一个。如果没有有效的，输出 "None"。',
    examples: [{ input: '3\nuser@example.com\ninvalid@\ntest@domain.org', output: 'user@example.com\ntest@domain.org' }],
    starterCode: `import re

# TODO: Read n strings, filter valid emails using regex
`,
    solution: `import re

# Simple email pattern
pattern = r'^[\\w.+-]+@[\\w-]+\\.[a-zA-Z]{2,4}$'
n = int(input())
valid = []
for _ in range(n):
    email = input()
    if re.match(pattern, email):
        valid.append(email)
if valid:
    print("\\n".join(valid))
else:
    print("None")`,
    hints: ['Use re.match() with a pattern', 'Email pattern: \\w+@\\w+\\.\\w{2,4}', 'Use ^ and $ for full string match'],
    hintsZh: ['使用 re.match() 配合模式', '邮箱模式：\\w+@\\w+\\.\\w{2,4}', '使用 ^ 和 $ 进行完整匹配'],
    testCases: [
      { input: '3\nuser@example.com\ninvalid@\ntest@domain.org', expectedOutput: 'user@example.com\ntest@domain.org' },
      { input: '1\nbad', expectedOutput: 'None' },
    ],
  },
  {
    id: 'py-ex-5-08',
    title: 'Itertools: Combinations',
    titleZh: 'Itertools：组合',
    difficulty: 'hard',
    level: 5,
    category: 'Itertools',
    categoryZh: 'Itertools',
    tags: ['itertools', 'combinations'],
    description: 'Read space-separated integers and k. Print all combinations of k elements, one per line, each combination space-separated.',
    descriptionZh: '读取空格分隔的整数和 k。输出所有 k 个元素的组合，每行一个组合，空格分隔。',
    examples: [{ input: '1 2 3\n2', output: '1 2\n1 3\n2 3' }],
    starterCode: `from itertools import combinations

# TODO: Read numbers and k, print all combinations
`,
    solution: `from itertools import combinations

nums = list(map(int, input().split()))
k = int(input())
for combo in combinations(nums, k):
    print(" ".join(map(str, combo)))`,
    hints: ['Use itertools.combinations(iterable, k)', 'Each combination is a tuple', 'Iterate and print each one'],
    hintsZh: ['使用 itertools.combinations(iterable, k)', '每个组合是一个元组', '遍历并输出每个组合'],
    testCases: [
      { input: '1 2 3\n2', expectedOutput: '1 2\n1 3\n2 3' },
      { input: '1 2 3 4\n3', expectedOutput: '1 2 3\n1 2 4\n1 3 4\n2 3 4' },
    ],
  },
  {
    id: 'py-ex-5-09',
    title: 'Merge Sort',
    titleZh: '归并排序',
    difficulty: 'hard',
    level: 5,
    category: 'Algorithms',
    categoryZh: '算法',
    tags: ['sorting', 'recursion', 'divide-and-conquer'],
    description: 'Read space-separated integers. Implement merge sort and print the sorted list space-separated.',
    descriptionZh: '读取空格分隔的整数。实现归并排序并输出排序后的列表，空格分隔。',
    examples: [{ input: '5 3 8 1 9 2', output: '1 2 3 5 8 9' }],
    starterCode: `def merge_sort(arr):
    # TODO: Implement merge sort
    pass

nums = list(map(int, input().split()))
sorted_nums = merge_sort(nums)
print(" ".join(map(str, sorted_nums)))`,
    solution: `def merge_sort(arr):
    # Base case: single element is already sorted
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    # Merge two sorted halves
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

nums = list(map(int, input().split()))
sorted_nums = merge_sort(nums)
print(" ".join(map(str, sorted_nums)))`,
    hints: ['Divide array in half recursively', 'Merge two sorted halves with two pointers', 'Base case: array of length 0 or 1'],
    hintsZh: ['递归地将数组分成两半', '用双指针合并两个有序数组', '基础情况：长度为 0 或 1 的数组'],
    testCases: [
      { input: '5 3 8 1 9 2', expectedOutput: '1 2 3 5 8 9' },
      { input: '3 1 2', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'py-ex-5-10',
    title: 'Functional: Reduce and Compose',
    titleZh: '函数式：Reduce与组合',
    difficulty: 'hard',
    level: 5,
    category: 'Functional',
    categoryZh: '函数式编程',
    tags: ['functools', 'reduce', 'functional'],
    description: 'Read space-separated integers. Use functools.reduce to compute the product of all numbers. Then apply a chain: double each, filter odds, sum the rest. Print product and final sum on separate lines.',
    descriptionZh: '读取空格分隔的整数。使用 functools.reduce 计算所有数的乘积。然后链式操作：每个翻倍、过滤奇数、求和。分别输出乘积和最终和。',
    examples: [{ input: '1 2 3 4 5', output: '120\n24' }],
    starterCode: `from functools import reduce

# TODO: Compute product with reduce, then double->filter even->sum
`,
    solution: `from functools import reduce

nums = list(map(int, input().split()))
# Product using reduce
product = reduce(lambda a, b: a * b, nums)
print(product)
# Chain: double each, keep even, sum
doubled = list(map(lambda x: x * 2, nums))
evens = list(filter(lambda x: x % 2 == 0, doubled))
print(sum(evens))`,
    hints: ['reduce(func, iterable) applies func cumulatively', 'lambda a, b: a * b multiplies pairs', 'Chain map -> filter -> sum'],
    hintsZh: ['reduce(func, iterable) 累积应用函数', 'lambda a, b: a * b 将一对数相乘', '链式调用 map -> filter -> sum'],
    testCases: [
      { input: '1 2 3 4 5', expectedOutput: '120\n24' },
      { input: '2 3', expectedOutput: '6\n10' },
    ],
  },
];