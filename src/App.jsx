import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileTabBar from './components/MobileTabBar';
import Dashboard from './components/Dashboard';
import SyllabusExplorer from './components/SyllabusExplorer';
import PYQBank from './components/PYQBank';
import AnswerGuide from './components/AnswerGuide';
import ProgressTracker from './components/ProgressTracker';
import { SYLLABUS_DATA } from './data/ignouSyllabus';
import { Search, BookOpen, FileText, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'syllabus' | 'pyq' | 'answer-guide' | 'progress'
  const [selectedSem, setSelectedSem] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState('BCOC-131');
  const [searchQuery, setSearchQuery] = useState('');

  // Theme & Mode State Persistence (falcon | toast | asparagus | indigo)
  const [currentTheme, setCurrentTheme] = useState(() => {
    try {
      return localStorage.getItem('ignou_bcom_theme') || 'falcon';
    } catch(e) {
      return 'falcon';
    }
  });

  const [colorMode, setColorMode] = useState(() => {
    try {
      return localStorage.getItem('ignou_bcom_mode') || 'dark';
    } catch(e) {
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ignou_bcom_theme', currentTheme);
      localStorage.setItem('ignou_bcom_mode', colorMode);
    } catch(e) {}
  }, [currentTheme, colorMode]);

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
    <div className={`theme-${currentTheme} ${colorMode} min-h-screen flex flex-col font-sans transition-colors duration-300`} style={{ backgroundColor: 'var(--bg-app)', color: 'var(--text-main)' }}>
      
      {/* Top Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        userProgress={userProgress}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        colorMode={colorMode}
        setColorMode={setColorMode}
      />

      {/* Main Content Workspace Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto pb-safe md:pb-12 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-6">
        
        <main className="min-w-0">
          
          {/* Global Search Results Drawer */}
          {searchQuery && searchQuery.trim().length >= 2 ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
                <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
                  <Search className="w-5 h-5" style={{ color: 'var(--text-accent)' }} />
                  <span>Search Results for "{searchQuery}"</span>
                </h2>
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{searchResults.length} items found</span>
              </div>

              {searchResults.length === 0 ? (
                <div className="p-8 text-center text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>
                  No topics or subjects match your search keyword.
                </div>
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
                      className="p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between group"
                      style={{ 
                        backgroundColor: 'var(--bg-card)', 
                        borderColor: 'var(--border-color)' 
                      }}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span 
                            className="px-2 py-0.5 rounded font-mono font-bold text-[10px] border"
                            style={{ 
                              backgroundColor: 'var(--primary-light)', 
                              color: 'var(--text-accent)',
                              borderColor: 'var(--border-color)'
                            }}
                          >
                            {res.code} (Sem {res.semId})
                          </span>
                          <span className="text-xs uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>{res.type}</span>
                        </div>
                        <h3 className="text-sm font-bold transition-colors" style={{ color: 'var(--text-main)' }}>
                          {res.title}
                        </h3>
                        {res.chapterTitle && <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Chapter: {res.chapterTitle}</p>}
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-all" style={{ color: 'var(--text-accent)' }} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Tab 1: Dashboard */}
              {activeTab === 'dashboard' && (
                <Dashboard 
                  onSelectSemSubject={handleSelectSemSubject} 
                  setActiveTab={setActiveTab}
                  userProgress={userProgress}
                />
              )}

              {/* Tab 2: Syllabus Explorer */}
              {activeTab === 'syllabus' && (
                <SyllabusExplorer 
                  selectedSem={selectedSem}
                  setSelectedSem={setSelectedSem}
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                  onQuizComplete={handleQuizComplete}
                  userProgress={userProgress}
                />
              )}

              {/* Tab 3: PYQ Bank */}
              {activeTab === 'pyq' && (
                <PYQBank filterSubject={null} />
              )}

              {/* Tab 4: Exam Master (Answer Guide) */}
              {activeTab === 'answer-guide' && (
                <AnswerGuide />
              )}

              {/* Tab 5: Progress & Analytics */}
              {activeTab === 'progress' && (
                <ProgressTracker 
                  userProgress={userProgress}
                  onSelectSemSubject={handleSelectSemSubject}
                  setActiveTab={setActiveTab}
                />
              )}
            </>
          )}

        </main>

      </div>

      {/* Mobile Sticky Bottom Tab Bar */}
      <MobileTabBar activeTab={activeTab} setActiveTab={setActiveTab} />

    </div>
  );
}
