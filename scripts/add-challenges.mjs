// Add challenge sections before each quiz in alg-lessons.ts
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '..', 'src', 'data', 'alg-lessons.ts');
let src = fs.readFileSync(filePath, 'utf8');
const lines = src.split('\n');

// Find each quiz section line and the lesson it belongs to
const lessonStarts = [];
for (let i = 0; i < lines.length; i++) {
  const m = lines[i].match(/^const (alg_\d+_\d+): Lesson/);
  if (m) lessonStarts.push({ name: m[1], line: i });
}

const quizLines = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === 'type: "quiz",') {
    // Find which lesson this belongs to
    let lessonName = '';
    for (let j = lessonStarts.length - 1; j >= 0; j--) {
      if (lessonStarts[j].line < i) {
        lessonName = lessonStarts[j].name;
        break;
      }
    }
    // Find the opening brace of this quiz section (the { before type: "quiz")
    let braceLineIdx = i;
    for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
      if (lines[j].trim() === '{') {
        braceLineIdx = j;
        break;
      }
    }
    quizLines.push({ line: braceLineIdx, lessonName });
  }
}

console.log(`Found ${quizLines.length} quiz sections`);

// Challenges per lesson
const challengesByLesson = {
  "alg_1_1": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔍 Frequency Counter · 频率计数器",
        description: "Write a function that finds the MOST FREQUENT element in an array. Return (element, count).\\n写一个函数找到数组中出现最多的元素。返回 (元素, 次数)。",
        starterCode: "def most_frequent(arr):\\n    # Find most frequent element\\n    pass\\n\\nprint(most_frequent([1,3,2,1,4,1,3,1]))",
        hint: "Use a dictionary to count occurrences, then find the max.\\n用字典计数，然后找最大值。",
        solution: "def most_frequent(arr):\\n    counts = {}\\n    for x in arr:\\n        counts[x] = counts.get(x, 0) + 1\\n    best = max(counts, key=counts.get)\\n    return (best, counts[best])\\n\\nprint(most_frequent([1,3,2,1,4,1,3,1]))",
        expectedOutput: "(1, 4)",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎯 Two Sum · 两数之和",
        description: "Find TWO elements that add up to target. Return their indices.\\n找两个加起来等于目标的元素。返回索引。",
        starterCode: "def two_sum(arr, target):\\n    pass\\n\\nprint(two_sum([2, 7, 11, 15], 9))",
        hint: "Use a dictionary to store seen values and their indices.\\n用字典存已见的值和索引。",
        solution: "def two_sum(arr, target):\\n    seen = {}\\n    for i, x in enumerate(arr):\\n        if target - x in seen:\\n            return (seen[target - x], i)\\n        seen[x] = i\\n\\nprint(two_sum([2, 7, 11, 15], 9))",
        expectedOutput: "(0, 1)",
      },
    }`,
  ],
  "alg_1_2": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📖 Count Occurrences · 计算出现次数",
        description: "Count how many times target appears in sorted array using binary search (O(log n)).\\n用二分搜索计算排序数组中目标出现次数。",
        starterCode: "def count_occurrences(arr, target):\\n    pass\\n\\nprint(count_occurrences([1,2,2,2,3,4,5], 2))\\nprint(count_occurrences([1,2,3,4,5], 6))",
        hint: "Find leftmost and rightmost positions with binary search.\\n用二分搜索找最左和最右位置。",
        solution: "def count_occurrences(arr, target):\\n    def find_left(t):\\n        lo, hi = 0, len(arr)-1\\n        while lo <= hi:\\n            mid = (lo+hi)//2\\n            if arr[mid] < t: lo = mid+1\\n            else: hi = mid-1\\n        return lo\\n    left = find_left(target)\\n    right = find_left(target+1)\\n    return right - left\\n\\nprint(count_occurrences([1,2,2,2,3,4,5], 2))\\nprint(count_occurrences([1,2,3,4,5], 6))",
        expectedOutput: "3\\n0",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎯 Peak Finder · 峰值查找",
        description: "Find a peak element using binary search. A peak is greater than its neighbors.\\n用二分搜索找峰值元素。",
        starterCode: "def find_peak(arr):\\n    pass\\n\\nprint(find_peak([1, 3, 20, 4, 1, 0]))",
        hint: "If arr[mid] < arr[mid+1], peak is on the right.\\n如果 arr[mid] < arr[mid+1]，峰值在右边。",
        solution: "def find_peak(arr):\\n    lo, hi = 0, len(arr)-1\\n    while lo < hi:\\n        mid = (lo+hi)//2\\n        if arr[mid] < arr[mid+1]: lo = mid+1\\n        else: hi = mid\\n    return lo\\n\\nprint(find_peak([1, 3, 20, 4, 1, 0]))",
        expectedOutput: "2",
      },
    }`,
  ],
  "alg_1_3": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🗺️ Island Counter · 岛屿计数器",
        description: "Count islands (connected 1s) in a 2D grid.\\n计算二维网格中岛屿数。",
        starterCode: "def count_islands(grid):\\n    pass\\n\\ngrid = [[1,1,0,0],[1,0,0,0],[0,0,1,1],[0,0,0,1]]\\nprint(count_islands(grid))",
        hint: "DFS from each unvisited 1. Each DFS = one island.\\n从每个未访问的 1 开始 DFS。每次 = 一个岛屿。",
        solution: "def count_islands(grid):\\n    rows, cols = len(grid), len(grid[0])\\n    count = 0\\n    def dfs(r, c):\\n        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == 0: return\\n        grid[r][c] = 0\\n        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)\\n    for r in range(rows):\\n        for c in range(cols):\\n            if grid[r][c] == 1:\\n                count += 1\\n                dfs(r, c)\\n    return count\\n\\ngrid = [[1,1,0,0],[1,0,0,0],[0,0,1,1],[0,0,0,1]]\\nprint(count_islands(grid))",
        expectedOutput: "2",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Spiral Matrix · 螺旋矩阵",
        description: "Print a matrix in spiral order (clockwise from top-left).\\n按螺旋顺序打印矩阵。",
        starterCode: "def spiral_order(matrix):\\n    pass\\n\\nprint(spiral_order([[1,2,3],[4,5,6],[7,8,9]]))",
        hint: "Use four boundaries: top, bottom, left, right. Shrink after each direction.\\n用四个边界：上、下、左、右。每个方向后缩小。",
        solution: "def spiral_order(matrix):\\n    result = []\\n    top, bottom = 0, len(matrix)-1\\n    left, right = 0, len(matrix[0])-1\\n    while top <= bottom and left <= right:\\n        for c in range(left, right+1): result.append(matrix[top][c])\\n        top += 1\\n        for r in range(top, bottom+1): result.append(matrix[r][right])\\n        right -= 1\\n        if top <= bottom:\\n            for c in range(right, left-1, -1): result.append(matrix[bottom][c])\\n            bottom -= 1\\n        if left <= right:\\n            for r in range(bottom, top-1, -1): result.append(matrix[r][left])\\n            left += 1\\n    return result\\n\\nprint(spiral_order([[1,2,3],[4,5,6],[7,8,9]]))",
        expectedOutput: "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
      },
    }`,
  ],
  "alg_1_4": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📏 Min Difference Pair · 最小差值对",
        description: "In a sorted array, find the pair with smallest absolute difference.\\n在排序数组中找绝对差最小的对。",
        starterCode: "def min_diff_pair(arr):\\n    pass\\n\\nprint(min_diff_pair([1, 3, 4, 8, 13, 17, 20]))",
        hint: "Minimum difference is always between adjacent elements in sorted array.\\n最小差值一定在排序数组的相邻元素之间。",
        solution: "def min_diff_pair(arr):\\n    min_d = float('inf')\\n    pair = (arr[0], arr[1])\\n    for i in range(len(arr)-1):\\n        d = arr[i+1]-arr[i]\\n        if d < min_d:\\n            min_d = d\\n            pair = (arr[i], arr[i+1])\\n    return pair\\n\\nprint(min_diff_pair([1, 3, 4, 8, 13, 17, 20]))",
        expectedOutput: "(3, 4)",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Bitonic Search · 双调搜索",
        description: "Search in a bitonic array (first increases then decreases) in O(log n).\\n在双调数组中 O(log n) 搜索。",
        starterCode: "def bitonic_search(arr, target):\\n    pass\\n\\nprint(bitonic_search([1,3,8,12,4,2], 4))\\nprint(bitonic_search([1,3,8,12,4,2], 13))",
        hint: "Find peak, then binary search both halves.\\n找到峰值，然后对两半分别二分搜索。",
        solution: "def bitonic_search(arr, target):\\n    lo, hi = 0, len(arr)-1\\n    while lo < hi:\\n        mid = (lo+hi)//2\\n        if arr[mid] < arr[mid+1]: lo = mid+1\\n        else: hi = mid\\n    peak = lo\\n    def bsearch(lo, hi, asc=True):\\n        while lo <= hi:\\n            mid = (lo+hi)//2\\n            if arr[mid] == target: return mid\\n            if asc:\\n                if arr[mid] < target: lo = mid+1\\n                else: hi = mid-1\\n            else:\\n                if arr[mid] > target: lo = mid+1\\n                else: hi = mid-1\\n        return -1\\n    r = bsearch(0, peak, True)\\n    return r if r != -1 else bsearch(peak, len(arr)-1, False)\\n\\nprint(bitonic_search([1,3,8,12,4,2], 4))\\nprint(bitonic_search([1,3,8,12,4,2], 13))",
        expectedOutput: "4\\n-1",
      },
    }`,
  ],
  "alg_2_1": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎨 Dutch National Flag · 荷兰国旗",
        description: "Sort array of 0s, 1s, 2s in ONE pass.\\n一趟排序 0、1、2 数组。",
        starterCode: "def dutch_flag(arr):\\n    pass\\n\\nprint(dutch_flag([2,0,1,2,1,0,0,2,1]))",
        hint: "Three pointers: lo (0s), mid (current), hi (2s).\\n三指针：lo（0）、mid（当前）、hi（2）。",
        solution: "def dutch_flag(arr):\\n    a = arr[:]\\n    lo, mid, hi = 0, 0, len(a)-1\\n    while mid <= hi:\\n        if a[mid] == 0:\\n            a[lo], a[mid] = a[mid], a[lo]\\n            lo += 1; mid += 1\\n        elif a[mid] == 1: mid += 1\\n        else:\\n            a[mid], a[hi] = a[hi], a[mid]\\n            hi -= 1\\n    return a\\n\\nprint(dutch_flag([2,0,1,2,1,0,0,2,1]))",
        expectedOutput: "[0, 0, 0, 1, 1, 1, 2, 2, 2]",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Stable Sort Test · 稳定排序测试",
        description: "Sort (name, score) tuples by score. Keep original order for ties (stable).\\n按分数排序元组。相同分数保持原序。",
        starterCode: "def stable_sort(students):\\n    pass\\n\\nfor s in stable_sort([('Alice',85),('Bob',92),('Carol',85),('Dave',92)]):\\n    print(s)",
        hint: "Insertion sort is naturally stable.\\n插入排序天然稳定。",
        solution: "def stable_sort(students):\\n    a = students[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i-1\\n        while j >= 0 and a[j][1] > key[1]:\\n            a[j+1] = a[j]; j -= 1\\n        a[j+1] = key\\n    return a\\n\\nfor s in stable_sort([('Alice',85),('Bob',92),('Carol',85),('Dave',92)]):\\n    print(s)",
        expectedOutput: "('Alice', 85)\\n('Carol', 85)\\n('Bob', 92)\\n('Dave', 92)",
      },
    }`,
  ],
  "alg_2_2": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔗 Merge K Lists · 合并 K 个列表",
        description: "Merge 3 sorted lists into one.\\n合并 3 个排序列表。",
        starterCode: "def merge_k(lists):\\n    pass\\n\\nprint(merge_k([[1,4,7],[2,5,8],[3,6,9]]))",
        hint: "Merge first two, then merge result with third.\\n先合并前两个，再和第三个合并。",
        solution: "def merge_k(lists):\\n    def merge(a, b):\\n        r = []; i = j = 0\\n        while i < len(a) and j < len(b):\\n            if a[i] <= b[j]: r.append(a[i]); i += 1\\n            else: r.append(b[j]); j += 1\\n        r.extend(a[i:]); r.extend(b[j:])\\n        return r\\n    result = lists[0]\\n    for i in range(1, len(lists)):\\n        result = merge(result, lists[i])\\n    return result\\n\\nprint(merge_k([[1,4,7],[2,5,8],[3,6,9]]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Merge Sort Inversion Count · 归并排序逆序对",
        description: "Count inversions using merge sort in O(n log n).\\n用归并排序 O(n log n) 计算逆序对。",
        starterCode: "def count_inv(arr):\\n    # Return (sorted, count)\\n    pass\\n\\n_, c = count_inv([5,4,3,2,1])\\nprint(c)",
        hint: "During merge: when right < left, count += len(left) - i.\\n合并时：右 < 左，count += len(left) - i。",
        solution: "def count_inv(arr):\\n    if len(arr) <= 1: return arr, 0\\n    mid = len(arr)//2\\n    left, li = count_inv(arr[:mid])\\n    right, ri = count_inv(arr[mid:])\\n    merged = []; inv = li + ri; i = j = 0\\n    while i < len(left) and j < len(right):\\n        if left[i] <= right[j]: merged.append(left[i]); i += 1\\n        else: merged.append(right[j]); j += 1; inv += len(left)-i\\n    merged.extend(left[i:]); merged.extend(right[j:])\\n    return merged, inv\\n\\n_, c = count_inv([5,4,3,2,1])\\nprint(c)",
        expectedOutput: "10",
      },
    }`,
  ],
  "alg_2_3": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎲 Kth Smallest · 第 K 小",
        description: "Find kth smallest using Quick Select (average O(n)).\\n用快速选择找第 k 小。",
        starterCode: "def kth_smallest(arr, k):\\n    pass\\n\\nprint(kth_smallest([7,10,4,3,20,15], 3))\\nprint(kth_smallest([7,10,4,3,20,15], 1))",
        hint: "Partition, check pivot position vs k-1, recurse on correct half.\\n分区，检查枢轴位置和 k-1 的关系，递归正确的一半。",
        solution: "def kth_smallest(arr, k):\\n    a = arr[:]\\n    def select(lo, hi, k):\\n        pivot = a[hi]; i = lo\\n        for j in range(lo, hi):\\n            if a[j] <= pivot: a[i], a[j] = a[j], a[i]; i += 1\\n        a[i], a[hi] = a[hi], a[i]\\n        if i == k-1: return a[i]\\n        elif i > k-1: return select(lo, i-1, k)\\n        else: return select(i+1, hi, k)\\n    return select(0, len(a)-1, k)\\n\\nprint(kth_smallest([7,10,4,3,20,15], 3))\\nprint(kth_smallest([7,10,4,3,20,15], 1))",
        expectedOutput: "7\\n3",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔀 Three-Way Partition · 三路分区",
        description: "Split array into < pivot, == pivot, > pivot.\\n将数组分为 < 枢轴、== 枢轴、> 枢轴。",
        starterCode: "def three_way(arr, pivot):\\n    pass\\n\\nlo, eq, hi = three_way([4,9,4,4,1,9,4,4,9,4,4,1,4], 4)\\nprint(lo)\\nprint(eq)\\nprint(hi)",
        hint: "Three lists, compare each element to pivot.\\n三个列表，每个元素与枢轴比较。",
        solution: "def three_way(arr, pivot):\\n    return [x for x in arr if x < pivot], [x for x in arr if x == pivot], [x for x in arr if x > pivot]\\n\\nlo, eq, hi = three_way([4,9,4,4,1,9,4,4,9,4,4,1,4], 4)\\nprint(lo)\\nprint(eq)\\nprint(hi)",
        expectedOutput: "[1, 1]\\n[4, 4, 4, 4, 4, 4, 4, 4]\\n[9, 9, 9]",
      },
    }`,
  ],
  "alg_2_4": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Counting Sort · 计数排序",
        description: "Implement counting sort for integers in [0, k]. O(n+k) time!\\n实现 [0, k] 范围计数排序。",
        starterCode: "def counting_sort(arr, k):\\n    pass\\n\\nprint(counting_sort([4,2,2,8,3,3,1], 8))",
        hint: "Count occurrences, rebuild from counts.\\n统计出现次数，从计数重建。",
        solution: "def counting_sort(arr, k):\\n    count = [0]*(k+1)\\n    for x in arr: count[x] += 1\\n    result = []\\n    for i in range(k+1): result.extend([i]*count[i])\\n    return result\\n\\nprint(counting_sort([4,2,2,8,3,3,1], 8))",
        expectedOutput: "[1, 2, 2, 3, 3, 4, 8]",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🏆 Sort Olympics · 排序奥运会",
        description: "Implement all three simple sorts and verify same output.\\n实现三种简单排序并验证结果相同。",
        starterCode: "data = [64, 34, 25, 12, 22, 11, 90]\\ndef bubble(a): pass\\ndef selection(a): pass\\ndef insertion(a): pass\\n\\nprint(bubble(data[:]))\\nprint(selection(data[:]))\\nprint(insertion(data[:]))",
        hint: "Implement each independently. All should produce the same sorted array.\\n独立实现每种。都应产生相同的排序数组。",
        solution: "data = [64, 34, 25, 12, 22, 11, 90]\\ndef bubble(a):\\n    for i in range(len(a)):\\n        for j in range(len(a)-1-i):\\n            if a[j]>a[j+1]: a[j],a[j+1]=a[j+1],a[j]\\n    return a\\ndef selection(a):\\n    for i in range(len(a)):\\n        m=i\\n        for j in range(i+1,len(a)):\\n            if a[j]<a[m]: m=j\\n        a[i],a[m]=a[m],a[i]\\n    return a\\ndef insertion(a):\\n    for i in range(1,len(a)):\\n        key=a[i]; j=i-1\\n        while j>=0 and a[j]>key: a[j+1]=a[j]; j-=1\\n        a[j+1]=key\\n    return a\\nprint(bubble(data[:]))\\nprint(selection(data[:]))\\nprint(insertion(data[:]))",
        expectedOutput: "[11, 12, 22, 25, 34, 64, 90]\\n[11, 12, 22, 25, 34, 64, 90]\\n[11, 12, 22, 25, 34, 64, 90]",
      },
    }`,
  ],
  "alg_3_1": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌀 Recursive Power · 递归幂",
        description: "Write recursive base^exp without ** operator.\\n不用 ** 运算符写递归幂。",
        starterCode: "def power(base, exp):\\n    pass\\n\\nprint(power(2, 10))\\nprint(power(3, 0))\\nprint(power(5, 3))",
        hint: "Base case: exp==0 → 1. Recursive: base * power(base, exp-1).\\n基本情况：exp==0 → 1。递归：base * power(base, exp-1)。",
        solution: "def power(base, exp):\\n    if exp == 0: return 1\\n    return base * power(base, exp-1)\\n\\nprint(power(2, 10))\\nprint(power(3, 0))\\nprint(power(5, 3))",
        expectedOutput: "1024\\n1\\n125",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Flatten Nested List · 展平嵌套列表",
        description: "Recursively flatten a nested list of any depth.\\n递归展平任意深度嵌套列表。",
        starterCode: "def flatten(lst):\\n    pass\\n\\nprint(flatten([1, [2, [3, 4], 5], [6, 7]]))",
        hint: "If item is list, recurse. Otherwise append.\\n如果是列表就递归。否则添加。",
        solution: "def flatten(lst):\\n    result = []\\n    for item in lst:\\n        if isinstance(item, list): result.extend(flatten(item))\\n        else: result.append(item)\\n    return result\\n\\nprint(flatten([1, [2, [3, 4], 5], [6, 7]]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6, 7]",
      },
    }`,
  ],
  "alg_3_2": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌳 Binary Tree Depth · 二叉树深度",
        description: "Find max depth of tree as nested tuples (val, left, right).\\n找嵌套元组树的最大深度。",
        starterCode: "def max_depth(tree):\\n    # tree = (val, left, right) or None\\n    pass\\n\\nt = (1, (2, (4, None, None), None), (3, None, (5, None, None)))\\nprint(max_depth(t))\\nprint(max_depth(None))",
        hint: "None → 0. Otherwise 1 + max(left depth, right depth).\\nNone → 0。否则 1 + max(左深度, 右深度)。",
        solution: "def max_depth(tree):\\n    if tree is None: return 0\\n    _, left, right = tree\\n    return 1 + max(max_depth(left), max_depth(right))\\n\\nt = (1, (2, (4, None, None), None), (3, None, (5, None, None)))\\nprint(max_depth(t))\\nprint(max_depth(None))",
        expectedOutput: "3\\n0",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Tower of Hanoi · 汉诺塔",
        description: "Solve Tower of Hanoi for 3 disks.\\n解决 3 个盘的汉诺塔。",
        starterCode: "def hanoi(n, src='A', tgt='C', aux='B'):\\n    pass\\n\\nhanoi(3)",
        hint: "Move n-1 to aux, move n to target, move n-1 from aux to target.\\n移 n-1 到辅助，移 n 到目标，移 n-1 从辅助到目标。",
        solution: "def hanoi(n, src='A', tgt='C', aux='B'):\\n    if n == 1:\\n        print(f'Move disk 1 from {src} to {tgt}')\\n        return\\n    hanoi(n-1, src, aux, tgt)\\n    print(f'Move disk {n} from {src} to {tgt}')\\n    hanoi(n-1, aux, tgt, src)\\n\\nhanoi(3)",
        expectedOutput: "Move disk 1 from A to C\\nMove disk 2 from A to B\\nMove disk 1 from C to B\\nMove disk 3 from A to C\\nMove disk 1 from B to A\\nMove disk 2 from B to C\\nMove disk 1 from A to C",
      },
    }`,
  ],
  "alg_3_3": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔤 Combination Sum · 组合总和",
        description: "Find all unique combinations summing to target. Numbers can repeat.\\n找所有和为目标的唯一组合。数字可重复。",
        starterCode: "def combo_sum(cands, target):\\n    result = []\\n    # backtrack here\\n    return result\\n\\nfor c in combo_sum([2,3,6,7], 7): print(c)",
        hint: "Backtrack with start index. Try each candidate >= start.\\n用起始索引回溯。",
        solution: "def combo_sum(cands, target):\\n    result = []\\n    def bt(start, cur, rem):\\n        if rem == 0: result.append(cur[:]); return\\n        for i in range(start, len(cands)):\\n            if cands[i] > rem: continue\\n            cur.append(cands[i])\\n            bt(i, cur, rem-cands[i])\\n            cur.pop()\\n    bt(0, [], target)\\n    return result\\n\\nfor c in combo_sum([2,3,6,7], 7): print(c)",
        expectedOutput: "[2, 2, 3]\\n[7]",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🧩 4×4 Sudoku Solver · 4×4 数独求解",
        description: "Solve a 4×4 sudoku (0 = empty) using backtracking.\\n用回溯解 4×4 数独。",
        starterCode: "def solve(board):\\n    pass\\n\\nb = [[1,0,0,4],[0,0,0,0],[0,0,0,0],[4,0,0,1]]\\nprint(solve(b))\\nfor r in b: print(r)",
        hint: "Find first 0, try 1-4, check row/col/2×2 box.\\n找第一个 0，尝试 1-4，检查行/列/2×2 方块。",
        solution: "def solve(board):\\n    def valid(r, c, num):\\n        for i in range(4):\\n            if board[r][i]==num or board[i][c]==num: return False\\n        br, bc = (r//2)*2, (c//2)*2\\n        for i in range(br,br+2):\\n            for j in range(bc,bc+2):\\n                if board[i][j]==num: return False\\n        return True\\n    for i in range(4):\\n        for j in range(4):\\n            if board[i][j]==0:\\n                for n in range(1,5):\\n                    if valid(i,j,n):\\n                        board[i][j]=n\\n                        if solve(board): return True\\n                        board[i][j]=0\\n                return False\\n    return True\\n\\nb = [[1,0,0,4],[0,0,0,0],[0,0,0,0],[4,0,0,1]]\\nprint(solve(b))\\nfor r in b: print(r)",
        expectedOutput: "True\\n[1, 2, 3, 4]\\n[3, 4, 1, 2]\\n[2, 1, 4, 3]\\n[4, 3, 2, 1]",
      },
    }`,
  ],
  "alg_3_4": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Closest Pair · 最近数对",
        description: "Find closest pair of numbers using sort + adjacent check.\\n用排序+相邻检查找最近数对。",
        starterCode: "def closest_pair(arr):\\n    pass\\n\\nprint(closest_pair([7, 1, 3, 10, 25, 8]))",
        hint: "Sort first. Closest pair must be adjacent.\\n先排序。最近对一定相邻。",
        solution: "def closest_pair(arr):\\n    s = sorted(arr)\\n    best = (s[0], s[1])\\n    for i in range(len(s)-1):\\n        if s[i+1]-s[i] < best[1]-best[0]:\\n            best = (s[i], s[i+1])\\n    return best\\n\\nprint(closest_pair([7, 1, 3, 10, 25, 8]))",
        expectedOutput: "(7, 8)",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "⚡ Majority Element · 多数元素",
        description: "Find element appearing > n/2 times using D&C (Boyer-Moore voting).\\n用分治（Boyer-Moore 投票）找出现 > n/2 次的元素。",
        starterCode: "def majority(arr):\\n    pass\\n\\nprint(majority([3,2,3]))\\nprint(majority([2,2,1,1,1,2,2]))",
        hint: "Boyer-Moore: keep candidate and count. If count=0, new candidate.\\nBoyer-Moore：维护候选和计数。计数=0 时换候选。",
        solution: "def majority(arr):\\n    candidate = count = 0\\n    for x in arr:\\n        if count == 0: candidate = x\\n        count += 1 if x == candidate else -1\\n    return candidate\\n\\nprint(majority([3,2,3]))\\nprint(majority([2,2,1,1,1,2,2]))",
        expectedOutput: "3\\n2",
      },
    }`,
  ],
  "alg_4_1": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🪙 Tribonacci · 三波那契",
        description: "Compute Tribonacci: T(n)=T(n-1)+T(n-2)+T(n-3). T(0)=0, T(1)=T(2)=1.\\n计算三波那契数。",
        starterCode: "def tribonacci(n):\\n    pass\\n\\nfor i in range(10): print(tribonacci(i), end=' ')",
        hint: "Same as Fibonacci memo, but three recursive calls.\\n和斐波那契记忆化一样，但三个递归。",
        solution: "def tribonacci(n, memo={}):\\n    if n in memo: return memo[n]\\n    if n == 0: return 0\\n    if n <= 2: return 1\\n    memo[n] = tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3)\\n    return memo[n]\\n\\nfor i in range(10): print(tribonacci(i), end=' ')",
        expectedOutput: "0 1 1 2 4 7 13 24 44 81 ",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🏠 House Robber · 打家劫舍",
        description: "Max money robbing non-adjacent houses. houses = [2,7,9,3,1].\\n抢劫不相邻房屋的最大金额。",
        starterCode: "def rob(houses):\\n    pass\\n\\nprint(rob([2,7,9,3,1]))\\nprint(rob([1,2,3,1]))",
        hint: "dp[i] = max(dp[i-1], dp[i-2] + houses[i]).\\ndp[i] = max(dp[i-1], dp[i-2] + houses[i])。",
        solution: "def rob(houses):\\n    if not houses: return 0\\n    if len(houses) == 1: return houses[0]\\n    dp = [0]*len(houses)\\n    dp[0] = houses[0]\\n    dp[1] = max(houses[0], houses[1])\\n    for i in range(2, len(houses)):\\n        dp[i] = max(dp[i-1], dp[i-2]+houses[i])\\n    return dp[-1]\\n\\nprint(rob([2,7,9,3,1]))\\nprint(rob([1,2,3,1]))",
        expectedOutput: "12\\n4",
      },
    }`,
  ],
  "alg_4_2": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🪙 Coin Combinations · 硬币组合",
        description: "Count the NUMBER of ways to make amount with given coins.\\n计算用给定硬币凑出金额的方式数。",
        starterCode: "def coin_ways(coins, amount):\\n    pass\\n\\nprint(coin_ways([1,2,5], 5))\\nprint(coin_ways([1,2], 3))",
        hint: "dp[i] += dp[i-coin] for each coin.\\ndp[i] += dp[i-coin]。",
        solution: "def coin_ways(coins, amount):\\n    dp = [0]*(amount+1)\\n    dp[0] = 1\\n    for c in coins:\\n        for i in range(c, amount+1):\\n            dp[i] += dp[i-c]\\n    return dp[amount]\\n\\nprint(coin_ways([1,2,5], 5))\\nprint(coin_ways([1,2], 3))",
        expectedOutput: "4\\n2",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Maximum Subarray DP · 最大子数组 DP",
        description: "Find max subarray sum using DP (Kadane's).\\n用 DP 找最大子数组和。",
        starterCode: "def max_sub(arr):\\n    pass\\n\\nprint(max_sub([-2,1,-3,4,-1,2,1,-5,4]))",
        hint: "dp[i] = max(arr[i], dp[i-1]+arr[i]).\\ndp[i] = max(arr[i], dp[i-1]+arr[i])。",
        solution: "def max_sub(arr):\\n    dp = arr[0]\\n    best = arr[0]\\n    for i in range(1, len(arr)):\\n        dp = max(arr[i], dp+arr[i])\\n        best = max(best, dp)\\n    return best\\n\\nprint(max_sub([-2,1,-3,4,-1,2,1,-5,4]))",
        expectedOutput: "6",
      },
    }`,
  ],
  "alg_4_3": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎒 Unbounded Knapsack · 完全背包",
        description: "Like 0/1 knapsack but items can be used unlimited times.\\n类似 0/1 背包但物品可无限使用。",
        starterCode: "def unbounded_knapsack(items, capacity):\\n    # items: [(weight, value)]\\n    pass\\n\\nprint(unbounded_knapsack([(2,3),(3,4),(4,5)], 7))",
        hint: "dp[w] = max(dp[w], dp[w-weight]+value) for each item.\\ndp[w] = max(dp[w], dp[w-weight]+value)。",
        solution: "def unbounded_knapsack(items, capacity):\\n    dp = [0]*(capacity+1)\\n    for w in range(1, capacity+1):\\n        for wt, val in items:\\n            if wt <= w:\\n                dp[w] = max(dp[w], dp[w-wt]+val)\\n    return dp[capacity]\\n\\nprint(unbounded_knapsack([(2,3),(3,4),(4,5)], 7))",
        expectedOutput: "10",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📝 Edit Distance · 编辑距离",
        description: "Find minimum edits (insert/delete/replace) to convert s1 to s2.\\n找将 s1 转为 s2 的最少编辑次数。",
        starterCode: "def edit_distance(s1, s2):\\n    pass\\n\\nprint(edit_distance('kitten', 'sitting'))\\nprint(edit_distance('abc', 'abc'))",
        hint: "dp[i][j] = min of insert, delete, replace operations.\\ndp[i][j] = 插入、删除、替换的最小值。",
        solution: "def edit_distance(s1, s2):\\n    m, n = len(s1), len(s2)\\n    dp = [[0]*(n+1) for _ in range(m+1)]\\n    for i in range(m+1): dp[i][0] = i\\n    for j in range(n+1): dp[0][j] = j\\n    for i in range(1, m+1):\\n        for j in range(1, n+1):\\n            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]\\n            else: dp[i][j] = 1+min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\\n    return dp[m][n]\\n\\nprint(edit_distance('kitten', 'sitting'))\\nprint(edit_distance('abc', 'abc'))",
        expectedOutput: "3\\n0",
      },
    }`,
  ],
  "alg_4_4": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "💰 Maximum Gold · 最大黄金",
        description: "Find max gold collectible in a grid moving only right or down.\\n在网格中只能向右或向下移动，收集最多黄金。",
        starterCode: "def max_gold(grid):\\n    pass\\n\\nprint(max_gold([[1,3,1],[1,5,1],[4,2,1]]))",
        hint: "Same as minimum path sum, but take max.\\n和最小路径和一样，但取最大值。",
        solution: "def max_gold(grid):\\n    m, n = len(grid), len(grid[0])\\n    dp = [[0]*n for _ in range(m)]\\n    dp[0][0] = grid[0][0]\\n    for i in range(1,m): dp[i][0] = dp[i-1][0]+grid[i][0]\\n    for j in range(1,n): dp[0][j] = dp[0][j-1]+grid[0][j]\\n    for i in range(1,m):\\n        for j in range(1,n):\\n            dp[i][j] = max(dp[i-1][j],dp[i][j-1])+grid[i][j]\\n    return dp[m-1][n-1]\\n\\nprint(max_gold([[1,3,1],[1,5,1],[4,2,1]]))",
        expectedOutput: "12",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔲 Maximal Square · 最大正方形",
        description: "Find the area of the largest square of 1s in a binary grid.\\n在二进制网格中找最大全 1 正方形的面积。",
        starterCode: "def max_square(grid):\\n    pass\\n\\nprint(max_square([[1,0,1,0],[1,0,1,1],[1,1,1,1],[1,0,0,1]]))",
        hint: "dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 if grid[i][j]==1.\\n如果 grid[i][j]==1，dp[i][j] = min(三个邻居) + 1。",
        solution: "def max_square(grid):\\n    m, n = len(grid), len(grid[0])\\n    dp = [[0]*n for _ in range(m)]\\n    max_side = 0\\n    for i in range(m):\\n        for j in range(n):\\n            if grid[i][j] == 1:\\n                if i == 0 or j == 0: dp[i][j] = 1\\n                else: dp[i][j] = min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1\\n                max_side = max(max_side, dp[i][j])\\n    return max_side * max_side\\n\\nprint(max_square([[1,0,1,0],[1,0,1,1],[1,1,1,1],[1,0,0,1]]))",
        expectedOutput: "4",
      },
    }`,
  ],
  "alg_5_1": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌊 Flood Fill · 洪水填充",
        description: "Implement flood fill (like paint bucket tool). Change color at (r,c) and all connected same-color cells.\\n实现洪水填充。",
        starterCode: "def flood_fill(grid, r, c, new_color):\\n    pass\\n\\ng = [[1,1,1],[1,1,0],[1,0,1]]\\nflood_fill(g, 1, 1, 2)\\nfor row in g: print(row)",
        hint: "DFS/BFS from (r,c). Change all connected cells with original color.\\n从 (r,c) DFS/BFS。改变所有连通的原色单元格。",
        solution: "def flood_fill(grid, r, c, new_color):\\n    orig = grid[r][c]\\n    if orig == new_color: return\\n    rows, cols = len(grid), len(grid[0])\\n    def dfs(r, c):\\n        if r<0 or r>=rows or c<0 or c>=cols: return\\n        if grid[r][c] != orig: return\\n        grid[r][c] = new_color\\n        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)\\n    dfs(r, c)\\n\\ng = [[1,1,1],[1,1,0],[1,0,1]]\\nflood_fill(g, 1, 1, 2)\\nfor row in g: print(row)",
        expectedOutput: "[2, 2, 2]\\n[2, 2, 0]\\n[2, 0, 1]",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔗 Graph Has Path · 图是否有路径",
        description: "Check if path exists between two nodes using BFS or DFS.\\n检查两个节点之间是否有路径。",
        starterCode: "def has_path(graph, start, end):\\n    pass\\n\\ng = {0:[1,2], 1:[3], 2:[], 3:[4], 4:[]}\\nprint(has_path(g, 0, 4))\\nprint(has_path(g, 0, 5))",
        hint: "BFS/DFS from start. If you reach end, return True.\\n从 start BFS/DFS。到达 end 返回 True。",
        solution: "def has_path(graph, start, end):\\n    visited = set()\\n    stack = [start]\\n    while stack:\\n        node = stack.pop()\\n        if node == end: return True\\n        if node in visited: continue\\n        visited.add(node)\\n        for nbr in graph.get(node, []):\\n            stack.append(nbr)\\n    return False\\n\\ng = {0:[1,2], 1:[3], 2:[], 3:[4], 4:[]}\\nprint(has_path(g, 0, 4))\\nprint(has_path(g, 0, 5))",
        expectedOutput: "True\\nFalse",
      },
    }`,
  ],
  "alg_5_2": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🗺️ Network Delay · 网络延迟",
        description: "Find time for signal to reach ALL nodes from source. Return max distance or -1 if impossible.\\n找信号从源到达所有节点的时间。",
        starterCode: "import heapq\\ndef network_delay(n, edges, source):\\n    # edges: [(from, to, time)]\\n    pass\\n\\nprint(network_delay(4, [(1,2,1),(2,3,2),(1,3,4),(3,4,1)], 1))",
        hint: "Dijkstra from source. Answer is max of all distances.\\n从源 Dijkstra。答案是所有距离的最大值。",
        solution: "import heapq\\ndef network_delay(n, edges, source):\\n    adj = {}\\n    for u, v, w in edges:\\n        adj.setdefault(u, []).append((v, w))\\n    dist = {source: 0}\\n    heap = [(0, source)]\\n    while heap:\\n        d, node = heapq.heappop(heap)\\n        if d > dist.get(node, float('inf')): continue\\n        for nbr, w in adj.get(node, []):\\n            nd = d + w\\n            if nd < dist.get(nbr, float('inf')):\\n                dist[nbr] = nd\\n                heapq.heappush(heap, (nd, nbr))\\n    if len(dist) < n: return -1\\n    return max(dist.values())\\n\\nprint(network_delay(4, [(1,2,1),(2,3,2),(1,3,4),(3,4,1)], 1))",
        expectedOutput: "4",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🏙️ Cheapest Flight · 最便宜航班",
        description: "Find cheapest price from src to dst with at most k stops.\\n找从 src 到 dst 最多 k 次中转的最便宜价格。",
        starterCode: "def cheapest_flight(n, flights, src, dst, k):\\n    # flights: [(from, to, price)]\\n    pass\\n\\nprint(cheapest_flight(3, [(0,1,100),(1,2,100),(0,2,500)], 0, 2, 1))\\nprint(cheapest_flight(3, [(0,1,100),(1,2,100),(0,2,500)], 0, 2, 0))",
        hint: "BFS with level = stops. Track minimum cost per node per level.\\n按层 BFS = 中转次数。跟踪每节点每层最低费用。",
        solution: "def cheapest_flight(n, flights, src, dst, k):\\n    prices = [float('inf')] * n\\n    prices[src] = 0\\n    for _ in range(k + 1):\\n        tmp = prices[:]\\n        for u, v, w in flights:\\n            if prices[u] + w < tmp[v]:\\n                tmp[v] = prices[u] + w\\n        prices = tmp\\n    return prices[dst] if prices[dst] != float('inf') else -1\\n\\nprint(cheapest_flight(3, [(0,1,100),(1,2,100),(0,2,500)], 0, 2, 1))\\nprint(cheapest_flight(3, [(0,1,100),(1,2,100),(0,2,500)], 0, 2, 0))",
        expectedOutput: "200\\n500",
      },
    }`,
  ],
  "alg_5_3": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📋 Course Schedule · 课程安排",
        description: "Determine if you can finish all courses given prerequisites (cycle detection in DAG).\\n判断给定先修课程能否完成所有课程。",
        starterCode: "def can_finish(n, prereqs):\\n    # prereqs: [(course, prerequisite)]\\n    pass\\n\\nprint(can_finish(4, [(1,0),(2,1),(3,2)]))\\nprint(can_finish(2, [(0,1),(1,0)]))",
        hint: "Topological sort. If sorted order has all n nodes, no cycle.\\n拓扑排序。如果排序有 n 个节点，无环。",
        solution: "from collections import deque\\ndef can_finish(n, prereqs):\\n    adj = [[] for _ in range(n)]\\n    indeg = [0]*n\\n    for c, p in prereqs:\\n        adj[p].append(c)\\n        indeg[c] += 1\\n    q = deque([i for i in range(n) if indeg[i]==0])\\n    count = 0\\n    while q:\\n        node = q.popleft()\\n        count += 1\\n        for nbr in adj[node]:\\n            indeg[nbr] -= 1\\n            if indeg[nbr] == 0: q.append(nbr)\\n    return count == n\\n\\nprint(can_finish(4, [(1,0),(2,1),(3,2)]))\\nprint(can_finish(2, [(0,1),(1,0)]))",
        expectedOutput: "True\\nFalse",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Longest Path in DAG · DAG 最长路径",
        description: "Find the longest path in a DAG using topological sort.\\n用拓扑排序找 DAG 中的最长路径。",
        starterCode: "def longest_path(n, edges):\\n    # edges: [(from, to, weight)]\\n    pass\\n\\nprint(longest_path(4, [(0,1,3),(0,2,2),(1,3,4),(2,3,1)]))",
        hint: "Topo sort, then relax edges in order.\\n拓扑排序，然后按顺序松弛边。",
        solution: "from collections import deque\\ndef longest_path(n, edges):\\n    adj = [[] for _ in range(n)]\\n    indeg = [0]*n\\n    for u, v, w in edges:\\n        adj[u].append((v, w))\\n        indeg[v] += 1\\n    q = deque([i for i in range(n) if indeg[i]==0])\\n    order = []\\n    while q:\\n        node = q.popleft()\\n        order.append(node)\\n        for v, _ in adj[node]:\\n            indeg[v] -= 1\\n            if indeg[v] == 0: q.append(v)\\n    dist = [0]*n\\n    for u in order:\\n        for v, w in adj[u]:\\n            dist[v] = max(dist[v], dist[u]+w)\\n    return max(dist)\\n\\nprint(longest_path(4, [(0,1,3),(0,2,2),(1,3,4),(2,3,1)]))",
        expectedOutput: "7",
      },
    }`,
  ],
  "alg_5_4": [
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌉 Bridge Finder · 桥查找器",
        description: "Count connected components after removing each edge.\\n删除每条边后计算连通分量数。",
        starterCode: "def count_bridges(n, edges):\\n    # An edge is a bridge if removing it increases components\\n    pass\\n\\nprint(count_bridges(4, [(0,1),(1,2),(2,0),(2,3)]))",
        hint: "For each edge, remove it and count components using DFS.\\n删除每条边，用 DFS 计算连通分量。",
        solution: "def count_bridges(n, edges):\\n    bridges = 0\\n    for skip in range(len(edges)):\\n        adj = [[] for _ in range(n)]\\n        for i, (u, v) in enumerate(edges):\\n            if i == skip: continue\\n            adj[u].append(v); adj[v].append(u)\\n        visited = set()\\n        def dfs(node):\\n            visited.add(node)\\n            for nbr in adj[node]:\\n                if nbr not in visited: dfs(nbr)\\n        components = 0\\n        for i in range(n):\\n            if i not in visited: dfs(i); components += 1\\n        if components > 1: bridges += 1\\n    return bridges\\n\\nprint(count_bridges(4, [(0,1),(1,2),(2,0),(2,3)]))",
        expectedOutput: "1",
      },
    }`,
    `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Strongly Connected · 强连通检测",
        description: "Check if a DIRECTED graph is strongly connected (every node reachable from every other).\\n检查有向图是否强连通。",
        starterCode: "def is_strongly_connected(n, edges):\\n    pass\\n\\nprint(is_strongly_connected(3, [(0,1),(1,2),(2,0)]))\\nprint(is_strongly_connected(3, [(0,1),(1,2)]))",
        hint: "DFS from node 0. Reverse edges and DFS again. If both reach all nodes → strongly connected.\\n从 0 DFS。反转边再 DFS。如果都能到达所有节点 → 强连通。",
        solution: "def is_strongly_connected(n, edges):\\n    adj = [[] for _ in range(n)]\\n    radj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v); radj[v].append(u)\\n    def dfs(graph, start):\\n        visited = set()\\n        stack = [start]\\n        while stack:\\n            node = stack.pop()\\n            if node in visited: continue\\n            visited.add(node)\\n            for nbr in graph[node]: stack.append(nbr)\\n        return visited\\n    return len(dfs(adj, 0)) == n and len(dfs(radj, 0)) == n\\n\\nprint(is_strongly_connected(3, [(0,1),(1,2),(2,0)]))\\nprint(is_strongly_connected(3, [(0,1),(1,2)]))",
        expectedOutput: "True\\nFalse",
      },
    }`,
  ],
};

// Insert challenges before each quiz (bottom-up to preserve line numbers)
const insertions = [];
for (const ql of quizLines) {
  const challenges = challengesByLesson[ql.lessonName];
  if (challenges) {
    // Insert all challenges before the quiz section's opening brace
    insertions.push({
      line: ql.line,
      text: challenges.join(',\n') + ',',
    });
  } else {
    console.log(`No challenges for: ${ql.lessonName}`);
  }
}

insertions.sort((a, b) => b.line - a.line);

for (const ins of insertions) {
  lines.splice(ins.line, 0, ins.text);
}

console.log(`Inserted challenges for ${insertions.length} lessons`);

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Done!');
