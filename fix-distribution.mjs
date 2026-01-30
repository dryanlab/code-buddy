import fs from 'fs';

const file = 'src/data/quiz-data.ts';
const content = fs.readFileSync(file, 'utf-8');

// Parse all non-coding questions: find correctIndex and options blocks
// Strategy: use regex to find each question block, identify if coding, shuffle options

// We'll work line-by-line, tracking question blocks
const lines = content.split('\n');

// First pass: collect all non-coding question indices (line numbers of correctIndex)
// We need to find patterns like:
//   options: [...],
//   correctIndex: N,

// Find all question objects by tracking braces
let questions = []; // {optionsStart, optionsEnd, correctIndexLine, correctIndex, isCoding, options}

let i = 0;
while (i < lines.length) {
  const line = lines[i];
  
  // Detect start of a question object (line with `question:`)
  if (line.match(/^\s*question:\s*"/)) {
    // Look backwards for type: "coding"
    let isCoding = false;
    // Check a few lines back for type: "coding" within same object
    for (let j = Math.max(0, i - 3); j < i; j++) {
      if (lines[j].match(/type:\s*"coding"/)) isCoding = true;
    }
    
    if (!isCoding) {
      // Find options array and correctIndex
      let optStart = -1, optEnd = -1, ciLine = -1;
      let optionsText = '';
      
      for (let j = i; j < Math.min(i + 20, lines.length); j++) {
        if (lines[j].match(/^\s*options:\s*\[/)) {
          optStart = j;
          // Find closing bracket - could be multi-line
          let bracketContent = '';
          let k = j;
          while (k < lines.length) {
            bracketContent += lines[k] + '\n';
            if (lines[k].includes('],')) { optEnd = k; break; }
            k++;
          }
          optionsText = bracketContent;
        }
        if (lines[j].match(/^\s*correctIndex:\s*\d/)) {
          ciLine = j;
          break;
        }
      }
      
      if (optStart >= 0 && ciLine >= 0) {
        // Extract options array
        const fullOpt = lines.slice(optStart, optEnd + 1).join('\n');
        const match = fullOpt.match(/options:\s*\[([\s\S]*?)\]/);
        if (match) {
          // Parse individual options - they're comma-separated strings
          const inner = match[1];
          // Split by comma but respect quotes
          const opts = [];
          let current = '';
          let inQuote = false;
          let quoteChar = '';
          for (let c = 0; c < inner.length; c++) {
            const ch = inner[c];
            if (!inQuote && (ch === '"' || ch === "'")) {
              inQuote = true; quoteChar = ch; current += ch;
            } else if (inQuote && ch === quoteChar && inner[c-1] !== '\\') {
              inQuote = false; current += ch;
            } else if (!inQuote && ch === ',') {
              const trimmed = current.trim();
              if (trimmed) opts.push(trimmed);
              current = '';
            } else {
              current += ch;
            }
          }
          const trimmed = current.trim();
          if (trimmed) opts.push(trimmed);
          
          const ci = parseInt(lines[ciLine].match(/correctIndex:\s*(\d)/)[1]);
          
          questions.push({ optStart, optEnd, ciLine, correctIndex: ci, options: opts, isCoding: false });
        }
      }
    }
  }
  i++;
}

console.log(`Found ${questions.length} non-coding questions`);

// Count current distribution
let before = [0,0,0,0];
questions.forEach(q => before[q.correctIndex]++);
console.log('Before:', before.map((v,i) => `${i}:${v}(${(v/questions.length*100).toFixed(1)}%)`).join(' '));

// Assign target positions: distribute evenly
const n = questions.length;
const targets = [];
for (let i = 0; i < n; i++) targets.push(i % 4);
// Shuffle targets
for (let i = targets.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [targets[i], targets[j]] = [targets[j], targets[i]];
}

// Now for each question, rearrange options so correct answer is at targets[i]
for (let qi = 0; qi < questions.length; qi++) {
  const q = questions[qi];
  const targetPos = targets[qi];
  const correctOption = q.options[q.correctIndex];
  
  // Remove correct from array, shuffle rest, insert at target position
  const others = q.options.filter((_, i) => i !== q.correctIndex);
  // Shuffle others
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]];
  }
  others.splice(targetPos, 0, correctOption);
  
  q.newOptions = others;
  q.newCorrectIndex = targetPos;
}

// Apply changes (go backwards to preserve line numbers)
questions.sort((a, b) => b.ciLine - a.ciLine);

let newLines = [...lines];
for (const q of questions) {
  // Update correctIndex line
  newLines[q.ciLine] = newLines[q.ciLine].replace(/correctIndex:\s*\d/, `correctIndex: ${q.newCorrectIndex}`);
  
  // Update options - reconstruct the options line(s)
  // Get indentation from optStart
  const indent = newLines[q.optStart].match(/^(\s*)/)[1];
  const newOptLine = `${indent}options: [${q.newOptions.join(', ')}],`;
  
  // Replace from optStart to optEnd
  newLines.splice(q.optStart, q.optEnd - q.optStart + 1, newOptLine);
}

fs.writeFileSync(file, newLines.join('\n'));

// Verify
const verify = fs.readFileSync(file, 'utf-8');
const ciMatches = [...verify.matchAll(/correctIndex:\s*(\d)/g)];
const after = [0,0,0,0];
ciMatches.forEach(m => after[parseInt(m[1])]++);
const total = ciMatches.length;
console.log('After:', after.map((v,i) => `${i}:${v}(${(v/total*100).toFixed(1)}%)`).join(' '));
console.log('Total questions with correctIndex:', total);
