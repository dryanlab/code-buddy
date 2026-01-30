import { PYTHON_EXERCISES } from './python-exercises';
import type { PythonExercise } from './python-exercises';
import { PYTHON_EXERCISES_P2 } from './python-exercises-p2';
import { PYTHON_EXERCISES_P3 } from './python-exercises-p3';
import { PYTHON_EXERCISES_P4 } from './python-exercises-p4';
import { PYTHON_EXERCISES_P5 } from './python-exercises-p5';
import { PYTHON_EXERCISES_P6 } from './python-exercises-p6';

export const ALL_PYTHON_EXERCISES: PythonExercise[] = [
  ...PYTHON_EXERCISES,
  ...PYTHON_EXERCISES_P2,
  ...PYTHON_EXERCISES_P3,
  ...PYTHON_EXERCISES_P4,
  ...PYTHON_EXERCISES_P5,
  ...PYTHON_EXERCISES_P6,
];

export type { PythonExercise } from './python-exercises';
