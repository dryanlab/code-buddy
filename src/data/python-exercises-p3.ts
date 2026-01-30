import type { PythonExercise } from './python-exercises';

export const PYTHON_EXERCISES_P3: PythonExercise[] = [
  // ============================================================
  // LEVEL 3: Functions, Recursion, Data Structures (25 exercises)
  // ============================================================
  {
    id: 'py-ex-3-01',
    title: 'Variable Arguments (*args)',
    titleZh: '可变参数 (*args)',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['args', 'functions'],
    description: 'Write a function `add_all(*args)` that returns the sum of all arguments. Read space-separated integers and call it.',
    descriptionZh: '编写函数 `add_all(*args)` 返回所有参数之和。读取空格分隔的整数并调用它。',
    examples: [{ input: '1 2 3 4', output: '10' }],
    starterCode: `# TODO: Define add_all(*args) and use it\n`,
    solution: `# *args collects all positional arguments into a tuple
def add_all(*args):
    return sum(args)

nums = list(map(int, input().split()))
print(add_all(*nums))`,
    hints: ['*args collects arguments into a tuple', 'Use sum() on args', 'Unpack list with * when calling'],
    hintsZh: ['*args 将参数收集为元组', '对 args 使用 sum()', '调用时用 * 解包列表'],
    testCases: [
      { input: '1 2 3 4', expectedOutput: '10' },
      { input: '10 20', expectedOutput: '30' },
    ],
  },
  {
    id: 'py-ex-3-02',
    title: 'Keyword Arguments (**kwargs)',
    titleZh: '关键字参数 (**kwargs)',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['kwargs', 'functions'],
    description: 'Write a function `describe(**kwargs)` that prints each key=value pair on a separate line, sorted by key. Read pairs as "key=value" space-separated.',
    descriptionZh: '编写函数 `describe(**kwargs)` 按键排序逐行输出 key=value。读取空格分隔的 "key=value" 对。',
    examples: [{ input: 'name=Alice age=25', output: 'age=25\nname=Alice' }],
    starterCode: `# TODO: Define describe(**kwargs) and use it\n`,
    solution: `# **kwargs collects keyword arguments into a dict
def describe(**kwargs):
    for k in sorted(kwargs):
        print(f"{k}={kwargs[k]}")

pairs = input().split()
d = {}
for p in pairs:
    k, v = p.split('=')
    d[k] = v
describe(**d)`,
    hints: ['**kwargs becomes a dictionary', 'Sort the keys before printing', 'Use ** to unpack dict when calling'],
    hintsZh: ['**kwargs 变成字典', '打印前对键排序', '调用时用 ** 解包字典'],
    testCases: [
      { input: 'name=Alice age=25', expectedOutput: 'age=25\nname=Alice' },
      { input: 'x=1 y=2 z=3', expectedOutput: 'x=1\ny=2\nz=3' },
    ],
  },
  {
    id: 'py-ex-3-03',
    title: 'Recursion: Factorial',
    titleZh: '递归：阶乘',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'math'],
    description: 'Write a recursive function to compute n!. Read n and print the result.',
    descriptionZh: '编写递归函数计算 n!。读取 n 并输出结果。',
    examples: [{ input: '5', output: '120' }],
    starterCode: `# TODO: Write a recursive factorial function\n`,
    solution: `# Base case: 0! = 1; recursive: n! = n * (n-1)!
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(int(input())))`,
    hints: ['Base case: n <= 1 returns 1', 'Recursive case: n * factorial(n-1)'],
    hintsZh: ['基本情况：n <= 1 返回 1', '递归情况：n * factorial(n-1)'],
    testCases: [
      { input: '5', expectedOutput: '120' },
      { input: '0', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-3-04',
    title: 'Recursion: Power',
    titleZh: '递归：幂',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'math'],
    description: 'Write a recursive function power(base, exp) that computes base^exp. Read base and exp.',
    descriptionZh: '编写递归函数 power(base, exp) 计算 base^exp。读取底数和指数。',
    examples: [{ input: '2\n10', output: '1024' }],
    starterCode: `# TODO: Write recursive power function\n`,
    solution: `# Base case: exp == 0 returns 1
def power(base, exp):
    if exp == 0:
        return 1
    return base * power(base, exp - 1)

b = int(input())
e = int(input())
print(power(b, e))`,
    hints: ['Base case: exp == 0 returns 1', 'Multiply base by power(base, exp-1)'],
    hintsZh: ['基本情况：exp == 0 返回 1', 'base 乘以 power(base, exp-1)'],
    testCases: [
      { input: '2\n10', expectedOutput: '1024' },
      { input: '3\n3', expectedOutput: '27' },
    ],
  },
  {
    id: 'py-ex-3-05',
    title: 'Recursion: Tower of Hanoi',
    titleZh: '递归：汉诺塔',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'classic'],
    description: 'Read n (number of disks). Print the moves to solve Tower of Hanoi from peg A to C using B. Format: "A -> C".',
    descriptionZh: '读取 n（盘子数）。输出从柱A移到柱C（借助柱B）的汉诺塔移动步骤。格式："A -> C"。',
    examples: [{ input: '2', output: 'A -> B\nA -> C\nB -> C' }],
    starterCode: `# TODO: Solve Tower of Hanoi recursively\n`,
    solution: `# Classic recursive solution for Tower of Hanoi
def hanoi(n, src, dst, aux):
    if n == 1:
        print(f"{src} -> {dst}")
        return
    hanoi(n - 1, src, aux, dst)
    print(f"{src} -> {dst}")
    hanoi(n - 1, aux, dst, src)

hanoi(int(input()), 'A', 'C', 'B')`,
    hints: ['Move n-1 disks to auxiliary peg', 'Move largest disk to destination', 'Move n-1 disks from auxiliary to destination'],
    hintsZh: ['先将 n-1 个盘子移到辅助柱', '将最大盘子移到目标柱', '再将 n-1 个盘子从辅助柱移到目标柱'],
    testCases: [
      { input: '2', expectedOutput: 'A -> B\nA -> C\nB -> C' },
      { input: '1', expectedOutput: 'A -> C' },
    ],
  },
  {
    id: 'py-ex-3-06',
    title: 'Recursion: Permutations',
    titleZh: '递归：全排列',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'permutation'],
    description: 'Read a string (distinct chars). Print all permutations, one per line, in sorted order.',
    descriptionZh: '读取字符串（不重复字符）。按排序顺序逐行输出所有排列。',
    examples: [{ input: 'ab', output: 'ab\nba' }],
    starterCode: `# TODO: Generate all permutations recursively\n`,
    solution: `# Recursive permutation generation
def permute(s, path=''):
    if not s:
        results.append(path)
        return
    for i in range(len(s)):
        permute(s[:i] + s[i+1:], path + s[i])

results = []
permute(input())
for r in sorted(results):
    print(r)`,
    hints: ['Pick each character as first, recurse on the rest', 'Collect results and sort before printing'],
    hintsZh: ['依次选每个字符为首，对剩余递归', '收集结果排序后打印'],
    testCases: [
      { input: 'ab', expectedOutput: 'ab\nba' },
      { input: 'abc', expectedOutput: 'abc\nacb\nbac\nbca\ncab\ncba' },
    ],
  },
  {
    id: 'py-ex-3-07',
    title: 'Dict: Word Frequency',
    titleZh: '字典：词频统计',
    difficulty: 'medium',
    level: 3,
    category: 'Dicts',
    categoryZh: '字典',
    tags: ['dict', 'frequency'],
    description: 'Read a line of words. Print each unique word and its count, sorted by word, one per line as "word count".',
    descriptionZh: '读取一行单词。按单词排序逐行输出 "单词 次数"。',
    examples: [{ input: 'a b a c b a', output: 'a 3\nb 2\nc 1' }],
    starterCode: `# TODO: Count word frequencies using a dict\n`,
    solution: `# Use dict to count word frequencies
words = input().split()
freq = {}
for w in words:
    freq[w] = freq.get(w, 0) + 1
for w in sorted(freq):
    print(f"{w} {freq[w]}")`,
    hints: ['Use dict.get(key, 0) + 1 to count', 'Sort the keys before printing'],
    hintsZh: ['使用 dict.get(key, 0) + 1 计数', '打印前对键排序'],
    testCases: [
      { input: 'a b a c b a', expectedOutput: 'a 3\nb 2\nc 1' },
      { input: 'x x y', expectedOutput: 'x 2\ny 1' },
    ],
  },
  {
    id: 'py-ex-3-08',
    title: 'Dict: Invert',
    titleZh: '字典：反转键值',
    difficulty: 'medium',
    level: 3,
    category: 'Dicts',
    categoryZh: '字典',
    tags: ['dict', 'invert'],
    description: 'Read key=value pairs space-separated (values are unique). Print the inverted dict (value becomes key), sorted by new keys.',
    descriptionZh: '读取空格分隔的 key=value 对（值唯一）。输出反转字典（值变键），按新键排序。',
    examples: [{ input: 'a=1 b=2', output: '1=a\n2=b' }],
    starterCode: `# TODO: Invert a dictionary\n`,
    solution: `# Swap keys and values
pairs = input().split()
d = {}
for p in pairs:
    k, v = p.split('=')
    d[k] = v
inverted = {v: k for k, v in d.items()}
for k in sorted(inverted):
    print(f"{k}={inverted[k]}")`,
    hints: ['Use dict comprehension: {v: k for k, v in d.items()}', 'Sort by the new keys'],
    hintsZh: ['使用字典推导：{v: k for k, v in d.items()}', '按新键排序'],
    testCases: [
      { input: 'a=1 b=2', expectedOutput: '1=a\n2=b' },
      { input: 'x=3 y=1 z=2', expectedOutput: '1=y\n2=z\n3=x' },
    ],
  },
  {
    id: 'py-ex-3-09',
    title: 'Dict: Merge Two Dicts',
    titleZh: '字典：合并两个字典',
    difficulty: 'medium',
    level: 3,
    category: 'Dicts',
    categoryZh: '字典',
    tags: ['dict', 'merge'],
    description: 'Read two lines of key=value pairs. Merge them (second line overwrites). Print sorted key=value pairs.',
    descriptionZh: '读取两行 key=value 对。合并（第二行覆盖）。按键排序输出。',
    examples: [{ input: 'a=1 b=2\nb=3 c=4', output: 'a=1\nb=3\nc=4' }],
    starterCode: `# TODO: Merge two dictionaries\n`,
    solution: `# Use {**d1, **d2} or d1.update(d2) to merge
def parse(line):
    d = {}
    for p in line.split():
        k, v = p.split('=')
        d[k] = v
    return d

d1 = parse(input())
d2 = parse(input())
merged = {**d1, **d2}
for k in sorted(merged):
    print(f"{k}={merged[k]}")`,
    hints: ['Use {**d1, **d2} to merge dicts', 'Second dict values override first'],
    hintsZh: ['使用 {**d1, **d2} 合并字典', '第二个字典的值覆盖第一个'],
    testCases: [
      { input: 'a=1 b=2\nb=3 c=4', expectedOutput: 'a=1\nb=3\nc=4' },
      { input: 'x=1\ny=2', expectedOutput: 'x=1\ny=2' },
    ],
  },
  {
    id: 'py-ex-3-10',
    title: 'Dict: Nested Access',
    titleZh: '字典：嵌套访问',
    difficulty: 'medium',
    level: 3,
    category: 'Dicts',
    categoryZh: '字典',
    tags: ['dict', 'nested'],
    description: 'Given a nested dict as a JSON string on one line, and a dot-separated key path on the next line, print the value. Print "NOT_FOUND" if path is invalid.',
    descriptionZh: '给定一行 JSON 字符串表示的嵌套字典和一行点分隔的键路径，输出对应的值。路径无效则输出 "NOT_FOUND"。',
    examples: [{ input: '{"a": {"b": 42}}\na.b', output: '42' }],
    starterCode: `# TODO: Access nested dict by dot path\n`,
    solution: `# Parse JSON and traverse by dot path
import json
data = json.loads(input())
path = input().split('.')
try:
    for key in path:
        data = data[key]
    print(data)
except (KeyError, TypeError):
    print("NOT_FOUND")`,
    hints: ['Use json.loads() to parse the JSON', 'Split path by "." and traverse step by step', 'Use try/except for invalid paths'],
    hintsZh: ['使用 json.loads() 解析 JSON', '按 "." 分割路径逐步访问', '用 try/except 处理无效路径'],
    testCases: [
      { input: '{"a": {"b": 42}}\na.b', expectedOutput: '42' },
      { input: '{"a": 1}\na.b', expectedOutput: 'NOT_FOUND' },
    ],
  },
  {
    id: 'py-ex-3-11',
    title: 'Set Operations',
    titleZh: '集合运算',
    difficulty: 'medium',
    level: 3,
    category: 'Sets',
    categoryZh: '集合',
    tags: ['set', 'operations'],
    description: 'Read two lines of space-separated integers. Print their intersection sorted, then union sorted, on separate lines.',
    descriptionZh: '读取两行空格分隔的整数。分两行输出排序后的交集和并集。',
    examples: [{ input: '1 2 3 4\n3 4 5 6', output: '3 4\n1 2 3 4 5 6' }],
    starterCode: `# TODO: Compute set intersection and union\n`,
    solution: `# Use set & for intersection, | for union
a = set(map(int, input().split()))
b = set(map(int, input().split()))
inter = sorted(a & b)
union = sorted(a | b)
print(' '.join(map(str, inter)))
print(' '.join(map(str, union)))`,
    hints: ['Use & for intersection, | for union', 'Sort the results before printing'],
    hintsZh: ['使用 & 求交集，| 求并集', '打印前排序'],
    testCases: [
      { input: '1 2 3 4\n3 4 5 6', expectedOutput: '3 4\n1 2 3 4 5 6' },
      { input: '1 2\n3 4', expectedOutput: '\n1 2 3 4' },
    ],
  },
  {
    id: 'py-ex-3-12',
    title: 'Tuple Unpacking',
    titleZh: '元组解包',
    difficulty: 'medium',
    level: 3,
    category: 'Tuples',
    categoryZh: '元组',
    tags: ['tuple', 'unpacking'],
    description: 'Read a line of space-separated integers. Unpack the first, last, and middle elements. Print "first last middle_count" where middle_count is the count of middle elements.',
    descriptionZh: '读取空格分隔的整数。解包首元素、尾元素和中间元素。输出 "首 尾 中间个数"。',
    examples: [{ input: '1 2 3 4 5', output: '1 5 3' }],
    starterCode: `# TODO: Use extended unpacking\n`,
    solution: `# Extended unpacking with *middle
nums = list(map(int, input().split()))
first, *middle, last = nums
print(f"{first} {last} {len(middle)}")`,
    hints: ['Use first, *middle, last = nums', '*middle captures everything in between'],
    hintsZh: ['使用 first, *middle, last = nums', '*middle 捕获中间所有元素'],
    testCases: [
      { input: '1 2 3 4 5', expectedOutput: '1 5 3' },
      { input: '10 20', expectedOutput: '10 20 0' },
    ],
  },
  {
    id: 'py-ex-3-13',
    title: 'Matrix Transpose',
    titleZh: '矩阵转置',
    difficulty: 'medium',
    level: 3,
    category: 'Matrix',
    categoryZh: '矩阵',
    tags: ['matrix', 'list', 'zip'],
    description: 'Read r rows of space-separated integers (same length). Print the transposed matrix.',
    descriptionZh: '读取 r 行等长的空格分隔整数。输出转置后的矩阵。',
    examples: [{ input: '2\n1 2 3\n4 5 6', output: '1 4\n2 5\n3 6' }],
    starterCode: `# TODO: Transpose a matrix\n`,
    solution: `# Use zip(*matrix) to transpose
r = int(input())
matrix = []
for _ in range(r):
    matrix.append(list(map(int, input().split())))
for row in zip(*matrix):
    print(' '.join(map(str, row)))`,
    hints: ['Use zip(*matrix) to transpose', 'Each column becomes a row'],
    hintsZh: ['使用 zip(*matrix) 转置', '每列变为一行'],
    testCases: [
      { input: '2\n1 2 3\n4 5 6', expectedOutput: '1 4\n2 5\n3 6' },
      { input: '3\n1 2\n3 4\n5 6', expectedOutput: '1 3 5\n2 4 6' },
    ],
  },
  {
    id: 'py-ex-3-14',
    title: 'Matrix Multiply',
    titleZh: '矩阵乘法',
    difficulty: 'medium',
    level: 3,
    category: 'Matrix',
    categoryZh: '矩阵',
    tags: ['matrix', 'nested-loops'],
    description: 'Read two matrices (first line: "r c", then r rows). Print their product. Guaranteed compatible dimensions.',
    descriptionZh: '读取两个矩阵（首行 "r c"，然后 r 行）。输出它们的乘积。保证维度兼容。',
    examples: [{ input: '2 2\n1 2\n3 4\n2 2\n5 6\n7 8', output: '19 22\n43 50' }],
    starterCode: `# TODO: Multiply two matrices\n`,
    solution: `# Matrix multiplication with nested loops
def read_matrix():
    r, c = map(int, input().split())
    return [list(map(int, input().split())) for _ in range(r)]

A = read_matrix()
B = read_matrix()
# Result: rows of A x cols of B
result = []
for i in range(len(A)):
    row = []
    for j in range(len(B[0])):
        val = sum(A[i][k] * B[k][j] for k in range(len(B)))
        row.append(val)
    result.append(row)
for row in result:
    print(' '.join(map(str, row)))`,
    hints: ['result[i][j] = sum of A[i][k] * B[k][j]', 'Three nested loops: i, j, k'],
    hintsZh: ['result[i][j] = A[i][k] * B[k][j] 的和', '三层嵌套循环：i, j, k'],
    testCases: [
      { input: '2 2\n1 2\n3 4\n2 2\n5 6\n7 8', expectedOutput: '19 22\n43 50' },
      { input: '1 2\n1 2\n2 1\n3\n4', expectedOutput: '11' },
    ],
  },
  {
    id: 'py-ex-3-15',
    title: 'Sort with Key',
    titleZh: '按键排序',
    difficulty: 'medium',
    level: 3,
    category: 'Sorting',
    categoryZh: '排序',
    tags: ['sort', 'key', 'lambda'],
    description: 'Read space-separated words. Sort them by length (ascending), then alphabetically for ties. Print space-separated.',
    descriptionZh: '读取空格分隔的单词。按长度升序排列，长度相同则按字母序。空格分隔输出。',
    examples: [{ input: 'banana apple kiwi pear', output: 'kiwi pear apple banana' }],
    starterCode: `# TODO: Sort words by length, then alphabetically\n`,
    solution: `# Use key with tuple for multi-criteria sort
words = input().split()
words.sort(key=lambda w: (len(w), w))
print(' '.join(words))`,
    hints: ['Use sort(key=lambda w: (len(w), w))', 'Tuple keys sort by first element, then second'],
    hintsZh: ['使用 sort(key=lambda w: (len(w), w))', '元组键先按第一个元素排序，再按第二个'],
    testCases: [
      { input: 'banana apple kiwi pear', expectedOutput: 'kiwi pear apple banana' },
      { input: 'c bb aaa', expectedOutput: 'c bb aaa' },
    ],
  },
  {
    id: 'py-ex-3-16',
    title: 'Lambda and Map',
    titleZh: 'Lambda 和 Map',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['lambda', 'map'],
    description: 'Read space-separated integers. Use map with a lambda to double each number. Print space-separated.',
    descriptionZh: '读取空格分隔的整数。使用 map 和 lambda 将每个数翻倍。空格分隔输出。',
    examples: [{ input: '1 2 3', output: '2 4 6' }],
    starterCode: `# TODO: Use map and lambda to double numbers\n`,
    solution: `# map applies a function to each element
nums = list(map(int, input().split()))
result = list(map(lambda x: x * 2, nums))
print(' '.join(map(str, result)))`,
    hints: ['Use map(lambda x: x * 2, nums)', 'Convert result to list, then join'],
    hintsZh: ['使用 map(lambda x: x * 2, nums)', '将结果转为列表再 join'],
    testCases: [
      { input: '1 2 3', expectedOutput: '2 4 6' },
      { input: '5 10', expectedOutput: '10 20' },
    ],
  },
  {
    id: 'py-ex-3-17',
    title: 'Filter with Lambda',
    titleZh: '使用 Lambda 过滤',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['lambda', 'filter'],
    description: 'Read space-separated integers. Use filter with a lambda to keep only numbers > 10. Print space-separated.',
    descriptionZh: '读取空格分隔的整数。使用 filter 和 lambda 只保留大于 10 的数。空格分隔输出。',
    examples: [{ input: '5 15 3 20 8', output: '15 20' }],
    starterCode: `# TODO: Use filter and lambda\n`,
    solution: `# filter keeps elements where function returns True
nums = list(map(int, input().split()))
result = list(filter(lambda x: x > 10, nums))
print(' '.join(map(str, result)))`,
    hints: ['Use filter(lambda x: x > 10, nums)', 'Convert result to list'],
    hintsZh: ['使用 filter(lambda x: x > 10, nums)', '将结果转为列表'],
    testCases: [
      { input: '5 15 3 20 8', expectedOutput: '15 20' },
      { input: '1 2 3', expectedOutput: '' },
    ],
  },
  {
    id: 'py-ex-3-18',
    title: 'Set: Symmetric Difference',
    titleZh: '集合：对称差',
    difficulty: 'medium',
    level: 3,
    category: 'Sets',
    categoryZh: '集合',
    tags: ['set', 'symmetric-difference'],
    description: 'Read two lines of space-separated integers. Print the symmetric difference (elements in either but not both), sorted.',
    descriptionZh: '读取两行空格分隔的整数。输出对称差（在其中一个但不在两者中的元素），排序后输出。',
    examples: [{ input: '1 2 3\n2 3 4', output: '1 4' }],
    starterCode: `# TODO: Compute symmetric difference\n`,
    solution: `# Use ^ for symmetric difference
a = set(map(int, input().split()))
b = set(map(int, input().split()))
result = sorted(a ^ b)
print(' '.join(map(str, result)))`,
    hints: ['Use ^ or .symmetric_difference()', 'Sort before printing'],
    hintsZh: ['使用 ^ 或 .symmetric_difference()', '打印前排序'],
    testCases: [
      { input: '1 2 3\n2 3 4', expectedOutput: '1 4' },
      { input: '1 2\n1 2', expectedOutput: '' },
    ],
  },
  {
    id: 'py-ex-3-19',
    title: 'File I/O Simulation',
    titleZh: '文件 I/O 模拟',
    difficulty: 'medium',
    level: 3,
    category: 'File I/O',
    categoryZh: '文件操作',
    tags: ['file', 'io', 'stringio'],
    description: 'Read lines until "EOF". Write them to a StringIO object, then read back and print all lines with line numbers "1: line".',
    descriptionZh: '读取行直到 "EOF"。写入 StringIO 对象，然后读回并带行号输出 "1: line"。',
    examples: [{ input: 'hello\nworld\nEOF', output: '1: hello\n2: world' }],
    starterCode: `# TODO: Use StringIO to simulate file operations\n`,
    solution: `# Use io.StringIO to simulate file read/write
import io
buf = io.StringIO()
while True:
    line = input()
    if line == "EOF":
        break
    buf.write(line + "\\n")
buf.seek(0)
for i, line in enumerate(buf.readlines(), 1):
    print(f"{i}: {line.rstrip()}")`,
    hints: ['Use io.StringIO() as an in-memory file', 'Write lines then seek(0) to read back', 'Use enumerate for line numbers'],
    hintsZh: ['使用 io.StringIO() 作为内存文件', '写入后 seek(0) 重新读取', '使用 enumerate 添加行号'],
    testCases: [
      { input: 'hello\nworld\nEOF', expectedOutput: '1: hello\n2: world' },
      { input: 'one\nEOF', expectedOutput: '1: one' },
    ],
  },
  {
    id: 'py-ex-3-20',
    title: 'Sort by Multiple Keys',
    titleZh: '多键排序',
    difficulty: 'medium',
    level: 3,
    category: 'Sorting',
    categoryZh: '排序',
    tags: ['sort', 'key', 'tuple'],
    description: 'Read n, then n lines of "name age score". Sort by score descending, then name ascending. Print each line.',
    descriptionZh: '读取 n，然后 n 行 "姓名 年龄 分数"。按分数降序、姓名升序排序输出。',
    examples: [{ input: '3\nAlice 20 90\nBob 21 90\nCharlie 19 85', output: 'Alice 20 90\nBob 21 90\nCharlie 19 85' }],
    starterCode: `# TODO: Sort records by score desc, name asc\n`,
    solution: `# Sort with key returning tuple (-score, name)
n = int(input())
records = []
for _ in range(n):
    parts = input().split()
    records.append((parts[0], parts[1], int(parts[2])))
records.sort(key=lambda r: (-r[2], r[0]))
for r in records:
    print(f"{r[0]} {r[1]} {r[2]}")`,
    hints: ['Use negative score for descending order', 'key=lambda r: (-score, name)'],
    hintsZh: ['用负分数实现降序', 'key=lambda r: (-score, name)'],
    testCases: [
      { input: '3\nAlice 20 90\nBob 21 90\nCharlie 19 85', expectedOutput: 'Alice 20 90\nBob 21 90\nCharlie 19 85' },
      { input: '2\nBob 20 80\nAlice 21 90', expectedOutput: 'Alice 21 90\nBob 20 80' },
    ],
  },
  {
    id: 'py-ex-3-21',
    title: 'Closure: Counter',
    titleZh: '闭包：计数器',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['closure', 'nonlocal'],
    description: 'Read n. Create a counter closure that increments by 1 each call. Call it n times and print each value.',
    descriptionZh: '读取 n。创建一个每次调用加 1 的闭包计数器。调用 n 次并逐行输出每次的值。',
    examples: [{ input: '3', output: '1\n2\n3' }],
    starterCode: `# TODO: Create a counter using closure\n`,
    solution: `# Closure captures and modifies outer variable
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

n = int(input())
c = make_counter()
for _ in range(n):
    print(c())`,
    hints: ['Use nonlocal to modify the outer variable', 'The inner function is returned as the counter'],
    hintsZh: ['使用 nonlocal 修改外层变量', '内部函数作为计数器返回'],
    testCases: [
      { input: '3', expectedOutput: '1\n2\n3' },
      { input: '1', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-3-22',
    title: 'Decorator: Basic',
    titleZh: '装饰器：基础',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['decorator'],
    description: 'Write a decorator `shout` that makes a function\'s string return value uppercase. Apply it to a function that reads and returns input. Print the result.',
    descriptionZh: '编写装饰器 `shout` 将函数的字符串返回值转为大写。应用到一个读取输入的函数上。输出结果。',
    examples: [{ input: 'hello', output: 'HELLO' }],
    starterCode: `# TODO: Write a shout decorator\n`,
    solution: `# Decorator wraps a function to modify its behavior
def shout(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@shout
def get_input():
    return input()

print(get_input())`,
    hints: ['A decorator takes a function and returns a wrapper', 'The wrapper calls the original and modifies the result'],
    hintsZh: ['装饰器接收函数并返回包装器', '包装器调用原函数并修改结果'],
    testCases: [
      { input: 'hello', expectedOutput: 'HELLO' },
      { input: 'Python', expectedOutput: 'PYTHON' },
    ],
  },
  {
    id: 'py-ex-3-23',
    title: 'Generator: Range',
    titleZh: '生成器：范围',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['generator', 'yield'],
    description: 'Write a generator `my_range(start, stop, step)` that yields values from start to stop (exclusive) with given step. Read start, stop, step and print all values space-separated.',
    descriptionZh: '编写生成器 `my_range(start, stop, step)` 从 start 到 stop（不含）按 step 生成值。读取参数并空格分隔输出。',
    examples: [{ input: '0 10 3', output: '0 3 6 9' }],
    starterCode: `# TODO: Write a generator function\n`,
    solution: `# Generator uses yield to produce values lazily
def my_range(start, stop, step):
    current = start
    while current < stop:
        yield current
        current += step

a, b, c = map(int, input().split())
print(' '.join(map(str, my_range(a, b, c))))`,
    hints: ['Use yield instead of return', 'Increment current by step each iteration'],
    hintsZh: ['使用 yield 代替 return', '每次迭代增加 step'],
    testCases: [
      { input: '0 10 3', expectedOutput: '0 3 6 9' },
      { input: '1 5 1', expectedOutput: '1 2 3 4' },
    ],
  },
  {
    id: 'py-ex-3-24',
    title: 'Error Handling: Multiple Except',
    titleZh: '错误处理：多异常',
    difficulty: 'medium',
    level: 3,
    category: 'Error Handling',
    categoryZh: '错误处理',
    tags: ['try', 'except'],
    description: 'Read two values. Try to divide the first by the second as integers. Print the result, "DIV_ZERO" for ZeroDivisionError, or "NOT_INT" for ValueError.',
    descriptionZh: '读取两个值。尝试整数除法。输出结果，除零错误输出 "DIV_ZERO"，值错误输出 "NOT_INT"。',
    examples: [{ input: '10\n3', output: '3' }],
    starterCode: `# TODO: Handle multiple exception types\n`,
    solution: `# Multiple except blocks for different errors
try:
    a = int(input())
    b = int(input())
    print(a // b)
except ZeroDivisionError:
    print("DIV_ZERO")
except ValueError:
    print("NOT_INT")`,
    hints: ['Use separate except blocks for each error type', 'ValueError if input is not a number'],
    hintsZh: ['为每种错误类型使用单独的 except', '输入非数字时触发 ValueError'],
    testCases: [
      { input: '10\n3', expectedOutput: '3' },
      { input: '10\n0', expectedOutput: 'DIV_ZERO' },
      { input: '10\nabc', expectedOutput: 'NOT_INT' },
    ],
  },
  {
    id: 'py-ex-3-25',
    title: 'List Flatten',
    titleZh: '列表展平',
    difficulty: 'medium',
    level: 3,
    category: 'Lists',
    categoryZh: '列表',
    tags: ['list', 'recursion', 'flatten'],
    description: 'Read a Python list literal (may be nested) on one line. Print all values flattened, space-separated.',
    descriptionZh: '读取一行 Python 列表字面量（可能嵌套）。将所有值展平后空格分隔输出。',
    examples: [{ input: '[1, [2, 3], [4, [5, 6]]]', output: '1 2 3 4 5 6' }],
    starterCode: `# TODO: Flatten a nested list\n`,
    solution: `# Recursive flatten for nested lists
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
    hints: ['Use recursion: if element is a list, flatten it', 'Use isinstance(item, list) to check', 'Use ast.literal_eval to parse the input'],
    hintsZh: ['使用递归：如果元素是列表就展平它', '使用 isinstance(item, list) 检查', '使用 ast.literal_eval 解析输入'],
    testCases: [
      { input: '[1, [2, 3], [4, [5, 6]]]', expectedOutput: '1 2 3 4 5 6' },
      { input: '[[1, 2], [3]]', expectedOutput: '1 2 3' },
    ],
  },

  // ============================================================
  // LEVEL 4: OOP Advanced (15 exercises)
  // ============================================================
  {
    id: 'py-ex-4-01',
    title: 'Class: super()',
    titleZh: '类：super()',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'inheritance', 'super'],
    description: 'Create Animal(name) with speak() returning "...". Create Dog(Animal) whose speak() returns "<name> says Woof". Read a name, create Dog, print speak().',
    descriptionZh: '创建 Animal(name)，speak() 返回 "..."。创建 Dog(Animal)，speak() 返回 "<name> says Woof"。读取名字，输出 speak()。',
    examples: [{ input: 'Rex', output: 'Rex says Woof' }],
    starterCode: `# TODO: Use super() in inheritance\n`,
    solution: `# super() calls the parent class constructor
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)
    def speak(self):
        return f"{self.name} says Woof"

name = input()
d = Dog(name)
print(d.speak())`,
    hints: ['Use super().__init__(name) in Dog.__init__', 'Override speak() in Dog'],
    hintsZh: ['在 Dog.__init__ 中使用 super().__init__(name)', '在 Dog 中重写 speak()'],
    testCases: [
      { input: 'Rex', expectedOutput: 'Rex says Woof' },
      { input: 'Buddy', expectedOutput: 'Buddy says Woof' },
    ],
  },
  {
    id: 'py-ex-4-02',
    title: '__repr__ Method',
    titleZh: '__repr__ 方法',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'repr', 'dunder'],
    description: 'Create Point(x, y) with __repr__ returning "Point(x, y)". Read x y, create Point, print it.',
    descriptionZh: '创建 Point(x, y)，__repr__ 返回 "Point(x, y)"。读取 x y，创建 Point 并打印。',
    examples: [{ input: '3 4', output: 'Point(3, 4)' }],
    starterCode: `# TODO: Implement __repr__\n`,
    solution: `# __repr__ provides a string representation
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __repr__(self):
        return f"Point({self.x}, {self.y})"

x, y = map(int, input().split())
print(Point(x, y))`,
    hints: ['__repr__ is called by print() and repr()', 'Return a string like "Point(x, y)"'],
    hintsZh: ['__repr__ 被 print() 和 repr() 调用', '返回类似 "Point(x, y)" 的字符串'],
    testCases: [
      { input: '3 4', expectedOutput: 'Point(3, 4)' },
      { input: '0 0', expectedOutput: 'Point(0, 0)' },
    ],
  },
  {
    id: 'py-ex-4-03',
    title: '__eq__ and __lt__',
    titleZh: '__eq__ 和 __lt__',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'comparison', 'dunder'],
    description: 'Create Box(volume). Implement __eq__ (same volume) and __lt__ (less volume). Read two volumes, compare and print "eq", "lt", or "gt".',
    descriptionZh: '创建 Box(volume)。实现 __eq__（相同体积）和 __lt__（体积更小）。读取两个体积，比较后输出 "eq"、"lt" 或 "gt"。',
    examples: [{ input: '5\n10', output: 'lt' }],
    starterCode: `# TODO: Implement __eq__ and __lt__\n`,
    solution: `# Comparison dunder methods enable ==, < operators
class Box:
    def __init__(self, volume):
        self.volume = volume
    def __eq__(self, other):
        return self.volume == other.volume
    def __lt__(self, other):
        return self.volume < other.volume

a = Box(int(input()))
b = Box(int(input()))
if a == b:
    print("eq")
elif a < b:
    print("lt")
else:
    print("gt")`,
    hints: ['__eq__ checks equality, __lt__ checks less-than', 'Use self.volume to compare'],
    hintsZh: ['__eq__ 检查相等，__lt__ 检查小于', '使用 self.volume 比较'],
    testCases: [
      { input: '5\n10', expectedOutput: 'lt' },
      { input: '10\n10', expectedOutput: 'eq' },
      { input: '10\n5', expectedOutput: 'gt' },
    ],
  },
  {
    id: 'py-ex-4-04',
    title: '__add__ Method',
    titleZh: '__add__ 方法',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'add', 'dunder'],
    description: 'Create Vector(x, y) with __add__ returning a new Vector and __repr__ returning "Vector(x, y)". Read two vectors, print their sum.',
    descriptionZh: '创建 Vector(x, y)，__add__ 返回新 Vector，__repr__ 返回 "Vector(x, y)"。读取两个向量并输出它们的和。',
    examples: [{ input: '1 2\n3 4', output: 'Vector(4, 6)' }],
    starterCode: `# TODO: Implement __add__ for Vector\n`,
    solution: `# __add__ enables the + operator
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())
print(Vector(x1, y1) + Vector(x2, y2))`,
    hints: ['__add__ takes self and other', 'Return a new Vector with summed components'],
    hintsZh: ['__add__ 接收 self 和 other', '返回新 Vector，各分量相加'],
    testCases: [
      { input: '1 2\n3 4', expectedOutput: 'Vector(4, 6)' },
      { input: '0 0\n5 5', expectedOutput: 'Vector(5, 5)' },
    ],
  },
  {
    id: 'py-ex-4-05',
    title: '__len__ Method',
    titleZh: '__len__ 方法',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'len', 'dunder'],
    description: 'Create Playlist(songs) where songs is a list of strings. Implement __len__. Read space-separated song names, print len().',
    descriptionZh: '创建 Playlist(songs)，songs 是字符串列表。实现 __len__。读取空格分隔的歌名，输出 len()。',
    examples: [{ input: 'a b c', output: '3' }],
    starterCode: `# TODO: Implement __len__\n`,
    solution: `# __len__ enables len() on custom objects
class Playlist:
    def __init__(self, songs):
        self.songs = songs
    def __len__(self):
        return len(self.songs)

songs = input().split()
print(len(Playlist(songs)))`,
    hints: ['__len__ should return an integer', 'Return len(self.songs)'],
    hintsZh: ['__len__ 应返回整数', '返回 len(self.songs)'],
    testCases: [
      { input: 'a b c', expectedOutput: '3' },
      { input: 'x', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-4-06',
    title: '@property Decorator',
    titleZh: '@property 装饰器',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['property', 'class'],
    description: 'Create Circle(radius) with a `area` property returning π*r² rounded to 2 decimals. Read radius, print area.',
    descriptionZh: '创建 Circle(radius)，area 属性返回 π*r² 保留 2 位小数。读取半径，输出面积。',
    examples: [{ input: '5', output: '78.54' }],
    starterCode: `# TODO: Use @property for computed attribute\n`,
    solution: `# @property makes a method accessible like an attribute
import math

class Circle:
    def __init__(self, radius):
        self.radius = radius
    @property
    def area(self):
        return round(math.pi * self.radius ** 2, 2)

r = int(input())
print(Circle(r).area)`,
    hints: ['Use @property above the method', 'Access it without parentheses: circle.area'],
    hintsZh: ['在方法上方使用 @property', '不用括号访问：circle.area'],
    testCases: [
      { input: '5', expectedOutput: '78.54' },
      { input: '1', expectedOutput: '3.14' },
    ],
  },
  {
    id: 'py-ex-4-07',
    title: '@classmethod',
    titleZh: '@classmethod 类方法',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['classmethod', 'class'],
    description: 'Create Date(year, month, day) with a @classmethod `from_string(s)` that parses "YYYY-MM-DD". Read a date string, create Date, print "YYYY/MM/DD".',
    descriptionZh: '创建 Date(year, month, day)，@classmethod `from_string(s)` 解析 "YYYY-MM-DD"。读取日期字符串，输出 "YYYY/MM/DD"。',
    examples: [{ input: '2024-01-15', output: '2024/01/15' }],
    starterCode: `# TODO: Use @classmethod as alternative constructor\n`,
    solution: `# @classmethod receives cls (the class) as first argument
class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day
    @classmethod
    def from_string(cls, s):
        y, m, d = s.split('-')
        return cls(int(y), int(m), int(d))
    def __repr__(self):
        return f"{self.year:04d}/{self.month:02d}/{self.day:02d}"

print(Date.from_string(input()))`,
    hints: ['@classmethod gets cls as first parameter', 'Split the string by "-" to get parts'],
    hintsZh: ['@classmethod 的第一个参数是 cls', '按 "-" 分割字符串获取各部分'],
    testCases: [
      { input: '2024-01-15', expectedOutput: '2024/01/15' },
      { input: '2000-12-01', expectedOutput: '2000/12/01' },
    ],
  },
  {
    id: 'py-ex-4-08',
    title: '@staticmethod',
    titleZh: '@staticmethod 静态方法',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['staticmethod', 'class'],
    description: 'Create MathUtils with a @staticmethod `is_prime(n)` returning True/False. Read n and print the result.',
    descriptionZh: '创建 MathUtils，包含 @staticmethod `is_prime(n)` 返回 True/False。读取 n 并输出结果。',
    examples: [{ input: '7', output: 'True' }],
    starterCode: `# TODO: Use @staticmethod\n`,
    solution: `# @staticmethod doesn't receive self or cls
class MathUtils:
    @staticmethod
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True

print(MathUtils.is_prime(int(input())))`,
    hints: ['@staticmethod has no self or cls parameter', 'Check divisibility up to sqrt(n)'],
    hintsZh: ['@staticmethod 没有 self 或 cls 参数', '检查到 sqrt(n) 的可整除性'],
    testCases: [
      { input: '7', expectedOutput: 'True' },
      { input: '4', expectedOutput: 'False' },
      { input: '1', expectedOutput: 'False' },
    ],
  },
  {
    id: 'py-ex-4-09',
    title: 'Abstract Base Class',
    titleZh: '抽象基类',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['abc', 'abstract', 'class'],
    description: 'Create abstract Shape with abstract method area(). Create Rectangle(w, h) and Triangle(b, h). Read type and dimensions, print area.',
    descriptionZh: '创建抽象类 Shape，含抽象方法 area()。创建 Rectangle(w,h) 和 Triangle(b,h)。读取类型和尺寸，输出面积。',
    examples: [{ input: 'rect 3 4', output: '12' }],
    starterCode: `# TODO: Use ABC for abstract classes\n`,
    solution: `# ABC enforces method implementation in subclasses
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w = w
        self.h = h
    def area(self):
        return self.w * self.h

class Triangle(Shape):
    def __init__(self, b, h):
        self.b = b
        self.h = h
    def area(self):
        return self.b * self.h / 2

parts = input().split()
t = parts[0]
a, b = int(parts[1]), int(parts[2])
if t == 'rect':
    shape = Rectangle(a, b)
else:
    shape = Triangle(a, b)
result = shape.area()
print(int(result) if result == int(result) else result)`,
    hints: ['Import ABC and abstractmethod from abc', 'Subclasses must implement area()'],
    hintsZh: ['从 abc 导入 ABC 和 abstractmethod', '子类必须实现 area()'],
    testCases: [
      { input: 'rect 3 4', expectedOutput: '12' },
      { input: 'tri 6 4', expectedOutput: '12.0' },
    ],
  },
  {
    id: 'py-ex-4-10',
    title: 'Dataclass',
    titleZh: '数据类',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['dataclass', 'class'],
    description: 'Create a @dataclass Student with name (str), age (int), grade (float). Read values, create student, print it.',
    descriptionZh: '创建 @dataclass Student，含 name(str)、age(int)、grade(float)。读取值，创建并打印。',
    examples: [{ input: 'Alice 20 3.5', output: "Student(name='Alice', age=20, grade=3.5)" }],
    starterCode: `# TODO: Use @dataclass\n`,
    solution: `# @dataclass auto-generates __init__, __repr__, etc.
from dataclasses import dataclass

@dataclass
class Student:
    name: str
    age: int
    grade: float

parts = input().split()
s = Student(parts[0], int(parts[1]), float(parts[2]))
print(s)`,
    hints: ['Import dataclass from dataclasses', '@dataclass generates __init__ and __repr__ automatically'],
    hintsZh: ['从 dataclasses 导入 dataclass', '@dataclass 自动生成 __init__ 和 __repr__'],
    testCases: [
      { input: 'Alice 20 3.5', expectedOutput: "Student(name='Alice', age=20, grade=3.5)" },
      { input: 'Bob 21 4.0', expectedOutput: "Student(name='Bob', age=21, grade=4.0)" },
    ],
  },
  {
    id: 'py-ex-4-11',
    title: 'Enum',
    titleZh: '枚举',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['enum', 'class'],
    description: 'Create Color enum with RED=1, GREEN=2, BLUE=3. Read a name (e.g. "RED"), print its value.',
    descriptionZh: '创建 Color 枚举，RED=1, GREEN=2, BLUE=3。读取名称（如 "RED"），输出其值。',
    examples: [{ input: 'RED', output: '1' }],
    starterCode: `# TODO: Use Enum\n`,
    solution: `# Enum defines named constants
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

name = input()
print(Color[name].value)`,
    hints: ['Import Enum from enum', 'Access by name: Color["RED"]', '.value gets the numeric value'],
    hintsZh: ['从 enum 导入 Enum', '按名称访问：Color["RED"]', '.value 获取数值'],
    testCases: [
      { input: 'RED', expectedOutput: '1' },
      { input: 'BLUE', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-4-12',
    title: 'Composition',
    titleZh: '组合',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['composition', 'class'],
    description: 'Create Engine(hp) and Car(name, engine). Car has describe() returning "<name> with <hp>HP". Read name and hp, print describe().',
    descriptionZh: '创建 Engine(hp) 和 Car(name, engine)。Car 的 describe() 返回 "<name> with <hp>HP"。读取名称和马力，输出 describe()。',
    examples: [{ input: 'Tesla 300', output: 'Tesla with 300HP' }],
    starterCode: `# TODO: Use composition (has-a relationship)\n`,
    solution: `# Composition: Car has-an Engine
class Engine:
    def __init__(self, hp):
        self.hp = hp

class Car:
    def __init__(self, name, engine):
        self.name = name
        self.engine = engine
    def describe(self):
        return f"{self.name} with {self.engine.hp}HP"

parts = input().split()
car = Car(parts[0], Engine(int(parts[1])))
print(car.describe())`,
    hints: ['Car stores an Engine object', 'Access engine.hp through self.engine'],
    hintsZh: ['Car 存储一个 Engine 对象', '通过 self.engine 访问 engine.hp'],
    testCases: [
      { input: 'Tesla 300', expectedOutput: 'Tesla with 300HP' },
      { input: 'BMW 200', expectedOutput: 'BMW with 200HP' },
    ],
  },
  {
    id: 'py-ex-4-13',
    title: 'Decorator with Arguments',
    titleZh: '带参数的装饰器',
    difficulty: 'medium',
    level: 4,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['decorator', 'args'],
    description: 'Write a decorator `repeat(n)` that makes a function run n times. Apply it to a function that prints a word. Read n and word.',
    descriptionZh: '编写装饰器 `repeat(n)` 使函数运行 n 次。应用到打印单词的函数上。读取 n 和单词。',
    examples: [{ input: '3\nhello', output: 'hello\nhello\nhello' }],
    starterCode: `# TODO: Write a decorator that takes arguments\n`,
    solution: `# Decorator with args needs three levels of nesting
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

n = int(input())
word = input()

@repeat(n)
def say(w):
    print(w)

say(word)`,
    hints: ['Three levels: repeat(n) -> decorator(func) -> wrapper(*args)', 'The outer function captures n'],
    hintsZh: ['三层嵌套：repeat(n) -> decorator(func) -> wrapper(*args)', '外层函数捕获 n'],
    testCases: [
      { input: '3\nhello', expectedOutput: 'hello\nhello\nhello' },
      { input: '1\nhi', expectedOutput: 'hi' },
    ],
  },
  {
    id: 'py-ex-4-14',
    title: 'Context Manager',
    titleZh: '上下文管理器',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['context-manager', 'with'],
    description: 'Create a Timer context manager that prints "START" on enter and "END" on exit. Read a word, print it inside the with block.',
    descriptionZh: '创建 Timer 上下文管理器，进入时打印 "START"，退出时打印 "END"。读取单词，在 with 块中打印。',
    examples: [{ input: 'hello', output: 'START\nhello\nEND' }],
    starterCode: `# TODO: Create a context manager class\n`,
    solution: `# __enter__ and __exit__ make a context manager
class Timer:
    def __enter__(self):
        print("START")
        return self
    def __exit__(self, *args):
        print("END")

word = input()
with Timer():
    print(word)`,
    hints: ['Implement __enter__ and __exit__', '__enter__ runs at "with", __exit__ runs after the block'],
    hintsZh: ['实现 __enter__ 和 __exit__', '__enter__ 在 with 时运行，__exit__ 在块结束后运行'],
    testCases: [
      { input: 'hello', expectedOutput: 'START\nhello\nEND' },
      { input: 'test', expectedOutput: 'START\ntest\nEND' },
    ],
  },
  {
    id: 'py-ex-4-15',
    title: 'Iterator Protocol',
    titleZh: '迭代器协议',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['iterator', 'class'],
    description: 'Create Countdown(start) implementing __iter__ and __next__ that counts down to 1. Read n, print each value.',
    descriptionZh: '创建 Countdown(start)，实现 __iter__ 和 __next__，从 start 倒数到 1。读取 n，逐行输出。',
    examples: [{ input: '3', output: '3\n2\n1' }],
    starterCode: `# TODO: Implement iterator protocol\n`,
    solution: `# __iter__ returns self, __next__ returns next value or raises StopIteration
class Countdown:
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

for x in Countdown(int(input())):
    print(x)`,
    hints: ['__iter__ returns self', '__next__ raises StopIteration when done'],
    hintsZh: ['__iter__ 返回 self', '__next__ 在结束时抛出 StopIteration'],
    testCases: [
      { input: '3', expectedOutput: '3\n2\n1' },
      { input: '1', expectedOutput: '1' },
    ],
  },
];
