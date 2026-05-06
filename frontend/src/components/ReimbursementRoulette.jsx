import { useState, useEffect, useRef } from 'react'

const segments = [
  { label: 'Formulary', color: '#C4956A' },
  { label: 'Prior auth', color: '#B07D62' },
  { label: 'Step therapy', color: '#C4A96A' },
  { label: 'Accumulator', color: '#7D9B7B' },
  { label: 'Pharmacy\ncounter', color: '#A07B8F' },
]

const roleOutcomes = {
  formulary: {
    0: {
      scientist: { title:"Tier 2 secured — but your pipeline pays", text:"Patients can access the drug. But the 45% rebate means your company net revenue is half what your model assumed. The Phase I candidate sitting in your pipeline just got deprioritized. There's no funding for it this year." },
      investor:  { title:"Tier 2 secured — at a steep cost", text:"Formulary placement confirmed. But your net price is $46,750 — not the $72,000 your NPV model was built on. Peak sales projections just dropped 35%. You'll need to revise your deck before the next LP meeting." },
      clinician: { title:"Your patients can access it", text:"Tier 2 means a manageable copay for most of your patients. But you're already thinking about the two patients on high-deductible plans who'll still pay hundreds out of pocket before their deductible resets." },
      policy:    { title:"The rebate system wins again", text:"The drug is accessible — but only because the company surrendered 45% of its list price to a PBM. That rebate doesn't reach patients. It pads PBM margins and insurer profits. The system worked, technically. But it extracted value from innovation to reward middlemen." }
    },
    1: {
      scientist: { title:"Three months lost — and a competitor gained ground", text:"You held out for 35% instead of 45%. But the 3-month standoff let a competitor gain preferred formulary placement. Several KOLs switched their prescribing habits. Winning the negotiation may have cost you the market." },
      investor:  { title:"Better economics — worse timing", text:"35% rebate versus 45% — that's real money recovered. But Q1 revenue came in at zero while you negotiated. Your stock is down 18%. Investors are patient in theory. In practice, they're watching every quarter." },
      clinician: { title:"Three months your patients didn't have", text:"The negotiation resolved and patients can now access the drug. But three of your patients couldn't wait — two switched to an inferior alternative, one deteriorated significantly. The reimbursement system made you wait." },
      policy:    { title:"Opacity produced a compromise nobody chose", text:"A 35% rebate was agreed behind closed doors. Nobody knows the real net price. A system built on transparency would have produced a better outcome faster — for everyone." }
    },
    2: {
      scientist: { title:"Approved but unreachable", text:"Your drug is on formulary — technically accessible. But Tier 3 copays mean patients in your trial had full coverage while patients at the pharmacy counter are walking away. Your real-world outcomes data will look worse than your trial data — not because the drug doesn't work, but because patients can't afford it." },
      investor:  { title:"The access-revenue death spiral", text:"Tier 3 placement means high copays, low adherence, poor real-world outcomes, physicians stop prescribing. IQVIA data shows 35% of patients abandon Tier 3 scripts. Your year-one revenue is already 40% below forecast." },
      clinician: { title:"You prescribed it. They couldn't fill it.", text:"Three patients came back this week — not because the drug isn't working, but because they can't afford the Tier 3 copay. One is rationing her previous medication. One went to the ER last Tuesday. You're spending half your day on the phone with insurance companies." },
      policy:    { title:"Tier 3 is a coverage denial in disguise", text:"Placing a necessary drug on Tier 3 while technically 'covering' it is one of the most cynical moves in the insurance playbook. The insurer saves money. The patient goes without. This is the gap that out-of-pocket cost reform is designed to close." }
    }
  },
  priorauth: {
    0: {
      scientist: { title:"The paperwork tax on your science", text:"Your PA support team is processing cases but the 23-day delay is showing up in outcomes data. Patients who waited longer had worse baseline scores at treatment initiation. Your drug's real-world effectiveness looks weaker than your trial data — not because it is, but because it's reaching patients later in their disease progression." },
      investor:  { title:"PA delays are a revenue forecast problem", text:"23 days per patient before first prescription. Multiply that across your launch cohort and you've lost a month of revenue in your first year you'll never recover. Your PA support team costs $4M annually. Prior auth is a hidden tax on commercial launch that investors systematically underestimate." },
      clinician: { title:"You're a doctor. You became a form filler.", text:"You're spending 2 hours a day reviewing and signing authorization requests. Two hours that used to be patient time. Your nurse practitioner quit last month, partly because of the administrative burden. You got into medicine to help people. Some days it doesn't feel like that." },
      policy:    { title:"A system designed to delay, not to decide", text:"Your PA support team works — which means the friction was never clinical. It was administrative. The insurer didn't need 23 days to make a good decision. They needed 23 days to make a profitable one. Real-time electronic PA would eliminate this entirely. The barrier isn't capability. It's incentive." }
    },
    1: {
      scientist: { title:"Six months of legal battle — one step of progress", text:"40% of your target population can now skip the PA queue. The other 60% still wait 23 days. And the 6-month legal battle delayed your commercial focus at exactly the moment you needed to build physician relationships." },
      investor:  { title:"Legal win. Commercial cost.", text:"You got a better PA process for 40% of patients. But the 6-month legal battle cost $8M in legal fees and management distraction. Your CMO spent more time in depositions than in physician meetings during your launch window." },
      clinician: { title:"A partial win for your patients", text:"Patients who've already tried first-line therapy can now access your drug faster. That's a real win. But newly diagnosed patients still face the full PA gauntlet. You're writing more exception letters than ever." },
      policy:    { title:"Litigation is not a health policy", text:"A drug company had to sue a health insurer to get a clinically appropriate PA process — and the outcome was a partial fix for a subset of patients. Legislation mandating real-time PA would achieve in one year what this lawsuit achieved in six months." }
    },
    2: {
      scientist: { title:"Faster access. Broken economics.", text:"No PA means faster patient access and better real-world outcomes data. But the additional 20% rebate means your company is operating at near break-even on this product. The scientific team is celebrating. The finance team is canceling next year's research conference." },
      investor:  { title:"You solved access by destroying returns", text:"55% combined rebate. You're selling at a loss on 30% of your volume. Your next fund raise is in jeopardy. LPs are asking whether the team has commercial discipline. The answer, right now, is no." },
      clinician: { title:"Your patients get the drug. For now.", text:"No prior auth means prescriptions filled within days. But the company's patient assistance program just got quietly scaled back. Three of your uninsured patients who relied on it just lost access. Solving one access problem created another." },
      policy:    { title:"Prior auth should never be the price of doing business", text:"A company had to surrender 20% of its revenue to remove a clinical friction that should never have existed. Prior auth abuse — using it as a cost-containment lever rather than a clinical check — is a policy failure. The company paid the price. So did its future pipeline." }
    }
  },
  steptherapy: {
    0: {
      scientist: { title:"Your biomarker data is being ignored", text:"You spent 3 years identifying the patient subgroup that responds best to your drug. The step therapy protocol ignores your biomarker data entirely. Patients are cycling through drugs your research showed are ineffective for this population. Your science is being overridden by a cost algorithm." },
      investor:  { title:"Step therapy is a revenue delay machine", text:"The 6-9 months patients spend on step therapy before accessing your drug is 6-9 months of revenue you're not earning. For a drug with $500M peak sales potential, step therapy could cost you $80M in year-one revenue alone. That's a fund-level miss." },
      clinician: { title:"You're prescribing drugs you know won't work", text:"Aetna's protocol requires you to prescribe methotrexate first. You know it won't work for this patient. But you document it anyway, wait for her to fail, and then submit the exception. She suffered side effects for 4 months she didn't need to suffer. This is what 'fail first' means at the bedside." },
      policy:    { title:"Step therapy as written fails patients", text:"Step therapy ignores biomarker data and forces patients to fail on treatments that precision medicine has already ruled out. It's not evidence-based policy. It's a blanket cost-containment tool wearing a clinical mask." }
    },
    1: {
      scientist: { title:"Your biomarker data finally got used", text:"Aetna agreed to exempt patients with your drug's target biomarker — 35% of your population getting direct access. For the first time, a payer has formally recognized your biomarker in a coverage decision. That's precedent worth fighting for." },
      investor:  { title:"Eight months well spent — for 35% of patients", text:"The biomarker exemption covers 35% of your addressable market with direct access. And the precedent — a payer formally recognizing a biomarker in formulary design — could accelerate your next drug's market access negotiations significantly." },
      clinician: { title:"A win for your biomarker-positive patients", text:"Patients identified through biomarker testing can now skip step therapy and access the drug directly. You're already thinking about how to integrate biomarker testing into your standard intake protocol so every eligible patient gets identified early." },
      policy:    { title:"Precision medicine needs precision policy", text:"A payer just agreed to use biomarker data to determine step therapy exemptions. The next step is legislation requiring payers to incorporate validated biomarkers into prior auth and step therapy protocols — not as optional accommodations, but as mandatory practice." }
    },
    2: {
      scientist: { title:"Your research is sitting on a shelf", text:"By the time patients finally access your drug — months into their disease progression — the outcomes data looks worse than it should. Your science worked. The access system undid it. Physicians are losing confidence in your drug's place in the treatment algorithm." },
      investor:  { title:"Aetna's 20M members are a black hole in your model", text:"You ceded Aetna's covered population to step therapy delays. Physicians who see poor outcomes in delayed patients are updating their prescribing habits away from your drug — creating a reputation problem that will outlast the step therapy protocol." },
      clinician: { title:"Your hands are tied for your Aetna patients", text:"For your patients covered by Aetna, you're locked into a protocol you disagree with clinically. You watch them go through treatments you know won't work, document their failures, and finally get them on the right drug — months later, in worse shape." },
      policy:    { title:"Accepting step therapy normalizes a broken system", text:"Step therapy reform — requiring exception processes that are fast, transparent, and evidence-based — would protect patients without eliminating cost management. The tools exist. The political will to mandate them doesn't yet." }
    }
  },
  pbm: {
    0: {
      scientist: { title:"Patient support is masking a systemic failure", text:"Your copay assistance program protects qualifying patients. But it also masks the real problem: PBMs capturing money designed for patients. Your company is paying twice — once in rebates, once in copay assistance — to fix a system that shouldn't be broken. That money could fund the next drug." },
      investor:  { title:"You're subsidizing PBM profits", text:"Your copay assistance program costs 3x budget. Every dollar you spend on assistance because accumulators captured your patient's deductible credit is a dollar that was supposed to reach the patient — and didn't. You're paying for the same outcome twice." },
      clinician: { title:"Your patients are protected — for now", text:"Patients who qualify for the assistance program get the drug affordably. But you've had two patients fall through the cracks — one was just above the income threshold, one didn't know the program existed. For the patients who make it through, the system works. For the others, it's invisible." },
      policy:    { title:"Copay assistance shouldn't be necessary", text:"Drug companies are spending billions on copay assistance programs because the insurance system charges patients more than it should. If out-of-pocket costs were capped at a reasonable level, copay assistance programs would be unnecessary. Instead we have a multi-billion dollar system designed to fix the flaws of another multi-billion dollar system." }
    },
    1: {
      scientist: { title:"Twelve states down, thirty-eight to go", text:"12 state bans on accumulators is meaningful. But federal action is stalled and 38 states remain exposed. Your drug is sold nationally. The patchwork of state laws creates a fragmented access landscape that's nearly impossible to communicate to patients." },
      investor:  { title:"State-by-state is a partial hedge", text:"12 state bans provide some protection for your copay assistance investment in those markets. But your largest patient populations are in states with no accumulator ban. You're running a national drug launch through a state-by-state access patchwork." },
      clinician: { title:"Geography is now a health outcome", text:"Whether your patient's copay assistance counts toward their deductible now depends on which state they live in. Your patients in Massachusetts are protected. Your patients in Texas aren't. Medicine shouldn't work this way." },
      policy:    { title:"State bans are proof of concept — federal action is overdue", text:"Twelve states have demonstrated that banning accumulators is legally sound, administratively feasible, and politically viable. A federal accumulator ban would protect every patient in every state. The 12-state patchwork is not an acceptable substitute." }
    },
    2: {
      scientist: { title:"The patients your drug was designed for can't get it", text:"The patients who relied on copay assistance were often the ones your drug was specifically designed to help — commercially insured patients with high deductibles who fall through the cracks. Your drug works in clinical trials. It's not reaching the real-world population." },
      investor:  { title:"Short-term savings, long-term revenue destruction", text:"Eliminating the copay program reduced operating costs. It also triggered a spike in pharmacy abandonment among commercially insured patients — exactly the segment that drives your revenue. The patients who walked away from the pharmacy counter won't come back." },
      clinician: { title:"You watched them leave the pharmacy empty-handed", text:"Three patients this month were told their copay assistance had ended. Two left without their medication. One told you she'd just manage without it. You know what that means clinically. You called the company's patient support line. It went to voicemail." },
      policy:    { title:"Eliminating assistance reveals the system's true failure", text:"When copay assistance disappears, the real out-of-pocket costs become visible — and they're often catastrophic. The solution isn't better band-aids. It's capping out-of-pocket costs so that commercially insured patients never face this choice." }
    }
  },
  oop: {
    0: {
      scientist: { title:"Your drug worked. The system failed.", text:"In your Phase III trial, this patient would have been a responder. Instead she's putting the prescription back. The science succeeded. Every other part of the system failed. This is what it looks like when the gap between clinical trial and real world is measured in dollars instead of biology." },
      investor:  { title:"Every patient who walks away is lost revenue — and a lost life", text:"This patient represents the systemic leakage in your commercial model. She's insured. She's prescribed. She walked away. At $420 OOP you're looking at very high abandonment. Your real-world market capture is a fraction of your addressable market — not because of clinical failure, but because of insurance design failure." },
      clinician: { title:"You're going to get a call from her next month", text:"She called your office last week to say she couldn't fill the prescription. You told her about the patient assistance program — but she doesn't qualify. She's going to manage without the medication. You're going to see her in six weeks with a flare that didn't have to happen." },
      policy:    { title:"This is not an edge case. This is the system.", text:"This patient paid premiums for years. Her insurer negotiated the drug down to $48,000 net. The PBM kept $12,000 in rebates. And she — the person the entire system supposedly exists to serve — walked away without her medication. This is a failure of insurance design. And it's happening millions of times a year." }
    },
    1: {
      scientist: { title:"Affordable access makes your science matter", text:"If out-of-pocket costs were capped at $35/month, this patient fills her prescription. Your drug reaches the patients it was designed for. Your real-world outcomes match your trial data. And the next generation of investors see that approved drugs actually reach patients — making them more willing to fund the next breakthrough." },
      investor:  { title:"OOP caps would transform your commercial model", text:"A $35/month OOP cap would eliminate pharmacy abandonment almost entirely. Your peak sales projections — currently discounted for real-world access leakage — would become achievable. Extending the IRA's Part D cap to commercial insurance would be the single biggest improvement to biotech commercial models in a generation." },
      clinician: { title:"This is the reform that would change everything", text:"Every day you see patients prescribed the right treatment who can't afford it. A $35/month cap on any approved drug would eliminate that problem overnight — for all of them. Not price controls on manufacturers. Not more copay assistance programs. A simple cap on what patients pay at the counter." },
      policy:    { title:"The most impactful reform available — and the most achievable", text:"Capping out-of-pocket costs at $35/month is administratively straightforward, politically viable, and clinically transformative. It doesn't require price controls. It doesn't threaten innovation incentives. It simply ensures that the insurance system patients pay into actually protects them when they need it. This is the lever. Pull it." }
    },
    2: {
      scientist: { title:"Price controls won't save this patient — and they'll cost the next one", text:"Even at half the list price, this patient's $5,000 deductible means she'd still owe $210 at the counter. Price controls don't fix the out-of-pocket problem. But they do make your next drug in the pipeline uninvestable. You can't cure both problems with the same lever." },
      investor:  { title:"Price controls solve the wrong problem", text:"A 50% price cut doesn't make this drug affordable for this patient — her deductible still applies. But it does make your next investment uninvestable. If the government can cut prices by 50% after approval, the risk-reward calculation for early-stage biotech investing collapses." },
      clinician: { title:"Your patient still can't afford it", text:"Even if the list price were cut in half, your patient's copay would still be $210 — more than 6% of her monthly income. What would fix it is her insurance calculating her copay based on net price, not list price. Or a $35 OOP cap. The answer is insurance design. Not price controls." },
      policy:    { title:"Misdiagnosing the problem leads to the wrong cure", text:"Price controls address list prices. This patient's problem is her out-of-pocket cost — set by her insurance plan, not the manufacturer. Cutting the list price doesn't automatically reduce her copay. It does reduce R&D investment. Which means the drug for the next disease doesn't get developed. Good policy requires accurate diagnosis. This one is wrong." }
    }
  }
}

