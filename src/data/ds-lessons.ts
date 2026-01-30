// Code Buddy - Data Structures Track
// 4 Modules, 16 Lessons
// Difficulty: Intermediate (assumes Python basics completed)
// Characters: 🐍Py, 🤖Botty, 🔧Chip

import type {
  Lesson,
  Module,
  LessonSection,
} from "./lessons";

// ═══════════════════════════════════════════════════════════════
// DATA STRUCTURES MODULES
// ═══════════════════════════════════════════════════════════════

export const DS_MODULES: Module[] = [
  {
    id: "ds-1",
    title: "📦 Lists & Stacks",
    subtitle: "Arrays, linked lists, and stacks · 数组、链表和栈",
    icon: "📦",
    color: "from-blue-400 to-cyan-500",
    lessons: ["ds-1-1", "ds-1-2", "ds-1-3", "ds-1-4"],
  },
  {
    id: "ds-2",
    title: "🎢 Queues & Trees",
    subtitle: "Queues, deques, and binary trees · 队列、双端队列和二叉树",
    icon: "🎢",
    color: "from-emerald-400 to-teal-500",
    lessons: ["ds-2-1", "ds-2-2", "ds-2-3", "ds-2-4"],
  },
  {
    id: "ds-3",
    title: "🗺️ Graphs & Maps",
    subtitle: "HashMaps, graphs, and pathfinding · 哈希表、图和路径搜索",
    icon: "🗺️",
    color: "from-violet-400 to-purple-500",
    lessons: ["ds-3-1", "ds-3-2", "ds-3-3", "ds-3-4"],
  },
  {
    id: "ds-4",
    title: "🏗️ Projects",
    subtitle: "Build real projects with data structures · 用数据结构做真实项目",
    icon: "🏗️",
    color: "from-orange-400 to-red-500",
    lessons: ["ds-4-1", "ds-4-2", "ds-4-3", "ds-4-4"],
  },
];

// ═══════════════════════════════════════════════════════════════
// LESSON DS-1-1: The Magic Array
// ═══════════════════════════════════════════════════════════════

