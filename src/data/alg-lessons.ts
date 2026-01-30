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

🎯 **What you'll learn:** How to implement linear search — the simplest search algorithm that checks every element one by one.
学习目标：实现线性搜索——最简单的搜索算法，逐个检查每个元素。

Imagine you're looking for your friend in a movie theater 🎬 — you walk down each row, checking every seat from left to right. You can't skip ahead because the seats aren't labeled by name!
类比：想象你在电影院找朋友 🎬 — 你沿着每一排走，从左到右检查每个座位。你不能跳过，因为座位没按名字标！

🔑 **Key things to notice:**
- We check EVERY element from index 0 to n-1
- We return immediately when found (early exit)
- If not found after checking all, return -1
- Best case O(1) — first element; Worst case O(n) — last or missing
- 最好 O(1)——第一个就是；最坏 O(n)——最后一个或不存在

👀 **Run the code and watch** how it checks each element and prints ✅ or ❌!`,
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
      codeCpp: `// 🔍 Detective: "Watch me search one by one!"
#include <iostream>
#include <vector>
using namespace std;

int linear_search(vector<int>& arr, int target) {
    for (int i = 0; i < (int)arr.size(); i++) {
        cout << "  Checking index " << i << ": " << arr[i];
        if (arr[i] == target) {
            cout << " ✅ FOUND!" << endl;
            return i;
        }
        cout << " ❌" << endl;
    }
    return -1;
}