const rounds = [
  { id:'formulary', label:'Obstacle 1 — Formulary placement', title:'The PBM wants a bigger rebate', desc:"Express Scripts will only place your drug on Tier 2 (preferred, low copay) if you offer a 45% rebate off list price. At 45%, your net price drops to $46,750/year — below your break-even threshold. Accept Tier 2, push back, or accept Tier 3?", choices:[{text:'Accept Tier 2 with 45% rebate',outcome:'partial',impact:-10},{text:'Negotiate hard — push back on rebate',outcome:'partial',impact:-15},{text:'Accept Tier 3 (non-preferred)',outcome:'bad',impact:-30}]},
  { id:'priorauth', label:'Obstacle 2 — Prior authorization', title:'United Healthcare requires prior auth for every patient', desc:"United covers 40M lives. They require a 12-page form, lab results, and 2 prior treatment failures before dispensing. Average approval time: 3 weeks.", choices:[{text:'Build a dedicated PA support team',outcome:'partial',impact:-15},{text:'Challenge legally with AMA support',outcome:'partial',impact:-10},{text:'Offer deep discount to remove PA',outcome:'bad',impact:-20}]},
  { id:'steptherapy', label:'Obstacle 3 — Step therapy', title:'Aetna requires 2 generic drug failures first', desc:"Aetna requires patients to fail on methotrexate and hydroxychloroquine before your drug is covered. Your trials showed these drugs are ineffective for 60% of your target patients.", choices:[{text:'Accept it — build fast-track exceptions',outcome:'partial',impact:-20},{text:'Fight it with patient advocacy groups',outcome:'good',impact:-10},{text:'Accept fully — focus on other plans',outcome:'bad',impact:-25}]},
  { id:'pbm', label:'Obstacle 4 — Accumulator programs', title:'PBMs are capturing your copay assistance', desc:"You launched a $0 copay program for year one. But CVS Caremark and OptumRx have implemented accumulator adjustment programs that prevent your copay assistance from counting toward deductibles.", choices:[{text:'Continue the program — absorb the cost',outcome:'partial',impact:-10},{text:'Lobby for federal accumulator ban',outcome:'partial',impact:-5},{text:'Eliminate copay assistance entirely',outcome:'bad',impact:-20}]},
  { id:'oop', label:'Obstacle 5 — The pharmacy counter', title:'A patient walks away without their drug', desc:"After everything — formulary, prior auth, step therapy — a patient arrives at the pharmacy. Their copay: $420 for a 30-day supply. Monthly income: $3,200. They pause. They put the prescription back.", choices:[{text:'This is the system working as designed',outcome:'bad',impact:-25},{text:'This is why we need OOP cost caps',outcome:'good',impact:-5},{text:'This is why we need price controls',outcome:'partial',impact:-15}]},
]



