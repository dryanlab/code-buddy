// This script adds exercise fields to every code section in alg-lessons.ts
// and adds challenge sections before each quiz section.
// Run: node scripts/add-exercises.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '..', 'src', 'data', 'alg-lessons.ts');
let src = fs.readFileSync(filePath, 'utf8');
const lines = src.split('\n');

// ══════════════════════════════════════════════
// STEP 1: Map code sections to their content
// ══════════════════════════════════════════════

// Find each code section: its content header and where `code:` block ends (line with just "},")
// We'll insert `exercise: {...},` after the closing backtick of the code template literal

const codeSections = [];
for (let i = 0; i < lines.length; i++) {
  const trimmed = lines[i].trim();
  if (trimmed === 'type: "code",') {
    // Find content line
    let contentLine = '';
    for (let j = i+1; j < Math.min(i+10, lines.length); j++) {
      if (lines[j].includes('content:')) {
        const match = lines[j].match(/content:\s*`##\s*\S+\s*(.*)/);
        if (match) contentLine = match[1].trim();
        break;
      }
    }
    // Find the end of the code template literal (line ending with "`,")
    let codeEndLine = -1;
    let inCode = false;
    for (let j = i+1; j < Math.min(i+100, lines.length); j++) {
      if (lines[j].trim().startsWith('code:')) {
        inCode = true;
      }
      if (inCode && lines[j].trim().endsWith('`,')) {
        codeEndLine = j;
        break;
      }
    }
    if (codeEndLine > 0) {
      codeSections.push({ typeLine: i, contentKey: contentLine, codeEndLine });
    }
  }
}

console.log(`Found ${codeSections.length} code sections`);

// ══════════════════════════════════════════════
// STEP 2: Define exercises keyed by content
// ══════════════════════════════════════════════

const exerciseMap = {
  "Linear Search in Python": {
    prompt: "Write a linear search that returns the INDEX of the LAST occurrence of a target in an array. Return -1 if not found.",
    promptZh: "写一个线性搜索，返回目标值在数组中最后一次出现的索引。未找到返回 -1。",
    starterCode: "def find_last(arr, target):\\n    # Your code here\\n    pass\\n\\nprint(find_last([3, 1, 4, 1, 5, 1], 1))\\nprint(find_last([3, 1, 4], 9))",
    expectedOutput: "5\\n-1",
    hint: "Track the last found index. Don't return early — check ALL elements!",
    hintZh: "记录最后找到的索引。不要提前返回——检查所有元素！",
    solution: "def find_last(arr, target):\\n    last = -1\\n    for i in range(len(arr)):\\n        if arr[i] == target:\\n            last = i\\n    return last\\n\\nprint(find_last([3, 1, 4, 1, 5, 1], 1))\\nprint(find_last([3, 1, 4], 9))",
  },
  "Linear Search Variations": {
    prompt: "Write a function that finds the SECOND largest value in an array using linear search.",
    promptZh: "写一个函数，用线性搜索找到数组中第二大的值。",
    starterCode: "def second_largest(arr):\\n    # Your code here\\n    pass\\n\\nprint(second_largest([3, 1, 4, 1, 5, 9, 2, 6]))",
    expectedOutput: "6",
    hint: "Track both the largest and second largest as you scan through.",
    hintZh: "扫描数组时同时跟踪最大值和第二大值。",
    solution: "def second_largest(arr):\\n    first = second = float('-inf')\\n    for x in arr:\\n        if x > first:\\n            second = first\\n            first = x\\n        elif x > second and x != first:\\n            second = x\\n    return second\\n\\nprint(second_largest([3, 1, 4, 1, 5, 9, 2, 6]))",
  },
  "Binary Search — Step by Step": {
    prompt: "Implement binary search that returns the INSERTION POINT (like bisect_left).",
    promptZh: "实现二分搜索，返回插入位置（类似 bisect_left）。",
    starterCode: "def bisect_left(arr, target):\\n    # Your code here\\n    pass\\n\\nprint(bisect_left([1, 3, 5, 7, 9], 5))\\nprint(bisect_left([1, 3, 5, 7, 9], 6))",
    expectedOutput: "2\\n3",
    hint: "When not found, 'left' will be at the insertion point.",
    hintZh: "当未找到时，'left' 就在插入位置。",
    solution: "def bisect_left(arr, target):\\n    left, right = 0, len(arr)\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] < target:\\n            left = mid + 1\\n        else:\\n            right = mid\\n    return left\\n\\nprint(bisect_left([1, 3, 5, 7, 9], 5))\\nprint(bisect_left([1, 3, 5, 7, 9], 6))",
  },
  "Recursive Binary Search": {
    prompt: "Write a recursive binary search that COUNTS comparisons. Return (index, count).",
    promptZh: "写一个递归二分搜索，统计比较次数。返回 (索引, 次数)。",
    starterCode: "def binary_count(arr, target, left=0, right=None, count=0):\\n    pass\\n\\nidx, steps = binary_count([1,3,5,7,9,11,13,15], 11)\\nprint(f'{idx} {steps}')",
    expectedOutput: "5 3",
    hint: "Pass count+1 in each recursive call.",
    hintZh: "每次递归调用传 count+1。",
    solution: "def binary_count(arr, target, left=0, right=None, count=0):\\n    if right is None: right = len(arr) - 1\\n    if left > right: return (-1, count)\\n    mid = (left + right) // 2\\n    count += 1\\n    if arr[mid] == target: return (mid, count)\\n    elif arr[mid] < target: return binary_count(arr, target, mid+1, right, count)\\n    else: return binary_count(arr, target, left, mid-1, count)\\n\\nidx, steps = binary_count([1,3,5,7,9,11,13,15], 11)\\nprint(f'{idx} {steps}')",
  },
  "Brute Force: Search Every Cell": {
    prompt: "Find ALL cells in a 2D matrix containing a target. Return list of (row, col) tuples.",
    promptZh: "找到二维矩阵中包含目标的所有单元格。返回 (行, 列) 元组列表。",
    starterCode: "def find_all_2d(matrix, target):\\n    pass\\n\\nm = [[1,2,3],[4,2,6],[2,8,9]]\\nprint(find_all_2d(m, 2))",
    expectedOutput: "[(0, 1), (1, 1), (2, 0)]",
    hint: "Use nested loops. Append (i, j) whenever matrix[i][j] == target.",
    hintZh: "用嵌套循环。当 matrix[i][j] == target 时添加 (i, j)。",
    solution: "def find_all_2d(matrix, target):\\n    result = []\\n    for i in range(len(matrix)):\\n        for j in range(len(matrix[0])):\\n            if matrix[i][j] == target:\\n                result.append((i, j))\\n    return result\\n\\nm = [[1,2,3],[4,2,6],[2,8,9]]\\nprint(find_all_2d(m, 2))",
  },
  "Staircase Search: The Smart Way": {
    prompt: "Modify staircase search to return the NUMBER OF STEPS taken.",
    promptZh: "修改阶梯搜索，返回所走的步数。",
    starterCode: "def staircase_steps(matrix, target):\\n    pass\\n\\nm = [[1,4,7],[2,5,8],[3,6,9]]\\nprint(staircase_steps(m, 5))\\nprint(staircase_steps(m, 10))",
    expectedOutput: "2\\n3",
    hint: "Count each comparison as a step. Start from top-right corner.",
    hintZh: "每次比较计为一步。从右上角开始。",
    solution: "def staircase_steps(matrix, target):\\n    r, c = 0, len(matrix[0]) - 1\\n    steps = 0\\n    while r < len(matrix) and c >= 0:\\n        steps += 1\\n        if matrix[r][c] == target: return steps\\n        elif matrix[r][c] > target: c -= 1\\n        else: r += 1\\n    return steps\\n\\nm = [[1,4,7],[2,5,8],[3,6,9]]\\nprint(staircase_steps(m, 5))\\nprint(staircase_steps(m, 10))",
  },
  "Finding Boundaries with Binary Search": {
    prompt: "Find the FIRST position where value >= target in sorted array.",
    promptZh: "找到排序数组中第一个 >= target 的位置。",
    starterCode: "def lower_bound(arr, target):\\n    pass\\n\\nprint(lower_bound([1,3,5,7,9], 5))\\nprint(lower_bound([1,3,5,7,9], 6))\\nprint(lower_bound([1,3,5,7,9], 10))",
    expectedOutput: "2\\n3\\n5",
    hint: "Binary search. When arr[mid] >= target, move right boundary.",
    hintZh: "二分搜索。当 arr[mid] >= target 时移动右边界。",
    solution: "def lower_bound(arr, target):\\n    left, right = 0, len(arr)\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] < target: left = mid + 1\\n        else: right = mid\\n    return left\\n\\nprint(lower_bound([1,3,5,7,9], 5))\\nprint(lower_bound([1,3,5,7,9], 6))\\nprint(lower_bound([1,3,5,7,9], 10))",
  },
  "Search in a Rotated Array": {
    prompt: "Find the MINIMUM element in a rotated sorted array using binary search.",
    promptZh: "用二分搜索在旋转排序数组中找到最小元素。",
    starterCode: "def find_min_rotated(arr):\\n    pass\\n\\nprint(find_min_rotated([4,5,6,7,0,1,2]))\\nprint(find_min_rotated([3,1,2]))",
    expectedOutput: "0\\n1",
    hint: "If arr[mid] > arr[right], minimum is in right half.",
    hintZh: "如果 arr[mid] > arr[right]，最小值在右半部分。",
    solution: "def find_min_rotated(arr):\\n    left, right = 0, len(arr) - 1\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] > arr[right]: left = mid + 1\\n        else: right = mid\\n    return arr[left]\\n\\nprint(find_min_rotated([4,5,6,7,0,1,2]))\\nprint(find_min_rotated([3,1,2]))",
  },
  "Fun Application: Guess the Number Game": {
    prompt: "Write a binary search that finds the integer square root of n.",
    promptZh: "写一个二分搜索找到 n 的整数平方根。",
    starterCode: "def int_sqrt(n):\\n    pass\\n\\nprint(int_sqrt(27))\\nprint(int_sqrt(100))\\nprint(int_sqrt(0))",
    expectedOutput: "5\\n10\\n0",
    hint: "Binary search between 0 and n. If mid*mid <= n, try higher.",
    hintZh: "在 0 和 n 之间二分搜索。如果 mid*mid <= n，尝试更高。",
    solution: "def int_sqrt(n):\\n    if n < 2: return n\\n    left, right = 0, n\\n    ans = 0\\n    while left <= right:\\n        mid = (left + right) // 2\\n        if mid * mid <= n:\\n            ans = mid\\n            left = mid + 1\\n        else:\\n            right = mid - 1\\n    return ans\\n\\nprint(int_sqrt(27))\\nprint(int_sqrt(100))\\nprint(int_sqrt(0))",
  },
  "Bubble Sort — Bubbling Up!": {
    prompt: "Modify bubble sort to COUNT total swaps. Return (sorted_array, swap_count).",
    promptZh: "修改冒泡排序统计总交换次数。返回 (排序数组, 交换次数)。",
    starterCode: "def bubble_sort_count(arr):\\n    pass\\n\\narr, swaps = bubble_sort_count([5, 1, 4, 2, 8])\\nprint(arr)\\nprint(swaps)",
    expectedOutput: "[1, 2, 4, 5, 8]\\n4",
    hint: "Add a counter. Increment every time you swap.",
    hintZh: "添加计数器。每次交换时加 1。",
    solution: "def bubble_sort_count(arr):\\n    a = arr[:]\\n    swaps = 0\\n    n = len(a)\\n    for i in range(n):\\n        for j in range(n-1-i):\\n            if a[j] > a[j+1]:\\n                a[j], a[j+1] = a[j+1], a[j]\\n                swaps += 1\\n    return a, swaps\\n\\narr, swaps = bubble_sort_count([5, 1, 4, 2, 8])\\nprint(arr)\\nprint(swaps)",
  },
  "Selection Sort — Pick the Smallest!": {
    prompt: "Implement selection sort in DESCENDING order.",
    promptZh: "实现降序选择排序。",
    starterCode: "def selection_sort_desc(arr):\\n    pass\\n\\nprint(selection_sort_desc([3, 1, 4, 1, 5]))",
    expectedOutput: "[5, 4, 3, 1, 1]",
    hint: "Find MAXIMUM in each pass instead of minimum.",
    hintZh: "每轮找最大值而不是最小值。",
    solution: "def selection_sort_desc(arr):\\n    a = arr[:]\\n    for i in range(len(a)):\\n        max_idx = i\\n        for j in range(i+1, len(a)):\\n            if a[j] > a[max_idx]: max_idx = j\\n        a[i], a[max_idx] = a[max_idx], a[i]\\n    return a\\n\\nprint(selection_sort_desc([3, 1, 4, 1, 5]))",
  },
  "Insertion Sort — Like Sorting Cards!": {
    prompt: "Write insertion sort that prints the array after EACH pass.",
    promptZh: "写一个插入排序，每次插入后打印数组。",
    starterCode: "def insertion_sort_trace(arr):\\n    pass\\n\\ninsertion_sort_trace([5, 2, 4, 6, 1, 3])",
    expectedOutput: "[2, 5, 4, 6, 1, 3]\\n[2, 4, 5, 6, 1, 3]\\n[2, 4, 5, 6, 1, 3]\\n[1, 2, 4, 5, 6, 3]\\n[1, 2, 3, 4, 5, 6]",
    hint: "After each inner loop, print the current state.",
    hintZh: "每次内层循环后打印当前状态。",
    solution: "def insertion_sort_trace(arr):\\n    a = arr[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i - 1\\n        while j >= 0 and a[j] > key:\\n            a[j+1] = a[j]\\n            j -= 1\\n        a[j+1] = key\\n        print(a)\\n\\ninsertion_sort_trace([5, 2, 4, 6, 1, 3])",
  },
  "Merge Sort — Full Implementation": {
    prompt: "Write JUST the merge function: merge two sorted lists into one.",
    promptZh: "只写合并函数：将两个排序列表合并为一个。",
    starterCode: "def merge(left, right):\\n    pass\\n\\nprint(merge([1, 3, 5], [2, 4, 6]))\\nprint(merge([1, 1], [2]))",
    expectedOutput: "[1, 2, 3, 4, 5, 6]\\n[1, 1, 2]",
    hint: "Two pointers. Compare and append the smaller. Don't forget remainders.",
    hintZh: "两个指针。比较并添加较小的。别忘了剩余元素。",
    solution: "def merge(left, right):\\n    result = []\\n    i = j = 0\\n    while i < len(left) and j < len(right):\\n        if left[i] <= right[j]:\\n            result.append(left[i]); i += 1\\n        else:\\n            result.append(right[j]); j += 1\\n    result.extend(left[i:])\\n    result.extend(right[j:])\\n    return result\\n\\nprint(merge([1, 3, 5], [2, 4, 6]))\\nprint(merge([1, 1], [2]))",
  },
  "Why O(n log n)?": {
    prompt: "Count how many times n can be halved before reaching 1 (this is log₂(n)).",
    promptZh: "计算 n 可以被对半分多少次才到 1（这就是 log₂(n)）。",
    starterCode: "def count_halves(n):\\n    pass\\n\\nprint(count_halves(8))\\nprint(count_halves(16))\\nprint(count_halves(1000))",
    expectedOutput: "3\\n4\\n10",
    hint: "Keep dividing n by 2 and count until n <= 1.",
    hintZh: "不断将 n 除以 2 并计数，直到 n <= 1。",
    solution: "def count_halves(n):\\n    count = 0\\n    while n > 1:\\n        n //= 2\\n        count += 1\\n    return count\\n\\nprint(count_halves(8))\\nprint(count_halves(16))\\nprint(count_halves(1000))",
  },
  "Quick Sort — The Classic": {
    prompt: "Partition an array into elements <= pivot and > pivot. Return two lists.",
    promptZh: "将数组分为 <= 枢轴和 > 枢轴的元素。返回两个列表。",
    starterCode: "def partition(arr, pivot):\\n    pass\\n\\nlo, hi = partition([3,6,8,10,1,2,1], 5)\\nprint(lo)\\nprint(hi)",
    expectedOutput: "[3, 1, 2, 1]\\n[6, 8, 10]",
    hint: "Loop through, add to left if <= pivot, else right.",
    hintZh: "遍历，<= 枢轴加左边，否则加右边。",
    solution: "def partition(arr, pivot):\\n    left = [x for x in arr if x <= pivot]\\n    right = [x for x in arr if x > pivot]\\n    return left, right\\n\\nlo, hi = partition([3,6,8,10,1,2,1], 5)\\nprint(lo)\\nprint(hi)",
  },
  "In-Place Quick Sort (Lomuto Partition)": {
    prompt: "Implement Lomuto partition: return final pivot position after partitioning.",
    promptZh: "实现 Lomuto 分区：返回分区后枢轴的最终位置。",
    starterCode: "def lomuto(arr, lo, hi):\\n    pass\\n\\na = [10,80,30,90,40,50,70]\\np = lomuto(a, 0, len(a)-1)\\nprint(p)\\nprint(a)",
    expectedOutput: "6\\n[10, 30, 40, 50, 70, 80, 90]",
    hint: "Use last element as pivot. Track where small elements end.",
    hintZh: "用最后一个元素做枢轴。跟踪小元素的结束位置。",
    solution: "def lomuto(arr, lo, hi):\\n    pivot = arr[hi]\\n    i = lo - 1\\n    for j in range(lo, hi):\\n        if arr[j] <= pivot:\\n            i += 1\\n            arr[i], arr[j] = arr[j], arr[i]\\n    arr[i+1], arr[hi] = arr[hi], arr[i+1]\\n    return i + 1\\n\\na = [10,80,30,90,40,50,70]\\np = lomuto(a, 0, len(a)-1)\\nprint(p)\\nprint(a)",
  },
  "Sorting Race!": {
    prompt: "Write a function that checks if an array is ALREADY sorted (ascending).",
    promptZh: "写一个函数检查数组是否已排好序（升序）。",
    starterCode: "def is_sorted(arr):\\n    pass\\n\\nprint(is_sorted([1,2,3,4,5]))\\nprint(is_sorted([1,3,2,4,5]))\\nprint(is_sorted([]))",
    expectedOutput: "True\\nFalse\\nTrue",
    hint: "Compare each element with the next one.",
    hintZh: "比较每个元素和下一个。",
    solution: "def is_sorted(arr):\\n    for i in range(len(arr)-1):\\n        if arr[i] > arr[i+1]: return False\\n    return True\\n\\nprint(is_sorted([1,2,3,4,5]))\\nprint(is_sorted([1,3,2,4,5]))\\nprint(is_sorted([]))",
  },
  "The Complete Comparison Table": {
    prompt: "Sort strings by LENGTH using insertion sort (don't use key=).",
    promptZh: "用插入排序按长度排序字符串（不用 key= 参数）。",
    starterCode: "def sort_by_length(words):\\n    pass\\n\\nprint(sort_by_length(['banana','kiwi','fig','apple','date']))",
    expectedOutput: "['fig', 'kiwi', 'date', 'apple', 'banana']",
    hint: "Compare len(a[j]) > len(key) instead of a[j] > key.",
    hintZh: "比较 len(a[j]) > len(key) 而不是 a[j] > key。",
    solution: "def sort_by_length(words):\\n    a = words[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i - 1\\n        while j >= 0 and len(a[j]) > len(key):\\n            a[j+1] = a[j]; j -= 1\\n        a[j+1] = key\\n    return a\\n\\nprint(sort_by_length(['banana','kiwi','fig','apple','date']))",
  },
  "Your First Recursive Function": {
    prompt: "Write a recursive function to calculate the SUM of digits. sum_digits(123) → 6.",
    promptZh: "写一个递归函数计算各位数之和。sum_digits(123) → 6。",
    starterCode: "def sum_digits(n):\\n    pass\\n\\nprint(sum_digits(123))\\nprint(sum_digits(9999))\\nprint(sum_digits(0))",
    expectedOutput: "6\\n36\\n0",
    hint: "Base case: n < 10 → return n. Recursive: n%10 + sum_digits(n//10).",
    hintZh: "基本情况：n < 10 → 返回 n。递归：n%10 + sum_digits(n//10)。",
    solution: "def sum_digits(n):\\n    if n < 10: return n\\n    return n % 10 + sum_digits(n // 10)\\n\\nprint(sum_digits(123))\\nprint(sum_digits(9999))\\nprint(sum_digits(0))",
  },
  "The Call Stack — How Recursion Works Inside": {
    prompt: "Write a recursive countdown from n to 1, then print 'Blast off!'.",
    promptZh: "写一个从 n 到 1 的递归倒计时，然后打印 'Blast off!'。",
    starterCode: "def countdown(n):\\n    pass\\n\\ncountdown(3)",
    expectedOutput: "3\\n2\\n1\\nBlast off!",
    hint: "Base case: n == 0 → print 'Blast off!'. Print n, then countdown(n-1).",
    hintZh: "基本情况：n == 0 → 打印 'Blast off!'。打印 n，然后 countdown(n-1)。",
    solution: "def countdown(n):\\n    if n == 0:\\n        print('Blast off!')\\n        return\\n    print(n)\\n    countdown(n - 1)\\n\\ncountdown(3)",
  },
  "More Recursive Examples": {
    prompt: "Write a recursive function to reverse a string. reverse('hello') → 'olleh'.",
    promptZh: "写一个递归函数反转字符串。",
    starterCode: "def reverse(s):\\n    pass\\n\\nprint(reverse('hello'))\\nprint(reverse('abcd'))\\nprint(reverse('a'))",
    expectedOutput: "olleh\\ndcba\\na",
    hint: "Base case: len(s) <= 1. Recursive: reverse(s[1:]) + s[0].",
    hintZh: "基本情况：len(s) <= 1。递归：reverse(s[1:]) + s[0]。",
    solution: "def reverse(s):\\n    if len(s) <= 1: return s\\n    return reverse(s[1:]) + s[0]\\n\\nprint(reverse('hello'))\\nprint(reverse('abcd'))\\nprint(reverse('a'))",
  },
  "Pattern 1: Linear Recursion": {
    prompt: "Write a recursive function to calculate the product of all elements in a list.",
    promptZh: "写一个递归函数计算列表所有元素的乘积。",
    starterCode: "def product(arr):\\n    pass\\n\\nprint(product([1,2,3,4,5]))\\nprint(product([3,7]))",
    expectedOutput: "120\\n21",
    hint: "Base case: empty list → 1. Recursive: arr[0] * product(arr[1:]).",
    hintZh: "基本情况：空列表 → 1。递归：arr[0] * product(arr[1:])。",
    solution: "def product(arr):\\n    if not arr: return 1\\n    return arr[0] * product(arr[1:])\\n\\nprint(product([1,2,3,4,5]))\\nprint(product([3,7]))",
  },
  "Pattern 2: Tree Recursion": {
    prompt: "Count ways to climb n stairs (1 or 2 steps at a time).",
    promptZh: "计算爬 n 级楼梯的方式数（每次 1 或 2 步）。",
    starterCode: "def climb_stairs(n):\\n    pass\\n\\nprint(climb_stairs(1))\\nprint(climb_stairs(3))\\nprint(climb_stairs(5))",
    expectedOutput: "1\\n3\\n8",
    hint: "Base: n<=1 → 1. Recursive: climb(n-1) + climb(n-2).",
    hintZh: "基本：n<=1 → 1。递归：climb(n-1) + climb(n-2)。",
    solution: "def climb_stairs(n):\\n    if n <= 1: return 1\\n    return climb_stairs(n-1) + climb_stairs(n-2)\\n\\nprint(climb_stairs(1))\\nprint(climb_stairs(3))\\nprint(climb_stairs(5))",
  },
  "Pattern 3: Helper Function & Accumulator": {
    prompt: "Rewrite factorial with a helper using an accumulator (tail recursion style).",
    promptZh: "用带累加器的辅助函数重写阶乘。",
    starterCode: "def factorial(n):\\n    def helper(n, acc):\\n        pass\\n    return helper(n, 1)\\n\\nprint(factorial(5))\\nprint(factorial(0))\\nprint(factorial(10))",
    expectedOutput: "120\\n1\\n3628800",
    hint: "Base: n <= 1 → return acc. Recursive: helper(n-1, acc*n).",
    hintZh: "基本：n <= 1 → 返回 acc。递归：helper(n-1, acc*n)。",
    solution: "def factorial(n):\\n    def helper(n, acc):\\n        if n <= 1: return acc\\n        return helper(n-1, acc*n)\\n    return helper(n, 1)\\n\\nprint(factorial(5))\\nprint(factorial(0))\\nprint(factorial(10))",
  },
  "Backtracking Template": {
    prompt: "Generate all subsets of [1, 2, 3] using backtracking.",
    promptZh: "用回溯法生成 [1, 2, 3] 的所有子集。",
    starterCode: "def subsets(nums):\\n    result = []\\n    def backtrack(start, current):\\n        pass\\n    backtrack(0, [])\\n    return result\\n\\nfor s in subsets([1,2,3]):\\n    print(s)",
    expectedOutput: "[]\\n[1]\\n[1, 2]\\n[1, 2, 3]\\n[1, 3]\\n[2]\\n[2, 3]\\n[3]",
    hint: "Add current to result. Try each element from start, backtrack after.",
    hintZh: "将 current 加入结果。从 start 尝试每个元素，之后回溯。",
    solution: "def subsets(nums):\\n    result = []\\n    def backtrack(start, current):\\n        result.append(current[:])\\n        for i in range(start, len(nums)):\\n            current.append(nums[i])\\n            backtrack(i+1, current)\\n            current.pop()\\n    backtrack(0, [])\\n    return result\\n\\nfor s in subsets([1,2,3]):\\n    print(s)",
  },
  "Permutations — All Arrangements": {
    prompt: "Generate all permutations of 'abc' as strings.",
    promptZh: "生成 'abc' 的所有排列字符串。",
    starterCode: "def permutations(s):\\n    result = []\\n    def backtrack(path, remaining):\\n        pass\\n    backtrack('', s)\\n    return result\\n\\nfor p in permutations('abc'):\\n    print(p)",
    expectedOutput: "abc\\nacb\\nbac\\nbca\\ncab\\ncba",
    hint: "Base: no remaining → add path. For each char, add to path, recurse without it.",
    hintZh: "基本：没有剩余 → 添加 path。对每个字符，加到 path，去掉它递归。",
    solution: "def permutations(s):\\n    result = []\\n    def backtrack(path, remaining):\\n        if not remaining:\\n            result.append(path)\\n            return\\n        for i in range(len(remaining)):\\n            backtrack(path + remaining[i], remaining[:i] + remaining[i+1:])\\n    backtrack('', s)\\n    return result\\n\\nfor p in permutations('abc'):\\n    print(p)",
  },
  "N-Queens: The Classic Backtracking Problem": {
    prompt: "Write a function to check if placing a queen at (row, col) is safe.",
    promptZh: "写一个函数检查在 (row, col) 放置皇后是否安全。",
    starterCode: "def is_safe(queens, row, col):\\n    # queens[i] = column of queen in row i\\n    pass\\n\\nprint(is_safe([0], 1, 2))\\nprint(is_safe([0], 1, 1))\\nprint(is_safe([0], 1, 0))",
    expectedOutput: "True\\nFalse\\nFalse",
    hint: "Check same column and diagonals: abs(queens[i]-col) == abs(i-row).",
    hintZh: "检查同列和对角线：abs(queens[i]-col) == abs(i-row)。",
    solution: "def is_safe(queens, row, col):\\n    for i in range(len(queens)):\\n        if queens[i] == col: return False\\n        if abs(queens[i]-col) == abs(i-row): return False\\n    return True\\n\\nprint(is_safe([0], 1, 2))\\nprint(is_safe([0], 1, 1))\\nprint(is_safe([0], 1, 0))",
  },
  "D&C Example: Maximum Subarray Sum": {
    prompt: "Find max subarray sum using Kadane's algorithm (O(n)).",
    promptZh: "用 Kadane 算法找到最大子数组和。",
    starterCode: "def max_subarray(arr):\\n    pass\\n\\nprint(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))\\nprint(max_subarray([-1,-2,-3]))",
    expectedOutput: "6\\n-1",
    hint: "Track current_sum and max_sum. Reset current if below current element.",
    hintZh: "跟踪 current_sum 和 max_sum。",
    solution: "def max_subarray(arr):\\n    max_sum = current = arr[0]\\n    for i in range(1, len(arr)):\\n        current = max(arr[i], current + arr[i])\\n        max_sum = max(max_sum, current)\\n    return max_sum\\n\\nprint(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))\\nprint(max_subarray([-1,-2,-3]))",
  },
  "D&C: Counting Inversions": {
    prompt: "Count inversions using O(n²) nested loops.",
    promptZh: "用 O(n²) 嵌套循环计算逆序对。",
    starterCode: "def count_inversions(arr):\\n    pass\\n\\nprint(count_inversions([2,4,1,3,5]))\\nprint(count_inversions([5,4,3,2,1]))",
    expectedOutput: "3\\n10",
    hint: "For each pair (i,j) where i<j, check if arr[i] > arr[j].",
    hintZh: "对每对 (i,j)，其中 i<j，检查 arr[i] > arr[j]。",
    solution: "def count_inversions(arr):\\n    count = 0\\n    for i in range(len(arr)):\\n        for j in range(i+1, len(arr)):\\n            if arr[i] > arr[j]: count += 1\\n    return count\\n\\nprint(count_inversions([2,4,1,3,5]))\\nprint(count_inversions([5,4,3,2,1]))",
  },
  "Fast Exponentiation — D&C Style": {
    prompt: "Implement fast power ITERATIVELY (no recursion).",
    promptZh: "迭代实现快速幂（不用递归）。",
    starterCode: "def fast_pow(base, exp):\\n    pass\\n\\nprint(fast_pow(2, 10))\\nprint(fast_pow(3, 5))\\nprint(fast_pow(5, 0))",
    expectedOutput: "1024\\n243\\n1",
    hint: "result=1. While exp>0: if odd, result*=base. Square base, halve exp.",
    hintZh: "result=1。当 exp>0：奇数则 result*=base。base 平方，exp 减半。",
    solution: "def fast_pow(base, exp):\\n    result = 1\\n    while exp > 0:\\n        if exp % 2 == 1: result *= base\\n        base *= base\\n        exp //= 2\\n    return result\\n\\nprint(fast_pow(2, 10))\\nprint(fast_pow(3, 5))\\nprint(fast_pow(5, 0))",
  },
  "The Problem: Slow Fibonacci": {
    prompt: "Count how many times fib(2) is called when computing fib(6).",
    promptZh: "计算 fib(6) 时 fib(2) 被调用了多少次。",
    starterCode: "count = 0\\ndef fib(n):\\n    global count\\n    pass\\n\\nresult = fib(6)\\nprint(result)\\nprint(count)",
    expectedOutput: "8\\n5",
    hint: "When n==2, increment count. Standard fib: 0→0, 1→1.",
    hintZh: "当 n==2 时增加 count。标准 fib：0→0，1→1。",
    solution: "count = 0\\ndef fib(n):\\n    global count\\n    if n == 2: count += 1\\n    if n <= 1: return n\\n    return fib(n-1) + fib(n-2)\\n\\nresult = fib(6)\\nprint(result)\\nprint(count)",
  },
  "The Fix: Memoization!": {
    prompt: "Implement Fibonacci with memoization. Count total function calls.",
    promptZh: "用记忆化实现斐波那契。统计总调用次数。",
    starterCode: "calls = 0\\ndef fib_memo(n, memo={}):\\n    global calls\\n    calls += 1\\n    pass\\n\\nprint(fib_memo(10))\\nprint(calls)",
    expectedOutput: "55\\n19",
    hint: "Check if n in memo first. Store result before returning.",
    hintZh: "先检查 n 是否在 memo 中。返回前存储结果。",
    solution: "calls = 0\\ndef fib_memo(n, memo={}):\\n    global calls\\n    calls += 1\\n    if n in memo: return memo[n]\\n    if n <= 1: return n\\n    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)\\n    return memo[n]\\n\\nprint(fib_memo(10))\\nprint(calls)",
  },
  "Classic DP: Climbing Stairs": {
    prompt: "Solve climbing stairs with 1, 2, or 3 steps allowed.",
    promptZh: "解决允许走 1、2 或 3 步的爬楼梯问题。",
    starterCode: "def climb3(n):\\n    pass\\n\\nprint(climb3(3))\\nprint(climb3(5))",
    expectedOutput: "4\\n13",
    hint: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]. Base: dp[0]=1, dp[1]=1, dp[2]=2.",
    hintZh: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]。",
    solution: "def climb3(n):\\n    if n <= 1: return 1\\n    if n == 2: return 2\\n    dp = [0]*(n+1)\\n    dp[0]=1; dp[1]=1; dp[2]=2\\n    for i in range(3, n+1):\\n        dp[i] = dp[i-1]+dp[i-2]+dp[i-3]\\n    return dp[n]\\n\\nprint(climb3(3))\\nprint(climb3(5))",
  },
  "Fibonacci: Three Ways": {
    prompt: "Implement Fibonacci using ONLY two variables (O(1) space).",
    promptZh: "只用两个变量实现斐波那契（O(1) 空间）。",
    starterCode: "def fib_const(n):\\n    pass\\n\\nprint(fib_const(0))\\nprint(fib_const(10))\\nprint(fib_const(20))",
    expectedOutput: "0\\n55\\n6765",
    hint: "prev=0, curr=1. Loop: prev, curr = curr, prev+curr.",
    hintZh: "prev=0, curr=1。循环：prev, curr = curr, prev+curr。",
    solution: "def fib_const(n):\\n    if n <= 1: return n\\n    prev, curr = 0, 1\\n    for _ in range(2, n+1):\\n        prev, curr = curr, prev+curr\\n    return curr\\n\\nprint(fib_const(0))\\nprint(fib_const(10))\\nprint(fib_const(20))",
  },
  "Classic DP: Coin Change": {
    prompt: "Find minimum coins to make 36 cents with [1, 5, 10, 25].",
    promptZh: "用 [1, 5, 10, 25] 凑 36 美分的最少硬币数。",
    starterCode: "def min_coins(coins, amount):\\n    pass\\n\\nprint(min_coins([1,5,10,25], 36))\\nprint(min_coins([1,5,10,25], 30))",
    expectedOutput: "3\\n2",
    hint: "dp[i] = min(dp[i-c] + 1) for each coin c <= i.",
    hintZh: "dp[i] = min(dp[i-c] + 1) 对每个 c <= i 的硬币。",
    solution: "def min_coins(coins, amount):\\n    dp = [float('inf')]*(amount+1)\\n    dp[0] = 0\\n    for i in range(1, amount+1):\\n        for c in coins:\\n            if c <= i and dp[i-c]+1 < dp[i]:\\n                dp[i] = dp[i-c]+1\\n    return dp[amount]\\n\\nprint(min_coins([1,5,10,25], 36))\\nprint(min_coins([1,5,10,25], 30))",
  },
  "0/1 Knapsack Problem": {
    prompt: "Solve knapsack: items=[(2,3),(3,4),(4,5),(5,6)], capacity=8. Print max value.",
    promptZh: "背包问题：物品=[(2,3),(3,4),(4,5),(5,6)]，容量=8。打印最大价值。",
    starterCode: "def knapsack(items, capacity):\\n    pass\\n\\nprint(knapsack([(2,3),(3,4),(4,5),(5,6)], 8))",
    expectedOutput: "10",
    hint: "2D DP: dp[i][w] = max value using first i items with capacity w.",
    hintZh: "二维 DP：dp[i][w] = 用前 i 个物品、容量 w 的最大价值。",
    solution: "def knapsack(items, capacity):\\n    n = len(items)\\n    dp = [[0]*(capacity+1) for _ in range(n+1)]\\n    for i in range(1, n+1):\\n        w, v = items[i-1]\\n        for c in range(capacity+1):\\n            dp[i][c] = dp[i-1][c]\\n            if w <= c:\\n                dp[i][c] = max(dp[i][c], dp[i-1][c-w]+v)\\n    return dp[n][capacity]\\n\\nprint(knapsack([(2,3),(3,4),(4,5),(5,6)], 8))",
  },
  "Longest Common Subsequence (LCS)": {
    prompt: "Find LCS length of 'ABCDE' and 'ACE'.",
    promptZh: "找出 'ABCDE' 和 'ACE' 的 LCS 长度。",
    starterCode: "def lcs_length(s1, s2):\\n    pass\\n\\nprint(lcs_length('ABCDE', 'ACE'))\\nprint(lcs_length('abc', 'def'))",
    expectedOutput: "3\\n0",
    hint: "dp[i][j]: if match, dp[i-1][j-1]+1; else max(dp[i-1][j], dp[i][j-1]).",
    hintZh: "dp[i][j]：匹配则 dp[i-1][j-1]+1，否则取最大值。",
    solution: "def lcs_length(s1, s2):\\n    m, n = len(s1), len(s2)\\n    dp = [[0]*(n+1) for _ in range(m+1)]\\n    for i in range(1, m+1):\\n        for j in range(1, n+1):\\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]+1\\n            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])\\n    return dp[m][n]\\n\\nprint(lcs_length('ABCDE', 'ACE'))\\nprint(lcs_length('abc', 'def'))",
  },
  "Longest Increasing Subsequence (LIS)": {
    prompt: "Find the actual LIS (not just length) for [10,9,2,5,3,7,101,18].",
    promptZh: "找到 [10,9,2,5,3,7,101,18] 的实际 LIS（不只是长度）。",
    starterCode: "def lis_sequence(arr):\\n    pass\\n\\nprint(lis_sequence([10,9,2,5,3,7,101,18]))",
    expectedOutput: "[2, 3, 7, 18]",
    hint: "Track parent pointers alongside dp array.",
    hintZh: "在 dp 数组之外跟踪父指针。",
    solution: "def lis_sequence(arr):\\n    n = len(arr)\\n    dp = [1]*n\\n    parent = [-1]*n\\n    for i in range(1, n):\\n        for j in range(i):\\n            if arr[j] < arr[i] and dp[j]+1 > dp[i]:\\n                dp[i] = dp[j]+1\\n                parent[i] = j\\n    idx = dp.index(max(dp))\\n    result = []\\n    while idx != -1:\\n        result.append(arr[idx])\\n        idx = parent[idx]\\n    return result[::-1]\\n\\nprint(lis_sequence([10,9,2,5,3,7,101,18]))",
  },
  "Grid Paths: Count All Paths": {
    prompt: "Count paths in a 4×4 grid (top-left to bottom-right, only right/down).",
    promptZh: "计算 4×4 网格的路径数。",
    starterCode: "def count_paths(m, n):\\n    pass\\n\\nprint(count_paths(4, 4))\\nprint(count_paths(3, 3))",
    expectedOutput: "20\\n6",
    hint: "dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row/col = 1.",
    hintZh: "dp[i][j] = dp[i-1][j] + dp[i][j-1]。第一行/列 = 1。",
    solution: "def count_paths(m, n):\\n    dp = [[1]*n for _ in range(m)]\\n    for i in range(1, m):\\n        for j in range(1, n):\\n            dp[i][j] = dp[i-1][j] + dp[i][j-1]\\n    return dp[m-1][n-1]\\n\\nprint(count_paths(4, 4))\\nprint(count_paths(3, 3))",
  },
  "Grid with Obstacles": {
    prompt: "Count paths in a grid with obstacles (0=open, 1=blocked).",
    promptZh: "计算有障碍网格的路径数。",
    starterCode: "def paths_obstacles(grid):\\n    pass\\n\\nprint(paths_obstacles([[0,0,0],[0,1,0],[0,0,0]]))",
    expectedOutput: "2",
    hint: "Same as grid paths, but dp[i][j] = 0 if blocked.",
    hintZh: "和网格路径一样，但阻塞处 dp[i][j] = 0。",
    solution: "def paths_obstacles(grid):\\n    m, n = len(grid), len(grid[0])\\n    dp = [[0]*n for _ in range(m)]\\n    for i in range(m):\\n        if grid[i][0] == 1: break\\n        dp[i][0] = 1\\n    for j in range(n):\\n        if grid[0][j] == 1: break\\n        dp[0][j] = 1\\n    for i in range(1, m):\\n        for j in range(1, n):\\n            if grid[i][j] == 0:\\n                dp[i][j] = dp[i-1][j] + dp[i][j-1]\\n    return dp[m-1][n-1]\\n\\nprint(paths_obstacles([[0,0,0],[0,1,0],[0,0,0]]))",
  },
  "Minimum Path Sum": {
    prompt: "Find minimum path sum AND the actual path as a list of cell values.",
    promptZh: "找到最小路径和以及实际路径。",
    starterCode: "def min_path_route(grid):\\n    # Return (min_sum, path_list)\\n    pass\\n\\ns, p = min_path_route([[1,3,1],[1,5,1],[4,2,1]])\\nprint(s)\\nprint(p)",
    expectedOutput: "7\\n[1, 3, 1, 1, 1]",
    hint: "Compute dp, then backtrack from bottom-right following minimum.",
    hintZh: "计算 dp，然后从右下角沿最小值回溯。",
    solution: "def min_path_route(grid):\\n    m, n = len(grid), len(grid[0])\\n    dp = [[0]*n for _ in range(m)]\\n    dp[0][0] = grid[0][0]\\n    for i in range(1,m): dp[i][0] = dp[i-1][0]+grid[i][0]\\n    for j in range(1,n): dp[0][j] = dp[0][j-1]+grid[0][j]\\n    for i in range(1,m):\\n        for j in range(1,n):\\n            dp[i][j] = min(dp[i-1][j], dp[i][j-1])+grid[i][j]\\n    path = []\\n    i, j = m-1, n-1\\n    while i > 0 or j > 0:\\n        path.append(grid[i][j])\\n        if i == 0: j -= 1\\n        elif j == 0: i -= 1\\n        elif dp[i-1][j] < dp[i][j-1]: i -= 1\\n        else: j -= 1\\n    path.append(grid[0][0])\\n    return dp[m-1][n-1], path[::-1]\\n\\ns, p = min_path_route([[1,3,1],[1,5,1],[4,2,1]])\\nprint(s)\\nprint(p)",
  },
  "BFS — Breadth-First Search": {
    prompt: "Implement BFS returning visit order from node 0.",
    promptZh: "实现 BFS，返回从节点 0 开始的访问顺序。",
    starterCode: "from collections import deque\\ndef bfs_order(graph, start):\\n    pass\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(bfs_order(g, 0))",
    expectedOutput: "[0, 1, 2, 3, 4]",
    hint: "Queue + visited set. Dequeue, add to result, enqueue neighbors.",
    hintZh: "队列 + 已访问集合。出队，加入结果，邻居入队。",
    solution: "from collections import deque\\ndef bfs_order(graph, start):\\n    visited = set([start])\\n    queue = deque([start])\\n    order = []\\n    while queue:\\n        node = queue.popleft()\\n        order.append(node)\\n        for nbr in graph.get(node, []):\\n            if nbr not in visited:\\n                visited.add(nbr)\\n                queue.append(nbr)\\n    return order\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(bfs_order(g, 0))",
  },
  "DFS — Depth-First Search": {
    prompt: "Implement iterative DFS using a stack. Return visit order.",
    promptZh: "用栈实现迭代 DFS。返回访问顺序。",
    starterCode: "def dfs_iter(graph, start):\\n    pass\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(dfs_iter(g, 0))",
    expectedOutput: "[0, 2, 4, 3, 1]",
    hint: "Stack. Pop, add if not visited, push neighbors (reversed).",
    hintZh: "栈。弹出，如果未访问则添加，压入邻居（反转）。",
    solution: "def dfs_iter(graph, start):\\n    visited = set()\\n    stack = [start]\\n    order = []\\n    while stack:\\n        node = stack.pop()\\n        if node not in visited:\\n            visited.add(node)\\n            order.append(node)\\n            for nbr in reversed(graph.get(node, [])):\\n                if nbr not in visited:\\n                    stack.append(nbr)\\n    return order\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(dfs_iter(g, 0))",
  },
  "Application: Shortest Path in Unweighted Graph": {
    prompt: "BFS to find shortest distance from node 0 to ALL nodes.",
    promptZh: "用 BFS 找到从节点 0 到所有节点的最短距离。",
    starterCode: "from collections import deque\\ndef bfs_distances(graph, start):\\n    pass\\n\\ng = {0:[1,2], 1:[0,3], 2:[0,3,4], 3:[1,2], 4:[2]}\\nprint(bfs_distances(g, 0))",
    expectedOutput: "{0: 0, 1: 1, 2: 1, 3: 2, 4: 2}",
    hint: "Track distance when first visiting each node.",
    hintZh: "首次访问时记录距离。",
    solution: "from collections import deque\\ndef bfs_distances(graph, start):\\n    dist = {start: 0}\\n    queue = deque([start])\\n    while queue:\\n        node = queue.popleft()\\n        for nbr in graph.get(node, []):\\n            if nbr not in dist:\\n                dist[nbr] = dist[node]+1\\n                queue.append(nbr)\\n    return dist\\n\\ng = {0:[1,2], 1:[0,3], 2:[0,3,4], 3:[1,2], 4:[2]}\\nprint(bfs_distances(g, 0))",
  },
  "Dijkstra's Algorithm": {
    prompt: "Find shortest distances from 'A' to all nodes using Dijkstra.",
    promptZh: "用 Dijkstra 找从 'A' 到所有节点的最短距离。",
    starterCode: "import heapq\\ndef dijkstra(graph, start):\\n    pass\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nprint(dijkstra(g, 'A'))",
    expectedOutput: "{'A': 0, 'B': 1, 'C': 3, 'D': 4}",
    hint: "Min-heap. Pop smallest, update neighbors if shorter path found.",
    hintZh: "最小堆。弹出最小距离，更新邻居。",
    solution: "import heapq\\ndef dijkstra(graph, start):\\n    dist = {start: 0}\\n    heap = [(0, start)]\\n    while heap:\\n        d, node = heapq.heappop(heap)\\n        if d > dist.get(node, float('inf')): continue\\n        for nbr, w in graph.get(node, []):\\n            nd = d + w\\n            if nd < dist.get(nbr, float('inf')):\\n                dist[nbr] = nd\\n                heapq.heappush(heap, (nd, nbr))\\n    return dist\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nprint(dijkstra(g, 'A'))",
  },
  "Dijkstra in a City Map": {
    prompt: "Modify Dijkstra to return the actual shortest PATH to a target.",
    promptZh: "修改 Dijkstra 返回到目标的实际最短路径。",
    starterCode: "import heapq\\ndef dijkstra_path(graph, start, end):\\n    # Return (distance, path_list)\\n    pass\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nd, p = dijkstra_path(g, 'A', 'D')\\nprint(d)\\nprint(p)",
    expectedOutput: "4\\n['A', 'B', 'C', 'D']",
    hint: "Track parent pointers. Backtrack from end to start.",
    hintZh: "跟踪父指针。从终点回溯到起点。",
    solution: "import heapq\\ndef dijkstra_path(graph, start, end):\\n    dist = {start: 0}\\n    parent = {start: None}\\n    heap = [(0, start)]\\n    while heap:\\n        d, node = heapq.heappop(heap)\\n        if node == end: break\\n        if d > dist.get(node, float('inf')): continue\\n        for nbr, w in graph.get(node, []):\\n            nd = d + w\\n            if nd < dist.get(nbr, float('inf')):\\n                dist[nbr] = nd\\n                parent[nbr] = node\\n                heapq.heappush(heap, (nd, nbr))\\n    path = []\\n    n = end\\n    while n is not None:\\n        path.append(n)\\n        n = parent.get(n)\\n    return dist[end], path[::-1]\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nd, p = dijkstra_path(g, 'A', 'D')\\nprint(d)\\nprint(p)",
  },
  "Kahn's Algorithm (BFS-based)": {
    prompt: "Implement Kahn's algorithm for topological sort.",
    promptZh: "实现 Kahn 拓扑排序算法。",
    starterCode: "from collections import deque\\ndef topo_sort(n, edges):\\n    pass\\n\\nprint(topo_sort(4, [(0,1),(0,2),(1,3),(2,3)]))",
    expectedOutput: "[0, 1, 2, 3]",
    hint: "Build in-degree array. Start with in-degree 0 nodes. Process queue.",
    hintZh: "建立入度数组。从入度 0 的节点开始。",
    solution: "from collections import deque\\ndef topo_sort(n, edges):\\n    adj = [[] for _ in range(n)]\\n    indeg = [0]*n\\n    for u, v in edges:\\n        adj[u].append(v)\\n        indeg[v] += 1\\n    q = deque([i for i in range(n) if indeg[i] == 0])\\n    order = []\\n    while q:\\n        node = q.popleft()\\n        order.append(node)\\n        for nbr in adj[node]:\\n            indeg[nbr] -= 1\\n            if indeg[nbr] == 0: q.append(nbr)\\n    return order\\n\\nprint(topo_sort(4, [(0,1),(0,2),(1,3),(2,3)]))",
  },
  "DFS-based Topological Sort": {
    prompt: "Implement DFS-based topological sort with post-order reversal.",
    promptZh: "用后序遍历反转实现 DFS 拓扑排序。",
    starterCode: "def topo_dfs(n, edges):\\n    pass\\n\\nprint(topo_dfs(4, [(0,1),(0,2),(1,3),(2,3)]))",
    expectedOutput: "[0, 2, 1, 3]",
    hint: "DFS each unvisited node. Append after visiting all neighbors. Reverse.",
    hintZh: "DFS 每个未访问节点。访问完邻居后添加。反转。",
    solution: "def topo_dfs(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges: adj[u].append(v)\\n    visited = set()\\n    stack = []\\n    def dfs(node):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited: dfs(nbr)\\n        stack.append(node)\\n    for i in range(n):\\n        if i not in visited: dfs(i)\\n    return stack[::-1]\\n\\nprint(topo_dfs(4, [(0,1),(0,2),(1,3),(2,3)]))",
  },
  "Cycle Detection": {
    prompt: "Detect if an undirected graph has a cycle using DFS.",
    promptZh: "用 DFS 检测无向图是否有环。",
    starterCode: "def has_cycle(n, edges):\\n    pass\\n\\nprint(has_cycle(4, [(0,1),(1,2),(2,3)]))\\nprint(has_cycle(4, [(0,1),(1,2),(2,3),(3,0)]))",
    expectedOutput: "False\\nTrue",
    hint: "DFS with parent tracking. Visited neighbor ≠ parent → cycle!",
    hintZh: "带父节点跟踪的 DFS。已访问邻居 ≠ 父节点 → 有环！",
    solution: "def has_cycle(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v); adj[v].append(u)\\n    visited = set()\\n    def dfs(node, parent):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited:\\n                if dfs(nbr, node): return True\\n            elif nbr != parent: return True\\n        return False\\n    for i in range(n):\\n        if i not in visited:\\n            if dfs(i, -1): return True\\n    return False\\n\\nprint(has_cycle(4, [(0,1),(1,2),(2,3)]))\\nprint(has_cycle(4, [(0,1),(1,2),(2,3),(3,0)]))",
  },
  "Bipartite Graph Check": {
    prompt: "Check if a graph is bipartite using BFS coloring.",
    promptZh: "用 BFS 着色检查图是否二部图。",
    starterCode: "from collections import deque\\ndef is_bipartite(n, edges):\\n    pass\\n\\nprint(is_bipartite(4, [(0,1),(1,2),(2,3)]))\\nprint(is_bipartite(3, [(0,1),(1,2),(2,0)]))",
    expectedOutput: "True\\nFalse",
    hint: "Color neighbors with opposite color. Conflict → not bipartite.",
    hintZh: "给邻居着相反颜色。冲突 → 不是二部图。",
    solution: "from collections import deque\\ndef is_bipartite(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v); adj[v].append(u)\\n    color = [-1]*n\\n    for s in range(n):\\n        if color[s] != -1: continue\\n        color[s] = 0\\n        q = deque([s])\\n        while q:\\n            node = q.popleft()\\n            for nbr in adj[node]:\\n                if color[nbr] == -1:\\n                    color[nbr] = 1 - color[node]\\n                    q.append(nbr)\\n                elif color[nbr] == color[node]: return False\\n    return True\\n\\nprint(is_bipartite(4, [(0,1),(1,2),(2,3)]))\\nprint(is_bipartite(3, [(0,1),(1,2),(2,0)]))",
  },
  "Graph Applications Showcase": {
    prompt: "Count connected components in an undirected graph using DFS.",
    promptZh: "用 DFS 计算无向图的连通分量数。",
    starterCode: "def count_components(n, edges):\\n    pass\\n\\nprint(count_components(5, [(0,1),(2,3)]))\\nprint(count_components(4, [(0,1),(1,2),(2,3)]))",
    expectedOutput: "3\\n1",
    hint: "DFS from each unvisited node. Each DFS call = one component.",
    hintZh: "从每个未访问节点 DFS。每次 = 一个连通分量。",
    solution: "def count_components(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v); adj[v].append(u)\\n    visited = set()\\n    count = 0\\n    def dfs(node):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited: dfs(nbr)\\n    for i in range(n):\\n        if i not in visited:\\n            dfs(i); count += 1\\n    return count\\n\\nprint(count_components(5, [(0,1),(2,3)]))\\nprint(count_components(4, [(0,1),(1,2),(2,3)]))",
  },
};

// ══════════════════════════════════════════════
// STEP 3: Insert exercises into code sections
// ══════════════════════════════════════════════

function escapeForTemplate(obj) {
  // Format exercise object as TypeScript
  let s = '      exercise: {\n';
  for (const [key, val] of Object.entries(obj)) {
    const escaped = val.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    s += `        ${key}: "${escaped}",\n`;
  }
  s += '      },';
  return s;
}

// Work backwards to not mess up line numbers
let insertions = []; // { line, text }

for (const cs of codeSections) {
  const ex = exerciseMap[cs.contentKey];
  if (ex) {
    insertions.push({
      line: cs.codeEndLine,
      text: escapeForTemplate(ex),
    });
  } else {
    console.log(`No exercise for: "${cs.contentKey}"`);
  }
}

// Sort by line descending so we insert bottom-up
insertions.sort((a, b) => b.line - a.line);

for (const ins of insertions) {
  lines.splice(ins.line + 1, 0, ins.text);
}

console.log(`Inserted ${insertions.length} exercises`);

// ══════════════════════════════════════════════
// STEP 4: Write result
// ══════════════════════════════════════════════

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Done! File updated.');
