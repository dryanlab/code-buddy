// Code Buddy - AI & Machine Learning Track
// 6 Modules, 24 Lessons — Auto-generated
// Target: Students WITH Python basics (ages 10-16)
// All code examples: Pure Python, runnable in Pyodide

import type { Lesson, Module } from "./lessons";

// ═══════════════════════════════════════════════════════════════
// AI MODULES
// ═══════════════════════════════════════════════════════════════

export const AI_MODULES: Module[] = [
  {
    id: "ai-1",
    title: "🌟 What is AI?",
    subtitle: "Discover artificial intelligence · 认识人工智能",
    icon: "🌟",
    color: "from-purple-400 to-pink-500",
    lessons: ["ai-1-1", "ai-1-2", "ai-1-3", "ai-1-4"],
  },
  {
    id: "ai-2",
    title: "📊 Data Science Toolkit",
    subtitle: "Master data skills · 掌握数据技能",
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
    lessons: ["ai-2-1", "ai-2-2", "ai-2-3", "ai-2-4"],
  },
  {
    id: "ai-3",
    title: "🎯 Classical Machine Learning",
    subtitle: "Train your first models · 训练你的第一个模型",
    icon: "🎯",
    color: "from-green-500 to-emerald-600",
    lessons: ["ai-3-1", "ai-3-2", "ai-3-3", "ai-3-4", "ai-3-5", "ai-3-6"],
  },
  {
    id: "ai-4",
    title: "🧠 Neural Networks",
    subtitle: "Build a brain from scratch · 从零搭建大脑",
    icon: "🧠",
    color: "from-orange-500 to-red-600",
    lessons: ["ai-4-1", "ai-4-2", "ai-4-3", "ai-4-4"],
  },
  {
    id: "ai-5",
    title: "🖼️ Deep Learning Applications",
    subtitle: "Vision, language & creativity · 视觉、语言与创造力",
    icon: "🖼️",
    color: "from-indigo-500 to-violet-600",
    lessons: ["ai-5-1", "ai-5-2", "ai-5-3", "ai-5-4"],
  },
  {
    id: "ai-6",
    title: "🚀 AI in the Real World",
    subtitle: "RL, ethics & the future · 强化学习、伦理与未来",
    icon: "🚀",
    color: "from-amber-500 to-orange-600",
    lessons: ["ai-6-1", "ai-6-2"],
  },
];

const ai_1_1: Lesson = {
  id: "ai-1-1",
  moduleId: "ai-1",
  title: "Hello, AI!",
  subtitle: "AI is all around you \u00b7 AI \u5c31\u5728\u4f60\u8eab\u8fb9",
  icon: "\ud83d\udc4b",
  xp: 15,
  duration: "15 min",
  order: 1,
  gradeRange: [4, 10],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      "type": "text",
      emoji: "\ud83e\udd16",
      content: `## 🤖 Botty Says: Welcome to the World of AI!

Hey there, future AI builder! I'm **Botty** 🤖, your AI guide! You already use AI every single day!

🎯 **Learning Objectives · 学习目标:**
- Understand what AI is (and what it's NOT)
- Identify AI in everyday life
- Learn the difference between "smart" and "intelligent"

Think about your day:
- 📱 **YouTube/TikTok** recommends videos you'll love — that's AI!
- 🗣️ **Siri/Alexa** understands your voice — that's AI!
- 📸 **Phone camera** detects faces — that's AI!
- 🎮 **Game enemies** that adapt to how you play — that's AI!

> 🍕 **Pizza Analogy:** Imagine a pizza shop that remembers every customer's order and starts making YOUR pizza before you even walk in. That's what AI does with data!

**So what IS AI?** Artificial Intelligence is when we teach computers to do things that normally require human intelligence — like seeing, hearing, understanding language, and making decisions.

🔑 **Key Takeaway:** AI isn't magic or sci-fi robots. It's math + data + clever programming!

👀 **Watch Out:** Not everything "smart" is AI! A calculator does math fast, but it doesn't *learn*. AI is about **learning from experience**.`
    },
    {
      "type": "code",
      emoji: "\ud83d\udcbb",
      content: `## 💻 AI vs Regular Program

Let's see the difference between a regular program and an "AI-like" program!

🎯 **What you'll learn:** How a regular rule-based program works vs one that learns from data.`,
      code: `# 🤖 Compare a REGULAR program vs an AI program!

# === REGULAR PROGRAM (Fixed Rules) ===
def recommend_regular(favorite_genre):
    if favorite_genre == "action":
        return "Watch: Avengers"
    elif favorite_genre == "comedy":
        return "Watch: Finding Nemo"
    else:
        return "Watch: Toy Story"

print("=== Regular Program ===")
print(recommend_regular("action"))
print(recommend_regular("romance"))  # Falls to default!

# === AI-LIKE PROGRAM (Learns from Data) ===
def recommend_ai(watch_history):
    genre_count = {}
    for movie, genre in watch_history:
        genre_count[genre] = genre_count.get(genre, 0) + 1
    fav = max(genre_count, key=genre_count.get)
    recommendations = {
        "action": ["Avengers", "Spider-Man", "Batman"],
        "comedy": ["Finding Nemo", "Shrek", "Zootopia"],
        "sci-fi": ["Star Wars", "Wall-E", "Interstellar"],
    }
    choices = recommendations.get(fav, ["Toy Story"])
    watched_movies = [m for m, g in watch_history]
    for movie in choices:
        if movie not in watched_movies:
            return f"Based on your history, try: {movie} ({fav})"
    return f"You've seen everything in {fav}!"

print("\\n=== AI-Like Program ===")
my_history = [
    ("Avengers", "action"),
    ("Spider-Man", "action"),
    ("Finding Nemo", "comedy"),
    ("Batman", "action"),
]
print(recommend_ai(my_history))
# It LEARNED that you love action movies! 🎬`,
      exercise: {
        prompt: "Add more movies to the watch history and see how the recommendation changes. Try making comedy the dominant genre!",
        promptZh: "\u6dfb\u52a0\u66f4\u591a\u7535\u5f71\u5230\u89c2\u770b\u5386\u53f2\uff0c\u770b\u63a8\u8350\u5982\u4f55\u53d8\u5316\u3002\u8bd5\u7740\u8ba9\u559c\u5267\u6210\u4e3a\u4e3b\u8981\u7c7b\u578b\uff01",
        starterCode: `def recommend_ai(watch_history):
    genre_count = {}
    for movie, genre in watch_history:
        genre_count[genre] = genre_count.get(genre, 0) + 1
    fav = max(genre_count, key=genre_count.get)
    recs = {
        "action": ["Avengers", "Spider-Man", "Batman"],
        "comedy": ["Finding Nemo", "Shrek", "Zootopia"],
        "sci-fi": ["Star Wars", "Wall-E", "Interstellar"],
    }
    choices = recs.get(fav, ["Toy Story"])
    watched = [m for m, g in watch_history]
    for movie in choices:
        if movie not in watched:
            return f"Try: {movie} ({fav})"
    return f"Watch more {fav}!"

# TODO: Change this history so comedy wins!
my_history = [
    ("Avengers", "action"),
    ("Spider-Man", "action"),
]
print(recommend_ai(my_history))`,
        expectedOutput: "Try: Finding Nemo (comedy)",
        hint: "Add more comedy entries than action entries to the history list!",
        hintZh: "\u5728\u5386\u53f2\u5217\u8868\u4e2d\u6dfb\u52a0\u6bd4\u52a8\u4f5c\u7247\u66f4\u591a\u7684\u559c\u5267\u7247\u6761\u76ee\uff01",
        solution: `def recommend_ai(watch_history):
    genre_count = {}
    for movie, genre in watch_history:
        genre_count[genre] = genre_count.get(genre, 0) + 1
    fav = max(genre_count, key=genre_count.get)
    recs = {
        "action": ["Avengers", "Spider-Man", "Batman"],
        "comedy": ["Finding Nemo", "Shrek", "Zootopia"],
        "sci-fi": ["Star Wars", "Wall-E", "Interstellar"],
    }
    choices = recs.get(fav, ["Toy Story"])
    watched = [m for m, g in watch_history]
    for movie in choices:
        if movie not in watched:
            return f"Try: {movie} ({fav})"
    return f"Watch more {fav}!"

my_history = [
    ("Avengers", "action"),
    ("Shrek", "comedy"),
    ("Zootopia", "comedy"),
    ("Toy Story", "comedy"),
]
print(recommend_ai(my_history))`
      }
    },
    {
      "type": "quiz",
      content: "\ud83e\udde0 AI Knowledge Check \u00b7 AI \u77e5\u8bc6\u6d4b\u9a8c",
      quiz: [
        {
          question: "Which of these is an example of AI?",
          options: ["A calculator doing math", "YouTube recommending videos", "A light switch turning on", "A clock showing time"],
          correctIndex: 1,
          explanation: "YouTube's recommendation system LEARNS your preferences from data \u2014 that's AI!"
        },
        {
          question: "What makes AI different from a regular program?",
          options: ["AI is faster", "AI uses electricity", "AI learns from data", "AI has a screen"],
          correctIndex: 2,
          explanation: "AI learns from data and improves over time, while regular programs follow fixed rules."
        },
        {
          question: "Who created the Turing Test?",
          options: ["Steve Jobs", "Alan Turing", "Elon Musk", "Mark Zuckerberg"],
          correctIndex: 1,
          explanation: "Alan Turing proposed the test in 1950 to answer 'Can machines think?'"
        }
      ]
    },
  ],
};

const ai_1_2: Lesson = {
  id: "ai-1-2",
  moduleId: "ai-1",
  title: "How Machines Learn",
  subtitle: "Rules vs learning \u00b7 \u89c4\u5219 vs \u5b66\u4e60",
  icon: "\ud83c\udf93",
  xp: 15,
  duration: "18 min",
  order: 2,
  gradeRange: [4, 10],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      "type": "text",
      emoji: "\ud83e\udd16",
      content: `## 🤖 Rules Robot vs Learning Robot

🎯 **Learning Objectives · 学习目标:**
- Understand the difference between rule-based and learning-based AI
- See why learning beats rules for complex tasks
- Write your first "learning" algorithm

**Robot A (Rules)** 📏: Someone programs exact rules:
- "If it's red and round → apple"
- But what about a GREEN apple? 🍏 Robot A is confused!

**Robot B (Learning)** 🧠: Sees 1000 examples, figures out patterns BY ITSELF. It can handle green apples because it learned MANY features!

> 🏀 **Sports Analogy:** Rules Robot is like reading a basketball textbook. Learning Robot is like playing 1000 games — you develop *intuition*!

🔑 **Key Takeaway:** Machine Learning = Learning from examples instead of following manual rules.

👀 **Watch Out:** Rules still matter! Sometimes a simple if-else is better than ML.`
    },
    {
      "type": "code",
      emoji: "\ud83c\udf4e",
      content: "## \ud83c\udf4e Rules Robot vs Learning Robot \u2014 Code Battle!",
      code: `# 🤖 Robot A: Rules-Based Classifier
def rules_robot(color, size, weight):
    if color == "red" and size < 8:
        return "apple"
    elif color == "orange" and size >= 7:
        return "orange"
    elif color == "yellow" and size < 6:
        return "banana"
    else:
        return "unknown"

# 🧠 Robot B: Learning Robot
def learning_robot(training_data, new_fruit):
    color_votes = {}
    for features, label in training_data:
        if features[0] == new_fruit[0]:  # same color
            color_votes[label] = color_votes.get(label, 0) + 1
    if color_votes:
        return max(color_votes, key=color_votes.get)
    return "unknown"

training_data = [
    (("red", 7, 150), "apple"),
    (("green", 7, 160), "apple"),
    (("orange", 8, 200), "orange"),
    (("yellow", 5, 120), "banana"),
    (("red", 3, 80), "cherry"),
]

print("=== Test: Green Apple ===")
print(f"Rules Robot:    {rules_robot('green', 7, 160)}")
print(f"Learning Robot: {learning_robot(training_data, ('green', 7, 160))}")
print("\\n🤖 Learning Robot handles surprises better!")`
    },
    {
      "type": "text",
      emoji: "\ud83d\udccb",
      content: `## 📋 The 3 Types of Machine Learning

**1. Supervised Learning** 👨‍🏫 — Teacher shows answers (labeled data)
**2. Unsupervised Learning** 🔍 — No teacher, find patterns alone
**3. Reinforcement Learning** 🎮 — Learn by trial & error with rewards

> 🎮 **Game Analogy:**
> - Supervised = Playing with a walkthrough guide
> - Unsupervised = Exploring the game world freely
> - Reinforcement = Dying and respawning until you beat the boss!

🔑 **Key Takeaway:** Most AI you use daily is Supervised Learning.`
    },
    {
      "type": "quiz",
      content: "\ud83e\udde0 ML Types Quiz",
      quiz: [
        {
          question: "What's the key difference between Rules Robot and Learning Robot?",
          options: ["Speed", "Rules Robot learns", "Learning Robot learns from data", "They're the same"],
          correctIndex: 2,
          explanation: "Learning Robot improves from data/examples, while Rules Robot only follows pre-programmed if-else statements!"
        },
        {
          question: "A spam filter trained on 10,000 labeled emails is which type?",
          options: ["Unsupervised", "Reinforcement", "Supervised", "None"],
          correctIndex: 2,
          explanation: "It uses LABELED data \u2014 that's supervised learning!"
        },
        {
          question: "An AI that groups customers by shopping habits (without labels) is which type?",
          options: ["Supervised", "Unsupervised", "Reinforcement", "Rule-based"],
          correctIndex: 1,
          explanation: "Finding hidden patterns without labels = unsupervised learning!"
        },
        {
          question: "A game AI that learns by getting points for winning is which type?",
          options: ["Supervised", "Unsupervised", "Reinforcement", "Manual"],
          correctIndex: 2,
          explanation: "Trial & error with rewards = reinforcement learning!"
        }
      ]
    },
  ],
};

