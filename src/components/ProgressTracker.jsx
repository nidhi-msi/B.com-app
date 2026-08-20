import React from 'react';
import { SYLLABUS_DATA } from '../data/ignouSyllabus';
import { 
  Award, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle, 
  Zap, 
  Flame, 
  TrendingUp, 
  ChevronRight,
  Sparkles,
  Trophy,
  GraduationCap
} from 'lucide-react';

export default function ProgressTracker({ userProgress, onSelectSemSubject, setActiveTab }) {
  // Aggregate Stats
  let totalTopicsCount = 0;
  let totalQuizzesCount = 0;

  SYLLABUS_DATA.forEach(sem => {
    sem.subjects.forEach(sub => {
      sub.chapters.forEach(ch => {
        totalTopicsCount += ch.topics.length;
        ch.topics.forEach(top => {
          if (top.quiz) totalQuizzesCount += 1;
        });
      });
    });
  });

  const completedTopicsKeys = Object.keys(userProgress.completedTopics || {});
  const completedTopicsCount = completedTopicsKeys.length;
  const degreeProgressPercent = Math.min(100, Math.round((completedTopicsCount / (totalTopicsCount || 1)) * 100));

  // Compute average quiz accuracy
  let totalScorePoints = 0;
  let totalMaxScorePoints = 0;
  completedTopicsKeys.forEach(key => {
    const item = userProgress.completedTopics[key];
    if (item && item.score !== undefined && item.total) {
      totalScorePoints += item.score;
      totalMaxScorePoints += item.total;
    }
  });

  const accuracyPercent = totalMaxScorePoints > 0 
    ? Math.round((totalScorePoints / totalMaxScorePoints) * 100) 
    : 0;

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div 
        className="relative overflow-hidden p-6 sm:p-8 rounded-3xl border shadow-xl transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: 'var(--primary-500)' }} />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border"
              style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Student Performance Analytics</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-main)' }}>
              My Study <span className="gradient-text">Progress Tracker</span>
            </h1>
            <p className="text-xs sm:text-sm max-w-xl" style={{ color: 'var(--text-muted)' }}>
              Real-time tracking of completed chapters, quiz scores, and CBCS syllabus milestone completion.
            </p>
          </div>

          <div 
            className="flex items-center gap-4 p-4 rounded-2xl border"
            style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)' }}
          >
            <div className="text-center px-2">
              <p className="text-2xl sm:text-3xl font-extrabold font-serif gradient-text">{degreeProgressPercent}%</p>
              <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>Degree Progress</p>
            </div>
            <div className="w-[1px] h-10 bg-slate-700/30" />
            <div className="text-center px-2">
              <p className="text-2xl sm:text-3xl font-extrabold font-serif text-emerald-400">{userProgress.quizCompletedCount || 0}</p>
              <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: 'var(--text-muted)' }}>Quizzes Mastered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Completed Topics */}
        <div 
          className="p-5 rounded-2xl border transition-all"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Topics Completed</span>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)' }}>
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif" style={{ color: 'var(--text-main)' }}>{completedTopicsCount}</span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>/ {totalTopicsCount} total</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800/40 mt-3 overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-500" 
              style={{ width: `${degreeProgressPercent}%`, backgroundColor: 'var(--primary-500)' }} 
            />
          </div>
        </div>

        {/* Card 2: Quiz Accuracy */}
        <div 
          className="p-5 rounded-2xl border transition-all"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Quiz Accuracy</span>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-emerald-500/10 text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif text-emerald-400">{accuracyPercent}%</span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>avg score</span>
          </div>
          <p className="text-[11px] mt-3" style={{ color: 'var(--text-muted)' }}>
            {totalScorePoints} of {totalMaxScorePoints} points scored
          </p>
        </div>

        {/* Card 3: Subjects Covered */}
        <div 
          className="p-5 rounded-2xl border transition-all"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Subjects Studied</span>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-500/10 text-amber-400">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif" style={{ color: 'var(--text-main)' }}>
              {userProgress.completedSubjects?.length || 0}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>courses</span>
          </div>
          <p className="text-[11px] mt-3" style={{ color: 'var(--text-muted)' }}>
            Across 6 CBCS Semesters
          </p>
        </div>

        {/* Card 4: Exam Readiness */}
        <div 
          className="p-5 rounded-2xl border transition-all"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Exam Readiness</span>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-serif" style={{ color: 'var(--text-accent)' }}>
              {degreeProgressPercent > 50 ? 'Exam Ready' : 'In Progress'}
            </span>
          </div>
          <p className="text-[11px] mt-3" style={{ color: 'var(--text-muted)' }}>
            Practice PYQs & Blueprint
          </p>
        </div>

      </div>

      {/* Semester by Semester Breakdown */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold" style={{ color: 'var(--text-main)' }}>Semester Breakdown & Subject Mastery</h2>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Select any subject to jump straight into syllabus units</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SYLLABUS_DATA.map((sem) => {
            // Count total topics in this semester
            let semTopics = 0;
            let semCompletedTopics = 0;
            sem.subjects.forEach(sub => {
              sub.chapters.forEach(ch => {
                semTopics += ch.topics.length;
                ch.topics.forEach(top => {
                  if (userProgress.completedTopics && userProgress.completedTopics[top.id]) {
                    semCompletedTopics += 1;
                  }
                });
              });
            });

            const semPercent = Math.min(100, Math.round((semCompletedTopics / (semTopics || 1)) * 100));

            return (
              <div 
                key={sem.semId}
                className="p-5 rounded-2xl border flex flex-col justify-between space-y-4 transition-all hover:scale-[1.01]"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="text-xs font-bold px-2 py-0.5 rounded border font-mono"
                      style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
                    >
                      Semester {sem.semId}
                    </span>
                    <span className="text-xs font-bold font-mono" style={{ color: 'var(--text-accent)' }}>
                      {semPercent}% Complete
                    </span>
                  </div>

                  <h3 className="text-base font-bold mb-3" style={{ color: 'var(--text-main)' }}>
                    {sem.semTitle}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-slate-800/40 mb-4 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ width: `${semPercent}%`, backgroundColor: 'var(--primary-500)' }} 
                    />
                  </div>

                  {/* Subjects list */}
                  <div className="space-y-2">
                    {sem.subjects.map(sub => {
                      const isSubjectCompleted = userProgress.completedSubjects?.includes(sub.code);
                      return (
                        <div
                          key={sub.code}
                          onClick={() => {
                            onSelectSemSubject(sem.semId, sub.code);
                            setActiveTab('syllabus');
                          }}
                          className="p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all hover:scale-[1.01]"
                          style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)' }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold" style={{ color: 'var(--text-accent)' }}>
                              {sub.code}
                            </span>
                            <span className="text-xs font-medium line-clamp-1" style={{ color: 'var(--text-main)' }}>
                              {sub.title}
                            </span>
                          </div>
                          {isSubjectCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectSemSubject(sem.semId, sem.subjects[0]?.code);
                    setActiveTab('syllabus');
                  }}
                  className="w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all border"
                  style={{ 
                    backgroundColor: 'var(--primary-light)', 
                    borderColor: 'var(--border-color)', 
                    color: 'var(--text-accent)' 
                  }}
                >
                  <span>Open Semester {sem.semId} Syllabus</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
