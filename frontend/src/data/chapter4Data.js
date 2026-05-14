const chapter4 = {
  id: 4,
  title: "Why New Drugs Are So Expensive",
  topics: [
    {
      id: "c4t1",
      level: "green",
      type: "reading",
      contextNote: "Setting up the chapter — and the questions we'll actually answer",
      title: "Drugs are too expensive… right?",
      coreConcept:
        "If there's one thing everyone in the US knows, it's that high drug prices are as American as apple pie. But the full picture is more complex — and understanding it requires asking better questions.",
      content:
        "Even though the US leads the world in biomedical innovation, the products of those advancements are more expensive on our own soil than anywhere else in the world. Social media is full of people from Europe, Canada, and Japan expressing pity for Americans who seem to spend an arm and a leg to get medicines they enjoy for cheap or even free. And honestly? It *isn't* fair.\n\nIn this chapter and the next, you'll gain a better understanding of why drugs are priced the way they are. We'll explore questions like:\n\n- How do drug companies determine what to charge?\n- Who is responsible for setting the price you pay at the pharmacy counter?\n- How expensive is too expensive?\n- What's stopping companies from just charging whatever they want?\n- Why are drugs more expensive in the US than elsewhere?\n- Does that mean lower prices elsewhere are the *right* prices?\n- Do drugs stay expensive forever?\n- And — this one is important — expensive for *whom*?\n\nDrug pricing is a complex topic, and we aim to share objective facts as well as articulate our perspective on things. It is important that you understand both the objective realities of how the system functions, and be able to articulate the logic of the arguments being made. So let's get started!",
      keyPoints: [
        "High US drug prices are a real phenomenon — but they're also more complicated than they appear",
        "The right question isn't just 'why is this drug expensive?' — it's 'expensive for *whom*?'",
        "List price ≠ what patients pay, what insurers pay, or what drug companies receive",
        "Some high prices are temporary and by design; others reflect system failures",
      ],
      xp: 10,
    },
    {
      id: "c4t2",
      level: "green",
      type: "video",
      contextNote: "A $2.1M drug — and why 'expensive' is only half the question",
      title: "Who can afford a $2M drug?",
      coreConcept:
        "The right question isn't 'why does this drug cost $2.1 million?' It's 'expensive for whom?' Insurance is designed so that no individual family has to answer that question alone.",
      content:
        "Kaylee Price was born with **spinal muscular atrophy (SMA)** — a genetic muscle disease that is fatal if untreated. Novartis developed **Zolgensma**, a gene therapy that restores the missing gene product and can cure her of the disease in a single dose. The price: **$2.1 million**.\n\nIf $2.1M sounds more like a life-changing lottery prize than a feasible drug price tag, you're not alone. And this is partially why people get their hackles up about drug pricing. This is a baby's life — and this company has decided its lifesaving medication will only be available to a family who can pay $2.1M? That's unconscionable!\n\nBut here's the key: Kaylee's family doesn't have $2.1M. And importantly, they didn't need to come up with that money themselves. They have **health insurance**, which paid for the drug and saved Kaylee's life without decimating her parents' financial life.\n\nInsurance is intended to be a pooled savings mechanism that buys all of us peace of mind. We pay into the system so that those pooled resources will be there to cover us if the unexpected happens. (At RA Capital, we are of the mind that this is the way insurance *should* operate. Unfortunately, not all health insurance plans actually act like insurance — more on this in Chapter 5. We also believe everyone should be insured and receive subsidies to buy insurance if necessary, but that is sadly not the case at present.)\n\nYour exposure to NPV models in Chapter 3 hopefully illustrated that new drugs must necessarily be expensive in order to incentivize continued investment in innovation. But that brings us to our driving question: \"Expensive to whom?\" The answer shouldn't be — and doesn't have to be — individual patients or their families. Health insurance is intended to spread the cost of expensive therapies over large segments of the population.\n\nWould you accept a few dollars' increase to your health insurance premium if you knew it meant more babies like Kaylee would get access to Zolgensma? Doesn't it make you feel better knowing that drug is out there?\n\nWatch Kaylee's story, then ask yourself: if this were your child, what would Zolgensma be worth?",
      videoUrl: "https://www.youtube.com/embed/Sl3eEuWa-gs",
      watchFor:
        "Notice how the family talks about access — not just the price. The drug exists and works. The question is whether the system gets it to the patient.",
      imageUrl: "/images/ch4_img0.png",
      pauseAndThink:
        "Novartis could theoretically charge $20M for Zolgensma — there's no competition. Why don't they? What's the actual constraint on drug pricing when there's no generic competition?",
      xp: 10,
    },
    {
      id: "c4t3",
      level: "green",
      type: "reading",
      contextNote: "The factors that actually determine what a drug costs",
      title: "What goes into a drug's price?",
      coreConcept:
        "Drug pricing isn't arbitrary. It's constrained by market forces, investor math, and payer power — even when there's no direct competition.",
      content:
        "From a drug company's perspective, pricing a new drug requires balancing several variables simultaneously. Remember the investment equation from Chapter 3? Here's a refresher — these same variables that investors use to decide whether to fund a drug also shape how the drug gets priced.\n\nYou might think that once this information is nailed down, setting a price should be relatively straightforward — figure out what it costs to produce, estimate how many people will take it, and sell it at a reasonable margin to pharmacies, just like any other commercial product. Unfortunately, it's way more complicated than that.",
      imageUrl: "/images/ch4_img1.jpg",
      keyPoints: [
        "**Market size** — how many patients need this drug, what's the diagnosis rate, and what percentage will actually be treated?",
        "**Production costs** — how expensive is it to manufacture, store, and distribute? Some drugs are vastly more complex to make than others.",
        "**Competition** — are there alternative treatments? Even branded competitors in the same class drive prices down.",
        "**Patent life remaining** — how many years does the company have to recoup its investment before generics enter?",
        "**Treatment duration** — is this a one-time cure (like Zolgensma at $2.1M) or a chronic daily therapy (like statins, which may cost less per dose but are taken for decades)?",
        "**Projected adherence** — what percentage of patients will actually take the drug as prescribed? Non-adherence affects revenue projections.",
        "**Payer acceptance** — will insurance plans cover it? At what formulary tier? With what restrictions? This can determine whether a drug reaches patients at all.",
        "**The implicit ceiling** — if Novartis charged $20M for Zolgensma, insurers would balk and patients would go untreated. The public would be on Novartis's side, not the insurer's. Market forces — not government regulation — constrain pricing even in monopoly situations.",
      ],
      xp: 10,
    },
    {
      id: "c4t4",
      level: "green",
      type: "video",
      contextNote: "How the drug pricing system actually works — it's far more complex than a sticker price",
      title: "How drug pricing works",
      coreConcept:
        "The price you see on a drug isn't what most people pay, what insurers pay, or what the drug company receives. Understanding the chain between manufacturer and patient explains why drug pricing generates so much confusion.",
      content:
        "You might think drug pricing works like other commercial products — a company decides what to charge, pharmacies stock it, patients buy it. It doesn't work that way.\n\nBetween a drug manufacturer and a patient sits a complex chain of intermediaries: wholesalers, pharmacy benefit managers (PBMs), insurers, and pharmacies — each taking a cut, each with their own incentives.\n\nWatch this Wall Street Journal explainer, then we'll break down what it means for patients.\n\nYou may think: that's all very complex, sure, but can't drug companies just charge whatever they want? Using that logic, why isn't Novartis charging $20 million for Zolgensma instead of $2 million? Most would agree it would be unconscionable for health insurance to deny access to the drug — so Novartis should be able to charge $20 million. Or $200 million. But they don't.\n\nWhy not? Sometimes it's competition that curtails prices. In this case, Novartis has no competition. But if Novartis charged more than the drug was worth, payors would balk and decide not to cover it. The public would be on their side. There would be outrage — and it would be directed at Novartis, not the plans that said \"you know what, $20 million is too much.\"",
      videoUrl: "https://www.youtube.com/embed/aeG2lWxYO_Y",
      watchFor:
        "Pay close attention to how PBMs work and why their incentives push list prices up rather than down. The concept of 'formularies' is also introduced — this becomes important in Chapters 6 and 7.",
      imageUrl: "/images/ch4_img2.jpg",
      didYouKnow:
        "The term 'drug price' means different things to different people. The list price isn't what most people actually pay. Five people with different insurance plans could all be prescribed the same medication yet pay vastly different amounts at the pharmacy — a result of negotiations and rebates that happen entirely behind the scenes.",
      xp: 10,
    },
    {
      id: "c4t5",
      level: "green",
      type: "reading",
      contextNote: "List price vs. net price — and why no actual person should pay list price",
      title: "Smoke and mirrors: why list prices don't reflect true costs",
      coreConcept:
        "List prices rise every year — but net prices (what drug companies actually receive) have been falling. The gap is captured by middlemen. And patients are often charged based on the inflated list price, not the real one.",
      content:
        "It may surprise you to learn that though list prices for drugs rise every year, **net prices** — what a drug company actually realizes on the product it invented and sells — are falling.\n\nThe CEO of Merck recently testified before Congress that on their diabetes drug Januvia — list price **$6,900** — Merck actually receives just **$690**. That's 90% of the list price captured by rebates, fees, and middlemen before the company sees a dollar.\n\nSo what does a list price actually mean, and where does the rest of the money go? As you saw in the Wall Street Journal video, there are incentives throughout the entire supply chain for list prices to continually increase. **Pharmacy Benefit Managers (PBMs)** pocket a growing cut of the \"rebates\" they \"negotiate\" on behalf of plans and employers in exchange for prioritizing a drug's position on a formulary — the list of drugs an insurer chooses to cover. That creates some genuinely backwards decision-making: drugs with low list prices (and therefore low rebate payments for middlemen) can be intentionally deprioritized by insurers or not covered at all.\n\nThe consequence for patients: while it may feel like a new, expensive drug is causing insurance premiums to rise, the percentage of your premium dedicated to covering drug costs (around **10%**) has likely remained fairly constant over the past 15 years. What has changed is the specific drugs being covered — newer, often higher-priced treatments for conditions that previously had no good options.\n\nBut here's the most important thing to understand about list prices and out-of-pocket costs: patients' out-of-pocket expenses — deductibles, co-insurance — are typically calculated as a percentage of the **list price**, not the net price. So patients sometimes pay more out-of-pocket than the insurer ever pays for the same drug. This is especially problematic when it occurs on drugs whose list prices have been inflated far beyond what anyone in the supply chain actually pays.",
      imageUrl: "/images/ch4_img3.png",
      stats: [
        { value: "$6,900", label: "Januvia list price" },
        { value: "$690", label: "What Merck actually receives" },
        { value: "90%", label: "Captured by rebates and middlemen" },
        { value: "~10%", label: "Of premiums going to branded drugs" },
      ],
      keyPoints: [
        "List prices rise every year — but **net prices** (what companies actually receive) have been falling",
        "PBMs are paid a percentage of rebates — so they're incentivized to prefer drugs with high list prices and large rebates",
        "Patients' out-of-pocket costs are often based on list price, not net price — meaning patients can pay more than the insurer pays",
        "The **gross-to-net bubble**: the gap between inflated list prices and actual net prices keeps widening — and patients are caught in the middle",
      ],
      xp: 15,
    },
    {
      id: "c4t6",
      level: "green",
      type: "reading",
      contextNote: "Who is actually supposed to pay a drug's list price?",
      title: "Who is supposed to pay list price?",
      coreConcept:
        "No actual person is supposed to pay a drug's list price. List prices exist as a negotiating artifact for the system — not for patients. When patients are stuck paying co-insurance based on inflated list prices, it's a failure of the system, not an inherent feature of drug pricing.",
      content:
        "We'll come back to pharmacy benefit managers in the next chapters — including a really illuminating (and funny) video on PBMs. For now, the most important thing to understand is this:\n\n***No actual person is supposed to pay a drug's list price.***\n\nList prices are explicitly based on PBMs' need to show greater negotiated discounts for insurers — what's sometimes called the **\"gross-to-net bubble.\"** The list price is a negotiating artifact. It exists for the system, not for patients.\n\nSo it's especially problematic — and we'd argue indefensible — when insurers leave a patient on the hook to pay a percentage of co-insurance for a drug that's based on a list price higher than what the insurer itself will ever pay, and sometimes higher than what it costs to produce or sell the drug at all.\n\nWe contend that drugs represent an incredible benefit to the world and are worth the high prices society pays for them. But it's important to us — and should be important to society — that *individuals* who happen to get sick should not be the ones footing the bill for the failures of the system. Drugs are \"worth it\" to the world on a societal level. We can and should collectivize these costs through proper insurance for everyone.",
      keyPoints: [
        "List prices are a negotiating artifact — they exist so PBMs can show large 'negotiated discounts' to employers and plans",
        "The gap between list and net price (the gross-to-net bubble) keeps growing, and patients are increasingly caught in the middle",
        "It's indefensible for patients to pay co-insurance based on an inflated list price that no one else in the supply chain actually pays",
        "The solution is proper insurance design — not blaming drug companies for a pricing architecture that middlemen created",
      ],
      xp: 10,
    },
    {
      id: "c4t7",
      level: "green",
      type: "video",
      contextNote: "The built-in price control that makes the whole system sustainable",
      title: "Generics and patent-burning parties",
      coreConcept:
        "Genericization is the mortgage being paid off. Once a drug's patent expires and generics enter, prices fall 80–95%. Society paid for the drug during its patent period — and now owns it permanently.",
      content:
        "It's time to revisit generics. A drug is said to have \"gone generic\" once its patents expire and competition is allowed to enter the market, lowering the price through competition with identical versions. This typically happens about **14 years after FDA approval** — but there are a number of intentional exceptions and exploitable loopholes, which we'll discuss later.\n\n(Of course, plenty of drugs face competition before they go generic, from similar drugs in the same class — often called \"me-too\" drugs. Competition between similar brands also tends to drive down prices, though not as dramatically as true genericization.)\n\nPlease read Peter Kolchinsky's Wall Street Journal op-ed, \"Let's Throw a Patent-Burning Party,\" where he argues that the period prior to a drug going generic is the period when the drug is paying back the investors who funded it. Once those investors have been rewarded — and therefore incentivized to continue investing in drug innovation — the drug can and should be sold very cheaply forever after.\n\nWhen a drug's patent expires, robust generic competition often means its price will drop by over **95%** within the first year of patent expiration. This system is a win-win for everyone!\n\nAnd there are a huge number of generics out there. Did you know that **90% of all prescriptions in the US are filled with generics?** According to the Association for Accessible Medicines, generic drugs have saved America nearly **$3 trillion** (that's trillion with a T!) over the past decade — while accounting for only **1.5%** of America's total healthcare spending.\n\nNow, let's hear a little more from Peter about how we're going to pay for the next generation of drugs:",
      videoUrl: "https://player.vimeo.com/video/1026284942?h=5f8dea4c9e",
      watchFor:
        "Peter explains why what we spend on branded drugs today is actually an investment in tomorrow's generics — and why cutting branded drug prices today would leave us with fewer generics tomorrow.",
      stats: [
        { value: "90%", label: "Of all US prescriptions filled as generics" },
        { value: "$3T", label: "Saved by generics over the past decade" },
        { value: "1.5%", label: "Of total healthcare spending that goes to generics" },
        { value: ">95%", label: "Typical price drop within year 1 of generic entry" },
      ],
      deepDive: [
        {
          label: "Let's Throw a Patent-Burning Party — Peter Kolchinsky, Wall Street Journal",
          description:
            "Why drug companies should celebrate when their drugs go generic — and what it means for the Social Contract when they don't.",
          url: "https://www.wsj.com/articles/lets-throw-a-patent-burning-party-1538329275",
          urlLabel: "Read the op-ed →",
        },
        {
          label: "Hatch-Waxman Act of 1984 — the law that created the modern generics system",
          description:
            "The legislative foundation for how branded drugs become generics in the US.",
          url: "https://www.govinfo.gov/content/pkg/STATUTE-98/pdf/STATUTE-98-Pg1585.pdf",
          urlLabel: "Read the Act →",
        },
        {
          label: "The ACA and biosimilars — how biologics got a genericization pathway",
          description:
            "The Affordable Care Act introduced biosimilars in 2010 — the biologic equivalent of generics.",
          url: "https://www.healthaffairs.org/do/10.1377/hpb20131010.6409/",
          urlLabel: "Read →",
        },
      ],
      xp: 15,
    },
    {
      id: "c4t8",
      level: "green",
      type: "reading",
      contextNote: "Bringing the mortgage analogy full circle",
      title: "The mortgage analogy: revisited",
      coreConcept:
        "Every dollar society spends on branded drugs today is paying for drugs that didn't even exist 20 years ago. In 20 years, today's brands will be cheap generics — and we'll be paying the mortgage on a whole new generation of medicines.",
      content:
        "As introduced in Chapter 1, paying high prices for a branded drug — via insurance providers — is like paying a mortgage. In the case of a drug, patent expiration is like that last mortgage payment. At that point, society now \"owns\" the drug and will benefit from inexpensive versions of it for as long as it continues to be useful. Many drugs remain useful for decades as inexpensive generics — keeping people healthy, productive, and out of hospitals.\n\nIf another drug comes along that treats the same disease but better, society might elect to \"take out another mortgage\" to pay for that one. But if the new drug isn't better than the generics it competes against, chances are it won't succeed commercially. Drug companies are always competing against their prior successes — and need to keep inventing better medicines to survive.\n\nSo when we talk about how America spends billions of dollars each year on branded drugs, remember: what we spend on branded drugs this year is paying for drugs that didn't exist 20 years ago. And in 20 years, we'll be paying for a whole new set of branded drugs — because today's brands will have gone generic.\n\n**Drugs are \"worth it\" to the world on a societal level.** We can and should collectivize these costs through proper insurance for everyone — so that no individual patient is the one footing the bill for the failures of the system.",
      keyPoints: [
        "Patent expiration = last mortgage payment → society owns the drug permanently at near-zero cost",
        "Today's branded drug spending is paying back the development of drugs that didn't exist 20 years ago",
        "In 20 years, today's branded drugs will be cheap generics — and society will be paying a new mortgage on new medicines",
        "Drug companies must keep innovating — they're always competing against their own past successes that have gone generic",
      ],
      xp: 10,
    },
    {
      id: "c4t9",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding before moving on",
      title: "Check your understanding: Why new drugs are so expensive",
      content: "",
      xp: 20,
      questions: [
        {
          question:
            "Health insurance improves the affordability of expensive drugs like Zolgensma by:",
          options: [
            "Determining drug prices in negotiation with the FDA",
            "Spreading the cost across a large pool of insured individuals",
            "Providing financial assistance programs directly to individual patients",
            "Requiring drug companies to offer mandatory discounts",
          ],
          correct: 1,
        },
        {
          question: "Why do investors fund drug development even though many drugs will fail?",
          options: [
            "They are guaranteed a return on investment by the government",
            "They are motivated by the potential for high profits from the few drugs that succeed",
            "They are required to fund drug development by law",
            "They fund only the drugs most likely to succeed",
          ],
          correct: 1,
        },
        {
          question: "What is the Investor's Paradox?",
          options: [
            "Investors prefer drugs with low potential rewards because they have lower risk",
            "Investors avoid biotech because it's unlikely to produce a return",
            "It would be great to fund only successful projects — but to know which ones will succeed, you first have to fund them all",
            "The Biotech Social Contract",
          ],
          correct: 2,
        },
        {
          question: "What is the trend for net prices of drugs in recent years?",
          options: ["Rising", "Stable", "Falling", "No discernible trend"],
          correct: 2,
        },
        {
          question: "Why are list prices not a good indicator of actual drug costs?",
          options: [
            "List prices are based on international markets",
            "Rebates and discounts significantly reduce what drug companies actually receive after PBM negotiations",
            "List prices factor in future R&D expenses",
            "List prices are inflated to account for litigation costs",
          ],
          correct: 1,
        },
        {
          question:
            "According to Merck's CEO's congressional testimony, what percentage of Januvia's list price does Merck actually receive?",
          options: ["About 50%", "About 25%", "About 10%", "About 75%"],
          correct: 2,
        },
        {
          question: "Generics account for approximately what percentage of US prescriptions?",
          options: ["Under 25%", "Around 50%", "Around 75%", "Nearly 90%"],
          correct: 3,
        },
        {
          question: "According to the source, who is supposed to pay a drug's list price?",
          options: [
            "Uninsured patients",
            "Insurance companies",
            "No actual person — list prices are a negotiating artifact for the system, not for patients",
            "The federal government through Medicare",
          ],
          correct: 2,
        },
        {
          question: "In the Wall Street Journal video, what are formularies?",
          options: [
            "Lists of medications recommended by doctors for specific conditions",
            "Classifications of drugs by efficacy tier",
            "Lists of medications covered by insurance companies, tiered by cost-sharing requirements",
            "Rebates offered by drug companies to wholesalers",
          ],
          correct: 2,
        },
      ],
    },
  ],
};
 
export default chapter4;