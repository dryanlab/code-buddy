// Script to add challenges to every lesson in cpp-lessons.ts
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'cpp-lessons.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Challenges for each lesson, keyed by variable name
const challengesByLesson = {
  // ===== MODULE 1: C++ BASICS =====
  cpp_1_1: [ // Hello, Compiler!
    {
      title: "Greeting Card Generator",
      description: "Print a greeting card with a border made of asterisks.\\nCreate a 3-line card: border, message, border.\\n打印一张带星号边框的贺卡。创建3行：边框、消息、边框。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    // Print a greeting card:
    // **********
    // * Hello! *
    // **********
    
    return 0;
}`,
      hint: "Use cout for each line. The border is 10 asterisks.\\n每行用cout。边框是10个星号。",
      solution: `#include <iostream>
using namespace std;

int main() {
    cout << "**********" << endl;
    cout << "* Hello! *" << endl;
    cout << "**********" << endl;
    return 0;
}`,
      expectedOutput: "**********\\n* Hello! *\\n**********",
    },
    {
      title: "ASCII Art Triangle",
      description: "Print a right triangle made of stars using 3 lines.\\n用星号打印一个直角三角形，共3行。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    // Print:
    // *
    // **
    // ***
    
    return 0;
}`,
      hint: "Print each line separately with cout.\\n用cout分别打印每行。",
      solution: `#include <iostream>
using namespace std;

int main() {
    cout << "*" << endl;
    cout << "**" << endl;
    cout << "***" << endl;
    return 0;
}`,
      expectedOutput: "*\\n**\\n***",
    },
  ],

  cpp_1_2: [ // Types are Serious Business
    {
      title: "Type Size Reporter",
      description: "Print the size in bytes of int, double, char, and bool using sizeof().\\n使用sizeof()打印int、double、char和bool的字节大小。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    // Print: "int: X bytes" for each type
    // on separate lines
    
    return 0;
}`,
      hint: "sizeof(int) returns the size. Cast to int if needed.\\nsizeof(int)返回大小。",
      solution: `#include <iostream>
using namespace std;

int main() {
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "double: " << sizeof(double) << " bytes" << endl;
    cout << "char: " << sizeof(char) << " bytes" << endl;
    cout << "bool: " << sizeof(bool) << " bytes" << endl;
    return 0;
}`,
      expectedOutput: "int: 4 bytes\\ndouble: 8 bytes\\nchar: 1 bytes\\nbool: 1 bytes",
    },
    {
      title: "Temperature Converter",
      description: "Read a Fahrenheit temperature (double) and convert to Celsius.\\nFormula: C = (F - 32) * 5.0 / 9.0. Print with 1 decimal place.\\n读取华氏温度并转换为摄氏度。公式：C = (F - 32) * 5.0 / 9.0",
      starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double fahrenheit;
    cin >> fahrenheit;
    // Convert and print: "XXX.X C"
    
    return 0;
}`,
      hint: "Use fixed << setprecision(1) for 1 decimal place.\\n用fixed << setprecision(1)保留1位小数。",
      solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double fahrenheit;
    cin >> fahrenheit;
    double celsius = (fahrenheit - 32) * 5.0 / 9.0;
    cout << fixed << setprecision(1) << celsius << " C" << endl;
    return 0;
}`,
      expectedOutput: "37.8 C",
    },
  ],

  cpp_1_3: [ // Input & Output Mastery
    {
      title: "Receipt Printer",
      description: "Read item name (string) and price (double). Print a formatted receipt.\\n读取商品名和价格，打印格式化收据。\\nOutput: 'Item: [name]' then 'Price: $X.XX'",
      starterCode: `#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
    string item;
    double price;
    cin >> item >> price;
    // Print formatted receipt
    
    return 0;
}`,
      hint: "Use fixed << setprecision(2) for currency format.\\n用fixed << setprecision(2)格式化货币。",
      solution: `#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main() {
    string item;
    double price;
    cin >> item >> price;
    cout << "Item: " << item << endl;
    cout << "Price: $" << fixed << setprecision(2) << price << endl;
    return 0;
}`,
      expectedOutput: "Item: Apple\\nPrice: $1.50",
    },
    {
      title: "Mad Libs Generator",
      description: "Read a noun, adjective, and verb (one word each). Print: 'The [adj] [noun] [verb]s happily.'\\n读取名词、形容词和动词，打印：'The [adj] [noun] [verb]s happily.'",
      starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string noun, adj, verb;
    cin >> noun >> adj >> verb;
    // Print the mad lib sentence
    
    return 0;
}`,
      hint: "Concatenate with << between each part.\\n用<<连接每个部分。",
      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string noun, adj, verb;
    cin >> noun >> adj >> verb;
    cout << "The " << adj << " " << noun << " " << verb << "s happily." << endl;
    return 0;
}`,
      expectedOutput: "The happy cat dance happily.",
    },
  ],

  cpp_1_4: [ // Math & Operators
    {
      title: "Circle Calculator",
      description: "Read radius (double). Print area and circumference, each on its own line, with 2 decimal places.\\nUse π = 3.14159265. Format: 'Area: X.XX' and 'Circumference: X.XX'\\n读取半径，打印面积和周长（2位小数）。",
      starterCode: `#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

int main() {
    double radius;
    cin >> radius;
    const double PI = 3.14159265;
    // Calculate and print area and circumference
    
    return 0;
}`,
      hint: "Area = PI * r * r, Circumference = 2 * PI * r.\\n面积 = PI * r * r，周长 = 2 * PI * r。",
      solution: `#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

