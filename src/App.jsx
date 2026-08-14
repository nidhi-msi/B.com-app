import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SyllabusExplorer from './components/SyllabusExplorer';
import PYQBank from './components/PYQBank';
import AnswerGuide from './components/AnswerGuide';
import { SYLLABUS_DATA } from './data/ignouSyllabus';
import { Search, BookOpen, FileText, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'syllabus' | 'pyq' | 'answer-guide'
  const [selectedSem, setSelectedSem] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState('BCOC-131');
  const [searchQuery, setSearchQuery] = useState('');

  // User Progress Persistence
  const [userProgress, setUserProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('ignou_bcom_progress');
      return saved ? JSON.parse(saved) : { quizCompletedCount: 0, completedSubjects: [], completedTopics: {} };
    } catch(e) {
      return { quizCompletedCount: 0, completedSubjects: [], completedTopics: {} };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ignou_bcom_progress', JSON.stringify(userProgress));
    } catch(e) {}
  }, [userProgress]);

  const handleQuizComplete = (topicId, score, total) => {
    setUserProgress(prev => ({
      ...prev,
      quizCompletedCount: prev.quizCompletedCount + 1,
      completedTopics: {
        ...prev.completedTopics,
        [topicId]: { score, total, timestamp: Date.now() }
      }
    }));
  };

  const handleSelectSemSubject = (semId, subCode) => {
    setSelectedSem(semId);
    setSelectedSubject(subCode);
  };

  // Search Filtering across subjects, topics, and PYQs
  const searchResults = React.useMemo(() => {
    if (!searchQuery || searchQuery.trim().length < 2) return [];
    const q = searchQuery.toLowerCase().trim();

    const results = [];
    SYLLABUS_DATA.forEach(sem => {
      sem.subjects.forEach(sub => {
        if (sub.title.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q)) {
          results.push({ type: 'subject', semId: sem.semId, code: sub.code, title: sub.title, desc: sub.description });
        }
        sub.chapters.forEach(ch => {
          ch.topics.forEach(top => {
            if (top.title.toLowerCase().includes(q) || top.content.toLowerCase().includes(q)) {
              results.push({ type: 'topic', semId: sem.semId, code: sub.code, chapterTitle: ch.title, title: top.title });
            }
          });
        });
      });
    });
    return results;
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userProgress={userProgress}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col lg:flex-row">
        
        {/* Sidebar */}
        <Sidebar 
          selectedSem={selectedSem} 
          setSelectedSem={setSelectedSem} 
          selectedSubject={selectedSubject} 
          setSelectedSubject={setSelectedSubject} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          userProgress={userProgress}
        />

        {/* Dynamic Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-y-auto">
          
          {/* Global Search Results Drawer */}
          {searchQuery && searchQuery.trim().length >= 2 ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Search className="w-5 h-5 text-indigo-400" />
                  <span>Search Results for "{searchQuery}"</span>
                </h2>
                <span className="text-xs text-slate-400 font-mono">{searchResults.length} items found</span>
              </div>

              {searchResults.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-sm">No topics or subjects match your search keyword.</div>
              ) : (
                <div className="space-y-3">
                  {searchResults.map((res, i) => (
                    <div 
                      key={i}
                      onClick={() => {
                        handleSelectSemSubject(res.semId, res.code);
                        setActiveTab('syllabus');
                        setSearchQuery('');
                      }}
                      className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all flex items-center justify-between group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-mono font-bold text-[10px]">
                            {res.code} (Sem {res.semId})
                          </span>
                          <span className="text-xs text-slate-400 uppercase font-semibold">{res.type}</span>
                        </div>
                        <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {res.title}
                        </h3>
                        {res.chapterTitle && <p className="text-xs text-slate-400">Chapter: {res.chapterTitle}</p>}
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              {activeTab === 'dashboard' && (
                <Dashboard 
                  onSelectSemSubject={handleSelectSemSubject} 
                  setActiveTab={setActiveTab}
                  userProgress={userProgress}
                />
              )}

              {activeTab === 'syllabus' && (
                <SyllabusExplorer 
                  selectedSem={selectedSem}
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                  onQuizComplete={handleQuizComplete}
                  userProgress={userProgress}
                />
              )}

              {activeTab === 'pyq' && (
                <PYQBank filterSubject={null} />
              )}

              {activeTab === 'answer-guide' && (
                <AnswerGuide />
              )}
            </>
          )}

        </main>

      </div>

    </div>
  );
}
