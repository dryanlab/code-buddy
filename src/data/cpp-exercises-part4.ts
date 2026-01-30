import type { CppExercise } from './cpp-exercises';

// Level 3 extras: exercises cpp-ex-3-16 through cpp-ex-3-60
export const CPP_EXERCISES_PART4: CppExercise[] = [
  // ============ FUNCTION OVERLOADING & DEFAULT ARGS ============
  {
    id: 'cpp-ex-3-16',
    title: 'Function Overloading: Area',
    titleZh: '函数重载：面积',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['function-overloading'],
    description: 'Write two overloaded functions named `area`: one takes a single double (radius) and returns circle area (π*r²), the other takes two doubles (length, width) and returns rectangle area. Read a line: if one number, compute circle area; if two, compute rectangle area. Print with 2 decimal places.',
    descriptionZh: '编写两个同名函数 `area`：一个接收半径(double)返回圆面积(π*r²)，另一个接收长和宽(double)返回矩形面积。读入一行：若一个数则计算圆面积，若两个数则计算矩形面积。输出保留两位小数。',
    examples: [{ input: '5', output: '78.54' }, { input: '3 4', output: '12.00' }],
    starterCode: `#include <iostream>
#include <iomanip>
#include <sstream>
#include <cmath>
using namespace std;

// TODO: Write two overloaded area functions

int main() {
    string line;
    getline(cin, line);
    istringstream iss(line);
    double a, b;
    iss >> a;
    if (iss >> b) {
        cout << fixed << setprecision(2) << area(a, b) << endl;
    } else {
        cout << fixed << setprecision(2) << area(a) << endl;
    }
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
#include <sstream>
#include <cmath>
using namespace std;

// Circle area: pi * r * r
double area(double radius) {
    return M_PI * radius * radius;
}

// Rectangle area: length * width
double area(double length, double width) {
    return length * width;
}

int main() {
    string line;
    getline(cin, line);
    istringstream iss(line);
    double a, b;
    iss >> a;
    if (iss >> b) {
        cout << fixed << setprecision(2) << area(a, b) << endl;
    } else {
        cout << fixed << setprecision(2) << area(a) << endl;
    }
    return 0;
}`,
    hints: ['Function overloading means same name, different parameters', 'Use M_PI for π from <cmath>', 'Use istringstream to parse the input line'],
    hintsZh: ['函数重载：同名函数，不同参数', '使用 <cmath> 中的 M_PI 表示 π', '使用 istringstream 解析输入行'],
    testCases: [
      { input: '5', expectedOutput: '78.54' },
      { input: '3 4', expectedOutput: '12.00' },
      { input: '1', expectedOutput: '3.14' },
    ],
  },
  {
    id: 'cpp-ex-3-17',
    title: 'Default Arguments',
    titleZh: '默认参数',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['default-arguments'],
    description: 'Write a function `power(int base, int exp = 2)` that returns base^exp. Read a line: if one number, compute its square; if two numbers, compute base^exp. Print the result.',
    descriptionZh: '编写函数 `power(int base, int exp = 2)` 返回 base^exp。读入一行：若一个数，计算平方；若两个数，计算 base^exp。输出结果。',
    examples: [{ input: '5', output: '25' }, { input: '2 10', output: '1024' }],
    starterCode: `#include <iostream>
#include <sstream>
using namespace std;

// TODO: Write power function with default argument

int main() {
    string line;
    getline(cin, line);
    istringstream iss(line);
    int a, b;
    iss >> a;
    if (iss >> b) {
        cout << power(a, b) << endl;
    } else {
        cout << power(a) << endl;
    }
    return 0;
}`,
    solution: `#include <iostream>
#include <sstream>
using namespace std;

// Default argument: exp defaults to 2
long long power(int base, int exp = 2) {
    long long result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

int main() {
    string line;
    getline(cin, line);
    istringstream iss(line);
    int a, b;
    iss >> a;
    if (iss >> b) {
        cout << power(a, b) << endl;
    } else {
        cout << power(a) << endl;
    }
    return 0;
}`,
    hints: ['Default arguments are specified in the function declaration', 'Use a loop to compute power', 'Use long long to avoid overflow'],
    hintsZh: ['默认参数在函数声明时指定', '使用循环计算幂', '使用 long long 避免溢出'],
    testCases: [
      { input: '5', expectedOutput: '25' },
      { input: '2 10', expectedOutput: '1024' },
      { input: '3 3', expectedOutput: '27' },
    ],
  },
  {
    id: 'cpp-ex-3-18',
    title: 'Pass by Reference: Swap',
    titleZh: '引用传递：交换',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['pass-by-reference'],
    description: 'Write a function `void swapValues(int &a, int &b)` that swaps two integers using pass by reference. Read two integers, swap them, and print them separated by a space.',
    descriptionZh: '编写函数 `void swapValues(int &a, int &b)` 使用引用传递交换两个整数。读入两个整数，交换后输出，用空格分隔。',
    examples: [{ input: '3 7', output: '7 3' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write swapValues function using pass by reference

int main() {
    int a, b;
    cin >> a >> b;
    swapValues(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

// Swap using references - changes affect the original variables
void swapValues(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int a, b;
    cin >> a >> b;
    swapValues(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
    hints: ['Use & in the parameter to pass by reference', 'Use a temporary variable to swap', 'Changes to reference parameters affect the original'],
    hintsZh: ['参数中使用 & 表示引用传递', '使用临时变量进行交换', '对引用参数的修改会影响原始变量'],
    testCases: [
      { input: '3 7', expectedOutput: '7 3' },
      { input: '10 20', expectedOutput: '20 10' },
    ],
  },
  // ============ RECURSION ============
  {
    id: 'cpp-ex-3-19',
    title: 'Factorial (Recursive)',
    titleZh: '阶乘（递归）',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'factorial'],
    description: 'Write a recursive function `long long factorial(int n)` that returns n!. Read n and print the result.',
    descriptionZh: '编写递归函数 `long long factorial(int n)` 返回 n!。读入 n，输出结果。',
    examples: [{ input: '5', output: '120' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write recursive factorial function

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

// Base case: 0! = 1. Recursive case: n! = n * (n-1)!
long long factorial(int n) {
    if (n <= 1) return 1;
    return (long long)n * factorial(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}`,
    hints: ['Base case: factorial(0) = factorial(1) = 1', 'Recursive case: n! = n * (n-1)!', 'Use long long for large results'],
    hintsZh: ['基本情况：factorial(0) = factorial(1) = 1', '递归情况：n! = n * (n-1)!', '使用 long long 存储大结果'],
    testCases: [
      { input: '5', expectedOutput: '120' },
      { input: '0', expectedOutput: '1' },
      { input: '10', expectedOutput: '3628800' },
    ],
  },
  {
    id: 'cpp-ex-3-20',
    title: 'Fibonacci (Recursive)',
    titleZh: '斐波那契（递归）',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'fibonacci'],
    description: 'Write a recursive function that returns the nth Fibonacci number (F(0)=0, F(1)=1). Read n and print F(n).',
    descriptionZh: '编写递归函数返回第 n 个斐波那契数（F(0)=0, F(1)=1）。读入 n，输出 F(n)。',
    examples: [{ input: '6', output: '8' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write recursive fibonacci function

int main() {
    int n;
    cin >> n;
    cout << fibonacci(n) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

// F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)
int fibonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n;
    cin >> n;
    cout << fibonacci(n) << endl;
    return 0;
}`,
    hints: ['Base cases: F(0)=0, F(1)=1', 'Recursive case: F(n) = F(n-1) + F(n-2)', 'This simple version is O(2^n) - fine for small n'],
    hintsZh: ['基本情况：F(0)=0, F(1)=1', '递归情况：F(n) = F(n-1) + F(n-2)', '简单递归版本时间复杂度 O(2^n)，小 n 可用'],
    testCases: [
      { input: '6', expectedOutput: '8' },
      { input: '0', expectedOutput: '0' },
      { input: '10', expectedOutput: '55' },
    ],
  },
  {
    id: 'cpp-ex-3-21',
    title: 'Tower of Hanoi',
    titleZh: '汉诺塔',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'tower-of-hanoi'],
    description: 'Solve the Tower of Hanoi problem. Read n (number of disks). Print each move as "Move disk from X to Y" where X, Y are A, B, or C. Move all disks from A to C using B as auxiliary.',
    descriptionZh: '解决汉诺塔问题。读入 n（盘数）。输出每步移动 "Move disk from X to Y"，其中 X, Y 是 A, B 或 C。将所有盘从 A 移到 C，B 为辅助。',
    examples: [{ input: '2', output: 'Move disk from A to B\nMove disk from A to C\nMove disk from B to C' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write recursive hanoi function

int main() {
    int n;
    cin >> n;
    hanoi(n, 'A', 'C', 'B');
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

// Move n disks from src to dest using aux
void hanoi(int n, char src, char dest, char aux) {
    if (n == 0) return;
    // Move n-1 disks from src to aux
    hanoi(n - 1, src, aux, dest);
    // Move the largest disk
    cout << "Move disk from " << src << " to " << dest << endl;
    // Move n-1 disks from aux to dest
    hanoi(n - 1, aux, dest, src);
}

int main() {
    int n;
    cin >> n;
    hanoi(n, 'A', 'C', 'B');
    return 0;
}`,
    hints: ['Base case: 0 disks, do nothing', 'Move n-1 disks to auxiliary, move largest to destination, move n-1 from auxiliary to destination', 'Total moves = 2^n - 1'],
    hintsZh: ['基本情况：0个盘，不操作', '将 n-1 个盘移到辅助柱，最大盘移到目标柱，再将 n-1 个盘从辅助移到目标', '总移动次数 = 2^n - 1'],
    testCases: [
      { input: '2', expectedOutput: 'Move disk from A to B\nMove disk from A to C\nMove disk from B to C' },
      { input: '1', expectedOutput: 'Move disk from A to C' },
    ],
  },
  {
    id: 'cpp-ex-3-22',
    title: 'Recursive Power',
    titleZh: '递归求幂',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'power'],
    description: 'Write a recursive function `long long power(int base, int exp)` using the idea: base^exp = base * base^(exp-1), base^0 = 1. Read base and exp, print the result.',
    descriptionZh: '编写递归函数 `long long power(int base, int exp)`，利用 base^exp = base * base^(exp-1)，base^0 = 1。读入 base 和 exp，输出结果。',
    examples: [{ input: '2 10', output: '1024' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write recursive power function

int main() {
    int base, exp;
    cin >> base >> exp;
    cout << power(base, exp) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

// base^0 = 1, base^exp = base * base^(exp-1)
long long power(int base, int exp) {
    if (exp == 0) return 1;
    return (long long)base * power(base, exp - 1);
}

int main() {
    int base, exp;
    cin >> base >> exp;
    cout << power(base, exp) << endl;
    return 0;
}`,
    hints: ['Base case: anything^0 = 1', 'Recursive case: base^exp = base * base^(exp-1)', 'Use long long for the return type'],
    hintsZh: ['基本情况：任何数的0次方 = 1', '递归情况：base^exp = base * base^(exp-1)', '返回类型用 long long'],
    testCases: [
      { input: '2 10', expectedOutput: '1024' },
      { input: '3 0', expectedOutput: '1' },
      { input: '5 3', expectedOutput: '125' },
    ],
  },
  {
    id: 'cpp-ex-3-23',
    title: 'Recursive String Reverse',
    titleZh: '递归字符串反转',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'strings'],
    description: 'Write a recursive function that reverses a string. Read a string (single word) and print it reversed.',
    descriptionZh: '编写递归函数反转字符串。读入一个字符串（单词），输出反转结果。',
    examples: [{ input: 'hello', output: 'olleh' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// TODO: Write recursive reverse function

int main() {
    string s;
    cin >> s;
    cout << reverseStr(s) << endl;
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

// Base case: empty or single char. Otherwise: last char + reverse(rest)
string reverseStr(string s) {
    if (s.length() <= 1) return s;
    return s.back() + reverseStr(s.substr(0, s.length() - 1));
}

int main() {
    string s;
    cin >> s;
    cout << reverseStr(s) << endl;
    return 0;
}`,
    hints: ['Base case: empty or single character string', 'Take the last character and prepend to reverse of the rest', 'Use substr and back()'],
    hintsZh: ['基本情况：空字符串或单字符', '取最后一个字符加上其余部分的反转', '使用 substr 和 back()'],
    testCases: [
      { input: 'hello', expectedOutput: 'olleh' },
      { input: 'a', expectedOutput: 'a' },
      { input: 'abcde', expectedOutput: 'edcba' },
    ],
  },
  {
    id: 'cpp-ex-3-24',
    title: 'Recursive Permutations',
    titleZh: '递归全排列',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'permutations'],
    description: 'Read a string of distinct characters (sorted). Print all permutations in lexicographic order, one per line.',
    descriptionZh: '读入一个由不同字符组成的字符串（已排序）。按字典序输出所有排列，每行一个。',
    examples: [{ input: 'abc', output: 'abc\nacb\nbac\nbca\ncab\ncba' }],
    starterCode: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

// TODO: Write recursive permutation function

int main() {
    string s;
    cin >> s;
    // TODO: Generate and print all permutations
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

// Generate permutations by fixing each position
void permute(string &s, int left, int right) {
    if (left == right) {
        cout << s << endl;
        return;
    }
    for (int i = left; i <= right; i++) {
        swap(s[left], s[i]);
        permute(s, left + 1, right);
        swap(s[left], s[i]); // backtrack
    }
}

int main() {
    string s;
    cin >> s;
    sort(s.begin(), s.end());
    permute(s, 0, s.length() - 1);
    return 0;
}`,
    hints: ['Fix one character at each position and recurse on the rest', 'Remember to backtrack (swap back)', 'Sort the string first for lexicographic order'],
    hintsZh: ['在每个位置固定一个字符，递归处理剩余部分', '记得回溯（交换回来）', '先排序字符串以保证字典序'],
    testCases: [
      { input: 'abc', expectedOutput: 'abc\nacb\nbac\nbca\ncab\ncba' },
      { input: 'ab', expectedOutput: 'ab\nba' },
    ],
  },
  // ============ 1D ARRAYS ============
  {
    id: 'cpp-ex-3-25',
    title: 'Linear Search',
    titleZh: '线性查找',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'search'],
    description: 'Read n, then n integers, then a target. Print the index (0-based) of the first occurrence of target, or -1 if not found.',
    descriptionZh: '读入 n，然后 n 个整数，再读入目标值。输出目标值首次出现的索引（从0开始），未找到输出 -1。',
    examples: [{ input: '5\n3 7 2 8 5\n8', output: '3' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Linear search
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int target;
    cin >> target;
    // Linear search: check each element
    int result = -1;
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            result = i;
            break;
        }
    }
    cout << result << endl;
    return 0;
}`,
    hints: ['Iterate through the array comparing each element', 'Break when found to get first occurrence', 'Return -1 if loop completes without finding'],
    hintsZh: ['遍历数组比较每个元素', '找到时 break 获取首次出现位置', '循环结束未找到则返回 -1'],
    testCases: [
      { input: '5\n3 7 2 8 5\n8', expectedOutput: '3' },
      { input: '4\n1 2 3 4\n5', expectedOutput: '-1' },
      { input: '3\n5 5 5\n5', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-3-26',
    title: 'Binary Search',
    titleZh: '二分查找',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'binary-search'],
    description: 'Read n, then n sorted integers, then a target. Use binary search to find the target. Print its index (0-based) or -1 if not found.',
    descriptionZh: '读入 n，然后 n 个已排序整数，再读入目标值。使用二分查找，输出索引（从0开始），未找到输出 -1。',
    examples: [{ input: '5\n1 3 5 7 9\n5', output: '2' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Binary search
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int target;
    cin >> target;
    // Binary search on sorted array
    int left = 0, right = n - 1, result = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            result = mid;
            break;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    cout << result << endl;
    return 0;
}`,
    hints: ['Maintain left and right pointers', 'Compare middle element with target', 'Use mid = left + (right-left)/2 to avoid overflow'],
    hintsZh: ['维护左右指针', '比较中间元素与目标值', '用 mid = left + (right-left)/2 避免溢出'],
    testCases: [
      { input: '5\n1 3 5 7 9\n5', expectedOutput: '2' },
      { input: '5\n1 3 5 7 9\n4', expectedOutput: '-1' },
      { input: '1\n42\n42', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-3-27',
    title: 'Bubble Sort',
    titleZh: '冒泡排序',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'sorting', 'bubble-sort'],
    description: 'Read n, then n integers. Sort them using bubble sort in ascending order. Print the sorted array space-separated.',
    descriptionZh: '读入 n，然后 n 个整数。使用冒泡排序升序排列。输出排序后的数组，用空格分隔。',
    examples: [{ input: '5\n5 3 8 1 2', output: '1 2 3 5 8' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Implement bubble sort
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Bubble sort: repeatedly swap adjacent elements
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << arr[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Outer loop runs n-1 times', 'Inner loop compares adjacent elements and swaps if needed', 'After each pass, the largest unsorted element bubbles to the end'],
    hintsZh: ['外层循环运行 n-1 次', '内层循环比较相邻元素，需要时交换', '每次遍历后最大的未排序元素冒泡到末尾'],
    testCases: [
      { input: '5\n5 3 8 1 2', expectedOutput: '1 2 3 5 8' },
      { input: '3\n3 2 1', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'cpp-ex-3-28',
    title: 'Selection Sort',
    titleZh: '选择排序',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'sorting', 'selection-sort'],
    description: 'Read n, then n integers. Sort using selection sort (ascending). Print sorted array space-separated.',
    descriptionZh: '读入 n，然后 n 个整数。使用选择排序升序排列。输出排序后的数组，用空格分隔。',
    examples: [{ input: '5\n5 3 8 1 2', output: '1 2 3 5 8' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Implement selection sort
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Selection sort: find min in unsorted part, swap to front
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << arr[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Find the minimum element in the unsorted portion', 'Swap it with the first unsorted element', 'Repeat for each position'],
    hintsZh: ['在未排序部分找最小元素', '与未排序部分的第一个元素交换', '对每个位置重复操作'],
    testCases: [
      { input: '5\n5 3 8 1 2', expectedOutput: '1 2 3 5 8' },
      { input: '4\n4 3 2 1', expectedOutput: '1 2 3 4' },
    ],
  },
  {
    id: 'cpp-ex-3-29',
    title: 'Insertion Sort',
    titleZh: '插入排序',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'sorting', 'insertion-sort'],
    description: 'Read n, then n integers. Sort using insertion sort (ascending). Print sorted array space-separated.',
    descriptionZh: '读入 n，然后 n 个整数。使用插入排序升序排列。输出排序后的数组，用空格分隔。',
    examples: [{ input: '5\n5 3 8 1 2', output: '1 2 3 5 8' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Implement insertion sort
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Insertion sort: insert each element into its correct position
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << arr[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Start from the second element', 'Shift larger elements right to make room', 'Insert the current element at the correct position'],
    hintsZh: ['从第二个元素开始', '将较大的元素右移腾出位置', '在正确位置插入当前元素'],
    testCases: [
      { input: '5\n5 3 8 1 2', expectedOutput: '1 2 3 5 8' },
      { input: '3\n1 2 3', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'cpp-ex-3-30',
    title: 'Reverse Array',
    titleZh: '反转数组',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'reverse'],
    description: 'Read n, then n integers. Reverse the array in-place and print it space-separated.',
    descriptionZh: '读入 n，然后 n 个整数。原地反转数组并输出，用空格分隔。',
    examples: [{ input: '5\n1 2 3 4 5', output: '5 4 3 2 1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Reverse the array
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Two-pointer approach to reverse
    for (int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << arr[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Use two pointers: one at start, one at end', 'Swap elements moving inward', 'Loop until pointers meet in the middle'],
    hintsZh: ['使用双指针：一个在开头，一个在末尾', '向中间移动并交换元素', '循环直到指针在中间相遇'],
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1' },
      { input: '4\n10 20 30 40', expectedOutput: '40 30 20 10' },
    ],
  },
  {
    id: 'cpp-ex-3-31',
    title: 'Rotate Array Left',
    titleZh: '数组左旋',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'rotate'],
    description: 'Read n, then n integers, then k. Rotate the array left by k positions. Print the result space-separated.',
    descriptionZh: '读入 n，然后 n 个整数，再读入 k。将数组左旋 k 个位置。输出结果，用空格分隔。',
    examples: [{ input: '5\n1 2 3 4 5\n2', output: '3 4 5 1 2' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Rotate array left by k positions
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int k;
    cin >> k;
    k = k % n; // Handle k >= n
    // Simple approach: use temp array
    int temp[n];
    for (int i = 0; i < n; i++) {
        temp[i] = arr[(i + k) % n];
    }
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << temp[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['New position of element at index i is (i - k + n) % n', 'Or: element at new index i comes from old index (i + k) % n', 'Handle k >= n by taking k % n'],
    hintsZh: ['索引 i 的元素新位置是 (i - k + n) % n', '或：新索引 i 处的元素来自旧索引 (i + k) % n', '处理 k >= n 的情况，取 k % n'],
    testCases: [
      { input: '5\n1 2 3 4 5\n2', expectedOutput: '3 4 5 1 2' },
      { input: '4\n10 20 30 40\n1', expectedOutput: '20 30 40 10' },
    ],
  },
  {
    id: 'cpp-ex-3-32',
    title: 'Merge Two Sorted Arrays',
    titleZh: '合并两个有序数组',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'merge'],
    description: 'Read n, then n sorted integers; read m, then m sorted integers. Merge them into one sorted array and print space-separated.',
    descriptionZh: '读入 n，然后 n 个有序整数；读入 m，然后 m 个有序整数。合并为一个有序数组，输出用空格分隔。',
    examples: [{ input: '3\n1 3 5\n3\n2 4 6', output: '1 2 3 4 5 6' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Merge two sorted arrays
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a[n];
    for (int i = 0; i < n; i++) cin >> a[i];
    int m;
    cin >> m;
    int b[m];
    for (int i = 0; i < m; i++) cin >> b[i];
    // Two-pointer merge
    int i = 0, j = 0;
    bool first = true;
    while (i < n && j < m) {
        if (!first) cout << " ";
        first = false;
        if (a[i] <= b[j]) cout << a[i++];
        else cout << b[j++];
    }
    while (i < n) { if (!first) cout << " "; first = false; cout << a[i++]; }
    while (j < m) { if (!first) cout << " "; first = false; cout << b[j++]; }
    cout << endl;
    return 0;
}`,
    hints: ['Use two pointers, one for each array', 'Compare elements and pick the smaller one', 'Don\'t forget remaining elements after one array is exhausted'],
    hintsZh: ['使用两个指针，各指向一个数组', '比较元素，选择较小的', '一个数组用完后别忘了处理另一个的剩余元素'],
    testCases: [
      { input: '3\n1 3 5\n3\n2 4 6', expectedOutput: '1 2 3 4 5 6' },
      { input: '2\n1 5\n3\n2 3 4', expectedOutput: '1 2 3 4 5' },
    ],
  },
  {
    id: 'cpp-ex-3-33',
    title: 'Array Statistics',
    titleZh: '数组统计',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'statistics'],
    description: 'Read n, then n integers. Print the min, max, and average (2 decimal places) on separate lines.',
    descriptionZh: '读入 n，然后 n 个整数。分别输出最小值、最大值和平均值（保留两位小数），各占一行。',
    examples: [{ input: '5\n3 1 4 1 5', output: '1\n5\n2.80' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Compute min, max, average
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Find min, max, and compute sum for average
    int mn = arr[0], mx = arr[0];
    double sum = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] < mn) mn = arr[i];
        if (arr[i] > mx) mx = arr[i];
        sum += arr[i];
    }
    cout << mn << endl;
    cout << mx << endl;
    cout << fixed << setprecision(2) << sum / n << endl;
    return 0;
}`,
    hints: ['Initialize min and max with the first element', 'Track sum for computing average', 'Average = sum / n as a double'],
    hintsZh: ['用第一个元素初始化最小值和最大值', '跟踪求和用于计算平均值', '平均值 = sum / n（用 double）'],
    testCases: [
      { input: '5\n3 1 4 1 5', expectedOutput: '1\n5\n2.80' },
      { input: '3\n10 20 30', expectedOutput: '10\n30\n20.00' },
    ],
  },
  {
    id: 'cpp-ex-3-34',
    title: 'Remove Duplicates from Sorted Array',
    titleZh: '有序数组去重',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'duplicates'],
    description: 'Read n, then n sorted integers. Remove duplicates and print the unique elements space-separated.',
    descriptionZh: '读入 n，然后 n 个有序整数。去除重复元素，输出唯一元素，用空格分隔。',
    examples: [{ input: '7\n1 1 2 3 3 3 5', output: '1 2 3 5' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Remove duplicates from sorted array
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Print first element, then only when different from previous
    for (int i = 0; i < n; i++) {
        if (i == 0 || arr[i] != arr[i - 1]) {
            if (i > 0 && arr[i] != arr[0]) cout << " ";
            else if (i > 0) cout << " ";
            if (i == 0) cout << arr[i];
            else cout << arr[i];
        }
    }
    cout << endl;
    return 0;
}`,
    hints: ['Since the array is sorted, duplicates are adjacent', 'Compare each element with the previous one', 'Only print when different from the previous'],
    hintsZh: ['数组有序，重复元素相邻', '将每个元素与前一个比较', '仅在与前一个不同时输出'],
    testCases: [
      { input: '7\n1 1 2 3 3 3 5', expectedOutput: '1 2 3 5' },
      { input: '5\n1 2 3 4 5', expectedOutput: '1 2 3 4 5' },
    ],
  },
  {
    id: 'cpp-ex-3-35',
    title: 'Second Largest Element',
    titleZh: '第二大元素',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays'],
    description: 'Read n, then n integers (n >= 2, at least two distinct values). Find and print the second largest element.',
    descriptionZh: '读入 n，然后 n 个整数（n >= 2，至少有两个不同值）。找到并输出第二大的元素。',
    examples: [{ input: '5\n3 1 4 1 5', output: '4' }],
    starterCode: `#include <iostream>
#include <climits>
using namespace std;

int main() {
    // TODO: Find second largest element
    
    return 0;
}`,
    solution: `#include <iostream>
#include <climits>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Track first and second largest
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    cout << second << endl;
    return 0;
}`,
    hints: ['Track both the largest and second largest', 'When you find a new largest, the old largest becomes second', 'Make sure second largest is different from largest'],
    hintsZh: ['同时跟踪最大和第二大', '发现新最大时，旧最大变为第二大', '确保第二大与最大不同'],
    testCases: [
      { input: '5\n3 1 4 1 5', expectedOutput: '4' },
      { input: '3\n10 10 5', expectedOutput: '5' },
    ],
  },
  // ============ 2D ARRAYS ============
  {
    id: 'cpp-ex-3-36',
    title: 'Matrix Addition',
    titleZh: '矩阵加法',
    difficulty: 'medium',
    level: 3,
    category: '2D Arrays',
    categoryZh: '二维数组',
    tags: ['2d-arrays', 'matrix'],
    description: 'Read r and c, then two r×c matrices. Print their sum matrix. Elements separated by spaces, rows by newlines.',
    descriptionZh: '读入 r 和 c，然后两个 r×c 矩阵。输出它们的和矩阵。元素用空格分隔，行用换行分隔。',
    examples: [{ input: '2 2\n1 2\n3 4\n5 6\n7 8', output: '6 8\n10 12' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Add two matrices
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    int a[r][c], b[r][c];
    // Read first matrix
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> a[i][j];
    // Read second matrix
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> b[i][j];
    // Print sum matrix
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (j > 0) cout << " ";
            cout << a[i][j] + b[i][j];
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Add corresponding elements: C[i][j] = A[i][j] + B[i][j]', 'Use nested loops for rows and columns', 'Print each row on a separate line'],
    hintsZh: ['对应元素相加：C[i][j] = A[i][j] + B[i][j]', '使用嵌套循环遍历行和列', '每行输出在单独一行'],
    testCases: [
      { input: '2 2\n1 2\n3 4\n5 6\n7 8', expectedOutput: '6 8\n10 12' },
      { input: '1 3\n1 2 3\n4 5 6', expectedOutput: '5 7 9' },
    ],
  },
  {
    id: 'cpp-ex-3-37',
    title: 'Matrix Multiplication',
    titleZh: '矩阵乘法',
    difficulty: 'medium',
    level: 3,
    category: '2D Arrays',
    categoryZh: '二维数组',
    tags: ['2d-arrays', 'matrix'],
    description: 'Read r1, c1, then an r1×c1 matrix A. Read r2, c2, then an r2×c2 matrix B (c1 == r2). Print the product matrix A×B.',
    descriptionZh: '读入 r1, c1，然后 r1×c1 矩阵 A。读入 r2, c2，然后 r2×c2 矩阵 B（c1 == r2）。输出乘积矩阵 A×B。',
    examples: [{ input: '2 3\n1 2 3\n4 5 6\n3 2\n7 8\n9 10\n11 12', output: '58 64\n139 154' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Multiply two matrices
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int r1, c1;
    cin >> r1 >> c1;
    int a[r1][c1];
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c1; j++)
            cin >> a[i][j];
    int r2, c2;
    cin >> r2 >> c2;
    int b[r2][c2];
    for (int i = 0; i < r2; i++)
        for (int j = 0; j < c2; j++)
            cin >> b[i][j];
    // Matrix multiplication: C[i][j] = sum(A[i][k] * B[k][j])
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            int sum = 0;
            for (int k = 0; k < c1; k++) {
                sum += a[i][k] * b[k][j];
            }
            if (j > 0) cout << " ";
            cout << sum;
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['C[i][j] = sum of A[i][k] * B[k][j] for all k', 'Need three nested loops', 'Result has dimensions r1 × c2'],
    hintsZh: ['C[i][j] = 对所有 k 求和 A[i][k] * B[k][j]', '需要三层嵌套循环', '结果矩阵维度为 r1 × c2'],
    testCases: [
      { input: '2 3\n1 2 3\n4 5 6\n3 2\n7 8\n9 10\n11 12', expectedOutput: '58 64\n139 154' },
      { input: '2 2\n1 0\n0 1\n2 2\n5 6\n7 8', expectedOutput: '5 6\n7 8' },
    ],
  },
  {
    id: 'cpp-ex-3-38',
    title: 'Matrix Transpose',
    titleZh: '矩阵转置',
    difficulty: 'medium',
    level: 3,
    category: '2D Arrays',
    categoryZh: '二维数组',
    tags: ['2d-arrays', 'matrix'],
    description: 'Read r and c, then an r×c matrix. Print its transpose (c×r matrix).',
    descriptionZh: '读入 r 和 c，然后一个 r×c 矩阵。输出其转置（c×r 矩阵）。',
    examples: [{ input: '2 3\n1 2 3\n4 5 6', output: '1 4\n2 5\n3 6' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Transpose the matrix
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    int mat[r][c];
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> mat[i][j];
    // Transpose: swap rows and columns
    for (int j = 0; j < c; j++) {
        for (int i = 0; i < r; i++) {
            if (i > 0) cout << " ";
            cout << mat[i][j];
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Transpose swaps rows and columns: T[j][i] = M[i][j]', 'The result has c rows and r columns', 'Iterate columns in outer loop, rows in inner loop'],
    hintsZh: ['转置交换行列：T[j][i] = M[i][j]', '结果有 c 行 r 列', '外层循环遍历列，内层遍历行'],
    testCases: [
      { input: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 4\n2 5\n3 6' },
      { input: '3 3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '1 4 7\n2 5 8\n3 6 9' },
    ],
  },
  {
    id: 'cpp-ex-3-39',
    title: 'Matrix Diagonal Sum',
    titleZh: '矩阵对角线之和',
    difficulty: 'medium',
    level: 3,
    category: '2D Arrays',
    categoryZh: '二维数组',
    tags: ['2d-arrays', 'matrix'],
    description: 'Read n, then an n×n matrix. Print the sum of both diagonals (primary + secondary). If n is odd, don\'t double-count the center element.',
    descriptionZh: '读入 n，然后一个 n×n 矩阵。输出两条对角线的元素之和（主对角线 + 副对角线）。若 n 为奇数，中心元素不重复计算。',
    examples: [{ input: '3\n1 2 3\n4 5 6\n7 8 9', output: '25' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Sum both diagonals
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int mat[n][n];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> mat[i][j];
    // Sum primary diagonal (i,i) and secondary diagonal (i, n-1-i)
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += mat[i][i];          // primary diagonal
        sum += mat[i][n - 1 - i];  // secondary diagonal
    }
    // If n is odd, center element was counted twice
    if (n % 2 == 1) sum -= mat[n / 2][n / 2];
    cout << sum << endl;
    return 0;
}`,
    hints: ['Primary diagonal: elements at (i, i)', 'Secondary diagonal: elements at (i, n-1-i)', 'If n is odd, subtract the center element once'],
    hintsZh: ['主对角线：位置 (i, i)', '副对角线：位置 (i, n-1-i)', '若 n 为奇数，减去中心元素一次'],
    testCases: [
      { input: '3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '25' },
      { input: '2\n1 2\n3 4', expectedOutput: '10' },
    ],
  },
  {
    id: 'cpp-ex-3-40',
    title: 'Spiral Print Matrix',
    titleZh: '螺旋打印矩阵',
    difficulty: 'medium',
    level: 3,
    category: '2D Arrays',
    categoryZh: '二维数组',
    tags: ['2d-arrays', 'matrix', 'spiral'],
    description: 'Read r and c, then an r×c matrix. Print all elements in spiral order (clockwise from top-left), space-separated.',
    descriptionZh: '读入 r 和 c，然后一个 r×c 矩阵。按顺时针螺旋顺序输出所有元素，用空格分隔。',
    examples: [{ input: '3 3\n1 2 3\n4 5 6\n7 8 9', output: '1 2 3 6 9 8 7 4 5' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print matrix in spiral order
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    int mat[r][c];
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> mat[i][j];
    int top = 0, bottom = r - 1, left = 0, right = c - 1;
    bool first = true;
    // Spiral: go right, down, left, up, shrink boundaries
    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) {
            if (!first) cout << " "; first = false;
            cout << mat[top][j];
        }
        top++;
        for (int i = top; i <= bottom; i++) {
            if (!first) cout << " "; first = false;
            cout << mat[i][right];
        }
        right--;
        if (top <= bottom) {
            for (int j = right; j >= left; j--) {
                if (!first) cout << " "; first = false;
                cout << mat[bottom][j];
            }
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                if (!first) cout << " "; first = false;
                cout << mat[i][left];
            }
            left++;
        }
    }
    cout << endl;
    return 0;
}`,
    hints: ['Use four boundaries: top, bottom, left, right', 'Process each layer: right→down→left→up', 'Shrink boundaries after each direction'],
    hintsZh: ['使用四个边界：top, bottom, left, right', '处理每层：右→下→左→上', '每个方向处理后收缩边界'],
    testCases: [
      { input: '3 3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '1 2 3 6 9 8 7 4 5' },
      { input: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 2 3 6 5 4' },
    ],
  },
  // ============ STRINGS ============
  {
    id: 'cpp-ex-3-41',
    title: 'String Reverse',
    titleZh: '字符串反转',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'reverse'],
    description: 'Read a string (may contain spaces, use getline). Print it reversed.',
    descriptionZh: '读入一个字符串（可能包含空格，使用 getline）。输出反转结果。',
    examples: [{ input: 'hello world', output: 'dlrow olleh' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Reverse the string
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    getline(cin, s);
    // Reverse using two pointers
    int left = 0, right = s.length() - 1;
    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    cout << s << endl;
    return 0;
}`,
    hints: ['Use getline to read the full line', 'Two-pointer swap from both ends', 'Or use reverse() from <algorithm>'],
    hintsZh: ['使用 getline 读取整行', '双指针从两端交换', '或使用 <algorithm> 的 reverse()'],
    testCases: [
      { input: 'hello world', expectedOutput: 'dlrow olleh' },
      { input: 'abc', expectedOutput: 'cba' },
    ],
  },
  {
    id: 'cpp-ex-3-42',
    title: 'Palindrome Check',
    titleZh: '回文判断',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'palindrome'],
    description: 'Read a string (single word, lowercase). Print "YES" if it\'s a palindrome, "NO" otherwise.',
    descriptionZh: '读入一个字符串（单词，小写）。若是回文输出 "YES"，否则输出 "NO"。',
    examples: [{ input: 'racecar', output: 'YES' }, { input: 'hello', output: 'NO' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Check if palindrome
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    // Check from both ends
    bool isPalin = true;
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s[left] != s[right]) {
            isPalin = false;
            break;
        }
        left++;
        right--;
    }
    cout << (isPalin ? "YES" : "NO") << endl;
    return 0;
}`,
    hints: ['Compare characters from both ends moving inward', 'If any pair doesn\'t match, it\'s not a palindrome', 'Use two pointers: left and right'],
    hintsZh: ['从两端向中间比较字符', '任何一对不匹配就不是回文', '使用双指针：left 和 right'],
    testCases: [
      { input: 'racecar', expectedOutput: 'YES' },
      { input: 'hello', expectedOutput: 'NO' },
      { input: 'a', expectedOutput: 'YES' },
    ],
  },
  {
    id: 'cpp-ex-3-43',
    title: 'Anagram Check',
    titleZh: '变位词判断',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'anagram'],
    description: 'Read two strings (lowercase, single words). Print "YES" if they are anagrams, "NO" otherwise.',
    descriptionZh: '读入两个字符串（小写，单词）。若是变位词输出 "YES"，否则输出 "NO"。',
    examples: [{ input: 'listen\nsilent', output: 'YES' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Check if two strings are anagrams
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;
    // Count frequency of each character
    if (a.length() != b.length()) {
        cout << "NO" << endl;
        return 0;
    }
    int freq[26] = {0};
    for (char c : a) freq[c - 'a']++;
    for (char c : b) freq[c - 'a']--;
    bool isAnagram = true;
    for (int i = 0; i < 26; i++) {
        if (freq[i] != 0) { isAnagram = false; break; }
    }
    cout << (isAnagram ? "YES" : "NO") << endl;
    return 0;
}`,
    hints: ['Anagrams have the same character frequencies', 'Use an array of 26 to count letter frequencies', 'Increment for first string, decrement for second, check all zero'],
    hintsZh: ['变位词有相同的字符频率', '使用长度26的数组统计字母频率', '第一个字符串加，第二个减，检查是否全为零'],
    testCases: [
      { input: 'listen\nsilent', expectedOutput: 'YES' },
      { input: 'hello\nworld', expectedOutput: 'NO' },
      { input: 'abc\ncba', expectedOutput: 'YES' },
    ],
  },
  {
    id: 'cpp-ex-3-44',
    title: 'Count Vowels',
    titleZh: '统计元音',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'counting'],
    description: 'Read a string (may have spaces). Count and print the number of vowels (a, e, i, o, u, case-insensitive).',
    descriptionZh: '读入一个字符串（可能含空格）。统计并输出元音字母个数（a, e, i, o, u，不区分大小写）。',
    examples: [{ input: 'Hello World', output: '3' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Count vowels
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    getline(cin, s);
    int count = 0;
    // Check each character for vowel
    for (char c : s) {
        char lower = tolower(c);
        if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {
            count++;
        }
    }
    cout << count << endl;
    return 0;
}`,
    hints: ['Convert each character to lowercase for comparison', 'Check against a, e, i, o, u', 'Use tolower() from <cctype>'],
    hintsZh: ['将每个字符转为小写进行比较', '检查是否为 a, e, i, o, u', '使用 <cctype> 中的 tolower()'],
    testCases: [
      { input: 'Hello World', expectedOutput: '3' },
      { input: 'AEIOU', expectedOutput: '5' },
      { input: 'xyz', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-3-45',
    title: 'Caesar Cipher',
    titleZh: '凯撒密码',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'cipher'],
    description: 'Read a string (lowercase letters only, no spaces) and an integer shift. Apply Caesar cipher (shift each letter by shift positions wrapping around). Print the encrypted string.',
    descriptionZh: '读入一个字符串（仅小写字母，无空格）和一个整数偏移量。应用凯撒密码（每个字母移动 shift 位，循环）。输出加密后的字符串。',
    examples: [{ input: 'abc\n3', output: 'def' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Caesar cipher encryption
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    int shift;
    cin >> s >> shift;
    // Shift each letter, wrapping around
    shift = ((shift % 26) + 26) % 26; // handle negative shifts
    for (int i = 0; i < s.length(); i++) {
        s[i] = 'a' + (s[i] - 'a' + shift) % 26;
    }
    cout << s << endl;
    return 0;
}`,
    hints: ['New char = (old_char - \'a\' + shift) % 26 + \'a\'', 'Handle shift > 26 with modulo', 'Handle negative shift by adding 26'],
    hintsZh: ['新字符 = (旧字符 - \'a\' + shift) % 26 + \'a\'', '用取模处理 shift > 26', '负偏移加 26 处理'],
    testCases: [
      { input: 'abc\n3', expectedOutput: 'def' },
      { input: 'xyz\n3', expectedOutput: 'abc' },
      { input: 'hello\n0', expectedOutput: 'hello' },
    ],
  },
  {
    id: 'cpp-ex-3-46',
    title: 'Substring Search',
    titleZh: '子串查找',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'search'],
    description: 'Read two strings: text and pattern. Print the starting index (0-based) of the first occurrence of pattern in text, or -1 if not found. Implement without using string::find.',
    descriptionZh: '读入两个字符串：text 和 pattern。输出 pattern 在 text 中首次出现的起始索引（从0开始），未找到输出 -1。不使用 string::find。',
    examples: [{ input: 'hello world\nworld', output: '6' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Find substring without using string::find
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string text, pattern;
    getline(cin, text);
    getline(cin, pattern);
    int n = text.length(), m = pattern.length();
    int result = -1;
    // Brute force substring search
    for (int i = 0; i <= n - m; i++) {
        bool match = true;
        for (int j = 0; j < m; j++) {
            if (text[i + j] != pattern[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            result = i;
            break;
        }
    }
    cout << result << endl;
    return 0;
}`,
    hints: ['Try each starting position in text', 'For each position, compare all characters of pattern', 'Break early if mismatch found'],
    hintsZh: ['尝试 text 中每个起始位置', '对每个位置，比较 pattern 的所有字符', '发现不匹配时提前退出'],
    testCases: [
      { input: 'hello world\nworld', expectedOutput: '6' },
      { input: 'abcdef\nxyz', expectedOutput: '-1' },
      { input: 'aaaa\naa', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-3-47',
    title: 'Word Count',
    titleZh: '单词计数',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'counting'],
    description: 'Read a line of text. Count and print the number of words (separated by spaces). Multiple consecutive spaces should be treated as one separator.',
    descriptionZh: '读入一行文本。统计并输出单词个数（以空格分隔）。多个连续空格视为一个分隔符。',
    examples: [{ input: 'hello world', output: '2' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Count words in a line
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
#include <sstream>
using namespace std;

int main() {
    string line;
    getline(cin, line);
    // Use stringstream to extract words
    istringstream iss(line);
    string word;
    int count = 0;
    while (iss >> word) {
        count++;
    }
    cout << count << endl;
    return 0;
}`,
    hints: ['Use istringstream to split by whitespace', 'operator>> skips whitespace automatically', 'Count how many words you can extract'],
    hintsZh: ['使用 istringstream 按空白分割', '>> 运算符自动跳过空白', '统计能提取多少个单词'],
    testCases: [
      { input: 'hello world', expectedOutput: '2' },
      { input: 'one', expectedOutput: '1' },
      { input: 'the  quick   brown fox', expectedOutput: '4' },
    ],
  },
  // ============ MORE ARRAY EXERCISES ============
  {
    id: 'cpp-ex-3-48',
    title: 'Array Frequency Count',
    titleZh: '数组频率统计',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'frequency'],
    description: 'Read n, then n integers (all between 1 and 100). For each unique value (in order of first appearance), print "value count" on a line.',
    descriptionZh: '读入 n，然后 n 个整数（均在1到100之间）。按首次出现的顺序，每行输出 "值 次数"。',
    examples: [{ input: '7\n3 1 3 2 1 3 2', output: '3 3\n1 2\n2 2' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Count frequency of each value
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Track which values we've already printed
    bool printed[101] = {false};
    for (int i = 0; i < n; i++) {
        if (printed[arr[i]]) continue;
        // Count occurrences
        int count = 0;
        for (int j = 0; j < n; j++) {
            if (arr[j] == arr[i]) count++;
        }
        cout << arr[i] << " " << count << endl;
        printed[arr[i]] = true;
    }
    return 0;
}`,
    hints: ['Use a boolean array to track which values have been printed', 'For each new value, count all occurrences', 'Values are 1-100, so a size-101 array works'],
    hintsZh: ['使用布尔数组跟踪已输出的值', '对每个新值，统计所有出现次数', '值范围1-100，使用大小101的数组'],
    testCases: [
      { input: '7\n3 1 3 2 1 3 2', expectedOutput: '3 3\n1 2\n2 2' },
      { input: '4\n5 5 5 5', expectedOutput: '5 4' },
    ],
  },
  {
    id: 'cpp-ex-3-49',
    title: 'Two Sum in Array',
    titleZh: '数组两数之和',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'two-sum'],
    description: 'Read n, then n integers, then a target sum. Find and print the indices (0-based) of two elements that add up to the target, separated by a space. Print the pair with the smallest first index; if tie, smallest second index. If no pair, print -1.',
    descriptionZh: '读入 n，然后 n 个整数，再读入目标和。找到并输出两个元素的索引（从0开始），用空格分隔。输出第一个索引最小的一对；若相同，第二个索引最小。无解输出 -1。',
    examples: [{ input: '4\n2 7 11 15\n9', output: '0 1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Find two numbers that sum to target
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int target;
    cin >> target;
    // Brute force: check all pairs
    bool found = false;
    for (int i = 0; i < n && !found; i++) {
        for (int j = i + 1; j < n && !found; j++) {
            if (arr[i] + arr[j] == target) {
                cout << i << " " << j << endl;
                found = true;
            }
        }
    }
    if (!found) cout << -1 << endl;
    return 0;
}`,
    hints: ['Check all pairs (i, j) where i < j', 'Break as soon as a pair is found', 'O(n²) brute force is fine for this exercise'],
    hintsZh: ['检查所有 i < j 的配对', '找到一对后立即退出', 'O(n²) 暴力法在此题中可用'],
    testCases: [
      { input: '4\n2 7 11 15\n9', expectedOutput: '0 1' },
      { input: '3\n1 2 3\n7', expectedOutput: '-1' },
      { input: '5\n3 3 3 3 3\n6', expectedOutput: '0 1' },
    ],
  },
  {
    id: 'cpp-ex-3-50',
    title: 'String Compression',
    titleZh: '字符串压缩',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'compression'],
    description: 'Read a string. Compress consecutive identical characters: e.g., "aaabbc" → "a3b2c1". Print the compressed string.',
    descriptionZh: '读入一个字符串。压缩连续相同字符：如 "aaabbc" → "a3b2c1"。输出压缩后的字符串。',
    examples: [{ input: 'aaabbc', output: 'a3b2c1' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Compress the string
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    // Iterate and count consecutive characters
    string result = "";
    int i = 0;
    while (i < s.length()) {
        char ch = s[i];
        int count = 0;
        while (i < s.length() && s[i] == ch) {
            count++;
            i++;
        }
        result += ch + to_string(count);
    }
    cout << result << endl;
    return 0;
}`,
    hints: ['Iterate through the string counting consecutive same characters', 'Use to_string() to convert count to string', 'Append character and count to result'],
    hintsZh: ['遍历字符串统计连续相同字符', '使用 to_string() 将计数转为字符串', '将字符和计数追加到结果'],
    testCases: [
      { input: 'aaabbc', expectedOutput: 'a3b2c1' },
      { input: 'abc', expectedOutput: 'a1b1c1' },
      { input: 'aaa', expectedOutput: 'a3' },
    ],
  },
  {
    id: 'cpp-ex-3-51',
    title: 'String Title Case',
    titleZh: '字符串首字母大写',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'case-conversion'],
    description: 'Read a line of text (lowercase). Convert the first letter of each word to uppercase. Print the result.',
    descriptionZh: '读入一行文本（小写）。将每个单词的首字母转为大写。输出结果。',
    examples: [{ input: 'hello world', output: 'Hello World' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Convert to title case
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    getline(cin, s);
    // Capitalize character after space or at start
    bool capitalizeNext = true;
    for (int i = 0; i < s.length(); i++) {
        if (s[i] == ' ') {
            capitalizeNext = true;
        } else if (capitalizeNext) {
            s[i] = toupper(s[i]);
            capitalizeNext = false;
        }
    }
    cout << s << endl;
    return 0;
}`,
    hints: ['Track whether the next character should be capitalized', 'Capitalize after a space or at the start', 'Use toupper() to convert to uppercase'],
    hintsZh: ['跟踪下一个字符是否需要大写', '在空格后或开头处大写', '使用 toupper() 转为大写'],
    testCases: [
      { input: 'hello world', expectedOutput: 'Hello World' },
      { input: 'the quick brown fox', expectedOutput: 'The Quick Brown Fox' },
    ],
  },
  // ============ MORE RECURSION ============
  {
    id: 'cpp-ex-3-52',
    title: 'Recursive Sum of Digits',
    titleZh: '递归数字之和',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'digits'],
    description: 'Write a recursive function that returns the sum of digits of a non-negative integer. Read n and print the result.',
    descriptionZh: '编写递归函数返回非负整数的各位数字之和。读入 n，输出结果。',
    examples: [{ input: '123', output: '6' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write recursive digit sum function

int main() {
    int n;
    cin >> n;
    cout << digitSum(n) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

// Base case: single digit. Recursive: last digit + sum of rest
int digitSum(int n) {
    if (n < 10) return n;
    return n % 10 + digitSum(n / 10);
}

int main() {
    int n;
    cin >> n;
    cout << digitSum(n) << endl;
    return 0;
}`,
    hints: ['Base case: n < 10, return n itself', 'Last digit: n % 10', 'Rest of number: n / 10'],
    hintsZh: ['基本情况：n < 10，返回 n', '最后一位：n % 10', '剩余数字：n / 10'],
    testCases: [
      { input: '123', expectedOutput: '6' },
      { input: '9', expectedOutput: '9' },
      { input: '999', expectedOutput: '27' },
    ],
  },
  {
    id: 'cpp-ex-3-53',
    title: 'Recursive GCD',
    titleZh: '递归最大公约数',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'gcd'],
    description: 'Write a recursive function to compute GCD using Euclid\'s algorithm: gcd(a, b) = gcd(b, a%b), gcd(a, 0) = a. Read two integers and print their GCD.',
    descriptionZh: '编写递归函数用欧几里得算法计算最大公约数：gcd(a, b) = gcd(b, a%b)，gcd(a, 0) = a。读入两个整数，输出它们的最大公约数。',
    examples: [{ input: '12 8', output: '4' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write recursive GCD function

int main() {
    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

// Euclid's algorithm: gcd(a, 0) = a; gcd(a, b) = gcd(b, a%b)
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << endl;
    return 0;
}`,
    hints: ['Base case: gcd(a, 0) = a', 'Recursive case: gcd(a, b) = gcd(b, a % b)', 'This is Euclid\'s algorithm'],
    hintsZh: ['基本情况：gcd(a, 0) = a', '递归情况：gcd(a, b) = gcd(b, a % b)', '这是欧几里得算法'],
    testCases: [
      { input: '12 8', expectedOutput: '4' },
      { input: '17 5', expectedOutput: '1' },
      { input: '100 25', expectedOutput: '25' },
    ],
  },
  {
    id: 'cpp-ex-3-54',
    title: 'Recursive Binary Search',
    titleZh: '递归二分查找',
    difficulty: 'medium',
    level: 3,
    category: 'Recursion',
    categoryZh: '递归',
    tags: ['recursion', 'binary-search'],
    description: 'Write a recursive binary search function. Read n, then n sorted integers, then a target. Print the index (0-based) or -1 if not found.',
    descriptionZh: '编写递归二分查找函数。读入 n，然后 n 个有序整数，再读入目标值。输出索引（从0开始），未找到输出 -1。',
    examples: [{ input: '5\n1 3 5 7 9\n7', output: '3' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write recursive binary search

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int target;
    cin >> target;
    cout << binarySearch(arr, 0, n - 1, target) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

// Recursive binary search
int binarySearch(int arr[], int left, int right, int target) {
    if (left > right) return -1;
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) return binarySearch(arr, mid + 1, right, target);
    return binarySearch(arr, left, mid - 1, target);
}

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int target;
    cin >> target;
    cout << binarySearch(arr, 0, n - 1, target) << endl;
    return 0;
}`,
    hints: ['Base case: left > right means not found', 'Compare middle element with target', 'Recurse on left or right half accordingly'],
    hintsZh: ['基本情况：left > right 表示未找到', '比较中间元素与目标值', '根据比较结果递归左半或右半'],
    testCases: [
      { input: '5\n1 3 5 7 9\n7', expectedOutput: '3' },
      { input: '5\n1 3 5 7 9\n4', expectedOutput: '-1' },
    ],
  },
  // ============ MORE STRING/ARRAY ============
  {
    id: 'cpp-ex-3-55',
    title: 'Check Sorted Array',
    titleZh: '检查数组是否有序',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays'],
    description: 'Read n, then n integers. Print "YES" if the array is sorted in non-decreasing order, "NO" otherwise.',
    descriptionZh: '读入 n，然后 n 个整数。若数组非递减有序输出 "YES"，否则输出 "NO"。',
    examples: [{ input: '5\n1 2 3 4 5', output: 'YES' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check if array is sorted
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Check consecutive pairs
    bool sorted = true;
    for (int i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            sorted = false;
            break;
        }
    }
    cout << (sorted ? "YES" : "NO") << endl;
    return 0;
}`,
    hints: ['Compare each element with the previous one', 'If any element is less than the previous, not sorted', 'Break early when found unsorted'],
    hintsZh: ['将每个元素与前一个比较', '若任何元素小于前一个，则未排序', '发现未排序时提前退出'],
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: 'YES' },
      { input: '4\n1 3 2 4', expectedOutput: 'NO' },
      { input: '3\n1 1 1', expectedOutput: 'YES' },
    ],
  },
  {
    id: 'cpp-ex-3-56',
    title: 'Most Frequent Element',
    titleZh: '众数',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'frequency'],
    description: 'Read n, then n integers (1 to 1000). Print the element with the highest frequency. If tie, print the smallest.',
    descriptionZh: '读入 n，然后 n 个整数（1到1000）。输出出现次数最多的元素。若有多个，输出最小的。',
    examples: [{ input: '7\n1 3 2 3 1 3 2', output: '3' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Find most frequent element
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Count frequencies using array
    int freq[1001] = {0};
    for (int i = 0; i < n; i++) freq[arr[i]]++;
    // Find max frequency, then smallest element with that frequency
    int maxFreq = 0;
    for (int i = 1; i <= 1000; i++) {
        if (freq[i] > maxFreq) maxFreq = freq[i];
    }
    for (int i = 1; i <= 1000; i++) {
        if (freq[i] == maxFreq) {
            cout << i << endl;
            break;
        }
    }
    return 0;
}`,
    hints: ['Use a frequency array indexed by value', 'Find the maximum frequency first', 'Then find the smallest value with that frequency'],
    hintsZh: ['使用以值为索引的频率数组', '先找最大频率', '再找具有该频率的最小值'],
    testCases: [
      { input: '7\n1 3 2 3 1 3 2', expectedOutput: '3' },
      { input: '4\n1 2 1 2', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-3-57',
    title: 'Partition Array',
    titleZh: '数组分区',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'partition'],
    description: 'Read n, then n integers, then a pivot value. Rearrange so all elements <= pivot come first (in original order), then all > pivot (in original order). Print the result space-separated.',
    descriptionZh: '读入 n，然后 n 个整数，再读入一个枢纽值。重排使所有 <= pivot 的元素在前（保持原序），> pivot 的在后（保持原序）。输出结果，用空格分隔。',
    examples: [{ input: '6\n5 3 8 1 2 7\n4', output: '3 1 2 5 8 7' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Partition array around pivot
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    int pivot;
    cin >> pivot;
    // Stable partition: collect <= pivot then > pivot
    int result[n];
    int idx = 0;
    for (int i = 0; i < n; i++)
        if (arr[i] <= pivot) result[idx++] = arr[i];
    for (int i = 0; i < n; i++)
        if (arr[i] > pivot) result[idx++] = arr[i];
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << result[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Two passes: first collect elements <= pivot, then > pivot', 'This maintains relative order within each group', 'Use a result array'],
    hintsZh: ['两次遍历：先收集 <= pivot 的，再收集 > pivot 的', '这保持了每组内的相对顺序', '使用结果数组'],
    testCases: [
      { input: '6\n5 3 8 1 2 7\n4', expectedOutput: '3 1 2 5 8 7' },
      { input: '4\n1 2 3 4\n2', expectedOutput: '1 2 3 4' },
    ],
  },
  {
    id: 'cpp-ex-3-58',
    title: 'String Character Frequency',
    titleZh: '字符频率统计',
    difficulty: 'medium',
    level: 3,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['strings', 'frequency'],
    description: 'Read a string (lowercase, no spaces). For each character a-z that appears, print "char count" on a line, in alphabetical order.',
    descriptionZh: '读入一个字符串（小写，无空格）。对每个出现的字符 a-z，按字母顺序每行输出 "字符 次数"。',
    examples: [{ input: 'hello', output: 'e 1\nh 1\nl 2\no 1' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Print character frequencies
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    // Count frequency of each letter
    int freq[26] = {0};
    for (char c : s) freq[c - 'a']++;
    // Print in alphabetical order
    for (int i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            cout << (char)('a' + i) << " " << freq[i] << endl;
        }
    }
    return 0;
}`,
    hints: ['Use an array of size 26 for letter frequencies', 'Index with c - \'a\'', 'Iterate a-z and print non-zero counts'],
    hintsZh: ['使用大小26的数组记录字母频率', '用 c - \'a\' 作为索引', '遍历 a-z 输出非零计数'],
    testCases: [
      { input: 'hello', expectedOutput: 'e 1\nh 1\nl 2\no 1' },
      { input: 'aaa', expectedOutput: 'a 3' },
    ],
  },
  {
    id: 'cpp-ex-3-59',
    title: 'Matrix Row Sum',
    titleZh: '矩阵行求和',
    difficulty: 'medium',
    level: 3,
    category: '2D Arrays',
    categoryZh: '二维数组',
    tags: ['2d-arrays', 'matrix'],
    description: 'Read r and c, then an r×c matrix. Print the sum of each row on a separate line.',
    descriptionZh: '读入 r 和 c，然后一个 r×c 矩阵。每行输出该行元素之和。',
    examples: [{ input: '2 3\n1 2 3\n4 5 6', output: '6\n15' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print row sums
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    int mat[r][c];
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> mat[i][j];
    // Sum each row
    for (int i = 0; i < r; i++) {
        int sum = 0;
        for (int j = 0; j < c; j++) sum += mat[i][j];
        cout << sum << endl;
    }
    return 0;
}`,
    hints: ['For each row, sum all columns', 'Use nested loops: outer for rows, inner for columns', 'Print sum after finishing each row'],
    hintsZh: ['对每一行，求所有列之和', '嵌套循环：外层行，内层列', '每行结束后输出求和结果'],
    testCases: [
      { input: '2 3\n1 2 3\n4 5 6', expectedOutput: '6\n15' },
      { input: '3 2\n1 1\n2 2\n3 3', expectedOutput: '2\n4\n6' },
    ],
  },
  {
    id: 'cpp-ex-3-60',
    title: 'Longest Consecutive Run',
    titleZh: '最长连续段',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays'],
    description: 'Read n, then n integers. Find the length of the longest run of consecutive equal elements. Print the length.',
    descriptionZh: '读入 n，然后 n 个整数。找到连续相等元素的最长段长度。输出该长度。',
    examples: [{ input: '8\n1 1 2 2 2 3 3 1', output: '3' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Find longest consecutive run
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    // Track current run length and max
    int maxRun = 1, curRun = 1;
    for (int i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1]) {
            curRun++;
            if (curRun > maxRun) maxRun = curRun;
        } else {
            curRun = 1;
        }
    }
    cout << maxRun << endl;
    return 0;
}`,
    hints: ['Track current run length and maximum seen', 'Reset current run when element changes', 'Update max when current exceeds it'],
    hintsZh: ['跟踪当前连续长度和最大值', '元素变化时重置当前长度', '当前超过最大时更新'],
    testCases: [
      { input: '8\n1 1 2 2 2 3 3 1', expectedOutput: '3' },
      { input: '5\n1 2 3 4 5', expectedOutput: '1' },
      { input: '4\n7 7 7 7', expectedOutput: '4' },
    ],
  },
];