int main() {
    double radius;
    cin >> radius;
    const double PI = 3.14159265;
    double area = PI * radius * radius;
    double circ = 2 * PI * radius;
    cout << fixed << setprecision(2);
    cout << "Area: " << area << endl;
    cout << "Circumference: " << circ << endl;
    return 0;
}`,
      expectedOutput: "Area: 78.54\\nCircumference: 31.42",
    },
    {
      title: "Digit Extractor",
      description: "Read a 3-digit integer. Print each digit on a separate line (hundreds, tens, ones).\\n读取一个三位整数，分别打印百位、十位和个位。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num;
    // Extract and print each digit
    
    return 0;
}`,
      hint: "Hundreds: num/100, Tens: (num/10)%10, Ones: num%10.\\n百位：num/100，十位：(num/10)%10，个位：num%10。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num;
    cout << num / 100 << endl;
    cout << (num / 10) % 10 << endl;
    cout << num % 10 << endl;
    return 0;
}`,
      expectedOutput: "4\\n5\\n6",
    },
  ],

  cpp_1_5: [ // Strings: Not as Easy as Python
    {
      title: "String Reverser",
      description: "Read a single word and print it reversed.\\n读取一个单词并反向打印。",
      starterCode: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string word;
    cin >> word;
    // Reverse and print the word
    
    return 0;
}`,
      hint: "Use reverse(word.begin(), word.end()) or loop backwards.\\n用reverse()或从后向前循环。",
      solution: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string word;
    cin >> word;
    reverse(word.begin(), word.end());
    cout << word << endl;
    return 0;
}`,
      expectedOutput: "olleh",
    },
    {
      title: "Vowel Counter",
      description: "Read a single word and count the number of vowels (a, e, i, o, u, case-insensitive).\\n读取一个单词，统计元音字母数量（不区分大小写）。",
      starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string word;
    cin >> word;
    // Count and print number of vowels
    
    return 0;
}`,
      hint: "Loop through each char, check if it's a vowel using tolower().\\n遍历每个字符，用tolower()检查是否是元音。",
      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string word;
    cin >> word;
    int count = 0;
    for (char c : word) {
        c = tolower(c);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    cout << count << endl;
    return 0;
}`,
      expectedOutput: "2",
    },
  ],

  cpp_1_6: [ // First C++ Projects
    {
      title: "Number Guessing Setup",
      description: "Create a program that generates a 'secret' number (42) and asks the user for a guess. Print 'Too high', 'Too low', or 'Correct!' based on input.\\n创建一个猜数字程序。密码是42，根据输入打印提示。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int secret = 42;
    int guess;
    cin >> guess;
    // Compare and print result
    
    return 0;
}`,
      hint: "Use if/else if/else to compare guess with secret.\\n用if/else if/else比较猜测和密码。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int secret = 42;
    int guess;
    cin >> guess;
    if (guess > secret) {
        cout << "Too high" << endl;
    } else if (guess < secret) {
        cout << "Too low" << endl;
    } else {
        cout << "Correct!" << endl;
    }
    return 0;
}`,
      expectedOutput: "Correct!",
    },
    {
      title: "Simple Calculator",
      description: "Read two doubles and an operator (+, -, *, /). Print the result with 2 decimal places. For division by zero, print 'Error'.\\n读取两个数和运算符，打印结果（2位小数）。除以零打印'Error'。",
      starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a, b;
    char op;
    cin >> a >> op >> b;
    // Perform operation and print result
    
    return 0;
}`,
      hint: "Use if/else if for each operator. Check b==0 for division.\\n对每个运算符用if/else if。除法检查b==0。",
      solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a, b;
    char op;
    cin >> a >> op >> b;
    cout << fixed << setprecision(2);
    if (op == '+') cout << a + b << endl;
    else if (op == '-') cout << a - b << endl;
    else if (op == '*') cout << a * b << endl;
    else if (op == '/') {
        if (b == 0) cout << "Error" << endl;
        else cout << a / b << endl;
    }
    return 0;
}`,
      expectedOutput: "7.50",
    },
  ],

  // ===== MODULE 2: CONTROL FLOW =====
  cpp_2_1: [ // if/else with Braces
    {
      title: "Grade Classifier",
      description: "Read a score (0-100). Print the letter grade: A (90+), B (80+), C (70+), D (60+), F (below 60).\\n读取分数(0-100)，打印字母等级。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int score;
    cin >> score;
    // Print letter grade
    
    return 0;
}`,
      hint: "Use if/else if chain starting from the highest grade.\\n从最高等级开始用if/else if链。",
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
      expectedOutput: "B",
    },
    {
      title: "Leap Year Checker",
      description: "Read a year. Print 'Leap' if it's a leap year, 'Not leap' otherwise.\\nRules: divisible by 4, but not by 100, unless also by 400.\\n读取年份，判断是否是闰年。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int year;
    cin >> year;
    // Check and print leap year status
    
    return 0;
}`,
      hint: "Leap if (year%4==0 && year%100!=0) || (year%400==0).\\n闰年条件：能被4整除但不能被100整除，或能被400整除。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int year;
    cin >> year;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        cout << "Leap" << endl;
    } else {
        cout << "Not leap" << endl;
    }
    return 0;
}`,
      expectedOutput: "Leap",
    },
  ],

  cpp_2_2: [ // switch & Ternary
    {
      title: "Day of Week",
      description: "Read an integer 1-7. Print the day name using a switch statement (1=Monday...7=Sunday).\\n读取1-7的整数，用switch打印星期名称。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int day;
    cin >> day;
    // Use switch to print day name
    
    return 0;
}`,
      hint: "switch(day) { case 1: cout << \"Monday\"; break; ... }\\n用switch和break。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int day;
    cin >> day;
    switch (day) {
        case 1: cout << "Monday" << endl; break;
        case 2: cout << "Tuesday" << endl; break;
        case 3: cout << "Wednesday" << endl; break;
        case 4: cout << "Thursday" << endl; break;
        case 5: cout << "Friday" << endl; break;
        case 6: cout << "Saturday" << endl; break;
        case 7: cout << "Sunday" << endl; break;
        default: cout << "Invalid" << endl;
    }
    return 0;
}`,
      expectedOutput: "Wednesday",
    },
    {
      title: "Absolute Value with Ternary",
      description: "Read an integer. Print its absolute value using ONLY the ternary operator (no if/else, no abs()).\\n读取整数，仅用三元运算符打印绝对值。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Use ternary operator to print absolute value
    
    return 0;
}`,
      hint: "result = (n >= 0) ? n : -n;\\n结果 = (n >= 0) ? n : -n;",
      solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << (n >= 0 ? n : -n) << endl;
    return 0;
}`,
      expectedOutput: "5",
    },
  ],

  cpp_2_3: [ // Loops: for, while, do-while
    {
      title: "Multiplication Table",
      description: "Read an integer n. Print its multiplication table from 1 to 10.\\nFormat: 'n x i = result' on each line.\\n读取整数n，打印1到10的乘法表。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Print multiplication table
    
    return 0;
}`,
      hint: "Use a for loop from 1 to 10.\\n用for循环从1到10。",
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
      expectedOutput: "5 x 1 = 5\\n5 x 2 = 10\\n5 x 3 = 15\\n5 x 4 = 20\\n5 x 5 = 25\\n5 x 6 = 30\\n5 x 7 = 35\\n5 x 8 = 40\\n5 x 9 = 45\\n5 x 10 = 50",
    },
    {
      title: "Sum Until Zero",
      description: "Read integers until 0 is entered. Print the running total.\\nUse a while or do-while loop.\\n读取整数直到输入0，打印总和。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;
    // Read numbers until 0, accumulate sum
    
    cout << sum << endl;
    return 0;
}`,
      hint: "while loop: read num, if num==0 break, else sum += num.\\n用while循环读取，遇0停止。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;
    while (true) {
        cin >> num;
        if (num == 0) break;
        sum += num;
    }
    cout << sum << endl;
    return 0;
}`,
      expectedOutput: "15",
    },
  ],

  cpp_2_4: [ // Loop Challenges
    {
      title: "Diamond Pattern",
      description: "Read odd integer n. Print a diamond of stars with max width n.\\nExample for n=5:\\n  *\\n ***\\n*****\\n ***\\n  *\\n读取奇数n，打印星号菱形。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Print diamond pattern
    
    return 0;
}`,
      hint: "Upper half: loop 1 to n step 2 for stars. Lower half: n-2 down to 1 step 2. Print spaces before stars.\\n上半部分递增，下半部分递减。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Upper half including middle
    for (int i = 1; i <= n; i += 2) {
        for (int j = 0; j < (n - i) / 2; j++) cout << " ";
        for (int j = 0; j < i; j++) cout << "*";
        cout << endl;
    }
    // Lower half
    for (int i = n - 2; i >= 1; i -= 2) {
        for (int j = 0; j < (n - i) / 2; j++) cout << " ";
        for (int j = 0; j < i; j++) cout << "*";
        cout << endl;
    }
    return 0;
}`,
      expectedOutput: "  *\\n ***\\n*****\\n ***\\n  *",
    },
    {
      title: "Prime Number Checker",
      description: "Read integer n. Print 'Prime' or 'Not prime'.\\n读取整数n，打印'Prime'或'Not prime'。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Check if prime and print result
    
    return 0;
}`,
      hint: "Check divisors from 2 to sqrt(n). If any divides n, it's not prime. Handle n<=1 separately.\\n检查2到sqrt(n)的因子。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n <= 1) {
        cout << "Not prime" << endl;
        return 0;
    }
    bool isPrime = true;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    cout << (isPrime ? "Prime" : "Not prime") << endl;
    return 0;
}`,
      expectedOutput: "Prime",
    },
  ],

  // ===== MODULE 3: FUNCTIONS & ARRAYS =====
  cpp_3_1: [ // Functions with Types
    {
      title: "Power Function",
      description: "Write a function int power(int base, int exp) that computes base^exp using a loop. Read base and exp from input.\\n写一个power函数用循环计算幂。",
      starterCode: `#include <iostream>
