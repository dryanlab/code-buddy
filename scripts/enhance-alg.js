// Script to enhance alg-lessons.ts with exercises and challenges
// Run: node scripts/enhance-alg.js

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'alg-lessons.ts');
let src = fs.readFileSync(filePath, 'utf8');

// ═══════════════════════════════════════════════════
// EXERCISES: one per code section, keyed by line content
// ═══════════════════════════════════════════════════

// Map from content snippet → exercise object (as string to insert)
const exercises = {
  // ─── alg-1-1: Linear Search ───
  "Linear Search in Python": `
      exercise: {
        prompt: "Write a linear search that returns the INDEX of the LAST occurrence of a target in an array. Return -1 if not found.",
        promptZh: "写一个线性搜索，返回目标值在数组中最后一次出现的索引。未找到返回 -1。",
        starterCode: "def find_last(arr, target):\\n    # Your code here\\n    pass\\n\\nprint(find_last([3, 1, 4, 1, 5, 1], 1))  # Should print 5\\nprint(find_last([3, 1, 4], 9))  # Should print -1",
        expectedOutput: "5\\n-1",
        hint: "Track the last found index. Don't return early — check ALL elements!",
        hintZh: "记录最后找到的索引。不要提前返回——检查所有元素！",
        solution: "def find_last(arr, target):\\n    last = -1\\n    for i in range(len(arr)):\\n        if arr[i] == target:\\n            last = i\\n    return last\\n\\nprint(find_last([3, 1, 4, 1, 5, 1], 1))\\nprint(find_last([3, 1, 4], 9))",
      },`,

  "Linear Search Variations": `
      exercise: {
        prompt: "Write a function that finds the SECOND largest value in an array using linear search. Return it directly.",
        promptZh: "写一个函数，用线性搜索找到数组中第二大的值并直接返回。",
        starterCode: "def second_largest(arr):\\n    # Your code here\\n    pass\\n\\nprint(second_largest([3, 1, 4, 1, 5, 9, 2, 6]))  # Should print 6",
        expectedOutput: "6",
        hint: "Track both the largest and second largest as you scan through the array.",
        hintZh: "扫描数组时同时跟踪最大值和第二大值。",
        solution: "def second_largest(arr):\\n    first = second = float('-inf')\\n    for x in arr:\\n        if x > first:\\n            second = first\\n            first = x\\n        elif x > second and x != first:\\n            second = x\\n    return second\\n\\nprint(second_largest([3, 1, 4, 1, 5, 9, 2, 6]))",
      },`,

  // ─── alg-1-2: Binary Search ───
  "Binary Search — Step by Step": `
      exercise: {
        prompt: "Implement binary search to find the INSERTION POINT for a target in a sorted array (like Python's bisect_left).",
        promptZh: "实现二分搜索，找到目标值在排序数组中的插入位置（类似 Python 的 bisect_left）。",
        starterCode: "def bisect_left(arr, target):\\n    # Your code here\\n    pass\\n\\nprint(bisect_left([1, 3, 5, 7, 9], 5))   # 2 (exists)\\nprint(bisect_left([1, 3, 5, 7, 9], 6))   # 3 (would insert here)",
        expectedOutput: "2\\n3",
        hint: "When target is not found, 'left' will be at the insertion point.",
        hintZh: "当目标未找到时，'left' 就在插入位置。",
        solution: "def bisect_left(arr, target):\\n    left, right = 0, len(arr)\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] < target:\\n            left = mid + 1\\n        else:\\n            right = mid\\n    return left\\n\\nprint(bisect_left([1, 3, 5, 7, 9], 5))\\nprint(bisect_left([1, 3, 5, 7, 9], 6))",
      },`,

  "Recursive Binary Search": `
      exercise: {
        prompt: "Write a recursive binary search that COUNTS how many comparisons it makes. Return a tuple (index, count).",
        promptZh: "写一个递归二分搜索，统计比较次数。返回元组 (索引, 次数)。",
        starterCode: "def binary_count(arr, target, left=0, right=None, count=0):\\n    # Your code here\\n    pass\\n\\nidx, steps = binary_count([1,3,5,7,9,11,13,15], 11)\\nprint(f'{idx} {steps}')",
        expectedOutput: "5 3",
        hint: "Pass count+1 in each recursive call. Return (-1, count) when not found.",
        hintZh: "每次递归调用传 count+1。未找到时返回 (-1, count)。",
        solution: "def binary_count(arr, target, left=0, right=None, count=0):\\n    if right is None:\\n        right = len(arr) - 1\\n    if left > right:\\n        return (-1, count)\\n    mid = (left + right) // 2\\n    count += 1\\n    if arr[mid] == target:\\n        return (mid, count)\\n    elif arr[mid] < target:\\n        return binary_count(arr, target, mid + 1, right, count)\\n    else:\\n        return binary_count(arr, target, left, mid - 1, count)\\n\\nidx, steps = binary_count([1,3,5,7,9,11,13,15], 11)\\nprint(f'{idx} {steps}')",
      },`,

  // ─── alg-1-3: Search in 2D ───
  "Brute Force: Search Every Cell": `
      exercise: {
        prompt: "Write a function to find ALL cells in a 2D matrix that contain a given target. Return a list of (row, col) tuples.",
        promptZh: "写一个函数，找到二维矩阵中包含给定目标的所有单元格。返回 (行, 列) 元组列表。",
        starterCode: "def find_all_2d(matrix, target):\\n    # Your code here\\n    pass\\n\\nm = [[1,2,3],[4,2,6],[2,8,9]]\\nprint(find_all_2d(m, 2))",
        expectedOutput: "[(0, 1), (1, 1), (2, 0)]",
        hint: "Use nested loops. Append (i, j) whenever matrix[i][j] == target.",
        hintZh: "用嵌套循环。当 matrix[i][j] == target 时添加 (i, j)。",
        solution: "def find_all_2d(matrix, target):\\n    result = []\\n    for i in range(len(matrix)):\\n        for j in range(len(matrix[0])):\\n            if matrix[i][j] == target:\\n                result.append((i, j))\\n    return result\\n\\nm = [[1,2,3],[4,2,6],[2,8,9]]\\nprint(find_all_2d(m, 2))",
      },`,

  "Staircase Search: The Smart Way": `
      exercise: {
        prompt: "Modify staircase search to return the NUMBER OF STEPS taken (not the position). Return steps even if not found.",
        promptZh: "修改阶梯搜索，返回所走的步数（不是位置）。即使未找到也返回步数。",
        starterCode: "def staircase_steps(matrix, target):\\n    # Your code here\\n    pass\\n\\nm = [[1,4,7],[2,5,8],[3,6,9]]\\nprint(staircase_steps(m, 5))\\nprint(staircase_steps(m, 10))",
        expectedOutput: "2\\n3",
        hint: "Count each comparison as a step. Start from top-right corner.",
        hintZh: "每次比较计为一步。从右上角开始。",
        solution: "def staircase_steps(matrix, target):\\n    r, c = 0, len(matrix[0]) - 1\\n    steps = 0\\n    while r < len(matrix) and c >= 0:\\n        steps += 1\\n        if matrix[r][c] == target:\\n            return steps\\n        elif matrix[r][c] > target:\\n            c -= 1\\n        else:\\n            r += 1\\n    return steps\\n\\nm = [[1,4,7],[2,5,8],[3,6,9]]\\nprint(staircase_steps(m, 5))\\nprint(staircase_steps(m, 10))",
      },`,

  // ─── alg-1-4: Search Applications ───
  "Finding Boundaries with Binary Search": `
      exercise: {
        prompt: "Use binary search to find the FIRST position where a value >= target in a sorted array. Return len(arr) if all values are smaller.",
        promptZh: "用二分搜索找到排序数组中第一个 >= target 的位置。如果所有值都更小，返回 len(arr)。",
        starterCode: "def lower_bound(arr, target):\\n    # Your code here\\n    pass\\n\\nprint(lower_bound([1, 3, 5, 7, 9], 5))  # 2\\nprint(lower_bound([1, 3, 5, 7, 9], 6))  # 3\\nprint(lower_bound([1, 3, 5, 7, 9], 10)) # 5",
        expectedOutput: "2\\n3\\n5",
        hint: "Use binary search. When arr[mid] >= target, move right boundary. Track the answer.",
        hintZh: "用二分搜索。当 arr[mid] >= target 时移动右边界。跟踪答案。",
        solution: "def lower_bound(arr, target):\\n    left, right = 0, len(arr)\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] < target:\\n            left = mid + 1\\n        else:\\n            right = mid\\n    return left\\n\\nprint(lower_bound([1, 3, 5, 7, 9], 5))\\nprint(lower_bound([1, 3, 5, 7, 9], 6))\\nprint(lower_bound([1, 3, 5, 7, 9], 10))",
      },`,

  "Search in a Rotated Array": `
      exercise: {
        prompt: "Find the MINIMUM element in a rotated sorted array using binary search (O(log n)).",
        promptZh: "用二分搜索在旋转排序数组中找到最小元素（O(log n)）。",
        starterCode: "def find_min_rotated(arr):\\n    # Your code here\\n    pass\\n\\nprint(find_min_rotated([4, 5, 6, 7, 0, 1, 2]))  # 0\\nprint(find_min_rotated([3, 1, 2]))  # 1",
        expectedOutput: "0\\n1",
        hint: "If arr[mid] > arr[right], minimum is in right half. Otherwise left half.",
        hintZh: "如果 arr[mid] > arr[right]，最小值在右半部分。否则在左半部分。",
        solution: "def find_min_rotated(arr):\\n    left, right = 0, len(arr) - 1\\n    while left < right:\\n        mid = (left + right) // 2\\n        if arr[mid] > arr[right]:\\n            left = mid + 1\\n        else:\\n            right = mid\\n    return arr[left]\\n\\nprint(find_min_rotated([4, 5, 6, 7, 0, 1, 2]))\\nprint(find_min_rotated([3, 1, 2]))",
      },`,

  "Fun Application: Guess the Number Game": `
      exercise: {
        prompt: "Write a binary search that finds the square root of n (integer part). For n=27, return 5 since 5²=25≤27<36=6².",
        promptZh: "写一个二分搜索，找到 n 的整数平方根。对于 n=27，返回 5（因为 5²=25≤27<36=6²）。",
        starterCode: "def int_sqrt(n):\\n    # Your code here\\n    pass\\n\\nprint(int_sqrt(27))  # 5\\nprint(int_sqrt(100)) # 10\\nprint(int_sqrt(0))   # 0",
        expectedOutput: "5\\n10\\n0",
        hint: "Binary search between 0 and n. If mid*mid <= n, try higher. Track the best answer.",
        hintZh: "在 0 和 n 之间二分搜索。如果 mid*mid <= n，尝试更高。跟踪最佳答案。",
        solution: "def int_sqrt(n):\\n    if n < 2:\\n        return n\\n    left, right = 0, n\\n    ans = 0\\n    while left <= right:\\n        mid = (left + right) // 2\\n        if mid * mid <= n:\\n            ans = mid\\n            left = mid + 1\\n        else:\\n            right = mid - 1\\n    return ans\\n\\nprint(int_sqrt(27))\\nprint(int_sqrt(100))\\nprint(int_sqrt(0))",
      },`,

  // ─── alg-2-1: Simple Sorts ───
  "Bubble Sort — Bubbling Up!": `
      exercise: {
        prompt: "Modify bubble sort to COUNT the total number of swaps performed. Return the sorted array and swap count as a tuple.",
        promptZh: "修改冒泡排序，统计总交换次数。返回排序后的数组和交换次数的元组。",
        starterCode: "def bubble_sort_count(arr):\\n    # Your code here\\n    pass\\n\\narr, swaps = bubble_sort_count([5, 1, 4, 2, 8])\\nprint(arr)\\nprint(swaps)",
        expectedOutput: "[1, 2, 4, 5, 8]\\n4",
        hint: "Add a counter variable. Increment it every time you swap two elements.",
        hintZh: "添加一个计数器变量。每次交换两个元素时加 1。",
        solution: "def bubble_sort_count(arr):\\n    a = arr[:]\\n    swaps = 0\\n    n = len(a)\\n    for i in range(n):\\n        for j in range(n - 1 - i):\\n            if a[j] > a[j+1]:\\n                a[j], a[j+1] = a[j+1], a[j]\\n                swaps += 1\\n    return a, swaps\\n\\narr, swaps = bubble_sort_count([5, 1, 4, 2, 8])\\nprint(arr)\\nprint(swaps)",
      },`,

  "Selection Sort — Pick the Smallest!": `
      exercise: {
        prompt: "Implement selection sort that sorts in DESCENDING order (largest first).",
        promptZh: "实现降序排列的选择排序（最大值在前）。",
        starterCode: "def selection_sort_desc(arr):\\n    # Your code here\\n    pass\\n\\nprint(selection_sort_desc([3, 1, 4, 1, 5]))  # [5, 4, 3, 1, 1]",
        expectedOutput: "[5, 4, 3, 1, 1]",
        hint: "Instead of finding minimum, find MAXIMUM in each pass and place it at the current position.",
        hintZh: "不是找最小值，而是在每轮中找最大值并放到当前位置。",
        solution: "def selection_sort_desc(arr):\\n    a = arr[:]\\n    n = len(a)\\n    for i in range(n):\\n        max_idx = i\\n        for j in range(i+1, n):\\n            if a[j] > a[max_idx]:\\n                max_idx = j\\n        a[i], a[max_idx] = a[max_idx], a[i]\\n    return a\\n\\nprint(selection_sort_desc([3, 1, 4, 1, 5]))",
      },`,

  "Insertion Sort — Like Sorting Cards!": `
      exercise: {
        prompt: "Write insertion sort that also prints the array state after EACH insertion pass.",
        promptZh: "写一个插入排序，在每次插入后打印数组状态。",
        starterCode: "def insertion_sort_trace(arr):\\n    # Your code here\\n    pass\\n\\ninsertion_sort_trace([5, 2, 4, 6, 1, 3])",
        expectedOutput: "[2, 5, 4, 6, 1, 3]\\n[2, 4, 5, 6, 1, 3]\\n[2, 4, 5, 6, 1, 3]\\n[1, 2, 4, 5, 6, 3]\\n[1, 2, 3, 4, 5, 6]",
        hint: "After each inner loop finishes shifting elements, print the current state of the array.",
        hintZh: "每次内层循环完成元素移动后，打印数组当前状态。",
        solution: "def insertion_sort_trace(arr):\\n    a = arr[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i - 1\\n        while j >= 0 and a[j] > key:\\n            a[j+1] = a[j]\\n            j -= 1\\n        a[j+1] = key\\n        print(a)\\n\\ninsertion_sort_trace([5, 2, 4, 6, 1, 3])",
      },`,

  // ─── alg-2-2: Merge Sort ───
  "Merge Sort — Full Implementation": `
      exercise: {
        prompt: "Write JUST the merge function that merges two sorted lists into one sorted list.",
        promptZh: "只写合并函数，将两个排序列表合并为一个排序列表。",
        starterCode: "def merge(left, right):\\n    # Your code here\\n    pass\\n\\nprint(merge([1, 3, 5], [2, 4, 6]))\\nprint(merge([1, 1], [2]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6]\\n[1, 1, 2]",
        hint: "Use two pointers (i, j). Compare left[i] and right[j], append the smaller one. Don't forget remainders!",
        hintZh: "用两个指针 (i, j)。比较 left[i] 和 right[j]，添加较小的。别忘了剩余元素！",
        solution: "def merge(left, right):\\n    result = []\\n    i = j = 0\\n    while i < len(left) and j < len(right):\\n        if left[i] <= right[j]:\\n            result.append(left[i])\\n            i += 1\\n        else:\\n            result.append(right[j])\\n            j += 1\\n    result.extend(left[i:])\\n    result.extend(right[j:])\\n    return result\\n\\nprint(merge([1, 3, 5], [2, 4, 6]))\\nprint(merge([1, 1], [2]))",
      },`,

  "Why O(n log n)?": `
      exercise: {
        prompt: "Write a function that counts how many times n can be halved before reaching 1 (this is log₂(n)). Use a loop, not math.log.",
        promptZh: "写一个函数，计算 n 可以被对半分多少次才到 1（这就是 log₂(n)）。用循环，不用 math.log。",
        starterCode: "def count_halves(n):\\n    # Your code here\\n    pass\\n\\nprint(count_halves(8))   # 3\\nprint(count_halves(16))  # 4\\nprint(count_halves(1000)) # 10",
        expectedOutput: "3\\n4\\n10",
        hint: "Keep dividing n by 2 and count steps until n <= 1.",
        hintZh: "不断将 n 除以 2，计步，直到 n <= 1。",
        solution: "def count_halves(n):\\n    count = 0\\n    while n > 1:\\n        n //= 2\\n        count += 1\\n    return count\\n\\nprint(count_halves(8))\\nprint(count_halves(16))\\nprint(count_halves(1000))",
      },`,

  // ─── alg-2-3: Quick Sort ───
  "Quick Sort — The Classic": `
      exercise: {
        prompt: "Implement a partition function that takes an array and pivot value, returns two lists: elements <= pivot and elements > pivot.",
        promptZh: "实现分区函数，接收数组和枢轴值，返回两个列表：<= 枢轴的元素和 > 枢轴的元素。",
        starterCode: "def partition(arr, pivot):\\n    # Your code here\\n    pass\\n\\nlo, hi = partition([3,6,8,10,1,2,1], 5)\\nprint(lo)\\nprint(hi)",
        expectedOutput: "[3, 1, 2, 1]\\n[6, 8, 10]",
        hint: "Loop through array. If element <= pivot, add to left list. Otherwise add to right list.",
        hintZh: "遍历数组。如果元素 <= 枢轴，加到左列表。否则加到右列表。",
        solution: "def partition(arr, pivot):\\n    left = [x for x in arr if x <= pivot]\\n    right = [x for x in arr if x > pivot]\\n    return left, right\\n\\nlo, hi = partition([3,6,8,10,1,2,1], 5)\\nprint(lo)\\nprint(hi)",
      },`,

  "In-Place Quick Sort (Lomuto Partition)": `
      exercise: {
        prompt: "Implement the Lomuto partition scheme: given arr and pivot index (last element), return the final pivot position after partitioning.",
        promptZh: "实现 Lomuto 分区方案：给定数组和枢轴索引（最后一个元素），返回分区后枢轴的最终位置。",
        starterCode: "def lomuto_partition(arr, low, high):\\n    # Your code here\\n    pass\\n\\na = [10, 80, 30, 90, 40, 50, 70]\\np = lomuto_partition(a, 0, len(a)-1)\\nprint(p)\\nprint(a)",
        expectedOutput: "6\\n[10, 30, 40, 50, 70, 80, 90]",
        hint: "Use last element as pivot. Keep i tracking where small elements end. Swap when arr[j] < pivot.",
        hintZh: "用最后一个元素做枢轴。用 i 跟踪小元素的结束位置。当 arr[j] < pivot 时交换。",
        solution: "def lomuto_partition(arr, low, high):\\n    pivot = arr[high]\\n    i = low - 1\\n    for j in range(low, high):\\n        if arr[j] <= pivot:\\n            i += 1\\n            arr[i], arr[j] = arr[j], arr[i]\\n    arr[i+1], arr[high] = arr[high], arr[i+1]\\n    return i + 1\\n\\na = [10, 80, 30, 90, 40, 50, 70]\\np = lomuto_partition(a, 0, len(a)-1)\\nprint(p)\\nprint(a)",
      },`,

  // ─── alg-2-4: Sorting Comparisons ───
  "Sorting Race!": `
      exercise: {
        prompt: "Write a function that checks if an array is ALREADY sorted (ascending). Return True/False.",
        promptZh: "写一个函数，检查数组是否已经排好序（升序）。返回 True/False。",
        starterCode: "def is_sorted(arr):\\n    # Your code here\\n    pass\\n\\nprint(is_sorted([1, 2, 3, 4, 5]))  # True\\nprint(is_sorted([1, 3, 2, 4, 5]))  # False\\nprint(is_sorted([]))  # True",
        expectedOutput: "True\\nFalse\\nTrue",
        hint: "Compare each element with the next one. If any arr[i] > arr[i+1], it's not sorted.",
        hintZh: "比较每个元素和下一个。如果任何 arr[i] > arr[i+1]，就没排好序。",
        solution: "def is_sorted(arr):\\n    for i in range(len(arr) - 1):\\n        if arr[i] > arr[i+1]:\\n            return False\\n    return True\\n\\nprint(is_sorted([1, 2, 3, 4, 5]))\\nprint(is_sorted([1, 3, 2, 4, 5]))\\nprint(is_sorted([]))",
      },`,

  "The Complete Comparison Table": `
      exercise: {
        prompt: "Write a custom sort function that sorts strings by their LENGTH (shortest first). Don't use key= parameter — implement it yourself with insertion sort.",
        promptZh: "写一个自定义排序函数，按字符串长度排序（最短优先）。不要用 key= 参数——用插入排序自己实现。",
        starterCode: "def sort_by_length(words):\\n    # Your code here (insertion sort based on len())\\n    pass\\n\\nprint(sort_by_length(['banana', 'kiwi', 'fig', 'apple', 'date']))",
        expectedOutput: "['fig', 'kiwi', 'date', 'apple', 'banana']",
        hint: "Use insertion sort but compare len(a[j]) > len(key) instead of a[j] > key.",
        hintZh: "用插入排序，但比较 len(a[j]) > len(key) 而不是 a[j] > key。",
        solution: "def sort_by_length(words):\\n    a = words[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i - 1\\n        while j >= 0 and len(a[j]) > len(key):\\n            a[j+1] = a[j]\\n            j -= 1\\n        a[j+1] = key\\n    return a\\n\\nprint(sort_by_length(['banana', 'kiwi', 'fig', 'apple', 'date']))",
      },`,

  // ─── alg-3-1: What is Recursion? ───
  "Your First Recursive Function": `
      exercise: {
        prompt: "Write a recursive function to calculate the SUM of digits of a number. sum_digits(123) → 6.",
        promptZh: "写一个递归函数计算数字的各位数之和。sum_digits(123) → 6。",
        starterCode: "def sum_digits(n):\\n    # Your code here\\n    pass\\n\\nprint(sum_digits(123))   # 6\\nprint(sum_digits(9999))  # 36\\nprint(sum_digits(0))     # 0",
        expectedOutput: "6\\n36\\n0",
        hint: "Base case: n < 10 → return n. Recursive: n % 10 + sum_digits(n // 10).",
        hintZh: "基本情况：n < 10 → 返回 n。递归：n % 10 + sum_digits(n // 10)。",
        solution: "def sum_digits(n):\\n    if n < 10:\\n        return n\\n    return n % 10 + sum_digits(n // 10)\\n\\nprint(sum_digits(123))\\nprint(sum_digits(9999))\\nprint(sum_digits(0))",
      },`,

  "The Call Stack — How Recursion Works Inside": `
      exercise: {
        prompt: "Write a recursive function that prints numbers from n down to 1 (countdown), then prints 'Blast off!'.",
        promptZh: "写一个递归函数，从 n 打印到 1（倒计时），然后打印 'Blast off!'。",
        starterCode: "def countdown(n):\\n    # Your code here\\n    pass\\n\\ncountdown(3)",
        expectedOutput: "3\\n2\\n1\\nBlast off!",
        hint: "Base case: n == 0 → print 'Blast off!'. Recursive: print n, then countdown(n-1).",
        hintZh: "基本情况：n == 0 → 打印 'Blast off!'。递归：打印 n，然后 countdown(n-1)。",
        solution: "def countdown(n):\\n    if n == 0:\\n        print('Blast off!')\\n        return\\n    print(n)\\n    countdown(n - 1)\\n\\ncountdown(3)",
      },`,

  "More Recursive Examples": `
      exercise: {
        prompt: "Write a recursive function to reverse a string. reverse('hello') → 'olleh'.",
        promptZh: "写一个递归函数反转字符串。reverse('hello') → 'olleh'。",
        starterCode: "def reverse(s):\\n    # Your code here\\n    pass\\n\\nprint(reverse('hello'))\\nprint(reverse('abcd'))\\nprint(reverse('a'))",
        expectedOutput: "olleh\\ndcba\\na",
        hint: "Base case: len(s) <= 1 → return s. Recursive: reverse(s[1:]) + s[0].",
        hintZh: "基本情况：len(s) <= 1 → 返回 s。递归：reverse(s[1:]) + s[0]。",
        solution: "def reverse(s):\\n    if len(s) <= 1:\\n        return s\\n    return reverse(s[1:]) + s[0]\\n\\nprint(reverse('hello'))\\nprint(reverse('abcd'))\\nprint(reverse('a'))",
      },`,

  // ─── alg-3-2: Recursive Patterns ───
  "Pattern 1: Linear Recursion": `
      exercise: {
        prompt: "Write a recursive function to calculate the product of all elements in a list (like sum but multiply).",
        promptZh: "写一个递归函数计算列表所有元素的乘积（类似求和但改为相乘）。",
        starterCode: "def product(arr):\\n    # Your code here\\n    pass\\n\\nprint(product([1, 2, 3, 4, 5]))  # 120\\nprint(product([3, 7]))  # 21",
        expectedOutput: "120\\n21",
        hint: "Base case: empty list → return 1. Recursive: arr[0] * product(arr[1:]).",
        hintZh: "基本情况：空列表 → 返回 1。递归：arr[0] * product(arr[1:])。",
        solution: "def product(arr):\\n    if not arr:\\n        return 1\\n    return arr[0] * product(arr[1:])\\n\\nprint(product([1, 2, 3, 4, 5]))\\nprint(product([3, 7]))",
      },`,

  "Pattern 2: Tree Recursion": `
      exercise: {
        prompt: "Write a recursive function to count the ways to climb n stairs if you can take 1 or 2 steps at a time.",
        promptZh: "写一个递归函数，计算爬 n 级楼梯的方式数（每次可以爬 1 或 2 级）。",
        starterCode: "def climb_stairs(n):\\n    # Your code here\\n    pass\\n\\nprint(climb_stairs(1))  # 1\\nprint(climb_stairs(3))  # 3\\nprint(climb_stairs(5))  # 8",
        expectedOutput: "1\\n3\\n8",
        hint: "Base cases: n<=1 → 1. Recursive: climb_stairs(n-1) + climb_stairs(n-2). (Like Fibonacci!)",
        hintZh: "基本情况：n<=1 → 1。递归：climb_stairs(n-1) + climb_stairs(n-2)。（像斐波那契！）",
        solution: "def climb_stairs(n):\\n    if n <= 1:\\n        return 1\\n    return climb_stairs(n - 1) + climb_stairs(n - 2)\\n\\nprint(climb_stairs(1))\\nprint(climb_stairs(3))\\nprint(climb_stairs(5))",
      },`,

  "Pattern 3: Helper Function & Accumulator": `
      exercise: {
        prompt: "Rewrite factorial using a helper function with an accumulator (tail recursion style).",
        promptZh: "用带累加器的辅助函数重写阶乘（尾递归风格）。",
        starterCode: "def factorial(n):\\n    def helper(n, acc):\\n        # Your code here\\n        pass\\n    return helper(n, 1)\\n\\nprint(factorial(5))   # 120\\nprint(factorial(0))   # 1\\nprint(factorial(10))  # 3628800",
        expectedOutput: "120\\n1\\n3628800",
        hint: "Base case: n <= 1 → return acc. Recursive: helper(n-1, acc * n).",
        hintZh: "基本情况：n <= 1 → 返回 acc。递归：helper(n-1, acc * n)。",
        solution: "def factorial(n):\\n    def helper(n, acc):\\n        if n <= 1:\\n            return acc\\n        return helper(n - 1, acc * n)\\n    return helper(n, 1)\\n\\nprint(factorial(5))\\nprint(factorial(0))\\nprint(factorial(10))",
      },`,

  // ─── alg-3-3: Backtracking ───
  "Backtracking Template": `
      exercise: {
        prompt: "Generate all subsets of [1, 2, 3] using backtracking. Print each subset on a new line.",
        promptZh: "用回溯法生成 [1, 2, 3] 的所有子集。每个子集打印一行。",
        starterCode: "def subsets(nums):\\n    result = []\\n    def backtrack(start, current):\\n        # Your code here\\n        pass\\n    backtrack(0, [])\\n    return result\\n\\nfor s in subsets([1, 2, 3]):\\n    print(s)",
        expectedOutput: "[]\\n[1]\\n[1, 2]\\n[1, 2, 3]\\n[1, 3]\\n[2]\\n[2, 3]\\n[3]",
        hint: "At each step, add current to result. Then try adding each element from start to end, backtrack after.",
        hintZh: "每步将 current 加入结果。然后尝试从 start 到末尾添加每个元素，之后回溯。",
        solution: "def subsets(nums):\\n    result = []\\n    def backtrack(start, current):\\n        result.append(current[:])\\n        for i in range(start, len(nums)):\\n            current.append(nums[i])\\n            backtrack(i + 1, current)\\n            current.pop()\\n    backtrack(0, [])\\n    return result\\n\\nfor s in subsets([1, 2, 3]):\\n    print(s)",
      },`,

  "Permutations — All Arrangements": `
      exercise: {
        prompt: "Generate all permutations of 'abc'. Print each as a string on a new line.",
        promptZh: "生成 'abc' 的所有排列。每个以字符串形式打印一行。",
        starterCode: "def permutations(s):\\n    result = []\\n    def backtrack(path, remaining):\\n        # Your code here\\n        pass\\n    backtrack('', s)\\n    return result\\n\\nfor p in permutations('abc'):\\n    print(p)",
        expectedOutput: "abc\\nacb\\nbac\\nbca\\ncab\\ncba",
        hint: "Base case: no remaining → add path. For each char in remaining, add to path and recurse with remaining minus that char.",
        hintZh: "基本情况：没有剩余字符 → 添加 path。对 remaining 中的每个字符，加到 path 并用去掉该字符的 remaining 递归。",
        solution: "def permutations(s):\\n    result = []\\n    def backtrack(path, remaining):\\n        if not remaining:\\n            result.append(path)\\n            return\\n        for i in range(len(remaining)):\\n            backtrack(path + remaining[i], remaining[:i] + remaining[i+1:])\\n    backtrack('', s)\\n    return result\\n\\nfor p in permutations('abc'):\\n    print(p)",
      },`,

  "N-Queens: The Classic Backtracking Problem": `
      exercise: {
        prompt: "Write a function to check if placing a queen at (row, col) is safe on an n×n board given existing queens list.",
        promptZh: "写一个函数，检查在 n×n 棋盘上的 (row, col) 放置皇后是否安全，给定已有皇后列表。",
        starterCode: "def is_safe(queens, row, col):\\n    # queens[i] = column of queen in row i\\n    # Your code here\\n    pass\\n\\nprint(is_safe([0], 1, 2))   # True (row 0 col 0, testing row 1 col 2)\\nprint(is_safe([0], 1, 1))   # False (diagonal conflict)\\nprint(is_safe([0], 1, 0))   # False (same column)",
        expectedOutput: "True\\nFalse\\nFalse",
        hint: "Check: same column (queens[i] == col) or diagonal (abs(queens[i] - col) == abs(i - row)).",
        hintZh: "检查：同列（queens[i] == col）或对角线（abs(queens[i] - col) == abs(i - row)）。",
        solution: "def is_safe(queens, row, col):\\n    for i in range(len(queens)):\\n        if queens[i] == col:\\n            return False\\n        if abs(queens[i] - col) == abs(i - row):\\n            return False\\n    return True\\n\\nprint(is_safe([0], 1, 2))\\nprint(is_safe([0], 1, 1))\\nprint(is_safe([0], 1, 0))",
      },`,

  // ─── alg-3-4: Divide & Conquer ───
  "D&C Example: Maximum Subarray Sum": `
      exercise: {
        prompt: "Find the maximum subarray sum using a simple O(n) approach (Kadane's algorithm). Compare with D&C mentally!",
        promptZh: "用简单的 O(n) 方法（Kadane 算法）找到最大子数组和。在心中和分治法比较！",
        starterCode: "def max_subarray(arr):\\n    # Your code here\\n    pass\\n\\nprint(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6\\nprint(max_subarray([-1, -2, -3]))  # -1",
        expectedOutput: "6\\n-1",
        hint: "Track current_sum and max_sum. Reset current_sum if it goes below the current element.",
        hintZh: "跟踪 current_sum 和 max_sum。如果 current_sum 低于当前元素就重置。",
        solution: "def max_subarray(arr):\\n    max_sum = arr[0]\\n    current = arr[0]\\n    for i in range(1, len(arr)):\\n        current = max(arr[i], current + arr[i])\\n        max_sum = max(max_sum, current)\\n    return max_sum\\n\\nprint(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))\\nprint(max_subarray([-1, -2, -3]))",
      },`,

  "D&C: Counting Inversions": `
      exercise: {
        prompt: "Count inversions in an array using a simple O(n²) approach. An inversion is a pair (i,j) where i<j but arr[i]>arr[j].",
        promptZh: "用简单的 O(n²) 方法计算数组中的逆序对。逆序对是 (i,j) 其中 i<j 但 arr[i]>arr[j]。",
        starterCode: "def count_inversions(arr):\\n    # Your code here\\n    pass\\n\\nprint(count_inversions([2, 4, 1, 3, 5]))  # 3\\nprint(count_inversions([5, 4, 3, 2, 1]))  # 10",
        expectedOutput: "3\\n10",
        hint: "Use nested loops: for each pair (i, j) where i < j, check if arr[i] > arr[j].",
        hintZh: "用嵌套循环：对每对 (i, j)，其中 i < j，检查 arr[i] > arr[j]。",
        solution: "def count_inversions(arr):\\n    count = 0\\n    for i in range(len(arr)):\\n        for j in range(i+1, len(arr)):\\n            if arr[i] > arr[j]:\\n                count += 1\\n    return count\\n\\nprint(count_inversions([2, 4, 1, 3, 5]))\\nprint(count_inversions([5, 4, 3, 2, 1]))",
      },`,

  "Fast Exponentiation — D&C Style": `
      exercise: {
        prompt: "Implement fast power (binary exponentiation) ITERATIVELY (no recursion).",
        promptZh: "迭代地实现快速幂（二进制取幂）（不用递归）。",
        starterCode: "def fast_pow_iter(base, exp):\\n    # Your code here\\n    pass\\n\\nprint(fast_pow_iter(2, 10))  # 1024\\nprint(fast_pow_iter(3, 5))   # 243\\nprint(fast_pow_iter(5, 0))   # 1",
        expectedOutput: "1024\\n243\\n1",
        hint: "result = 1. While exp > 0: if exp is odd, multiply result by base. Square base, halve exp.",
        hintZh: "result = 1。当 exp > 0：如果 exp 是奇数，result 乘以 base。base 平方，exp 减半。",
        solution: "def fast_pow_iter(base, exp):\\n    result = 1\\n    while exp > 0:\\n        if exp % 2 == 1:\\n            result *= base\\n        base *= base\\n        exp //= 2\\n    return result\\n\\nprint(fast_pow_iter(2, 10))\\nprint(fast_pow_iter(3, 5))\\nprint(fast_pow_iter(5, 0))",
      },`,

  // ─── alg-4-1: Memoization ───
  "The Problem: Slow Fibonacci": `
      exercise: {
        prompt: "Write a recursive Fibonacci that prints how many times fib(2) is called when computing fib(6).",
        promptZh: "写一个递归斐波那契，打印计算 fib(6) 时 fib(2) 被调用了多少次。",
        starterCode: "count = 0\\ndef fib(n):\\n    global count\\n    # Your code here\\n    pass\\n\\nresult = fib(6)\\nprint(result)\\nprint(count)",
        expectedOutput: "8\\n5",
        hint: "When n == 2, increment count before returning. Standard fib: base cases 0→0, 1→1.",
        hintZh: "当 n == 2 时，返回前增加 count。标准 fib：基本情况 0→0，1→1。",
        solution: "count = 0\\ndef fib(n):\\n    global count\\n    if n == 2:\\n        count += 1\\n    if n <= 1:\\n        return n\\n    return fib(n-1) + fib(n-2)\\n\\nresult = fib(6)\\nprint(result)\\nprint(count)",
      },`,

  "The Fix: Memoization!": `
      exercise: {
        prompt: "Implement Fibonacci with memoization using a dictionary. Count total function calls.",
        promptZh: "用字典实现带记忆化的斐波那契。统计总函数调用次数。",
        starterCode: "calls = 0\\ndef fib_memo(n, memo={}):\\n    global calls\\n    calls += 1\\n    # Your code here\\n    pass\\n\\nprint(fib_memo(10))\\nprint(calls)",
        expectedOutput: "55\\n19",
        hint: "Check if n in memo first. If not, compute and store: memo[n] = fib_memo(n-1) + fib_memo(n-2).",
        hintZh: "先检查 n 是否在 memo 中。如果没有，计算并存储：memo[n] = fib_memo(n-1) + fib_memo(n-2)。",
        solution: "calls = 0\\ndef fib_memo(n, memo={}):\\n    global calls\\n    calls += 1\\n    if n in memo:\\n        return memo[n]\\n    if n <= 1:\\n        return n\\n    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)\\n    return memo[n]\\n\\nprint(fib_memo(10))\\nprint(calls)",
      },`,

  "Classic DP: Climbing Stairs": `
      exercise: {
        prompt: "Solve climbing stairs with 1, 2, or 3 steps allowed. How many ways for n=5?",
        promptZh: "解决爬楼梯问题，允许走 1、2 或 3 步。n=5 时有多少种方式？",
        starterCode: "def climb3(n):\\n    # Your code here\\n    pass\\n\\nprint(climb3(3))  # 4\\nprint(climb3(5))  # 13",
        expectedOutput: "4\\n13",
        hint: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]. Base cases: dp[0]=1, dp[1]=1, dp[2]=2.",
        hintZh: "dp[i] = dp[i-1] + dp[i-2] + dp[i-3]。基本情况：dp[0]=1, dp[1]=1, dp[2]=2。",
        solution: "def climb3(n):\\n    if n <= 1:\\n        return 1\\n    if n == 2:\\n        return 2\\n    dp = [0] * (n + 1)\\n    dp[0] = 1\\n    dp[1] = 1\\n    dp[2] = 2\\n    for i in range(3, n + 1):\\n        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]\\n    return dp[n]\\n\\nprint(climb3(3))\\nprint(climb3(5))",
      },`,

  // ─── alg-4-2: Tabulation ───
  "Fibonacci: Three Ways": `
      exercise: {
        prompt: "Implement Fibonacci using ONLY two variables (O(1) space). No array, no recursion.",
        promptZh: "只用两个变量实现斐波那契（O(1) 空间）。不用数组，不用递归。",
        starterCode: "def fib_const(n):\\n    # Your code here\\n    pass\\n\\nprint(fib_const(0))   # 0\\nprint(fib_const(10))  # 55\\nprint(fib_const(20))  # 6765",
        expectedOutput: "0\\n55\\n6765",
        hint: "Use prev=0, curr=1. Loop n times: prev, curr = curr, prev+curr. Return prev.",
        hintZh: "用 prev=0, curr=1。循环 n 次：prev, curr = curr, prev+curr。返回 prev。",
        solution: "def fib_const(n):\\n    if n <= 1:\\n        return n\\n    prev, curr = 0, 1\\n    for _ in range(2, n + 1):\\n        prev, curr = curr, prev + curr\\n    return curr\\n\\nprint(fib_const(0))\\nprint(fib_const(10))\\nprint(fib_const(20))",
      },`,

  "Classic DP: Coin Change": `
      exercise: {
        prompt: "Given coins [1, 5, 10, 25], find the minimum number of coins to make 36 cents.",
        promptZh: "给定硬币 [1, 5, 10, 25]，找出凑 36 美分所需的最少硬币数。",
        starterCode: "def min_coins(coins, amount):\\n    # Your code here\\n    pass\\n\\nprint(min_coins([1, 5, 10, 25], 36))  # 3 (25+10+1)\\nprint(min_coins([1, 5, 10, 25], 30))  # 2 (25+5)",
        expectedOutput: "3\\n2",
        hint: "dp[i] = min coins for amount i. dp[i] = min(dp[i-c] + 1) for each coin c <= i.",
        hintZh: "dp[i] = 凑 i 的最少硬币数。dp[i] = min(dp[i-c] + 1) 对每个 c <= i 的硬币。",
        solution: "def min_coins(coins, amount):\\n    dp = [float('inf')] * (amount + 1)\\n    dp[0] = 0\\n    for i in range(1, amount + 1):\\n        for c in coins:\\n            if c <= i and dp[i-c] + 1 < dp[i]:\\n                dp[i] = dp[i-c] + 1\\n    return dp[amount]\\n\\nprint(min_coins([1, 5, 10, 25], 36))\\nprint(min_coins([1, 5, 10, 25], 30))",
      },`,

  // ─── alg-4-3: Classic DP Problems ───
  "0/1 Knapsack Problem": `
      exercise: {
        prompt: "Solve a simple knapsack: items = [(weight, value)] = [(2,3),(3,4),(4,5),(5,6)], capacity = 8. Print max value.",
        promptZh: "解决简单背包问题：物品 = [(重量, 价值)] = [(2,3),(3,4),(4,5),(5,6)]，容量 = 8。打印最大价值。",
        starterCode: "def knapsack(items, capacity):\\n    # items is list of (weight, value)\\n    # Your code here\\n    pass\\n\\nprint(knapsack([(2,3),(3,4),(4,5),(5,6)], 8))",
        expectedOutput: "10",
        hint: "Use 2D DP: dp[i][w] = max value using first i items with capacity w.",
        hintZh: "用二维 DP：dp[i][w] = 用前 i 个物品、容量 w 的最大价值。",
        solution: "def knapsack(items, capacity):\\n    n = len(items)\\n    dp = [[0]*(capacity+1) for _ in range(n+1)]\\n    for i in range(1, n+1):\\n        w, v = items[i-1]\\n        for c in range(capacity+1):\\n            dp[i][c] = dp[i-1][c]\\n            if w <= c:\\n                dp[i][c] = max(dp[i][c], dp[i-1][c-w] + v)\\n    return dp[n][capacity]\\n\\nprint(knapsack([(2,3),(3,4),(4,5),(5,6)], 8))",
      },`,

  "Longest Common Subsequence (LCS)": `
      exercise: {
        prompt: "Find the LENGTH of the longest common subsequence of 'ABCDE' and 'ACE'.",
        promptZh: "找出 'ABCDE' 和 'ACE' 的最长公共子序列的长度。",
        starterCode: "def lcs_length(s1, s2):\\n    # Your code here\\n    pass\\n\\nprint(lcs_length('ABCDE', 'ACE'))  # 3\\nprint(lcs_length('abc', 'def'))    # 0",
        expectedOutput: "3\\n0",
        hint: "dp[i][j] = LCS length of s1[:i] and s2[:j]. If match: dp[i-1][j-1]+1, else max of dp[i-1][j], dp[i][j-1].",
        hintZh: "dp[i][j] = s1[:i] 和 s2[:j] 的 LCS 长度。匹配：dp[i-1][j-1]+1，否则取 dp[i-1][j] 和 dp[i][j-1] 的最大值。",
        solution: "def lcs_length(s1, s2):\\n    m, n = len(s1), len(s2)\\n    dp = [[0]*(n+1) for _ in range(m+1)]\\n    for i in range(1, m+1):\\n        for j in range(1, n+1):\\n            if s1[i-1] == s2[j-1]:\\n                dp[i][j] = dp[i-1][j-1] + 1\\n            else:\\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\\n    return dp[m][n]\\n\\nprint(lcs_length('ABCDE', 'ACE'))\\nprint(lcs_length('abc', 'def'))",
      },`,

  "Longest Increasing Subsequence (LIS)": `
      exercise: {
        prompt: "Find the actual longest increasing subsequence (not just length). For [10,9,2,5,3,7,101,18], return one valid LIS.",
        promptZh: "找到实际的最长递增子序列（不只是长度）。对 [10,9,2,5,3,7,101,18]，返回一个有效 LIS。",
        starterCode: "def lis_sequence(arr):\\n    # Your code here\\n    pass\\n\\nprint(lis_sequence([10, 9, 2, 5, 3, 7, 101, 18]))",
        expectedOutput: "[2, 3, 7, 18]",
        hint: "Track parent pointers. dp[i] = LIS length ending at i. parent[i] = previous index in LIS.",
        hintZh: "跟踪父指针。dp[i] = 以 i 结尾的 LIS 长度。parent[i] = LIS 中的前一个索引。",
        solution: "def lis_sequence(arr):\\n    n = len(arr)\\n    dp = [1] * n\\n    parent = [-1] * n\\n    for i in range(1, n):\\n        for j in range(i):\\n            if arr[j] < arr[i] and dp[j] + 1 > dp[i]:\\n                dp[i] = dp[j] + 1\\n                parent[i] = j\\n    max_idx = dp.index(max(dp))\\n    result = []\\n    while max_idx != -1:\\n        result.append(arr[max_idx])\\n        max_idx = parent[max_idx]\\n    return result[::-1]\\n\\nprint(lis_sequence([10, 9, 2, 5, 3, 7, 101, 18]))",
      },`,

  // ─── alg-4-4: DP on Grids ───
  "Grid Paths: Count All Paths": `
      exercise: {
        prompt: "Count paths in a 4×4 grid from top-left to bottom-right (only right or down moves).",
        promptZh: "计算 4×4 网格中从左上角到右下角的路径数（只能向右或向下）。",
        starterCode: "def count_paths(m, n):\\n    # Your code here\\n    pass\\n\\nprint(count_paths(4, 4))  # 20\\nprint(count_paths(3, 3))  # 6",
        expectedOutput: "20\\n6",
        hint: "dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row and column are all 1s.",
        hintZh: "dp[i][j] = dp[i-1][j] + dp[i][j-1]。第一行和第一列全是 1。",
        solution: "def count_paths(m, n):\\n    dp = [[1]*n for _ in range(m)]\\n    for i in range(1, m):\\n        for j in range(1, n):\\n            dp[i][j] = dp[i-1][j] + dp[i][j-1]\\n    return dp[m-1][n-1]\\n\\nprint(count_paths(4, 4))\\nprint(count_paths(3, 3))",
      },`,

  "Grid with Obstacles": `
      exercise: {
        prompt: "Count paths in a grid with obstacles. 0=open, 1=blocked. Grid: [[0,0,0],[0,1,0],[0,0,0]].",
        promptZh: "计算有障碍的网格中的路径数。0=通行，1=阻塞。网格：[[0,0,0],[0,1,0],[0,0,0]]。",
        starterCode: "def paths_with_obstacles(grid):\\n    # Your code here\\n    pass\\n\\nprint(paths_with_obstacles([[0,0,0],[0,1,0],[0,0,0]]))  # 2",
        expectedOutput: "2",
        hint: "Same as grid paths, but dp[i][j] = 0 if grid[i][j] == 1 (blocked).",
        hintZh: "和网格路径一样，但如果 grid[i][j] == 1（阻塞），dp[i][j] = 0。",
        solution: "def paths_with_obstacles(grid):\\n    m, n = len(grid), len(grid[0])\\n    dp = [[0]*n for _ in range(m)]\\n    for i in range(m):\\n        if grid[i][0] == 1: break\\n        dp[i][0] = 1\\n    for j in range(n):\\n        if grid[0][j] == 1: break\\n        dp[0][j] = 1\\n    for i in range(1, m):\\n        for j in range(1, n):\\n            if grid[i][j] == 0:\\n                dp[i][j] = dp[i-1][j] + dp[i][j-1]\\n    return dp[m-1][n-1]\\n\\nprint(paths_with_obstacles([[0,0,0],[0,1,0],[0,0,0]]))",
      },`,

  "Minimum Path Sum": `
      exercise: {
        prompt: "Find the minimum path sum AND the actual path (as a list of cell values) from top-left to bottom-right.",
        promptZh: "找到从左上角到右下角的最小路径和以及实际路径（单元格值列表）。",
        starterCode: "def min_path_with_route(grid):\\n    # Return (min_sum, path_list)\\n    pass\\n\\nsum_val, path = min_path_with_route([[1,3,1],[1,5,1],[4,2,1]])\\nprint(sum_val)\\nprint(path)",
        expectedOutput: "7\\n[1, 3, 1, 1, 1]",
        hint: "First compute dp for min sum. Then backtrack from bottom-right to top-left following the minimum.",
        hintZh: "先计算最小和的 dp。然后从右下角回溯到左上角，沿着最小值走。",
        solution: "def min_path_with_route(grid):\\n    m, n = len(grid), len(grid[0])\\n    dp = [[0]*n for _ in range(m)]\\n    dp[0][0] = grid[0][0]\\n    for i in range(1, m):\\n        dp[i][0] = dp[i-1][0] + grid[i][0]\\n    for j in range(1, n):\\n        dp[0][j] = dp[0][j-1] + grid[0][j]\\n    for i in range(1, m):\\n        for j in range(1, n):\\n            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]\\n    path = []\\n    i, j = m-1, n-1\\n    while i > 0 or j > 0:\\n        path.append(grid[i][j])\\n        if i == 0: j -= 1\\n        elif j == 0: i -= 1\\n        elif dp[i-1][j] < dp[i][j-1]: i -= 1\\n        else: j -= 1\\n    path.append(grid[0][0])\\n    return dp[m-1][n-1], path[::-1]\\n\\nsum_val, path = min_path_with_route([[1,3,1],[1,5,1],[4,2,1]])\\nprint(sum_val)\\nprint(path)",
      },`,

  // ─── alg-5-1: BFS & DFS ───
  "BFS — Breadth-First Search": `
      exercise: {
        prompt: "Implement BFS that returns the ORDER in which nodes are visited, starting from node 0.",
        promptZh: "实现 BFS，返回从节点 0 开始访问节点的顺序。",
        starterCode: "from collections import deque\\ndef bfs_order(graph, start):\\n    # graph is adjacency list (dict)\\n    # Your code here\\n    pass\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(bfs_order(g, 0))",
        expectedOutput: "[0, 1, 2, 3, 4]",
        hint: "Use a queue and visited set. Dequeue, add to result, enqueue unvisited neighbors.",
        hintZh: "用队列和已访问集合。出队，加入结果，将未访问的邻居入队。",
        solution: "from collections import deque\\ndef bfs_order(graph, start):\\n    visited = set([start])\\n    queue = deque([start])\\n    order = []\\n    while queue:\\n        node = queue.popleft()\\n        order.append(node)\\n        for neighbor in graph.get(node, []):\\n            if neighbor not in visited:\\n                visited.add(neighbor)\\n                queue.append(neighbor)\\n    return order\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(bfs_order(g, 0))",
      },`,

  "DFS — Depth-First Search": `
      exercise: {
        prompt: "Implement iterative DFS (using a stack) that returns visit order starting from node 0.",
        promptZh: "实现迭代 DFS（用栈），返回从节点 0 开始的访问顺序。",
        starterCode: "def dfs_iterative(graph, start):\\n    # Your code here\\n    pass\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(dfs_iterative(g, 0))",
        expectedOutput: "[0, 2, 4, 3, 1]",
        hint: "Use a stack (list). Pop, add to result if not visited, push neighbors.",
        hintZh: "用栈（列表）。弹出，如果未访问就加入结果，将邻居压栈。",
        solution: "def dfs_iterative(graph, start):\\n    visited = set()\\n    stack = [start]\\n    order = []\\n    while stack:\\n        node = stack.pop()\\n        if node not in visited:\\n            visited.add(node)\\n            order.append(node)\\n            for neighbor in reversed(graph.get(node, [])):\\n                if neighbor not in visited:\\n                    stack.append(neighbor)\\n    return order\\n\\ng = {0:[1,2], 1:[3], 2:[3,4], 3:[], 4:[]}\\nprint(dfs_iterative(g, 0))",
      },`,

  "Application: Shortest Path in Unweighted Graph": `
      exercise: {
        prompt: "Use BFS to find the shortest distance from node 0 to ALL other nodes. Return a distance dictionary.",
        promptZh: "用 BFS 找到从节点 0 到所有其他节点的最短距离。返回距离字典。",
        starterCode: "from collections import deque\\ndef bfs_distances(graph, start):\\n    # Your code here\\n    pass\\n\\ng = {0:[1,2], 1:[0,3], 2:[0,3,4], 3:[1,2], 4:[2]}\\nprint(bfs_distances(g, 0))",
        expectedOutput: "{0: 0, 1: 1, 2: 1, 3: 2, 4: 2}",
        hint: "BFS naturally finds shortest paths. Track distance for each node when you first visit it.",
        hintZh: "BFS 天然找到最短路径。首次访问每个节点时记录距离。",
        solution: "from collections import deque\\ndef bfs_distances(graph, start):\\n    dist = {start: 0}\\n    queue = deque([start])\\n    while queue:\\n        node = queue.popleft()\\n        for neighbor in graph.get(node, []):\\n            if neighbor not in dist:\\n                dist[neighbor] = dist[node] + 1\\n                queue.append(neighbor)\\n    return dist\\n\\ng = {0:[1,2], 1:[0,3], 2:[0,3,4], 3:[1,2], 4:[2]}\\nprint(bfs_distances(g, 0))",
      },`,

  // ─── alg-5-2: Dijkstra's ───
  "Dijkstra's Algorithm": `
      exercise: {
        prompt: "Find the shortest path distance from 'A' to all nodes in a weighted graph using Dijkstra's algorithm.",
        promptZh: "用 Dijkstra 算法找到从 'A' 到加权图中所有节点的最短路径距离。",
        starterCode: "import heapq\\ndef dijkstra(graph, start):\\n    # graph: {node: [(neighbor, weight), ...]}\\n    # Your code here\\n    pass\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nprint(dijkstra(g, 'A'))",
        expectedOutput: "{'A': 0, 'B': 1, 'C': 3, 'D': 4}",
        hint: "Use a min-heap. Pop smallest distance node, update neighbors if shorter path found.",
        hintZh: "用最小堆。弹出最小距离节点，如果找到更短路径就更新邻居。",
        solution: "import heapq\\ndef dijkstra(graph, start):\\n    dist = {start: 0}\\n    heap = [(0, start)]\\n    while heap:\\n        d, node = heapq.heappop(heap)\\n        if d > dist.get(node, float('inf')):\\n            continue\\n        for neighbor, weight in graph.get(node, []):\\n            new_dist = d + weight\\n            if new_dist < dist.get(neighbor, float('inf')):\\n                dist[neighbor] = new_dist\\n                heapq.heappush(heap, (new_dist, neighbor))\\n    return dist\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\nprint(dijkstra(g, 'A'))",
      },`,

  "Dijkstra in a City Map": `
      exercise: {
        prompt: "Modify Dijkstra to also return the actual shortest PATH (not just distance) from start to a target node.",
        promptZh: "修改 Dijkstra，返回从起点到目标节点的实际最短路径（不只是距离）。",
        starterCode: "import heapq\\ndef dijkstra_path(graph, start, end):\\n    # Return (distance, path_list)\\n    pass\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\ndist, path = dijkstra_path(g, 'A', 'D')\\nprint(dist)\\nprint(path)",
        expectedOutput: "4\\n['A', 'B', 'C', 'D']",
        hint: "Track parent pointers. When you update a distance, record where you came from. Backtrack at the end.",
        hintZh: "跟踪父指针。更新距离时记录来源。最后回溯。",
        solution: "import heapq\\ndef dijkstra_path(graph, start, end):\\n    dist = {start: 0}\\n    parent = {start: None}\\n    heap = [(0, start)]\\n    while heap:\\n        d, node = heapq.heappop(heap)\\n        if node == end:\\n            break\\n        if d > dist.get(node, float('inf')):\\n            continue\\n        for nbr, w in graph.get(node, []):\\n            nd = d + w\\n            if nd < dist.get(nbr, float('inf')):\\n                dist[nbr] = nd\\n                parent[nbr] = node\\n                heapq.heappush(heap, (nd, nbr))\\n    path = []\\n    n = end\\n    while n is not None:\\n        path.append(n)\\n        n = parent.get(n)\\n    return dist[end], path[::-1]\\n\\ng = {'A':[('B',1),('C',4)], 'B':[('C',2),('D',5)], 'C':[('D',1)], 'D':[]}\\ndist, path = dijkstra_path(g, 'A', 'D')\\nprint(dist)\\nprint(path)",
      },`,

  // ─── alg-5-3: Topological Sort ───
  "Kahn's Algorithm (BFS-based)": `
      exercise: {
        prompt: "Implement Kahn's algorithm for topological sort. Return the sorted order.",
        promptZh: "实现 Kahn 算法进行拓扑排序。返回排序顺序。",
        starterCode: "from collections import deque\\ndef topo_sort(n, edges):\\n    # n = num nodes (0 to n-1), edges = [(from, to), ...]\\n    # Your code here\\n    pass\\n\\nprint(topo_sort(4, [(0,1),(0,2),(1,3),(2,3)]))",
        expectedOutput: "[0, 1, 2, 3]",
        hint: "Build adjacency list + in-degree array. Start with in-degree 0 nodes. Process queue, decrement neighbors' in-degree.",
        hintZh: "建立邻接表和入度数组。从入度为 0 的节点开始。处理队列，减少邻居的入度。",
        solution: "from collections import deque\\ndef topo_sort(n, edges):\\n    adj = [[] for _ in range(n)]\\n    indegree = [0] * n\\n    for u, v in edges:\\n        adj[u].append(v)\\n        indegree[v] += 1\\n    queue = deque([i for i in range(n) if indegree[i] == 0])\\n    order = []\\n    while queue:\\n        node = queue.popleft()\\n        order.append(node)\\n        for nbr in adj[node]:\\n            indegree[nbr] -= 1\\n            if indegree[nbr] == 0:\\n                queue.append(nbr)\\n    return order\\n\\nprint(topo_sort(4, [(0,1),(0,2),(1,3),(2,3)]))",
      },`,

  "DFS-based Topological Sort": `
      exercise: {
        prompt: "Implement DFS-based topological sort using post-order and stack reversal.",
        promptZh: "用后序遍历和栈反转实现基于 DFS 的拓扑排序。",
        starterCode: "def topo_sort_dfs(n, edges):\\n    # Your code here\\n    pass\\n\\nprint(topo_sort_dfs(4, [(0,1),(0,2),(1,3),(2,3)]))",
        expectedOutput: "[0, 2, 1, 3]",
        hint: "DFS each unvisited node. After visiting all neighbors, append to stack. Reverse at end.",
        hintZh: "DFS 每个未访问节点。访问完所有邻居后加入栈。最后反转。",
        solution: "def topo_sort_dfs(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v)\\n    visited = set()\\n    stack = []\\n    def dfs(node):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited:\\n                dfs(nbr)\\n        stack.append(node)\\n    for i in range(n):\\n        if i not in visited:\\n            dfs(i)\\n    return stack[::-1]\\n\\nprint(topo_sort_dfs(4, [(0,1),(0,2),(1,3),(2,3)]))",
      },`,

  // ─── alg-5-4: Graph Applications ───
  "Cycle Detection": `
      exercise: {
        prompt: "Detect if an undirected graph has a cycle using DFS. Return True/False.",
        promptZh: "用 DFS 检测无向图是否有环。返回 True/False。",
        starterCode: "def has_cycle(n, edges):\\n    # n = nodes (0 to n-1), edges = [(u,v), ...]\\n    # Your code here\\n    pass\\n\\nprint(has_cycle(4, [(0,1),(1,2),(2,3)]))         # False\\nprint(has_cycle(4, [(0,1),(1,2),(2,3),(3,0)]))    # True",
        expectedOutput: "False\\nTrue",
        hint: "DFS with parent tracking. If you visit a neighbor that's already visited and not your parent → cycle!",
        hintZh: "带父节点跟踪的 DFS。如果访问到已访问的邻居且不是父节点 → 有环！",
        solution: "def has_cycle(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v)\\n        adj[v].append(u)\\n    visited = set()\\n    def dfs(node, parent):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited:\\n                if dfs(nbr, node):\\n                    return True\\n            elif nbr != parent:\\n                return True\\n        return False\\n    for i in range(n):\\n        if i not in visited:\\n            if dfs(i, -1):\\n                return True\\n    return False\\n\\nprint(has_cycle(4, [(0,1),(1,2),(2,3)]))\\nprint(has_cycle(4, [(0,1),(1,2),(2,3),(3,0)]))",
      },`,

  "Bipartite Graph Check": `
      exercise: {
        prompt: "Check if a graph is bipartite using BFS coloring. Return True/False.",
        promptZh: "用 BFS 着色检查图是否是二部图。返回 True/False。",
        starterCode: "from collections import deque\\ndef is_bipartite(n, edges):\\n    # Your code here\\n    pass\\n\\nprint(is_bipartite(4, [(0,1),(1,2),(2,3)]))         # True\\nprint(is_bipartite(3, [(0,1),(1,2),(2,0)]))         # False (odd cycle)",
        expectedOutput: "True\\nFalse",
        hint: "Color start node 0. BFS: color neighbors with opposite color. If conflict → not bipartite.",
        hintZh: "给起始节点着色 0。BFS：给邻居着相反颜色。如果冲突 → 不是二部图。",
        solution: "from collections import deque\\ndef is_bipartite(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v)\\n        adj[v].append(u)\\n    color = [-1] * n\\n    for start in range(n):\\n        if color[start] != -1:\\n            continue\\n        color[start] = 0\\n        queue = deque([start])\\n        while queue:\\n            node = queue.popleft()\\n            for nbr in adj[node]:\\n                if color[nbr] == -1:\\n                    color[nbr] = 1 - color[node]\\n                    queue.append(nbr)\\n                elif color[nbr] == color[node]:\\n                    return False\\n    return True\\n\\nprint(is_bipartite(4, [(0,1),(1,2),(2,3)]))\\nprint(is_bipartite(3, [(0,1),(1,2),(2,0)]))",
      },`,

  "Graph Applications Showcase": `
      exercise: {
        prompt: "Count the number of connected components in an undirected graph using DFS.",
        promptZh: "用 DFS 计算无向图中连通分量的数量。",
        starterCode: "def count_components(n, edges):\\n    # Your code here\\n    pass\\n\\nprint(count_components(5, [(0,1),(2,3)]))  # 3\\nprint(count_components(4, [(0,1),(1,2),(2,3)]))  # 1",
        expectedOutput: "3\\n1",
        hint: "Build adjacency list. DFS from each unvisited node. Each DFS call = one component.",
        hintZh: "建立邻接表。从每个未访问节点 DFS。每次 DFS 调用 = 一个连通分量。",
        solution: "def count_components(n, edges):\\n    adj = [[] for _ in range(n)]\\n    for u, v in edges:\\n        adj[u].append(v)\\n        adj[v].append(u)\\n    visited = set()\\n    count = 0\\n    def dfs(node):\\n        visited.add(node)\\n        for nbr in adj[node]:\\n            if nbr not in visited:\\n                dfs(nbr)\\n    for i in range(n):\\n        if i not in visited:\\n            dfs(i)\\n            count += 1\\n    return count\\n\\nprint(count_components(5, [(0,1),(2,3)]))\\nprint(count_components(4, [(0,1),(1,2),(2,3)]))",
      },`,
};

