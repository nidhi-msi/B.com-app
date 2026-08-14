import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function QuizRunner({ quizList, topicTitle, onQuizComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!quizList || quizList.length === 0) {
    return (
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-3">
        <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
        <h3 className="text-lg font-bold text-white">No Quiz Questions Available</h3>
        <p className="text-xs text-slate-400">Questions for this topic are being updated according to latest IGNOU exams.</p>
      </div>
    );
  }

  const currentQ = quizList[currentIndex];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      if (onQuizComplete) {
        onQuizComplete(score + (selectedOption === currentQ.correctIndex ? 1 : 0), quizList.length);
      }
      // Trigger confetti if high score
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch(e) {}
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const finalScore = score;
    const total = quizList.length;
    const percentage = Math.round((finalScore / total) * 100);

    return (
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-6 animate-fadeIn">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 p-0.5 shadow-xl shadow-indigo-500/20">
          <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
            <Award className="w-10 h-10 text-amber-400" />
          </div>
        </div>

        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
            Quiz Completed!
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3">
            Score: {finalScore} / {total} ({percentage}%)
          </h2>
          <p className="text-xs text-slate-400 mt-1">Topic: {topicTitle}</p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 max-w-md mx-auto border border-slate-800 text-xs text-slate-300">
          {percentage >= 80 ? (
            <p className="text-emerald-400 font-bold">🎉 Outstanding! You have mastered this IGNOU topic.</p>
          ) : percentage >= 50 ? (
            <p className="text-amber-400 font-bold">👍 Good job! Review the concept notes once more to reach 100%.</p>
          ) : (
            <p className="text-slate-400 font-semibold">Keep learning! Re-read the chapter notes and try again.</p>
          )}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl animate-fadeIn">
      
      {/* Quiz Progress & Question Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
            Question {currentIndex + 1} of {quizList.length}
          </span>
          <p className="text-xs text-slate-400 mt-1">Topic: {topicTitle}</p>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono font-bold text-white">Score: {score}</span>
        </div>
      </div>

      {/* Question Text */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800">
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
          {currentQ.question}
        </h3>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {currentQ.options.map((opt, idx) => {
          let btnStyle = "bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white";

          if (isAnswered) {
            if (idx === currentQ.correctIndex) {
              btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold shadow-lg shadow-emerald-900/30";
            } else if (idx === selectedOption) {
              btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200 font-bold";
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-xs sm:text-sm font-medium ${btnStyle}`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs text-slate-400 font-bold shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{opt}</span>
              </div>

              {isAnswered && idx === currentQ.correctIndex && (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              )}
              {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Block (Shown after answering) */}
      {isAnswered && (
        <div className="p-5 rounded-2xl bg-indigo-950/50 border border-indigo-500/30 text-indigo-100 text-xs sm:text-sm space-y-2 animate-fadeIn">
          <div className="flex items-center gap-1.5 font-bold text-indigo-300 uppercase tracking-wider text-xs">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Explanation & Concept Tip</span>
          </div>
          <p className="leading-relaxed text-slate-300">
            {currentQ.explanation}
          </p>
        </div>
      )}

      {/* Next Question Action */}
      {isAnswered && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30"
          >
            <span>{currentIndex === quizList.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
