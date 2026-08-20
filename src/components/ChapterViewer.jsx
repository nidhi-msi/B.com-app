import React from 'react';
import { BookOpen, Lightbulb, Zap, HelpCircle, FileText, CheckCircle2, Bookmark, Share2 } from 'lucide-react';

export default function ChapterViewer({ topic, chapter, subject, onStartQuiz, onViewPYQs }) {
  if (!topic) {
    return <div className="p-6 text-xs" style={{ color: 'var(--text-muted)' }}>Select a topic to begin studying.</div>;
  }

  return (
    <article 
      className="space-y-4 sm:space-y-6 border p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl animate-fadeIn transition-colors duration-300 shadow-md overflow-hidden"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      
      {/* Topic Title Header */}
      <div className="border-b pb-4 sm:pb-5" style={{ borderColor: 'var(--border-color)' }}>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span 
            className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded border"
            style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
          >
            {subject.code} • Unit {chapter.number}
          </span>
          <span className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{chapter.title}</span>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold break-words leading-tight" style={{ color: 'var(--text-main)' }}>
          {topic.title}
        </h2>
      </div>

      {/* Simplified Explanation Main Body */}
      <div 
        className="max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-3 sm:space-y-4 whitespace-pre-line break-words"
        style={{ color: 'var(--text-main)' }}
      >
        {topic.content}
      </div>

      {/* Memory Trick Mnemonic Box */}
      {topic.mnemonic && (
        <div 
          className="p-3.5 sm:p-5 rounded-2xl border"
          style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-hover)' }}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 font-bold text-[10px] sm:text-xs uppercase tracking-wider" style={{ color: 'var(--text-accent)' }}>
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span>IGNOU Exam Memory Mnemonic</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold break-words" style={{ color: 'var(--text-main)' }}>
            {topic.mnemonic}
          </p>
        </div>
      )}

      {/* Real World Example Box */}
      {topic.example && (
        <div 
          className="p-3.5 sm:p-5 rounded-2xl border"
          style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 font-bold text-[10px] sm:text-xs uppercase tracking-wider" style={{ color: 'var(--text-accent)' }}>
            <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: 'var(--text-accent)' }} />
            <span>Practical Business Application</span>
          </div>
          <p className="text-xs sm:text-sm italic leading-relaxed break-words" style={{ color: 'var(--text-muted)' }}>
            "{topic.example}"
          </p>
        </div>
      )}

      {/* Key Formulas / Definitions List */}
      {topic.keyFormulas && topic.keyFormulas.length > 0 && (
        <div 
          className="p-3.5 sm:p-5 rounded-2xl border"
          style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-color)' }}
        >
          <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3" style={{ color: 'var(--text-accent)' }}>
            Core Formulas & Exam Rules
          </h4>
          <div className="space-y-2">
            {topic.keyFormulas.map((form, i) => (
              <div 
                key={i} 
                className="flex items-start sm:items-center gap-2 text-xs font-mono font-bold p-2 sm:p-2.5 rounded-xl border break-words"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                <span className="w-2 h-2 rounded-full shrink-0 mt-1 sm:mt-0" style={{ backgroundColor: 'var(--primary-500)' }} />
                <span className="break-all">{form}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Action Footer Bar */}
      <div className="pt-4 sm:pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
          <button
            onClick={onStartQuiz}
            className="flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
            style={{ backgroundColor: 'var(--primary-500)' }}
          >
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>Take Quiz ({topic.quiz?.length || 0} Questions)</span>
          </button>

          <button
            onClick={onViewPYQs}
            className="flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border active:scale-95"
            style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
          >
            <FileText className="w-4 h-4 shrink-0" style={{ color: 'var(--text-accent)' }} />
            <span>View PYQs ({topic.pyqs?.length || 0})</span>
          </button>
        </div>
      </div>

    </article>
  );
}
