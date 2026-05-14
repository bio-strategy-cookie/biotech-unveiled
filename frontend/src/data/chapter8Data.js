const chapter8 = {
  id: 8,
  title: "Confronting the Threat to Innovation",
  topics: [
    {
      id: "c8t1",
      level: "green",
      type: "video",
      contextNote: "Why the obvious solution often isn't — changing the wrong variable doesn't fix anything",
      title: "The drug pricing maze",
      coreConcept:
        "Price controls on drugs sound like they fix affordability. They don't — because affordability is an insurance design problem, not a pricing problem. And price controls harm future innovation without solving what they're aimed at.",
      content:
        "Decisions have unintended consequences. Wouldn't it be nice to keep kids from falling through thin ice? Well, changing the density of ice isn't the way to go about it.\n\nWe've shared some reasons why new drugs are expensive and, in the last chapter, explained that insurance is how we pool our money to pay for them. We also talked about how out-of-pocket costs can still keep drugs unaffordable — even when someone has insurance.\n\nWhen someone can't afford their medicine because of their OOP costs, they often blame the drug companies. Drug companies are a convenient punching bag for Congress and state governments too — vilifying them is popular. A popular, commonly proposed solution to prescription drug affordability is legally mandated **price controls** (sometimes called 'negotiation,' even when there's no real negotiating going on).\n\nBut price controls on drugs don't necessarily make them more affordable.\n\nOur position is clear: **insurance design is what renders drugs unaffordable for some patients — and that is what needs fixing.** Price controls on novel medicines will only harm innovation without actually solving the affordability problem — and would raise society's costs in the future, since we'd rely even more on hospitals and doctors, whose costs only rise and never go generic.\n\nPeter explains:",
      videoUrl: "https://player.vimeo.com/video/1026284535?h=33de23f588",
      watchFor:
        "The 'drug pricing maze' isn't just a metaphor — it describes how well-intentioned interventions that change the wrong variable create new problems without solving the original one. Think about which variable actually determines whether a patient fills their prescription.",
      imageUrl: "/images/ch8_img0.png",
      xp: 10,
    },
    {
      id: "c8t2",
      level: "green",
      type: "reading",
      contextNote: "The deductible math that exposes why price controls don't work",
      title: "Why price controls are problematic",
      coreConcept:
        "Even a 90% price cut doesn't help a patient who can't afford their deductible. Price controls attack the wrong variable — and destroy investment incentives in the process.",
      content:
        "Let's say you have insurance with a high deductible — you'd be in the majority. More than half of Americans with private insurance are in high-deductible plans. Maybe that deductible is $5,000, so you're on the hook for $5,000 before your insurer foots any of your healthcare bill, and you likely have co-pays on top of that. Then your doctor prescribes a drug that costs $50,000 per year.\n\n$50,000 is a lot. Let's say the government stepped in and mandated the price be cut in half: $25,000. Still can't afford it — you still have a $5,000 deductible you can't cover. What about a 90% price cut, to $5,000? Nope. Still can't afford it — because of the way your insurance benefit is designed.\n\nThe drug remains unaffordable because of **insurance design**, not drug price. And now the drug company can only make 10% of the revenue it originally projected. You know from Chapter 2 how that grinds future drug discovery and development to a halt.\n\nThis is the core problem with price controls: they don't fix the out-of-pocket costs that are actually keeping patients from their medicines. And they actively deter investors from funding the next generation of drugs.\n\nSpoiler alert: we're not fans of price controls or other popular forms of government regulation on novel medicines — because we know they deter investors from funding worthwhile innovation. In this chapter, we'll examine the different levers governments *should* pull to adjust how resources are distributed in a healthcare system, and how those adjustments can positively impact affordability *and* innovation.",
      imageUrl: "/images/ch8_img0.png",
      keyPoints: [
        "More than half of insured Americans are in high-deductible plans — price cuts don't change their deductible",
        "A 90% price cut on a $50,000 drug still leaves a patient with a $5,000 deductible unable to fill their prescription",
        "Price controls attack the symptom (high list price), not the disease (high OOP costs from insurance design)",
        "Cutting revenue by 90% eliminates the investment incentive that funded the drug's development — and all future ones like it",
      ],
      xp: 10,
    },
    {
      id: "c8t3",
      level: "green",
      type: "video",
      contextNote: "Genericization is already a price control — when it works as intended",
      title: "Drugs going generic IS the built-in price control",
      coreConcept:
        "Once patents expire and competition enters, prices fall 80–95%+. This already functions as the most effective price control that exists. The question is how to ensure it works as intended — and what to do when it doesn't.",
      content:
        "Let's quickly review how a drug goes generic in order to better understand how the process functions as a built-in price control. After a drug has been approved, its patents grant it a limited time of market exclusivity, after which competitors may create their own versions — and prices are driven down by competition, sometimes by more than **95%**.\n\nHow long is the pre-generic window? Patents last 20 years, and a lot of that time (10–11 years on average) is consumed by R&D before a drug is even approved. In 1984, the Hatch-Waxman Act added incentives for drug development by restoring half the time the drug spent in development and regulatory review, up to a maximum of **14 years post-launch**. That has long been the average exclusivity period before going generic.\n\nAnd remember: the patent does not guarantee a monopoly. It does not prevent someone else from inventing a different drug that treats the same condition in a similar way. Most novel branded drugs compete with other branded drugs, which also impacts their prices.\n\nThe system breaks when genericization doesn't happen as it should:\n- A small market might not attract competitors, keeping prices high\n- Patent thickets can delay competition beyond the original patent term\n- Some drugs (like Zolgensma) are too complex to copy\n\nIn these cases of market failure — where a drug fails to become reliably inexpensive after the initial patent period — a price control *after* the initial patents have expired may be needed. But before that point, price controls threaten the innovation that produced the drug in the first place.\n\nLet's look at a major future example — curing Alzheimer's disease:",
      videoUrl: "https://player.vimeo.com/video/1026284321?h=4bf85be481",
      watchFor:
        "Peter frames the cost of an Alzheimer's cure not as an expense but as a savings — compared to the ongoing cost of nursing homes, lost productivity, and caregiver burden. This reframes the entire price control debate.",
      imageUrl: "/images/ch8_img1.jpg",
      keyPoints: [
        "Patents last 20 years; Hatch-Waxman established ~14 years of effective post-launch exclusivity",
        "When generics enter, prices fall 80–95%+ within the first year",
        "Market failures (small markets, patent thickets, complex drugs) prevent genericization from working as intended",
        "A targeted price control *after* the intended patent period makes sense — *before* it threatens the innovation that produced the drug",
      ],
      xp: 15,
    },
    {
      id: "c8t4",
      level: "green",
      type: "reading",
      contextNote: "What the IRA got right, what it got wrong, and how to fix it",
      title: "The Inflation Reduction Act: what works and what doesn't",
      coreConcept:
        "The IRA's $2,000 OOP cap for Medicare Part D is good policy. Its 9-year exclusivity window for small molecules is a serious mistake already deterring investment — and the fix is simple: change 9 to 13.",
      content:
        "The **Inflation Reduction Act (IRA)** of 2022 included a number of provisions around drug pricing and insurance reform. Some show a lot of promise; others are likely to stifle innovation.\n\n**What the IRA got right:** Capping Medicare Part D OOP costs at **$2,000/year**. This is exactly the insurance reform that helps patients without threatening innovation. Real progress.\n\n**What the IRA got wrong:** Its Medicare 'negotiation' provision — which functions as a price control — treats small molecules and biologics differently:\n- **Biologics:** 13 years of exclusivity before price controls → close to Hatch-Waxman's ~14 years → probably close enough that it won't affect innovation incentives too badly\n- **Small molecules:** only **9 years** → far too short → investors are already walking away\n\nSmall molecules are pills (not injections), easier to genericize, and make up the majority of our current drug armamentarium. The discrepancy signals to the industry: don't make small molecules. This is already affecting investment in drugs for non-orphan diseases of aging — lung cancer, breast cancer, heart failure, Alzheimer's — exactly where we need innovation most.\n\n**The fix is simple:** Change 9 to 13 for small molecules. Congress should act.\n\nIt's also worth noting a key feature that should be in the IRA but isn't: incentivizing post-launch upgrades — new uses (indication expansion) and better formulations (turning a twice-daily pill into a once-daily, or an IV into a self-administered shot). The IRA could encourage this through 6-month delays to price controls for companies that pursue post-market improvements, similar to how pediatric extensions already work. Otherwise, companies lose incentive to improve a drug as it approaches the end of its profitability window.",
      imageUrl: "/images/ch8_img2.png",
      stats: [
        { value: "13 yrs", label: "IRA exclusivity for biologics — close enough" },
        { value: "9 yrs", label: "IRA exclusivity for small molecules — too short" },
        { value: "~14 yrs", label: "Hatch-Waxman intended exclusivity" },
        { value: "$2,000", label: "IRA Medicare Part D OOP cap — good policy" },
      ],
      deepDiveType: "drawer",
      deepDive: [
        { label: "Full explainer: all IRA drug provisions — KFF", description: "A comprehensive breakdown of every drug pricing provision in the Inflation Reduction Act.", url: "https://www.kff.org/medicare/issue-brief/explaining-the-prescription-drug-provisions-in-the-inflation-reduction-act/", urlLabel: "Read →" },
        { label: "Price controls will be eclipsed by loss of innovation — Craig Carthwaite, STAT", description: "Economist argues IRA short-term savings will be outweighed by the innovation we lose.", url: "https://www.statnews.com/2022/07/22/drug-price-controls-are-a-dance-with-the-devil-short-term-savings-will-be-overwhelmed-by-loss-of-innovation/", urlLabel: "Read →" },
        { label: "How the IRA stopped a sickle cell drug — Ted Love, STAT", description: "The CEO of Global Blood Therapeutics explains how his sickle cell treatment would not have been developed under IRA incentives.", url: "https://www.statnews.com/2023/07/31/global-blood-therapeutics-oxbryta-pfizer-ira-small-molecules/", urlLabel: "Read →" },
        { label: "Roche cutting programs due to IRA — Reuters", description: "Real-world evidence of drug companies abandoning programs because of IRA incentive changes.", url: "https://finance.yahoo.com/news/1-roche-abandoned-trials-due-071720141.html", urlLabel: "Read →" },
        { label: "Novartis CEO warns IRA risks public health — Financial Times", url: "https://www.ft.com/content/46584130-85df-4e63-b197-3ea26bab6809", urlLabel: "Read →" },
        { label: "Post-launch R&D that Congress is killing — Rapport", description: "How IRA price controls deter companies from pursuing new indications and better formulations.", url: "https://rapport.bio/all-stories/post-launch-pre-cliff-rd-congress-ignores", urlLabel: "Read →" },
      ],
      xp: 10,
    },
    {
      id: "c8t5",
      level: "green",
      type: "reading",
      contextNote: "What other countries pay — and why simply borrowing their prices backfires",
      title: "Borrowing from other countries: the library analogy",
      coreConcept:
        "The US is the primary market drug companies consider when developing a drug. Other countries get discounted prices because drug companies prefer some revenue to none. Demanding those prices in the US would eliminate the core incentive for innovation.",
      content:
        "As discussed in Chapter 4, other countries sometimes pay a fraction of what the US pays for drugs. Drug makers know the majority of their profits come from the US — that is the main market they consider when developing a drug. When other countries refuse to pay as much, the industry sells at a discounted rate so they're making at least something in those geographies. But demanding to pay the same as European countries would dry up almost all incentive for innovation.\n\nJames loves reading books in the library. It's cheap and he doesn't mind waiting. But he can't help telling everyone around him who buys books how dumb they are for wasting money. Not enjoying being ridiculed, others stop buying books and eventually everyone comes to the library. Then one day they look around and ask: 'Hey, how come we're not getting new books?' James didn't have to buy books — but if he valued the flow of new books, he just needed to keep enjoying the library without telling other people how stupid they were for valuing books enough to pay for them.\n\nIf the US stopped rewarding its biopharmaceutical innovators, yes, we might save some money in the short term on drugs that already exist — but in the long run we'd lose out on the drugs we don't yet have, and lose trillions of dollars to avoidable hospital stays, unnecessary nursing homes, and curable diseases.\n\nThere are two specific proposals for letting other countries effectively do our price-controlling for us: **International Reference Pricing** and **Drug Reimportation**. Let's consider each — and why they won't work.\n\nPlease read this article on what might happen if the US took the same approach as Europe — how we could get there, and how we can avoid it.",
      imageUrl: "/images/ch8_img3.jpg",
      deepDiveType: "drawer",
      deepDive: [
        { label: "What happens if the US takes Europe's approach — Rapport", description: "Peter Kolchinsky on the European Scorpion: how conventional CEA is used to mislead the US into giving up on funding valuable innovation.", url: "https://rapport.bio/all-stories/can-the-european-scorpion-hold-its-sting", urlLabel: "Read →" },
      ],
      xp: 10,
    },
    {
      id: "c8t6",
      level: "green",
      type: "video",
      contextNote: "International reference pricing — why it won't work",
      title: "International reference pricing: Protect American Innovation",
      coreConcept:
        "Pegging US prices to international prices would cause companies to raise foreign prices rather than lower US ones — leaving European patients worse off and US innovation still at risk.",
      content:
        "The international reference pricing idea — most recently floated by the Trump administration — would peg what companies can charge in the US to what they charge elsewhere. The theory: this lowers prices in the US.\n\nBut would it? This video, featuring executives from across the biotech industry, explains why it's not so simple:",
      videoUrl: "https://www.youtube.com/embed/6yAzY8ks1rU",
      watchFor:
        "The specific mechanism is important: it's not that drug companies would lower US prices — it's that they'd raise foreign prices. The US would end up paying the same or more, while other countries lose access to treatments.",
      keyPoints: [
        "If US prices had to match European prices, companies would raise European prices rather than lower US ones",
        "European governments would refuse to pay those higher prices — patients there would lose access",
        "US investors would see that overall new drugs are less profitable than before — reducing willingness to fund future R&D",
        "Either way: Americans pay more and patients in other countries get worse access — simply because of a policy that defined 'fairness' as the US paying the same as other countries",
      ],
      didYouKnow:
        "For more on Trump's Most Favored Nation policy and international drug pricing, check out this short video from The Economist (https://www.youtube.com/shorts/UKTltWvhO4I). Note: they compare UK prices to US list prices, not net prices — a major reason they initially report a 10x gap that later narrows to 3x. They also incorrectly assert that middlemen are paid a percentage of list price; in reality they're paid a percentage of rebates.",
      xp: 10,
    },
    {
      id: "c8t7",
      level: "green",
      type: "reading",
      contextNote: "Buying drugs from Canada — sounds simple, falls apart at scale",
      title: "Drug reimportation: why it doesn't scale",
      coreConcept:
        "Allowing Americans to buy drugs from Canadian pharmacies seems like a quick fix. At any relevant scale, it would cause drug companies to raise Canadian prices or create shortages — and Canada would likely ban it to protect its own patients.",
      content:
        "If a uniform price rule would backfire, what about just allowing US citizens to buy their drugs from Canadian pharmacies? The FDA has blessed a kind of pilot program in Florida to do just that. Might this work to lower prices for Americans?\n\nIf a relatively small number of Americans were doing this — as is already happening — it's unlikely to rock the boat too much. But as soon as it started happening at any relevant scale, something similar to Reference Pricing would happen:\n\n**Scenario 1:** Drug companies raise their Canadian prices. Canada would refuse to pay. The drugs would come off the market there. Canadian patients would do without.\n\n**Scenario 2:** Drug companies don't or can't raise Canadian prices. There are about ten times as many people in the US as in Canada. If Americans began buying drugs at scale in Canada, there would be shortages — drug companies aren't going to suddenly start supplying Canada with enough drugs to treat twice its population. Canada would likely forbid the practice to protect its own citizens' access.\n\nBoth scenarios end the same way: Canadian patients lose, and American patients don't get the long-term savings they hoped for.\n\nBoth International Reference Pricing and Drug Reimportation mistake the symptom (high US list prices) for the disease (high OOP costs from insurance design). Neither addresses what patients actually pay at the pharmacy counter.",
      deepDiveType: "drawer",
      deepDive: [
        { label: "Canada is not happy about drug importation — Health Canada", url: "https://www.canada.ca/en/health-canada/news/2024/01/statement-from-health-canada-on-fda-decision-on-florida-bulk-drug-importation-plan.html", urlLabel: "Read →" },
        { label: "Why drug importation from Canada won't work — Forbes", url: "https://www.forbes.com/sites/johnlamattina/2024/01/11/the-political-theater-of-importing-prescription-drugs-from-canada/", urlLabel: "Read →" },
        { label: "Safety and cost concerns around drug importation — AMA Journal of Ethics", url: "https://journalofethics.ama-assn.org/article/what-should-prescribers-and-policy-makers-know-about-us-drug-importation/2024-04", urlLabel: "Read →" },
        { label: "International reference pricing would do more harm than good — Health Affairs", url: "https://www.healthaffairs.org/content/forefront/reforms-needed-rein-health-spending-but-reference-pricing-isn-t-worth-risk", urlLabel: "Read →" },
        { label: "Cell and gene therapies at risk from reference pricing — NCBI", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10373031", urlLabel: "Read →" },
      ],
      xp: 10,
    },
    {
      id: "c8t8",
      level: "green",
      type: "reading",
      contextNote: "Government power over patents — almost always the wrong tool",
      title: "Seizing IP: march-in rights",
      coreConcept:
        "March-in rights were never intended as a price control — but there are growing calls to use them that way. Like price controls, they undermine investment incentives without solving affordability.",
      content:
        "We've talked a lot about how important patents are to the drug industry. They are at the core of how incentives for innovation work. There are, however, a few ways that governments can revoke the patents that drug companies fight so hard for. At best, these are usually unnecessary. At worst, they discourage innovation just like a price control on novel medicines would.\n\nIn the US, **march-in rights** refer to the government's authority under the Bayh-Dole Act to intervene and license patents to third parties under specific conditions, even if the patent is held by a private entity. Notably, this was **not** originally intended as a price control. Rather, it was meant to help foster development and production of products that were not being moved forward by their patent holder.\n\nThe government can exercise march-in rights if:\n1. The patent holder has not taken effective steps to achieve practical application of the invention, or\n2. The action is necessary to alleviate health or safety needs that are not reasonably satisfied, or\n3. The action is necessary to meet requirements for public use specified by federal regulations, or\n4. The patent holder has not agreed to grant licenses on reasonable terms\n\nMarch-in rights have **never actually been used** — and in our view, should not be used as a price control, because it would stifle innovation.\n\nConsider home ownership: what if the government said that other people could move into a house that you built for yourself? While there's no un-building of the house, would you build a new house knowing the same thing could happen? Our patent system works the same way — except patents only last 20 years, after which society does get to 'move in' and enjoy the medicine as a public good. So the time-limited nature of patents is already a built-in social contract. Violating it early removes the incentive that made the medicine possible.\n\nLike seizing property through 'eminent domain,' the government can 'waive' patents to allow society broader access. But this process is truly a last resort. Someone might argue that the price a company charges is too high and therefore the drug is denied to people who need it. But while a poor country really might feel it can't afford a drug, it's hard to argue that any medicine isn't affordable to wealthy countries when the totality of novel branded medicines adds up to little more than 1% of their GDP.",
      imageUrl: "/images/ch8_img4.jpg",
      deepDiveType: "drawer",
      deepDive: [
        { label: "The misguided attempt to use Bayh-Dole march-in rights to lower drug prices", description: "Analysis of why using march-in rights as a price control would discourage innovation.", url: "https://oup.vc/insights/the-misguided-attempt-to-use-the-bayh-dole-acts-march-in-right-to-lower-drug-prices/", urlLabel: "Read →" },
        { label: "Federal march-in rights for drugs — PharmaVoice", description: "A summary of the ongoing policy debate around government intervention in drug patents.", url: "https://www.pharmavoice.com/news/federal-march-in-rights-for-drugs-Andrei-Iancu/710296/", urlLabel: "Read →" },
      ],
      xp: 10,
    },
    {
      id: "c8t9",
      level: "green",
      type: "reading",
      contextNote: "The other way governments seize drug IP — and why it usually misses the point",
      title: "Seizing IP: TRIPS waivers",
      coreConcept:
        "TRIPS waivers allow countries to produce generic versions of patented drugs without consent. Developed for genuine crises in poor countries, they were the wrong tool for COVID — because the real constraint was manufacturing capacity, not patents.",
      content:
        "**TRIPS waivers** are another way governments can seize drug IP. As part of the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS), this provision is designed to address public health crises and ensure access to affordable medications — especially in developing countries. The World Trade Organization oversees TRIPS and can authorize waivers that permit member countries to produce or import generic versions of patented drugs without the consent of the patent holder. The system was developed and most successfully used during the AIDS crisis. In 2007, Rwanda became the first country to use the TRIPS waiver mechanism to import generic ARVs from Canada under a compulsory license.\n\nDuring COVID, there were calls for TRIPS waivers to facilitate access to vaccines, treatments, and diagnostics in poorer countries. In June 2022, a targeted waiver was approved — but by then demand had decreased to the point where no country felt the need to use it.\n\nBesides, the technology used to develop mRNA vaccines was novel and sophisticated. Simply allowing anyone to ignore Moderna's and Pfizer/BioNTech's patents would not have meant they could competently build facilities and develop the processes to produce more doses. It takes years to transfer this kind of knowhow. In the heat of the pandemic, the most efficient course was to contract with those companies to make more doses using their knowhow and facilities. Moderna and Pfizer weren't holding back on making extra doses because countries weren't willing to pay high prices — they were **capacity constrained**. Some countries couldn't afford to even cover the cost of making more doses; what good would having access to patents be to them?\n\nCalls for TRIPS waivers during COVID were largely a facile proposal issued by those who either didn't understand what the real constraints were, or used COVID to gin up more anti-pharma sentiment.\n\nThe fact is that the drug industry already recognizes it can't make money from selling drugs to poor countries and doesn't even try. Gilead famously licensed the right to make its Hepatitis C drug to generics companies for low-cost distribution throughout the world — except in wealthy countries where Gilead sold the drug itself. One of the biggest obstacles to accessing novel medicines in poor countries is that those countries lack the healthcare delivery capabilities to make medicines available to patients — not patents.",
      deepDiveType: "drawer",
      deepDive: [
        { label: "Egypt, Hepatitis C, and Gilead's gift — Rapport", description: "How Gilead licensed its Hep C cure to generic manufacturers for distribution throughout low-income countries — a case study in how IP and access can coexist.", url: "https://rapport.bio/all-stories/egypt-hcv-and-gileads-gift", urlLabel: "Read →" },
      ],
      xp: 10,
    },
    {
      id: "c8t10",
      level: "green",
      type: "reading",
      contextNote: "What actually works — lowering OOPs and contractual genericization",
      title: "Things that might work: lowering OOPs and the good parts of the IRA",
      coreConcept:
        "Lowering out-of-pocket costs is key to making medicines affordable without stifling innovation. The IRA's Medicare OOP cap is a great start — but it needs to go much further, and it needs to be paired with proper incentives for post-launch R&D.",
      content:
        "We've said it before and we'll say it again: lowering OOP costs is key to making medicines affordable to patients, and it can be done without stifling innovation. OOPs are what separate real insurance that people can depend on from the fiasco many are forced through today.\n\nThe IRA made a great start by capping drug OOPs for those on Medicare Part D. But why stop there? Expanding this to other government programs is a solid next step; expanding to private insurance would make healthcare more affordable for most Americans.\n\nAnd while we're praising the IRA, it's worth mentioning again how close it comes to a sensible policy that Peter Kolchinsky proposed in *The Great American Drug Deal* called **'contractual genericization'** — in which a drug is artificially brought down to a generic-like price after a patent period of exclusivity, as intended by Hatch-Waxman. The problem, as discussed earlier in this chapter, is that the IRA does not give small molecules a long-enough period of market-based pricing. Biologics get 13 years — close enough. But 9 years for small molecules is far too short.\n\nFortunately, the IRA grants drugs that work for a single orphan disease an exception to price controls, and it only applies to government program spending. So there is plenty for the drug industry to work on while we advocate for Congress to recognize its mistake and fix it.\n\nIt's also worth noting a key feature that should be in the IRA: incentivizing post-launch indication expansion and better formulations. The IRA could encourage continued upgrades of a launched drug by offering a 6-month delay to price controls for companies that pursue post-market R&D — much like how pediatric extensions already work. Otherwise, companies lose incentive to improve a drug as it approaches the end of its profitability window.",
      imageUrl: "/images/ch8_img5.jpg",
      keyPoints: [
        "Capping OOP costs makes drugs affordable without touching the prices that fund innovation",
        "The IRA's Medicare Part D $2,000 OOP cap is the right direction — needs to expand to all Americans",
        "'Contractual genericization' is the right framework: market-based pricing for a patent-defined period, then generic-like pricing — the IRA approximates this for biologics but fails small molecules with only 9 years",
        "Post-launch indication expansion should be incentivized, not penalized — a 6-month delay to price controls for post-market R&D upgrades would preserve continued improvement of launched medicines",
      ],
      xp: 10,
    },
    {
      id: "c8t11",
      level: "green",
      type: "reading",
      contextNote: "The forward contract model — COVID vaccines, antibiotics, and beyond",
      title: "Guaranteed forward contracts",
      coreConcept:
        "For markets where demand is too uncertain for normal investment math, forward contracts eliminate revenue uncertainty and allow companies to invest confidently. This is how OWS worked — and how the PASTEUR Act proposes to fix antibiotics.",
      content:
        "As you read in Chapter 2, one critical factor that accelerated COVID-19 vaccine development was the US government's commitment — under Operation Warp Speed (OWS) — to purchase and distribute the vaccine to as much of the population as possible. This guarantee helped incentivize investors and companies to develop vaccines at unprecedented speed.\n\nTo illustrate how important forward contracts were: Pfizer did not accept any government R&D funding but did enter into a forward purchase contract. Moderna accepted both the forward contract and funding for R&D and manufacturing expansion. By offering the certainty of a guaranteed purchase at a pre-specified price, the government significantly reduced the financial risk for companies and their investors.\n\nNormally, developing a new vaccine involves significant uncertainty. The government's commitment to purchase and administer the vaccines eliminated much of this uncertainty — allowing companies to focus on rapid development and scaling up production even before trials concluded. Even if the pandemic somehow resolved before the vaccines were needed, companies knew they would get some revenue as long as they successfully developed and produced the vaccines.\n\nOnce COVID became endemic, the government no longer offered forward contracts and let the market take over. Other companies now working on COVID vaccines are no longer incentivized by forward contracts — merely by the usual prospect of competing for market share. This is the right sequence: forward contracts when uncertainty is too high for markets, then let the market function once a product class is established.\n\n**When forward contracts make sense beyond pandemics:** For cancer treatments, companies don't need a forward contract — they can feel confident that a great drug will earn revenue at prices close to what other cancer drugs command. But sometimes pricing and volume are much less certain. Think about making a vaccine for a pandemic we don't know when or if we'd ever need — or developing an antibiotic that hospitals will only use as a last resort. That's where forward contracts are essential.",
      imageUrl: "/images/ch8_img5.jpg",
      keyPoints: [
        "Forward contracts commit to purchasing a drug at a pre-specified price if successfully developed — eliminating revenue uncertainty",
        "Pfizer took only a forward contract (no R&D funding); Moderna took both — both were sufficient to accelerate unprecedented development",
        "Forward contracts work best when demand is too uncertain for normal investment math: pandemics, rare diseases, stockpiled antibiotics",
        "After a product class is established, the market can take over — forward contracts are a bridge, not a permanent subsidy",
      ],
      xp: 10,
    },
    {
      id: "c8t12",
      level: "green",
      type: "video",
      contextNote: "Forward contracts for antibiotics — a model that could save millions of lives",
      title: "The PASTEUR Act: forward contracts for antibiotics",
      coreConcept:
        "Antibiotic resistance is a genuine public health threat. Because hospitals use older antibiotics first, new ones can't generate market revenue. The PASTEUR Act uses forward contracts — the same model as OWS — to change that math.",
      content:
        "We have no equivalent of OWS for antibiotic resistance — even though bacteria emerging resistant to all currently available antibiotics is a genuine and growing public health threat.\n\nThat's why Congress continues to deliberate the **PASTEUR Act**, which would appropriate **$6 billion** to award between $750M and $3B over a decade to any company that wins FDA approval of an antibiotic meeting specific criteria. After the contract period, since the antibiotics would still be patented, companies would also be able to earn market revenue if hospitals actually purchased doses.\n\nThe whole point is to provide enough supplemental incentive to get companies to invent those antibiotics. Like OWS, PASTEUR also provides 'push' incentives such as R&D funding alongside the 'pull' incentive of the forward contract.\n\n**Getting the international community on board**\n\nRight now, other wealthy countries freeride on the US's willingness to pay market-based prices. US trade policy might someday bring those countries around to paying prices closer to what we see in the US — for example, a country whose GDP per capita is 80% of the US's might agree to set its upper limit at 80% of the US price for the same drug.\n\nWhen the total market for a class of drugs increases, there is more incentive for companies to compete on price to win a larger share. Instead of three companies launching into a new class driven largely by US sales, a larger international market might attract a fourth and fifth player — which reduces prices everywhere. Europeans, Canadians, and Australians paying more means Americans might ultimately pay less.\n\nCheck out Peter discussing this dynamic in the context of Generalized Cost Effectiveness Analysis:",
      videoUrl: "https://www.youtube.com/embed/ayss4682k6k",
      watchFor:
        "Peter explains two related ideas: how the US could get other countries to contribute more to drug development costs through trade negotiations (not reference pricing), and how that would actually benefit US patients by expanding competition.",
      imageUrl: "/images/ch8_img6.jpg",
      stats: [
        { value: "$6B", label: "PASTEUR Act total appropriation" },
        { value: "$750M–$3B", label: "Per novel antibiotic approved" },
        { value: "<1 yr", label: "COVID vaccine timeline under OWS forward contracts" },
      ],
      xp: 10,
    },
    {
      id: "c8t13",
      level: "green",
      type: "video",
      contextNote: "Measuring what medicines are actually worth — not just what they cost",
      title: "Generalized Cost Effectiveness Analysis (GCEA)",
      coreConcept:
        "Conventional cost-effectiveness analysis ignores genericization, caregiver benefits, and productivity gains. GCEA accounts for all of them — and consistently finds US drug prices are below their true societal value.",
      content:
        "There is a limit to what anything is worth. Letting each of many competing insurance plans decide what medicines they will and won't cover and at what prices is how the US market decides how much to pay for medicines.\n\nCountries that don't have a market to negotiate drug prices rely on their governments. These governments rely on **Health Technology Assessment (HTA)** and specifically **Cost-Effectiveness Analysis (CEA)** to calculate the value of medicines. In countries like Canada, the UK, and Australia, this analysis determines whether the healthcare system will pay the asking price. If not, patients may be denied access unless the company lowers its price.\n\nHere in the US, the thing that comes closest to an official CEA body is **ICER** — and it makes similar mistakes in overlooking important factors.\n\nConventional CEA has serious blind spots:\n- It assumes drugs stay expensive forever — ignoring that drugs go generic over time\n- It counts only the patient's direct health benefit — ignoring caregivers who benefit when a patient recovers\n- It ignores productivity gains when patients and caregivers return to work\n- It ignores the peace of mind of knowing a treatment exists before you need it\n\n**Generalized Cost Effectiveness Analysis (GCEA)** accounts for all of these. Each is a 'petal' on the GCEA value flower. Together they give a fuller picture of true societal value — and GCEA consistently finds that **US drug prices are below their true societal value**.\n\nWhy aren't prices higher if drugs are worth more? Because US insurance plans compete for members and use market power to negotiate rebates. Even for unique drugs like Trikafta, the price is well below the upper limit GCEA would justify.\n\nCompanies that develop new medicines are starting to use GCEA to show that the US market is getting a good deal. We need to see a lot more of that.\n\nWatch this short explainer on the value flower and GCEA:",
      videoUrl: "https://www.youtube.com/embed/MUehueqYgBk",
      watchFor:
        "Notice how many petals of the value flower conventional calculations ignore. When you hear debates about whether a drug is 'worth its price,' ask: worth it by which calculation?",
      xp: 10,
    },
    {
      id: "c8t14",
      level: "green",
      type: "video",
      contextNote: "GCEA in full depth — with RA Capital's health economist",
      title: "The GCEA value flower: a deeper look",
      coreConcept:
        "Every petal of the value flower represents something conventional drug pricing analysis ignores. Together, they show that branded drugs — just 8% of healthcare spending — represent enormous societal value.",
      content:
        "RA Capital's health economist Richard Xie walks through the GCEA framework in detail — showing exactly what conventional analysis misses, how each value petal is calculated, and how accounting for them changes the math on drug value.\n\nCompanies that develop new medicines are beginning to use GCEA to show that the US market is getting a good deal. Ars Pharmaceuticals referenced GCEA in the press release announcing FDA approval for Neffy, their epinephrine nasal spray. We need to see much more of that.\n\nFor more on exactly how to conduct a GCEA on a medicine, see the GCEA User Guide in the deep dive below. Fair warning — there's a lot of math.",
      videoUrl: "https://player.vimeo.com/video/1033898561?h=510a63ba79",
      watchFor:
        "As each petal is explained, ask: if every drug pricing decision included this factor, how would the policy debate change? Would the public debate about 'expensive drugs' look the same?",
      imageUrl: "/images/ch8_img7.png",
      deepDiveType: "drawer",
      deepDive: [
        { label: "A Lot for a Little: The Best 8% of Our Healthcare Dollar — Peter Kolchinsky", description: "How branded drugs represent a small portion of healthcare spending but drive enormous long-term value. Brings together the core arguments of this chapter.", url: "https://rapport.bio/all-stories/best-8-percent-of-our-healthcare-dollar", urlLabel: "Read →" },
        { label: "But What About — Peter Kolchinsky (FAQ epilogue)", description: "An FAQ addressing the most common criticisms of the drug industry. Worth reading after completing this chapter.", url: "https://rapport.bio/supplementals/but-what-about", urlLabel: "Read →" },
        { label: "The Great American Drug Deal — Peter Kolchinsky", description: "The full book laying out the framework this course is built on. The natural next step after completing the course.", url: "https://a.co/d/4VqsGBt", urlLabel: "See the book →" },
        { label: "The European Scorpion — Rapport", description: "How conventional CEA is used to mislead the US into giving up on funding valuable innovation — and how to avoid it.", url: "https://rapport.bio/all-stories/can-the-european-scorpion-hold-its-sting", urlLabel: "Read →" },
        { label: "GCEA User Guide — PubMed (technical)", description: "The academic guide for how to actually conduct a GCEA on a medicine. Fair warning: there's a lot of math.", url: "https://pubmed.ncbi.nlm.nih.gov/39512185/", urlLabel: "Read →" },
      ],
      xp: 10,
    },
    {
      id: "c8t15",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding before moving on",
      title: "Check your understanding: Confronting the threat to innovation",
      content: "",
      xp: 20,
      questions: [
        {
          question: "Why don't price controls fix drug affordability for patients with high deductibles?",
          options: [
            "Because price controls only apply to generic drugs",
            "Because the deductible amount a patient owes doesn't change when the drug's list price is cut",
            "Because insurers raise premiums to compensate for lower drug prices",
            "Because price controls only affect drugs in the US, not imported ones"
          ],
          correct: 1
        },
        {
          question: "Why would investors be less likely to fund small molecule drugs under the IRA's current 9-year exclusivity window?",
          options: [
            "Small molecules are always injections and harder to manufacture",
            "Small molecules are inferior to biologics in therapeutic effectiveness",
            "9 years is not enough time for companies to make the profits needed to justify the investment risk",
            "Small molecules are worth less to society"
          ],
          correct: 2
        },
        {
          question: "Drug makers know that the majority of their profits come from:",
          options: ["Europe", "Canada and Mexico", "Asia", "The United States"],
          correct: 3
        },
        {
          question: "What would most likely happen if International Reference Pricing were implemented in the US?",
          options: [
            "Drug companies would lower their US prices to match European prices",
            "Drug companies would raise their European prices rather than lower US prices, causing European patients to lose access",
            "Drug companies would exit the US market entirely",
            "Drug prices would be equalized globally with no harm to innovation"
          ],
          correct: 1
        },
        {
          question: "Why did TRIPS waivers fail to solve COVID vaccine access in poor countries?",
          options: [
            "The waivers were never approved by the WTO",
            "Drug companies sued to block the waivers",
            "The real constraint was manufacturing capacity and knowhow, not patents — you can't copy an mRNA vaccine facility with a waiver",
            "Poor countries already had sufficient vaccine supply"
          ],
          correct: 2
        },
        {
          question: "March-in rights refer to:",
          options: [
            "TRIPS waivers allowing generic production without consent",
            "The government's authority under the Bayh-Dole Act to license patents to third parties under specific conditions",
            "Guaranteed forward contracts for pandemic preparedness",
            "Reference pricing schemes pegging US prices to international prices"
          ],
          correct: 1
        },
        {
          question: "What model incentivizes companies to develop a product by guaranteeing revenues if it succeeds?",
          options: ["March-in Rights", "Price controls", "Guaranteed/forward contracts", "TRIPS Waivers"],
          correct: 2
        },
        {
          question: "According to Peter's video, how can the US get other countries to pay their fair share for drug development?",
          options: ["Reference pricing", "Letting them opt out of buying drugs", "Failing to communicate drug value", "Trade negotiations"],
          correct: 3
        },
        {
          question: "GCEA better reflects societal value of medicines by accounting for elements traditional CEA ignores. Which of the following IS represented in traditional CEA?",
          options: ["Genericization over time", "Caregiver spillover benefits", "Peace of mind for healthy people", "Direct healthcare costs"],
          correct: 3
        }
      ]
    }
  ]
}
 
export default chapter8