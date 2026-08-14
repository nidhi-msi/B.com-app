import React from 'react';
import { SYLLABUS_DATA } from '../data/ignouSyllabus';
import { BookOpen, Layers, Award, Sparkles, ChevronRight, FileCheck, CheckCircle2 } from 'lucide-react';

export default function Sidebar({ selectedSem, setSelectedSem, selectedSubject, setSelectedSubject, activeTab, setActiveTab, userProgress }) {
  return (
    <aside className="w-full lg:w-72 bg-slate-900/60 border-r border-slate-800 p-4 flex flex-col gap-6 shrink-0">
      
      {/* Semester Selector */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            Select Semester
          </h3>
          <span className="text-[10px] text-slate-500 font-mono">6 Semesters</span>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-1 gap-1.5">
          {SYLLABUS_DATA.map((sem) => {
            const isSelected = selectedSem === sem.semId;
            return (
              <button
                key={sem.semId}
                onClick={() => {
                  setSelectedSem(sem.semId);
                  setSelectedSubject(sem.subjects[0]?.code || null);
                  if (activeTab !== 'syllabus') setActiveTab('syllabus');
                }}
                className={`flex items-center justify-between p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 font-bold'
                    : 'bg-slate-800/40 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-slate-600'}`} />
                  <span>{sem.semTitle}</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-900 text-slate-400'
                }`}>
                  {sem.subjects.length} Sub
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subjects in Current Semester */}
      {selectedSem && (
        <div>
          <div className="flex items-center justify-between mb-2.5 px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              Subjects (Sem {selectedSem})
            </h3>
          </div>

          <div className="flex flex-col gap-1.5">
            {SYLLABUS_DATA.find(s => s.semId === selectedSem)?.subjects.map((sub) => {
              const isSelected = selectedSubject === sub.code;
              const isCompleted = userProgress.completedSubjects.includes(sub.code);

              return (
                <button
                  key={sub.code}
                  onClick={() => {
                    setSelectedSubject(sub.code);
                    if (activeTab !== 'syllabus') setActiveTab('syllabus');
                  }}
                  className={`group text-left p-3 rounded-xl transition-all border ${
                    isSelected
                      ? 'bg-indigo-950/60 border-indigo-500/50 text-indigo-200'
                      : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                      {sub.code}
                    </span>
                    {isCompleted && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <p className="text-xs font-semibold line-clamp-1 group-hover:text-white transition-colors">
                    {sub.title}
                  </p>
                  <div className="flex items-center justify-between mt-2 text-[10px] text-slate-500">
                    <span>{sub.credits} Credits</span>
                    <span>{sub.chapters.length} Units</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Exam Master Quick Box */}
      <div className="mt-auto p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-purple-500/5 to-slate-900 border border-amber-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
          <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wide">Exam Answer Guide</h4>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed mb-3">
          Learn how many words to write for 5, 10 & 20 mark IGNOU questions + 4-Block Answer Blueprint.
        </p>
        <button
          onClick={() => setActiveTab('answer-guide')}
          className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
        >
          <span>Open Exam Master</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </aside>
  );
}
