# QA Analysis: Literal `\n` Display Issues in Lesson Content

## Summary
Found literal `\n` characters appearing as text instead of creating line breaks between English and Chinese instructions in lesson data files. These appear in user-visible text fields where bilingual content should be displayed on separate lines.

## Files Analyzed & Counts

| File | Count | 
|------|-------|
| src/data/cpp-lessons.ts | 514 instances |
| src/data/lessons.ts | 470 instances |
| src/data/ds-lessons.ts | 563 instances |
| src/data/alg-lessons.ts | 632 instances |
| src/data/code-challenges.ts | 204 instances |
| src/data/ai-lessons.ts | 35 instances |

**Total: 2,418 instances across all files**

## Problem Description
In regular string literals (using double quotes `"..."`), the literal characters `\n` are displaying as text instead of creating actual newlines. This affects the rendering of bilingual content where English and Chinese instructions should appear on separate lines.

## Specific Examples by Field Type

### 1. Question Fields (cpp-lessons.ts)

**Line 444:**
```typescript
question: "What does `#include <iostream>` do in C++?\n`#include <iostream>` 在C++中做什么？"
```
**Issue:** The `\n` between English and Chinese appears as literal text
**Should render as:**
```
What does `#include <iostream>` do in C++?
`#include <iostream>` 在C++中做什么？
```

**Line 450:**
```typescript
question: "Which symbol ends every C++ statement?\n哪个符号结束每个C++语句？"
```

**Line 456:**
```typescript
question: "What does `return 0;` mean in main()?\n在main()中 `return 0;` 是什么意思？"
```

### 2. Description Fields (lessons.ts)

**Line 338:**
```typescript
description: "Create an ASCII art robot using multiple print() statements! Make it at least 5 lines tall.\n用多个 print() 画一个 ASCII 机器人！至少5行高。"
```

**Line 543:**
```typescript
description: "Create variables for your name, age, and hobby, then print a self-introduction using f-string!\n创建名字、年龄和爱好变量，用 f-string 打印自我介绍！"
```

**Line 785:**
```typescript
description: "Convert Celsius to Fahrenheit! Formula: F = C × 9/5 + 32\n把摄氏度转成华氏度！公式：F = C × 9/5 + 32"
```

### 3. Hint Fields (alg-lessons.ts)

**Line 794:**
```typescript
hint: "If arr[mid] < arr[mid+1], peak is on the right.\n如果 arr[mid] < arr[mid+1]，峰值在右边。"
```

**Line 1152:**
```typescript
hint: "DFS from each unvisited 1. Each DFS = one island.\n从每个未访问的 1 开始 DFS。每次 = 一个岛屿。"
```

**Line 2051:**
```typescript
hint: "Three pointers: lo (0s), mid (current), hi (2s).\n三指针：lo（0）、mid（当前）、hi（2）。"
```

### 4. Description Fields (ds-lessons.ts)

**Line 271:**
```typescript
description: "Reverse the given list WITHOUT using the built-in reverse() method!\n不使用内置 reverse() 方法来反转列表！"
```

**Line 279:**
```typescript
description: "Reverse the given array WITHOUT using built-in reverse!\n不使用内置 reverse 反转数组！"
```

## Affected Field Types
The literal `\n` issue appears in these user-visible text fields:
- `question`
- `description` 
- `hint`
- `prompt`
- `title` (in some cases)
- `subtitle` (in some cases)

## Fix Options

### Option 1: Convert to Template Literals
Change from regular strings to template literals (backticks):
```typescript
// Current (broken)
question: "What does \`#include <iostream>\` do in C++?\\n\`#include <iostream>\` 在C++中做什么？"

// Fixed with template literal
question: \`What does \`#include <iostream>\` do in C++?
\`#include <iostream>\` 在C++中做什么？\`
```

### Option 2: Split into Separate Fields
Create separate fields for English and Chinese:
```typescript
// Current (broken)
question: "What does \`#include <iostream>\` do in C++?\\n\`#include <iostream>\` 在C++中做什么？"

// Fixed with separate fields
question: "What does \`#include <iostream>\` do in C++?",
questionZh: "\`#include <iostream>\` 在C++中做什么？"
```

### Option 3: Use Actual Newlines in Template Literals
Replace `\\n` with actual line breaks within template literals:
```typescript
// Current (broken)
question: "Question in English\\nQuestion in Chinese"

// Fixed 
question: \`Question in English
Question in Chinese\`
```

## Recommendation
**Option 1 (Template Literals)** is recommended because:
- Minimal code changes required
- Preserves existing single-field structure
- Works correctly for line breaks
- Most compatible with existing rendering logic

## Next Steps
1. Convert all affected string literals to template literals
2. Replace `\\n` with actual newlines within the template literals
3. Test rendering in the application
4. Verify that the line breaks display correctly in the UI