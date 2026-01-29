// Mock Python executor for Phase 1
// Handles simple print statements and basic expressions
// Phase 2 will replace this with real Pyodide

export interface ExecutionResult {
  output: string;
  error: string | null;
  variables: Record<string, string>;
}

export function executePython(code: string): ExecutionResult {
  const lines = code.split("\n");
  const output: string[] = [];
  const variables: Record<string, string> = {};
  let error: string | null = null;

  try {
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      // Handle print statements
      const printMatch = trimmed.match(/^print\s*\((.*)\)\s*$/);
      if (printMatch) {
        const arg = printMatch[1].trim();
        // String literal
        if ((arg.startsWith('"') && arg.endsWith('"')) || (arg.startsWith("'") && arg.endsWith("'"))) {
          output.push(arg.slice(1, -1));
        }
        // f-string (basic)
        else if (arg.startsWith('f"') || arg.startsWith("f'")) {
          let s = arg.slice(2, -1);
          s = s.replace(/\{(\w+)\}/g, (_, name) => variables[name] || name);
          output.push(s);
        }
        // Variable reference
        else if (variables[arg] !== undefined) {
          output.push(variables[arg]);
        }
        // Simple expression
        else {
          try {
            const val = evalSimpleExpr(arg, variables);
            output.push(String(val));
          } catch {
            output.push(arg);
          }
        }
        continue;
      }

      // Handle variable assignment
      const assignMatch = trimmed.match(/^(\w+)\s*=\s*(.+)$/);
      if (assignMatch) {
        const [, name, expr] = assignMatch;
        const val = expr.trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          variables[name] = val.slice(1, -1);
        } else {
          try {
            variables[name] = String(evalSimpleExpr(val, variables));
          } catch {
            variables[name] = val;
          }
        }
        continue;
      }

      // Handle input() - mock
      const inputMatch = trimmed.match(/^(\w+)\s*=\s*input\s*\(.*\)\s*$/);
      if (inputMatch) {
        variables[inputMatch[1]] = "user_input";
        output.push("(Waiting for input... mock mode)");
        continue;
      }
    }
  } catch (e) {
    error = e instanceof Error ? e.message : "Unknown error";
  }

  return { output: output.join("\n"), error, variables };
}

function evalSimpleExpr(expr: string, vars: Record<string, string>): number {
  // Replace variable names with values
  let resolved = expr;
  for (const [k, v] of Object.entries(vars)) {
    resolved = resolved.replace(new RegExp(`\\b${k}\\b`, "g"), v);
  }
  // Only allow safe math
  if (/^[\d\s+\-*/().%]+$/.test(resolved)) {
    return Function(`"use strict"; return (${resolved})`)();
  }
  throw new Error("Cannot evaluate");
}
