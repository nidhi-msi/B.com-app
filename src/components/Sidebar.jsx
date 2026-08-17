import React from 'react';
import { SYLLABUS_DATA } from '../data/ignouSyllabus';
import { BookOpen, Layers, Award, Sparkles, ChevronRight, FileCheck, CheckCircle2 } from 'lucide-react';

export default function Sidebar({ selectedSem, setSelectedSem, selectedSubject, setSelectedSubject, activeTab, setActiveTab, userProgress }) {
  return (
    <aside 
      className="w-full lg:w-72 border-r p-4 flex flex-col gap-6 shrink-0 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-nav)', borderColor: 'var(--border-color)' }}
    >
      
      {/* Semester Selector */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            <Layers className="w-3.5 h-3.5" style={{ color: 'var(--text-accent)' }} />
            Select Semester
          </h3>
          <span className="text-[10px] font-mono opacity-70" style={{ color: 'var(--text-muted)' }}>6 Semesters</span>
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
                className="flex items-center justify-between p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border"
                style={{
                  backgroundColor: isSelected ? 'var(--primary-500)' : 'var(--bg-card)',
                  color: isSelected ? '#ffffff' : 'var(--text-main)',
                  borderColor: isSelected ? 'var(--primary-600)' : 'var(--border-color)'
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: isSelected ? '#fbbf24' : 'var(--text-muted)' }} />
                  <span>{sem.semTitle}</span>
                </div>
                <span 
                  className="text-[10px] px-1.5 py-0.5 rounded font-mono"
                  style={{
                    backgroundColor: isSelected ? 'rgba(0,0,0,0.2)' : 'var(--bg-input)',
                    color: isSelected ? '#ffffff' : 'var(--text-muted)'
                  }}
                >
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
            <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--text-accent)' }} />
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
                  className="group text-left p-3 rounded-xl transition-all border"
                  style={{
                    backgroundColor: isSelected ? 'var(--primary-light)' : 'var(--bg-card)',
                    borderColor: isSelected ? 'var(--border-hover)' : 'var(--border-color)',
                    color: 'var(--text-main)'
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span 
                      className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded border"
                      style={{ 
                        backgroundColor: 'var(--primary-light)', 
                        color: 'var(--text-accent)', 
                        borderColor: 'var(--border-color)' 
                      }}
                    >
                      {sub.code}
                    </span>
                    {isCompleted && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <p className="text-xs font-semibold line-clamp-1 transition-colors" style={{ color: 'var(--text-main)' }}>
                    {sub.title}
                  </p>
                  <div className="flex items-center justify-between mt-2 text-[10px]" style={{ color: 'var(--text-muted)' }}>
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
      <div 
        className="mt-auto p-4 rounded-2xl border transition-all"
        style={{
          backgroundColor: 'var(--primary-light)',
          borderColor: 'var(--border-hover)'
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 animate-bounce text-amber-400" />
          <h4 className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--text-accent)' }}>Exam Answer Guide</h4>
        </div>
        <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text-muted)' }}>
          Learn how many words to write for 5, 10 & 20 mark IGNOU questions + 4-Block Answer Blueprint.
        </p>
        <button
          onClick={() => setActiveTab('answer-guide')}
          className="w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--primary-500)',
            color: '#ffffff'
          }}
        >
          <span>Open Exam Master</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </aside>
  );
}
