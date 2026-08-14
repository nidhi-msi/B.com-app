import React, { useState } from 'react';
import { SYLLABUS_DATA } from '../data/ignouSyllabus';
import ChapterViewer from './ChapterViewer';
import QuizRunner from './QuizRunner';
import PYQBank from './PYQBank';
import { BookOpen, Layers, CheckCircle2, HelpCircle, FileText, ChevronRight, Award } from 'lucide-react';

export default function SyllabusExplorer({ selectedSem, selectedSubject, setSelectedSubject, onQuizComplete, userProgress }) {
  const currentSem = SYLLABUS_DATA.find(s => s.semId === selectedSem) || SYLLABUS_DATA[0];
  const activeSubject = currentSem.subjects.find(sub => sub.code === selectedSubject) || currentSem.subjects[0];

  const [activeChapterId, setActiveChapterId] = useState(activeSubject?.chapters[0]?.id || null);
  const [activeTopicId, setActiveTopicId] = useState(activeSubject?.chapters[0]?.topics[0]?.id || null);
  const [viewMode, setViewMode] = useState('notes'); // 'notes' | 'quiz' | 'pyq'

  if (!activeSubject) {
    return <div className="p-8 text-center text-slate-400">Select a subject from the sidebar to view syllabus.</div>;
  }

  const activeChapter = activeSubject.chapters.find(ch => ch.id === activeChapterId) || activeSubject.chapters[0];
  const activeTopic = activeChapter?.topics.find(t => t.id === activeTopicId) || activeChapter?.topics[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Subject Header Banner */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs">
              {activeSubject.code}
            </span>
            <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-semibold text-xs">
              {activeSubject.category}
            </span>
            <span className="text-xs text-slate-400">{activeSubject.credits} Credits</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {activeSubject.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
            {activeSubject.description}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-slate-400">Chapter Units</p>
            <p className="text-lg font-bold text-white font-serif">{activeSubject.chapters.length} Units</p>
          </div>
        </div>
      </div>

      {/* Chapter & Topic Selectors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Chapters & Topics Tree */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Syllabus Units & Topics
            </h3>

            <div className="space-y-3">
              {activeSubject.chapters.map((ch) => (
                <div key={ch.id} className="rounded-xl border border-slate-800/80 bg-slate-950/50 overflow-hidden">
                  
                  {/* Chapter Title */}
                  <div 
                    onClick={() => {
                      setActiveChapterId(ch.id);
                      if (ch.topics[0]) setActiveTopicId(ch.topics[0].id);
                    }}
                    className={`p-3 cursor-pointer flex items-center justify-between text-xs font-bold transition-colors ${
                      activeChapterId === ch.id 
                        ? 'bg-indigo-950/80 text-indigo-200 border-b border-indigo-500/20' 
                        : 'text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-[10px]">
                        U{ch.number}
                      </span>
                      <span className="line-clamp-1">{ch.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{ch.topics.length} topics</span>
                  </div>

                  {/* Topics List under active chapter */}
                  {activeChapterId === ch.id && (
                    <div className="p-2 space-y-1 bg-slate-950/80">
                      {ch.topics.map((t) => {
                        const isTopicSelected = activeTopicId === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              setActiveTopicId(t.id);
                              setViewMode('notes');
                            }}
                            className={`w-full text-left p-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                              isTopicSelected
                                ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/20'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                            }`}
                          >
                            <span className="line-clamp-1">{t.title}</span>
                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isTopicSelected ? 'text-white' : 'text-slate-600'}`} />
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

        {/* Right Column: Active Content Viewer (Notes / Quiz / PYQ) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Content Mode Switcher Bar */}
          <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setViewMode('notes')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'notes'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Concept Notes</span>
              </button>

              <button
                onClick={() => setViewMode('quiz')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'quiz'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Topic Quiz ({activeTopic?.quiz?.length || 0})</span>
              </button>

              <button
                onClick={() => setViewMode('pyq')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'pyq'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
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
