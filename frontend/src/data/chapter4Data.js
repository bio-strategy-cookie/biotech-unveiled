const chapter4Data = {
    id: "ch4",
    title: "Why New Drugs Are So Expensive",
    heroImage: "/images/ch4_img0.png",
    topics: [
      {
        id: "c4t0",
        level: "green",
        type: "reading",
        contextNote: "Setting up the central question of this chapter",
        title: "Drugs Are Too Expensive… Right?",
        content: "If there's one thing everyone in the U.S. knows, it's that high drug prices are as American as apple pie. Even though the U.S. leads the world in biomedical innovation, the products of those advancements are more expensive on our own soil than anywhere else in the world. And honestly? It isn't fair.\n\nIn this chapter and the next, you'll gain a better understanding about why drugs are priced the way they are. We'll explore important questions like:\n\n- How do drug companies determine what to charge?\n- Who is responsible for setting the price you pay at the pharmacy counter?\n- How expensive is too expensive?\n- What's stopping companies from just charging whatever they want?\n- Why are drugs more expensive in the US than elsewhere?\n- Do drugs stay expensive forever?\n- And (this one is important) expensive for whom?\n\nDrug-pricing is a complex topic, and we aim to share objective facts as well as articulate our particular perspective on things.",
        imageUrl: "/images/ch4_img5.png",
        xp: 10
      },
      {
        id: "c4t1",
        level: "green",
        type: "overview",
        contextNote: "What you'll learn in this chapter",
        title: "Chapter 4 Overview",
        content: "Here are the sections in this chapter:\n\n- Who Can Afford a $2M Drug\n- What Are The Primary Factors That Influence A Drug's Price?\n- How Drug Pricing Works\n- Why Drug List Prices Don't Reflect True Costs\n- Who is Supposed to Pay List Price?\n- Generics and Patent Burning Parties\n- The Mortgage Analogy",
        imageUrl: "/images/ch4_img6.jpg",
        xp: 5
      },
      {
        id: "c4t2",
        level: "green",
        type: "video",
        contextNote: "A real baby's story — and the $2.1M question",
        title: "Who Can Afford a $2M Drug?",
        content: "Kaylee Price has spinal muscular atrophy, a fatal genetic muscle disease. Novartis's gene therapy Zolgensma can cure her in a single dose — for $2.1 million.\n\nWho has $2.1M to spare? Kaylee's family doesn't. But importantly, they didn't need to come up with that money themselves. They have health insurance, which paid for the drug and saved Kaylee's life without decimating her parents' financial life.\n\nInsurance is intended to be a pooled savings mechanism that buys all of us peace of mind. We pay into the system so that those pooled resources will be there to cover us if the unexpected happens.\n\nYour experience playing with the NPV models in Chapter 3 hopefully illustrated that new drugs must necessarily be expensive in order to incentivize continued investment in innovation. But that brings us to our driving question: **\"Expensive to whom?\"** The answer shouldn't be — and doesn't have to be — individual patients or their families. Health insurance is intended to spread the cost of expensive therapies over large segments of the population.\n\nWould you accept a few dollars' increase to your health insurance premium if you knew that it meant more babies like Kaylee would get access to Zolgensma?",
        imageUrl: "/images/ch4_img0.png",
        videoUrl: "https://www.youtube.com/embed/Sl3eEuWa-gs",
        xp: 15
      },
      {
        id: "c4t3",
        level: "green",
        type: "video",
        contextNote: "A refresher on what drives a drug's price tag",
        title: "What Are the Primary Factors That Influence a Drug's Price?",
        content: "In the last chapter, you learned about the values that investors use to fund drug development. And remember the Investor's Paradox from Chapter 1? Investors fund an entire portfolio of potential therapies, knowing that only a few will become profitable blockbusters. If rewards for those few are high, the overall portfolio is worth funding.\n\nCheck out the variables detailed under \"what it's worth if it works.\" From a drug company's perspective, when determining a price, it's important to consider:\n\n- Market size\n- Production costs\n- Diagnosis and treatment rate\n- Presence of competitors\n- Patent life\n- Treatment duration\n- Projected adherence to the medication\n\nYou might think that once this information is nailed down, setting a price should be relatively straightforward. Unfortunately, it's way more complicated than that…",
        imageUrl: "/images/ch4_img7.png",
        videoUrl: "https://www.youtube.com/embed/LOv6gPfAtgU",
        xp: 15
      },
      {
        id: "c4t4",
        level: "green",
        type: "video",
        contextNote: "Watch this WSJ explainer — it's essential context for everything that follows",
        title: "How Drug Pricing Works",
        content: "Watch this short video from the Wall Street Journal on how drug pricing actually works.\n\nYou may think: can't drug companies just charge whatever they want? Using that logic, why isn't Novartis charging $20 million for Zolgensma instead of $2 million? Novartis has no competition in this market. But if Novartis charged more than the drug was worth, payors would balk and decide not to cover the drug. The public would be on their side. There would be outrage — directed at Novartis, not at the plans that say \"$20 million is too much.\"\n\nAfter watching, think about: **what are formularies, and why do they matter to patients?**",
        imageUrl: "/images/ch4_img9.png",
        videoUrl: "https://www.youtube.com/embed/aeG2lWxYO_Y",
        xp: 15
      },
      {
        id: "c4t5",
        level: "green",
        type: "reading",
        contextNote: "Why the price tag you see is almost never what anyone pays",
        title: "What the Term \"Drug Price\" Means",
        content: "The list price of a drug isn't what most people actually pay. This figure is a starting point for negotiations between drug companies, insurers, and pharmacy benefit managers (PBMs). The final price — impacting patients' out-of-pocket costs — is determined by one's specific health insurance plan and its negotiations with these entities.\n\nHere's where things get interesting: While it may feel like a new, expensive drug is causing your insurance premiums to rise, it's important to remember that the percentage of your premium dedicated to covering drug costs (around 10%) has likely remained fairly constant over the past 15 years. What has changed is the specific drugs being covered.\n\nThis complex system also leads to a situation where the same drug can have several different costs depending on a patient's insurance coverage. Five people with different plans could all be prescribed the same medication, yet pay vastly different amounts at the pharmacy.\n\nThis pricing structure is a result of negotiations and rebates that happen behind the scenes.",
        imageUrl: "/images/ch4_img2.jpg",
        xp: 10
      },
      {
        id: "c4t6",
        level: "green",
        type: "quiz",
        contextNote: "Check your understanding",
        title: "Quiz 4.1: Drug Pricing Basics",
        content: "Test your understanding of the key concepts so far.",
        xp: 20,
        questions: [
          {
            question: "Health insurance functions to improve affordability of expensive drugs like Zolgensma by:",
            options: ["Determining drug prices.", "Spreading the cost of the treatment across a large pool of insured individuals.", "Providing financial assistance programs to individual patients.", "Requiring drug companies to ignore low-income families."],
            correct: 1
          },
          {
            question: "Why do investors fund drug development projects, even if many will not be successful?",
            options: ["They are guaranteed a return on their investment.", "They are motivated by the potential for high profits from successful drugs.", "They are required to do so by law.", "They enjoy the challenge of funding risky ventures."],
            correct: 1
          },
          {
            question: "What is the \"Investor's Paradox\"?",
            options: ["Investors are more likely to fund drugs with low potential rewards.", "Investors are hesitant to fund any new drug development because it is unlikely to produce a return.", "Investors prioritize ethical considerations over financial returns.", "It would be great to fund only successful projects and avoid funding failures, but to figure out which is which, you first have to fund them."],
            correct: 3
          },
          {
            question: "Which factor is least likely to influence a drug company's launch pricing decision?",
            options: ["The number of people who might need the drug", "The existence of alternative treatments", "Whether it's a small or large molecule", "The drug company's desire to maximize profits"],
            correct: 2
          },
          {
            question: "In the Wall Street Journal video, formularies are mentioned. What are formularies?",
            options: ["Lists of medications recommended by doctors.", "Classifications of drugs based on effectiveness.", "Lists of medications covered by insurance companies, tiered by levels of cost-sharing.", "Rebates offered by drug companies to wholesalers."],
            correct: 2
          },
          {
            question: "According to the Wall Street Journal video, what is the consequence to patients of how pharmaceutical companies and PBMs negotiate drug pricing?",
            options: ["PBMs believe rebates unfairly reduce profits for drug companies, and patients benefit from this.", "High rebates demanded by PBMs necessitate high list prices, which is a problem for patients because they are forced to pay the high list prices out of their deductibles and as co-insurance.", "There is no consequence.", "PBMs are accused of overly advocating for patient affordability, and this benefits patients."],
            correct: 1
          }
        ]
      },
      {
        id: "c4t7",
        level: "green",
        type: "reading",
        contextNote: "Why list prices and actual costs are completely different things",
        title: "Smoke and Mirrors: Why Drug List Prices Don't Reflect True Costs",
        content: "It may have surprised you to learn that though list prices for drugs rise every year, net prices — what a drug company actually realizes on the product it invented and sells — are falling. The CEO of Merck recently testified before Congress that the company realizes only ten percent of their diabetes drug Januvia's list price — meaning that they receive just $690 on a branded drug with a list price of $6,900.\n\nSo what does a list price actually mean, and where does the rest of that money go? As you saw in the Wall Street Journal video, there are incentives throughout the entire supply chain for drugs' list prices to continually increase. Pharmacy Benefit Managers (PBMs) pocket a growing cut of the \"rebates\" they \"negotiate\" on behalf of plans and employers in exchange for prioritizing a drug's position on a formulary.\n\nThat makes for some really backwards decision-making — drugs with low list prices (and therefore low payments for middlemen and payors) can be intentionally deprioritized by insurers or not covered at all.",
        imageUrl: "/images/ch4_img4.png",
        xp: 10
      },
      {
        id: "c4t8",
        level: "green",
        type: "reading",
        contextNote: "No patient is ever supposed to pay the list price",
        title: "Who Is Supposed to Pay List Price?",
        content: "We'll come back to pharmacy benefit managers (PBMs) in the next chapters (and a really funny video on PBMs awaits you). For now, note that **no actual person is supposed to pay a drug's list price.**\n\nList prices are explicitly based on PBMs' need to show greater negotiated discounts for insurers (the \"gross-to-net bubble\"). So it's especially criminal when insurers leave a patient on the hook to pay a percentage of coinsurance for a drug that's based on a list price higher than what the insurer itself will ever pay — and sometimes higher than it costs to make or sell the drug at all.\n\nWe contend that drugs represent an incredible benefit to the world and are worth the high prices society pays for them. But it's important to us — and should be important to society — that individuals who happen to get sick should not be the ones footing the bill for the failures of the system. Drugs are \"worth it\" to the world on a societal level, and we can and should collectivize these costs through proper insurance for everyone.",
        imageUrl: "/images/ch4_img2.jpg",
        xp: 10
      },
      {
        id: "c4t9",
        level: "green",
        type: "quiz",
        contextNote: "Check your understanding",
        title: "Quiz 4.2: List Prices vs. Net Prices",
        content: "Test your understanding of the key concepts so far.",
        xp: 15,
        questions: [
          {
            question: "What is the trend for net prices of drugs in recent years?",
            options: ["They are remaining stable.", "They are rising.", "They are falling.", "There is no discernible trend."],
            correct: 2
          },
          {
            question: "Why are list prices not a good indicator of actual drug costs?",
            options: ["List prices are based on international markets.", "Rebates and discounts significantly reduce the amount drug companies receive.", "List prices factor in potential future research and development expenses.", "List prices are inflated to account for potential patient lawsuits."],
            correct: 1
          }
        ]
      },
      {
        id: "c4t10",
        level: "green",
        type: "reading",
        contextNote: "When patents expire, prices crater — and that's the whole point",
        title: "Generics and Patent Burning Parties",
        content: "It's time to revisit generics. A drug is said to have \"gone generic\" once its patents expire and competition is allowed to enter the market, lowering the price through competition with identical versions of the drug. This typically happens about 14 years after the drug has been approved by the FDA.\n\nPlease read this Wall Street Journal op-ed \"Let's Throw a Patent-Burning Party,\" where RA Capital's Peter Kolchinsky argues that the period prior to a drug going generic is the period when the drug is paying back the investors who funded it. Once the investors have been rewarded — and therefore incentivized to continue investing in drug innovation — the drug can (and should!) be sold very cheaply forever after.\n\nOnce a drug's patent expires, generics companies are typically able to copy the drug and sell their own version. Robust generic competition often means a drug's price will often drop by over 95% within the first year of patent expiration. This system is a win-win for everyone!\n\n**Read:** [Let's Throw a Patent-Burning Party (WSJ op-ed)](https://files.cdn.thinkific.com/file_uploads/347577/attachments/813/7f5/991/Let%E2%80%99s_Throw_a_Patent-Burning_Party.pdf)",
        imageUrl: "/images/ch4_img1.jpg",
        xp: 10
      },
      {
        id: "c4t11",
        level: "green",
        type: "reading",
        contextNote: "A simple analogy that makes the whole system click",
        title: "The Mortgage Analogy",
        content: "As introduced in Chapter 1, paying high prices for a branded drug (via insurance providers) is like paying a mortgage. In the case of a drug, patent-expiration is like that last mortgage payment, at which point society now \"owns\" the drug and will benefit from inexpensive versions of it for so long as it continues to be useful.\n\nIf another drug comes along that treats the same disease, but better, society might elect to \"take out another mortgage\" to pay for that one. But if the new drug isn't better than the generics it competes against, chances are it won't succeed commercially. Drug companies are always competing against their prior successes.\n\nDid you know that 90% of all prescriptions are for generics? According to the Association for Accessible Medicines, generic drugs have saved America nearly $3 trillion over the past decade, while accounting for only 1.5% of America's total healthcare spending.\n\nNow let's hear a little more from Peter about how we're going to pay for the next generation of drugs.",
        imageUrl: "/images/ch4_img8.jpg",
        videoUrl: "https://player.vimeo.com/video/1026284942?h=5f8dea4c9e",
        xp: 15
      },
      {
        id: "c4t12",
        level: "green",
        type: "quiz",
        contextNote: "Check your understanding",
        title: "Quiz 4.3: Generics and the Mortgage Analogy",
        content: "Test your understanding of the key concepts from this chapter.",
        xp: 20,
        questions: [
          {
            question: "In the Mortgage analogy for drug development, the period of time similar to a \"mortgage payment\" for branded drugs is compared to:",
            options: ["The high cost associated with developing and testing a new drug.", "The profit earned by the company that created the original drug.", "The ongoing costs of manufacturing and distributing the drug.", "The financial burden placed on patients with chronic illnesses."],
            correct: 0
          },
          {
            question: "What is the approximate timeframe for when a drug typically becomes available as a generic?",
            options: ["Immediately upon receiving FDA approval.", "Within a year of being introduced to the market.", "Around 14 years after FDA approval.", "The timeframe is not typically predictable."],
            correct: 2
          },
          {
            question: "Generics account for _____ of all prescriptions filled.",
            options: ["Less than 25%", "Around 50%", "Approximately 75%", "Nearly 90%"],
            correct: 3
          },
          {
            question: "The initial high price of brand-name drugs:",
            options: ["is due to the ongoing costs of manufacturing and distribution.", "is due to the need to maintain high profits for the drug company.", "compensates investors who funded their development.", "demonstrates the superior effectiveness of brand-name drugs compared to generics."],
            correct: 2
          }
        ]
      },
      {
        id: "c4t13",
        level: "green",
        type: "summary",
        contextNote: "Key takeaways before you move on",
        title: "Chapter 4 Summary",
        content: "In the world of drug development, scientists primarily focus on the research, development, and testing of new medications. In this chapter, we've endeavored to help you understand how drugs are priced and accessed by patients, and to dispel common misunderstandings about what \"list price\" really means.\n\n**List Prices vs. Net Prices:** Drug companies may set high list prices, but they often receive a much smaller amount (net price) due to rebates negotiated by Pharmacy Benefit Managers (PBMs). For example, Merck may only get $690 for their $6,900 diabetes drug.\n\n**Generics are a Win-Win:** The high price of branded drugs before they go generic allows companies to recoup investments in research and development, which in turn incentivizes further investment in innovation. After a drug's patent expires — typically around 14 years after FDA approval — generic versions can enter the market, significantly lowering the price and making the drug more affordable to everyone, forever.\n\nIn the next chapter we'll make these ideas more concrete, starting with a look at 3 different drugs, each with very different journeys to genericization: Lipitor, Gleevec, and Humira.",
        imageUrl: "/images/ch4_img3.png",
        xp: 5
      }
    ]
  };
   
  export default chapter4Data;