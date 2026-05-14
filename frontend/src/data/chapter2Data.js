const chapter2 = {
  id: 2,
  title: "Where Do New Drugs Come From?",
  topics: [
    {
      id: "c2t1",
      level: "green",
      type: "video",
      contextNote: "Why curing disease is one of the hardest things humans attempt",
      title: "The long road from molecule to medicine",
      coreConcept:
        "Every drug on a pharmacy shelf represents years of scientific uncertainty, financial risk, and human hope. Most candidates never make it. Understanding why is essential context for everything that follows.",
      content:
        "Imagine discovering a molecule that could save lives.\n\nNow imagine spending 10–15 years developing it, billions of dollars testing it, and thousands of hours running clinical trials — only for it to fail.\n\nThat is the reality of drug development for the vast majority of candidates. *The Human Trial* documentary captures what this journey feels like from the inside — the scientific uncertainty, the financial pressure, and the patients waiting. The film follows the struggles — scientific, financial, and emotional — of finding a cure for diabetes, which is just one condition among thousands.\n\nBefore we get into deeper discussions about drug pricing, we need to understand what is actually involved in developing a new drug. Watch the trailer, then we'll walk through every stage of the process.",
      videoUrl: "https://www.youtube.com/embed/EG_qvB7yGpg",
      watchFor:
        "Notice what drives the researchers and patients to keep going despite the odds. That human motivation — alongside financial incentives — is what sustains the entire drug development system.",
      pauseAndThink:
        "Before reading on — take your best guess: How long does it take to develop a drug? What percentage of candidates ever reach patients? How many new drugs does the FDA approve per year? Write down your answers. We'll revisit them.",
      xp: 10,
    },
    {
      id: "c2t2",
      level: "green",
      type: "video",
      imageUrl: "/images/ch2_img1.jpg",
      contextNote: "Watch the full process before we go through each stage in detail",
      title: "The drug development process: a 7-minute overview",
      coreConcept:
        "The full journey from discovery to approval takes 10–15 years on average. Seeing the complete arc first makes each stage easier to place — and the costs easier to understand.",
      content:
        "The following 7-minute video provides a clear and engaging overview of the entire drug development process. Watch it now — it will make the detailed breakdown that follows much easier to follow.\n\nAs you watch, think about what the potential cost of each step might be. Every stage requires specialized scientists, equipment, and time — and most of it produces candidates that ultimately fail. The whole thing takes a significant amount of time and involves many hurdles and unforeseen challenges at every step.",
      videoUrl: "https://www.youtube.com/embed/WUsO6PH_O54",
      watchFor:
        "As each stage is described, ask yourself: what question is this stage trying to answer? And what does it cost — in time and money — to get the answer?",
      stats: [
        { value: "10–15 yrs", label: "Average time from discovery to approval" },
        { value: "<10%", label: "Of drugs entering clinical trials reach approval" },
        { value: "<1%", label: "Overall success rate from discovery to market" },
        { value: "~43", label: "New drugs approved by FDA per year (10-yr avg)" },
      ],
      xp: 10,
    },
    {
      id: "c2t3",
      level: "green",
      type: "reading",
      imageUrl: "/images/ch2_img9.png",
      imageSide: true,
      contextNote: "Stages 1–3: from discovery to the first human test",
      title: "Discovery, preclinical research, and the IND application",
      coreConcept:
        "Before any drug reaches a human being, it survives years of laboratory and animal testing. Most candidates fail here — before the really expensive part even begins.",
      content:
        "The drug development timeline begins long before any patient takes a dose. The infographic shows the full FDA approval journey — from compound discovery through clinical phases, NDA review, facility inspection, and drug labeling. Here is what each of the early stages involves.\n\nAs you can see, there are many steps in bringing a drug candidate from the laboratory to the clinic, and the whole process takes a significant amount of time — around 10–15 years on average. Conducting rigorous, careful science while patients' lives hang in the balance is anything but fast and easy.",
      keyPoints: [
        "**Stage 1 — Discovery (2–10 years):** Researchers identify a potential drug target — a specific molecule, protein, or biological pathway associated with a disease — then search for compounds that might interact with it therapeutically. This phase is highly variable. Most ideas fail before moving further. The starting point is often basic science from academic labs, frequently funded by the NIH. Timeline is highly variable (typically 2–10 years).",
        "**Stage 2 — Preclinical Research (1–3 years):** Before any human is exposed to the drug, it is tested in cell cultures (in vitro) and animal models (in vivo). Researchers assess safety signals, collect evidence of efficacy, study potential toxicity, and determine safe dose ranges. The majority of candidates fail here — either because they don't work well enough or because they cause unacceptable harm in animals. A compound that looks promising in a petri dish may behave completely differently in a living organism. A molecule that works in mice may not work in humans.",
        "**Stage 3 — IND Application (30-day FDA review):** Before any human testing can begin, the drug's sponsor submits an Investigational New Drug (IND) application to the FDA. This includes all key preclinical data, manufacturing and quality information, and the proposed clinical trial plan. If the FDA does not place the application on clinical hold within 30 days, human trials can begin.",
        "**Why so many fail early:** The biology of disease is extraordinarily complex. These early failures are the essential filter that prevents unsafe or ineffective compounds from ever reaching a patient. A compound that clears all three early stages has demonstrated: it can engage the right biological target, there is evidence it might help patients, it appears safe enough to test in humans, and it can be manufactured consistently.",
        "**What it takes to pass all three:** Only after clearing discovery, preclinical research, and IND review does the far more expensive clinical phase begin. Every compound that makes it this far represents years of scientific work — and the attrition continues.",
      ],
      didYouKnow:
        "Fewer than 10% of drug candidates that enter preclinical testing ever make it into clinical trials. The vast majority are eliminated before a single human ever receives a dose — which is exactly what the preclinical stage is designed to do. This filter exists to protect patients.",
      xp: 10,
    },
    {
      id: "c2t4",
      level: "green",
      type: "reading",
      imageUrl: "/images/ch2_img2.jpg",
      contextNote: "Stages 4–6: three phases of human testing, each larger and more demanding",
      title: "Clinical trials: Phase I, II, and III",
      coreConcept:
        "Clinical trials answer three questions in sequence: Is it safe in humans? Does it work in patients? Is it better than what we already have? Each phase is larger, more expensive, and harder to pass.",
      content:
        "Once an IND is approved, the drug enters clinical trials — the most expensive and time-consuming phase of development. The three phases are sequential: a drug must pass each one before advancing. This timeline varies based on factors like the complexity of the disease being targeted, how efficiently clinical trials can be run, how difficult it is to meet regulatory requirements, and managing unforeseen challenges along the way.",
      keyPoints: [
        "**Phase I — Safety (1–2 years):** A small group of usually-healthy volunteers — though sometimes patients, particularly in diseases like cancer — take the drug. Investigators assess safety, explore dosage ranges, and monitor for side effects. This timeline varies with the drug's complexity and the number of dose levels evaluated. The goal is to establish that the compound can be given to humans without unacceptable harm.",
        "**Phase II — Efficacy and Safety (2–3 years):** Several dozen to several hundred patients who have the targeted disease or condition receive the drug. The goal: evaluate whether it actually works, identify which patients benefit most, and continue assessing safety. Phase II trials typically last one to two years or longer if patient recruitment or follow-up is difficult. Many promising drugs that survived Phase I fail here — early scientific promise often doesn't translate into meaningful patient benefit.",
        "**Phase III — Confirmation at Scale (2–5 years):** Several hundreds to thousands of patients across multiple sites compare the new treatment against existing therapies or a placebo. This stage confirms the drug's benefits outweigh its risks at scale, monitors side effects across a large and diverse population, and is typically required by the FDA before approval. Phase III trials often cost hundreds of millions of dollars. Success here leads to an NDA submission.",
        "**Accelerated pathways:** For orphan diseases and some cancers, the process can be modified and shortened — for example, starting Phase I trials in patients rather than healthy volunteers (Phase 1b studies), or allowing accelerated approval based on Phase 2b results with full approval confirmed by post-marketing studies.",
      ],
      deepDiveType: "drawer",
      deepDive: [
        {
          label: "What a real Phase II trial result looks like",
          description:
            "89bio's ENLIVEN trial for pegozafermin (liver disease) — a press release showing how Phase II results are reported to the public and investors.",
          url: "https://www.globenewswire.com/news-release/2023/03/22/2632062/0/en/89bio-s-Phase-2b-ENLIVEN-Trial-of-Pegozafermin-in-Nonalcoholic-Steatohepatitis-NASH-Achieved-High-Statistical-Significance-on-Both-Primary-Histology-Endpoints-with-Weekly-QW-and-Ev.html",
          urlLabel: "Read the press release →",
        },
        {
          label: "Pfizer COVID-19 Phase III trial data",
          description:
            "The landmark Phase III study involving over 46,000 participants — the fastest large-scale Phase III trial in history.",
          url: "https://www.pfizer.com/news/press-release/press-release-detail/pfizer-and-biontech-conclude-phase-3-study-covid-19-vaccine",
          urlLabel: "Read the data →",
        },
        {
          label: "Moderna COVID-19 Phase III trial data",
          description:
            "Moderna's Phase III efficacy analysis, submitted to the FDA for Emergency Use Authorization.",
          url: "https://www.businesswire.com/news/home/20201130005506/en/Moderna-Announces-Primary-Efficacy-Analysis-in-Phase-3-COVE-Study-for-Its-COVID-19-Vaccine-Candidate-and-Filing-Today-with-U.S.-FDA-for-Emergency-Use-Authorization",
          urlLabel: "Read the data →",
        },
      ],
      pauseAndThink:
        "By the time a drug reaches Phase III, a company may have already spent hundreds of millions of dollars — with no guarantee the trial succeeds. If Phase III fails, all of it is gone. How does that reality shape which diseases and patient populations attract investment in the first place?",
      stats: [
        { value: "63%", label: "Of Phase I drugs advance to Phase II" },
        { value: "30%", label: "Of Phase II drugs advance to Phase III" },
        { value: "58%", label: "Of Phase III drugs win FDA approval" },
        { value: "~$100M+", label: "Typical Phase III trial cost" },
      ],
      xp: 15,
    },
    {
      id: "c2t5",
      level: "green",
      type: "reading",
      contextNote: "Stage 7: what happens after trials succeed — and why approval isn't the end",
      title: "NDA submission, FDA approval, and post-marketing surveillance",
      coreConcept:
        "FDA approval means benefits outweigh known risks at that moment. Post-marketing surveillance exists because rare effects only become visible once millions of patients are using a drug — far more than any trial can enroll.",
      content:
        "After successful Phase III trials, the drug's sponsor submits a **New Drug Application (NDA)** to the FDA — a comprehensive dossier covering safety, efficacy, tolerability, manufacturing process, and proposed labeling. The FDA carefully reviews all submitted data to determine whether the drug's benefits outweigh its risks. This review includes an assessment of the drug's safety, efficacy, and quality. The FDA typically takes around **10 months** to complete this review. If approved, the drug can be marketed and made available to patients.\n\nFor orphan diseases and some cancers, this process can be modified and shortened — for example, starting Phase I trials in patients (often called Phase 1b studies) and potentially allowing for accelerated approval based on a Phase 2b study, with full approval granted after post-marketing studies are completed if they support it.\n\n**And just when you thought the process was over — it isn't.**\n\nOnce a drug is on the market, many companies conduct **post-marketing surveillance studies** — ongoing monitoring of the drug's safety and effectiveness in the real world. Phase III trials involve thousands of patients; real-world use can involve millions. Occasionally there are negative side effects that occur in only a small percentage of patients — and these are only discovered once the drug is being taken by a larger population than participated in the trial.\n\nA serious example: **Vioxx**, a painkiller that passed the rigorous FDA approval process, was later the subject of research published in *The Lancet* estimating that approximately 88,000 Americans had heart attacks resulting from taking Vioxx, and of those, approximately 38,000 people died. The drug was withdrawn from the market in 2004.",
      whyItMatters:
        "When a drug is withdrawn after approval, that is the post-market surveillance system working — not the approval system failing. The two stages serve different purposes and catch different problems. FDA approval reflects the evidence available at the time of review; post-marketing surveillance captures what only becomes visible at true population scale.",
      deepDive: [
        {
          label: "The rise and fall of Vioxx — NPR timeline",
          description:
            "A concise chronology of how Vioxx went from blockbuster approval to market withdrawal — including the science and the lawsuits.",
          url: "https://www.npr.org/2007/11/10/5470430/timeline-the-rise-and-fall-of-vioxx",
          urlLabel: "Read the timeline →",
        },
        {
          label: "Phenylephrine: an FDA-approved drug that may not work",
          description:
            "How a common cold medicine ingredient was grandfathered through pre-modern FDA standards and stayed on shelves for decades.",
          url: "https://www.npr.org/sections/health-shots/2023/11/30/1215702921/what-works-for-treating-the-common-cold-many-doctors-say-not-much",
          urlLabel: "Read the article →",
        },
      ],
      xp: 10,
    },
    {
      id: "c2t6",
      level: "green",
      type: "reading",
      imageUrl: "/images/ch2_img4.jpg",
      contextNote: "The numbers behind the whole process — and the real odds",
      title: "Scale, statistics, and the 1% success rate",
      coreConcept:
        "Tens of thousands of trials run globally every year to produce roughly 43 FDA approvals. Understanding the scale explains why successful drugs cost what they do.",
      content:
        "So what is the scale at which drug development actually happens? Before reading further, take a moment to guess:\n\n- About how many clinical trials happen globally each year?\n- How many new drugs get approved by the FDA each year?\n- What percentage of Americans have participated in a clinical trial?\n- How many clinical investigators are active in the US?\n\nHere are the answers:",
      stats: [
        { value: "35–40K", label: "Clinical trials registered globally per year" },
        { value: "12K", label: "Of those, in the US" },
        { value: "~43", label: "New drugs FDA-approved per year (10-yr avg)" },
        { value: "~5%", label: "Of Americans who have ever participated in a trial" },
      ],
      keyPoints: [
        "About **35,000–40,000 clinical trials** are registered with clinicaltrials.gov every year worldwide. Of these, about 12,000 are in the US.",
        "Over the past 10 years, an average of only **43 drugs** were approved by the FDA each year. That is the output of tens of thousands of trials, thousands of companies, and hundreds of billions in investment.",
        "Only about **5% of Americans** — roughly 16.5 million people — have ever participated in a clinical trial. Yet no drug can be approved without patient volunteers. This is one of the most significant bottlenecks in the system.",
        "There are approximately **45,000 active clinical investigators** in the US — a significant scientific workforce dedicated entirely to running the trials that produce new medicines.",
        "**The overall success rate from discovery to FDA approval is less than 1%.** Fewer than 10% of drugs entering preclinical testing make it into clinical trials. Of those: ~63% of Phase I drugs advance to Phase II; ~30% of Phase II drugs advance to Phase III; ~58% of Phase III drugs win approval.",
      ],
      deepDive: [
        {
          label: "What does a clinical investigator actually do? (2 min)",
          description:
            "A short video showing the day-to-day reality of the people who run clinical trials.",
          url: "https://youtu.be/31vdkWCb9iQ",
          urlLabel: "Watch →",
        },
      ],
      didYouKnow:
        "Every approved medicine represents the survivor of roughly 99 failed attempts. When you fill a prescription for $5 today, you are benefiting from a system that spent billions developing the 99 drugs that didn't make it alongside the one that did. Successful drugs that make it to the end represent substantial scientific and financial achievements for the scientists and companies involved.",
      xp: 10,
    },
    {
      id: "c2t7",
      level: "green",
      type: "reading",
      contextNote: "A once-in-a-generation exception — and what it reveals about normal timelines",
      title: "COVID-19 vaccines: what happens when every barrier is removed",
      coreConcept:
        "COVID vaccines were authorized in under a year — not by cutting corners, but by removing every possible friction simultaneously. This was the ceiling of what's possible, not the norm.",
      content:
        "The COVID-19 vaccine approval process demonstrates the maximum fastest possible timeline. Several factors contributed to this extraordinary success:\n\n- Assembly of an incredible team of the very best scientists globally, working in full coordination\n- Massive public and government support, with money essentially no object on the way to a solution\n- Significant disease prevalence across all ages and ethnicities, all over the world — making trial recruitment extremely fast\n- FDA emergency authorization, allowing vaccines to reach the public before full Phase III completion\n- **Operation Warp Speed's guaranteed purchase contracts** — which removed revenue uncertainty and allowed manufacturers to begin building production capacity before trials concluded. Pfizer did not accept government R&D funding but did sign a forward purchase contract. Moderna accepted both funding and a forward contract. Without that guaranteed revenue, neither company could have justified building manufacturing infrastructure in parallel with unfinished trials.\n\n**For contrast: the story of dimethyl fumarate (Tecfidera)**\n\nDimethyl fumarate was first proposed as a treatment for psoriasis in the 1950s by Walter Schweckendiek — but it wasn't commercialized until 1994, when Fumapharm AG received approval to sell it as a psoriasis treatment in Germany. In the 2000s, researchers proposed that it could also treat Multiple Sclerosis — an example of what scientists call **scientific spillover**, where insights from one disease open new possibilities in another. Clinical trials for MS began in 2004; the rights were acquired by Biogen, which completed trials by 2012 and received FDA approval in 2013.\n\nSo depending how you count, dimethyl fumarate took anywhere from 9 to roughly 60 years from initial proposal to US approval.\n\nAnd there are diseases we have been trying to solve for even longer — with no solution yet. There is still no cure for the common cold, no universal flu vaccine, and a plethora of conditions we can only treat with varying results and no real cure.",
      deepDiveType: "drawer",
      deepDive: [
        {
          label: "Operation Warp Speed: The Untold Story — Vanity Fair (Nov 2023)",
          description:
            "The full story of how COVID vaccines were developed at record speed — the science, the politics, the finance, and the people. Illuminates the complex interplay between science, money, and government that shapes all drug development.",
          url: "https://www.vanityfair.com/news/2023/10/operation-warp-speed-covid-19-vaccine",
          urlLabel: "Read the article →",
        },
        {
          label: "Egypt, Hepatitis C, and Gilead's gift — Peter Kolchinsky",
          description:
            "How Gilead licensed its Hep C cure to generic manufacturers for distribution throughout low-income countries — a case study in how IP and access can coexist.",
          url: "https://rapport.bio/all-stories/egypt-hcv-and-gileads-gift",
          urlLabel: "Read the article →",
        },
      ],
      whyItMatters:
        "COVID vaccines weren't fast because safety was compromised. They were fast because money, urgency, infrastructure, and political will all aligned around a single goal simultaneously. Most diseases will never generate that alignment — which is why normal development takes 10–15 years. The Tecfidera story is closer to reality for most drugs.",
      xp: 10,
    },
    {
      id: "c2t8",
      level: "green",
      type: "video",
      contextNote: "What the drug development system produces — and why it matters beyond the US",
      title: "The value of new medicines — to the US and the world",
      coreConcept:
        "The drug development system has transformed human life expectancy and healthcare worldwide. Its positive contributions rarely make the news — but they're worth understanding before we debate its costs.",
      content:
        "Those of us who live in the United States receive direct benefits from the current drug development process. Some of these are:\n\n- We gain access to a continuous pipeline of new and better treatments\n- We can feel confident in rigorous safety testing\n- We cure or mitigate new diseases that didn't previously have effective therapies\n- We can have confidence that ineffective or dangerous drugs will be pulled off the market\n- Our overall healthcare costs are driven down by keeping people out of hospitals\n- We enjoy increased life expectancy, productivity, and healthy years\n\nHow can we measure the value of new medicines? Watch this 3-minute video introducing the **Value Flower** — a framework for thinking about what medicines are actually worth. Then read about the global impact.",
      videoUrl: "https://www.youtube.com/embed/MUehueqYgBk",
      watchFor:
        "Notice how many 'petals' of value the conventional calculation ignores. When you hear debates about whether a drug is worth its price, ask: worth it by which calculation?",
      keyPoints: [
        "**1. R&D leadership:** The innovation and substantial investment in R&D that happens in the US contributes to cutting-edge treatments that benefit populations worldwide. Diseases and health conditions don't adhere to national borders — breakthroughs made in the United States frequently improve healthcare outcomes and save lives globally.",
        "**2. Global access to medicines and vaccines:** US biopharma companies collaborate with international organizations, governments, and nonprofit entities to improve access to treatments in low- and middle-income countries — particularly for HIV/AIDS, malaria, tuberculosis, and neglected tropical diseases. This topic is not without debate: many think companies should do even more. But even those critical of the industry agree that access to these treatments is vital to global health. The US market primarily incentivizes drug development, and the rest of the world benefits from that investment.",
        "**3. Technological innovation and knowledge sharing:** Collaborations, research partnerships, and the open dissemination of scientific information contribute to the collective advancement of medical science worldwide. This nurtures a culture of shared expertise that benefits researchers, healthcare professionals, and patients globally.",
        "**4. Economic contribution and job creation:** US biopharma's global operations create jobs, support research collaborations, and stimulate economic growth in countries around the world — through manufacturing facilities, research centers, and partnerships with entities outside the US.",
      ],
      whyItMatters:
        "The US market primarily incentivizes drug development — and the rest of the world benefits from that investment. This context matters enormously when evaluating proposals to limit US drug prices to match those of other countries. Unfortunately, the biopharmaceutical industry's positive contributions rarely make the news. There are bad actors in this industry, as there are in every industry. But it is important to appreciate the positive aspects of this work alongside the negative.",
      xp: 10,
    },
    {
      id: "c2t9",
      level: "green",
      type: "reading",
      contextNote: "The full cast of characters who make drug development possible",
      title: "Key players in the drug development ecosystem",
      coreConcept:
        "No single organization develops a drug alone. Understanding each player's role — and incentives — is essential for making sense of debates about who funds what, who profits, and who should be held accountable.",
      content:
        "Drug development depends on an entire ecosystem working in coordination. These entities collaborate and interact within a complex system, contributing different expertise and resources in order to develop and deliver safe and effective drugs to patients. Each player has a distinct role:",
      keyPoints: [
        "**Academic & research institutions:** Universities, research centers, and academic institutions conduct fundamental research that identifies new drug targets, technologies, and basic scientific understanding that forms the foundation for drug development.",
        "**Government agencies and funding bodies (NIH):** Government agencies — especially the National Institutes of Health — provide grants and funding for research, supporting academic institutions and researchers working on various aspects of drug discovery and development. Critical for early basic science, but not the primary funder of drug development itself. (More on this in Chapter 3.)",
        "**Investors and venture capital firms:** Investors provide funding for the research and development efforts of pharmaceutical and biotechnology companies. Venture capital firms often invest in early-stage companies working on innovative drug candidates — funding them through the years before any revenue exists. Without investors, most drug candidates would never reach clinical trials.",
        "**Biopharmaceutical companies:** These companies conduct research, discover potential drug candidates, run preclinical and clinical trials, seek regulatory approvals, manufacture, and commercialize new drugs. Small biotechs often focus on early-stage discovery; large pharma has the resources for late-stage trials and commercialization.",
        "**Contract Research Organizations (CROs) and Contract Manufacturing Organizations (CMOs):** Specialist companies that aid in different phases of drug development — managing clinical trials, handling data, ensuring regulatory compliance, and manufacturing drug substances and finished products. They allow drug developers to scale up without building everything in-house.",
        "**Patient advocacy groups, foundations, and individual patients:** Patients provide insights into the experience of living with a disease, articulate their needs to drug developers, and take on significant risk by participating in clinical trials — without which no drug can be approved. Advocacy groups also provide funding for research and engage in lobbying. For example: the **Alzheimer's Association** funds research into the causes, treatments, and potential cures for Alzheimer's disease and advocates for policies supporting people with dementia. The **Cystic Fibrosis Foundation** has invested significantly in funding CF research — including early support for the science that ultimately led to Trikafta.",
        "**Healthcare providers and clinicians:** Physicians, hospitals, and healthcare professionals conduct clinical trials, prescribe approved drugs, and provide real-world feedback on drug efficacy and safety.",
        "**The FDA:** The FDA (and similar regulatory bodies in other countries) oversees the drug approval process — evaluating safety, efficacy, and quality before granting approval, and monitoring safety after approval.",
        "**Payers and insurers (including PBMs):** Medicare, Medicaid, the VA, private employer-sponsored insurance plans, and ACA exchange plans collectivize healthcare costs for participants. With pharmacy benefit managers (PBMs), they negotiate net prices with drug companies and control which treatments plan members can access. Behind-the-scenes negotiations involving opaque middlemen can misalign incentives — leading to higher out-of-pocket costs for patients despite lower net prices. (Much more on this in Chapters 5–7.)",
      ],
      whyItMatters:
        "When critics say 'the government funded that drug,' they're usually conflating NIH basic science funding with drug development itself. These involve completely different activities, different risks, and different accountability structures. Understanding who does what — and what it actually costs — prevents the category confusion that drives a lot of bad policy proposals.",
      xp: 10,
    },
    {
      id: "c2t10",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding before moving on",
      title: "Check your understanding: Where do new drugs come from?",
      content: "",
      xp: 20,
      questions: [
        {
          question: "Which best describes Phase I clinical trials?",
          options: [
            "Hundreds to thousands of patients confirm efficacy and compare the drug to existing treatments. Timeframe: 2–5 years.",
            "A small group of usually-healthy volunteers evaluate safety, tolerability, and dosage ranges. Timeframe: 1–2 years.",
            "Animal studies assess a compound's safety and potential toxicity. Timeframe: 1–3 years.",
            "All clinical data is submitted to the FDA for evaluation and review.",
          ],
          correct: 1,
        },
        {
          question:
            "What is the overall success rate for a drug from discovery to FDA approval?",
          options: [
            "About 25%",
            "About 10%",
            "About 5%",
            "Less than 1%",
          ],
          correct: 3,
        },
        {
          question:
            "Which drug was withdrawn from the market based on post-marketing surveillance data linking it to increased cardiovascular risk?",
          options: ["AZT", "Trikafta", "Vioxx", "Lipitor"],
          correct: 2,
        },
        {
          question:
            "What was a key financial mechanism in Operation Warp Speed that allowed manufacturers to start production before trials ended?",
          options: [
            "NIH grants that fully funded manufacturing costs",
            "Guaranteed government purchase contracts that removed revenue uncertainty",
            "Patent extensions granted in exchange for faster timelines",
            "Elimination of post-marketing surveillance requirements",
          ],
          correct: 1,
        },
        {
          question:
            "Which entity must review the IND application before human clinical trials can begin?",
          options: [
            "NIH",
            "Contract Research Organizations",
            "The FDA",
            "Patient advocacy groups",
          ],
          correct: 2,
        },
        {
          question:
            "Dimethyl fumarate (Tecfidera) is an example of what phenomenon in drug development?",
          options: [
            "A drug that was developed in under 2 years using emergency authorization",
            "Scientific spillover — insights from treating one disease (psoriasis) opening new possibilities for another (MS)",
            "A drug that was developed entirely through NIH funding with no private investment",
            "A generic drug that was repurposed as a branded treatment",
          ],
          correct: 1,
        },
        {
          question:
            "Which is NOT a benefit the US receives from the current drug development process?",
          options: [
            "Access to new and effective drugs",
            "Confidence in rigorous safety testing",
            "Drugs always available at no cost to patients",
            "Removal of ineffective drugs from the market",
          ],
          correct: 2,
        },
        {
          question:
            "Which player in the drug development ecosystem provides the primary funding for early-stage biotech companies before they have any revenue?",
          options: [
            "The NIH",
            "Contract Research Organizations",
            "Investors and venture capital firms",
            "Patient advocacy groups",
          ],
          correct: 2,
        },
        {
          question:
            "Which patient advocacy organization provided early funding support for the science that eventually led to Trikafta?",
          options: [
            "The Alzheimer's Association",
            "The American Cancer Society",
            "The Cystic Fibrosis Foundation",
            "The National Multiple Sclerosis Society",
          ],
          correct: 2,
        },
      ],
    },
  ],
};
 
export default chapter2;