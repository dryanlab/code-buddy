import { CppExercise } from './cpp-exercises';

// Level 1 extras: exercises cpp-ex-1-26 through cpp-ex-1-60
export const CPP_EXERCISES_PART2: CppExercise[] = [
  {
    id: 'cpp-ex-1-26',
    title: 'Fahrenheit to Celsius',
    titleZh: '华氏转摄氏',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic', 'type-casting'],
    description: 'Read a temperature in Fahrenheit and convert it to Celsius. Formula: C = (F - 32) * 5 / 9. Print the result rounded to 2 decimal places.',
    descriptionZh: '读入一个华氏温度，转换为摄氏温度。公式：C = (F - 32) * 5 / 9。输出保留两位小数。',
    examples: [{ input: '212', output: '100.00' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Read Fahrenheit, convert to Celsius, print with 2 decimal places
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double f;
    cin >> f;
    // Apply conversion formula
    double c = (f - 32.0) * 5.0 / 9.0;
    cout << fixed << setprecision(2) << c << endl;
    return 0;
}`,
    hints: ['Use double for decimal precision', 'Use fixed and setprecision(2) from <iomanip>'],
    hintsZh: ['使用 double 保证小数精度', '使用 <iomanip> 中的 fixed 和 setprecision(2)'],
    testCases: [
      { input: '212', expectedOutput: '100.00' },
      { input: '32', expectedOutput: '0.00' },
      { input: '98.6', expectedOutput: '37.00' },
    ],
  },
  {
    id: 'cpp-ex-1-27',
    title: 'Celsius to Fahrenheit',
    titleZh: '摄氏转华氏',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic'],
    description: 'Read a temperature in Celsius and convert it to Fahrenheit. Formula: F = C * 9 / 5 + 32. Print with 2 decimal places.',
    descriptionZh: '读入摄氏温度，转换为华氏温度。公式：F = C * 9 / 5 + 32。输出保留两位小数。',
    examples: [{ input: '100', output: '212.00' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Read Celsius, convert to Fahrenheit
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double c;
    cin >> c;
    double f = c * 9.0 / 5.0 + 32.0;
    cout << fixed << setprecision(2) << f << endl;
    return 0;
}`,
    hints: ['Use the formula F = C * 9/5 + 32', 'Use double type for precision'],
    hintsZh: ['使用公式 F = C * 9/5 + 32', '使用 double 类型保证精度'],
    testCases: [
      { input: '100', expectedOutput: '212.00' },
      { input: '0', expectedOutput: '32.00' },
    ],
  },
  {
    id: 'cpp-ex-1-28',
    title: 'ASCII Value of Character',
    titleZh: '字符的ASCII值',
    difficulty: 'easy',
    level: 1,
    category: 'Characters',
    categoryZh: '字符',
    tags: ['char', 'ASCII', 'type-casting'],
    description: 'Read a character and print its ASCII value.',
    descriptionZh: '读入一个字符，输出它的ASCII值。',
    examples: [{ input: 'A', output: '65' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read a char and print its ASCII value
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    char ch;
    cin >> ch;
    // Cast char to int to get ASCII value
    cout << (int)ch << endl;
    return 0;
}`,
    hints: ['Cast a char to int to get its ASCII code', 'Use (int)ch or static_cast<int>(ch)'],
    hintsZh: ['将 char 强制转换为 int 得到ASCII码', '使用 (int)ch 或 static_cast<int>(ch)'],
    testCases: [
      { input: 'A', expectedOutput: '65' },
      { input: 'a', expectedOutput: '97' },
      { input: '0', expectedOutput: '48' },
    ],
  },
  {
    id: 'cpp-ex-1-29',
    title: 'Character from ASCII',
    titleZh: '从ASCII值得到字符',
    difficulty: 'easy',
    level: 1,
    category: 'Characters',
    categoryZh: '字符',
    tags: ['char', 'ASCII', 'type-casting'],
    description: 'Read an integer (ASCII code) and print the corresponding character.',
    descriptionZh: '读入一个整数（ASCII码），输出对应的字符。',
    examples: [{ input: '65', output: 'A' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read an integer and print the corresponding character
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int code;
    cin >> code;
    // Cast int to char to get the character
    cout << (char)code << endl;
    return 0;
}`,
    hints: ['Cast an int to char to get the character', 'Use (char)code'],
    hintsZh: ['将 int 转换为 char 得到字符', '使用 (char)code'],
    testCases: [
      { input: '65', expectedOutput: 'A' },
      { input: '97', expectedOutput: 'a' },
    ],
  },
  {
    id: 'cpp-ex-1-30',
    title: 'Sizeof Basic Types',
    titleZh: '基本类型的大小',
    difficulty: 'easy',
    level: 1,
    category: 'Types',
    categoryZh: '数据类型',
    tags: ['sizeof', 'types'],
    description: 'Print the size (in bytes) of int, float, double, and char, each on a new line.',
    descriptionZh: '输出 int、float、double 和 char 的大小（字节数），每个一行。',
    examples: [{ input: '', output: '4\n4\n8\n1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print sizeof int, float, double, char (each on new line)
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    // sizeof returns the size in bytes
    cout << sizeof(int) << endl;
    cout << sizeof(float) << endl;
    cout << sizeof(double) << endl;
    cout << sizeof(char) << endl;
    return 0;
}`,
    hints: ['Use sizeof(type) to get the size', 'Print each on a new line with endl'],
    hintsZh: ['使用 sizeof(type) 获取大小', '每个用 endl 换行输出'],
    testCases: [
      { input: '', expectedOutput: '4\n4\n8\n1' },
    ],
  },
  {
    id: 'cpp-ex-1-31',
    title: 'Swap Two Variables',
    titleZh: '交换两个变量',
    difficulty: 'easy',
    level: 1,
    category: 'Variables',
    categoryZh: '变量',
    tags: ['variables', 'swap'],
    description: 'Read two integers and print them in swapped order.',
    descriptionZh: '读入两个整数，交换后输出。',
    examples: [{ input: '3 7', output: '7 3' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read two integers, swap, and print
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    // Swap using a temporary variable
    int temp = a;
    a = b;
    b = temp;
    cout << a << " " << b << endl;
    return 0;
}`,
    hints: ['Use a temporary variable to hold one value', 'Assign in order: temp=a, a=b, b=temp'],
    hintsZh: ['使用临时变量保存其中一个值', '按顺序赋值：temp=a, a=b, b=temp'],
    testCases: [
      { input: '3 7', expectedOutput: '7 3' },
      { input: '10 20', expectedOutput: '20 10' },
    ],
  },
  {
    id: 'cpp-ex-1-32',
    title: 'Uppercase to Lowercase',
    titleZh: '大写转小写',
    difficulty: 'easy',
    level: 1,
    category: 'Characters',
    categoryZh: '字符',
    tags: ['char', 'ASCII'],
    description: 'Read an uppercase letter and print its lowercase version.',
    descriptionZh: '读入一个大写字母，输出对应的小写字母。',
    examples: [{ input: 'A', output: 'a' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read uppercase char, print lowercase
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    char ch;
    cin >> ch;
    // Difference between 'a' and 'A' is 32
    cout << (char)(ch + 32) << endl;
    return 0;
}`,
    hints: ['The ASCII difference between lowercase and uppercase is 32', 'Add 32 to the char value'],
    hintsZh: ['大写和小写字母的ASCII差值为32', '将字符值加32'],
    testCases: [
      { input: 'A', expectedOutput: 'a' },
      { input: 'Z', expectedOutput: 'z' },
    ],
  },
  {
    id: 'cpp-ex-1-33',
    title: 'Lowercase to Uppercase',
    titleZh: '小写转大写',
    difficulty: 'easy',
    level: 1,
    category: 'Characters',
    categoryZh: '字符',
    tags: ['char', 'ASCII'],
    description: 'Read a lowercase letter and print its uppercase version.',
    descriptionZh: '读入一个小写字母，输出对应的大写字母。',
    examples: [{ input: 'a', output: 'A' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read lowercase char, print uppercase
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    char ch;
    cin >> ch;
    // Subtract 32 to convert lowercase to uppercase
    cout << (char)(ch - 32) << endl;
    return 0;
}`,
    hints: ['Subtract 32 from a lowercase char to get uppercase', 'ASCII of a is 97, A is 65'],
    hintsZh: ['小写字母减32得到大写', 'a的ASCII是97，A是65'],
    testCases: [
      { input: 'a', expectedOutput: 'A' },
      { input: 'z', expectedOutput: 'Z' },
    ],
  },
  {
    id: 'cpp-ex-1-34',
    title: 'Last Digit of Number',
    titleZh: '数字的最后一位',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['modulo', 'arithmetic'],
    description: 'Read an integer and print its last digit.',
    descriptionZh: '读入一个整数，输出它的最后一位数字。',
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
    // Use modulo 10 to get last digit
    cout << n % 10 << endl;
    return 0;
}`,
    hints: ['Use the modulo operator % with 10', 'n % 10 gives the last digit'],
    hintsZh: ['使用取模运算符 % 与 10', 'n % 10 得到最后一位'],
    testCases: [
      { input: '1234', expectedOutput: '4' },
      { input: '907', expectedOutput: '7' },
    ],
  },
  {
    id: 'cpp-ex-1-35',
    title: 'Sum of Digits (3-digit)',
    titleZh: '三位数的各位数字之和',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['modulo', 'arithmetic', 'digits'],
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
    // Extract each digit using % and /
    int d1 = n % 10;
    int d2 = (n / 10) % 10;
    int d3 = n / 100;
    cout << d1 + d2 + d3 << endl;
    return 0;
}`,
    hints: ['Use % 10 to get the last digit, then / 10 to remove it', 'Repeat for each digit'],
    hintsZh: ['用 % 10 取最后一位，/ 10 去掉最后一位', '对每一位重复操作'],
    testCases: [
      { input: '123', expectedOutput: '6' },
      { input: '999', expectedOutput: '27' },
    ],
  },
  {
    id: 'cpp-ex-1-36',
    title: 'Reverse a 3-Digit Number',
    titleZh: '反转三位数',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['modulo', 'arithmetic', 'digits'],
    description: 'Read a 3-digit integer and print it reversed.',
    descriptionZh: '读入一个三位数，输出反转后的数。',
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
    int d1 = n % 10;
    int d2 = (n / 10) % 10;
    int d3 = n / 100;
    // Reconstruct reversed number
    cout << d1 * 100 + d2 * 10 + d3 << endl;
    return 0;
}`,
    hints: ['Extract each digit, then reconstruct in reverse order', 'last_digit * 100 + middle * 10 + first'],
    hintsZh: ['提取每一位，然后反向重建', '最后一位 * 100 + 中间 * 10 + 第一位'],
    testCases: [
      { input: '123', expectedOutput: '321' },
      { input: '500', expectedOutput: '5' },
    ],
  },
  {
    id: 'cpp-ex-1-37',
    title: 'Constant PI Circumference',
    titleZh: '用PI常量求周长',
    difficulty: 'easy',
    level: 1,
    category: 'Constants',
    categoryZh: '常量',
    tags: ['const', 'double', 'arithmetic'],
    description: 'Define PI as a constant (3.14159). Read a radius and print the circumference (2 * PI * r) with 2 decimal places.',
    descriptionZh: '定义 PI 为常量 (3.14159)。读入半径，输出周长 (2 * PI * r)，保留两位小数。',
    examples: [{ input: '5', output: '31.42' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Define const PI, read radius, print circumference
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    const double PI = 3.14159;
    double r;
    cin >> r;
    // Circumference = 2 * PI * r
    cout << fixed << setprecision(2) << 2 * PI * r << endl;
    return 0;
}`,
    hints: ['Use const double PI = 3.14159', 'Circumference = 2 * PI * radius'],
    hintsZh: ['使用 const double PI = 3.14159', '周长 = 2 * PI * 半径'],
    testCases: [
      { input: '5', expectedOutput: '31.42' },
      { input: '1', expectedOutput: '6.28' },
    ],
  },
  {
    id: 'cpp-ex-1-38',
    title: 'Boolean AND OR',
    titleZh: '布尔与或运算',
    difficulty: 'easy',
    level: 1,
    category: 'Boolean',
    categoryZh: '布尔',
    tags: ['bool', 'operators'],
    description: 'Read two integers (0 or 1). Print their AND result on the first line and OR result on the second line.',
    descriptionZh: '读入两个整数（0或1），第一行输出它们的与运算结果，第二行输出或运算结果。',
    examples: [{ input: '1 0', output: '0\n1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Read two booleans, print AND and OR results
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    // AND: both must be 1; OR: at least one must be 1
    cout << (a && b) << endl;
    cout << (a || b) << endl;
    return 0;
}`,
    hints: ['Use && for AND and || for OR', 'Boolean results print as 0 or 1'],
    hintsZh: ['用 && 表示与，|| 表示或', '布尔结果输出为 0 或 1'],
    testCases: [
      { input: '1 0', expectedOutput: '0\n1' },
      { input: '1 1', expectedOutput: '1\n1' },
      { input: '0 0', expectedOutput: '0\n0' },
    ],
  },
  {
    id: 'cpp-ex-1-39',
    title: 'Ternary Max of Two',
    titleZh: '三元运算求较大值',
    difficulty: 'easy',
    level: 1,
    category: 'Operators',
    categoryZh: '运算符',
    tags: ['ternary', 'operators'],
    description: 'Read two integers and print the larger one using the ternary operator.',
    descriptionZh: '读入两个整数，用三元运算符输出较大的那个。',
    examples: [{ input: '3 7', output: '7' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Use ternary operator to find the max
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    // Ternary: condition ? if_true : if_false
    cout << (a > b ? a : b) << endl;
    return 0;
}`,
    hints: ['Ternary syntax: condition ? value_if_true : value_if_false', 'a > b ? a : b gives the max'],
    hintsZh: ['三元语法：条件 ? 真值 : 假值', 'a > b ? a : b 得到最大值'],
    testCases: [
      { input: '3 7', expectedOutput: '7' },
      { input: '10 2', expectedOutput: '10' },
    ],
  },
  {
    id: 'cpp-ex-1-40',
    title: 'Integer Division and Remainder',
    titleZh: '整除和余数',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['arithmetic', 'modulo'],
    description: 'Read two integers a and b. Print the quotient (a/b) on the first line and the remainder (a%b) on the second line.',
    descriptionZh: '读入两个整数 a 和 b，第一行输出商 (a/b)，第二行输出余数 (a%b)。',
    examples: [{ input: '17 5', output: '3\n2' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print quotient and remainder
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a / b << endl;  // Integer division
    cout << a % b << endl;  // Remainder
    return 0;
}`,
    hints: ['Use / for integer division and % for remainder', 'Both operators work on integers'],
    hintsZh: ['用 / 做整除，% 求余数', '两个运算符都用于整数'],
    testCases: [
      { input: '17 5', expectedOutput: '3\n2' },
      { input: '10 3', expectedOutput: '3\n1' },
    ],
  },
  {
    id: 'cpp-ex-1-41',
    title: 'Seconds to HH:MM:SS',
    titleZh: '秒数转时分秒',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['arithmetic', 'modulo'],
    description: 'Read a total number of seconds and convert to hours, minutes, and seconds. Print in format H:M:S.',
    descriptionZh: '读入总秒数，转换为时、分、秒。按 H:M:S 格式输出。',
    examples: [{ input: '3661', output: '1:1:1' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Convert seconds to H:M:S
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int total;
    cin >> total;
    int h = total / 3600;
    int m = (total % 3600) / 60;
    int s = total % 60;
    cout << h << ":" << m << ":" << s << endl;
    return 0;
}`,
    hints: ['Hours = total / 3600', 'Minutes = (total % 3600) / 60, Seconds = total % 60'],
    hintsZh: ['小时 = 总秒数 / 3600', '分钟 = (总秒数 % 3600) / 60，秒 = 总秒数 % 60'],
    testCases: [
      { input: '3661', expectedOutput: '1:1:1' },
      { input: '7200', expectedOutput: '2:0:0' },
    ],
  },
  {
    id: 'cpp-ex-1-42',
    title: 'Simple Interest',
    titleZh: '单利计算',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic'],
    description: 'Read principal (P), rate (R in %), and time (T in years). Print simple interest = P*R*T/100 with 2 decimal places.',
    descriptionZh: '读入本金P、利率R（百分比）和时间T（年），输出单利 = P*R*T/100，保留两位小数。',
    examples: [{ input: '1000 5 2', output: '100.00' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Calculate simple interest
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double P, R, T;
    cin >> P >> R >> T;
    // Simple interest formula
    double si = P * R * T / 100.0;
    cout << fixed << setprecision(2) << si << endl;
    return 0;
}`,
    hints: ['Simple Interest = P * R * T / 100', 'Use double for all variables'],
    hintsZh: ['单利 = P * R * T / 100', '所有变量使用 double'],
    testCases: [
      { input: '1000 5 2', expectedOutput: '100.00' },
      { input: '5000 3.5 1', expectedOutput: '175.00' },
    ],
  },
  {
    id: 'cpp-ex-1-43',
    title: 'Bitwise AND OR XOR',
    titleZh: '位运算与或异或',
    difficulty: 'easy',
    level: 1,
    category: 'Operators',
    categoryZh: '运算符',
    tags: ['bitwise', 'operators'],
    description: 'Read two integers. Print their bitwise AND, OR, and XOR on separate lines.',
    descriptionZh: '读入两个整数，分别在三行输出按位与、按位或、按位异或的结果。',
    examples: [{ input: '5 3', output: '1\n7\n6' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print bitwise AND, OR, XOR
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << (a & b) << endl;  // AND
    cout << (a | b) << endl;  // OR
    cout << (a ^ b) << endl;  // XOR
    return 0;
}`,
    hints: ['& is bitwise AND, | is OR, ^ is XOR', '5 in binary is 101, 3 is 011'],
    hintsZh: ['& 是按位与，| 是按位或，^ 是按位异或', '5的二进制是101，3是011'],
    testCases: [
      { input: '5 3', expectedOutput: '1\n7\n6' },
      { input: '12 10', expectedOutput: '8\n14\n6' },
    ],
  },
  {
    id: 'cpp-ex-1-44',
    title: 'String Length',
    titleZh: '字符串长度',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'length'],
    description: 'Read a single word (no spaces) and print its length.',
    descriptionZh: '读入一个单词（无空格），输出其长度。',
    examples: [{ input: 'hello', output: '5' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Read a word, print its length
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    // .length() or .size() returns string length
    cout << s.length() << endl;
    return 0;
}`,
    hints: ['Use string.length() or string.size()', 'cin >> reads one word'],
    hintsZh: ['使用 string.length() 或 string.size()', 'cin >> 读取一个单词'],
    testCases: [
      { input: 'hello', expectedOutput: '5' },
      { input: 'C++', expectedOutput: '3' },
    ],
  },
  {
    id: 'cpp-ex-1-45',
    title: 'Concatenate Two Strings',
    titleZh: '拼接两个字符串',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'concatenation'],
    description: 'Read two words and print them concatenated (no space between).',
    descriptionZh: '读入两个单词，输出它们拼接的结果（中间无空格）。',
    examples: [{ input: 'Hello World', output: 'HelloWorld' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Read two words, concatenate and print
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;
    // Use + to concatenate strings
    cout << a + b << endl;
    return 0;
}`,
    hints: ['Use the + operator to concatenate strings', 'cin >> reads one word at a time'],
    hintsZh: ['用 + 运算符拼接字符串', 'cin >> 每次读一个单词'],
    testCases: [
      { input: 'Hello World', expectedOutput: 'HelloWorld' },
      { input: 'foo bar', expectedOutput: 'foobar' },
    ],
  },
  {
    id: 'cpp-ex-1-46',
    title: 'Check Even or Odd (Ternary)',
    titleZh: '判断奇偶（三元运算）',
    difficulty: 'easy',
    level: 1,
    category: 'Operators',
    categoryZh: '运算符',
    tags: ['ternary', 'modulo'],
    description: 'Read an integer and print "Even" or "Odd" using the ternary operator.',
    descriptionZh: '读入一个整数，用三元运算符输出 "Even" 或 "Odd"。',
    examples: [{ input: '4', output: 'Even' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Check even/odd using ternary
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Ternary: n%2==0 means even
    cout << (n % 2 == 0 ? "Even" : "Odd") << endl;
    return 0;
}`,
    hints: ['n % 2 == 0 means even', 'Use ternary: condition ? "Even" : "Odd"'],
    hintsZh: ['n % 2 == 0 表示偶数', '使用三元：条件 ? "Even" : "Odd"'],
    testCases: [
      { input: '4', expectedOutput: 'Even' },
      { input: '7', expectedOutput: 'Odd' },
    ],
  },
  {
    id: 'cpp-ex-1-47',
    title: 'Power of a Number',
    titleZh: '求幂',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['cmath', 'pow'],
    description: 'Read base and exponent (integers). Print base^exponent using pow().',
    descriptionZh: '读入底数和指数（整数），用 pow() 输出幂结果。',
    examples: [{ input: '2 10', output: '1024' }],
    starterCode: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    // TODO: Use pow() to compute base^exp
    
    return 0;
}`,
    solution: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int base, exp;
    cin >> base >> exp;
    // pow returns double, cast to int for integer result
    cout << (int)pow(base, exp) << endl;
    return 0;
}`,
    hints: ['Include <cmath> and use pow(base, exponent)', 'Cast result to int if needed'],
    hintsZh: ['包含 <cmath> 并使用 pow(底数, 指数)', '如需整数结果可强制转换为 int'],
    testCases: [
      { input: '2 10', expectedOutput: '1024' },
      { input: '3 4', expectedOutput: '81' },
    ],
  },
  {
    id: 'cpp-ex-1-48',
    title: 'Square Root',
    titleZh: '平方根',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['cmath', 'sqrt'],
    description: 'Read a non-negative number and print its square root with 2 decimal places.',
    descriptionZh: '读入一个非负数，输出其平方根，保留两位小数。',
    examples: [{ input: '16', output: '4.00' }],
    starterCode: `#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Print square root with 2 decimal places
    
    return 0;
}`,
    solution: `#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main() {
    double n;
    cin >> n;
    cout << fixed << setprecision(2) << sqrt(n) << endl;
    return 0;
}`,
    hints: ['Use sqrt() from <cmath>', 'Use fixed and setprecision(2)'],
    hintsZh: ['使用 <cmath> 中的 sqrt()', '使用 fixed 和 setprecision(2)'],
    testCases: [
      { input: '16', expectedOutput: '4.00' },
      { input: '2', expectedOutput: '1.41' },
    ],
  },
  {
    id: 'cpp-ex-1-49',
    title: 'Absolute Value',
    titleZh: '绝对值',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['cmath', 'abs'],
    description: 'Read an integer and print its absolute value.',
    descriptionZh: '读入一个整数，输出其绝对值。',
    examples: [{ input: '-5', output: '5' }],
    starterCode: `#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
    // TODO: Print absolute value
    
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
    hints: ['Use abs() from <cstdlib>', 'abs(-5) returns 5'],
    hintsZh: ['使用 <cstdlib> 中的 abs()', 'abs(-5) 返回 5'],
    testCases: [
      { input: '-5', expectedOutput: '5' },
      { input: '3', expectedOutput: '3' },
    ],
  },
  {
    id: 'cpp-ex-1-50',
    title: 'Read Full Line with Getline',
    titleZh: '用Getline读取整行',
    difficulty: 'easy',
    level: 1,
    category: 'Input/Output',
    categoryZh: '输入输出',
    tags: ['getline', 'string'],
    description: 'Read a full line of text (may contain spaces) and print it.',
    descriptionZh: '读取一整行文本（可能包含空格）并输出。',
    examples: [{ input: 'Hello World', output: 'Hello World' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Read a full line and print it
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string line;
    // getline reads the entire line including spaces
    getline(cin, line);
    cout << line << endl;
    return 0;
}`,
    hints: ['Use getline(cin, variable) to read a full line', 'cin >> stops at whitespace, getline does not'],
    hintsZh: ['使用 getline(cin, 变量) 读取整行', 'cin >> 遇到空格停止，getline 不会'],
    testCases: [
      { input: 'Hello World', expectedOutput: 'Hello World' },
      { input: 'C++ is fun', expectedOutput: 'C++ is fun' },
    ],
  },
  {
    id: 'cpp-ex-1-51',
    title: 'Area of Triangle',
    titleZh: '三角形面积',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic'],
    description: 'Read the base and height of a triangle. Print the area (0.5 * base * height) with 2 decimal places.',
    descriptionZh: '读入三角形的底和高，输出面积 (0.5 * 底 * 高)，保留两位小数。',
    examples: [{ input: '10 5', output: '25.00' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Calculate triangle area
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double base, height;
    cin >> base >> height;
    cout << fixed << setprecision(2) << 0.5 * base * height << endl;
    return 0;
}`,
    hints: ['Area = 0.5 * base * height', 'Use double for decimal output'],
    hintsZh: ['面积 = 0.5 * 底 * 高', '使用 double 保证小数输出'],
    testCases: [
      { input: '10 5', expectedOutput: '25.00' },
      { input: '7 3', expectedOutput: '10.50' },
    ],
  },
  {
    id: 'cpp-ex-1-52',
    title: 'Increment and Decrement',
    titleZh: '自增和自减',
    difficulty: 'easy',
    level: 1,
    category: 'Operators',
    categoryZh: '运算符',
    tags: ['operators', 'increment'],
    description: 'Read an integer n. Print n+1 (post-increment result) on the first line and n-1 on the second line.',
    descriptionZh: '读入整数 n，第一行输出 n+1，第二行输出 n-1。',
    examples: [{ input: '5', output: '6\n4' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print n+1 and n-1
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << n + 1 << endl;
    cout << n - 1 << endl;
    return 0;
}`,
    hints: ['Simply add 1 and subtract 1', 'Or use ++ and -- operators'],
    hintsZh: ['直接加1和减1', '或使用 ++ 和 -- 运算符'],
    testCases: [
      { input: '5', expectedOutput: '6\n4' },
      { input: '0', expectedOutput: '1\n-1' },
    ],
  },
  {
    id: 'cpp-ex-1-53',
    title: 'Perimeter of Rectangle',
    titleZh: '矩形周长',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['arithmetic'],
    description: 'Read length and width of a rectangle. Print its perimeter (2 * (length + width)).',
    descriptionZh: '读入矩形的长和宽，输出周长 (2 * (长 + 宽))。',
    examples: [{ input: '5 3', output: '16' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Calculate rectangle perimeter
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int l, w;
    cin >> l >> w;
    cout << 2 * (l + w) << endl;
    return 0;
}`,
    hints: ['Perimeter = 2 * (length + width)', 'Read two values with cin'],
    hintsZh: ['周长 = 2 * (长 + 宽)', '用 cin 读取两个值'],
    testCases: [
      { input: '5 3', expectedOutput: '16' },
      { input: '10 10', expectedOutput: '40' },
    ],
  },
  {
    id: 'cpp-ex-1-54',
    title: 'Average of Three Numbers',
    titleZh: '三个数的平均值',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['double', 'arithmetic'],
    description: 'Read three integers. Print their average with 2 decimal places.',
    descriptionZh: '读入三个整数，输出它们的平均值，保留两位小数。',
    examples: [{ input: '3 4 5', output: '4.00' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Calculate average of 3 numbers
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    double avg = (a + b + c) / 3.0;
    cout << fixed << setprecision(2) << avg << endl;
    return 0;
}`,
    hints: ['Divide by 3.0 (not 3) to get a decimal result', 'Use fixed and setprecision(2)'],
    hintsZh: ['除以 3.0（不是 3）得到小数结果', '使用 fixed 和 setprecision(2)'],
    testCases: [
      { input: '3 4 5', expectedOutput: '4.00' },
      { input: '10 20 30', expectedOutput: '20.00' },
    ],
  },
  {
    id: 'cpp-ex-1-55',
    title: 'Type Casting int to double',
    titleZh: '类型转换 int 到 double',
    difficulty: 'easy',
    level: 1,
    category: 'Types',
    categoryZh: '数据类型',
    tags: ['type-casting', 'double'],
    description: 'Read two integers a and b. Print the result of a/b as a double with 4 decimal places (use type casting).',
    descriptionZh: '读入两个整数 a 和 b，将 a/b 的结果作为 double 输出，保留4位小数（使用类型转换）。',
    examples: [{ input: '7 2', output: '3.5000' }],
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Divide two ints with double precision
    
    return 0;
}`,
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    // Cast to double before dividing
    double result = (double)a / b;
    cout << fixed << setprecision(4) << result << endl;
    return 0;
}`,
    hints: ['Cast at least one operand to double before dividing', 'int/int gives int; double/int gives double'],
    hintsZh: ['除法前至少将一个操作数转为 double', 'int/int 结果为 int；double/int 结果为 double'],
    testCases: [
      { input: '7 2', expectedOutput: '3.5000' },
      { input: '1 3', expectedOutput: '0.3333' },
    ],
  },
  {
    id: 'cpp-ex-1-56',
    title: 'Min of Three Numbers',
    titleZh: '三个数中的最小值',
    difficulty: 'easy',
    level: 1,
    category: 'Operators',
    categoryZh: '运算符',
    tags: ['ternary', 'min'],
    description: 'Read three integers and print the smallest using nested ternary or comparisons.',
    descriptionZh: '读入三个整数，输出最小的那个。',
    examples: [{ input: '5 2 8', output: '2' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Find minimum of three numbers
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    // Nested ternary to find min
    int minVal = (a < b ? a : b);
    minVal = (minVal < c ? minVal : c);
    cout << minVal << endl;
    return 0;
}`,
    hints: ['First find the min of two, then compare with the third', 'Use ternary operator or if-else'],
    hintsZh: ['先找两个数的最小值，再与第三个比较', '可以用三元运算符或 if-else'],
    testCases: [
      { input: '5 2 8', expectedOutput: '2' },
      { input: '1 1 1', expectedOutput: '1' },
    ],
  },
  {
    id: 'cpp-ex-1-57',
    title: 'Check Positive Negative Zero',
    titleZh: '判断正负零',
    difficulty: 'easy',
    level: 1,
    category: 'Operators',
    categoryZh: '运算符',
    tags: ['ternary', 'comparison'],
    description: 'Read an integer. Print "Positive", "Negative", or "Zero" using nested ternary.',
    descriptionZh: '读入一个整数，用嵌套三元运算输出 "Positive"、"Negative" 或 "Zero"。',
    examples: [{ input: '-3', output: 'Negative' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Classify number as Positive/Negative/Zero
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Nested ternary
    cout << (n > 0 ? "Positive" : (n < 0 ? "Negative" : "Zero")) << endl;
    return 0;
}`,
    hints: ['Nested ternary: n > 0 ? "Positive" : (n < 0 ? "Negative" : "Zero")', 'Three cases: positive, negative, zero'],
    hintsZh: ['嵌套三元：n > 0 ? "Positive" : (n < 0 ? "Negative" : "Zero")', '三种情况：正、负、零'],
    testCases: [
      { input: '-3', expectedOutput: 'Negative' },
      { input: '5', expectedOutput: 'Positive' },
      { input: '0', expectedOutput: 'Zero' },
    ],
  },
  {
    id: 'cpp-ex-1-58',
    title: 'Distance Between Points',
    titleZh: '两点间距离',
    difficulty: 'easy',
    level: 1,
    category: 'Arithmetic',
    categoryZh: '算术运算',
    tags: ['cmath', 'sqrt', 'pow'],
    description: 'Read four numbers x1 y1 x2 y2. Print the Euclidean distance with 2 decimal places.',
    descriptionZh: '读入四个数 x1 y1 x2 y2，输出欧几里得距离，保留两位小数。',
    examples: [{ input: '0 0 3 4', output: '5.00' }],
    starterCode: `#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main() {
    // TODO: Calculate distance between two points
    
    return 0;
}`,
    solution: `#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main() {
    double x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;
    // Distance formula
    double dist = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
    cout << fixed << setprecision(2) << dist << endl;
    return 0;
}`,
    hints: ['Distance = sqrt((x2-x1)^2 + (y2-y1)^2)', 'Use pow() and sqrt() from <cmath>'],
    hintsZh: ['距离 = sqrt((x2-x1)^2 + (y2-y1)^2)', '使用 <cmath> 中的 pow() 和 sqrt()'],
    testCases: [
      { input: '0 0 3 4', expectedOutput: '5.00' },
      { input: '1 1 4 5', expectedOutput: '5.00' },
    ],
  },
  {
    id: 'cpp-ex-1-59',
    title: 'First and Last Character',
    titleZh: '首尾字符',
    difficulty: 'easy',
    level: 1,
    category: 'Strings',
    categoryZh: '字符串',
    tags: ['string', 'indexing'],
    description: 'Read a word. Print its first and last character separated by a space.',
    descriptionZh: '读入一个单词，输出首字符和尾字符，空格分隔。',
    examples: [{ input: 'hello', output: 'h o' }],
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // TODO: Print first and last character
    
    return 0;
}`,
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    // Access first with [0] and last with [length-1]
    cout << s[0] << " " << s[s.length() - 1] << endl;
    return 0;
}`,
    hints: ['First char: s[0], Last char: s[s.length()-1]', 'Or use s.front() and s.back()'],
    hintsZh: ['首字符：s[0]，尾字符：s[s.length()-1]', '或使用 s.front() 和 s.back()'],
    testCases: [
      { input: 'hello', expectedOutput: 'h o' },
      { input: 'A', expectedOutput: 'A A' },
    ],
  },
  {
    id: 'cpp-ex-1-60',
    title: 'Compound Assignment Operators',
    titleZh: '复合赋值运算符',
    difficulty: 'easy',
    level: 1,
    category: 'Operators',
    categoryZh: '运算符',
    tags: ['operators', 'assignment'],
    description: 'Read an integer n. Print n after +=5, then after *=2, then after -=3, each on a new line. Apply operations sequentially.',
    descriptionZh: '读入整数 n，依次输出 +=5、*=2、-=3 后的值，每个一行。操作依次执行。',
    examples: [{ input: '10', output: '15\n30\n27' }],
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Apply compound assignment operators sequentially
    
    return 0;
}`,
    solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    n += 5;   // Add 5
    cout << n << endl;
    n *= 2;   // Multiply by 2
    cout << n << endl;
    n -= 3;   // Subtract 3
    cout << n << endl;
    return 0;
}`,
    hints: ['+= adds and assigns, *= multiplies and assigns', 'Operations are applied sequentially to the same variable'],
    hintsZh: ['+= 加后赋值，*= 乘后赋值', '操作依次作用于同一个变量'],
    testCases: [
      { input: '10', expectedOutput: '15\n30\n27' },
      { input: '0', expectedOutput: '5\n10\n7' },
    ],
  },
];
