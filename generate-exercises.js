// Generate 220+ new exercises to append to python-exercises.ts
const fs = require('fs');

const exercises = [];

// Helper to create exercise
function ex(id, title, titleZh, difficulty, level, category, categoryZh, tags, desc, descZh, examples, starterCode, solution, hints, hintsZh, testCases) {
  return { id, title, titleZh, difficulty, level, category, categoryZh, tags, description: desc, descriptionZh: descZh, examples, starterCode, solution, hints, hintsZh, testCases };
}

// ============================================================
// LEVEL 1: BASICS (exercises 26-60, 35 new)
// ============================================================

exercises.push(ex('py-ex-1-26', 'String Length', '字符串长度', 'easy', 1, 'String', '字符串', ['len', 'string'],
  'Read a string and print its length.',
  '读取一个字符串并输出它的长度。',
  [{ input: 'hello', output: '5' }],
  `# TODO: Read a string and print its length\n`,
  `# Use len() to get string length\ns = input()\nprint(len(s))`,
  ['Use len() to get length', 'input() returns a string'],
  ['使用 len() 获取长度', 'input() 返回字符串'],
  [{ input: 'hello', expectedOutput: '5' }, { input: 'Python', expectedOutput: '6' }]
));

exercises.push(ex('py-ex-1-27', 'String Uppercase', '字符串大写', 'easy', 1, 'String Methods', '字符串方法', ['upper', 'string'],
  'Read a string and print it in uppercase.',
  '读取一个字符串并以大写形式输出。',
  [{ input: 'hello', output: 'HELLO' }],
  `# TODO: Read a string and print it in uppercase\n`,
  `# Use .upper() method to convert to uppercase\ns = input()\nprint(s.upper())`,
  ['Strings have an .upper() method', 'It returns a new string'],
  ['字符串有 .upper() 方法', '它返回一个新字符串'],
  [{ input: 'hello', expectedOutput: 'HELLO' }, { input: 'Python', expectedOutput: 'PYTHON' }]
));

exercises.push(ex('py-ex-1-28', 'String Lowercase', '字符串小写', 'easy', 1, 'String Methods', '字符串方法', ['lower', 'string'],
  'Read a string and print it in lowercase.',
  '读取一个字符串并以小写形式输出。',
  [{ input: 'HELLO', output: 'hello' }],
  `# TODO: Read a string and print it in lowercase\n`,
  `# Use .lower() method\ns = input()\nprint(s.lower())`,
  ['Use .lower() method', 'Returns a new lowercase string'],
  ['使用 .lower() 方法', '返回新的小写字符串'],
  [{ input: 'HELLO', expectedOutput: 'hello' }, { input: 'Python', expectedOutput: 'python' }]
));

exercises.push(ex('py-ex-1-29', 'String Slicing', '字符串切片', 'easy', 1, 'Slicing', '切片', ['slice', 'string'],
  'Read a string and print the first 3 characters.',
  '读取一个字符串并输出前3个字符。',
  [{ input: 'Python', output: 'Pyt' }],
  `# TODO: Read a string and print its first 3 characters\n`,
  `# Use slicing s[:3] to get first 3 chars\ns = input()\nprint(s[:3])`,
  ['Use s[:3] for first 3 characters', 'Slicing syntax: s[start:end]'],
  ['使用 s[:3] 获取前3个字符', '切片语法: s[start:end]'],
  [{ input: 'Python', expectedOutput: 'Pyt' }, { input: 'Hello', expectedOutput: 'Hel' }]
));

exercises.push(ex('py-ex-1-30', 'Reverse a String', '反转字符串', 'easy', 1, 'Slicing', '切片', ['slice', 'reverse'],
  'Read a string and print it reversed.',
  '读取一个字符串并反转输出。',
  [{ input: 'hello', output: 'olleh' }],
  `# TODO: Read a string and print it reversed\n`,
  `# Use slicing with step -1 to reverse\ns = input()\nprint(s[::-1])`,
  ['Use s[::-1] to reverse', 'The third slice parameter is the step'],
  ['使用 s[::-1] 反转', '切片的第三个参数是步长'],
  [{ input: 'hello', expectedOutput: 'olleh' }, { input: 'Python', expectedOutput: 'nohtyP' }]
));

exercises.push(ex('py-ex-1-31', 'Escape Characters', '转义字符', 'easy', 1, 'String', '字符串', ['escape', 'string'],
  'Print the following on two lines:\nLine 1: Hello\nLine 2: World',
  '打印以下两行：\n第一行: Hello\n第二行: World',
  [{ input: '', output: 'Hello\nWorld' }],
  `# TODO: Print Hello and World on separate lines using \\n\n`,
  `# Use \\n for newline\nprint("Hello\\nWorld")`,
  ['Use \\n for newline', 'You can also use two print statements'],
  ['使用 \\n 换行', '也可以使用两个 print 语句'],
  [{ input: '', expectedOutput: 'Hello\nWorld' }, { input: '', expectedOutput: 'Hello\nWorld' }]
));

exercises.push(ex('py-ex-1-32', 'Multiple Assignment', '多重赋值', 'easy', 1, 'Variables', '变量', ['assignment', 'variables'],
  'Read three integers a, b, c (one per line) and print their sum.',
  '读取三个整数 a, b, c（每行一个）并输出它们的和。',
  [{ input: '1\n2\n3', output: '6' }],
  `# TODO: Read three integers and print their sum\n`,
  `# Read three integers using multiple assignment\na = int(input())\nb = int(input())\nc = int(input())\nprint(a + b + c)`,
  ['Read each integer with int(input())', 'Use + to sum them'],
  ['使用 int(input()) 读取每个整数', '使用 + 求和'],
  [{ input: '1\n2\n3', expectedOutput: '6' }, { input: '10\n20\n30', expectedOutput: '60' }]
));

exercises.push(ex('py-ex-1-33', 'Modulo Operator', '取模运算', 'easy', 1, 'Arithmetic', '算术运算', ['modulo', 'operator'],
  'Read two integers and print the remainder of dividing the first by the second.',
  '读取两个整数，输出第一个除以第二个的余数。',
  [{ input: '10\n3', output: '1' }],
  `# TODO: Read two integers and print the remainder\n`,
  `# Use % operator for modulo\na = int(input())\nb = int(input())\nprint(a % b)`,
  ['Use the % operator', 'a % b gives the remainder'],
  ['使用 % 运算符', 'a % b 得到余数'],
  [{ input: '10\n3', expectedOutput: '1' }, { input: '17\n5', expectedOutput: '2' }]
));

exercises.push(ex('py-ex-1-34', 'Floor Division', '整除运算', 'easy', 1, 'Arithmetic', '算术运算', ['floor-division', 'operator'],
  'Read two integers and print the floor division result.',
  '读取两个整数，输出整除结果。',
  [{ input: '10\n3', output: '3' }],
  `# TODO: Read two integers and print floor division result\n`,
  `# Use // for floor division\na = int(input())\nb = int(input())\nprint(a // b)`,
  ['Use // for floor division', 'It rounds down to nearest integer'],
  ['使用 // 进行整除', '它向下取整到最近的整数'],
  [{ input: '10\n3', expectedOutput: '3' }, { input: '7\n2', expectedOutput: '3' }]
));

exercises.push(ex('py-ex-1-35', 'Exponentiation', '幂运算', 'easy', 1, 'Arithmetic', '算术运算', ['exponent', 'operator'],
  'Read a base and exponent, print the result of base raised to the power.',
  '读取底数和指数，输出底数的指数次幂。',
  [{ input: '2\n3', output: '8' }],
  `# TODO: Read base and exponent, print the power result\n`,
  `# Use ** for exponentiation\nbase = int(input())\nexp = int(input())\nprint(base ** exp)`,
  ['Use ** operator for power', 'base ** exp means base^exp'],
  ['使用 ** 运算符求幂', 'base ** exp 表示 base 的 exp 次方'],
  [{ input: '2\n3', expectedOutput: '8' }, { input: '5\n2', expectedOutput: '25' }]
));

