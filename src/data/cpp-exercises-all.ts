import { CPP_EXERCISES, type CppExercise } from './cpp-exercises';
import { CPP_EXERCISES_PART2 } from './cpp-exercises-part2';
import { CPP_EXERCISES_PART3 } from './cpp-exercises-part3';
import { CPP_EXERCISES_PART4 } from './cpp-exercises-part4';
import { CPP_EXERCISES_PART5 } from './cpp-exercises-part5';
import { CPP_EXERCISES_PART6 } from './cpp-exercises-part6';
export type { CppExercise };
export const ALL_CPP_EXERCISES: CppExercise[] = [
  ...CPP_EXERCISES,
  ...CPP_EXERCISES_PART2,
  ...CPP_EXERCISES_PART3,
  ...CPP_EXERCISES_PART4,
  ...CPP_EXERCISES_PART5,
  ...CPP_EXERCISES_PART6,
];
