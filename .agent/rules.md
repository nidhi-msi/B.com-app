# Agent Developer Guidelines - IGNOU B.Com Learning App

This codebase is a specialized learning management platform designed for IGNOU B.Com (CBCS) students.

## Architecture Guidelines
1. **Framework**: React 18 + Vite + Tailwind CSS + Lucide Icons.
2. **State Management**: React `useState`, `useMemo`, and `localStorage` for user progress persistence (`ignou_bcom_progress`).
3. **Data Schemas**:
   - `SYLLABUS_DATA` in `src/data/ignouSyllabus.js`: Strictly nested array of Semesters -> Subjects -> Chapters -> Topics -> (Quiz & PYQs).
   - `ANSWER_GUIDE_DATA` in `src/data/answerGuideData.js`: Marking rules, 4-Block formula, model answers.
4. **Design Aesthetic**: Modern dark mode palette (`bg-slate-950`), glassmorphism panels (`glass-panel`, `glass-card`), subtle gradients (`gradient-text`), and clear typography using Google Fonts (Outfit & Plus Jakarta Sans).

## Code Style Rules
- Keep components modular and single-purpose (`Navbar`, `Sidebar`, `Dashboard`, `SyllabusExplorer`, `ChapterViewer`, `QuizRunner`, `PYQBank`, `AnswerGuide`).
- Ensure all interactive buttons have clear visual states (`hover`, `focus`, `active`) and accessibility attributes.
- Use Lucide React icons for visual context across all cards and navigation triggers.
- Preserve backward compatibility of `localStorage` schema when adding new progress tracking features.
