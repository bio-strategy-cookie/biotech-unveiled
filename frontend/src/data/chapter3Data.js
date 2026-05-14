const chapter3 = {
  id: 3,
  title: "All About the Money: VCs in Biotech",
  topics: [
    {
      id: "c3t0",
      level: "green",
      type: "guess",
      contextNote: "Before we begin — a quick gut check",
      title: "How much does it cost to develop a drug?",
      coreConcept: "Most people's intuition is off by orders of magnitude. Pick your best guess before reading on.",
      guessConfig: {
        question: "How much do you think it costs to bring one drug to market?",
        instruction: "Pick your best guess — then we'll show you the answer.",
        options: [
          { label: "A", value: "$50 million",   result: "wrong" },
          { label: "B", value: "$250 million",  result: "wrong" },
          { label: "C", value: "$1 billion",    result: "wrong" },
          { label: "D", value: "$2.5 billion",  result: "close" },
          { label: "E", value: "$5 billion",    result: "wrong" },
        ],
        correctIndex: 3,
        revealStat: "$2.87 billion",
        revealSource: "Tufts Centre for the Study of Drug Development, 2016",
        revealBody: "Why so much? Because you aren't just paying for the drug that succeeded. You're paying for the 99% of drugs that failed along the way — every trial that didn't work, every candidate that looked promising and then wasn't. That's the honest way to measure the cost of drug development. And it's the number that shapes every pricing and policy debate that follows.",
        feedbackWrong: "Not quite — but the real answer might surprise you even more.",
        feedbackClose: "Close! $2.5B is in the right ballpark — the real number is just a bit higher.",
      },
      xp: 10,
    },
    {
      id: "c3t1",
      level: "green",
      type: "video",
      contextNote: "How much does it actually cost to develop a drug?",
      title: "The mountain climbing analogy",
      coreConcept:
        "Developing a single drug costs around $2.87 billion on average — and most of that money is spent on drugs that never make it to patients. This financial reality shapes every pricing and policy debate that follows.",
      content:
        "Only about 1% of drugs that enter development reach patients. Each failed attempt is remarkably expensive. So who pays for all of it — and why are they willing to?\n\nIn this 2-minute video, the analogy of a mountain climbing expedition is used to illustrate why, despite seemingly extravagant list prices, most drug companies are lucky to earn a **10% profit**. Watch it before reading on.",
      videoUrl: "https://www.youtube.com/embed/crV1k_hcKgE",
      watchFor:
        "Notice the analogy: each attempt to climb the mountain costs the same whether you reach the summit or not. The same is true for drug development — the cost of failure is baked into the price of success.",
      stats: [
        { value: "$2.87B", label: "Average cost to develop one drug (Tufts, 2016)" },
        { value: "<1%", label: "Of drugs entering development reach market" },
        { value: "~10%", label: "Typical profit margin for drug companies" },
      ],
      pauseAndThink:
        "If 99% of drugs fail and each attempt costs hundreds of millions, who would rationally invest in this? Before reading on, think about what kind of return would make the math worthwhile.",
      xp: 10,
    },
    {
      id: "c3t2",
      level: "green",
      type: "reading",
      contextNote: "Two words that get conflated constantly — and why it matters",
      title: "Biotech vs. pharma: what's the difference?",
      coreConcept:
        "Biotech and pharma are not the same. Most policy attacks on 'biopharma profits' are aimed at the wrong target — pharma companies with revenues — while nearby biotech startups are burning through cash with nothing to sell.",
      content:
        "Years ago, the term **biotech** basically referred to a genetics-focused company. Today it refers to any smaller drug development company without its own commercialization and manufacturing capabilities — essentially those companies that are too small and focused to be considered pharma. There are thousands of biotech companies at any one moment in time, and you're not likely to have heard of the vast majority of them.\n\nIn contrast, **big pharma** refers to very large pharmaceutical companies — massive global organizations with huge manufacturing and commercial capabilities. Many of them are household names that have been around for a hundred years or more: Johnson & Johnson, Merck, Pfizer, GlaxoSmithKline. There are only a couple dozen of these companies.\n\nBiotech and big pharma describe two ends of a spectrum. There are also large biotech and small pharmaceutical companies.\n\nNew biotech companies are created all the time, often built around ideas that originate in academia. With a relatively small team — many employ fewer than five people in the beginning — they secure funding and begin developing a potential drug through discovery and early animal experiments, and maybe even the first clinical studies. Then, if their scientific hypothesis is sound and there seems to be market demand, a larger pharmaceutical company will typically buy the promising biotech and/or its assets, complete the series of wildly expensive clinical trials the original company is rarely able to afford, win FDA approval and placement on insurance formularies, and bring the drug to the commercial market.\n\nIt's very rare for a biotech company to take a product from concept all the way to market by itself — because of the massive resources required for late-stage clinical trials, manufacturing, regulatory approval, payer interactions, and commercialization.\n\n**This isn't something to lament.** When large pharma companies buy small biotechs, the ecosystem is functioning as it should. It would be wildly inefficient to force every tiny biotech to build out the massive global manufacturing, commercial, and regulatory teams required to bring a drug to market across the world when pharmas already have well-developed organizations that specialize in exactly that work.\n\nWhen a biotech is acquired, its high-potential assets get handed over to a larger pharma that can leap the expensive hurdles to get the drug past the finish line — and the original biotech's discovery-oriented scientists are freed up to work on the next most interesting problem. The development cycle continues. And where do large pharma companies get the money to buy small biotechs? From profits made selling their existing drugs.\n\n**Biopharma** is an umbrella term covering both. But be wary when articles or legislation paint them with the same brush. Biotech and pharma can share goals, but the types of companies in each space are fundamentally different. When a senator rails against 'biopharma profits,' they almost certainly cannot be talking about biotech companies — those companies don't even make profits because they aren't selling a product yet. They're using investor money to research whether transformative scientific ideas have the potential to become safe and effective drugs. They don't have anything to sell to anyone.",
      imageUrl: "/images/ch3_img0.jpg",
      keyPoints: [
        "**Biotech:** small, early-stage, pre-revenue, focused on early R&D — burning cash, not earning it",
        "**Big Pharma:** large, global, revenue-generating from existing drugs — can fund late-stage trials and commercialization",
        "The typical path: biotech discovers → pharma acquires → pharma brings to market",
        "**Biopharma** covers both — but they are fundamentally different businesses with different financial realities",
        "When a senator attacks 'biopharma profits,' they almost certainly mean pharma — biotech companies don't have profits yet",
      ],
      deepDive: [
        {
          label: "Why pharma acquiring biotech is a feature, not a bug — Rapport",
          description:
            "A deeper argument for why biotech acquisitions are how the ecosystem is supposed to work — not a sign that something has gone wrong.",
          url: "https://rapport.bio/all-stories/innovation-and-acquisitions-feature-not-bug",
          urlLabel: "Read →",
        },
      ],
      xp: 10,
    },
    {
      id: "c3t3",
      level: "green",
      type: "reading",
      contextNote: "Why comparing pharma to Beyoncé is exactly the right analogy",
      title: "So how profitable is biopharma, really?",
      coreConcept:
        "Judging biopharma's profitability by its most successful companies is like judging music as a career by Beyoncé's earnings — cherry-picking the most unrepresentative data possible.",
      content:
        "If there's one thing the public \"knows\" about biopharma, it's that these companies rake in sky-high profits. Let's take a look. But first — let's talk about Beyoncé.\n\nImagine a teenager tells her parents she wants to be a rock star and is thinking about ditching college to focus on music full time. Her parents say music isn't a reliable or financially sustainable career path. She replies: \"Well, Beyoncé made $580M from her Renaissance World Tour!\"\n\nBut you can't assess the music industry based on the Beyoncés of the world. For every Beyoncé or Taylor Swift, there are literally hundreds of thousands of other musicians living gig to gig, busking in the subway, or playing boring background muzak at a 40th high school reunion. It's way, way more common to be one of those musicians than to be Beyoncé.\n\nIf someone asked you \"how profitable is music as a career?\", would you look up the ten most famous artists you can name and average their yearly earnings? Probably not. That wouldn't be accurate or appropriate — it's cherry-picking unrepresentative data. **But we often make exactly this mistake with biopharma.**\n\nThe hundreds of biotech companies you've never heard of are **pre-revenue** — not generating any income — almost as a rule. You can't make money when you don't have anything to sell, and selling something isn't even on their minds. They're years (sometimes decades) away from that.\n\nThere's a massive chasm between \"Does this protein bind the target we think it does?\" and \"Buy our safe, effective drug for Alzheimer's disease.\" Not only are these companies not making money — they're burning through large sums of cash, since everything research and development requires is seriously expensive.\n\n**So where does this money come from? Who would just hand over this kind of cash?**\n\nThe answer is: investors.",
      imageUrl: "/images/ch3_img1.png",
      didYouKnow:
        "When a senator rails against 'biopharma profits,' they almost certainly cannot be talking about biotech companies — those companies don't even have profits. They're using investor money to research whether a scientific idea can become a drug. They don't have anything to sell to anyone.",
      pauseAndThink:
        "Next time you see a headline about pharma profits, ask: which companies are they actually talking about? Are these late-stage pharma companies with marketed drugs, or early-stage biotechs still in trials? The answer changes everything about the policy implications.",
      xp: 10,
    },
    {
      id: "c3t4",
      level: "green",
      type: "video",
      contextNote: "Who investors actually are — and why we're all healthcare investors",
      title: "Who are investors?",
      coreConcept:
        "Investors aren't just billionaires. They include pension funds, university endowments, and 401(k) managers. In a real sense, most of us are already healthcare investors — through the institutions that manage our savings and our insurance premiums.",
      content:
        "Sometimes investors are extremely wealthy individuals like Warren Buffett. But investments are also made by institutions that manage your **401(k)**, your university's endowment, or your grandparents' pension. RA Capital, the firm behind this course, manages investments from all of these types of organizations.\n\nIn a way, **we're all healthcare investors**. Most of us pay monthly insurance premiums — an investment meant to pay off when we get ill or injured. Our taxes also go toward Medicare and Medicaid, which are investments in the health of our communities and our elderly. This is part of why drug companies and professional investors pay close attention to not only what physicians know their patients need, but what society tells us people value and prefer.\n\nIn this video, Peter Kolchinsky describes what it's like having a fiscal responsibility to others — and how that can sometimes run counter to what he personally wants to invest in:",
      videoUrl: "https://player.vimeo.com/video/1019938072?h=b50c5e8e6e",
      imageUrl: "/images/ch3_img2.png",
      watchFor:
        "Peter describes a situation where he personally cares deeply about a disease but can't justify the investment. This tension — between what we want and what the math supports — is central to how the funding system works.",
      xp: 10,
    },
    {
      id: "c3t5",
      level: "green",
      type: "video",
      contextNote: "A myth that persists even in Congress — and why it has real consequences",
      title: "Why do we need investors? Doesn't the NIH fund drug development?",
      coreConcept:
        "The NIH funds basic science. Private investors fund drug development. These are completely different activities — and confusing them leads to badly designed policy.",
      content:
        "Contrary to popular belief — and to what some members of Congress have claimed — **the government does NOT fund most drug development**.\n\nThat's a myth that badly needs debunking. The NIH does allocate grants to support early-stage scientific research, and NIH-supported investigators — most of whom work inside academic laboratories — play an important role conducting the basic science experiments that lay the foundation for discoveries that could potentially play out positively in the clinical realm. But **the NIH does not develop drugs** — full stop.\n\nJust look at what the government spends on clinical trials versus what the biopharma industry spends: the NIH spends approximately **10% of what the industry spends**. Academic research is a vital part of the scientific ecosystem. But neither academics nor the government actually develop drugs.\n\nInnovation isn't just something that arises out of a lab — it needs to be shaped into a product-market fit. Often this requires people with business experience partnering with academics. See how RA Capital engages with academics in that collaboration:",
      videoUrl: "https://media.racap.com/default-media/publicwebsite/Video/Planetnutshell-comp.mp4",
      imageUrl: "/images/ch3_img1.png",
      watchFor:
        "Notice the distinction between what academics do (identify mechanisms, generate hypotheses, run early experiments) and what drug development requires (clinical trials, regulatory strategy, manufacturing, commercialization). These require completely different skills, resources, and incentives.",
      stats: [
        { value: "~10%", label: "NIH clinical trial spend vs. industry spend" },
        { value: "90%+", label: "Of drug R&D funded by private investors" },
      ],
      whyItMatters:
        "If private investment disappeared — because returns became too uncertain or too small — drug development would slow dramatically. No amount of government research funding can substitute for the commercial discipline and risk-taking capacity of private investors.",
      deepDive: [
        {
          label: "Report: industry, not NIH, fronts most cash for clinical trials — FierceBiotech",
          description:
            "Data showing the scale of the gap between government and private clinical trial spending.",
          url: "https://www.fiercebiotech.com/research/report-industry-not-nih-fronts-most-cash-clinical-trials",
          urlLabel: "Read →",
        },
        {
          label: "The government's continued assault on drug pricing — Forbes",
          description:
            "How price control proposals could hurt Americans by undermining the private investment that drives drug development.",
          url: "https://www.forbes.com/sites/johnlamattina/2023/12/15/the-governments-continued-assault-on-drug-pricing-could-hurt-the-health-of-americans/",
          urlLabel: "Read →",
        },
      ],
      xp: 10,
    },
    {
      id: "c3t6",
      level: "green",
      type: "video",
      contextNote: "The logic that makes risky investment rational",
      title: "Why investors fund biotech startups: the Investor's Paradox",
      coreConcept:
        "Biotech investors face 'technical risk' — the possibility that the product they're trying to build may not even be scientifically possible. They accept this risk because the returns from the rare drug that succeeds must be large enough to cover all the failures.",
      content:
        "So why do investors hand out money to unprofitable biotech startups? It seems like a bad idea.\n\nIf you're an investor, you're well aware that biopharma research requires massive upfront cash with no guarantee there will even be a working product. Even if you find the best scientific minds solving some aspect of a disease, there's still no guarantee of success. An amazing company with brilliant executives doing stellar science based on well-founded hypotheses still may not produce a safe and effective therapy. **That's just the nature of science.**\n\nIt's not that anyone in these companies *messed up* to make their drug-in-progress fail. The problem they're working on simply hasn't been conquered yet — and it's going to take more time and energy to solve.\n\nThis represents a very different type of risk than investing in software. Software investors take on **\"business risk\"** — customers may not like the product — but there's no doubt the software can be built. In contrast, biopharma investors face **\"technical risk\"** — the risk that the product they envision may not even be scientifically possible to create.\n\nSo why take this risk? **For the promise of returns.**\n\nRemember the Investor's Paradox from Chapter 1? An investor allocates cash across a portfolio of diverse investments, relying on the reward from one \"big winner\" to make up for the failure of the vast majority. The promise of attractive returns for a big win must be compelling enough to stomach the risks of all the failures. That sentiment isn't specific to biotech — it drives our entire capitalist economy.\n\nSince government funding represents a drop in the ocean compared to private investment, without investors very few new drugs would be created.\n\nHow does an investor decide to fund a drug in the first place? Put yourself in an investor's shoes. Imagine you're considering four options:\n\n- An injectable treatment for Alzheimer's disease that slows the progression of dementia\n- An oral pill that helps obese patients minimize cardiovascular stress from extra weight\n- A gene therapy that helps babies reverse a protein buildup that would otherwise cause blindness\n- An IV chemotherapy that shrinks tumors and extends the lives of colon cancer patients\n\nAll sound important — even groundbreaking, if successful. How in the world do investors choose which to fund?\n\nPeter Kolchinsky explains:",
      videoUrl: "https://player.vimeo.com/video/986475737?h=59f27298c2",
      imageUrl: "/images/ch3_img3.jpg",
      watchFor:
        "Peter works through the gene therapy for childhood blindness in detail. Notice that the questions aren't 'is this scientifically interesting?' — they're 'will this generate enough return to justify the risk?' Market size, probability of success, physician enthusiasm, payer acceptance — all feed into the math.",
      keyPoints: [
        "**Business risk** (software): Will people use it? The product can definitely be built.",
        "**Technical risk** (biotech): Will the science work? Even great teams following sound hypotheses can fail.",
        "The Investor's Paradox: fund many bets knowing most fail — the returns from one big winner must justify the whole portfolio.",
        "**NPV modeling** translates questions about market size, probability, timing, and competition into a financial go/no-go decision.",
      ],
      deepDive: [
        {
          label: "Technical risk vs. business risk — Jason Kelly, CEO of Ginkgo Bioworks (Forbes)",
          description:
            "What it actually takes to build a multi-billion dollar biotech company, and why the risk profile is unlike any other industry.",
          url: "https://www.youtube.com/watch?v=LVajwdPIbdQ",
          urlLabel: "Watch →",
        },
        {
          label: "The math behind VC investing in biotech — Halle Tecco",
          description:
            "A clear, readable breakdown of how venture capital math works specifically in biotech.",
          url: "https://www.halletecco.com/blog/vc-math",
          urlLabel: "Read →",
        },
      ],
      xp: 15,
    },
    {
      id: "c3t7",
      level: "green",
      type: "reading",
      contextNote: "The exact questions investors ask — and why each one matters",
      title: "Why investors fund biotech: the investment equation",
      coreConcept:
        "NPV modeling isn't just about whether a drug works. Investors ask a dozen interconnected questions about patients, physicians, payers, manufacturing, and competition — all of which feed into the math.",
      content:
        "Imagine you are an investor evaluating that gene therapy for childhood blindness. What questions would you actually need answered before committing capital?\n\nAs explained by RA Capital's Erich Scheller, investors work backwards from a set of core questions to calculate **Net Present Value (NPV)**. Investors' core questions can be influenced by a variety of different variables that form the **investment equation**.",
      imageUrl: "/images/ch3_img4.jpg",
      keyPoints: [
        "**Patient population:** How many babies are born with this condition every year? Where do they live? Would the drug treat all affected patients or only a subset? If a subset, how would eligible candidates be identified?",
        "**Scientific confidence:** Is there a good animal model? What do preliminary results suggest? How confident are you the observed effect could translate to humans — and what specifically gives you that confidence?",
        "**Clinical feasibility:** Would physicians who work with these patients be enthusiastic about administering this product? Would families enroll their child in a clinical trial? What level of potential benefit would make the risk worthwhile? How long would the trial need to run to judge whether the drug is working?",
        "**Manufacturing economics:** How much would it cost to produce and administer this drug? How many doses per year would adequately pay scientists, lab workers, quality control specialists, manufacturers, shippers, and storage facilities to profitably deliver the drug?",
        "**Payer acceptance:** Will this drug provide such a clear benefit that health insurers will basically have to cover it — or will there be anything about its profile that allows them to get away with refusing formulary placement?",
        "**Complexity of the deal:** What if this round is priced a bit high, but not investing now means losing the opportunity to invest in future rounds at attractive valuations? Sometimes investors pay to participate in subsequent rounds by 'overpaying' in the prior round — or by offering the company more than just cash. As you can see, there is a lot that goes into these complicated investment decisions.",
      ],
      deepDiveType: "drawer",
      deepDive: [
        {
          label: "Erich Scheller on the investment equation — timestamp 22:30",
          description:
            "RA Capital's TechAtlas Research Director explains NPV modeling and the full investment equation in depth.",
          url: "https://youtu.be/G9VhFQcVk9Q?t=1351",
          urlLabel: "Watch from 22:30 →",
        },
        {
          label: "Build a simple NPV model yourself — interactive Google Workbook",
          description:
            "A workbook using a fictional company. Toggle the inputs and watch the results change. No wrong answers.",
          url: "https://docs.google.com/spreadsheets/d/1N2sh3ZLDx4LE4ke3GcwSrMGtzUHlb4OhuDtonrf4P6o/edit",
          urlLabel: "Open workbook →",
        },
        {
          label: "NPV forecast calculator — Bioheights",
          description:
            "A simpler calculator for exploring how different assumptions change the investment math.",
          url: "https://bioheights.com/npv-forecast-calculator/",
          urlLabel: "Try the calculator →",
        },
        {
          label: "Full investment framework slide deck — NPLB",
          description:
            "The complete slide set behind RA Capital's approach to evaluating drug investments.",
          url: "https://nopatientleftbehind.docsend.com/view/b65fjkcdiv3hs52e",
          urlLabel: "View slide deck →",
        },
      ],
      xp: 10,
    },
    {
      id: "c3t8",
      level: "green",
      type: "video",
      contextNote: "What it really takes to say yes — and when Peter couldn't make the math work",
      title: "Making the investment decision",
      coreConcept:
        "NPV modeling makes investment decisions more rigorous — but it also reveals when a great scientific idea still can't clear the financial bar. Some important drugs simply don't get funded.",
      content:
        "So how do all these questions translate into an actual investment decision?\n\nInvestors use **Net Present Value (NPV) modeling** to translate the answers to their core questions into data that allows them to make well-informed financial decisions. No investment decision is without risk — but these calculations help investors allocate funds as thoughtfully as possible.\n\nLet's make this personal. In this video, Peter shares what it really takes to get to a \"yes\" — and what it looks like when he couldn't make the math add up, despite a company's potentially great idea. This is how important drugs don't get developed — not through indifference, but through unfavorable economics:",
      videoUrl: "https://player.vimeo.com/video/1019938209?h=5189a57bf7",
      watchFor:
        "Pay attention to what happens when Peter personally wants to invest but can't justify it financially. This is the mechanism by which medical need alone is not sufficient to attract capital — and why policy interventions like guaranteed contracts can be necessary.",
      xp: 10,
    },
    {
      id: "c3t9",
      level: "green",
      type: "video",
      contextNote: "When good science and real need still can't attract funding — Part 1",
      title: "Uninvestable spaces: allergies",
      coreConcept:
        "Despite clear patient need, allergy desensitization therapies face a commercial problem: patients fear the very treatment meant to help them. Low uptake makes the math uninvestable — even for FDA-approved therapies.",
      content:
        "The Investor's Paradox cuts both ways. Markets are good at funding innovation where returns are predictable. They fail for diseases where the commercial case is too weak — even when medical need is urgent.\n\nDespite the clear need for peanut allergy treatments, A-Immune's FDA-approved desensitization therapy struggled commercially because patients feared potential anaphylaxis from the treatment itself. As a result, investors remain cautious about backing similar approaches that expose patients to the allergen.\n\nThe real opportunity lies in low-risk methods — ideally tackling multiple allergens — that can win over hesitant patients. Peter discusses:",
      videoUrl: "https://player.vimeo.com/video/1019937531?h=b97e1accb3",
      watchFor:
        "Notice how Peter distinguishes between 'this drug doesn't work' and 'this drug can't get patients to use it.' Both lead to the same investment outcome — but for completely different reasons. The problem isn't the science; it's the commercial model.",
      xp: 10,
    },
    {
      id: "c3t10",
      level: "green",
      type: "video",
      contextNote: "When good science and real need still can't attract funding — Part 2",
      title: "Uninvestable spaces: antibiotics",
      coreConcept:
        "Antibiotic resistance is a genuine and growing public health threat. But because hospitals still rely on older antibiotics first, new ones can't generate sufficient revenue. The PASTEUR Act proposes guaranteed contracts to fix this.",
      content:
        "Bacteria continue evolving resistance to existing antibiotics. In this video, Peter shares why, despite this urgent public health reality, he considers the development of new antibiotics **\"uninvestable\"** — at least for now.\n\nThough antibiotic resistance is rising, truly pan-resistant infections remain extremely rare, so most hospitals still rely on older antibiotics first. New antibiotics would sit on shelves, used only when everything else fails. Regulatory hurdles combined with limited commercial demand deter investment — even though future-proofing our antibiotic supply is crucial.\n\nA breakthrough product — much like recent obesity drugs — could shift perceptions and spark renewed funding in the field. But until then, this is a category where the market alone cannot solve the problem:",
      videoUrl: "https://player.vimeo.com/video/1019937771?h=0bcda22583",
      imageUrl: "/images/ch3_img5.png",
      watchFor:
        "Peter explains what a truly breakthrough antibiotic product would need to look like to change investor behavior. Then ask yourself: if the market can't solve this, what mechanism should? This sets up the guaranteed contract discussion in Chapter 8.",
      whyItMatters:
        "The existence of 'uninvestable spaces' is a feature of markets — they fund what generates returns. When society urgently needs something the market won't fund, the right tool is targeted policy like guaranteed contracts (the PASTEUR Act proposes exactly this) — not price controls that shrink returns across the board.",
      deepDive: [
        {
          label: "The PASTEUR Act — Congress.gov",
          description:
            "The full text of the PASTEUR Act, which proposes $6B in guaranteed contracts for novel antibiotic development — from $750M to $3B per drug. Following its progress in Congress is a live window into how guaranteed contract policy gets made.",
          url: "https://www.congress.gov/bill/118th-congress/house-bill/2940/text",
          urlLabel: "Read the bill →",
        },
      ],
      xp: 10,
    },
    {
      id: "c3t11",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding before moving on",
      title: "Check your understanding: All about the money",
      content: "",
      xp: 20,
      questions: [
        {
          question:
            "According to the Tufts Centre, what is the average cost to develop a single drug?",
          options: ["$50 million", "$250 million", "$2.87 billion", "$5 billion"],
          correct: 2,
        },
        {
          question: "Which best describes a biotech company?",
          options: [
            "A large global company with manufacturing and commercial capabilities selling approved drugs",
            "A small, typically pre-revenue company focused on early-stage drug discovery",
            "A government-funded research organization",
            "A company that only manufactures generic drugs",
          ],
          correct: 1,
        },
        {
          question:
            "Why is it inaccurate to assume every biotech company has large profits?",
          options: [
            "Most biotech companies donate their profits to research foundations",
            "Biotech companies are required by law to reinvest all profits into R&D",
            "Most biotech companies are pre-revenue — burning through investor cash, not generating income from sales",
            "Biotech companies operate in a different tax bracket than pharma",
          ],
          correct: 2,
        },
        {
          question:
            "The NIH spends approximately what percentage of what the biopharma industry spends on clinical trials?",
          options: ["50%", "30%", "25%", "10%"],
          correct: 3,
        },
        {
          question: "What is the Investor's Paradox?",
          options: [
            "The FDA's requirement that investors disclose conflicts of interest",
            "Drug companies must choose between innovation and profit",
            "Investors know they need to fund many bets — most will fail, but they don't know which ones until they've invested in all of them",
            "The Biotech Social Contract",
          ],
          correct: 2,
        },
        {
          question: "What is 'technical risk' in biotech investing?",
          options: [
            "The risk that customers won't want the product",
            "The risk that the drug will be too expensive to manufacture",
            "The risk that the product being developed may not even be scientifically possible to create",
            "The risk of regulatory rejection by the FDA",
          ],
          correct: 2,
        },
        {
          question:
            "What does Net Present Value (NPV) modeling help investors do?",
          options: [
            "Estimate manufacturing costs for a new drug",
            "Predict FDA approval timelines",
            "Translate questions about market size, probability, timing, and costs into a financial investment decision",
            "Calculate a drug's list price",
          ],
          correct: 2,
        },
        {
          question:
            "Why are new antibiotics considered 'uninvestable' by most investors today?",
          options: [
            "The science is too difficult",
            "The FDA approval process is too slow for antibiotics",
            "Hospitals still use older antibiotics first, so new ones generate too little commercial revenue to justify development costs",
            "The government already produces all needed antibiotics",
          ],
          correct: 2,
        },
      ],
    },
  ],
};
 
export default chapter3;