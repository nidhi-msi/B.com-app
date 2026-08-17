# Changelog

All notable changes to the **IGNOU B.Com Learning App** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