using namespace std;

// Write power function here

int main() {
    int base, exp;
    cin >> base >> exp;
    cout << power(base, exp) << endl;
    return 0;
}`,
      hint: "Loop exp times, multiply result by base each time.\\n循环exp次，每次乘以base。",
      solution: `#include <iostream>
using namespace std;

int power(int base, int exp) {
    int result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

int main() {
    int base, exp;
    cin >> base >> exp;
    cout << power(base, exp) << endl;
    return 0;
}`,
      expectedOutput: "8",
    },
    {
      title: "Overloaded Max Function",
      description: "Write TWO overloaded functions: max of 2 ints and max of 3 ints. Print both results.\\n写两个重载的max函数：2个int和3个int的最大值。",
      starterCode: `#include <iostream>
using namespace std;

// Write two overloaded max functions

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max(a, b) << endl;
    cout << max(a, b, c) << endl;
    return 0;
}`,
      hint: "First max takes 2 params, second takes 3. Use ternary or if/else.\\n第一个max取2个参数，第二个取3个。",
      solution: `#include <iostream>
using namespace std;

int max(int a, int b) {
    return (a > b) ? a : b;
}

int max(int a, int b, int c) {
    return max(max(a, b), c);
}

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << max(a, b) << endl;
    cout << max(a, b, c) << endl;
    return 0;
}`,
      expectedOutput: "7\\n9",
    },
  ],

  cpp_3_2: [ // Pass by Value vs Reference
    {
      title: "Swap Function",
      description: "Write a void swap(int& a, int& b) function that swaps two integers using pass by reference. Read two ints, swap them, print both.\\n写一个swap函数用引用交换两个整数。",
      starterCode: `#include <iostream>