const ai_1_3: Lesson = {
  id: "ai-1-3",
  moduleId: "ai-1",
  title: "Data is the New Fuel",
  subtitle: "Feeding AI with data \u00b7 \u7528\u6570\u636e\u5582\u517b AI",
  icon: "\u26fd",
  xp: 15,
  duration: "18 min",
  order: 3,
  gradeRange: [4, 10],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      "type": "text",
      emoji: "\u26fd",
      content: `## ⛽ Data: AI's Breakfast, Lunch, and Dinner!

If AI is a race car 🏎️, then **data is the fuel**. No data = no AI. Bad data = bad AI!

🎯 **Learning Objectives · 学习目标:**
- Understand different types of data (numbers, text, images, sound)
- Learn how to collect and organize data
- Know why data quality matters more than quantity

> 🍳 **Cooking Analogy:** Data is like ingredients. Fresh ingredients = great dish. Rotten tomatoes... 🤢

🔑 **Key Takeaway:** Garbage in = garbage out!

👀 **Watch Out:** Biased data creates biased AI! Data must be DIVERSE.`
    },
    {
      "type": "code",
      emoji: "\ud83d\udcca",
      content: "## \ud83d\udcca Hands-On Data Collection",
      code: `# 📊 Data Collection & Organization
students = [
    {"name": "Alex", "age": 12, "height": 155, "fav_subject": "math", "hours_gaming": 3},
    {"name": "Bella", "age": 13, "height": 160, "fav_subject": "art", "hours_gaming": 1},
    {"name": "Charlie", "age": 11, "height": 148, "fav_subject": "science", "hours_gaming": 4},
    {"name": "Diana", "age": 12, "height": 152, "fav_subject": "math", "hours_gaming": 2},
    {"name": "Ethan", "age": 14, "height": 168, "fav_subject": "PE", "hours_gaming": 5},
    {"name": "Fiona", "age": 13, "height": 157, "fav_subject": "art", "hours_gaming": 1},
    {"name": "George", "age": 12, "height": 150, "fav_subject": "science", "hours_gaming": 3},
    {"name": "Hannah", "age": 11, "height": 145, "fav_subject": "math", "hours_gaming": 2},
]

ages = [s["age"] for s in students]
heights = [s["height"] for s in students]
gaming = [s["hours_gaming"] for s in students]

print("=== Quick Stats ===")
print(f"Age range:    {min(ages)} - {max(ages)}")
print(f"Avg height:   {sum(heights) / len(heights):.1f} cm")
print(f"Avg gaming:   {sum(gaming) / len(gaming):.1f} hrs/day")

subjects = {}
for s in students:
    subj = s["fav_subject"]
    subjects[subj] = subjects.get(subj, 0) + 1

print("\\n=== Favorite Subjects ===")
for subj, count in sorted(subjects.items(), key=lambda x: -x[1]):
    bar = "█" * (count * 3)
    print(f"  {subj:10s} {bar} ({count})")`
    },
    {
      "type": "quiz",
      content: "\ud83d\udcca Data Quiz",
      quiz: [
        {
          question: "Why is data called 'the new fuel' for AI?",
          options: ["It's expensive", "AI can't work without it", "It burns like gasoline", "It's rare"],
          correctIndex: 1,
          explanation: "Just like a car needs fuel, AI needs data to learn and make predictions!"
        },
        {
          question: "What does 'Garbage In, Garbage Out' mean?",
          options: ["AI makes trash", "Bad data leads to bad results", "AI needs recycling", "Data should be deleted"],
          correctIndex: 1,
          explanation: "If you feed AI bad or biased data, its predictions will be bad too!"
        },
        {
          question: "Which data type would you use to train a face recognition AI?",
          options: ["Numbers only", "Text files", "Images/photos", "Sound recordings"],
          correctIndex: 2,
          explanation: "Face recognition needs IMAGES to learn what faces look like!"
        }
      ]
    },
  ],
};

const ai_1_4: Lesson = {
  id: "ai-1-4",
  moduleId: "ai-1",
  title: "Your First AI: KNN Classifier",
  subtitle: "K-Nearest Neighbors \u00b7 K \u8fd1\u90bb\u7b97\u6cd5",
  icon: "\ud83c\udfaf",
  xp: 20,
  duration: "22 min",
  order: 4,
  gradeRange: [4, 10],
  difficulty: "beginner",
  skillLevel: "beginner",
  sections: [
    {
      "type": "text",
      emoji: "\ud83c\udfd8\ufe0f",
      content: `## 🏘️ The Neighborhood Algorithm

Imagine you move to a new neighborhood. You look at your **nearest neighbors** to learn what it's like! 🐕🐈

🎯 **Learning Objectives · 学习目标:**
- Understand K-Nearest Neighbors (KNN) algorithm
- Build a fruit classifier from scratch
- Learn about distance calculation and voting

**How KNN works:**
1. 📍 Plot all your data points
2. 🆕 Get a new, unknown point
3. 📏 Find the K closest neighbors
4. 🗳️ Take a vote — majority wins!

> 🏫 **School Analogy:** You're the new kid. The 3 closest kids all love Minecraft. You'd probably guess the whole table is a "Minecraft table"! That's KNN with K=3!

🔑 **Key Takeaway:** KNN = "Tell me who your neighbors are, and I'll tell you who you are!"

👀 **Watch Out:** Choosing K matters! Too small = noisy. Too large = everything looks the same!`
    },
    {
      "type": "code",
      emoji: "\ud83c\udf4e",
      content: "## \ud83c\udf4e Build a KNN Fruit Classifier from Scratch!",
      code: `# 🎯 KNN Fruit Classifier — Built from Scratch!
import math

def distance(point1, point2):
    total = 0
    for i in range(len(point1)):
        total += (point1[i] - point2[i]) ** 2
    return math.sqrt(total)

def knn_classify(training_data, new_point, k=3):
    distances = []
    for features, label in training_data:
        dist = distance(features, new_point)
        distances.append((dist, label))
    distances.sort(key=lambda x: x[0])
    neighbors = distances[:k]
    votes = {}
    for dist, label in neighbors:
        votes[label] = votes.get(label, 0) + 1
    winner = max(votes, key=votes.get)
    print(f"  Nearest {k} neighbors:")
    for dist, label in neighbors:
        print(f"    {label:10s} (distance: {dist:.2f})")
    print(f"  Winner: {winner}! 🏆")
    return winner

# Training data: (weight_grams, sweetness_1to10) → fruit
training_data = [
    ((150, 7), "apple"), ((160, 8), "apple"), ((140, 6), "apple"),
    ((200, 4), "orange"), ((190, 5), "orange"), ((210, 3), "orange"),
    ((120, 9), "banana"), ((110, 10), "banana"), ((130, 8), "banana"),
    ((80, 2), "lemon"), ((90, 1), "lemon"), ((85, 2), "lemon"),
]

print("=== 🍎 KNN Fruit Classifier ===\\n")
print("Mystery fruit 1: weight=155g, sweetness=7")
knn_classify(training_data, (155, 7), k=3)
print()
print("Mystery fruit 2: weight=195g, sweetness=4")
knn_classify(training_data, (195, 4), k=3)
print()

# Try different K values!
print("=== Effect of K ===")
print("Mystery: weight=170g, sweetness=6 (ambiguous!)")
for k in [1, 3, 5]:
    print(f"\\nK = {k}:")
    knn_classify(training_data, (170, 6), k=k)`,
      exercise: {
        prompt: "Add 'grape' data (small, very sweet) and classify: weight=30, sweetness=9",
        promptZh: "\u6dfb\u52a0 '\u8461\u8404' \u6570\u636e\u5e76\u5206\u7c7b",
        starterCode: `import math

def distance(p1, p2):
    return math.sqrt(sum((a-b)**2 for a,b in zip(p1,p2)))

def knn_classify(data, point, k=3):
    dists = [(distance(f, point), l) for f, l in data]
    dists.sort(key=lambda x: x[0])
    neighbors = dists[:k]
    votes = {}
    for d, l in neighbors:
        votes[l] = votes.get(l, 0) + 1
    return max(votes, key=votes.get)

training_data = [
    ((150, 7), "apple"), ((200, 4), "orange"),
    ((120, 9), "banana"), ((80, 2), "lemon"),
    # TODO: Add grape data (3 examples, small weight ~25-35, sweetness ~8-10)
]
result = knn_classify(training_data, (30, 9), k=3)
print(f"Classified as: {result}")`,
        expectedOutput: "Classified as: grape",
        hint: "Add entries like ((30, 9), 'grape'), ((25, 10), 'grape'), ((35, 8), 'grape')",
        hintZh: "\u6dfb\u52a0\u50cf ((30, 9), 'grape') \u8fd9\u6837\u7684\u6761\u76ee",
        solution: `import math
def distance(p1, p2):
    return math.sqrt(sum((a-b)**2 for a,b in zip(p1,p2)))
def knn_classify(data, point, k=3):
    dists = [(distance(f, point), l) for f, l in data]
    dists.sort(key=lambda x: x[0])
    neighbors = dists[:k]
    votes = {}
    for d, l in neighbors:
        votes[l] = votes.get(l, 0) + 1
    return max(votes, key=votes.get)
training_data = [
    ((150, 7), "apple"), ((200, 4), "orange"),
    ((120, 9), "banana"), ((80, 2), "lemon"),
    ((30, 9), "grape"), ((25, 10), "grape"), ((35, 8), "grape"),
]
result = knn_classify(training_data, (30, 9), k=3)
print(f"Classified as: {result}")`
      }
    },
    {
      "type": "quiz",
      content: "\ud83c\udfaf KNN Quiz",
      quiz: [
        {
          question: "In KNN, what does K represent?",
          options: ["Number of features", "Number of nearest neighbors to check", "Total data points", "Number of classes"],
          correctIndex: 1,
          explanation: "K = how many nearest neighbors vote on the classification!"
        },
        {
          question: "If K=3 and neighbors are: apple, apple, orange \u2014 prediction?",
          options: ["Orange", "Apple", "Banana", "Can't decide"],
          correctIndex: 1,
          explanation: "Majority vote: 2 apples vs 1 orange \u2192 Apple wins!"
        }
      ]
    },
  ],
};

const ai_2_1: Lesson = {
  id: "ai-2-1",
  moduleId: "ai-2",
  title: "Exploring Data",
  subtitle: "Statistics for AI \u00b7 AI \u7684\u7edf\u8ba1\u5b66\u57fa\u7840",
  icon: "\ud83d\udcca",
  xp: 15,
  duration: "20 min",
  order: 1,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udcca",
      content: `## 📊 Data Detective: Finding Clues in Numbers

🎯 **Learning Objectives · 学习目标:**
- Calculate mean, median, mode, and standard deviation
- Understand what these statistics MEAN in real life
- Create text-based histograms and scatter plots

> 🏀 **Sports Analogy:** A basketball coach studies STATS: points per game (mean), typical performance (median), consistency (standard deviation). That's data science!

🔑 **Key Takeaway:** Statistics summarize data so we can see the big picture.

👀 **Watch Out:** Mean can be misleading! If Bill Gates walks into a room, the "average" income skyrockets. That's why we need median too!`
    },
    {
      "type": "code",
      emoji: "\ud83d\udd22",
      content: "## \ud83d\udd22 Statistics from Scratch",
      code: `# 📊 Statistics from Scratch!
import math

def mean(data):
    return sum(data) / len(data)

def median(data):
    sorted_data = sorted(data)
    n = len(sorted_data)
    if n % 2 == 1:
        return sorted_data[n // 2]
    else:
        return (sorted_data[n // 2 - 1] + sorted_data[n // 2]) / 2

def mode(data):
    counts = {}
    for x in data:
        counts[x] = counts.get(x, 0) + 1
    return max(counts, key=counts.get)

def std_dev(data):
    avg = mean(data)
    variance = sum((x - avg) ** 2 for x in data) / len(data)
    return math.sqrt(variance)

scores = [85, 92, 78, 95, 88, 72, 90, 85, 93, 85, 79, 96, 82, 88, 91]

print("=== 📊 Test Score Statistics ===")
print(f"Mean:     {mean(scores):.1f}")
print(f"Median:   {median(scores)}")
print(f"Mode:     {mode(scores)}")
print(f"Std Dev:  {std_dev(scores):.1f}")
print(f"Range:    {max(scores) - min(scores)}")

# Score Distribution
print("\\n=== Distribution ===")
bins = [(60,70), (70,80), (80,90), (90,100)]
for low, high in bins:
    count = sum(1 for s in scores if low <= s < high)
    bar = "█" * (count * 3)
    print(f"  {low}-{high}: {bar} ({count})")

# Compare two datasets
print("\\n=== Class A vs Class B ===")
class_a = [85, 87, 86, 88, 84, 85, 86, 87, 85, 86]
class_b = [50, 100, 55, 95, 60, 90, 65, 85, 70, 95]
print(f"Class A: mean={mean(class_a):.1f}, std={std_dev(class_a):.1f}")
print(f"Class B: mean={mean(class_b):.1f}, std={std_dev(class_b):.1f}")
print("Same mean but VERY different spread!")`,
      exercise: {
        prompt: "Calculate mean, median, std dev for heights: [155, 160, 148, 172, 165, 158, 170, 152]",
        promptZh: "\u8ba1\u7b97\u8eab\u9ad8\u7684\u5e73\u5747\u503c\u3001\u4e2d\u4f4d\u6570\u548c\u6807\u51c6\u5dee",
        starterCode: `import math
heights = [155, 160, 148, 172, 165, 158, 170, 152]
avg = sum(heights) / len(heights)
print(f"Mean: {avg:.1f}")
# TODO: Calculate median and std dev`,
        expectedOutput: `Mean: 160.0
Median: 159.0
Std Dev: 7.9`,
        hint: "Sort first for median. For std dev: variance = avg of squared diffs from mean, then sqrt.",
        hintZh: "\u5148\u6392\u5e8f\u627e\u4e2d\u4f4d\u6570\u3002\u6807\u51c6\u5dee\uff1a\u65b9\u5dee\u5f00\u6839\u53f7\u3002",
        solution: `import math
heights = [155, 160, 148, 172, 165, 158, 170, 152]
avg = sum(heights) / len(heights)
print(f"Mean: {avg:.1f}")
s = sorted(heights)
n = len(s)
med = (s[n//2-1] + s[n//2]) / 2
print(f"Median: {med:.1f}")
var = sum((x - avg)**2 for x in heights) / len(heights)
print(f"Std Dev: {math.sqrt(var):.1f}")`
      }
    },
    {
      "type": "quiz",
      content: "\ud83d\udcca Statistics Quiz",
      quiz: [
        {
          question: "Scores [50, 50, 90, 90, 100]. What is the median?",
          options: ["50", "76", "90", "80"],
          correctIndex: 2,
          explanation: "Sorted middle value (3rd of 5) = 90!"
        },
        {
          question: "Which statistic tells you how 'spread out' data is?",
          options: ["Mean", "Median", "Mode", "Standard Deviation"],
          correctIndex: 3,
          explanation: "Standard deviation measures how far values are from the mean!"
        }
      ]
    },
  ],
};

