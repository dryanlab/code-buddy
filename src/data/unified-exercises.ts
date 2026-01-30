// Unified exercise type that normalizes Python, C++, and legacy CodeExercise into one shape.

import { ALL_PYTHON_EXERCISES, type PythonExercise } from './python-exercises-all';
import { ALL_CPP_EXERCISES, type CppExercise } from './cpp-exercises-all';

export type ExerciseLanguage = 'python' | 'cpp';
export type ExerciseDifficulty = 'easy' | 'medium' | 'hard';

export interface UnifiedExercise {
  id: string;
  title: string;
  titleZh: string;
  language: ExerciseLanguage;
  difficulty: ExerciseDifficulty;
  level: number;          // 1-5
  category: string;
  categoryZh: string;
  tags: string[];
  description: string;
  descriptionZh: string;
  examples: { input: string; output: string }[];
  starterCode: string;
  solution: string;
  hints: string[];
  hintsZh: string[];
  testCases: { input: string; expectedOutput: string }[];
}

function fromPython(ex: PythonExercise): UnifiedExercise {
  return { ...ex, language: 'python' };
}

function fromCpp(ex: CppExercise): UnifiedExercise {
  return { ...ex, language: 'cpp' };
}

export const ALL_EXERCISES: UnifiedExercise[] = [
  ...ALL_PYTHON_EXERCISES.map(fromPython),
  ...ALL_CPP_EXERCISES.map(fromCpp),
];

export const PYTHON_COUNT = ALL_PYTHON_EXERCISES.length;
export const CPP_COUNT = ALL_CPP_EXERCISES.length;
