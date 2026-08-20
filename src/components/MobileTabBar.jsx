import React from 'react';
import { Home, BookOpen, FileText, Sparkles, BarChart3 } from 'lucide-react';

export default function MobileTabBar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
    { id: 'pyq', label: 'PYQ Bank', icon: FileText },
    { id: 'answer-guide', label: 'Exam Master', icon: Sparkles },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
  ];

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-xl transition-colors duration-300 shadow-2xl px-1.5 pt-1.5"
      style={{
        backgroundColor: 'var(--bg-nav)',
        borderColor: 'var(--border-color)',
        paddingBottom: 'calc(0.4rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all duration-200 min-w-[54px] relative active:scale-95"
              style={{
                color: isActive ? 'var(--text-accent)' : 'var(--text-muted)',
                backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
              }}
            >
              {isActive && (
                <span 
                  className="absolute -top-1 w-5 h-0.5 rounded-full shadow-sm" 
                  style={{ backgroundColor: 'var(--primary-500)' }} 
                />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-200`} />
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
