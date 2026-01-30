import { CppExercise } from './cpp-exercises';

// Level 2 extras: exercises cpp-ex-2-21 through cpp-ex-2-60
export const CPP_EXERCISES_PART3: CppExercise[] = [
  {
    id: 'cpp-ex-2-21',
    title: 'Right Triangle Pattern',
    titleZh: '直角三角形图案',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read n. Print a right triangle of stars with n rows. Row i has i stars.',
    descriptionZh: '读入 n，打印 n 行的直角三角形。第 i 行有 i 个星号。',
    examples: [{ input: '4', output: '*\n**\n***\n****' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print right triangle of stars
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Outer loop for rows
    for (int i = 1; i <= n; i++) {
        // Inner loop for stars in each row
        for (int j = 0; j < i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Use nested loops: outer for rows, inner for columns', 'Row i prints i stars'],
    hintsZh: ['使用嵌套循环：外层控制行，内层控制列', '第 i 行打印 i 个星号'],
    testCases: [
      { input: '4', expectedOutput: '*\n**\n***\n****' },
      { input: '3', expectedOutput: '*\n**\n***' },
    ],
  },
  {
    id: 'cpp-ex-2-22',
    title: 'Inverted Right Triangle',
    titleZh: '倒直角三角形',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read n. Print an inverted right triangle. Row i has (n-i+1) stars.',
    descriptionZh: '读入 n，打印倒直角三角形。第 i 行有 (n-i+1) 个星号。',
    examples: [{ input: '4', output: '****\n***\n**\n*' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print inverted right triangle
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = n; i >= 1; i--) {
        for (int j = 0; j < i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Start the outer loop from n down to 1', 'Each row prints i stars'],
    hintsZh: ['外层循环从 n 递减到 1', '每行打印 i 个星号'],
    testCases: [
      { input: '4', expectedOutput: '****\n***\n**\n*' },
      { input: '3', expectedOutput: '***\n**\n*' },
    ],
  },
  {
    id: 'cpp-ex-2-23',
    title: 'Number Triangle',
    titleZh: '数字三角形',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read n. Print a triangle where row i contains numbers 1 to i.',
    descriptionZh: '读入 n，打印三角形，第 i 行包含数字 1 到 i。',
    examples: [{ input: '4', output: '1\n12\n123\n1234' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print number triangle
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j;
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Inner loop prints 1 to i', 'No space between numbers'],
    hintsZh: ['内层循环打印 1 到 i', '数字之间无空格'],
    testCases: [
      { input: '4', expectedOutput: '1\n12\n123\n1234' },
      { input: '3', expectedOutput: '1\n12\n123' },
    ],
  },
  {
    id: 'cpp-ex-2-24',
    title: 'Pyramid Pattern',
    titleZh: '金字塔图案',
    difficulty: 'medium',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read n. Print a centered pyramid of stars with n rows. Use spaces for alignment.',
    descriptionZh: '读入 n，打印居中的星号金字塔，共 n 行。用空格对齐。',
    examples: [{ input: '3', output: '  *\n ***\n*****' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print centered pyramid
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        // Print leading spaces
        for (int j = 0; j < n - i; j++) cout << " ";
        // Print stars (2*i - 1)
        for (int j = 0; j < 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    return 0;
}`,
    hints: ['Each row has (n-i) leading spaces and (2*i-1) stars', 'Use two inner loops: one for spaces, one for stars'],
    hintsZh: ['每行有 (n-i) 个前导空格和 (2*i-1) 个星号', '用两个内层循环：一个打印空格，一个打印星号'],
    testCases: [
      { input: '3', expectedOutput: '  *\n ***\n*****' },
      { input: '4', expectedOutput: '   *\n  ***\n *****\n*******' },
    ],
  },
  {
    id: 'cpp-ex-2-25',
    title: 'Diamond Pattern',
    titleZh: '菱形图案',
    difficulty: 'medium',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read n (odd number). Print a diamond shape of stars.',
    descriptionZh: '读入 n（奇数），打印菱形星号图案。',
    examples: [{ input: '5', output: '  *\n ***\n*****\n ***\n  *' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print diamond pattern
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int mid = n / 2;
    // Upper half including middle
    for (int i = 0; i <= mid; i++) {
        for (int j = 0; j < mid - i; j++) cout << " ";
        for (int j = 0; j < 2 * i + 1; j++) cout << "*";
        cout << endl;
    }
    // Lower half
    for (int i = mid - 1; i >= 0; i--) {
        for (int j = 0; j < mid - i; j++) cout << " ";
        for (int j = 0; j < 2 * i + 1; j++) cout << "*";
        cout << endl;
    }
    return 0;
}`,
    hints: ['Split into upper half and lower half', 'Upper half grows, lower half shrinks'],
    hintsZh: ['分为上半部分和下半部分', '上半部分递增，下半部分递减'],
    testCases: [
      { input: '5', expectedOutput: '  *\n ***\n*****\n ***\n  *' },
      { input: '3', expectedOutput: ' *\n***\n *' },
    ],
  },
  {
    id: 'cpp-ex-2-26',
    title: 'Check Prime Number',
    titleZh: '判断素数',
    difficulty: 'easy',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'prime'],
    description: 'Read an integer n (>1). Print "Prime" if it is prime, otherwise "Not Prime".',
    descriptionZh: '读入整数 n（>1），如果是素数输出 "Prime"，否则输出 "Not Prime"。',
    examples: [{ input: '7', output: 'Prime' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check if number is prime
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    bool isPrime = true;
    // Check divisibility from 2 to sqrt(n)
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    cout << (isPrime ? "Prime" : "Not Prime") << endl;
    return 0;
}`,
    hints: ['Check if any number from 2 to sqrt(n) divides n', 'If n % i == 0 for any i, it is not prime'],
    hintsZh: ['检查 2 到 sqrt(n) 之间是否有因子', '如果 n % i == 0 则不是素数'],
    testCases: [
      { input: '7', expectedOutput: 'Prime' },
      { input: '10', expectedOutput: 'Not Prime' },
      { input: '2', expectedOutput: 'Prime' },
    ],
  },
  {
    id: 'cpp-ex-2-27',
    title: 'GCD of Two Numbers',
    titleZh: '最大公约数',
    difficulty: 'easy',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'gcd', 'euclidean'],
    description: 'Read two positive integers. Print their GCD using the Euclidean algorithm.',
    descriptionZh: '读入两个正整数，用欧几里得算法输出它们的最大公约数。',
    examples: [{ input: '12 8', output: '4' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Find GCD using Euclidean algorithm
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    // Euclidean algorithm
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    cout << a << endl;
    return 0;
}`,
    hints: ['Euclidean: repeatedly replace (a,b) with (b, a%b)', 'Stop when b becomes 0, answer is a'],
    hintsZh: ['欧几里得：反复用 (b, a%b) 替换 (a,b)', '当 b 为 0 时停止，答案是 a'],
    testCases: [
      { input: '12 8', expectedOutput: '4' },
      { input: '17 5', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-28',
    title: 'LCM of Two Numbers',
    titleZh: '最小公倍数',
    difficulty: 'easy',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'lcm', 'gcd'],
    description: 'Read two positive integers. Print their LCM. Use LCM = a * b / GCD(a, b).',
    descriptionZh: '读入两个正整数，输出最小公倍数。公式：LCM = a * b / GCD(a, b)。',
    examples: [{ input: '4 6', output: '12' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Find LCM using GCD
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    // Find GCD first
    int x = a, y = b;
    while (y != 0) {
        int temp = y;
        y = x % y;
        x = temp;
    }
    // LCM = a * b / GCD
    cout << a * b / x << endl;
    return 0;
}`,
    hints: ['LCM(a,b) = a * b / GCD(a,b)', 'First compute GCD using Euclidean algorithm'],
    hintsZh: ['LCM(a,b) = a * b / GCD(a,b)', '先用欧几里得算法求 GCD'],
    testCases: [
      { input: '4 6', expectedOutput: '12' },
      { input: '3 7', expectedOutput: '21' },
    ],
  },
  {
    id: 'cpp-ex-2-29',
    title: 'Palindrome Number',
    titleZh: '回文数',
    difficulty: 'easy',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'digits', 'palindrome'],
    description: 'Read an integer. Print "Yes" if it is a palindrome number, otherwise "No".',
    descriptionZh: '读入一个整数，如果是回文数输出 "Yes"，否则输出 "No"。',
    examples: [{ input: '121', output: 'Yes' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check palindrome number
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int original = n, reversed = 0;
    // Reverse the number digit by digit
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    cout << (original == reversed ? "Yes" : "No") << endl;
    return 0;
}`,
    hints: ['Reverse the number by extracting digits', 'Compare reversed with original'],
    hintsZh: ['通过提取数字来反转数', '比较反转后的数与原数'],
    testCases: [
      { input: '121', expectedOutput: 'Yes' },
      { input: '123', expectedOutput: 'No' },
    ],
  },
  {
    id: 'cpp-ex-2-30',
    title: 'Armstrong Number',
    titleZh: '阿姆斯特朗数',
    difficulty: 'medium',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'digits', 'armstrong'],
    description: 'Read a 3-digit number. Print "Yes" if it is an Armstrong number (sum of cubes of digits equals the number), otherwise "No".',
    descriptionZh: '读入一个三位数，判断是否是阿姆斯特朗数（各位数字的立方和等于该数）。是输出 "Yes"，否输出 "No"。',
    examples: [{ input: '153', output: 'Yes' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check Armstrong number
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int original = n, sum = 0;
    while (n > 0) {
        int d = n % 10;
        sum += d * d * d;  // Cube of each digit
        n /= 10;
    }
    cout << (sum == original ? "Yes" : "No") << endl;
    return 0;
}`,
    hints: ['Extract each digit and cube it', 'Sum of cubes should equal the original number'],
    hintsZh: ['提取每一位并求立方', '立方和应等于原数'],
    testCases: [
      { input: '153', expectedOutput: 'Yes' },
      { input: '370', expectedOutput: 'Yes' },
      { input: '123', expectedOutput: 'No' },
    ],
  },
  {
    id: 'cpp-ex-2-31',
    title: 'Fibonacci Series',
    titleZh: '斐波那契数列',
    difficulty: 'easy',
    level: 2,
    category: 'Series',
    categoryZh: '数列',
    tags: ['loops', 'fibonacci'],
    description: 'Read n. Print the first n Fibonacci numbers separated by spaces. Start: 0 1 1 2 3 5...',
    descriptionZh: '读入 n，输出前 n 个斐波那契数，空格分隔。起始：0 1 1 2 3 5...',
    examples: [{ input: '6', output: '0 1 1 2 3 5' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print first n Fibonacci numbers
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a = 0, b = 1;
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << a;
        int next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
    return 0;
}`,
    hints: ['Keep two variables: current and next', 'Each new number is the sum of the previous two'],
    hintsZh: ['保持两个变量：当前和下一个', '每个新数是前两个的和'],
    testCases: [
      { input: '6', expectedOutput: '0 1 1 2 3 5' },
      { input: '1', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-2-32',
    title: 'Sum of Series 1+2+...+n',
    titleZh: '等差数列求和',
    difficulty: 'easy',
    level: 2,
    category: 'Series',
    categoryZh: '数列',
    tags: ['loops', 'series'],
    description: 'Read n. Print the sum 1 + 2 + 3 + ... + n.',
    descriptionZh: '读入 n，输出 1 + 2 + 3 + ... + n 的和。',
    examples: [{ input: '5', output: '15' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Sum of 1 to n
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Use formula n*(n+1)/2
    cout << n * (n + 1) / 2 << endl;
    return 0;
}`,
    hints: ['Use a loop or the formula n*(n+1)/2', 'Formula is more efficient'],
    hintsZh: ['用循环或公式 n*(n+1)/2', '公式更高效'],
    testCases: [
      { input: '5', expectedOutput: '15' },
      { input: '100', expectedOutput: '5050' },
    ],
  },
  {
    id: 'cpp-ex-2-33',
    title: 'Count Digits',
    titleZh: '数字位数',
    difficulty: 'easy',
    level: 2,
    category: 'Digit Operations',
    categoryZh: '数字操作',
    tags: ['loops', 'digits'],
    description: 'Read a positive integer. Print the number of digits it has.',
    descriptionZh: '读入一个正整数，输出它的位数。',
    examples: [{ input: '12345', output: '5' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Count digits
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int count = 0;
    // Divide by 10 repeatedly
    while (n > 0) {
        count++;
        n /= 10;
    }
    cout << count << endl;
    return 0;
}`,
    hints: ['Divide by 10 until the number becomes 0', 'Count each division'],
    hintsZh: ['反复除以10直到数为0', '每次除法计数加1'],
    testCases: [
      { input: '12345', expectedOutput: '5' },
      { input: '7', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-34',
    title: 'Sum of Digits',
    titleZh: '各位数字之和',
    difficulty: 'easy',
    level: 2,
    category: 'Digit Operations',
    categoryZh: '数字操作',
    tags: ['loops', 'digits'],
    description: 'Read a positive integer. Print the sum of its digits.',
    descriptionZh: '读入一个正整数，输出各位数字之和。',
    examples: [{ input: '1234', output: '10' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Sum of digits
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sum = 0;
    while (n > 0) {
        sum += n % 10;  // Add last digit
        n /= 10;        // Remove last digit
    }
    cout << sum << endl;
    return 0;
}`,
    hints: ['Use n%10 to get the last digit', 'Use n/=10 to remove the last digit'],
    hintsZh: ['用 n%10 取最后一位', '用 n/=10 去掉最后一位'],
    testCases: [
      { input: '1234', expectedOutput: '10' },
      { input: '999', expectedOutput: '27' },
    ],
  },
  {
    id: 'cpp-ex-2-35',
    title: 'Reverse a Number',
    titleZh: '反转整数',
    difficulty: 'easy',
    level: 2,
    category: 'Digit Operations',
    categoryZh: '数字操作',
    tags: ['loops', 'digits'],
    description: 'Read a positive integer. Print it reversed.',
    descriptionZh: '读入一个正整数，输出反转后的数。',
    examples: [{ input: '1234', output: '4321' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Reverse a number
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    cout << rev << endl;
    return 0;
}`,
    hints: ['Build reversed number: rev = rev*10 + n%10', 'Remove last digit with n/=10'],
    hintsZh: ['构建反转数：rev = rev*10 + n%10', '用 n/=10 去掉最后一位'],
    testCases: [
      { input: '1234', expectedOutput: '4321' },
      { input: '100', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-36',
    title: 'Multiplication Table',
    titleZh: '乘法表',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['loops', 'output'],
    description: 'Read n. Print the multiplication table of n from 1 to 10. Format: "n x i = result" per line.',
    descriptionZh: '读入 n，打印 n 的乘法表（1到10）。格式：每行 "n x i = result"。',
    examples: [{ input: '5', output: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print multiplication table
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << i << " = " << n * i << endl;
    }
    return 0;
}`,
    hints: ['Loop from 1 to 10', 'Print n x i = n*i'],
    hintsZh: ['循环从 1 到 10', '输出 n x i = n*i'],
    testCases: [
      { input: '5', expectedOutput: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50' },
      { input: '3', expectedOutput: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30' },
    ],
  },
  {
    id: 'cpp-ex-2-37',
    title: 'Factorial',
    titleZh: '阶乘',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['loops', 'factorial'],
    description: 'Read n (0 <= n <= 12). Print n! (n factorial).',
    descriptionZh: '读入 n (0 <= n <= 12)，输出 n 的阶乘。',
    examples: [{ input: '5', output: '120' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Calculate factorial
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    long long fact = 1;
    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    cout << fact << endl;
    return 0;
}`,
    hints: ['Multiply 1 * 2 * 3 * ... * n', '0! = 1'],
    hintsZh: ['连乘 1 * 2 * 3 * ... * n', '0! = 1'],
    testCases: [
      { input: '5', expectedOutput: '120' },
      { input: '0', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-38',
    title: 'Power Without pow()',
    titleZh: '不用pow()求幂',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['loops'],
    description: 'Read base and exponent (non-negative). Print base^exponent using a loop (no pow()).',
    descriptionZh: '读入底数和非负指数，用循环（不用pow()）输出幂结果。',
    examples: [{ input: '2 10', output: '1024' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Calculate power using loop
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    long long base, exp;
    cin >> base >> exp;
    long long result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    cout << result << endl;
    return 0;
}`,
    hints: ['Multiply base by itself exp times', 'Start result at 1'],
    hintsZh: ['将 base 自乘 exp 次', '结果初始值为 1'],
    testCases: [
      { input: '2 10', expectedOutput: '1024' },
      { input: '3 0', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-39',
    title: 'Print Primes in Range',
    titleZh: '范围内的素数',
    difficulty: 'medium',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'prime'],
    description: 'Read two integers a and b. Print all primes between a and b (inclusive), space-separated.',
    descriptionZh: '读入两个整数 a 和 b，输出 a 到 b（含）之间所有素数，空格分隔。',
    examples: [{ input: '10 20', output: '11 13 17 19' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print primes in range [a, b]
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    bool first = true;
    for (int n = a; n <= b; n++) {
        if (n < 2) continue;
        bool isPrime = true;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) { isPrime = false; break; }
        }
        if (isPrime) {
            if (!first) cout << " ";
            cout << n;
            first = false;
        }
    }
    cout << endl;
    return 0;
}`,
    hints: ['For each number in range, check if it is prime', 'A number < 2 is not prime'],
    hintsZh: ['对范围内每个数检查是否为素数', '小于2的数不是素数'],
    testCases: [
      { input: '10 20', expectedOutput: '11 13 17 19' },
      { input: '1 10', expectedOutput: '2 3 5 7' },
    ],
  },
  {
    id: 'cpp-ex-2-40',
    title: 'Perfect Number',
    titleZh: '完美数',
    difficulty: 'medium',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'divisors'],
    description: 'Read a positive integer. Print "Yes" if it is a perfect number (sum of proper divisors equals the number), otherwise "No".',
    descriptionZh: '读入一个正整数，如果它是完美数（所有真因子之和等于自身）输出 "Yes"，否则输出 "No"。',
    examples: [{ input: '6', output: 'Yes' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check perfect number
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sum = 0;
    // Find all proper divisors
    for (int i = 1; i < n; i++) {
        if (n % i == 0) sum += i;
    }
    cout << (sum == n ? "Yes" : "No") << endl;
    return 0;
}`,
    hints: ['Sum all divisors of n except n itself', '6 = 1+2+3, so 6 is perfect'],
    hintsZh: ['求 n 除自身外所有因子的和', '6 = 1+2+3，所以6是完美数'],
    testCases: [
      { input: '6', expectedOutput: 'Yes' },
      { input: '28', expectedOutput: 'Yes' },
      { input: '12', expectedOutput: 'No' },
    ],
  },
  {
    id: 'cpp-ex-2-41',
    title: 'Star Rectangle',
    titleZh: '星号矩形',
    difficulty: 'easy',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read rows r and columns c. Print a rectangle of stars.',
    descriptionZh: '读入行数 r 和列数 c，打印星号矩形。',
    examples: [{ input: '3 5', output: '*****\n*****\n*****' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print star rectangle
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Nested loops: outer for rows, inner for columns', 'Print * in inner loop, endl after each row'],
    hintsZh: ['嵌套循环：外层行，内层列', '内层打印*，每行后换行'],
    testCases: [
      { input: '3 5', expectedOutput: '*****\n*****\n*****' },
      { input: '2 3', expectedOutput: '***\n***' },
    ],
  },
  {
    id: 'cpp-ex-2-42',
    title: 'Hollow Rectangle',
    titleZh: '空心矩形',
    difficulty: 'medium',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read r and c. Print a hollow rectangle of stars (border only).',
    descriptionZh: '读入 r 和 c，打印空心星号矩形（只有边框）。',
    examples: [{ input: '4 5', output: '*****\n*   *\n*   *\n*****' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print hollow rectangle
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            // Print star on border, space inside
            if (i == 0 || i == r-1 || j == 0 || j == c-1)
                cout << "*";
            else
                cout << " ";
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Print * on first/last row and first/last column', 'Print space otherwise'],
    hintsZh: ['在第一行/最后一行和第一列/最后一列打印*', '其他位置打印空格'],
    testCases: [
      { input: '4 5', expectedOutput: '*****\n*   *\n*   *\n*****' },
      { input: '3 3', expectedOutput: '***\n* *\n***' },
    ],
  },
  {
    id: 'cpp-ex-2-43',
    title: 'While Loop Sum Until Zero',
    titleZh: 'While循环求和直到零',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while', 'loops'],
    description: 'Read integers one by one until 0 is entered. Print the sum of all entered numbers (excluding the 0).',
    descriptionZh: '逐个读入整数直到输入0为止，输出所有输入数的和（不含0）。',
    examples: [{ input: '3 5 7 0', output: '15' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Sum numbers until 0
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    // Read until 0
    while (cin >> n && n != 0) {
        sum += n;
    }
    cout << sum << endl;
    return 0;
}`,
    hints: ['Use while loop with condition n != 0', 'Read inside the loop condition or at start of loop body'],
    hintsZh: ['用 while 循环，条件为 n != 0', '在循环条件或循环体开头读取输入'],
    testCases: [
      { input: '3 5 7 0', expectedOutput: '15' },
      { input: '0', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-2-44',
    title: 'Do-While Menu',
    titleZh: 'Do-While菜单',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['do-while', 'loops'],
    description: 'Read a positive integer n using a do-while loop. Keep asking until a positive number is given, then print it.',
    descriptionZh: '用 do-while 循环读入正整数。持续要求输入直到给出正数，然后输出。',
    examples: [{ input: '-3 0 5', output: '5' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Use do-while to get a positive number
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    // do-while ensures at least one read
    do {
        cin >> n;
    } while (n <= 0);
    cout << n << endl;
    return 0;
}`,
    hints: ['do-while executes at least once', 'Check condition: n <= 0 to keep looping'],
    hintsZh: ['do-while 至少执行一次', '条件 n <= 0 继续循环'],
    testCases: [
      { input: '-3 0 5', expectedOutput: '5' },
      { input: '7', expectedOutput: '7' },
    ],
  },
  {
    id: 'cpp-ex-2-45',
    title: 'Collatz Conjecture Steps',
    titleZh: 'Collatz猜想步数',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while', 'loops'],
    description: 'Read n. Apply the Collatz sequence (if even: n/2, if odd: 3n+1) until n=1. Print the number of steps.',
    descriptionZh: '读入 n，执行 Collatz 序列（偶数除2，奇数乘3加1）直到 n=1。输出步数。',
    examples: [{ input: '6', output: '8' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Count Collatz steps
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int steps = 0;
    while (n != 1) {
        if (n % 2 == 0) n /= 2;
        else n = 3 * n + 1;
        steps++;
    }
    cout << steps << endl;
    return 0;
}`,
    hints: ['Even: divide by 2. Odd: multiply by 3 and add 1', 'Count each transformation as a step'],
    hintsZh: ['偶数除2，奇数乘3加1', '每次变换计为一步'],
    testCases: [
      { input: '6', expectedOutput: '8' },
      { input: '1', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-2-46',
    title: 'Switch Day of Week',
    titleZh: 'Switch星期几',
    difficulty: 'easy',
    level: 2,
    category: 'Control Flow',
    categoryZh: '控制流',
    tags: ['switch', 'control-flow'],
    description: 'Read an integer 1-7. Print the day name (1=Monday, ..., 7=Sunday) using switch.',
    descriptionZh: '读入整数1-7，用 switch 输出星期名称（1=Monday, ..., 7=Sunday）。',
    examples: [{ input: '3', output: 'Wednesday' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Use switch for day of week
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int d;
    cin >> d;
    switch (d) {
        case 1: cout << "Monday" << endl; break;
        case 2: cout << "Tuesday" << endl; break;
        case 3: cout << "Wednesday" << endl; break;
        case 4: cout << "Thursday" << endl; break;
        case 5: cout << "Friday" << endl; break;
        case 6: cout << "Saturday" << endl; break;
        case 7: cout << "Sunday" << endl; break;
    }
    return 0;
}`,
    hints: ['Use switch(d) with cases 1 through 7', 'Don\'t forget break after each case'],
    hintsZh: ['用 switch(d) 匹配 1 到 7', '每个 case 后不要忘记 break'],
    testCases: [
      { input: '3', expectedOutput: 'Wednesday' },
      { input: '7', expectedOutput: 'Sunday' },
    ],
  },
  {
    id: 'cpp-ex-2-47',
    title: 'Simple Calculator (Switch)',
    titleZh: '简单计算器（Switch）',
    difficulty: 'easy',
    level: 2,
    category: 'Control Flow',
    categoryZh: '控制流',
    tags: ['switch', 'arithmetic'],
    description: 'Read two doubles and a char operator (+,-,*,/). Print the result with 2 decimal places using switch.',
    descriptionZh: '读入两个浮点数和一个运算符（+,-,*,/），用 switch 输出结果，保留两位小数。',
    examples: [{ input: '10 3 /', output: '3.33' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Simple calculator with switch
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a, b;
    char op;
    cin >> a >> b >> op;
    double result;
    switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
    }
    cout << fixed << setprecision(2) << result << endl;
    return 0;
}`,
    hints: ['Use switch on the char operator', 'Handle +, -, *, / cases'],
    hintsZh: ['对字符运算符使用 switch', '处理 +, -, *, / 四种情况'],
    testCases: [
      { input: '10 3 /', expectedOutput: '3.33' },
      { input: '5 3 +', expectedOutput: '8.00' },
    ],
  },
  {
    id: 'cpp-ex-2-48',
    title: 'Sum of Even Numbers',
    titleZh: '偶数之和',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['loops', 'even'],
    description: 'Read n. Print the sum of all even numbers from 1 to n.',
    descriptionZh: '读入 n，输出 1 到 n 之间所有偶数的和。',
    examples: [{ input: '10', output: '30' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Sum of even numbers from 1 to n
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sum = 0;
    for (int i = 2; i <= n; i += 2) {
        sum += i;
    }
    cout << sum << endl;
    return 0;
}`,
    hints: ['Start from 2 and increment by 2', 'Or check i%2==0 in each iteration'],
    hintsZh: ['从2开始，步长为2', '或每次判断 i%2==0'],
    testCases: [
      { input: '10', expectedOutput: '30' },
      { input: '7', expectedOutput: '12' },
    ],
  },
  {
    id: 'cpp-ex-2-49',
    title: 'Binary to Decimal',
    titleZh: '二进制转十进制',
    difficulty: 'medium',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'binary'],
    description: 'Read a binary number (as integer, e.g. 1010). Print its decimal equivalent.',
    descriptionZh: '读入一个二进制数（作为整数，如1010），输出十进制等值。',
    examples: [{ input: '1010', output: '10' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Convert binary to decimal
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int bin;
    cin >> bin;
    int dec = 0, base = 1;
    // Process each digit
    while (bin > 0) {
        dec += (bin % 10) * base;
        bin /= 10;
        base *= 2;
    }
    cout << dec << endl;
    return 0;
}`,
    hints: ['Extract each digit, multiply by power of 2', 'Rightmost digit * 1, next * 2, then * 4, etc.'],
    hintsZh: ['提取每一位，乘以2的幂', '最右位*1，下一位*2，再下一位*4...'],
    testCases: [
      { input: '1010', expectedOutput: '10' },
      { input: '1111', expectedOutput: '15' },
    ],
  },
  {
    id: 'cpp-ex-2-50',
    title: 'Decimal to Binary',
    titleZh: '十进制转二进制',
    difficulty: 'medium',
    level: 2,
    category: 'Number Theory',
    categoryZh: '数论',
    tags: ['loops', 'binary'],
    description: 'Read a positive decimal integer. Print its binary representation.',
    descriptionZh: '读入一个正的十进制整数，输出其二进制表示。',
    examples: [{ input: '10', output: '1010' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Convert decimal to binary
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int binary = 0, place = 1;
    // Build binary number
    while (n > 0) {
        binary += (n % 2) * place;
        n /= 2;
        place *= 10;
    }
    cout << binary << endl;
    return 0;
}`,
    hints: ['Repeatedly divide by 2, collect remainders', 'Build result by placing remainders in correct position'],
    hintsZh: ['反复除以2，收集余数', '将余数放在正确位置构建结果'],
    testCases: [
      { input: '10', expectedOutput: '1010' },
      { input: '15', expectedOutput: '1111' },
    ],
  },
  {
    id: 'cpp-ex-2-51',
    title: 'Nested Loop Checkerboard',
    titleZh: '棋盘格图案',
    difficulty: 'medium',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read n. Print an n×n checkerboard of # and . characters.',
    descriptionZh: '读入 n，打印 n×n 的棋盘格（# 和 . 交替）。',
    examples: [{ input: '4', output: '#.#.\n.#.#\n#.#.\n.#.#' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print checkerboard pattern
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            // Alternate based on sum of indices
            cout << ((i + j) % 2 == 0 ? '#' : '.');
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['If (row+col) is even, print #; otherwise .', 'Use modulo on the sum of indices'],
    hintsZh: ['如果 (行+列) 为偶数打印 #，否则打印 .', '对索引之和取模'],
    testCases: [
      { input: '4', expectedOutput: '#.#.\n.#.#\n#.#.\n.#.#' },
      { input: '3', expectedOutput: '#.#\n.#.\n#.#' },
    ],
  },
  {
    id: 'cpp-ex-2-52',
    title: 'Largest Digit',
    titleZh: '最大的数字',
    difficulty: 'easy',
    level: 2,
    category: 'Digit Operations',
    categoryZh: '数字操作',
    tags: ['loops', 'digits'],
    description: 'Read a positive integer. Print its largest digit.',
    descriptionZh: '读入一个正整数，输出最大的那个数字。',
    examples: [{ input: '3829', output: '9' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Find largest digit
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int maxD = 0;
    while (n > 0) {
        int d = n % 10;
        if (d > maxD) maxD = d;
        n /= 10;
    }
    cout << maxD << endl;
    return 0;
}`,
    hints: ['Extract each digit and track the maximum', 'Use n%10 to get each digit'],
    hintsZh: ['提取每一位并跟踪最大值', '用 n%10 取每一位'],
    testCases: [
      { input: '3829', expectedOutput: '9' },
      { input: '1111', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-53',
    title: 'Number Pattern (Floyd Triangle)',
    titleZh: 'Floyd三角形',
    difficulty: 'medium',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns'],
    description: 'Read n. Print Floyd\'s triangle with n rows. Numbers go 1, 2, 3, ... sequentially.',
    descriptionZh: '读入 n，打印 Floyd 三角形（n行）。数字从1开始依次排列。',
    examples: [{ input: '4', output: '1\n2 3\n4 5 6\n7 8 9 10' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print Floyd's triangle
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int num = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            if (j > 1) cout << " ";
            cout << num++;
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Use a counter that increments for each position', 'Row i has i numbers'],
    hintsZh: ['使用计数器，每个位置递增', '第 i 行有 i 个数'],
    testCases: [
      { input: '4', expectedOutput: '1\n2 3\n4 5 6\n7 8 9 10' },
      { input: '3', expectedOutput: '1\n2 3\n4 5 6' },
    ],
  },
  {
    id: 'cpp-ex-2-54',
    title: 'Break and Continue',
    titleZh: 'Break和Continue',
    difficulty: 'easy',
    level: 2,
    category: 'Control Flow',
    categoryZh: '控制流',
    tags: ['break', 'continue', 'loops'],
    description: 'Read n. Print all numbers from 1 to n, skipping multiples of 3. Stop if you encounter a multiple of 7 (don\'t print it).',
    descriptionZh: '读入 n，打印1到n，跳过3的倍数。遇到7的倍数时停止（不打印）。空格分隔。',
    examples: [{ input: '20', output: '1 2 4 5' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Use break and continue
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    bool first = true;
    for (int i = 1; i <= n; i++) {
        if (i % 7 == 0) break;       // Stop at multiple of 7
        if (i % 3 == 0) continue;    // Skip multiples of 3
        if (!first) cout << " ";
        cout << i;
        first = false;
    }
    cout << endl;
    return 0;
}`,
    hints: ['Use break to exit the loop at multiples of 7', 'Use continue to skip multiples of 3'],
    hintsZh: ['用 break 在7的倍数处退出循环', '用 continue 跳过3的倍数'],
    testCases: [
      { input: '20', expectedOutput: '1 2 4 5' },
      { input: '5', expectedOutput: '1 2 4 5' },
    ],
  },
  {
    id: 'cpp-ex-2-55',
    title: 'Leap Year Check',
    titleZh: '判断闰年',
    difficulty: 'easy',
    level: 2,
    category: 'Control Flow',
    categoryZh: '控制流',
    tags: ['if-else', 'logic'],
    description: 'Read a year. Print "Leap" if it is a leap year, otherwise "Not Leap".',
    descriptionZh: '读入年份，如果是闰年输出 "Leap"，否则输出 "Not Leap"。',
    examples: [{ input: '2024', output: 'Leap' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check leap year
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int y;
    cin >> y;
    // Leap if divisible by 4 but not 100, or divisible by 400
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
        cout << "Leap" << endl;
    else
        cout << "Not Leap" << endl;
    return 0;
}`,
    hints: ['Divisible by 4 but not 100, OR divisible by 400', 'Use logical operators && and ||'],
    hintsZh: ['能被4整除但不能被100整除，或能被400整除', '使用逻辑运算符 && 和 ||'],
    testCases: [
      { input: '2024', expectedOutput: 'Leap' },
      { input: '1900', expectedOutput: 'Not Leap' },
      { input: '2000', expectedOutput: 'Leap' },
    ],
  },
  {
    id: 'cpp-ex-2-56',
    title: 'Grade Classification',
    titleZh: '成绩等级',
    difficulty: 'easy',
    level: 2,
    category: 'Control Flow',
    categoryZh: '控制流',
    tags: ['if-else', 'logic'],
    description: 'Read a score (0-100). Print grade: A (90-100), B (80-89), C (70-79), D (60-69), F (<60).',
    descriptionZh: '读入成绩（0-100），输出等级：A(90-100), B(80-89), C(70-79), D(60-69), F(<60)。',
    examples: [{ input: '85', output: 'B' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Grade classification
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int score;
    cin >> score;
    if (score >= 90) cout << "A" << endl;
    else if (score >= 80) cout << "B" << endl;
    else if (score >= 70) cout << "C" << endl;
    else if (score >= 60) cout << "D" << endl;
    else cout << "F" << endl;
    return 0;
}`,
    hints: ['Use if-else if chain from highest to lowest', 'Check >= 90 first, then >= 80, etc.'],
    hintsZh: ['用 if-else if 链从高到低判断', '先检查 >= 90，再 >= 80，依此类推'],
    testCases: [
      { input: '85', expectedOutput: 'B' },
      { input: '95', expectedOutput: 'A' },
      { input: '55', expectedOutput: 'F' },
    ],
  },
  {
    id: 'cpp-ex-2-57',
    title: 'Count Vowels in String',
    titleZh: '统计元音字母',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['loops', 'string', 'chars'],
    description: 'Read a word. Print the count of vowels (a, e, i, o, u — case insensitive).',
    descriptionZh: '读入一个单词，输出元音字母（a,e,i,o,u，不区分大小写）的个数。',
    examples: [{ input: 'Hello', output: '2' }],
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
    cin >> s;
    int count = 0;
    for (char c : s) {
        c = tolower(c);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
            count++;
    }
    cout << count << endl;
    return 0;
}`,
    hints: ['Loop through each character', 'Convert to lowercase and check against vowels'],
    hintsZh: ['遍历每个字符', '转为小写后与元音比较'],
    testCases: [
      { input: 'Hello', expectedOutput: '2' },
      { input: 'AEIOU', expectedOutput: '5' },
    ],
  },
  {
    id: 'cpp-ex-2-58',
    title: 'Sum of Odd Numbers',
    titleZh: '奇数之和',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['loops', 'odd'],
    description: 'Read n. Print the sum of all odd numbers from 1 to n.',
    descriptionZh: '读入 n，输出 1 到 n 之间所有奇数的和。',
    examples: [{ input: '10', output: '25' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Sum of odd numbers
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sum = 0;
    for (int i = 1; i <= n; i += 2) {
        sum += i;
    }
    cout << sum << endl;
    return 0;
}`,
    hints: ['Start from 1, increment by 2', 'Or check i%2 != 0'],
    hintsZh: ['从1开始，步长为2', '或判断 i%2 != 0'],
    testCases: [
      { input: '10', expectedOutput: '25' },
      { input: '5', expectedOutput: '9' },
    ],
  },
  {
    id: 'cpp-ex-2-59',
    title: 'Alphabet Triangle',
    titleZh: '字母三角形',
    difficulty: 'medium',
    level: 2,
    category: 'Patterns',
    categoryZh: '图案',
    tags: ['nested-loops', 'patterns', 'chars'],
    description: 'Read n (1-26). Print a triangle where row i has letters A to the i-th letter.',
    descriptionZh: '读入 n（1-26），打印三角形，第 i 行从 A 到第 i 个字母。',
    examples: [{ input: '4', output: 'A\nAB\nABC\nABCD' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print alphabet triangle
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            cout << (char)('A' + j);
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Use (char)(\'A\' + j) to get the j-th letter', 'Row i prints letters A through the i-th letter'],
    hintsZh: ['用 (char)(\'A\' + j) 得到第 j 个字母', '第 i 行打印 A 到第 i 个字母'],
    testCases: [
      { input: '4', expectedOutput: 'A\nAB\nABC\nABCD' },
      { input: '3', expectedOutput: 'A\nAB\nABC' },
    ],
  },
  {
    id: 'cpp-ex-2-60',
    title: 'Digit Frequency',
    titleZh: '数字频率',
    difficulty: 'medium',
    level: 2,
    category: 'Digit Operations',
    categoryZh: '数字操作',
    tags: ['loops', 'digits', 'array'],
    description: 'Read a positive integer. Print how many times each digit (0-9) appears. Print only digits that appear at least once, in format "d:count" per line.',
    descriptionZh: '读入一个正整数，输出每个数字（0-9）出现的次数。只输出出现至少一次的数字，格式 "d:count" 每行一个。',
    examples: [{ input: '1122334', output: '1:2\n2:2\n3:2\n4:1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Count digit frequency
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int freq[10] = {0};
    // Count each digit
    while (n > 0) {
        freq[n % 10]++;
        n /= 10;
    }
    for (int i = 0; i <= 9; i++) {
        if (freq[i] > 0)
            cout << i << ":" << freq[i] << endl;
    }
    return 0;
}`,
    hints: ['Use an array of size 10 to count each digit', 'Index by the digit value (0-9)'],
    hintsZh: ['用大小为10的数组统计每个数字', '用数字值（0-9）作为索引'],
    testCases: [
      { input: '1122334', expectedOutput: '1:2\n2:2\n3:2\n4:1' },
      { input: '1000', expectedOutput: '0:3\n1:1' },
    ],
  },
];
