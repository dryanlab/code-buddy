// Pre-set code lab exercises — 20 standalone challenges + 15 course projects across all modules

export interface CodeExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3;
  gradeRange: [number, number]; // kept for reference
  skillLevel: "beginner" | "intermediate" | "advanced";
  starterCode: string;
  hint: string;
  solution: string;
  expectedOutput?: string;
  tags: string[];
  fromLesson?: string; // lesson id this project belongs to (e.g. "1-6")
  language?: "python" | "cpp";
  category?: string;
  categoryZh?: string;
}

export const CODE_EXERCISES: CodeExercise[] = [
  // ═══ ⭐ EASY (Difficulty 1) ═══
  {
    id: "ex-1",
    title: "🎨 Hello Art",
    description: "Use print() to create your own ASCII art! Make a smiley face, a house, or anything you want.",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# Create ASCII art with print()
# Example:
print("  ***  ")
print(" *   * ")
print("*  o  *")
print(" *   * ")
print("  ***  ")`,
    hint: "Each print() creates one line. Use spaces to position characters!",
    solution: `print("  ***  ")
print(" *   * ")
print("*  o  *")
print(" *   * ")
print("  ***  ")`,
    tags: ["print", "beginner", "module-2"],
  },
  {
    id: "ex-2",
    title: "🧮 Super Calculator",
    description: "Create variables for the prices of 3 items and calculate the total. Apply a 10% discount!",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# Shopping calculator
item1 = 25.99  # Backpack
item2 = 12.50  # Water bottle
item3 = 8.75   # Snacks

# Calculate total
total = item1 + item2 + item3
print("Subtotal: $" + str(total))

# TODO: Apply 10% discount
# discount = ???
# final_price = ???
# print the final price!`,
    hint: "To calculate 10% discount: discount = total * 0.10, then final = total - discount",
    solution: `item1 = 25.99
item2 = 12.50
item3 = 8.75
total = item1 + item2 + item3
print("Subtotal: $" + str(total))
discount = total * 0.10
final_price = total - discount
print("Discount: $" + str(discount))
print("Final: $" + str(final_price))`,
    tags: ["variables", "math", "beginner", "module-2"],
  },
  {
    id: "ex-3",
    title: "👋 Personal Intro Generator",
    description: "Use variables and string concatenation to create an automatic self-introduction!",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# Personal Intro Generator
name = "William"
age = 12
hobby = "Boy Scouts"
favorite_game = "Minecraft"

# TODO: Print a fun introduction using these variables!
# Example output:
# "Hi! I'm William, I'm 12 years old."
# "I love Boy Scouts and my favorite game is Minecraft!"`,
    hint: 'Use + to join strings and str() to convert numbers. Example: "I am " + str(age) + " years old"',
    solution: `name = "William"
age = 12
hobby = "Boy Scouts"
favorite_game = "Minecraft"

print("Hi! I'm " + name + ", I'm " + str(age) + " years old.")
print("I love " + hobby + " and my favorite game is " + favorite_game + "!")`,
    expectedOutput: "Hi! I'm William, I'm 12 years old.\nI love Boy Scouts and my favorite game is Minecraft!",
    tags: ["variables", "strings", "beginner", "module-2"],
  },
  {
    id: "ex-4",
    title: "🔢 Even or Odd Checker",
    description: "Write a program that checks if a number is even or odd!",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# Even or Odd?
number = 17

# TODO: Check if the number is even or odd
# Hint: Use the modulo operator %
# Even numbers: number % 2 == 0
# Odd numbers: number % 2 != 0`,
    hint: "The % operator gives the remainder. 17 % 2 = 1 (odd), 8 % 2 = 0 (even)",
    solution: `number = 17

if number % 2 == 0:
    print(str(number) + " is EVEN ✅")
else:
    print(str(number) + " is ODD 🔢")`,
    expectedOutput: "17 is ODD 🔢",
    tags: ["if-else", "math", "beginner", "module-2"],
  },
  {
    id: "ex-5",
    title: "🌡️ Temperature Converter",
    description: "Build a Fahrenheit to Celsius converter! Formula: C = (F - 32) × 5/9",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# Temperature Converter
# Formula: Celsius = (Fahrenheit - 32) * 5/9

fahrenheit = 98.6

# Convert to Celsius
celsius = (fahrenheit - 32) * 5 / 9

print(str(fahrenheit) + "°F = " + str(round(celsius, 1)) + "°C")

# TODO: Convert some more temperatures!
# Water freezes at 32°F - what's that in °C?
# Water boils at 212°F - what's that in °C?`,
    hint: "Just change the fahrenheit value and run again! Or add more conversions below.",
    solution: `fahrenheit = 98.6
celsius = (fahrenheit - 32) * 5 / 9
print(str(fahrenheit) + "°F = " + str(round(celsius, 1)) + "°C")
fahrenheit = 32
celsius = (fahrenheit - 32) * 5 / 9
print(str(fahrenheit) + "°F = " + str(round(celsius, 1)) + "°C")
fahrenheit = 212
celsius = (fahrenheit - 32) * 5 / 9
print(str(fahrenheit) + "°F = " + str(round(celsius, 1)) + "°C")`,
    tags: ["variables", "math", "beginner", "module-2"],
  },

  // ═══ ⭐⭐ MEDIUM (Difficulty 2) ═══
  {
    id: "ex-6",
    title: "🔢 Number Guessing Game",
    description: "Create a number guessing game! The computer picks a secret number and you try to guess it.",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `import random

secret = random.randint(1, 20)
guesses = [10, 15, 5, 12]  # Simulate guesses
attempts = 0

for guess in guesses:
    attempts += 1
    if guess == secret:
        print("🎉 Got it in " + str(attempts) + " tries! It was " + str(secret))
        break
    elif guess > secret:
        print(str(guess) + " is too HIGH! 📉")
    else:
        print(str(guess) + " is too LOW! 📈")
else:
    print("Didn't get it! The answer was " + str(secret))

# TODO: Add more guesses to the list to find the number!`,
    hint: "Use the hints (too high/too low) to narrow down. Like binary search!",
    solution: `import random
secret = random.randint(1, 20)
guesses = [10, 15, 5, 12, 8, 3, 17, 7, 11, 13]
attempts = 0
for guess in guesses:
    attempts += 1
    if guess == secret:
        print("🎉 Got it in " + str(attempts) + " tries! It was " + str(secret))
        break
    elif guess > secret:
        print(str(guess) + " is too HIGH! 📉")
    else:
        print(str(guess) + " is too LOW! 📈")
else:
    print("Didn't get it! The answer was " + str(secret))`,
    tags: ["if-else", "loops", "random", "intermediate", "module-2"],
  },
  {
    id: "ex-7",
    title: "⭐ Pattern Printer",
    description: "Use loops to print cool patterns! Start with a triangle, then try a diamond.",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# Print a triangle pattern
rows = 5
for i in range(1, rows + 1):
    print("*" * i)

print()  # empty line

# TODO: Now print an upside-down triangle!
# *****
# ****
# ***
# **
# *`,
    hint: "For upside-down, use range(rows, 0, -1) to count backwards!",
    solution: `rows = 5
for i in range(1, rows + 1):
    print("*" * i)
print()
for i in range(rows, 0, -1):
    print("*" * i)`,
    tags: ["loops", "patterns", "intermediate", "module-2"],
  },
  {
    id: "ex-8",
    title: "🔐 Password Generator",
    description: "Build a random password generator! Mix letters, numbers, and symbols.",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `import random

# Characters to choose from
letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
symbols = "!@#$%&*"

password_length = 12
password = ""

# TODO: Build a random password
# Pick random characters from letters, numbers, and symbols
# Hint: random.choice(string) picks a random character

for i in range(password_length):
    all_chars = letters + numbers + symbols
    password += random.choice(all_chars)

print("🔐 Your password: " + password)
print("Length: " + str(len(password)))`,
    hint: "Use random.choice() to pick a random character from a string. Loop password_length times!",
    solution: `import random
letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
symbols = "!@#$%&*"
password_length = 12
password = ""
all_chars = letters + numbers + symbols
for i in range(password_length):
    password += random.choice(all_chars)
print("🔐 Your password: " + password)
print("Length: " + str(len(password)))`,
    tags: ["strings", "random", "loops", "intermediate", "module-2"],
  },
  {
    id: "ex-9",
    title: "📊 BMI Calculator",
    description: "Calculate Body Mass Index! BMI = weight(kg) / height(m)²",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# BMI Calculator
# Formula: BMI = weight_kg / (height_m ** 2)

weight_kg = 45
height_m = 1.55

# TODO: Calculate BMI and determine the category
# Underweight: < 18.5
# Normal: 18.5 - 24.9
# Overweight: 25 - 29.9
# Obese: >= 30

bmi = weight_kg / (height_m ** 2)
print("BMI: " + str(round(bmi, 1)))

# Add if-elif-else to show the category!`,
    hint: "After calculating bmi, use if-elif-else to check which range it falls in.",
    solution: `weight_kg = 45
height_m = 1.55
bmi = weight_kg / (height_m ** 2)
print("BMI: " + str(round(bmi, 1)))

if bmi < 18.5:
    print("Category: Underweight")
elif bmi < 25:
    print("Category: Normal ✅")
elif bmi < 30:
    print("Category: Overweight")
else:
    print("Category: Obese")`,
    tags: ["variables", "if-else", "math", "intermediate", "module-2"],
  },
  {
    id: "ex-10",
    title: "📋 Inventory Manager",
    description: "Build a game inventory system using lists! Add, remove, and display items.",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# Game Inventory Manager
inventory = ["sword", "shield", "potion"]

print("=== INVENTORY ===")
for i in range(len(inventory)):
    print(str(i + 1) + ". " + inventory[i])
print("Total items: " + str(len(inventory)))

# TODO: 
# 1. Add "bow" and "arrow" to the inventory
# 2. Remove "potion" (it was used!)
# 3. Print the updated inventory`,
    hint: "Use inventory.append('item') to add and inventory.remove('item') to remove.",
    solution: `inventory = ["sword", "shield", "potion"]

print("=== INVENTORY ===")
for i in range(len(inventory)):
    print(str(i + 1) + ". " + inventory[i])
print("Total items: " + str(len(inventory)))

inventory.append("bow")
inventory.append("arrow")
inventory.remove("potion")

print("\\n=== UPDATED INVENTORY ===")
for i in range(len(inventory)):
    print(str(i + 1) + ". " + inventory[i])
print("Total items: " + str(len(inventory)))`,
    tags: ["lists", "loops", "intermediate", "module-2"],
  },
  {
    id: "ex-11",
    title: "✊✋✌️ Rock Paper Scissors",
    description: "Build a Rock Paper Scissors game against the computer!",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `import random

choices = ["rock", "paper", "scissors"]
player = "rock"  # Change this to play!
computer = random.choice(choices)

print("You chose: " + player)
print("Computer chose: " + computer)

# TODO: Determine the winner!
# Rock beats scissors
# Scissors beats paper
# Paper beats rock
# Same = tie`,
    hint: "Use if-elif-else. Check for tie first (player == computer), then check win conditions.",
    solution: `import random
choices = ["rock", "paper", "scissors"]
player = "rock"
computer = random.choice(choices)

print("You chose: " + player)
print("Computer chose: " + computer)

if player == computer:
    print("🤝 It's a TIE!")
elif (player == "rock" and computer == "scissors") or \\
     (player == "scissors" and computer == "paper") or \\
     (player == "paper" and computer == "rock"):
    print("🎉 You WIN!")
else:
    print("😢 You LOSE!")`,
    tags: ["if-else", "random", "intermediate", "module-2"],
  },
  {
    id: "ex-12",
    title: "🐛 Bug Fixer: Loop Edition",
    description: "This code has 3 bugs! Find and fix them all to get the correct output.",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# This code should print the sum of numbers 1 to 10
# Expected output: "Sum of 1 to 10 = 55"
# But it has 3 bugs! Fix them.

total = 1  # Bug 1: starting value wrong
for i in range(1, 10):  # Bug 2: range is wrong
    total = total + 1  # Bug 3: should add i, not 1

print("Sum of 1 to 10 = " + str(total))`,
    hint: "Bug 1: total should start at 0. Bug 2: range(1, 11) to include 10. Bug 3: add i, not 1.",
    solution: `total = 0
for i in range(1, 11):
    total = total + i

print("Sum of 1 to 10 = " + str(total))`,
    expectedOutput: "Sum of 1 to 10 = 55",
    tags: ["debugging", "loops", "intermediate", "module-3"],
  },
  {
    id: "ex-13",
    title: "📖 Dictionary Pokédex",
    description: "Create a mini Pokédex using dictionaries! Store Pokémon data and look them up.",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# Mini Pokédex
pokedex = {
    "Pikachu": {"type": "Electric", "hp": 35, "attack": 55},
    "Charmander": {"type": "Fire", "hp": 39, "attack": 52},
    "Squirtle": {"type": "Water", "hp": 44, "attack": 48},
}

# Look up a Pokémon
pokemon = "Pikachu"
info = pokedex[pokemon]
print("=== " + pokemon + " ===")
print("Type: " + info["type"])
print("HP: " + str(info["hp"]))
print("Attack: " + str(info["attack"]))

# TODO: Add Bulbasaur (Grass, HP 45, Attack 49)
# and print all Pokémon with a loop!`,
    hint: 'Add: pokedex["Bulbasaur"] = {"type": "Grass", "hp": 45, "attack": 49}. Loop with: for name in pokedex:',
    solution: `pokedex = {
    "Pikachu": {"type": "Electric", "hp": 35, "attack": 55},
    "Charmander": {"type": "Fire", "hp": 39, "attack": 52},
    "Squirtle": {"type": "Water", "hp": 44, "attack": 48},
}
pokedex["Bulbasaur"] = {"type": "Grass", "hp": 45, "attack": 49}

for name in pokedex:
    info = pokedex[name]
    print("=== " + name + " ===")
    print("  Type: " + info["type"] + " | HP: " + str(info["hp"]) + " | ATK: " + str(info["attack"]))`,
    tags: ["dictionaries", "loops", "intermediate", "module-2"],
  },
  {
    id: "ex-14",
    title: "🧱 Function Factory",
    description: "Write useful functions and combine them to solve a problem!",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# Function Factory!

# TODO: Write these functions:

# 1. A function that returns the bigger of two numbers
def bigger(a, b):
    pass  # Replace with your code

# 2. A function that checks if a number is prime
def is_prime(n):
    pass  # Replace with your code

# Test them:
print("Bigger of 5 and 3:", bigger(5, 3))
print("Bigger of 2 and 7:", bigger(2, 7))
print("Is 7 prime?", is_prime(7))
print("Is 4 prime?", is_prime(4))
print("Is 13 prime?", is_prime(13))`,
    hint: "bigger: use if-else or max(). is_prime: loop from 2 to n-1, check if n % i == 0 for any i.",
    solution: `def bigger(a, b):
    if a > b:
        return a
    else:
        return b

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print("Bigger of 5 and 3:", bigger(5, 3))
print("Bigger of 2 and 7:", bigger(2, 7))
print("Is 7 prime?", is_prime(7))
print("Is 4 prime?", is_prime(4))
print("Is 13 prime?", is_prime(13))`,
    expectedOutput: "Bigger of 5 and 3: 5\nBigger of 2 and 7: 7\nIs 7 prime? True\nIs 4 prime? False\nIs 13 prime? True",
    tags: ["functions", "logic", "intermediate", "module-2"],
  },

  // ═══ ⭐⭐⭐ HARD (Difficulty 3) ═══
  {
    id: "ex-15",
    title: "🔐 Caesar Cipher",
    description: "Build a Caesar Cipher encoder! Shift each letter by a secret number to encrypt a message.",
    difficulty: 3,
    gradeRange: [8, 10],
    skillLevel: "advanced",
    starterCode: `# Caesar Cipher — shift each letter by N positions
# A with shift 3 → D, B → E, Z → C (wraps around!)

def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            # Get the base (uppercase or lowercase)
            base = ord('A') if char.isupper() else ord('a')
            # TODO: Shift the character and wrap around
            # Hint: (ord(char) - base + shift) % 26 + base
            shifted = chr((ord(char) - base + shift) % 26 + base)
            result += shifted
        else:
            result += char  # Keep spaces and punctuation
    return result

message = "Hello World"
shift = 3
encrypted = caesar_encrypt(message, shift)
print("Original:  " + message)
print("Encrypted: " + encrypted)

# TODO: Write a decrypt function (hint: shift in the opposite direction!)`,
    hint: "Decrypt = encrypt with negative shift. caesar_encrypt(encrypted, -shift) will decode it!",
    solution: `def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = chr((ord(char) - base + shift) % 26 + base)
            result += shifted
        else:
            result += char
    return result

def caesar_decrypt(text, shift):
    return caesar_encrypt(text, -shift)

message = "Hello World"
shift = 3
encrypted = caesar_encrypt(message, shift)
decrypted = caesar_decrypt(encrypted, shift)
print("Original:  " + message)
print("Encrypted: " + encrypted)
print("Decrypted: " + decrypted)`,
    expectedOutput: "Original:  Hello World\nEncrypted: Khoor Zruog\nDecrypted: Hello World",
    tags: ["strings", "functions", "encryption", "hard", "module-2"],
  },
  {
    id: "ex-16",
    title: "📊 Grade Statistics",
    description: "Analyze a class of students' grades: average, highest, lowest, and grade distribution!",
    difficulty: 3,
    gradeRange: [8, 10],
    skillLevel: "advanced",
    starterCode: `# Student Grade Analyzer
grades = [92, 85, 78, 95, 88, 72, 96, 81, 67, 90, 84, 73, 99, 56, 88]

# TODO: Calculate:
# 1. Average grade
# 2. Highest grade
# 3. Lowest grade
# 4. How many A's (90+), B's (80-89), C's (70-79), D's (60-69), F's (<60)
# 5. Pass rate (>= 60)

print("=== Grade Report ===")
print("Students: " + str(len(grades)))
# Fill in the rest!`,
    hint: "Use a loop to count each grade category. For max/min, compare each grade to a running best.",
    solution: `grades = [92, 85, 78, 95, 88, 72, 96, 81, 67, 90, 84, 73, 99, 56, 88]

total = 0
highest = grades[0]
lowest = grades[0]
a_count = 0
b_count = 0
c_count = 0
d_count = 0
f_count = 0

for g in grades:
    total += g
    if g > highest:
        highest = g
    if g < lowest:
        lowest = g
    if g >= 90:
        a_count += 1
    elif g >= 80:
        b_count += 1
    elif g >= 70:
        c_count += 1
    elif g >= 60:
        d_count += 1
    else:
        f_count += 1

average = total / len(grades)
pass_count = a_count + b_count + c_count + d_count
pass_rate = pass_count / len(grades) * 100

print("=== Grade Report ===")
print("Students: " + str(len(grades)))
print("Average: " + str(round(average, 1)))
print("Highest: " + str(highest))
print("Lowest: " + str(lowest))
print("A: " + str(a_count) + " | B: " + str(b_count) + " | C: " + str(c_count) + " | D: " + str(d_count) + " | F: " + str(f_count))
print("Pass rate: " + str(round(pass_rate, 1)) + "%")`,
    tags: ["lists", "loops", "if-else", "statistics", "hard", "module-2"],
  },
  {
    id: "ex-17",
    title: "🎮 Text Adventure",
    description: "Build a mini text adventure game with rooms, items, and choices!",
    difficulty: 3,
    gradeRange: [8, 10],
    skillLevel: "advanced",
    starterCode: `# Mini Text Adventure Game
# Use dictionaries for rooms and if-else for choices

rooms = {
    "start": {
        "description": "You're in a dark cave. You see exits NORTH and EAST.",
        "north": "treasure",
        "east": "monster",
    },
    "treasure": {
        "description": "🏆 You found a treasure chest! You WIN!",
    },
    "monster": {
        "description": "👹 A monster appears! GAME OVER!",
    },
}

# Simulate the adventure
current = "start"
moves = ["north"]  # Change this list to try different paths!

print("=== CAVE ADVENTURE ===")
print(rooms[current]["description"])

for move in moves:
    if move in rooms[current]:
        current = rooms[current][move]
        print("> You go " + move.upper())
        print(rooms[current]["description"])
    else:
        print("> Can't go " + move + "!")

# TODO: Add more rooms! Add a "south" exit to start,
# leading to a "puzzle" room with an "east" exit to "treasure"`,
    hint: "Add new room entries to the rooms dictionary. Each room needs 'description' and optional direction keys.",
    solution: `rooms = {
    "start": {
        "description": "You're in a dark cave. Exits: NORTH, EAST, SOUTH.",
        "north": "treasure",
        "east": "monster",
        "south": "puzzle",
    },
    "treasure": {
        "description": "🏆 You found a treasure chest! You WIN!",
    },
    "monster": {
        "description": "👹 A monster appears! GAME OVER!",
    },
    "puzzle": {
        "description": "🧩 A riddle is carved on the wall. Exit: EAST.",
        "east": "treasure",
    },
}

current = "start"
moves = ["south", "east"]

print("=== CAVE ADVENTURE ===")
print(rooms[current]["description"])

for move in moves:
    if move in rooms[current]:
        current = rooms[current][move]
        print("> You go " + move.upper())
        print(rooms[current]["description"])
    else:
        print("> Can't go " + move + "!")`,
    tags: ["dictionaries", "if-else", "game", "hard", "module-2"],
  },
  {
    id: "ex-18",
    title: "🐛 Bug Bounty: 5 Hidden Bugs",
    description: "This program calculates factorial but has 5 bugs! Find and fix ALL of them.",
    difficulty: 3,
    gradeRange: [8, 10],
    skillLevel: "advanced",
    starterCode: `# Factorial Calculator (has 5 bugs!)
# n! = n × (n-1) × ... × 1
# Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

def factorial(n)  # Bug 1
    if n = 0:  # Bug 2
        return 0  # Bug 3
    result = 1
    for i in range(1, n):  # Bug 4
        result = result + i  # Bug 5
    return result

print("5! = " + str(factorial(5)))   # Should be 120
print("0! = " + str(factorial(0)))   # Should be 1
print("3! = " + str(factorial(3)))   # Should be 6`,
    hint: "Bug 1: missing colon. Bug 2: = vs ==. Bug 3: 0! = 1 not 0. Bug 4: range should include n. Bug 5: multiply not add.",
    solution: `def factorial(n):
    if n == 0:
        return 1
    result = 1
    for i in range(1, n + 1):
        result = result * i
    return result

print("5! = " + str(factorial(5)))
print("0! = " + str(factorial(0)))
print("3! = " + str(factorial(3)))`,
    expectedOutput: "5! = 120\n0! = 1\n3! = 6",
    tags: ["debugging", "functions", "hard", "module-3"],
  },
  {
    id: "ex-19",
    title: "⚡ Speed Comparison Simulator",
    description: "Simulate the memory hierarchy speed comparison! Show why cache matters.",
    difficulty: 3,
    gradeRange: [8, 10],
    skillLevel: "advanced",
    starterCode: `# Memory Speed Simulator
# Show relative speeds in human-understandable time

speeds = {
    "CPU Register": 0.3,      # nanoseconds
    "L1 Cache": 1,
    "L2 Cache": 10,
    "RAM": 100,
    "SSD": 100000,
    "HDD": 10000000,
    "Internet": 50000000,
}

# If CPU register = 1 second in human time
base_ns = 0.3
base_human = 1  # second

print("=== Memory Speed Comparison ===")
print("If CPU Register access = 1 second...")
print()

# TODO: Calculate and print the human-equivalent time for each
# Formula: human_time = (speed_ns / base_ns) * base_human
# Convert to appropriate units (seconds, minutes, hours, days, years)`,
    hint: "Divide by 60 for minutes, 3600 for hours, 86400 for days, 31536000 for years.",
    solution: `speeds = {
    "CPU Register": 0.3,
    "L1 Cache": 1,
    "L2 Cache": 10,
    "RAM": 100,
    "SSD": 100000,
    "HDD": 10000000,
    "Internet": 50000000,
}

base_ns = 0.3
print("=== Memory Speed Comparison ===")
print("If CPU Register = 1 second...\\n")

for name in speeds:
    human_sec = speeds[name] / base_ns
    if human_sec < 60:
        time_str = str(round(human_sec, 1)) + " seconds"
    elif human_sec < 3600:
        time_str = str(round(human_sec / 60, 1)) + " minutes"
    elif human_sec < 86400:
        time_str = str(round(human_sec / 3600, 1)) + " hours"
    elif human_sec < 31536000:
        time_str = str(round(human_sec / 86400, 1)) + " days"
    else:
        time_str = str(round(human_sec / 31536000, 1)) + " years"
    print(name + ": " + time_str)`,
    tags: ["dictionaries", "math", "architecture", "hard", "module-4"],
  },
  {
    id: "ex-20",
    title: "🤖 AI Code Reviewer",
    description: "Review AI-generated code! Find bugs, suggest improvements, and add edge case handling.",
    difficulty: 3,
    gradeRange: [8, 10],
    skillLevel: "advanced",
    starterCode: `# AI generated this code to find duplicates in a list.
# It has issues! Review, fix, and improve it.

def find_duplicates(lst):
    duplicates = []
    for i in range(len(lst)):
        for j in range(len(lst)):  # Bug: should start from i+1
            if lst[i] == lst[j]:   # Bug: will match with itself
                duplicates.append(lst[i])
    return duplicates

# Test
nums = [1, 3, 5, 3, 7, 1, 9]
print("Duplicates:", find_duplicates(nums))
# Expected: [1, 3] (each duplicate once)
# Actual output will be wrong — fix it!`,
    hint: "Two bugs: inner loop should start from i+1, and check if item already in duplicates before appending.",
    solution: `def find_duplicates(lst):
    duplicates = []
    for i in range(len(lst)):
        for j in range(i + 1, len(lst)):
            if lst[i] == lst[j] and lst[i] not in duplicates:
                duplicates.append(lst[i])
    return duplicates

nums = [1, 3, 5, 3, 7, 1, 9]
print("Duplicates:", find_duplicates(nums))
print("Empty list:", find_duplicates([]))
print("No dupes:", find_duplicates([1, 2, 3]))`,
    expectedOutput: "Duplicates: [1, 3]\nEmpty list: []\nNo dupes: []",
    tags: ["debugging", "lists", "ai-review", "hard", "module-5"],
  },

  // ═══ 🚀 COURSE PROJECTS ═══
  // These are capstone projects linked to specific lessons via fromLesson

  // ─── Area 1: Starter Island ────────────────────────────────
  {
    id: "proj-1-6",
    title: "🎮 Text Adventure Game · 文字冒险游戏",
    description: "Build a complete text adventure with multiple paths, inventory, and battles! 综合运用 print/变量/input/if-else 构建完整冒险游戏",
    difficulty: 2,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🎮 Text Adventure Game · 文字冒险游戏
# Combine print, variables, input, if/else to build a full adventure!
# 综合运用 print、变量、input、if/else 构建完整冒险游戏！

# ─── Game Setup · 游戏设置 ───
print("=" * 40)
print("  ⚔️  THE DARK FOREST ADVENTURE  ⚔️")
print("=" * 40)

player_name = "Hero"  # TODO: use input() to ask for name
health = 100
gold = 0
inventory = []

print("Welcome, " + player_name + "!")
print("Health: " + str(health) + " | Gold: " + str(gold))
print()

# ─── Room 1: The Entrance · 入口 ───
print("🌲 You stand at the entrance of a dark forest.")
print("You see two paths:")
print("  1. 🌑 A dark cave to the LEFT")
print("  2. 🌿 A mossy trail to the RIGHT")

choice1 = "left"  # TODO: use input() to ask player

if choice1 == "left":
    print("\\n🌑 You enter the dark cave...")
    print("You find a rusty sword on the ground!")
    inventory.append("sword")
    # TODO: Add more story here!
    # Maybe a treasure chest? A puzzle?

elif choice1 == "right":
    print("\\n🌿 You walk down the mossy trail...")
    print("A friendly merchant appears!")
    # TODO: Add merchant interaction
    # Maybe buy items? Trade gold?

else:
    print("\\nYou stand confused and a wolf attacks!")
    health = health - 30

# ─── Room 2: TODO · 第二个房间 ───
# TODO: Add a second room with new choices!
# Ideas: A bridge with a troll, a magic fountain, a dragon's lair

# ─── Final Boss: TODO · 最终Boss ───
# TODO: Add a final encounter!
# Use inventory items, health checks, and dramatic story!

# ─── Game Over · 游戏结束 ───
print("\\n" + "=" * 40)
print("  GAME OVER")
print("  " + player_name + "'s Final Stats:")
print("  Health: " + str(health))
print("  Gold: " + str(gold))
print("  Inventory: " + str(inventory))
print("=" * 40)`,
    hint: "Start with Room 1, add input() for choices, use if/elif/else for branching paths. Track inventory as a list and health as a variable.",
    solution: `print("=" * 40)
print("  ⚔️  THE DARK FOREST ADVENTURE  ⚔️")
print("=" * 40)
player_name = "Hero"
health = 100
gold = 0
inventory = []
print("Welcome, " + player_name + "!")
print("Health: " + str(health) + " | Gold: " + str(gold))
print()
print("🌲 You stand at the entrance of a dark forest.")
print("  1. 🌑 A dark cave to the LEFT")
print("  2. 🌿 A mossy trail to the RIGHT")
choice1 = "left"
if choice1 == "left":
    print("\\n🌑 You enter the dark cave...")
    print("You find a rusty sword!")
    inventory.append("sword")
    print("A treasure chest! You find 50 gold!")
    gold += 50
elif choice1 == "right":
    print("\\n🌿 A friendly merchant appears!")
    print("He gives you a shield for free!")
    inventory.append("shield")
else:
    print("A wolf attacks! -30 HP")
    health -= 30
print("\\n🐉 A dragon blocks your path!")
if "sword" in inventory:
    print("You fight with your sword! The dragon is defeated!")
    gold += 100
else:
    print("You have no weapon... The dragon breathes fire! -50 HP")
    health -= 50
print("\\n" + "=" * 40)
print("  GAME OVER")
print("  Health: " + str(health) + " | Gold: " + str(gold))
print("  Inventory: " + str(inventory))
print("=" * 40)`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-1", "综合"],
    fromLesson: "1-6",
  },

  // ─── Area 2: Loop Forest ──────────────────────────────────
  {
    id: "proj-2-6",
    title: "🪨📄✂️ Rock Paper Scissors Championship · 石头剪刀布锦标赛",
    description: "Build a multi-round RPS tournament with scoring, history, and statistics! 综合循环+列表+条件构建石头剪刀布锦标赛",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🪨📄✂️ Rock Paper Scissors Championship · 石头剪刀布锦标赛
# Combine loops, lists, conditions, and random!
# 综合运用循环、列表、条件和随机模块！

import random

# ─── Game Config · 游戏配置 ───
choices = ["rock", "paper", "scissors"]
emoji_map = {"rock": "🪨", "paper": "📄", "scissors": "✂️"}
total_rounds = 5

# ─── Score Tracking · 分数追踪 ───
player_wins = 0
computer_wins = 0
ties = 0
history = []  # Store each round result

print("=" * 45)
print("  🏆 ROCK PAPER SCISSORS CHAMPIONSHIP 🏆")
print("  Best of " + str(total_rounds) + " rounds!")
print("=" * 45)

# ─── Game Loop · 游戏循环 ───
for round_num in range(1, total_rounds + 1):
    print("\\n--- Round " + str(round_num) + " ---")

    # Player choice (simulated - change these!)
    player_choices = ["rock", "paper", "scissors", "rock", "paper"]
    player = player_choices[round_num - 1]

    # Computer choice
    computer = random.choice(choices)

    print("You: " + emoji_map[player] + " " + player)
    print("CPU: " + emoji_map[computer] + " " + computer)

    # TODO: Determine winner for this round!
    # Rock beats scissors, scissors beats paper, paper beats rock
    # Update player_wins, computer_wins, or ties
    # Add result to history list

    # if player == computer:
    #     ...
    # elif ...:
    #     ...

# ─── Statistics · 统计 ───
print("\\n" + "=" * 45)
print("  📊 CHAMPIONSHIP RESULTS")
print("=" * 45)

# TODO: Print final scores
# print("Player: " + str(player_wins) + " wins")
# print("Computer: " + str(computer_wins) + " wins")
# print("Ties: " + str(ties))

# TODO: Determine champion!
# Who has more wins?

# TODO: Print match history
# for record in history:
#     print(record)

# ─── BONUS: Win Streak · 额外挑战：连胜记录 ───
# TODO: Find the longest win streak for the player!
# Hint: Loop through history, count consecutive wins`,
    hint: "Use if/elif/else inside the for loop to check win conditions. Append results like 'Round 1: WIN' to the history list. For win streak, use a counter that resets on non-wins.",
    solution: `import random
choices = ["rock", "paper", "scissors"]
emoji_map = {"rock": "🪨", "paper": "📄", "scissors": "✂️"}
total_rounds = 5
player_wins = 0
computer_wins = 0
ties = 0
history = []
print("=" * 45)
print("  🏆 ROCK PAPER SCISSORS CHAMPIONSHIP 🏆")
print("=" * 45)
player_choices = ["rock", "paper", "scissors", "rock", "paper"]
for round_num in range(1, total_rounds + 1):
    print("\\n--- Round " + str(round_num) + " ---")
    player = player_choices[round_num - 1]
    computer = random.choice(choices)
    print("You: " + emoji_map[player] + " | CPU: " + emoji_map[computer])
    if player == computer:
        ties += 1
        history.append("Round " + str(round_num) + ": TIE")
        print("🤝 Tie!")
    elif (player == "rock" and computer == "scissors") or \\
         (player == "scissors" and computer == "paper") or \\
         (player == "paper" and computer == "rock"):
        player_wins += 1
        history.append("Round " + str(round_num) + ": WIN")
        print("🎉 You win!")
    else:
        computer_wins += 1
        history.append("Round " + str(round_num) + ": LOSE")
        print("😢 CPU wins!")
print("\\n" + "=" * 45)
print("  📊 RESULTS")
print("Player: " + str(player_wins) + " | CPU: " + str(computer_wins) + " | Ties: " + str(ties))
if player_wins > computer_wins:
    print("🏆 YOU ARE THE CHAMPION!")
elif computer_wins > player_wins:
    print("🤖 Computer wins the championship!")
else:
    print("🤝 It's a draw!")
for record in history:
    print("  " + record)`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-2", "综合"],
    fromLesson: "2-6",
  },

  // ─── Area 3: Builder City ─────────────────────────────────
  {
    id: "proj-3-7",
    title: "📊 Student Grade Manager · 学生成绩管理器",
    description: "Build a complete grade management system with functions, dictionaries, files, and error handling! 综合函数+字典+文件+异常处理",
    difficulty: 3,
    gradeRange: [7, 10],
    skillLevel: "advanced",
    starterCode: `# 📊 Student Grade Manager · 学生成绩管理器
# Combine functions, dictionaries, file I/O, and error handling!
# 综合运用函数、字典、文件读写和异常处理！

# ─── Data Storage · 数据存储 ───
students = {}
# Format: {"Alice": [90, 85, 92], "Bob": [78, 82, 88]}

# ─── Core Functions · 核心函数 ───

def add_student(name):
    """Add a new student · 添加新学生"""
    # TODO: Add student to dictionary with empty grade list
    # Handle case where student already exists!
    pass

def add_grade(name, grade):
    """Add a grade for a student · 为学生添加成绩"""
    # TODO: Validate grade is 0-100
    # Handle case where student doesn't exist!
    pass

def get_average(name):
    """Calculate student's average · 计算学生平均分"""
    # TODO: Return average grade
    # Handle empty grade list and missing student!
    pass

def get_letter_grade(score):
    """Convert score to letter grade · 转换字母等级"""
    # TODO: A (90+), B (80-89), C (70-79), D (60-69), F (<60)
    pass

def print_report(name):
    """Print a student report card · 打印成绩单"""
    # TODO: Show name, all grades, average, letter grade
    pass

def print_class_summary():
    """Print summary for all students · 打印班级总结"""
    # TODO: Show each student's average and class average
    pass

# ─── Menu System · 菜单系统 ───

def show_menu():
    print("\\n📊 STUDENT GRADE MANAGER")
    print("1. Add Student · 添加学生")
    print("2. Add Grade · 添加成绩")
    print("3. View Report · 查看成绩单")
    print("4. Class Summary · 班级总结")
    print("5. Exit · 退出")

# ─── Main Program · 主程序 ───

# Add some test data
# TODO: Add students and grades to test your functions!
# add_student("Alice")
# add_grade("Alice", 92)
# add_grade("Alice", 85)
# add_grade("Alice", 90)

# TODO: Simulate menu choices to demonstrate the system
# show_menu()
# print_report("Alice")
# print_class_summary()

# ─── BONUS: File Save/Load · 额外：文件保存读取 ───
# def save_to_file(filename):
#     """Save all data to a file"""
#     pass
#
# def load_from_file(filename):
#     """Load data from a file"""
#     pass`,
    hint: "Start with add_student and add_grade. Use 'if name in students' to check existence. For get_average, use sum(grades)/len(grades) with a check for empty lists.",
    solution: `students = {}

def add_student(name):
    if name in students:
        print("⚠️ " + name + " already exists!")
        return
    students[name] = []
    print("✅ Added " + name)

def add_grade(name, grade):
    if name not in students:
        print("❌ Student not found: " + name)
        return
    if grade < 0 or grade > 100:
        print("❌ Invalid grade: " + str(grade))
        return
    students[name].append(grade)
    print("✅ Added grade " + str(grade) + " for " + name)

def get_average(name):
    if name not in students or len(students[name]) == 0:
        return 0
    return sum(students[name]) / len(students[name])

def get_letter_grade(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    if score >= 60: return "D"
    return "F"

def print_report(name):
    if name not in students:
        print("❌ Student not found")
        return
    avg = get_average(name)
    print("\\n📋 Report for " + name)
    print("Grades: " + str(students[name]))
    print("Average: " + str(round(avg, 1)))
    print("Letter: " + get_letter_grade(avg))

def print_class_summary():
    print("\\n📊 CLASS SUMMARY")
    total = 0
    for name in students:
        avg = get_average(name)
        total += avg
        print("  " + name + ": " + str(round(avg, 1)) + " (" + get_letter_grade(avg) + ")")
    if len(students) > 0:
        print("Class Average: " + str(round(total / len(students), 1)))

add_student("Alice")
add_grade("Alice", 92)
add_grade("Alice", 85)
add_grade("Alice", 90)
add_student("Bob")
add_grade("Bob", 78)
add_grade("Bob", 82)
print_report("Alice")
print_report("Bob")
print_class_summary()`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-3", "综合"],
    fromLesson: "3-7",
  },

  // ─── Area 4: Science Lab ──────────────────────────────────
  {
    id: "proj-4-1",
    title: "🚀 Space Station Dashboard · 太空站仪表盘",
    description: "Build a space station monitoring dashboard with real-time data display! 使用数据结构构建太空站监控系统",
    difficulty: 2,
    gradeRange: [7, 10],
    skillLevel: "intermediate",
    starterCode: `# 🚀 Space Station Dashboard · 太空站仪表盘
# Monitor oxygen, power, temperature, and crew status!
# 监控氧气、电力、温度和船员状态！

import random

# ─── Station Data · 空间站数据 ───
station = {
    "name": "ISS Python",
    "oxygen": 98.5,       # percentage
    "power": 85.0,        # percentage
    "temperature": 22.3,  # celsius
    "crew": ["Commander Li", "Engineer Kim", "Scientist Patel"],
    "modules": {
        "Lab": {"status": "online", "experiments": 3},
        "Habitat": {"status": "online", "occupants": 3},
        "Solar Array": {"status": "online", "output": 85},
        "Airlock": {"status": "standby", "pressure": 1.0},
    }
}

# ─── Display Functions · 显示函数 ───

def show_header():
    print("=" * 50)
    print("  🚀 " + station["name"] + " DASHBOARD")
    print("=" * 50)

def show_vitals():
    """Display station vital signs · 显示关键指标"""
    # TODO: Show oxygen, power, temperature with status bars
    # Example: Oxygen: [████████░░] 85%
    # Use warning colors: 🟢 >80%, 🟡 50-80%, 🔴 <50%
    pass

def show_crew():
    """Display crew roster · 显示船员名册"""
    # TODO: List all crew members with their roles
    pass

def show_modules():
    """Display module status · 显示模块状态"""
    # TODO: Loop through modules dict and show status
    pass

def simulate_event():
    """Random station event · 随机事件"""
    events = [
        ("☄️ Micrometeorite impact!", "power", -5),
        ("🔧 Solar panel maintenance", "power", -10),
        ("🌬️ Oxygen recycler boost", "oxygen", 3),
        ("🌡️ Thermal fluctuation", "temperature", random.uniform(-2, 2)),
        ("✅ Systems nominal", "power", 2),
    ]
    # TODO: Pick random event and apply it to station data
    pass

def check_alerts():
    """Check for critical conditions · 检查警报"""
    # TODO: Alert if oxygen < 50, power < 30, temp outside 18-28
    pass

# ─── Main Dashboard Loop · 主仪表盘循环 ───
show_header()

# Simulate 5 time cycles
for cycle in range(1, 6):
    print("\\n⏱ Cycle " + str(cycle) + " " + "-" * 35)
    show_vitals()
    simulate_event()
    check_alerts()

show_crew()
show_modules()
print("\\n🛸 Dashboard session complete.")`,
    hint: "For status bars, use '█' * int(value/10) + '░' * (10 - int(value/10)). For alerts, use if statements to check thresholds.",
    solution: `import random
station = {
    "name": "ISS Python",
    "oxygen": 98.5,
    "power": 85.0,
    "temperature": 22.3,
    "crew": ["Commander Li", "Engineer Kim", "Scientist Patel"],
    "modules": {"Lab": {"status": "online"}, "Habitat": {"status": "online"}, "Solar Array": {"status": "online"}, "Airlock": {"status": "standby"}},
}
def show_header():
    print("=" * 50)
    print("  🚀 " + station["name"] + " DASHBOARD")
    print("=" * 50)
def status_icon(val):
    if val > 80: return "🟢"
    if val > 50: return "🟡"
    return "🔴"
def bar(val):
    filled = int(val / 10)
    return "█" * filled + "░" * (10 - filled)
def show_vitals():
    print(status_icon(station["oxygen"]) + " O2:   [" + bar(station["oxygen"]) + "] " + str(round(station["oxygen"], 1)) + "%")
    print(status_icon(station["power"]) + " Power:[" + bar(station["power"]) + "] " + str(round(station["power"], 1)) + "%")
    t = station["temperature"]
    icon = "🟢" if 18 <= t <= 28 else "🔴"
    print(icon + " Temp: " + str(round(t, 1)) + "°C")
def simulate_event():
    events = [("☄️ Impact!", "power", -5), ("🌬️ O2 boost", "oxygen", 3), ("✅ Nominal", "power", 2)]
    e = random.choice(events)
    print(e[0])
    station[e[1]] = max(0, min(100, station[e[1]] + e[2]))
def check_alerts():
    if station["oxygen"] < 50: print("⚠️ LOW OXYGEN!")
    if station["power"] < 30: print("⚠️ LOW POWER!")
show_header()
for cycle in range(1, 6):
    print("\\n⏱ Cycle " + str(cycle) + " " + "-" * 35)
    show_vitals()
    simulate_event()
    check_alerts()
print("\\n🛸 Done.")`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "science-lab"],
    fromLesson: "4-1",
  },
  {
    id: "proj-4-2",
    title: "🎰 Casino Lucky Wheel · 赌场幸运轮盘",
    description: "Build a casino game with probability, betting, and statistics! 运用概率和随机模块构建赌场游戏",
    difficulty: 2,
    gradeRange: [7, 10],
    skillLevel: "intermediate",
    starterCode: `# 🎰 Casino Lucky Wheel · 赌场幸运轮盘
# Use probability and random to simulate a casino wheel!
# 运用概率和随机数模拟赌场轮盘！

import random

# ─── Wheel Setup · 轮盘设置 ───
wheel_sections = [
    {"symbol": "🍒", "name": "Cherry",  "multiplier": 2,  "chance": 30},
    {"symbol": "🍋", "name": "Lemon",   "multiplier": 3,  "chance": 25},
    {"symbol": "🔔", "name": "Bell",    "multiplier": 5,  "chance": 20},
    {"symbol": "⭐", "name": "Star",    "multiplier": 10, "chance": 15},
    {"symbol": "💎", "name": "Diamond", "multiplier": 25, "chance": 8},
    {"symbol": "🃏", "name": "Joker",   "multiplier": 50, "chance": 2},
]

# ─── Player State · 玩家状态 ───
balance = 100
bet_amount = 10
spin_history = []
total_spins = 0

print("🎰 WELCOME TO THE LUCKY WHEEL! 🎰")
print("Starting balance: $" + str(balance))

# ─── Game Functions · 游戏函数 ───

def spin_wheel():
    """Spin and return a section based on probability · 按概率旋转轮盘"""
    # TODO: Use random.randint(1, 100) and cumulative chance
    # to pick a section weighted by probability
    # Hint: loop through sections, accumulate chances
    pass

def display_spin(result):
    """Show spin animation · 显示旋转动画"""
    # TODO: Print spinning symbols, then reveal the result
    # Example: 🎰 Spinning... 🍒🍋🔔⭐ → 💎 DIAMOND! x25!
    pass

def place_bet(amount):
    """Place a bet · 下注"""
    # TODO: Check if player has enough balance
    # Deduct bet from balance
    pass

def calculate_winnings(result, bet):
    """Calculate and apply winnings · 计算奖金"""
    # TODO: multiply bet by result's multiplier
    # Add to balance, return winnings amount
    pass

def show_stats():
    """Show game statistics · 显示统计"""
    # TODO: Total spins, wins, losses, biggest win
    # Win rate, profit/loss
    pass

# ─── Game Loop · 游戏循环 ───
for spin_num in range(1, 11):
    print("\\n--- Spin " + str(spin_num) + " | Balance: $" + str(balance) + " ---")
    # TODO: place_bet, spin_wheel, display_spin, calculate_winnings
    # Record results in spin_history

print("\\n" + "=" * 40)
show_stats()
print("Final balance: $" + str(balance))`,
    hint: "For weighted random: pick a number 1-100, loop through sections accumulating chances. If your number <= cumulative chance, that's the result!",
    solution: `import random
wheel_sections = [
    {"symbol": "🍒", "name": "Cherry", "multiplier": 2, "chance": 30},
    {"symbol": "🍋", "name": "Lemon", "multiplier": 3, "chance": 25},
    {"symbol": "🔔", "name": "Bell", "multiplier": 5, "chance": 20},
    {"symbol": "⭐", "name": "Star", "multiplier": 10, "chance": 15},
    {"symbol": "💎", "name": "Diamond", "multiplier": 25, "chance": 8},
    {"symbol": "🃏", "name": "Joker", "multiplier": 50, "chance": 2},
]
balance = 100
spin_history = []
print("🎰 WELCOME TO THE LUCKY WHEEL!")
print("Balance: $" + str(balance))
def spin_wheel():
    r = random.randint(1, 100)
    cumulative = 0
    for s in wheel_sections:
        cumulative += s["chance"]
        if r <= cumulative:
            return s
    return wheel_sections[0]
for i in range(1, 11):
    bet = 10
    if balance < bet:
        print("Broke! Game over.")
        break
    balance -= bet
    result = spin_wheel()
    winnings = bet * result["multiplier"]
    balance += winnings
    net = winnings - bet
    spin_history.append(net)
    print("Spin " + str(i) + ": " + result["symbol"] + " " + result["name"] + " x" + str(result["multiplier"]) + " → $" + str(winnings) + " (net " + ("+" if net > 0 else "") + str(net) + ")")
print("\\nFinal: $" + str(balance) + " | Spins: " + str(len(spin_history)))`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-4", "probability"],
    fromLesson: "4-2",
  },
  {
    id: "proj-4-3",
    title: "🐍 Angry Pythons · 文字版愤怒的小鸟",
    description: "Build a text-based physics game with angle, velocity, and trajectory! 运用数学和物理公式构建投射游戏",
    difficulty: 3,
    gradeRange: [7, 10],
    skillLevel: "intermediate",
    starterCode: `# 🐍 Angry Pythons · 文字版愤怒的小鸟
# Use math to simulate projectile physics!
# 运用数学模拟抛射物理！

import random
import math

# ─── Game Setup · 游戏设置 ───
GRAVITY = 9.8
GROUND_WIDTH = 50  # characters wide

# Target position (random)
target_x = random.randint(20, 45)
target_height = random.randint(1, 5)

# Player stats
birds_left = 5
score = 0
targets_hit = 0

print("🐍 ANGRY PYTHONS! 🐍")
print("Hit the pig at position " + str(target_x) + "!")

# ─── Physics Functions · 物理函数 ───

def calculate_trajectory(angle_deg, velocity):
    """Calculate landing position · 计算落点"""
    # TODO: Convert angle to radians
    # Use physics: range = v² * sin(2θ) / g
    # Return landing x position
    # Hint: math.radians(), math.sin()
    pass

def draw_ground(landing_x, target_x):
    """Draw ASCII ground with landing spot and target · 绘制地面"""
    # TODO: Draw a line of _ characters
    # Mark target with 🐷 and landing with 💥
    # Example: ___________💥_______🐷___________
    pass

def check_hit(landing_x, target_x, tolerance=2):
    """Check if shot hit the target · 检查是否命中"""
    # TODO: Return True if landing is within tolerance of target
    pass

def show_shot_info(angle, velocity, landing_x):
    """Display shot information · 显示射击信息"""
    # TODO: Print angle, velocity, distance, hit/miss
    pass

# ─── Game Loop · 游戏循环 ───
shots = [
    (45, 20),  # (angle, velocity) — adjust these!
    (30, 25),
    (60, 18),
    (40, 22),
    (50, 21),
]

for i in range(min(birds_left, len(shots))):
    angle, velocity = shots[i]
    print("\\n🐍 Bird " + str(i + 1) + " | Angle: " + str(angle) + "° | Power: " + str(velocity))

    landing = calculate_trajectory(angle, velocity)
    # TODO: draw_ground, check_hit, show_shot_info
    # Update score if hit!

print("\\n" + "=" * 40)
print("Score: " + str(score) + " | Targets hit: " + str(targets_hit))`,
    hint: "Use math.radians(angle) to convert degrees. The range formula is: v² × sin(2θ) / g. Compare landing_x to target_x with abs() for hit detection.",
    solution: `import random
import math
GRAVITY = 9.8
target_x = random.randint(20, 45)
birds_left = 5
score = 0
print("🐍 ANGRY PYTHONS!")
print("Target at position: " + str(target_x))
def calculate_trajectory(angle_deg, velocity):
    angle_rad = math.radians(angle_deg)
    return (velocity ** 2) * math.sin(2 * angle_rad) / GRAVITY
def check_hit(landing, target, tol=3):
    return abs(landing - target) <= tol
shots = [(45, 20), (30, 25), (60, 18), (40, 22), (50, 21)]
for i in range(len(shots)):
    angle, vel = shots[i]
    landing = calculate_trajectory(angle, vel)
    hit = check_hit(landing, target_x)
    status = "💥 HIT!" if hit else "💨 Miss"
    if hit: score += 100
    print("Bird " + str(i+1) + ": " + str(angle) + "° power " + str(vel) + " → landed at " + str(round(landing, 1)) + " " + status)
print("\\nScore: " + str(score))`,
    language: "python",
    category: "Simulations",
    categoryZh: "模拟",
    tags: ["project", "area-4", "physics", "math"],
    fromLesson: "4-3",
  },
  {
    id: "proj-4-4",
    title: "🔍 CSI Detective Game · CSI 探案游戏",
    description: "Build a mystery-solving game with clues, suspects, and deduction! 构建推理探案游戏",
    difficulty: 2,
    gradeRange: [7, 10],
    skillLevel: "intermediate",
    starterCode: `# 🔍 CSI Detective Game · CSI 探案游戏
# Solve a mystery using logic and deduction!
# 运用逻辑推理破解谜案！

import random

# ─── Case Setup · 案件设置 ───
suspects = {
    "Professor Plum": {"alibi": "Was in the library", "motive": "Jealousy", "evidence": "fingerprints"},
    "Colonel Mustard": {"alibi": "Was at dinner", "motive": "Money", "evidence": "footprints"},
    "Miss Scarlet": {"alibi": "Was sleeping", "motive": "Revenge", "evidence": "hair fiber"},
}

weapons = ["🔪 Knife", "🔫 Revolver", "🕯️ Candlestick", "🔧 Wrench"]
locations = ["🏠 Kitchen", "📚 Library", "🛏️ Bedroom", "🌿 Garden"]

# Randomly select the real culprit, weapon, location
culprit = random.choice(list(suspects.keys()))
weapon = random.choice(weapons)
location = random.choice(locations)

clues_found = []
investigations = 5

print("🔍 CSI: PYTHON DETECTIVE AGENCY 🔍")
print("A crime has been committed! You have " + str(investigations) + " investigations.")
print()

# ─── Investigation Functions · 调查函数 ───

def investigate_suspect(name):
    """Interview a suspect · 审讯嫌疑人"""
    # TODO: Show suspect's alibi and motive
    # Give a clue: if they're the culprit, their alibi has a flaw
    pass

def examine_evidence(name):
    """Examine physical evidence · 检查物证"""
    # TODO: Show what evidence is linked to each suspect
    # The culprit's evidence is found at the crime scene
    pass

def search_location(loc):
    """Search a location for clues · 搜查地点"""
    # TODO: If this is the crime location, find weapon traces
    pass

def make_accusation(suspect_name, weapon_guess, location_guess):
    """Make your final accusation · 做出最终指控"""
    # TODO: Check if all three are correct
    # Print dramatic reveal!
    pass

# ─── Game Flow · 游戏流程 ───
actions = [
    ("suspect", "Professor Plum"),
    ("suspect", "Colonel Mustard"),
    ("evidence", "Miss Scarlet"),
    ("location", "🏠 Kitchen"),
    ("location", "📚 Library"),
]

for i, (action_type, target) in enumerate(actions):
    print("--- Investigation " + str(i + 1) + " ---")
    # TODO: Call appropriate function based on action_type

# ─── Final Accusation · 最终指控 ───
# TODO: Based on clues, make your accusation!
# make_accusation("???", "???", "???")

print("\\n🔍 Case closed!")`,
    hint: "Give subtle clues: if the suspect is the culprit, print a different message. Use 'if name == culprit' to control what clues appear.",
    solution: `import random
suspects = {
    "Professor Plum": {"alibi": "library", "motive": "Jealousy"},
    "Colonel Mustard": {"alibi": "dinner", "motive": "Money"},
    "Miss Scarlet": {"alibi": "sleeping", "motive": "Revenge"},
}
weapons = ["Knife", "Revolver", "Candlestick"]
locations = ["Kitchen", "Library", "Bedroom"]
culprit = random.choice(list(suspects.keys()))
weapon = random.choice(weapons)
location = random.choice(locations)
print("🔍 CSI: PYTHON DETECTIVE 🔍")
print("A crime occurred! Investigate to find the truth.\\n")
for name in suspects:
    info = suspects[name]
    if name == culprit:
        print("🕵️ " + name + ": Claims " + info["alibi"] + " (but seems nervous!)")
    else:
        print("🕵️ " + name + ": Claims " + info["alibi"] + " (seems honest)")
print()
for loc in locations:
    if loc == location:
        print("🔍 " + loc + ": Found traces of " + weapon + "!")
    else:
        print("🔍 " + loc + ": Nothing unusual.")
print("\\n🎯 ACCUSATION: " + culprit + " with " + weapon + " in " + location)
print("✅ Case solved!")`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "logic", "game"],
    fromLesson: "4-4",
  },
  {
    id: "proj-4-5",
    title: "🔐 Password Manager · 安全密码管理器",
    description: "Build a password manager with encryption, strength checking, and secure storage! 构建密码管理器",
    difficulty: 3,
    gradeRange: [7, 10],
    skillLevel: "advanced",
    starterCode: `# 🔐 Password Manager · 安全密码管理器
# Build a secure password system with encryption!
# 构建带加密的安全密码系统！

import random
import string

# ─── Password Storage · 密码存储 ───
vault = {}  # {"website": {"username": ..., "password": ..., "encrypted": ...}}
master_password = "admin123"  # TODO: Make this more secure!

# ─── Password Functions · 密码函数 ───

def generate_password(length=16, use_symbols=True):
    """Generate a strong random password · 生成强随机密码"""
    chars = string.ascii_letters + string.digits
    if use_symbols:
        chars += "!@#$%^&*"
    # TODO: Generate password of given length
    # Ensure at least 1 uppercase, 1 lowercase, 1 digit, 1 symbol
    pass

def check_strength(password):
    """Rate password strength · 评估密码强度"""
    # TODO: Check length, uppercase, lowercase, digits, symbols
    # Return score: "Weak 🔴", "Medium 🟡", "Strong 🟢", "Very Strong 💪"
    # Criteria:
    #   - Length >= 8: +1 point
    #   - Has uppercase: +1 point
    #   - Has lowercase: +1 point
    #   - Has digit: +1 point
    #   - Has symbol: +1 point
    #   - Length >= 16: +1 bonus
    pass

def simple_encrypt(text, shift=3):
    """Caesar cipher encryption · 凯撒密码加密"""
    # TODO: Shift each character by 'shift' positions
    # This is basic — real apps use much stronger encryption!
    pass

def simple_decrypt(text, shift=3):
    """Decrypt Caesar cipher · 解密凯撒密码"""
    # TODO: Reverse the encryption
    pass

def add_entry(website, username, password):
    """Add a password entry · 添加密码条目"""
    # TODO: Encrypt password and store in vault
    pass

def get_entry(website):
    """Retrieve and decrypt a password · 获取并解密密码"""
    # TODO: Look up website, decrypt and return password
    pass

def list_entries():
    """List all stored websites · 列出所有存储的网站"""
    # TODO: Show websites and usernames (NOT passwords!)
    pass

# ─── Demo · 演示 ───
print("🔐 PASSWORD MANAGER v1.0")
print("=" * 35)

# TODO: Generate some passwords and check their strength
# pwd1 = generate_password(12)
# print("Generated: " + pwd1)
# print("Strength: " + check_strength(pwd1))

# TODO: Add entries and retrieve them
# add_entry("google.com", "user@gmail.com", "MyP@ssw0rd!")
# add_entry("github.com", "coder123", generate_password())
# list_entries()
# get_entry("google.com")`,
    hint: "For generate_password, use random.choice() in a loop. For check_strength, use any(c.isupper() for c in password) style checks. For Caesar cipher, use ord() and chr().",
    solution: `import random
import string
vault = {}
def generate_password(length=16):
    chars = string.ascii_letters + string.digits + "!@#$%^&*"
    pwd = ""
    for i in range(length):
        pwd += random.choice(chars)
    return pwd
def check_strength(password):
    score = 0
    if len(password) >= 8: score += 1
    if len(password) >= 16: score += 1
    if any(c.isupper() for c in password): score += 1
    if any(c.islower() for c in password): score += 1
    if any(c.isdigit() for c in password): score += 1
    if any(c in "!@#$%^&*" for c in password): score += 1
    levels = {0: "Weak 🔴", 1: "Weak 🔴", 2: "Medium 🟡", 3: "Medium 🟡", 4: "Strong 🟢", 5: "Very Strong 💪", 6: "Very Strong 💪"}
    return levels.get(score, "Very Strong 💪")
def simple_encrypt(text, shift=3):
    return "".join(chr(ord(c) + shift) for c in text)
def simple_decrypt(text, shift=3):
    return "".join(chr(ord(c) - shift) for c in text)
def add_entry(website, username, password):
    vault[website] = {"username": username, "encrypted": simple_encrypt(password)}
    print("✅ Added " + website)
def get_entry(website):
    if website not in vault:
        print("❌ Not found")
        return
    e = vault[website]
    print("🔐 " + website + " | User: " + e["username"] + " | Pass: " + simple_decrypt(e["encrypted"]))
print("🔐 PASSWORD MANAGER v1.0")
pwd = generate_password(16)
print("Generated: " + pwd + " | " + check_strength(pwd))
add_entry("google.com", "user@gmail.com", "MyP@ss123!")
add_entry("github.com", "coder", pwd)
get_entry("google.com")
get_entry("github.com")`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "encryption", "security"],
    fromLesson: "4-5",
  },
  {
    id: "proj-4-6",
    title: "🌍 Life Simulator · 虚拟生态系统",
    description: "Simulate a virtual ecosystem with creatures, food chains, and evolution! 模拟虚拟生态系统",
    difficulty: 3,
    gradeRange: [7, 10],
    skillLevel: "advanced",
    starterCode: `# 🌍 Life Simulator · 虚拟生态系统
# Simulate an ecosystem with creatures, food, and evolution!
# 模拟一个有生物、食物和进化的生态系统！

import random

# ─── World Setup · 世界设置 ───
world = {
    "day": 0,
    "weather": "sunny",
    "food_supply": 100,
}

# ─── Creature Types · 生物类型 ───
creatures = []

def create_creature(name, species, energy=50, speed=5):
    """Create a new creature · 创建新生物"""
    return {
        "name": name,
        "species": species,
        "energy": energy,
        "speed": speed,
        "age": 0,
        "alive": True,
    }

# Starting population
creatures.append(create_creature("Bunny1", "rabbit", 40, 7))
creatures.append(create_creature("Bunny2", "rabbit", 45, 6))
creatures.append(create_creature("Fox1", "fox", 60, 8))
creatures.append(create_creature("Deer1", "deer", 50, 9))

# ─── Simulation Functions · 模拟函数 ───

def weather_change():
    """Random weather · 随机天气"""
    # TODO: Change weather randomly
    # sunny = more food, rainy = less food, storm = danger!
    pass

def feed_creatures():
    """Creatures eat · 生物进食"""
    # TODO: Each creature tries to eat from food_supply
    # Rabbits eat plants (food_supply)
    # Foxes eat rabbits!
    # Deduct energy if can't eat
    pass

def age_creatures():
    """Age all creatures · 生物变老"""
    # TODO: Increase age, decrease energy over time
    # If energy <= 0, creature dies (alive = False)
    pass

def reproduce():
    """Creatures reproduce · 生物繁殖"""
    # TODO: If creature has enough energy (>80), create offspring
    # Baby has slightly random stats (mutation!)
    pass

def show_world():
    """Display world status · 显示世界状态"""
    # TODO: Show day, weather, food, living creatures
    pass

# ─── Simulation Loop · 模拟循环 ───
print("🌍 LIFE SIMULATOR")
print("=" * 40)

for day in range(1, 11):
    world["day"] = day
    print("\\n🌅 Day " + str(day) + " " + "-" * 30)

    weather_change()
    feed_creatures()
    age_creatures()
    reproduce()
    show_world()

# ─── Final Report · 最终报告 ───
print("\\n" + "=" * 40)
print("🌍 SIMULATION COMPLETE")
alive = [c for c in creatures if c["alive"]]
print("Survivors: " + str(len(alive)) + "/" + str(len(creatures)))
for c in alive:
    print("  " + c["name"] + " (" + c["species"] + ") age " + str(c["age"]) + " energy " + str(c["energy"]))`,
    hint: "For weather, use random.choice(['sunny','rainy','storm']). For feeding, loop through creatures and check species. For reproduction, append new creatures to the list.",
    solution: `import random
world = {"day": 0, "weather": "sunny", "food_supply": 100}
creatures = []
def create_creature(name, species, energy=50, speed=5):
    return {"name": name, "species": species, "energy": energy, "speed": speed, "age": 0, "alive": True}
creatures.append(create_creature("Bunny1", "rabbit", 40, 7))
creatures.append(create_creature("Bunny2", "rabbit", 45, 6))
creatures.append(create_creature("Fox1", "fox", 60, 8))
next_id = 4
print("🌍 LIFE SIMULATOR\\n")
for day in range(1, 11):
    world["day"] = day
    world["weather"] = random.choice(["sunny", "sunny", "rainy", "storm"])
    if world["weather"] == "sunny": world["food_supply"] += 20
    elif world["weather"] == "storm": world["food_supply"] -= 10
    world["food_supply"] = max(0, min(200, world["food_supply"]))
    for c in creatures:
        if not c["alive"]: continue
        if c["species"] == "rabbit" and world["food_supply"] > 5:
            c["energy"] += 15
            world["food_supply"] -= 5
        elif c["species"] == "fox":
            prey = [x for x in creatures if x["species"] == "rabbit" and x["alive"]]
            if prey:
                target = random.choice(prey)
                target["alive"] = False
                c["energy"] += 30
            else:
                c["energy"] -= 20
        c["age"] += 1
        c["energy"] -= 10
        if c["energy"] <= 0: c["alive"] = False
    alive = [c for c in creatures if c["alive"]]
    print("Day " + str(day) + " " + world["weather"] + " | Food: " + str(world["food_supply"]) + " | Alive: " + str(len(alive)))
print("\\nSurvivors:")
for c in creatures:
    if c["alive"]: print("  " + c["name"] + " (" + c["species"] + ") E:" + str(c["energy"]))`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "simulation", "ecosystem"],
    fromLesson: "4-6",
  },

  // ─── Area 5: AI Frontier ──────────────────────────────────
  {
    id: "proj-5-1",
    title: "🐾 My AI Pet · AI宠物",
    description: "Build a virtual AI pet that learns your habits and responds to emotions! 构建会学习的AI宠物",
    difficulty: 2,
    gradeRange: [7, 10],
    skillLevel: "intermediate",
    starterCode: `# 🐾 My AI Pet · AI宠物
# Build a virtual pet that learns and adapts!
# 构建一个会学习和适应的虚拟宠物！

import random

# ─── Pet State · 宠物状态 ───
pet = {
    "name": "Buddy",
    "mood": "happy",        # happy, sad, hungry, excited, sleepy
    "hunger": 50,           # 0-100
    "happiness": 70,        # 0-100
    "energy": 80,           # 0-100
    "tricks_learned": [],
    "favorite_food": None,
    "interaction_count": 0,
}

# ─── Learning System · 学习系统 ───
food_memory = {}  # Track which foods are given most often
trick_attempts = {}  # Track trick practice

def feed_pet(food):
    """Feed the pet · 喂宠物"""
    # TODO: Decrease hunger, track food preferences
    # If fed the same food 3+ times, it becomes favorite!
    # Update food_memory dict
    pass

def play_with_pet(activity):
    """Play with pet · 和宠物玩"""
    # TODO: Increase happiness, decrease energy
    # Different activities have different effects
    # "fetch" → +20 happiness, -15 energy
    # "cuddle" → +10 happiness, -5 energy
    # "walk" → +15 happiness, -20 energy, -10 hunger boost
    pass

def teach_trick(trick_name):
    """Teach a new trick · 教新技能"""
    # TODO: Track attempts in trick_attempts dict
    # After 3 attempts, the pet learns the trick!
    # Add to tricks_learned list
    pass

def pet_respond():
    """Pet responds based on current state · 宠物根据状态回应"""
    # TODO: Show different responses based on mood
    # If hunger > 80 → "whimpers for food"
    # If happiness > 80 → "wags tail excitedly"
    # If energy < 20 → "yawns and curls up"
    pass

def update_mood():
    """Update mood based on stats · 根据状态更新心情"""
    # TODO: Calculate mood from hunger, happiness, energy
    pass

def show_status():
    """Display pet status · 显示宠物状态"""
    # TODO: Show name, mood emoji, all stats, tricks
    pass

# ─── Daily Simulation · 每日模拟 ───
print("🐾 Welcome to AI Pet Simulator!")
print("Your pet " + pet["name"] + " is ready to play!\\n")

actions = [
    ("feed", "kibble"), ("play", "fetch"), ("teach", "sit"),
    ("feed", "kibble"), ("play", "cuddle"), ("teach", "sit"),
    ("feed", "treat"), ("play", "walk"), ("teach", "sit"),
    ("feed", "kibble"), ("play", "fetch"), ("teach", "shake"),
]

for i, (action, target) in enumerate(actions):
    pet["interaction_count"] += 1
    print("--- Action " + str(i + 1) + " ---")
    # TODO: Call appropriate function
    # update_mood()
    # pet_respond()

show_status()`,
    hint: "For learning: use a dict to count food frequency. food_memory[food] = food_memory.get(food, 0) + 1. Check if count >= 3 to set favorite.",
    solution: `import random
pet = {"name": "Buddy", "hunger": 50, "happiness": 70, "energy": 80, "tricks": [], "interactions": 0}
food_memory = {}
trick_attempts = {}
def feed(food):
    pet["hunger"] = max(0, pet["hunger"] - 20)
    food_memory[food] = food_memory.get(food, 0) + 1
    if food_memory[food] >= 3:
        print("❤️ " + food + " is now favorite!")
    print("🍖 Fed " + food + " | Hunger: " + str(pet["hunger"]))
def play(activity):
    effects = {"fetch": (20, 15), "cuddle": (10, 5), "walk": (15, 20)}
    h, e = effects.get(activity, (10, 10))
    pet["happiness"] = min(100, pet["happiness"] + h)
    pet["energy"] = max(0, pet["energy"] - e)
    print("🎾 " + activity + " | Happy: " + str(pet["happiness"]) + " Energy: " + str(pet["energy"]))
def teach(trick):
    trick_attempts[trick] = trick_attempts.get(trick, 0) + 1
    if trick_attempts[trick] >= 3 and trick not in pet["tricks"]:
        pet["tricks"].append(trick)
        print("🎓 Learned: " + trick + "!")
    else:
        print("📚 Practicing " + trick + " (" + str(trick_attempts[trick]) + "/3)")
print("🐾 AI Pet: " + pet["name"])
actions = [("feed","kibble"),("play","fetch"),("teach","sit"),("feed","kibble"),("play","cuddle"),("teach","sit"),("feed","treat"),("play","walk"),("teach","sit"),("feed","kibble"),("teach","shake")]
for action, target in actions:
    if action == "feed": feed(target)
    elif action == "play": play(target)
    elif action == "teach": teach(target)
print("\\n🐾 " + pet["name"] + " knows: " + str(pet["tricks"]))
print("Favorite foods: " + str([f for f,c in food_memory.items() if c >= 3]))`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-5", "ai", "simulation"],
    fromLesson: "5-1",
  },
  {
    id: "proj-5-2",
    title: "🎮 Game AI Tournament · AI对战锦标赛",
    description: "Build AI players that compete in strategy games! 构建AI玩家进行策略游戏对战",
    difficulty: 3,
    gradeRange: [7, 10],
    skillLevel: "advanced",
    starterCode: `# 🎮 Game AI Tournament · AI对战锦标赛
# Build different AI strategies and pit them against each other!
# 构建不同的AI策略并让它们对战！

import random

# ─── Game: Prisoner's Dilemma · 囚徒困境 ───
# Each round, two players choose: COOPERATE or DEFECT
# Both cooperate → 3 points each
# Both defect → 1 point each
# One defects, other cooperates → Defector gets 5, cooperator gets 0

COOPERATE = "cooperate"
DEFECT = "defect"

def score_round(move1, move2):
    """Calculate scores for a round · 计算单轮得分"""
    if move1 == COOPERATE and move2 == COOPERATE:
        return 3, 3
    elif move1 == DEFECT and move2 == DEFECT:
        return 1, 1
    elif move1 == DEFECT:
        return 5, 0
    else:
        return 0, 5

# ─── AI Strategies · AI策略 ───

def always_cooperate(history):
    """Always cooperates · 总是合作"""
    return COOPERATE

def always_defect(history):
    """Always defects · 总是背叛"""
    return DEFECT

def random_player(history):
    """Random choice · 随机选择"""
    return random.choice([COOPERATE, DEFECT])

def tit_for_tat(history):
    """Copy opponent's last move · 以牙还牙"""
    # TODO: First move cooperate, then copy opponent's last move
    # history is a list of (my_move, opponent_move) tuples
    pass

def grudge(history):
    """Cooperate until betrayed, then always defect · 记仇策略"""
    # TODO: Cooperate until opponent defects once
    # After that, always defect
    pass

def detective(history):
    """Test opponent then exploit · 侦探策略"""
    # TODO: Play C,D,C,C in first 4 rounds
    # If opponent never defects → always defect (exploit!)
    # Otherwise → play tit_for_tat
    pass

# ─── Tournament Engine · 锦标赛引擎 ───

def play_match(ai1, ai2, name1, name2, rounds=50):
    """Play a match between two AIs · 两个AI对战"""
    # TODO: Run 'rounds' number of rounds
    # Track history for each player
    # Return total scores
    pass

def run_tournament(players):
    """Round-robin tournament · 循环赛"""
    # TODO: Each AI plays every other AI
    # Track total points
    # Print leaderboard
    pass

# ─── Run Tournament · 开始锦标赛 ───
players = {
    "Always Cooperate": always_cooperate,
    "Always Defect": always_defect,
    "Random": random_player,
    "Tit for Tat": tit_for_tat,
    "Grudge": grudge,
}

print("🎮 AI TOURNAMENT: Prisoner's Dilemma")
print("=" * 45)

# TODO: run_tournament(players)
# Which strategy wins?`,
    hint: "For tit_for_tat: if len(history) == 0 return COOPERATE, else return history[-1][1] (opponent's last move). For the tournament, use nested loops to pair every AI.",
    solution: `import random
COOPERATE = "cooperate"
DEFECT = "defect"
def score_round(m1, m2):
    if m1 == COOPERATE and m2 == COOPERATE: return 3, 3
    if m1 == DEFECT and m2 == DEFECT: return 1, 1
    if m1 == DEFECT: return 5, 0
    return 0, 5
def always_cooperate(h): return COOPERATE
def always_defect(h): return DEFECT
def random_player(h): return random.choice([COOPERATE, DEFECT])
def tit_for_tat(h):
    if len(h) == 0: return COOPERATE
    return h[-1][1]
def grudge(h):
    for my, opp in h:
        if opp == DEFECT: return DEFECT
    return COOPERATE
def play_match(ai1, ai2, rounds=50):
    h1, h2, s1, s2 = [], [], 0, 0
    for _ in range(rounds):
        m1, m2 = ai1(h1), ai2(h2)
        p1, p2 = score_round(m1, m2)
        s1 += p1; s2 += p2
        h1.append((m1, m2)); h2.append((m2, m1))
    return s1, s2
players = {"Cooperate": always_cooperate, "Defect": always_defect, "Random": random_player, "Tit4Tat": tit_for_tat, "Grudge": grudge}
print("🎮 AI TOURNAMENT\\n")
totals = {n: 0 for n in players}
names = list(players.keys())
for i in range(len(names)):
    for j in range(i+1, len(names)):
        s1, s2 = play_match(players[names[i]], players[names[j]])
        totals[names[i]] += s1; totals[names[j]] += s2
        print(names[i] + " vs " + names[j] + ": " + str(s1) + "-" + str(s2))
print("\\n🏆 LEADERBOARD:")
for name, score in sorted(totals.items(), key=lambda x: -x[1]):
    print("  " + name + ": " + str(score))`,
    language: "python",
    category: "Crypto",
    categoryZh: "加密",
    tags: ["project", "area-5", "ai", "game-theory"],
    fromLesson: "5-2",
  },
  {
    id: "proj-5-3",
    title: "🎨 AI Creative Studio · AI创意工作室",
    description: "Build an AI that generates stories, poems, and art using templates and randomness! AI创意生成器",
    difficulty: 2,
    gradeRange: [7, 10],
    skillLevel: "intermediate",
    starterCode: `# 🎨 AI Creative Studio · AI创意工作室
# Build an AI that creates stories, poems, and ASCII art!
# 构建一个能创作故事、诗歌和ASCII艺术的AI！

import random

# ─── Word Banks · 词库 ───
adjectives = ["brave", "mysterious", "ancient", "golden", "fierce", "gentle", "cosmic"]
nouns = ["dragon", "forest", "crystal", "warrior", "ocean", "castle", "star"]
verbs = ["discovered", "transformed", "awakened", "protected", "created", "defeated"]
emotions = ["joy", "wonder", "courage", "mystery", "hope", "adventure"]
colors = ["crimson", "azure", "emerald", "silver", "amber", "violet"]

# ─── Story Generator · 故事生成器 ───

def generate_character():
    """Generate a random character · 生成随机角色"""
    # TODO: Combine adjective + noun for a character name/description
    # Example: "the brave warrior" or "a mysterious dragon"
    pass

def generate_story(theme="adventure"):
    """Generate a short story · 生成短篇故事"""
    # TODO: Use word banks to create a 5-sentence story
    # Sentence 1: Introduce character
    # Sentence 2: Describe setting
    # Sentence 3: The challenge
    # Sentence 4: The action
    # Sentence 5: The resolution
    pass

# ─── Poem Generator · 诗歌生成器 ───

def generate_haiku():
    """Generate a haiku (5-7-5 syllables) · 生成俳句"""
    # TODO: Create a nature-themed haiku
    # Use word banks creatively
    pass

def generate_limerick():
    """Generate a funny limerick · 生成打油诗"""
    # TODO: AABBA rhyme scheme
    pass

# ─── ASCII Art Generator · ASCII艺术生成器 ───

def generate_pattern(width=20, height=10):
    """Generate random ASCII pattern · 生成随机ASCII图案"""
    # TODO: Use characters like ░▒▓█ and *·•○● to create patterns
    # Maybe a gradient, a wave, or a random mosaic
    pass

def generate_border(text, style="star"):
    """Put decorative border around text · 给文字加装饰边框"""
    # TODO: Create different border styles
    # star: ★═══════★
    # box:  ┌───────┐
    pass

# ─── Creative Menu · 创意菜单 ───
print("🎨 AI CREATIVE STUDIO 🎨")
print("=" * 40)

# TODO: Generate and display each type of creation
# 1. Generate a character
# 2. Generate a story
# 3. Generate a haiku
# 4. Generate ASCII pattern
# 5. Put it all together in a "gallery"

print("\\n📖 --- STORY ---")
# generate_story()

print("\\n🎋 --- HAIKU ---")
# generate_haiku()

print("\\n🎨 --- PATTERN ---")
# generate_pattern()`,
    hint: "For story generation, use random.choice() to pick words from each bank. Format them into sentences with string concatenation.",
    solution: `import random
adjectives = ["brave", "mysterious", "ancient", "golden", "fierce"]
nouns = ["dragon", "forest", "crystal", "warrior", "star"]
verbs = ["discovered", "transformed", "awakened", "protected", "created"]
def gen_char():
    return "the " + random.choice(adjectives) + " " + random.choice(nouns)
def gen_story():
    hero = gen_char()
    place = random.choice(["enchanted forest", "crystal cave", "floating city"])
    print("Once upon a time, " + hero + " lived in a " + place + ".")
    print("One day, a shadow fell across the land.")
    print(hero.title() + " " + random.choice(verbs) + " a hidden power.")
    print("With courage, the darkness was vanquished.")
    print("Peace returned, and " + hero + " became legend.")
def gen_haiku():
    lines = [
        random.choice(["Moonlight", "Starlight", "Sunbeams"]) + " on water",
        random.choice(["Gentle", "Silent", "Ancient"]) + " " + random.choice(["wind whispers", "rain falling", "leaves dancing"]),
        random.choice(["Peace", "Hope", "Dreams"]) + " " + random.choice(["bloom anew", "ever shine", "softly glow"]),
    ]
    for l in lines: print("  " + l)
def gen_pattern(w=20, h=6):
    chars = "░▒▓█"
    for y in range(h):
        line = ""
        for x in range(w):
            idx = (x + y) % len(chars)
            line += chars[idx]
        print(line)
print("🎨 AI CREATIVE STUDIO\\n")
print("📖 STORY:")
gen_story()
print("\\n🎋 HAIKU:")
gen_haiku()
print("\\n🎨 PATTERN:")
gen_pattern()`,
    language: "python",
    category: "Simulations",
    categoryZh: "模拟",
    tags: ["project", "area-5", "ai", "creative"],
    fromLesson: "5-3",
  },
  {
    id: "proj-5-4",
    title: "🔮 Crystal Ball Predictor · 预言水晶球",
    description: "Build a prediction system using pattern matching and simple statistics! 运用模式匹配和统计构建预测系统",
    difficulty: 2,
    gradeRange: [7, 10],
    skillLevel: "intermediate",
    starterCode: `# 🔮 Crystal Ball Predictor · 预言水晶球
# Build a prediction system using patterns and statistics!
# 运用模式和统计构建预测系统！

import random

# ─── Data Collection · 数据收集 ───
# Simulate historical data
weather_data = ["sunny", "sunny", "rainy", "sunny", "cloudy", "rainy",
                "sunny", "sunny", "sunny", "cloudy", "rainy", "sunny",
                "sunny", "cloudy", "sunny", "rainy", "sunny", "sunny"]

score_data = [85, 90, 78, 92, 88, 95, 82, 91, 87, 93, 89, 96]

coin_flips = ["H", "T", "H", "H", "T", "H", "T", "T", "H", "H",
              "T", "H", "H", "H", "T", "T", "H", "T", "H", "H"]

# ─── Analysis Functions · 分析函数 ───

def count_frequency(data):
    """Count how often each value appears · 统计每个值出现的频率"""
    # TODO: Return a dictionary of {value: count}
    pass

def calculate_probability(data, value):
    """Calculate probability of a value · 计算某值的概率"""
    # TODO: Return count/total as a percentage
    pass

def find_pattern(data, pattern_length=2):
    """Find repeated patterns · 寻找重复模式"""
    # TODO: Look for sequences that repeat
    # Example: ["H","H","T"] appears 2 times in coin_flips
    pass

def predict_next(data):
    """Predict the next value · 预测下一个值"""
    # TODO: Use frequency to predict most likely next value
    # Bonus: use last 2 values to predict (Markov-like)
    pass

def calculate_trend(numbers):
    """Calculate if numbers are trending up or down · 计算趋势"""
    # TODO: Compare average of first half vs second half
    # Return "📈 Rising", "📉 Falling", or "➡️ Stable"
    pass

def confidence_score(data, prediction):
    """How confident is the prediction · 预测置信度"""
    # TODO: Based on how dominant the prediction is in data
    # If prediction appears 90% of time → high confidence
    pass

# ─── Predictions · 预测 ───
print("🔮 CRYSTAL BALL PREDICTOR")
print("=" * 40)

print("\\n☀️ Weather Prediction:")
# TODO: Analyze weather_data and predict tomorrow
# Show frequency of each weather type
# Show prediction with confidence

print("\\n📊 Score Prediction:")
# TODO: Analyze score_data
# Calculate average, trend, predict next score

print("\\n🪙 Coin Flip Prediction:")
# TODO: Analyze coin_flips
# Is the coin fair? Predict next flip

print("\\n🎯 Accuracy Test:")
# TODO: Use first 80% of data to predict, check against last 20%`,
    hint: "For count_frequency, loop through data and use a dict: freq[item] = freq.get(item, 0) + 1. For predict_next, return the item with highest frequency.",
    solution: `import random
weather_data = ["sunny","sunny","rainy","sunny","cloudy","rainy","sunny","sunny","sunny","cloudy","rainy","sunny","sunny","cloudy","sunny","rainy","sunny","sunny"]
score_data = [85, 90, 78, 92, 88, 95, 82, 91, 87, 93, 89, 96]
coin_flips = ["H","T","H","H","T","H","T","T","H","H","T","H","H","H","T","T","H","T","H","H"]
def count_freq(data):
    freq = {}
    for item in data:
        freq[item] = freq.get(item, 0) + 1
    return freq
def predict_next(data):
    freq = count_freq(data)
    best = max(freq, key=lambda k: freq[k])
    conf = round(freq[best] / len(data) * 100, 1)
    return best, conf
def trend(numbers):
    mid = len(numbers) // 2
    avg1 = sum(numbers[:mid]) / mid
    avg2 = sum(numbers[mid:]) / (len(numbers) - mid)
    if avg2 > avg1 + 2: return "📈 Rising"
    if avg2 < avg1 - 2: return "📉 Falling"
    return "➡️ Stable"
print("🔮 CRYSTAL BALL PREDICTOR\\n")
print("☀️ Weather:")
wf = count_freq(weather_data)
for w, c in wf.items():
    print("  " + w + ": " + str(c) + " (" + str(round(c/len(weather_data)*100,1)) + "%)")
wp, wc = predict_next(weather_data)
print("  Prediction: " + wp + " (confidence: " + str(wc) + "%)")
print("\\n📊 Scores:")
print("  Avg: " + str(round(sum(score_data)/len(score_data),1)) + " | Trend: " + trend(score_data))
print("\\n🪙 Coins:")
cf = count_freq(coin_flips)
print("  H: " + str(cf.get("H",0)) + " T: " + str(cf.get("T",0)))
cp, cc = predict_next(coin_flips)
print("  Prediction: " + cp + " (confidence: " + str(cc) + "%)")`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-5", "ai", "statistics", "prediction"],
    fromLesson: "5-4",
  },
  {
    id: "proj-5-5",
    title: "⚖️ AI Court · AI法庭",
    description: "Build an AI judge that evaluates arguments and makes fair decisions! 构建AI法官评判系统",
    difficulty: 3,
    gradeRange: [7, 10],
    skillLevel: "advanced",
    starterCode: `# ⚖️ AI Court · AI法庭
# Build an AI system that evaluates arguments and judges fairly!
# 构建一个评判论证并公平裁决的AI系统！

import random

# ─── Case Data · 案件数据 ───

cases = [
    {
        "title": "The Stolen Cookie Case",
        "plaintiff": "Mom",
        "defendant": "Kid",
        "plaintiff_args": [
            "Cookie jar was full this morning",
            "Crumbs found on defendant's shirt",
            "Defendant was seen near kitchen at 3pm",
        ],
        "defendant_args": [
            "I was doing homework all afternoon",
            "The dog could have knocked the jar",
            "My sibling also likes cookies",
        ],
        "evidence_strength": {"crumbs": 0.8, "timing": 0.6, "witnesses": 0.3},
    },
    {
        "title": "The Loud Music Dispute",
        "plaintiff": "Neighbor A",
        "defendant": "Neighbor B",
        "plaintiff_args": [
            "Music was playing past midnight",
            "Three neighbors filed complaints",
            "Noise meter showed 85 decibels",
        ],
        "defendant_args": [
            "It was a one-time birthday party",
            "I warned neighbors in advance",
            "Music stopped at 12:15am",
        ],
        "evidence_strength": {"noise_level": 0.9, "complaints": 0.7, "advance_notice": 0.5},
    },
]

# ─── AI Judge Functions · AI法官函数 ───

def evaluate_argument(argument, base_strength=0.5):
    """Score an argument's persuasiveness · 评估论证的说服力"""
    # TODO: Score based on:
    # - Length of argument (longer = more detailed = slightly stronger)
    # - Contains evidence keywords ("found", "seen", "measured") → bonus
    # - Contains weak words ("could", "maybe", "might") → penalty
    # Return score 0.0 to 1.0
    pass

def weigh_evidence(evidence_dict):
    """Calculate total evidence weight · 计算证据总权重"""
    # TODO: Average all evidence strengths
    pass

def calculate_verdict(plaintiff_score, defendant_score):
    """Determine verdict · 做出裁决"""
    # TODO: Compare scores, account for "beyond reasonable doubt"
    # If plaintiff > defendant + 0.2 → "GUILTY"
    # If defendant > plaintiff + 0.2 → "NOT GUILTY"
    # Otherwise → "INSUFFICIENT EVIDENCE"
    pass

def generate_ruling(case, verdict, scores):
    """Generate a judicial ruling · 生成司法裁决"""
    # TODO: Write a formal ruling with reasoning
    # Include case title, arguments considered, evidence weight, verdict
    pass

def run_trial(case):
    """Run a complete trial · 进行完整审判"""
    # TODO: 
    # 1. Present case
    # 2. Evaluate plaintiff arguments
    # 3. Evaluate defendant arguments
    # 4. Weigh evidence
    # 5. Calculate verdict
    # 6. Generate ruling
    pass

# ─── Run Court Session · 开庭 ───
print("⚖️ AI COURT IN SESSION ⚖️")
print("=" * 45)

for case in cases:
    print("\\n📋 Case: " + case["title"])
    print("-" * 40)
    # TODO: run_trial(case)

print("\\n⚖️ Court adjourned.")`,
    hint: "For evaluate_argument: check 'if word in argument.lower()' for evidence/weak keywords. Sum bonuses/penalties and clamp between 0 and 1.",
    solution: `import random
cases = [
    {"title": "Stolen Cookie", "plaintiff_args": ["Crumbs found on shirt", "Seen near kitchen"], "defendant_args": ["Was doing homework", "Dog could have done it"], "evidence": 0.7},
    {"title": "Loud Music", "plaintiff_args": ["Music past midnight", "85 decibels measured"], "defendant_args": ["One-time party", "Warned in advance"], "evidence": 0.8},
]
def eval_arg(arg):
    score = 0.5
    strong = ["found", "seen", "measured", "confirmed", "proof"]
    weak = ["could", "maybe", "might", "possibly"]
    for w in strong:
        if w in arg.lower(): score += 0.1
    for w in weak:
        if w in arg.lower(): score -= 0.1
    return max(0, min(1, score))
def trial(case):
    print("\\n⚖️ " + case["title"])
    p_scores = [eval_arg(a) for a in case["plaintiff_args"]]
    d_scores = [eval_arg(a) for a in case["defendant_args"]]
    p_avg = sum(p_scores) / len(p_scores)
    d_avg = sum(d_scores) / len(d_scores)
    p_total = (p_avg + case["evidence"]) / 2
    d_total = d_avg
    print("  Plaintiff score: " + str(round(p_total, 2)))
    print("  Defendant score: " + str(round(d_total, 2)))
    if p_total > d_total + 0.15:
        print("  ⚖️ Verdict: GUILTY")
    elif d_total > p_total + 0.15:
        print("  ⚖️ Verdict: NOT GUILTY")
    else:
        print("  ⚖️ Verdict: INSUFFICIENT EVIDENCE")
print("⚖️ AI COURT IN SESSION")
for c in cases:
    trial(c)
print("\\nCourt adjourned.")`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-5", "ai", "logic", "ethics"],
    fromLesson: "5-5",
  },
  {
    id: "proj-5-6",
    title: "🎓 Masterpiece · 毕业创作",
    description: "Your graduation project! Choose a template or create something entirely your own! 毕业创作 — 选择模板或自由发挥！",
    difficulty: 3,
    gradeRange: [7, 10],
    skillLevel: "advanced",
    starterCode: `# 🎓 MASTERPIECE · 毕业创作
# This is YOUR project! Choose a template below or create from scratch!
# 这是你的项目！选择下面的模板或从零开始创作！

# ════════════════════════════════════════════
# Choose your project type (uncomment ONE):
# 选择你的项目类型（取消注释一个）：
# ════════════════════════════════════════════

project_type = "chatbot"  # Change to your choice!

# Options:
# "chatbot"    → 🤖 AI Chatbot (智能聊天机器人)
# "game"       → 🎮 Original Game (原创游戏)
# "tool"       → 🔧 Useful Tool (实用工具)
# "art"        → 🎨 Generative Art (生成式艺术)
# "simulation" → 🌍 World Simulation (世界模拟)
# "custom"     → ✨ Your Own Idea! (你的创意！)

print("🎓 MASTERPIECE PROJECT: " + project_type.upper())
print("=" * 50)

if project_type == "chatbot":
    # 🤖 AI Chatbot Template · AI聊天机器人模板
    responses = {
        "hello": "Hi there! How can I help?",
        "weather": "I think it will be sunny today! ☀️",
        "joke": "Why do programmers prefer dark mode? Fewer bugs! 🐛",
    }
    # TODO: Build a chatbot with:
    # - Pattern matching for user input
    # - Memory of conversation history
    # - Personality and mood system
    # - At least 10 response categories

    messages = ["hello", "joke", "weather", "bye"]
    for msg in messages:
        reply = responses.get(msg, "I don't understand, but I'm learning!")
        print("You: " + msg)
        print("Bot: " + reply)

elif project_type == "game":
    # 🎮 Original Game Template · 原创游戏模板
    # TODO: Design and build your own game!
    # Ideas: maze, quiz show, battle simulator, card game
    print("🎮 Build your dream game here!")

elif project_type == "tool":
    # 🔧 Useful Tool Template · 实用工具模板
    # TODO: Build something useful!
    # Ideas: todo list, unit converter, study timer, budget tracker
    print("🔧 Build a tool that solves a real problem!")

elif project_type == "art":
    # 🎨 Generative Art Template · 生成式艺术模板
    # TODO: Create beautiful patterns with code!
    import random
    chars = "░▒▓█●○◆◇★☆"
    for y in range(15):
        line = ""
        for x in range(40):
            line += random.choice(chars)
        print(line)

elif project_type == "simulation":
    # 🌍 World Simulation Template · 世界模拟模板
    # TODO: Simulate a world!
    # Ideas: city builder, stock market, weather system, ant colony
    print("🌍 Simulate your own world!")

else:
    # ✨ Custom Project · 自定义项目
    print("✨ The canvas is yours! Create anything you can imagine!")
    print("Remember everything you've learned:")
    print("  Variables, loops, functions, lists, dicts, classes...")
    print("  AI concepts, math, creativity...")
    print("  GO BUILD SOMETHING AMAZING! 🚀")`,
    hint: "Pick one project type and expand it fully. A good masterpiece has: clear structure, at least 3 functions, error handling, and a polished user interface.",
    solution: `# Example: Simple chatbot masterpiece
responses = {
    "hello": ["Hi!", "Hey there!", "Welcome!"],
    "joke": ["Why do programmers prefer dark mode? Fewer bugs!"],
    "weather": ["Sunny today! ☀️", "Looks like rain 🌧️"],
    "bye": ["Goodbye!", "See you! 👋"],
    "help": ["I can chat, tell jokes, check weather!"],
}
import random
mood = "happy"
history = []
print("🤖 ChatBot v1.0")
messages = ["hello", "joke", "help", "weather", "joke", "bye"]
for msg in messages:
    history.append(msg)
    if msg in responses:
        reply = random.choice(responses[msg])
    else:
        reply = "Interesting! Tell me more."
    print("You: " + msg + " → Bot: " + reply)
print("\\nChat history: " + str(len(history)) + " messages")`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-5", "graduation", "综合"],
    fromLesson: "5-6",
  },


  // ═══════════════════════════════════════════════════════════════
  // ═══ 🐍 ADDITIONAL PYTHON COURSE PROJECTS ═══
  // These are projects linked to specific Python lessons
  // ═══════════════════════════════════════════════════════════════

  {
    id: "proj-py-1-1-1",
    title: "🎨 ASCII Art Gallery · ASCII 艺术画廊",
    description: "Create an ASCII art gallery with multiple drawings! 用 print 创建 ASCII 艺术画廊",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🎨 ASCII Art Gallery
# Create 3 different ASCII art pieces!

# TODO: Draw a cat
print("Art 1: Cat")
# Use print() to draw a cat face

# TODO: Draw a rocket
print("\nArt 2: Rocket")
# Use print() to draw a rocket

# TODO: Draw your name in block letters
print("\nArt 3: My Name")`,
    hint: "Each print() is one line. Use characters like / \\ | _ * to make shapes!",
    solution: `print("Art 1: Cat")
print(" /\\_/\\ ")
print("( o.o )")
print(" > ^ < ")
print("\nArt 2: Rocket")
print("   /\\")
print("  |  |")
print("  |  |")
print(" /|  |\\")
print("/_|__|_\\")
print("  ||||")
print("\nArt 3: My Name")
print("█▀▀ █▀█ █▀▄ █▀▀")
print("█   █ █ █ █ █▀▀")
print("▀▀▀ ▀▀▀ ▀▀  ▀▀▀")`,
    language: "python",
    category: "Art",
    categoryZh: "艺术",
    tags: ["project", "area-1", "print"],
    fromLesson: "1-1",
  },

  {
    id: "proj-py-1-1-2",
    title: "📝 Mad Libs Story · 疯狂填词游戏",
    description: "Create a funny Mad Libs story using print and string concatenation! 用 print 和字符串拼接创建疯狂填词故事",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 📝 Mad Libs Story Generator
# Fill in the blanks to make a funny story!

noun = "dragon"
adjective = "sparkly"
verb = "danced"
place = "school cafeteria"
food = "pizza"

# TODO: Print a funny story using these variables
# Use + to join strings together
# Make it at least 5 lines!
# Example: print("Once upon a time, a " + adjective + " " + noun + "...")`,
    hint: "Use + to concatenate strings: print(\"The \" + adjective + \" \" + noun + \" went to \" + place)",
    solution: `noun = "dragon"
adjective = "sparkly"
verb = "danced"
place = "school cafeteria"
food = "pizza"

print("Once upon a time, a " + adjective + " " + noun + " lived in a " + place + ".")
print("Every day it " + verb + " while eating " + food + ".")
print("The other students thought the " + noun + " was weird.")
print("But then the " + noun + " shared its " + food + " with everyone!")
print("And they all " + verb + " together happily ever after.")`,
    language: "python",
    category: "Creative",
    categoryZh: "创意",
    tags: ["project", "area-1", "print", "strings"],
    fromLesson: "1-1",
  },

  {
    id: "proj-py-1-2-1",
    title: "🪪 ID Card Maker · 身份卡生成器",
    description: "Create a student ID card using different variable types! 使用不同变量类型创建学生证",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🪪 Student ID Card Maker
# Use different types: str, int, float, bool

# TODO: Create variables for a student
name = "Alex Chen"       # str
age = 15                 # int
gpa = 3.85               # float
is_honors = True         # bool
grade = 10               # int

# TODO: Print a formatted ID card
# Example output:
# ╔════════════════════╗
# ║  STUDENT ID CARD   ║
# ╠════════════════════╣
# ║ Name: Alex Chen    ║
# ║ Age: 15            ║
# ║ Grade: 10          ║
# ║ GPA: 3.85          ║
# ║ Honors: Yes        ║
# ╚════════════════════╝`,
    hint: "Use str() to convert numbers. For the honors field, use \"Yes\" if is_honors else \"No\"",
    solution: `name = "Alex Chen"
age = 15
gpa = 3.85
is_honors = True
grade = 10

print("+" + "=" * 22 + "+")
print("|   STUDENT ID CARD   |")
print("+" + "=" * 22 + "+")
print("| Name: " + name)
print("| Age: " + str(age))
print("| Grade: " + str(grade))
print("| GPA: " + str(gpa))
honors_text = "Yes" if is_honors else "No"
print("| Honors: " + honors_text)
print("+" + "=" * 22 + "+")`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-1", "variables", "types"],
    fromLesson: "1-2",
  },

  {
    id: "proj-py-1-2-2",
    title: "🎮 Character Creator · 角色创建器",
    description: "Build an RPG character sheet with stats using all variable types! 用所有变量类型构建 RPG 角色表",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🎮 RPG Character Creator
# Design your hero with different data types!

# TODO: Create character variables
char_name = "Shadow Blade"   # str
char_class = "Warrior"       # str
level = 1                    # int
health = 100.0               # float
mana = 50.0                  # float
is_alive = True              # bool
strength = 15                # int
defense = 12                 # int

# TODO: Calculate derived stats
# attack_power = strength * 1.5
# total_hp = health + (level * 10)

# TODO: Print the character sheet
# Show all stats in a nice format
# Include type labels: print(type(char_name))`,
    hint: "Use type() to show variable types. Calculate derived stats with math operators.",
    solution: `char_name = "Shadow Blade"
char_class = "Warrior"
level = 1
health = 100.0
mana = 50.0
is_alive = True
strength = 15
defense = 12
attack_power = strength * 1.5
total_hp = health + (level * 10)
print("⚔️ CHARACTER SHEET ⚔️")
print("Name: " + char_name + " (" + str(type(char_name)) + ")")
print("Class: " + char_class)
print("Level: " + str(level) + " (" + str(type(level)) + ")")
print("HP: " + str(total_hp) + " (" + str(type(health)) + ")")
print("Mana: " + str(mana))
print("Alive: " + str(is_alive) + " (" + str(type(is_alive)) + ")")
print("ATK: " + str(attack_power) + " | DEF: " + str(defense))`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-1", "variables", "types"],
    fromLesson: "1-2",
  },

  {
    id: "proj-py-1-3-1",
    title: "🧮 Math Quiz Generator · 数学测验生成器",
    description: "Generate random math quizzes and track scores! 生成随机数学测验并跟踪分数",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🧮 Math Quiz Generator
import random
import math

score = 0
total = 5

# TODO: Generate 5 random math problems
# For each problem:
# 1. Pick two random numbers (1-20)
# 2. Pick a random operation (+, -, *)
# 3. Calculate the correct answer
# 4. Display the problem and answer

for i in range(total):
    a = random.randint(1, 20)
    b = random.randint(1, 20)
    # TODO: Pick random operation and calculate
    # TODO: Print "Q1: 5 + 3 = 8"
    pass

# TODO: Show final score with percentage
# Use math.floor() or round()`,
    hint: "Use random.choice([\"+\", \"-\", \"*\"]) to pick an operation. Use if/elif to calculate based on which op was chosen.",
    solution: `import random
import math

score = 0
total = 5
ops = ["+", "-", "*"]

for i in range(total):
    a = random.randint(1, 20)
    b = random.randint(1, 20)
    op = random.choice(ops)
    if op == "+":
        answer = a + b
    elif op == "-":
        answer = a - b
    else:
        answer = a * b
    print("Q" + str(i+1) + ": " + str(a) + " " + op + " " + str(b) + " = " + str(answer))
    score += 1

pct = math.floor((score / total) * 100)
print("\nScore: " + str(score) + "/" + str(total) + " (" + str(pct) + "%)")`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-1", "math", "random"],
    fromLesson: "1-3",
  },

  {
    id: "proj-py-1-3-2",
    title: "📐 Geometry Calculator · 几何计算器",
    description: "Calculate areas and perimeters of shapes using the math module! 使用 math 模块计算图形面积和周长",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 📐 Geometry Calculator
import math

# TODO: Calculate for each shape:
# 1. Circle (radius = 5)
#    area = π * r²
#    circumference = 2 * π * r

# 2. Triangle (base=8, height=6, sides: 8, 6, 10)
#    area = 0.5 * base * height
#    perimeter = side1 + side2 + side3

# 3. Rectangle (width=12, height=7)
#    area = width * height
#    diagonal = √(width² + height²) use math.sqrt()

# Print results rounded to 2 decimal places
# Use math.pi for π and math.sqrt() for square root`,
    hint: "math.pi gives you π. math.sqrt(x) gives square root. round(num, 2) rounds to 2 decimals.",
    solution: `import math

r = 5
print("⭕ Circle (r=" + str(r) + ")")
print("  Area: " + str(round(math.pi * r**2, 2)))
print("  Circumference: " + str(round(2 * math.pi * r, 2)))

base, height = 8, 6
print("🔺 Triangle (b=" + str(base) + ", h=" + str(height) + ")")
print("  Area: " + str(round(0.5 * base * height, 2)))
print("  Perimeter: " + str(8 + 6 + 10))

w, h = 12, 7
print("▬ Rectangle (" + str(w) + "x" + str(h) + ")")
print("  Area: " + str(w * h))
print("  Diagonal: " + str(round(math.sqrt(w**2 + h**2), 2)))`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-1", "math"],
    fromLesson: "1-3",
  },

  {
    id: "proj-py-1-4-1",
    title: "🐢 Spiral Art · 螺旋艺术",
    description: "Create beautiful spiral patterns with turtle graphics (simulated with print)! 用模拟海龟绘图创建美丽的螺旋图案",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🐢 Spiral Art (Simulated with text)
# Since we can't use real turtle, we simulate with a grid!
import math

size = 21
grid = [[" " for _ in range(size)] for _ in range(size)]
cx, cy = size // 2, size // 2

# TODO: Draw a spiral pattern on the grid
# Use math.cos() and math.sin() to calculate positions
# For t in range(0, 100):
#   r = t * 0.1  (radius grows)
#   angle = t * 0.3
#   x = cx + int(r * math.cos(angle))
#   y = cy + int(r * math.sin(angle))
#   Place a "*" at grid[y][x]

# TODO: Print the grid
# for row in grid: print("".join(row))`,
    hint: "Loop through t values, calculate r (grows each step), use cos/sin for x,y coordinates on the grid.",
    solution: `import math

size = 21
grid = [[" " for _ in range(size)] for _ in range(size)]
cx, cy = size // 2, size // 2

for t in range(100):
    r = t * 0.1
    angle = t * 0.3
    x = cx + int(r * math.cos(angle))
    y = cy + int(r * math.sin(angle))
    if 0 <= x < size and 0 <= y < size:
        grid[y][x] = "*"

for row in grid:
    print("".join(row))`,
    language: "python",
    category: "Art",
    categoryZh: "艺术",
    tags: ["project", "area-1", "turtle", "math"],
    fromLesson: "1-4",
  },

  {
    id: "proj-py-1-4-2",
    title: "🏠 House Drawing · 画房子",
    description: "Draw a house using text-based turtle simulation! 用文本模拟海龟绘图画房子",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🏠 House Drawing (Text Art)
# Simulate turtle graphics with a grid

size = 20
grid = [[" " for _ in range(size)] for _ in range(size)]

# TODO: Draw a house on the grid
# 1. Draw the roof (triangle) - rows 2-6
#    Use "/" and "\\" characters
# 2. Draw the walls (rectangle) - rows 7-14
#    Use "|" for sides, "-" for top/bottom
# 3. Draw a door (small rectangle) - center bottom
# 4. Draw a window (small square)

# Hint: grid[row][col] = character

# TODO: Print the grid
for row in grid:
    print("".join(row))`,
    hint: "Set individual grid cells: grid[row][col] = \"/\". Draw the roof first, then walls, then details.",
    solution: `size = 20
grid = [[" " for _ in range(size)] for _ in range(size)]

# Roof
for i in range(5):
    grid[2+i][9-i] = "/"
    grid[2+i][10+i] = "\\"
# Roof peak
grid[2][9] = "/"
grid[2][10] = "\\"

# Walls
for r in range(7, 15):
    grid[r][4] = "|"
    grid[r][15] = "|"
for c in range(4, 16):
    grid[7][c] = "-"
    grid[14][c] = "-"

# Door
for r in range(11, 14):
    grid[r][9] = "|"
    grid[r][11] = "|"
grid[11][10] = "-"

# Window
for c in range(6, 9):
    grid[8][c] = "-"
    grid[10][c] = "-"
grid[9][6] = "|"
grid[9][8] = "|"

for row in grid:
    print("".join(row))`,
    language: "python",
    category: "Art",
    categoryZh: "艺术",
    tags: ["project", "area-1", "turtle", "art"],
    fromLesson: "1-4",
  },

  {
    id: "proj-py-1-5-1",
    title: "🎯 Grade Calculator · 成绩计算器",
    description: "Build a grade calculator with letter grades and GPA! 构建带字母等级和GPA的成绩计算器",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🎯 Grade Calculator
# Convert numeric scores to letter grades

scores = [92, 85, 78, 65, 95, 43, 88, 71]

# TODO: For each score, determine:
# A: 90-100
# B: 80-89
# C: 70-79
# D: 60-69
# F: below 60

# TODO: Count how many of each grade
# TODO: Calculate the average score
# TODO: Determine if the student passes (avg >= 70)

for score in scores:
    # TODO: Use if/elif/else to assign letter grade
    # print(str(score) + " = " + grade)
    pass`,
    hint: "Use if score >= 90, elif score >= 80, etc. Keep counters for each grade letter.",
    solution: `scores = [92, 85, 78, 65, 95, 43, 88, 71]
total = 0
counts = {"A": 0, "B": 0, "C": 0, "D": 0, "F": 0}

for score in scores:
    total += score
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    elif score >= 60:
        grade = "D"
    else:
        grade = "F"
    counts[grade] += 1
    print(str(score) + " = " + grade)

avg = total / len(scores)
print("\nAverage: " + str(round(avg, 1)))
print("Pass: " + ("Yes ✅" if avg >= 70 else "No ❌"))
for g in ["A", "B", "C", "D", "F"]:
    print(g + ": " + str(counts[g]))`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-1", "if-else", "conditionals"],
    fromLesson: "1-5",
  },

  {
    id: "proj-py-1-5-2",
    title: "🌤️ Weather Advisor · 天气顾问",
    description: "Build a weather advisor that gives outfit and activity suggestions! 构建天气顾问，给出穿搭和活动建议",
    difficulty: 1,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🌤️ Weather Advisor
# Give suggestions based on weather conditions

temperature = 75  # Fahrenheit
is_raining = False
is_windy = True
humidity = 60  # percent

# TODO: Suggest clothing based on temperature
# > 85: "Wear shorts and a t-shirt! 🩳"
# 70-85: "Light jacket weather! 🧥"
# 50-69: "Wear a warm sweater! 🧣"
# < 50: "Bundle up! Heavy coat needed! 🧤"

# TODO: Modify suggestion if raining
# Add "Don't forget an umbrella! ☂️"

# TODO: Suggest an activity
# Hot + Not raining: "Go swimming! 🏊"
# Nice + Not raining: "Perfect for a hike! 🥾"
# Cold or Raining: "Stay in and read! 📚"
# Windy: "Great day for flying a kite! 🪁"`,
    hint: "Use if/elif/else for temperature ranges, then add extra checks with and/or for rain and wind.",
    solution: `temperature = 75
is_raining = False
is_windy = True
humidity = 60

print("🌡️ Temperature: " + str(temperature) + "°F")
print("🌧️ Raining: " + str(is_raining))
print("💨 Windy: " + str(is_windy))
print()

if temperature > 85:
    print("Wear shorts and a t-shirt! 🩳")
elif temperature >= 70:
    print("Light jacket weather! 🧥")
elif temperature >= 50:
    print("Wear a warm sweater! 🧣")
else:
    print("Bundle up! Heavy coat needed! 🧤")

if is_raining:
    print("Don't forget an umbrella! ☂️")

if temperature > 85 and not is_raining:
    print("Activity: Go swimming! 🏊")
elif temperature >= 60 and not is_raining:
    print("Activity: Perfect for a hike! 🥾")
elif is_windy:
    print("Activity: Great day for flying a kite! 🪁")
else:
    print("Activity: Stay in and read! 📚")`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-1", "if-else", "conditionals"],
    fromLesson: "1-5",
  },

  {
    id: "proj-py-1-6-1",
    title: "🏰 Castle Escape · 城堡逃脱",
    description: "Escape from a castle by solving puzzles and making choices! 通过解谜和做选择逃出城堡",
    difficulty: 2,
    gradeRange: [4, 10],
    skillLevel: "beginner",
    starterCode: `# 🏰 Castle Escape
# You wake up in a castle dungeon. Find your way out!

health = 100
has_key = False
has_torch = False

print("=" * 40)
print("  🏰 CASTLE ESCAPE 🏰")
print("=" * 40)
print("You wake up in a dark dungeon...")

# Room 1: Dungeon
print("\n🔒 DUNGEON")
print("You see: 1. A rusty gate  2. A crack in the wall")
choice = "1"  # TODO: input()

# TODO: Handle choice 1 - gate needs a key
# TODO: Handle choice 2 - find a torch

# Room 2: Hallway
print("\n🕯️ HALLWAY")
# TODO: If you have torch, you can see
# TODO: Two doors: library (has key) or kitchen (has food +20hp)

# Room 3: Tower
print("\n🗼 TOWER")
# TODO: Final escape! Need key to unlock main gate
# TODO: Without key - jump from window (-50 hp)
# TODO: With key - walk out free!

print("\n" + "=" * 40)
print("Health: " + str(health))
print("Escaped: " + str(has_key))`,
    hint: "Use if/else for each choice. Track inventory with boolean variables. Check conditions before allowing actions.",
    solution: `health = 100
has_key = False
has_torch = False

print("=" * 40)
print("  🏰 CASTLE ESCAPE 🏰")
print("=" * 40)
print("You wake up in a dark dungeon...")

choice = "2"
if choice == "1":
    print("The gate is locked! You need a key.")
else:
    print("You squeeze through the crack and find a torch!")
    has_torch = True

print("\n🕯️ HALLWAY")
if has_torch:
    print("Your torch lights the way!")
choice2 = "1"
if choice2 == "1":
    print("📚 Library! You find a golden key!")
    has_key = True
else:
    print("🍖 Kitchen! You eat and restore health!")
    health = min(100, health + 20)

print("\n🗼 TOWER")
if has_key:
    print("🔑 You unlock the gate and escape! Freedom!")
else:
    print("No key... you jump from the window!")
    health -= 50

print("\n" + "=" * 40)
print("Health: " + str(health))
print("Escaped: " + str(has_key))`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-1", "if-else", "adventure"],
    fromLesson: "1-6",
  },

  {
    id: "proj-py-2-1-1",
    title: "🎵 Drum Machine · 鼓机",
    description: "Build a drum pattern generator using for loops! 使用 for 循环构建鼓模式生成器",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🎵 Drum Machine
# Create beat patterns with loops!

# Define drum sounds
kick =  "X...X...X...X..."
snare = "....X.......X..."
hihat = "X.X.X.X.X.X.X.X."

# TODO: Print a visual drum pattern
# Show 4 bars of the pattern
# Each bar = 4 beats

# TODO: Create a custom pattern
# Use for loop to build a pattern string
# Example: for i in range(16): add "X" every 4th beat

# TODO: Add a "tempo" counter
# Print beat numbers above the pattern
# 1234567890123456`,
    hint: "Use for i in range(16) to build patterns. Use i % 4 == 0 to place beats every 4th step.",
    solution: `kick =  "X...X...X...X..."
snare = "....X.......X..."
hihat = "X.X.X.X.X.X.X.X."

print("🎵 DRUM MACHINE")
print("Beat: ", end="")
for i in range(16):
    print(str((i % 10) + 1)[-1], end="")
print()
print("Kick:  " + kick)
print("Snare: " + snare)
print("HiHat: " + hihat)

print("\n🎶 Custom Pattern:")
custom = ""
for i in range(16):
    if i % 4 == 0:
        custom += "X"
    elif i % 2 == 0:
        custom += "x"
    else:
        custom += "."
print("Custom: " + custom)

print("\n🔁 Playing 4 bars:")
for bar in range(1, 5):
    print("Bar " + str(bar) + ": " + kick[:4*bar])`,
    language: "python",
    category: "Creative",
    categoryZh: "创意",
    tags: ["project", "area-2", "for-loop"],
    fromLesson: "2-1",
  },

  {
    id: "proj-py-2-1-2",
    title: "🌟 Star Pattern Maker · 星星图案",
    description: "Create beautiful patterns using nested for loops! 使用嵌套 for 循环创建美丽图案",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🌟 Star Pattern Maker
# Create different patterns with for loops!

n = 5

# TODO: Pattern 1 - Right triangle
# *
# **
# ***
# ****
# *****

# TODO: Pattern 2 - Pyramid
#     *
#    ***
#   *****
#  *******
# *********

# TODO: Pattern 3 - Diamond
#   *
#  ***
# *****
#  ***
#   *`,
    hint: "For pyramid: use spaces = n-i-1 and stars = 2*i+1. Print \" \"*spaces + \"*\"*stars",
    solution: `n = 5
print("Pattern 1: Right Triangle")
for i in range(1, n+1):
    print("*" * i)

print("\nPattern 2: Pyramid")
for i in range(n):
    spaces = " " * (n - i - 1)
    stars = "*" * (2 * i + 1)
    print(spaces + stars)

print("\nPattern 3: Diamond")
for i in range(n):
    spaces = " " * (n - i - 1)
    stars = "*" * (2 * i + 1)
    print(spaces + stars)
for i in range(n - 2, -1, -1):
    spaces = " " * (n - i - 1)
    stars = "*" * (2 * i + 1)
    print(spaces + stars)`,
    language: "python",
    category: "Art",
    categoryZh: "艺术",
    tags: ["project", "area-2", "for-loop", "patterns"],
    fromLesson: "2-1",
  },

  {
    id: "proj-py-2-2-1",
    title: "📋 Todo List Manager · 待办事项管理器",
    description: "Build a todo list with add, remove, and priority sorting! 构建带添加、删除和优先级排序的待办列表",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 📋 Todo List Manager
todos = []
completed = []

# TODO: Add tasks to the list
# todos.append("task")

# TODO: Mark tasks as complete
# Move from todos to completed

# TODO: Show tasks with numbering
# for i in range(len(todos)):
#     print(str(i+1) + ". " + todos[i])

# TODO: Sort tasks alphabetically

# Simulate some operations:
tasks_to_add = ["Study math", "Clean room", "Buy groceries", "Walk dog", "Read book"]
# Add all tasks
# Complete "Clean room" and "Walk dog"
# Print remaining and completed lists`,
    hint: "Use append() to add, remove() to delete, sort() to sort. Use \"in\" to check if item exists.",
    solution: `todos = []
completed = []

tasks_to_add = ["Study math", "Clean room", "Buy groceries", "Walk dog", "Read book"]
for task in tasks_to_add:
    todos.append(task)
    print("Added: " + task)

print("\n📋 All Tasks:")
for i in range(len(todos)):
    print(str(i+1) + ". " + todos[i])

for done in ["Clean room", "Walk dog"]:
    if done in todos:
        todos.remove(done)
        completed.append(done)
        print("✅ Completed: " + done)

todos.sort()
print("\n📋 Remaining (sorted):")
for i in range(len(todos)):
    print(str(i+1) + ". " + todos[i])

print("\n✅ Completed:")
for task in completed:
    print("  ✓ " + task)`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-2", "lists"],
    fromLesson: "2-2",
  },

  {
    id: "proj-py-2-2-2",
    title: "🏆 Scoreboard · 计分板",
    description: "Create a sports scoreboard with rankings and statistics! 创建带排名和统计的体育记分牌",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🏆 Scoreboard System
players = ["Alice", "Bob", "Charlie", "Diana", "Eve"]
scores = [85, 92, 78, 95, 88]

# TODO: Display the scoreboard with rankings
# Sort by score (highest first)
# Show: Rank. Name - Score

# TODO: Find the highest and lowest scores
# TODO: Calculate the average score
# TODO: Add a new player and score
# TODO: Find who scored above average

# Bonus: Create a "medal" display
# 🥇 1st place, 🥈 2nd place, 🥉 3rd place`,
    hint: "Use zip(scores, players) and sorted() to sort together. Or use list indexing with sorted indices.",
    solution: `players = ["Alice", "Bob", "Charlie", "Diana", "Eve"]
scores = [85, 92, 78, 95, 88]

paired = list(zip(scores, players))
paired.sort(reverse=True)

print("🏆 SCOREBOARD 🏆")
medals = ["🥇", "🥈", "🥉"]
for i in range(len(paired)):
    medal = medals[i] if i < 3 else "  "
    print(medal + " " + str(i+1) + ". " + paired[i][1] + " - " + str(paired[i][0]))

highest = max(scores)
lowest = min(scores)
avg = sum(scores) / len(scores)
print("\nHighest: " + str(highest))
print("Lowest: " + str(lowest))
print("Average: " + str(round(avg, 1)))

print("\nAbove average:")
for s, p in paired:
    if s > avg:
        print("  ⭐ " + p + ": " + str(s))`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-2", "lists", "sorting"],
    fromLesson: "2-2",
  },

  {
    id: "proj-py-2-3-1",
    title: "🎰 Number Guessing Game · 猜数字游戏",
    description: "Build a number guessing game with hints and attempt tracking! 构建带提示和次数追踪的猜数字游戏",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🎰 Number Guessing Game
import random

secret = random.randint(1, 100)
attempts = 0
max_attempts = 7
guessed = False

# TODO: Use a while loop to let player guess
# While not guessed and attempts < max_attempts:
#   Get a guess (simulate with a list of guesses)
#   Compare: too high, too low, or correct!
#   Track attempts

# Simulate guesses:
guesses = [50, 75, 62, 68, 65, 67, 66]

# TODO: After loop, show if they won or lost
# Show the secret number if they lost`,
    hint: "Use while not guessed and attempts < max_attempts. Compare guess to secret with if/elif/else.",
    solution: `import random

secret = random.randint(1, 100)
attempts = 0
max_attempts = 7
guessed = False

guesses = [50, 75, 62, 68, 65, 67, 66]
guess_idx = 0

print("🎰 Guess the number (1-100)!")
print("You have " + str(max_attempts) + " attempts.\n")

while not guessed and attempts < max_attempts:
    if guess_idx < len(guesses):
        guess = guesses[guess_idx]
        guess_idx += 1
    else:
        guess = secret
    attempts += 1
    print("Attempt " + str(attempts) + ": " + str(guess), end=" → ")
    if guess == secret:
        print("🎉 Correct!")
        guessed = True
    elif guess < secret:
        print("📈 Too low!")
    else:
        print("📉 Too high!")

if guessed:
    print("\n🏆 You won in " + str(attempts) + " attempts!")
else:
    print("\n💀 Game over! The number was " + str(secret))`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-2", "while-loop", "game"],
    fromLesson: "2-3",
  },

  {
    id: "proj-py-2-3-2",
    title: "🏧 ATM Simulator · ATM 模拟器",
    description: "Simulate an ATM with balance checking, deposits, and withdrawals! 模拟 ATM 的余额查询、存款和取款功能",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🏧 ATM Simulator
balance = 1000.00
pin = "1234"
transactions = []

# TODO: Simulate ATM operations using while loop
# Operations to process:
operations = [
    ("check", 0),
    ("withdraw", 200),
    ("deposit", 500),
    ("withdraw", 2000),  # should fail - insufficient
    ("check", 0),
    ("quit", 0),
]

# TODO: For each operation:
# "check" - show balance
# "withdraw" - subtract if enough balance
# "deposit" - add to balance
# "quit" - exit loop
# Log each transaction to transactions list`,
    hint: "Use while with an index or pop operations. Check balance >= amount before withdrawing.",
    solution: `balance = 1000.00
transactions = []

operations = [
    ("check", 0),
    ("withdraw", 200),
    ("deposit", 500),
    ("withdraw", 2000),
    ("check", 0),
    ("quit", 0),
]

print("🏧 ATM SIMULATOR")
print("=" * 30)

i = 0
running = True
while running and i < len(operations):
    op, amount = operations[i]
    i += 1
    if op == "check":
        print("💰 Balance: $" + str(round(balance, 2)))
        transactions.append("Checked balance")
    elif op == "withdraw":
        if amount <= balance:
            balance -= amount
            print("💸 Withdrew: $" + str(amount) + " | Balance: $" + str(round(balance, 2)))
            transactions.append("Withdrew $" + str(amount))
        else:
            print("❌ Insufficient funds for $" + str(amount))
            transactions.append("Failed withdrawal $" + str(amount))
    elif op == "deposit":
        balance += amount
        print("💵 Deposited: $" + str(amount) + " | Balance: $" + str(round(balance, 2)))
        transactions.append("Deposited $" + str(amount))
    elif op == "quit":
        running = False
        print("👋 Goodbye!")

print("\n📜 Transaction History:")
for t in transactions:
    print("  • " + t)`,
    language: "python",
    category: "Simulations",
    categoryZh: "模拟",
    tags: ["project", "area-2", "while-loop"],
    fromLesson: "2-3",
  },

  {
    id: "proj-py-2-4-1",
    title: "🔍 Text Analyzer · 文本分析器",
    description: "Analyze text with string methods - count words, find patterns, transform! 使用字符串方法分析文本",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🔍 Text Analyzer
text = "The Quick Brown Fox Jumps Over The Lazy Dog. The dog was not amused."

# TODO: Basic stats
# 1. Count total characters (len)
# 2. Count words (split)
# 3. Count sentences (count ".")
# 4. Convert to uppercase / lowercase

# TODO: Word analysis
# 5. Find the longest word
# 6. Find all words that start with "T"
# 7. Replace "dog" with "cat"
# 8. Check if text starts with "The"

# TODO: Advanced
# 9. Reverse the text
# 10. Count frequency of each word`,
    hint: "Use .split() to get words, .lower() for case, .count() for occurrences, .replace() for substitution.",
    solution: `text = "The Quick Brown Fox Jumps Over The Lazy Dog. The dog was not amused."

print("📊 TEXT ANALYSIS")
print("Characters: " + str(len(text)))
words = text.split()
print("Words: " + str(len(words)))
print("Sentences: " + str(text.count(".")))
print("Uppercase: " + text.upper())
print("Lowercase: " + text.lower())

longest = ""
for w in words:
    if len(w) > len(longest):
        longest = w
print("\nLongest word: " + longest)

t_words = [w for w in words if w.lower().startswith("t")]
print("Words starting with T: " + str(t_words))
print("Replaced: " + text.replace("dog", "cat").replace("Dog", "Cat"))
print("Starts with 'The': " + str(text.startswith("The")))
print("Reversed: " + text[::-1])

freq = {}
for w in text.lower().replace(".", "").split():
    freq[w] = freq.get(w, 0) + 1
print("\nWord frequency:")
for w, c in sorted(freq.items(), key=lambda x: -x[1]):
    print("  " + w + ": " + str(c))`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-2", "strings", "methods"],
    fromLesson: "2-4",
  },

  {
    id: "proj-py-2-4-2",
    title: "🔐 Password Strength Checker · 密码强度检查器",
    description: "Check password strength using string methods! 使用字符串方法检查密码强度",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🔐 Password Strength Checker
passwords = ["hello", "Hello123", "P@ssw0rd!", "12345678", "MyC@t!sGr8"]

# TODO: For each password, check:
# 1. Length >= 8 characters
# 2. Contains uppercase (.isupper() on individual chars)
# 3. Contains lowercase
# 4. Contains digit (.isdigit())
# 5. Contains special character (not .isalnum())

# TODO: Score each password (1 point per check passed)
# 5 = 💪 Strong, 3-4 = 🟡 Medium, 1-2 = 🔴 Weak

# TODO: Print results for each password`,
    hint: "Loop through each character with for ch in password. Use ch.isupper(), ch.islower(), ch.isdigit(), not ch.isalnum().",
    solution: `passwords = ["hello", "Hello123", "P@ssw0rd!", "12345678", "MyC@t!sGr8"]

print("🔐 PASSWORD STRENGTH CHECKER\n")
for pwd in passwords:
    score = 0
    checks = []
    if len(pwd) >= 8:
        score += 1
        checks.append("length✓")
    has_upper = any(c.isupper() for c in pwd)
    has_lower = any(c.islower() for c in pwd)
    has_digit = any(c.isdigit() for c in pwd)
    has_special = any(not c.isalnum() for c in pwd)
    if has_upper: score += 1; checks.append("upper✓")
    if has_lower: score += 1; checks.append("lower✓")
    if has_digit: score += 1; checks.append("digit✓")
    if has_special: score += 1; checks.append("special✓")
    if score >= 5: strength = "💪 Strong"
    elif score >= 3: strength = "🟡 Medium"
    else: strength = "🔴 Weak"
    print(pwd + " → " + strength + " (" + str(score) + "/5) " + ", ".join(checks))`,
    language: "python",
    category: "Crypto",
    categoryZh: "加密",
    tags: ["project", "area-2", "strings", "security"],
    fromLesson: "2-4",
  },

  {
    id: "proj-py-2-5-1",
    title: "🎲 Dice Game Library · 骰子游戏库",
    description: "Build a library of dice-related functions! 构建骰子相关的函数库",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🎲 Dice Game Library
import random

# TODO: Create these functions:

# 1. roll_dice(sides=6) - roll a die with N sides, return result

# 2. roll_multiple(count, sides=6) - roll multiple dice, return list

# 3. calculate_stats(rolls) - return dict with min, max, avg, total

# 4. is_yahtzee(rolls) - check if all dice are the same

# 5. play_round(num_dice=5) - roll dice, show results and stats

# Test your functions:
# roll1 = roll_dice()
# rolls = roll_multiple(5)
# stats = calculate_stats(rolls)
# play_round()`,
    hint: "Each function should use def and return. Use sum()/len()/min()/max() for stats.",
    solution: `import random

def roll_dice(sides=6):
    return random.randint(1, sides)

def roll_multiple(count, sides=6):
    return [roll_dice(sides) for _ in range(count)]

def calculate_stats(rolls):
    return {
        "min": min(rolls),
        "max": max(rolls),
        "avg": round(sum(rolls) / len(rolls), 1),
        "total": sum(rolls)
    }

def is_yahtzee(rolls):
    return len(set(rolls)) == 1

def play_round(num_dice=5):
    rolls = roll_multiple(num_dice)
    stats = calculate_stats(rolls)
    print("🎲 Rolled: " + str(rolls))
    print("📊 Stats: " + str(stats))
    if is_yahtzee(rolls):
        print("🎉 YAHTZEE!")
    return rolls

print("Single roll: " + str(roll_dice()))
print("D20 roll: " + str(roll_dice(20)))
rolls = roll_multiple(5)
print("5 dice: " + str(rolls))
print("Stats: " + str(calculate_stats(rolls)))
print("Yahtzee? " + str(is_yahtzee(rolls)))
print()
play_round()`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-2", "functions"],
    fromLesson: "2-5",
  },

  {
    id: "proj-py-2-5-2",
    title: "🔄 Unit Converter · 单位转换器",
    description: "Build a multi-unit converter with reusable functions! 构建多单位转换器",
    difficulty: 1,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🔄 Unit Converter
# Create functions for different conversions

# TODO: Temperature functions
# def f_to_c(f): ...
# def c_to_f(c): ...

# TODO: Distance functions
# def miles_to_km(miles): ...
# def km_to_miles(km): ...

# TODO: Weight functions
# def lbs_to_kg(lbs): ...
# def kg_to_lbs(kg): ...

# TODO: A general convert function
# def convert(value, from_unit, to_unit): ...
# Should handle all the above conversions

# Test all conversions:
# print(f_to_c(98.6))  # body temp
# print(miles_to_km(26.2))  # marathon
# print(lbs_to_kg(150))  # person weight`,
    hint: "F to C: (f-32)*5/9. Miles to km: miles*1.609. Lbs to kg: lbs*0.4536.",
    solution: `def f_to_c(f):
    return round((f - 32) * 5 / 9, 2)

def c_to_f(c):
    return round(c * 9 / 5 + 32, 2)

def miles_to_km(miles):
    return round(miles * 1.609, 2)

def km_to_miles(km):
    return round(km / 1.609, 2)

def lbs_to_kg(lbs):
    return round(lbs * 0.4536, 2)

def kg_to_lbs(kg):
    return round(kg / 0.4536, 2)

def convert(value, from_unit, to_unit):
    conversions = {
        ("F", "C"): f_to_c, ("C", "F"): c_to_f,
        ("mi", "km"): miles_to_km, ("km", "mi"): km_to_miles,
        ("lb", "kg"): lbs_to_kg, ("kg", "lb"): kg_to_lbs,
    }
    fn = conversions.get((from_unit, to_unit))
    if fn:
        return fn(value)
    return "Unknown conversion"

print("🌡️ 98.6°F = " + str(f_to_c(98.6)) + "°C")
print("🌡️ 0°C = " + str(c_to_f(0)) + "°F")
print("🏃 Marathon: " + str(miles_to_km(26.2)) + " km")
print("⚖️ 150 lbs = " + str(lbs_to_kg(150)) + " kg")
print("🔄 " + str(convert(100, "F", "C")) + "°C")`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-2", "functions"],
    fromLesson: "2-5",
  },

  {
    id: "proj-py-2-6-1",
    title: "🐍 Snake Game (Text) · 贪吃蛇（文字版）",
    description: "Build a simplified text-based snake game with grid display! 构建简化的文字版贪吃蛇游戏",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🐍 Text Snake Game
import random

SIZE = 10
snake = [[5, 5], [5, 4], [5, 3]]  # head first
food = [3, 7]
score = 0
direction = "right"

# TODO: Create function to draw the grid
# def draw_grid():
#   Show snake as "S" (head as "@"), food as "*", empty as "."

# TODO: Create function to move snake
# def move_snake(direction):
#   Add new head based on direction
#   Remove tail (unless eating food)

# TODO: Create function to check collision
# def check_collision():
#   Hit wall or hit self?

# TODO: Simulate 10 moves
moves = ["right", "right", "down", "down", "left", "left", "up", "right", "right", "down"]`,
    hint: "Grid is 2D list. Snake head moves by adding [row+dr, col+dc]. Pop tail unless food eaten.",
    solution: `import random

SIZE = 10
snake = [[5, 5], [5, 4], [5, 3]]
food = [3, 7]
score = 0

def draw_grid():
    for r in range(SIZE):
        row = ""
        for c in range(SIZE):
            if [r, c] == snake[0]:
                row += "@"
            elif [r, c] in snake:
                row += "S"
            elif [r, c] == food:
                row += "*"
            else:
                row += "."
        print(row)
    print()

def place_food():
    global food
    food = [random.randint(0, SIZE-1), random.randint(0, SIZE-1)]
    while food in snake:
        food = [random.randint(0, SIZE-1), random.randint(0, SIZE-1)]

def move_snake(d):
    global score, food
    dr = {"up": -1, "down": 1, "left": 0, "right": 0}
    dc = {"up": 0, "down": 0, "left": -1, "right": 1}
    new_head = [snake[0][0] + dr[d], snake[0][1] + dc[d]]
    snake.insert(0, new_head)
    if new_head == food:
        score += 1
        place_food()
    else:
        snake.pop()

def check_collision():
    h = snake[0]
    if h[0] < 0 or h[0] >= SIZE or h[1] < 0 or h[1] >= SIZE:
        return True
    if h in snake[1:]:
        return True
    return False

moves = ["right", "right", "down", "down", "left", "left", "up", "right", "right", "down"]
print("🐍 SNAKE GAME")
for m in moves:
    move_snake(m)
    if check_collision():
        print("💀 Game Over!")
        break
    draw_grid()
print("Score: " + str(score))`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-2", "loops", "lists", "game"],
    fromLesson: "2-6",
  },

  {
    id: "proj-py-3-1-1",
    title: "🔧 Function Toolkit · 函数工具箱",
    description: "Build a toolkit using lambda, *args, and **kwargs! 使用 lambda、*args 和 **kwargs 构建工具箱",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🔧 Function Toolkit

# TODO: Create a pipeline function
# def pipeline(value, *functions):
#   Apply each function to value in sequence
#   pipeline(5, double, add_one) → 11

# TODO: Create configurable functions
# def make_multiplier(n):
#   Return a lambda that multiplies by n

# TODO: Create a function logger
# def logged(func):
#   Return wrapper that prints args before calling func

# TODO: Create a flexible formatter
# def format_data(**kwargs):
#   Print each key-value pair nicely

# Test:
# double = make_multiplier(2)
# triple = make_multiplier(3)
# print(pipeline(5, double, triple))  # 30`,
    hint: "lambda x: x*n creates a function. *args collects positional args as tuple. **kwargs collects keyword args as dict.",
    solution: `def pipeline(value, *functions):
    result = value
    for fn in functions:
        result = fn(result)
    return result

def make_multiplier(n):
    return lambda x: x * n

def logged(func):
    def wrapper(*args, **kwargs):
        print("Calling " + func.__name__ + " with " + str(args) + " " + str(kwargs))
        result = func(*args, **kwargs)
        print("Result: " + str(result))
        return result
    return wrapper

def format_data(**kwargs):
    for key, value in kwargs.items():
        print(str(key) + ": " + str(value))

double = make_multiplier(2)
triple = make_multiplier(3)
add_one = lambda x: x + 1

print("double(5) =", double(5))
print("triple(4) =", triple(4))
print("pipeline(5, double, triple) =", pipeline(5, double, triple))
print("pipeline(5, double, add_one) =", pipeline(5, double, add_one))

@logged
def add(a, b):
    return a + b

add(3, 4)

print("\n📋 Student Info:")
format_data(name="Alice", grade=10, gpa=3.9, honors=True)`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-3", "lambda", "args", "kwargs"],
    fromLesson: "3-1",
  },

  {
    id: "proj-py-3-1-2",
    title: "📊 Data Transformer · 数据转换器",
    description: "Process data using map, filter, reduce with lambda functions! 使用 map、filter、lambda 处理数据",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 📊 Data Transformer
from functools import reduce

students = [
    {"name": "Alice", "grade": 92},
    {"name": "Bob", "grade": 78},
    {"name": "Charlie", "grade": 85},
    {"name": "Diana", "grade": 95},
    {"name": "Eve", "grade": 67},
]

# TODO: Use map + lambda to get list of names
# TODO: Use filter + lambda to get students with grade > 80
# TODO: Use map + lambda to add 5 bonus points to each grade
# TODO: Use reduce + lambda to find total of all grades
# TODO: Sort students by grade using sorted + lambda key
# TODO: Create a grade curve function using *args`,
    hint: "map(lambda x: x[\"name\"], students) extracts names. filter(lambda x: x[\"grade\"]>80, students) filters.",
    solution: `from functools import reduce

students = [
    {"name": "Alice", "grade": 92},
    {"name": "Bob", "grade": 78},
    {"name": "Charlie", "grade": 85},
    {"name": "Diana", "grade": 95},
    {"name": "Eve", "grade": 67},
]

names = list(map(lambda s: s["name"], students))
print("Names: " + str(names))

honor_roll = list(filter(lambda s: s["grade"] > 80, students))
print("Honor Roll: " + str([s["name"] for s in honor_roll]))

curved = list(map(lambda s: {"name": s["name"], "grade": min(100, s["grade"] + 5)}, students))
print("Curved: " + str([(s["name"], s["grade"]) for s in curved]))

total = reduce(lambda acc, s: acc + s["grade"], students, 0)
print("Total: " + str(total) + " | Average: " + str(round(total/len(students), 1)))

ranked = sorted(students, key=lambda s: s["grade"], reverse=True)
print("\n🏆 Rankings:")
for i, s in enumerate(ranked):
    print(str(i+1) + ". " + s["name"] + " - " + str(s["grade"]))`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-3", "lambda", "map", "filter"],
    fromLesson: "3-1",
  },

  {
    id: "proj-py-3-2-1",
    title: "📓 Journal App · 日记应用",
    description: "Build a journal that writes and reads entries (simulated)! 构建一个写入和读取日记的应用（模拟版）",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 📓 Journal App (Simulated File I/O)
# We simulate file operations with strings since we can't write real files

import json

# Simulate file content
file_content = ""

# TODO: Write function to add journal entry
# def add_entry(date, mood, text):
#   Append formatted entry to file_content

# TODO: Write function to save as JSON
# def save_journal(entries):
#   Convert to JSON string

# TODO: Write function to load from JSON
# def load_journal(json_string):
#   Parse JSON back to list

# TODO: Write function to search entries
# def search_entries(entries, keyword):

entries = []
# Add 3 sample entries
# Save to "file"
# Load from "file"
# Search for a keyword`,
    hint: "Use json.dumps() to serialize and json.loads() to deserialize. Append entries to a list of dicts.",
    solution: `import json

entries = []

def add_entry(entries, date, mood, text):
    entry = {"date": date, "mood": mood, "text": text}
    entries.append(entry)
    print("📝 Added entry for " + date)
    return entries

def save_journal(entries):
    json_str = json.dumps(entries, indent=2)
    print("💾 Saved " + str(len(entries)) + " entries")
    return json_str

def load_journal(json_str):
    loaded = json.loads(json_str)
    print("📂 Loaded " + str(len(loaded)) + " entries")
    return loaded

def search_entries(entries, keyword):
    found = [e for e in entries if keyword.lower() in e["text"].lower()]
    print("🔍 Found " + str(len(found)) + " entries with '" + keyword + "'")
    return found

add_entry(entries, "2024-01-15", "😊", "Had a great day at school! Learned Python.")
add_entry(entries, "2024-01-16", "😴", "Tired but finished my homework on time.")
add_entry(entries, "2024-01-17", "🎉", "Got an A on my Python test!")

saved = save_journal(entries)
print("\nFile content:\n" + saved)

loaded = load_journal(saved)
results = search_entries(loaded, "Python")
for r in results:
    print("  " + r["date"] + " " + r["mood"] + " " + r["text"])`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-3", "file-io", "json"],
    fromLesson: "3-2",
  },

  {
    id: "proj-py-3-2-2",
    title: "📊 CSV Data Processor · CSV 数据处理器",
    description: "Process CSV-formatted data: parse, analyze, and format reports! 处理 CSV 格式数据：解析、分析和格式化报告",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 📊 CSV Data Processor (simulated)

csv_data = """name,subject,score
Alice,Math,92
Alice,Science,88
Bob,Math,76
Bob,Science,82
Charlie,Math,95
Charlie,Science,91
Diana,Math,68
Diana,Science,73"""

# TODO: Parse CSV string into list of dicts
# def parse_csv(csv_string):

# TODO: Calculate average by subject
# def avg_by_subject(records):

# TODO: Find top student per subject
# def top_student(records, subject):

# TODO: Generate a report string
# def generate_report(records):`,
    hint: "Split by newlines, then split first line for headers. Use zip(headers, values) for each row.",
    solution: `csv_data = """name,subject,score
Alice,Math,92
Alice,Science,88
Bob,Math,76
Bob,Science,82
Charlie,Math,95
Charlie,Science,91
Diana,Math,68
Diana,Science,73"""

def parse_csv(csv_string):
    lines = csv_string.strip().split("\n")
    headers = lines[0].split(",")
    records = []
    for line in lines[1:]:
        values = line.split(",")
        record = {}
        for h, v in zip(headers, values):
            record[h] = int(v) if v.isdigit() else v
        records.append(record)
    return records

def avg_by_subject(records):
    subjects = {}
    for r in records:
        subj = r["subject"]
        if subj not in subjects:
            subjects[subj] = []
        subjects[subj].append(r["score"])
    return {s: round(sum(sc)/len(sc), 1) for s, sc in subjects.items()}

def top_student(records, subject):
    filtered = [r for r in records if r["subject"] == subject]
    return max(filtered, key=lambda r: r["score"])

records = parse_csv(csv_data)
print("📊 Parsed " + str(len(records)) + " records")

avgs = avg_by_subject(records)
print("\n📈 Averages:")
for subj, avg in avgs.items():
    print("  " + subj + ": " + str(avg))

for subj in ["Math", "Science"]:
    top = top_student(records, subj)
    print("🏆 Top in " + subj + ": " + top["name"] + " (" + str(top["score"]) + ")")`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-3", "file-io", "csv", "data"],
    fromLesson: "3-2",
  },

  {
    id: "proj-py-3-3-1",
    title: "🛡️ Robust Calculator · 健壮计算器",
    description: "Build a calculator that handles every error gracefully! 构建一个优雅处理所有错误的计算器",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🛡️ Robust Calculator
# Handle ALL errors gracefully!

# TODO: Create safe_divide(a, b) with ZeroDivisionError handling
# TODO: Create safe_convert(value) - convert string to number with ValueError handling
# TODO: Create safe_calculate(expression_str) - parse "5 + 3" strings

# Test with these tricky inputs:
test_inputs = [
    ("10", "/", "2"),    # normal
    ("10", "/", "0"),    # divide by zero!
    ("abc", "+", "5"),   # not a number!
    ("10", "%", "3"),    # modulo
    ("10", "^", "2"),    # unknown operator
    ("", "+", "5"),      # empty input
]`,
    hint: "Wrap risky code in try/except. Catch specific exceptions: ValueError, ZeroDivisionError, then general Exception.",
    solution: `def safe_convert(value):
    try:
        return float(value)
    except ValueError:
        print("⚠️ '" + str(value) + "' is not a valid number")
        return None
    except Exception as e:
        print("❌ Unexpected error: " + str(e))
        return None

def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("⚠️ Cannot divide by zero!")
        return None

def safe_calculate(a_str, op, b_str):
    a = safe_convert(a_str)
    b = safe_convert(b_str)
    if a is None or b is None:
        return None
    try:
        if op == "+": return a + b
        elif op == "-": return a - b
        elif op == "*": return a * b
        elif op == "/": return safe_divide(a, b)
        elif op == "%": return a % b
        else:
            raise ValueError("Unknown operator: " + op)
    except ValueError as e:
        print("⚠️ " + str(e))
        return None

test_inputs = [
    ("10", "/", "2"), ("10", "/", "0"), ("abc", "+", "5"),
    ("10", "%", "3"), ("10", "^", "2"), ("", "+", "5"),
]

print("🛡️ ROBUST CALCULATOR\n")
for a, op, b in test_inputs:
    result = safe_calculate(a, op, b)
    if result is not None:
        print(a + " " + op + " " + b + " = " + str(result) + " ✅")
    else:
        print(a + " " + op + " " + b + " = ERROR ❌")
    print()`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-3", "try-except", "errors"],
    fromLesson: "3-3",
  },

  {
    id: "proj-py-3-3-2",
    title: "🔒 Input Validator · 输入验证器",
    description: "Build a form validator with custom exceptions! 构建带自定义异常的表单验证器",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🔒 Input Validator

# TODO: Create custom exception classes
# class ValidationError(Exception): pass
# class AgeError(ValidationError): pass
# class EmailError(ValidationError): pass

# TODO: Validate functions that raise exceptions
# def validate_age(age_str): raise AgeError if invalid
# def validate_email(email): raise EmailError if no "@"
# def validate_name(name): raise ValidationError if empty

# TODO: Process a list of form submissions
forms = [
    {"name": "Alice", "age": "16", "email": "alice@test.com"},
    {"name": "", "age": "16", "email": "bob@test.com"},
    {"name": "Charlie", "age": "abc", "email": "charlie@test.com"},
    {"name": "Diana", "age": "-5", "email": "diana"},
    {"name": "Eve", "age": "200", "email": "eve@school.edu"},
]`,
    hint: "Create exception classes inheriting from Exception. Use raise to throw errors. Catch specific types.",
    solution: `class ValidationError(Exception):
    pass

class AgeError(ValidationError):
    pass

class EmailError(ValidationError):
    pass

def validate_name(name):
    if not name or not name.strip():
        raise ValidationError("Name cannot be empty")
    if len(name) < 2:
        raise ValidationError("Name too short")
    return name.strip()

def validate_age(age_str):
    try:
        age = int(age_str)
    except ValueError:
        raise AgeError("Age must be a number, got: " + age_str)
    if age < 0 or age > 150:
        raise AgeError("Age must be 0-150, got: " + str(age))
    return age

def validate_email(email):
    if "@" not in email:
        raise EmailError("Email must contain @: " + email)
    if "." not in email.split("@")[1]:
        raise EmailError("Email domain must have a dot: " + email)
    return email

forms = [
    {"name": "Alice", "age": "16", "email": "alice@test.com"},
    {"name": "", "age": "16", "email": "bob@test.com"},
    {"name": "Charlie", "age": "abc", "email": "charlie@test.com"},
    {"name": "Diana", "age": "-5", "email": "diana"},
    {"name": "Eve", "age": "200", "email": "eve@school.edu"},
]

print("🔒 FORM VALIDATOR\n")
for i, form in enumerate(forms):
    print("Form " + str(i+1) + ":")
    try:
        name = validate_name(form["name"])
        age = validate_age(form["age"])
        email = validate_email(form["email"])
        print("  ✅ Valid: " + name + ", " + str(age) + ", " + email)
    except AgeError as e:
        print("  ❌ Age Error: " + str(e))
    except EmailError as e:
        print("  ❌ Email Error: " + str(e))
    except ValidationError as e:
        print("  ❌ Validation Error: " + str(e))`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-3", "try-except", "classes"],
    fromLesson: "3-3",
  },

  {
    id: "proj-py-3-4-1",
    title: "🐾 Virtual Pet · 虚拟宠物",
    description: "Create a virtual pet with classes - feed it, play with it, watch it grow! 用类创建虚拟宠物",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🐾 Virtual Pet

# TODO: Create a Pet class with:
# - __init__(self, name, species): set name, species, hunger=50, happiness=50, energy=50
# - feed(self): decrease hunger, increase energy
# - play(self): increase happiness, decrease energy, increase hunger
# - sleep(self): increase energy, slight hunger increase
# - status(self): print all stats with emoji bars
# - is_alive(self): check if any stat hits 0 or 100

# TODO: Create a Tamagotchi simulation
# Run 10 time steps, choosing actions
actions = ["feed", "play", "play", "sleep", "feed", "play", "sleep", "feed", "play", "feed"]`,
    hint: "Use self.attribute to store state. Clamp values with min(100, max(0, value)).",
    solution: `class Pet:
    def __init__(self, name, species):
        self.name = name
        self.species = species
        self.hunger = 50
        self.happiness = 50
        self.energy = 50
        self.age = 0

    def clamp(self, val):
        return min(100, max(0, val))

    def feed(self):
        self.hunger = self.clamp(self.hunger - 20)
        self.energy = self.clamp(self.energy + 5)
        print("🍖 " + self.name + " eats happily!")

    def play(self):
        self.happiness = self.clamp(self.happiness + 20)
        self.energy = self.clamp(self.energy - 15)
        self.hunger = self.clamp(self.hunger + 10)
        print("🎾 " + self.name + " plays!")

    def sleep(self):
        self.energy = self.clamp(self.energy + 30)
        self.hunger = self.clamp(self.hunger + 5)
        print("💤 " + self.name + " sleeps...")

    def status(self):
        self.age += 1
        print("\n" + self.species + " " + self.name + " (Age: " + str(self.age) + ")")
        for stat, val in [("Hunger", self.hunger), ("Happy", self.happiness), ("Energy", self.energy)]:
            bar = "█" * (val // 10) + "░" * (10 - val // 10)
            print("  " + stat + ": [" + bar + "] " + str(val))

    def is_alive(self):
        return self.hunger < 100 and self.energy > 0

pet = Pet("Pixel", "🐱")
actions = ["feed", "play", "play", "sleep", "feed", "play", "sleep", "feed", "play", "feed"]

for action in actions:
    if not pet.is_alive():
        print("💀 " + pet.name + " fainted!")
        break
    getattr(pet, action)()
    pet.status()`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-3", "classes", "oop"],
    fromLesson: "3-4",
  },

  {
    id: "proj-py-3-4-2",
    title: "🏦 Bank Account System · 银行账户系统",
    description: "Build a banking system with OOP - accounts, transactions, and inheritance! 用OOP构建银行系统",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🏦 Bank Account System

# TODO: Create BankAccount class
# - __init__(self, owner, balance=0)
# - deposit(self, amount)
# - withdraw(self, amount) - check sufficient funds
# - get_balance(self)
# - __str__(self) - nice string representation

# TODO: Create SavingsAccount(BankAccount) subclass
# - Adds interest_rate attribute
# - apply_interest() method
# - Override withdraw to require minimum balance of $100

# TODO: Create CheckingAccount(BankAccount) subclass
# - Adds overdraft_limit attribute
# - Override withdraw to allow overdraft up to limit

# Test the system with multiple accounts and transactions`,
    hint: "Use class ChildClass(ParentClass) for inheritance. Call super().__init__() in child __init__.",
    solution: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.transactions = []

    def deposit(self, amount):
        self.balance += amount
        self.transactions.append(("deposit", amount))
        print("💵 Deposited $" + str(amount))

    def withdraw(self, amount):
        if amount > self.balance:
            print("❌ Insufficient funds")
            return False
        self.balance -= amount
        self.transactions.append(("withdraw", amount))
        print("💸 Withdrew $" + str(amount))
        return True

    def get_balance(self):
        return self.balance

    def __str__(self):
        return self.owner + "'s Account: $" + str(round(self.balance, 2))

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, rate=0.02):
        super().__init__(owner, balance)
        self.interest_rate = rate

    def apply_interest(self):
        interest = self.balance * self.interest_rate
        self.balance += interest
        print("📈 Interest: +$" + str(round(interest, 2)))

    def withdraw(self, amount):
        if self.balance - amount < 100:
            print("❌ Must keep $100 minimum")
            return False
        return super().withdraw(amount)

class CheckingAccount(BankAccount):
    def __init__(self, owner, balance=0, limit=500):
        super().__init__(owner, balance)
        self.overdraft_limit = limit

    def withdraw(self, amount):
        if amount > self.balance + self.overdraft_limit:
            print("❌ Exceeds overdraft limit")
            return False
        self.balance -= amount
        self.transactions.append(("withdraw", amount))
        if self.balance < 0:
            print("⚠️ Overdraft! Withdrew $" + str(amount))
        else:
            print("💸 Withdrew $" + str(amount))
        return True

savings = SavingsAccount("Alice", 1000, 0.05)
checking = CheckingAccount("Bob", 500, 200)

print("🏦 BANK SYSTEM\n")
savings.deposit(500)
savings.apply_interest()
savings.withdraw(1300)
savings.withdraw(200)
print(savings)

print()
checking.deposit(100)
checking.withdraw(700)
print(checking)`,
    language: "python",
    category: "Simulations",
    categoryZh: "模拟",
    tags: ["project", "area-3", "classes", "oop", "inheritance"],
    fromLesson: "3-4",
  },

  {
    id: "proj-py-3-5-1",
    title: "📦 Mini Package Manager · 迷你包管理器",
    description: "Build a module system that imports and uses custom modules! 构建模块导入和使用系统",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 📦 Mini Package Manager
# Simulate a module system

import math
import random
import json
from collections import Counter
from datetime import datetime

# TODO: Create a "math_tools" module (as dict of functions)
# - factorial, fibonacci, is_prime, gcd

# TODO: Create a "text_tools" module
# - word_count, reverse_text, caesar_cipher

# TODO: Create a "data_tools" module using collections
# - most_common, frequency_table

# TODO: Use all modules together to solve a problem
# Analyze a text: count words, find most common, encrypt it`,
    hint: "Store functions in dicts to simulate modules. Use Counter from collections for frequency analysis.",
    solution: `import math
import random
from collections import Counter

# Math tools module
def factorial(n):
    return math.factorial(n)

def fibonacci(n):
    a, b = 0, 1
    seq = []
    for _ in range(n):
        seq.append(a)
        a, b = b, a + b
    return seq

def is_prime(n):
    if n < 2: return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0: return False
    return True

# Text tools module
def word_count(text):
    return len(text.split())

def caesar_cipher(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

# Demo
print("📦 MODULE SYSTEM DEMO\n")

print("🔢 Math Tools:")
print("10! = " + str(factorial(10)))
print("Fibonacci(8): " + str(fibonacci(8)))
primes = [n for n in range(2, 30) if is_prime(n)]
print("Primes < 30: " + str(primes))

text = "the quick brown fox jumps over the lazy dog"
print("\n📝 Text Tools:")
print("Words: " + str(word_count(text)))
encrypted = caesar_cipher(text, 3)
print("Encrypted: " + encrypted)
print("Decrypted: " + caesar_cipher(encrypted, -3))

print("\n📊 Data Tools:")
words = text.split()
freq = Counter(words)
print("Most common: " + str(freq.most_common(3)))`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-3", "modules", "libraries"],
    fromLesson: "3-5",
  },

  {
    id: "proj-py-3-5-2",
    title: "🎨 Random Art Generator · 随机艺术生成器",
    description: "Use multiple libraries to generate random ASCII art patterns! 使用多个库生成随机 ASCII 艺术图案",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🎨 Random Art Generator
import random
import math

# TODO: Create pattern generators using different libraries

# 1. Mandala pattern (math + loops)
# Use sin/cos to create circular patterns on a grid

# 2. Random landscape (random + strings)
# Generate mountains, trees, rivers

# 3. Pixel art (random + 2D lists)
# Random colored blocks using emoji

# TODO: Create a gallery of 3 random art pieces`,
    hint: "Use math.sin/cos for circular patterns. Use random.choice for selecting characters. Build 2D grids with nested lists.",
    solution: `import random
import math

def mandala(size=15):
    print("🕉️ MANDALA")
    chars = " .·:+*#@"
    for y in range(size):
        row = ""
        for x in range(size):
            dx = x - size // 2
            dy = y - size // 2
            dist = math.sqrt(dx*dx + dy*dy)
            angle = math.atan2(dy, dx)
            val = math.sin(dist * 0.8) + math.cos(angle * 4)
            idx = int((val + 2) / 4 * (len(chars) - 1))
            idx = max(0, min(len(chars) - 1, idx))
            row += chars[idx]
        print(row)

def landscape(width=30):
    print("\n🏔️ LANDSCAPE")
    heights = [int(5 + 3 * math.sin(i * 0.3) + random.uniform(-1, 1)) for i in range(width)]
    max_h = max(heights) + 2
    for row in range(max_h, -1, -1):
        line = ""
        for col in range(width):
            if row == 0:
                line += "~" if random.random() < 0.3 else "_"
            elif row <= heights[col]:
                if row == heights[col]:
                    line += "^"
                elif row > heights[col] - 2:
                    line += "/"
                else:
                    line += "█"
            else:
                line += " "
        print(line)

def pixel_art(size=8):
    print("\n🎨 PIXEL ART")
    palette = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "⬜", "⬛"]
    for y in range(size):
        row = ""
        for x in range(size):
            if abs(x - size//2) + abs(y - size//2) < size//2:
                row += random.choice(palette[:4])
            else:
                row += random.choice(palette[6:])
        print(row)

mandala()
landscape()
pixel_art()`,
    language: "python",
    category: "Art",
    categoryZh: "艺术",
    tags: ["project", "area-3", "modules", "math", "random"],
    fromLesson: "3-5",
  },

  {
    id: "proj-py-3-6-1",
    title: "🌐 API Data Explorer · API 数据探索器",
    description: "Work with JSON APIs - parse, transform, and display data! 处理 JSON API - 解析、转换和展示数据",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🌐 API Data Explorer (Simulated)
import json

# Simulated API responses
weather_api = json.dumps({
    "city": "San Francisco",
    "temp_f": 65,
    "humidity": 72,
    "conditions": "Partly Cloudy",
    "forecast": [
        {"day": "Mon", "high": 68, "low": 55},
        {"day": "Tue", "high": 72, "low": 58},
        {"day": "Wed", "high": 60, "low": 52},
    ]
})

users_api = json.dumps([
    {"id": 1, "name": "Alice", "posts": 42, "followers": 1200},
    {"id": 2, "name": "Bob", "posts": 15, "followers": 800},
    {"id": 3, "name": "Charlie", "posts": 67, "followers": 3400},
])

# TODO: Parse the JSON responses
# TODO: Display weather data nicely
# TODO: Find the most popular user
# TODO: Create a combined report`,
    hint: "Use json.loads() to parse strings. Access nested data with dict keys and list indices.",
    solution: `import json

weather = json.loads(json.dumps({
    "city": "San Francisco",
    "temp_f": 65,
    "humidity": 72,
    "conditions": "Partly Cloudy",
    "forecast": [
        {"day": "Mon", "high": 68, "low": 55},
        {"day": "Tue", "high": 72, "low": 58},
        {"day": "Wed", "high": 60, "low": 52},
    ]
}))

users = json.loads(json.dumps([
    {"id": 1, "name": "Alice", "posts": 42, "followers": 1200},
    {"id": 2, "name": "Bob", "posts": 15, "followers": 800},
    {"id": 3, "name": "Charlie", "posts": 67, "followers": 3400},
]))

print("🌤️ WEATHER API")
print("City: " + weather["city"])
print("Temp: " + str(weather["temp_f"]) + "°F")
print("Humidity: " + str(weather["humidity"]) + "%")
print("Conditions: " + weather["conditions"])
print("\n📅 Forecast:")
for day in weather["forecast"]:
    print("  " + day["day"] + ": " + str(day["high"]) + "°/" + str(day["low"]) + "°")

print("\n👥 USERS API")
most_popular = max(users, key=lambda u: u["followers"])
print("Most popular: " + most_popular["name"] + " (" + str(most_popular["followers"]) + " followers)")

most_active = max(users, key=lambda u: u["posts"])
print("Most active: " + most_active["name"] + " (" + str(most_active["posts"]) + " posts)")

print("\n📊 Combined Report:")
report = {"weather": weather["city"] + " " + str(weather["temp_f"]) + "F", "top_user": most_popular["name"]}
print(json.dumps(report, indent=2))`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-3", "api", "json"],
    fromLesson: "3-6",
  },

  {
    id: "proj-py-3-6-2",
    title: "🤖 REST API Simulator · REST API 模拟器",
    description: "Build a simulated REST API with CRUD operations on JSON data! 构建模拟的 REST API，支持 JSON 数据的增删改查",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🤖 REST API Simulator
import json

# Simulate a database
db = {"users": [], "next_id": 1}

# TODO: Implement CRUD operations
# def api_post(endpoint, data): CREATE
# def api_get(endpoint, id=None): READ
# def api_put(endpoint, id, data): UPDATE
# def api_delete(endpoint, id): DELETE

# TODO: Simulate API calls:
# POST /users {"name": "Alice", "email": "alice@test.com"}
# POST /users {"name": "Bob", "email": "bob@test.com"}
# GET /users
# GET /users/1
# PUT /users/1 {"name": "Alice Smith"}
# DELETE /users/2
# GET /users`,
    hint: "Store data in a list of dicts. Use next_id for auto-incrementing IDs. Return JSON strings.",
    solution: `import json

db = {"users": [], "next_id": 1}

def api_post(data):
    user = {"id": db["next_id"], **data}
    db["users"].append(user)
    db["next_id"] += 1
    print("POST 201: " + json.dumps(user))
    return user

def api_get(user_id=None):
    if user_id:
        for u in db["users"]:
            if u["id"] == user_id:
                print("GET 200: " + json.dumps(u))
                return u
        print("GET 404: Not found")
        return None
    print("GET 200: " + json.dumps(db["users"], indent=2))
    return db["users"]

def api_put(user_id, data):
    for u in db["users"]:
        if u["id"] == user_id:
            u.update(data)
            print("PUT 200: " + json.dumps(u))
            return u
    print("PUT 404: Not found")
    return None

def api_delete(user_id):
    for i, u in enumerate(db["users"]):
        if u["id"] == user_id:
            removed = db["users"].pop(i)
            print("DELETE 200: Removed " + removed["name"])
            return True
    print("DELETE 404: Not found")
    return False

print("🤖 REST API SIMULATOR\n")
api_post({"name": "Alice", "email": "alice@test.com"})
api_post({"name": "Bob", "email": "bob@test.com"})
api_post({"name": "Charlie", "email": "charlie@test.com"})
print()
api_get()
print()
api_get(1)
api_put(1, {"name": "Alice Smith"})
api_delete(2)
print()
api_get()`,
    language: "python",
    category: "Tools",
    categoryZh: "工具",
    tags: ["project", "area-3", "api", "json", "crud"],
    fromLesson: "3-6",
  },

  {
    id: "proj-py-3-7-1",
    title: "🎮 RPG Battle System · RPG 战斗系统",
    description: "Build a complete RPG battle system with classes, items, and abilities! 构建完整的 RPG 战斗系统",
    difficulty: 3,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🎮 RPG Battle System

# TODO: Create Character class with:
# - name, hp, attack, defense, abilities list
# - take_damage(amount), use_ability(ability_name, target)

# TODO: Create Ability class
# - name, damage, mana_cost, element

# TODO: Create Item class
# - name, effect, value

# TODO: Create battle loop
# - Turn-based combat between hero and monster
# - Each turn: choose ability, calculate damage, apply effects
# - Battle until one side falls

# TODO: Add elemental weaknesses
# Fire > Nature > Water > Fire`,
    hint: "Use classes for Character, Ability, Item. Battle loop uses while both alive. Damage = attack - defense.",
    solution: `import random

class Ability:
    def __init__(self, name, damage, mana, element="neutral"):
        self.name = name
        self.damage = damage
        self.mana = mana
        self.element = element

class Character:
    def __init__(self, name, hp, attack, defense, mana=50):
        self.name = name
        self.hp = hp
        self.max_hp = hp
        self.attack = attack
        self.defense = defense
        self.mana = mana
        self.abilities = []

    def add_ability(self, ability):
        self.abilities.append(ability)

    def take_damage(self, amount):
        actual = max(1, amount - self.defense)
        self.hp = max(0, self.hp - actual)
        print("  " + self.name + " takes " + str(actual) + " damage! HP: " + str(self.hp))

    def use_ability(self, idx, target):
        if idx >= len(self.abilities):
            return
        ab = self.abilities[idx]
        if self.mana < ab.mana:
            print("  Not enough mana!")
            return
        self.mana -= ab.mana
        bonus = random.randint(-2, 5)
        total = self.attack + ab.damage + bonus
        print("⚔️ " + self.name + " uses " + ab.name + "!")
        target.take_damage(total)

    def is_alive(self):
        return self.hp > 0

hero = Character("Hero", 100, 12, 5, 60)
hero.add_ability(Ability("Slash", 8, 5))
hero.add_ability(Ability("Fireball", 15, 15, "fire"))
hero.add_ability(Ability("Heal", -20, 10))

boss = Character("Dragon", 80, 10, 3, 40)
boss.add_ability(Ability("Claw", 10, 5))
boss.add_ability(Ability("Breath", 18, 15, "fire"))

print("⚔️ BATTLE START!\n")
turn = 0
while hero.is_alive() and boss.is_alive():
    turn += 1
    print("--- Turn " + str(turn) + " ---")
    ab_idx = turn % len(hero.abilities)
    hero.use_ability(ab_idx, boss)
    if boss.is_alive():
        boss.use_ability(random.randint(0, len(boss.abilities)-1), hero)
    print()

winner = hero.name if hero.is_alive() else boss.name
print("🏆 " + winner + " wins in " + str(turn) + " turns!")`,
    language: "python",
    category: "Games",
    categoryZh: "游戏",
    tags: ["project", "area-3", "classes", "oop", "game"],
    fromLesson: "3-7",
  },

  {
    id: "proj-py-4-1-1",
    title: "🔬 Lab Data Logger · 实验数据记录器",
    description: "Build a scientific data logging system with statistical analysis! 构建带统计分析的科学数据记录系统",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🔬 Lab Data Logger
import random
import math

# TODO: Create a DataLogger class
# - record(value): add timestamped data point
# - mean(): calculate average
# - std_dev(): standard deviation
# - outliers(): find values > 2 std devs from mean
# - report(): print full analysis

# Simulate recording temperature readings
# 20 readings around 22°C with some noise and outliers`,
    hint: "Standard deviation: sqrt(sum((x-mean)² for x in data) / n). Outlier if |x - mean| > 2*std.",
    solution: `import random
import math

class DataLogger:
    def __init__(self, name, unit):
        self.name = name
        self.unit = unit
        self.data = []

    def record(self, value):
        self.data.append(round(value, 2))

    def mean(self):
        return sum(self.data) / len(self.data)

    def std_dev(self):
        m = self.mean()
        variance = sum((x - m) ** 2 for x in self.data) / len(self.data)
        return math.sqrt(variance)

    def outliers(self):
        m = self.mean()
        s = self.std_dev()
        return [x for x in self.data if abs(x - m) > 2 * s]

    def report(self):
        print("🔬 " + self.name + " Report")
        print("Points: " + str(len(self.data)))
        print("Mean: " + str(round(self.mean(), 2)) + " " + self.unit)
        print("Std Dev: " + str(round(self.std_dev(), 2)))
        print("Min: " + str(min(self.data)) + " | Max: " + str(max(self.data)))
        out = self.outliers()
        if out:
            print("⚠️ Outliers: " + str(out))

logger = DataLogger("Temperature", "°C")
for _ in range(18):
    logger.record(22 + random.gauss(0, 0.5))
logger.record(28.5)  # outlier
logger.record(15.2)  # outlier

print("Data: " + str(logger.data[:5]) + "...")
logger.report()`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "science-lab", "statistics"],
    fromLesson: "4-1",
  },

  {
    id: "proj-py-4-2-1",
    title: "🎲 Monte Carlo Pi · 蒙特卡洛估算π",
    description: "Estimate π using Monte Carlo simulation with random points! 使用蒙特卡洛模拟随机点估算π",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🎲 Monte Carlo Pi Estimation
import random
import math

# TODO: Throw random darts at a 1x1 square
# Count how many land inside a quarter circle (radius=1)
# π/4 ≈ (points inside circle) / (total points)
# π ≈ 4 * (inside / total)

# Try with increasing numbers of points:
# 100, 1000, 10000
# See how accuracy improves!`,
    hint: "Point (x,y) is inside unit circle if x²+y²≤1. Use random.random() for x and y between 0 and 1.",
    solution: `import random
import math

def estimate_pi(num_points):
    inside = 0
    for _ in range(num_points):
        x = random.random()
        y = random.random()
        if x*x + y*y <= 1:
            inside += 1
    return 4 * inside / num_points

print("🎲 Monte Carlo Pi Estimation\n")
for n in [100, 1000, 10000, 100000]:
    pi_est = estimate_pi(n)
    error = abs(pi_est - math.pi)
    print(str(n) + " points: π ≈ " + str(round(pi_est, 6)) + " (error: " + str(round(error, 6)) + ")")

print("\nActual π = " + str(round(math.pi, 6)))`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "science-lab", "simulation"],
    fromLesson: "4-2",
  },

  {
    id: "proj-py-4-3-1",
    title: "🧬 DNA Sequence Analyzer · DNA 序列分析器",
    description: "Analyze DNA sequences - find patterns, complement, and GC content! 分析 DNA 序列",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🧬 DNA Sequence Analyzer
import random

# TODO: Generate random DNA sequence
# def random_dna(length): return string of A, T, G, C

# TODO: Find complement (A↔T, G↔C)
# TODO: Calculate GC content (percentage of G and C)
# TODO: Find all occurrences of a pattern
# TODO: Transcribe DNA to RNA (T → U)`,
    hint: "Use str.replace() or a dict mapping for complement. Count G and C, divide by total length.",
    solution: `import random

def random_dna(length):
    return "".join(random.choice("ATGC") for _ in range(length))

def complement(dna):
    comp = {"A": "T", "T": "A", "G": "C", "C": "G"}
    return "".join(comp[base] for base in dna)

def gc_content(dna):
    gc = sum(1 for b in dna if b in "GC")
    return round(gc / len(dna) * 100, 1)

def find_pattern(dna, pattern):
    positions = []
    for i in range(len(dna) - len(pattern) + 1):
        if dna[i:i+len(pattern)] == pattern:
            positions.append(i)
    return positions

def transcribe(dna):
    return dna.replace("T", "U")

dna = random_dna(50)
print("🧬 DNA ANALYZER\n")
print("Sequence:   " + dna)
print("Complement: " + complement(dna))
print("RNA:        " + transcribe(dna))
print("GC Content: " + str(gc_content(dna)) + "%")
print("Length:     " + str(len(dna)) + " bases")

pattern = "ATG"
pos = find_pattern(dna, pattern)
print("\n'" + pattern + "' found at: " + str(pos))`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "science-lab", "biology"],
    fromLesson: "4-3",
  },

  {
    id: "proj-py-4-4-1",
    title: "⚡ Circuit Simulator · 电路模拟器",
    description: "Simulate basic electrical circuits with Ohm's law! 用欧姆定律模拟基本电路",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# ⚡ Circuit Simulator
# V = I * R (Ohm's law)

# TODO: Create Resistor class (resistance in ohms)
# TODO: Series circuit: R_total = R1 + R2 + ...
# TODO: Parallel circuit: 1/R_total = 1/R1 + 1/R2 + ...
# TODO: Calculate current and power for given voltage`,
    hint: "Series: add resistances. Parallel: 1/total = sum(1/r for r in resistors). Power = V * I.",
    solution: `class Resistor:
    def __init__(self, ohms, name="R"):
        self.ohms = ohms
        self.name = name
    def __str__(self):
        return self.name + "=" + str(self.ohms) + "Ω"

def series(*resistors):
    total = sum(r.ohms for r in resistors)
    return total

def parallel(*resistors):
    total = 1 / sum(1/r.ohms for r in resistors)
    return round(total, 2)

def analyze(voltage, resistance):
    current = voltage / resistance
    power = voltage * current
    print("  V=" + str(voltage) + "V, R=" + str(round(resistance, 2)) + "Ω")
    print("  I=" + str(round(current, 4)) + "A")
    print("  P=" + str(round(power, 2)) + "W")

r1 = Resistor(100, "R1")
r2 = Resistor(200, "R2")
r3 = Resistor(300, "R3")

print("⚡ CIRCUIT SIMULATOR\n")
print("Components: " + str(r1) + ", " + str(r2) + ", " + str(r3))

s = series(r1, r2, r3)
print("\n🔗 Series Circuit:")
analyze(12, s)

p = parallel(r1, r2, r3)
print("\n🔀 Parallel Circuit:")
analyze(12, p)

# Mixed: R1 in series with (R2 parallel R3)
mixed = r1.ohms + parallel(r2, r3)
print("\n🔄 Mixed Circuit (R1 + R2||R3):")
analyze(12, mixed)`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "science-lab", "physics"],
    fromLesson: "4-4",
  },

  {
    id: "proj-py-4-5-1",
    title: "🌍 Ecosystem Simulator · 生态系统模拟器",
    description: "Simulate predator-prey population dynamics! 模拟捕食者-猎物种群动态",
    difficulty: 2,
    gradeRange: [6, 10],
    skillLevel: "intermediate",
    starterCode: `# 🌍 Ecosystem Simulator
# Lotka-Volterra predator-prey model

# TODO: Simulate rabbit and fox populations
# Rabbits grow naturally but foxes eat them
# Foxes die without food

# Parameters:
# rabbit_growth = 0.1 (10% growth per cycle)
# predation = 0.005 (fox eating rate)
# fox_death = 0.1 (10% die per cycle)
# fox_growth = 0.001 (growth from eating)

# Run for 100 time steps
# Plot as text graph`,
    hint: "New rabbits = growth*rabbits - predation*rabbits*foxes. New foxes = fox_growth*rabbits*foxes - death*foxes.",
    solution: `rabbits = 100
foxes = 20
r_growth = 0.1
predation = 0.005
f_death = 0.1
f_growth = 0.001

print("🌍 ECOSYSTEM SIMULATOR\n")
print("Step | 🐰 Rabbits | 🦊 Foxes")
print("-" * 40)

for t in range(50):
    if t % 5 == 0:
        r_bar = "█" * int(rabbits / 10)
        f_bar = "▓" * int(foxes / 2)
        print(str(t).rjust(4) + " | " + str(int(rabbits)).rjust(6) + " " + r_bar)
        print("     | " + str(int(foxes)).rjust(6) + " " + f_bar)
    new_r = rabbits + r_growth * rabbits - predation * rabbits * foxes
    new_f = foxes + f_growth * rabbits * foxes - f_death * foxes
    rabbits = max(0, new_r)
    foxes = max(0, new_f)

print("\nFinal: 🐰 " + str(int(rabbits)) + " | 🦊 " + str(int(foxes)))`,
    language: "python",
    category: "Simulations",
    categoryZh: "模拟",
    tags: ["project", "area-4", "science-lab", "biology"],
    fromLesson: "4-5",
  },

  {
    id: "proj-py-4-6-1",
    title: "🧪 Chemistry Balancer · 化学方程式配平",
    description: "Balance simple chemical equations and calculate molar masses! 配平简单化学方程式并计算摩尔质量",
    difficulty: 3,
    gradeRange: [8, 12],
    skillLevel: "advanced",
    starterCode: `# 🧪 Chemistry Tools

# TODO: Create element database with atomic masses
# TODO: Parse chemical formula "H2O" → {"H": 2, "O": 1}
# TODO: Calculate molar mass from formula
# TODO: Convert between grams and moles`,
    hint: "Parse formulas character by character. Uppercase = new element, lowercase = continue, digit = count.",
    solution: `elements = {"H": 1.008, "He": 4.003, "C": 12.011, "N": 14.007, "O": 15.999, "Na": 22.990, "Cl": 35.453, "Fe": 55.845, "S": 32.065}

def parse_formula(formula):
    result = {}
    i = 0
    while i < len(formula):
        if formula[i].isupper():
            elem = formula[i]
            i += 1
            if i < len(formula) and formula[i].islower():
                elem += formula[i]
                i += 1
            count = ""
            while i < len(formula) and formula[i].isdigit():
                count += formula[i]
                i += 1
            result[elem] = result.get(elem, 0) + (int(count) if count else 1)
        else:
            i += 1
    return result

def molar_mass(formula):
    parsed = parse_formula(formula)
    mass = sum(elements.get(e, 0) * n for e, n in parsed.items())
    return round(mass, 3)

def grams_to_moles(grams, formula):
    return round(grams / molar_mass(formula), 4)

formulas = ["H2O", "NaCl", "CO2", "C6H12O6", "Fe2O3"]
print("🧪 CHEMISTRY TOOLS\n")
for f in formulas:
    parsed = parse_formula(f)
    mm = molar_mass(f)
    print(f + ": " + str(parsed) + " → " + str(mm) + " g/mol")

print("\n⚖️ Conversions:")
print("18g H2O = " + str(grams_to_moles(18, "H2O")) + " mol")
print("100g C6H12O6 = " + str(grams_to_moles(100, "C6H12O6")) + " mol")`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-4", "science-lab", "chemistry"],
    fromLesson: "4-6",
  },

  {
    id: "proj-py-5-1-1",
    title: "🧠 Neural Network Visualizer · 神经网络可视化",
    description: "Visualize a simple neural network as ASCII art! 用 ASCII 艺术可视化简单神经网络",
    difficulty: 3,
    gradeRange: [8, 12],
    skillLevel: "advanced",
    starterCode: `# 🧠 Neural Network Visualizer
# Draw a network and show forward pass

# TODO: Create layers [3, 4, 2] (input, hidden, output)
# TODO: Draw network as ASCII art
# TODO: Simulate forward pass with random weights
# TODO: Show activation values at each node`,
    hint: "Use nested loops for layers. Draw connections with / and \\. Random weights between -1 and 1.",
    solution: `import random

def draw_network(layers):
    max_nodes = max(layers)
    print("🧠 NEURAL NETWORK [" + "→".join(str(l) for l in layers) + "]\n")
    for layer_idx, size in enumerate(layers):
        padding = " " * ((max_nodes - size) * 3)
        nodes = ""
        for n in range(size):
            val = round(random.random(), 1)
            nodes += "(" + str(val) + ") "
        label = ["Input", "Hidden", "Output"][min(layer_idx, 2)]
        if layer_idx > 0 and layer_idx < len(layers) - 1:
            label = "Hidden" + str(layer_idx)
        print(padding + label + ": " + nodes)
        if layer_idx < len(layers) - 1:
            print(padding + "  " + " ↘↓↙ " * min(size, 3))

def forward_pass(inputs, weights):
    output = []
    for w_row in weights:
        total = sum(i * w for i, w in zip(inputs, w_row))
        output.append(round(max(0, total), 3))  # ReLU
    return output

layers = [3, 4, 2]
draw_network(layers)

inputs = [0.5, 0.8, 0.3]
w1 = [[random.uniform(-1,1) for _ in range(3)] for _ in range(4)]
w2 = [[random.uniform(-1,1) for _ in range(4)] for _ in range(2)]

print("\n⚡ Forward Pass:")
print("Input: " + str(inputs))
hidden = forward_pass(inputs, w1)
print("Hidden: " + str(hidden))
output = forward_pass(hidden, w2)
print("Output: " + str(output))
print("Prediction: Class " + str(output.index(max(output))))`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-5", "ai", "neural-network"],
    fromLesson: "5-1",
  },

  {
    id: "proj-py-5-2-1",
    title: "🔐 Caesar Cipher Breaker · 凯撒密码破解器",
    description: "Implement and break Caesar cipher using frequency analysis! 使用频率分析实现和破解凯撒密码",
    difficulty: 3,
    gradeRange: [8, 12],
    skillLevel: "advanced",
    starterCode: `# 🔐 Caesar Cipher Breaker

# TODO: Implement encrypt(text, shift) and decrypt(text, shift)
# TODO: Brute force: try all 26 shifts
# TODO: Frequency analysis: compare letter frequency to English
# English freq: E=12.7%, T=9.1%, A=8.2%, O=7.5%, I=7.0%

# Break this message:
encrypted = "WKLV LV D VHFUHW PHVVDJH IURP WKH VSDB"`,
    hint: "Shift each letter by (26-shift) to decrypt. Score each shift by how close E frequency matches.",
    solution: `def encrypt(text, shift):
    result = ""
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

def decrypt(text, shift):
    return encrypt(text, 26 - shift)

def frequency_score(text):
    english_freq = {"E": 12.7, "T": 9.1, "A": 8.2, "O": 7.5, "I": 7.0, "N": 6.7, "S": 6.3}
    text = text.upper()
    letters = [c for c in text if c.isalpha()]
    if not letters:
        return 0
    score = 0
    for letter, expected in english_freq.items():
        actual = letters.count(letter) / len(letters) * 100
        score -= abs(actual - expected)
    return score

encrypted = "WKLV LV D VHFUHW PHVVDJH IURP WKH VSDB"
print("🔐 CAESAR CIPHER BREAKER\n")
print("Encrypted: " + encrypted)

print("\n🔨 Brute Force:")
best_score = -999
best_shift = 0
for shift in range(26):
    decrypted = decrypt(encrypted, shift)
    score = frequency_score(decrypted)
    if score > best_score:
        best_score = score
        best_shift = shift
    if shift < 5 or shift == best_shift:
        print("  Shift " + str(shift).rjust(2) + ": " + decrypted)

print("\n🏆 Best guess (shift=" + str(best_shift) + "):")
print("  " + decrypt(encrypted, best_shift))`,
    language: "python",
    category: "Crypto",
    categoryZh: "加密",
    tags: ["project", "area-5", "crypto", "cipher"],
    fromLesson: "5-2",
  },

  {
    id: "proj-py-5-3-1",
    title: "🎲 Game of Life · 生命游戏",
    description: "Implement Conway's Game of Life cellular automaton! 实现康威生命游戏细胞自动机",
    difficulty: 3,
    gradeRange: [8, 12],
    skillLevel: "advanced",
    starterCode: `# 🎲 Conway's Game of Life

# Rules:
# 1. Live cell with 2-3 neighbors survives
# 2. Dead cell with exactly 3 neighbors becomes alive
# 3. All other cells die or stay dead

# TODO: Create grid, seed initial pattern
# TODO: Count neighbors for each cell
# TODO: Apply rules to generate next generation
# TODO: Display and run for N generations`,
    hint: "Count 8 neighbors around each cell. Apply rules simultaneously (compute new grid from old).",
    solution: `import random

SIZE = 15

def create_grid(size):
    return [[random.choice([0, 0, 0, 1]) for _ in range(size)] for _ in range(size)]

def count_neighbors(grid, r, c):
    count = 0
    for dr in [-1, 0, 1]:
        for dc in [-1, 0, 1]:
            if dr == 0 and dc == 0:
                continue
            nr, nc = r + dr, c + dc
            if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]):
                count += grid[nr][nc]
    return count

def next_gen(grid):
    rows, cols = len(grid), len(grid[0])
    new = [[0]*cols for _ in range(rows)]
    for r in range(rows):
        for c in range(cols):
            n = count_neighbors(grid, r, c)
            if grid[r][c] == 1:
                new[r][c] = 1 if n in [2, 3] else 0
            else:
                new[r][c] = 1 if n == 3 else 0
    return new

def display(grid, gen):
    alive = sum(sum(row) for row in grid)
    print("Gen " + str(gen) + " (alive: " + str(alive) + ")")
    for row in grid:
        print("".join("██" if c else "  " for c in row))
    print()

grid = create_grid(SIZE)
for gen in range(6):
    display(grid, gen)
    grid = next_gen(grid)`,
    language: "python",
    category: "Simulations",
    categoryZh: "模拟",
    tags: ["project", "area-5", "simulation", "cellular-automata"],
    fromLesson: "5-3",
  },

  {
    id: "proj-py-5-4-1",
    title: "📈 Stock Market Sim · 股票市场模拟",
    description: "Simulate stock price movements with random walks and analysis! 用随机游走模拟股票价格并分析",
    difficulty: 3,
    gradeRange: [8, 12],
    skillLevel: "advanced",
    starterCode: `# 📈 Stock Market Simulator
import random
import math

# TODO: Simulate stock prices using random walk
# TODO: Calculate moving average
# TODO: Detect buy/sell signals
# TODO: Simulate a trading strategy`,
    hint: "Random walk: price *= (1 + random.gauss(0, 0.02)). Moving average: avg of last N prices.",
    solution: `import random
import math

def simulate_stock(days, start=100):
    prices = [start]
    for _ in range(days - 1):
        change = random.gauss(0.001, 0.02)
        prices.append(round(prices[-1] * (1 + change), 2))
    return prices

def moving_avg(prices, window):
    return [round(sum(prices[max(0,i-window+1):i+1]) / min(i+1, window), 2) for i in range(len(prices))]

def trade_strategy(prices, short=5, long_w=20):
    cash = 10000
    shares = 0
    short_ma = moving_avg(prices, short)
    long_ma = moving_avg(prices, long_w)
    trades = 0
    for i in range(long_w, len(prices)):
        if short_ma[i] > long_ma[i] and shares == 0:
            shares = int(cash / prices[i])
            cash -= shares * prices[i]
            trades += 1
        elif short_ma[i] < long_ma[i] and shares > 0:
            cash += shares * prices[i]
            shares = 0
            trades += 1
    final = cash + shares * prices[-1]
    return round(final, 2), trades

prices = simulate_stock(100)
print("📈 STOCK SIMULATOR\n")
print("Day 1: $" + str(prices[0]) + " → Day 100: $" + str(prices[-1]))
change = round((prices[-1] - prices[0]) / prices[0] * 100, 1)
print("Change: " + str(change) + "%")

ma5 = moving_avg(prices, 5)
print("\nMA5 (last 5): " + str(ma5[-5:]))

final, trades = trade_strategy(prices)
profit = round(final - 10000, 2)
print("\n💰 Trading Strategy:")
print("Start: $10000 → End: $" + str(final))
print("Profit: $" + str(profit) + " (" + str(trades) + " trades)")`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-5", "data", "simulation"],
    fromLesson: "5-4",
  },

  {
    id: "proj-py-5-5-1",
    title: "🔬 Particle Physics Sim · 粒子物理模拟",
    description: "Simulate particle collisions and decay! 模拟粒子碰撞和衰变",
    difficulty: 3,
    gradeRange: [8, 12],
    skillLevel: "advanced",
    starterCode: `# 🔬 Particle Physics Simulator
import random
import math

# TODO: Create Particle class with mass, charge, velocity
# TODO: Simulate particle decay (random half-life)
# TODO: Simulate elastic collisions
# TODO: Track energy conservation`,
    hint: "Elastic collision: conserve momentum (m1*v1 + m2*v2 = const) and energy. Decay: random < decay_prob.",
    solution: `import random
import math

class Particle:
    def __init__(self, name, mass, charge, vx=0, vy=0):
        self.name = name
        self.mass = mass
        self.charge = charge
        self.vx = vx
        self.vy = vy
        self.alive = True

    def energy(self):
        return 0.5 * self.mass * (self.vx**2 + self.vy**2)

    def momentum(self):
        return (self.mass * self.vx, self.mass * self.vy)

    def __str__(self):
        return self.name + " m=" + str(self.mass) + " v=(" + str(round(self.vx,2)) + "," + str(round(self.vy,2)) + ")"

def collide(p1, p2):
    # 1D elastic collision
    v1 = (p1.vx*(p1.mass-p2.mass) + 2*p2.mass*p2.vx) / (p1.mass+p2.mass)
    v2 = (p2.vx*(p2.mass-p1.mass) + 2*p1.mass*p1.vx) / (p1.mass+p2.mass)
    p1.vx = round(v1, 3)
    p2.vx = round(v2, 3)

proton = Particle("Proton", 1.0, 1, 5, 0)
neutron = Particle("Neutron", 1.0, 0, -3, 0)
electron = Particle("Electron", 0.0005, -1, 10, 0)

particles = [proton, neutron, electron]

print("🔬 PARTICLE PHYSICS SIM\n")
print("Before collision:")
e_before = sum(p.energy() for p in particles)
for p in particles:
    print("  " + str(p) + " E=" + str(round(p.energy(), 3)))
print("Total Energy: " + str(round(e_before, 3)))

collide(proton, neutron)
print("\nAfter proton-neutron collision:")
e_after = sum(p.energy() for p in particles)
for p in particles:
    print("  " + str(p) + " E=" + str(round(p.energy(), 3)))
print("Total Energy: " + str(round(e_after, 3)))
print("Energy conserved: " + str(round(abs(e_before - e_after), 6) < 0.001))`,
    language: "python",
    category: "Science",
    categoryZh: "科学",
    tags: ["project", "area-5", "physics", "simulation"],
    fromLesson: "5-5",
  },

  {
    id: "proj-py-5-6-1",
    title: "🤖 Markov Chain Text Generator · 马尔可夫链文本生成器",
    description: "Generate text using Markov chains - a precursor to modern AI! 用马尔可夫链生成文本",
    difficulty: 3,
    gradeRange: [8, 12],
    skillLevel: "advanced",
    starterCode: `# 🤖 Markov Chain Text Generator

# TODO: Build a Markov chain from sample text
# - Split text into words
# - For each word, record what words follow it
# - Generate new text by following the chain

sample = "the cat sat on the mat the cat ate the fish the dog sat on the log the dog ate the bone"

# TODO: Build chain: {"the": ["cat", "mat", "cat", ...], ...}
# TODO: Generate 20 words starting from "the"`,
    hint: "Use a dict where each key maps to a list of possible next words. Use random.choice to pick next word.",
    solution: `import random

def build_chain(text):
    words = text.split()
    chain = {}
    for i in range(len(words) - 1):
        word = words[i]
        next_word = words[i + 1]
        if word not in chain:
            chain[word] = []
        chain[word].append(next_word)
    return chain

def generate(chain, start, length):
    current = start
    result = [current]
    for _ in range(length - 1):
        if current not in chain:
            current = random.choice(list(chain.keys()))
        current = random.choice(chain[current])
        result.append(current)
    return " ".join(result)

sample = "the cat sat on the mat the cat ate the fish the dog sat on the log the dog ate the bone the cat and the dog played in the park the cat chased the dog around the tree"

chain = build_chain(sample)
print("🤖 MARKOV CHAIN TEXT GENERATOR\n")
print("Training text: " + sample[:60] + "...")
print("\nChain entries:")
for word in sorted(chain.keys())[:5]:
    print("  '" + word + "' → " + str(chain[word]))

print("\n📝 Generated texts:")
for i in range(3):
    text = generate(chain, "the", 15)
    print(str(i+1) + ". " + text)`,
    language: "python",
    category: "Data",
    categoryZh: "数据",
    tags: ["project", "area-5", "ai", "markov"],
    fromLesson: "5-6",
  },

  // ═══════════════════════════════════════════════════════════════
  // ═══ 🚀 C++ COURSE PROJECTS ═══
  // These are capstone projects linked to specific C++ lessons
  // ═══════════════════════════════════════════════════════════════

  // ─── Area 1: C++ Foundations ────────────────────────────────

  // cpp-1-1: Hello Compiler (print, basics)
  {
    id: "proj-cpp-1-1-1",
    title: "🎨 ASCII Art Studio",
    description: "Create stunning ASCII art using cout! Design a spaceship, robot, or dragon using creative character combinations.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print an ASCII art rocket ship!
    // Use cout << "..." << endl; for each line
    // Here's the top - finish the rest!
    cout << "     /\\\\" << endl;
    cout << "    /  \\\\" << endl;
    // TODO: Add the body of the rocket (use | and = characters)
    // Hint: make it at least 4 lines tall

    // TODO: Add the flames at the bottom (use ^ and * characters)

    // TODO: Add a launch message
    // cout << "3... 2... 1... LIFTOFF!" << endl;

    return 0;
}`,
    hint: "Use cout with endl for each line. Escape backslashes with \\\\. Try characters like |, =, *, ^, / for different parts of your rocket.",
    solution: `#include <iostream>
using namespace std;

int main() {
    cout << "     /\\\\" << endl;
    cout << "    /  \\\\" << endl;
    cout << "   /    \\\\" << endl;
    cout << "  |      |" << endl;
    cout << "  |      |" << endl;
    cout << "  | C++  |" << endl;
    cout << "  |      |" << endl;
    cout << "  |______|" << endl;
    cout << "  |=    =|" << endl;
    cout << "  |=    =|" << endl;
    cout << "   \\\\^^^^/" << endl;
    cout << "    \\\\^^/" << endl;
    cout << "     **" << endl;
    cout << "    ****" << endl;
    cout << "3... 2... 1... LIFTOFF!" << endl;
    return 0;
}`,
    expectedOutput: `     /\\
    /  \\
   /    \\
  |      |
  |      |
  | C++  |
  |      |
  |______|
  |=    =|
  |=    =|
   \\^^^^/
    \\^^/
     **
    ****
3... 2... 1... LIFTOFF!`,
    tags: ["project", "cpp-area-1", "ascii-art"],
    fromLesson: "cpp-1-1",
    language: "cpp",
    category: "Creative",
    categoryZh: "创意",
  },
  {
    id: "proj-cpp-1-1-2",
    title: "🎤 Rap Lyrics Generator",
    description: "Print out epic rap lyrics with creative formatting! Use cout to display your bars with style.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Print a title banner
    // Example: ===== MY RAP =====
    cout << "===== MY RAP =====" << endl;

    // TODO: Print verse 1 (at least 4 lines)
    // Use cout for each line of your rap
    cout << "[Verse 1]" << endl;
    // TODO: Add your bars here!

    // TODO: Print a chorus
    cout << "[Chorus]" << endl;
    // TODO: Add chorus lines

    // TODO: Print the outro
    cout << "==================" << endl;
    cout << "   * MIC DROP *" << endl;

    return 0;
}`,
    hint: "Each cout << \"...\" << endl; prints one line. Be creative with your lyrics! Use special characters for emphasis.",
    solution: `#include <iostream>
using namespace std;

int main() {
    cout << "===== MY RAP =====" << endl;
    cout << "[Verse 1]" << endl;
    cout << "I code in C++ every day," << endl;
    cout << "Compiling bugs right away," << endl;
    cout << "My programs never crash or stall," << endl;
    cout << "I'm the greatest coder of them all!" << endl;
    cout << "[Chorus]" << endl;
    cout << "Code! Code! Code all night!" << endl;
    cout << "Semicolons make it right!" << endl;
    cout << "==================" << endl;
    cout << "   * MIC DROP *" << endl;
    return 0;
}`,
    expectedOutput: `===== MY RAP =====
[Verse 1]
I code in C++ every day,
Compiling bugs right away,
My programs never crash or stall,
I'm the greatest coder of them all!
[Chorus]
Code! Code! Code all night!
Semicolons make it right!
==================
   * MIC DROP *`,
    tags: ["project", "cpp-area-1", "creative"],
    fromLesson: "cpp-1-1",
    language: "cpp",
    category: "Creative",
    categoryZh: "创意",
  },

  // cpp-1-2: Types are Serious Business
  {
    id: "proj-cpp-1-2-1",
    title: "🧬 DNA Base Decoder",
    description: "Use char types to decode DNA base pairs! Map A→T, T→A, C→G, G→C and display nucleotide info using different data types.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // DNA bases are characters!
    char base1 = 'A';
    char base2 = 'T';
    char base3 = 'G';
    char base4 = 'C';

    // TODO: Create complement variables for each base
    // A pairs with T, T pairs with A, C pairs with G, G pairs with C
    char comp1 = 'T'; // complement of A
    // TODO: Add comp2, comp3, comp4

    // TODO: Store the number of bases as an int
    int numBases = 4;

    // TODO: Calculate GC content as a double (percentage of G and C bases)
    // GC content = (number of G or C bases) / total bases * 100
    double gcContent = 0.0; // TODO: fix this!

    // TODO: Store whether GC content is high (> 50%) as a bool
    bool highGC = false; // TODO: fix this!

    cout << "DNA Strand: " << base1 << base2 << base3 << base4 << endl;
    cout << "Complement: " << comp1 << endl; // TODO: print all complements
    cout << "Total bases: " << numBases << endl;
    cout << "GC Content: " << gcContent << "%" << endl;
    cout << "High GC: " << highGC << endl;

    return 0;
}`,
    hint: "A pairs with T (and vice versa), C pairs with G (and vice versa). For GC content, count how many bases are G or C, divide by total, multiply by 100. Use 2.0/4.0 for double division!",
    solution: `#include <iostream>
using namespace std;

int main() {
    char base1 = 'A';
    char base2 = 'T';
    char base3 = 'G';
    char base4 = 'C';

    char comp1 = 'T';
    char comp2 = 'A';
    char comp3 = 'C';
    char comp4 = 'G';

    int numBases = 4;
    double gcContent = 2.0 / 4.0 * 100.0;
    bool highGC = gcContent > 50.0;

    cout << "DNA Strand: " << base1 << base2 << base3 << base4 << endl;
    cout << "Complement: " << comp1 << comp2 << comp3 << comp4 << endl;
    cout << "Total bases: " << numBases << endl;
    cout << "GC Content: " << gcContent << "%" << endl;
    cout << "High GC: " << highGC << endl;

    return 0;
}`,
    expectedOutput: `DNA Strand: ATGC
Complement: TACG
Total bases: 4
GC Content: 50%
High GC: 0`,
    tags: ["project", "cpp-area-1", "science"],
    fromLesson: "cpp-1-2",
    language: "cpp",
    category: "Science",
    categoryZh: "科学",
  },
  {
    id: "proj-cpp-1-2-2",
    title: "🎮 RPG Character Card",
    description: "Create an RPG character using every C++ type! int for HP, double for speed, char for class initial, bool for alive status.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: Create your RPG character using different types!
    int health = 100;
    int attack = 25;
    // TODO: Add mana (int), defense (int)

    double speed = 7.5;
    // TODO: Add critChance (double, e.g. 0.15 for 15%)

    char classInitial = 'W'; // W=Warrior, M=Mage, R=Rogue
    // TODO: Add rankLetter (char)

    bool isAlive = true;
    // TODO: Add hasShield (bool)

    // TODO: Print the character card
    cout << "╔══════════════════╗" << endl;
    cout << "║  CHARACTER CARD  ║" << endl;
    cout << "╠══════════════════╣" << endl;
    cout << "║ Class: " << classInitial << endl;
    // TODO: Print all stats in a nice format
    cout << "╚══════════════════╝" << endl;

    return 0;
}`,
    hint: "Use int for whole numbers (HP, attack), double for decimals (speed, crit chance), char for single letters, bool for true/false states.",
    solution: `#include <iostream>
using namespace std;

int main() {
    int health = 100;
    int attack = 25;
    int mana = 50;
    int defense = 15;

    double speed = 7.5;
    double critChance = 0.15;

    char classInitial = 'W';
    char rankLetter = 'A';

    bool isAlive = true;
    bool hasShield = true;

    cout << "╔══════════════════╗" << endl;
    cout << "║  CHARACTER CARD  ║" << endl;
    cout << "╠══════════════════╣" << endl;
    cout << "║ Class: " << classInitial << endl;
    cout << "║ Rank: " << rankLetter << endl;
    cout << "║ HP: " << health << endl;
    cout << "║ ATK: " << attack << endl;
    cout << "║ DEF: " << defense << endl;
    cout << "║ Mana: " << mana << endl;
    cout << "║ Speed: " << speed << endl;
    cout << "║ Crit: " << critChance << endl;
    cout << "║ Alive: " << isAlive << endl;
    cout << "║ Shield: " << hasShield << endl;
    cout << "╚══════════════════╝" << endl;

    return 0;
}`,
    expectedOutput: `╔══════════════════╗
║  CHARACTER CARD  ║
╠══════════════════╣
║ Class: W
║ Rank: A
║ HP: 100
║ ATK: 25
║ DEF: 15
║ Mana: 50
║ Speed: 7.5
║ Crit: 0.15
║ Alive: 1
║ Shield: 1
╚══════════════════╝`,
    tags: ["project", "cpp-area-1", "rpg"],
    fromLesson: "cpp-1-2",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },

  // cpp-1-3: Input & Output Mastery
  {
    id: "proj-cpp-1-3-1",
    title: "🔮 Fortune Teller Machine",
    description: "Build an interactive fortune teller! Ask the user questions with cin and give them a personalized fortune with formatted output.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int luckyNumber;
    int birthMonth;

    cout << "🔮 FORTUNE TELLER 3000 🔮" << endl;
    cout << "=========================" << endl;

    // TODO: Ask for the user's name
    cout << "What is your name? ";
    // TODO: Use cin >> name; to read input

    // TODO: Ask for lucky number (1-9)
    cout << "Pick a lucky number (1-9): ";
    // TODO: read luckyNumber

    // TODO: Ask for birth month (1-12)
    cout << "Birth month (1-12): ";
    // TODO: read birthMonth

    // TODO: Generate a fortune based on their inputs
    // Example: combine luckyNumber + birthMonth to pick a fortune
    cout << endl;
    cout << "🌟 " << name << "'s Fortune 🌟" << endl;
    // TODO: Print a fortune message
    // TODO: Print lucky color based on number
    // TODO: Print compatibility based on birth month

    return 0;
}`,
    hint: "Use cin >> variable to read input. You can combine the lucky number and birth month to create different fortunes. Use cout with << to chain multiple outputs.",
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int luckyNumber;
    int birthMonth;

    cout << "🔮 FORTUNE TELLER 3000 🔮" << endl;
    cout << "=========================" << endl;

    cout << "What is your name? ";
    name = "Alex";

    cout << "Pick a lucky number (1-9): ";
    luckyNumber = 7;

    cout << "Birth month (1-12): ";
    birthMonth = 3;

    int fate = luckyNumber + birthMonth;

    cout << endl;
    cout << "🌟 " << name << "'s Fortune 🌟" << endl;
    cout << "Fate score: " << fate << endl;
    cout << "Fortune: Great success awaits you!" << endl;
    cout << "Lucky color: Blue" << endl;
    cout << "Compatibility: Pisces" << endl;

    return 0;
}`,
    expectedOutput: `🔮 FORTUNE TELLER 3000 🔮
=========================
What is your name? Pick a lucky number (1-9): Birth month (1-12): 
🌟 Alex's Fortune 🌟
Fate score: 10
Fortune: Great success awaits you!
Lucky color: Blue
Compatibility: Pisces`,
    tags: ["project", "cpp-area-1", "interactive"],
    fromLesson: "cpp-1-3",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },
  {
    id: "proj-cpp-1-3-2",
    title: "📝 Student ID Card Printer",
    description: "Create a formatted student ID card! Practice cin/cout with alignment and formatting to make a professional-looking card.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    string firstName, lastName;
    int grade, studentId;
    double gpa;

    // TODO: Collect student info
    cout << "=== ID CARD GENERATOR ===" << endl;
    firstName = "John";
    lastName = "Doe";
    grade = 10;
    studentId = 12345;
    gpa = 3.85;

    // TODO: Print a nicely formatted ID card
    cout << "+------------------------+" << endl;
    cout << "|    STUDENT ID CARD     |" << endl;
    cout << "+------------------------+" << endl;
    // TODO: Print name with proper formatting
    // TODO: Print grade
    // TODO: Print student ID with leading zeros (use setw/setfill)
    // TODO: Print GPA with 2 decimal places (use fixed/setprecision)
    cout << "+------------------------+" << endl;

    return 0;
}`,
    hint: "Use setw() for width, setfill('0') for leading zeros, fixed and setprecision(2) for decimal places. Include <iomanip>.",
    solution: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    string firstName, lastName;
    int grade, studentId;
    double gpa;

    cout << "=== ID CARD GENERATOR ===" << endl;
    firstName = "John";
    lastName = "Doe";
    grade = 10;
    studentId = 12345;
    gpa = 3.85;

    cout << "+------------------------+" << endl;
    cout << "|    STUDENT ID CARD     |" << endl;
    cout << "+------------------------+" << endl;
    cout << "| Name: " << firstName << " " << lastName << endl;
    cout << "| Grade: " << grade << endl;
    cout << "| ID: " << setw(8) << setfill('0') << studentId << endl;
    cout << "| GPA: " << fixed << setprecision(2) << gpa << endl;
    cout << "+------------------------+" << endl;

    return 0;
}`,
    expectedOutput: `=== ID CARD GENERATOR ===
+------------------------+
|    STUDENT ID CARD     |
+------------------------+
| Name: John Doe
| Grade: 10
| ID: 00012345
| GPA: 3.85
+------------------------+`,
    tags: ["project", "cpp-area-1", "formatting"],
    fromLesson: "cpp-1-3",
    language: "cpp",
    category: "Tools",
    categoryZh: "工具",
  },

  // cpp-1-4: Math & Operators
  {
    id: "proj-cpp-1-4-1",
    title: "🚀 Space Travel Calculator",
    description: "Calculate travel times to planets! Use math operators and type casting to figure out how long it takes to reach Mars, Jupiter, and beyond.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    // Distances in millions of km
    double distMars = 225.0;
    double distJupiter = 778.0;
    double distSaturn = 1275.0;

    // Speed of spacecraft in km/h
    double speedKmH = 58000.0; // New Horizons speed

    // TODO: Convert distances to km (multiply by 1,000,000)
    double marsKm = distMars * 1000000;
    // TODO: Do the same for Jupiter and Saturn

    // TODO: Calculate travel time in hours
    double marsHours = marsKm / speedKmH;
    // TODO: Calculate for Jupiter and Saturn

    // TODO: Convert hours to days (divide by 24)
    double marsDays = marsHours / 24.0;
    // TODO: Convert for Jupiter and Saturn

    // TODO: Convert days to years (divide by 365)

    cout << "🚀 SPACE TRAVEL CALCULATOR 🚀" << endl;
    cout << "Speed: " << (int)speedKmH << " km/h" << endl;
    cout << fixed << setprecision(1);
    cout << "Mars: " << marsDays << " days" << endl;
    // TODO: Print Jupiter and Saturn travel times
    // TODO: Also print in years for the far planets

    return 0;
}`,
    hint: "Multiply millions by 1000000.0, then divide by speed for hours. Divide hours by 24 for days, by 365 for years. Use (int) to cast to integer for clean display.",
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double distMars = 225.0;
    double distJupiter = 778.0;
    double distSaturn = 1275.0;

    double speedKmH = 58000.0;

    double marsKm = distMars * 1000000;
    double jupiterKm = distJupiter * 1000000;
    double saturnKm = distSaturn * 1000000;

    double marsHours = marsKm / speedKmH;
    double jupiterHours = jupiterKm / speedKmH;
    double saturnHours = saturnKm / speedKmH;

    double marsDays = marsHours / 24.0;
    double jupiterDays = jupiterHours / 24.0;
    double saturnDays = saturnHours / 24.0;

    double marsYears = marsDays / 365.0;
    double jupiterYears = jupiterDays / 365.0;
    double saturnYears = saturnDays / 365.0;

    cout << "🚀 SPACE TRAVEL CALCULATOR 🚀" << endl;
    cout << "Speed: " << (int)speedKmH << " km/h" << endl;
    cout << fixed << setprecision(1);
    cout << "Mars: " << marsDays << " days (" << marsYears << " years)" << endl;
    cout << "Jupiter: " << jupiterDays << " days (" << jupiterYears << " years)" << endl;
    cout << "Saturn: " << saturnDays << " days (" << saturnYears << " years)" << endl;

    return 0;
}`,
    expectedOutput: `🚀 SPACE TRAVEL CALCULATOR 🚀
Speed: 58000 km/h
Mars: 161.6 days (0.4 years)
Jupiter: 558.6 days (1.5 years)
Saturn: 915.9 days (2.5 years)`,
    tags: ["project", "cpp-area-1", "math", "science"],
    fromLesson: "cpp-1-4",
    language: "cpp",
    category: "Tools",
    categoryZh: "工具",
  },
  {
    id: "proj-cpp-1-4-2",
    title: "💰 Tip Calculator Deluxe",
    description: "Build a restaurant tip calculator with tax, split, and per-person costs! Practice arithmetic and casting.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double billAmount = 84.50;
    double taxRate = 0.08;    // 8% tax
    double tipPercent = 18.0; // 18% tip
    int numPeople = 3;

    // TODO: Calculate tax amount
    double taxAmount = 0.0; // fix this

    // TODO: Calculate subtotal (bill + tax)
    double subtotal = 0.0; // fix this

    // TODO: Calculate tip (based on subtotal)
    double tipAmount = 0.0; // fix this

    // TODO: Calculate total (subtotal + tip)
    double total = 0.0; // fix this

    // TODO: Calculate per-person amount (total / people)
    double perPerson = 0.0; // fix this

    cout << "🧾 BILL BREAKDOWN" << endl;
    cout << "==================" << endl;
    cout << fixed << setprecision(2);
    cout << "Bill:      $" << billAmount << endl;
    cout << "Tax (8%):  $" << taxAmount << endl;
    cout << "Subtotal:  $" << subtotal << endl;
    cout << "Tip (18%): $" << tipAmount << endl;
    cout << "Total:     $" << total << endl;
    cout << "Per person (" << numPeople << "): $" << perPerson << endl;

    return 0;
}`,
    hint: "Tax = bill * taxRate. Subtotal = bill + tax. Tip = subtotal * (tipPercent / 100). Total = subtotal + tip. Per person = total / numPeople.",
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double billAmount = 84.50;
    double taxRate = 0.08;
    double tipPercent = 18.0;
    int numPeople = 3;

    double taxAmount = billAmount * taxRate;
    double subtotal = billAmount + taxAmount;
    double tipAmount = subtotal * (tipPercent / 100.0);
    double total = subtotal + tipAmount;
    double perPerson = total / numPeople;

    cout << "🧾 BILL BREAKDOWN" << endl;
    cout << "==================" << endl;
    cout << fixed << setprecision(2);
    cout << "Bill:      $" << billAmount << endl;
    cout << "Tax (8%):  $" << taxAmount << endl;
    cout << "Subtotal:  $" << subtotal << endl;
    cout << "Tip (18%): $" << tipAmount << endl;
    cout << "Total:     $" << total << endl;
    cout << "Per person (" << numPeople << "): $" << perPerson << endl;

    return 0;
}`,
    expectedOutput: `🧾 BILL BREAKDOWN
==================
Bill:      $84.50
Tax (8%):  $6.76
Subtotal:  $91.26
Tip (18%): $16.43
Total:     $107.69
Per person (3): $35.90`,
    tags: ["project", "cpp-area-1", "math"],
    fromLesson: "cpp-1-4",
    language: "cpp",
    category: "Tools",
    categoryZh: "工具",
  },

  // cpp-1-5: Strings
  {
    id: "proj-cpp-1-5-1",
    title: "🔐 Secret Cipher Encoder",
    description: "Build a Caesar cipher! Shift each letter in a message by a secret number to encode and decode messages.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string message = "HELLO WORLD";
    int shift = 3;

    cout << "🔐 CAESAR CIPHER 🔐" << endl;
    cout << "Original: " << message << endl;
    cout << "Shift: " << shift << endl;

    // TODO: Encode the message
    // For each character, if it's a letter (A-Z), shift it
    // 'A' + shift = 'D' when shift=3
    // Handle wrap-around: 'Z' + 1 = 'A'
    string encoded = "";
    for (int i = 0; i < (int)message.length(); i++) {
        char c = message[i];
        if (c >= 'A' && c <= 'Z') {
            // TODO: shift the character
            // Hint: char newChar = 'A' + (c - 'A' + shift) % 26;
            encoded += c; // fix this!
        } else {
            encoded += c; // keep spaces and other chars
        }
    }

    cout << "Encoded: " << encoded << endl;

    // TODO: Decode by shifting backwards
    string decoded = "";
    // TODO: similar loop but shift in reverse

    cout << "Decoded: " << decoded << endl;

    return 0;
}`,
    hint: "To shift: newChar = 'A' + (c - 'A' + shift) % 26. To decode: use (c - 'A' - shift + 26) % 26 to handle negative wrap.",
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string message = "HELLO WORLD";
    int shift = 3;

    cout << "🔐 CAESAR CIPHER 🔐" << endl;
    cout << "Original: " << message << endl;
    cout << "Shift: " << shift << endl;

    string encoded = "";
    for (int i = 0; i < (int)message.length(); i++) {
        char c = message[i];
        if (c >= 'A' && c <= 'Z') {
            char newChar = 'A' + (c - 'A' + shift) % 26;
            encoded += newChar;
        } else {
            encoded += c;
        }
    }
    cout << "Encoded: " << encoded << endl;

    string decoded = "";
    for (int i = 0; i < (int)encoded.length(); i++) {
        char c = encoded[i];
        if (c >= 'A' && c <= 'Z') {
            char newChar = 'A' + (c - 'A' - shift + 26) % 26;
            decoded += newChar;
        } else {
            decoded += c;
        }
    }
    cout << "Decoded: " << decoded << endl;

    return 0;
}`,
    expectedOutput: `🔐 CAESAR CIPHER 🔐
Original: HELLO WORLD
Shift: 3
Encoded: KHOOR ZRUOG
Decoded: HELLO WORLD`,
    tags: ["project", "cpp-area-1", "cipher", "strings"],
    fromLesson: "cpp-1-5",
    language: "cpp",
    category: "Science",
    categoryZh: "科学",
  },
  {
    id: "proj-cpp-1-5-2",
    title: "📱 Username Generator",
    description: "Create cool usernames by combining and transforming strings! Practice string methods like substr, length, and concatenation.",
    difficulty: 1,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "Alex";
    string lastName = "Thunder";
    int favoriteNum = 42;

    cout << "📱 USERNAME GENERATOR" << endl;
    cout << "=====================" << endl;

    // Style 1: First 3 + Last 3 + Number
    // TODO: Use substr(start, length) to get first 3 chars of each
    string user1 = ""; // e.g. "AleThu42"

    // Style 2: Reverse first name + number
    // TODO: Loop through firstName backwards to reverse it
    string reversed = "";
    // TODO: build reversed string

    string user2 = reversed + to_string(favoriteNum);

    // Style 3: ALL CAPS version
    // TODO: Convert firstName to uppercase
    string upper = firstName;
    // Hint: for each char, if lowercase, subtract 32

    string user3 = upper + "_" + to_string(favoriteNum);

    cout << "Style 1: " << user1 << endl;
    cout << "Style 2: " << user2 << endl;
    cout << "Style 3: " << user3 << endl;
    cout << "Name length: " << firstName.length() + lastName.length() << endl;

    return 0;
}`,
    hint: "Use substr(0, 3) to get first 3 characters. Loop backwards with i = length-1 down to 0 for reverse. Uppercase: if char >= 'a' && char <= 'z', subtract 32.",
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "Alex";
    string lastName = "Thunder";
    int favoriteNum = 42;

    cout << "📱 USERNAME GENERATOR" << endl;
    cout << "=====================" << endl;

    string user1 = firstName.substr(0, 3) + lastName.substr(0, 3) + to_string(favoriteNum);

    string reversed = "";
    for (int i = (int)firstName.length() - 1; i >= 0; i--) {
        reversed += firstName[i];
    }
    string user2 = reversed + to_string(favoriteNum);

    string upper = firstName;
    for (int i = 0; i < (int)upper.length(); i++) {
        if (upper[i] >= 'a' && upper[i] <= 'z') {
            upper[i] = upper[i] - 32;
        }
    }
    string user3 = upper + "_" + to_string(favoriteNum);

    cout << "Style 1: " << user1 << endl;
    cout << "Style 2: " << user2 << endl;
    cout << "Style 3: " << user3 << endl;
    cout << "Name length: " << firstName.length() + lastName.length() << endl;

    return 0;
}`,
    expectedOutput: `📱 USERNAME GENERATOR
=====================
Style 1: AleThu42
Style 2: xelA42
Style 3: ALEX_42
Name length: 11`,
    tags: ["project", "cpp-area-1", "strings"],
    fromLesson: "cpp-1-5",
    language: "cpp",
    category: "Tools",
    categoryZh: "工具",
  },

  // cpp-1-6: First C++ Projects
  {
    id: "proj-cpp-1-6-1",
    title: "🏦 Bank Account Simulator",
    description: "Build a mini bank system! Track balance, deposits, withdrawals, and interest using all the C++ basics you've learned.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    string accountName = "Alex";
    double balance = 1000.00;
    double interestRate = 0.05; // 5% annual
    int transactions = 0;

    cout << "🏦 BANK OF C++" << endl;
    cout << "Welcome, " << accountName << "!" << endl;
    cout << fixed << setprecision(2);

    // Transaction 1: Deposit
    double deposit1 = 500.00;
    // TODO: Add deposit1 to balance, increment transactions
    cout << "Deposit: +$" << deposit1 << endl;

    // Transaction 2: Withdrawal
    double withdrawal1 = 200.00;
    // TODO: Subtract withdrawal1 from balance, increment transactions
    cout << "Withdrawal: -$" << withdrawal1 << endl;

    // Transaction 3: Another deposit
    double deposit2 = 750.00;
    // TODO: Process this deposit

    // TODO: Calculate interest earned on current balance
    double interest = 0.0; // fix this
    // TODO: Add interest to balance

    // TODO: Print final summary
    cout << "\\n=== ACCOUNT SUMMARY ===" << endl;
    cout << "Total transactions: " << transactions << endl;
    cout << "Interest earned: $" << interest << endl;
    cout << "Final balance: $" << balance << endl;

    return 0;
}`,
    hint: "For each deposit: balance += amount and transactions++. For withdrawal: balance -= amount. Interest = balance * rate.",
    solution: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    string accountName = "Alex";
    double balance = 1000.00;
    double interestRate = 0.05;
    int transactions = 0;

    cout << "🏦 BANK OF C++" << endl;
    cout << "Welcome, " << accountName << "!" << endl;
    cout << fixed << setprecision(2);

    double deposit1 = 500.00;
    balance += deposit1;
    transactions++;
    cout << "Deposit: +$" << deposit1 << endl;

    double withdrawal1 = 200.00;
    balance -= withdrawal1;
    transactions++;
    cout << "Withdrawal: -$" << withdrawal1 << endl;

    double deposit2 = 750.00;
    balance += deposit2;
    transactions++;
    cout << "Deposit: +$" << deposit2 << endl;

    double interest = balance * interestRate;
    balance += interest;

    cout << "\\n=== ACCOUNT SUMMARY ===" << endl;
    cout << "Total transactions: " << transactions << endl;
    cout << "Interest earned: $" << interest << endl;
    cout << "Final balance: $" << balance << endl;

    return 0;
}`,
    expectedOutput: `🏦 BANK OF C++
Welcome, Alex!
Deposit: +$500.00
Withdrawal: -$200.00
Deposit: +$750.00

=== ACCOUNT SUMMARY ===
Total transactions: 3
Interest earned: $102.50
Final balance: $2152.50`,
    tags: ["project", "cpp-area-1", "simulation"],
    fromLesson: "cpp-1-6",
    language: "cpp",
    category: "Simulations",
    categoryZh: "模拟",
  },
  {
    id: "proj-cpp-1-6-2",
    title: "🌡️ Weather Dashboard",
    description: "Build a weather info dashboard! Convert temperatures, calculate averages, and display a formatted weather report.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "beginner",
    starterCode: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    // Weekly temperatures in Fahrenheit
    double mon = 72.0, tue = 68.5, wed = 75.2;
    double thu = 80.1, fri = 65.0;
    string city = "Sunnyville";

    cout << "🌡️ WEATHER DASHBOARD - " << city << endl;
    cout << "==============================" << endl;
    cout << fixed << setprecision(1);

    // TODO: Calculate average temperature
    double avgF = 0.0; // fix this

    // TODO: Convert average to Celsius: C = (F - 32) * 5/9
    double avgC = 0.0; // fix this

    // TODO: Find if it's hot (>75), mild (60-75), or cold (<60)
    string feeling = ""; // TODO: determine this

    // TODO: Calculate temperature range (max - min)
    // Hint: compare all 5 values
    double maxTemp = 0.0; // TODO
    double minTemp = 0.0; // TODO
    double range = 0.0;   // TODO

    cout << "Mon: " << mon << "F" << endl;
    cout << "Tue: " << tue << "F" << endl;
    cout << "Wed: " << wed << "F" << endl;
    cout << "Thu: " << thu << "F" << endl;
    cout << "Fri: " << fri << "F" << endl;
    cout << "-----" << endl;
    cout << "Average: " << avgF << "F / " << avgC << "C" << endl;
    cout << "Feeling: " << feeling << endl;
    cout << "Range: " << range << "F" << endl;

    return 0;
}`,
    hint: "Average = sum of all / 5. Celsius = (F - 32) * 5.0 / 9.0. For max/min, compare values. Use if/else for hot/mild/cold.",
    solution: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    double mon = 72.0, tue = 68.5, wed = 75.2;
    double thu = 80.1, fri = 65.0;
    string city = "Sunnyville";

    cout << "🌡️ WEATHER DASHBOARD - " << city << endl;
    cout << "==============================" << endl;
    cout << fixed << setprecision(1);

    double avgF = (mon + tue + wed + thu + fri) / 5.0;
    double avgC = (avgF - 32.0) * 5.0 / 9.0;

    string feeling;
    if (avgF > 75) feeling = "Hot 🔥";
    else if (avgF >= 60) feeling = "Mild 😊";
    else feeling = "Cold 🥶";

    double maxTemp = thu; // 80.1 is the max
    double minTemp = fri; // 65.0 is the min
    double range = maxTemp - minTemp;

    cout << "Mon: " << mon << "F" << endl;
    cout << "Tue: " << tue << "F" << endl;
    cout << "Wed: " << wed << "F" << endl;
    cout << "Thu: " << thu << "F" << endl;
    cout << "Fri: " << fri << "F" << endl;
    cout << "-----" << endl;
    cout << "Average: " << avgF << "F / " << avgC << "C" << endl;
    cout << "Feeling: " << feeling << endl;
    cout << "Range: " << range << "F" << endl;

    return 0;
}`,
    expectedOutput: `🌡️ WEATHER DASHBOARD - Sunnyville
==============================
Mon: 72.0F
Tue: 68.5F
Wed: 75.2F
Thu: 80.1F
Fri: 65.0F
-----
Average: 72.2F / 22.3C
Feeling: Mild 😊
Range: 15.1F`,
    tags: ["project", "cpp-area-1", "simulation"],
    fromLesson: "cpp-1-6",
    language: "cpp",
    category: "Simulations",
    categoryZh: "模拟",
  },

  // ─── Area 2: Control Flow ────────────────────────────────

  // cpp-2-1: if/else with Braces
  {
    id: "proj-cpp-2-1-1",
    title: "🎮 Boss Battle Decision Engine",
    description: "Build a turn-based boss fight! Use if/else to determine attack outcomes, critical hits, and healing based on stats.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int playerHP = 100, bossHP = 150;
    int playerATK = 25, playerDEF = 10;
    int bossATK = 20;
    bool hasPotion = true;
    bool hasShield = true;

    cout << "⚔️ BOSS BATTLE ⚔️" << endl;
    cout << "Player HP: " << playerHP << " | Boss HP: " << bossHP << endl;

    // Round 1: Player attacks
    string action1 = "attack"; // attack, heal, or defend
    // TODO: If action is "attack", deal playerATK damage to boss
    // TODO: If action is "heal" AND hasPotion, restore 30 HP
    // TODO: If action is "defend", reduce next incoming damage
    if (action1 == "attack") {
        // TODO: damage the boss
    }

    cout << "Boss HP after round 1: " << bossHP << endl;

    // Round 2: Boss attacks player
    int bossDamage = bossATK;
    // TODO: If player defended, halve the damage
    // TODO: If hasShield, reduce damage by playerDEF
    // TODO: Apply damage to player
    // TODO: If playerHP <= 0, game over!

    cout << "Player HP after round 2: " << playerHP << endl;

    // Round 3: Player finishes
    string action3 = "attack";
    // TODO: Process another action
    // TODO: Check if boss is defeated

    // TODO: Print victory or defeat message
    cout << "Final - Player: " << playerHP << " HP | Boss: " << bossHP << " HP" << endl;

    return 0;
}`,
    hint: "Use if/else blocks with braces {}. Check action strings with ==. Remember to update HP values. Check for <= 0 to determine death.",
    solution: `#include <iostream>
using namespace std;

int main() {
    int playerHP = 100, bossHP = 150;
    int playerATK = 25, playerDEF = 10;
    int bossATK = 20;
    bool hasPotion = true;
    bool hasShield = true;

    cout << "⚔️ BOSS BATTLE ⚔️" << endl;
    cout << "Player HP: " << playerHP << " | Boss HP: " << bossHP << endl;

    string action1 = "attack";
    bool defended = false;
    if (action1 == "attack") {
        bossHP -= playerATK;
        cout << "You slash for " << playerATK << " damage!" << endl;
    } else if (action1 == "heal" && hasPotion) {
        playerHP += 30;
        hasPotion = false;
        cout << "You heal for 30 HP!" << endl;
    } else if (action1 == "defend") {
        defended = true;
        cout << "You raise your shield!" << endl;
    }

    cout << "Boss HP after round 1: " << bossHP << endl;

    int bossDamage = bossATK;
    if (defended) {
        bossDamage /= 2;
    }
    if (hasShield) {
        bossDamage -= playerDEF;
        if (bossDamage < 0) bossDamage = 0;
    }
    playerHP -= bossDamage;
    cout << "Boss hits for " << bossDamage << " damage!" << endl;

    if (playerHP <= 0) {
        cout << "You have been defeated..." << endl;
    }

    cout << "Player HP after round 2: " << playerHP << endl;

    string action3 = "attack";
    if (action3 == "attack") {
        bossHP -= playerATK;
    }

    if (bossHP <= 0) {
        cout << "🎉 Victory! The boss is defeated!" << endl;
    } else if (playerHP <= 0) {
        cout << "💀 Defeat..." << endl;
    } else {
        cout << "The battle continues..." << endl;
    }

    cout << "Final - Player: " << playerHP << " HP | Boss: " << bossHP << " HP" << endl;

    return 0;
}`,
    expectedOutput: `⚔️ BOSS BATTLE ⚔️
Player HP: 100 | Boss HP: 150
You slash for 25 damage!
Boss HP after round 1: 125
Boss hits for 10 damage!
Player HP after round 2: 90
Final - Player: 90 HP | Boss: 100 HP`,
    tags: ["project", "cpp-area-2", "game"],
    fromLesson: "cpp-2-1",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },
  {
    id: "proj-cpp-2-1-2",
    title: "🔑 Password Strength Checker",
    description: "Analyze password security! Check length, uppercase, lowercase, digits, and special characters using if/else chains.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string password = "C0d3_Ninja!";
    int score = 0;

    cout << "🔑 PASSWORD STRENGTH CHECKER" << endl;
    cout << "Password: " << password << endl;
    cout << "Length: " << password.length() << endl;

    // TODO: Check length (>= 8 gets a point, >= 12 gets 2 points)
    if (password.length() >= 12) {
        score += 2;
    } else if (password.length() >= 8) {
        score += 1;
    }

    // TODO: Check for uppercase letters
    bool hasUpper = false;
    for (int i = 0; i < (int)password.length(); i++) {
        // TODO: if character is between 'A' and 'Z', set hasUpper = true
    }
    if (hasUpper) { score++; }

    // TODO: Check for lowercase letters (similar loop)
    bool hasLower = false;
    // TODO: implement check

    // TODO: Check for digits (0-9)
    bool hasDigit = false;
    // TODO: implement check

    // TODO: Check for special characters (!@#$%^&*_-)
    bool hasSpecial = false;
    // TODO: implement check

    // TODO: Rate the password based on score
    cout << "\\nScore: " << score << "/6" << endl;
    // TODO: if score >= 5: Strong, >= 3: Medium, else: Weak

    return 0;
}`,
    hint: "Loop through each character. Use >= 'A' && <= 'Z' for uppercase, >= 'a' && <= 'z' for lowercase, >= '0' && <= '9' for digits.",
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string password = "C0d3_Ninja!";
    int score = 0;

    cout << "🔑 PASSWORD STRENGTH CHECKER" << endl;
    cout << "Password: " << password << endl;
    cout << "Length: " << password.length() << endl;

    if (password.length() >= 12) {
        score += 2;
    } else if (password.length() >= 8) {
        score += 1;
    }

    bool hasUpper = false, hasLower = false, hasDigit = false, hasSpecial = false;
    for (int i = 0; i < (int)password.length(); i++) {
        char c = password[i];
        if (c >= 'A' && c <= 'Z') hasUpper = true;
        if (c >= 'a' && c <= 'z') hasLower = true;
        if (c >= '0' && c <= '9') hasDigit = true;
        if (c == '!' || c == '@' || c == '#' || c == '_' || c == '-') hasSpecial = true;
    }
    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasDigit) score++;
    if (hasSpecial) score++;

    cout << "\\nScore: " << score << "/6" << endl;
    if (score >= 5) {
        cout << "Rating: 💪 STRONG" << endl;
    } else if (score >= 3) {
        cout << "Rating: 🟡 MEDIUM" << endl;
    } else {
        cout << "Rating: 🔴 WEAK" << endl;
    }

    return 0;
}`,
    expectedOutput: `🔑 PASSWORD STRENGTH CHECKER
Password: C0d3_Ninja!
Length: 11

Score: 5/6
Rating: 💪 STRONG`,
    tags: ["project", "cpp-area-2", "security"],
    fromLesson: "cpp-2-1",
    language: "cpp",
    category: "Science",
    categoryZh: "科学",
  },

  // cpp-2-2: switch & Ternary
  {
    id: "proj-cpp-2-2-1",
    title: "🎵 Music Playlist Mood Selector",
    description: "Use switch to pick playlists by mood! Combine with ternary for shuffle mode. Build a mini music player interface.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int mood = 3; // 1=Happy, 2=Sad, 3=Energetic, 4=Chill, 5=Focus
    bool shuffleOn = true;

    cout << "🎵 MOOD PLAYLIST SELECTOR 🎵" << endl;

    // TODO: Use a switch to select playlist based on mood
    string playlist;
    string emoji;
    switch (mood) {
        case 1:
            playlist = "Summer Vibes Mix";
            emoji = "😄";
            break;
        // TODO: Add cases 2-5
        // 2 = "Rainy Day Ballads" 😢
        // 3 = "Workout Beast Mode" 💪
        // 4 = "Lo-fi Sunset" 🌅
        // 5 = "Deep Focus Zone" 🧠
        default:
            playlist = "Random Mix";
            emoji = "🎲";
    }

    // TODO: Use ternary to set shuffle status
    string shuffleStatus = ""; // TODO: shuffleOn ? "ON 🔀" : "OFF ➡️"

    // TODO: Use ternary to determine play mode
    int songCount = 15;
    string countMsg = ""; // TODO: songCount > 10 ? "Long playlist!" : "Short playlist"

    cout << "Mood: " << emoji << endl;
    cout << "Playlist: " << playlist << endl;
    cout << "Shuffle: " << shuffleStatus << endl;
    cout << "Songs: " << songCount << " - " << countMsg << endl;

    return 0;
}`,
    hint: "Each switch case needs a break statement. Ternary syntax: condition ? valueIfTrue : valueIfFalse.",
    solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int mood = 3;
    bool shuffleOn = true;

    cout << "🎵 MOOD PLAYLIST SELECTOR 🎵" << endl;

    string playlist;
    string emoji;
    switch (mood) {
        case 1:
            playlist = "Summer Vibes Mix";
            emoji = "😄";
            break;
        case 2:
            playlist = "Rainy Day Ballads";
            emoji = "😢";
            break;
        case 3:
            playlist = "Workout Beast Mode";
            emoji = "💪";
            break;
        case 4:
            playlist = "Lo-fi Sunset";
            emoji = "🌅";
            break;
        case 5:
            playlist = "Deep Focus Zone";
            emoji = "🧠";
            break;
        default:
            playlist = "Random Mix";
            emoji = "🎲";
    }

    string shuffleStatus = shuffleOn ? "ON 🔀" : "OFF ➡️";
    int songCount = 15;
    string countMsg = songCount > 10 ? "Long playlist!" : "Short playlist";

    cout << "Mood: " << emoji << endl;
    cout << "Playlist: " << playlist << endl;
    cout << "Shuffle: " << shuffleStatus << endl;
    cout << "Songs: " << songCount << " - " << countMsg << endl;

    return 0;
}`,
    expectedOutput: `🎵 MOOD PLAYLIST SELECTOR 🎵
Mood: 💪
Playlist: Workout Beast Mode
Shuffle: ON 🔀
Songs: 15 - Long playlist!`,
    tags: ["project", "cpp-area-2", "creative"],
    fromLesson: "cpp-2-2",
    language: "cpp",
    category: "Creative",
    categoryZh: "创意",
  },
  {
    id: "proj-cpp-2-2-2",
    title: "🍕 Pizza Order System",
    description: "Build a pizza ordering system using switch for size/toppings and ternary for delivery options!",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    int size = 2;      // 1=Small, 2=Medium, 3=Large
    int topping = 3;   // 1=Pepperoni, 2=Mushroom, 3=Hawaiian, 4=Veggie
    bool delivery = true;
    bool extraCheese = true;

    double basePrice = 0.0;
    string sizeName, toppingName;

    cout << "🍕 PIZZA ORDER SYSTEM 🍕" << endl;

    // TODO: Use switch for size -> set basePrice and sizeName
    switch (size) {
        // 1: Small $8.99
        // 2: Medium $11.99
        // 3: Large $14.99
        default:
            basePrice = 11.99;
            sizeName = "Medium";
    }

    // TODO: Use switch for topping -> set toppingName and add $1.50-$3.00
    double toppingPrice = 0.0;
    // TODO: switch on topping

    // TODO: Use ternary for extra cheese ($2.00 or $0)
    double cheeseCost = 0.0; // TODO

    // TODO: Use ternary for delivery fee ($5.00 or $0)
    double deliveryFee = 0.0; // TODO

    double total = basePrice + toppingPrice + cheeseCost + deliveryFee;

    cout << fixed << setprecision(2);
    cout << "Size: " << sizeName << " ($" << basePrice << ")" << endl;
    cout << "Topping: " << toppingName << " ($" << toppingPrice << ")" << endl;
    // TODO: Use ternary inline to show Yes/No for extra cheese
    cout << "Extra Cheese: " << (extraCheese ? "Yes" : "No") << " ($" << cheeseCost << ")" << endl;
    cout << "Delivery: " << (delivery ? "Yes" : "No") << " ($" << deliveryFee << ")" << endl;
    cout << "TOTAL: $" << total << endl;

    return 0;
}`,
    hint: "Switch needs break after each case. Ternary: delivery ? 5.0 : 0.0. Don't forget to set string names in each case.",
    solution: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main() {
    int size = 2;
    int topping = 3;
    bool delivery = true;
    bool extraCheese = true;

    double basePrice = 0.0;
    string sizeName, toppingName;

    cout << "🍕 PIZZA ORDER SYSTEM 🍕" << endl;

    switch (size) {
        case 1: basePrice = 8.99; sizeName = "Small"; break;
        case 2: basePrice = 11.99; sizeName = "Medium"; break;
        case 3: basePrice = 14.99; sizeName = "Large"; break;
        default: basePrice = 11.99; sizeName = "Medium";
    }

    double toppingPrice = 0.0;
    switch (topping) {
        case 1: toppingName = "Pepperoni"; toppingPrice = 2.00; break;
        case 2: toppingName = "Mushroom"; toppingPrice = 1.50; break;
        case 3: toppingName = "Hawaiian"; toppingPrice = 2.50; break;
        case 4: toppingName = "Veggie"; toppingPrice = 3.00; break;
        default: toppingName = "Plain"; toppingPrice = 0.0;
    }

    double cheeseCost = extraCheese ? 2.00 : 0.00;
    double deliveryFee = delivery ? 5.00 : 0.00;
    double total = basePrice + toppingPrice + cheeseCost + deliveryFee;

    cout << fixed << setprecision(2);
    cout << "Size: " << sizeName << " ($" << basePrice << ")" << endl;
    cout << "Topping: " << toppingName << " ($" << toppingPrice << ")" << endl;
    cout << "Extra Cheese: " << (extraCheese ? "Yes" : "No") << " ($" << cheeseCost << ")" << endl;
    cout << "Delivery: " << (delivery ? "Yes" : "No") << " ($" << deliveryFee << ")" << endl;
    cout << "TOTAL: $" << total << endl;

    return 0;
}`,
    expectedOutput: `🍕 PIZZA ORDER SYSTEM 🍕
Size: Medium ($11.99)
Topping: Hawaiian ($2.50)
Extra Cheese: Yes ($2.00)
Delivery: Yes ($5.00)
TOTAL: $21.49`,
    tags: ["project", "cpp-area-2", "simulation"],
    fromLesson: "cpp-2-2",
    language: "cpp",
    category: "Tools",
    categoryZh: "工具",
  },

  // cpp-2-3: Loops
  {
    id: "proj-cpp-2-3-1",
    title: "🎰 Number Guessing Game",
    description: "Build a number guessing game with a loop! Give hot/cold hints and track attempts. The computer picks a number, you guess!",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int secretNumber = 42;
    int maxAttempts = 6;
    int attempts = 0;
    bool guessed = false;

    // Pre-set guesses to simulate (since we can't use real input in tests)
    int guesses[] = {25, 50, 38, 45, 42};
    int numGuesses = 5;

    cout << "🎰 GUESS THE NUMBER (1-100)" << endl;
    cout << "You have " << maxAttempts << " attempts!" << endl;

    // TODO: Use a while or for loop to process guesses
    // For each guess:
    //   - Increment attempts
    //   - If correct, set guessed = true and break
    //   - If too high, print "Too high! ⬇️"
    //   - If too low, print "Too low! ⬆️"
    //   - Print how close (within 5 = "🔥 HOT!", within 10 = "Warm", else "❄️ Cold")

    for (int i = 0; i < numGuesses && attempts < maxAttempts; i++) {
        int guess = guesses[i];
        attempts++;
        cout << "Guess #" << attempts << ": " << guess << " - ";

        // TODO: Check the guess and give feedback
    }

    // TODO: Print result
    if (guessed) {
        cout << "🎉 You got it in " << attempts << " attempts!" << endl;
    } else {
        cout << "😞 The number was " << secretNumber << endl;
    }

    return 0;
}`,
    hint: "Use a for loop through the guesses array. Compare guess to secretNumber. Use abs(guess - secretNumber) for distance. Break when correct.",
    solution: `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int secretNumber = 42;
    int maxAttempts = 6;
    int attempts = 0;
    bool guessed = false;

    int guesses[] = {25, 50, 38, 45, 42};
    int numGuesses = 5;

    cout << "🎰 GUESS THE NUMBER (1-100)" << endl;
    cout << "You have " << maxAttempts << " attempts!" << endl;

    for (int i = 0; i < numGuesses && attempts < maxAttempts; i++) {
        int guess = guesses[i];
        attempts++;
        cout << "Guess #" << attempts << ": " << guess << " - ";

        if (guess == secretNumber) {
            cout << "CORRECT!" << endl;
            guessed = true;
            break;
        } else if (guess > secretNumber) {
            cout << "Too high! ⬇️";
        } else {
            cout << "Too low! ⬆️";
        }

        int dist = abs(guess - secretNumber);
        if (dist <= 5) {
            cout << " 🔥 HOT!" << endl;
        } else if (dist <= 10) {
            cout << " Warm" << endl;
        } else {
            cout << " ❄️ Cold" << endl;
        }
    }

    if (guessed) {
        cout << "🎉 You got it in " << attempts << " attempts!" << endl;
    } else {
        cout << "😞 The number was " << secretNumber << endl;
    }

    return 0;
}`,
    expectedOutput: `🎰 GUESS THE NUMBER (1-100)
You have 6 attempts!
Guess #1: 25 - Too low! ⬆️ ❄️ Cold
Guess #2: 50 - Too high! ⬇️ Warm
Guess #3: 38 - Too low! ⬆️ 🔥 HOT!
Guess #4: 45 - Too high! ⬇️ 🔥 HOT!
Guess #5: 42 - CORRECT!
🎉 You got it in 5 attempts!`,
    tags: ["project", "cpp-area-2", "game"],
    fromLesson: "cpp-2-3",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },
  {
    id: "proj-cpp-2-3-2",
    title: "📊 Fibonacci Sequence Explorer",
    description: "Generate Fibonacci numbers with loops! Find which ones are even, calculate ratios approaching the Golden Ratio.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int n = 15; // Generate first 15 Fibonacci numbers
    cout << "📊 FIBONACCI EXPLORER" << endl;
    cout << "First " << n << " Fibonacci numbers:" << endl;

    // TODO: Use a loop to generate Fibonacci sequence
    // Start: f1 = 0, f2 = 1, next = f1 + f2
    int f1 = 0, f2 = 1;
    int evenCount = 0;
    int sum = 0;

    for (int i = 1; i <= n; i++) {
        // TODO: Print current Fibonacci number
        // TODO: Check if it's even, increment evenCount
        // TODO: Add to sum
        // TODO: Calculate next Fibonacci number
    }

    cout << "\\nTotal even numbers: " << evenCount << endl;
    cout << "Sum of all: " << sum << endl;

    // TODO: Calculate ratio of last two numbers (approaches Golden Ratio)
    cout << fixed << setprecision(6);
    // double ratio = (double)f2 / f1; // approximate golden ratio
    // cout << "Last ratio (≈ Golden Ratio): " << ratio << endl;

    return 0;
}`,
    hint: "Each Fibonacci number = previous two added together. Use int next = f1 + f2, then shift: f1 = f2, f2 = next. Even check: num % 2 == 0.",
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int n = 15;
    cout << "📊 FIBONACCI EXPLORER" << endl;
    cout << "First " << n << " Fibonacci numbers:" << endl;

    int f1 = 0, f2 = 1;
    int evenCount = 0;
    int sum = 0;

    for (int i = 1; i <= n; i++) {
        cout << f1 << " ";
        if (f1 % 2 == 0) evenCount++;
        sum += f1;
        int next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
    cout << endl;

    cout << "\\nTotal even numbers: " << evenCount << endl;
    cout << "Sum of all: " << sum << endl;

    cout << fixed << setprecision(6);
    double ratio = (double)f1 / f2;
    cout << "Last ratio (approx Golden Ratio): " << ratio << endl;

    return 0;
}`,
    expectedOutput: `📊 FIBONACCI EXPLORER
First 15 Fibonacci numbers:
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 

Total even numbers: 5
Sum of all: 986
Last ratio (approx Golden Ratio): 0.618034`,
    tags: ["project", "cpp-area-2", "math"],
    fromLesson: "cpp-2-3",
    language: "cpp",
    category: "Science",
    categoryZh: "科学",
  },

  // cpp-2-4: Nested Loops & Patterns
  {
    id: "proj-cpp-2-4-1",
    title: "⭐ Star Pattern Art Gallery",
    description: "Create amazing patterns using nested loops! Diamonds, pyramids, and spirals — all with * characters.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    int size = 5;

    // Pattern 1: Right triangle
    cout << "=== Right Triangle ===" << endl;
    for (int i = 1; i <= size; i++) {
        for (int j = 0; j < i; j++) {
            cout << "* ";
        }
        cout << endl;
    }

    // TODO: Pattern 2: Pyramid (centered)
    // For size=5:
    //     *
    //    * *
    //   * * *
    //  * * * *
    // * * * * *
    cout << "\\n=== Pyramid ===" << endl;
    // TODO: outer loop for rows
    // TODO: inner loop 1 for spaces
    // TODO: inner loop 2 for stars

    // TODO: Pattern 3: Diamond
    // Top half (pyramid) + bottom half (inverted pyramid)
    cout << "\\n=== Diamond ===" << endl;
    // TODO: implement diamond

    // TODO: Pattern 4: Hollow square
    // Stars on edges only, spaces inside
    cout << "\\n=== Hollow Square ===" << endl;
    // TODO: implement hollow square

    return 0;
}`,
    hint: "For pyramid: spaces = size - row, then print row stars. Diamond = pyramid + inverted pyramid. Hollow square: print * only when i==0 || i==size-1 || j==0 || j==size-1.",
    solution: `#include <iostream>
using namespace std;

int main() {
    int size = 5;

    cout << "=== Right Triangle ===" << endl;
    for (int i = 1; i <= size; i++) {
        for (int j = 0; j < i; j++) {
            cout << "* ";
        }
        cout << endl;
    }

    cout << "\\n=== Pyramid ===" << endl;
    for (int i = 1; i <= size; i++) {
        for (int j = 0; j < size - i; j++) cout << " ";
        for (int j = 0; j < i; j++) cout << "* ";
        cout << endl;
    }

    cout << "\\n=== Diamond ===" << endl;
    for (int i = 1; i <= size; i++) {
        for (int j = 0; j < size - i; j++) cout << " ";
        for (int j = 0; j < i; j++) cout << "* ";
        cout << endl;
    }
    for (int i = size - 1; i >= 1; i--) {
        for (int j = 0; j < size - i; j++) cout << " ";
        for (int j = 0; j < i; j++) cout << "* ";
        cout << endl;
    }

    cout << "\\n=== Hollow Square ===" << endl;
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            if (i == 0 || i == size - 1 || j == 0 || j == size - 1)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }

    return 0;
}`,
    expectedOutput: `=== Right Triangle ===
* 
* * 
* * * 
* * * * 
* * * * * 

=== Pyramid ===
    * 
   * * 
  * * * 
 * * * * 
* * * * * 

=== Diamond ===
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
 * * * * 
  * * * 
   * * 
    * 

=== Hollow Square ===
* * * * * 
*       * 
*       * 
*       * 
* * * * * `,
    tags: ["project", "cpp-area-2", "patterns"],
    fromLesson: "cpp-2-4",
    language: "cpp",
    category: "Creative",
    categoryZh: "创意",
  },
  {
    id: "proj-cpp-2-4-2",
    title: "📅 Calendar Month Printer",
    description: "Print a formatted calendar month using nested loops! Handle days of the week and proper alignment.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    string month = "March 2024";
    int daysInMonth = 31;
    int startDay = 5; // 0=Sun, 1=Mon, ..., 5=Fri

    cout << "  " << month << endl;
    cout << " Su Mo Tu We Th Fr Sa" << endl;

    // TODO: Print leading spaces for the first week
    // If month starts on Friday (5), print 5 empty slots
    int dayOfWeek = 0;
    for (int i = 0; i < startDay; i++) {
        cout << "   "; // 3 spaces per empty slot
        dayOfWeek++;
    }

    // TODO: Print each day with proper formatting
    // Use setw(3) for alignment
    // When dayOfWeek reaches 7, start a new line
    for (int day = 1; day <= daysInMonth; day++) {
        // TODO: print the day number
        // TODO: check if we need a newline (dayOfWeek == 7)
    }

    cout << endl;
    return 0;
}`,
    hint: "Print 3-wide numbers with setw(3). After printing each number, increment dayOfWeek. When dayOfWeek == 7, print endl and reset to 0.",
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    string month = "March 2024";
    int daysInMonth = 31;
    int startDay = 5;

    cout << "  " << month << endl;
    cout << " Su Mo Tu We Th Fr Sa" << endl;

    int dayOfWeek = 0;
    for (int i = 0; i < startDay; i++) {
        cout << "   ";
        dayOfWeek++;
    }

    for (int day = 1; day <= daysInMonth; day++) {
        cout << setw(3) << day;
        dayOfWeek++;
        if (dayOfWeek == 7) {
            cout << endl;
            dayOfWeek = 0;
        }
    }

    cout << endl;
    return 0;
}`,
    expectedOutput: `  March 2024
 Su Mo Tu We Th Fr Sa
                  1  2
  3  4  5  6  7  8  9
 10 11 12 13 14 15 16
 17 18 19 20 21 22 23
 24 25 26 27 28 29 30
 31
`,
    tags: ["project", "cpp-area-2", "formatting"],
    fromLesson: "cpp-2-4",
    language: "cpp",
    category: "Tools",
    categoryZh: "工具",
  },

  // ─── Area 3: Functions & Data ────────────────────────────────

  // cpp-3-1: Functions (typed, overloaded)
  {
    id: "proj-cpp-3-1-1",
    title: "🧮 Math Toolkit Library",
    description: "Build a reusable math toolkit with overloaded functions! Create power(), abs(), max() that work with different types.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
using namespace std;

// TODO: Write a power function for integers
// int power(int base, int exp) - returns base^exp
int power(int base, int exp) {
    int result = 1;
    // TODO: multiply result by base, exp times
    return result;
}

// TODO: Overload power for doubles
// double power(double base, int exp)

// TODO: Write an absolute value function for int
// int myAbs(int x)

// TODO: Overload absolute value for double
// double myAbs(double x)

// TODO: Write a max function for 2 ints
// int myMax(int a, int b)

// TODO: Overload max for 3 ints
// int myMax(int a, int b, int c)

// TODO: Write a factorial function
// long long factorial(int n)

int main() {
    cout << "🧮 MATH TOOLKIT" << endl;

    cout << "power(2, 10) = " << power(2, 10) << endl;
    // TODO: Test power with doubles
    // TODO: Test myAbs with negative numbers
    // TODO: Test myMax with 2 and 3 args
    // TODO: Test factorial

    return 0;
}`,
    hint: "Overloading = same function name, different parameter types. Power: loop exp times multiplying. Abs: if negative, return -x. Factorial: loop 1 to n multiplying.",
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int power(int base, int exp) {
    int result = 1;
    for (int i = 0; i < exp; i++) result *= base;
    return result;
}

double power(double base, int exp) {
    double result = 1.0;
    for (int i = 0; i < exp; i++) result *= base;
    return result;
}

int myAbs(int x) { return x < 0 ? -x : x; }
double myAbs(double x) { return x < 0 ? -x : x; }

int myMax(int a, int b) { return a > b ? a : b; }
int myMax(int a, int b, int c) { return myMax(myMax(a, b), c); }

long long factorial(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) result *= i;
    return result;
}

int main() {
    cout << "🧮 MATH TOOLKIT" << endl;

    cout << "power(2, 10) = " << power(2, 10) << endl;
    cout << fixed << setprecision(4);
    cout << "power(3.14, 2) = " << power(3.14, 2) << endl;
    cout << "myAbs(-42) = " << myAbs(-42) << endl;
    cout << "myAbs(-3.14) = " << myAbs(-3.14) << endl;
    cout << "myMax(10, 20) = " << myMax(10, 20) << endl;
    cout << "myMax(5, 15, 10) = " << myMax(5, 15, 10) << endl;
    cout << "factorial(10) = " << factorial(10) << endl;

    return 0;
}`,
    expectedOutput: `🧮 MATH TOOLKIT
power(2, 10) = 1024
power(3.14, 2) = 9.8596
myAbs(-42) = 42
myAbs(-3.14) = 3.1400
myMax(10, 20) = 20
myMax(5, 15, 10) = 15
factorial(10) = 3628800`,
    tags: ["project", "cpp-area-3", "math", "functions"],
    fromLesson: "cpp-3-1",
    language: "cpp",
    category: "Tools",
    categoryZh: "工具",
  },
  {
    id: "proj-cpp-3-1-2",
    title: "🎲 Dice Game Engine",
    description: "Create a dice game with functions for rolling, scoring, and checking combinations! Use function overloading for different dice counts.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
using namespace std;

// Simulate dice with pre-set values (for testing)
int rollIndex = 0;
int rolls[] = {3, 5, 3, 6, 2, 4, 1, 3, 5, 6};

// TODO: Function to "roll" one die (returns next pre-set value)
int rollDie() {
    return rolls[rollIndex++];
}

// TODO: Function to roll N dice and return their sum
int rollDice(int n) {
    int sum = 0;
    // TODO: call rollDie() n times, add up results
    return sum;
}

// TODO: Function to check if a roll is "high" (>=4)
bool isHighRoll(int value) {
    return false; // TODO
}

// TODO: Function to calculate score (high rolls = 2x points)
int calculateScore(int roll1, int roll2) {
    int score = 0;
    // TODO: if high roll, worth double
    return score;
}

int main() {
    cout << "🎲 DICE GAME ENGINE" << endl;

    // Round 1: Roll 2 dice
    int r1 = rollDie();
    int r2 = rollDie();
    cout << "Roll: " << r1 << " + " << r2 << " = " << (r1 + r2) << endl;
    cout << "Score: " << calculateScore(r1, r2) << endl;

    // Round 2: Roll 3 dice (sum)
    int sum3 = rollDice(3);
    cout << "3-dice sum: " << sum3 << endl;

    // Round 3: Another 2 dice
    int r3 = rollDie();
    int r4 = rollDie();
    cout << "Roll: " << r3 << " + " << r4 << " = " << (r3 + r4) << endl;
    cout << "Score: " << calculateScore(r3, r4) << endl;

    return 0;
}`,
    hint: "rollDice(n) should call rollDie() n times in a loop. isHighRoll checks if value >= 4. calculateScore gives 2x for high rolls, 1x otherwise.",
    solution: `#include <iostream>
using namespace std;

int rollIndex = 0;
int rolls[] = {3, 5, 3, 6, 2, 4, 1, 3, 5, 6};

int rollDie() {
    return rolls[rollIndex++];
}

int rollDice(int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += rollDie();
    return sum;
}

bool isHighRoll(int value) {
    return value >= 4;
}

int calculateScore(int roll1, int roll2) {
    int score = 0;
    score += isHighRoll(roll1) ? roll1 * 2 : roll1;
    score += isHighRoll(roll2) ? roll2 * 2 : roll2;
    return score;
}

int main() {
    cout << "🎲 DICE GAME ENGINE" << endl;

    int r1 = rollDie();
    int r2 = rollDie();
    cout << "Roll: " << r1 << " + " << r2 << " = " << (r1 + r2) << endl;
    cout << "Score: " << calculateScore(r1, r2) << endl;

    int sum3 = rollDice(3);
    cout << "3-dice sum: " << sum3 << endl;

    int r3 = rollDie();
    int r4 = rollDie();
    cout << "Roll: " << r3 << " + " << r4 << " = " << (r3 + r4) << endl;
    cout << "Score: " << calculateScore(r3, r4) << endl;

    return 0;
}`,
    expectedOutput: `🎲 DICE GAME ENGINE
Roll: 3 + 5 - 8
Score: 13
3-dice sum: 11
Roll: 4 + 1 = 5
Score: 9`,
    tags: ["project", "cpp-area-3", "game"],
    fromLesson: "cpp-3-1",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },

  // cpp-3-2: Arrays (C-style)
  {
    id: "proj-cpp-3-2-1",
    title: "📊 Grade Book Analyzer",
    description: "Build a grade book using arrays! Calculate averages, find highest/lowest, count letter grades, and create a histogram.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    const int NUM_STUDENTS = 10;
    int grades[NUM_STUDENTS] = {85, 92, 78, 95, 88, 72, 98, 65, 89, 91};
    string names[NUM_STUDENTS] = {"Alice", "Bob", "Carol", "Dave", "Eve",
                                   "Frank", "Grace", "Hank", "Ivy", "Jack"};

    cout << "📊 GRADE BOOK ANALYZER" << endl;
    cout << "======================" << endl;

    // TODO: Calculate average grade
    double sum = 0;
    for (int i = 0; i < NUM_STUDENTS; i++) {
        // TODO: add grades[i] to sum
    }
    double average = sum / NUM_STUDENTS;

    // TODO: Find highest and lowest grades (and who got them)
    int highest = grades[0], lowest = grades[0];
    int highIdx = 0, lowIdx = 0;
    // TODO: loop and compare

    // TODO: Count letter grades (A: 90+, B: 80+, C: 70+, D: 60+, F: <60)
    int countA = 0, countB = 0, countC = 0, countD = 0, countF = 0;
    // TODO: loop and count

    // Print results
    cout << fixed << setprecision(1);
    cout << "Average: " << average << endl;
    cout << "Highest: " << names[highIdx] << " (" << highest << ")" << endl;
    cout << "Lowest: " << names[lowIdx] << " (" << lowest << ")" << endl;
    cout << "A: " << countA << " B: " << countB << " C: " << countC << endl;

    return 0;
}`,
    hint: "Loop through the array with a for loop. Track max/min by comparing each element. For letter grades, use if/else chains on each grade.",
    solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    const int NUM_STUDENTS = 10;
    int grades[NUM_STUDENTS] = {85, 92, 78, 95, 88, 72, 98, 65, 89, 91};
    string names[NUM_STUDENTS] = {"Alice", "Bob", "Carol", "Dave", "Eve",
                                   "Frank", "Grace", "Hank", "Ivy", "Jack"};

    cout << "📊 GRADE BOOK ANALYZER" << endl;
    cout << "======================" << endl;

    double sum = 0;
    for (int i = 0; i < NUM_STUDENTS; i++) sum += grades[i];
    double average = sum / NUM_STUDENTS;

    int highest = grades[0], lowest = grades[0];
    int highIdx = 0, lowIdx = 0;
    for (int i = 1; i < NUM_STUDENTS; i++) {
        if (grades[i] > highest) { highest = grades[i]; highIdx = i; }
        if (grades[i] < lowest) { lowest = grades[i]; lowIdx = i; }
    }

    int countA = 0, countB = 0, countC = 0, countD = 0, countF = 0;
    for (int i = 0; i < NUM_STUDENTS; i++) {
        if (grades[i] >= 90) countA++;
        else if (grades[i] >= 80) countB++;
        else if (grades[i] >= 70) countC++;
        else if (grades[i] >= 60) countD++;
        else countF++;
    }

    cout << fixed << setprecision(1);
    cout << "Average: " << average << endl;
    cout << "Highest: " << names[highIdx] << " (" << highest << ")" << endl;
    cout << "Lowest: " << names[lowIdx] << " (" << lowest << ")" << endl;
    cout << "A: " << countA << " B: " << countB << " C: " << countC << endl;

    return 0;
}`,
    expectedOutput: `📊 GRADE BOOK ANALYZER
======================
Average: 85.3
Highest: Grace (98)
Lowest: Hank (65)
A: 4 B: 3 C: 2`,
    tags: ["project", "cpp-area-3", "arrays"],
    fromLesson: "cpp-3-2",
    language: "cpp",
    category: "Data",
    categoryZh: "数据",
  },
  {
    id: "proj-cpp-3-2-2",
    title: "🎵 Beat Sequencer",
    description: "Create a drum machine using arrays! Store beat patterns and play them back as text-based music visualization.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    const int BEATS = 8;
    // 1 = hit, 0 = rest
    int kick[BEATS]  = {1, 0, 0, 1, 1, 0, 0, 1};
    int snare[BEATS] = {0, 0, 1, 0, 0, 0, 1, 0};
    int hihat[BEATS] = {1, 1, 1, 1, 1, 1, 1, 1};

    cout << "🎵 BEAT SEQUENCER" << endl;
    cout << "=================" << endl;

    // TODO: Print header with beat numbers
    cout << "Beat:  ";
    for (int i = 0; i < BEATS; i++) {
        cout << (i + 1) << " ";
    }
    cout << endl;

    // TODO: Print each instrument's pattern
    // Use "X" for hit, "." for rest
    cout << "Kick:  ";
    // TODO: loop through kick array
    cout << endl;

    cout << "Snare: ";
    // TODO: loop through snare array
    cout << endl;

    cout << "HiHat: ";
    // TODO: loop through hihat array
    cout << endl;

    // TODO: Count total hits per instrument
    // TODO: Find the busiest beat (most hits at same position)

    return 0;
}`,
    hint: "Loop through each array, print 'X' if value is 1, '.' if 0. To find busiest beat, add kick[i]+snare[i]+hihat[i] for each position.",
    solution: `#include <iostream>
using namespace std;

int main() {
    const int BEATS = 8;
    int kick[BEATS]  = {1, 0, 0, 1, 1, 0, 0, 1};
    int snare[BEATS] = {0, 0, 1, 0, 0, 0, 1, 0};
    int hihat[BEATS] = {1, 1, 1, 1, 1, 1, 1, 1};

    cout << "🎵 BEAT SEQUENCER" << endl;
    cout << "=================" << endl;

    cout << "Beat:  ";
    for (int i = 0; i < BEATS; i++) cout << (i + 1) << " ";
    cout << endl;

    cout << "Kick:  ";
    int kickHits = 0;
    for (int i = 0; i < BEATS; i++) {
        cout << (kick[i] ? "X" : ".") << " ";
        kickHits += kick[i];
    }
    cout << endl;

    cout << "Snare: ";
    int snareHits = 0;
    for (int i = 0; i < BEATS; i++) {
        cout << (snare[i] ? "X" : ".") << " ";
        snareHits += snare[i];
    }
    cout << endl;

    cout << "HiHat: ";
    int hihatHits = 0;
    for (int i = 0; i < BEATS; i++) {
        cout << (hihat[i] ? "X" : ".") << " ";
        hihatHits += hihat[i];
    }
    cout << endl;

    cout << "\\nHits - Kick: " << kickHits << " Snare: " << snareHits << " HiHat: " << hihatHits << endl;

    int busiestBeat = 0, maxHits = 0;
    for (int i = 0; i < BEATS; i++) {
        int total = kick[i] + snare[i] + hihat[i];
        if (total > maxHits) { maxHits = total; busiestBeat = i + 1; }
    }
    cout << "Busiest beat: #" << busiestBeat << " (" << maxHits << " hits)" << endl;

    return 0;
}`,
    expectedOutput: `🎵 BEAT SEQUENCER
=================
Beat:  1 2 3 4 5 6 7 8 
Kick:  X . . X X . . X 
Snare: . . X . . . X . 
HiHat: X X X X X X X X 

Hits - Kick: 4 Snare: 2 HiHat: 8
Busiest beat: #1 (2 hits)`,
    tags: ["project", "cpp-area-3", "creative", "arrays"],
    fromLesson: "cpp-3-2",
    language: "cpp",
    category: "Creative",
    categoryZh: "创意",
  },

  // cpp-3-3: Vectors
  {
    id: "proj-cpp-3-3-1",
    title: "📋 To-Do List Manager",
    description: "Build a dynamic to-do list using vectors! Add, complete, and display tasks with priority sorting.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<string> tasks;
    vector<bool> completed;
    vector<int> priority; // 1=High, 2=Medium, 3=Low

    cout << "📋 TODO LIST MANAGER" << endl;

    // TODO: Add tasks using push_back
    tasks.push_back("Study for math test");
    completed.push_back(false);
    priority.push_back(1);

    // TODO: Add more tasks (at least 4 more)

    // TODO: Mark some tasks as completed
    // completed[0] = true;

    // TODO: Display all tasks with status
    cout << "\\n--- All Tasks ---" << endl;
    for (int i = 0; i < (int)tasks.size(); i++) {
        // TODO: Print [X] for completed, [ ] for not
        // TODO: Print priority level
        // TODO: Print task name
    }

    // TODO: Count completed vs pending
    int doneCount = 0;
    // TODO: loop and count

    cout << "\\nCompleted: " << doneCount << "/" << tasks.size() << endl;

    return 0;
}`,
    hint: "Use push_back() to add items to all three vectors. Loop with .size(). Print [X] or [ ] based on completed[i]. Count where completed[i] == true.",
    solution: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<string> tasks;
    vector<bool> completed;
    vector<int> priority;

    cout << "📋 TODO LIST MANAGER" << endl;

    tasks.push_back("Study for math test");
    completed.push_back(false);
    priority.push_back(1);

    tasks.push_back("Clean room");
    completed.push_back(true);
    priority.push_back(3);

    tasks.push_back("Finish coding project");
    completed.push_back(false);
    priority.push_back(1);

    tasks.push_back("Read chapter 5");
    completed.push_back(true);
    priority.push_back(2);

    tasks.push_back("Practice guitar");
    completed.push_back(false);
    priority.push_back(2);

    cout << "\\n--- All Tasks ---" << endl;
    for (int i = 0; i < (int)tasks.size(); i++) {
        string status = completed[i] ? "[X]" : "[ ]";
        string pri = priority[i] == 1 ? "HIGH" : (priority[i] == 2 ? "MED " : "LOW ");
        cout << status << " " << pri << " " << tasks[i] << endl;
    }

    int doneCount = 0;
    for (int i = 0; i < (int)completed.size(); i++) {
        if (completed[i]) doneCount++;
    }

    cout << "\\nCompleted: " << doneCount << "/" << tasks.size() << endl;

    return 0;
}`,
    expectedOutput: `📋 TODO LIST MANAGER

--- All Tasks ---
[ ] HIGH Study for math test
[X] LOW  Clean room
[ ] HIGH Finish coding project
[X] MED  Read chapter 5
[ ] MED  Practice guitar

Completed: 2/5`,
    tags: ["project", "cpp-area-3", "vectors"],
    fromLesson: "cpp-3-3",
    language: "cpp",
    category: "Tools",
    categoryZh: "工具",
  },
  {
    id: "proj-cpp-3-3-2",
    title: "📈 Stock Price Tracker",
    description: "Track stock prices with vectors! Calculate moving averages, find trends, and detect the best buy/sell points.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main() {
    vector<double> prices = {150.0, 148.5, 152.3, 155.0, 153.2,
                             157.8, 160.1, 158.5, 162.0, 165.5};

    cout << "📈 STOCK TRACKER" << endl;
    cout << fixed << setprecision(2);

    // TODO: Print all prices
    cout << "Prices: ";
    for (int i = 0; i < (int)prices.size(); i++) {
        cout << prices[i] << " ";
    }
    cout << endl;

    // TODO: Find min and max price
    double minPrice = prices[0], maxPrice = prices[0];
    int minDay = 0, maxDay = 0;
    // TODO: loop to find min/max

    // TODO: Calculate daily changes (push_back into a new vector)
    vector<double> changes;
    // TODO: changes[i] = prices[i+1] - prices[i]

    // TODO: Find best profit (buy low, sell high - buy must be before sell)
    double bestProfit = 0.0;
    // TODO: calculate

    cout << "Min: $" << minPrice << " (day " << minDay << ")" << endl;
    cout << "Max: $" << maxPrice << " (day " << maxDay << ")" << endl;
    cout << "Best profit: $" << bestProfit << endl;

    return 0;
}`,
    hint: "For daily changes, subtract consecutive prices. For best profit, track the minimum price seen so far and the max profit possible at each step.",
    solution: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main() {
    vector<double> prices = {150.0, 148.5, 152.3, 155.0, 153.2,
                             157.8, 160.1, 158.5, 162.0, 165.5};

    cout << "📈 STOCK TRACKER" << endl;
    cout << fixed << setprecision(2);

    cout << "Prices: ";
    for (int i = 0; i < (int)prices.size(); i++) cout << prices[i] << " ";
    cout << endl;

    double minPrice = prices[0], maxPrice = prices[0];
    int minDay = 0, maxDay = 0;
    for (int i = 1; i < (int)prices.size(); i++) {
        if (prices[i] < minPrice) { minPrice = prices[i]; minDay = i; }
        if (prices[i] > maxPrice) { maxPrice = prices[i]; maxDay = i; }
    }

    vector<double> changes;
    for (int i = 0; i < (int)prices.size() - 1; i++) {
        changes.push_back(prices[i + 1] - prices[i]);
    }

    double bestProfit = 0.0;
    double minSoFar = prices[0];
    for (int i = 1; i < (int)prices.size(); i++) {
        double profit = prices[i] - minSoFar;
        if (profit > bestProfit) bestProfit = profit;
        if (prices[i] < minSoFar) minSoFar = prices[i];
    }

    cout << "Min: $" << minPrice << " (day " << minDay << ")" << endl;
    cout << "Max: $" << maxPrice << " (day " << maxDay << ")" << endl;
    cout << "Best profit: $" << bestProfit << endl;

    return 0;
}`,
    expectedOutput: `📈 STOCK TRACKER
Prices: 150.00 148.50 152.30 155.00 153.20 157.80 160.10 158.50 162.00 165.50 
Min: $148.50 (day 1)
Max: $165.50 (day 9)
Best profit: $17.00`,
    tags: ["project", "cpp-area-3", "simulation", "vectors"],
    fromLesson: "cpp-3-3",
    language: "cpp",
    category: "Simulations",
    categoryZh: "模拟",
  },

  // cpp-3-4: References & Pass-by
  {
    id: "proj-cpp-3-4-1",
    title: "🔄 Swap Shop Game",
    description: "Master references with a trading game! Swap items between players using pass-by-reference functions.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// TODO: Write a swap function using references
// void swapItems(string &a, string &b)
void swapItems(string &a, string &b) {
    // TODO: swap the values of a and b
}

// TODO: Write a function that doubles a value by reference
void doubleValue(int &val) {
    // TODO: multiply val by 2
}

// TODO: Write a function that returns value AND modifies by reference
int addAndTrack(int a, int b, int &total) {
    int sum = a + b;
    // TODO: add sum to total (running total)
    return sum;
}

int main() {
    cout << "🔄 SWAP SHOP GAME" << endl;

    string player1Item = "Sword";
    string player2Item = "Shield";

    cout << "Before trade:" << endl;
    cout << "Player 1: " << player1Item << endl;
    cout << "Player 2: " << player2Item << endl;

    swapItems(player1Item, player2Item);

    cout << "After trade:" << endl;
    cout << "Player 1: " << player1Item << endl;
    cout << "Player 2: " << player2Item << endl;

    int coins = 10;
    cout << "\\nCoins: " << coins << endl;
    doubleValue(coins);
    cout << "After doubling: " << coins << endl;

    int runningTotal = 0;
    cout << "\\nQuest rewards:" << endl;
    int r1 = addAndTrack(5, 3, runningTotal);
    cout << "Quest 1: +" << r1 << " (total: " << runningTotal << ")" << endl;
    int r2 = addAndTrack(10, 7, runningTotal);
    cout << "Quest 2: +" << r2 << " (total: " << runningTotal << ")" << endl;

    return 0;
}`,
    hint: "Swap uses a temp variable: temp = a; a = b; b = temp. Pass-by-reference means the original variable is modified. The & in the parameter makes it a reference.",
    solution: `#include <iostream>
#include <string>
using namespace std;

void swapItems(string &a, string &b) {
    string temp = a;
    a = b;
    b = temp;
}

void doubleValue(int &val) {
    val *= 2;
}

int addAndTrack(int a, int b, int &total) {
    int sum = a + b;
    total += sum;
    return sum;
}

int main() {
    cout << "🔄 SWAP SHOP GAME" << endl;

    string player1Item = "Sword";
    string player2Item = "Shield";

    cout << "Before trade:" << endl;
    cout << "Player 1: " << player1Item << endl;
    cout << "Player 2: " << player2Item << endl;

    swapItems(player1Item, player2Item);

    cout << "After trade:" << endl;
    cout << "Player 1: " << player1Item << endl;
    cout << "Player 2: " << player2Item << endl;

    int coins = 10;
    cout << "\\nCoins: " << coins << endl;
    doubleValue(coins);
    cout << "After doubling: " << coins << endl;

    int runningTotal = 0;
    cout << "\\nQuest rewards:" << endl;
    int r1 = addAndTrack(5, 3, runningTotal);
    cout << "Quest 1: +" << r1 << " (total: " << runningTotal << ")" << endl;
    int r2 = addAndTrack(10, 7, runningTotal);
    cout << "Quest 2: +" << r2 << " (total: " << runningTotal << ")" << endl;

    return 0;
}`,
    expectedOutput: `🔄 SWAP SHOP GAME
Before trade:
Player 1: Sword
Player 2: Shield
After trade:
Player 1: Shield
Player 2: Sword

Coins: 10
After doubling: 20

Quest rewards:
Quest 1: +8 (total: 8)
Quest 2: +17 (total: 25)`,
    tags: ["project", "cpp-area-3", "references"],
    fromLesson: "cpp-3-4",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },

  // ─── Area 4: OOP & Memory ────────────────────────────────

  // cpp-4-1: Pointers
  {
    id: "proj-cpp-4-1-1",
    title: "🗺️ Treasure Map with Pointers",
    description: "Navigate a treasure map using pointers! Follow pointer chains to find hidden treasure. Learn addresses and dereferencing.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
using namespace std;

int main() {
    // The treasure map: values at locations
    int location1 = 10;
    int location2 = 20;
    int location3 = 50; // THE TREASURE!
    int location4 = 5;

    cout << "🗺️ TREASURE MAP" << endl;

    // TODO: Create pointers to each location
    int* clue1 = &location1;
    // TODO: Create clue2, clue3, clue4

    // TODO: Print addresses (the "map coordinates")
    cout << "Clue 1 points to address: " << clue1 << endl;
    cout << "Value at clue 1: " << *clue1 << endl;

    // TODO: Follow the clues - dereference each pointer
    // The treasure is the location with value >= 50

    // TODO: Use pointer arithmetic or reassignment
    // Point clue1 to different locations to "search"
    int* searchPtr = clue1;
    cout << "\\nSearching..." << endl;
    cout << "Location 1: " << *searchPtr << " gold";
    cout << (*searchPtr >= 50 ? " TREASURE!" : " - keep looking") << endl;

    // TODO: Move pointer to next locations and check
    // searchPtr = &location2; etc.

    // TODO: Swap two values using pointers
    cout << "\\nBefore swap: loc1=" << location1 << " loc2=" << location2 << endl;
    // TODO: swap *ptr1 and *ptr2
    cout << "After swap: loc1=" << location1 << " loc2=" << location2 << endl;

    return 0;
}`,
    hint: "Create a pointer with int* ptr = &variable. Dereference with *ptr to get the value. To swap via pointers: int temp = *a; *a = *b; *b = temp.",
    solution: `#include <iostream>
using namespace std;

int main() {
    int location1 = 10;
    int location2 = 20;
    int location3 = 50;
    int location4 = 5;

    cout << "🗺️ TREASURE MAP" << endl;

    int* clue1 = &location1;
    int* clue2 = &location2;
    int* clue3 = &location3;
    int* clue4 = &location4;

    cout << "Clue 1 points to address: " << clue1 << endl;
    cout << "Value at clue 1: " << *clue1 << endl;

    int* searchPtr = clue1;
    cout << "\\nSearching..." << endl;
    cout << "Location 1: " << *searchPtr << " gold";
    cout << (*searchPtr >= 50 ? " TREASURE!" : " - keep looking") << endl;

    searchPtr = clue2;
    cout << "Location 2: " << *searchPtr << " gold";
    cout << (*searchPtr >= 50 ? " TREASURE!" : " - keep looking") << endl;

    searchPtr = clue3;
    cout << "Location 3: " << *searchPtr << " gold";
    cout << (*searchPtr >= 50 ? " TREASURE!" : " - keep looking") << endl;

    cout << "\\nBefore swap: loc1=" << location1 << " loc2=" << location2 << endl;
    int temp = *clue1;
    *clue1 = *clue2;
    *clue2 = temp;
    cout << "After swap: loc1=" << location1 << " loc2=" << location2 << endl;

    return 0;
}`,
    tags: ["project", "cpp-area-4", "pointers"],
    fromLesson: "cpp-4-1",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },
  {
    id: "proj-cpp-4-1-2",
    title: "🔗 Linked Clue Chain",
    description: "Build a simple linked structure using pointers! Each clue points to the next in a chain to solve a mystery.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

struct Clue {
    string message;
    int value;
    Clue* next; // pointer to next clue!
};

int main() {
    // TODO: Create clue nodes
    Clue clue1, clue2, clue3;

    clue1.message = "Look under the bridge";
    clue1.value = 10;
    clue1.next = &clue2; // points to next clue

    // TODO: Set up clue2 and clue3
    // clue3.next should be nullptr (end of chain)

    // TODO: Follow the chain using a pointer
    cout << "🔗 CLUE CHAIN" << endl;
    Clue* current = &clue1;
    int totalValue = 0;
    int clueNum = 1;

    while (current != nullptr) {
        cout << "Clue " << clueNum << ": " << current->message;
        cout << " [" << current->value << " pts]" << endl;
        totalValue += current->value;
        // TODO: move to next clue
        clueNum++;
    }

    cout << "Total clue value: " << totalValue << endl;

    return 0;
}`,
    hint: "Use -> to access members through a pointer. Move to next with: current = current->next. Set the last clue's next to nullptr.",
    solution: `#include <iostream>
#include <string>
using namespace std;

struct Clue {
    string message;
    int value;
    Clue* next;
};

int main() {
    Clue clue1, clue2, clue3;

    clue1.message = "Look under the bridge";
    clue1.value = 10;
    clue1.next = &clue2;

    clue2.message = "Check the old oak tree";
    clue2.value = 25;
    clue2.next = &clue3;

    clue3.message = "X marks the spot!";
    clue3.value = 100;
    clue3.next = nullptr;

    cout << "🔗 CLUE CHAIN" << endl;
    Clue* current = &clue1;
    int totalValue = 0;
    int clueNum = 1;

    while (current != nullptr) {
        cout << "Clue " << clueNum << ": " << current->message;
        cout << " [" << current->value << " pts]" << endl;
        totalValue += current->value;
        current = current->next;
        clueNum++;
    }

    cout << "Total clue value: " << totalValue << endl;

    return 0;
}`,
    expectedOutput: `🔗 CLUE CHAIN
Clue 1: Look under the bridge [10 pts]
Clue 2: Check the old oak tree [25 pts]
Clue 3: X marks the spot! [100 pts]
Total clue value: 135`,
    tags: ["project", "cpp-area-4", "pointers"],
    fromLesson: "cpp-4-1",
    language: "cpp",
    category: "Data",
    categoryZh: "数据",
  },

  // cpp-4-2: Classes & Objects
  {
    id: "proj-cpp-4-2-1",
    title: "🐾 Virtual Pet Simulator",
    description: "Create a virtual pet class with hunger, happiness, and energy! Feed it, play with it, and keep it alive.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

class Pet {
private:
    string name;
    int hunger;    // 0-100 (0 = full, 100 = starving)
    int happiness; // 0-100
    int energy;    // 0-100

public:
    // TODO: Constructor
    Pet(string n) {
        name = n;
        hunger = 50;
        happiness = 50;
        energy = 50;
    }

    // TODO: Feed method - decreases hunger, slight happiness boost
    void feed() {
        // TODO: decrease hunger by 20 (min 0)
        // TODO: increase happiness by 5 (max 100)
    }

    // TODO: Play method - increases happiness, increases hunger, decreases energy
    void play() {
        // TODO
    }

    // TODO: Sleep method - restores energy, slight hunger increase
    void sleep() {
        // TODO
    }

    // TODO: Status display method
    void status() {
        cout << "🐾 " << name << "'s Status:" << endl;
        cout << "  Hunger: " << hunger << "/100" << endl;
        cout << "  Happy:  " << happiness << "/100" << endl;
        cout << "  Energy: " << energy << "/100" << endl;
    }

    // TODO: isAlive check (hunger < 100 and happiness > 0)
    bool isAlive() {
        return true; // TODO: fix
    }
};

int main() {
    Pet myPet("Buddy");
    cout << "🐾 VIRTUAL PET SIMULATOR" << endl;

    myPet.status();
    myPet.feed();
    cout << "\\n*feeds Buddy*" << endl;
    myPet.status();

    myPet.play();
    cout << "\\n*plays with Buddy*" << endl;
    myPet.status();

    myPet.sleep();
    cout << "\\n*Buddy sleeps*" << endl;
    myPet.status();

    return 0;
}`,
    hint: "In feed(): hunger = max(0, hunger - 20). In play(): happiness += 20, hunger += 10, energy -= 15. Use if statements to keep values in 0-100 range.",
    solution: `#include <iostream>
#include <string>
using namespace std;

class Pet {
private:
    string name;
    int hunger;
    int happiness;
    int energy;

    int clamp(int val, int lo, int hi) {
        if (val < lo) return lo;
        if (val > hi) return hi;
        return val;
    }

public:
    Pet(string n) : name(n), hunger(50), happiness(50), energy(50) {}

    void feed() {
        hunger = clamp(hunger - 20, 0, 100);
        happiness = clamp(happiness + 5, 0, 100);
    }

    void play() {
        happiness = clamp(happiness + 20, 0, 100);
        hunger = clamp(hunger + 10, 0, 100);
        energy = clamp(energy - 15, 0, 100);
    }

    void sleep() {
        energy = clamp(energy + 30, 0, 100);
        hunger = clamp(hunger + 5, 0, 100);
    }

    void status() {
        cout << "🐾 " << name << "'s Status:" << endl;
        cout << "  Hunger: " << hunger << "/100" << endl;
        cout << "  Happy:  " << happiness << "/100" << endl;
        cout << "  Energy: " << energy << "/100" << endl;
    }

    bool isAlive() {
        return hunger < 100 && happiness > 0;
    }
};

int main() {
    Pet myPet("Buddy");
    cout << "🐾 VIRTUAL PET SIMULATOR" << endl;

    myPet.status();
    myPet.feed();
    cout << "\\n*feeds Buddy*" << endl;
    myPet.status();

    myPet.play();
    cout << "\\n*plays with Buddy*" << endl;
    myPet.status();

    myPet.sleep();
    cout << "\\n*Buddy sleeps*" << endl;
    myPet.status();

    return 0;
}`,
    expectedOutput: `🐾 VIRTUAL PET SIMULATOR
🐾 Buddy's Status:
  Hunger: 50/100
  Happy:  50/100
  Energy: 50/100

*feeds Buddy*
🐾 Buddy's Status:
  Hunger: 30/100
  Happy:  55/100
  Energy: 50/100

*plays with Buddy*
🐾 Buddy's Status:
  Hunger: 40/100
  Happy:  75/100
  Energy: 35/100

*Buddy sleeps*
🐾 Buddy's Status:
  Hunger: 45/100
  Happy:  75/100
  Energy: 65/100`,
    tags: ["project", "cpp-area-4", "classes", "simulation"],
    fromLesson: "cpp-4-2",
    language: "cpp",
    category: "Simulations",
    categoryZh: "模拟",
  },
  {
    id: "proj-cpp-4-2-2",
    title: "🏦 Bank Account Class",
    description: "Create a BankAccount class with deposit, withdraw, and interest! Practice encapsulation with private data and public methods.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

class BankAccount {
private:
    string owner;
    double balance;
    int transactionCount;

public:
    // TODO: Constructor
    BankAccount(string name, double initial) {
        // TODO
    }

    // TODO: Deposit method (returns true if valid amount)
    bool deposit(double amount) {
        return false; // TODO
    }

    // TODO: Withdraw method (returns true if sufficient funds)
    bool withdraw(double amount) {
        return false; // TODO
    }

    // TODO: Apply interest (multiply balance by (1 + rate))
    void applyInterest(double rate) {
        // TODO
    }

    // TODO: Getter for balance
    double getBalance() { return 0; } // TODO

    // TODO: Print statement
    void printStatement() {
        cout << "=== Account Statement ===" << endl;
        // TODO: print owner, balance, transaction count
    }
};

int main() {
    BankAccount acc("Alex", 1000.0);
    cout << "🏦 BANK SYSTEM" << endl;
    cout << fixed << setprecision(2);

    acc.printStatement();
    acc.deposit(500.0);
    cout << "Deposited $500" << endl;
    acc.withdraw(200.0);
    cout << "Withdrew $200" << endl;
    acc.applyInterest(0.05);
    cout << "Applied 5% interest" << endl;
    acc.printStatement();

    return 0;
}`,
    hint: "In deposit: add amount to balance if amount > 0. In withdraw: subtract if amount <= balance. applyInterest: balance *= (1 + rate). Increment transactionCount in each method.",
    solution: `#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

class BankAccount {
private:
    string owner;
    double balance;
    int transactionCount;

public:
    BankAccount(string name, double initial) : owner(name), balance(initial), transactionCount(0) {}

    bool deposit(double amount) {
        if (amount <= 0) return false;
        balance += amount;
        transactionCount++;
        return true;
    }

    bool withdraw(double amount) {
        if (amount <= 0 || amount > balance) return false;
        balance -= amount;
        transactionCount++;
        return true;
    }

    void applyInterest(double rate) {
        balance *= (1 + rate);
        transactionCount++;
    }

    double getBalance() { return balance; }

    void printStatement() {
        cout << "=== Account Statement ===" << endl;
        cout << "Owner: " << owner << endl;
        cout << "Balance: $" << balance << endl;
        cout << "Transactions: " << transactionCount << endl;
    }
};

int main() {
    BankAccount acc("Alex", 1000.0);
    cout << "🏦 BANK SYSTEM" << endl;
    cout << fixed << setprecision(2);

    acc.printStatement();
    acc.deposit(500.0);
    cout << "Deposited $500" << endl;
    acc.withdraw(200.0);
    cout << "Withdrew $200" << endl;
    acc.applyInterest(0.05);
    cout << "Applied 5% interest" << endl;
    acc.printStatement();

    return 0;
}`,
    expectedOutput: `🏦 BANK SYSTEM
=== Account Statement ===
Owner: Alex
Balance: $1000.00
Transactions: 0
Deposited $500
Withdrew $200
Applied 5% interest
=== Account Statement ===
Owner: Alex
Balance: $1365.00
Transactions: 3`,
    tags: ["project", "cpp-area-4", "classes"],
    fromLesson: "cpp-4-2",
    language: "cpp",
    category: "Data",
    categoryZh: "数据",
  },

  // cpp-4-3: Inheritance & Polymorphism
  {
    id: "proj-cpp-4-3-1",
    title: "⚔️ RPG Class System",
    description: "Build an RPG with inheritance! Base Character class, with Warrior, Mage, and Rogue subclasses, each with unique abilities.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

class Character {
protected:
    string name;
    int hp, attack, defense;
public:
    Character(string n, int h, int a, int d) : name(n), hp(h), attack(a), defense(d) {}

    // TODO: Make this virtual for polymorphism
    virtual void specialAbility() {
        cout << name << " does nothing special." << endl;
    }

    void showStats() {
        cout << name << " - HP:" << hp << " ATK:" << attack << " DEF:" << defense << endl;
    }

    string getName() { return name; }
    int getHP() { return hp; }
    void takeDamage(int dmg) {
        int actual = dmg - defense;
        if (actual < 0) actual = 0;
        hp -= actual;
        cout << name << " takes " << actual << " damage! (HP: " << hp << ")" << endl;
    }
};

// TODO: Create Warrior class that inherits from Character
// Special ability: "Shield Bash" - extra defense
class Warrior : public Character {
public:
    Warrior(string n) : Character(n, 120, 20, 15) {}
    // TODO: Override specialAbility
};

// TODO: Create Mage class
// Special ability: "Fireball" - big attack
class Mage : public Character {
public:
    Mage(string n) : Character(n, 80, 35, 5) {}
    // TODO: Override specialAbility
};

// TODO: Create Rogue class
// Special ability: "Backstab" - critical hit

int main() {
    cout << "⚔️ RPG CLASS SYSTEM" << endl;

    Warrior w("Thor");
    Mage m("Gandalf");

    w.showStats();
    m.showStats();

    w.specialAbility();
    m.specialAbility();

    // TODO: Use polymorphism - array of Character pointers
    // Character* party[3] = { &w, &m, &r };
    // for each, call specialAbility()

    return 0;
}`,
    hint: "Use 'virtual' in base class and 'override' in derived classes. Each subclass constructor calls Character() with different stats. Use Character* for polymorphism.",
    solution: `#include <iostream>
#include <string>
using namespace std;

class Character {
protected:
    string name;
    int hp, attack, defense;
public:
    Character(string n, int h, int a, int d) : name(n), hp(h), attack(a), defense(d) {}

    virtual void specialAbility() {
        cout << name << " does nothing special." << endl;
    }

    void showStats() {
        cout << name << " - HP:" << hp << " ATK:" << attack << " DEF:" << defense << endl;
    }

    string getName() { return name; }
    int getHP() { return hp; }
    void takeDamage(int dmg) {
        int actual = dmg - defense;
        if (actual < 0) actual = 0;
        hp -= actual;
        cout << name << " takes " << actual << " damage! (HP: " << hp << ")" << endl;
    }
    virtual ~Character() {}
};

class Warrior : public Character {
public:
    Warrior(string n) : Character(n, 120, 20, 15) {}
    void specialAbility() override {
        defense += 10;
        cout << name << " uses Shield Bash! DEF +" << 10 << " (now " << defense << ")" << endl;
    }
};

class Mage : public Character {
public:
    Mage(string n) : Character(n, 80, 35, 5) {}
    void specialAbility() override {
        cout << name << " casts Fireball! 🔥 50 damage!" << endl;
    }
};

class Rogue : public Character {
public:
    Rogue(string n) : Character(n, 90, 30, 8) {}
    void specialAbility() override {
        cout << name << " uses Backstab! 💀 Critical 60 damage!" << endl;
    }
};

int main() {
    cout << "⚔️ RPG CLASS SYSTEM" << endl;

    Warrior w("Thor");
    Mage m("Gandalf");
    Rogue r("Shadow");

    w.showStats();
    m.showStats();
    r.showStats();

    cout << "\\n--- Special Abilities ---" << endl;
    Character* party[3] = { &w, &m, &r };
    for (int i = 0; i < 3; i++) {
        party[i]->specialAbility();
    }

    return 0;
}`,
    expectedOutput: `⚔️ RPG CLASS SYSTEM
Thor - HP:120 ATK:20 DEF:15
Gandalf - HP:80 ATK:35 DEF:5
Shadow - HP:90 ATK:30 DEF:8

--- Special Abilities ---
Thor uses Shield Bash! DEF +10 (now 25)
Gandalf casts Fireball! 🔥 50 damage!
Shadow uses Backstab! 💀 Critical 60 damage!`,
    tags: ["project", "cpp-area-4", "inheritance", "rpg"],
    fromLesson: "cpp-4-3",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },

  // cpp-4-4: Memory Management
  {
    id: "proj-cpp-4-4-1",
    title: "🏗️ Dynamic Army Builder",
    description: "Build an army using new/delete! Create soldiers dynamically, manage memory, and use smart pointers for safety.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <string>
#include <memory>
using namespace std;

class Soldier {
public:
    string name;
    int power;
    Soldier(string n, int p) : name(n), power(p) {
        cout << name << " recruited! (power: " << power << ")" << endl;
    }
    ~Soldier() {
        cout << name << " dismissed." << endl;
    }
};

int main() {
    cout << "🏗️ DYNAMIC ARMY BUILDER" << endl;

    // TODO: Create soldiers with new
    Soldier* s1 = new Soldier("Knight", 30);
    // TODO: Create s2, s3

    // TODO: Calculate total army power
    int totalPower = s1->power;
    cout << "Army power: " << totalPower << endl;

    // TODO: Delete soldiers (free memory)
    delete s1;
    // TODO: delete others

    // TODO: Now use smart pointers (no manual delete needed!)
    cout << "\\n--- Smart Pointer Army ---" << endl;
    // auto sp1 = make_unique<Soldier>("Paladin", 50);
    // TODO: create more with make_unique

    cout << "\\nSmart pointers auto-cleanup!" << endl;
    return 0;
}`,
    hint: "Use new to allocate, delete to free. Smart pointers: auto ptr = make_unique<Soldier>(args). They auto-delete when going out of scope.",
    solution: `#include <iostream>
#include <string>
#include <memory>
using namespace std;

class Soldier {
public:
    string name;
    int power;
    Soldier(string n, int p) : name(n), power(p) {
        cout << name << " recruited! (power: " << power << ")" << endl;
    }
    ~Soldier() {
        cout << name << " dismissed." << endl;
    }
};

int main() {
    cout << "🏗️ DYNAMIC ARMY BUILDER" << endl;

    Soldier* s1 = new Soldier("Knight", 30);
    Soldier* s2 = new Soldier("Archer", 25);
    Soldier* s3 = new Soldier("Mage", 40);

    int totalPower = s1->power + s2->power + s3->power;
    cout << "Army power: " << totalPower << endl;

    delete s1;
    delete s2;
    delete s3;

    cout << "\\n--- Smart Pointer Army ---" << endl;
    {
        auto sp1 = make_unique<Soldier>("Paladin", 50);
        auto sp2 = make_unique<Soldier>("Ranger", 35);
        cout << "Smart army power: " << sp1->power + sp2->power << endl;
    }

    cout << "\\nSmart pointers auto-cleanup!" << endl;
    return 0;
}`,
    expectedOutput: `🏗️ DYNAMIC ARMY BUILDER
Knight recruited! (power: 30)
Archer recruited! (power: 25)
Mage recruited! (power: 40)
Army power: 95
Knight dismissed.
Archer dismissed.
Mage dismissed.

--- Smart Pointer Army ---
Paladin recruited! (power: 50)
Ranger recruited! (power: 35)
Smart army power: 85
Ranger dismissed.
Paladin dismissed.

Smart pointers auto-cleanup!`,
    tags: ["project", "cpp-area-4", "memory"],
    fromLesson: "cpp-4-4",
    language: "cpp",
    category: "Games",
    categoryZh: "游戏",
  },

  // ─── Area 5: STL & Templates ────────────────────────────────

  // cpp-5-1: STL Containers
  {
    id: "proj-cpp-5-1-1",
    title: "📖 Word Frequency Counter",
    description: "Use map to count word frequencies in text! Build a vocabulary analyzer with sorted output.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <map>
#include <set>
#include <string>
#include <vector>
using namespace std;

int main() {
    vector<string> words = {"the", "cat", "sat", "on", "the", "mat",
                            "the", "cat", "ate", "the", "rat", "on", "the", "mat"};

    cout << "📖 WORD FREQUENCY COUNTER" << endl;

    // TODO: Use a map to count word frequencies
    map<string, int> freq;
    for (int i = 0; i < (int)words.size(); i++) {
        // TODO: increment freq[words[i]]
    }

    // TODO: Print all words and their counts
    cout << "\\nWord frequencies:" << endl;
    for (auto it = freq.begin(); it != freq.end(); it++) {
        // TODO: print word and count
    }

    // TODO: Use a set to find unique words
    set<string> unique(words.begin(), words.end());
    cout << "\\nTotal words: " << words.size() << endl;
    cout << "Unique words: " << unique.size() << endl;

    // TODO: Find the most common word
    string mostCommon = "";
    int maxCount = 0;
    // TODO: iterate freq map

    cout << "Most common: \\"" << mostCommon << "\\" (" << maxCount << " times)" << endl;

    return 0;
}`,
    hint: "freq[word]++ increments the count. Iterate map with auto& pair or it->first/it->second. Set automatically removes duplicates.",
    solution: `#include <iostream>
#include <map>
#include <set>
#include <string>
#include <vector>
using namespace std;

int main() {
    vector<string> words = {"the", "cat", "sat", "on", "the", "mat",
                            "the", "cat", "ate", "the", "rat", "on", "the", "mat"};

    cout << "📖 WORD FREQUENCY COUNTER" << endl;

    map<string, int> freq;
    for (int i = 0; i < (int)words.size(); i++) {
        freq[words[i]]++;
    }

    cout << "\\nWord frequencies:" << endl;
    for (auto it = freq.begin(); it != freq.end(); it++) {
        cout << "  " << it->first << ": " << it->second << endl;
    }

    set<string> unique(words.begin(), words.end());
    cout << "\\nTotal words: " << words.size() << endl;
    cout << "Unique words: " << unique.size() << endl;

    string mostCommon = "";
    int maxCount = 0;
    for (auto it = freq.begin(); it != freq.end(); it++) {
        if (it->second > maxCount) {
            maxCount = it->second;
            mostCommon = it->first;
        }
    }

    cout << "Most common: \\"" << mostCommon << "\\" (" << maxCount << " times)" << endl;

    return 0;
}`,
    expectedOutput: `📖 WORD FREQUENCY COUNTER

Word frequencies:
  ate: 1
  cat: 2
  mat: 2
  on: 2
  rat: 1
  sat: 1
  the: 5

Total words: 14
Unique words: 7
Most common: "the" (5 times)`,
    tags: ["project", "cpp-area-5", "stl", "map"],
    fromLesson: "cpp-5-1",
    language: "cpp",
    category: "Data",
    categoryZh: "数据",
  },
  {
    id: "proj-cpp-5-1-2",
    title: "🏫 Student Database",
    description: "Build a student database using maps and sets! Store grades, find honor roll students, and calculate statistics.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <map>
#include <set>
#include <string>
#include <vector>
#include <iomanip>
using namespace std;

int main() {
    // Student name -> grades
    map<string, vector<int>> students;
    students["Alice"] = {95, 88, 92, 97};
    students["Bob"] = {72, 85, 68, 79};
    students["Carol"] = {90, 91, 93, 95};
    students["Dave"] = {60, 55, 70, 65};

    cout << "🏫 STUDENT DATABASE" << endl;
    cout << fixed << setprecision(1);

    // TODO: Calculate and print each student's average
    set<string> honorRoll; // 90+ average

    for (auto it = students.begin(); it != students.end(); it++) {
        string name = it->first;
        vector<int>& grades = it->second;

        double sum = 0;
        // TODO: calculate average
        for (int i = 0; i < (int)grades.size(); i++) {
            sum += grades[i];
        }
        double avg = sum / grades.size();

        cout << name << ": avg = " << avg << endl;

        // TODO: Add to honor roll if avg >= 90
    }

    // TODO: Print honor roll
    cout << "\\nHonor Roll:" << endl;
    for (auto it = honorRoll.begin(); it != honorRoll.end(); it++) {
        cout << "  ⭐ " << *it << endl;
    }

    return 0;
}`,
    hint: "Use map iterator->first for key, ->second for value. Sum grades with a loop, divide by size(). If avg >= 90, insert name into set.",
    solution: `#include <iostream>
#include <map>
#include <set>
#include <string>
#include <vector>
#include <iomanip>
using namespace std;

int main() {
    map<string, vector<int>> students;
    students["Alice"] = {95, 88, 92, 97};
    students["Bob"] = {72, 85, 68, 79};
    students["Carol"] = {90, 91, 93, 95};
    students["Dave"] = {60, 55, 70, 65};

    cout << "🏫 STUDENT DATABASE" << endl;
    cout << fixed << setprecision(1);

    set<string> honorRoll;

    for (auto it = students.begin(); it != students.end(); it++) {
        string name = it->first;
        vector<int>& grades = it->second;

        double sum = 0;
        for (int i = 0; i < (int)grades.size(); i++) {
            sum += grades[i];
        }
        double avg = sum / grades.size();

        cout << name << ": avg = " << avg << endl;

        if (avg >= 90.0) {
            honorRoll.insert(name);
        }
    }

    cout << "\\nHonor Roll:" << endl;
    for (auto it = honorRoll.begin(); it != honorRoll.end(); it++) {
        cout << "  ⭐ " << *it << endl;
    }

    return 0;
}`,
    expectedOutput: `🏫 STUDENT DATABASE
Alice: avg = 93.0
Bob: avg = 76.0
Carol: avg = 92.2
Dave: avg = 62.5

Honor Roll:
  ⭐ Alice
  ⭐ Carol`,
    tags: ["project", "cpp-area-5", "stl", "map"],
    fromLesson: "cpp-5-1",
    language: "cpp",
    category: "Data",
    categoryZh: "数据",
  },

  // cpp-5-2: Algorithms
  {
    id: "proj-cpp-5-2-1",
    title: "🏆 Leaderboard System",
    description: "Build a game leaderboard using STL algorithms! Sort players, find top scores, transform names, and filter results.",
    difficulty: 2,
    gradeRange: [6, 12],
    skillLevel: "intermediate",
    starterCode: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

struct Player {
    string name;
    int score;
};

int main() {
    vector<Player> players = {
        {"Alice", 9500}, {"Bob", 7200}, {"Carol", 8800},
        {"Dave", 6100}, {"Eve", 9900}, {"Frank", 5500}
    };

    cout << "🏆 LEADERBOARD" << endl;

    // TODO: Sort players by score (highest first)
    // Use sort with a lambda comparator
    sort(players.begin(), players.end(), [](const Player& a, const Player& b) {
        return a.score > b.score; // TODO: verify this sorts descending
    });

    // TODO: Print sorted leaderboard
    cout << "\\nRankings:" << endl;
    for (int i = 0; i < (int)players.size(); i++) {
        cout << "#" << (i + 1) << " " << players[i].name << " - " << players[i].score << endl;
    }

    // TODO: Find a specific player using find_if
    // auto it = find_if(players.begin(), players.end(), ...);

    // TODO: Count players with score > 8000
    int highScorers = 0;
    // Use count_if

    // TODO: Check if any player has a perfect score (10000)
    // Use any_of

    cout << "\\nPlayers above 8000: " << highScorers << endl;

    return 0;
}`,
    hint: "sort() with lambda for custom comparison. find_if with lambda predicate. count_if returns count matching condition. any_of checks if any element matches.",
    solution: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

struct Player {
    string name;
    int score;
};

int main() {
    vector<Player> players = {
        {"Alice", 9500}, {"Bob", 7200}, {"Carol", 8800},
        {"Dave", 6100}, {"Eve", 9900}, {"Frank", 5500}
    };

    cout << "🏆 LEADERBOARD" << endl;

    sort(players.begin(), players.end(), [](const Player& a, const Player& b) {
        return a.score > b.score;
    });

    cout << "\\nRankings:" << endl;
    for (int i = 0; i < (int)players.size(); i++) {
        cout << "#" << (i + 1) << " " << players[i].name << " - " << players[i].score << endl;
    }

    auto it = find_if(players.begin(), players.end(), [](const Player& p) {
        return p.name == "Bob";
    });
    if (it != players.end()) {
        cout << "\\nFound Bob with score: " << it->score << endl;
    }

    int highScorers = count_if(players.begin(), players.end(), [](const Player& p) {
        return p.score > 8000;
    });

    bool hasPerfect = any_of(players.begin(), players.end(), [](const Player& p) {
        return p.score >= 10000;
    });

    cout << "\\nPlayers above 8000: " << highScorers << endl;
    cout << "Perfect score exists: " << (hasPerfect ? "Yes" : "No") << endl;

    return 0;
}`,
    expectedOutput: `🏆 LEADERBOARD

Rankings:
#1 Eve - 9900
#2 Alice - 9500
#3 Carol - 8800
#4 Bob - 7200
#5 Dave - 6100
#6 Frank - 5500

Found Bob with score: 7200

Players above 8000: 3
Perfect score exists: No`,
    tags: ["project", "cpp-area-5", "algorithms"],
    fromLesson: "cpp-5-2",
    language: "cpp",
    category: "Data",
    categoryZh: "数据",
  },

  // cpp-5-3: Templates
  {
    id: "proj-cpp-5-3-1",
    title: "📦 Generic Container Box",
    description: "Create template classes and functions! Build a Box<T> that works with any type, and generic utility functions.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

// TODO: Create a template function to find the larger of two values
template <typename T>
T bigger(T a, T b) {
    // TODO: return the larger value
    return a;
}

// TODO: Create a template Box class that holds a value of any type
template <typename T>
class Box {
private:
    T content;
    bool isEmpty;
public:
    Box() : isEmpty(true) {}

    // TODO: Method to put something in the box
    void put(T item) {
        // TODO
    }

    // TODO: Method to get the item
    T get() {
        // TODO
        return content;
    }

    // TODO: Method to check if empty
    bool empty() { return isEmpty; }

    void display() {
        if (isEmpty) cout << "[empty box]" << endl;
        else cout << "[" << content << "]" << endl;
    }
};

int main() {
    cout << "📦 GENERIC CONTAINER BOX" << endl;

    // TODO: Test bigger with different types
    cout << "bigger(3, 7) = " << bigger(3, 7) << endl;
    cout << "bigger(3.14, 2.71) = " << bigger(3.14, 2.71) << endl;

    // TODO: Test Box with different types
    Box<int> intBox;
    intBox.display();
    intBox.put(42);
    intBox.display();

    Box<string> strBox;
    strBox.put("Hello Templates!");
    strBox.display();

    return 0;
}`,
    hint: "Template syntax: template <typename T> before the function/class. The same code works with int, double, string etc. Return a > b ? a : b for bigger.",
    solution: `#include <iostream>
#include <string>
using namespace std;

template <typename T>
T bigger(T a, T b) {
    return a > b ? a : b;
}

template <typename T>
class Box {
private:
    T content;
    bool isEmpty;
public:
    Box() : isEmpty(true) {}

    void put(T item) {
        content = item;
        isEmpty = false;
    }

    T get() { return content; }
    bool empty() { return isEmpty; }

    void display() {
        if (isEmpty) cout << "[empty box]" << endl;
        else cout << "[" << content << "]" << endl;
    }
};

int main() {
    cout << "📦 GENERIC CONTAINER BOX" << endl;

    cout << "bigger(3, 7) = " << bigger(3, 7) << endl;
    cout << "bigger(3.14, 2.71) = " << bigger(3.14, 2.71) << endl;

    Box<int> intBox;
    intBox.display();
    intBox.put(42);
    intBox.display();

    Box<string> strBox;
    strBox.put("Hello Templates!");
    strBox.display();

    return 0;
}`,
    expectedOutput: `📦 GENERIC CONTAINER BOX
bigger(3, 7) = 7
bigger(3.14, 2.71) = 3.14
[empty box]
[42]
[Hello Templates!]`,
    tags: ["project", "cpp-area-5", "templates"],
    fromLesson: "cpp-5-3",
    language: "cpp",
    category: "Data",
    categoryZh: "数据",
  },
  {
    id: "proj-cpp-5-3-2",
    title: "🔧 Template Stack Data Structure",
    description: "Build a generic Stack<T> using templates! Push, pop, peek - works with any type.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <string>
using namespace std;

template <typename T>
class Stack {
private:
    T data[100];
    int topIndex;
public:
    Stack() : topIndex(-1) {}

    // TODO: Push an item onto the stack
    void push(T item) {
        // TODO: increment topIndex, store item
    }

    // TODO: Pop an item (return and remove top)
    T pop() {
        // TODO: return top item, decrement topIndex
        return data[topIndex--];
    }

    // TODO: Peek at top without removing
    T peek() {
        return data[topIndex];
    }

    bool empty() { return topIndex < 0; }
    int size() { return topIndex + 1; }
};

int main() {
    cout << "🔧 TEMPLATE STACK" << endl;

    // Integer stack
    Stack<int> nums;
    nums.push(10);
    nums.push(20);
    nums.push(30);
    cout << "Int stack size: " << nums.size() << endl;
    cout << "Top: " << nums.peek() << endl;
    cout << "Pop: " << nums.pop() << endl;
    cout << "Pop: " << nums.pop() << endl;
    cout << "Size after pops: " << nums.size() << endl;

    // String stack
    cout << "\\nString stack:" << endl;
    Stack<string> words;
    words.push("Hello");
    words.push("World");
    cout << "Top: " << words.peek() << endl;

    return 0;
}`,
    hint: "Push: topIndex++, then data[topIndex] = item. Pop: return data[topIndex], then topIndex--. The template makes it work for any type T.",
    solution: `#include <iostream>
#include <string>
using namespace std;

template <typename T>
class Stack {
private:
    T data[100];
    int topIndex;
public:
    Stack() : topIndex(-1) {}

    void push(T item) {
        data[++topIndex] = item;
    }

    T pop() {
        return data[topIndex--];
    }

    T peek() {
        return data[topIndex];
    }

    bool empty() { return topIndex < 0; }
    int size() { return topIndex + 1; }
};

int main() {
    cout << "🔧 TEMPLATE STACK" << endl;

    Stack<int> nums;
    nums.push(10);
    nums.push(20);
    nums.push(30);
    cout << "Int stack size: " << nums.size() << endl;
    cout << "Top: " << nums.peek() << endl;
    cout << "Pop: " << nums.pop() << endl;
    cout << "Pop: " << nums.pop() << endl;
    cout << "Size after pops: " << nums.size() << endl;

    cout << "\\nString stack:" << endl;
    Stack<string> words;
    words.push("Hello");
    words.push("World");
    cout << "Top: " << words.peek() << endl;

    return 0;
}`,
    expectedOutput: `🔧 TEMPLATE STACK
Int stack size: 3
Top: 30
Pop: 30
Pop: 20
Size after pops: 1

String stack:
Top: World`,
    tags: ["project", "cpp-area-5", "templates"],
    fromLesson: "cpp-5-3",
    language: "cpp",
    category: "Data",
    categoryZh: "数据",
  },

  // ─── Area 6: Problem Solving ────────────────────────────────

  // cpp-6-1: Problem Solving Patterns
  {
    id: "proj-cpp-6-1-1",
    title: "🧩 Pattern Matching Toolkit",
    description: "Apply common problem-solving patterns! Frequency counting, sliding window, and prefix sums on arrays.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main() {
    cout << "🧩 PROBLEM SOLVING PATTERNS" << endl;

    // Pattern 1: Frequency Count
    // Find the most frequent element
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    map<int, int> freq;
    // TODO: count frequencies
    for (int i = 0; i < (int)nums.size(); i++) {
        freq[nums[i]]++;
    }
    // TODO: find the most frequent
    int mostFreq = 0, maxFreqCount = 0;
    // TODO

    cout << "Most frequent: " << mostFreq << " (appears " << maxFreqCount << " times)" << endl;

    // Pattern 2: Prefix Sum
    // Quickly find sum of any subarray
    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    vector<int> prefix(arr.size() + 1, 0);
    // TODO: build prefix sum array
    // prefix[i] = sum of arr[0..i-1]

    // Sum of arr[2..5] = prefix[6] - prefix[2]
    int rangeSum = 0; // TODO
    cout << "Sum of arr[2..5]: " << rangeSum << endl;

    // Pattern 3: Two-pointer check for palindrome
    string word = "racecar";
    bool isPalin = true;
    // TODO: use two pointers from both ends
    cout << "\\"" << word << "\\" is palindrome: " << (isPalin ? "yes" : "no") << endl;

    return 0;
}`,
    hint: "Frequency: iterate map to find max. Prefix sum: prefix[i] = prefix[i-1] + arr[i-1]. Range sum = prefix[right+1] - prefix[left]. Palindrome: compare s[left] and s[right].",
    solution: `#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main() {
    cout << "🧩 PROBLEM SOLVING PATTERNS" << endl;

    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    map<int, int> freq;
    for (int i = 0; i < (int)nums.size(); i++) freq[nums[i]]++;

    int mostFreq = 0, maxFreqCount = 0;
    for (auto it = freq.begin(); it != freq.end(); it++) {
        if (it->second > maxFreqCount) {
            maxFreqCount = it->second;
            mostFreq = it->first;
        }
    }
    cout << "Most frequent: " << mostFreq << " (appears " << maxFreqCount << " times)" << endl;

    vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    vector<int> prefix(arr.size() + 1, 0);
    for (int i = 0; i < (int)arr.size(); i++) {
        prefix[i + 1] = prefix[i] + arr[i];
    }
    int rangeSum = prefix[6] - prefix[2];
    cout << "Sum of arr[2..5]: " << rangeSum << endl;

    string word = "racecar";
    bool isPalin = true;
    int left = 0, right = (int)word.length() - 1;
    while (left < right) {
        if (word[left] != word[right]) { isPalin = false; break; }
        left++;
        right--;
    }
    cout << "\\"" << word << "\\" is palindrome: " << (isPalin ? "yes" : "no") << endl;

    return 0;
}`,
    expectedOutput: `🧩 PROBLEM SOLVING PATTERNS
Most frequent: 5 (appears 3 times)
Sum of arr[2..5]: 18
"racecar" is palindrome: yes`,
    tags: ["project", "cpp-area-6", "patterns"],
    fromLesson: "cpp-6-1",
    language: "cpp",
    category: "Algorithms",
    categoryZh: "算法",
  },
  {
    id: "proj-cpp-6-1-2",
    title: "🏔️ Matrix Explorer",
    description: "Solve 2D array problems! Find paths, calculate sums, and search in a matrix using systematic patterns.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    cout << "🏔️ MATRIX EXPLORER" << endl;

    // 4x4 grid
    vector<vector<int>> grid = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
        {13, 14, 15, 16}
    };

    // TODO: Print the grid nicely
    cout << "Grid:" << endl;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            cout << grid[i][j] << "\\t";
        }
        cout << endl;
    }

    // TODO: Find sum of each row
    cout << "\\nRow sums: ";
    for (int i = 0; i < 4; i++) {
        int rowSum = 0;
        // TODO
        cout << rowSum << " ";
    }
    cout << endl;

    // TODO: Find sum of main diagonal
    int diagSum = 0;
    // TODO: grid[0][0] + grid[1][1] + grid[2][2] + grid[3][3]

    cout << "Diagonal sum: " << diagSum << endl;

    // TODO: Find max element and its position
    int maxVal = grid[0][0];
    int maxR = 0, maxC = 0;
    // TODO

    cout << "Max: " << maxVal << " at (" << maxR << "," << maxC << ")" << endl;

    return 0;
}`,
    hint: "Row sum: inner loop adds grid[i][j]. Diagonal: grid[i][i]. Max: compare all elements tracking position.",
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    cout << "🏔️ MATRIX EXPLORER" << endl;

    vector<vector<int>> grid = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
        {13, 14, 15, 16}
    };

    cout << "Grid:" << endl;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            cout << grid[i][j] << "\\t";
        }
        cout << endl;
    }

    cout << "\\nRow sums: ";
    for (int i = 0; i < 4; i++) {
        int rowSum = 0;
        for (int j = 0; j < 4; j++) rowSum += grid[i][j];
        cout << rowSum << " ";
    }
    cout << endl;

    int diagSum = 0;
    for (int i = 0; i < 4; i++) diagSum += grid[i][i];
    cout << "Diagonal sum: " << diagSum << endl;

    int maxVal = grid[0][0], maxR = 0, maxC = 0;
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            if (grid[i][j] > maxVal) {
                maxVal = grid[i][j]; maxR = i; maxC = j;
            }
        }
    }
    cout << "Max: " << maxVal << " at (" << maxR << "," << maxC << ")" << endl;

    return 0;
}`,
    expectedOutput: `🏔️ MATRIX EXPLORER
Grid:
1\t2\t3\t4\t
5\t6\t7\t8\t
9\t10\t11\t12\t
13\t14\t15\t16\t

Row sums: 10 26 42 58 
Diagonal sum: 34
Max: 16 at (3,3)`,
    tags: ["project", "cpp-area-6", "matrix"],
    fromLesson: "cpp-6-1",
    language: "cpp",
    category: "Algorithms",
    categoryZh: "算法",
  },

  // cpp-6-2: Classic Algorithms
  {
    id: "proj-cpp-6-2-1",
    title: "🔍 Binary Search Detective",
    description: "Implement binary search to find targets in sorted arrays! Compare with linear search to see the speed difference.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <vector>
using namespace std;

// TODO: Implement binary search
// Returns index of target, or -1 if not found
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = (int)arr.size() - 1;
    int steps = 0;

    while (left <= right) {
        steps++;
        int mid = left + (right - left) / 2;
        // TODO: check if arr[mid] == target
        // TODO: if target < arr[mid], search left half
        // TODO: if target > arr[mid], search right half
    }

    cout << "(binary: " << steps << " steps) ";
    return -1; // not found
}

// Linear search for comparison
int linearSearch(vector<int>& arr, int target) {
    int steps = 0;
    for (int i = 0; i < (int)arr.size(); i++) {
        steps++;
        if (arr[i] == target) {
            cout << "(linear: " << steps << " steps) ";
            return i;
        }
    }
    cout << "(linear: " << steps << " steps) ";
    return -1;
}

int main() {
    cout << "🔍 BINARY SEARCH DETECTIVE" << endl;

    vector<int> arr;
    for (int i = 0; i < 100; i++) arr.push_back(i * 3); // 0,3,6,...,297

    int targets[] = {42, 150, 297, 999};
    for (int t = 0; t < 4; t++) {
        cout << "\\nSearching for " << targets[t] << ":" << endl;
        cout << "  Linear: idx=" << linearSearch(arr, targets[t]) << endl;
        cout << "  Binary: idx=" << binarySearch(arr, targets[t]) << endl;
    }

    return 0;
}`,
    hint: "Binary search: if arr[mid] == target, return mid. If target < arr[mid], set right = mid - 1. If target > arr[mid], set left = mid + 1.",
    solution: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = (int)arr.size() - 1;
    int steps = 0;

    while (left <= right) {
        steps++;
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            cout << "(binary: " << steps << " steps) ";
            return mid;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    cout << "(binary: " << steps << " steps) ";
    return -1;
}

int linearSearch(vector<int>& arr, int target) {
    int steps = 0;
    for (int i = 0; i < (int)arr.size(); i++) {
        steps++;
        if (arr[i] == target) {
            cout << "(linear: " << steps << " steps) ";
            return i;
        }
    }
    cout << "(linear: " << steps << " steps) ";
    return -1;
}

int main() {
    cout << "🔍 BINARY SEARCH DETECTIVE" << endl;

    vector<int> arr;
    for (int i = 0; i < 100; i++) arr.push_back(i * 3);

    int targets[] = {42, 150, 297, 999};
    for (int t = 0; t < 4; t++) {
        cout << "\\nSearching for " << targets[t] << ":" << endl;
        cout << "  Linear: idx=" << linearSearch(arr, targets[t]) << endl;
        cout << "  Binary: idx=" << binarySearch(arr, targets[t]) << endl;
    }

    return 0;
}`,
    expectedOutput: `🔍 BINARY SEARCH DETECTIVE

Searching for 42:
  Linear: (linear: 15 steps) idx=14
  Binary: (binary: 5 steps) idx=14

Searching for 150:
  Linear: (linear: 51 steps) idx=50
  Binary: (binary: 6 steps) idx=50

Searching for 297:
  Linear: (linear: 100 steps) idx=99
  Binary: (binary: 7 steps) idx=99

Searching for 999:
  Linear: (linear: 100 steps) idx=-1
  Binary: (binary: 7 steps) idx=-1`,
    tags: ["project", "cpp-area-6", "binary-search"],
    fromLesson: "cpp-6-2",
    language: "cpp",
    category: "Algorithms",
    categoryZh: "算法",
  },
  {
    id: "proj-cpp-6-2-2",
    title: "🎯 Two Pointer Problems",
    description: "Master the two-pointer technique! Solve pair sum, reverse arrays, and container problems efficiently.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    cout << "🎯 TWO POINTER PROBLEMS" << endl;

    // Problem 1: Find pair that sums to target in sorted array
    vector<int> sorted = {1, 3, 5, 7, 9, 11, 15, 20};
    int target = 16;

    cout << "\\nFind pair summing to " << target << ":" << endl;
    int left = 0, right = (int)sorted.size() - 1;
    bool found = false;
    while (left < right) {
        int sum = sorted[left] + sorted[right];
        // TODO: if sum == target, print and break
        // TODO: if sum < target, left++
        // TODO: if sum > target, right--
    }
    if (!found) cout << "No pair found." << endl;

    // Problem 2: Reverse an array in-place
    vector<int> arr = {1, 2, 3, 4, 5};
    cout << "\\nBefore reverse: ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    // TODO: Use two pointers to reverse
    // left = 0, right = size-1, swap and move inward

    cout << "After reverse: ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    // Problem 3: Remove duplicates from sorted array
    vector<int> dups = {1, 1, 2, 2, 3, 4, 4, 5};
    // TODO: use two-pointer to find unique count
    int unique = 1;
    // TODO

    cout << "\\nUnique elements in {1,1,2,2,3,4,4,5}: " << unique << endl;

    return 0;
}`,
    hint: "Pair sum: if sum < target move left pointer right; if sum > target move right pointer left. Reverse: swap arr[left] and arr[right]. Duplicates: slow pointer tracks unique position.",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    cout << "🎯 TWO POINTER PROBLEMS" << endl;

    vector<int> sorted = {1, 3, 5, 7, 9, 11, 15, 20};
    int target = 16;

    cout << "\\nFind pair summing to " << target << ":" << endl;
    int left = 0, right = (int)sorted.size() - 1;
    bool found = false;
    while (left < right) {
        int sum = sorted[left] + sorted[right];
        if (sum == target) {
            cout << sorted[left] << " + " << sorted[right] << " = " << target << endl;
            found = true;
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    if (!found) cout << "No pair found." << endl;

    vector<int> arr = {1, 2, 3, 4, 5};
    cout << "\\nBefore reverse: ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    left = 0; right = (int)arr.size() - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++; right--;
    }

    cout << "After reverse: ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    vector<int> dups = {1, 1, 2, 2, 3, 4, 4, 5};
    int unique = 1;
    for (int i = 1; i < (int)dups.size(); i++) {
        if (dups[i] != dups[i - 1]) unique++;
    }

    cout << "\\nUnique elements in {1,1,2,2,3,4,4,5}: " << unique << endl;

    return 0;
}`,
    expectedOutput: `🎯 TWO POINTER PROBLEMS

Find pair summing to 16:
1 + 15 = 16

Before reverse: 1 2 3 4 5 
After reverse: 5 4 3 2 1 

Unique elements in {1,1,2,2,3,4,4,5}: 5`,
    tags: ["project", "cpp-area-6", "two-pointers"],
    fromLesson: "cpp-6-2",
    language: "cpp",
    category: "Algorithms",
    categoryZh: "算法",
  },

  // cpp-6-3: Competition Practice
  {
    id: "proj-cpp-6-3-1",
    title: "🏅 Competition Problem Set",
    description: "Solve classic competition problems! FizzBuzz deluxe, digit sum, and array rotation — timed challenge style.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

// Problem 1: FizzBuzz Deluxe
// Print 1 to n, but:
// Divisible by 3 -> "Fizz"
// Divisible by 5 -> "Buzz"
// Divisible by 7 -> "Boom"
// Combinations: "FizzBuzz", "FizzBoom", "BuzzBoom", "FizzBuzzBoom"
void fizzBuzzBoom(int n) {
    for (int i = 1; i <= n; i++) {
        string result = "";
        // TODO: build the result string
        if (result.empty()) result = to_string(i);
        cout << result << " ";
    }
    cout << endl;
}

// Problem 2: Digital Root
// Keep summing digits until single digit
// e.g., 9875 -> 9+8+7+5=29 -> 2+9=11 -> 1+1=2
int digitalRoot(int n) {
    // TODO: implement
    return 0;
}

// Problem 3: Rotate array left by k positions
// [1,2,3,4,5] rotated by 2 -> [3,4,5,1,2]
void rotateLeft(vector<int>& arr, int k) {
    // TODO: implement (hint: use a temp vector or reverse trick)
}

int main() {
    cout << "🏅 COMPETITION PROBLEMS" << endl;

    cout << "\\n--- FizzBuzzBoom (1-21) ---" << endl;
    fizzBuzzBoom(21);

    cout << "\\n--- Digital Root ---" << endl;
    cout << "digitalRoot(9875) = " << digitalRoot(9875) << endl;
    cout << "digitalRoot(493) = " << digitalRoot(493) << endl;

    cout << "\\n--- Rotate Left ---" << endl;
    vector<int> arr = {1, 2, 3, 4, 5};
    cout << "Before: ";
    for (int x : arr) cout << x << " ";
    cout << endl;
    rotateLeft(arr, 2);
    cout << "After rotate by 2: ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    return 0;
}`,
    hint: "FizzBuzz: check each divisor and append to string. Digital root: while n >= 10, sum its digits (n%10, n/10). Rotate: copy to temp, or use reverse trick.",
    solution: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

void fizzBuzzBoom(int n) {
    for (int i = 1; i <= n; i++) {
        string result = "";
        if (i % 3 == 0) result += "Fizz";
        if (i % 5 == 0) result += "Buzz";
        if (i % 7 == 0) result += "Boom";
        if (result.empty()) result = to_string(i);
        cout << result << " ";
    }
    cout << endl;
}

int digitalRoot(int n) {
    while (n >= 10) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        n = sum;
    }
    return n;
}

void rotateLeft(vector<int>& arr, int k) {
    int n = arr.size();
    k = k % n;
    reverse(arr.begin(), arr.begin() + k);
    reverse(arr.begin() + k, arr.end());
    reverse(arr.begin(), arr.end());
}

int main() {
    cout << "🏅 COMPETITION PROBLEMS" << endl;

    cout << "\\n--- FizzBuzzBoom (1-21) ---" << endl;
    fizzBuzzBoom(21);

    cout << "\\n--- Digital Root ---" << endl;
    cout << "digitalRoot(9875) = " << digitalRoot(9875) << endl;
    cout << "digitalRoot(493) = " << digitalRoot(493) << endl;

    cout << "\\n--- Rotate Left ---" << endl;
    vector<int> arr = {1, 2, 3, 4, 5};
    cout << "Before: ";
    for (int x : arr) cout << x << " ";
    cout << endl;
    rotateLeft(arr, 2);
    cout << "After rotate by 2: ";
    for (int x : arr) cout << x << " ";
    cout << endl;

    return 0;
}`,
    expectedOutput: `🏅 COMPETITION PROBLEMS

--- FizzBuzzBoom (1-21) ---
1 2 Fizz 4 Buzz Fizz Boom 8 Fizz Buzz 11 Fizz 13 Boom FizzBuzz 16 17 Fizz 19 Buzz FizzBoom 

--- Digital Root ---
digitalRoot(9875) = 2
digitalRoot(493) = 7

--- Rotate Left ---
Before: 1 2 3 4 5 
After rotate by 2: 3 4 5 1 2 `,
    tags: ["project", "cpp-area-6", "competition"],
    fromLesson: "cpp-6-3",
    language: "cpp",
    category: "Algorithms",
    categoryZh: "算法",
  },
  {
    id: "proj-cpp-6-3-2",
    title: "🧠 Brain Teasers Collection",
    description: "Classic coding brain teasers! Prime checker, palindrome number, and Roman numeral converter.",
    difficulty: 3,
    gradeRange: [6, 12],
    skillLevel: "advanced",
    starterCode: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Problem 1: Is Prime?
bool isPrime(int n) {
    if (n < 2) return false;
    // TODO: check divisibility from 2 to sqrt(n)
    return true;
}

// Problem 2: Is Palindrome Number? (without converting to string)
bool isPalindromeNum(int n) {
    if (n < 0) return false;
    // TODO: reverse the number and compare
    int original = n;
    int reversed = 0;
    // TODO
    return original == reversed;
}

// Problem 3: Integer to Roman Numeral
string toRoman(int num) {
    string result = "";
    // TODO: use arrays of values and symbols
    // int vals[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    // string syms[] = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
    return result;
}

int main() {
    cout << "🧠 BRAIN TEASERS" << endl;

    cout << "\\n--- Prime Checker ---" << endl;
    int testPrimes[] = {2, 7, 10, 17, 100};
    for (int i = 0; i < 5; i++) {
        cout << testPrimes[i] << ": " << (isPrime(testPrimes[i]) ? "prime" : "not prime") << endl;
    }

    cout << "\\n--- Palindrome Numbers ---" << endl;
    int testPalin[] = {121, 123, 12321, 10};
    for (int i = 0; i < 4; i++) {
        cout << testPalin[i] << ": " << (isPalindromeNum(testPalin[i]) ? "yes" : "no") << endl;
    }

    cout << "\\n--- Roman Numerals ---" << endl;
    int testRoman[] = {3, 9, 42, 99, 2024};
    for (int i = 0; i < 5; i++) {
        cout << testRoman[i] << " = " << toRoman(testRoman[i]) << endl;
    }

    return 0;
}`,
    hint: "Prime: check i*i <= n. Palindrome: reversed = reversed*10 + n%10, n/=10. Roman: greedily subtract largest value that fits.",
    solution: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

bool isPalindromeNum(int n) {
    if (n < 0) return false;
    int original = n;
    int reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    return original == reversed;
}

string toRoman(int num) {
    string result = "";
    int vals[] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    string syms[] = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
    for (int i = 0; i < 13; i++) {
        while (num >= vals[i]) {
            result += syms[i];
            num -= vals[i];
        }
    }
    return result;
}

int main() {
    cout << "🧠 BRAIN TEASERS" << endl;

    cout << "\\n--- Prime Checker ---" << endl;
    int testPrimes[] = {2, 7, 10, 17, 100};
    for (int i = 0; i < 5; i++) {
        cout << testPrimes[i] << ": " << (isPrime(testPrimes[i]) ? "prime" : "not prime") << endl;
    }

    cout << "\\n--- Palindrome Numbers ---" << endl;
    int testPalin[] = {121, 123, 12321, 10};
    for (int i = 0; i < 4; i++) {
        cout << testPalin[i] << ": " << (isPalindromeNum(testPalin[i]) ? "yes" : "no") << endl;
    }

    cout << "\\n--- Roman Numerals ---" << endl;
    int testRoman[] = {3, 9, 42, 99, 2024};
    for (int i = 0; i < 5; i++) {
        cout << testRoman[i] << " = " << toRoman(testRoman[i]) << endl;
    }

    return 0;
}`,
    expectedOutput: `🧠 BRAIN TEASERS

--- Prime Checker ---
2: prime
7: prime
10: not prime
17: prime
100: not prime

--- Palindrome Numbers ---
121: yes
123: no
12321: yes
10: no

--- Roman Numerals ---
3 = III
9 = IX
42 = XLII
99 = XCIX
2024 = MMXXIV`,
    tags: ["project", "cpp-area-6", "competition"],
    fromLesson: "cpp-6-3",
    language: "cpp",
    category: "Algorithms",
    categoryZh: "算法",
  },
];
