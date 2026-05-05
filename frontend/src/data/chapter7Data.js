const chapter7 = {
    id: 7,
    title: "The big problems with insurance",
    topics: [
      {
        id: "c7t1",
        level: "green",
        type: "reading",
        contextNote: "The primary issue — high OOP costs leave patients unable to afford treatment",
        title: "So what's the problem?",
        content: "So if insurance helps us afford all this great medicine, what's the problem?\n\nThe primary issue is that U.S. insurance often leaves patients with **high deductibles, co-payments, and out-of-pocket maximums**, causing many to forego necessary treatments due to cost. This \"cost-sharing\" mechanism forces patients — especially those with chronic or serious illnesses — to bear a significant portion of their medical expenses.\n\nThe fragmented nature of the U.S. healthcare system exacerbates these problems. Different insurance plans have misaligned incentives, often ignoring the long-term benefits of early and consistent treatment.\n\nAnd importantly, the U.S. still hasn't achieved universal healthcare coverage. About **10% of Americans lack health insurance**, and about an additional **10% are underinsured**.\n\nThe majority of Americans can and do afford the medicines they need — or else there wouldn't be any innovation. About 80% of Americans have insurance and can afford their OOP costs. If most Americans couldn't afford their OOP costs, investors wouldn't fund innovation since most patients wouldn't be able to get the medicines. So the fact that we do have robust investment in novel drug development tells us that the healthcare system is **mostly** working. Still, until it works for **everyone**, we should keep pushing for reform.",
        imageUrl: "/images/ch7_img0.jpg",
        xp: 10,
      },
      {
        id: "c7t2",
        level: "green",
        type: "reading",
        contextNote: "Chapter overview",
        title: "Chapter 7 overview",
        content: "In this chapter, we'll be looking at:\n\n• **The role of PBMs** — pharmacy benefit managers and how they shape drug pricing\n• **Vertical integration** — when insurers own the entire supply chain\n• **Problems with the current system** — from prior authorization abuse to denial of care\n• **Proposed solutions** — what would actually fix insurance without breaking innovation\n\nWe at RA Capital believe that a reformed healthcare system with affordable insurance for all is necessary to incentivize ongoing drug innovation and improve health outcomes for everyone.",
        xp: 5,
      },
      {
        id: "c7t3",
        level: "yellow",
        type: "reading",
        contextNote: "The hidden intermediaries who shape what you pay at the pharmacy",
        title: "Pharmacy Benefit Managers (PBMs) and drug pricing",
        content: "Remember how insurance companies negotiate discounts on branded drugs — how they rarely pay full list price? They do that via organizations called **Pharmacy Benefit Managers**, or PBMs.\n\nThe discounted price — often called the **net price** — can be much lower than the sticker price. Remember Januvia from Chapter 4? Its list price is $6,900, but the CEO of Merck testified before Congress that its average net price is just **$690**. The difference is caused by rebates that drug makers negotiate with PBMs to access drug formularies.\n\nBecause most drugs are sold through insurance, drug companies need to get their products listed on insurance formularies. PBMs get a cut of the discount they negotiate on behalf of the insurance company, and **so it's in their interest to select drugs with high list prices and negotiate higher rebates**. This can cause a significant financial burden for patients, because their out-of-pocket costs are usually based on the inflated list price, rather than the actual negotiated price.\n\nAnd if this system wasn't convoluted enough, the real problem lies in the fact that these deals between PBMs, insurers, and drug makers are kept **entirely secret**. To make matters worse, **the three major PBMs in the United States serve 80% of patients — and they're all owned by major insurance companies.**",
        imageUrl: "/images/ch7_img16.jpg",
        xp: 15,
      },
      {
        id: "c7t4",
        level: "yellow",
        type: "reading",
        contextNote: "When insurers own the whole chain — from your doctor to your pharmacy",
        title: "Vertical integration",
        content: "The major insurers' ownership of the chain between a patient and their prescribed drug doesn't end with PBMs. Insurance companies sometimes own the pharmacy that supplies the medicine — whether that's a chain pharmacy like CVS or a specialty pharmacy that dispenses expensive meds by mail. Most major insurers also own physician practices and other healthcare providers.\n\nTake UnitedHealth. Its subsidiary, Optum, has expanded into multiple facets of healthcare services. OptumRx, its PBM arm, negotiates drug prices. OptumCare owns and operates medical practices and urgent care centers. OptumInsight focuses on healthcare data analytics.\n\nThis level of **vertical integration** raises significant concerns. By owning PBMs, specialty pharmacies, and healthcare providers, UnitedHealth can consolidate its control over the healthcare supply chain, **reducing competition** which can lead to higher prices for patients.\n\nAll of this complexity is a problem for patients because, while insurance plans and PBMs are effective at negotiating rebates from drug companies, they also use the complexity to extract the maximum out-of-pocket costs from patients — even when the true cost of the medicines is well below a patient's deductible.",
        imageUrl: "/images/ch7_img8.png",
        xp: 15,
      },
      {
        id: "c7t5",
        level: "green",
        type: "reading",
        contextNote: "What happens when you don't have insurance — the costly alternatives",
        title: "When a patient isn't insured",
        content: "What happens if someone isn't paying premiums because they don't have insurance? These patients lose out on the discounts negotiated by PBMs and can be on the hook to pay **list price, fully out of pocket**.\n\nIf a patient finds themselves needing an expensive treatment without insurance, there are a few places they can turn:\n\n**Patient Assistance Programs (PAPs):** Many drug makers offer free or discounted medicines to those who meet certain economic criteria. These tend to be tricky to access and navigate.\n\n**Emergency Rooms:** Under EMTALA, any hospital with an emergency department must stabilize and provide necessary treatment to any patient experiencing a medical emergency, regardless of insurance status. All uncovered ER visits are paid for by the US government — meaning all taxpayers.\n\n**Free and low-cost clinics:** Many clinics provide services and some medications to those who cannot otherwise afford them, paid for by taxpayers.\n\n**Nonprofits and charities:** Numerous nonprofits are devoted to getting care to those who cannot afford it. They are often in high demand and have economic criteria for qualifying.\n\n**Crowdfunding:** It's a sad truth that many folks who can't afford treatment turn to GoFundMe. Research shows these campaigns are usually not successful.",
        imageUrl: "/images/ch7_img10.jpg",
        xp: 10,
      },
      {
        id: "c7t6",
        level: "green",
        type: "video",
        contextNote: "Peter on why subsidies matter — and where they go wrong",
        title: "Subsidies and the insurance system",
        content: "Let's get a little more nuance on the role of subsidies in healthcare from Peter.",
        videoUrl: "https://player.vimeo.com/video/1026284710?h=9ac170b8d1",
        xp: 10,
      },
      {
        id: "c7t7",
        level: "green",
        type: "quiz",
        contextNote: "Check your understanding of PBMs and the insurance system",
        title: "Check your understanding 7.1: PBMs and vertical integration",
        content: "",
        xp: 20,
        questions: [
          {
            question: "_____ is a business strategy where a company expands its operations to control different stages of production and distribution.",
            options: ["Pharmacy Benefit Manager (PBM)", "Drug innovation", "Vertical integration", "Selective investment"],
            correct: 2
          },
          {
            question: "All of the following are problems with the current U.S. health insurance system, EXCEPT:",
            options: [
              "U.S. insurance often leaves patients with high deductibles and co-payments.",
              "The U.S. lags behind the rest of the world when it comes to drug innovation.",
              "About 10% of Americans lack health insurance.",
              "PBMs often retain drug rebates meant to lower patient costs."
            ],
            correct: 1
          },
          {
            question: "True or False: The majority of working-age Americans have to buy their own insurance through an ACA insurance plan exchange.",
            options: ["True", "False"],
            correct: 1
          }
        ]
      },
      {
        id: "c7t8",
        level: "green",
        type: "reading",
        contextNote: "The reform that would fix most of what's wrong — without harming innovation",
        title: "How we make insurance better: Out-of-pocket reform",
        content: "Imagine a world where when you get sick, your doctor prescribes a medicine that your insurer can instantly prior-authorize. You pick it up at the pharmacy counter with a low, affordable out-of-pocket cost. Maybe that means $0. There's no impediment to the healthcare you and your doctor agreed would be best for you.\n\nAs you now know, it doesn't often work this way. But it could.\n\n**First and foremost, we must reform our current system so that out-of-pocket costs are capped or eliminated.** You'd be shocked at what other problems would go away if out-of-pocket costs were universally affordable. For example, the anger people feel when they or a loved one can't afford their OOPs — a major threat to biomedical innovation — would likely dissipate.\n\nResearch cited in the New York Times showed that **a simple $10 increase in cost-sharing led to about a 23% decrease in drug consumption — and almost a 33% increase in monthly mortality.** In other words, making seniors pay $10 more per prescription led to people dying.\n\nWe're starting to see progress: the Inflation Reduction Act capped OOPs for Medicare Part D beneficiaries at $2,000 per year. That's a great start, but it's not nearly enough. Expanding this cap to private insurance plans would make healthcare more affordable for most Americans.",
        imageUrl: "/images/ch7_img3.jpg",
        xp: 15,
      },
      {
        id: "c7t9",
        level: "yellow",
        type: "reading",
        contextNote: "Prior authorization is designed well but abused badly",
        title: "Abuse of prior authorization",
        content: "Prior authorization is a practice used by insurance companies to ensure that the medications prescribed are appropriate for that patient. When prior authorization is automatic, electronic, and truly designed to guide patients to more affordable (but just as safe and effective) treatments, it can be valuable.\n\nBut many prior authorization procedures are **long and arduous**, requiring doctors to advocate for their patients by convincing payers that the patient really does need the medication. Doctors spend around 2 hours per day pursuing prior authorizations. More than 9 out of 10 physicians say the prior authorization process has negatively affected patient care.\n\nA big problem with prior authorization is that it creates confusion for patients about what is actually covered by their plan. When insurance companies make the coverage process unclear, it becomes harder for people to make informed choices about their healthcare.\n\nWhat we are advocating for is **transparency** instead of opacity and friction. If a plan wants to deny coverage, it should just say so upfront — rather than allowing patients to believe they will be covered but then demanding they jump through impossible hoops.",
        imageUrl: "/images/ch7_img4.png",
        xp: 15,
      },
      {
        id: "c7t10",
        level: "yellow",
        type: "reading",
        contextNote: "When insurers actively deny care to protect their bottom line",
        title: "Denial of care",
        content: "It's possible to appeal denials of care, but few people try and even fewer are successful. In the rare instances when patients do fight back, it can expose the lengths to which insurance plans may go to hold back medically necessary care.\n\nInsurance denials don't always sit well with individuals within large insurance companies tasked with reviewing patient cases. Investigative reports have revealed the pressure applied to insurers' medical directors to quickly dispense with patients' requests that their insurance cover doctor-prescribed treatments.\n\n**\"Deny, deny, deny. That's how you hit your numbers.\"** — a former Cigna medical director described how speedy denials were so common inside Cigna that they had a term for it: **\"click and close.\"**\n\nThis is emblematic of what happens when **vertical integration** allows insurers to profit from denying care. The three major PBMs serving 80% of patients — all owned by major insurance companies — face no meaningful accountability for these practices.\n\nThe solution isn't to destroy the system. It's to fix the insurance design so that out-of-pocket costs are capped, patients can access the treatments they paid for through their premiums, and insurers compete on quality of coverage rather than ability to deny claims.",
        imageUrl: "/images/ch7_img5.jpg",
        xp: 15,
      },
      {
        id: "c7t11",
        level: "green",
        type: "reading",
        contextNote: "What YOU can do to drive change in the insurance system",
        title: "What can you do?",
        content: "You may already be voting with your dollars. As an individual, what else can you do?\n\n**#1: Be Informed and Speak Your Mind**\n\nSince you're here reading this, you're already way ahead of the curve. To drive change in the healthcare insurance system, educate yourself about how it operates. Now that you've read this chapter, you can help others by spreading the word.\n\nIt's also important to voice your opinions. Engage in public discourse. Contact decision-makers directly — writing letters, sending emails, or making phone calls to your representatives about healthcare policies can make a significant impact.\n\nAnd when friends or family go off on a tirade about the healthcare system, never forget to ask: **would proper insurance — insurance with low or no out-of-pocket costs — fix this?**\n\n**#2: Work with Advocates**\n\nCollaborating with advocacy groups can significantly influence healthcare policy and reform. Engaging with organizations like No Patient Left Behind is a great starting point. These groups provide resources, support, and opportunities for action.",
        imageUrl: "/images/ch7_img9.jpg",
        imageUrl2: "/images/ch7_img11.jpg",
        xp: 10,
      },
      {
        id: "c7t12",
        level: "green",
        type: "video",
        contextNote: "Peter on what a reformed insurance system should look like",
        title: "Making insurance better",
        content: "Peter, what are some things that could make insurance better?",
        videoUrl: "https://player.vimeo.com/video/1031288125?h=5eec992925",
        xp: 10,
      },
      {
        id: "c7t13",
        level: "green",
        type: "quiz",
        contextNote: "Check your understanding of insurance reform",
        title: "Check your understanding 7.2: Insurance reform",
        content: "",
        xp: 20,
        questions: [
          {
            question: "We argue that in order to improve the current health insurance system in the U.S., we should do all of the following EXCEPT:",
            options: [
              "Legislate price controls for all new drugs",
              "Dramatically cap or eliminate out-of-pocket costs",
              "Provide universal health coverage for all Americans",
              "Ensure prior authorization doesn't just create needless friction"
            ],
            correct: 0
          },
          {
            question: "We argue that health insurance:",
            options: [
              "is currently functioning exactly as it should in the U.S.",
              "is what makes costly innovations affordable.",
              "is not working for any Americans.",
              "should be eliminated."
            ],
            correct: 1
          }
        ]
      },
      {
        id: "c7t14",
        level: "green",
        type: "summary",
        contextNote: "Key takeaways from Chapter 7",
        title: "Chapter 7 summary",
        content: "**Key Points from Chapter 7:**\n\n**The Role of PBMs:** PBMs act as intermediaries between insurers and drug companies. They negotiate rebates with drug companies in exchange for placing their drugs on formularies. When PBMs keep a portion of that rebate, they are motivated to have drug companies raise list prices — even if net prices don't change much.\n\n**Impact on Patients:** Patients rarely pay the full list price for a branded drug, but they often still pay a percentage of that inflated price through deductibles or coinsurance. Patients already paid into the system with their premiums. Asking them to pay out-of-pocket costs based on inflated prices is essentially making them pay twice.\n\n**The problems with the current system:**\n• High out-of-pocket costs prevent people from getting necessary treatments\n• Vertical integration allows insurers to consolidate control over the supply chain\n• PBMs don't pass lower net prices through to patients\n• ~10% uninsured, ~10% underinsured\n\n**Solutions proposed:**\n• Cap or eliminate out-of-pocket costs — ideally with first-dollar coverage\n• Expand health insurance coverage to all Americans\n• Limit vertical integration to increase competition\n• Require prior authorization to be real-time, electronic, and truth-seeking\n\n**The bottom line:** A reformed healthcare system with affordable insurance for all is necessary to incentivize ongoing drug innovation AND improve health outcomes. If we don't fix insurance, America's rising anger may spillover into the wrong solution: price controls on novel medicines.",
        imageUrl: "/images/ch7_img10.jpg",
        xp: 10,
      },
    ]
  }
   
  export default chapter7