import React, { useState } from 'react';
import { SYLLABUS_DATA } from '../data/ignouSyllabus';
import { FileText, Search, Filter, Calendar, Award, ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';

export default function PYQBank({ filterSubject, topicPyqs, topicTitle }) {
  const [selectedSubject, setSelectedSubject] = useState(filterSubject || 'ALL');
  const [selectedMarks, setSelectedMarks] = useState('ALL'); // 'ALL' | 5 | 10 | 20
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPyqId, setExpandedPyqId] = useState(null);

  // If topicPyqs is passed directly from ChapterViewer
  let pyqList = [];

  if (topicPyqs && topicPyqs.length > 0) {
    pyqList = topicPyqs.map(p => ({ ...p, subjectCode: filterSubject || 'SUBJECT', topicName: topicTitle }));
  } else {
    // Gather all PYQs across entire dataset
    SYLLABUS_DATA.forEach(sem => {
      sem.subjects.forEach(sub => {
        sub.chapters.forEach(ch => {
          ch.topics.forEach(top => {
            if (top.pyqs) {
              top.pyqs.forEach(pyq => {
                pyqList.push({
                  ...pyq,
                  subjectCode: sub.code,
                  subjectTitle: sub.title,
                  chapterTitle: ch.title,
                  topicName: top.title
                });
              });
            }
          });
        });
      });
    });
  }

  // Extract unique subjects for dropdown
  const allSubjects = Array.from(new Set(
    SYLLABUS_DATA.flatMap(s => s.subjects.map(sub => sub.code))
  ));

  // Filter logic
  const filteredPYQs = pyqList.filter(pyq => {
    if (selectedSubject !== 'ALL' && pyq.subjectCode !== selectedSubject) return false;
    if (selectedMarks !== 'ALL' && pyq.marks !== Number(selectedMarks)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchQ = pyq.question.toLowerCase().includes(q);
      const matchAns = pyq.modelAnswer ? pyq.modelAnswer.toLowerCase().includes(q) : false;
      if (!matchQ && !matchAns) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      {!topicPyqs && (
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono font-bold text-xs">
                IGNOU Repository
              </span>
              <span className="text-xs text-slate-400">Previous Term-End Exams (TEE)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Previous Year Questions (PYQ Bank)
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Solved past exam questions categorized by 5, 10, and 20 marks with step-by-step IGNOU model solutions.
            </p>
          </div>

          <div className="text-right shrink-0">
            <p className="text-[10px] uppercase font-bold text-slate-400">Questions Available</p>
            <p className="text-2xl font-bold text-white font-serif">{filteredPYQs.length} PYQs</p>
          </div>
        </div>
      )}

      {/* Filter Control Toolbar */}
      {!topicPyqs && (
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          {/* Subject Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Filter Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="ALL">All Subjects</option>
              {allSubjects.map(code => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>

          {/* Marks Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Filter Weightage
            </label>
            <select
              value={selectedMarks}
              onChange={(e) => setSelectedMarks(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="ALL">All Marks (5, 10 & 20 Marks)</option>
              <option value="5">5 Marks Questions</option>
              <option value="10">10 Marks Questions</option>
              <option value="20">20 Marks Questions</option>
            </select>
          </div>

          {/* Search Query */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Search Question
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search terms e.g. Contract, AS-3..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

        </div>
      )}

      {/* PYQ List */}
      <div className="space-y-4">
        {filteredPYQs.length === 0 ? (
          <div className="p-8 text-center rounded-3xl bg-slate-900 border border-slate-800 text-slate-400 text-xs">
            No Previous Year Questions match your selected filters.
          </div>
        ) : (
          filteredPYQs.map((pyq) => {
            const isExpanded = expandedPyqId === pyq.id;
            return (
              <div 
                key={pyq.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
              >
                {/* PYQ Header Bar */}
                <div 
                  onClick={() => setExpandedPyqId(isExpanded ? null : pyq.id)}
                  className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-[10px]">
                        {pyq.subjectCode}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono font-bold text-[10px] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-purple-400" />
                        {pyq.year}
                      </span>
                      <span className={`px-2 py-0.5 rounded font-mono font-bold text-[10px] ${
                        pyq.marks === 20 
                          ? 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                          : pyq.marks === 10
                          ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {pyq.marks} Marks
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {pyq.question}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 shrink-0 mt-1">
                    <span>{isExpanded ? 'Hide Solution' : 'View Solution'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {/* Model Solution Accordion Body */}
                {isExpanded && (
                  <div className="p-5 bg-slate-950 border-t border-slate-800 space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Official Model Answer Breakdown</span>
                    </div>

                    <div className="prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-mono bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                      {pyq.modelAnswer}
                    </div>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
