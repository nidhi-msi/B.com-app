export const SYLLABUS_DATA = [
  {
    semId: 1,
    semTitle: "Semester 1",
    description: "Foundational Accounting & Business Management Principles",
    subjects: [
      {
        code: "BCOC-131",
        title: "Financial Accounting",
        credits: 6,
        category: "Core Course",
        description: "Covers fundamental accounting concepts, trial balance, depreciation, final accounts, non-profit organization accounts, and accounting standards.",
        chapters: [
          {
            id: "bcoc131-ch1",
            number: 1,
            title: "Theoretical Framework & Accounting Standards",
            summary: "Understand the core concepts, conventions, dual aspect rule, AS-1, AS-2, AS-6, and AS-10.",
            topics: [
              {
                id: "t1-1",
                title: "Accounting Concepts & Conventions",
                content: `Accounting rests on foundational principles that ensure uniformity across financial statements worldwide.

Key Concepts to Remember:
1. Business Entity Concept: Business is treated as separate from its owners. Personal expenses of the proprietor are never recorded as business expenses.
2. Money Measurement Concept: Only transactions expressible in monetary terms are recorded (e.g., employee morale is not recorded).
3. Going Concern Concept: Assumes the business will continue operations indefinitely without liquidation in the foreseeable future.
4. Dual Aspect Concept (Accounting Equation): Every debit has an equal credit. 
   Formula: Assets = Liabilities + Capital`,
                mnemonic: "B-M-G-D (Big Money Grows Daily -> Business Entity, Money Measurement, Going Concern, Dual Aspect)",
                example: "If Mr. Sharma invests ₹50,000 in cash into his shop, Cash (Asset) increases by ₹50,000 and Capital (Liability) increases by ₹50,000.",
                keyFormulas: [
                  "Assets = Liabilities + Capital",
                  "Net Profit = Revenues - Expenses",
                  "Capital = Net Assets = Total Assets - External Liabilities"
                ],
                quiz: [
                  {
                    id: "q1",
                    question: "Which accounting concept mandates that personal transactions of the owner should not be mixed with business transactions?",
                    options: [
                      "Money Measurement Concept",
                      "Business Entity Concept",
                      "Going Concern Concept",
                      "Matching Concept"
                    ],
                    correctIndex: 1,
                    explanation: "The Business Entity Concept states that a business is a distinct legal entity separate from its owner. Hence personal transactions are recorded separately under drawings."
                  },
                  {
                    id: "q2",
                    question: "According to the Accounting Equation, if Total Assets = ₹5,00,000 and Capital = ₹3,00,000, what are the External Liabilities?",
                    options: [
                      "₹8,00,000",
                      "₹2,00,000",
                      "₹5,00,000",
                      "₹1,50,000"
                    ],
                    correctIndex: 1,
                    explanation: "Assets = Liabilities + Capital => Liabilities = Assets - Capital = ₹5,00,000 - ₹3,00,000 = ₹2,00,000."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq1",
                    year: "Dec 2023",
                    marks: 5,
                    question: "Explain the 'Going Concern' concept and its significance in valuation of fixed assets.",
                    modelAnswer: `1. DEFINITION
The Going Concern Concept assumes that an enterprise will continue its operations for the foreseeable future and has neither the intention nor the necessity of liquidation.

2. SIGNIFICANCE IN VALUATION
- Fixed assets (e.g. Plant & Machinery) are valued at Historical Cost less Depreciation rather than current market realization value.
- Prepaid expenses and deferred revenues are carried forward as assets because future benefit is anticipated.`
                  },
                  {
                    id: "pyq2",
                    year: "June 2023",
                    marks: 10,
                    question: "Discuss the fundamental accounting concepts of Matching and Revenue Recognition with appropriate examples.",
                    modelAnswer: `1. REVENUE RECOGNITION CONCEPT
Revenue is recognized when earned, irrespective of whether cash is received (Accrual Basis). 
Example: Goods sold on credit in March 2023 with payment received in April 2023 are recognized as revenue for FY 2022-23.

2. MATCHING CONCEPT
Expenses incurred to earn revenue in a specific accounting period must be matched against that revenue in the same period.
Example: Sales commission paid in April for sales done in March must be accounted for in March.`
                  }
                ]
              },
              {
                id: "t1-2",
                title: "Accounting Standards (AS-1, AS-6, AS-10)",
                content: `Accounting Standards are written policy documents issued by expert accounting bodies (such as ICAI in India) covering measurement, valuation, presentation, and disclosure.

Key Standards for IGNOU B.Com:
• AS-1: Disclosure of Accounting Policies (Mandates consistency, conservatism, and substance over form).
• AS-6 / AS-16: Depreciation Accounting (Depreciable amount allocated over estimated useful life).
• AS-10 (Property, Plant & Equipment): PPE recorded at cost including import duties, non-refundable taxes, and directly attributable costs to bring the asset to working condition.`,
                mnemonic: "D-D-P (Disclosure, Depreciation, Property -> AS-1, AS-6, AS-10)",
                example: "When purchasing machinery worth ₹1,00,000 with installation charges of ₹10,00, the capital cost recorded under AS-10 is ₹1,10,000.",
                keyFormulas: [
                  "Depreciable Amount = Cost of Asset - Estimated Residual/Scrap Value",
                  "Annual Depreciation (SLM) = (Cost - Scrap Value) / Useful Life in Years"
                ],
                quiz: [
                  {
                    id: "q3",
                    question: "Under AS-10, installation costs incurred to make a machine operational should be:",
                    options: [
                      "Debited to Profit & Loss Account as revenue expense",
                      "Added to the cost of the machine (Capitalized)",
                      "Debited to Miscellaneous Expenditure",
                      "Ignored completely"
                    ],
                    correctIndex: 1,
                    explanation: "AS-10 requires all directly attributable costs incurred to bring an asset to its location and working condition to be capitalized."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq3",
                    year: "Dec 2022",
                    marks: 10,
                    question: "What are Accounting Standards? Explain the objectives and mandatory nature of Accounting Standards in India.",
                    modelAnswer: `1. INTRODUCTION
Accounting Standards (AS) are standardized guidelines issued by ICAI under Section 133 of Companies Act 2013 to harmonize accounting policies across enterprises.

2. OBJECTIVES
• Eliminate variations in financial statement preparation.
• Enhance comparability across companies and industries.
• Ensure full disclosure and transparency for investors and statutory authorities.`
                  }
                ]
              }
            ]
          },
          {
            id: "bcoc131-ch2",
            number: 2,
            title: "Final Accounts of Sole Proprietorship & NPO",
            summary: "Preparation of Trading Account, Profit & Loss Account, Balance Sheet with adjustments, and Receipts & Payments / Income & Expenditure accounts.",
            topics: [
              {
                id: "t2-1",
                title: "Adjustments in Final Accounts",
                content: `Final accounts present the financial performance (Profit & Loss) and financial position (Balance Sheet) at the end of an accounting period.

Crucial Year-End Adjustments:
1. Closing Stock: Valued at Cost Price or Net Realizable Value (NRV), whichever is lower (Prudence Concept).
2. Outstanding Expenses: Expenses due but not paid. Added to respective expense in P&L, shown under Current Liabilities in Balance Sheet.
3. Prepaid Expenses: Expenses paid in advance. Deducted from expense in P&L, shown under Current Assets in Balance Sheet.
4. Provision for Bad & Doubtful Debts: Calculated on Sundry Debtors after deducting new bad debts.`,
                mnemonic: "C-O-P-D (Closing stock lower cost/NRV, Outstanding add liability, Prepaid deduct asset, Debtors provision deduct)",
                example: "Salaries paid ₹50,000, but ₹5,000 for March is unpaid. Total Salary expense in P&L = ₹55,000. Balance sheet liability = ₹5,000.",
                keyFormulas: [
                  "Cost of Goods Sold (COGS) = Opening Stock + Net Purchases + Direct Expenses - Closing Stock",
                  "Gross Profit = Net Sales - COGS",
                  "Net Provision for Doubtful Debts = (Sundry Debtors - New Bad Debts) × % Provision"
                ],
                quiz: [
                  {
                    id: "q4",
                    question: "Closing Stock is valued at Cost Price or Market Price whichever is lower due to which principle?",
                    options: [
                      "Matching Principle",
                      "Principle of Prudence / Conservatism",
                      "Dual Aspect Principle",
                      "Consistency Principle"
                    ],
                    correctIndex: 1,
                    explanation: "The Prudence (Conservatism) principle mandates anticipating all possible losses but not anticipating prospective profits."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq4",
                    year: "June 2023",
                    marks: 20,
                    question: "Prepare Trading and Profit & Loss Account and Balance Sheet from given Trial Balance with adjustments for Bad Debts, Depreciation, and Closing Stock.",
                    modelAnswer: `1. STEP-BY-STEP SOLUTION ROADMAP
• Step 1: Calculate COGS = Opening Stock (₹40,000) + Net Purchases (₹1,20,000) + Carriage Inward (₹5,000) - Closing Stock (₹30,000) = ₹1,35,000.
• Step 2: Gross Profit = Net Sales (₹2,50,000) - COGS (₹1,35,000) = ₹1,15,000.
• Step 3: P&L Account: Debit Depreciation (10% on ₹1,00,000 = ₹10,000) + New Provision for Doubtful Debts (5% on ₹50,000 = ₹2,500).
• Step 4: Balance Sheet Total Tallying.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOC-132",
        title: "Business Organization & Management",
        credits: 6,
        category: "Core Course",
        description: "Explores forms of business organizations, management functions (planning, organizing, staffing, directing, controlling), leadership styles, and business ethics.",
        chapters: [
          {
            id: "bcoc132-ch1",
            number: 1,
            title: "Forms of Business Organizations",
            summary: "Detailed comparison of Sole Proprietorship, Partnership, Joint Hindu Family (HUF), Cooperative Societies, and Joint Stock Company.",
            topics: [
              {
                id: "t132-1",
                title: "Sole Proprietorship vs Partnership vs Company",
                content: `Choosing the right organizational form depends on capital requirements, risk appetite, control, and continuity.

1. Sole Proprietorship: One owner, unlimited liability, direct control, quick decision making.
2. Partnership (Indian Partnership Act 1932): Minimum 2, maximum 50 members. Unlimited joint liability, mutual agency principle.
3. Joint Stock Company (Companies Act 2013): Separate legal entity, limited liability, perpetual succession, common seal, professional management.`,
                mnemonic: "S-P-C (Sole = Unlimited single, Partnership = Mutual agency, Company = Perpetual entity)",
                example: "TATA Motors Ltd continues to exist even if shareholders change daily, because of Perpetual Succession.",
                keyFormulas: [
                  "Partnership Limit: Min 2, Max 50 (Rule 10 of Companies Miscellaneous Rules 2014)",
                  "Private Company Limit: Min 2, Max 200 members",
                  "Public Company Limit: Min 7, Max No Limit"
                ],
                quiz: [
                  {
                    id: "q5",
                    question: "Which feature of a Joint Stock Company ensures its existence is not affected by the death or insolvency of any member?",
                    options: [
                      "Limited Liability",
                      "Perpetual Succession",
                      "Common Seal",
                      "Mutual Agency"
                    ],
                    correctIndex: 1,
                    explanation: "Perpetual Succession means a company is created by law and can only be dissolved by law; death or insolvency of shareholders does not affect its existence."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq5",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Define a Joint Stock Company. Discuss its key features and advantages over a Partnership firm.",
                    modelAnswer: `1. DEFINITION
As per Section 2(20) of Companies Act 2013, a company means a company incorporated under this Act or under any previous company law.

2. KEY ADVANTAGES OVER PARTNERSHIP
• Limited Liability: Shareholders are liable only up to the unpaid amount on shares.
• Perpetual Succession: Uninterrupted continuity.
• Large Capital Raising Capacity through public issue of shares/debentures.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    semId: 2,
    semTitle: "Semester 2",
    description: "Legal Framework & Company Regulations",
    subjects: [
      {
        code: "BCOC-133",
        title: "Business Law",
        credits: 6,
        category: "Core Course",
        description: "Indian Contract Act 1872, Sale of Goods Act 1930, Negotiable Instruments Act 1881, and Partnership laws.",
        chapters: [
          {
            id: "bcoc133-ch1",
            number: 1,
            title: "Indian Contract Act, 1872 - Essentials of Valid Contract",
            summary: "Offer, acceptance, consideration, capacity, free consent, legality of object, and void agreements.",
            topics: [
              {
                id: "t133-1",
                title: "Essentials of a Valid Contract (Section 10)",
                content: `An agreement enforceable by law is a contract (Section 2(h)).

Essentials under Section 10:
1. Offer & Acceptance: Proper proposal and unconditional acceptance.
2. Intention to Create Legal Relationship: Social/domestic agreements (Balfour v. Balfour) are not contracts.
3. Lawful Consideration: Quid Pro Quo (something in return) as defined under Sec 2(d).
4. Capacity to Contract (Sec 11): Person must be major, sound mind, not disqualified by law.
5. Free Consent (Sec 14): Free from Coercion (Sec 15), Undue Influence (Sec 16), Fraud (Sec 17), Misrepresentation (Sec 18), Mistake (Sec 20).`,
                mnemonic: "O-C-C-F-L (Offer, Consideration, Capacity, Free consent, Lawful object)",
                example: "A husband promised to pay monthly allowance to his wife (Balfour v. Balfour). It was held as a domestic agreement without legal intent, hence not a valid contract.",
                keyFormulas: [
                  "Contract = Agreement + Enforceability at Law",
                  "Agreement = Offer + Acceptance"
                ],
                quiz: [
                  {
                    id: "q6",
                    question: "Which landmark case established that domestic agreements between husband and wife lack intention to create legal relationships?",
                    options: [
                      "Mohori Bibee v. Dharmodas Ghose",
                      "Balfour v. Balfour",
                      "Carlill v. Carbolic Smoke Ball Co.",
                      "Lalman Shukla v. Gauri Dutt"
                    ],
                    correctIndex: 1,
                    explanation: "Balfour v. Balfour (1919) established that social/domestic promises do not intend legal consequences and are not enforceable contracts."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq6",
                    year: "Dec 2023",
                    marks: 20,
                    question: "'All contracts are agreements, but all agreements are not contracts.' Explain this statement with reference to Section 10 of Indian Contract Act 1872.",
                    modelAnswer: `1. EXPLANATION OF STATEMENT
• An agreement is created when an offer is accepted (Agreement = Offer + Acceptance).
• However, an agreement becomes a contract only when it fulfills all conditions under Section 10 (Legal intention, free consent, capacity, lawful consideration).
• Domestic agreements (Balfour v Balfour) or illegal agreements are agreements but NOT contracts.`
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        code: "BCOC-134",
        title: "Company Law",
        credits: 6,
        category: "Core Course",
        description: "Companies Act 2013 provisions regarding incorporation, Memorandum & Articles of Association, Prospectus, Directors, and Winding Up.",
        chapters: [
          {
            id: "bcoc134-ch1",
            number: 1,
            title: "Memorandum of Association (MOA) & Articles of Association (AOA)",
            summary: "Charter documents of a company, clauses of MOA, Doctrine of Ultravires, Constructive Notice, and Indoor Management.",
            topics: [
              {
                id: "t134-1",
                title: "Doctrine of Ultra Vires & Indoor Management",
                content: `1. Memorandum of Association (MOA): The constitution of the company containing 6 clauses (Name, Registered Office, Object, Liability, Capital, Association).
2. Doctrine of Ultra Vires: Any act beyond the Object Clause of MOA is ultra vires (beyond powers) and null & void ab initio. It cannot be ratified even by 100% shareholders (Ashbury Railway Carriage Co. v. Riche).
3. Doctrine of Indoor Management (Turquand's Rule): Outsiders dealing with a company are entitled to assume that internal regulations have been complied with.`,
                mnemonic: "MOA = Constitution, Ultra Vires = Beyond power void, Turquand = Protection for outsiders",
                example: "If a company whose object clause permits only manufacturing steel enters into a contract to run a cinema theatre, the contract is ultra vires and completely void.",
                keyFormulas: [
                  "MOA Clauses: Name + Office + Object + Liability + Capital + Subscription",
                  "Ultra Vires Act = Void Ab Initio (Cannot be ratified)"
                ],
                quiz: [
                  {
                    id: "q7",
                    question: "The Doctrine of Indoor Management provides protection to:",
                    options: [
                      "Directors of the company",
                      "Outsiders dealing with the company in good faith",
                      "Promoters",
                      "Shareholders"
                    ],
                    correctIndex: 1,
                    explanation: "Royal British Bank v Turquand established that third parties/outsiders dealing with a company in good faith need not inquire into internal management compliance."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq7",
                    year: "June 2023",
                    marks: 10,
                    question: "Distinguish between Memorandum of Association (MOA) and Articles of Association (AOA). Explain the Doctrine of Ultra Vires.",
                    modelAnswer: `1. COMPARATIVE MATRIX
MOA is the supreme charter defining external boundaries and objectives. AOA contains internal rules and regulations for governance.

2. DOCTRINE OF ULTRA VIRES
Any act beyond MOA object clause is ultra vires, void ab initio, and creates no legal rights against the company.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    semId: 3,
    semTitle: "Semester 3",
    description: "Taxation Framework & Business Statistics",
    subjects: [
      {
        code: "BCOC-136",
        title: "Income Tax Law & Practice",
        credits: 6,
        category: "Core Course",
        description: "Basic concepts, residential status, heads of income (Salary, House Property, PGBP, Capital Gains, Other Sources), deductions under Sec 80C to 80U, and e-filing.",
        chapters: [
          {
            id: "bcoc136-ch1",
            number: 1,
            title: "Residential Status & Scope of Total Income (Sec 5 & 6)",
            summary: "Rules to determine Resident & Ordinarily Resident (ROR), Resident but Not Ordinarily Resident (RNOR), and Non-Resident (NR).",
            topics: [
              {
                id: "t136-1",
                title: "Basic & Additional Conditions for Residential Status of Individual",
                content: `Tax liability in India depends on Residential Status, not Citizenship!

Basic Conditions (Section 6(1)): Must satisfy AT LEAST ONE:
1. Stay in India during relevant Previous Year >= 182 days. OR
2. Stay in India during relevant Previous Year >= 60 days AND Stay in India during 4 preceding previous years >= 365 days.

Additional Conditions (Section 6(6)): Must satisfy BOTH to be ROR:
1. Resident in India in at least 2 out of 10 preceding previous years. AND
2. Stay in India during 7 preceding previous years >= 730 days.

Classification:
• ROR: Satisfies at least 1 Basic + BOTH Additional conditions. Global income taxable!
• RNOR: Satisfies at least 1 Basic + ZERO or ONLY ONE Additional condition.
• NR: Fails BOTH Basic conditions.`,
                mnemonic: "182 Days OR (60 + 365 in 4 yrs) -> Basic. (2/10 Res + 730 days in 7 yrs) -> Additional ROR",
                example: "Mr. John, a foreign national, stayed in India for 190 days in FY 2023-24. Since 190 >= 182, he satisfies Basic Condition 1 and becomes a Resident.",
                keyFormulas: [
                  "Basic 1: Stay >= 182 Days in Prev Year",
                  "Basic 2: Stay >= 60 Days in Prev Year + Stay >= 365 Days in 4 Preceding Years",
                  "ROR = Basic (Any 1) + Additional 1 AND Additional 2"
                ],
                quiz: [
                  {
                    id: "q8",
                    question: "An individual who stays in India for 185 days during the Previous Year is classified as:",
                    options: [
                      "Non-Resident (NR)",
                      "Resident in India",
                      "Deemed Citizen",
                      "Person of Indian Origin"
                    ],
                    correctIndex: 1,
                    explanation: "Since the stay is 185 days (which is >= 182 days), the individual satisfies the first basic condition under Section 6(1) and is Resident."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq8",
                    year: "Dec 2023",
                    marks: 10,
                    question: "State the rules for determining the residential status of an individual under Section 6 of Income Tax Act 1961.",
                    modelAnswer: `1. BASIC CONDITIONS (SEC 6(1))
An individual is resident if stay in India is >= 182 days OR >= 60 days in PY + 365 days in 4 preceding PYs.

2. ADDITIONAL CONDITIONS (SEC 6(6))
To become Resident & Ordinarily Resident (ROR), individual must be resident in 2 out of 10 preceding years AND stay >= 730 days in 7 preceding years.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    semId: 4,
    semTitle: "Semester 4",
    description: "Advanced Accounting & Cost Analysis",
    subjects: [
      {
        code: "BCOC-137",
        title: "Corporate Accounting",
        credits: 6,
        category: "Core Course",
        description: "Issue & forfeiture of shares, redemption of preference shares & debentures, valuation of goodwill & shares, holding company accounts.",
        chapters: [
          {
            id: "bcoc137-ch1",
            number: 1,
            title: "Issue, Forfeiture & Reissue of Shares",
            summary: "Accounting treatment for over-subscription, pro-rata allotment, calls-in-arrears, forfeiture, and transfer of gain to Capital Reserve.",
            topics: [
              {
                id: "t137-1",
                title: "Pro-Rata Allotment & Share Forfeiture Accounting",
                content: `When applications exceed shares offered, pro-rata allotment is made. 

Forfeiture Principles:
1. Share Capital Account is DEBITED with the CALLED-UP amount (not nominal value if partially called).
2. Share Forfeiture Account is CREDITED with the amount ACTUALLY RECEIVED (excluding premium if received).
3. Calls-in-Arrears / Respective Call Account is CREDITED with unpaid amount.

Re-issue & Capital Reserve:
• Maximum discount on re-issue cannot exceed the amount forfeited on those shares.
• Net Gain on Reissued Shares = (Forfeited Amount on Reissued Shares) - (Discount allowed on Reissue). Transferred to Capital Reserve Account!`,
                mnemonic: "Forfeiture Debit = Called Up Value. Credit Forfeited = Amount Received. Capital Reserve = Profit on Reissue",
                example: "100 shares of ₹10 each (₹8 called up) forfeited for non-payment of ₹3 call. Debit Share Capital ₹800. Credit Share Forfeiture ₹500, Credit Calls-in-Arrears ₹300.",
                keyFormulas: [
                  "Debit Share Capital = No. of Shares Forfeited × Called-Up Value per Share",
                  "Credit Share Forfeiture = No. of Shares Forfeited × Amount Received per Share (excl. premium)",
                  "Capital Reserve = Amount Forfeited on Reissued Shares - Reissue Discount Allowed"
                ],
                quiz: [
                  {
                    id: "q9",
                    question: "When shares are forfeited, Share Capital Account is debited with:",
                    options: [
                      "Paid-up value of shares",
                      "Called-up value of shares",
                      "Face value of shares",
                      "Market value of shares"
                    ],
                    correctIndex: 1,
                    explanation: "During share forfeiture, Share Capital Account is debited with the total Called-Up amount per share till the date of forfeiture."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq9",
                    year: "June 2023",
                    marks: 20,
                    question: "X Ltd issued 10,000 shares of ₹10 each at a premium of ₹2. Applications received for 15,000 shares. Pro-rata allotment made. Pass journal entries for allotment, forfeiture of 200 shares, and reissue at ₹9.",
                    modelAnswer: `1. JOURNAL ENTRIES SUMMARY
• Entry 1: Debit Share Capital (200 × ₹10 = ₹2,000). Credit Share Forfeiture (200 × ₹7 = ₹1,400). Credit Calls in Arrears (200 × ₹3 = ₹600).
• Entry 2: Bank A/c Dr (200 × ₹9 = ₹1,800), Share Forfeiture A/c Dr (200 × ₹1 = ₹200) To Share Capital (₹2,000).
• Entry 3: Share Forfeiture A/c Dr ₹1,200 To Capital Reserve A/c ₹1,200 (Gain ₹1400 - ₹200).`
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
        description: "Cost sheet, material cost control (EOQ), labor remuneration, overhead allocation, marginal costing, and variance analysis.",
        chapters: [
          {
            id: "bcoc138-ch1",
            number: 1,
            title: "Material Costing & Economic Order Quantity (EOQ)",
            summary: "Cost components, stock levels (Reorder, Max, Min, Safety stock), and EOQ formula.",
            topics: [
              {
                id: "t138-1",
                title: "Economic Order Quantity (EOQ) & Stock Levels",
                content: `EOQ represents the optimal order size that minimizes total inventory costs (Ordering Costs + Carrying Costs).

At EOQ: Total Annual Ordering Cost = Total Annual Carrying Cost!

Stock Levels:
1. Re-order Level (ROL) = Maximum Usage × Maximum Lead Time
2. Minimum Level = ROL - (Average Usage × Average Lead Time)
3. Maximum Level = ROL + Re-order Quantity - (Minimum Usage × Minimum Lead Time)
4. Average Stock Level = Minimum Level + 1/2 (Re-order Quantity)`,
                mnemonic: "EOQ = √(2AO/C) [A = Annual Demand, O = Order Cost, C = Carrying Cost per unit per year]",
                example: "Annual demand A = 10,000 units, Ordering cost O = ₹50, Carrying cost C = ₹4/unit. EOQ = √(2 × 10000 × 50 / 4) = √250000 = 500 units.",
                keyFormulas: [
                  "EOQ = √((2 × A × O) / C)",
                  "No. of Orders per Year = Annual Demand / EOQ",
                  "Re-Order Level (ROL) = Max Usage × Max Lead Time"
                ],
                quiz: [
                  {
                    id: "q10",
                    question: "At Economic Order Quantity (EOQ), which two costs are equal?",
                    options: [
                      "Material Cost and Labor Cost",
                      "Total Annual Ordering Cost and Total Annual Carrying Cost",
                      "Direct Cost and Indirect Cost",
                      "Fixed Overhead and Variable Overhead"
                    ],
                    correctIndex: 1,
                    explanation: "EOQ is the exact point where total annual inventory ordering costs equal total annual inventory carrying costs, minimizing total cost."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq10",
                    year: "Dec 2023",
                    marks: 10,
                    question: "Calculate EOQ and Total Inventory Cost from the following: Annual Demand = 12,000 units, Cost per order = ₹100, Inventory carrying cost = 20% of unit price (₹50).",
                    modelAnswer: `1. DATA
A = 12,000 units, O = ₹100, C = 20% of ₹50 = ₹10.

2. CALCULATION
EOQ = √((2 × 12000 × 100) / 10) = √(240,000) = 489.9 ≈ 490 units.
No. of Orders = 12000 / 490 = 24.5 orders.`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    semId: 5,
    semTitle: "Semester 5",
    description: "Marketing Strategy & Financial Management",
    subjects: [
      {
        code: "BCOE-141",
        title: "Principles of Marketing",
        credits: 6,
        category: "Discipline Specific Elective",
        description: "Marketing mix (4 Ps), consumer behavior, market segmentation, targeting, positioning (STP), product life cycle, and digital marketing.",
        chapters: [
          {
            id: "bcoe141-ch1",
            number: 1,
            title: "Market Segmentation, Targeting & Positioning (STP)",
            summary: "Bases for segmentation (Geographic, Demographic, Psychographic, Behavioral) and positioning strategies.",
            topics: [
              {
                id: "t141-1",
                title: "STP Process & Bases of Segmentation",
                content: `STP is the core strategic pillar of modern marketing.

1. Segmentation (S): Dividing a heterogeneous market into distinct homogeneous buyer groups.
   - Geographic: Region, city size, climate.
   - Demographic: Age, income, gender, education, occupation.
   - Psychographic: Lifestyle, personality, social class (VALS framework).
   - Behavioral: Usage rate, brand loyalty, occasion, benefits sought.
2. Targeting (T): Evaluating segments and selecting which segment(s) to enter (Undifferentiated, Differentiated, Concentrated/Niche).
3. Positioning (P): Creating a distinct, desirable place for the product in target consumers' minds relative to competitors (e.g., Volvo = Safety, Apple = Innovation).`,
                mnemonic: "S-T-P (Segment the crowd, Target the best, Position in mind)",
                example: "Rolex uses Demographic (high income) & Psychographic (status-seeking) segmentation and positions itself as a luxury symbol.",
                keyFormulas: [
                  "4 Ps of Marketing Mix = Product, Price, Place, Promotion",
                  "4 Cs of Customer Focus = Customer Solution, Cost, Convenience, Communication"
                ],
                quiz: [
                  {
                    id: "q11",
                    question: "Segmenting a market based on lifestyle, values, and personality traits is known as:",
                    options: [
                      "Demographic Segmentation",
                      "Psychographic Segmentation",
                      "Geographic Segmentation",
                      "Behavioral Segmentation"
                    ],
                    correctIndex: 1,
                    explanation: "Psychographic segmentation groups consumers based on psychological characteristics such as lifestyle, social class, and personality."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq11",
                    year: "Dec 2023",
                    marks: 20,
                    question: "Define Market Segmentation. Explain the major bases for segmenting consumer markets with suitable Indian business examples.",
                    modelAnswer: `1. DEFINITION
Market segmentation is the process of dividing a broad target market into subset consumers who have common needs and priorities.

2. BASES WITH INDIAN EXAMPLES
• Demographic: Amul milk (Age/Family size), Titan Raga (Gender).
• Psychographic: Royal Enfield (Freedom/Adventurous lifestyle).
• Behavioral: Cadbury Celebrations (Festival occasions).`
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    semId: 6,
    semTitle: "Semester 6",
    description: "Management Accounting & Office Administration",
    subjects: [
      {
        code: "BCOE-142",
        title: "Management Accounting",
        credits: 6,
        category: "Discipline Specific Elective",
        description: "Ratio analysis, cash flow statement, budgetary control, marginal costing & break-even analysis, standard costing.",
        chapters: [
          {
            id: "bcoe142-ch1",
            number: 1,
            title: "Marginal Costing & Break-Even Analysis",
            summary: "Contribution, P/V Ratio, Break-even Point (BEP in units & rupees), Margin of Safety (MOS).",
            topics: [
              {
                id: "t142-1",
                title: "Break-Even Analysis & Margin of Safety",
                content: `Marginal costing differentiates between fixed costs and variable costs.

Core Concepts:
1. Contribution: Sales - Variable Cost = Fixed Cost + Profit
2. Profit-Volume Ratio (P/V Ratio): Expresses contribution as a percentage of sales.
   Formula: P/V Ratio = (Contribution / Sales) × 100 = (Change in Profit / Change in Sales) × 100
3. Break-Even Point (BEP): The sales level where Total Revenue = Total Cost (Zero Profit, Zero Loss).
   - BEP (in Units) = Fixed Cost / Contribution per unit
   - BEP (in Sales ₹) = Fixed Cost / P/V Ratio
4. Margin of Safety (MOS): Excess of actual sales over break-even sales.
   - MOS = Actual Sales - BEP Sales = Profit / P/V Ratio`,
                mnemonic: "BEP = Fixed Cost / P/V Ratio | MOS = Profit / P/V Ratio | Sales - VC = Contribution",
                example: "Fixed Cost = ₹40,000, Selling Price = ₹10/unit, Variable Cost = ₹6/unit. Contribution = ₹4/unit. BEP = 40,000 / 4 = 10,000 units (₹1,00,000 sales).",
                keyFormulas: [
                  "Contribution = Sales - Variable Cost",
                  "P/V Ratio = (Contribution / Sales) × 100",
                  "BEP (Units) = Fixed Cost / Contribution per Unit",
                  "BEP (Rupees) = Fixed Cost / P/V Ratio",
                  "Margin of Safety (MOS) = Profit / P/V Ratio"
                ],
                quiz: [
                  {
                    id: "q12",
                    question: "If Sales = ₹2,00,000, Variable Cost = ₹1,20,000, and Fixed Cost = ₹50,000, what is the P/V Ratio?",
                    options: [
                      "60%",
                      "40%",
                      "25%",
                      "50%"
                    ],
                    correctIndex: 1,
                    explanation: "Contribution = Sales - VC = 2,00,000 - 1,20,000 = ₹80,000. P/V Ratio = (80,000 / 2,00,000) × 100 = 40%."
                  }
                ],
                pyqs: [
                  {
                    id: "pyq12",
                    year: "June 2023",
                    marks: 10,
                    question: "Calculate (a) P/V Ratio, (b) BEP in Rupees, and (c) Sales required to earn a profit of ₹20,000 when Fixed Cost = ₹40,000, Variable Cost per unit = ₹15, Selling Price per unit = ₹25.",
                    modelAnswer: `1. CALCULATIONS
Contribution per unit = ₹25 - ₹15 = ₹10.
(a) P/V Ratio = (10 / 25) × 100 = 40%.
(b) BEP Sales = Fixed Cost / P/V Ratio = 40,000 / 0.40 = ₹1,00,000.
(c) Required Sales for ₹20,000 Profit = (Fixed Cost + Desired Profit) / P/V Ratio = (40,000 + 20,000) / 0.40 = ₹1,50,000.`
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