// ═══════════════════════════════════════════════════
// CHALLENGES: 2+ per lesson (keyed by lesson variable name)
// ═══════════════════════════════════════════════════

const challenges = {
  "alg_1_1": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔍 Frequency Counter · 频率计数器",
        description: "Write a function that finds the MOST FREQUENT element in an array using linear search concepts. Return the element and its count as a tuple.\\n用线性搜索概念写一个函数，找到数组中出现最多的元素。返回元素和出现次数的元组。",
        starterCode: "def most_frequent(arr):\\n    # Find the element that appears most often\\n    # Return (element, count)\\n    pass\\n\\nprint(most_frequent([1,3,2,1,4,1,3,1]))  # (1, 4)",
        hint: "Count each element by scanning the full array for each unique value. Or use a dictionary to count.\\n对每个唯一值扫描整个数组来计数。或者用字典来计数。",
        solution: "def most_frequent(arr):\\n    counts = {}\\n    for x in arr:\\n        counts[x] = counts.get(x, 0) + 1\\n    best = max(counts, key=counts.get)\\n    return (best, counts[best])\\n\\nprint(most_frequent([1,3,2,1,4,1,3,1]))",
        expectedOutput: "(1, 4)",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎯 Two Sum Search · 两数之和搜索",
        description: "Given an array and a target sum, find TWO elements that add up to the target. Return their indices as a tuple.\\n给定数组和目标和，找到两个加起来等于目标的元素。返回它们的索引元组。",
        starterCode: "def two_sum(arr, target):\\n    # Find indices i,j where arr[i]+arr[j]==target\\n    pass\\n\\nprint(two_sum([2, 7, 11, 15], 9))  # (0, 1)",
        hint: "Use nested loops (brute force) or a dictionary to store seen values.\\n用嵌套循环（暴力）或字典存储已见的值。",
        solution: "def two_sum(arr, target):\\n    seen = {}\\n    for i, x in enumerate(arr):\\n        complement = target - x\\n        if complement in seen:\\n            return (seen[complement], i)\\n        seen[x] = i\\n    return None\\n\\nprint(two_sum([2, 7, 11, 15], 9))",
        expectedOutput: "(0, 1)",
      },
    }`,
  ],
  "alg_1_2": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📖 Count Occurrences · 计算出现次数",
        description: "Use binary search to count how many times a target appears in a sorted array in O(log n) time.\\n用二分搜索在 O(log n) 时间内计算排序数组中目标出现的次数。",
        starterCode: "def count_occurrences(arr, target):\\n    # Use binary search to find first and last position\\n    pass\\n\\nprint(count_occurrences([1,2,2,2,3,4,5], 2))  # 3\\nprint(count_occurrences([1,2,3,4,5], 6))       # 0",
        hint: "Find the leftmost and rightmost positions using binary search. Count = right - left + 1.\\n用二分搜索找到最左和最右位置。次数 = right - left + 1。",
        solution: "def count_occurrences(arr, target):\\n    def find_left(arr, t):\\n        lo, hi = 0, len(arr) - 1\\n        while lo <= hi:\\n            mid = (lo + hi) // 2\\n            if arr[mid] < t: lo = mid + 1\\n            else: hi = mid - 1\\n        return lo\\n    def find_right(arr, t):\\n        lo, hi = 0, len(arr) - 1\\n        while lo <= hi:\\n            mid = (lo + hi) // 2\\n            if arr[mid] <= t: lo = mid + 1\\n            else: hi = mid - 1\\n        return hi\\n    left = find_left(arr, target)\\n    right = find_right(arr, target)\\n    if left > right: return 0\\n    return right - left + 1\\n\\nprint(count_occurrences([1,2,2,2,3,4,5], 2))\\nprint(count_occurrences([1,2,3,4,5], 6))",
        expectedOutput: "3\\n0",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎯 Peak Finder · 峰值查找器",
        description: "Find a peak element in an array using binary search. A peak is greater than its neighbors. Return its index.\\n用二分搜索在数组中找到峰值元素。峰值大于其邻居。返回其索引。",
        starterCode: "def find_peak(arr):\\n    # Binary search for a peak element\\n    pass\\n\\nprint(find_peak([1, 3, 20, 4, 1, 0]))  # 2",
        hint: "If arr[mid] < arr[mid+1], peak is on the right. Otherwise peak is on the left (or mid is peak).\\n如果 arr[mid] < arr[mid+1]，峰值在右边。否则在左边（或 mid 就是峰值）。",
        solution: "def find_peak(arr):\\n    lo, hi = 0, len(arr) - 1\\n    while lo < hi:\\n        mid = (lo + hi) // 2\\n        if arr[mid] < arr[mid + 1]:\\n            lo = mid + 1\\n        else:\\n            hi = mid\\n    return lo\\n\\nprint(find_peak([1, 3, 20, 4, 1, 0]))",
        expectedOutput: "2",
      },
    }`,
  ],
  "alg_1_3": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🗺️ Island Counter · 岛屿计数器",
        description: "Count the number of islands (connected 1s) in a 2D grid using search.\\n用搜索计算二维网格中岛屿（相连的 1）的数量。",
        starterCode: "def count_islands(grid):\\n    # 1 = land, 0 = water\\n    pass\\n\\ngrid = [\\n    [1,1,0,0,0],\\n    [1,1,0,0,0],\\n    [0,0,1,0,0],\\n    [0,0,0,1,1]\\n]\\nprint(count_islands(grid))  # 3",
        hint: "Scan grid. When you find a 1, increment count and DFS/BFS to mark all connected 1s as visited.\\n扫描网格。找到 1 时计数加 1，用 DFS/BFS 标记所有相连的 1 为已访问。",
        solution: "def count_islands(grid):\\n    if not grid: return 0\\n    rows, cols = len(grid), len(grid[0])\\n    count = 0\\n    def dfs(r, c):\\n        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == 0:\\n            return\\n        grid[r][c] = 0\\n        dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1)\\n    for r in range(rows):\\n        for c in range(cols):\\n            if grid[r][c] == 1:\\n                count += 1\\n                dfs(r, c)\\n    return count\\n\\ngrid = [\\n    [1,1,0,0,0],\\n    [1,1,0,0,0],\\n    [0,0,1,0,0],\\n    [0,0,0,1,1]\\n]\\nprint(count_islands(grid))",
        expectedOutput: "3",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Row-Column Binary Search · 行列二分搜索",
        description: "Search a matrix where each row is sorted (but rows aren't connected). Use binary search on each row. Return (row, col) or (-1,-1).\\n搜索每行排序的矩阵（行之间不连续）。对每行用二分搜索。返回 (行, 列) 或 (-1,-1)。",
        starterCode: "def search_rows(matrix, target):\\n    pass\\n\\nm = [[1,3,5],[7,9,11],[2,4,6]]\\nprint(search_rows(m, 9))   # (1, 1)\\nprint(search_rows(m, 8))   # (-1, -1)",
        hint: "For each row, do binary search. O(m·log n) total.\\n对每行做二分搜索。总计 O(m·log n)。",
        solution: "def search_rows(matrix, target):\\n    for i, row in enumerate(matrix):\\n        lo, hi = 0, len(row) - 1\\n        while lo <= hi:\\n            mid = (lo + hi) // 2\\n            if row[mid] == target:\\n                return (i, mid)\\n            elif row[mid] < target:\\n                lo = mid + 1\\n            else:\\n                hi = mid - 1\\n    return (-1, -1)\\n\\nm = [[1,3,5],[7,9,11],[2,4,6]]\\nprint(search_rows(m, 9))\\nprint(search_rows(m, 8))",
        expectedOutput: "(1, 1)\\n(-1, -1)",
      },
    }`,
  ],
  "alg_1_4": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📏 Minimum Difference Pair · 最小差值对",
        description: "Given a sorted array, find the pair of elements with the smallest absolute difference. Return the pair.\\n给定排序数组，找到绝对差最小的元素对。返回该对。",
        starterCode: "def min_diff_pair(arr):\\n    # arr is sorted\\n    pass\\n\\nprint(min_diff_pair([1, 3, 4, 8, 13, 17, 20]))  # (3, 4)",
        hint: "In a sorted array, minimum difference must be between adjacent elements.\\n在排序数组中，最小差值一定在相邻元素之间。",
        solution: "def min_diff_pair(arr):\\n    min_diff = float('inf')\\n    pair = (arr[0], arr[1])\\n    for i in range(len(arr) - 1):\\n        diff = arr[i+1] - arr[i]\\n        if diff < min_diff:\\n            min_diff = diff\\n            pair = (arr[i], arr[i+1])\\n    return pair\\n\\nprint(min_diff_pair([1, 3, 4, 8, 13, 17, 20]))",
        expectedOutput: "(3, 4)",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Search in Bitonic Array · 双调数组搜索",
        description: "A bitonic array first increases then decreases. Find a target using O(log n) search.\\n双调数组先增后减。用 O(log n) 搜索找目标。",
        starterCode: "def bitonic_search(arr, target):\\n    pass\\n\\nprint(bitonic_search([1,3,8,12,4,2], 4))   # 4\\nprint(bitonic_search([1,3,8,12,4,2], 13))  # -1",
        hint: "First find the peak. Then binary search left half (ascending) and right half (descending).\\n先找到峰值。然后对左半（升序）和右半（降序）分别二分搜索。",
        solution: "def bitonic_search(arr, target):\\n    # Find peak\\n    lo, hi = 0, len(arr) - 1\\n    while lo < hi:\\n        mid = (lo + hi) // 2\\n        if arr[mid] < arr[mid+1]: lo = mid + 1\\n        else: hi = mid\\n    peak = lo\\n    # Search ascending\\n    lo, hi = 0, peak\\n    while lo <= hi:\\n        mid = (lo + hi) // 2\\n        if arr[mid] == target: return mid\\n        elif arr[mid] < target: lo = mid + 1\\n        else: hi = mid - 1\\n    # Search descending\\n    lo, hi = peak, len(arr) - 1\\n    while lo <= hi:\\n        mid = (lo + hi) // 2\\n        if arr[mid] == target: return mid\\n        elif arr[mid] > target: lo = mid + 1\\n        else: hi = mid - 1\\n    return -1\\n\\nprint(bitonic_search([1,3,8,12,4,2], 4))\\nprint(bitonic_search([1,3,8,12,4,2], 13))",
        expectedOutput: "4\\n-1",
      },
    }`,
  ],
  "alg_2_1": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎨 Dutch National Flag · 荷兰国旗问题",
        description: "Sort an array of 0s, 1s, and 2s in one pass (without using sort()). This is the Dutch National Flag problem.\\n一趟排序包含 0、1、2 的数组（不用 sort()）。这是荷兰国旗问题。",
        starterCode: "def dutch_flag(arr):\\n    # Sort in-place, one pass\\n    pass\\n    return arr\\n\\nprint(dutch_flag([2,0,1,2,1,0,0,2,1]))  # [0,0,0,1,1,1,2,2,2]",
        hint: "Use three pointers: low (for 0s), mid (current), high (for 2s). Swap based on value at mid.\\n用三个指针：low（放 0）、mid（当前）、high（放 2）。根据 mid 的值交换。",
        solution: "def dutch_flag(arr):\\n    lo, mid, hi = 0, 0, len(arr) - 1\\n    while mid <= hi:\\n        if arr[mid] == 0:\\n            arr[lo], arr[mid] = arr[mid], arr[lo]\\n            lo += 1\\n            mid += 1\\n        elif arr[mid] == 1:\\n            mid += 1\\n        else:\\n            arr[mid], arr[hi] = arr[hi], arr[mid]\\n            hi -= 1\\n    return arr\\n\\nprint(dutch_flag([2,0,1,2,1,0,0,2,1]))",
        expectedOutput: "[0, 0, 0, 1, 1, 1, 2, 2, 2]",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Sort Stability Test · 排序稳定性测试",
        description: "Sort a list of (name, score) tuples by score. If scores are equal, maintain original order (stable sort).\\n按分数排序 (姓名, 分数) 元组列表。分数相同时保持原始顺序（稳定排序）。",
        starterCode: "def stable_sort(students):\\n    # Sort by score, keep original order for ties\\n    pass\\n\\nstudents = [('Alice',85),('Bob',92),('Carol',85),('Dave',92)]\\nfor s in stable_sort(students):\\n    print(s)",
        hint: "Insertion sort is naturally stable. Compare only the scores (index 1).\\n插入排序天然稳定。只比较分数（索引 1）。",
        solution: "def stable_sort(students):\\n    a = students[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i - 1\\n        while j >= 0 and a[j][1] > key[1]:\\n            a[j+1] = a[j]\\n            j -= 1\\n        a[j+1] = key\\n    return a\\n\\nstudents = [('Alice',85),('Bob',92),('Carol',85),('Dave',92)]\\nfor s in stable_sort(students):\\n    print(s)",
        expectedOutput: "('Alice', 85)\\n('Carol', 85)\\n('Bob', 92)\\n('Dave', 92)",
      },
    }`,
  ],
  "alg_2_2": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔗 Merge K Sorted Lists · 合并 K 个排序列表",
        description: "Merge 3 sorted lists into one sorted list using the merge function repeatedly.\\n用合并函数反复合并 3 个排序列表为一个排序列表。",
        starterCode: "def merge_k_lists(lists):\\n    # Merge all sorted lists into one\\n    pass\\n\\nprint(merge_k_lists([[1,4,7],[2,5,8],[3,6,9]]))",
        hint: "Merge the first two lists, then merge the result with the third. Use the merge function from the lesson.\\n先合并前两个列表，再将结果与第三个合并。使用课程中的 merge 函数。",
        solution: "def merge_k_lists(lists):\\n    def merge(a, b):\\n        result = []\\n        i = j = 0\\n        while i < len(a) and j < len(b):\\n            if a[i] <= b[j]:\\n                result.append(a[i]); i += 1\\n            else:\\n                result.append(b[j]); j += 1\\n        result.extend(a[i:])\\n        result.extend(b[j:])\\n        return result\\n    result = lists[0]\\n    for i in range(1, len(lists)):\\n        result = merge(result, lists[i])\\n    return result\\n\\nprint(merge_k_lists([[1,4,7],[2,5,8],[3,6,9]]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Inversion Count · 逆序对计数",
        description: "Count inversions using merge sort (O(n log n)). An inversion is when i < j but arr[i] > arr[j].\\n用归并排序计算逆序对（O(n log n)）。逆序对是 i < j 但 arr[i] > arr[j]。",
        starterCode: "def count_inversions(arr):\\n    # Return (sorted_array, inversion_count)\\n    pass\\n\\n_, count = count_inversions([5, 4, 3, 2, 1])\\nprint(count)  # 10",
        hint: "Modify merge sort: during merge, when right element < left element, count += len(left) - i.\\n修改归并排序：合并时，当右元素 < 左元素，count += len(left) - i。",
        solution: "def count_inversions(arr):\\n    if len(arr) <= 1:\\n        return arr, 0\\n    mid = len(arr) // 2\\n    left, l_inv = count_inversions(arr[:mid])\\n    right, r_inv = count_inversions(arr[mid:])\\n    merged = []\\n    inversions = l_inv + r_inv\\n    i = j = 0\\n    while i < len(left) and j < len(right):\\n        if left[i] <= right[j]:\\n            merged.append(left[i]); i += 1\\n        else:\\n            merged.append(right[j]); j += 1\\n            inversions += len(left) - i\\n    merged.extend(left[i:])\\n    merged.extend(right[j:])\\n    return merged, inversions\\n\\n_, count = count_inversions([5, 4, 3, 2, 1])\\nprint(count)",
        expectedOutput: "10",
      },
    }`,
  ],
  "alg_2_3": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎲 Kth Smallest Element · 第 K 小元素",
        description: "Find the kth smallest element using Quick Select (partition-based, average O(n)).\\n用快速选择（基于分区，平均 O(n)）找到第 k 小的元素。",
        starterCode: "def kth_smallest(arr, k):\\n    # k is 1-indexed\\n    pass\\n\\nprint(kth_smallest([7,10,4,3,20,15], 3))  # 7\\nprint(kth_smallest([7,10,4,3,20,15], 1))  # 3",
        hint: "Partition around pivot. If pivot position == k-1, return it. If k-1 < position, search left. Otherwise search right.\\n围绕枢轴分区。如果枢轴位置 == k-1，返回它。如果 k-1 < 位置，搜索左边。否则搜索右边。",
        solution: "def kth_smallest(arr, k):\\n    a = arr[:]\\n    def select(lo, hi, k):\\n        pivot = a[hi]\\n        i = lo\\n        for j in range(lo, hi):\\n            if a[j] <= pivot:\\n                a[i], a[j] = a[j], a[i]\\n                i += 1\\n        a[i], a[hi] = a[hi], a[i]\\n        if i == k - 1: return a[i]\\n        elif i > k - 1: return select(lo, i - 1, k)\\n        else: return select(i + 1, hi, k)\\n    return select(0, len(a) - 1, k)\\n\\nprint(kth_smallest([7,10,4,3,20,15], 3))\\nprint(kth_smallest([7,10,4,3,20,15], 1))",
        expectedOutput: "7\\n3",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔀 Three-Way Partition · 三路分区",
        description: "Implement three-way partition (used in Quick Sort optimization): elements < pivot, == pivot, > pivot.\\n实现三路分区（快速排序优化）：< 枢轴、== 枢轴、> 枢轴 的元素。",
        starterCode: "def three_way_partition(arr, pivot):\\n    # Return (less, equal, greater) as three lists\\n    pass\\n\\nlo, eq, hi = three_way_partition([4,9,4,4,1,9,4,4,9,4,4,1,4], 4)\\nprint(lo)\\nprint(eq)\\nprint(hi)",
        hint: "Three lists: scan array, compare each element to pivot.\\n三个列表：扫描数组，将每个元素与枢轴比较。",
        solution: "def three_way_partition(arr, pivot):\\n    less = [x for x in arr if x < pivot]\\n    equal = [x for x in arr if x == pivot]\\n    greater = [x for x in arr if x > pivot]\\n    return less, equal, greater\\n\\nlo, eq, hi = three_way_partition([4,9,4,4,1,9,4,4,9,4,4,1,4], 4)\\nprint(lo)\\nprint(eq)\\nprint(hi)",
        expectedOutput: "[1, 1]\\n[4, 4, 4, 4, 4, 4, 4, 4]\\n[9, 9, 9]",
      },
    }`,
  ],
  "alg_2_4": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📊 Counting Sort · 计数排序",
        description: "Implement counting sort for an array of integers in range [0, k]. This achieves O(n+k) time!\\n实现对 [0, k] 范围内整数数组的计数排序。时间复杂度 O(n+k)！",
        starterCode: "def counting_sort(arr, k):\\n    # k = maximum value in array\\n    pass\\n\\nprint(counting_sort([4,2,2,8,3,3,1], 8))",
        hint: "Create count array of size k+1. Count occurrences. Rebuild sorted array from counts.\\n创建大小 k+1 的计数数组。统计出现次数。从计数重建排序数组。",
        solution: "def counting_sort(arr, k):\\n    count = [0] * (k + 1)\\n    for x in arr:\\n        count[x] += 1\\n    result = []\\n    for i in range(k + 1):\\n        result.extend([i] * count[i])\\n    return result\\n\\nprint(counting_sort([4,2,2,8,3,3,1], 8))",
        expectedOutput: "[1, 2, 2, 3, 3, 4, 8]",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🏆 Sort Olympics · 排序奥运会",
        description: "Implement ALL three simple sorts and verify they produce the same output. Print sorted results from each.\\n实现三种简单排序，验证它们产生相同输出。打印每种的排序结果。",
        starterCode: "data = [64, 34, 25, 12, 22, 11, 90]\\n\\ndef bubble(arr):\\n    pass\\ndef selection(arr):\\n    pass\\ndef insertion(arr):\\n    pass\\n\\nprint(bubble(data[:]))\\nprint(selection(data[:]))\\nprint(insertion(data[:]))",
        hint: "Implement each sort independently. They should all output the same sorted array.\\n独立实现每种排序。它们应该输出相同的排序数组。",
        solution: "data = [64, 34, 25, 12, 22, 11, 90]\\n\\ndef bubble(arr):\\n    a = arr[:]\\n    for i in range(len(a)):\\n        for j in range(len(a)-1-i):\\n            if a[j] > a[j+1]: a[j], a[j+1] = a[j+1], a[j]\\n    return a\\n\\ndef selection(arr):\\n    a = arr[:]\\n    for i in range(len(a)):\\n        m = i\\n        for j in range(i+1, len(a)):\\n            if a[j] < a[m]: m = j\\n        a[i], a[m] = a[m], a[i]\\n    return a\\n\\ndef insertion(arr):\\n    a = arr[:]\\n    for i in range(1, len(a)):\\n        key = a[i]\\n        j = i - 1\\n        while j >= 0 and a[j] > key:\\n            a[j+1] = a[j]; j -= 1\\n        a[j+1] = key\\n    return a\\n\\nprint(bubble(data[:]))\\nprint(selection(data[:]))\\nprint(insertion(data[:]))",
        expectedOutput: "[11, 12, 22, 25, 34, 64, 90]\\n[11, 12, 22, 25, 34, 64, 90]\\n[11, 12, 22, 25, 34, 64, 90]",
      },
    }`,
  ],
  "alg_3_1": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌀 Recursive Power · 递归幂",
        description: "Write a recursive function to calculate base^exp without using ** operator.\\n写一个递归函数计算 base^exp，不用 ** 运算符。",
        starterCode: "def power(base, exp):\\n    pass\\n\\nprint(power(2, 10))  # 1024\\nprint(power(3, 0))   # 1\\nprint(power(5, 3))   # 125",
        hint: "Base case: exp == 0 → return 1. Recursive: base * power(base, exp-1).\\n基本情况：exp == 0 → 返回 1。递归：base * power(base, exp-1)。",
        solution: "def power(base, exp):\\n    if exp == 0:\\n        return 1\\n    return base * power(base, exp - 1)\\n\\nprint(power(2, 10))\\nprint(power(3, 0))\\nprint(power(5, 3))",
        expectedOutput: "1024\\n1\\n125",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Flatten Nested List · 展平嵌套列表",
        description: "Recursively flatten a nested list of arbitrary depth.\\n递归展平任意深度的嵌套列表。",
        starterCode: "def flatten(lst):\\n    pass\\n\\nprint(flatten([1, [2, [3, 4], 5], [6, 7]]))  # [1,2,3,4,5,6,7]\\nprint(flatten([[1,[2]],3]))  # [1,2,3]",
        hint: "For each element: if it's a list, recursively flatten it. Otherwise, add it to result.\\n对每个元素：如果是列表，递归展平。否则加入结果。",
        solution: "def flatten(lst):\\n    result = []\\n    for item in lst:\\n        if isinstance(item, list):\\n            result.extend(flatten(item))\\n        else:\\n            result.append(item)\\n    return result\\n\\nprint(flatten([1, [2, [3, 4], 5], [6, 7]]))\\nprint(flatten([[1,[2]],3]))",
        expectedOutput: "[1, 2, 3, 4, 5, 6, 7]\\n[1, 2, 3]",
      },
    }`,
  ],
  "alg_3_2": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🌳 Binary Tree Depth · 二叉树深度",
        description: "Calculate the maximum depth of a binary tree represented as nested tuples (value, left, right).\\n计算用嵌套元组 (值, 左, 右) 表示的二叉树的最大深度。",
        starterCode: "def max_depth(tree):\\n    # tree = (value, left, right) or None\\n    pass\\n\\ntree = (1, (2, (4, None, None), None), (3, None, (5, None, None)))\\nprint(max_depth(tree))  # 3\\nprint(max_depth(None))  # 0",
        hint: "Base case: None → 0. Recursive: 1 + max(depth of left, depth of right).\\n基本情况：None → 0。递归：1 + max(左深度, 右深度)。",
        solution: "def max_depth(tree):\\n    if tree is None:\\n        return 0\\n    val, left, right = tree\\n    return 1 + max(max_depth(left), max_depth(right))\\n\\ntree = (1, (2, (4, None, None), None), (3, None, (5, None, None)))\\nprint(max_depth(tree))\\nprint(max_depth(None))",
        expectedOutput: "3\\n0",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Tower of Hanoi · 汉诺塔",
        description: "Solve Tower of Hanoi for n disks. Print each move.\\n解决 n 个盘子的汉诺塔问题。打印每步移动。",
        starterCode: "def hanoi(n, source='A', target='C', auxiliary='B'):\\n    pass\\n\\nhanoi(3)",
        hint: "Move n-1 disks to auxiliary, move disk n to target, move n-1 from auxiliary to target.\\n将 n-1 个盘移到辅助柱，将第 n 个盘移到目标柱，再将 n-1 个从辅助柱移到目标柱。",
        solution: "def hanoi(n, source='A', target='C', auxiliary='B'):\\n    if n == 1:\\n        print(f'Move disk 1 from {source} to {target}')\\n        return\\n    hanoi(n-1, source, auxiliary, target)\\n    print(f'Move disk {n} from {source} to {target}')\\n    hanoi(n-1, auxiliary, target, source)\\n\\nhanoi(3)",
        expectedOutput: "Move disk 1 from A to C\\nMove disk 2 from A to B\\nMove disk 1 from C to B\\nMove disk 3 from A to C\\nMove disk 1 from B to A\\nMove disk 2 from B to C\\nMove disk 1 from A to C",
      },
    }`,
  ],
  "alg_3_3": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔤 Combination Sum · 组合总和",
        description: "Find all unique combinations of numbers that sum to a target. Numbers can be reused.\\n找出所有和为目标值的唯一组合。数字可以重复使用。",
        starterCode: "def combination_sum(candidates, target):\\n    result = []\\n    # Your backtracking code here\\n    return result\\n\\nfor c in combination_sum([2, 3, 6, 7], 7):\\n    print(c)",
        hint: "Backtrack with a start index to avoid duplicates. At each step, try each candidate >= start index.\\n用起始索引回溯避免重复。每步尝试 >= 起始索引的每个候选。",
        solution: "def combination_sum(candidates, target):\\n    result = []\\n    def backtrack(start, current, remaining):\\n        if remaining == 0:\\n            result.append(current[:])\\n            return\\n        for i in range(start, len(candidates)):\\n            if candidates[i] > remaining:\\n                continue\\n            current.append(candidates[i])\\n            backtrack(i, current, remaining - candidates[i])\\n            current.pop()\\n    backtrack(0, [], target)\\n    return result\\n\\nfor c in combination_sum([2, 3, 6, 7], 7):\\n    print(c)",
        expectedOutput: "[2, 2, 3]\\n[7]",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🧩 Sudoku Validator · 数独验证器",
        description: "Write a backtracking function to check if a partially filled 4×4 sudoku is solvable.\\n写一个回溯函数检查部分填充的 4×4 数独是否可解。",
        starterCode: "def is_valid(board, row, col, num):\\n    # Check row, col, and 2x2 box\\n    pass\\n\\ndef solve(board):\\n    # Return True if solvable\\n    pass\\n\\nboard = [\\n    [1,0,0,4],\\n    [0,0,0,0],\\n    [0,0,0,0],\\n    [4,0,0,1]\\n]\\nprint(solve(board))\\nfor row in board:\\n    print(row)",
        hint: "is_valid: check row, column, and 2×2 box for duplicates. solve: find first 0, try 1-4.\\nis_valid：检查行、列和 2×2 方块中的重复。solve：找到第一个 0，尝试 1-4。",
        solution: "def is_valid(board, row, col, num):\\n    for i in range(4):\\n        if board[row][i] == num: return False\\n        if board[i][col] == num: return False\\n    r, c = (row//2)*2, (col//2)*2\\n    for i in range(r, r+2):\\n        for j in range(c, c+2):\\n            if board[i][j] == num: return False\\n    return True\\n\\ndef solve(board):\\n    for i in range(4):\\n        for j in range(4):\\n            if board[i][j] == 0:\\n                for num in range(1, 5):\\n                    if is_valid(board, i, j, num):\\n                        board[i][j] = num\\n                        if solve(board): return True\\n                        board[i][j] = 0\\n                return False\\n    return True\\n\\nboard = [\\n    [1,0,0,4],\\n    [0,0,0,0],\\n    [0,0,0,0],\\n    [4,0,0,1]\\n]\\nprint(solve(board))\\nfor row in board:\\n    print(row)",
        expectedOutput: "True\\n[1, 2, 3, 4]\\n[3, 4, 1, 2]\\n[2, 1, 4, 3]\\n[4, 3, 2, 1]",
      },
    }`,
  ],
  "alg_3_4": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔢 Closest Pair · 最近点对",
        description: "Find the closest pair of numbers in an array using divide and conquer (sort first, then check adjacent).\\n用分治法找到数组中最接近的数对（先排序，再检查相邻）。",
        starterCode: "def closest_pair(arr):\\n    # Return (num1, num2) with smallest difference\\n    pass\\n\\nprint(closest_pair([7, 1, 3, 10, 25, 8]))  # (7, 8)",
        hint: "Sort the array first. The closest pair must be adjacent in sorted order.\\n先排序。最接近的对在排序后一定相邻。",
        solution: "def closest_pair(arr):\\n    s = sorted(arr)\\n    min_diff = float('inf')\\n    pair = (s[0], s[1])\\n    for i in range(len(s) - 1):\\n        diff = s[i+1] - s[i]\\n        if diff < min_diff:\\n            min_diff = diff\\n            pair = (s[i], s[i+1])\\n    return pair\\n\\nprint(closest_pair([7, 1, 3, 10, 25, 8]))",
        expectedOutput: "(7, 8)",
      },
    }`,
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "⚡ Karatsuba Multiplication · Karatsuba 乘法",
        description: "Implement Karatsuba multiplication for large numbers using divide and conquer (string-based digits).\\n用分治法实现大数的 Karatsuba 乘法。",
        starterCode: "def karatsuba(x, y):\\n    # Base case: single digit\\n    if x < 10 or y < 10:\\n        return x * y\\n    # Your D&C code here\\n    pass\\n\\nprint(karatsuba(1234, 5678))  # 7006652\\nprint(karatsuba(12, 34))      # 408",
        hint: "Split x and y into halves. Compute 3 products instead of 4: ac, bd, and (a+b)(c+d)-ac-bd.\\n将 x 和 y 分成两半。计算 3 个乘积而不是 4 个：ac、bd 和 (a+b)(c+d)-ac-bd。",
        solution: "def karatsuba(x, y):\\n    if x < 10 or y < 10:\\n        return x * y\\n    n = max(len(str(x)), len(str(y)))\\n    half = n // 2\\n    power = 10 ** half\\n    a, b = divmod(x, power)\\n    c, d = divmod(y, power)\\n    ac = karatsuba(a, c)\\n    bd = karatsuba(b, d)\\n    ad_bc = karatsuba(a + b, c + d) - ac - bd\\n    return ac * (10 ** (2 * half)) + ad_bc * power + bd\\n\\nprint(karatsuba(1234, 5678))\\nprint(karatsuba(12, 34))",
        expectedOutput: "7006652\\n408",
      },
    }`,
  ],
  "alg_4_1": [
    `{
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🪙 Tribonacci with Memo · 带记忆的三波那契",
        description: "Compute Tribonacci numbers: T(n) = T(n-1) + T(n-2) + T(n-3), T(0)=0, T(1)=T(2)=1. Use memoization.\\n计算三波那契数：T(n) = T(n-1) + T(n-2) + T(n-3)。用记忆化。",
        starterCode: "def tribonacci(n, memo={}):\\n    pass\\n\\nfor i in range(10):\\n    print(tribonacci(i), end=' ')",
        hint: "Same pattern as Fibonacci memo, but three recursive calls.\\n和斐波那契记忆化一样，但三个递归调用。",
        solution: "def tribonacci(n, memo={}):\\n    if n in memo: return