exercises.push(ex('py-ex-1-36', 'Comparison Operators', '比较运算符', 'easy', 1, 'Operators', '运算符', ['comparison', 'boolean'],
  'Read two integers. Print True if the first is greater, False otherwise.',
  '读取两个整数。如果第一个更大输出 True，否则输出 False。',
  [{ input: '5\n3', output: 'True' }],
  `# TODO: Read two integers and compare them\n`,
  `# Use > comparison operator\na = int(input())\nb = int(input())\nprint(a > b)`,
  ['Use > to compare', 'Comparison returns True or False'],
  ['使用 > 进行比较', '比较运算返回 True 或 False'],
  [{ input: '5\n3', expectedOutput: 'True' }, { input: '2\n7', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-1-37', 'Logical AND', '逻辑与', 'easy', 1, 'Operators', '运算符', ['logical', 'and'],
  'Read two integers. Print True if both are positive, False otherwise.',
  '读取两个整数。如果两个都是正数输出 True，否则输出 False。',
  [{ input: '3\n5', output: 'True' }],
  `# TODO: Check if both numbers are positive\n`,
  `# Use 'and' for logical AND\na = int(input())\nb = int(input())\nprint(a > 0 and b > 0)`,
  ['Use "and" keyword', 'Check each number > 0'],
  ['使用 "and" 关键字', '检查每个数字 > 0'],
  [{ input: '3\n5', expectedOutput: 'True' }, { input: '-1\n5', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-1-38', 'Logical OR', '逻辑或', 'easy', 1, 'Operators', '运算符', ['logical', 'or'],
  'Read two integers. Print True if at least one is positive.',
  '读取两个整数。如果至少一个是正数输出 True。',
  [{ input: '-1\n5', output: 'True' }],
  `# TODO: Check if at least one number is positive\n`,
  `# Use 'or' for logical OR\na = int(input())\nb = int(input())\nprint(a > 0 or b > 0)`,
  ['Use "or" keyword', 'True if either condition is true'],
  ['使用 "or" 关键字', '任一条件为真则为真'],
  [{ input: '-1\n5', expectedOutput: 'True' }, { input: '-1\n-2', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-1-39', 'Type Function', '类型函数', 'easy', 1, 'Types', '类型', ['type', 'basics'],
  'Read a value. Print the type name: "int" if it\'s a whole number, "float" if it has a decimal point, "str" otherwise.',
  '读取一个值。输出类型名：整数输出"int"，有小数点输出"float"，否则输出"str"。',
  [{ input: '42', output: 'int' }],
  `# TODO: Determine and print the type of the input\n`,
  `# Try to parse as int, then float, else str\nval = input()\ntry:\n    int(val)\n    print("int")\nexcept ValueError:\n    try:\n        float(val)\n        print("float")\n    except ValueError:\n        print("str")`,
  ['Try converting with int() first', 'If that fails, try float()', 'Use try/except to handle errors'],
  ['先尝试用 int() 转换', '如果失败，尝试 float()', '使用 try/except 处理错误'],
  [{ input: '42', expectedOutput: 'int' }, { input: '3.14', expectedOutput: 'float' }, { input: 'hello', expectedOutput: 'str' }]
));

exercises.push(ex('py-ex-1-40', 'Float to Int Conversion', '浮点数转整数', 'easy', 1, 'Type Conversion', '类型转换', ['int', 'float', 'conversion'],
  'Read a float number and print its integer part (truncated toward zero).',
  '读取一个浮点数并输出其整数部分（向零截断）。',
  [{ input: '3.7', output: '3' }],
  `# TODO: Read a float and print its integer part\n`,
  `# Use int() to truncate float to integer\nf = float(input())\nprint(int(f))`,
  ['Use int() to truncate', 'int(3.7) gives 3'],
  ['使用 int() 截断', 'int(3.7) 得到 3'],
  [{ input: '3.7', expectedOutput: '3' }, { input: '9.99', expectedOutput: '9' }]
));

exercises.push(ex('py-ex-1-41', 'String Repeat', '字符串重复', 'easy', 1, 'String', '字符串', ['string', 'multiply'],
  'Read a string and an integer n. Print the string repeated n times.',
  '读取一个字符串和一个整数 n。输出字符串重复 n 次的结果。',
  [{ input: 'ha\n3', output: 'hahaha' }],
  `# TODO: Read a string and integer, print the string repeated n times\n`,
  `# Use * operator to repeat strings\ns = input()\nn = int(input())\nprint(s * n)`,
  ['Use * to repeat strings', 's * 3 repeats s three times'],
  ['使用 * 重复字符串', 's * 3 将 s 重复三次'],
  [{ input: 'ha\n3', expectedOutput: 'hahaha' }, { input: 'ab\n2', expectedOutput: 'abab' }]
));

exercises.push(ex('py-ex-1-42', 'String Contains', '字符串包含', 'easy', 1, 'String Methods', '字符串方法', ['in', 'string'],
  'Read two strings. Print True if the second is found in the first.',
  '读取两个字符串。如果第二个在第一个中找到则输出 True。',
  [{ input: 'hello world\nworld', output: 'True' }],
  `# TODO: Check if second string is in first string\n`,
  `# Use 'in' operator to check substring\ns = input()\nsub = input()\nprint(sub in s)`,
  ['Use "in" operator', '"abc" in "xabcy" is True'],
  ['使用 "in" 运算符', '"abc" in "xabcy" 为 True'],
  [{ input: 'hello world\nworld', expectedOutput: 'True' }, { input: 'hello\nxyz', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-1-43', 'String Replace', '字符串替换', 'easy', 1, 'String Methods', '字符串方法', ['replace', 'string'],
  'Read a string, an old substring, and a new substring. Print the result of replacing old with new.',
  '读取一个字符串、一个旧子串和一个新子串。输出替换后的结果。',
  [{ input: 'hello world\nworld\nPython', output: 'hello Python' }],
  `# TODO: Replace old substring with new substring\n`,
  `# Use .replace() method\ns = input()\nold = input()\nnew = input()\nprint(s.replace(old, new))`,
  ['Use .replace(old, new)', 'It returns a new string'],
  ['使用 .replace(old, new)', '它返回一个新字符串'],
  [{ input: 'hello world\nworld\nPython', expectedOutput: 'hello Python' }, { input: 'aaa\na\nb', expectedOutput: 'bbb' }]
));

exercises.push(ex('py-ex-1-44', 'String Split', '字符串分割', 'easy', 1, 'String Methods', '字符串方法', ['split', 'string'],
  'Read a sentence and print the number of words.',
  '读取一个句子并输出单词数量。',
  [{ input: 'hello world foo', output: '3' }],
  `# TODO: Count words in the sentence\n`,
  `# Use .split() to break into words, then len()\ns = input()\nprint(len(s.split()))`,
  ['Use .split() to get a list of words', 'Use len() to count'],
  ['使用 .split() 获取单词列表', '使用 len() 计数'],
  [{ input: 'hello world foo', expectedOutput: '3' }, { input: 'one', expectedOutput: '1' }]
));

exercises.push(ex('py-ex-1-45', 'String Join', '字符串连接', 'easy', 1, 'String Methods', '字符串方法', ['join', 'string'],
  'Read words separated by spaces. Print them joined by hyphens.',
  '读取以空格分隔的单词。以连字符连接输出。',
  [{ input: 'a b c', output: 'a-b-c' }],
  `# TODO: Join words with hyphens\n`,
  `# Use .join() to combine with separator\nwords = input().split()\nprint("-".join(words))`,
  ['Use "-".join(list)', 'Split first, then join'],
  ['使用 "-".join(list)', '先分割，再连接'],
  [{ input: 'a b c', expectedOutput: 'a-b-c' }, { input: 'hello world', expectedOutput: 'hello-world' }]
));

exercises.push(ex('py-ex-1-46', 'String Strip', '去除空白', 'easy', 1, 'String Methods', '字符串方法', ['strip', 'string'],
  'Read a string with leading/trailing spaces and print it stripped.',
  '读取一个有前后空格的字符串并输出去除空格后的结果。',
  [{ input: '  hello  ', output: 'hello' }],
  `# TODO: Strip whitespace from input\n`,
  `# Use .strip() to remove leading/trailing whitespace\ns = input()\nprint(s.strip())`,
  ['Use .strip() method', 'It removes whitespace from both ends'],
  ['使用 .strip() 方法', '它去除两端的空白'],
  [{ input: '  hello  ', expectedOutput: 'hello' }, { input: '  world ', expectedOutput: 'world' }]
));

exercises.push(ex('py-ex-1-47', 'Check Digit String', '检查数字字符串', 'easy', 1, 'String Methods', '字符串方法', ['isdigit', 'string'],
  'Read a string and print True if it consists only of digits.',
  '读取一个字符串，如果它仅由数字组成则输出 True。',
  [{ input: '12345', output: 'True' }],
  `# TODO: Check if string contains only digits\n`,
  `# Use .isdigit() method\ns = input()\nprint(s.isdigit())`,
  ['Use .isdigit() method', 'Returns True if all characters are digits'],
  ['使用 .isdigit() 方法', '如果所有字符都是数字则返回 True'],
  [{ input: '12345', expectedOutput: 'True' }, { input: 'abc123', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-1-48', 'Count Character', '字符计数', 'easy', 1, 'String Methods', '字符串方法', ['count', 'string'],
  'Read a string and a character. Print how many times the character appears.',
  '读取一个字符串和一个字符。输出该字符出现的次数。',
  [{ input: 'banana\na', output: '3' }],
  `# TODO: Count occurrences of a character in a string\n`,
  `# Use .count() method\ns = input()\nc = input()\nprint(s.count(c))`,
  ['Use .count() method', 's.count(c) counts occurrences'],
  ['使用 .count() 方法', 's.count(c) 计算出现次数'],
  [{ input: 'banana\na', expectedOutput: '3' }, { input: 'hello\nl', expectedOutput: '2' }]
));

exercises.push(ex('py-ex-1-49', 'String Find', '查找子串', 'easy', 1, 'String Methods', '字符串方法', ['find', 'string'],
  'Read a string and a substring. Print the index of first occurrence, or -1 if not found.',
  '读取一个字符串和一个子串。输出第一次出现的位置，未找到则输出 -1。',
  [{ input: 'hello\nll', output: '2' }],
  `# TODO: Find index of substring\n`,
  `# Use .find() method\ns = input()\nsub = input()\nprint(s.find(sub))`,
  ['Use .find() method', 'Returns -1 if not found'],
  ['使用 .find() 方法', '未找到时返回 -1'],
  [{ input: 'hello\nll', expectedOutput: '2' }, { input: 'hello\nxyz', expectedOutput: '-1' }]
));

exercises.push(ex('py-ex-1-50', 'String Starts With', '字符串以…开头', 'easy', 1, 'String Methods', '字符串方法', ['startswith', 'string'],
  'Read a string and a prefix. Print True if the string starts with the prefix.',
  '读取一个字符串和一个前缀。如果字符串以该前缀开头则输出 True。',
  [{ input: 'hello\nhel', output: 'True' }],
  `# TODO: Check if string starts with prefix\n`,
  `# Use .startswith() method\ns = input()\nprefix = input()\nprint(s.startswith(prefix))`,
  ['Use .startswith() method', 'Returns a boolean'],
  ['使用 .startswith() 方法', '返回布尔值'],
  [{ input: 'hello\nhel', expectedOutput: 'True' }, { input: 'hello\nworld', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-1-51', 'Swap Case', '大小写互换', 'easy', 1, 'String Methods', '字符串方法', ['swapcase', 'string'],
  'Read a string and print it with swapped case.',
  '读取一个字符串并输出大小写互换后的结果。',
  [{ input: 'Hello World', output: 'hELLO wORLD' }],
  `# TODO: Swap case of string\n`,
  `# Use .swapcase() method\ns = input()\nprint(s.swapcase())`,
  ['Use .swapcase() method', 'Uppercase becomes lowercase and vice versa'],
  ['使用 .swapcase() 方法', '大写变小写，小写变大写'],
  [{ input: 'Hello World', expectedOutput: 'hELLO wORLD' }, { input: 'PyThOn', expectedOutput: 'pYtHoN' }]
));

exercises.push(ex('py-ex-1-52', 'Title Case', '标题大写', 'easy', 1, 'String Methods', '字符串方法', ['title', 'string'],
  'Read a string and print it in title case.',
  '读取一个字符串并以标题格式输出。',
  [{ input: 'hello world', output: 'Hello World' }],
  `# TODO: Convert to title case\n`,
  `# Use .title() method\ns = input()\nprint(s.title())`,
  ['Use .title() method', 'Capitalizes first letter of each word'],
  ['使用 .title() 方法', '每个单词首字母大写'],
  [{ input: 'hello world', expectedOutput: 'Hello World' }, { input: 'python programming', expectedOutput: 'Python Programming' }]
));

exercises.push(ex('py-ex-1-53', 'Center String', '居中字符串', 'easy', 1, 'String Methods', '字符串方法', ['center', 'string'],
  'Read a string and a width. Print the string centered with * padding.',
  '读取一个字符串和一个宽度。输出以 * 填充居中的字符串。',
  [{ input: 'hi\n10', output: '****hi****' }],
  `# TODO: Center the string with * padding\n`,
  `# Use .center() method with fill character\ns = input()\nw = int(input())\nprint(s.center(w, "*"))`,
  ['Use .center(width, fillchar)', 'Second arg is the fill character'],
  ['使用 .center(width, fillchar)', '第二个参数是填充字符'],
  [{ input: 'hi\n10', expectedOutput: '****hi****' }, { input: 'ab\n6', expectedOutput: '**ab**' }]
));

exercises.push(ex('py-ex-1-54', 'Check Alpha', '检查字母', 'easy', 1, 'String Methods', '字符串方法', ['isalpha', 'string'],
  'Read a string and print True if it contains only letters.',
  '读取一个字符串，如果仅包含字母则输出 True。',
  [{ input: 'Hello', output: 'True' }],
  `# TODO: Check if string is alphabetic\n`,
  `# Use .isalpha() method\ns = input()\nprint(s.isalpha())`,
  ['Use .isalpha() method', 'Returns True if all characters are letters'],
  ['使用 .isalpha() 方法', '如果所有字符都是字母则返回 True'],
  [{ input: 'Hello', expectedOutput: 'True' }, { input: 'Hello123', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-1-55', 'Math: Square Root', '数学：平方根', 'easy', 1, 'Math', '数学', ['math', 'sqrt'],
  'Read a number and print its square root (integer part).',
  '读取一个数字并输出其平方根的整数部分。',
  [{ input: '16', output: '4' }],
  `# TODO: Print the integer square root\n`,
  `# Use math.isqrt() for integer square root\nimport math\nn = int(input())\nprint(math.isqrt(n))`,
  ['Import the math module', 'Use math.isqrt() for integer square root'],
  ['导入 math 模块', '使用 math.isqrt() 获取整数平方根'],
  [{ input: '16', expectedOutput: '4' }, { input: '10', expectedOutput: '3' }]
));

exercises.push(ex('py-ex-1-56', 'Math: Absolute Value', '数学：绝对值', 'easy', 1, 'Math', '数学', ['abs', 'math'],
  'Read an integer and print its absolute value.',
  '读取一个整数并输出其绝对值。',
  [{ input: '-5', output: '5' }],
  `# TODO: Print the absolute value\n`,
  `# Use abs() built-in function\nn = int(input())\nprint(abs(n))`,
  ['Use abs() function', 'abs(-5) returns 5'],
  ['使用 abs() 函数', 'abs(-5) 返回 5'],
  [{ input: '-5', expectedOutput: '5' }, { input: '3', expectedOutput: '3' }]
));

exercises.push(ex('py-ex-1-57', 'Math: Round', '数学：四舍五入', 'easy', 1, 'Math', '数学', ['round', 'math'],
  'Read a float and print it rounded to 2 decimal places.',
  '读取一个浮点数并输出四舍五入到2位小数的结果。',
  [{ input: '3.14159', output: '3.14' }],
  `# TODO: Round to 2 decimal places\n`,
  `# Use round() with 2 decimal places\nf = float(input())\nprint(round(f, 2))`,
  ['Use round(number, ndigits)', 'Second arg specifies decimal places'],
  ['使用 round(number, ndigits)', '第二个参数指定小数位数'],
  [{ input: '3.14159', expectedOutput: '3.14' }, { input: '2.718', expectedOutput: '2.72' }]
));

exercises.push(ex('py-ex-1-58', 'Math: Min and Max', '数学：最小值和最大值', 'easy', 1, 'Math', '数学', ['min', 'max'],
  'Read three integers and print the minimum and maximum on separate lines.',
  '读取三个整数，分别输出最小值和最大值。',
  [{ input: '3\n1\n5', output: '1\n5' }],
  `# TODO: Print min and max of three numbers\n`,
  `# Use min() and max() built-in functions\na = int(input())\nb = int(input())\nc = int(input())\nprint(min(a, b, c))\nprint(max(a, b, c))`,
  ['Use min() and max()', 'They accept multiple arguments'],
  ['使用 min() 和 max()', '它们接受多个参数'],
  [{ input: '3\n1\n5', expectedOutput: '1\n5' }, { input: '10\n20\n15', expectedOutput: '10\n20' }]
));

exercises.push(ex('py-ex-1-59', 'Input Parsing: CSV', '输入解析：CSV', 'easy', 1, 'Input', '输入', ['split', 'input'],
  'Read comma-separated integers and print their sum.',
  '读取逗号分隔的整数并输出它们的和。',
  [{ input: '1,2,3,4', output: '10' }],
  `# TODO: Parse comma-separated integers and print sum\n`,
  `# Split by comma, convert to int, sum\nnums = input().split(",")\nprint(sum(int(x) for x in nums))`,
  ['Split by comma with .split(",")', 'Convert each to int', 'Use sum()'],
  ['使用 .split(",") 按逗号分割', '将每个转换为 int', '使用 sum()'],
  [{ input: '1,2,3,4', expectedOutput: '10' }, { input: '10,20', expectedOutput: '30' }]
));

exercises.push(ex('py-ex-1-60', 'Boolean Check: Even', '布尔检查：偶数', 'easy', 1, 'Boolean', '布尔', ['boolean', 'modulo'],
  'Read an integer and print True if it is even, False otherwise.',
  '读取一个整数，如果是偶数输出 True，否则输出 False。',
  [{ input: '4', output: 'True' }],
  `# TODO: Check if number is even\n`,
  `# Use modulo to check evenness\nn = int(input())\nprint(n % 2 == 0)`,
  ['Even numbers have remainder 0 when divided by 2', 'Use n % 2 == 0'],
  ['偶数除以2余数为0', '使用 n % 2 == 0'],
  [{ input: '4', expectedOutput: 'True' }, { input: '7', expectedOutput: 'False' }]
));

// ============================================================
// LEVEL 2: CONTROL FLOW (exercises 21-60, 40 new)
// ============================================================

exercises.push(ex('py-ex-2-21', 'Count Down', '倒计时', 'easy', 2, 'Loops', '循环', ['while', 'loop'],
  'Read an integer n and print numbers from n down to 1, each on a new line.',
  '读取一个整数 n，从 n 倒数到 1，每行一个数字。',
  [{ input: '5', output: '5\n4\n3\n2\n1' }],
  `# TODO: Print countdown from n to 1\n`,
  `# Use while loop to count down\nn = int(input())\nwhile n >= 1:\n    print(n)\n    n -= 1`,
  ['Use a while loop', 'Decrement n each iteration'],
  ['使用 while 循环', '每次迭代递减 n'],
  [{ input: '5', expectedOutput: '5\n4\n3\n2\n1' }, { input: '3', expectedOutput: '3\n2\n1' }]
));

exercises.push(ex('py-ex-2-22', 'Sum of Digits', '数字之和', 'easy', 2, 'Number Theory', '数论', ['digits', 'while'],
  'Read an integer and print the sum of its digits.',
  '读取一个整数并输出其各位数字之和。',
  [{ input: '123', output: '6' }],
  `# TODO: Print sum of digits\n`,
  `# Convert to string, sum each digit\nn = input()\nprint(sum(int(d) for d in n))`,
  ['Convert number to string to iterate digits', 'Use int() on each character'],
  ['将数字转为字符串来遍历各位', '对每个字符使用 int()'],
  [{ input: '123', expectedOutput: '6' }, { input: '9999', expectedOutput: '36' }]
));

exercises.push(ex('py-ex-2-23', 'Reverse Number', '反转数字', 'easy', 2, 'Number Theory', '数论', ['reverse', 'string'],
  'Read an integer and print it reversed.',
  '读取一个整数并反转输出。',
  [{ input: '1234', output: '4321' }],
  `# TODO: Reverse the number\n`,
  `# Convert to string, reverse, convert back\nn = input()\nprint(int(n[::-1]))`,
  ['Convert to string first', 'Use slicing [::-1] to reverse'],
  ['先转为字符串', '使用切片 [::-1] 反转'],
  [{ input: '1234', expectedOutput: '4321' }, { input: '100', expectedOutput: '1' }]
));

exercises.push(ex('py-ex-2-24', 'Palindrome Check', '回文检查', 'easy', 2, 'Number Theory', '数论', ['palindrome', 'string'],
  'Read a string and print True if it is a palindrome (reads same forwards and backwards).',
  '读取一个字符串，如果它是回文（正读和反读相同）则输出 True。',
  [{ input: 'racecar', output: 'True' }],
  `# TODO: Check if string is a palindrome\n`,
  `# Compare string with its reverse\ns = input()\nprint(s == s[::-1])`,
  ['A palindrome reads the same backwards', 'Use s[::-1] to reverse'],
  ['回文正读反读相同', '使用 s[::-1] 反转'],
  [{ input: 'racecar', expectedOutput: 'True' }, { input: 'hello', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-2-25', 'Armstrong Number', '阿姆斯特朗数', 'easy', 2, 'Number Theory', '数论', ['armstrong', 'math'],
  'Read an integer and print True if it is an Armstrong number (sum of digits each raised to power of number of digits equals the number).',
  '读取一个整数，如果它是阿姆斯特朗数则输出 True。',
  [{ input: '153', output: 'True' }],
  `# TODO: Check if number is an Armstrong number\n`,
  `# Armstrong: sum of digits^n == number, where n is digit count\ns = input()\nn = len(s)\nresult = sum(int(d) ** n for d in s)\nprint(result == int(s))`,
  ['Count the digits first', 'Raise each digit to the power of digit count', 'Sum them and compare to original'],
  ['先计算位数', '将每位数字的位数次幂求和', '与原数比较'],
  [{ input: '153', expectedOutput: 'True' }, { input: '123', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-2-26', 'Right Triangle Pattern', '直角三角形图案', 'easy', 2, 'Patterns', '图案', ['pattern', 'nested-loop'],
  'Read n and print a right triangle of * with n rows.',
  '读取 n，打印一个 n 行的 * 直角三角形。',
  [{ input: '3', output: '*\n**\n***' }],
  `# TODO: Print right triangle pattern\n`,
  `# Use nested loop or string multiplication\nn = int(input())\nfor i in range(1, n + 1):\n    print("*" * i)`,
  ['Use string * operator', 'Loop from 1 to n'],
  ['使用字符串 * 运算符', '从 1 循环到 n'],
  [{ input: '3', expectedOutput: '*\n**\n***' }, { input: '4', expectedOutput: '*\n**\n***\n****' }]
));

exercises.push(ex('py-ex-2-27', 'Inverted Triangle', '倒三角形', 'easy', 2, 'Patterns', '图案', ['pattern', 'loop'],
  'Read n and print an inverted right triangle of * with n rows.',
  '读取 n，打印一个 n 行的倒直角三角形。',
  [{ input: '3', output: '***\n**\n*' }],
  `# TODO: Print inverted triangle\n`,
  `# Loop from n down to 1\nn = int(input())\nfor i in range(n, 0, -1):\n    print("*" * i)`,
  ['Loop from n down to 1', 'Use range(n, 0, -1)'],
  ['从 n 循环到 1', '使用 range(n, 0, -1)'],
  [{ input: '3', expectedOutput: '***\n**\n*' }, { input: '4', expectedOutput: '****\n***\n**\n*' }]
));

exercises.push(ex('py-ex-2-28', 'Number Pyramid', '数字金字塔', 'easy', 2, 'Patterns', '图案', ['pattern', 'nested-loop'],
  'Read n and print a number pyramid. Row i has the number i repeated i times, centered.',
  '读取 n，打印一个数字金字塔。第 i 行有 i 个数字 i，居中对齐。',
  [{ input: '3', output: '  1\n 22\n333' }],
  `# TODO: Print number pyramid\n`,
  `# Use string formatting for centering\nn = int(input())\nfor i in range(1, n + 1):\n    row = str(i) * i\n    print(row.rjust(n - i + len(row))[:n])`,
  ['Each row has digit i repeated i times', 'Right-justify or pad with spaces'],
  ['每行有数字 i 重复 i 次', '右对齐或填充空格'],
  [{ input: '3', expectedOutput: '  1\n 22\n333' }, { input: '4', expectedOutput: '   1\n  22\n 333\n4444' }]
));

exercises.push(ex('py-ex-2-29', 'Enumerate Demo', 'enumerate 演示', 'easy', 2, 'Loops', '循环', ['enumerate', 'loop'],
  'Read space-separated words and print each with its index: "index:word".',
  '读取空格分隔的单词，以 "index:word" 格式输出。',
  [{ input: 'a b c', output: '0:a\n1:b\n2:c' }],
  `# TODO: Print each word with its index\n`,
  `# Use enumerate() to get index and value\nwords = input().split()\nfor i, w in enumerate(words):\n    print(f"{i}:{w}")`,
  ['Use enumerate() in for loop', 'It gives (index, value) pairs'],
  ['在 for 循环中使用 enumerate()', '它给出 (索引, 值) 对'],
  [{ input: 'a b c', expectedOutput: '0:a\n1:b\n2:c' }, { input: 'x y', expectedOutput: '0:x\n1:y' }]
));

exercises.push(ex('py-ex-2-30', 'Zip Two Lists', 'zip 两个列表', 'easy', 2, 'Loops', '循环', ['zip', 'loop'],
  'Read two lines of space-separated values. Print pairs "a-b" on each line.',
  '读取两行空格分隔的值。每行输出配对 "a-b"。',
  [{ input: '1 2 3\na b c', output: '1-a\n2-b\n3-c' }],
  `# TODO: Zip two lists and print pairs\n`,
  `# Use zip() to pair elements\nlist1 = input().split()\nlist2 = input().split()\nfor a, b in zip(list1, list2):\n    print(f"{a}-{b}")`,
  ['Use zip() to combine two lists', 'zip stops at the shorter list'],
  ['使用 zip() 组合两个列表', 'zip 在较短列表处停止'],
  [{ input: '1 2 3\na b c', expectedOutput: '1-a\n2-b\n3-c' }, { input: 'x y\n1 2', expectedOutput: 'x-1\ny-2' }]
));

exercises.push(ex('py-ex-2-31', 'List Comprehension: Squares', '列表推导：平方', 'easy', 2, 'List Comprehension', '列表推导', ['list-comprehension'],
  'Read n and print squares from 1 to n as space-separated values.',
  '读取 n，输出 1 到 n 的平方，空格分隔。',
  [{ input: '5', output: '1 4 9 16 25' }],
  `# TODO: Print squares using list comprehension\n`,
  `# Use list comprehension for concise code\nn = int(input())\nprint(" ".join(str(i**2) for i in range(1, n+1)))`,
  ['Use list comprehension [i**2 for i in range(...)]', 'Join with spaces for output'],
  ['使用列表推导 [i**2 for i in range(...)]', '用空格连接输出'],
  [{ input: '5', expectedOutput: '1 4 9 16 25' }, { input: '3', expectedOutput: '1 4 9' }]
));

exercises.push(ex('py-ex-2-32', 'List Comprehension: Even Filter', '列表推导：偶数过滤', 'easy', 2, 'List Comprehension', '列表推导', ['list-comprehension', 'filter'],
  'Read space-separated integers and print only the even ones.',
  '读取空格分隔的整数，只输出偶数。',
  [{ input: '1 2 3 4 5 6', output: '2 4 6' }],
  `# TODO: Filter even numbers using list comprehension\n`,
  `# Use list comprehension with condition\nnums = list(map(int, input().split()))\nevens = [x for x in nums if x % 2 == 0]\nprint(" ".join(map(str, evens)))`,
  ['Add if condition to list comprehension', 'x % 2 == 0 checks for even'],
  ['在列表推导中添加 if 条件', 'x % 2 == 0 检查偶数'],
  [{ input: '1 2 3 4 5 6', expectedOutput: '2 4 6' }, { input: '1 3 5', expectedOutput: '' }]
));

exercises.push(ex('py-ex-2-33', 'Break on Negative', '遇负数停止', 'easy', 2, 'Control Flow', '控制流', ['break', 'loop'],
  'Read integers one per line until a negative number. Print sum of all positive numbers read.',
  '每行读取一个整数直到负数。输出所有正数之和。',
  [{ input: '3\n5\n2\n-1', output: '10' }],
  `# TODO: Sum numbers until negative, using break\n`,
  `# Use while True with break\ntotal = 0\nwhile True:\n    n = int(input())\n    if n < 0:\n        break\n    total += n\nprint(total)`,
  ['Use while True loop', 'Break when negative number found'],
  ['使用 while True 循环', '遇到负数时 break'],
  [{ input: '3\n5\n2\n-1', expectedOutput: '10' }, { input: '10\n-5', expectedOutput: '10' }]
));

exercises.push(ex('py-ex-2-34', 'Continue: Skip Multiples of 3', '跳过3的倍数', 'easy', 2, 'Control Flow', '控制流', ['continue', 'loop'],
  'Read n and print numbers from 1 to n, skipping multiples of 3.',
  '读取 n，打印 1 到 n 的数字，跳过 3 的倍数。',
  [{ input: '10', output: '1\n2\n4\n5\n7\n8\n10' }],
  `# TODO: Print 1 to n, skip multiples of 3\n`,
  `# Use continue to skip\nn = int(input())\nfor i in range(1, n + 1):\n    if i % 3 == 0:\n        continue\n    print(i)`,
  ['Use continue to skip iteration', 'Check i % 3 == 0'],
  ['使用 continue 跳过迭代', '检查 i % 3 == 0'],
  [{ input: '10', expectedOutput: '1\n2\n4\n5\n7\n8\n10' }, { input: '6', expectedOutput: '1\n2\n4\n5' }]
));

exercises.push(ex('py-ex-2-35', 'Nested Loop: Multiplication Row', '嵌套循环：乘法行', 'easy', 2, 'Loops', '循环', ['nested-loop'],
  'Read an integer n and print its multiplication table row: n*1 through n*10, space-separated.',
  '读取整数 n，输出 n 的乘法表行：n*1 到 n*10，空格分隔。',
  [{ input: '5', output: '5 10 15 20 25 30 35 40 45 50' }],
  `# TODO: Print multiplication table row\n`,
  `# Loop from 1 to 10\nn = int(input())\nprint(" ".join(str(n * i) for i in range(1, 11)))`,
  ['Multiply n by each number 1-10', 'Join results with spaces'],
  ['将 n 乘以 1-10 的每个数', '用空格连接结果'],
  [{ input: '5', expectedOutput: '5 10 15 20 25 30 35 40 45 50' }, { input: '3', expectedOutput: '3 6 9 12 15 18 21 24 27 30' }]
));

exercises.push(ex('py-ex-2-36', 'Sum of Series', '级数求和', 'easy', 2, 'Number Theory', '数论', ['series', 'loop'],
  'Read n and print the sum 1 + 2 + 3 + ... + n.',
  '读取 n，输出 1 + 2 + 3 + ... + n 的和。',
  [{ input: '5', output: '15' }],
  `# TODO: Print sum of 1 to n\n`,
  `# Use the formula n*(n+1)//2 or sum(range(...))\nn = int(input())\nprint(n * (n + 1) // 2)`,
  ['Use formula n*(n+1)//2', 'Or use sum(range(1, n+1))'],
  ['使用公式 n*(n+1)//2', '或使用 sum(range(1, n+1))'],
  [{ input: '5', expectedOutput: '15' }, { input: '100', expectedOutput: '5050' }]
));

exercises.push(ex('py-ex-2-37', 'Count Digits', '计算位数', 'easy', 2, 'Number Theory', '数论', ['digits', 'len'],
  'Read a positive integer and print its number of digits.',
  '读取一个正整数并输出其位数。',
  [{ input: '12345', output: '5' }],
  `# TODO: Count number of digits\n`,
  `# Convert to string and get length\nn = input()\nprint(len(n))`,
  ['Convert to string', 'Use len()'],
  ['转为字符串', '使用 len()'],
  [{ input: '12345', expectedOutput: '5' }, { input: '7', expectedOutput: '1' }]
));

exercises.push(ex('py-ex-2-38', 'Power of Two Check', '2的幂检查', 'easy', 2, 'Number Theory', '数论', ['bitwise', 'math'],
  'Read a positive integer and print True if it is a power of 2.',
  '读取一个正整数，如果它是 2 的幂则输出 True。',
  [{ input: '8', output: 'True' }],
  `# TODO: Check if number is power of 2\n`,
  `# A power of 2 has exactly one bit set: n & (n-1) == 0\nn = int(input())\nprint(n > 0 and (n & (n - 1)) == 0)`,
  ['Powers of 2: 1, 2, 4, 8, 16...', 'Use bit trick: n & (n-1) == 0'],
  ['2的幂: 1, 2, 4, 8, 16...', '使用位运算: n & (n-1) == 0'],
  [{ input: '8', expectedOutput: 'True' }, { input: '6', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-2-39', 'Perfect Number', '完美数', 'easy', 2, 'Number Theory', '数论', ['divisor', 'loop'],
  'Read a positive integer and print True if it is a perfect number (equals sum of its proper divisors).',
  '读取一个正整数，如果它是完美数（等于其真因子之和）则输出 True。',
  [{ input: '6', output: 'True' }],
  `# TODO: Check if number is perfect\n`,
  `# Sum all proper divisors and compare\nn = int(input())\ndivisor_sum = sum(i for i in range(1, n) if n % i == 0)\nprint(divisor_sum == n)`,
  ['Find all divisors from 1 to n-1', 'Sum them and compare to n', '6 = 1 + 2 + 3'],
  ['找到 1 到 n-1 的所有因子', '求和并与 n 比较', '6 = 1 + 2 + 3'],
  [{ input: '6', expectedOutput: 'True' }, { input: '8', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-2-40', 'Collatz Sequence Length', 'Collatz 序列长度', 'easy', 2, 'Number Theory', '数论', ['collatz', 'while'],
  'Read a positive integer n. Apply Collatz rules (if even: n/2, if odd: 3n+1) until n=1. Print the number of steps.',
  '读取正整数 n。应用 Collatz 规则（偶数: n/2，奇数: 3n+1）直到 n=1。输出步数。',
  [{ input: '6', output: '8' }],
  `# TODO: Count Collatz steps\n`,
  `# Apply Collatz rules until n == 1\nn = int(input())\nsteps = 0\nwhile n != 1:\n    if n % 2 == 0:\n        n //= 2\n    else:\n        n = 3 * n + 1\n    steps += 1\nprint(steps)`,
  ['Use while loop until n == 1', 'If even divide by 2, if odd multiply by 3 and add 1'],
  ['使用 while 循环直到 n == 1', '偶数除以2，奇数乘3加1'],
  [{ input: '6', expectedOutput: '8' }, { input: '1', expectedOutput: '0' }]
));

exercises.push(ex('py-ex-2-41', 'Diamond Pattern', '菱形图案', 'easy', 2, 'Patterns', '图案', ['pattern', 'nested-loop'],
  'Read an odd number n and print a diamond of * with width n.',
  '读取一个奇数 n，打印宽度为 n 的 * 菱形。',
  [{ input: '5', output: '  *\n ***\n*****\n ***\n  *' }],
  `# TODO: Print diamond pattern\n`,
  `# Upper half including middle, then lower half\nn = int(input())\nmid = n // 2\nfor i in range(mid + 1):\n    stars = 2 * i + 1\n    print(" " * (mid - i) + "*" * stars)\nfor i in range(mid - 1, -1, -1):\n    stars = 2 * i + 1\n    print(" " * (mid - i) + "*" * stars)`,
  ['Split into upper and lower half', 'Calculate spaces and stars for each row'],
  ['分为上半部分和下半部分', '计算每行的空格和星号数'],
  [{ input: '5', expectedOutput: '  *\n ***\n*****\n ***\n  *' }, { input: '3', expectedOutput: ' *\n***\n *' }]
));

exercises.push(ex('py-ex-2-42', 'While Sentinel', '哨兵循环', 'easy', 2, 'Loops', '循环', ['while', 'sentinel'],
  'Read integers until 0 is entered. Print the count and average (rounded to 1 decimal) of non-zero numbers.',
  '读取整数直到输入 0。输出非零数字的个数和平均值（保留1位小数）。',
  [{ input: '5\n10\n15\n0', output: '3\n10.0' }],
  `# TODO: Read until sentinel 0, print count and average\n`,
  `# Use sentinel value 0 to stop\nnums = []\nwhile True:\n    n = int(input())\n    if n == 0:\n        break\n    nums.append(n)\nprint(len(nums))\nprint(round(sum(nums) / len(nums), 1))`,
  ['Use 0 as sentinel to stop', 'Collect numbers in a list', 'Calculate average with sum/len'],
  ['使用 0 作为哨兵停止', '将数字收集到列表中', '用 sum/len 计算平均值'],
  [{ input: '5\n10\n15\n0', expectedOutput: '3\n10.0' }, { input: '4\n6\n0', expectedOutput: '2\n5.0' }]
));

exercises.push(ex('py-ex-2-43', 'Factorial Using Loop', '循环求阶乘', 'easy', 2, 'Number Theory', '数论', ['factorial', 'loop'],
  'Read a non-negative integer n and print n! (factorial).',
  '读取一个非负整数 n，输出 n!（阶乘）。',
  [{ input: '5', output: '120' }],
  `# TODO: Calculate factorial\n`,
  `# Multiply 1 * 2 * ... * n\nn = int(input())\nresult = 1\nfor i in range(1, n + 1):\n    result *= i\nprint(result)`,
  ['Multiply numbers from 1 to n', 'Start with result = 1'],
  ['将 1 到 n 的数字相乘', '从 result = 1 开始'],
  [{ input: '5', expectedOutput: '120' }, { input: '0', expectedOutput: '1' }]
));

exercises.push(ex('py-ex-2-44', 'GCD of Two Numbers', '最大公约数', 'easy', 2, 'Number Theory', '数论', ['gcd', 'euclidean'],
  'Read two positive integers and print their GCD.',
  '读取两个正整数并输出它们的最大公约数。',
  [{ input: '12\n8', output: '4' }],
  `# TODO: Find GCD of two numbers\n`,
  `# Use Euclidean algorithm\na = int(input())\nb = int(input())\nwhile b:\n    a, b = b, a % b\nprint(a)`,
  ['Use Euclidean algorithm', 'Repeatedly: a, b = b, a % b until b is 0'],
  ['使用欧几里得算法', '重复: a, b = b, a % b 直到 b 为 0'],
  [{ input: '12\n8', expectedOutput: '4' }, { input: '15\n5', expectedOutput: '5' }]
));

exercises.push(ex('py-ex-2-45', 'LCM of Two Numbers', '最小公倍数', 'easy', 2, 'Number Theory', '数论', ['lcm', 'gcd'],
  'Read two positive integers and print their LCM.',
  '读取两个正整数并输出它们的最小公倍数。',
  [{ input: '4\n6', output: '12' }],
  `# TODO: Find LCM of two numbers\n`,
  `# LCM = a * b // GCD(a, b)\na = int(input())\nb = int(input())\n# Find GCD first\nx, y = a, b\nwhile y:\n    x, y = y, x % y\nprint(a * b // x)`,
  ['LCM = a * b / GCD', 'Find GCD first using Euclidean algorithm'],
  ['LCM = a * b / GCD', '先用欧几里得算法找 GCD'],
  [{ input: '4\n6', expectedOutput: '12' }, { input: '3\n5', expectedOutput: '15' }]
));

exercises.push(ex('py-ex-2-46', 'Star Pyramid', '星号金字塔', 'easy', 2, 'Patterns', '图案', ['pattern', 'loop'],
  'Read n and print a centered pyramid of * with n rows.',
  '读取 n，打印一个 n 行居中的 * 金字塔。',
  [{ input: '3', output: '  *\n ***\n*****' }],
  `# TODO: Print centered pyramid\n`,
  `# Each row i has (2*i+1) stars centered\nn = int(input())\nfor i in range(n):\n    stars = 2 * i + 1\n    print(" " * (n - 1 - i) + "*" * stars)`,
  ['Row i has 2*i+1 stars', 'Pad with spaces for centering'],
  ['第 i 行有 2*i+1 个星号', '用空格填充居中'],
  [{ input: '3', expectedOutput: '  *\n ***\n*****' }, { input: '2', expectedOutput: ' *\n***' }]
));

exercises.push(ex('py-ex-2-47', 'Fibonacci First N', '前N个斐波那契', 'easy', 2, 'Number Theory', '数论', ['fibonacci', 'loop'],
  'Read n and print the first n Fibonacci numbers space-separated (starting 0, 1).',
  '读取 n，输出前 n 个斐波那契数（从 0, 1 开始），空格分隔。',
  [{ input: '7', output: '0 1 1 2 3 5 8' }],
  `# TODO: Print first n Fibonacci numbers\n`,
  `# Generate Fibonacci sequence\nn = int(input())\na, b = 0, 1\nresult = []\nfor _ in range(n):\n    result.append(str(a))\n    a, b = b, a + b\nprint(" ".join(result))`,
  ['Start with a=0, b=1', 'Each step: a, b = b, a+b'],
  ['从 a=0, b=1 开始', '每步: a, b = b, a+b'],
  [{ input: '7', expectedOutput: '0 1 1 2 3 5 8' }, { input: '5', expectedOutput: '0 1 1 2 3' }]
));

exercises.push(ex('py-ex-2-48', 'Prime Factors', '质因数分解', 'easy', 2, 'Number Theory', '数论', ['prime', 'factorization'],
  'Read a positive integer > 1 and print its prime factors in ascending order, space-separated.',
  '读取一个大于1的正整数，按升序输出其质因数，空格分隔。',
  [{ input: '12', output: '2 2 3' }],
  `# TODO: Print prime factors\n`,
  `# Divide by smallest factors first\nn = int(input())\nfactors = []\nd = 2\nwhile d * d <= n:\n    while n % d == 0:\n        factors.append(str(d))\n        n //= d\n    d += 1\nif n > 1:\n    factors.append(str(n))\nprint(" ".join(factors))`,
  ['Start dividing from 2', 'Keep dividing while divisible', 'If n > 1 at end, it is a prime factor'],
  ['从 2 开始除', '能整除就继续除', '如果最后 n > 1，它是质因数'],
  [{ input: '12', expectedOutput: '2 2 3' }, { input: '7', expectedOutput: '7' }]
));

exercises.push(ex('py-ex-2-49', 'Sum of Squares', '平方和', 'easy', 2, 'Number Theory', '数论', ['series', 'math'],
  'Read n and print the sum 1² + 2² + ... + n².',
  '读取 n，输出 1² + 2² + ... + n²。',
  [{ input: '3', output: '14' }],
  `# TODO: Sum of squares\n`,
  `# Use formula or loop\nn = int(input())\nprint(sum(i**2 for i in range(1, n+1)))`,
  ['Square each number and sum', 'Can use generator expression'],
  ['将每个数字平方再求和', '可以使用生成器表达式'],
  [{ input: '3', expectedOutput: '14' }, { input: '5', expectedOutput: '55' }]
));

exercises.push(ex('py-ex-2-50', 'Number to Binary', '十进制转二进制', 'easy', 2, 'Number Theory', '数论', ['binary', 'conversion'],
  'Read a non-negative integer and print its binary representation (without 0b prefix).',
  '读取一个非负整数并输出其二进制表示（无 0b 前缀）。',
  [{ input: '10', output: '1010' }],
  `# TODO: Convert to binary\n`,
  `# Use bin() and strip prefix\nn = int(input())\nprint(bin(n)[2:])`,
  ['Use bin() function', 'Strip the "0b" prefix with [2:]'],
  ['使用 bin() 函数', '用 [2:] 去掉 "0b" 前缀'],
  [{ input: '10', expectedOutput: '1010' }, { input: '7', expectedOutput: '111' }]
));

exercises.push(ex('py-ex-2-51', 'Unique Elements', '唯一元素', 'easy', 2, 'List Comprehension', '列表推导', ['set', 'list'],
  'Read space-separated integers and print unique ones in order of first appearance.',
  '读取空格分隔的整数，按首次出现顺序输出唯一值。',
  [{ input: '1 2 3 2 1 4', output: '1 2 3 4' }],
  `# TODO: Print unique elements preserving order\n`,
  `# Use dict.fromkeys to preserve order\nnums = input().split()\nseen = dict.fromkeys(nums)\nprint(" ".join(seen.keys()))`,
  ['dict.fromkeys preserves insertion order', 'Or use a set to track seen items'],
  ['dict.fromkeys 保持插入顺序', '或使用 set 追踪已见项'],
  [{ input: '1 2 3 2 1 4', expectedOutput: '1 2 3 4' }, { input: '5 5 5', expectedOutput: '5' }]
));

exercises.push(ex('py-ex-2-52', 'Second Largest', '第二大值', 'easy', 2, 'Control Flow', '控制流', ['sort', 'list'],
  'Read space-separated integers and print the second largest unique value.',
  '读取空格分隔的整数，输出第二大的唯一值。',
  [{ input: '3 1 4 1 5', output: '4' }],
  `# TODO: Find second largest unique value\n`,
  `# Convert to set for unique values, sort descending\nnums = list(set(map(int, input().split())))\nnums.sort(reverse=True)\nprint(nums[1])`,
  ['Remove duplicates with set()', 'Sort and pick second element'],
  ['使用 set() 去重', '排序后取第二个元素'],
  [{ input: '3 1 4 1 5', expectedOutput: '4' }, { input: '10 20 30', expectedOutput: '20' }]
));

exercises.push(ex('py-ex-2-53', 'Character Frequency', '字符频率', 'easy', 2, 'Loops', '循环', ['dict', 'loop'],
  'Read a string (no spaces). Print each unique character and its count, one per line, in order of first appearance.',
  '读取一个字符串（无空格）。按首次出现顺序，每行输出字符及其出现次数。',
  [{ input: 'aabbc', output: 'a 2\nb 2\nc 1' }],
  `# TODO: Print character frequencies\n`,
  `# Use dict to count, preserving order\ns = input()\nfreq = {}\nfor c in s:\n    freq[c] = freq.get(c, 0) + 1\nfor c, count in freq.items():\n    print(f"{c} {count}")`,
  ['Use a dictionary to count', 'dict preserves insertion order in Python 3.7+'],
  ['使用字典计数', 'Python 3.7+ 字典保持插入顺序'],
  [{ input: 'aabbc', expectedOutput: 'a 2\nb 2\nc 1' }, { input: 'hello', expectedOutput: 'h 1\ne 1\nl 2\no 1' }]
));

exercises.push(ex('py-ex-2-54', 'Pascal Triangle Row', '帕斯卡三角行', 'easy', 2, 'Number Theory', '数论', ['pascal', 'math'],
  'Read a row number n (0-indexed) and print that row of Pascal\'s triangle, space-separated.',
  '读取行号 n（从0开始），输出帕斯卡三角的该行，空格分隔。',
  [{ input: '4', output: '1 4 6 4 1' }],
  `# TODO: Print nth row of Pascal's triangle\n`,
  `# Build row using combinations\nn = int(input())\nrow = [1]\nfor i in range(1, n + 1):\n    row.append(row[-1] * (n - i + 1) // i)\nprint(" ".join(map(str, row)))`,
  ['C(n,k) = C(n,k-1) * (n-k+1) / k', 'Build iteratively from previous value'],
  ['C(n,k) = C(n,k-1) * (n-k+1) / k', '从前一个值迭代构建'],
  [{ input: '4', expectedOutput: '1 4 6 4 1' }, { input: '0', expectedOutput: '1' }]
));

exercises.push(ex('py-ex-2-55', 'Largest Digit', '最大数字', 'easy', 2, 'Number Theory', '数论', ['digits', 'max'],
  'Read a positive integer and print its largest digit.',
  '读取一个正整数并输出其最大位数字。',
  [{ input: '3927', output: '9' }],
  `# TODO: Find largest digit\n`,
  `# Convert to string and find max digit\nn = input()\nprint(max(n))`,
  ['Convert to string', 'Use max() on the string'],
  ['转为字符串', '对字符串使用 max()'],
  [{ input: '3927', expectedOutput: '9' }, { input: '111', expectedOutput: '1' }]
));

exercises.push(ex('py-ex-2-56', 'Geometric Series Sum', '等比级数和', 'easy', 2, 'Number Theory', '数论', ['series', 'math'],
  'Read first term a, ratio r, and number of terms n. Print the sum of the geometric series.',
  '读取首项 a、公比 r 和项数 n。输出等比级数之和。',
  [{ input: '1\n2\n5', output: '31' }],
  `# TODO: Sum geometric series\n`,
  `# Sum = a * (r^n - 1) / (r - 1) when r != 1\na = int(input())\nr = int(input())\nn = int(input())\nif r == 1:\n    print(a * n)\nelse:\n    print(a * (r**n - 1) // (r - 1))`,
  ['Use formula: a * (r^n - 1) / (r - 1)', 'Handle r == 1 case separately'],
  ['使用公式: a * (r^n - 1) / (r - 1)', '单独处理 r == 1 的情况'],
  [{ input: '1\n2\n5', expectedOutput: '31' }, { input: '3\n1\n4', expectedOutput: '12' }]
));

exercises.push(ex('py-ex-2-57', 'Happy Number', '快乐数', 'easy', 2, 'Number Theory', '数论', ['happy-number', 'set'],
  'Read a positive integer. Print True if it is a happy number (repeatedly sum squares of digits until 1 or cycle).',
  '读取一个正整数。如果它是快乐数则输出 True。',
  [{ input: '19', output: 'True' }],
  `# TODO: Check if happy number\n`,
  `# Track seen numbers to detect cycle\nn = int(input())\nseen = set()\nwhile n != 1 and n not in seen:\n    seen.add(n)\n    n = sum(int(d)**2 for d in str(n))\nprint(n == 1)`,
  ['Sum squares of digits repeatedly', 'Use a set to detect cycles', 'Stop when you reach 1 or a cycle'],
  ['反复求各位数字的平方和', '用集合检测循环', '到达 1 或循环时停止'],
  [{ input: '19', expectedOutput: 'True' }, { input: '4', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-2-58', 'Harshad Number', 'Harshad 数', 'easy', 2, 'Number Theory', '数论', ['harshad', 'digits'],
  'Read a positive integer. Print True if it is divisible by the sum of its digits (Harshad number).',
  '读取一个正整数。如果它能被其各位数字之和整除（Harshad 数），输出 True。',
  [{ input: '18', output: 'True' }],
  `# TODO: Check Harshad number\n`,
  `# Check if n % digit_sum == 0\nn = input()\ndigit_sum = sum(int(d) for d in n)\nprint(int(n) % digit_sum == 0)`,
  ['Sum the digits', 'Check divisibility'],
  ['求各位数字之和', '检查整除性'],
  [{ input: '18', expectedOutput: 'True' }, { input: '11', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-2-59', 'Number Spiral', '数字螺旋', 'easy', 2, 'Patterns', '图案', ['pattern', 'loop'],
  'Read n and print numbers 1 to n*n in an n×n grid, each number right-justified in a field of width based on n*n.',
  '读取 n，在 n×n 网格中打印 1 到 n*n 的数字。',
  [{ input: '3', output: '1 2 3\n4 5 6\n7 8 9' }],
  `# TODO: Print n x n number grid\n`,
  `# Fill rows with sequential numbers\nn = int(input())\nnum = 1\nfor i in range(n):\n    row = []\n    for j in range(n):\n        row.append(str(num))\n        num += 1\n    print(" ".join(row))`,
  ['Use nested loops', 'Increment a counter for each cell'],
  ['使用嵌套循环', '每个格子递增计数器'],
  [{ input: '3', expectedOutput: '1 2 3\n4 5 6\n7 8 9' }, { input: '2', expectedOutput: '1 2\n3 4' }]
));

exercises.push(ex('py-ex-2-60', 'Range Sum Query', '区间求和', 'easy', 2, 'Control Flow', '控制流', ['range', 'sum'],
  'Read space-separated integers, then two indices l and r (0-based). Print the sum of elements from index l to r inclusive.',
  '读取空格分隔的整数，然后读取两个索引 l 和 r（从0开始）。输出索引 l 到 r（含）的元素之和。',
  [{ input: '1 3 5 7 9\n1\n3', output: '15' }],
  `# TODO: Sum elements from index l to r\n`,
  `# Use list slicing\nnums = list(map(int, input().split()))\nl = int(input())\nr = int(input())\nprint(sum(nums[l:r+1]))`,
  ['Use list slicing nums[l:r+1]', 'Remember slicing end is exclusive'],
  ['使用列表切片 nums[l:r+1]', '记住切片结束是不包含的'],
  [{ input: '1 3 5 7 9\n1\n3', expectedOutput: '15' }, { input: '2 4 6\n0\n2', expectedOutput: '12' }]
));

// ============================================================
// LEVEL 3: FUNCTIONS & DATA STRUCTURES (exercises 16-60, 45 new)
// ============================================================

exercises.push(ex('py-ex-3-16', 'Default Arguments', '默认参数', 'medium', 3, 'Functions', '函数', ['def', 'default-args'],
  'Write a function greet(name, greeting="Hello") that returns "{greeting}, {name}!". Read name and optional greeting.',
  '编写函数 greet(name, greeting="Hello") 返回 "{greeting}, {name}!"。',
  [{ input: 'Alice', output: 'Hello, Alice!' }],
  `# TODO: Write greet function with default argument\n`,
  `# Function with default parameter\ndef greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\nparts = input().split(",")\nif len(parts) == 2:\n    print(greet(parts[0].strip(), parts[1].strip()))\nelse:\n    print(greet(parts[0].strip()))`,
  ['Default args use = in parameter list', 'f-string for formatting'],
  ['默认参数在参数列表中使用 =', '使用 f-string 格式化'],
  [{ input: 'Alice', expectedOutput: 'Hello, Alice!' }, { input: 'Bob,Hi', expectedOutput: 'Hi, Bob!' }]
));

exercises.push(ex('py-ex-3-17', 'Args and Kwargs', '*args 和 **kwargs', 'medium', 3, 'Functions', '函数', ['args', 'kwargs'],
  'Read space-separated integers. Print their sum and count using a function that accepts *args.',
  '读取空格分隔的整数。使用接受 *args 的函数输出它们的和与个数。',
  [{ input: '1 2 3 4', output: '10\n4' }],
  `# TODO: Use *args to sum and count\n`,
  `# *args collects positional arguments as tuple\ndef summarize(*args):\n    return sum(args), len(args)\n\nnums = list(map(int, input().split()))\ns, c = summarize(*nums)\nprint(s)\nprint(c)`,
  ['*args collects all positional args as tuple', 'Unpack list with * when calling'],
  ['*args 将所有位置参数收集为元组', '调用时用 * 解包列表'],
  [{ input: '1 2 3 4', expectedOutput: '10\n4' }, { input: '5 10', expectedOutput: '15\n2' }]
));

exercises.push(ex('py-ex-3-18', 'Lambda Function', 'Lambda 函数', 'medium', 3, 'Functions', '函数', ['lambda'],
  'Read space-separated integers. Use a lambda to sort them by their absolute value. Print sorted values.',
  '读取空格分隔的整数。使用 lambda 按绝对值排序。输出排序后的值。',
  [{ input: '-5 3 -1 4 -2', output: '-1 -2 3 4 -5' }],
  `# TODO: Sort by absolute value using lambda\n`,
  `# Lambda creates anonymous functions\nnums = list(map(int, input().split()))\nsorted_nums = sorted(nums, key=lambda x: abs(x))\nprint(" ".join(map(str, sorted_nums)))`,
  ['Use sorted() with key parameter', 'lambda x: abs(x) for absolute value'],
  ['使用 sorted() 的 key 参数', 'lambda x: abs(x) 取绝对值'],
  [{ input: '-5 3 -1 4 -2', expectedOutput: '-1 -2 3 4 -5' }, { input: '3 -3 1 -1', expectedOutput: '1 -1 3 -3' }]
));

exercises.push(ex('py-ex-3-19', 'Map Function', 'map 函数', 'medium', 3, 'Functions', '函数', ['map', 'lambda'],
  'Read space-separated integers. Use map to double each. Print space-separated results.',
  '读取空格分隔的整数。使用 map 将每个翻倍。输出空格分隔的结果。',
  [{ input: '1 2 3', output: '2 4 6' }],
  `# TODO: Double each number using map\n`,
  `# map applies a function to each element\nnums = list(map(int, input().split()))\ndoubled = list(map(lambda x: x * 2, nums))\nprint(" ".join(map(str, doubled)))`,
  ['map(function, iterable) applies function to each item', 'Use lambda for inline function'],
  ['map(function, iterable) 对每个元素应用函数', '使用 lambda 创建内联函数'],
  [{ input: '1 2 3', expectedOutput: '2 4 6' }, { input: '5 10', expectedOutput: '10 20' }]
));

exercises.push(ex('py-ex-3-20', 'Filter Function', 'filter 函数', 'medium', 3, 'Functions', '函数', ['filter', 'lambda'],
  'Read space-separated integers. Use filter to keep only positive numbers. Print them.',
  '读取空格分隔的整数。使用 filter 仅保留正数。输出它们。',
  [{ input: '-3 5 -1 7 0 2', output: '5 7 2' }],
  `# TODO: Filter positive numbers\n`,
  `# filter keeps elements where function returns True\nnums = list(map(int, input().split()))\npositive = list(filter(lambda x: x > 0, nums))\nprint(" ".join(map(str, positive)))`,
  ['filter(function, iterable) keeps truthy items', 'lambda x: x > 0 checks positive'],
  ['filter(function, iterable) 保留真值项', 'lambda x: x > 0 检查正数'],
  [{ input: '-3 5 -1 7 0 2', expectedOutput: '5 7 2' }, { input: '1 2 3', expectedOutput: '1 2 3' }]
));

exercises.push(ex('py-ex-3-21', 'Recursive Factorial', '递归阶乘', 'medium', 3, 'Recursion', '递归', ['recursion', 'factorial'],
  'Read n and print n! using recursion.',
  '读取 n，使用递归输出 n!。',
  [{ input: '5', output: '120' }],
  `# TODO: Implement factorial recursively\n`,
  `# Base case: 0! = 1, recursive: n! = n * (n-1)!\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(int(input())))`,
  ['Base case: factorial(0) = 1', 'Recursive: n * factorial(n-1)'],
  ['基础情况: factorial(0) = 1', '递归: n * factorial(n-1)'],
  [{ input: '5', expectedOutput: '120' }, { input: '0', expectedOutput: '1' }]
));

exercises.push(ex('py-ex-3-22', 'Recursive Fibonacci', '递归斐波那契', 'medium', 3, 'Recursion', '递归', ['recursion', 'fibonacci'],
  'Read n and print the nth Fibonacci number (0-indexed: F(0)=0, F(1)=1).',
  '读取 n，输出第 n 个斐波那契数（从0开始: F(0)=0, F(1)=1）。',
  [{ input: '6', output: '8' }],
  `# TODO: Fibonacci using recursion (with memoization)\n`,
  `# Use memoization for efficiency\ndef fib(n, memo={}):\n    if n <= 1:\n        return n\n    if n not in memo:\n        memo[n] = fib(n-1) + fib(n-2)\n    return memo[n]\n\nprint(fib(int(input())))`,
  ['F(0)=0, F(1)=1', 'F(n) = F(n-1) + F(n-2)', 'Use memoization to avoid exponential time'],
  ['F(0)=0, F(1)=1', 'F(n) = F(n-1) + F(n-2)', '使用记忆化避免指数时间'],
  [{ input: '6', expectedOutput: '8' }, { input: '10', expectedOutput: '55' }]
));

exercises.push(ex('py-ex-3-23', 'List Rotate', '列表旋转', 'medium', 3, 'Lists', '列表', ['list', 'rotate'],
  'Read space-separated integers and an integer k. Rotate the list right by k positions. Print result.',
  '读取空格分隔的整数和一个整数 k。将列表右旋 k 个位置。输出结果。',
  [{ input: '1 2 3 4 5\n2', output: '4 5 1 2 3' }],
  `# TODO: Rotate list right by k\n`,
  `# Use slicing to rotate\nnums = list(map(int, input().split()))\nk = int(input()) % len(nums)\nresult = nums[-k:] + nums[:-k] if k else nums\nprint(" ".join(map(str, result)))`,
  ['Right rotate by k: last k elements go to front', 'Use slicing: nums[-k:] + nums[:-k]'],
  ['右旋 k: 最后 k 个元素移到前面', '使用切片: nums[-k:] + nums[:-k]'],
  [{ input: '1 2 3 4 5\n2', expectedOutput: '4 5 1 2 3' }, { input: '1 2 3\n1', expectedOutput: '3 1 2' }]
));

exercises.push(ex('py-ex-3-24', 'List Merge Sorted', '合并有序列表', 'medium', 3, 'Lists', '列表', ['list', 'merge', 'sort'],
  'Read two lines of sorted space-separated integers. Merge them into one sorted list.',
  '读取两行有序的空格分隔整数。将它们合并成一个有序列表。',
  [{ input: '1 3 5\n2 4 6', output: '1 2 3 4 5 6' }],
  `# TODO: Merge two sorted lists\n`,
  `# Simple approach: concatenate and sort\nlist1 = list(map(int, input().split()))\nlist2 = list(map(int, input().split()))\nresult = sorted(list1 + list2)\nprint(" ".join(map(str, result)))`,
  ['Concatenate both lists', 'Sort the combined list'],
  ['连接两个列表', '对合并列表排序'],
  [{ input: '1 3 5\n2 4 6', expectedOutput: '1 2 3 4 5 6' }, { input: '1 2\n3 4', expectedOutput: '1 2 3 4' }]
));

exercises.push(ex('py-ex-3-25', 'List Statistics', '列表统计', 'medium', 3, 'Lists', '列表', ['list', 'statistics'],
  'Read space-separated numbers. Print min, max, sum, and average (2 decimal places), each on a new line.',
  '读取空格分隔的数字。分别输出最小值、最大值、总和和平均值（2位小数）。',
  [{ input: '1 2 3 4 5', output: '1\n5\n15\n3.00' }],
  `# TODO: Compute list statistics\n`,
  `# Use built-in functions for statistics\nnums = list(map(int, input().split()))\nprint(min(nums))\nprint(max(nums))\nprint(sum(nums))\nprint(f"{sum(nums)/len(nums):.2f}")`,
  ['Use min(), max(), sum()', 'Format average with :.2f'],
  ['使用 min(), max(), sum()', '用 :.2f 格式化平均值'],
  [{ input: '1 2 3 4 5', expectedOutput: '1\n5\n15\n3.00' }, { input: '10 20', expectedOutput: '10\n20\n30\n15.00' }]
));

exercises.push(ex('py-ex-3-26', 'Matrix Transpose', '矩阵转置', 'medium', 3, 'Lists', '列表', ['matrix', 'list'],
  'Read n rows of space-separated integers (square matrix). Print its transpose.',
  '读取 n 行空格分隔的整数（方阵）。输出其转置。',
  [{ input: '3\n1 2 3\n4 5 6\n7 8 9', output: '1 4 7\n2 5 8\n3 6 9' }],
  `# TODO: Transpose a matrix\n`,
  `# Use zip to transpose\nn = int(input())\nmatrix = [list(map(int, input().split())) for _ in range(n)]\ntransposed = list(zip(*matrix))\nfor row in transposed:\n    print(" ".join(map(str, row)))`,
  ['zip(*matrix) transposes rows and columns', 'Read n rows first'],
  ['zip(*matrix) 转置行和列', '先读取 n 行'],
  [{ input: '3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '1 4 7\n2 5 8\n3 6 9' }, { input: '2\n1 2\n3 4', expectedOutput: '1 3\n2 4' }]
));

exercises.push(ex('py-ex-3-27', 'Dict Frequency Count', '字典频率统计', 'medium', 3, 'Dictionaries', '字典', ['dict', 'frequency'],
  'Read space-separated words. Print each word and its count, one per line, sorted alphabetically.',
  '读取空格分隔的单词。按字母顺序每行输出单词及其出现次数。',
  [{ input: 'apple banana apple cherry banana apple', output: 'apple 3\nbanana 2\ncherry 1' }],
  `# TODO: Count word frequencies\n`,
  `# Use dict to count frequencies\nwords = input().split()\nfreq = {}\nfor w in words:\n    freq[w] = freq.get(w, 0) + 1\nfor w in sorted(freq):\n    print(f"{w} {freq[w]}")`,
  ['Use dict.get(key, default) for counting', 'Sort keys for alphabetical output'],
  ['使用 dict.get(key, default) 计数', '排序键以字母顺序输出'],
  [{ input: 'apple banana apple cherry banana apple', expectedOutput: 'apple 3\nbanana 2\ncherry 1' }, { input: 'a b a', expectedOutput: 'a 2\nb 1' }]
));

exercises.push(ex('py-ex-3-28', 'Dict Invert', '字典反转', 'medium', 3, 'Dictionaries', '字典', ['dict', 'invert'],
  'Read key-value pairs (one per line as "key value") until empty line. Print inverted dict (value: key) sorted by value.',
  '读取键值对（每行 "key value"）直到空行。输出反转字典（value: key），按 value 排序。',
  [{ input: 'a 1\nb 2\nc 3', output: '1 a\n2 b\n3 c' }],
  `# TODO: Invert dictionary\n`,
  `# Swap keys and values\nimport sys\nlines = sys.stdin.read().strip().split("\\n")\ninverted = {}\nfor line in lines:\n    k, v = line.split()\n    inverted[v] = k\nfor v in sorted(inverted):\n    print(f"{v} {inverted[v]}")`,
  ['Swap key and value', 'Sort by the new keys'],
  ['交换键和值', '按新键排序'],
  [{ input: 'a 1\nb 2\nc 3', expectedOutput: '1 a\n2 b\n3 c' }, { input: 'x 10\ny 20', expectedOutput: '10 x\n20 y' }]
));

exercises.push(ex('py-ex-3-29', 'Set Operations', '集合运算', 'medium', 3, 'Sets', '集合', ['set', 'operations'],
  'Read two lines of space-separated integers. Print their union, intersection, and difference (set1 - set2), each sorted, on separate lines.',
  '读取两行空格分隔的整数。分别输出并集、交集和差集（set1 - set2），每组排序后输出。',
  [{ input: '1 2 3 4\n3 4 5 6', output: '1 2 3 4 5 6\n3 4\n1 2' }],
  `# TODO: Perform set operations\n`,
  `# Use set operators\nset1 = set(map(int, input().split()))\nset2 = set(map(int, input().split()))\nprint(" ".join(map(str, sorted(set1 | set2))))\nprint(" ".join(map(str, sorted(set1 & set2))))\nprint(" ".join(map(str, sorted(set1 - set2))))`,
  ['| for union, & for intersection, - for difference', 'Sort results for consistent output'],
  ['| 并集, & 交集, - 差集', '排序结果以保证一致输出'],
  [{ input: '1 2 3 4\n3 4 5 6', expectedOutput: '1 2 3 4 5 6\n3 4\n1 2' }, { input: '1 2\n2 3', expectedOutput: '1 2 3\n2\n1' }]
));

exercises.push(ex('py-ex-3-30', 'Tuple Unpacking', '元组解包', 'medium', 3, 'Tuples', '元组', ['tuple', 'unpacking'],
  'Read a line of 3 comma-separated values. Unpack into variables and print each on a new line.',
  '读取一行3个逗号分隔的值。解包到变量并逐行输出。',
  [{ input: 'Alice,25,Engineer', output: 'Alice\n25\nEngineer' }],
  `# TODO: Unpack comma-separated values\n`,
  `# Use tuple unpacking\nname, age, job = input().split(",")\nprint(name)\nprint(age)\nprint(job)`,
  ['Split by comma into parts', 'Assign to multiple variables at once'],
  ['按逗号分割', '一次赋值给多个变量'],
  [{ input: 'Alice,25,Engineer', expectedOutput: 'Alice\n25\nEngineer' }, { input: 'Bob,30,Doctor', expectedOutput: 'Bob\n30\nDoctor' }]
));

exercises.push(ex('py-ex-3-31', 'Anagram Check', '变位词检查', 'medium', 3, 'String Manipulation', '字符串操作', ['anagram', 'sort'],
  'Read two strings and print True if they are anagrams (same letters, different order).',
  '读取两个字符串，如果它们是变位词则输出 True。',
  [{ input: 'listen\nsilent', output: 'True' }],
  `# TODO: Check anagram\n`,
  `# Sort both strings and compare\ns1 = input().lower()\ns2 = input().lower()\nprint(sorted(s1) == sorted(s2))`,
  ['Anagrams have same sorted characters', 'Convert to lowercase first'],
  ['变位词排序后字符相同', '先转为小写'],
  [{ input: 'listen\nsilent', expectedOutput: 'True' }, { input: 'hello\nworld', expectedOutput: 'False' }]
));

exercises.push(ex('py-ex-3-32', 'Caesar Cipher', '凯撒密码', 'medium', 3, 'String Manipulation', '字符串操作', ['cipher', 'string'],
  'Read a lowercase string and a shift value. Print the Caesar cipher result.',
  '读取一个小写字符串和一个移位值。输出凯撒密码结果。',
  [{ input: 'abc\n3', output: 'def' }],
  `# TODO: Implement Caesar cipher\n`,
  `# Shift each letter by the given amount\ntext = input()\nshift = int(input())\nresult = ""\nfor c in text:\n    if c.isalpha():\n        result += chr((ord(c) - ord("a") + shift) % 26 + ord("a"))\n    else:\n        result += c\nprint(result)`,
  ['Use ord() and chr() for character math', 'Wrap around with % 26'],
  ['使用 ord() 和 chr() 做字符运算', '用 % 26 循环'],
  [{ input: 'abc\n3', expectedOutput: 'def' }, { input: 'xyz\n2', expectedOutput: 'zab' }]
));

exercises.push(ex('py-ex-3-33', 'Word Count', '单词统计', 'medium', 3, 'String Manipulation', '字符串操作', ['string', 'count'],
  'Read a sentence. Print the number of words, characters (no spaces), and unique words.',
  '读取一个句子。输出单词数、字符数（不含空格）和唯一单词数。',
  [{ input: 'hello world hello', output: '3\n15\n2' }],
  `# TODO: Count words, chars, unique words\n`,
  `# Split and analyze\ns = input()\nwords = s.split()\nprint(len(words))\nprint(len(s.replace(" ", "")))\nprint(len(set(words)))`,
  ['Use split() for words', 'Remove spaces for char count', 'Use set() for unique words'],
  ['使用 split() 获取单词', '去掉空格计算字符数', '使用 set() 获取唯一单词'],
  [{ input: 'hello world hello', expectedOutput: '3\n15\n2' }, { input: 'a b c', expectedOutput: '3\n3\n3' }]
));

exercises.push(ex('py-ex-3-34', 'Flatten Nested List', '扁平化嵌套列表', 'medium', 3, 'Lists', '列表', ['list', 'flatten', 'recursion'],
  'Read a nested list as Python literal (e.g., [1,[2,3],[4,[5]]]). Print flattened elements space-separated.',
  '读取一个 Python 列表字面量。输出扁平化后的元素，空格分隔。',
  [{ input: '[1,[2,3],[4,[5]]]', output: '1 2 3 4 5' }],
  `# TODO: Flatten nested list\n`,
  `# Recursive flatten\nimport ast\ndef flatten(lst):\n    result = []\n    for item in lst:\n        if isinstance(item, list):\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return result\n\ndata = ast.literal_eval(input())\nprint(" ".join(map(str, flatten(data))))`,
  ['Use recursion to handle nesting', 'Check isinstance(item, list)', 'Use ast.literal_eval to parse input'],
  ['使用递归处理嵌套', '检查 isinstance(item, list)', '使用 ast.literal_eval 解析输入'],
  [{ input: '[1,[2,3],[4,[5]]]', expectedOutput: '1 2 3 4 5' }, { input: '[[1,2],[3]]', expectedOutput: '1 2 3' }]
));

exercises.push(ex('py-ex-3-35', 'Binary Search', '二分查找', 'medium', 3, 'Algorithms', '算法', ['binary-search', 'list'],
  'Read sorted space-separated integers and a target. Print the index of the target or -1.',
  '读取有序的空格分隔整数和一个目标值。输出目标值的索引或 -1。',
  [{ input: '1 3 5 7 9\n5', output: '2' }],
  `# TODO: Binary search\n`,
  `# Binary search implementation\nnums = list(map(int, input().split()))\ntarget = int(input())\nlo, hi = 0, len(nums) - 1\nresult = -1\nwhile lo <= hi:\n    mid = (lo + hi) // 2\n    if nums[mid] == target:\n        result = mid\n        break\n    elif nums[mid] < target:\n        lo = mid + 1\n    else:\n        hi = mid - 1\nprint(result)`,
  ['Compare target with middle element', 'Narrow search space by half each time'],
  ['将目标与中间元素比较', '每次将搜索空间缩小一半'],
  [{ input: '1 3 5 7 9\n5', expectedOutput: '2' }, { input: '1 2 3\n4', expectedOutput: '-1' }]
));

exercises.push(ex('py-ex-3-36', 'Dict Merge', '字典合并', 'medium', 3, 'Dictionaries', '字典', ['dict', 'merge'],
  'Read two lines of key=value pairs (space-separated). Merge them (second overwrites first). Print sorted by key.',
  '读取两行 key=value 对（空格分隔）。合并（第二行覆盖第一行）。按 key 排序输出。',
  [{ input: 'a=1 b=2 c=3\nb=5 d=4', output: 'a=1\nb=5\nc=3\nd=4' }],
  `# TODO: Merge two dicts\n`,
  `# Parse and merge dictionaries\ndef parse(line):\n    d = {}\n    for pair in line.split():\n        k, v = pair.split("=")\n        d[k] = v\n    return d\n\nd1 = parse(input())\nd2 = parse(input())\nmerged = {**d1, **d2}\nfor k in sorted(merged):\n    print(f"{k}={merged[k]}")`,
  ['Use {**d1, **d2} to merge', 'Second dict values override first'],
  ['使用 {**d1, **d2} 合并', '第二个字典的值覆盖第一个'],
  [{ input: 'a=1 b=2 c=3\nb=5 d=4', expectedOutput: 'a=1\nb=5\nc=3\nd=4' }, { input: 'x=1\nx=2', expectedOutput: 'x=2' }]
));

exercises.push(ex('py-ex-3-37', 'Nested Dict Access', '嵌套字典访问', 'medium', 3, 'Dictionaries', '字典', ['dict', 'nested'],
  'Read a JSON-like dict as Python literal and a dot-separated key path. Print the value at that path.',
  '读取一个 Python 字典字面量和一个点分隔的键路径。输出该路径的值。',
  [{ input: '{"a": {"b": {"c": 42}}}\na.b.c', output: '42' }],
  `# TODO: Access nested dict value\n`,
  `# Traverse dict using key path\nimport ast\ndata = ast.literal_eval(input())\nkeys = input().split(".")\nval = data\nfor k in keys:\n    val = val[k]\nprint(val)`,
  ['Split path by "."', 'Traverse dict step by step'],
  ['按 "." 分割路径', '逐步遍历字典'],
  [{ input: '{"a": {"b": {"c": 42}}}\na.b.c', expectedOutput: '42' }, { input: '{"x": {"y": 10}}\nx.y', expectedOutput: '10' }]
));

exercises.push(ex('py-ex-3-38', 'List Remove Duplicates', '列表去重', 'medium', 3, 'Lists', '列表', ['list', 'duplicates'],
  'Read space-separated integers. Remove duplicates preserving order. Print result.',
  '读取空格分隔的整数。去重保持顺序。输出结果。',
  [{ input: '1 2 3 2 1 4 3', output: '1 2 3 4' }],
  `# TODO: Remove duplicates preserving order\n`,
  `# Use dict.fromkeys trick\nnums = input().split()\nprint(" ".join(dict.fromkeys(nums)))`,
  ['dict.fromkeys preserves order and removes duplicates', 'Or track seen items with a set'],
  ['dict.fromkeys 保持顺序并去重', '或用 set 追踪已见元素'],
  [{ input: '1 2 3 2 1 4 3', expectedOutput: '1 2 3 4' }, { input: '5 5 5', expectedOutput: '5' }]
));

exercises.push(ex('py-ex-3-39', 'List Chunk', '列表分块', 'medium', 3, 'Lists', '列表', ['list', 'chunk'],
  'Read space-separated integers and a chunk size k. Print each chunk on a new line.',
  '读取空格分隔的整数和块大小 k。每行输出一个块。',
  [{ input: '1 2 3 4 5 6 7\n3', output: '1 2 3\n4 5 6\n7' }],
  `# TODO: Split list into chunks\n`,
  `# Use list slicing to chunk\nnums = input().split()\nk = int(input())\nfor i in range(0, len(nums), k):\n    print(" ".join(nums[i:i+k]))`,
  ['Use range with step k', 'Slice nums[i:i+k] for each chunk'],
  ['使用步长 k 的 range', '用 nums[i:i+k] 切片每个块'],
  [{ input: '1 2 3 4 5 6 7\n3', expectedOutput: '1 2 3\n4 5 6\n7' }, { input: '1 2 3 4\n2', expectedOutput: '1 2\n3 4' }]
));

exercises.push(ex('py-ex-3-40', 'Matrix Multiply', '矩阵乘法', 'medium', 3, 'Lists', '列表', ['matrix', 'multiply'],
  'Read two 2x2 matrices (4 lines of 2 space-separated ints). Print their product.',
  '读取两个 2x2 矩阵（4行，每行2个空格分隔的整数）。输出它们的乘积。',
  [{ input: '1 2\n3 4\n5 6\n7 8', output: '19 22\n43 50' }],
  `# TODO: Multiply two 2x2 matrices\n`,
  `# Matrix multiplication\na = [list(map(int, input().split())) for _ in range(2)]\nb = [list(map(int, input().split())) for _ in range(2)]\nresult = [[0,0],[0,0]]\nfor i in range(2):\n    for j in range(2):\n        for k in range(2):\n            result[i][j] += a[i][k] * b[k][j]\nfor row in result:\n    print(" ".join(map(str, row)))`,
  ['result[i][j] = sum of a[i][k]*b[k][j]', 'Use triple nested loop'],
  ['result[i][j] = a[i][k]*b[k][j] 的和', '使用三重嵌套循环'],
  [{ input: '1 2\n3 4\n5 6\n7 8', expectedOutput: '19 22\n43 50' }, { input: '1 0\n0 1\n5 6\n7 8', expectedOutput: '5 6\n7 8' }]
));

exercises.push(ex('py-ex-3-41', 'Tower of Hanoi', '汉诺塔', 'medium', 3, 'Recursion', '递归', ['recursion', 'hanoi'],
  'Read n (number of disks). Print the moves to solve Tower of Hanoi from A to C using B.',
  '读取 n（盘子数）。输出从 A 到 C（借助 B）的汉诺塔移动步骤。',
  [{ input: '2', output: 'A -> B\nA -> C\nB -> C' }],
  `# TODO: Solve Tower of Hanoi\n`,
  `# Recursive solution\ndef hanoi(n, src, dst, aux):\n    if n == 1:\n        print(f"{src} -> {dst}")\n        return\n    hanoi(n-1, src, aux, dst)\n    print(f"{src} -> {dst}")\n    hanoi(n-1, aux, dst, src)\n\nhanoi(int(input()), "A", "C", "B")`,
  ['Base case: move 1 disk directly', 'Move n-1 disks to auxiliary', 'Move largest disk, then move n-1 from aux to dest'],
  ['基础情况: 直接移动1个盘子', '将 n-1 个盘子移到辅助柱', '移动最大盘子，然后将 n-1 个从辅助柱移到目标柱'],
  [{ input: '2', expectedOutput: 'A -> B\nA -> C\nB -> C' }, { input: '1', expectedOutput: 'A -> C' }]
));

exercises.push(ex('py-ex-3-42', 'Generate Permutations', '生成排列', 'medium', 3, 'Recursion', '递归', ['recursion', 'permutations'],
  'Read a string of unique characters. Print all permutations sorted lexicographically, one per line.',
  '读取一个由唯一字符组成的字符串。按字典序输出所有排列，每行一个。',
  [{ input: 'abc', output: 'abc\nacb\nbac\nbca\ncab\ncba' }],
  `# TODO: Generate permutations\n`,
  `# Use itertools.permutations\nfrom itertools import permutations\ns = input()\nfor p in sorted(permutations(s)):\n    print("".join(p))`,
  ['Use itertools.permutations', 'Sort for lexicographic order'],
  ['使用 itertools.permutations', '排序获得字典序'],
  [{ input: 'abc', expectedOutput: 'abc\nacb\nbac\nbca\ncab\ncba' }, { input: 'ab', expectedOutput: 'ab\nba' }]
));

exercises.push(ex('py-ex-3-43', 'List Intersection', '列表交集', 'medium', 3, 'Lists', '列表', ['list', 'set'],
  'Read two lines of space-separated integers. Print their common elements sorted.',
  '读取两行空格分隔的整数。输出排序后的公共元素。',
  [{ input: '1 2 3 4 5\n3 4 5 6 7', output: '3 4 5' }],
  `# TODO: Find common elements\n`,
  `# Use set intersection\nset1 = set(map(int, input().split()))\nset2 = set(map(int, input().split()))\nprint(" ".join(map(str, sorted(set1 & set2))))`,
  ['Use set intersection with &', 'Sort the result'],
  ['使用 & 求集合交集', '对结果排序'],
  [{ input: '1 2 3 4 5\n3 4 5 6 7', expectedOutput: '3 4 5' }, { input: '1 2\n3 4', expectedOutput: '' }]
));

exercises.push(ex('py-ex-3-44', 'Spiral Print', '螺旋打印', 'medium', 3, 'Lists', '列表', ['matrix', 'spiral'],
  'Read an n×n matrix. Print all elements in spiral order (clockwise from top-left), space-separated.',
  '读取一个 n×n 矩阵。按螺旋顺序（从左上顺时针）输出所有元素。',
  [{ input: '3\n1 2 3\n4 5 6\n7 8 9', output: '1 2 3 6 9 8 7 4 5' }],
  `# TODO: Print matrix in spiral order\n`,
  `# Peel layers from outside in\nn = int(input())\nmatrix = [list(map(int, input().split())) for _ in range(n)]\nresult = []\ntop, bottom, left, right = 0, n-1, 0, n-1\nwhile top <= bottom and left <= right:\n    for i in range(left, right+1): result.append(matrix[top][i])\n    top += 1\n    for i in range(top, bottom+1): result.append(matrix[i][right])\n    right -= 1\n    if top <= bottom:\n        for i in range(right, left-1, -1): result.append(matrix[bottom][i])\n        bottom -= 1\n    if left <= right:\n        for i in range(bottom, top-1, -1): result.append(matrix[i][left])\n        left += 1\nprint(" ".join(map(str, result)))`,
  ['Process layer by layer', 'Go right, down, left, up', 'Shrink boundaries after each direction'],
  ['逐层处理', '依次向右、下、左、上', '每个方向后缩小边界'],
  [{ input: '3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '1 2 3 6 9 8 7 4 5' }, { input: '2\n1 2\n3 4', expectedOutput: '1 2 4 3' }]
));

exercises.push(ex('py-ex-3-45', 'Reduce Function', 'reduce 函数', 'medium', 3, 'Functions', '函数', ['reduce', 'functools'],
  'Read space-separated integers. Use reduce to find the product of all numbers.',
  '读取空格分隔的整数。使用 reduce 求所有数字的乘积。',
  [{ input: '1 2 3 4', output: '24' }],
  `# TODO: Use reduce to find product\n`,
  `# reduce applies function cumulatively\nfrom functools import reduce\nnums = list(map(int, input().split()))\nprint(reduce(lambda a, b: a * b, nums))`,
  ['Import reduce from functools', 'reduce(func, iterable) applies func cumulatively'],
  ['从 functools 导入 reduce', 'reduce(func, iterable) 累积应用函数'],
  [{ input: '1 2 3 4', expectedOutput: '24' }, { input: '5 6', expectedOutput: '30' }]
));

exercises.push(ex('py-ex-3-46', 'Sorted by Key', '按键排序', 'medium', 3, 'Functions', '函数', ['sorted', 'key', 'lambda'],
  'Read lines of "name age" until empty. Sort by age (ascending) and print names.',
  '读取 "name age" 行。按年龄升序排序并输出名字。',
  [{ input: 'Alice 30\nBob 25\nCharlie 35', output: 'Bob\nAlice\nCharlie' }],
  `# TODO: Sort by age\n`,
  `# Use sorted with key\nimport sys\nlines = sys.stdin.read().strip().split("\\n")\npeople = [line.split() for line in lines]\npeople.sort(key=lambda p: int(p[1]))\nfor p in people:\n    print(p[0])`,
  ['Use sorted/sort with key parameter', 'Extract age with lambda'],
  ['使用 sorted/sort 的 key 参数', '用 lambda 提取年龄'],
  [{ input: 'Alice 30\nBob 25\nCharlie 35', expectedOutput: 'Bob\nAlice\nCharlie' }, { input: 'X 1\nY 2', expectedOutput: 'X\nY' }]
));

exercises.push(ex('py-ex-3-47', 'List Comprehension Nested', '嵌套列表推导', 'medium', 3, 'List Comprehension', '列表推导', ['list-comprehension', 'nested'],
  'Read n. Using nested list comprehension, generate all (i,j) pairs where 0<=i<n and 0<=j<n and i!=j. Print each pair on a line.',
  '读取 n。使用嵌套列表推导生成所有 (i,j) 对（0<=i<n, 0<=j<n, i!=j）。每行输出一个。',
  [{ input: '3', output: '0 1\n0 2\n1 0\n1 2\n2 0\n2 1' }],
  `# TODO: Generate pairs with nested comprehension\n`,
  `# Nested list comprehension\nn = int(input())\npairs = [(i, j) for i in range(n) for j in range(n) if i != j]\nfor i, j in pairs:\n    print(f"{i} {j}")`,
  ['Use two for clauses in comprehension', 'Add if i != j condition'],
  ['在推导中使用两个 for 子句', '添加 if i != j 条件'],
  [{ input: '3', expectedOutput: '0 1\n0 2\n1 0\n1 2\n2 0\n2 1' }, { input: '2', expectedOutput: '0 1\n1 0' }]
));

exercises.push(ex('py-ex-3-48', 'Dict Comprehension', '字典推导', 'medium', 3, 'Dictionaries', '字典', ['dict-comprehension'],
  'Read space-separated integers. Create a dict mapping each number to its square. Print sorted key:value pairs.',
  '读取空格分隔的整数。创建每个数字到其平方的字典。按 key 排序输出。',
  [{ input: '3 1 4 2', output: '1:1\n2:4\n3:9\n4:16' }],
  `# TODO: Dict comprehension for squares\n`,
  `# Dict comprehension: {k: v for k in ...}\nnums = list(map(int, input().split()))\nsquares = {n: n**2 for n in nums}\nfor k in sorted(squares):\n    print(f"{k}:{squares[k]}")`,
  ['Use {k: v for k in iterable}', 'Sort by keys for output'],
  ['使用 {k: v for k in iterable}', '按 key 排序输出'],
  [{ input: '3 1 4 2', expectedOutput: '1:1\n2:4\n3:9\n4:16' }, { input: '5 2', expectedOutput: '2:4\n5:25' }]
));

exercises.push(ex('py-ex-3-49', 'Zip Longest', '最长zip', 'medium', 3, 'Functions', '函数', ['zip', 'itertools'],
  'Read two lines of space-separated values. Zip them together, filling missing values with "X". Print pairs.',
  '读取两行空格分隔的值。将它们配对，缺失值用 "X" 填充。输出配对。',
  [{ input: '1 2 3\na b', output: '1-a\n2-b\n3-X' }],
  `# TODO: Zip with fill value\n`,
  `# Use itertools.zip_longest\nfrom itertools import zip_longest\nlist1 = input().split()\nlist2 = input().split()\nfor a, b in zip_longest(list1, list2, fillvalue="X"):\n    print(f"{a}-{b}")`,
  ['Use itertools.zip_longest', 'fillvalue fills in for shorter iterable'],
  ['使用 itertools.zip_longest', 'fillvalue 填充较短的可迭代对象'],
  [{ input: '1 2 3\na b', expectedOutput: '1-a\n2-b\n3-X' }, { input: 'a\n1 2', expectedOutput: 'a-1\nX-2' }]
));

exercises.push(ex('py-ex-3-50', 'Group Anagrams', '分组变位词', 'medium', 3, 'Dictionaries', '字典', ['dict', 'anagram', 'group'],
  'Read space-separated words. Group anagrams together. Print each group sorted, groups sorted by first word.',
  '读取空格分隔的单词。将变位词分组。输出每组（组内排序），组按首词排序。',
  [{ input: 'eat tea tan ate nat bat', output: 'ate eat tea\nant nat tan\nbat' }],
  `# TODO: Group anagrams\n`,
  `# Use sorted word as key\nfrom collections import defaultdict\nwords = input().split()\ngroups = defaultdict(list)\nfor w in words:\n    key = "".join(sorted(w))\n    groups[key].append(w)\nfor key in sorted(groups, key=lambda k: sorted(groups[k])[0]):\n    print(" ".join(sorted(groups[key])))`,
  ['Use sorted characters as dict key', 'defaultdict(list) for grouping', 'Sort within and between groups'],
  ['用排序后的字符作为字典键', '用 defaultdict(list) 分组', '组内和组间排序'],
  [{ input: 'eat tea tan ate nat bat', expectedOutput: 'ate eat tea\nant nat tan\nbat' }, { input: 'ab ba cd', expectedOutput: 'ab ba\ncd' }]
));

exercises.push(ex('py-ex-3-51', 'Two Sum', '两数之和', 'medium', 3, 'Algorithms', '算法', ['hash-map', 'two-sum'],
  'Read space-separated integers and a target. Print indices (0-based) of two numbers that add to target.',
  '读取空格分隔的整数和目标值。输出两个加起来等于目标值的数字索引（从0开始）。',
  [{ input: '2 7 11 15\n9', output: '0 1' }],
  `# TODO: Find two numbers that sum to target\n`,
  `# Use hash map for O(n) solution\nnums = list(map(int, input().split()))\ntarget = int(input())\nseen = {}\nfor i, n in enumerate(nums):\n    complement = target - n\n    if complement in seen:\n        print(f"{seen[complement]} {i}")\n        break\n    seen[n] = i`,
  ['Use a dict to store seen values', 'For each num, check if target-num exists'],
  ['用字典存储已见的值', '对每个数，检查 target-num 是否存在'],
  [{ input: '2 7 11