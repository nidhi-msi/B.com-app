import React, { useState } from 'react';
import { BookOpen, Search, Award, FileText, CheckSquare, Sparkles, GraduationCap, Home, Palette, Sun, Moon } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery, 
  userProgress,
  currentTheme,
  setCurrentTheme,
  colorMode,
  setColorMode
}) {
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themes = [
    { id: 'falcon', name: 'Falcon', primary: '#AD8797', secondary: '#7D5764', desc: 'Dusty Mauve & Burgundy Tint' },
    { id: 'toast', name: 'Toast', primary: '#9E796C', secondary: '#724E4B', desc: 'Warm Terracotta & Taupe' },
    { id: 'asparagus', name: 'Asparagus', primary: '#7A8959', secondary: '#4A5437', desc: 'Earthy Sage Green' },
    { id: 'indigo', name: 'Indigo', primary: '#6366f1', secondary: '#a855f7', desc: 'Classic Deep Indigo' },
  ];

  const currentThemeObj = themes.find(t => t.id === currentTheme) || themes[0];

  return (
    <header className="sticky top-0 z-40 glass-panel border-b backdrop-blur-md transition-colors duration-300" style={{ backgroundColor: 'var(--bg-nav)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-0.5 shadow-lg group-hover:scale-105 transition-transform"
              style={{ background: `linear-gradient(135deg, ${currentThemeObj.primary}, ${currentThemeObj.secondary})` }}
            >
              <div className="w-full h-full rounded-[10px] flex items-center justify-center" style={{ backgroundColor: 'var(--bg-app)' }}>
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: 'var(--text-accent)' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight font-serif" style={{ color: 'var(--text-main)' }}>
                  IGNOU <span className="gradient-text">B.Com</span>
                </span>
                <span 
                  className="text-[9px] sm:text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded border"
                  style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
                >
                  CBCS
                </span>
              </div>
              <p className="text-[11px] hidden sm:block" style={{ color: 'var(--text-muted)' }}>Semester Hub & Exam Master</p>
            </div>
          </div>

          {/* Global Search Bar */}
          <div className="flex-1 max-w-sm sm:max-w-md mx-1 sm:mx-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search subjects, topics, PYQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-1 transition-all"
                style={{ 
                  backgroundColor: 'var(--bg-input)', 
                  borderColor: 'var(--border-color)', 
                  color: 'var(--text-main)'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs hover:opacity-100 opacity-70"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-1.5">
            <button
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative"
              style={{
                backgroundColor: activeTab === 'dashboard' ? 'var(--primary-light)' : 'transparent',
                color: activeTab === 'dashboard' ? 'var(--text-accent)' : 'var(--text-muted)',
                border: activeTab === 'dashboard' ? '1px solid var(--border-hover)' : '1px solid transparent'
              }}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('syllabus')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative"
              style={{
                backgroundColor: activeTab === 'syllabus' ? 'var(--primary-light)' : 'transparent',
                color: activeTab === 'syllabus' ? 'var(--text-accent)' : 'var(--text-muted)',
                border: activeTab === 'syllabus' ? '1px solid var(--border-hover)' : '1px solid transparent'
              }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Syllabus</span>
            </button>

            <button
              onClick={() => setActiveTab('pyq')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative"
              style={{
                backgroundColor: activeTab === 'pyq' ? 'var(--primary-light)' : 'transparent',
                color: activeTab === 'pyq' ? 'var(--text-accent)' : 'var(--text-muted)',
                border: activeTab === 'pyq' ? '1px solid var(--border-hover)' : '1px solid transparent'
              }}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PYQs</span>
            </button>

            <button
              onClick={() => setActiveTab('answer-guide')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative"
              style={{
                backgroundColor: activeTab === 'answer-guide' ? 'var(--primary-light)' : 'transparent',
                color: activeTab === 'answer-guide' ? 'var(--text-accent)' : 'var(--text-muted)',
                border: activeTab === 'answer-guide' ? '1px solid var(--border-hover)' : '1px solid transparent'
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Exam Master</span>
            </button>

            <button
              onClick={() => setActiveTab('progress')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative"
              style={{
                backgroundColor: activeTab === 'progress' ? 'var(--primary-light)' : 'transparent',
                color: activeTab === 'progress' ? 'var(--text-accent)' : 'var(--text-muted)',
                border: activeTab === 'progress' ? '1px solid var(--border-hover)' : '1px solid transparent'
              }}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Progress</span>
              {userProgress?.quizCompletedCount > 0 && (
                <span 
                  className="ml-0.5 text-[9px] font-bold px-1.5 py-0.2 rounded-full"
                  style={{ backgroundColor: 'var(--primary-500)', color: '#ffffff' }}
                >
                  {userProgress.quizCompletedCount}
                </span>
              )}
            </button>
          </div>

          {/* Theme & Mode Switcher */}
          <div className="flex items-center gap-1.5 shrink-0">
            
            {/* Theme Palette Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                title="Change Color Theme"
              >
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: currentThemeObj.primary }} />
                  <span className="w-2.5 h-2.5 rounded-full inline-block -ml-1.5" style={{ backgroundColor: currentThemeObj.secondary }} />
                </div>
                <span className="hidden sm:inline font-bold text-xs capitalize">{currentThemeObj.name}</span>
                <Palette className="w-3.5 h-3.5 opacity-70" />
              </button>

              {/* Theme Selection Menu */}
              {showThemeMenu && (
                <div 
                  className="absolute right-0 mt-2 w-56 rounded-2xl p-2 shadow-2xl border backdrop-blur-xl z-50 animate-fadeIn"
                  style={{ 
                    backgroundColor: 'var(--bg-nav)', 
                    borderColor: 'var(--border-color)' 
                  }}
                >
                  <p className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5" style={{ color: 'var(--text-muted)' }}>
                    Select App Palette
                  </p>
                  <div className="space-y-1">
                    {themes.map((t) => {
                      const isActive = currentTheme === t.id;
                      return (
                        <button
                          key={t.id}
                          onClick={() => {
                            setCurrentTheme(t.id);
                            setShowThemeMenu(false);
                          }}
                          className="w-full flex items-center justify-between p-2 rounded-xl text-left transition-all"
                          style={{
                            backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                            color: isActive ? 'var(--text-accent)' : 'var(--text-main)'
                          }}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="flex items-center">
                              <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: t.primary }} />
                              <span className="w-3 h-3 rounded-full border border-black/20 -ml-1.5" style={{ backgroundColor: t.secondary }} />
                            </div>
                            <div>
                              <p className="text-xs font-bold">{t.name}</p>
                              <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>{t.desc}</p>
                            </div>
                          </div>
                          {isActive && <span className="text-xs font-bold text-emerald-400">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl border text-xs font-semibold transition-all hover:scale-105 flex items-center justify-center"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                borderColor: 'var(--border-color)',
                color: 'var(--text-main)'
              }}
              title={`Switch to ${colorMode === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {colorMode === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}

