import React from 'react';
import { SYLLABUS_DATA } from '../data/ignouSyllabus';
import { ANSWER_GUIDE_DATA } from '../data/answerGuideData';
import { BookOpen, Award, FileText, Sparkles, ArrowRight, Play, CheckCircle, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function Dashboard({ onSelectSemSubject, setActiveTab, userProgress }) {
  // Aggregate Stats
  const totalSubjects = SYLLABUS_DATA.reduce((acc, sem) => acc + sem.subjects.length, 0);
  let totalQuizzes = 0;
  let totalPYQs = 0;

  SYLLABUS_DATA.forEach(sem => {
    sem.subjects.forEach(sub => {
      sub.chapters.forEach(ch => {
        ch.topics.forEach(top => {
          if (top.quiz) totalQuizzes += top.quiz.length;
          if (top.pyqs) totalPYQs += top.pyqs.length;
        });
      });
    });
  });

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      
      {/* Hero Banner */}
      <div 
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border p-5 sm:p-8 lg:p-10 transition-colors duration-300 shadow-lg"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-hover)'
        }}
      >
        <div className="absolute -right-10 -bottom-10 w-60 sm:w-80 h-60 sm:h-80 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: 'var(--primary-500)' }} />

        <div className="relative z-10 max-w-2xl space-y-3 sm:space-y-4">
          <div 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold border"
            style={{ 
              backgroundColor: 'var(--primary-light)', 
              color: 'var(--text-accent)',
              borderColor: 'var(--border-color)' 
            }}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Official IGNOU B.Com (CBCS) Pattern</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--text-main)' }}>
            Master Every Semester with <span className="gradient-text">IGNOU B.Com Hub</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Simplified chapter notes, topic-wise quizzes, real previous year exam questions (PYQs), and the official IGNOU 4-Block Answer Writing Blueprint.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
            <button
              onClick={() => {
                onSelectSemSubject(1, 'BCOC-131');
                setActiveTab('syllabus');
              }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 text-white"
              style={{
                backgroundColor: 'var(--primary-500)',
              }}
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start Semester 1 (BCOC-131)</span>
            </button>

            <button
              onClick={() => setActiveTab('answer-guide')}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm border flex items-center justify-center gap-2 transition-all active:scale-95"
              style={{
                backgroundColor: 'var(--bg-input)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-main)'
              }}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Answer Writing Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        <div className="glass-card p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-color)', color: 'var(--text-accent)' }}>
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold font-serif" style={{ color: 'var(--text-main)' }}>{totalSubjects}</p>
            <p className="text-[11px] sm:text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Core Courses</p>
          </div>
        </div>

        <div className="glass-card p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center text-emerald-500 shrink-0" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold font-serif" style={{ color: 'var(--text-main)' }}>{totalQuizzes}+</p>
            <p className="text-[11px] sm:text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Topic Quizzes</p>
          </div>
        </div>

        <div className="glass-card p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-color)', color: 'var(--text-accent)' }}>
            <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold font-serif" style={{ color: 'var(--text-main)' }}>{totalPYQs}+</p>
            <p className="text-[11px] sm:text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Solved PYQs</p>
          </div>
        </div>

        <div className="glass-card p-3.5 sm:p-5 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-color)', color: 'var(--text-accent)' }}>
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold font-serif" style={{ color: 'var(--text-main)' }}>4-Block</p>
            <p className="text-[11px] sm:text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Answer Blueprint</p>
          </div>
        </div>
      </div>

      {/* Semester Explorer Grid */}
      <div>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--text-main)' }}>Explore Semesters</h2>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Click any semester to view course subjects and chapters</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {SYLLABUS_DATA.map((sem) => (
            <div
              key={sem.semId}
              onClick={() => {
                onSelectSemSubject(sem.semId, sem.subjects[0]?.code);
                setActiveTab('syllabus');
              }}
              className="glass-card p-4 sm:p-5 rounded-2xl cursor-pointer group flex flex-col justify-between active:scale-[0.99]"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="px-2.5 py-0.5 rounded-lg border text-[11px] sm:text-xs font-bold font-mono" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-color)', color: 'var(--text-accent)' }}>
                    Sem {sem.semId}
                  </span>
                  <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                    <BookOpen className="w-3.5 h-3.5" />
                    {sem.subjects.length} Subjects
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold group-hover:opacity-80 transition-colors mb-1.5" style={{ color: 'var(--text-main)' }}>
                  {sem.semTitle}
                </h3>
                <p className="text-xs line-clamp-2 mb-3 sm:mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {sem.description}
                </p>

                <div className="space-y-1.5 mb-3 sm:mb-4">
                  {sem.subjects.map(sub => (
                    <div key={sub.code} className="flex items-center justify-between text-xs p-1.5 rounded-lg border" style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
                      <span className="font-mono font-bold shrink-0" style={{ color: 'var(--text-accent)' }}>{sub.code}</span>
                      <span className="truncate max-w-[150px] sm:max-w-[180px] pl-2 text-right">{sub.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t flex items-center justify-between text-xs font-semibold group-hover:translate-x-1 transition-transform" style={{ borderColor: 'var(--border-color)', color: 'var(--text-accent)' }}>
                <span>View Full Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Answer Writing Guide Preview Section */}
      <div className="rounded-2xl sm:rounded-3xl border p-4 sm:p-6 lg:p-8" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div>
            <span 
              className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-lg border"
              style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
            >
              IGNOU Exam Strategy
            </span>
            <h2 className="text-lg sm:text-2xl font-bold mt-1.5" style={{ color: 'var(--text-main)' }}>Word Limit & Time Management Rules</h2>
          </div>

          <button
            onClick={() => setActiveTab('answer-guide')}
            className="w-full md:w-auto px-4 py-2 rounded-xl font-semibold text-xs border flex items-center justify-center gap-1.5 transition-all active:scale-95"
            style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
          >
            <span>View Full Model Answers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          {ANSWER_GUIDE_DATA.markingRules.map((rule, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl border flex flex-col justify-between" style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)' }}>
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3 border-b pb-2" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="text-lg sm:text-xl font-extrabold font-serif" style={{ color: 'var(--text-main)' }}>{rule.marks} Marks</span>
                  <span className="text-xs flex items-center gap-1 font-mono font-bold" style={{ color: 'var(--text-accent)' }}>
                    <Clock className="w-3.5 h-3.5" style={{ color: 'var(--text-accent)' }} />
                    {rule.timeAllocation}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold mb-2" style={{ color: 'var(--text-main)' }}>{rule.type}</h3>
                
                <div className="mb-3 sm:mb-4 text-xs space-y-1 p-2 sm:p-2.5 rounded-xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
                  <p><strong>Word Limit:</strong> {rule.wordLimit}</p>
                  <p><strong>Target Pages:</strong> {rule.recommendedPages}</p>
                </div>

                <div className="space-y-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <p className="font-semibold" style={{ color: 'var(--text-main)' }}>Structure Blueprint:</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    {rule.structure.slice(0, 3).map((st, i) => (
                      <li key={i}>{st}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