using namespace std;

// Write swap function with references

int main() {
    int a, b;
    cin >> a >> b;
    swap(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
      hint: "Use int& for reference parameters. temp = a; a = b; b = temp;\\n用int&做引用参数。",
      solution: `#include <iostream>
using namespace std;

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int a, b;
    cin >> a >> b;
    swap(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
      expectedOutput: "20 10",
    },
    {
      title: "Normalize Vector",
      description: "Write void clamp(int& val, int lo, int hi) that clamps val to range [lo, hi]. Read 3 values, clamp each to [0, 100], print them.\\n写clamp函数将值限制在[lo,hi]范围内。",
      starterCode: `#include <iostream>
using namespace std;

// Write clamp function

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    clamp(a, 0, 100);
    clamp(b, 0, 100);
    clamp(c, 0, 100);
    cout << a << " " << b << " " << c << endl;
    return 0;
}`,
      hint: "If val < lo, val = lo. If val > hi, val = hi. Use reference parameter.\\n如果val<lo则val=lo，如果val>hi则val=hi。",
      solution: `#include <iostream>
using namespace std;

void clamp(int& val, int lo, int hi) {
    if (val < lo) val = lo;
    if (val > hi) val = hi;
}

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    clamp(a, 0, 100);
    clamp(b, 0, 100);
    clamp(c, 0, 100);
    cout << a << " " << b << " " << c << endl;
    return 0;
}`,
      expectedOutput: "0 50 100",
    },
  ],

  cpp_3_3: [ // Arrays & Vectors
    {
      title: "Vector Statistics",
      description: "Read n, then n integers into a vector. Print the min, max, and average (1 decimal place).\\n读取n个整数到vector，打印最小值、最大值和平均值。",
      starterCode: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    // Find and print min, max, average
    
    return 0;
}`,
      hint: "Loop through vector to find min/max. Sum all for average. Use fixed << setprecision(1).\\n遍历找最小最大值，求和算平均。",
      solution: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    int mn = v[0], mx = v[0], sum = 0;
    for (int x : v) {
        if (x < mn) mn = x;
        if (x > mx) mx = x;
        sum += x;
    }
    cout << "Min: " << mn << endl;
    cout << "Max: " << mx << endl;
    cout << "Avg: " << fixed << setprecision(1) << (double)sum / n << endl;
    return 0;
}`,
      expectedOutput: "Min: 1\\nMax: 9\\nAvg: 5.0",
    },
    {
      title: "Reverse a Vector",
      description: "Read n integers into a vector. Reverse it WITHOUT using std::reverse. Print space-separated.\\n读取n个整数，不用std::reverse手动反转，空格分隔输出。",
      starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    // Reverse manually and print
    
    return 0;
}`,
      hint: "Swap v[i] and v[n-1-i] for i from 0 to n/2.\\n交换v[i]和v[n-1-i]。",
      solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    for (int i = 0; i < n / 2; i++) {
        int temp = v[i];
        v[i] = v[n - 1 - i];
        v[n - 1 - i] = temp;
    }
    for (int i = 0; i < n; i++) {
        if (i > 0) cout << " ";
        cout << v[i];
    }
    cout << endl;
    return 0;
}`,
      expectedOutput: "5 4 3 2 1",
    },
  ],

  cpp_3_4: [ // Advanced String Algorithms
    {
      title: "Palindrome Checker",
      description: "Read a word. Print 'Yes' if it's a palindrome, 'No' otherwise. Case-sensitive.\\n读取单词，判断是否是回文。区分大小写。",
      starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    // Check palindrome and print Yes/No
    
    return 0;
}`,
      hint: "Compare s[i] with s[s.size()-1-i] for i from 0 to s.size()/2.\\n比较首尾对应字符。",
      solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    cin >> s;
    bool isPalin = true;
    for (int i = 0; i < (int)s.size() / 2; i++) {
        if (s[i] != s[s.size() - 1 - i]) {
            isPalin = false;
            break;
        }
    }
    cout << (isPalin ? "Yes" : "No") << endl;
    return 0;
}`,
      expectedOutput: "Yes",
    },
    {
      title: "Word Frequency Counter",
      description: "Read a sentence (use getline). Count how many times a target word appears (case-sensitive). Input: first line is the sentence, second line is the target word.\\n读取句子和目标词，统计出现次数。",
      starterCode: `#include <iostream>
#include <string>
#include <sstream>
using namespace std;

int main() {
    string sentence, target;
    getline(cin, sentence);
    cin >> target;
    // Count occurrences of target word
    
    return 0;
}`,
      hint: "Use stringstream to extract words one by one and compare with target.\\n用stringstream逐个提取单词并与目标比较。",
      solution: `#include <iostream>
#include <string>
#include <sstream>
using namespace std;

int main() {
    string sentence, target;
    getline(cin, sentence);
    cin >> target;
    stringstream ss(sentence);
    string word;
    int count = 0;
    while (ss >> word) {
        if (word == target) count++;
    }
    cout << count << endl;
    return 0;
}`,
      expectedOutput: "3",
    },
  ],

  cpp_3_5: [ // Headers & Multi-file Organization
    {
      title: "Rectangle Class in One File",
      description: "Create a Rectangle class with width and height. Add area() and perimeter() methods. Read w and h, create Rectangle, print area and perimeter.\\n创建Rectangle类，包含area()和perimeter()方法。",
      starterCode: `#include <iostream>