const ai_2_2: Lesson = {
  id: "ai-2-2",
  moduleId: "ai-2",
  title: "Cleaning Messy Data",
  subtitle: "Handle missing values & outliers \u00b7 \u5904\u7406\u7f3a\u5931\u503c\u548c\u5f02\u5e38\u503c",
  icon: "\ud83e\uddf9",
  xp: 15,
  duration: "18 min",
  order: 2,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83e\uddf9",
      content: `## 🧹 The Dirty Data Challenge

Real-world data is MESSY! Missing values, typos, outliers — like cooking with missing ingredients! 🤢

🎯 **Learning Objectives · 学习目标:**
- Detect missing values in datasets
- Handle outliers
- Learn strategies: fill, remove, or flag bad data

🔑 **Key Takeaway:** Data cleaning takes 80% of a data scientist's time!

👀 **Watch Out:** Don't just delete all "weird" data — sometimes outliers are the most interesting discoveries!`
    },
    {
      "type": "code",
      emoji: "\ud83d\udd27",
      content: "## \ud83d\udd27 Cleaning Data \u2014 Hands On!",
      code: `# 🧹 Data Cleaning Workshop!
messy_data = [
    {"name": "Alice", "age": 12, "score": 85},
    {"name": "Bob", "age": 13, "score": None},     # Missing!
    {"name": "Carol", "age": 12, "score": 92},
    {"name": "Dave", "age": -5, "score": 78},       # Invalid!
    {"name": "Eve", "age": 11, "score": 350},       # Outlier!
    {"name": None, "age": 12, "score": 88},         # Missing name!
    {"name": "Frank", "age": 14, "score": 91},
    {"name": "Grace", "age": 13, "score": 76},
    {"name": "Hank", "age": 200, "score": 82},      # Invalid age!
]

print("=== 🔍 Step 1: Detect Problems ===")
for i, r in enumerate(messy_data):
    issues = []
    for key, value in r.items():
        if value is None:
            issues.append(f"MISSING {key}")
    if r["age"] is not None and (r["age"] < 5 or r["age"] > 20):
        issues.append(f"INVALID age={r['age']}")
    if r["score"] is not None and r["score"] > 100:
        issues.append(f"OUTLIER score={r['score']}")
    status = "✅" if not issues else "⚠️"
    name = r["name"] or "???"
    print(f"  {status} {name:8s} — {', '.join(issues) if issues else 'Clean!'}")

# Fix problems
valid_scores = [r["score"] for r in messy_data if r["score"] is not None and 0 <= r["score"] <= 100]
avg_score = sum(valid_scores) / len(valid_scores)
print(f"\\nAvg valid score: {avg_score:.1f}")

print("\\n=== 🔧 Step 2: Fix Problems ===")
cleaned = []
for r in messy_data:
    rec = dict(r)
    if rec["name"] is None: rec["name"] = "Unknown"
    if rec["score"] is None: rec["score"] = round(avg_score)
    if rec["score"] > 100: rec["score"] = 100
    if rec["age"] < 5 or rec["age"] > 20: rec["age"] = 12
    cleaned.append(rec)

print(f"\\n=== ✅ Cleaned ({len(cleaned)} records) ===")
for r in cleaned:
    print(f"  {r['name']:10s} Age:{r['age']:3d}  Score:{r['score']:3d}")`,
      exercise: {
        prompt: "Write a function that counts how many None values are in a dataset.",
        promptZh: "\u5199\u4e00\u4e2a\u51fd\u6570\u7edf\u8ba1\u6570\u636e\u96c6\u4e2d\u6709\u591a\u5c11\u4e2a None \u503c\u3002",
        starterCode: `data = [
    {"a": 1, "b": None, "c": 3},
    {"a": None, "b": 2, "c": None},
    {"a": 4, "b": 5, "c": 6},
]

def count_missing(dataset):
    # TODO: Count total None values
    pass

print(f"Missing values: {count_missing(data)}")`,
        expectedOutput: "Missing values: 3",
        hint: "Loop through each record, then each value. Count how many are None.",
        hintZh: "\u904d\u5386\u6bcf\u6761\u8bb0\u5f55\u7684\u6bcf\u4e2a\u503c\uff0c\u8ba1\u7b97 None \u7684\u4e2a\u6570\u3002",
        solution: `data = [
    {"a": 1, "b": None, "c": 3},
    {"a": None, "b": 2, "c": None},
    {"a": 4, "b": 5, "c": 6},
]
def count_missing(dataset):
    count = 0
    for record in dataset:
        for value in record.values():
            if value is None:
                count += 1
    return count
print(f"Missing values: {count_missing(data)}")`
      }
    },
    {
      "type": "quiz",
      content: "\ud83e\uddf9 Data Cleaning Quiz",
      quiz: [
        {
          question: "What percentage of a data scientist's time is spent cleaning data?",
          options: ["10%", "30%", "50%", "80%"],
          correctIndex: 3,
          explanation: "About 80% \u2014 the unglamorous but essential part!"
        },
        {
          question: "A student's age is -3. This is:",
          options: ["Missing data", "An outlier/invalid value", "Normal data", "A feature"],
          correctIndex: 1,
          explanation: "Age can't be negative \u2014 invalid value!"
        }
      ]
    },
  ],
};

const ai_2_3: Lesson = {
  id: "ai-2-3",
  moduleId: "ai-2",
  title: "Feature Engineering",
  subtitle: "Which features matter? \u00b7 \u54ea\u4e9b\u7279\u5f81\u91cd\u8981\uff1f",
  icon: "\ud83d\udd11",
  xp: 15,
  duration: "18 min",
  order: 3,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udd11",
      content: `## 🔑 Feature Engineering: The Secret Sauce of ML

A **feature** is a measurable property of your data. Choosing the RIGHT features is like choosing the right ingredients!

🎯 **Learning Objectives · 学习目标:**
- Understand what features are and why they matter
- Learn to select, create, and transform features
- See how bad features hurt model performance

> 🏠 **House Price Analogy:** Square footage, bedrooms → relevant. Owner's favorite color → irrelevant!

🔑 **Key Takeaway:** Feature engineering is where HUMANS add value to ML.

👀 **Watch Out:** More features ≠ better! Too many irrelevant features confuse the model.`
    },
    {
      "type": "code",
      emoji: "\ud83c\udfe0",
      content: "## \ud83c\udfe0 Feature Selection \u2014 What Matters for House Prices?",
      code: `# 🔑 Feature Engineering for House Prices
houses = [
    {"sqft": 1200, "beds": 2, "age": 20, "color": "blue", "price": 250000},
    {"sqft": 1800, "beds": 3, "age": 10, "color": "white", "price": 380000},
    {"sqft": 900, "beds": 1, "age": 40, "color": "red", "price": 180000},
    {"sqft": 2200, "beds": 4, "age": 5, "color": "blue", "price": 450000},
    {"sqft": 1500, "beds": 3, "age": 15, "color": "green", "price": 300000},
    {"sqft": 2500, "beds": 4, "age": 2, "color": "white", "price": 520000},
    {"sqft": 1000, "beds": 2, "age": 30, "color": "red", "price": 200000},
    {"sqft": 1600, "beds": 3, "age": 8, "color": "green", "price": 350000},
]

def correlation(x_vals, y_vals):
    n = len(x_vals)
    avg_x = sum(x_vals) / n
    avg_y = sum(y_vals) / n
    cov = sum((x - avg_x) * (y - avg_y) for x, y in zip(x_vals, y_vals)) / n
    std_x = (sum((x - avg_x)**2 for x in x_vals) / n) ** 0.5
    std_y = (sum((y - avg_y)**2 for y in y_vals) / n) ** 0.5
    if std_x == 0 or std_y == 0: return 0
    return cov / (std_x * std_y)

prices = [h["price"] for h in houses]
features = ["sqft", "beds", "age"]

print("=== 🏠 Feature Importance ===")
for feat in features:
    vals = [h[feat] for h in houses]
    corr = correlation(vals, prices)
    bar = "█" * int(abs(corr) * 20)
    sign = "+" if corr > 0 else "-"
    print(f"  {feat:6s}: {sign}{abs(corr):.3f} {bar}")

# Bad feature demo
print("\\n=== ❌ Color vs Price (BAD Feature) ===")
color_prices = {}
for h in houses:
    c = h["color"]
    if c not in color_prices: color_prices[c] = []
    color_prices[c].append(h["price"])
for color, p_list in color_prices.items():
    avg = sum(p_list) / len(p_list)
    print(f"  {color:6s}: avg \${avg:,.0f}  (n={len(p_list)})")
print("  → Color has NO consistent relationship with price! ❌")`
    },
    {
      "type": "quiz",
      content: "\ud83d\udd11 Feature Quiz",
      quiz: [
        {
          question: "What is a 'feature' in machine learning?",
          options: ["The output", "A measurable property used as input", "The algorithm", "The training speed"],
          correctIndex: 1,
          explanation: "A feature is an input property the model uses to learn patterns!"
        },
        {
          question: "Which feature is LEAST useful for predicting math scores?",
          options: ["Hours of study", "Previous test scores", "Shoe size", "Homework rate"],
          correctIndex: 2,
          explanation: "Shoe size has no connection to math ability!"
        }
      ]
    },
  ],
};

const ai_2_4: Lesson = {
  id: "ai-2-4",
  moduleId: "ai-2",
  title: "Data Visualization",
  subtitle: "Storytelling with data \u00b7 \u7528\u6570\u636e\u8bb2\u6545\u4e8b",
  icon: "\ud83d\udcc8",
  xp: 15,
  duration: "18 min",
  order: 4,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udcc8",
      content: `## 📈 Data Visualization: Seeing is Believing!

🎯 **Learning Objectives · 学习目标:**
- Create bar charts, histograms, and line charts with text
- Choose the right chart type
- Tell a compelling story with data

🔑 **Key Takeaway:** Always visualize data before building ML models!

👀 **Watch Out:** Misleading charts are everywhere! Truncated Y-axes can tell lies with true data.`
    },
    {
      "type": "code",
      emoji: "\ud83d\udcca",
      content: "## \ud83d\udcca Build Your Own Chart Library!",
      code: `# 📈 Text-Based Data Visualization

def bar_chart(labels, values, title="Bar Chart", max_width=30):
    print(f"\\n  {title}")
    print("  " + "─" * 45)
    max_val = max(values)
    for label, val in zip(labels, values):
        bar_len = int(val / max_val * max_width)
        bar = "█" * bar_len
        print(f"  {label:12s} │{bar} {val}")

def pie_chart(labels, values, title="Pie Chart"):
    print(f"\\n  {title}")
    print("  " + "─" * 45)
    total = sum(values)
    for label, val in sorted(zip(labels, values), key=lambda x: -x[1]):
        pct = val / total * 100
        blocks = int(pct / 2)
        print(f"  {label:12s} {'█' * blocks}{'░' * (50-blocks)} {pct:.1f}%")

# Subject scores
subjects = ["Math", "Science", "English", "Art", "PE", "Music"]
avg_scores = [82, 78, 85, 91, 88, 76]
bar_chart(subjects, avg_scores, "📊 Average Scores by Subject")

# Time spent
activities = ["Sleep", "School", "Homework", "Games", "Sports", "Other"]
hours = [8, 7, 3, 2, 2, 2]
pie_chart(activities, hours, "⏰ How Students Spend Their Day")

print("\\n📊 Choose the right chart:")
print("  📊 Bar chart → Compare categories")
print("  📈 Line chart → Show trends over time")
print("  🥧 Pie chart → Show proportions")`
    },
    {
      "type": "quiz",
      content: "\ud83d\udcc8 Visualization Quiz",
      quiz: [
        {
          question: "Which chart is best for temperature over months?",
          options: ["Pie chart", "Bar chart", "Line chart", "Scatter plot"],
          correctIndex: 2,
          explanation: "Line charts show TRENDS over time!"
        },
        {
          question: "Why visualize data BEFORE building ML models?",
          options: ["It looks cool", "To spot patterns, outliers, and errors", "It's required by law", "To make models faster"],
          correctIndex: 1,
          explanation: "Visualization reveals hidden patterns and problems!"
        }
      ]
    },
  ],
};

