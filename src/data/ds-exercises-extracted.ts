// Auto-extracted exercises and challenges from DS lessons
import { DS_LESSONS } from './ds-lessons';
import type { UnifiedExercise } from './unified-exercises';

function extractDsExercises(): UnifiedExercise[] {
  const results: UnifiedExercise[] = [];
  const moduleLevel: Record<string, number> = { 'ds-1': 2, 'ds-2': 3, 'ds-3': 3, 'ds-4': 4 };
  const diffMap: Record<string, 'easy' | 'medium' | 'hard'> = {
    beginner: 'easy', intermediate: 'medium', advanced: 'hard',
  };

  for (const lesson of DS_LESSONS) {
    const level = moduleLevel[lesson.moduleId] ?? 3;
    const diff = diffMap[lesson.difficulty ?? ''] ?? 'medium';

    lesson.sections.forEach((section, si) => {
      // Challenge (Python)
      if (section.challenge) {
        const c = section.challenge;
        results.push({
          id: `ds-ch-${lesson.id}-${si}`,
          title: c.title || `${lesson.title} Challenge`,
          titleZh: c.title || `${lesson.title} 挑战`,
          language: 'python',
          difficulty: diff,
          level,
          category: 'Data Structures',
          categoryZh: '数据结构',
          tags: ['data-structures', lesson.moduleId],
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
          id: `ds-ch-${lesson.id}-${si}-cpp`,
          title: c.title || `${lesson.title} Challenge (C++)`,
          titleZh: c.title || `${lesson.title} 挑战 (C++)`,
          language: 'cpp',
          difficulty: diff,
          level,
          category: 'Data Structures',
          categoryZh: '数据结构',
          tags: ['data-structures', lesson.moduleId, 'cpp'],
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
          id: `ds-ex-${lesson.id}-${si}`,
          title: `${lesson.title} Exercise`,
          titleZh: `${lesson.title} 练习`,
          language: 'python',
          difficulty: diff,
          level,
          category: 'Data Structures',
          categoryZh: '数据结构',
          tags: ['data-structures', lesson.moduleId],
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
          id: `ds-ex-${lesson.id}-${si}-cpp`,
          title: `${lesson.title} Exercise (C++)`,
          titleZh: `${lesson.title} 练习 (C++)`,
          language: 'cpp',
          difficulty: diff,
          level,
          category: 'Data Structures',
          categoryZh: '数据结构',
          tags: ['data-structures', lesson.moduleId, 'cpp'],
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

export const DS_EXTRACTED_EXERCISES: UnifiedExercise[] = extractDsExercises();
