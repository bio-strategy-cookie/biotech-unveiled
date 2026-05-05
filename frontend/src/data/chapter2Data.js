const chapter2 = {
  id: 2,
  title: "Where do new drugs come from?",
  topics: [
    {
      id: "c2t1",
      level: "green",
      type: "video",
      contextNote: "A documentary trailer that captures the human reality of drug development",
      title: "Chapter 2 intro: The Human Trial",
      content: "The Human Trial (trailer below) highlights the struggles — scientific, financial, and emotional — of finding a cure for diabetes, which is just one condition among thousands. (If you are intrigued by this trailer, we encourage you to watch the full documentary, which is available for rent on most streaming platforms.)\n\nThe journey of a drug from concept to development and clinical trials to the pharmacy is a long and arduous one.\n\nIn this chapter, we will share the major steps of the process so that you can better understand what is involved in developing a new drug and consider how we might make the process more efficient. Let's get started!",
      videoUrl: "https://www.youtube.com/embed/EG_qvB7yGpg",
      xp: 10,
    },
    {
      id: "c2t2",
      level: "green",
      type: "reading",
      contextNote: "Overview of what this chapter covers",
      title: "Chapter 2 overview: Where do new drugs come from?",
      content: "Before we tackle the issue of how drugs should be priced and regulated, we must first understand how those drugs are created. In this chapter, we'll provide an overview of the high-level scientific process and the timeline of drug development, as well as some practical and business aspects of the process.\n\nIn this chapter you will learn:\n• The key stages of the process for bringing a new drug from idea to market in the U.S.\n• The benefits of this process to the U.S. and the rest of the world.\n• The major players in the drug development ecosystem.",
      imageUrl: "/images/ch2_img1.jpg",
      xp: 10,
    },
    {
      id: "c2t3",
      level: "green",
      type: "quiz",
      contextNote: "Test your existing knowledge before we teach you — just for fun!",
      title: "Test your knowledge: What do you know about drug development?",
      content: "We're curious what you might already know — or might guess — about the drug development process.\n\nBefore we go any further, just for fun, take this next short quiz to gauge your knowledge! How did you do? If you got 100%, you can consider skimming the rest of this chapter. But if you got even one answer wrong, stick around! It's important that we're all on the same page before moving forward.",
      xp: 20,
      questions: [
        {
          question: "What is the average length of time it takes to go from identifying a chemical compound to FDA approval?",
          options: ["2–5 years", "6–10 years", "10–15 years", "16–20 years"],
          correct: 2
        },
        {
          question: "What percentage of drugs that enter into clinical trials actually make it to FDA approval?",
          options: ["<10%", "20–35%", "45–50%", "70–75%"],
          correct: 0
        },
        {
          question: "Which application includes all data gathered from preclinical studies and clinical trials and typically takes the FDA about 10 months to review?",
          options: ["New Drug Application (NDA)", "Investigational New Drug (IND) Application", "Advanced Medication Approval (AMA)", "Innovative Therapeutic Submission (ITS)"],
          correct: 0
        },
        {
          question: "How many volunteers are typically involved in a Phase III clinical trial?",
          options: ["Less than a dozen", "A few dozen to a few hundred", "Several hundreds to thousands", "At least ten thousand"],
          correct: 2
        },
        {
          question: "_________ involve ongoing monitoring of the drug's safety and effectiveness in the real world after the drug becomes commercially available.",
          options: ["Pre-clinical research studies", "Post-marketing surveillance studies", "Clinical trials", "Spot checks"],
          correct: 1
        }
      ]
    },
    {
      id: "c2t4",
      level: "green",
      type: "video",
      contextNote: "A 7-minute overview of the entire drug approval process — fun to watch!",
      title: "How does the FDA approve a drug?",
      content: "As you can see, there are many steps in bringing a drug candidate from the laboratory to the clinic and the whole thing takes a significant amount of time — around 10–15 years on average.\n\nThe following 7-minute video provides a great overview of the process (plus, it's actually fun to watch!). As you watch, think about what the potential cost of each step might be.",
      videoUrl: "https://www.youtube.com/embed/WUsO6PH_O54",
      xp: 10,
    },
    {
      id: "c2t5",
      level: "green",
      type: "reading",
      contextNote: "The first two stages of drug development — from idea to the first human test",
      title: "Drug development timeline: Discovery and preclinical research",
      content: "Let's review the key information. Overall, the entire drug development process (from discovery to approval and marketing) can take **10–15 years or even longer**. This timeline varies based on factors like the complexity of the disease being targeted; how efficiently clinical trials are run; how difficult it is to meet exacting regulatory requirements; and managing unforeseen challenges during the process. Conducting rigorous, careful science while patients' lives hang in the balance is anything but simple.\n\n**1. Discovery and Preclinical Research (Knowledge Base)**\n\nThis phase involves identifying a potential drug target, often a specific molecule or biological process associated with a disease. Researchers conduct extensive laboratory studies and experiments to understand the compound's properties, mechanisms of action, and potential therapeutic effects.\n\nPreclinical studies are performed using cell cultures and animal models to analyze safety signals, collect evidence of efficacy, and study potential side effects before moving a compound into human trials. This phase typically takes **2–10 years** and is highly variable depending on the complexity of the biology.\n\n**2. Investigational New Drug (IND) Application**\n\nBefore a biotech or pharma company can test a drug in humans, its sponsor submits an IND application to the FDA. This application includes the key preclinical data and proposed clinical trial plan. The FDA has just **30 days** to approve or reject the IND. Once the IND is approved, human clinical trials can begin.",
      xp: 15,
    },
    {
      id: "c2t6",
      level: "green",
      type: "reading",
      contextNote: "The 3 phases of clinical trials — the most important framework in this course",
      title: "Drug development timeline: Clinical trials",
      content: "**3. Clinical Trials**\n\nClinical trials are conducted in three phases.\n\n**Phase I:** Involves a small group of usually-healthy volunteers (though sometimes patients) who take the drug so investigators can assess safety, explore dosage ranges, and monitor for side effects. Phase I trials last several months to a year or more. This timeline can vary depending on the complexity of the drug, the number of dose levels evaluated, and how easy it is to recruit healthy volunteers. Typically **20–100 participants**.\n\n**Phase II:** Enrolls a larger group of volunteers (several dozen to several hundred) who have the targeted disease or condition in order to evaluate a drug's effectiveness and further assess safety. Phase II trials typically last one to two years and can last longer if it's difficult to recruit or follow up on patients. Typically **100–500 participants**.\n\n**Phase III:** Involves several hundreds to thousands of volunteers who have the disease of interest and allows investigators to compare the drug's effectiveness against existing treatments for the condition or a placebo. Timeframe: around **2–5 years**. This is the most expensive and time-consuming phase — and the one that most often determines whether a drug makes it to market.\n\nAt each phase, many drug candidates are eliminated due to safety concerns, lack of efficacy, or unfavorable risk-benefit profiles.",
      imageUrl: "/images/ch2_img2.jpg",
      xp: 15,
    },
    {
      id: "c2t7",
      level: "green",
      type: "reading",
      contextNote: "The final steps — NDA submission, FDA review, and post-marketing surveillance",
      title: "Drug development timeline: The approval process",
      content: "**4. New Drug Application Submission, FDA Approval, & Post-Marketing Surveillance**\n\nAfter successful completion of one or more Phase III trials, the drug's sponsor submits a **New Drug Application (NDA)** to the FDA. The NDA contains comprehensive data detailing the drug's safety, efficacy, tolerability, manufacturing process, and proposed labeling. The FDA carefully reviews the submitted data to determine whether the drug's benefits outweigh its risks. This review process typically takes about **10 months**. If the FDA approves the drug, it can then be marketed and sold.\n\nThis whole process can be modified and shortened for orphan diseases and some cancers — for example, starting Phase 1 trials in patients (often called Phase 1b studies) and potentially allowing for accelerated approval based on a Phase 2b study, with full approval granted after post-marketing studies are completed.\n\nAnd just when you thought the process was over… Once a drug is released to the market, many companies then conduct **post-marketing surveillance studies**, which involve ongoing monitoring of the drug's safety and effectiveness in the real world. Occasionally there are negative side effects that occur in only a small percentage of patients, and these are only discovered once the drug is being taken by a larger number of people than participated in the Phase III trial.\n\nOne very serious example was with the painkiller **Vioxx**. Despite passing the rigorous FDA approval process, research later published in the medical journal Lancet found that approximately **88,000 Americans had heart attacks** resulting from taking Vioxx, and of those, approximately **38,000 people died**. Vioxx was pulled from the market as a result.",
      xp: 15,
    },
    {
      id: "c2t8",
      level: "green",
      type: "quiz",
      contextNote: "Match each stage to its correct description",
      title: "Check your understanding 2.1: How does the FDA approve a drug?",
      content: "",
      xp: 20,
      questions: [
        {
          question: "Which best describes Phase I clinical trials?",
          options: [
            "Several hundreds to thousands of volunteers with the disease of interest — compares drug effectiveness against existing treatments. Timeframe: Around 2–5 years.",
            "A small number of healthy volunteers evaluate a drug's safety, tolerability, and dosage. Timeframe: Around 1–2 years.",
            "Submission of all data from preclinical and clinical trials to the FDA for evaluation.",
            "Surveillance to monitor safety and effectiveness in a larger population after drug approval. Timeframe: Ongoing."
          ],
          correct: 1
        },
        {
          question: "Which best describes Post-Market Monitoring?",
          options: [
            "Performance of cell-based and animal studies to assess safety, efficacy, and toxicity. Timeframe: Around 1–3 years.",
            "A small number of healthy volunteers evaluate safety and dosage. Timeframe: Around 1–2 years.",
            "Surveillance continues to monitor safety and effectiveness in a larger, non-trial population. Timeframe: Ongoing.",
            "Submission of preclinical data and proposed clinical trial plans to the FDA. Timeframe: 30 days for FDA review."
          ],
          correct: 2
        },
        {
          question: "Which best describes the Investigational New Drug (IND) Application?",
          options: [
            "Performance of cell-based and animal studies to assess safety, efficacy, and toxicity.",
            "Submission of preclinical data and proposed plans for clinical trials to the FDA. Timeframe: 30 days for FDA review.",
            "A drug tested on a few dozen to a few hundred volunteers with the target disease.",
            "Submission of all data from preclinical and clinical trials to the FDA."
          ],
          correct: 1
        },
        {
          question: "Which best describes Phase III Clinical Trials?",
          options: [
            "Performance of cell-based and animal studies to assess safety, efficacy, and toxicity.",
            "A small number of healthy volunteers evaluate safety, tolerability, and dosage.",
            "Several hundreds to thousands of volunteers with the disease of interest — compares drug effectiveness against existing treatments. Timeframe: Around 2–5 years.",
            "Submission of all data from preclinical and clinical trials to the FDA."
          ],
          correct: 2
        },
        {
          question: "Which best describes Preclinical Research?",
          options: [
            "Performance of in vitro (cell-based) and in vivo (animal) studies to assess a compound's safety, efficacy, and potential toxicity. Timeframe: Around 1–3 years.",
            "Several hundreds to thousands of volunteers with the disease of interest.",
            "A small number of healthy volunteers evaluate safety and dosage.",
            "Submission of preclinical data and proposed plans for clinical trials to the FDA."
          ],
          correct: 0
        },
        {
          question: "Which best describes Phase II Clinical Trials?",
          options: [
            "Performance of cell-based and animal studies to assess safety, efficacy, and toxicity.",
            "Several hundreds to thousands of volunteers with the disease of interest.",
            "A small number of healthy volunteers evaluate safety and dosage.",
            "A drug is tested on a few dozen to a few hundred volunteers with the specific disease or condition the drug is intended to treat. Timeframe: Around 2–3 years."
          ],
          correct: 3
        }
      ]
    },
    {
      id: "c2t9",
      level: "green",
      type: "data",
      contextNote: "The sobering numbers behind drug development — most drugs never make it",
      title: "What are the odds a drug will make it?",
      content: "So now that you have a deeper sense of the complexity and time required to develop a new drug, what do you think the odds are that a new drug makes it all the way to your pharmacy's shelf?\n\nIf you said \"not high!\" you're right! Fewer than 10% of drugs that enter preclinical testing even make it into clinical trials. From there, approximately 63% of drugs that enter Phase I trials move on to Phase II, and about 30% of those drugs progress to Phase III. Once in Phase III, the success rate is higher — 58% of drugs at this stage win FDA approval.\n\n**The overall success rate for a drug from discovery to FDA approval is only around 1%!**\n\nIn addition to the time involved, every stage in drug development costs a mind-boggling amount of money. The biopharmaceutical industry invests significant resources and time into this process while knowing that any one drug candidate is highly unlikely to make it all the way to patients. There's a lot of risk and uncertainty involved. And as a result, successful drugs that make it to the end represent substantial scientific and financial achievements.",
      stats: [
        { label: "Preclinical → Trial", value: "<10%", fill: 10 },
        { label: "Phase I → II", value: "63%", fill: 63 },
        { label: "Phase II → III", value: "30%", fill: 30 },
        { label: "Phase III → FDA", value: "58%", fill: 58 },
        { label: "Overall success", value: "~1%", fill: 1 },
      ],
      xp: 10,
    },
    {
      id: "c2t10",
      level: "green",
      type: "data",
      contextNote: "The scale of clinical trial activity globally puts drug development in perspective",
      title: "The scale of drug development",
      content: "**So what is the scale at which drug development happens?** Let's check your best guesses before revealing the answers.\n\n1. About how many clinical trials happen globally each year?\n2. About how many new drugs get approved by the FDA each year?\n3. What percentage of Americans have participated in a clinical trial?\n4. About how many clinical investigators are there in the US?\n\nThese figures illustrate just how much effort goes into producing the drugs that eventually reach patients — and how narrow the funnel truly is.",
      stats: [
        { label: "Clinical trials/year globally", value: "35,000–40,000" },
        { label: "FDA approvals/year (avg)", value: "~43" },
        { label: "Americans in clinical trials", value: "<5%" },
        { label: "Clinical investigators in US", value: "~100,000" },
      ],
      xp: 10,
    },
    {
      id: "c2t11",
      level: "green",
      type: "reading",
      contextNote: "Two extremes — what's possible with unlimited resources, and what happens without them",
      title: "Operation Warp Speed vs. Tecfidera: Two extremes",
      content: "So if drug development is so expensive and most drug candidates fail before making it to patients, where does the cash to run this process come from? Our next chapter covers what you're probably curious about: the money!\n\nBut first — yes, we've just finished telling you about how long new drug development usually takes. But the **COVID-19 vaccine** approval process represents an exception to these norms — it essentially demonstrates the maximum fastest possible timeline. Several factors contributed to this success: assembly of an incredible team of the very best people; massive public and government support; significant prevalence of the disease among all ages and ethnicities all over the world; emergency authorization of the first vaccines; and an unprecedented global effort.\n\nAs a counterexample, let's look at a drug that took nearly forever to get approved.\n\n**Dimethyl fumarate** (later marketed as Tecfidera) was proposed as a treatment for psoriasis in the 1950s by Walter Schweckendiek, but it wasn't commercialized until 1994 when Fumapharm AG got approval to sell it as a psoriasis treatment in Germany. In the 2000s, it was proposed that dimethyl fumarate could make an effective treatment against Multiple Sclerosis (MS). Clinical trials proceeded, and it was finally approved for MS by the FDA in 2013. So depending how you count it, it took anywhere from 9 to 60+ years.\n\nAnd then there are all the diseases that we've been trying to treat for as long as anyone can remember — there is still no cure to the common cold, no universal flu vaccine, and a plethora of diseases we can only treat with varying results and no real cure.",
      xp: 15,
    },
    {
      id: "c2t12",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding of the drug development process",
      title: "Check your understanding 2.2: How new drugs get developed",
      content: "",
      xp: 20,
      questions: [
        {
          question: "Which phase of the drug development process involves hundreds to thousands of patients to confirm efficacy, monitor side effects, compare the drug to existing treatments, and gather more comprehensive safety data?",
          options: ["Preclinical Studies", "Phase I Clinical Trials", "Phase II Clinical Trials", "Phase III Clinical Trials"],
          correct: 3
        },
        {
          question: "________ involves ongoing monitoring of the drug's safety and effectiveness in real-world settings.",
          options: ["Post-marketing surveillance", "The Investigational New Drug (IND) Application", "The New Drug Application (NDA) Submission", "The Discovery Process"],
          correct: 0
        },
        {
          question: "About what percentage of drugs make it all the way through the development process from concept to FDA approval?",
          options: ["<1%", "5%", "10%", "25%"],
          correct: 0
        },
        {
          question: "Which drug was pulled from the market based on data from post-marketing surveillance studies?",
          options: ["AZT", "Phenylephrine", "Trikafta", "Vioxx"],
          correct: 3
        },
        {
          question: "What factors did NOT contribute to the COVID-19 vaccine making it to market in record-breaking time?",
          options: ["Problems in the supply chain", "A practically unlimited budget", "FDA granting emergency status", "An outstanding team"],
          correct: 0
        },
        {
          question: "On average, how long does it take to develop a drug?",
          options: ["0–5 years", "5–10 years", "10–15 years", "15–20 years"],
          correct: 2
        }
      ]
    },
    {
      id: "c2t13",
      level: "green",
      type: "video",
      contextNote: "How do we measure what a drug is actually worth to society?",
      title: "What is the value of a new medicine?",
      content: "As we mentioned in Chapter 1, those of us who live in the United States receive many benefits from the current drug development process:\n\n• We gain access to lots of new drugs.\n• We can feel confident in rigorous safety testing.\n• We cure or mitigate new diseases that didn't previously have effective therapies.\n• We can have confidence that ineffective drugs will be pulled off the market.\n• Our overall healthcare costs are driven down by keeping people out of hospitals.\n• We enjoy increased life expectancy, productivity, and healthy years.\n\nHow can we measure the value of new medicines? Watch this 3-minute video which introduces the concept of the **Value Flower** for calculating the answer.",
      videoUrl: "https://www.youtube.com/embed/MUehueqYgBk",
      xp: 10,
    },
    {
      id: "c2t14",
      level: "yellow",
      type: "reading",
      contextNote: "The global impact of US biopharma leadership — often overlooked in the pricing debate",
      title: "Value to the world: How US biopharma benefits everyone",
      content: "The U.S. biopharmaceutical industry also plays a crucial role in benefiting the rest of the world in several significant ways. Here are 4 of them:\n\n**1. Leadership in Research and Development (R&D):**\nThe innovation and substantial investment in R&D that happens in the U.S. contributes to the development of cutting-edge drugs, treatments, and medical technologies. These advancements often have a global impact, as breakthroughs made in the United States frequently benefit populations worldwide. Diseases and health conditions don't adhere to national borders, so advancements in treatments or cures discovered by U.S. biopharma companies often have a far-reaching impact, improving healthcare outcomes globally.\n\n**2. Increased Global Access to Medicines and Vaccines:**\nThe US biopharmaceutical industry develops and manufactures vaccines, medications, and therapies that address some of the world's most pressing health challenges. Pharmaceutical companies collaborate with international organizations, governments, and nonprofit entities to improve access to these treatments in low- and middle-income countries. Additionally, initiatives like voluntary licensing agreements and partnerships contribute to expanding access to essential medicines.\n\nThis topic is not without debate, and many think companies should do even more in this regard. But even those critical of the industry agree that access to these treatments is vital to global health. **The U.S. market primarily incentivizes drug development, and the rest of the world benefits from our investment.**\n\n**3. Technological Innovation and Knowledge Sharing:**\nThe advancements and innovations stemming from the US biopharmaceutical sector transcend borders, fostering global knowledge sharing and technological progress. Collaborations, research partnerships, and the dissemination of scientific information contribute to the collective advancement of medical science worldwide.\n\n**4. Economic Contribution and Job Creation:**\nThe U.S. biopharmaceutical industry's economic impact extends way beyond the United States. The global operations, investments, and partnerships of U.S. companies create jobs, support research collaborations, and stimulate economic growth in countries all over the world. These companies often establish manufacturing facilities, research centers, and partnerships with entities outside the U.S., contributing to economic development and capacity-building efforts in regions around the world.\n\nUnfortunately, the biopharmaceutical industry's positive contributions rarely make the news. It's true that there are bad actors in this industry, as there are in every industry. But it's also really important to appreciate the positive aspects of these companies' work alongside the negative.",
      xp: 15,
    },
    {
      id: "c2t15",
      level: "green",
      type: "reading",
      contextNote: "Part 1: Academic institutions, government agencies, investors, and biopharma companies",
      title: "The biotech/pharmaceutical ecosystem: Key players (Part 1)",
      content: "In the next chapter we explore more about the major players in the drug development ecosystem, as well as the financial aspects of drug development.\n\nFor now, let's introduce the major players. These entities collaborate and interact within a complex ecosystem, contributing different expertise and resources in order to develop and deliver safe and effective drugs to patients.\n\n**Academic and Research Institutions:**\nUniversities, research centers, and academic institutions often conduct fundamental research that contributes to the discovery of new drug targets, technologies, and basic scientific understanding that forms the basis for drug development.\n\n**Government Agencies and Funding Bodies:**\nGovernment agencies (especially the National Institutes of Health — NIH) provide grants and funding for research, supporting academic institutions and researchers working on various aspects of drug discovery and development.\n\n**Investors and Venture Capital Firms:**\nInvestors provide funding for research and development efforts of pharmaceutical and biotechnology companies. Venture capital firms often invest in early-stage companies working on innovative drug candidates.\n\n**Biopharmaceutical Companies:**\nThese companies conduct research, discover potential drug candidates, conduct preclinical and clinical trials, and seek regulatory approvals for new drugs.\n\n**Contract Research Organizations (CROs) & Research Technology Service Providers:**\nNumerous contract service providers play a pivotal role in supporting pharmaceutical and biotech companies by aiding in different phases of drug development. They assist in several critical areas, like providing essential materials, conducting preliminary research, managing clinical trials, handling data, and ensuring compliance with regulatory standards.",
      xp: 15,
    },
    {
      id: "c2t16",
      level: "green",
      type: "reading",
      contextNote: "Part 2: CMOs, patient groups, clinicians, the FDA, supply chains, and payers",
      title: "The biotech/pharmaceutical ecosystem: Key players (Part 2)",
      content: "**Contract Manufacturing Organizations (CMOs):**\nCMOs specialize in manufacturing pharmaceutical products on behalf of pharmaceutical companies, providing expertise in manufacturing processes, scale-up, and production of drug substances and finished products.\n\n**Patient Advocacy Groups, Patient Foundations, and Individual Patients:**\nPatients provide insights into the experience of living with a disease, articulate their needs and desires to drug developers, and take on significant risk by participating in clinical trials. Their input helps in shaping drug development strategies and ensuring patient-centric approaches to care. Patient Advocacy Groups and Foundations can also provide funding for drug development and may participate in lobbying and advocacy.\n\nFor example, one of the primary focuses of the **Alzheimer's Association** is funding research into the causes, treatments, and potential cures for Alzheimer's disease. Similarly, the **Cystic Fibrosis Foundation** invests significantly in funding research aimed at finding new treatments and therapies for cystic fibrosis.\n\n**Health Care Providers and Clinicians:**\nPhysicians, hospitals, and healthcare professionals conduct clinical trials, prescribe approved drugs, and provide feedback on drug efficacy and safety in real-world settings.\n\n**The U.S. Food and Drug Administration (FDA):**\nThe FDA (and similar regulatory bodies in different countries) oversees the drug approval process. They evaluate the safety, efficacy, and quality of drugs before granting approval for marketing and distribution.\n\n**Supply Chain and Distribution Networks:**\nCompanies involved in drug distribution, logistics, and supply chain management ensure that approved drugs reach patients through pharmacies, hospitals, and healthcare facilities.\n\n**Public and Private Insurance Providers (Payers):**\nMedicare, Medicaid, the VA, private (employer-sponsored) insurance plans, and ACA exchange plans collectivize healthcare costs for participants, ideally spreading the cost of expensive care over the majority of our society. With pharmacy benefit managers (PBMs), they negotiate net prices with drug companies and control which treatments plan members can access. Behind-the-scenes negotiations starring opaque middlemen can misalign incentives, leading to untoward behavior and higher out-of-pocket costs for patients.\n\nAs you complete this chapter, it's hopefully become clear that the vast majority of drugs never make it to market, and that drug development is a very expensive and lengthy endeavor. So where does the cash to run this process come from? Our next chapter takes a deeper look.",
      xp: 15,
    },
    {
      id: "c2t17",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding of the ecosystem and value of drug development",
      title: "Check your understanding 2.3: Value, the ecosystem, and key players",
      content: "",
      xp: 20,
      questions: [
        {
          question: "Which is NOT a benefit those of us who live in the US receive from the current drug development process?",
          options: [
            "We get lots of new drugs",
            "We get confidence in rigorous safety testing",
            "We can have confidence that ineffective drugs are pulled off the market",
            "Drugs are always available to us at no cost"
          ],
          correct: 3
        },
        {
          question: "Which is NOT a way in which the US biopharmaceutical industry benefits the rest of the world?",
          options: [
            "By creating global access to medicines and vaccines",
            "By providing Research and Development (R&D) leadership",
            "By providing leadership in the global food supply",
            "By creating jobs"
          ],
          correct: 2
        },
        {
          question: "Besides their own profits, where does the majority of funding for biopharma companies come from?",
          options: [
            "Investors like venture capital firms",
            "Supply chain and distribution networks",
            "Pharmaceutical and biotechnology companies",
            "Contract Research Organizations (CROs)"
          ],
          correct: 0
        },
        {
          question: "Which entity oversees the drug approval process? They evaluate the safety, efficacy, and quality of drugs before granting approval for marketing and distribution.",
          options: [
            "The National Institute of Health (NIH)",
            "Contract Research Organizations (CROs)",
            "The U.S. Food and Drug Administration (FDA)",
            "Contract Management Organizations (CMOs)"
          ],
          correct: 2
        }
      ]
    },
    {
      id: "c2t18",
      level: "green",
      type: "summary",
      contextNote: "Key takeaways from Chapter 2 before moving to the money chapter",
      title: "Chapter 2 summary",
      content: "In Chapter 2, we explored the lengthy and complex process of bringing a new drug to market. We described the high failure rate and significant investment required throughout various stages of drug development.\n\n**Key points:**\n\nThe entire drug development process for a successful drug typically takes about **10–15 years**, with many hurdles and unforeseen challenges.\n\nThe process starts with identifying a promising molecule or target through laboratory research (**discovery**). Preclinical studies assess the compound's safety and efficacy in cells and animals. After submitting an IND application to the FDA, clinical trials are conducted in three phases:\n• **Phase I:** Test safety and dosage in a small group of healthy volunteers.\n• **Phase II:** Evaluate effectiveness and safety in a larger group with the target disease.\n• **Phase III:** Confirm efficacy, monitor side effects, and compare to existing treatments in hundreds to thousands of patients.\n\nIf successful, a New Drug Application (NDA) is submitted to the FDA for a thorough review process. Once approved, post-marketing surveillance monitors the drug's safety and effectiveness in the real world.\n\nWe highlighted the benefits of this rigorous system: access to safe and effective drugs, confidence in drug safety, removal of ineffective drugs from the market, reduced healthcare costs, and improved life expectancy.\n\nWe also described the positive global impact of the U.S. biopharmaceutical industry: leading R&D efforts, increasing global access to medicines and vaccines, fostering technological innovation, and contributing to economic growth worldwide.\n\n**Drug development has a low probability of success, takes a long time, and is very expensive! In the next chapter we'll dive into the financial aspects of this process in more detail.**",
      xp: 10,
    },
  ]
}
 
export default chapter2
 