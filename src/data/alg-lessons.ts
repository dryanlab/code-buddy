// Code Buddy - Algorithms Track
// 5 Modules, 20 Lessons
// Target: Students WITH Python basics + Data Structures knowledge
// Characters: 🔍Detective (search expert), ⚡Flash (sorting speedster), 🌀Spiral (recursion guide), 🧩Puzzle (DP strategist), 🕸️Web (graph navigator)

import type { Lesson, Module } from "./lessons";

// ═══════════════════════════════════════════════════════════════
// ALG MODULES
// ═══════════════════════════════════════════════════════════════

export const ALG_MODULES: Module[] = [
  {
    id: "alg-1",
    title: "🔍 Searching",
    subtitle: "Find anything, fast · 搜索算法",
    icon: "🔍",
    color: "from-yellow-500 to-orange-500",
    lessons: ["alg-1-1", "alg-1-2", "alg-1-3", "alg-1-4"],
  },
  {
    id: "alg-2",
    title: "⚡ Sorting",
    subtitle: "Put things in order · 排序算法",
    icon: "⚡",
    color: "from-orange-500 to-red-500",
    lessons: ["alg-2-1", "alg-2-2", "alg-2-3", "alg-2-4"],
  },
  {
    id: "alg-3",
    title: "🌀 Recursion",
    subtitle: "Functions that call themselves · 递归",
    icon: "🌀",
    color: "from-purple-500 to-indigo-500",
    lessons: ["alg-3-1", "alg-3-2", "alg-3-3", "alg-3-4"],
  },
  {
    id: "alg-4",
    title: "🧩 Dynamic Programming",
    subtitle: "Remember & reuse · 动态规划",
    icon: "🧩",
    color: "from-teal-500 to-cyan-500",
    lessons: ["alg-4-1", "alg-4-2", "alg-4-3", "alg-4-4"],
  },
  {
    id: "alg-5",
    title: "🕸️ Graph Algorithms",
    subtitle: "Navigate networks · 图算法",
    icon: "🕸️",
    color: "from-rose-500 to-pink-500",
    lessons: ["alg-5-1", "alg-5-2", "alg-5-3", "alg-5-4"],
  },
];

// ═══════════════════════════════════════════════════════════════
// MODULE ALG-1: SEARCHING
// ═══════════════════════════════════════════════════════════════

const alg_1_1: Lesson = {
  id: "alg-1-1",
  moduleId: "alg-1",
  title: "Linear Search",
  subtitle: "Check one by one · 线性搜索",
  icon: "👀",
  xp: 15,
  duration: "18 min",
  order: 1,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔍",
      content: `## 🔍 Detective Says: Let's Learn to Search!

Hi there! I'm **Detective** 🔍, your search algorithm guide! My job is to help you find things — FAST.

你好！我是 **侦探** 🔍，你的搜索算法向导！

🎯 **What you'll learn:**
- What linear search is and how it works
- When to use it (and when NOT to)
- Time complexity analysis

**Linear Search** is the simplest search: check every element, one by one, until you find what you're looking for.

> 🏠 Real-world analogy: Imagine you lost your keys in your room. You check the desk, then the shelf, then under the bed… one spot at a time. That's linear search!
> 现实类比：想象你在房间里找钥匙。先查桌子，再查书架，再看床底……一个位置一个位置地找。这就是线性搜索！

🔑 **Key Points:**
- Works on ANY list (sorted or unsorted)
- Simple but slow for large data
- Time: O(n) — worst case checks every element`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Linear Search in Python

Let's implement linear search step by step!
让我们一步步实现线性搜索！`,
      code: `# 🔍 Detective: "Watch me search one by one!"

def linear_search(arr, target):
    """Search for target in arr, return index or -1"""
    for i in range(len(arr)):
        print(f"  Checking index {i}: {arr[i]}", end="")
        if arr[i] == target:
            print(" ✅ FOUND!")
            return i
        print(" ❌")
    return -1

# Test it!
numbers = [4, 2, 7, 1, 9, 3, 8, 5]
print(f"Array: {numbers}")
print(f"\\nSearching for 9:")
result = linear_search(numbers, 9)
print(f"Found at index: {result}")

print(f"\\nSearching for 6:")
result = linear_search(numbers, 6)
print(f"Result: {result} (not found)")

# Count comparisons
print(f"\\n📊 Array size: {len(numbers)}")
print(f"Best case: 1 comparison (first element)")
print(f"Worst case: {len(numbers)} comparisons (last or not found)")
print(f"Average: {len(numbers)//2} comparisons")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Linear Search`,
      concept: {
        title: "Linear Search — Line by Line",
        titleZh: "线性搜索——逐行解析",
        codeAnatomy: {
          lines: [
            { code: "def linear_search(arr, target):", explanation: "Define function with array and target value", explanationZh: "定义函数，接收数组和目标值" },
            { code: "    for i in range(len(arr)):", explanation: "Loop through every index from 0 to n-1", explanationZh: "遍历从 0 到 n-1 的每个索引" },
            { code: "        if arr[i] == target:", explanation: "Compare current element with target", explanationZh: "将当前元素与目标值比较" },
            { code: "            return i", explanation: "Found it! Return the index", explanationZh: "找到了！返回索引" },
            { code: "    return -1", explanation: "Checked everything, not found → return -1", explanationZh: "全部检查完，未找到 → 返回 -1" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🎮",
      content: `## 🎮 Linear Search Variations

Linear search isn't just for numbers! Let's try different uses.
线性搜索不只能搜数字！`,
      code: `# Variation 1: Search in strings
def find_char(text, char):
    for i, c in enumerate(text):
        if c == char:
            return i
    return -1

word = "algorithm"
print(f"'r' in '{word}' at index: {find_char(word, 'r')}")

# Variation 2: Find ALL occurrences
def find_all(arr, target):
    positions = []
    for i in range(len(arr)):
        if arr[i] == target:
            positions.append(i)
    return positions

data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
print(f"\\nAll positions of 5: {find_all(data, 5)}")
print(f"All positions of 1: {find_all(data, 1)}")

# Variation 3: Find minimum
def find_min(arr):
    min_val = arr[0]
    min_idx = 0
    for i in range(1, len(arr)):
        if arr[i] < min_val:
            min_val = arr[i]
            min_idx = i
    return min_idx, min_val

idx, val = find_min(data)
print(f"\\nMinimum value: {val} at index {idx}")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Count Search Steps · 练习：计算搜索步骤`,
      exercise: {
        prompt: "Write a function that returns HOW MANY comparisons linear search makes to find a target.",
        promptZh: "写一个函数，返回线性搜索找到目标值需要多少次比较。",
        starterCode: "def count_steps(arr, target):\n    steps = 0\n    # Your code here\n    # 你的代码\n    return steps\n\nprint(count_steps([5, 3, 8, 1, 9], 8))  # Should print 3",
        expectedOutput: "3",
        hint: "Increment steps each time you compare. Return steps when found.",
        hintZh: "每次比较时步数加1。找到时返回步数。",
        solution: "def count_steps(arr, target):\n    steps = 0\n    for i in range(len(arr)):\n        steps += 1\n        if arr[i] == target:\n            return steps\n    return steps\n\nprint(count_steps([5, 3, 8, 1, 9], 8))",
      },
    },
    {
      type: "text",
      emoji: "📊",
      content: `## 📊 When to Use Linear Search

🔍 **Use Linear Search when:**
- The list is **small** (< 20 elements)
- The list is **unsorted**
- You only need to search **once**
- You want the **simplest** solution

❌ **Don't use it when:**
- The list is **large and sorted** (use binary search!)
- You need to search **many times** (sort first, then binary search)

| Scenario | Time | Example |
|----------|------|---------|
| Best case | O(1) | Target is first element |
| Average | O(n/2) | Target is in the middle |
| Worst case | O(n) | Target is last or missing |

🔑 **Key takeaway:** Linear search is simple and universal, but slow for big data!
线性搜索简单通用，但对大数据来说太慢！`,
    },
    {
      type: "quiz",
      content: "🎓 Linear Search Quiz · 线性搜索测验",
      quiz: [
        {
          question: "What is the time complexity of linear search in the worst case?\n线性搜索最坏情况的时间复杂度是什么？",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctIndex: 2,
          explanation: "Linear search may check every element, so worst case is O(n). 线性搜索可能检查每个元素，最坏情况是 O(n)。",
        },
        {
          question: "Does linear search require the array to be sorted?\n线性搜索需要数组排好序吗？",
          options: ["Yes, always", "No, it works on any array", "Only for numbers", "Only for strings"],
          correctIndex: 1,
          explanation: "Linear search works on any array — sorted or unsorted! 线性搜索对任何数组都有效！",
        },
        {
          question: "In array [10, 20, 30, 40, 50], how many comparisons to find 30?\n在数组 [10, 20, 30, 40, 50] 中，找到 30 需要几次比较？",
          options: ["1", "2", "3", "5"],
          correctIndex: 2,
          explanation: "We check 10, then 20, then 30 — 3 comparisons. 检查 10，然后 20，然后 30 —— 3 次比较。",
        },
        {
          question: "What does linear search return when the target is NOT found?\n当目标未找到时，线性搜索返回什么？",
          options: ["0", "None", "-1 (by convention)", "The last index"],
          correctIndex: 2,
          explanation: "By convention, we return -1 to indicate 'not found'. 按惯例，返回 -1 表示「未找到」。",
        },
        {
          question: "Which is the best scenario for linear search?\n哪种情况最适合线性搜索？",
          options: ["Large sorted array", "Small unsorted list", "Binary tree", "Hash table"],
          correctIndex: 1,
          explanation: "Linear search is great for small, unsorted lists! 线性搜索很适合小的、未排序的列表！",
        },
        {
          question: "If an array has 1000 elements, what's the average number of comparisons?\n如果数组有 1000 个元素，平均比较次数是多少？",
          options: ["10", "100", "500", "1000"],
          correctIndex: 2,
          explanation: "On average, we check half the elements: 1000/2 = 500. 平均检查一半元素。",
        },
        {
          question: "What is the best case time complexity of linear search?\n线性搜索最好情况的时间复杂度？",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctIndex: 0,
          explanation: "Best case: target is the first element → O(1). 最好情况：目标是第一个元素。",
        },
        {
          type: "coding",
          question: "Write a linear search that returns True/False instead of index.\n写一个返回 True/False 的线性搜索。",
          prompt: "def contains(arr, target): # return True if found",
          starterCode: "def contains(arr, target):\n    pass\n\nprint(contains([1,2,3], 2))",
          expectedOutput: "True",
          options: ["for i in arr: if i == target: return True\\nreturn False", "return target in arr", "for i in range(len(arr)): if arr[i] == target: return True\\nreturn False", "All of the above work"],
          correctIndex: 3,
          explanation: "All three approaches correctly implement a contains check! 三种方法都能正确实现包含检查！",
        },
      ],
    },
  ],
};

const alg_1_2: Lesson = {
  id: "alg-1-2",
  moduleId: "alg-1",
  title: "Binary Search",
  subtitle: "Divide and conquer · 二分搜索",
  icon: "📖",
  xp: 20,
  duration: "22 min",
  order: 2,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔍",
      content: `## 🔍 Detective: The Power of Halving!

Remember linear search? Checking one by one? That's like reading every page of a dictionary to find a word. TERRIBLE! 📖

还记得线性搜索吗？一个一个检查？那就像翻字典每一页来找一个词。太糟了！

🎯 **What you'll learn:**
- How binary search works (and why it's amazing)
- The "sorted array" requirement
- O(log n) — what logarithmic time means

> 🏠 Real-world analogy: How do you ACTUALLY find a word in a dictionary? You open to the MIDDLE, check if your word is before or after, then repeat! You never check every page!
> 现实类比：你实际上怎么在字典里找词？打开中间页，看你的词在前面还是后面，然后重复！你从不会翻每一页！

🔑 **Key insight:** Each step eliminates HALF the remaining elements!
每一步都排除剩余元素的一半！

- 1000 elements → ~10 steps (not 1000!)
- 1,000,000 elements → ~20 steps!
- That's the magic of **O(log n)**`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Binary Search — Step by Step

Watch binary search find a number in a sorted array!
观察二分搜索在排序数组中找数！`,
      code: `# 🔍 Detective: "Watch me cut the search space in HALF each time!"

def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    step = 0

    while left <= right:
        step += 1
        mid = (left + right) // 2
        print(f"  Step {step}: left={left}, right={right}, mid={mid}, arr[mid]={arr[mid]}", end="")
        
        if arr[mid] == target:
            print(f" ✅ FOUND!")
            return mid
        elif arr[mid] < target:
            print(f" → go RIGHT (target is bigger)")
            left = mid + 1
        else:
            print(f" → go LEFT (target is smaller)")
            right = mid - 1
    
    print(f"  Not found after {step} steps")
    return -1

# Sorted array (MUST be sorted for binary search!)
nums = [2, 5, 8, 12, 16, 23, 38, 42, 55, 67, 78, 91]
print(f"Sorted array: {nums}")
print(f"Size: {len(nums)} elements\\n")

print("Searching for 23:")
idx = binary_search(nums, 23)
print(f"Result: index {idx}\\n")

print("Searching for 50:")
idx = binary_search(nums, 50)
print(f"Result: {idx}")

import math
print(f"\\n📊 For {len(nums)} elements:")
print(f"  Linear search: up to {len(nums)} steps")
print(f"  Binary search: up to {math.ceil(math.log2(len(nums)))} steps")
print(f"  That's {len(nums) // math.ceil(math.log2(len(nums)))}x faster!")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Binary Search`,
      concept: {
        title: "Binary Search — Line by Line",
        titleZh: "二分搜索——逐行解析",
        codeAnatomy: {
          lines: [
            { code: "left, right = 0, len(arr) - 1", explanation: "Set search boundaries to full array", explanationZh: "将搜索边界设为整个数组" },
            { code: "while left <= right:", explanation: "Keep searching while range is valid", explanationZh: "只要范围有效就继续搜索" },
            { code: "    mid = (left + right) // 2", explanation: "Find the middle index", explanationZh: "找到中间索引" },
            { code: "    if arr[mid] == target:", explanation: "Check if middle element is our target", explanationZh: "检查中间元素是否是目标" },
            { code: "    elif arr[mid] < target:", explanation: "Target is bigger → search right half", explanationZh: "目标更大 → 搜索右半部分" },
            { code: "        left = mid + 1", explanation: "Move left boundary past middle", explanationZh: "将左边界移到中间之后" },
            { code: "    else:", explanation: "Target is smaller → search left half", explanationZh: "目标更小 → 搜索左半部分" },
            { code: "        right = mid - 1", explanation: "Move right boundary before middle", explanationZh: "将右边界移到中间之前" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🔄",
      content: `## 🔄 Recursive Binary Search

Binary search can also be written recursively!
二分搜索也可以用递归来写！`,
      code: `def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    
    if left > right:
        return -1  # Base case: not found
    
    mid = (left + right) // 2
    
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

# Test
nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
print(f"Array: {nums}")
print(f"Search for 7: index {binary_search_recursive(nums, 7)}")
print(f"Search for 13: index {binary_search_recursive(nums, 13)}")
print(f"Search for 6: index {binary_search_recursive(nums, 6)}")

# Compare performance visually
import time
big_list = list(range(1_000_000))  # 1 million numbers

start = time.time()
# Linear search for 999999
for i in range(len(big_list)):
    if big_list[i] == 999999:
        break
linear_time = time.time() - start

start = time.time()
binary_search_recursive(big_list, 999999)
binary_time = time.time() - start

print(f"\\n⏱️ Finding 999999 in 1,000,000 elements:")
print(f"  Linear: {linear_time:.4f}s")
print(f"  Binary: {binary_time:.6f}s")
print(f"  Binary is ~{int(linear_time/max(binary_time,0.000001))}x faster!")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Binary Search · 练习：二分搜索`,
      exercise: {
        prompt: "Implement binary search that returns True/False for whether target exists in sorted array.",
        promptZh: "实现二分搜索，返回目标值是否存在于排序数组中。",
        starterCode: "def binary_contains(arr, target):\n    left, right = 0, len(arr) - 1\n    # Your code here\n    pass\n\nprint(binary_contains([1,3,5,7,9], 5))  # True\nprint(binary_contains([1,3,5,7,9], 4))  # False",
        expectedOutput: "True\nFalse",
        hint: "Use while left <= right, compute mid, compare and narrow the range.",
        hintZh: "使用 while left <= right，计算 mid，比较并缩小范围。",
        solution: "def binary_contains(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return True\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return False\n\nprint(binary_contains([1,3,5,7,9], 5))\nprint(binary_contains([1,3,5,7,9], 4))",
      },
    },
    {
      type: "text",
      emoji: "⚖️",
      content: `## ⚖️ Linear vs Binary: The Showdown

| Feature | Linear Search | Binary Search |
|---------|--------------|---------------|
| **Time** | O(n) | O(log n) |
| **Requires sorted?** | No | Yes ✅ |
| **Space** | O(1) | O(1) iterative, O(log n) recursive |
| **Best for** | Small/unsorted data | Large sorted data |

**How big is the difference?**

| n | Linear (worst) | Binary (worst) |
|---|---------------|----------------|
| 10 | 10 | 4 |
| 100 | 100 | 7 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |

🔑 **Binary search is one of the most important algorithms in CS!**
二分搜索是计算机科学中最重要的算法之一！`,
    },
    {
      type: "quiz",
      content: "🎓 Binary Search Quiz · 二分搜索测验",
      quiz: [
        {
          question: "What is the key requirement for binary search?\n二分搜索的关键要求是什么？",
          options: ["Array must be small", "Array must be sorted", "Array must have unique values", "Array must be of numbers"],
          correctIndex: 1,
          explanation: "Binary search ONLY works on sorted arrays! 二分搜索只能在排序数组上工作！",
        },
        {
          question: "What is the time complexity of binary search?\n二分搜索的时间复杂度？",
          options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
          correctIndex: 2,
          explanation: "Each step halves the search space → O(log n). 每步将搜索空间减半 → O(log n)。",
        },
        {
          question: "How many steps to search 1,000,000 sorted elements?\n在 1,000,000 个排序元素中搜索需要几步？",
          options: ["1,000,000", "1,000", "100", "~20"],
          correctIndex: 3,
          explanation: "log₂(1,000,000) ≈ 20. Just 20 steps for a million elements! 仅需约 20 步！",
        },
        {
          question: "In binary search, if arr[mid] < target, what do we do?\n如果 arr[mid] < target，我们该怎么做？",
          options: ["Search left half", "Search right half", "Return -1", "Start over"],
          correctIndex: 1,
          explanation: "Target is bigger than mid, so it must be in the right half. 目标比中间值大，一定在右半部分。",
        },
        {
          question: "What does 'left > right' mean in binary search?\n二分搜索中 'left > right' 意味着什么？",
          options: ["Found the target", "Array is unsorted", "Target not found", "Need to restart"],
          correctIndex: 2,
          explanation: "When left crosses right, the search space is empty — target doesn't exist! 当 left 越过 right，搜索空间为空——目标不存在！",
        },
        {
          question: "Binary search on [1,3,5,7,9] for target 7: what's the first mid value checked?\n对 [1,3,5,7,9] 搜索 7，第一个检查的 mid 值是？",
          options: ["1", "3", "5", "7"],
          correctIndex: 2,
          explanation: "mid = (0+4)//2 = 2, arr[2] = 5. 中间索引是 2，值为 5。",
        },
        {
          question: "Which Python built-in can do binary search?\n哪个 Python 内置模块可以做二分搜索？",
          options: ["math", "bisect", "search", "sort"],
          correctIndex: 1,
          explanation: "The 'bisect' module provides binary search functions! bisect 模块提供二分搜索功能！",
        },
        {
          question: "If you need to search an unsorted array once, which is better?\n如果需要对未排序数组搜索一次，哪个更好？",
          options: ["Binary search", "Linear search", "Both are equal", "Neither works"],
          correctIndex: 1,
          explanation: "Sorting first would cost O(n log n), more than linear search's O(n)! 先排序需要 O(n log n)，比线性搜索的 O(n) 还多！",
        },
      ],
    },
  ],
};

const alg_1_3: Lesson = {
  id: "alg-1-3",
  moduleId: "alg-1",
  title: "Search in 2D",
  subtitle: "Rows and columns · 二维搜索",
  icon: "🗺️",
  xp: 25,
  duration: "20 min",
  order: 3,
  gradeRange: [8, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔍",
      content: `## 🔍 Detective: Searching in Grids!

So far we've searched in 1D arrays. But what about 2D grids? Think spreadsheets, game boards, maps!

到目前为止，我们搜索的是一维数组。但二维网格呢？想想电子表格、游戏棋盘、地图！

🎯 **What you'll learn:**
- Searching in a 2D matrix
- The "sorted matrix" trick
- Staircase search (O(m+n) algorithm)

> 🏠 Real-world analogy: Imagine a movie theater seating chart. Rows are sorted by number, seats in each row are sorted too. How do you find seat R5-S8 without checking every seat?
> 现实类比：想象电影院座位表。行按编号排列，每行的座位也排好序。你怎么找到 R5-S8 而不检查每个座位？

🔑 **Key insight:** A sorted 2D matrix has structure we can exploit!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Brute Force: Search Every Cell

The simplest approach — check every cell.
最简单的方法——检查每个单元格。`,
      code: `# 🔍 Brute force 2D search
def search_2d_brute(matrix, target):
    """Search every cell: O(m × n)"""
    steps = 0
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            steps += 1
            if matrix[i][j] == target:
                print(f"  Found {target} at ({i},{j}) in {steps} steps")
                return (i, j)
    print(f"  Not found after {steps} steps")
    return (-1, -1)

# A 4x4 matrix
matrix = [
    [ 1,  4,  7, 11],
    [ 2,  5,  8, 12],
    [ 3,  6,  9, 16],
    [10, 13, 14, 17]
]

print("Matrix:")
for row in matrix:
    print(f"  {row}")

print(f"\\nBrute force search:")
search_2d_brute(matrix, 9)
search_2d_brute(matrix, 15)`,
    },
    {
      type: "code",
      emoji: "⚡",
      content: `## ⚡ Staircase Search: The Smart Way

For a matrix where rows AND columns are sorted, we can start from the **top-right corner** and move like a staircase!
对于行和列都排好序的矩阵，我们可以从**右上角**开始，像楼梯一样移动！`,
      code: `# ⚡ Staircase search: O(m + n)
def staircase_search(matrix, target):
    """Start from top-right corner. Go left if too big, down if too small."""
    if not matrix:
        return (-1, -1)
    
    rows, cols = len(matrix), len(matrix[0])
    r, c = 0, cols - 1  # Start at top-right
    steps = 0
    
    while r < rows and c >= 0:
        steps += 1
        val = matrix[r][c]
        print(f"  Step {steps}: checking ({r},{c}) = {val}", end="")
        
        if val == target:
            print(f" ✅ FOUND!")
            return (r, c)
        elif val > target:
            print(f" → go LEFT (too big)")
            c -= 1  # Too big, go left
        else:
            print(f" → go DOWN (too small)")
            r += 1  # Too small, go down
    
    print(f"  Not found after {steps} steps")
    return (-1, -1)

matrix = [
    [ 1,  4,  7, 11],
    [ 2,  5,  8, 12],
    [ 3,  6,  9, 16],
    [10, 13, 14, 17]
]

print("Matrix (rows & cols sorted):")
for row in matrix:
    print(f"  {row}")

print(f"\\nStaircase search for 9:")
staircase_search(matrix, 9)

print(f"\\nStaircase search for 15:")
staircase_search(matrix, 15)

print(f"\\n📊 For a 4×4 matrix:")
print(f"  Brute force: up to 16 steps")
print(f"  Staircase: up to 4+4=8 steps")
print(f"  For 1000×1000: brute=1,000,000 vs staircase=2,000!")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Staircase Search`,
      concept: {
        title: "Staircase Search — Line by Line",
        titleZh: "阶梯搜索——逐行解析",
        codeAnatomy: {
          lines: [
            { code: "r, c = 0, cols - 1", explanation: "Start at top-right corner", explanationZh: "从右上角开始" },
            { code: "while r < rows and c >= 0:", explanation: "Stay within matrix bounds", explanationZh: "保持在矩阵范围内" },
            { code: "    if val == target:", explanation: "Found it!", explanationZh: "找到了！" },
            { code: "    elif val > target: c -= 1", explanation: "Current value too big → move left", explanationZh: "当前值太大 → 向左移动" },
            { code: "    else: r += 1", explanation: "Current value too small → move down", explanationZh: "当前值太小 → 向下移动" },
          ],
        },
      },
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: 2D Search · 练习：二维搜索`,
      exercise: {
        prompt: "Implement a function to find if a target exists in a sorted matrix (rows sorted left-to-right).",
        promptZh: "实现一个函数，判断目标值是否存在于排序矩阵中（每行从左到右排序）。",
        starterCode: "def search_matrix(matrix, target):\n    # Hint: use binary search on each row, or staircase\n    pass\n\nm = [[1,3,5],[7,9,11],[13,15,17]]\nprint(search_matrix(m, 9))   # True\nprint(search_matrix(m, 10))  # False",
        expectedOutput: "True\nFalse",
        hint: "Use staircase search: start top-right, go left if too big, down if too small.",
        hintZh: "用阶梯搜索：从右上角开始，太大向左，太小向下。",
        solution: "def search_matrix(matrix, target):\n    r, c = 0, len(matrix[0]) - 1\n    while r < len(matrix) and c >= 0:\n        if matrix[r][c] == target:\n            return True\n        elif matrix[r][c] > target:\n            c -= 1\n        else:\n            r += 1\n    return False\n\nm = [[1,3,5],[7,9,11],[13,15,17]]\nprint(search_matrix(m, 9))\nprint(search_matrix(m, 10))",
      },
    },
    {
      type: "text",
      emoji: "📊",
      content: `## 📊 Summary: 2D Search Algorithms

| Algorithm | Time | When to Use |
|-----------|------|-------------|
| Brute Force | O(m×n) | Unsorted matrix |
| Binary per row | O(m·log n) | Each row sorted |
| Staircase | O(m+n) | Rows AND cols sorted |
| Flatten + Binary | O(log(m·n)) | Fully sorted (row-major) |

🔑 **The more structure (sorting), the faster we can search!**
结构越多（排序），搜索越快！`,
    },
    {
      type: "quiz",
      content: "🎓 2D Search Quiz · 二维搜索测验",
      quiz: [
        {
          question: "What is the time complexity of staircase search on an m×n matrix?\n阶梯搜索在 m×n 矩阵上的时间复杂度？",
          options: ["O(m×n)", "O(m+n)", "O(log(m×n))", "O(m·log n)"],
          correctIndex: 1,
          explanation: "Staircase search moves at most m steps down and n steps left: O(m+n). 最多向下走 m 步，向左走 n 步。",
        },
        {
          question: "Where does staircase search start?\n阶梯搜索从哪里开始？",
          options: ["Top-left corner", "Center", "Top-right corner", "Bottom-left corner"],
          correctIndex: 2,
          explanation: "Start at top-right (or bottom-left) where one direction increases and the other decreases. 从右上角开始。",
        },
        {
          question: "In staircase search, if current value > target, which direction do we go?\n如果当前值 > 目标，我们往哪走？",
          options: ["Right", "Down", "Left", "Up"],
          correctIndex: 2,
          explanation: "Value too big → go left to find smaller values. 值太大 → 向左找更小的值。",
        },
        {
          question: "Can staircase search work on an unsorted matrix?\n阶梯搜索能在未排序矩阵上工作吗？",
          options: ["Yes", "No", "Only if rows are sorted", "Only if columns are sorted"],
          correctIndex: 1,
          explanation: "Both rows AND columns must be sorted for staircase search. 行和列都必须排好序。",
        },
        {
          question: "For a 100×100 sorted matrix, what's the worst case for staircase search?\n对 100×100 排序矩阵，阶梯搜索最坏情况？",
          options: ["10,000 steps", "200 steps", "100 steps", "10 steps"],
          correctIndex: 1,
          explanation: "O(m+n) = 100+100 = 200 steps maximum. 最多 200 步。",
        },
        {
          question: "What is brute force 2D search complexity?\n暴力二维搜索的复杂度？",
          options: ["O(n)", "O(n²)", "O(m×n)", "O(m+n)"],
          correctIndex: 2,
          explanation: "Must check every cell in the m×n grid. 必须检查 m×n 网格中的每个单元格。",
        },
        {
          question: "Which approach is best for a matrix where only rows are sorted?\n如果只有行排序，哪种方法最好？",
          options: ["Brute force", "Binary search on each row", "Staircase search", "Random search"],
          correctIndex: 1,
          explanation: "Apply binary search to each row: O(m·log n). 对每行做二分搜索。",
        },
        {
          question: "Staircase search is similar to which strategy?\n阶梯搜索类似于哪种策略？",
          options: ["Brute force", "Divide and conquer", "Two pointer / elimination", "Dynamic programming"],
          correctIndex: 2,
          explanation: "Each step eliminates either a row or a column — similar to two-pointer! 每步消除一行或一列——类似双指针！",
        },
      ],
    },
  ],
};

