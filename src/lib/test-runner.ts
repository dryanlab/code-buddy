// Test case runner for exercises
// Runs each test case individually and grades results
// 测试用例运行器

import { gradeIndividualResults, type GradeResult } from './exercise-grader';
import { runCpp } from './cpp-engine';
import { runPython, loadPyodideEngine, isPyodideLoaded } from './pyodide-engine';

/**
 * Run all test cases for a given code snippet and language.
 * Each test case is run independently with its own input.
 */
export async function runTestCases(
  code: string,
  language: 'python' | 'cpp',
  testCases: { input: string; expectedOutput: string }[],
  onProgress?: (completed: number, total: number) => void,
): Promise<GradeResult> {
  const outputs: string[] = [];

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];
    const inputLines = tc.input ? tc.input.split('\n') : [];

    try {
      if (language === 'python') {
        if (!isPyodideLoaded()) {
          await loadPyodideEngine();
        }
        const result = await runPython(code, inputLines.length > 0 ? inputLines : undefined);
        outputs.push(result.error ? `ERROR: ${result.error}` : (result.output || ''));
      } else {
        const result = await runCpp(code, tc.input || undefined);
        outputs.push(result.error ? `ERROR: ${result.error}` : (result.output || ''));
      }
    } catch (e) {
      outputs.push(`ERROR: ${e instanceof Error ? e.message : 'unknown'}`);
    }

    onProgress?.(i + 1, testCases.length);
  }

  return gradeIndividualResults(outputs, testCases);
}
