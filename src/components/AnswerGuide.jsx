import React, { useState } from 'react';
import { ANSWER_GUIDE_DATA } from '../data/answerGuideData';
import { Sparkles, Clock, BookOpen, PieChart, ListOrdered, CheckCircle2, ShieldAlert, Award, FileText, Check, AlertTriangle } from 'lucide-react';

export default function AnswerGuide() {
  const [selectedModelId, setSelectedModelId] = useState(ANSWER_GUIDE_DATA.modelAnswers[0].id);
  const activeModel = ANSWER_GUIDE_DATA.modelAnswers.find(m => m.id === selectedModelId) || ANSWER_GUIDE_DATA.modelAnswers[0];

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Hero Header */}
      <div 
        className="p-6 sm:p-10 rounded-3xl border transition-colors duration-300 shadow-lg"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 border"
          style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--text-accent)' }} />
          <span>IGNOU Term-End Exam (TEE) Mastery</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-main)' }}>
          Answer Writing & <span className="gradient-text">Marking Scheme Guide</span>
        </h1>

        <p className="text-sm sm:text-base max-w-3xl leading-relaxed mt-2" style={{ color: 'var(--text-muted)' }}>
          Learn exact word count limits, time management formulas, and the proven IGNOU 4-Block answer structure to convert your knowledge into 85%+ exam scores.
        </p>
      </div>

      {/* Section 1: Word Limit & Time Management per Mark Category */}
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
            <Clock className="w-5 h-5" style={{ color: 'var(--text-accent)' }} />
            <span>1. Word Limit & Time Allocation Matrix</span>
          </h2>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Strictly follow these boundaries to finish the 3-hour exam with 10 mins spare.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ANSWER_GUIDE_DATA.markingRules.map((rule, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-2xl border flex flex-col justify-between space-y-4"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div>
                <div className="flex items-center justify-between border-b pb-3 mb-3" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="text-2xl font-extrabold font-serif" style={{ color: 'var(--text-main)' }}>{rule.marks} Marks</span>
                  <span 
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold border"
                    style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
                  >
                    {rule.timeAllocation}
                  </span>
                </div>

                <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--text-main)' }}>{rule.type}</h3>

                <div className="space-y-2 text-xs p-3 rounded-xl border mb-4" style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--text-muted)' }}>Word Count:</span>
                    <span className="font-bold font-mono" style={{ color: 'var(--text-main)' }}>{rule.wordLimit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--text-muted)' }}>Target Pages:</span>
                    <span className="font-bold font-mono" style={{ color: 'var(--text-main)' }}>{rule.recommendedPages}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>Required Blueprint:</p>
                  <ul className="space-y-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                    {rule.structure.map((st, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: 'var(--primary-500)' }} />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div 
                className="pt-3 text-[11px] leading-relaxed p-3 rounded-xl border"
                style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-hover)', color: 'var(--text-main)' }}
              >
                💡 <strong>Pro Tip:</strong> {rule.proTip}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: The IGNOU 4-Block Answer Blueprint */}
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
            <PieChart className="w-5 h-5" style={{ color: 'var(--text-accent)' }} />
            <span>2. The IGNOU 4-Block Answer Structuring Formula</span>
          </h2>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Structure every 10-mark and 20-mark answer using these four mandatory sections.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ANSWER_GUIDE_DATA.fourBlockFormula.map((blk) => (
            <div 
              key={blk.step} 
              className="p-5 rounded-2xl border space-y-3 relative overflow-hidden transition-all hover:scale-[1.01]"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div 
                className="w-8 h-8 rounded-xl border flex items-center justify-center font-mono font-bold text-sm"
                style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-color)', color: 'var(--text-accent)' }}
              >
                0{blk.step}
              </div>

              <h3 className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>{blk.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{blk.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Interactive Model Answer Evaluator (Average vs Topper) */}
      <div 
        className="p-6 sm:p-8 rounded-3xl border space-y-6"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div>
          <span 
            className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border"
            style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
          >
            Side-by-Side Model Answers
          </span>
          <h2 className="text-2xl font-bold mt-2" style={{ color: 'var(--text-main)' }}>
            Compare Average Answer vs 90%+ Topper Answer
          </h2>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>See why some answers get 4/10 while others score 9.5/10 with the exact same knowledge.</p>
        </div>

        {/* Model Answer Question Tabs */}
        <div className="flex flex-wrap gap-2 border-b pb-3" style={{ borderColor: 'var(--border-color)' }}>
          {ANSWER_GUIDE_DATA.modelAnswers.map((ma) => {
            const isSelected = selectedModelId === ma.id;
            return (
              <button
                key={ma.id}
                onClick={() => setSelectedModelId(ma.id)}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all border"
                style={{
                  backgroundColor: isSelected ? 'var(--primary-500)' : 'var(--bg-input)',
                  color: isSelected ? '#ffffff' : 'var(--text-main)',
                  borderColor: isSelected ? 'var(--primary-600)' : 'var(--border-color)'
                }}
              >
                <span>{ma.subject} ({ma.marks} Marks)</span>
              </button>
            );
          })}
        </div>

        {/* Question Prompt */}
        <div 
          className="p-4 rounded-2xl border font-medium text-xs sm:text-sm"
          style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
        >
          <strong style={{ color: 'var(--text-accent)' }}>Exam Question:</strong> {activeModel.question}
        </div>

        {/* Side by Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Average Answer Column */}
          <div 
            className="p-5 rounded-2xl border space-y-4"
            style={{ backgroundColor: 'var(--bg-input)', borderColor: 'rgba(244, 63, 94, 0.4)' }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500" />
                <h3 className="text-sm font-bold text-rose-600 dark:text-rose-300">Average Student Answer</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-mono font-bold text-xs">
                Score: {activeModel.averageAnswer.score}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-700 dark:text-rose-200">
              <strong>Examiner Critique:</strong> {activeModel.averageAnswer.feedback}
            </div>

            <div 
              className="max-w-none text-xs leading-relaxed font-mono whitespace-pre-line p-4 rounded-xl border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
            >
              {activeModel.averageAnswer.text}
            </div>
          </div>

          {/* Topper Model Answer Column */}
          <div 
            className="p-5 rounded-2xl border space-y-4"
            style={{ backgroundColor: 'var(--bg-input)', borderColor: 'rgba(16, 185, 129, 0.4)' }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-500" />
                <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-300">90%+ Topper Model Answer</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                Score: {activeModel.topperAnswer.score}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-200">
              <strong>Examiner Praise:</strong> {activeModel.topperAnswer.feedback}
            </div>

            <div 
              className="max-w-none text-xs leading-relaxed font-mono whitespace-pre-line p-4 rounded-xl border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
            >
              {activeModel.topperAnswer.text}
            </div>
          </div>

        </div>
      </div>

      {/* Section 4: Final Exam Day Checklist */}
      <div 
        className="p-6 rounded-3xl border"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span>IGNOU Exam Day Checklist for High Scores</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ANSWER_GUIDE_DATA.examWritingChecklist.map((item, idx) => (
            <div 
              key={idx} 
              className="p-3 rounded-xl border text-xs flex items-start gap-2.5"
              style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
            >
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
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
