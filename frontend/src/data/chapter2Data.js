const chapter2 = {
  id: "chapter-2",
  title: "Where Do New Drugs Come From?",
  subtitle: "From lab discovery to pharmacy shelf",
  estimatedTime: "45 min",
  maxXP: 220,
  overview: {
    parts: [
      {
        number: 1,
        level: "green",
        title: "The drug development process",
        description: "Discovery → preclinical → clinical trials → FDA approval. What happens at each stage and why it takes 10–15 years."
      },
      {
        number: 2,
        level: "yellow",
        title: "Risk, cost & odds of success",
        description: "Why only 1% of drug candidates make it, the billions it costs, and what that means for patients."
      },
      {
        number: 3,
        level: "red",
        title: "Regulatory pathways & key players",
        description: "Accelerated approvals, orphan diseases, PBMs, and the full ecosystem of who makes drug development happen."
      }
    ]
  },
  topics: [
    {
      id: "t1",
      level: "green",
      type: "video",
      contextNote: "No prior knowledge needed — a good place to start",
      title: "Introduction: The Human Trial",
      content: "This documentary trailer highlights the struggles — scientific, financial, and emotional — of finding a cure for diabetes, just one condition among thousands. The journey of a drug from concept to clinical trials to the pharmacy is a long and arduous one.",
      videoUrl: "https://www.youtube.com/embed/EG_qvB7yGpg",
      xp: 10
    },
    {
      id: "t2",
      level: "green",
      type: "reading",
      contextNote: "Sets up what this chapter covers — read this first",
      title: "What you'll learn in this chapter",
      content: "In this chapter you will learn: the key stages of bringing a new drug from idea to market in the U.S.; the benefits of this process to the U.S. and the rest of the world; and the major players in the drug development ecosystem.",
      xp: 10
    },
    {
      id: "t3",
      level: "green",
      type: "quiz",
      contextNote: "Tests your starting knowledge — no pressure, no prior knowledge needed",
      title: "Test your knowledge: what do you know about drug development?",
      xp: 20,
      questions: [
        {
          question: "What is the average length of time it takes to go from identifying a chemical compound to FDA approval?",
          options: ["2–5 years", "6–10 years", "10–15 years", "16–20 years"],
          correct: 2
        },
        {
          question: "What percentage of drugs that enter clinical trials actually make it to FDA approval?",
          options: ["<10%", "20–35%", "45–50%", "70–75%"],
          correct: 0
        },
        {
          question: "How many volunteers are typically involved in a Phase III clinical trial?",
          options: ["Less than a dozen", "A few dozen to a few hundred", "Several hundreds to thousands", "At least ten thousand"],
          correct: 2
        }
      ]
    },
    {
      id: "t4",
      level: "green",
      type: "video",
      contextNote: "A fun, accessible 7-minute overview of the whole process",
      title: "How does the FDA approve a drug?",
      content: "This 7-minute video provides a great overview of the drug development process. As you watch, think about what the potential cost of each step might be.",
      videoUrl: "https://www.youtube.com/embed/WUsO6PH_O54",
      xp: 10
    },
    {
      id: "t5",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — the basics of how drug discovery starts",
      title: "Discovery and preclinical research",
      content: "This phase involves identifying a potential drug target, often a specific molecule or biological process associated with a disease. Researchers conduct extensive laboratory studies to understand the compound's properties, mechanisms of action, and potential therapeutic effects. Preclinical studies are performed using cell cultures and animal models to analyze safety signals, collect evidence of efficacy, and study potential side effects before moving a compound into human trials. This stage typically takes 2–10 years.",
      xp: 10
    },
    {
      id: "t6",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on discovery — introduces FDA terminology for the first time",
      title: "Investigational New Drug (IND) application",
      content: "Before a biotech or pharma company can test a drug in humans, its sponsor submits an IND application to the FDA. This application includes key preclinical data and a proposed clinical trial plan. Once the IND is approved, human clinical trials can begin. The FDA has 30 days to review an IND application.",
      xp: 10
    },
    {
      id: "t7",
      level: "green",
      type: "reading",
      contextNote: "Core content — understand this before anything else in biotech",
      title: "Clinical trials: Phase I, II, and III",
      content: "Clinical trials are conducted in three phases. Phase I involves a small group of usually-healthy volunteers who take the drug so investigators can assess safety, explore dosage ranges, and monitor for side effects. Lasts several months to a year or more. Phase II enrolls a larger group (several dozen to several hundred) who have the targeted disease to evaluate effectiveness and further assess safety. Typically lasts 1–2 years. Phase III involves several hundreds to thousands of volunteers with the disease to confirm efficacy, monitor side effects, and compare the drug against existing treatments or a placebo. Lasts around 2–5 years.",
      xp: 15
    },
    {
      id: "t8",
      level: "green",
      type: "quiz",
      contextNote: "Tests the clinical trial phases — review the timeline above first",
      title: "Check your understanding 2.1: how does the FDA approve a drug?",
      xp: 20,
      questions: [
        {
          question: "Which best describes Phase I clinical trials?",
          options: [
            "In vitro and animal studies to assess safety and efficacy",
            "Hundreds to thousands of volunteers with the target disease",
            "A small number of healthy volunteers evaluate safety, tolerability, and dosage",
            "Submission of preclinical data and proposed clinical trial plans to the FDA"
          ],
          correct: 2
        },
        {
          question: "Which best describes preclinical research?",
          options: [
            "Performance of in vitro and in vivo studies to assess safety, efficacy, and toxicity",
            "Several hundreds to thousands of volunteers with the disease of interest",
            "A small number of healthy volunteers evaluate a drug's safety and dosage",
            "Submission of all data gathered from studies to the FDA for evaluation"
          ],
          correct: 0
        }
      ]
    },
    {
      id: "t9",
      level: "yellow",
      type: "reading",
      contextNote: "Continues from clinical trials — introduces the approval process",
      title: "NDA submission, FDA approval, and post-marketing surveillance",
      content: "After successful Phase III trials, the drug's sponsor submits a New Drug Application (NDA) to the FDA containing comprehensive data on safety, efficacy, tolerability, manufacturing, and proposed labeling. The FDA reviews and determines if the drug's benefits outweigh its risks. If approved, the drug can be marketed. Companies then conduct post-marketing surveillance studies — ongoing monitoring of the drug's safety and effectiveness in the real world. The painkiller Vioxx passed rigorous FDA approval but was later found to have caused approximately 88,000 heart attacks in Americans.",
      xp: 10
    },
    {
      id: "t10",
      level: "green",
      type: "data",
      contextNote: "Surprising numbers that put the whole process in perspective",
      title: "The scale of drug development",
      content: "About 35,000–40,000 clinical trials are registered globally each year. Over the past 10 years, an average of only 43 drugs were approved by the FDA each year. About 5% of Americans — roughly 16.5 million people — have participated in a clinical trial. There are approximately 45,000 clinical investigators in the US.",
      stats: [
        { label: "Global trials/year", value: "35,000–40,000" },
        { label: "FDA approvals/year", value: "~43" },
        { label: "Americans in trials", value: "~5%" },
        { label: "US investigators", value: "~45,000" }
      ],
      xp: 10
    },
    {
      id: "t11",
      level: "yellow",
      type: "data",
      contextNote: "Builds on the timeline — shows why most drugs never reach patients",
      title: "What are the odds a drug will make it?",
      content: "Fewer than 10% of drugs that enter preclinical testing even make it into clinical trials. From there: 63% of drugs that enter Phase I move to Phase II; 30% of those progress to Phase III; 58% of Phase III drugs win FDA approval. The overall success rate from discovery to FDA approval is only around 1%.",
      stats: [
        { label: "Preclinical → trials", value: "<10%", fill: 10 },
        { label: "Phase I → II", value: "63%", fill: 63 },
        { label: "Phase II → III", value: "30%", fill: 30 },
        { label: "Phase III → approval", value: "58%", fill: 58 }
      ],
      xp: 10
    },
    {
      id: "t12",
      level: "yellow",
      type: "reading",
      contextNote: "Real-world examples of the fastest and slowest drug timelines",
      title: "Operation Warp Speed and the Tecfidera story",
      content: "The COVID-19 vaccine demonstrates the fastest possible timeline — enabled by an incredible team, massive public and government support, significant disease prevalence, FDA emergency authorization, and unlimited funding. As a counterexample, dimethyl fumarate (Tecfidera) was proposed as a psoriasis treatment in the 1950s but wasn't commercialized until 1994. Its use for Multiple Sclerosis wasn't explored until the 2000s, with FDA approval finally granted in 2013 — anywhere from 9 to 60 years depending how you count it.",
      xp: 10
    },
    {
      id: "t13",
      level: "red",
      type: "reading",
      contextNote: "Assumes familiarity with standard trial phases — regulatory nuance",
      title: "Accelerated approval pathways",
      content: "The standard drug development process can be modified and shortened for orphan diseases and some cancers. This can include starting Phase I trials in patients (Phase 1b studies) rather than healthy volunteers, and potentially allowing for accelerated approval based on a Phase 2b study, with full approval granted after post-marketing studies are completed if they support approval. This pathway requires careful regulatory strategy and a strong understanding of FDA review criteria.",
      xp: 15
    },
    {
      id: "t14",
      level: "yellow",
      type: "quiz",
      contextNote: "Tests your understanding of the full development process",
      title: "Check your understanding 2.2: how new drugs get developed",
      xp: 20,
      questions: [
        {
          question: "Which phase involves hundreds to thousands of patients to confirm efficacy and monitor side effects?",
          options: ["Preclinical Studies", "Phase I Clinical Trials", "Phase II Clinical Trials", "Phase III Clinical Trials"],
          correct: 3
        },
        {
          question: "About what percentage of drugs make it all the way from concept to FDA approval?",
          options: ["<1%", "5%", "10%", "25%"],
          correct: 0
        },
        {
          question: "Which drug was pulled from the market based on post-marketing surveillance data?",
          options: ["AZT", "Phenylephrine", "Trikafta", "Vioxx"],
          correct: 3
        }
      ]
    },
    {
      id: "t15",
      level: "green",
      type: "video",
      contextNote: "No prior knowledge needed — accessible 3-minute video",
      title: "What is the value of a new medicine?",
      content: "This 3-minute video introduces the concept of the Value Flower for calculating the value of new medicines. Benefits of the current drug development process include: access to new drugs, confidence in rigorous safety testing, cures for previously untreatable diseases, reduced healthcare costs, and increased life expectancy.",
      videoUrl: "https://www.youtube.com/embed/MUehueqYgBk",
      xp: 10
    },
    {
      id: "t16",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — big-picture context on global impact",
      title: "Value to the world: how US biopharma benefits everyone",
      content: "The US biopharmaceutical industry benefits the world in four key ways: 1. Leadership in R&D — breakthroughs made in the US frequently benefit populations worldwide. 2. Increased global access to medicines and vaccines — particularly for HIV/AIDS, malaria, tuberculosis, and neglected tropical diseases. 3. Technological innovation and knowledge sharing — fostering global collaboration and shared expertise. 4. Economic contribution and job creation — US companies establish facilities and partnerships worldwide, stimulating economic growth.",
      xp: 10
    },
    {
      id: "t17",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on global value — slightly more nuanced industry dynamics",
      title: "The debate around global access and industry responsibility",
      content: "The US biopharma industry's positive contributions rarely make the news. While bad actors exist in every industry, it's important to appreciate the positive aspects alongside the negative. The US market primarily incentivizes drug development, and the rest of the world benefits from that investment. However, many critics argue companies should do even more to improve access in low- and middle-income countries — a debate without easy answers.",
      xp: 10
    },
    {
      id: "t18",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — who makes drug development happen",
      title: "Key players in drug development: Part 1",
      content: "The drug development ecosystem includes: Academic and Research Institutions — conduct fundamental research into new drug targets. Government Agencies and Funding Bodies — especially the NIH, which provides grants supporting academic researchers. Investors and Venture Capital Firms — fund early-stage companies working on innovative drug candidates. Biopharmaceutical Companies — conduct research, run clinical trials, and seek regulatory approvals. Contract Research Organizations (CROs) — support pharma and biotech companies in managing clinical trials, handling data, and ensuring regulatory compliance.",
      xp: 10
    },
    {
      id: "t19",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on Part 1 — introduces more specialised roles",
      title: "Key players in drug development: Part 2",
      content: "More specialised players include: Contract Manufacturing Organizations (CMOs) — specialize in manufacturing pharmaceutical products on behalf of pharma companies. Patient Advocacy Groups and Foundations — provide funding, shape drug development strategies, and advocate for policies. The Alzheimer's Association and Cystic Fibrosis Foundation are examples. Healthcare Providers and Clinicians — conduct clinical trials and provide real-world feedback on drug efficacy. The FDA — oversees the entire drug approval process. Supply Chain and Distribution Networks — ensure approved drugs reach patients.",
      xp: 10
    },
    {
      id: "t20",
      level: "red",
      type: "reading",
      contextNote: "Assumes familiarity with the US healthcare system — covered more in Chapter 5",
      title: "Payers, PBMs, and the insurance system",
      content: "Public and Private Insurance Providers (Payers) — Medicare, Medicaid, the VA, and private plans collectivize healthcare costs. With pharmacy benefit managers (PBMs), they negotiate net prices with drug companies and control which treatments plan members can access. Behind-the-scenes negotiations starring opaque middlemen can misalign incentives, leading to untoward behavior and higher out-of-pocket costs for patients.",
      xp: 15
    },
    {
      id: "t21",
      level: "yellow",
      type: "quiz",
      contextNote: "Tests value and key players — review the sections above first",
      title: "Check your understanding 2.3: value, industry, and key players",
      xp: 20,
      questions: [
        {
          question: "Which is NOT a benefit those of us in the US receive from the current drug development process?",
          options: ["We get lots of new drugs", "We get confidence in rigorous safety testing", "Ineffective drugs are pulled from the market", "Drugs are always available at no cost"],
          correct: 3
        },
        {
          question: "Which entity oversees the drug approval process, evaluating safety, efficacy, and quality?",
          options: ["The NIH", "Contract Research Organizations", "The FDA", "Contract Management Organizations"],
          correct: 2
        },
        {
          question: "Besides their own profits, where does the majority of funding for biopharma companies come from?",
          options: ["Investors like venture capital firms", "Supply chain networks", "Pharmaceutical companies", "CROs"],
          correct: 0
        }
      ]
    },
    {
      id: "t22",
      level: "green",
      type: "summary",
      contextNote: "Review this before moving to Chapter 3",
      title: "Chapter 2 summary",
      content: "In Chapter 2 we explored the lengthy and complex process of bringing a new drug to market. Key points: The entire process typically takes 10–15 years. It starts with discovery, moves through preclinical studies, IND application, three phases of clinical trials, NDA submission, FDA review, and post-marketing surveillance. The overall success rate from discovery to approval is only ~1%. The US biopharma industry benefits the world through R&D leadership, global medicine access, knowledge sharing, and job creation. The ecosystem includes universities, government agencies, VCs, pharma companies, CROs, CMOs, patient advocates, clinicians, the FDA, and payers.",
      xp: 10
    }
  ]
};

export default chapter2;
