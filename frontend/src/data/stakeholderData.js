// Stakeholder — Full game data
// 4 roles × 5 decisions × 3 choices = 60 scenarios
// Each choice has 3 ripples to the other roles

export const roles = {
  scientist:   { label: 'The Scientist',    emoji: '🔬', color: '#1D9E75', bg: '#E1F5EE', text: '#085041', border: '#1D9E75', desc: 'You discovered something. Can you get it to patients?' },
  investor:    { label: 'The Investor',     emoji: '📈', color: '#185FA5', bg: '#E6F1FB', text: '#0C447C', border: '#185FA5', desc: 'You deploy capital. Every decision is about risk vs return.' },
  clinician:   { label: 'The Clinician',    emoji: '🏥', color: '#534AB7', bg: '#EEEDFE', text: '#3C3489', border: '#534AB7', desc: 'You treat patients. You need better options — now.' },
  policy:      { label: 'The Policy Maker', emoji: '⚖️', color: '#BA7517', bg: '#FAEEDA', text: '#633806', border: '#BA7517', desc: 'You set the rules. Every decision affects millions.' },
}

export const scenarios = {

  scientist: [
    {
      id: 's1',
      stage: 'Publication strategy',
      title: 'Do you publish your Phase II data now — or wait for Phase III?',
      situation: 'Your Phase II data shows a 67% response rate — promising but not definitive. Publishing now builds clinical credibility but could give PBMs ammunition to negotiate lower formulary placement before your full data is in.',
      choices: [
        {
          text: 'Publish now — build clinical momentum',
          outcome: 'partial',
          impact: -5,
          result: 'Clinical community engages early. Physicians start tracking your drug. But PBMs flag the incomplete data and push for Tier 3 placement pending Phase III.',
          ripples: {
            investor: { icon: '📈', text: 'Early publication signals confidence — but incomplete data makes your Series B harder to price. Investors want Phase III before committing to a full round.' },
            clinician: { icon: '🏥', text: 'You read the Phase II paper. It\'s promising. You mention it to two patients who are out of options. Now they\'re asking about access — and you have no good answer yet.' },
            policy: { icon: '⚖️', text: 'Incomplete trial data entering clinical conversation creates pressure to update coverage guidelines before the evidence base is ready.' },
          }
        },
        {
          text: 'Wait for Phase III — tell a cleaner story',
          outcome: 'partial',
          impact: -8,
          result: 'Cleaner story at launch. But 18 months of silence lets a competitor build mindshare with physicians. You arrive late to a conversation already happening without you.',
          ripples: {
            investor: { icon: '📈', text: 'Silence for 18 months is nerve-wracking. Two board members push for competitive intelligence. Your competitor just published. The comparison isn\'t flattering.' },
            clinician: { icon: '🏥', text: 'Your patients ask about what\'s in the pipeline. You tell them to wait. They wait. One enrolls in a competitor\'s trial instead.' },
            policy: { icon: '⚖️', text: 'No published data means no basis for early coverage decisions. Payers defer formulary decisions until after launch — adding months to patient access.' },
          }
        },
        {
          text: 'Publish in a specialist journal only — control the audience',
          outcome: 'good',
          impact: 0,
          result: 'KOLs in your indication engage deeply. General physicians and PBMs miss it. Buys time while building targeted credibility with the people who matter most.',
          ripples: {
            investor: { icon: '📈', text: 'Specialist publication keeps data contained — smart. But your competitor published in NEJM. The narrative gap is real and growing.' },
            clinician: { icon: '🏥', text: 'You don\'t read the specialist journal where this was published. You find out about the drug at a conference six months later — from a colleague, not the company.' },
            policy: { icon: '⚖️', text: 'Restricted publication means limited policy awareness. When the drug launches, coverage committees are starting from zero.' },
          }
        },
      ]
    },
    {
      id: 's2',
      stage: 'Manufacturing scale-up',
      title: 'Your manufacturing partner can\'t scale. What do you do?',
      situation: 'Phase III is about to start and your manufacturing partner just told you they can\'t scale to commercial volumes without a $120M facility upgrade — and it\'ll take 3 years. You can fund the upgrade, find a new partner, or reduce trial scope to buy time.',
      choices: [
        {
          text: 'Fund the $120M upgrade yourself',
          outcome: 'partial',
          impact: -10,
          result: 'You control your manufacturing destiny. But $120M is 40% of your remaining runway. You\'ll need to raise before Phase III ends.',
          ripples: {
            investor: { icon: '📈', text: 'You just committed $120M to manufacturing. Your burn rate doubled. The Series C has to happen in 18 months whether the data is ready or not.' },
            clinician: { icon: '🏥', text: 'Manufacturing investment signals long-term commitment. If this drug works, it\'ll actually be available. Drug shortages have left your patients stranded before.' },
            policy: { icon: '⚖️', text: 'Domestic manufacturing investment is exactly what policymakers want — reduces supply chain vulnerability. This decision quietly builds goodwill in Washington.' },
          }
        },
        {
          text: 'Find a new manufacturing partner',
          outcome: 'partial',
          impact: -12,
          result: 'Takes 8 months to qualify a new partner. Your Phase III timeline slips. But you preserve capital and get a more scalable partner long-term.',
          ripples: {
            investor: { icon: '📈', text: '8-month delay to Phase III means your data readout moves to Q3 next year. Existing investors are supportive. New investors will want a discount for the delay risk.' },
            clinician: { icon: '🏥', text: 'Phase III delay means patients who could have enrolled this year have to wait. Two of your patients deteriorate during the gap. One would have been eligible.' },
            policy: { icon: '⚖️', text: 'Trial delays create gaps in the evidence pipeline. Coverage committees that were tracking your timeline now defer decisions. Access gets pushed back 12 months.' },
          }
        },
        {
          text: 'Reduce trial scope to stretch runway',
          outcome: 'bad',
          impact: -20,
          result: 'You hit enrollment targets with a smaller trial. But the FDA may push back on statistical power. You\'re betting everything on a cleaner-than-expected result.',
          ripples: {
            investor: { icon: '📈', text: 'Smaller trial scope reduces cost but increases approval risk. Your probability of success just dropped 15% in every model your investors are running.' },
            clinician: { icon: '🏥', text: 'Fewer trial sites means fewer patients enrolled. You referred three patients for consideration — none got in. They\'re still looking for options.' },
            policy: { icon: '⚖️', text: 'Reduced trial scope raises statistical power questions. If FDA requires additional post-approval studies, conditional coverage adds complexity and delays access.' },
          }
        },
      ]
    },
    {
      id: 's3',
      stage: 'FDA negotiation',
      title: 'The FDA wants 6 more months of safety data. Do you comply?',
      situation: 'The FDA has reviewed your Phase III data and is requesting 6 additional months of long-term safety data before approval. You can comply and delay, negotiate for accelerated approval with post-marketing commitments, or contest their interpretation in a Type A meeting.',
      choices: [
        {
          text: 'Comply — clean approval is worth the wait',
          outcome: 'good',
          impact: -5,
          result: 'Clean approval. No conditions. Full clinical confidence. But 6 months of delayed launch costs $180M in lost revenue and extends patient wait times.',
          ripples: {
            investor: { icon: '📈', text: '6-month delay costs $180M in lost revenue. Your valuation takes a hit. But a clean approval is worth more long-term than a conditional one.' },
            clinician: { icon: '🏥', text: 'Six more months. You have a patient who has tried everything. You tell her the drug she\'s been waiting for is delayed again. She nods. She doesn\'t say anything.' },
            policy: { icon: '⚖️', text: 'Delayed approval means delayed coverage decisions. Everything moves right by 6 months. Patient advocacy groups start calling congressional offices.' },
          }
        },
        {
          text: 'Negotiate accelerated approval with post-marketing commitments',
          outcome: 'partial',
          impact: -8,
          result: 'Earlier patient access. But post-marketing commitments create ongoing regulatory risk. If the long-term safety data comes back with a signal, the drug could be pulled.',
          ripples: {
            investor: { icon: '📈', text: 'Accelerated approval gets you to revenue 6 months early. But post-marketing commitments create a sword of Damocles over the asset. Risk-adjusted valuation is complicated.' },
            clinician: { icon: '🏥', text: 'Accelerated approval means your patient can access this drug now. You prescribe it cautiously, watching for the safety signals the FDA flagged. Every visit feels like surveillance.' },
            policy: { icon: '⚖️', text: 'Accelerated approval with post-marketing conditions is a policy tool you championed. Watching it work in real time validates the framework — and its risks.' },
          }
        },
        {
          text: 'Contest the FDA\'s interpretation in a Type A meeting',
          outcome: 'good',
          impact: 0,
          result: 'The Type A meeting goes better than expected. FDA agrees to 3 months of additional data instead of 6. A partial win that took courage and paid off.',
          ripples: {
            investor: { icon: '📈', text: 'Contesting the FDA and winning — even partially — signals your team\'s quality. Sophisticated investors notice. Your Series C conversations just got better.' },
            clinician: { icon: '🏥', text: '3 months instead of 6 — that matters for patients running out of options. You didn\'t know this negotiation was happening. You just know the timeline moved.' },
            policy: { icon: '⚖️', text: 'FDA flexibility in Type A meetings is underused. This outcome will be cited in future discussions about regulatory modernization. A small precedent with big implications.' },
          }
        },
      ]
    },
    {
      id: 's4',
      stage: 'Acquisition offer',
      title: 'A pharma giant offers $800M for your drug. Do you sell?',
      situation: 'A major pharma company has offered $800M to acquire your drug before you\'ve filed for approval. Your investors would get 3x returns. But you believe the drug is worth $4B at peak. Do you sell, negotiate a co-development deal, or stay independent?',
      choices: [
        {
          text: 'Accept the acquisition',
          outcome: 'partial',
          impact: -5,
          result: 'Everyone gets paid. The drug gets massive commercial infrastructure. But you lose control — and pharma may deprioritize it if a competing internal asset shows promise.',
          ripples: {
            investor: { icon: '📈', text: '3x return in year 6. Not the 10x you were hoping for — but clean, certain, and fundable. Two LPs ask you to find the next one. You\'re already looking.' },
            clinician: { icon: '🏥', text: 'The drug is now owned by a company with 40 sales reps in your region. Access will be smoother. But you\'ve seen pharma shelve acquired drugs before. You\'re watching.' },
            policy: { icon: '⚖️', text: 'Acquisition by large pharma changes the political calculus. It\'s now a big pharma drug, not a biotech story. Congressional scrutiny just increased.' },
          }
        },
        {
          text: 'Negotiate a co-development deal',
          outcome: 'partial',
          impact: -8,
          result: 'You keep a stake in the upside and maintain scientific control. But the negotiation takes 4 months and integration risk is real.',
          ripples: {
            investor: { icon: '📈', text: 'Co-development preserves upside but complicates the cap table. Your next financing will require pharma\'s consent. That\'s a lever you just gave away.' },
            clinician: { icon: '🏥', text: 'Two companies now responsible for access programs. In practice that often means neither is. Patient support coordination becomes a nightmare.' },
            policy: { icon: '⚖️', text: 'Co-development structures obscure accountability. When something goes wrong — pricing, access, safety — nobody knows who to call.' },
          }
        },
        {
          text: 'Stay independent — bet on yourself',
          outcome: 'good',
          impact: 0,
          result: 'You capture full value if Phase III succeeds. No safety net if it stumbles. Highest risk, highest reward — and your team believes in the drug.',
          ripples: {
            investor: { icon: '📈', text: 'Turning down $800M takes conviction. Your lead investor is on record saying this was right. Two others privately disagree. Watch the next board meeting.' },
            clinician: { icon: '🏥', text: 'Independent biotech means a lean commercial team. Access programs will be smaller. But the founders care about this drug in a way large pharma rarely does.' },
            policy: { icon: '⚖️', text: 'An independent biotech going it alone is exactly what the innovation ecosystem needs. But they\'ll need favorable policy conditions to succeed.' },
          }
        },
      ]
    },
    {
      id: 's5',
      stage: 'Patient label decision',
      title: 'Your drug works for only 15% of patients. Do you narrow the label?',
      situation: 'Phase III data shows strong efficacy — but only in patients with a specific biomarker, about 15% of your originally targeted population. You can narrow your label to biomarker-positive patients, seek approval for the full population, or file two separate applications.',
      choices: [
        {
          text: 'Narrow the label to biomarker-positive patients',
          outcome: 'good',
          impact: 0,
          result: 'Precision medicine at its best. Every patient who gets the drug is likely to respond. But your addressable market just shrank 85%. You know it\'s the right call.',
          ripples: {
            investor: { icon: '📈', text: '85% market reduction. Your NPV model collapses. The board calls an emergency meeting. But a clean clinical story attracts the right investors eventually.' },
            clinician: { icon: '🏥', text: 'Biomarker testing required before prescribing. You love this. Every patient you prescribe to has a real chance of responding. Medicine the way it should be.' },
            policy: { icon: '⚖️', text: 'Narrow label with biomarker requirement is good science and good policy. Who pays for the biomarker test? If it\'s not covered, the drug effectively isn\'t either.' },
          }
        },
        {
          text: 'Seek approval for the full population',
          outcome: 'bad',
          impact: -20,
          result: 'Larger market on paper. But 85% of patients who receive it won\'t respond well. Real-world outcomes will be mixed. Physicians will lose confidence over time.',
          ripples: {
            investor: { icon: '📈', text: 'Full label looks great on paper. When real-world outcomes show 15% response rates, physicians stop prescribing. Your peak sales assumptions won\'t hold.' },
            clinician: { icon: '🏥', text: 'You\'re prescribing this to patients who may not respond. You don\'t know which ones until they try it. That uncertainty is uncomfortable — your patients bear the cost.' },
            policy: { icon: '⚖️', text: 'Approving for a broad population when subgroup data was clearer raises questions about FDA evidence standards. When outcomes disappoint, the headlines will be unforgiving.' },
          }
        },
        {
          text: 'File two separate applications — right drug, right patient',
          outcome: 'partial',
          impact: -10,
          result: 'Right drug for the right patient at scale. But two NDAs cost $40M more and take 18 additional months. You\'re betting your runway on a longer timeline.',
          ripples: {
            investor: { icon: '📈', text: 'Two NDAs = double the regulatory risk. If one gets delayed, you\'ve burned $40M on a filing that\'s not generating revenue. Did you get board approval?' },
            clinician: { icon: '🏥', text: 'Two separate indications means cleaner prescribing decisions for each population. It costs you time. It saves your patients confusion. That tradeoff is obvious from your chair.' },
            policy: { icon: '⚖️', text: 'Two applications for different patient populations is regulatory sophistication that deserves recognition. But 18-month delays to access are not cost-free for patients waiting now.' },
          }
        },
      ]
    },
  ],

  investor: [
    {
      id: 'i1',
      stage: 'Competitive response',
      title: 'A competitor just filed their NDA. You\'ll be 14 months behind. What now?',
      situation: 'A competitor just filed for a drug in the same class as your portfolio company\'s lead asset. They\'ll be on market 14 months before you. Do you double down on differentiation, pivot to a different indication, or explore a partnership?',
      choices: [
        {
          text: 'Double down — second but better wins',
          outcome: 'good',
          impact: 0,
          result: 'Your drug has a cleaner safety profile and once-daily dosing. The "second but better" narrative. It\'s worked before — Lipitor wasn\'t first either.',
          ripples: {
            scientist: { icon: '🔬', text: 'The "second but better" strategy means your safety and dosing data need to be bulletproof. The scientific team is under pressure to generate comparison data fast.' },
            clinician: { icon: '🏥', text: 'A competitor is already in your clinic. You\'re evaluating both. The new one has better dosing. You\'ll wait for more real-world data before switching. Most physicians will.' },
            policy: { icon: '⚖️', text: 'Competition in a drug class is exactly what the system needs. Two options means PBMs can negotiate. Prices will fall faster. Patients will benefit — eventually.' },
          }
        },
        {
          text: 'Pivot to a pediatric indication — be first somewhere',
          outcome: 'partial',
          impact: -8,
          result: 'You redirect resources to a pediatric indication where the competitor has no presence. Smaller market, but you\'re first. Orphan designation is possible.',
          ripples: {
            scientist: { icon: '🔬', text: 'Indication pivot means reanalysis of existing data for pediatric use. The scientific team needs 6 months to build the case. They needed 2 weeks notice. They got 2 days.' },
            clinician: { icon: '🏥', text: 'Pediatric pivot means adult patients lose access to a drug that could have helped them. You understand the business logic. You don\'t like it.' },
            policy: { icon: '⚖️', text: 'Orphan designation for a pediatric indication is exactly what the rare disease framework was designed to encourage. The pivot is frustrating for adults — but right for the system.' },
          }
        },
        {
          text: 'Explore a co-promotion partnership',
          outcome: 'partial',
          impact: -10,
          result: 'You approach the competitor about co-promotion in non-overlapping markets. Negotiations take 6 months. The deal is smaller than hoped but stabilizes your position.',
          ripples: {
            scientist: { icon: '🔬', text: 'Partnership talks distract the commercial team for 6 months. The scientific team asks if their indication is still the priority. You don\'t have a clean answer.' },
            clinician: { icon: '🏥', text: 'Co-promotion means both drugs are represented by the same sales force in some markets. You\'re getting calls from reps who used to compete. It\'s confusing.' },
            policy: { icon: '⚖️', text: 'Co-promotion agreements between competitors raise antitrust questions that regulators haven\'t caught up with yet. This deal will be scrutinized — eventually.' },
          }
        },
      ]
    },
    {
      id: 'i2',
      stage: 'Bridge financing',
      title: 'Your lead investor offers a down-round. Do you take it?',
      situation: 'You need $80M to complete Phase III but the market is cold. Your lead investor offers bridge financing at a 35% discount to your last valuation. You can accept, seek new investors and delay the trial 6 months, or cut trial scope to stretch runway.',
      choices: [
        {
          text: 'Accept the down-round — keep the trial on track',
          outcome: 'partial',
          impact: -10,
          result: 'Trial continues on schedule. But the down-round signals weakness. Two scientists on the team start taking calls from recruiters.',
          ripples: {
            scientist: { icon: '🔬', text: 'The down-round is public. Your co-founder checks job boards for the first time in 4 years. You talk her out of it — for now. The team needs to see this through.' },
            clinician: { icon: '🏥', text: 'You don\'t follow cap tables. You follow trial timelines. The trial is still on schedule. That\'s what matters to the patients you\'ve enrolled.' },
            policy: { icon: '⚖️', text: 'Down-rounds in biotech signal market failure — capital markets aren\'t reliably funding innovation. This is exactly why push-funding mechanisms like PASTEUR matter.' },
          }
        },
        {
          text: 'Seek new investors — preserve valuation, delay trial',
          outcome: 'bad',
          impact: -18,
          result: 'You find a new lead at a flat valuation after 4 months of roadshow. Trial delays 6 months. Two enrolled patients withdraw. One deteriorates during the gap.',
          ripples: {
            scientist: { icon: '🔬', text: '6-month delay. The team refines the protocol — but two key scientists leave for competitors not in fundraising mode. Talent doesn\'t wait for cap tables to resolve.' },
            clinician: { icon: '🏥', text: 'Two of your enrolled patients withdrew during the delay. One deteriorated. When you call to re-enroll her after the restart, she\'s no longer eligible. You knew this would happen.' },
            policy: { icon: '⚖️', text: 'Fundraising delays in clinical trials are systemic. Guaranteed forward contracts — like those used for COVID vaccines — would eliminate this specific failure mode.' },
          }
        },
        {
          text: 'Cut trial scope — stretch the runway',
          outcome: 'bad',
          impact: -15,
          result: 'You preserve capital but reduce statistical power. The FDA may require additional post-approval studies. You\'re betting on clean data to overcome a smaller sample.',
          ripples: {
            scientist: { icon: '🔬', text: 'Smaller trial scope means the scientific team has to be perfect. No room for protocol amendments. No margin for site underperformance. The pressure is immense.' },
            clinician: { icon: '🏥', text: 'Fewer trial sites means fewer patients get access to experimental treatment. You referred 3 patients. None got in. You understand why. You still feel the weight of it.' },
            policy: { icon: '⚖️', text: 'Post-approval study requirements from underpowered trials create a regulatory backlog that delays final label decisions. This problem compounds with every conditional approval.' },
          }
        },
      ]
    },
    {
      id: 'i3',
      stage: 'PBM rebate demand',
      title: 'The PBM wants a 45% rebate. At that price, you barely break even.',
      situation: 'Your portfolio company\'s drug just got approved. Express Scripts will only give Tier 2 placement for a 45% rebate — barely profitable. You can accept, negotiate hard, or accept Tier 3 and compete on cash pay.',
      choices: [
        {
          text: 'Accept 45% — prioritize access over margin',
          outcome: 'partial',
          impact: -10,
          result: 'Broad access. Thin margins. Fund economics on this asset are marginal. But patients can get the drug and real-world data will build the case for renegotiation in 2 years.',
          ripples: {
            scientist: { icon: '🔬', text: '45% rebate means the company can\'t fund the next indication expansion. The scientific team\'s pipeline plans get cut in half. One researcher leaves to start her own company.' },
            clinician: { icon: '🏥', text: 'Tier 2 means affordable copays. Your patients can actually fill the prescription. You don\'t know or care about the rebate — you care that the drug is accessible.' },
            policy: { icon: '⚖️', text: 'The PBM extracted 45% of this drug\'s value through rebate negotiation. None went to patients. It went to PBM margins and insurer profits. This is the gross-to-net bubble in action.' },
          }
        },
        {
          text: 'Negotiate hard — 3 months, but get to 32%',
          outcome: 'partial',
          impact: -8,
          result: 'You get to 32% after 3 months of standoff. You lose Q1 sales but protect the asset\'s economics. Your company\'s next drug benefits from the precedent.',
          ripples: {
            scientist: { icon: '🔬', text: '3-month commercial standoff means the launch team is in crisis mode. The scientific team watches their drug sit in warehouses while lawyers argue about rebates.' },
            clinician: { icon: '🏥', text: '3-month delay to formulary placement means your patients who need the drug now can\'t get it at a reasonable cost. You prescribe anyway. Most can\'t fill it.' },
            policy: { icon: '⚖️', text: 'Rebate negotiations taking months are a tax on patient access. Transparency requirements — published net prices — would compress this timeline dramatically.' },
          }
        },
        {
          text: 'Accept Tier 3 — go direct through Cost Plus Drugs',
          outcome: 'good',
          impact: 0,
          result: 'You bypass the PBM system entirely. Your net price is lower but there\'s no rebate extraction. A bold experiment in transparency.',
          ripples: {
            scientist: { icon: '🔬', text: 'Cash pay model means you know exactly what patients pay. The scientific team loves the transparency. The commercial team is terrified — they\'ve never operated without insurance coverage.' },
            clinician: { icon: '🏥', text: 'Tier 3 means high copays for insured patients. Cash pay through Cost Plus is cheaper for some. You\'re doing math in the exam room to figure out which is better for each patient.' },
            policy: { icon: '⚖️', text: 'A biotech bypassing PBMs through direct cash pay pricing is a proof of concept for transparency reform. If it scales, it fundamentally changes the negotiating dynamics.' },
          }
        },
      ]
    },
    {
      id: 'i4',
      stage: 'Biosimilar defense',
      title: 'Three biosimilars just entered your market. How do you defend?',
      situation: 'Your portfolio company\'s biologic just lost patent protection and 3 biosimilar competitors have entered. Your drug retains brand loyalty with some physicians but PBMs are building rebate walls to protect the biosimilars. Do you cut price, invest in switching programs, or litigate?',
      choices: [
        {
          text: 'Cut price to compete with biosimilars',
          outcome: 'partial',
          impact: -10,
          result: 'You narrow the price gap. Some formulary positions retained. But you\'ve permanently reset price expectations. Revenue falls 60%.',
          ripples: {
            scientist: { icon: '🔬', text: 'Revenue collapse on your flagship asset means the next program loses funding. The transition from brand to generic was always coming — it just came hard.' },
            clinician: { icon: '🏥', text: 'Price cuts make the drug more accessible to your uninsured patients who were paying cash. For the first time, some of them can actually afford it. The timing is bittersweet.' },
            policy: { icon: '⚖️', text: 'Price competition from biosimilars working exactly as designed. The social contract is being honored — innovation rewarded, then genericized. This is the system working.' },
          }
        },
        {
          text: 'Invest in patient switching programs',
          outcome: 'partial',
          impact: -8,
          result: 'You fund a major patient education campaign. It slows switching but doesn\'t stop it. Buys 18 months of brand loyalty.',
          ripples: {
            scientist: { icon: '🔬', text: 'Patient switching campaigns require clinical differentiation data. The scientific team generates a real-world evidence study. The data is stronger than expected.' },
            clinician: { icon: '🏥', text: 'You\'re getting calls from the company\'s medical affairs team about biosimilar switching. You appreciate the data. You don\'t appreciate the implied pressure to keep prescribing the brand.' },
            policy: { icon: '⚖️', text: 'Patient switching programs can be legitimate education or disguised brand protection. The line is thin. This one is probably legitimate. The next company\'s might not be.' },
          }
        },
        {
          text: 'Litigate against biosimilar manufacturers',
          outcome: 'bad',
          impact: -20,
          result: 'You file patent challenges against 2 of 3 biosimilar manufacturers. 2 years. You win one, lose one. Cost: $45M in legal fees and reputational damage.',
          ripples: {
            scientist: { icon: '🔬', text: 'Patent litigation puts the scientific team on the stand. Your IP strategy is scrutinized publicly. Future investors read the depositions. Some don\'t like what they see.' },
            clinician: { icon: '🏥', text: 'Biosimilar litigation delays cheaper options for your patients for 2 years. You understand the legal system. You don\'t understand why it takes this long.' },
            policy: { icon: '⚖️', text: 'Patent litigation as biosimilar delay tactic is a known problem. Patent thicket reform — requiring companies to list patents at approval — would eliminate this specific abuse.' },
          }
        },
      ]
    },
    {
      id: 'i5',
      stage: 'Launch pricing',
      title: '$280K, $180K, or $120K? Your board wants maximum. Your conscience asks questions.',
      situation: 'Your drug is ready to launch. Your health economics team modeled three price points: $280K/year (maximum sustainable), $180K/year (mid-market), or $120K/year (access-oriented). Your GCEA analysis says the drug is worth $400K to society.',
      choices: [
        {
          text: 'Price at $280K — maximize the return',
          outcome: 'partial',
          impact: -8,
          result: 'Maximum revenue. Defensible ICER. Congressional scrutiny within 18 months. A senator puts your CEO on a hearing witness list.',
          ripples: {
            scientist: { icon: '🔬', text: 'Your drug\'s list price is on the front page. The scientific team — who spent 12 years on this — watches the drug become a political football. None of them signed up for this.' },
            clinician: { icon: '🏥', text: 'You want to prescribe this drug. Your hospital formulary committee is debating whether to cover it. You submit a clinical justification. You wait 3 months for an answer.' },
            policy: { icon: '⚖️', text: '$280K is defensible by GCEA. It\'s also a gift to everyone who wants price controls. You\'re using this case in a Senate hearing next month — as an example of what needs to change.' },
          }
        },
        {
          text: 'Price at $180K — broader access, lower political heat',
          outcome: 'good',
          impact: 0,
          result: 'Broader access, lower political friction. You leave $2B in revenue on the table over the patent life. The drug reaches 40% more patients.',
          ripples: {
            scientist: { icon: '🔬', text: 'Lower price point means the drug reaches patients faster. The scientific team\'s real-world outcomes data will be stronger for it. They care about this more than they let on.' },
            clinician: { icon: '🏥', text: 'Hospital formulary approved it in 6 weeks — faster than anything in years. You\'re prescribing it by month 2 of launch. Three patients who would have waited are already responding.' },
            policy: { icon: '⚖️', text: '$180K with broad access is the price point that makes the social contract argument easiest. You use this case in the Senate hearing — as the counterexample to the $280K drug.' },
          }
        },
        {
          text: 'Price at $120K — maximum access, minimum friction',
          outcome: 'partial',
          impact: -12,
          result: 'Maximum access. Minimum political friction. But returns barely justify $2.9B spent developing it. Your fund struggles to raise the next vehicle.',
          ripples: {
            scientist: { icon: '🔬', text: 'Your drug is accessible to almost every patient. That\'s everything you worked for. But the next scientist in this indication can\'t raise funding — the returns aren\'t there.' },
            clinician: { icon: '🏥', text: 'The most prescribed new drug in your specialty this year. Accessible, affordable, effective. You wish every launch looked like this. You know they can\'t all.' },
            policy: { icon: '⚖️', text: '$120K pricing is politically popular. But if every drug priced like this, the venture model for biotech breaks. You know this. Most of your colleagues don\'t.' },
          }
        },
      ]
    },
  ],

  clinician: [
    {
      id: 'c1',
      stage: 'Off-label prescription',
      title: 'A patient has exhausted every approved option. Do you prescribe off-label?',
      situation: 'A 34-year-old patient with a rare aggressive cancer has exhausted all approved options. A drug approved for a different cancer has shown promise in case reports for her condition. Insurance won\'t cover it. The evidence is thin. What do you do?',
      choices: [
        {
          text: 'Prescribe off-label and fight insurance with her',
          outcome: 'good',
          impact: 0,
          result: 'You prescribe it and spend 6 hours navigating a prior auth appeal. Insurance denies twice. On the third appeal — with a letter from you and a patient advocate — it\'s approved. She responds.',
          ripples: {
            scientist: { icon: '🔬', text: 'Off-label use generates real-world evidence that doesn\'t exist in trials. Your case will be cited in the eventual label expansion application. You\'ll never know you contributed to it.' },
            investor: { icon: '📈', text: 'Off-label prescribing patterns are tracked by portfolio scouts. Your patient\'s case might trigger a new trial. You\'ll never know you started it.' },
            policy: { icon: '⚖️', text: 'Off-label prescribing that works creates evidence gaps — real-world data not captured in trials. A systematic registry would transform this into usable science.' },
          }
        },
        {
          text: 'Refer her to a clinical trial 3 hours away',
          outcome: 'partial',
          impact: -10,
          result: 'She qualifies for an early-phase trial. She enrolls. Travel is hard. She completes 4 cycles before withdrawing due to logistics. Her disease progresses.',
          ripples: {
            scientist: { icon: '🔬', text: 'Trial withdrawal due to logistics is a data loss that affects your statistical power and generalizability. Decentralized trial design would have kept her enrolled.' },
            investor: { icon: '📈', text: 'Withdrawals due to non-clinical factors are a commercial signal — if logistics prevent trial completion, they\'ll prevent prescription adherence at launch.' },
            policy: { icon: '⚖️', text: 'Geographic barriers to trial access are a policy failure. Decentralized clinical trials — enabled by telehealth and home monitoring — are the fix. The FDA has authority to mandate it.' },
          }
        },
        {
          text: 'Stick to approved options — follow the guideline',
          outcome: 'bad',
          impact: -20,
          result: 'You follow the guideline. She receives best supportive care. She dies 4 months later. You made the defensible decision. You think about the other path anyway.',
          ripples: {
            scientist: { icon: '🔬', text: 'Guidelines that don\'t reflect emerging evidence leave patients behind. The scientist who ran the case reports you read is now running a Phase II trial. Your patient might have qualified.' },
            investor: { icon: '📈', text: 'Physicians practicing by guideline rather than evidence creates a commercial challenge — good drugs take years to reach patients if they can\'t be prescribed off-label during indication expansion.' },
            policy: { icon: '⚖️', text: 'Treatment guidelines that lag behind evidence cost lives. Expedited guideline update processes — triggered by emerging real-world data — could close this gap.' },
          }
        },
      ]
    },
    {
      id: 'c2',
      stage: 'Prior authorization battle',
      title: 'Insurance denied your patient\'s prescription. How hard do you fight?',
      situation: 'You\'ve prescribed a new biologic for a patient with severe rheumatoid arthritis. The insurer denies coverage — prior auth rejected. Appeals will take 3-6 weeks. You can fight it yourself, refer to a patient advocate, or switch to a covered alternative you believe is inferior.',
      choices: [
        {
          text: 'Fight the appeal yourself',
          outcome: 'partial',
          impact: -8,
          result: 'You spend 4 hours across 3 days on calls, letters, and peer-to-peer reviews. The appeal is approved on day 18. Your patient waits 18 days. Three other patients\' appointments are postponed.',
          ripples: {
            scientist: { icon: '🔬', text: 'Physicians spending 4 hours on appeals for your drug is data. It means your drug is being prescribed correctly — and the system is blocking appropriate access.' },
            investor: { icon: '📈', text: 'High prior auth appeal rates with high success rates mean your drug is clinically appropriate but commercially obstructed. This is the PBM problem in your portfolio company.' },
            policy: { icon: '⚖️', text: 'A physician spending 4 hours on a prior auth appeal is 4 hours not spent with patients. Multiply across 100,000 physicians — 400,000 hours consumed. A calculable policy failure.' },
          }
        },
        {
          text: 'Refer to a patient advocate',
          outcome: 'good',
          impact: 0,
          result: 'The advocate navigates the appeal in 12 days. Your patient gets the drug. You get 4 hours back. But the advocacy organization is underfunded and turning away 3 patients a month.',
          ripples: {
            scientist: { icon: '🔬', text: 'Patient advocacy organizations filling a gap that shouldn\'t exist are generating access data that pharmaceutical companies should be collecting systematically.' },
            investor: { icon: '📈', text: 'Patient advocacy organizations as access intermediaries are a commercial risk — if underfunded and overwhelmed, your drug\'s real-world access is constrained by their capacity.' },
            policy: { icon: '⚖️', text: 'Patients relying on nonprofits to navigate insurance is a market failure. It\'s also a data goldmine — advocacy organizations see the systemic patterns payers are hiding.' },
          }
        },
        {
          text: 'Switch to the covered alternative',
          outcome: 'bad',
          impact: -18,
          result: 'You prescribe the covered drug. After 8 weeks, it\'s not working. You now have documentation for a step therapy exception — but she\'s lost 8 weeks.',
          ripples: {
            scientist: { icon: '🔬', text: 'Step therapy failure documentation supports the "fail first" inadequacy argument. Every case like this strengthens the biomarker-driven prescribing case your scientific team is making.' },
            investor: { icon: '📈', text: 'Step therapy delays mean your drug reaches patients 2-3 months late. For a drug with $500M peak sales, that delay costs $40M in year-one revenue. Not a rounding error.' },
            policy: { icon: '⚖️', text: 'Step therapy policies requiring documented failure on inferior treatments are a clinical and ethical problem. Exception pathways that work in real time are the policy solution.' },
          }
        },
      ]
    },
    {
      id: 'c3',
      stage: 'Step therapy battle',
      title: 'Your patient must fail on two drugs you know won\'t work. What do you do?',
      situation: 'Your patient with severe psoriasis needs a biologic. The insurer requires step therapy — she must fail on methotrexate and phototherapy first. You know from her history that methotrexate causes severe nausea and phototherapy is logistically impossible. What do you do?',
      choices: [
        {
          text: 'Start step therapy — document failure fast',
          outcome: 'partial',
          impact: -10,
          result: 'You start methotrexate. Severe nausea in 2 weeks — documented. Phototherapy waiver filed citing work schedule. Exception approved in 3 weeks. She starts the biologic at week 5.',
          ripples: {
            scientist: { icon: '🔬', text: '5 weeks of step therapy before accessing your drug means real-world time-to-treatment data undercounts your drug\'s actual efficacy window. Outcomes look worse than trial data.' },
            investor: { icon: '📈', text: '5-week step therapy delays across your addressable population means delayed peak penetration. At scale, that\'s a meaningful revenue timing problem.' },
            policy: { icon: '⚖️', text: 'Step therapy exceptions working in 3 weeks is the best-case scenario. They still cost 5 weeks of patient suffering. Real-time electronic exceptions would cost 3 days.' },
          }
        },
        {
          text: 'File a clinical exception immediately',
          outcome: 'good',
          impact: 0,
          result: 'You file citing her documented methotrexate intolerance history. The insurer requests a peer-to-peer review. Approved in 8 days. She starts the biologic at week 2.',
          ripples: {
            scientist: { icon: '🔬', text: 'Exception pathways that work are the difference between your real-world outcomes matching trial data or not. Physicians who know how to file exceptions are your most valuable commercial partners.' },
            investor: { icon: '📈', text: '8-day time-to-treatment via exception versus 5 weeks via step therapy is a 27-day revenue acceleration per patient. Your commercial team needs to train physicians on exception filing.' },
            policy: { icon: '⚖️', text: 'Exception pathways working in 8 days proves it\'s technically possible. Why is 8 days the exception rather than the standard? Electronic PA reform would make this the default.' },
          }
        },
        {
          text: 'Prescribe the biologic and fight coverage retroactively',
          outcome: 'bad',
          impact: -20,
          result: 'You prescribe it. She starts immediately. The insurer denies and bills her $4,200 for the first infusion. The retroactive appeal takes 6 weeks and ultimately fails.',
          ripples: {
            scientist: { icon: '🔬', text: 'Retroactive coverage denials for your drug create a chilling effect on prescribing. Physicians start avoiding it without pre-authorization even when clinically urgent.' },
            investor: { icon: '📈', text: 'Retroactive denials that stick are a commercial catastrophe. That patient will never pay for another infusion. Your drug\'s real-world adherence data now includes a forced discontinuation.' },
            policy: { icon: '⚖️', text: 'Retroactive denials after treatment has begun are among the most harmful insurance practices. Legislation prohibiting retroactive denial for physician-ordered treatment is overdue.' },
          }
        },
      ]
    },
    {
      id: 'c4',
      stage: 'Copay crisis',
      title: 'Your patient can\'t afford her $380/month copay. What do you do?',
      situation: 'Your patient — a 52-year-old teacher — needs a specialty drug with a $380/month copay after her deductible. Her take-home pay is $2,800/month. She can\'t afford it. You can navigate copay assistance, prescribe an inferior covered alternative, or advocate for a formulary exception.',
      choices: [
        {
          text: 'Navigate the pharma copay assistance program',
          outcome: 'partial',
          impact: -8,
          result: 'She qualifies — $0 copay for 12 months. You spend 45 minutes on the phone enrolling her. Next year, the program terms change. She faces the same crisis again.',
          ripples: {
            scientist: { icon: '🔬', text: 'Copay assistance programs are a band-aid on a systemic wound. The scientist\'s drug is effective. The system is making it unaffordable. These are separate problems with separate solutions.' },
            investor: { icon: '📈', text: 'Copay assistance programs cost your portfolio company $40M annually. That\'s $40M not funding R&D. It\'s funding a workaround for broken insurance design.' },
            policy: { icon: '⚖️', text: 'A physician spending 45 minutes navigating a manufacturer copay program is a physician not practicing medicine. This is what the absence of OOP cost caps looks like in clinical practice.' },
          }
        },
        {
          text: 'Prescribe the covered alternative',
          outcome: 'bad',
          impact: -18,
          result: 'She fills it immediately. After 8 weeks, it\'s not controlling her disease well. You\'ve lost 8 weeks and she\'s worse. You document and appeal for the original drug.',
          ripples: {
            scientist: { icon: '🔬', text: 'Patients forced to inferior drugs due to cost creates outcomes data that undervalues your drug\'s efficacy class. The comparative effectiveness research will be confounded by access barriers.' },
            investor: { icon: '📈', text: 'Prescribing inferior alternatives due to cost is a market signal — your Tier 2 competitor extracts value through formulary placement that isn\'t justified by clinical differentiation.' },
            policy: { icon: '⚖️', text: 'A patient receiving an inferior treatment because of cost — when a better treatment exists — is the clearest possible argument for out-of-pocket cost reform. This is not unusual. This is every day.' },
          }
        },
        {
          text: 'Advocate internally for a formulary exception',
          outcome: 'partial',
          impact: -10,
          result: 'Your hospital pharmacy director escalates. The insurer grants a 90-day exception. But it needs renewal every quarter — 4 appeals per year.',
          ripples: {
            scientist: { icon: '🔬', text: 'Quarterly formulary exceptions for your drug are a clinical validation — the evidence is strong enough that every appeal succeeds. But success still costs 4 hours of physician time per patient annually.' },
            investor: { icon: '📈', text: 'High formulary exception rates for your drug are a commercial intelligence signal — your drug is clinically necessary in ways the formulary isn\'t recognizing. Use this in your next PBM negotiation.' },
            policy: { icon: '⚖️', text: 'A physician filing 4 formulary exception appeals per year for the same patient, same drug, that always gets approved — is a system that needs to be automated. This is the definition of administrative waste.' },
          }
        },
      ]
    },
    {
      id: 'c5',
      stage: 'Adherence crisis',
      title: 'Your patient stopped taking her medication after 6 weeks. What do you do now?',
      situation: 'Your patient with heart failure was prescribed a new drug 3 months ago. At follow-up, you discover she stopped taking it after 6 weeks — her copay increased when her deductible reset, the week-2 side effects scared her, and she didn\'t want to "bother" you. Her condition has worsened.',
      choices: [
        {
          text: 'Address cost, side effects, and communication — restart',
          outcome: 'good',
          impact: 0,
          result: 'You spend 40 minutes restructuring her care. New copay assistance. Detailed side effect management plan. Open invitation to call. She restarts. 3 months later she\'s stable.',
          ripples: {
            scientist: { icon: '🔬', text: 'Non-adherence due to side effects in week 2 is a clinical signal. Your drug\'s initiation profile is driving discontinuation before patients reach therapeutic benefit. A label-level intervention is needed.' },
            investor: { icon: '📈', text: '40% of patients discontinuing in 6 weeks is a commercial catastrophe. Real-world adherence data will crater your peak sales projections. Patient support needs to be designed into the launch plan.' },
            policy: { icon: '⚖️', text: 'Patients stopping medication because a copay increased when a deductible reset is insurance design failure — not patient non-compliance. OOP caps would eliminate this specific failure mode.' },
          }
        },
        {
          text: 'Refer to a care coordinator',
          outcome: 'partial',
          impact: -8,
          result: 'Weekly check-ins. Adherence tracking. She restarts with support. But care coordination isn\'t covered for all your patients — you can only do this for a few.',
          ripples: {
            scientist: { icon: '🔬', text: 'Care coordination improving adherence to your drug is real-world evidence. Structured support programs that improve adherence are publishable — and commercially valuable.' },
            investor: { icon: '📈', text: 'Care coordination programs improving adherence have measurable ROI. Your portfolio company should be funding them. Most don\'t because they\'re not thinking about adherence as a financial variable.' },
            policy: { icon: '⚖️', text: 'Care coordination as an adherence intervention works — and it\'s not universally covered. CMS piloting adherence support for high-cost medications would save more money than it costs.' },
          }
        },
        {
          text: 'Document, restart — don\'t address root causes',
          outcome: 'bad',
          impact: -20,
          result: 'You document and restart the prescription. She fills it once. The same problems resurface. She stops again. Her condition deteriorates. She\'s admitted to hospital 4 months later.',
          ripples: {
            scientist: { icon: '🔬', text: 'Repeated non-adherence in your drug\'s real-world data shows up as poor outcomes in comparative effectiveness research. Your drug\'s efficacy will be underestimated because the system failed — not the molecule.' },
            investor: { icon: '📈', text: 'A hospital admission 4 months post-discontinuation costs $32,000. If your drug costs $18,000/year and prevents that admission, the health economics are obvious. GCEA would capture this value.' },
            policy: { icon: '⚖️', text: 'A preventable hospitalization costing $32,000 because a patient couldn\'t afford a $380 copay is a policy failure with a calculable cost. This is the economic case for OOP cost reform.' },
          }
        },
      ]
    },
  ],

  policy: [
    {
      id: 'p1',
      stage: 'Orphan drug designation',
      title: 'A borderline rare disease drug is applying for orphan status. Do you grant it?',
      situation: 'A biotech is applying for orphan drug designation for a condition affecting 195,000 Americans — just under the 200,000 threshold. Their data is solid but the condition may be underdiagnosed, meaning the true population could be larger. Granting gives 7 years of exclusivity and tax credits.',
      choices: [
        {
          text: 'Grant orphan designation',
          outcome: 'partial',
          impact: -5,
          result: 'Designation granted. The drug reaches patients with a rare disease who had no options. 3 years later, better diagnosis data shows 340,000 Americans have the condition. Orphan status is controversial in retrospect.',
          ripples: {
            scientist: { icon: '🔬', text: 'Orphan designation accelerated funding and regulatory priority. Your drug reached patients 2 years faster than the standard pathway. The team is grateful — and aware the designation was borderline.' },
            investor: { icon: '📈', text: 'Orphan designation gave this asset 7 years of exclusivity and meaningful tax credits. The IRR improved from marginal to strong. Three more companies just filed for orphan status in adjacent indications.' },
            clinician: { icon: '🏥', text: 'Your patients with this condition finally have an approved treatment. Access is smooth — orphan drugs rarely face formulary challenges. You\'ve waited years for this.' },
          }
        },
        {
          text: 'Deny — require a larger population study',
          outcome: 'bad',
          impact: -18,
          result: 'Designation denied. The company must conduct a larger epidemiological study to prove the population is under 200,000. 18-month delay. The scientific team nearly abandons the program.',
          ripples: {
            scientist: { icon: '🔬', text: 'Orphan denial means 18 additional months of population studies before reapplication. The team debates whether the program is worth continuing. Two junior researchers leave.' },
            investor: { icon: '📈', text: '18-month delay to orphan designation costs $45M and kills momentum. Two investors in the syndicate exercise their pro-rata rights at a discount.' },
            clinician: { icon: '🏥', text: 'Patients with this condition wait 18 more months for a treatment that was 90% of the way there. You understand the caution. You don\'t know how to explain it to the patient in room 3.' },
          }
        },
        {
          text: 'Grant with enhanced post-market surveillance',
          outcome: 'good',
          impact: 0,
          result: 'Orphan status granted with mandatory patient registry and annual population re-assessment. If diagnosed population exceeds 200K, exclusivity is renegotiated. A creative middle path.',
          ripples: {
            scientist: { icon: '🔬', text: 'Conditional orphan designation with registry requirements is actually useful for your scientific program. The registry data will be the most comprehensive real-world evidence set in this indication.' },
            investor: { icon: '📈', text: 'Conditional orphan designation with renegotiation triggers adds uncertainty to the exclusivity period. Sophisticated investors price this in. Less sophisticated ones miss it. Your next round will separate the two.' },
            clinician: { icon: '🏥', text: 'Patients get access. Registry data gets collected. From where you sit, this is the right outcome. You enroll your patients in the registry without being asked.' },
          }
        },
      ]
    },
    {
      id: 'p2',
      stage: 'IRA small molecule timeline',
      title: 'The IRA gives pills 9 years, biologics 13. Do you fix it?',
      situation: 'The IRA currently gives small molecule drugs 9 years before Medicare price negotiation, versus 13 for biologics. The biotech industry says the 9-year timeline is killing investment in small molecules — pills that are easier to take and cheaper to manufacture. Do you extend to 13, create a hybrid, or hold firm?',
      choices: [
        {
          text: 'Extend small molecules to 13 years — fix the asymmetry',
          outcome: 'good',
          impact: 0,
          result: 'Investment in small molecules rebounds. Critics argue you\'ve extended drug monopolies. A senator introduces a counter-bill. It fails, but the political cost is real.',
          ripples: {
            scientist: { icon: '🔬', text: '13-year timeline restores the incentive to develop pills instead of biologics. The scientific team\'s pipeline skews back toward small molecule programs defunded under the 9-year rule.' },
            investor: { icon: '📈', text: 'Small molecule investment rebounds immediately. Three programs that were shelved are reactivated. Your fund\'s pipeline just got more valuable. The LP update letter writes itself.' },
            clinician: { icon: '🏥', text: 'Small molecule drugs are easier to prescribe, easier to take, cheaper to manufacture. More small molecules means better adherence and more accessible treatment. This policy change will save lives — slowly and invisibly.' },
          }
        },
        {
          text: 'Create a hybrid — 11 years for all drugs',
          outcome: 'partial',
          impact: -8,
          result: 'A compromise that satisfies nobody completely. Industry accepts it. Critics accept it. Two years later, economists argue it was about right.',
          ripples: {
            scientist: { icon: '🔬', text: '11 years is workable for most programs. The programs that lose are complex first-in-class drugs needing 12-13 years to recoup costs — exactly the ones you most need to incentivize.' },
            investor: { icon: '📈', text: '11-year compromise adjusts NPV models by about 8%. Manageable. The programs we were most worried about are the complex first-in-class assets. The compromise doesn\'t fully solve their problem.' },
            clinician: { icon: '🏥', text: '11 years sounds like inside baseball. For your patients, what matters is whether good drugs get developed. This compromise probably doesn\'t change that much in either direction.' },
          }
        },
        {
          text: 'Hold firm at 9 years',
          outcome: 'bad',
          impact: -20,
          result: 'No change. Small molecule investment continues to decline. Pills — the most accessible drug form — become rarer. Patients pay more and adhere less.',
          ripples: {
            scientist: { icon: '🔬', text: '9-year timeline means your pill-based programs are defunded. You pivot to biologics. They\'re harder to make, harder to take, harder to genericize. That\'s what the policy incentivized.' },
            investor: { icon: '📈', text: 'Small molecule programs being shut down across the portfolio. 9-year negotiation timelines don\'t pencil out for most indications. We\'re rewriting our thesis away from pills. That\'s a policy outcome.' },
            clinician: { icon: '🏥', text: 'Fewer small molecules means fewer pills for your patients. Biologics require injections or infusions — harder to administer, harder to adhere to, harder for rural patients to access.' },
          }
        },
      ]
    },
    {
      id: 'p3',
      stage: 'March-in rights',
      title: 'Patient groups are demanding you exercise march-in rights on a $340K drug. Do you?',
      situation: 'A drug developed partly with NIH funding costs $340,000/year. Patient advocacy groups demand the government exercise march-in rights under the Bayh-Dole Act to license it to generic manufacturers. No administration has ever done this. You have to decide.',
      choices: [
        {
          text: 'Exercise march-in rights — historic first',
          outcome: 'partial',
          impact: -10,
          result: 'Historic first. Generic manufacturers license the drug. Price falls 85% in 18 months. But biotech investment sentiment turns negative. Future public-private partnerships become harder to form.',
          ripples: {
            scientist: { icon: '🔬', text: 'March-in rights exercised means NIH funding becomes a liability in investors\' eyes. The next time you apply for an NIH grant, your board will ask if it creates IP risk. The chilling effect is real.' },
            investor: { icon: '📈', text: 'Historic march-in rights change every investment thesis including NIH-funded assets. Three portfolio companies quietly restructure to minimize NIH involvement. The policy lowered one price. It may raise many more.' },
            clinician: { icon: '🏥', text: 'The price dropped 85%. Your patients can now afford it. You don\'t know about the investment chilling effect. You know your patients can fill their prescriptions. From your chair, this was the right call.' },
          }
        },
        {
          text: 'Decline — but mandate a patient assistance program',
          outcome: 'good',
          impact: 0,
          result: 'March-in rights not exercised. You negotiate a mandatory patient assistance program covering all patients below 400% of poverty line. Access improves for low-income patients. High-income patients still pay full price.',
          ripples: {
            scientist: { icon: '🔬', text: 'Mandatory patient assistance programs protect the most vulnerable patients. The scientific team didn\'t design this drug for only wealthy patients. The PAP, imperfect as it is, honors that.' },
            investor: { icon: '📈', text: 'Mandatory PAP reduces addressable market by 25% but avoids the march-in precedent that would have chilled all NIH-partnered investment. Right outcome for the ecosystem even if it hurts this asset.' },
            clinician: { icon: '🏥', text: 'The assistance program covers patients below a certain income threshold — but your patient, a teacher earning $2,800/month, earns just enough to be excluded. She still can\'t afford the drug. Income cutoffs always leave someone in the gap — the real fix is capping out-of-pocket costs for everyone.' },
          }
        },
        {
          text: 'Decline and do nothing',
          outcome: 'bad',
          impact: -20,
          result: 'No action. The drug remains at $340,000. Patient advocacy groups escalate. A bipartisan bill introducing mandatory march-in rights passes 18 months later — with weaker IP protections than any negotiated solution would have created.',
          ripples: {
            scientist: { icon: '🔬', text: 'Inaction led to legislation worse for IP protection than any negotiated solution. The biotech ecosystem would have preferred a deal. Congress gave them a mandate.' },
            investor: { icon: '📈', text: 'Inaction triggered legislation with broader march-in triggers than any regulatory action would have created. The industry chose the worst of all outcomes by refusing to negotiate.' },
            clinician: { icon: '🏥', text: 'The drug is still $340,000. Your patients still can\'t afford it. A bill was passed but not implemented. You\'re still filing PAP applications. Nothing changed for the patients in your clinic.' },
          }
        },
      ]
    },
    {
      id: 'p4',
      stage: 'Price control bill',
      title: 'A price control bill polls at 78% approval. Your analysis says it will reduce R&D by 30%. Do you support it?',
      situation: 'A bill would cap drug prices at 120% of the average price in Germany, France, Japan, Canada, and the UK. It polls at 78% approval. Your analysis shows it would reduce biotech R&D investment by an estimated 30% over 10 years. Do you support, oppose, or offer a substitute?',
      choices: [
        {
          text: 'Support the bill — 78% approval is a mandate',
          outcome: 'bad',
          impact: -18,
          result: 'The bill passes. Drug prices fall. Access improves in the short term. Biotech investment drops 25% over 5 years. 14 drugs that would have been developed aren\'t. You\'ll never know which ones.',
          ripples: {
            scientist: { icon: '🔬', text: 'Three programs in your pipeline just became unfundable. International reference pricing assumes a market size that includes the US premium. Remove it and the math doesn\'t work for high-risk research.' },
            investor: { icon: '📈', text: 'International reference pricing eliminates the US premium justifying biotech investment. We\'re restructuring 4 portfolio companies. The drugs that don\'t get developed don\'t make headlines. They just don\'t exist.' },
            clinician: { icon: '🏥', text: 'Drug prices fell. Your patients can afford medications more easily. You don\'t see the drugs that weren\'t developed. In 10 years, you\'ll wonder why the pipeline looks thinner than it used to.' },
          }
        },
        {
          text: 'Oppose the bill — go on record at 78% approval',
          outcome: 'partial',
          impact: -10,
          result: 'You go on record opposing a bill with 78% approval. The political cost is significant. The bill fails by 3 votes. Patient advocates call your office for a month.',
          ripples: {
            scientist: { icon: '🔬', text: 'The bill failed. Your programs are safe. The scientific team doesn\'t know how close it came. You know. You\'re going to make sure the next policy debate goes differently — with better data, earlier.' },
            investor: { icon: '📈', text: 'The bill failed. The ecosystem is intact. But 78% approval means this isn\'t over. Every portfolio company needs a policy strategy now. This was a warning shot.' },
            clinician: { icon: '🏥', text: 'The bill failed. Your patients are still paying what they were paying. You voted for the person who just opposed it. You\'re going to remember that.' },
          }
        },
        {
          text: 'Offer a substitute — OOP caps instead of price controls',
          outcome: 'good',
          impact: 0,
          result: 'You introduce a substitute capping patient out-of-pocket costs at $35/month for any approved drug. It passes with 82% approval. Drug prices unchanged. Patient access improves dramatically. Innovation incentives preserved.',
          ripples: {
            scientist: { icon: '🔬', text: 'OOP caps don\'t touch your research funding or your drug\'s net price. But every patient who needs your drug can now afford it. The scientific team\'s work reaches the people it was designed for.' },
            investor: { icon: '📈', text: 'OOP caps are the policy outcome we\'d have designed. Drug prices unchanged. Access improved. Innovation incentives preserved. Peak sales projections just got more achievable.' },
            clinician: { icon: '🏥', text: 'Every patient in your clinic can now fill their prescription for $35/month. You\'ve been filing appeals and copay assistance applications for 15 years. You\'re not doing that anymore.' },
          }
        },
      ]
    },
    {
      id: 'p5',
      stage: 'Universal coverage',
      title: '30 million uninsured Americans. Do you push for universal coverage now?',
      situation: 'A proposal on your desk would mandate universal health coverage — every American gets insurance, funded through employer mandates, individual contributions, and government subsidies. It would cover 30M currently uninsured Americans and cost $400B over 10 years. Do you push now, pilot first, or wait?',
      choices: [
        {
          text: 'Push for universal coverage now',
          outcome: 'good',
          impact: 0,
          result: 'The mandate passes narrowly. 30M Americans get coverage. Implementation is chaotic. 3 states sue. Full implementation takes 7 years. By year 8, patient outcomes improve measurably. You won\'t be in office to see it.',
          ripples: {
            scientist: { icon: '🔬', text: '30M newly insured Americans expand the addressable market dramatically. Programs that weren\'t commercially viable at 270M insured suddenly pencil out at 300M. New indications get funded.' },
            investor: { icon: '📈', text: 'Universal coverage expands the addressable market for every drug in the portfolio. The 30M newly insured represent $180B in annual pharmaceutical spending that wasn\'t there before.' },
            clinician: { icon: '🏥', text: 'The patients you\'ve been turning away because they\'re uninsured — you can see them now. You\'ve been practicing with one hand tied behind your back. That just changed.' },
          }
        },
        {
          text: 'Pilot in 3 states first — build the evidence',
          outcome: 'partial',
          impact: -8,
          result: 'California, New York, and Massachusetts launch the pilot. 4 years of compelling data. A national bill is introduced. It\'s still being debated when you leave office. Progress, not victory.',
          ripples: {
            scientist: { icon: '🔬', text: 'State-level coverage expansions increase your addressable market in those states immediately. California alone adds 2.1M newly insured patients. Your commercial team is recalculating regional forecasts.' },
            investor: { icon: '📈', text: 'California, New York, and Massachusetts are 20% of GDP. Even partial coverage expansion moves our numbers — and the 3-state pilot creates a proof of concept that will eventually drive national policy.' },
            clinician: { icon: '🏥', text: 'In California, you can now see 40 patients a month you couldn\'t see before. In Texas, nothing changed. The geographic inequity is now even more visible — and more frustrating.' },
          }
        },
        {
          text: 'Wait for a more favorable political moment',
          outcome: 'bad',
          impact: -20,
          result: 'The moment doesn\'t come for 6 years. In that time, 180,000 Americans die from conditions that were treatable but unaffordable. The political window that opens is narrower than the one you passed on.',
          ripples: {
            scientist: { icon: '🔬', text: '6 years of inaction means 6 years of patients not accessing treatments that exist. Your drug is approved and effective. 10% of patients who need it are uninsured. That\'s not a rounding error.' },
            investor: { icon: '📈', text: '30M uninsured Americans is a market that doesn\'t exist for our portfolio. Waiting for political conditions means waiting for commercial addressability. This decision has a dollar figure attached to it.' },
            clinician: { icon: '🏥', text: 'The statistic: 45,000 Americans die each year from lack of health insurance. Over 6 years, that\'s 270,000 people. You see them in your clinic. You see them leave. You see some not come back.' },
          }
        },
      ]
    },
  ],
}
