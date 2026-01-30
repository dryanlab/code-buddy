const fs = require('fs');

let content = fs.readFileSync('src/data/ds-lessons.ts', 'utf8');

// Strategy: For each code block's closing backtick-comma, insert codeCpp after it.
// We'll match each Python code block by a unique snippet, then add codeCpp right after the closing.

const replacements = [
  // Block 1: Array Basics (line ~127)
  {
    after: `print("\\n📦 Box: Arrays are FAST for access, slower for insertion!")\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "Let me show you how arrays work!"
// Arrays in C++ = vectors

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    // Creating an array (vector)
    vector<string> fruits = {"apple", "banana", "cherry", "date", "elderberry"};
    vector<int> numbers = {10, 20, 30, 40, 50};

    // Indexing: access by position (starts at 0!)
    // 索引：通过位置访问（从0开始！）
    cout << "First fruit: " << fruits[0] << endl;    // apple
    cout << "Third fruit: " << fruits[2] << endl;    // cherry
    cout << "Last fruit: " << fruits[fruits.size()-1] << endl;  // elderberry

    // Length: how many items?
    cout << "Total fruits: " << fruits.size() << endl;  // 5

    // Modify an element
    fruits[1] = "blueberry";  // Replace banana
    cout << "Updated: [";
    for (int i = 0; i < fruits.size(); i++) {
        if (i > 0) cout << ", ";
        cout << "'" << fruits[i] << "'";
    }
    cout << "]" << endl;

    // Common operations & their TIME COMPLEXITY:
    // Access by index:  O(1) — instant! Like going to locker #3
    // Search for value:  O(n) — must check each one
    // Append to end:    O(1) — just add to the end
    // Insert at start:  O(n) — must shift everything!

    cout << "\\n📦 Box: Arrays are FAST for access, slower for insertion!" << endl;
    return 0;
}\`,`,
  },

  // Block 2: Linked List from Scratch (line ~330)
  {
    after: `# 📦 Box: "Unlike arrays, no shifting needed for inserts!"\``,
    codeCpp: `      codeCpp: \`// 🔗 Link: "Let's build a linked list step by step!"

#include <iostream>
#include <string>
using namespace std;

struct Node {
    string data;    // The value stored 存储的值
    Node* next;     // Pointer to next node 指向下一个节点
    Node(string d) : data(d), next(nullptr) {}
};

class LinkedList {
public:
    Node* head;     // First node 第一个节点
    LinkedList() : head(nullptr) {}

    void append(string data) {
        Node* newNode = new Node(data);
        if (!head) { head = newNode; return; }
        Node* current = head;
        while (current->next)    // Walk to the end 走到末尾
            current = current->next;
        current->next = newNode;
    }

    void display() {
        Node* current = head;
        while (current) {
            cout << current->data;
            if (current->next) cout << " → ";
            current = current->next;
        }
        cout << " → None" << endl;
    }
};

int main() {
    LinkedList myList;
    myList.append("A");
    myList.append("B");
    myList.append("C");
    myList.display();  // A → B → C → None

    // 🔗 Link: "See? Each node points to the next one!"
    // 📦 Box: "Unlike arrays, no shifting needed for inserts!"
    return 0;
}\`,`,
  },

  // Block 3: Inserting & Traversing (line ~402)
  {
    after: `print(f"Found 20 at position {pos}")  # 2\``,
    codeCpp: `      codeCpp: \`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int d) : data(d), next(nullptr) {}
};

class LinkedList {
public:
    Node* head;
    LinkedList() : head(nullptr) {}

    void prepend(int data) {
        // Insert at the beginning — O(1)! · 在开头插入——O(1)！
        Node* newNode = new Node(data);
        newNode->next = head;
        head = newNode;
    }

    void append(int data) {
        Node* newNode = new Node(data);
        if (!head) { head = newNode; return; }
        Node* current = head;
        while (current->next)
            current = current->next;
        current->next = newNode;
    }

    int search(int target) {
        // Find a value — O(n) · 查找值——O(n)
        Node* current = head;
        int position = 0;
        while (current) {
            if (current->data == target)
                return position;
            current = current->next;
            position++;
        }
        return -1;
    }

    void display() {
        Node* current = head;
        while (current) {
            cout << current->data;
            if (current->next) cout << " → ";
            current = current->next;
        }
        cout << " → None" << endl;
    }
};

int main() {
    LinkedList ll;
    ll.append(10);
    ll.append(20);
    ll.append(30);
    ll.prepend(5);   // Fast insert at start!
    ll.display();     // 5 → 10 → 20 → 30 → None

    int pos = ll.search(20);
    cout << "Found 20 at position " << pos << endl;  // 2
    return 0;
}\`,`,
  },

  // Block 4: Doubly Linked List (line ~633)
  {
    after: `print("\\n🔗 Link: Both directions work perfectly!")\``,
    codeCpp: `      codeCpp: \`// 🔗 Link: "Double the pointers, double the power!"

#include <iostream>
#include <string>
using namespace std;

struct DNode {
    string data;
    DNode* prev;    // ← pointer to previous 前一个
    DNode* next;    // → pointer to next 后一个
    DNode(string d) : data(d), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
public:
    DNode* head;
    DNode* tail;

    DoublyLinkedList() : head(nullptr), tail(nullptr) {}

    void append(string data) {
        DNode* newNode = new DNode(data);
        if (!head) { head = tail = newNode; return; }
        newNode->prev = tail;
        tail->next = newNode;
        tail = newNode;
    }

    void prepend(string data) {
        DNode* newNode = new DNode(data);
        if (!head) { head = tail = newNode; return; }
        newNode->next = head;
        head->prev = newNode;
        head = newNode;
    }

    bool deleteNode(string data) {
        // Delete first occurrence of data · 删除第一次出现的值
        DNode* current = head;
        while (current) {
            if (current->data == data) {
                if (current->prev)
                    current->prev->next = current->next;
                else
                    head = current->next;
                if (current->next)
                    current->next->prev = current->prev;
                else
                    tail = current->prev;
                delete current;
                return true;
            }
            current = current->next;
        }
        return false;
    }

    void displayForward() {
        DNode* current = head;
        cout << "Forward:  ";
        while (current) {
            cout << current->data;
            if (current->next) cout << " ↔ ";
            current = current->next;
        }
        cout << endl;
    }

    void displayBackward() {
        DNode* current = tail;
        cout << "Backward: ";
        while (current) {
            cout << current->data;
            if (current->prev) cout << " ↔ ";
            current = current->prev;
        }
        cout << endl;
    }
};

int main() {
    DoublyLinkedList dll;
    dll.append("A");
    dll.append("B");
    dll.append("C");
    dll.prepend("Z");
    dll.displayForward();   // Z ↔ A ↔ B ↔ C
    dll.displayBackward();  // C ↔ B ↔ A ↔ Z

    dll.deleteNode("A");
    dll.displayForward();   // Z ↔ B ↔ C
    cout << "\\n🔗 Link: Both directions work perfectly!" << endl;
    return 0;
}\`,`,
  },

  // Block 5: Stack (line ~838)
  {
    after: `plates.pop()  # Empty!\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "Let's build a stack!"

#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Stack {
    vector<string> items;
public:
    void push(string item) {
        items.push_back(item);
        cout << "  Pushed: " << item << " → Stack: [";
        for (int i = 0; i < items.size(); i++) {
            if (i > 0) cout << ", ";
            cout << "'" << items[i] << "'";
        }
        cout << "]" << endl;
    }

    string pop() {
        if (isEmpty()) {
            cout << "  Stack is empty! 栈是空的！" << endl;
            return "";
        }
        string item = items.back();
        items.pop_back();
        cout << "  Popped: " << item << " → Stack: [";
        for (int i = 0; i < items.size(); i++) {
            if (i > 0) cout << ", ";
            cout << "'" << items[i] << "'";
        }
        cout << "]" << endl;
        return item;
    }

    string peek() {
        if (isEmpty()) return "";
        return items.back();
    }

    bool isEmpty() { return items.empty(); }
    int size() { return items.size(); }
};

int main() {
    // Demo: Stack of plates! 🍽️
    cout << "🍽️ Stack of Plates Demo:" << endl;
    Stack plates;
    plates.push("Red Plate");
    plates.push("Blue Plate");
    plates.push("Green Plate");

    cout << "\\nTop plate: " << plates.peek() << endl;  // Green
    cout << "Stack size: " << plates.size() << endl;     // 3

    cout << "\\nRemoving plates:" << endl;
    plates.pop();  // Green (last in, first out!)
    plates.pop();  // Blue
    plates.pop();  // Red
    plates.pop();  // Empty!
    return 0;
}\`,`,
  },

  // Block 6: Browser History (line ~895)
  {
    after: `browser.forward()    # youtube.com\``,
    codeCpp: `      codeCpp: \`// Simulate a browser's back/forward with stacks!
// 用栈模拟浏览器的前进/后退！

#include <iostream>
#include <stack>
#include <string>
using namespace std;

class BrowserHistory {
    stack<string> backStack;
    stack<string> forwardStack;
    string current;
public:
    BrowserHistory() : current("Home") {}

    void visit(string url) {
        backStack.push(current);
        current = url;
        while (!forwardStack.empty()) forwardStack.pop();
        cout << "📄 Visiting: " << current << endl;
    }

    void back() {
        if (backStack.empty()) {
            cout << "❌ No pages to go back to!" << endl;
            return;
        }
        forwardStack.push(current);
        current = backStack.top();
        backStack.pop();
        cout << "⬅️ Back to: " << current << endl;
    }

    void forward() {
        if (forwardStack.empty()) {
            cout << "❌ No pages to go forward to!" << endl;
            return;
        }
        backStack.push(current);
        current = forwardStack.top();
        forwardStack.pop();
        cout << "➡️ Forward to: " << current << endl;
    }
};

int main() {
    BrowserHistory browser;
    browser.visit("google.com");
    browser.visit("youtube.com");
    browser.visit("github.com");
    browser.back();       // youtube.com
    browser.back();       // google.com
    browser.forward();    // youtube.com
    return 0;
}\`,`,
  },

  // Block 7: Balanced Parentheses (line ~1062)
  {
    after: `    print(f'{status} "{expr}" → {result}')\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "This is a CLASSIC interview question!"

#include <iostream>
#include <stack>
#include <string>
#include <vector>
#include <map>
using namespace std;

bool isBalanced(string expression) {
    // Check if parentheses are balanced · 检查括号是否匹配
    stack<char> stk;
    map<char, char> pairs = {{')', '('}, {']', '['}, {'}', '{'}};

    for (char c : expression) {
        if (c == '(' || c == '[' || c == '{') {
            stk.push(c);    // Push opening brackets 压入左括号
        } else if (c == ')' || c == ']' || c == '}') {
            if (stk.empty()) return false;     // No matching opener!
            if (stk.top() != pairs[c]) return false;  // Wrong type!
            stk.pop();       // Match found, pop! 匹配成功，弹出！
        }
    }
    return stk.empty();     // Stack should be empty 栈应该为空
}

int main() {
    vector<pair<string, bool>> tests = {
        {"{[()]}", true},
        {"((()))", true},
        {"{[(])}", false},   // Mismatched! 不匹配！
        {"(()", false},      // Missing closer 缺少右括号
        {"", true},          // Empty is balanced 空字符串是平衡的
    };

    for (auto& [expr, expected] : tests) {
        bool result = isBalanced(expr);
        string status = (result == expected) ? "✅" : "❌";
        cout << status << " \\"" << expr << "\\" → " << (result ? "true" : "false") << endl;
    }
    return 0;
}\`,`,
  },

  // Block 8: Text Editor Undo (line ~1119)
  {
    after: `print(f"\\nFinal: '{editor.text}'")\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "Build your own text editor undo!"

#include <iostream>
#include <stack>
#include <string>
using namespace std;

class TextEditor {
    string text;
    stack<string> undoStack;
    stack<string> redoStack;
public:
    TextEditor() : text("") {}

    void typeText(string newText) {
        undoStack.push(text);  // Save current state
        text += newText;
        while (!redoStack.empty()) redoStack.pop();
        cout << "✏️ Typed: '" << newText << "' → Text: '" << text << "'" << endl;
    }

    void undo() {
        if (undoStack.empty()) {
            cout << "❌ Nothing to undo!" << endl;
            return;
        }
        redoStack.push(text);
        text = undoStack.top();
        undoStack.pop();
        cout << "↩️ Undo → Text: '" << text << "'" << endl;
    }

    void redo() {
        if (redoStack.empty()) {
            cout << "❌ Nothing to redo!" << endl;
            return;
        }
        undoStack.push(text);
        text = redoStack.top();
        redoStack.pop();
        cout << "↪️ Redo → Text: '" << text << "'" << endl;
    }

    string getText() { return text; }
};

int main() {
    TextEditor editor;
    editor.typeText("Hello");
    editor.typeText(" World");
    editor.typeText("!");
    editor.undo();        // Remove "!"
    editor.undo();        // Remove " World"
    editor.redo();        // Bring back " World"
    cout << "\\nFinal: '" << editor.getText() << "'" << endl;
    return 0;
}\`,`,
  },

  // Block 9: Queue (line ~1311)
  {
    after: `line.dequeue()  # Diana\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "First come, first served!"
#include <iostream>
#include <deque>
#include <string>
using namespace std;

class Queue {
    deque<string> items;
public:
    void enqueue(string item) {
        items.push_back(item);
        cout << "  ➕ Enqueued: " << item << " → Queue: [";
        for (int i = 0; i < items.size(); i++) {
            if (i > 0) cout << ", ";
            cout << "'" << items[i] << "'";
        }
        cout << "]" << endl;
    }

    string dequeueItem() {
        if (isEmpty()) {
            cout << "  Queue is empty! 队列为空！" << endl;
            return "";
        }
        string item = items.front();
        items.pop_front();
        cout << "  ➖ Dequeued: " << item << " → Queue: [";
        for (int i = 0; i < items.size(); i++) {
            if (i > 0) cout << ", ";
            cout << "'" << items[i] << "'";
        }
        cout << "]" << endl;
        return item;
    }

    string front() { return items.empty() ? "" : items.front(); }
    bool isEmpty() { return items.empty(); }
    int size() { return items.size(); }
};

int main() {
    // Demo: Coffee shop line! ☕
    cout << "☕ Coffee Shop Queue:" << endl;
    Queue line;
    line.enqueue("Alice");
    line.enqueue("Bob");
    line.enqueue("Charlie");

    cout << "\\nNext customer: " << line.front() << endl;  // Alice
    cout << "People waiting: " << line.size() << endl;     // 3

    cout << "\\nServing customers:" << endl;
    line.dequeueItem();  // Alice served first!
    line.dequeueItem();  // Then Bob
    line.enqueue("Diana");  // Diana joins
    line.dequeueItem();  // Charlie (was before Diana)
    line.dequeueItem();  // Diana
    return 0;
}\`,`,
  },

  // Block 10: Priority Queue / ER (line ~1469)
  {
    after: `# 📦 Box: "The heap always gives us the highest-priority item!"\``,
    codeCpp: `      codeCpp: \`#include <iostream>
#include <queue>
#include <vector>
#include <string>
#include <tuple>
using namespace std;

int main() {
    // 🏥 Emergency Room Priority Queue
    // Lower number = higher priority (1 = critical!)
    // 数字越小优先级越高

    // min-heap: (priority, arrival_order, patient_name)
    using Patient = tuple<int, int, string>;
    priority_queue<Patient, vector<Patient>, greater<Patient>> erQueue;

    erQueue.push({3, 1, "Alice - Cold"});
    erQueue.push({1, 2, "Bob - Heart Attack"});
    erQueue.push({2, 3, "Charlie - Broken Arm"});
    erQueue.push({1, 4, "Diana - Stroke"});

    cout << "🏥 ER Treatment Order:" << endl;
    int order = 1;
    while (!erQueue.empty()) {
        auto [priority, _, patient] = erQueue.top();
        erQueue.pop();
        cout << "  " << order << ". [Priority " << priority << "] " << patient << endl;
        order++;
    }
    // 📦 Box: "The heap always gives us the highest-priority item!"
    return 0;
}\`,`,
  },

  // Block 11: Heap / Heapify (line ~1515)
  {
    after: `print("\\n🌳 Root: Heaps give us efficient sorting for free!")\``,
    codeCpp: `      codeCpp: \`// 🌳 Root: "A heap is a special complete binary tree!"
// Min-heap property: parent ≤ children
// 最小堆性质：父节点 ≤ 子节点

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> data = {5, 3, 8, 1, 2, 7};
    cout << "Original: ";
    for (int x : data) cout << x << " ";
    cout << endl;

    // Build a min-heap
    make_heap(data.begin(), data.end(), greater<int>());
    cout << "Heapified: ";
    for (int x : data) cout << x << " ";
    cout << endl;

    // Visualize the heap as a tree:
    //        1
    //      /   \\\\
    //     2     7
    //    / \\\\   /
    //   5   3 8

    // Pop elements (always gets minimum!)
    cout << "\\nPopping in order:" << endl;
    while (!data.empty()) {
        pop_heap(data.begin(), data.end(), greater<int>());
        cout << "  " << data.back();
        data.pop_back();
    }
    cout << endl;  // 1, 2, 3, 5, 7, 8 — sorted!

    cout << "\\n🌳 Root: Heaps give us efficient sorting for free!" << endl;
    return 0;
}\`,`,
  },

  // Block 12: Binary Tree Traversals (line ~1713)
  {
    after: `postorder(root)  # 4 5 2 6 3 1\nprint()\``,
    codeCpp: `      codeCpp: \`// 🌳 Root: "Let's grow a tree!"

#include <iostream>
using namespace std;

struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int v) : value(v), left(nullptr), right(nullptr) {}
};

// Three types of traversal! 三种遍历方式！
void inorder(TreeNode* node) {
    // Left → Root → Right · 左→根→右
    if (node) {
        inorder(node->left);
        cout << node->value << " ";
        inorder(node->right);
    }
}

void preorder(TreeNode* node) {
    // Root → Left → Right · 根→左→右
    if (node) {
        cout << node->value << " ";
        preorder(node->left);
        preorder(node->right);
    }
}

void postorder(TreeNode* node) {
    // Left → Right → Root · 左→右→根
    if (node) {
        postorder(node->left);
        postorder(node->right);
        cout << node->value << " ";
    }
}

int main() {
    // Build this tree:
    //        1
    //       / \\\\
    //      2   3
    //     / \\\\   \\\\
    //    4   5   6
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    root->right->right = new TreeNode(6);

    cout << "In-order (Left→Root→Right):" << endl;
    inorder(root);    // 4 2 5 1 3 6
    cout << "\\n\\nPre-order (Root→Left→Right):" << endl;
    preorder(root);   // 1 2 4 5 3 6
    cout << "\\n\\nPost-order (Left→Right→Root):" << endl;
    postorder(root);  // 4 5 2 6 3 1
    cout << endl;
    return 0;
}\`,`,
  },

  // Block 13: BST (line ~1918)
  {
    after: `print("\\n🌳 Root: In-order traversal of a BST = sorted order!")\``,
    codeCpp: `      codeCpp: \`// 🌳 Root: "Organized trees are FAST trees!"

#include <iostream>
#include <vector>
using namespace std;

struct BSTNode {
    int value;
    BSTNode* left;
    BSTNode* right;
    BSTNode(int v) : value(v), left(nullptr), right(nullptr) {}
};

class BST {
    BSTNode* root;

    BSTNode* insert(BSTNode* node, int value) {
        if (!node) return new BSTNode(value);
        if (value < node->value)
            node->left = insert(node->left, value);
        else
            node->right = insert(node->right, value);
        return node;
    }

    bool search(BSTNode* node, int value) {
        if (!node) return false;
        if (value == node->value) return true;
        if (value < node->value) return search(node->left, value);
        return search(node->right, value);
    }

    void inorder(BSTNode* node, vector<int>& result) {
        if (node) {
            inorder(node->left, result);
            result.push_back(node->value);
            inorder(node->right, result);
        }
    }

public:
    BST() : root(nullptr) {}

    void insert(int value) { root = insert(root, value); }

    bool search(int value) { return search(root, value); }

    vector<int> inorder() {
        vector<int> result;
        inorder(root, result);
        return result;
    }
};

int main() {
    BST bst;
    for (int val : {8, 3, 10, 1, 6, 14, 4, 7})
        bst.insert(val);

    auto sorted = bst.inorder();
    cout << "In-order (sorted!): [";
    for (int i = 0; i < sorted.size(); i++) {
        if (i > 0) cout << ", ";
        cout << sorted[i];
    }
    cout << "]" << endl;

    cout << "Search 6: " << (bst.search(6) ? "True" : "False") << endl;
    cout << "Search 5: " << (bst.search(5) ? "True" : "False") << endl;
    cout << "\\n🌳 Root: In-order traversal of a BST = sorted order!" << endl;
    return 0;
}\`,`,
  },

  // Block 14: File System Tree (line ~2092)
  {
    after: `print(f"\\nTotal files: {count_files(root)}")\``,
    codeCpp: `      codeCpp: \`// 🌳 Root: "Your computer is literally a tree!"

#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct FileNode {
    string name;
    bool isFolder;
    vector<FileNode*> children;

    FileNode(string n, bool folder = false) : name(n), isFolder(folder) {}

    FileNode* add(FileNode* child) {
        children.push_back(child);
        return child;
    }

    void display(int indent = 0) {
        string icon = isFolder ? "📁" : "📄";
        for (int i = 0; i < indent; i++) cout << "  ";
        cout << icon << " " << name << endl;
        for (auto child : children)
            child->display(indent + 1);
    }
};

int countFiles(FileNode* node) {
    int count = node->isFolder ? 0 : 1;
    for (auto child : node->children)
        count += countFiles(child);
    return count;
}

int main() {
    auto root = new FileNode("/", true);
    auto home = root->add(new FileNode("home", true));
    auto user = home->add(new FileNode("student", true));
    auto docs = user->add(new FileNode("Documents", true));
    docs->add(new FileNode("homework.pdf"));
    docs->add(new FileNode("notes.txt"));
    auto code = user->add(new FileNode("Code", true));
    code->add(new FileNode("hello.py"));
    code->add(new FileNode("game.py"));
    user->add(new FileNode("photo.jpg"));

    cout << "🖥️ File System Tree:" << endl;
    root->display();

    cout << "\\nTotal files: " << countFiles(root) << endl;
    return 0;
}\`,`,
  },

  // Block 15: Expression Tree (line ~2148)
  {
    after: `# 🌳 Root: "Compilers build expression trees to evaluate your code!"\``,
    codeCpp: `      codeCpp: \`// 🌳 Root: "Calculators use trees to parse math!"
// Expression: (3 + 5) * 2

#include <iostream>
#include <string>
using namespace std;

struct ExprNode {
    string value;
    ExprNode* left;
    ExprNode* right;
    ExprNode(string v) : value(v), left(nullptr), right(nullptr) {}
};

int evaluate(ExprNode* node) {
    // Evaluate an expression tree · 计算表达式树
    if (!node->left && !node->right)
        return stoi(node->value);  // Leaf = number 叶节点=数字

    int leftVal = evaluate(node->left);
    int rightVal = evaluate(node->right);

    if (node->value == "+") return leftVal + rightVal;
    if (node->value == "-") return leftVal - rightVal;
    if (node->value == "*") return leftVal * rightVal;
    if (node->value == "/") return leftVal / rightVal;
    return 0;
}

int main() {
    // Build (3 + 5) * 2
    ExprNode* root = new ExprNode("*");
    root->left = new ExprNode("+");
    root->right = new ExprNode("2");
    root->left->left = new ExprNode("3");
    root->left->right = new ExprNode("5");

    int result = evaluate(root);
    cout << "(3 + 5) * 2 = " << result << endl;  // 16

    // 🌳 Root: "Compilers build expression trees to evaluate your code!"
    return 0;
}\`,`,
  },

  // Block 16: Hash Maps / Dicts (line ~2324)
  {
    after: `print(f"\\nWord counts: {word_count}")\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "C++ unordered_map is a hash map!"

#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>
#include <sstream>
using namespace std;

int main() {
    // Creating a hash map
    unordered_map<string, string> student;
    student["name"] = "Alice";
    student["age"] = "15";
    student["grade"] = "A";

    // O(1) access by key!
    cout << "Name: " << student["name"] << endl;
    cout << "Age: " << student["age"] << endl;

    // Add/update — also O(1)!
    student["school"] = "Tech Academy";
    student["age"] = "16";  // Updated!

    // Check if key exists
    if (student.count("grade"))
        cout << "Grade: " << student["grade"] << endl;

    // Iterate over key-value pairs
    cout << "\\nAll info:" << endl;
    for (auto& [key, value] : student)
        cout << "  " << key << ": " << value << endl;

    // 📦 Box: "Hash maps are the MOST used data structure in real software!"

    // Practical: Count word frequency!
    string text = "the cat sat on the mat the cat";
    unordered_map<string, int> wordCount;
    istringstream iss(text);
    string word;
    while (iss >> word)
        wordCount[word]++;

    cout << "\\nWord counts: {";
    bool first = true;
    for (auto& [w, c] : wordCount) {
        if (!first) cout << ", ";
        cout << "'" << w << "': " << c;
        first = false;
    }
    cout << "}" << endl;
    return 0;
}\`,`,
  },

  // Block 17: Hash Collisions (line ~2367)
  {
    after: `print("🔗 Link: Collisions use chaining — each slot has a linked list!")\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "What happens when two keys hash to the same spot?"

#include <iostream>
#include <string>
#include <vector>
using namespace std;

int simpleHash(string key, int size) {
    // Sum of character codes mod table size · 字符编码和 mod 表大小
    int sum = 0;
    for (char c : key) sum += (int)c;
    return sum % size;
}

int main() {
    int tableSize = 5;
    vector<string> words = {"cat", "dog", "act", "god", "bat"};

    cout << "Hash table size: " << tableSize << endl;
    cout << "Hashing words:" << endl;
    for (auto& word : words) {
        int h = simpleHash(word, tableSize);
        cout << "  '" << word << "' → slot " << h << endl;
    }

    // Notice: "cat" and "act" have the same hash! (same letters!)
    // This is a COLLISION 碰撞！

    // Solution 1: Chaining (linked lists at each slot)
    // Solution 2: Open addressing (find next empty slot)

    cout << "\\n📦 Box: C++ unordered_map handles collisions automatically!" << endl;
    cout << "🔗 Link: Collisions use chaining — each slot has a linked list!" << endl;
    return 0;
}\`,`,
  },

  // Block 18: Sets (line ~2535)
  {
    after: `# 📦 Box: "Sets are perfect for removing duplicates and set math!"\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "Sets are like hash maps without values!"

#include <iostream>
#include <set>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    set<string> fruits = {"apple", "banana", "cherry"};
    set<string> citrus = {"orange", "lemon", "banana", "cherry"};

    cout << "Fruits: {";
    for (auto it = fruits.begin(); it != fruits.end(); ++it) {
        if (it != fruits.begin()) cout << ", ";
        cout << *it;
    }
    cout << "}" << endl;

    cout << "Citrus: {";
    for (auto it = citrus.begin(); it != citrus.end(); ++it) {
        if (it != citrus.begin()) cout << ", ";
        cout << *it;
    }
    cout << "}" << endl;

    // Union 并集
    set<string> unionSet;
    set_union(fruits.begin(), fruits.end(), citrus.begin(), citrus.end(),
              inserter(unionSet, unionSet.begin()));
    cout << "\\n∪ Union: {";
    for (auto it = unionSet.begin(); it != unionSet.end(); ++it) {
        if (it != unionSet.begin()) cout << ", ";
        cout << *it;
    }
    cout << "}" << endl;

    // Intersection 交集
    set<string> interSet;
    set_intersection(fruits.begin(), fruits.end(), citrus.begin(), citrus.end(),
                     inserter(interSet, interSet.begin()));
    cout << "∩ Intersection: {";
    for (auto it = interSet.begin(); it != interSet.end(); ++it) {
        if (it != interSet.begin()) cout << ", ";
        cout << *it;
    }
    cout << "}" << endl;

    // Difference 差集
    set<string> diffSet;
    set_difference(fruits.begin(), fruits.end(), citrus.begin(), citrus.end(),
                   inserter(diffSet, diffSet.begin()));
    cout << "- Difference (fruits-citrus): {";
    for (auto it = diffSet.begin(); it != diffSet.end(); ++it) {
        if (it != diffSet.begin()) cout << ", ";
        cout << *it;
    }
    cout << "}" << endl;

    // Membership test — O(log n) for std::set
    cout << "\\n'apple' in fruits? " << (fruits.count("apple") ? "true" : "false") << endl;

    // Remove duplicates from a vector!
    vector<int> nums = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};
    set<int> uniqueSet(nums.begin(), nums.end());
    vector<int> unique(uniqueSet.begin(), uniqueSet.end());
    cout << "\\nDeduplicated: [";
    for (int i = 0; i < unique.size(); i++) {
        if (i > 0) cout << ", ";
        cout << unique[i];
    }
    cout << "]" << endl;

    // 📦 Box: "Sets are perfect for removing duplicates and set math!"
    return 0;
}\`,`,
  },

  // Block 19: Graph (line ~2714)
  {
    after: `# 🔗 Link: "Graphs model relationships — the web is a giant graph!"\``,
    codeCpp: `      codeCpp: \`// 🔗 Link: "Let me show you how to build a graph!"

#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
using namespace std;

class Graph {
    unordered_map<string, vector<string>> adjList;
public:
    void addVertex(string vertex) {
        if (!adjList.count(vertex))
            adjList[vertex] = {};
    }

    void addEdge(string v1, string v2) {
        addVertex(v1);
        addVertex(v2);
        adjList[v1].push_back(v2);
        adjList[v2].push_back(v1);
    }

    void display() {
        for (auto& [vertex, neighbors] : adjList) {
            cout << "  " << vertex << " → [";
            for (int i = 0; i < neighbors.size(); i++) {
                if (i > 0) cout << ", ";
                cout << "'" << neighbors[i] << "'";
            }
            cout << "]" << endl;
        }
    }

    bool hasEdge(string v1, string v2) {
        if (!adjList.count(v1)) return false;
        for (auto& n : adjList[v1])
            if (n == v2) return true;
        return false;
    }
};

int main() {
    Graph social;
    social.addEdge("Alice", "Bob");
    social.addEdge("Alice", "Charlie");
    social.addEdge("Bob", "Diana");
    social.addEdge("Charlie", "Diana");
    social.addEdge("Diana", "Eve");

    cout << "🌐 Social Network Graph:" << endl;
    social.display();

    cout << "\\nAlice connected to Bob? " << (social.hasEdge("Alice", "Bob") ? "True" : "False") << endl;
    cout << "Alice connected to Eve? " << (social.hasEdge("Alice", "Eve") ? "True" : "False") << endl;

    // 🔗 Link: "Graphs model relationships — the web is a giant graph!"
    return 0;
}\`,`,
  },

  // Block 20: BFS (line ~2900)
  {
    after: `print(f"Shortest A→E: {' → '.join(path)}")\``,
    codeCpp: `      codeCpp: \`#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <queue>
#include <string>
using namespace std;

vector<string> bfs(unordered_map<string, vector<string>>& graph, string start) {
    // Breadth-First Search · 广度优先搜索
    unordered_set<string> visited;
    queue<string> q;
    q.push(start);
    visited.insert(start);
    vector<string> order;

    while (!q.empty()) {
        string vertex = q.front();
        q.pop();
        order.push_back(vertex);

        for (auto& neighbor : graph[vertex]) {
            if (!visited.count(neighbor)) {
                visited.insert(neighbor);
                q.push(neighbor);
            }
        }
    }
    return order;
}

vector<string> bfsShortestPath(unordered_map<string, vector<string>>& graph,
                                string start, string end) {
    queue<pair<string, vector<string>>> q;
    unordered_set<string> visited;
    q.push({start, {start}});
    visited.insert(start);
    while (!q.empty()) {
        auto [vertex, path] = q.front();
        q.pop();
        if (vertex == end) return path;
        for (auto& neighbor : graph[vertex]) {
            if (!visited.count(neighbor)) {
                visited.insert(neighbor);
                auto newPath = path;
                newPath.push_back(neighbor);
                q.push({neighbor, newPath});
            }
        }
    }
    return {};
}

int main() {
    unordered_map<string, vector<string>> graph = {
        {"A", {"B", "C"}},
        {"B", {"A", "C", "D"}},
        {"C", {"A", "B"}},
        {"D", {"B", "E"}},
        {"E", {"D"}}
    };

    auto order = bfs(graph, "A");
    cout << "🌊 BFS from A: [";
    for (int i = 0; i < order.size(); i++) {
        if (i > 0) cout << ", ";
        cout << "'" << order[i] << "'";
    }
    cout << "]" << endl;

    auto path = bfsShortestPath(graph, "A", "E");
    cout << "Shortest A→E: ";
    for (int i = 0; i < path.size(); i++) {
        if (i > 0) cout << " → ";
        cout << path[i];
    }
    cout << endl;
    return 0;
}\`,`,
  },

  // Block 21: DFS (line ~2960)
  {
    after: `dfs_recursive(graph, 'A')\nprint()\``,
    codeCpp: `      codeCpp: \`#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <stack>
#include <string>
#include <algorithm>
using namespace std;

vector<string> dfs(unordered_map<string, vector<string>>& graph, string start) {
    // Depth-First Search (iterative with stack) · 深度优先搜索
    unordered_set<string> visited;
    stack<string> stk;
    stk.push(start);
    vector<string> order;

    while (!stk.empty()) {
        string vertex = stk.top();
        stk.pop();
        if (!visited.count(vertex)) {
            visited.insert(vertex);
            order.push_back(vertex);
            auto neighbors = graph[vertex];
            reverse(neighbors.begin(), neighbors.end());
            for (auto& n : neighbors) {
                if (!visited.count(n))
                    stk.push(n);
            }
        }
    }
    return order;
}

void dfsRecursive(unordered_map<string, vector<string>>& graph,
                  string vertex, unordered_set<string>& visited) {
    // DFS using recursion · 递归DFS
    visited.insert(vertex);
    cout << vertex << " ";
    for (auto& neighbor : graph[vertex]) {
        if (!visited.count(neighbor))
            dfsRecursive(graph, neighbor, visited);
    }
}

int main() {
    unordered_map<string, vector<string>> graph = {
        {"A", {"B", "C"}},
        {"B", {"A", "C", "D"}},
        {"C", {"A", "B"}},
        {"D", {"B", "E"}},
        {"E", {"D"}}
    };

    auto order = dfs(graph, "A");
    cout << "🏊 DFS from A: [";
    for (int i = 0; i < order.size(); i++) {
        if (i > 0) cout << ", ";
        cout << "'" << order[i] << "'";
    }
    cout << "]" << endl;

    cout << "\\n🏊 DFS recursive from A: ";
    unordered_set<string> visited;
    dfsRecursive(graph, "A", visited);
    cout << endl;
    return 0;
}\`,`,
  },

  // Block 22: Social Network friend suggestions (line ~3138)
  {
    after: `# Diana (2 mutual), Eve (1 mutual), Frank (1 mutual)\``,
    codeCpp: `      codeCpp: \`// 🔗 Link: "Who should you be friends with?"

#include <iostream>
#include <unordered_map>
#include <unordered_set>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class SocialNetwork {
    unordered_map<string, unordered_set<string>> friends;
public:
    void addUser(string name) {
        if (!friends.count(name))
            friends[name] = {};
    }

    void addFriendship(string a, string b) {
        addUser(a);
        addUser(b);
        friends[a].insert(b);
        friends[b].insert(a);
    }

    vector<pair<string, int>> suggestFriends(string user) {
        // Suggest friends-of-friends · 推荐朋友的朋友
        if (!friends.count(user)) return {};

        unordered_map<string, int> suggestions;
        auto& myFriends = friends[user];

        for (auto& fr : myFriends) {
            for (auto& fof : friends[fr]) {
                if (fof != user && !myFriends.count(fof))
                    suggestions[fof]++;
            }
        }

        vector<pair<string, int>> result(suggestions.begin(), suggestions.end());
        sort(result.begin(), result.end(),
             [](auto& a, auto& b) { return a.second > b.second; });
        return result;
    }
};

int main() {
    SocialNetwork net;
    net.addFriendship("Alice", "Bob");
    net.addFriendship("Alice", "Charlie");
    net.addFriendship("Bob", "Diana");
    net.addFriendship("Bob", "Eve");
    net.addFriendship("Charlie", "Diana");
    net.addFriendship("Charlie", "Frank");

    cout << "👥 Friend suggestions for Alice:" << endl;
    for (auto& [person, mutuals] : net.suggestFriends("Alice"))
        cout << "  " << person << " (" << mutuals << " mutual friends)" << endl;
    // Diana (2 mutual), Eve (1 mutual), Frank (1 mutual)
    return 0;
}\`,`,
  },

  // Block 23: Maze Solver (line ~3205)
  {
    after: `print(f"\\nPath length: {len(path)} steps")\``,
    codeCpp: `      codeCpp: \`#include <iostream>
#include <vector>
#include <queue>
#include <set>
#include <string>
using namespace std;

using Point = pair<int,int>;

vector<Point> solveMaze(vector<vector<int>>& maze, Point start, Point end) {
    // Find shortest path through maze using BFS · 用BFS找迷宫最短路径
    int rows = maze.size(), cols = maze[0].size();
    queue<pair<Point, vector<Point>>> q;
    set<Point> visited;
    q.push({start, {start}});
    visited.insert(start);
    int dirs[][2] = {{0,1},{0,-1},{1,0},{-1,0}};

    while (!q.empty()) {
        auto [pos, path] = q.front();
        q.pop();
        if (pos == end) return path;

        for (auto& d : dirs) {
            int nr = pos.first + d[0], nc = pos.second + d[1];
            Point np = {nr, nc};
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols
                && maze[nr][nc] == 0 && !visited.count(np)) {
                visited.insert(np);
                auto newPath = path;
                newPath.push_back(np);
                q.push({np, newPath});
            }
        }
    }
    return {};  // No path!
}

int main() {
    // 0 = open, 1 = wall
    vector<vector<int>> maze = {
        {0, 0, 1, 0, 0},
        {1, 0, 1, 0, 1},
        {0, 0, 0, 0, 0},
        {0, 1, 1, 1, 0},
        {0, 0, 0, 0, 0}
    };

    auto path = solveMaze(maze, {0,0}, {4,4});

    // Display maze with path
    set<Point> pathSet(path.begin(), path.end());
    cout << "🏰 Maze Solution:" << endl;
    for (int r = 0; r < maze.size(); r++) {
        for (int c = 0; c < maze[0].size(); c++) {
            if (pathSet.count({r,c}))
                cout << "⭐";
            else if (maze[r][c] == 1)
                cout << "🧱";
            else
                cout << "⬜";
        }
        cout << endl;
    }
    cout << "\\nPath length: " << path.size() << " steps" << endl;
    return 0;
}\`,`,
  },

  // Block 24: Bubble & Selection Sort (line ~3388)
  {
    after: `print(f"  Comparisons: {c2}")\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "Start with the simple ones!"

#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
using namespace std;

int bubbleSort(vector<int>& arr) {
    // Bubble Sort — O(n²) · 冒泡排序
    int n = arr.size(), comparisons = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n-i-1; j++) {
            comparisons++;
            if (arr[j] > arr[j+1])
                swap(arr[j], arr[j+1]);  // Swap! 交换！
        }
    return comparisons;
}

int selectionSort(vector<int>& arr) {
    // Selection Sort — O(n²) · 选择排序
    int n = arr.size(), comparisons = 0;
    for (int i = 0; i < n; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++) {
            comparisons++;
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        swap(arr[i], arr[minIdx]);
    }
    return comparisons;
}

int main() {
    // Generate random data
    vector<int> data1(20);
    iota(data1.begin(), data1.end(), 0);
    shuffle(data1.begin(), data1.end(), mt19937{42});
    vector<int> data2 = data1;

    int c1 = bubbleSort(data1);
    int c2 = selectionSort(data2);

    cout << "🫧 Bubble Sort:" << endl;
    cout << "  Result: [";
    for (int i = 0; i < data1.size(); i++) {
        if (i > 0) cout << ", ";
        cout << data1[i];
    }
    cout << "]" << endl;
    cout << "  Comparisons: " << c1 << endl;

    cout << "\\n🎯 Selection Sort:" << endl;
    cout << "  Result: [";
    for (int i = 0; i < data2.size(); i++) {
        if (i > 0) cout << ", ";
        cout << data2[i];
    }
    cout << "]" << endl;
    cout << "  Comparisons: " << c2 << endl;
    return 0;
}\`,`,
  },

  // Block 25: Merge Sort (line ~3455)
  {
    after: `print(f"  Merge is {bubble_time/max(merge_time, 0.0001):.0f}x faster! 🚀")\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "Divide and conquer — split, sort, merge!"

#include <iostream>
#include <vector>
#include <chrono>
using namespace std;

vector<int> merge(vector<int>& left, vector<int>& right) {
    // Merge two sorted arrays · 合并两个有序数组
    vector<int> result;
    int i = 0, j = 0;
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j])
            result.push_back(left[i++]);
        else
            result.push_back(right[j++]);
    }
    while (i < left.size()) result.push_back(left[i++]);
    while (j < right.size()) result.push_back(right[j++]);
    return result;
}

vector<int> mergeSort(vector<int> arr) {
    // Merge Sort — O(n log n) · 归并排序
    if (arr.size() <= 1) return arr;
    int mid = arr.size() / 2;
    vector<int> left(arr.begin(), arr.begin() + mid);
    vector<int> right(arr.begin() + mid, arr.end());
    left = mergeSort(left);    // Sort left half 排序左半
    right = mergeSort(right);  // Sort right half 排序右半
    return merge(left, right); // Merge them 合并
}

int bubbleSort(vector<int> arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1])
                swap(arr[j], arr[j+1]);
    return 0;
}

int main() {
    vector<int> data = {38, 27, 43, 3, 9, 82, 10};
    cout << "Original: [";
    for (int i = 0; i < data.size(); i++) {
        if (i > 0) cout << ", ";
        cout << data[i];
    }
    cout << "]" << endl;

    auto sortedData = mergeSort(data);
    cout << "Sorted:   [";
    for (int i = 0; i < sortedData.size(); i++) {
        if (i > 0) cout << ", ";
        cout << sortedData[i];
    }
    cout << "]" << endl;

    // Compare speed
    vector<int> bigData(1000);
    for (int i = 0; i < 1000; i++) bigData[i] = 1000 - i;

    auto t1 = chrono::high_resolution_clock::now();
    bubbleSort(bigData);
    auto t2 = chrono::high_resolution_clock::now();
    double bubbleTime = chrono::duration<double>(t2-t1).count();

    t1 = chrono::high_resolution_clock::now();
    mergeSort(bigData);
    t2 = chrono::high_resolution_clock::now();
    double mergeTime = chrono::duration<double>(t2-t1).count();

    cout << "\\n⏱️ 1000 elements (worst case):" << endl;
    cout << "  Bubble Sort: " << bubbleTime << "s" << endl;
    cout << "  Merge Sort:  " << mergeTime << "s" << endl;
    cout << "  Merge is " << (int)(bubbleTime / max(mergeTime, 0.0001)) << "x faster! 🚀" << endl;
    return 0;
}\`,`,
  },

  // Block 26: Linear vs Binary Search (line ~3633)
  {
    after: `print(f"\\nWorst case: Linear={worst_linear}, Binary={worst_binary}")\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "Feel the difference!"

#include <iostream>
#include <vector>
using namespace std;

pair<int,int> linearSearch(vector<int>& arr, int target) {
    // Linear Search — O(n) · 线性搜索
    int steps = 0;
    for (int i = 0; i < arr.size(); i++) {
        steps++;
        if (arr[i] == target)
            return {i, steps};
    }
    return {-1, steps};
}

pair<int,int> binarySearch(vector<int>& arr, int target) {
    // Binary Search — O(log n) · 二分搜索 (arr must be sorted!)
    int steps = 0, left = 0, right = arr.size() - 1;
    while (left <= right) {
        steps++;
        int mid = (left + right) / 2;
        if (arr[mid] == target)
            return {mid, steps};
        else if (arr[mid] < target)
            left = mid + 1;    // Search right half 搜索右半
        else
            right = mid - 1;   // Search left half 搜索左半
    }
    return {-1, steps};
}

int main() {
    // Compare on a sorted list of 1000 elements
    vector<int> data(1000);
    for (int i = 0; i < 1000; i++) data[i] = i;
    int target = 777;

    auto [idx1, steps1] = linearSearch(data, target);
    auto [idx2, steps2] = binarySearch(data, target);

    cout << "Finding " << target << " in 1000 elements:" << endl;
    cout << "  🐢 Linear: found at index " << idx1 << ", took " << steps1 << " steps" << endl;
    cout << "  🚀 Binary: found at index " << idx2 << ", took " << steps2 << " steps" << endl;
    cout << "  Binary is " << steps1/steps2 << "x fewer steps! 🏆" << endl;

    // Worst case comparison
    auto [_, worstLinear] = linearSearch(data, 999);
    auto [__, worstBinary] = binarySearch(data, 999);
    cout << "\\nWorst case: Linear=" << worstLinear << ", Binary=" << worstBinary << endl;
    return 0;
}\`,`,
  },

  // Block 27: Interpolation Search (line ~3692)
  {
    after: `# For uniformly distributed data, interpolation search is even faster!\``,
    codeCpp: `      codeCpp: \`// 📦 Box: "An even smarter search for uniform data!"

#include <iostream>
#include <vector>
using namespace std;

pair<int,int> linearSearch(vector<int>& arr, int target) {
    int steps = 0;
    for (int i = 0; i < arr.size(); i++) {
        steps++;
        if (arr[i] == target) return {i, steps};
    }
    return {-1, steps};
}

pair<int,int> binarySearch(vector<int>& arr, int target) {
    int steps = 0, left = 0, right = arr.size() - 1;
    while (left <= right) {
        steps++;
        int mid = (left + right) / 2;
        if (arr[mid] == target) return {mid, steps};
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return {-1, steps};
}

pair<int,int> interpolationSearch(vector<int>& arr, int target) {
    // Interpolation Search — O(log log n) for uniform data · 插值搜索
    int low = 0, high = arr.size() - 1, steps = 0;

    while (low <= high && arr[low] <= target && target <= arr[high]) {
        steps++;
        if (low == high) {
            if (arr[low] == target) return {low, steps};
            return {-1, steps};
        }
        // Estimate position based on value
        int pos = low + (int)(((long long)(target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
        if (arr[pos] == target) return {pos, steps};
        else if (arr[pos] < target) low = pos + 1;
        else high = pos - 1;
    }
    return {-1, steps};
}

int main() {
    // Compare all three on uniform data
    vector<int> data;
    for (int i = 0; i < 10000; i += 2) data.push_back(i);  // [0, 2, 4, ..., 9998]
    int target = 7654;

    auto [_, s1] = linearSearch(data, target);
    auto [__, s2] = binarySearch(data, target);
    auto [idx, s3] = interpolationSearch(data, target);

    cout << "Finding " << target << " in " << data.size() << " elements:" << endl;
    cout << "  🐢 Linear:        " << s1 << " steps" << endl;
    cout << "  🚀 Binary:        " << s2 << " steps" << endl;
    cout << "  ⚡ Interpolation: " << s3 << " steps" << endl;

    // For uniformly distributed data, interpolation search is even faster!
    return 0;
}\`,`,
  },

  // Block 28: DS Library (line ~4005)
  {
    after: `print("\\n🎉 All data structures working! Your library is ready!")\``,
    codeCpp: `      codeCpp: \`// ═══════════════════════════════════════════
// 📚 MY DATA STRUCTURES LIBRARY (C++)
// Author: [Your Name]
// ═══════════════════════════════════════════

#include <iostream>
#include <vector>
#include <deque>
#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <string>
#include <algorithm>
using namespace std;

// ── Stack ──────────────────────────────────
class Stack {
    vector<int> items;
public:
    void push(int item) { items.push_back(item); }
    int pop() {
        if (items.empty()) return -1;
        int val = items.back(); items.pop_back(); return val;
    }
    int peek() { return items.empty() ? -1 : items.back(); }
    bool isEmpty() { return items.empty(); }
    int size() { return items.size(); }
    friend ostream& operator<<(ostream& os, Stack& s) {
        os << "Stack([";
        for (int i = 0; i < s.items.size(); i++) {
            if (i > 0) os << ", ";
            os << s.items[i];
        }
        os << "])"; return os;
    }
};

// ── Queue ──────────────────────────────────
class Queue {
    deque<string> items;
public:
    void enqueue(string item) { items.push_back(item); }
    string dequeueItem() {
        if (items.empty()) return "";
        string val = items.front(); items.pop_front(); return val;
    }
    string front() { return items.empty() ? "" : items.front(); }
    bool isEmpty() { return items.empty(); }
    int size() { return items.size(); }
};

// ── Linked List ────────────────────────────
struct ListNode {
    int data;
    ListNode* next;
    ListNode(int d) : data(d), next(nullptr) {}
};

class LinkedList {
public:
    ListNode* head;
    LinkedList() : head(nullptr) {}
    void append(int data) {
        auto node = new ListNode(data);
        if (!head) { head = node; return; }
        auto cur = head;
        while (cur->next) cur = cur->next;
        cur->next = node;
    }
    void prepend(int data) {
        auto node = new ListNode(data);
        node->next = head;
        head = node;
    }
    bool search(int target) {
        auto cur = head;
        while (cur) {
            if (cur->data == target) return true;
            cur = cur->next;
        }
        return false;
    }
    friend ostream& operator<<(ostream& os, LinkedList& ll) {
        auto cur = ll.head;
        while (cur) {
            os << cur->data;
            if (cur->next) os << " → ";
            cur = cur->next;
        }
        os << " → None"; return os;
    }
};

// ── BST ────────────────────────────────────
struct BSTNode {
    int val;
    BSTNode* left;
    BSTNode* right;
    BSTNode(int v) : val(v), left(nullptr), right(nullptr) {}
};

class BST {
    BSTNode* root;
    BSTNode* insert(BSTNode* node, int val) {
        if (!node) return new BSTNode(val);
        if (val < node->val) node->left = insert(node->left, val);
        else node->right = insert(node->right, val);
        return node;
    }
    bool search(BSTNode* node, int val) {
        if (!node) return false;
        if (val == node->val) return true;
        return val < node->val ? search(node->left, val) : search(node->right, val);
    }
    void inorder(BSTNode* node, vector<int>& result) {
        if (node) {
            inorder(node->left, result);
            result.push_back(node->val);
            inorder(node->right, result);
        }
    }
public:
    BST() : root(nullptr) {}
    void insert(int val) { root = insert(root, val); }
    bool search(int val) { return search(root, val); }
    vector<int> inorder() { vector<int> r; inorder(root, r); return r; }
};

// ── Graph ──────────────────────────────────
class Graph {
    unordered_map<string, vector<string>> adj;
public:
    void addEdge(string u, string v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    vector<string> bfs(string start) {
        unordered_set<string> visited = {start};
        queue<string> q;
        q.push(start);
        vector<string> order;
        while (!q.empty()) {
            string v = q.front(); q.pop();
            order.push_back(v);
            for (auto& n : adj[v]) {
                if (!visited.count(n)) {
                    visited.insert(n);
                    q.push(n);
                }
            }
        }
        return order;
    }
    vector<string> dfs(string start) {
        unordered_set<string> visited;
        vector<string> stk = {start}, order;
        while (!stk.empty()) {
            string v = stk.back(); stk.pop_back();
            if (!visited.count(v)) {
                visited.insert(v);
                order.push_back(v);
                auto neighbors = adj[v];
                reverse(neighbors.begin(), neighbors.end());
                for (auto& n : neighbors)
                    if (!visited.count(n)) stk.push_back(n);
            }
        }
        return order;
    }
};

// ═══════════════════════════════════════════
// 🧪 TEST EVERYTHING!
// ═══════════════════════════════════════════
int main() {
    cout << "📚 === Data Structures Library Test ===" << endl << endl;

    // Stack
    Stack s;
    s.push(1); s.push(2); s.push(3);
    cout << s << ", peek=" << s.peek() << ", pop=" << s.pop() << endl;

    // Queue
    Queue q;
    q.enqueue("A"); q.enqueue("B"); q.enqueue("C");
    cout << "Queue front=" << q.front() << ", dequeue=" << q.dequeueItem() << endl;

    // Linked List
    LinkedList ll;
    ll.append(1); ll.append(2); ll.append(3);
    cout << "LinkedList: " << ll << endl;

    // BST
    BST bst;
    for (int v : {5, 3, 7, 1, 4}) bst.insert(v);
    auto sorted = bst.inorder();
    cout << "BST inorder: [";
    for (int i = 0; i < sorted.size(); i++) {
        if (i > 0) cout << ", ";
        cout << sorted[i];
    }
    cout << "]" << endl;

    // Graph
    Graph g;
    g.addEdge("A", "B"); g.addEdge("B", "C"); g.addEdge("A", "C");
    auto bfsOrder = g.bfs("A");
    cout << "Graph BFS from A: [";
    for (int i = 0; i < bfsOrder.size(); i++) {
        if (i > 0) cout << ", ";
        cout << "'" << bfsOrder[i] << "'";
    }
    cout << "]" << endl;

    auto dfsOrder = g.dfs("A");
    cout << "Graph DFS from A: [";
    for (int i = 0; i < dfsOrder.size(); i++) {
        if (i > 0) cout << ", ";
        cout << "'" << dfsOrder[i] << "'";
    }
    cout << "]" << endl;

    cout << "\\n🎉 All data structures working! Your library is ready!" << endl;
    return 0;
}\`,`,
  },
];