const ai_3_1: Lesson = {
  id: "ai-3-1",
  moduleId: "ai-3",
  title: "Linear Regression",
  subtitle: "Fit a line to predict prices \u00b7 \u7528\u76f4\u7ebf\u9884\u6d4b\u4ef7\u683c",
  icon: "\ud83d\udccf",
  xp: 20,
  duration: "22 min",
  order: 1,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udccf",
      content: `## 📏 Linear Regression: Drawing the Best Line

🎯 **Learning Objectives · 学习目标:**
- Understand what linear regression does
- Calculate slope and intercept from scratch
- Use the model to make predictions

> 📐 **Math Class:** Remember y = mx + b? That's LINEAR REGRESSION!

🔑 **Key Takeaway:** Linear regression finds the best straight line through your data to make predictions.

👀 **Watch Out:** Not everything is linear! If data curves, a straight line won't work well.`
    },
    {
      "type": "code",
      emoji: "\ud83d\udcd0",
      content: "## \ud83d\udcd0 Build Linear Regression from Scratch!",
      code: `# 📏 Linear Regression from Scratch!

def linear_regression(x_data, y_data):
    n = len(x_data)
    x_mean = sum(x_data) / n
    y_mean = sum(y_data) / n
    numerator = sum((x - x_mean) * (y - y_mean) for x, y in zip(x_data, y_data))
    denominator = sum((x - x_mean) ** 2 for x in x_data)
    m = numerator / denominator
    b = y_mean - m * x_mean
    return m, b

def predict(m, b, x):
    return m * x + b

def r_squared(x_data, y_data, m, b):
    y_mean = sum(y_data) / len(y_data)
    ss_tot = sum((y - y_mean) ** 2 for y in y_data)
    ss_res = sum((y - predict(m, b, x)) ** 2 for x, y in zip(x_data, y_data))
    return 1 - ss_res / ss_tot if ss_tot != 0 else 0

# House Size → Price
sizes = [800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400]
prices = [150, 200, 240, 280, 310, 360, 400, 430, 480]

m, b = linear_regression(sizes, prices)
r2 = r_squared(sizes, prices, m, b)

print("=== 🏠 House Price Predictor ===")
print(f"Formula: price = {m:.2f} × size + {b:.1f}")
print(f"R² = {r2:.4f} ({'Excellent!' if r2 > 0.9 else 'Good'})")

print("\\n=== 🔮 Predictions ===")
for size in [1500, 2600, 3000]:
    pred = predict(m, b, size)
    print(f"  {size} sqft → \${pred:.0f}k")`,
      exercise: {
        prompt: "Predict test score for 10 study hours. Data: hours=[1,2,3,4,5,6,7,8], scores=[52,58,65,73,78,84,90,95]",
        promptZh: "\u7528\u7ebf\u6027\u56de\u5f52\u4ece\u5b66\u4e60\u65f6\u95f4\u9884\u6d4b\u8003\u8bd5\u5206\u6570",
        starterCode: `hours = [1, 2, 3, 4, 5, 6, 7, 8]
scores = [52, 58, 65, 73, 78, 84, 90, 95]
# TODO: linear regression, predict for 10 hours`,
        expectedOutput: "",
        hint: "slope m = \u03a3(xi-x\u0304)(yi-\u0233) / \u03a3(xi-x\u0304)\u00b2, then b = \u0233 - m*x\u0304",
        hintZh: "\u659c\u7387 m \u516c\u5f0f\u8ba1\u7b97",
        solution: `hours = [1, 2, 3, 4, 5, 6, 7, 8]
scores = [52, 58, 65, 73, 78, 84, 90, 95]
n = len(hours)
h_mean = sum(hours) / n
s_mean = sum(scores) / n
m = sum((h-h_mean)*(s-s_mean) for h,s in zip(hours,scores)) / sum((h-h_mean)**2 for h in hours)
b = s_mean - m * h_mean
print(f"Formula: score = {m:.2f} × hours + {b:.1f}")
print(f"Prediction for 10 hours: {m * 10 + b:.1f}")`
      }
    },
    {
      "type": "quiz",
      content: "\ud83d\udccf Linear Regression Quiz",
      quiz: [
        {
          question: "In y = mx + b, what does m represent?",
          options: ["Starting value", "Slope (rate of change)", "Prediction", "Error"],
          correctIndex: 1,
          explanation: "m is the slope \u2014 how much y changes per unit x!"
        },
        {
          question: "R\u00b2 = 0.95 means the model explains what %?",
          options: ["5%", "50%", "95%", "9.5%"],
          correctIndex: 2,
          explanation: "R\u00b2 = 0.95 \u2192 95% of variation explained!"
        }
      ]
    },
  ],
};

const ai_3_2: Lesson = {
  id: "ai-3-2",
  moduleId: "ai-3",
  title: "Decision Trees",
  subtitle: "20 Questions with AI \u00b7 \u7528 AI \u73a920\u4e2a\u95ee\u9898",
  icon: "\ud83c\udf33",
  xp: 20,
  duration: "22 min",
  order: 2,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83c\udf33",
      content: `## 🌳 Decision Trees: Playing 20 Questions!

🎯 **Learning Objectives · 学习目标:**
- Understand how decision trees split data
- Build a simple decision tree classifier
- Learn about "information gain"

> 🎮 A decision tree is like a "Choose Your Own Adventure" book!

🔑 **Key Takeaway:** Decision trees ask yes/no questions about features to classify data.

👀 **Watch Out:** Very deep trees memorize training data (overfitting)!`
    },
    {
      "type": "code",
      emoji: "\ud83c\udf33",
      content: "## \ud83c\udf33 Build a Decision Tree from Scratch!",
      code: `# 🌳 Decision Tree Classifier
import math

def entropy(labels):
    n = len(labels)
    if n == 0: return 0
    counts = {}
    for l in labels:
        counts[l] = counts.get(l, 0) + 1
    ent = 0
    for count in counts.values():
        p = count / n
        if p > 0: ent -= p * math.log2(p)
    return ent

def best_split(data, features, target):
    labels = [d[target] for d in data]
    base_ent = entropy(labels)
    best_gain, best_feat, best_thresh = 0, None, None
    for feat in features:
        values = sorted(set(d[feat] for d in data))
        for i in range(len(values) - 1):
            thresh = (values[i] + values[i+1]) / 2
            left = [d[target] for d in data if d[feat] <= thresh]
            right = [d[target] for d in data if d[feat] > thresh]
            n = len(data)
            gain = base_ent - (len(left)/n * entropy(left) + len(right)/n * entropy(right))
            if gain > best_gain:
                best_gain, best_feat, best_thresh = gain, feat, thresh
    return best_feat, best_thresh, best_gain

def build_tree(data, features, target, depth=0, max_depth=3):
    labels = [d[target] for d in data]
    if len(set(labels)) == 1:
        return {"leaf": True, "label": labels[0], "count": len(labels)}
    if depth >= max_depth or not features:
        counts = {}
        for l in labels: counts[l] = counts.get(l, 0) + 1
        return {"leaf": True, "label": max(counts, key=counts.get), "count": len(labels)}
    feat, thresh, gain = best_split(data, features, target)
    if feat is None:
        counts = {}
        for l in labels: counts[l] = counts.get(l, 0) + 1
        return {"leaf": True, "label": max(counts, key=counts.get), "count": len(labels)}
    left = [d for d in data if d[feat] <= thresh]
    right = [d for d in data if d[feat] > thresh]
    return {
        "leaf": False, "feature": feat, "threshold": thresh,
        "left": build_tree(left, features, target, depth+1, max_depth),
        "right": build_tree(right, features, target, depth+1, max_depth),
    }

def print_tree(tree, indent=""):
    if tree["leaf"]:
        print(f"{indent}🏷️ → {tree['label']} (n={tree['count']})")
    else:
        print(f"{indent}🔀 {tree['feature']} <= {tree['threshold']:.1f}?")
        print(f"{indent}  YES:"); print_tree(tree["left"], indent + "    ")
        print(f"{indent}  NO:"); print_tree(tree["right"], indent + "    ")

def predict(tree, sample):
    if tree["leaf"]: return tree["label"]
    if sample[tree["feature"]] <= tree["threshold"]:
        return predict(tree["left"], sample)
    return predict(tree["right"], sample)

animals = [
    {"legs": 4, "size": 60, "furry": 1, "animal": "dog"},
    {"legs": 4, "size": 5, "furry": 1, "animal": "cat"},
    {"legs": 0, "size": 2, "furry": 0, "animal": "fish"},
    {"legs": 2, "size": 3, "furry": 0, "animal": "bird"},
    {"legs": 4, "size": 50, "furry": 1, "animal": "dog"},
    {"legs": 4, "size": 8, "furry": 1, "animal": "cat"},
    {"legs": 0, "size": 5, "furry": 0, "animal": "fish"},
    {"legs": 2, "size": 1, "furry": 0, "animal": "bird"},
]

tree = build_tree(animals, ["legs", "size", "furry"], "animal")
print("=== 🌳 Animal Decision Tree ===\\n")
print_tree(tree)

print("\\n=== Predictions ===")
for t in [{"legs": 4, "size": 30, "furry": 1}, {"legs": 0, "size": 3, "furry": 0}]:
    print(f"  {t} → {predict(tree, t)}")`
    },
    {
      "type": "quiz",
      content: "\ud83c\udf33 Decision Tree Quiz",
      quiz: [
        {
          question: "What is 'entropy' in a decision tree?",
          options: ["Tree height", "How 'mixed' a group is", "Number of leaves", "Accuracy"],
          correctIndex: 1,
          explanation: "Entropy measures how mixed the labels are!"
        },
        {
          question: "Why do decision trees sometimes 'overfit'?",
          options: ["Too simple", "Memorize training data by going too deep", "Ignore features", "Too slow"],
          correctIndex: 1,
          explanation: "Deep trees memorize every training example!"
        }
      ]
    },
  ],
};

const ai_3_3: Lesson = {
  id: "ai-3-3",
  moduleId: "ai-3",
  title: "Logistic Regression & SVM",
  subtitle: "Drawing decision boundaries \u00b7 \u753b\u51b3\u7b56\u8fb9\u754c",
  icon: "\u2702\ufe0f",
  xp: 20,
  duration: "22 min",
  order: 3,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\u2702\ufe0f",
      content: `## ✂️ Logistic Regression: Yes or No?

Linear regression predicts NUMBERS. But what about YES/NO? "Is this spam?" That's **logistic regression**!

🎯 **Learning Objectives · 学习目标:**
- Understand classification vs regression
- Learn the sigmoid function
- Draw decision boundaries

🔑 **Key Takeaway:** Logistic regression converts any number into a 0-1 probability using the sigmoid function.

👀 **Watch Out:** "Logistic Regression" has "regression" in the name, but it's for CLASSIFICATION!`
    },
    {
      "type": "code",
      emoji: "\ud83d\udcd0",
      content: "## \ud83d\udcd0 Logistic Regression from Scratch!",
      code: `# ✂️ Logistic Regression from Scratch!
import math

def sigmoid(z):
    if z > 500: return 1.0
    if z < -500: return 0.0
    return 1 / (1 + math.exp(-z))

# Show the sigmoid curve
print("=== The Sigmoid Function ===")
for z in range(-6, 7):
    prob = sigmoid(z)
    bar = "█" * int(prob * 30)
    print(f"  z={z:+3d}: {prob:.3f} |{bar}")

# Train a spam classifier
def logistic_train(X, y, lr=0.01, epochs=500):
    n_feat = len(X[0])
    weights = [0.0] * n_feat
    bias = 0.0
    for epoch in range(epochs):
        for xi, yi in zip(X, y):
            z = sum(w * x for w, x in zip(weights, xi)) + bias
            pred = sigmoid(z)
            error = pred - yi
            for j in range(n_feat):
                weights[j] -= lr * error * xi[j]
            bias -= lr * error
    return weights, bias

# Features: [num_links, num_caps, length, has_money_word]
train_X = [
    [5, 10, 50, 1], [0, 1, 100, 0], [8, 15, 30, 1], [1, 0, 150, 0],
    [6, 12, 40, 1], [0, 2, 200, 0], [3, 8, 60, 1], [1, 1, 180, 0],
]
train_y = [1, 0, 1, 0, 1, 0, 1, 0]

weights, bias = logistic_train(train_X, train_y)

print("\\n=== 📧 Spam Classifier ===")
test_emails = [
    ([7, 13, 35, 1], "FREE MONEY CLICK NOW!!!"),
    ([0, 1, 120, 0], "Hey, want to grab lunch?"),
    ([3, 5, 80, 1], "Special offer just for you!"),
]
for features, desc in test_emails:
    z = sum(w*x for w,x in zip(weights, features)) + bias
    prob = sigmoid(z)
    label = "🚫 SPAM" if prob > 0.5 else "✅ Not Spam"
    print(f"  '{desc}' → {prob:.1%} spam → {label}")`,
      exercise: {
        prompt: "What is sigmoid(0)? sigmoid(5)? sigmoid(-5)?",
        promptZh: "sigmoid(0)\u3001sigmoid(5)\u3001sigmoid(-5) \u5206\u522b\u662f\u591a\u5c11\uff1f",
        starterCode: `import math
def sigmoid(z):
    return 1 / (1 + math.exp(-z))
print(f"sigmoid(0)  = {sigmoid(0):.4f}")
print(f"sigmoid(5)  = ???")
print(f"sigmoid(-5) = ???")`,
        expectedOutput: `sigmoid(0)  = 0.5000
sigmoid(5)  = 0.9933
sigmoid(-5) = 0.0067`,
        hint: "Just call sigmoid(5) and sigmoid(-5)!",
        hintZh: "\u76f4\u63a5\u8c03\u7528 sigmoid(5) \u548c sigmoid(-5)\uff01",
        solution: `import math
def sigmoid(z):
    return 1 / (1 + math.exp(-z))
print(f"sigmoid(0)  = {sigmoid(0):.4f}")
print(f"sigmoid(5)  = {sigmoid(5):.4f}")
print(f"sigmoid(-5) = {sigmoid(-5):.4f}")`
      }
    },
    {
      "type": "quiz",
      content: "\u2702\ufe0f Classification Quiz",
      quiz: [
        {
          question: "What does the sigmoid function output?",
          options: ["Any number", "Only 0 or 1", "A value between 0 and 1", "Negative numbers"],
          correctIndex: 2,
          explanation: "Sigmoid squishes any number into (0, 1)!"
        },
        {
          question: "If sigmoid output is 0.8 for spam classifier, what does it mean?",
          options: ["80% not spam", "80% likely spam", "8 spam emails", "Model is 80% accurate"],
          correctIndex: 1,
          explanation: "0.8 = 80% probability of being spam!"
        }
      ]
    },
  ],
};

