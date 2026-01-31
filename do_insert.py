#!/usr/bin/env python3
"""Insert challengeCpp blocks. Reads challenges from a JSON file."""
import json, re

# Load challenges
with open('cpp_challenges.json', 'r') as f:
    challenges = json.load(f)

assert len(challenges) == 40, f"Expected 40, got {len(challenges)}"

# Load the TS file
with open('src/data/alg-lessons.ts', 'r') as f:
    lines = f.readlines()

# Find challenge block positions
challenge_starts = [i for i, l in enumerate(lines) if re.match(r'\s+challenge:\s*\{', l)]
assert len(challenge_starts) == 40, f"Expected 40 challenge starts, got {len(challenge_starts)}"

# Find closing }, for each
insert_positions = []
for idx, start in enumerate(challenge_starts):
    depth = 0
    for j in range(start, len(lines)):
        depth += lines[j].count('{') - lines[j].count('}')
        if depth == 0:
            insert_positions.append((j, idx))
            break

assert len(insert_positions) == 40

def escape_for_ts(s):
    """Escape a string value for use inside TypeScript double-quoted string."""
    # The value will be placed inside "..." in the .ts file
    # We need to escape: \ -> \\, " -> \"
    # But \\n should stay as \\n (represents \n in the runtime string)
    # Actually the JSON already has the right escaping for the content.
    # We just need to make sure " becomes \" for the TS file.
    # The JSON loader gives us the actual string content.
    # For the TS file, we need to re-escape it.
    
    # Replace \ with \\ (but not \\n which should become \\n in TS)
    # Actually, let's think about this:
    # In JSON: "hello\\nworld" -> Python string: "hello\nworld"
    # In TS file we want: "hello\nworld" -> so we write "hello\\nworld" 
    # Wait no. In TS: "hello\nworld" means hello<newline>world
    # We want the C++ code to have literal \n in it, so in TS we need \\n
    
    # Step 1: escape backslashes (but our JSON already handles this)
    # The Python string from JSON has actual newlines if JSON had \n
    # and has literal \n if JSON had \\n
    
    # For TS output: we need to escape " and \
    result = s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\t', '\\t')
    return result

# Insert backwards
for pos, cidx in reversed(insert_positions):
    c = challenges[cidx]
    parts = []
    parts.append('      challengeCpp: {\n')
    parts.append(f'        title: "{escape_for_ts(c["title"])}",\n')
    parts.append(f'        description: "{escape_for_ts(c["description"])}",\n')
    parts.append(f'        starterCode: "{escape_for_ts(c["starterCode"])}",\n')
    parts.append(f'        hint: "{escape_for_ts(c["hint"])}",\n')
    parts.append(f'        solution: "{escape_for_ts(c["solution"])}",\n')
    parts.append(f'        expectedOutput: "{escape_for_ts(c["expectedOutput"])}",\n')
    parts.append('      },\n')
    block = ''.join(parts)
    lines.insert(pos + 1, block)

with open('src/data/alg-lessons.ts', 'w') as f:
    f.writelines(lines)

print(f"Done! Inserted {len(insert_positions)} challengeCpp blocks.")
