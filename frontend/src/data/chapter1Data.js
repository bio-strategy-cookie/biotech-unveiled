const chapter1 = {
  id: 1,
  title: "Why Develop New Drugs?",
  topics: [
    {
      id: "c1t1",
      level: "green",
      type: "reading",
      contextNote: "Why we start with benefit, not price",
      title: "Flipping the script",
      coreConcept:
        "Before we talk about what drugs cost, we need to talk about what they've actually done. The benefit case almost never gets made — which is why the cost debate is so distorted.",
      content:
        "Before we get into deeper discussions about drug pricing, let's start with the benefits of drug development.\n\nZoey was diagnosed with cystic fibrosis (CF) shortly after birth. As recently as a few years ago, many children with CF did not survive past childhood, and life expectancy for adults with CF was often limited to their 20s or 30s. Watch how the new drug **Trikafta** has dramatically changed the course of her life:\n\nMost conversations about drugs start with price. This one starts with benefit.\n\nZoey's story — the young woman whose life was transformed by Trikafta — is only one of millions of lives saved in the US every day because of access to lifesaving treatment. Her experience could have been vastly different had she lived before Trikafta was developed, or had she not been able to access the drug.\n\nIn an era where discussions about prescription drugs are often centered around high costs and inadequate access, it is important to recognize that **the development of new drugs has brought about profound and far-reaching benefits to society.** Not only have drugs positively impacted our individual longevity, health and well-being — they have also dramatically improved the collective health of societies and economies around the world.\n\nIn this chapter: three drugs that changed medicine, the mental model that makes drug pricing make sense, and the implicit deal that holds the whole system together.",
      keyPoints: [
        "**AZT** — turned HIV from a death sentence into a manageable chronic condition",
        "**Statins** — reduced heart attack risk by 30–40% for hundreds of millions of people",
        "**DAAs** — cured Hepatitis C, a disease previously considered incurable",
        "**The Mortgage Model** — why high drug prices during the patent period are temporary by design",
        "**The Biotech Social Contract** — the deal between drug makers and society that makes it all work",
      ],
      videoUrl: "https://www.youtube.com/embed/jy6rO_pA2ZY",
      watchFor: "As you watch Zoey's story, think about what Trikafta would be worth to you if you or someone you loved had CF. This question — 'worth it to whom, and at what cost?' — is at the heart of everything this course explores.",
      xp: 10,
    },
    {
      id: "c1t2",
      level: "green",
      type: "video",
      contextNote: "First stop: a failed cancer drug that became the first weapon against HIV",
      title: "AZT: the drug that came back from the dead",
      coreConcept:
        "AZT was a failed cancer drug shelved for 20 years — until AIDS emerged and it became the first medication to treat the disease. This is how drug discovery actually works.",
      content:
        "**AZT (azidothymidine)** was originally developed in 1964 as a potential cancer treatment. The mechanism: insert itself into the DNA of a cancer cell and disable its ability to replicate and produce more tumor cells. It failed in animal tests and was shelved.\n\nTwo decades later, after AIDS emerged, the pharmaceutical company Burroughs Wellcome began evaluating a massive number of potential anti-HIV agents, hoping to find anything that might work against this new and terrifying viral foe. Among the compounds evaluated was a reformulated version of AZT. When put into a dish with animal cells infected with HIV, it blocked the virus's activity.\n\nThe FDA approved AZT as the first medication to treat AIDS on **March 19, 1987** — just 25 months after the first demonstration that AZT was active against HIV in the laboratory. That speed was unprecedented at the time.\n\nBefore the availability of AZT, an HIV/AIDS diagnosis was often considered a death sentence. Today there are several more sophisticated classes of HIV drugs, each designed to block the virus at specific points in its lifecycle. Used in combination, they have an excellent chance of keeping HIV at bay indefinitely — lowering the virus's ability to reproduce, infect, and ultimately cause death. These antiretroviral drugs have made it possible for millions of people diagnosed with HIV to live long and healthy lives, as long as they continue to take their medications. For many patients, therapy often still includes AZT.\n\nWatch this short film to hear the story of AZT's development — and what it meant for the people who needed it.",
      videoUrl: "https://www.youtube.com/embed/SqhuL0q-3S0",
      watchFor:
        "The speed of AZT's approval — 25 months from lab to patients — was unprecedented at the time. Notice what made that possible, and what it required.",
      stats: [
        { value: "1964", label: "AZT first developed (for cancer)" },
        { value: "1987", label: "FDA approval for HIV/AIDS" },
        { value: "25 mo", label: "Lab demonstration to approval" },
        { value: "38M+", label: "People living with HIV globally today" },
      ],
      didYouKnow:
        "AZT is one of medicine's most striking examples of drug repurposing — a compound that failed for one disease becoming life-saving for another. The same mechanism that couldn't stop cancer cells turned out to be exactly what was needed to block HIV replication. The compound was sitting in a freezer for 20 years before anyone thought to try it against AIDS.",
      xp: 10,
    },
    {
      id: "c1t3",
      level: "green",
      type: "video",
      contextNote: "Second stop: a molecule from a Japanese fungus that prevents heart attacks at scale",
      title: "Statins: how a fungus changed cardiovascular medicine",
      coreConcept:
        "Statins prevent heart attacks by lowering LDL cholesterol and reducing arterial inflammation — and they've saved or extended hundreds of millions of lives. Today they're a $5 generic.",
      content:
        "**Statins** (HMG-CoA reductase inhibitors) are a class of lipid-lowering medications that reduce illness and mortality in people at high risk of heart disease. **Lipitor (atorvastatin) and other statins significantly lower cholesterol and reduce the risk of heart attack by 30–40%.** They slow the progression of atherosclerosis by reducing inflammation and promoting the stability of arterial plaques. They can also improve the function of the endothelium — the inner lining of blood vessels — leading to better blood flow and less stress on the heart.\n\nThe story started in 1971. **Akira Endo**, a Japanese biochemist working for the pharmaceutical company Sankyo, identified mevastatin — a molecule produced by the fungus *Penicillium citrinum* — and demonstrated it could lower cholesterol in the lab. Although mevastatin wasn't ultimately found to be safe for use in humans, Endo's work opened the floodgates for further research that led to the development of many safe and effective statin drugs. In 2012, Endo was inducted into the National Inventors Hall of Fame.\n\nHeart disease is one of the leading causes of death worldwide. The number of lives saved or extended by statins is in the **hundreds of millions**. And today, Lipitor is a cheap generic — a $5/month drug that was once a $130/month blockbuster. Watch how that journey unfolded.",
      videoUrl: "https://www.youtube.com/embed/5LkZIXgaXno",
      watchFor:
        "Notice how Endo's discovery happened in an unexpected place — a fungus — and how many years passed between his discovery and a drug that actually reached patients. This gap is normal, not exceptional.",
      stats: [
        { value: "30–40%", label: "Reduction in heart attack risk" },
        { value: "100M+", label: "Lives saved or extended" },
        { value: "~$5/mo", label: "Generic statin cost today" },
        { value: "1971", label: "Year of Endo's original discovery" },
      ],
      quote: {
        text: "The millions of people whose lives will be extended through statin therapy owe it all to Akira Endo.",
        attribution:
          "Michael S. Brown & Joseph Goldstein, Nobel Prize winners in Medicine",
      },
      whyItMatters:
        "Lipitor's story is what the Biotech Social Contract looks like when it works: a transformative drug generates returns for investors during its patent period, then becomes a cheap permanent public good. That's the design — not an accident.",
      xp: 10,
    },
    {
      id: "c1t4",
      level: "green",
      type: "video",
      contextNote: "Third stop: turning a chronic death sentence into a 12-week cure",
      title: "DAAs: curing Hepatitis C",
      coreConcept:
        "Direct-acting antivirals didn't just treat Hepatitis C — they cured it. In 12 weeks. This is one of the most remarkable therapeutic achievements of the past 30 years.",
      contentBlocks: [
        {
          type: "text",
          content:
            "Over **58 million people** globally have chronic Hepatitis C — a viral infection that primarily affects the liver. Effects include joint pain, fatigue, jaundice, cirrhosis, liver failure, and liver cancer. About 1.5 million new infections occur each year.\n\nTo understand how dramatic the change was, here is what treatment looked like **before DAAs**:\n\n• **Duration:** 48 weeks of weekly interferon injections + daily ribavirin pills\n• **Side effects:** severe and debilitating — flu-like symptoms, anemia, depression\n• **Cure rate:** approximately 40%\n• Many patients couldn't complete the full course because of the side effects",
        },
        {
          type: "image",
          url: "/images/ch1_img4.png",
          caption: "Hepatitis C treatment before direct-acting antivirals",
        },
        {
          type: "text",
          content:
            "A significant breakthrough occurred in the 2010s with the development of **direct-acting antivirals (DAAs)**. The FDA approved the first DAAs in 2011. The landmark moment: **sofosbuvir (brand name Sovaldi)** was approved in December 2013. In combination with other DAAs, sofosbuvir achieved cure rates **exceeding 90–95%** — even in patients with advanced liver disease.",
        },
        {
          type: "image",
          url: "/images/ch1_img1.png",
          caption: "Hepatitis C treatment today with direct-acting antivirals",
        },
        {
          type: "text",
          content:
            "DAAs have since become the standard of care: 8–12 weeks of treatment, minimal side effects, and cure rates that would have been unimaginable in 2010. **They made it possible to cure Hepatitis C in the majority of patients** — even those with advanced liver disease. Not manage it. Not slow it down. Cure it.\n\nWilliam is one of those patients. Watch his story.",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/qO-Xz0SC26E",
          caption: "William's story: from cirrhosis to cured",
        },
      ],
      stats: [
        { value: "58M", label: "People with chronic Hep C globally" },
        { value: "90–95%", label: "Cure rate with DAAs" },
        { value: "12 wks", label: "Typical treatment duration today" },
        { value: "40%→95%", label: "Cure rate improvement" },
      ],
      whyItMatters:
        "DAAs didn't just improve Hepatitis C treatment — they made the disease curable. This is one of the few times in medicine where a major chronic viral infection has been fully eliminated in the vast majority of patients. Treatments like this significantly extend life expectancy and quality of life for millions who have been infected.",
      xp: 10,
    },
    {
      id: "c1t5",
      level: "green",
      type: "reading",
      contextNote: "The mental model that makes drug pricing make sense",
      title: "The Mortgage Model: why drug costs are temporary",
      coreConcept:
        "High drug prices during the patent period aren't permanent — they're a mortgage. Once paid off, the drug belongs to everyone, forever, at near-zero cost. Nothing else in healthcare works this way.",
      content:
        "Here's a question: if you can rent a house for $2,000/month or buy it with a $2,500/month mortgage, why would you ever buy?\n\nBecause **a mortgage ends. Rent doesn't.**\n\nYou know you can rent a similar place in the area for $2,000/month. The mortgage costs more in the short term. But after 15 years, you **own** the house outright and never have to make a mortgage payment again — while your rent over the same period has likely increased every year. Making a decision to rent or buy based only on the price you'll pay today is shortsighted. Deciding to rent forever because it's cheaper now will cost you much more in the long run.\n\n**Drug pricing works exactly the same way.** When a drug is under patent, its price is high — that's the \"mortgage\" paying back the billions spent developing it (akin to how a mortgage pays off the builders who built your home). When the patent expires and generic competition enters the market, the price collapses by 80–95%. What was a $300,000/year drug becomes a $5/month generic. Society paid the mortgage. Now it owns the asset permanently.\n\n**The Rent Model: everything else in healthcare**\n\nPractically every other aspect of our healthcare system operates on a rent model, in which the price of a service continually increases with the costs of land and labor. Surgery, hospital stays, and doctor visits can never go generic — their costs rise with inflation every year. Even though most basic plumbing patents expired long ago, the price of hiring a plumber today can still be exorbitant. A surgeon's skill doesn't expire.\n\n**Drugs are the only aspect of our healthcare system that operates on a mortgage model.** Hospital care, nursing homes, surgery — these will always cost more year over year. Drugs — at least those that go generic as intended — are a finite cost that ends.",
      keyPoints: [
        "**Mortgage model (drugs):** High patent-period price → generic forever after expiry → society owns the drug permanently at near-zero cost",
        "**Rent model (everything else):** Surgery, hospitals, nursing homes → costs rise every year, never decrease, never go generic",
        "Branded drugs are the only healthcare spending that ends — which makes them uniquely cost-effective over time when viewed from a societal perspective",
        "When a drug goes generic, society only has to pay enough to keep it in production — far less than the R&D costs that went into inventing it",
      ],
      stats: [
        { value: "20 yrs", label: "US patent term from filing" },
        { value: "7–12 yrs", label: "Typical effective exclusivity post-approval" },
        { value: "90%", label: "Of all US prescriptions filled as generics" },
        { value: "80–95%", label: "Typical price drop when generic enters" },
      ],
      pauseAndThink:
        "Think about a healthcare cost you or a family member has paid recently — a doctor visit, a hospital procedure, a generic drug. Which model does each one fit? What does that mean for how society should think about those costs over time?",
      xp: 15,
    },
    {
      id: "c1t6",
      level: "green",
      type: "video",
      contextNote: "The deal that holds the whole system together — and what happens when it breaks",
      title: "The Biotech Social Contract",
      coreConcept:
        "The Mortgage Model isn't just an analogy — it describes an implicit deal between drug makers and society. Both sides have obligations. When either side breaks the deal, patients suffer.",
      content:
        "The **Biotech Social Contract** is an implicit agreement between the biotechnology industry and society. In this agreement, drug makers tacitly commit to making medicines that will go generic without undue delay — after a patent-defined 'mortgage' period. In exchange, society will make all medicines accessible to patients who need them through proper insurance, which means that a patient's costs have to be low enough that they can actually afford the medicine.\n\nThe shorthand for a functioning system: **MPI**\n- **M**arket-based pricing — during the patent period, the price reflects the value of the innovation\n- **P**atent-defined period — a finite window of exclusivity, not a permanent monopoly\n- **I**nsurance — proper coverage that keeps patient out-of-pocket costs affordable\n\nThe Biotech Social Contract is at the heart of **affordable innovation**. This is an ideal, and many of the problems we will discuss stem from when this ideal is violated.\n\n**How the contract breaks — and why both failures generate the same anger:**\n\nSome drugs don't go generic after their initial patents expire — through patent thickets, supply chain manipulation, or manufacturing complexity too high for generic makers to replicate. Society ends up paying high prices even after it paid off the mortgage. This is like being charged rent for your own home.\n\nSome patients can't afford their medicines because they either aren't insured or their insurance saddles them with high out-of-pocket costs for appropriately prescribed medicines the plan claims to cover.\n\nBoth violations generate the same public anger and calls for reform. But they have different causes — and require different solutions. The answer is a combination of insurance reform and price controls, but these fixes have to be applied correctly. Price controls imposed well before a drug was meant to go generic would unravel affordable innovation by removing the investment incentives that fund future drug development.\n\nWatch Peter Kolchinsky explain the **Investor's Paradox** — why high patent-period prices are necessary in the first place. If the reward for the rare drug that succeeds isn't large enough, investors stop funding the 99 that fail. No investors, no Social Contract.",
      videoUrl: "https://www.youtube.com/embed/LOv6gPfAtgU",
      watchFor:
        "Peter explains the Investor's Paradox — why high patent-period prices are necessary in the first place. If the reward for the rare drug that succeeds isn't large enough, investors stop funding the 99 that fail. No investors, no Social Contract.",
      whyItMatters:
        "Misdiagnosing the problem leads to the wrong cure. Price controls applied to fix an insurance failure don't help patients — but they do destroy the investment incentives that fund future drugs. This course will teach you to tell the difference between sound and unsound reforms — and to recognize when proposed solutions, if implemented, would harm the patients they're meant to help.",
      deepDive: [
        {
          label:
            "'Let's Throw a Patent-Burning Party' — Peter Kolchinsky, Wall Street Journal",
          description:
            "Why drug companies should celebrate when their drugs go generic — and what it means for the Social Contract when they don't.",
          url: "https://www.wsj.com/articles/lets-throw-a-patent-burning-party-1538329275",
          urlLabel: "Read the op-ed →",
        },
      ],
      videoUrl2: "https://www.youtube.com/embed/ENzq15sPVNs",
      videoUrl2Caption: "Executives working to discover new cures for autoimmune disorders discuss this dynamic — the Biotech Social Contract in practice.",
      xp: 15,
    },
    {
      id: "c1t7",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding before moving on",
      title: "Check your understanding: Why develop new drugs?",
      content: "",
      xp: 20,
      questions: [
        {
          question:
            "What was the original purpose of AZT when it was first developed in 1964?",
          options: [
            "To treat HIV/AIDS",
            "To insert into cancer cell DNA and disable its ability to replicate",
            "To lower LDL cholesterol",
            "To cure Hepatitis C",
          ],
          correct: 1,
        },
        {
          question:
            "How did Akira Endo make his breakthrough discovery that led to statins?",
          options: [
            "By screening thousands of synthetic compounds in a lab",
            "By studying patients with naturally low cholesterol",
            "By isolating a molecule from the fungus Penicillium citrinum that inhibited cholesterol synthesis",
            "By repurposing a failed cardiac drug",
          ],
          correct: 2,
        },
        {
          question:
            "What was Hepatitis C treatment like BEFORE direct-acting antivirals?",
          options: [
            "12 weeks of oral medication with minimal side effects and a 90%+ cure rate",
            "48 weeks of interferon injections plus ribavirin, with severe side effects and only a ~40% cure rate",
            "A once-yearly injection with moderate side effects and a 70% cure rate",
            "An indefinite daily pill regimen with no cure possible",
          ],
          correct: 1,
        },
        {
          question:
            "In the Mortgage Model, what does the 'mortgage payment' represent?",
          options: [
            "The monthly cost patients pay for their medication",
            "The temporary high price of a branded drug before it goes generic",
            "The annual revenue a drug company earns on a blockbuster",
            "The cost of building a pharmaceutical manufacturing plant",
          ],
          correct: 1,
        },
        {
          question:
            "Which part of healthcare operates on a Rent Model rather than a Mortgage Model?",
          options: [
            "Branded drugs under patent",
            "Generic drugs",
            "Hospital care, surgery, and doctor visits",
            "Over-the-counter medications",
          ],
          correct: 2,
        },
        {
          question:
            "What does MPI stand for in the context of the Biotech Social Contract?",
          options: [
            "Maximum Pricing Index",
            "Market-based pricing for a Patent-defined period, made affordable through proper Insurance",
            "Medicare Prescription Insurance",
            "Minimum Patent Investment",
          ],
          correct: 1,
        },
        {
          question:
            "A drug company that uses a patent thicket to prevent its drug from going generic is:",
          options: [
            "Honoring the Biotech Social Contract",
            "Breaking the Biotech Social Contract",
            "Acting within the original intent of the patent system",
            "Protecting future innovation",
          ],
          correct: 1,
        },
        {
          question:
            "According to the Investor's Paradox, why must patent-period prices be high enough?",
          options: [
            "To cover the cost of post-marketing surveillance",
            "Because the FDA requires pricing above manufacturing cost",
            "If the reward for the rare successful drug isn't large enough, investors stop funding the many candidates that fail — eliminating future drug development",
            "To fund patient assistance programs for low-income patients",
          ],
          correct: 2,
        },
      ],
    },
  ],
};
 
export default chapter1;