const alg_1_4: Lesson = {
  id: "alg-1-4",
  moduleId: "alg-1",
  title: "Search Applications",
  subtitle: "Real-world search problems · 搜索应用",
  icon: "🎯",
  xp: 25,
  duration: "20 min",
  order: 4,
  gradeRange: [8, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔍",
      content: `## 🔍 Detective: Search is Everywhere!

Search algorithms aren't just academic — they're used everywhere in the real world!

搜索算法不只是学术性的——它们无处不在！

🎯 **What you'll learn:**
- Finding the first/last occurrence
- Search for the boundary (first True)
- Searching in rotated arrays
- Real-world search applications

> 🏠 Real-world analogy: Google Search finds results among billions of pages. Spotify searches millions of songs. Your phone searches contacts. Search is the #1 computer skill!
> 现实类比：谷歌在数十亿网页中搜索。Spotify 搜索数百万首歌。你的手机搜索联系人。搜索是计算机的第一技能！`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Finding Boundaries with Binary Search

One of the most powerful patterns: find the FIRST position where a condition becomes True!
最强大的模式之一：找到条件变为 True 的第一个位置！`,
      code: `# Pattern: Find first True in [False, False, ..., True, True, ...]
def find_first_true(arr):
    """Find index of first True value using binary search"""
    left, right = 0, len(arr) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid]:  # True found
            result = mid  # Save it, but keep looking left
            right = mid - 1
        else:
            left = mid + 1
    
    return result

# Example 1: First occurrence in sorted array
def first_occurrence(arr, target):
    """Find the FIRST index of target in sorted array"""
    bools = [x >= target for x in arr]
    idx = find_first_true(bools)
    if idx != -1 and arr[idx] == target:
        return idx
    return -1

nums = [1, 3, 3, 3, 5, 7, 7, 9]
print(f"Array: {nums}")
print(f"First occurrence of 3: index {first_occurrence(nums, 3)}")
print(f"First occurrence of 7: index {first_occurrence(nums, 7)}")

# Example 2: Square root (integer)
def int_sqrt(n):
    """Find floor(sqrt(n)) using binary search"""
    left, right = 0, n
    result = 0
    while left <= right:
        mid = (left + right) // 2
        if mid * mid <= n:
            result = mid
            left = mid + 1
        else:
            right = mid - 1
    return result

print(f"\\nsqrt(16) = {int_sqrt(16)}")
print(f"sqrt(27) = {int_sqrt(27)}")
print(f"sqrt(100) = {int_sqrt(100)}")`,
    },
    {
      type: "code",
      emoji: "🔄",
      content: `## 🔄 Search in a Rotated Array

A classic interview problem! The array was sorted but then rotated.
经典面试题！数组排好序后被旋转了。`,
      code: `# Rotated sorted array: [4, 5, 6, 7, 0, 1, 2]
# Originally: [0, 1, 2, 4, 5, 6, 7], rotated at index 4

def search_rotated(arr, target):
    """Binary search in a rotated sorted array"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        print(f"  [{left}..{right}] mid={mid}, arr[mid]={arr[mid]}")
        
        if arr[mid] == target:
            return mid
        
        # Check which half is sorted
        if arr[left] <= arr[mid]:  # Left half is sorted
            if arr[left] <= target < arr[mid]:
                right = mid - 1  # Target in left half
            else:
                left = mid + 1   # Target in right half
        else:  # Right half is sorted
            if arr[mid] < target <= arr[right]:
                left = mid + 1   # Target in right half
            else:
                right = mid - 1  # Target in left half
    
    return -1

rotated = [4, 5, 6, 7, 0, 1, 2]
print(f"Rotated array: {rotated}")
print(f"\\nSearching for 0:")
print(f"Found at index: {search_rotated(rotated, 0)}")
print(f"\\nSearching for 6:")
print(f"Found at index: {search_rotated(rotated, 6)}")`,
    },
    {
      type: "code",
      emoji: "🎮",
      content: `## 🎮 Fun Application: Guess the Number Game

Binary search makes you unbeatable at number guessing!
二分搜索让你在猜数字游戏中立于不败之地！`,
      code: `import random

def guess_number_game(secret, low=1, high=100):
    """AI uses binary search to guess a number"""
    guesses = 0
    
    while low <= high:
        guess = (low + high) // 2
        guesses += 1
        
        if guess == secret:
            print(f"  Guess #{guesses}: {guess} ✅ Got it!")
            return guesses
        elif guess < secret:
            print(f"  Guess #{guesses}: {guess} → Too low!")
            low = guess + 1
        else:
            print(f"  Guess #{guesses}: {guess} → Too high!")
            high = guess - 1
    
    return guesses

# Play the game!
secret = random.randint(1, 100)
print(f"🎮 Secret number: {secret} (shhh!)")
print(f"Guessing between 1-100 using binary search:\\n")
n = guess_number_game(secret)
print(f"\\n🏆 Found in {n} guesses!")
print(f"Maximum possible: 7 guesses (log₂(100) ≈ 7)")
print(f"Random guessing average: 50 guesses")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Last Occurrence · 练习：最后出现位置`,
      exercise: {
        prompt: "Write a function to find the LAST occurrence of a target in a sorted array.",
        promptZh: "写一个函数找到目标值在排序数组中的最后出现位置。",
        starterCode: "def last_occurrence(arr, target):\n    # Your code here\n    pass\n\nprint(last_occurrence([1,2,3,3,3,4,5], 3))  # Should print 4",
        expectedOutput: "4",
        hint: "Use binary search. When you find target, save it but keep looking RIGHT.",
        hintZh: "用二分搜索。找到目标后保存，但继续往右找。",
        solution: "def last_occurrence(arr, target):\n    left, right = 0, len(arr) - 1\n    result = -1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            result = mid\n            left = mid + 1\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return result\n\nprint(last_occurrence([1,2,3,3,3,4,5], 3))",
      },
    },
    {
      type: "text",
      emoji: "🌍",
      content: `## 🌍 Search in the Real World

**Where search algorithms are used:**

🔍 **Google/Bing** — Inverted index + ranking algorithms
📱 **Phone contacts** — Binary search on sorted names
🎵 **Spotify/Apple Music** — Search index for songs, artists
🎮 **Game AI** — Pathfinding search (BFS/DFS)
📦 **Amazon** — Product search with filters
🗺️ **GPS** — Find shortest route (graph search)
🧬 **DNA analysis** — Pattern matching in gene sequences

🔑 **Key takeaway:** Mastering search = mastering efficiency. The right search algorithm can turn hours into milliseconds!
掌握搜索 = 掌握效率。正确的搜索算法能把几小时变成几毫秒！`,
    },
    {
      type: "quiz",
      content: "🎓 Search Applications Quiz · 搜索应用测验",
      quiz: [
        {
          question: "To find the first occurrence in a sorted array, what do you do when you find the target?\n在排序数组中找第一次出现，找到目标后怎么办？",
          options: ["Return immediately", "Save and keep searching LEFT", "Save and keep searching RIGHT", "Start over"],
          correctIndex: 1,
          explanation: "Save the result and continue searching left for an earlier occurrence. 保存结果并继续向左搜索更早的出现。",
        },
        {
          question: "What is the maximum guesses needed for binary search in range 1-100?\n在 1-100 范围内二分搜索最多需要几次？",
          options: ["50", "10", "7", "100"],
          correctIndex: 2,
          explanation: "log₂(100) ≈ 6.6, so at most 7 guesses. 最多 7 次猜测。",
        },
        {
          question: "A rotated sorted array [4,5,6,7,0,1,2] — which half is always sorted?\n旋转数组 [4,5,6,7,0,1,2]——哪半部分总是排好序的？",
          options: ["Neither half", "Both halves", "At least one half", "Only if rotation point is in the middle"],
          correctIndex: 2,
          explanation: "In a rotated sorted array, at least one half around mid is always sorted! 至少有一半是排好序的！",
        },
        {
          question: "Binary search can be used to find square roots because...?\n二分搜索能用来找平方根因为……？",
          options: ["Square root is always an integer", "The function x² is monotonically increasing", "It's a random problem", "Square roots are sorted"],
          correctIndex: 1,
          explanation: "x² is monotonically increasing, so we can binary search on the answer! x² 单调递增，所以可以对答案做二分搜索！",
        },
        {
          question: "Which is NOT a valid binary search application?\n哪个不是有效的二分搜索应用？",
          options: ["Finding an element in sorted array", "Finding square root", "Searching in an unsorted linked list", "Finding first True in boolean array"],
          correctIndex: 2,
          explanation: "Binary search needs random access and sorted data — unsorted linked lists have neither! 二分搜索需要随机访问和排好序的数据！",
        },
        {
          question: "To find the last occurrence, when you find target, you keep searching...?\n找最后一次出现，找到目标后继续往哪搜？",
          options: ["Left", "Right", "Both directions", "Stop immediately"],
          correctIndex: 1,
          explanation: "Keep searching RIGHT to find a later occurrence. 继续向右搜索找到更后面的出现。",
        },
        {
          question: "How many comparisons does binary search need for an array of 1024 elements?\n对 1024 个元素的数组，二分搜索需要几次比较？",
          options: ["512", "1024", "10", "32"],
          correctIndex: 2,
          explanation: "log₂(1024) = 10. Exactly 10 steps! 正好 10 步！",
        },
        {
          question: "Google searches billions of pages quickly because...?\n谷歌搜索数十亿网页很快因为……？",
          options: ["It checks every page", "It uses inverted indexes (pre-built search structures)", "It's just a fast computer", "It uses linear search"],
          correctIndex: 1,
          explanation: "Google builds inverted indexes — like a dictionary index — for instant lookup! 谷歌建立倒排索引——像字典的索引——用于即时查找！",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE ALG-2: SORTING
// ═══════════════════════════════════════════════════════════════

const alg_2_1: Lesson = {
  id: "alg-2-1",
  moduleId: "alg-2",
  title: "Simple Sorts",
  subtitle: "Bubble, Selection, Insertion · 简单排序",
  icon: "🫧",
  xp: 20,
  duration: "25 min",
  order: 1,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "⚡",
      content: `## ⚡ Flash Says: Time to Sort Things Out!

Hey! I'm **Flash** ⚡, your sorting speedster! Sorting is one of the MOST fundamental operations in CS.

你好！我是 **闪电** ⚡，你的排序速度专家！排序是计算机科学中最基础的操作之一。

🎯 **What you'll learn:**
- Bubble Sort — the simplest sort
- Selection Sort — find the minimum
- Insertion Sort — like sorting cards in your hand

> 🏠 Real-world analogy: Imagine sorting a messy deck of cards:
> - **Bubble Sort** 🫧: Compare adjacent cards, swap if out of order. Repeat!
> - **Selection Sort** 👆: Find the smallest card, put it first. Find next smallest, put second...
> - **Insertion Sort** 🃏: Pick cards one by one, insert each into its correct position in your hand
>
> 现实类比：想象整理一副乱牌：
> - 冒泡排序：比较相邻的牌，乱序就交换
> - 选择排序：找最小的牌放第一，再找次小的放第二
> - 插入排序：一张张拿牌，每张插入手中正确的位置

All three are O(n²) — simple but slow for big data!`,
    },
    {
      type: "code",
      emoji: "🫧",
      content: `## 🫧 Bubble Sort — Bubbling Up!

The lightest elements "bubble" to the top, like bubbles in water!
最轻的元素"冒泡"到顶部，像水中的气泡！`,
      code: `def bubble_sort(arr):
    """Bubble Sort: repeatedly swap adjacent elements"""
    n = len(arr)
    swaps = 0
    
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swaps += 1
                swapped = True
        
        print(f"  Pass {i+1}: {arr}")
        
        if not swapped:
            print(f"  No swaps needed — done early! 🎉")
            break
    
    print(f"  Total swaps: {swaps}")
    return arr

print("🫧 Bubble Sort Demo:")
data = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {data}")
print()
bubble_sort(data.copy())`,
    },
    {
      type: "code",
      emoji: "👆",
      content: `## 👆 Selection Sort — Pick the Smallest!

Find the minimum, swap it to the front. Repeat!
找到最小值，交换到前面。重复！`,
      code: `def selection_sort(arr):
    """Selection Sort: find min, swap to front"""
    n = len(arr)
    comparisons = 0
    
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            comparisons += 1
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
        print(f"  Step {i+1}: min={arr[i]}, array={arr}")
    
    print(f"  Comparisons: {comparisons}")
    return arr

print("👆 Selection Sort Demo:")
data = [64, 25, 12, 22, 11]
print(f"Original: {data}")
print()
selection_sort(data.copy())`,
    },
    {
      type: "code",
      emoji: "🃏",
      content: `## 🃏 Insertion Sort — Like Sorting Cards!

Pick each element and INSERT it into the correct position.
拿起每个元素，插入到正确的位置。`,
      code: `def insertion_sort(arr):
    """Insertion Sort: insert each element into sorted portion"""
    shifts = 0
    
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        
        # Shift elements right until we find key's position
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
            shifts += 1
        
        arr[j + 1] = key
        print(f"  Insert {key}: {arr}")
    
    print(f"  Total shifts: {shifts}")
    return arr

print("🃏 Insertion Sort Demo:")
data = [12, 11, 13, 5, 6]
print(f"Original: {data}")
print()
insertion_sort(data.copy())

# Insertion sort is GREAT for nearly-sorted data!
print("\\n🌟 Nearly sorted data:")
almost = [1, 2, 4, 3, 5, 6, 8, 7]
print(f"Original: {almost}")
print()
insertion_sort(almost.copy())
print("Only a few shifts needed! 🎉")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Insertion Sort`,
      concept: {
        title: "Insertion Sort — Line by Line",
        titleZh: "插入排序——逐行解析",
        codeAnatomy: {
          lines: [
            { code: "for i in range(1, len(arr)):", explanation: "Start from 2nd element (1st is already 'sorted')", explanationZh: "从第二个元素开始（第一个已经「排好序」）" },
            { code: "    key = arr[i]", explanation: "Save the element to be inserted", explanationZh: "保存要插入的元素" },
            { code: "    j = i - 1", explanation: "Start comparing with the element before", explanationZh: "从前一个元素开始比较" },
            { code: "    while j >= 0 and arr[j] > key:", explanation: "Shift bigger elements right", explanationZh: "将更大的元素向右移" },
            { code: "        arr[j + 1] = arr[j]", explanation: "Move element one position right", explanationZh: "将元素右移一位" },
            { code: "    arr[j + 1] = key", explanation: "Insert key at correct position", explanationZh: "将 key 插入正确位置" },
          ],
        },
      },
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Implement Bubble Sort · 练习：实现冒泡排序`,
      exercise: {
        prompt: "Implement bubble sort to sort a list in ascending order.",
        promptZh: "实现冒泡排序，将列表升序排列。",
        starterCode: "def my_bubble_sort(arr):\n    # Your code here\n    pass\n\nresult = my_bubble_sort([5, 3, 1, 4, 2])\nprint(result)",
        expectedOutput: "[1, 2, 3, 4, 5]",
        hint: "Two nested loops. Outer: n passes. Inner: compare adjacent, swap if arr[j] > arr[j+1].",
        hintZh: "两层嵌套循环。外层：n 次遍历。内层：比较相邻元素，如果 arr[j] > arr[j+1] 就交换。",
        solution: "def my_bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nresult = my_bubble_sort([5, 3, 1, 4, 2])\nprint(result)",
      },
    },
    {
      type: "quiz",
      content: "🎓 Simple Sorts Quiz · 简单排序测验",
      quiz: [
        {
          question: "What is the time complexity of bubble sort?\n冒泡排序的时间复杂度？",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
          correctIndex: 2,
          explanation: "Two nested loops over n elements → O(n²). 两层嵌套循环 → O(n²)。",
        },
        {
          question: "Which sort is best for nearly-sorted data?\n哪种排序最适合几乎排好序的数据？",
          options: ["Bubble sort", "Selection sort", "Insertion sort", "All are equal"],
          correctIndex: 2,
          explanation: "Insertion sort on nearly-sorted data is nearly O(n)! 插入排序在几乎排好序的数据上接近 O(n)！",
        },
        {
          question: "Selection sort always makes how many swaps for n elements?\n选择排序对 n 个元素总共做多少次交换？",
          options: ["n²", "n log n", "n - 1", "It varies"],
          correctIndex: 2,
          explanation: "Selection sort makes exactly n-1 swaps (one per position). 选择排序正好做 n-1 次交换。",
        },
        {
          question: "In bubble sort, after the first pass, which element is in its final position?\n冒泡排序第一遍后，哪个元素在最终位置？",
          options: ["The smallest", "The largest", "The middle one", "None"],
          correctIndex: 1,
          explanation: "The largest element 'bubbles' to the end after the first pass. 最大的元素在第一遍后「冒泡」到末尾。",
        },
        {
          question: "Which simple sort uses the fewest comparisons?\n哪种简单排序使用最少的比较次数？",
          options: ["Bubble sort (optimized)", "Selection sort", "Insertion sort (best case)", "They're all the same"],
          correctIndex: 2,
          explanation: "Insertion sort on sorted data: only n-1 comparisons (best case O(n))! 插入排序在排好序的数据上：只需 n-1 次比较！",
        },
        {
          question: "What does 'stable sort' mean?\n「稳定排序」是什么意思？",
          options: ["The sort never crashes", "Equal elements keep their relative order", "It always runs in the same time", "It uses constant memory"],
          correctIndex: 1,
          explanation: "A stable sort preserves the relative order of equal elements. Bubble and Insertion sort are stable! 稳定排序保持相等元素的相对顺序。",
        },
        {
          question: "Which of these sorts is NOT stable?\n哪种排序不是稳定的？",
          options: ["Bubble sort", "Insertion sort", "Selection sort", "Merge sort"],
          correctIndex: 2,
          explanation: "Selection sort can swap equal elements across positions, making it unstable. 选择排序可能跨位置交换相等元素。",
        },
        {
          question: "Space complexity of all three simple sorts?\n三种简单排序的空间复杂度？",
          options: ["O(n)", "O(n²)", "O(log n)", "O(1) — in-place"],
          correctIndex: 3,
          explanation: "All three sort in-place using only a few extra variables: O(1) space. 三种都是原地排序，只用几个额外变量。",
        },
      ],
    },
  ],
};

const alg_2_2: Lesson = {
  id: "alg-2-2",
  moduleId: "alg-2",
  title: "Merge Sort",
  subtitle: "Divide, sort, merge · 归并排序",
  icon: "🔀",
  xp: 25,
  duration: "22 min",
  order: 2,
  gradeRange: [8, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "⚡",
      content: `## ⚡ Flash: Divide and Conquer!

Simple sorts are O(n²). Can we do better? YES! Welcome to **Merge Sort** — the first O(n log n) sort!

简单排序是 O(n²)。能做得更好吗？当然！欢迎来到**归并排序**——第一个 O(n log n) 排序！

🎯 **What you'll learn:**
- The divide-and-conquer strategy
- How merge sort works
- Why O(n log n) is a huge improvement

> 🏠 Real-world analogy: Imagine sorting a huge pile of exam papers:
> 1. **Split** the pile in half 📄 → 📄📄
> 2. Have two friends sort each half (they split further!)
> 3. **Merge** the two sorted halves together
> This is EXACTLY what merge sort does!
>
> 现实类比：想象整理一大堆试卷：
> 1. 把堆分成两半
> 2. 让两个朋友各自排序一半（他们继续分！）
> 3. 把两个排好序的半部分合并在一起

🔑 **Key insight:** Merging two sorted lists is EASY and FAST — O(n)!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Merge Sort — Full Implementation

Watch the split, sort, and merge process!
观察分裂、排序和合并的过程！`,
      code: `def merge_sort(arr, depth=0):
    """Merge Sort: divide, sort halves, merge"""
    indent = "  " * depth
    print(f"{indent}merge_sort({arr})")
    
    if len(arr) <= 1:
        return arr
    
    # DIVIDE: split in half
    mid = len(arr) // 2
    left = merge_sort(arr[:mid], depth + 1)
    right = merge_sort(arr[mid:], depth + 1)
    
    # MERGE: combine sorted halves
    result = merge(left, right)
    print(f"{indent}  merged: {result}")
    return result

def merge(left, right):
    """Merge two sorted arrays into one sorted array"""
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Add remaining elements
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Demo
print("🔀 Merge Sort Demo:")
data = [38, 27, 43, 3, 9, 82, 10]
print(f"Original: {data}\\n")
sorted_data = merge_sort(data)
print(f"\\nResult: {sorted_data}")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: The Merge Function`,
      concept: {
        title: "Merge — The Heart of Merge Sort",
        titleZh: "合并——归并排序的核心",
        codeAnatomy: {
          lines: [
            { code: "i = j = 0", explanation: "Two pointers: one for each sorted half", explanationZh: "两个指针：每个排好序的半部分一个" },
            { code: "while i < len(left) and j < len(right):", explanation: "Compare elements from both halves", explanationZh: "比较两半的元素" },
            { code: "    if left[i] <= right[j]:", explanation: "Take the smaller element", explanationZh: "取较小的元素" },
            { code: "        result.append(left[i]); i += 1", explanation: "Add left element, advance left pointer", explanationZh: "添加左边元素，左指针前进" },
            { code: "    else: result.append(right[j]); j += 1", explanation: "Add right element, advance right pointer", explanationZh: "添加右边元素，右指针前进" },
            { code: "result.extend(left[i:])", explanation: "Append any remaining left elements", explanationZh: "追加剩余的左边元素" },
            { code: "result.extend(right[j:])", explanation: "Append any remaining right elements", explanationZh: "追加剩余的右边元素" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📊",
      content: `## 📊 Why O(n log n)?

Let's understand the time complexity visually!
让我们直观地理解时间复杂度！`,
      code: `import math

# Visualize the recursion levels
def show_levels(n):
    print(f"For n={n} elements:")
    level = 0
    size = n
    while size > 1:
        groups = n // size
        print(f"  Level {level}: {groups} group(s) of size {size}")
        size //= 2
        level += 1
    print(f"  Level {level}: {n} group(s) of size 1")
    print(f"  Total levels: {level} = log₂({n})")
    print(f"  Work per level: O({n}) (merging)")
    print(f"  Total: O({n} × {level}) = O(n log n)")

show_levels(8)
print()
show_levels(16)

# Speed comparison
print("\\n⏱️ Speed comparison:")
for n in [100, 1000, 10000, 100000]:
    n2 = n * n
    nlogn = n * math.ceil(math.log2(n))
    ratio = n2 / nlogn
    print(f"  n={n:>6}: O(n²)={n2:>12,} vs O(n log n)={nlogn:>10,}  ({ratio:.0f}x faster)")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Merge Two Sorted Lists · 练习：合并两个排序列表`,
      exercise: {
        prompt: "Write the merge function: merge two sorted lists into one sorted list.",
        promptZh: "写合并函数：把两个排序列表合并成一个排序列表。",
        starterCode: "def merge(left, right):\n    # Your code here\n    pass\n\nprint(merge([1,3,5], [2,4,6]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6]",
        hint: "Use two pointers i and j. Compare left[i] and right[j], take the smaller one.",
        hintZh: "用两个指针 i 和 j。比较 left[i] 和 right[j]，取较小的。",
        solution: "def merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n\nprint(merge([1,3,5], [2,4,6]))",
      },
    },
    {
      type: "text",
      emoji: "📋",
      content: `## 📋 Merge Sort Summary

**Pros ✅:**
- Always O(n log n) — no worst case degradation
- Stable sort (preserves order of equal elements)
- Great for linked lists
- Naturally parallelizable

**Cons ❌:**
- Uses O(n) extra space (not in-place)
- Slower than insertion sort for small arrays
- More overhead than simpler sorts for small n

| Property | Value |
|----------|-------|
| Time (all cases) | O(n log n) |
| Space | O(n) |
| Stable | Yes ✅ |
| In-place | No ❌ |

🔑 **Merge sort is the go-to when you need guaranteed O(n log n) and stability!**
归并排序是需要保证 O(n log n) 和稳定性时的首选！`,
    },
    {
      type: "quiz",
      content: "🎓 Merge Sort Quiz · 归并排序测验",
      quiz: [
        {
          question: "What is merge sort's time complexity?\n归并排序的时间复杂度？",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          correctIndex: 1,
          explanation: "Merge sort is always O(n log n) — log n levels, O(n) work per level. 归并排序始终是 O(n log n)。",
        },
        {
          question: "What is merge sort's space complexity?\n归并排序的空间复杂度？",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctIndex: 2,
          explanation: "Merge sort needs O(n) extra space for the merge step. 合并步骤需要 O(n) 额外空间。",
        },
        {
          question: "What strategy does merge sort use?\n归并排序使用什么策略？",
          options: ["Greedy", "Divide and conquer", "Dynamic programming", "Backtracking"],
          correctIndex: 1,
          explanation: "Split → solve halves → merge = divide and conquer! 分割 → 解决子问题 → 合并 = 分治法！",
        },
        {
          question: "Is merge sort stable?\n归并排序是稳定的吗？",
          options: ["Yes", "No", "Only for numbers", "Depends on implementation"],
          correctIndex: 0,
          explanation: "Yes! When equal elements appear, we take from the left half first, preserving order. 是的！相等元素时先取左半部分，保持顺序。",
        },
        {
          question: "How many levels of recursion for 16 elements?\n16 个元素有多少层递归？",
          options: ["4", "8", "16", "2"],
          correctIndex: 0,
          explanation: "log₂(16) = 4 levels of splitting. 4 层分裂。",
        },
        {
          question: "Merging two sorted arrays of size n/2 takes?\n合并两个大小为 n/2 的排序数组需要？",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctIndex: 2,
          explanation: "We scan through both arrays once: O(n/2 + n/2) = O(n). 我们扫描两个数组各一次。",
        },
        {
          question: "When is merge sort a bad choice?\n什么时候归并排序不是好选择？",
          options: ["Large arrays", "When memory is limited", "When stability is needed", "When data is random"],
          correctIndex: 1,
          explanation: "Merge sort needs O(n) extra space, which is a problem when memory is tight. 归并排序需要 O(n) 额外空间。",
        },
        {
          question: "What is Python's built-in sort based on?\nPython 内置排序基于什么？",
          options: ["Merge sort", "Quick sort", "TimSort (merge + insertion)", "Bubble sort"],
          correctIndex: 2,
          explanation: "Python uses TimSort — a hybrid of merge sort and insertion sort! Python 使用 TimSort——归并排序和插入排序的混合！",
        },
      ],
    },
  ],
};

const alg_2_3: Lesson = {
  id: "alg-2-3",
  moduleId: "alg-2",
  title: "Quick Sort",
  subtitle: "The fastest in practice · 快速排序",
  icon: "⚡",
  xp: 25,
  duration: "22 min",
  order: 3,
  gradeRange: [8, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "⚡",
      content: `## ⚡ Flash: The Speed Champion!

Quick Sort is the **most widely used** sorting algorithm in practice. It's fast, elegant, and in-place!

快速排序是实践中**使用最广泛**的排序算法。它快速、优雅、原地排序！

🎯 **What you'll learn:**
- The partition strategy
- How quicksort works recursively
- Best/worst/average cases

> 🏠 Real-world analogy: Imagine organizing students by height:
> 1. Pick one student as "pivot" (say, medium height)
> 2. Everyone shorter goes LEFT, everyone taller goes RIGHT
> 3. Repeat for each group!
> You never have to merge anything — everyone is already in the right group!
>
> 现实类比：想象按身高排列学生：
> 1. 选一个学生作为"基准"
> 2. 更矮的去左边，更高的去右边
> 3. 对每组重复！

🔑 **Key insight:** Partition is O(n), and we do it log n times (on average) = O(n log n)!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Quick Sort — The Classic

Watch how partition places the pivot in its correct position!
观察分区如何将基准放到正确位置！`,
      code: `def quicksort(arr, depth=0):
    """Quick Sort with visualization"""
    indent = "  " * depth
    if len(arr) <= 1:
        return arr
    
    pivot = arr[-1]  # Choose last element as pivot
    print(f"{indent}pivot={pivot}, array={arr}")
    
    left = [x for x in arr[:-1] if x <= pivot]
    right = [x for x in arr[:-1] if x > pivot]
    
    print(f"{indent}  left={left}, pivot=[{pivot}], right={right}")
    
    sorted_left = quicksort(left, depth + 1)
    sorted_right = quicksort(right, depth + 1)
    
    result = sorted_left + [pivot] + sorted_right
    print(f"{indent}  → {result}")
    return result

# Demo
print("⚡ Quick Sort Demo:")
data = [10, 7, 8, 9, 1, 5]
print(f"Original: {data}\\n")
result = quicksort(data)
print(f"\\nSorted: {result}")`,
    },
    {
      type: "code",
      emoji: "🔧",
      content: `## 🔧 In-Place Quick Sort (Lomuto Partition)

The real quick sort modifies the array in-place!
真正的快速排序原地修改数组！`,
      code: `def quicksort_inplace(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pivot_idx = partition(arr, low, high)
        quicksort_inplace(arr, low, pivot_idx - 1)
        quicksort_inplace(arr, pivot_idx + 1, high)

def partition(arr, low, high):
    """Lomuto partition: pivot = last element"""
    pivot = arr[high]
    i = low - 1  # Index of smaller element boundary
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# Demo
data = [10, 80, 30, 90, 40, 50, 70]
print(f"Original: {data}")
quicksort_inplace(data)
print(f"Sorted:   {data}")

# Show partitioning step by step
print("\\n📊 Partition demo:")
demo = [10, 80, 30, 90, 40, 50, 70]
print(f"Before partition: {demo}, pivot=70")
p = partition(demo, 0, len(demo) - 1)
print(f"After partition:  {demo}")
print(f"Pivot at index {p}: everything left ≤ 70, everything right > 70")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Partition`,
      concept: {
        title: "Lomuto Partition Scheme",
        titleZh: "Lomuto 分区方案",
        codeAnatomy: {
          lines: [
            { code: "pivot = arr[high]", explanation: "Choose last element as pivot", explanationZh: "选择最后一个元素作为基准" },
            { code: "i = low - 1", explanation: "Boundary of 'smaller than pivot' zone", explanationZh: "'小于基准'区域的边界" },
            { code: "for j in range(low, high):", explanation: "Scan all elements except pivot", explanationZh: "扫描除基准外的所有元素" },
            { code: "    if arr[j] <= pivot:", explanation: "If element belongs in left partition", explanationZh: "如果元素属于左分区" },
            { code: "        i += 1; swap(arr[i], arr[j])", explanation: "Expand left zone and swap element in", explanationZh: "扩展左区域并交换元素" },
            { code: "swap(arr[i+1], arr[high])", explanation: "Place pivot at its correct position", explanationZh: "将基准放到正确位置" },
            { code: "return i + 1", explanation: "Return pivot's final index", explanationZh: "返回基准的最终索引" },
          ],
        },
      },
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Partition · 练习：分区`,
      exercise: {
        prompt: "Implement a partition function that returns the pivot index.",
        promptZh: "实现一个分区函数，返回基准的索引。",
        starterCode: "def partition(arr, pivot_val):\n    left = [x for x in arr if x < pivot_val]\n    right = [x for x in arr if x > pivot_val]\n    # Return the full sorted partition\n    result = left + [pivot_val] + right\n    return result, len(left)\n\narr = [3, 6, 8, 10, 1, 2, 1]\nresult, idx = partition(arr, 6)\nprint(result)\nprint(f'Pivot index: {idx}')",
        expectedOutput: "[3, 1, 2, 1, 6, 8, 10]\nPivot index: 4",
        hint: "Separate into elements < pivot, [pivot], elements > pivot.",
        hintZh: "分成 < pivot 的元素，[pivot]，> pivot 的元素。",
        solution: "def partition(arr, pivot_val):\n    left = [x for x in arr if x < pivot_val]\n    right = [x for x in arr if x > pivot_val]\n    result = left + [pivot_val] + right\n    return result, len(left)\n\narr = [3, 6, 8, 10, 1, 2, 1]\nresult, idx = partition(arr, 6)\nprint(result)\nprint(f'Pivot index: {idx}')",
      },
    },
    {
      type: "text",
      emoji: "⚖️",
      content: `## ⚖️ Quick Sort: Best, Average, Worst

| Case | Time | When? |
|------|------|-------|
| **Best** | O(n log n) | Pivot splits evenly |
| **Average** | O(n log n) | Random data |
| **Worst** | O(n²) 😱 | Already sorted + bad pivot |

**Worst case prevention:**
- 🎲 Random pivot selection
- 📊 Median-of-three pivot
- 🔄 Switch to insertion sort for small subarrays

**Quick Sort vs Merge Sort:**

| Feature | Quick Sort | Merge Sort |
|---------|-----------|------------|
| Average time | O(n log n) | O(n log n) |
| Worst time | O(n²) | O(n log n) |
| Space | O(log n) | O(n) |
| In-place | Yes ✅ | No ❌ |
| Stable | No ❌ | Yes ✅ |
| In practice | Usually faster | More predictable |

🔑 **Quick sort is the default choice when space matters and average case is good enough!**`,
    },
    {
      type: "quiz",
      content: "🎓 Quick Sort Quiz · 快速排序测验",
      quiz: [
        {
          question: "What is quick sort's average time complexity?\n快速排序的平均时间复杂度？",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          correctIndex: 1,
          explanation: "On average, quick sort runs in O(n log n). 平均情况下是 O(n log n)。",
        },
        {
          question: "What is quick sort's worst case?\n快速排序的最坏情况？",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
          correctIndex: 2,
          explanation: "Worst case is O(n²) when pivot is always the smallest/largest. 当基准总是最小/最大值时是 O(n²)。",
        },
        {
          question: "What causes quick sort's worst case?\n什么导致快速排序的最坏情况？",
          options: ["Random data", "Already sorted data with bad pivot", "Duplicate elements", "Large arrays"],
          correctIndex: 1,
          explanation: "Already sorted + always picking first/last as pivot → unbalanced partitions. 已排序 + 总选首/尾作基准 → 不平衡分区。",
        },
        {
          question: "Quick sort's space complexity (in-place version)?\n原地快速排序的空间复杂度？",
          options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
          correctIndex: 2,
          explanation: "O(log n) for the recursion stack (average case). 递归栈需要 O(log n)（平均情况）。",
        },
        {
          question: "Is quick sort stable?\n快速排序是稳定的吗？",
          options: ["Yes", "No", "Only with Lomuto partition", "Only with Hoare partition"],
          correctIndex: 1,
          explanation: "Standard quick sort is NOT stable — partitioning can change relative order of equal elements. 标准快速排序不稳定。",
        },
        {
          question: "What does the partition function do?\n分区函数做什么？",
          options: ["Sorts the array", "Places pivot in correct position with smaller left, bigger right", "Finds the median", "Splits array in half"],
          correctIndex: 1,
          explanation: "Partition places the pivot so all smaller elements are left, all bigger are right. 分区将基准放在正确位置。",
        },
        {
          question: "Which is a good strategy to avoid worst case?\n哪种策略能避免最坏情况？",
          options: ["Always pick first element", "Always pick last element", "Pick random element as pivot", "Don't use quick sort"],
          correctIndex: 2,
          explanation: "Random pivot makes worst case extremely unlikely. 随机基准使最坏情况极不可能。",
        },
        {
          question: "For sorting 1 million integers in memory, which is typically faster?\n对内存中的 100 万整数排序，哪个通常更快？",
          options: ["Merge sort", "Quick sort", "Bubble sort", "They're identical"],
          correctIndex: 1,
          explanation: "Quick sort is typically faster due to better cache performance and less overhead. 快速排序由于更好的缓存性能通常更快。",
        },
      ],
    },
  ],
};

const alg_2_4: Lesson = {
  id: "alg-2-4",
  moduleId: "alg-2",
  title: "Sorting Comparisons",
  subtitle: "Which sort wins? · 排序对比",
  icon: "🏁",
  xp: 20,
  duration: "18 min",
  order: 4,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "⚡",
      content: `## ⚡ Flash: The Ultimate Sorting Showdown!

Now that you know 5 sorting algorithms, let's compare them all! When should you use which?

现在你知道 5 种排序算法了，让我们全面对比！什么时候用哪种？

🎯 **What you'll learn:**
- Comprehensive comparison of all sorts
- When to use each algorithm
- Python's built-in sorting (TimSort)
- The theoretical limit of comparison-based sorting

🔑 **The big picture:**
- O(n²) sorts: Simple, good for small data
- O(n log n) sorts: Fast, good for large data
- O(n log n) is the BEST possible for comparison-based sorting!`,
    },
    {
      type: "code",
      emoji: "🏁",
      content: `## 🏁 Sorting Race!

Let's race all the sorts against each other!
让我们让所有排序比赛！`,
      code: `import time
import random

def bubble_sort(arr):
    arr = arr.copy()
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

def selection_sort(arr):
    arr = arr.copy()
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

def insertion_sort(arr):
    arr = arr.copy()
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Race!
sizes = [100, 500, 1000]
for n in sizes:
    data = [random.randint(1, 10000) for _ in range(n)]
    print(f"\\n🏁 n = {n}:")
    
    for name, func in [("Bubble", bubble_sort), ("Selection", selection_sort), 
                        ("Insertion", insertion_sort), ("Merge", merge_sort),
                        ("Python sort", lambda a: sorted(a))]:
        start = time.time()
        func(data)
        elapsed = time.time() - start
        bar = "█" * min(int(elapsed * 5000), 50)
        print(f"  {name:>12}: {elapsed:.4f}s {bar}")`,
    },
    {
      type: "code",
      emoji: "📊",
      content: `## 📊 The Complete Comparison Table

Let's build an interactive comparison!
让我们来做一个全面对比！`,
      code: `# Comprehensive sorting comparison
sorts = {
    "Bubble Sort": {
        "best": "O(n)", "avg": "O(n²)", "worst": "O(n²)",
        "space": "O(1)", "stable": "Yes", "inplace": "Yes",
        "use_when": "Teaching, tiny arrays"
    },
    "Selection Sort": {
        "best": "O(n²)", "avg": "O(n²)", "worst": "O(n²)",
        "space": "O(1)", "stable": "No", "inplace": "Yes",
        "use_when": "Minimizing swaps"
    },
    "Insertion Sort": {
        "best": "O(n)", "avg": "O(n²)", "worst": "O(n²)",
        "space": "O(1)", "stable": "Yes", "inplace": "Yes",
        "use_when": "Nearly sorted data, small n"
    },
    "Merge Sort": {
        "best": "O(n log n)", "avg": "O(n log n)", "worst": "O(n log n)",
        "space": "O(n)", "stable": "Yes", "inplace": "No",
        "use_when": "Need guaranteed O(n log n), stability"
    },
    "Quick Sort": {
        "best": "O(n log n)", "avg": "O(n log n)", "worst": "O(n²)",
        "space": "O(log n)", "stable": "No", "inplace": "Yes",
        "use_when": "General purpose, large data"
    },
    "Python TimSort": {
        "best": "O(n)", "avg": "O(n log n)", "worst": "O(n log n)",
        "space": "O(n)", "stable": "Yes", "inplace": "No",
        "use_when": "Always! It's optimized for real data"
    },
}

for name, info in sorts.items():
    print(f"{'='*50}")
    print(f"📌 {name}")
    print(f"  Best: {info['best']} | Avg: {info['avg']} | Worst: {info['worst']}")
    print(f"  Space: {info['space']} | Stable: {info['stable']} | In-place: {info['inplace']}")
    print(f"  💡 Use when: {info['use_when']}")

print(f"\\n{'='*50}")
print("🏆 In practice: just use Python's sorted() — it's TimSort!")
print("   But knowing HOW sorts work makes you a better programmer!")`,
    },
    {
      type: "text",
      emoji: "🧠",
      content: `## 🧠 The Lower Bound: Can We Do Better Than O(n log n)?

For **comparison-based** sorting (comparing elements with <, >, ==), the answer is **NO**!

对于**基于比较**的排序，答案是**不能**！

**Proof idea:** With n elements, there are n! possible orderings. Each comparison eliminates at most half the possibilities. So we need at least log₂(n!) ≈ n log n comparisons.

**But wait...** there ARE non-comparison sorts that beat O(n log n):
- **Counting Sort** — O(n + k) where k = range of values
- **Radix Sort** — O(d × n) where d = number of digits
- **Bucket Sort** — O(n) average

These work by exploiting the STRUCTURE of the data, not just comparing!

🔑 **Key takeaway:** O(n log n) is optimal for general sorting. Special data → special algorithms can go faster!`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Choose the Right Sort · 练习：选择合适的排序`,
      exercise: {
        prompt: "Given a nearly sorted array, which sort is fastest? Demonstrate by timing insertion sort vs merge sort on nearly sorted data.",
        promptZh: "对一个几乎排好序的数组，哪种排序最快？通过计时来比较。",
        starterCode: "import time\n\n# Nearly sorted: only 2 elements swapped\narr = list(range(1000))\narr[500], arr[501] = arr[501], arr[500]\n\n# Time insertion sort vs sorted()\n# Your code here",
        expectedOutput: "Insertion sort is faster for nearly sorted data!",
        hint: "Time both sorts. Insertion sort is O(n) on nearly sorted data!",
        hintZh: "计时两种排序。插入排序在几乎排好序的数据上是 O(n)！",
        solution: "import time\n\narr = list(range(1000))\narr[500], arr[501] = arr[501], arr[500]\n\ndef insertion_sort(a):\n    a = a.copy()\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j + 1] = a[j]\n            j -= 1\n        a[j + 1] = key\n    return a\n\nstart = time.time()\ninsertion_sort(arr)\nt1 = time.time() - start\nprint(f'Insertion: {t1:.6f}s')\nprint('Insertion sort is faster for nearly sorted data!')",
      },
    },
    {
      type: "quiz",
      content: "🎓 Sorting Comparison Quiz · 排序对比测验",
      quiz: [
        {
          question: "Which sort is ALWAYS O(n log n)?\n哪种排序始终是 O(n log n)？",
          options: ["Quick sort", "Bubble sort", "Merge sort", "Insertion sort"],
          correctIndex: 2,
          explanation: "Merge sort is O(n log n) in ALL cases — best, average, and worst. 归并排序在所有情况下都是 O(n log n)。",
        },
        {
          question: "What is the lower bound for comparison-based sorting?\n基于比较排序的下界是什么？",
          options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
          correctIndex: 1,
          explanation: "Ω(n log n) is the theoretical lower bound for comparison sorts. 比较排序的理论下界是 Ω(n log n)。",
        },
        {
          question: "Which sort is best for small, nearly-sorted arrays?\n哪种排序最适合小的、几乎排好序的数组？",
          options: ["Merge sort", "Quick sort", "Insertion sort", "Selection sort"],
          correctIndex: 2,
          explanation: "Insertion sort is O(n) on nearly-sorted data and has low overhead. 插入排序在几乎排好序的数据上是 O(n)。",
        },
        {
          question: "What is Python's sorted() function based on?\nPython 的 sorted() 函数基于什么？",
          options: ["Quick sort", "Merge sort", "TimSort", "Heap sort"],
          correctIndex: 2,
          explanation: "TimSort = merge sort + insertion sort, optimized for real-world data. TimSort 是归并排序 + 插入排序的混合。",
        },
        {
          question: "Which sort uses the least extra memory?\n哪种排序使用最少的额外内存？",
          options: ["Merge sort", "TimSort", "Quick sort (in-place)", "All use O(n)"],
          correctIndex: 2,
          explanation: "In-place quick sort uses O(log n) stack space — the least among O(n log n) sorts. 原地快速排序使用 O(log n) 栈空间。",
        },
        {
          question: "Which O(n²) sort makes the fewest swaps?\n哪种 O(n²) 排序做最少的交换？",
          options: ["Bubble sort", "Insertion sort", "Selection sort", "They're all equal"],
          correctIndex: 2,
          explanation: "Selection sort makes exactly n-1 swaps regardless of input. 选择排序无论输入都只做 n-1 次交换。",
        },
        {
          question: "Counting sort can be O(n) because it...\n计数排序能做到 O(n) 因为它……",
          options: ["Is very clever", "Doesn't compare elements", "Uses extra memory", "Both B and C"],
          correctIndex: 3,
          explanation: "Non-comparison sorts avoid the O(n log n) bound by not comparing, using extra space instead. 非比较排序通过不比较来突破下界。",
        },
        {
          question: "For a competition, if you need to sort, what should you use?\n比赛中需要排序，你应该用什么？",
          options: ["Write bubble sort", "Write quick sort", "Use the built-in sort", "Write merge sort"],
          correctIndex: 2,
          explanation: "Always use the language's built-in sort in competitions — it's optimized and correct! 比赛中总用内置排序——经过优化且正确！",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE ALG-3: RECURSION
// ═══════════════════════════════════════════════════════════════

const alg_3_1: Lesson = {
  id: "alg-3-1",
  moduleId: "alg-3",
  title: "What is Recursion?",
  subtitle: "Functions calling themselves · 什么是递归",
  icon: "🪞",
  xp: 20,
  duration: "20 min",
  order: 1,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🌀",
      content: `## 🌀 Spiral Says: Welcome to My World!

I'm **Spiral** 🌀, your recursion guide! Recursion is when a function **calls itself**. Sounds weird? Let me explain!

我是 **螺旋** 🌀，你的递归向导！递归是函数**调用自己**。听起来奇怪？让我解释！

🎯 **What you'll learn:**
- What recursion is (and isn't)
- Base case vs recursive case
- How the call stack works
- When to use recursion

> 🏠 Real-world analogy: Imagine Russian nesting dolls (Matryoshka) 🪆 — open the big one, there's a smaller one inside. Open that, there's an even smaller one. Keep going until you reach the tiniest doll (the base case!).
>
> 现实类比：想象俄罗斯套娃 🪆 —— 打开大的，里面有个小的。打开它，里面还有个更小的。一直到最小的娃娃（基本情况！）。

🔑 **Two rules of recursion:**
1. **Base case** — when to STOP (the smallest doll)
2. **Recursive case** — how to make the problem SMALLER`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Your First Recursive Function

The classic example: countdown!
经典例子：倒计时！`,
      code: `# 🌀 Spiral: "Watch me call myself!"

def countdown(n):
    """Count down from n to 0 — recursively!"""
    print(f"  countdown({n})")
    
    if n <= 0:          # BASE CASE: stop!
        print("  🎉 Blast off!")
        return
    
    countdown(n - 1)    # RECURSIVE CASE: smaller problem

print("🚀 Countdown:")
countdown(5)

print("\\n" + "="*40)

# Another classic: factorial
# n! = n × (n-1) × (n-2) × ... × 1
def factorial(n):
    print(f"  factorial({n})", end="")
    if n <= 1:          # Base case
        print(f" → returns 1")
        return 1
    result = n * factorial(n - 1)  # Recursive case
    print(f"  factorial({n}) → returns {result}")
    return result

print("\\n📐 Factorial:")
print(f"5! = {factorial(5)}")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Recursive Function`,
      concept: {
        title: "Anatomy of a Recursive Function",
        titleZh: "递归函数的结构",
        codeAnatomy: {
          lines: [
            { code: "def factorial(n):", explanation: "Function that will call itself", explanationZh: "将调用自身的函数" },
            { code: "    if n <= 1:", explanation: "BASE CASE: the stopping condition", explanationZh: "基本情况：停止条件" },
            { code: "        return 1", explanation: "Return a known value (don't recurse!)", explanationZh: "返回已知值（不再递归！）" },
            { code: "    return n * factorial(n - 1)", explanation: "RECURSIVE CASE: call self with smaller input", explanationZh: "递归情况：用更小的输入调用自己" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "📚",
      content: `## 📚 The Call Stack — How Recursion Works Inside

Every function call goes on a "stack". Let's see it!
每次函数调用都放在"栈"上。让我们看看！`,
      code: `# Visualize the call stack
def factorial_visual(n, depth=0):
    indent = "│  " * depth + "├─ "
    print(f"{indent}factorial({n})")
    
    if n <= 1:
        print(f"{'│  ' * depth}│  ↩ returns 1")
        return 1
    
    result = n * factorial_visual(n - 1, depth + 1)
    print(f"{'│  ' * depth}│  ↩ returns {n} × ... = {result}")
    return result

print("📚 Call Stack Visualization:")
print()
answer = factorial_visual(5)
print(f"\\nFinal answer: {answer}")

# What happens without a base case?
print("\\n⚠️ Without base case:")
print("def infinite(n):")
print("    return infinite(n)  # Never stops!")
print("# → RecursionError: maximum recursion depth exceeded")
print(f"# Python's default limit: {__import__('sys').getrecursionlimit()}")`,
    },
    {
      type: "code",
      emoji: "🔢",
      content: `## 🔢 More Recursive Examples

Let's practice with different problems!
让我们用不同的问题来练习！`,
      code: `# Sum of list — recursively
def recursive_sum(arr):
    if len(arr) == 0:    # Base case: empty list
        return 0
    return arr[0] + recursive_sum(arr[1:])  # First + sum of rest

print(f"Sum of [1,2,3,4,5]: {recursive_sum([1,2,3,4,5])}")

# Reverse a string — recursively
def reverse_str(s):
    if len(s) <= 1:      # Base case
        return s
    return reverse_str(s[1:]) + s[0]  # Reverse rest + first char

print(f"Reverse 'hello': {reverse_str('hello')}")

# Power function — recursively  
def power(base, exp):
    if exp == 0:         # Base case: x^0 = 1
        return 1
    return base * power(base, exp - 1)

print(f"2^10 = {power(2, 10)}")

# Fibonacci — the classic (but SLOW!)
def fib(n):
    if n <= 1:           # Base cases
        return n
    return fib(n-1) + fib(n-2)

print(f"\\nFibonacci sequence:")
for i in range(10):
    print(f"  fib({i}) = {fib(i)}")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Recursive Sum of Digits · 练习：递归数字之和`,
      exercise: {
        prompt: "Write a recursive function to find the sum of digits of a number. E.g., digit_sum(123) = 1+2+3 = 6.",
        promptZh: "写一个递归函数求数字各位之和。例如 digit_sum(123) = 1+2+3 = 6。",
        starterCode: "def digit_sum(n):\n    # Base case: single digit\n    # Recursive case: last digit + digit_sum(rest)\n    pass\n\nprint(digit_sum(123))  # 6\nprint(digit_sum(9999)) # 36",
        expectedOutput: "6\n36",
        hint: "Last digit: n % 10. Rest: n // 10. Base case: n < 10.",
        hintZh: "最后一位：n % 10。其余：n // 10。基本情况：n < 10。",
        solution: "def digit_sum(n):\n    if n < 10:\n        return n\n    return n % 10 + digit_sum(n // 10)\n\nprint(digit_sum(123))\nprint(digit_sum(9999))",
      },
    },
    {
      type: "quiz",
      content: "🎓 Recursion Basics Quiz · 递归基础测验",
      quiz: [
        {
          question: "What are the two parts every recursive function needs?\n每个递归函数需要哪两部分？",
          options: ["Input and output", "Base case and recursive case", "Loop and condition", "Start and end"],
          correctIndex: 1,
          explanation: "Base case (when to stop) + recursive case (how to get smaller). 基本情况 + 递归情况。",
        },
        {
          question: "What happens without a base case?\n没有基本情况会怎样？",
          options: ["Function returns 0", "Infinite recursion (stack overflow)", "Nothing happens", "It runs faster"],
          correctIndex: 1,
          explanation: "Without a base case, the function calls itself forever until stack overflow! 没有基本情况会无限递归直到栈溢出！",
        },
        {
          question: "What is factorial(0)?\nfactorial(0) 是多少？",
          options: ["0", "1", "undefined", "-1"],
          correctIndex: 1,
          explanation: "0! = 1 by definition. This is often the base case. 0! = 1 是定义。这通常是基本情况。",
        },
        {
          question: "How many function calls does factorial(5) make?\nfactorial(5) 做几次函数调用？",
          options: ["4", "5", "6", "10"],
          correctIndex: 2,
          explanation: "factorial(5)→factorial(4)→factorial(3)→factorial(2)→factorial(1)→factorial(0) = 6 calls. 6 次调用。",
        },
        {
          question: "What data structure does recursion use internally?\n递归内部使用什么数据结构？",
          options: ["Queue", "Array", "Call stack", "Hash map"],
          correctIndex: 2,
          explanation: "Each recursive call is pushed onto the call stack. 每次递归调用都被压入调用栈。",
        },
        {
          question: "Can every loop be written as recursion?\n每个循环都能写成递归吗？",
          options: ["Yes", "No", "Only for loops", "Only while loops"],
          correctIndex: 0,
          explanation: "Yes! Every iterative solution can be converted to recursion (and vice versa). 是的！每个迭代解都能转换为递归。",
        },
        {
          question: "What is Python's default recursion limit?\nPython 默认递归限制是多少？",
          options: ["100", "1000", "10000", "No limit"],
          correctIndex: 1,
          explanation: "Python's default recursion limit is 1000. 默认限制是 1000。",
        },
        {
          question: "reverse_str('abc') using our recursive function returns?\n用递归函数 reverse_str('abc') 返回？",
          options: ["'abc'", "'cba'", "'bca'", "'cab'"],
          correctIndex: 1,
          explanation: "reverse('bc') + 'a' → reverse('c') + 'b' + 'a' → 'c' + 'b' + 'a' = 'cba'",
        },
      ],
    },
  ],
};

const alg_3_2: Lesson = {
  id: "alg-3-2",
  moduleId: "alg-3",
  title: "Recursive Patterns",
  subtitle: "Common recursive techniques · 递归模式",
  icon: "🔄",
  xp: 25,
  duration: "22 min",
  order: 2,
  gradeRange: [8, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🌀",
      content: `## 🌀 Spiral: Mastering Recursive Patterns!

Now that you understand the basics, let's learn the common PATTERNS you'll see again and again!

现在你理解了基础，让我们学习反复出现的常见模式！

🎯 **What you'll learn:**
- Linear recursion (process one element at a time)
- Tree recursion (split into multiple subproblems)
- Tail recursion (optimization trick)
- Helper function pattern

🔑 **The secret to recursion:** Think about ONE step, trust that recursion handles the rest!
递归的秘密：只想一步，相信递归处理其余的！`,
    },
    {
      type: "code",
      emoji: "📏",
      content: `## 📏 Pattern 1: Linear Recursion

Process one element, recurse on the rest.
处理一个元素，对其余递归。`,
      code: `# Pattern: f(list) = do_something(first) + f(rest)

# Example 1: Check if palindrome
def is_palindrome(s):
    if len(s) <= 1:
        return True
    if s[0] != s[-1]:
        return False
    return is_palindrome(s[1:-1])

words = ["racecar", "hello", "madam", "python", "level"]
for w in words:
    print(f"  '{w}' → {'✅ palindrome' if is_palindrome(w) else '❌ not palindrome'}")

# Example 2: Count occurrences
def count(arr, target):
    if not arr:
        return 0
    return (1 if arr[0] == target else 0) + count(arr[1:], target)

data = [1, 3, 2, 3, 3, 5, 3]
print(f"\\nCount of 3 in {data}: {count(data, 3)}")

# Example 3: Maximum in list
def find_max(arr):
    if len(arr) == 1:
        return arr[0]
    rest_max = find_max(arr[1:])
    return arr[0] if arr[0] > rest_max else rest_max

print(f"Max of [3,7,2,9,4]: {find_max([3,7,2,9,4])}")`,
    },
    {
      type: "code",
      emoji: "🌳",
      content: `## 🌳 Pattern 2: Tree Recursion

Split into MULTIPLE subproblems — creates a tree of calls!
分成多个子问题——创建调用树！`,
      code: `# Fibonacci — classic tree recursion
# fib(n) = fib(n-1) + fib(n-2)

call_count = 0

def fib(n):
    global call_count
    call_count += 1
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# Show how many calls tree recursion makes
for i in [5, 10, 15, 20, 25]:
    call_count = 0
    result = fib(i)
    print(f"fib({i:2d}) = {result:6d}  ({call_count:>8,} function calls)")

# Visualize the call tree for small n
print("\\n🌳 Call tree for fib(5):")
print("            fib(5)")
print("           /     \\\\")
print("       fib(4)    fib(3)")
print("       /   \\\\     /   \\\\")
print("   fib(3) fib(2) fib(2) fib(1)")
print("    / \\\\    / \\\\    / \\\\")
print("  f(2) f(1) f(1) f(0) f(1) f(0)")
print("  / \\\\")
print("f(1) f(0)")
print()
print("⚠️ Notice: fib(3) computed TWICE, fib(2) computed THREE times!")
print("   This is why naive tree recursion can be very slow!")
print("   Solution: Dynamic Programming (coming up!) 🧩")`,
    },
    {
      type: "code",
      emoji: "🔧",
      content: `## 🔧 Pattern 3: Helper Function & Accumulator

Use a helper with an "accumulator" to avoid rebuilding results.
用带"累加器"的辅助函数避免重建结果。`,
      code: `# Without accumulator (builds result on return)
def factorial_v1(n):
    if n <= 1: return 1
    return n * factorial_v1(n - 1)

# With accumulator (tail-recursive style)
def factorial_v2(n, acc=1):
    if n <= 1: return acc
    return factorial_v2(n - 1, acc * n)

print(f"factorial_v1(5) = {factorial_v1(5)}")
print(f"factorial_v2(5) = {factorial_v2(5)}")

# Reverse list with accumulator
def reverse_list(arr, acc=None):
    if acc is None: acc = []
    if not arr:
        return acc
    return reverse_list(arr[1:], [arr[0]] + acc)

print(f"\\nReverse [1,2,3,4,5]: {reverse_list([1,2,3,4,5])}")

# Flatten a nested list
def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))  # Recurse on nested lists
        else:
            result.append(item)
    return result

nested = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]]
print(f"\\nFlatten {nested}:")
print(f"  → {flatten(nested)}")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Recursive Power · 练习：递归求幂`,
      exercise: {
        prompt: "Write a FAST recursive power function using the pattern: x^n = (x^(n/2))^2 for even n.",
        promptZh: "写一个快速递归求幂函数，利用模式：x^n = (x^(n/2))^2（n为偶数时）。",
        starterCode: "def fast_power(x, n):\n    if n == 0:\n        return 1\n    # Your code: if n is even, use x^n = (x^(n/2))^2\n    # if n is odd, use x^n = x * x^(n-1)\n    pass\n\nprint(fast_power(2, 10))  # 1024",
        expectedOutput: "1024",
        hint: "Even: half = fast_power(x, n//2), return half * half. Odd: return x * fast_power(x, n-1).",
        hintZh: "偶数：half = fast_power(x, n//2)，返回 half * half。奇数：返回 x * fast_power(x, n-1)。",
        solution: "def fast_power(x, n):\n    if n == 0:\n        return 1\n    if n % 2 == 0:\n        half = fast_power(x, n // 2)\n        return half * half\n    else:\n        return x * fast_power(x, n - 1)\n\nprint(fast_power(2, 10))",
      },
    },
    {
      type: "text",
      emoji: "📋",
      content: `## 📋 Recursion Patterns Summary

| Pattern | Structure | Example |
|---------|-----------|---------|
| **Linear** | f(n) = process + f(n-1) | Factorial, list sum |
| **Tree** | f(n) = f(n-1) + f(n-2) | Fibonacci, combinations |
| **Divide & Conquer** | f(n) = merge(f(left), f(right)) | Merge sort, binary search |
| **Accumulator** | f(n, acc) = f(n-1, update(acc)) | Tail-recursive sum |
| **Mutual** | f calls g, g calls f | Even/odd check |

🔑 **Tips for writing recursive functions:**
1. Define the base case FIRST
2. Trust the recursion — assume smaller calls work
3. Make sure each call gets CLOSER to the base case
4. Draw the recursion tree if confused`,
    },
    {
      type: "quiz",
      content: "🎓 Recursive Patterns Quiz · 递归模式测验",
      quiz: [
        {
          question: "In tree recursion, how many recursive calls does each function make?\n在树递归中，每个函数做几次递归调用？",
          options: ["1", "2 or more", "0", "It varies randomly"],
          correctIndex: 1,
          explanation: "Tree recursion makes 2+ recursive calls per function, creating a tree structure. 树递归每次做2+个递归调用。",
        },
        {
          question: "What is the time complexity of naive recursive Fibonacci?\n朴素递归 Fibonacci 的时间复杂度？",
          options: ["O(n)", "O(n²)", "O(2ⁿ)", "O(n log n)"],
          correctIndex: 2,
          explanation: "Each call spawns 2 more calls → exponential O(2ⁿ). Very slow! 每次调用产生 2 个调用 → 指数级。",
        },
        {
          question: "What pattern does this use: f(list) = process(first) + f(rest)?\n这用了什么模式：f(list) = process(first) + f(rest)？",
          options: ["Tree recursion", "Linear recursion", "Tail recursion", "Mutual recursion"],
          correctIndex: 1,
          explanation: "Processing one element and recursing on the rest = linear recursion. 处理一个元素，对其余递归 = 线性递归。",
        },
        {
          question: "What is an accumulator in recursion?\n递归中的累加器是什么？",
          options: ["A loop counter", "A parameter that carries the result so far", "A global variable", "The return value"],
          correctIndex: 1,
          explanation: "An accumulator is a parameter that builds up the result as recursion progresses. 累加器是随递归推进构建结果的参数。",
        },
        {
          question: "Why is naive recursive Fibonacci slow?\n为什么朴素递归 Fibonacci 很慢？",
          options: ["Too many base cases", "It recomputes the same values many times", "Python is slow", "The numbers get too big"],
          correctIndex: 1,
          explanation: "fib(3) is computed multiple times! Overlapping subproblems → use DP! 重复计算相同的值！",
        },
        {
          question: "What does flatten([1, [2, [3]]]) return?\nflatten([1, [2, [3]]]) 返回什么？",
          options: ["[1, 2, 3]", "[[1, 2, 3]]", "[1, [2, 3]]", "Error"],
          correctIndex: 0,
          explanation: "Flatten recursively unpacks all nested lists into a single flat list. 递归展开所有嵌套列表。",
        },
        {
          question: "Fast power x^10 makes how many multiplications?\n快速幂 x^10 做几次乘法？",
          options: ["10", "5", "4", "3"],
          correctIndex: 2,
          explanation: "x^10 = (x^5)^2, x^5 = x·(x^2)^2, x^2 = x·x → about 4 multiplications. 大约 4 次乘法。",
        },
        {
          question: "Which is NOT a valid base case for recursive list processing?\n哪个不是递归列表处理的有效基本情况？",
          options: ["Empty list", "Single element list", "List of length n", "None of these"],
          correctIndex: 2,
          explanation: "The base case should be the SIMPLEST case (empty or single element), not a general n. 基本情况应该是最简单的情况。",
        },
      ],
    },
  ],
};

const alg_3_3: Lesson = {
  id: "alg-3-3",
  moduleId: "alg-3",
  title: "Backtracking",
  subtitle: "Try, fail, try again · 回溯法",
  icon: "🔙",
  xp: 30,
  duration: "25 min",
  order: 3,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🌀",
      content: `## 🌀 Spiral: The Art of Trying and Undoing!

**Backtracking** is like exploring a maze: try a path, hit a dead end, go BACK and try another path!

**回溯法**就像探索迷宫：试一条路，走到死胡同，退回来试另一条！

🎯 **What you'll learn:**
- The backtracking template
- Generate permutations and combinations
- Solve puzzles (N-Queens, Sudoku concepts)

> 🏠 Real-world analogy: Imagine trying every combination on a lock 🔐. Try 0-0-0, then 0-0-1, 0-0-2... If you know the first digit is wrong, skip ALL combinations starting with that digit! That's backtracking — pruning bad branches early!
>
> 现实类比：想象尝试密码锁的每种组合。如果你知道第一位不对，跳过所有以那个数字开头的组合！这就是回溯——早早剪掉坏分支！

🔑 **Backtracking = DFS + pruning = try all possibilities smartly**`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Backtracking Template

The universal template for backtracking problems!
回溯问题的通用模板！`,
      code: `# 🌀 The Backtracking Template
# def backtrack(state):
#     if is_solution(state):
#         record(state)
#         return
#     for choice in get_choices(state):
#         if is_valid(choice):
#             make_choice(choice)
#             backtrack(state)
#             undo_choice(choice)  ← THIS is the "backtrack"!

# Example: Generate all subsets of [1, 2, 3]
def subsets(nums):
    result = []
    
    def backtrack(start, current):
        result.append(current[:])  # Record current subset
        print(f"  Subset: {current}")
        
        for i in range(start, len(nums)):
            current.append(nums[i])       # Choose
            backtrack(i + 1, current)      # Explore
            current.pop()                  # Undo (backtrack!)
    
    backtrack(0, [])
    return result

print("📦 All subsets of [1, 2, 3]:")
result = subsets([1, 2, 3])
print(f"\\nTotal: {len(result)} subsets")`,
    },
    {
      type: "code",
      emoji: "🔢",
      content: `## 🔢 Permutations — All Arrangements

Generate all orderings of a list!
生成列表的所有排列！`,
      code: `def permutations(nums):
    result = []
    used = [False] * len(nums)
    
    def backtrack(current):
        if len(current) == len(nums):
            result.append(current[:])
            return
        
        for i in range(len(nums)):
            if used[i]:
                continue
            
            used[i] = True                # Choose
            current.append(nums[i])
            backtrack(current)            # Explore
            current.pop()                 # Undo
            used[i] = False               # Undo
    
    backtrack([])
    return result

print("🔢 Permutations of [1, 2, 3]:")
perms = permutations([1, 2, 3])
for p in perms:
    print(f"  {p}")
print(f"Total: {len(perms)} (= 3! = 6)")

# With strings!
print("\\n🔤 Permutations of 'ABC':")
str_perms = permutations(list("ABC"))
for p in str_perms:
    print(f"  {''.join(p)}")`,
    },
    {
      type: "code",
      emoji: "👑",
      content: `## 👑 N-Queens: The Classic Backtracking Problem

Place N queens on an N×N board so no two attack each other!
在 N×N 棋盘上放 N 个皇后，使它们互不攻击！`,
      code: `def solve_n_queens(n):
    solutions = []
    board = [['.' for _ in range(n)] for _ in range(n)]
    
    def is_safe(row, col):
        # Check column
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        # Check upper-left diagonal
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == 'Q': return False
            i -= 1; j -= 1
        # Check upper-right diagonal
        i, j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == 'Q': return False
            i -= 1; j += 1
        return True
    
    def backtrack(row):
        if row == n:
            solutions.append([''.join(r) for r in board])
            return
        for col in range(n):
            if is_safe(row, col):
                board[row][col] = 'Q'    # Place queen
                backtrack(row + 1)        # Next row
                board[row][col] = '.'    # Remove queen (backtrack!)
    
    backtrack(0)
    return solutions

# Solve for 4-Queens
print("👑 4-Queens Solutions:")
sols = solve_n_queens(4)
for i, sol in enumerate(sols):
    print(f"\\nSolution {i+1}:")
    for row in sol:
        print(f"  {' '.join(row)}")

print(f"\\n📊 Number of solutions for different N:")
for n in range(1, 9):
    print(f"  {n}-Queens: {len(solve_n_queens(n))} solutions")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Backtracking Template`,
      concept: {
        title: "Backtracking — The Three Steps",
        titleZh: "回溯——三个步骤",
        codeAnatomy: {
          lines: [
            { code: "if is_solution(state):", explanation: "Check if we found a complete solution", explanationZh: "检查是否找到完整解" },
            { code: "    record(state); return", explanation: "Save the solution and stop this branch", explanationZh: "保存解并停止这个分支" },
            { code: "for choice in choices:", explanation: "Try each possible next step", explanationZh: "尝试每个可能的下一步" },
            { code: "    if is_valid(choice):", explanation: "Prune: skip invalid choices early", explanationZh: "剪枝：早早跳过无效选择" },
            { code: "    make_choice()", explanation: "CHOOSE: apply the decision", explanationZh: "选择：应用决定" },
            { code: "    backtrack(next_state)", explanation: "EXPLORE: recurse with updated state", explanationZh: "探索：用更新状态递归" },
            { code: "    undo_choice()", explanation: "UNCHOOSE: undo to try next option", explanationZh: "撤销：取消以尝试下一个选项" },
          ],
        },
      },
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Generate Combinations · 练习：生成组合`,
      exercise: {
        prompt: "Generate all combinations of k numbers from [1..n]. E.g., combine(4, 2) = [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
        promptZh: "生成从 [1..n] 中选 k 个数的所有组合。",
        starterCode: "def combine(n, k):\n    result = []\n    def backtrack(start, current):\n        if len(current) == k:\n            result.append(current[:])\n            return\n        # Your code: try each number from start to n\n        pass\n    backtrack(1, [])\n    return result\n\nprint(combine(4, 2))",
        expectedOutput: "[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]",
        hint: "Loop from start to n+1. Append number, backtrack(i+1, current), pop.",
        hintZh: "从 start 循环到 n+1。追加数字，backtrack(i+1, current)，弹出。",
        solution: "def combine(n, k):\n    result = []\n    def backtrack(start, current):\n        if len(current) == k:\n            result.append(current[:])\n            return\n        for i in range(start, n + 1):\n            current.append(i)\n            backtrack(i + 1, current)\n            current.pop()\n    backtrack(1, [])\n    return result\n\nprint(combine(4, 2))",
      },
    },
    {
      type: "quiz",
      content: "🎓 Backtracking Quiz · 回溯法测验",
      quiz: [
        {
          question: "What makes backtracking different from brute force?\n回溯法和暴力搜索有什么不同？",
          options: ["Nothing, they're the same", "Backtracking prunes invalid branches early", "Backtracking uses less memory", "Backtracking is always faster"],
          correctIndex: 1,
          explanation: "Backtracking prunes (skips) branches that can't lead to valid solutions. 回溯法剪掉不能产生有效解的分支。",
        },
        {
          question: "The 'undo' step in backtracking is essential because...?\n回溯中的「撤销」步骤很重要因为……？",
          options: ["It saves memory", "It lets us try other choices at the same position", "It makes the code cleaner", "It's optional"],
          correctIndex: 1,
          explanation: "Undoing lets us explore all alternatives — try choice A, undo, try choice B, etc. 撤销让我们探索所有替代方案。",
        },
        {
          question: "How many subsets does a set of n elements have?\nn 个元素的集合有多少子集？",
          options: ["n", "n²", "2ⁿ", "n!"],
          correctIndex: 2,
          explanation: "Each element is either included or not: 2 choices × n elements = 2ⁿ subsets. 每个元素要么选要么不选。",
        },
        {
          question: "How many permutations of n elements?\nn 个元素有多少排列？",
          options: ["n", "2ⁿ", "n²", "n!"],
          correctIndex: 3,
          explanation: "n choices × (n-1) × (n-2) × ... × 1 = n! permutations. n! 个排列。",
        },
        {
          question: "In N-Queens, what does 'is_safe' check?\n在 N 皇后中，'is_safe' 检查什么？",
          options: ["Only the row", "Row and column", "Row, column, and both diagonals", "All 8 directions"],
          correctIndex: 2,
          explanation: "Queens attack along rows, columns, and diagonals. We only check upward since we place top-to-bottom. 检查行、列和两条对角线。",
        },
        {
          question: "Backtracking explores solutions like which traversal?\n回溯法像哪种遍历方式探索解？",
          options: ["BFS (breadth-first)", "DFS (depth-first)", "Random", "Level-order"],
          correctIndex: 1,
          explanation: "Backtracking is essentially DFS on the decision tree! 回溯法本质上是决策树上的 DFS！",
        },
        {
          question: "What is 'pruning' in backtracking?\n回溯法中的「剪枝」是什么？",
          options: ["Removing solutions", "Skipping branches that can't lead to valid solutions", "Cutting the array in half", "Removing duplicates"],
          correctIndex: 1,
          explanation: "Pruning skips invalid branches early, avoiding unnecessary work. 剪枝提前跳过无效分支。",
        },
        {
          question: "The 4-Queens problem has how many solutions?\n4 皇后问题有多少个解？",
          options: ["0", "1", "2", "4"],
          correctIndex: 2,
          explanation: "The 4-Queens problem has exactly 2 solutions. 4 皇后问题恰好有 2 个解。",
        },
      ],
    },
  ],
};

const alg_3_4: Lesson = {
  id: "alg-3-4",
  moduleId: "alg-3",
  title: "Divide & Conquer",
  subtitle: "Split, solve, combine · 分治法",
  icon: "✂️",
  xp: 25,
  duration: "22 min",
  order: 4,
  gradeRange: [8, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🌀",
      content: `## 🌀 Spiral: The Power of Splitting!

**Divide and Conquer** is a strategy: break a big problem into smaller pieces, solve each piece, combine the answers!

**分治法**是一种策略：把大问题分成小块，解决每块，合并答案！

🎯 **What you'll learn:**
- The D&C template: divide → conquer → combine
- Classic examples: merge sort, quick sort, binary search
- New examples: maximum subarray, counting inversions

> 🏠 Real-world analogy: Imagine counting people at a HUGE concert 🎵:
> 1. **Divide**: Split the audience into left and right halves
> 2. **Conquer**: Count each half (they split further)
> 3. **Combine**: Add the two counts
> Much easier than counting 50,000 people one by one!

🔑 **D&C works when:** The problem can be split into independent subproblems of the same type!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 D&C Example: Maximum Subarray Sum

Find the contiguous subarray with the largest sum!
找到连续子数组的最大和！`,
      code: `# Kadane's is O(n), but let's see the D&C approach!
# It teaches the pattern beautifully.

def max_subarray_dc(arr, left=0, right=None):
    if right is None:
        right = len(arr) - 1
    
    # Base case: single element
    if left == right:
        return arr[left]
    
    mid = (left + right) // 2
    
    # DIVIDE: solve left and right halves
    left_max = max_subarray_dc(arr, left, mid)
    right_max = max_subarray_dc(arr, mid + 1, right)
    
    # COMBINE: find max crossing subarray
    # (subarray that crosses the midpoint)
    left_sum = float('-inf')
    total = 0
    for i in range(mid, left - 1, -1):
        total += arr[i]
        left_sum = max(left_sum, total)
    
    right_sum = float('-inf')
    total = 0
    for i in range(mid + 1, right + 1):
        total += arr[i]
        right_sum = max(right_sum, total)
    
    cross_max = left_sum + right_sum
    
    return max(left_max, right_max, cross_max)

# Test
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(f"Array: {arr}")
print(f"Max subarray sum: {max_subarray_dc(arr)}")

# Compare with Kadane's O(n) solution
def kadane(arr):
    max_sum = curr_sum = arr[0]
    for x in arr[1:]:
        curr_sum = max(x, curr_sum + x)
        max_sum = max(max_sum, curr_sum)
    return max_sum

print(f"Kadane's answer: {kadane(arr)}")`,
    },
    {
      type: "code",
      emoji: "🔢",
      content: `## 🔢 D&C: Counting Inversions

Count how "unsorted" an array is. Used in recommendation systems!
计算数组有多"无序"。用于推荐系统！`,
      code: `# An inversion is a pair (i,j) where i < j but arr[i] > arr[j]
# Brute force: O(n²). D&C: O(n log n)!

def count_inversions(arr):
    if len(arr) <= 1:
        return arr, 0
    
    mid = len(arr) // 2
    left, left_inv = count_inversions(arr[:mid])
    right, right_inv = count_inversions(arr[mid:])
    
    # Merge and count cross inversions
    merged = []
    cross_inv = 0
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            # All remaining left elements are > right[j]
            cross_inv += len(left) - i
            j += 1
    
    merged.extend(left[i:])
    merged.extend(right[j:])
    
    return merged, left_inv + right_inv + cross_inv

# Test
arrays = [
    [1, 2, 3, 4, 5],    # sorted: 0 inversions
    [5, 4, 3, 2, 1],    # reverse sorted: max inversions
    [2, 4, 1, 3, 5],    # partially sorted
]

for arr in arrays:
    _, inv = count_inversions(arr)
    print(f"  {arr} → {inv} inversions")

# Max inversions for n elements = n(n-1)/2
n = 5
print(f"\\nMax inversions for {n} elements: {n*(n-1)//2}")`,
    },
    {
      type: "code",
      emoji: "⚡",
      content: `## ⚡ Fast Exponentiation — D&C Style

Compute x^n in O(log n) instead of O(n)!
用 O(log n) 而非 O(n) 计算 x^n！`,
      code: `# D&C: x^n = (x^(n/2))^2 if n even
#       x^n = x * x^(n-1) if n odd

def fast_pow(x, n, depth=0):
    indent = "  " * depth
    print(f"{indent}pow({x}, {n})")
    
    if n == 0:
        return 1
    if n == 1:
        return x
    
    if n % 2 == 0:
        half = fast_pow(x, n // 2, depth + 1)
        result = half * half
    else:
        result = x * fast_pow(x, n - 1, depth + 1)
    
    print(f"{indent}  = {result}")
    return result

print("⚡ Fast Power: 2^16")
result = fast_pow(2, 16)
print(f"\\nAnswer: {result}")
print(f"Steps: ~log₂(16) = 4 multiplications instead of 16!")

# Compare step count
def count_steps_naive(x, n):
    steps = 0
    result = 1
    for _ in range(n):
        result *= x
        steps += 1
    return steps

def count_steps_fast(n):
    if n <= 1: return n
    if n % 2 == 0:
        return 1 + count_steps_fast(n // 2)
    return 1 + count_steps_fast(n - 1)

print(f"\\n📊 Steps comparison:")
for n in [8, 16, 32, 64, 1000]:
    print(f"  x^{n}: naive={count_steps_naive(2,n)} vs fast={count_steps_fast(n)} steps")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: D&C Min and Max · 练习：分治法求最大最小值`,
      exercise: {
        prompt: "Find both min AND max of an array using D&C with fewer comparisons than naive approach.",
        promptZh: "用分治法同时找数组的最大和最小值，比较次数比暴力法更少。",
        starterCode: "def min_max(arr, left=0, right=None):\n    if right is None:\n        right = len(arr) - 1\n    # Base case: 1 element\n    if left == right:\n        return arr[left], arr[left]\n    # Your D&C code here\n    pass\n\nprint(min_max([3, 5, 1, 8, 2, 9, 4]))",
        expectedOutput: "(1, 9)",
        hint: "Split in half. Get min/max of each half. Compare the two mins and two maxes.",
        hintZh: "分成两半。分别求每半的最大最小值。比较两个最小值和两个最大值。",
        solution: "def min_max(arr, left=0, right=None):\n    if right is None:\n        right = len(arr) - 1\n    if left == right:\n        return arr[left], arr[left]\n    if right - left == 1:\n        return (min(arr[left], arr[right]), max(arr[left], arr[right]))\n    mid = (left + right) // 2\n    min1, max1 = min_max(arr, left, mid)\n    min2, max2 = min_max(arr, mid + 1, right)\n    return (min(min1, min2), max(max1, max2))\n\nprint(min_max([3, 5, 1, 8, 2, 9, 4]))",
      },
    },
    {
      type: "text",
      emoji: "📋",
      content: `## 📋 Divide & Conquer Summary

| Algorithm | Divide | Conquer | Combine | Time |
|-----------|--------|---------|---------|------|
| Binary Search | Split in half | Search one half | — | O(log n) |
| Merge Sort | Split in half | Sort halves | Merge | O(n log n) |
| Quick Sort | Partition | Sort partitions | — | O(n log n) avg |
| Max Subarray | Split in half | Solve halves | Find crossing | O(n log n) |
| Fast Power | Split exponent | Compute half | Square | O(log n) |

🔑 **When to use D&C:**
- Problem can be split into same-type subproblems
- Combining solutions is efficient
- Subproblems are independent (no overlap)
- If subproblems overlap → use Dynamic Programming instead!`,
    },
    {
      type: "quiz",
      content: "🎓 Divide & Conquer Quiz · 分治法测验",
      quiz: [
        {
          question: "What are the three steps of divide and conquer?\n分治法的三个步骤是什么？",
          options: ["Plan, execute, review", "Divide, conquer, combine", "Sort, search, merge", "Input, process, output"],
          correctIndex: 1,
          explanation: "Divide (split), Conquer (solve subproblems), Combine (merge results). 分、治、合。",
        },
        {
          question: "When should you use D&C instead of DP?\n什么时候用分治法而不是动态规划？",
          options: ["When subproblems overlap", "When subproblems are independent", "Always", "Never"],
          correctIndex: 1,
          explanation: "D&C for independent subproblems, DP for overlapping subproblems. 独立子问题用分治，重叠子问题用 DP。",
        },
        {
          question: "Fast exponentiation computes x^1000 in about how many steps?\n快速幂计算 x^1000 大约需要几步？",
          options: ["1000", "500", "~10", "~100"],
          correctIndex: 2,
          explanation: "log₂(1000) ≈ 10. D&C reduces exponential to logarithmic! 大约 10 步。",
        },
        {
          question: "The Master Theorem helps analyze which algorithms?\n主定理帮助分析哪种算法？",
          options: ["All algorithms", "Only sorting", "D&C recurrences of form T(n) = aT(n/b) + f(n)", "Only binary search"],
          correctIndex: 2,
          explanation: "The Master Theorem solves recurrences of the form T(n) = aT(n/b) + f(n). 主定理解决 D&C 递推式。",
        },
        {
          question: "Counting inversions uses which D&C algorithm as a base?\n计数逆序对基于哪个 D&C 算法？",
          options: ["Binary search", "Quick sort", "Merge sort", "Fast power"],
          correctIndex: 2,
          explanation: "Counting inversions modifies merge sort to count while merging. 修改归并排序在合并时计数。",
        },
        {
          question: "What is the recurrence for merge sort?\n归并排序的递推式是什么？",
          options: ["T(n) = T(n-1) + O(1)", "T(n) = 2T(n/2) + O(n)", "T(n) = T(n/2) + O(1)", "T(n) = 2T(n-1) + O(1)"],
          correctIndex: 1,
          explanation: "Two subproblems of size n/2, plus O(n) merge step. 两个 n/2 大小的子问题，加 O(n) 合并。",
        },
        {
          question: "Which is NOT a divide and conquer algorithm?\n哪个不是分治算法？",
          options: ["Merge sort", "Binary search", "Dijkstra's algorithm", "Quick sort"],
          correctIndex: 2,
          explanation: "Dijkstra's is a greedy algorithm, not divide and conquer. Dijkstra 是贪心算法。",
        },
        {
          question: "D&C min-max finds both min and max using ~3n/2 comparisons instead of?\n分治求最大最小值用约 3n/2 次比较而不是？",
          options: ["n", "n log n", "2n - 2", "n²"],
          correctIndex: 2,
          explanation: "Naive approach: n-1 for min + n-1 for max = 2n-2. D&C: ~3n/2. 暴力法需要 2n-2 次。",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE ALG-4: DYNAMIC PROGRAMMING
// ═══════════════════════════════════════════════════════════════

const alg_4_1: Lesson = {
  id: "alg-4-1",
  moduleId: "alg-4",
  title: "Memoization",
  subtitle: "Remember past results · 记忆化",
  icon: "🧠",
  xp: 25,
  duration: "22 min",
  order: 1,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🧩",
      content: `## 🧩 Puzzle Says: Don't Repeat Yourself!

I'm **Puzzle** 🧩, your DP strategist! Dynamic Programming is all about **not solving the same problem twice**.

我是 **拼图** 🧩，你的 DP 策略师！动态规划的核心是**不重复解决同一个问题**。

🎯 **What you'll learn:**
- Why recursion can be SLOW (overlapping subproblems)
- Memoization: caching results of function calls
- From exponential to polynomial!

> 🏠 Real-world analogy: Imagine your teacher asks "What's 7×8?" every class. The first time you calculate: 56. But from then on, you just REMEMBER the answer! That's memoization — solving once, remembering forever!
>
> 现实类比：想象老师每节课都问"7×8等于多少？"第一次你要算：56。之后你直接记住答案！这就是记忆化——解决一次，永远记住！

🔑 **DP = recursion + memoization (top-down) OR iteration + table (bottom-up)**`,
    },
    {
      type: "code",
      emoji: "🐌",
      content: `## 🐌 The Problem: Slow Fibonacci

Naive recursive Fibonacci is EXPONENTIALLY slow. Let's see why!
朴素递归 Fibonacci 指数级慢。让我们看看为什么！`,
      code: `import time

# 🐌 Naive Fibonacci — O(2^n)
call_count = 0
def fib_naive(n):
    global call_count
    call_count += 1
    if n <= 1:
        return n
    return fib_naive(n-1) + fib_naive(n-2)

# Time it for increasing n
print("🐌 Naive Fibonacci (exponential!):")
for n in [10, 20, 25, 30, 35]:
    call_count = 0
    start = time.time()
    result = fib_naive(n)
    elapsed = time.time() - start
    print(f"  fib({n:2d}) = {result:>10,}  calls: {call_count:>12,}  time: {elapsed:.4f}s")

print("\\n⚠️ Notice how calls EXPLODE! fib(35) makes 18 million calls!")
print("   fib(50) would take minutes... fib(100) would take YEARS!")
print("\\n🤔 Why? Because we recompute the SAME values over and over!")
print("   fib(5) calls fib(3) TWICE, fib(2) THREE times, etc.")`,
    },
    {
      type: "code",
      emoji: "⚡",
      content: `## ⚡ The Fix: Memoization!

Cache every result. Never compute the same thing twice!
缓存每个结果。永远不重复计算！`,
      code: `import time

# ⚡ Memoized Fibonacci — O(n)
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

print("⚡ Memoized Fibonacci (linear!):")
for n in [10, 20, 50, 100, 500]:
    memo = {}
    start = time.time()
    result = fib_memo(n, memo)
    elapsed = time.time() - start
    # Show first 20 digits for big numbers
    result_str = str(result)
    if len(result_str) > 20:
        result_str = result_str[:20] + f"... ({len(result_str)} digits)"
    print(f"  fib({n:3d}) = {result_str}  time: {elapsed:.6f}s  cached: {len(memo)} values")

print("\\n🎉 fib(500) in microseconds! Was impossible without memoization!")

# Python's built-in way: @functools.lru_cache
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_cached(n):
    if n <= 1: return n
    return fib_cached(n-1) + fib_cached(n-2)

print(f"\\n🐍 Python's @lru_cache:")
print(f"  fib(100) = {fib_cached(100)}")
print(f"  Cache info: {fib_cached.cache_info()}")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Memoization Pattern`,
      concept: {
        title: "Memoization — The Pattern",
        titleZh: "记忆化——模式解析",
        codeAnatomy: {
          lines: [
            { code: "def solve(n, memo={}):", explanation: "Function with a memo dictionary", explanationZh: "带备忘录字典的函数" },
            { code: "    if n in memo:", explanation: "Check if we already computed this", explanationZh: "检查是否已经计算过" },
            { code: "        return memo[n]", explanation: "Return cached result — O(1)!", explanationZh: "返回缓存结果 — O(1)！" },
            { code: "    # ... compute result ...", explanation: "Do the actual computation", explanationZh: "进行实际计算" },
            { code: "    memo[n] = result", explanation: "Store result for future use", explanationZh: "存储结果供将来使用" },
            { code: "    return memo[n]", explanation: "Return the computed result", explanationZh: "返回计算结果" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🪜",
      content: `## 🪜 Classic DP: Climbing Stairs

How many ways to climb n stairs, taking 1 or 2 steps at a time?
每次走 1 或 2 步，爬 n 级台阶有多少种方法？`,
      code: `# This is Fibonacci in disguise!
# ways(n) = ways(n-1) + ways(n-2)
# (either take 1 step from n-1, or 2 steps from n-2)

def climb_stairs(n, memo={}):
    if n in memo: return memo[n]
    if n <= 2: return n
    memo[n] = climb_stairs(n-1, memo) + climb_stairs(n-2, memo)
    return memo[n]

print("🪜 Climbing Stairs:")
for n in range(1, 11):
    ways = climb_stairs(n, {})
    print(f"  {n} stairs: {ways} ways")

# What if we can take 1, 2, or 3 steps?
def climb_stairs_3(n, memo={}):
    if n in memo: return memo[n]
    if n <= 0: return 1 if n == 0 else 0
    memo[n] = (climb_stairs_3(n-1, memo) + 
               climb_stairs_3(n-2, memo) + 
               climb_stairs_3(n-3, memo))
    return memo[n]

print("\\n🪜 With 1, 2, or 3 steps:")
for n in range(1, 11):
    print(f"  {n} stairs: {climb_stairs_3(n, {})} ways")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Memoize a Function · 练习：记忆化一个函数`,
      exercise: {
        prompt: "Memoize this slow recursive function that counts paths in a grid from top-left to bottom-right (can only go right or down).",
        promptZh: "记忆化这个慢递归函数，计算从左上到右下的网格路径数（只能向右或向下走）。",
        starterCode: "def count_paths(m, n, memo={}):\n    # Base case: 1x1 grid = 1 path\n    if m == 1 or n == 1:\n        return 1\n    # Add memoization!\n    return count_paths(m-1, n) + count_paths(m, n-1)\n\nprint(count_paths(3, 3))  # Should be 6",
        expectedOutput: "6",
        hint: "Check if (m,n) is in memo before computing. Store result in memo[(m,n)].",
        hintZh: "计算前检查 (m,n) 是否在 memo 中。将结果存入 memo[(m,n)]。",
        solution: "def count_paths(m, n, memo={}):\n    if (m, n) in memo:\n        return memo[(m, n)]\n    if m == 1 or n == 1:\n        return 1\n    memo[(m, n)] = count_paths(m-1, n, memo) + count_paths(m, n-1, memo)\n    return memo[(m, n)]\n\nprint(count_paths(3, 3))",
      },
    },
    {
      type: "quiz",
      content: "🎓 Memoization Quiz · 记忆化测验",
      quiz: [
        {
          question: "What does memoization do?\n记忆化做什么？",
          options: ["Sorts the results", "Caches results of function calls", "Removes recursion", "Parallelizes computation"],
          correctIndex: 1,
          explanation: "Memoization caches (saves) results so we never recompute the same input. 记忆化缓存结果避免重复计算。",
        },
        {
          question: "Naive Fibonacci fib(50) is slow because...?\n朴素 Fibonacci fib(50) 很慢因为……？",
          options: ["50 is too big", "It recomputes the same values exponentially many times", "Python is slow", "Fibonacci numbers are large"],
          correctIndex: 1,
          explanation: "fib(50) makes over 2^50 calls due to overlapping subproblems! 由于重叠子问题，调用超过 2^50 次！",
        },
        {
          question: "Memoized Fibonacci's time complexity?\n记忆化 Fibonacci 的时间复杂度？",
          options: ["O(2ⁿ)", "O(n²)", "O(n)", "O(n log n)"],
          correctIndex: 2,
          explanation: "Each value fib(0) to fib(n) is computed exactly once: O(n). 每个值只计算一次。",
        },
        {
          question: "What is the space complexity of memoized Fibonacci?\n记忆化 Fibonacci 的空间复杂度？",
          options: ["O(1)", "O(n)", "O(n²)", "O(2ⁿ)"],
          correctIndex: 1,
          explanation: "We store n values in the memo dictionary: O(n) space. 在备忘录中存储 n 个值。",
        },
        {
          question: "Climbing stairs (1 or 2 steps) for n=5 gives?\nn=5 级台阶（每次 1 或 2 步）有多少种方法？",
          options: ["5", "8", "13", "3"],
          correctIndex: 1,
          explanation: "It's the Fibonacci sequence! ways(5) = ways(4) + ways(3) = 5 + 3 = 8. 是 Fibonacci 数列！",
        },
        {
          question: "Which Python decorator does memoization?\n哪个 Python 装饰器做记忆化？",
          options: ["@staticmethod", "@property", "@lru_cache", "@classmethod"],
          correctIndex: 2,
          explanation: "@functools.lru_cache automatically memoizes function results. 自动记忆化函数结果。",
        },
        {
          question: "Memoization is also called?\n记忆化也叫？",
          options: ["Bottom-up DP", "Top-down DP", "Greedy", "Divide and conquer"],
          correctIndex: 1,
          explanation: "Memoization = top-down DP (start from the big problem, cache as you go). 自顶向下的 DP。",
        },
        {
          question: "When does memoization NOT help?\n什么时候记忆化没有帮助？",
          options: ["When subproblems overlap", "When each subproblem is unique (no overlap)", "When the problem is recursive", "When using Python"],
          correctIndex: 1,
          explanation: "If every subproblem is unique, there's nothing to cache! 如果每个子问题都唯一，就没什么可缓存的！",
        },
      ],
    },
  ],
};

const alg_4_2: Lesson = {
  id: "alg-4-2",
  moduleId: "alg-4",
  title: "Tabulation",
  subtitle: "Build up from the bottom · 制表法",
  icon: "📊",
  xp: 25,
  duration: "22 min",
  order: 2,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🧩",
      content: `## 🧩 Puzzle: Bottom-Up DP!

Memoization is top-down (start big, cache as you go). **Tabulation** is bottom-up: start from the smallest subproblems and build up!

记忆化是自顶向下。**制表法**是自底向上：从最小的子问题开始，逐步构建！

🎯 **What you'll learn:**
- Bottom-up DP (tabulation)
- Converting memoization to tabulation
- Space optimization tricks

> 🏠 Real-world analogy: Building a pyramid 🏗️ — you can't start from the top! You build the base layer first, then the next, then the next... Each layer depends on the one below.
>
> 现实类比：建金字塔 🏗️ ——你不能从顶部开始！先建基层，然后下一层……每层都依赖下面的层。

🔑 **Tabulation advantages:**
- No recursion → no stack overflow!
- Often faster (no function call overhead)
- Easier to optimize space`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Fibonacci: Three Ways

Compare naive, memoized (top-down), and tabulated (bottom-up)!
比较朴素、记忆化（自顶向下）和制表法（自底向上）！`,
      code: `# Method 1: Naive recursion — O(2^n)
def fib_naive(n):
    if n <= 1: return n
    return fib_naive(n-1) + fib_naive(n-2)

# Method 2: Memoization (top-down) — O(n)
def fib_memo(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Method 3: Tabulation (bottom-up) — O(n)
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[0], dp[1] = 0, 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Method 4: Space-optimized — O(1) space!
def fib_opt(n):
    if n <= 1: return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# Compare
print("📊 Fibonacci Comparison:")
for n in [10, 20, 50]:
    print(f"  fib({n}): memo={fib_memo(n, {})} | tab={fib_tab(n)} | opt={fib_opt(n)}")

# Show the DP table
print("\\n📊 DP table for fib(10):")
dp = [0] * 11
dp[1] = 1
for i in range(2, 11):
    dp[i] = dp[i-1] + dp[i-2]
    print(f"  dp[{i}] = dp[{i-1}] + dp[{i-2}] = {dp[i-1]} + {dp[i-2]} = {dp[i]}")`,
    },
    {
      type: "code",
      emoji: "🪙",
      content: `## 🪙 Classic DP: Coin Change

Minimum coins to make a target amount!
用最少的硬币凑出目标金额！`,
      code: `def coin_change(coins, amount):
    """Minimum coins needed to make 'amount'"""
    # dp[i] = minimum coins to make amount i
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins to make amount 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

# Example
coins = [1, 5, 10, 25]
print("🪙 Coin Change (US coins: 1¢, 5¢, 10¢, 25¢):")
for amount in [11, 15, 30, 41, 63]:
    result = coin_change(coins, amount)
    print(f"  {amount}¢ → {result} coins")

# Show the DP table for small example
print("\\n📊 DP table for coins=[1,3,4], amount=6:")
coins2 = [1, 3, 4]
dp = [float('inf')] * 7
dp[0] = 0
for i in range(1, 7):
    for c in coins2:
        if c <= i and dp[i-c] + 1 < dp[i]:
            dp[i] = dp[i-c] + 1
    print(f"  dp[{i}] = {dp[i]} coins")
print(f"\\nAnswer: {dp[6]} coins for amount 6 with coins {coins2}")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Tabulation Pattern`,
      concept: {
        title: "Bottom-Up DP Template",
        titleZh: "自底向上 DP 模板",
        codeAnatomy: {
          lines: [
            { code: "dp = [initial_value] * (n + 1)", explanation: "Create table with space for all subproblems", explanationZh: "创建存放所有子问题的表" },
            { code: "dp[0] = base_case", explanation: "Fill in the base case(s)", explanationZh: "填入基本情况" },
            { code: "for i in range(1, n + 1):", explanation: "Build up from smallest to largest", explanationZh: "从最小到最大逐步构建" },
            { code: "    dp[i] = f(dp[i-1], dp[i-2], ...)", explanation: "Compute current from previous results", explanationZh: "从之前的结果计算当前值" },
            { code: "return dp[n]", explanation: "Answer is in the last cell", explanationZh: "答案在最后一个单元格" },
          ],
        },
      },
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: House Robber · 练习：打家劫舍`,
      exercise: {
        prompt: "A robber can't rob two adjacent houses. Given money in each house, find the maximum money. dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
        promptZh: "小偷不能抢相邻两家。给定每家的钱，求最大金额。",
        starterCode: "def rob(nums):\n    if not nums: return 0\n    if len(nums) == 1: return nums[0]\n    # Build DP table\n    dp = [0] * len(nums)\n    dp[0] = nums[0]\n    dp[1] = max(nums[0], nums[1])\n    # Fill the rest\n    # Your code here\n    return dp[-1]\n\nprint(rob([2, 7, 9, 3, 1]))  # Should print 12",
        expectedOutput: "12",
        hint: "dp[i] = max(dp[i-1], dp[i-2] + nums[i]) — skip this house OR rob it + best from 2 houses ago.",
        hintZh: "dp[i] = max(dp[i-1], dp[i-2] + nums[i])——跳过这家或抢它加上两家前的最优。",
        solution: "def rob(nums):\n    if not nums: return 0\n    if len(nums) == 1: return nums[0]\n    dp = [0] * len(nums)\n    dp[0] = nums[0]\n    dp[1] = max(nums[0], nums[1])\n    for i in range(2, len(nums)):\n        dp[i] = max(dp[i-1], dp[i-2] + nums[i])\n    return dp[-1]\n\nprint(rob([2, 7, 9, 3, 1]))",
      },
    },
    {
      type: "text",
      emoji: "⚖️",
      content: `## ⚖️ Top-Down vs Bottom-Up

| Feature | Memoization (Top-Down) | Tabulation (Bottom-Up) |
|---------|----------------------|----------------------|
| Direction | Big → small | Small → big |
| Uses recursion | Yes | No |
| Stack overflow risk | Yes ⚠️ | No ✅ |
| Computes ALL subproblems | Only needed ones | All of them |
| Space optimization | Harder | Easy ✅ |
| Code style | More intuitive | More efficient |

🔑 **Rule of thumb:**
- Start with memoization (easier to think about)
- Convert to tabulation if you need performance or space optimization
- In competitions, memoization + @lru_cache is often fastest to code!`,
    },
    {
      type: "quiz",
      content: "🎓 Tabulation Quiz · 制表法测验",
      quiz: [
        {
          question: "Tabulation builds solutions in which direction?\n制表法从哪个方向构建解？",
          options: ["Top to bottom", "Bottom to top", "Left to right", "Random order"],
          correctIndex: 1,
          explanation: "Tabulation starts from the smallest subproblems and builds up. 从最小的子问题开始向上构建。",
        },
        {
          question: "What is the space-optimized Fibonacci's space complexity?\n空间优化的 Fibonacci 空间复杂度？",
          options: ["O(n)", "O(n²)", "O(1)", "O(log n)"],
          correctIndex: 2,
          explanation: "We only need 2 variables (a, b), not the whole array: O(1)! 只需要 2 个变量。",
        },
        {
          question: "In coin change, dp[0] = ?\n在硬币找零中，dp[0] = ？",
          options: ["1", "0", "infinity", "-1"],
          correctIndex: 1,
          explanation: "0 coins needed to make amount 0. 凑出金额 0 需要 0 个硬币。",
        },
        {
          question: "Coin change with coins=[1,3,4] for amount=6: minimum coins?\n硬币 [1,3,4] 凑 6：最少几个硬币？",
          options: ["2 (3+3)", "3 (4+1+1)", "6 (1×6)", "1"],
          correctIndex: 0,
          explanation: "3 + 3 = 6, using 2 coins. 3+3=6，用 2 个硬币。",
        },
        {
          question: "Advantage of tabulation over memoization?\n制表法比记忆化的优势？",
          options: ["Faster time complexity", "No recursion stack overflow risk", "Uses more memory", "Easier to understand"],
          correctIndex: 1,
          explanation: "Tabulation uses iteration, avoiding recursion stack overflow. 制表法用迭代，避免递归栈溢出。",
        },
        {
          question: "House robber: rob([1, 2, 3, 1]) = ?\n打家劫舍：rob([1, 2, 3, 1]) = ？",
          options: ["3", "4", "6", "5"],
          correctIndex: 1,
          explanation: "Rob house 1 (1) + house 3 (3) = 4. 抢第 1 家(1) + 第 3 家(3) = 4。",
        },
        {
          question: "When can we optimize DP space from O(n) to O(1)?\n什么时候能把 DP 空间从 O(n) 优化到 O(1)？",
          options: ["Always", "When dp[i] only depends on dp[i-1] and dp[i-2]", "Never", "Only for Fibonacci"],
          correctIndex: 1,
          explanation: "If current state only depends on a fixed number of previous states, we can use rolling variables. 如果当前状态只依赖固定数量的前几个状态。",
        },
        {
          question: "Which is easier to code in competitions?\n哪种在比赛中更容易编码？",
          options: ["Tabulation", "Memoization with @lru_cache", "Both are equally hard", "Neither"],
          correctIndex: 1,
          explanation: "Just add @lru_cache decorator to your recursive function — done! 加上 @lru_cache 装饰器就行了！",
        },
      ],
    },
  ],
};

const alg_4_3: Lesson = {
  id: "alg-4-3",
  moduleId: "alg-4",
  title: "Classic DP Problems",
  subtitle: "Knapsack, LCS, and more · 经典 DP 问题",
  icon: "🎒",
  xp: 30,
  duration: "25 min",
  order: 3,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🧩",
      content: `## 🧩 Puzzle: The Greatest Hits of DP!

Time for the classics! These problems appear in interviews, competitions, and real life!

经典问题时间！这些问题出现在面试、竞赛和现实生活中！

🎯 **What you'll learn:**
- 0/1 Knapsack — packing your bag optimally
- Longest Common Subsequence (LCS) — comparing sequences
- Longest Increasing Subsequence (LIS)

> 🏠 Real-world analogy:
> - **Knapsack** 🎒: Packing for a trip with limited luggage weight
> - **LCS** 📝: Finding what two essays have in common (like diff in Git!)
> - **LIS** 📈: Finding the longest upward trend in stock prices

🔑 **DP patterns to recognize:**
- "Maximize/minimize something with constraints" → likely DP
- "Count the number of ways" → likely DP
- "Can this be done?" → likely DP`,
    },
    {
      type: "code",
      emoji: "🎒",
      content: `## 🎒 0/1 Knapsack Problem

You have a bag with weight limit W. Pick items to maximize total value!
你有一个重量限制为 W 的背包。选物品使总价值最大！`,
      code: `def knapsack(weights, values, W):
    """0/1 Knapsack: each item used at most once"""
    n = len(weights)
    # dp[i][w] = max value using first i items with capacity w
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(W + 1):
            # Don't take item i
            dp[i][w] = dp[i-1][w]
            # Take item i (if it fits)
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1])
    
    # Show the table
    print("📊 DP Table:")
    print("     w:", " ".join(f"{w:3d}" for w in range(W + 1)))
    for i in range(n + 1):
        label = f"  i={i}:" if i > 0 else "  i=0:"
        print(label, " ".join(f"{dp[i][w]:3d}" for w in range(W + 1)))
    
    return dp[n][W]

# Example: packing for a camping trip
items = ["Tent", "Sleeping Bag", "Food", "Water", "Camera"]
weights = [3, 2, 4, 1, 1]
values = [4, 3, 5, 2, 3]
capacity = 7

print(f"🎒 Knapsack (capacity = {capacity}kg):")
for i, (item, w, v) in enumerate(zip(items, weights, values)):
    print(f"  {item}: weight={w}kg, value={v}")

result = knapsack(weights, values, capacity)
print(f"\\n🏆 Maximum value: {result}")`,
    },
    {
      type: "code",
      emoji: "📝",
      content: `## 📝 Longest Common Subsequence (LCS)

Find the longest sequence that appears in both strings!
找到两个字符串中都出现的最长序列！`,
      code: `def lcs(s1, s2):
    """Longest Common Subsequence"""
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    # Reconstruct the LCS
    result = []
    i, j = m, n
    while i > 0 and j > 0:
        if s1[i-1] == s2[j-1]:
            result.append(s1[i-1])
            i -= 1; j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1
    
    return dp[m][n], ''.join(reversed(result))

# Example 1
s1, s2 = "ABCBDAB", "BDCAB"
length, subseq = lcs(s1, s2)
print(f"📝 LCS of '{s1}' and '{s2}':")
print(f"   Length: {length}")
print(f"   Subsequence: '{subseq}'")

# Example 2: DNA sequences
dna1 = "AGGTAB"
dna2 = "GXTXAYB"
length, subseq = lcs(dna1, dna2)
print(f"\\n🧬 LCS of '{dna1}' and '{dna2}':")
print(f"   Length: {length}")
print(f"   Subsequence: '{subseq}'")

# Example 3: Git diff!
print("\\n💡 LCS is used in 'git diff' to find common lines between file versions!")`,
    },
    {
      type: "code",
      emoji: "📈",
      content: `## 📈 Longest Increasing Subsequence (LIS)

Find the longest strictly increasing subsequence!
找到最长严格递增子序列！`,
      code: `def lis(arr):
    """Longest Increasing Subsequence: O(n²)"""
    n = len(arr)
    dp = [1] * n  # Each element is a subsequence of length 1
    
    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    # Reconstruct
    max_len = max(dp)
    result = []
    idx = dp.index(max_len)
    result.append(arr[idx])
    
    for i in range(idx - 1, -1, -1):
        if dp[i] == dp[idx] - 1 and arr[i] < arr[idx]:
            result.append(arr[i])
            idx = i
    
    result.reverse()
    return max_len, result

# Examples
arrays = [
    [10, 22, 9, 33, 21, 50, 41, 60, 80],
    [3, 10, 2, 1, 20],
    [50, 3, 10, 7, 40, 80],
]

for arr in arrays:
    length, subseq = lis(arr)
    print(f"📈 Array: {arr}")
    print(f"   LIS length: {length}, example: {subseq}")
    print()

# Show DP table
arr = [3, 10, 2, 11, 5, 20]
dp = [1] * len(arr)
for i in range(1, len(arr)):
    for j in range(i):
        if arr[j] < arr[i]:
            dp[i] = max(dp[i], dp[j] + 1)
print(f"DP table for {arr}:")
for i in range(len(arr)):
    print(f"  dp[{i}] = {dp[i]} (element {arr[i]})")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Knapsack DP`,
      concept: {
        title: "0/1 Knapsack — State Transition",
        titleZh: "0/1 背包——状态转移",
        codeAnatomy: {
          lines: [
            { code: "dp[i][w] = max value using items 1..i with capacity w", explanation: "State definition: what does each cell mean?", explanationZh: "状态定义：每个单元格代表什么？" },
            { code: "dp[i][w] = dp[i-1][w]", explanation: "Option 1: DON'T take item i", explanationZh: "选项1：不拿物品 i" },
            { code: "if weights[i-1] <= w:", explanation: "Check if item i fits in remaining capacity", explanationZh: "检查物品 i 是否放得下" },
            { code: "  dp[i][w] = max(dp[i][w], dp[i-1][w-weights[i-1]] + values[i-1])", explanation: "Option 2: TAKE item i (remaining cap - item weight + item value)", explanationZh: "选项2：拿物品 i" },
          ],
        },
      },
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Edit Distance · 练习：编辑距离`,
      exercise: {
        prompt: "Find the minimum number of operations (insert, delete, replace) to transform word1 into word2.",
        promptZh: "找到将 word1 转换为 word2 的最少操作次数（插入、删除、替换）。",
        starterCode: "def edit_distance(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    # Base cases\n    for i in range(m+1): dp[i][0] = i\n    for j in range(n+1): dp[0][j] = j\n    # Fill table\n    # Your code here\n    return dp[m][n]\n\nprint(edit_distance('kitten', 'sitting'))  # 3",
        expectedOutput: "3",
        hint: "If chars match: dp[i][j] = dp[i-1][j-1]. Else: 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).",
        hintZh: "如果字符匹配：dp[i][j] = dp[i-1][j-1]。否则：1 + min(三个方向)。",
        solution: "def edit_distance(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(m+1): dp[i][0] = i\n    for j in range(n+1): dp[0][j] = j\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if s1[i-1] == s2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    return dp[m][n]\n\nprint(edit_distance('kitten', 'sitting'))",
      },
    },
    {
      type: "quiz",
      content: "🎓 Classic DP Quiz · 经典 DP 测验",
      quiz: [
        {
          question: "In 0/1 Knapsack, '0/1' means?\n0/1 背包中的 '0/1' 是什么意思？",
          options: ["Binary numbers", "Each item is taken 0 or 1 times", "There are 0 or 1 solutions", "The values are 0 or 1"],
          correctIndex: 1,
          explanation: "Each item can be taken once (1) or not at all (0). 每个物品要么拿(1)要么不拿(0)。",
        },
        {
          question: "Knapsack time complexity?\n背包问题时间复杂度？",
          options: ["O(n)", "O(nW)", "O(n²)", "O(2ⁿ)"],
          correctIndex: 1,
          explanation: "n items × W capacity = O(nW) — pseudo-polynomial. n 个物品 × W 容量。",
        },
        {
          question: "LCS of 'ABC' and 'AC'?\n'ABC' 和 'AC' 的 LCS？",
          options: ["'A'", "'AC'", "'ABC'", "'C'"],
          correctIndex: 1,
          explanation: "'AC' appears in both strings as a subsequence. 'AC' 在两个字符串中都作为子序列出现。",
        },
        {
          question: "LCS time complexity for strings of length m and n?\n长度为 m 和 n 的字符串 LCS 时间复杂度？",
          options: ["O(m+n)", "O(mn)", "O(m²n²)", "O(2^(m+n))"],
          correctIndex: 1,
          explanation: "We fill an m×n table: O(mn). 填充 m×n 的表格。",
        },
        {
          question: "LIS of [10, 9, 2, 5, 3, 7, 101, 18]?\n[10, 9, 2, 5, 3, 7, 101, 18] 的 LIS 长度？",
          options: ["3", "4", "5", "6"],
          correctIndex: 1,
          explanation: "One possible LIS: [2, 3, 7, 18] or [2, 5, 7, 101] — length 4. 长度为 4。",
        },
        {
          question: "Which real-world tool uses LCS?\n哪个现实工具使用 LCS？",
          options: ["Calculator", "Git diff", "Web browser", "Music player"],
          correctIndex: 1,
          explanation: "Git diff uses LCS to find common lines between file versions. Git diff 使用 LCS 找文件版本间的公共行。",
        },
        {
          question: "Edit distance between 'cat' and 'car'?\n'cat' 和 'car' 的编辑距离？",
          options: ["1", "2", "3", "0"],
          correctIndex: 0,
          explanation: "Replace 't' with 'r': one operation. 替换 't' 为 'r'：一次操作。",
        },
        {
          question: "Which is NOT a classic DP problem?\n哪个不是经典 DP 问题？",
          options: ["Knapsack", "Longest Common Subsequence", "Binary Search", "Edit Distance"],
          correctIndex: 2,
          explanation: "Binary search is a divide and conquer algorithm, not DP. 二分搜索是分治算法，不是 DP。",
        },
      ],
    },
  ],
};

const alg_4_4: Lesson = {
  id: "alg-4-4",
  moduleId: "alg-4",
  title: "DP on Grids",
  subtitle: "Paths and grids · 网格 DP",
  icon: "🗺️",
  xp: 25,
  duration: "22 min",
  order: 4,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🧩",
      content: `## 🧩 Puzzle: DP on 2D Grids!

Many DP problems happen on grids: counting paths, finding minimum costs, navigating obstacles!

很多 DP 问题发生在网格上：计数路径、最小代价、绕过障碍物！

🎯 **What you'll learn:**
- Grid path counting
- Minimum path sum
- Grids with obstacles

> 🏠 Real-world analogy: Imagine a city grid 🏙️. You're at the top-left corner and need to reach the bottom-right. You can only go right or down. How many routes are there? What's the shortest path with traffic costs?
>
> 现实类比：想象一个城市网格。你在左上角，要到右下角。只能向右或向下。有多少条路线？考虑交通费用的最短路径是什么？

🔑 **Grid DP pattern:** dp[i][j] depends on dp[i-1][j] (from above) and dp[i][j-1] (from left)`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Grid Paths: Count All Paths

How many ways to go from top-left to bottom-right?
从左上到右下有多少种走法？`,
      code: `def count_paths(m, n):
    """Count paths in m×n grid (right or down only)"""
    dp = [[0] * n for _ in range(m)]
    
    # First row and column: only one way
    for i in range(m): dp[i][0] = 1
    for j in range(n): dp[0][j] = 1
    
    # Fill the grid
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    # Print the grid
    print(f"📊 Path count grid ({m}×{n}):")
    for row in dp:
        print("  " + " ".join(f"{x:4d}" for x in row))
    
    return dp[m-1][n-1]

result = count_paths(4, 4)
print(f"\\n🏁 Total paths: {result}")

# This is actually C(m+n-2, m-1) = (m+n-2)! / ((m-1)! * (n-1)!)
from math import comb
m, n = 4, 4
print(f"Math formula: C({m+n-2}, {m-1}) = {comb(m+n-2, m-1)}")

# Bigger grid
print(f"\\n10×10 grid: {count_paths(3, 3)} paths (3×3)")
print(f"Math: C(18, 9) = {comb(18, 9)} paths (10×10)")`,
    },
    {
      type: "code",
      emoji: "🚧",
      content: `## 🚧 Grid with Obstacles

Some cells are blocked! Can we still count paths?
有些格子被堵了！还能数路径吗？`,
      code: `def count_paths_obstacles(grid):
    """Count paths avoiding obstacles (1 = obstacle)"""
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]
    
    # First cell
    dp[0][0] = 0 if grid[0][0] == 1 else 1
    
    # First row
    for j in range(1, n):
        dp[0][j] = 0 if grid[0][j] == 1 else dp[0][j-1]
    
    # First column
    for i in range(1, m):
        dp[i][0] = 0 if grid[i][0] == 1 else dp[i-1][0]
    
    # Fill rest
    for i in range(1, m):
        for j in range(1, n):
            if grid[i][j] == 1:
                dp[i][j] = 0  # Blocked!
            else:
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
    
    # Visualize
    print("🗺️ Grid (0=open, 1=blocked):")
    for i in range(m):
        row = ""
        for j in range(n):
            if grid[i][j] == 1:
                row += "  🚧"
            else:
                row += f" {dp[i][j]:3d}"
        print(row)
    
    return dp[m-1][n-1]

grid = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
]
result = count_paths_obstacles(grid)
print(f"\\n🏁 Paths avoiding obstacles: {result}")`,
    },
    {
      type: "code",
      emoji: "💰",
      content: `## 💰 Minimum Path Sum

Find the path with minimum total cost!
找到总代价最小的路径！`,
      code: `def min_path_sum(grid):
    """Minimum cost path from top-left to bottom-right"""
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]
    
    dp[0][0] = grid[0][0]
    
    # First row: can only come from left
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]
    
    # First column: can only come from above
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]
    
    # Fill rest: min of top or left + current cost
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    
    # Reconstruct path
    path = []
    i, j = m - 1, n - 1
    path.append((i, j))
    while i > 0 or j > 0:
        if i == 0:
            j -= 1
        elif j == 0:
            i -= 1
        elif dp[i-1][j] < dp[i][j-1]:
            i -= 1
        else:
            j -= 1
        path.append((i, j))
    path.reverse()
    
    # Visualize
    print("💰 Cost grid:")
    for row in grid:
        print("  " + " ".join(f"{x:3d}" for x in row))
    print("\\n📊 Min cost to reach each cell:")
    for i in range(m):
        row = ""
        for j in range(n):
            marker = " *" if (i,j) in path else "  "
            row += f"{dp[i][j]:3d}{marker}"
        print(row)
    
    print(f"\\n🏁 Minimum path sum: {dp[m-1][n-1]}")
    print(f"📍 Path: {' → '.join(f'({r},{c})' for r,c in path)}")
    return dp[m-1][n-1]

grid = [
    [1, 3, 1, 2],
    [1, 5, 1, 3],
    [4, 2, 1, 1],
    [2, 1, 4, 1]
]
min_path_sum(grid)`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Maximum Path Sum · 练习：最大路径和`,
      exercise: {
        prompt: "Find the MAXIMUM path sum in a grid (move right or down only).",
        promptZh: "找到网格中的最大路径和（只能向右或向下走）。",
        starterCode: "def max_path_sum(grid):\n    m, n = len(grid), len(grid[0])\n    dp = [[0]*n for _ in range(m)]\n    dp[0][0] = grid[0][0]\n    # Fill first row and column\n    # Then fill the rest using max instead of min\n    # Your code here\n    return dp[m-1][n-1]\n\ngrid = [[1,2,3],[4,5,6],[7,8,9]]\nprint(max_path_sum(grid))  # Should print 29",
        expectedOutput: "29",
        hint: "Same as min path sum but use max(dp[i-1][j], dp[i][j-1]) + grid[i][j].",
        hintZh: "和最小路径和一样，但用 max。",
        solution: "def max_path_sum(grid):\n    m, n = len(grid), len(grid[0])\n    dp = [[0]*n for _ in range(m)]\n    dp[0][0] = grid[0][0]\n    for j in range(1, n): dp[0][j] = dp[0][j-1] + grid[0][j]\n    for i in range(1, m): dp[i][0] = dp[i-1][0] + grid[i][0]\n    for i in range(1, m):\n        for j in range(1, n):\n            dp[i][j] = max(dp[i-1][j], dp[i][j-1]) + grid[i][j]\n    return dp[m-1][n-1]\n\ngrid = [[1,2,3],[4,5,6],[7,8,9]]\nprint(max_path_sum(grid))",
      },
    },
    {
      type: "text",
      emoji: "📋",
      content: `## 📋 Grid DP Summary

| Problem | Recurrence | Time | Space |
|---------|-----------|------|-------|
| Count paths | dp[i][j] = dp[i-1][j] + dp[i][j-1] | O(mn) | O(mn)→O(n) |
| Min path sum | dp[i][j] = min(above, left) + cost | O(mn) | O(mn)→O(n) |
| With obstacles | Same, but dp=0 for blocked cells | O(mn) | O(mn)→O(n) |
| Max path sum | dp[i][j] = max(above, left) + value | O(mn) | O(mn)→O(n) |

🔑 **Space optimization:** Since each row only depends on the row above, we can use a 1D array instead of 2D!

🧩 **DP mastery checklist:**
1. ✅ Define the state (what does dp[i][j] represent?)
2. ✅ Write the recurrence (how to compute dp[i][j]?)
3. ✅ Set base cases
4. ✅ Fill in the correct order
5. ✅ Extract the answer`,
    },
    {
      type: "quiz",
      content: "🎓 Grid DP Quiz · 网格 DP 测验",
      quiz: [
        {
          question: "In a 3×3 grid, how many paths from top-left to bottom-right?\n3×3 网格中从左上到右下有多少条路径？",
          options: ["4", "6", "8", "9"],
          correctIndex: 1,
          explanation: "C(4,2) = 6. We need 2 downs and 2 rights in any order. C(4,2) = 6。",
        },
        {
          question: "For min path sum, dp[i][j] = ?\n最小路径和中，dp[i][j] = ？",
          options: ["dp[i-1][j] + dp[i][j-1]", "min(dp[i-1][j], dp[i][j-1])", "min(dp[i-1][j], dp[i][j-1]) + grid[i][j]", "grid[i][j]"],
          correctIndex: 2,
          explanation: "Take the minimum of coming from above or left, plus current cell's cost. 取从上方或左方来的最小值，加当前格的代价。",
        },
        {
          question: "What happens at an obstacle in grid path counting?\n网格路径计数中遇到障碍物怎么办？",
          options: ["dp = infinity", "dp = 0", "dp = -1", "Skip the cell"],
          correctIndex: 1,
          explanation: "No paths can go through an obstacle: dp = 0. 没有路径能经过障碍物。",
        },
        {
          question: "Grid DP time complexity for m×n grid?\nm×n 网格 DP 的时间复杂度？",
          options: ["O(m+n)", "O(mn)", "O(m²n²)", "O(2^(m+n))"],
          correctIndex: 1,
          explanation: "We visit each cell once: O(m×n). 访问每个格子一次。",
        },
        {
          question: "Can grid DP space be optimized to O(n)?\n网格 DP 空间能优化到 O(n) 吗？",
          options: ["No, never", "Yes, using a 1D array", "Yes, using recursion", "Only for square grids"],
          correctIndex: 1,
          explanation: "Since each row only uses the previous row, we can reuse a single 1D array. 每行只用前一行，可以复用一维数组。",
        },
        {
          question: "Grid path count is equivalent to which math concept?\n网格路径计数等价于哪个数学概念？",
          options: ["Permutation", "Combination C(m+n-2, m-1)", "Factorial", "Power"],
          correctIndex: 1,
          explanation: "Choosing m-1 downs from m+n-2 total moves = C(m+n-2, m-1). 从 m+n-2 步中选 m-1 步向下。",
        },
        {
          question: "First row in grid path counting: all cells have dp value?\n网格路径计数第一行的所有格子 dp 值是？",
          options: ["0", "1", "Their row index", "Varies"],
          correctIndex: 1,
          explanation: "First row: only one way to reach each cell (go right). 第一行：只有一种方式到达每个格子（一直向右）。",
        },
        {
          question: "If grid[0][0] is an obstacle, how many paths exist?\n如果 grid[0][0] 是障碍物，有多少路径？",
          options: ["1", "0", "Depends on grid size", "Error"],
          correctIndex: 1,
          explanation: "If the start is blocked, no paths are possible: 0. 起点被堵则无路径。",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE ALG-5: GRAPH ALGORITHMS
// ═══════════════════════════════════════════════════════════════

const alg_5_1: Lesson = {
  id: "alg-5-1",
  moduleId: "alg-5",
  title: "BFS & DFS",
  subtitle: "Graph traversal basics · 图遍历基础",
  icon: "🔎",
  xp: 25,
  duration: "25 min",
  order: 1,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🕸️",
      content: `## 🕸️ Web Says: Let's Explore Graphs!

I'm **Web** 🕸️, your graph navigator! Graphs are everywhere: social networks, maps, the internet!

我是 **蛛网** 🕸️，你的图导航员！图无处不在：社交网络、地图、互联网！

🎯 **What you'll learn:**
- BFS (Breadth-First Search) — explore level by level
- DFS (Depth-First Search) — explore as deep as possible first
- When to use each

> 🏠 Real-world analogies:
> - **BFS** 🌊: Like ripples in water — explore all neighbors first, then their neighbors
> - **DFS** 🏔️: Like exploring a cave — go as deep as possible, then backtrack
>
> 现实类比：
> - BFS：像水中的涟漪——先探索所有邻居，再探索邻居的邻居
> - DFS：像探索洞穴——尽可能深入，然后回溯

🔑 **BFS uses a Queue | DFS uses a Stack (or recursion)**`,
    },
    {
      type: "code",
      emoji: "🌊",
      content: `## 🌊 BFS — Breadth-First Search

Explore nodes level by level using a queue!
用队列逐层探索节点！`,
      code: `from collections import deque

def bfs(graph, start):
    """BFS: explore level by level"""
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []
    level = 0
    
    while queue:
        size = len(queue)
        level_nodes = []
        
        for _ in range(size):
            node = queue.popleft()
            level_nodes.append(node)
            order.append(node)
            
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        print(f"  Level {level}: {level_nodes}")
        level += 1
    
    return order

# Create a graph (adjacency list)
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print("🗺️ Graph:")
for node, neighbors in graph.items():
    print(f"  {node} → {neighbors}")

print(f"\\n🌊 BFS from 'A':")
result = bfs(graph, 'A')
print(f"Visit order: {' → '.join(result)}")`,
    },
    {
      type: "code",
      emoji: "🏔️",
      content: `## 🏔️ DFS — Depth-First Search

Go as deep as possible, then backtrack!
尽可能深入，然后回溯！`,
      code: `# DFS with recursion
def dfs_recursive(graph, node, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(node)
    print(f"  Visiting: {node}")
    
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)
    
    return visited

# DFS with stack (iterative)
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    order = []
    
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            order.append(node)
            # Add neighbors in reverse for consistent order
            for neighbor in reversed(graph[node]):
                if neighbor not in visited:
                    stack.append(neighbor)
    
    return order

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

print("🏔️ DFS Recursive from 'A':")
dfs_recursive(graph, 'A')

print(f"\\n🏔️ DFS Iterative from 'A':")
result = dfs_iterative(graph, 'A')
print(f"Visit order: {' → '.join(result)}")

# Compare BFS vs DFS
from collections import deque
def bfs_order(graph, start):
    visited = set([start])
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for n in graph[node]:
            if n not in visited:
                visited.add(n)
                queue.append(n)
    return order

print(f"\\n📊 Comparison:")
print(f"  BFS order: {' → '.join(bfs_order(graph, 'A'))}")
print(f"  DFS order: {' → '.join(dfs_iterative(graph, 'A'))}")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: BFS`,
      concept: {
        title: "BFS — The Queue Pattern",
        titleZh: "BFS——队列模式",
        codeAnatomy: {
          lines: [
            { code: "queue = deque([start])", explanation: "Initialize queue with start node", explanationZh: "用起始节点初始化队列" },
            { code: "visited.add(start)", explanation: "Mark start as visited", explanationZh: "标记起始节点已访问" },
            { code: "while queue:", explanation: "Process until queue is empty", explanationZh: "处理直到队列为空" },
            { code: "    node = queue.popleft()", explanation: "Take front node (FIFO)", explanationZh: "取出队首节点（先进先出）" },
            { code: "    for neighbor in graph[node]:", explanation: "Check all neighbors", explanationZh: "检查所有邻居" },
            { code: "        if neighbor not in visited:", explanation: "Only visit unvisited nodes", explanationZh: "只访问未访问的节点" },
            { code: "        queue.append(neighbor)", explanation: "Add to queue for later processing", explanationZh: "加入队列等待处理" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🎮",
      content: `## 🎮 Application: Shortest Path in Unweighted Graph

BFS finds the shortest path in unweighted graphs!
BFS 在无权图中找最短路径！`,
      code: `from collections import deque

def shortest_path(graph, start, end):
    """BFS shortest path in unweighted graph"""
    queue = deque([(start, [start])])
    visited = {start}
    
    while queue:
        node, path = queue.popleft()
        
        if node == end:
            return path
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    
    return None  # No path

# Social network graph
social = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Frank'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Frank'],
    'Frank': ['Charlie', 'Eve', 'Grace'],
    'Grace': ['Frank']
}

print("👥 Social Network:")
for person, friends in social.items():
    print(f"  {person} ↔ {friends}")

# Find shortest connection
pairs = [('Alice', 'Grace'), ('David', 'Frank'), ('Alice', 'Eve')]
for start, end in pairs:
    path = shortest_path(social, start, end)
    print(f"\\n🔗 {start} → {end}:")
    print(f"   Path: {' → '.join(path)}")
    print(f"   Degrees of separation: {len(path) - 1}")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Connected Components · 练习：连通分量`,
      exercise: {
        prompt: "Count the number of connected components in an undirected graph using BFS or DFS.",
        promptZh: "用 BFS 或 DFS 计算无向图中的连通分量数。",
        starterCode: "def count_components(n, edges):\n    # Build adjacency list\n    graph = {i: [] for i in range(n)}\n    for u, v in edges:\n        graph[u].append(v)\n        graph[v].append(u)\n    # Count components using BFS/DFS\n    visited = set()\n    count = 0\n    # Your code here\n    return count\n\nprint(count_components(5, [[0,1],[1,2],[3,4]]))  # 2",
        expectedOutput: "2",
        hint: "For each unvisited node, run BFS/DFS to mark all connected nodes, increment count.",
        hintZh: "对每个未访问节点，运行 BFS/DFS 标记所有连接节点，计数加1。",
        solution: "def count_components(n, edges):\n    graph = {i: [] for i in range(n)}\n    for u, v in edges:\n        graph[u].append(v)\n        graph[v].append(u)\n    visited = set()\n    count = 0\n    for i in range(n):\n        if i not in visited:\n            count += 1\n            stack = [i]\n            while stack:\n                node = stack.pop()\n                if node not in visited:\n                    visited.add(node)\n                    for nb in graph[node]:\n                        if nb not in visited:\n                            stack.append(nb)\n    return count\n\nprint(count_components(5, [[0,1],[1,2],[3,4]]))",
      },
    },
    {
      type: "text",
      emoji: "⚖️",
      content: `## ⚖️ BFS vs DFS Comparison

| Feature | BFS | DFS |
|---------|-----|-----|
| Data structure | Queue (FIFO) | Stack (LIFO) / Recursion |
| Explores | Level by level | Branch by branch |
| Shortest path | Yes (unweighted) ✅ | No ❌ |
| Space | O(width) — can be large | O(depth) — usually less |
| Best for | Shortest path, level-order | Cycle detection, topological sort |
| Complete | Yes | Yes (if finite) |

🔑 **Rule of thumb:**
- Need shortest path? → **BFS**
- Need to explore all paths? → **DFS**
- Need topological order? → **DFS**`,
    },
    {
      type: "quiz",
      content: "🎓 BFS & DFS Quiz · BFS & DFS 测验",
      quiz: [
        {
          question: "What data structure does BFS use?\nBFS 使用什么数据结构？",
          options: ["Stack", "Queue", "Array", "Hash map"],
          correctIndex: 1,
          explanation: "BFS uses a Queue (FIFO) to process nodes level by level. BFS 使用队列（先进先出）。",
        },
        {
          question: "What data structure does DFS use?\nDFS 使用什么数据结构？",
          options: ["Queue", "Priority queue", "Stack (or recursion)", "Array"],
          correctIndex: 2,
          explanation: "DFS uses a Stack (LIFO) or recursion (implicit stack). DFS 使用栈或递归。",
        },
        {
          question: "Which finds the shortest path in an unweighted graph?\n哪个在无权图中找最短路径？",
          options: ["DFS", "BFS", "Both", "Neither"],
          correctIndex: 1,
          explanation: "BFS explores level by level, so it finds the shortest path first! BFS 逐层探索，先找到最短路径！",
        },
        {
          question: "BFS time complexity for V vertices and E edges?\nBFS 对 V 个顶点和 E 条边的时间复杂度？",
          options: ["O(V)", "O(E)", "O(V + E)", "O(V × E)"],
          correctIndex: 2,
          explanation: "Visit each vertex once (V) and each edge once (E): O(V + E). 访问每个顶点和每条边各一次。",
        },
        {
          question: "DFS is essentially which recursive pattern?\nDFS 本质上是哪种递归模式？",
          options: ["Linear recursion", "Tree recursion", "Backtracking", "Dynamic programming"],
          correctIndex: 2,
          explanation: "DFS explores a path, then backtracks to try other paths — just like backtracking! DFS 探索一条路径，然后回溯。",
        },
        {
          question: "'Six degrees of separation' relates to which algorithm?\n「六度分隔」与哪个算法有关？",
          options: ["DFS", "BFS", "Dijkstra", "Floyd-Warshall"],
          correctIndex: 1,
          explanation: "BFS finds the shortest path (degrees of separation) in a social network. BFS 在社交网络中找最短路径。",
        },
        {
          question: "If BFS from node A visits nodes in order A,B,C,D,E — which are at level 1?\n如果从 A 出发 BFS 顺序是 A,B,C,D,E——哪些在第 1 层？",
          options: ["Only A", "B and C", "D and E", "Can't tell without the graph"],
          correctIndex: 3,
          explanation: "The visit order alone doesn't tell us levels — we need the graph structure. 仅凭访问顺序无法确定层级。",
        },
        {
          question: "A connected component is?\n连通分量是什么？",
          options: ["A single node", "A group of nodes all reachable from each other", "An edge", "A cycle"],
          correctIndex: 1,
          explanation: "A connected component is a maximal set of nodes where every pair is reachable. 连通分量是所有节点互相可达的最大集合。",
        },
      ],
    },
  ],
};

const alg_5_2: Lesson = {
  id: "alg-5-2",
  moduleId: "alg-5",
  title: "Dijkstra's Algorithm",
  subtitle: "Shortest path with weights · 最短路径",
  icon: "🛤️",
  xp: 30,
  duration: "25 min",
  order: 2,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🕸️",
      content: `## 🕸️ Web: Finding the Shortest Route!

BFS finds shortest paths when all edges are equal. But what about **weighted** graphs — like road maps with different distances?

BFS 在所有边相等时找最短路径。但**加权**图呢——像有不同距离的路线图？

🎯 **What you'll learn:**
- Why BFS fails for weighted graphs
- Dijkstra's algorithm — the gold standard
- Priority queues (min-heaps)

> 🏠 Real-world analogy: GPS navigation! 🗺️ Roads have different lengths and speeds. Dijkstra's algorithm is exactly what your GPS uses to find the fastest route!
>
> 现实类比：GPS 导航！道路有不同的长度和速度。Dijkstra 算法正是你的 GPS 用来找最快路线的！

🔑 **Greedy approach:** Always expand the closest unvisited node!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Dijkstra's Algorithm

Find shortest paths from a source to all other nodes!
从源点找到到所有其他节点的最短路径！`,
      code: `import heapq

def dijkstra(graph, start):
    """Dijkstra's shortest path algorithm"""
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    previous = {node: None for node in graph}
    pq = [(0, start)]  # (distance, node)
    visited = set()
    
    while pq:
        dist, node = heapq.heappop(pq)
        
        if node in visited:
            continue
        visited.add(node)
        print(f"  Visit {node} (distance={dist})")
        
        for neighbor, weight in graph[node]:
            if neighbor not in visited:
                new_dist = dist + weight
                if new_dist < distances[neighbor]:
                    distances[neighbor] = new_dist
                    previous[neighbor] = node
                    heapq.heappush(pq, (new_dist, neighbor))
    
    return distances, previous

def get_path(previous, start, end):
    path = []
    node = end
    while node is not None:
        path.append(node)
        node = previous[node]
    return path[::-1]

# Weighted graph (adjacency list with weights)
graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('A', 4), ('D', 3), ('E', 1)],
    'C': [('A', 2), ('D', 4), ('F', 5)],
    'D': [('B', 3), ('C', 4), ('E', 2)],
    'E': [('B', 1), ('D', 2), ('F', 3)],
    'F': [('C', 5), ('E', 3)]
}

