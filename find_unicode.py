import re

with open('src/data/cpp-lessons.ts', 'r') as f:
    content = f.read()

# Find all code: fields using backtick template literals
pattern = r'code:\s*`([^`]*)`'
matches = list(re.finditer(pattern, content))

print(f'Found {len(matches)} code blocks')

for i, m in enumerate(matches):
    code = m.group(1)
    non_ascii = [(j, c, hex(ord(c))) for j, c in enumerate(code) if ord(c) > 127]
    if non_ascii:
        line_num = content[:m.start()].count('\n') + 1
        print(f'\nBlock at line ~{line_num}:')
        for pos, char, hexval in non_ascii:
            context = code[max(0,pos-20):pos+20]
            print(f'  Char: {repr(char)} ({hexval}) context: ...{repr(context)}...')
