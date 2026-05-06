const chapter6 = {
    id: 6,
    title: "Why insurance is so important",
    topics: [
      {
        id: "c6t1",
        level: "green",
        type: "reading",
        contextNote: "Sets the stage — insurance is broken, but it's still the only thing standing between patients and $300K drugs",
        title: "The absurdity of American insurance",
        content: "Here's a spoiler for our chapter on health insurance: it's absurd! And who better to help explain the absurdity than South Park.\n\nAs we move through this chapter, it's important to keep in mind how insurance is **supposed** to work versus how it **actually** works in present reality. It's important to understand the ways the system is broken. And it's important to understand that until we fix the way insurance works — and extend its benefits to all Americans — our ability to innovate and create new life-saving medicines will remain at risk.\n\nBecause when insurance doesn't cover a medicine someone needs, those flaws sometimes unfairly hurt the reputations of doctors who treat patients and scientists who create drugs. The system that is supposed to make our most innovative medicines affordable is also rife with serious issues that cost people their health and financial well-being.",
        imageUrl: "/images/ch6_img0.jpg",
        xp: 10,
      },
      {
        id: "c6t2",
        level: "green",
        type: "reading",
        contextNote: "Chapter overview",
        title: "Chapter 6 overview",
        content: "In this chapter, we'll cover:\n\n• **Premiums, Deductibles, and OOPs** — a quick glossary of essential terms\n• **Utilization Management** — how insurers decide what they'll pay for\n• **How Insurance Incentivizes Innovation** — the surprising connection between premiums and drug R&D\n• **The Industry's True Customers** — a counterintuitive answer that changes how you think about pharma\n• **Remember Zoey?** — revisiting our opening story with fresh eyes",
        xp: 5,
      },
      {
        id: "c6t3",
        level: "green",
        type: "reading",
        contextNote: "The key reframe — insurance is what makes Trikafta accessible to Zoey's family",
        title: "Remember Zoey?",
        content: "Remember Zoey, the girl with cystic fibrosis whose story we opened this course with? Zoey is taking **Trikafta**, which has a list price of around **$300,000 per year** in the US, before discounts. How can most people afford that?\n\nThe answer, of course, is **health insurance**.\n\nIn Chapter 4 we talked about how drugs like Trikafta and Zolgensma are very expensive — way more expensive than any one person or family can typically afford — but that those temporarily high prices are what incentivizes investors and companies to take risks to develop breakthrough medicines.\n\nAccording to Vertex, the company that developed and sells Trikafta, more than **99% of people with cystic fibrosis who are eligible for Trikafta have access to it through their insurance plans** (and Vertex provides assistance for those who don't).\n\nSo who pays for insurance to make all that possible? You do. Whether it's through your tax dollars financing government programs like Medicare, and/or with a premium payment taken out of your paycheck, the vast majority of us pay into insurance so that when any one of us happens to get sick and need it, insurance is there. This is how insurance is **supposed** to work.",
        imageUrl: "/images/ch6_img3.png",
        imageUrl2: "/images/ch6_img7.png",
        xp: 10,
      },
      {
        id: "c6t4",
        level: "green",
        type: "reading",
        contextNote: "The fire analogy — insurance as collective risk-sharing, then where it breaks down",
        title: "Premiums, deductibles, and OOPs — oh my!",
        content: "Consider a house fire. In most American towns, the fire department is funded by residents' taxes, and while some may complain about paying taxes, no one complains about the fire engines that show up minutes after a fire breaks out. This collective sharing of risk spreads the financial burden and provides peace of mind.\n\nThis is more-or-less how insurance is supposed to work for medical care too. Whether you get insurance through the government (Medicare, Medicaid, ACA exchanges) or your employer, you make regular payments called **premiums**, which are supposed to cover the cost of your healthcare.\n\nWhere healthcare and firefighting deviate is that firefighters don't ask for an extra fee before they turn on the hoses. Health insurance increasingly does ask for money from sick people on top of their regular premiums:\n\n• **Co-pay** — a flat fee or percentage of the cost of your care\n• **Deductible** — a specific amount you have to pay on top of premiums each year before insurance kicks in\n• **Out-of-pocket costs (OOPs)** — the total of co-pays and deductibles you bear each year\n• **Out-of-pocket maximum** — the cap on your total out-of-pocket spending in a year, after which insurance covers everything\n\nThese costs are ostensibly to prevent over-utilization of healthcare resources — giving us all \"skin in the game.\" But they have risen considerably over the years and can be especially burdensome to those with chronic conditions.",
        imageUrl: "/images/ch6_img0.jpg",
        xp: 15,
      },
      {
        id: "c6t5",
        level: "green",
        type: "video",
        contextNote: "A plain-language explainer of how insurance costs actually work",
        title: "Understanding your health insurance costs",
        content: "Please watch this five-minute explainer from Consumer Reports. It all sounds pretty straightforward when explained with a bouncy music soundtrack — but we'll discuss later in this chapter our view on whether out-of-pocket costs are necessary at all, how high OOP costs deter people from seeking appropriate care, and the real consequences for their health when they do.",
        videoUrl: "https://www.youtube.com/embed/5e3LFZS_bPQ",
        xp: 10,
      },
      {
        id: "c6t6",
        level: "green",
        type: "quiz",
        contextNote: "Check your understanding of basic insurance terminology",
        title: "Check your understanding 6.1: Insurance basics",
        content: "",
        xp: 20,
        questions: [
          {
            question: "What percentage of Americans are estimated to not have insurance at all?",
            options: ["5%", "10%", "15%", "20%"],
            correct: 1
          },
          {
            question: "The regular payment you make to your health insurance provider is called a(n):",
            options: ["Co-pay", "Deductible", "Premium", "Out-of-pocket maximum"],
            correct: 2
          },
          {
            question: "What does it mean to 'reach your out-of-pocket maximum'?",
            options: [
              "You have made 2 co-pay payments for the year.",
              "You have paid the total amount of your premium for the year.",
              "You have not yet reached the limit on the total amount you are responsible to pay.",
              "You no longer have to pay any co-pays or other costs for medical care for the rest of the year."
            ],
            correct: 3
          },
          {
            question: "The specific amount you have to pay on top of premiums each year before your insurance kicks in is called the:",
            options: ["Co-pay", "Deductible", "Co-insurance", "Out-of-pocket maximum"],
            correct: 1
          }
        ]
      },
      {
        id: "c6t7",
        level: "green",
        type: "reading",
        contextNote: "Five key terms that determine what your insurance actually covers",
        title: "Utilization management and related terms",
        content: "Here are 5 more insurance-related key terms that are important to understand.\n\n**Utilization Management** refers to how insurance companies determine what they will pay for, and what they won't.\n\n**Formulary Restrictions:** Insurers use formularies — lists of preferred medications — to track what they pay for each drug. Typically they assign low copays ($5-10) for generics, higher (~$25) for preferred branded drugs, and even higher ($50-75) for non-preferred branded drugs. Drugs not on the formulary may require even higher copays or may not be covered at all.\n\n**Network Restrictions:** Many insurance plans limit where patients can fill prescriptions. Patients may be required to use pharmacies within a designated network, which can be inconvenient or inaccessible, particularly in rural areas.\n\n**Prior Authorization:** Some plans require approval from the insurance company before certain drugs can be dispensed. Since doctors sometimes make mistakes or may not realize the plan has a more favorable price for one treatment, it's not unreasonable to have some means of checking. But in practice, prior authorization is often abused — more on that in Chapter 7.\n\n**Step Therapy:** Also known as \"fail first\" policies, step therapy requires patients to try lower-cost medications before receiving coverage for more expensive alternatives. While this can help control costs, it may delay access to optimal treatment for patients with complex needs.",
        imageUrl: "/images/ch6_img2.jpg",
        xp: 15,
      },
      {
        id: "c6t8",
        level: "green",
        type: "reading",
        contextNote: "The surprising stat — only 10% of premiums fund all drug innovation",
        title: "How insurance incentivizes innovation",
        content: "Insurance allows us to pool our collective resources to pay for expensive medical treatments, including drugs, when someone in our \"pool\" gets sick or needs care. About **10% of what we pay into insurance through our monthly premiums and taxes goes to pay for branded medicines**. So it's only 10% of healthcare costs that incentivize development of all new and better drugs. **Just 10%.**\n\nAnd what's really cool is that since drugs keep going generic, the less-than-10% we spend this year on branded drugs goes toward paying for drugs that didn't even exist 20 years ago — and in 20 years we'll be paying for a whole new set of branded drugs.\n\nWhere does the other 90% go? A few percent goes toward paying for all those once-branded, now-generic drugs. About **80% goes to pay for healthcare providers and services** — think hospitals, doctors, nursing homes. Those costs never go generic, and they keep on rising.\n\nSo it's important to keep incentivizing development of new drugs that can keep us healthy, productive, and out of the hospital as much as possible. Without insurance, we simply wouldn't have innovative new medicines.",
        imageUrl: "/images/ch6_img6.jpg",
        xp: 10,
      },
      {
        id: "c6t9",
        level: "green",
        type: "video",
        contextNote: "Peter poses a provocative question about who pharma actually serves",
        title: "The industry's true customers",
        content: "Who do you think are pharma's true customers? Peter Kolchinsky posed this question to an educated audience and had them stumped. Watch this 2-minute video to find out the answer — it will change how you think about the entire system.",
        videoUrl: "https://player.vimeo.com/video/1033515041?h=da4198dd2c",
        imageUrl: "/images/ch6_img1.png",
        xp: 10,
      },
      {
        id: "c6t10",
        level: "green",
        type: "quiz",
        contextNote: "Check your understanding of utilization management and insurance incentives",
        title: "Check your understanding 6.2: Utilization management",
        content: "",
        xp: 20,
        questions: [
          {
            question: "Which of the following statements about formulary restrictions is most accurate?",
            options: [
              "They ensure patients always receive the most expensive medications.",
              "They allow patients to choose any medication they want with no cost.",
              "They encourage the use of lower-cost medications preferred by the insurer.",
              "They eliminate the need for patients to pay copays for any medications."
            ],
            correct: 2
          },
          {
            question: "What is the biggest disadvantage of network restrictions in health insurance plans?",
            options: [
              "They encourage patients to compare prices at different pharmacies.",
              "They may limit access to pharmacies for patients in remote areas.",
              "They typically only apply to generic medications.",
              "They always require prior authorization for any prescriptions."
            ],
            correct: 1
          },
          {
            question: "What is the primary reason for prior authorization requirements?",
            options: [
              "To ensure pharmacies always have the medications in stock.",
              "To prevent patients from stockpiling medications they don't need.",
              "To guarantee patients receive the most up-to-date medications available.",
              "To keep costs down by ensuring that insurance only pays for the medicine the plan agrees a patient should get."
            ],
            correct: 3
          },
          {
            question: "According to Peter Kolchinsky, who are pharma's true customers?",
            options: ["Patients", "Most healthy people", "Health insurance companies", "Medicare and Medicaid"],
            correct: 1
          }
        ]
      },
      {
        id: "c6t10b",
        level: "green",
        type: "game",
        contextNote: "Experience the reimbursement system firsthand — 5 obstacles stand between your approved drug and your patients",
        title: "Reimbursement roulette",
        content: "Your drug just got FDA approved. Now navigate the real gauntlet — formulary placement, prior auth, step therapy, PBM games, and the pharmacy counter moment. How many patients will actually get your drug?",
        xp: 30,
      },
      {
        id: "c6t11",
        level: "green",
        type: "summary",
        contextNote: "Key takeaways from Chapter 6",
        title: "Chapter 6 summary",
        content: "**Key Points from Chapter 6:**\n\n**Insurance as collective risk-sharing:** Health insurance, like firefighting, is based on the collective sharing of risk through regular payments (premiums). Unlike firefighting, health insurance requires additional fees from the insured — co-pays and deductibles — which can be burdensome and deter people from seeking appropriate care.\n\n**Utilization Management** determines what insurance will cover, involving practices like:\n• **Formulary restrictions** — limiting access to certain medications\n• **Network restrictions** — dictating where patients can fill prescriptions\n• **Prior authorization** — requiring approval before dispensing certain drugs\n• **Step therapy** — requiring cheaper treatments to be tried first\n\n**Insurance and innovation:** About 10% of premiums go toward branded medicines, incentivizing the development of new drugs. The other 80%+ goes to healthcare providers and services whose costs never go generic.\n\n**A flawed but essential system:** Insurance is what makes $300,000 drugs like Trikafta accessible to patients like Zoey. The system has real problems — but fixing those problems, rather than attacking drug prices, is the path to better outcomes for everyone.",
        xp: 10,
      },
    ]
  }
   
  export default chapter6