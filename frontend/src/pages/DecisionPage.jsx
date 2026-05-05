import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const decisions = {
  1: {
    act: 'Stage 1 — The Problem',
    title: 'Your first major decision',
    situation: 'You have a promising compound that shows early efficacy signals. Your team has been working on it for 3 years. Now you have to decide which patient population to pursue — this will define your entire development strategy.',
    context: [
      { label: 'Years in development', value: '3 years' },
      { label: 'Preclinical success rate', value: '78%' },
      { label: 'Estimated patients', value: '2M (rare) / 40M (common)' },
    ],
    question: 'Which disease area do you pursue?',
    options: [
      {
        id: 'rare',
        title: 'Rare disease',
        subtitle: 'Orphan drug designation',
        desc: 'Smaller patient population but faster FDA approval pathway, 7 years market exclusivity, and tax credits. Higher price per patient justified by unmet need.',
        tag: 'Faster path',
        tagColor: 'bg-green-100 text-green-800',
        riskLevel: 'Lower regulatory risk',
      },
      {
        id: 'common',
        title: 'Common disease',
        subtitle: 'Broader market opportunity',
        desc: 'Massive patient population but longer, more expensive trials required. More competition. But if successful, the commercial opportunity is enormous.',
        tag: 'Higher reward',
        tagColor: 'bg-purple-100 text-purple-800',
        riskLevel: 'Higher regulatory risk',
      },
    ],
    consequences: {
      rare: {
        investor: { outcome: 'Strong move', text: 'Orphan designation secured. FDA grants priority review. Your smaller but targeted market commands a $280K/year price point. Investors are pleased — the risk/return profile is excellent for a Series B raise.', metrics: [{ label: 'Time to approval', value: '6 years' }, { label: 'Price point', value: '$280K/year' }, { label: 'Investor confidence', value: 'High' }] },
        scientist: { outcome: 'Scientifically sound', text: 'The biology is cleaner in the rare disease population — fewer confounding factors. Your Phase II data will be more interpretable and the FDA will appreciate the focused indication.', metrics: [{ label: 'Trial complexity', value: 'Low' }, { label: 'FDA clarity', value: 'High' }, { label: 'Scientific focus', value: 'Strong' }] },
        clinician: { outcome: 'Patients will benefit', text: 'Your patients have had no options for years. Even at $280K, most will be covered by insurance. The unmet need is so high that formulary access comes quickly.', metrics: [{ label: 'Patient access', value: 'Good' }, { label: 'Unmet need', value: 'Very high' }, { label: 'Coverage speed', value: 'Fast' }] },
        policy: { outcome: 'Policy aligned', text: 'Orphan drug incentives were designed exactly for this. The system works here — innovation is rewarded and patients with no alternatives get access. A policy success story.', metrics: [{ label: 'Policy alignment', value: 'Strong' }, { label: 'Public perception', value: 'Positive' }, { label: 'Access equity', value: 'Moderate' }] },
      },
      common: {
        investor: { outcome: 'Bold bet', text: 'The market opportunity is massive — $4B peak sales if successful. But Phase III will cost $400M and take 4 more years. You\'ll need to raise a large Series C. High risk, very high reward.', metrics: [{ label: 'Time to approval', value: '9 years' }, { label: 'Peak sales potential', value: '$4B' }, { label: 'Capital needed', value: '$400M+' }] },
        scientist: { outcome: 'Complex challenge', text: 'The heterogeneous patient population makes your trial design harder. You\'ll need 2,000+ patients and multiple sites. The science is interesting but the complexity is real.', metrics: [{ label: 'Trial complexity', value: 'High' }, { label: 'Patients needed', value: '2,000+' }, { label: 'Timeline', value: '9 years' }] },
        clinician: { outcome: 'Long wait for patients', text: 'Millions of patients could benefit — but they\'ll wait 4 more years for approval. And pricing pressure in the common disease space means payers will fight coverage. Access won\'t be automatic.', metrics: [{ label: 'Patients who could benefit', value: '40M' }, { label: 'Wait time', value: '4+ more years' }, { label: 'Coverage battles', value: 'Likely' }] },
        policy: { outcome: 'Policy tension ahead', text: 'A common disease drug at high prices will attract congressional attention. You\'ll need a robust patient assistance program and a strong value story. Pricing will be scrutinised heavily.', metrics: [{ label: 'Political risk', value: 'High' }, { label: 'Price scrutiny', value: 'Very high' }, { label: 'Policy complexity', value: 'Complex' }] },
      },
    },
  },
  2: {
    act: 'Stage 2 — The Trial',
    title: 'Your Phase II results are in',
    situation: 'You\'ve spent $180M and 4 years. Phase II showed a 67% efficacy signal — promising but not definitive. The FDA may push back. Your investors are watching. Your patients are waiting. What do you do?',
    context: [
      { label: 'Spent so far', value: '$180M' },
      { label: 'Efficacy signal', value: '67%' },
      { label: 'Cash runway', value: '$420M left' },
    ],
    question: 'What do you do next?',
    options: [
      {
        id: 'phase3',
        title: 'Run a larger Phase III trial',
        subtitle: 'The cautious path',
        desc: 'Spend $200M more. Takes 2 more years. Gives you definitive data that makes FDA approval almost certain. But burns significant runway.',
        tag: 'Lower regulatory risk',
        tagColor: 'bg-green-100 text-green-800',
        riskLevel: 'Higher cost',
      },
      {
        id: 'fda',
        title: 'File for FDA approval now',
        subtitle: 'The aggressive path',
        desc: 'Go with your Phase II data. Saves $200M and 2 years — but the FDA may issue a Complete Response Letter, sending you back to square one.',
        tag: 'Faster but riskier',
        tagColor: 'bg-yellow-100 text-yellow-800',
        riskLevel: 'High regulatory risk',
      },
      {
        id: 'partner',
        title: 'Partner with big pharma',
        subtitle: 'The exit path',
        desc: 'Sell or license the asset to a larger company. Get $300M upfront — but give up control and future upside if the drug succeeds.',
        tag: 'De-risk now',
        tagColor: 'bg-purple-100 text-purple-800',
        riskLevel: 'Low financial risk',
      },
    ],
    consequences: {
      phase3: {
        investor: { outcome: 'Right call', text: 'Phase III enrolled 1,200 patients. Efficacy came in at 84%. FDA grants Priority Review. Approval granted 6 months later. The extra $200M was worth it — your valuation tripled.', metrics: [{ label: 'Total spent', value: '$380M' }, { label: 'Final efficacy', value: '84%' }, { label: 'Outcome', value: 'FDA approved ✓' }] },
        scientist: { outcome: 'Scientifically vindicated', text: 'The larger trial confirmed your hypothesis with statistical power. The mechanistic data from Phase III also opens up a second indication — a bonus you didn\'t expect.', metrics: [{ label: 'Statistical power', value: '94%' }, { label: 'p-value', value: '<0.001' }, { label: 'New indication', value: 'Identified' }] },
        clinician: { outcome: 'Worth the wait', text: 'Two more years was hard for waiting patients. But the stronger efficacy data means payers covered it immediately — no prior auth battles. Patients got access faster than with a weaker approval.', metrics: [{ label: 'Extra wait', value: '2 years' }, { label: 'Payer coverage', value: 'Immediate' }, { label: 'Patient access', value: 'Strong' }] },
        policy: { outcome: 'System worked', text: 'The rigorous Phase III produced the kind of evidence that justifies the price and gives the FDA confidence. This is the system working as intended.', metrics: [{ label: 'Evidence quality', value: 'Gold standard' }, { label: 'FDA confidence', value: 'High' }, { label: 'Policy outcome', value: 'Positive' }] },
      },
      fda: {
        investor: { outcome: 'Costly mistake', text: 'FDA issued a Complete Response Letter requesting more data. Stock dropped 40%. You\'re now running the Phase III trial anyway — but 18 months behind and with damaged investor confidence.', metrics: [{ label: 'Stock impact', value: '-40%' }, { label: 'Delay', value: '18 months' }, { label: 'Investor confidence', value: 'Damaged' }] },
        scientist: { outcome: 'Lessons learned', text: 'The FDA\'s feedback was actually scientifically valuable — they identified a biomarker that could have predicted responders. Your revised protocol is stronger for it.', metrics: [{ label: 'FDA feedback', value: 'Constructive' }, { label: 'Protocol improvement', value: 'Significant' }, { label: 'Timeline', value: '+18 months' }] },
        clinician: { outcome: 'Patients still waiting', text: 'The CRL was devastating for patients who were counting on this drug. Some enrolled in the new trial. Some found alternatives. Some couldn\'t wait.', metrics: [{ label: 'Patient impact', value: 'Significant delay' }, { label: 'Trial enrollment', value: 'Challenging' }, { label: 'Access', value: 'Delayed 18+ months' }] },
        policy: { outcome: 'FDA did its job', text: 'The CRL is the system working — the FDA correctly identified that 67% efficacy with this sample size wasn\'t enough to establish a clear benefit-risk profile. The standard exists for good reason.', metrics: [{ label: 'FDA decision', value: 'Correct' }, { label: 'Evidence standard', value: 'Upheld' }, { label: 'Policy lesson', value: 'Standards matter' }] },
      },
      partner: {
        investor: { outcome: 'Safe but limited', text: 'Pfizer paid $300M upfront plus milestones. You returned 2x to early investors. But Pfizer took it through Phase III and it became a $2B drug. You left significant value on the table.', metrics: [{ label: 'Upfront payment', value: '$300M' }, { label: 'Return to investors', value: '2x' }, { label: 'Missed upside', value: '$2B drug' }] },
        scientist: { outcome: 'Science continued', text: 'Pfizer\'s team had more resources and cross-functional expertise. They identified a companion diagnostic that dramatically improved patient selection. The science benefited from the partnership.', metrics: [{ label: 'Resources gained', value: 'Significant' }, { label: 'Scientific progress', value: 'Accelerated' }, { label: 'Companion Dx', value: 'Developed' }] },
        clinician: { outcome: 'Faster to patients', text: 'Pfizer\'s commercial infrastructure got the drug to patients 18 months faster than your team could have. Global access programmes in 40 countries. More patients benefited than you could have managed alone.', metrics: [{ label: 'Time to patients', value: '18 months faster' }, { label: 'Global access', value: '40 countries' }, { label: 'Patient reach', value: 'Maximised' }] },
        policy: { outcome: 'Market worked', text: 'The acquisition/licensing model is exactly how the ecosystem is designed to work — small biotechs discover, large pharmas scale. The $300M flows back to fund the next generation of biotech startups.', metrics: [{ label: 'Ecosystem function', value: 'As designed' }, { label: 'Capital recycled', value: '$300M' }, { label: 'Innovation cycle', value: 'Continues' }] },
      },
    },
  },
  3: {
    act: 'Stage 3 — The Trade-Off',
    title: 'FDA approved. Now the hardest decision.',
    situation: 'Your drug is approved. Development cost $380M over 10 years. You have 12 years of patent protection left. Your board wants a return. Patient advocates want access. You have to set the price.',
    context: [
      { label: 'Development cost', value: '$380M' },
      { label: 'Patent life remaining', value: '12 years' },
      { label: 'Eligible patients (US)', value: '~45,000/year' },
    ],
    question: 'What do you price your drug at?',
    options: [
      {
        id: 'high',
        title: '$300,000 per year',
        subtitle: 'Fund your pipeline',
        desc: 'Maximises revenue to fund your next 3 drugs in development. Comparable to other drugs in this class. Insurance will cover for most patients but out-of-pocket costs will be a barrier for some.',
        tag: 'Industry standard',
        tagColor: 'bg-blue-100 text-blue-800',
        riskLevel: 'Political risk',
      },
      {
        id: 'mid',
        title: '$150,000 per year',
        subtitle: 'Balance access and returns',
        desc: 'Covers development costs and funds one additional pipeline drug. Broader insurance coverage, fewer access barriers. But slower pipeline growth.',
        tag: 'Balanced',
        tagColor: 'bg-green-100 text-green-800',
        riskLevel: 'Moderate returns',
      },
      {
        id: 'low',
        title: '$80,000 per year',
        subtitle: 'Maximise patient access',
        desc: 'Near-universal insurance coverage and minimal out-of-pocket costs. But doesn\'t fully recoup development costs. Investors will demand justification. Future pipeline at risk.',
        tag: 'Access first',
        tagColor: 'bg-yellow-100 text-yellow-800',
        riskLevel: 'Pipeline risk',
      },
    ],
    consequences: {
      high: {
        investor: { outcome: 'Strong returns', text: 'Revenue projections hit $1.2B at peak. Funded 2 new drugs into Phase I. But a congressional hearing was called about your pricing. Patient assistance program covers 30% of patients who can\'t afford it.', metrics: [{ label: 'Peak revenue', value: '$1.2B/year' }, { label: 'New drugs funded', value: '2' }, { label: 'Political scrutiny', value: 'High' }] },
        scientist: { outcome: 'Pipeline funded', text: 'The revenue funded two new programs — one in a related indication that your team is excited about. Science moves forward, but the pricing debate is a distraction from the work.', metrics: [{ label: 'New programs', value: '2 funded' }, { label: 'Scientific progress', value: 'Strong' }, { label: 'Team morale', value: 'Mixed' }] },
        clinician: { outcome: 'Access barriers real', text: 'Of your 45,000 eligible patients, 12,000 can\'t get coverage approved or face high cost-sharing. You see the difference every day — some patients thrive, others can\'t access the drug at all.', metrics: [{ label: 'Patients with access', value: '33,000' }, { label: 'Access barriers', value: '12,000 patients' }, { label: 'Equity concern', value: 'Significant' }] },
        policy: { outcome: 'Social contract tested', text: 'The price is defensible under the Mortgage Model — it\'s within the patent period and funds future innovation. But the 12,000 patients without access represent a failure of the insurance system, not the pricing.', metrics: [{ label: 'Mortgage model', value: 'Compliant' }, { label: 'Insurance failure', value: 'Evident' }, { label: 'Policy fix needed', value: 'Insurance reform' }] },
      },
      mid: {
        investor: { outcome: 'Acceptable returns', text: 'Peak revenue of $680M. Funded one new drug. Investors accepted the rationale — broader access reduces political risk and could enable a label expansion. A reasonable long-term bet.', metrics: [{ label: 'Peak revenue', value: '$680M/year' }, { label: 'New drugs funded', value: '1' }, { label: 'Political risk', value: 'Low' }] },
        scientist: { outcome: 'Sustainable path', text: 'One new program funded. It\'s not ideal — you had to deprioritise a promising candidate. But the team understands the tradeoff and the broader access data is generating interesting real-world evidence.', metrics: [{ label: 'Programs funded', value: '1' }, { label: 'Real-world data', value: 'Strong' }, { label: 'Pipeline impact', value: 'Moderate' }] },
        clinician: { outcome: 'Much better access', text: 'Only 3,000 patients face significant access barriers. The lower price point meant most insurance plans covered it on the preferred tier. Your patients are mostly getting it.', metrics: [{ label: 'Patients with access', value: '42,000' }, { label: 'Access barriers', value: '3,000 patients' }, { label: 'Coverage tier', value: 'Preferred' }] },
        policy: { outcome: 'Good balance', text: 'This pricing sits comfortably within the Biotech Social Contract — it funds innovation while keeping access broad. A model that other companies could follow. Policymakers should take note.', metrics: [{ label: 'Social contract', value: 'Honored' }, { label: 'Access', value: 'Broad' }, { label: 'Policy model', value: 'Replicable' }] },
      },
      low: {
        investor: { outcome: 'Investor revolt', text: 'Peak revenue of $360M doesn\'t cover full development costs when time-adjusted. Two board members resigned. Your Series D raise failed. The next drug in your pipeline is now unfunded.', metrics: [{ label: 'Peak revenue', value: '$360M/year' }, { label: 'Development ROI', value: 'Negative' }, { label: 'Pipeline status', value: 'At risk' }] },
        scientist: { outcome: 'Pipeline at risk', text: 'The next program — a potentially transformative treatment for a related disease — had to be shelved due to lack of funding. The science was promising. The economics didn\'t work.', metrics: [{ label: 'Next program', value: 'Shelved' }, { label: 'Funding gap', value: '$200M' }, { label: 'Scientific loss', value: 'Significant' }] },
        clinician: { outcome: 'Universal access now', text: 'Near-universal access. Every patient who needs it can get it. The human impact is real and immediate. But you worry about what happens when the next disease needs a drug and no one funds it.', metrics: [{ label: 'Patient access', value: 'Near-universal' }, { label: 'Access barriers', value: 'Minimal' }, { label: 'Future concern', value: 'Pipeline risk' }] },
        policy: { outcome: 'Short-term win, long-term risk', text: 'Maximum access today — but the failed fundraise signals to the market that this disease area isn\'t investable. Future patients with this disease may have no drug at all. Policy needs to solve this systemically, not drug by drug.', metrics: [{ label: 'Current access', value: 'Excellent' }, { label: 'Future innovation', value: 'At risk' }, { label: 'Systemic fix needed', value: 'Yes' }] },
      },
    },
  },
}

