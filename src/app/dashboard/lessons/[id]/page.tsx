"use client";

import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getLessonById, getAdjacentLessons, type LessonSection } from "@/data/lessons";
import InlineCodeExercise from "@/components/InlineCodeExercise";
import { CODE_EXERCISES } from "@/data/code-challenges";
import { completeLesson, getProgress, saveLessonPosition, getLessonPosition } from "@/lib/progress-store";
import { isPreviewMode, isLessonUnlocked } from "@/lib/preview-mode";
import { nl2br } from "@/lib/nl2br";
import CodeEditor from "@/components/CodeEditor";
import {
  ParsonsExercise,
  FillBlankExercise,
  OutputChoiceExercise,
  BugHuntExercise,
} from "@/components/InteractiveExercises";
import Celebration from "@/components/Celebration";
import ConceptSection from "@/components/ConceptSection";
import TurtleQuiz from "@/components/TurtleQuiz";
import type { QuizScore } from "@/components/TurtleQuiz";
import Link from "next/link";

// Map DS lesson IDs to playground tab hashes
const DS_PLAYGROUND_TAB: Record<string, string> = {
  "ds-1-1": "array",
  "ds-1-2": "linked-list",
  "ds-1-3": "linked-list",
  "ds-1-4": "stack",
  "ds-1-5": "stack",
  "ds-2-1": "queue",
  "ds-2-2": "queue",
  "ds-2-3": "bst",
  "ds-2-4": "bst",
  "ds-3-1": "hashmap",
  "ds-3-3": "graph",
  "ds-3-4": "graph",
  "ds-4-1": "sorting",
};

