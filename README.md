# 🎓 IGNOU B.Com Learning App & Exam Master

> The ultimate semester-wise learning app for **IGNOU B.Com (CBCS / BCOMG)** students. Featuring simplified chapter notes, topic-wise quizzes, solved Previous Year Questions (PYQs), and the official IGNOU 4-Block Answer Writing Blueprint.

---

## 🚀 Key Features

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
│   ├── App.jsx                 # Main application container & routing
│   ├── data/
│   │   ├── ignouSyllabus.js    # Syllabus dataset (Sem 1-6, subjects, topics, quizzes, PYQs)
│   │   └── answerGuideData.js  # Marking schemes, word limits, 4-block formula
│   └── components/
│       ├── Navbar.jsx          # Header, search bar & global navigation
│       ├── Sidebar.jsx         # Semester & subject directory
│       ├── Dashboard.jsx       # Overview cards, metrics & quick start
│       ├── SyllabusExplorer.jsx# Semester viewer & topic tree
│       ├── ChapterViewer.jsx   # Concept reader with mnemonics & formulas
│       ├── QuizRunner.jsx      # Interactive quiz player
│       ├── PYQBank.jsx         # Solved PYQ engine with multi-filters
│       └── AnswerGuide.jsx     # Word limit calculator & 4-block answer grader
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
