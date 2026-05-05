const chapter3Data = {
  id: "ch3",
  title: "All About the Money! VCs in Biotech",
  heroImage: "/images/ch3_img0.jpg",
  topics: [
    {
      id: "c3t0",
      level: "green",
      type: "video",
      contextNote: "Start here — why drug development costs so much",
      title: "How Much Does a Drug Cost to Develop?",
      content: "How much do you think it costs to develop a drug, on average? The Tufts Centre for the Study of Drug Development calculated a cost of about $2.87 Billion in 2016. Of course, the actual cost depends on many factors — and that's what this chapter explores.\n\nOnly about 1% of the drugs that begin the development process make it to the market. Each attempt is remarkably expensive. So who pays for these attempts and why are they incentivized to do so?\n\nIn this 2-minute video, the analogy of a mountain climbing expedition is used to illustrate why, even in spite of seemingly extravagant list prices, most drug companies are lucky to earn a 10% profit.",
      imageUrl: "/images/ch3_img0.jpg",
      videoUrl: "https://www.youtube.com/embed/crV1k_hcKgE",
      xp: 15
    },
    {
      id: "c3t1",
      level: "green",
      type: "overview",
      contextNote: "What you'll learn in this chapter",
      title: "Chapter 3 Overview",
      content: "In this chapter, we will explore the following topics:\n\n- Biotech vs. pharma — what's the difference?\n- So how profitable is the biopharma industry?\n- Investors: \"Don't have money? We'll give it to you… but only if it's worth our while.\"\n- Who are investors?\n- Why do we need investors? Doesn't the NIH fund drug discovery and development?\n- Why would investors hand out money like this?\n- The investor's perspective on funding a new medicine\n- How VCs think about and evaluate investment opportunities in biotech\n- Calculating Net Present Value (NPV) and its significance in investment decisions\n- Role of VCs in driving innovation and shaping the pharmaceutical landscape",
      imageUrl: "/images/ch3_img4.jpg",
      xp: 5
    },
    {
      id: "c3t2",
      level: "green",
      type: "reading",
      contextNote: "Key vocabulary before we dive in",
      title: "Biotech vs. Pharma — What's the Difference?",
      content: "Years ago, the term biotech basically referred to a genetics-focused company. But in the last decade or two, the term has come to refer to any smaller drug development company without its own commercialization and manufacturing capabilities — those companies too small and focused to be considered pharma.\n\nIn contrast, very large pharmaceutical companies (big pharma) are typically massive global organizations with huge manufacturing and commercial capabilities. Many are household names that have been around for a hundred years or more — Johnson & Johnson, Merck, Pfizer, GlaxoSmithKline. There are only a couple dozen of these companies.\n\nNew biotech companies are created all the time, often built around ideas from academia. With a relatively small team — many employ fewer than five people in the beginning — they secure funding and begin developing a potential drug. Then, if their scientific hypothesis is sound and there seems to be market demand, a larger pharmaceutical company will typically buy the promising biotech company and complete the series of wildly expensive clinical trials that the original company is rarely able to afford.\n\nWhen a biotech company is acquired, its high-potential assets get handed over to a larger pharma specializing in leaping the expensive hurdles required to get the drug past the finish line. The original biotech's discovery-oriented scientists are freed up to work on the next most interesting problem, and the development cycle continues.\n\nImportant: when you hear a senator rail against \"biopharma's profits,\" they almost certainly can't be talking about biotech companies — those companies don't even make profits because they aren't selling a product yet.",
      imageUrl: "/images/ch3_img6.jpg",
      xp: 10
    },
    {
      id: "c3t3",
      level: "green",
      type: "reading",
      contextNote: "Busting the myth that pharma is swimming in money",
      title: "So How Profitable Is the Biopharma Industry?",
      content: "If there's one thing the public \"knows\" about biopharma, it's that these companies rake in sky-high profits. Let's take a look — but first, let's talk about Beyoncé.\n\nImagine a teenager who wants to be a rock star. She points to Beyoncé making $580M from her Renaissance World Tour. But you can't assess the music industry based on the Beyoncés of the world. For every Beyoncé or Taylor Swift, there are literally hundreds of thousands of other musicians living gig to gig.\n\nWe make this exact mistake when thinking about biopharma. The hundreds of biotech companies you've never heard of are pre-revenue — not generating any income — almost as a rule. They're burning through large sums of cash, since everything that research and development requires is seriously expensive.\n\nThere's a massive chasm between \"Does this protein bind the target we think it does?\" and \"Buy our safe, effective drug for Alzheimer's disease.\"\n\n**So where does this money come from? Who would just hand over this kind of cash?**\n\nThe answer is… investors!",
      imageUrl: "/images/ch3_img2.png",
      xp: 10
    },
    {
      id: "c3t4",
      level: "green",
      type: "video",
      contextNote: "Who puts up the money — and why",
      title: "Who Are Investors?",
      content: "Sometimes investors are extremely rich individuals like Warren Buffett. But investments are also made via institutions like those that manage your 401(k), your university's endowment, or your grandparents' pension. RA Capital, the publisher of this course, manages investments from all these types of organizations.\n\nIn a way, we're all healthcare investors. Most of us pay monthly insurance premiums — an investment meant to pay off when we get ill or injured. Our taxes also go toward Medicare and Medicaid, investments in the health of our communities.\n\nIn this video, Peter Kolchinsky describes what it's like having a fiscal responsibility to others that can run counter to what he may want to invest in for personal reasons.",
      imageUrl: "/images/ch3_img3.jpg",
      videoUrl: "https://player.vimeo.com/video/1019938072?h=b50c5e8e6e",
      xp: 15
    },
    {
      id: "c3t5",
      level: "green",
      type: "video",
      contextNote: "Debunking a persistent myth — the NIH doesn't develop drugs",
      title: "Why Do We Need Investors? Doesn't the NIH Fund Drug Development?",
      content: "Contrary to popular belief (a belief even shared by some in Congress!), the government does NOT fund most drug development.\n\nThe NIH does allocate grants to support early-stage scientific research. NIH-supported investigators play an important role in basic science experiments that lay the foundation for discoveries. But the NIH does not develop drugs, full stop. The NIH spends approximately 10% of what the industry spends on clinical trials.\n\nInnovation isn't just something that arises out of a lab — it needs to be shaped into a product-market fit. Often this requires that people with business experience partner with academics. See how RA Capital engages with academics in that collaboration:",
      imageUrl: "/images/ch3_img1.png",
      videoUrl: "https://media.racap.com/default-media/publicwebsite/Video/Planetnutshell-comp.mp4",
      xp: 15
    },
    {
      id: "c3t6",
      level: "green",
      type: "reading",
      contextNote: "The risk investors take — and why they take it",
      title: "Why Investors Fund Biotech Startups: Part 1",
      content: "If you're an investor, you're well aware that biopharma research requires a massive amount of upfront cash with no guarantee there will even be a working product at the end of the road. Even if you focus the best scientific minds on solving some aspect of a disease, there's still no guarantee you'll succeed.\n\nThis represents a very different type of risk than investing in software. When investing in a software company, investors take on \"business risk\" — customers may not like the product — but there's no doubt the software can be created. In contrast, biopharma investors get very familiar with \"technical risk\" — the risk that it may not even be possible for the product the company envisions to exist.\n\nSo why do investors take this kind of risk? **For the promise of returns.**",
      imageUrl: "/images/ch3_img4.jpg",
      xp: 10
    },
    {
      id: "c3t7",
      level: "green",
      type: "video",
      contextNote: "How investors decide which drug to fund — NPV explained",
      title: "Why Investors Fund Biotech Startups: Part 2 — How Investors Choose",
      content: "Remember the Investor's Paradox from Chapter 1? An investor allocates cash across a portfolio of diverse investments, relying on the fact that the reward from one \"big winner\" will be enough to make up for the failure of the vast majority. The promise of attractive returns for a big win must be compelling enough to stomach the risks of all the failures.\n\nHow does an investor decide to fund a drug in the first place? Imagine you are considering 4 options:\n\n- An injectable treatment for Alzheimer's disease that slows the progression of dementia\n- An oral pill that helps obese patients minimize cardiovascular stress\n- A gene therapy that helps babies' eyes reverse a protein buildup that would otherwise cause blindness\n- An IV chemotherapy drug that shrinks tumors and extends lives of colon cancer patients\n\nAll sound important. So how do investors choose?\n\nAs explained in the video, investors work backwards to calculate **net present value (NPV)** when deciding whether a drug is worth funding today. They consider: What would this product be worth if it works? What is the probability it will succeed? How much time and money will it take? Will physicians, payers, and patients understand that this drug is valuable?",
      imageUrl: "/images/ch3_img5.png",
      videoUrl: "https://player.vimeo.com/video/986475737?h=59f27298c2",
      xp: 15
    },
    {
      id: "c3t8",
      level: "green",
      type: "reading",
      contextNote: "The detailed questions investors actually ask",
      title: "Why Investors Fund Biotech Startups: Part 3 — The Investment Equation",
      content: "Imagine you are an investor evaluating a gene therapy that could help babies' eyes reverse a protein buildup causing blindness. You might want to know:\n\n- How many babies are born with this condition every year? Would the drug treat everyone or only a subset of patients?\n- Is there a good animal model? What do preliminary results suggest?\n- Would physicians who work with these patients be enthusiastic about administering this product?\n- Would families enroll their child in a clinical trial? What level of benefit would make the risk worthwhile?\n- How much would it cost to produce and administer this drug? How many doses to profitably provide it?\n- Will this drug provide such a clear benefit that health insurers will basically have to cover it?\n\nInvestors' core questions can be influenced by a variety of different variables, represented as part of an **investment equation**.\n\nListen to the Executive Director of RA Capital's TechAtlas Research division, Erich Scheller, explain the investment equation in depth at timestamp 22:30.",
      imageUrl: "/images/ch3_img7.png",
      videoUrl: "https://www.youtube.com/embed/G9VhFQcVk9Q?start=1350",
      xp: 15
    },
    {
      id: "c3t9",
      level: "green",
      type: "video",
      contextNote: "When the math doesn't add up — even for great science",
      title: "Making Investment Decisions",
      content: "Investors use **net present value (NPV) modeling** to translate the answers to their core questions into data that allows them to make well-informed financial decisions. No investment decision is without risk, but these calculations help investors allocate funds as thoughtfully as possible.\n\nThere is more complexity here too. For example, what if this round is priced a bit high, but unless you invest now you won't be able to invest later when the valuation might be very attractive? In this case you have to ascribe some of the return from the next round to the current round — essentially paying for an option on an allocation in the next round.\n\nIn this video, Peter shares what it really takes to get to a \"yes\" on an investment decision, and about times when he couldn't make the math add up, despite a company's potentially great idea.",
      imageUrl: "/images/ch3_img5.png",
      videoUrl: "https://player.vimeo.com/video/1019938209?h=5189a57bf7",
      xp: 15
    },
    {
      id: "c3t10",
      level: "green",
      type: "video",
      contextNote: "Why peanut allergy treatments are nearly impossible to fund",
      title: "Uninvestable Spaces 1: Allergies",
      content: "Despite the clear need for peanut allergy treatments, A-Immune's FDA-approved desensitization therapy struggled commercially because patients feared potential anaphylaxis. As a result, investors remain cautious about backing similar approaches that expose patients to the allergen.\n\nThe real opportunity lies in low-risk methods — ideally tackling multiple allergens — that can win over hesitant patients.\n\nPeter discusses why, despite massive patient need, allergy treatments are one of the hardest spaces to attract investment.",
      imageUrl: "/images/ch3_img0.jpg",
      videoUrl: "https://player.vimeo.com/video/1019937531?h=b97e1accb3",
      xp: 15
    },
    {
      id: "c3t11",
      level: "green",
      type: "video",
      contextNote: "A public health crisis that the market still won't fund",
      title: "Uninvestable Spaces 2: Antibiotics",
      content: "Bacteria continue to evolve and develop resistance to existing antibiotics. In this video, Peter shares why, despite this fact, he considers the development of new antibiotics \"uninvestable\" — at least for now.\n\nThough antibiotic resistance is rising, truly \"pan-resistant\" infections remain extremely rare, so most hospitals still rely on older antibiotics. Regulatory hurdles combined with limited commercial demand deter investment, even though future-proofing our antibiotic supply is crucial.\n\nHowever, a breakthrough product — much like recent obesity drugs — could shift perceptions and spark renewed funding in the field.",
      imageUrl: "/images/ch3_img0.jpg",
      videoUrl: "https://player.vimeo.com/video/1019937771?h=0bcda22583",
      xp: 15
    },
    {
      id: "c3t12",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding",
      title: "Quiz 3.1: Venture Capital Investment in Biotech Innovation",
      content: "Test your understanding of the key concepts from this chapter.",
      xp: 20,
      questions: [
        {
          question: "Most new drug candidates don't make it to clinical trials. Fewer than 10% of drugs that begin trials make it all the way to the market. Of those drugs that do make it to market, what percentage become very profitable blockbusters?",
          options: ["0.01%", "1%", "10%", "25%"],
          correct: 2
        },
        {
          question: "Resources for Phase III clinical trials are usually supplied by:",
          options: ["The NIH", "Public universities", "Small biotech companies", "Profitable big pharma companies"],
          correct: 3
        },
        {
          question: "About how much was invested between 2010–2020 in about 4,000 start-ups working on medical innovation?",
          options: ["$100 Trillion", "$100 Billion", "$10 Billion", "$100 Million"],
          correct: 1
        },
        {
          question: "What is the approximate cost of developing a single new drug?",
          options: ["$2 Million", "$200 Million", "$2 Billion", "$200 Billion"],
          correct: 2
        },
        {
          question: "___ is a financial metric used to estimate the profitability of a potential drug development project. It helps with decision-making by comparing the present value of expected future cash flows with the initial investment.",
          options: ["Net Present Value (NPV)", "Profitability Assumption", "Predicted Drug Efficacy Analysis", "Investigational New Drug Metric"],
          correct: 0
        }
      ]
    },
    {
      id: "c3t13",
      level: "green",
      type: "summary",
      contextNote: "Key takeaways before you move on",
      title: "Chapter 3 Summary",
      content: "In Chapter 3, we examined the financial aspects of drug development. Here are the key concepts:\n\n**Biotech vs. Pharma:** Small biotech companies focus on early-stage R&D while pharma focuses on late-stage and commercialization — but those definitions have been blurred. The most relevant difference is that while pharma has revenues from existing marketed drugs, most biotech companies are recently formed and not yet profitable.\n\n**Funding for Drug Development:** The private sector — venture capitalists and companies — not the government, funds most drug development. Investors take on high risks across a portfolio of bets, hoping to receive high returns from the few successful ones.\n\n**Investor Decisions:** Investors use complex calculations like NPV modeling to assess risks and potential returns. They consider market size, competition, probability of success, time to market, and development costs.\n\n**Net Present Value:** NPV is a financial model used by investors to estimate the profitability of a potential drug. It considers factors like revenue, costs, and the time value of money.\n\nNew drug prices are high due largely to the high cost and risk associated with their development. In the next chapter, we'll look at the issue of affordability in more depth.",
      imageUrl: "/images/ch3_img5.png",
      xp: 5
    }
  ]
};
 
export default chapter3Data;