print("🗺️ Weighted Graph:")
for node, edges in graph.items():
    for neighbor, weight in edges:
        print(f"  {node} --{weight}--> {neighbor}")

print(f"\\n🛤️ Dijkstra from 'A':")
distances, previous = dijkstra(graph, 'A')

print(f"\\n📊 Shortest distances from A:")
for node, dist in sorted(distances.items()):
    path = get_path(previous, 'A', node)
    print(f"  A → {node}: distance={dist}, path={' → '.join(path)}")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Dijkstra's Algorithm`,
      concept: {
        title: "Dijkstra's — Step by Step",
        titleZh: "Dijkstra——逐步解析",
        codeAnatomy: {
          lines: [
            { code: "distances = {node: inf}", explanation: "Initialize all distances to infinity", explanationZh: "初始化所有距离为无穷大" },
            { code: "distances[start] = 0", explanation: "Distance to start is 0", explanationZh: "到起点的距离是 0" },
            { code: "pq = [(0, start)]", explanation: "Priority queue (min-heap) with start", explanationZh: "优先队列（最小堆）包含起点" },
            { code: "dist, node = heappop(pq)", explanation: "Always process the closest node first", explanationZh: "总是先处理最近的节点" },
            { code: "new_dist = dist + weight", explanation: "Calculate distance through current node", explanationZh: "计算通过当前节点的距离" },
            { code: "if new_dist < distances[neighbor]:", explanation: "Is this a shorter path?", explanationZh: "这是更短的路径吗？" },
            { code: "    heappush(pq, (new_dist, neighbor))", explanation: "Add improved distance to queue", explanationZh: "将改进的距离加入队列" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🎮",
      content: `## 🎮 Dijkstra in a City Map

A practical example with a city road network!
一个城市道路网络的实际例子！`,
      code: `import heapq

def dijkstra_city(roads, start, end):
    distances = {city: float('inf') for city in roads}
    distances[start] = 0
    previous = {city: None for city in roads}
    pq = [(0, start)]
    visited = set()
    
    while pq:
        dist, city = heapq.heappop(pq)
        if city in visited:
            continue
        visited.add(city)
        if city == end:
            break
        for neighbor, weight in roads[city]:
            new_dist = dist + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                previous[neighbor] = city
                heapq.heappush(pq, (new_dist, neighbor))
    
    # Reconstruct path
    path = []
    node = end
    while node:
        path.append(node)
        node = previous[node]
    path.reverse()
    return distances[end], path

# City road network (distances in km)
roads = {
    'Home':     [('School', 3), ('Mall', 7), ('Park', 2)],
    'School':   [('Home', 3), ('Library', 4), ('Gym', 6)],
    'Mall':     [('Home', 7), ('Theater', 2), ('Gym', 3)],
    'Park':     [('Home', 2), ('Library', 5)],
    'Library':  [('School', 4), ('Park', 5), ('Theater', 3)],
    'Gym':      [('School', 6), ('Mall', 3), ('Theater', 1)],
    'Theater':  [('Mall', 2), ('Library', 3), ('Gym', 1)]
}

print("🏙️ City Road Network:")
destinations = ['School', 'Mall', 'Library', 'Theater', 'Gym', 'Park']
for dest in destinations:
    dist, path = dijkstra_city(roads, 'Home', dest)
    print(f"  🏠→{dest}: {dist}km via {' → '.join(path)}")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Cheapest Flight · 练习：最便宜的航班`,
      exercise: {
        prompt: "Use Dijkstra to find the cheapest flight from 'NYC' to 'LA'.",
        promptZh: "用 Dijkstra 找从 'NYC' 到 'LA' 的最便宜航班。",
        starterCode: "import heapq\n\ndef cheapest_flight(flights, start, end):\n    dist = {city: float('inf') for city in flights}\n    dist[start] = 0\n    pq = [(0, start)]\n    visited = set()\n    # Your Dijkstra code here\n    return dist[end]\n\nflights = {\n    'NYC': [('CHI', 200), ('DC', 100)],\n    'CHI': [('NYC', 200), ('LA', 300)],\n    'DC': [('NYC', 100), ('CHI', 150), ('LA', 500)],\n    'LA': [('CHI', 300), ('DC', 500)]\n}\nprint(cheapest_flight(flights, 'NYC', 'LA'))  # 450",
        expectedOutput: "450",
        hint: "Standard Dijkstra: pop min from heap, update neighbors if shorter path found.",
        hintZh: "标准 Dijkstra：从堆中弹出最小值，如果找到更短路径则更新邻居。",
        solution: "import heapq\n\ndef cheapest_flight(flights, start, end):\n    dist = {city: float('inf') for city in flights}\n    dist[start] = 0\n    pq = [(0, start)]\n    visited = set()\n    while pq:\n        d, city = heapq.heappop(pq)\n        if city in visited:\n            continue\n        visited.add(city)\n        for nb, w in flights[city]:\n            if d + w < dist[nb]:\n                dist[nb] = d + w\n                heapq.heappush(pq, (dist[nb], nb))\n    return dist[end]\n\nflights = {\n    'NYC': [('CHI', 200), ('DC', 100)],\n    'CHI': [('NYC', 200), ('LA', 300)],\n    'DC': [('NYC', 100), ('CHI', 150), ('LA', 500)],\n    'LA': [('CHI', 300), ('DC', 500)]\n}\nprint(cheapest_flight(flights, 'NYC', 'LA'))",
      },
    },
    {
      type: "text",
      emoji: "⚠️",
      content: `## ⚠️ Dijkstra's Limitations

**Dijkstra works when:** All edge weights are **non-negative** (≥ 0)

**Dijkstra FAILS when:** There are **negative weights** ❌

For negative weights, use **Bellman-Ford** algorithm instead.

| Algorithm | Handles Negative? | Time | Best for |
|-----------|-------------------|------|----------|
| BFS | N/A (unweighted) | O(V+E) | Unweighted shortest path |
| Dijkstra | No ❌ | O((V+E) log V) | Weighted, non-negative |
| Bellman-Ford | Yes ✅ | O(VE) | Graphs with negative edges |
| Floyd-Warshall | Yes ✅ | O(V³) | All-pairs shortest path |

🔑 **Dijkstra = BFS with a priority queue, always expanding the closest node first!**`,
    },
    {
      type: "quiz",
      content: "🎓 Dijkstra Quiz · Dijkstra 测验",
      quiz: [
        {
          question: "What data structure does Dijkstra's algorithm use?\nDijkstra 算法使用什么数据结构？",
          options: ["Queue", "Stack", "Priority queue (min-heap)", "Array"],
          correctIndex: 2,
          explanation: "Dijkstra uses a priority queue to always process the closest node first. 使用优先队列总是先处理最近的节点。",
        },
        {
          question: "Dijkstra's time complexity with a binary heap?\n用二叉堆的 Dijkstra 时间复杂度？",
          options: ["O(V²)", "O(V + E)", "O((V+E) log V)", "O(V³)"],
          correctIndex: 2,
          explanation: "Each vertex is extracted once (V log V) and each edge relaxed once (E log V). 每个顶点提取一次，每条边松弛一次。",
        },
        {
          question: "Dijkstra fails when there are?\nDijkstra 在有什么时失败？",
          options: ["Too many nodes", "Negative edge weights", "Cycles", "Disconnected components"],
          correctIndex: 1,
          explanation: "Negative weights can cause Dijkstra to miss shorter paths. 负权重会导致 Dijkstra 错过更短的路径。",
        },
        {
          question: "In Dijkstra, initially all distances are set to?\n在 Dijkstra 中，初始所有距离设为？",
          options: ["0", "1", "Infinity", "-1"],
          correctIndex: 2,
          explanation: "All distances start at infinity except the source (which is 0). 除源点(0)外都设为无穷大。",
        },
        {
          question: "Dijkstra is a ___ algorithm?\nDijkstra 是一种___算法？",
          options: ["Divide and conquer", "Dynamic programming", "Greedy", "Backtracking"],
          correctIndex: 2,
          explanation: "Dijkstra greedily picks the closest unvisited node each step. 每步贪心选择最近的未访问节点。",
        },
        {
          question: "GPS navigation uses which algorithm?\nGPS 导航使用哪种算法？",
          options: ["BFS", "DFS", "Dijkstra (or A*)", "Bubble sort"],
          correctIndex: 2,
          explanation: "GPS uses Dijkstra or A* (Dijkstra + heuristic) for route finding. GPS 使用 Dijkstra 或 A*。",
        },
        {
          question: "What is 'relaxation' in Dijkstra's context?\nDijkstra 中的「松弛」是什么？",
          options: ["Taking a break", "Updating a shorter distance to a node", "Removing an edge", "Adding a node"],
          correctIndex: 1,
          explanation: "Relaxation: if we found a shorter path to a node, update its distance. 如果找到更短的路径就更新距离。",
        },
        {
          question: "For all-pairs shortest paths, which algorithm?\n所有节点对最短路径用哪个算法？",
          options: ["Run Dijkstra once", "BFS", "Floyd-Warshall", "DFS"],
          correctIndex: 2,
          explanation: "Floyd-Warshall computes shortest paths between ALL pairs in O(V³). Floyd-Warshall 在 O(V³) 内计算所有节点对的最短路径。",
        },
      ],
    },
  ],
};

const alg_5_3: Lesson = {
  id: "alg-5-3",
  moduleId: "alg-5",
  title: "Topological Sort",
  subtitle: "Ordering dependencies · 拓扑排序",
  icon: "📋",
  xp: 25,
  duration: "20 min",
  order: 3,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🕸️",
      content: `## 🕸️ Web: Ordering Things with Dependencies!

Some things must come BEFORE others. Topological sort figures out the right order!

有些事必须在其他事之前。拓扑排序找出正确的顺序！

🎯 **What you'll learn:**
- What topological sort is
- Kahn's algorithm (BFS-based)
- DFS-based topological sort
- Detecting cycles

> 🏠 Real-world analogy: College course prerequisites! 📚
> - You must take Calculus I before Calculus II
> - You must take Programming before Data Structures
> - Topological sort finds a valid order to take ALL courses!
>
> 现实类比：大学课程先修要求！
> - 必须先修微积分 I 才能修微积分 II
> - 拓扑排序找到修完所有课程的有效顺序！

🔑 **Only works on DAGs** (Directed Acyclic Graphs — no cycles!)`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Kahn's Algorithm (BFS-based)

Start with nodes that have no prerequisites!
从没有先修要求的节点开始！`,
      code: `from collections import deque

def topological_sort_kahn(graph, nodes):
    """Kahn's algorithm: BFS-based topological sort"""
    # Calculate in-degree for each node
    in_degree = {node: 0 for node in nodes}
    for node in graph:
        for neighbor in graph[node]:
            in_degree[neighbor] += 1
    
    # Start with nodes that have 0 in-degree
    queue = deque([n for n in nodes if in_degree[n] == 0])
    result = []
    
    print("📊 In-degrees:", {n: in_degree[n] for n in nodes})
    print(f"Starting nodes (in-degree 0): {list(queue)}\\n")
    
    step = 0
    while queue:
        step += 1
        node = queue.popleft()
        result.append(node)
        print(f"  Step {step}: process '{node}'", end="")
        
        freed = []
        for neighbor in graph.get(node, []):
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
                freed.append(neighbor)
        
        if freed:
            print(f" → frees: {freed}")
        else:
            print()
    
    if len(result) != len(nodes):
        print("⚠️ CYCLE DETECTED! Not all nodes processed!")
        return None
    
    return result

# Course prerequisites
courses = {
    'Algebra':      ['Calculus'],
    'Calculus':     ['Linear Algebra', 'Physics'],
    'Programming':  ['Data Structures'],
    'Data Structures': ['Algorithms', 'Databases'],
    'Linear Algebra': ['Machine Learning'],
    'Algorithms':   ['Machine Learning'],
    'Physics':      [],
    'Databases':    [],
    'Machine Learning': []
}

all_courses = list(courses.keys())
print("📚 Course Prerequisites:")
for course, prereqs in courses.items():
    if prereqs:
        print(f"  {course} → {prereqs}")
    else:
        print(f"  {course} (no dependencies)")

print(f"\\n📋 Topological Sort (valid course order):")
order = topological_sort_kahn(courses, all_courses)
print(f"\\n✅ Valid order: {' → '.join(order)}")`,
    },
    {
      type: "code",
      emoji: "🔄",
      content: `## 🔄 DFS-based Topological Sort

Alternative: use DFS post-order and reverse!
替代方法：用 DFS 后序遍历再反转！`,
      code: `def topological_sort_dfs(graph, nodes):
    """DFS-based topological sort"""
    visited = set()
    stack = []  # Result in reverse order
    cycle = [False]
    in_progress = set()
    
    def dfs(node):
        if node in in_progress:
            cycle[0] = True
            return
        if node in visited:
            return
        
        in_progress.add(node)
        for neighbor in graph.get(node, []):
            dfs(neighbor)
        
        in_progress.remove(node)
        visited.add(node)
        stack.append(node)
        print(f"  Finished: {node}")
    
    for node in nodes:
        if node not in visited:
            dfs(node)
    
    if cycle[0]:
        return None
    
    return stack[::-1]  # Reverse post-order

# Build process (like a Makefile)
build = {
    'main.cpp':    ['utils.o', 'math.o'],
    'utils.cpp':   ['utils.o'],
    'math.cpp':    ['math.o'],
    'utils.o':     ['app.exe'],
    'math.o':      ['app.exe'],
    'app.exe':     []
}

all_files = list(build.keys())
print("🔧 Build Dependencies:")
for f, deps in build.items():
    if deps:
        print(f"  {f} → {deps}")

print(f"\\n📋 DFS Topological Sort:")
order = topological_sort_dfs(build, all_files)
if order:
    print(f"\\n✅ Build order: {' → '.join(order)}")

# Cycle detection
print("\\n🔴 Graph with cycle:")
cyclic = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']  # Cycle!
}
result = topological_sort_dfs(cyclic, ['A', 'B', 'C'])
if result is None:
    print("  ⚠️ Cycle detected! Topological sort impossible!")`,
    },
    {
      type: "concept",
      emoji: "🧠",
      content: `## 🧠 Code Anatomy: Kahn's Algorithm`,
      concept: {
        title: "Kahn's Algorithm — The Steps",
        titleZh: "Kahn 算法——步骤解析",
        codeAnatomy: {
          lines: [
            { code: "in_degree = count incoming edges", explanation: "Count how many prerequisites each node has", explanationZh: "计算每个节点有多少先修要求" },
            { code: "queue = [nodes with in_degree 0]", explanation: "Start with nodes that have no prerequisites", explanationZh: "从没有先修要求的节点开始" },
            { code: "node = queue.popleft()", explanation: "Process next node with no remaining prerequisites", explanationZh: "处理下一个没有剩余先修要求的节点" },
            { code: "in_degree[neighbor] -= 1", explanation: "Remove this prerequisite for each dependent", explanationZh: "为每个依赖节点移除这个先修要求" },
            { code: "if in_degree[neighbor] == 0: queue.append", explanation: "If all prerequisites met, add to queue", explanationZh: "如果所有先修要求满足，加入队列" },
          ],
        },
      },
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Task Scheduler · 练习：任务调度器`,
      exercise: {
        prompt: "Given tasks and dependencies, find a valid execution order using topological sort.",
        promptZh: "给定任务和依赖关系，用拓扑排序找到有效的执行顺序。",
        starterCode: "from collections import deque\n\ndef task_order(n, deps):\n    graph = {i: [] for i in range(n)}\n    in_deg = {i: 0 for i in range(n)}\n    for a, b in deps:  # a must come before b\n        graph[a].append(b)\n        in_deg[b] += 1\n    # Kahn's algorithm\n    queue = deque([i for i in range(n) if in_deg[i] == 0])\n    result = []\n    # Your code here\n    return result\n\nprint(task_order(4, [[0,1],[0,2],[1,3],[2,3]]))  # e.g. [0,1,2,3]",
        expectedOutput: "[0, 1, 2, 3]",
        hint: "Process queue: pop node, add to result, decrement in-degree of neighbors, add 0-degree neighbors to queue.",
        hintZh: "处理队列：弹出节点，加入结果，递减邻居入度，将入度为 0 的邻居加入队列。",
        solution: "from collections import deque\n\ndef task_order(n, deps):\n    graph = {i: [] for i in range(n)}\n    in_deg = {i: 0 for i in range(n)}\n    for a, b in deps:\n        graph[a].append(b)\n        in_deg[b] += 1\n    queue = deque([i for i in range(n) if in_deg[i] == 0])\n    result = []\n    while queue:\n        node = queue.popleft()\n        result.append(node)\n        for nb in graph[node]:\n            in_deg[nb] -= 1\n            if in_deg[nb] == 0:\n                queue.append(nb)\n    return result\n\nprint(task_order(4, [[0,1],[0,2],[1,3],[2,3]]))",
      },
    },
    {
      type: "quiz",
      content: "🎓 Topological Sort Quiz · 拓扑排序测验",
      quiz: [
        {
          question: "Topological sort works on which type of graph?\n拓扑排序适用于哪种图？",
          options: ["Any graph", "DAG (Directed Acyclic Graph)", "Undirected graph", "Complete graph"],
          correctIndex: 1,
          explanation: "Topological sort only works on DAGs — directed graphs with no cycles. 只适用于 DAG。",
        },
        {
          question: "In Kahn's algorithm, which nodes start in the queue?\n在 Kahn 算法中，哪些节点最先入队？",
          options: ["All nodes", "Nodes with most edges", "Nodes with in-degree 0", "Random nodes"],
          correctIndex: 2,
          explanation: "Nodes with no incoming edges (no prerequisites) start first. 没有入边的节点先开始。",
        },
        {
          question: "If topological sort can't process all nodes, it means?\n如果拓扑排序不能处理所有节点，说明？",
          options: ["The graph is too large", "There's a cycle", "The graph is disconnected", "The algorithm failed"],
          correctIndex: 1,
          explanation: "If some nodes remain, there's a cycle — their in-degrees never reach 0. 有环——某些节点入度永远不为 0。",
        },
        {
          question: "Time complexity of topological sort?\n拓扑排序的时间复杂度？",
          options: ["O(V²)", "O(V + E)", "O(V log V)", "O(E²)"],
          correctIndex: 1,
          explanation: "We process each vertex and edge once: O(V + E). 每个顶点和边处理一次。",
        },
        {
          question: "Which is a real-world use of topological sort?\n拓扑排序的现实应用？",
          options: ["Sorting numbers", "Course scheduling with prerequisites", "Finding shortest path", "Balancing a tree"],
          correctIndex: 1,
          explanation: "Course scheduling, build systems, task dependencies all use topological sort. 课程安排、构建系统、任务依赖都用拓扑排序。",
        },
        {
          question: "Can a graph have multiple valid topological orderings?\n一个图能有多个有效的拓扑排序吗？",
          options: ["No, always unique", "Yes, usually multiple", "Only if it has cycles", "Only for trees"],
          correctIndex: 1,
          explanation: "Most DAGs have multiple valid topological orderings. 大多数 DAG 有多个有效的拓扑排序。",
        },
        {
          question: "DFS-based topological sort uses which order?\nDFS 拓扑排序使用什么顺序？",
          options: ["Pre-order", "In-order", "Reverse post-order", "Level-order"],
          correctIndex: 2,
          explanation: "DFS finishes deepest nodes first; reversing gives topological order. DFS 先完成最深的节点；反转得到拓扑顺序。",
        },
        {
          question: "A node with in-degree 0 in a DAG is called?\nDAG 中入度为 0 的节点叫什么？",
          options: ["Leaf", "Source", "Sink", "Root"],
          correctIndex: 1,
          explanation: "A node with no incoming edges is a source — it has no prerequisites. 没有入边的节点是源。",
        },
      ],
    },
  ],
};

const alg_5_4: Lesson = {
  id: "alg-5-4",
  moduleId: "alg-5",
  title: "Graph Applications",
  subtitle: "Real-world graph problems · 图的应用",
  icon: "🌐",
  xp: 25,
  duration: "22 min",
  order: 4,
  gradeRange: [9, 12],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      type: "text",
      emoji: "🕸️",
      content: `## 🕸️ Web: Graphs Are EVERYWHERE!

Graphs aren't just academic — they power the modern world!

图不只是学术性的——它们驱动着现代世界！

🎯 **What you'll learn:**
- Cycle detection
- Bipartite checking
- Graph coloring basics
- Real-world applications

> 🏠 Real-world graph applications:
> - 🌐 **Internet** — websites are nodes, links are edges
> - 👥 **Social networks** — people are nodes, friendships are edges
> - 🗺️ **Maps** — intersections are nodes, roads are edges
> - 🧬 **Biology** — proteins, neural networks
> - 📦 **Supply chains** — warehouses and delivery routes

🔑 **If you can model it as a graph, you can use graph algorithms to solve it!**`,
    },
    {
      type: "code",
      emoji: "🔴",
      content: `## 🔴 Cycle Detection

Does a directed graph have a cycle?
有向图有环吗？`,
      code: `def has_cycle(graph, nodes):
    """Detect cycle in directed graph using DFS"""
    WHITE, GRAY, BLACK = 0, 1, 2
    color = {node: WHITE for node in nodes}
    
    def dfs(node):
        color[node] = GRAY  # Currently being explored
        
        for neighbor in graph.get(node, []):
            if color[neighbor] == GRAY:
                print(f"  🔴 Cycle found! {node} → {neighbor} (back edge)")
                return True
            if color[neighbor] == WHITE:
                if dfs(neighbor):
                    return True
        
        color[node] = BLACK  # Fully explored
        return False
    
    for node in nodes:
        if color[node] == WHITE:
            if dfs(node):
                return True
    return False

# No cycle
dag = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': []
}
print("DAG (no cycle):")
print(f"  Has cycle: {has_cycle(dag, ['A','B','C','D'])}")

