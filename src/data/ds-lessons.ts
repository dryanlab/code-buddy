// Code Buddy - Data Structures Track
// 4 Modules, 18 Lessons
// Target: Students WITH Python basics
// Characters: 📦Box (data container guide), 🔗Link (connection specialist), 🌳Root (tree expert)

import type { Lesson, Module } from "./lessons";

// ═══════════════════════════════════════════════════════════════
// DS MODULES
// ═══════════════════════════════════════════════════════════════

export const DS_MODULES: Module[] = [
  {
    id: "ds-1",
    title: "📋 Lists & Stacks",
    subtitle: "Linear data structures · 线性数据结构",
    icon: "📋",
    color: "from-blue-500 to-cyan-500",
    lessons: ["ds-1-1", "ds-1-2", "ds-1-3", "ds-1-4", "ds-1-5"],
  },
  {
    id: "ds-2",
    title: "🌳 Queues & Trees",
    subtitle: "FIFO processing and branching · 队列与树结构",
    icon: "🌳",
    color: "from-emerald-500 to-teal-600",
    lessons: ["ds-2-1", "ds-2-2", "ds-2-3", "ds-2-4", "ds-2-5"],
  },
  {
    id: "ds-3",
    title: "🗺️ Graphs & Hash Maps",
    subtitle: "Networks and key-value storage · 图与哈希表",
    icon: "🗺️",
    color: "from-orange-500 to-amber-600",
    lessons: ["ds-3-1", "ds-3-2", "ds-3-3", "ds-3-4", "ds-3-5"],
  },
  {
    id: "ds-4",
    title: "🏆 Advanced & Projects",
    subtitle: "Sorting, searching & capstone · 排序、搜索与综合项目",
    icon: "🏆",
    color: "from-purple-500 to-violet-600",
    lessons: ["ds-4-1", "ds-4-2", "ds-4-3"],
  },
];

// ═══════════════════════════════════════════════════════════════
// MODULE DS-1: LISTS & STACKS
// ═══════════════════════════════════════════════════════════════

const ds_1_1: Lesson = {
  id: "ds-1-1",
  moduleId: "ds-1",
  title: "Arrays — The Foundation",
  subtitle: "Where it all begins · 数组——一切的起点",
  icon: "📊",
  xp: 15,
  duration: "18 min",
  order: 1,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box Says: Welcome to Data Structures!

Hi there! I'm **Box** 📦, your data container guide! Think of me as a moving box — I help organize everything!

**What are Data Structures?** They're ways to organize data so we can use it efficiently.

数据结构就是组织数据的方式，让我们能高效地使用数据。

Imagine your room is messy 🧹 — socks in the fridge, books under the bed. You CAN find things, but it takes forever! Data structures are like **organizer bins** — each one is designed for a different purpose.

**Arrays** are the simplest and most fundamental: a row of numbered boxes, like lockers in a hallway! 🗄️

> 🏠 Real-world analogy: An array is like a row of mailboxes at an apartment building. Each has a number (index), and you can go directly to any mailbox!
> 现实类比：数组就像公寓楼的一排信箱，每个都有编号（索引），你可以直接找到任何一个！

🔗 **Try the visualizer!** Go to [Data Structures Playground](/dashboard/data-structures) to see arrays come alive!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Array Basics in Python

🎯 **What you'll learn:** How Python lists work as arrays — creating, indexing, modifying, and understanding time complexity.
学习目标：Python 列表如何作为数组使用——创建、索引、修改，以及理解时间复杂度。

Think of a list like a row of school lockers 🗄️ — each locker has a number (starting from 0!), and you can open any locker instantly if you know its number. But if you want to squeeze a new locker into the middle, everyone has to scoot over!

🔑 **Key things to notice · 注意要点:**
- Indexing starts at 0, not 1! \\\`fruits[0]\\\` is the FIRST item
- Negative indices count from the end: \\\`fruits[-1]\\\` is the LAST item
- \\\`len()\\\` tells you how many items are in the list
- Appending to the end is fast O(1), but inserting at the start is slow O(n)

👀 Try changing the fruits list and accessing different indices!`,
      code: `# 📦 Box: "Let me show you how arrays work!"
# Arrays in Python = Lists

# Creating an array (list)
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
numbers = [10, 20, 30, 40, 50]

# Indexing: access by position (starts at 0!)
# 索引：通过位置访问（从0开始！）
print("First fruit:", fruits[0])    # apple
print("Third fruit:", fruits[2])    # cherry
print("Last fruit:", fruits[-1])    # elderberry (negative = from end)

# Length: how many items?
print("Total fruits:", len(fruits))  # 5

# Modify an element
fruits[1] = "blueberry"  # Replace banana
print("Updated:", fruits)

# Common operations & their TIME COMPLEXITY:
# Access by index:  O(1) — instant! Like going to locker #3
# Search for value:  O(n) — must check each one
# Append to end:    O(1) — just add to the end
# Insert at start:  O(n) — must shift everything!

print("\\n📦 Box: Arrays are FAST for access, slower for insertion!")`,
    },
    {
      type: "quiz",
      content: "🎓 Array Knowledge Check · 数组知识测验",
      quiz: [
        {
          question: "What is the index of the FIRST element in a Python list?\n\nPython 列表第一个元素的索引是什么？",
          options: ["1", "0", "-1", "None"],
          correctIndex: 1,
          explanation: "Arrays/lists are zero-indexed! The first element is at index 0. 数组从0开始计数！",
        },
        {
          question: "What is the time complexity of accessing an element by index?\n\n通过索引访问元素的时间复杂度是什么？",
          options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
          correctIndex: 2,
          explanation: "Direct index access is O(1) — constant time, like going directly to a locker! 直接索引访问是 O(1)——常数时间！",
        },
{
      question: "What does `fruits[-2]` return if `fruits = ['a','b','c','d']`?\n\nfruits[-2] 返回什么？",
      options: ["'a'", "'b'", "'c'", "'d'"],
      correctIndex: 2,
      explanation: "Negative indexing: -1 is last, -2 is second-to-last = 'c'. 负索引：-1是最后，-2是倒数第二。",
    },
    {
      question: "What is the time complexity of inserting at the beginning of a Python list?\n\n在Python列表开头插入的时间复杂度？",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctIndex: 0,
      explanation: "Inserting at index 0 requires shifting all elements → O(n). 在索引0插入需要移动所有元素。",
    },
    {
      question: "What does `len([10, 20, 30])` return?\n\n`len([10, 20, 30])` 返回什么？",
      options: ["3", "2", "30", "0"],
      correctIndex: 0,
      explanation: "len() returns the number of elements. There are 3 items. len()返回元素个数，有3个。",
    },
    {
      question: "Which operation is O(1) for a Python list?\n\n哪个操作对Python列表是O(1)？",
      options: ["Insert at beginning · 开头插入", "Append to end · 末尾添加", "Search for value · 搜索值", "Remove from middle · 中间删除"],
      correctIndex: 1,
      explanation: "Appending to the end is amortized O(1). All others require scanning/shifting. 末尾添加是均摊O(1)。",
    },
    {
      question: "What is `[1,2,3] + [4,5]` in Python?\n\nPython中 `[1,2,3] + [4,5]` 是什么？",
      options: ["[5, 7]", "[1, 2, 3, [4, 5]]", "Error", "[1, 2, 3, 4, 5]"],
      correctIndex: 3,
      explanation: "The + operator concatenates lists into a new flat list. +运算符将列表拼接成新列表。",
    },
    {
      question: "What does `arr[1:4]` return for `arr = [0,1,2,3,4,5]`?\n\narr[1:4] 返回什么？",
      options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[0, 1, 2, 3]", "[1, 2]"],
      correctIndex: 1,
      explanation: "Slicing [1:4] includes index 1,2,3 (end is exclusive). 切片[1:4]包含索引1,2,3（末尾不包含）。",
    },
    {
      question: "Which correctly creates an array of 5 zeros in Python?\n\n哪个正确创建5个零的数组？",
      options: ["zeros(5)", "[0] * 5", "Array(5).fill(0)", "list(0, 5)"],
      correctIndex: 1,
      explanation: "[0] * 5 creates [0, 0, 0, 0, 0] using list repetition. [0]*5 用列表重复创建。",
    },
    {
      type: "coding",
      question: "Find the maximum value in a list\n\n找到列表中的最大值",
      prompt: "🎯 Find the max value WITHOUT using the built-in max() function.\n不使用内置max()函数找最大值。",
      starterCode: "nums = [3, 7, 2, 9, 1, 5]\n\n# Find the maximum without using max()\n# 不使用max()找到最大值\n\nprint(result)",
      expectedOutput: "9",
      hint: "Start with the first element as your 'current max', then loop through comparing. 从第一个元素开始，循环比较。",
      explanation: "Initialize result = nums[0], then for each num, if num > result, update result. 初始化为第一个元素，逐个比较更新。",
    },
    {
      type: "coding",
      question: "Count occurrences of an element\n\n统计元素出现次数",
      prompt: "🎯 Count how many times the number 3 appears in the list.\n统计数字3在列表中出现的次数。",
      starterCode: "nums = [3, 1, 3, 4, 3, 2, 5, 3]\n\n# Count how many times 3 appears (don't use .count())\n# 统计3出现几次（不用.count()）\n\nprint(count)",
      expectedOutput: "4",
      hint: "Use a counter variable and a loop. If element == 3, increment. 用计数变量和循环。",
      explanation: "Loop through each element, increment counter when element equals 3. 遍历每个元素，等于3时计数加1。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Array Challenge · 数组挑战",
      challenge: {
        title: "🔄 Reverse an Array · 反转数组",
        description: "Reverse the given list WITHOUT using the built-in reverse() method!\n不使用内置 reverse() 方法来反转列表！",
        starterCode: "arr = [1, 2, 3, 4, 5]\n\n# Reverse arr without using .reverse() or [::-1]\n# Hint: use a loop and swap elements\n# 提示：用循环和交换元素\n\nprint(arr)  # Should print: [5, 4, 3, 2, 1]",
        hint: "Swap first↔last, second↔second-to-last, etc. Use two pointers! 交换首尾元素，用双指针！",
        solution: "arr = [1, 2, 3, 4, 5]\nleft = 0\nright = len(arr) - 1\nwhile left < right:\n    arr[left], arr[right] = arr[right], arr[left]\n    left += 1\n    right -= 1\nprint(arr)",
        expectedOutput: "[5, 4, 3, 2, 1]",
      },
    },
    {
      type: "interactive",
      content: `## 🎮 Array Operations Practice · 数组操作练习

Try adding and removing elements from an array!`,
      exercise: {
        prompt: "Create a list [10, 20, 30], append 40, then print the list.",
        promptZh: "创建列表 [10, 20, 30]，追加 40，然后打印列表。",
        starterCode: "# Create and modify a list\nnums = [10, 20, 30]\n# Append 40 to the list\n\n# Print the result\n",
        expectedOutput: "[10, 20, 30, 40]",
        hint: "Use nums.append(40) then print(nums)",
        hintZh: "用 nums.append(40) 然后 print(nums)",
        solution: "nums = [10, 20, 30]\nnums.append(40)\nprint(nums)",
      },
    },
  ],
};