const roleColors = {
  scientist:  { bg: '#E4EDE4', text: '#1A3D1A', border: '#7D9B7B' },
  investor:   { bg: '#DDE6F0', text: '#0F2B42', border: '#7B8FA1' },
  clinician:  { bg: '#F5EDD9', text: '#3D2E0F', border: '#C4956A' },
  policy:     { bg: '#F2E0D5', text: '#3D150A', border: '#A07B8F' },
}

const roleLabels = { scientist: '🔬 Scientist', investor: '📈 Investor', clinician: '🏥 Clinician', policy: '⚖️ Policy maker' }

function WheelCanvas({ rotation }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const cx = 160, cy = 160, r = 145
    ctx.clearRect(0, 0, 320, 320)
    const n = segments.length
    const slice = (2 * Math.PI) / n
    segments.forEach((s, i) => {
      const start = (rotation * Math.PI / 180) + i * slice - Math.PI / 2
      const end = start + slice
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, r, start, end)
      ctx.closePath()
      ctx.fillStyle = s.color
      ctx.fill()
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 2
      ctx.stroke()
      const mid = start + slice / 2
      const tx = cx + Math.cos(mid) * 100
      const ty = cy + Math.sin(mid) * 100
      ctx.save()
      ctx.translate(tx, ty)
      ctx.rotate(mid + Math.PI / 2)
      ctx.fillStyle = 'rgba(255,255,255,0.95)'
      ctx.font = '500 13px sans-serif'
      ctx.textAlign = 'center'
      const lines = s.label.split('\n')
      lines.forEach((l, li) => ctx.fillText(l, 0, li * 16 - (lines.length - 1) * 8))
      ctx.restore()
    })
  }, [rotation])

  return <canvas ref={canvasRef} width={320} height={320} />
}

