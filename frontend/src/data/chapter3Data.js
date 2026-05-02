const chapter3 = {
  id: "chapter-3",
  title: "All About the Money: VCs in Biotech",
  subtitle: "Where the funding for drug development actually comes from",
  estimatedTime: "50 min",
  maxXP: 190,
  overview: {
    parts: [
      {
        number: 1,
        level: "green",
        title: "Biotech vs Pharma & the funding gap",
        description: "What's the difference between biotech and pharma, how profitable is the industry really, and who actually pays for drug development?"
      },
      {
        number: 2,
        level: "yellow",
        title: "How investors think",
        description: "Why investors fund unprofitable startups, how they evaluate risk, and what the NIH actually does and doesn't do."
      },
      {
        number: 3,
        level: "red",
        title: "Net Present Value & investment decisions",
        description: "The financial models investors use to decide whether a drug is worth funding — and why some important drugs are 'uninvestable'."
      }
    ]
  },
  topics: [
    {
      id: "c3t1",
      level: "green",
      type: "video",
      contextNote: "No prior knowledge needed — sets up the funding question",
      title: "How much does it cost to develop a drug? ($2.87 billion)",
      content: "How much do you think it costs to develop a drug on average? The Tufts Centre for the Study of Drug Development calculated a cost of about $2.87 billion in 2016. Only about 1% of the drugs that begin development make it to the market. Each attempt is remarkably expensive. So who pays for these attempts, and why are they incentivised to do so? Watch this 2-minute video using a mountain climbing expedition analogy to explain why even with high list prices, most drug companies are lucky to earn a 10% profit.",
      videoUrl: "https://www.youtube.com/embed/crV1k_hcKgE",
      xp: 10
    },
    {
      id: "c3t2",
      level: "green",
      type: "reading",
      contextNote: "Sets up what this chapter covers",
      title: "Chapter overview",
      content: "In this chapter we will explore: the difference between biotech and pharma; how profitable the biopharma industry really is; who investors are and why we need them; why the NIH doesn't actually fund most drug development; why investors fund unprofitable biotech startups; how investors evaluate which drugs to fund; Net Present Value (NPV) and its significance in investment decisions; and the role of VCs in driving innovation.",
      xp: 5
    },
    {
      id: "c3t3",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — essential distinction for the whole industry",
      title: "Biotech vs Pharma: what's the difference?",
      content: "Biotech refers to any smaller drug development company without its own commercialisation and manufacturing capabilities. There are thousands of biotech companies at any one time, and you're unlikely to have heard of most of them. Big Pharma companies are typically massive global organisations with huge manufacturing and commercial capabilities — household names like Johnson & Johnson, Merck, and Pfizer. There are only a couple dozen of these. New biotech companies are created all the time, often built around ideas from academia. With a small team, they secure funding and begin developing a drug. Then, if the science is sound, a larger pharmaceutical company typically buys the promising biotech and its assets. Biopharma is an umbrella term covering both.",
      xp: 10
    },
    {
      id: "c3t4",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on biotech vs pharma — how small biotechs become big drugs",
      title: "How the biotech-pharma acquisition cycle works",
      content: "It's very rare for a biotech company to take its product from concept all the way to market by itself, because of the massive resources required for late-stage clinical trials, manufacturing, regulatory approval, payer interactions, and commercialisation. When a biotech is acquired, its high-potential assets get handed over to a larger pharma specialising in leaping the expensive hurdles required to get the drug past the finish line. The original biotech's scientists are freed up to work on the next most interesting problem. Large pharma companies get the money to buy up small biotechs from profits made on their existing drugs. This isn't something to lament — the ecosystem is functioning as it should.",
      xp: 10
    },
    {
      id: "c3t5",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — a clever way to debunk a common myth",
      title: "How profitable is biopharma? The Beyoncé analogy",
      content: "If someone asked how profitable music is as a career, would you average the earnings of the top 10 artists you can name? Probably not — that would be cherry-picking unrepresentative data. But we often make this exact mistake when thinking about biopharma. The hundreds of biotech companies you've never heard of are pre-revenue as a rule — they're not generating any income because they don't have anything to sell yet. They're burning through large sums of cash on research and development. You can't assess the biopharma industry based only on the Pfizers and Mercks of the world, any more than you can assess the music industry based on Beyoncé.",
      xp: 10
    },
    {
      id: "c3t6",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — who actually funds drug development",
      title: "So where does the money come from? Investors.",
      content: "The hundreds of pre-revenue biotech companies out there every day attempting to discover solutions for big, ambitious problems are burning through large sums of cash. Everything that research and development requires is seriously expensive. So who would just hand over this kind of cash? The answer is investors. Without investors, very few new drugs would be created.",
      xp: 10
    },
    {
      id: "c3t7",
      level: "green",
      type: "reading",
      contextNote: "No prior knowledge needed — expands the definition of investor",
      title: "Who are investors? (not just billionaires)",
      content: "Yes, sometimes investors are extremely wealthy individuals like Warren Buffett. But investments are also made via institutions like those that manage your 401(k), your university's endowment, or your grandparents' pension. In a way, we're all healthcare investors — most of us pay monthly insurance premiums, an investment meant to pay off when we get ill or injured. Our taxes also go toward Medicare and Medicaid, which are investments in the health of our communities.",
      xp: 10
    },
    {
      id: "c3t8",
      level: "yellow",
      type: "video",
      contextNote: "Builds on who investors are — a personal investor's perspective",
      title: "Peter Kolchinsky on fiscal responsibility as an investor",
      content: "In this video, Peter Kolchinsky describes what it's like having a fiscal responsibility to others — managing money from pension funds, university endowments, and other institutions — that can sometimes run counter to what he may personally want to invest in.",
      videoUrl: "https://player.vimeo.com/video/1019938072",
      xp: 10
    },
    {
      id: "c3t9",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on investor intro — debunks the government-funds-drugs myth",
      title: "Why do we need investors? Debunking the NIH myth",
      content: "Contrary to popular belief — a belief even shared by some in Congress — the government does NOT fund most drug development. The NIH does allocate grants to support early-stage scientific research, and NIH-supported investigators play an important role in basic science that lays the foundation for drug discoveries. But the NIH does not develop drugs, full stop. The NIH spends approximately 10% of what the biopharma industry spends on clinical trials. Academic research is vital, but neither academics nor the government actually develops drugs. Innovation requires people with business experience to partner with academics to shape ideas into product-market fits.",
      xp: 15
    },
    {
      id: "c3t10",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on why investors are needed — key distinction for BD and investor roles",
      title: "Why investors fund biotech startups: technical vs business risk",
      content: "If you're an investor, you're aware that biopharma research requires massive upfront cash for R&D with no guarantee of a working product. Even with the best scientific minds focused on a disease, there's no guarantee of success. This represents a very different type of risk than investing in software. When investing in software, investors take on 'business risk' — customers may not like the product, but there's no doubt the software can be created. Biopharma investors face 'technical risk' — it may not even be possible for the product the company envisions to exist. So why do investors take this kind of risk? For the promise of returns.",
      xp: 15
    },
    {
      id: "c3t11",
      level: "yellow",
      type: "reading",
      contextNote: "Builds on Part 1 — how portfolio theory drives biotech funding",
      title: "Why investors fund biotech startups: the portfolio logic",
      content: "An investor allocates cash across a portfolio of diverse investments, relying on the fact that the reward from one 'big winner' will be enough to make up for the failure of the vast majority. The promise of attractive returns for a big win must be compelling enough for an investor to stomach the risks associated with all the failures. This isn't specific to biotech — it's what drives our capitalist economy. Since government funding represents a drop in the ocean compared to private investment, without investors, very few new drugs would be created.",
      xp: 15
    },
    {
      id: "c3t12",
      level: "green",
      type: "reading",
      contextNote: "Accessible thought experiment — no finance background needed",
      title: "How investors choose which drug to fund: a 4-option exercise",
      content: "Try putting yourself in an investor's shoes. Which of these feels like the best investment? (A) An injectable treatment for Alzheimer's that slows the progression of dementia. (B) An oral pill that helps obese patients minimise cardiovascular stress. (C) A gene therapy that helps babies' eyes reverse a protein buildup that would otherwise cause blindness. (D) An IV chemotherapy drug that shrinks tumors and extends the lives of colon cancer patients. All four sound groundbreaking if successful. So how do investors choose? They work backwards to calculate net present value (NPV), considering: what would the product be worth if it works; the probability it will succeed; how much time and money it will take; and whether physicians, payers, and patients will understand its value.",
      xp: 10
    },
    {
      id: "c3t13",
      level: "yellow",
      type: "video",
      contextNote: "Builds on the 4-option exercise — real investor decision-making",
      title: "Peter Kolchinsky on what it really takes to get to a 'yes'",
      content: "Peter shares about what it really takes to get to a 'yes' on an investment decision, and about times when he couldn't make the math add up despite a company's potentially great idea.",
      videoUrl: "https://player.vimeo.com/video/1019938209",
      xp: 10
    },
    {
      id: "c3t14",
      level: "red",
      type: "reading",
      contextNote: "Assumes comfort with financial concepts — detailed NPV framework",
      title: "Net Present Value (NPV): the investment equation",
      content: "Investors use Net Present Value (NPV) modelling to translate the answers to their core questions into data for well-informed financial decisions. NPV considers: revenue projections (market size × price × probability of capture); development costs (clinical trial costs per phase); probability of success at each stage; time to market (discounted back to present value); and competitive landscape. Investors also consider option value — sometimes they pay slightly more in an early round to secure allocation in a future round when the valuation might be more attractive. As you can see, there is a lot that goes into these complicated investment decisions.",
      xp: 15
    },
    {
      id: "c3t15",
      level: "red",
      type: "video",
      contextNote: "Deep dive for those with finance or BD background",
      title: "Erich Scheller on the investment equation in depth",
      content: "Erich Scheller, Executive Director of RA Capital's TechAtlas Research division, explains the investment equation in depth — covering how investors systematically evaluate the scientific, clinical, commercial, and financial dimensions of a potential drug investment.",
      videoUrl: "https://www.youtube.com/embed/G9VhFQcVk9Q?t=1351",
      xp: 15
    },
    {
      id: "c3t16",
      level: "yellow",
      type: "video",
      contextNote: "Real example of why promising science doesn't always get funded",
      title: "Uninvestable spaces: the allergy problem",
      content: "Despite the clear need for peanut allergy treatments, FDA-approved desensitisation therapy struggled commercially because patients feared potential anaphylaxis. As a result, investors remain cautious about backing similar approaches. The real opportunity lies in low-risk methods that can win over hesitant patients. Watch Peter explain why allergies remain largely uninvestable despite the obvious need.",
      videoUrl: "https://player.vimeo.com/video/1019937531",
      xp: 10
    },
    {
      id: "c3t17",
      level: "yellow",
      type: "video",
      contextNote: "Builds on allergies — systemic reasons good drugs go unfunded",
      title: "Uninvestable spaces: the antibiotic problem",
      content: "Bacteria continue to evolve and develop resistance to existing antibiotics. Yet Peter considers the development of new antibiotics 'uninvestable' — at least for now. Truly pan-resistant infections remain extremely rare, so hospitals still rely on older antibiotics. Regulatory hurdles combined with limited commercial demand deter investment, even though future-proofing our antibiotic supply is crucial. A breakthrough product could shift perceptions and spark renewed funding.",
      videoUrl: "https://player.vimeo.com/video/1019937771",
      xp: 10
    },
    {
      id: "c3t18",
      level: "yellow",
      type: "quiz",
      contextNote: "Tests funding and investor concepts — review the sections above first",
      title: "Check your understanding 3.1: venture capital investment in biotech",
      xp: 20,
      questions: [
        {
          question: "Of drugs that do make it to market, what percentage become very profitable blockbusters?",
          options: ["0.01%", "1%", "10%", "25%"],
          correct: 2
        },
        {
          question: "Resources for Phase III clinical trials are usually supplied by:",
          options: ["The NIH", "Public universities", "Small biotech companies", "Profitable big pharma companies"],
          correct: 3
        },
        {
          question: "What is the approximate cost of developing a single new drug?",
          options: ["$2 million", "$200 million", "$2 billion", "$200 billion"],
          correct: 2
        },
        {
          question: "Which financial metric helps investors estimate the profitability of a potential drug development project?",
          options: ["Net Present Value (NPV)", "Profitability Assumption", "Predicted Drug Efficacy Analysis", "Investigational New Drug Metric"],
          correct: 0
        }
      ]
    },
    {
      id: "c3t19",
      level: "green",
      type: "summary",
      contextNote: "Review before moving to Chapter 4",
      title: "Chapter 3 summary",
      content: "In Chapter 3 we examined the financial aspects of drug development. Key concepts: Biotech vs Pharma — small biotechs focus on early-stage R&D, while large pharmas use revenues from existing drugs to fund late-stage development and commercialisation. Funding for Drug Development — the private sector (venture capitalists, companies), not the government, funds most drug development. Investors take on high risks across a portfolio hoping to receive high returns from the few successful ones. Investor Decisions — investors use NPV modelling to assess risks and potential returns, considering market size, competition, probability of success, time to market, and development costs. Net Present Value — a financial model used by investors to estimate the profitability of a potential drug, considering the time value of money. New drug prices are high largely because of the high cost and risk associated with development.",
      xp: 10
    }
  ]
};

export default chapter3;
