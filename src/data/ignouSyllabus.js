export const SYLLABUS_DATA = [
  // =========================================================================
  // SEMESTER 1
  // =========================================================================
  {
    semId: 1,
    semTitle: "Semester 1",
    description: "Foundational Financial Accounting & Business Management Principles",
    subjects: [
      {
        code: "BCOC-131",
        title: "Financial Accounting",
        credits: 6,
        category: "Core Course",
        description: "Covers fundamental accounting concepts, trial balance, depreciation accounting, final accounts, hire purchase, consignment accounts, and accounting standards.",
        chapters: [
          {
            id: "bcoc131-ch1",
            number: 1,
            title: "Theoretical Framework & Accounting Standards",
            summary: "Master fundamental concepts, conventions, dual aspect accounting equation, AS-1, AS-2, AS-6, and AS-10.",
            topics: [
              {
                id: "bcoc131-t1",
                title: "Accounting Concepts & Conventions",
                content: `Accounting rests on foundational principles that ensure uniformity across financial statements worldwide.

Key Concepts to Remember:
1. Business Entity Concept: The business is legally and operationally distinct from its owners. Personal expenses of the proprietor are treated as drawings and never mixed with business expenses.
2. Money Measurement Concept: Only transactions that can be quantified in monetary units are recorded in financial books. Qualitative factors (e.g., employee skills, labor disputes) are excluded.
3. Going Concern Concept: Financial statements are prepared on the assumption that the enterprise will continue operations indefinitely and has neither the need nor the intention to liquidate.
4. Dual Aspect Concept (Accounting Equation): Every financial transaction affects at least two accounts with equal debit and credit values.
   Formula: Assets = Liabilities + Capital
5. Accrual & Matching Concepts: Revenues and expenses are recognized when earned or incurred, regardless of cash receipt or payment.`,
                mnemonic: "B-M-G-D (Big Money Grows Daily -> Business Entity, Money Measurement, Going Concern, Dual Aspect)",
                example: "When Rajesh starts a retail firm with ₹1,00,000 cash, Cash (Asset) increases by ₹1,00,000 and Capital (Proprietor's Equity) increases by ₹1,00,000.",
                keyFormulas: [
                  "Assets = Liabilities + Capital (Owner's Equity)",
                  "Net Profit = Total Revenues - Total Expenses",
                  "Closing Capital = Opening Capital + Additional Capital + Net Profit - Drawings"
                ],
                quiz: [
                  {
                    id: "q131-1",
                    question: "Which accounting concept requires that the personal drawings of a proprietor must be recorded separately from business expenditures?",
                    options: [
                      "Money Measurement Concept",
                      "Business Entity Concept",
                      "Going Concern Concept",
                      "Cost Concept"
                    ],
                    correctIndex: 1,
                    explanation: "The Business Entity Concept establishes that the owner and the business enterprise are two distinct entities. Hence personal expenses are classified under Drawings."
                  },
                  {
                    id: "q131-2",
                    question: "If Total Assets = ₹8,50,000 and External Liabilities = ₹3,20,000, what is the proprietor's Capital?",
                    options: [
                      "₹11,70,000",
                      "₹5,30,000",
                      "₹3,20,000",
                      "₹6,50,000"
                    ],
                    correctIndex: 1,
                    explanation: "Using the Accounting Equation: Capital = Assets - Liabilities = ₹8,50,000 - ₹3,20,000 = ₹5,30,000."
                  },
                  {
                    id: "q131-3",
                    question: "Fixed assets are recorded at historical cost less accumulated depreciation rather than liquidation value primarily due to which concept?",
                    options: [
                      "Conservatism Concept",
                      "Going Concern Concept",
                      "Matching Concept",
                      "Materiality Concept"
                    ],
                    correctIndex: 1,
                    explanation: "The Going Concern Concept assumes the enterprise will continue operating into the foreseeable future, justifying the depreciation of historical cost over useful life."
                  },
                  {
                    id: "q131-4",
                    question: "Under the Accrual System of Accounting, revenue is recognized when:",
                    options: [
                      "Cash is received in the bank",
                      "Goods or services are delivered and legal claim arises",
                      "Order is received from the customer",
                      "At the end of the accounting year only"
                    ],
                    correctIndex: 1,
                    explanation: "Under the accrual basis, revenue is recognized when earned (upon delivery/performance of service), irrespective of the timing of cash receipt."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq131-1",
                    year: "Dec 2023",
                    marks: 5,
                    question: "Explain the 'Going Concern' concept and state its significance in fixed asset valuation.",
                    modelAnswer: `1. DEFINITION & HOOK
The Going Concern concept is a fundamental accounting assumption that an enterprise will continue its operational existence for the foreseeable future without any intention or necessity of liquidation.

2. SIGNIFICANCE IN VALUATION
- Historical Cost Basis: Fixed assets (machinery, building) are presented at acquisition cost minus accumulated depreciation rather than current market realization value.
- Deferred Revenue & Prepayments: Prepaid expenses are treated as current assets because future economic benefits will accrue during ongoing operations.

3. EXAM CONCLUSION
Violation of going concern requires financial statements to be prepared on a net realizable liquidation basis.`
                  },
                  {
                    id: "pyq131-2",
                    year: "June 2023",
                    marks: 10,
                    question: "Explain the Matching Principle and Dual Aspect Concept with suitable journal entries and examples.",
                    modelAnswer: `1. THE MATCHING PRINCIPLE
- Concept: Expenses incurred during an accounting period must be matched against revenues recognized in that identical period to determine true periodic profit.
- Application: Outstanding expenses and prepaid expenses are adjusted at year-end to ensure matching.

2. DUAL ASPECT CONCEPT
- Definition: Every financial event produces a dual impact (Debit = Credit).
- Fundamental Equation: Assets = Liabilities + Capital.

3. PRACTICAL ILLUSTRATION
Transaction: Purchased plant for ₹50,000 cash.
- Debit: Plant Account (Asset increases by ₹50,000)
- Credit: Cash Account (Asset decreases by ₹50,000)
- Net effect on total assets = Zero change.

4. EXAM SUMMARY
Both principles prevent distortion of financial results and maintain balance sheet equilibrium.`
                  }
                ]
              },
              {
                id: "bcoc131-t2",
                title: "Accounting Standards (AS-1, AS-2 & AS-10)",
                content: `Accounting Standards (AS) are authoritative policy documents issued by the Institute of Chartered Accountants of India (ICAI) to standardize financial reporting.

Key Accounting Standards in IGNOU CBCS:
• AS-1: Disclosure of Accounting Policies (Mandates disclosure of fundamental assumptions: Going Concern, Consistency, Accrual).
• AS-2: Valuation of Inventories (Inventories must be valued at 'Cost or Net Realizable Value (NRV), whichever is LOWER').
• AS-10: Property, Plant and Equipment (PPE recorded at cost including non-refundable purchase taxes and direct installation expenses until the asset is ready for intended use).`,
                mnemonic: "D-I-P (Disclose policy AS-1, Inventory lower AS-2, Property plant AS-10)",
                example: "A company holds stock purchased for ₹1,20,000 whose current market selling price minus selling costs (NRV) is ₹95,000. Under AS-2, closing inventory must be valued at ₹95,000.",
                keyFormulas: [
                  "Inventory Value = Minimum of (Cost, Net Realizable Value)",
                  "Net Realizable Value (NRV) = Estimated Selling Price - Estimated Completion & Selling Costs",
                  "Initial Cost of PPE = Purchase Price + Import Duties + Direct Installation Costs - Trade Discounts"
                ],
                quiz: [
                  {
                    id: "q131-5",
                    question: "According to AS-2 (Valuation of Inventories), inventory should be valued at:",
                    options: [
                      "Historical Cost only",
                      "Net Realizable Value only",
                      "Cost or Net Realizable Value, whichever is lower",
                      "Replacement Cost"
                    ],
                    correctIndex: 2,
                    explanation: "AS-2 strictly mandates that inventories be valued at the lower of historical cost and net realizable value (NRV) in accordance with the principle of prudence."
                  },
                  {
                    id: "q131-6",
                    question: "Which of the following costs is capitalized under AS-10 (Property, Plant and Equipment)?",
                    options: [
                      "Routine administrative and general overheads",
                      "Site preparation and direct installation charges",
                      "Costs of inaugurating a new facility",
                      "Initial operating losses"
                    ],
                    correctIndex: 1,
                    explanation: "Under AS-10, only directly attributable costs to bring the asset to its working condition for intended use (such as site preparation and installation) are capitalized."
                  },
                  {
                    id: "q131-7",
                    question: "Which accounting standard governs the 'Disclosure of Accounting Policies' in India?",
                    options: [
                      "AS-1",
                      "AS-3",
                      "AS-9",
                      "AS-20"
                    ],
                    correctIndex: 0,
                    explanation: "AS-1 deals with the disclosure of all significant accounting policies followed in the preparation and presentation of financial statements."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq131-3",
                    year: "Dec 2022",
                    marks: 10,
                    question: "Explain the valuation criteria of inventories as per AS-2 and components of cost included.",
                    modelAnswer: `1. CORE RULE OF AS-2
Inventories shall be valued at Lower of Cost and Net Realizable Value (NRV).

2. COMPONENTS OF INVENTORY COST
- Cost of Purchase: Purchase price, import duties, non-refundable taxes, transport and freight, minus trade discounts and rebates.
- Cost of Conversion: Direct labor, direct expenses, and systematically allocated fixed and variable production overheads.
- Other Costs: Incurred only in bringing inventories to their present location and condition.

3. EXCLUSIONS FROM INVENTORY COST
- Abnormal waste of materials or labor.
- Storage costs unless necessary in production prior to a further stage.
- Administrative overheads and selling/distribution costs.

4. CONCLUSION
Adhering to AS-2 ensures conservative profits and realistic working capital valuation.`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoc131-ch2",
            number: 2,
            title: "Depreciation Accounting & Final Accounts",
            summary: "Straight Line Method, Written Down Value Method, Provision for Depreciation, and preparation of Trading, P&L Account and Balance Sheet.",
            topics: [
              {
                id: "bcoc131-t3",
                title: "Methods of Depreciation (SLM vs WDV)",
                content: `Depreciation represents the systematic allocation of the depreciable amount of a tangible fixed asset over its estimated useful economic life.

1. Straight Line Method (SLM / Fixed Installment):
- Equal amount of depreciation charged each year.
- Formula: Annual Dep. = (Original Cost - Residual Scrap Value) / Useful Life in Years
- Depreciation Rate = (Annual Depreciation / Original Cost) * 100

2. Written Down Value Method (WDV / Diminishing Balance):
- Depreciation is calculated on the opening book value of the asset each year.
- Higher depreciation in earlier years, decreasing in subsequent years.
- Preferred by Income Tax Authorities (Section 32 of Income Tax Act mandates WDV).`,
                mnemonic: "S-W (SLM = Same every year, WDV = Withering balance down)",
                example: "Machinery purchased for ₹1,00,000 with 10% rate: SLM charges ₹10,000 every year; WDV charges ₹10,000 in Year 1, ₹9,000 in Year 2 (10% of ₹90,000), and ₹8,100 in Year 3.",
                keyFormulas: [
                  "SLM Depreciation = (Cost of Asset - Estimated Salvage Value) / Estimated Life in Years",
                  "WDV Depreciation (Year n) = Book Value at Beginning of Year n * (Rate / 100)",
                  "Profit/Loss on Sale = Sale Proceeds - Written Down Value on Date of Sale"
                ],
                quiz: [
                  {
                    id: "q131-8",
                    question: "An asset is purchased for ₹2,20,000 with an estimated scrap value of ₹20,000 and useful life of 5 years. What is the annual depreciation under SLM?",
                    options: [
                      "₹44,000",
                      "₹40,000",
                      "₹50,000",
                      "₹36,000"
                    ],
                    correctIndex: 1,
                    explanation: "Annual Depreciation = (Cost - Scrap) / Life = (₹2,20,000 - ₹20,000) / 5 = ₹2,00,000 / 5 = ₹40,000."
                  },
                  {
                    id: "q131-9",
                    question: "Which depreciation method is legally recognized for claiming depreciation allowances under the Indian Income Tax Act 1961?",
                    options: [
                      "Straight Line Method (SLM)",
                      "Written Down Value Method (WDV)",
                      "Annuity Method",
                      "Insurance Policy Method"
                    ],
                    correctIndex: 1,
                    explanation: "Under Section 32 of the Income Tax Act 1961, depreciation is computed on the block of assets using the Written Down Value (WDV) method."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq131-4",
                    year: "June 2023",
                    marks: 20,
                    question: "Distinguish between Straight Line Method (SLM) and Written Down Value Method (WDV) of depreciation. Explain with a 3-year comparative schedule.",
                    modelAnswer: `1. CONCEPTUAL COMPARISON
- Computation Base: SLM calculates on Original Cost; WDV calculates on Diminishing Book Value.
- Total Charge to P&L (Depreciation + Repairs): SLM imposes an unequal combined burden (higher in later years); WDV maintains an almost equal combined charge over asset life.
- Asset Book Value: Under SLM, book value can reach zero; under WDV, book value never mathematically reaches zero.

2. COMPARATIVE 3-YEAR SCHEDULE (Asset Cost = ₹1,00,000; Rate = 10%)
| Year | SLM Depreciation | SLM Closing Book Value | WDV Depreciation | WDV Closing Book Value |
|------|------------------|------------------------|------------------|------------------------|
| Yr 1 | ₹10,000          | ₹90,000                | ₹10,000          | ₹90,000                |
| Yr 2 | ₹10,000          | ₹80,000                | ₹9,000           | ₹81,000                |
| Yr 3 | ₹10,000          | ₹70,000                | ₹8,100           | ₹72,900                |

3. TAX & ACCOUNTING SUITABILITY
WDV is required for income tax purposes and is suitable for plant, machinery, and vehicles where repair costs rise as assets age.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOC-132",
        title: "Business Organisation and Management",
        credits: 6,
        category: "Core Course",
        description: "Study of business ownership forms, corporate evolution, management thought (Taylor & Fayol), planning, organizing, leadership, and controlling.",
        chapters: [
          {
            id: "bcoc132-ch1",
            number: 1,
            title: "Forms of Business Ownership & Indian Business Environment",
            summary: "Comparative analysis of Sole Proprietorship, Partnership (1932 Act), Joint Hindu Family Business, LLP (2008 Act), and Joint Stock Company.",
            topics: [
              {
                id: "bcoc132-t1",
                title: "Forms of Business Ownership (Sole Prop, LLP & Company)",
                content: `Choosing an appropriate business entity determines legal liability, taxation, capital access, and operational continuity.

1. Sole Proprietorship:
- Single owner, unlimited personal liability, absence of legal entity separation, direct decision-making.

2. Partnership & Limited Liability Partnership (LLP):
- Traditional Partnership (1932 Act): Unlimited joint and several liability, maximum 50 members.
- LLP (2008 Act): Hybrid structure offering limited liability of a company with operational flexibility of a partnership.

3. Joint Stock Company (2013 Act):
- Separate legal existence, perpetual succession, limited liability, transferable shares, common seal.`,
                mnemonic: "S-P-L-C (Single owner, Partners shared, Limited liability LLP, Corporate company)",
                example: "A local grocery shop operates as a Sole Proprietorship; an audit firm of chartered accountants registers as an LLP; a nationwide automotive brand incorporates as a Public Limited Company.",
                keyFormulas: [
                  "LLP = Partnership Flexibility + Corporate Limited Liability",
                  "Minimum Members: Private Ltd (2), Public Ltd (7), LLP (2)"
                ],
                quiz: [
                  {
                    id: "q132-1",
                    question: "What is the primary advantage of a Limited Liability Partnership (LLP) over a traditional partnership firm?",
                    options: [
                      "No requirement of maintaining accounts",
                      "Partners have limited liability shielding personal assets",
                      "Exemption from all corporate taxes",
                      "Unlimited number of partners without registration"
                    ],
                    correctIndex: 1,
                    explanation: "Under the LLP Act 2008, partners' liabilities are limited to their agreed capital contributions, protecting personal property from firm debts."
                  },
                  {
                    id: "q132-2",
                    question: "Perpetual succession in a joint stock company means:",
                    options: [
                      "The company must operate forever without change",
                      "The company's existence is independent of the death or insolvency of its shareholders",
                      "Directors cannot be removed by shareholders",
                      "Shares cannot be transferred to outsiders"
                    ],
                    correctIndex: 1,
                    explanation: "Perpetual succession signifies that members may come and go, but the company's legal existence continues until formally dissolved under law."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq132-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Compare Sole Proprietorship and Joint Stock Company on the basis of liability, capital formation, and continuity.",
                    modelAnswer: `1. COMPARISON MATRIX
- Liability: Sole proprietor has unlimited liability (personal assets attachable); Company shareholders have liability limited to unpaid share capital.
- Capital Formation: Sole proprietor is constrained by individual wealth/borrowings; Company raises vast public capital via equity and debentures.
- Continuity & Succession: Sole proprietorship terminates with owner's death or incapacity; Company enjoys perpetual succession independent of members.

2. CONCLUSION
Sole proprietorship is optimal for small local trades, while joint stock companies are essential for capital-intensive industrial enterprises.`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoc132-ch2",
            number: 2,
            title: "Management Principles & Functions",
            summary: "Scientific Management (F.W. Taylor), Administrative Theory (Henri Fayol's 14 Principles), Planning, Organizing, and Controlling.",
            topics: [
              {
                id: "bcoc132-t2",
                title: "Fayol's 14 Principles & Taylor's Scientific Management",
                content: `Management thought is anchored in the classical frameworks established by Henri Fayol and Frederick Winslow Taylor.

Henri Fayol's Key Principles (P-O-S-D-C-O-R-B):
1. Division of Work: Specialization increases efficiency.
2. Authority & Responsibility: Parity must exist between decision-making power and accountability.
3. Unity of Command: An employee should receive instructions from only ONE superior to avoid conflict.
4. Unity of Direction: One head, one plan for a group of activities having the same objective.
5. Scalar Chain: Unbroken chain of authority from top executive to lowest rank (with Gang Plank for emergencies).
6. Esprit de Corps: Promoting team spirit and unity.

F.W. Taylor's Scientific Management:
- Time & Motion Study, Differential Piece-Rate System, Science not rule of thumb, Functional Foremanship.`,
                mnemonic: "D-A-U-U-S-E (Division, Authority, Unity of command, Unity of direction, Scalar chain, Esprit de corps)",
                example: "In a corporate branch, customer care executives report solely to the Branch Service Manager (Unity of Command) rather than receiving conflicting orders from Operations and Sales heads.",
                keyFormulas: [
                  "Efficiency = Output Produced / Standard Input Resources",
                  "Scalar Chain with Gang Plank = Direct cross-communication in emergencies"
                ],
                quiz: [
                  {
                    id: "q132-3",
                    question: "Which principle of Henri Fayol states that an employee should receive orders from one superior only?",
                    options: [
                      "Unity of Direction",
                      "Unity of Command",
                      "Scalar Chain",
                      "Order"
                    ],
                    correctIndex: 1,
                    explanation: "Unity of Command dictates that an individual employee must be accountable to and receive directives from one immediate boss only to prevent confusion."
                  },
                  {
                    id: "q132-4",
                    question: "'Gang Plank' in Fayol's principles is an exception to:",
                    options: [
                      "Division of Work",
                      "Scalar Chain",
                      "Subordination of Individual Interest",
                      "Equity"
                    ],
                    correctIndex: 1,
                    explanation: "Gang Plank allows direct communication between employees of equal rank across different departments during emergencies, bypassing the formal scalar chain."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq132-2",
                    year: "June 2023",
                    marks: 20,
                    question: "Explain Henri Fayol's 14 Principles of Management and discuss their contemporary relevance in modern corporations.",
                    modelAnswer: `1. INTRODUCTION & THEORETICAL HOOK
Henri Fayol, known as the Father of General Management, published 14 universal principles providing administrative guidelines applicable across business and public institutions.

2. DETAILED 4-BLOCK ANALYSIS OF KEY PRINCIPLES
- Unity of Command vs Unity of Direction: Command focuses on personnel receiving single-source instructions; Direction focuses on alignment toward organizational objectives.
- Authority & Responsibility: Power without accountability leads to misuse; accountability without power creates frustration.
- Equity & Remuneration: Fair pay and impartial treatment foster employee retention and high morale.
- Subordination of Individual Interest: Organizational goals supersede individual preferences.

3. CONTEMPORARY CORPORATE RELEVANCE
Modern agile firms utilize Gang Plank for rapid cross-functional communication and Esprit de Corps for collaborative remote teamwork.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 2
  // =========================================================================
  {
    semId: 2,
    semTitle: "Semester 2",
    description: "Mercantile Business Law & Quantitative Decision Techniques",
    subjects: [
      {
        code: "BCOC-133",
        title: "Business Law",
        credits: 6,
        category: "Core Course",
        description: "Study of Indian Contract Act 1872, Special Contracts (Indemnity, Guarantee, Bailment, Agency), Sale of Goods Act 1930, and Consumer Protection Act 2019.",
        chapters: [
          {
            id: "bcoc133-ch1",
            number: 1,
            title: "Indian Contract Act, 1872 (General Principles)",
            summary: "Formation of valid contracts, offer and acceptance, lawful consideration, free consent (coercion, undue influence, fraud, misrepresentation), and remedies for breach.",
            topics: [
              {
                id: "bcoc133-t1",
                title: "Essential Elements of a Valid Contract (Section 10)",
                content: `Under Section 2(h) of the Indian Contract Act 1872, 'An agreement enforceable by law is a contract.'

Essential Elements under Section 10:
1. Offer & Acceptance: Lawful offer by one party and unconditional acceptance by the other.
2. Intention to Create Legal Relations: Balfour v. Balfour established that social or domestic agreements lack legal intent and are not enforceable.
3. Lawful Consideration (Quid Pro Quo): Something in return (Section 23).
4. Capacity of Parties: Must be major (18+), of sound mind, and not disqualified by law (Mohori Bibee v. Dharmodas Ghose - minor agreement is void ab initio).
5. Free Consent: Free from Coercion (Sec 15), Undue Influence (Sec 16), Fraud (Sec 17), Misrepresentation (Sec 18), or Mutual Mistake (Sec 20).
6. Lawful Object: Object must not be illegal, immoral, or opposed to public policy.`,
                mnemonic: "O-I-C-C-F-L (Offer, Intent, Consideration, Capacity, Free consent, Lawful object)",
                example: "A promise by a father to pay his son ₹5,000 monthly pocket money is a domestic agreement lacking legal intent; whereas a written contract to supply 100 bags of cement for ₹35,000 is a legally binding commercial contract.",
                keyFormulas: [
                  "Contract = Agreement + Legal Enforceability",
                  "Agreement = Offer + Acceptance",
                  "Minor's Agreement = Void ab initio (from the very beginning)"
                ],
                quiz: [
                  {
                    id: "q133-1",
                    question: "An agreement entered into with a minor (under 18 years of age) under Indian Law is:",
                    options: [
                      "Voidable at the option of the minor",
                      "Valid and fully enforceable",
                      "Void ab initio (void from the beginning)",
                      "Illegal and punishable"
                    ],
                    correctIndex: 2,
                    explanation: "As ruled in Mohori Bibee v. Dharmodas Ghose (1903), any agreement with a minor is void ab initio because a minor lacks the legal capacity to contract."
                  },
                  {
                    id: "q133-2",
                    question: "Consent is said to be free when it is not caused by:",
                    options: [
                      "Adequate consideration",
                      "Coercion, Undue Influence, Fraud, or Misrepresentation",
                      "Written documentation",
                      "Witness signatures"
                    ],
                    correctIndex: 1,
                    explanation: "Under Section 14, consent is free when not induced by coercion (Sec 15), undue influence (Sec 16), fraud (Sec 17), misrepresentation (Sec 18), or mistake."
                  },
                  {
                    id: "q133-3",
                    question: "The landmark case 'Balfour v. Balfour' established which foundational principle of contract law?",
                    options: [
                      "Necessity of consideration",
                      "Intention to create legal relationship",
                      "Doctrine of Privity of Contract",
                      "Breach of contract damages"
                    ],
                    correctIndex: 1,
                    explanation: "Balfour v. Balfour established that purely domestic or social promises do not show intention to create legal relationships and cannot be enforced in court."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq133-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "'All contracts are agreements, but all agreements are not contracts.' Critically evaluate this statement with legal exceptions.",
                    modelAnswer: `1. MEANING & LEGAL FOUNDATION
- Agreement = Offer + Acceptance (Promise).
- Contract = Agreement + Legal Enforceability (Section 10 criteria).

2. ANALYSIS: WHY ALL CONTRACTS ARE AGREEMENTS
Every contract originates from a negotiated agreement between parties where consensus ad idem (meeting of minds) has occurred.

3. WHY ALL AGREEMENTS ARE NOT CONTRACTS
- Social/Domestic Agreements: Promises between spouses or friends lack legal intent (Balfour v. Balfour).
- Agreements lacking Free Consent: Agreements induced by coercion or fraud are voidable.
- Agreements with Incompetent Persons: Agreements with minors or persons of unsound mind are void ab initio.
- Illegal/Immoral Agreements: Agreements against public policy (e.g., wagering or crime) are void.

4. EXAM SUMMARY
Only agreements that satisfy Section 10 criteria transform into legally enforceable contracts.`
                  },
                  {
                    id: "pyq133-2",
                    year: "June 2023",
                    marks: 20,
                    question: "Define Free Consent. Distinguish between 'Coercion' and 'Undue Influence' with relevant statutory provisions and case law.",
                    modelAnswer: `1. DEFINITION OF FREE CONSENT (SECTION 14)
Consent is free when parties agree upon the same thing in the same sense without any external pressure, distortion, or deceit.

2. STATUTORY COMPARISON: COERCION VS UNDUE INFLUENCE
| Parameter | Coercion (Section 15) | Undue Influence (Section 16) |
|-----------|------------------------|------------------------------|
| Nature of Act | Physical force, committing or threatening an act forbidden by IPC | Moral pressure and mental dominance |
| Relationship | Between total strangers or any parties | Pre-existing fiduciary relationship (Doctor-Patient, Master-Servant) |
| Criminal Liability | Involves penal/criminal wrongdoing | No criminal liability involved |
| Burden of Proof | On the party pleading coercion | On the dominant party to prove no influence was exercised |

3. LEGAL CONSEQUENCE
In both scenarios, the contract is voidable at the option of the aggrieved party whose consent was wrongfully obtained.`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoc133-ch2",
            number: 2,
            title: "Sale of Goods Act, 1930 & Consumer Protection Act, 2019",
            summary: "Contract of sale vs agreement to sell, Conditions and Warranties, Doctrine of Caveat Emptor, and 3-Tier Consumer Disputes Redressal Commission.",
            topics: [
              {
                id: "bcoc133-t2",
                title: "Conditions vs Warranties & Doctrine of Caveat Emptor",
                content: `The Sale of Goods Act 1930 governs commercial sales of movable goods across India.

1. Condition (Section 12(2)):
- A stipulation essential to the main purpose of the contract.
- Breach gives the buyer the right to repudiate the entire contract and claim damages.

2. Warranty (Section 12(3)):
- A stipulation collateral to the main purpose.
- Breach only entitles the buyer to claim damages; the contract cannot be rejected.

3. Doctrine of Caveat Emptor ('Let the Buyer Beware' - Section 16):
- The seller is not obligated to disclose every defect; the buyer must inspect goods before purchasing.
- Exceptions: Sale by description/sample, buyer relying on seller's skill/judgment, and latent defects concealed by fraud.`,
                mnemonic: "C-W-C (Condition repudiates, Warranty gives damages, Caveat emptor buyer beware)",
                example: "If a customer orders a diesel car for highway freight and the dealer delivers a petrol sedan, this is a breach of Condition (customer can return car for full refund). If the car horn is defective, it is a breach of Warranty (dealer must repair/pay damages).",
                keyFormulas: [
                  "Breach of Condition = Contract Repudiation + Damages",
                  "Breach of Warranty = Claim for Damages only (No contract cancellation)"
                ],
                quiz: [
                  {
                    id: "q133-4",
                    question: "In a contract of sale, a 'Condition' is a stipulation which is:",
                    options: [
                      "Collateral to the main purpose of the contract",
                      "Essential to the main purpose of the contract",
                      "Optional for both buyer and seller",
                      "Only applicable for imported products"
                    ],
                    correctIndex: 1,
                    explanation: "Under Section 12(2), a condition is a foundational term essential to the contract; breach gives the aggrieved party the right to cancel the contract."
                  },
                  {
                    id: "q133-5",
                    question: "Under the Consumer Protection Act 2019, the pecuniary jurisdiction of the District Consumer Commission is up to:",
                    options: [
                      "₹20 Lakhs",
                      "₹50 Lakhs",
                      "₹1 Crore",
                      "₹10 Crores"
                    ],
                    correctIndex: 1,
                    explanation: "Under the updated CPA 2019 rules, District Commissions hear consumer claims up to ₹50 Lakhs (revised threshold)."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq133-3",
                    year: "Dec 2022",
                    marks: 10,
                    question: "Explain the doctrine of 'Caveat Emptor'. What are the statutory exceptions to this rule under the Sale of Goods Act 1930?",
                    modelAnswer: `1. MEANING OF CAVEAT EMPTOR
Caveat Emptor ('Let the Buyer Beware') establishes that the buyer takes the risk of quality and fitness unless they obtain an express warranty from the seller.

2. STATUTORY EXCEPTIONS (SECTION 16)
- Fitness for Purpose: When the buyer discloses the particular purpose and relies on the seller's professional skill.
- Sale by Description: Goods must correspond to their commercial description.
- Merchantable Quality: Goods bought by description from a dealer must be free from unobservable latent defects.
- Sale by Sample: Bulk must correspond with sample in quality, and buyer must have reasonable opportunity to inspect.
- Fraud by Seller: Active concealment of defects voids the defense of caveat emptor.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOC-134",
        title: "Business Mathematics and Statistics",
        credits: 6,
        category: "Core Course",
        description: "Covers commercial mathematics, matrices, linear equations, measures of central tendency, dispersion, correlation, regression, and index numbers.",
        chapters: [
          {
            id: "bcoc134-ch1",
            number: 1,
            title: "Measures of Central Tendency & Dispersion",
            summary: "Arithmetic Mean, Median, Mode, Range, Quartile Deviation, Mean Deviation, Standard Deviation, and Coefficient of Variation.",
            topics: [
              {
                id: "bcoc134-t1",
                title: "Mean, Median, Mode & Standard Deviation",
                content: `Descriptive statistics summarize data distributions into single representative measures of location and spread.

1. Measures of Central Tendency:
- Arithmetic Mean: Sum of observations divided by number of observations. Highly sensitive to extreme outlier values.
- Median: The middle-most value in an ordered array (Positional Average). Best suited for skewed qualitative data (e.g., income, intelligence).
- Mode: The value with highest frequency. Empirical relation: Mode = 3*Median - 2*Mean.

2. Measures of Dispersion (Spread):
- Standard Deviation (sigma): Square root of mean squared deviations from arithmetic mean.
- Coefficient of Variation (C.V.): Relative measure of consistency. Lower C.V. denotes higher stability and consistency.`,
                mnemonic: "M-M-M-S (Mean is average, Median is middle, Mode is most frequent, SD is spread)",
                example: "Comparing consistency of two salesmen: Salesman A has Mean=₹50,000, SD=₹5,000 (CV=10%); Salesman B has Mean=₹50,000, SD=₹15,000 (CV=30%). Salesman A is far more consistent.",
                keyFormulas: [
                  "Mean (Direct) = Sum(f * x) / Sum(f)",
                  "Median = L + [ (N/2 - c.f.) / f ] * h",
                  "Empirical Mode = 3 * Median - 2 * Mean",
                  "Standard Deviation (sigma) = Sqrt[ Sum(f * d^2)/N - (Sum(f * d)/N)^2 ]",
                  "Coefficient of Variation (C.V.) = (Standard Deviation / Mean) * 100"
                ],
                quiz: [
                  {
                    id: "q134-1",
                    question: "If in an asymmetric distribution, Mean = 30 and Median = 28, what is the value of the empirical Mode?",
                    options: [
                      "26",
                      "24",
                      "32",
                      "29"
                    ],
                    correctIndex: 1,
                    explanation: "Using the empirical formula: Mode = 3*Median - 2*Mean = 3(28) - 2(30) = 84 - 60 = 24."
                  },
                  {
                    id: "q134-2",
                    question: "Between two investment portfolios with the same mean return, the portfolio with the lower Coefficient of Variation (C.V.) is considered:",
                    options: [
                      "More volatile and risky",
                      "More consistent and stable",
                      "Less profitable",
                      "Unsuitable for investment"
                    ],
                    correctIndex: 1,
                    explanation: "Coefficient of Variation measures relative risk/variability per unit of return. A lower C.V. denotes superior stability and lower risk."
                  },
                  {
                    id: "q134-3",
                    question: "Which average is calculated by taking the reciprocal of the arithmetic mean of reciprocals of given values?",
                    options: [
                      "Geometric Mean",
                      "Harmonic Mean",
                      "Median",
                      "Weighted Mean"
                    ],
                    correctIndex: 1,
                    explanation: "Harmonic Mean is the reciprocal of the arithmetic mean of the reciprocals of the observations, primarily used for averaging speed, rates, and ratios."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq134-1",
                    year: "June 2023",
                    marks: 10,
                    question: "What is the Coefficient of Variation? How is it used to compare consistency between two sets of business data?",
                    modelAnswer: `1. DEFINITION & FORMULA
The Coefficient of Variation (C.V.) is the percentage ratio of Standard Deviation to Arithmetic Mean.
Formula: C.V. = (sigma / x_bar) * 100

2. BUSINESS APPLICATION
- Comparing Risk & Return: Portfolios with identical yields are compared using C.V. to select the one with minimal volatility.
- Employee Performance Consistency: Factory workers with lower C.V. in output demonstrate consistent productivity.

3. DECISION RULE
- Higher C.V. = Greater variability / Lesser consistency.
- Lower C.V. = Lesser variability / Greater consistency and reliability.`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoc134-ch2",
            number: 2,
            title: "Correlation, Regression & Index Numbers",
            summary: "Karl Pearson's coefficient of correlation (r), Spearman's rank correlation, regression equations (Y on X, X on Y), Laspeyres, Paasche, and Fisher's Ideal Index.",
            topics: [
              {
                id: "bcoc134-t2",
                title: "Karl Pearson's Correlation & Fisher's Ideal Index",
                content: `1. Karl Pearson's Coefficient of Correlation ('r'):
- Measures the degree and direction of linear association between two variables.
- Value bounded strictly between -1.0 <= r <= +1.0.
- r = +1 (Perfect Positive), r = -1 (Perfect Negative), r = 0 (No Linear Association).
- Independent of changes of origin and scale.

2. Regression Analysis:
- Regression equations: (Y - Y_bar) = b_yx * (X - X_bar) and (X - X_bar) = b_xy * (Y - Y_bar).
- Geometric property: r = +- Sqrt(b_yx * b_xy). Both regression coefficients must share the same sign.

3. Fisher's Ideal Index Number:
- Geometric mean of Laspeyres Index (base-weighted) and Paasche Index (current-weighted).
- Satisfies both Time Reversal Test (TRT) and Factor Reversal Test (FRT).`,
                mnemonic: "C-R-F (Correlation bounds -1 to +1, Regression predicts Y, Fisher ideal index)",
                example: "Advertising expenditure (X) and sales revenue (Y) have r = +0.88, demonstrating a strong positive linear relationship.",
                keyFormulas: [
                  "r = Cov(X,Y) / (sigma_X * sigma_Y)",
                  "Regression Coefficient b_yx = r * (sigma_Y / sigma_X)",
                  "r = Sqrt(b_yx * b_xy)",
                  "Fisher Index P_01 = Sqrt( Laspeyres Index * Paasche Index )"
                ],
                quiz: [
                  {
                    id: "q134-4",
                    question: "If the two regression coefficients are b_yx = 0.8 and b_xy = 0.45, what is the correlation coefficient r?",
                    options: [
                      "0.36",
                      "0.60",
                      "0.65",
                      "0.72"
                    ],
                    correctIndex: 1,
                    explanation: "r = Sqrt(b_yx * b_xy) = Sqrt(0.8 * 0.45) = Sqrt(0.36) = 0.60."
                  },
                  {
                    id: "q134-5",
                    question: "Why is Fisher's Index formula termed as the 'Ideal Index Number'?",
                    options: [
                      "It uses arithmetic mean of price relatives",
                      "It satisfies both the Time Reversal Test and Factor Reversal Test",
                      "It requires only base year data",
                      "It is easy to compute without quantities"
                    ],
                    correctIndex: 1,
                    explanation: "Fisher's Index is geometric mean of Laspeyres and Paasche, and is mathematically proven to satisfy both the Time Reversal Test (TRT) and Factor Reversal Test (FRT)."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq134-2",
                    year: "Dec 2023",
                    marks: 20,
                    question: "Explain the properties of Linear Regression Coefficients and prove that the correlation coefficient is the geometric mean of two regression coefficients.",
                    modelAnswer: `1. PROPERTIES OF REGRESSION COEFFICIENTS
- Property 1: Both regression coefficients (b_yx and b_xy) and the correlation coefficient (r) must have the same algebraic sign (+ or -).
- Property 2: If one regression coefficient is greater than unity (>1), the other must be less than unity (<1), since r^2 <= 1.
- Property 3: The arithmetic mean of regression coefficients is greater than or equal to the correlation coefficient: (b_yx + b_xy)/2 >= r.
- Property 4: Regression coefficients are independent of change of origin but dependent on change of scale.

2. MATHEMATICAL PROOF (r = Sqrt(b_yx * b_xy))
We know:
b_yx = r * (sigma_Y / sigma_X)
b_xy = r * (sigma_X / sigma_Y)
Multiplying both:
b_yx * b_xy = [r * (sigma_Y / sigma_X)] * [r * (sigma_X / sigma_Y)]
b_yx * b_xy = r^2
Taking square root on both sides:
r = Sqrt(b_yx * b_xy). Hence proved.

3. EXAM CONCLUSION
Regression equations enable predictive forecasting of dependent business metrics (e.g. Sales) from independent budget variables (e.g. Advertising).`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 3
  // =========================================================================
  {
    semId: 3,
    semTitle: "Semester 3",
    description: "Corporate Law, Income Tax Framework & Business Computing",
    subjects: [
      {
        code: "BCOC-135",
        title: "Company Law",
        credits: 6,
        category: "Core Course",
        description: "Detailed study of Companies Act 2013, incorporation, Memorandum & Articles of Association, share capital, directors' duties, meetings, and winding up.",
        chapters: [
          {
            id: "bcoc135-ch1",
            number: 1,
            title: "Corporate Personality, Incorporation & Key Documents",
            summary: "Solomon v. Solomon principle, Lifting of Corporate Veil, Memorandum of Association (MoA clauses), Articles of Association (AoA), Doctrine of Indoor Management.",
            topics: [
              {
                id: "bcoc135-t1",
                title: "Corporate Veil & Memorandum of Association (MoA)",
                content: `A company incorporated under the Companies Act 2013 is an artificial legal person distinct from its members (Salomon v. Salomon & Co. Ltd.).

1. Lifting / Piercing the Corporate Veil:
Courts look behind the legal facade to identify real individuals in cases of:
- Tax evasion (Sir Dinshaw Maneckjee Petit case).
- Fraud or improper conduct (Gilford Motor Co. v. Horne).
- Determining enemy character of company in wartime (Daimler Co. Ltd. v. Continental Tyre).

2. Memorandum of Association (MoA - Section 4):
The charter and constitution of the company defining its external powers.
Six Mandatory Clauses:
1. Name Clause (ends with 'Limited' or 'Private Limited')
2. Registered Office (Domicile) Clause
3. Objects Clause (defines permissible business; acts beyond are Ultra Vires)
4. Liability Clause (limited by shares or guarantee)
5. Capital Clause (authorized share capital)
6. Association / Subscription Clause`,
                mnemonic: "N-R-O-L-C-A (Name, Registered office, Objects, Liability, Capital, Association)",
                example: "If a company registered to manufacture cement enters into an agreement to run an airline, this contract is Ultra Vires the Objects Clause and is void ab initio.",
                keyFormulas: [
                  "Ultra Vires Act = Void ab initio (Cannot be ratified even by 100% shareholder vote)",
                  "Doctrine of Indoor Management protects innocent outsiders acting in good faith"
                ],
                quiz: [
                  {
                    id: "q135-1",
                    question: "Which landmark English case established the doctrine of Separate Legal Entity of a registered company?",
                    options: [
                      "Salomon v. Salomon & Co. Ltd.",
                      "Carlill v. Carbolic Smoke Ball Co.",
                      "Royal British Bank v. Turquand",
                      "Daimler Co. v. Continental Tyre Co."
                    ],
                    correctIndex: 0,
                    explanation: "Salomon v. Salomon & Co. Ltd. (1897) firmly established that once incorporated, a company is a distinct legal person separate from its shareholders and directors."
                  },
                  {
                    id: "q135-2",
                    question: "An act performed by the board of directors that exceeds the powers specified in the company's Objects Clause of MoA is:",
                    options: [
                      "Valid if approved by Managing Director",
                      "Ultra Vires the company and completely void",
                      "Voidable at the option of creditors",
                      "Valid with penalty fine"
                    ],
                    correctIndex: 1,
                    explanation: "Acts beyond the powers authorized in the Objects Clause of the Memorandum of Association are Ultra Vires the company, rendering them null, void, and un-ratifiable."
                  },
                  {
                    id: "q135-3",
                    question: "The 'Doctrine of Indoor Management' (Turquand Rule) was created to protect:",
                    options: [
                      "Directors against minority shareholders",
                      "Third-party outsiders dealing with the company in good faith",
                      "Promoters before incorporation",
                      "Tax authorities"
                    ],
                    correctIndex: 1,
                    explanation: "The Doctrine of Indoor Management protects innocent external parties from internal irregularities in corporate procedural compliance."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq135-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "What is meant by 'Lifting of Corporate Veil'? Discuss the circumstances under which courts pierce the corporate veil under Companies Act 2013.",
                    modelAnswer: `1. PRINCIPLE OF CORPORATE VEIL
Incorporation creates a legal fiction of corporate personality separating the company from its shareholders (Salomon principle).

2. GROUNDS FOR LIFTING THE CORPORATE VEIL
- Prevention of Fraud or Evasion of Obligations: When a company is created as a mere cloak to breach contracts (Gilford Motor Co. v. Horne).
- Protection of Public Revenue & Tax Evasion: When corporate shell is used to split income and evade tax (Sir Dinshaw Maneckjee Petit).
- Determining Enemy Character: During war, to ascertain if controllers belong to an enemy nation (Daimler Co. Ltd.).
- Avoidance of Welfare Legislation: Siphoning profits to avoid bonus payment to workers.

3. EXAM CONCLUSION
The corporate veil is respected for legitimate enterprise, but pierced whenever used as a vehicle for illegality or deception.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOC-136",
        title: "Income Tax Law and Practice",
        credits: 6,
        category: "Core Course",
        description: "Basic concepts, residential status (Section 6), 5 heads of income (Salaries, House Property, PGBP, Capital Gains, Other Sources), deductions under Chapter VI-A (80C to 80U).",
        chapters: [
          {
            id: "bcoc136-ch1",
            number: 1,
            title: "Basic Concepts & Residential Status (Section 6)",
            summary: "Definition of Assessee, Previous Year, Assessment Year, Section 6 criteria for Resident & Ordinarily Resident (ROR), RNOR, and Non-Resident (NR).",
            topics: [
              {
                id: "bcoc136-t1",
                title: "Residential Status & Scope of Total Income (Section 6)",
                content: `Tax liability in India is determined by Residential Status during the relevant Previous Year, NOT by citizenship.

1. Basic Conditions for Individual (Section 6(1)):
Condition A: Physical presence in India for 182 days or more in the Previous Year. OR
Condition B: Presence for 60 days or more in the Previous Year AND 365 days or more during the 4 preceding Previous Years.
(Note: 60 days replaced with 182 days for Indian citizen leaving for employment abroad or crew member of Indian ship).

2. Additional Conditions for Resident & Ordinarily Resident (ROR) (Section 6(6)):
Must satisfy BOTH:
1. Resident in India in at least 2 out of 10 preceding Previous Years. AND
2. Present in India for 730 days or more during 7 preceding Previous Years.

3. Incidence of Tax (Scope of Total Income):
- ROR: Global Income is taxable (Indian + Foreign Income).
- RNOR: Indian income taxable + Foreign business income controlled from India.
- Non-Resident (NR): ONLY income received or accrued in India is taxable.`,
                mnemonic: "1-8-2 / 6-0-3-6-5 (182 days primary, or 60 days + 365 in 4 years)",
                example: "An American IT executive stays in India for 200 days in FY 2023-24. He satisfies Condition A (182+ days), making him Resident in India for tax assessment.",
                keyFormulas: [
                  "Assessment Year (AY) = Year immediately following Previous Year (PY)",
                  "ROR Tax Scope = Indian Income + Foreign Income (Global Taxation)",
                  "NR Tax Scope = Income received or deemed received in India + Accrued in India"
                ],
                quiz: [
                  {
                    id: "q136-1",
                    question: "Under Section 6(1) of the Income Tax Act, an individual is Resident in India if he resides in India during the previous year for at least:",
                    options: [
                      "60 days",
                      "90 days",
                      "182 days",
                      "365 days"
                    ],
                    correctIndex: 2,
                    explanation: "Under Section 6(1)(a), staying in India for an aggregate period of 182 days or more in the previous year confers Resident status."
                  },
                  {
                    id: "q136-2",
                    question: "Income earned and received in London from a business controlled wholly from India is taxable in India for:",
                    options: [
                      "Resident and Ordinarily Resident (ROR) only",
                      "ROR and Resident but Not Ordinarily Resident (RNOR)",
                      "Non-Resident (NR) only",
                      "Not taxable in India for anyone"
                    ],
                    correctIndex: 1,
                    explanation: "Foreign business income controlled from India is taxable for both ROR and RNOR, but exempt for Non-Residents (NR)."
                  },
                  {
                    id: "q136-3",
                    question: "Which of the following is NOT an assessment year for the financial year 2023-24 (Previous Year)?",
                    options: [
                      "AY 2024-25",
                      "AY 2023-24",
                      "AY 2025-26",
                      "Both B and C"
                    ],
                    correctIndex: 1,
                    explanation: "For the Previous Year (Financial Year) 2023-24, the corresponding Assessment Year during which income is evaluated and taxed is AY 2024-25."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq136-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Explain the rules for determining the residential status of an individual assessee under Section 6 of the Income Tax Act, 1961.",
                    modelAnswer: `1. INTRODUCTION
Under the Income Tax Act 1961, tax liability is governed by residential status during the financial year rather than nationality or citizenship.

2. BASIC CONDITIONS (SECTION 6(1))
An individual is RESIDENT if they satisfy ANY ONE condition:
- Condition A: Stay in India for 182 days or more during the previous year.
- Condition B: Stay in India for 60 days or more in the previous year AND 365 days or more during the 4 preceding previous years.

3. ADDITIONAL CONDITIONS FOR ROR (SECTION 6(6))
A resident becomes Resident and Ordinarily Resident (ROR) if they satisfy BOTH:
- Resident in India in at least 2 out of 10 preceding previous years.
- Stay in India for 730 days or more during 7 preceding previous years.

4. RESIDENT BUT NOT ORDINARILY RESIDENT (RNOR) & NON-RESIDENT (NR)
- Fails both or either additional condition = RNOR.
- Fails both basic conditions = Non-Resident (NR).`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoc136-ch2",
            number: 2,
            title: "Heads of Income & Chapter VI-A Deductions",
            summary: "Salaries (Standard deduction, HRA Sec 10(13A)), House Property (NAV, Sec 24 deduction), and Deductions (80C, 80D, 80G, 80TTA).",
            topics: [
              {
                id: "bcoc136-t2",
                title: "Income from Salaries & Deductions under Section 80C to 80U",
                content: `1. Salary Computations (Sections 15 to 17):
- Standard Deduction: Flat ₹50,000 deduction allowed to all salaried employees (under Sec 16(ia)).
- House Rent Allowance (HRA) Exemption (Sec 10(13A)) is minimum of:
  a) Actual HRA received
  b) Rent paid minus 10% of Salary (Basic + DA)
  c) 50% of Salary (Metro cities) or 40% (Non-metro)

2. Key Chapter VI-A Deductions:
• Section 80C: Investments in PPF, ELSS, EPF, Life Insurance, Principal on Home Loan (Max ₹1,50,000).
• Section 80D: Health Insurance Premium (₹25,000 self/family; ₹50,000 senior citizens).
• Section 80E: Interest on Higher Education Loan (No upper ceiling, for 8 years).
• Section 80TTA: Savings bank interest up to ₹10,000.`,
                mnemonic: "C-D-E-T (80C investments ₹1.5L, 80D doctor health, 80E education loan, 80TTA savings interest)",
                example: "An employee with Gross Salary ₹8,50,000 claiming Standard Deduction (₹50,000), 80C (₹1,50,000 PPF), and 80D (₹25,000 Mediclaim) has Net Taxable Income = ₹6,25,000.",
                keyFormulas: [
                  "Net Salary = Gross Salary - Standard Deduction (₹50,000) - Professional Tax",
                  "HRA Exemption = Min (Actual HRA, Rent - 10% Salary, 50%/40% Salary)",
                  "Total Taxable Income = Gross Total Income (GTI) - Deductions (80C to 80U)"
                ],
                quiz: [
                  {
                    id: "q136-4",
                    question: "What is the maximum permissible deduction limit under Section 80C of the Income Tax Act?",
                    options: [
                      "₹1,00,000",
                      "₹1,50,000",
                      "₹2,00,000",
                      "₹2,50,000"
                    ],
                    correctIndex: 1,
                    explanation: "The aggregate deduction limit under Sections 80C, 80CCC, and 80CCD(1) is capped at ₹1,50,000 per financial year."
                  },
                  {
                    id: "q136-5",
                    question: "Under Section 24(b), what is the maximum deduction allowed for interest on home loan for a self-occupied residential property?",
                    options: [
                      "₹1,50,000",
                      "₹2,00,000",
                      "₹50,000",
                      "Full interest without limit"
                    ],
                    correctIndex: 1,
                    explanation: "Section 24(b) permits a maximum interest deduction of ₹2,00,000 per annum on housing loan for self-occupied residential house property."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq136-2",
                    year: "June 2023",
                    marks: 20,
                    question: "Discuss the rules regarding computation of taxable House Rent Allowance (HRA) under Section 10(13A) with a numerical example.",
                    modelAnswer: `1. STATUTORY PROVISION
House Rent Allowance (HRA) granted by an employer is exempt under Section 10(13A) read with Rule 2A to the extent of the LEAST of three limits.

2. THREE LIMITS FOR EXEMPTION
- Limit 1: Actual HRA received from employer during the period.
- Limit 2: Rent paid minus 10% of Salary (Basic + DA forming part of retirement benefits).
- Limit 3: 50% of Salary (for Mumbai, Delhi, Kolkata, Chennai) OR 40% of Salary (for other non-metro cities).

3. PRACTICAL COMPUTATION
Data: Basic Salary = ₹40,000/month; HRA = ₹12,000/month; Rent Paid in Delhi = ₹15,000/month.
- Limit 1: ₹12,000 * 12 = ₹1,44,000
- Limit 2: (₹15,000 * 12) - 10%(₹4,80,000) = ₹1,80,000 - ₹48,000 = ₹1,32,000
- Limit 3: 50% of ₹4,80,000 = ₹2,40,000
Least Amount = ₹1,32,000 (Exempt HRA).
Taxable HRA = ₹1,44,000 - ₹1,32,000 = ₹12,000 included in Gross Salary.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOS-183",
        title: "Computer Applications in Business",
        credits: 4,
        category: "Skill Enhancement",
        description: "Spreadsheet modeling in Microsoft Excel/LibreOffice, financial functions (PMT, NPV, IRR), pivot tables, VLOOKUP, and business database management.",
        chapters: [
          {
            id: "bcos183-ch1",
            number: 1,
            title: "Spreadsheets for Business Decisions & Financial Functions",
            summary: "VLOOKUP, HLOOKUP, IF-ELSE logic, PMT (Loan EMI calculation), NPV, IRR, and interactive Pivot Table reporting.",
            topics: [
              {
                id: "bcos183-t1",
                title: "Excel Financial Functions (PMT, NPV & VLOOKUP)",
                content: `Spreadsheet software provides decision-support tools for accounting, financial planning, and operational audits.

1. Essential Business Functions:
- VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]): Searches vertically in the leftmost column of a table and returns corresponding value from specified column.
- PMT(rate, nper, pv, [fv], [type]): Computes constant periodic loan installment (EMI) based on constant payments and constant interest rate.
- NPV(rate, value1, value2, ...): Calculates Net Present Value of future cash inflows discounted at cost of capital.
- Pivot Tables: Summarize, aggregate, and slice multidimensional business sales data without modifying source records.`,
                mnemonic: "P-N-V (PMT calculates EMI, NPV discounts cash, VLOOKUP retrieves data)",
                example: "Calculating monthly EMI on a ₹10,00,000 car loan at 12% annual interest for 5 years: =PMT(12%/12, 5*12, -1000000) gives ₹22,244 per month.",
                keyFormulas: [
                  "Monthly Rate in PMT = Annual Rate / 12",
                  "Total Periods (NPER) = Years * 12",
                  "VLOOKUP exact match requires range_lookup = FALSE or 0"
                ],
                quiz: [
                  {
                    id: "q183-1",
                    question: "Which Excel function calculates the periodic payment (EMI) for a loan based on constant payments and constant interest rate?",
                    options: [
                      "=PV()",
                      "=PMT()",
                      "=FV()",
                      "=RATE()"
                    ],
                    correctIndex: 1,
                    explanation: "The =PMT() function calculates the periodic payment for an annuity loan based on constant periodic payments and a fixed interest rate."
                  },
                  {
                    id: "q183-2",
                    question: "To perform an exact match lookup in the VLOOKUP formula, the fourth parameter [range_lookup] must be set to:",
                    options: [
                      "TRUE or 1",
                      "FALSE or 0",
                      "BLANK",
                      "\"APPROX\""
                    ],
                    correctIndex: 1,
                    explanation: "Setting the 4th argument of VLOOKUP to FALSE (or 0) enforces exact matching on the lookup value."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq183-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Explain the syntax and practical business utility of VLOOKUP and PMT functions in spreadsheet applications.",
                    modelAnswer: `1. VLOOKUP FUNCTION
- Syntax: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
- Business Utility: Automates price retrieval in billing systems, employee salary lookups from master payroll rosters, and inventory stock monitoring.

2. PMT FUNCTION
- Syntax: =PMT(rate, nper, pv, [fv], [type])
- Parameters: rate = interest rate per period; nper = total number of payment periods; pv = present loan principal.
- Business Utility: Enables commercial banks and borrowers to compute exact monthly amortization installments (EMIs) across varied loan tenures.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 4
  // =========================================================================
  {
    semId: 4,
    semTitle: "Semester 4",
    description: "Corporate Financial Accounting, Cost Accounting & E-Commerce",
    subjects: [
      {
        code: "BCOC-137",
        title: "Corporate Accounting",
        credits: 6,
        category: "Core Course",
        description: "Accounting for share capital, forfeiture and reissue, redemption of preference shares, debentures, company final accounts (Schedule III), and goodwill/share valuation.",
        chapters: [
          {
            id: "bcoc137-ch1",
            number: 1,
            title: "Issue, Forfeiture & Reissue of Shares",
            summary: "Pro-rata allotment in over-subscription, calls-in-arrears, forfeiture of shares issued at par/premium, and transfer to Capital Reserve.",
            topics: [
              {
                id: "bcoc137-t1",
                title: "Forfeiture & Reissue of Shares (Capital Reserve)",
                content: `When a shareholder fails to pay allotment or call money, the Board of Directors can forfeit their shares after serving statutory notice under the Articles of Association.

Key Accounting Rules:
1. Share Capital Account is DEBITED with the CALLED-UP amount per share (not face value).
2. Securities Premium Account is debited ONLY if premium was NOT received.
3. Share Forfeiture Account is CREDITED with the amount ALREADY RECEIVED towards share capital.
4. On Reissue: Maximum allowable discount on reissue cannot exceed the amount credited in Share Forfeiture Account for those shares.
5. Profit on reissue is transferred to CAPITAL RESERVE (Capital Profit).`,
                mnemonic: "C-F-R-C (Called-up debited, Forfeiture credited, Reissue discount limit, Capital reserve gain)",
                example: "100 shares of ₹10 (called up ₹8) forfeited for non-payment of ₹3 call. Share Capital debited ₹800; Calls-in-Arrears credited ₹300; Share Forfeiture credited ₹500. Reissued at ₹7 (discount ₹1). Capital Reserve = ₹500 - ₹100 = ₹400.",
                keyFormulas: [
                  "Share Capital Dr. = No. of Forfeited Shares * Called-up Value per Share",
                  "Maximum Reissue Discount = Amount previously received on forfeited shares",
                  "Capital Reserve = (Forfeiture Credit per share - Reissue Discount per share) * Number of Reissued Shares"
                ],
                quiz: [
                  {
                    id: "q137-1",
                    question: "When shares are forfeited for non-payment of call money, the Share Capital Account is debited with:",
                    options: [
                      "Face value of shares",
                      "Called-up value of shares",
                      "Paid-up value of shares",
                      "Market value of shares"
                    ],
                    correctIndex: 1,
                    explanation: "On forfeiture, Share Capital is debited with the amount called-up on those shares to reverse the capital originally recognized."
                  },
                  {
                    id: "q137-2",
                    question: "The net balance remaining in the Share Forfeiture Account after reissuing all forfeited shares is transferred to:",
                    options: [
                      "General Reserve",
                      "Capital Reserve",
                      "Statement of Profit & Loss",
                      "Securities Premium Account"
                    ],
                    correctIndex: 1,
                    explanation: "The surplus arising on reissue of forfeited shares is a capital profit and is transferred to Capital Reserve Account."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq137-1",
                    year: "Dec 2023",
                    marks: 20,
                    question: "Explain the legal provisions and journal entries for forfeiture of shares issued at a premium when: (a) Premium has been received, (b) Premium has not been received.",
                    modelAnswer: `1. STATUTORY FRAMEWORK (SECTION 52 & TABLE F)
Forfeiture cancels membership and seizes the capital paid. Under Section 52(2), once securities premium is received, it cannot be reversed upon subsequent forfeiture.

2. CASE A: SECURITIES PREMIUM RECEIVED
- Rule: Premium is ignored and not debited.
- Journal Entry:
  Share Capital A/c (Called-up capital) Dr.
    To Calls-in-Arrears A/c (Unpaid calls)
    To Share Forfeiture A/c (Amount received towards capital)

3. CASE B: SECURITIES PREMIUM NOT RECEIVED
- Rule: Securities Premium Account must be debited to cancel the uncollected premium.
- Journal Entry:
  Share Capital A/c (Called-up capital) Dr.
  Securities Premium A/c (Unpaid premium) Dr.
    To Calls-in-Arrears A/c (Total unpaid amount incl. premium)
    To Share Forfeiture A/c (Amount received towards capital)

4. REISSUE & CAPITAL RESERVE TRANSFER
Discount on reissue is debited to Share Forfeiture A/c, and net balance transfers to Capital Reserve A/c.`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoc137-ch2",
            number: 2,
            title: "Valuation of Goodwill and Shares",
            summary: "Average profit method, Super profit method, Capitalization method, and Share valuation (Net Asset / Intrinsic method & Yield method).",
            topics: [
              {
                id: "bcoc137-t2",
                title: "Valuation of Goodwill (Super Profit & Capitalization)",
                content: `Goodwill is an intangible asset representing the present value of anticipated future super-earnings of an established business.

1. Super Profit Method:
- Normal Profit = Capital Employed * Normal Rate of Return (NRR)
- Super Profit = Average Adjusted Future Maintainable Profit - Normal Profit
- Goodwill = Super Profit * Number of Years' Purchase

2. Capitalization of Super Profit Method:
- Goodwill = (Super Profit / Normal Rate of Return) * 100

3. Valuation of Shares (Intrinsic Value Method):
- Value per Equity Share = Net Assets Available for Equity Shareholders / Total Number of Equity Shares.`,
                mnemonic: "A-N-S-G (Average profit, Normal profit, Super profit, Goodwill multiplier)",
                example: "Capital Employed = ₹5,00,000; NRR = 10%; Average Profit = ₹75,000. Normal Profit = ₹50,000. Super Profit = ₹25,000. Goodwill at 3 years purchase = ₹25,000 * 3 = ₹75,000.",
                keyFormulas: [
                  "Normal Profit = Capital Employed * (Normal Rate of Return / 100)",
                  "Super Profit = Future Maintainable Profit - Normal Profit",
                  "Goodwill (Super Profit Method) = Super Profit * Number of Years' Purchase",
                  "Goodwill (Capitalization Method) = (Super Profit / NRR) * 100",
                  "Intrinsic Value per Share = Net Assets for Equity / Number of Equity Shares"
                ],
                quiz: [
                  {
                    id: "q137-3",
                    question: "If Capital Employed = ₹10,00,000, Normal Rate of Return = 12%, and Average Annual Profit = ₹1,50,000, what is the Super Profit?",
                    options: [
                      "₹1,20,000",
                      "₹30,000",
                      "₹1,50,000",
                      "₹20,000"
                    ],
                    correctIndex: 1,
                    explanation: "Normal Profit = ₹10,00,000 * 12% = ₹1,20,000. Super Profit = Average Profit - Normal Profit = ₹1,50,000 - ₹1,20,000 = ₹30,000."
                  },
                  {
                    id: "q137-4",
                    question: "Under the Capitalization of Super Profit Method, if Super Profit is ₹40,000 and Normal Rate of Return is 10%, the value of Goodwill is:",
                    options: [
                      "₹4,00,000",
                      "₹40,000",
                      "₹80,000",
                      "₹4,40,000"
                    ],
                    correctIndex: 0,
                    explanation: "Goodwill = (Super Profit / NRR) * 100 = (₹40,000 / 10) * 100 = ₹4,00,000."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq137-2",
                    year: "June 2023",
                    marks: 10,
                    question: "Define Goodwill. Explain the steps involved in valuing goodwill using the Super Profit Method.",
                    modelAnswer: `1. DEFINITION OF GOODWILL
Goodwill represents the reputation, brand equity, and customer relationships of an enterprise enabling it to earn excess profits over normal industry returns.

2. STEP-BY-STEP SUPER PROFIT METHOD
- Step 1: Calculate Average Maintainable Profit (adjusting for non-recurring income, abnormal losses, and tax).
- Step 2: Compute Average Capital Employed = Total Tangible Assets - External Liabilities.
- Step 3: Compute Normal Profit = Capital Employed * Normal Rate of Return (NRR).
- Step 4: Calculate Super Profit = Adjusted Average Profit - Normal Profit.
- Step 5: Compute Goodwill = Super Profit * Number of Years' Purchase.

3. EXAM CONCLUSION
If Super Profit is negative (Loss), goodwill value is nil.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOC-138",
        title: "Cost Accounting",
        credits: 6,
        category: "Core Course",
        description: "Elements of cost, cost sheet preparation, material control (EOQ), labor incentive schemes (Halsey, Rowan), overhead allocation, and marginal costing (CVP analysis).",
        chapters: [
          {
            id: "bcoc138-ch1",
            number: 1,
            title: "Cost Sheet Preparation & Material Cost Control",
            summary: "Prime Cost, Factory Cost, Cost of Production, Total Cost, Economic Order Quantity (EOQ), and ABC analysis inventory control.",
            topics: [
              {
                id: "bcoc138-t1",
                title: "Cost Sheet Structure & Economic Order Quantity (EOQ)",
                content: `1. Cost Sheet Structure:
- Prime Cost = Direct Material Consumed + Direct Labor + Direct Expenses
- Works / Factory Cost = Prime Cost + Factory Overheads + Opening WIP - Closing WIP
- Cost of Production = Factory Cost + Administrative Overheads
- Cost of Goods Sold (COGS) = Cost of Production + Opening Finished Goods - Closing Finished Goods
- Total Cost (Cost of Sales) = COGS + Selling and Distribution Overheads
- Sales = Total Cost + Profit (or - Loss)

2. Economic Order Quantity (EOQ - Wilson's Formula):
- The optimal purchase order size that minimizes total inventory ordering and carrying costs.
- EOQ = Sqrt[ (2 * A * O) / C ]
  Where: A = Annual Consumption Units; O = Cost of placing one order; C = Annual carrying cost per unit.`,
                mnemonic: "P-W-P-S (Prime cost, Works cost, Production cost, Sales cost)",
                example: "Annual demand = 10,000 units; Ordering cost = ₹50/order; Carrying cost = ₹1/unit/year. EOQ = Sqrt[(2 * 10,000 * 50) / 1] = Sqrt[1,000,000] = 1,000 units per order.",
                keyFormulas: [
                  "Prime Cost = Direct Materials + Direct Labor + Direct Expenses",
                  "Factory Cost = Prime Cost + Factory / Works Overheads",
                  "EOQ = Sqrt( (2 * A * O) / C )",
                  "Reorder Level (ROL) = Maximum Consumption * Maximum Lead Time",
                  "Minimum Level = ROL - (Normal Consumption * Normal Lead Time)"
                ],
                quiz: [
                  {
                    id: "q138-1",
                    question: "In Cost Accounting, Prime Cost is computed as the aggregate of:",
                    options: [
                      "Direct Materials + Direct Labor + Direct Expenses",
                      "Direct Materials + Factory Overheads",
                      "Total Cost minus Selling Expenses",
                      "Factory Cost + Administrative Overheads"
                    ],
                    correctIndex: 0,
                    explanation: "Prime Cost is the sum total of all direct production costs: Direct Materials, Direct Labor, and Direct Chargeable Expenses."
                  },
                  {
                    id: "q138-2",
                    question: "If Annual Demand A = 8,000 units, Ordering Cost O = ₹200, and Carrying Cost C = ₹2 per unit per year, what is the EOQ?",
                    options: [
                      "800 units",
                      "1,265 units",
                      "1,600 units",
                      "400 units"
                    ],
                    correctIndex: 1,
                    explanation: "EOQ = Sqrt[(2 * 8000 * 200) / 2] = Sqrt[3,200,000 / 2] = Sqrt[1,600,000] = 1,264.91 => ~1,265 units."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq138-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Draw the proforma of a comprehensive Cost Sheet showing Prime Cost, Factory Cost, Cost of Production, and Cost of Sales.",
                    modelAnswer: `1. COST SHEET PROFORMA
| Particulars | Amount (₹) |
|-------------|------------|
| Opening Stock of Raw Materials | xxx |
| Add: Purchases of Raw Materials + Freight Inward | xxx |
| Less: Closing Stock of Raw Materials | (xxx) |
| **Direct Material Consumed** | **XXX** |
| Add: Direct Wages / Labor | xxx |
| Add: Direct Chargeable Expenses | xxx |
| **PRIME COST (A)** | **XXX** |
| Add: Factory / Works Overheads | xxx |
| Add: Opening Work-in-Progress (WIP) | xxx |
| Less: Closing Work-in-Progress (WIP) | (xxx) |
| **WORKS / FACTORY COST (B)** | **XXX** |
| Add: Office & Administrative Overheads | xxx |
| **COST OF PRODUCTION (C)** | **XXX** |
| Add: Opening Stock of Finished Goods | xxx |
| Less: Closing Stock of Finished Goods | (xxx) |
| **COST OF GOODS SOLD (COGS) (D)** | **XXX** |
| Add: Selling & Distribution Overheads | xxx |
| **TOTAL COST OF SALES (E)** | **XXX** |
| Profit Margin / (Loss) | xxx |
| **SALES REVENUE** | **XXX** |`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoc138-ch2",
            number: 2,
            title: "Marginal Costing & Break-Even Analysis",
            summary: "Profit-Volume (P/V) ratio, Break-Even Point (BEP) in units and value, Margin of Safety (MOS), and managerial decision-making.",
            topics: [
              {
                id: "bcoc138-t2",
                title: "Marginal Costing, P/V Ratio & Break-Even Point",
                content: `Marginal Costing is a technique where only variable costs are charged to cost units, and fixed costs are written off against Contribution in the period incurred.

1. Fundamental Equation:
- Sales - Variable Cost = Contribution = Fixed Cost + Profit
- Contribution per unit = Selling Price per unit - Variable Cost per unit

2. Key Decision Ratios:
- Profit-Volume (P/V) Ratio = (Contribution / Sales) * 100 = (Change in Profit / Change in Sales) * 100
- Break-Even Point (BEP): The sales level where Total Revenue = Total Cost (Zero profit, zero loss).
  BEP (in units) = Fixed Cost / Contribution per unit
  BEP (in Rupees) = Fixed Cost / P/V Ratio
- Margin of Safety (MOS) = Actual Sales - Break-Even Sales = Profit / P/V Ratio`,
                mnemonic: "C-P-B-M (Contribution = S - V, PV ratio, Break-even point, Margin of safety)",
                example: "Selling Price = ₹20/unit, Variable Cost = ₹12/unit, Fixed Cost = ₹80,000. Contribution/unit = ₹8. P/V Ratio = (8/20)*100 = 40%. BEP (units) = 80,000 / 8 = 10,000 units. BEP (Rupees) = 80,000 / 40% = ₹2,00,000.",
                keyFormulas: [
                  "Contribution = Sales - Variable Cost = Fixed Cost + Profit",
                  "P/V Ratio = (Contribution / Sales) * 100",
                  "BEP (Units) = Fixed Cost / Contribution per Unit",
                  "BEP (Value) = Fixed Cost / P/V Ratio",
                  "Margin of Safety (MOS) = Actual Sales - Break-Even Sales = Profit / P/V Ratio"
                ],
                quiz: [
                  {
                    id: "q138-3",
                    question: "If Selling Price is ₹50 per unit, Variable Cost is ₹30 per unit, and Total Fixed Cost is ₹1,00,000, what is the Break-Even Point in units?",
                    options: [
                      "2,000 units",
                      "5,000 units",
                      "3,333 units",
                      "10,000 units"
                    ],
                    correctIndex: 1,
                    explanation: "Contribution per unit = ₹50 - ₹30 = ₹20. BEP in units = Fixed Cost / Contribution per unit = ₹1,00,000 / ₹20 = 5,000 units."
                  },
                  {
                    id: "q138-4",
                    question: "Margin of Safety can be increased by which of the following actions?",
                    options: [
                      "Decreasing selling price per unit",
                      "Increasing fixed production costs",
                      "Increasing sales volume or increasing selling price",
                      "Increasing variable costs per unit"
                    ],
                    correctIndex: 2,
                    explanation: "Margin of Safety (Actual Sales - BEP Sales) expands when total sales volume increases or when contribution per unit rises via higher selling price."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq138-2",
                    year: "June 2023",
                    marks: 20,
                    question: "Explain the concept of Marginal Costing. Define P/V Ratio, Break-Even Point, and Margin of Safety with relevant formulas and graphs.",
                    modelAnswer: `1. CONCEPT OF MARGINAL COSTING
Marginal costing distinguishes fixed costs from variable costs. Fixed costs are treated as period costs, whereas product pricing and profitability are evaluated based on Contribution.

2. CORE FORMULAS & DEFINITIONS
- Contribution: The excess of sales revenue over variable costs. (C = S - V).
- Profit-Volume (P/V) Ratio: Percentage of contribution relative to sales. (P/V = C/S * 100). Higher P/V denotes superior profitability.
- Break-Even Point (BEP): Level of activity where total revenue equals total cost (FC / P/V Ratio).
- Margin of Safety (MOS): Cushion of sales above the break-even volume (Actual Sales - BEP Sales).

3. MANAGERIAL APPLICATIONS
Marginal costing assists leadership in:
- Make or Buy decisions.
- Key factor / Limiting resource product-mix optimization.
- Export pricing below total cost (absorbing variable cost).`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOS-184",
        title: "E-Commerce",
        credits: 4,
        category: "Skill Enhancement",
        description: "E-Commerce business models (B2B, B2C, C2C), electronic payment gateways, digital signatures, cyber security threats, and IT Act 2000 provisions.",
        chapters: [
          {
            id: "bcos184-ch1",
            number: 1,
            title: "E-Commerce Models & Electronic Payment Systems",
            summary: "B2B, B2C, C2C, C2B models, UPI, Payment Gateways, SSL encryption, and IT Act 2000 legal framework.",
            topics: [
              {
                id: "bcos184-t1",
                title: "E-Commerce Business Models & Payment Gateways (UPI, SSL)",
                content: `1. E-Commerce Business Models:
- B2B (Business-to-Business): Bulk trade between manufacturers and wholesalers (e.g. IndiaMART, Alibaba).
- B2C (Business-to-Consumer): Direct retail transactions with consumers (e.g. Amazon, Flipkart).
- C2C (Consumer-to-Consumer): Peer-to-peer auction and resale platforms (e.g. OLX, eBay).
- C2B (Consumer-to-Business): Freelancers and individuals selling services to organizations (e.g. Upwork).

2. Electronic Payment Ecosystem:
- Payment Gateways: Encrypt payment card/UPI data between customer portal and acquiring bank.
- Unified Payments Interface (UPI): Real-time mobile payment system developed by NPCI utilizing Virtual Payment Addresses (VPA).
- Security Standards: SSL/TLS 256-bit encryption, PCI-DSS compliance, Two-Factor Authentication (2FA).`,
                mnemonic: "B-B-C-C (B2B wholesale, B2C retail, C2C resale, C2B freelance)",
                example: "A consumer buying shoes on Amazon uses Razorpay payment gateway with UPI two-factor PIN authentication to securely settle funds.",
                keyFormulas: [
                  "E-Commerce Architecture = Client Layer + Web Server + Payment Gateway + Merchant Bank",
                  "IT Act 2000 Section 43A: Compensation for failure to protect sensitive personal data"
                ],
                quiz: [
                  {
                    id: "q184-1",
                    question: "An online marketplace like OLX where individual consumers buy and sell second-hand goods directly to other consumers is an example of:",
                    options: [
                      "B2B Model",
                      "B2C Model",
                      "C2C Model",
                      "C2B Model"
                    ],
                    correctIndex: 2,
                    explanation: "Consumer-to-Consumer (C2C) facilitates direct commercial transactions between individual consumers."
                  },
                  {
                    id: "q184-2",
                    question: "Which Indian organization developed and operates the Unified Payments Interface (UPI)?",
                    options: [
                      "Reserve Bank of India (RBI)",
                      "National Payments Corporation of India (NPCI)",
                      "State Bank of India (SBI)",
                      "SEBI"
                    ],
                    correctIndex: 1,
                    explanation: "NPCI (National Payments Corporation of India) engineered and manages UPI, IMPS, and RuPay payment networks."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq184-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Explain the various business models of E-Commerce with real-world industry examples. Discuss the role of Payment Gateways.",
                    modelAnswer: `1. E-COMMERCE BUSINESS CLASSIFICATION
- B2B (Business to Business): High-value wholesale transactions (IndiaMART).
- B2C (Business to Consumer): Retail online shopping portals (Amazon, Myntra).
- C2C (Consumer to Consumer): Consumer peer marketplaces (OLX, Quickr).
- C2B (Consumer to Business): Crowdsourced freelance service platforms (Fiverr).

2. ROLE OF PAYMENT GATEWAYS
Payment gateways act as secure digital intermediaries encrypting sensitive financial credentials, validating card/UPI tokens, verifying 2FA OTPs, and settling net funds into merchant merchant accounts.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 5
  // =========================================================================
  {
    semId: 5,
    semTitle: "Semester 5",
    description: "Marketing Principles, Corporate Financial Management & Startup Entrepreneurship",
    subjects: [
      {
        code: "BCOE-141",
        title: "Principles of Marketing",
        credits: 6,
        category: "Core Elective",
        description: "Marketing philosophy, STP strategy (Segmentation, Targeting, Positioning), Product Life Cycle (PLC), pricing models, promotion mix, and physical distribution.",
        chapters: [
          {
            id: "bcoe141-ch1",
            number: 1,
            title: "Marketing Concepts, STP Strategy & Product Life Cycle",
            summary: "Marketing vs Selling concept, Segmentation criteria, 4 Stages of PLC (Introduction, Growth, Maturity, Decline), and pricing strategies.",
            topics: [
              {
                id: "bcoe141-t1",
                title: "STP Strategy (Segmentation, Targeting, Positioning)",
                content: `Modern marketing strategy focuses on customer-centric value creation via STP analysis.

1. Market Segmentation:
Dividing a heterogeneous market into distinct homogeneous groups based on:
- Geographic (regions, urban/rural).
- Demographic (age, gender, income, occupation).
- Psychographic (lifestyle, social class, personality).
- Behavioral (usage rate, brand loyalty, benefits sought).

2. Target Market Selection:
- Undifferentiated (Mass Marketing), Differentiated (Segmented), Concentrated (Niche Marketing), Micro-marketing.

3. Positioning:
Designing the brand's offering and image to occupy a distinctive, valued place in the target customer's mind relative to competitors.`,
                mnemonic: "S-T-P (Segment the audience, Target the best, Position the brand)",
                example: "Apple segments tech users demographically by premium income and psychographically by design innovation, targeting professionals with high-end aspirational positioning.",
                keyFormulas: [
                  "Marketing Mix (4 Ps) = Product, Price, Place, Promotion",
                  "Customer Value = Total Perceived Benefits / Total Customer Cost"
                ],
                quiz: [
                  {
                    id: "q141-1",
                    question: "Dividing a market into distinct consumer groups based on social class, lifestyle, and personality traits is known as:",
                    options: [
                      "Geographic Segmentation",
                      "Demographic Segmentation",
                      "Psychographic Segmentation",
                      "Behavioral Segmentation"
                    ],
                    correctIndex: 2,
                    explanation: "Psychographic segmentation groups buyers according to psychological variables: lifestyle, values, and personality characteristics."
                  },
                  {
                    id: "q141-2",
                    question: "In which stage of the Product Life Cycle (PLC) do sales growth slow down due to market saturation and competition reaches its peak?",
                    options: [
                      "Introduction Stage",
                      "Growth Stage",
                      "Maturity Stage",
                      "Decline Stage"
                    ],
                    correctIndex: 2,
                    explanation: "During the Maturity stage, market saturation slows sales growth and price competition becomes intense among existing competitors."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq141-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Explain the four stages of the Product Life Cycle (PLC) and describe the marketing strategies suitable for each stage.",
                    modelAnswer: `1. PRODUCT LIFE CYCLE STAGES
- Introduction Stage: Slow sales growth, high launch expenses, negative/low profits. Strategy: Heavy promotional awareness, skimming or penetration pricing.
- Growth Stage: Rapid sales expansion, rising economies of scale, growing profits. Strategy: Product differentiation, expanding distribution channels.
- Maturity Stage: Peak sales, market saturation, intense price wars. Strategy: Market modification, product redesign, retention discounts.
- Decline Stage: Falling sales and obsolescence. Strategy: Harvest product lines, eliminate unprofitable SKUs.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOE-143",
        title: "Fundamentals of Financial Management",
        credits: 6,
        category: "Core Elective",
        description: "Time value of money, Capital Budgeting (NPV, IRR, Payback), Cost of Capital (WACC), Capital Structure theories, and Working Capital Management.",
        chapters: [
          {
            id: "bcoe143-ch1",
            number: 1,
            title: "Capital Budgeting & Cost of Capital (WACC)",
            summary: "Net Present Value (NPV), Internal Rate of Return (IRR), Payback Period, Cost of Equity (Ke), Cost of Debt (Kd), and WACC.",
            topics: [
              {
                id: "bcoe143-t1",
                title: "Capital Budgeting Techniques (NPV vs IRR) & WACC",
                content: `Financial Management seeks to maximize Shareholder Wealth (Market value per equity share).

1. Capital Budgeting Evaluation Techniques:
- Net Present Value (NPV): Present value of cash inflows minus initial cash outlay discounted at cost of capital.
  Accept project if NPV > 0. (Gold standard metric).
- Internal Rate of Return (IRR): The discount rate at which NPV = 0.
  Accept project if IRR > Cost of Capital (k).
- Payback Period: Number of years required to recover initial investment.

2. Weighted Average Cost of Capital (WACC / Ko):
- Overall composite cost of capital combining equity, preference shares, retained earnings, and debt.
- WACC = (We * Ke) + (Wd * Kd*(1 - Tax Rate)) + (Wp * Kp)`,
                mnemonic: "N-I-P-W (NPV > 0 accept, IRR > k accept, Payback recovery, WACC weighted average)",
                example: "A company invests ₹10,00,000 in a machine yielding PV of inflows ₹12,80,000. NPV = +₹2,80,000. Since NPV > 0, the project creates ₹2.8 Lakhs shareholder wealth and is accepted.",
                keyFormulas: [
                  "NPV = Sum[ Cash Flow_t / (1 + k)^t ] - Initial Outlay",
                  "IRR is the discount rate 'r' where NPV = 0",
                  "After-tax Cost of Debt Kd = I * (1 - T) / Net Proceeds",
                  "WACC (Ko) = (We * Ke) + (Wd * Kd * (1-T)) + (Wp * Kp)"
                ],
                quiz: [
                  {
                    id: "q143-1",
                    question: "Which capital budgeting technique is universally considered theoretically superior because it directly measures addition to shareholder wealth?",
                    options: [
                      "Payback Period Method",
                      "Accounting Rate of Return (ARR)",
                      "Net Present Value (NPV) Method",
                      "Internal Rate of Return (IRR)"
                    ],
                    correctIndex: 2,
                    explanation: "NPV is the most robust criterion because it accounts for time value of money, considers all cash flows, and measures absolute net wealth addition."
                  },
                  {
                    id: "q143-2",
                    question: "Why is the effective cost of debt Kd adjusted by (1 - Tax Rate)?",
                    options: [
                      "Debt is risk-free for companies",
                      "Interest on debt is a tax-deductible expense providing a tax shield",
                      "Banks provide cash subsidies to corporate borrowers",
                      "Tax rate has no impact on debt"
                    ],
                    correctIndex: 1,
                    explanation: "Interest paid on corporate debt is deductible before tax, creating a tax shield that lowers the effective cost of debt to Kd * (1 - T)."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq143-1",
                    year: "June 2023",
                    marks: 20,
                    question: "Define Capital Budgeting. Compare Net Present Value (NPV) and Internal Rate of Return (IRR) methods in evaluating mutually exclusive projects.",
                    modelAnswer: `1. CONCEPT OF CAPITAL BUDGETING
Capital budgeting is the process of planning and evaluating long-term capital investments whose returns span multiple years.

2. NPV VS IRR COMPARISON
- Decision Rule: NPV accepts if NPV > 0; IRR accepts if IRR > Cost of Capital (k).
- Reinvestment Rate Assumption: NPV assumes cash inflows reinvested at Cost of Capital (realistic); IRR assumes reinvestment at project's own IRR (unrealistic).
- Scale & Timing Conflicts: When evaluating mutually exclusive projects of differing scales, NPV and IRR may rank projects differently.

3. RESOLUTION OF CONFLICT
In case of conflict between mutually exclusive projects, the NPV criterion should ALWAYS be followed because it directly maximizes absolute monetary wealth.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOS-185",
        title: "Entrepreneurship",
        credits: 4,
        category: "Skill Enhancement",
        description: "Entrepreneurial mindset, business plan formulation, startup ecosystem, Angel investors, Venture Capital, and government schemes (Startup India, MUDRA).",
        chapters: [
          {
            id: "bcos185-ch1",
            number: 1,
            title: "Entrepreneurial Process, Business Plan & Startup Funding",
            summary: "Idea generation, feasibility analysis, Business Plan sections, Bootstrapping, Angel Investors, Venture Capital, and MUDRA loans.",
            topics: [
              {
                id: "bcos185-t1",
                title: "Business Plan Formulation & Startup Financing Stages",
                content: `1. Components of a Professional Business Plan:
- Executive Summary (Vision, Problem, Solution).
- Industry & Market Analysis (TAM, SAM, SOM, Competitor analysis).
- Marketing & Sales Strategy (Customer acquisition cost, channels).
- Operational & Management Plan (Core team capabilities).
- Financial Projections (3-5 year cash flow, P&L, Break-Even).

2. Startup Funding Lifecycle:
- Bootstrapping / FFF: Self-funding and capital from Friends, Family, and Founders.
- Seed Stage / Angel Investors: High-net-worth individuals investing early personal capital.
- Early Stage (Series A / B): Venture Capital (VC) institutional funding for product-market fit.
- Growth Stage (Series C+): PE funds, pre-IPO expansion, and Public Listing (IPO).`,
                mnemonic: "B-S-A-V (Bootstrapping, Seed capital, Angel investor, Venture capital)",
                example: "A D2C healthy beverage startup begins with ₹5 Lakhs founder savings (Bootstrapping), raises ₹50 Lakhs from Angel investors for product trials, and later secures ₹10 Crores Series A from a VC firm.",
                keyFormulas: [
                  "Burn Rate = Monthly Cash Outflows - Monthly Cash Inflows",
                  "Runway (Months) = Current Cash Balance / Monthly Burn Rate"
                ],
                quiz: [
                  {
                    id: "q185-1",
                    question: "High-net-worth individuals who invest their personal wealth into early-stage seed startups in exchange for equity are known as:",
                    options: [
                      "Commercial Bankers",
                      "Angel Investors",
                      "Venture Debt Providers",
                      "Underwriters"
                    ],
                    correctIndex: 1,
                    explanation: "Angel Investors are affluent individuals who provide initial seed capital to startups during high-risk early stages."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq185-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "What is a Business Plan? Detail the key components that should be included in an investor-ready business plan.",
                    modelAnswer: `1. DEFINITION OF A BUSINESS PLAN
A Business Plan is a written roadmap describing an enterprise's operational goals, target market, competitive advantages, and financial forecasts.

2. CORE COMPONENTS
- Executive Summary: Elevator pitch of business proposition.
- Market Analysis: Target customer demographics and market size.
- Product/Service Differentiation: Unique Selling Proposition (USP).
- Marketing & Sales Plan: Pricing models and distribution.
- Financial Proforma: 3-5 year cash flow, Balance Sheet, and Break-Even point.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // =========================================================================
  // SEMESTER 6
  // =========================================================================
  {
    semId: 6,
    semTitle: "Semester 6",
    description: "Strategic Management Accounting, Corporate Secretarial Practice & Salesmanship",
    subjects: [
      {
        code: "BCOE-142",
        title: "Management Accounting",
        credits: 6,
        category: "Core Elective",
        description: "Role of management accounting, Financial Statement Analysis, Ratio Analysis, Cash Flow Statement (AS-3), Budgetary Control, and Standard Costing.",
        chapters: [
          {
            id: "bcoe142-ch1",
            number: 1,
            title: "Financial Statement Analysis & Ratio Analysis",
            summary: "Liquidity ratios (Current, Quick), Solvency ratios (Debt-Equity), Profitability ratios (Gross Profit, Net Profit, ROE), and Activity turnover ratios.",
            topics: [
              {
                id: "bcoe142-t1",
                title: "Financial Ratio Analysis (Liquidity, Solvency & Profitability)",
                content: `Financial Ratio Analysis evaluates corporate performance, operational efficiency, and financial solvency.

1. Liquidity Ratios (Short-term Solvency):
- Current Ratio = Current Assets / Current Liabilities (Ideal benchmark = 2:1)
- Quick / Acid-Test Ratio = Quick Assets / Current Liabilities (Ideal benchmark = 1:1)
  [Quick Assets = Current Assets - (Inventories + Prepaid Expenses)]

2. Solvency Ratios (Long-term Solvency):
- Debt-to-Equity Ratio = Total Long-Term Debt / Shareholders' Funds (Ideal benchmark = 2:1 or lower)
- Interest Coverage Ratio = EBIT / Interest Charges

3. Profitability & Efficiency Ratios:
- Return on Capital Employed (ROCE) = (EBIT / Capital Employed) * 100
- Inventory Turnover Ratio = Cost of Goods Sold / Average Inventory`,
                mnemonic: "L-S-A-P (Liquidity current/quick, Solvency debt-equity, Activity turnover, Profitability ROCE)",
                example: "Current Assets = ₹4,00,000 (Inventory = ₹1,50,000, Cash/Debtors = ₹2,50,000), Current Liabilities = ₹2,00,000. Current Ratio = 2:1; Quick Ratio = 2,50,000/2,00,000 = 1.25:1.",
                keyFormulas: [
                  "Current Ratio = Current Assets / Current Liabilities",
                  "Quick Ratio = (Current Assets - Inventory - Prepaid Expenses) / Current Liabilities",
                  "Debt-Equity Ratio = Long-Term Debt / Net Worth (Equity Capital + Reserves)",
                  "Interest Coverage Ratio = EBIT / Interest",
                  "Inventory Turnover = Cost of Goods Sold / Average Inventory",
                  "ROCE = (Operating Profit EBIT / Capital Employed) * 100"
                ],
                quiz: [
                  {
                    id: "q142-1",
                    question: "If Current Assets = ₹6,00,000, Inventory = ₹1,50,000, Prepaid Insurance = ₹50,000, and Current Liabilities = ₹2,00,000, what is the Quick Ratio?",
                    options: [
                      "3:1",
                      "2:1",
                      "2.5:1",
                      "1.5:1"
                    ],
                    correctIndex: 1,
                    explanation: "Quick Assets = Current Assets - Inventory - Prepaid = ₹6,00,000 - ₹1,50,000 - ₹50,000 = ₹4,00,000. Quick Ratio = ₹4,00,000 / ₹2,00,000 = 2:1."
                  },
                  {
                    id: "q142-2",
                    question: "An Interest Coverage Ratio of 8 times signifies:",
                    options: [
                      "The firm cannot pay its interest liabilities",
                      "The operating profit EBIT is 8 times the annual interest obligation, indicating high safety",
                      "The company has too much debt",
                      "Shareholders will receive 8% dividend"
                    ],
                    correctIndex: 1,
                    explanation: "Interest Coverage Ratio (EBIT/Interest) of 8x demonstrates strong operating earnings cushion to service debt obligations."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq142-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Explain the utility and limitations of Ratio Analysis as a tool for financial management and executive decision-making.",
                    modelAnswer: `1. UTILITY OF RATIO ANALYSIS
- Inter-firm & Intra-firm Benchmarking: Enables comparison across competitors and over longitudinal time series.
- Credit Appraisal: Lenders evaluate Current Ratio, Quick Ratio, and Debt-Equity to gauge default risk.
- Efficiency & Profitability Tracking: Uncovers working capital bottlenecks via turnover ratios.

2. INHERENT LIMITATIONS
- Ignores Price Level Changes / Inflation: Historical accounting data distorts real values.
- Window Dressing: Management can manipulate year-end balance sheets to show higher liquidity.
- Differences in Accounting Policies: Differing depreciation (SLM vs WDV) or inventory methods (FIFO vs Weighted Average) impair direct comparability.`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoe142-ch2",
            number: 2,
            title: "Cash Flow Statement (AS-3) & Budgetary Control",
            summary: "Preparation of Cash Flow Statement under AS-3 (Operating, Investing, Financing activities) and Budgetary Control (Cash budget, Flexible budget).",
            topics: [
              {
                id: "bcoe142-t2",
                title: "Cash Flow Statement (AS-3 / Ind AS 7)",
                content: `A Cash Flow Statement explains the net change in cash and cash equivalents over an accounting period categorized into three distinct activities (AS-3):

1. Operating Activities (CFO):
- Principal revenue-generating operations.
- Net Profit before tax adjusted for non-cash expenses (Depreciation, Amortization) and working capital changes (Current Assets & Current Liabilities).

2. Investing Activities (CFI):
- Acquisition and disposal of long-term fixed assets, investments, and capital property.
- Cash Outflows: Purchase of Machinery, Building, Shares in other companies.
- Cash Inflows: Sale proceeds of fixed assets, Interest/Dividends received.

3. Financing Activities (CFF):
- Transactions altering equity capital structure and borrowings.
- Cash Inflows: Issue of shares, debentures, bank loan proceeds.
- Cash Outflows: Redemption of preference shares/debentures, dividend paid, interest paid.`,
                mnemonic: "O-I-F (Operating day-to-day, Investing fixed assets, Financing shares & debt)",
                example: "A company reports Net Profit ₹5,00,000. Depreciation ₹80,000 is added back in Operating; Purchase of Machine ₹2,00,000 is Outflow in Investing; Issue of Shares ₹3,00,000 is Inflow in Financing.",
                keyFormulas: [
                  "Net Increase in Cash = Cash from Operations + Cash from Investing + Cash from Financing",
                  "Closing Cash = Opening Cash + Net Change in Cash and Cash Equivalents",
                  "CFO = Net Profit before tax + Non-Cash Exp +- Working Capital Adjustments - Tax Paid"
                ],
                quiz: [
                  {
                    id: "q142-3",
                    question: "Under AS-3 (Cash Flow Statement), dividend paid by a non-financial corporate enterprise is classified under:",
                    options: [
                      "Operating Activities",
                      "Investing Activities",
                      "Financing Activities",
                      "Extraordinary Activities"
                    ],
                    correctIndex: 2,
                    explanation: "Dividend paid represents a return to capital providers and is classified under Financing Activities."
                  },
                  {
                    id: "q142-4",
                    question: "Which of the following is treated as a Cash Inflow under Investing Activities?",
                    options: [
                      "Proceeds from issue of Equity Shares",
                      "Proceeds from sale of obsolete Plant & Machinery",
                      "Cash sales to customers",
                      "Recovery of bad debts"
                    ],
                    correctIndex: 1,
                    explanation: "Sale proceeds of fixed capital assets represent a positive cash inflow under Investing Activities."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq142-2",
                    year: "June 2023",
                    marks: 20,
                    question: "Explain the structure of a Cash Flow Statement as per AS-3. Distinguish clearly between Operating, Investing, and Financing activities.",
                    modelAnswer: `1. STATUTORY MANDATE & OBJECTIVE
Under AS-3 (and Companies Act 2013), the Cash Flow Statement reports changes in Cash and Cash Equivalents during an accounting period.

2. THREE-TIER CLASSIFICATION
- A. Operating Activities: Direct cash generation from core business (Customer receipts minus supplier payments, adjusted for non-cash depreciation and working capital movements).
- B. Investing Activities: Capital expenditure and investment disposal (Purchases/Sales of Property, Plant, Equipment, non-current securities, interest/dividend received).
- C. Financing Activities: Capital structure changes (Issuance of shares/bonds, long-term loan disbursements, repayment of borrowings, dividends paid).

3. CASH EQUIVALENTS CRITERIA
Short-term, highly liquid investments readily convertible into known amounts of cash with insignificant risk of value fluctuation (e.g., 90-day Treasury Bills).`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOE-144",
        title: "Office Management and Secretarial Practice",
        credits: 6,
        category: "Core Elective",
        description: "Modern office layout, records management, filing systems, secretarial duties, drafting notice, agenda, resolutions, and minutes of meetings.",
        chapters: [
          {
            id: "bcoe144-ch1",
            number: 1,
            title: "Secretarial Duties, Notice, Agenda & Minutes of Meetings",
            summary: "Types of company meetings (AGM, EGM, Board Meetings), statutory notice requirements, drafting resolutions, and meeting minutes.",
            topics: [
              {
                id: "bcoe144-t1",
                title: "Annual General Meeting (AGM) & Secretarial Documentation",
                content: `Company secretaries ensure strict legal compliance under the Companies Act 2013 for all shareholder and board meetings.

1. Annual General Meeting (AGM - Section 96):
- Mandatory once every calendar year.
- Gap between two AGMs cannot exceed 15 months.
- Held within 6 months from close of financial year.
- Notice period: At least 21 clear days' written/electronic notice.

2. Meeting Documentation:
- Notice: Formal invitation specifying date, time, venue, and business to be transacted.
- Agenda: Sequenced list of topics for discussion.
- Ordinary Resolution: Simple majority (> 50% votes cast).
- Special Resolution: 3/4th majority (>= 75% votes cast; e.g. altering MoA/AoA).
- Minutes: Official legal record of discussions and resolutions passed, signed by Chairman.`,
                mnemonic: "N-A-Q-R-M (Notice 21 days, Agenda list, Quorum presence, Resolution vote, Minutes record)",
                example: "To change the registered name of a company, the Company Secretary drafts a Notice with Explanatory Statement for an EGM to pass a Special Resolution (75% majority).",
                keyFormulas: [
                  "AGM Gap = Maximum 15 months between two consecutive AGMs",
                  "Notice Period = 21 Clear Days (excluding day of service and day of meeting)",
                  "Special Resolution = 75% or more affirmative votes"
                ],
                quiz: [
                  {
                    id: "q144-1",
                    question: "Under the Companies Act 2013, what is the statutory minimum notice required for calling an Annual General Meeting (AGM)?",
                    options: [
                      "7 days",
                      "14 days",
                      "21 clear days",
                      "30 days"
                    ],
                    correctIndex: 2,
                    explanation: "Section 101 mandates at least 21 clear days' notice in writing or electronic mode for convening an AGM."
                  },
                  {
                    id: "q144-2",
                    question: "A Special Resolution in a company general meeting requires a voting majority of:",
                    options: [
                      "Simple majority (>50%)",
                      "Two-thirds majority (66.6%)",
                      "Three-fourths majority (75% or more)",
                      "Unanimous approval (100%)"
                    ],
                    correctIndex: 2,
                    explanation: "Under Section 114(2), a Special Resolution requires the votes cast in favor to be at least three times the votes cast against (i.e. 75%+)."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq144-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Explain the statutory provisions regarding convening an Annual General Meeting (AGM) under Companies Act 2013. Draft a sample Notice of AGM.",
                    modelAnswer: `1. STATUTORY PROVISIONS (SECTION 96)
- Frequency: One AGM each calendar year; max 15 months between two AGMs.
- Time Limit: Within 6 months from close of financial year (by 30th Sept for FY ending 31st March).
- Notice: Minimum 21 clear days' notice to all members, auditors, and directors.

2. SAMPLE AGM NOTICE DRAFT
**XYZ COMMERCIAL LIMITED**
Registered Office: 123 Connaught Place, New Delhi - 110001
CIN: L12345DL2020PLC123456

**NOTICE OF THE 5TH ANNUAL GENERAL MEETING**
NOTICE is hereby given that the 5th AGM of XYZ Commercial Limited will be held on Friday, 29th September 2023 at 11:00 AM at the Registered Office to transact the following:

**ORDINARY BUSINESS:**
1. To receive, consider, and adopt Audited Financial Statements for FY ended 31st March 2023.
2. To declare a final dividend of ₹2 per equity share.
3. To re-appoint retiring directors by rotation.
4. To appoint Statutory Auditors and fix remuneration.

By Order of the Board
Sd/- Company Secretary (ACS 12345)`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOS-186",
        title: "Personal Selling and Salesmanship",
        credits: 4,
        category: "Skill Enhancement",
        description: "Personal selling process, prospecting, sales presentation, AIDA model, handling sales objections, closing techniques, and after-sales service.",
        chapters: [
          {
            id: "bcos186-ch1",
            number: 1,
            title: "Personal Selling Process & Sales Psychology (AIDA Model)",
            summary: "Prospecting, Pre-approach, Approach, AIDA formula (Attention, Interest, Desire, Action), Overcoming Objections, and Closing the Sale.",
            topics: [
              {
                id: "bcos186-t1",
                title: "The Selling Process & AIDA Formula in Salesmanship",
                content: `Personal selling is an interactive, face-to-face communication process aimed at identifying customer needs and matching them with commercial solutions.

1. Seven Steps of the Personal Selling Process:
1. Prospecting & Qualifying: Identifying potential buyers with purchasing authority.
2. Pre-approach: Researching prospect's background, needs, and preferences.
3. Approach: Initial contact, establishing rapport and professional credibility.
4. Presentation & Demonstration (AIDA Model):
   - Attention: Capturing curiosity.
   - Interest: Explaining benefits and features.
   - Desire: Building emotional conviction and demonstration.
   - Action: Prompting the decision to purchase.
5. Handling Objections: Answering price, quality, and delivery concerns positively.
6. Closing the Sale: Asking for the formal purchase order.
7. Follow-up: Ensuring customer satisfaction, prompt delivery, and repeat orders.`,
                mnemonic: "A-I-D-A (Attention, Interest, Desire, Action in sales conversion)",
                example: "A business software salesman demonstrates automated inventory analytics to a retail manager, handles budget objections by showcasing a 4-month ROI payback, and closes with a flexible quarterly payment plan.",
                keyFormulas: [
                  "AIDA Model = Attention -> Interest -> Desire -> Action",
                  "Sales Conversion Ratio = Closed Sales / Total Qualified Prospects"
                ],
                quiz: [
                  {
                    id: "q186-1",
                    question: "In the personal selling process, the acronym AIDA stands for:",
                    options: [
                      "Awareness, Inquiry, Decision, Agreement",
                      "Attention, Interest, Desire, Action",
                      "Approach, Introduction, Demonstration, Approval",
                      "Attitude, Incentive, Demand, Acquisition"
                    ],
                    correctIndex: 1,
                    explanation: "The classical AIDA model represents the cognitive stages a buyer moves through: Attention -> Interest -> Desire -> Action."
                  },
                  {
                    id: "q186-2",
                    question: "The step in the personal selling process that involves researching a potential client's needs before the first meeting is termed:",
                    options: [
                      "Prospecting",
                      "Pre-approach",
                      "Demonstration",
                      "Trial Close"
                    ],
                    correctIndex: 1,
                    explanation: "Pre-approach is the preparatory phase where the salesperson gathers intelligence regarding the prospect's requirements, budget, and decision-makers."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq186-1",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Detail the steps involved in the Personal Selling Process. Explain various techniques used to overcome customer objections.",
                    modelAnswer: `1. STEPS IN PERSONAL SELLING
- 1. Prospecting: Generating qualified customer leads.
- 2. Pre-approach & Approach: Preparation and first rapport.
- 3. Presentation (AIDA): Product demonstration emphasizing benefits over features.
- 4. Handling Objections: Validating concerns without arguing.
- 5. Closing: Asking for the sale (Assumptive close, Alternative choice close).
- 6. Follow-up: Post-sales support ensuring customer loyalty.

2. TECHNIQUES TO OVERCOME OBJECTIONS
- Boomerang Technique: Turning an objection into a reason to buy (e.g. 'Because it is premium quality, it lasts twice as long').
- Direct Denial: Politely correcting factual misunderstandings.
- Compensation / Superior Feature Method: Admitting a minor drawback while showcasing major offsetting advantages.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