int main() {
    vector<int> numbers = {4, 2, 7, 1, 9, 3, 8, 5};
    cout << "Array: [4, 2, 7, 1, 9, 3, 8, 5]" << endl;
    cout << "\nSearching for 9:" << endl;
    int result = linear_search(numbers, 9);
    cout << "Found at index: " << result << endl;
    cout << "\nSearching for 6:" << endl;
    result = linear_search(numbers, 6);
    cout << "Result: " << result << " (not found)" << endl;
    cout << "\n📊 Array size: " << numbers.size() << endl;
    cout << "Best case: 1 comparison (first element)" << endl;
    cout << "Worst case: " << numbers.size() << " comparisons (last or not found)" << endl;
    cout << "Average: " << numbers.size()/2 << " comparisons" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write a linear search that returns the INDEX of the LAST occurrence of a target in an array. Return -1 if not found.",
        promptZh: "写一个线性搜索，返回目标值在数组中最后一次出现的索引。未找到返回 -1。",
        starterCode: "def find_last(arr, target):\\n    # Your code here\\n    pass\\n\\nprint(find_last([3, 1, 4, 1, 5, 1], 1))\\nprint(find_last([3, 1, 4], 9))",
        expectedOutput: "5\\n-1",
        hint: "Track the last found index. Don't return early — check ALL elements!",
        hintZh: "记录最后找到的索引。不要提前返回——检查所有元素！",
        solution: "def find_last(arr, target):\\n    last = -1\\n    for i in range(len(arr)):\\n        if arr[i] == target:\\n            last = i\\n    return last\\n\\nprint(find_last([3, 1, 4, 1, 5, 1], 1))\\nprint(find_last([3, 1, 4], 9))",
      },
      exerciseCpp: {
        prompt: "Write a linear search that returns the INDEX of the LAST occurrence of a target. Return -1 if not found.",
        promptZh: "写一个线性搜索，返回目标值最后一次出现的索引。未找到返回 -1。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint find_last(vector<int>& arr, int target) {\n    // Your code here\n    return -1;\n}\n\nint main() {\n    vector<int> a = {3,1,4,1,5,1};\n    cout << find_last(a, 1) << endl;\n    vector<int> b = {3,1,4};\n    cout << find_last(b, 9) << endl;\n    return 0;\n}",
        expectedOutput: "5\n-1",
        hint: "Track the last found index. Don't return early — check ALL elements!",
        hintZh: "记录最后找到的索引。不要提前返回——检查所有元素！",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint find_last(vector<int>& arr, int target) {\n    int last = -1;\n    for (int i = 0; i < (int)arr.size(); i++)\n        if (arr[i] == target) last = i;\n    return last;\n}\n\nint main() {\n    vector<int> a = {3,1,4,1,5,1};\n    cout << find_last(a, 1) << endl;\n    vector<int> b = {3,1,4};\n    cout << find_last(b, 9) << endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🎯 **What you'll learn:** How linear search adapts to different data types and problems — strings, finding all matches, and finding minimums.
学习目标：线性搜索如何适用于不同数据类型和问题——字符串、查找所有匹配项、查找最小值。

Linear search is like a Swiss Army knife 🔪 — simple but incredibly versatile! You can use it to search text, find every copy of something, or track the best item you've seen. Same idea, many applications!
类比：线性搜索就像瑞士军刀 🔪 — 简单但用途广泛！你可以搜索文本、找到所有副本、或追踪见过的最佳选项。同一思想，多种应用！

🔑 **Key things to notice:**
- \`enumerate()\` gives both index and value — perfect for searching
- Finding ALL occurrences means we never return early
- Finding minimum requires tracking the best-so-far
- The core pattern (loop + compare) stays the same across all variations
- 核心模式（循环+比较）在所有变体中保持不变

👀 **Run the code and observe** how each variation tweaks the basic linear search pattern!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int find_char(const string& text, char ch) {
    for (int i = 0; i < (int)text.size(); i++)
        if (text[i] == ch) return i;
    return -1;
}

vector<int> find_all(const vector<int>& arr, int target) {
    vector<int> positions;
    for (int i = 0; i < (int)arr.size(); i++)
        if (arr[i] == target) positions.push_back(i);
    return positions;
}

pair<int,int> find_min(const vector<int>& arr) {
    int min_val = arr[0], min_idx = 0;
    for (int i = 1; i < (int)arr.size(); i++)
        if (arr[i] < min_val) { min_val = arr[i]; min_idx = i; }
    return {min_idx, min_val};
}

int main() {
    string word = "algorithm";
    cout << "'r' in '" << word << "' at index: " << find_char(word, 'r') << endl;

    vector<int> data = {3,1,4,1,5,9,2,6,5,3,5};
    auto pos5 = find_all(data, 5);
    cout << "\nAll positions of 5: [";
    for (int i = 0; i < (int)pos5.size(); i++) { if (i) cout << ", "; cout << pos5[i]; }
    cout << "]" << endl;
    auto pos1 = find_all(data, 1);
    cout << "All positions of 1: [";
    for (int i = 0; i < (int)pos1.size(); i++) { if (i) cout << ", "; cout << pos1[i]; }
    cout << "]" << endl;

    auto [idx, val] = find_min(data);
    cout << "\nMinimum value: " << val << " at index " << idx << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write a function that finds the SECOND largest value in an array using linear search.",
        promptZh: "写一个函数，用线性搜索找到数组中第二大的值。",
        starterCode: "def second_largest(arr):\\n    # Your code here\\n    pass\\n\\nprint(second_largest([3, 1, 4, 1, 5, 9, 2, 6]))",
        expectedOutput: "6",
        hint: "Track both the largest and second largest as you scan through.",
        hintZh: "扫描数组时同时跟踪最大值和第二大值。",
        solution: "def second_largest(arr):\\n    first = second = float('-inf')\\n    for x in arr:\\n        if x > first:\\n            second = first\\n            first = x\\n        elif x > second and x != first:\\n            second = x\\n    return second\\n\\nprint(second_largest([3, 1, 4, 1, 5, 9, 2, 6]))",
      },
      exerciseCpp: {
        prompt: "Write a function that finds the SECOND largest value in an array.",
        promptZh: "写一个函数找到数组中第二大的值。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nint second_largest(vector<int>& arr) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    vector<int> a = {3,1,4,1,5,9,2,6};\n    cout << second_largest(a) << endl;\n    return 0;\n}",
        expectedOutput: "6",
        hint: "Track both the largest and second largest as you scan.",
        hintZh: "扫描时同时跟踪最大值和第二大值。",
        solution: "#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nint second_largest(vector<int>& arr) {\n    int first=INT_MIN, second=INT_MIN;\n    for (int x : arr) {\n        if (x>first) { second=first; first=x; }\n        else if (x>second && x!=first) second=x;\n    }\n    return second;\n}\n\nint main() {\n    vector<int> a = {3,1,4,1,5,9,2,6};\n    cout << second_largest(a) << endl;\n    return 0;\n}",
        language: "cpp",
      },
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
线性搜索简单通用，但对大数据来说太慢！

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔍 Frequency Counter · 频率计数器",
        description: "Write a function that finds the MOST FREQUENT element in an array. Return (element, count).\n写一个函数找到数组中出现最多的元素。返回 (元素, 次数)。",
        starterCode: "def most_frequent(arr):\n    # Find most frequent element\n    pass\n\nprint(most_frequent([1,3,2,1,4,1,3,1]))",
        hint: "Use a dictionary to count occurrences, then find the max.\n用字典计数，然后找最大值。",
        solution: "def most_frequent(arr):\n    counts = {}\n    for x in arr:\n        counts[x] = counts.get(x, 0) + 1\n    best = max(counts, key=counts.get)\n    return (best, counts[best])\n\nprint(most_frequent([1,3,2,1,4,1,3,1]))",
        expectedOutput: "(1, 4)",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎯 Two Sum · 两数之和",
        description: "Find TWO elements that add up to target. Return their indices.\n找两个加起来等于目标的元素。返回索引。",
        starterCode: "def two_sum(arr, target):\n    pass\n\nprint(two_sum([2, 7, 11, 15], 9))",
        hint: "Use a dictionary to store seen values and their indices.\n用字典存已见的值和索引。",
        solution: "def two_sum(arr, target):\n    seen = {}\n    for i, x in enumerate(arr):\n        if target - x in seen:\n            return (seen[target - x], i)\n        seen[x] = i\n\nprint(two_sum([2, 7, 11, 15], 9))",
        expectedOutput: "(0, 1)",
      },
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

🎯 **What you'll learn:** How binary search eliminates half the remaining elements with each comparison, achieving O(log n) speed.
学习目标：二分搜索如何每次比较淘汰一半剩余元素，达到 O(log n) 的速度。

Think of guessing a number between 1-100 🎯 — a smart player always guesses the MIDDLE! If told "too high", they ignore the upper half. If "too low", ignore the lower half. Each guess cuts possibilities in half!
类比：想象猜 1-100 的数字 🎯 — 聪明的玩家总是猜中间！如果说"太大"，忽略上半部分。如果"太小"，忽略下半部分。每次猜测都将可能性减半！

🔑 **Key things to notice:**
- The array MUST be sorted for binary search to work
- We maintain \`left\` and \`right\` pointers to track the search range
- \`mid = (left + right) // 2\` calculates the middle index
- Each step halves the search space — that's why it's O(log n)
- 每步将搜索空间减半——这就是 O(log n) 的原因

👀 **Run the code and watch** how the search range shrinks with each step!`,
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
      codeCpp: `// 🔍 Detective: "Watch me cut the search space in HALF each time!"
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int binary_search(vector<int>& arr, int target) {
    int left = 0, right = (int)arr.size() - 1, step = 0;
    while (left <= right) {
        step++;
        int mid = (left + right) / 2;
        cout << "  Step " << step << ": left=" << left << ", right=" << right
             << ", mid=" << mid << ", arr[mid]=" << arr[mid];
        if (arr[mid] == target) { cout << " ✅ FOUND!" << endl; return mid; }
        else if (arr[mid] < target) { cout << " → go RIGHT (target is bigger)" << endl; left = mid + 1; }
        else { cout << " → go LEFT (target is smaller)" << endl; right = mid - 1; }
    }
    cout << "  Not found after " << step << " steps" << endl;
    return -1;
}

int main() {
    vector<int> nums = {2,5,8,12,16,23,38,42,55,67,78,91};
    cout << "Sorted array: [2,5,8,12,16,23,38,42,55,67,78,91]" << endl;
    cout << "Size: " << nums.size() << " elements\n" << endl;
    cout << "Searching for 23:" << endl;
    int idx = binary_search(nums, 23);
    cout << "Result: index " << idx << "\n" << endl;
    cout << "Searching for 50:" << endl;
    idx = binary_search(nums, 50);
    cout << "Result: " << idx << endl;
    int n = nums.size(), logn = (int)ceil(log2(n));
    cout << "\n📊 For " << n << " elements:" << endl;
    cout << "  Linear search: up to " << n << " steps" << endl;
    cout << "  Binary search: up to " << logn << " steps" << endl;
    cout << "  That's " << n/logn << "x faster!" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Implement binary search that returns the INSERTION POINT (like bisect_left).",
        promptZh: "实现二分搜索，返回插入位置（类似 bisect_left）。",
        starterCode: "def bisect_left(arr, target):\\n    # Your code here\\n    pass\\n\\nprint(bisect_left([1, 3, 5, 7, 9], 5))\\nprint(bisect_left([1, 3, 5, 7, 9], 6))",
        expectedOutput: "2\\n3",
        hint: "When not found, 'left' will be at the insertion point.",
        hintZh: "当未找到时，'left' 就在插入位置。",
        solution: "def bisect_left(arr, target):\\n    left, right = 0, len(arr)\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] < target:\\n            left = mid + 1\\n        else:\\n            right = mid\\n    return left\\n\\nprint(bisect_left([1, 3, 5, 7, 9], 5))\\nprint(bisect_left([1, 3, 5, 7, 9], 6))",
      },
      exerciseCpp: {
        prompt: "Implement binary search that returns the INSERTION POINT.",
        promptZh: "实现二分搜索，返回插入位置。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint bisect_left(vector<int>& arr, int target) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    vector<int> a = {1,3,5,7,9};\n    cout << bisect_left(a, 5) << endl;\n    cout << bisect_left(a, 6) << endl;\n    return 0;\n}",
        expectedOutput: "2\n3",
        hint: "When not found, 'left' will be at the insertion point.",
        hintZh: "当未找到时，'left' 就在插入位置。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint bisect_left(vector<int>& arr, int target) {\n    int l=0, r=arr.size();\n    while (l<r) { int m=(l+r)/2; if(arr[m]<target) l=m+1; else r=m; }\n    return l;\n}\n\nint main() {\n    vector<int> a = {1,3,5,7,9};\n    cout << bisect_left(a, 5) << endl;\n    cout << bisect_left(a, 6) << endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🎯 **What you'll learn:** How to express binary search using recursion — the function calls itself with a smaller range each time.
学习目标：如何用递归来表达二分搜索——函数每次用更小的范围调用自己。

It's like a boss delegating work 👔 — "Is it in the middle? No? OK, I'll hand the left half to Mini-Me, and Mini-Me will do the same thing!" Each Mini-Me handles a smaller and smaller piece until someone finds it (or gives up).
类比：就像老板分配工作 👔 — "在中间吗？不在？好的，把左半边交给小我来处理，小我也做同样的事！"每个小我处理越来越小的部分，直到找到（或放弃）。

🔑 **Key things to notice:**
- Base case: \`left > right\` means the range is empty — not found
- We calculate \`mid\` the same way as iterative version
- Instead of updating \`left\`/\`right\`, we make a recursive call with new bounds
- Same O(log n) time, but uses O(log n) stack space too
- 同样 O(log n) 时间，但也用 O(log n) 的栈空间

👀 **Run the code and compare** the recursive version's output with the iterative one!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int binary_search_recursive(vector<int>& arr, int target, int left, int right, int depth = 0) {
    string indent(depth * 2, ' ');
    if (left > right) { cout << indent << "Not found!" << endl; return -1; }
    int mid = (left + right) / 2;
    cout << indent << "Searching [" << left << ":" << right << "], mid=" << mid << ", val=" << arr[mid] << endl;
    if (arr[mid] == target) { cout << indent << "Found at " << mid << "!" << endl; return mid; }
    else if (arr[mid] < target) return binary_search_recursive(arr, target, mid+1, right, depth+1);
    else return binary_search_recursive(arr, target, left, mid-1, depth+1);
}

int main() {
    vector<int> nums = {2,5,8,12,16,23,38,42,55,67,78,91};
    cout << "Searching for 23:" << endl;
    cout << "Result: " << binary_search_recursive(nums, 23, 0, nums.size()-1) << endl;
    cout << "\nSearching for 50:" << endl;
    cout << "Result: " << binary_search_recursive(nums, 50, 0, nums.size()-1) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write a recursive binary search that COUNTS comparisons. Return (index, count).",
        promptZh: "写一个递归二分搜索，统计比较次数。返回 (索引, 次数)。",
        starterCode: "def binary_count(arr, target, left=0, right=None, count=0):\\n    pass\\n\\nidx, steps = binary_count([1,3,5,7,9,11,13,15], 11)\\nprint(f'{idx} {steps}')",
        expectedOutput: "5 3",
        hint: "Pass count+1 in each recursive call.",
        hintZh: "每次递归调用传 count+1。",
        solution: "def binary_count(arr, target, left=0, right=None, count=0):\\n    if right is None: right = len(arr) - 1\\n    if left > right: return (-1, count)\\n    mid = (left + right) // 2\\n    count += 1\\n    if arr[mid] == target: return (mid, count)\\n    elif arr[mid] < target: return binary_count(arr, target, mid+1, right, count)\\n    else: return binary_count(arr, target, left, mid-1, count)\\n\\nidx, steps = binary_count([1,3,5,7,9,11,13,15], 11)\\nprint(f'{idx} {steps}')",
      },
      exerciseCpp: {
        prompt: "Write a recursive binary search that COUNTS comparisons.",
        promptZh: "写一个递归二分搜索，统计比较次数。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\npair<int,int> binary_count(vector<int>& arr, int target, int l, int r, int cnt=0) {\n    // Your code here\n    return {-1, cnt};\n}\n\nint main() {\n    vector<int> a={1,3,5,7,9,11,13,15};\n    auto [idx,steps]=binary_count(a,11,0,a.size()-1);\n    cout << idx << ' ' << steps << endl;\n    return 0;\n}",
        expectedOutput: "5 3",
        hint: "Pass count+1 in each recursive call.",
        hintZh: "每次递归调用传 count+1。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\npair<int,int> binary_count(vector<int>& arr, int target, int l, int r, int cnt=0) {\n    if (l>r) return {-1,cnt};\n    int m=(l+r)/2; cnt++;\n    if (arr[m]==target) return {m,cnt};\n    if (arr[m]<target) return binary_count(arr,target,m+1,r,cnt);\n    return binary_count(arr,target,l,m-1,cnt);\n}\n\nint main() {\n    vector<int> a={1,3,5,7,9,11,13,15};\n    auto [idx,steps]=binary_count(a,11,0,a.size()-1);\n    cout << idx << ' ' << steps << endl;\n    return 0;\n}",
        language: "cpp",
      },
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
二分搜索是计算机科学中最重要的算法之一！

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📖 Count Occurrences · 计算出现次数",
        description: "Count how many times target appears in sorted array using binary search (O(log n)).\n用二分搜索计算排序数组中目标出现次数。",
        starterCode: "def count_occurrences(arr, target):\n    pass\n\nprint(count_occurrences([1,2,2,2,3,4,5], 2))\nprint(count_occurrences([1,2,3,4,5], 6))",
        hint: "Find leftmost and rightmost positions with binary search.\n用二分搜索找最左和最右位置。",
        solution: "def count_occurrences(arr, target):\n    def find_left(t):\n        lo, hi = 0, len(arr)-1\n        while lo <= hi:\n            mid = (lo+hi)//2\n            if arr[mid] < t: lo = mid+1\n            else: hi = mid-1\n        return lo\n    left = find_left(target)\n    right = find_left(target+1)\n    return right - left\n\nprint(count_occurrences([1,2,2,2,3,4,5], 2))\nprint(count_occurrences([1,2,3,4,5], 6))",
        expectedOutput: "3\n0",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎯 Peak Finder · 峰值查找",
        description: "Find a peak element using binary search. A peak is greater than its neighbors.\n用二分搜索找峰值元素。",
        starterCode: "def find_peak(arr):\n    pass\n\nprint(find_peak([1, 3, 20, 4, 1, 0]))",
        hint: "If arr[mid] < arr[mid+1], peak is on the right.\n如果 arr[mid] < arr[mid+1]，峰值在右边。",
        solution: "def find_peak(arr):\n    lo, hi = 0, len(arr)-1\n    while lo < hi:\n        mid = (lo+hi)//2\n        if arr[mid] < arr[mid+1]: lo = mid+1\n        else: hi = mid\n    return lo\n\nprint(find_peak([1, 3, 20, 4, 1, 0]))",
        expectedOutput: "2",
      },
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

🎯 **What you'll learn:** How brute force searches a 2D matrix by checking every single cell — simple but slow.
学习目标：暴力搜索如何检查二维矩阵的每一个单元格——简单但缓慢。

Imagine searching for a specific book in a library with no catalog 📚 — you'd have to check every shelf, every row, one book at a time. That's brute force in 2D!
类比：想象在没有目录的图书馆找一本特定的书 📚 — 你得一个书架一个书架、一排一排地检查。这就是二维暴力搜索！

🔑 **Key things to notice:**
- Nested loops: outer for rows, inner for columns
- Time complexity is O(m × n) — checks every cell
- Works on ANY 2D matrix, sorted or not
- We count comparisons to see the cost
- 我们计算比较次数来看代价

👀 **Run the code and count** how many comparisons are needed — then compare with the smart approach next!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

pair<int,int> search_2d_brute(vector<vector<int>>& matrix, int target) {
    int steps = 0;
    for (int i = 0; i < (int)matrix.size(); i++)
        for (int j = 0; j < (int)matrix[0].size(); j++) {
            steps++;
            if (matrix[i][j] == target) {
                cout << "Found " << target << " at (" << i << "," << j << ") in " << steps << " steps" << endl;
                return {i, j};
            }
        }
    cout << "Not found after " << steps << " steps" << endl;
    return {-1, -1};
}

int main() {
    vector<vector<int>> m = {{1,4,7,11},{2,5,8,12},{3,6,9,16},{10,13,14,17}};
    cout << "Brute Force 2D Search:" << endl;
    search_2d_brute(m, 9);
    search_2d_brute(m, 15);
    return 0;
}`,
      exercise: {
        prompt: "Find ALL cells in a 2D matrix containing a target. Return list of (row, col) tuples.",
        promptZh: "找到二维矩阵中包含目标的所有单元格。返回 (行, 列) 元组列表。",
        starterCode: "def find_all_2d(matrix, target):\\n    pass\\n\\nm = [[1,2,3],[4,2,6],[2,8,9]]\\nprint(find_all_2d(m, 2))",
        expectedOutput: "[(0, 1), (1, 1), (2, 0)]",
        hint: "Use nested loops. Append (i, j) whenever matrix[i][j] == target.",
        hintZh: "用嵌套循环。当 matrix[i][j] == target 时添加 (i, j)。",
        solution: "def find_all_2d(matrix, target):\\n    result = []\\n    for i in range(len(matrix)):\\n        for j in range(len(matrix[0])):\\n            if matrix[i][j] == target:\\n                result.append((i, j))\\n    return result\\n\\nm = [[1,2,3],[4,2,6],[2,8,9]]\\nprint(find_all_2d(m, 2))",
      },
      exerciseCpp: {
        prompt: "Find ALL cells in a 2D matrix containing a target.",
        promptZh: "找到二维矩阵中包含目标的所有单元格。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<vector<int>> m={{1,2,3},{4,2,6},{2,8,9}};\n    // Print all (row, col) where value == 2\n    return 0;\n}",
        expectedOutput: "(0, 1)\n(1, 1)\n(2, 0)",
        hint: "Nested loops. Print (i, j) when matrix[i][j] == target.",
        hintZh: "嵌套循环。当 matrix[i][j] == target 时打印。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<vector<int>> m={{1,2,3},{4,2,6},{2,8,9}};\n    for (int i=0;i<(int)m.size();i++)\n        for (int j=0;j<(int)m[0].size();j++)\n            if (m[i][j]==2) cout<<'('<<i<<\", \"<<j<<')'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "⚡",
      content: `## ⚡ Staircase Search: The Smart Way

🎯 **What you'll learn:** How staircase search exploits the sorted structure of a matrix to skip entire rows and columns.
学习目标：阶梯搜索如何利用矩阵的有序结构跳过整行和整列。

Picture standing at the top-right corner of a grid 🏔️ — if the current number is too big, step LEFT (smaller numbers). If too small, step DOWN (bigger numbers). You walk a staircase path to your target!
类比：想象站在网格的右上角 🏔️ — 如果当前数字太大，向左走（更小的数）。如果太小，向下走（更大的数）。你走出一条阶梯路径到达目标！

🔑 **Key things to notice:**
- Start at top-right (or bottom-left) — the "magic corner"
- Each step eliminates an entire row OR column
- Time complexity is O(m + n) — much better than O(m × n)!
- Works because rows are sorted left→right AND columns sorted top→bottom
- 因为行从左到右有序，列从上到下有序

👀 **Run the code and compare** the number of steps vs brute force — the difference is dramatic!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

pair<int,int> staircase_search(vector<vector<int>>& matrix, int target) {
    if (matrix.empty()) return {-1,-1};
    int rows = matrix.size(), cols = matrix[0].size();
    int r = 0, c = cols - 1, steps = 0;
    cout << "Searching for " << target << ":" << endl;
    while (r < rows && c >= 0) {
        steps++;
        cout << "  Step " << steps << ": (" << r << "," << c << ") = " << matrix[r][c];
        if (matrix[r][c] == target) { cout << " ✅ FOUND!" << endl; return {r, c}; }
        else if (matrix[r][c] > target) { cout << " → go LEFT" << endl; c--; }
        else { cout << " → go DOWN" << endl; r++; }
    }
    cout << "  Not found after " << steps << " steps" << endl;
    return {-1, -1};
}

int main() {
    vector<vector<int>> m = {{1,4,7,11},{2,5,8,12},{3,6,9,16},{10,13,14,17}};
    cout << "⚡ Staircase Search O(m+n):" << endl;
    staircase_search(m, 9);
    cout << endl;
    staircase_search(m, 15);
    return 0;
}`,
      exercise: {
        prompt: "Modify staircase search to return the NUMBER OF STEPS taken.",
        promptZh: "修改阶梯搜索，返回所走的步数。",
        starterCode: "def staircase_steps(matrix, target):\\n    pass\\n\\nm = [[1,4,7],[2,5,8],[3,6,9]]\\nprint(staircase_steps(m, 5))\\nprint(staircase_steps(m, 10))",
        expectedOutput: "2\\n3",
        hint: "Count each comparison as a step. Start from top-right corner.",
        hintZh: "每次比较计为一步。从右上角开始。",
        solution: "def staircase_steps(matrix, target):\\n    r, c = 0, len(matrix[0]) - 1\\n    steps = 0\\n    while r < len(matrix) and c >= 0:\\n        steps += 1\\n        if matrix[r][c] == target: return steps\\n        elif matrix[r][c] > target: c -= 1\\n        else: r += 1\\n    return steps\\n\\nm = [[1,4,7],[2,5,8],[3,6,9]]\\nprint(staircase_steps(m, 5))\\nprint(staircase_steps(m, 10))",
      },
      exerciseCpp: {
        prompt: "Modify staircase search to return the NUMBER OF STEPS taken.",
        promptZh: "修改阶梯搜索，返回所走的步数。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint staircase_steps(vector<vector<int>>& m, int target) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    vector<vector<int>> m={{1,4,7},{2,5,8},{3,6,9}};\n    cout << staircase_steps(m, 5) << endl;\n    cout << staircase_steps(m, 10) << endl;\n    return 0;\n}",
        expectedOutput: "2\n3",
        hint: "Count each comparison. Start from top-right corner.",
        hintZh: "每次比较计一步。从右上角开始。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint staircase_steps(vector<vector<int>>& m, int target) {\n    int r=0,c=m[0].size()-1,steps=0;\n    while(r<(int)m.size()&&c>=0){steps++;if(m[r][c]==target)return steps;else if(m[r][c]>target)c--;else r++;}\n    return steps;\n}\n\nint main() {\n    vector<vector<int>> m={{1,4,7},{2,5,8},{3,6,9}};\n    cout << staircase_steps(m, 5) << endl;\n    cout << staircase_steps(m, 10) << endl;\n    return 0;\n}",
        language: "cpp",
      },
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
结构越多（排序），搜索越快！

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🗺️ Island Counter · 岛屿计数器",
        description: "Count islands (connected 1s) in a 2D grid.\n计算二维网格中岛屿数。",
        starterCode: "def count_islands(grid):\n    pass\n\ngrid = [[1,1,0,0],[1,0,0,0],[0,0,1,1],[0,0,0,1]]\nprint(count_islands(grid))",
        hint: "DFS from each unvisited 1. Each DFS = one island.\n从每个未访问的 1 开始 DFS。每次 = 一个岛屿。",
        solution: "def count_islands(grid):\n    rows, cols = len(grid), len(grid[0])\n    count = 0\n    def dfs(r, c):\n        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == 0: return\n        grid[r][c] = 0\n        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == 1:\n                count += 1\n                dfs(r, c)\n    return count\n\ngrid = [[1,1,0,0],[1,0,0,0],[0,0,1,1],[0,0,0,1]]\nprint(count_islands(grid))",
        expectedOutput: "2",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Spiral Matrix · 螺旋矩阵",
        description: "Print a matrix in spiral order (clockwise from top-left).\n按螺旋顺序打印矩阵。",
        starterCode: "def spiral_order(matrix):\n    pass\n\nprint(spiral_order([[1,2,3],[4,5,6],[7,8,9]]))",
        hint: "Use four boundaries: top, bottom, left, right. Shrink after each direction.\n用四个边界：上、下、左、右。每个方向后缩小。",
        solution: "def spiral_order(matrix):\n    result = []\n    top, bottom = 0, len(matrix)-1\n    left, right = 0, len(matrix[0])-1\n    while top <= bottom and left <= right:\n        for c in range(left, right+1): result.append(matrix[top][c])\n        top += 1\n        for r in range(top, bottom+1): result.append(matrix[r][right])\n        right -= 1\n        if top <= bottom:\n            for c in range(right, left-1, -1): result.append(matrix[bottom][c])\n            bottom -= 1\n        if left <= right:\n            for r in range(bottom, top-1, -1): result.append(matrix[r][left])\n            left += 1\n    return result\n\nprint(spiral_order([[1,2,3],[4,5,6],[7,8,9]]))",
        expectedOutput: "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
      },
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

🎯 **What you'll learn:** How to use binary search to find the FIRST position where a condition changes — the most powerful binary search pattern.
学习目标：如何用二分搜索找到条件变化的第一个位置——最强大的二分搜索模式。

Think of a row of light switches 💡 — all OFF on the left, all ON on the right. You want to find exactly WHERE they switch from OFF to ON. Check the middle: if ON, the boundary is to the left; if OFF, it's to the right!
类比：想象一排灯开关 💡 — 左边全关，右边全开。你想找到从关到开的精确位置。检查中间：如果开着，边界在左边；如果关着，在右边！

🔑 **Key things to notice:**
- This is the "boundary search" or "bisect" pattern
- Instead of finding an exact value, we find where a condition flips
- Used for: first occurrence, last occurrence, insertion point
- The template works for ANY monotonic condition
- 这个模板适用于任何单调条件

👀 **Run the code and observe** how it finds exact boundaries in sorted data!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

int find_first_true(vector<bool>& arr) {
    int left = 0, right = (int)arr.size()-1, result = -1;
    while (left <= right) {
        int mid = (left+right)/2;
        if (arr[mid]) { result = mid; right = mid-1; }
        else left = mid+1;
    }
    return result;
}

int find_sqrt(int n) {
    int left = 0, right = n, ans = 0;
    while (left <= right) {
        long long mid = (left+right)/2;
        if (mid*mid <= n) { ans = mid; left = mid+1; }
        else right = mid-1;
    }
    return ans;
}

int find_peak(vector<int>& arr) {
    int left = 0, right = (int)arr.size()-1;
    while (left < right) {
        int mid = (left+right)/2;
        if (arr[mid] < arr[mid+1]) left = mid+1;
        else right = mid;
    }
    return left;
}

int main() {
    vector<bool> bools = {false,false,false,true,true,true};
    cout << "First True: " << find_first_true(bools) << endl;
    cout << "sqrt(27): " << find_sqrt(27) << endl;
    cout << "sqrt(100): " << find_sqrt(100) << endl;
    vector<int> mountain = {1,3,5,7,6,4,2};
    int p = find_peak(mountain);
    cout << "Peak at index " << p << " (value " << mountain[p] << ")" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Find the FIRST position where value >= target in sorted array.",
        promptZh: "找到排序数组中第一个 >= target 的位置。",
        starterCode: "def lower_bound(arr, target):\\n    pass\\n\\nprint(lower_bound([1,3,5,7,9], 5))\\nprint(lower_bound([1,3,5,7,9], 6))\\nprint(lower_bound([1,3,5,7,9], 10))",
        expectedOutput: "2\\n3\\n5",
        hint: "Binary search. When arr[mid] >= target, move right boundary.",
        hintZh: "二分搜索。当 arr[mid] >= target 时移动右边界。",
        solution: "def lower_bound(arr, target):\\n    left, right = 0, len(arr)\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] < target: left = mid + 1\\n        else: right = mid\\n    return left\\n\\nprint(lower_bound([1,3,5,7,9], 5))\\nprint(lower_bound([1,3,5,7,9], 6))\\nprint(lower_bound([1,3,5,7,9], 10))",
      },
      exerciseCpp: {
        prompt: "Find the FIRST position where value >= target in sorted array.",
        promptZh: "找到排序数组中第一个 >= target 的位置。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint lower_bound_custom(vector<int>& a, int t) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    vector<int> a={1,3,5,7,9};\n    cout<<lower_bound_custom(a,5)<<endl;\n    cout<<lower_bound_custom(a,6)<<endl;\n    cout<<lower_bound_custom(a,10)<<endl;\n    return 0;\n}",
        expectedOutput: "2\n3\n5",
        hint: "Binary search. When arr[mid] >= target, move right.",
        hintZh: "二分搜索。当 arr[mid] >= target 时移动右边界。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint lower_bound_custom(vector<int>& a, int t) {\n    int l=0,r=a.size();\n    while(l<r){int m=(l+r)/2;if(a[m]<t)l=m+1;else r=m;}\n    return l;\n}\n\nint main() {\n    vector<int> a={1,3,5,7,9};\n    cout<<lower_bound_custom(a,5)<<endl;\n    cout<<lower_bound_custom(a,6)<<endl;\n    cout<<lower_bound_custom(a,10)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🔄",
      content: `## 🔄 Search in a Rotated Array

🎯 **What you'll learn:** How to adapt binary search for a sorted array that has been rotated — a classic interview favorite.
学习目标：如何将二分搜索适用于被旋转过的排序数组——经典面试最爱。

Imagine a clock where someone grabbed the 12 and spun it 🕐 — the numbers are still in order, but they don't start at 1 anymore! You can still use the structure to search efficiently by figuring out which "half" is normally sorted.
类比：想象有人抓住时钟的12点转了一下 🕐 — 数字仍然有序，但不再从1开始！你仍可以利用结构来高效搜索，只需判断哪"半边"是正常排序的。

🔑 **Key things to notice:**
- At least ONE half of the array is always properly sorted
- Check which half is sorted, then decide if target is in that half
- If target is in the sorted half, search there; otherwise search the other half
- Still O(log n) — we still eliminate half each time!
- 仍然 O(log n)——我们每次仍淘汰一半！

👀 **Run the code and trace** how it handles the rotation point!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

int search_rotated(vector<int>& arr, int target) {
    int left = 0, right = (int)arr.size()-1;
    while (left <= right) {
        int mid = (left+right)/2;
        if (arr[mid] == target) return mid;
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) right = mid-1;
            else left = mid+1;
        } else {
            if (arr[mid] < target && target <= arr[right]) left = mid+1;
            else right = mid-1;
        }
    }
    return -1;
}

int main() {
    vector<int> arr = {4,5,6,7,0,1,2};
    cout << "Array: [4,5,6,7,0,1,2]" << endl;
    cout << "Search 0: index " << search_rotated(arr, 0) << endl;
    cout << "Search 3: index " << search_rotated(arr, 3) << endl;
    cout << "Search 6: index " << search_rotated(arr, 6) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Find the MINIMUM element in a rotated sorted array using binary search.",
        promptZh: "用二分搜索在旋转排序数组中找到最小元素。",
        starterCode: "def find_min_rotated(arr):\\n    pass\\n\\nprint(find_min_rotated([4,5,6,7,0,1,2]))\\nprint(find_min_rotated([3,1,2]))",
        expectedOutput: "0\\n1",
        hint: "If arr[mid] > arr[right], minimum is in right half.",
        hintZh: "如果 arr[mid] > arr[right]，最小值在右半部分。",
        solution: "def find_min_rotated(arr):\\n    left, right = 0, len(arr) - 1\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] > arr[right]: left = mid + 1\\n        else: right = mid\\n    return arr[left]\\n\\nprint(find_min_rotated([4,5,6,7,0,1,2]))\\nprint(find_min_rotated([3,1,2]))",
      },
      exerciseCpp: {
        prompt: "Find the MINIMUM element in a rotated sorted array.",
        promptZh: "在旋转排序数组中找到最小元素。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint find_min(vector<int>& a) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    vector<int> a1={4,5,6,7,0,1,2};\n    cout<<find_min(a1)<<endl;\n    vector<int> a2={3,1,2};\n    cout<<find_min(a2)<<endl;\n    return 0;\n}",
        expectedOutput: "0\n1",
        hint: "If arr[mid] > arr[right], min is in right half.",
        hintZh: "如果 arr[mid] > arr[right]，最小值在右半部分。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint find_min(vector<int>& a) {\n    int l=0,r=a.size()-1;\n    while(l<r){int m=(l+r)/2;if(a[m]>a[r])l=m+1;else r=m;}\n    return a[l];\n}\n\nint main() {\n    vector<int> a1={4,5,6,7,0,1,2};\n    cout<<find_min(a1)<<endl;\n    vector<int> a2={3,1,2};\n    cout<<find_min(a2)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🎮",
      content: `## 🎮 Fun Application: Guess the Number Game

🎯 **What you'll learn:** How binary search strategy makes you unbeatable at number guessing games — guaranteed to win in ≤7 guesses for 1-100!
学习目标：二分搜索策略如何让你在猜数字游戏中无敌——1-100 保证 ≤7 次猜中！

You're playing "guess my number" with a friend 🎲 — they pick a secret number, you guess, they say "higher" or "lower." Random guessing might take 100 tries. Binary search? Maximum 7. Every. Single. Time.
类比：你和朋友玩"猜数字" 🎲 — 他选一个秘密数字，你猜，他说"高了"或"低了"。随机猜可能要100次。二分搜索？最多7次。每次都是。

🔑 **Key things to notice:**
- Always guess the middle of the remaining range
- Each guess eliminates half the possibilities
- log₂(100) ≈ 6.6, so at most 7 guesses needed
- This is binary search applied to real life!
- 这是二分搜索在现实生活中的应用！

👀 **Run the code and play** the game — see how binary search wins every time!`,
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
      codeCpp: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int guess_number(int secret, int low=1, int high=100) {
    int guesses = 0;
    while (low <= high) {
        int guess = (low+high)/2;
        guesses++;
        cout << "  Guess " << guesses << ": " << guess;
        if (guess == secret) { cout << " ✅ Correct!" << endl; return guesses; }
        else if (guess < secret) { cout << " Too low!" << endl; low = guess+1; }
        else { cout << " Too high!" << endl; high = guess-1; }
    }
    return guesses;
}

int main() {
    srand(time(0));
    int secret = rand() % 100 + 1;
    cout << "🎮 Binary Search Guessing Game!" << endl;
    cout << "Secret: " << secret << endl;
    int g = guess_number(secret);
    cout << "Found in " << g << " guesses! Max needed: 7" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write a binary search that finds the integer square root of n.",
        promptZh: "写一个二分搜索找到 n 的整数平方根。",
        starterCode: "def int_sqrt(n):\\n    pass\\n\\nprint(int_sqrt(27))\\nprint(int_sqrt(100))\\nprint(int_sqrt(0))",
        expectedOutput: "5\\n10\\n0",
        hint: "Binary search between 0 and n. If mid*mid <= n, try higher.",
        hintZh: "在 0 和 n 之间二分搜索。如果 mid*mid <= n，尝试更高。",
        solution: "def int_sqrt(n):\\n    if n < 2: return n\\n    left, right = 0, n\\n    ans = 0\\n    while left <= right:\\n        mid = (left + right) // 2\\n        if mid * mid <= n:\\n            ans = mid\\n            left = mid + 1\\n        else:\\n            right = mid - 1\\n    return ans\\n\\nprint(int_sqrt(27))\\nprint(int_sqrt(100))\\nprint(int_sqrt(0))",
      },
      exerciseCpp: {
        prompt: "Write a binary search that finds the integer square root of n.",
        promptZh: "写一个二分搜索找到 n 的整数平方根。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nint int_sqrt(int n) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<int_sqrt(27)<<endl;\n    cout<<int_sqrt(100)<<endl;\n    cout<<int_sqrt(0)<<endl;\n    return 0;\n}",
        expectedOutput: "5\n10\n0",
        hint: "Binary search [0,n]. If mid*mid <= n, try higher.",
        hintZh: "二分搜索 [0,n]。如果 mid*mid <= n，尝试更高。",
        solution: "#include <iostream>\nusing namespace std;\n\nint int_sqrt(int n) {\n    if(n<2)return n;\n    int l=0,r=n,ans=0;\n    while(l<=r){long long m=(l+r)/2;if(m*m<=n){ans=m;l=m+1;}else r=m-1;}\n    return ans;\n}\n\nint main() {\n    cout<<int_sqrt(27)<<endl;\n    cout<<int_sqrt(100)<<endl;\n    cout<<int_sqrt(0)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
掌握搜索 = 掌握效率。正确的搜索算法能把几小时变成几毫秒！

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📏 Min Difference Pair · 最小差值对",
        description: "In a sorted array, find the pair with smallest absolute difference.\n在排序数组中找绝对差最小的对。",
        starterCode: "def min_diff_pair(arr):\n    pass\n\nprint(min_diff_pair([1, 3, 4, 8, 13, 17, 20]))",
        hint: "Minimum difference is always between adjacent elements in sorted array.\n最小差值一定在排序数组的相邻元素之间。",
        solution: "def min_diff_pair(arr):\n    min_d = float('inf')\n    pair = (arr[0], arr[1])\n    for i in range(len(arr)-1):\n        d = arr[i+1]-arr[i]\n        if d < min_d:\n            min_d = d\n            pair = (arr[i], arr[i+1])\n    return pair\n\nprint(min_diff_pair([1, 3, 4, 8, 13, 17, 20]))",
        expectedOutput: "(3, 4)",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Bitonic Search · 双调搜索",
        description: "Search in a bitonic array (first increases then decreases) in O(log n).\n在双调数组中 O(log n) 搜索。",
        starterCode: "def bitonic_search(arr, target):\n    pass\n\nprint(bitonic_search([1,3,8,12,4,2], 4))\nprint(bitonic_search([1,3,8,12,4,2], 13))",
        hint: "Find peak, then binary search both halves.\n找到峰值，然后对两半分别二分搜索。",
        solution: "def bitonic_search(arr, target):\n    lo, hi = 0, len(arr)-1\n    while lo < hi:\n        mid = (lo+hi)//2\n        if arr[mid] < arr[mid+1]: lo = mid+1\n        else: hi = mid\n    peak = lo\n    def bsearch(lo, hi, asc=True):\n        while lo <= hi:\n            mid = (lo+hi)//2\n            if arr[mid] == target: return mid\n            if asc:\n                if arr[mid] < target: lo = mid+1\n                else: hi = mid-1\n            else:\n                if arr[mid] > target: lo = mid+1\n                else: hi = mid-1\n        return -1\n    r = bsearch(0, peak, True)\n    return r if r != -1 else bsearch(peak, len(arr)-1, False)\n\nprint(bitonic_search([1,3,8,12,4,2], 4))\nprint(bitonic_search([1,3,8,12,4,2], 13))",
        expectedOutput: "4\n-1",
      },
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

All three are O(n²) — simple but slow for big data!

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "code",
      emoji: "🫧",
      content: `## 🫧 Bubble Sort — Bubbling Up!

🎯 **What you'll learn:** How Bubble Sort works by repeatedly swapping adjacent elements, like bubbles rising to the surface.
学习目标：冒泡排序如何通过反复交换相邻元素来工作，就像气泡浮到水面。

Imagine students lining up by height 👧👦 — you walk down the line comparing neighbors. If the taller one is in front, they swap! After one pass, the tallest is at the end. Repeat until everyone's in order.
类比：想象学生按身高排队 👧👦 — 你沿着队伍走，比较相邻的人。如果高的在前面，他们交换！一趟之后，最高的在最后。重复直到所有人排好序。

🔑 **Key things to notice:**
- Each pass "bubbles" the largest unsorted element to its correct position
- We can optimize: if no swaps in a pass, the array is already sorted!
- Inner loop shrinks each time (last i elements are already sorted)
- Time: O(n²) worst/average, O(n) best (already sorted with optimization)
- 时间：最坏/平均 O(n²)，最好 O(n)（已排序时使用优化）

👀 **Run the code and watch** each pass push the next largest element into place!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

void bubble_sort(vector<int> arr) {
    int n = arr.size(), swaps = 0;
    for (int i = 0; i < n; i++) {
        bool swapped = false;
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) { swap(arr[j], arr[j+1]); swaps++; swapped = true; }
        cout << "  Pass " << i+1 << ": [";
        for (int k=0;k<n;k++){if(k)cout<<", ";cout<<arr[k];}
        cout << "]" << endl;
        if (!swapped) break;
    }
    cout << "Total swaps: " << swaps << endl;
}

int main() {
    cout << "Bubble Sort:" << endl;
    bubble_sort({64, 34, 25, 12, 22, 11, 90});
    return 0;
}`,
      exercise: {
        prompt: "Modify bubble sort to COUNT total swaps. Return (sorted_array, swap_count).",
        promptZh: "修改冒泡排序统计总交换次数。返回 (排序数组, 交换次数)。",
        starterCode: "def bubble_sort_count(arr):\\n    pass\\n\\narr, swaps = bubble_sort_count([5, 1, 4, 2, 8])\\nprint(arr)\\nprint(swaps)",
        expectedOutput: "[1, 2, 4, 5, 8]\\n4",
        hint: "Add a counter. Increment every time you swap.",
        hintZh: "添加计数器。每次交换时加 1。",
        solution: "def bubble_sort_count(arr):\\n    a = arr[:]\\n    swaps = 0\\n    n = len(a)\\n    for i in range(n):\\n        for j in range(n-1-i):\\n            if a[j] > a[j+1]:\\n                a[j], a[j+1] = a[j+1], a[j]\\n                swaps += 1\\n    return a, swaps\\n\\narr, swaps = bubble_sort_count([5, 1, 4, 2, 8])\\nprint(arr)\\nprint(swaps)",
      },
      exerciseCpp: {
        prompt: "Modify bubble sort to COUNT total swaps.",
        promptZh: "修改冒泡排序统计总交换次数。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> a={5,1,4,2,8};\n    int swaps=0;\n    // Your code here\n    return 0;\n}",
        expectedOutput: "[1, 2, 4, 5, 8]\n4",
        hint: "Add a counter. Increment every swap.",
        hintZh: "添加计数器，每次交换加1。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> a={5,1,4,2,8};\n    int swaps=0,n=a.size();\n    for(int i=0;i<n;i++)for(int j=0;j<n-1-i;j++)if(a[j]>a[j+1]){swap(a[j],a[j+1]);swaps++;}\n    cout<<'[';for(int i=0;i<n;i++){if(i)cout<<\", \";cout<<a[i];}cout<<']'<<endl;\n    cout<<swaps<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "👆",
      content: `## 👆 Selection Sort — Pick the Smallest!

🎯 **What you'll learn:** How Selection Sort finds the minimum element and places it at the front, building the sorted portion one element at a time.
学习目标：选择排序如何找到最小元素并放到前面，每次一个元素地构建有序部分。

Think of picking players for a team 🏀 — you scan everyone and pick the BEST player first, then the next best, and so on. Each round you select the best remaining person.
类比：想象选球队队员 🏀 — 你扫视所有人，先挑最好的，然后是次好的，依此类推。每轮你选剩余中最好的。

🔑 **Key things to notice:**
- Two regions: sorted (left) and unsorted (right)
- Each pass finds the minimum in the unsorted region
- Swaps it to the end of the sorted region
- Always O(n²) — doesn't benefit from partially sorted input
- 总是 O(n²) — 不能利用部分有序的输入

👀 **Run the code and observe** how the sorted region grows from left to right!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

void selection_sort(vector<int> arr) {
    int n = arr.size(), comparisons = 0;
    for (int i = 0; i < n; i++) {
        int mn = i;
        for (int j = i+1; j < n; j++) { comparisons++; if (arr[j] < arr[mn]) mn = j; }
        swap(arr[i], arr[mn]);
        cout << "  Pass " << i+1 << ": [";
        for (int k=0;k<n;k++){if(k)cout<<", ";cout<<arr[k];}
        cout << "]" << endl;
    }
    cout << "Total comparisons: " << comparisons << endl;
}

int main() {
    cout << "Selection Sort:" << endl;
    selection_sort({64, 25, 12, 22, 11});
    return 0;
}`,
      exercise: {
        prompt: "Implement selection sort in DESCENDING order.",
        promptZh: "实现降序选择排序。",
        starterCode: "def selection_sort_desc(arr):\\n    pass\\n\\nprint(selection_sort_desc([3, 1, 4, 1, 5]))",
        expectedOutput: "[5, 4, 3, 1, 1]",
        hint: "Find MAXIMUM in each pass instead of minimum.",
        hintZh: "每轮找最大值而不是最小值。",
        solution: "def selection_sort_desc(arr):\\n    a = arr[:]\\n    for i in range(len(a)):\\n        max_idx = i\\n        for j in range(i+1, len(a)):\\n            if a[j] > a[max_idx]: max_idx = j\\n        a[i], a[max_idx] = a[max_idx], a[i]\\n    return a\\n\\nprint(selection_sort_desc([3, 1, 4, 1, 5]))",
      },
      exerciseCpp: {
        prompt: "Implement selection sort in DESCENDING order.",
        promptZh: "实现降序选择排序。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> a={3,1,4,1,5};\n    // Your code here\n    return 0;\n}",
        expectedOutput: "[5, 4, 3, 1, 1]",
        hint: "Find MAXIMUM each pass instead of minimum.",
        hintZh: "每轮找最大值。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> a={3,1,4,1,5};int n=a.size();\n    for(int i=0;i<n;i++){int mx=i;for(int j=i+1;j<n;j++)if(a[j]>a[mx])mx=j;swap(a[i],a[mx]);}\n    cout<<'[';for(int i=0;i<n;i++){if(i)cout<<\", \";cout<<a[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🃏",
      content: `## 🃏 Insertion Sort — Like Sorting Cards!

🎯 **What you'll learn:** How Insertion Sort works like sorting playing cards — pick each card and slide it into the right position in your hand.
学习目标：插入排序如何像整理扑克牌一样工作——拿起每张牌，滑入手中的正确位置。

You're playing cards 🃏 — you pick up one card at a time from the table and insert it into the right spot in your hand. Your hand is always sorted! That's exactly insertion sort.
类比：你在打牌 🃏 — 你从桌上一次拿起一张牌，插入手中的正确位置。你手里的牌始终是有序的！这正是插入排序。

🔑 **Key things to notice:**
- Start from index 1 (index 0 is "already sorted")
- Shift larger elements RIGHT to make room
- The key element slides into its correct position
- Best for small or nearly-sorted arrays — O(n) best case!
- 最适合小数组或接近有序的数组——最好 O(n)！

👀 **Run the code and watch** how each element finds its place by shifting others aside!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

void insertion_sort(vector<int> arr) {
    int shifts = 0;
    for (int i = 1; i < (int)arr.size(); i++) {
        int key = arr[i], j = i-1;
        while (j >= 0 && arr[j] > key) { arr[j+1] = arr[j]; j--; shifts++; }
        arr[j+1] = key;
        cout << "  Insert " << key << ": [";
        for (int k=0;k<(int)arr.size();k++){if(k)cout<<", ";cout<<arr[k];}
        cout << "]" << endl;
    }
    cout << "Total shifts: " << shifts << endl;
}

int main() {
    cout << "Insertion Sort:" << endl;
    insertion_sort({12, 11, 13, 5, 6});
    return 0;
}`,
      exercise: {
        prompt: "Write insertion sort that prints the array after EACH pass.",
        promptZh: "写一个插入排序，每次插入后打印数组。",
        starterCode: "def insertion_sort_trace(arr):\\n    pass\\n\\ninsertion_sort_trace([5, 2, 4, 6, 1, 3])",
        expectedOutput: "[2, 5, 4, 6, 1, 3]\\n[2, 4, 5, 6, 1, 3]\\n[2, 4, 5, 6, 1, 3]\\n[1, 2, 4, 5, 6, 3]\\n[1, 2, 3, 4, 5, 6]",
        hint: "After each inner loop, print the current state.",
        hintZh: "每次内层循环后打印当前状态。",
        solution: "def insertion_sort_trace(arr):\\n    a = arr[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i - 1\\n        while j >= 0 and a[j] > key:\\n            a[j+1] = a[j]\\n            j -= 1\\n        a[j+1] = key\\n        print(a)\\n\\ninsertion_sort_trace([5, 2, 4, 6, 1, 3])",
      },
      exerciseCpp: {
        prompt: "Write insertion sort that prints array after EACH pass.",
        promptZh: "插入排序，每次插入后打印数组。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> a={5,2,4,6,1,3};\n    // Your code here\n    return 0;\n}",
        expectedOutput: "[2, 5, 4, 6, 1, 3]\n[2, 4, 5, 6, 1, 3]\n[2, 4, 5, 6, 1, 3]\n[1, 2, 4, 5, 6, 3]\n[1, 2, 3, 4, 5, 6]",
        hint: "After each inner loop, print current state.",
        hintZh: "每次内层循环后打印。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> a={5,2,4,6,1,3};int n=a.size();\n    for(int i=1;i<n;i++){int k=a[i],j=i-1;while(j>=0&&a[j]>k){a[j+1]=a[j];j--;}a[j+1]=k;\n    cout<<'[';for(int x=0;x<n;x++){if(x)cout<<\", \";cout<<a[x];}cout<<']'<<endl;}\n    return 0;\n}",
        language: "cpp",
      },
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
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎨 Dutch National Flag · 荷兰国旗",
        description: "Sort array of 0s, 1s, 2s in ONE pass.\n一趟排序 0、1、2 数组。",
        starterCode: "def dutch_flag(arr):\n    pass\n\nprint(dutch_flag([2,0,1,2,1,0,0,2,1]))",
        hint: "Three pointers: lo (0s), mid (current), hi (2s).\n三指针：lo（0）、mid（当前）、hi（2）。",
        solution: "def dutch_flag(arr):\n    a = arr[:]\n    lo, mid, hi = 0, 0, len(a)-1\n    while mid <= hi:\n        if a[mid] == 0:\n            a[lo], a[mid] = a[mid], a[lo]\n            lo += 1; mid += 1\n        elif a[mid] == 1: mid += 1\n        else:\n            a[mid], a[hi] = a[hi], a[mid]\n            hi -= 1\n    return a\n\nprint(dutch_flag([2,0,1,2,1,0,0,2,1]))",
        expectedOutput: "[0, 0, 0, 1, 1, 1, 2, 2, 2]",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Stable Sort Test · 稳定排序测试",
        description: "Sort (name, score) tuples by score. Keep original order for ties (stable).\n按分数排序元组。相同分数保持原序。",
        starterCode: "def stable_sort(students):\n    pass\n\nfor s in stable_sort([('Alice',85),('Bob',92),('Carol',85),('Dave',92)]):\n    print(s)",
        hint: "Insertion sort is naturally stable.\n插入排序天然稳定。",
        solution: "def stable_sort(students):\n    a = students[:]\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i-1\n        while j >= 0 and a[j][1] > key[1]:\n            a[j+1] = a[j]; j -= 1\n        a[j+1] = key\n    return a\n\nfor s in stable_sort([('Alice',85),('Bob',92),('Carol',85),('Dave',92)]):\n    print(s)",
        expectedOutput: "('Alice', 85)\n('Carol', 85)\n('Bob', 92)\n('Dave', 92)",
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

🎯 **What you'll learn:** How Merge Sort uses divide-and-conquer to split, sort halves, and merge them back — guaranteed O(n log n).
学习目标：归并排序如何使用分治法来拆分、排序两半、再合并——保证 O(n log n)。

Imagine sorting a deck of cards with a friend 🃏🃏 — you split the deck in half, each person sorts their half, then you merge the two sorted halves together by comparing top cards. Sorting a half? Just split again and repeat!
类比：想象和朋友一起排序一副扑克牌 🃏🃏 — 你把牌分成两半，每人排自己的半副，然后通过比较顶牌把两个有序的半副合并。排一半怎么排？再分再重复！

🔑 **Key things to notice:**
- Base case: array of length ≤ 1 is already sorted
- Split in the middle, recursively sort each half
- The \`merge\` step combines two sorted arrays into one
- Always O(n log n) — no worst-case blowup like Quick Sort
- 总是 O(n log n)——不像快速排序有最坏情况退化

👀 **Run the code and trace** the depth of recursion and how halves merge back together!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void printVec(const vector<int>& v) {
    cout << "[";
    for (int i=0;i<(int)v.size();i++){if(i)cout<<", ";cout<<v[i];}
    cout << "]";
}

vector<int> merge_sort(vector<int> arr, int depth=0) {
    string indent(depth*2, ' ');
    cout << indent << "merge_sort("; printVec(arr); cout << ")" << endl;
    if (arr.size() <= 1) return arr;
    int mid = arr.size()/2;
    auto left = merge_sort(vector<int>(arr.begin(), arr.begin()+mid), depth+1);
    auto right = merge_sort(vector<int>(arr.begin()+mid, arr.end()), depth+1);
    vector<int> result;
    int i=0, j=0;
    while (i<(int)left.size() && j<(int)right.size())
        result.push_back(left[i]<=right[j] ? left[i++] : right[j++]);
    while (i<(int)left.size()) result.push_back(left[i++]);
    while (j<(int)right.size()) result.push_back(right[j++]);
    cout << indent << "→ merged: "; printVec(result); cout << endl;
    return result;
}

int main() {
    auto sorted = merge_sort({38, 27, 43, 3, 9, 82, 10});
    cout << "\nResult: "; printVec(sorted); cout << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write JUST the merge function: merge two sorted lists into one.",
        promptZh: "只写合并函数：将两个排序列表合并为一个。",
        starterCode: "def merge(left, right):\\n    pass\\n\\nprint(merge([1, 3, 5], [2, 4, 6]))\\nprint(merge([1, 1], [2]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6]\\n[1, 1, 2]",
        hint: "Two pointers. Compare and append the smaller. Don't forget remainders.",
        hintZh: "两个指针。比较并添加较小的。别忘了剩余元素。",
        solution: "def merge(left, right):\\n    result = []\\n    i = j = 0\\n    while i < len(left) and j < len(right):\\n        if left[i] <= right[j]:\\n            result.append(left[i]); i += 1\\n        else:\\n            result.append(right[j]); j += 1\\n    result.extend(left[i:])\\n    result.extend(right[j:])\\n    return result\\n\\nprint(merge([1, 3, 5], [2, 4, 6]))\\nprint(merge([1, 1], [2]))",
      },
      exerciseCpp: {
        prompt: "Write the merge function: merge two sorted lists.",
        promptZh: "合并两个排序列表。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> merge_lists(vector<int> l, vector<int> r) {\n    // Your code here\n    return {};\n}\n\nint main() {\n    auto r1=merge_lists({1,3,5},{2,4,6});\n    cout<<'[';for(int i=0;i<(int)r1.size();i++){if(i)cout<<\", \";cout<<r1[i];}cout<<']'<<endl;\n    auto r2=merge_lists({1,1},{2});\n    cout<<'[';for(int i=0;i<(int)r2.size();i++){if(i)cout<<\", \";cout<<r2[i];}cout<<']'<<endl;\n    return 0;\n}",
        expectedOutput: "[1, 2, 3, 4, 5, 6]\n[1, 1, 2]",
        hint: "Two pointers. Compare and push smaller.",
        hintZh: "两个指针，比较并添加较小的。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> merge_lists(vector<int> l, vector<int> r) {\n    vector<int> res;int i=0,j=0;\n    while(i<(int)l.size()&&j<(int)r.size())res.push_back(l[i]<=r[j]?l[i++]:r[j++]);\n    while(i<(int)l.size())res.push_back(l[i++]);\n    while(j<(int)r.size())res.push_back(r[j++]);\n    return res;\n}\n\nint main() {\n    auto r1=merge_lists({1,3,5},{2,4,6});\n    cout<<'[';for(int i=0;i<(int)r1.size();i++){if(i)cout<<\", \";cout<<r1[i];}cout<<']'<<endl;\n    auto r2=merge_lists({1,1},{2});\n    cout<<'[';for(int i=0;i<(int)r2.size();i++){if(i)cout<<\", \";cout<<r2[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🎯 **What you'll learn:** The mathematical intuition behind WHY merge sort is O(n log n) — understanding the recursion tree.
学习目标：归并排序为什么是 O(n log n) 的数学直觉——理解递归树。

Think of a tournament bracket 🏆 — there are log₂(n) rounds, and in each round, EVERY player (element) participates in exactly one comparison. So it's n work × log n rounds = n log n total!
类比：想象淘汰赛赛程 🏆 — 共 log₂(n) 轮，每轮每个选手（元素）都恰好参与一次比较。所以是 n 的工作量 × log n 轮 = n log n 总量！

🔑 **Key things to notice:**
- Splitting creates log₂(n) levels of recursion
- At each level, ALL n elements get merged (total work = O(n) per level)
- log n levels × n work per level = O(n log n) total
- This is proven to be the BEST possible for comparison-based sorting!
- 这被证明是基于比较的排序的最优下界！

👀 **Run the code and see** the level-by-level breakdown of work done!`,
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
      codeCpp: `#include <iostream>
using namespace std;

void show_levels(int n) {
    cout << "For n=" << n << " elements:" << endl;
    int level = 0, size = n;
    while (size > 1) {
        cout << "  Level " << level << ": " << n/size << " group(s) of " << size << endl;
        size /= 2; level++;
    }
    cout << "  Level " << level << ": " << n << " individual elements" << endl;
    cout << "  Total levels: " << level+1 << " = O(log n)" << endl;
    cout << "  Work per level: O(n), Total: O(n log n)" << endl;
}

int main() {
    show_levels(8);
    cout << endl;
    show_levels(16);
    return 0;
}`,
      exercise: {
        prompt: "Count how many times n can be halved before reaching 1 (this is log₂(n)).",
        promptZh: "计算 n 可以被对半分多少次才到 1（这就是 log₂(n)）。",
        starterCode: "def count_halves(n):\\n    pass\\n\\nprint(count_halves(8))\\nprint(count_halves(16))\\nprint(count_halves(1000))",
        expectedOutput: "3\\n4\\n10",
        hint: "Keep dividing n by 2 and count until n <= 1.",
        hintZh: "不断将 n 除以 2 并计数，直到 n <= 1。",
        solution: "def count_halves(n):\\n    count = 0\\n    while n > 1:\\n        n //= 2\\n        count += 1\\n    return count\\n\\nprint(count_halves(8))\\nprint(count_halves(16))\\nprint(count_halves(1000))",
      },
      exerciseCpp: {
        prompt: "Count how many times n can be halved before reaching 1.",
        promptZh: "计算 n 被对半分多少次到 1。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nint count_halves(int n) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<count_halves(8)<<endl;\n    cout<<count_halves(16)<<endl;\n    cout<<count_halves(1000)<<endl;\n    return 0;\n}",
        expectedOutput: "3\n4\n10",
        hint: "Keep dividing n by 2, count until n <= 1.",
        hintZh: "不断除以 2 并计数。",
        solution: "#include <iostream>\nusing namespace std;\n\nint count_halves(int n) {\n    int c=0;while(n>1){n/=2;c++;}return c;\n}\n\nint main() {\n    cout<<count_halves(8)<<endl;\n    cout<<count_halves(16)<<endl;\n    cout<<count_halves(1000)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
归并排序是需要保证 O(n log n) 和稳定性时的首选！

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔗 Merge K Lists · 合并 K 个列表",
        description: "Merge 3 sorted lists into one.\n合并 3 个排序列表。",
        starterCode: "def merge_k(lists):\n    pass\n\nprint(merge_k([[1,4,7],[2,5,8],[3,6,9]]))",
        hint: "Merge first two, then merge result with third.\n先合并前两个，再和第三个合并。",
        solution: "def merge_k(lists):\n    def merge(a, b):\n        r = []; i = j = 0\n        while i < len(a) and j < len(b):\n            if a[i] <= b[j]: r.append(a[i]); i += 1\n            else: r.append(b[j]); j += 1\n        r.extend(a[i:]); r.extend(b[j:])\n        return r\n    result = lists[0]\n    for i in range(1, len(lists)):\n        result = merge(result, lists[i])\n    return result\n\nprint(merge_k([[1,4,7],[2,5,8],[3,6,9]]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Merge Sort Inversion Count · 归并排序逆序对",
        description: "Count inversions using merge sort in O(n log n).\n用归并排序 O(n log n) 计算逆序对。",
        starterCode: "def count_inv(arr):\n    # Return (sorted, count)\n    pass\n\n_, c = count_inv([5,4,3,2,1])\nprint(c)",
        hint: "During merge: when right < left, count += len(left) - i.\n合并时：右 < 左，count += len(left) - i。",
        solution: "def count_inv(arr):\n    if len(arr) <= 1: return arr, 0\n    mid = len(arr)//2\n    left, li = count_inv(arr[:mid])\n    right, ri = count_inv(arr[mid:])\n    merged = []; inv = li + ri; i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]: merged.append(left[i]); i += 1\n        else: merged.append(right[j]); j += 1; inv += len(left)-i\n    merged.extend(left[i:]); merged.extend(right[j:])\n    return merged, inv\n\n_, c = count_inv([5,4,3,2,1])\nprint(c)",
        expectedOutput: "10",
      },
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

🎯 **What you'll learn:** How Quick Sort uses a pivot to partition elements — smaller go left, larger go right — then recursively sorts each side.
学习目标：快速排序如何用基准值分区——小的去左边，大的去右边——然后递归排序每边。

Imagine organizing students by height using a "pivot" student 📏 — everyone shorter stands left, everyone taller stands right. Now the pivot is in the PERFECT spot! Repeat for each group.
类比：想象用一个"基准"学生按身高组织队伍 📏 — 所有矮的站左边，高的站右边。现在基准在完美的位置！对每组重复。

🔑 **Key things to notice:**
- Choose a pivot, then partition: elements < pivot go left, > pivot go right
- After partition, pivot is in its FINAL correct position
- Recursively sort the left and right partitions
- Average O(n log n), but worst case O(n²) if pivot is always min/max
- 平均 O(n log n)，但如果基准总是最小/最大值则最坏 O(n²)

👀 **Run the code and watch** how the pivot finds its correct position each time!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void printVec(const vector<int>& v) {
    cout << "[";
    for (int i=0;i<(int)v.size();i++){if(i)cout<<", ";cout<<v[i];}
    cout << "]";
}

vector<int> quicksort(vector<int> arr, int depth=0) {
    string indent(depth*2, ' ');
    if (arr.size() <= 1) return arr;
    int pivot = arr.back();
    cout << indent << "pivot=" << pivot << ", arr="; printVec(arr); cout << endl;
    vector<int> left, mid, right;
    for (int x : arr) {
        if (x < pivot) left.push_back(x);
        else if (x == pivot) mid.push_back(x);
        else right.push_back(x);
    }
    left = quicksort(left, depth+1);
    right = quicksort(right, depth+1);
    vector<int> result;
    for (int x : left) result.push_back(x);
    for (int x : mid) result.push_back(x);
    for (int x : right) result.push_back(x);
    return result;
}

int main() {
    auto sorted = quicksort({38, 27, 43, 3, 9, 82, 10});
    cout << "\nResult: "; printVec(sorted); cout << endl;
    return 0;
}`,
      exercise: {
        prompt: "Partition an array into elements <= pivot and > pivot. Return two lists.",
        promptZh: "将数组分为 <= 枢轴和 > 枢轴的元素。返回两个列表。",
        starterCode: "def partition(arr, pivot):\\n    pass\\n\\nlo, hi = partition([3,6,8,10,1,2,1], 5)\\nprint(lo)\\nprint(hi)",
        expectedOutput: "[3, 1, 2, 1]\\n[6, 8, 10]",
        hint: "Loop through, add to left if <= pivot, else right.",
        hintZh: "遍历，<= 枢轴加左边，否则加右边。",
        solution: "def partition(arr, pivot):\\n    left = [x for x in arr if x <= pivot]\\n    right = [x for x in arr if x > pivot]\\n    return left, right\\n\\nlo, hi = partition([3,6,8,10,1,2,1], 5)\\nprint(lo)\\nprint(hi)",
      },
      exerciseCpp: {
        prompt: "Partition array into <= pivot and > pivot.",
        promptZh: "将数组分为 <= 枢轴和 > 枢轴。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> arr={3,6,8,10,1,2,1};\n    int pivot=5;\n    vector<int> lo,hi;\n    // Your code here\n    return 0;\n}",
        expectedOutput: "[3, 1, 2, 1]\n[6, 8, 10]",
        hint: "Loop: if <= pivot add to left, else right.",
        hintZh: "遍历：<= 枢轴加左，否则加右。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> arr={3,6,8,10,1,2,1};int pivot=5;\n    vector<int> lo,hi;\n    for(int x:arr){if(x<=pivot)lo.push_back(x);else hi.push_back(x);}\n    cout<<'[';for(int i=0;i<(int)lo.size();i++){if(i)cout<<\", \";cout<<lo[i];}cout<<']'<<endl;\n    cout<<'[';for(int i=0;i<(int)hi.size();i++){if(i)cout<<\", \";cout<<hi[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🔧",
      content: `## 🔧 In-Place Quick Sort (Lomuto Partition)

🎯 **What you'll learn:** How real-world Quick Sort works IN-PLACE without creating new arrays — using the Lomuto partition scheme.
学习目标：现实中的快速排序如何原地工作，不创建新数组——使用 Lomuto 分区方案。

Think of rearranging books on a shelf 📚 — instead of taking them all off and putting them back, you use a "boundary marker" and swap books across it. Everything to the left of the marker is smaller than the pivot!
类比：想象重新排列书架上的书 📚 — 不是全拿下来重放，而是用一个"分界标记"在原地交换。标记左边的都比基准小！

🔑 **Key things to notice:**
- \`i\` tracks the boundary between "small" and "large" elements
- We scan with \`j\` and swap elements ≤ pivot to the left side
- Final swap puts pivot in its correct position
- No extra arrays needed — O(1) extra space!
- 不需要额外数组——O(1) 额外空间！

👀 **Run the code and trace** how the \`i\` pointer builds the "small" partition!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high], i = low-1;
    for (int j = low; j < high; j++)
        if (arr[j] <= pivot) { i++; swap(arr[i], arr[j]); }
    swap(arr[i+1], arr[high]);
    return i+1;
}

void quicksort_inplace(vector<int>& arr, int low, int high) {
    if (low < high) {
        int p = partition(arr, low, high);
        cout << "  Pivot " << arr[p] << " at index " << p << ": [";
        for (int k=0;k<(int)arr.size();k++){if(k)cout<<", ";cout<<arr[k];}
        cout << "]" << endl;
        quicksort_inplace(arr, low, p-1);
        quicksort_inplace(arr, p+1, high);
    }
}

int main() {
    vector<int> arr = {38, 27, 43, 3, 9, 82, 10};
    cout << "In-place Quick Sort:" << endl;
    quicksort_inplace(arr, 0, arr.size()-1);
    cout << "Result: [";
    for (int i=0;i<(int)arr.size();i++){if(i)cout<<", ";cout<<arr[i];}
    cout << "]" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Implement Lomuto partition: return final pivot position after partitioning.",
        promptZh: "实现 Lomuto 分区：返回分区后枢轴的最终位置。",
        starterCode: "def lomuto(arr, lo, hi):\\n    pass\\n\\na = [10,80,30,90,40,50,70]\\np = lomuto(a, 0, len(a)-1)\\nprint(p)\\nprint(a)",
        expectedOutput: "6\\n[10, 30, 40, 50, 70, 80, 90]",
        hint: "Use last element as pivot. Track where small elements end.",
        hintZh: "用最后一个元素做枢轴。跟踪小元素的结束位置。",
        solution: "def lomuto(arr, lo, hi):\\n    pivot = arr[hi]\\n    i = lo - 1\\n    for j in range(lo, hi):\\n        if arr[j] <= pivot:\\n            i += 1\\n            arr[i], arr[j] = arr[j], arr[i]\\n    arr[i+1], arr[hi] = arr[hi], arr[i+1]\\n    return i + 1\\n\\na = [10,80,30,90,40,50,70]\\np = lomuto(a, 0, len(a)-1)\\nprint(p)\\nprint(a)",
      },
      exerciseCpp: {
        prompt: "Implement Lomuto partition.",
        promptZh: "实现 Lomuto 分区。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint lomuto(vector<int>& a, int lo, int hi) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    vector<int> a={10,80,30,90,40,50,70};\n    int p=lomuto(a,0,a.size()-1);\n    cout<<p<<endl;\n    cout<<'[';for(int i=0;i<(int)a.size();i++){if(i)cout<<',';cout<<a[i];}cout<<']'<<endl;\n    return 0;\n}",
        expectedOutput: "6\n[10,30,40,50,70,80,90]",
        hint: "Last element as pivot. Track small elements boundary.",
        hintZh: "最后元素为枢轴。跟踪小元素边界。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint lomuto(vector<int>& a, int lo, int hi) {\n    int pivot=a[hi],i=lo-1;\n    for(int j=lo;j<hi;j++)if(a[j]<=pivot){i++;swap(a[i],a[j]);}\n    swap(a[i+1],a[hi]);return i+1;\n}\n\nint main() {\n    vector<int> a={10,80,30,90,40,50,70};\n    int p=lomuto(a,0,a.size()-1);\n    cout<<p<<endl;\n    cout<<'[';for(int i=0;i<(int)a.size();i++){if(i)cout<<',';cout<<a[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🔑 **Quick sort is the default choice when space matters and average case is good enough!**

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎲 Kth Smallest · 第 K 小",
        description: "Find kth smallest using Quick Select (average O(n)).\n用快速选择找第 k 小。",
        starterCode: "def kth_smallest(arr, k):\n    pass\n\nprint(kth_smallest([7,10,4,3,20,15], 3))\nprint(kth_smallest([7,10,4,3,20,15], 1))",
        hint: "Partition, check pivot position vs k-1, recurse on correct half.\n分区，检查枢轴位置和 k-1 的关系，递归正确的一半。",
        solution: "def kth_smallest(arr, k):\n    a = arr[:]\n    def select(lo, hi, k):\n        pivot = a[hi]; i = lo\n        for j in range(lo, hi):\n            if a[j] <= pivot: a[i], a[j] = a[j], a[i]; i += 1\n        a[i], a[hi] = a[hi], a[i]\n        if i == k-1: return a[i]\n        elif i > k-1: return select(lo, i-1, k)\n        else: return select(i+1, hi, k)\n    return select(0, len(a)-1, k)\n\nprint(kth_smallest([7,10,4,3,20,15], 3))\nprint(kth_smallest([7,10,4,3,20,15], 1))",
        expectedOutput: "7\n3",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔀 Three-Way Partition · 三路分区",
        description: "Split array into < pivot, == pivot, > pivot.\n将数组分为 < 枢轴、== 枢轴、> 枢轴。",
        starterCode: "def three_way(arr, pivot):\n    pass\n\nlo, eq, hi = three_way([4,9,4,4,1,9,4,4,9,4,4,1,4], 4)\nprint(lo)\nprint(eq)\nprint(hi)",
        hint: "Three lists, compare each element to pivot.\n三个列表，每个元素与枢轴比较。",
        solution: "def three_way(arr, pivot):\n    return [x for x in arr if x < pivot], [x for x in arr if x == pivot], [x for x in arr if x > pivot]\n\nlo, eq, hi = three_way([4,9,4,4,1,9,4,4,9,4,4,1,4], 4)\nprint(lo)\nprint(eq)\nprint(hi)",
        expectedOutput: "[1, 1]\n[4, 4, 4, 4, 4, 4, 4, 4]\n[9, 9, 9]",
      },
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

🎯 **What you'll learn:** How different sorting algorithms compare in actual running time — seeing theory come alive with real benchmarks.
学习目标：不同排序算法在实际运行时间上如何比较——用真实基准测试看到理论变为现实。

It's race day at the Algorithm Olympics 🏅! Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort line up at the starting line. Who will finish first? Place your bets!
类比：算法奥运会比赛日 🏅！冒泡排序、选择排序、插入排序、归并排序和快速排序在起跑线上排好。谁先到终点？下注吧！

🔑 **Key things to notice:**
- O(n²) sorts (Bubble, Selection, Insertion) are MUCH slower at larger sizes
- O(n log n) sorts (Merge, Quick) dominate as input grows
- Insertion sort can surprise on small or nearly-sorted data
- Python's built-in \`sorted()\` uses Timsort — a hybrid of merge + insertion
- Python 内置 \`sorted()\` 用 Timsort——归并+插入的混合算法

👀 **Run the code and see** the dramatic speed difference between O(n²) and O(n log n)!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <chrono>
using namespace std;

vector<int> bubble_sort(vector<int> a){int n=a.size();for(int i=0;i<n;i++)for(int j=0;j<n-i-1;j++)if(a[j]>a[j+1])swap(a[j],a[j+1]);return a;}
vector<int> selection_sort(vector<int> a){int n=a.size();for(int i=0;i<n;i++){int m=i;for(int j=i+1;j<n;j++)if(a[j]<a[m])m=j;swap(a[i],a[m]);}return a;}
vector<int> insertion_sort(vector<int> a){for(int i=1;i<(int)a.size();i++){int k=a[i],j=i-1;while(j>=0&&a[j]>k){a[j+1]=a[j];j--;}a[j+1]=k;}return a;}

vector<int> do_merge_sort(vector<int> a) {
    if (a.size()<=1) return a;
    int m=a.size()/2;
    auto l=do_merge_sort(vector<int>(a.begin(),a.begin()+m));
    auto r=do_merge_sort(vector<int>(a.begin()+m,a.end()));
    vector<int> res; int i=0,j=0;
    while(i<(int)l.size()&&j<(int)r.size()) res.push_back(l[i]<=r[j]?l[i++]:r[j++]);
    while(i<(int)l.size()) res.push_back(l[i++]);
    while(j<(int)r.size()) res.push_back(r[j++]);
    return res;
}

int main() {
    srand(42);
    for (int n : {100, 500, 1000}) {
        vector<int> arr(n);
        for (int i=0;i<n;i++) arr[i]=rand()%10000;
        cout << "\nSize " << n << ":" << endl;
        auto t=[&](auto fn, string name){
            auto s=chrono::high_resolution_clock::now();
            fn(arr);
            auto e=chrono::high_resolution_clock::now();
            cout << "  " << name << ": " << chrono::duration<double,milli>(e-s).count() << " ms" << endl;
        };
        t(bubble_sort,"Bubble");
        t(selection_sort,"Selection");
        t(insertion_sort,"Insertion");
        t(do_merge_sort,"Merge");
    }
    return 0;
}`,
      exercise: {
        prompt: "Write a function that checks if an array is ALREADY sorted (ascending).",
        promptZh: "写一个函数检查数组是否已排好序（升序）。",
        starterCode: "def is_sorted(arr):\\n    pass\\n\\nprint(is_sorted([1,2,3,4,5]))\\nprint(is_sorted([1,3,2,4,5]))\\nprint(is_sorted([]))",
        expectedOutput: "True\\nFalse\\nTrue",
        hint: "Compare each element with the next one.",
        hintZh: "比较每个元素和下一个。",
        solution: "def is_sorted(arr):\\n    for i in range(len(arr)-1):\\n        if arr[i] > arr[i+1]: return False\\n    return True\\n\\nprint(is_sorted([1,2,3,4,5]))\\nprint(is_sorted([1,3,2,4,5]))\\nprint(is_sorted([]))",
      },
      exerciseCpp: {
        prompt: "Check if array is sorted (ascending).",
        promptZh: "检查数组是否已排序。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool is_sorted_check(vector<int> a) {\n    // Your code here\n    return true;\n}\n\nint main() {\n    cout<<(is_sorted_check({1,2,3,4,5})?\"True\":\"False\")<<endl;\n    cout<<(is_sorted_check({1,3,2,4,5})?\"True\":\"False\")<<endl;\n    cout<<(is_sorted_check({})?\"True\":\"False\")<<endl;\n    return 0;\n}",
        expectedOutput: "True\nFalse\nTrue",
        hint: "Compare each element with the next.",
        hintZh: "比较每个元素和下一个。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool is_sorted_check(vector<int> a) {\n    for(int i=0;i<(int)a.size()-1;i++)if(a[i]>a[i+1])return false;\n    return true;\n}\n\nint main() {\n    cout<<(is_sorted_check({1,2,3,4,5})?\"True\":\"False\")<<endl;\n    cout<<(is_sorted_check({1,3,2,4,5})?\"True\":\"False\")<<endl;\n    cout<<(is_sorted_check({})?\"True\":\"False\")<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "📊",
      content: `## 📊 The Complete Comparison Table

🎯 **What you'll learn:** A comprehensive side-by-side comparison of all sorting algorithms — time, space, stability, and best use cases.
学习目标：所有排序算法的全面对比——时间、空间、稳定性和最佳使用场景。

Think of a "Consumer Reports" review for sorting algorithms 📋 — each algorithm has strengths and weaknesses, and the best choice depends on your specific situation. There's no single winner!
类比：想象排序算法的"消费者报告"评测 📋 — 每个算法有优缺点，最佳选择取决于具体情况。没有单一的赢家！

🔑 **Key things to notice:**
- Stability matters: stable sorts preserve the order of equal elements
- Space complexity: in-place (O(1)) vs needs extra memory (O(n))
- Best/worst/average cases can differ dramatically
- Real-world choice depends on data size, structure, and constraints
- 实际选择取决于数据大小、结构和约束条件

👀 **Run the code and study** the comprehensive comparison to understand when to use each sort!`,
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
      codeCpp: `#include <iostream>
using namespace std;

int main() {
    cout << "📊 Sorting Algorithm Comparison:" << endl;
    cout << "=============================================" << endl;
    cout << "Algorithm       Best     Avg      Worst    Space  Stable" << endl;
    cout << "Bubble Sort     O(n)     O(n^2)   O(n^2)   O(1)   Yes" << endl;
    cout << "Selection Sort  O(n^2)   O(n^2)   O(n^2)   O(1)   No" << endl;
    cout << "Insertion Sort  O(n)     O(n^2)   O(n^2)   O(1)   Yes" << endl;
    cout << "Merge Sort      O(nlogn) O(nlogn) O(nlogn) O(n)   Yes" << endl;
    cout << "Quick Sort      O(nlogn) O(nlogn) O(n^2)   O(logn) No" << endl;
    cout << "=============================================" << endl;
    cout << "\nC++ STL sort() uses IntroSort (Quick+Heap+Insertion)" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Sort strings by LENGTH using insertion sort (don't use key=).",
        promptZh: "用插入排序按长度排序字符串（不用 key= 参数）。",
        starterCode: "def sort_by_length(words):\\n    pass\\n\\nprint(sort_by_length(['banana','kiwi','fig','apple','date']))",
        expectedOutput: "['fig', 'kiwi', 'date', 'apple', 'banana']",
        hint: "Compare len(a[j]) > len(key) instead of a[j] > key.",
        hintZh: "比较 len(a[j]) > len(key) 而不是 a[j] > key。",
        solution: "def sort_by_length(words):\\n    a = words[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i - 1\\n        while j >= 0 and len(a[j]) > len(key):\\n            a[j+1] = a[j]; j -= 1\\n        a[j+1] = key\\n    return a\\n\\nprint(sort_by_length(['banana','kiwi','fig','apple','date']))",
      },
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

🔑 **Key takeaway:** O(n log n) is optimal for general sorting. Special data → special algorithms can go faster!

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
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
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Counting Sort · 计数排序",
        description: "Implement counting sort for integers in [0, k]. O(n+k) time!\n实现 [0, k] 范围计数排序。",
        starterCode: "def counting_sort(arr, k):\n    pass\n\nprint(counting_sort([4,2,2,8,3,3,1], 8))",
        hint: "Count occurrences, rebuild from counts.\n统计出现次数，从计数重建。",
        solution: "def counting_sort(arr, k):\n    count = [0]*(k+1)\n    for x in arr: count[x] += 1\n    result = []\n    for i in range(k+1): result.extend([i]*count[i])\n    return result\n\nprint(counting_sort([4,2,2,8,3,3,1], 8))",
        expectedOutput: "[1, 2, 2, 3, 3, 4, 8]",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🏆 Sort Olympics · 排序奥运会",
        description: "Implement all three simple sorts and verify same output.\n实现三种简单排序并验证结果相同。",
        starterCode: "data = [64, 34, 25, 12, 22, 11, 90]\ndef bubble(a): pass\ndef selection(a): pass\ndef insertion(a): pass\n\nprint(bubble(data[:]))\nprint(selection(data[:]))\nprint(insertion(data[:]))",
        hint: "Implement each independently. All should produce the same sorted array.\n独立实现每种。都应产生相同的排序数组。",
        solution: "data = [64, 34, 25, 12, 22, 11, 90]\ndef bubble(a):\n    for i in range(len(a)):\n        for j in range(len(a)-1-i):\n            if a[j]>a[j+1]: a[j],a[j+1]=a[j+1],a[j]\n    return a\ndef selection(a):\n    for i in range(len(a)):\n        m=i\n        for j in range(i+1,len(a)):\n            if a[j]<a[m]: m=j\n        a[i],a[m]=a[m],a[i]\n    return a\ndef insertion(a):\n    for i in range(1,len(a)):\n        key=a[i]; j=i-1\n        while j>=0 and a[j]>key: a[j+1]=a[j]; j-=1\n        a[j+1]=key\n    return a\nprint(bubble(data[:]))\nprint(selection(data[:]))\nprint(insertion(data[:]))",
        expectedOutput: "[11, 12, 22, 25, 34, 64, 90]\n[11, 12, 22, 25, 34, 64, 90]\n[11, 12, 22, 25, 34, 64, 90]",
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
2. **Recursive case** — how to make the problem SMALLER

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Your First Recursive Function

🎯 **What you'll learn:** How recursion works — a function calling ITSELF with a smaller problem until reaching a base case.
学习目标：递归如何工作——函数用更小的问题调用自己，直到到达基本情况。

Imagine Russian nesting dolls 🪆 — open one, there's a smaller one inside. Open that, there's an even smaller one. Eventually you reach the tiniest doll that doesn't open (the base case!).
类比：想象俄罗斯套娃 🪆 — 打开一个，里面有个更小的。再打开，还有更小的。最终你到达最小的、打不开的娃娃（基本情况！）。

🔑 **Key things to notice:**
- Every recursive function needs a BASE CASE to stop
- Each call makes the problem SMALLER (countdown goes n → n-1 → ... → 0)
- The function "pauses" while waiting for its recursive call to return
- Without a base case → infinite recursion → stack overflow!
- 没有基本情况→无限递归→栈溢出！

👀 **Run the code and watch** the indentation show how deep the recursion goes!`,
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
      codeCpp: `#include <iostream>
using namespace std;

void countdown(int n) {
    cout << "  countdown(" << n << ")" << endl;
    if (n <= 0) { cout << "  🎉 Blast off!" << endl; return; }
    countdown(n - 1);
}

long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    cout << "🌀 Recursion Basics:\n" << endl;
    cout << "Countdown:" << endl;
    countdown(5);
    cout << "\nFactorials:" << endl;
    for (int i = 1; i <= 7; i++)
        cout << "  " << i << "! = " << factorial(i) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write a recursive function to calculate the SUM of digits. sum_digits(123) → 6.",
        promptZh: "写一个递归函数计算各位数之和。sum_digits(123) → 6。",
        starterCode: "def sum_digits(n):\\n    pass\\n\\nprint(sum_digits(123))\\nprint(sum_digits(9999))\\nprint(sum_digits(0))",
        expectedOutput: "6\\n36\\n0",
        hint: "Base case: n < 10 → return n. Recursive: n%10 + sum_digits(n//10).",
        hintZh: "基本情况：n < 10 → 返回 n。递归：n%10 + sum_digits(n//10)。",
        solution: "def sum_digits(n):\\n    if n < 10: return n\\n    return n % 10 + sum_digits(n // 10)\\n\\nprint(sum_digits(123))\\nprint(sum_digits(9999))\\nprint(sum_digits(0))",
      },
      exerciseCpp: {
        prompt: "Write a recursive function to calculate SUM of digits.",
        promptZh: "递归计算各位数之和。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nint sum_digits(int n) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<sum_digits(123)<<endl;\n    cout<<sum_digits(9999)<<endl;\n    cout<<sum_digits(0)<<endl;\n    return 0;\n}",
        expectedOutput: "6\n36\n0",
        hint: "Base: n<10 → return n. Recursive: n%10 + sum_digits(n/10).",
        hintZh: "基本：n<10→返回n。递归：n%10+sum_digits(n/10)。",
        solution: "#include <iostream>\nusing namespace std;\n\nint sum_digits(int n) {\n    if(n<10)return n;\n    return n%10+sum_digits(n/10);\n}\n\nint main() {\n    cout<<sum_digits(123)<<endl;\n    cout<<sum_digits(9999)<<endl;\n    cout<<sum_digits(0)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🎯 **What you'll learn:** How the computer manages recursive calls using a call stack — each call gets its own "frame" with its own variables.
学习目标：计算机如何用调用栈管理递归调用——每次调用都有自己的"帧"和自己的变量。

Think of a stack of cafeteria trays 🍽️ — each function call adds a tray (frame) on top. When a call finishes, its tray is removed. The stack grows as we go deeper and shrinks as results return!
类比：想象自助餐厅的托盘堆 🍽️ — 每次函数调用在顶部加一个托盘（帧）。调用结束时，托盘被移走。栈随深入而增长，随结果返回而缩小！

🔑 **Key things to notice:**
- Each call has its OWN copy of \`n\` — they don't share!
- PUSH happens when a new call starts, POP when it returns
- The stack shows the "chain" of waiting calls
- Stack depth = recursion depth = risk of overflow for large inputs
- 栈深度 = 递归深度 = 大输入时栈溢出的风险

👀 **Run the code and trace** the PUSH/POP pattern to see the call stack in action!`,
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
      codeCpp: `#include <iostream>
#include <string>
using namespace std;

long long factorial_visual(int n, int depth=0) {
    string indent;
    for (int i=0;i<depth;i++) indent += "│  ";
    cout << indent << "├─ factorial(" << n << ")" << endl;
    if (n <= 1) { cout << indent << "│  ↩ returns 1" << endl; return 1; }
    long long result = n * factorial_visual(n-1, depth+1);
    cout << indent << "│  ↩ returns " << result << endl;
    return result;
}

int main() {
    cout << "🌳 Recursion Tree:" << endl;
    long long r = factorial_visual(5);
    cout << "\nFinal result: " << r << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write a recursive countdown from n to 1, then print 'Blast off!'.",
        promptZh: "写一个从 n 到 1 的递归倒计时，然后打印 'Blast off!'。",
        starterCode: "def countdown(n):\\n    pass\\n\\ncountdown(3)",
        expectedOutput: "3\\n2\\n1\\nBlast off!",
        hint: "Base case: n == 0 → print 'Blast off!'. Print n, then countdown(n-1).",
        hintZh: "基本情况：n == 0 → 打印 'Blast off!'。打印 n，然后 countdown(n-1)。",
        solution: "def countdown(n):\\n    if n == 0:\\n        print('Blast off!')\\n        return\\n    print(n)\\n    countdown(n - 1)\\n\\ncountdown(3)",
      },
      exerciseCpp: {
        prompt: "Write recursive countdown from n to 1, then 'Blast off!'.",
        promptZh: "递归倒计时。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nvoid countdown(int n) {\n    // Your code here\n}\n\nint main() {\n    countdown(3);\n    return 0;\n}",
        expectedOutput: "3\n2\n1\nBlast off!",
        hint: "Base: n==0 → print Blast off!. Print n, then countdown(n-1).",
        hintZh: "基本：n==0→打印Blast off!。打印n，然后countdown(n-1)。",
        solution: "#include <iostream>\nusing namespace std;\n\nvoid countdown(int n) {\n    if(n==0){cout<<\"Blast off!\"<<endl;return;}\n    cout<<n<<endl;\n    countdown(n-1);\n}\n\nint main() {\n    countdown(3);\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🔢",
      content: `## 🔢 More Recursive Examples

🎯 **What you'll learn:** How to apply recursive thinking to different problems — sum, length, and reversing strings.
学习目标：如何对不同问题应用递归思维——求和、长度和反转字符串。

Recursion is like peeling an onion 🧅 — at each layer you handle the outer piece, then hand the rest to someone else to peel. Sum? Handle the first number, recurse on the rest. Reverse? Handle the last character, recurse on the rest!
类比：递归就像剥洋葱 🧅 — 每层你处理外面的一片，然后把剩下的交给别人剥。求和？处理第一个数，对剩余递归。反转？处理最后一个字符，对剩余递归！

🔑 **Key things to notice:**
- Each problem follows the pattern: solve a tiny piece + recurse on the rest
- Base case is always the simplest input (empty list, empty string)
- \`recursive_sum([1,2,3])\` = 1 + \`recursive_sum([2,3])\`
- These build intuition for more complex recursion later
- 这些为后面更复杂的递归建立直觉

👀 **Run the code and match** the output to the recursive formula in your head!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

int recursive_sum(vector<int> arr) {
    if (arr.empty()) return 0;
    int first = arr[0];
    arr.erase(arr.begin());
    return first + recursive_sum(arr);
}

int recursive_max(vector<int> arr) {
    if (arr.size() == 1) return arr[0];
    int first = arr[0];
    arr.erase(arr.begin());
    return max(first, recursive_max(arr));
}

int recursive_len(vector<int> arr) {
    if (arr.empty()) return 0;
    arr.erase(arr.begin());
    return 1 + recursive_len(arr);
}

int main() {
    cout << "Sum of [1,2,3,4,5]: " << recursive_sum({1,2,3,4,5}) << endl;
    cout << "Max of [3,7,2,9,1]: " << recursive_max({3,7,2,9,1}) << endl;
    cout << "Length of [1,2,3,4,5]: " << recursive_len({1,2,3,4,5}) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write a recursive function to reverse a string. reverse('hello') → 'olleh'.",
        promptZh: "写一个递归函数反转字符串。",
        starterCode: "def reverse(s):\\n    pass\\n\\nprint(reverse('hello'))\\nprint(reverse('abcd'))\\nprint(reverse('a'))",
        expectedOutput: "olleh\\ndcba\\na",
        hint: "Base case: len(s) <= 1. Recursive: reverse(s[1:]) + s[0].",
        hintZh: "基本情况：len(s) <= 1。递归：reverse(s[1:]) + s[0]。",
        solution: "def reverse(s):\\n    if len(s) <= 1: return s\\n    return reverse(s[1:]) + s[0]\\n\\nprint(reverse('hello'))\\nprint(reverse('abcd'))\\nprint(reverse('a'))",
      },
      exerciseCpp: {
        prompt: "Write recursive function to reverse a string.",
        promptZh: "递归反转字符串。",
        starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nstring reverse_str(const string& s) {\n    // Your code here\n    return \"\";\n}\n\nint main() {\n    cout<<reverse_str(\"hello\")<<endl;\n    cout<<reverse_str(\"abcd\")<<endl;\n    cout<<reverse_str(\"a\")<<endl;\n    return 0;\n}",
        expectedOutput: "olleh\ndcba\na",
        hint: "Base: len<=1. Recursive: reverse(s[1:]) + s[0].",
        hintZh: "基本：长度<=1。递归：reverse(s.substr(1))+s[0]。",
        solution: "#include <iostream>\n#include <string>\nusing namespace std;\n\nstring reverse_str(const string& s) {\n    if(s.size()<=1)return s;\n    return reverse_str(s.substr(1))+s[0];\n}\n\nint main() {\n    cout<<reverse_str(\"hello\")<<endl;\n    cout<<reverse_str(\"abcd\")<<endl;\n    cout<<reverse_str(\"a\")<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌀 Recursive Power · 递归幂",
        description: "Write recursive base^exp without ** operator.\n不用 ** 运算符写递归幂。",
        starterCode: "def power(base, exp):\n    pass\n\nprint(power(2, 10))\nprint(power(3, 0))\nprint(power(5, 3))",
        hint: "Base case: exp==0 → 1. Recursive: base * power(base, exp-1).\n基本情况：exp==0 → 1。递归：base * power(base, exp-1)。",
        solution: "def power(base, exp):\n    if exp == 0: return 1\n    return base * power(base, exp-1)\n\nprint(power(2, 10))\nprint(power(3, 0))\nprint(power(5, 3))",
        expectedOutput: "1024\n1\n125",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Flatten Nested List · 展平嵌套列表",
        description: "Recursively flatten a nested list of any depth.\n递归展平任意深度嵌套列表。",
        starterCode: "def flatten(lst):\n    pass\n\nprint(flatten([1, [2, [3, 4], 5], [6, 7]]))",
        hint: "If item is list, recurse. Otherwise append.\n如果是列表就递归。否则添加。",
        solution: "def flatten(lst):\n    result = []\n    for item in lst:\n        if isinstance(item, list): result.extend(flatten(item))\n        else: result.append(item)\n    return result\n\nprint(flatten([1, [2, [3, 4], 5], [6, 7]]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6, 7]",
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

🎯 **What you'll learn:** The linear recursion pattern — process one element, then recurse on the rest. One call per level.
学习目标：线性递归模式——处理一个元素，然后对剩余递归。每层一次调用。

Think of a conga line 💃 — each person does their move, then taps the next person. One person at a time, in a straight line. Simple, predictable, easy to follow!
类比：想象康加舞队列 💃 — 每个人做动作，然后拍下一个人。一次一人，直线排列。简单、可预测、容易跟踪！

🔑 **Key things to notice:**
- Pattern: \`f(list) = do_something(first) + f(rest)\`
- Only ONE recursive call per function invocation
- Creates a linear chain of calls (not a tree)
- Stack depth = O(n) — one frame per element
- 栈深度 = O(n)——每个元素一个帧

👀 **Run the code and observe** the linear call chain — each call leads to exactly one more!`,
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
      codeCpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool is_palindrome(const string& s) {
    if (s.size() <= 1) return true;
    if (s.front() != s.back()) return false;
    return is_palindrome(s.substr(1, s.size()-2));
}

bool is_power_of_2(int n) {
    if (n == 1) return true;
    if (n <= 0 || n % 2 != 0) return false;
    return is_power_of_2(n / 2);
}

int main() {
    for (auto& w : vector<string>{"racecar","hello","madam","world"})
        cout << "  '" << w << "': " << (is_palindrome(w) ? "✅ palindrome" : "❌ not palindrome") << endl;
    cout << "\nPower of 2:" << endl;
    for (int n : {1,2,3,4,16,15,64})
        cout << "  " << n << ": " << (is_power_of_2(n) ? "✅" : "❌") << endl;
    return 0;
}`,
      exercise: {
        prompt: "Write a recursive function to calculate the product of all elements in a list.",
        promptZh: "写一个递归函数计算列表所有元素的乘积。",
        starterCode: "def product(arr):\\n    pass\\n\\nprint(product([1,2,3,4,5]))\\nprint(product([3,7]))",
        expectedOutput: "120\\n21",
        hint: "Base case: empty list → 1. Recursive: arr[0] * product(arr[1:]).",
        hintZh: "基本情况：空列表 → 1。递归：arr[0] * product(arr[1:])。",
        solution: "def product(arr):\\n    if not arr: return 1\\n    return arr[0] * product(arr[1:])\\n\\nprint(product([1,2,3,4,5]))\\nprint(product([3,7]))",
      },
      exerciseCpp: {
        prompt: "Write recursive function for product of all elements.",
        promptZh: "递归计算列表元素乘积。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint product(vector<int> a, int i=0) {\n    // Your code here\n    return 1;\n}\n\nint main() {\n    cout<<product({1,2,3,4,5})<<endl;\n    cout<<product({3,7})<<endl;\n    return 0;\n}",
        expectedOutput: "120\n21",
        hint: "Base: i==size → 1. Recursive: a[i] * product(a, i+1).",
        hintZh: "基本：i==size→1。递归：a[i]*product(a,i+1)。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint product(vector<int> a, int i=0) {\n    if(i>=(int)a.size())return 1;\n    return a[i]*product(a,i+1);\n}\n\nint main() {\n    cout<<product({1,2,3,4,5})<<endl;\n    cout<<product({3,7})<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🌳",
      content: `## 🌳 Pattern 2: Tree Recursion

🎯 **What you'll learn:** Tree recursion — when each call makes MULTIPLE recursive calls, creating a tree of computations.
学习目标：树形递归——每次调用产生多个递归调用，创建计算树。

Imagine a phone tree ☎️🌳 — you call 2 people, each of them calls 2 more, and so on. The number of calls EXPLODES! That's why naive Fibonacci is so slow — it creates a massive tree of redundant work.
类比：想象电话树 ☎️🌳 — 你打给2个人，每人再打给2个人，依此类推。调用次数爆炸增长！这就是朴素 Fibonacci 慢的原因——它创建了大量冗余工作的树。

🔑 **Key things to notice:**
- Fibonacci makes TWO recursive calls: \`fib(n-1) + fib(n-2)\`
- This creates 2^n calls — exponential blowup!
- The same values get computed over and over (fib(3) calculated many times)
- This motivates memoization (Dynamic Programming!)
- 这就是记忆化（动态规划）的动机！

👀 **Run the code and watch** the call count explode as n grows — then compare with memoized version!`,
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
      codeCpp: `#include <iostream>
using namespace std;

int call_count = 0;
int fib(int n) {
    call_count++;
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

int main() {
    for (int n = 1; n <= 10; n++) {
        call_count = 0;
        int r = fib(n);
        cout << "fib(" << n << ") = " << r << " [" << call_count << " calls]" << endl;
    }
    cout << "\n⚠️ Calls grow EXPONENTIALLY!" << endl;
    call_count = 0; fib(20);
    cout << "fib(20): " << call_count << " calls" << endl;
    call_count = 0; fib(30);
    cout << "fib(30): " << call_count << " calls 🐌" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Count ways to climb n stairs (1 or 2 steps at a time).",
        promptZh: "计算爬 n 级楼梯的方式数（每次 1 或 2 步）。",
        starterCode: "def climb_stairs(n):\\n    pass\\n\\nprint(climb_stairs(1))\\nprint(climb_stairs(3))\\nprint(climb_stairs(5))",
        expectedOutput: "1\\n3\\n8",
        hint: "Base: n<=1 → 1. Recursive: climb(n-1) + climb(n-2).",
        hintZh: "基本：n<=1 → 1。递归：climb(n-1) + climb(n-2)。",
        solution: "def climb_stairs(n):\\n    if n <= 1: return 1\\n    return climb_stairs(n-1) + climb_stairs(n-2)\\n\\nprint(climb_stairs(1))\\nprint(climb_stairs(3))\\nprint(climb_stairs(5))",
      },
      exerciseCpp: {
        prompt: "Count ways to climb n stairs (1 or 2 steps).",
        promptZh: "计算爬 n 级楼梯方式数。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nint climb(int n) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<climb(1)<<endl;\n    cout<<climb(3)<<endl;\n    cout<<climb(5)<<endl;\n    return 0;\n}",
        expectedOutput: "1\n3\n8",
        hint: "Base: n<=1→1. Recursive: climb(n-1)+climb(n-2).",
        hintZh: "基本：n<=1→1。递归：climb(n-1)+climb(n-2)。",
        solution: "#include <iostream>\nusing namespace std;\n\nint climb(int n) {\n    if(n<=1)return 1;\n    return climb(n-1)+climb(n-2);\n}\n\nint main() {\n    cout<<climb(1)<<endl;\n    cout<<climb(3)<<endl;\n    cout<<climb(5)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🔧",
      content: `## 🔧 Pattern 3: Helper Function & Accumulator

🎯 **What you'll learn:** The accumulator pattern — use a helper function to carry partial results, avoiding redundant work and enabling tail recursion.
学习目标：累加器模式——用辅助函数携带部分结果，避免冗余工作并实现尾递归。

Think of a relay race 🏃‍♂️ — each runner carries a baton (the accumulator) and passes it to the next. The baton carries all the progress so far! No need to go back to the start.
类比：想象接力赛 🏃‍♂️ — 每个跑者携带接力棒（累加器）传给下一位。接力棒承载了所有已有的进展！不需要回到起点。

🔑 **Key things to notice:**
- Without accumulator: result is built on the way BACK (return values)
- With accumulator: result is built on the way DOWN (carried forward)
- Tail recursion: the recursive call is the LAST operation
- Some languages optimize tail calls to use O(1) space (Python doesn't, sadly)
- 有些语言优化尾调用为 O(1) 空间（Python 遗憾地不行）

👀 **Run the code and compare** the two approaches — same result, different process!`,
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
      codeCpp: `#include <iostream>
using namespace std;

long long factorial_v1(int n) {
    if (n <= 1) return 1;
    return n * factorial_v1(n-1);
}

long long factorial_v2(int n, long long acc=1) {
    if (n <= 1) return acc;
    return factorial_v2(n-1, acc*n);
}

int sum_iter(int n, int acc=0) {
    if (n <= 0) return acc;
    return sum_iter(n-1, acc+n);
}

int main() {
    cout << "Without accumulator:" << endl;
    for (int i=1;i<=6;i++) cout << "  " << i << "! = " << factorial_v1(i) << endl;
    cout << "\nWith accumulator:" << endl;
    for (int i=1;i<=6;i++) cout << "  " << i << "! = " << factorial_v2(i) << endl;
    cout << "\nAccumulator sum(5): " << sum_iter(5) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Rewrite factorial with a helper using an accumulator (tail recursion style).",
        promptZh: "用带累加器的辅助函数重写阶乘。",
        starterCode: "def factorial(n):\\n    def helper(n, acc):\\n        pass\\n    return helper(n, 1)\\n\\nprint(factorial(5))\\nprint(factorial(0))\\nprint(factorial(10))",
        expectedOutput: "120\\n1\\n3628800",
        hint: "Base: n <= 1 → return acc. Recursive: helper(n-1, acc*n).",
        hintZh: "基本：n <= 1 → 返回 acc。递归：helper(n-1, acc*n)。",
        solution: "def factorial(n):\\n    def helper(n, acc):\\n        if n <= 1: return acc\\n        return helper(n-1, acc*n)\\n    return helper(n, 1)\\n\\nprint(factorial(5))\\nprint(factorial(0))\\nprint(factorial(10))",
      },
      exerciseCpp: {
        prompt: "Rewrite factorial with accumulator (tail recursion style).",
        promptZh: "用累加器重写阶乘。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nlong long factorial(int n, long long acc=1) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<factorial(5)<<endl;\n    cout<<factorial(0)<<endl;\n    cout<<factorial(10)<<endl;\n    return 0;\n}",
        expectedOutput: "120\n1\n3628800",
        hint: "Base: n<=1→return acc. Recursive: factorial(n-1, acc*n).",
        hintZh: "基本：n<=1→返回acc。递归：factorial(n-1,acc*n)。",
        solution: "#include <iostream>\nusing namespace std;\n\nlong long factorial(int n, long long acc=1) {\n    if(n<=1)return acc;\n    return factorial(n-1,acc*n);\n}\n\nint main() {\n    cout<<factorial(5)<<endl;\n    cout<<factorial(0)<<endl;\n    cout<<factorial(10)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
4. Draw the recursion tree if confused

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌳 Binary Tree Depth · 二叉树深度",
        description: "Find max depth of tree as nested tuples (val, left, right).\n找嵌套元组树的最大深度。",
        starterCode: "def max_depth(tree):\n    # tree = (val, left, right) or None\n    pass\n\nt = (1, (2, (4, None, None), None), (3, None, (5, None, None)))\nprint(max_depth(t))\nprint(max_depth(None))",
        hint: "None → 0. Otherwise 1 + max(left depth, right depth).\nNone → 0。否则 1 + max(左深度, 右深度)。",
        solution: "def max_depth(tree):\n    if tree is None: return 0\n    _, left, right = tree\n    return 1 + max(max_depth(left), max_depth(right))\n\nt = (1, (2, (4, None, None), None), (3, None, (5, None, None)))\nprint(max_depth(t))\nprint(max_depth(None))",
        expectedOutput: "3\n0",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Tower of Hanoi · 汉诺塔",
        description: "Solve Tower of Hanoi for 3 disks.\n解决 3 个盘的汉诺塔。",
        starterCode: "def hanoi(n, src='A', tgt='C', aux='B'):\n    pass\n\nhanoi(3)",
        hint: "Move n-1 to aux, move n to target, move n-1 from aux to target.\n移 n-1 到辅助，移 n 到目标，移 n-1 从辅助到目标。",
        solution: "def hanoi(n, src='A', tgt='C', aux='B'):\n    if n == 1:\n        print(f'Move disk 1 from {src} to {tgt}')\n        return\n    hanoi(n-1, src, aux, tgt)\n    print(f'Move disk {n} from {src} to {tgt}')\n    hanoi(n-1, aux, tgt, src)\n\nhanoi(3)",
        expectedOutput: "Move disk 1 from A to C\nMove disk 2 from A to B\nMove disk 1 from C to B\nMove disk 3 from A to C\nMove disk 1 from B to A\nMove disk 2 from B to C\nMove disk 1 from A to C",
      },
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

🔑 **Backtracking = DFS + pruning = try all possibilities smartly**

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Backtracking Template

🎯 **What you'll learn:** The universal backtracking template — try a choice, recurse, and undo if it doesn't work. The foundation for solving constraint problems.
学习目标：通用回溯模板——尝试一个选择、递归、不行就撤销。解决约束问题的基础。

Think of navigating a maze 🏰 — at each fork, you pick a path. If you hit a dead end, you BACKTRACK to the last fork and try another path. You systematically explore ALL possibilities!
类比：想象走迷宫 🏰 — 在每个岔路口选一条路。如果走到死胡同，回退到上一个岔路口试另一条。你系统地探索所有可能性！

🔑 **Key things to notice:**
- Three steps: CHOOSE (make a decision), EXPLORE (recurse), UNCHOOSE (undo)
- Base case: found a solution OR exhausted all options
- \`is_valid()\` prunes bad branches early — huge performance boost
- This template solves: permutations, N-Queens, Sudoku, and more!
- 这个模板能解：排列、N皇后、数独等等！

👀 **Run the code and trace** the choose → explore → unchoose pattern in the output!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

// The Backtracking Template:
// void backtrack(state) {
//     if (is_solution(state)) { record(state); return; }
//     for (auto& choice : get_choices(state)) {
//         make_choice(choice);
//         backtrack(next_state);
//         undo_choice(choice);  // Backtrack!
//     }
// }

void subsets(vector<int>& nums, int start, vector<int>& current, vector<vector<int>>& result) {
    result.push_back(current);
    for (int i = start; i < (int)nums.size(); i++) {
        current.push_back(nums[i]);
        subsets(nums, i+1, current, result);
        current.pop_back();
    }
}

int main() {
    vector<int> nums = {1,2,3};
    vector<vector<int>> result;
    vector<int> cur;
    subsets(nums, 0, cur, result);
    cout << "All subsets of [1,2,3]:" << endl;
    for (auto& s : result) {
        cout << "  [";
        for (int i=0;i<(int)s.size();i++){if(i)cout<<", ";cout<<s[i];}
        cout << "]" << endl;
    }
    cout << "Total: " << result.size() << " subsets" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Generate all subsets of [1, 2, 3] using backtracking.",
        promptZh: "用回溯法生成 [1, 2, 3] 的所有子集。",
        starterCode: "def subsets(nums):\\n    result = []\\n    def backtrack(start, current):\\n        pass\\n    backtrack(0, [])\\n    return result\\n\\nfor s in subsets([1,2,3]):\\n    print(s)",
        expectedOutput: "[]\\n[1]\\n[1, 2]\\n[1, 2, 3]\\n[1, 3]\\n[2]\\n[2, 3]\\n[3]",
        hint: "Add current to result. Try each element from start, backtrack after.",
        hintZh: "将 current 加入结果。从 start 尝试每个元素，之后回溯。",
        solution: "def subsets(nums):\\n    result = []\\n    def backtrack(start, current):\\n        result.append(current[:])\\n        for i in range(start, len(nums)):\\n            current.append(nums[i])\\n            backtrack(i+1, current)\\n            current.pop()\\n    backtrack(0, [])\\n    return result\\n\\nfor s in subsets([1,2,3]):\\n    print(s)",
      },
      exerciseCpp: {
        prompt: "Generate all subsets of [1,2,3] using backtracking.",
        promptZh: "用回溯法生成 [1,2,3] 的所有子集。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid subsets(vector<int>& nums, int start, vector<int>& cur, vector<vector<int>>& res) {\n    // Your code here\n}\n\nint main() {\n    vector<int> nums={1,2,3};\n    vector<vector<int>> res;\n    vector<int> cur;\n    subsets(nums,0,cur,res);\n    for(auto& s:res){cout<<'[';for(int i=0;i<(int)s.size();i++){if(i)cout<<\", \";cout<<s[i];}cout<<']'<<endl;}\n    return 0;\n}",
        expectedOutput: "[]\n[1]\n[1, 2]\n[1, 2, 3]\n[1, 3]\n[2]\n[2, 3]\n[3]",
        hint: "Add current to result. For each from start, push, recurse, pop.",
        hintZh: "将current加入结果。从start开始，push，递归，pop。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid subsets(vector<int>& nums, int start, vector<int>& cur, vector<vector<int>>& res) {\n    res.push_back(cur);\n    for(int i=start;i<(int)nums.size();i++){cur.push_back(nums[i]);subsets(nums,i+1,cur,res);cur.pop_back();}\n}\n\nint main() {\n    vector<int> nums={1,2,3};\n    vector<vector<int>> res;\n    vector<int> cur;\n    subsets(nums,0,cur,res);\n    for(auto& s:res){cout<<'[';for(int i=0;i<(int)s.size();i++){if(i)cout<<\", \";cout<<s[i];}cout<<']'<<endl;}\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🔢",
      content: `## 🔢 Permutations — All Arrangements

🎯 **What you'll learn:** How backtracking generates all possible orderings of a list — the classic permutation problem.
学习目标：回溯如何生成列表的所有可能排列——经典排列问题。

Imagine arranging 3 friends for a photo 📸 — Alice can be first, second, or third. For each choice of first person, you arrange the remaining two. That's 3 × 2 × 1 = 6 arrangements (3 factorial)!
类比：想象给3个朋友拍照排位 📸 — Alice可以在第一、第二或第三个位置。每次选定第一个人后，安排剩余两人。这就是 3 × 2 × 1 = 6 种排列（3的阶乘）！

🔑 **Key things to notice:**
- We build the permutation one element at a time
- "Used" tracking prevents picking the same element twice
- n! permutations total — grows VERY fast (10! = 3,628,800!)
- The recursion tree has n levels, branching factor decreases each level
- 递归树有 n 层，每层的分支因子递减

👀 **Run the code and watch** how the tree explores every possible arrangement!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <functional>
using namespace std;

vector<vector<int>> permutations(vector<int>& nums) {
    vector<vector<int>> result;
    vector<bool> used(nums.size(), false);
    vector<int> current;
    function<void()> backtrack = [&]() {
        if ((int)current.size() == (int)nums.size()) { result.push_back(current); return; }
        for (int i = 0; i < (int)nums.size(); i++) {
            if (used[i]) continue;
            used[i] = true;
            current.push_back(nums[i]);
            backtrack();
            current.pop_back();
            used[i] = false;
        }
    };
    backtrack();
    return result;
}

int main() {
    vector<int> nums = {1,2,3};
    auto result = permutations(nums);
    cout << "Permutations of [1,2,3]:" << endl;
    for (auto& p : result) {
        cout << "  [";
        for (int i=0;i<(int)p.size();i++){if(i)cout<<", ";cout<<p[i];}
        cout << "]" << endl;
    }
    cout << "Total: " << result.size() << " (3! = 6)" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Generate all permutations of 'abc' as strings.",
        promptZh: "生成 'abc' 的所有排列字符串。",
        starterCode: "def permutations(s):\\n    result = []\\n    def backtrack(path, remaining):\\n        pass\\n    backtrack('', s)\\n    return result\\n\\nfor p in permutations('abc'):\\n    print(p)",
        expectedOutput: "abc\\nacb\\nbac\\nbca\\ncab\\ncba",
        hint: "Base: no remaining → add path. For each char, add to path, recurse without it.",
        hintZh: "基本：没有剩余 → 添加 path。对每个字符，加到 path，去掉它递归。",
        solution: "def permutations(s):\\n    result = []\\n    def backtrack(path, remaining):\\n        if not remaining:\\n            result.append(path)\\n            return\\n        for i in range(len(remaining)):\\n            backtrack(path + remaining[i], remaining[:i] + remaining[i+1:])\\n    backtrack('', s)\\n    return result\\n\\nfor p in permutations('abc'):\\n    print(p)",
      },
      exerciseCpp: {
        prompt: "Generate all permutations of 'abc' as strings.",
        promptZh: "生成 'abc' 的所有排列。",
        starterCode: "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvoid perms(string path, string remaining, vector<string>& result) {\n    // Your code here\n}\n\nint main() {\n    vector<string> res;\n    perms(\"\",\"abc\",res);\n    for(auto& s:res)cout<<s<<endl;\n    return 0;\n}",
        expectedOutput: "abc\nacb\nbac\nbca\ncab\ncba",
        hint: "Base: no remaining → add path. For each char, recurse without it.",
        hintZh: "基本：没有剩余→添加。对每个字符去掉它递归。",
        solution: "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nvoid perms(string path, string remaining, vector<string>& result) {\n    if(remaining.empty()){result.push_back(path);return;}\n    for(int i=0;i<(int)remaining.size();i++)\n        perms(path+remaining[i],remaining.substr(0,i)+remaining.substr(i+1),result);\n}\n\nint main() {\n    vector<string> res;\n    perms(\"\",\"abc\",res);\n    for(auto& s:res)cout<<s<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "👑",
      content: `## 👑 N-Queens: The Classic Backtracking Problem

🎯 **What you'll learn:** How to place N queens on an N×N chessboard so no two attack each other — the crown jewel of backtracking!
学习目标：如何在 N×N 棋盘上放 N 个皇后使它们互不攻击——回溯的皇冠明珠！

You're seating N royal queens at a fancy dinner table 👑 — but queens are very particular: none wants to see another queen in her row, column, or diagonal! You try placing them one by one, and if you get stuck, rearrange.
类比：你要在豪华宴会桌上安排 N 位女王 👑 — 但女王很挑剔：没人想在同一行、列或对角线上看到另一位女王！你逐个安排，卡住就重新安排。

🔑 **Key things to notice:**
- Place queens row by row — one queen per row guaranteed
- Check columns and diagonals for conflicts before placing
- If no valid column exists in a row, BACKTRACK to previous row
- 4-Queens has 2 solutions; 8-Queens has 92 solutions!
- 4皇后有2个解；8皇后有92个解！

👀 **Run the code and see** all solutions printed as visual chessboards!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <string>
#include <functional>
using namespace std;

void solve_n_queens(int n) {
    vector<vector<string>> solutions;
    vector<string> board(n, string(n, '.'));
    auto is_safe = [&](int row, int col) {
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
            if (col-(row-i) >= 0 && board[i][col-(row-i)] == 'Q') return false;
            if (col+(row-i) < n && board[i][col+(row-i)] == 'Q') return false;
        }
        return true;
    };
    function<void(int)> backtrack = [&](int row) {
        if (row == n) { solutions.push_back(board); return; }
        for (int col = 0; col < n; col++) {
            if (is_safe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row+1);
                board[row][col] = '.';
            }
        }
    };
    backtrack(0);
    cout << n << "-Queens: " << solutions.size() << " solutions" << endl;
    if (!solutions.empty()) {
        cout << "First solution:" << endl;
        for (auto& row : solutions[0]) cout << "  " << row << endl;
    }
}

int main() {
    for (int n = 4; n <= 8; n++) solve_n_queens(n);
    return 0;
}`,
      exercise: {
        prompt: "Write a function to check if placing a queen at (row, col) is safe.",
        promptZh: "写一个函数检查在 (row, col) 放置皇后是否安全。",
        starterCode: "def is_safe(queens, row, col):\\n    # queens[i] = column of queen in row i\\n    pass\\n\\nprint(is_safe([0], 1, 2))\\nprint(is_safe([0], 1, 1))\\nprint(is_safe([0], 1, 0))",
        expectedOutput: "True\\nFalse\\nFalse",
        hint: "Check same column and diagonals: abs(queens[i]-col) == abs(i-row).",
        hintZh: "检查同列和对角线：abs(queens[i]-col) == abs(i-row)。",
        solution: "def is_safe(queens, row, col):\\n    for i in range(len(queens)):\\n        if queens[i] == col: return False\\n        if abs(queens[i]-col) == abs(i-row): return False\\n    return True\\n\\nprint(is_safe([0], 1, 2))\\nprint(is_safe([0], 1, 1))\\nprint(is_safe([0], 1, 0))",
      },
      exerciseCpp: {
        prompt: "Check if placing a queen at (row, col) is safe.",
        promptZh: "检查在 (row, col) 放皇后是否安全。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool is_safe(vector<int>& queens, int row, int col) {\n    // queens[i] = column of queen in row i\n    // Your code here\n    return true;\n}\n\nint main() {\n    vector<int> q={0};\n    cout<<(is_safe(q,1,2)?\"True\":\"False\")<<endl;\n    cout<<(is_safe(q,1,1)?\"True\":\"False\")<<endl;\n    cout<<(is_safe(q,1,0)?\"True\":\"False\")<<endl;\n    return 0;\n}",
        expectedOutput: "True\nFalse\nFalse",
        hint: "Check column and diagonals: abs(queens[i]-col)==abs(i-row).",
        hintZh: "检查列和对角线。",
        solution: "#include <iostream>\n#include <vector>\n#include <cmath>\nusing namespace std;\n\nbool is_safe(vector<int>& queens, int row, int col) {\n    for(int i=0;i<(int)queens.size();i++){\n        if(queens[i]==col)return false;\n        if(abs(queens[i]-col)==abs(i-row))return false;\n    }\n    return true;\n}\n\nint main() {\n    vector<int> q={0};\n    cout<<(is_safe(q,1,2)?\"True\":\"False\")<<endl;\n    cout<<(is_safe(q,1,1)?\"True\":\"False\")<<endl;\n    cout<<(is_safe(q,1,0)?\"True\":\"False\")<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔤 Combination Sum · 组合总和",
        description: "Find all unique combinations summing to target. Numbers can repeat.\n找所有和为目标的唯一组合。数字可重复。",
        starterCode: "def combo_sum(cands, target):\n    result = []\n    # backtrack here\n    return result\n\nfor c in combo_sum([2,3,6,7], 7): print(c)",
        hint: "Backtrack with start index. Try each candidate >= start.\n用起始索引回溯。",
        solution: "def combo_sum(cands, target):\n    result = []\n    def bt(start, cur, rem):\n        if rem == 0: result.append(cur[:]); return\n        for i in range(start, len(cands)):\n            if cands[i] > rem: continue\n            cur.append(cands[i])\n            bt(i, cur, rem-cands[i])\n            cur.pop()\n    bt(0, [], target)\n    return result\n\nfor c in combo_sum([2,3,6,7], 7): print(c)",
        expectedOutput: "[2, 2, 3]\n[7]",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🧩 4×4 Sudoku Solver · 4×4 数独求解",
        description: "Solve a 4×4 sudoku (0 = empty) using backtracking.\n用回溯解 4×4 数独。",
        starterCode: "def solve(board):\n    pass\n\nb = [[1,0,0,4],[0,0,0,0],[0,0,0,0],[4,0,0,1]]\nprint(solve(b))\nfor r in b: print(r)",
        hint: "Find first 0, try 1-4, check row/col/2×2 box.\n找第一个 0，尝试 1-4，检查行/列/2×2 方块。",
        solution: "def solve(board):\n    def valid(r, c, num):\n        for i in range(4):\n            if board[r][i]==num or board[i][c]==num: return False\n        br, bc = (r//2)*2, (c//2)*2\n        for i in range(br,br+2):\n            for j in range(bc,bc+2):\n                if board[i][j]==num: return False\n        return True\n    for i in range(4):\n        for j in range(4):\n            if board[i][j]==0:\n                for n in range(1,5):\n                    if valid(i,j,n):\n                        board[i][j]=n\n                        if solve(board): return True\n                        board[i][j]=0\n                return False\n    return True\n\nb = [[1,0,0,4],[0,0,0,0],[0,0,0,0],[4,0,0,1]]\nprint(solve(b))\nfor r in b: print(r)",
        expectedOutput: "True\n[1, 2, 3, 4]\n[3, 4, 1, 2]\n[2, 1, 4, 3]\n[4, 3, 2, 1]",
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

🎯 **What you'll learn:** How divide-and-conquer finds the maximum subarray sum by splitting the problem and handling the cross-boundary case.
学习目标：分治法如何通过拆分问题和处理跨边界情况来找到最大子数组和。

Imagine a long stock chart 📈 — you want to find the best consecutive days to invest. Split the chart in half: the best stretch is either entirely in the left half, entirely in the right half, or it CROSSES the middle!
类比：想象一个长长的股票图 📈 — 你想找到最佳的连续投资天数。把图一分为二：最佳区间要么完全在左半，要么完全在右半，要么横跨中间！

🔑 **Key things to notice:**
- Three cases: max in left half, max in right half, max crossing middle
- The "crossing" case scans outward from the middle in both directions
- Combines in O(n) per level × O(log n) levels = O(n log n) total
- Kadane's algorithm does it in O(n), but D&C teaches the pattern!
- Kadane 算法用 O(n)，但分治法教会了模式！

👀 **Run the code and trace** how the three cases combine at each recursion level!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int max_crossing(vector<int>& a, int l, int m, int r) {
    int ls = INT_MIN, s = 0;
    for (int i = m; i >= l; i--) { s += a[i]; ls = max(ls, s); }
    int rs = INT_MIN; s = 0;
    for (int i = m+1; i <= r; i++) { s += a[i]; rs = max(rs, s); }
    return ls + rs;
}

int max_subarray_dc(vector<int>& a, int l, int r) {
    if (l == r) return a[l];
    int m = (l+r)/2;
    int lm = max_subarray_dc(a, l, m);
    int rm = max_subarray_dc(a, m+1, r);
    int cm = max_crossing(a, l, m, r);
    cout << "  [" << l << ":" << r << "] left=" << lm << " cross=" << cm << " right=" << rm << endl;
    return max({lm, rm, cm});
}

int main() {
    vector<int> arr = {-2,1,-3,4,-1,2,1,-5,4};
    cout << "Max Subarray (D&C): " << max_subarray_dc(arr, 0, arr.size()-1) << endl;
    // Kadane's
    int cur = arr[0], best = arr[0];
    for (int i = 1; i < (int)arr.size(); i++) { cur = max(arr[i], cur+arr[i]); best = max(best, cur); }
    cout << "Kadane's: " << best << endl;
    return 0;
}`,
      exercise: {
        prompt: "Find max subarray sum using Kadane's algorithm (O(n)).",
        promptZh: "用 Kadane 算法找到最大子数组和。",
        starterCode: "def max_subarray(arr):\\n    pass\\n\\nprint(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))\\nprint(max_subarray([-1,-2,-3]))",
        expectedOutput: "6\\n-1",
        hint: "Track current_sum and max_sum. Reset current if below current element.",
        hintZh: "跟踪 current_sum 和 max_sum。",
        solution: "def max_subarray(arr):\\n    max_sum = current = arr[0]\\n    for i in range(1, len(arr)):\\n        current = max(arr[i], current + arr[i])\\n        max_sum = max(max_sum, current)\\n    return max_sum\\n\\nprint(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))\\nprint(max_subarray([-1,-2,-3]))",
      },
      exerciseCpp: {
        prompt: "Find max subarray sum using Kadane's algorithm.",
        promptZh: "用 Kadane 算法找最大子数组和。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint max_subarray(vector<int> arr) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<max_subarray({-2,1,-3,4,-1,2,1,-5,4})<<endl;\n    cout<<max_subarray({-1,-2,-3})<<endl;\n    return 0;\n}",
        expectedOutput: "6\n-1",
        hint: "Track current_sum and max_sum.",
        hintZh: "跟踪 current_sum 和 max_sum。",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint max_subarray(vector<int> a) {\n    int mx=a[0],cur=a[0];\n    for(int i=1;i<(int)a.size();i++){cur=max(a[i],cur+a[i]);mx=max(mx,cur);}\n    return mx;\n}\n\nint main() {\n    cout<<max_subarray({-2,1,-3,4,-1,2,1,-5,4})<<endl;\n    cout<<max_subarray({-1,-2,-3})<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🔢",
      content: `## 🔢 D&C: Counting Inversions

🎯 **What you'll learn:** How to count inversions (out-of-order pairs) using a modified merge sort — a beautiful D&C application.
学习目标：如何用改良归并排序计算逆序对（乱序对）——一个优美的分治应用。

Imagine a class ranking 📊 — inversions count how "jumbled" the list is compared to sorted order. If a student ranked #1 is in position #5, that creates inversions. Music streaming uses this to compare your taste with friends!
类比：想象班级排名 📊 — 逆序对计算列表比排好序的版本"乱"了多少。如果排名第1的学生在第5个位置，就产生逆序对。音乐流媒体用这个来比较你和朋友的品味！

🔑 **Key things to notice:**
- Brute force counts inversions in O(n²) — check every pair
- Modified merge sort counts them in O(n log n)!
- Inversions across the split are counted during the MERGE step
- When left element > right element during merge, ALL remaining left elements form inversions
- 归并时左元素>右元素，所有剩余左元素都构成逆序对

👀 **Run the code and compare** brute force vs D&C inversion counts — same answer, way faster!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

pair<vector<int>, long long> count_inversions(vector<int> arr) {
    if (arr.size() <= 1) return {arr, 0};
    int mid = arr.size()/2;
    auto [left, li] = count_inversions(vector<int>(arr.begin(), arr.begin()+mid));
    auto [right, ri] = count_inversions(vector<int>(arr.begin()+mid, arr.end()));
    long long si = 0;
    vector<int> merged;
    int i = 0, j = 0;
    while (i < (int)left.size() && j < (int)right.size()) {
        if (left[i] <= right[j]) merged.push_back(left[i++]);
        else { merged.push_back(right[j++]); si += left.size()-i; }
    }
    while (i < (int)left.size()) merged.push_back(left[i++]);
    while (j < (int)right.size()) merged.push_back(right[j++]);
    return {merged, li+ri+si};
}

int main() {
    auto [s1, i1] = count_inversions({2,4,1,3,5});
    cout << "[2,4,1,3,5] inversions: " << i1 << endl;
    auto [s2, i2] = count_inversions({5,4,3,2,1});
    cout << "[5,4,3,2,1] inversions: " << i2 << " (maximum for n=5)" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Count inversions using O(n²) nested loops.",
        promptZh: "用 O(n²) 嵌套循环计算逆序对。",
        starterCode: "def count_inversions(arr):\\n    pass\\n\\nprint(count_inversions([2,4,1,3,5]))\\nprint(count_inversions([5,4,3,2,1]))",
        expectedOutput: "3\\n10",
        hint: "For each pair (i,j) where i<j, check if arr[i] > arr[j].",
        hintZh: "对每对 (i,j)，其中 i<j，检查 arr[i] > arr[j]。",
        solution: "def count_inversions(arr):\\n    count = 0\\n    for i in range(len(arr)):\\n        for j in range(i+1, len(arr)):\\n            if arr[i] > arr[j]: count += 1\\n    return count\\n\\nprint(count_inversions([2,4,1,3,5]))\\nprint(count_inversions([5,4,3,2,1]))",
      },
      exerciseCpp: {
        prompt: "Count inversions using O(n²) nested loops.",
        promptZh: "用嵌套循环计算逆序对。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint count_inv(vector<int> a) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<count_inv({2,4,1,3,5})<<endl;\n    cout<<count_inv({5,4,3,2,1})<<endl;\n    return 0;\n}",
        expectedOutput: "3\n10",
        hint: "For each pair (i,j) where i<j, check if a[i]>a[j].",
        hintZh: "对每对 (i,j)，检查 a[i]>a[j]。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint count_inv(vector<int> a) {\n    int c=0;\n    for(int i=0;i<(int)a.size();i++)for(int j=i+1;j<(int)a.size();j++)if(a[i]>a[j])c++;\n    return c;\n}\n\nint main() {\n    cout<<count_inv({2,4,1,3,5})<<endl;\n    cout<<count_inv({5,4,3,2,1})<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "⚡",
      content: `## ⚡ Fast Exponentiation — D&C Style

🎯 **What you'll learn:** How to compute x^n in O(log n) multiplications instead of O(n) — by squaring instead of repeated multiplication.
学习目标：如何用 O(log n) 次乘法而非 O(n) 计算 x^n——通过平方而非重复乘法。

Instead of multiplying 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 (8 times) 🐢, compute 2² = 4, 4² = 16, 16² = 256 (only 3 steps!) 🚀. Doubling the exponent with each square is the key!
类比：不用 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2（8次） 🐢，而是算 2² = 4, 4² = 16, 16² = 256（只要3步！） 🚀。每次平方使指数翻倍是关键！

🔑 **Key things to notice:**
- If n is even: x^n = (x^(n/2))² — one recursive call + one multiply
- If n is odd: x^n = x × x^(n-1) — reduce to even case
- This takes O(log n) multiplications — huge savings for large n
- Used in cryptography (RSA) where n can be thousands of digits!
- 用于密码学（RSA），其中 n 可以有数千位！

👀 **Run the code and compare** the number of multiplications: naive vs fast exponentiation!`,
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
      codeCpp: `#include <iostream>
#include <string>
using namespace std;

long long fast_pow(long long x, int n, int depth=0) {
    string indent(depth*2, ' ');
    cout << indent << "pow(" << x << ", " << n << ")" << endl;
    if (n == 0) return 1;
    if (n == 1) return x;
    if (n % 2 == 0) {
        long long half = fast_pow(x, n/2, depth+1);
        cout << indent << "→ " << half << "^2 = " << half*half << endl;
        return half*half;
    } else {
        long long half = fast_pow(x, (n-1)/2, depth+1);
        cout << indent << "→ " << x << " * " << half << "^2 = " << x*half*half << endl;
        return x*half*half;
    }
}

int main() {
    cout << "2^10:" << endl;
    cout << "Result: " << fast_pow(2, 10) << endl;
    cout << "\n3^7:" << endl;
    cout << "Result: " << fast_pow(3, 7) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Implement fast power ITERATIVELY (no recursion).",
        promptZh: "迭代实现快速幂（不用递归）。",
        starterCode: "def fast_pow(base, exp):\\n    pass\\n\\nprint(fast_pow(2, 10))\\nprint(fast_pow(3, 5))\\nprint(fast_pow(5, 0))",
        expectedOutput: "1024\\n243\\n1",
        hint: "result=1. While exp>0: if odd, result*=base. Square base, halve exp.",
        hintZh: "result=1。当 exp>0：奇数则 result*=base。base 平方，exp 减半。",
        solution: "def fast_pow(base, exp):\\n    result = 1\\n    while exp > 0:\\n        if exp % 2 == 1: result *= base\\n        base *= base\\n        exp //= 2\\n    return result\\n\\nprint(fast_pow(2, 10))\\nprint(fast_pow(3, 5))\\nprint(fast_pow(5, 0))",
      },
      exerciseCpp: {
        prompt: "Implement fast power ITERATIVELY.",
        promptZh: "迭代实现快速幂。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nlong long fast_pow(long long base, int exp) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<fast_pow(2,10)<<endl;\n    cout<<fast_pow(3,5)<<endl;\n    cout<<fast_pow(5,0)<<endl;\n    return 0;\n}",
        expectedOutput: "1024\n243\n1",
        hint: "result=1. While exp>0: if odd, result*=base. Square base, halve exp.",
        hintZh: "result=1。exp>0：奇数则*=base，base平方，exp减半。",
        solution: "#include <iostream>\nusing namespace std;\n\nlong long fast_pow(long long base, int exp) {\n    long long r=1;\n    while(exp>0){if(exp%2==1)r*=base;base*=base;exp/=2;}\n    return r;\n}\n\nint main() {\n    cout<<fast_pow(2,10)<<endl;\n    cout<<fast_pow(3,5)<<endl;\n    cout<<fast_pow(5,0)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
- If subproblems overlap → use Dynamic Programming instead!

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Closest Pair · 最近数对",
        description: "Find closest pair of numbers using sort + adjacent check.\n用排序+相邻检查找最近数对。",
        starterCode: "def closest_pair(arr):\n    pass\n\nprint(closest_pair([7, 1, 3, 10, 25, 8]))",
        hint: "Sort first. Closest pair must be adjacent.\n先排序。最近对一定相邻。",
        solution: "def closest_pair(arr):\n    s = sorted(arr)\n    best = (s[0], s[1])\n    for i in range(len(s)-1):\n        if s[i+1]-s[i] < best[1]-best[0]:\n            best = (s[i], s[i+1])\n    return best\n\nprint(closest_pair([7, 1, 3, 10, 25, 8]))",
        expectedOutput: "(7, 8)",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "⚡ Majority Element · 多数元素",
        description: "Find element appearing > n/2 times using D&C (Boyer-Moore voting).\n用分治（Boyer-Moore 投票）找出现 > n/2 次的元素。",
        starterCode: "def majority(arr):\n    pass\n\nprint(majority([3,2,3]))\nprint(majority([2,2,1,1,1,2,2]))",
        hint: "Boyer-Moore: keep candidate and count. If count=0, new candidate.\nBoyer-Moore：维护候选和计数。计数=0 时换候选。",
        solution: "def majority(arr):\n    candidate = count = 0\n    for x in arr:\n        if count == 0: candidate = x\n        count += 1 if x == candidate else -1\n    return candidate\n\nprint(majority([3,2,3]))\nprint(majority([2,2,1,1,1,2,2]))",
        expectedOutput: "3\n2",
      },
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

🔑 **DP = recursion + memoization (top-down) OR iteration + table (bottom-up)**

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "code",
      emoji: "🐌",
      content: `## 🐌 The Problem: Slow Fibonacci

🎯 **What you'll learn:** WHY naive recursive Fibonacci is painfully slow — it redundantly recomputes the same values exponentially many times.
学习目标：为什么朴素递归 Fibonacci 极其缓慢——它以指数次数冗余地重复计算相同的值。

Imagine asking "What's 10+7?" and instead of remembering 17, you recalculate it from scratch every single time 🤦. Now imagine doing that for EVERY sub-calculation. That's naive Fibonacci!
类比：想象每次问"10+7等于多少？"你都从头算，而不是记住17 🤦。现在想象对每个子计算都这样做。这就是朴素 Fibonacci！

🔑 **Key things to notice:**
- fib(5) calls fib(3) TWICE, fib(2) THREE times, fib(1) FIVE times
- Total calls grow exponentially: O(2^n) — fib(40) makes billions of calls!
- The call tree is full of duplicate work
- This screams for optimization → Dynamic Programming!
- 这大声呼唤优化→动态规划！

👀 **Run the code and watch** the timing — notice how each increase in n DOUBLES the time!`,
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
      codeCpp: `#include <iostream>
#include <chrono>
using namespace std;

int call_count = 0;
int fib_naive(int n) {
    call_count++;
    if (n <= 1) return n;
    return fib_naive(n-1) + fib_naive(n-2);
}

int main() {
    cout << "🐌 Naive Fibonacci — O(2^n)" << endl;
    for (int n = 10; n <= 35; n += 5) {
        call_count = 0;
        auto s = chrono::high_resolution_clock::now();
        int r = fib_naive(n);
        auto e = chrono::high_resolution_clock::now();
        cout << "  fib(" << n << ") = " << r << " | calls: " << call_count
             << " | " << chrono::duration<double,milli>(e-s).count() << " ms" << endl;
    }
    return 0;
}`,
      exercise: {
        prompt: "Count how many times fib(2) is called when computing fib(6).",
        promptZh: "计算 fib(6) 时 fib(2) 被调用了多少次。",
        starterCode: "count = 0\\ndef fib(n):\\n    global count\\n    pass\\n\\nresult = fib(6)\\nprint(result)\\nprint(count)",
        expectedOutput: "8\\n5",
        hint: "When n==2, increment count. Standard fib: 0→0, 1→1.",
        hintZh: "当 n==2 时增加 count。标准 fib：0→0，1→1。",
        solution: "count = 0\\ndef fib(n):\\n    global count\\n    if n == 2: count += 1\\n    if n <= 1: return n\\n    return fib(n-1) + fib(n-2)\\n\\nresult = fib(6)\\nprint(result)\\nprint(count)",
      },
      exerciseCpp: {
        prompt: "Count how many times fib(2) is called when computing fib(6).",
        promptZh: "计算 fib(6) 时 fib(2) 被调用多少次。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nint cnt=0;\nint fib(int n) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    int r=fib(6);\n    cout<<r<<endl;\n    cout<<cnt<<endl;\n    return 0;\n}",
        expectedOutput: "8\n5",
        hint: "When n==2, increment count.",
        hintZh: "当 n==2 时增加 count。",
        solution: "#include <iostream>\nusing namespace std;\n\nint cnt=0;\nint fib(int n) {\n    if(n==2)cnt++;\n    if(n<=1)return n;\n    return fib(n-1)+fib(n-2);\n}\n\nint main() {\n    int r=fib(6);\n    cout<<r<<endl;\n    cout<<cnt<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "⚡",
      content: `## ⚡ The Fix: Memoization!

🎯 **What you'll learn:** How memoization (top-down DP) caches results to eliminate ALL redundant computation — turning O(2^n) into O(n)!
学习目标：记忆化（自顶向下DP）如何缓存结果消除所有冗余计算——将 O(2^n) 变成 O(n)！

It's like writing answers on sticky notes 📝 — the first time you solve fib(5), write "fib(5) = 5" on a sticky note. Next time someone asks for fib(5)? Just read the note! No recalculation needed.
类比：就像把答案写在便利贴上 📝 — 第一次算出 fib(5)，写上"fib(5) = 5"。下次再问 fib(5)？直接看便利贴！不需要重新计算。

🔑 **Key things to notice:**
- Only ONE line changes: check the cache before computing!
- Goes from O(2^n) to O(n) — exponential to linear!
- Each unique value computed exactly ONCE, then cached
- Python's \`@lru_cache\` does this automatically
- Python 的 \`@lru_cache\` 自动实现这个功能

👀 **Run the code and compare** the speed — memoized fib(40) is INSTANT vs minutes for naive!`,
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
      codeCpp: `#include <iostream>
#include <unordered_map>
#include <vector>
#include <chrono>
using namespace std;

unordered_map<int,long long> memo;
int call_count = 0;

long long fib_memo(int n) {
    call_count++;
    if (memo.count(n)) return memo[n];
    if (n <= 1) return n;
    memo[n] = fib_memo(n-1) + fib_memo(n-2);
    return memo[n];
}

long long fib_tab(int n) {
    if (n <= 1) return n;
    vector<long long> dp(n+1);
    dp[0]=0; dp[1]=1;
    for (int i=2;i<=n;i++) dp[i]=dp[i-1]+dp[i-2];
    return dp[n];
}

int main() {
    cout << "⚡ Memoized Fibonacci — O(n)" << endl;
    for (int n = 10; n <= 40; n += 10) {
        memo.clear(); call_count = 0;
        auto s = chrono::high_resolution_clock::now();
        long long r = fib_memo(n);
        auto e = chrono::high_resolution_clock::now();
        cout << "  fib(" << n << ") = " << r << " | calls: " << call_count
             << " | " << chrono::duration<double,milli>(e-s).count() << " ms" << endl;
    }
    cout << "\nTabulation:" << endl;
    for (int n = 10; n <= 40; n += 10)
        cout << "  fib(" << n << ") = " << fib_tab(n) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Implement Fibonacci with memoization. Count total function calls.",
        promptZh: "用记忆化实现斐波那契。统计总调用次数。",
        starterCode: "calls = 0\\ndef fib_memo(n, memo={}):\\n    global calls\\n    calls += 1\\n    pass\\n\\nprint(fib_memo(10))\\nprint(calls)",
        expectedOutput: "55\\n19",
        hint: "Check if n in memo first. Store result before returning.",
        hintZh: "先检查 n 是否在 memo 中。返回前存储结果。",
        solution: "calls = 0\\ndef fib_memo(n, memo={}):\\n    global calls\\n    calls += 1\\n    if n in memo: return memo[n]\\n    if n <= 1: return n\\n    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)\\n    return memo[n]\\n\\nprint(fib_memo(10))\\nprint(calls)",
      },
      exerciseCpp: {
        prompt: "Implement Fibonacci with memoization. Count total calls.",
        promptZh: "用记忆化实现斐波那契。统计调用次数。",
        starterCode: "#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nunordered_map<int,long long> memo;\nint calls=0;\nlong long fib_memo(int n) {\n    calls++;\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<fib_memo(10)<<endl;\n    cout<<calls<<endl;\n    return 0;\n}",
        expectedOutput: "55\n19",
        hint: "Check if n in memo first. Store before returning.",
        hintZh: "先检查 memo。返回前存储。",
        solution: "#include <iostream>\n#include <unordered_map>\nusing namespace std;\n\nunordered_map<int,long long> memo;\nint calls=0;\nlong long fib_memo(int n) {\n    calls++;\n    if(memo.count(n))return memo[n];\n    if(n<=1)return n;\n    return memo[n]=fib_memo(n-1)+fib_memo(n-2);\n}\n\nint main() {\n    cout<<fib_memo(10)<<endl;\n    cout<<calls<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🎯 **What you'll learn:** How the climbing stairs problem is secretly Fibonacci — and how to solve it with DP thinking.
学习目标：爬楼梯问题其实是 Fibonacci 的变装——以及如何用 DP 思维解决它。

You're climbing stairs and can take 1 or 2 steps at a time 🪜 — to reach step 5, you either came from step 4 (one step) or step 3 (two steps). So ways(5) = ways(4) + ways(3). Sound familiar? It's Fibonacci!
类比：你爬楼梯，每次可以走1步或2步 🪜 — 到第5级，你要么从第4级来（一步）要么从第3级来（两步）。所以 ways(5) = ways(4) + ways(3)。听起来熟悉吗？这就是 Fibonacci！

🔑 **Key things to notice:**
- The recurrence is identical to Fibonacci: ways(n) = ways(n-1) + ways(n-2)
- Base cases: ways(0) = 1 (stay), ways(1) = 1 (one step)
- We can use memo (top-down) or table (bottom-up)
- This pattern generalizes to many step-counting problems
- 这个模式可以推广到许多步数计算问题

👀 **Run the code and compare** how all three approaches (naive, memo, table) give the same answers!`,
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
      codeCpp: `#include <iostream>
#include <unordered_map>
using namespace std;

unordered_map<int,long long> memo;

long long climb_stairs(int n) {
    if (memo.count(n)) return memo[n];
    if (n <= 2) return n;
    memo[n] = climb_stairs(n-1) + climb_stairs(n-2);
    return memo[n];
}

int main() {
    cout << "🪜 Climbing Stairs:" << endl;
    for (int n = 1; n <= 10; n++) {
        memo.clear();
        cout << "  " << n << " stairs: " << climb_stairs(n) << " ways" << endl;
    }
    memo.clear();
    cout << "  20 stairs: " << climb_stairs(20) << " ways" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Solve climbing stairs with 1, 2, or 3 steps allowed.",
        promptZh: "解决允许走 1、2 或 3 步的爬楼梯问题。",
        starterCode: "def climb3(n):\\n    pass\\n\\nprint(climb3(3))\\nprint(climb3(5))",
        expectedOutput: "4\\n13",
        hint: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]. Base: dp[0]=1, dp[1]=1, dp[2]=2.",
        hintZh: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]。",
        solution: "def climb3(n):\\n    if n <= 1: return 1\\n    if n == 2: return 2\\n    dp = [0]*(n+1)\\n    dp[0]=1; dp[1]=1; dp[2]=2\\n    for i in range(3, n+1):\\n        dp[i] = dp[i-1]+dp[i-2]+dp[i-3]\\n    return dp[n]\\n\\nprint(climb3(3))\\nprint(climb3(5))",
      },
      exerciseCpp: {
        prompt: "Solve climbing stairs with 1, 2, or 3 steps.",
        promptZh: "允许走 1、2 或 3 步。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint climb3(int n) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<climb3(3)<<endl;\n    cout<<climb3(5)<<endl;\n    return 0;\n}",
        expectedOutput: "4\n13",
        hint: "dp[i] = dp[i-1]+dp[i-2]+dp[i-3].",
        hintZh: "dp[i] = dp[i-1]+dp[i-2]+dp[i-3]。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint climb3(int n) {\n    if(n<=1)return 1;if(n==2)return 2;\n    vector<int> dp(n+1);dp[0]=1;dp[1]=1;dp[2]=2;\n    for(int i=3;i<=n;i++)dp[i]=dp[i-1]+dp[i-2]+dp[i-3];\n    return dp[n];\n}\n\nint main() {\n    cout<<climb3(3)<<endl;\n    cout<<climb3(5)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🪙 Tribonacci · 三波那契",
        description: "Compute Tribonacci: T(n)=T(n-1)+T(n-2)+T(n-3). T(0)=0, T(1)=T(2)=1.\n计算三波那契数。",
        starterCode: "def tribonacci(n):\n    pass\n\nfor i in range(10): print(tribonacci(i), end=' ')",
        hint: "Same as Fibonacci memo, but three recursive calls.\n和斐波那契记忆化一样，但三个递归。",
        solution: "def tribonacci(n, memo={}):\n    if n in memo: return memo[n]\n    if n == 0: return 0\n    if n <= 2: return 1\n    memo[n] = tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3)\n    return memo[n]\n\nfor i in range(10): print(tribonacci(i), end=' ')",
        expectedOutput: "0 1 1 2 4 7 13 24 44 81 ",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🏠 House Robber · 打家劫舍",
        description: "Max money robbing non-adjacent houses. houses = [2,7,9,3,1].\n抢劫不相邻房屋的最大金额。",
        starterCode: "def rob(houses):\n    pass\n\nprint(rob([2,7,9,3,1]))\nprint(rob([1,2,3,1]))",
        hint: "dp[i] = max(dp[i-1], dp[i-2] + houses[i]).\ndp[i] = max(dp[i-1], dp[i-2] + houses[i])。",
        solution: "def rob(houses):\n    if not houses: return 0\n    if len(houses) == 1: return houses[0]\n    dp = [0]*len(houses)\n    dp[0] = houses[0]\n    dp[1] = max(houses[0], houses[1])\n    for i in range(2, len(houses)):\n        dp[i] = max(dp[i-1], dp[i-2]+houses[i])\n    return dp[-1]\n\nprint(rob([2,7,9,3,1]))\nprint(rob([1,2,3,1]))",
        expectedOutput: "12\n4",
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

🎯 **What you'll learn:** The three paradigms of DP — naive recursion, memoization (top-down), and tabulation (bottom-up) — side by side.
学习目标：DP 的三种范式——朴素递归、记忆化（自顶向下）和制表法（自底向上）——并排比较。

Three chefs cooking the same dish 👨‍🍳 — Chef Naive starts from scratch every time. Chef Memo writes recipes as they go. Chef Table pre-makes everything in order from simplest to complex. Same result, wildly different efficiency!
类比：三个厨师做同一道菜 👨‍🍳 — 朴素厨师每次从头做。记忆化厨师边做边记菜谱。制表厨师从最简单到最复杂按顺序预先做好一切。结果相同，效率天差地别！

🔑 **Key things to notice:**
- Naive: O(2^n) — recalculates everything, exponentially slow
- Memoized: O(n) time, O(n) space — top-down with cache
- Tabulated: O(n) time, O(1) space possible — bottom-up, no recursion overhead
- In practice, tabulation is often preferred for cleaner iterative code
- 实践中，制表法通常因更简洁的迭代代码而被偏好

👀 **Run the code and benchmark** all three to see the dramatic performance difference!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int fib_naive(int n) { if (n<=1) return n; return fib_naive(n-1)+fib_naive(n-2); }

unordered_map<int,long long> memo;
long long fib_memo(int n) {
    if (memo.count(n)) return memo[n];
    if (n<=1) return n;
    return memo[n] = fib_memo(n-1)+fib_memo(n-2);
}

long long fib_tab(int n) {
    if (n<=1) return n;
    vector<long long> dp(n+1); dp[0]=0; dp[1]=1;
    for (int i=2;i<=n;i++) dp[i]=dp[i-1]+dp[i-2];
    return dp[n];
}

long long fib_opt(int n) {
    if (n<=1) return n;
    long long prev=0, curr=1;
    for (int i=2;i<=n;i++) { long long next=prev+curr; prev=curr; curr=next; }
    return curr;
}

int main() {
    cout << "Naive:  fib(10) = " << fib_naive(10) << endl;
    memo.clear();
    cout << "Memo:   fib(10) = " << fib_memo(10) << endl;
    cout << "Table:  fib(10) = " << fib_tab(10) << endl;
    cout << "Opt:    fib(10) = " << fib_opt(10) << endl;
    cout << "\nLarger:" << endl;
    memo.clear(); cout << "  fib(30) = " << fib_memo(30) << endl;
    cout << "  fib(40) = " << fib_tab(40) << endl;
    cout << "  fib(50) = " << fib_opt(50) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Implement Fibonacci using ONLY two variables (O(1) space).",
        promptZh: "只用两个变量实现斐波那契（O(1) 空间）。",
        starterCode: "def fib_const(n):\\n    pass\\n\\nprint(fib_const(0))\\nprint(fib_const(10))\\nprint(fib_const(20))",
        expectedOutput: "0\\n55\\n6765",
        hint: "prev=0, curr=1. Loop: prev, curr = curr, prev+curr.",
        hintZh: "prev=0, curr=1。循环：prev, curr = curr, prev+curr。",
        solution: "def fib_const(n):\\n    if n <= 1: return n\\n    prev, curr = 0, 1\\n    for _ in range(2, n+1):\\n        prev, curr = curr, prev+curr\\n    return curr\\n\\nprint(fib_const(0))\\nprint(fib_const(10))\\nprint(fib_const(20))",
      },
      exerciseCpp: {
        prompt: "Implement Fibonacci using ONLY two variables.",
        promptZh: "只用两个变量实现斐波那契。",
        starterCode: "#include <iostream>\nusing namespace std;\n\nlong long fib_const(int n) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<fib_const(0)<<endl;\n    cout<<fib_const(10)<<endl;\n    cout<<fib_const(20)<<endl;\n    return 0;\n}",
        expectedOutput: "0\n55\n6765",
        hint: "prev=0, curr=1. Loop: swap and add.",
        hintZh: "prev=0,curr=1。循环。",
        solution: "#include <iostream>\nusing namespace std;\n\nlong long fib_const(int n) {\n    if(n<=1)return n;\n    long long prev=0,curr=1;\n    for(int i=2;i<=n;i++){long long next=prev+curr;prev=curr;curr=next;}\n    return curr;\n}\n\nint main() {\n    cout<<fib_const(0)<<endl;\n    cout<<fib_const(10)<<endl;\n    cout<<fib_const(20)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🪙",
      content: `## 🪙 Classic DP: Coin Change

🎯 **What you'll learn:** How to find the minimum number of coins to make a target amount — a foundational DP problem with real-world applications.
学习目标：如何找到凑出目标金额的最少硬币数——有现实应用的基础 DP 问题。

You're at an arcade with coins of different values 🎰 — you need exactly 11 tokens. You have 1s, 5s, and 6s. Taking two 5s + one 1 = 11 with 3 coins. But greedy (take biggest first) would try 6+5 = 11 with 2 coins. DP finds the TRUE minimum!
类比：你在游戏厅有不同面值的硬币 🎰 — 你需要恰好11个代币。你有1、5和6。两个5+一个1=11用3个硬币。但贪心（先拿最大的）会试6+5=11只用2个。DP找到真正的最少！

🔑 **Key things to notice:**
- State: \`dp[amount]\` = minimum coins needed for that amount
- Transition: \`dp[amount] = min(dp[amount - coin] + 1)\` for each coin
- Build from dp[0]=0 upward — each amount depends on smaller amounts
- Greedy doesn't always work — DP considers ALL combinations!
- 贪心并不总是有效——DP 考虑所有组合！

👀 **Run the code and trace** how dp fills in from amount 0 to the target!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int coin_change(vector<int>& coins, int amount) {
    vector<int> dp(amount+1, INT_MAX);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++)
        for (int c : coins)
            if (c <= i && dp[i-c] != INT_MAX)
                dp[i] = min(dp[i], dp[i-c]+1);
    cout << "Amount: ";
    for (int i=0;i<=min(amount,15);i++) cout << i << "\t";
    cout << "\nCoins:  ";
    for (int i=0;i<=min(amount,15);i++) cout << (dp[i]==INT_MAX?-1:dp[i]) << "\t";
    cout << endl;
    return dp[amount]==INT_MAX ? -1 : dp[amount];
}

int main() {
    vector<int> coins = {1,5,10,25};
    cout << "Coins: [1,5,10,25]\n" << endl;
    cout << "Min coins for 36: " << coin_change(coins, 36) << endl;
    cout << "\nMin coins for 30: " << coin_change(coins, 30) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Find minimum coins to make 36 cents with [1, 5, 10, 25].",
        promptZh: "用 [1, 5, 10, 25] 凑 36 美分的最少硬币数。",
        starterCode: "def min_coins(coins, amount):\\n    pass\\n\\nprint(min_coins([1,5,10,25], 36))\\nprint(min_coins([1,5,10,25], 30))",
        expectedOutput: "3\\n2",
        hint: "dp[i] = min(dp[i-c] + 1) for each coin c <= i.",
        hintZh: "dp[i] = min(dp[i-c] + 1) 对每个 c <= i 的硬币。",
        solution: "def min_coins(coins, amount):\\n    dp = [float('inf')]*(amount+1)\\n    dp[0] = 0\\n    for i in range(1, amount+1):\\n        for c in coins:\\n            if c <= i and dp[i-c]+1 < dp[i]:\\n                dp[i] = dp[i-c]+1\\n    return dp[amount]\\n\\nprint(min_coins([1,5,10,25], 36))\\nprint(min_coins([1,5,10,25], 30))",
      },
      exerciseCpp: {
        prompt: "Find minimum coins for 36 cents with [1,5,10,25].",
        promptZh: "凑 36 美分最少硬币数。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nint min_coins(vector<int> coins, int amount) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<min_coins({1,5,10,25},36)<<endl;\n    cout<<min_coins({1,5,10,25},30)<<endl;\n    return 0;\n}",
        expectedOutput: "3\n2",
        hint: "dp[i] = min(dp[i-c]+1) for each coin.",
        hintZh: "dp[i]=min(dp[i-c]+1)。",
        solution: "#include <iostream>\n#include <vector>\n#include <climits>\nusing namespace std;\n\nint min_coins(vector<int> coins, int amount) {\n    vector<int> dp(amount+1,INT_MAX);dp[0]=0;\n    for(int i=1;i<=amount;i++)for(int c:coins)if(c<=i&&dp[i-c]!=INT_MAX)dp[i]=min(dp[i],dp[i-c]+1);\n    return dp[amount];\n}\n\nint main() {\n    cout<<min_coins({1,5,10,25},36)<<endl;\n    cout<<min_coins({1,5,10,25},30)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
- In competitions, memoization + @lru_cache is often fastest to code!

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🪙 Coin Combinations · 硬币组合",
        description: "Count the NUMBER of ways to make amount with given coins.\n计算用给定硬币凑出金额的方式数。",
        starterCode: "def coin_ways(coins, amount):\n    pass\n\nprint(coin_ways([1,2,5], 5))\nprint(coin_ways([1,2], 3))",
        hint: "dp[i] += dp[i-coin] for each coin.\ndp[i] += dp[i-coin]。",
        solution: "def coin_ways(coins, amount):\n    dp = [0]*(amount+1)\n    dp[0] = 1\n    for c in coins:\n        for i in range(c, amount+1):\n            dp[i] += dp[i-c]\n    return dp[amount]\n\nprint(coin_ways([1,2,5], 5))\nprint(coin_ways([1,2], 3))",
        expectedOutput: "4\n2",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Maximum Subarray DP · 最大子数组 DP",
        description: "Find max subarray sum using DP (Kadane's).\n用 DP 找最大子数组和。",
        starterCode: "def max_sub(arr):\n    pass\n\nprint(max_sub([-2,1,-3,4,-1,2,1,-5,4]))",
        hint: "dp[i] = max(arr[i], dp[i-1]+arr[i]).\ndp[i] = max(arr[i], dp[i-1]+arr[i])。",
        solution: "def max_sub(arr):\n    dp = arr[0]\n    best = arr[0]\n    for i in range(1, len(arr)):\n        dp = max(arr[i], dp+arr[i])\n        best = max(best, dp)\n    return best\n\nprint(max_sub([-2,1,-3,4,-1,2,1,-5,4]))",
        expectedOutput: "6",
      },
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
- "Can this be done?" → likely DP

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "code",
      emoji: "🎒",
      content: `## 🎒 0/1 Knapsack Problem

🎯 **What you'll learn:** How to maximize value in a weight-limited knapsack — the classic DP optimization problem.
学习目标：如何在重量有限的背包中最大化价值——经典 DP 优化问题。

You're packing for a hiking trip 🎒 — your backpack holds 10kg. A tent (4kg, value 6), sleeping bag (3kg, value 5), food (5kg, value 4), camera (2kg, value 3). You can't take everything! Which combo gives max value?
类比：你在收拾行李去远足 🎒 — 背包能装10kg。帐篷（4kg，价值6）、睡袋（3kg，价值5）、食物（5kg，价值4）、相机（2kg，价值3）。装不下所有的！哪个组合价值最大？

🔑 **Key things to notice:**
- For each item: include it (add value, subtract weight) or skip it
- \`dp[i][w]\` = max value using first i items with capacity w
- If item too heavy, skip. Otherwise, max(skip, take)
- Build the table bottom-up, then trace back to find which items to take
- 自底向上建表，然后回溯找出选了哪些物品

👀 **Run the code and see** both the max value AND which items are selected!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int knapsack(vector<int>& w, vector<int>& v, int W) {
    int n = w.size();
    vector<vector<int>> dp(n+1, vector<int>(W+1, 0));
    for (int i=1;i<=n;i++)
        for (int c=0;c<=W;c++) {
            dp[i][c] = dp[i-1][c];
            if (w[i-1]<=c) dp[i][c] = max(dp[i][c], dp[i-1][c-w[i-1]]+v[i-1]);
        }
    // Backtrack
    cout << "Items selected: ";
    int c = W;
    for (int i=n;i>0;i--)
        if (dp[i][c] != dp[i-1][c]) { cout << i << "(w=" << w[i-1] << ",v=" << v[i-1] << ") "; c -= w[i-1]; }
    cout << endl;
    return dp[n][W];
}

int main() {
    vector<int> weights={2,3,4,5}, values={3,4,5,6};
    cout << "0/1 Knapsack (capacity 8):" << endl;
    cout << "Max value: " << knapsack(weights, values, 8) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Solve knapsack: items=[(2,3),(3,4),(4,5),(5,6)], capacity=8. Print max value.",
        promptZh: "背包问题：物品=[(2,3),(3,4),(4,5),(5,6)]，容量=8。打印最大价值。",
        starterCode: "def knapsack(items, capacity):\\n    pass\\n\\nprint(knapsack([(2,3),(3,4),(4,5),(5,6)], 8))",
        expectedOutput: "10",
        hint: "2D DP: dp[i][w] = max value using first i items with capacity w.",
        hintZh: "二维 DP：dp[i][w] = 用前 i 个物品、容量 w 的最大价值。",
        solution: "def knapsack(items, capacity):\\n    n = len(items)\\n    dp = [[0]*(capacity+1) for _ in range(n+1)]\\n    for i in range(1, n+1):\\n        w, v = items[i-1]\\n        for c in range(capacity+1):\\n            dp[i][c] = dp[i-1][c]\\n            if w <= c:\\n                dp[i][c] = max(dp[i][c], dp[i-1][c-w]+v)\\n    return dp[n][capacity]\\n\\nprint(knapsack([(2,3),(3,4),(4,5),(5,6)], 8))",
      },
      exerciseCpp: {
        prompt: "Solve knapsack: items=[(2,3),(3,4),(4,5),(5,6)], capacity=8.",
        promptZh: "背包问题。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint knapsack(vector<pair<int,int>> items, int cap) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<knapsack({{2,3},{3,4},{4,5},{5,6}},8)<<endl;\n    return 0;\n}",
        expectedOutput: "10",
        hint: "2D DP: dp[i][w].",
        hintZh: "二维 DP。",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint knapsack(vector<pair<int,int>> items, int cap) {\n    int n=items.size();\n    vector<vector<int>> dp(n+1,vector<int>(cap+1,0));\n    for(int i=1;i<=n;i++){auto[w,v]=items[i-1];for(int c=0;c<=cap;c++){dp[i][c]=dp[i-1][c];if(w<=c)dp[i][c]=max(dp[i][c],dp[i-1][c-w]+v);}}\n    return dp[n][cap];\n}\n\nint main() {\n    cout<<knapsack({{2,3},{3,4},{4,5},{5,6}},8)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "📝",
      content: `## 📝 Longest Common Subsequence (LCS)

🎯 **What you'll learn:** How to find the longest sequence common to two strings — fundamental for diff tools, DNA analysis, and version control.
学习目标：如何找到两个字符串的最长公共子序列——diff 工具、DNA 分析和版本控制的基础。

Comparing two essays for similarity 📄✏️ — you highlight letters that appear in BOTH, in the same ORDER (but not necessarily adjacent). The longest highlighted sequence is the LCS! "ABCDE" and "ACE" share "ACE" (length 3).
类比：比较两篇文章的相似性 📄✏️ — 你高亮两篇中都出现的、顺序相同的字母（不必相邻）。最长的高亮序列就是 LCS！"ABCDE" 和 "ACE" 共享 "ACE"（长度3）。

🔑 **Key things to notice:**
- If characters match: LCS includes it + LCS of remaining parts
- If they don't: try skipping from each string, take the better result
- 2D table: \`dp[i][j]\` = LCS length for first i chars of s1 and first j of s2
- Trace back through the table to reconstruct the actual subsequence
- 通过表回溯来重建实际的子序列

👀 **Run the code and see** both the LCS length and the actual common subsequence!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string lcs(const string& s1, const string& s2) {
    int m=s1.size(), n=s2.size();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
    for (int i=1;i<=m;i++)
        for (int j=1;j<=n;j++)
            dp[i][j] = (s1[i-1]==s2[j-1]) ? dp[i-1][j-1]+1 : max(dp[i-1][j], dp[i][j-1]);
    // Backtrack
    string result;
    int i=m, j=n;
    while (i>0 && j>0) {
        if (s1[i-1]==s2[j-1]) { result = s1[i-1]+result; i--; j--; }
        else if (dp[i-1][j]>dp[i][j-1]) i--;
        else j--;
    }
    cout << "LCS of '" << s1 << "' and '" << s2 << "':" << endl;
    cout << "  Length: " << dp[m][n] << ", LCS: '" << result << "'" << endl;
    return result;
}

int main() {
    lcs("ABCBDAB", "BDCAB");
    lcs("AGGTAB", "GXTXAYB");
    return 0;
}`,
      exercise: {
        prompt: "Find LCS length of 'ABCDE' and 'ACE'.",
        promptZh: "找出 'ABCDE' 和 'ACE' 的 LCS 长度。",
        starterCode: "def lcs_length(s1, s2):\\n    pass\\n\\nprint(lcs_length('ABCDE', 'ACE'))\\nprint(lcs_length('abc', 'def'))",
        expectedOutput: "3\\n0",
        hint: "dp[i][j]: if match, dp[i-1][j-1]+1; else max(dp[i-1][j], dp[i][j-1]).",
        hintZh: "dp[i][j]：匹配则 dp[i-1][j-1]+1，否则取最大值。",
        solution: "def lcs_length(s1, s2):\\n    m, n = len(s1), len(s2)\\n    dp = [[0]*(n+1) for _ in range(m+1)]\\n    for i in range(1, m+1):\\n        for j in range(1, n+1):\\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]+1\\n            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\\n    return dp[m][n]\\n\\nprint(lcs_length('ABCDE', 'ACE'))\\nprint(lcs_length('abc', 'def'))",
      },
      exerciseCpp: {
        prompt: "Find LCS length of 'ABCDE' and 'ACE'.",
        promptZh: "找 LCS 长度。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint lcs_len(string s1, string s2) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<lcs_len(\"ABCDE\",\"ACE\")<<endl;\n    cout<<lcs_len(\"abc\",\"def\")<<endl;\n    return 0;\n}",
        expectedOutput: "3\n0",
        hint: "dp[i][j]: match→dp[i-1][j-1]+1; else max.",
        hintZh: "匹配则+1。",
        solution: "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint lcs_len(string s1, string s2) {\n    int m=s1.size(),n=s2.size();\n    vector<vector<int>> dp(m+1,vector<int>(n+1,0));\n    for(int i=1;i<=m;i++)for(int j=1;j<=n;j++)dp[i][j]=(s1[i-1]==s2[j-1])?dp[i-1][j-1]+1:max(dp[i-1][j],dp[i][j-1]);\n    return dp[m][n];\n}\n\nint main() {\n    cout<<lcs_len(\"ABCDE\",\"ACE\")<<endl;\n    cout<<lcs_len(\"abc\",\"def\")<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "📈",
      content: `## 📈 Longest Increasing Subsequence (LIS)

🎯 **What you'll learn:** How to find the longest strictly increasing subsequence — a key problem in optimization and patience sorting.
学习目标：如何找到最长严格递增子序列——优化和耐心排序中的关键问题。

Imagine picking students from a line to form the longest "staircase" by height 📶 — each student you pick must be TALLER than the previous one. You can skip people, but you want the longest possible ascending sequence!
类比：想象从队伍中选学生组成最长的身高"阶梯" 📶 — 每个选的学生必须比前一个高。你可以跳过人，但想要最长的上升序列！

🔑 **Key things to notice:**
- \`dp[i]\` = length of longest increasing subsequence ending at index i
- For each i, check ALL previous j: if arr[j] < arr[i], extend that subsequence
- O(n²) DP solution — there's also an O(n log n) solution using binary search!
- Trace back to find the actual subsequence, not just the length
- 回溯找到实际子序列，不只是长度

👀 **Run the code and trace** how each element looks back to find the best subsequence to extend!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int lis(vector<int>& arr) {
    int n = arr.size();
    vector<int> dp(n, 1);
    for (int i=1;i<n;i++)
        for (int j=0;j<i;j++)
            if (arr[j]<arr[i]) dp[i] = max(dp[i], dp[j]+1);
    int mx = *max_element(dp.begin(), dp.end());
    // Backtrack
    vector<int> seq;
    int target = mx;
    for (int i=n-1;i>=0;i--)
        if (dp[i]==target) { seq.push_back(arr[i]); target--; }
    reverse(seq.begin(), seq.end());
    cout << "dp: [";
    for (int i=0;i<n;i++){if(i)cout<<", ";cout<<dp[i];}
    cout << "]\nLIS length: " << mx << "\nLIS: [";
    for (int i=0;i<(int)seq.size();i++){if(i)cout<<", ";cout<<seq[i];}
    cout << "]" << endl;
    return mx;
}

int main() {
    vector<int> arr = {10,9,2,5,3,7,101,18};
    lis(arr);
    return 0;
}`,
      exercise: {
        prompt: "Find the actual LIS (not just length) for [10,9,2,5,3,7,101,18].",
        promptZh: "找到 [10,9,2,5,3,7,101,18] 的实际 LIS（不只是长度）。",
        starterCode: "def lis_sequence(arr):\\n    pass\\n\\nprint(lis_sequence([10,9,2,5,3,7,101,18]))",
        expectedOutput: "[2, 3, 7, 18]",
        hint: "Track parent pointers alongside dp array.",
        hintZh: "在 dp 数组之外跟踪父指针。",
        solution: "def lis_sequence(arr):\\n    n = len(arr)\\n    dp = [1]*n\\n    parent = [-1]*n\\n    for i in range(1, n):\\n        for j in range(i):\\n            if arr[j] < arr[i] and dp[j]+1 > dp[i]:\\n                dp[i] = dp[j]+1\\n                parent[i] = j\\n    idx = dp.index(max(dp))\\n    result = []\\n    while idx != -1:\\n        result.append(arr[idx])\\n        idx = parent[idx]\\n    return result[::-1]\\n\\nprint(lis_sequence([10,9,2,5,3,7,101,18]))",
      },
      exerciseCpp: {
        prompt: "Find actual LIS for [10,9,2,5,3,7,101,18].",
        promptZh: "找实际 LIS。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> arr={10,9,2,5,3,7,101,18};\n    // Find and print LIS\n    return 0;\n}",
        expectedOutput: "[2, 3, 7, 18]",
        hint: "Track parent pointers alongside dp.",
        hintZh: "跟踪父指针。",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> arr={10,9,2,5,3,7,101,18};\n    int n=arr.size();\n    vector<int> dp(n,1),parent(n,-1);\n    for(int i=1;i<n;i++)for(int j=0;j<i;j++)if(arr[j]<arr[i]&&dp[j]+1>dp[i]){dp[i]=dp[j]+1;parent[i]=j;}\n    int idx=max_element(dp.begin(),dp.end())-dp.begin();\n    vector<int> res;while(idx!=-1){res.push_back(arr[idx]);idx=parent[idx];}\n    reverse(res.begin(),res.end());\n    cout<<'[';for(int i=0;i<(int)res.size();i++){if(i)cout<<\", \";cout<<res[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎒 Unbounded Knapsack · 完全背包",
        description: "Like 0/1 knapsack but items can be used unlimited times.\n类似 0/1 背包但物品可无限使用。",
        starterCode: "def unbounded_knapsack(items, capacity):\n    # items: [(weight, value)]\n    pass\n\nprint(unbounded_knapsack([(2,3),(3,4),(4,5)], 7))",
        hint: "dp[w] = max(dp[w], dp[w-weight]+value) for each item.\ndp[w] = max(dp[w], dp[w-weight]+value)。",
        solution: "def unbounded_knapsack(items, capacity):\n    dp = [0]*(capacity+1)\n    for w in range(1, capacity+1):\n        for wt, val in items:\n            if wt <= w:\n                dp[w] = max(dp[w], dp[w-wt]+val)\n    return dp[capacity]\n\nprint(unbounded_knapsack([(2,3),(3,4),(4,5)], 7))",
        expectedOutput: "10",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📝 Edit Distance · 编辑距离",
        description: "Find minimum edits (insert/delete/replace) to convert s1 to s2.\n找将 s1 转为 s2 的最少编辑次数。",
        starterCode: "def edit_distance(s1, s2):\n    pass\n\nprint(edit_distance('kitten', 'sitting'))\nprint(edit_distance('abc', 'abc'))",
        hint: "dp[i][j] = min of insert, delete, replace operations.\ndp[i][j] = 插入、删除、替换的最小值。",
        solution: "def edit_distance(s1, s2):\n    m, n = len(s1), len(s2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(m+1): dp[i][0] = i\n    for j in range(n+1): dp[0][j] = j\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]\n            else: dp[i][j] = 1+min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    return dp[m][n]\n\nprint(edit_distance('kitten', 'sitting'))\nprint(edit_distance('abc', 'abc'))",
        expectedOutput: "3\n0",
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

🎯 **What you'll learn:** How to count all paths from top-left to bottom-right in a grid — moving only right or down.
学习目标：如何计算网格中从左上到右下的所有路径数——只能向右或向下移动。

Imagine navigating city blocks 🏙️ — you're at the northwest corner and want to reach the southeast corner. You can only go east or south. How many different routes exist? Each cell's answer = routes from above + routes from the left!
类比：想象在城市街区导航 🏙️ — 你在西北角，要到达东南角。只能向东或向南走。有多少条不同的路线？每个格子的答案 = 上方路线数 + 左方路线数！

🔑 **Key things to notice:**
- First row and first column all have exactly 1 path (straight line)
- \`dp[i][j] = dp[i-1][j] + dp[i][j-1]\` — paths from above + from left
- This is related to Pascal's Triangle and combinations!
- The answer for m×n grid is C(m+n-2, m-1)
- m×n 网格的答案是 C(m+n-2, m-1)

👀 **Run the code and see** how the path counts grow as the grid gets bigger!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

int count_paths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 0));
    for (int i=0;i<m;i++) dp[i][0]=1;
    for (int j=0;j<n;j++) dp[0][j]=1;
    for (int i=1;i<m;i++)
        for (int j=1;j<n;j++)
            dp[i][j] = dp[i-1][j]+dp[i][j-1];
    for (int i=0;i<m;i++) {
        cout << "  ";
        for (int j=0;j<n;j++) cout << dp[i][j] << "\t";
        cout << endl;
    }
    return dp[m-1][n-1];
}

int main() {
    cout << "3x3 grid:" << endl;
    cout << "Paths: " << count_paths(3,3) << endl;
    cout << "\n3x7 grid:" << endl;
    cout << "Paths: " << count_paths(3,7) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Count paths in a 4×4 grid (top-left to bottom-right, only right/down).",
        promptZh: "计算 4×4 网格的路径数。",
        starterCode: "def count_paths(m, n):\\n    pass\\n\\nprint(count_paths(4, 4))\\nprint(count_paths(3, 3))",
        expectedOutput: "20\\n6",
        hint: "dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row/col = 1.",
        hintZh: "dp[i][j] = dp[i-1][j] + dp[i][j-1]。第一行/列 = 1。",
        solution: "def count_paths(m, n):\\n    dp = [[1]*n for _ in range(m)]\\n    for i in range(1, m):\\n        for j in range(1, n):\\n            dp[i][j] = dp[i-1][j] + dp[i][j-1]\\n    return dp[m-1][n-1]\\n\\nprint(count_paths(4, 4))\\nprint(count_paths(3, 3))",
      },
      exerciseCpp: {
        prompt: "Count paths in 4x4 grid.",
        promptZh: "计算 4×4 网格路径数。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint count_paths(int m, int n) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<count_paths(4,4)<<endl;\n    cout<<count_paths(3,3)<<endl;\n    return 0;\n}",
        expectedOutput: "20\n6",
        hint: "dp[i][j] = dp[i-1][j]+dp[i][j-1]. First row/col = 1.",
        hintZh: "dp[i][j]=dp[i-1][j]+dp[i][j-1]。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint count_paths(int m, int n) {\n    vector<vector<int>> dp(m,vector<int>(n,1));\n    for(int i=1;i<m;i++)for(int j=1;j<n;j++)dp[i][j]=dp[i-1][j]+dp[i][j-1];\n    return dp[m-1][n-1];\n}\n\nint main() {\n    cout<<count_paths(4,4)<<endl;\n    cout<<count_paths(3,3)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🚧",
      content: `## 🚧 Grid with Obstacles

🎯 **What you'll learn:** How to adapt grid path counting when some cells are blocked — a common interview variation.
学习目标：当某些格子被堵住时如何调整网格路径计数——常见面试变体。

Same city blocks, but now some intersections are under construction 🚧 — you can't pass through them! If a blocked cell is on your only path, you're forced to go around. Blocked cells get 0 paths; everything else uses the same formula.
类比：同样的城市街区，但有些路口在施工 🚧 — 你不能通过！如果堵住的格子在你唯一的路径上，你必须绕道。堵住的格子路径数为0；其他仍用相同公式。

🔑 **Key things to notice:**
- Obstacles get \`dp[i][j] = 0\` — no paths through blocked cells
- If start or end is blocked, answer is 0!
- A blocked cell in the first row/column cuts off everything after it
- Same recurrence otherwise: \`dp[i][j] = dp[i-1][j] + dp[i][j-1]\`
- 其他情况相同的递推：\`dp[i][j] = dp[i-1][j] + dp[i][j-1]\`

👀 **Run the code and see** how obstacles dramatically change the path count!`,
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
      codeCpp: `#include <iostream>
#include <vector>
using namespace std;

int count_paths_obstacles(vector<vector<int>>& grid) {
    int m=grid.size(), n=grid[0].size();
    vector<vector<int>> dp(m, vector<int>(n, 0));
    dp[0][0] = grid[0][0]==1 ? 0 : 1;
    for (int i=1;i<m;i++) dp[i][0] = grid[i][0]==1 ? 0 : dp[i-1][0];
    for (int j=1;j<n;j++) dp[0][j] = grid[0][j]==1 ? 0 : dp[0][j-1];
    for (int i=1;i<m;i++)
        for (int j=1;j<n;j++)
            dp[i][j] = grid[i][j]==1 ? 0 : dp[i-1][j]+dp[i][j-1];
    for (int i=0;i<m;i++){
        cout << "  ";
        for (int j=0;j<n;j++) cout << (grid[i][j]==1?"X":to_string(dp[i][j])) << "\t";
        cout << endl;
    }
    return dp[m-1][n-1];
}

int main() {
    vector<vector<int>> grid = {{0,0,0},{0,1,0},{0,0,0}};
    cout << "Paths: " << count_paths_obstacles(grid) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Count paths in a grid with obstacles (0=open, 1=blocked).",
        promptZh: "计算有障碍网格的路径数。",
        starterCode: "def paths_obstacles(grid):\\n    pass\\n\\nprint(paths_obstacles([[0,0,0],[0,1,0],[0,0,0]]))",
        expectedOutput: "2",
        hint: "Same as grid paths, but dp[i][j] = 0 if blocked.",
        hintZh: "和网格路径一样，但阻塞处 dp[i][j] = 0。",
        solution: "def paths_obstacles(grid):\\n    m, n = len(grid), len(grid[0])\\n    dp = [[0]*n for _ in range(m)]\\n    for i in range(m):\\n        if grid[i][0] == 1: break\\n        dp[i][0] = 1\\n    for j in range(n):\\n        if grid[0][j] == 1: break\\n        dp[0][j] = 1\\n    for i in range(1, m):\\n        for j in range(1, n):\\n            if grid[i][j] == 0:\\n                dp[i][j] = dp[i-1][j] + dp[i][j-1]\\n    return dp[m-1][n-1]\\n\\nprint(paths_obstacles([[0,0,0],[0,1,0],[0,0,0]]))",
      },
      exerciseCpp: {
        prompt: "Count paths with obstacles.",
        promptZh: "有障碍网格路径数。",
        starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint paths_obs(vector<vector<int>> grid) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    cout<<paths_obs({{0,0,0},{0,1,0},{0,0,0}})<<endl;\n    return 0;\n}",
        expectedOutput: "2",
        hint: "Same as paths, but blocked = 0.",
        hintZh: "阻塞处为0。",
        solution: "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint paths_obs(vector<vector<int>> grid) {\n    int m=grid.size(),n=grid[0].size();\n    vector<vector<int>> dp(m,vector<int>(n,0));\n    for(int i=0;i<m;i++){if(grid[i][0]==1)break;dp[i][0]=1;}\n    for(int j=0;j<n;j++){if(grid[0][j]==1)break;dp[0][j]=1;}\n    for(int i=1;i<m;i++)for(int j=1;j<n;j++)if(!grid[i][j])dp[i][j]=dp[i-1][j]+dp[i][j-1];\n    return dp[m-1][n-1];\n}\n\nint main() {\n    cout<<paths_obs({{0,0,0},{0,1,0},{0,0,0}})<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "💰",
      content: `## 💰 Minimum Path Sum

🎯 **What you'll learn:** How to find the path with minimum total cost through a grid — combining path counting with optimization.
学习目标：如何找到网格中总代价最小的路径——结合路径计数和优化。

You're delivering pizza through a city 🍕 — each block has a toll fee. You want to reach the destination spending the LEAST money. At each intersection, you pick the cheaper route (from above or from the left) and add the current toll.
类比：你在城市里送披萨 🍕 — 每个街区有过路费。你想花最少的钱到达目的地。在每个路口，选择更便宜的路线（从上方或左方来）再加上当前的过路费。

🔑 **Key things to notice:**
- \`dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])\`
- First row/column: only one direction possible, so cumulative sum
- We can trace back from bottom-right to find the actual path
- This pattern applies to many "optimal path" problems
- 这个模式适用于许多"最优路径"问题

👀 **Run the code and trace** the minimum cost path through the grid!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int min_path_sum(vector<vector<int>>& grid) {
    int m=grid.size(), n=grid[0].size();
    vector<vector<int>> dp(m, vector<int>(n, 0));
    dp[0][0]=grid[0][0];
    for (int i=1;i<m;i++) dp[i][0]=dp[i-1][0]+grid[i][0];
    for (int j=1;j<n;j++) dp[0][j]=dp[0][j-1]+grid[0][j];
    for (int i=1;i<m;i++)
        for (int j=1;j<n;j++)
            dp[i][j]=min(dp[i-1][j],dp[i][j-1])+grid[i][j];
    cout << "Cost grid:" << endl;
    for (int i=0;i<m;i++){cout<<"  ";for(int j=0;j<n;j++)cout<<grid[i][j]<<"\t";cout<<endl;}
    cout << "\nDP table:" << endl;
    for (int i=0;i<m;i++){cout<<"  ";for(int j=0;j<n;j++)cout<<dp[i][j]<<"\t";cout<<endl;}
    cout << "\nMinimum path sum: " << dp[m-1][n-1] << endl;
    return dp[m-1][n-1];
}

int main() {
    vector<vector<int>> grid = {{1,3,1},{1,5,1},{4,2,1}};
    min_path_sum(grid);
    return 0;
}`,
      exercise: {
        prompt: "Find minimum path sum AND the actual path as a list of cell values.",
        promptZh: "找到最小路径和以及实际路径。",
        starterCode: "def min_path_route(grid):\\n    # Return (min_sum, path_list)\\n    pass\\n\\ns, p = min_path_route([[1,3,1],[1,5,1],[4,2,1]])\\nprint(s)\\nprint(p)",
        expectedOutput: "7\\n[1, 3, 1, 1, 1]",
        hint: "Compute dp, then backtrack from bottom-right following minimum.",
        hintZh: "计算 dp，然后从右下角沿最小值回溯。",
        solution: "def min_path_route(grid):\\n    m, n = len(grid), len(grid[0])\\n    dp = [[0]*n for _ in range(m)]\\n    dp[0][0] = grid[0][0]\\n    for i in range(1,m): dp[i][0] = dp[i-1][0]+grid[i][0]\\n    for j in range(1,n): dp[0][j] = dp[0][j-1]+grid[0][j]\\n    for i in range(1,m):\\n        for j in range(1,n):\\n            dp[i][j] = min(dp[i-1][j], dp[i][j-1])+grid[i][j]\\n    path = []\\n    i, j = m-1, n-1\\n    while i > 0 or j > 0:\\n        path.append(grid[i][j])\\n        if i == 0: j -= 1\\n        elif j == 0: i -= 1\\n        elif dp[i-1][j] < dp[i][j-1]: i -= 1\\n        else: j -= 1\\n    path.append(grid[0][0])\\n    return dp[m-1][n-1], path[::-1]\\n\\ns, p = min_path_route([[1,3,1],[1,5,1],[4,2,1]])\\nprint(s)\\nprint(p)",
      },
      exerciseCpp: {
        prompt: "Find minimum path sum AND path.",
        promptZh: "找最小路径和及路径。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<vector<int>> grid={{1,3,1},{1,5,1},{4,2,1}};\n    // Find min path sum and path\n    return 0;\n}",
        expectedOutput: "7\n[1, 3, 1, 1, 1]",
        hint: "Compute dp, backtrack from bottom-right.",
        hintZh: "计算dp，从右下角回溯。",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<vector<int>> g={{1,3,1},{1,5,1},{4,2,1}};\n    int m=3,n=3;\n    vector<vector<int>> dp(m,vector<int>(n));\n    dp[0][0]=g[0][0];\n    for(int i=1;i<m;i++)dp[i][0]=dp[i-1][0]+g[i][0];\n    for(int j=1;j<n;j++)dp[0][j]=dp[0][j-1]+g[0][j];\n    for(int i=1;i<m;i++)for(int j=1;j<n;j++)dp[i][j]=min(dp[i-1][j],dp[i][j-1])+g[i][j];\n    vector<int> path;int i=m-1,j=n-1;\n    while(i>0||j>0){path.push_back(g[i][j]);if(i==0)j--;else if(j==0)i--;else if(dp[i-1][j]<dp[i][j-1])i--;else j--;}\n    path.push_back(g[0][0]);reverse(path.begin(),path.end());\n    cout<<dp[m-1][n-1]<<endl;\n    cout<<'[';for(int k=0;k<(int)path.size();k++){if(k)cout<<\", \";cout<<path[k];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
5. ✅ Extract the answer

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "💰 Maximum Gold · 最大黄金",
        description: "Find max gold collectible in a grid moving only right or down.\n在网格中只能向右或向下移动，收集最多黄金。",
        starterCode: "def max_gold(grid):\n    pass\n\nprint(max_gold([[1,3,1],[1,5,1],[4,2,1]]))",
        hint: "Same as minimum path sum, but take max.\n和最小路径和一样，但取最大值。",
        solution: "def max_gold(grid):\n    m, n = len(grid), len(grid[0])\n    dp = [[0]*n for _ in range(m)]\n    dp[0][0] = grid[0][0]\n    for i in range(1,m): dp[i][0] = dp[i-1][0]+grid[i][0]\n    for j in range(1,n): dp[0][j] = dp[0][j-1]+grid[0][j]\n    for i in range(1,m):\n        for j in range(1,n):\n            dp[i][j] = max(dp[i-1][j],dp[i][j-1])+grid[i][j]\n    return dp[m-1][n-1]\n\nprint(max_gold([[1,3,1],[1,5,1],[4,2,1]]))",
        expectedOutput: "12",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔲 Maximal Square · 最大正方形",
        description: "Find the area of the largest square of 1s in a binary grid.\n在二进制网格中找最大全 1 正方形的面积。",
        starterCode: "def max_square(grid):\n    pass\n\nprint(max_square([[1,0,1,0],[1,0,1,1],[1,1,1,1],[1,0,0,1]]))",
        hint: "dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 if grid[i][j]==1.\n如果 grid[i][j]==1，dp[i][j] = min(三个邻居) + 1。",
        solution: "def max_square(grid):\n    m, n = len(grid), len(grid[0])\n    dp = [[0]*n for _ in range(m)]\n    max_side = 0\n    for i in range(m):\n        for j in range(n):\n            if grid[i][j] == 1:\n                if i == 0 or j == 0: dp[i][j] = 1\n                else: dp[i][j] = min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1\n                max_side = max(max_side, dp[i][j])\n    return max_side * max_side\n\nprint(max_square([[1,0,1,0],[1,0,1,1],[1,1,1,1],[1,0,0,1]]))",
        expectedOutput: "4",
      },
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

🎯 **What you'll learn:** How BFS explores a graph level by level using a queue — perfect for finding shortest paths in unweighted graphs.
学习目标：BFS 如何用队列逐层探索图——在无权图中找最短路径的完美选择。

Imagine dropping a stone in a pond 🌊 — ripples spread outward in circles, reaching nearby points first before distant ones. BFS works the same way: visit all neighbors first, then their neighbors, then theirs...
类比：想象向池塘扔石头 🌊 — 波纹向外扩散成圆圈，先到达近处再到远处。BFS 同理：先访问所有邻居，再访问邻居的邻居，依此类推...

🔑 **Key things to notice:**
- Uses a QUEUE (FIFO) — first in, first out
- Visited set prevents revisiting nodes (avoiding infinite loops)
- Explores nodes in order of distance from the start
- Guarantees shortest path in unweighted graphs!
- 保证无权图中的最短路径！

👀 **Run the code and observe** the level-by-level exploration order!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <string>
using namespace std;

void bfs(unordered_map<string,vector<string>>& graph, const string& start) {
    unordered_set<string> visited;
    queue<string> q;
    q.push(start); visited.insert(start);
    int level = 0;
    while (!q.empty()) {
        int sz = q.size();
        cout << "Level " << level << ": ";
        for (int i=0;i<sz;i++) {
            string node = q.front(); q.pop();
            cout << node << " ";
            for (auto& nbr : graph[node])
                if (!visited.count(nbr)) { visited.insert(nbr); q.push(nbr); }
        }
        cout << endl;
        level++;
    }
}

int main() {
    unordered_map<string,vector<string>> g = {
        {"A",{"B","C"}},{"B",{"A","D","E"}},{"C",{"A","F"}},
        {"D",{"B"}},{"E",{"B","F"}},{"F",{"C","E"}}
    };
    cout << "BFS from A:" << endl;
    bfs(g, "A");
    return 0;
}`,
      exercise: {
        prompt: "Implement BFS returning visit order from node 0.",
        promptZh: "实现 BFS，返回从节点 0 开始的访问顺序。",
        starterCode: "from collections import deque\\ndef bfs_order(graph, start):\\n    pass\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(bfs_order(g, 0))",
        expectedOutput: "[0, 1, 2, 3, 4]",
        hint: "Queue + visited set. Dequeue, add to result, enqueue neighbors.",
        hintZh: "队列 + 已访问集合。出队，加入结果，邻居入队。",
        solution: "from collections import deque\\ndef bfs_order(graph, start):\\n    visited = set([start])\\n    queue = deque([start])\\n    order = []\\n    while queue:\\n        node = queue.popleft()\\n        order.append(node)\\n        for nbr in graph.get(node, []):\\n            if nbr not in visited:\\n                visited.add(nbr)\\n                queue.append(nbr)\\n    return order\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(bfs_order(g, 0))",
      },
      exerciseCpp: {
        prompt: "Implement BFS returning visit order from node 0.",
        promptZh: "实现BFS返回访问顺序。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> bfs_order(vector<vector<int>>& g, int start) {\n    // Your code here\n    return {};\n}\n\nint main() {\n    vector<vector<int>> g={{1,2},{3},{3,4},{},{}};\n    auto r=bfs_order(g,0);\n    cout<<'[';for(int i=0;i<(int)r.size();i++){if(i)cout<<\", \";cout<<r[i];}cout<<']'<<endl;\n    return 0;\n}",
        expectedOutput: "[0, 1, 2, 3, 4]",
        hint: "Queue + visited set.",
        hintZh: "队列+已访问集合。",
        solution: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> bfs_order(vector<vector<int>>& g, int start) {\n    unordered_set<int> vis={start};queue<int> q;q.push(start);\n    vector<int> order;\n    while(!q.empty()){int n=q.front();q.pop();order.push_back(n);for(int nb:g[n])if(!vis.count(nb)){vis.insert(nb);q.push(nb);}}\n    return order;\n}\n\nint main() {\n    vector<vector<int>> g={{1,2},{3},{3,4},{},{}};\n    auto r=bfs_order(g,0);\n    cout<<'[';for(int i=0;i<(int)r.size();i++){if(i)cout<<\", \";cout<<r[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🏔️",
      content: `## 🏔️ DFS — Depth-First Search

🎯 **What you'll learn:** How DFS explores a graph by going as deep as possible before backtracking — using recursion or a stack.
学习目标：DFS 如何通过尽可能深入然后回溯来探索图——使用递归或栈。

Imagine exploring a cave system 🏔️ — you pick a tunnel and go as DEEP as you can until you hit a dead end. Then you backtrack to the last fork and try another tunnel. You eventually explore everything!
类比：想象探索洞穴系统 🏔️ — 你选一条隧道尽可能深入，直到走到死胡同。然后回退到上一个岔路口试另一条。最终你会探索完所有地方！

🔑 **Key things to notice:**
- Recursive DFS uses the CALL STACK implicitly
- Iterative DFS uses an explicit STACK (LIFO)
- DFS doesn't guarantee shortest path (unlike BFS)
- Great for: cycle detection, topological sort, connected components
- 适用于：环检测、拓扑排序、连通分量

👀 **Run the code and compare** DFS traversal order vs BFS — notice the difference!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <stack>
#include <unordered_map>
#include <unordered_set>
#include <string>
using namespace std;

void dfs_recursive(unordered_map<string,vector<string>>& g, const string& node, unordered_set<string>& visited) {
    visited.insert(node);
    cout << "  Visiting: " << node << endl;
    for (auto& nbr : g[node])
        if (!visited.count(nbr)) dfs_recursive(g, nbr, visited);
}

void dfs_iterative(unordered_map<string,vector<string>>& g, const string& start) {
    unordered_set<string> visited;
    stack<string> stk;
    stk.push(start);
    cout << "\nIterative DFS:" << endl;
    while (!stk.empty()) {
        string node = stk.top(); stk.pop();
        if (visited.count(node)) continue;
        visited.insert(node);
        cout << "  Visiting: " << node << endl;
        auto& neighbors = g[node];
        for (int i=neighbors.size()-1;i>=0;i--)
            if (!visited.count(neighbors[i])) stk.push(neighbors[i]);
    }
}

int main() {
    unordered_map<string,vector<string>> g = {
        {"A",{"B","C"}},{"B",{"A","D","E"}},{"C",{"A","F"}},
        {"D",{"B"}},{"E",{"B","F"}},{"F",{"C","E"}}
    };
    cout << "Recursive DFS from A:" << endl;
    unordered_set<string> visited;
    dfs_recursive(g, "A", visited);
    dfs_iterative(g, "A");
    return 0;
}`,
      exercise: {
        prompt: "Implement iterative DFS using a stack. Return visit order.",
        promptZh: "用栈实现迭代 DFS。返回访问顺序。",
        starterCode: "def dfs_iter(graph, start):\\n    pass\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(dfs_iter(g, 0))",
        expectedOutput: "[0, 2, 4, 3, 1]",
        hint: "Stack. Pop, add if not visited, push neighbors (reversed).",
        hintZh: "栈。弹出，如果未访问则添加，压入邻居（反转）。",
        solution: "def dfs_iter(graph, start):\\n    visited = set()\\n    stack = [start]\\n    order = []\\n    while stack:\\n        node = stack.pop()\\n        if node not in visited:\\n            visited.add(node)\\n            order.append(node)\\n            for nbr in reversed(graph.get(node, [])):\\n                if nbr not in visited:\\n                    stack.append(nbr)\\n    return order\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(dfs_iter(g, 0))",
      },
      exerciseCpp: {
        prompt: "Implement iterative DFS using a stack.",
        promptZh: "用栈实现迭代DFS。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <stack>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> dfs_iter(vector<vector<int>>& g, int start) {\n    // Your code here\n    return {};\n}\n\nint main() {\n    vector<vector<int>> g={{1,2},{3},{3,4},{},{}};\n    auto r=dfs_iter(g,0);\n    cout<<'[';for(int i=0;i<(int)r.size();i++){if(i)cout<<\", \";cout<<r[i];}cout<<']'<<endl;\n    return 0;\n}",
        expectedOutput: "[0, 2, 4, 3, 1]",
        hint: "Stack. Pop, push reversed neighbors.",
        hintZh: "栈，弹出，反向压入邻居。",
        solution: "#include <iostream>\n#include <vector>\n#include <stack>\n#include <unordered_set>\nusing namespace std;\n\nvector<int> dfs_iter(vector<vector<int>>& g, int start) {\n    unordered_set<int> vis;stack<int> stk;stk.push(start);\n    vector<int> order;\n    while(!stk.empty()){int n=stk.top();stk.pop();if(vis.count(n))continue;vis.insert(n);order.push_back(n);for(int i=g[n].size()-1;i>=0;i--)if(!vis.count(g[n][i]))stk.push(g[n][i]);}\n    return order;\n}\n\nint main() {\n    vector<vector<int>> g={{1,2},{3},{3,4},{},{}};\n    auto r=dfs_iter(g,0);\n    cout<<'[';for(int i=0;i<(int)r.size();i++){if(i)cout<<\", \";cout<<r[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🎯 **What you'll learn:** How BFS finds the shortest path AND reconstructs it by tracking parent nodes — essential for navigation.
学习目标：BFS 如何通过跟踪父节点来找到最短路径并重建路径——对导航至关重要。

Think of a GPS finding the route with fewest turns 🗺️ — BFS explores all 1-hop destinations first, then 2-hops, then 3-hops. The first time it reaches the target is guaranteed to be via the shortest route!
类比：想象 GPS 找最少转弯的路线 🗺️ — BFS 先探索所有1跳目的地，然后2跳，然后3跳。第一次到达目标保证是最短路线！

🔑 **Key things to notice:**
- Track \`parent[node]\` to remember HOW we reached each node
- Distance = number of edges (hops) from start to each node
- Reconstruct path by following parent pointers backward
- BFS guarantees this is the shortest path in unweighted graphs
- BFS 保证这是无权图中的最短路径

👀 **Run the code and trace** the parent chain to see how the path is reconstructed!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <string>
using namespace std;

vector<string> shortest_path(unordered_map<string,vector<string>>& g, const string& start, const string& end) {
    queue<pair<string,vector<string>>> q;
    q.push({start, {start}});
    unordered_set<string> visited = {start};
    while (!q.empty()) {
        auto [node, path] = q.front(); q.pop();
        if (node == end) return path;
        for (auto& nbr : g[node])
            if (!visited.count(nbr)) {
                visited.insert(nbr);
                auto np = path; np.push_back(nbr);
                q.push({nbr, np});
            }
    }
    return {};
}

int main() {
    unordered_map<string,vector<string>> g = {
        {"A",{"B","C"}},{"B",{"A","D","E"}},{"C",{"A","F"}},
        {"D",{"B"}},{"E",{"B","F"}},{"F",{"C","E"}}
    };
    auto p = shortest_path(g, "A", "F");
    cout << "A → F: ";
    for (int i=0;i<(int)p.size();i++){if(i)cout<<" → ";cout<<p[i];}
    cout << " (length " << p.size()-1 << ")" << endl;
    p = shortest_path(g, "D", "F");
    cout << "D → F: ";
    for (int i=0;i<(int)p.size();i++){if(i)cout<<" → ";cout<<p[i];}
    cout << " (length " << p.size()-1 << ")" << endl;
    return 0;
}`,
      exercise: {
        prompt: "BFS to find shortest distance from node 0 to ALL nodes.",
        promptZh: "用 BFS 找到从节点 0 到所有节点的最短距离。",
        starterCode: "from collections import deque\\ndef bfs_distances(graph, start):\\n    pass\\n\\ng = {0:[1,2], 1:[0,3], 2:[0,3,4], 3:[1,2], 4:[2]}\\nprint(bfs_distances(g, 0))",
        expectedOutput: "{0: 0, 1: 1, 2: 1, 3: 2, 4: 2}",
        hint: "Track distance when first visiting each node.",
        hintZh: "首次访问时记录距离。",
        solution: "from collections import deque\\ndef bfs_distances(graph, start):\\n    dist = {start: 0}\\n    queue = deque([start])\\n    while queue:\\n        node = queue.popleft()\\n        for nbr in graph.get(node, []):\\n            if nbr not in dist:\\n                dist[nbr] = dist[node]+1\\n                queue.append(nbr)\\n    return dist\\n\\ng = {0:[1,2], 1:[0,3], 2:[0,3,4], 3:[1,2], 4:[2]}\\nprint(bfs_distances(g, 0))",
      },
      exerciseCpp: {
        prompt: "BFS shortest distance from 0 to ALL nodes.",
        promptZh: "BFS最短距离。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <map>\nusing namespace std;\n\nint main() {\n    vector<vector<int>> g={{1,2},{0,3},{0,3,4},{1,2},{2}};\n    // BFS distances from 0\n    return 0;\n}",
        expectedOutput: "{0: 0, 1: 1, 2: 1, 3: 2, 4: 2}",
        hint: "Track distance when first visiting.",
        hintZh: "首次访问时记录距离。",
        solution: "#include <iostream>\n#include <vector>\n#include <queue>\n#include <map>\nusing namespace std;\n\nint main() {\n    vector<vector<int>> g={{1,2},{0,3},{0,3,4},{1,2},{2}};\n    map<int,int> dist;dist[0]=0;queue<int> q;q.push(0);\n    while(!q.empty()){int n=q.front();q.pop();for(int nb:g[n])if(!dist.count(nb)){dist[nb]=dist[n]+1;q.push(nb);}}\n    cout<<'{';bool f=true;for(auto&[k,v]:dist){if(!f)cout<<\", \";f=false;cout<<k<<\": \"<<v;}cout<<'}'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
- Need topological order? → **DFS**

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌊 Flood Fill · 洪水填充",
        description: "Implement flood fill (like paint bucket tool). Change color at (r,c) and all connected same-color cells.\n实现洪水填充。",
        starterCode: "def flood_fill(grid, r, c, new_color):\n    pass\n\ng = [[1,1,1],[1,1,0],[1,0,1]]\nflood_fill(g, 1, 1, 2)\nfor row in g: print(row)",
        hint: "DFS/BFS from (r,c). Change all connected cells with original color.\n从 (r,c) DFS/BFS。改变所有连通的原色单元格。",
        solution: "def flood_fill(grid, r, c, new_color):\n    orig = grid[r][c]\n    if orig == new_color: return\n    rows, cols = len(grid), len(grid[0])\n    def dfs(r, c):\n        if r<0 or r>=rows or c<0 or c>=cols: return\n        if grid[r][c] != orig: return\n        grid[r][c] = new_color\n        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)\n    dfs(r, c)\n\ng = [[1,1,1],[1,1,0],[1,0,1]]\nflood_fill(g, 1, 1, 2)\nfor row in g: print(row)",
        expectedOutput: "[2, 2, 2]\n[2, 2, 0]\n[2, 0, 1]",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔗 Graph Has Path · 图是否有路径",
        description: "Check if path exists between two nodes using BFS or DFS.\n检查两个节点之间是否有路径。",
        starterCode: "def has_path(graph, start, end):\n    pass\n\ng = {0:[1,2], 1:[3], 2:[], 3:[4], 4:[]}\nprint(has_path(g, 0, 4))\nprint(has_path(g, 0, 5))",
        hint: "BFS/DFS from start. If you reach end, return True.\n从 start BFS/DFS。到达 end 返回 True。",
        solution: "def has_path(graph, start, end):\n    visited = set()\n    stack = [start]\n    while stack:\n        node = stack.pop()\n        if node == end: return True\n        if node in visited: continue\n        visited.add(node)\n        for nbr in graph.get(node, []):\n            stack.append(nbr)\n    return False\n\ng = {0:[1,2], 1:[3], 2:[], 3:[4], 4:[]}\nprint(has_path(g, 0, 4))\nprint(has_path(g, 0, 5))",
        expectedOutput: "True\nFalse",
      },
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

🎯 **What you'll learn:** How Dijkstra's finds the shortest path in weighted graphs — using a priority queue to always process the cheapest node next.
学习目标：Dijkstra 如何在加权图中找最短路径——用优先队列总是处理下一个最便宜的节点。

Imagine you're a delivery driver 🚗 with a map showing travel times between cities. You always drive to the CLOSEST unvisited city first, then update your estimates for its neighbors. Greedy locally, but optimal globally!
类比：想象你是送货司机 🚗，地图显示城市间的行车时间。你总是先开到最近的未访问城市，然后更新其邻居的估计。局部贪心，全局最优！

🔑 **Key things to notice:**
- Priority queue (min-heap) always gives us the closest unprocessed node
- "Relaxation": if going through node u makes v cheaper, update v's distance
- Once a node is processed, its distance is FINAL (greedy correctness)
- Doesn't work with negative edge weights — use Bellman-Ford instead
- 不适用于负权边——用 Bellman-Ford 代替

👀 **Run the code and watch** how distances get "relaxed" (improved) as nodes are processed!`,
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
      codeCpp: `#include <iostream>
#include <queue>
#include <unordered_map>
#include <string>
#include <climits>
using namespace std;

void dijkstra(unordered_map<string,vector<pair<string,int>>>& g, const string& start) {
    unordered_map<string,int> dist;
    for (auto& [n,_] : g) dist[n] = INT_MAX;
    dist[start] = 0;
    priority_queue<pair<int,string>, vector<pair<int,string>>, greater<>> pq;
    pq.push({0, start});
    while (!pq.empty()) {
        auto [d, node] = pq.top(); pq.pop();
        if (d > dist[node]) continue;
        cout << "Processing " << node << " (dist: " << d << ")" << endl;
        for (auto& [nbr, w] : g[node]) {
            int nd = d + w;
            if (nd < dist[nbr]) { dist[nbr] = nd; pq.push({nd, nbr}); }
        }
    }
    cout << "\nShortest distances from " << start << ":" << endl;
    for (auto& [n, d] : dist) cout << "  " << start << " → " << n << ": " << d << endl;
}

int main() {
    unordered_map<string,vector<pair<string,int>>> g = {
        {"A",{{"B",4},{"C",2}}},{"B",{{"D",3},{"C",1}}},{"C",{{"B",1},{"D",5}}},{"D",{}}
    };
    dijkstra(g, "A");
    return 0;
}`,
      exercise: {
        prompt: "Find shortest distances from 'A' to all nodes using Dijkstra.",
        promptZh: "用 Dijkstra 找从 'A' 到所有节点的最短距离。",
        starterCode: "import heapq\\ndef dijkstra(graph, start):\\n    pass\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nprint(dijkstra(g, 'A'))",
        expectedOutput: "{'A': 0, 'B': 1, 'C': 3, 'D': 4}",
        hint: "Min-heap. Pop smallest, update neighbors if shorter path found.",
        hintZh: "最小堆。弹出最小距离，更新邻居。",
        solution: "import heapq\\ndef dijkstra(graph, start):\\n    dist = {start: 0}\\n    heap = [(0, start)]\\n    while heap:\\n        d, node = heapq.heappop(heap)\\n        if d > dist.get(node, float('inf')): continue\\n        for nbr, w in graph.get(node, []):\\n            nd = d + w\\n            if nd < dist.get(nbr, float('inf')):\\n                dist[nbr] = nd\\n                heapq.heappush(heap, (nd, nbr))\\n    return dist\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nprint(dijkstra(g, 'A'))",
      },
      exerciseCpp: {
        prompt: "Find shortest distances from 'A' to all nodes.",
        promptZh: "Dijkstra最短距离。",
        starterCode: "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <string>\n#include <climits>\nusing namespace std;\n\nint main() {\n    // A->B(1),C(4); B->C(2),D(5); C->D(1)\n    return 0;\n}",
        expectedOutput: "{'A': 0, 'B': 1, 'C': 3, 'D': 4}",
        hint: "Min-heap. Pop smallest, update neighbors.",
        hintZh: "最小堆。",
        solution: "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <string>\n#include <climits>\nusing namespace std;\n\nint main() {\n    unordered_map<string,vector<pair<string,int>>> g={{\"A\",{{\"B\",1},{\"C\",4}}},{\"B\",{{\"C\",2},{\"D\",5}}},{\"C\",{{\"D\",1}}},{\"D\",{}}};\n    unordered_map<string,int> dist;for(auto&[n,_]:g)dist[n]=INT_MAX;dist[\"A\"]=0;\n    priority_queue<pair<int,string>,vector<pair<int,string>>,greater<>> pq;pq.push({0,\"A\"});\n    while(!pq.empty()){auto[d,n]=pq.top();pq.pop();if(d>dist[n])continue;for(auto&[nb,w]:g[n]){int nd=d+w;if(nd<dist[nb]){dist[nb]=nd;pq.push({nd,nb});}}}\n    cout<<\"{'A': \"<<dist[\"A\"]<<\", 'B': \"<<dist[\"B\"]<<\", 'C': \"<<dist[\"C\"]<<\", 'D': \"<<dist[\"D\"]<<\"}\"<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🎯 **What you'll learn:** How Dijkstra's algorithm works on a realistic city road network — seeing theory applied to practice.
学习目标：Dijkstra 算法如何在真实城市道路网络上工作——理论应用于实践。

You're a taxi dispatcher 🚕 — a customer wants to go from the Airport to Downtown. The city has many routes with different travel times. Dijkstra helps you find the FASTEST route, not just any route!
类比：你是出租车调度员 🚕 — 乘客要从机场到市中心。城市有许多不同行驶时间的路线。Dijkstra 帮你找到最快的路线，而不是任意路线！

🔑 **Key things to notice:**
- Weighted edges represent realistic travel times between locations
- The algorithm explores nearby locations before distant ones
- The final shortest-path tree shows optimal routes to ALL destinations
- Path reconstruction shows the actual route, not just the cost
- 路径重建显示实际路线，而不只是代价

👀 **Run the code and explore** the city map — find the fastest route between different locations!`,
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
      codeCpp: `#include <iostream>
#include <queue>
#include <unordered_map>
#include <string>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

pair<int,vector<string>> dijkstra_city(unordered_map<string,vector<pair<string,int>>>& roads, const string& start, const string& end) {
    unordered_map<string,int> dist;
    unordered_map<string,string> prev;
    for (auto& [c,_] : roads) dist[c] = INT_MAX;
    dist[start] = 0;
    priority_queue<pair<int,string>,vector<pair<int,string>>,greater<>> pq;
    pq.push({0, start});
    while (!pq.empty()) {
        auto [d, city] = pq.top(); pq.pop();
        if (city == end) break;
        if (d > dist[city]) continue;
        for (auto& [nbr, w] : roads[city]) {
            int nd = d+w;
            if (nd < dist[nbr]) { dist[nbr]=nd; prev[nbr]=city; pq.push({nd,nbr}); }
        }
    }
    vector<string> path;
    for (string c=end; !c.empty(); c=prev.count(c)?prev[c]:"") path.push_back(c);
    reverse(path.begin(), path.end());
    return {dist[end], path};
}

int main() {
    unordered_map<string,vector<pair<string,int>>> roads = {
        {"Home",{{"Cafe",3},{"Park",5},{"School",10}}},
        {"Cafe",{{"Home",3},{"School",4},{"Library",6}}},
        {"Park",{{"Home",5},{"Library",2}}},
        {"School",{{"Home",10},{"Cafe",4},{"Library",1}}},
        {"Library",{{"Cafe",6},{"Park",2},{"School",1}}}
    };
    auto [d, p] = dijkstra_city(roads, "Home", "Library");
    cout << "Distance: " << d << "\nPath: ";
    for (int i=0;i<(int)p.size();i++){if(i)cout<<" → ";cout<<p[i];}
    cout << endl;
    return 0;
}`,
      exercise: {
        prompt: "Modify Dijkstra to return the actual shortest PATH to a target.",
        promptZh: "修改 Dijkstra 返回到目标的实际最短路径。",
        starterCode: "import heapq\\ndef dijkstra_path(graph, start, end):\\n    # Return (distance, path_list)\\n    pass\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nd, p = dijkstra_path(g, 'A', 'D')\\nprint(d)\\nprint(p)",
        expectedOutput: "4\\n['A', 'B', 'C', 'D']",
        hint: "Track parent pointers. Backtrack from end to start.",
        hintZh: "跟踪父指针。从终点回溯到起点。",
        solution: "import heapq\\ndef dijkstra_path(graph, start, end):\\n    dist = {start: 0}\\n    parent = {start: None}\\n    heap = [(0, start)]\\n    while heap:\\n        d, node = heapq.heappop(heap)\\n        if node == end: break\\n        if d > dist.get(node, float('inf')): continue\\n        for nbr, w in graph.get(node, []):\\n            nd = d + w\\n            if nd < dist.get(nbr, float('inf')):\\n                dist[nbr] = nd\\n                parent[nbr] = node\\n                heapq.heappush(heap, (nd, nbr))\\n    path = []\\n    n = end\\n    while n is not None:\\n        path.append(n)\\n        n = parent.get(n)\\n    return dist[end], path[::-1]\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nd, p = dijkstra_path(g, 'A', 'D')\\nprint(d)\\nprint(p)",
      },
      exerciseCpp: {
        prompt: "Modify Dijkstra to return actual shortest PATH.",
        promptZh: "返回路径。",
        starterCode: "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <string>\n#include <vector>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\nint main() {\n    // Shortest path A to D\n    return 0;\n}",
        expectedOutput: "4\n['A', 'B', 'C', 'D']",
        hint: "Track parent pointers. Backtrack.",
        hintZh: "跟踪父指针。",
        solution: "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <string>\n#include <vector>\n#include <algorithm>\n#include <climits>\nusing namespace std;\n\nint main() {\n    unordered_map<string,vector<pair<string,int>>> g={{\"A\",{{\"B\",1},{\"C\",4}}},{\"B\",{{\"C\",2},{\"D\",5}}},{\"C\",{{\"D\",1}}},{\"D\",{}}};\n    unordered_map<string,int> dist;unordered_map<string,string> prev;\n    for(auto&[n,_]:g)dist[n]=INT_MAX;dist[\"A\"]=0;\n    priority_queue<pair<int,string>,vector<pair<int,string>>,greater<>> pq;pq.push({0,\"A\"});\n    while(!pq.empty()){auto[d,n]=pq.top();pq.pop();if(n==\"D\")break;if(d>dist[n])continue;for(auto&[nb,w]:g[n]){int nd=d+w;if(nd<dist[nb]){dist[nb]=nd;prev[nb]=n;pq.push({nd,nb});}}}\n    vector<string> path;string c=\"D\";while(!c.empty()){path.push_back(c);c=prev.count(c)?prev[c]:\"\";}\n    reverse(path.begin(),path.end());\n    cout<<dist[\"D\"]<<endl;\n    cout<<\"['\";for(int i=0;i<(int)path.size();i++){if(i)cout<<\"', '\";cout<<path[i];}cout<<\"']\"<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🔑 **Dijkstra = BFS with a priority queue, always expanding the closest node first!**

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🗺️ Network Delay · 网络延迟",
        description: "Find time for signal to reach ALL nodes from source. Return max distance or -1 if impossible.\n找信号从源到达所有节点的时间。",
        starterCode: "import heapq\ndef network_delay(n, edges, source):\n    # edges: [(from, to, time)]\n    pass\n\nprint(network_delay(4, [(1,2,1),(2,3,2),(1,3,4),(3,4,1)], 1))",
        hint: "Dijkstra from source. Answer is max of all distances.\n从源 Dijkstra。答案是所有距离的最大值。",
        solution: "import heapq\ndef network_delay(n, edges, source):\n    adj = {}\n    for u, v, w in edges:\n        adj.setdefault(u, []).append((v, w))\n    dist = {source: 0}\n    heap = [(0, source)]\n    while heap:\n        d, node = heapq.heappop(heap)\n        if d > dist.get(node, float('inf')): continue\n        for nbr, w in adj.get(node, []):\n            nd = d + w\n            if nd < dist.get(nbr, float('inf')):\n                dist[nbr] = nd\n                heapq.heappush(heap, (nd, nbr))\n    if len(dist) < n: return -1\n    return max(dist.values())\n\nprint(network_delay(4, [(1,2,1),(2,3,2),(1,3,4),(3,4,1)], 1))",
        expectedOutput: "4",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🏙️ Cheapest Flight · 最便宜航班",
        description: "Find cheapest price from src to dst with at most k stops.\n找从 src 到 dst 最多 k 次中转的最便宜价格。",
        starterCode: "def cheapest_flight(n, flights, src, dst, k):\n    # flights: [(from, to, price)]\n    pass\n\nprint(cheapest_flight(3, [(0,1,100),(1,2,100),(0,2,500)], 0, 2, 1))\nprint(cheapest_flight(3, [(0,1,100),(1,2,100),(0,2,500)], 0, 2, 0))",
        hint: "BFS with level = stops. Track minimum cost per node per level.\n按层 BFS = 中转次数。跟踪每节点每层最低费用。",
        solution: "def cheapest_flight(n, flights, src, dst, k):\n    prices = [float('inf')] * n\n    prices[src] = 0\n    for _ in range(k + 1):\n        tmp = prices[:]\n        for u, v, w in flights:\n            if prices[u] + w < tmp[v]:\n                tmp[v] = prices[u] + w\n        prices = tmp\n    return prices[dst] if prices[dst] != float('inf') else -1\n\nprint(cheapest_flight(3, [(0,1,100),(1,2,100),(0,2,500)], 0, 2, 1))\nprint(cheapest_flight(3, [(0,1,100),(1,2,100),(0,2,500)], 0, 2, 0))",
        expectedOutput: "200\n500",
      },
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

🔑 **Only works on DAGs** (Directed Acyclic Graphs — no cycles!)

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Kahn's Algorithm (BFS-based)

🎯 **What you'll learn:** How Kahn's algorithm finds a topological ordering using BFS — starting from nodes with no prerequisites.
学习目标：Kahn 算法如何用 BFS 找拓扑排序——从没有先修要求的节点开始。

Think of planning your semester courses 📚 — some courses have prerequisites. You start with courses that have NO prerequisites, complete them, then "unlock" courses that only needed those. Repeat until all courses are done!
类比：想象规划学期课程 📚 — 有些课有先修要求。你先选没有先修要求的课，完成后"解锁"只需要这些先修课的课程。重复直到所有课都完成！

🔑 **Key things to notice:**
- Start with all nodes of in-degree 0 (no incoming edges)
- Processing a node decreases its neighbors' in-degrees
- When a neighbor's in-degree reaches 0, add it to the queue
- If result has fewer nodes than total → cycle detected!
- 如果结果节点数少于总数→检测到环！

👀 **Run the code and see** how courses get "unlocked" one by one as prerequisites are completed!`,
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
      codeCpp: `#include <iostream>
#include <queue>
#include <unordered_map>
#include <string>
#include <vector>
using namespace std;

vector<string> topo_sort_kahn(unordered_map<string,vector<string>>& g, vector<string>& nodes) {
    unordered_map<string,int> in_deg;
    for (auto& n : nodes) in_deg[n] = 0;
    for (auto& [n, nbrs] : g) for (auto& nb : nbrs) in_deg[nb]++;
    queue<string> q;
    for (auto& n : nodes) if (in_deg[n]==0) q.push(n);
    vector<string> order;
    while (!q.empty()) {
        string node = q.front(); q.pop();
        order.push_back(node);
        cout << "Process: " << node << " (in-degree 0)" << endl;
        for (auto& nb : g[node]) if (--in_deg[nb]==0) q.push(nb);
    }
    return order;
}

int main() {
    unordered_map<string,vector<string>> g = {
        {"Math",{"Physics","CS"}},{"Physics",{"AI"}},{"CS",{"AI","Web"}},
        {"AI",{}},{"Web",{}},{"English",{}}
    };
    vector<string> nodes = {"Math","Physics","CS","AI","Web","English"};
    auto order = topo_sort_kahn(g, nodes);
    cout << "\nOrder: ";
    for (auto& n : order) cout << n << " → ";
    cout << "Done!" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Implement Kahn's algorithm for topological sort.",
        promptZh: "实现 Kahn 拓扑排序算法。",
        starterCode: "from collections import deque\\ndef topo_sort(n, edges):\\n    pass\\n\\nprint(topo_sort(4, [(0,1),(0,2),(1,3),(2,3)]))",
        expectedOutput: "[0, 1, 2, 3]",
        hint: "Build in-degree array. Start with in-degree 0 nodes. Process queue.",
        hintZh: "建立入度数组。从入度 0 的节点开始。",
        solution: "from collections import deque\\ndef topo_sort(n, edges):\\n    adj = [[] for _ in range(n)]\\n    indeg = [0]*n\\n    for u, v in edges:\\n        adj[u].append(v)\\n        indeg[v] += 1\\n    q = deque([i for i in range(n) if indeg[i] == 0])\\n    order = []\\n    while q:\\n        node = q.popleft()\\n        order.append(node)\\n        for nbr in adj[node]:\\n            indeg[nbr] -= 1\\n            if indeg[nbr] == 0: q.append(nbr)\\n    return order\\n\\nprint(topo_sort(4, [(0,1),(0,2),(1,3),(2,3)]))",
      },
      exerciseCpp: {
        prompt: "Implement Kahn's topological sort.",
        promptZh: "实现Kahn拓扑排序。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<int> topo_sort(int n, vector<pair<int,int>>& edges) {\n    // Your code here\n    return {};\n}\n\nint main() {\n    vector<pair<int,int>> e={{0,1},{0,2},{1,3},{2,3}};\n    auto r=topo_sort(4,e);\n    cout<<'[';for(int i=0;i<(int)r.size();i++){if(i)cout<<\", \";cout<<r[i];}cout<<']'<<endl;\n    return 0;\n}",
        expectedOutput: "[0, 1, 2, 3]",
        hint: "In-degree array. Start with 0-degree nodes.",
        hintZh: "入度数组。",
        solution: "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nvector<int> topo_sort(int n, vector<pair<int,int>>& edges) {\n    vector<vector<int>> adj(n);vector<int> indeg(n,0);\n    for(auto&[u,v]:edges){adj[u].push_back(v);indeg[v]++;}\n    queue<int> q;for(int i=0;i<n;i++)if(!indeg[i])q.push(i);\n    vector<int> order;while(!q.empty()){int node=q.front();q.pop();order.push_back(node);for(int nb:adj[node])if(--indeg[nb]==0)q.push(nb);}\n    return order;\n}\n\nint main() {\n    vector<pair<int,int>> e={{0,1},{0,2},{1,3},{2,3}};\n    auto r=topo_sort(4,e);\n    cout<<'[';for(int i=0;i<(int)r.size();i++){if(i)cout<<\", \";cout<<r[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🔄",
      content: `## 🔄 DFS-based Topological Sort

🎯 **What you'll learn:** An alternative topological sort using DFS post-order — process each node AFTER all its dependencies.
学习目标：用 DFS 后序遍历的替代拓扑排序——在所有依赖之后处理每个节点。

Imagine getting dressed in the morning 👔 — you can't put on shoes before socks, or a jacket before a shirt. DFS explores to the "deepest" dependency first (socks → shoes), records the finish order, then reverses it!
类比：想象早上穿衣服 👔 — 你不能在袜子之前穿鞋，或在衬衫之前穿外套。DFS 先探索到最"深"的依赖（袜子→鞋），记录完成顺序，然后反转！

🔑 **Key things to notice:**
- DFS goes deep first, recording nodes in POST-ORDER (after all descendants)
- Reverse the post-order to get topological order
- Uses a "visited" set to avoid reprocessing
- Both Kahn's and DFS approaches give valid orderings (may differ!)
- 两种方法都给出有效排序（可能不同！）

👀 **Run the code and compare** the DFS result with Kahn's — both are valid topological orderings!`,
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
      codeCpp: `#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <string>
#include <vector>
#include <algorithm>
#include <functional>
using namespace std;

vector<string> topo_sort_dfs(unordered_map<string,vector<string>>& g, vector<string>& nodes) {
    unordered_set<string> visited, in_progress;
    vector<string> result;
    bool has_cycle = false;
    function<void(const string&)> dfs = [&](const string& node) {
        if (in_progress.count(node)) { has_cycle=true; return; }
        if (visited.count(node)) return;
        in_progress.insert(node);
        for (auto& nb : g[node]) dfs(nb);
        in_progress.erase(node);
        visited.insert(node);
        result.push_back(node);
    };
    for (auto& n : nodes) if (!visited.count(n)) dfs(n);
    if (has_cycle) { cout << "Cycle detected!" << endl; return {}; }
    reverse(result.begin(), result.end());
    return result;
}

int main() {
    unordered_map<string,vector<string>> g = {
        {"Math",{"Physics","CS"}},{"Physics",{"AI"}},{"CS",{"AI","Web"}},
        {"AI",{}},{"Web",{}},{"English",{}}
    };
    vector<string> nodes = {"Math","Physics","CS","AI","Web","English"};
    auto order = topo_sort_dfs(g, nodes);
    cout << "DFS Topo Sort: ";
    for (auto& n : order) cout << n << " → ";
    cout << "Done!" << endl;
    return 0;
}`,
      exercise: {
        prompt: "Implement DFS-based topological sort with post-order reversal.",
        promptZh: "用后序遍历反转实现 DFS 拓扑排序。",
        starterCode: "def topo_dfs(n, edges):\\n    pass\\n\\nprint(topo_dfs(4, [(0,1),(0,2),(1,3),(2,3)]))",
        expectedOutput: "[0, 2, 1, 3]",
        hint: "DFS each unvisited node. Append after visiting all neighbors. Reverse.",
        hintZh: "DFS 每个未访问节点。访问完邻居后添加。反转。",
        solution: "def topo_dfs(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges: adj[u].append(v)\\n    visited = set()\\n    stack = []\\n    def dfs(node):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited: dfs(nbr)\\n        stack.append(node)\\n    for i in range(n):\\n        if i not in visited: dfs(i)\\n    return stack[::-1]\\n\\nprint(topo_dfs(4, [(0,1),(0,2),(1,3),(2,3)]))",
      },
      exerciseCpp: {
        prompt: "Implement DFS-based topological sort.",
        promptZh: "DFS拓扑排序。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <unordered_set>\n#include <functional>\nusing namespace std;\n\nvector<int> topo_dfs(int n, vector<pair<int,int>>& edges) {\n    // Your code here\n    return {};\n}\n\nint main() {\n    vector<pair<int,int>> e={{0,1},{0,2},{1,3},{2,3}};\n    auto r=topo_dfs(4,e);\n    cout<<'[';for(int i=0;i<(int)r.size();i++){if(i)cout<<\", \";cout<<r[i];}cout<<']'<<endl;\n    return 0;\n}",
        expectedOutput: "[0, 2, 1, 3]",
        hint: "DFS + post-order reversal.",
        hintZh: "DFS+后序反转。",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <unordered_set>\n#include <functional>\nusing namespace std;\n\nvector<int> topo_dfs(int n, vector<pair<int,int>>& edges) {\n    vector<vector<int>> adj(n);for(auto&[u,v]:edges)adj[u].push_back(v);\n    unordered_set<int> vis;vector<int> stk;\n    function<void(int)> dfs=[&](int node){vis.insert(node);for(int nb:adj[node])if(!vis.count(nb))dfs(nb);stk.push_back(node);};\n    for(int i=0;i<n;i++)if(!vis.count(i))dfs(i);\n    reverse(stk.begin(),stk.end());return stk;\n}\n\nint main() {\n    vector<pair<int,int>> e={{0,1},{0,2},{1,3},{2,3}};\n    auto r=topo_dfs(4,e);\n    cout<<'[';for(int i=0;i<(int)r.size();i++){if(i)cout<<\", \";cout<<r[i];}cout<<']'<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📋 Course Schedule · 课程安排",
        description: "Determine if you can finish all courses given prerequisites (cycle detection in DAG).\n判断给定先修课程能否完成所有课程。",
        starterCode: "def can_finish(n, prereqs):\n    # prereqs: [(course, prerequisite)]\n    pass\n\nprint(can_finish(4, [(1,0),(2,1),(3,2)]))\nprint(can_finish(2, [(0,1),(1,0)]))",
        hint: "Topological sort. If sorted order has all n nodes, no cycle.\n拓扑排序。如果排序有 n 个节点，无环。",
        solution: "from collections import deque\ndef can_finish(n, prereqs):\n    adj = [[] for _ in range(n)]\n    indeg = [0]*n\n    for c, p in prereqs:\n        adj[p].append(c)\n        indeg[c] += 1\n    q = deque([i for i in range(n) if indeg[i]==0])\n    count = 0\n    while q:\n        node = q.popleft()\n        count += 1\n        for nbr in adj[node]:\n            indeg[nbr] -= 1\n            if indeg[nbr] == 0: q.append(nbr)\n    return count == n\n\nprint(can_finish(4, [(1,0),(2,1),(3,2)]))\nprint(can_finish(2, [(0,1),(1,0)]))",
        expectedOutput: "True\nFalse",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Longest Path in DAG · DAG 最长路径",
        description: "Find the longest path in a DAG using topological sort.\n用拓扑排序找 DAG 中的最长路径。",
        starterCode: "def longest_path(n, edges):\n    # edges: [(from, to, weight)]\n    pass\n\nprint(longest_path(4, [(0,1,3),(0,2,2),(1,3,4),(2,3,1)]))",
        hint: "Topo sort, then relax edges in order.\n拓扑排序，然后按顺序松弛边。",
        solution: "from collections import deque\ndef longest_path(n, edges):\n    adj = [[] for _ in range(n)]\n    indeg = [0]*n\n    for u, v, w in edges:\n        adj[u].append((v, w))\n        indeg[v] += 1\n    q = deque([i for i in range(n) if indeg[i]==0])\n    order = []\n    while q:\n        node = q.popleft()\n        order.append(node)\n        for v, _ in adj[node]:\n            indeg[v] -= 1\n            if indeg[v] == 0: q.append(v)\n    dist = [0]*n\n    for u in order:\n        for v, w in adj[u]:\n            dist[v] = max(dist[v], dist[u]+w)\n    return max(dist)\n\nprint(longest_path(4, [(0,1,3),(0,2,2),(1,3,4),(2,3,1)]))",
        expectedOutput: "7",
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

🎯 **What you'll learn:** How to detect cycles in a directed graph using DFS with three-state coloring — white, gray, and black.
学习目标：如何用三色标记的 DFS 在有向图中检测环——白色、灰色和黑色。

Imagine following a treasure map 🗺️ — if you follow the arrows and end up back where you started, that's a cycle! DFS uses colors: WHITE (unvisited), GRAY (currently exploring), BLACK (fully explored). If you reach a GRAY node → cycle found!
类比：想象跟着藏宝图走 🗺️ — 如果你跟着箭头走最终回到起点，那就是环！DFS 用颜色：白色（未访问）、灰色（正在探索）、黑色（完全探索完）。如果到达灰色节点→发现环！

🔑 **Key things to notice:**
- Gray nodes are on the current DFS path — hitting one means a back edge (cycle!)
- Black nodes are fully explored — safe to revisit
- A DAG (Directed Acyclic Graph) has NO cycles
- Cycle detection is essential before topological sort
- 拓扑排序前必须检测环

👀 **Run the code and see** how the algorithm catches the cycle with its three-color system!`,
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
      codeCpp: `#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>
#include <functional>
using namespace std;

bool has_cycle(unordered_map<string,vector<string>>& g, vector<string>& nodes) {
    enum { WHITE, GRAY, BLACK };
    unordered_map<string,int> color;
    for (auto& n : nodes) color[n] = WHITE;
    function<bool(const string&)> dfs = [&](const string& node) -> bool {
        color[node] = GRAY;
        for (auto& nb : g[node]) {
            if (color[nb]==GRAY) { cout << "  Cycle: " << node << " → " << nb << endl; return true; }
            if (color[nb]==WHITE && dfs(nb)) return true;
        }
        color[node] = BLACK;
        return false;
    };
    for (auto& n : nodes) if (color[n]==WHITE && dfs(n)) return true;
    return false;
}

int main() {
    unordered_map<string,vector<string>> g1 = {{"A",{"B","C"}},{"B",{"D"}},{"C",{"D"}},{"D",{}}};
    vector<string> n1 = {"A","B","C","D"};
    cout << "Graph 1: " << (has_cycle(g1,n1)?"Has cycle":"No cycle") << endl;
    unordered_map<string,vector<string>> g2 = {{"A",{"B"}},{"B",{"C"}},{"C",{"A"}}};
    vector<string> n2 = {"A","B","C"};
    cout << "\nGraph 2: " << (has_cycle(g2,n2)?"Has cycle":"No cycle") << endl;
    return 0;
}`,
      exercise: {
        prompt: "Detect if an undirected graph has a cycle using DFS.",
        promptZh: "用 DFS 检测无向图是否有环。",
        starterCode: "def has_cycle(n, edges):\\n    pass\\n\\nprint(has_cycle(4, [(0,1),(1,2),(2,3)]))\\nprint(has_cycle(4, [(0,1),(1,2),(2,3),(3,0)]))",
        expectedOutput: "False\\nTrue",
        hint: "DFS with parent tracking. Visited neighbor ≠ parent → cycle!",
        hintZh: "带父节点跟踪的 DFS。已访问邻居 ≠ 父节点 → 有环！",
        solution: "def has_cycle(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v); adj[v].append(u)\\n    visited = set()\\n    def dfs(node, parent):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited:\\n                if dfs(nbr, node): return True\\n            elif nbr != parent: return True\\n        return False\\n    for i in range(n):\\n        if i not in visited:\\n            if dfs(i, -1): return True\\n    return False\\n\\nprint(has_cycle(4, [(0,1),(1,2),(2,3)]))\\nprint(has_cycle(4, [(0,1),(1,2),(2,3),(3,0)]))",
      },
      exerciseCpp: {
        prompt: "Detect if undirected graph has a cycle.",
        promptZh: "检测无向图环。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <unordered_set>\n#include <functional>\nusing namespace std;\n\nbool has_cycle(int n, vector<pair<int,int>>& edges) {\n    // Your code here\n    return false;\n}\n\nint main() {\n    vector<pair<int,int>> e1={{0,1},{1,2},{2,3}};\n    cout<<(has_cycle(4,e1)?\"True\":\"False\")<<endl;\n    vector<pair<int,int>> e2={{0,1},{1,2},{2,3},{3,0}};\n    cout<<(has_cycle(4,e2)?\"True\":\"False\")<<endl;\n    return 0;\n}",
        expectedOutput: "False\nTrue",
        hint: "DFS with parent tracking.",
        hintZh: "带父节点DFS。",
        solution: "#include <iostream>\n#include <vector>\n#include <unordered_set>\n#include <functional>\nusing namespace std;\n\nbool has_cycle(int n, vector<pair<int,int>>& edges) {\n    vector<vector<int>> adj(n);for(auto&[u,v]:edges){adj[u].push_back(v);adj[v].push_back(u);}\n    unordered_set<int> vis;\n    function<bool(int,int)> dfs=[&](int node,int par)->bool{vis.insert(node);for(int nb:adj[node]){if(!vis.count(nb)){if(dfs(nb,node))return true;}else if(nb!=par)return true;}return false;};\n    for(int i=0;i<n;i++)if(!vis.count(i)&&dfs(i,-1))return true;\n    return false;\n}\n\nint main() {\n    vector<pair<int,int>> e1={{0,1},{1,2},{2,3}};\n    cout<<(has_cycle(4,e1)?\"True\":\"False\")<<endl;\n    vector<pair<int,int>> e2={{0,1},{1,2},{2,3},{3,0}};\n    cout<<(has_cycle(4,e2)?\"True\":\"False\")<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🎨",
      content: `## 🎨 Bipartite Graph Check

🎯 **What you'll learn:** How to check if a graph can be colored with 2 colors so no adjacent nodes share a color — using BFS.
学习目标：如何检查图能否用2种颜色着色使相邻节点颜色不同——使用 BFS。

Think of dividing kids into two teams for dodgeball 🔴🔵 — friends can be on different teams, but enemies (edges) MUST be on different teams. If you can split everyone this way, the graph is bipartite!
类比：想象把孩子分成两队打躲避球 🔴🔵 — 朋友可以在不同队，但敌人（边）必须在不同队。如果能这样分开所有人，图就是二部图！

🔑 **Key things to notice:**
- Try to color each node with alternating colors (0 and 1)
- BFS assigns opposite color to all neighbors
- If a neighbor already has the SAME color → not bipartite!
- Bipartite graphs have many applications: matching, scheduling, etc.
- 二部图有很多应用：匹配、调度等

👀 **Run the code and see** which graphs are bipartite and which aren't — and why!`,
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
      codeCpp: `#include <iostream>
#include <queue>
#include <unordered_map>
#include <string>
using namespace std;

bool is_bipartite(unordered_map<string,vector<string>>& g) {
    unordered_map<string,int> color;
    for (auto& [start, _] : g) {
        if (color.count(start)) continue;
        queue<string> q;
        q.push(start); color[start] = 0;
        while (!q.empty()) {
            string node = q.front(); q.pop();
            for (auto& nb : g[node]) {
                if (!color.count(nb)) { color[nb] = 1-color[node]; q.push(nb); }
                else if (color[nb]==color[node]) { cout << "  Conflict: " << node << " & " << nb << endl; return false; }
            }
        }
    }
    return true;
}

int main() {
    unordered_map<string,vector<string>> g1 = {{"A",{"B","D"}},{"B",{"A","C"}},{"C",{"B","D"}},{"D",{"A","C"}}};
    cout << "Square: " << (is_bipartite(g1)?"✅ Bipartite":"❌ Not bipartite") << endl;
    unordered_map<string,vector<string>> g2 = {{"A",{"B","C"}},{"B",{"A","C"}},{"C",{"A","B"}}};
    cout << "Triangle: " << (is_bipartite(g2)?"✅ Bipartite":"❌ Not bipartite") << endl;
    return 0;
}`,
      exercise: {
        prompt: "Check if a graph is bipartite using BFS coloring.",
        promptZh: "用 BFS 着色检查图是否二部图。",
        starterCode: "from collections import deque\\ndef is_bipartite(n, edges):\\n    pass\\n\\nprint(is_bipartite(4, [(0,1),(1,2),(2,3)]))\\nprint(is_bipartite(3, [(0,1),(1,2),(2,0)]))",
        expectedOutput: "True\\nFalse",
        hint: "Color neighbors with opposite color. Conflict → not bipartite.",
        hintZh: "给邻居着相反颜色。冲突 → 不是二部图。",
        solution: "from collections import deque\\ndef is_bipartite(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v); adj[v].append(u)\\n    color = [-1]*n\\n    for s in range(n):\\n        if color[s] != -1: continue\\n        color[s] = 0\\n        q = deque([s])\\n        while q:\\n            node = q.popleft()\\n            for nbr in adj[node]:\\n                if color[nbr] == -1:\\n                    color[nbr] = 1 - color[node]\\n                    q.append(nbr)\\n                elif color[nbr] == color[node]: return False\\n    return True\\n\\nprint(is_bipartite(4, [(0,1),(1,2),(2,3)]))\\nprint(is_bipartite(3, [(0,1),(1,2),(2,0)]))",
      },
      exerciseCpp: {
        prompt: "Check if graph is bipartite.",
        promptZh: "检查二部图。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nbool is_bipartite(int n, vector<pair<int,int>>& edges) {\n    // Your code here\n    return true;\n}\n\nint main() {\n    vector<pair<int,int>> e1={{0,1},{1,2},{2,3}};\n    cout<<(is_bipartite(4,e1)?\"True\":\"False\")<<endl;\n    vector<pair<int,int>> e2={{0,1},{1,2},{2,0}};\n    cout<<(is_bipartite(3,e2)?\"True\":\"False\")<<endl;\n    return 0;\n}",
        expectedOutput: "True\nFalse",
        hint: "Color neighbors oppositely. Conflict = not bipartite.",
        hintZh: "相反颜色着色。",
        solution: "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\n\nbool is_bipartite(int n, vector<pair<int,int>>& edges) {\n    vector<vector<int>> adj(n);for(auto&[u,v]:edges){adj[u].push_back(v);adj[v].push_back(u);}\n    vector<int> color(n,-1);\n    for(int s=0;s<n;s++){if(color[s]!=-1)continue;color[s]=0;queue<int> q;q.push(s);\n    while(!q.empty()){int node=q.front();q.pop();for(int nb:adj[node]){if(color[nb]==-1){color[nb]=1-color[node];q.push(nb);}else if(color[nb]==color[node])return false;}}}\n    return true;\n}\n\nint main() {\n    vector<pair<int,int>> e1={{0,1},{1,2},{2,3}};\n    cout<<(is_bipartite(4,e1)?\"True\":\"False\")<<endl;\n    vector<pair<int,int>> e2={{0,1},{1,2},{2,0}};\n    cout<<(is_bipartite(3,e2)?\"True\":\"False\")<<endl;\n    return 0;\n}",
        language: "cpp",
      },
    },
    {
      type: "code",
      emoji: "🌍",
      content: `## 🌍 Graph Applications Showcase

🎯 **What you'll learn:** How graph algorithms solve diverse real-world problems — from social networks to maze solving to web crawling.
学习目标：图算法如何解决多样的现实问题——从社交网络到迷宫求解到网页爬虫。

Graphs are EVERYWHERE in the real world 🌍 — social media friends, GPS navigation, internet routing, game maps, airline routes, even your brain's neurons! Every time things are connected, there's a graph hiding underneath.
类比：图在现实世界中无处不在 🌍 — 社交媒体好友、GPS导航、互联网路由、游戏地图、航线，甚至你大脑的神经元！只要事物相互连接，底下就藏着一个图。

🔑 **Key things to notice:**
- BFS solves maze shortest paths — treating each cell as a graph node
- Social networks use BFS for "degrees of separation"
- PageRank (Google) models the web as a directed graph
- Each application maps a real problem to a graph abstraction
- 每个应用都把现实问题映射到图的抽象

👀 **Run the code and explore** these diverse applications — see graphs in action across domains!`,
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
      codeCpp: `#include <iostream>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

int count_islands(vector<vector<int>> grid) {
    if (grid.empty()) return 0;
    int rows=grid.size(), cols=grid[0].size(), count=0;
    int dx[]={0,0,1,-1}, dy[]={1,-1,0,0};
    for (int i=0;i<rows;i++)
        for (int j=0;j<cols;j++)
            if (grid[i][j]==1) {
                count++;
                queue<pair<int,int>> q;
                q.push({i,j}); grid[i][j]=0;
                while (!q.empty()) {
                    auto [r,c] = q.front(); q.pop();
                    for (int d=0;d<4;d++) {
                        int nr=r+dx[d], nc=c+dy[d];
                        if (nr>=0&&nr<rows&&nc>=0&&nc<cols&&grid[nr][nc]==1)
                            { grid[nr][nc]=0; q.push({nr,nc}); }
                    }
                }
            }
    return count;
}

int shortest_maze(vector<vector<int>> maze) {
    int rows=maze.size(), cols=maze[0].size();
    if (maze[0][0]==1||maze[rows-1][cols-1]==1) return -1;
    queue<tuple<int,int,int>> q;
    q.push({0,0,1}); maze[0][0]=1;
    int dx[]={0,0,1,-1}, dy[]={1,-1,0,0};
    while (!q.empty()) {
        auto [r,c,dist] = q.front(); q.pop();
        if (r==rows-1&&c==cols-1) return dist;
        for (int d=0;d<4;d++) {
            int nr=r+dx[d], nc=c+dy[d];
            if (nr>=0&&nr<rows&&nc>=0&&nc<cols&&maze[nr][nc]==0)
                { maze[nr][nc]=1; q.push({nr,nc,dist+1}); }
        }
    }
    return -1;
}

int main() {
    cout << "Islands: " << count_islands({{1,1,0,0,0},{1,1,0,0,0},{0,0,1,0,0},{0,0,0,1,1}}) << endl;
    cout << "Shortest maze path: " << shortest_maze({{0,0,1,0},{0,0,0,0},{0,1,1,0},{0,0,0,0}}) << endl;
    return 0;
}`,
      exercise: {
        prompt: "Count connected components in an undirected graph using DFS.",
        promptZh: "用 DFS 计算无向图的连通分量数。",
        starterCode: "def count_components(n, edges):\\n    pass\\n\\nprint(count_components(5, [(0,1),(2,3)]))\\nprint(count_components(4, [(0,1),(1,2),(2,3)]))",
        expectedOutput: "3\\n1",
        hint: "DFS from each unvisited node. Each DFS call = one component.",
        hintZh: "从每个未访问节点 DFS。每次 = 一个连通分量。",
        solution: "def count_components(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v); adj[v].append(u)\\n    visited = set()\\n    count = 0\\n    def dfs(node):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited: dfs(nbr)\\n    for i in range(n):\\n        if i not in visited:\\n            dfs(i); count += 1\\n    return count\\n\\nprint(count_components(5, [(0,1),(2,3)]))\\nprint(count_components(4, [(0,1),(1,2),(2,3)]))",
      },
      exerciseCpp: {
        prompt: "Count connected components using DFS.",
        promptZh: "计算连通分量数。",
        starterCode: "#include <iostream>\n#include <vector>\n#include <unordered_set>\n#include <functional>\nusing namespace std;\n\nint count_comp(int n, vector<pair<int,int>>& edges) {\n    // Your code here\n    return 0;\n}\n\nint main() {\n    vector<pair<int,int>> e1={{0,1},{2,3}};\n    cout<<count_comp(5,e1)<<endl;\n    vector<pair<int,int>> e2={{0,1},{1,2},{2,3}};\n    cout<<count_comp(4,e2)<<endl;\n    return 0;\n}",
        expectedOutput: "3\n1",
        hint: "DFS from each unvisited = one component.",
        hintZh: "每次DFS=一个连通分量。",
        solution: "#include <iostream>\n#include <vector>\n#include <unordered_set>\n#include <functional>\nusing namespace std;\n\nint count_comp(int n, vector<pair<int,int>>& edges) {\n    vector<vector<int>> adj(n);for(auto&[u,v]:edges){adj[u].push_back(v);adj[v].push_back(u);}\n    unordered_set<int> vis;int count=0;\n    function<void(int)> dfs=[&](int node){vis.insert(node);for(int nb:adj[node])if(!vis.count(nb))dfs(nb);};\n    for(int i=0;i<n;i++)if(!vis.count(i)){dfs(i);count++;}\n    return count;\n}\n\nint main() {\n    vector<pair<int,int>> e1={{0,1},{2,3}};\n    cout<<count_comp(5,e1)<<endl;\n    vector<pair<int,int>> e2={{0,1},{1,2},{2,3}};\n    cout<<count_comp(4,e2)<<endl;\n    return 0;\n}",
        language: "cpp",
      },
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

🎓 **Remember:** Algorithms are tools for solving problems. The best algorithm is the one you understand and can implement correctly!

> 💡 **This lesson's project is available in Code Lab!** You can build it there with full IDE features.
> 💡 **这节课的项目可以在代码实验室中完成！** 那里有完整的 IDE 功能。`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌉 Bridge Finder · 桥查找器",
        description: "Count connected components after removing each edge.\n删除每条边后计算连通分量数。",
        starterCode: "def count_bridges(n, edges):\n    # An edge is a bridge if removing it increases components\n    pass\n\nprint(count_bridges(4, [(0,1),(1,2),(2,0),(2,3)]))",
        hint: "For each edge, remove it and count components using DFS.\n删除每条边，用 DFS 计算连通分量。",
        solution: "def count_bridges(n, edges):\n    bridges = 0\n    for skip in range(len(edges)):\n        adj = [[] for _ in range(n)]\n        for i, (u, v) in enumerate(edges):\n            if i == skip: continue\n            adj[u].append(v); adj[v].append(u)\n        visited = set()\n        def dfs(node):\n            visited.add(node)\n            for nbr in adj[node]:\n                if nbr not in visited: dfs(nbr)\n        components = 0\n        for i in range(n):\n            if i not in visited: dfs(i); components += 1\n        if components > 1: bridges += 1\n    return bridges\n\nprint(count_bridges(4, [(0,1),(1,2),(2,0),(2,3)]))",
        expectedOutput: "1",
      },
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Strongly Connected · 强连通检测",
        description: "Check if a DIRECTED graph is strongly connected (every node reachable from every other).\n检查有向图是否强连通。",
        starterCode: "def is_strongly_connected(n, edges):\n    pass\n\nprint(is_strongly_connected(3, [(0,1),(1,2),(2,0)]))\nprint(is_strongly_connected(3, [(0,1),(1,2)]))",
        hint: "DFS from node 0. Reverse edges and DFS again. If both reach all nodes → strongly connected.\n从 0 DFS。反转边再 DFS。如果都能到达所有节点 → 强连通。",
        solution: "def is_strongly_connected(n, edges):\n    adj = [[] for _ in range(n)]\n    radj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v); radj[v].append(u)\n    def dfs(graph, start):\n        visited = set()\n        stack = [start]\n        while stack:\n            node = stack.pop()\n            if node in visited: continue\n            visited.add(node)\n            for nbr in graph[node]: stack.append(nbr)\n        return visited\n    return len(dfs(adj, 0)) == n and len(dfs(radj, 0)) == n\n\nprint(is_strongly_connected(3, [(0,1),(1,2),(2,0)]))\nprint(is_strongly_connected(3, [(0,1),(1,2)]))",
        expectedOutput: "True\nFalse",
      },
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