import React, { useState } from 'react';
import { ANSWER_GUIDE_DATA } from '../data/answerGuideData';
import { 
  Sparkles, 
  Clock, 
  BookOpen, 
  PieChart, 
  ListOrdered, 
  CheckCircle2, 
  ShieldAlert, 
  Award, 
  FileText, 
  Check, 
  AlertTriangle,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function AnswerGuide() {
  const [activeGuideTab, setActiveGuideTab] = useState('matrix'); // 'matrix' | 'blueprint' | 'modelAnswers' | 'checklist'
  const [selectedModelId, setSelectedModelId] = useState(ANSWER_GUIDE_DATA.modelAnswers[0].id);
  const activeModel = ANSWER_GUIDE_DATA.modelAnswers.find(m => m.id === selectedModelId) || ANSWER_GUIDE_DATA.modelAnswers[0];

  const guideTabs = [
    { id: 'matrix', label: '1. Word & Time Matrix', icon: Clock, desc: '5, 10 & 20 mark limits' },
    { id: 'blueprint', label: '2. 4-Block Blueprint', icon: PieChart, desc: 'Structure formula' },
    { id: 'modelAnswers', label: '3. Solved Model Answers', icon: Award, desc: 'Average vs Topper' },
    { id: 'checklist', label: '4. Exam Day Checklist', icon: CheckCircle2, desc: 'Crucial scoring rules' },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 animate-fadeIn">
      
      {/* Hero Header */}
      <div 
        className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border transition-colors duration-300 shadow-md"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div 
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3 border"
          style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--text-accent)' }} />
          <span>IGNOU Term-End Exam (TEE) Mastery</span>
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold leading-tight" style={{ color: 'var(--text-main)' }}>
          Exam Answer Writing & <span className="gradient-text">Marking Scheme Blueprint</span>
        </h1>

        <p className="text-xs sm:text-sm max-w-3xl leading-relaxed mt-1.5 sm:mt-2" style={{ color: 'var(--text-muted)' }}>
          Learn exact word count limits, time management formulas, and the proven IGNOU 4-Block answer structure to convert your knowledge into 85%+ exam scores.
        </p>
      </div>

      {/* Guide Sub-Tabs Navigation Bar (2x2 Grid on Mobile, 4-in-a-row on Desktop) */}
      <div 
        className="p-1.5 sm:p-2 rounded-2xl border shadow-sm"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2">
          {guideTabs.map(tab => {
            const Icon = tab.icon;
            const isTabActive = activeGuideTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveGuideTab(tab.id)}
                className="p-2 sm:p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 border active:scale-95 text-left"
                style={{
                  backgroundColor: isTabActive ? 'var(--primary-500)' : 'transparent',
                  color: isTabActive ? '#ffffff' : 'var(--text-muted)',
                  borderColor: isTabActive ? 'var(--primary-600)' : 'transparent'
                }}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <div className="min-w-0 flex-1 sm:flex-none">
                  <p className="leading-tight text-[11px] sm:text-xs truncate">{tab.label}</p>
                  <p className={`text-[9px] sm:text-[10px] font-normal leading-tight truncate ${isTabActive ? 'text-white/80' : 'opacity-70'}`}>
                    {tab.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: Word Limit & Time Management per Mark Category */}
      {activeGuideTab === 'matrix' && (
        <div className="space-y-4 sm:space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--text-accent)' }} />
              <span>Word Limit & Time Allocation Matrix</span>
            </h2>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Strictly follow these boundaries to finish the 3-hour exam with 10 mins spare.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {ANSWER_GUIDE_DATA.markingRules.map((rule, idx) => (
              <div 
                key={idx} 
                className="p-4 sm:p-6 rounded-2xl border flex flex-col justify-between space-y-4 shadow-sm"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <div>
                  <div className="flex items-center justify-between border-b pb-3 mb-3" style={{ borderColor: 'var(--border-color)' }}>
                    <span className="text-xl sm:text-2xl font-extrabold font-serif" style={{ color: 'var(--text-main)' }}>{rule.marks} Marks</span>
                    <span 
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold border"
                      style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
                    >
                      {rule.timeAllocation}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold mb-3" style={{ color: 'var(--text-main)' }}>{rule.type}</h3>

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
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-main)' }}>Required Blueprint:</p>
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
                  className="pt-2.5 text-[11px] leading-relaxed p-3 rounded-xl border"
                  style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-hover)', color: 'var(--text-main)' }}
                >
                  💡 <strong>Pro Tip:</strong> {rule.proTip}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: The IGNOU 4-Block Answer Blueprint */}
      {activeGuideTab === 'blueprint' && (
        <div className="space-y-4 sm:space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
              <PieChart className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--text-accent)' }} />
              <span>The IGNOU 4-Block Answer Structuring Formula</span>
            </h2>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Structure every 10-mark and 20-mark answer using these four mandatory sections.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {ANSWER_GUIDE_DATA.fourBlockFormula.map((blk) => (
              <div 
                key={blk.step} 
                className="p-4 sm:p-5 rounded-2xl border space-y-2.5 sm:space-y-3 relative overflow-hidden transition-all hover:scale-[1.01]"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <div 
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center font-mono font-bold text-xs sm:text-sm"
                  style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-color)', color: 'var(--text-accent)' }}
                >
                  0{blk.step}
                </div>

                <h3 className="text-xs sm:text-sm font-bold" style={{ color: 'var(--text-main)' }}>{blk.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{blk.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Model Answer Evaluator (Average vs Topper) */}
      {activeGuideTab === 'modelAnswers' && (
        <div 
          className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border space-y-4 sm:space-y-6 animate-fadeIn"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div>
            <span 
              className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border"
              style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
            >
              Side-by-Side Model Answers
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2" style={{ color: 'var(--text-main)' }}>
              Compare Average Answer vs 90%+ Topper Answer
            </h2>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>See why some answers get 4/10 while others score 9.5/10 with the exact same knowledge.</p>
          </div>

          {/* Model Answer Question Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 border-b pb-3" style={{ borderColor: 'var(--border-color)' }}>
            {ANSWER_GUIDE_DATA.modelAnswers.map((ma) => {
              const isSelected = selectedModelId === ma.id;
              return (
                <button
                  key={ma.id}
                  onClick={() => setSelectedModelId(ma.id)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all border active:scale-95"
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
            className="p-3.5 sm:p-4 rounded-2xl border font-medium text-xs sm:text-sm break-words"
            style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
          >
            <strong style={{ color: 'var(--text-accent)' }}>Exam Question:</strong> {activeModel.question}
          </div>

          {/* Side by Side Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Average Answer Column */}
            <div 
              className="p-4 sm:p-5 rounded-2xl border space-y-3 sm:space-y-4"
              style={{ backgroundColor: 'var(--bg-input)', borderColor: 'rgba(244, 63, 94, 0.4)' }}
            >
              <div className="flex items-center justify-between border-b pb-3 gap-2" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                  <h3 className="text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-300 truncate">Average Student Answer</h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-mono font-bold text-[10px] sm:text-xs shrink-0">
                  Score: {activeModel.averageAnswer.score}
                </span>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-700 dark:text-rose-200 leading-relaxed">
                <strong>Examiner Critique:</strong> {activeModel.averageAnswer.feedback}
              </div>

              <div 
                className="max-w-none text-xs leading-relaxed font-mono whitespace-pre-line p-3 sm:p-4 rounded-xl border break-words overflow-x-auto"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                {activeModel.averageAnswer.text}
              </div>
            </div>

            {/* Topper Model Answer Column */}
            <div 
              className="p-4 sm:p-5 rounded-2xl border space-y-3 sm:space-y-4"
              style={{ backgroundColor: 'var(--bg-input)', borderColor: 'rgba(16, 185, 129, 0.4)' }}
            >
              <div className="flex items-center justify-between border-b pb-3 gap-2" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                  <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h3 className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-300 truncate">90%+ Topper Model Answer</h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px] sm:text-xs shrink-0">
                  Score: {activeModel.topperAnswer.score}
                </span>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed">
                <strong>Examiner Praise:</strong> {activeModel.topperAnswer.feedback}
              </div>

              <div 
                className="max-w-none text-xs leading-relaxed font-mono whitespace-pre-line p-3 sm:p-4 rounded-xl border break-words overflow-x-auto"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                {activeModel.topperAnswer.text}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Tab 4: Final Exam Day Checklist */}
      {activeGuideTab === 'checklist' && (
        <div 
          className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border animate-fadeIn"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <h2 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text-main)' }}>
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
            <span>IGNOU Exam Day Checklist & Evaluator Traps</span>
          </h2>
          <p className="text-xs mb-4 sm:mb-6" style={{ color: 'var(--text-muted)' }}>Essential rules every IGNOU B.Com student must follow inside the examination hall.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            {ANSWER_GUIDE_DATA.examWritingChecklist.map((item, idx) => (
              <div 
                key={idx} 
                className="p-3 sm:p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-2.5 sm:gap-3"
                style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-relaxed break-words">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
