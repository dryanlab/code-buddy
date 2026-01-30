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
    tags: ["project", "area-5", "graduation", "综合"],
    fromLesson: "5-6",
  },
];