# Has cycle
cyclic = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']  # Back to A!
}
print("\\nCyclic graph:")
print(f"  Has cycle: {has_cycle(cyclic, ['A','B','C'])}")

# Deadlock detection!
print("\\n🔒 Deadlock Detection:")
processes = {
    'P1': ['R1'],  # P1 wants R1
    'R1': ['P2'],  # R1 held by P2
    'P2': ['R2'],  # P2 wants R2
    'R2': ['P1'],  # R2 held by P1 → DEADLOCK!
}
print(f"  Deadlock: {has_cycle(processes, ['P1','R1','P2','R2'])}")`,
    },
    {
      type: "code",
      emoji: "🎨",
      content: `## 🎨 Bipartite Graph Check

Can we color a graph with 2 colors so no adjacent nodes share a color?
能用 2 种颜色给图染色使得相邻节点颜色不同吗？`,
      code: `from collections import deque

def is_bipartite(graph):
    """Check if graph is bipartite using BFS coloring"""
    color = {}
    
    for start in graph:
        if start in color:
            continue
        
        queue = deque([start])
        color[start] = 0
        
        while queue:
            node = queue.popleft()
            for neighbor in graph[node]:
                if neighbor not in color:
                    color[neighbor] = 1 - color[node]  # Opposite color
                    queue.append(neighbor)
                elif color[neighbor] == color[node]:
                    print(f"  ❌ Conflict: {node} and {neighbor} both color {color[node]}")
                    return False, {}
    
    return True, color

