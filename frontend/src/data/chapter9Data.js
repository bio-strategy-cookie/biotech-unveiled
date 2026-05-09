const chapter9 = {
  title: "Wrapping It All Up",
  topics: [
    {
      id: 'c9t1', level: 'green', type: 'summary', xp: 20,
      contextNote: 'The final chapter — a full-course recap before your exam.',
      title: 'Welcome to the Final Chapter',
      content: `We're nearing the end of our journey together. We hope you're proud of all you've learned, and have a deeper understanding of the complexities of drug innovation, insurance, and the biotech industry.\n\nIn this final chapter, we offer a brief review of the key content we've covered. When you're ready, you'll take a final exam. Passing with a score of 85% or above makes you eligible for a course completion certificate.`,
      imageUrl: null, videoUrl: null,
    },
    {
      id: 'c9t2', level: 'green', type: 'summary', xp: 20,
      contextNote: 'Chapters 1–3 recap.',
      title: 'Recap: Chapters 1–3',
      content: `**Chapter 1** flipped the script on drug pricing. Instead of focusing on cost, we emphasized the life-saving benefits of new medications — AZT, statins, and DAAs — and introduced the Mortgage Model: what society pays for branded drugs before they go generic is a finite "mortgage" that rewards innovation. Once drugs go generic, they become inexpensive public goods forever.\n\nThis underpins the **Biotech Social Contract**: drug makers commit to letting medicines go generic; society commits to making them accessible through proper insurance.\n\n**Chapter 2** explored the lengthy process of bringing a drug to market — discovery, preclinical studies, Phase I/II/III trials, FDA review, and post-marketing surveillance. The entire process takes ~10 years, costs billions, and still has a <1% overall success rate.\n\n**Chapter 3** examined the financial side: why private investors (not the government) fund most drug development, how NPV modeling works, and why some perfectly good science never gets funded — the Investor's Paradox.`,
      imageUrl: null, videoUrl: null,
    },
    {
      id: 'c9t3', level: 'green', type: 'summary', xp: 20,
      contextNote: 'Chapters 4–6 recap.',
      title: 'Recap: Chapters 4–6',
      content: `**Chapter 4** demystified drug pricing. List prices are not what companies actually receive — PBMs negotiate significant rebates, meaning net prices are often far lower. Generics account for 90% of all prescriptions. The high price of branded drugs before genericization is the mortgage that pays for innovation.\n\n**Chapter 5** traced three drugs — Lipitor, Gleevec, and Humira — through their different paths to genericization. Patent thickets, rebate walls, and manufacturing complexity can delay or prevent generics, violating the intent of the social contract.\n\n**Chapter 6** introduced the mechanics of health insurance: premiums, deductibles, copays, formularies, prior authorization, and step therapy. Only ~8% of premiums fund branded drugs. The rest goes to hospitals and services that never "go generic."`,
      imageUrl: null, videoUrl: null,
    },
    {
      id: 'c9t4', level: 'green', type: 'summary', xp: 20,
      contextNote: 'Chapters 7–8 recap.',
      title: 'Recap: Chapters 7–8',
      content: `**Chapter 7** exposed the problems with PBMs: accumulator programs, rebate opacity, vertical integration, and how patients end up paying more than the net price. The insured are often paying twice — premiums and then high out-of-pocket costs — while the system's incentives are misaligned against them.\n\n**Chapter 8** argued that price controls are the wrong solution. They don't fix out-of-pocket affordability (a patient's $5,000 deductible doesn't change if the list price drops). They do threaten the investment incentives that fund the next generation of drugs.\n\nThe right solution: **cap out-of-pocket costs**, expand coverage, limit PBM opacity, and use tools like guaranteed forward contracts to incentivize development of drugs the market undervalues (antibiotics, rare diseases). GCEA math shows that even at current prices, novel medicines represent a bargain compared to their societal value.`,
      imageUrl: null, videoUrl: null,
    },
    {
      id: 'c9t5', level: 'green', type: 'game', xp: 50,
      contextNote: 'The capstone experience — your role, your decisions, your ripples.',
      title: 'Stakeholder',
      content: `You've seen the whole system. Now play your part in it. Pick your role, face 5 decisions only you can make, and watch in real time as your choices ripple to every other stakeholder in the drug development ecosystem.`,
      imageUrl: null, videoUrl: null,
    },
    {
      id: 'c9t6', level: 'green', type: 'quiz', xp: 100,
      contextNote: 'Score 85% or higher to earn your certificate.',
      title: 'Final Exam',
      content: `This is the final exam for Biotech Unveiled. You must score 85% or higher to receive your certificate of completion.\n\nYou may use your notes and re-take the exam if needed. Good luck!`,
      questions: [
        {
          question: 'The Biotech Social Contract is best described as:',
          options: [
            'A federal law requiring drug companies to cap prices after 10 years',
            'An implicit agreement where drug makers charge high prices temporarily to fund innovation, then let drugs go generic',
            'A treaty between the US and other countries to share drug development costs',
            'A legal contract between biotech companies and the FDA'
          ],
          correct: 1
        },
        {
          question: 'Trikafta is a highly effective treatment for ___ with a ___ price tag.',
          options: [
            'Hepatitis C; high',
            'cystic fibrosis; low',
            'cystic fibrosis; high',
            'Hepatitis C; low'
          ],
          correct: 2
        },
        {
          question: 'All of the following are drugs that have had highly significant benefit for large numbers of patients, EXCEPT:',
          options: [
            'Direct-acting antivirals (DAAs)',
            'Statins',
            'Glafenine',
            'AZT'
          ],
          correct: 2
        },
        {
          question: 'About what percentage of drugs make it all the way through development from concept to FDA approval?',
          options: ['20%', '15%', '10%', '<1%'],
          correct: 3
        },
        {
          question: 'Phase II clinical trials:',
          options: [
            'Involve a small group of healthy volunteers to assess safety and dosage ranges',
            'Enroll several dozen to several hundred volunteers with the targeted disease to evaluate effectiveness and safety',
            'Involve identifying a potential drug target through laboratory research',
            'End with a New Drug Application (NDA) submission to the FDA'
          ],
          correct: 1
        },
        {
          question: 'Phase III clinical trials:',
          options: [
            'Involve ongoing monitoring of the drug after FDA approval',
            'Involve a small group of healthy volunteers assessing safety and dosage',
            'Involve identifying a potential drug target through lab research',
            'Involve hundreds to thousands of patients to confirm efficacy, monitor side effects, and compare to existing treatments'
          ],
          correct: 3
        },
        {
          question: '_____ involves ongoing monitoring of a drug\'s safety and effectiveness in real-world settings after FDA approval.',
          options: [
            'The New Drug Application (NDA)',
            'The Inflation Reduction Act',
            'Post-marketing surveillance',
            'The FDA Clinical Check Process'
          ],
          correct: 2
        },
        {
          question: 'In the Mortgage analogy for drug development, what society pays for a branded drug until it goes generic is compared to:',
          options: [
            'The cost of making a recurring monthly rent payment',
            'The profit earned by the company that created the drug',
            'A landlord\'s ability to evict a tenant',
            'The cost of making mortgage payments for a fixed number of years'
          ],
          correct: 3
        },
        {
          question: 'What is the approximate cost of developing a single new drug?',
          options: ['$2 Trillion', '$200 Billion', '$200 Million', '$2 Billion'],
          correct: 3
        },
        {
          question: 'Net Present Value (NPV) is:',
          options: [
            'A method of estimating a biotech company\'s future profitability over a quarter or year',
            'A measure of the average time it takes for an IND to receive FDA approval',
            'A computer-based method to estimate how well a drug candidate might work pre-clinically',
            'A financial metric used to estimate the profitability of a potential drug development project by comparing present value of future cash flows with the initial investment'
          ],
          correct: 3
        },
        {
          question: 'The Investor\'s Paradox refers to:',
          options: [
            'The FDA\'s requirement that investors disclose conflicts of interest',
            'The fact that drug companies must choose between innovation and profit',
            'Investors knowing only a few drugs they fund will be profitable, but not knowing which ones until they\'ve invested in all of them',
            'The Biotech Social Contract'
          ],
          correct: 2
        },
        {
          question: 'Pharmaceutical companies argue that rebates to PBMs lead to:',
          options: [
            'Lower list prices',
            'Higher list prices',
            'Increased transparency in drug pricing',
            'An increased likelihood patients will take their medicine'
          ],
          correct: 1
        },
        {
          question: 'The list of drugs that an insurer chooses to cover is called a(n):',
          options: ['PBM Compendium', 'Good Prescription List', 'Pharmacopeia', 'Formulary'],
          correct: 3
        },
        {
          question: 'True or False: List prices are a good indicator of actual drug costs.',
          options: ['True', 'False'],
          correct: 1
        },
        {
          question: 'Which of the following drugs had the most typical path to genericization?',
          options: ['Keytruda', 'Humira', 'Gleevec', 'Lipitor'],
          correct: 3
        },
        {
          question: 'High executive salaries in pharmaceutical companies are:',
          options: [
            'The primary reason drug costs are so high',
            'Directly tied to the amount of money spent on R&D',
            'An ineffective way to attract talent',
            'Not a significant factor influencing drug prices'
          ],
          correct: 3
        },
        {
          question: 'About 10% of Americans are estimated to:',
          options: [
            'Be covered by Medicare and Medicaid',
            'Be covered by employer health insurance',
            'Regularly take at least 1 prescription drug',
            'Not have insurance at all'
          ],
          correct: 3
        },
        {
          question: 'An Out-of-Pocket Maximum is:',
          options: [
            'The regular monthly payment made to a health insurance provider',
            'The portion of healthcare expenses paid directly in addition to monthly premium',
            'Fixed amounts paid for certain covered services like doctor visits',
            'The most a person has to pay for covered healthcare services in a plan year'
          ],
          correct: 3
        },
        {
          question: 'All of the following are problems with the U.S. health insurance system EXCEPT:',
          options: [
            'Access to good insurance is typically linked to traditional employment',
            '10% of Americans lack health insurance and many more are underinsured',
            'Vertical integration can lead to market dominance by entities like UnitedHealth',
            'The medical education available in the U.S. significantly lags behind most other countries'
          ],
          correct: 3
        },
        {
          question: 'The proposal to fix U.S. drug prices to what other countries pay is called:',
          options: [
            'The Hatch-Waxman Act',
            'Drug reimportation',
            'March-in rights',
            'International Reference Pricing'
          ],
          correct: 3
        },
        {
          question: 'The very rapid development of the COVID-19 vaccine is attributed in part to:',
          options: [
            'Generalized Cost Effectiveness Analysis',
            'PASTEUR',
            'The X-Prize Model',
            'Guaranteed Forward Contracts'
          ],
          correct: 3
        },
        {
          question: 'Traditional Cost Effectiveness Analysis (CEA) fails to account for:',
          options: [
            'Expenses associated with the drug itself',
            'The drug\'s impact on a patient\'s health',
            'Monitoring costs',
            'Drugs going generic over time'
          ],
          correct: 3
        },
      ],
      imageUrl: null, videoUrl: null,
    },
  ]
}

export default chapter9
