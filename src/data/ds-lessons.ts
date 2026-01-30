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

Python uses **lists** as its array type. Let's explore!
Python 用 **列表 (list)** 作为数组类型。`,
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
      content: `## 💻 Building a Linked List from Scratch`,
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
      content: `## 🔧 Inserting & Traversing · 插入与遍历`,
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
          options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
          correctIndex: 1,
          explanation: "Inserting at the head is O(1) — just create a new node and point it to the old head! 头部插入是 O(1)！",
        },
        {
          question: "What does each node in a singly linked list contain?\n\n单向链表的每个节点包含什么？",
          options: ["Only data", "Data and a pointer to the next node", "Data and pointers to both next and previous", "An index and data"],
          correctIndex: 1,
          explanation: "Each node has data + a next pointer. That's the 'chain' in chain of nodes! 每个节点有数据和下一个指针。",
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
      content: `## 💻 Building a Doubly Linked List`,
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
      content: `## 💻 Stack Implementation · 栈的实现`,
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
      content: `## 🔙 Real Example: Browser Back Button · 浏览器后退按钮`,
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
      content: `## ⚖️ Balanced Parentheses Checker · 括号匹配检查器`,
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
      content: `## ↩️ Undo/Redo System · 撤销/重做系统`,
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
      content: `## 💻 Queue Implementation · 队列实现`,
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
          options: ["First In, First Out", "First In, Last Out", "Fast In, Fast Out", "Find In, Find Out"],
          correctIndex: 0,
          explanation: "FIFO = First In, First Out — like a line at a store! 先进先出——就像排队！",
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
      content: `## 💻 Priority Queue with heapq · 用 heapq 实现优先队列`,
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
      content: `## 🌳 Understanding Heap Structure · 理解堆结构`,
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
          options: ["At the bottom", "At the root (top)", "In the middle", "Random position"],
          correctIndex: 1,
          explanation: "In a min-heap, the root always holds the minimum value! 最小堆中，根节点始终是最小值！",
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
      content: `## 💻 Building a Binary Tree · 构建二叉树`,
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
          options: ["A B C", "B A C", "B C A", "C A B"],
          correctIndex: 1,
          explanation: "In-order = Left → Root → Right: B (left), A (root), C (right). 中序 = 左→根→右！",
        },
        {
          question: "What is a 'leaf' node?\n\n什么是'叶'节点？",
          options: ["The root node", "A node with no children", "A node with two children", "Any node"],
          correctIndex: 1,
          explanation: "A leaf is a node with no children — it's at the 'end' of a branch! 叶节点没有子节点！",
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
      content: `## 💻 BST: Insert & Search · BST：插入与搜索`,
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
          options: ["At the root", "At the rightmost node", "At the leftmost node", "At any leaf"],
          correctIndex: 2,
          explanation: "Keep going left from the root — the leftmost node is the minimum! 一直往左走——最左节点就是最小值！",
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
      content: `## 📁 File System Tree · 文件系统树`,
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
      content: `## 🧮 Expression Tree · 表达式树`,
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
          options: ["3", "+", "*", "2"],
          correctIndex: 2,
          explanation: "The last operation to be performed (* ) is at the root! 最后执行的运算（*）在根节点！",
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
      content: `## 💻 Hash Maps in Python · Python 中的哈希表`,
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
      content: `## 🔧 Hash Collisions · 哈希冲突`,
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
          options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
          correctIndex: 2,
          explanation: "Hash maps provide O(1) average lookup — that's why they're so popular! 哈希表提供 O(1) 平均查找！",
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
      content: `## 💻 Set Operations · 集合操作`,
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
          options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{}"],
          correctIndex: 1,
          explanation: "Intersection = elements in BOTH sets = {2, 3}. 交集 = 两个集合中都有的元素！",
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
      content: `## 💻 Graph Implementation · 图的实现`,
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
      content: `## 🌊 BFS Implementation · 广度优先搜索实现`,
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
      content: `## 🏊 DFS Implementation · 深度优先搜索实现`,
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
          options: ["DFS", "BFS", "Both", "Neither"],
          correctIndex: 1,
          explanation: "BFS uses a queue (FIFO) to explore layer by layer! DFS uses a stack. BFS 使用队列逐层探索！",
        },
        {
          question: "Which finds the shortest path in an unweighted graph?\n\n哪种能在无权图中找到最短路径？",
          options: ["DFS", "BFS", "Both", "Neither"],
          correctIndex: 1,
          explanation: "BFS explores all nodes at distance 1, then 2, etc. — so the first time it reaches a node is the shortest path! BFS 逐层探索，首次到达就是最短路径！",
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
      content: `## 👥 Social Network: Friend Suggestions · 社交网络好友推荐`,
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
      content: `## 🏰 Maze Solver with BFS · 用BFS解迷宫`,
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
          options: ["BFS is faster", "BFS always finds the shortest path first", "DFS can't solve mazes", "BFS uses less memory"],
          correctIndex: 1,
          explanation: "BFS explores layer by layer, so the first path found IS the shortest! BFS 逐层探索，首次找到的就是最短路径！",
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
      content: `## 🫧 Bubble Sort & Selection Sort · 冒泡排序与选择排序`,
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
      content: `## 🚀 Merge Sort — The Fast One · 归并排序——快速选手`,
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
          options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
          correctIndex: 2,
          explanation: "Merge sort divides (log n levels) and merges (n work per level) = O(n log n). 归并排序：分治 log n 层，每层 n 工作量！",
        },
        {
          question: "Which sort is best for nearly-sorted data?\n\n哪种排序最适合几乎已排序的数据？",
          options: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Quick Sort"],
          correctIndex: 2,
          explanation: "Insertion sort on nearly-sorted data is almost O(n) — very efficient! 插入排序对几乎有序数据接近 O(n)！",
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
      content: `## 💻 Linear vs Binary Search · 线性 vs 二分搜索`,
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
      content: `## 🔍 Interpolation Search · 插值搜索`,
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
          options: ["Unsorted", "Sorted", "Unique", "Numeric"],
          correctIndex: 1,
          explanation: "Binary search ONLY works on sorted data! Otherwise it can't decide which half to search. 二分搜索只能用于有序数据！",
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
      content: `## 📚 Your Data Structures Library · 你的数据结构库`,
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
          options: ["Queue", "Array", "Stack", "Graph"],
          correctIndex: 2,
          explanation: "Stack! LIFO — the last action is the first to be undone! 栈！后进先出——最后的操作最先被撤销！",
        },
        {
          question: "What is the time complexity of searching in a hash map?\n\n哈希表中搜索的时间复杂度是？",
          options: ["O(n)", "O(log n)", "O(n²)", "O(1) average"],
          correctIndex: 3,
          explanation: "Hash maps provide O(1) average time for lookups! 哈希表提供平均 O(1) 查找！",
        },
        {
          question: "Which algorithm finds the shortest path in an unweighted graph?\n\n哪种算法在无权图中找最短路径？",
          options: ["DFS", "BFS", "Binary Search", "Merge Sort"],
          correctIndex: 1,
          explanation: "BFS explores layer by layer — the first path it finds IS the shortest! BFS 逐层探索，找到的就是最短路径！",
        },
        {
          question: "Match the time complexity: Merge Sort\n\n匹配时间复杂度：归并排序",
          options: ["O(n)", "O(n²)", "O(n log n)", "O(1)"],
          correctIndex: 2,
          explanation: "Merge sort divides (log n) and merges (n) = O(n log n). 分治 log n 层，每层 n 工作量！",
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