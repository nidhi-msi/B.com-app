# Changelog

All notable changes to the **IGNOU B.Com Learning App** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-08-20

### Added
- **Full 6-Semester CBCS Syllabus Coverage**: Complete dataset expansion in `src/data/ignouSyllabus.js` covering 14 core and elective courses:
  - **Semester 1**: `BCOC-131` (Financial Accounting), `BCOC-132` (Business Organisation & Management)
  - **Semester 2**: `BCOC-133` (Business Law), `BCOC-134` (Business Mathematics & Statistics)
  - **Semester 3**: `BCOC-135` (Company Law), `BCOC-136` (Income Tax Law & Practice), `BCOS-183` (Computer Applications in Business)
  - **Semester 4**: `BCOC-137` (Corporate Accounting), `BCOC-138` (Cost Accounting), `BCOS-184` (E-Commerce)
  - **Semester 5**: `BCOE-141` (Principles of Marketing), `BCOE-143` (Fundamentals of Financial Management), `BCOS-185` (Entrepreneurship)
  - **Semester 6**: `BCOE-142` (Management Accounting), `BCOE-144` (Office Management & Secretarial Practice), `BCOS-186` (Personal Selling & Salesmanship)
- **Comprehensive Exam-Focused Study Content**:
  - Detailed concepts and structured summaries across all units.
  - Memory mnemonics (`B-M-G-D`, `D-I-P`, `O-I-C-C-F-L`, `N-R-O-L-C-A`, `C-D-E-T`, `P-W-P-S`, `A-I-D-A`, `L-S-A-P`, `O-I-F`, etc.).
  - Practical corporate scenarios and real-world accounting examples.
  - Core accounting standards (AS-1, AS-2, AS-3, AS-10), Income Tax sections (Sec 6, Sec 10(13A), Sec 80C-80U), and mathematical formulas.
- **Interactive Multi-Choice Quizzes (MCQs)**: High-quality topic quizzes with 4 options, instant evaluation, and pedagogical explanations.
- **4-Block Solved Previous Year Exam Questions (PYQs)**: Authentic term-end past paper questions categorized by 5, 10, and 20 marks with step-by-step model solutions.

---

## [1.2.0] - 2026-08-20

### Added
- **Multi-Tab Layout Architecture**: Separated monolithic view into 5 dedicated primary tabs (`Dashboard`, `Syllabus`, `PYQs`, `Exam Master`, `Progress`).
- **Mobile Sticky Bottom Tab Bar (`MobileTabBar.jsx`)**: Added fixed bottom navigation bar with icons and active indicators for mobile/tablet screens with safe area inset support.
- **Dedicated Progress & Analytics Tracker (`ProgressTracker.jsx`)**: Added real-time degree completion percentage, average quiz accuracy calculation, and semester-wise mastery checklists.
- **Semester Tabs in Syllabus Explorer**: Integrated horizontal Semester (1 to 6) tabs and subject selection chips in `SyllabusExplorer.jsx`.
- **Mobile Unit Quick Drawer**: Added collapsible unit/topic selector for smartphones in `SyllabusExplorer.jsx` so users can instantly read chapter notes without long scrolling.
- **Expandable Mobile Search Bar**: Added compact search toggle in `Navbar.jsx` for mobile viewports preventing header icon compression.
- **Marks Filter Tabs in PYQ Bank**: Added 2x2 responsive weightage tabs (`All Questions`, `5 Marks (Short)`, `10 Marks (Medium)`, `20 Marks (Essay)`) in `PYQBank.jsx`.
- **Structured Sub-Tabs in Exam Master**: Divided long single-page answer guide into 4 dedicated sub-tabs (`Word & Time Matrix`, `4-Block Blueprint`, `Solved Model Answers`, `Exam Day Checklist`) with responsive 2x2 layout on mobile.

### Changed
- **Multi-Device Responsive Overhaul**: Optimized typography, touch padding (min 44px), card layouts, safe-area padding (`.pb-safe`), and overflow handling across all screen sizes (320px phones to 4K monitors).
- **Removed Cramped Global Sidebar**: Allowed Dashboard, PYQ Bank, Exam Master, and Progress Tracker to render in full-width, clean layouts.
- **Enhanced Navbar Tab Navigation**: Added responsive tab links with active pill states and quiz badges on tablet/desktop screens.

---

## [1.1.0] - 2026-08-17

### Added
- **Multi-Palette Theme Engine**: Integrated 4 curated color palettes with 50-950 Tailwind color scales:
  - 🌸 **Falcon**: Dusty Mauve & Burgundy Tint
  - 🍞 **Toast**: Warm Terracotta & Taupe
  - 🌿 **Asparagus**: Earthy Sage Green
  - 🌌 **Indigo**: Classic Deep Indigo
- **Interactive Theme Switcher & Light/Dark Mode Toggle**: Added visual theme picker dropdown with real color swatches and Sun/Moon mode toggle directly in `Navbar.jsx`.
- **Theme Preference Persistence**: Saved active theme and color mode in `localStorage` (`ignou_bcom_theme`, `ignou_bcom_mode`).

### Changed
- **High-Contrast Typography & Dynamic Styling**: Overhauled [`src/index.css`](file:///c:/Users/nidhi/Desktop/B.com%20app/src/index.css) and component templates (`Dashboard`, `AnswerGuide`, `ChapterViewer`, `SyllabusExplorer`, `PYQBank`, `QuizRunner`, `Sidebar`) to use CSS custom properties (`var(--bg-card)`, `var(--bg-input)`, `var(--text-main)`, `var(--text-muted)`).
- **Eliminated Low-Contrast Yellow Text & Hardcoded Slate Panels**: Replaced pale golden text and dark slate containers with theme-adaptive styling for 100% text readability in both Light and Dark modes.

---

## [1.0.0] - 2026-08-14

### Initial Release - Full IGNOU B.Com Hub Launch

#### Added
- **Semester-Wise Navigation (Sem 1 to Sem 6)**: Full course explorer with authentic IGNOU course codes (`BCOC-131`, `BCOC-132`, `BCOC-133`, `BCOC-134`, `BCOC-136`, `BCOC-137`, `BCOC-138`, `BCOE-141`, `BCOE-142`).
- **Simplified Topic Reader**: Bite-sized topic summaries, memory mnemonics, real-world industry examples, and core formulas.
- **Interactive Quiz Module**: MCQ quiz engine with instant evaluation, detailed explanations, and score tracking with celebratory confetti.
- **Solved PYQ Bank**: Searchable repository of past IGNOU term-end questions filtered by semester, marks (5, 10, 20 marks), and exam year (Dec 2023, June 2023, Dec 2022).
- **Exam Master - Answer Writing Guide**:
  - Word limit and time management matrix per mark category.
  - The IGNOU 4-Block Answer Blueprint.
  - Side-by-side Model Answer Evaluator (Average 4/10 vs Topper 9.5/10).
- **Global Search**: Search bar indexing all subjects, chapters, topics, tax sections, and accounting standards.
- **User Progress Persistence**: LocalStorage system tracking solved quizzes and subject completion.