export default function ReimbursementRoulette({ userRole }) {
  const [role, setRole] = useState(userRole || null)
  const [screen, setScreen] = useState('intro')
  const [currentRound, setCurrentRound] = useState(0)
  const [access, setAccess] = useState(100)
  const [results, setResults] = useState([])
  const [choiceMade, setChoiceMade] = useState(null)
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [showObstacle, setShowObstacle] = useState(false)
  const [landedOn, setLandedOn] = useState(null)
  const rotRef = useRef(0)
  const animRef = useRef(null)

  const spinWheel = () => {
    if (spinning) return
    setSpinning(true)
    setShowObstacle(false)
    const segAngle = 360 / segments.length
    const targetAngle = 360 - (currentRound * segAngle) - segAngle / 2
    const extraSpins = 5 * 360
    const startRot = rotRef.current
    const endRot = startRot + extraSpins + ((targetAngle - startRot) % 360 + 360) % 360
    const duration = 2800
    let startTime = null
    const easeOut = t => 1 - Math.pow(1 - t, 3)
    const animate = (ts) => {
      if (!startTime) startTime = ts
      const elapsed = ts - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = startRot + (endRot - startRot) * easeOut(progress)
      rotRef.current = current
      setRotation(current)
      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        rotRef.current = endRot % 360
        setSpinning(false)
        setLandedOn(rounds[currentRound].label.split(' — ')[1])
        setTimeout(() => { setLandedOn(null); setShowObstacle(true) }, 1500)
      }
    }
    animRef.current = requestAnimationFrame(animate)
  }

  const makeChoice = (i) => {
    if (choiceMade !== null) return
    const choice = rounds[currentRound].choices[i]
    setAccess(prev => Math.max(0, prev + choice.impact))
    setResults(prev => [...prev, { label: rounds[currentRound].label.split(' — ')[1], outcome: choice.outcome, impact: choice.impact, choiceText: choice.text, outcomeText: getRoleOutcome(rounds[currentRound].id, i)?.text || choice.desc || '' }])
    setChoiceMade(i)
  }

  const getRoleOutcome = (roundId, choiceIndex) => {
    const r = roleOutcomes[roundId]
    if (!r || !r[choiceIndex]) return null
    return r[choiceIndex][role] || null
  }

  const nextRound = () => {
    if (currentRound + 1 >= rounds.length) {
      setScreen('end')
    } else {
      setCurrentRound(prev => prev + 1)
      setChoiceMade(null)
      setShowObstacle(false)
      setLandedOn(null)
    }
  }

  const restart = () => {
    setScreen('intro')
    setCurrentRound(0)
    setAccess(100)
    setResults([])
    setChoiceMade(null)
    setRotation(0)
    rotRef.current = 0
    setShowObstacle(false)
    setLandedOn(null)
    if (userRole) setRole(userRole)
    else setRole(null)
  }

  const accessColor = access > 60 ? 'bg-emerald-500' : access > 30 ? 'bg-yellow-500' : 'bg-red-500'
  const round = rounds[currentRound]
  const rc = role ? roleColors[role] : null

  if (screen === 'intro') return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      <div className="px-8 pt-8 pb-6" style={{ background: '#E4EDE4' }}>
        <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ background: '#C5D9C5', color: '#2E5C2E' }}>Reimbursement roulette</div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: '#1A3D1A' }}>Your drug got FDA approved. Now the real game begins.</h2>
        <p className="text-sm leading-relaxed" style={{ color: '#3D6B3D' }}>Navigate 5 reimbursement obstacles to get your drug to patients.</p>
      </div>
      <div className="bg-white px-8 py-6 text-center">
      <div className="text-3xl mb-4">💊</div>
      {!userRole && (
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {['scientist','investor','clinician','policy'].map(r => (
            <button key={r} onClick={() => setRole(r)}
              style={role === r ? { borderColor: roleColors[r].border, background: roleColors[r].bg, color: roleColors[r].text, borderWidth: '2px' } : {}}
              className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all ${role === r ? '' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}>
              {roleLabels[r]}
            </button>
          ))}
        </div>
      )}
      {userRole && (
        <p className="text-sm text-gray-500 mb-6">Playing as <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: roleColors[userRole].bg, color: roleColors[userRole].text }}>{roleLabels[userRole]}</span></p>
      )}
      <button onClick={() => role && setScreen('game')}
        className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all ${role ? 'bg-gray-900 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
        Start game →
      </button>
      </div>
    </div>
  )

  if (screen === 'game') return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Round {currentRound + 1} of {rounds.length}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Patient access</span>
          <div className="w-28 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-700 ${accessColor}`} style={{ width: `${access}%` }}></div>
          </div>
          <span className="text-sm font-semibold text-gray-700">{access}%</span>
        </div>
      </div>

      {!showObstacle && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col items-center gap-5 flex-shrink-0">
              <div className="relative">
                <WheelCanvas rotation={rotation} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-base">💊</div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0" style={{ borderLeft:'10px solid transparent', borderRight:'10px solid transparent', borderTop:'22px solid #E24B4A' }}></div>
              </div>
              <button onClick={spinWheel} disabled={spinning}
                className={`px-10 py-3 rounded-full text-sm font-semibold transition-all ${spinning ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-700'}`}>
                {spinning ? 'Spinning...' : 'Spin the wheel'}
              </button>
              {landedOn && (
                <div className="text-center animate-pulse">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Landed on</p>
                  <p className="text-base font-semibold text-gray-900">{landedOn}</p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">The 5 obstacles</p>
              {[
                { color: '#C4956A', label: 'Formulary placement', desc: 'Will the PBM put your drug on the preferred list — and at what cost to your margins?' },
                { color: '#B07D62', label: 'Prior authorization', desc: 'Insurers require doctors to get approval before prescribing. How burdensome is the process?' },
                { color: '#C4A96A', label: 'Step therapy', desc: 'Patients must fail on cheaper drugs first before they can access yours.' },
                { color: '#7D9B7B', label: 'Accumulator programs', desc: 'PBMs pocket your copay assistance instead of passing savings to patients.' },
                { color: '#A07B8F', label: 'Pharmacy counter', desc: 'After all that — can the patient actually afford their out-of-pocket cost?' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ background: item.color }}></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showObstacle && (
        <div className="flex flex-col gap-3">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{round.label}</p>
            <h3 className="text-base font-semibold text-gray-900 mb-3">{round.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{round.desc}</p>
            <div className="flex flex-col gap-2">
              {round.choices.map((c, i) => (
                <button key={i} onClick={() => makeChoice(i)} disabled={choiceMade !== null}
                  className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                    choiceMade === null ? 'border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50 cursor-pointer'
                    : choiceMade === i
                      ? c.outcome === 'bad' ? 'border-red-400 bg-red-50 text-red-800' : 'border-emerald-400 bg-emerald-50 text-emerald-800'
                      : 'border-gray-100 text-gray-300 cursor-default'
                  }`}>
                  {c.text}
                </button>
              ))}
            </div>
          </div>

          {choiceMade !== null && (() => {
            const roleOut = getRoleOutcome(round.id, choiceMade)
            return (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              {roleOut ? (
                <>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-full" style={{ background: rc?.bg, color: rc?.text }}>{roleLabels[role]}</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900 mb-2">{roleOut.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{roleOut.text}</p>
                </>
              ) : (
                <>
                  <p className="text-base font-semibold text-gray-900 mb-2">{round.choices[choiceMade].title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{round.choices[choiceMade].desc}</p>
                </>
              )}
              <button onClick={nextRound} className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-700 transition-all">
                {currentRound + 1 >= rounds.length ? 'See results →' : 'Next obstacle →'}
              </button>
            </div>
            )
          })()}
        </div>
      )}
    </div>
  )

  if (screen === 'end') return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">{access > 70 ? '✅' : access > 40 ? '⚠️' : '❌'}</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Game over</h2>
        <p className="text-sm text-gray-500">Your drug reached <strong className="text-gray-900">{access}%</strong> of eligible patients.</p>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        {results.map((r, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{r.label}</p>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.outcome === 'good' ? 'bg-emerald-100 text-emerald-800' : r.outcome === 'bad' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {r.impact}% access
              </span>
            </div>
            <p className="text-sm font-medium text-gray-800 mb-2">You chose: {r.choiceText}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{r.outcomeText}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        {access > 70 ? "Strong result. Your drug reached most eligible patients — but you gave up significant margin to get there. The question is whether investors will fund the next drug."
        : access > 40 ? "A mixed outcome. Your drug is reaching some patients, but many who need it can't access it — not because the drug doesn't work, but because the reimbursement system got in the way."
        : "The system failed patients. Your drug works. It's approved. And most eligible patients can't get it. Not because of the science. Not because of the price. Because of how insurance is designed."}
      </p>
      <button onClick={restart} className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-all">
        Play again
      </button>
    </div>
  )

  return null
}
