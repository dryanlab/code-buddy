// Auto-grading engine for Code Lab exercises
// 代码实验室自动评分引擎

export interface TestCaseResult {
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
}

export interface GradeResult {
  passed: boolean;
  totalTests: number;
  passedTests: number;
  results: TestCaseResult[];
}

/** Normalize output for comparison: trim, collapse whitespace lines, normalize line endings */
function normalizeOutput(s: string): string {
  return s
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
    .trim();
}

/**
 * Grade exercise output against test cases.
 * For single-run exercises (no per-test input), actualOutput is the full output
 * and we compare against each test case's expectedOutput sequentially.
 */
export function gradeExercise(
  actualOutput: string,
  testCases: { input: string; expectedOutput: string }[]
): GradeResult {
  const results: TestCaseResult[] = testCases.map(tc => {
    const expected = normalizeOutput(tc.expectedOutput);
    const actual = normalizeOutput(actualOutput);
    return {
      input: tc.input,
      expectedOutput: tc.expectedOutput,
      actualOutput: actualOutput.trim(),
      passed: actual === expected,
    };
  });

  const passedTests = results.filter(r => r.passed).length;
  return {
    passed: passedTests === results.length,
    totalTests: results.length,
    passedTests,
    results,
  };
}

/**
 * Grade multiple individual test run outputs against their expected outputs.
 */
export function gradeIndividualResults(
  outputs: string[],
  testCases: { input: string; expectedOutput: string }[]
): GradeResult {
  const results: TestCaseResult[] = testCases.map((tc, i) => {
    const expected = normalizeOutput(tc.expectedOutput);
    const actual = normalizeOutput(outputs[i] || '');
    return {
      input: tc.input,
      expectedOutput: tc.expectedOutput,
      actualOutput: (outputs[i] || '').trim(),
      passed: actual === expected,
    };
  });

  const passedTests = results.filter(r => r.passed).length;
  return {
    passed: passedTests === results.length,
    totalTests: results.length,
    passedTests,
    results,
  };
}

/** XP reward based on difficulty */
export function getXPReward(difficulty: 'easy' | 'medium' | 'hard'): number {
  return difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30;
}