function TextSection({ section }: { section: LessonSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl p-6"
      style={{ backgroundColor: "var(--theme-card-bg)", border: "1px solid var(--theme-border)" }}
    >
      {section.emoji && <div className="text-4xl mb-4">{section.emoji}</div>}
      <div
        className="prose prose-invert prose-sm max-w-none
          prose-headings:text-green-400 prose-h1:text-xl prose-h1:mt-4 prose-h1:mb-3 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-2 prose-h2:border-b prose-h2:border-[var(--theme-border)] prose-h2:pb-1
          prose-strong:text-cyan-400
          prose-code:text-green-300 prose-code:bg-[var(--theme-card-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-[var(--theme-border)] prose-pre:rounded-lg prose-pre:p-3 prose-pre:my-4
          prose-table:border-collapse prose-td:border prose-td:border-[var(--theme-border)] prose-td:px-3 prose-td:py-2
          prose-th:border prose-th:border-[var(--theme-border)] prose-th:px-3 prose-th:py-2 prose-th:bg-[var(--theme-card-bg)]"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(section.content) }}
      />
    </motion.div>
  );
}

function InteractiveSection({ section }: { section: LessonSection }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl p-6"
    >
      {section.emoji && <div className="text-4xl mb-4">{section.emoji}</div>}
      <div
        className="prose prose-invert prose-sm max-w-none
          prose-headings:text-purple-400 prose-h1:text-xl prose-h1:mt-4 prose-h1:mb-3 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-2 prose-h2:border-b prose-h2:border-[var(--theme-border)] prose-h2:pb-1
          prose-strong:text-cyan-400
          prose-code:text-green-300 prose-code:bg-[var(--theme-card-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-[var(--theme-border)] prose-pre:rounded-lg prose-pre:p-3 prose-pre:my-4
          prose-blockquote:border-l-purple-500 prose-blockquote:text-[var(--theme-text-secondary)]"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(section.content) }}
      />
    </motion.div>
  );
}

function CodeSection({ section, language = "python" }: { section: LessonSection; language?: "python" | "cpp" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div
        className="prose prose-invert prose-sm max-w-none
          prose-headings:text-green-400 prose-h1:text-xl prose-h1:mt-4 prose-h1:mb-3 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-2 prose-h2:border-b prose-h2:border-[var(--theme-border)] prose-h2:pb-1
          prose-code:text-green-300 prose-code:bg-[var(--theme-card-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-[var(--theme-border)] prose-pre:rounded-lg prose-pre:p-3 prose-pre:my-4"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(section.content) }}
      />
      {section.code && <CodeEditor initialCode={section.code} language={language} />}
    </motion.div>
  );
}

function ChallengeSection({ section, lessonId, language = "python" }: { section: LessonSection; lessonId?: string; language?: "python" | "cpp" }) {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const challenge = section.challenge!;

  // Check if there's a Code Lab project for this lesson
  const linkedProject = lessonId ? CODE_EXERCISES.find((ex) => ex.fromLesson === lessonId) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6 space-y-4"
    >
      <h3 className="text-xl font-bold text-yellow-400">{challenge.title}</h3>
      <p className="text-[var(--theme-text-secondary)]">{nl2br(challenge.description)}</p>

      {linkedProject && (
        <a
          href={`/dashboard/code-lab?project=${linkedProject.id}`}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition-colors hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #22c55e, #06b6d4)",
            color: "#000",
          }}
        >
          🚀 Open Project in Code Lab · 在代码实验室中打开
        </a>
      )}

      <CodeEditor initialCode={challenge.starterCode} language={language} />

      <div className="flex gap-3">
        <button
          onClick={() => setShowHint(!showHint)}
          className="px-4 py-2 text-sm bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors"
        >
          💡 {showHint ? "Hide Hint · 隐藏提示" : "Show Hint · 显示提示"}
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="px-4 py-2 text-sm bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] rounded-lg hover:bg-[var(--theme-card-bg)] transition-colors"
        >
          👀 {showSolution ? "Hide Solution · 隐藏答案" : "Show Solution · 显示答案"}
        </button>
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-sm text-yellow-200"
          >
            💡 {nl2br(challenge.hint)}
          </motion.div>
        )}
        {showSolution && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <CodeEditor initialCode={challenge.solution} readOnly language={language} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// QuizSection removed — replaced by TurtleQuiz component

// Simple markdown to HTML converter
function markdownToHtml(md: string): string {
  // First, extract and convert markdown tables to HTML tables
  md = md.replace(/((?:^\|.+\|$\n?)+)/gm, (tableBlock) => {
    const rows = tableBlock.trim().split('\n').filter(r => r.trim());
    if (rows.length < 2) return tableBlock;
    const parseRow = (row: string) => row.split('|').filter(Boolean).map(c => c.trim());
    const headerCells = parseRow(rows[0]);
    // Check if row 1 is separator (---|---|---)
    const isSep = (row: string) => parseRow(row).every(c => /^[-:]+$/.test(c));
    let headerHtml = '<thead><tr>' + headerCells.map(c => `<th>${c}</th>`).join('') + '</tr></thead>';
    const dataStartIdx = isSep(rows[1]) ? 2 : 1;
    const bodyRows = rows.slice(dataStartIdx)
      .filter(r => !isSep(r))
      .map(r => '<tr>' + parseRow(r).map(c => `<td>${c}</td>`).join('') + '</tr>')
      .join('');
    return `<table style="width:100%;border-collapse:collapse;margin:0.75rem 0;font-size:0.85rem">${headerHtml}<tbody>${bodyRows}</tbody></table>`
      .replace(/<th>/g, '<th style="text-align:left;padding:0.5rem 0.75rem;border:1px solid var(--theme-border);background:var(--theme-card-bg);font-weight:bold">')
      .replace(/<td>/g, '<td style="padding:0.5rem 0.75rem;border:1px solid var(--theme-border)">');

  });

  let html = md
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    .replace(/\n\n/g, '</p><div style="margin-top:1rem"></div><p>')
    .replace(/\n/g, '<br/>');

  if (!html.startsWith('<')) html = '<p>' + html + '</p>';

  // Wrap content after <h2> in indented blocks (until next <h2> or end)
  html = html.replace(/(<h2>[\s\S]*?<\/h2>)([\s\S]*?)(?=<h2>|$)/g, (_, heading, body) => {
    if (!body.trim()) return heading;
    return `${heading}<div style="margin-left:1.25rem;padding-left:0.75rem;border-left:2px solid rgba(255,255,255,0.1);margin-bottom:0.5rem">${body}</div>`;
  });

  return html;
}

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.id as string;
  const lesson = getLessonById(lessonId);
  const [currentSection, setCurrentSection] = useState(() => getLessonPosition(lessonId));

  // Preview mode: redirect if lesson not allowed
  useEffect(() => {
    if (isPreviewMode() && !isLessonUnlocked(lessonId)) {
      router.replace("/dashboard/lessons");
    }
  }, [lessonId, router]);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [superuser, setSuperuser] = useState(false);
  const [codeLang, setCodeLang] = useState<"python" | "cpp">(() => {
    if (lessonId.startsWith("cpp-")) return "cpp";
    if (lessonId.startsWith("ai-")) return "python";
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("codeBuddy-codeLang");
      if (saved === "cpp") return "cpp";
    }
    return "python";
  });

  useEffect(() => {
    localStorage.setItem("codeBuddy-codeLang", codeLang);
  }, [codeLang]);

  useEffect(() => {
    const p = getProgress();
    setIsCompleted(p.completedLessons.includes(lessonId));
    // Check superuser (unlocks navigation but doesn't fake completion)
    import("@/lib/auth-store").then(m => m.isSuperuser()).then(su => {
      if (su) setSuperuser(true);
    });
  }, [lessonId]);

  // Save position whenever section changes
  useEffect(() => {
    saveLessonPosition(lessonId, currentSection);
  }, [lessonId, currentSection]);

  if (!lesson) {
    return (
      <div className="p-8 text-center">
        <div className="text-6xl mb-4">🤔</div>
        <h1 className="text-2xl font-bold mb-2">Lesson not found</h1>
        <p className="text-sm text-[var(--theme-text-muted)] mb-2">找不到这节课</p>
        <button onClick={() => router.push("/dashboard/lessons")} className="text-cyan-400 hover:underline">
          ← Back to lessons · 返回课程
        </button>
      </div>
    );
  }

  const section = lesson.sections[currentSection];
  const isLast = currentSection === lesson.sections.length - 1;

  const handleComplete = () => {
    completeLesson(lessonId, quizScore || 0, lesson.xp);
    setIsCompleted(true);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  // Quiz completion now handled by TurtleQuiz onQuizComplete callback

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {showCelebration && <Celebration />}

      {/* Floating DS Playground button */}
      {DS_PLAYGROUND_TAB[lessonId] && (
        <Link
          href={`/dashboard/data-structures#${DS_PLAYGROUND_TAB[lessonId]}`}
          className="fixed bottom-20 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-transform"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            color: "#fff",
          }}
        >
          🎮 Open Playground
        </Link>
      )}

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <button
          onClick={() => router.push("/dashboard/lessons")}
          className="text-sm text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] mb-4 inline-block"
        >
          ← Back to lessons · 返回课程
        </button>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{lesson.icon}</span>
          <div>
            <h1 className="text-2xl font-bold">{lesson.title}</h1>
            <p className="text-[var(--theme-text-secondary)]">{lesson.subtitle}</p>
          </div>
          <div className="ml-auto text-sm text-green-400">+{lesson.xp} XP</div>
        </div>
      </motion.div>

      {/* Progress dots */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {lesson.sections.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrentSection(i); window.scrollTo(0, 0); }}
            className={`h-2 rounded-full transition-all ${
              i === currentSection
                ? "w-8 bg-green-500"
                : i < currentSection
                ? "w-2 bg-green-500/50"
                : "w-2 bg-[var(--theme-card-bg)]"
            }`}
          />
        ))}
      </div>

      {/* Course-level language toggle for DS and ALG lessons */}
      {(lessonId.startsWith("ds-") || lessonId.startsWith("alg-")) && (
        <div className="flex gap-2 justify-center mb-6">
          <button
            onClick={() => setCodeLang("python")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${codeLang === "python" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50" : "bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] border border-transparent hover:border-cyan-500/30"}`}
          >🐍 Python</button>
          <button
            onClick={() => setCodeLang("cpp")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${codeLang === "cpp" ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/50" : "bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] border border-transparent hover:border-indigo-500/30"}`}
          >⚡ C++</button>
        </div>
      )}

      {/* Section content */}
      <AnimatePresence mode="wait">
        <div key={currentSection} className="space-y-6">
          {section.type === "concept" && <ConceptSection section={section} language={lessonId.startsWith("cpp-") ? "cpp" : codeLang} />}
          {section.type === "text" && <TextSection section={section} />}
          {section.type === "interactive" && <InteractiveSection section={section} />}
          {section.type === "code" && <CodeSection section={{
            ...section,
            ...(codeLang === "cpp" && section.codeCpp ? { code: section.codeCpp } : {}),
          }} language={lessonId.startsWith("cpp-") ? "cpp" : codeLang} />}
          {section.type === "challenge" && (
              <ChallengeSection
                section={codeLang === "cpp" && section.challengeCpp ? { ...section, challenge: section.challengeCpp } : section}
                lessonId={lessonId}
                language={codeLang === "cpp" && section.challengeCpp ? "cpp" : (lessonId.startsWith("cpp-") ? "cpp" : "python")}
              />
          )}
          {section.type === "quiz" && (
            <TurtleQuiz
              section={section}
              lessonXP={lesson.xp}
              onQuizComplete={(score: QuizScore) => {
                setQuizPassed(true);
                const pct = Math.round((score.correctFirstTry / Math.max(1, score.totalQuestions)) * 100);
                setQuizScore(pct);
                // Auto-complete lesson with scored XP
                if (!isCompleted) {
                  completeLesson(lessonId, pct, score.xpEarned);
                  setIsCompleted(true);
                  // Don't show the global celebration overlay — TurtleQuiz handles its own
                }
              }}
            />
          )}
          {section.type === "parsons" && <ParsonsExercise section={section} />}
          {section.type === "fill-blank" && <FillBlankExercise section={section} />}
          {section.type === "output-choice" && <OutputChoiceExercise section={section} />}
          {section.type === "bug-hunt" && <BugHuntExercise section={section} />}
          {section.type === "animation" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[var(--theme-card-bg)] border border-cyan-500/30 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🎬</div>
              <p className="text-[var(--theme-text-secondary)]">{section.content}</p>
              <p className="text-sm text-[var(--theme-text-muted)] mt-2">(Animation coming soon · 动画组件开发中)</p>
            </motion.div>
          )}

          {/* Inline Code Exercise */}
          {(section.exercise || section.exerciseCpp) && (
              <InlineCodeExercise exercise={{
                ...(codeLang === "cpp" && section.exerciseCpp ? section.exerciseCpp : section.exercise!),
                language: codeLang === "cpp" && section.exerciseCpp ? "cpp" : (lessonId.startsWith("cpp-") ? "cpp" : "python"),
              }} />
          )}
        </div>
      </AnimatePresence>

      {/* Section Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => { setCurrentSection(Math.max(0, currentSection - 1)); window.scrollTo(0, 0); }}
          disabled={currentSection === 0}
          className="px-4 py-2 text-sm bg-[var(--theme-card-bg)] text-[var(--theme-text-secondary)] rounded-lg disabled:opacity-30 hover:bg-[var(--theme-card-bg)] transition-colors"
        >
          ← Previous · 上一页
        </button>

        {isLast ? (
          section.type === "quiz" ? (
            // Quiz section handles its own completion via TurtleQuiz
            quizPassed || isCompleted ? (
              <div className="px-6 py-2 bg-green-500/20 text-green-400 rounded-lg font-bold">
                ✅ Completed! · 已完成！
              </div>
            ) : (
              <div className="px-6 py-2 text-[var(--theme-text-muted)] text-sm">
                🐢 Complete the quiz to finish! · 完成测验才能过关！
              </div>
            )
          ) : isCompleted ? (
            <div className="px-6 py-2 bg-green-500/20 text-green-400 rounded-lg font-bold">
              ✅ Completed! · 已完成！
            </div>
          ) : (
            <button
              onClick={handleComplete}
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              🎉 Complete Lesson · 完成课程 (+{lesson.xp} XP)
            </button>
          )
        ) : (
          <button
            onClick={() => { setCurrentSection(Math.min(lesson.sections.length - 1, currentSection + 1)); window.scrollTo(0, 0); }}
            className="px-6 py-2 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            Next → 下一页
          </button>
        )}
      </div>

      {/* Lesson Navigation (Next/Previous Lesson) */}
      <LessonNavigation lessonId={lessonId} isCompleted={isCompleted || superuser} />
    </div>
  );
}

