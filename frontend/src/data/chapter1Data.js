const chapter1 = {
  id: "chapter-1",
  title: "Why Develop New Drugs?",
  subtitle: "The life-saving benefits of pharmaceutical innovation",
  estimatedTime: "40 min",
  maxXP: 160,
  overview: {
    parts: [
      {
        number: 1,
        level: "green",
        title: "The Drug Development Hall of Fame",
        description: "Three drugs that changed millions of lives — AZT, statins, and DAAs for Hepatitis C."
      },
      {
        number: 2,
        level: "yellow",
        title: "The Mortgage vs Rent model",
        description: "Why branded drugs are temporarily expensive and how they become cheap public goods after patents expire."
      },
      {
        number: 3,
        level: "red",
        title: "The Biotech Social Contract & MPI",
        description: "The implicit agreement between the industry and society, and what happens when it breaks down."
      }
    ]
  },
  topics: [
    {
      id: "c1t1",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — connects back to Chapter 0",
      title: "Chapter intro: Zoey's story revisited",
      content: "Zoey's story is only one of millions of lives saved in the US every day because of access to lifesaving treatment. Her experience could have been vastly different had she lived before Trikafta was developed, or had she not been able to access the drug. Before we get into deeper discussions about drug pricing, let's first take a look at the benefits of drug development and examine a few of the most significant developments over the past 50 years.",
      xp: 5
    },
    {
      id: "c1t2",
      level: "green",
      type: "reading",
      contextNote: "Sets up what this chapter covers",
      title: "Chapter overview",
      content: "In an era where discussions about prescription drugs are often centered around high costs and inadequate access, it is important to recognize that the development of new drugs has brought about profound and far-reaching benefits to society. Not only have drugs positively impacted our individual longevity, health and well-being, they have also dramatically improved the collective health of societies and economies around the world. In this chapter we explore: the benefits new drugs have brought to individuals and society; the most important drug inventions in the past 50 years; the Mortgage vs Rent model of drug development; and the significance of prescription drugs in healthcare.",
      xp: 5
    },
    {
      id: "c1t3",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — accessible to everyone",
      title: "The Drug Development Hall of Fame",
      content: "We'd like to take you on a quick walk through the Drug Development Hall of Fame — three pharmaceutical innovations that have arguably made the most positive impact on society over the past 50 years. These are AZT for HIV/AIDS, Lipitor (atorvastatin) for high cholesterol and cardiovascular disease, and DAAs (direct-acting antivirals) for Hepatitis C. There are many world-changing drugs, but we've picked a few of the strongest and best-known examples to highlight here.",
      xp: 5
    },
    {
      id: "c1t4",
      level: "green",
      type: "video",
      contextNote: "No prior knowledge needed — a remarkable drug origin story",
      title: "AZT: the first drug approved to treat HIV/AIDS",
      content: "AZT (azidothymidine) was originally developed in 1964 as a potential cancer agent but didn't work in mice. Two decades later, after AIDS emerged, Burroughs Wellcome tested a reformulated version against HIV — and it worked. The FDA approved AZT as the first AIDS medication on March 19, 1987, just 25 months after the first demonstration of its activity in the lab. Before AZT, an HIV/AIDS diagnosis was often considered a death sentence. Today, antiretroviral drugs have made it possible for millions diagnosed with HIV to live long and healthy lives.",
      videoUrl: "https://www.youtube.com/embed/SqhuL0q-3S0",
      xp: 10
    },
    {
      id: "c1t5",
      level: "green",
      type: "video",
      contextNote: "No prior knowledge needed — statins explained by a cardiologist",
      title: "Atorvastatin (Lipitor): saving hundreds of millions of lives",
      content: "Statins are lipid-lowering medications that reduce illness and mortality in people at high risk of heart disease. Lipitor and other statins significantly lower cholesterol and reduce the risk of heart attack by 30–40%. The first statin was discovered in 1971 by Akira Endo, a Japanese biochemist, who identified a molecule produced by a fungus that could lower cholesterol. Heart disease is one of the leading causes of death worldwide. The number of lives saved and prolonged by statins is in the hundreds of millions.",
      videoUrl: "https://www.youtube.com/embed/5LkZIXgaXno",
      xp: 10
    },
    {
      id: "c1t6",
      level: "green",
      type: "video",
      contextNote: "No prior knowledge needed — a disease that went from chronic to curable",
      title: "DAAs: curing Hepatitis C",
      content: "Over 3 million Americans and 58 million people globally are infected with Hepatitis C. A major breakthrough in treatment occurred in the 2010s with direct-acting antivirals (DAAs). The approval of sofosbuvir (Sovaldi) in December 2013 marked a turning point — with cure rates exceeding 90–95%. DAAs replaced painful interferon-ribavirin therapies and made it possible to cure Hepatitis C in the majority of individuals, even those with advanced liver disease. Watch William's story — a Hepatitis C patient who was cured with DAAs.",
      videoUrl: "https://www.youtube.com/embed/qO-Xz0SC26E",
      xp: 10
    },
    {
      id: "c1t7",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — the big picture on drug value",
      title: "Tremendous benefits: drugs impact billions of lives",
      content: "Trikafta, AZT, statins, and DAAs provide clear examples of the enormous positive effects that pharmaceutical innovations can have on people and on society. There are many, many other important drugs like them, impacting billions of lives. It is highly probable that you or a loved one would not be alive right now if it were not for a medication developed through a rigorous, expensive, and lengthy process. Yet it's easy to take this innovation for granted. Most of us don't understand how the drug innovation process happens, nor why it is so costly.",
      xp: 10
    },
    {
      id: "c1t8",
      level: "green",
      type: "video",
      contextNote: "Introduces why drug prices are complex — accessible to all",
      title: "Medications cost a lot — the Investor's Paradox",
      content: "Every day, millions of people suffering from chronic health conditions take medication that dramatically improves their quality of life. While most of us can see the importance and value of these drugs, there is a lot of controversy around how these medications get developed and made available. We've all heard about greedy drug companies charging apparently obscene amounts for life-saving medication. But in reality, things are much more complicated. Watch Peter Kolchinsky explain the Investor's Paradox — how biotech investors think about funding the drug development process.",
      videoUrl: "https://www.youtube.com/embed/LOv6gPfAtgU",
      xp: 10
    },
    {
      id: "c1t9",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on the value discussion — a key framework for the whole course",
      title: "The Mortgage vs Rent model of healthcare spending",
      content: "The Mortgage Model: imagine buying a home with a 15-year mortgage at $2,500/month versus renting at $2,000/month. Though more expensive short-term, a mortgage is finite — after 15 years you own the house outright. Similarly, branded drugs are temporarily expensive to generate a return for those who developed them. But after a defined period (the drug's patent life), the patent expires and generics enter the market, bringing costs down dramatically. Drugs are the only aspect of our healthcare system that operate on a mortgage model. The Rent Model: practically every other aspect of healthcare operates on a rent model — surgery, doctors' visits, hospital stays — their prices continually increase with costs of land and labor and can never 'go generic'.",
      xp: 15
    },
    {
      id: "c1t10",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on Mortgage vs Rent — introduces the MPI framework",
      title: "The Biotech Social Contract",
      content: "The Mortgage Model represents a cornerstone of what we call the Biotech Social Contract — an implicit agreement between the biotechnology industry and society. In this agreement, drug makers commit to making medicines that will go generic without undue delay (after a patent-defined mortgage period), and in exchange, society will make all medicines accessible to patients through proper insurance — meaning a patient's costs must be low enough that they can afford the medicine. The biotech social contract requires MPI: Market-based pricing for a Patent-defined period of time, made affordable via proper Insurance. This is the heart of affordable innovation.",
      xp: 15
    },
    {
      id: "c1t11",
      level: "red",
      type: "reading",
      contextNote: "Assumes familiarity with the mortgage model — policy nuance",
      title: "When the social contract breaks down: high out-of-pocket costs",
      content: "Some patients can't afford the medicines they need because they either aren't insured or their insurance saddles them with high out-of-pocket costs for appropriately prescribed medicines that the insurance plan claims to cover. High out-of-pocket costs violate the biotech social contract, making people angry and prompting calls for solutions. The answer is a combination of insurance reform and price controls — but these fixes have to be applied correctly. This course will teach you to tell the difference between sound and unsound reforms so you can advocate for the former.",
      xp: 15
    },
    {
      id: "c1t12",
      level: "red",
      type: "reading",
      contextNote: "Assumes familiarity with the social contract — gets into reform territory",
      title: "Patent gaming and violations of the social contract",
      content: "Some medicines don't go generic after their initial patents expire, either through dodgy patent gaming or because they are too complex for other companies to copy. The end result is that society ends up paying high prices even after paying off the mortgage — like being charged rent for your own home. These violations of the biotech social contract prompt calls for price controls and insurance reform. But these solutions must be implemented correctly: imposing price controls well before a drug was meant to go generic could unravel affordable innovation entirely.",
      xp: 15
    },
    {
      id: "c1t13",
      level: "yellow",
      type: "video",
      contextNote: "Real industry voices on the social contract dynamic",
      title: "Industry executives on the innovation-access dynamic",
      content: "Executives working to discover new cures for autoimmune disorders discuss the dynamic between innovation incentives and patient access — a real-world perspective on the social contract in action.",
      videoUrl: "https://www.youtube.com/embed/ENzq15sPVNs",
      xp: 10
    },
    {
      id: "c1t14",
      level: "yellow",
      type: "quiz",
      contextNote: "Tests the mortgage model and social contract — review above first",
      title: "Check your understanding 1.1: the benefits of drug development",
      xp: 20,
      questions: [
        {
          question: "What was the original purpose of AZT (azidothymidine)?",
          options: [
            "To improve immune system function",
            "To disable cancer cell replication",
            "To treat HIV/AIDS",
            "To block viral activity"
          ],
          correct: 1
        },
        {
          question: "Which model of healthcare spending applies to drug development?",
          options: [
            "The Rent Model — the price of drugs rises every year with land and labor",
            "The Mortgage Model — drugs are temporarily expensive, but after patents end, become available as a cheap public good",
            "The Investment Model — drugs are priced based on investor returns",
            "The Subsidy Model — drugs are funded by government until they reach patients"
          ],
          correct: 1
        },
        {
          question: "When drug companies attempt to extract 'rent' through patent-extending exercises after patents have expired, they are:",
          options: [
            "Breaking the Biotech Social Contract",
            "Honoring the Biotech Social Contract",
            "Offering a tremendous benefit to society",
            "Working with patent law as it was intended"
          ],
          correct: 0
        }
      ]
    },
    {
      id: "c1t15",
      level: "green",
      type: "summary",
      contextNote: "Review before moving to Chapter 2",
      title: "Chapter 1 summary",
      content: "In Chapter 1 we flipped the script on the usual conversation about drug pricing. Instead of focusing solely on high costs, we emphasised the dramatic impact and life-saving benefits of new medications. Key points: AZT was the first drug approved to treat HIV/AIDS, significantly extending lifespans. Statins dramatically reduce the risk of heart attack and have saved hundreds of millions of lives. DAAs offer a cure for Hepatitis C, a previously chronic and potentially deadly disease. The Mortgage vs Rent Model shows that what society spends on branded drugs before they go off-patent is a finite mortgage that rewards innovation — after which the drug becomes an inexpensive public good. The Biotech Social Contract is an implicit agreement: drug makers commit to making medicines that will go generic, and in exchange, society ensures medicines are accessible to patients through proper insurance.",
      xp: 10
    }
  ]
};

export default chapter1;