using namespace std;

// Define Rectangle class with area() and perimeter()

int main() {
    double w, h;
    cin >> w >> h;
    // Create Rectangle and print results
    
    return 0;
}`,
      hint: "Class with public methods. area = w*h, perimeter = 2*(w+h).\\n面积=w*h，周长=2*(w+h)。",
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
    cout << "Area: " << r.area() << endl;
    cout << "Perimeter: " << r.perimeter() << endl;
    return 0;
}`,
      expectedOutput: "Area: 15\\nPerimeter: 16",
    },
    {
      title: "Utility Functions Library",
      description: "Write 3 utility functions: factorial(n), isPrime(n), and gcd(a,b). Read two integers and print factorial of first, isPrime of second, and gcd of both.\\n写3个工具函数：阶乘、素数判断、最大公约数。",
      starterCode: `#include <iostream>
using namespace std;

// Write factorial, isPrime, gcd functions

int main() {
    int a, b;
    cin >> a >> b;
    cout << "Factorial: " << factorial(a) << endl;
    cout << "Prime: " << (isPrime(b) ? "Yes" : "No") << endl;
    cout << "GCD: " << gcd(a, b) << endl;
    return 0;
}`,
      hint: "factorial: loop multiply. isPrime: check divisors to sqrt. gcd: Euclidean algorithm (while b!=0).\\n阶乘用循环，素数检查因子，GCD用欧几里得算法。",
      solution: `#include <iostream>
using namespace std;

long long factorial(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) result *= i;
    return result;
}

bool isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}

int gcd(int a, int b) {
    while (b != 0) {
        int t = b;
        b = a % b;
        a = t;
    }
    return a;
}

int main() {
    int a, b;
    cin >> a >> b;
    cout << "Factorial: " << factorial(a) << endl;
    cout << "Prime: " << (isPrime(b) ? "Yes" : "No") << endl;
    cout << "GCD: " << gcd(a, b) << endl;
    return 0;
}`,
      expectedOutput: "Factorial: 120\\nPrime: Yes\\nGCD: 5",
    },
  ],

  // ===== MODULE 4: POINTERS & OOP =====
  cpp_4_1: [ // Pointers: Memory Addresses
    {
      title: "Pointer Arithmetic",
      description: "Create an array of 5 ints. Use a pointer to iterate through and print each element.\\n创建5个int的数组，用指针遍历并打印每个元素。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    // Use pointer to print each element
    
    return 0;
}`,
      hint: "int* p = arr; loop 5 times, print *p, then p++.\\nint* p = arr; 循环5次，打印*p，然后p++。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int* p = arr;
    for (int i = 0; i < 5; i++) {
        cout << *p << endl;
        p++;
    }
    return 0;
}`,
      expectedOutput: "10\\n20\\n30\\n40\\n50",
    },
    {
      title: "Dynamic Array Sum",
      description: "Read n, then dynamically allocate an array of n ints with new. Read values, print sum, then delete the array.\\n读取n，用new动态分配数组，读取值，打印总和，然后delete。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    // Dynamically allocate, read, sum, delete
    
    return 0;
}`,
      hint: "int* arr = new int[n]; ... delete[] arr;\\n用new分配，delete[]释放。",
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
      expectedOutput: "15",
    },
  ],

  cpp_4_2: [ // Structs & Classes
    {
      title: "Student Struct",
      description: "Create a struct Student with name (string), age (int), gpa (double). Read data for 2 students, print the one with higher GPA.\\n创建Student结构体，读取2个学生数据，打印GPA更高的。",
      starterCode: `#include <iostream>
#include <string>
using namespace std;

// Define Student struct

int main() {
    // Read 2 students and print the one with higher GPA
    
    return 0;
}`,
      hint: "struct Student { string name; int age; double gpa; }; Compare s1.gpa with s2.gpa.\\n用结构体存储，比较gpa。",
      solution: `#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    int age;
    double gpa;
};

int main() {
    Student s1, s2;
    cin >> s1.name >> s1.age >> s1.gpa;
    cin >> s2.name >> s2.age >> s2.gpa;
    Student& best = (s1.gpa >= s2.gpa) ? s1 : s2;
    cout << best.name << " " << best.gpa << endl;
    return 0;
}`,
      expectedOutput: "Alice 3.9",
    },
    {
      title: "Bank Account Class",
      description: "Create a BankAccount class with private balance. Add deposit(amount), withdraw(amount), and getBalance() methods. Withdraw should not allow negative balance.\\n创建BankAccount类，包含存款、取款和查余额方法。",
      starterCode: `#include <iostream>
using namespace std;

// Define BankAccount class

int main() {
    BankAccount acc(100.0);
    acc.deposit(50.0);
    acc.withdraw(30.0);
    acc.withdraw(200.0);  // Should fail
    cout << acc.getBalance() << endl;
    return 0;
}`,
      hint: "Private double balance. Constructor sets initial balance. withdraw checks if amount <= balance.\\n私有余额，withdraw检查余额是否足够。",
      solution: `#include <iostream>
using namespace std;

class BankAccount {
    double balance;
public:
    BankAccount(double initial) : balance(initial) {}
    void deposit(double amount) { balance += amount; }
    void withdraw(double amount) {
        if (amount <= balance) balance -= amount;
    }
    double getBalance() { return balance; }
};

int main() {
    BankAccount acc(100.0);
    acc.deposit(50.0);
    acc.withdraw(30.0);
    acc.withdraw(200.0);
    cout << acc.getBalance() << endl;
    return 0;
}`,
      expectedOutput: "120",
    },
  ],

  cpp_4_3: [ // Dynamic Memory & Smart Pointers
    {
      title: "Smart Pointer Usage",
      description: "Create a class Point with x, y coordinates. Use unique_ptr to manage a Point. Print the coordinates.\\n用unique_ptr管理Point对象，打印坐标。",
      starterCode: `#include <iostream>