const ds_1_2: Lesson = {
  id: "ds-1-2",
  moduleId: "ds-1",
  title: "Linked Lists — Chain of Nodes",
  subtitle: "Dynamic data, one node at a time · 链表——节点的链条",
  icon: "🔗",
  xp: 20,
  duration: "22 min",
  order: 2,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔗",
      content: `## 🔗 Link Says: Welcome to My World!

Hey! I'm **Link** 🔗, your connection specialist! Arrays are great, but they have a big weakness: inserting or removing elements in the middle is SLOW — everything has to shift!

**Linked Lists** solve this! Instead of numbered lockers in a row, imagine a **treasure hunt** 🗺️ — each clue tells you where the NEXT clue is!

> 🚂 Real-world analogy: A linked list is like a train! Each car (node) is connected to the next one. You can easily add or remove cars without rearranging the whole train!
> 现实类比：链表像一列火车！每节车厢（节点）连接下一节。你可以轻松添加或删除车厢！

Each **node** has two parts:
1. **Data** — the actual value stored
2. **Next pointer** — the address of the next node

\`\`\`
[data|next] → [data|next] → [data|next] → None
\`\`\`

🔗 **Visualize it!** Check the [Data Structures Playground](/dashboard/data-structures) to see linked list animations!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Building a Linked List from Scratch

🎯 **What you'll learn:** How to create a Node class and LinkedList class from scratch — the building blocks of dynamic data.
学习目标：如何从零创建 Node 类和 LinkedList 类——动态数据的基础。

Imagine a scavenger hunt 🗺️ — each clue card has a message AND directions to the next clue. That's exactly how a linked list works! Each node holds data and a pointer to the next node.

🔑 **Key things to notice · 注意要点:**
- A Node has two parts: \\\`data\\\` (the value) and \\\`next\\\` (pointer to the next node)
- \\\`self.head\\\` tracks the start of the list — lose this, and you lose the whole list!
- To append, you must "walk" to the end node (where \\\`next\\\` is None)
- The display method walks through every node — that's O(n) traversal

👀 Try appending more values and watch the chain grow!`,
      code: `# 🔗 Link: "Let's build a linked list step by step!"

class Node:
    """A single node in the linked list · 链表中的单个节点"""
    def __init__(self, data):
        self.data = data    # The value stored 存储的值
        self.next = None    # Pointer to next node 指向下一个节点

class LinkedList:
    """A singly linked list · 单向链表"""
    def __init__(self):
        self.head = None    # First node 第一个节点

    def append(self, data):
        """Add to the end · 添加到末尾"""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:     # Walk to the end 走到末尾
            current = current.next
        current.next = new_node

    def display(self):
        """Print the list · 打印链表"""
        current = self.head
        parts = []
        while current:
            parts.append(str(current.data))
            current = current.next
        print(" → ".join(parts) + " → None")

# Let's use it!
my_list = LinkedList()
my_list.append("A")
my_list.append("B")
my_list.append("C")
my_list.display()  # A → B → C → None

# 🔗 Link: "See? Each node points to the next one!"
# 📦 Box: "Unlike arrays, no shifting needed for inserts!"`,
    },
    {
      type: "code",
      emoji: "🔧",
      content: `## 🔧 Inserting & Traversing · 插入与遍历

🎯 **What you'll learn:** How to insert at the beginning (O(1)!) and search through a linked list.
学习目标：如何在链表开头插入（O(1)！）以及如何搜索链表。

Inserting at the head is like cutting in line at the very front 😈 — just point the new person to whoever was first, and update the "front" sign. No one else has to move! Searching, though, is like checking every person in line one by one.

🔑 **Key things to notice · 注意要点:**
- \\\`prepend\\\` is O(1) — just update two pointers!
- \\\`search\\\` is O(n) — worst case, you check every node
- The \\\`position\\\` counter tracks where you are as you walk the list
- Returns -1 if not found (a common convention)

👀 Try prepending different values and searching for them!`,
      code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def prepend(self, data):
        """Insert at the beginning — O(1)! · 在开头插入——O(1)！"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def search(self, target):
        """Find a value — O(n) · 查找值——O(n)"""
        current = self.head
        position = 0
        while current:
            if current.data == target:
                return position
            current = current.next
            position += 1
        return -1

    def display(self):
        current = self.head
        parts = []
        while current:
            parts.append(str(current.data))
            current = current.next
        print(" → ".join(parts) + " → None")

# Demo
ll = LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.prepend(5)   # Fast insert at start!
ll.display()     # 5 → 10 → 20 → 30 → None

pos = ll.search(20)
print(f"Found 20 at position {pos}")  # 2`,
    },
    {
      type: "quiz",
      content: "🎓 Linked List Quiz · 链表测验",
      quiz: [
        {
          question: "What is the time complexity of inserting at the HEAD of a linked list?\n\n在链表头部插入的时间复杂度是？",
          options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
          correctIndex: 3,
          explanation: "Inserting at the head is O(1) — just create a new node and point it to the old head! 头部插入是 O(1)！",
        },
        {
          question: "What does each node in a singly linked list contain?\n\n单向链表的每个节点包含什么？",
          options: ["Data and a pointer to the next node", "Only data", "Data and pointers to both next and previous", "An index and data"],
          correctIndex: 0,
          explanation: "Each node has data + a next pointer. That's the 'chain' in chain of nodes! 每个节点有数据和下一个指针。",
        },
{
      question: "What advantage does a linked list have over an array for insertion?\n\n链表在插入方面比数组有什么优势？",
      options: ["Faster access by index · 更快的索引访问", "Less memory usage · 更少内存", "O(1) insertion at head · 头部O(1)插入", "Built-in sorting · 内置排序"],
      correctIndex: 2,
      explanation: "Inserting at the head of a linked list is O(1) — just update pointers! 链表头部插入是O(1)——只需更新指针！",
    },
    {
      question: "What happens when you traverse to the end of a singly linked list?\n\n遍历到单链表末尾会遇到什么？",
      options: ["An error · 错误", "You find None/null · 找到None", "It loops back to head · 回到头部", "The list deletes itself · 列表自删除"],
      correctIndex: 1,
      explanation: "The last node's 'next' pointer is None, signaling the end. 最后节点的next指针是None，表示结束。",
    },
    {
      question: "What is the time complexity of accessing the nth element in a linked list?\n\n访问链表第n个元素的时间复杂度？",
      options: ["O(1)", "O(log n)", "O(n²)", "O(n)"],
      correctIndex: 3,
      explanation: "You must traverse from head through n nodes — no random access! 必须从头遍历n个节点——没有随机访问！",
    },
    {
      question: "How much extra memory does each linked list node use compared to an array element?\n\n链表每个节点比数组元素多用多少额外内存？",
      options: ["None · 没有", "A copy of all data · 所有数据的副本", "A pointer/reference · 一个指针", "An index number · 一个索引号"],
      correctIndex: 2,
      explanation: "Each node stores data AND a pointer to the next node. 每个节点存储数据和指向下一个节点的指针。",
    },
    {
      question: "Which is NOT a valid linked list operation?\n\n哪个不是有效的链表操作？",
      options: ["Insert at head · 头部插入", "Delete a node · 删除节点", "Traverse all nodes · 遍历所有节点", "Access by index in O(1) · O(1)索引访问"],
      correctIndex: 3,
      explanation: "Linked lists don't support O(1) index access — that's an array advantage! 链表不支持O(1)索引访问——那是数组的优势！",
    },
    {
      question: "In a singly linked list, to delete a node, what do you need?\n\n在单链表中删除节点需要什么？",
      options: ["Just the node to delete · 只需要删除的节点", "The list length · 列表长度", "The array index · 数组索引", "The previous node · 前一个节点"],
      correctIndex: 3,
      explanation: "You need the previous node to update its 'next' pointer to skip the deleted node. 需要前一个节点来更新指针跳过被删节点。",
    },
    {
      question: "What is the space complexity of a linked list with n elements?\n\nn个元素的链表空间复杂度？",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctIndex: 0,
      explanation: "Each of the n elements needs a node with data + pointer → O(n) space. n个元素各需一个节点→O(n)空间。",
    },
    {
      type: "coding",
      question: "Implement a simple linked list and print its elements\n\n实现简单链表并打印元素",
      prompt: "🎯 Create a Node class, build a 3-node linked list (1→2→3), and traverse to print all values.\n创建Node类，构建3节点链表并遍历打印。",
      starterCode: "# Define a Node class\nclass Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\n# Build linked list: 1 -> 2 -> 3\n# Your code here\n\n# Traverse and print each value\n# Your code here",
      expectedOutput: "1\n2\n3",
      hint: "Create 3 nodes, link them with .next, then use a while loop to traverse. 创建3个节点，用.next连接，用while循环遍历。",
      explanation: "Create nodes, set head.next = second, second.next = third, then loop: while current: print, move to next. 创建节点连接后循环遍历打印。",
    },
    {
      type: "coding",
      question: "Count the number of nodes in a linked list\n\n计算链表节点数",
      prompt: "🎯 Given a linked list, count and print the total number of nodes.\n给定链表，计算并打印节点总数。",
      starterCode: "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\n# Build: 10 -> 20 -> 30 -> 40\nhead = Node(10)\nhead.next = Node(20)\nhead.next.next = Node(30)\nhead.next.next.next = Node(40)\n\n# Count nodes\ncount = 0\n# Your code here\n\nprint(count)",
      expectedOutput: "4",
      hint: "Traverse with a while loop, increment count each step. 用while循环遍历，每步计数加1。",
      explanation: "Set current = head, while current is not None: count += 1, current = current.next. 从头遍历直到None。",
    },
    {
      type: "coding",
      question: "Insert a node at the head of a linked list\n\n在链表头部插入节点",
      prompt: "🎯 Insert a new node with value 0 at the head, then print all values.\n在头部插入值为0的新节点，然后打印。",
      starterCode: "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\n\n# Insert 0 at the head\n# Your code here\n\n# Print all values\ncurrent = head\nwhile current:\n    print(current.data)\n    current = current.next",
      expectedOutput: "0\n1\n2\n3",
      hint: "Create new node, set new_node.next = head, then head = new_node. 创建新节点，指向原头部，更新头部。",
      explanation: "new_node = Node(0); new_node.next = head; head = new_node — O(1) operation! 头部插入只需更新指针——O(1)操作！",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Linked List Challenge · 链表挑战",
      challenge: {
        title: "📏 Count Nodes · 计算节点数",
        description: "Write a function that counts the number of nodes in a linked list.\n编写函数计算链表中的节点数量。",
        starterCode: "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\ndef count_nodes(head):\n    # Count how many nodes are in the list\n    # 计算链表中有多少个节点\n    pass\n\n# Test\na = Node(1)\nb = Node(2)\nc = Node(3)\na.next = b\nb.next = c\nprint(count_nodes(a))  # Should print: 3",
        hint: "Walk through the list with a while loop, incrementing a counter each step. 用 while 循环遍历，每步计数器加1。",
        solution: "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\ndef count_nodes(head):\n    count = 0\n    current = head\n    while current:\n        count += 1\n        current = current.next\n    return count\n\na = Node(1)\nb = Node(2)\nc = Node(3)\na.next = b\nb.next = c\nprint(count_nodes(a))",
        expectedOutput: "3",
      },
    },
  ],
};

const ds_1_3: Lesson = {
  id: "ds-1-3",
  moduleId: "ds-1",
  title: "Doubly Linked Lists — Forward & Back",
  subtitle: "Two-way navigation · 双向链表——前进与后退",
  icon: "↔️",
  xp: 20,
  duration: "20 min",
  order: 3,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔗",
      content: `## 🔗 Link: Now We Go BOTH Ways!

Remember our train analogy? A singly linked list is like a one-way train — you can only go forward! 🚂➡️

A **doubly linked list** is like a train with **windows on both sides** — you can go forward AND backward! 🚂↔️

> 🎵 Real-world analogy: Think of a music playlist! You can skip to the next song AND go back to the previous one. That's a doubly linked list!
> 现实类比：想想音乐播放列表！你可以跳到下一首，也可以回到上一首。这就是双向链表！

Each node now has THREE parts:
1. **prev** — pointer to previous node
2. **data** — the value
3. **next** — pointer to next node

\`\`\`
None ← [prev|data|next] ↔ [prev|data|next] ↔ [prev|data|next] → None
\`\`\``,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Building a Doubly Linked List

🎯 **What you'll learn:** How to build a doubly linked list with prev/next pointers, plus insertion and deletion.
学习目标：如何构建带有 prev/next 指针的双向链表，包括插入和删除。

A doubly linked list is like a two-lane highway 🛣️ — you can drive forward OR backward! Each node has a rearview mirror (prev) and a windshield (next). The trade-off? More pointers to manage, but way more flexibility.

🔑 **Key things to notice · 注意要点:**
- Each node now has THREE fields: \\\`prev\\\`, \\\`data\\\`, \\\`next\\\`
- We track BOTH \\\`head\\\` and \\\`tail\\\` — this makes append O(1)!
- Deletion requires updating up to 4 pointers (prev.next and next.prev)
- \\\`display_backward\\\` starts from tail and follows prev — impossible with singly linked!

👀 Try deleting different nodes and displaying both directions!`,
      code: `# 🔗 Link: "Double the pointers, double the power!"

class DNode:
    """Doubly linked node · 双向链表节点"""
    def __init__(self, data):
        self.data = data
        self.prev = None    # ← pointer to previous 前一个
        self.next = None    # → pointer to next 后一个

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None    # Track the end too! 也追踪尾部！

    def append(self, data):
        new_node = DNode(data)
        if not self.head:
            self.head = self.tail = new_node
            return
        new_node.prev = self.tail
        self.tail.next = new_node
        self.tail = new_node

    def prepend(self, data):
        new_node = DNode(data)
        if not self.head:
            self.head = self.tail = new_node
            return
        new_node.next = self.head
        self.head.prev = new_node
        self.head = new_node

    def delete(self, data):
        """Delete first occurrence of data · 删除第一次出现的值"""
        current = self.head
        while current:
            if current.data == data:
                if current.prev:
                    current.prev.next = current.next
                else:
                    self.head = current.next
                if current.next:
                    current.next.prev = current.prev
                else:
                    self.tail = current.prev
                return True
            current = current.next
        return False

    def display_forward(self):
        parts = []
        current = self.head
        while current:
            parts.append(str(current.data))
            current = current.next
        print("Forward:  " + " ↔ ".join(parts))

    def display_backward(self):
        parts = []
        current = self.tail
        while current:
            parts.append(str(current.data))
            current = current.prev
        print("Backward: " + " ↔ ".join(parts))

# Demo
dll = DoublyLinkedList()
dll.append("A")
dll.append("B")
dll.append("C")
dll.prepend("Z")
dll.display_forward()   # Z ↔ A ↔ B ↔ C
dll.display_backward()  # C ↔ B ↔ A ↔ Z

dll.delete("A")
dll.display_forward()   # Z ↔ B ↔ C
print("\\n🔗 Link: Both directions work perfectly!")`,
    },
    {
      type: "quiz",
      content: "🎓 Doubly Linked List Quiz · 双向链表测验",
      quiz: [
        {
          question: "What extra pointer does a doubly linked list node have compared to a singly linked list?\n\n双向链表节点比单向链表多了什么指针？",
          options: ["A random pointer", "A prev (previous) pointer", "An index pointer", "A head pointer"],
          correctIndex: 1,
          explanation: "A doubly linked list adds a 'prev' pointer so you can traverse backwards! 双向链表加了 prev 指针，可以反向遍历！",
        },
{
      question: "How many pointers does each node in a doubly linked list have?\n\n双向链表每个节点有几个指针？",
      options: ["0", "1", "2", "3"],
      correctIndex: 2,
      explanation: "Each node has a 'prev' pointer and a 'next' pointer. 每个节点有prev和next两个指针。",
    },
    {
      question: "What is the main advantage of a doubly linked list over a singly linked list?\n\n双向链表比单链表的主要优势？",
      options: ["Less memory · 更少内存", "Faster search · 更快搜索", "Faster sorting · 更快排序", "Can traverse backwards · 可以反向遍历"],
      correctIndex: 3,
      explanation: "With prev pointers, you can go backward — impossible in singly linked lists! 有prev指针可以反向遍历——单链表做不到！",
    },
    {
      question: "In a doubly linked list, deleting a node requires updating how many pointers?\n\n双向链表删除节点需要更新几个指针？",
      options: ["0", "1", "4", "2"],
      correctIndex: 3,
      explanation: "Update previous node's 'next' and next node's 'prev'. 更新前一个节点的next和后一个节点的prev。",
    },
    {
      question: "What is the time complexity of deleting a known node in a doubly linked list?\n\n删除双向链表中已知节点的时间复杂度？",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctIndex: 2,
      explanation: "With direct access to the node, just update prev/next pointers → O(1)! 直接访问节点，只需更新指针→O(1)！",
    },
    {
      question: "What is the downside of a doubly linked list compared to singly?\n\n双向链表比单链表的缺点？",
      options: ["Can't insert at head · 不能头部插入", "Slower traversal · 更慢遍历", "Uses more memory per node · 每个节点用更多内存", "Can't store strings · 不能存字符串"],
      correctIndex: 2,
      explanation: "Extra 'prev' pointer means more memory per node. 额外的prev指针意味着每个节点更多内存。",
    },
    {
      question: "Which real-world application commonly uses doubly linked lists?\n\n哪个实际应用常用双向链表？",
      options: ["Calculator · 计算器", "Browser back/forward buttons · 浏览器前进后退", "File compression · 文件压缩", "Password storage · 密码存储"],
      correctIndex: 1,
      explanation: "Browser history navigation uses doubly linked lists — you can go back AND forward! 浏览器历史导航用双向链表——可以前进和后退！",
    },
    {
      question: "What does the 'prev' pointer of the first node (head) point to?\n\n头节点的prev指针指向什么？",
      options: ["The tail · 尾节点", "Itself · 自己", "The middle · 中间节点", "None/null"],
      correctIndex: 3,
      explanation: "The head's prev is None — there's nothing before the first node! 头节点的prev是None——第一个节点前面没有东西！",
    },
    {
      question: "To insert a new node between A and B in a doubly linked list, how many pointer updates are needed?\n\n在双向链表A和B之间插入新节点需要更新几个指针？",
      options: ["2", "3", "1", "4"],
      correctIndex: 3,
      explanation: "4 updates: new.next=B, new.prev=A, A.next=new, B.prev=new. 4次更新：新节点的next和prev，A的next，B的prev。",
    },
    {
      type: "coding",
      question: "Build a doubly linked list and traverse backwards\n\n构建双向链表并反向遍历",
      prompt: "🎯 Create a doubly linked list with 1,2,3 and print values in reverse order.\n创建包含1,2,3的双向链表并反向打印。",
      starterCode: "class DNode:\n    def __init__(self, data):\n        self.data = data\n        self.prev = None\n        self.next = None\n\n# Build: 1 <-> 2 <-> 3\n# Your code here\n\n# Print in reverse (3, 2, 1)\n# Your code here",
      expectedOutput: "3\n2\n1",
      hint: "Build nodes, link next AND prev. Start from the tail and follow prev pointers. 构建节点，连接next和prev。从尾部开始沿prev遍历。",
      explanation: "Link nodes both ways. Start at tail (node3), follow .prev until None. 双向连接节点，从尾部沿prev遍历到None。",
    },
    {
      type: "coding",
      question: "Delete a node from a doubly linked list\n\n从双向链表删除节点",
      prompt: "🎯 Delete the middle node (value 2) from the list 1↔2↔3, then print remaining.\n从1↔2↔3中删除中间节点2，打印剩余。",
      starterCode: "class DNode:\n    def __init__(self, data):\n        self.data = data\n        self.prev = None\n        self.next = None\n\nn1 = DNode(1)\nn2 = DNode(2)\nn3 = DNode(3)\nn1.next = n2\nn2.prev = n1\nn2.next = n3\nn3.prev = n2\n\n# Delete n2 (update pointers)\n# Your code here\n\n# Print forward\ncurrent = n1\nwhile current:\n    print(current.data)\n    current = current.next",
      expectedOutput: "1\n3",
      hint: "Set n1.next = n3 and n3.prev = n1 to skip n2. 设置n1.next=n3, n3.prev=n1来跳过n2。",
      explanation: "n1.next = n3; n3.prev = n1 — just bypass the deleted node! 直接绕过被删节点！",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🔄 Reverse Traversal · 反向遍历",
        description: "Given a doubly linked list with nodes 1→2→3→4→5, print all values backwards using .prev pointers.\n给定双向链表 1→2→3→4→5，用 .prev 指针反向打印所有值。",
        starterCode: "class DNode:\n    def __init__(self, data):\n        self.data = data\n        self.prev = None\n        self.next = None\n\n# Build: 1 ↔ 2 ↔ 3 ↔ 4 ↔ 5\nnodes = [DNode(i) for i in range(1, 6)]\nfor i in range(len(nodes)-1):\n    nodes[i].next = nodes[i+1]\n    nodes[i+1].prev = nodes[i]\n\ntail = nodes[-1]\n\n# Print backwards from tail\n# 从尾部反向打印\n",
        hint: "Start at tail, follow .prev until None. 从 tail 开始，沿 .prev 走到 None。",
        solution: "class DNode:\n    def __init__(self, data):\n        self.data = data\n        self.prev = None\n        self.next = None\n\nnodes = [DNode(i) for i in range(1, 6)]\nfor i in range(len(nodes)-1):\n    nodes[i].next = nodes[i+1]\n    nodes[i+1].prev = nodes[i]\n\ntail = nodes[-1]\ncurrent = tail\nwhile current:\n    print(current.data)\n    current = current.prev",
        expectedOutput: "5\n4\n3\n2\n1",
      },
    },
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box's Comparison Table · 对比表

| Feature 特性 | Array 数组 | Singly Linked 单向链表 | Doubly Linked 双向链表 |
|---|---|---|---|
| Access by index 索引访问 | O(1) ⚡ | O(n) 🐢 | O(n) 🐢 |
| Insert at start 头部插入 | O(n) 🐢 | O(1) ⚡ | O(1) ⚡ |
| Insert at end 尾部插入 | O(1)* ⚡ | O(n) 🐢 | O(1) ⚡ |
| Delete node 删除节点 | O(n) 🐢 | O(n) 🐢 | O(1)** ⚡ |
| Traverse backward 反向遍历 | ✅ | ❌ | ✅ |

*amortized **if you have the node reference`,
    },
  ],
};

const ds_1_4: Lesson = {
  id: "ds-1-4",
  moduleId: "ds-1",
  title: "Stacks — LIFO Magic",
  subtitle: "Last in, first out · 栈——后进先出的魔法",
  icon: "📚",
  xp: 20,
  duration: "20 min",
  order: 4,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box: Stacking Things Up!

Imagine a **stack of plates** 🍽️ at a buffet. You can only:
- **Push** — put a plate on TOP
- **Pop** — take the plate from the TOP

You can't reach the bottom plate without removing everything on top! This is **LIFO**: Last In, First Out.

> 🍽️ Real-world analogy: Stack of plates, pile of books, browser back button, Ctrl+Z undo!
> 现实类比：一摞盘子、一堆书、浏览器后退按钮、Ctrl+Z 撤销！

**The Call Stack** — when your program calls functions, it uses a stack! Each function call is "pushed" onto the stack, and when it returns, it's "popped" off.

📦 **Box says:** "Stacks are EVERYWHERE in computing! Your computer is literally using them right now!"`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Stack Implementation · 栈的实现

🎯 **What you'll learn:** How to build a Stack class with push, pop, peek, is_empty, and size operations.
学习目标：如何构建栈类，包含 push、pop、peek、is_empty 和 size 操作。

Think of a Pringles can 🥫 — you can only add or remove chips from the TOP. The last chip you put in is the first one you eat! That's LIFO (Last In, First Out). Simple but incredibly powerful.

🔑 **Key things to notice · 注意要点:**
- \\\`push\\\` uses list.append() — adds to the end (top of stack), O(1)
- \\\`pop\\\` uses list.pop() — removes from the end (top), O(1)
- \\\`peek\\\` looks at \\\`items[-1]\\\` without removing it
- Always check \\\`is_empty()\\\` before popping to avoid errors!

👀 Try pushing and popping in different orders — notice the LIFO pattern!`,
      code: `# 📦 Box: "Let's build a stack!"

class Stack:
    """LIFO Stack · 后进先出栈"""
    def __init__(self):
        self.items = []

    def push(self, item):
        """Add to top · 压入栈顶"""
        self.items.append(item)
        print(f"  Pushed: {item} → Stack: {self.items}")

    def pop(self):
        """Remove from top · 从栈顶弹出"""
        if self.is_empty():
            print("  Stack is empty! 栈是空的！")
            return None
        item = self.items.pop()
        print(f"  Popped: {item} → Stack: {self.items}")
        return item

    def peek(self):
        """Look at top without removing · 查看栈顶但不移除"""
        if self.is_empty():
            return None
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Demo: Stack of plates! 🍽️
print("🍽️ Stack of Plates Demo:")
plates = Stack()
plates.push("Red Plate")
plates.push("Blue Plate")
plates.push("Green Plate")

print(f"\\nTop plate: {plates.peek()}")  # Green
print(f"Stack size: {plates.size()}")     # 3

print("\\nRemoving plates:")
plates.pop()  # Green (last in, first out!)
plates.pop()  # Blue
plates.pop()  # Red
plates.pop()  # Empty!`,
    },
    {
      type: "code",
      emoji: "🔙",
      content: `## 🔙 Real Example: Browser Back Button · 浏览器后退按钮

🎯 **What you'll learn:** How TWO stacks work together to create browser back/forward navigation.
学习目标：两个栈如何协作实现浏览器的前进/后退导航。

Your browser's back button is literally a stack! 🌐 Every page you visit gets pushed onto the "back stack." When you hit back, it pops the current page onto a "forward stack." It's like having two piles of papers — move sheets between them!

🔑 **Key things to notice · 注意要点:**
- Two stacks: \\\`back_stack\\\` and \\\`forward_stack\\\` work as a pair
- Visiting a new page clears the forward stack (no "future" anymore!)
- \\\`back()\\\` pops from back_stack, pushes current to forward_stack
- \\\`forward()\\\` does the reverse — pops forward, pushes to back

👀 Try visiting pages then going back and forward — trace the two stacks!`,
      code: `# Simulate a browser's back/forward with stacks!
# 用栈模拟浏览器的前进/后退！

class BrowserHistory:
    def __init__(self):
        self.back_stack = []
        self.forward_stack = []
        self.current = "Home"

    def visit(self, url):
        self.back_stack.append(self.current)
        self.current = url
        self.forward_stack.clear()  # Clear forward history
        print(f"📄 Visiting: {self.current}")

    def back(self):
        if not self.back_stack:
            print("❌ No pages to go back to!")
            return
        self.forward_stack.append(self.current)
        self.current = self.back_stack.pop()
        print(f"⬅️ Back to: {self.current}")

    def forward(self):
        if not self.forward_stack:
            print("❌ No pages to go forward to!")
            return
        self.back_stack.append(self.current)
        self.current = self.forward_stack.pop()
        print(f"➡️ Forward to: {self.current}")

# Demo
browser = BrowserHistory()
browser.visit("google.com")
browser.visit("youtube.com")
browser.visit("github.com")
browser.back()       # youtube.com
browser.back()       # google.com
browser.forward()    # youtube.com`,
    },
    {
      type: "quiz",
      content: "🎓 Stack Quiz · 栈测验",
      quiz: [
        {
          question: "In a stack, which element is removed first?\n\n在栈中，哪个元素最先被移除？",
          options: ["The first one added (FIFO)", "The last one added (LIFO)", "A random element", "The middle element"],
          correctIndex: 1,
          explanation: "Stacks are LIFO — Last In, First Out! Like a stack of plates. 栈是后进先出！",
        },
        {
          question: "What are the two main stack operations?\n\n栈的两个主要操作是什么？",
          options: ["add and remove", "push and pop", "enqueue and dequeue", "insert and delete"],
          correctIndex: 1,
          explanation: "Push (add to top) and Pop (remove from top) are the core stack operations! Push 压入和 Pop 弹出是核心操作！",
        },
{
      question: "Which data structure does a stack resemble in real life?\n\n栈在现实中类似什么？",
      options: ["Stack of plates · 一叠盘子", "Queue at a store · 商店排队", "Phone book · 电话簿", "Road map · 路线图"],
      correctIndex: 0,
      explanation: "A stack of plates — you add/remove from the top only! 一叠盘子——只能从顶部添加/移除！",
    },
    {
      question: "What does LIFO stand for?\n\nLIFO 代表什么？",
      options: ["Linked Input First Output", "Least Important First Out · 最不重要先出", "Linear Input Fixed Output", "Last In First Out · 后进先出"],
      correctIndex: 3,
      explanation: "LIFO = Last In, First Out. The most recent item is removed first. LIFO=后进先出，最近添加的最先移除。",
    },
    {
      question: "What happens when you pop from an empty stack?\n\n从空栈弹出会怎样？",
      options: ["Returns 0 · 返回0", "Returns None", "Stack underflow/error · 栈下溢/错误", "Nothing happens · 什么都不发生"],
      correctIndex: 2,
      explanation: "Popping an empty stack causes an underflow error — nothing to remove! 弹出空栈导致下溢错误——没有东西可移除！",
    },
    {
      question: "What is the time complexity of push and pop in a stack?\n\n栈的push和pop时间复杂度？",
      options: ["O(n) for both · 都是O(n)", "O(n) push, O(1) pop", "O(1) push, O(n) pop", "O(1) for both · 都是O(1)"],
      correctIndex: 3,
      explanation: "Both push and pop are O(1) — just add/remove from the top! push和pop都是O(1)——只在顶部操作！",
    },
    {
      question: "Which Python data structure is commonly used to implement a stack?\n\n哪种Python数据结构常用于实现栈？",
      options: ["dict", "set", "list", "tuple"],
      correctIndex: 2,
      explanation: "Python lists with append() and pop() naturally work as stacks! Python列表的append()和pop()天然就是栈！",
    },
    {
      question: "If you push A, B, C onto a stack, what is the order when you pop all?\n\n如果依次压入A,B,C，全部弹出的顺序是？",
      options: ["A, B, C", "C, A, B", "B, A, C", "C, B, A"],
      correctIndex: 3,
      explanation: "LIFO: last pushed (C) comes out first → C, B, A. 后进先出：最后压入的C先出→C,B,A。",
    },
    {
      type: "coding",
      question: "Implement a stack using a Python list\n\n用Python列表实现栈",
      prompt: "🎯 Implement push, pop, and peek operations. Push 10, 20, 30. Pop once, then print peek.\n实现push、pop和peek操作。压入10,20,30。弹出一次，打印peek。",
      starterCode: "stack = []\n\n# Push 10, 20, 30\n# Your code here\n\n# Pop one element and print it\n# Your code here\n\n# Peek (print top without removing)\n# Your code here",
      expectedOutput: "30\n20",
      hint: "Use append() for push, pop() for pop. Peek = stack[-1]. 用append()压入，pop()弹出。Peek=stack[-1]。",
      explanation: "stack.append(10,20,30), print(stack.pop()) → 30, print(stack[-1]) → 20. append压入，pop弹出，[-1]查看栈顶。",
    },
    {
      type: "coding",
      question: "Reverse a string using a stack\n\n用栈反转字符串",
      prompt: "🎯 Use a stack to reverse the string 'hello' and print the result.\n用栈反转字符串'hello'并打印结果。",
      starterCode: "text = 'hello'\nstack = []\n\n# Push all characters onto stack\n# Your code here\n\n# Pop all characters to build reversed string\nresult = ''\n# Your code here\n\nprint(result)",
      expectedOutput: "olleh",
      hint: "Push each char, then pop all chars and concatenate. 逐个压入字符，全部弹出拼接。",
      explanation: "Push each character, then pop builds reversed order due to LIFO. 逐个压入后弹出，LIFO自然反转。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Stack Challenge · 栈挑战",
      challenge: {
        title: "🔤 Reverse a String with a Stack · 用栈反转字符串",
        description: "Push each character onto a stack, then pop them all off to reverse the string!\n把每个字符压入栈，然后全部弹出来反转字符串！",
        starterCode: "def reverse_string(s):\n    stack = []\n    # Push each character\n    # 压入每个字符\n    \n    # Pop all characters to build reversed string\n    # 弹出所有字符构建反转字符串\n    result = \"\"\n    \n    return result\n\nprint(reverse_string(\"hello\"))  # Should print: olleh",
        hint: "Loop through string to push, then while stack is not empty, pop and add to result. 循环字符串压入，然后循环弹出拼接结果。",
        solution: "def reverse_string(s):\n    stack = []\n    for char in s:\n        stack.append(char)\n    result = \"\"\n    while stack:\n        result += stack.pop()\n    return result\n\nprint(reverse_string(\"hello\"))",
        expectedOutput: "olleh",
      },
    },
  ],
};

const ds_1_5: Lesson = {
  id: "ds-1-5",
  moduleId: "ds-1",
  title: "Stack Projects — Balanced Parentheses & Undo",
  subtitle: "Practical stack applications · 栈的实际应用——括号匹配与撤销",
  icon: "⚖️",
  xp: 25,
  duration: "25 min",
  order: 5,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box: Stacks in the Real World!

Stacks aren't just theory — they solve REAL problems every day!

**Problem 1: Balanced Parentheses** ⚖️
Every code editor checks if your brackets match: \`{[()]}\` ✅ vs \`{[(])}\` ❌
How? With a stack! Push opening brackets, pop for closing ones.

**Problem 2: Undo System** ↩️
Every time you type, the action is pushed onto a stack. Ctrl+Z? Pop the last action!

> 📝 Real-world: Code editors, calculators, compilers ALL use stacks for bracket matching!
> 现实应用：代码编辑器、计算器、编译器都用栈来匹配括号！`,
    },
    {
      type: "code",
      emoji: "⚖️",
      content: `## ⚖️ Balanced Parentheses Checker · 括号匹配检查器

🎯 **What you'll learn:** How to use a stack to check if brackets are properly matched — a CLASSIC interview question!
学习目标：如何用栈检查括号是否正确匹配——经典面试题！

Imagine nesting Russian dolls 🪆 — each opening bracket must have a matching closing bracket in the right order. A stack naturally tracks "what's still open." Push when you open, pop when you close. If everything matches, the stack ends empty!

🔑 **Key things to notice · 注意要点:**
- Opening brackets \\\`([{\\\` get pushed onto the stack
- Closing brackets \\\`)]}\\\` trigger a pop — the popped bracket must match!
- If the stack is empty when you see a closer → unmatched! ❌
- At the end, the stack must be empty → all brackets matched! ✅

👀 Try adding your own test cases with different bracket combinations!`,
      code: `# 📦 Box: "This is a CLASSIC interview question!"

def is_balanced(expression):
    """Check if parentheses are balanced · 检查括号是否匹配"""
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}

    for char in expression:
        if char in '([{':
            stack.append(char)   # Push opening brackets 压入左括号
        elif char in ')]}':
            if not stack:
                return False     # No matching opener! 没有匹配的左括号！
            if stack[-1] != pairs[char]:
                return False     # Wrong type! 类型不匹配！
            stack.pop()          # Match found, pop! 匹配成功，弹出！

    return len(stack) == 0       # Stack should be empty 栈应该为空

# Test cases
tests = [
    ("{[()]}", True),
    ("((()))", True),
    ("{[(])}", False),   # Mismatched! 不匹配！
    ("(()", False),      # Missing closer 缺少右括号
    ("", True),          # Empty is balanced 空字符串是平衡的
]

for expr, expected in tests:
    result = is_balanced(expr)
    status = "✅" if result == expected else "❌"
    print(f'{status} "{expr}" → {result}')`,
    },
    {
      type: "code",
      emoji: "↩️",
      content: `## ↩️ Undo/Redo System · 撤销/重做系统

🎯 **What you'll learn:** How to build an undo/redo text editor using two stacks — just like real software!
学习目标：如何用两个栈构建撤销/重做文本编辑器——就像真正的软件！

Every text editor you've ever used has Ctrl+Z (undo) and Ctrl+Y (redo). The secret? Two stacks! 📝 Before each change, save the current state to the undo stack. Undoing moves it to the redo stack. It's like a time machine with forward and reverse!

🔑 **Key things to notice · 注意要点:**
- \\\`type_text\\\` saves the current state BEFORE modifying (so you can undo)
- \\\`undo\\\` pops from undo_stack, pushes current state to redo_stack
- \\\`redo\\\` does the reverse — restores what was undone
- New typing clears the redo_stack (the "alternate future" is gone!)

👀 Try typing several words, then undo/redo — watch the text change!`,
      code: `# 📦 Box: "Build your own text editor undo!"

class TextEditor:
    def __init__(self):
        self.text = ""
        self.undo_stack = []
        self.redo_stack = []

    def type_text(self, new_text):
        self.undo_stack.append(self.text)  # Save current state
        self.text += new_text
        self.redo_stack.clear()
        print(f"✏️ Typed: '{new_text}' → Text: '{self.text}'")

    def undo(self):
        if not self.undo_stack:
            print("❌ Nothing to undo!")
            return
        self.redo_stack.append(self.text)
        self.text = self.undo_stack.pop()
        print(f"↩️ Undo → Text: '{self.text}'")

    def redo(self):
        if not self.redo_stack:
            print("❌ Nothing to redo!")
            return
        self.undo_stack.append(self.text)
        self.text = self.redo_stack.pop()
        print(f"↪️ Redo → Text: '{self.text}'")

# Demo
editor = TextEditor()
editor.type_text("Hello")
editor.type_text(" World")
editor.type_text("!")
editor.undo()        # Remove "!"
editor.undo()        # Remove " World"
editor.redo()        # Bring back " World"
print(f"\\nFinal: '{editor.text}'")`,
    },
    {
      type: "quiz",
      content: "🎓 Stack Applications Quiz · 栈应用测验",
      quiz: [
        {
          question: "When checking balanced parentheses, what do you push onto the stack?\n\n检查括号匹配时，什么被压入栈？",
          options: ["Closing brackets", "Opening brackets", "All brackets", "Numbers"],
          correctIndex: 1,
          explanation: "Push opening brackets, then pop when you find a matching closing bracket! 压入左括号，遇到匹配的右括号时弹出！",
        },
{
      question: "For the string '({[]})', is it balanced?\n\n字符串'({[]})'是否平衡？",
      options: ["No · 否", "Yes · 是", "Only partially · 部分平衡", "Can't determine · 无法判断"],
      correctIndex: 1,
      explanation: "Each opening bracket has a matching closing bracket in correct order → balanced! 每个左括号都有正确顺序的右括号→平衡！",
    },
    {
      question: "What do you check when encountering a closing bracket?\n\n遇到右括号时检查什么？",
      options: ["Stack is full · 栈是否满", "String is empty · 字符串是否为空", "Stack size is even · 栈大小是否偶数", "Stack top matches · 栈顶是否匹配"],
      correctIndex: 3,
      explanation: "Pop the stack and check if it matches the corresponding opening bracket! 弹出栈顶检查是否与对应的左括号匹配！",
    },
    {
      question: "For undo functionality, which operation corresponds to 'undo'?\n\n撤销功能中，'undo'对应哪个操作？",
      options: ["Push · 压入", "Pop · 弹出", "Peek · 查看", "Clear · 清空"],
      correctIndex: 1,
      explanation: "Undo = pop the last action from the stack! 撤销=从栈中弹出最后一个操作！",
    },
    {
      question: "What should you check after processing all characters in bracket matching?\n\n处理完所有字符后应检查什么？",
      options: ["String length · 字符串长度", "Input has no spaces · 输入没有空格", "Stack has 1 element · 栈有1个元素", "Stack is empty · 栈是否为空"],
      correctIndex: 3,
      explanation: "If stack is empty, all brackets matched. If not, there are unmatched opening brackets! 栈空则全部匹配，否则有未匹配的左括号！",
    },
    {
      question: "Which string has unbalanced brackets?\n\n哪个字符串括号不平衡？",
      options: ["'(())'", "'{[]}'", "'([)]'", "'()'"],
      correctIndex: 2,
      explanation: "'([)]' has incorrect nesting — the ] should come before ). '([)]'嵌套不正确——]应该在)之前。",
    },
    {
      question: "How many undo operations can you perform if you've done 5 actions?\n\n做了5个操作后能撤销几次？",
      options: ["Infinite · 无限", "1", "0", "5"],
      correctIndex: 3,
      explanation: "You can undo at most 5 times — one for each action pushed onto the stack. 最多撤销5次——栈中每个操作一次。",
    },
    {
      question: "What data structure would support both undo AND redo?\n\n什么数据结构支持撤销和重做？",
      options: ["Two stacks · 两个栈", "One stack · 一个栈", "A queue · 一个队列", "An array · 一个数组"],
      correctIndex: 0,
      explanation: "One stack for undo history, another for redo history! 一个栈存撤销历史，另一个存重做历史！",
    },
    {
      type: "coding",
      question: "Check if parentheses are balanced\n\n检查括号是否平衡",
      prompt: "🎯 Write code to check if '(())()' has balanced parentheses. Print True or False.\n检查'(())()'括号是否平衡，打印True或False。",
      starterCode: "s = '(())()'\nstack = []\n\n# Check if balanced\n# Your code here\n\n# Print result",
      expectedOutput: "True",
      hint: "Push '(' onto stack, pop when ')'. At end, stack should be empty. 遇'('压入，遇')'弹出。最后栈应为空。",
      explanation: "For each '(' push, for each ')' pop. If stack is empty at end → balanced! 遇左括号压入，右括号弹出，最后栈空则平衡！",
    },
    {
      type: "coding",
      question: "Implement simple undo system\n\n实现简单撤销系统",
      prompt: "🎯 Track text edits: add 'H', add 'i', add '!', then undo once. Print current text.\n追踪文本编辑：添加'H','i','!'，撤销一次，打印当前文本。",
      starterCode: "history = []\ntext = ''\n\n# Add 'H', 'i', '!' (push each state)\n# Then undo once\n# Print the result\n\n# Your code here",
      expectedOutput: "Hi",
      hint: "Push text state after each edit. Undo = pop last state. 每次编辑后压入状态。撤销=弹出最后状态。",
      explanation: "Push 'H', 'Hi', 'Hi!' → pop returns 'Hi!' (discarded), current = 'Hi'. 压入状态后弹出撤销。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🔢 Min Stack · 最小值栈",
        description: "Design a stack that supports push, pop, and getMin (return minimum element) all in O(1) time!\n设计一个栈，push、pop、getMin（返回最小元素）都是 O(1) 时间！",
        starterCode: "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []  # Track minimums!\n\n    def push(self, val):\n        # Push val, and update min_stack\n        pass\n\n    def pop(self):\n        # Pop from both stacks\n        pass\n\n    def get_min(self):\n        # Return current minimum\n        pass\n\ns = MinStack()\ns.push(5)\ns.push(3)\ns.push(7)\nprint(s.get_min())  # 3\ns.pop()\nprint(s.get_min())  # 3\ns.pop()\nprint(s.get_min())  # 5",
        hint: "Keep a parallel stack that always has the current minimum on top. When pushing, push min(val, current_min). 维护一个平行栈，栈顶始终是当前最小值。",
        solution: "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n\n    def push(self, val):\n        self.stack.append(val)\n        if not self.min_stack or val <= self.min_stack[-1]:\n            self.min_stack.append(val)\n        else:\n            self.min_stack.append(self.min_stack[-1])\n\n    def pop(self):\n        self.stack.pop()\n        self.min_stack.pop()\n\n    def get_min(self):\n        return self.min_stack[-1]\n\ns = MinStack()\ns.push(5)\ns.push(3)\ns.push(7)\nprint(s.get_min())\ns.pop()\nprint(s.get_min())\ns.pop()\nprint(s.get_min())",
        expectedOutput: "3\n3\n5",
      },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE DS-2: QUEUES & TREES
// ═══════════════════════════════════════════════════════════════

const ds_2_1: Lesson = {
  id: "ds-2-1",
  moduleId: "ds-2",
  title: "Queues — FIFO Processing",
  subtitle: "First in, first out · 队列——先进先出",
  icon: "🚶",
  xp: 20,
  duration: "20 min",
  order: 1,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box: Standing in Line!

A **queue** is the opposite of a stack! It's **FIFO**: First In, First Out.

> 🏪 Real-world analogy: A line at a store! The first person in line gets served first. No cutting!
> 现实类比：商店排队！先排队的人先被服务。不许插队！

**Queue Operations:**
- **Enqueue** — add to the BACK of the line
- **Dequeue** — remove from the FRONT of the line
- **Peek/Front** — look at who's first without removing them

Where queues are used:
- 🖨️ Print jobs waiting in queue
- 🎮 Matchmaking in online games
- 📧 Email servers processing messages
- 🚗 Traffic systems

📦 **Box says:** "Stacks are for when you want the most RECENT thing. Queues are for when you want things in ORDER!"`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Queue Implementation · 队列实现

🎯 **What you'll learn:** How to build a Queue class with enqueue, dequeue, front, is_empty, and size.
学习目标：如何构建队列类，包含入队、出队、查看队首、判空和大小操作。

A queue is just a line at a coffee shop ☕ — the first person in line gets served first, and new people join at the back. No cutting! Python's \\\`deque\\\` (double-ended queue) makes both ends efficient.

🔑 **Key things to notice · 注意要点:**
- We use \\\`collections.deque\\\` instead of a regular list — \\\`popleft()\\\` is O(1)!
- \\\`enqueue\\\` = append to back, \\\`dequeue\\\` = popleft from front
- Regular list's \\\`pop(0)\\\` is O(n) because everything shifts — deque avoids this!
- \\\`front()\\\` peeks without removing, like seeing who's next in line

👀 Try enqueuing and dequeuing customers — notice FIFO order!`,
      code: `# 📦 Box: "First come, first served!"
from collections import deque

class Queue:
    """FIFO Queue · 先进先出队列"""
    def __init__(self):
        self.items = deque()  # deque is efficient for both ends! 双端队列两端都快！

    def enqueue(self, item):
        """Add to back · 加入队尾"""
        self.items.append(item)
        print(f"  ➕ Enqueued: {item} → Queue: {list(self.items)}")

    def dequeue(self):
        """Remove from front · 从队首移除"""
        if self.is_empty():
            print("  Queue is empty! 队列为空！")
            return None
        item = self.items.popleft()
        print(f"  ➖ Dequeued: {item} → Queue: {list(self.items)}")
        return item

    def front(self):
        return self.items[0] if self.items else None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Demo: Coffee shop line! ☕
print("☕ Coffee Shop Queue:")
line = Queue()
line.enqueue("Alice")
line.enqueue("Bob")
line.enqueue("Charlie")

print(f"\\nNext customer: {line.front()}")  # Alice
print(f"People waiting: {line.size()}")     # 3

print("\\nServing customers:")
line.dequeue()  # Alice served first!
line.dequeue()  # Then Bob
line.enqueue("Diana")  # Diana joins
line.dequeue()  # Charlie (was before Diana)
line.dequeue()  # Diana`,
    },
    {
      type: "quiz",
      content: "🎓 Queue Quiz · 队列测验",
      quiz: [
        {
          question: "What does FIFO stand for?\n\nFIFO 代表什么？",
          options: ["Fast In, Fast Out", "First In, Last Out", "First In, First Out", "Find In, Find Out"],
          correctIndex: 2,
          explanation: "FIFO = First In, First Out — like a line at a store! 先进先出——就像排队！",
        },
{
      question: "Which real-world scenario best represents a queue?\n\n哪个现实场景最能代表队列？",
      options: ["Line at a bank · 银行排队", "Stack of books · 一摞书", "Shuffled deck of cards · 洗好的牌", "Random lottery · 随机抽奖"],
      correctIndex: 0,
      explanation: "A line at a bank is FIFO — first person in line is served first! 银行排队是先进先出——先排队的先服务！",
    },
    {
      question: "What are the two main operations of a queue?\n\n队列的两个主要操作是什么？",
      options: ["enqueue/dequeue", "push/pop", "add/delete", "insert/remove"],
      correctIndex: 0,
      explanation: "Enqueue adds to the back, dequeue removes from the front. enqueue在队尾添加，dequeue从队首移除。",
    },
    {
      question: "What is the time complexity of enqueue and dequeue?\n\nenqueue和dequeue的时间复杂度？",
      options: ["O(n) for both · 都是O(n)", "O(1) enqueue, O(n) dequeue", "O(1) for both · 都是O(1)", "O(n) enqueue, O(1) dequeue"],
      correctIndex: 2,
      explanation: "Both are O(1) with proper implementation (e.g., collections.deque). 正确实现（如deque）两者都是O(1)。",
    },
    {
      question: "If you enqueue A, B, C, what is dequeued first?\n\n如果依次入队A,B,C，先出队的是？",
      options: ["C", "B", "All at once · 同时出队", "A"],
      correctIndex: 3,
      explanation: "FIFO: A was first in, so A is first out! 先进先出：A先入队所以先出队！",
    },
    {
      question: "Why is `list.pop(0)` inefficient for implementing a queue in Python?\n\n为什么list.pop(0)实现队列效率低？",
      options: ["It doesn't work · 不能用", "It's O(n) — shifts all elements · O(n)——移动所有元素", "It removes the last item · 移除最后元素", "It returns None"],
      correctIndex: 1,
      explanation: "pop(0) shifts all remaining elements left → O(n). Use collections.deque instead! pop(0)要左移所有元素→O(n)。用deque代替！",
    },
    {
      question: "Which Python module provides an efficient queue implementation?\n\n哪个Python模块提供高效队列实现？",
      options: ["math", "collections", "random", "os"],
      correctIndex: 1,
      explanation: "collections.deque provides O(1) operations on both ends! collections.deque两端操作都是O(1)！",
    },
    {
      question: "What is a circular queue?\n\n什么是循环队列？",
      options: ["A queue that wraps around to reuse space · 循环利用空间的队列", "A queue sorted in circles · 圆形排序的队列", "A queue with no front · 没有队首的队列", "A queue of circles · 圆的队列"],
      correctIndex: 0,
      explanation: "A circular queue wraps the end back to the start, efficiently reusing array space. 循环队列将末尾连回开头，高效重用空间。",
    },
    {
      type: "coding",
      question: "Implement a queue using collections.deque\n\n用collections.deque实现队列",
      prompt: "🎯 Create a queue, enqueue 'A','B','C', dequeue one, print the dequeued item and remaining queue.\n创建队列，入队A,B,C，出队一个，打印出队元素和剩余队列。",
      starterCode: "from collections import deque\n\nqueue = deque()\n\n# Enqueue A, B, C\n# Dequeue one and print it\n# Print remaining queue as list\n\n# Your code here",
      expectedOutput: "A\n['B', 'C']",
      hint: "Use append() to enqueue, popleft() to dequeue. 用append()入队，popleft()出队。",
      explanation: "deque.append() adds to right, deque.popleft() removes from left → FIFO! append右侧添加，popleft左侧移除→先进先出！",
    },
    {
      type: "coding",
      question: "Simulate a print queue\n\n模拟打印队列",
      prompt: "🎯 Simulate processing 3 print jobs: 'Doc1', 'Doc2', 'Doc3'. Print each as it's processed.\n模拟处理3个打印任务，处理时打印每个。",
      starterCode: "from collections import deque\n\nprint_queue = deque(['Doc1', 'Doc2', 'Doc3'])\n\n# Process all jobs (dequeue and print each)\n# Your code here",
      expectedOutput: "Processing: Doc1\nProcessing: Doc2\nProcessing: Doc3",
      hint: "Use a while loop: while print_queue, popleft and print. 用while循环：队列非空时popleft并打印。",
      explanation: "while print_queue: job = print_queue.popleft(); print(f'Processing: {job}'). 循环出队直到空。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Queue Challenge · 队列挑战",
      challenge: {
        title: "🔥 Hot Potato Game · 烫手山芋游戏",
        description: "Simulate the hot potato game: players in a circle pass a potato. Every N passes, the person holding it is out!\n模拟烫手山芋游戏：玩家围成圈传递山芋，每 N 次传递，持有者淘汰！",
        starterCode: "from collections import deque\n\ndef hot_potato(names, num):\n    q = deque(names)\n    while len(q) > 1:\n        # Pass the potato 'num' times\n        # (rotate the queue)\n        # Then eliminate the holder\n        pass\n    return q[0]\n\nplayers = [\"Alice\", \"Bob\", \"Charlie\", \"Diana\", \"Eve\"]\nwinner = hot_potato(players, 3)\nprint(f\"Winner: {winner}\")",
        hint: "To 'pass', dequeue from front and enqueue to back. After num passes, dequeue and don't re-add! 传递=从前取出放到后面。传完后取出不放回！",
        solution: "from collections import deque\n\ndef hot_potato(names, num):\n    q = deque(names)\n    while len(q) > 1:\n        for _ in range(num):\n            q.append(q.popleft())\n        eliminated = q.popleft()\n        print(f\"Eliminated: {eliminated}\")\n    return q[0]\n\nplayers = [\"Alice\", \"Bob\", \"Charlie\", \"Diana\", \"Eve\"]\nwinner = hot_potato(players, 3)\nprint(f\"Winner: {winner}\")",
      },
    },
  ],
};

const ds_2_2: Lesson = {
  id: "ds-2-2",
  moduleId: "ds-2",
  title: "Priority Queues & Heaps",
  subtitle: "Not all items are equal · 优先队列与堆",
  icon: "🏥",
  xp: 25,
  duration: "25 min",
  order: 2,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box: Emergency Room Queue!

In a regular queue, everyone waits in order. But what about an **emergency room**? 🏥

A patient with a broken arm 🦴 should be seen before someone with a cold 🤧, even if the cold patient arrived first!

That's a **Priority Queue** — items have priorities, and the highest priority is served first!

> 🏥 Real-world analogy: Hospital ER — critical patients first, regardless of arrival time!
> 现实类比：医院急诊室——危重病人优先，不管到达时间！

**How is it implemented?** With a **Heap** — a special tree structure where the parent is always ≤ (min-heap) or ≥ (max-heap) its children.

Python's \`heapq\` module gives us a min-heap for free!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Priority Queue with heapq · 用 heapq 实现优先队列

🎯 **What you'll learn:** How to use Python's heapq module to build a priority queue where the most urgent item comes out first.
学习目标：如何使用 Python 的 heapq 模块构建优先队列，让最紧急的项目最先处理。

Think of an emergency room 🏥 — a heart attack patient gets treated before someone with a cold, even if the cold patient arrived first! The priority number decides the order, not arrival time. Lower number = higher priority.

🔑 **Key things to notice · 注意要点:**
- \\\`heapq.heappush()\\\` adds items maintaining heap order — O(log n)
- \\\`heapq.heappop()\\\` removes the SMALLEST item — O(log n)
- Tuples are compared element by element: (priority, tiebreaker, data)
- The arrival_order field breaks ties when priorities are equal

👀 Try changing patient priorities and see how the treatment order changes!`,
      code: `import heapq

# 🏥 Emergency Room Priority Queue
# Lower number = higher priority (1 = critical!)
# 数字越小优先级越高

er_queue = []

# (priority, arrival_order, patient_name)
heapq.heappush(er_queue, (3, 1, "Alice - Cold"))
heapq.heappush(er_queue, (1, 2, "Bob - Heart Attack"))
heapq.heappush(er_queue, (2, 3, "Charlie - Broken Arm"))
heapq.heappush(er_queue, (1, 4, "Diana - Stroke"))

print("🏥 ER Treatment Order:")
order = 1
while er_queue:
    priority, _, patient = heapq.heappop(er_queue)
    print(f"  {order}. [Priority {priority}] {patient}")
    order += 1

# Output order: Bob (heart attack), Diana (stroke), Charlie (arm), Alice (cold)
# 📦 Box: "The heap always gives us the highest-priority item!"`,
    },
    {
      type: "code",
      emoji: "🌳",
      content: `## 🌳 Understanding Heap Structure · 理解堆结构

🎯 **What you'll learn:** How a heap is structured as a complete binary tree, and how heapify and heappop work.
学习目标：堆如何作为完全二叉树结构化，以及 heapify 和 heappop 的工作原理。

A heap is like a tournament bracket 🏆 where the winner (smallest value) always floats to the top! When you remove the winner, the next-best takes their place. \\\`heapify\\\` reorganizes a messy list into this structure in just O(n) time!

🔑 **Key things to notice · 注意要点:**
- Min-heap rule: every parent ≤ its children (smallest always at root)
- \\\`heapq.heapify()\\\` transforms a list in-place in O(n) — very efficient!
- The heap is stored as a flat list, but represents a tree (parent at i, children at 2i+1 and 2i+2)
- Popping repeatedly gives you sorted order — that's basically heap sort!

👀 Try heapifying different lists and popping elements to see sorted output!`,
      code: `# 🌳 Root: "A heap is a special complete binary tree!"
# Min-heap property: parent ≤ children
# 最小堆性质：父节点 ≤ 子节点

import heapq

# Build a min-heap from a list
data = [5, 3, 8, 1, 2, 7]
print(f"Original: {data}")

heapq.heapify(data)  # Transform list into a heap in O(n)!
print(f"Heapified: {data}")  # [1, 2, 7, 5, 3, 8]
# Notice: 1 is at the root (index 0) — always the minimum!

# Visualize the heap as a tree:
#        1
#      /   \\
#     2     7
#    / \\   /
#   5   3 8

# Pop elements (always gets minimum!)
print("\\nPopping in order:")
while data:
    print(f"  {heapq.heappop(data)}", end="")
print()  # 1, 2, 3, 5, 7, 8 — sorted!

print("\\n🌳 Root: Heaps give us efficient sorting for free!")`,
    },
    {
      type: "quiz",
      content: "🎓 Heap Quiz · 堆测验",
      quiz: [
        {
          question: "In a min-heap, where is the smallest element?\n\n在最小堆中，最小的元素在哪里？",
          options: ["At the bottom", "Random position", "In the middle", "At the root (top)"],
          correctIndex: 3,
          explanation: "In a min-heap, the root always holds the minimum value! 最小堆中，根节点始终是最小值！",
        },
{
      question: "What makes a priority queue different from a regular queue?\n\n优先队列与普通队列有何不同？",
      options: ["It's faster · 更快", "It only stores numbers · 只存数字", "It uses more memory · 用更多内存", "Elements are dequeued by priority · 按优先级出队"],
      correctIndex: 3,
      explanation: "Priority queue dequeues the highest (or lowest) priority element first! 优先队列先出队最高（或最低）优先级的元素！",
    },
    {
      question: "What underlying data structure efficiently implements a priority queue?\n\n什么底层数据结构能高效实现优先队列？",
      options: ["Array · 数组", "Heap · 堆", "Linked list · 链表", "Stack · 栈"],
      correctIndex: 1,
      explanation: "A heap provides O(log n) insert and O(1) access to min/max! 堆提供O(log n)插入和O(1)访问最小/最大值！",
    },
    {
      question: "In a max-heap, what is true about every parent node?\n\n在最大堆中，每个父节点有什么特性？",
      options: ["Smaller than children · 比子节点小", "Larger than or equal to children · 大于等于子节点", "Equal to children · 等于子节点", "Has exactly 2 children · 恰好有2个子节点"],
      correctIndex: 1,
      explanation: "Max-heap property: parent ≥ children at every level. 最大堆性质：每层父节点≥子节点。",
    },
    {
      question: "What is the time complexity of inserting into a heap?\n\n堆插入的时间复杂度？",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 1,
      explanation: "Insert at the end and 'bubble up' — at most log(n) swaps for tree height. 在末尾插入并上浮——最多log(n)次交换。",
    },
    {
      question: "Which Python module provides a heap implementation?\n\n哪个Python模块提供堆实现？",
      options: ["heap", "priority", "heapq", "queue"],
      correctIndex: 2,
      explanation: "Python's heapq module provides a min-heap implementation! Python的heapq模块提供最小堆实现！",
    },
    {
      question: "What is the time complexity of extracting the minimum from a min-heap?\n\n从最小堆提取最小值的时间复杂度？",
      options: ["O(1)", "O(n²)", "O(n)", "O(log n)"],
      correctIndex: 3,
      explanation: "Remove root (O(1) access) then re-heapify (O(log n)) → total O(log n). 移除根(O(1)访问)然后重建堆(O(log n))→总共O(log n)。",
    },
    {
      question: "A hospital ER uses which data structure to manage patients?\n\n医院急诊室用什么数据结构管理患者？",
      options: ["Stack · 栈", "Priority queue · 优先队列", "Regular queue · 普通队列", "Array · 数组"],
      correctIndex: 1,
      explanation: "Patients are treated by urgency (priority), not arrival order! 患者按紧急程度（优先级）治疗，不是到达顺序！",
    },
    {
      type: "coding",
      question: "Use Python heapq to find the 2 smallest numbers\n\n用heapq找出2个最小数",
      prompt: "🎯 Use heapq.nsmallest to find the 2 smallest numbers from [5, 3, 8, 1, 9, 2].\n用heapq.nsmallest找出最小的2个数。",
      starterCode: "import heapq\n\nnums = [5, 3, 8, 1, 9, 2]\n\n# Find 2 smallest numbers\n# Your code here\n\nprint(result)",
      expectedOutput: "[1, 2]",
      hint: "heapq.nsmallest(n, iterable) returns the n smallest elements. heapq.nsmallest(n, 可迭代对象)返回n个最小元素。",
      explanation: "heapq.nsmallest(2, nums) returns [1, 2] — the two smallest values! 返回最小的两个值！",
    },
    {
      type: "coding",
      question: "Build a min-heap and extract elements in order\n\n构建最小堆并按序提取元素",
      prompt: "🎯 Push 4, 1, 7, 3 into a heap, then pop all elements and print each.\n将4,1,7,3压入堆，然后逐个弹出打印。",
      starterCode: "import heapq\n\nheap = []\n\n# Push 4, 1, 7, 3\n# Pop and print all elements\n\n# Your code here",
      expectedOutput: "1\n3\n4\n7",
      hint: "Use heapq.heappush() to add, heapq.heappop() to remove smallest. 用heappush添加，heappop移除最小。",
      explanation: "Push all values, then repeatedly heappop() gives them in sorted order! 全部压入后反复heappop得到排序结果！",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🏆 Top K Elements · 前K个最大元素",
        description: "Find the 3 largest numbers in a list using a heap!\n用堆找出列表中最大的3个数！",
        starterCode: "import heapq\n\nnums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]\n\n# Find the 3 largest numbers\n# 找出最大的3个数\n# Hint: heapq.nlargest(k, list)\n\nprint(result)  # Should print: [9, 6, 5]",
        hint: "Use heapq.nlargest(3, nums) 用 heapq.nlargest(3, nums)",
        solution: "import heapq\n\nnums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]\nresult = heapq.nlargest(3, nums)\nprint(result)",
        expectedOutput: "[9, 6, 5]",
      },
    },
  ],
};

const ds_2_3: Lesson = {
  id: "ds-2-3",
  moduleId: "ds-2",
  title: "Binary Trees — Branching Out",
  subtitle: "Nodes, children, and traversals · 二叉树——分枝生长",
  icon: "🌳",
  xp: 20,
  duration: "22 min",
  order: 3,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🌳",
      content: `## 🌳 Root Says: Welcome to the Forest!

Hi! I'm **Root** 🌳, your tree expert! Trees are one of the most important data structures in computer science.

A **binary tree** is like a family tree where each person has at most **2 children** (left and right).

> 🌳 Real-world analogy: A family tree! Each person (node) can have a left child and right child. The topmost person is the root!
> 现实类比：家谱！每个人（节点）最多有左右两个孩子。最上面的人是根！

**Tree vocabulary:**
- **Root** — the topmost node (no parent)
- **Leaf** — a node with no children
- **Height** — longest path from root to leaf
- **Depth** — distance from root to a node

\`\`\`
        1       ← Root 根
       / \\
      2   3     ← Children 子节点
     / \\   \\
    4   5   6   ← Leaves 叶节点
\`\`\`

🌳 **Visualize it!** Go to [Data Structures Playground](/dashboard/data-structures) to see tree traversals animated!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Building a Binary Tree · 构建二叉树

🎯 **What you'll learn:** How to create tree nodes, connect them, and traverse the tree three different ways.
学习目标：如何创建树节点、连接节点，以及用三种方式遍历树。

Building a tree is like building a family tree 👨‍👩‍👧‍👦 — start with the ancestor (root), then add children. Traversal is like visiting every family member, but the ORDER you visit them matters! In-order, pre-order, and post-order each visit the same nodes differently.

🔑 **Key things to notice · 注意要点:**
- Each TreeNode has \\\`value\\\`, \\\`left\\\`, and \\\`right\\\`
- In-order (Left→Root→Right): visits nodes in sorted order for BSTs!
- Pre-order (Root→Left→Right): good for copying/serializing a tree
- Post-order (Left→Right→Root): good for deleting a tree (children first!)
- All three use recursion — the function calls itself for subtrees

👀 Try adding more nodes and predicting the traversal output before running!`,
      code: `# 🌳 Root: "Let's grow a tree!"

class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Build this tree:
#        1
#       / \\
#      2   3
#     / \\   \\
#    4   5   6

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.right = TreeNode(6)

# Three types of traversal! 三种遍历方式！
def inorder(node):
    """Left → Root → Right · 左→根→右"""
    if node:
        inorder(node.left)
        print(node.value, end=" ")
        inorder(node.right)

def preorder(node):
    """Root → Left → Right · 根→左→右"""
    if node:
        print(node.value, end=" ")
        preorder(node.left)
        preorder(node.right)

def postorder(node):
    """Left → Right → Root · 左→右→根"""
    if node:
        postorder(node.left)
        postorder(node.right)
        print(node.value, end=" ")

print("In-order (Left→Root→Right):")
inorder(root)    # 4 2 5 1 3 6
print("\\n\\nPre-order (Root→Left→Right):")
preorder(root)   # 1 2 4 5 3 6
print("\\n\\nPost-order (Left→Right→Root):")
postorder(root)  # 4 5 2 6 3 1
print()`,
    },
    {
      type: "quiz",
      content: "🎓 Tree Traversal Quiz · 树遍历测验",
      quiz: [
        {
          question: "What is the in-order traversal of this tree?\n```\n    A\n   / \\\n  B   C\n```\n这棵树的中序遍历是什么？",
          options: ["A B C", "C A B", "B C A", "B A C"],
          correctIndex: 3,
          explanation: "In-order = Left → Root → Right: B (left), A (root), C (right). 中序 = 左→根→右！",
        },
        {
          question: "What is a 'leaf' node?\n\n什么是'叶'节点？",
          options: ["The root node", "Any node", "A node with two children", "A node with no children"],
          correctIndex: 3,
          explanation: "A leaf is a node with no children — it's at the 'end' of a branch! 叶节点没有子节点！",
        },
{
      question: "What is the maximum number of children a node can have in a binary tree?\n\n二叉树节点最多有几个子节点？",
      options: ["1", "2", "3", "Unlimited · 无限"],
      correctIndex: 1,
      explanation: "Binary = two! Each node has at most 2 children (left and right). 二叉=两个！每个节点最多2个子节点。",
    },
    {
      question: "What is the depth of the root node?\n\n根节点的深度是多少？",
      options: ["1", "0", "-1", "Depends on tree · 取决于树"],
      correctIndex: 1,
      explanation: "The root is at depth 0 — it's the starting point! 根节点深度为0——它是起点！",
    },
    {
      question: "What is pre-order traversal order?\n\n前序遍历的顺序是什么？",
      options: ["Left, Root, Right", "Root, Left, Right", "Left, Right, Root", "Right, Root, Left"],
      correctIndex: 1,
      explanation: "Pre-order: visit Root first, then Left subtree, then Right subtree. 前序：先访问根，再左子树，再右子树。",
    },
    {
      question: "What is post-order traversal order?\n\n后序遍历的顺序是什么？",
      options: ["Root, Left, Right", "Left, Root, Right", "Left, Right, Root", "Right, Left, Root"],
      correctIndex: 2,
      explanation: "Post-order: Left, Right, Root — visit root LAST. 后序：左、右、根——最后访问根。",
    },
    {
      question: "A complete binary tree with height 3 has at most how many nodes?\n\n高度为3的完全二叉树最多有几个节点？",
      options: ["15", "8", "7", "16"],
      correctIndex: 0,
      explanation: "Maximum nodes = 2^(h+1) - 1 = 2^4 - 1 = 15. 最多节点数 = 2^(h+1)-1 = 15。",
    },
    {
      question: "Which traversal of a binary tree visits nodes level by level?\n\n哪种遍历逐层访问二叉树节点？",
      options: ["In-order · 中序", "Pre-order · 前序", "Level-order (BFS) · 层序(BFS)", "Post-order · 后序"],
      correctIndex: 2,
      explanation: "Level-order traversal uses BFS to visit each level from top to bottom. 层序遍历用BFS从上到下逐层访问。",
    },
    {
      type: "coding",
      question: "Create a binary tree and perform in-order traversal\n\n创建二叉树并进行中序遍历",
      prompt: "🎯 Build a tree (root=1, left=2, right=3) and print in-order traversal.\n构建树(根=1, 左=2, 右=3)并打印中序遍历。",
      starterCode: "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\n# Build tree: 1 with left=2, right=3\n# Your code here\n\n# In-order traversal (Left, Root, Right)\ndef inorder(node):\n    if node:\n        # Your code here\n        pass\n\ninorder(root)",
      expectedOutput: "2\n1\n3",
      hint: "In-order: recursively visit left, print current, visit right. 中序：递归访问左、打印当前、访问右。",
      explanation: "inorder(left) → print root → inorder(right) gives Left-Root-Right order. 递归中序遍历：左-根-右。",
    },
    {
      type: "coding",
      question: "Count nodes in a binary tree\n\n计算二叉树节点数",
      prompt: "🎯 Count total nodes in a tree with root=1, left=2(left=4), right=3.\n计算有5个节点的树的节点总数。",
      starterCode: "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\n\ndef count_nodes(node):\n    # Your code here\n    pass\n\nprint(count_nodes(root))",
      expectedOutput: "4",
      hint: "Base case: if node is None return 0. Recursive: 1 + count_left + count_right. 基础：None返回0。递归：1+左+右。",
      explanation: "if not node: return 0; return 1 + count_nodes(left) + count_nodes(right). 递归计数：当前1+左子树+右子树。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Tree Challenge · 树挑战",
      challenge: {
        title: "📏 Tree Height · 树的高度",
        description: "Write a function to find the height of a binary tree.\n编写函数计算二叉树的高度。",
        starterCode: "class TreeNode:\n    def __init__(self, val):\n        self.value = val\n        self.left = None\n        self.right = None\n\ndef tree_height(node):\n    # Return the height of the tree\n    # 返回树的高度\n    # Height of empty tree = -1, single node = 0\n    pass\n\n# Build tree:  1 → (2, 3), 2 → (4, None)\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\n\nprint(tree_height(root))  # Should print: 2",
        hint: "Height = 1 + max(height of left, height of right). Base case: None → -1. 高度 = 1 + max(左高度, 右高度)。",
        solution: "class TreeNode:\n    def __init__(self, val):\n        self.value = val\n        self.left = None\n        self.right = None\n\ndef tree_height(node):\n    if not node:\n        return -1\n    return 1 + max(tree_height(node.left), tree_height(node.right))\n\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nprint(tree_height(root))",
        expectedOutput: "2",
      },
    },
  ],
};

const ds_2_4: Lesson = {
  id: "ds-2-4",
  moduleId: "ds-2",
  title: "Binary Search Trees — Sorted & Searchable",
  subtitle: "Fast search with structure · BST——有序且可搜索",
  icon: "🔍",
  xp: 25,
  duration: "25 min",
  order: 4,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🌳",
      content: `## 🌳 Root: The Organized Tree!

A **Binary Search Tree (BST)** has a special rule:
- Left child < Parent < Right child

This means we can **search like binary search** — cut the problem in half each step! O(log n)!

> 📖 Real-world analogy: A dictionary! Words are in alphabetical order. You open to the middle, then go left or right. A BST works the same way!
> 现实类比：字典！单词按字母排序。打开中间，然后往左或右找。BST 同理！

\`\`\`
        8       ← Root
       / \\
      3   10    ← 3<8, 10>8 ✅
     / \\    \\
    1   6   14  ← 1<3, 6>3, 14>10 ✅
\`\`\``,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 BST: Insert & Search · BST：插入与搜索

🎯 **What you'll learn:** How BST insert maintains the left<parent<right rule, and how search exploits it for O(log n) speed.
学习目标：BST 插入如何维持左<父<右规则，以及搜索如何利用它实现 O(log n) 速度。

Searching a BST is like playing a number guessing game 🎯 — "Is it higher or lower?" Each answer eliminates HALF the remaining possibilities! That's why BST search is O(log n) instead of O(n).

🔑 **Key things to notice · 注意要点:**
- Insert: if value < node, go left; if value ≥ node, go right; repeat until you find an empty spot
- Search: same logic — go left or right, eliminating half each step
- In-order traversal of a BST gives SORTED output — a free bonus!
- Both insert and search use recursion following the same left/right pattern

👀 Try inserting numbers in different orders — how does the tree shape change?`,
      code: `# 🌳 Root: "Organized trees are FAST trees!"

class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        """Insert maintaining BST property · 插入并保持BST性质"""
        if not self.root:
            self.root = BSTNode(value)
            return
        self._insert(self.root, value)

    def _insert(self, node, value):
        if value < node.value:
            if node.left:
                self._insert(node.left, value)
            else:
                node.left = BSTNode(value)
        else:
            if node.right:
                self._insert(node.right, value)
            else:
                node.right = BSTNode(value)

    def search(self, value):
        """Search in O(log n) · O(log n) 搜索"""
        return self._search(self.root, value)

    def _search(self, node, value):
        if not node:
            return False
        if value == node.value:
            return True
        elif value < node.value:
            return self._search(node.left, value)    # Go left 往左
        else:
            return self._search(node.right, value)   # Go right 往右

    def inorder(self):
        """In-order gives sorted output! · 中序遍历给出排序结果！"""
        result = []
        self._inorder(self.root, result)
        return result

    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.value)
            self._inorder(node.right, result)

# Demo
bst = BST()
for val in [8, 3, 10, 1, 6, 14, 4, 7]:
    bst.insert(val)

print("In-order (sorted!):", bst.inorder())  # [1, 3, 4, 6, 7, 8, 10, 14]
print("Search 6:", bst.search(6))    # True
print("Search 5:", bst.search(5))    # False
print("\\n🌳 Root: In-order traversal of a BST = sorted order!")`,
    },
    {
      type: "quiz",
      content: "🎓 BST Quiz · BST 测验",
      quiz: [
        {
          question: "In a BST, where would you find the SMALLEST value?\n\n在BST中，最小值在哪里？",
          options: ["At the root", "At the leftmost node", "At the rightmost node", "At any leaf"],
          correctIndex: 1,
          explanation: "Keep going left from the root — the leftmost node is the minimum! 一直往左走——最左节点就是最小值！",
        },
{
      question: "In a BST, where are values smaller than the root?\n\n在BST中，比根小的值在哪里？",
      options: ["Right subtree · 右子树", "At the leaves · 在叶节点", "Left subtree · 左子树", "Random position · 随机位置"],
      correctIndex: 2,
      explanation: "BST property: left < root < right. Smaller values go left! BST性质：左<根<右。较小值在左边！",
    },
    {
      question: "What is the average time complexity of search in a BST?\n\nBST中搜索的平均时间复杂度？",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 1,
      explanation: "A balanced BST halves the search space each step → O(log n). 平衡BST每步将搜索空间减半→O(log n)。",
    },
    {
      question: "What traversal of a BST gives elements in sorted order?\n\nBST的哪种遍历给出排序结果？",
      options: ["In-order · 中序", "Pre-order · 前序", "Post-order · 后序", "Level-order · 层序"],
      correctIndex: 0,
      explanation: "In-order traversal of a BST always gives sorted order! BST的中序遍历总是给出排序结果！",
    },
    {
      question: "What is the worst case time complexity of BST search?\n\nBST搜索的最坏时间复杂度？",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctIndex: 2,
      explanation: "If the BST degenerates into a linked list (all nodes on one side), search is O(n). BST退化为链表时搜索是O(n)。",
    },
    {
      question: "Where is the maximum value in a BST?\n\nBST中最大值在哪里？",
      options: ["Root · 根", "Leftmost node · 最左节点", "Any leaf · 任何叶节点", "Rightmost node · 最右节点"],
      correctIndex: 3,
      explanation: "Keep going right until you can't — that's the maximum! 一直往右走直到尽头——就是最大值！",
    },
    {
      question: "When deleting a node with two children in a BST, what replaces it?\n\n删除BST中有两个子节点的节点时，用什么替换？",
      options: ["Left child · 左子节点", "In-order successor or predecessor · 中序后继或前驱", "Right child · 右子节点", "Parent node · 父节点"],
      correctIndex: 1,
      explanation: "Replace with in-order successor (smallest in right subtree) or predecessor. 用中序后继（右子树最小值）或前驱替换。",
    },
    {
      question: "Inserting sorted data 1,2,3,4,5 into an empty BST creates what shape?\n\n将排序数据1,2,3,4,5插入空BST会创建什么形状？",
      options: ["Balanced tree · 平衡树", "Left-skewed chain · 左倾链", "Right-skewed chain · 右倾链", "Perfect tree · 完美树"],
      correctIndex: 2,
      explanation: "Each value is larger, so each goes right → a chain/degenerate tree. 每个值更大都往右→退化为链。",
    },
    {
      type: "coding",
      question: "Search for a value in a BST\n\n在BST中搜索值",
      prompt: "🎯 Implement BST search. Build BST with 5,3,7,1,4. Search for 4, print 'Found' or 'Not found'.\n实现BST搜索。构建BST(5,3,7,1,4)。搜索4。",
      starterCode: "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\ndef search(node, target):\n    # Your code here\n    pass\n\n# Build BST\nroot = TreeNode(5)\nroot.left = TreeNode(3)\nroot.right = TreeNode(7)\nroot.left.left = TreeNode(1)\nroot.left.right = TreeNode(4)\n\nprint('Found' if search(root, 4) else 'Not found')",
      expectedOutput: "Found",
      hint: "If val == target: found. If target < val: go left. If target > val: go right. 等于找到，小于往左，大于往右。",
      explanation: "Compare target with current: go left if smaller, right if larger. BST搜索：比较后左移或右移。",
    },
    {
      type: "coding",
      question: "Find the minimum value in a BST\n\n找BST中的最小值",
      prompt: "🎯 Find and print the minimum value in a BST with nodes 8,3,10,1,6.\n找出并打印BST中的最小值。",
      starterCode: "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\nroot = TreeNode(8)\nroot.left = TreeNode(3)\nroot.right = TreeNode(10)\nroot.left.left = TreeNode(1)\nroot.left.right = TreeNode(6)\n\n# Find minimum value\n# Your code here\n\nprint(min_val)",
      expectedOutput: "1",
      hint: "Keep going left until there's no left child. 一直往左直到没有左子节点。",
      explanation: "current = root; while current.left: current = current.left → minimum is leftmost. 一直往左就是最小值。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 BST Challenge · BST 挑战",
      challenge: {
        title: "🔎 Find Min & Max in BST · 在BST中找最小最大值",
        description: "Write functions to find the minimum and maximum values in a BST.\n编写函数在BST中找最小和最大值。",
        starterCode: "class BSTNode:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None\n\ndef find_min(node):\n    # Go left until you can't\n    pass\n\ndef find_max(node):\n    # Go right until you can't\n    pass\n\n# Build BST: 8, 3, 10, 1, 6, 14\nroot = BSTNode(8)\nroot.left = BSTNode(3)\nroot.right = BSTNode(10)\nroot.left.left = BSTNode(1)\nroot.left.right = BSTNode(6)\nroot.right.right = BSTNode(14)\n\nprint(find_min(root))  # 1\nprint(find_max(root))  # 14",
        hint: "Min: keep going left. Max: keep going right. 最小值：一直往左。最大值：一直往右。",
        solution: "class BSTNode:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None\n\ndef find_min(node):\n    while node.left:\n        node = node.left\n    return node.value\n\ndef find_max(node):\n    while node.right:\n        node = node.right\n    return node.value\n\nroot = BSTNode(8)\nroot.left = BSTNode(3)\nroot.right = BSTNode(10)\nroot.left.left = BSTNode(1)\nroot.left.right = BSTNode(6)\nroot.right.right = BSTNode(14)\nprint(find_min(root))\nprint(find_max(root))",
        expectedOutput: "1\n14",
      },
    },
  ],
};

const ds_2_5: Lesson = {
  id: "ds-2-5",
  moduleId: "ds-2",
  title: "Tree Projects — Expression Parser & File System",
  subtitle: "Trees in the real world · 树的实际应用——表达式解析与文件系统",
  icon: "📁",
  xp: 25,
  duration: "25 min",
  order: 5,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🌳",
      content: `## 🌳 Root: Trees Are EVERYWHERE!

Trees power many systems you use daily:

1. **File Systems** 📁 — Your folders are a tree! Each folder can contain files and sub-folders.
2. **Expression Trees** 🧮 — Calculators parse math like \`(3 + 5) * 2\` using trees.
3. **HTML/DOM** 🌐 — Every web page is a tree of elements!
4. **Decision Trees** 🤖 — AI uses trees to make choices!

> 📁 Your computer's file system: C:\\ is the root, folders are internal nodes, files are leaves!
> 你电脑的文件系统：C:\\ 是根，文件夹是内部节点，文件是叶节点！`,
    },
    {
      type: "code",
      emoji: "📁",
      content: `## 📁 File System Tree · 文件系统树

🎯 **What you'll learn:** How to model a file system as a tree with folders and files, plus recursive traversal.
学习目标：如何用树来建模文件系统（文件夹和文件），以及递归遍历。

Your computer's file system IS a tree! 🖥️ The root folder (/ or C:\\) is the root node, folders are internal nodes (they have children), and files are leaf nodes (no children). The \\\`display\\\` method uses indentation to show the tree structure — deeper = more indented.

🔑 **Key things to notice · 注意要点:**
- FileNode has \\\`children\\\` list — a general tree (not just binary!)
- \\\`is_folder\\\` distinguishes folders from files
- \\\`display\\\` uses recursion with increasing indent — tree depth becomes visual depth
- \\\`count_files\\\` recursively counts only non-folder nodes (leaves)

👀 Try adding your own folders and files to build your dream file system!`,
      code: `# 🌳 Root: "Your computer is literally a tree!"

class FileNode:
    def __init__(self, name, is_folder=False):
        self.name = name
        self.is_folder = is_folder
        self.children = []  # Sub-folders and files 子文件夹和文件

    def add(self, child):
        self.children.append(child)
        return child

    def display(self, indent=0):
        icon = "📁" if self.is_folder else "📄"
        print("  " * indent + f"{icon} {self.name}")
        for child in self.children:
            child.display(indent + 1)

# Build a file system!
root = FileNode("/", is_folder=True)
home = root.add(FileNode("home", is_folder=True))
user = home.add(FileNode("student", is_folder=True))
docs = user.add(FileNode("Documents", is_folder=True))
docs.add(FileNode("homework.pdf"))
docs.add(FileNode("notes.txt"))
code = user.add(FileNode("Code", is_folder=True))
code.add(FileNode("hello.py"))
code.add(FileNode("game.py"))
user.add(FileNode("photo.jpg"))

print("🖥️ File System Tree:")
root.display()

# Count all files (not folders)
def count_files(node):
    count = 0 if node.is_folder else 1
    for child in node.children:
        count += count_files(child)
    return count

print(f"\\nTotal files: {count_files(root)}")`,
    },
    {
      type: "code",
      emoji: "🧮",
      content: `## 🧮 Expression Tree · 表达式树

🎯 **What you'll learn:** How calculators and compilers use trees to represent and evaluate math expressions.
学习目标：计算器和编译器如何用树来表示和计算数学表达式。

A math expression like (3+5)*2 becomes a tree 🌳 where operators are internal nodes and numbers are leaves. To evaluate, work from the bottom up — compute the leaves first, then combine using operators. This is exactly how your calculator works inside!

🔑 **Key things to notice · 注意要点:**
- Leaf nodes = numbers, internal nodes = operators (+, -, *, /)
- The root is the LAST operation performed (highest precedence grouping)
- \\\`evaluate\\\` uses recursion: base case is a leaf (just return the number)
- Post-order traversal naturally evaluates the expression bottom-up

👀 Try building a tree for a different expression like (10 - 4) / 2!`,
      code: `# 🌳 Root: "Calculators use trees to parse math!"
# Expression: (3 + 5) * 2
#       *
#      / \\
#     +   2
#    / \\
#   3   5

class ExprNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def evaluate(node):
    """Evaluate an expression tree · 计算表达式树"""
    if not node.left and not node.right:
        return int(node.value)  # Leaf = number 叶节点=数字

    left_val = evaluate(node.left)
    right_val = evaluate(node.right)

    if node.value == '+': return left_val + right_val
    if node.value == '-': return left_val - right_val
    if node.value == '*': return left_val * right_val
    if node.value == '/': return left_val // right_val

# Build (3 + 5) * 2
root = ExprNode('*')
root.left = ExprNode('+')
root.right = ExprNode('2')
root.left.left = ExprNode('3')
root.left.right = ExprNode('5')

result = evaluate(root)
print(f"(3 + 5) * 2 = {result}")  # 16

# 🌳 Root: "Compilers build expression trees to evaluate your code!"`,
    },
    {
      type: "quiz",
      content: "🎓 Tree Applications Quiz · 树应用测验",
      quiz: [
        {
          question: "In an expression tree for (3 + 5) * 2, what is at the root?\n\n表达式树 (3+5)*2 的根节点是什么？",
          options: ["*", "+", "3", "2"],
          correctIndex: 0,
          explanation: "The last operation to be performed (* ) is at the root! 最后执行的运算（*）在根节点！",
        },
{
      question: "In an expression tree, where are the operators?\n\n在表达式树中，运算符在哪里？",
      options: ["Leaf nodes · 叶节点", "Internal nodes · 内部节点", "Root only · 仅根节点", "Randomly placed · 随机放置"],
      correctIndex: 1,
      explanation: "Operators are at internal nodes, operands (numbers) are at leaves. 运算符在内部节点，操作数（数字）在叶节点。",
    },
    {
      question: "Which traversal evaluates an expression tree correctly?\n\n哪种遍历正确计算表达式树？",
      options: ["Pre-order · 前序", "In-order · 中序", "Level-order · 层序", "Post-order · 后序"],
      correctIndex: 3,
      explanation: "Post-order evaluates children first, then applies the operator — natural for computation! 后序先计算子节点再应用运算符——自然适合计算！",
    },
    {
      question: "A file system directory tree is best represented as what?\n\n文件系统目录树最好表示为什么？",
      options: ["General tree (N-ary) · 一般树（N叉树）", "Binary tree · 二叉树", "Linked list · 链表", "Array · 数组"],
      correctIndex: 0,
      explanation: "Directories can have many sub-items → N-ary tree, not limited to 2 children. 目录可以有多个子项→N叉树，不限于2个子节点。",
    },
    {
      question: "What does tree height represent in a file system?\n\n文件系统中树的高度代表什么？",
      options: ["Number of files · 文件数量", "Total size · 总大小", "Maximum nesting depth · 最大嵌套深度", "Number of folders · 文件夹数量"],
      correctIndex: 2,
      explanation: "Height = deepest nesting level of directories. 高度=目录的最深嵌套层级。",
    },
    {
      question: "To calculate total size of a directory, which traversal pattern works best?\n\n计算目录总大小，哪种遍历模式最好？",
      options: ["Top-down · 自顶向下", "Bottom-up (post-order) · 自底向上（后序）", "Left to right · 从左到右", "Random access · 随机访问"],
      correctIndex: 1,
      explanation: "Post-order: calculate subdirectory sizes first, then sum up. 后序：先计算子目录大小再求和。",
    },
    {
      question: "In the expression tree for 2+3, what is at the root?\n\n表达式树2+3的根是什么？",
      options: ["2", "+", "3", "5"],
      correctIndex: 1,
      explanation: "The operator (+) is at the root, with operands (2,3) as children. 运算符(+)在根，操作数(2,3)是子节点。",
    },
    {
      question: "What is the time complexity of calculating the size of a directory tree with n items?\n\n计算有n个项目的目录树大小的时间复杂度？",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctIndex: 0,
      explanation: "Must visit every node once to sum all sizes → O(n). 必须访问每个节点一次来求和→O(n)。",
    },
    {
      type: "coding",
      question: "Evaluate a simple expression tree\n\n计算简单表达式树",
      prompt: "🎯 Build expression tree for (3+5) and evaluate it. Print the result.\n构建(3+5)的表达式树并计算结果。",
      starterCode: "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\n# Build: + at root, 3 left, 5 right\nroot = TreeNode('+')\nroot.left = TreeNode(3)\nroot.right = TreeNode(5)\n\ndef evaluate(node):\n    # Your code here\n    pass\n\nprint(evaluate(root))",
      expectedOutput: "8",
      hint: "If leaf (no children), return val. If operator, evaluate both children then apply. 叶节点返回值，运算符节点递归计算子节点再应用。",
      explanation: "Check if leaf → return int(val). If '+': return evaluate(left) + evaluate(right). 叶返回值，加号返回左+右。",
    },
    {
      type: "coding",
      question: "Calculate the height of a binary tree\n\n计算二叉树的高度",
      prompt: "🎯 Calculate the height of a tree: root=1, left=2(left=4,right=5), right=3.\n计算树的高度。",
      starterCode: "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nroot.left.right = TreeNode(5)\n\ndef height(node):\n    # Your code here\n    pass\n\nprint(height(root))",
      expectedOutput: "2",
      hint: "Base case: None → -1 (or 0 depending on definition). Return 1 + max(height(left), height(right)). 递归：1+max(左高,右高)。",
      explanation: "if not node: return -1; return 1 + max(height(left), height(right)). 递归求最大子树高度+1。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🔢 Count Leaves · 计算叶节点数",
        description: "Write a function to count the number of leaf nodes in a binary tree.\n编写函数计算二叉树中叶节点的数量。",
        starterCode: "class TreeNode:\n    def __init__(self, val):\n        self.value = val\n        self.left = None\n        self.right = None\n\ndef count_leaves(node):\n    # A leaf has no children\n    pass\n\n# Tree:   1\n#        / \\\n#       2   3\n#      /     \\\n#     4       5\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nroot.right.right = TreeNode(5)\n\nprint(count_leaves(root))  # Should print: 2",
        hint: "Base case: None→0, leaf (no children)→1. Otherwise add left+right. 空→0，叶→1，否则左+右。",
        solution: "class TreeNode:\n    def __init__(self, val):\n        self.value = val\n        self.left = None\n        self.right = None\n\ndef count_leaves(node):\n    if not node:\n        return 0\n    if not node.left and not node.right:\n        return 1\n    return count_leaves(node.left) + count_leaves(node.right)\n\nroot = TreeNode(1)\nroot.left = TreeNode(2)\nroot.right = TreeNode(3)\nroot.left.left = TreeNode(4)\nroot.right.right = TreeNode(5)\nprint(count_leaves(root))",
        expectedOutput: "2",
      },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE DS-3: GRAPHS & HASH MAPS
// ═══════════════════════════════════════════════════════════════

const ds_3_1: Lesson = {
  id: "ds-3-1",
  moduleId: "ds-3",
  title: "Hash Maps — Key-Value Wizardry",
  subtitle: "Instant lookups with hashing · 哈希表——键值对的魔法",
  icon: "🗝️",
  xp: 20,
  duration: "22 min",
  order: 1,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box: The Magic Dictionary!

Imagine a **magic filing cabinet** 🗄️ where you say a word, and the right drawer INSTANTLY opens!

That's a **hash map** (also called dictionary or hash table). Instead of searching through everything, a **hash function** converts your key directly into a location!

> 📞 Real-world analogy: A phone book where you say a name and INSTANTLY get the phone number. No flipping through pages!
> 现实类比：一本电话簿，你说一个名字就能立刻得到电话号码，不用翻页！

**Time Complexity:**
- Get value by key: O(1) average ⚡
- Set key-value: O(1) average ⚡
- Delete by key: O(1) average ⚡

Python's \`dict\` IS a hash map!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Hash Maps in Python · Python 中的哈希表

🎯 **What you'll learn:** How to use Python dictionaries as hash maps — creating, accessing, updating, iterating, and counting word frequency.
学习目标：如何使用 Python 字典作为哈希表——创建、访问、更新、遍历和统计词频。

A hash map is like a super-smart filing cabinet 🗄️ — you say "name" and it INSTANTLY opens the right drawer. No searching through everything! Python's \\\`dict\\\` is the most-used data structure in real software. Word frequency counting is a classic use case.

🔑 **Key things to notice · 注意要点:**
- Access by key is O(1): \\\`student['name']\\\` is instant!
- \\\`in\\\` keyword checks if a key exists — also O(1)
- \\\`.items()\\\` gives you (key, value) pairs for iteration
- \\\`.get(key, default)\\\` avoids KeyError — returns default if key missing

👀 Try adding more student info and counting words in your own sentence!`,
      code: `# 📦 Box: "Python dicts are hash maps!"

# Creating a hash map (dictionary)
student = {
    "name": "Alice",
    "age": 15,
    "grade": "A",
    "hobbies": ["coding", "chess"]
}

# O(1) access by key!
print(f"Name: {student['name']}")
print(f"Age: {student['age']}")

# Add/update — also O(1)!
student["school"] = "Tech Academy"
student["age"] = 16  # Updated!

# Check if key exists
if "grade" in student:
    print(f"Grade: {student['grade']}")

# Iterate over key-value pairs
print("\\nAll info:")
for key, value in student.items():
    print(f"  {key}: {value}")

# 📦 Box: "Hash maps are the MOST used data structure in real software!"

# Practical: Count word frequency!
text = "the cat sat on the mat the cat"
word_count = {}
for word in text.split():
    word_count[word] = word_count.get(word, 0) + 1
print(f"\\nWord counts: {word_count}")`,
    },
    {
      type: "code",
      emoji: "🔧",
      content: `## 🔧 Hash Collisions · 哈希冲突

🎯 **What you'll learn:** What happens when two different keys hash to the same slot, and how collisions are resolved.
学习目标：当两个不同的键哈希到同一个槽时会发生什么，以及如何解决碰撞。

Imagine two students assigned to the same locker 🗄️💥 — that's a collision! "cat" and "act" have the same letters, so a simple hash gives them the same slot. Solutions: chaining (linked list at each slot) or open addressing (find the next empty slot).

🔑 **Key things to notice · 注意要点:**
- A hash function converts a key to an index: \\\`sum(ord(c)) % size\\\`
- Small table sizes increase collision probability
- "cat" and "act" collide because they have the same character sum!
- Python handles collisions automatically — you never see them, but they're there

👀 Try changing the table_size and see how collision patterns change!`,
      code: `# 📦 Box: "What happens when two keys hash to the same spot?"

# Simple hash function demo
def simple_hash(key, size):
    """Sum of character codes mod table size · 字符编码和 mod 表大小"""
    return sum(ord(c) for c in str(key)) % size

# With a small table (size 5), collisions are likely!
table_size = 5
words = ["cat", "dog", "act", "god", "bat"]

print(f"Hash table size: {table_size}")
print("Hashing words:")
for word in words:
    h = simple_hash(word, table_size)
    print(f"  '{word}' → slot {h}")

# Notice: "cat" and "act" have the same hash! (same letters!)
# This is a COLLISION 碰撞！

# Solution 1: Chaining (linked lists at each slot)
# Solution 2: Open addressing (find next empty slot)

print("\\n📦 Box: Python's dict handles collisions automatically!")
print("🔗 Link: Collisions use chaining — each slot has a linked list!")`,
    },
    {
      type: "quiz",
      content: "🎓 Hash Map Quiz · 哈希表测验",
      quiz: [
        {
          question: "What is the average time complexity of looking up a value by key in a hash map?\n\n哈希表中通过键查找值的平均时间复杂度是？",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correctIndex: 0,
          explanation: "Hash maps provide O(1) average lookup — that's why they're so popular! 哈希表提供 O(1) 平均查找！",
        },
{
      question: "What does a hash function do?\n\n哈希函数做什么？",
      options: ["Converts key to an index · 将键转换为索引", "Sorts data · 排序数据", "Encrypts data · 加密数据", "Compresses data · 压缩数据"],
      correctIndex: 0,
      explanation: "A hash function maps a key to an array index for fast storage/retrieval. 哈希函数将键映射到数组索引以快速存取。",
    },
    {
      question: "What is a hash collision?\n\n什么是哈希冲突？",
      options: ["Hash function fails · 哈希函数失败", "Two keys map to the same index · 两个键映射到同一索引", "The table is full · 表满了", "Key is not found · 找不到键"],
      correctIndex: 1,
      explanation: "Collision = two different keys hash to the same index. Must be resolved! 冲突=两个不同的键哈希到同一索引，必须解决！",
    },
    {
      question: "What is the worst-case time complexity of hash map lookup?\n\n哈希表查找的最坏时间复杂度？",
      options: ["O(1)", "O(log n)", "O(n²)", "O(n)"],
      correctIndex: 3,
      explanation: "If all keys hash to the same index (worst case), lookup becomes O(n). 所有键哈希到同一索引（最坏情况），查找变成O(n)。",
    },
    {
      question: "Which Python type implements a hash map?\n\n哪种Python类型实现了哈希表？",
      options: ["list", "dict", "tuple", "set"],
      correctIndex: 1,
      explanation: "Python's dict (dictionary) is a hash map implementation! Python的dict（字典）就是哈希表实现！",
    },
    {
      question: "What is 'chaining' in hash maps?\n\n哈希表中的'链接法'是什么？",
      options: ["Linking hash maps together · 连接多个哈希表", "Chaining operations together · 链接操作", "Storing collisions in a linked list at each index · 在每个索引用链表存冲突", "A type of hash function · 一种哈希函数"],
      correctIndex: 2,
      explanation: "Chaining handles collisions by storing a linked list at each bucket. 链接法通过在每个桶存链表来处理冲突。",
    },
    {
      question: "What is the load factor of a hash table?\n\n哈希表的负载因子是什么？",
      options: ["Number of keys · 键的数量", "Size of the table · 表的大小", "n / table_size (items / capacity) · 项目数/容量", "Number of collisions · 冲突数"],
      correctIndex: 2,
      explanation: "Load factor = number of elements / table size. High load factor = more collisions. 负载因子=元素数/表大小。高负载=更多冲突。",
    },
    {
      question: "Which data type CANNOT be a dictionary key in Python?\n\n哪种数据类型不能做Python字典的键？",
      options: ["list", "int", "tuple", "str"],
      correctIndex: 0,
      explanation: "Lists are mutable and unhashable — they can't be dictionary keys! 列表可变且不可哈希——不能做字典键！",
    },
    {
      type: "coding",
      question: "Count character frequency using a dictionary\n\n用字典统计字符频率",
      prompt: "🎯 Count the frequency of each character in 'hello' and print the dict.\n统计'hello'中每个字符的频率并打印字典。",
      starterCode: "word = 'hello'\nfreq = {}\n\n# Count each character's frequency\n# Your code here\n\nprint(freq)",
      expectedOutput: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}",
      hint: "Loop through characters. Use freq[char] = freq.get(char, 0) + 1. 遍历字符，用get方法计数。",
      explanation: "For each char, use .get(char, 0) + 1 to count occurrences. 对每个字符用get方法累加计数。",
    },
    {
      type: "coding",
      question: "Find two numbers that sum to a target using a hash map\n\n用哈希表找两数之和",
      prompt: "🎯 Given nums=[2,7,11,15] and target=9, find two numbers that add up to target.\n给定nums和target=9，找到两个加起来等于target的数。",
      starterCode: "nums = [2, 7, 11, 15]\ntarget = 9\nseen = {}\n\n# Find two numbers that sum to target\n# Your code here",
      expectedOutput: "2 + 7 = 9",
      hint: "For each num, check if (target - num) is in seen. If yes, found! Otherwise add num to seen. 对每个数，检查target-num是否在seen中。",
      explanation: "Store seen numbers in dict. For each num, check if complement exists → O(n) solution! 在字典中存已见数字，检查补数是否存在→O(n)解法！",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🔤 Two Sum · 两数之和",
        description: "Given a list of numbers and a target, find two numbers that add up to the target. Return their indices. Use a hash map for O(n) solution!\n给定数字列表和目标值，找出相加等于目标值的两个数，返回索引。用哈希表实现 O(n)！",
        starterCode: "def two_sum(nums, target):\n    # Use a dict to store {value: index}\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        # Check if complement is in seen\n        pass\n    return None\n\nresult = two_sum([2, 7, 11, 15], 9)\nprint(result)  # Should print: (0, 1)",
        hint: "For each number, check if (target - number) is already in the dict. If yes, return both indices! 对于每个数，检查 target-num 是否已在字典中。",
        solution: "def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return (seen[complement], i)\n        seen[num] = i\n    return None\n\nresult = two_sum([2, 7, 11, 15], 9)\nprint(result)",
        expectedOutput: "(0, 1)",
      },
    },
  ],
};

const ds_3_2: Lesson = {
  id: "ds-3-2",
  moduleId: "ds-3",
  title: "Sets — Unique Collections",
  subtitle: "No duplicates allowed · 集合——独一无二的收藏",
  icon: "🎯",
  xp: 15,
  duration: "18 min",
  order: 2,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box: The No-Duplicates Club!

A **Set** is like a bag where every item is UNIQUE — try adding a duplicate and it's ignored!

> 🎟️ Real-world analogy: A guest list at a party! Each name appears only once, no matter how many times you add it.
> 现实类比：派对宾客名单！每个名字只出现一次，不管你添加多少次。

**Set Operations (like math class!):**
- **Union** (A ∪ B) — everything in A or B
- **Intersection** (A ∩ B) — only what's in BOTH
- **Difference** (A - B) — in A but NOT in B

All operations are O(1) for single elements thanks to hashing!`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Set Operations · 集合操作

🎯 **What you'll learn:** How to use Python sets for union, intersection, difference, and removing duplicates.
学习目标：如何使用 Python 集合进行并集、交集、差集运算，以及去重。

Sets are like a VIP club 🎟️ — no duplicate members allowed! They also support math-class set operations. Need to find what two groups have in common? Intersection. Need to combine two groups? Union. Need to remove duplicates from a list? Convert to set!

🔑 **Key things to notice · 注意要点:**
- \\\`|\\\` = union (everything from both), \\\`&\\\` = intersection (only shared items)
- \\\`-\\\` = difference (in first but not second), \\\`^\\\` = symmetric difference
- Membership test (\\\`in\\\`) is O(1) — sets use hashing internally!
- \\\`set(list)\\\` instantly removes duplicates — a super common pattern

👀 Try creating your own sets and experimenting with the operators!`,
      code: `# 📦 Box: "Sets are hash maps without values!"

# Creating sets
fruits = {"apple", "banana", "cherry"}
citrus = {"orange", "lemon", "banana", "cherry"}

print("Fruits:", fruits)
print("Citrus:", citrus)

# Union: everything from both 并集
print("\\n∪ Union:", fruits | citrus)
# or: fruits.union(citrus)

# Intersection: in both 交集
print("∩ Intersection:", fruits & citrus)
# banana, cherry

# Difference: in fruits but NOT citrus 差集
print("- Difference (fruits-citrus):", fruits - citrus)
# apple

# Symmetric difference: in one but NOT both 对称差集
print("△ Symmetric diff:", fruits ^ citrus)

# Membership test — O(1)! 成员测试
print("\\n'apple' in fruits?", "apple" in fruits)  # True

# Remove duplicates from a list!
nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique = list(set(nums))
print(f"\\nDeduplicated: {unique}")

# 📦 Box: "Sets are perfect for removing duplicates and set math!"`,
    },
    {
      type: "quiz",
      content: "🎓 Sets Quiz · 集合测验",
      quiz: [
        {
          question: "What does the intersection of {1,2,3} and {2,3,4} give?\n\n{1,2,3} 和 {2,3,4} 的交集是什么？",
          options: ["{1,2,3,4}", "{1,4}", "{2,3}", "{}"],
          correctIndex: 2,
          explanation: "Intersection = elements in BOTH sets = {2, 3}. 交集 = 两个集合中都有的元素！",
        },
{
      question: "What happens when you add a duplicate to a set?\n\n向集合添加重复元素会怎样？",
      options: ["Error · 错误", "Both copies are kept · 保留两份", "It's ignored · 被忽略", "The original is replaced · 原来的被替换"],
      correctIndex: 2,
      explanation: "Sets automatically ignore duplicates — each element is unique! 集合自动忽略重复——每个元素唯一！",
    },
    {
      question: "What is the time complexity of checking if an element is in a set?\n\n检查元素是否在集合中的时间复杂度？",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1) average · 平均O(1)"],
      correctIndex: 3,
      explanation: "Sets use hashing — average O(1) membership check! 集合用哈希——平均O(1)成员检查！",
    },
    {
      question: "What is the union of {1,2} and {2,3}?\n\n{1,2} 和 {2,3} 的并集是什么？",
      options: ["{2}", "{1, 2, 2, 3}", "{1, 3}", "{1, 2, 3}"],
      correctIndex: 3,
      explanation: "Union combines all unique elements from both sets → {1, 2, 3}. 并集合并两个集合的所有唯一元素。",
    },
    {
      question: "What is the difference of {1,2,3} - {2,3,4}?\n\n{1,2,3} - {2,3,4} 的差集是什么？",
      options: ["{4}", "{1}", "{1, 4}", "{}"],
      correctIndex: 1,
      explanation: "Difference removes elements in the second set from the first → {1}. 差集从第一个集合中去掉第二个集合的元素。",
    },
    {
      question: "Which is NOT a valid set operation?\n\n哪个不是有效的集合操作？",
      options: ["Union · 并集", "Intersection · 交集", "Difference · 差集", "Index access · 索引访问"],
      correctIndex: 3,
      explanation: "Sets are unordered — no index access! Use 'in' to check membership. 集合无序——不支持索引访问！用'in'检查成员。",
    },
    {
      question: "How do you create an empty set in Python?\n\n如何在Python中创建空集合？",
      options: ["{}", "Set()", "[]", "set()"],
      correctIndex: 3,
      explanation: "{} creates an empty dict, not a set! Use set() for an empty set. {}创建空字典，不是集合！用set()。",
    },
    {
      question: "What is a frozenset?\n\n什么是frozenset？",
      options: ["A very cold set · 很冷的集合", "A set of frozen data · 冻结数据的集合", "An immutable set · 不可变集合", "A sorted set · 排序的集合"],
      correctIndex: 2,
      explanation: "frozenset is an immutable set — can't add/remove elements, but can be a dict key! frozenset是不可变集合——不能增删，但可做字典键！",
    },
    {
      type: "coding",
      question: "Remove duplicates from a list using a set\n\n用集合去除列表重复元素",
      prompt: "🎯 Remove duplicates from [1,2,2,3,3,3,4] and print sorted result.\n从列表去重并打印排序结果。",
      starterCode: "nums = [1, 2, 2, 3, 3, 3, 4]\n\n# Remove duplicates using set\n# Your code here\n\nprint(result)",
      expectedOutput: "[1, 2, 3, 4]",
      hint: "Convert to set (removes duplicates), then back to sorted list. 转换为集合去重，再转回排序列表。",
      explanation: "sorted(set(nums)) removes duplicates and sorts! set去重+sorted排序！",
    },
    {
      type: "coding",
      question: "Find common elements between two lists\n\n找两个列表的共同元素",
      prompt: "🎯 Find common elements of [1,2,3,4] and [3,4,5,6]. Print as sorted list.\n找两个列表的共同元素，打印排序列表。",
      starterCode: "list1 = [1, 2, 3, 4]\nlist2 = [3, 4, 5, 6]\n\n# Find common elements\n# Your code here\n\nprint(result)",
      expectedOutput: "[3, 4]",
      hint: "Use set intersection: set(list1) & set(list2). 用集合交集。",
      explanation: "sorted(set(list1) & set(list2)) gives [3, 4] — the intersection! 集合交集找共同元素！",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "👥 Common Friends · 共同好友",
        description: "Given two people's friend lists, find their common friends using sets.\n给定两个人的朋友列表，用集合找出共同好友。",
        starterCode: "alice_friends = [\"Bob\", \"Charlie\", \"Diana\", \"Eve\"]\nbob_friends = [\"Charlie\", \"Eve\", \"Frank\", \"Grace\"]\n\n# Find common friends using sets\n# 用集合找共同好友\n\nprint(common)  # Should print: {'Charlie', 'Eve'}",
        hint: "Convert to sets and use & (intersection). 转成集合用 & 求交集。",
        solution: "alice_friends = [\"Bob\", \"Charlie\", \"Diana\", \"Eve\"]\nbob_friends = [\"Charlie\", \"Eve\", \"Frank\", \"Grace\"]\ncommon = set(alice_friends) & set(bob_friends)\nprint(common)",
        expectedOutput: "{'Charlie', 'Eve'}",
      },
    },
  ],
};

const ds_3_3: Lesson = {
  id: "ds-3-3",
  moduleId: "ds-3",
  title: "Graphs — Networks of Connections",
  subtitle: "Vertices, edges, and representation · 图——连接的网络",
  icon: "🕸️",
  xp: 20,
  duration: "22 min",
  order: 3,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔗",
      content: `## 🔗 Link: The Ultimate Network!

Graphs are the most flexible data structure! They model **connections** between things.

> 🌐 Real-world: Social networks (friends), maps (roads between cities), the internet (web pages linking to each other)!
> 现实例子：社交网络（好友）、地图（城市间的道路）、互联网（网页之间的链接）！

**Graph vocabulary:**
- **Vertex (Node)** — a point in the graph
- **Edge** — a connection between two vertices
- **Directed** — edges have direction (like one-way streets)
- **Undirected** — edges go both ways (like friendships)
- **Weighted** — edges have values (like distances)

**Two ways to represent graphs:**
1. **Adjacency List** — each vertex stores its neighbors (most common!)
2. **Adjacency Matrix** — 2D grid showing connections`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Graph Implementation · 图的实现

🎯 **What you'll learn:** How to build an undirected graph using an adjacency list — the most common graph representation.
学习目标：如何用邻接表构建无向图——最常见的图表示方式。

A graph is like a social network map 🌐 — people are vertices, friendships are edges. An adjacency list stores each person's friend list in a dictionary. Undirected means if Alice knows Bob, Bob also knows Alice!

🔑 **Key things to notice · 注意要点:**
- \\\`adj_list\\\` is a dictionary: {vertex: [list of neighbors]}
- For undirected graphs, \\\`add_edge\\\` adds BOTH directions (v1→v2 AND v2→v1)
- \\\`add_vertex\\\` is called automatically by \\\`add_edge\\\`
- \\\`has_edge\\\` checks if v2 is in v1's neighbor list — O(degree) time

👀 Try building a graph of your own social network or a map of nearby cities!`,
      code: `# 🔗 Link: "Let me show you how to build a graph!"

class Graph:
    """Undirected graph using adjacency list · 无向图（邻接表）"""
    def __init__(self):
        self.adj_list = {}  # {vertex: [neighbors]}

    def add_vertex(self, vertex):
        if vertex not in self.adj_list:
            self.adj_list[vertex] = []

    def add_edge(self, v1, v2):
        """Add undirected edge · 添加无向边"""
        self.add_vertex(v1)
        self.add_vertex(v2)
        self.adj_list[v1].append(v2)
        self.adj_list[v2].append(v1)

    def display(self):
        for vertex, neighbors in self.adj_list.items():
            print(f"  {vertex} → {neighbors}")

    def has_edge(self, v1, v2):
        return v2 in self.adj_list.get(v1, [])

# Build a social network!
social = Graph()
social.add_edge("Alice", "Bob")
social.add_edge("Alice", "Charlie")
social.add_edge("Bob", "Diana")
social.add_edge("Charlie", "Diana")
social.add_edge("Diana", "Eve")

print("🌐 Social Network Graph:")
social.display()

print(f"\\nAlice connected to Bob? {social.has_edge('Alice', 'Bob')}")
print(f"Alice connected to Eve? {social.has_edge('Alice', 'Eve')}")

# 🔗 Link: "Graphs model relationships — the web is a giant graph!"`,
    },
    {
      type: "quiz",
      content: "🎓 Graph Quiz · 图测验",
      quiz: [
        {
          question: "In an undirected graph, if there's an edge between A and B, can you travel from B to A?\n\n在无向图中，如果A和B之间有边，你能从B到A吗？",
          options: ["No, only A to B", "Yes, both directions", "Only if weighted", "Only with BFS"],
          correctIndex: 1,
          explanation: "Undirected edges go both ways — like a two-way street! 无向边是双向的！",
        },
{
      question: "What are the two main components of a graph?\n\n图的两个主要组成部分是什么？",
      options: ["Vertices and edges · 顶点和边", "Nodes and arrays · 节点和数组", "Keys and values · 键和值", "Roots and leaves · 根和叶"],
      correctIndex: 0,
      explanation: "Graphs consist of vertices (nodes) and edges (connections). 图由顶点（节点）和边（连接）组成。",
    },
    {
      question: "What is the difference between directed and undirected graphs?\n\n有向图和无向图的区别？",
      options: ["Edge direction — directed edges have arrows · 边的方向——有向边有箭头", "Size · 大小", "Number of nodes · 节点数", "Color · 颜色"],
      correctIndex: 0,
      explanation: "Directed: A→B (one way). Undirected: A—B (both ways). 有向：A→B（单向）。无向：A—B（双向）。",
    },
    {
      question: "What is an adjacency list?\n\n什么是邻接表？",
      options: ["A sorted list of nodes · 排序的节点列表", "A dictionary mapping each vertex to its neighbors · 将每个顶点映射到其邻居的字典", "A list of all edges · 所有边的列表", "A matrix of connections · 连接矩阵"],
      correctIndex: 1,
      explanation: "Adjacency list: each vertex has a list of its connected neighbors. 邻接表：每个顶点有其连接邻居的列表。",
    },
    {
      question: "What is the degree of a vertex?\n\n顶点的度是什么？",
      options: ["Its value · 它的值", "Its temperature · 它的温度", "Its depth · 它的深度", "The number of edges connected to it · 连接到它的边数"],
      correctIndex: 3,
      explanation: "Degree = number of edges connected to a vertex. 度=连接到顶点的边数。",
    },
    {
      question: "Which data structure is used to represent an adjacency list in Python?\n\nPython中用什么表示邻接表？",
      options: ["dict (dictionary) · 字典", "set", "list", "tuple"],
      correctIndex: 0,
      explanation: "A dict maps each vertex to a list of neighbors: {A: [B,C], B: [A]}. 字典将每个顶点映射到邻居列表。",
    },
    {
      question: "A social network (friends) is best modeled as:\n\n社交网络（朋友关系）最好建模为：",
      options: ["Directed graph · 有向图", "Tree · 树", "Undirected graph · 无向图", "Stack · 栈"],
      correctIndex: 2,
      explanation: "Friendship is mutual (A friends B = B friends A) → undirected. 友谊是双向的→无向图。",
    },
    {
      question: "Twitter follow relationships are best modeled as:\n\nTwitter关注关系最好建模为：",
      options: ["Directed graph · 有向图", "Undirected graph · 无向图", "Binary tree · 二叉树", "Queue · 队列"],
      correctIndex: 0,
      explanation: "Following is one-way (A follows B doesn't mean B follows A) → directed! 关注是单向的→有向图！",
    },
    {
      type: "coding",
      question: "Build an adjacency list graph\n\n构建邻接表图",
      prompt: "🎯 Create an undirected graph: A-B, A-C, B-C. Print the adjacency list.\n创建无向图并打印邻接表。",
      starterCode: "# Build undirected graph as adjacency list\ngraph = {}\n\n# Add edges: A-B, A-C, B-C\n# Your code here\n\nfor node in sorted(graph):\n    print(f\"{node}: {sorted(graph[node])}\")",
      expectedOutput: "A: ['B', 'C']\nB: ['A', 'C']\nC: ['A', 'B']",
      hint: "For undirected, add both directions: graph[A].append(B) AND graph[B].append(A). 无向图两个方向都要加。",
      explanation: "For each edge A-B, add B to A's list and A to B's list. 每条边A-B，在两个方向都添加。",
    },
    {
      type: "coding",
      question: "Count the degree of each vertex\n\n计算每个顶点的度",
      prompt: "🎯 Given graph, print the degree of each vertex.\n给定图，打印每个顶点的度。",
      starterCode: "graph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'C', 'D'],\n    'C': ['A', 'B'],\n    'D': ['B']\n}\n\n# Print degree of each vertex\n# Your code here",
      expectedOutput: "A: 2\nB: 3\nC: 2\nD: 1",
      hint: "Degree = len(graph[vertex]). 度=邻居列表长度。",
      explanation: "For each vertex, len(neighbors) gives its degree. 每个顶点的邻居列表长度就是它的度。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "👥 Degree Count · 度数计算",
        description: "The 'degree' of a vertex is how many edges connect to it. Find the degree of each vertex.\n顶点的'度'是连接到它的边数。计算每个顶点的度。",
        starterCode: "graph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'C', 'D'],\n    'C': ['A', 'B'],\n    'D': ['B']\n}\n\n# Print the degree of each vertex\n# 打印每个顶点的度\nfor vertex in sorted(graph.keys()):\n    # degree = number of neighbors\n    pass",
        hint: "Degree = len(neighbors). 度 = len(邻居列表)。",
        solution: "graph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'C', 'D'],\n    'C': ['A', 'B'],\n    'D': ['B']\n}\n\nfor vertex in sorted(graph.keys()):\n    print(f\"{vertex}: degree {len(graph[vertex])}\")",
        expectedOutput: "A: degree 2\nB: degree 3\nC: degree 2\nD: degree 1",
      },
    },
  ],
};

const ds_3_4: Lesson = {
  id: "ds-3-4",
  moduleId: "ds-3",
  title: "BFS & DFS — Exploring Graphs",
  subtitle: "Two ways to traverse · BFS与DFS——两种图遍历方式",
  icon: "🧭",
  xp: 25,
  duration: "25 min",
  order: 4,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔗",
      content: `## 🔗 Link: Two Ways to Explore!

Imagine you're exploring a maze 🏰. Two strategies:

**BFS (Breadth-First Search)** 🌊 — Explore layer by layer, like ripples in a pond. Check ALL neighbors first, then their neighbors, etc.
- Uses a **Queue** (FIFO)!
- Finds the **shortest path** in unweighted graphs!

**DFS (Depth-First Search)** 🏊 — Dive deep! Go as far as possible along one path, then backtrack.
- Uses a **Stack** (LIFO) or recursion!
- Good for maze solving, topological sort, finding connected components!

> 🌊 BFS = Water spreading outward from a source (layer by layer)
> 🏊 DFS = An adventurer going deep into a cave (one path at a time)`,
    },
    {
      type: "code",
      emoji: "🌊",
      content: `## 🌊 BFS Implementation · 广度优先搜索实现

🎯 **What you'll learn:** How BFS uses a queue to explore a graph layer by layer, and how to find shortest paths.
学习目标：BFS 如何使用队列逐层探索图，以及如何找到最短路径。

BFS is like dropping a stone in a pond 🌊 — ripples spread outward, reaching nearby points first, then farther ones. It uses a QUEUE (FIFO) to process nodes in order of discovery. Because it explores layer by layer, the first path it finds IS the shortest!

🔑 **Key things to notice · 注意要点:**
- Uses a \\\`deque\\\` (queue) — FIFO ensures layer-by-layer exploration
- \\\`visited\\\` set prevents revisiting nodes (avoids infinite loops!)
- Add to visited WHEN enqueueing, not when dequeuing (important for correctness)
- \\\`bfs_shortest_path\\\` tracks the full path by storing it alongside each node

👀 Try finding the shortest path between different pairs of nodes!`,
      code: `from collections import deque

def bfs(graph, start):
    """Breadth-First Search · 广度优先搜索"""
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []

    while queue:
        vertex = queue.popleft()    # Dequeue from front 从前端取出
        order.append(vertex)

        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)  # Enqueue to back 加入队尾

    return order

# Graph:  A—B—D
#         |/  |
#         C   E
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'D'],
    'C': ['A', 'B'],
    'D': ['B', 'E'],
    'E': ['D']
}

print("🌊 BFS from A:", bfs(graph, 'A'))
# A → B, C → D → E (layer by layer!)

# BFS finds shortest path!
def bfs_shortest_path(graph, start, end):
    queue = deque([(start, [start])])
    visited = {start}
    while queue:
        vertex, path = queue.popleft()
        if vertex == end:
            return path
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    return None

path = bfs_shortest_path(graph, 'A', 'E')
print(f"Shortest A→E: {' → '.join(path)}")`,
    },
    {
      type: "code",
      emoji: "🏊",
      content: `## 🏊 DFS Implementation · 深度优先搜索实现

🎯 **What you'll learn:** How DFS uses a stack (or recursion) to dive deep into one path before backtracking.
学习目标：DFS 如何使用栈（或递归）深入一条路径，然后回溯。

DFS is like exploring a cave 🏊 — you go as deep as possible down one tunnel before turning back and trying another. It uses a STACK (LIFO), so the most recently discovered path gets explored first. The recursive version does this naturally via the call stack!

🔑 **Key things to notice · 注意要点:**
- Iterative DFS uses a stack (\\\`list.pop()\\\`) — LIFO gives depth-first behavior
- \\\`visited\\\` check happens AFTER popping (unlike BFS which checks on enqueue)
- Recursive DFS uses the call stack implicitly — each function call goes deeper
- \\\`reversed()\\\` is used for consistent ordering with the recursive version

👀 Compare BFS and DFS output on the same graph — notice the different orders!`,
      code: `def dfs(graph, start):
    """Depth-First Search (iterative with stack) · 深度优先搜索"""
    visited = set()
    stack = [start]
    order = []

    while stack:
        vertex = stack.pop()        # Pop from top (LIFO!) 从顶部弹出
        if vertex not in visited:
            visited.add(vertex)
            order.append(vertex)
            # Add neighbors in reverse for consistent order
            for neighbor in reversed(graph[vertex]):
                if neighbor not in visited:
                    stack.append(neighbor)

    return order

def dfs_recursive(graph, vertex, visited=None):
    """DFS using recursion · 递归DFS"""
    if visited is None:
        visited = set()
    visited.add(vertex)
    print(vertex, end=" ")
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'D'],
    'C': ['A', 'B'],
    'D': ['B', 'E'],
    'E': ['D']
}

print("🏊 DFS from A:", dfs(graph, 'A'))
# Goes deep: A → B → C → D → E (or similar deep path)

print("\\n🏊 DFS recursive from A:", end=" ")
dfs_recursive(graph, 'A')
print()`,
    },
    {
      type: "quiz",
      content: "🎓 BFS vs DFS Quiz · BFS vs DFS 测验",
      quiz: [
        {
          question: "Which traversal uses a QUEUE?\n\n哪种遍历使用队列？",
          options: ["BFS", "DFS", "Both", "Neither"],
          correctIndex: 0,
          explanation: "BFS uses a queue (FIFO) to explore layer by layer! DFS uses a stack. BFS 使用队列逐层探索！",
        },
        {
          question: "Which finds the shortest path in an unweighted graph?\n\n哪种能在无权图中找到最短路径？",
          options: ["DFS", "Neither", "Both", "BFS"],
          correctIndex: 3,
          explanation: "BFS explores all nodes at distance 1, then 2, etc. — so the first time it reaches a node is the shortest path! BFS 逐层探索，首次到达就是最短路径！",
        },
{
      question: "What data structure does BFS use?\n\nBFS使用什么数据结构？",
      options: ["Stack · 栈", "Heap · 堆", "Queue · 队列", "Array · 数组"],
      correctIndex: 2,
      explanation: "BFS uses a queue — process neighbors level by level (FIFO)! BFS用队列——逐层处理邻居（先进先出）！",
    },
    {
      question: "What data structure does DFS use?\n\nDFS使用什么数据结构？",
      options: ["Stack (or recursion) · 栈（或递归）", "Heap · 堆", "Queue · 队列", "Hash map · 哈希表"],
      correctIndex: 0,
      explanation: "DFS uses a stack (explicitly or via recursion call stack)! DFS使用栈（显式或通过递归调用栈）！",
    },
    {
      question: "BFS explores nodes in what order?\n\nBFS按什么顺序探索节点？",
      options: ["Random · 随机", "Deepest first · 最深优先", "Alphabetical · 字母顺序", "Level by level · 逐层"],
      correctIndex: 3,
      explanation: "BFS explores all neighbors at current depth before going deeper. BFS先探索当前深度的所有邻居再深入。",
    },
    {
      question: "DFS explores nodes in what order?\n\nDFS按什么顺序探索节点？",
      options: ["Level by level · 逐层", "Random · 随机", "As deep as possible first · 尽可能深入", "Shortest path first · 最短路径优先"],
      correctIndex: 2,
      explanation: "DFS goes as deep as possible before backtracking. DFS尽可能深入再回溯。",
    },
    {
      question: "What must you track during graph traversal to avoid infinite loops?\n\n图遍历中必须跟踪什么来避免无限循环？",
      options: ["Edge count · 边数", "Node values · 节点值", "Visited nodes · 已访问节点", "Graph size · 图大小"],
      correctIndex: 2,
      explanation: "Track visited nodes to avoid revisiting and infinite loops! 跟踪已访问节点避免重复访问和无限循环！",
    },
    {
      question: "Which is better for finding the shortest path in an unweighted graph?\n\n在无权图中找最短路径哪个更好？",
      options: ["DFS", "Both are equal · 两者相同", "BFS", "Neither works · 都不行"],
      correctIndex: 2,
      explanation: "BFS guarantees shortest path in unweighted graphs due to level-by-level exploration! BFS因逐层探索在无权图中保证最短路径！",
    },
    {
      type: "coding",
      question: "Implement BFS traversal\n\n实现BFS遍历",
      prompt: "🎯 Perform BFS starting from 'A' on graph: A-[B,C], B-[A,D], C-[A], D-[B]. Print visit order.\nBFS遍历图，打印访问顺序。",
      starterCode: "from collections import deque\n\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D'],\n    'C': ['A'],\n    'D': ['B']\n}\n\n# BFS from 'A'\n# Your code here",
      expectedOutput: "A B C D",
      hint: "Use a queue and visited set. Enqueue start, then loop: dequeue, print, enqueue unvisited neighbors. 用队列和visited集合。",
      explanation: "BFS: deque start → loop: popleft, mark visited, add neighbors. BFS：起点入队→循环出队、标记访问、邻居入队。",
    },
    {
      type: "coding",
      question: "Implement DFS traversal\n\n实现DFS遍历",
      prompt: "🎯 Perform DFS starting from 'A' on the same graph. Print visit order.\nDFS遍历图，打印访问顺序。",
      starterCode: "graph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D'],\n    'C': ['A'],\n    'D': ['B']\n}\n\ndef dfs(node, visited):\n    # Your code here\n    pass\n\nvisited = set()\ndfs('A', visited)",
      expectedOutput: "A\nB\nD\nC",
      hint: "Mark as visited, print, then recursively visit unvisited neighbors. 标记访问、打印、递归访问未访问邻居。",
      explanation: "DFS: mark visited, print, recurse on each unvisited neighbor. DFS：标记、打印、递归未访问邻居。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🏝️ Is Connected? · 图是否连通？",
        description: "Write a function to check if all vertices in a graph are connected (you can reach any vertex from any other).\n编写函数检查图是否连通（任意顶点可达任意其他顶点）。",
        starterCode: "def is_connected(graph):\n    if not graph:\n        return True\n    # Start BFS/DFS from any vertex\n    # If visited count == total vertices, it's connected!\n    pass\n\n# Connected graph\ng1 = {'A': ['B'], 'B': ['A', 'C'], 'C': ['B']}\nprint(is_connected(g1))  # True\n\n# Disconnected graph\ng2 = {'A': ['B'], 'B': ['A'], 'C': ['D'], 'D': ['C']}\nprint(is_connected(g2))  # False",
        hint: "Do BFS from any vertex. If len(visited) == len(graph), all connected! 从任一顶点BFS，如果访问数==总顶点数，则连通！",
        solution: "from collections import deque\n\ndef is_connected(graph):\n    if not graph:\n        return True\n    start = next(iter(graph))\n    visited = set()\n    queue = deque([start])\n    visited.add(start)\n    while queue:\n        v = queue.popleft()\n        for n in graph[v]:\n            if n not in visited:\n                visited.add(n)\n                queue.append(n)\n    return len(visited) == len(graph)\n\ng1 = {'A': ['B'], 'B': ['A', 'C'], 'C': ['B']}\nprint(is_connected(g1))\ng2 = {'A': ['B'], 'B': ['A'], 'C': ['D'], 'D': ['C']}\nprint(is_connected(g2))",
        expectedOutput: "True\nFalse",
      },
    },
  ],
};

const ds_3_5: Lesson = {
  id: "ds-3-5",
  moduleId: "ds-3",
  title: "Graph Projects — Social Network & Maze Solver",
  subtitle: "Graphs in action · 图的实战——社交网络与迷宫求解",
  icon: "🧩",
  xp: 25,
  duration: "25 min",
  order: 5,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔗",
      content: `## 🔗 Link: Graphs Power the World!

Let's build two REAL projects with graphs:

1. **Social Network** 👥 — Friend suggestions using "friends of friends"!
2. **Maze Solver** 🏰 — Find a path through a maze using BFS!

> 🌐 Facebook, Instagram, LinkedIn — all built on graph algorithms!
> 🎮 Video game pathfinding (how NPCs navigate) uses BFS/DFS!`,
    },
    {
      type: "code",
      emoji: "👥",
      content: `## 👥 Social Network: Friend Suggestions · 社交网络好友推荐

🎯 **What you'll learn:** How to build a friend suggestion algorithm using "friends of friends" — just like Facebook/Instagram!
学习目标：如何用"朋友的朋友"构建好友推荐算法——就像 Facebook/Instagram！

Ever wonder how social media knows who to suggest? 🤔 If Alice and Bob are friends, and Bob and Diana are friends, then Diana is Alice's "friend of friend." The more mutual friends, the stronger the suggestion! This is graph theory in action.

🔑 **Key things to notice · 注意要点:**
- Friend lists use \\\`set\\\` for O(1) membership checks
- "Friends of friends" = neighbors of neighbors in the graph
- We count mutual friends to rank suggestions (more mutuals = better match)
- We filter out people who are already friends AND the user themselves

👀 Try adding yourself to the network and see who gets suggested!`,
      code: `# 🔗 Link: "Who should you be friends with?"

from collections import deque

class SocialNetwork:
    def __init__(self):
        self.friends = {}  # adjacency list

    def add_user(self, name):
        if name not in self.friends:
            self.friends[name] = set()

    def add_friendship(self, a, b):
        self.add_user(a)
        self.add_user(b)
        self.friends[a].add(b)
        self.friends[b].add(a)

    def suggest_friends(self, user):
        """Suggest friends-of-friends who aren't already friends · 推荐朋友的朋友"""
        if user not in self.friends:
            return []
        
        suggestions = {}  # {person: mutual_count}
        my_friends = self.friends[user]

        for friend in my_friends:
            for fof in self.friends[friend]:  # friend of friend
                if fof != user and fof not in my_friends:
                    suggestions[fof] = suggestions.get(fof, 0) + 1

        # Sort by most mutual friends
        return sorted(suggestions.items(), key=lambda x: -x[1])

# Build network
net = SocialNetwork()
net.add_friendship("Alice", "Bob")
net.add_friendship("Alice", "Charlie")
net.add_friendship("Bob", "Diana")
net.add_friendship("Bob", "Eve")
net.add_friendship("Charlie", "Diana")
net.add_friendship("Charlie", "Frank")

print("👥 Friend suggestions for Alice:")
for person, mutuals in net.suggest_friends("Alice"):
    print(f"  {person} ({mutuals} mutual friends)")
# Diana (2 mutual), Eve (1 mutual), Frank (1 mutual)`,
    },
    {
      type: "code",
      emoji: "🏰",
      content: `## 🏰 Maze Solver with BFS · 用BFS解迷宫

🎯 **What you'll learn:** How to use BFS on a 2D grid to find the shortest path through a maze — like video game pathfinding!
学习目标：如何在二维网格上使用 BFS 找到迷宫最短路径——就像游戏中的寻路！

A maze is just a graph where each cell connects to its neighbors (up/down/left/right) 🎮. BFS guarantees the shortest path because it explores all cells at distance 1, then distance 2, etc. This is exactly how game NPCs navigate around obstacles!

🔑 **Key things to notice · 注意要点:**
- The maze is a 2D grid: 0 = open path, 1 = wall
- 4 directions: right, left, down, up — each is a (dr, dc) offset
- BFS tracks the full path by carrying it along with each position
- Bounds checking + wall checking + visited checking prevent invalid moves

👀 Try modifying the maze walls and see how the path changes!`,
      code: `from collections import deque

def solve_maze(maze, start, end):
    """Find shortest path through maze using BFS · 用BFS找迷宫最短路径"""
    rows, cols = len(maze), len(maze[0])
    queue = deque([(start, [start])])
    visited = {start}
    directions = [(0,1), (0,-1), (1,0), (-1,0)]  # right, left, down, up

    while queue:
        (r, c), path = queue.popleft()
        if (r, c) == end:
            return path

        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if (0 <= nr < rows and 0 <= nc < cols 
                and maze[nr][nc] == 0 and (nr, nc) not in visited):
                visited.add((nr, nc))
                queue.append(((nr, nc), path + [(nr, nc)]))

    return None  # No path!

# 0 = open, 1 = wall
maze = [
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
]

path = solve_maze(maze, (0,0), (4,4))

# Display maze with path
print("🏰 Maze Solution:")
path_set = set(path) if path else set()
for r in range(len(maze)):
    row_str = ""
    for c in range(len(maze[0])):
        if (r,c) in path_set:
            row_str += "⭐"
        elif maze[r][c] == 1:
            row_str += "🧱"
        else:
            row_str += "⬜"
    print(row_str)

print(f"\\nPath length: {len(path)} steps")`,
    },
    {
      type: "quiz",
      content: "🎓 Graph Applications Quiz · 图应用测验",
      quiz: [
        {
          question: "Why is BFS better than DFS for solving a maze (finding shortest path)?\n\n为什么BFS比DFS更适合解迷宫（找最短路径）？",
          options: ["BFS is faster", "DFS can't solve mazes", "BFS always finds the shortest path first", "BFS uses less memory"],
          correctIndex: 2,
          explanation: "BFS explores layer by layer, so the first path found IS the shortest! BFS 逐层探索，首次找到的就是最短路径！",
        },
{
      question: "In a social network graph, what does an edge represent?\n\n在社交网络图中，边代表什么？",
      options: ["A friendship/connection · 友谊/连接", "A user · 用户", "A post · 帖子", "A message · 消息"],
      correctIndex: 0,
      explanation: "Edges represent relationships between users (vertices). 边代表用户（顶点）之间的关系。",
    },
    {
      question: "How can you find if two people are connected in a social network?\n\n如何找出社交网络中两人是否相连？",
      options: ["Sort the graph · 排序图", "BFS/DFS from one to find the other · 从一方BFS/DFS找另一方", "Check the hash map · 检查哈希表", "Count edges · 计算边数"],
      correctIndex: 1,
      explanation: "BFS/DFS from person A — if you reach B, they're connected! 从A进行BFS/DFS——如果到达B则相连！",
    },
    {
      question: "In a maze solver, what does each cell represent in the graph?\n\n迷宫求解器中，每个格子在图中代表什么？",
      options: ["An edge · 一条边", "A hash · 一个哈希", "A vertex · 一个顶点", "A weight · 一个权重"],
      correctIndex: 2,
      explanation: "Each cell is a vertex; passages between cells are edges. 每个格子是顶点，格子间的通道是边。",
    },
    {
      question: "What algorithm finds shortest path in a maze?\n\n什么算法找迷宫最短路径？",
      options: ["DFS", "Binary search · 二分搜索", "BFS", "Merge sort · 归并排序"],
      correctIndex: 2,
      explanation: "BFS finds the shortest path in unweighted graphs like mazes! BFS在无权图（如迷宫）中找到最短路径！",
    },
    {
      question: "Degrees of separation between two people refers to:\n\n两人之间的分离度指的是：",
      options: ["Number of friends · 朋友数", "Shortest path length · 最短路径长度", "Temperature difference · 温度差", "Number of edges in graph · 图中边数"],
      correctIndex: 1,
      explanation: "Degrees of separation = shortest path length between two vertices. 分离度=两个顶点之间的最短路径长度。",
    },
    {
      question: "What is '6 degrees of separation'?\n\n什么是'六度分离'？",
      options: ["You can only have 6 friends · 只能有6个朋友", "A graph has 6 edges · 图有6条边", "Everyone is at most 6 friendships apart · 每人最多隔6个友谊", "A temperature measure · 温度度量"],
      correctIndex: 2,
      explanation: "The theory that any two people are connected by at most 6 steps! 理论上任何两人最多通过6步相连！",
    },
    {
      question: "To find connected components in a graph, you can use:\n\n找图的连通分量可以用：",
      options: ["BFS or DFS from each unvisited node · 从每个未访问节点BFS/DFS", "Sorting · 排序", "Hash function · 哈希函数", "Binary search · 二分搜索"],
      correctIndex: 0,
      explanation: "Run BFS/DFS from each unvisited node — each run finds one component. 从每个未访问节点运行BFS/DFS——每次找到一个分量。",
    },
    {
      type: "coding",
      question: "Find shortest path length using BFS\n\n用BFS找最短路径长度",
      prompt: "🎯 Find the shortest path length from 'A' to 'D' in graph: A-[B,C], B-[A,D], C-[A,D], D-[B,C].\n找A到D的最短路径长度。",
      starterCode: "from collections import deque\n\ngraph = {\n    'A': ['B', 'C'],\n    'B': ['A', 'D'],\n    'C': ['A', 'D'],\n    'D': ['B', 'C']\n}\n\n# BFS to find shortest path from A to D\n# Your code here",
      expectedOutput: "2",
      hint: "BFS with distance tracking: enqueue (node, distance). When you reach D, print distance. BFS加距离跟踪。",
      explanation: "BFS guarantees shortest path. Track distance with each node in the queue. BFS保证最短路径，队列中跟踪距离。",
    },
    {
      type: "coding",
      question: "Check if a graph is connected\n\n检查图是否连通",
      prompt: "🎯 Check if all nodes are reachable from 'A'. Print 'Connected' or 'Not connected'.\n检查从A是否能到达所有节点。",
      starterCode: "graph = {\n    'A': ['B'],\n    'B': ['A', 'C'],\n    'C': ['B'],\n    'D': []\n}\n\n# Check if graph is connected\n# Your code here",
      expectedOutput: "Not connected",
      hint: "BFS/DFS from A, then check if visited count equals total nodes. 从A进行BFS/DFS，检查访问数是否等于总节点数。",
      explanation: "BFS from A visits {A,B,C} but D is unreachable → not connected! 从A出发BFS访问{A,B,C}但D不可达→不连通！",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🔢 Degrees of Separation · 分离度",
        description: "Find the shortest distance (number of edges) between two people in a social network.\n找出社交网络中两个人之间的最短距离（边数）。",
        starterCode: "from collections import deque\n\ndef degrees_of_separation(graph, person1, person2):\n    # Use BFS to find shortest path length\n    pass\n\nnetwork = {\n    'Alice': ['Bob', 'Charlie'],\n    'Bob': ['Alice', 'Diana'],\n    'Charlie': ['Alice', 'Eve'],\n    'Diana': ['Bob', 'Frank'],\n    'Eve': ['Charlie'],\n    'Frank': ['Diana']\n}\n\nprint(degrees_of_separation(network, 'Alice', 'Frank'))  # 3",
        hint: "BFS from person1, count levels until you reach person2. BFS 从 person1 开始，计数到 person2。",
        solution: "from collections import deque\n\ndef degrees_of_separation(graph, person1, person2):\n    if person1 == person2:\n        return 0\n    queue = deque([(person1, 0)])\n    visited = {person1}\n    while queue:\n        person, dist = queue.popleft()\n        for friend in graph[person]:\n            if friend == person2:\n                return dist + 1\n            if friend not in visited:\n                visited.add(friend)\n                queue.append((friend, dist + 1))\n    return -1\n\nnetwork = {\n    'Alice': ['Bob', 'Charlie'],\n    'Bob': ['Alice', 'Diana'],\n    'Charlie': ['Alice', 'Eve'],\n    'Diana': ['Bob', 'Frank'],\n    'Eve': ['Charlie'],\n    'Frank': ['Diana']\n}\nprint(degrees_of_separation(network, 'Alice', 'Frank'))",
        expectedOutput: "3",
      },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// MODULE DS-4: ADVANCED & PROJECTS
// ═══════════════════════════════════════════════════════════════

const ds_4_1: Lesson = {
  id: "ds-4-1",
  moduleId: "ds-4",
  title: "Sorting Showdown — Visual Race",
  subtitle: "Compare classic sorting algorithms · 排序大比拼——可视化竞赛",
  icon: "🏎️",
  xp: 25,
  duration: "25 min",
  order: 1,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box: The Great Sorting Race!

Sorting is one of the most fundamental operations in CS. Let's race the algorithms!

🐢 **Slow sorts (O(n²)):**
- **Bubble Sort** — swap adjacent if out of order (like bubbles rising)
- **Selection Sort** — find minimum, put it first, repeat
- **Insertion Sort** — insert each element into its correct position (like sorting cards)

🚀 **Fast sorts (O(n log n)):**
- **Merge Sort** — divide in half, sort each half, merge (divide & conquer!)
- **Quick Sort** — pick a pivot, partition around it, recurse

> 🃏 Real-world: Insertion sort is how most people sort playing cards!
> 📚 Merge sort is how libraries merge pre-sorted shelves!

🏎️ **Race them!** Visit [Data Structures Playground](/dashboard/data-structures) to see sorting visualizations!`,
    },
    {
      type: "code",
      emoji: "🫧",
      content: `## 🫧 Bubble Sort & Selection Sort · 冒泡排序与选择排序

🎯 **What you'll learn:** How bubble sort and selection sort work — two O(n²) algorithms that are simple but slow.
学习目标：冒泡排序和选择排序如何工作——两种简单但较慢的 O(n²) 算法。

Bubble sort is like bubbles rising in a soda 🫧 — bigger values "bubble up" to the end through repeated swaps. Selection sort is like picking the shortest person in a group photo 📸 — find the minimum, put it first, then find the next minimum. Both compare every pair, making them O(n²).

🔑 **Key things to notice · 注意要点:**
- Bubble sort: compare adjacent pairs, swap if out of order, repeat
- Selection sort: find minimum in unsorted portion, swap to front
- Both are O(n²) — the nested loops give it away!
- We count comparisons to see the cost — both make ~190 for 20 elements

👀 Run the race and compare the comparison counts!`,
      code: `# 📦 Box: "Start with the simple ones!"

def bubble_sort(arr):
    """Bubble Sort — O(n²) · 冒泡排序"""
    n = len(arr)
    comparisons = 0
    for i in range(n):
        for j in range(0, n-i-1):
            comparisons += 1
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]  # Swap! 交换！
    return comparisons

def selection_sort(arr):
    """Selection Sort — O(n²) · 选择排序"""
    n = len(arr)
    comparisons = 0
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            comparisons += 1
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return comparisons

# Race!
import random
data1 = random.sample(range(100), 20)
data2 = data1.copy()

c1 = bubble_sort(data1)
c2 = selection_sort(data2)

print("🫧 Bubble Sort:")
print(f"  Result: {data1}")
print(f"  Comparisons: {c1}")
print(f"\\n🎯 Selection Sort:")
print(f"  Result: {data2}")
print(f"  Comparisons: {c2}")`,
    },
    {
      type: "code",
      emoji: "🚀",
      content: `## 🚀 Merge Sort — The Fast One · 归并排序——快速选手

🎯 **What you'll learn:** How merge sort uses divide-and-conquer to achieve O(n log n) — dramatically faster than O(n²)!
学习目标：归并排序如何使用分治法达到 O(n log n)——比 O(n²) 快得多！

Merge sort is like sorting a deck of cards with a friend 🃏 — split the deck in half, each person sorts their half, then merge the two sorted halves together. The merge step is the magic: comparing the tops of two sorted piles is easy!

🔑 **Key things to notice · 注意要点:**
- Divide: split array in half until each piece has 1 element (already sorted!)
- Conquer: merge two sorted halves using two pointers
- O(n log n): log n levels of splitting × n work per level to merge
- The speed comparison at the bottom shows merge sort is ~100x faster on 1000 elements!

👀 Watch the timing comparison — feel the difference between O(n²) and O(n log n)!`,
      code: `# 📦 Box: "Divide and conquer — split, sort, merge!"

def merge_sort(arr):
    """Merge Sort — O(n log n) · 归并排序"""
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])    # Sort left half 排序左半
    right = merge_sort(arr[mid:])   # Sort right half 排序右半
    return merge(left, right)        # Merge them 合并

