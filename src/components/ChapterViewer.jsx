import React from 'react';
import { BookOpen, Lightbulb, Zap, HelpCircle, FileText, CheckCircle2, Bookmark, Share2 } from 'lucide-react';

export default function ChapterViewer({ topic, chapter, subject, onStartQuiz, onViewPYQs }) {
  if (!topic) {
    return <div className="p-6 text-slate-400">Select a topic to begin studying.</div>;
  }

  return (
    <div className="space-y-6 bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-3xl animate-fadeIn">
      
      {/* Topic Title Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
            {subject.code} • Unit {chapter.number}
          </span>
          <span className="text-xs text-slate-400">{chapter.title}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          {topic.title}
        </h2>
      </div>

      {/* Simplified Explanation Main Body */}
      <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
        {topic.content}
      </div>

      {/* Memory Trick Mnemonic Box */}
      {topic.mnemonic && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-slate-900 border border-amber-500/30">
          <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>IGNOU Exam Memory Mnemonic</span>
          </div>
          <p className="text-sm font-semibold text-amber-200">
            {topic.mnemonic}
          </p>
        </div>
      )}

      {/* Real World Example Box */}
      {topic.example && (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
            <Lightbulb className="w-4 h-4 text-indigo-400" />
            <span>Practical Business Application</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            "{topic.example}"
          </p>
        </div>
      )}

      {/* Key Formulas / Definitions List */}
      {topic.keyFormulas && topic.keyFormulas.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3">
            Core Formulas & Exam Rules
          </h4>
          <div className="space-y-2">
            {topic.keyFormulas.map((form, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-200 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                <span>{form}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Action Footer Bar */}
      <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onStartQuiz}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Take Topic Quiz ({topic.quiz?.length || 0} Questions)</span>
          </button>

          <button
            onClick={onViewPYQs}
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-purple-600/20"
          >
            <FileText className="w-4 h-4" />
            <span>View Topic PYQs ({topic.pyqs?.length || 0})</span>
          </button>
        </div>
      </div>

    </div>
  );
}