#include <memory>
using namespace std;

class Point {
public:
    double x, y;
    Point(double x, double y) : x(x), y(y) {}
};

int main() {
    // Create unique_ptr<Point> and print coordinates
    
    return 0;
}`,
      hint: "auto p = make_unique<Point>(3.0, 4.0); Access with p->x.\\n用make_unique创建，p->x访问。",
      solution: `#include <iostream>
#include <memory>
using namespace std;

class Point {
public:
    double x, y;
    Point(double x, double y) : x(x), y(y) {}
};

int main() {
    auto p = make_unique<Point>(3.0, 4.0);
    cout << "(" << p->x << ", " << p->y << ")" << endl;
    return 0;
}`,
      expectedOutput: "(3, 4)",
    },
    {
      title: "Linked List with new/delete",
      description: "Create a simple singly-linked list with 3 nodes (values 1, 2, 3). Print all values, then delete all nodes.\\n用new创建3个节点的链表，打印后delete释放。",
      starterCode: `#include <iostream>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

int main() {
    // Create linked list: 1 -> 2 -> 3
    // Print all values
    // Delete all nodes
    
    return 0;
}`,
      hint: "Node* head = new Node(1); head->next = new Node(2); etc. Loop to print and delete.\\n创建节点并链接。",
      solution: `#include <iostream>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

int main() {
    Node* head = new Node(1);
    head->next = new Node(2);
    head->next->next = new Node(3);
    
    Node* curr = head;
    while (curr) {
        cout << curr->val << endl;
        curr = curr->next;
    }
    
    curr = head;
    while (curr) {
        Node* temp = curr;
        curr = curr->next;
        delete temp;
    }
    return 0;
}`,
      expectedOutput: "1\\n2\\n3",
    },
  ],

  cpp_4_4: [ // Inheritance & Polymorphism
    {
      title: "Shape Hierarchy",
      description: "Create a base class Shape with virtual double area(). Derive Circle (radius) and Square (side). Create one of each, print areas.\\n创建Shape基类，派生Circle和Square，打印面积。",
      starterCode: `#include <iostream>
#include <cmath>
using namespace std;

// Define Shape, Circle, Square classes

int main() {
    Circle c(5.0);
    Square s(4.0);
    cout << "Circle: " << c.area() << endl;
    cout << "Square: " << s.area() << endl;
    return 0;
}`,
      hint: "Shape has virtual double area() = 0; Circle overrides with PI*r*r. Square with s*s.\\nShape用纯虚函数，派生类重写。",
      solution: `#include <iostream>
#include <cmath>
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
    double area() override { return M_PI * radius * radius; }
};

class Square : public Shape {
    double side;
public:
    Square(double s) : side(s) {}
    double area() override { return side * side; }
};

int main() {
    Circle c(5.0);
    Square s(4.0);
    cout << "Circle: " << c.area() << endl;
    cout << "Square: " << s.area() << endl;
    return 0;
}`,
      expectedOutput: "Circle: 78.5398\\nSquare: 16",
    },
    {
      title: "Virtual Function Polymorphism",
      description: "Create Animal base with virtual speak(). Derive Dog ('Woof!') and Cat ('Meow!'). Store both in Animal* array, call speak() on each.\\n创建Animal基类和Dog、Cat派生类，演示多态。",
      starterCode: `#include <iostream>
using namespace std;

// Define Animal, Dog, Cat classes