def merge(left, right):
    """Merge two sorted arrays · 合并两个有序数组"""
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Demo
data = [38, 27, 43, 3, 9, 82, 10]
print(f"Original: {data}")
sorted_data = merge_sort(data)
print(f"Sorted:   {sorted_data}")

# Compare speed
import time
big_data = list(range(1000, 0, -1))  # worst case: reversed!

start = time.time()
bubble_sort(big_data.copy())
bubble_time = time.time() - start

start = time.time()
merge_sort(big_data.copy())
merge_time = time.time() - start

print(f"\\n⏱️ 1000 elements (worst case):")
print(f"  Bubble Sort: {bubble_time:.4f}s")
print(f"  Merge Sort:  {merge_time:.4f}s")
print(f"  Merge is {bubble_time/max(merge_time, 0.0001):.0f}x faster! 🚀")`,
    },
    {
      type: "quiz",
      content: "🎓 Sorting Quiz · 排序测验",
      quiz: [
        {
          question: "What is the time complexity of Merge Sort?\n\n归并排序的时间复杂度是什么？",
          options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
          correctIndex: 0,
          explanation: "Merge sort divides (log n levels) and merges (n work per level) = O(n log n). 归并排序：分治 log n 层，每层 n 工作量！",
        },
        {
          question: "Which sort is best for nearly-sorted data?\n\n哪种排序最适合几乎已排序的数据？",
          options: ["Insertion Sort", "Selection Sort", "Bubble Sort", "Quick Sort"],
          correctIndex: 0,
          explanation: "Insertion sort on nearly-sorted data is almost O(n) — very efficient! 插入排序对几乎有序数据接近 O(n)！",
        },
{
      question: "What is the time complexity of Bubble Sort?\n\n冒泡排序的时间复杂度？",
      options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
      correctIndex: 0,
      explanation: "Bubble sort compares pairs in nested loops → O(n²). 冒泡排序在嵌套循环中比较对→O(n²)。",
    },
    {
      question: "Which sorting algorithm is 'divide and conquer'?\n\n哪种排序算法是'分而治之'？",
      options: ["Merge Sort · 归并排序", "Selection Sort · 选择排序", "Bubble Sort · 冒泡排序", "Insertion Sort · 插入排序"],
      correctIndex: 0,
      explanation: "Merge Sort divides the array in half, sorts each half, then merges. 归并排序将数组分半，各自排序再合并。",
    },
    {
      question: "What is the best-case time complexity of Insertion Sort?\n\n插入排序的最佳时间复杂度？",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
      correctIndex: 0,
      explanation: "On already-sorted data, insertion sort only traverses once → O(n)! 对已排序数据，插入排序只遍历一次→O(n)！",
    },
    {
      question: "What does 'stable sort' mean?\n\n什么是'稳定排序'？",
      options: ["Never crashes · 不会崩溃", "Equal elements keep original order · 相等元素保持原始顺序", "Always O(n log n) · 总是O(n log n)", "Uses less memory · 使用更少内存"],
      correctIndex: 1,
      explanation: "Stable: equal elements maintain their relative position from the input. 稳定：相等元素保持输入中的相对位置。",
    },
    {
      question: "Quick Sort's average time complexity is:\n\n快速排序的平均时间复杂度是：",
      options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
      correctIndex: 2,
      explanation: "Quick Sort averages O(n log n) with good pivot choices! 快速排序在好的pivot选择下平均O(n log n)！",
    },
    {
      question: "Which sort works by repeatedly finding the minimum?\n\n哪种排序通过反复找最小值工作？",
      options: ["Bubble Sort · 冒泡排序", "Merge Sort · 归并排序", "Quick Sort · 快速排序", "Selection Sort · 选择排序"],
      correctIndex: 3,
      explanation: "Selection Sort finds the minimum each pass and puts it in place. 选择排序每轮找到最小值放到正确位置。",
    },
    {
      type: "coding",
      question: "Implement Bubble Sort\n\n实现冒泡排序",
      prompt: "🎯 Sort [5, 3, 8, 1, 2] using bubble sort. Print the sorted list.\n用冒泡排序排列列表。",
      starterCode: "arr = [5, 3, 8, 1, 2]\n\n# Bubble sort\n# Your code here\n\nprint(arr)",
      expectedOutput: "[1, 2, 3, 5, 8]",
      hint: "Two nested loops. Compare adjacent elements, swap if out of order. 两层循环，比较相邻元素，乱序则交换。",
      explanation: "Outer loop n times, inner loop compares adjacent pairs and swaps. 外层循环n次，内层比较相邻对并交换。",
    },
    {
      type: "coding",
      question: "Implement Selection Sort\n\n实现选择排序",
      prompt: "🎯 Sort [4, 2, 7, 1, 3] using selection sort. Print the sorted list.\n用选择排序排列列表。",
      starterCode: "arr = [4, 2, 7, 1, 3]\n\n# Selection sort\n# Your code here\n\nprint(arr)",
      expectedOutput: "[1, 2, 3, 4, 7]",
      hint: "For each position, find the minimum in remaining elements and swap. 对每个位置，找剩余中最小值并交换。",
      explanation: "For i in range(n): find min index from i to end, swap arr[i] and arr[min_idx]. 每轮找最小值索引并交换。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🃏 Insertion Sort · 插入排序",
        description: "Implement insertion sort: for each element, insert it into its correct position in the sorted portion.\n实现插入排序：对每个元素，将其插入已排序部分的正确位置。",
        starterCode: "def insertion_sort(arr):\n    # For each element starting from index 1,\n    # insert it into the correct position\n    pass\n\ndata = [5, 2, 8, 1, 9, 3]\ninsertion_sort(data)\nprint(data)  # [1, 2, 3, 5, 8, 9]",
        hint: "For i from 1..n: save arr[i] as key, shift elements > key to the right, insert key. 保存当前元素，将大于它的元素右移，插入。",
        solution: "def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n\ndata = [5, 2, 8, 1, 9, 3]\ninsertion_sort(data)\nprint(data)",
        expectedOutput: "[1, 2, 3, 5, 8, 9]",
      },
    },
  ],
};

const ds_4_2: Lesson = {
  id: "ds-4-2",
  moduleId: "ds-4",
  title: "Searching Strategies",
  subtitle: "Linear, binary, and beyond · 搜索策略——线性、二分及更多",
  icon: "🔎",
  xp: 20,
  duration: "20 min",
  order: 2,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box: Finding Things FAST!

How do you find something in a collection?

**Linear Search** 🐢 — Check every element one by one. O(n). Works on ANY list.
**Binary Search** 🚀 — Only works on SORTED lists. Cut in half each step! O(log n).

> 📖 Real-world: Binary search is how you look up a word in a physical dictionary! Open to the middle, decide which half to search.
> 现实类比：二分搜索就像查字典！打开中间，决定搜索哪半边。

**How fast is O(log n)?**
- 1,000 elements → ~10 steps
- 1,000,000 elements → ~20 steps
- 1,000,000,000 elements → ~30 steps! 🤯`,
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Linear vs Binary Search · 线性 vs 二分搜索

