const chapter5 = {
  id: 5,
  title: "From Brand to Generic: What Can Go Wrong",
  topics: [
    {
      id: "c5t1",
      level: "green",
      type: "reading",
      contextNote: "Three drugs, three very different journeys to genericization",
      title: "Chapter intro: three drugs, three different stories",
      coreConcept:
        "The Mortgage Model works in theory. In practice, drugs take very different paths to genericization — and sometimes they don't get there at all.",
      content:
        "In this chapter, we'd like to make what we've talked about even more concrete. We'll follow the journey of three specific prescription drugs — Lipitor, Gleevec, and Humira — all the way from molecule to generic drug. We'll also discuss insulin and some common misunderstandings about its pricing.\n\nNext, we'll look at several reasons why certain drugs go off-patent but stay expensive. We'll talk about direct-to-consumer (DTC) advertising and other common misconceptions about drug pricing, and wrap up with a discussion of why the term 'drug price' means different things to different people.\n\nLet's dive in.",
      imageUrl: "/images/ch5_img0.jpg",
      keyPoints: [
        "**Lipitor (atorvastatin)** — the textbook example of the Social Contract working as designed",
        "**Gleevec (imatinib)** — a wonder drug whose path to affordable generic was delayed by supply chain incentives, not patent gaming",
        "**Humira (adalimumab)** — a biologic that had no genericization pathway when launched, and whose patent thicket kept it expensive far longer than intended",
        "**Insulin** — widely misunderstood; today's insulins are not the 1922 molecule, and the real problem is PBMs blocking biosimilar access",
      ],
      whyItMatters:
        "Each story reveals a different failure mode in the genericization system — and points to a different policy fix. Understanding which problem is which is essential for advocating for the right solution.",
      xp: 10,
    },
    {
      id: "c5t2",
      level: "green",
      type: "reading",
      contextNote: "The Social Contract working exactly as designed",
      title: "Lipitor: the textbook case",
      coreConcept:
        "Lipitor went from $13 billion in peak annual sales to a $5/month generic. That's the mortgage being paid off — the system working exactly as it should.",
      content:
        "**Lipitor** (atorvastatin) is a small molecule drug in a class called statins, which lower LDL (bad) cholesterol and reduce incidence of heart attacks. Developed by the Warner-Lambert drug company and launched in 1996 by Warner-Lambert and its partner Pfizer, Lipitor wasn't the first statin to hit the market — but it quickly became recognized as the most effective. The drug reached **$13 billion in peak annual sales** and was at the time the best-selling pharmaceutical in history. Pfizer acquired Warner-Lambert in 2000 for $90 billion (after a dramatic hostile takeover battle — a story for another course). Lipitor's patent expired in **November 2011**.\n\nTo incentivize generic drugmakers to challenge originator products, whichever generics company files its application with the FDA first gets a sweet deal: they get to market the only generic version of the drug for six months. So the price of Lipitor did not immediately crater. (For a fascinating look at the lengths generic companies go to in order to win that lucrative 180-day exclusivity, we recommend Katherine Eban's award-winning book *Bottle of Lies.*) But in May 2012, the floodgates of competition opened — and atorvastatin became and remains an inexpensive commodity drug.\n\nAccording to Statista, **more than 116 million atorvastatin prescriptions** were written in the US in 2021, making it the most common drug in America's medicine cabinets.\n\nThe story of Lipitor is an example of how the Biotech Social Contract *should* play out: high price during the patent period → genericization → society owns the drug permanently at near-zero cost.",
      imageUrl: "/images/ch5_img1.png",
      stats: [
        { value: "$13B", label: "Peak annual sales" },
        { value: "2011", label: "Patent expiry" },
        { value: "116M+", label: "US prescriptions per year today" },
        { value: ">95%", label: "Price decline after genericization" },
      ],
      deepDive: [
        {
          label: "Bottle of Lies — Katherine Eban",
          description:
            "A fascinating account of the lengths generic companies go to in order to win the lucrative 180-day exclusivity period. Award-winning journalism on the generic drug supply chain.",
          url: "https://www.amazon.com/Bottle-Lies-Inside-Story-Generic/dp/0062338781",
          urlLabel: "See the book →",
        },
      ],
      xp: 10,
    },
    {
      id: "c5t3",
      level: "green",
      type: "reading",
      contextNote: "A wonder drug with a messy path to affordability",
      title: "Gleevec: when the supply chain gets in the way",
      coreConcept:
        "Gleevec went generic in 2016 — but prices didn't fall immediately. The supply chain's perverse incentives kept generic imatinib expensive long after it should have become cheap.",
      content:
        "Like atorvastatin, the cancer medicine **Gleevec** (imatinib) is a small molecule. But unlike atorvastatin, its path to becoming an inexpensive generic was convoluted.\n\nGleevec is a kinase inhibitor first approved in 2001 as an oral pill to treat **chronic myelogenous leukemia (CML)**. Gleevec's developer, Novartis, subsequently tested the drug in a variety of cancer indications — eventually winning approvals in acute lymphoblastic leukemia, gastrointestinal stromal tumors, and several other cancers. Almost all CML patients respond to Gleevec, and according to the American Cancer Society, most responses last for many years. For many cancer patients, Gleevec is nothing short of a wonder drug.\n\nIt was a financial wonder for Novartis too. In 2015 — the last full year it was patented — Gleevec brought in **$4.6 billion** as Novartis's top-seller, costing society upwards of **$10,000 per month per patient**.\n\nGleevec went generic in 2016. But unlike Lipitor, prices didn't fall quickly — because of the convoluted machinations of the players in the specialty drug supply chain between a doctor prescribing a drug and the patient picking it up at the pharmacy. PBMs were incentivized to keep generic prices relatively high, because lower prices meant smaller rebates and smaller fees for the middlemen.\n\nToday, a 30-day supply of a common dose of generic imatinib is available for **$13.40** at Mark Cuban's Cost Plus Drugs. The story of how this miracle pill went from highly profitable branded drug, to still-very-expensive generic, to less than a dollar a day has been explored at length by journalists and analysts who investigate the drug supply chain — which is ripe for reform and has recently attracted congressional attention.",
      imageUrl: "/images/ch5_img2.png",
      stats: [
        { value: "$4.6B", label: "Gleevec revenue in final patent year" },
        { value: "$10K/mo", label: "Cost per patient at peak" },
        { value: "$13.40", label: "30-day generic price at Cost Plus Drugs today" },
      ],
      deepDive: [
        {
          label: "The breakthrough science behind Gleevec — Nature Education",
          description:
            "The cool biology of how a kinase inhibitor targets cancer cells specifically, leaving healthy cells largely unaffected.",
          url: "https://www.nature.com/scitable/topicpage/gleevec-the-breakthrough-in-cancer-treatment-565/",
          urlLabel: "Read →",
        },
        {
          label: "Why generic drugs should be cheap but insurers charge thousands — WSJ",
          description:
            "An investigation into how the supply chain keeps generic drug prices high long after competition should have brought them down.",
          url: "https://www.wsj.com/health/healthcare/generic-drugs-should-be-cheap-but-insurers-are-charging-thousands-of-dollars-for-them-ef13d055",
          urlLabel: "Read →",
        },
      ],
      xp: 10,
    },
    {
      id: "c5t4",
      level: "green",
      type: "reading",
      contextNote: "The world's best-selling drug — and why biologics are different",
      title: "Humira: biologics and the biosimilar challenge",
      coreConcept:
        "Humira generated $200B+ in revenue for AbbVie — partly because biologics had no genericization pathway when it launched, and partly because AbbVie's patent thicket deliberately delayed competition.",
      content:
        "**Humira** (adalimumab) is a biologic drug marketed for a long list of autoimmune conditions like rheumatoid arthritis and psoriasis. It became the world's best-selling drug following Lipitor, racking up more than **$200 billion** in revenue for AbbVie since its first approval in 2002.\n\nWhen Humira was approved, there was no regulatory pathway for generic biologics. The Affordable Care Act introduced the concept of **biosimilars** in 2010. But AbbVie's approval in multiple uses and its controversial patenting strategy — sometimes termed a **\"patent thicket\"** by critics — meant that biosimilars for Humira did not enter the market until **2023**.\n\nMaking matters worse for any patient stuck paying a co-pay based on the drug's list price, adalimumab biosimilar adoption has gotten off to a very slow start. As with Gleevec generics, biosimilar manufacturers are incentivized by PBMs to keep prices relatively high. As of April 2024, insurer-PBM-pharmacy conglomerates like CVS have begun introducing \"store brand\" adalimumab biosimilars — which may finally mean the beginning of real savings for patients.\n\nHumira illustrates a deliberate breach of the Social Contract: a drug kept expensive far longer than intended through strategic patent filing.",
      imageUrl: "/images/ch5_img3.jpg",
      keyPoints: [
        "Biologics are large, complex molecules (proteins, antibodies) — much harder to copy than small molecules like statins",
        "Biosimilars are the biologic equivalent of generics — similar but not identical, requiring their own clinical evidence",
        "AbbVie filed 100+ patents to delay biosimilar competition — a classic patent thicket that critics say violated the intent of the patent system",
        "Even after biosimilar entry, PBMs can keep prices high by directing patients to branded versions through formulary design",
        "CVS's 'store brand' biosimilar launch in 2024 may be the first meaningful step toward lower costs for patients",
      ],
      xp: 10,
    },
    {
      id: "c5t5",
      level: "green",
      type: "video",
      contextNote: "Why insulin's story is more complicated than the headlines suggest",
      title: "But what about insulin?",
      coreConcept:
        "Today's insulins are not the same molecule as the 1922 original. The real problem isn't manufacturer pricing — it's PBMs blocking access to biosimilar insulins that should already be cheap.",
      content:
        "We've all seen news stories about diabetics being charged too much for insulin. Why would a drug company charge so much for something discovered more than 100 years ago?\n\nLet's break it down. **Today's insulins are not the same as the 1922 original.** The insulin developed in 1922 was purified from animal pancreases — only available in small quantities and of varying quality and potency. Early advances included better purification technologies to boost yields; eventually synthetic versions were developed, then those were 'humanized' to reduce allergic reactions. Today's insulins more closely resemble human insulin and are designed to be shorter or longer acting as necessary. They are dramatically more effective and safer.\n\nJust like today's new cars aren't 100-year-old Model Ts just because we had Model Ts way back when, today's insulins aren't the ancient discoveries some would make them out to be. And while no one makes cheap Model Ts anymore — or even cheap 1981 Ford Escorts — you can still get some older insulins for very little. It's just that almost no one wants them. That's the market's way of saying that the latest insulin analogs are materially better.\n\nEven so, the real prices insulin manufacturers charge have been falling for several years. Those falling prices are often masked by the strange trip a drug takes between its manufacturer and the patient. And most insulins on the market should have gone totally generic. Many do have generic or biosimilar equivalents — yet drug supply chain middlemen (PBMs) often make them more expensive to access than branded insulins, or prevent access altogether.\n\nWe'd argue that no insulin — brand or generic — ought to come at any cost to the patient. While most are available for less than $35 per prescription out-of-pocket, why bother charging anyone who needs insulin even a modest copay? It's not like people use it for fun.\n\nWatch the story of insulin's discovery and its evolution over 100 years:",
      videoUrl: "https://www.youtube.com/embed/Gk1D4VgM8jY",
      imageUrl: "/images/ch5_img4.jpg",
      watchFor:
        "Notice how dramatically insulin has evolved from 1922 to today. Then ask: is the public debate about insulin pricing targeting the right problem — manufacturers or middlemen?",
      didYouKnow:
        "We'd argue that no insulin — brand or generic — ought to come at any out-of-pocket cost to the patient. People don't use insulin for fun. It's a life-sustaining medication, and any out-of-pocket cost for it is indefensible.",
      xp: 10,
    },
    {
      id: "c5t6",
      level: "green",
      type: "reading",
      contextNote: "Celebrating the end of the mortgage — and who actually does it",
      title: "Celebrating the end of the mortgage",
      coreConcept:
        "Drug companies should celebrate when their drugs go off patent. Occasionally, one actually does — and it's worth noting.",
      content:
        "As Peter noted in his WSJ op-ed about \"patent burning,\" drug companies should celebrate when their drugs go off patent — even if it might feel more like mourning than celebrating. Occasionally, a company actually does celebrate this milestone.\n\nTake a look at the chart that shows atorvastatin as America's most-prescribed medicine. A bit further down that list is **lisinopril** — a blood pressure medicine developed and marketed by Merck and its partner AstraZeneca, until it went generic in 2002. In 2016, lisinopril was the most-prescribed drug in the US, ahead of atorvastatin. At the time, **Merck actually celebrated** that a drug its scientists invented was so valuable to so many people as a generic. It's a little late for the party to have happened, but at RA Capital, our stance is that it's never too late.\n\nIntriguingly, **Keytruda** — a Merck cancer drug — has now surpassed Humira as the world's best-selling medicine. Will Merck celebrate that drug's genericization when it comes? Only time will tell. We hope so!",
      imageUrl: "/images/ch5_img1.png",
      whyItMatters:
        "A company that genuinely celebrates genericization is one that understands its role in the Biotech Social Contract — not as an opponent of affordable medicine, but as its enabler. That attitude shift matters for how the industry is perceived and how it behaves.",
      xp: 10,
    },
    {
      id: "c5t7",
      level: "green",
      type: "reading",
      contextNote: "When going off-patent isn't enough — four reasons prices don't fall",
      title: "When an off-patent drug stays expensive",
      coreConcept:
        "Drugs can fail to become affordable after patent expiry for several distinct reasons — each requiring a different policy response.",
      content:
        "The cases of Gleevec and Humira illustrate how the incentives within the supply chain for specialty drugs can keep generic and biosimilar prices higher than a true generic should be. Humira's patent thicket is one method of what is often called **\"patent gaming\"** — dissuading competition through frivolous patents that should be eliminated. But there are other reasons a drug's price might not fall much when it goes off patent.",
      imageUrl: "/images/ch5_img5.jpg",
      keyPoints: [
        "**Patent thickets and gaming:** Filing dozens of secondary patents covering minor aspects of a drug to delay generic entry beyond the original patent term. When these cover features with no real patient benefit, it's patent gaming — a violation of the Social Contract. The problems of price jacking and patent-gaming could potentially be resolved with a system of *contractual genericization* or other regulation that sets drug prices when patents expire.",
        "**Market forces:** Generic competition depends on manufacturers deciding it's worth entering. Sometimes generic competition never materializes — for drugs that are particularly difficult to manufacture, or drugs that serve a very small number of patients. Without competition to put downward pressure on price, a brand manufacturer can continue to sell at the market rate. Large purchaser groups can also drive prices so low that manufacturers exit, concentrating production — setting the stage for shortages when the remaining player has a manufacturing problem.",
        "**Price jacking:** In an extreme case, an older generic drug might drastically increase in price when there's high demand but only one generic competitor. The infamous story of Daraprim and Martin Shkreli is emblematic of 'price jacking' — acquiring the rights to a single-source generic and drastically raising its price. While this does happen occasionally, it is **not as common as people may believe**.",
        "**Manufacturing complexity:** Some drugs — especially biologics and gene therapies — are too complex to copy. There may never be a true generic for Zolgensma. By some estimates, there are more than 100 gene or cell therapies approved worldwide and thousands more in development. At present, there is essentially no mechanism to genericize these modern medicines. That is a breach of the Biotech Social Contract waiting to happen — and requires policy solutions we are still working out.",
      ],
      whyItMatters:
        "Each failure mode requires a different fix. Applying the wrong solution — like broad price controls on novel drugs — doesn't help patients with post-patent pricing problems and actively harms future innovation. Understanding which problem is which is how you advocate for the right policy.",
      xp: 10,
    },
    {
      id: "c5t8",
      level: "green",
      type: "reading",
      contextNote: "DTC advertising — annoying, but not the problem people think it is",
      title: "Direct-to-consumer advertising: misconception vs. reality",
      coreConcept:
        "Pharma ads are annoying and predominantly American — but they're not a meaningful driver of drug costs. They also have real benefits that rarely get discussed.",
      content:
        "Now that you've learned about why branded drugs are expensive and how that's supposed to be only temporary (thanks to the built-in price control of genericization), let's talk about some common misconceptions about high drug prices.\n\n**Pharma ads are annoying.** From jingles that make for the most frustrating ear worms, to the rapid-fire deadpan recitation of side effects, they're among the most-mocked ads in our culture. (We're partial to SNL's 'Handi-off.')\n\nThey're also a predominantly American phenomenon — only New Zealand, among all countries, has pharma ads anything like what we have in the US. So why do we allow them? And don't they contribute to high drug prices?\n\n**Spoiler alert: not really.** Here's why — and what the actual benefits are:\n\n**1. Increased awareness and education:** DTC ads can educate consumers about health conditions and treatments, prompting people to seek medical advice and possibly leading to early diagnosis and treatment. They provide information on drug benefits, risks, and side effects — helping patients make more informed decisions. Only physicians can prescribe medications, and insurance companies often need to authorize them. While critics say DTC ads create unnecessary demand, individuals can't just buy prescription medications based on ads. The FDA regulates these ads closely.\n\n**2. Patient empowerment:** By providing information directly to consumers, DTC ads empower individuals to take an active role in managing their health. Patients may feel more confident discussing treatment options with their healthcare providers and advocating for their own care when they know a treatment exists and that they're not alone in their condition.\n\n**3. Reduced stigma:** Advertising medications for conditions such as depression, erectile dysfunction, or HIV/AIDS can help reduce the stigma associated with these health issues. Increased public dialogue can encourage individuals to seek appropriate treatment without feeling ashamed.",
      imageUrl: "/images/ch5_img6.png",
      deepDive: [
        {
          label: "New DTC Marketing: Bringing our true customers along on our quest — Rapport",
          description:
            "An article featuring several 'entertaining' DTC ads — including Pfizer's Superbowl ad and Lilly's evolving approach — and what they reveal about a shift in how biopharma communicates with the public.",
          url: "https://rapport.bio/all-stories/hew-dtc-marketing-pfizer-lilly-superbowl",
          urlLabel: "Read →",
        },
      ],
      xp: 10,
    },
    {
      id: "c5t9",
      level: "green",
      type: "reading",
      contextNote: "Common misconceptions that fuel the wrong policy debates",
      title: "A few other misconceptions about drug pricing",
      coreConcept:
        "Several common beliefs about what drives high drug prices are simply wrong — and acting on them leads to policies that hurt patients without solving the real problems.",
      content:
        "Here are the most common misconceptions we hear from our learners — and honest answers to each:",
      imageUrl: "/images/ch5_img6.png",
      keyPoints: [
        "**\"The NIH funded that drug — we already paid for it.\"** No. Private investors fund the vast majority of R&D for new medicines. The NIH and academic researchers are essential partners for basic science, but neither academics nor the government actually develops drugs. The gap between understanding a biological pathway and delivering a safe drug is bridged by private capital, not government grants.",
        "**\"People in Canada and Europe pay less — so we should too. Innovation won't be harmed.\"** The short answer: other countries get a discounted pass because the US is willing to pay for innovation. The US is the important market. Other governments are willing to just say 'no,' and so drug companies find a price where they can make some money rather than no money to pad the core US profit stream that was always the main incentive. We'll share more on this in Chapter 6.",
        "**\"High executive salaries drive drug prices up.\"** Most executive compensation is a function of their share of future profits — set by the market. In any case, it's not a significant component of drug costs. We estimate that cutting all pharma executive salaries and equity compensation entirely wouldn't move net drug prices by more than 1%.",
        "**\"The obscene amount pharma spends on lobbying drives up prices.\"** The purpose of lobbying is educating policymakers. Whether lobbying is good or bad is a function of whether the information being conveyed is accurate. Pharma's lobbying spend is insignificant compared to spending on R&D and acquisitions. Banning pharma lobbying would have little if any effect on drug prices — and would leave policymakers less informed.",
      ],
      xp: 10,
    },
    {
      id: "c5t10",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding before moving on",
      title: "Check your understanding: Brand to generic",
      content: "",
      xp: 20,
      questions: [
        {
          question: "Which drug had the most typical path to genericization?",
          options: ["Lipitor", "Gleevec", "Humira", "Zolgensma"],
          correct: 0,
        },
        {
          question:
            "When Humira was approved, there was no path to genericization for:",
          options: ["Small molecule drugs", "Statins", "Biologics", "Cancer medications"],
          correct: 2,
        },
        {
          question: "What is a patent thicket?",
          options: [
            "A legal strategy to speed up generic approvals",
            "A complex network of secondary patents used to delay generic competition beyond the original patent term",
            "A government program to prevent price jacking",
            "A pricing strategy used by generic manufacturers",
          ],
          correct: 1,
        },
        {
          question: "Why did Gleevec stay expensive after going generic in 2016?",
          options: [
            "Novartis still held key primary patents",
            "FDA required additional clinical trials before generics could be dispensed",
            "PBMs were incentivized to keep generic prices high because lower prices meant smaller rebates and fees",
            "The manufacturing process was too complex for generic companies to replicate",
          ],
          correct: 2,
        },
        {
          question: "The real problem with insulin pricing today is primarily:",
          options: [
            "Manufacturers charging too much for old molecules",
            "The original insulin patent never expired",
            "PBMs blocking access to biosimilar insulins that should already be cheap",
            "Manufacturing costs have risen dramatically since 1922",
          ],
          correct: 2,
        },
        {
          question:
            "Today's modern insulins are different from the 1922 original because:",
          options: [
            "They are derived from human pancreases rather than animal ones",
            "They have been substantially improved — humanized to reduce allergic reactions and engineered to be faster or slower acting as needed",
            "They are now produced by governments rather than private companies",
            "They no longer require a prescription",
          ],
          correct: 1,
        },
        {
          question: "Which of the following is NOT a reason why a drug might stay expensive after going off patent?",
          options: [
            "Patent thickets filed by the original manufacturer",
            "Manufacturing complexity that prevents generic competitors from entering",
            "A large number of generic manufacturers competing, which drives down prices",
            "PBMs incentivized to keep biosimilar prices relatively high",
          ],
          correct: 2,
        },
        {
          question: "Who primarily funds R&D for new medications?",
          options: [
            "The NIH",
            "Private investors",
            "A 50/50 split between government and pharma",
            "Pharmaceutical companies using only their own existing profits",
          ],
          correct: 1,
        },
        {
          question: "High executive salaries in pharmaceutical companies are:",
          options: [
            "A major contributor to the high cost of prescription drugs",
            "Not a significant factor influencing drug prices — cutting them entirely would move net prices by less than 1%",
            "Directly tied to the amount of money spent on research and development",
            "An ineffective way to attract scientific talent",
          ],
          correct: 1,
        },
      ],
    },
  ],
};
 
export default chapter5;