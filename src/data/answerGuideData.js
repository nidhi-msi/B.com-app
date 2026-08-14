export const ANSWER_GUIDE_DATA = {
  markingRules: [
    {
      marks: 5,
      type: "Short Note / Conceptual Question",
      wordLimit: "100 - 120 words",
      timeAllocation: "5 - 7 Minutes",
      recommendedPages: "1 to 1.5 Pages (A4)",
      structure: [
        "Direct Definition (2 lines)",
        "3 to 4 Key Points / Features (with bullet points)",
        "1 Simple Real-life Example or Formula"
      ],
      proTip: "Do not write long introductory fluff. Jump straight to the definition and key bullet points to maximize marks per minute."
    },
    {
      marks: 10,
      type: "Medium Length Theoretical / Analytical Question",
      wordLimit: "250 - 300 words",
      timeAllocation: "12 - 15 Minutes",
      recommendedPages: "2 to 2.5 Pages (A4)",
      structure: [
        "Brief Introduction (3-4 lines)",
        "Diagram / Flowchart / Mind Map (Crucial for 8+ score)",
        "Core Body: 5 Main Headings with 2-3 lines explanation each",
        "Key Advantages / Limitations / Applications",
        "Short 2-line Conclusion"
      ],
      proTip: "Underline major headings and keywords with a pencil or black pen. IGNOU evaluators grade heavily on structured visual presentation."
    },
    {
      marks: 20,
      type: "Long Essay / Comprehensive Problem Solving",
      wordLimit: "500 - 600 words",
      timeAllocation: "25 - 30 Minutes",
      recommendedPages: "4 to 5 Pages (A4)",
      structure: [
        "Comprehensive Introduction & Historical Background / Standard Definition",
        "Conceptual Blueprint (Box Diagram / Table / Flowchart)",
        "Main Arguments (7 to 9 Subheadings with bold titles)",
        "Case Study or Real-World Industry Application (e.g., Reliance, TATA, RBI guidelines)",
        "Critical Analysis / Comparative Table",
        "Strong Concluding Remarks tying back to the question prompt"
      ],
      proTip: "For numerical subjects (Financial Acc, Costing, Tax), always state the relevant Accounting Standard (e.g., AS-3, AS-6) or Tax Section before working out the solution. Draw a clean T-account or Working Note block!"
    }
  ],

  fourBlockFormula: [
    {
      step: 1,
      title: "Block 1: Hook & Formal Definition (10% Space)",
      description: "Define the core subject term using exact technical keywords or official definitions (e.g., Section 2(h) of Indian Contract Act 1872).",
      icon: "BookOpen"
    },
    {
      step: 2,
      title: "Block 2: Visual Schema / Diagram (15% Space)",
      description: "Draw a simple block diagram, flowchart, or hierarchy tree. IGNOU evaluators scan for visual proof of concept mastery.",
      icon: "PieChart"
    },
    {
      step: 3,
      title: "Block 3: Headings & Sub-Point Expansion (65% Space)",
      description: "Use clear numbered subheadings (e.g., 1.1, 1.2). Write 3-4 lines under each heading. Never write giant unformatted paragraphs.",
      icon: "ListOrdered"
    },
    {
      step: 4,
      title: "Block 4: Synthesis & Concluding Thought (10% Space)",
      description: "Summarize the key takeaway in 2-3 sentences. Mention modern relevance or economic impact.",
      icon: "CheckCircle"
    }
  ],

  modelAnswers: [
    {
      id: "ma-1",
      subject: "Business Law (BCOC-133)",
      marks: 10,
      question: "Distinguish between 'Coercion' and 'Undue Influence' under the Indian Contract Act, 1872. (10 Marks)",
      averageAnswer: {
        score: "4/10",
        feedback: "Lacks tabular format, missing legal sections, poor formatting with wall of text, and no conclusion.",
        text: `Coercion is when you threaten someone to enter into a contract. Like holding a gun to someone's head. Undue influence is when you use your position to dominate someone's mind, like a doctor and patient. Coercion involves physical force whereas undue influence involves mental force. In coercion there is criminal liability under Indian Penal Code, but in undue influence there is no criminal liability. Contracts made under coercion are voidable at the option of the aggrieved party. Contracts under undue influence are also voidable. Both make contract invalid.`
      },
      topperAnswer: {
        score: "9.5/10",
        feedback: "Uses exact legal sections (Sec 15 & Sec 16), crisp comparative matrix table, clear visual distinction, and conclusion on remedies under Sec 19 & 19A.",
        text: `1. INTRODUCTION & LEGAL PROVISIONS
• Coercion is defined under Section 15 of the Indian Contract Act, 1872 as committing or threatening to commit any act forbidden by the Indian Penal Code (IPC).
• Undue Influence is defined under Section 16 of the Indian Contract Act, 1872 where the relations subsisting between parties are such that one party is in a position to dominate the will of the other.

2. COMPARATIVE MATRIX (TABLE FORMAT)

| Point of Distinction | Coercion (Section 15) | Undue Influence (Section 16) |
|---|---|---|
| Nature of Action | Physical force or threat of violence / illegal detention. | Mental or moral pressure exerted through fiduciary dominance. |
| Pre-existing Relation | Not necessary. Can happen between total strangers. | Essential. Fiduciary or dominant relationship must exist (e.g., Father-Son, Doctor-Patient). |
| Criminal Liability | Involves criminal act punishable under IPC. | No criminal liability involved under IPC. |
| Onus of Proof | Lies on the aggrieved party who alleges coercion. | Onus lies on the dominant party to prove no undue influence was used. |
| Restoration of Benefit | Aggrieved party must restore benefit received (Sec 64). | Court may set aside contract fully or conditionally (Sec 19A). |

3. KEY ILLUSTRATION
• Coercion Example: A threatens to shoot B if B does not sell his house for ₹1 Lakh.
• Undue Influence Example: A spiritual guru induces his follower to gift all property to him for spiritual salvation.

4. CONCLUSION
Both coercion and undue influence vitiate free consent under Section 14. However, while Coercion focuses on physical intimidation, Undue Influence exploits fiduciary trust.`
      }
    },
    {
      id: "ma-2",
      subject: "Financial Accounting (BCOC-131)",
      marks: 20,
      question: "What is Accounting Standard-3 (AS-3)? Explain the classification of cash flows into Operating, Investing, and Financing activities with examples. (20 Marks)",
      averageAnswer: {
        score: "8/20",
        feedback: "Only gave basic definitions, forgot working notes, missing non-cash item treatment, and gave zero mathematical illustrations.",
        text: `AS-3 deals with Cash Flow Statement. Cash flow statement shows inflow and outflow of cash. Cash flow is divided into 3 activities:
1. Operating Activities: Main revenue activities like selling goods and paying wages.
2. Investing Activities: Buying fixed assets like machinery and land.
3. Financing Activities: Raising capital by issuing shares or loans.
Cash flow statement is useful for management to see liquidity.`
      },
      topperAnswer: {
        score: "19/20",
        feedback: "Includes official ICAI reference, 3-tier Activity Tree diagram, treatment of Non-Cash items (Depreciation/Gain on Sale), and sample formatting as per AS-3 Revised (Indirect Method).",
        text: `1. INTRODUCTION TO AS-3 (REVISED)
Accounting Standard-3 (AS-3) issued by the Institute of Chartered Accountants of India (ICAI) mandates the preparation of a Cash Flow Statement to provide information about historical changes in cash and cash equivalents of an enterprise.

2. CLASSIFICATION SCHEMA (VISUAL BLUEPRINT)
           ┌────────────────────────────────────────┐
           │      CASH FLOW STATEMENT (AS-3)        │
           └──────────────────┬─────────────────────┘
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│ 1. OPERATING ACT.│ │ 2. INVESTING ACT.│ │ 3. FINANCING ACT.│
│ (Core Revenue)   │ │ (Long-Term Assets)│ │ (Capital Structure)
└──────────────────┘ └──────────────────┘ └──────────────────┘

3. IN-DEPTH ANALYSIS OF ACTIVITIES

A. OPERATING ACTIVITIES (Principal Revenue-Producing Activities)
- Cash Inflows: Cash receipts from sale of goods/services, commission, royalties.
- Cash Outflows: Cash payments to suppliers for raw material, wages to employees, income tax paid.
- Formula (Indirect Method):
  Net Profit Before Tax + Non-Cash Adjustments (Depreciation, Amortization) 
  + Operating Adjustments (Changes in Working Capital: Trade Debtors, Inventories)

B. INVESTING ACTIVITIES (Acquisition & Disposal of Long-Term Assets)
- Cash Inflows: Sale of Property, Plant & Equipment (PPE), sale of securities/investments, interest received, dividend received.
- Cash Outflows: Purchase of machinery, furniture, land, patent purchase.

C. FINANCING ACTIVITIES (Changes in Size & Composition of Equity and Borrowings)
- Cash Inflows: Proceeds from issue of equity shares, debentures, long-term loans.
- Cash Outflows: Redemption of debentures, repayment of bank loans, dividend paid, interest paid on borrowings.

4. SPECIAL IGNOU EXAM TIPS FOR NUMERICALS
• Cash & Cash Equivalents include short-term highly liquid investments with maturity < 90 days (Bank balance, Treasury Bills).
• Bank Overdraft / Cash Credit is treated as a Financing Activity under AS-3.

5. CONCLUSION
A cash flow statement prepared as per AS-3 provides a robust assessment of a firm's solvency, liquidity, and operational resilience.`
      }
    }
  ],

  examWritingChecklist: [
    "Read the question paper carefully and allocate time per question (e.g., 20 marks = 28 mins max).",
    "Always start answers on a fresh page for 10-mark and 20-mark questions.",
    "Draw box diagrams or flowcharts in the first 2 pages of 20-mark answers.",
    "Use bullet points with underlined key terms instead of continuous narrative text.",
    "Write section numbers (e.g., Sec 2(h), AS-3, Ind AS 115) to impress the evaluator.",
    "Keep 10 minutes reserved at the end for reviewing question numbers and attaching supplementary sheets."
  ]
};