const ds_1_1: Lesson = {
  id: "ds-1-1",
  moduleId: "ds-1",
  title: "The Magic Array",
  subtitle: "Arrays as numbered lockers · 魔法数组：编号储物柜",
  icon: "🗄️",
  xp: 40,
  duration: "20 min",
  order: 1,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🐍",
      content: `## 🐍 Py Says: Welcome to Data Structures!

Hey champion! 🏆 You've learned Python basics — now let's learn how to **organize data like a PRO**!

Imagine a row of **numbered lockers** in a school hallway:
- Locker #0 has "apple" 🍎
- Locker #1 has "banana" 🍌
- Locker #2 has "cherry" 🍒

That's an **array** (in Python, we call it a **list**)! Each locker has:
- A **number** (index) — starts from 0!
- A **value** — whatever's inside

🤖 Botty: "Arrays are the #1 most used data structure in ALL programming! Every app, game, and AI uses them!"

🔧 Chip: "My memory chips store data in arrays too — just billions of tiny numbered slots!"

Let's open those lockers! 🔓`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: Arrays & Indexing",
      concept: {
        title: "🧰 Arrays & Indexing",
        titleZh: "数组与索引",
        syntaxCards: [
          {
            symbol: "[a, b, c]",
            name: "List (Array)",
            nameZh: "列表（数组）",
            emoji: "📦",
            description: "Square brackets create an ordered collection. Items are separated by commas. Like numbered lockers in a hallway!",
            example: 'fruits = ["apple", "banana", "cherry"]',
          },
          {
            symbol: "list[i]",
            name: "Index Access",
            nameZh: "索引访问",
            emoji: "🔢",
            description: "Use square brackets with a number to access an item. Index starts at 0, not 1! Like locker numbers.",
            example: 'fruits[0]  # "apple"\nfruits[2]  # "cherry"',
          },
          {
            symbol: "list[a:b]",
            name: "Slice",
            nameZh: "切片",
            emoji: "✂️",
            description: "Get a sub-array from index a to b-1. Like cutting a portion from a row of lockers.",
            example: 'fruits[0:2]  # ["apple", "banana"]',
          },
          {
            symbol: "len(list)",
            name: "Length",
            nameZh: "长度",
            emoji: "📏",
            description: "Returns how many items are in the list. Like counting how many lockers are in the row.",
            example: 'len(fruits)  # 3',
          },
          {
            symbol: "list.append(x)",
            name: "Append",
            nameZh: "追加",
            emoji: "➕",
            description: "Add an item to the END of the list. Like adding a new locker at the end of the hallway.",
            example: 'fruits.append("date")',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'inventory = ["sword", "shield", "potion"]', explanation: "Create a list with 3 items — index 0, 1, 2", explanationZh: "创建含3个元素的列表 — 索引 0, 1, 2" },
            { code: 'print(inventory[0])', explanation: "Access first item (index 0) → 'sword'", explanationZh: "访问第一个元素（索引0）→ 'sword'" },
            { code: 'inventory.append("bow")', explanation: "Add 'bow' at the end → now 4 items", explanationZh: "在末尾添加 'bow' → 现在有4个元素" },
            { code: 'print(inventory[1:3])', explanation: "Slice from index 1 to 2 → ['shield', 'potion']", explanationZh: "从索引1到2的切片 → ['shield', 'potion']" },
            { code: 'print(len(inventory))', explanation: "Length = 4 items total", explanationZh: "长度 = 共4个元素" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🎮",
      content: `## 🎮 Build a Game Inventory System!

Let's create an RPG inventory using arrays:`,
      code: `# 🐍 Py: "Every RPG hero needs an inventory!"
inventory = ["wooden sword", "health potion", "map"]
print("🎒 Your Inventory:")
for i, item in enumerate(inventory):
    print(f"  Slot {i}: {item}")

# Add new loot! 💰
print("\\n⚔️ You found a DIAMOND SHIELD!")
inventory.append("diamond shield")

# Check a specific slot
print(f"\\n🔍 Slot 0 contains: {inventory[0]}")
print(f"📏 Total items: {len(inventory)}")

# Slice: show first 2 items
print(f"\\n✂️ First 2 items: {inventory[:2]}")

# Replace an item
inventory[0] = "fire sword"
print(f"🔥 Upgraded! Slot 0 is now: {inventory[0]}")`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Inventory Manager!

Create your own inventory and practice indexing.`,
      exercise: {
        prompt: "Create a list called 'backpack' with 3 items, then print the second item (index 1).",
        promptZh: "创建一个叫 'backpack' 的列表，包含3个物品，然后打印第二个元素（索引1）。",
        starterCode: '# Create your backpack list\nbackpack = ["water", "snack", "flashlight"]\n# Print the second item\n',
        expectedOutput: "snack",
        hint: "Use backpack[1] to access the second item (remember, index starts at 0!)",
        hintZh: "用 backpack[1] 访问第二个元素（记住，索引从0开始！）",
        solution: 'backpack = ["water", "snack", "flashlight"]\nprint(backpack[1])',
      },
    },
    {
      type: "code",
      emoji: "🔥",
      content: `## 🔥 Advanced: Array Operations

Let's explore more powerful array operations:`,
      code: `# 🤖 Botty: "Arrays can do SO much more!"

# Negative indexing — count from the END!
colors = ["red", "green", "blue", "yellow"]
print(f"Last color: {colors[-1]}")      # yellow
print(f"Second to last: {colors[-2]}")  # blue

# Insert at specific position
colors.insert(1, "orange")
print(f"After insert: {colors}")

# Remove by value
colors.remove("green")
print(f"After remove: {colors}")

# Sort the array
numbers = [42, 7, 13, 99, 1]
numbers.sort()
print(f"Sorted: {numbers}")

# Reverse
numbers.reverse()
print(f"Reversed: {numbers}")

# Check if item exists
print(f"Is 42 in list? {'42' if 42 in numbers else 'nope'}")

# 🔧 Chip: "Each operation has a speed (Big O)!"
# append: O(1) — instant!
# insert: O(n) — has to shift items
# search: O(n) — checks one by one`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🏪 Shop Inventory Manager · 商店库存管理器",
        description: "Build a shop inventory! Create a list of 5 items with prices, find the most expensive item, and calculate the total price.\n创建一个包含5件商品及价格的商店，找出最贵的商品并计算总价。",
        starterCode: `# Shop Inventory Manager
# 商店库存管理器

items = ["Sword", "Shield", "Potion", "Bow", "Armor"]
prices = [100, 80, 25, 60, 150]

# TODO: Print each item with its price
# TODO: Find and print the most expensive item
# TODO: Calculate and print the total price
`,
        hint: "Use zip(items, prices) to pair them. Use max() with a key, or find the index of max price with prices.index(max(prices)).\n用 zip(items, prices) 配对。用 max() 或 prices.index(max(prices)) 找最贵的。",
        solution: `items = ["Sword", "Shield", "Potion", "Bow", "Armor"]
prices = [100, 80, 25, 60, 150]

print("🏪 Shop Inventory:")
for item, price in zip(items, prices):
    print(f"  {item}: {price} gold")

max_price = max(prices)
max_item = items[prices.index(max_price)]
print(f"\\n💎 Most expensive: {max_item} ({max_price} gold)")
print(f"💰 Total value: {sum(prices)} gold")`,
        expectedOutput: "🏪 Shop Inventory:\n  Sword: 100 gold\n  Shield: 80 gold\n  Potion: 25 gold\n  Bow: 60 gold\n  Armor: 150 gold\n\n💎 Most expensive: Armor (150 gold)\n💰 Total value: 415 gold",
      },
    },
    {
      type: "quiz",
      content: "🎓 Array Knowledge Check!",
      quiz: [
        {
          question: "What is the index of the FIRST element in a Python list?",
          options: ["1", "0", "-1", "None"],
          correctIndex: 1,
          explanation: "Python uses zero-based indexing! The first element is at index 0. 🐍 Remember: lockers start counting from 0!",
        },
        {
          question: 'If fruits = ["apple", "banana", "cherry"], what does fruits[-1] return?',
          options: ['"apple"', '"banana"', '"cherry"', "Error"],
          correctIndex: 2,
          explanation: "Negative indexing counts from the end! -1 = last item = 'cherry'. 🍒",
        },
        {
          question: 'What does fruits[0:2] return if fruits = ["a", "b", "c", "d"]?',
          options: ['["a", "b"]', '["a", "b", "c"]', '["b", "c"]', '["a"]'],
          correctIndex: 0,
          explanation: "Slicing [0:2] gives indices 0 and 1 (not including 2). Think: start ≤ index < end. ✂️",
        },
        {
          question: "Which operation is FASTEST on a Python list?",
          options: ["insert(0, x) — insert at beginning", "append(x) — add to end", "remove(x) — find and remove", "sort() — sort everything"],
          correctIndex: 1,
          explanation: "append() is O(1) — it just adds to the end! Insert/remove/sort all need to move or compare items. ⚡",
        },
      ],
    },
    {
      type: "output-choice",
      content: "🔮 Predict the Output!",
      outputChoice: {
        code: 'nums = [10, 20, 30, 40]\nnums.append(50)\nprint(nums[2], len(nums))',
        options: ["30 5", "20 5", "30 4", "50 5"],
        correctIndex: 0,
        explanation: "After append, nums = [10,20,30,40,50]. Index 2 is still 30, and len is now 5!",
      },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-1-2: Linked Chain Adventure
// ═══════════════════════════════════════════════════════════════

const ds_1_2: Lesson = {
  id: "ds-1-2",
  moduleId: "ds-1",
  title: "Linked Chain Adventure",
  subtitle: "Nodes & pointers like train cars · 链式冒险：像火车车厢一样的节点",
  icon: "🔗",
  xp: 45,
  duration: "22 min",
  order: 2,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🚂",
      content: `## 🐍 Py Says: All Aboard the Linked List Express! 🚂

Imagine a **train** 🚂 where each car:
- Holds some **cargo** (data)
- Has a **hook** connecting to the NEXT car (pointer)

That's a **Linked List**! Unlike arrays (numbered lockers in a row), linked lists are **chained together** like train cars.

**Why use a linked list instead of an array?**
- 🟢 Easy to INSERT or REMOVE cars in the middle — just unhook and rehook!
- 🔴 But... you can't jump to car #5 directly. You must walk car-by-car from the front!

🤖 Botty: "Web browsers use linked lists to store your browsing history — each page points to the previous one!"

🔧 Chip: "In my circuits, memory isn't always in a row. Linked lists let me scatter data anywhere and just follow the links!"

Let's build our own train! 🛤️`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: Nodes & Linked Lists",
      concept: {
        title: "🧰 Nodes & Linked Lists",
        titleZh: "节点与链表",
        syntaxCards: [
          {
            symbol: "Node",
            name: "Node (train car)",
            nameZh: "节点（火车车厢）",
            emoji: "🚃",
            description: "A container that holds DATA + a POINTER to the next node. Like a train car with cargo and a hook.",
            example: 'class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None',
          },
          {
            symbol: "self.next",
            name: "Pointer (hook to next)",
            nameZh: "指针（连接下一个的钩子）",
            emoji: "🪝",
            description: "Each node points to the next one. The last node points to None (end of train!).",
            example: 'node1.next = node2  # hook car1 to car2',
          },
          {
            symbol: "head",
            name: "Head (first node)",
            nameZh: "头节点（第一个节点）",
            emoji: "🚂",
            description: "The entry point — the locomotive! We always start traversal from the head.",
            example: 'head = Node("Engine")',
          },
          {
            symbol: "traversal",
            name: "Traversal (walk the chain)",
            nameZh: "遍历（沿链走）",
            emoji: "🚶",
            description: "Visit each node from head to end by following .next pointers. Like walking through train cars.",
            example: 'current = head\nwhile current:\n    print(current.data)\n    current = current.next',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'class Node:', explanation: "Define a Node — our train car blueprint", explanationZh: "定义节点 — 火车车厢的蓝图" },
            { code: '    def __init__(self, data):', explanation: "Constructor takes data (cargo)", explanationZh: "构造函数接收数据（货物）" },
            { code: '        self.data = data', explanation: "Store the cargo in this car", explanationZh: "在车厢中存放货物" },
            { code: '        self.next = None', explanation: "No hook connected yet (end of line)", explanationZh: "还没有连接钩子（终点）" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🚂",
      content: `## 🚂 Build Your First Linked List!

Let's construct a train car by car:`,
      code: `# 🐍 Py: "Let's build a train!"

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Create train cars 🚃
engine = Node("🚂 Engine")
cargo1 = Node("📦 Gold")
cargo2 = Node("🎁 Gifts")
caboose = Node("🔴 Caboose")

# Hook them together! 🪝
engine.next = cargo1
cargo1.next = cargo2
cargo2.next = caboose

# Traverse the train! 🚶
print("🛤️ Train cars:")
current = engine
while current:
    arrow = " → " if current.next else " → END"
    print(f"  [{current.data}]{arrow}")
    current = current.next

# Count the cars
current = engine
count = 0
while current:
    count += 1
    current = current.next
print(f"\\n📏 Total cars: {count}")`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Add a Car!

Insert a new car into the middle of the linked list.`,
      exercise: {
        prompt: "Create 3 nodes (A→B→C), then insert X between B and C. Print all nodes.",
        promptZh: "创建3个节点（A→B→C），然后在B和C之间插入X。打印所有节点。",
        starterCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

a = Node("A")
b = Node("B")
c = Node("C")
a.next = b
b.next = c

# Insert X between B and C
x = Node("X")
# TODO: connect x between b and c

# Print the chain
current = a
while current:
    print(current.data, end=" ")
    current = current.next
print()`,
        expectedOutput: "A B X C",
        hint: "Set b.next = x and x.next = c. This 'unhooks' C from B and hooks X in between!",
        hintZh: "设置 b.next = x 然后 x.next = c。这会把C从B上解开，把X挂在中间！",
        solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

a = Node("A")
b = Node("B")
c = Node("C")
a.next = b
b.next = c

x = Node("X")
x.next = c
b.next = x

current = a
while current:
    print(current.data, end=" ")
    current = current.next
print()`,
      },
    },
    {
      type: "code",
      emoji: "🔥",
      content: `## 🔥 Full LinkedList Class

Let's build a complete LinkedList with useful methods:`,
      code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        """Add to the end — like adding a car at the tail"""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def prepend(self, data):
        """Add to the front — new locomotive!"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def display(self):
        """Show the whole chain"""
        items = []
        current = self.head
        while current:
            items.append(str(current.data))
            current = current.next
        print(" → ".join(items) + " → END")

# 🚂 Build a train!
train = LinkedList()
train.append("🚂 Engine")
train.append("📦 Cargo")
train.append("🎁 Mail")
train.prepend("⭐ VIP Car")  # Added to front!

print("🛤️ Full train:")
train.display()
# ⭐ VIP Car → 🚂 Engine → 📦 Cargo → 🎁 Mail → END`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔄 Reverse the Train · 反转火车",
        description: "Write a function to reverse a linked list! The caboose becomes the engine and vice versa.\n写一个函数反转链表！尾部变头部，头部变尾部。",
        starterCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverse_list(head):
    # TODO: Reverse the linked list
    # Return the new head
    pass

# Build: 1 → 2 → 3 → 4
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)

# Reverse it!
new_head = reverse_list(head)

# Print result
current = new_head
while current:
    print(current.data, end=" ")
    current = current.next
print()`,
        hint: "Use three pointers: prev, current, next_node. Walk through the list, reversing each arrow.\n用三个指针：prev、current、next_node。遍历链表，反转每个箭头。",
        solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverse_list(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)

new_head = reverse_list(head)

current = new_head
while current:
    print(current.data, end=" ")
    current = current.next
print()`,
        expectedOutput: "4 3 2 1",
      },
    },
    {
      type: "quiz",
      content: "🎓 Linked List Knowledge Check!",
      quiz: [
        {
          question: "What does each node in a linked list contain?",
          options: ["Just data", "Just a pointer", "Data + pointer to next node", "An index number + data"],
          correctIndex: 2,
          explanation: "Each node has DATA (cargo) and a NEXT pointer (hook to the next car). 🚃🪝",
        },
        {
          question: "What advantage does a linked list have over an array?",
          options: ["Faster to access item #5", "Easier to insert/remove in the middle", "Uses less memory", "Easier to sort"],
          correctIndex: 1,
          explanation: "Inserting into a linked list is O(1) once you're at the right spot — just rehook! Arrays must shift everything. 🔗",
        },
        {
          question: "What does the last node's .next point to?",
          options: ["The first node", "Itself", "None", "0"],
          correctIndex: 2,
          explanation: "None means 'end of the line!' 🚂 No more cars after the caboose.",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-1-3: Stack the Pancakes
// ═══════════════════════════════════════════════════════════════

const ds_1_3: Lesson = {
  id: "ds-1-3",
  moduleId: "ds-1",
  title: "Stack the Pancakes",
  subtitle: "LIFO stacks — push, pop, peek · 叠煎饼：后进先出的栈",
  icon: "🥞",
  xp: 45,
  duration: "20 min",
  order: 3,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🥞",
      content: `## 🐍 Py Says: Let's Stack Some Pancakes! 🥞

Imagine a stack of pancakes 🥞:
- You put new pancakes **on TOP**
- You eat the pancake **from the TOP**
- You can't grab the one at the bottom without removing everything above!

This is a **Stack** — a **LIFO** structure:
**L**ast **I**n, **F**irst **O**ut!

Real-world stacks are EVERYWHERE:
- 📚 A pile of books
- ↩️ The UNDO button (Ctrl+Z)
- 🌐 Browser back button
- 📱 Your phone's back navigation

🤖 Botty: "When you press Ctrl+Z, your editor POPS the last action off a stack!"

🔧 Chip: "The CPU uses a call stack to track function calls. When a function returns, it pops!"

Time to stack! ⬆️`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: Stack Operations",
      concept: {
        title: "🧰 Stack Operations",
        titleZh: "栈操作",
        syntaxCards: [
          {
            symbol: "push(x)",
            name: "Push (add to top)",
            nameZh: "压栈（添加到顶部）",
            emoji: "⬆️",
            description: "Add an item to the TOP of the stack. Like placing a new pancake on the pile.",
            example: 'stack.append("pancake")  # Python uses append',
          },
          {
            symbol: "pop()",
            name: "Pop (remove from top)",
            nameZh: "出栈（从顶部移除）",
            emoji: "⬇️",
            description: "Remove and return the TOP item. Like eating the top pancake. Error if stack is empty!",
            example: 'top = stack.pop()  # removes & returns top',
          },
          {
            symbol: "peek()",
            name: "Peek (look at top)",
            nameZh: "查看栈顶",
            emoji: "👀",
            description: "Look at the top item WITHOUT removing it. Like checking which pancake is on top.",
            example: 'top = stack[-1]  # peek in Python',
          },
          {
            symbol: "LIFO",
            name: "Last In, First Out",
            nameZh: "后进先出",
            emoji: "🔄",
            description: "The LAST item you put in is the FIRST to come out. Think: stack of plates.",
            example: 'push A, push B, push C\npop → C, pop → B, pop → A',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'stack = []', explanation: "Create empty stack (we use a Python list)", explanationZh: "创建空栈（用Python列表）" },
            { code: 'stack.append("A")', explanation: "Push 'A' — stack is now ['A']", explanationZh: "压入 'A' — 栈现在是 ['A']" },
            { code: 'stack.append("B")', explanation: "Push 'B' — stack is now ['A', 'B']", explanationZh: "压入 'B' — 栈现在是 ['A', 'B']" },
            { code: 'top = stack.pop()', explanation: "Pop → returns 'B', stack is now ['A']", explanationZh: "弹出 → 返回 'B'，栈现在是 ['A']" },
            { code: 'peek = stack[-1]', explanation: "Peek → 'A' (still in stack)", explanationZh: "查看栈顶 → 'A'（仍在栈中）" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🥞",
      content: `## 🥞 The Pancake Stack!

Let's stack and eat pancakes:`,
      code: `# 🐍 Py: "LIFO = Last pancake goes on top, first to be eaten!"

stack = []

# Push pancakes onto the stack ⬆️
pancakes = ["🥞 Plain", "🥞 Blueberry", "🥞 Chocolate", "🥞 Banana"]
for p in pancakes:
    stack.append(p)
    print(f"  ⬆️ Pushed: {p}")

print(f"\\n📚 Stack (top is rightmost): {stack}")
print(f"👀 Top pancake: {stack[-1]}")
print(f"📏 Height: {len(stack)}")

# Pop and eat! ⬇️
print("\\n🍽️ Time to eat!")
while stack:
    eaten = stack.pop()
    print(f"  ⬇️ Ate: {eaten}")

print(f"\\n📭 Stack empty? {len(stack) == 0}")`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Bracket Matcher!

Use a stack to check if brackets are balanced!`,
      exercise: {
        prompt: 'Check if the string "(())" has balanced brackets using a stack. Print True or False.',
        promptZh: '用栈检查字符串 "(())" 的括号是否匹配。打印 True 或 False。',
        starterCode: `s = "(())"
stack = []
balanced = True

for char in s:
    if char == "(":
        stack.append(char)
    elif char == ")":
        if stack:
            stack.pop()
        else:
            balanced = False

# Check result
# TODO: also check if stack is empty at end!
print(balanced)`,
        expectedOutput: "True",
        hint: "After the loop, also check if the stack is empty. If not, there are unmatched '(' brackets!",
        hintZh: "循环结束后，还要检查栈是否为空。如果不空，说明有未匹配的 '(' 括号！",
        solution: `s = "(())"
stack = []
balanced = True

for char in s:
    if char == "(":
        stack.append(char)
    elif char == ")":
        if stack:
            stack.pop()
        else:
            balanced = False

if stack:
    balanced = False
print(balanced)`,
      },
    },
    {
      type: "code",
      emoji: "↩️",
      content: `## ↩️ Build an Undo System!

Stacks power every undo feature in every app:`,
      code: `# 🤖 Botty: "Ctrl+Z is just popping from a stack!"

class TextEditor:
    def __init__(self):
        self.text = ""
        self.undo_stack = []
    
    def type_text(self, new_text):
        self.undo_stack.append(self.text)  # Save current state
        self.text += new_text
        print(f'✏️ Typed: "{new_text}" → "{self.text}"')
    
    def undo(self):
        if self.undo_stack:
            self.text = self.undo_stack.pop()
            print(f'↩️ Undo! Text is now: "{self.text}"')
        else:
            print("❌ Nothing to undo!")

# Let's try it!
editor = TextEditor()
editor.type_text("Hello")
editor.type_text(" World")
editor.type_text("!!!")
print(f'\\n📄 Current: "{editor.text}"')

editor.undo()
editor.undo()
print(f'📄 After 2 undos: "{editor.text}"')`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔤 Reverse a String with a Stack · 用栈反转字符串",
        description: "Push each character onto a stack, then pop them all off to reverse a string!\n把每个字符压入栈，然后全部弹出来反转字符串！",
        starterCode: `word = "hello"
stack = []

# TODO: Push each character onto the stack

# TODO: Pop all characters to build reversed string
reversed_word = ""

print(reversed_word)`,
        hint: "Loop through each char, append to stack. Then loop while stack is not empty, pop and add to reversed_word.\n遍历每个字符，append到栈。然后当栈不空时，pop并拼接到reversed_word。",
        solution: `word = "hello"
stack = []

for char in word:
    stack.append(char)

reversed_word = ""
while stack:
    reversed_word += stack.pop()

print(reversed_word)`,
        expectedOutput: "olleh",
      },
    },
    {
      type: "quiz",
      content: "🎓 Stack Knowledge Check!",
      quiz: [
        {
          question: "What does LIFO stand for?",
          options: ["Last In, First Out", "Linked In, Found Out", "List In, File Out", "Last Item, First Operation"],
          correctIndex: 0,
          explanation: "LIFO = Last In, First Out! The most recent item added is the first to be removed. 🥞",
        },
        {
          question: "If you push A, B, C and then pop twice, what's left?",
          options: ["C", "A", "B, C", "A, B"],
          correctIndex: 1,
          explanation: "Push: [A, B, C]. Pop → C. Pop → B. Left: [A]. The bottom stays! 📚",
        },
        {
          question: "Which real-world feature uses a stack?",
          options: ["Printer queue", "Undo button (Ctrl+Z)", "Playlist shuffle", "File sorting"],
          correctIndex: 1,
          explanation: "Undo is a perfect stack example! Each action is pushed, and Ctrl+Z pops the last one. ↩️",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-1-4: Module 1 Boss Battle
// ═══════════════════════════════════════════════════════════════

const ds_1_4: Lesson = {
  id: "ds-1-4",
  moduleId: "ds-1",
  title: "Module 1 Boss Battle",
  subtitle: "Combine arrays, lists, and stacks · 第一关大Boss：综合挑战",
  icon: "🐉",
  xp: 60,
  duration: "25 min",
  order: 4,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🐉",
      content: `## 🐍 Py Says: Time for the BOSS BATTLE! 🐉

You've mastered:
- ✅ **Arrays** — numbered lockers, indexing, slicing
- ✅ **Linked Lists** — chained nodes with pointers
- ✅ **Stacks** — LIFO push/pop

Now it's time to prove your skills against the **Module 1 Dragon**! 🐉

This boss battle has 3 rounds:
1. 🗡️ **Round 1**: Array Warrior — manipulate arrays under pressure
2. 🔗 **Round 2**: Chain Master — linked list surgery
3. 🥞 **Round 3**: Stack Sorcerer — stack-based spell casting

🤖 Botty: "Don't worry — you've trained for this! Use everything you've learned!"

🔧 Chip: "I've seen your code. You've got this! 💪"

Ready? 🎮 START!`,
    },
    {
      type: "code",
      emoji: "🗡️",
      content: `## 🗡️ Round 1: Array Warrior

Defeat the dragon's minions by sorting the battle lineup!`,
      code: `# 🗡️ ROUND 1: Array Battle!

warriors = [
    {"name": "🧙 Mage", "power": 85},
    {"name": "🗡️ Knight", "power": 92},
    {"name": "🏹 Archer", "power": 78},
    {"name": "🛡️ Tank", "power": 95},
    {"name": "🗡️ Rogue", "power": 88},
]

# Sort warriors by power (strongest first)
warriors.sort(key=lambda w: w["power"], reverse=True)

print("⚔️ Battle Formation (strongest first):")
for i, w in enumerate(warriors):
    role = "⭐ LEADER" if i == 0 else f"  Rank {i+1}"
    print(f"  {role}: {w['name']} (Power: {w['power']})")

# Split into front line and back line
front = warriors[:2]
back = warriors[2:]
print(f"\\n🛡️ Front line: {[w['name'] for w in front]}")
print(f"🏹 Back line: {[w['name'] for w in back]}")
print(f"\\n💪 Total power: {sum(w['power'] for w in warriors)}")`,
    },
    {
      type: "challenge",
      content: "🏆 Round 2: Chain Master · 第二轮：链表大师",
      challenge: {
        title: "🔗 Delete a Node from Linked List · 从链表中删除节点",
        description: "Write a function that removes a node with a given value from a linked list. Return the head of the modified list.\n写一个函数，从链表中删除指定值的节点。返回修改后的头节点。",
        starterCode: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def delete_node(head, value):
    # TODO: Delete the node with the given value
    # Handle: deleting head, middle, or end node
    pass

# Build: 10 → 20 → 30 → 40
head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)

# Delete 30
head = delete_node(head, 30)

# Print result
current = head
while current:
    print(current.data, end=" ")
    current = current.next
print()`,
        hint: "Handle special case: if head is the target, return head.next. Otherwise, walk until you find the node BEFORE the target and skip over it.\n特殊情况：如果头节点就是目标，返回 head.next。否则，找到目标前一个节点，跳过目标。",
        solution: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def delete_node(head, value):
    if head and head.data == value:
        return head.next
    current = head
    while current and current.next:
        if current.next.data == value:
            current.next = current.next.next
            return head
        current = current.next
    return head

head = Node(10)
head.next = Node(20)
head.next.next = Node(30)
head.next.next.next = Node(40)

head = delete_node(head, 30)

current = head
while current:
    print(current.data, end=" ")
    current = current.next
print()`,
        expectedOutput: "10 20 40",
      },
    },
    {
      type: "challenge",
      content: "🏆 Round 3: Stack Sorcerer · 第三轮：栈魔法师",
      challenge: {
        title: "🧙 Bracket Validator · 括号验证器",
        description: "Check if a string has valid bracket pairs: (), [], {}. Each open bracket must close in the right order.\n检查字符串的括号是否匹配：()、[]、{}。每个开括号必须按正确顺序闭合。",
        starterCode: `def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    
    # TODO: Loop through each character
    # If it's an opening bracket, push it
    # If it's a closing bracket, check the stack
    pass

# Test cases
print(is_valid("({[]})"))  # True
print(is_valid("([)]"))    # False
print(is_valid(""))        # True`,
        hint: "For each char: if opening bracket → push. If closing bracket → check if stack top matches (use the pairs dict). At end, stack should be empty.\n每个字符：如果是开括号→压栈。如果是闭括号→检查栈顶是否匹配（用pairs字典）。最后栈应为空。",
        solution: `def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()
    
    return len(stack) == 0

print(is_valid("({[]})"))
print(is_valid("([)]"))
print(is_valid(""))`,
        expectedOutput: "True\nFalse\nTrue",
      },
    },
    {
      type: "quiz",
      content: "🎓 Boss Battle Final Quiz!",
      quiz: [
        {
          question: "Which data structure lets you access ANY element instantly by index?",
          options: ["Linked List", "Stack", "Array (Python list)", "None of the above"],
          correctIndex: 2,
          explanation: "Arrays give O(1) random access by index. Linked lists require traversal. Stacks only access the top. 🗄️",
        },
        {
          question: "To insert at the MIDDLE of data, which is most efficient?",
          options: ["Array", "Linked List", "Stack", "They're all the same"],
          correctIndex: 1,
          explanation: "Linked lists can insert in O(1) once you're at the right spot. Arrays must shift all later elements! 🔗",
        },
        {
          question: "What pattern does a Stack follow?",
          options: ["FIFO", "LIFO", "Random", "Sorted"],
          correctIndex: 1,
          explanation: "Stack = LIFO (Last In, First Out). Queue = FIFO. Don't mix them up! 🥞",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-2-1: Queue at the Amusement Park
// ═══════════════════════════════════════════════════════════════

const ds_2_1: Lesson = {
  id: "ds-2-1",
  moduleId: "ds-2",
  title: "Queue at the Amusement Park",
  subtitle: "FIFO queues — first come, first served · 游乐园排队：先来先服务",
  icon: "🎢",
  xp: 45,
  duration: "20 min",
  order: 5,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🎢",
      content: `## 🐍 Py Says: Welcome to Py's Amusement Park! 🎢

You're at an amusement park 🎡 and there's a HUGE line for the roller coaster!

In a **queue** (like a real line):
- New people join at the **BACK** 🔚
- The person at the **FRONT** gets to ride first 🎢
- NO cutting in line! 😤

This is **FIFO** — **F**irst **I**n, **F**irst **O**ut!

Queues are everywhere:
- 🖨️ Print jobs waiting to print
- 🍔 Drive-through orders
- 📱 App notifications
- 🎮 Online game matchmaking

🤖 Botty: "When you send a message, it goes into a queue and gets delivered in order!"

🔧 Chip: "My CPU processes tasks in a queue — first task submitted = first executed!"

Let's manage the ride queue! 🎠`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: Queue Operations",
      concept: {
        title: "🧰 Queue Operations",
        titleZh: "队列操作",
        syntaxCards: [
          {
            symbol: "enqueue(x)",
            name: "Enqueue (join the back)",
            nameZh: "入队（加入队尾）",
            emoji: "🔚",
            description: "Add an item to the BACK of the queue. Like a new person joining the line.",
            example: 'from collections import deque\nq = deque()\nq.append("Alice")  # enqueue',
          },
          {
            symbol: "dequeue()",
            name: "Dequeue (leave from front)",
            nameZh: "出队（从队首离开）",
            emoji: "🚪",
            description: "Remove and return the FRONT item. The first person in line gets served!",
            example: 'first = q.popleft()  # dequeue',
          },
          {
            symbol: "front()",
            name: "Front / Peek",
            nameZh: "查看队首",
            emoji: "👀",
            description: "Look at the front person without removing them. Who's next?",
            example: 'next_person = q[0]  # peek at front',
          },
          {
            symbol: "deque",
            name: "Python's deque (fast queue)",
            nameZh: "Python的deque（高效队列）",
            emoji: "⚡",
            description: "Use collections.deque for O(1) operations on both ends. Regular lists are slow for popleft!",
            example: 'from collections import deque\nq = deque()',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'from collections import deque', explanation: "Import deque — a fast double-ended queue", explanationZh: "导入 deque — 快速双端队列" },
            { code: 'queue = deque()', explanation: "Create an empty queue", explanationZh: "创建空队列" },
            { code: 'queue.append("Alice")', explanation: "Enqueue Alice (joins the back)", explanationZh: "入队 Alice（加入队尾）" },
            { code: 'queue.append("Bob")', explanation: "Enqueue Bob (behind Alice)", explanationZh: "入队 Bob（在 Alice 后面）" },
            { code: 'served = queue.popleft()', explanation: "Dequeue → Alice (she was first!)", explanationZh: "出队 → Alice（她排在最前面！）" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🎢",
      content: `## 🎢 Roller Coaster Queue Simulator!`,
      code: `from collections import deque

# 🎢 Roller coaster queue!
ride_queue = deque()

# People arrive at the park 🚶
arrivals = ["🧒 Emma", "👦 Liam", "👧 Sophia", "🧑 Noah", "👩 Olivia"]
for person in arrivals:
    ride_queue.append(person)
    print(f"  🔚 {person} joined the queue")

print(f"\\n📋 Queue: {list(ride_queue)}")
print(f"👀 Next up: {ride_queue[0]}")
print(f"📏 Queue length: {len(ride_queue)}")

# Ride time! 🎢 (seats 2 people per round)
print("\\n🎢 RIDE STARTING!")
round_num = 1
while ride_queue:
    riders = []
    for _ in range(min(2, len(ride_queue))):
        riders.append(ride_queue.popleft())
    print(f"  Round {round_num}: {', '.join(riders)} → 🎢 WHOOSH!")
    round_num += 1

print("\\n✅ Everyone has ridden! Queue is empty!")`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Printer Queue!

Simulate a printer queue that processes jobs in order.`,
      exercise: {
        prompt: "Create a queue with 3 print jobs, then process (dequeue) them one by one, printing each job.",
        promptZh: "创建一个包含3个打印任务的队列，然后逐个处理（出队），打印每个任务。",
        starterCode: `from collections import deque

printer = deque()
printer.append("Resume.pdf")
printer.append("Photo.jpg")
printer.append("Report.doc")

# TODO: Process all jobs (dequeue and print each one)
`,
        expectedOutput: "Printing: Resume.pdf\nPrinting: Photo.jpg\nPrinting: Report.doc",
        hint: "Use a while loop: while printer is not empty, popleft() and print!",
        hintZh: "用while循环：当printer不为空时，popleft()并打印！",
        solution: `from collections import deque

printer = deque()
printer.append("Resume.pdf")
printer.append("Photo.jpg")
printer.append("Report.doc")

while printer:
    job = printer.popleft()
    print(f"Printing: {job}")`,
      },
    },
    {
      type: "code",
      emoji: "🍔",
      content: `## 🍔 Drive-Through Queue with Timing!`,
      code: `from collections import deque
import random

# 🍔 Fast food drive-through!
drive_through = deque()

orders = [
    ("🍔 Burger Combo", 3),
    ("🍟 Fries Only", 1),
    ("🥤 Shake + 🍔 Deluxe", 5),
    ("🌮 Taco Box", 2),
    ("🍕 Pizza Slice", 2),
]

for name, time in orders:
    drive_through.append((name, time))
    print(f"  📝 Order placed: {name} ({time} min)")

print(f"\\n🚗 Processing orders...")
total_time = 0
while drive_through:
    order, prep_time = drive_through.popleft()
    total_time += prep_time
    print(f"  ✅ {order} ready! (took {prep_time} min, total: {total_time} min)")

print(f"\\n⏱️ All orders done in {total_time} minutes!")`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🎵 Hot Potato Game · 烫手山芋游戏",
        description: "Simulate Hot Potato: players stand in a circle (queue). Pass the potato N times, then eliminate the person holding it. Last one standing wins!\n模拟烫手山芋：玩家围成一圈（队列）。传递N次后，拿着山芋的人被淘汰。最后站着的人赢！",
        starterCode: `from collections import deque

def hot_potato(names, num_passes):
    queue = deque(names)
    
    while len(queue) > 1:
        # TODO: Pass the potato num_passes times
        # (move front person to back of queue)
        # Then eliminate the person at front
        pass
    
    return queue[0]

players = ["Alice", "Bob", "Charlie", "David", "Eve"]
winner = hot_potato(players, 3)
print(f"🏆 Winner: {winner}")`,
        hint: "To 'pass the potato', dequeue from front and enqueue to back. Do this num_passes times, then dequeue (eliminate) the front person.\n'传递山芋'就是从前面出队再从后面入队。这样做num_passes次，然后出队（淘汰）前面的人。",
        solution: `from collections import deque

def hot_potato(names, num_passes):
    queue = deque(names)
    
    while len(queue) > 1:
        for _ in range(num_passes):
            queue.append(queue.popleft())
        eliminated = queue.popleft()
        print(f"  ❌ {eliminated} is out!")
    
    return queue[0]

players = ["Alice", "Bob", "Charlie", "David", "Eve"]
winner = hot_potato(players, 3)
print(f"🏆 Winner: {winner}")`,
        expectedOutput: "  ❌ David is out!\n  ❌ Charlie is out!\n  ❌ Eve is out!\n  ❌ Bob is out!\n🏆 Winner: Alice",
      },
    },
    {
      type: "quiz",
      content: "🎓 Queue Knowledge Check!",
      quiz: [
        {
          question: "What does FIFO stand for?",
          options: ["First In, First Out", "Fast In, Fast Out", "File In, File Out", "Find It, Fix One"],
          correctIndex: 0,
          explanation: "FIFO = First In, First Out! Like a real line — the first person to arrive is served first. 🎢",
        },
        {
          question: "Why use collections.deque instead of a regular list for a queue?",
          options: ["It looks cooler", "deque.popleft() is O(1), list.pop(0) is O(n)", "Lists can't be queues", "deque uses less memory"],
          correctIndex: 1,
          explanation: "list.pop(0) shifts ALL elements — O(n)! deque.popleft() is O(1) — instant! Speed matters! ⚡",
        },
        {
          question: "Stack is LIFO, Queue is FIFO. If you enqueue A, B, C, what does dequeue return first?",
          options: ["C", "B", "A", "None"],
          correctIndex: 2,
          explanation: "FIFO = First In, First Out. A was first in, so A comes out first! Unlike a stack which would give C. 🔄",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-2-2: Double-Ended Magic
// ═══════════════════════════════════════════════════════════════

const ds_2_2: Lesson = {
  id: "ds-2-2",
  moduleId: "ds-2",
  title: "Double-Ended Magic",
  subtitle: "Deques & priority queues · 双端魔法：双端队列和优先队列",
  icon: "🔮",
  xp: 50,
  duration: "22 min",
  order: 6,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🔮",
      content: `## 🐍 Py Says: Double-Ended & Priority Magic! 🔮

What if a queue could work from **BOTH ends**? That's a **Deque** (Double-Ended Queue)!

And what if the most **IMPORTANT** person always goes first, regardless of arrival time? That's a **Priority Queue**!

🏥 **Emergency Room example:**
- Regular patient arrives → joins back of line
- CRITICAL patient arrives → goes to FRONT immediately!

Real-world priority queues:
- 🏥 Hospital triage (most critical first)
- ✈️ Airline boarding (first class, then economy)
- 💻 OS task scheduling (high-priority tasks first)
- 🎮 Game AI (evaluate best move first)

🤖 Botty: "I use a priority queue to decide which response to generate first — the most relevant one wins!"

🔧 Chip: "My interrupt handler is a priority queue — hardware emergencies get processed before background tasks!"`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: Deque & Priority Queue",
      concept: {
        title: "🧰 Deque & Priority Queue",
        titleZh: "双端队列与优先队列",
        syntaxCards: [
          {
            symbol: "deque.appendleft(x)",
            name: "Add to front",
            nameZh: "添加到队首",
            emoji: "⬅️",
            description: "Add an item to the FRONT of the deque. Like VIP cutting to the front of the line!",
            example: 'from collections import deque\nd = deque([1,2,3])\nd.appendleft(0)  # [0,1,2,3]',
          },
          {
            symbol: "deque.pop()",
            name: "Remove from back",
            nameZh: "从队尾移除",
            emoji: "➡️",
            description: "Remove from the BACK. Regular pop() works on the right side.",
            example: 'd.pop()  # removes and returns 3',
          },
          {
            symbol: "heapq",
            name: "Priority Queue (heap)",
            nameZh: "优先队列（堆）",
            emoji: "🏥",
            description: "A queue where the SMALLEST (highest priority) item always comes out first. Uses a binary heap internally.",
            example: 'import heapq\nheapq.heappush(h, 5)\nheapq.heappop(h)  # smallest',
          },
          {
            symbol: "(priority, data)",
            name: "Priority Tuple",
            nameZh: "优先级元组",
            emoji: "🎫",
            description: "Store items as (priority_number, data). Lower number = higher priority. Like hospital triage levels.",
            example: 'heapq.heappush(h, (1, "Critical"))\nheapq.heappush(h, (3, "Low"))',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'import heapq', explanation: "Import the heap module for priority queues", explanationZh: "导入堆模块用于优先队列" },
            { code: 'pq = []', explanation: "Create empty priority queue (it's just a list!)", explanationZh: "创建空优先队列（其实就是列表！）" },
            { code: 'heapq.heappush(pq, (1, "Emergency"))', explanation: "Add with priority 1 (highest)", explanationZh: "以优先级1（最高）添加" },
            { code: 'heapq.heappush(pq, (3, "Routine"))', explanation: "Add with priority 3 (lower)", explanationZh: "以优先级3（较低）添加" },
            { code: 'item = heapq.heappop(pq)', explanation: "Pop → (1, 'Emergency') — lowest number first!", explanationZh: "弹出 → (1, 'Emergency') — 数字最小的先出！" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🏥",
      content: `## 🏥 Emergency Room Triage System!`,
      code: `import heapq

# 🏥 ER Priority Queue
# Priority: 1=Critical 🔴, 2=Serious 🟠, 3=Moderate 🟡, 4=Minor 🟢

er_queue = []

patients = [
    (3, "🟡 Alex - Broken finger"),
    (1, "🔴 Sam - Heart attack"),
    (4, "🟢 Kim - Common cold"),
    (2, "🟠 Pat - Deep cut"),
    (1, "🔴 Lee - Stroke"),
]

print("🏥 Patients arriving:")
for priority, patient in patients:
    heapq.heappush(er_queue, (priority, patient))
    print(f"  📋 Checked in: {patient}")

print("\\n👨‍⚕️ Treatment order (most critical first):")
order = 1
while er_queue:
    priority, patient = heapq.heappop(er_queue)
    print(f"  {order}. {patient} [Priority {priority}]")
    order += 1

print("\\n✅ All patients treated!")`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Deque Palindrome Checker!

Use a deque to check if a word reads the same forwards and backwards.`,
      exercise: {
        prompt: 'Check if "racecar" is a palindrome using a deque. Compare front and back characters.',
        promptZh: '用双端队列检查 "racecar" 是否是回文。比较首尾字符。',
        starterCode: `from collections import deque

word = "racecar"
d = deque(word)
is_palindrome = True

# TODO: While deque has more than 1 element,
# compare and remove front and back characters
while len(d) > 1:
    pass

print(is_palindrome)`,
        expectedOutput: "True",
        hint: "Use d.popleft() and d.pop() to get front and back chars. If they don't match, set is_palindrome = False.",
        hintZh: "用 d.popleft() 和 d.pop() 获取首尾字符。如果不匹配，设 is_palindrome = False。",
        solution: `from collections import deque

word = "racecar"
d = deque(word)
is_palindrome = True

while len(d) > 1:
    front = d.popleft()
    back = d.pop()
    if front != back:
        is_palindrome = False
        break

print(is_palindrome)`,
      },
    },
    {
      type: "code",
      emoji: "✈️",
      content: `## ✈️ Airline Boarding Priority Queue!`,
      code: `import heapq

# ✈️ Boarding groups with priority
boarding_queue = []

passengers = [
    (4, "🪑 Economy - Seat 32A"),
    (1, "👑 First Class - Seat 1A"),
    (3, "💺 Economy Plus - Seat 15C"),
    (2, "💎 Business - Seat 5B"),
    (4, "🪑 Economy - Seat 28F"),
    (1, "👑 First Class - Seat 2D"),
]

for priority, passenger in passengers:
    heapq.heappush(boarding_queue, (priority, passenger))

print("✈️ BOARDING ANNOUNCEMENT:")
print("=" * 40)
group = 0
while boarding_queue:
    priority, passenger = heapq.heappop(boarding_queue)
    if priority != group:
        group = priority
        labels = {1: "👑 FIRST CLASS", 2: "💎 BUSINESS", 3: "💺 ECONOMY PLUS", 4: "🪑 ECONOMY"}
        print(f"\\n🎤 Now boarding: {labels[group]}")
    print(f"  🎫 {passenger}")`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "📋 Task Scheduler · 任务调度器",
        description: "Build a task scheduler using a priority queue. Add tasks with priorities, then execute them in priority order. Track the total time.\n用优先队列构建任务调度器。添加带优先级的任务，按优先级顺序执行。追踪总时间。",
        starterCode: `import heapq

tasks = []

# Add tasks: (priority, name, duration_minutes)
task_list = [
    (2, "Write report", 30),
    (1, "Fix critical bug", 15),
    (3, "Check email", 10),
    (1, "Server down!", 20),
    (2, "Code review", 25),
]

# TODO: Push all tasks to priority queue
# TODO: Process tasks in priority order
# TODO: Print each task and running total time
`,
        hint: "heappush with (priority, name, duration). Then heappop in a loop, accumulating time.\nheappush用(priority, name, duration)。然后循环heappop，累加时间。",
        solution: `import heapq

tasks = []

task_list = [
    (2, "Write report", 30),
    (1, "Fix critical bug", 15),
    (3, "Check email", 10),
    (1, "Server down!", 20),
    (2, "Code review", 25),
]

for priority, name, duration in task_list:
    heapq.heappush(tasks, (priority, name, duration))

total_time = 0
print("📋 Executing tasks:")
while tasks:
    priority, name, duration = heapq.heappop(tasks)
    total_time += duration
    print(f"  [P{priority}] {name} ({duration}min) — Total: {total_time}min")

print(f"\\n✅ All done in {total_time} minutes!")`,
        expectedOutput: "📋 Executing tasks:\n  [P1] Fix critical bug (15min) — Total: 15min\n  [P1] Server down! (20min) — Total: 35min\n  [P2] Code review (25min) — Total: 60min\n  [P2] Write report (30min) — Total: 90min\n  [P3] Check email (10min) — Total: 100min\n\n✅ All done in 100 minutes!",
      },
    },
    {
      type: "quiz",
      content: "🎓 Priority Queue Knowledge Check!",
      quiz: [
        {
          question: "What is a deque?",
          options: ["A bug in Python", "A double-ended queue", "A type of stack", "A sorting algorithm"],
          correctIndex: 1,
          explanation: "Deque = Double-Ended Queue! You can add/remove from BOTH ends efficiently. 🔮",
        },
        {
          question: "In a min-heap priority queue, which item comes out first?",
          options: ["The largest number", "The smallest number", "The first added", "Random"],
          correctIndex: 1,
          explanation: "Min-heap = smallest number has highest priority and comes out first! Use lower numbers for more urgent tasks. 🏥",
        },
        {
          question: "When should you use a priority queue instead of a regular queue?",
          options: ["When order doesn't matter", "When some items are more important than others", "When you need LIFO order", "When you have a small dataset"],
          correctIndex: 1,
          explanation: "Priority queues are for when some items must be processed before others, regardless of arrival time! ✈️",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-2-3: The Family Tree
// ═══════════════════════════════════════════════════════════════

const ds_2_3: Lesson = {
  id: "ds-2-3",
  moduleId: "ds-2",
  title: "The Family Tree",
  subtitle: "Binary trees & traversals · 家族树：二叉树和遍历",
  icon: "🌳",
  xp: 55,
  duration: "25 min",
  order: 7,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🌳",
      content: `## 🐍 Py Says: Let's Grow a Tree! 🌳

You know family trees, right? Grandma at the top, her kids below, their kids below them...

A **Binary Tree** is like that, but each person (node) can have at most **2 children** — a **left** child and a **right** child!

\`\`\`
        🧓 Root (Grandma)
       /          \\
    👨 Left      👩 Right
   /    \\        /    \\
  👦    👧     👶    🧒
\`\`\`

**Tree vocab:**
- 🧓 **Root** — the top node (grandma!)
- 🍃 **Leaf** — a node with NO children (the youngest generation)
- 📏 **Depth** — how many levels from root
- 👨‍👩‍👧‍👦 **Subtree** — a node and all its descendants

🤖 Botty: "Your file system is a tree! Folders contain subfolders contain files!"

🔧 Chip: "Game AI uses trees to explore every possible move — it's called a game tree!"`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: Trees & Traversals",
      concept: {
        title: "🧰 Binary Trees & Traversals",
        titleZh: "二叉树与遍历",
        syntaxCards: [
          {
            symbol: "TreeNode",
            name: "Tree Node",
            nameZh: "树节点",
            emoji: "🌿",
            description: "Each node has DATA, a LEFT child, and a RIGHT child. Like a person in a family tree with up to 2 kids.",
            example: 'class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None',
          },
          {
            symbol: "inorder",
            name: "Inorder: Left → Root → Right",
            nameZh: "中序：左→根→右",
            emoji: "↔️",
            description: "Visit left subtree, then root, then right. For a BST, this gives sorted order!",
            example: 'def inorder(node):\n    if node:\n        inorder(node.left)\n        print(node.val)\n        inorder(node.right)',
          },
          {
            symbol: "preorder",
            name: "Preorder: Root → Left → Right",
            nameZh: "前序：根→左→右",
            emoji: "⬇️",
            description: "Visit root FIRST, then left subtree, then right. Good for copying a tree.",
            example: 'def preorder(node):\n    if node:\n        print(node.val)\n        preorder(node.left)\n        preorder(node.right)',
          },
          {
            symbol: "postorder",
            name: "Postorder: Left → Right → Root",
            nameZh: "后序：左→右→根",
            emoji: "⬆️",
            description: "Visit children first, root LAST. Good for deleting a tree (delete children before parent).",
            example: 'def postorder(node):\n    if node:\n        postorder(node.left)\n        postorder(node.right)\n        print(node.val)',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'class TreeNode:', explanation: "Blueprint for a tree node", explanationZh: "树节点的蓝图" },
            { code: '    def __init__(self, val):', explanation: "Constructor takes a value", explanationZh: "构造函数接收一个值" },
            { code: '        self.val = val', explanation: "The data stored in this node", explanationZh: "存储在此节点中的数据" },
            { code: '        self.left = None', explanation: "Left child (initially none)", explanationZh: "左子节点（初始为空）" },
            { code: '        self.right = None', explanation: "Right child (initially none)", explanationZh: "右子节点（初始为空）" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🌳",
      content: `## 🌳 Build and Traverse a Family Tree!`,
      code: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# 🌳 Build the family tree
#         👵 Grandma
#        /         \\
#     👨 Dad     👩 Aunt
#    /     \\       \\
#  👦 You  👧 Sis  👶 Cousin

root = TreeNode("👵 Grandma")
root.left = TreeNode("👨 Dad")
root.right = TreeNode("👩 Aunt")
root.left.left = TreeNode("👦 You")
root.left.right = TreeNode("👧 Sis")
root.right.right = TreeNode("👶 Cousin")

# Three ways to visit everyone!
def inorder(node, result=None):
    if result is None: result = []
    if node:
        inorder(node.left, result)
        result.append(node.val)
        inorder(node.right, result)
    return result

def preorder(node, result=None):
    if result is None: result = []
    if node:
        result.append(node.val)
        preorder(node.left, result)
        preorder(node.right, result)
    return result

def postorder(node, result=None):
    if result is None: result = []
    if node:
        postorder(node.left, result)
        postorder(node.right, result)
        result.append(node.val)
    return result

print("↔️ Inorder (Left→Root→Right):")
print("  " + " → ".join(inorder(root)))

print("\\n⬇️ Preorder (Root→Left→Right):")
print("  " + " → ".join(preorder(root)))

print("\\n⬆️ Postorder (Left→Right→Root):")
print("  " + " → ".join(postorder(root)))`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Count the Tree!

Write a function to count all nodes in a binary tree.`,
      exercise: {
        prompt: "Write a function count_nodes(node) that returns the total number of nodes in a tree. Test with a tree that has 5 nodes.",
        promptZh: "写一个函数 count_nodes(node)，返回树中的节点总数。用5个节点的树测试。",
        starterCode: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def count_nodes(node):
    # TODO: Return 0 if node is None
    # Otherwise return 1 + count of left + count of right
    pass

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(count_nodes(root))`,
        expectedOutput: "5",
        hint: "Base case: if node is None, return 0. Recursive case: return 1 + count_nodes(node.left) + count_nodes(node.right).",
        hintZh: "基本情况：如果node是None，返回0。递归情况：返回 1 + count_nodes(node.left) + count_nodes(node.right)。",
        solution: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def count_nodes(node):
    if node is None:
        return 0
    return 1 + count_nodes(node.left) + count_nodes(node.right)

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print(count_nodes(root))`,
      },
    },
    {
      type: "code",
      emoji: "📂",
      content: `## 📂 File System as a Tree!`,
      code: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# 📂 File explorer tree
#         📁 root
#        /         \\
#    📁 docs     📁 photos
#    /    \\         \\
# 📄 hw  📄 notes  📸 vacation

root = TreeNode("📁 root")
root.left = TreeNode("📁 docs")
root.right = TreeNode("📁 photos")
root.left.left = TreeNode("📄 homework.txt")
root.left.right = TreeNode("📄 notes.txt")
root.right.right = TreeNode("📸 vacation.jpg")

# Print tree with indentation
def print_tree(node, depth=0):
    if node:
        print("  " * depth + node.val)
        print_tree(node.left, depth + 1)
        print_tree(node.right, depth + 1)

print("📂 File Explorer:")
print_tree(root)

# Find tree height
def height(node):
    if not node:
        return 0
    return 1 + max(height(node.left), height(node.right))

print(f"\\n📏 Tree height: {height(root)} levels")`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔍 Find Max Value in Tree · 找树中最大值",
        description: "Write a function that finds the maximum value in a binary tree of numbers.\n写一个函数，找出二叉树中的最大数值。",
        starterCode: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def find_max(node):
    # TODO: Find the maximum value in the tree
    pass

root = TreeNode(10)
root.left = TreeNode(25)
root.right = TreeNode(15)
root.left.left = TreeNode(8)
root.left.right = TreeNode(30)

print(find_max(root))`,
        hint: "Base case: if node is None, return float('-inf'). Return max of node.val, find_max(left), find_max(right).\n基本情况：如果node是None，返回负无穷。返回 node.val、find_max(left)、find_max(right) 中的最大值。",
        solution: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def find_max(node):
    if node is None:
        return float('-inf')
    return max(node.val, find_max(node.left), find_max(node.right))

root = TreeNode(10)
root.left = TreeNode(25)
root.right = TreeNode(15)
root.left.left = TreeNode(8)
root.left.right = TreeNode(30)

print(find_max(root))`,
        expectedOutput: "30",
      },
    },
    {
      type: "quiz",
      content: "🎓 Tree Knowledge Check!",
      quiz: [
        {
          question: "In a binary tree, what is the maximum number of children per node?",
          options: ["1", "2", "3", "Unlimited"],
          correctIndex: 1,
          explanation: "Binary = 2! Each node has at most a LEFT and RIGHT child. 🌳",
        },
        {
          question: "Which traversal visits: Left subtree → Root → Right subtree?",
          options: ["Preorder", "Inorder", "Postorder", "Level-order"],
          correctIndex: 1,
          explanation: "Inorder = Left → Root → Right. Think: the root is IN the middle! ↔️",
        },
        {
          question: "What is a 'leaf' node?",
          options: ["The root node", "A node with no children", "A node with 2 children", "A deleted node"],
          correctIndex: 1,
          explanation: "A leaf is at the tip of a branch — no children below it! Like actual leaves on a tree. 🍃",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-2-4: Module 2 Boss Battle
// ═══════════════════════════════════════════════════════════════

const ds_2_4: Lesson = {
  id: "ds-2-4",
  moduleId: "ds-2",
  title: "Module 2 Boss Battle",
  subtitle: "Queues + trees combined · 第二关大Boss：队列+树综合挑战",
  icon: "🐲",
  xp: 65,
  duration: "25 min",
  order: 8,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🐲",
      content: `## 🐍 Py Says: Module 2 Boss Time! 🐲

You've conquered:
- ✅ **Queues** — FIFO, enqueue/dequeue
- ✅ **Deques & Priority Queues** — double-ended, heap-based
- ✅ **Binary Trees** — nodes, traversals, recursion

Now face the **Module 2 Dragon** with 3 epic rounds! 🐲

1. 🎪 **Round 1**: Level-Order Traversal — BFS on a tree using a queue!
2. 🏥 **Round 2**: Merge priority queues
3. 🌳 **Round 3**: Build a Binary Search Tree

🤖 Botty: "This is where data structures connect — queues HELP you traverse trees!"

Let's go! 💪`,
    },
    {
      type: "code",
      emoji: "🎪",
      content: `## 🎪 Round 1: Level-Order Traversal (BFS with Queue!)

Visit a tree level by level using a queue:`,
      code: `from collections import deque

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def level_order(root):
    """Visit tree level by level using a queue!"""
    if not root:
        return
    queue = deque([root])
    level = 0
    while queue:
        level_size = len(queue)
        level_nodes = []
        for _ in range(level_size):
            node = queue.popleft()
            level_nodes.append(str(node.val))
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        print(f"  Level {level}: {' '.join(level_nodes)}")
        level += 1

# Build tree:
#       1
#      / \\
#     2   3
#    / \\   \\
#   4   5   6
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.right = TreeNode(6)

print("🌳 Level-Order Traversal (BFS):")
level_order(root)`,
    },
    {
      type: "challenge",
      content: "🏆 Round 2: Binary Search Tree · 二叉搜索树",
      challenge: {
        title: "🌲 Build a BST · 构建二叉搜索树",
        description: "Implement a Binary Search Tree with insert and search. In a BST: left child < parent < right child.\n实现一个二叉搜索树，支持插入和搜索。在BST中：左子 < 父节点 < 右子。",
        starterCode: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def insert(root, val):
    # TODO: Insert val into BST
    # If root is None, create new node
    # If val < root.val, go left
    # If val > root.val, go right
    pass

def search(root, val):
    # TODO: Return True if val exists in BST
    pass

def inorder(node, result=None):
    if result is None: result = []
    if node:
        inorder(node.left, result)
        result.append(node.val)
        inorder(node.right, result)
    return result

# Build BST by inserting values
root = None
for val in [5, 3, 7, 1, 4, 6, 8]:
    root = insert(root, val)

print("Inorder:", inorder(root))
print("Search 4:", search(root, 4))
print("Search 9:", search(root, 9))`,
        hint: "insert: if root is None, return TreeNode(val). Else recurse left or right. search: if None return False, if found return True, else recurse.\ninsert：如果root为None，返回TreeNode(val)。否则递归左或右。search：如果None返回False，找到返回True，否则递归。",
        solution: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def insert(root, val):
    if root is None:
        return TreeNode(val)
    if val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    return root

def search(root, val):
    if root is None:
        return False
    if root.val == val:
        return True
    if val < root.val:
        return search(root.left, val)
    return search(root.right, val)

def inorder(node, result=None):
    if result is None: result = []
    if node:
        inorder(node.left, result)
        result.append(node.val)
        inorder(node.right, result)
    return result

root = None
for val in [5, 3, 7, 1, 4, 6, 8]:
    root = insert(root, val)

print("Inorder:", inorder(root))
print("Search 4:", search(root, 4))
print("Search 9:", search(root, 9))`,
        expectedOutput: "Inorder: [1, 3, 4, 5, 6, 7, 8]\nSearch 4: True\nSearch 9: False",
      },
    },
    {
      type: "challenge",
      content: "🏆 Round 3: Combined Challenge · 综合挑战",
      challenge: {
        title: "🏥 Hospital + Tree Combined · 医院+树综合",
        description: "Build a hospital system: use a priority queue for patients AND a tree to store patient records by ID.\n构建医院系统：用优先队列管理患者，用树存储按ID排列的患者记录。",
        starterCode: `import heapq

class TreeNode:
    def __init__(self, patient_id, name):
        self.patient_id = patient_id
        self.name = name
        self.left = None
        self.right = None

# TODO: Insert patient into BST by patient_id
def insert_record(root, patient_id, name):
    pass

# TODO: Search BST for patient by id
def find_patient(root, patient_id):
    pass

# Priority queue for treatment order
treatment_queue = []
patients = [
    (3, 101, "Alice"),
    (1, 205, "Bob"),
    (2, 150, "Charlie"),
    (1, 99, "Diana"),
]

records_root = None
for priority, pid, name in patients:
    heapq.heappush(treatment_queue, (priority, pid, name))
    records_root = insert_record(records_root, pid, name)

# Process in priority order
print("🏥 Treatment Order:")
while treatment_queue:
    p, pid, name = heapq.heappop(treatment_queue)
    print(f"  [P{p}] {name} (ID: {pid})")

# Search records
print(f"\\n🔍 Find ID 150: {find_patient(records_root, 150)}")
print(f"🔍 Find ID 999: {find_patient(records_root, 999)}")`,
        hint: "insert_record is like BST insert but compare patient_id. find_patient returns name if found, 'Not found' otherwise.\ninsert_record类似BST插入但比较patient_id。find_patient找到返回name，否则返回'Not found'。",
        solution: `import heapq

class TreeNode:
    def __init__(self, patient_id, name):
        self.patient_id = patient_id
        self.name = name
        self.left = None
        self.right = None

def insert_record(root, patient_id, name):
    if root is None:
        return TreeNode(patient_id, name)
    if patient_id < root.patient_id:
        root.left = insert_record(root.left, patient_id, name)
    else:
        root.right = insert_record(root.right, patient_id, name)
    return root

def find_patient(root, patient_id):
    if root is None:
        return "Not found"
    if root.patient_id == patient_id:
        return root.name
    if patient_id < root.patient_id:
        return find_patient(root.left, patient_id)
    return find_patient(root.right, patient_id)

treatment_queue = []
patients = [
    (3, 101, "Alice"),
    (1, 205, "Bob"),
    (2, 150, "Charlie"),
    (1, 99, "Diana"),
]

records_root = None
for priority, pid, name in patients:
    heapq.heappush(treatment_queue, (priority, pid, name))
    records_root = insert_record(records_root, pid, name)

print("🏥 Treatment Order:")
while treatment_queue:
    p, pid, name = heapq.heappop(treatment_queue)
    print(f"  [P{p}] {name} (ID: {pid})")

print(f"\\n🔍 Find ID 150: {find_patient(records_root, 150)}")
print(f"🔍 Find ID 999: {find_patient(records_root, 999)}")`,
        expectedOutput: "🏥 Treatment Order:\n  [P1] Diana (ID: 99)\n  [P1] Bob (ID: 205)\n  [P2] Charlie (ID: 150)\n  [P3] Alice (ID: 101)\n\n🔍 Find ID 150: Charlie\n🔍 Find ID 999: Not found",
      },
    },
    {
      type: "quiz",
      content: "🎓 Module 2 Boss Quiz!",
      quiz: [
        {
          question: "Level-order traversal of a tree uses which data structure?",
          options: ["Stack", "Queue", "Array", "HashMap"],
          correctIndex: 1,
          explanation: "Level-order (BFS) uses a queue! Process current level, add children to queue for next level. 🎪",
        },
        {
          question: "In a Binary Search Tree, all nodes in the LEFT subtree are:",
          options: ["Greater than root", "Less than root", "Equal to root", "Random"],
          correctIndex: 1,
          explanation: "BST rule: Left < Root < Right. This makes searching super fast — O(log n)! 🌲",
        },
        {
          question: "What is the inorder traversal of a BST?",
          options: ["Random order", "Sorted order", "Reverse order", "Level order"],
          correctIndex: 1,
          explanation: "Inorder on a BST gives sorted order! Left → Root → Right naturally sorts since Left < Root < Right. 📊",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-3-1: The Treasure Map (HashMap)
// ═══════════════════════════════════════════════════════════════

const ds_3_1: Lesson = {
  id: "ds-3-1",
  moduleId: "ds-3",
  title: "The Treasure Map",
  subtitle: "HashMaps & dictionaries · 藏宝图：哈希表和字典",
  icon: "🗺️",
  xp: 50,
  duration: "22 min",
  order: 9,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🗺️",
      content: `## 🐍 Py Says: X Marks the Spot! 🗺️

Imagine a **treasure map** where every landmark has a treasure:
- "Old Oak Tree" → 💰 50 gold coins
- "Pirate Cave" → 💎 Diamond necklace
- "Skull Rock" → 🗡️ Magic sword

That's a **HashMap** (Python calls it a **dictionary / dict**)!

Instead of numbered slots (like arrays), you use **keys** to find **values**:
- **Key** = the landmark name (unique identifier)
- **Value** = the treasure (any data)

The magic: looking up a key is **instant** — O(1)! No matter if you have 10 items or 10 million!

🤖 Botty: "Every database in the world uses hash tables. Google's search index? Giant hash map!"

🔧 Chip: "The secret is a hash function — it turns any key into a memory address, like a treasure map compass!"`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: HashMap / Dictionary",
      concept: {
        title: "🧰 HashMap / Dictionary",
        titleZh: "哈希表 / 字典",
        syntaxCards: [
          {
            symbol: "{key: value}",
            name: "Dictionary literal",
            nameZh: "字典字面量",
            emoji: "📖",
            description: "Curly braces create a dictionary. Each entry is key: value. Keys must be unique!",
            example: 'ages = {"Alice": 12, "Bob": 14}',
          },
          {
            symbol: "dict[key]",
            name: "Access by key",
            nameZh: "通过键访问",
            emoji: "🔑",
            description: "Use a key to instantly get its value. Like using a landmark name to find treasure!",
            example: 'ages["Alice"]  # 12',
          },
          {
            symbol: "dict[key] = val",
            name: "Set / Update",
            nameZh: "设置/更新",
            emoji: "✏️",
            description: "Add a new key-value pair or update an existing one.",
            example: 'ages["Charlie"] = 15  # add new\nages["Alice"] = 13  # update',
          },
          {
            symbol: "key in dict",
            name: "Check if key exists",
            nameZh: "检查键是否存在",
            emoji: "🔍",
            description: "Returns True/False. Instant O(1) check! Way faster than searching a list.",
            example: '"Alice" in ages  # True\n"Zara" in ages  # False',
          },
          {
            symbol: "dict.get(key, default)",
            name: "Safe access",
            nameZh: "安全访问",
            emoji: "🛡️",
            description: "Returns default value if key doesn't exist (instead of crashing).",
            example: 'ages.get("Zara", 0)  # 0 (not found)',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'treasure = {}', explanation: "Create an empty dictionary", explanationZh: "创建空字典" },
            { code: 'treasure["cave"] = "💎 Diamond"', explanation: "Add key 'cave' with value '💎 Diamond'", explanationZh: "添加键'cave'，值为'💎 Diamond'" },
            { code: 'print(treasure["cave"])', explanation: "Access → '💎 Diamond' (instant O(1)!)", explanationZh: "访问 → '💎 Diamond'（瞬间 O(1)！）" },
            { code: 'print("cave" in treasure)', explanation: "Check key exists → True", explanationZh: "检查键是否存在 → True" },
            { code: 'print(treasure.get("lake", "Nothing"))', explanation: "Safe access → 'Nothing' (key missing)", explanationZh: "安全访问 → 'Nothing'（键不存在）" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🗺️",
      content: `## 🗺️ Treasure Map Explorer!`,
      code: `# 🗺️ The Pirate's Treasure Map!

treasure_map = {
    "🌳 Old Oak": "💰 50 gold coins",
    "🏴‍☠️ Pirate Cave": "💎 Diamond necklace",
    "💀 Skull Rock": "🗡️ Magic sword",
    "🌊 Mermaid Lagoon": "🧜‍♀️ Pearl of wisdom",
    "🌋 Volcano Peak": "🔥 Dragon egg",
}

# Explore the map!
print("🗺️ Treasure Map Locations:")
for location, treasure in treasure_map.items():
    print(f"  {location} → {treasure}")

# Find specific treasure
print(f"\\n🔍 At Skull Rock: {treasure_map['💀 Skull Rock']}")

# Safe search
result = treasure_map.get("🏖️ Secret Beach", "❌ No treasure here!")
print(f"🔍 At Secret Beach: {result}")

# Add a new location!
treasure_map["🏖️ Secret Beach"] = "🦜 Talking parrot"
print(f"\\n📍 New discovery! Secret Beach: {treasure_map['🏖️ Secret Beach']}")
print(f"📊 Total locations: {len(treasure_map)}")`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Phone Book!

Build a phone book dictionary!`,
      exercise: {
        prompt: 'Create a phone book dict with 3 contacts, then look up "Alice" and print her number.',
        promptZh: '创建一个包含3个联系人的电话簿字典，然后查找"Alice"并打印她的号码。',
        starterCode: `# Create phone book
phone_book = {
    "Alice": "555-0001",
    "Bob": "555-0002",
    "Charlie": "555-0003",
}

# Look up Alice
`,
        expectedOutput: "555-0001",
        hint: 'Use phone_book["Alice"] to look up her number!',
        hintZh: '用 phone_book["Alice"] 查找她的号码！',
        solution: `phone_book = {
    "Alice": "555-0001",
    "Bob": "555-0002",
    "Charlie": "555-0003",
}

print(phone_book["Alice"])`,
      },
    },
    {
      type: "code",
      emoji: "📊",
      content: `## 📊 Word Counter — The Classic HashMap Problem!`,
      code: `# 📊 Count word frequency — a CLASSIC interview question!

text = "the cat sat on the mat the cat likes the mat"
words = text.split()

# Count with a dictionary
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

print("📊 Word Frequency:")
for word, count in sorted(word_count.items(), key=lambda x: -x[1]):
    bar = "█" * count
    print(f"  {word:8s} {bar} ({count})")

# Most common word
most_common = max(word_count, key=word_count.get)
print(f"\\n🏆 Most common: '{most_common}' ({word_count[most_common]} times)")

# 🤖 Botty: "This is how search engines rank keywords!"
# 🔧 Chip: "Hash lookups are O(1) — word_count.get() is instant!"`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔤 Two Sum Problem · 两数之和",
        description: "Given a list of numbers and a target, find two numbers that add up to the target. Return their indices. Use a HashMap for O(n) solution!\n给定一个数字列表和目标值，找到两个加起来等于目标的数字，返回它们的索引。用哈希表实现O(n)解法！",
        starterCode: `def two_sum(nums, target):
    # TODO: Use a dict to store {number: index}
    # For each number, check if (target - number) is in the dict
    seen = {}
    pass

result = two_sum([2, 7, 11, 15], 9)
print(result)`,
        hint: "For each num at index i: check if (target - num) is already in 'seen'. If yes, return both indices. If no, add {num: i} to seen.\n对于索引i处的每个num：检查(target - num)是否已在'seen'中。如果是，返回两个索引。否则，将{num: i}加入seen。",
        solution: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

result = two_sum([2, 7, 11, 15], 9)
print(result)`,
        expectedOutput: "[0, 1]",
      },
    },
    {
      type: "quiz",
      content: "🎓 HashMap Knowledge Check!",
      quiz: [
        {
          question: "What is the time complexity of looking up a key in a dictionary?",
          options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
          correctIndex: 2,
          explanation: "Dictionary lookup is O(1) — constant time! The hash function computes the address instantly. 🔑⚡",
        },
        {
          question: "What happens if you try dict['missing_key']?",
          options: ["Returns None", "Returns 0", "Raises KeyError", "Returns empty string"],
          correctIndex: 2,
          explanation: "KeyError! Use dict.get('key', default) for safe access that returns a default instead. 🛡️",
        },
        {
          question: "In a dictionary, keys must be:",
          options: ["Numbers only", "Strings only", "Unique and hashable", "Anything at all"],
          correctIndex: 2,
          explanation: "Keys must be unique (no duplicates) and hashable (strings, numbers, tuples — NOT lists or dicts). 🔑",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-3-2: Social Network (Graphs)
// ═══════════════════════════════════════════════════════════════

const ds_3_2: Lesson = {
  id: "ds-3-2",
  moduleId: "ds-3",
  title: "Social Network",
  subtitle: "Graph basics — nodes & edges · 社交网络：图的基础",
  icon: "🌐",
  xp: 55,
  duration: "25 min",
  order: 10,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🌐",
      content: `## 🐍 Py Says: Let's Build a Social Network! 🌐

Think about your friend group:
- You 🧑 are friends with Alice 👩 and Bob 👦
- Alice 👩 is friends with Charlie 🧒
- Bob 👦 is friends with Charlie 🧒 and Diana 👧

This is a **Graph**! A web of connections:
- **Nodes** (vertices) = people 👤
- **Edges** = friendships / connections 🤝

Graphs model SO many things:
- 🌐 Social networks (Facebook, Instagram)
- 🗺️ Maps & roads (Google Maps)
- 🌍 The internet (web pages & links)
- 🧬 Molecules (atoms & bonds)

🤖 Botty: "I analyze a graph of billions of documents to find the best answer for you!"

🔧 Chip: "The internet itself is a graph — routers are nodes, cables are edges!"`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: Graphs",
      concept: {
        title: "🧰 Graph Basics",
        titleZh: "图基础",
        syntaxCards: [
          {
            symbol: "node / vertex",
            name: "Node (vertex)",
            nameZh: "节点（顶点）",
            emoji: "⚫",
            description: "A point in the graph. Represents an entity — a person, city, web page, etc.",
            example: '# Nodes: "Alice", "Bob", "Charlie"',
          },
          {
            symbol: "edge",
            name: "Edge (connection)",
            nameZh: "边（连接）",
            emoji: "➖",
            description: "A line connecting two nodes. Represents a relationship — friendship, road, link, etc.",
            example: '# Edge: Alice -- Bob (they are friends)',
          },
          {
            symbol: "adjacency list",
            name: "Adjacency List",
            nameZh: "邻接表",
            emoji: "📋",
            description: "A dictionary where each node maps to its list of neighbors. The most common way to store a graph in code!",
            example: 'graph = {\n  "Alice": ["Bob", "Charlie"],\n  "Bob": ["Alice"]\n}',
          },
          {
            symbol: "directed / undirected",
            name: "Directed vs Undirected",
            nameZh: "有向 vs 无向",
            emoji: "↔️",
            description: "Undirected: friendship (mutual). Directed: Twitter follow (one-way). Matters for how you add edges!",
            example: '# Undirected: add both ways\n# Directed: add one way only',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'graph = {}', explanation: "Empty graph (adjacency list)", explanationZh: "空图（邻接表）" },
            { code: 'graph["Alice"] = ["Bob", "Charlie"]', explanation: "Alice is friends with Bob and Charlie", explanationZh: "Alice 和 Bob、Charlie 是朋友" },
            { code: 'graph["Bob"] = ["Alice"]', explanation: "Bob is friends with Alice (undirected = add both ways!)", explanationZh: "Bob 和 Alice 是朋友（无向 = 双向添加！）" },
            { code: 'print(graph["Alice"])', explanation: "Alice's friends → ['Bob', 'Charlie']", explanationZh: "Alice的朋友 → ['Bob', 'Charlie']" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🌐",
      content: `## 🌐 Build a Social Network!`,
      code: `# 🌐 Social Network Graph!

class SocialNetwork:
    def __init__(self):
        self.graph = {}
    
    def add_person(self, name):
        if name not in self.graph:
            self.graph[name] = []
            print(f"  👤 {name} joined the network!")
    
    def add_friendship(self, person1, person2):
        self.add_person(person1)
        self.add_person(person2)
        if person2 not in self.graph[person1]:
            self.graph[person1].append(person2)
            self.graph[person2].append(person1)
            print(f"  🤝 {person1} ↔ {person2} are now friends!")
    
    def show_friends(self, person):
        friends = self.graph.get(person, [])
        print(f"  {person}'s friends: {friends} ({len(friends)} friends)")

# Build the network!
network = SocialNetwork()
print("🌐 Building Social Network:")
network.add_friendship("Alice", "Bob")
network.add_friendship("Alice", "Charlie")
network.add_friendship("Bob", "Charlie")
network.add_friendship("Bob", "Diana")
network.add_friendship("Charlie", "Eve")

print("\\n👥 Friend Lists:")
for person in network.graph:
    network.show_friends(person)

# Who has the most friends?
popular = max(network.graph, key=lambda p: len(network.graph[p]))
print(f"\\n🌟 Most popular: {popular} ({len(network.graph[popular])} friends)")`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Mutual Friends!`,
      exercise: {
        prompt: "Given a graph, find all mutual friends between Alice and Bob. Print each one.",
        promptZh: "给定一个图，找出Alice和Bob之间的所有共同好友。打印每一个。",
        starterCode: `graph = {
    "Alice": ["Bob", "Charlie", "Eve"],
    "Bob": ["Alice", "Charlie", "Diana"],
    "Charlie": ["Alice", "Bob"],
    "Diana": ["Bob"],
    "Eve": ["Alice"],
}

# TODO: Find mutual friends of Alice and Bob
alice_friends = set(graph["Alice"])
bob_friends = set(graph["Bob"])
# Hint: use set intersection!
`,
        expectedOutput: "Charlie",
        hint: "Use set intersection: alice_friends & bob_friends. But remove Alice and Bob themselves from the result!",
        hintZh: "用集合交集：alice_friends & bob_friends。但要从结果中移除Alice和Bob自己！",
        solution: `graph = {
    "Alice": ["Bob", "Charlie", "Eve"],
    "Bob": ["Alice", "Charlie", "Diana"],
    "Charlie": ["Alice", "Bob"],
    "Diana": ["Bob"],
    "Eve": ["Alice"],
}

alice_friends = set(graph["Alice"])
bob_friends = set(graph["Bob"])
mutual = alice_friends & bob_friends - {"Alice", "Bob"}
for friend in mutual:
    print(friend)`,
      },
    },
    {
      type: "code",
      emoji: "🗺️",
      content: `## 🗺️ Map Routing — Cities as a Graph!`,
      code: `# 🗺️ Cities connected by roads (weighted graph!)

city_map = {
    "New York": [("Boston", 215), ("Philadelphia", 97)],
    "Boston": [("New York", 215), ("Portland", 108)],
    "Philadelphia": [("New York", 97), ("Washington", 140)],
    "Washington": [("Philadelphia", 140)],
    "Portland": [("Boston", 108)],
}

print("🗺️ City Map (with distances in miles):")
for city, connections in city_map.items():
    routes = [f"{dest} ({dist}mi)" for dest, dist in connections]
    print(f"  📍 {city} → {', '.join(routes)}")

# Find all cities reachable from New York
def reachable_cities(graph, start):
    visited = set()
    stack = [start]
    while stack:
        city = stack.pop()
        if city not in visited:
            visited.add(city)
            for neighbor, _ in graph[city]:
                stack.append(neighbor)
    return visited

reachable = reachable_cities(city_map, "New York")
print(f"\\n🚗 Cities reachable from New York: {reachable}")
print(f"📊 Total: {len(reachable)} cities")`,
    },
    {
      type: "challenge",
      content: "🏆 Coding Challenge · 编程挑战",
      challenge: {
        title: "🔗 Friend Recommendation · 好友推荐",
        description: "Recommend new friends! For a given person, find friends-of-friends who they don't already know.\n推荐新朋友！对于给定的人，找到他们还不认识的朋友的朋友。",
        starterCode: `def recommend_friends(graph, person):
    # TODO: Find friends-of-friends who aren't already friends
    # Don't recommend the person themselves!
    pass

graph = {
    "Alice": ["Bob", "Charlie"],
    "Bob": ["Alice", "Charlie", "Diana"],
    "Charlie": ["Alice", "Bob", "Eve"],
    "Diana": ["Bob"],
    "Eve": ["Charlie"],
}

recs = recommend_friends(graph, "Alice")
print(f"Recommendations for Alice: {recs}")`,
        hint: "Loop through Alice's friends, then through each friend's friends. Exclude Alice herself and existing friends.\n遍历Alice的朋友，再遍历每个朋友的朋友。排除Alice自己和已有的朋友。",
        solution: `def recommend_friends(graph, person):
    friends = set(graph[person])
    recommendations = set()
    for friend in friends:
        for fof in graph[friend]:
            if fof != person and fof not in friends:
                recommendations.add(fof)
    return sorted(recommendations)

graph = {
    "Alice": ["Bob", "Charlie"],
    "Bob": ["Alice", "Charlie", "Diana"],
    "Charlie": ["Alice", "Bob", "Eve"],
    "Diana": ["Bob"],
    "Eve": ["Charlie"],
}

recs = recommend_friends(graph, "Alice")
print(f"Recommendations for Alice: {recs}")`,
        expectedOutput: "Recommendations for Alice: ['Diana', 'Eve']",
      },
    },
    {
      type: "quiz",
      content: "🎓 Graph Knowledge Check!",
      quiz: [
        {
          question: "In a graph, what is an 'edge'?",
          options: ["A node", "A connection between two nodes", "The first node", "A type of tree"],
          correctIndex: 1,
          explanation: "An edge connects two nodes — like a road between cities or a friendship between people! ➖",
        },
        {
          question: "An adjacency list stores a graph as:",
          options: ["A 2D array of True/False", "A dictionary mapping each node to its neighbors", "A single linked list", "A sorted array of edges"],
          correctIndex: 1,
          explanation: "Adjacency list = dictionary where each key is a node and value is a list of its neighbors. Most common in Python! 📋",
        },
        {
          question: "If Alice follows Bob on Twitter but Bob doesn't follow Alice, this is a:",
          options: ["Undirected graph", "Directed graph", "Weighted graph", "Binary graph"],
          correctIndex: 1,
          explanation: "Twitter follows are one-way (directed). Facebook friendships are two-way (undirected). 🐦",
        },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-3-3: Finding the Path (BFS & DFS)
// ═══════════════════════════════════════════════════════════════

const ds_3_3: Lesson = {
  id: "ds-3-3",
  moduleId: "ds-3",
  title: "Finding the Path",
  subtitle: "BFS & DFS — exploring graphs · 寻找路径：广度优先和深度优先搜索",
  icon: "🧭",
  xp: 60,
  duration: "25 min",
  order: 11,
  gradeRange: [6, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🧭",
      content: `## 🐍 Py Says: Two Ways to Explore! 🧭

You're in a maze 🏰 and need to find the exit. How do you explore?

**Strategy 1: BFS (Breadth-First Search)** 🌊
- Explore ALL neighbors first, then their neighbors, etc.
- Like ripples in water — expanding outward ring by ring!
- Uses a **QUEUE** (FIFO)
- Finds the **SHORTEST** path!

**Strategy 2: DFS (Depth-First Search)** 🔦
- Go as DEEP as possible, then backtrack!
- Like exploring a cave — go down one tunnel all the way before trying another
- Uses a **STACK** (LIFO) or recursion
- Good for "is there ANY path?"

🤖 Botty: "Google Maps uses BFS (well, Dijkstra's) to find the shortest route!"

🔧 Chip: "DFS is great for exploring all possibilities — like solving a Sudoku puzzle!"

Both are essential! Let's learn both! 🏃‍♂️`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "New Concepts: BFS & DFS",
      concept: {
        title: "🧰 BFS & DFS",
        titleZh: "广度优先搜索与深度优先搜索",
        syntaxCards: [
          {
            symbol: "BFS",
            name: "Breadth-First Search",
            nameZh: "广度优先搜索",
            emoji: "🌊",
            description: "Explore level by level, outward like ripples. Uses a QUEUE. Finds shortest path in unweighted graphs!",
            example: 'queue = deque([start])\nwhile queue:\n    node = queue.popleft()\n    for neighbor in graph[node]:\n        queue.append(neighbor)',
          },
          {
            symbol: "DFS",
            name: "Depth-First Search",
            nameZh: "深度优先搜索",
            emoji: "🔦",
            description: "Go as deep as possible, then backtrack. Uses a STACK or recursion. Good for finding ANY path.",
            example: 'stack = [start]\nwhile stack:\n    node = stack.pop()\n    for neighbor in graph[node]:\n        stack.append(neighbor)',
          },
          {
            symbol: "visited",
            name: "Visited Set",
            nameZh: "已访问集合",
            emoji: "✅",
            description: "Track which nodes you've already visited to avoid infinite loops! Essential for both BFS and DFS.",
            example: 'visited = set()\nif node not in visited:\n    visited.add(node)',
          },
          {
            symbol: "path",
            name: "Path Tracking",
            nameZh: "路径追踪",
            emoji: "🗺️",
            description: "Remember how you got to each node by storing the parent. Then backtrack from goal to start.",
            example: 'parent = {start: None}\n# After BFS:\npath = []\nnode = goal\nwhile node:\n    path.append(node)\n    node = parent[node]',
          },
        ],
        codeAnatomy: {
          lines: [
            { code: 'from collections import deque', explanation: "Import deque for BFS queue", explanationZh: "导入deque用于BFS队列" },
            { code: 'queue = deque([start])', explanation: "Start BFS from the starting node", explanationZh: "从起始节点开始BFS" },
            { code: 'visited = {start}', explanation: "Mark start as visited", explanationZh: "标记起点为已访问" },
            { code: 'node = queue.popleft()', explanation: "Process the FRONT of queue (FIFO)", explanationZh: "处理队列前端（FIFO）" },
            { code: 'queue.append(neighbor)', explanation: "Add unvisited neighbors to queue", explanationZh: "将未访问的邻居加入队列" },
          ],
        },
      },
    },
    {
      type: "code",
      emoji: "🌊",
      content: `## 🌊 BFS — Shortest Path Finder!`,
      code: `from collections import deque

# 🌊 BFS: Find shortest path in a maze!
#    A --- B --- E
#    |     |     |
#    C --- D --- F (goal!)

graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "D"],
    "D": ["B", "C", "F"],
    "E": ["B", "F"],
    "F": ["D", "E"],  # Goal!
}

def bfs_shortest_path(graph, start, goal):
    queue = deque([(start, [start])])
    visited = {start}
    
    while queue:
        node, path = queue.popleft()
        if node == goal:
            return path
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    
    return None  # No path found

path = bfs_shortest_path(graph, "A", "F")
print(f"🌊 BFS Shortest Path: {' → '.join(path)}")
print(f"📏 Steps: {len(path) - 1}")`,
    },
    {
      type: "code",
      emoji: "🔦",
      content: `## 🔦 DFS — Deep Exploration!`,
      code: `# 🔦 DFS: Explore all paths!

graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "D"],
    "D": ["B", "C", "F"],
    "E": ["B", "F"],
    "F": ["D", "E"],
}

def dfs_all_paths(graph, start, goal, path=None, all_paths=None):
    if path is None: path = [start]
    if all_paths is None: all_paths = []
    
    if start == goal:
        all_paths.append(list(path))
        return all_paths
    
    for neighbor in graph[start]:
        if neighbor not in path:  # Avoid cycles
            path.append(neighbor)
            dfs_all_paths(graph, neighbor, goal, path, all_paths)
            path.pop()  # Backtrack!
    
    return all_paths

print("🔦 DFS: ALL paths from A to F:")
all_paths = dfs_all_paths(graph, "A", "F")
for i, p in enumerate(all_paths):
    print(f"  Path {i+1}: {' → '.join(p)} (length: {len(p)-1})")

print(f"\\n📊 Total paths found: {len(all_paths)}")
shortest = min(all_paths, key=len)
print(f"🏆 Shortest: {' → '.join(shortest)}")`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Maze Solver!`,
      exercise: {
        prompt: "Use BFS to find the shortest path from 'Start' to 'End' in the given graph. Print the path length.",
        promptZh: "用BFS找到从'Start'到'End'的最短路径。打印路径长度。",
        starterCode: `from collections import deque

maze = {
    "Start": ["A", "B"],
    "A": ["Start", "C"],
    "B": ["Start", "C", "D"],
    "C": ["A", "B", "End"],
    "D": ["B", "End"],
    "End": ["C", "D"],
}

# TODO: BFS from "Start" to "End"
# Print the path length (number of edges)
`,
        expectedOutput: "2",
        hint: "Use a queue with deque(). Each item should store (node, distance).\nStart with deque([('Start', 0)]) and a visited set.\nWhen you reach 'End', print the distance!",
        hintZh: "使用deque()创建队列。每个元素存储 (节点, 距离)。\n从 deque([('Start', 0)]) 和一个visited集合开始。\n当到达'End'时，打印距离！",
        solution: `from collections import deque

maze = {
    "Start": ["A", "B"],
    "A": ["Start", "C"],
    "B": ["Start", "C", "D"],
    "C": ["A", "B", "End"],
    "D": ["B", "End"],
    "End": ["C", "D"],
}

queue = deque([("Start", 0)])
visited = {"Start"}

while queue:
    node, dist = queue.popleft()
    if node == "End":
        print(dist)
        break
    for neighbor in maze[node]:
        if neighbor not in visited:
            visited.add(neighbor)
            queue.append((neighbor, dist + 1))`,
      },
    },
    {
      type: "code",
      emoji: "🔬",
      content: `## 🔬 Advanced: DFS with Cycle Detection

\`\`\`python
# DFS with proper cycle detection and path tracking
def dfs_with_details(graph, start, goal):
    """DFS that shows its work — every step! 🔍"""
    stack = [(start, [start])]
    visited = set()
    steps = 0
    
    while stack:
        node, path = stack.pop()
        steps += 1
        
        if node == goal:
            print(f"✅ Found {goal} in {steps} steps!")
            print(f"📍 Path: {' → '.join(path)}")
            return path
        
        if node in visited:
            print(f"🔄 Already visited {node}, skipping...")
            continue
        visited.add(node)
        print(f"👀 Step {steps}: Exploring {node}")
        
        for neighbor in reversed(graph[node]):
            if neighbor not in visited:
                stack.append((neighbor, path + [neighbor]))
    
    print(f"❌ No path to {goal} found!")
    return None

# Test it!
graph = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"],
}

print("🔍 DFS Deep Dive:")
dfs_with_details(graph, "A", "F")
\`\`\`

🐍 Py: "DFS goes DEEP first (like exploring one tunnel all the way), BFS goes WIDE first (like ripples in a pond)!"

🤖 Botty: "GPS apps use BFS for shortest path, but DFS is great for solving mazes and puzzles!"`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `## 🏆 Challenge: Connected Components

Can you find ALL groups of connected nodes in a graph?

Some graphs aren't fully connected — there might be **islands** of nodes that can't reach each other!

\`\`\`python
# Find all connected components
graph = {
    "A": ["B"], "B": ["A", "C"], "C": ["B"],    # Island 1
    "D": ["E"], "E": ["D"],                       # Island 2
    "F": [],                                        # Island 3 (lonely!)
}

def find_components(graph):
    visited = set()
    components = []
    
    for node in graph:
        if node not in visited:
            # BFS to find all nodes in this component
            component = []
            queue = [node]
            while queue:
                current = queue.pop(0)
                if current not in visited:
                    visited.add(current)
                    component.append(current)
                    queue.extend(n for n in graph[current] if n not in visited)
            components.append(component)
    
    return components

islands = find_components(graph)
print(f"🏝️ Found {len(islands)} islands:")
for i, island in enumerate(islands):
    print(f"  Island {i+1}: {island}")
\`\`\`

🔧 Chip: "Social networks use this to find friend groups! Each island is a separate community."`,
    },
    {
      type: "quiz",
      emoji: "❓",
      content: "Knowledge Check!",
      quiz: [{
        question: "What is the key difference between BFS and DFS?",
        options: [
          "BFS uses a queue (wide first), DFS uses a stack (deep first)",
          "BFS is always faster than DFS",
          "DFS can only work on trees, not graphs",
          "BFS uses more memory than DFS always",
        ],
        
        correctIndex: 0,
        explanation:
          "BFS explores neighbors first (queue → FIFO), DFS dives deep first (stack → LIFO). BFS finds shortest paths, DFS is great for exhaustive search!",
        }],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-3-4: Module 3 Boss Battle
// ═══════════════════════════════════════════════════════════════

const ds_3_4: Lesson = {
  id: "ds-3-4",
  moduleId: "ds-3",
  title: "Module 3 Boss Battle",
  subtitle: "Combine graphs & hashmaps to conquer! · 图+哈希表大决战",
  icon: "⚔️",
  xp: 60,
  duration: "30 min",
  order: 4,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "⚔️",
      content: `## ⚔️ Module 3 Boss Battle: The Data Dungeon!

🐍 Py: "You've mastered hashmaps AND graphs! Time to face the **Boss** — a challenge that needs BOTH!"

🤖 Botty: "The Boss has a **social network** of minions. You need to analyze their connections AND track their stats with hashmaps!"

🔧 Chip: "Think of it like mapping a video game world — characters (hashmap) connected by paths (graph)!"

**Your Mission:** Build a **Social Network Analyzer** that combines:
- 📊 **HashMap** → Store user profiles (name, score, level)
- 🕸️ **Graph** → Store friendships between users
- 🔍 **BFS/DFS** → Find connections and influence

Ready to combine your powers? ⚡`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "Boss Strategy: Combining Data Structures",
      concept: {
        title: "🧰 Combining Data Structures",
        titleZh: "组合数据结构",
        syntaxCards: [
          {
            symbol: "dict + graph",
            name: "HashMap + Graph",
            nameZh: "哈希表 + 图",
            emoji: "🔗",
            description: "Use a dict for node data and an adjacency list for connections. Together they model rich networks!",
            example: 'profiles = {"Alice": {"score": 95}}\nfriends = {"Alice": ["Bob", "Carol"]}',
          },
          {
            symbol: "BFS + dict",
            name: "Search + Lookup",
            nameZh: "搜索 + 查找",
            emoji: "🔍",
            description: "BFS/DFS traverses the graph, dict provides O(1) data lookup at each node. Power combo!",
            example: 'for friend in bfs(graph, "Alice"):\n    print(profiles[friend])',
          },
          {
            symbol: "influence",
            name: "Network Influence",
            nameZh: "网络影响力",
            emoji: "📡",
            description: "A node's influence = its connections + their connections. Combine BFS depth with hashmap scores!",
            example: '# Friends-of-friends = 2-hop BFS\n# Influence = sum of connected scores',
          },
        ],
      },
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Building the Social Network

\`\`\`python
# 🕸️ Social Network Analyzer — HashMap + Graph combo!

# HashMap: User profiles
profiles = {
    "Alice":   {"level": 5, "score": 92, "role": "Leader"},
    "Bob":     {"level": 3, "score": 78, "role": "Builder"},
    "Carol":   {"level": 4, "score": 85, "role": "Explorer"},
    "Dave":    {"level": 2, "score": 65, "role": "Builder"},
    "Eve":     {"level": 6, "score": 97, "role": "Leader"},
    "Frank":   {"level": 1, "score": 45, "role": "Newbie"},
}

# Graph: Friendships (undirected)
friendships = {
    "Alice": ["Bob", "Carol", "Eve"],
    "Bob":   ["Alice", "Carol", "Dave"],
    "Carol": ["Alice", "Bob", "Eve"],
    "Dave":  ["Bob", "Frank"],
    "Eve":   ["Alice", "Carol"],
    "Frank": ["Dave"],
}

# 1. Find most connected user
most_friends = max(friendships, key=lambda u: len(friendships[u]))
print(f"🏆 Most connected: {most_friends} ({len(friendships[most_friends])} friends)")

# 2. Average score of each user's friend group
for user in profiles:
    friend_scores = [profiles[f]["score"] for f in friendships[user]]
    avg = sum(friend_scores) / len(friend_scores) if friend_scores else 0
    print(f"👥 {user}'s friend avg score: {avg:.1f}")
\`\`\`

🐍 Py: "See how the hashmap (profiles) gives us instant data, and the graph (friendships) gives us connections? Together = POWER!"`,
    },
    {
      type: "interactive",
      content: `## 🎮 Boss Fight: Influence Calculator!`,
      exercise: {
        prompt: "Calculate Alice's 'influence score': sum of scores of ALL users reachable within 2 hops (friends + friends-of-friends, excluding Alice herself). Print the total.",
        promptZh: "计算Alice的'影响力分数'：2跳内所有可达用户的分数总和（朋友+朋友的朋友，不包括Alice自己）。打印总分。",
        starterCode: `from collections import deque

profiles = {
    "Alice": {"score": 92}, "Bob": {"score": 78},
    "Carol": {"score": 85}, "Dave": {"score": 65},
    "Eve": {"score": 97}, "Frank": {"score": 45},
}

friendships = {
    "Alice": ["Bob", "Carol", "Eve"],
    "Bob": ["Alice", "Carol", "Dave"],
    "Carol": ["Alice", "Bob", "Eve"],
    "Dave": ["Bob", "Frank"],
    "Eve": ["Alice", "Carol"],
    "Frank": ["Dave"],
}

# TODO: BFS from Alice, max 2 hops
# Sum up scores of all reachable users (not Alice)
`,
        expectedOutput: "370",
        hint: "Use BFS with a distance tracker. Start: ('Alice', 0).\nOnly explore neighbors if current distance < 2.\nCollect all visited users (except Alice) and sum their scores.",
        hintZh: "用BFS加距离追踪。起点：('Alice', 0)。\n只在当前距离 < 2 时探索邻居。\n收集所有访问过的用户（除Alice外）并求和分数。",
        solution: `from collections import deque

profiles = {
    "Alice": {"score": 92}, "Bob": {"score": 78},
    "Carol": {"score": 85}, "Dave": {"score": 65},
    "Eve": {"score": 97}, "Frank": {"score": 45},
}

friendships = {
    "Alice": ["Bob", "Carol", "Eve"],
    "Bob": ["Alice", "Carol", "Dave"],
    "Carol": ["Alice", "Bob", "Eve"],
    "Dave": ["Bob", "Frank"],
    "Eve": ["Alice", "Carol"],
    "Frank": ["Dave"],
}

queue = deque([("Alice", 0)])
visited = {"Alice"}
influence = 0

while queue:
    user, dist = queue.popleft()
    if user != "Alice":
        influence += profiles[user]["score"]
    if dist < 2:
        for friend in friendships[user]:
            if friend not in visited:
                visited.add(friend)
                queue.append((friend, dist + 1))

print(influence)`,
      },
    },
    {
      type: "code",
      emoji: "🔬",
      content: `## 🔬 Full Boss Battle: Network Analysis Suite

\`\`\`python
from collections import deque

profiles = {
    "Alice": {"level": 5, "score": 92},
    "Bob": {"level": 3, "score": 78},
    "Carol": {"level": 4, "score": 85},
    "Dave": {"level": 2, "score": 65},
    "Eve": {"level": 6, "score": 97},
    "Frank": {"level": 1, "score": 45},
}

friendships = {
    "Alice": ["Bob", "Carol", "Eve"],
    "Bob": ["Alice", "Carol", "Dave"],
    "Carol": ["Alice", "Bob", "Eve"],
    "Dave": ["Bob", "Frank"],
    "Eve": ["Alice", "Carol"],
    "Frank": ["Dave"],
}

# 🏆 ANALYSIS 1: Shortest path between any two users
def shortest_path(graph, start, end):
    queue = deque([(start, [start])])
    visited = {start}
    while queue:
        node, path = queue.popleft()
        if node == end:
            return path
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    return None

path = shortest_path(friendships, "Frank", "Eve")
print(f"🛤️ Frank → Eve: {' → '.join(path)} ({len(path)-1} hops)")

# 🏆 ANALYSIS 2: Find "bridges" — users who connect groups
def is_bridge(graph, user):
    """Remove user and check if graph splits"""
    remaining = [u for u in graph if u != user]
    if not remaining:
        return False
    visited = set()
    queue = [remaining[0]]
    while queue:
        node = queue.pop(0)
        if node not in visited:
            visited.add(node)
            queue.extend(n for n in graph[node] if n != user and n not in visited)
    return len(visited) < len(remaining)

for user in profiles:
    if is_bridge(friendships, user):
        print(f"🌉 {user} is a BRIDGE — removing them splits the network!")

# 🏆 ANALYSIS 3: Recommend friends (friends-of-friends not yet friends)
def recommend_friends(graph, user):
    direct = set(graph[user])
    recommendations = {}
    for friend in graph[user]:
        for fof in graph[friend]:
            if fof != user and fof not in direct:
                recommendations[fof] = recommendations.get(fof, 0) + 1
    return sorted(recommendations.items(), key=lambda x: -x[1])

for user in ["Alice", "Frank"]:
    recs = recommend_friends(friendships, user)
    print(f"💡 {user} should befriend: {recs}")
\`\`\`

🐍 Py: "INCREDIBLE! You just built what Facebook, LinkedIn, and Twitter use every day!"`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `## 🏆 Final Boss Challenge: PageRank (Simplified!)

Google's original algorithm! A node is important if important nodes link to it.

\`\`\`python
# Simplified PageRank
def simple_pagerank(graph, iterations=10):
    """Every node starts with equal rank, then shares it with neighbors"""
    nodes = list(graph.keys())
    n = len(nodes)
    rank = {node: 1.0 / n for node in nodes}
    
    for _ in range(iterations):
        new_rank = {}
        for node in nodes:
            # Each node gets rank from nodes that point to it
            incoming_rank = 0
            for other in nodes:
                if node in graph[other]:
                    incoming_rank += rank[other] / len(graph[other])
            new_rank[node] = 0.15 / n + 0.85 * incoming_rank
        rank = new_rank
    
    return rank

ranks = simple_pagerank({
    "A": ["B", "C"], "B": ["C"],
    "C": ["A"], "D": ["C"],
})

print("📊 PageRank results:")
for node, r in sorted(ranks.items(), key=lambda x: -x[1]):
    print(f"  {node}: {r:.4f} {'👑' if r == max(ranks.values()) else ''}")
\`\`\`

🤖 Botty: "THIS is how Google ranks web pages! You just implemented a billion-dollar algorithm!"

🔧 Chip: "Graph + HashMap + iteration = the foundation of modern search engines!"`,
    },
    {
      type: "quiz",
      emoji: "❓",
      content: "Boss Battle Quiz!",
      quiz: [{
        question: "Why is combining a HashMap with a Graph so powerful?",
        options: [
          "HashMap stores node DATA (O(1) lookup), Graph stores CONNECTIONS (traversal) — best of both!",
          "It makes the code shorter",
          "Graphs can't work without hashmaps",
          "It's only useful for social networks",
        ],
        
        correctIndex: 0,
        explanation:
          "HashMap gives O(1) data access per node, Graph gives relationship traversal. Together they model rich, connected data — used in social networks, maps, recommendation engines, and more!",
        }],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-4-1: Build an Undo System
// ═══════════════════════════════════════════════════════════════

const ds_4_1: Lesson = {
  id: "ds-4-1",
  moduleId: "ds-4",
  title: "Build an Undo System",
  subtitle: "Stacks power Ctrl+Z! · 用栈实现撤销系统",
  icon: "↩️",
  xp: 55,
  duration: "25 min",
  order: 1,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "↩️",
      content: `## 🐍 Py Says: The Power of Ctrl+Z! ↩️

Ever pressed **Ctrl+Z** to undo a mistake? THANK A STACK! 🙏

Every text editor, drawing app, and even video games use **stacks** for undo/redo:
- **Undo stack** → Remembers every action you did (push on each action)
- **Redo stack** → Remembers actions you undid (push when you undo)

When you UNDO: pop from undo stack → push to redo stack
When you REDO: pop from redo stack → push to undo stack
When you DO something new: push to undo stack → CLEAR redo stack!

🤖 Botty: "Every app you use has this! Google Docs, Photoshop, VS Code — all stacks under the hood!"

🔧 Chip: "LIFO (Last In, First Out) is perfect here — you always undo the MOST RECENT action first!"

Let's build our own text editor with undo/redo! ✍️`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "Undo/Redo Architecture",
      concept: {
        title: "🧰 Undo/Redo with Stacks",
        titleZh: "用栈实现撤销/重做",
        syntaxCards: [
          {
            symbol: "undo_stack",
            name: "Undo Stack",
            nameZh: "撤销栈",
            emoji: "↩️",
            description: "Stores every action. When you undo, pop the last action off this stack and push it to redo.",
            example: 'undo_stack = []\nundo_stack.append(action)  # Do\naction = undo_stack.pop()  # Undo',
          },
          {
            symbol: "redo_stack",
            name: "Redo Stack",
            nameZh: "重做栈",
            emoji: "↪️",
            description: "Stores undone actions. When you redo, pop from here and push back to undo. Cleared on new action!",
            example: 'redo_stack = []\nredo_stack.append(undone)  # After undo\nredo_stack.clear()  # New action!',
          },
          {
            symbol: "Command",
            name: "Command Pattern",
            nameZh: "命令模式",
            emoji: "📝",
            description: "Each action is an object with do() and undo() methods. This lets us reverse any action cleanly!",
            example: '{"type": "insert", "pos": 5, "text": "hello"}',
          },
        ],
      },
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Text Editor with Undo/Redo

\`\`\`python
class TextEditor:
    """A simple text editor with undo/redo — powered by STACKS! 📚"""
    
    def __init__(self):
        self.text = ""
        self.undo_stack = []  # Stack of (action, data)
        self.redo_stack = []  # Stack of undone actions
    
    def type_text(self, new_text):
        """Type new text at the end"""
        self.undo_stack.append(("insert", new_text, len(self.text)))
        self.redo_stack.clear()  # New action kills redo!
        self.text += new_text
        print(f"✍️ Typed: '{new_text}' → '{self.text}'")
    
    def delete_last(self, count=1):
        """Delete last N characters"""
        deleted = self.text[-count:]
        self.undo_stack.append(("delete", deleted, len(self.text) - count))
        self.redo_stack.clear()
        self.text = self.text[:-count]
        print(f"🗑️ Deleted: '{deleted}' → '{self.text}'")
    
    def undo(self):
        """Undo the last action"""
        if not self.undo_stack:
            print("❌ Nothing to undo!")
            return
        action, data, pos = self.undo_stack.pop()
        self.redo_stack.append((action, data, pos))
        if action == "insert":
            self.text = self.text[:pos]
        elif action == "delete":
            self.text = self.text[:pos] + data + self.text[pos:]
        print(f"↩️ Undo! → '{self.text}'")
    
    def redo(self):
        """Redo the last undone action"""
        if not self.redo_stack:
            print("❌ Nothing to redo!")
            return
        action, data, pos = self.redo_stack.pop()
        self.undo_stack.append((action, data, pos))
        if action == "insert":
            self.text = self.text[:pos] + data
        elif action == "delete":
            self.text = self.text[:pos]
        print(f"↪️ Redo! → '{self.text}'")

# Let's test it! 🧪
editor = TextEditor()
editor.type_text("Hello")
editor.type_text(" World")
editor.type_text("!")
print(f"📄 Text: '{editor.text}'")

editor.undo()  # Remove "!"
editor.undo()  # Remove " World"
print(f"📄 After 2 undos: '{editor.text}'")

editor.redo()  # Bring back " World"
print(f"📄 After redo: '{editor.text}'")

editor.type_text("??")  # New action clears redo
editor.redo()  # Nothing to redo!
\`\`\`

🐍 Py: "See how the stacks keep perfect track? LIFO means the most recent action is always on top — exactly what undo needs!"`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Undo Counter!`,
      exercise: {
        prompt: "Create a simple counter with undo. Start at 0, apply operations [+5, +3, -2, +7], then undo twice. Print the final value.",
        promptZh: "创建一个支持撤销的简单计数器。从0开始，执行操作 [+5, +3, -2, +7]，然后撤销两次。打印最终值。",
        starterCode: `counter = 0
undo_stack = []

operations = [5, 3, -2, 7]

# TODO: Apply all operations (push old value to undo_stack each time)
# Then undo twice (pop from undo_stack)
# Print final counter value
`,
        expectedOutput: "6",
        hint: "Before each operation, push the current counter value to undo_stack.\nTo undo, just pop the last saved value and set counter to it.\nAfter [+5, +3, -2, +7] counter = 13. Undo +7 → 6. Undo -2 → 8. Wait... think about what 'undo' means!",
        hintZh: "每次操作前，把当前counter值压入undo_stack。\n撤销时，弹出上一个保存的值并设置counter。\n执行 [+5, +3, -2, +7] 后 counter = 13。撤销+7 → 6。撤销-2 → 8。想想'撤销'的意思！",
        solution: `counter = 0
undo_stack = []

operations = [5, 3, -2, 7]

for op in operations:
    undo_stack.append(counter)
    counter += op

# Undo twice
counter = undo_stack.pop()  # Undo +7: back to 6
counter = undo_stack.pop()  # Undo -2: back to 8

print(counter)`,
      },
    },
    {
      type: "code",
      emoji: "🔬",
      content: `## 🔬 Advanced: Drawing App Undo

\`\`\`python
class DrawingApp:
    """A drawing app where you can undo/redo shapes! 🎨"""
    
    def __init__(self):
        self.canvas = []
        self.undo_stack = []
        self.redo_stack = []
    
    def draw(self, shape):
        self.undo_stack.append(("draw", shape))
        self.redo_stack.clear()
        self.canvas.append(shape)
        self._show()
    
    def undo(self):
        if not self.undo_stack:
            print("Nothing to undo!")
            return
        action, shape = self.undo_stack.pop()
        self.redo_stack.append((action, shape))
        self.canvas.remove(shape)
        self._show()
    
    def redo(self):
        if not self.redo_stack:
            print("Nothing to redo!")
            return
        action, shape = self.redo_stack.pop()
        self.undo_stack.append((action, shape))
        self.canvas.append(shape)
        self._show()
    
    def _show(self):
        print(f"🖼️ Canvas: {self.canvas}")
        print(f"   Undo available: {len(self.undo_stack)} | Redo available: {len(self.redo_stack)}")

app = DrawingApp()
app.draw("⭐ Star")
app.draw("🔵 Circle")
app.draw("🔺 Triangle")
app.undo()
app.undo()
app.redo()
print(f"\\nFinal canvas: {app.canvas}")
\`\`\`

🤖 Botty: "Photoshop allows 1000+ undos — that's a stack with 1000+ items!"`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `## 🏆 Challenge: Browser History

\`\`\`python
class Browser:
    """Browser navigation with back/forward — DUAL STACKS! 🌐"""
    
    def __init__(self, homepage="google.com"):
        self.current = homepage
        self.back_stack = []
        self.forward_stack = []
        print(f"🏠 Homepage: {self.current}")
    
    def visit(self, url):
        self.back_stack.append(self.current)
        self.forward_stack.clear()
        self.current = url
        print(f"🌐 Visiting: {self.current}")
    
    def back(self):
        if not self.back_stack:
            print("❌ Can't go back!")
            return
        self.forward_stack.append(self.current)
        self.current = self.back_stack.pop()
        print(f"⬅️ Back to: {self.current}")
    
    def forward(self):
        if not self.forward_stack:
            print("❌ Can't go forward!")
            return
        self.back_stack.append(self.current)
        self.current = self.forward_stack.pop()
        print(f"➡️ Forward to: {self.current}")

browser = Browser()
browser.visit("python.org")
browser.visit("github.com")
browser.visit("stackoverflow.com")
browser.back()
browser.back()
browser.forward()
print(f"\\n📍 Current page: {browser.current}")
\`\`\`

🔧 Chip: "Your REAL browser works exactly like this! Chrome, Firefox, Safari — all dual stacks!"`,
    },
    {
      type: "quiz",
      emoji: "❓",
      content: "Undo System Quiz!",
      quiz: [{
        question: "When you perform a NEW action after undoing, what happens to the redo stack?",
        options: [
          "It gets cleared — the undone actions are lost forever!",
          "It stays the same",
          "The new action gets added to it",
          "It merges with the undo stack",
        ],
        
        correctIndex: 0,
        explanation:
          "When you do something new after undoing, the redo stack is CLEARED. You can't redo old actions after branching off in a new direction. This is how every editor works!",
        }],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-4-2: Expression Calculator
// ═══════════════════════════════════════════════════════════════

const ds_4_2: Lesson = {
  id: "ds-4-2",
  moduleId: "ds-4",
  title: "Expression Calculator",
  subtitle: "Parse math with stacks! · 用栈解析数学表达式",
  icon: "🧮",
  xp: 55,
  duration: "25 min",
  order: 2,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🧮",
      content: `## 🐍 Py Says: How Calculators REALLY Work! 🧮

When you type \`3 + 5 * 2\`, your calculator doesn't just read left to right!
It needs to know that \`*\` comes BEFORE \`+\`. How? **STACKS!** 📚

Every calculator and programming language uses **two stacks** to evaluate expressions:
- **Number stack** → Holds numbers waiting to be combined
- **Operator stack** → Holds operators waiting to be applied

This is called the **Shunting Yard Algorithm** (invented by Dijkstra!) 🚂

🤖 Botty: "Every time Python runs \`3 + 5 * 2\`, it uses this exact algorithm internally!"

🔧 Chip: "CPUs have a hardware stack for calculations. It's stacks all the way down! 🐢"

Let's build a real calculator! 🔢`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "Expression Evaluation Concepts",
      concept: {
        title: "🧰 Stack-Based Expression Evaluation",
        titleZh: "基于栈的表达式计算",
        syntaxCards: [
          {
            symbol: "num_stack",
            name: "Number Stack",
            nameZh: "数字栈",
            emoji: "🔢",
            description: "Holds numbers waiting to be operated on. When we apply an operator, we pop two numbers.",
            example: 'num_stack = []\nnum_stack.append(5)  # Push\na = num_stack.pop()  # Pop: 5',
          },
          {
            symbol: "op_stack",
            name: "Operator Stack",
            nameZh: "运算符栈",
            emoji: "➕",
            description: "Holds operators. Higher precedence ops get applied first. * and / before + and -!",
            example: 'precedence = {"+": 1, "-": 1, "*": 2, "/": 2}',
          },
          {
            symbol: "()",
            name: "Parentheses",
            nameZh: "括号",
            emoji: "🔄",
            description: "( pushes to op stack. ) triggers evaluation until matching ( is found. Parentheses override precedence!",
            example: '"(3 + 5) * 2" → evaluate 3+5 first!',
          },
        ],
      },
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Building a Calculator

\`\`\`python
def calculate(expression):
    """Evaluate a math expression using TWO STACKS! 🧮"""
    
    def precedence(op):
        if op in ('+', '-'): return 1
        if op in ('*', '/'): return 2
        return 0
    
    def apply_op(nums, op):
        b, a = nums.pop(), nums.pop()
        if op == '+': nums.append(a + b)
        elif op == '-': nums.append(a - b)
        elif op == '*': nums.append(a * b)
        elif op == '/': nums.append(a // b)
    
    nums = []     # Number stack 🔢
    ops = []      # Operator stack ➕
    
    i = 0
    tokens = expression.replace(" ", "")
    
    while i < len(tokens):
        if tokens[i].isdigit():
            # Read full number
            num = 0
            while i < len(tokens) and tokens[i].isdigit():
                num = num * 10 + int(tokens[i])
                i += 1
            nums.append(num)
            print(f"  📥 Push number: {num} → nums={nums}")
            continue
        
        elif tokens[i] == '(':
            ops.append('(')
            print(f"  📥 Push '(' → ops={ops}")
        
        elif tokens[i] == ')':
            while ops and ops[-1] != '(':
                apply_op(nums, ops.pop())
            ops.pop()  # Remove '('
            print(f"  🔄 Closed parens → nums={nums}")
        
        elif tokens[i] in '+-*/':
            while (ops and ops[-1] != '(' and
                   precedence(ops[-1]) >= precedence(tokens[i])):
                apply_op(nums, ops.pop())
            ops.append(tokens[i])
            print(f"  📥 Push op: {tokens[i]} → ops={ops}")
        
        i += 1
    
    while ops:
        apply_op(nums, ops.pop())
    
    return nums[0]

# Test it!
expressions = ["3 + 5 * 2", "(3 + 5) * 2", "10 - 3 + 2 * 4", "(10 - 3) * (2 + 4)"]
for expr in expressions:
    print(f"\\n🧮 Evaluating: {expr}")
    result = calculate(expr)
    print(f"  ✅ Result: {result}")
\`\`\`

🐍 Py: "The magic is in the **precedence check** — we apply higher-precedence operators first, just like math class!"`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Balanced Brackets!`,
      exercise: {
        prompt: "Write a function that checks if brackets are balanced. Test with '({[]})' (True) and '({[}])' (False). Print both results.",
        promptZh: "写一个函数检查括号是否匹配。测试 '({[]})' (True) 和 '({[}])' (False)。打印两个结果。",
        starterCode: `def is_balanced(s):
    stack = []
    matching = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        # TODO: If opening bracket, push to stack
        # TODO: If closing bracket, check if matches top of stack
        pass
    
    return len(stack) == 0

print(is_balanced("({[]})"))
print(is_balanced("({[}])"))
`,
        expectedOutput: "True\nFalse",
        hint: "Opening brackets: push to stack. Closing brackets: check if stack top matches.\nIf char is in '([{', append to stack.\nIf char is in ')]}, pop from stack and check if it matches using the 'matching' dict.",
        hintZh: "左括号：压入栈。右括号：检查栈顶是否匹配。\n如果char在'([{'中，append到stack。\n如果char在')]}'中，pop并用matching字典检查是否匹配。",
        solution: `def is_balanced(s):
    stack = []
    matching = {')': '(', ']': '[', '}': '{'}
    
    for char in s:
        if char in '([{':
            stack.append(char)
        elif char in ')]}':
            if not stack or stack[-1] != matching[char]:
                return False
            stack.pop()
    
    return len(stack) == 0

print(is_balanced("({[]})"))
print(is_balanced("({[}])"))`,
      },
    },
    {
      type: "code",
      emoji: "🔬",
      content: `## 🔬 Advanced: Postfix (RPN) Calculator

\`\`\`python
def rpn_calculate(expression):
    """Reverse Polish Notation calculator 🇵🇱
    
    In RPN, operators come AFTER their operands:
    Normal:  3 + 5  →  RPN: 3 5 +
    Normal:  3 + 5 * 2  →  RPN: 3 5 2 * +
    
    NO parentheses needed! Just one stack! 🎉
    """
    stack = []
    
    for token in expression.split():
        if token.lstrip('-').isdigit():
            stack.append(int(token))
        else:
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            elif token == '/': stack.append(a // b)
        print(f"  Token: {token:>3} → Stack: {stack}")
    
    return stack[0]

tests = [
    ("3 5 +", "3 + 5"),
    ("3 5 2 * +", "3 + 5*2"),
    ("3 5 + 2 *", "(3+5) * 2"),
    ("10 3 - 2 4 + *", "(10-3) * (2+4)"),
]

for rpn, normal in tests:
    print(f"\\n🧮 RPN: {rpn}  (= {normal})")
    result = rpn_calculate(rpn)
    print(f"  ✅ = {result}")
\`\`\`

🤖 Botty: "HP calculators used RPN for decades! No parentheses, no precedence rules — just pure stack power!"`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `## 🏆 Challenge: Infix to Postfix Converter

\`\`\`python
def infix_to_postfix(expression):
    """Convert normal math to RPN using the Shunting Yard algorithm! 🚂"""
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2}
    output = []
    ops = []
    
    for token in expression.split():
        if token.isdigit():
            output.append(token)
        elif token == '(':
            ops.append(token)
        elif token == ')':
            while ops and ops[-1] != '(':
                output.append(ops.pop())
            ops.pop()  # Remove '('
        elif token in precedence:
            while (ops and ops[-1] != '(' and 
                   ops[-1] in precedence and 
                   precedence[ops[-1]] >= precedence[token]):
                output.append(ops.pop())
            ops.append(token)
    
    while ops:
        output.append(ops.pop())
    
    return ' '.join(output)

tests = [
    "3 + 5",
    "3 + 5 * 2",
    "( 3 + 5 ) * 2",
    "( 10 - 3 ) * ( 2 + 4 )",
]

for expr in tests:
    postfix = infix_to_postfix(expr)
    print(f"📝 {expr:30} → RPN: {postfix}")
\`\`\`

🔧 Chip: "Dijkstra invented this in 1961! It's called 'Shunting Yard' because tokens get shunted between the output and operator stack like train cars in a rail yard! 🚂"`,
    },
    {
      type: "quiz",
      emoji: "❓",
      content: "Calculator Quiz!",
      quiz: [{
        question: "In the expression '3 + 5 * 2', why do we evaluate * before +?",
        options: [
          "Because * has higher precedence — the operator stack ensures higher-precedence ops are applied first",
          "Because * comes after + in the alphabet",
          "We always evaluate left to right",
          "The number stack decides the order",
        ],
        
        correctIndex: 0,
        explanation:
          "The operator stack checks precedence before pushing. If the new operator has lower/equal precedence, we first apply what's already on the stack. This ensures * and / happen before + and -!",
        }],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-4-3: Social Media Feed
// ═══════════════════════════════════════════════════════════════

const ds_4_3: Lesson = {
  id: "ds-4-3",
  moduleId: "ds-4",
  title: "Social Media Feed",
  subtitle: "Priority queues + graphs for news feeds · 优先队列+图构建社交动态",
  icon: "📱",
  xp: 55,
  duration: "25 min",
  order: 3,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "📱",
      content: `## 🐍 Py Says: How Does Your Feed Work? 📱

Ever wonder how Instagram, TikTok, or YouTube decides what to show you? It's **data structures working together**!

Your social media feed combines:
- 🕸️ **Graph** → Who you follow (social connections)
- ⏰ **Priority Queue** → Rank posts by importance/time
- 📊 **HashMap** → Store user profiles and post data

The algorithm:
1. Get all users you follow (graph traversal)
2. Collect their recent posts (hashmap lookup)
3. Rank by engagement + recency (priority queue)
4. Show top posts first!

🤖 Botty: "TikTok's algorithm uses ALL of these — plus machine learning on top!"

🔧 Chip: "A priority queue isn't FIFO like a normal queue — the HIGHEST PRIORITY item comes out first!"

Let's build our own social feed! 🚀`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "Priority Queue & Feed Concepts",
      concept: {
        title: "🧰 Priority Queues & Heaps",
        titleZh: "优先队列与堆",
        syntaxCards: [
          {
            symbol: "heapq",
            name: "Priority Queue (Heap)",
            nameZh: "优先队列（堆）",
            emoji: "🏔️",
            description: "A queue where the smallest (or highest priority) item always comes out first. Python's heapq is a min-heap!",
            example: 'import heapq\nheapq.heappush(pq, (priority, item))\ntop = heapq.heappop(pq)',
          },
          {
            symbol: "(-score, item)",
            name: "Max-Heap Trick",
            nameZh: "最大堆技巧",
            emoji: "🔄",
            description: "Python only has min-heap. For max-heap, negate the priority! -100 < -50, so score 100 comes out first.",
            example: 'heapq.heappush(pq, (-score, post))\n# Highest score pops first!',
          },
          {
            symbol: "feed algorithm",
            name: "Feed Ranking",
            nameZh: "动态排序",
            emoji: "📊",
            description: "Combine multiple signals: recency, likes, comments, relevance. Weight them and sort with a priority queue!",
            example: 'score = likes*2 + comments*3 + recency\nheapq.heappush(feed, (-score, post))',
          },
        ],
      },
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Building a Social Media Feed

\`\`\`python
import heapq
from datetime import datetime, timedelta

# 📊 User profiles (HashMap)
users = {
    "alice": {"name": "Alice", "verified": True},
    "bob": {"name": "Bob", "verified": False},
    "carol": {"name": "Carol", "verified": True},
    "dave": {"name": "Dave", "verified": False},
}

# 🕸️ Social graph: who follows whom
following = {
    "you": ["alice", "bob", "carol"],
    "alice": ["bob", "carol"],
    "bob": ["alice"],
    "carol": ["alice", "dave"],
    "dave": ["carol"],
}

# 📝 Posts (HashMap of lists)
posts = {
    "alice": [
        {"text": "Just launched my new app! 🚀", "likes": 150, "comments": 42, "hours_ago": 2},
        {"text": "Morning coffee ☕", "likes": 30, "comments": 5, "hours_ago": 8},
    ],
    "bob": [
        {"text": "Check out this sunset 🌅", "likes": 85, "comments": 20, "hours_ago": 1},
        {"text": "Debugging at 3am 😅", "likes": 200, "comments": 65, "hours_ago": 5},
    ],
    "carol": [
        {"text": "New Python tutorial! 🐍", "likes": 300, "comments": 80, "hours_ago": 3},
    ],
    "dave": [
        {"text": "Hello world!", "likes": 5, "comments": 1, "hours_ago": 1},
    ],
}

def calculate_score(post, author):
    """Calculate feed priority score"""
    recency = max(0, 24 - post["hours_ago"])  # Newer = higher
    engagement = post["likes"] * 1 + post["comments"] * 3
    verified_boost = 50 if users[author]["verified"] else 0
    return recency + engagement + verified_boost

def build_feed(user):
    """Build a ranked feed using priority queue! 📱"""
    feed = []  # Min-heap (negate scores for max behavior)
    
    # 1. Get who this user follows (graph lookup)
    followed = following.get(user, [])
    print(f"👥 {user} follows: {followed}")
    
    # 2. Collect all their posts and score them
    for author in followed:
        for post in posts.get(author, []):
            score = calculate_score(post, author)
            # Negate score for max-heap behavior
            heapq.heappush(feed, (-score, author, post["text"]))
    
    # 3. Pop in priority order (highest score first!)
    print(f"\\n📱 Your Feed:")
    rank = 1
    while feed:
        neg_score, author, text = heapq.heappop(feed)
        score = -neg_score
        print(f"  #{rank} [{score:>3} pts] @{author}: {text}")
        rank += 1

build_feed("you")
\`\`\`

🐍 Py: "The priority queue automatically sorts posts by score — highest engagement + most recent = top of your feed!"`,
    },
    {
      type: "interactive",
      content: `## 🎮 Your Turn: Top 3 Posts!`,
      exercise: {
        prompt: "Given posts with scores, use heapq to find the top 3 posts. Print their titles in order (highest score first).",
        promptZh: "给定带分数的帖子，用heapq找到前3个帖子。按分数从高到低打印标题。",
        starterCode: `import heapq

posts = [
    (42, "Hello World"),
    (99, "Python Tips"),
    (15, "My Lunch"),
    (87, "Coding Hack"),
    (63, "Book Review"),
    (5, "Test Post"),
]

# TODO: Use heapq to get top 3 posts by score
# Print titles from highest to lowest score
`,
        expectedOutput: "Python Tips\nCoding Hack\nBook Review",
        hint: "heapq.nlargest(3, posts) returns the 3 largest items!\nEach item is (score, title), so nlargest compares by score first.\nThen just print the title (index [1]) of each result.",
        hintZh: "heapq.nlargest(3, posts) 返回最大的3个元素！\n每个元素是 (score, title)，nlargest先按score比较。\n然后打印每个结果的title（索引[1]）。",
        solution: `import heapq

posts = [
    (42, "Hello World"),
    (99, "Python Tips"),
    (15, "My Lunch"),
    (87, "Coding Hack"),
    (63, "Book Review"),
    (5, "Test Post"),
]

top3 = heapq.nlargest(3, posts)
for score, title in top3:
    print(title)`,
      },
    },
    {
      type: "code",
      emoji: "🔬",
      content: `## 🔬 Advanced: Trending Topics

\`\`\`python
import heapq
from collections import Counter

# Simulated post data with hashtags
all_posts = [
    {"text": "Love #python!", "likes": 50},
    {"text": "#python is amazing #coding", "likes": 80},
    {"text": "New #javascript framework", "likes": 30},
    {"text": "#python #ai is the future!", "likes": 200},
    {"text": "#coding challenge today", "likes": 45},
    {"text": "#ai #python machine learning", "likes": 150},
    {"text": "#javascript for beginners", "likes": 25},
    {"text": "#coding #python tips", "likes": 90},
]

def extract_hashtags(text):
    return [word for word in text.split() if word.startswith("#")]

# Count hashtag frequency AND total engagement
tag_count = Counter()
tag_engagement = Counter()

for post in all_posts:
    tags = extract_hashtags(post["text"])
    for tag in tags:
        tag_count[tag] += 1
        tag_engagement[tag] += post["likes"]

# Combine into trending score
trending = []
for tag in tag_count:
    score = tag_count[tag] * 10 + tag_engagement[tag]
    heapq.heappush(trending, (-score, tag))

print("🔥 Trending Topics:")
for i in range(min(5, len(trending))):
    neg_score, tag = heapq.heappop(trending)
    count = tag_count[tag]
    eng = tag_engagement[tag]
    print(f"  #{i+1} {tag} — {count} posts, {eng} total likes (score: {-neg_score})")
\`\`\`

🤖 Botty: "Twitter's trending algorithm works like this — frequency × engagement = trending score!"`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `## 🏆 Challenge: Friend Recommendation Engine

\`\`\`python
import heapq

# Social graph
follows = {
    "you": ["alice", "bob"],
    "alice": ["you", "bob", "carol", "dave"],
    "bob": ["you", "alice", "eve"],
    "carol": ["alice", "dave"],
    "dave": ["alice", "carol", "eve"],
    "eve": ["bob", "dave"],
}

# User engagement scores
engagement = {
    "alice": 95, "bob": 80, "carol": 70,
    "dave": 60, "eve": 85,
}

def recommend_friends(user, graph, scores, top_n=3):
    """Recommend friends based on mutual connections + engagement"""
    my_friends = set(graph.get(user, []))
    candidates = {}
    
    # Find friends-of-friends
    for friend in my_friends:
        for fof in graph.get(friend, []):
            if fof != user and fof not in my_friends:
                if fof not in candidates:
                    candidates[fof] = {"mutual": 0, "score": scores.get(fof, 0)}
                candidates[fof]["mutual"] += 1
    
    # Rank: mutual_friends * 30 + engagement_score
    heap = []
    for person, data in candidates.items():
        rank = data["mutual"] * 30 + data["score"]
        heapq.heappush(heap, (-rank, person, data["mutual"]))
    
    print(f"💡 Friend recommendations for @{user}:")
    for i in range(min(top_n, len(heap))):
        neg_rank, person, mutual = heapq.heappop(heap)
        print(f"  {i+1}. @{person} — {mutual} mutual friends, score: {scores[person]} (rank: {-neg_rank})")

recommend_friends("you", follows, engagement)
\`\`\`

🔧 Chip: "LinkedIn's 'People You May Know' uses exactly this — mutual connections + profile relevance!"`,
    },
    {
      type: "quiz",
      emoji: "❓",
      content: "Social Feed Quiz!",
      quiz: [{
        question: "Why use a priority queue (heap) instead of just sorting a list for a social media feed?",
        options: [
          "Heap gives us top-K items in O(n log k) — faster than full sort O(n log n) when we only need top posts!",
          "Heaps are always faster than sorting",
          "Lists can't hold posts",
          "Priority queues use less memory than lists",
        ],
        
        correctIndex: 0,
        explanation:
          "When you only need the TOP K items from millions of posts, a heap is much faster than sorting everything. Social media feeds typically show 20-50 posts from millions — perfect for heaps!",
        }],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// LESSON DS-4-4: Graduation — Data Structure Olympics
// ═══════════════════════════════════════════════════════════════

const ds_4_4: Lesson = {
  id: "ds-4-4",
  moduleId: "ds-4",
  title: "Data Structure Olympics",
  subtitle: "The grand finale! Combine everything! · 终极毕业挑战",
  icon: "🏅",
  xp: 75,
  duration: "35 min",
  order: 4,
  gradeRange: [5, 12],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      type: "text",
      emoji: "🏅",
      content: `## 🐍 Py Says: Welcome to the Data Structure Olympics! 🏅

You've made it to the **GRAND FINALE**! 🎆

You've mastered:
- 📦 **Arrays & Linked Lists** — ordered data, chains of nodes
- 📚 **Stacks** — LIFO, undo/redo, expression parsing
- 🎢 **Queues** — FIFO, BFS, scheduling
- 🌳 **Trees** — hierarchical data, BST search
- 🗺️ **HashMaps** — O(1) lookup, counting, caching
- 🕸️ **Graphs** — connections, BFS, DFS, pathfinding
- 🏔️ **Priority Queues** — heaps, top-K, ranking

Now it's time for the **Olympics** — a series of challenges that combine EVERYTHING! 🏋️

🤖 Botty: "In real software engineering, you NEVER use just one data structure. The art is knowing which to combine!"

🔧 Chip: "This is what separates beginners from experts — seeing the connections between data structures!"

Let the games BEGIN! 🏁`,
    },
    {
      type: "concept",
      emoji: "📖",
      content: "Choosing the Right Data Structure",
      concept: {
        title: "🧰 Data Structure Selection Guide",
        titleZh: "数据结构选择指南",
        syntaxCards: [
          {
            symbol: "need order?",
            name: "Ordered → Array/List",
            nameZh: "需要顺序 → 数组/列表",
            emoji: "📦",
            description: "When position matters! Indexed access, slicing, iteration in order.",
            example: 'scores = [95, 87, 92]  # Order matters!\nscores[0]  # First score',
          },
          {
            symbol: "need lookup?",
            name: "Fast Lookup → HashMap",
            nameZh: "快速查找 → 哈希表",
            emoji: "🗺️",
            description: "When you need instant access by key. O(1) get/set. Counting, caching, profiles.",
            example: 'users = {"alice": 95}\nusers["alice"]  # Instant!',
          },
          {
            symbol: "need LIFO?",
            name: "Last-In-First-Out → Stack",
            nameZh: "后进先出 → 栈",
            emoji: "📚",
            description: "When the most recent item matters most. Undo, parsing, backtracking.",
            example: 'stack = []\nstack.append(x)  # Push\nstack.pop()      # Most recent',
          },
          {
            symbol: "need FIFO?",
            name: "First-In-First-Out → Queue",
            nameZh: "先进先出 → 队列",
            emoji: "🎢",
            description: "When fairness/order matters. BFS, scheduling, buffering.",
            example: 'from collections import deque\nq = deque()\nq.append(x); q.popleft()',
          },
          {
            symbol: "need hierarchy?",
            name: "Parent-Child → Tree",
            nameZh: "父子关系 → 树",
            emoji: "🌳",
            description: "When data has levels/categories. File systems, org charts, BST for sorted data.",
            example: 'class Node:\n    def __init__(self, val):\n        self.left = self.right = None',
          },
          {
            symbol: "need connections?",
            name: "Relationships → Graph",
            nameZh: "关系网络 → 图",
            emoji: "🕸️",
            description: "When things connect in complex ways. Social networks, maps, dependencies.",
            example: 'graph = {"A": ["B","C"], "B": ["A"]}',
          },
        ],
      },
    },
    {
      type: "code",
      emoji: "💻",
      content: `## 💻 Event 1: Task Scheduler (Queue + HashMap + Heap)

\`\`\`python
import heapq
from collections import deque

# 🏗️ A task scheduler that combines MULTIPLE data structures!

# HashMap: Task details
tasks = {
    "T1": {"name": "Fix login bug", "priority": 3, "deps": []},
    "T2": {"name": "Design homepage", "priority": 2, "deps": ["T1"]},
    "T3": {"name": "Write tests", "priority": 1, "deps": ["T1"]},
    "T4": {"name": "Deploy to prod", "priority": 5, "deps": ["T2", "T3"]},
    "T5": {"name": "Send newsletter", "priority": 4, "deps": []},
}

# Graph: Dependencies (what must be done first)
dep_graph = {tid: info["deps"] for tid, info in tasks.items()}

# Step 1: Topological sort using BFS (Kahn's algorithm!)
def topo_sort(graph, all_nodes):
    in_degree = {n: 0 for n in all_nodes}
    for node in all_nodes:
        for dep in graph[node]:
            in_degree[node] += 0  # deps are prerequisites
    # Count how many tasks depend on each task
    reverse = {n: [] for n in all_nodes}
    for node in all_nodes:
        for dep in graph[node]:
            reverse[dep].append(node)
    
    in_degree = {n: len(graph[n]) for n in all_nodes}
    queue = deque([n for n in all_nodes if in_degree[n] == 0])
    order = []
    
    while queue:
        # Among ready tasks, pick highest priority first (heap!)
        ready = []
        while queue:
            ready.append(queue.popleft())
        ready.sort(key=lambda t: -tasks[t]["priority"])
        
        for node in ready:
            order.append(node)
            for dependent in reverse[node]:
                in_degree[dependent] -= 1
                if in_degree[dependent] == 0:
                    queue.append(dependent)
    
    return order

schedule = topo_sort(dep_graph, list(tasks.keys()))
print("📋 Task Schedule (respects dependencies + priority):")
for i, tid in enumerate(schedule):
    t = tasks[tid]
    deps = f" (after {t['deps']})" if t["deps"] else " (no deps)"
    print(f"  {i+1}. [{tid}] {t['name']} ⭐{t['priority']}{deps}")
\`\`\`

🐍 Py: "We used a HashMap (task data), Graph (dependencies), Queue (BFS), and priority sorting — FOUR structures together!"`,
    },
    {
      type: "interactive",
      content: `## 🎮 Event 2: LRU Cache Challenge!`,
      exercise: {
        prompt: "Implement a simple LRU (Least Recently Used) cache with capacity 3. Process these operations and print the final cache contents as a list (most recent first): put(1,'a'), put(2,'b'), put(3,'c'), get(1), put(4,'d'). Print the keys in order.",
        promptZh: "实现一个容量为3的简单LRU缓存。处理这些操作并打印最终缓存内容（最近使用的在前）：put(1,'a'), put(2,'b'), put(3,'c'), get(1), put(4,'d')。按顺序打印键。",
        starterCode: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    
    def get(self, key):
        if key in self.cache:
            self.cache.move_to_end(key)
            return self.cache[key]
        return -1
    
    def put(self, key, value):
        # TODO: If key exists, update and move to end
        # TODO: If at capacity, remove LEAST recently used (first item)
        # TODO: Add new key-value pair
        pass

cache = LRUCache(3)
cache.put(1, 'a')
cache.put(2, 'b')
cache.put(3, 'c')
cache.get(1)       # This makes key 1 most recent!
cache.put(4, 'd')  # Evicts least recent (key 2)

print(list(cache.cache.keys()))
`,
        expectedOutput: "[3, 1, 4]",
        hint: "If key exists: update value, move_to_end(key).\nIf at capacity: self.cache.popitem(last=False) removes the FIRST (oldest) item.\nThen just self.cache[key] = value to add.",
        hintZh: "如果key存在：更新值，move_to_end(key)。\n如果达到容量：self.cache.popitem(last=False) 移除第一个（最旧的）。\n然后 self.cache[key] = value 添加。",
        solution: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    
    def get(self, key):
        if key in self.cache:
            self.cache.move_to_end(key)
            return self.cache[key]
        return -1
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        elif len(self.cache) >= self.capacity:
            self.cache.popitem(last=False)
        self.cache[key] = value

cache = LRUCache(3)
cache.put(1, 'a')
cache.put(2, 'b')
cache.put(3, 'c')
cache.get(1)
cache.put(4, 'd')

print(list(cache.cache.keys()))`,
      },
    },
    {
      type: "code",
      emoji: "🔬",
      content: `## 🔬 Event 3: Mini Database Engine

\`\`\`python
# A tiny database using HashMap + BST-like indexing + Stack for transactions!

class MiniDB:
    def __init__(self):
        self.data = {}          # HashMap: id → record
        self.index = {}         # HashMap: field_value → [ids]  (index!)
        self.tx_stack = []      # Stack: transaction log for rollback
        self.auto_id = 0
    
    def insert(self, record):
        self.auto_id += 1
        rid = self.auto_id
        self.data[rid] = record
        # Update indexes
        for key, val in record.items():
            idx_key = f"{key}:{val}"
            if idx_key not in self.index:
                self.index[idx_key] = []
            self.index[idx_key].append(rid)
        # Log for rollback
        self.tx_stack.append(("insert", rid))
        return rid
    
    def find(self, field, value):
        """O(1) lookup using index!"""
        idx_key = f"{field}:{value}"
        ids = self.index.get(idx_key, [])
        return [self.data[i] for i in ids if i in self.data]
    
    def rollback(self):
        """Undo last operation using stack!"""
        if not self.tx_stack:
            print("Nothing to rollback!")
            return
        op, rid = self.tx_stack.pop()
        if op == "insert":
            record = self.data.pop(rid, None)
            if record:
                for key, val in record.items():
                    idx_key = f"{key}:{val}"
                    if idx_key in self.index:
                        self.index[idx_key].remove(rid)
            print(f"↩️ Rolled back insert #{rid}")

# Let's use it!
db = MiniDB()
db.insert({"name": "Alice", "role": "engineer", "level": 5})
db.insert({"name": "Bob", "role": "designer", "level": 3})
db.insert({"name": "Carol", "role": "engineer", "level": 4})
db.insert({"name": "Dave", "role": "engineer", "level": 5})

print("🔍 All engineers:", db.find("role", "engineer"))
print("🔍 Level 5:", db.find("level", 5))

db.rollback()  # Undo Dave
print("\\n🔍 Engineers after rollback:", db.find("role", "engineer"))
print(f"📊 Total records: {len(db.data)}")
\`\`\`

🤖 Botty: "Real databases like PostgreSQL use hashmaps (hash indexes), B-trees, and transaction logs (stacks) — exactly like this!"`,
    },
    {
      type: "challenge",
      emoji: "🏆",
      content: `## 🏆 Gold Medal Challenge: Route Planner

\`\`\`python
import heapq
from collections import deque

# 🗺️ A complete route planner — Dijkstra's algorithm!
# Combines: Graph + HashMap + Priority Queue

city_map = {
    "Home":    {"School": 3, "Mall": 7, "Park": 2},
    "School":  {"Home": 3, "Library": 4, "Mall": 5},
    "Mall":    {"Home": 7, "School": 5, "Cinema": 2, "Park": 4},
    "Park":    {"Home": 2, "Mall": 4, "Cinema": 6},
    "Library": {"School": 4, "Cinema": 3},
    "Cinema":  {"Mall": 2, "Library": 3, "Park": 6},
}

def dijkstra(graph, start):
    """Find shortest path from start to ALL other nodes! 🏆"""
    # Priority queue: (distance, node)
    pq = [(0, start)]
    # HashMap: shortest known distance to each node
    distances = {start: 0}
    # HashMap: previous node in shortest path
    previous = {start: None}
    
    while pq:
        dist, node = heapq.heappop(pq)
        
        if dist > distances.get(node, float('inf')):
            continue  # Skip outdated entries
        
        for neighbor, weight in graph[node].items():
            new_dist = dist + weight
            if new_dist < distances.get(neighbor, float('inf')):
                distances[neighbor] = new_dist
                previous[neighbor] = node
                heapq.heappush(pq, (new_dist, neighbor))
    
    return distances, previous

def get_path(previous, target):
    """Reconstruct path using the previous HashMap"""
    path = []
    node = target
    while node is not None:
        path.append(node)
        node = previous[node]
    return list(reversed(path))

# Find shortest paths from Home to everywhere!
distances, previous = dijkstra(city_map, "Home")

print("🗺️ Shortest distances from Home:")
for dest in sorted(distances, key=distances.get):
    path = get_path(previous, dest)
    print(f"  🏠→{dest}: {distances[dest]} blocks via {' → '.join(path)}")
\`\`\`

🐍 Py: "Dijkstra's algorithm is THE most important graph algorithm! Google Maps, Waze, Uber — all use variants of this!"

🔧 Chip: "Notice how we used Graph (city map), HashMap (distances), and Priority Queue (exploration order) — the holy trinity of pathfinding!"`,
    },
    {
      type: "quiz",
      emoji: "❓",
      content: "🏅 Final Graduation Quiz!",
      quiz: [{
        question: "You're building a spell-checker that needs to: (1) store a dictionary of words, (2) find closest matches, (3) track recently looked up words. Which data structures would you combine?",
        options: [
          "HashMap (dictionary) + Tree/Trie (closest match) + Queue/LRU Cache (recent lookups)",
          "Just a single large array",
          "Only a graph",
          "Stack for everything",
        ],
        
        correctIndex: 0,
        explanation:
          "HashMap gives O(1) lookup for exact matches, a Trie/Tree helps find similar words, and an LRU Cache (queue + hashmap) tracks recent lookups. Real spell-checkers combine all three! Congratulations, Data Structure Champion! 🏆🎓",
        }],
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// EXPORT ALL LESSONS
// ═══════════════════════════════════════════════════════════════

export const DS_LESSONS: Lesson[] = [
  ds_1_1, ds_1_2, ds_1_3, ds_1_4,
  ds_2_1, ds_2_2, ds_2_3, ds_2_4,
  ds_3_1, ds_3_2, ds_3_3, ds_3_4,
  ds_4_1, ds_4_2, ds_4_3, ds_4_4,
];
