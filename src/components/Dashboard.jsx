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
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 border border-indigo-500/20 p-6 sm:p-10">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Official IGNOU B.Com (CBCS) Pattern</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Master Every Semester with <span className="gradient-text">IGNOU B.Com Hub</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Simplified chapter notes, topic-wise quizzes, real previous year exam questions (PYQs), and the official IGNOU 4-Block Answer Writing Blueprint.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                onSelectSemSubject(1, 'BCOC-131');
                setActiveTab('syllabus');
              }}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Start Semester 1 (BCOC-131)</span>
            </button>

            <button
              onClick={() => setActiveTab('answer-guide')}
              className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 flex items-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Answer Writing Guide</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white font-serif">{totalSubjects}</p>
            <p className="text-xs text-slate-400 font-medium">Core Courses</p>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white font-serif">{totalQuizzes}+</p>
            <p className="text-xs text-slate-400 font-medium">Topic Quizzes</p>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white font-serif">{totalPYQs}+</p>
            <p className="text-xs text-slate-400 font-medium">PYQs with Solutions</p>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white font-serif">4-Block</p>
            <p className="text-xs text-slate-400 font-medium">Answer Formula</p>
          </div>
        </div>
      </div>

      {/* Semester Explorer Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Explore Semesters</h2>
            <p className="text-xs text-slate-400">Click any semester to view course subjects and chapters</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SYLLABUS_DATA.map((sem) => (
            <div
              key={sem.semId}
              onClick={() => {
                onSelectSemSubject(sem.semId, sem.subjects[0]?.code);
                setActiveTab('syllabus');
              }}
              className="glass-card p-5 rounded-2xl cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold font-mono">
                    Sem {sem.semId}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {sem.subjects.length} Subjects
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                  {sem.semTitle}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  {sem.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {sem.subjects.map(sub => (
                    <div key={sub.code} className="flex items-center justify-between text-xs p-1.5 rounded-lg bg-slate-900/60 text-slate-300">
                      <span className="font-mono font-bold text-indigo-300">{sub.code}</span>
                      <span className="truncate max-w-[140px]">{sub.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>View Full Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Answer Writing Guide Preview Section */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              IGNOU Exam Strategy
            </span>
            <h2 className="text-2xl font-bold text-white mt-2">Word Limit & Time Management Rules</h2>
          </div>

          <button
            onClick={() => setActiveTab('answer-guide')}
            className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold text-xs border border-amber-500/30 flex items-center gap-1.5 transition-all"
          >
            <span>View Full Model Answers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ANSWER_GUIDE_DATA.markingRules.map((rule, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-extrabold text-amber-400 font-serif">{rule.marks} Marks</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    {rule.timeAllocation}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2">{rule.type}</h3>
                
                <div className="mb-4 text-xs space-y-1 bg-slate-900 p-2.5 rounded-xl text-slate-300">
                  <p><strong className="text-slate-200">Word Limit:</strong> {rule.wordLimit}</p>
                  <p><strong className="text-slate-200">Target Pages:</strong> {rule.recommendedPages}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400">
                  <p className="font-semibold text-slate-300">Structure Blueprint:</p>
                  <ul className="list-disc list-inside space-y-1">
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