int main() {
    // Create array of Animal*, demonstrate polymorphism
    
    return 0;
}`,
      hint: "Animal* animals[2] = { new Dog(), new Cat() }; Loop and call ->speak(). Don't forget delete.\\n用基类指针数组调用虚函数。",
      solution: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void speak() = 0;
    virtual ~Animal() {}
};

class Dog : public Animal {
public:
    void speak() override { cout << "Woof!" << endl; }
};

class Cat : public Animal {
public:
    void speak() override { cout << "Meow!" << endl; }
};

int main() {
    Animal* animals[2] = { new Dog(), new Cat() };
    for (int i = 0; i < 2; i++) {
        animals[i]->speak();
        delete animals[i];
    }
    return 0;
}`,
      expectedOutput: "Woof!\\nMeow!",
    },
  ],

  // ===== MODULE 5: STL POWER =====
  cpp_5_1: [ // Maps & Sets
    {
      title: "Character Frequency Map",
      description: "Read a word. Use map<char, int> to count character frequencies. Print each char and count sorted by char.\\n读取单词，用map统计字符频率并打印。",
      starterCode: `#include <iostream>
#include <string>
#include <map>
using namespace std;

int main() {
    string word;
    cin >> word;
    // Count and print character frequencies
    
    return 0;
}`,
      hint: "map<char,int> freq; for each char c in word: freq[c]++; Then iterate map.\\n遍历字符串统计频率。",
      solution: `#include <iostream>
#include <string>
#include <map>
using namespace std;

int main() {
    string word;
    cin >> word;
    map<char, int> freq;
    for (char c : word) freq[c]++;
    for (auto& [ch, cnt] : freq) {
        cout << ch << ": " << cnt << endl;
    }
    return 0;
}`,
      expectedOutput: "a: 1\\nb: 1\\nn: 2\\na is shown once",
    },
    {
      title: "Unique Elements with Set",
      description: "Read n integers. Use set to find and print unique elements in sorted order, one per line.\\n读取n个整数，用set去重并排序打印。",
      starterCode: `#include <iostream>
#include <set>
using namespace std;

int main() {
    int n, x;
    cin >> n;
    // Read n integers, store in set, print unique sorted
    
    return 0;
}`,
      hint: "set<int> s; loop n times: cin >> x; s.insert(x); Then print all elements.\\n用set自动去重排序。",
      solution: `#include <iostream>
#include <set>
using namespace std;

int main() {
    int n, x;
    cin >> n;
    set<int> s;
    for (int i = 0; i < n; i++) {
        cin >> x;
        s.insert(x);
    }
    for (int val : s) {
        cout << val << endl;
    }
    return 0;
}`,
      expectedOutput: "1\\n2\\n3\\n5",
    },
  ],

  cpp_5_2: [ // Algorithms: sort, binary_search
    {
      title: "Custom Sort",
      description: "Read n integers. Sort them in descending order using sort() with a custom comparator. Print space-separated.\\n读取n个整数，用自定义比较器降序排序。",
      starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    // Sort descending and print
    
    return 0;
}`,
      hint: "sort(v.begin(), v.end(), [](int a, int b){ return a > b; });\\n用lambda表达式做比较器。",
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
      expectedOutput: "9 7 5 3 1",
    },
    {
      title: "Binary Search Application",
      description: "Read n sorted integers, then q queries. For each query, use binary_search to print 'Found' or 'Not found'.\\n读取n个有序整数和q个查询，用二分查找回答。",
      starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, q;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    cin >> q;
    // Answer q queries using binary_search
    
    return 0;
}`,
      hint: "binary_search(v.begin(), v.end(), target) returns bool.\\n返回true/false。",
      solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, q;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    cin >> q;
    while (q--) {
        int target;
        cin >> target;
        if (binary_search(v.begin(), v.end(), target)) {
            cout << "Found" << endl;
        } else {
            cout << "Not found" << endl;
        }
    }
    return 0;
}`,
      expectedOutput: "Found\\nNot found\\nFound",
    },
  ],

  cpp_5_3: [ // Stacks, Queues, Priority Queues
    {
      title: "Balanced Parentheses",
      description: "Read a string of parentheses ()[]{}. Print 'Balanced' or 'Not balanced' using a stack.\\n读取括号字符串，用栈判断是否平衡。",
      starterCode: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main() {
    string s;
    cin >> s;
    // Check if balanced using stack
    
    return 0;
}`,
      hint: "Push opening brackets. For closing, check if top matches. Stack must be empty at end.\\n遇左括号入栈，遇右括号检查栈顶是否匹配。",
      solution: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main() {
    string s;
    cin >> s;
    stack<char> st;
    bool balanced = true;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty()) { balanced = false; break; }
            char top = st.top(); st.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                balanced = false; break;
            }
        }
    }
    if (!st.empty()) balanced = false;
    cout << (balanced ? "Balanced" : "Not balanced") << endl;
    return 0;
}`,
      expectedOutput: "Balanced",
    },
    {
      title: "Top K Elements",
      description: "Read n integers and k. Print the k largest elements in descending order using a priority queue.\\n读取n个整数和k，用优先队列打印最大的k个元素。",
      starterCode: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    int n, k;
    cin >> n;
    // Read n integers into priority queue
    // Print top k elements
    
    return 0;
}`,
      hint: "priority_queue<int> pq; push all elements. Pop k times and print.\\n用最大堆，弹出k次。",
      solution: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    int n, k;
    cin >> n;
    priority_queue<int> pq;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        pq.push(x);
    }
    cin >> k;
    for (int i = 0; i < k; i++) {
        cout << pq.top() << endl;
        pq.pop();
    }
    return 0;
}`,
      expectedOutput: "9\\n7\\n5",
    },
  ],

  // ===== MODULE 6: COMPETITION PREP =====
  cpp_6_1: [ // Competition Programming Setup
    {
      title: "Fast I/O Template",
      description: "Read n integers and print their sum. Use ios_base::sync_with_stdio(false) and cin.tie(NULL) for fast I/O.\\n读取n个整数并打印总和，使用快速I/O。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    // Add fast I/O setup
    
    int n;
    cin >> n;
    // Read and sum n integers
    
    return 0;
}`,
      hint: "ios_base::sync_with_stdio(false); cin.tie(NULL); at start of main.\\n在main开始添加快速I/O。",
      solution: `#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cin >> n;
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        sum += x;
    }
    cout << sum << endl;
    return 0;
}`,
      expectedOutput: "15",
    },
    {
      title: "Frequency Array Pattern",
      description: "Read n integers (1 ≤ value ≤ 100). Print the most frequent value. If tie, print the smallest.\\n读取n个整数(1-100)，打印出现最多的值（相同频率取最小）。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    // Use frequency array to find most common element
    
    return 0;
}`,
      hint: "int freq[101] = {}; Count each value. Find max frequency, then find smallest value with that frequency.\\n用频率数组统计。",
      solution: `#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    int freq[101] = {};
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        freq[x]++;
    }
    int maxFreq = 0, result = 0;
    for (int i = 1; i <= 100; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            result = i;
        }
    }
    cout << result << endl;
    return 0;
}`,
      expectedOutput: "3",
    },
  ],

  cpp_6_2: [ // Greedy & Binary Search
    {
      title: "Coin Change Greedy",
      description: "Given coins [25, 10, 5, 1], read amount. Print minimum number of coins needed (greedy).\\n给定硬币面值[25,10,5,1]，读取金额，打印最少硬币数（贪心）。",
      starterCode: `#include <iostream>
using namespace std;

int main() {
    int amount;
    cin >> amount;
    int coins[] = {25, 10, 5, 1};
    // Greedy: count minimum coins
    
    return 0;
}`,
      hint: "For each coin value, take as many as possible: count += amount/coin; amount %= coin;\\n对每种硬币取尽量多。",
      solution: `#include <iostream>
