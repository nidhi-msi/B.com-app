import React, { useState, useEffect } from 'react';
import { SYLLABUS_DATA } from '../data/ignouSyllabus';
import ChapterViewer from './ChapterViewer';
import QuizRunner from './QuizRunner';
import PYQBank from './PYQBank';
import { 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  ChevronRight, 
  Award,
  Sparkles,
  Zap,
  Bookmark,
  GraduationCap
} from 'lucide-react';

export default function SyllabusExplorer({ 
  selectedSem, 
  setSelectedSem,
  selectedSubject, 
  setSelectedSubject, 
  onQuizComplete, 
  userProgress 
}) {
  const currentSem = SYLLABUS_DATA.find(s => s.semId === selectedSem) || SYLLABUS_DATA[0];
  const activeSubject = currentSem.subjects.find(sub => sub.code === selectedSubject) || currentSem.subjects[0];

  const [activeChapterId, setActiveChapterId] = useState(activeSubject?.chapters[0]?.id || null);
  const [activeTopicId, setActiveTopicId] = useState(activeSubject?.chapters[0]?.topics[0]?.id || null);
  const [viewMode, setViewMode] = useState('notes'); // 'notes' | 'quiz' | 'pyq'

  // Update active chapter and topic when subject changes
  useEffect(() => {
    if (activeSubject) {
      const firstCh = activeSubject.chapters[0];
      setActiveChapterId(firstCh?.id || null);
      setActiveTopicId(firstCh?.topics[0]?.id || null);
      setViewMode('notes');
    }
  }, [selectedSubject, selectedSem]);

  if (!activeSubject) {
    return <div className="p-8 text-center text-slate-400">Please select a semester and subject to view syllabus.</div>;
  }

  const activeChapter = activeSubject.chapters.find(ch => ch.id === activeChapterId) || activeSubject.chapters[0];
  const activeTopic = activeChapter?.topics.find(t => t.id === activeTopicId) || activeChapter?.topics[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* 1. Semester Tabs Bar (Sem 1 to 6) */}
      <div 
        className="p-2 sm:p-3 rounded-2xl border backdrop-blur-md shadow-md transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b text-xs font-bold uppercase tracking-wider" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" style={{ color: 'var(--text-accent)' }} />
            <span>Select Semester (CBCS)</span>
          </span>
          <span className="text-[10px] font-mono">6 Semesters Available</span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {SYLLABUS_DATA.map((sem) => {
            const isSemActive = selectedSem === sem.semId;
            return (
              <button
                key={sem.semId}
                onClick={() => {
                  setSelectedSem(sem.semId);
                  setSelectedSubject(sem.subjects[0]?.code || null);
                }}
                className="py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center border group relative"
                style={{
                  backgroundColor: isSemActive ? 'var(--primary-500)' : 'var(--bg-input)',
                  color: isSemActive ? '#ffffff' : 'var(--text-main)',
                  borderColor: isSemActive ? 'var(--primary-600)' : 'var(--border-color)'
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">Sem {sem.semId}</span>
                </div>
                <span 
                  className="text-[10px] font-normal opacity-80 mt-0.5"
                  style={{ color: isSemActive ? '#ffffff' : 'var(--text-muted)' }}
                >
                  {sem.subjects.length} Subjects
                </span>
                {isSemActive && (
                  <span className="absolute -bottom-1 w-4 h-1 rounded-full bg-white/80" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Subject Selection Tabs / Chips */}
      <div 
        className="p-3 sm:p-4 rounded-2xl border shadow-md transition-colors duration-300"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center justify-between mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--text-accent)' }} />
            <span>Semester {selectedSem} Subjects</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {currentSem.subjects.map((sub) => {
            const isSubActive = activeSubject.code === sub.code;
            const isSubDone = userProgress?.completedSubjects?.includes(sub.code);

            return (
              <button
                key={sub.code}
                onClick={() => setSelectedSubject(sub.code)}
                className="text-left p-3 rounded-xl border transition-all flex items-start justify-between group"
                style={{
                  backgroundColor: isSubActive ? 'var(--primary-light)' : 'var(--bg-input)',
                  borderColor: isSubActive ? 'var(--border-hover)' : 'var(--border-color)',
                  color: 'var(--text-main)',
                  boxShadow: isSubActive ? '0 0 0 1px var(--border-hover)' : 'none'
                }}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span 
                      className="px-2 py-0.5 rounded font-mono font-bold text-[11px] border"
                      style={{ 
                        backgroundColor: isSubActive ? 'var(--primary-500)' : 'var(--bg-card)', 
                        color: isSubActive ? '#ffffff' : 'var(--text-accent)',
                        borderColor: 'var(--border-color)'
                      }}
                    >
                      {sub.code}
                    </span>
                    <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{sub.credits} Credits</span>
                  </div>
                  <h4 className="text-xs font-bold line-clamp-1" style={{ color: 'var(--text-main)' }}>
                    {sub.title}
                  </h4>
                  <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{sub.chapters.length} Units • {sub.category}</p>
                </div>

                <div className="shrink-0 pt-0.5">
                  {isSubDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform ${isSubActive ? 'translate-x-0.5 text-indigo-400' : 'text-slate-500'}`} 
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Subject Header Banner */}
      <div 
        className="p-6 rounded-3xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-300 shadow-lg"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span 
              className="px-2.5 py-0.5 rounded font-mono font-bold text-xs border"
              style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
            >
              {activeSubject.code}
            </span>
            <span className="px-2.5 py-0.5 rounded font-semibold text-xs border" style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
              {activeSubject.category}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{activeSubject.credits} Credits</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--text-main)' }}>
            {activeSubject.title}
          </h1>
          <p className="text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {activeSubject.description}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Syllabus Coverage</p>
            <p className="text-lg font-bold font-serif" style={{ color: 'var(--text-main)' }}>{activeSubject.chapters.length} Units Available</p>
          </div>
        </div>
      </div>

      {/* 4. Units Tree & Content Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Chapters & Topics Navigation Tree */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-2xl border" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <Layers className="w-3.5 h-3.5" style={{ color: 'var(--text-accent)' }} />
              <span>Units & Topic Index</span>
            </h3>

            <div className="space-y-3">
              {activeSubject.chapters.map((ch) => (
                <div key={ch.id} className="rounded-xl border overflow-hidden" style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)' }}>
                  
                  {/* Chapter Title */}
                  <div 
                    onClick={() => {
                      setActiveChapterId(ch.id);
                      if (ch.topics[0]) setActiveTopicId(ch.topics[0].id);
                    }}
                    className="p-3 cursor-pointer flex items-center justify-between text-xs font-bold transition-colors border-b"
                    style={{ 
                      backgroundColor: activeChapterId === ch.id ? 'var(--primary-light)' : 'transparent',
                      color: 'var(--text-main)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] border"
                        style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
                      >
                        U{ch.number}
                      </span>
                      <span className="line-clamp-1">{ch.title}</span>
                    </div>
                    <span className="text-[10px] font-mono" style={{ color: 'var(--text-muted)' }}>{ch.topics.length} topics</span>
                  </div>

                  {/* Topics List under active chapter */}
                  {activeChapterId === ch.id && (
                    <div className="p-2 space-y-1" style={{ backgroundColor: 'var(--bg-card)' }}>
                      {ch.topics.map((t) => {
                        const isTopicSelected = activeTopicId === t.id;
                        const isTopicDone = userProgress?.completedTopics && userProgress.completedTopics[t.id];
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              setActiveTopicId(t.id);
                              setViewMode('notes');
                            }}
                            className="w-full text-left p-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between border"
                            style={{
                              backgroundColor: isTopicSelected ? 'var(--primary-500)' : 'transparent',
                              color: isTopicSelected ? '#ffffff' : 'var(--text-main)',
                              borderColor: isTopicSelected ? 'var(--primary-600)' : 'transparent'
                            }}
                          >
                            <div className="flex items-center gap-1.5 truncate pr-2">
                              {isTopicDone ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: isTopicSelected ? '#ffffff' : 'var(--text-muted)' }} />
                              )}
                              <span className="truncate">{t.title}</span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: isTopicSelected ? '#ffffff' : 'var(--text-muted)' }} />
                          </button>
                        );
                      })}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Active Content Viewer (Notes / Quiz / PYQ Tabs) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Content Mode Sub-Tabs Bar */}
          <div 
            className="flex items-center justify-between p-2 rounded-2xl border shadow-sm"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <div className="flex items-center gap-1.5 w-full sm:w-auto">
              <button
                onClick={() => setViewMode('notes')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border"
                style={{
                  backgroundColor: viewMode === 'notes' ? 'var(--primary-500)' : 'transparent',
                  color: viewMode === 'notes' ? '#ffffff' : 'var(--text-muted)',
                  borderColor: viewMode === 'notes' ? 'var(--primary-600)' : 'transparent'
                }}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Concept Notes</span>
              </button>

              <button
                onClick={() => setViewMode('quiz')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border"
                style={{
                  backgroundColor: viewMode === 'quiz' ? 'var(--primary-500)' : 'transparent',
                  color: viewMode === 'quiz' ? '#ffffff' : 'var(--text-muted)',
                  borderColor: viewMode === 'quiz' ? 'var(--primary-600)' : 'transparent'
                }}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Practice Quiz ({activeTopic?.quiz?.length || 0})</span>
              </button>

              <button
                onClick={() => setViewMode('pyq')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border"
                style={{
                  backgroundColor: viewMode === 'pyq' ? 'var(--primary-500)' : 'transparent',
                  color: viewMode === 'pyq' ? '#ffffff' : 'var(--text-muted)',
                  borderColor: viewMode === 'pyq' ? 'var(--primary-600)' : 'transparent'
                }}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Topic PYQs ({activeTopic?.pyqs?.length || 0})</span>
              </button>
            </div>
          </div>

          {/* Dynamic View Panel */}
          {viewMode === 'notes' && activeTopic && (
            <ChapterViewer 
              topic={activeTopic} 
              chapter={activeChapter} 
              subject={activeSubject} 
              onStartQuiz={() => setViewMode('quiz')}
              onViewPYQs={() => setViewMode('pyq')}
            />
          )}

          {viewMode === 'quiz' && activeTopic && (
            <QuizRunner 
              quizList={activeTopic.quiz || []} 
              topicTitle={activeTopic.title}
              onQuizComplete={(score, total) => onQuizComplete(activeTopic.id, score, total)}
            />
          )}

          {viewMode === 'pyq' && activeTopic && (
            <PYQBank 
              filterSubject={activeSubject.code}
              topicPyqs={activeTopic.pyqs || []} 
              topicTitle={activeTopic.title}
            />
          )}

        </div>

      </div>

    </div>
  );
}
