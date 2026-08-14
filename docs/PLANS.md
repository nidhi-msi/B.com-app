# Development Plans & Product Roadmap - IGNOU B.Com Learning App

## Product Vision
To build the most comprehensive, student-friendly, and exam-oriented digital study platform for IGNOU B.Com (CBCS) undergraduates across India.

---

## Roadmap & Milestones

### Phase 1: MVP Core Launch (Completed - v1.0.0)
- [x] Full semester-wise course navigation (Semesters 1 through 6).
- [x] Simplified chapter notes with memory mnemonics and real-world examples.
- [x] Interactive topic-level MCQ quizzes with instant explanations.
- [x] Solved PYQ Bank with 5, 10, and 20 mark weightage filters.
- [x] Answer Writing & Marking Guide with 4-Block Blueprint and Model Answer comparison.
- [x] Global search and LocalStorage progress persistence.

### Phase 2: Content Expansion & Study Tools (Q3 2026)
- [ ] **Expanded Syllabus Coverage**: Add remaining elective subjects (`BCOC-135`, `BCOS-183`, `BCOS-184`, `BEVAE-181`, `BCOE-143`, `BCOE-144`).
- [ ] **PDF Answer Sheet Generator**: Export 4-Block model answers as printable A4 PDFs for offline revision.
- [ ] **Formula Flashcards Module**: Interactive digital flashcards for Accounting Standards, Tax Sections, and Costing Formulas.
- [ ] **Bookmark & Notes System**: Allow students to pin hard topics and write personal notes saved to local storage.

### Phase 3: AI & Offline Capabilities (Q4 2026)
- [ ] **PWA (Progressive Web App) Support**: Full offline caching of notes and quizzes for studying without active internet connectivity.
- [ ] **AI Answer Grader Engine**: Allow students to type or upload their written answer and get instant 4-Block feedback & score estimation.
- [ ] **Audio Summaries**: AI-generated voice notes for topic explanations for on-the-go learning.

---

## Technical Scaling Strategy
1. **Data Optimization**: Lazy load topic contents and PYQ solutions to minimize initial bundle footprint.
2. **Offline First Architecture**: Service worker implementation for index caching.
3. **Multi-Language Support**: Option to toggle explanations between English and Hindi medium (as IGNOU exams are conducted in both languages).