# Bipartite graph (like students and classes)
bipartite = {
    'Alice': ['Math', 'Science'],
    'Bob': ['Math', 'English'],
    'Carol': ['Science', 'English'],
    'Math': ['Alice', 'Bob'],
    'Science': ['Alice', 'Carol'],
    'English': ['Bob', 'Carol']
}

print("📊 Student-Class graph:")
result, colors = is_bipartite(bipartite)
print(f"  Bipartite: {result}")
if result:
    g1 = [n for n, c in colors.items() if c == 0]
    g2 = [n for n, c in colors.items() if c == 1]
    print(f"  Group 1: {g1}")
    print(f"  Group 2: {g2}")

# Non-bipartite (odd cycle)
print("\\n🔺 Triangle graph (odd cycle):")
triangle = {
    'A': ['B', 'C'],
    'B': ['A', 'C'],
    'C': ['A', 'B']
}
result, _ = is_bipartite(triangle)
print(f"  Bipartite: {result}")`,
    },
    {
      type: "code",
      emoji: "🌍",
      content: `## 🌍 Graph Applications Showcase

Graphs solve real problems across many domains!
图解决各个领域的实际问题！`,
      code: `from collections import deque

# 1. Island counting (connected components in a grid)
def count_islands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def bfs(r, c):
        queue = deque([(r, c)])
        grid[r][c] = '0'
        while queue:
            r, c = queue.popleft()
            for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
                nr, nc = r+dr, c+dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1':
                    grid[nr][nc] = '0'
                    queue.append((nr, nc))
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                bfs(r, c)
    return count

