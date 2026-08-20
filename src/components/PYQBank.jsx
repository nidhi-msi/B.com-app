import React, { useState } from 'react';
import { SYLLABUS_DATA } from '../data/ignouSyllabus';
import { FileText, Search, Filter, Calendar, Award, ChevronDown, ChevronUp, CheckCircle, Sparkles, Layers, BookOpen } from 'lucide-react';

export default function PYQBank({ filterSubject, topicPyqs, topicTitle }) {
  const [selectedSem, setSelectedSem] = useState('ALL'); // 'ALL' | 1 | 2 | 3 | 4 | 5 | 6
  const [selectedSubject, setSelectedSubject] = useState(filterSubject || 'ALL');
  const [selectedMarks, setSelectedMarks] = useState('ALL'); // 'ALL' | 5 | 10 | 20
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPyqId, setExpandedPyqId] = useState(null);

  // If topicPyqs is passed directly from ChapterViewer
  let pyqList = [];

  if (topicPyqs && topicPyqs.length > 0) {
    pyqList = topicPyqs.map(p => ({ ...p, subjectCode: filterSubject || 'SUBJECT', topicName: topicTitle, semId: 1 }));
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
                  semId: sem.semId,
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
    if (!topicPyqs && selectedSem !== 'ALL' && pyq.semId !== Number(selectedSem)) return false;
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

  const markTabs = [
    { id: 'ALL', label: 'All Questions', count: pyqList.length },
    { id: '5', label: '5 Marks (Short)', count: pyqList.filter(p => p.marks === 5).length },
    { id: '10', label: '10 Marks (Medium)', count: pyqList.filter(p => p.marks === 10).length },
    { id: '20', label: '20 Marks (Essay)', count: pyqList.filter(p => p.marks === 20).length },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      {!topicPyqs && (
        <div 
          className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl border flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 transition-colors duration-300 shadow-md"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2 flex-wrap">
              <span 
                className="px-2.5 py-0.5 rounded font-mono font-bold text-[10px] sm:text-xs border"
                style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
              >
                IGNOU Repository
              </span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Previous Term-End Exams (TEE)</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold" style={{ color: 'var(--text-main)' }}>
              Previous Year Questions <span className="gradient-text">(PYQ Bank)</span>
            </h1>
            <p className="text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Solved past exam questions categorized by 5, 10, and 20 marks with step-by-step IGNOU model solutions.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <p className="text-[10px] uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Questions Available</p>
            <p className="text-xl sm:text-2xl font-bold font-serif" style={{ color: 'var(--text-main)' }}>{filteredPYQs.length} Solved PYQs</p>
          </div>
        </div>
      )}

      {/* Marks Category Tabs Bar */}
      {!topicPyqs && (
        <div 
          className="p-1.5 sm:p-2 rounded-2xl border shadow-sm"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {markTabs.map(tab => {
              const isTabActive = String(selectedMarks) === String(tab.id);
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedMarks(tab.id)}
                  className="py-2 px-2 sm:px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 border active:scale-95"
                  style={{
                    backgroundColor: isTabActive ? 'var(--primary-500)' : 'transparent',
                    color: isTabActive ? '#ffffff' : 'var(--text-muted)',
                    borderColor: isTabActive ? 'var(--primary-600)' : 'transparent'
                  }}
                >
                  <span className="truncate">{tab.label}</span>
                  <span 
                    className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold shrink-0"
                    style={{
                      backgroundColor: isTabActive ? 'rgba(0,0,0,0.25)' : 'var(--bg-input)',
                      color: isTabActive ? '#ffffff' : 'var(--text-accent)'
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Filter Control Toolbar */}
      {!topicPyqs && (
        <div 
          className="p-3.5 sm:p-4 rounded-2xl border grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          
          {/* Semester Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
              <Layers className="w-3 h-3 text-indigo-400" />
              <span>Semester</span>
            </label>
            <select
              value={selectedSem}
              onChange={(e) => setSelectedSem(e.target.value)}
              className="w-full p-2 sm:p-2.5 rounded-xl text-xs focus:outline-none border"
              style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
            >
              <option value="ALL">All Semesters (1 to 6)</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
              <BookOpen className="w-3 h-3 text-indigo-400" />
              <span>Subject</span>
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-2 sm:p-2.5 rounded-xl text-xs focus:outline-none border"
              style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
            >
              <option value="ALL">All Subjects</option>
              {allSubjects.map(code => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
          </div>

          {/* Search Query */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
              Search Keywords
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search terms e.g. Contract, AS-3..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl text-xs focus:outline-none border"
                style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              />
            </div>
          </div>

        </div>
      )}

      {/* PYQ List */}
      <div className="space-y-3 sm:space-y-4">
        {filteredPYQs.length === 0 ? (
          <div 
            className="p-6 sm:p-8 text-center rounded-2xl sm:rounded-3xl border text-xs"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
          >
            No Previous Year Questions match your selected filters.
          </div>
        ) : (
          filteredPYQs.map((pyq) => {
            const isExpanded = expandedPyqId === pyq.id;
            return (
              <div 
                key={pyq.id}
                className="rounded-2xl border overflow-hidden transition-all shadow-sm"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                {/* PYQ Header Bar */}
                <div 
                  onClick={() => setExpandedPyqId(isExpanded ? null : pyq.id)}
                  className="p-3.5 sm:p-5 cursor-pointer flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 transition-colors active:bg-white/5"
                >
                  <div className="space-y-1.5 sm:space-y-2 flex-1 w-full min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span 
                        className="px-2 py-0.5 rounded font-mono font-bold text-[10px] border"
                        style={{ backgroundColor: 'var(--primary-light)', color: 'var(--text-accent)', borderColor: 'var(--border-color)' }}
                      >
                        {pyq.subjectCode} {pyq.semId ? `(Sem ${pyq.semId})` : ''}
                      </span>
                      <span 
                        className="px-2 py-0.5 rounded font-mono font-bold text-[10px] flex items-center gap-1 border"
                        style={{ backgroundColor: 'var(--bg-input)', color: 'var(--text-muted)', borderColor: 'var(--border-color)' }}
                      >
                        <Calendar className="w-3 h-3" />
                        {pyq.year}
                      </span>
                      <span className="px-2 py-0.5 rounded font-mono font-bold text-[10px] border" style={{ backgroundColor: 'var(--primary-light)', borderColor: 'var(--border-hover)', color: 'var(--text-accent)' }}>
                        {pyq.marks} Marks
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm md:text-base font-bold leading-snug break-words" style={{ color: 'var(--text-main)' }}>
                      {pyq.question}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold shrink-0 self-end sm:self-start mt-0 sm:mt-1" style={{ color: 'var(--text-accent)' }}>
                    <span>{isExpanded ? 'Hide Solution' : 'View Solution'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {/* Model Solution Accordion Body */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 border-t space-y-3 sm:space-y-4 animate-fadeIn" style={{ backgroundColor: 'var(--bg-input)', borderColor: 'var(--border-color)' }}>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-accent)' }}>
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                      <span>Official Model Answer Breakdown</span>
                    </div>

                    <div 
                      className="max-w-none text-xs sm:text-sm leading-relaxed whitespace-pre-line font-mono p-3.5 sm:p-4 rounded-xl border break-words overflow-x-auto"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
                    >
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
