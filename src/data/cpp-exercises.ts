export interface CppExercise {
  id: string;
  title: string;
  titleZh: string;
  difficulty: 'easy' | 'medium' | 'hard';
  level: number;
  category: string;
  categoryZh: string;
  tags: string[];
  description: string;
  descriptionZh: string;
  examples: { input: string; output: string }[];
  starterCode: string;
  solution: string;
  hints: string[];
  hintsZh: string[];
  testCases: { input: string; expectedOutput: string }[];
}

export const CPP_EXERCISES: CppExercise[] = [
  // ============================================================
  // LEVEL 1: BASICS (25 exercises)
  // ============================================================
  {
    id: 'cpp-ex-1-01',
    title: 'Hello World',
    titleZh: 'Hello World',
    difficulty: 'easy',
    level: 1,
    category: 'Output',
    categoryZh: '输出',
    tags: ['cout', 'basics'],
    description: 'Write a program that prints "Hello, World!" to the console.',
    descriptionZh: '编写一个程序，在控制台输出 "Hello, World!"。',
    examples: [{ input: '', output: 'Hello, World!' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print "Hello, World!"
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    hints: ['Use cout << to print text', 'Don\'t forget the semicolon'],
    hintsZh: ['使用 cout << 来打印文本', '不要忘记分号'],
    testCases: [
      { input: '', expectedOutput: 'Hello, World!' },
      { input: '', expectedOutput: 'Hello, World!' },
    ],
  },
  {
    id: 'cpp-ex-1-02',
    title: 'Print Your Name',
    titleZh: '打印你的名字',
    difficulty: 'easy',
    level: 1,
    category: 'Input/Output',
    categoryZh: '输入输出',
    tags: ['cin', 'cout', 'string'],
    description: 'Read a name from input and print "Hello, <name>!".',
    descriptionZh: '从输入读取一个名字，然后输出 "Hello, <name>!"。',
    examples: [{ input: 'Alice', output: 'Hello, Alice!' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Read a name and print greeting
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    cin >> name;
    cout << "Hello, " << name << "!" << endl;
    return 0;
}`,
    hints: ['Use cin >> to read input into a string variable', 'Concatenate with << operator'],
    hintsZh: ['使用 cin >> 将输入读入字符串变量', '用 << 运算符拼接输出'],
    testCases: [
      { input: 'Alice', expectedOutput: 'Hello, Alice!' },
      { input: 'Bob', expectedOutput: 'Hello, Bob!' },
    ],
  },
  {
    id: 'cpp-ex-1-03',
    title: 'Sum of Two Numbers',
    titleZh: '两数之和',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['cin', 'cout', 'int', 'arithmetic'],
    description: 'Read two integers and print their sum.',
    descriptionZh: '读入两个整数，输出它们的和。',
    examples: [{ input: '3 5', output: '8' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read two integers and print their sum
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}`,
    hints: ['Declare two int variables', 'Use + operator to add them'],
    hintsZh: ['声明两个 int 变量', '用 + 运算符相加'],
    testCases: [
      { input: '3 5', expectedOutput: '8' },
      { input: '-2 7', expectedOutput: '5' },
    ],
  },
  {
    id: 'cpp-ex-1-04',
    title: 'Rectangle Area',
    titleZh: '矩形面积',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic', 'calculation'],
    description: 'Read the width and height of a rectangle (doubles) and print the area.',
    descriptionZh: '读入矩形的宽和高（浮点数），输出面积。',
    examples: [{ input: '3.5 2.0', output: '7' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read width and height, print area
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    double w, h;
    cin >> w >> h;
    cout << w * h << endl;
    return 0;
}`,
    hints: ['Use double for decimal numbers', 'Area = width * height'],
    hintsZh: ['使用 double 类型存储小数', '面积 = 宽 × 高'],
    testCases: [
      { input: '3.5 2.0', expectedOutput: '7' },
      { input: '4 5', expectedOutput: '20' },
    ],
  },
  {
    id: 'cpp-ex-1-05',
    title: 'Circle Area',
    titleZh: '圆的面积',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'math', 'constants'],
    description: 'Read the radius of a circle and print its area. Use π = 3.14159.',
    descriptionZh: '读入圆的半径，输出面积。使用 π = 3.14159。',
    examples: [{ input: '5', output: '78.5397' }],
    starterCode: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    const double PI = 3.14159;
    // TODO: Read radius and print area
    
    return 0;
}`,
    solution: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    const double PI = 3.14159;
    double r;
    cin >> r;
    cout << PI * r * r << endl;
    return 0;
}`,
    hints: ['Area = π × r²', 'You can use r * r or pow(r, 2)'],
    hintsZh: ['面积 = π × r²', '可以用 r * r 或 pow(r, 2)'],
    testCases: [
      { input: '5', expectedOutput: '78.5397' },
      { input: '1', expectedOutput: '3.14159' },
    ],
  },
  {
    id: 'cpp-ex-1-06',
    title: 'Temperature Converter (C to F)',
    titleZh: '温度转换（摄氏转华氏）',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic', 'conversion'],
    description: 'Read a temperature in Celsius and convert it to Fahrenheit. Formula: F = C × 9/5 + 32.',
    descriptionZh: '读入摄氏温度，转换为华氏温度。公式：F = C × 9/5 + 32。',
    examples: [{ input: '100', output: '212' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read Celsius, print Fahrenheit
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    double c;
    cin >> c;
    cout << c * 9.0 / 5.0 + 32 << endl;
    return 0;
}`,
    hints: ['Use 9.0/5.0 to avoid integer division', 'F = C * 9/5 + 32'],
    hintsZh: ['使用 9.0/5.0 避免整数除法', 'F = C * 9/5 + 32'],
    testCases: [
      { input: '100', expectedOutput: '212' },
      { input: '0', expectedOutput: '32' },
    ],
  },
  {
    id: 'cpp-ex-1-07',
    title: 'Swap Two Variables',
    titleZh: '交换两个变量',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['int', 'variables', 'swap'],
    description: 'Read two integers and print them in swapped order (second first, then first).',
    descriptionZh: '读入两个整数，以交换后的顺序输出（先输出第二个，再输出第一个）。',
    examples: [{ input: '3 7', output: '7 3' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read two integers and print them swapped
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    int temp = a;
    a = b;
    b = temp;
    cout << a << " " << b << endl;
    return 0;
}`,
    hints: ['Use a temporary variable to hold one value during the swap', 'Store a in temp, then a = b, then b = temp'],
    hintsZh: ['使用临时变量在交换时保存一个值', '先把 a 存到 temp，再 a = b，最后 b = temp'],
    testCases: [
      { input: '3 7', expectedOutput: '7 3' },
      { input: '10 20', expectedOutput: '20 10' },
    ],
  },
  {
    id: 'cpp-ex-1-08',
    title: 'Last Digit',
    titleZh: '取个位数',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'modulo'],
    description: 'Read an integer and print its last digit.',
    descriptionZh: '读入一个整数，输出它的个位数。',
    examples: [{ input: '1234', output: '4' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read integer, print last digit
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << n % 10 << endl;
    return 0;
}`,
    hints: ['The modulo operator % gives the remainder', 'n % 10 gives the last digit'],
    hintsZh: ['取模运算符 % 给出余数', 'n % 10 得到个位数'],
    testCases: [
      { input: '1234', expectedOutput: '4' },
      { input: '90', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-1-09',
    title: 'Integer Division and Remainder',
    titleZh: '整除与取余',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'division', 'modulo'],
    description: 'Read two integers a and b. Print the quotient and remainder of a / b on separate lines.',
    descriptionZh: '读入两个整数 a 和 b，分两行输出 a / b 的商和余数。',
    examples: [{ input: '17 5', output: '3\n2' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read a and b, print quotient and remainder
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a / b << endl;
    cout << a % b << endl;
    return 0;
}`,
    hints: ['Use / for integer division and % for remainder', 'Print each on a separate line with endl'],
    hintsZh: ['用 / 做整除，用 % 取余', '每个结果单独一行输出'],
    testCases: [
      { input: '17 5', expectedOutput: '3\n2' },
      { input: '10 3', expectedOutput: '3\n1' },
    ],
  },
  {
    id: 'cpp-ex-1-10',
    title: 'Average of Three Numbers',
    titleZh: '三个数的平均值',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic', 'average'],
    description: 'Read three integers and print their average as a decimal number.',
    descriptionZh: '读入三个整数，输出它们的平均值（保留小数）。',
    examples: [{ input: '3 4 5', output: '4' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read three integers, print their average
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << (a + b + c) / 3.0 << endl;
    return 0;
}`,
    hints: ['Divide by 3.0 (not 3) to get a decimal result', 'Sum first, then divide'],
    hintsZh: ['除以 3.0（不是 3）以得到小数结果', '先求和，再除'],
    testCases: [
      { input: '3 4 5', expectedOutput: '4' },
      { input: '1 2 3', expectedOutput: '2' },
    ],
  },
  {
    id: 'cpp-ex-1-11',
    title: 'ASCII Value',
    titleZh: 'ASCII 值',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['char', 'type-casting'],
    description: 'Read a character and print its ASCII value.',
    descriptionZh: '读入一个字符，输出它的 ASCII 值。',
    examples: [{ input: 'A', output: '65' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read a char, print its ASCII value
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    char c;
    cin >> c;
    cout << (int)c << endl;
    return 0;
}`,
    hints: ['Cast a char to int to get its ASCII value', 'Use (int)c or static_cast<int>(c)'],
    hintsZh: ['将 char 转换为 int 得到 ASCII 值', '使用 (int)c 或 static_cast<int>(c)'],
    testCases: [
      { input: 'A', expectedOutput: '65' },
      { input: 'a', expectedOutput: '97' },
    ],
  },
  {
    id: 'cpp-ex-1-12',
    title: 'Character from ASCII',
    titleZh: '从 ASCII 值得到字符',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['char', 'type-casting'],
    description: 'Read an integer (ASCII code) and print the corresponding character.',
    descriptionZh: '读入一个整数（ASCII码），输出对应的字符。',
    examples: [{ input: '65', output: 'A' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read an integer, print the corresponding character
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << (char)n << endl;
    return 0;
}`,
    hints: ['Cast int to char to get the character', 'Use (char)n'],
    hintsZh: ['将 int 转换为 char 得到字符', '使用 (char)n'],
    testCases: [
      { input: '65', expectedOutput: 'A' },
      { input: '48', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-1-13',
    title: 'Boolean Check: Even Number',
    titleZh: '布尔判断：偶数',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['bool', 'modulo'],
    description: 'Read an integer. Print 1 if it is even, 0 if it is odd.',
    descriptionZh: '读入一个整数。如果是偶数输出 1，奇数输出 0。',
    examples: [{ input: '4', output: '1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read integer, print 1 if even, 0 if odd
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << (n % 2 == 0) << endl;
    return 0;
}`,
    hints: ['An even number has remainder 0 when divided by 2', 'Boolean true prints as 1, false as 0'],
    hintsZh: ['偶数除以2余数为0', '布尔值 true 输出为 1，false 输出为 0'],
    testCases: [
      { input: '4', expectedOutput: '1' },
      { input: '7', expectedOutput: '0' },
    ],
  },
  {
    id: 'cpp-ex-1-14',
    title: 'Seconds to Hours, Minutes, Seconds',
    titleZh: '秒数转换为时分秒',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'division', 'modulo'],
    description: 'Read a number of seconds. Print hours, minutes, and remaining seconds separated by spaces.',
    descriptionZh: '读入总秒数，输出小时、分钟和剩余秒数，用空格分隔。',
    examples: [{ input: '3661', output: '1 1 1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Convert total seconds to h m s
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int s;
    cin >> s;
    int h = s / 3600;
    int m = (s % 3600) / 60;
    int sec = s % 60;
    cout << h << " " << m << " " << sec << endl;
    return 0;
}`,
    hints: ['1 hour = 3600 seconds, 1 minute = 60 seconds', 'Use / and % to extract each part'],
    hintsZh: ['1小时 = 3600秒，1分钟 = 60秒', '用 / 和 % 提取每个部分'],
    testCases: [
      { input: '3661', expectedOutput: '1 1 1' },
      { input: '7200', expectedOutput: '2 0 0' },
    ],
  },
  {
    id: 'cpp-ex-1-15',
    title: 'Digit Sum (3-digit number)',
    titleZh: '三位数各位数之和',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'modulo', 'division'],
    description: 'Read a 3-digit integer and print the sum of its digits.',
    descriptionZh: '读入一个三位数，输出各位数字之和。',
    examples: [{ input: '123', output: '6' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read a 3-digit number, print sum of digits
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int d1 = n / 100;
    int d2 = (n / 10) % 10;
    int d3 = n % 10;
    cout << d1 + d2 + d3 << endl;
    return 0;
}`,
    hints: ['Use / 100 to get hundreds digit, % 10 to get ones digit', 'Middle digit: (n / 10) % 10'],
    hintsZh: ['用 / 100 得到百位，% 10 得到个位', '十位：(n / 10) % 10'],
    testCases: [
      { input: '123', expectedOutput: '6' },
      { input: '999', expectedOutput: '27' },
    ],
  },
  {
    id: 'cpp-ex-1-16',
    title: 'Reverse a 3-Digit Number',
    titleZh: '反转三位数',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'modulo', 'division'],
    description: 'Read a 3-digit integer and print it reversed.',
    descriptionZh: '读入一个三位数，输出反转后的数字。',
    examples: [{ input: '123', output: '321' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Reverse a 3-digit number
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int d1 = n / 100;
    int d2 = (n / 10) % 10;
    int d3 = n % 10;
    cout << d3 * 100 + d2 * 10 + d1 << endl;
    return 0;
}`,
    hints: ['Extract each digit, then reconstruct in reverse order', 'ones * 100 + tens * 10 + hundreds'],
    hintsZh: ['提取每一位数字，然后按反序重组', '个位*100 + 十位*10 + 百位'],
    testCases: [
      { input: '123', expectedOutput: '321' },
      { input: '450', expectedOutput: '54' },
    ],
  },
  {
    id: 'cpp-ex-1-17',
    title: 'Simple Interest Calculator',
    titleZh: '简单利息计算器',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic', 'finance'],
    description: 'Read principal, rate (%), and time (years). Print simple interest: SI = P × R × T / 100.',
    descriptionZh: '读入本金、利率（%）和时间（年），输出简单利息：SI = P × R × T / 100。',
    examples: [{ input: '1000 5 2', output: '100' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Calculate simple interest
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    double p, r, t;
    cin >> p >> r >> t;
    cout << p * r * t / 100 << endl;
    return 0;
}`,
    hints: ['SI = Principal × Rate × Time / 100', 'Use double for precision'],
    hintsZh: ['SI = 本金 × 利率 × 时间 / 100', '使用 double 保持精度'],
    testCases: [
      { input: '1000 5 2', expectedOutput: '100' },
      { input: '5000 3.5 1', expectedOutput: '175' },
    ],
  },
  {
    id: 'cpp-ex-1-18',
    title: 'Perimeter of a Triangle',
    titleZh: '三角形周长',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic'],
    description: 'Read three side lengths of a triangle and print its perimeter.',
    descriptionZh: '读入三角形的三条边长，输出周长。',
    examples: [{ input: '3 4 5', output: '12' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read 3 sides, print perimeter
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    double a, b, c;
    cin >> a >> b >> c;
    cout << a + b + c << endl;
    return 0;
}`,
    hints: ['Perimeter is the sum of all sides', 'Just add a + b + c'],
    hintsZh: ['周长是三条边之和', '直接计算 a + b + c'],
    testCases: [
      { input: '3 4 5', expectedOutput: '12' },
      { input: '1.5 2.5 3', expectedOutput: '7' },
    ],
  },
  {
    id: 'cpp-ex-1-19',
    title: 'Uppercase to Lowercase',
    titleZh: '大写转小写',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['char', 'type-casting', 'ascii'],
    description: 'Read an uppercase letter and print its lowercase version.',
    descriptionZh: '读入一个大写字母，输出对应的小写字母。',
    examples: [{ input: 'A', output: 'a' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Convert uppercase to lowercase
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    char c;
    cin >> c;
    cout << (char)(c + 32) << endl;
    return 0;
}`,
    hints: ['Lowercase letters are 32 positions after uppercase in ASCII', 'Add 32 to the char value'],
    hintsZh: ['小写字母在ASCII表中比大写字母大32', '给字符值加32'],
    testCases: [
      { input: 'A', expectedOutput: 'a' },
      { input: 'Z', expectedOutput: 'z' },
    ],
  },
  {
    id: 'cpp-ex-1-20',
    title: 'Power of a Number',
    titleZh: '求幂',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'cmath', 'pow'],
    description: 'Read base and exponent (integers). Print base^exponent using pow().',
    descriptionZh: '读入底数和指数（整数），用 pow() 输出幂。',
    examples: [{ input: '2 10', output: '1024' }],
    starterCode: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // TODO: Read base and exponent, print result
    
    return 0;
}`,
    solution: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int base, exp;
    cin >> base >> exp;
    cout << (long long)pow(base, exp) << endl;
    return 0;
}`,
    hints: ['Use pow(base, exponent) from <cmath>', 'Cast to int/long long to avoid decimal output'],
    hintsZh: ['使用 <cmath> 中的 pow(底数, 指数)', '转换为整型避免小数输出'],
    testCases: [
      { input: '2 10', expectedOutput: '1024' },
      { input: '3 3', expectedOutput: '27' },
    ],
  },
  {
    id: 'cpp-ex-1-21',
    title: 'Square Root',
    titleZh: '求平方根',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'cmath', 'sqrt'],
    description: 'Read a non-negative number and print its square root.',
    descriptionZh: '读入一个非负数，输出它的平方根。',
    examples: [{ input: '16', output: '4' }],
    starterCode: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // TODO: Read a number, print its square root
    
    return 0;
}`,
    solution: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double n;
    cin >> n;
    cout << sqrt(n) << endl;
    return 0;
}`,
    hints: ['Use sqrt() from <cmath>', 'sqrt(16) = 4'],
    hintsZh: ['使用 <cmath> 中的 sqrt()', 'sqrt(16) = 4'],
    testCases: [
      { input: '16', expectedOutput: '4' },
      { input: '25', expectedOutput: '5' },
    ],
  },
  {
    id: 'cpp-ex-1-22',
    title: 'Absolute Value',
    titleZh: '绝对值',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['int', 'cmath', 'abs'],
    description: 'Read an integer and print its absolute value.',
    descriptionZh: '读入一个整数，输出它的绝对值。',
    examples: [{ input: '-5', output: '5' }],
    starterCode: `#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
    // TODO: Read integer, print absolute value
    
    return 0;
}`,
    solution: `#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << abs(n) << endl;
    return 0;
}`,
    hints: ['Use abs() function', 'abs(-5) = 5'],
    hintsZh: ['使用 abs() 函数', 'abs(-5) = 5'],
    testCases: [
      { input: '-5', expectedOutput: '5' },
      { input: '3', expectedOutput: '3' },
    ],
  },
  {
    id: 'cpp-ex-1-23',
    title: 'Multi-line Output',
    titleZh: '多行输出',
    difficulty: 'easy',
    level: 1,
    category: 'Output',
    categoryZh: '输出',
    tags: ['cout', 'endl', 'formatting'],
    description: 'Read a name and age. Print two lines:\nLine 1: "Name: <name>"\nLine 2: "Age: <age>"',
    descriptionZh: '读入姓名和年龄。输出两行：\n第1行："Name: <name>"\n第2行："Age: <age>"',
    examples: [{ input: 'Alice 20', output: 'Name: Alice\nAge: 20' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Read name and age, print formatted output
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    cin >> name >> age;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    return 0;
}`,
    hints: ['Use endl or \\n for new lines', 'Read string and int separately with cin >>'],
    hintsZh: ['用 endl 或 \\n 换行', '用 cin >> 分别读入字符串和整数'],
    testCases: [
      { input: 'Alice 20', expectedOutput: 'Name: Alice\nAge: 20' },
      { input: 'Bob 15', expectedOutput: 'Name: Bob\nAge: 15' },
    ],
  },
  {
    id: 'cpp-ex-1-24',
    title: 'Hypotenuse Calculator',
    titleZh: '斜边计算器',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'cmath', 'sqrt', 'pow'],
    description: 'Read two sides of a right triangle. Print the hypotenuse (c = √(a² + b²)).',
    descriptionZh: '读入直角三角形的两条直角边，输出斜边 (c = √(a² + b²))。',
    examples: [{ input: '3 4', output: '5' }],
    starterCode: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // TODO: Calculate hypotenuse
    
    return 0;
}`,
    solution: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    double a, b;
    cin >> a >> b;
    cout << sqrt(a * a + b * b) << endl;
    return 0;
}`,
    hints: ['Pythagorean theorem: c = sqrt(a² + b²)', 'Use sqrt() and a*a + b*b'],
    hintsZh: ['勾股定理：c = sqrt(a² + b²)', '用 sqrt() 和 a*a + b*b'],
    testCases: [
      { input: '3 4', expectedOutput: '5' },
      { input: '5 12', expectedOutput: '13' },
    ],
  },
  {
    id: 'cpp-ex-1-25',
    title: 'sizeof Types',
    titleZh: '各类型的大小',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['sizeof', 'types'],
    description: 'Print the size in bytes of int, double, char, and bool, each on a new line.',
    descriptionZh: '分四行输出 int、double、char 和 bool 的字节大小。',
    examples: [{ input: '', output: '4\n8\n1\n1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print sizeof each type
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    cout << sizeof(int) << endl;
    cout << sizeof(double) << endl;
    cout << sizeof(char) << endl;
    cout << sizeof(bool) << endl;
    return 0;
}`,
    hints: ['Use sizeof(type) to get the size in bytes', 'sizeof returns a number you can print directly'],
    hintsZh: ['使用 sizeof(类型) 获取字节大小', 'sizeof 返回的数字可以直接输出'],
    testCases: [
      { input: '', expectedOutput: '4\n8\n1\n1' },
      { input: '', expectedOutput: '4\n8\n1\n1' },
    ],
  },

  // ============================================================
  // LEVEL 2: CONTROL FLOW (20 exercises)
  // ============================================================
  {
    id: 'cpp-ex-2-01',
    title: 'Positive, Negative, or Zero',
    titleZh: '正数、负数还是零',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['if-else'],
    description: 'Read an integer. Print "positive", "negative", or "zero".',
    descriptionZh: '读入一个整数。输出 "positive"、"negative" 或 "zero"。',
    examples: [{ input: '5', output: 'positive' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check if number is positive, negative, or zero
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n > 0) cout << "positive" << endl;
    else if (n < 0) cout << "negative" << endl;
    else cout << "zero" << endl;
    return 0;
}`,
    hints: ['Use if, else if, else chain', 'Check > 0, < 0, and equal to 0'],
    hintsZh: ['使用 if、else if、else 链', '检查 > 0、< 0 和等于 0'],
    testCases: [
      { input: '5', expectedOutput: 'positive' },
      { input: '-3', expectedOutput: 'negative' },
      { input: '0', expectedOutput: 'zero' },
    ],
  },
  {
    id: 'cpp-ex-2-02',
    title: 'Maximum of Two',
    titleZh: '两数中的最大值',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['if-else', 'ternary'],
    description: 'Read two integers and print the larger one.',
    descriptionZh: '读入两个整数，输出较大的那个。',
    examples: [{ input: '3 7', output: '7' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print the maximum of two numbers
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << (a > b ? a : b) << endl;
    return 0;
}`,
    hints: ['Use the ternary operator: condition ? valueIfTrue : valueIfFalse', 'Or use a simple if-else'],
    hintsZh: ['使用三元运算符：条件 ? 真值 : 假值', '或者用简单的 if-else'],
    testCases: [
      { input: '3 7', expectedOutput: '7' },
      { input: '10 2', expectedOutput: '10' },
    ],
  },
  {
    id: 'cpp-ex-2-03',
    title: 'Grade Checker',
    titleZh: '成绩等级',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['if-else'],
    description: 'Read a score (0-100). Print grade: A (>=90), B (>=80), C (>=70), D (>=60), F (<60).',
    descriptionZh: '读入分数（0-100），输出等级：A (>=90)、B (>=80)、C (>=70)、D (>=60)、F (<60)。',
    examples: [{ input: '85', output: 'B' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read score, print grade
    
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
    hints: ['Use chained if-else if-else', 'Check from highest to lowest'],
    hintsZh: ['使用 if-else if-else 链', '从最高分开始判断'],
    testCases: [
      { input: '85', expectedOutput: 'B' },
      { input: '55', expectedOutput: 'F' },
      { input: '92', expectedOutput: 'A' },
    ],
  },
  {
    id: 'cpp-ex-2-04',
    title: 'Leap Year',
    titleZh: '闰年判断',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['if-else', 'logic'],
    description: 'Read a year. Print "yes" if it is a leap year, "no" otherwise. Leap year: divisible by 4 but not 100, or divisible by 400.',
    descriptionZh: '读入一个年份。如果是闰年输出 "yes"，否则输出 "no"。闰年：能被4整除但不能被100整除，或者能被400整除。',
    examples: [{ input: '2000', output: 'yes' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check if year is a leap year
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int y;
    cin >> y;
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
        cout << "yes" << endl;
    else
        cout << "no" << endl;
    return 0;
}`,
    hints: ['Leap year: (divisible by 4 AND not by 100) OR divisible by 400', 'Use && for AND, || for OR'],
    hintsZh: ['闰年：(能被4整除且不能被100整除) 或 能被400整除', '用 && 表示与，|| 表示或'],
    testCases: [
      { input: '2000', expectedOutput: 'yes' },
      { input: '1900', expectedOutput: 'no' },
      { input: '2024', expectedOutput: 'yes' },
    ],
  },
  {
    id: 'cpp-ex-2-05',
    title: 'Day of the Week (switch)',
    titleZh: '星期几（switch）',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['switch'],
    description: 'Read a number 1-7. Print the day name (1=Monday, ..., 7=Sunday).',
    descriptionZh: '读入数字 1-7，输出星期几（1=Monday, ..., 7=Sunday）。',
    examples: [{ input: '1', output: 'Monday' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Use switch to print day name
    
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
    hints: ['Use switch(d) with case 1: through case 7:', 'Don\'t forget break after each case!'],
    hintsZh: ['使用 switch(d) 加 case 1: 到 case 7:', '每个 case 后别忘了 break！'],
    testCases: [
      { input: '1', expectedOutput: 'Monday' },
      { input: '7', expectedOutput: 'Sunday' },
    ],
  },
  {
    id: 'cpp-ex-2-06',
    title: 'Simple Calculator (switch)',
    titleZh: '简易计算器（switch）',
    difficulty: 'easy',
    level: 2,
    category: 'Conditionals',
    categoryZh: '条件判断',
    tags: ['switch', 'arithmetic'],
    description: 'Read two numbers and an operator (+, -, *, /). Print the result.',
    descriptionZh: '读入两个数和一个运算符（+, -, *, /），输出运算结果。',
    examples: [{ input: '10 + 3', output: '13' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Implement calculator with switch
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    double a, b;
    char op;
    cin >> a >> op >> b;
    switch (op) {
        case '+': cout << a + b << endl; break;
        case '-': cout << a - b << endl; break;
        case '*': cout << a * b << endl; break;
        case '/': cout << a / b << endl; break;
    }
    return 0;
}`,
    hints: ['Read the operator as a char', 'switch works with char values too'],
    hintsZh: ['把运算符读入一个 char', 'switch 也可以用 char 值'],
    testCases: [
      { input: '10 + 3', expectedOutput: '13' },
      { input: '10 / 4', expectedOutput: '2.5' },
    ],
  },
  {
    id: 'cpp-ex-2-07',
    title: 'Count from 1 to N',
    titleZh: '从1数到N',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for-loop'],
    description: 'Read N and print numbers from 1 to N, separated by spaces.',
    descriptionZh: '读入 N，输出从 1 到 N 的数字，用空格分隔。',
    examples: [{ input: '5', output: '1 2 3 4 5' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print 1 to N
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        if (i > 1) cout << " ";
        cout << i;
    }
    cout << endl;
    return 0;
}`,
    hints: ['Use a for loop from 1 to n', 'Print space between numbers, not after the last one'],
    hintsZh: ['用 for 循环从 1 到 n', '数字之间打印空格，最后一个后面不要'],
    testCases: [
      { input: '5', expectedOutput: '1 2 3 4 5' },
      { input: '3', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'cpp-ex-2-08',
    title: 'Sum from 1 to N',
    titleZh: '1到N的和',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for-loop', 'accumulator'],
    description: 'Read N and print the sum of all integers from 1 to N.',
    descriptionZh: '读入 N，输出 1 到 N 所有整数的和。',
    examples: [{ input: '10', output: '55' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Sum 1 to N
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    cout << sum << endl;
    return 0;
}`,
    hints: ['Use an accumulator variable initialized to 0', 'Add each number in the loop: sum += i'],
    hintsZh: ['使用一个初始化为0的累加变量', '在循环中累加：sum += i'],
    testCases: [
      { input: '10', expectedOutput: '55' },
      { input: '100', expectedOutput: '5050' },
    ],
  },
  {
    id: 'cpp-ex-2-09',
    title: 'Factorial',
    titleZh: '阶乘',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for-loop', 'accumulator'],
    description: 'Read N (0 ≤ N ≤ 12) and print N!.',
    descriptionZh: '读入 N（0 ≤ N ≤ 12），输出 N!。',
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
    hints: ['Start with result = 1, multiply by each i from 1 to n', '0! = 1 by definition'],
    hintsZh: ['从 result = 1 开始，依次乘以 1 到 n', '0! = 1（定义）'],
    testCases: [
      { input: '5', expectedOutput: '120' },
      { input: '0', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-10',
    title: 'Multiplication Table',
    titleZh: '乘法表',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for-loop', 'nested-loops'],
    description: 'Read N. Print the multiplication table for N (from N×1 to N×10), each product on a new line.',
    descriptionZh: '读入 N，输出 N 的乘法表（N×1 到 N×10），每行一个结果。',
    examples: [{ input: '3', output: '3\n6\n9\n12\n15\n18\n21\n24\n27\n30' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print multiplication table for N
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= 10; i++) {
        cout << n * i << endl;
    }
    return 0;
}`,
    hints: ['Loop i from 1 to 10, print n * i each time', 'Use endl for each new line'],
    hintsZh: ['循环 i 从 1 到 10，每次输出 n * i', '用 endl 换行'],
    testCases: [
      { input: '3', expectedOutput: '3\n6\n9\n12\n15\n18\n21\n24\n27\n30' },
      { input: '5', expectedOutput: '5\n10\n15\n20\n25\n30\n35\n40\n45\n50' },
    ],
  },
  {
    id: 'cpp-ex-2-11',
    title: 'FizzBuzz',
    titleZh: 'FizzBuzz',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for-loop', 'if-else', 'modulo'],
    description: 'Read N. For each number from 1 to N: print "FizzBuzz" if divisible by both 3 and 5, "Fizz" if by 3, "Buzz" if by 5, else the number. One per line.',
    descriptionZh: '读入 N。从 1 到 N：能同时被3和5整除输出 "FizzBuzz"，被3整除输出 "Fizz"，被5整除输出 "Buzz"，否则输出数字。每行一个。',
    examples: [{ input: '5', output: '1\n2\nFizz\n4\nBuzz' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Implement FizzBuzz
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        if (i % 15 == 0) cout << "FizzBuzz" << endl;
        else if (i % 3 == 0) cout << "Fizz" << endl;
        else if (i % 5 == 0) cout << "Buzz" << endl;
        else cout << i << endl;
    }
    return 0;
}`,
    hints: ['Check divisible by 15 first (both 3 and 5)', 'Order matters: check 15 before 3 and 5 separately'],
    hintsZh: ['先检查能否被15整除（同时被3和5整除）', '顺序很重要：先检查15，再分别检查3和5'],
    testCases: [
      { input: '5', expectedOutput: '1\n2\nFizz\n4\nBuzz' },
      { input: '15', expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz' },
    ],
  },
  {
    id: 'cpp-ex-2-12',
    title: 'Prime Number Check',
    titleZh: '素数判断',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for-loop', 'if-else', 'math'],
    description: 'Read an integer N (≥ 1). Print "yes" if it is prime, "no" otherwise.',
    descriptionZh: '读入整数 N（≥ 1），如果是素数输出 "yes"，否则输出 "no"。',
    examples: [{ input: '7', output: 'yes' }],
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
    if (n < 2) { cout << "no" << endl; return 0; }
    bool prime = true;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) { prime = false; break; }
    }
    cout << (prime ? "yes" : "no") << endl;
    return 0;
}`,
    hints: ['Only need to check divisors up to √n', 'Numbers less than 2 are not prime'],
    hintsZh: ['只需检查到 √n 的因子', '小于2的数不是素数'],
    testCases: [
      { input: '7', expectedOutput: 'yes' },
      { input: '4', expectedOutput: 'no' },
      { input: '1', expectedOutput: 'no' },
    ],
  },
  {
    id: 'cpp-ex-2-13',
    title: 'Count Digits',
    titleZh: '数位计数',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while-loop'],
    description: 'Read a positive integer. Print the number of digits it has.',
    descriptionZh: '读入一个正整数，输出它有几位数。',
    examples: [{ input: '12345', output: '5' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Count digits using a while loop
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int count = 0;
    while (n > 0) {
        n /= 10;
        count++;
    }
    cout << count << endl;
    return 0;
}`,
    hints: ['Keep dividing by 10 until you reach 0', 'Count how many times you divide'],
    hintsZh: ['不断除以10直到为0', '记录除了几次'],
    testCases: [
      { input: '12345', expectedOutput: '5' },
      { input: '7', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-14',
    title: 'Reverse a Number',
    titleZh: '反转数字',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while-loop', 'modulo'],
    description: 'Read an integer and print it reversed (e.g., 12345 → 54321).',
    descriptionZh: '读入一个整数，输出反转后的数字（如 12345 → 54321）。',
    examples: [{ input: '12345', output: '54321' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Reverse the number
    
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
    hints: ['Extract last digit with % 10, build reversed number with rev * 10 + digit', 'Remove last digit with n /= 10'],
    hintsZh: ['用 % 10 取最后一位，用 rev * 10 + digit 构建反转数', '用 n /= 10 去掉最后一位'],
    testCases: [
      { input: '12345', expectedOutput: '54321' },
      { input: '100', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-15',
    title: 'Power of Two Check',
    titleZh: '2的幂判断',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while-loop', 'bitwise'],
    description: 'Read a positive integer. Print "yes" if it is a power of 2, "no" otherwise.',
    descriptionZh: '读入一个正整数，如果是2的幂输出 "yes"，否则输出 "no"。',
    examples: [{ input: '8', output: 'yes' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check if number is a power of 2
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n > 0 && (n & (n - 1)) == 0)
        cout << "yes" << endl;
    else
        cout << "no" << endl;
    return 0;
}`,
    hints: ['A power of 2 in binary has exactly one 1-bit', 'Trick: n & (n-1) == 0 for powers of 2'],
    hintsZh: ['2的幂的二进制只有一个1', '技巧：n & (n-1) == 0 即为2的幂'],
    testCases: [
      { input: '8', expectedOutput: 'yes' },
      { input: '6', expectedOutput: 'no' },
    ],
  },
  {
    id: 'cpp-ex-2-16',
    title: 'Right Triangle Pattern',
    titleZh: '直角三角形图案',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['nested-loops', 'patterns'],
    description: 'Read N. Print a right triangle of stars with N rows. Row i has i stars.',
    descriptionZh: '读入 N，打印一个 N 行的直角三角形星号图案。第 i 行有 i 个星号。',
    examples: [{ input: '3', output: '*\n**\n***' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print star triangle
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Use nested loops: outer for rows, inner for stars', 'Inner loop runs i times for row i'],
    hintsZh: ['使用嵌套循环：外层控制行，内层打印星号', '第 i 行内层循环 i 次'],
    testCases: [
      { input: '3', expectedOutput: '*\n**\n***' },
      { input: '4', expectedOutput: '*\n**\n***\n****' },
    ],
  },
  {
    id: 'cpp-ex-2-17',
    title: 'Number Pyramid',
    titleZh: '数字金字塔',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['nested-loops', 'patterns'],
    description: 'Read N. Print a number pyramid: row i prints numbers from 1 to i.',
    descriptionZh: '读入 N，打印数字金字塔：第 i 行输出 1 到 i。',
    examples: [{ input: '4', output: '1\n12\n123\n1234' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print number pyramid
    
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
    hints: ['Inner loop prints 1 to i for each row', 'No spaces between numbers'],
    hintsZh: ['内层循环在每行输出 1 到 i', '数字之间没有空格'],
    testCases: [
      { input: '4', expectedOutput: '1\n12\n123\n1234' },
      { input: '3', expectedOutput: '1\n12\n123' },
    ],
  },
  {
    id: 'cpp-ex-2-18',
    title: 'GCD of Two Numbers',
    titleZh: '最大公约数',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while-loop', 'math', 'gcd'],
    description: 'Read two positive integers and print their GCD using the Euclidean algorithm.',
    descriptionZh: '读入两个正整数，用辗转相除法输出它们的最大公约数。',
    examples: [{ input: '12 8', output: '4' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Calculate GCD
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    cout << a << endl;
    return 0;
}`,
    hints: ['Euclidean algorithm: repeatedly replace (a,b) with (b, a%b)', 'When b becomes 0, a is the GCD'],
    hintsZh: ['辗转相除法：反复用 (b, a%b) 替换 (a,b)', '当 b 变为 0 时，a 就是最大公约数'],
    testCases: [
      { input: '12 8', expectedOutput: '4' },
      { input: '17 5', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-19',
    title: 'Fibonacci Sequence',
    titleZh: '斐波那契数列',
    difficulty: 'medium',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['for-loop', 'fibonacci'],
    description: 'Read N. Print the first N Fibonacci numbers separated by spaces. (F1=1, F2=1, F3=2, ...)',
    descriptionZh: '读入 N，输出前 N 个斐波那契数，用空格分隔。（F1=1, F2=1, F3=2, ...）',
    examples: [{ input: '6', output: '1 1 2 3 5 8' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print first N Fibonacci numbers
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int a = 1, b = 1;
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
    hints: ['Keep two variables for current and next Fibonacci numbers', 'Each new number = sum of previous two'],
    hintsZh: ['用两个变量记录当前和下一个斐波那契数', '每个新数 = 前两个数之和'],
    testCases: [
      { input: '6', expectedOutput: '1 1 2 3 5 8' },
      { input: '1', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-2-20',
    title: 'Sum of Digits (while loop)',
    titleZh: '各位数字之和（while循环）',
    difficulty: 'easy',
    level: 2,
    category: 'Loops',
    categoryZh: '循环',
    tags: ['while-loop', 'modulo'],
    description: 'Read a positive integer. Print the sum of its digits.',
    descriptionZh: '读入一个正整数，输出各位数字之和。',
    examples: [{ input: '1234', output: '10' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Sum digits of a number
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    cout << sum << endl;
    return 0;
}`,
    hints: ['Extract last digit with % 10, remove it with /= 10', 'Accumulate sum of all digits'],
    hintsZh: ['用 % 10 取最后一位，用 /= 10 去掉它', '累加所有位的数字'],
    testCases: [
      { input: '1234', expectedOutput: '10' },
      { input: '999', expectedOutput: '27' },
    ],
  },

  // ============================================================
  // LEVEL 3: FUNCTIONS & ARRAYS (15 exercises)
  // ============================================================
  {
    id: 'cpp-ex-3-01',
    title: 'Factorial Function',
    titleZh: '阶乘函数',
    difficulty: 'easy',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['functions', 'recursion'],
    description: 'Write a function int factorial(int n) that returns n!. Read N and print factorial(N).',
    descriptionZh: '编写函数 int factorial(int n) 返回 n!。读入 N，输出 factorial(N)。',
    examples: [{ input: '5', output: '120' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write factorial function
int factorial(int n) {

}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}`,
    hints: ['Base case: factorial(0) = factorial(1) = 1', 'Recursive case: n * factorial(n-1)'],
    hintsZh: ['基本情况：factorial(0) = factorial(1) = 1', '递归情况：n * factorial(n-1)'],
    testCases: [
      { input: '5', expectedOutput: '120' },
      { input: '0', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-3-02',
    title: 'Fibonacci Function',
    titleZh: '斐波那契函数',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['functions', 'loops'],
    description: 'Write a function int fib(int n) that returns the n-th Fibonacci number (1-indexed, fib(1)=1, fib(2)=1). Read N, print fib(N).',
    descriptionZh: '编写函数 int fib(int n) 返回第 n 个斐波那契数（1-indexed，fib(1)=1, fib(2)=1）。读入 N，输出 fib(N)。',
    examples: [{ input: '6', output: '8' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write fib function
int fib(int n) {

}

int main() {
    int n;
    cin >> n;
    cout << fib(n) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int fib(int n) {
    if (n <= 2) return 1;
    int a = 1, b = 1;
    for (int i = 3; i <= n; i++) {
        int c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    int n;
    cin >> n;
    cout << fib(n) << endl;
    return 0;
}`,
    hints: ['Use iterative approach for efficiency', 'Keep two variables and update each step'],
    hintsZh: ['用迭代方式效率更高', '维护两个变量逐步更新'],
    testCases: [
      { input: '6', expectedOutput: '8' },
      { input: '1', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-3-03',
    title: 'Is Palindrome (string)',
    titleZh: '回文判断（字符串）',
    difficulty: 'medium',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['functions', 'string'],
    description: 'Write a function bool isPalindrome(string s). Read a string, print "yes" if palindrome, "no" otherwise.',
    descriptionZh: '编写函数 bool isPalindrome(string s)。读入字符串，回文输出 "yes"，否则输出 "no"。',
    examples: [{ input: 'racecar', output: 'yes' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// TODO: Write isPalindrome function
bool isPalindrome(string s) {

}

int main() {
    string s;
    cin >> s;
    cout << (isPalindrome(s) ? "yes" : "no") << endl;
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

int main() {
    string s;
    cin >> s;
    cout << (isPalindrome(s) ? "yes" : "no") << endl;
    return 0;
}`,
    hints: ['Compare characters from both ends moving inward', 'Use two pointers: left and right'],
    hintsZh: ['从两端向中间比较字符', '使用双指针：left 和 right'],
    testCases: [
      { input: 'racecar', expectedOutput: 'yes' },
      { input: 'hello', expectedOutput: 'no' },
    ],
  },
  {
    id: 'cpp-ex-3-04',
    title: 'Power Function',
    titleZh: '幂函数',
    difficulty: 'easy',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['functions', 'recursion'],
    description: 'Write a function long long power(int base, int exp) that computes base^exp. Read base and exp, print the result.',
    descriptionZh: '编写函数 long long power(int base, int exp) 计算 base^exp。读入底数和指数，输出结果。',
    examples: [{ input: '2 10', output: '1024' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write power function
long long power(int base, int exp) {

}

int main() {
    int b, e;
    cin >> b >> e;
    cout << power(b, e) << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

long long power(int base, int exp) {
    long long result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

int main() {
    int b, e;
    cin >> b >> e;
    cout << power(b, e) << endl;
    return 0;
}`,
    hints: ['Multiply base by itself exp times', 'Start with result = 1'],
    hintsZh: ['将 base 自乘 exp 次', '从 result = 1 开始'],
    testCases: [
      { input: '2 10', expectedOutput: '1024' },
      { input: '3 0', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-3-05',
    title: 'Find Maximum in Array',
    titleZh: '数组最大值',
    difficulty: 'easy',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'loops'],
    description: 'Read N, then N integers. Print the maximum value.',
    descriptionZh: '读入 N，然后 N 个整数，输出最大值。',
    examples: [{ input: '5\n3 1 4 1 5', output: '5' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // TODO: Read array, find and print maximum
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    int mx = v[0];
    for (int i = 1; i < n; i++) {
        if (v[i] > mx) mx = v[i];
    }
    cout << mx << endl;
    return 0;
}`,
    hints: ['Initialize max with the first element', 'Compare each element and update max if larger'],
    hintsZh: ['用第一个元素初始化最大值', '逐个比较，更大则更新'],
    testCases: [
      { input: '5\n3 1 4 1 5', expectedOutput: '5' },
      { input: '3\n-1 -5 -2', expectedOutput: '-1' },
    ],
  },
  {
    id: 'cpp-ex-3-06',
    title: 'Reverse an Array',
    titleZh: '反转数组',
    difficulty: 'easy',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'two-pointers'],
    description: 'Read N, then N integers. Print them in reverse order separated by spaces.',
    descriptionZh: '读入 N，然后 N 个整数，倒序输出，用空格分隔。',
    examples: [{ input: '5\n1 2 3 4 5', output: '5 4 3 2 1' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // TODO: Read array, print reversed
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    for (int i = n - 1; i >= 0; i--) {
        if (i < n - 1) cout << " ";
        cout << v[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Read all elements into a vector', 'Print from last index to first'],
    hintsZh: ['将所有元素读入 vector', '从最后一个索引打印到第一个'],
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1' },
      { input: '3\n10 20 30', expectedOutput: '30 20 10' },
    ],
  },
  {
    id: 'cpp-ex-3-07',
    title: 'Array Sum and Average',
    titleZh: '数组求和与平均值',
    difficulty: 'easy',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'accumulator'],
    description: 'Read N, then N integers. Print their sum on line 1, and average on line 2.',
    descriptionZh: '读入 N，然后 N 个整数。第1行输出和，第2行输出平均值。',
    examples: [{ input: '4\n1 2 3 4', output: '10\n2.5' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // TODO: Calculate sum and average
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    int sum = 0;
    for (int i = 0; i < n; i++) {
        cin >> v[i];
        sum += v[i];
    }
    cout << sum << endl;
    cout << (double)sum / n << endl;
    return 0;
}`,
    hints: ['Sum all elements, then divide by N for average', 'Cast to double for decimal average'],
    hintsZh: ['求所有元素之和，再除以 N 得平均值', '转为 double 以得到小数'],
    testCases: [
      { input: '4\n1 2 3 4', expectedOutput: '10\n2.5' },
      { input: '3\n10 20 30', expectedOutput: '60\n20' },
    ],
  },
  {
    id: 'cpp-ex-3-08',
    title: 'Linear Search',
    titleZh: '线性查找',
    difficulty: 'easy',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'search'],
    description: 'Read N, then N integers, then a target. Print the 0-based index of the target, or -1 if not found.',
    descriptionZh: '读入 N，然后 N 个整数，再读入目标值。输出目标的索引（0开始），找不到输出 -1。',
    examples: [{ input: '5\n10 20 30 40 50\n30', output: '2' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // TODO: Linear search
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    int target;
    cin >> target;
    int idx = -1;
    for (int i = 0; i < n; i++) {
        if (v[i] == target) { idx = i; break; }
    }
    cout << idx << endl;
    return 0;
}`,
    hints: ['Check each element one by one', 'Break early when found'],
    hintsZh: ['逐个检查每个元素', '找到后立即 break'],
    testCases: [
      { input: '5\n10 20 30 40 50\n30', expectedOutput: '2' },
      { input: '3\n1 2 3\n5', expectedOutput: '-1' },
    ],
  },
  {
    id: 'cpp-ex-3-09',
    title: 'Binary Search',
    titleZh: '二分查找',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'binary-search'],
    description: 'Read N, then N sorted integers, then a target. Print the 0-based index using binary search, or -1 if not found.',
    descriptionZh: '读入 N，然后 N 个已排序整数，再读入目标值。用二分查找输出索引（0开始），找不到输出 -1。',
    examples: [{ input: '5\n1 3 5 7 9\n5', output: '2' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& v, int target) {
    // TODO: Implement binary search
    return -1;
}

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    int target;
    cin >> target;
    cout << binarySearch(v, target) << endl;
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& v, int target) {
    int lo = 0, hi = v.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (v[mid] == target) return mid;
        else if (v[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    int target;
    cin >> target;
    cout << binarySearch(v, target) << endl;
    return 0;
}`,
    hints: ['Maintain lo and hi pointers, check middle element', 'Narrow search space by half each step'],
    hintsZh: ['维护 lo 和 hi 指针，检查中间元素', '每步将搜索范围缩小一半'],
    testCases: [
      { input: '5\n1 3 5 7 9\n5', expectedOutput: '2' },
      { input: '5\n1 3 5 7 9\n4', expectedOutput: '-1' },
    ],
  },
  {
    id: 'cpp-ex-3-10',
    title: 'Bubble Sort',
    titleZh: '冒泡排序',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'sorting'],
    description: 'Read N, then N integers. Sort them using bubble sort and print them separated by spaces.',
    descriptionZh: '读入 N，然后 N 个整数。用冒泡排序后输出，用空格分隔。',
    examples: [{ input: '5\n5 3 1 4 2', output: '1 2 3 4 5' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& v) {
    // TODO: Implement bubble sort
}

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    bubbleSort(v);
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << v[i];
    }
    cout << endl;
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& v) {
    int n = v.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (v[j] > v[j + 1]) swap(v[j], v[j + 1]);
        }
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    bubbleSort(v);
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << v[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Compare adjacent elements and swap if out of order', 'Repeat until no swaps needed'],
    hintsZh: ['比较相邻元素，若顺序错误则交换', '重复直到不需要交换'],
    testCases: [
      { input: '5\n5 3 1 4 2', expectedOutput: '1 2 3 4 5' },
      { input: '3\n3 1 2', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'cpp-ex-3-11',
    title: 'Count Vowels in String',
    titleZh: '统计元音字母',
    difficulty: 'easy',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['string', 'functions'],
    description: 'Read a string. Print the count of vowels (a, e, i, o, u — case insensitive).',
    descriptionZh: '读入一个字符串，输出元音字母的个数（a, e, i, o, u，不区分大小写）。',
    examples: [{ input: 'Hello', output: '2' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int countVowels(string s) {
    // TODO: Count vowels
    return 0;
}

int main() {
    string s;
    cin >> s;
    cout << countVowels(s) << endl;
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int countVowels(string s) {
    int count = 0;
    for (char c : s) {
        c = tolower(c);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
            count++;
    }
    return count;
}

int main() {
    string s;
    cin >> s;
    cout << countVowels(s) << endl;
    return 0;
}`,
    hints: ['Convert to lowercase first, then check each character', 'Use tolower() function'],
    hintsZh: ['先转小写再逐字符检查', '使用 tolower() 函数'],
    testCases: [
      { input: 'Hello', expectedOutput: '2' },
      { input: 'AEIOU', expectedOutput: '5' },
    ],
  },
  {
    id: 'cpp-ex-3-12',
    title: 'String Reverse',
    titleZh: '字符串反转',
    difficulty: 'easy',
    level: 3,
    category: 'Functions',
    categoryZh: '函数',
    tags: ['string', 'functions'],
    description: 'Read a string and print it reversed.',
    descriptionZh: '读入一个字符串，输出反转后的字符串。',
    examples: [{ input: 'hello', output: 'olleh' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

string reverseString(string s) {
    // TODO: Reverse the string
    return "";
}

int main() {
    string s;
    cin >> s;
    cout << reverseString(s) << endl;
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

string reverseString(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        swap(s[left], s[right]);
        left++;
        right--;
    }
    return s;
}

int main() {
    string s;
    cin >> s;
    cout << reverseString(s) << endl;
    return 0;
}`,
    hints: ['Swap characters from both ends moving inward', 'Or build a new string from the end'],
    hintsZh: ['从两端向中间交换字符', '或者从末尾构建新字符串'],
    testCases: [
      { input: 'hello', expectedOutput: 'olleh' },
      { input: 'abcdef', expectedOutput: 'fedcba' },
    ],
  },
  {
    id: 'cpp-ex-3-13',
    title: 'Count Occurrences',
    titleZh: '统计出现次数',
    difficulty: 'easy',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'counting'],
    description: 'Read N, then N integers, then a target. Print how many times the target appears.',
    descriptionZh: '读入 N，然后 N 个整数，再读入目标值。输出目标出现的次数。',
    examples: [{ input: '6\n1 2 3 2 4 2\n2', output: '3' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // TODO: Count occurrences of target
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    int target;
    cin >> target;
    int count = 0;
    for (int x : v) {
        if (x == target) count++;
    }
    cout << count << endl;
    return 0;
}`,
    hints: ['Loop through array, increment counter when element equals target', 'Use range-based for loop for cleaner code'],
    hintsZh: ['遍历数组，元素等于目标时计数加1', '用范围 for 循环代码更简洁'],
    testCases: [
      { input: '6\n1 2 3 2 4 2\n2', expectedOutput: '3' },
      { input: '4\n5 5 5 5\n5', expectedOutput: '4' },
    ],
  },
  {
    id: 'cpp-ex-3-14',
    title: 'Remove Duplicates (Sorted)',
    titleZh: '去重（已排序）',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'vectors'],
    description: 'Read N, then N sorted integers. Print the unique elements separated by spaces.',
    descriptionZh: '读入 N，然后 N 个已排序整数。输出去重后的元素，用空格分隔。',
    examples: [{ input: '7\n1 1 2 3 3 3 4', output: '1 2 3 4' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // TODO: Remove duplicates from sorted array
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    bool first = true;
    for (int i = 0; i < n; i++) {
        if (i == 0 || v[i] != v[i - 1]) {
            if (!first) cout << " ";
            cout << v[i];
            first = false;
        }
    }
    cout << endl;
    return 0;
}`,
    hints: ['Since array is sorted, duplicates are adjacent', 'Print only when current differs from previous'],
    hintsZh: ['数组已排序，重复元素相邻', '只在当前元素与前一个不同时输出'],
    testCases: [
      { input: '7\n1 1 2 3 3 3 4', expectedOutput: '1 2 3 4' },
      { input: '5\n5 5 5 5 5', expectedOutput: '5' },
    ],
  },
  {
    id: 'cpp-ex-3-15',
    title: 'Merge Two Sorted Arrays',
    titleZh: '合并两个有序数组',
    difficulty: 'medium',
    level: 3,
    category: 'Arrays',
    categoryZh: '数组',
    tags: ['arrays', 'two-pointers', 'merge'],
    description: 'Read N, then N sorted integers (array A). Read M, then M sorted integers (array B). Print the merged sorted array.',
    descriptionZh: '读入 N 和 N 个有序整数（数组A），再读入 M 和 M 个有序整数（数组B）。输出合并后的有序数组。',
    examples: [{ input: '3\n1 3 5\n3\n2 4 6', output: '1 2 3 4 5 6' }],
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // TODO: Merge two sorted arrays
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, m;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> m;
    vector<int> b(m);
    for (int i = 0; i < m; i++) cin >> b[i];
    int i = 0, j = 0;
    bool first = true;
    while (i < n || j < m) {
        if (!first) cout << " ";
        first = false;
        if (i < n && (j >= m || a[i] <= b[j])) cout << a[i++];
        else cout << b[j++];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Use two pointers, one for each array', 'Always pick the smaller of the two current elements'],
    hintsZh: ['用两个指针，每个数组一个', '每次选两个当前元素中较小的'],
    testCases: [
      { input: '3\n1 3 5\n3\n2 4 6', expectedOutput: '1 2 3 4 5 6' },
      { input: '2\n1 4\n3\n2 3 5', expectedOutput: '1 2 3 4 5' },
    ],
  },

  // ============================================================
  // LEVEL 4: POINTERS & OOP (10 exercises)
  // ============================================================
  {
    id: 'cpp-ex-4-01',
    title: 'Swap with Pointers',
    titleZh: '用指针交换',
    difficulty: 'medium',
    level: 4,
    category: 'Pointers',
    categoryZh: '指针',
    tags: ['pointers', 'functions'],
    description: 'Write a function void swapPtr(int* a, int* b) that swaps two integers via pointers. Read two integers, swap them, print the result.',
    descriptionZh: '编写函数 void swapPtr(int* a, int* b) 通过指针交换两个整数。读入两个整数，交换后输出。',
    examples: [{ input: '3 7', output: '7 3' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write swapPtr function
void swapPtr(int* a, int* b) {

}

int main() {
    int a, b;
    cin >> a >> b;
    swapPtr(&a, &b);
    cout << a << " " << b << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

void swapPtr(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int a, b;
    cin >> a >> b;
    swapPtr(&a, &b);
    cout << a << " " << b << endl;
    return 0;
}`,
    hints: ['Use * to dereference pointers', 'Store *a in temp, then *a = *b, *b = temp'],
    hintsZh: ['用 * 解引用指针', '将 *a 存入 temp，然后 *a = *b，*b = temp'],
    testCases: [
      { input: '3 7', expectedOutput: '7 3' },
      { input: '10 20', expectedOutput: '20 10' },
    ],
  },
  {
    id: 'cpp-ex-4-02',
    title: 'Swap with References',
    titleZh: '用引用交换',
    difficulty: 'medium',
    level: 4,
    category: 'Pointers',
    categoryZh: '指针',
    tags: ['references', 'functions'],
    description: 'Write a function void swapRef(int& a, int& b) that swaps two integers via references. Read two integers, swap, print.',
    descriptionZh: '编写函数 void swapRef(int& a, int& b) 通过引用交换两个整数。读入两个整数，交换后输出。',
    examples: [{ input: '5 9', output: '9 5' }],
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write swapRef function
void swapRef(int& a, int& b) {

}

int main() {
    int a, b;
    cin >> a >> b;
    swapRef(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

void swapRef(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int a, b;
    cin >> a >> b;
    swapRef(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
    hints: ['References act like aliases — no need for * or &', 'Same logic as pointer swap but cleaner syntax'],
    hintsZh: ['引用就像别名——不需要 * 或 &', '逻辑和指针交换相同但语法更简洁'],
    testCases: [
      { input: '5 9', expectedOutput: '9 5' },
      { input: '1 2', expectedOutput: '2 1' },
    ],
  },
  {
    id: 'cpp-ex-4-03',
    title: 'Dynamic Array',
    titleZh: '动态数组',
    difficulty: 'medium',
    level: 4,
    category: 'Pointers',
    categoryZh: '指针',
    tags: ['pointers', 'dynamic-memory', 'new', 'delete'],
    description: 'Read N, then N integers. Use new[] to allocate an array, fill it, print the sum, then delete[].',
    descriptionZh: '读入 N，然后 N 个整数。用 new[] 分配数组，填入数据，输出总和，然后 delete[]。',
    examples: [{ input: '3\n10 20 30', output: '60' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Use dynamic array with new[] and delete[]
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int* arr = new int[n];
    int sum = 0;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];
    }
    cout << sum << endl;
    delete[] arr;
    return 0;
}`,
    hints: ['Allocate with int* arr = new int[n]', 'Always free with delete[] arr when done'],
    hintsZh: ['用 int* arr = new int[n] 分配', '用完后务必 delete[] arr 释放'],
    testCases: [
      { input: '3\n10 20 30', expectedOutput: '60' },
      { input: '4\n1 2 3 4', expectedOutput: '10' },
    ],
  },
  {
    id: 'cpp-ex-4-04',
    title: 'Pointer Arithmetic',
    titleZh: '指针算术',
    difficulty: 'medium',
    level: 4,
    category: 'Pointers',
    categoryZh: '指针',
    tags: ['pointers', 'arrays'],
    description: 'Read N, then N integers into an array. Use pointer arithmetic to print each element (no [] indexing).',
    descriptionZh: '读入 N，然后 N 个整数。用指针算术输出每个元素（不使用 [] 索引）。',
    examples: [{ input: '3\n10 20 30', output: '10 20 30' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print array elements using pointer arithmetic
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) cin >> *(arr + i);
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << *(arr + i);
    }
    cout << endl;
    delete[] arr;
    return 0;
}`,
    hints: ['*(arr + i) is equivalent to arr[i]', 'Pointer + offset gives address of that element'],
    hintsZh: ['*(arr + i) 等价于 arr[i]', '指针 + 偏移量得到该元素的地址'],
    testCases: [
      { input: '3\n10 20 30', expectedOutput: '10 20 30' },
      { input: '4\n1 2 3 4', expectedOutput: '1 2 3 4' },
    ],
  },
  {
    id: 'cpp-ex-4-05',
    title: 'Rectangle Class',
    titleZh: '矩形类',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'constructor', 'methods'],
    description: 'Create a Rectangle class with width, height, and methods area() and perimeter(). Read w and h, print area and perimeter on separate lines.',
    descriptionZh: '创建 Rectangle 类，有 width、height 属性和 area()、perimeter() 方法。读入宽高，分两行输出面积和周长。',
    examples: [{ input: '3 4', output: '12\n14' }],
    starterCode: `#include <iostream>
using namespace std;

class Rectangle {
    // TODO: Define Rectangle class
};

int main() {
    double w, h;
    cin >> w >> h;
    Rectangle r(w, h);
    cout << r.area() << endl;
    cout << r.perimeter() << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

class Rectangle {
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() { return width * height; }
    double perimeter() { return 2 * (width + height); }
};

int main() {
    double w, h;
    cin >> w >> h;
    Rectangle r(w, h);
    cout << r.area() << endl;
    cout << r.perimeter() << endl;
    return 0;
}`,
    hints: ['Use constructor initializer list: Rectangle(double w, double h) : width(w), height(h) {}', 'Perimeter = 2 * (width + height)'],
    hintsZh: ['使用构造函数初始化列表', '周长 = 2 * (宽 + 高)'],
    testCases: [
      { input: '3 4', expectedOutput: '12\n14' },
      { input: '5 5', expectedOutput: '25\n20' },
    ],
  },
  {
    id: 'cpp-ex-4-06',
    title: 'Student Class',
    titleZh: '学生类',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'constructor', 'methods'],
    description: 'Create a Student class with name and grade. Read name and grade, print "Name: <name>\\nGrade: <grade>".',
    descriptionZh: '创建 Student 类，有 name 和 grade 属性。读入姓名和成绩，输出 "Name: <name>\\nGrade: <grade>"。',
    examples: [{ input: 'Alice 95', output: 'Name: Alice\nGrade: 95' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

class Student {
    // TODO: Define Student class
};

int main() {
    string name;
    int grade;
    cin >> name >> grade;
    Student s(name, grade);
    s.print();
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

class Student {
    string name;
    int grade;
public:
    Student(string n, int g) : name(n), grade(g) {}
    void print() {
        cout << "Name: " << name << endl;
        cout << "Grade: " << grade << endl;
    }
};

int main() {
    string name;
    int grade;
    cin >> name >> grade;
    Student s(name, grade);
    s.print();
    return 0;
}`,
    hints: ['Store name as string, grade as int', 'print() method outputs both fields'],
    hintsZh: ['用 string 存姓名，int 存成绩', 'print() 方法输出两个字段'],
    testCases: [
      { input: 'Alice 95', expectedOutput: 'Name: Alice\nGrade: 95' },
      { input: 'Bob 80', expectedOutput: 'Name: Bob\nGrade: 80' },
    ],
  },
  {
    id: 'cpp-ex-4-07',
    title: 'Bank Account Class',
    titleZh: '银行账户类',
    difficulty: 'medium',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'methods', 'encapsulation'],
    description: 'Create a BankAccount class with balance, deposit(amount), and withdraw(amount). Read initial balance, then a deposit amount, then a withdrawal amount. Print the final balance.',
    descriptionZh: '创建 BankAccount 类，有 balance 属性和 deposit()、withdraw() 方法。读入初始余额、存款金额、取款金额，输出最终余额。',
    examples: [{ input: '100 50 30', output: '120' }],
    starterCode: `#include <iostream>
using namespace std;

class BankAccount {
    // TODO: Define BankAccount class
};

int main() {
    double init, dep, wd;
    cin >> init >> dep >> wd;
    BankAccount acc(init);
    acc.deposit(dep);
    acc.withdraw(wd);
    cout << acc.getBalance() << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

class BankAccount {
    double balance;
public:
    BankAccount(double b) : balance(b) {}
    void deposit(double amt) { balance += amt; }
    void withdraw(double amt) { if (amt <= balance) balance -= amt; }
    double getBalance() { return balance; }
};

int main() {
    double init, dep, wd;
    cin >> init >> dep >> wd;
    BankAccount acc(init);
    acc.deposit(dep);
    acc.withdraw(wd);
    cout << acc.getBalance() << endl;
    return 0;
}`,
    hints: ['deposit adds to balance, withdraw subtracts (if sufficient)', 'Use a getter method for balance'],
    hintsZh: ['deposit 增加余额，withdraw 减少余额（如果足够）', '用 getter 方法返回余额'],
    testCases: [
      { input: '100 50 30', expectedOutput: '120' },
      { input: '200 100 400', expectedOutput: '300' },
    ],
  },
  {
    id: 'cpp-ex-4-08',
    title: 'Inheritance: Shape → Circle',
    titleZh: '继承：Shape → Circle',
    difficulty: 'hard',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['inheritance', 'virtual', 'polymorphism'],
    description: 'Create a base class Shape with a virtual method double area(). Derive Circle from Shape. Read radius, print the area (use π = 3.14159).',
    descriptionZh: '创建基类 Shape，有虚方法 double area()。Circle 继承 Shape。读入半径，输出面积（π = 3.14159）。',
    examples: [{ input: '5', output: '78.5397' }],
    starterCode: `#include <iostream>
using namespace std;

class Shape {
public:
    // TODO: Virtual area method
    virtual double area() = 0;
};

class Circle : public Shape {
    // TODO: Implement Circle
};

int main() {
    double r;
    cin >> r;
    Circle c(r);
    cout << c.area() << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual double area() = 0;
    virtual ~Shape() {}
};

class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override { return 3.14159 * radius * radius; }
};

int main() {
    double r;
    cin >> r;
    Circle c(r);
    cout << c.area() << endl;
    return 0;
}`,
    hints: ['Pure virtual function: virtual double area() = 0', 'Override in Circle: double area() override { ... }'],
    hintsZh: ['纯虚函数：virtual double area() = 0', '在 Circle 中重写：double area() override { ... }'],
    testCases: [
      { input: '5', expectedOutput: '78.5397' },
      { input: '1', expectedOutput: '3.14159' },
    ],
  },
  {
    id: 'cpp-ex-4-09',
    title: 'Linked List: Count Nodes',
    titleZh: '链表：统计节点数',
    difficulty: 'hard',
    level: 4,
    category: 'Pointers',
    categoryZh: '指针',
    tags: ['pointers', 'linked-list', 'struct'],
    description: 'Read N, then N integers. Build a singly linked list and print the count of nodes.',
    descriptionZh: '读入 N，然后 N 个整数。构建单链表，输出节点个数。',
    examples: [{ input: '4\n10 20 30 40', output: '4' }],
    starterCode: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int d) : data(d), next(nullptr) {}
};

int main() {
    // TODO: Build linked list, count nodes
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int d) : data(d), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;
    Node* head = nullptr;
    Node* tail = nullptr;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else { tail->next = node; tail = node; }
    }
    int count = 0;
    Node* curr = head;
    while (curr) { count++; curr = curr->next; }
    cout << count << endl;
    // cleanup
    while (head) { Node* tmp = head; head = head->next; delete tmp; }
    return 0;
}`,
    hints: ['Use a tail pointer to append efficiently', 'Traverse with curr = curr->next until nullptr'],
    hintsZh: ['用 tail 指针高效追加节点', '用 curr = curr->next 遍历直到 nullptr'],
    testCases: [
      { input: '4\n10 20 30 40', expectedOutput: '4' },
      { input: '1\n5', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-4-10',
    title: 'Operator Overloading: Vector2D',
    titleZh: '运算符重载：二维向量',
    difficulty: 'hard',
    level: 4,
    category: 'OOP',
    categoryZh: '面向对象',
    tags: ['class', 'operator-overloading'],
    description: 'Create a Vector2D class with x, y and overloaded + operator. Read two vectors (x1 y1 x2 y2), print sum as "x y".',
    descriptionZh: '创建 Vector2D 类，有 x、y 属性和重载的 + 运算符。读入两个向量（x1 y1 x2 y2），输出和 "x y"。',
    examples: [{ input: '1 2 3 4', output: '4 6' }],
    starterCode: `#include <iostream>
using namespace std;

class Vector2D {
public:
    double x, y;
    // TODO: Constructor and operator+
};

int main() {
    double x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;
    Vector2D a{x1, y1}, b{x2, y2};
    Vector2D c = a + b;
    cout << c.x << " " << c.y << endl;
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

class Vector2D {
public:
    double x, y;
    Vector2D(double x = 0, double y = 0) : x(x), y(y) {}
    Vector2D operator+(const Vector2D& other) const {
        return Vector2D(x + other.x, y + other.y);
    }
};

int main() {
    double x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;
    Vector2D a(x1, y1), b(x2, y2);
    Vector2D c = a + b;
    cout << c.x << " " << c.y << endl;
    return 0;
}`,
    hints: ['Overload operator+ as a member function returning a new Vector2D', 'Return Vector2D(x + other.x, y + other.y)'],
    hintsZh: ['将 operator+ 作为成员函数重载，返回新的 Vector2D', '返回 Vector2D(x + other.x, y + other.y)'],
    testCases: [
      { input: '1 2 3 4', expectedOutput: '4 6' },
      { input: '0 0 5 5', expectedOutput: '5 5' },
    ],
  },

  // ============================================================
  // LEVEL 5: STL & ALGORITHMS (10 exercises)
  // ============================================================
  {
    id: 'cpp-ex-5-01',
    title: 'Vector Sort',
    titleZh: 'Vector 排序',
    difficulty: 'medium',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['vector', 'sort', 'algorithm'],
    description: 'Read N, then N integers. Sort them using std::sort and print separated by spaces.',
    descriptionZh: '读入 N，然后 N 个整数。用 std::sort 排序后输出，用空格分隔。',
    examples: [{ input: '5\n5 3 1 4 2', output: '1 2 3 4 5' }],
    starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // TODO: Read, sort, print
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    sort(v.begin(), v.end());
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << v[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Use sort(v.begin(), v.end())', 'Include <algorithm>'],
    hintsZh: ['使用 sort(v.begin(), v.end())', '包含 <algorithm> 头文件'],
    testCases: [
      { input: '5\n5 3 1 4 2', expectedOutput: '1 2 3 4 5' },
      { input: '3\n3 1 2', expectedOutput: '1 2 3' },
    ],
  },
  {
    id: 'cpp-ex-5-02',
    title: 'Frequency Counter (map)',
    titleZh: '频率统计（map）',
    difficulty: 'medium',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['map', 'counting'],
    description: 'Read N, then N integers. Print each unique integer and its count, sorted by the integer, one per line as "value count".',
    descriptionZh: '读入 N，然后 N 个整数。按数值排序，每行输出 "值 次数"。',
    examples: [{ input: '7\n1 2 2 3 3 3 1', output: '1 2\n2 2\n3 3' }],
    starterCode: `#include <iostream>
#include <map>
using namespace std;

int main() {
    // TODO: Count frequency using map
    
    return 0;
}`,
    solution: `#include <iostream>
#include <map>
using namespace std;

int main() {
    int n;
    cin >> n;
    map<int, int> freq;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        freq[x]++;
    }
    for (auto& [k, v] : freq) {
        cout << k << " " << v << endl;
    }
    return 0;
}`,
    hints: ['std::map keeps keys sorted automatically', 'Use map[key]++ to count'],
    hintsZh: ['std::map 自动按键排序', '用 map[key]++ 计数'],
    testCases: [
      { input: '7\n1 2 2 3 3 3 1', expectedOutput: '1 2\n2 2\n3 3' },
      { input: '4\n5 5 3 3', expectedOutput: '3 2\n5 2' },
    ],
  },
  {
    id: 'cpp-ex-5-03',
    title: 'Unique Elements (set)',
    titleZh: '唯一元素（set）',
    difficulty: 'medium',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['set'],
    description: 'Read N, then N integers. Print the unique elements in sorted order, separated by spaces.',
    descriptionZh: '读入 N，然后 N 个整数。按排序输出唯一元素，用空格分隔。',
    examples: [{ input: '6\n3 1 4 1 5 3', output: '1 3 4 5' }],
    starterCode: `#include <iostream>
#include <set>
using namespace std;

int main() {
    // TODO: Use set to find unique elements
    
    return 0;
}`,
    solution: `#include <iostream>
#include <set>
using namespace std;

int main() {
    int n;
    cin >> n;
    set<int> s;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        s.insert(x);
    }
    bool first = true;
    for (int x : s) {
        if (!first) cout << " ";
        cout << x;
        first = false;
    }
    cout << endl;
    return 0;
}`,
    hints: ['std::set automatically removes duplicates and keeps elements sorted', 'Just insert all elements and iterate'],
    hintsZh: ['std::set 自动去重并保持排序', '只需插入所有元素然后遍历'],
    testCases: [
      { input: '6\n3 1 4 1 5 3', expectedOutput: '1 3 4 5' },
      { input: '5\n1 1 1 1 1', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-5-04',
    title: 'Stack: Balanced Parentheses',
    titleZh: '栈：括号匹配',
    difficulty: 'medium',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['stack', 'string'],
    description: 'Read a string of parentheses ()[]{}. Print "yes" if balanced, "no" otherwise.',
    descriptionZh: '读入一个括号字符串 ()[]{}。如果匹配输出 "yes"，否则输出 "no"。',
    examples: [{ input: '({[]})', output: 'yes' }],
    starterCode: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    // TODO: Check balanced parentheses using stack
    
    return 0;
}`,
    solution: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    stack<char> st;
    bool valid = true;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty()) { valid = false; break; }
            char top = st.top(); st.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                valid = false; break;
            }
        }
    }
    if (!st.empty()) valid = false;
    cout << (valid ? "yes" : "no") << endl;
    return 0;
}`,
    hints: ['Push opening brackets, pop and match for closing brackets', 'Stack must be empty at the end for valid input'],
    hintsZh: ['遇到左括号入栈，遇到右括号出栈并匹配', '最后栈必须为空才有效'],
    testCases: [
      { input: '({[]})', expectedOutput: 'yes' },
      { input: '({[})', expectedOutput: 'no' },
    ],
  },
  {
    id: 'cpp-ex-5-05',
    title: 'Queue Simulation',
    titleZh: '队列模拟',
    difficulty: 'medium',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['queue'],
    description: 'Read N operations. "push X" adds X to queue, "pop" removes front. After all operations, print remaining elements front to back, separated by spaces. If empty print "empty".',
    descriptionZh: '读入 N 个操作。"push X" 入队，"pop" 出队。操作结束后从前到后输出剩余元素。若空输出 "empty"。',
    examples: [{ input: '4\npush 1\npush 2\npop\npush 3', output: '2 3' }],
    starterCode: `#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main() {
    // TODO: Simulate queue operations
    
    return 0;
}`,
    solution: `#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;
    queue<int> q;
    for (int i = 0; i < n; i++) {
        string op;
        cin >> op;
        if (op == "push") {
            int x;
            cin >> x;
            q.push(x);
        } else {
            if (!q.empty()) q.pop();
        }
    }
    if (q.empty()) {
        cout << "empty" << endl;
    } else {
        bool first = true;
        while (!q.empty()) {
            if (!first) cout << " ";
            cout << q.front();
            q.pop();
            first = false;
        }
        cout << endl;
    }
    return 0;
}`,
    hints: ['Use queue<int> with push(), pop(), front()', 'Read operation as string, then handle accordingly'],
    hintsZh: ['使用 queue<int>，方法有 push()、pop()、front()', '将操作读为字符串，然后分别处理'],
    testCases: [
      { input: '4\npush 1\npush 2\npop\npush 3', expectedOutput: '2 3' },
      { input: '2\npush 5\npop', expectedOutput: 'empty' },
    ],
  },
  {
    id: 'cpp-ex-5-06',
    title: 'Sort by Custom Comparator',
    titleZh: '自定义比较器排序',
    difficulty: 'medium',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['sort', 'lambda', 'algorithm'],
    description: 'Read N, then N integers. Sort them in descending order using a custom comparator. Print separated by spaces.',
    descriptionZh: '读入 N，然后 N 个整数。用自定义比较器降序排列后输出，用空格分隔。',
    examples: [{ input: '5\n3 1 4 1 5', output: '5 4 3 1 1' }],
    starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // TODO: Sort in descending order with custom comparator
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << v[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Pass a lambda as third argument to sort()', 'For descending: [](int a, int b) { return a > b; }'],
    hintsZh: ['将 lambda 作为 sort() 的第三个参数', '降序：[](int a, int b) { return a > b; }'],
    testCases: [
      { input: '5\n3 1 4 1 5', expectedOutput: '5 4 3 1 1' },
      { input: '3\n10 20 30', expectedOutput: '30 20 10' },
    ],
  },
  {
    id: 'cpp-ex-5-07',
    title: 'Top K Elements',
    titleZh: '前 K 大元素',
    difficulty: 'hard',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['sort', 'algorithm', 'priority-queue'],
    description: 'Read N, then N integers, then K. Print the K largest elements in descending order, separated by spaces.',
    descriptionZh: '读入 N，然后 N 个整数，再读入 K。按降序输出前 K 大的元素，用空格分隔。',
    examples: [{ input: '6\n3 1 4 1 5 9\n3', output: '9 5 4' }],
    starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // TODO: Find top K elements
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    int k;
    cin >> k;
    sort(v.begin(), v.end(), greater<int>());
    for (int i = 0; i < k; i++) {
        if (i > 0) cout << " ";
        cout << v[i];
    }
    cout << endl;
    return 0;
}`,
    hints: ['Sort in descending order, then take first K elements', 'Use greater<int>() as comparator'],
    hintsZh: ['降序排列后取前 K 个', '用 greater<int>() 作为比较器'],
    testCases: [
      { input: '6\n3 1 4 1 5 9\n3', expectedOutput: '9 5 4' },
      { input: '4\n10 20 30 40\n2', expectedOutput: '40 30' },
    ],
  },
  {
    id: 'cpp-ex-5-08',
    title: 'Two Sum (unordered_map)',
    titleZh: '两数之和（哈希表）',
    difficulty: 'hard',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['unordered_map', 'hash'],
    description: 'Read N, then N integers, then a target sum. Print the 0-based indices of two numbers that add up to the target (smaller index first). Guaranteed to have exactly one solution.',
    descriptionZh: '读入 N，然后 N 个整数，再读入目标和。输出两个数的索引（0开始，较小的在前）。保证恰好有一个解。',
    examples: [{ input: '4\n2 7 11 15\n9', output: '0 1' }],
    starterCode: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    // TODO: Two sum using hash map
    
    return 0;
}`,
    solution: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    int target;
    cin >> target;
    unordered_map<int, int> seen;
    for (int i = 0; i < n; i++) {
        int complement = target - v[i];
        if (seen.count(complement)) {
            cout << seen[complement] << " " << i << endl;
            break;
        }
        seen[v[i]] = i;
    }
    return 0;
}`,
    hints: ['Store each number and its index in a hash map', 'For each number, check if (target - number) exists in the map'],
    hintsZh: ['将每个数及其索引存入哈希表', '对每个数，检查 (target - 数) 是否在哈希表中'],
    testCases: [
      { input: '4\n2 7 11 15\n9', expectedOutput: '0 1' },
      { input: '3\n3 2 4\n6', expectedOutput: '1 2' },
    ],
  },
  {
    id: 'cpp-ex-5-09',
    title: 'String to Word Frequency',
    titleZh: '单词频率统计',
    difficulty: 'medium',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['map', 'string', 'counting'],
    description: 'Read N words. Print each unique word and its count, sorted alphabetically, one per line as "word count".',
    descriptionZh: '读入 N 个单词。按字母顺序每行输出 "单词 次数"。',
    examples: [{ input: '5\napple banana apple cherry banana', output: 'apple 2\nbanana 2\ncherry 1' }],
    starterCode: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    // TODO: Count word frequency
    
    return 0;
}`,
    solution: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    int n;
    cin >> n;
    map<string, int> freq;
    for (int i = 0; i < n; i++) {
        string w;
        cin >> w;
        freq[w]++;
    }
    for (auto& [word, cnt] : freq) {
        cout << word << " " << cnt << endl;
    }
    return 0;
}`,
    hints: ['Use map<string, int> — it sorts keys alphabetically', 'Increment with freq[word]++'],
    hintsZh: ['使用 map<string, int>——按键字母排序', '用 freq[word]++ 计数'],
    testCases: [
      { input: '5\napple banana apple cherry banana', expectedOutput: 'apple 2\nbanana 2\ncherry 1' },
      { input: '3\ndog dog cat', expectedOutput: 'cat 1\ndog 2' },
    ],
  },
  {
    id: 'cpp-ex-5-10',
    title: 'Stack Calculator (Postfix)',
    titleZh: '栈计算器（后缀表达式）',
    difficulty: 'hard',
    level: 5,
    category: 'STL',
    categoryZh: 'STL',
    tags: ['stack', 'string', 'algorithm'],
    description: 'Read a postfix (RPN) expression as space-separated tokens. Evaluate and print the result. Operators: + - * /. All operands are integers.',
    descriptionZh: '读入以空格分隔的后缀表达式（逆波兰表达式）。计算并输出结果。运算符：+ - * /。所有操作数为整数。',
    examples: [{ input: '3 4 + 2 *', output: '14' }],
    starterCode: `#include <iostream>
#include <stack>
#include <string>
#include <sstream>
using namespace std;

int main() {
    // TODO: Evaluate postfix expression
    
    return 0;
}`,
    solution: `#include <iostream>
#include <stack>
#include <string>
#include <sstream>
using namespace std;

int main() {
    string line;
    getline(cin, line);
    istringstream iss(line);
    stack<int> st;
    string token;
    while (iss >> token) {
        if (token == "+" || token == "-" || token == "*" || token == "/") {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();
            if (token == "+") st.push(a + b);
            else if (token == "-") st.push(a - b);
            else if (token == "*") st.push(a * b);
            else st.push(a / b);
        } else {
            st.push(stoi(token));
        }
    }
    cout << st.top() << endl;
    return 0;
}`,
    hints: ['Push numbers onto stack; for operators, pop two, compute, push result', 'Order matters: first popped is right operand, second is left'],
    hintsZh: ['数字入栈；遇到运算符弹出两个数，计算后将结果入栈', '注意顺序：先弹出的是右操作数，后弹出的是左操作数'],
    testCases: [
      { input: '3 4 + 2 *', expectedOutput: '14' },
      { input: '5 1 2 + 4 * + 3 -', expectedOutput: '14' },
    ],
  },
];