grid = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
]
print("🏝️ Island Counting:")
print("  Grid:")
for row in grid:
    print(f"    {' '.join(row)}")
# Make a copy since bfs modifies the grid
grid_copy = [row[:] for row in grid]
print(f"  Islands: {count_islands(grid_copy)}")

# 2. Word ladder (BFS)
def word_ladder(begin, end, word_list):
    word_set = set(word_list)
    queue = deque([(begin, [begin])])
    visited = {begin}
    
    while queue:
        word, path = queue.popleft()
        if word == end:
            return path
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                next_word = word[:i] + c + word[i+1:]
                if next_word in word_set and next_word not in visited:
                    visited.add(next_word)
                    queue.append((next_word, path + [next_word]))
    return None

print("\\n🔤 Word Ladder:")
words = ["hot","dot","dog","lot","log","cog"]
path = word_ladder("hit", "cog", words)
if path:
    print(f"  hit → cog: {' → '.join(path)}")
    print(f"  Steps: {len(path) - 1}")

print("\\n🌟 Graph algorithms power:")
print("  🗺️ Google Maps — shortest routes")
print("  👥 Facebook — friend suggestions")
print("  🎮 Game AI — pathfinding (A*)")
print("  🧬 Bioinformatics — protein networks")
print("  📦 Amazon — delivery optimization")`,
    },
    {
      type: "interactive",
      content: `## 🎯 Practice: Clone a Graph · 练习：克隆图`,
      exercise: {
        prompt: "Given an adjacency list, create a deep copy of the graph.",
        promptZh: "给定邻接表，创建图的深拷贝。",
        starterCode: "def clone_graph(graph):\n    # Create a new graph with same structure\n    # but different objects\n    new_graph = {}\n    # Your code here\n    return new_graph\n\noriginal = {'A': ['B','C'], 'B': ['A'], 'C': ['A']}\ncloned = clone_graph(original)\nprint(cloned)\nprint(original is cloned)  # False",
        expectedOutput: "{'A': ['B', 'C'], 'B': ['A'], 'C': ['A']}\nFalse",
        hint: "Iterate over each node and create a new list of neighbors.",
        hintZh: "遍历每个节点，创建新的邻居列表。",
        solution: "def clone_graph(graph):\n    new_graph = {}\n    for node in graph:\n        new_graph[node] = list(graph[node])\n    return new_graph\n\noriginal = {'A': ['B','C'], 'B': ['A'], 'C': ['A']}\ncloned = clone_graph(original)\nprint(cloned)\nprint(original is cloned)",
      },
    },
    {
      type: "text",
      emoji: "🏆",
      content: `## 🏆 Algorithms Course Complete!

Congratulations! You've learned the most important algorithms in computer science!

恭喜！你已经学完了计算机科学中最重要的算法！

**Your Algorithm Toolkit:**
- 🔍 **Searching:** Linear, Binary, 2D, Applications
- ⚡ **Sorting:** Bubble, Selection, Insertion, Merge, Quick
- 🌀 **Recursion:** Patterns, Backtracking, Divide & Conquer
- 🧩 **Dynamic Programming:** Memoization, Tabulation, Classic Problems, Grids
- 🕸️ **Graph Algorithms:** BFS, DFS, Dijkstra, Topological Sort, Applications

🔑 **What's next?**
- Practice on LeetCode, Codeforces, HackerRank
- Join programming competitions (USACO, Codeforces)
- Build projects that use these algorithms
- The more you practice, the more natural they become!

🎓 **Remember:** Algorithms are tools for solving problems. The best algorithm is the one you understand and can implement correctly!`,
    },
    {
      type: "quiz",
      content: "🎓 Graph Applications Quiz · 图应用测验",
      quiz: [
        {
          question: "How do you detect a cycle in a directed graph?\n如何检测有向图中的环？",
          options: ["BFS only", "DFS with 3-color marking", "Counting edges", "Sorting nodes"],
          correctIndex: 1,
          explanation: "DFS with WHITE/GRAY/BLACK coloring detects back edges (cycles). 三色 DFS 检测回边（环）。",
        },
        {
          question: "A bipartite graph has no?\n二部图没有？",
          options: ["Edges", "Nodes", "Odd-length cycles", "Even-length cycles"],
          correctIndex: 2,
          explanation: "A graph is bipartite if and only if it has no odd-length cycles. 当且仅当没有奇数长度的环时，图是二部图。",
        },
        {
          question: "Island counting uses which algorithm?\n岛屿计数使用什么算法？",
          options: ["Binary search", "BFS/DFS flood fill", "Sorting", "Dynamic programming"],
          correctIndex: 1,
          explanation: "BFS or DFS flood fill to explore each island (connected component). BFS 或 DFS 洪泛填充探索每个岛屿。",
        },
        {
          question: "Word ladder (hit→cog) uses which algorithm?\n单词接龙使用什么算法？",
          options: ["DFS", "BFS", "Dijkstra", "Binary search"],
          correctIndex: 1,
          explanation: "BFS finds the shortest transformation sequence. BFS 找最短变换序列。",
        },
        {
          question: "Google Maps primarily uses?\n谷歌地图主要使用？",
          options: ["BFS", "DFS", "Dijkstra / A*", "Topological sort"],
          correctIndex: 2,
          explanation: "Dijkstra or A* for weighted shortest path in road networks. 在路网中用 Dijkstra 或 A* 找加权最短路径。",
        },
        {
          question: "Facebook friend suggestions use?\nFacebook 好友推荐使用？",
          options: ["Sorting", "Graph algorithms (mutual friends)", "Binary search", "Dynamic programming"],
          correctIndex: 1,
          explanation: "Find people with many mutual friends = graph neighborhood analysis. 找到有很多共同好友的人。",
        },
        {
          question: "Deadlock detection in OS is an example of?\n操作系统中的死锁检测是什么的例子？",
          options: ["Shortest path", "Cycle detection in resource graph", "Sorting", "Binary search"],
          correctIndex: 1,
          explanation: "Deadlock = cycle in the resource allocation graph. 死锁 = 资源分配图中的环。",
        },
        {
          question: "What's the most important thing about algorithms?\n关于算法最重要的是什么？",
          options: ["Memorizing them", "Understanding WHEN to use each one", "Writing them fast", "Using the hardest one"],
          correctIndex: 1,
          explanation: "Knowing which algorithm to apply to which problem is the real skill! 知道对哪个问题用哪个算法才是真正的技能！",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// EXPORT ALL LESSONS
// ═══════════════════════════════════════════════════════════════

export const ALG_LESSONS: Lesson[] = [
  // Module 1: Searching
  alg_1_1, alg_1_2, alg_1_3, alg_1_4,
  // Module 2: Sorting
  alg_2_1, alg_2_2, alg_2_3, alg_2_4,
  // Module 3: Recursion
  alg_3_1, alg_3_2, alg_3_3, alg_3_4,
  // Module 4: Dynamic Programming
  alg_4_1, alg_4_2, alg_4_3, alg_4_4,
  // Module 5: Graph Algorithms
  alg_5_1, alg_5_2, alg_5_3, alg_5_4,
];