const ai_3_4: Lesson = {
  id: "ai-3-4",
  moduleId: "ai-3",
  title: "K-Means Clustering",
  subtitle: "Unsupervised learning \u00b7 \u65e0\u76d1\u7763\u5b66\u4e60",
  icon: "\ud83c\udfa8",
  xp: 20,
  duration: "22 min",
  order: 4,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83c\udfa8",
      content: `## 🎨 K-Means: Grouping Without Labels!

Imagine dumping M&Ms on a table. You'd sort by COLOR — that's clustering!

🎯 **Learning Objectives · 学习目标:**
- Understand unsupervised learning (no labels!)
- Learn the K-Means algorithm step by step
- See clustering in action

🔑 **Key Takeaway:** K-Means groups data into K clusters by finding natural groupings — no labels needed!

👀 **Watch Out:** You must choose K yourself! Wrong K = bad results.`
    },
    {
      "type": "code",
      emoji: "\ud83c\udfaf",
      content: "## \ud83c\udfaf K-Means from Scratch!",
      code: `# 🎨 K-Means Clustering from Scratch!
import math, random
random.seed(42)

def distance(p1, p2):
    return math.sqrt(sum((a-b)**2 for a, b in zip(p1, p2)))

def kmeans(data, k, max_iter=20):
    centroids = random.sample(data, k)
    for iteration in range(max_iter):
        clusters = [[] for _ in range(k)]
        for point in data:
            dists = [distance(point, c) for c in centroids]
            clusters[dists.index(min(dists))].append(point)
        new_centroids = []
        for cluster in clusters:
            if cluster:
                center = tuple(sum(dim)/len(cluster) for dim in zip(*cluster))
                new_centroids.append(center)
            else:
                new_centroids.append(centroids[len(new_centroids)])
        moved = sum(distance(o, n) for o, n in zip(centroids, new_centroids))
        centroids = new_centroids
        if moved < 0.001:
            print(f"  Converged at iteration {iteration + 1}!")
            break
    return centroids, clusters

# Generate 3 groups of students (math_score, art_score)
data = []
for _ in range(8): data.append((round(random.gauss(85, 5), 1), round(random.gauss(40, 5), 1)))
for _ in range(8): data.append((round(random.gauss(45, 5), 1), round(random.gauss(88, 5), 1)))
for _ in range(8): data.append((round(random.gauss(65, 5), 1), round(random.gauss(65, 5), 1)))

print(f"=== 🎨 K-Means Clustering ({len(data)} students) ===\\n")
centroids, clusters = kmeans(data, k=3)

symbols = ["🔴", "🔵", "🟢"]
for i, (cent, cluster) in enumerate(zip(centroids, clusters)):
    print(f"\\n{symbols[i]} Cluster {i+1}: {len(cluster)} students")
    print(f"  Center: math={cent[0]:.1f}, art={cent[1]:.1f}")
    for p in cluster[:3]:
        print(f"    ({p[0]:.1f}, {p[1]:.1f})")
    if len(cluster) > 3: print(f"    ... and {len(cluster)-3} more")`
    },
    {
      "type": "quiz",
      content: "\ud83c\udfa8 K-Means Quiz",
      quiz: [
        {
          question: "K-Means is which type of learning?",
          options: ["Supervised", "Unsupervised", "Reinforcement", "Semi-supervised"],
          correctIndex: 1,
          explanation: "K-Means uses NO labels \u2014 finds groups on its own!"
        },
        {
          question: "What does K represent in K-Means?",
          options: ["Data points", "Features", "Number of clusters", "Iterations"],
          correctIndex: 2,
          explanation: "K is how many groups you want to find!"
        }
      ]
    },
  ],
};

const ai_3_5: Lesson = {
  id: "ai-3-5",
  moduleId: "ai-3",
  title: "Model Evaluation",
  subtitle: "How good is your model? \u00b7 \u4f60\u7684\u6a21\u578b\u6709\u591a\u597d\uff1f",
  icon: "\ud83d\udccb",
  xp: 20,
  duration: "20 min",
  order: 5,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udccb",
      content: `## 📋 Measuring Model Performance

🎯 **Learning Objectives · 学习目标:**
- Understand accuracy, precision, recall, and F1 score
- Build a confusion matrix
- Know when each metric matters

> 🏥 **Hospital Analogy:** A COVID test saying "negative" for EVERYONE has 95% accuracy if only 5% have COVID. But it MISSES every sick person!

🔑 **Key Takeaway:** Different problems need different metrics. Spam filter → precision; disease detector → recall.

👀 **Watch Out:** High accuracy can be misleading with imbalanced data!`
    },
    {
      "type": "code",
      emoji: "\ud83d\udcca",
      content: "## \ud83d\udcca Confusion Matrix & Metrics",
      code: `# 📋 Model Evaluation from Scratch!

def evaluate(actual, predicted):
    tp = fp = tn = fn = 0
    for a, p in zip(actual, predicted):
        if a == 1 and p == 1: tp += 1
        elif a == 0 and p == 1: fp += 1
        elif a == 0 and p == 0: tn += 1
        else: fn += 1
    accuracy = (tp + tn) / (tp + fp + tn + fn)
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0
    f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0
    return tp, fp, tn, fn, accuracy, precision, recall, f1

# Spam Filter Results
actual =    [1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0]
predicted = [1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1]

tp, fp, tn, fn, acc, prec, rec, f1 = evaluate(actual, predicted)

print("=== 📧 Spam Filter Evaluation ===\\n")
print("              Predicted")
print("           Spam  Not-Spam")
print(f"  Actual Spam  │ TP={tp:2d} │ FN={fn:2d} │")
print(f"  Actual Ham   │ FP={fp:2d} │ TN={tn:2d} │")
print(f"\\nAccuracy:  {acc:.1%}")
print(f"Precision: {prec:.1%}")
print(f"Recall:    {rec:.1%}")
print(f"F1 Score:  {f1:.1%}")`,
      exercise: {
        prompt: "Evaluate: actual=[1,1,1,1,0,0,0,0,0,0], predicted=[1,1,0,0,0,0,0,0,0,1]. Find accuracy, precision, recall.",
        promptZh: "\u8ba1\u7b97\u51c6\u786e\u7387\u3001\u7cbe\u786e\u7387\u548c\u53ec\u56de\u7387",
        starterCode: `actual =    [1,1,1,1,0,0,0,0,0,0]
predicted = [1,1,0,0,0,0,0,0,0,1]
# TODO: Count TP, FP, TN, FN and calculate metrics`,
        expectedOutput: `Accuracy: 70.0%
Precision: 66.7%
Recall: 50.0%`,
        hint: "TP: both 1. FP: actual=0, pred=1. FN: actual=1, pred=0. TN: both 0.",
        hintZh: "TP: \u4e24\u4e2a1\u3002FP: \u5b9e\u96450\u9884\u6d4b1\u3002FN: \u5b9e\u96451\u9884\u6d4b0\u3002TN: \u4e24\u4e2a0\u3002",
        solution: `actual =    [1,1,1,1,0,0,0,0,0,0]
predicted = [1,1,0,0,0,0,0,0,0,1]
tp = fp = tn = fn = 0
for a, p in zip(actual, predicted):
    if a==1 and p==1: tp += 1
    elif a==0 and p==1: fp += 1
    elif a==0 and p==0: tn += 1
    else: fn += 1
print(f"Accuracy: {(tp+tn)/len(actual):.1%}")
print(f"Precision: {tp/(tp+fp):.1%}")
print(f"Recall: {tp/(tp+fn):.1%}")`
      }
    },
    {
      "type": "quiz",
      content: "\ud83d\udccb Evaluation Quiz",
      quiz: [
        {
          question: "A spam filter catches 90% of spam but flags 20% of good emails. What's the problem?",
          options: ["Low accuracy", "Low recall", "Low precision", "Low F1"],
          correctIndex: 2,
          explanation: "Flagging good emails = False Positives = low precision!"
        },
        {
          question: "For a cancer detector, which metric is MOST important?",
          options: ["Precision", "Recall", "Accuracy", "Speed"],
          correctIndex: 1,
          explanation: "Missing cancer (False Negative) is dangerous! Recall catches cases."
        }
      ]
    },
  ],
};

const ai_3_6: Lesson = {
  id: "ai-3-6",
  moduleId: "ai-3",
  title: "Overfitting & Bias-Variance",
  subtitle: "Why models fail \u00b7 \u6a21\u578b\u4e3a\u4f55\u5931\u8d25",
  icon: "\u2696\ufe0f",
  xp: 20,
  duration: "20 min",
  order: 6,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\u2696\ufe0f",
      content: `## ⚖️ The Goldilocks Problem

🎯 **Learning Objectives · 学习目标:**
- Understand overfitting vs underfitting
- Learn the bias-variance tradeoff
- Know how to split data into training and test sets

> 📝 **Exam Analogy:** Overfitting = memorizing practice test answers. You ace the practice but bomb the real one!

🔑 **Key Takeaway:** Always test on data the model has NEVER seen!

👀 **Watch Out:** 100% training accuracy is suspicious — it probably memorized everything!`
    },
    {
      "type": "code",
      emoji: "\ud83d\udcca",
      content: "## \ud83d\udcca Overfitting Demo",
      code: `# ⚖️ Overfitting Demo
import random
random.seed(42)

x_data = list(range(1, 21))
y_data = [2 * x + 3 + random.gauss(0, 3) for x in x_data]

train_x, train_y = x_data[:14], y_data[:14]
test_x, test_y = x_data[14:], y_data[14:]

# Model 1: Underfitting (constant)
pred_const = sum(train_y) / len(train_y)
train_err_1 = sum((y - pred_const)**2 for y in train_y) / len(train_y)
test_err_1 = sum((y - pred_const)**2 for y in test_y) / len(test_y)

# Model 2: Just Right (linear)
n = len(train_x)
xm = sum(train_x) / n
ym = sum(train_y) / n
m = sum((x-xm)*(y-ym) for x,y in zip(train_x, train_y)) / sum((x-xm)**2 for x in train_x)
b = ym - m * xm
train_err_2 = sum((y-(m*x+b))**2 for x,y in zip(train_x, train_y)) / len(train_x)
test_err_2 = sum((y-(m*x+b))**2 for x,y in zip(test_x, test_y)) / len(test_x)

# Model 3: Overfit (memorize)
lookup = dict(zip(train_x, train_y))
train_err_3 = 0
test_err_3 = sum((y-lookup.get(x, pred_const))**2 for x,y in zip(test_x, test_y)) / len(test_y)

print(f"{'Model':<20s} {'Train Err':>10s} {'Test Err':>10s}")
print("─" * 45)
print(f"{'Constant (underfit)':<20s} {train_err_1:>10.2f} {test_err_1:>10.2f} 📉")
print(f"{'Linear (just right)':<20s} {train_err_2:>10.2f} {test_err_2:>10.2f} ✅")
print(f"{'Memorize (overfit)':<20s} {train_err_3:>10.2f} {test_err_3:>10.2f} 📈")
print("\\n💡 The gap between train and test error = overfitting signal!")`
    },
    {
      "type": "quiz",
      content: "\u2696\ufe0f Overfitting Quiz",
      quiz: [
        {
          question: "99% train accuracy, 50% test accuracy. What's happening?",
          options: ["Underfitting", "Overfitting", "Perfect model", "Not enough data"],
          correctIndex: 1,
          explanation: "Big gap = overfitting! Model memorized training data."
        },
        {
          question: "What's the purpose of a test set?",
          options: ["Train the model", "Evaluate on unseen data", "Increase accuracy", "Speed up training"],
          correctIndex: 1,
          explanation: "Test set simulates 'real world' data the model has never seen!"
        }
      ]
    },
  ],
};

