# System Architecture Document - IGNOU B.Com Learning App

## Overview
The IGNOU B.Com Learning App is a client-side multi-tab Single Page Application (SPA) built using **React 18**, **Vite**, and **Tailwind CSS**. It is structured for zero-latency client rendering, offline progress persistence, and modular component reusability.

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
│  Navbar.jsx  │                 │MobileTabBar  │         │  Data Models │
│ (Global Search│                 │(Sticky Bottom│         │(Syllabus &   │
│ & Nav Links) │                 │  Tabs)       │         │ AnswerGuide) │
└───────┬──────┘                 └──────────────┘         └──────────────┘
        │
        ├──────────────────────┬──────────────────────┬──────────────────────┬──────────────────────┐
        ▼                      ▼                      ▼                      ▼                      ▼
┌──────────────┐       ┌─────────────────┐    ┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│Dashboard.jsx │       │SyllabusExplorer │    │ PYQBank.jsx  │       │AnswerGuide   │       │Progress      │
│ (Metrics &   │       │   .jsx          │    │ (Marks Tabs  │       │  .jsx        │       │ Tracker.jsx  │
│ Quick Start) │       │(Sem & Sub Tabs) │    │ & Filters)   │       │(4 Sub-Tabs)  │       │(Degree & Quiz│
└──────────────┘       └────────┬────────┘    └──────────────┘       └──────────────┘       │  Analytics)  │
                                │                                                           └──────────────┘
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
- Controls global tab routing (`dashboard`, `syllabus`, `pyq`, `answer-guide`, `progress`).
- Holds selected semester (`selectedSem`) and selected subject (`selectedSubject`).
- Manages global search logic (`searchResults`) indexing all syllabus data.
- Handles user progress state and `localStorage` syncing (`ignou_bcom_progress`).
- Coordinates mobile sticky bottom bar (`MobileTabBar.jsx`).

### Navigation Components
- **`Navbar.jsx`**: Displays brand logo, global search input, top desktop/tablet tab buttons with active pill indicator, and theme/mode controls.
- **`MobileTabBar.jsx`**: Responsive bottom sticky navigation bar with active indicators and icons for mobile thumb access.

### View Modules & Tabbed Pages
- **`Dashboard.jsx`**: Platform statistics, semester explorer cards, quick study jump-in links, and answer blueprint preview.
- **`SyllabusExplorer.jsx`**: Features horizontal Semester Tabs (Sem 1 to 6), subject selection chips, unit/topic index, and study sub-tabs (*Concept Notes*, *Practice Quiz*, *Topic PYQs*).
- **`ChapterViewer.jsx`**: Renders simplified topic content, memory mnemonics, real-world business examples, and formula boxes.
- **`QuizRunner.jsx`**: Interactive MCQ quiz player with instant feedback, explanations, score calculations, and canvas-confetti victory animations.
- **`PYQBank.jsx`**: Solved past exam question bank with Marks filter tabs (`All Questions`, `5 Marks`, `10 Marks`, `20 Marks`), semester dropdown, and question search.
- **`AnswerGuide.jsx`**: 4-Block Answer Blueprint organized into 4 sub-tabs (*Word & Time Matrix*, *4-Block Blueprint*, *Solved Model Answers*, *Exam Day Checklist*).
- **`ProgressTracker.jsx`**: Degree completion analytics, quiz accuracy %, total quizzes mastered, and semester subject checklist.

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

### LocalStorage Schemas
- `ignou_bcom_progress`: User quiz & topic progress object.
- `ignou_bcom_theme`: Active palette (`falcon` | `toast` | `asparagus` | `indigo`).
- `ignou_bcom_mode`: Active mode (`dark` | `light`).

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

## 4. Theme Engine & Performance Tokens
- **Theme Design System**: 4 distinct color scales (`falcon`, `toast`, `asparagus`, `indigo`) configured in `tailwind.config.js`.
- **Dynamic CSS Variables**: Runtime Custom Properties (`--bg-app`, `--bg-nav`, `--bg-card`, `--bg-input`, `--border-color`, `--text-main`, `--text-muted`, `--primary-500`) allowing instant switching between themes and modes.
- **High-Contrast Glassmorphism Utilities**: Responsive backdrop blur filters (`glass-panel`, `glass-card`, `gradient-text`) tuned for maximum legibility in both light and dark modes.
- **Bundle Size Optimization**: Asset chunking via Vite resulting in a fast production build (~276 KB bundle).
