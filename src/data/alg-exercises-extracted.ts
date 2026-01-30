// Auto-extracted exercises and challenges from ALG lessons
import { ALG_LESSONS } from './alg-lessons';
import type { UnifiedExercise } from './unified-exercises';

function extractAlgExercises(): UnifiedExercise[] {
  const results: UnifiedExercise[] = [];
  const moduleLevel: Record<string, number> = {
    'alg-1': 2, 'alg-2': 3, 'alg-3': 3, 'alg-4': 4, 'alg-5': 4,
  };
  const diffMap: Record<string, 'easy' | 'medium' | 'hard'> = {
    beginner: 'easy', intermediate: 'medium', advanced: 'hard',
  };

  for (const lesson of ALG_LESSONS) {
    const level = moduleLevel[lesson.moduleId] ?? 3;
    const diff = diffMap[lesson.difficulty ?? ''] ?? 'medium';

    lesson.sections.forEach((section, si) => {
      // Challenge (Python)
      if (section.challenge) {
        const c = section.challenge;
        results.push({
          id: `alg-ch-${lesson.id}-${si}`,
          title: c.title || `${lesson.title} Challenge`,
          titleZh: c.title || `${lesson.title} 挑战`,
          language: 'python',
          difficulty: diff,
          level,
          category: 'Algorithms',
          categoryZh: '算法',
          tags: ['algorithms', lesson.moduleId],
          description: c.description,
          descriptionZh: c.description,
          examples: [],
          starterCode: c.starterCode,
          solution: c.solution,
          hints: [c.hint],
          hintsZh: [c.hint],
          testCases: c.expectedOutput ? [{ input: '', expectedOutput: c.expectedOutput }] : [],
        });
      }

      // Challenge C++
      if (section.challengeCpp) {
        const c = section.challengeCpp;
        results.push({
          id: `alg-ch-${lesson.id}-${si}-cpp`,
          title: c.title || `${lesson.title} Challenge (C++)`,
          titleZh: c.title || `${lesson.title} 挑战 (C++)`,
          language: 'cpp',
          difficulty: diff,
          level,
          category: 'Algorithms',
          categoryZh: '算法',
          tags: ['algorithms', lesson.moduleId, 'cpp'],
          description: c.description,
          descriptionZh: c.description,
          examples: [],
          starterCode: c.starterCode,
          solution: c.solution,
          hints: [c.hint],
          hintsZh: [c.hint],
          testCases: c.expectedOutput ? [{ input: '', expectedOutput: c.expectedOutput }] : [],
        });
      }

      // Inline exercise (Python)
      if (section.exercise) {
        const e = section.exercise;
        results.push({
          id: `alg-ex-${lesson.id}-${si}`,
          title: `${lesson.title} Exercise`,
          titleZh: `${lesson.title} 练习`,
          language: 'python',
          difficulty: diff,
          level,
          category: 'Algorithms',
          categoryZh: '算法',
          tags: ['algorithms', lesson.moduleId],
          description: e.prompt,
          descriptionZh: e.promptZh,
          examples: [],
          starterCode: e.starterCode,
          solution: e.solution,
          hints: e.hints ?? [e.hint],
          hintsZh: e.hintsZh ?? [e.hintZh],
          testCases: [{ input: '', expectedOutput: e.expectedOutput }],
        });
      }

      // Inline exercise C++
      if (section.exerciseCpp) {
        const e = section.exerciseCpp;
        results.push({
          id: `alg-ex-${lesson.id}-${si}-cpp`,
          title: `${lesson.title} Exercise (C++)`,
          titleZh: `${lesson.title} 练习 (C++)`,
          language: 'cpp',
          difficulty: diff,
          level,
          category: 'Algorithms',
          categoryZh: '算法',
          tags: ['algorithms', lesson.moduleId, 'cpp'],
          description: e.prompt,
          descriptionZh: e.promptZh,
          examples: [],
          starterCode: e.starterCode,
          solution: e.solution,
          hints: e.hints ?? [e.hint],
          hintsZh: e.hintsZh ?? [e.hintZh],
          testCases: [{ input: '', expectedOutput: e.expectedOutput }],
        });
      }
    });
  }

  return results;
}

export const ALG_EXTRACTED_EXERCISES: UnifiedExercise[] = extractAlgExercises();