using namespace std;

int main() {
    int amount;
    cin >> amount;
    int coins[] = {25, 10, 5, 1};
    int count = 0;
    for (int coin : coins) {
        count += amount / coin;
        amount %= coin;
    }
    cout << count << endl;
    return 0;
}`,
      expectedOutput: "6",
    },
    {
      title: "Binary Search: Find First True",
      description: "Read n sorted integers and a target. Find the index of the first element >= target using binary search. Print the index (0-based) or -1 if all elements are smaller.\\n在有序数组中用二分查找找第一个>=target的元素索引。",
      starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, target;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    cin >> target;
    // Binary search for first element >= target
    
    return 0;
}`,
      hint: "lo=0, hi=n. While lo<hi: mid=(lo+hi)/2. If v[mid]>=target: hi=mid, else lo=mid+1. Answer is lo (or -1 if lo==n).\\n标准lower_bound实现。",
      solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, target;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) cin >> v[i];
    cin >> target;
    int lo = 0, hi = n;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (v[mid] >= target) hi = mid;
        else lo = mid + 1;
    }
    cout << (lo < n ? lo : -1) << endl;
    return 0;
}`,
      expectedOutput: "2",
    },
  ],

  cpp_6_3: [ // Dynamic Programming
    {
      title: "Longest Increasing Subsequence Length",
      description: "Read n integers. Find the length of the longest increasing subsequence (LIS) using DP. Print the length.\\n读取n个整数，用DP求最长递增子序列长度。",
      starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    // DP for LIS length
    
    return 0;
}`,
      hint: "dp[i] = length of LIS ending at i. dp[i] = max(dp[j]+1) for all j<i where a[j]<a[i]. Answer = max of all dp[i].\\ndp[i] = 以i结尾的LIS长度。",
      solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    vector<int> dp(n, 1);
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (a[j] < a[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
    }
    cout << *max_element(dp.begin(), dp.end()) << endl;
    return 0;
}`,
      expectedOutput: "4",
    },
    {
      title: "0/1 Knapsack Problem",
      description: "Read n items (weight, value) and capacity W. Find maximum value using 0/1 knapsack DP.\\n读取n个物品(重量,价值)和容量W，用01背包DP求最大价值。",
      starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, W;
    cin >> n >> W;
    vector<int> w(n), v(n);
    for (int i = 0; i < n; i++) cin >> w[i] >> v[i];
    // 0/1 Knapsack DP
    
    return 0;
}`,
      hint: "2D DP: dp[i][j] = max value using first i items with capacity j. dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i-1]] + v[i-1]).\\n经典01背包转移方程。",
      solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, W;
    cin >> n >> W;
    vector<int> w(n), v(n);
    for (int i = 0; i < n; i++) cin >> w[i] >> v[i];
    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= W; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= w[i - 1]) {
                dp[i][j] = max(dp[i][j], dp[i - 1][j - w[i - 1]] + v[i - 1]);
            }
        }
    }
    cout << dp[n][W] << endl;
    return 0;
}`,
      expectedOutput: "220",
    },
  ],
};

// Generate the challenge section text for a single challenge
function makeChallengeSection(ch) {
  return `    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: ${JSON.stringify(ch.title)},
        description: ${JSON.stringify(ch.description)},
        starterCode: ${JSON.stringify(ch.starterCode)},
        hint: ${JSON.stringify(ch.hint)},
        solution: ${JSON.stringify(ch.solution)},
        expectedOutput: ${JSON.stringify(ch.expectedOutput)},
      },
    },`;
}

// For each lesson, find where to insert challenges (before the closing `  ],\n};`)
// We need to find the pattern:  `sections: [` ... `  ],\n};` for each const
const lessonVars = Object.keys(challengesByLesson);

let totalAdded = 0;

for (const varName of lessonVars) {
  const challenges = challengesByLesson[varName];
  if (!challenges || challenges.length === 0) continue;
  
  // Find the const declaration for this lesson
  const constPattern = `const ${varName}: Lesson = {`;
  const constIdx = content.indexOf(constPattern);
  if (constIdx === -1) {
    console.error(`Could not find ${varName}`);
    continue;
  }
  
  // Find the closing of this lesson's sections array
  // Look for the pattern `  ],\n};` after the const declaration
  // But we need to find the LAST `],` before the `};` that closes this lesson
  
  // Find the next `};` that's at the start of a line (closing the lesson object)
  // We need to find the `];` closing the sections array, which is right before some `  ],\n};`
  
  // Strategy: find the next lesson const or end of file, then search backwards for `  ],\n};`
  const nextConstIdx = content.indexOf('\nconst cpp_', constIdx + 1);
  const exportIdx = content.indexOf('\nexport const CPP_LESSONS', constIdx);
  const endBound = nextConstIdx !== -1 ? nextConstIdx : exportIdx;
  
  const lessonBlock = content.substring(constIdx, endBound);
  
  // Find the last occurrence of `  ],\n};` in this lesson block
  const closingPattern = '  ],\n};';
  const closingIdx = lessonBlock.lastIndexOf(closingPattern);
  if (closingIdx === -1) {
    console.error(`Could not find closing pattern for ${varName}`);
    continue;
  }
  
  // Insert challenges before the closing `  ],`
  const insertPoint = constIdx + closingIdx;
  
  const challengeText = challenges.map(ch => makeChallengeSection(ch)).join('\n');
  
  content = content.substring(0, insertPoint) + challengeText + '\n' + content.substring(insertPoint);
  totalAdded += challenges.length;
  console.log(`Added ${challenges.length} challenges to ${varName}`);
}

console.log(`\nTotal challenges added: ${totalAdded}`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('File written successfully.');