export default function DecisionPage({ userRole }) {
  const { decisionId } = useParams()
  const navigate = useNavigate()
  const decision = decisions[decisionId]
  const [selected, setSelected] = useState(null)
  const [showConsequence, setShowConsequence] = useState(false)

  if (!decision) return <div className="p-8 text-gray-500">Decision not found</div>

  const role = userRole || 'investor'
  const consequence = selected ? decision.consequences[selected]?.[role] : null

  const roleLabel = { investor: 'The Investor', scientist: 'The Scientist', clinician: 'The Clinician', policy: 'The Policy Maker' }
  const rolePill = { investor: 'bg-purple-100 text-purple-800', scientist: 'bg-green-100 text-green-800', clinician: 'bg-blue-100 text-blue-800', policy: 'bg-yellow-100 text-yellow-800' }

  const nextChapter = { 1: '/chapter/3/topic/0', 2: '/chapter/6/topic/0', 3: '/chapter/9/topic/0' }

  if (showConsequence && consequence) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
            </div>
            <span className="text-sm font-semibold text-gray-800">Biotech Unveiled</span>
          </div>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${rolePill[role]}`}>{roleLabel[role]}</span>
        </div>

        <div className="flex-1 max-w-2xl mx-auto px-8 py-10 w-full">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">{decision.act} · Consequence</div>

          <div className={`inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-sm font-semibold ${consequence.outcome === 'Right call' || consequence.outcome === 'Strong returns' || consequence.outcome === 'Patients will benefit' || consequence.outcome === 'Scientifically sound' || consequence.outcome === 'Worth the wait' || consequence.outcome === 'Universal access now' || consequence.outcome === 'System worked' || consequence.outcome === 'Good balance' || consequence.outcome === 'Faster to patients' ? 'bg-green-100 text-green-800' : consequence.outcome === 'Costly mistake' || consequence.outcome === 'Investor revolt' || consequence.outcome === 'Patients still waiting' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
            {consequence.outcome}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5">
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 font-medium">As {roleLabel[role]}, here's what happened:</div>
            <p className="text-base text-gray-700 leading-relaxed">{consequence.text}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {consequence.metrics.map((m, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <div className="text-lg font-semibold text-gray-900 mb-1">{m.value}</div>
                <div className="text-xs text-gray-500">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mb-6">
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 font-medium">What this teaches us</div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every decision in drug development involves tradeoffs. There is rarely a clearly "right" answer — only different consequences depending on your priorities, your role, and the system you're operating in. This is why understanding the full system matters.
            </p>
          </div>

          <button
            onClick={() => navigate(nextChapter[decisionId])}
            className="w-full py-4 bg-gray-900 text-white text-base font-semibold rounded-xl hover:bg-gray-700 transition-all"
          >
            Continue to {decisionId === '3' ? 'journey complete' : `Stage ${parseInt(decisionId) + 1}`} →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
          </div>
          <span className="text-sm font-semibold text-gray-800">Biotech Unveiled</span>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${rolePill[role]}`}>{roleLabel[role]}</span>
      </div>

      <div className="flex-1 max-w-2xl mx-auto px-8 py-10 w-full">
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">{decision.act}</div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{decision.title}</h1>

        <div className="bg-gray-900 rounded-2xl p-5 mb-6">
          <p className="text-base text-white/80 leading-relaxed mb-4">{decision.situation}</p>
          <div className="grid grid-cols-3 gap-4">
            {decision.context.map((c, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                <div className="text-base font-semibold text-white mb-1">{c.value}</div>
                <div className="text-xs text-white/50">{c.label}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-base font-semibold text-gray-900 mb-4">{decision.question}</h2>

        <div className="flex flex-col gap-3 mb-6">
          {decision.options.map(opt => (
            <div
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`border-2 rounded-2xl p-5 cursor-pointer transition-all ${selected === opt.id ? 'border-gray-900 bg-gray-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-base font-semibold text-gray-900">{opt.title}</div>
                  <div className="text-sm text-gray-500">{opt.subtitle}</div>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${opt.tagColor}`}>{opt.tag}</span>
                  <span className="text-xs text-gray-400">{opt.riskLevel}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{opt.desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => selected && setShowConsequence(true)}
          className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${selected ? 'bg-gray-900 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
        >
          See what happens →
        </button>
      </div>
    </div>
  )
}