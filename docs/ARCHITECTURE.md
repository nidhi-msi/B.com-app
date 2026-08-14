# System Architecture Document - IGNOU B.Com Learning App

## Overview
The IGNOU B.Com Learning App is a client-side Single Page Application (SPA) built using **React 18**, **Vite**, and **Tailwind CSS**. It is structured for zero-latency client rendering, offline progress persistence, and modular component reusability.

---

## 1. High-Level Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                              APP (App.jsx)                             │
│       State: activeTab, selectedSem, selectedSubject, searchQuery       │
└───────┬────────────────────────────────┬───────────────────────┬───────┘
        │                                │                       │
        ▼                                ▼                       ▼
┌──────────────┐                 ┌──────────────┐         ┌──────────────┐
│  Navbar.jsx  │                 │ Sidebar.jsx  │         │  Data Models │
│ (Global Search│                 │(Sem 1-6 Tree)│         │(Syllabus &   │
│ & Nav Links) │                 └──────────────┘         │ AnswerGuide) │
└──────────────┘                                          └──────────────┘
        │
        ├──────────────────────┬──────────────────────┬──────────────────────┐
        ▼                      ▼                      ▼                      ▼
┌──────────────┐       ┌─────────────────┐    ┌──────────────┐       ┌──────────────┐
│Dashboard.jsx │       │SyllabusExplorer │    │ PYQBank.jsx  │       │AnswerGuide   │
│ (Metrics &   │       │   .jsx          │    │ (Multi-Filter│       │  .jsx        │
│ Quick Start) │       └────────┬────────┘    │  PYQ Engine) │       │(Word Limits &│
└──────────────┘                │             └──────────────┘       │  4-Block)    │
                                │                                    └──────────────┘
             ┌──────────────────┼──────────────────┐
             ▼                  ▼                  ▼
      ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
      │ChapterViewer │   │QuizRunner.jsx│   │  PYQBank.jsx │
      │   .jsx       │   │ (MCQ Player) │   │ (Topic Level)│
      └──────────────┘   └──────────────┘   └──────────────┘
```

---

## 2. Component Hierarchy & Roles

### Core Container (`App.jsx`)
- Controls global tab routing (`dashboard`, `syllabus`, `pyq`, `answer-guide`).
- Holds selected semester (`selectedSem`) and selected subject (`selectedSubject`).
- Manages global search logic (`searchResults`) indexing all syllabus data.
- Handles user progress state and `localStorage` syncing (`ignou_bcom_progress`).

### Navigation Components
- **`Navbar.jsx`**: Displays brand logo, global search input, quick tabs, and user quiz completion badge.
- **`Sidebar.jsx`**: Provides interactive semester cards (Sem 1 to Sem 6), subject lists for the active semester, and quick launch button for Exam Master.

### View Modules
- **`Dashboard.jsx`**: High-level platform statistics (Subjects count, Quizzes count, PYQs count), semester cards grid, and word limit rule previews.
- **`SyllabusExplorer.jsx`**: Two-column layout with Chapter/Topic tree on the left and dynamic content viewer on the right.
- **`ChapterViewer.jsx`**: Renders simplified topic content, memory mnemonics, real-world business examples, and formula boxes.
- **`QuizRunner.jsx`**: Interactive MCQ quiz player with instant feedback, explanations, score calculations, and canvas-confetti victory animations.
- **`PYQBank.jsx`**: Solved previous year question engine with filters for Subject, Marks weightage (5, 10, 20 marks), and Exam Year tags.
- **`AnswerGuide.jsx`**: Word limit & time management guide, 4-Block Answer Blueprint, and interactive Average vs Topper Model Answer comparison tool.

---

## 3. Data Schemas

### Syllabus Data Structure (`src/data/ignouSyllabus.js`)
```javascript
[
  {
    semId: 1,
    semTitle: "Semester 1",
    description: "...",
    subjects: [
      {
        code: "BCOC-131",
        title: "Financial Accounting",
        credits: 6,
        category: "Core Course",
        description: "...",
        chapters: [
          {
            id: "bcoc131-ch1",
            number: 1,
            title: "...",
            summary: "...",
            topics: [
              {
                id: "t1-1",
                title: "...",
                content: "...",
                mnemonic: "...",
                example: "...",
                keyFormulas: ["..."],
                quiz: [{ question, options, correctIndex, explanation }],
                pyqs: [{ year, marks, question, modelAnswer }]
              }
            ]
          }
        ]
      }
    ]
  }
]
```

### LocalStorage Schema (`ignou_bcom_progress`)
```json
{
  "quizCompletedCount": 12,
  "completedSubjects": ["BCOC-131", "BCOC-133"],
  "completedTopics": {
    "t1-1": { "score": 2, "total": 2, "timestamp": 1723628400000 }
  }
}
```

---

## 4. Performance & Styling Tokens
- **Design Tokens**: Standardized Tailwind slate/indigo/emerald/amber color scheme.
- **Glassmorphism Utilities**: Custom CSS classes (`glass-panel`, `glass-card`, `gradient-text`) with backdrop blur filters for a premium dark mode feel.
- **Bundle Size Optimization**: Asset chunking via Vite resulting in a light production JS payload (~250 KB).