🎯 **What you'll learn:** The dramatic difference between O(n) linear search and O(log n) binary search — with step counts to prove it!
学习目标：O(n) 线性搜索与 O(log n) 二分搜索的巨大差异——用步数来证明！

Linear search is like reading every page of a book to find a word 📖🐢. Binary search is like using a dictionary — open to the middle, decide which half, repeat. On 1000 elements, linear takes ~778 steps while binary takes only ~10!

🔑 **Key things to notice · 注意要点:**
- Linear: check every element one by one — works on ANY list, but O(n)
- Binary: requires SORTED data, but eliminates half each step — O(log n)
- \\\`mid = (left + right) // 2\\\` finds the middle index
- Compare: if target > mid value, search right half; otherwise, left half

👀 Compare the step counts — binary search is ~78x fewer steps on 1000 elements!`,
      code: `# 📦 Box: "Feel the difference!"

def linear_search(arr, target):
    """Linear Search — O(n) · 线性搜索"""
    steps = 0
    for i, val in enumerate(arr):
        steps += 1
        if val == target:
            return i, steps
    return -1, steps

def binary_search(arr, target):
    """Binary Search — O(log n) · 二分搜索 (arr must be sorted!)"""
    steps = 0
    left, right = 0, len(arr) - 1
    while left <= right:
        steps += 1
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid, steps
        elif arr[mid] < target:
            left = mid + 1    # Search right half 搜索右半
        else:
            right = mid - 1   # Search left half 搜索左半
    return -1, steps

# Compare on a sorted list of 1000 elements
data = list(range(1000))
target = 777

idx1, steps1 = linear_search(data, target)
idx2, steps2 = binary_search(data, target)

print(f"Finding {target} in 1000 elements:")
print(f"  🐢 Linear: found at index {idx1}, took {steps1} steps")
print(f"  🚀 Binary: found at index {idx2}, took {steps2} steps")
print(f"  Binary is {steps1/steps2:.0f}x fewer steps! 🏆")

# Worst case comparison
_, worst_linear = linear_search(data, 999)
_, worst_binary = binary_search(data, 999)
print(f"\\nWorst case: Linear={worst_linear}, Binary={worst_binary}")`,
    },
    {
      type: "code",
      emoji: "🔍",
      content: `## 🔍 Interpolation Search · 插值搜索

🎯 **What you'll learn:** How interpolation search estimates position based on value — even faster than binary for uniform data!
学习目标：插值搜索如何根据值估算位置——对均匀数据比二分搜索还快！

Interpolation search is like looking up a name in a phone book 📞 — if you're looking for "Wang," you don't open to the middle, you open near the END because W is near the end of the alphabet. It estimates WHERE the target should be based on its value!

🔑 **Key things to notice · 注意要点:**
- Formula estimates position proportionally: pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
- For uniformly distributed data: O(log log n) — even faster than binary!
- Falls back to O(n) for non-uniform data — binary search is safer in general
- The three-way comparison at the end shows linear > binary > interpolation (fewer steps)

👀 Compare all three search methods on the same data — see the step counts!`,
      code: `# 📦 Box: "An even smarter search for uniform data!"

def interpolation_search(arr, target):
    """Interpolation Search — O(log log n) for uniform data · 插值搜索"""
    low, high = 0, len(arr) - 1
    steps = 0

    while low <= high and arr[low] <= target <= arr[high]:
        steps += 1
        if low == high:
            if arr[low] == target:
                return low, steps
            return -1, steps

        # Estimate position based on value (like a phone book lookup)
        # 基于值估计位置（像查电话簿一样）
        pos = low + int(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]))
        
        if arr[pos] == target:
            return pos, steps
        elif arr[pos] < target:
            low = pos + 1
        else:
            high = pos - 1

    return -1, steps

# Compare all three on uniform data
data = list(range(0, 10000, 2))  # [0, 2, 4, ..., 9998]
target = 7654

_, s1 = linear_search(data, target)
_, s2 = binary_search(data, target)
idx, s3 = interpolation_search(data, target)

print(f"Finding {target} in {len(data)} elements:")
print(f"  🐢 Linear:        {s1} steps")
print(f"  🚀 Binary:        {s2} steps")
print(f"  ⚡ Interpolation: {s3} steps")

# For uniformly distributed data, interpolation search is even faster!`,
    },
    {
      type: "quiz",
      content: "🎓 Search Quiz · 搜索测验",
      quiz: [
        {
          question: "Binary search requires the data to be:\n\n二分搜索要求数据必须是：",
          options: ["Unsorted", "Numeric", "Unique", "Sorted"],
          correctIndex: 3,
          explanation: "Binary search ONLY works on sorted data! Otherwise it can't decide which half to search. 二分搜索只能用于有序数据！",
        },
{
      question: "What is the time complexity of linear search?\n\n线性搜索的时间复杂度？",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correctIndex: 0,
      explanation: "Linear search checks each element one by one → O(n). 线性搜索逐个检查→O(n)。",
    },
    {
      question: "What is the time complexity of binary search?\n\n二分搜索的时间复杂度？",
      options: ["O(n)", "O(n log n)", "O(1)", "O(log n)"],
      correctIndex: 3,
      explanation: "Binary search halves the search space each step → O(log n). 二分搜索每步减半搜索空间→O(log n)。",
    },
    {
      question: "What is the prerequisite for binary search?\n\n二分搜索的前提条件？",
      options: ["Data must be in a list · 数据必须在列表中", "Data must be sorted · 数据必须排序", "Data must be integers · 数据必须是整数", "Data must be unique · 数据必须唯一"],
      correctIndex: 1,
      explanation: "Binary search only works on sorted data! 二分搜索只对已排序数据有效！",
    },
    {
      question: "In binary search, if target > mid, where do you search next?\n\n二分搜索中，如果target>mid，下一步搜索哪里？",
      options: ["Right half · 右半部分", "Left half · 左半部分", "Start over · 重新开始", "The middle · 中间"],
      correctIndex: 0,
      explanation: "If target is bigger than mid, it must be in the right half! target比mid大，一定在右半部分！",
    },
    {
      question: "How many steps does binary search need for a sorted list of 1024 elements?\n\n二分搜索在1024个元素的排序列表中需要几步？",
      options: ["10", "512", "1024", "100"],
      correctIndex: 0,
      explanation: "log₂(1024) = 10. Binary search only needs 10 comparisons! log₂(1024)=10，只需10次比较！",
    },
    {
      question: "When is linear search preferred over binary search?\n\n什么时候线性搜索优于二分搜索？",
      options: ["Always · 总是", "On unsorted data · 对未排序数据", "On large datasets · 对大数据集", "Never · 从不"],
      correctIndex: 1,
      explanation: "If data isn't sorted, you can't use binary search — linear is the only option! 数据未排序时不能用二分——线性是唯一选择！",
    },
    {
      question: "What is interpolation search?\n\n什么是插值搜索？",
      options: ["Searching by color · 按颜色搜索", "Random search · 随机搜索", "Like binary search but estimates position based on value · 类似二分但根据值估计位置", "Searching from both ends · 两端搜索"],
      correctIndex: 2,
      explanation: "Interpolation search estimates where the target might be based on value distribution. 插值搜索根据值分布估计目标位置。",
    },
    {
      type: "coding",
      question: "Implement binary search\n\n实现二分搜索",
      prompt: "🎯 Binary search for 7 in [1,3,5,7,9,11]. Print the index.\n在列表中二分搜索7，打印索引。",
      starterCode: "arr = [1, 3, 5, 7, 9, 11]\ntarget = 7\n\n# Binary search\nleft, right = 0, len(arr) - 1\n\n# Your code here\n\nprint(result)",
      expectedOutput: "3",
      hint: "While left <= right: mid = (left+right)//2. Compare arr[mid] with target. 当left<=right时计算mid并比较。",
      explanation: "mid = (left+right)//2, compare, adjust left or right until found. 计算mid，比较，调整left/right直到找到。",
    },
    {
      type: "coding",
      question: "Implement linear search\n\n实现线性搜索",
      prompt: "🎯 Search for 'cherry' in ['apple','banana','cherry','date']. Print the index or -1.\n搜索'cherry'，打印索引或-1。",
      starterCode: "fruits = ['apple', 'banana', 'cherry', 'date']\ntarget = 'cherry'\n\n# Linear search\nresult = -1\n# Your code here\n\nprint(result)",
      expectedOutput: "2",
      hint: "Loop through with enumerate, if element == target, save index and break. 用enumerate循环，匹配时保存索引。",
      explanation: "for i, fruit in enumerate(fruits): if fruit == target: result = i; break. 遍历比较找到目标。",
    },
      ],
    },
    {
      type: "challenge",
      content: "🏆 Challenge · 挑战",
      challenge: {
        title: "🔢 First & Last Position · 第一和最后位置",
        description: "Given a sorted array with duplicates, find the first AND last position of a target value using binary search.\n在有重复值的有序数组中，用二分搜索找目标值的第一和最后位置。",
        starterCode: "def find_range(arr, target):\n    # Find first and last index of target\n    # Return (first, last) or (-1, -1) if not found\n    pass\n\narr = [1, 2, 2, 2, 3, 4, 4, 5]\nprint(find_range(arr, 2))  # (1, 3)\nprint(find_range(arr, 4))  # (5, 6)\nprint(find_range(arr, 6))  # (-1, -1)",
        hint: "Run binary search twice: once to find the leftmost occurrence, once for the rightmost. 运行两次二分搜索：找最左和最右。",
        solution: "def find_range(arr, target):\n    def find_left():\n        lo, hi, result = 0, len(arr)-1, -1\n        while lo <= hi:\n            mid = (lo+hi)//2\n            if arr[mid] == target:\n                result = mid\n                hi = mid - 1\n            elif arr[mid] < target:\n                lo = mid + 1\n            else:\n                hi = mid - 1\n        return result\n    def find_right():\n        lo, hi, result = 0, len(arr)-1, -1\n        while lo <= hi:\n            mid = (lo+hi)//2\n            if arr[mid] == target:\n                result = mid\n                lo = mid + 1\n            elif arr[mid] < target:\n                lo = mid + 1\n            else:\n                hi = mid - 1\n        return result\n    return (find_left(), find_right())\n\narr = [1, 2, 2, 2, 3, 4, 4, 5]\nprint(find_range(arr, 2))\nprint(find_range(arr, 4))\nprint(find_range(arr, 6))",
        expectedOutput: "(1, 3)\n(5, 6)\n(-1, -1)",
      },
    },
  ],
};