// Apply replacements
let count = 0;
for (const r of replacements) {
  const idx = content.indexOf(r.after);
  if (idx === -1) {
    console.error(`NOT FOUND: ${r.after.substring(0, 60)}...`);
    continue;
  }
  const insertPos = idx + r.after.length;
  // Check if codeCpp already exists right after
  const nextChunk = content.substring(insertPos, insertPos + 50);
  if (nextChunk.includes('codeCpp')) {
    console.log(`SKIP (already has codeCpp): ${r.after.substring(0, 40)}...`);
    continue;
  }
  content = content.substring(0, insertPos) + '\n' + r.codeCpp + content.substring(insertPos);
  count++;
  console.log(`Added codeCpp #${count}`);
}

// Now add exerciseCpp for the one exercise (line ~224)
const exerciseAfter = `solution: "nums = [10, 20, 30]\\nnums.append(40)\\nprint(nums)",\n      },`;
const exerciseIdx = content.indexOf(exerciseAfter);
if (exerciseIdx !== -1) {
  const exerciseInsertPos = exerciseIdx + exerciseAfter.length;
  const exerciseCpp = `
      exerciseCpp: {
        prompt: "Create a vector {10, 20, 30}, push_back 40, then print the vector.",
        promptZh: "创建向量 {10, 20, 30}，添加 40，然后打印向量。",
        starterCode: "// Create and modify a vector\\n#include <iostream>\\n#include <vector>\\nusing namespace std;\\n\\nint main() {\\n    vector<int> nums = {10, 20, 30};\\n    // Push back 40\\n\\n    // Print the result\\n\\n    return 0;\\n}",
        expectedOutput: "[10, 20, 30, 40]",
        hint: "Use nums.push_back(40) then loop to print",
        hintZh: "用 nums.push_back(40) 然后循环打印",
        solution: "#include <iostream>\\n#include <vector>\\nusing namespace std;\\n\\nint main() {\\n    vector<int> nums = {10, 20, 30};\\n    nums.push_back(40);\\n    cout << \\"[\\" ;\\n    for (int i = 0; i < nums.size(); i++) {\\n        if (i > 0) cout << \\", \\";\\n        cout << nums[i];\\n    }\\n    cout << \\"]\\\\n\\";\\n    return 0;\\n}",
        language: "cpp",
      },`;
  content = content.substring(0, exerciseInsertPos) + exerciseCpp + content.substring(exerciseInsertPos);
  console.log('Added exerciseCpp');
} else {
  console.error('Exercise not found!');
}

fs.writeFileSync('src/data/ds-lessons.ts', content);
console.log(`Done! Applied ${count} codeCpp blocks`);
