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
      <div 
        className="p-8 rounded-3xl border text-center space-y-3"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <HelpCircle className="w-10 h-10 mx-auto" style={{ color: 'var(--text-muted)' }} />
        <h3 className="text-lg font-bold" style={{ color: 'var(--text-main)' }}>No Quiz Questions Available</h3>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Questions for this topic are being updated according to latest IGNOU exams.</p>
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
      <div 
        className="p-8 rounded-3xl border text-center space-y-6 animate-fadeIn"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="w-20 h-20 mx-auto rounded-full p-0.5 shadow-xl" style={{ background: 'linear-gradient(135deg, var(--primary-500), var(--gradient-end))' }}>
          <div className="w-full h-full rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-app)' }}>
            <Award className="w-10 h-10 text-amber-500" />
          </div>
        </div>

        <div>
          <span 
            className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
            style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
          >
            Quiz Completed!
          </span>
          <h2 className="text-3xl font-extrabold mt-3" style={{ color: 'var(--text-main)' }}>
            Score: {finalScore} / {total} ({percentage}%)
          </h2>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Topic: {topicTitle}</p>
        </div>

        <div 
          className="p-4 rounded-2xl max-w-md mx-auto border text-xs"
          style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
        >
          {percentage >= 80 ? (
            <p className="text-emerald-500 font-bold">🎉 Outstanding! You have mastered this IGNOU topic.</p>
          ) : percentage >= 50 ? (
            <p className="text-amber-500 font-bold">👍 Good job! Review the concept notes once more to reach 100%.</p>
          ) : (
            <p className="font-semibold" style={{ color: 'var(--text-muted)' }}>Keep learning! Re-read the chapter notes and try again.</p>
          )}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md text-white"
            style={{ backgroundColor: 'var(--primary-500)' }}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="space-y-6 border p-6 sm:p-8 rounded-3xl animate-fadeIn transition-colors duration-300 shadow-lg"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      
      {/* Quiz Progress & Question Header */}
      <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
        <div>
          <span 
            className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg border"
            style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
          >
            Question {currentIndex + 1} of {quizList.length}
          </span>
          <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Topic: {topicTitle}</p>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono font-bold" style={{ color: 'var(--text-main)' }}>Score: {score}</span>
        </div>
      </div>

      {/* Question Text */}
      <div 
        className="p-4 sm:p-5 rounded-2xl border"
        style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)' }}
      >
        <h3 className="text-base sm:text-lg font-bold leading-snug" style={{ color: 'var(--text-main)' }}>
          {currentQ.question}
        </h3>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {currentQ.options.map((opt, idx) => {
          let optionStyle = {
            backgroundColor: 'var(--bg-input)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-main)'
          };

          if (isAnswered) {
            if (idx === currentQ.correctIndex) {
              optionStyle = {
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                borderColor: 'rgba(16, 185, 129, 0.5)',
                color: 'var(--text-main)'
              };
            } else if (idx === selectedOption) {
              optionStyle = {
                backgroundColor: 'rgba(244, 63, 94, 0.15)',
                borderColor: 'rgba(244, 63, 94, 0.5)',
                color: 'var(--text-main)'
              };
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              className="w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-xs sm:text-sm font-medium"
              style={optionStyle}
            >
              <div className="flex items-center gap-3">
                <span 
                  className="w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 border"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{opt}</span>
              </div>

              {isAnswered && idx === currentQ.correctIndex && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              )}
              {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Block (Shown after answering) */}
      {isAnswered && (
        <div 
          className="p-5 rounded-2xl border text-xs sm:text-sm space-y-2 animate-fadeIn"
          style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-hover)', color: 'var(--text-main)' }}
        >
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs" style={{ color: 'var(--text-accent)' }}>
            <Sparkles className="w-4 h-4" />
            <span>Explanation & Concept Tip</span>
          </div>
          <p className="leading-relaxed" style={{ color: 'var(--text-main)' }}>
            {currentQ.explanation}
          </p>
        </div>
      )}

      {/* Next Question Action */}
      {isAnswered && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md text-white"
            style={{ backgroundColor: 'var(--primary-500)' }}
          >
            <span>{currentIndex === quizList.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
