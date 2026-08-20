# 🎓 IGNOU B.Com Learning App & Exam Master

> The ultimate semester-wise learning app for **IGNOU B.Com (CBCS / BCOMG)** students. Featuring a modular multi-tab architecture, simplified chapter notes, topic-wise quizzes, solved Previous Year Questions (PYQs), exam answer blueprints, and student progress analytics.

---

## 🚀 Key Features

- 📱 **Multi-Tab Architecture & Mobile Navigation Bar**
  - **5 Primary App Tabs**:
    1. 🏠 **Dashboard**: Hub overview, semester cards, study roadmaps, and platform statistics.
    2. 📚 **Syllabus Explorer**: Dedicated CBCS study center with horizontal **Semester Tabs (Sem 1 to 6)**, **Subject selection chips**, and study mode sub-tabs (*Concept Notes*, *Practice Quiz*, *Topic PYQs*).
    3. 📝 **PYQ Bank**: Solved past exam question bank with quick **Marks Filter Tabs** (*All*, *5 Marks*, *10 Marks*, *20 Marks*) and semester filters.
    4. ✨ **Exam Master**: Answer writing guide broken into 4 structured sub-tabs (*Word & Time Matrix*, *4-Block Blueprint*, *Solved Model Answers*, *Exam Day Checklist*).
    5. 🏆 **Progress Tracker**: Dedicated performance dashboard displaying Degree Progress %, Quiz Accuracy, and semester subject checklists.
  - **Sticky Mobile Bottom Tab Bar**: Smooth one-tap thumb navigation optimized for smartphones and tablets.

- 🎨 **Multi-Palette Theme Engine & Light/Dark Mode Switcher**
  - Switch between **Falcon 🌸** (Dusty Mauve), **Toast 🍞** (Warm Terracotta), **Asparagus 🌿** (Sage Green), and **Indigo 🌌** (Classic).
  - Instant Light/Dark mode toggle button with automatic `localStorage` persistence.
  - High-contrast typography tuned for optimal readability across all device screens.

- 📚 **Semester-Wise IGNOU Syllabus (Sem 1 to Sem 6)**
  - Pre-loaded with authentic course codes: `BCOC-131`, `BCOC-132`, `BCOC-133`, `BCOC-134`, `BCOC-136`, `BCOC-137`, `BCOC-138`, `BCOE-141`, `BCOE-142`.

- 💡 **Bite-Sized Chapter Notes & Memory Mnemonics**
  - Easy-to-understand topic breakdowns with acronyms (e.g. `B-M-G-D`, `C-O-P-D`), practical business examples, and key formula blocks.

- 🎯 **Interactive Topic Quizzes**
  - Topic-level MCQ tests with instant evaluation, detailed explanations, score tracking, and victory confetti.

- 📄 **Solved Previous Year Question (PYQ) Bank**
  - Past term-end exam questions categorized by **5 Marks**, **10 Marks**, and **20 Marks** with year tags (**Dec 2023**, **June 2023**, **Dec 2022**) and step-by-step model solutions.

- ✍️ **Exam Master: Answer Writing & Marking Guide**
  - Word limit and time management calculator for 5, 10, and 20 mark questions.
  - The **IGNOU 4-Block Answer Blueprint** (Hook/Definition, Schema/Diagram, Headings 1.1/1.2, Conclusion).
  - Side-by-side **Model Answer Evaluator** (Average 4/10 vs Topper 9.5/10).

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Custom Glassmorphism UI
- **Icons**: Lucide React
- **Effects**: Canvas Confetti
- **Typography**: Google Fonts (Outfit, Plus Jakarta Sans)
- **State & Storage**: React Hooks & LocalStorage Persistence

---

## 📁 Project Structure

```
c:\Users\nidhi\Desktop\B.com app\
├── .agent/
│   └── rules.md                # Agent developer guidelines & system rules
├── docs/
│   ├── ARCHITECTURE.md         # Technical architecture & component state diagram
│   ├── PLANS.md                # Future roadmap & feature milestones
│   ├── BACKLOG.md              # Prioritized product backlog
│   └── ISSUES.md               # Known issues & troubleshooting guide
├── src/
│   ├── index.css               # Tailwind directives & glassmorphism system
│   ├── main.jsx                # React root entry point
│   ├── App.jsx                 # Main application container & tab coordinator
│   ├── data/
│   │   ├── ignouSyllabus.js    # Syllabus dataset (Sem 1-6, subjects, topics, quizzes, PYQs)
│   │   └── answerGuideData.js  # Marking schemes, word limits, 4-block formula
│   └── components/
│       ├── Navbar.jsx          # Header, search bar & desktop/tablet tab strip
│       ├── MobileTabBar.jsx    # Sticky bottom navigation tabs for mobile viewports
│       ├── Dashboard.jsx       # Overview cards, metrics & quick start
│       ├── SyllabusExplorer.jsx# Semester tabs, subject chips, unit tree & topic reader
│       ├── ChapterViewer.jsx   # Concept reader with mnemonics & formulas
│       ├── QuizRunner.jsx      # Interactive quiz player
│       ├── PYQBank.jsx         # Solved PYQ engine with marks & semester filter tabs
│       ├── AnswerGuide.jsx     # 4-Block answer blueprint & model answer evaluator
│       └── ProgressTracker.jsx # Degree completion analytics & student score tracker
├── CHANGELOG.md                # Version release history
├── package.json                # Dependencies & script configurations
├── vite.config.js              # Vite build setup
└── README.md                   # Project overview & documentation
```

---

## ⚡ Quick Start & Local Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000/`.

### 3. Production Build
```bash
npm run build
```

---

## 📄 License & Course Attribution
Designed for educational purposes based on Indira Gandhi National Open University (IGNOU) B.Com (CBCS) syllabus curriculum.