const ai_4_1: Lesson = {
  id: "ai-4-1",
  moduleId: "ai-4",
  title: "The Perceptron",
  subtitle: "A single neuron \u00b7 \u5355\u4e2a\u795e\u7ecf\u5143",
  icon: "\u26a1",
  xp: 20,
  duration: "22 min",
  order: 1,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\u26a1",
      content: `## ⚡ The Perceptron: One Tiny Neuron

Your brain has ~86 BILLION neurons. A **perceptron** is an artificial version of ONE neuron!

🎯 **Learning Objectives · 学习目标:**
- Understand how a single artificial neuron works
- Implement AND, OR gates with a perceptron
- See why XOR is impossible with one neuron

> 🧠 **Brain Analogy:** A neuron is a voting system. Inputs are voters, weights are how much each matters. If total vote > threshold — it FIRES!

🔑 **Key Takeaway:** output = 1 if (w1*x1 + w2*x2 + bias > 0) else 0

👀 **Watch Out:** A single perceptron can only learn LINEAR boundaries — can't solve XOR!`
    },
    {
      "type": "code",
      emoji: "\ud83e\udde0",
      content: "## \ud83e\udde0 Build a Perceptron \u2014 AND, OR, XOR!",
      code: `# ⚡ The Perceptron — From Scratch!

def perceptron(inputs, weights, bias):
    total = sum(x * w for x, w in zip(inputs, weights)) + bias
    return 1 if total > 0 else 0

def train_perceptron(data, lr=0.1, epochs=100):
    weights = [0.0, 0.0]
    bias = 0.0
    for epoch in range(epochs):
        errors = 0
        for inputs, target in data:
            output = perceptron(inputs, weights, bias)
            error = target - output
            if error != 0:
                errors += 1
                weights[0] += lr * error * inputs[0]
                weights[1] += lr * error * inputs[1]
                bias += lr * error
        if errors == 0:
            print(f"  ✅ Converged at epoch {epoch + 1}!")
            break
    return weights, bias

def test_gate(name, data, weights, bias):
    print(f"\\n=== {name} Gate ===")
    print(f"  Weights: {[round(w,2) for w in weights]}, Bias: {round(bias,2)}")
    all_correct = True
    for inputs, target in data:
        output = perceptron(inputs, weights, bias)
        status = "✅" if output == target else "❌"
        if output != target: all_correct = False
        print(f"  {inputs} → {output} (expected {target}) {status}")
    return all_correct

# AND Gate
and_data = [([0,0], 0), ([0,1], 0), ([1,0], 0), ([1,1], 1)]
print("Training AND gate...")
w, b = train_perceptron(and_data)
test_gate("AND", and_data, w, b)

# OR Gate
or_data = [([0,0], 0), ([0,1], 1), ([1,0], 1), ([1,1], 1)]
print("\\nTraining OR gate...")
w, b = train_perceptron(or_data)
test_gate("OR", or_data, w, b)

# XOR Gate (will FAIL!)
xor_data = [([0,0], 0), ([0,1], 1), ([1,0], 1), ([1,1], 0)]
print("\\nTraining XOR gate...")
w, b = train_perceptron(xor_data, epochs=1000)
success = test_gate("XOR", xor_data, w, b)
if not success:
    print("\\n🧠 XOR CANNOT be learned by a single perceptron!")
    print("   That's why we need NEURAL NETWORKS! 🧠💡")`
    },
    {
      "type": "quiz",
      content: "\u26a1 Perceptron Quiz",
      quiz: [
        {
          question: "Why can't a single perceptron learn XOR?",
          options: ["Too slow", "XOR needs a non-linear boundary", "Too many inputs", "Can't learn anything"],
          correctIndex: 1,
          explanation: "XOR requires a curved boundary \u2014 single perceptron only draws straight lines!"
        },
        {
          question: "What does a perceptron's 'bias' do?",
          options: ["Makes it unfair", "Shifts the decision boundary", "Slows training", "Adds inputs"],
          correctIndex: 1,
          explanation: "Bias shifts the threshold!"
        }
      ]
    },
  ],
};

const ai_4_2: Lesson = {
  id: "ai-4-2",
  moduleId: "ai-4",
  title: "Building a Neural Network",
  subtitle: "Layers, activations & forward prop \u00b7 \u5c42\u3001\u6fc0\u6d3b\u51fd\u6570\u548c\u524d\u5411\u4f20\u64ad",
  icon: "\ud83c\udfd7\ufe0f",
  xp: 25,
  duration: "25 min",
  order: 2,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83c\udfd7\ufe0f",
      content: `## 🏗️ Building a Brain: Multi-Layer Neural Networks

One perceptron can't solve XOR. But STACK them? That's a neural network!

🎯 **Learning Objectives · 学习目标:**
- Understand network architecture (input → hidden → output)
- Learn activation functions (ReLU, Sigmoid)
- Build forward propagation from scratch

> 🏭 **Factory Analogy:** Input layer = raw materials, Hidden layers = workers processing, Output layer = finished product!

🔑 **Key Takeaway:** Neural networks are layers of simple neurons that together learn complex patterns.

👀 **Watch Out:** More layers ≠ always better! Deeper networks need more data.`
    },
    {
      "type": "code",
      emoji: "\ud83e\udde0",
      content: "## \ud83e\udde0 Build a Neural Network from Scratch!",
      code: `# 🏗️ Neural Network from Scratch!
import math, random
random.seed(42)

def sigmoid(x):
    if x > 500: return 1.0
    if x < -500: return 0.0
    return 1 / (1 + math.exp(-x))

def relu(x):
    return max(0, x)

class NeuralNetwork:
    def __init__(self, layer_sizes):
        self.layers = []
        for i in range(len(layer_sizes) - 1):
            layer = {
                "weights": [[random.gauss(0, 1) for _ in range(layer_sizes[i])]
                           for _ in range(layer_sizes[i+1])],
                "biases": [random.gauss(0, 1) for _ in range(layer_sizes[i+1])],
            }
            self.layers.append(layer)
    
    def forward(self, inputs):
        current = inputs
        self.activations = [inputs]
        for i, layer in enumerate(self.layers):
            next_layer = []
            for j in range(len(layer["biases"])):
                total = sum(w * x for w, x in zip(layer["weights"][j], current))
                total += layer["biases"][j]
                if i == len(self.layers) - 1:
                    next_layer.append(sigmoid(total))
                else:
                    next_layer.append(relu(total))
            current = next_layer
            self.activations.append(current)
        return current

# Create: 2 inputs → 4 hidden → 1 output
nn = NeuralNetwork([2, 4, 1])

print("Network: 2 inputs → 4 hidden → 1 output")
print("\\n=== Forward Pass (untrained) ===")
for inp in [[0,0], [0,1], [1,0], [1,1]]:
    output = nn.forward(inp)
    print(f"  {inp} → {output[0]:.4f}")

print("\\n🧠 Random outputs — we haven't TRAINED it yet!")
print("   Next lesson: backpropagation! 🔙")`
    },
    {
      "type": "quiz",
      content: "\ud83c\udfd7\ufe0f NN Architecture Quiz",
      quiz: [
        {
          question: "What does the hidden layer do?",
          options: ["Nothing", "Transforms inputs to learn complex patterns", "Stores training data", "Shows output"],
          correctIndex: 1,
          explanation: "Hidden layers transform and combine features!"
        },
        {
          question: "relu(-5) = ?",
          options: ["-5", "5", "0", "1"],
          correctIndex: 2,
          explanation: "ReLU = max(0, x). relu(-5) = max(0, -5) = 0!"
        }
      ]
    },
  ],
};

const ai_4_3: Lesson = {
  id: "ai-4-3",
  moduleId: "ai-4",
  title: "Backpropagation",
  subtitle: "How networks learn \u00b7 \u7f51\u7edc\u5982\u4f55\u5b66\u4e60",
  icon: "\ud83d\udd19",
  xp: 25,
  duration: "25 min",
  order: 3,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udd19",
      content: `## 🔙 Backpropagation: The Learning Algorithm

🎯 **Learning Objectives · 学习目标:**
- Understand gradient descent (ball rolling downhill)
- Learn how backpropagation adjusts weights
- Train a network to solve XOR

> ⛰️ **Mountain Analogy:** Blindfolded on a mountain, you feel the slope and step downhill. That's gradient descent!

🔑 **Key Takeaway:** Backprop = compute error → find which weights caused it → adjust them → repeat!

👀 **Watch Out:** Learning rate matters! Too big = overshoot. Too small = takes forever.`
    },
    {
      "type": "code",
      emoji: "\ud83d\udcc9",
      content: "## \ud83d\udcc9 Train a Network to Solve XOR!",
      code: `# 🔙 Backpropagation — Solve XOR!
import math, random
random.seed(42)

def sigmoid(x):
    if x > 500: return 1.0
    if x < -500: return 0.0
    return 1 / (1 + math.exp(-x))

def sigmoid_deriv(x):
    s = sigmoid(x)
    return s * (1 - s)

class SimpleNN:
    def __init__(self):
        self.wh = [[random.gauss(0,1) for _ in range(2)] for _ in range(4)]
        self.bh = [random.gauss(0,1) for _ in range(4)]
        self.wo = [[random.gauss(0,1) for _ in range(4)]]
        self.bo = [random.gauss(0,1)]
    
    def forward(self, x):
        self.hr = [sum(w*xi for w,xi in zip(self.wh[j],x))+self.bh[j] for j in range(4)]
        self.ho = [sigmoid(z) for z in self.hr]
        self.or_ = [sum(w*h for w,h in zip(self.wo[0],self.ho))+self.bo[0]]
        self.out = [sigmoid(z) for z in self.or_]
        return self.out[0]
    
    def train(self, X, y, lr=1.0, epochs=5000):
        for epoch in range(epochs):
            total_loss = 0
            for xi, yi in zip(X, y):
                pred = self.forward(xi)
                error = pred - yi
                total_loss += error**2
                d_out = error * sigmoid_deriv(self.or_[0])
                d_hidden = [d_out*self.wo[0][j]*sigmoid_deriv(self.hr[j]) for j in range(4)]
                for j in range(4):
                    self.wo[0][j] -= lr * d_out * self.ho[j]
                self.bo[0] -= lr * d_out
                for j in range(4):
                    for k in range(2):
                        self.wh[j][k] -= lr * d_hidden[j] * xi[k]
                    self.bh[j] -= lr * d_hidden[j]
            if epoch % 1000 == 0:
                print(f"  Epoch {epoch:5d}: loss = {total_loss:.6f}")

nn = SimpleNN()
X = [[0,0], [0,1], [1,0], [1,1]]
y = [0, 1, 1, 0]

print("=== 🧠 Training NN on XOR ===\\n")
nn.train(X, y, lr=2.0, epochs=5001)

print("\\n=== Results ===")
for xi, yi in zip(X, y):
    pred = nn.forward(xi)
    label = 1 if pred > 0.5 else 0
    print(f"  {xi} → {pred:.4f} (rounded: {label}, expected: {yi}) {'✅' if label==yi else '❌'}")

print("\\n🧠 The network LEARNED XOR! 🎉")`
    },
    {
      "type": "quiz",
      content: "\ud83d\udd19 Backprop Quiz",
      quiz: [
        {
          question: "What does gradient descent minimize?",
          options: ["Number of neurons", "Training time", "Error/loss", "Features"],
          correctIndex: 2,
          explanation: "Gradient descent adjusts weights to minimize error!"
        },
        {
          question: "What if learning rate is too large?",
          options: ["Faster convergence", "Model overshoots, may never converge", "Better accuracy", "Nothing"],
          correctIndex: 1,
          explanation: "Too large steps overshoot the minimum!"
        }
      ]
    },
  ],
};

