import React, { useState } from 'react';
import { ANSWER_GUIDE_DATA } from '../data/answerGuideData';
import { Sparkles, Clock, BookOpen, PieChart, ListOrdered, CheckCircle2, ShieldAlert, Award, FileText, Check, AlertTriangle } from 'lucide-react';

export default function AnswerGuide() {
  const [selectedModelId, setSelectedModelId] = useState(ANSWER_GUIDE_DATA.modelAnswers[0].id);
  const activeModel = ANSWER_GUIDE_DATA.modelAnswers.find(m => m.id === selectedModelId) || ANSWER_GUIDE_DATA.modelAnswers[0];

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Hero Header */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-950/40 via-purple-950/30 to-slate-900 border border-amber-500/20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>IGNOU Term-End Exam (TEE) Mastery</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Answer Writing & <span className="gradient-text-gold">Marking Scheme Guide</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mt-2">
          Learn exact word count limits, time management formulas, and the proven IGNOU 4-Block answer structure to convert your knowledge into 85%+ exam scores.
        </p>
      </div>

      {/* Section 1: Word Limit & Time Management per Mark Category */}
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <span>1. Word Limit & Time Allocation Matrix</span>
          </h2>
          <p className="text-xs text-slate-400">Strictly follow these boundaries to finish the 3-hour exam with 10 mins spare.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ANSWER_GUIDE_DATA.markingRules.map((rule, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <span className="text-2xl font-extrabold text-amber-400 font-serif">{rule.marks} Marks</span>
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
                    {rule.timeAllocation}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-3">{rule.type}</h3>

                <div className="space-y-2 text-xs bg-slate-950 p-3 rounded-xl border border-slate-800/80 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Word Count:</span>
                    <span className="font-bold text-slate-200 font-mono">{rule.wordLimit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Pages:</span>
                    <span className="font-bold text-slate-200 font-mono">{rule.recommendedPages}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Required Blueprint:</p>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {rule.structure.map((st, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-amber-200/90 italic bg-amber-500/5 p-2.5 rounded-xl border border-amber-500/20">
                💡 <strong>Pro Tip:</strong> {rule.proTip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: The IGNOU 4-Block Answer Blueprint */}
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <PieChart className="w-5 h-5 text-indigo-400" />
            <span>2. The IGNOU 4-Block Answer Structuring Formula</span>
          </h2>
          <p className="text-xs text-slate-400">Structure every 10-mark and 20-mark answer using these four mandatory sections.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ANSWER_GUIDE_DATA.fourBlockFormula.map((blk) => (
            <div key={blk.step} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 relative overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold text-sm">
                0{blk.step}
              </div>

              <h3 className="text-sm font-bold text-white">{blk.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{blk.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Interactive Model Answer Evaluator (Average vs Topper) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
            Side-by-Side Model Answers
          </span>
          <h2 className="text-2xl font-bold text-white mt-2">
            Compare Average Answer vs 90%+ Topper Answer
          </h2>
          <p className="text-xs text-slate-400 mt-1">See why some answers get 4/10 while others score 9.5/10 with the exact same knowledge.</p>
        </div>

        {/* Model Answer Question Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          {ANSWER_GUIDE_DATA.modelAnswers.map((ma) => (
            <button
              key={ma.id}
              onClick={() => setSelectedModelId(ma.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedModelId === ma.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <span>{ma.subject} ({ma.marks} Marks)</span>
            </button>
          ))}
        </div>

        {/* Question Prompt */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-medium text-xs sm:text-sm text-slate-200">
          <strong className="text-amber-400">Exam Question:</strong> {activeModel.question}
        </div>

        {/* Side by Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Average Answer Column */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-rose-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <h3 className="text-sm font-bold text-rose-300">Average Student Answer</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono font-bold text-xs">
                Score: {activeModel.averageAnswer.score}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200">
              <strong>Examiner Critique:</strong> {activeModel.averageAnswer.feedback}
            </div>

            <div className="prose prose-invert max-w-none text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-line bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {activeModel.averageAnswer.text}
            </div>
          </div>

          {/* Topper Model Answer Column */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-emerald-300">90%+ Topper Model Answer</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                Score: {activeModel.topperAnswer.score}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200">
              <strong>Examiner Praise:</strong> {activeModel.topperAnswer.feedback}
            </div>

            <div className="prose prose-invert max-w-none text-xs text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {activeModel.topperAnswer.text}
            </div>
          </div>

        </div>
      </div>

      {/* Section 4: Final Exam Day Checklist */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>IGNOU Exam Day Checklist for High Scores</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ANSWER_GUIDE_DATA.examWritingChecklist.map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                ✓
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
