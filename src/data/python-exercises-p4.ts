import type { PythonExercise } from './python-exercises';

export const PYTHON_EXERCISES_P4: PythonExercise[] = [
  // ============================================================
  // LEVEL 5: Algorithms & Advanced (40 exercises)
  // ============================================================
  {
    id: 'py-ex-5-01',
    title: 'Bubble Sort',
    titleZh: '冒泡排序',
    difficulty: 'hard',
    level: 5,
    category: 'Sorting',
    categoryZh: '排序',
    tags: ['sorting', 'bubble-sort'],
    description: 'Implement bubble sort. Read space-separated integers, sort them, and print space-separated.',
    descriptionZh: '实现冒泡排序。读取空格分隔的整数，排序后输出。',
    examples: [{ input: '5 3 8 1 2', output: '1 2 3 5 8' }],
    starterCode: `# TODO: Implement bubble sort\n`,
    solution: `# Bubble sort: repeatedly swap adjacent elements
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

nums = list(map(int, input().split()))
print(' '.join(map(str, bubble_sort(nums))))`,
    hints: ['Compare adjacent elements and swap if out of order', 'Repeat n-1 passes', 'Each pass bubbles the largest to the end'],
    hintsZh: ['比较相邻元素，乱序则交换', '重复 n-1 轮', '每轮将最大值冒泡到末尾'],
    testCases: [
      { input: '5 3 8 1 2', expectedOutput: '1 2 3 5 8' },
      { input: '1', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-5-02',
    title: 'Selection Sort',
    titleZh: '选择排序',
    difficulty: 'hard',
    level: 5,
    category: 'Sorting',
    categoryZh: '排序',
    tags: ['sorting', 'selection-sort'],
    description: 'Implement selection sort. Read space-separated integers, sort them, and print space-separated.',
    descriptionZh: '实现选择排序。读取空格分隔的整数，排序后输出。',
    examples: [{ input: '64 25 12 22 11', output: '11 12 22 25 64' }],
    starterCode: `# TODO: Implement selection sort\n`,
    solution: `# Selection sort: find minimum and place it
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

nums = list(map(int, input().split()))
print(' '.join(map(str, selection_sort(nums))))`,
    hints: ['Find the minimum in the unsorted portion', 'Swap it with the first unsorted element'],
    hintsZh: ['在未排序部分找最小值', '与未排序部分的第一个元素交换'],
    testCases: [
      { input: '64 25 12 22 11', expectedOutput: '11 12 22 25 64' },
      { input: '3 1 2', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'py-ex-5-03',
    title: 'Insertion Sort',
    titleZh: '插入排序',
    difficulty: 'hard',
    level: 5,
    category: 'Sorting',
    categoryZh: '排序',
    tags: ['sorting', 'insertion-sort'],
    description: 'Implement insertion sort. Read space-separated integers, sort them, and print space-separated.',
    descriptionZh: '实现插入排序。读取空格分隔的整数，排序后输出。',
    examples: [{ input: '12 11 13 5 6', output: '5 6 11 12 13' }],
    starterCode: `# TODO: Implement insertion sort\n`,
    solution: `# Insertion sort: insert each element into sorted portion
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

nums = list(map(int, input().split()))
print(' '.join(map(str, insertion_sort(nums))))`,
    hints: ['Start from index 1', 'Shift larger elements right to make room'],
    hintsZh: ['从索引 1 开始', '将较大元素右移腾出位置'],
    testCases: [
      { input: '12 11 13 5 6', expectedOutput: '5 6 11 12 13' },
      { input: '1 2 3', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'py-ex-5-04',
    title: 'Merge Sort',
    titleZh: '归并排序',
    difficulty: 'hard',
    level: 5,
    category: 'Sorting',
    categoryZh: '排序',
    tags: ['sorting', 'merge-sort', 'recursion'],
    description: 'Implement merge sort. Read space-separated integers, sort them, and print space-separated.',
    descriptionZh: '实现归并排序。读取空格分隔的整数，排序后输出。',
    examples: [{ input: '38 27 43 3 9 82 10', output: '3 9 10 27 38 43 82' }],
    starterCode: `# TODO: Implement merge sort\n`,
    solution: `# Merge sort: divide and conquer
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
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
print(' '.join(map(str, merge_sort(nums))))`,
    hints: ['Split array in half recursively', 'Merge two sorted halves', 'Base case: length <= 1'],
    hintsZh: ['递归将数组分成两半', '合并两个已排序的半部分', '基本情况：长度 <= 1'],
    testCases: [
      { input: '38 27 43 3 9 82 10', expectedOutput: '3 9 10 27 38 43 82' },
      { input: '5 1', expectedOutput: '1 5' },
    ],
  },
  {
    id: 'py-ex-5-05',
    title: 'Quick Sort',
    titleZh: '快速排序',
    difficulty: 'hard',
    level: 5,
    category: 'Sorting',
    categoryZh: '排序',
    tags: ['sorting', 'quick-sort', 'recursion'],
    description: 'Implement quick sort (using last element as pivot). Read space-separated integers, sort and print.',
    descriptionZh: '实现快速排序（使用最后一个元素作为基准）。读取空格分隔的整数，排序并输出。',
    examples: [{ input: '10 7 8 9 1 5', output: '1 5 7 8 9 10' }],
    starterCode: `# TODO: Implement quick sort\n`,
    solution: `# Quick sort: partition around pivot
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[-1]
    left = [x for x in arr[:-1] if x <= pivot]
    right = [x for x in arr[:-1] if x > pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)

nums = list(map(int, input().split()))
print(' '.join(map(str, quick_sort(nums))))`,
    hints: ['Choose a pivot (e.g., last element)', 'Partition into left (<=pivot) and right (>pivot)', 'Recursively sort both partitions'],
    hintsZh: ['选择基准（如最后一个元素）', '分为左（<=基准）和右（>基准）', '递归排序两部分'],
    testCases: [
      { input: '10 7 8 9 1 5', expectedOutput: '1 5 7 8 9 10' },
      { input: '3 2 1', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'py-ex-5-06',
    title: 'Binary Search',
    titleZh: '二分查找',
    difficulty: 'hard',
    level: 5,
    category: 'Searching',
    categoryZh: '搜索',
    tags: ['binary-search'],
    description: 'Implement binary search. Read sorted space-separated integers, then a target. Print its index or -1.',
    descriptionZh: '实现二分查找。读取已排序的空格分隔整数和目标值。输出索引或 -1。',
    examples: [{ input: '1 3 5 7 9\n5', output: '2' }],
    starterCode: `# TODO: Implement binary search\n`,
    solution: `# Binary search on sorted array
def binary_search(arr, target):
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
    hints: ['Maintain lo and hi pointers', 'Check mid, then narrow to left or right half'],
    hintsZh: ['维护 lo 和 hi 指针', '检查中间值，然后缩小到左半或右半'],
    testCases: [
      { input: '1 3 5 7 9\n5', expectedOutput: '2' },
      { input: '1 3 5 7 9\n4', expectedOutput: '-1' },
    ],
  },
  {
    id: 'py-ex-5-07',
    title: 'Binary Search: First Occurrence',
    titleZh: '二分查找：第一次出现',
    difficulty: 'hard',
    level: 5,
    category: 'Searching',
    categoryZh: '搜索',
    tags: ['binary-search'],
    description: 'Find the first occurrence of target in a sorted array (may have duplicates). Print index or -1.',
    descriptionZh: '在可能有重复的已排序数组中找到目标的第一次出现。输出索引或 -1。',
    examples: [{ input: '1 2 2 2 3\n2', output: '1' }],
    starterCode: `# TODO: Binary search for first occurrence\n`,
    solution: `# Modified binary search: continue searching left after finding
def first_occurrence(arr, target):
    lo, hi = 0, len(arr) - 1
    result = -1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            result = mid
            hi = mid - 1  # keep searching left
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return result

nums = list(map(int, input().split()))
target = int(input())
print(first_occurrence(nums, target))`,
    hints: ['When you find target, save it but keep searching left', 'Set hi = mid - 1 after finding'],
    hintsZh: ['找到目标后保存结果但继续向左搜索', '找到后设置 hi = mid - 1'],
    testCases: [
      { input: '1 2 2 2 3\n2', expectedOutput: '1' },
      { input: '1 1 1\n1', expectedOutput: '0' },
      { input: '1 3 5\n2', expectedOutput: '-1' },
    ],
  },
  {
    id: 'py-ex-5-08',
    title: 'Two Sum',
    titleZh: '两数之和',
    difficulty: 'hard',
    level: 5,
    category: 'Hash Map',
    categoryZh: '哈希表',
    tags: ['hash-map', 'two-sum'],
    description: 'Read space-separated integers and a target. Find two indices whose values sum to target. Print "i j" (0-indexed, i < j). Guaranteed one solution.',
    descriptionZh: '读取空格分隔的整数和目标值。找两个索引使其值之和等于目标。输出 "i j"（0索引，i < j）。保证有解。',
    examples: [{ input: '2 7 11 15\n9', output: '0 1' }],
    starterCode: `# TODO: Solve two sum with hash map\n`,
    solution: `# Use a dict to store value -> index for O(n) lookup
def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        complement = target - n
        if complement in seen:
            return f"{seen[complement]} {i}"
        seen[n] = i

nums = list(map(int, input().split()))
target = int(input())
print(two_sum(nums, target))`,
    hints: ['For each number, check if target - number was seen before', 'Use a dict to store number -> index'],
    hintsZh: ['对每个数，检查 target - number 是否已见过', '用字典存储 数字 -> 索引'],
    testCases: [
      { input: '2 7 11 15\n9', expectedOutput: '0 1' },
      { input: '3 2 4\n6', expectedOutput: '1 2' },
    ],
  },
  {
    id: 'py-ex-5-09',
    title: 'Valid Parentheses',
    titleZh: '有效括号',
    difficulty: 'hard',
    level: 5,
    category: 'Stack',
    categoryZh: '栈',
    tags: ['stack', 'parentheses'],
    description: 'Read a string of ()[]{}. Print True if all brackets are correctly matched and nested, else False.',
    descriptionZh: '读取包含 ()[]{}  的字符串。如果所有括号正确匹配且嵌套则输出 True，否则 False。',
    examples: [{ input: '([{}])', output: 'True' }],
    starterCode: `# TODO: Validate parentheses using a stack\n`,
    solution: `# Use a stack to match opening/closing brackets
def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for c in s:
        if c in '([{':
            stack.append(c)
        elif c in pairs:
            if not stack or stack[-1] != pairs[c]:
                return False
            stack.pop()
    return len(stack) == 0

print(is_valid(input()))`,
    hints: ['Push opening brackets onto a stack', 'For closing brackets, check the stack top matches', 'Stack must be empty at the end'],
    hintsZh: ['将左括号压入栈', '遇到右括号时检查栈顶是否匹配', '最后栈必须为空'],
    testCases: [
      { input: '([{}])', expectedOutput: 'True' },
      { input: '([)]', expectedOutput: 'False' },
      { input: '', expectedOutput: 'True' },
    ],
  },
  {
    id: 'py-ex-5-10',
    title: 'Stack Implementation',
    titleZh: '栈实现',
    difficulty: 'hard',
    level: 5,
    category: 'Stack',
    categoryZh: '栈',
    tags: ['stack', 'class'],
    description: 'Implement a Stack class with push, pop, peek, is_empty. Read commands one per line until "END". Commands: "push X", "pop" (print popped), "peek" (print top).',
    descriptionZh: '实现 Stack 类，含 push、pop、peek、is_empty。逐行读取命令直到 "END"。命令："push X"、"pop"（打印弹出值）、"peek"（打印栈顶）。',
    examples: [{ input: 'push 1\npush 2\npeek\npop\npop\nEND', output: '2\n2\n1' }],
    starterCode: `# TODO: Implement a Stack class\n`,
    solution: `# Stack: LIFO data structure
class Stack:
    def __init__(self):
        self.items = []
    def push(self, val):
        self.items.append(val)
    def pop(self):
        return self.items.pop()
    def peek(self):
        return self.items[-1]
    def is_empty(self):
        return len(self.items) == 0

s = Stack()
while True:
    cmd = input()
    if cmd == "END":
        break
    if cmd.startswith("push"):
        s.push(int(cmd.split()[1]))
    elif cmd == "pop":
        print(s.pop())
    elif cmd == "peek":
        print(s.peek())`,
    hints: ['Use a list as the internal storage', 'append for push, pop() for pop, [-1] for peek'],
    hintsZh: ['使用列表作为内部存储', 'append 入栈，pop() 出栈，[-1] 查看栈顶'],
    testCases: [
      { input: 'push 1\npush 2\npeek\npop\npop\nEND', expectedOutput: '2\n2\n1' },
      { input: 'push 5\npeek\nEND', expectedOutput: '5' },
    ],
  },
  {
    id: 'py-ex-5-11',
    title: 'Queue Implementation',
    titleZh: '队列实现',
    difficulty: 'hard',
    level: 5,
    category: 'Queue',
    categoryZh: '队列',
    tags: ['queue', 'deque'],
    description: 'Implement a Queue using collections.deque. Commands: "enq X", "deq" (print dequeued), "front" (print front). Read until "END".',
    descriptionZh: '使用 collections.deque 实现队列。命令："enq X"、"deq"（打印出队值）、"front"（打印队首）。读取直到 "END"。',
    examples: [{ input: 'enq 1\nenq 2\nfront\ndeq\ndeq\nEND', output: '1\n1\n2' }],
    starterCode: `# TODO: Implement a Queue using deque\n`,
    solution: `# Queue: FIFO using deque for O(1) operations
from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    def enqueue(self, val):
        self.items.append(val)
    def dequeue(self):
        return self.items.popleft()
    def front(self):
        return self.items[0]

q = Queue()
while True:
    cmd = input()
    if cmd == "END":
        break
    if cmd.startswith("enq"):
        q.enqueue(int(cmd.split()[1]))
    elif cmd == "deq":
        print(q.dequeue())
    elif cmd == "front":
        print(q.front())`,
    hints: ['Use deque for O(1) popleft', 'append adds to back, popleft removes from front'],
    hintsZh: ['使用 deque 实现 O(1) 的 popleft', 'append 从后端添加，popleft 从前端移除'],
    testCases: [
      { input: 'enq 1\nenq 2\nfront\ndeq\ndeq\nEND', expectedOutput: '1\n1\n2' },
      { input: 'enq 10\ndeq\nEND', expectedOutput: '10' },
    ],
  },
  {
    id: 'py-ex-5-12',
    title: 'Linked List: Basic',
    titleZh: '链表：基础',
    difficulty: 'hard',
    level: 5,
    category: 'Linked List',
    categoryZh: '链表',
    tags: ['linked-list'],
    description: 'Implement a singly linked list. Read space-separated integers to build the list, then print all values space-separated.',
    descriptionZh: '实现单链表。读取空格分隔的整数构建链表，然后空格分隔输出所有值。',
    examples: [{ input: '1 2 3 4', output: '1 2 3 4' }],
    starterCode: `# TODO: Implement a singly linked list\n`,
    solution: `# Singly linked list with Node class
class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
    def append(self, val):
        if not self.head:
            self.head = Node(val)
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = Node(val)
    def to_list(self):
        result = []
        curr = self.head
        while curr:
            result.append(curr.val)
            curr = curr.next
        return result

ll = LinkedList()
for n in map(int, input().split()):
    ll.append(n)
print(' '.join(map(str, ll.to_list())))`,
    hints: ['Each Node has val and next pointer', 'Traverse by following next until None'],
    hintsZh: ['每个 Node 有 val 和 next 指针', '通过 next 遍历直到 None'],
    testCases: [
      { input: '1 2 3 4', expectedOutput: '1 2 3 4' },
      { input: '10', expectedOutput: '10' },
    ],
  },
  {
    id: 'py-ex-5-13',
    title: 'Linked List: Reverse',
    titleZh: '链表：反转',
    difficulty: 'hard',
    level: 5,
    category: 'Linked List',
    categoryZh: '链表',
    tags: ['linked-list', 'reverse'],
    description: 'Read space-separated integers. Build a linked list, reverse it, then print values space-separated.',
    descriptionZh: '读取空格分隔的整数。构建链表，反转后空格分隔输出。',
    examples: [{ input: '1 2 3 4', output: '4 3 2 1' }],
    starterCode: `# TODO: Reverse a linked list\n`,
    solution: `# Reverse linked list by changing pointers
class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

def build(nums):
    head = None
    for n in reversed(nums):
        head = Node(n, head)
    return head

def reverse(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev

def to_str(head):
    parts = []
    while head:
        parts.append(str(head.val))
        head = head.next
    return ' '.join(parts)

nums = list(map(int, input().split()))
print(to_str(reverse(build(nums))))`,
    hints: ['Use three pointers: prev, curr, next', 'At each step: save next, point curr to prev, advance'],
    hintsZh: ['使用三个指针：prev、curr、next', '每步：保存 next，curr 指向 prev，前进'],
    testCases: [
      { input: '1 2 3 4', expectedOutput: '4 3 2 1' },
      { input: '5', expectedOutput: '5' },
    ],
  },
  {
    id: 'py-ex-5-14',
    title: 'BFS: Shortest Path',
    titleZh: 'BFS：最短路径',
    difficulty: 'hard',
    level: 5,
    category: 'Graph',
    categoryZh: '图',
    tags: ['bfs', 'graph'],
    description: 'Read n nodes, m edges, then m lines of "u v" (0-indexed). Read start and end. Print shortest path length or -1.',
    descriptionZh: '读取 n 个节点、m 条边，然后 m 行 "u v"（0索引）。读取起点和终点。输出最短路径长度或 -1。',
    examples: [{ input: '4 4\n0 1\n1 2\n2 3\n0 3\n0 3', output: '1' }],
    starterCode: `# TODO: Implement BFS for shortest path\n`,
    solution: `# BFS finds shortest path in unweighted graph
from collections import deque

def bfs(graph, start, end, n):
    visited = [False] * n
    queue = deque([(start, 0)])
    visited[start] = True
    while queue:
        node, dist = queue.popleft()
        if node == end:
            return dist
        for neighbor in graph[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append((neighbor, dist + 1))
    return -1

n, m = map(int, input().split())
graph = [[] for _ in range(n)]
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)
start, end = map(int, input().split())
print(bfs(graph, start, end, n))`,
    hints: ['Use a queue with (node, distance) pairs', 'Mark nodes as visited to avoid cycles'],
    hintsZh: ['使用队列存储 (节点, 距离) 对', '标记已访问节点避免循环'],
    testCases: [
      { input: '4 4\n0 1\n1 2\n2 3\n0 3\n0 3', expectedOutput: '1' },
      { input: '3 1\n0 1\n0 2', expectedOutput: '-1' },
    ],
  },
  {
    id: 'py-ex-5-15',
    title: 'DFS: Connected Components',
    titleZh: 'DFS：连通分量',
    difficulty: 'hard',
    level: 5,
    category: 'Graph',
    categoryZh: '图',
    tags: ['dfs', 'graph'],
    description: 'Read n nodes, m edges, then m lines of "u v" (0-indexed). Print the number of connected components.',
    descriptionZh: '读取 n 个节点、m 条边，然后 m 行 "u v"（0索引）。输出连通分量的数量。',
    examples: [{ input: '5 3\n0 1\n1 2\n3 4', output: '2' }],
    starterCode: `# TODO: Count connected components using DFS\n`,
    solution: `# DFS to explore each connected component
def dfs(node, graph, visited):
    visited[node] = True
    for neighbor in graph[node]:
        if not visited[neighbor]:
            dfs(neighbor, graph, visited)

n, m = map(int, input().split())
graph = [[] for _ in range(n)]
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u)

visited = [False] * n
components = 0
for i in range(n):
    if not visited[i]:
        dfs(i, graph, visited)
        components += 1
print(components)`,
    hints: ['Run DFS from each unvisited node', 'Each DFS call explores one component'],
    hintsZh: ['从每个未访问节点运行 DFS', '每次 DFS 调用探索一个连通分量'],
    testCases: [
      { input: '5 3\n0 1\n1 2\n3 4', expectedOutput: '2' },
      { input: '3 0', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-5-16',
    title: 'Regex: Email Validation',
    titleZh: '正则：邮箱验证',
    difficulty: 'hard',
    level: 5,
    category: 'Regex',
    categoryZh: '正则表达式',
    tags: ['regex'],
    description: 'Read a string. Print "Valid" if it matches a simple email pattern (word@word.word), else "Invalid".',
    descriptionZh: '读取字符串。如果匹配简单邮箱模式（word@word.word）则输出 "Valid"，否则 "Invalid"。',
    examples: [{ input: 'user@example.com', output: 'Valid' }],
    starterCode: `# TODO: Validate email using regex\n`,
    solution: `# Use re module for pattern matching
import re
email = input()
pattern = r'^[\\w.+-]+@[\\w-]+\\.[\\w.-]+$'
print("Valid" if re.match(pattern, email) else "Invalid")`,
    hints: ['Use re.match() with a pattern', 'Pattern: \\w+@\\w+\\.\\w+'],
    hintsZh: ['使用 re.match() 和模式', '模式：\\w+@\\w+\\.\\w+'],
    testCases: [
      { input: 'user@example.com', expectedOutput: 'Valid' },
      { input: 'not-email', expectedOutput: 'Invalid' },
    ],
  },
  {
    id: 'py-ex-5-17',
    title: 'Regex: Extract Numbers',
    titleZh: '正则：提取数字',
    difficulty: 'hard',
    level: 5,
    category: 'Regex',
    categoryZh: '正则表达式',
    tags: ['regex', 'findall'],
    description: 'Read a string. Extract all integers and print them space-separated.',
    descriptionZh: '读取字符串。提取所有整数并空格分隔输出。',
    examples: [{ input: 'abc 123 def 456', output: '123 456' }],
    starterCode: `# TODO: Extract numbers using regex\n`,
    solution: `# Use re.findall to extract all matches
import re
s = input()
nums = re.findall(r'\\d+', s)
print(' '.join(nums))`,
    hints: ['Use re.findall(r"\\d+", s)', '\\d+ matches one or more digits'],
    hintsZh: ['使用 re.findall(r"\\d+", s)', '\\d+ 匹配一个或多个数字'],
    testCases: [
      { input: 'abc 123 def 456', expectedOutput: '123 456' },
      { input: 'no numbers here', expectedOutput: '' },
    ],
  },
  {
    id: 'py-ex-5-18',
    title: 'itertools: Combinations',
    titleZh: 'itertools：组合',
    difficulty: 'hard',
    level: 5,
    category: 'itertools',
    categoryZh: 'itertools',
    tags: ['itertools', 'combinations'],
    description: 'Read space-separated integers and k. Print all combinations of size k, one per line, space-separated.',
    descriptionZh: '读取空格分隔的整数和 k。逐行输出所有大小为 k 的组合，空格分隔。',
    examples: [{ input: '1 2 3\n2', output: '1 2\n1 3\n2 3' }],
    starterCode: `# TODO: Use itertools.combinations\n`,
    solution: `# itertools.combinations generates all k-size subsets
from itertools import combinations
nums = list(map(int, input().split()))
k = int(input())
for combo in combinations(nums, k):
    print(' '.join(map(str, combo)))`,
    hints: ['Import combinations from itertools', 'combinations(iterable, k) gives k-size tuples'],
    hintsZh: ['从 itertools 导入 combinations', 'combinations(iterable, k) 生成 k 大小的元组'],
    testCases: [
      { input: '1 2 3\n2', expectedOutput: '1 2\n1 3\n2 3' },
      { input: '1 2 3 4\n1', expectedOutput: '1\n2\n3\n4' },
    ],
  },
  {
    id: 'py-ex-5-19',
    title: 'itertools: Permutations',
    titleZh: 'itertools：排列',
    difficulty: 'hard',
    level: 5,
    category: 'itertools',
    categoryZh: 'itertools',
    tags: ['itertools', 'permutations'],
    description: 'Read space-separated integers. Print all permutations, one per line, space-separated.',
    descriptionZh: '读取空格分隔的整数。逐行输出所有排列，空格分隔。',
    examples: [{ input: '1 2 3', output: '1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1' }],
    starterCode: `# TODO: Use itertools.permutations\n`,
    solution: `# itertools.permutations generates all orderings
from itertools import permutations
nums = list(map(int, input().split()))
for perm in permutations(nums):
    print(' '.join(map(str, perm)))`,
    hints: ['Import permutations from itertools', 'It generates all possible orderings'],
    hintsZh: ['从 itertools 导入 permutations', '它生成所有可能的排列'],
    testCases: [
      { input: '1 2 3', expectedOutput: '1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1' },
      { input: '1 2', expectedOutput: '1 2\n2 1' },
    ],
  },
  {
    id: 'py-ex-5-20',
    title: 'itertools: Product',
    titleZh: 'itertools：笛卡尔积',
    difficulty: 'hard',
    level: 5,
    category: 'itertools',
    categoryZh: 'itertools',
    tags: ['itertools', 'product'],
    description: 'Read two lines of space-separated integers. Print the Cartesian product, one pair per line as "a b".',
    descriptionZh: '读取两行空格分隔的整数。逐行输出笛卡尔积，每行 "a b"。',
    examples: [{ input: '1 2\n3 4', output: '1 3\n1 4\n2 3\n2 4' }],
    starterCode: `# TODO: Use itertools.product\n`,
    solution: `# itertools.product gives Cartesian product
from itertools import product
a = list(map(int, input().split()))
b = list(map(int, input().split()))
for x, y in product(a, b):
    print(f"{x} {y}")`,
    hints: ['Import product from itertools', 'product(a, b) gives all (x, y) pairs'],
    hintsZh: ['从 itertools 导入 product', 'product(a, b) 给出所有 (x, y) 对'],
    testCases: [
      { input: '1 2\n3 4', expectedOutput: '1 3\n1 4\n2 3\n2 4' },
      { input: '1\n2 3', expectedOutput: '1 2\n1 3' },
    ],
  },
  {
    id: 'py-ex-5-21',
    title: 'itertools: Chain',
    titleZh: 'itertools：链接',
    difficulty: 'hard',
    level: 5,
    category: 'itertools',
    categoryZh: 'itertools',
    tags: ['itertools', 'chain'],
    description: 'Read two lines of space-separated integers. Chain them together and print as one line.',
    descriptionZh: '读取两行空格分隔的整数。链接在一起后作为一行输出。',
    examples: [{ input: '1 2 3\n4 5 6', output: '1 2 3 4 5 6' }],
    starterCode: `# TODO: Use itertools.chain\n`,
    solution: `# itertools.chain concatenates iterables
from itertools import chain
a = list(map(int, input().split()))
b = list(map(int, input().split()))
print(' '.join(map(str, chain(a, b))))`,
    hints: ['Import chain from itertools', 'chain(a, b) iterates over a then b'],
    hintsZh: ['从 itertools 导入 chain', 'chain(a, b) 先遍历 a 再遍历 b'],
    testCases: [
      { input: '1 2 3\n4 5 6', expectedOutput: '1 2 3 4 5 6' },
      { input: '1\n2', expectedOutput: '1 2' },
    ],
  },
  {
    id: 'py-ex-5-22',
    title: 'functools: reduce',
    titleZh: 'functools：reduce',
    difficulty: 'hard',
    level: 5,
    category: 'functools',
    categoryZh: 'functools',
    tags: ['functools', 'reduce'],
    description: 'Read space-separated integers. Use functools.reduce to compute the product of all numbers. Print the result.',
    descriptionZh: '读取空格分隔的整数。使用 functools.reduce 计算所有数的乘积。输出结果。',
    examples: [{ input: '1 2 3 4', output: '24' }],
    starterCode: `# TODO: Use functools.reduce\n`,
    solution: `# reduce applies a function cumulatively
from functools import reduce
nums = list(map(int, input().split()))
print(reduce(lambda a, b: a * b, nums))`,
    hints: ['Import reduce from functools', 'reduce(func, iterable) applies func cumulatively'],
    hintsZh: ['从 functools 导入 reduce', 'reduce(func, iterable) 累积应用函数'],
    testCases: [
      { input: '1 2 3 4', expectedOutput: '24' },
      { input: '5 5', expectedOutput: '25' },
    ],
  },
  {
    id: 'py-ex-5-23',
    title: 'functools: partial',
    titleZh: 'functools：partial',
    difficulty: 'hard',
    level: 5,
    category: 'functools',
    categoryZh: 'functools',
    tags: ['functools', 'partial'],
    description: 'Use functools.partial to create a power2 function (base=2). Read an exponent and print 2^exp.',
    descriptionZh: '使用 functools.partial 创建 power2 函数（底数为2）。读取指数并输出 2^exp。',
    examples: [{ input: '10', output: '1024' }],
    starterCode: `# TODO: Use functools.partial\n`,
    solution: `# partial freezes some arguments of a function
from functools import partial

def power(base, exp):
    return base ** exp

power2 = partial(power, 2)
print(power2(int(input())))`,
    hints: ['Import partial from functools', 'partial(func, arg) fixes the first argument'],
    hintsZh: ['从 functools 导入 partial', 'partial(func, arg) 固定第一个参数'],
    testCases: [
      { input: '10', expectedOutput: '1024' },
      { input: '0', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-5-24',
    title: 'functools: lru_cache',
    titleZh: 'functools：lru_cache',
    difficulty: 'hard',
    level: 5,
    category: 'functools',
    categoryZh: 'functools',
    tags: ['functools', 'memoization'],
    description: 'Use @lru_cache to memoize a recursive Fibonacci function. Read n, print fib(n). fib(0)=0, fib(1)=1.',
    descriptionZh: '使用 @lru_cache 记忆化递归斐波那契函数。读取 n，输出 fib(n)。fib(0)=0, fib(1)=1。',
    examples: [{ input: '10', output: '55' }],
    starterCode: `# TODO: Use @lru_cache for memoization\n`,
    solution: `# @lru_cache caches function results
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(int(input())))`,
    hints: ['Add @lru_cache above the function', 'It caches results to avoid recomputation'],
    hintsZh: ['在函数上方添加 @lru_cache', '它缓存结果避免重复计算'],
    testCases: [
      { input: '10', expectedOutput: '55' },
      { input: '0', expectedOutput: '0' },
    ],
  },
  {
    id: 'py-ex-5-25',
    title: 'collections: Counter',
    titleZh: 'collections：Counter',
    difficulty: 'hard',
    level: 5,
    category: 'collections',
    categoryZh: 'collections',
    tags: ['collections', 'counter'],
    description: 'Read a line of words. Use Counter to find the most common word. Print "word count".',
    descriptionZh: '读取一行单词。使用 Counter 找到最常见的单词。输出 "单词 次数"。',
    examples: [{ input: 'a b a c a b', output: 'a 3' }],
    starterCode: `# TODO: Use collections.Counter\n`,
    solution: `# Counter counts hashable objects
from collections import Counter
words = input().split()
word, count = Counter(words).most_common(1)[0]
print(f"{word} {count}")`,
    hints: ['Import Counter from collections', 'Use .most_common(1) to get the top element'],
    hintsZh: ['从 collections 导入 Counter', '使用 .most_common(1) 获取最常见的元素'],
    testCases: [
      { input: 'a b a c a b', expectedOutput: 'a 3' },
      { input: 'x x y y y', expectedOutput: 'y 3' },
    ],
  },
  {
    id: 'py-ex-5-26',
    title: 'collections: defaultdict',
    titleZh: 'collections：defaultdict',
    difficulty: 'hard',
    level: 5,
    category: 'collections',
    categoryZh: 'collections',
    tags: ['collections', 'defaultdict'],
    description: 'Read n lines of "group value". Use defaultdict to group values by group. Print each group and its sorted values.',
    descriptionZh: '读取 n 行 "组 值"。使用 defaultdict 按组分类。输出每组及其排序后的值。',
    examples: [{ input: '4\na 1\nb 2\na 3\nb 4', output: 'a: 1 3\nb: 2 4' }],
    starterCode: `# TODO: Use collections.defaultdict\n`,
    solution: `# defaultdict provides a default value for missing keys
from collections import defaultdict
n = int(input())
groups = defaultdict(list)
for _ in range(n):
    parts = input().split()
    groups[parts[0]].append(parts[1])
for key in sorted(groups):
    print(f"{key}: {' '.join(groups[key])}")`,
    hints: ['Use defaultdict(list) for auto-creating lists', 'Append values to the appropriate key'],
    hintsZh: ['使用 defaultdict(list) 自动创建列表', '将值追加到对应的键'],
    testCases: [
      { input: '4\na 1\nb 2\na 3\nb 4', expectedOutput: 'a: 1 3\nb: 2 4' },
      { input: '2\nx 5\nx 6', expectedOutput: 'x: 5 6' },
    ],
  },
  {
    id: 'py-ex-5-27',
    title: 'collections: deque Operations',
    titleZh: 'collections：deque 操作',
    difficulty: 'hard',
    level: 5,
    category: 'collections',
    categoryZh: 'collections',
    tags: ['collections', 'deque'],
    description: 'Read space-separated integers, then k. Rotate the deque right by k positions. Print result.',
    descriptionZh: '读取空格分隔的整数和 k。将 deque 右旋 k 位。输出结果。',
    examples: [{ input: '1 2 3 4 5\n2', output: '4 5 1 2 3' }],
    starterCode: `# TODO: Use deque.rotate\n`,
    solution: `# deque.rotate(k) rotates right by k
from collections import deque
nums = deque(map(int, input().split()))
k = int(input())
nums.rotate(k)
print(' '.join(map(str, nums)))`,
    hints: ['Import deque from collections', 'deque.rotate(k) rotates right, negative rotates left'],
    hintsZh: ['从 collections 导入 deque', 'deque.rotate(k) 右旋，负数左旋'],
    testCases: [
      { input: '1 2 3 4 5\n2', expectedOutput: '4 5 1 2 3' },
      { input: '1 2 3\n1', expectedOutput: '3 1 2' },
    ],
  },
  {
    id: 'py-ex-5-28',
    title: 'collections: namedtuple',
    titleZh: 'collections：namedtuple',
    difficulty: 'hard',
    level: 5,
    category: 'collections',
    categoryZh: 'collections',
    tags: ['collections', 'namedtuple'],
    description: 'Create a Point namedtuple with x, y. Read two points, compute Euclidean distance rounded to 2 decimals.',
    descriptionZh: '创建 Point namedtuple（x, y）。读取两个点，计算欧几里得距离保留 2 位小数。',
    examples: [{ input: '0 0\n3 4', output: '5.00' }],
    starterCode: `# TODO: Use namedtuple\n`,
    solution: `# namedtuple creates lightweight classes
from collections import namedtuple
import math

Point = namedtuple('Point', ['x', 'y'])
x1, y1 = map(int, input().split())
x2, y2 = map(int, input().split())
p1, p2 = Point(x1, y1), Point(x2, y2)
dist = math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2)
print(f"{dist:.2f}")`,
    hints: ['Import namedtuple from collections', 'Access fields by name: p.x, p.y'],
    hintsZh: ['从 collections 导入 namedtuple', '按名称访问字段：p.x, p.y'],
    testCases: [
      { input: '0 0\n3 4', expectedOutput: '5.00' },
      { input: '1 1\n4 5', expectedOutput: '5.00' },
    ],
  },
  {
    id: 'py-ex-5-29',
    title: 'DP: Climbing Stairs',
    titleZh: 'DP：爬楼梯',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'climbing-stairs'],
    description: 'Read n (number of stairs). You can climb 1 or 2 steps at a time. Print the number of distinct ways to reach the top.',
    descriptionZh: '读取 n（台阶数）。每次可以爬 1 或 2 步。输出到达顶部的不同方式数。',
    examples: [{ input: '5', output: '8' }],
    starterCode: `# TODO: Solve climbing stairs with DP\n`,
    solution: `# dp[i] = dp[i-1] + dp[i-2] (similar to Fibonacci)
n = int(input())
if n <= 2:
    print(n)
else:
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    print(dp[n])`,
    hints: ['Ways to reach step i = ways to reach step i-1 + ways to reach step i-2', 'Base cases: dp[1]=1, dp[2]=2'],
    hintsZh: ['到达第 i 步的方式 = 到达 i-1 步 + 到达 i-2 步', '基本情况：dp[1]=1, dp[2]=2'],
    testCases: [
      { input: '5', expectedOutput: '8' },
      { input: '3', expectedOutput: '3' },
    ],
  },
  {
    id: 'py-ex-5-30',
    title: 'DP: Coin Change',
    titleZh: 'DP：零钱兑换',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'coin-change'],
    description: 'Read space-separated coin denominations and a target amount. Print the minimum number of coins needed, or -1 if impossible.',
    descriptionZh: '读取空格分隔的硬币面额和目标金额。输出所需的最少硬币数，不可能则输出 -1。',
    examples: [{ input: '1 5 10\n11', output: '2' }],
    starterCode: `# TODO: Solve coin change with DP\n`,
    solution: `# dp[i] = min coins to make amount i
coins = list(map(int, input().split()))
amount = int(input())
dp = [float('inf')] * (amount + 1)
dp[0] = 0
for i in range(1, amount + 1):
    for c in coins:
        if c <= i and dp[i - c] + 1 < dp[i]:
            dp[i] = dp[i - c] + 1
print(dp[amount] if dp[amount] != float('inf') else -1)`,
    hints: ['dp[i] = min(dp[i-c] + 1) for each coin c <= i', 'Initialize dp[0] = 0, rest = infinity'],
    hintsZh: ['dp[i] = min(dp[i-c] + 1) 对每个 c <= i 的硬币', '初始化 dp[0] = 0，其余为无穷大'],
    testCases: [
      { input: '1 5 10\n11', expectedOutput: '2' },
      { input: '2\n3', expectedOutput: '-1' },
    ],
  },
  {
    id: 'py-ex-5-31',
    title: 'DP: Longest Common Subsequence',
    titleZh: 'DP：最长公共子序列',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'lcs'],
    description: 'Read two strings. Print the length of their longest common subsequence.',
    descriptionZh: '读取两个字符串。输出它们的最长公共子序列长度。',
    examples: [{ input: 'ABCBDAB\nBDCABA', output: '4' }],
    starterCode: `# TODO: Compute LCS length with DP\n`,
    solution: `# 2D DP table for LCS
s1 = input()
s2 = input()
m, n = len(s1), len(s2)
dp = [[0] * (n + 1) for _ in range(m + 1)]
for i in range(1, m + 1):
    for j in range(1, n + 1):
        if s1[i-1] == s2[j-1]:
            dp[i][j] = dp[i-1][j-1] + 1
        else:
            dp[i][j] = max(dp[i-1][j], dp[i][j-1])
print(dp[m][n])`,
    hints: ['Use a 2D table dp[i][j]', 'If chars match: dp[i-1][j-1]+1, else max of top/left'],
    hintsZh: ['使用二维表 dp[i][j]', '字符匹配：dp[i-1][j-1]+1，否则取上方/左方的最大值'],
    testCases: [
      { input: 'ABCBDAB\nBDCABA', expectedOutput: '4' },
      { input: 'ABC\nDEF', expectedOutput: '0' },
    ],
  },
  {
    id: 'py-ex-5-32',
    title: 'Tree: Build and Inorder',
    titleZh: '树：构建与中序遍历',
    difficulty: 'hard',
    level: 5,
    category: 'Tree',
    categoryZh: '树',
    tags: ['tree', 'binary-tree', 'traversal'],
    description: 'Read space-separated integers. Insert them into a BST in order. Print the inorder traversal space-separated.',
    descriptionZh: '读取空格分隔的整数。按顺序插入 BST。输出中序遍历，空格分隔。',
    examples: [{ input: '5 3 7 1 4', output: '1 3 4 5 7' }],
    starterCode: `# TODO: Build a BST and do inorder traversal\n`,
    solution: `# BST: left < root <= right
class Node:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None

def insert(root, val):
    if not root:
        return Node(val)
    if val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    return root

def inorder(root, result):
    if root:
        inorder(root.left, result)
        result.append(root.val)
        inorder(root.right, result)

nums = list(map(int, input().split()))
root = None
for n in nums:
    root = insert(root, n)
result = []
inorder(root, result)
print(' '.join(map(str, result)))`,
    hints: ['Insert: go left if smaller, right if larger', 'Inorder: left, root, right'],
    hintsZh: ['插入：较小去左，较大去右', '中序：左、根、右'],
    testCases: [
      { input: '5 3 7 1 4', expectedOutput: '1 3 4 5 7' },
      { input: '3 1 2', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'py-ex-5-33',
    title: 'Tree: Preorder and Postorder',
    titleZh: '树：前序和后序遍历',
    difficulty: 'hard',
    level: 5,
    category: 'Tree',
    categoryZh: '树',
    tags: ['tree', 'traversal'],
    description: 'Build a BST from space-separated integers. Print preorder on line 1, postorder on line 2, space-separated.',
    descriptionZh: '从空格分隔的整数构建 BST。第 1 行输出前序，第 2 行输出后序，空格分隔。',
    examples: [{ input: '5 3 7', output: '5 3 7\n3 7 5' }],
    starterCode: `# TODO: Preorder and postorder traversal\n`,
    solution: `# Preorder: root, left, right; Postorder: left, right, root
class Node:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None

def insert(root, val):
    if not root:
        return Node(val)
    if val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    return root

def preorder(root, res):
    if root:
        res.append(root.val)
        preorder(root.left, res)
        preorder(root.right, res)

def postorder(root, res):
    if root:
        postorder(root.left, res)
        postorder(root.right, res)
        res.append(root.val)

nums = list(map(int, input().split()))
root = None
for n in nums:
    root = insert(root, n)
pre, post = [], []
preorder(root, pre)
postorder(root, post)
print(' '.join(map(str, pre)))
print(' '.join(map(str, post)))`,
    hints: ['Preorder: visit root first', 'Postorder: visit root last'],
    hintsZh: ['前序：先访问根', '后序：最后访问根'],
    testCases: [
      { input: '5 3 7', expectedOutput: '5 3 7\n3 7 5' },
      { input: '1 2 3', expectedOutput: '1 2 3\n3 2 1' },
    ],
  },
  {
    id: 'py-ex-5-34',
    title: 'Graph: Topological Sort',
    titleZh: '图：拓扑排序',
    difficulty: 'hard',
    level: 5,
    category: 'Graph',
    categoryZh: '图',
    tags: ['graph', 'topological-sort'],
    description: 'Read n nodes, m directed edges ("u v" meaning u -> v). Print a topological order, space-separated. Guaranteed DAG.',
    descriptionZh: '读取 n 个节点、m 条有向边（"u v" 表示 u -> v）。输出拓扑序，空格分隔。保证是 DAG。',
    examples: [{ input: '4 3\n0 1\n0 2\n1 3', output: '0 1 2 3' }],
    starterCode: `# TODO: Implement topological sort\n`,
    solution: `# Kahn's algorithm: BFS-based topological sort
from collections import deque
n, m = map(int, input().split())
graph = [[] for _ in range(n)]
in_degree = [0] * n
for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)
    in_degree[v] += 1

queue = deque(i for i in range(n) if in_degree[i] == 0)
result = []
while queue:
    node = queue.popleft()
    result.append(node)
    for neighbor in graph[node]:
        in_degree[neighbor] -= 1
        if in_degree[neighbor] == 0:
            queue.append(neighbor)
print(' '.join(map(str, result)))`,
    hints: ['Start with nodes that have in-degree 0', 'Remove them and update in-degrees', 'Repeat until all processed'],
    hintsZh: ['从入度为 0 的节点开始', '移除它们并更新入度', '重复直到全部处理完'],
    testCases: [
      { input: '4 3\n0 1\n0 2\n1 3', expectedOutput: '0 1 2 3' },
      { input: '3 2\n0 1\n0 2', expectedOutput: '0 1 2' },
    ],
  },
  {
    id: 'py-ex-5-35',
    title: 'Regex: Word Boundary',
    titleZh: '正则：单词边界',
    difficulty: 'hard',
    level: 5,
    category: 'Regex',
    categoryZh: '正则表达式',
    tags: ['regex', 'boundary'],
    description: 'Read a sentence and a word. Count how many times the word appears as a whole word (not part of another). Print the count.',
    descriptionZh: '读取句子和单词。计算该单词作为完整单词出现的次数（不是其他词的一部分）。输出次数。',
    examples: [{ input: 'the cat scattered the hay\nthe', output: '2' }],
    starterCode: `# TODO: Count whole word matches using regex\n`,
    solution: `# Use \\b for word boundaries
import re
sentence = input()
word = input()
pattern = r'\\b' + re.escape(word) + r'\\b'
print(len(re.findall(pattern, sentence)))`,
    hints: ['Use \\b for word boundaries', 'Use re.escape() for the search word'],
    hintsZh: ['使用 \\b 表示单词边界', '使用 re.escape() 转义搜索词'],
    testCases: [
      { input: 'the cat scattered the hay\nthe', expectedOutput: '2' },
      { input: 'hello world\nhello', expectedOutput: '1' },
    ],
  },
  {
    id: 'py-ex-5-36',
    title: 'Binary Search: Insert Position',
    titleZh: '二分查找：插入位置',
    difficulty: 'hard',
    level: 5,
    category: 'Searching',
    categoryZh: '搜索',
    tags: ['binary-search'],
    description: 'Read sorted space-separated integers and a target. Print the index where target should be inserted to keep order.',
    descriptionZh: '读取已排序的空格分隔整数和目标值。输出目标应插入的索引以保持有序。',
    examples: [{ input: '1 3 5 6\n5', output: '2' }],
    starterCode: `# TODO: Find insert position using binary search\n`,
    solution: `# Binary search for insertion point
def search_insert(nums, target):
    lo, hi = 0, len(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo

nums = list(map(int, input().split()))
target = int(input())
print(search_insert(nums, target))`,
    hints: ['Find the leftmost position where target could go', 'Use lo < hi (not lo <= hi)'],
    hintsZh: ['找到 target 可以插入的最左位置', '使用 lo < hi（而非 lo <= hi）'],
    testCases: [
      { input: '1 3 5 6\n5', expectedOutput: '2' },
      { input: '1 3 5 6\n2', expectedOutput: '1' },
      { input: '1 3 5 6\n7', expectedOutput: '4' },
    ],
  },
  {
    id: 'py-ex-5-37',
    title: 'Linked List: Detect Cycle',
    titleZh: '链表：检测环',
    difficulty: 'hard',
    level: 5,
    category: 'Linked List',
    categoryZh: '链表',
    tags: ['linked-list', 'cycle'],
    description: 'Read space-separated integers for list nodes, then an index (0-based) where the last node points back (-1 for no cycle). Print True/False.',
    descriptionZh: '读取空格分隔的整数作为节点，然后读取最后一个节点指回的索引（-1 无环）。输出 True/False。',
    examples: [{ input: '1 2 3 4\n1', output: 'True' }],
    starterCode: `# TODO: Detect cycle using Floyd's algorithm\n`,
    solution: `# Floyd's cycle detection: slow and fast pointers
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

def build(vals, cycle_idx):
    if not vals:
        return None
    nodes = [Node(v) for v in vals]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if cycle_idx >= 0:
        nodes[-1].next = nodes[cycle_idx]
    return nodes[0]

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False

vals = list(map(int, input().split()))
cycle_idx = int(input())
print(has_cycle(build(vals, cycle_idx)))`,
    hints: ['Use slow (1 step) and fast (2 steps) pointers', 'If they meet, there is a cycle'],
    hintsZh: ['使用慢指针（1步）和快指针（2步）', '如果相遇则存在环'],
    testCases: [
      { input: '1 2 3 4\n1', expectedOutput: 'True' },
      { input: '1 2 3\n-1', expectedOutput: 'False' },
    ],
  },
  {
    id: 'py-ex-5-38',
    title: 'Min Heap Operations',
    titleZh: '最小堆操作',
    difficulty: 'hard',
    level: 5,
    category: 'Heap',
    categoryZh: '堆',
    tags: ['heap', 'heapq'],
    description: 'Read commands until "END": "push X" adds to heap, "pop" prints and removes minimum. Use heapq.',
    descriptionZh: '读取命令直到 "END"："push X" 入堆，"pop" 打印并移除最小值。使用 heapq。',
    examples: [{ input: 'push 3\npush 1\npush 2\npop\npop\nEND', output: '1\n2' }],
    starterCode: `# TODO: Use heapq for min heap\n`,
    solution: `# heapq provides min heap operations
import heapq
heap = []
while True:
    cmd = input()
    if cmd == "END":
        break
    if cmd.startswith("push"):
        heapq.heappush(heap, int(cmd.split()[1]))
    elif cmd == "pop":
        print(heapq.heappop(heap))`,
    hints: ['Use heapq.heappush and heapq.heappop', 'heapq maintains a min heap'],
    hintsZh: ['使用 heapq.heappush 和 heapq.heappop', 'heapq 维护最小堆'],
    testCases: [
      { input: 'push 3\npush 1\npush 2\npop\npop\nEND', expectedOutput: '1\n2' },
      { input: 'push 5\npop\nEND', expectedOutput: '5' },
    ],
  },
  {
    id: 'py-ex-5-39',
    title: 'DP: 0/1 Knapsack',
    titleZh: 'DP：0/1 背包',
    difficulty: 'hard',
    level: 5,
    category: 'Dynamic Programming',
    categoryZh: '动态规划',
    tags: ['dp', 'knapsack'],
    description: 'Read n items (weight value per line), then capacity W. Print the maximum value achievable.',
    descriptionZh: '读取 n 个物品（每行 重量 价值），然后读取容量 W。输出可达到的最大价值。',
    examples: [{ input: '3\n1 6\n2 10\n3 12\n5', output: '22' }],
    starterCode: `# TODO: Solve 0/1 knapsack with DP\n`,
    solution: `# Classic 0/1 knapsack DP
n = int(input())
items = []
for _ in range(n):
    w, v = map(int, input().split())
    items.append((w, v))
W = int(input())

dp = [0] * (W + 1)
for w, v in items:
    for j in range(W, w - 1, -1):
        dp[j] = max(dp[j], dp[j - w] + v)
print(dp[W])`,
    hints: ['Use 1D DP array, iterate capacity backwards', 'dp[j] = max(dp[j], dp[j-w] + v)'],
    hintsZh: ['使用一维 DP 数组，容量倒序遍历', 'dp[j] = max(dp[j], dp[j-w] + v)'],
    testCases: [
      { input: '3\n1 6\n2 10\n3 12\n5', expectedOutput: '22' },
      { input: '2\n3 4\n4 5\n3', expectedOutput: '4' },
    ],
  },
  {
    id: 'py-ex-5-40',
    title: 'Graph: Dijkstra',
    titleZh: '图：Dijkstra 最短路',
    difficulty: 'hard',
    level: 5,
    category: 'Graph',
    categoryZh: '图',
    tags: ['graph', 'dijkstra', 'shortest-path'],
    description: 'Read n nodes, m weighted edges ("u v w"), start and end. Print shortest distance or -1.',
    descriptionZh: '读取 n 个节点、m 条带权边（"u v w"），起点和终点。输出最短距离或 -1。',
    examples: [{ input: '4 4\n0 1 1\n1 2 2\n0 2 4\n2 3 1\n0 3', output: '4' }],
    starterCode: `# TODO: Implement Dijkstra's algorithm\n`,
    solution: `# Dijkstra's: greedy shortest path with priority queue
import heapq

def dijkstra(graph, start, end, n):
    dist = [float('inf')] * n
    dist[start] = 0
    pq = [(0, start)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        if u == end:
            return d
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return -1

n, m = map(int, input().split())
graph = [[] for _ in range(n)]
for _ in range(m):
    u, v, w = map(int, input().split())
    graph[u].append((v, w))
    graph[v].append((u, w))
start, end = map(int, input().split())
result = dijkstra(graph, start, end, n)
print(result if result != float('inf') else -1)`,
    hints: ['Use a priority queue (heapq)', 'Always process the node with smallest distance first', 'Skip if already found a shorter path'],
    hintsZh: ['使用优先队列（heapq）', '始终先处理距离最小的节点', '如果已有更短路径则跳过'],
    testCases: [
      { input: '4 4\n0 1 1\n1 2 2\n0 2 4\n2 3 1\n0 3', expectedOutput: '4' },
      { input: '2 0\n0 1', expectedOutput: '-1' },
    ],
  },
];