function LessonNavigation({ lessonId, isCompleted }: { lessonId: string; isCompleted: boolean }) {
  const router = useRouter();
  const { prev, next, isLastInModule, isVeryLast, nextModuleTitle } = getAdjacentLessons(lessonId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-12 pt-8"
      style={{ borderTop: "1px solid var(--theme-border)" }}
    >
      {/* Back to lessons link */}
      <div className="text-center mb-4">
        <button
          onClick={() => router.push("/dashboard/lessons")}
          className="text-sm text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] transition-colors"
        >
          📚 Back to Lessons · 返回课程列表
        </button>
      </div>

      {/* Module complete message */}
      {isCompleted && isVeryLast && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-6 p-6 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
        >
          <div className="text-5xl mb-2">🏆</div>
          <h3 className="text-xl font-bold text-yellow-400">You&apos;ve completed all lessons!</h3>
          <p className="text-sm text-yellow-200/70 mt-1">你已经完成了所有课程！太棒了！</p>
        </motion.div>
      )}

      {isCompleted && isLastInModule && !isVeryLast && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-6 p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30"
        >
          <div className="text-5xl mb-2">🎉</div>
          <h3 className="text-xl font-bold text-green-400">Module Complete!</h3>
          <p className="text-sm text-green-200/70 mt-1">模块完成！</p>
          {nextModuleTitle && (
            <p className="text-sm text-[var(--theme-text-secondary)] mt-2">Next up: {nextModuleTitle}</p>
          )}
        </motion.div>
      )}

      {/* Prev / Next lesson buttons */}
      <div className="flex justify-between gap-4">
        {prev ? (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push(`/dashboard/lessons/${prev.id}`)}
            className="flex-1 px-5 py-4 rounded-xl text-left transition-colors"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              border: "1px solid var(--theme-border)",
            }}
          >
            <div className="text-xs text-[var(--theme-text-secondary)] mb-1">← Previous Lesson · 上一课</div>
            <div className="font-bold text-sm">{prev.icon} {prev.title}</div>
          </motion.button>
        ) : (
          <div className="flex-1" />
        )}

        {next && !isVeryLast ? (
          <motion.button
            whileHover={isCompleted ? { scale: 1.03 } : {}}
            whileTap={isCompleted ? { scale: 0.97 } : {}}
            onClick={() => isCompleted && router.push(`/dashboard/lessons/${next.id}`)}
            disabled={!isCompleted}
            className={`flex-1 px-5 py-4 rounded-xl text-right font-bold transition-all ${!isCompleted ? "opacity-50 cursor-not-allowed" : ""}`}
            style={{
              background: isCompleted
                ? "linear-gradient(135deg, var(--theme-accent, #22c55e), #06b6d4)"
                : "var(--theme-card-bg)",
              color: isCompleted ? "#000" : "var(--theme-text-muted)",
              border: isCompleted ? "none" : "1px solid var(--theme-border)",
            }}
          >
            <div className="text-xs opacity-80 mb-1">
              {isCompleted ? "Next Lesson · 下一课 →" : "🔒 Complete quiz first · 先完成测验"}
            </div>
            <div className="text-sm">{next.icon} {next.title}</div>
          </motion.button>
        ) : isVeryLast ? (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/dashboard")}
            className="flex-1 px-5 py-4 rounded-xl text-right font-bold"
            style={{
              background: "linear-gradient(135deg, #eab308, #f97316)",
              color: "#000",
            }}
          >
            <div className="text-xs opacity-80 mb-1">All Done! · 全部完成！</div>
            <div className="text-sm">🏆 Back to Dashboard · 返回首页</div>
          </motion.button>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </motion.div>
  );
}
