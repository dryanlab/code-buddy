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
          explanation: "By convention, we return -1 to indicate 'not found'. 按惯例，返回 -1 表示"未找到"。",
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
            { code: "for i in range(1, len(arr)):", explanation: "Start from 2nd element (1st is already 'sorted')", explanationZh: "从第二个元素开始（第一个已经"排好序"）" },
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
          explanation: "The largest element 'bubbles' to the end after the first pass. 最大的元素在第一遍后"冒泡"到末尾。",
        },
        {
          question: "Which simple sort uses the fewest comparisons?\n哪种简单排序使用最少的比较次数？",
          options: ["Bubble sort (optimized)", "Selection sort", "Insertion sort (best case)", "They're all the same"],
          correctIndex: 2,
          explanation: "Insertion sort on sorted data: only n-1 comparisons (best case O(n))! 插入排序在排好序的数据上：只需 n-1 次比较！",
        },
        {
          question: "What does 'stable sort' mean?\n"稳定排序"是什么意思？",
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
          question