const ds_4_3: Lesson = {
  id: "ds-4-3",
  moduleId: "ds-4",
  title: "Final Project — Build Your Own DS Library",
  subtitle: "Create a reusable data structures toolkit · 综合项目——打造你自己的数据结构库",
  icon: "🏗️",
  xp: 25,
  duration: "30 min",
  order: 3,
  gradeRange: [7, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📦",
      content: `## 📦 Box + 🔗 Link + 🌳 Root: The Grand Finale!

Congratulations! You've learned ALL the major data structures! 🎉

Now it's time to build your own **Data Structures Library** — a reusable Python module with everything you've learned:

✅ Stack — push, pop, peek, is_empty
✅ Queue — enqueue, dequeue, front, is_empty  
✅ Linked List — append, prepend, delete, search, display
✅ BST — insert, search, inorder traversal
✅ Graph — add_vertex, add_edge, BFS, DFS

📦 **Box says:** "Real software engineers build libraries like this!"
🔗 **Link says:** "You'll use these in EVERY coding interview!"
🌳 **Root says:** "This is your CS toolkit — cherish it!"

> 🏗️ This is YOUR portfolio piece. Customize it, add documentation, make it yours!
> 这是你的作品集项目。定制它，添加文档，让它成为你自己的！`,
    },
    {
      type: "code",
      emoji: "📚",
      content: `## 📚 Your Data Structures Library · 你的数据结构库

🎯 **What you'll learn:** How to combine ALL data structures into one reusable Python library — your CS portfolio piece!
学习目标：如何将所有数据结构组合成一个可复用的 Python 库——你的 CS 作品集项目！

This is like building your own Swiss Army knife 🔪 — Stack, Queue, LinkedList, BST, and Graph all in one module! Real software engineers build libraries exactly like this. Each class is self-contained with clean methods. This is code you can actually use in future projects!

🔑 **Key things to notice · 注意要点:**
- Each class is independent and reusable — clean OOP design
- Private attributes (\_items) follow Python convention for encapsulation
- \_\_repr\_\_ and \_\_len\_\_ make classes work with print() and len()
- The test section at the bottom verifies everything works — always test your code!

👀 Run the test suite and make sure all 5 data structures pass!`,
      code: `# ═══════════════════════════════════════════
# 📚 MY DATA STRUCTURES LIBRARY
# Author: [Your Name]
# ═══════════════════════════════════════════

# ── Stack ──────────────────────────────────
class Stack:
    def __init__(self):
        self._items = []
    def push(self, item):
        self._items.append(item)
    def pop(self):
        return self._items.pop() if self._items else None
    def peek(self):
        return self._items[-1] if self._items else None
    def is_empty(self):
        return len(self._items) == 0
    def __len__(self):
        return len(self._items)
    def __repr__(self):
        return f"Stack({self._items})"

# ── Queue ──────────────────────────────────
from collections import deque
class Queue:
    def __init__(self):
        self._items = deque()
    def enqueue(self, item):
        self._items.append(item)
    def dequeue(self):
        return self._items.popleft() if self._items else None
    def front(self):
        return self._items[0] if self._items else None
    def is_empty(self):
        return len(self._items) == 0
    def __len__(self):
        return len(self._items)

# ── Linked List ────────────────────────────
class ListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    def append(self, data):
        node = ListNode(data)
        if not self.head:
            self.head = node
            return
        cur = self.head
        while cur.next:
            cur = cur.next
        cur.next = node
    def prepend(self, data):
        node = ListNode(data)
        node.next = self.head
        self.head = node
    def search(self, target):
        cur = self.head
        while cur:
            if cur.data == target:
                return True
            cur = cur.next
        return False
    def __repr__(self):
        parts, cur = [], self.head
        while cur:
            parts.append(str(cur.data))
            cur = cur.next
        return " → ".join(parts) + " → None"

# ── BST ────────────────────────────────────
class BSTNode:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None

class BST:
    def __init__(self):
        self.root = None
    def insert(self, val):
        self.root = self._insert(self.root, val)
    def _insert(self, node, val):
        if not node:
            return BSTNode(val)
        if val < node.val:
            node.left = self._insert(node.left, val)
        else:
            node.right = self._insert(node.right, val)
        return node
    def search(self, val):
        return self._search(self.root, val)
    def _search(self, node, val):
        if not node:
            return False
        if val == node.val:
            return True
        return self._search(node.left, val) if val < node.val else self._search(node.right, val)
    def inorder(self):
        result = []
        self._inorder(self.root, result)
        return result
    def _inorder(self, node, result):
        if node:
            self._inorder(node.left, result)
            result.append(node.val)
            self._inorder(node.right, result)

# ── Graph ──────────────────────────────────
class Graph:
    def __init__(self):
        self.adj = {}
    def add_edge(self, u, v):
        self.adj.setdefault(u, []).append(v)
        self.adj.setdefault(v, []).append(u)
    def bfs(self, start):
        visited, queue, order = {start}, deque([start]), []
        while queue:
            v = queue.popleft()
            order.append(v)
            for n in self.adj.get(v, []):
                if n not in visited:
                    visited.add(n)
                    queue.append(n)
        return order
    def dfs(self, start):
        visited, stack, order = set(), [start], []
        while stack:
            v = stack.pop()
            if v not in visited:
                visited.add(v)
                order.append(v)
                for n in reversed(self.adj.get(v, [])):
                    if n not in visited:
                        stack.append(n)
        return order

# ═══════════════════════════════════════════
# 🧪 TEST EVERYTHING!
# ═══════════════════════════════════════════
print("📚 === Data Structures Library Test ===\\n")

# Stack
s = Stack()
s.push(1); s.push(2); s.push(3)
print(f"Stack: {s}, peek={s.peek()}, pop={s.pop()}")

# Queue
q = Queue()
q.enqueue("A"); q.enqueue("B"); q.enqueue("C")
print(f"Queue front={q.front()}, dequeue={q.dequeue()}")

# Linked List
ll = LinkedList()
ll.append(1); ll.append(2); ll.append(3)
print(f"LinkedList: {ll}")

# BST
bst = BST()
for v in [5, 3, 7, 1, 4]:
    bst.insert(v)
print(f"BST inorder: {bst.inorder()}")

# Graph
g = Graph()
g.add_edge("A", "B"); g.add_edge("B", "C"); g.add_edge("A", "C")
print(f"Graph BFS from A: {g.bfs('A')}")
print(f"Graph DFS from A: {g.dfs('A')}")

print("\\n🎉 All data structures working! Your library is ready!")`,
    },
    {
      type: "text",
      emoji: "🎉",
      content: `## 🎉 Congratulations — You've Mastered Data Structures!

📦 **Box says:** "You now understand how data is organized and stored!"
🔗 **Link says:** "You can build connections between any pieces of data!"
🌳 **Root says:** "You can navigate complex hierarchies and networks!"

**What you've learned:**
- Arrays, Linked Lists (singly & doubly)
- Stacks (LIFO) & Queues (FIFO)
- Priority Queues & Heaps
- Binary Trees & BSTs
- Hash Maps & Sets
- Graphs, BFS & DFS
- Sorting & Searching algorithms

**Next steps:**
- 🏆 Practice on LeetCode / HackerRank
- 📚 Take the Algorithms track
- 🎮 Build projects that use these structures!

恭喜你掌握了数据结构！继续前进，挑战算法课程吧！ 🚀`,
    },
    {
      type: "quiz",
      content: "🎓 Final Comprehensive Quiz · 综合测验",
      quiz: [
        {
          question: "Which data structure would you use for an 'Undo' feature?\n\n你会用哪种数据结构实现'撤销'功能？",
          options: ["Stack", "Array", "Queue", "Graph"],
          correctIndex: 0,
          explanation: "Stack! LIFO — the last action is the first to be undone! 栈！后进先出——最后的操作最先被撤销！",
        },
        {
          question: "What is the time complexity of searching in a hash map?\n\n哈希表中搜索的时间复杂度是？",
          options: ["O(1) average", "O(log n)", "O(n²)", "O(n)"],
          correctIndex: 0,
          explanation: "Hash maps provide O(1) average time for lookups! 哈希表提供平均 O(1) 查找！",
        },
        {
          question: "Which algorithm finds the shortest path in an unweighted graph?\n\n哪种算法在无权图中找最短路径？",
          options: ["DFS", "Merge Sort", "Binary Search", "BFS"],
          correctIndex: 3,
          explanation: "BFS explores layer by layer — the first path it finds IS the shortest! BFS 逐层探索，找到的就是最短路径！",
        },
        {
          question: "Match the time complexity: Merge Sort\n\n匹配时间复杂度：归并排序",
          options: ["O(n log n)", "O(n²)", "O(n)", "O(1)"],
          correctIndex: 0,
          explanation: "Merge sort divides (log n) and merges (n) = O(n log n). 分治 log n 层，每层 n 工作量！",
        },
{
      question: "What is the benefit of creating a reusable data structures library?\n\n创建可复用数据结构库的好处？",
      options: ["Code reuse and modular design · 代码复用和模块化设计", "It looks cool · 看起来酷", "It runs faster · 运行更快", "It uses less memory · 用更少内存"],
      correctIndex: 0,
      explanation: "Libraries promote code reuse, clean interfaces, and modular design! 库促进代码复用、干净接口和模块化设计！",
    },
    {
      question: "Which design principle says each class should have one job?\n\n哪个设计原则说每个类应只有一个职责？",
      options: ["DRY", "YAGNI", "KISS", "Single Responsibility · 单一职责"],
      correctIndex: 3,
      explanation: "Single Responsibility Principle: each class does one thing well! 单一职责原则：每个类做好一件事！",
    },
    {
      question: "What is the purpose of unit tests?\n\n单元测试的目的？",
      options: ["Make code run faster · 让代码更快", "Reduce file size · 减小文件大小", "Verify each component works correctly · 验证每个组件正确工作", "Add documentation · 添加文档"],
      correctIndex: 2,
      explanation: "Unit tests verify individual functions/methods work as expected. 单元测试验证单个函数/方法按预期工作。",
    },
    {
      question: "What is an abstract data type (ADT)?\n\n什么是抽象数据类型？",
      options: ["A data type with no values · 没有值的数据类型", "A type of database · 一种数据库", "A Python class · 一个Python类", "An interface defining operations, not implementation · 定义操作而非实现的接口"],
      correctIndex: 3,
      explanation: "ADT defines WHAT operations are available, not HOW they're implemented. ADT定义有什么操作，不是如何实现。",
    },
    {
      question: "Which pattern allows switching between different data structure implementations?\n\n哪种模式允许切换不同的数据结构实现？",
      options: ["Singleton", "Observer · 观察者", "Strategy / Interface · 策略/接口", "Factory · 工厂"],
      correctIndex: 2,
      explanation: "Strategy pattern / interfaces let you swap implementations without changing client code. 策略模式/接口让你不改客户端代码就能切换实现。",
    },
    {
      type: "coding",
      question: "Implement a Stack class with push, pop, and is_empty\n\n实现Stack类",
      prompt: "🎯 Create a Stack class. Push 1,2,3. Pop twice. Print remaining stack size.\n创建Stack类，压入1,2,3，弹出两次，打印剩余大小。",
      starterCode: "class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        # Your code here\n        pass\n    \n    def pop(self):\n        # Your code here\n        pass\n    \n    def is_empty(self):\n        # Your code here\n        pass\n    \n    def size(self):\n        # Your code here\n        pass\n\ns = Stack()\ns.push(1)\ns.push(2)\ns.push(3)\ns.pop()\ns.pop()\nprint(s.size())",
      expectedOutput: "1",
      hint: "Use self.items.append() for push, self.items.pop() for pop, len(self.items) for size. 用列表方法实现。",
      explanation: "Wrap list operations in a clean class interface — that's encapsulation! 用干净的类接口包装列表操作——这就是封装！",
    },
    {
      type: "coding",
      question: "Implement a Queue class with enqueue and dequeue\n\n实现Queue类",
      prompt: "🎯 Create a Queue class. Enqueue A,B,C. Dequeue once. Print the dequeued item and queue size.\n创建Queue类，入队A,B,C，出队一次。",
      starterCode: "from collections import deque\n\nclass Queue:\n    def __init__(self):\n        self.items = deque()\n    \n    def enqueue(self, item):\n        # Your code here\n        pass\n    \n    def dequeue(self):\n        # Your code here\n        pass\n    \n    def size(self):\n        # Your code here\n        pass\n\nq = Queue()\nq.enqueue('A')\nq.enqueue('B')\nq.enqueue('C')\nprint(q.dequeue())\nprint(q.size())",
      expectedOutput: "A\n2",
      hint: "enqueue → self.items.append(), dequeue → self.items.popleft(). 入队用append，出队用popleft。",
      explanation: "Using deque internally gives O(1) operations. The class provides a clean API. 内部用deque保证O(1)操作，类提供干净API。",
    },
    {
      type: "coding",
      question: "Implement a simple hash map with put and get\n\n实现简单哈希表",
      prompt: "🎯 Create a SimpleHashMap class. Put ('name','Alice'), ('age','12'). Get and print 'name'.\n创建简单哈希表类，存取键值对。",
      starterCode: "class SimpleHashMap:\n    def __init__(self, size=10):\n        self.size = size\n        self.table = [[] for _ in range(size)]\n    \n    def _hash(self, key):\n        return hash(key) % self.size\n    \n    def put(self, key, value):\n        # Your code here\n        pass\n    \n    def get(self, key):\n        # Your code here\n        pass\n\nhm = SimpleHashMap()\nhm.put('name', 'Alice')\nhm.put('age', '12')\nprint(hm.get('name'))",
      expectedOutput: "Alice",
      hint: "put: find bucket with _hash(key), append (key,value). get: find bucket, search for key. put用_hash找桶并添加，get找桶并搜索。",
      explanation: "Hash the key to find the bucket, then use chaining (list of pairs) for collisions. 哈希键找桶，用链接法处理冲突。",
    },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// EXPORT ALL LESSONS
// ═══════════════════════════════════════════════════════════════

export const DS_LESSONS: Lesson[] = [
  ds_1_1, ds_1_2, ds_1_3, ds_1_4, ds_1_5,
  ds_2_1, ds_2_2, ds_2_3, ds_2_4, ds_2_5,
  ds_3_1, ds_3_2, ds_3_3, ds_3_4, ds_3_5,
  ds_4_1, ds_4_2, ds_4_3,
];