const chapter7 = {
  id: 7,
  title: "The Big Problems With Insurance",
  topics: [
    {
      id: "c7t1",
      level: "green",
      type: "reading",
      contextNote: "The core problem — insurance that doesn't function like insurance",
      title: "So what's the problem?",
      coreConcept: "About 80% of Americans can afford their OOP costs — which is why we have robust drug investment. But until insurance works for everyone, patient anger will keep threatening the innovation system that benefits all of us.",
      content: "If insurance helps us afford great medicine, what's the problem?\n\nThe primary issue is that U.S. insurance often leaves patients with high deductibles, co-payments, and out-of-pocket maximums, causing many to forego necessary treatments. This forces patients — especially those with chronic or serious illnesses — to bear a significant portion of their expenses. Many insured individuals find themselves underinsured when they need care most, leading to worse health outcomes and higher long-term costs. It's a lose-lose situation.\n\nThe majority of Americans can and do afford the medicines they need — about **80% of Americans** have insurance and can afford their OOP costs. If most Americans couldn't afford their medications, investors wouldn't fund innovation since most patients wouldn't be able to get the medicines. So the fact that we do have robust investment in novel drug development tells us the system is *mostly* working.\n\nBut 'mostly' isn't good enough. About **10% of Americans lack health insurance**, and about an additional 10% are underinsured.\n\nSo, what if we waved our magic wand and convinced Congress to outlaw high out-of-pocket costs? What would happen? Either premiums would go up, at least in the near term, to make up the gap in the insurance budget from more patients being able to afford their medicines, or drug companies would need to offer greater rebates (essentially offer free drugs to the extra patients now being treated).\n\nNobody wants to be the lawmaker responsible for raising premiums, but consider that premiums already go up steeply — faster than inflation — every year, due mostly to the rising costs of hospitals and doctors and nursing homes. Branded drug spending accounts for only about **8% of healthcare spending**. So outlawing OOP costs would likely raise premiums by a couple of percent one time — less than they already rise annually due to the cost of services. In the grand scheme, that would hardly be noticed. But suddenly all patients would find they could get the treatment they need at the pharmacy counter without struggling with OOP costs. No patient would have to go without. And we'd likely hear far fewer calls for price controls on novel medicines — since now they would be affordable for all who need them. And since some of that anger can spill over into misguided demands for price controls on novel medicines — as other countries have — innovation will be at risk for as long as even one patient goes without treatment due to unaffordably high OOP costs.\n\nWhat if we eliminated high out-of-pocket costs? Premiums might go up slightly in the near term. Nobody wants to be the lawmaker responsible for raising premiums. But premiums already go up steeply — faster than inflation — every year, mostly due to rising costs of hospitals, doctors, and nursing homes. Branded drugs account for only about **8% of healthcare spending**. Outlawing OOP costs would likely raise premiums by a couple of percent one time — less than they already rise annually — but suddenly all patients would find they could get their treatment without struggling. And we'd likely hear far fewer calls for price controls on novel medicines.",
      imageUrl: "/images/ch7_img0.jpg",
      keyPoints: [
        "~80% of Americans have insurance and can afford OOP costs — the system mostly works for most people",
        "~10% have no insurance; another ~10% are underinsured — their coverage fails them when they need it",
        "High OOP costs cause patients to skip medications, producing worse outcomes and higher long-term costs",
        "Patient anger at drug prices often reflects insurance failure — misdirected at the wrong cause",
        "Every patient who can't afford their medicine generates political pressure for price controls that threaten innovation for everyone",
      ],
      xp: 10,
    },
    {
      id: "c7t2",
      level: "green",
      type: "video",
      contextNote: "The intermediaries between drug companies and patients — and why their incentives are backwards",
      title: "Pharmacy Benefit Managers (PBMs) explained",
      coreConcept: "PBMs negotiate drug prices — but because their fees are tied to the size of the rebate they secure, they're incentivized to prefer high list prices, not low ones. And all three major PBMs are owned by major insurance companies.",
      content: "The NPLB video you watched at the end of Chapter 6 described how insurers rarely pay full list price — they negotiate via **Pharmacy Benefit Managers (PBMs)**.\n\nThe net price can be much lower than the sticker price. Remember Januvia from Chapter 4? List price $6,900 — Merck's CEO testified its average net price is just **$690**. The difference is rebates that drug makers negotiate with PBMs to access formularies.\n\nThere's nothing inherently wrong with negotiating. But the problem is structural: **PBMs get a cut of the discount they negotiate** — so it's in their interest to select drugs with high list prices and extract larger rebates. This causes a significant burden for patients, because out-of-pocket costs are based on the inflated list price, not the net price. In some cases, a patient's OOP cost exceeds what the insurer actually paid for the drug.\n\nMaking things worse: these deals are kept entirely secret. We don't know what insurers actually pay PBMs or drug makers — only that it's less than list price. And the **three major PBMs serve 80% of patients… and they're all owned by major insurance companies.**\n\nDr. Glaucomflecken explains, via 'Jimothy':",
      videoUrl: "https://www.youtube.com/embed/5rw4kNHNZyk",
      watchFor: "Notice the structural conflict of interest: the PBM is supposed to get the best deal for patients, but its fee structure rewards high list prices. After watching, ask: who is the PBM actually working for?",
      imageUrl: "/images/ch7_img1.png",
      stats: [
        { value: "80%", label: "Of US patients served by the 3 major PBMs" },
        { value: "3", label: "Major PBMs — all owned by major insurers" },
        { value: "$690", label: "What Merck receives for Januvia (list: $6,900)" },
      ],
      xp: 15,
    },
    {
      id: "c7t3",
      level: "green",
      type: "reading",
      contextNote: "When one company controls every step between a patient and their medicine",
      title: "Vertical integration: one company, the whole chain",
      coreConcept: "Major insurers now own PBMs, specialty pharmacies, and physician practices. This consolidation reduces competition and creates conflicts of interest that consistently harm patients.",
      content: "The major insurers' ownership of the supply chain between a patient and their drug doesn't end with PBMs. Insurance companies sometimes own the pharmacy that dispenses the medicine — whether that's a chain pharmacy or a specialty pharmacy. Most major insurers also own physician practices and other healthcare providers.\n\nThis is called **vertical integration** — a business strategy where a company expands its operations to control different stages of the production and distribution. The website DrugChannels keeps tabs on this vertical integration, illustrated in a comprehensive chart at [drugchannels.net](https://www.drugchannels.net/2024/05/mapping-vertical-integration-of.html).\n\nTake **UnitedHealth**. Its subsidiary Optum has expanded into: **OptumRx** (PBM), **OptumCare** (medical practices and urgent care), **OptumInsight** (data analytics), **Optum Specialty Pharmacy** (complex medication delivery), and through its acquisition of Emisar, healthcare consulting. The same company decides what's covered, negotiates the price, fills the prescription, and provides the care.\n\nThis raises serious concerns. By owning PBMs, specialty pharmacies, and healthcare providers, UnitedHealth consolidates control over the healthcare supply chain — reducing competition which can lead to higher prices. The complexity of managing such an integrated organization also makes it difficult to ensure the insurance, provider, and PBM arms work together without compromising patient care.\n\nAll of this complexity is used to extract maximum OOP costs from patients, even when the true net cost of a medicine is well below their deductible. Patients get angry. And some of that anger gets directed at drug companies — whose high list prices are perceived as the root cause, when it's actually a matter of insurance design.\n\nIf we were to outlaw OOP costs, this vertical integration would still cause *some* problems — but at a much lower magnitude spread across everyone's premiums rather than hitting the sickest patients hardest.",
      imageUrl: "/images/ch7_img2.png",
      deepDive: [
        { label: "How UnitedHealth became the behemoth it is — Healthcare Uncovered", description: "A detailed account of United's vertical integration strategy and why it's terrible for patients.", url: "https://wendellpotter.substack.com/p/mapping-unitedhealths-consumption", urlLabel: "Read →" },
      ],
      xp: 10,
    },
    {
      id: "c7t4",
      level: "green",
      type: "video",
      contextNote: "Why not having insurance is even worse than bad insurance",
      title: "When a patient isn't insured — and why everyone should be",
      coreConcept: "Uninsured patients lose all PBM-negotiated discounts and can be charged full list price. Getting insurance isn't always easy — but everyone eventually needs it, and everyone benefits when everyone is covered.",
      content: "Uninsured patients lose the discounts negotiated by PBMs and can be on the hook for full list price — an amount that bears no relationship to what the drug actually costs the insurer.\n\nHealth insurance isn't something you can purchase at the drop of a hat, and disease and injury have unpredictable timing. The ACA made it illegal to deny coverage based on pre-existing conditions, but open enrollment windows still limit when you can sign up — with exceptions for job loss, marriage, moving, or having a baby. Income, immigration status, and employment status add additional barriers.\n\nWhen a patient needs an expensive treatment but lacks insurance, they can turn to:\n- **Patient Assistance Programs (PAPs):** Free or discounted drugs from manufacturers. Income-limited and often hard to navigate, but important for those with no other option.\n- **Emergency Rooms:** EMTALA requires treatment regardless of ability to pay — paid for by all taxpayers.\n- **Free and low-cost clinics:** Also taxpayer-funded.\n- **Nonprofits and charities:** Often oversubscribed and income-limited.\n- **Crowdfunding:** It's a sad truth that many folks who can't afford their treatment turn to sites like GoFundMe to pay their bills. Unfortunately, research shows that these crowdfunding campaigns are usually not successful.\n\nAll of these options are paid for by others — they function as a kind of informal insurance. But it's deeply inefficient informal insurance. Universal coverage, properly designed, is both more humane and more cost-effective.\n\nPeter on the role of subsidies in ensuring everyone can access coverage:",
      videoUrl: "https://player.vimeo.com/video/1026284710?h=9ac170b8d1",
      watchFor: "Peter distinguishes between different types of subsidies and the populations they're designed for. Notice how he frames this not just as a moral obligation but as an economic necessity for the innovation system.",
      imageUrl: "/images/ch7_img3.jpg",
      keyPoints: [
        "**ACA Exchange programs:** State-run marketplace plans at different price points, some subsidized for those who qualify",
        "**Medicare:** Government insurance for retirement-age Americans, funded through payroll taxes during working years. Learn more at [Medicare.gov](https://www.medicare.gov/basics/get-started-with-medicare)",
        "**Medicaid:** Government insurance for those who can't afford other coverage — eligibility varies by state. Check [Medicaid.gov](https://www.medicaid.gov/about-us/where-can-people-get-help-medicaid-chip/index.html) to learn about Medicaid in your state",
        "Universal coverage matters for innovation: every uninsured patient who goes without generates political pressure that threatens drug development for everyone",
      ],
      deepDive: [
        { label: "PAN Foundation — find a patient assistance program", description: "Helps patients find programs that cover their out-of-pocket drug costs.", url: "https://www.panfoundation.org/find-disease-fund/", urlLabel: "Visit →" },
        { label: "National Association of Free and Charitable Clinics", description: "Find a free or low-cost clinic near you.", url: "https://nafcclinics.org/find-clinic/", urlLabel: "Find a clinic →" },
      ],
      xp: 10,
    },
    {
      id: "c7t5",
      level: "green",
      type: "video",
      contextNote: "The most important reform — and why it solves more than just affordability",
      title: "How we make insurance better",
      coreConcept: "Capping or eliminating out-of-pocket costs is the most important reform. The evidence is unambiguous: higher OOP costs kill people. And fixing this would also defuse the political pressure driving harmful price controls.",
      content: "Imagine a world where when you get sick, your doctor prescribes a medicine that your insurer instantly prior-authorizes. You pick it up at the pharmacy with a low or zero out-of-pocket cost. There's no impediment. Your insurer came through.\n\nAs you now know, it doesn't often work this way. But it could. Peter on what would make insurance better:",
      videoUrl: "https://player.vimeo.com/video/1031288125?h=5eec992925",
      watchFor: "Peter outlines specific, actionable reforms — some requiring legislation, some requiring only changes in how plans are designed. As you watch, think about which reforms address the patient's experience directly vs. which address the system's incentive structure.",
      imageUrl: "/images/ch7_img4.png",
      xp: 10,
    },
    {
      id: "c7t6",
      level: "green",
      type: "reading",
      contextNote: "The evidence — and the specific reforms needed",
      title: "Out-of-pocket reform: the data is unambiguous",
      coreConcept: "A $10 increase in cost-sharing leads to a 23% drop in drug use and a 33% increase in mortality. The IRA's $2,000 Medicare cap is a good start. We need to go much further.",
      content: "First and foremost, we must reform insurance so it actually works as insurance. Out-of-pocket costs must be capped or eliminated so those who are insured can afford their care.\n\nThe evidence is stark. Aaron Carroll in the New York Times cited research showing:\n\n*\"A simple $10 increase in cost-sharing, which many would consider a small amount of money, led to about a 23 percent decrease in drug consumption. Worse, it led to an almost 33 percent increase in monthly mortality. In other words, making seniors pay $10 more per prescription led to people dying.\"*\n\nWe're seeing political progress: the Inflation Reduction Act capped OOPs for Medicare Part D beneficiaries at **$2,000 per year**. That's a meaningful step — but it doesn't cover the majority of Americans on private insurance.\n\nThe math actually favors reform. In 2019, the Congressional Budget Office found that covering OOP costs for Medicare beneficiaries would cost the program **$10 billion** but ultimately save **$20 billion** through reduced long-term healthcare costs. People who can afford their medications stay out of emergency rooms. Preventative care reduces costly downstream treatment.\n\nReal talk: eliminating or reducing OOPs may require raising premiums slightly. But premiums already go up faster than inflation every year — mostly due to rising costs of hospitals and doctors, whose services never go generic. A one-time premium increase to eliminate OOP costs would likely be barely noticed compared to what already happens annually. And suddenly, every patient would be able to get treatment. No one would have to go without. And we'd likely hear far fewer calls for price controls on novel medicines.",
      imageUrl: "/images/ch7_img5.jpg",
      stats: [
        { value: "$10", label: "Increase in cost-sharing studied" },
        { value: "23%", label: "Decrease in drug consumption that followed" },
        { value: "33%", label: "Increase in monthly mortality" },
        { value: "$2,000", label: "IRA cap on Medicare Part D OOPs — a start" },
      ],
      deepDiveType: "drawer",
      deepDive: [
        { label: "The devastating effects of out-of-pocket costs — Aaron Carroll, NYT (RECOMMENDED)", description: "The essay containing the $10 cost-sharing / 33% mortality statistic. One of the most important pieces of writing on US healthcare policy.", url: "https://www.nytimes.com/2022/07/07/opinion/medical-debt-health-care-cost.html", urlLabel: "Read →" },
        { label: "CBO report: covering Medicare OOP costs saves money long-term", description: "The nonpartisan Congressional Budget Office analysis showing covering OOP costs $10B but saves $20B.", url: "https://files.cdn.thinkific.com/file_uploads/347577/attachments/57b/b05/d5e/55151-SupplementalMaterial.pdf", urlLabel: "Read →" },
        { label: "The real-world impact of prior authorization — NYT video essay", description: "A powerful investigation into the grueling consequences of care denials and delays.", url: "https://www.nytimes.com/2024/03/14/opinion/health-insurance-prior-authorization.html", urlLabel: "Watch →" },
      ],
      xp: 10,
    },
    {
      id: "c7t7",
      level: "green",
      type: "reading",
      contextNote: "Why universal coverage matters — and what it doesn't mean",
      title: "Universal coverage: what we mean and what we don't",
      coreConcept: "Universal coverage means every American has proper health insurance — not a single government-run plan. Competition between plans is essential. But contributing to the healthcare system shouldn't be optional.",
      content: "Our position: expanding insurance coverage to all Americans is a crucial step. The fact that about 10% of Americans remain uninsured and another 10% are underinsured is tragic for every person who finds themselves unable to afford care — and a threat to the innovation system.\n\nSolving the uninsured problem is hard. In some cases it's intertwined with homelessness and mental health challenges. In others, it's a matter of convincing or mandating that healthy working people pay for insurance even if they think they don't need it.\n\nBut we already have a system that forces those with incomes above certain thresholds to pay taxes. Mandatory insurance premiums are essentially taxes. Just as no family above a certain income can avoid contributing to schools, police, fire departments, and the military — neither should people avoid contributing to our healthcare system when, inevitably, they'll benefit from it.\n\n**To be clear: we are not calling for a single-payer system.** There is profound benefit when businesses compete for revenue. A single plan would be a monopoly — and consumers are right to fear that. We need universal healthcare paid for by competing insurance plans. States like Massachusetts mandate car insurance with competing providers. The competition is what forces plans to think hard before deciding not to cover something people value.\n\nChoosing among insurance plans reveals what people value — a signal to innovators and investors. This insurance meta-marketplace matters:\n- If you're weighing job opportunities, factor in the quality of each employer's insurance coverage\n- If your employer's plan doesn't cover what you need, tell HR — that's a market signal insurers notice\n- Consider the new GLP-1 obesity medicines: people are demanding their insurance cover them as evidence of effectiveness piles up. When plans lose members over coverage decisions, they reconsider",
      imageUrl: "/images/ch7_img6.png",
      xp: 10,
    },
    {
      id: "c7t8",
      level: "green",
      type: "reading",
      contextNote: "When prior authorization becomes a weapon against patients",
      title: "Abuse of prior authorization and denial of care",
      coreConcept: "Prior authorization is legitimate when it steers patients toward cost-effective care. It becomes harmful when it's used as a bureaucratic obstacle to deny care physicians have determined patients need.",
      content: "Prior authorization helps ensure prescribed medications are appropriate for a specific patient. When it's automatic, electronic, and genuinely designed to guide patients to more affordable but equally effective treatments, it makes sense.\n\nBut many prior authorization procedures are long and arduous, requiring physicians to advocate for patients by convincing insurers that prescribed medications are truly needed. **Doctors spend around 15 hours per week** pursuing prior authorizations. More than **9 out of 10 physicians** say the prior authorization process has a negative impact on patient clinical outcomes.\n\nA key problem: prior auth creates confusion about what's actually covered. It's one thing for a plan to clearly state it won't cover something. It's entirely different when patients believe they're covered — only to be met with hidden barriers like complicated forms that must be completed and submitted by fax.\n\nThe fix is simpler than the problem. If a plan covers CGRP migraine medications \"after failing first-line generics,\" it should verify this through the patient's medical records — instantly — not require a lengthy paper form. The information is already there. The technology exists. The only reason not to use it is that friction serves the insurer's interests.\n\nIt's also possible to appeal denials of care — but few patients try and even fewer are successful, [as this KFF explainer](https://www.kff.org/private-insurance/issue-brief/claims-denials-and-appeals-in-aca-marketplace-plans/) points out. But in the rare instances when patients do fight back, it can expose the lengths to which insurance plans may go to hold back medically necessary care.\n\nA ProPublica investigation documented [how one patient and his family fought back against United Healthcare](https://www.propublica.org/article/unitedhealth-healthcare-insurance-denial-ulcerative-colitis) — an extraordinary case study in denial of care.\n\nInsurance denials don't always sit well with the individuals within large insurance companies who are tasked with reviewing individual patient cases. [Another ProPublica investigation](https://www.propublica.org/article/cigna-medical-director-doctor-patient-preapproval-denials-insurance) revealed the pressure applied to Cigna's medical directors to quickly dispense with patients' requests that their insurance cover doctor-prescribed treatments. In rare instances when patients do fight back, it can expose the extraordinary lengths insurance plans go to withhold medically necessary care.",
      imageUrl: "/images/ch7_img7.png",
      keyPoints: [
        "Prior auth is legitimate when it's fast, electronic, and guides patients to equally effective lower-cost treatments",
        "Prior auth is harmful when it creates bureaucratic delays that dissuade physicians from even prescribing the right medicine",
        "Doctors spend ~15 hrs/week on prior auth — time that comes directly from patient care",
        "9 in 10 physicians say prior auth negatively impacts patient clinical outcomes",
        "The fix: real-time electronic authorization using existing patient records — not paper forms sent by fax",
      ],
      xp: 10,
    },
    {
      id: "c7t9",
      level: "green",
      type: "reading",
      contextNote: "Copay assistance designed to help patients — redirected to insurers",
      title: "Playing games with patient assistance: copay accumulators",
      coreConcept: "Copay accumulators take manufacturer assistance intended to reduce patient costs and redirect it to the insurer instead. Patients end up paying twice — once in premiums, once in OOP costs the coupon was supposed to cover.",
      content: "Imagine you just changed jobs and checked carefully that your new insurance covers a drug you rely on. The plan requires 20% co-insurance, but the drug company has a copay assistance program to make it affordable. Then you get a huge bill even after applying the coupon.\n\nWhat happened? Your employer's plan used a **copay accumulator** — the value of the manufacturer's coupon went to the insurance company, not to you. The plan refuses to honor its commitment to cover the drug until the patient has stretched financially to prove they need it.\n\n**Accumulators and related programs** (copay maximizers, specialty carve-outs) repurpose coupons provided by drug makers to help patients afford OOP costs and direct that money back to the insurance plan.\n\nThe practical effect: patients who enrolled in copay assistance programs expecting help still get large unexpected bills. The insurer captures the manufacturer's subsidy. The sick patient pays twice — once in premiums for coverage they paid to have, once in OOP costs the assistance was supposed to cover.\n\nPatients already paid into the system through their premiums. Charging them again based on inflated list prices is making them pay twice. When OOP costs are so high that patients can't afford medications, they aren't truly insured — it's false advertising.\n\nWhen the sick subsidize the healthy — the reverse of how insurance is supposed to work — the whole system breaks down.",
      whyItMatters: "Several states have banned accumulator programs. Federal action remains pending. These programs represent insurance companies weaponizing patient assistance against the very patients it was designed to help.",
      deepDive: [
        { label: "PAN Foundation backgrounder on accumulators — and a call to ban them", description: "What copay accumulators, maximizers, and specialty carve-outs are, how they harm patients, and what policy could fix it.", url: "https://www.panfoundation.org/our-positions/ban-copay-accumulator-maximizer-alternative-funding-programs/", urlLabel: "Read →" },
      ],
      xp: 10,
    },
    {
      id: "c7t10",
      level: "green",
      type: "reading",
      contextNote: "What you can actually do about all of this",
      title: "What can you do?",
      coreConcept: "Understanding the system is step one. Using that understanding — to advocate, to vote, to push your employer — is how change happens.",
      content: "You now understand more about insurance and drug pricing than most people in this debate. Here's how to use it:",
      imageUrl: "/images/ch7_img8.png",
      keyPoints: [
        "**Be informed and speak up** — when friends or family complain about healthcare costs, ask: would proper insurance with low or no OOP costs fix this? Most of the time, the answer is yes. Redirecting the conversation toward insurance design is more productive than blaming drug companies.",
        "**Contact your representatives** — letters, emails, and calls to local and national representatives on healthcare policy make a real difference when they come from constituents who understand the actual problem.",
        "**Work with advocacy organizations** — organizations like No Patient Left Behind (NPLB) provide resources, community, and concrete ways to get involved in pushing for insurance reform.",
        "**Vote with your dollars** — when weighing job offers, factor in the quality of drug coverage. When your employer's insurance doesn't cover what you need, tell HR. Employers have leverage over insurers that individuals don't.",
      ],
      xp: 10,
    },
    {
      id: "c7t11",
      level: "green",
      type: "reading",
      contextNote: "Before moving on — an important documentary recommendation",
      title: "One more thing: Turning Point",
      coreConcept: "Insurance and affordability aren't just policy abstractions — they show up in how we tell stories about medicine. This documentary is a powerful illustration of what's at stake.",
      content: "Before moving to Chapter 8, we recommend the documentary **Turning Point** by James Keach — a film that takes you inside the quest for treatments for Alzheimer's disease.\n\nAs you watch, pay attention to how they talk about insurance and affordability in the middle of the film. Is it clear? Compare that to how NPLB makes the case in [this video](https://www.youtube.com/watch?v=TSodw8nzM18).\n\nNow imagine if the American public had many more films like this — documentary and dramatized — and they all taught insurance and affordability the way that NPLB video does. Might people be more inspired by their own role (paying premiums, investing savings) in making scientific quests possible and profitable? And might they discourage policymakers from pushing for price controls and urge them instead to focus on insurance reform?\n\nMaybe. Hopefully.\n\nOn a hopeful note: when insurance covers treatments like Trikafta, it tells us that society values them. And that means more resources are marshaled toward even better options for patients. Even though Trikafta is a miracle drug for many people with CF, there is room for improvement. Take a moment to [read this piece from RA Capital managing director Josh Resnick](https://rapport.bio/all-stories/announcing-sionna), an emergency room physician, who shares his thoughts on why \"good enough isn't good enough\" in CF — and why we need to continue our quest for better treatments. And what ultimately makes those quests possible? Insurance.",
      deepDive: [
        { label: "Turning Point — YouTube", description: "The full documentary on the quest for Alzheimer's treatments. Watch for how insurance and affordability are discussed mid-film.", url: "https://www.youtube.com/watch?v=J_llh3_h8dQ", urlLabel: "Watch →" },
        { label: "Turning Point — Apple TV", url: "https://tv.apple.com/us/movie/turning-point/umc.cmc.30sgavmhbxrax5vvjg5zk0a57", urlLabel: "Apple TV →" },
        { label: "Turning Point — Amazon", url: "https://www.amazon.com/Turning-Point-Tom-Cole/dp/B08JF5FT63", urlLabel: "Amazon →" },
      ],
      xp: 10,
    },
    {
      id: "c7t12",
      level: "green",
      type: "quiz",
      contextNote: "Check your understanding before moving on",
      title: "Check your understanding: The big problems with insurance",
      content: "",
      xp: 20,
      questions: [
        {
          question: "Vertical integration in healthcare refers to:",
          options: [
            "PBMs negotiating drug prices on behalf of insurers",
            "A strategy where a company expands to control different stages of the healthcare supply chain",
            "Drug companies acquiring smaller biotechs",
            "The government setting maximum drug prices"
          ],
          correct: 1
        },
        {
          question: "All of the following are problems with US health insurance EXCEPT:",
          options: [
            "High OOP costs cause patients to forego necessary treatments",
            "The US lags behind the world in drug innovation",
            "About 10% of Americans lack health insurance",
            "PBMs retain drug rebates meant to lower patient costs"
          ],
          correct: 1
        },
        {
          question: "True or false: the majority of working-age Americans buy their own insurance through ACA exchange plans.",
          options: ["True", "False"],
          correct: 1
        },
        {
          question: "A $10 increase in cost-sharing was found to cause:",
          options: [
            "A 5% decrease in drug use",
            "No meaningful change in patient behavior",
            "A 23% decrease in drug consumption and a 33% increase in monthly mortality",
            "A 50% decrease in insurance premiums"
          ],
          correct: 2
        },
        {
          question: "What are copay accumulators?",
          options: [
            "Programs that help patients save toward their deductible",
            "Insurance programs that redirect manufacturer copay assistance to the insurer rather than counting toward the patient's deductible",
            "Government subsidies for low-income patients",
            "Programs that eliminate deductibles for chronic conditions"
          ],
          correct: 1
        },
        {
          question: "We argue that in order to improve the current health insurance system, we should do all of the following EXCEPT:",
          options: [
            "Legislate price controls for all new drugs",
            "Cap or eliminate out-of-pocket costs",
            "Provide universal health coverage for all Americans",
            "Ensure prior authorization doesn't create needless friction"
          ],
          correct: 0
        },
        {
          question: "Health insurance is what makes costly innovations affordable because:",
          options: [
            "It directly funds R&D at pharmaceutical companies",
            "It pools premiums from many people so that the few who need expensive medicines can access them",
            "It eliminates the need for drug patents",
            "It gives the government leverage over drug prices"
          ],
          correct: 1
        }
      ]
    }
  ]
}
 
export default chapter7