const ai_4_4: Lesson = {
  id: "ai-4-4",
  moduleId: "ai-4",
  title: "Training Your First NN",
  subtitle: "Digit recognition \u00b7 \u6570\u5b57\u8bc6\u522b",
  icon: "\ud83d\udd22",
  xp: 25,
  duration: "25 min",
  order: 4,
  gradeRange: [4, 10],
  difficulty: "intermediate",
  skillLevel: "intermediate",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udd22",
      content: `## 🔢 MNIST: The "Hello World" of Neural Networks

MNIST: 70,000 handwritten digits (0-9). Let's build a digit recognizer!

🎯 **Learning Objectives · 学习目标:**
- Understand image representation (pixels as numbers)
- Build a digit classifier
- See how training data size affects accuracy

🔑 **Key Takeaway:** Images are just grids of numbers — NNs learn to "see" patterns!

👀 **Watch Out:** More training data = better, but slower.`
    },
    {
      "type": "code",
      emoji: "\ud83d\uddbc\ufe0f",
      content: "## \ud83d\uddbc\ufe0f Mini-MNIST: Digit Recognition!",
      code: `# 🔢 Mini-MNIST Digit Recognizer
import random
random.seed(42)

DIGITS = {
    0: [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
    1: [[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0]],
    2: [[0,1,1,1,0],[0,0,0,1,0],[0,1,1,0,0],[1,0,0,0,0],[1,1,1,1,0]],
    3: [[1,1,1,1,0],[0,0,0,1,0],[0,1,1,1,0],[0,0,0,1,0],[1,1,1,1,0]],
    7: [[1,1,1,1,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]],
}

def display(grid, label="?"):
    print(f"  Digit: {label}")
    for row in grid:
        print("  " + "".join("██" if x else "  " for x in row))

def flatten(grid):
    return [x for row in grid for x in row]

def add_noise(grid, level=0.2):
    return [[1-x if random.random()<level else x for x in row] for row in grid]

print("=== 🔢 Mini-MNIST ===\\n")
for d, grid in DIGITS.items():
    display(grid, d)
    print()

# Create training data
train = []
for d, grid in DIGITS.items():
    for _ in range(20):
        noisy = add_noise(grid, 0.15)
        train.append((flatten(noisy), d))

# Nearest-centroid classifier
centroids = {}
for d in DIGITS:
    samples = [x for x, y in train if y == d]
    centroids[d] = [sum(s[i] for s in samples)/len(samples) for i in range(25)]

def classify(pixels):
    best_d, best_dist = None, float('inf')
    for d, c in centroids.items():
        dist = sum((a-b)**2 for a,b in zip(pixels, c))
        if dist < best_dist:
            best_dist, best_d = dist, d
    return best_d

print("=== 🧪 Testing with Noisy Digits ===\\n")
correct = total = 0
for d in DIGITS:
    noisy = add_noise(DIGITS[d], 0.2)
    pred = classify(flatten(noisy))
    status = "✅" if pred == d else "❌"
    if pred == d: correct += 1
    total += 1
    print(f"  Actual: {d}, Predicted: {pred} {status}")

print(f"\\nAccuracy: {correct}/{total} = {correct/total:.0%}")`
    },
    {
      "type": "quiz",
      content: "\ud83d\udd22 Digit Quiz",
      quiz: [
        {
          question: "How is an image represented for a NN?",
          options: ["Photo file", "Grid of numbers (pixel values)", "Text description", "Colors"],
          correctIndex: 1,
          explanation: "Images are grids of numbers!"
        },
        {
          question: "A 5x5 pixel image needs how many inputs?",
          options: ["5", "10", "25", "50"],
          correctIndex: 2,
          explanation: "5\u00d75 = 25 pixels!"
        }
      ]
    },
  ],
};

const ai_5_1: Lesson = {
  id: "ai-5-1",
  moduleId: "ai-5",
  title: "CNNs: Seeing Like a Computer",
  subtitle: "Convolution & pooling \u00b7 \u5377\u79ef\u548c\u6c60\u5316",
  icon: "\ud83d\udc41\ufe0f",
  xp: 25,
  duration: "25 min",
  order: 1,
  gradeRange: [4, 10],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udc41\ufe0f",
      content: `## 👁️ CNNs: Teaching Computers to See!

🎯 **Learning Objectives · 学习目标:**
- Understand convolution (sliding window pattern detection)
- Learn what pooling does
- See how CNNs detect features layer by layer

> 🔍 A CNN scans a photo with a small filter that slides across, looking for edges, corners, textures!

🔑 **Key Takeaway:** CNNs use filters that slide across images to find features, then combine them to recognize objects.

👀 **Watch Out:** CNNs need LOTS of data!`
    },
    {
      "type": "code",
      emoji: "\ud83d\udd0d",
      content: "## \ud83d\udd0d Convolution from Scratch!",
      code: `# 👁️ Convolution — From Scratch!

def convolve(image, kernel):
    h, w = len(image), len(image[0])
    kh, kw = len(kernel), len(kernel[0])
    output = [[0]*(w-kw+1) for _ in range(h-kh+1)]
    for i in range(len(output)):
        for j in range(len(output[0])):
            total = 0
            for ki in range(kh):
                for kj in range(kw):
                    total += image[i+ki][j+kj] * kernel[ki][kj]
            output[i][j] = total
    return output

def max_pool(fm, size=2):
    h, w = len(fm), len(fm[0])
    out = [[0]*(w//size) for _ in range(h//size)]
    for i in range(len(out)):
        for j in range(len(out[0])):
            vals = [fm[i*size+pi][j*size+pj] for pi in range(size) for pj in range(size)]
            out[i][j] = max(vals)
    return out

def show(grid, title=""):
    print(f"  {title}")
    for row in grid:
        print("  " + "".join("██" if v > 0.5 else "▒▒" if v > 0 else "  " for v in row))

# 8x8 box image
image = [
    [0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
]

h_edge = [[-1,-1,-1],[0,0,0],[1,1,1]]
v_edge = [[-1,0,1],[-1,0,1],[-1,0,1]]

show(image, "Original 8x8")
h_result = convolve(image, h_edge)
print()
show(h_result, "Horizontal Edges")

pooled = max_pool(h_result)
print()
show(pooled, "After Max Pool 2x2")

print(f"\\nOriginal: 8x8 → After conv: {len(h_result)}x{len(h_result[0])} → After pool: {len(pooled)}x{len(pooled[0])}")
print("CNNs stack these layers: edges → textures → parts → objects! 🖼️")`
    },
    {
      "type": "quiz",
      content: "\ud83d\udc41\ufe0f CNN Quiz",
      quiz: [
        {
          question: "What does a convolution filter do?",
          options: ["Deletes image", "Detects patterns by sliding across image", "Makes image bigger", "Adds color"],
          correctIndex: 1,
          explanation: "Filters slide across detecting features!"
        },
        {
          question: "What does max pooling do?",
          options: ["Makes image bigger", "Adds detail", "Shrinks while keeping strongest features", "Trains network"],
          correctIndex: 2,
          explanation: "Max pooling keeps important features while shrinking!"
        }
      ]
    },
  ],
};

const ai_5_2: Lesson = {
  id: "ai-5-2",
  moduleId: "ai-5",
  title: "NLP: Understanding Language",
  subtitle: "Word embeddings & sentiment \u00b7 \u8bcd\u5d4c\u5165\u548c\u60c5\u611f\u5206\u6790",
  icon: "\ud83d\udcdd",
  xp: 25,
  duration: "25 min",
  order: 2,
  gradeRange: [4, 10],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udcdd",
      content: `## 📝 NLP: Teaching Computers to Read!

🎯 **Learning Objectives · 学习目标:**
- Understand how text becomes numbers (word embeddings)
- Build a simple sentiment analyzer
- Learn bag-of-words representation

🔑 **Key Takeaway:** Computers can't read — NLP converts text into numbers that capture meaning.

👀 **Watch Out:** Language is ambiguous! "I saw a bat" — animal or sports equipment?`
    },
    {
      "type": "code",
      emoji: "\ud83d\ude0a",
      content: "## \ud83d\ude0a Sentiment Analysis from Scratch!",
      code: `# 📝 Sentiment Analysis!

positive = {"good","great","love","amazing","excellent","wonderful",
            "fantastic","awesome","best","happy","enjoy","fun","perfect","recommend"}
negative = {"bad","terrible","hate","awful","worst","horrible",
            "boring","disappointing","poor","ugly","waste","annoying","useless","sad"}

def sentiment(text):
    words = [w.strip(".,!?") for w in text.lower().split()]
    pos = sum(1 for w in words if w in positive)
    neg = sum(1 for w in words if w in negative)
    total = pos + neg
    if total == 0: return 0.5, "Neutral 😐"
    score = pos / total
    if score > 0.6: return score, "Positive 😊"
    elif score < 0.4: return score, "Negative 😞"
    return score, "Mixed 🤔"

reviews = [
    "This movie was absolutely amazing and wonderful!",
    "Terrible film. Boring plot, awful acting.",
    "It was okay. Some good parts but boring scenes.",
    "Best game ever! So fun and exciting!",
    "I hate this broken product. Useless.",
]

print("=== 😊 Sentiment Analyzer ===\\n")
for review in reviews:
    score, label = sentiment(review)
    bar = "🟢" * int(score * 10) + "🔴" * (10 - int(score * 10))
    print(f"  [{bar}] {score:.0%} {label}")
    print(f"    \\"{review[:50]}...\\"\\n")

# Word Similarity
import math
texts = ["the cat sat on the mat", "the dog sat on the rug",
         "the cat chased the dog", "the bird flew over the cat"]
all_words = set()
for t in texts: all_words.update(t.split())
vocab = sorted(all_words)

word_vecs = {}
for word in ["cat", "dog", "bird"]:
    vec = [0] * len(vocab)
    for t in texts:
        ws = t.split()
        if word in ws:
            for w in ws: vec[vocab.index(w)] += 1
    word_vecs[word] = vec

def cosine(v1, v2):
    dot = sum(a*b for a,b in zip(v1,v2))
    m1 = math.sqrt(sum(a**2 for a in v1))
    m2 = math.sqrt(sum(a**2 for a in v2))
    return dot/(m1*m2) if m1 and m2 else 0

print("=== Word Similarity ===")
for w1, w2 in [("cat","dog"), ("cat","bird"), ("dog","bird")]:
    print(f"  {w1} ↔ {w2}: {cosine(word_vecs[w1], word_vecs[w2]):.3f}")`
    },
    {
      "type": "quiz",
      content: "\ud83d\udcdd NLP Quiz",
      quiz: [
        {
          question: "Why convert words to numbers?",
          options: ["Words use too much memory", "Computers can only do math with numbers", "Numbers are faster", "Words are boring"],
          correctIndex: 1,
          explanation: "Neural networks need numeric inputs!"
        },
        {
          question: "'This movie was terrible and boring' sentiment?",
          options: ["Positive", "Negative", "Neutral", "Can't tell"],
          correctIndex: 1,
          explanation: "'Terrible' and 'boring' \u2192 negative!"
        }
      ]
    },
  ],
};

const ai_5_3: Lesson = {
  id: "ai-5-3",
  moduleId: "ai-5",
  title: "Sequence Models & Chatbots",
  subtitle: "RNNs, Transformers & chatbots \u00b7 \u5e8f\u5217\u6a21\u578b\u548c\u804a\u5929\u673a\u5668\u4eba",
  icon: "\ud83d\udcac",
  xp: 25,
  duration: "25 min",
  order: 3,
  gradeRange: [4, 10],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      "type": "text",
      emoji: "\ud83d\udcac",
      content: `## 💬 Sequence Models: Order Matters!

"Dog bites man" ≠ "Man bites dog"! Language is a SEQUENCE.

🎯 **Learning Objectives · 学习目标:**
- Understand why sequence/order matters
- Learn the concept of attention (Transformers)
- Build a simple chatbot

🔑 **Key Takeaway:** Transformers use "attention" — looking at ALL words to understand context.

👀 **Watch Out:** Chatbots predict likely next words — they don't truly "understand"!`
    },
    {
      "type": "code",
      emoji: "\ud83e\udd16",
      content: "## \ud83e\udd16 Build a Simple Chatbot!",
      code: `# 💬 Simple Chatbot
import random

class Chatbot:
    def __init__(self):
        self.user_info = {}
        self.patterns = [
            (["hello","hi","hey"], ["Hey! 👋","Hello!","Hi there! 😊"]),
            (["name"], ["I'm Buddy! What's yours?","The name's Buddy!"]),
            (["my name is","i'm","call me"], ["Nice to meet you, {name}! 🎉"]),
            (["help"], ["I can chat about AI, tell jokes, or just hang out!"]),
            (["ai","machine learning"], ["AI is fascinating! I'm a simple pattern matcher."]),
            (["joke","funny"], ["Why did the AI go to school? To improve its neural network! 🧠😂",
                                "What do you call a computer that sings? A-Dell! 🎵"]),
            (["bye","goodbye"], ["Bye! 👋","See you later! 😊"]),
        ]
    
    def respond(self, user_input):
        lower = user_input.lower().strip()
        for prefix in ["my name is ","i'm ","call me "]:
            if prefix in lower:
                name = user_input[lower.index(prefix)+len(prefix):].strip().split()[0]
                self.user_info["name"] = name.capitalize()
        for keywords, responses in self.patterns:
            if any(kw in lower for kw in keywords):
                resp = random.choice(responses)
                if "{name}" in resp:
                    resp = resp.replace("{name}", self.user_info.get("name","friend"))
                return resp
        if "?" in user_input:
            return random.choice(["Great question! 🤔","Hmm, what do YOU think?"])
        return random.choice(["Tell me more!","Interesting!","Go on! 📚"])

bot = Chatbot()
print("=== 🤖 Buddy Chatbot ===\\n")
for msg in ["Hello!","My name is Alex","Tell me about AI","Tell me a joke!","Bye!"]:
    print(f"You: {msg}")
    print(f"🤖: {bot.respond(msg)}\\n")

print("This is pattern matching — ChatGPT uses Transformers")
print("with 175 billion parameters! Same idea though. 💡")`
    },
    {
      "type": "quiz",
      content: "\ud83d\udcac Chatbot Quiz",
      quiz: [
        {
          question: "Why does word ORDER matter?",
          options: ["It doesn't", "Same words but completely different meaning!", "Only for long sentences", "Only in English"],
          correctIndex: 1,
          explanation: "Order changes meaning completely!"
        },
        {
          question: "What technology powers ChatGPT?",
          options: ["If-else rules", "Decision trees", "Transformers with attention", "Random responses"],
          correctIndex: 2,
          explanation: "ChatGPT uses Transformer architecture!"
        }
      ]
    },
  ],
};

