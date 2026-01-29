// Pre-set code lab exercises — expanded with 20 challenges across all modules

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
];