const ai_5_4: Lesson = {
  id: "ai-5-4",
  moduleId: "ai-5",
  title: "Generative AI",
  subtitle: "GANs, diffusion & creativity \u00b7 \u751f\u6210\u5f0f AI \u4e0e\u521b\u9020\u529b",
  icon: "\ud83c\udfa8",
  xp: 25,
  duration: "25 min",
  order: 4,
  gradeRange: [4, 10],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      "type": "text",
      emoji: "\ud83c\udfa8",
      content: `## 🎨 Generative AI: When AI Gets Creative!

AI can create art, write stories, compose music, and generate realistic photos of people who DON'T EXIST!

🎯 **Learning Objectives · 学习目标:**
- Understand GANs (Generator vs Discriminator)
- Learn the concept of diffusion models
- Explore style transfer

> 🎨 **Art Forger Analogy:** GANs have two networks:
> - **Generator** 🎨: An art forger creating fakes
> - **Discriminator** 🕵️: An art critic spotting fakes
> They compete until the fakes are PERFECT!

🔑 **Key Takeaway:** Generative AI creates NEW content by learning patterns from existing data.

👀 **Watch Out:** Deepfakes, AI art copyright, and misinformation are real ethical concerns!`
    },
    {
      "type": "code",
      emoji: "\ud83c\udfad",
      content: "## \ud83c\udfad Generative AI Concepts",
      code: `# 🎨 Generative AI Demo
import random, math
random.seed(42)

# === Text Style Transfer ===
print("=== 🖼️ Text Style Transfer ===\\n")
content = "The cat sat on the mat. It was warm."

styles = {
    "Shakespeare": {"the":"ye olde","cat":"feline creature","sat":"didst rest",
                    "on":"upon","it was":"'twas","warm":"most agreeable"},
    "Pirate": {"the":"th'","cat":"scallywag cat","sat":"anchored",
               "on":"atop","it was":"aye, 'twas","warm":"warm as a tropical isle"},
    "Emoji": {"cat":"🐱 cat","sat":"sat 💺","warm":"warm ☀️","mat":"mat 🧶"},
}

for name, reps in styles.items():
    styled = content.lower()
    for old, new in reps.items():
        styled = styled.replace(old, new)
    print(f"  {name:13s}: {styled}")

# === Mini Number GAN Concept ===
print("\\n=== 🎭 Mini GAN Concept ===")
print("Goal: Generator learns to produce numbers around 50\\n")

# Generator transforms noise → target distribution
g_scale, g_shift = 1.0, 0.0
for epoch in range(200):
    noise = random.gauss(0, 1)
    fake = noise * abs(g_scale) + g_shift
    real = random.gauss(50, 10)
    # Simple gradient toward real distribution
    g_shift += 0.05 * (real - fake)
    g_scale += 0.01 * abs(real - fake) * (1 if abs(g_scale) < 15 else -1)

samples = sorted([random.gauss(0,1)*abs(g_scale)+g_shift for _ in range(10)])
print(f"Generated: {[round(x,1) for x in samples]}")
print(f"Mean: {sum(samples)/len(samples):.1f} (target: 50)")

print("\\n🎨 Real style transfer uses neural networks to blend")
print("   content of one image with style of another! 🖼️")`
    },
    {
      "type": "quiz",
      content: "\ud83c\udfa8 Generative AI Quiz",
      quiz: [
        {
          question: "In a GAN, what does the Generator do?",
          options: ["Judges images", "Creates new fake data", "Cleans data", "Tests the model"],
          correctIndex: 1,
          explanation: "Generator creates fake data to fool the Discriminator!"
        },
        {
          question: "Major ethical concern with generative AI?",
          options: ["Uses too much electricity", "Deepfakes and misinformation", "Too slow", "Costs money"],
          correctIndex: 1,
          explanation: "Generative AI can create realistic fakes!"
        }
      ]
    },
  ],
};

const ai_6_1: Lesson = {
  id: "ai-6-1",
  moduleId: "ai-6",
  title: "Reinforcement Learning",
  subtitle: "Train AI to play games \u00b7 \u8bad\u7ec3 AI \u73a9\u6e38\u620f",
  icon: "\ud83c\udfae",
  xp: 25,
  duration: "25 min",
  order: 1,
  gradeRange: [4, 10],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      "type": "text",
      emoji: "\ud83c\udfae",
      content: `## 🎮 Reinforcement Learning: Learning by Playing!

How do you learn to ride a bike? You TRY, fall, adjust, try again! That's RL!

🎯 **Learning Objectives · 学习目标:**
- Understand the RL loop (state → action → reward → repeat)
- Build an AI agent that navigates a grid
- Learn about Q-tables and reward functions

> 🐕 **Puppy Analogy:** Puppy sits → treat (reward) → learns to sit more!

🔑 **Key Takeaway:** RL agent learns by trial and error — maximizing rewards over time.

👀 **Watch Out:** RL is SLOW — needs thousands of attempts!`
    },
    {
      "type": "code",
      emoji: "\ud83d\uddfa\ufe0f",
      content: "## \ud83d\uddfa\ufe0f Gridworld: Train an AI Agent!",
      code: `# 🎮 RL — Gridworld!
import random
random.seed(42)

class Gridworld:
    def __init__(self, size=4):
        self.size = size
        self.goal = (size-1, size-1)
        self.traps = [(1, 1), (2, 2)]
    
    def reset(self):
        self.pos = (0, 0)
        return self.pos
    
    def step(self, action):
        r, c = self.pos
        if action == 0 and r > 0: r -= 1  # up
        elif action == 1 and c < self.size-1: c += 1  # right
        elif action == 2 and r < self.size-1: r += 1  # down
        elif action == 3 and c > 0: c -= 1  # left
        self.pos = (r, c)
        if self.pos == self.goal: return self.pos, 10, True
        if self.pos in self.traps: return self.pos, -5, True
        return self.pos, -0.1, False

class QLearner:
    def __init__(self, lr=0.2, discount=0.9, epsilon=0.3):
        self.q = {}
        self.lr, self.discount, self.epsilon = lr, discount, epsilon
    
    def get_q(self, s, a):
        return self.q.get(s, {}).get(a, 0)
    
    def act(self, s):
        if random.random() < self.epsilon:
            return random.randint(0, 3)
        if s not in self.q: return random.randint(0, 3)
        return max(range(4), key=lambda a: self.get_q(s, a))
    
    def learn(self, s, a, r, ns, done):
        best_next = max(self.get_q(ns, a2) for a2 in range(4))
        target = r + (0 if done else self.discount * best_next)
        if s not in self.q: self.q[s] = {}
        self.q[s][a] = self.get_q(s, a) + self.lr * (target - self.get_q(s, a))

env = Gridworld(4)
agent = QLearner()
wins = 0

for ep in range(300):
    s = env.reset()
    for _ in range(30):
        a = agent.act(s)
        ns, r, done = env.step(a)
        agent.learn(s, a, r, ns, done)
        s = ns
        if done:
            if r > 0: wins += 1
            break
    if ep % 50 == 49: agent.epsilon *= 0.5

print(f"=== 🎮 Gridworld Results ===")
print(f"Win rate: {wins}/300 = {wins/300:.1%}")

# Show learned policy
arrows = {0:"↑", 1:"→", 2:"↓", 3:"←"}
print("\\nLearned Policy:")
for r in range(4):
    row = ""
    for c in range(4):
        pos = (r, c)
        if pos == env.goal: row += " 🏆 "
        elif pos in env.traps: row += " 💀 "
        elif pos in agent.q:
            best = max(range(4), key=lambda a: agent.get_q(pos, a))
            row += f" {arrows[best]}  "
        else: row += " .  "
    print(f"  {row}")`
    },
    {
      "type": "quiz",
      content: "\ud83c\udfae RL Quiz",
      quiz: [
        {
          question: "In RL, what is a 'reward'?",
          options: ["Money", "Feedback signal for good/bad actions", "Final answer", "Training data"],
          correctIndex: 1,
          explanation: "Rewards guide the agent!"
        },
        {
          question: "Why does the agent need 'exploration'?",
          options: ["To be random", "To discover new strategies", "To go faster", "To use less memory"],
          correctIndex: 1,
          explanation: "Without exploration, agent gets stuck in mediocre strategies!"
        }
      ]
    },
  ],
};

const ai_6_2: Lesson = {
  id: "ai-6-2",
  moduleId: "ai-6",
  title: "AI Ethics & Bias",
  subtitle: "Responsible AI \u00b7 \u8d1f\u8d23\u4efb\u7684 AI",
  icon: "\u2696\ufe0f",
  xp: 20,
  duration: "20 min",
  order: 2,
  gradeRange: [4, 10],
  difficulty: "advanced",
  skillLevel: "advanced",
  sections: [
    {
      "type": "text",
      emoji: "\u2696\ufe0f",
      content: `## ⚖️ AI Ethics: With Great Power Comes Great Responsibility!

🎯 **Learning Objectives · 学习目标:**
- Understand how bias gets INTO AI systems
- Learn about fairness metrics
- Think critically about AI's role in society

**Real Examples of AI Bias:**
- 🏥 Healthcare AI trained on one ethnic group → fails for others
- 👤 Facial recognition less accurate for darker skin
- 📝 Resume screening penalizes women's colleges

🔑 **Key Takeaway:** AI reflects biases in its training data and creators' choices.

👀 **Watch Out:** "The algorithm decided" is NOT an excuse! Humans must ensure fairness.`
    },
    {
      "type": "code",
      emoji: "\ud83d\udd0d",
      content: "## \ud83d\udd0d Detecting Bias in AI",
      code: `# ⚖️ AI Bias Detection
import random
random.seed(42)

print("=== 🔍 Bias in Loan Approval Data ===\\n")

applicants = []
for _ in range(100):
    group = random.choice(["A", "B"])
    income = random.randint(30, 100)
    credit = random.randint(500, 800)
    # BIASED: Group B has higher bar
    if group == "A":
        approved = 1 if (income > 40 and credit > 600) else 0
    else:
        approved = 1 if (income > 55 and credit > 650) else 0
    applicants.append({"group": group, "income": income, "credit": credit, "approved": approved})

for g in ["A", "B"]:
    data = [a for a in applicants if a["group"] == g]
    rate = sum(a["approved"] for a in data) / len(data) * 100
    bar = "█" * int(rate / 2)
    print(f"  Group {g}: {rate:.1f}% {bar}")

a_rate = sum(a["approved"] for a in applicants if a["group"]=="A") / sum(1 for a in applicants if a["group"]=="A")
b_rate = sum(a["approved"] for a in applicants if a["group"]=="B") / sum(1 for a in applicants if a["group"]=="B")
ratio = a_rate / b_rate if b_rate > 0 else float('inf')
print(f"\\nDisparate Impact Ratio: {ratio:.2f}")
print(f"{'⚠️ BIASED! (ratio > 1.25)' if ratio > 1.25 else '✅ Fair'}")

print("\\n=== Same Stats, Different Treatment ===")
for inc in [45, 55, 65]:
    for cr in [620, 660]:
        a_ok = 1 if (inc>40 and cr>600) else 0
        b_ok = 1 if (inc>55 and cr>650) else 0
        match = "✅" if a_ok==b_ok else "❌"
        print(f"  Inc={inc}k Cr={cr}: A={'Y' if a_ok else 'N'} B={'Y' if b_ok else 'N'} {match}")

print("\\n⚖️ Building fair AI requires:")
print("  1. 📊 Diverse training data")
print("  2. 🔍 Regular bias audits")
print("  3. 👥 Diverse teams")
print("  4. 📖 Transparent decisions")`
    },
    {
      "type": "text",
      emoji: "\ud83d\udca1",
      content: `## 💡 Discussion Points

1. 🚗 Self-driving car must choose between hitting 1 or 3 pedestrians. What should it do?
2. 🎨 If AI creates art in a famous artist's style, who owns it?
3. 💼 AI can write code, create art, diagnose diseases. How to handle job displacement?

**The AI Builder's Promise:**
> "I will build AI that is fair, transparent, and respectful of all people." 🤝

🔑 **Key Takeaway:** AI is a TOOL — it reflects the values of its creators. As future AI builders, it's YOUR responsibility!

🎉 Congratulations on completing the AI & Machine Learning course! 🤖🧠`
    },
    {
      "type": "quiz",
      content: "\u2696\ufe0f Ethics Quiz",
      quiz: [
        {
          question: "How does bias get into AI?",
          options: ["AI chooses to be biased", "Through biased data and design choices", "From the internet", "Random"],
          correctIndex: 1,
          explanation: "AI learns from data \u2014 biased data = biased AI!"
        },
        {
          question: "What is 'disparate impact'?",
          options: ["AI crashes", "One group treated significantly differently", "AI is slow", "Missing data"],
          correctIndex: 1,
          explanation: "One group gets significantly worse outcomes!"
        },
        {
          question: "Who is responsible for biased AI decisions?",
          options: ["The AI itself", "Nobody", "Developers and organizations who built it", "Users"],
          correctIndex: 2,
          explanation: "People who build, train, and deploy AI are responsible!"
        }
      ]
    },
  ],
};

export const AI_LESSONS: Lesson[] = [
  ai_1_1, ai_1_2, ai_1_3, ai_1_4, ai_2_1, ai_2_2, ai_2_3, ai_2_4, ai_3_1, ai_3_2, ai_3_3, ai_3_4, ai_3_5, ai_3_6, ai_4_1, ai_4_2, ai_4_3, ai_4_4, ai_5_1, ai_5_2, ai_5_3, ai_5_4, ai_6_1, ai_6_2,
];