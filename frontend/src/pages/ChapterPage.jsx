import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import chapter0 from '../data/chapter0Data.js'
import chapter1 from '../data/chapter1Data.js'
import chapter2 from '../data/chapter2Data.js'
import chapter3 from '../data/chapter3Data.js'
import chapter4 from '../data/chapter4Data.js'
import chapter5 from '../data/chapter5Data.js'
import chapter6 from '../data/chapter6Data.js'
import chapter7 from '../data/chapter7Data.js'
import chapter8 from '../data/chapter8Data.js'
import chapter9 from '../data/chapter9Data.js'
import AiTutor from '../components/AiTutor.jsx'
import ReimbursementRoulette from '../components/ReimbursementRoulette.jsx'
import Stakeholder from '../components/Stakeholder.jsx'
import Certificate from '../components/Certificate.jsx'

const chapters = { 0: chapter0, 1: chapter1, 2: chapter2, 3: chapter3, 4: chapter4, 5: chapter5, 6: chapter6, 7: chapter7, 8: chapter8, 9: chapter9 }

// ── Lens data ─────────────────────────────────────────────────────────────────

const stageLens = {
  0: {
    label: "Stage 1 — The Problem",
    subtitle: "Chapters 0–2: Understanding why the system exists",
    scientist:   { icon: "🧪", heading: "Your Mission as a Scientist",    body: "Science creates possibilities — but a discovery only matters if it survives the long road from lab to patient. As you move through Stage 1, think about what it takes for biology to become a therapy that actually reaches people. The system you're about to study is the infrastructure your work depends on." },
    investor:    { icon: "💰", heading: "Your Mission as an Investor",    body: "Every drug starts as a bet. Stage 1 will show you what society gets when those bets pay off — and what's at stake when the incentive to make them breaks down. Think about the relationship between risk, reward, and innovation." },
    clinician:   { icon: "🏥", heading: "Your Mission as a Clinician",   body: "Your patients live inside this system every day. Stage 1 will show you how the drugs you prescribe came to exist — and why some that should exist don't. Think about how the system behind the prescription shapes what you can offer." },
    policy: { icon: "⚖️", heading: "Your Mission as a Policy Maker", body: "Every policy decision about drug pricing and access ripples through the whole system. Stage 1 will show you what the system produces when it works — and what's lost when it doesn't. Think about how to design rules that protect both patients and innovation." },
  },
  3: {
    label: "Stage 2 — The Trial",
    subtitle: "Chapters 3–5: Following the money and the molecule",
    scientist:   { icon: "🧪", heading: "Your Mission as a Scientist",    body: "Good science is necessary — but not sufficient. Stage 2 will show you how investment decisions get made, why some great science never gets funded, and how the journey from molecule to generic can get derailed. Think about what makes your work investable." },
    investor:    { icon: "💰", heading: "Your Mission as an Investor",    body: "Stage 2 is your home territory. You'll see how VCs evaluate opportunities, how pricing really works, and what happens when the supply chain distorts the social contract. Think about where the system produces good outcomes — and where incentives go wrong." },
    clinician:   { icon: "🏥", heading: "Your Mission as a Clinician",   body: "Stage 2 will show you why the drugs on your formulary cost what they do, why some better options never reach the market, and how PBMs shape what you can prescribe. Think about the distance between clinical evidence and patient access." },
    policy: { icon: "⚖️", heading: "Your Mission as a Policy Maker", body: "Stage 2 will show you the full lifecycle of a drug's commercial journey — from venture funding to list price to generic. Think about where regulation could improve outcomes without destroying the incentives that make innovation possible." },
  },
  6: {
    label: "Stage 3 — The Trade-Off",
    subtitle: "Chapters 6–8: Insurance, access, and the future of innovation",
    scientist:   { icon: "🧪", heading: "Your Mission as a Scientist",    body: "Stage 3 is about what happens after the science succeeds. Insurance, access, and policy determine whether your work actually helps people. Think about how you can advocate for a system that gets your discoveries to the patients who need them." },
    investor:    { icon: "💰", heading: "Your Mission as an Investor",    body: "Stage 3 is about systemic risk — the policy and insurance failures that threaten returns and make innovation harder to fund. Think about what a well-functioning insurance system looks like and what policy changes would protect the incentive to invest." },
    clinician:   { icon: "🏥", heading: "Your Mission as a Clinician",   body: "Stage 3 is where clinical reality meets policy failure. You'll see why patients who should be covered aren't, and what it would take to fix it. Think about how insurance reform — not just price controls — is the path to better patient outcomes." },
    policy: { icon: "⚖️", heading: "Your Mission as a Policy Maker", body: "Stage 3 is your chapter. You'll see exactly where the system breaks down, who gets hurt, and what the real levers are. Think carefully about the difference between reforms that fix access and reforms that destroy the incentive to innovate." },
  },
}

const chapterLens = {
  0: { scientist: "🧪 As you read about Zoey and Trikafta, think about what it took for that discovery to survive 10+ years of development and reach her.", investor: "💰 As you meet Zoey, think about the investor who funded Vertex — knowing the odds were against them — and why the system needed them to.", clinician: "🏥 As you meet Zoey, think about what her outcome would have been if her insurance hadn't covered Trikafta's $300K price tag.", policy: "⚖️ As you meet Zoey, think about the policy conditions that made Trikafta possible — and the ones that could make the next Trikafta impossible." },
  1: { scientist: "🧪 AZT, statins, and DAAs all started as basic science. Think about how the funding and incentive structures enabled their translation into treatments.", investor: "💰 These three drugs represent massive returns but massive risk. Think about why the Mortgage Model is the right frame for valuing drug innovation.", clinician: "🏥 Think about how many of your patients are alive because of statins, HIV drugs, or DAAs — and what it would mean if the next generation didn't get funded.", policy: "⚖️ The Biotech Social Contract underpins all three of these breakthroughs. Think about what policies protect it — and which ones undermine it." },
  2: { scientist: "🧪 You know this process from the inside. Think about where the biggest translation risks are — and what makes a Phase III failure so costly.", investor: "💰 Each phase gate is a decision point. Think about how the 1% overall success rate shapes portfolio construction and required returns.", clinician: "🏥 Think about the evidence quality at each phase — and why the rigor of Phase III is what gives you confidence when you prescribe.", policy: "⚖️ Think about how regulatory design shapes timelines, costs, and access — and where accelerated pathways help vs. where they create risk." },
  3: { scientist: "🧪 Think about why good science alone isn't enough — and what it means that a drug needs to be investable, not just promising.", investor: "💰 This is your chapter. Think about how NPV modeling translates biological uncertainty into financial decisions — and where that logic breaks down.", clinician: "🏥 Think about the drugs your patients need that never got funded — and what that says about the gap between medical need and commercial viability.", policy: "⚖️ Think about the market failures here — antibiotics, allergies — and what policy interventions could fix the incentive structure." },
  4: { scientist: "🧪 Think about how the pricing system affects what research gets done — and why understanding list vs. net prices matters even for bench scientists.", investor: "💰 Think about the gross-to-net bubble — list prices keep rising while net prices fall. Who benefits from that dynamic and who gets hurt?", clinician: "🏥 Think about how the gap between list price and patient out-of-pocket costs creates real barriers — even when insurance technically exists.", policy: "⚖️ Think about where the list price system creates perverse incentives — and what regulatory changes would fix it without undermining innovation." },
  5: { scientist: "🧪 Lipitor, Gleevec, and Humira each represent different modalities. Think about how manufacturing complexity shapes whether a drug can go generic.", investor: "💰 Think about Humira's $200B revenue and its patent thicket. Was that a fair return on investment, a violation of the social contract, or both?", clinician: "🏥 Think about the patients who needed cheaper Gleevec generics years before they were accessible — and what that delay cost them clinically.", policy: "⚖️ Think about patent thickets, rebate walls, and price jacking — which policy levers address each without creating unintended consequences?" },
  7: { scientist: "🧪 Think about the specific insurance failures in this chapter — prior auth abuse, denial of care, PBM games — and what they mean for the drugs your research produces.", investor: "💰 Think about how vertical integration and PBM opacity create systemic risk for the returns that make biotech investment viable.", clinician: "🏥 This chapter is your daily reality. Think about every prior auth battle you've fought and every patient who couldn't afford their copay.", policy: "⚖️ Think about which of the problems in this chapter require regulatory fixes — and which would disappear if OOP costs were simply capped." },
  8: { scientist: "🧪 Think about how price controls would affect funding for your research — and why insurance reform is the fix that doesn't kill the innovation you depend on.", investor: "💰 This is the existential chapter. Think about which policy proposals would make biotech uninvestable — and which ones you could live with.", clinician: "🏥 Think about your patients who can't afford their drugs because of OOP costs — and why price controls wouldn't actually fix that.", policy: "⚖️ This is your chapter. Think carefully about which levers actually fix affordability without destroying the innovation pipeline." },
  9: { scientist: "🧪 You've seen the full system. Think about where your work fits — and what you'll advocate for to make sure it reaches patients.", investor: "💰 You've seen the full lifecycle. Think about what policy environment you need to keep funding the next generation of biotech.", clinician: "🏥 You've seen why your patients struggle to access drugs. Think about what you'll do differently — and what you'll advocate for.", policy: "⚖️ You've seen the whole system. Think about the one reform that would have the biggest impact — and how you'd make the case for it." },
}

const roleColors = {
  scientist:   { bg: 'bg-[#EEF2FA]', border: 'border-[#D0DAF0]', text: 'text-[#1A4D8C]', sub: 'text-[#596CA6]', chip: 'bg-[#D0DAF0] text-[#214C91]' },
  investor:    { bg: 'bg-[#EEF2FA]', border: 'border-[#D0DAF0]', text: 'text-[#1A4D8C]', sub: 'text-[#596CA6]', chip: 'bg-[#D0DAF0] text-[#214C91]' },
  clinician:   { bg: 'bg-[#FFF5F3]', border: 'border-[#F4C7BE]', text: 'text-[#7A3328]', sub: 'text-[#C45A44]', chip: 'bg-[#F8DCD6] text-[#C45A44]' },
  policy:      { bg: 'bg-[#FAEEDA]', border: 'border-[#F4D4A0]', text: 'text-[#854F0B]', sub: 'text-[#A0620E]', chip: 'bg-[#FAE3B8] text-[#854F0B]' },
}

const actMap = {
  0: { act: 1, name: 'Stage 1 — The Problem', color: 'green' },
  1: { act: 1, name: 'Stage 1 — The Problem', color: 'green' },
  2: { act: 1, name: 'Stage 1 — The Problem', color: 'green' },
  3: { act: 2, name: 'Stage 2 — The Trial', color: 'purple' },
  4: { act: 2, name: 'Stage 2 — The Trial', color: 'purple' },
  5: { act: 2, name: 'Stage 2 — The Trial', color: 'purple' },
  6: { act: 3, name: 'Stage 3 — The Trade-Off', color: 'amber' },
  7: { act: 3, name: 'Stage 3 — The Trade-Off', color: 'amber' },
  8: { act: 3, name: 'Stage 3 — The Trade-Off', color: 'amber' },
  9: { act: 3, name: 'Stage 3 — The Trade-Off', color: 'amber' },
}

const stageGroups = [
  { label: 'Stage 1 — The Problem', chapterIds: [0, 1, 2], color: 'green' },
  { label: 'Stage 2 — The Trial',   chapterIds: [3, 4, 5], color: 'purple' },
  { label: 'Stage 3 — The Trade-Off', chapterIds: [6, 7, 8, 9], color: 'amber' },
]

const stageColors = { green: '#214C91', purple: '#1A4D8C', amber: '#C45A44' }

const levelStyles = {
  green:  { wrap: 'bg-white border-[#D0DAF0]', tag: 'bg-[#EEF2FA] text-[#214C91]',  title: 'text-gray-900', body: 'text-gray-600' },
  yellow: { wrap: 'bg-white border-[#D0DAF0]', tag: 'bg-[#FFF5F3] text-[#C45A44]', title: 'text-gray-900', body: 'text-gray-600' },
  red:    { wrap: 'bg-white border-[#D0DAF0]', tag: 'bg-[#F8DCD6] text-[#C45A44]',       title: 'text-gray-900', body: 'text-gray-600' },
}

const typeStyles = {
  video:   'bg-[#EEF2FA] text-[#214C91]',
  reading: 'bg-[#F6F5F0] text-[#596CA6]',
  quiz:    'bg-[#D0DAF0] text-[#1A4D8C]',
  data:    'bg-[#D0DAF0] text-[#1A4D8C]',
  summary: 'bg-[#FFF5F3] text-[#C45A44]',
  game:    'bg-[#F8DCD6] text-[#C45A44]',
}

const levelLabel = { green: 'Foundational', yellow: 'Intermediate', red: 'Advanced' }
const actColors  = { green: '#214C91', purple: '#534AB7', amber: '#C45A44' }

const takeaways = {
  'c0t1': 'Trikafta transformed cystic fibrosis from a life-shortening disease into a manageable condition — but its $300,000/year price tag raises the central question this course will answer.',
  'c0t2': 'The questions around drug pricing are complex. This course gives you the framework to think through them clearly rather than emotionally.',
  'c0t4': 'Peter Kolchinsky\'s unique background — PhD virologist turned biotech investor — is what makes this course different. He\'s seen the system from both sides.',
  'c0t5': 'By the end of this course you\'ll be able to explain the drug development system to anyone — and advocate for policies that actually work.',
  'c0t6': 'Content must be completed in order because each chapter builds on the last. Treat this like a course, not a reference document.',
  'c0t7': 'The single biggest predictor of course completion is making a calendar commitment now. Do it before you move on.',
  'c1t1': 'Zoey\'s story is a reminder of what\'s at stake — behind every drug price debate is a patient whose life depends on access.',
  'c1t3': 'AZT, statins, and DAAs are not abstract examples — they represent hundreds of millions of lives saved or extended. This is what the biotech system produces when it works.',
  'c1t9': 'High drug prices during the patent period are the mortgage — a finite cost that pays for innovation. Once the patent expires, drugs become cheap public goods forever.',
  'c1t10': 'The Biotech Social Contract only works if both sides hold up their end: companies let drugs go generic, and society ensures insurance covers them.',
  'c2t7': 'Understanding the 3 phases of clinical trials is the single most important framework in this course. Everything else builds on it.',
  'c2t9': 'Post-marketing surveillance is what caught Vioxx — after it had already caused an estimated 88,000 heart attacks. The system works, but imperfectly.',
  'c3t1': '$2.87 billion per drug. That number includes all the failures — which is exactly the point.',
  'c3t7': 'The NIH funds science. Private investors fund drugs. These are different things, and confusing them leads to bad policy.',
  'c3t12': 'Even the best science is uninvestable if the commercial logic doesn\'t work. Understanding this is what separates effective biotech advocates from naive ones.',
  'c4t3': 'The question isn\'t whether a drug is expensive — it\'s expensive for whom. Insurance is what makes a $2M drug accessible to a baby\'s family.',
  'c4t10': '90% of all prescriptions are for generics. The mortgage gets paid, and then the drug becomes a public good forever.',
  'c5t2': 'Lipitor is the textbook example of the social contract working as intended — branded, expensive, then generic and essentially free.',
  'c5t4': 'Humira\'s patent thicket delayed biosimilars by years. That\'s a violation of the social contract that cost patients real money and health.',
  'c5t8': 'Price jacking is real and outrageous — but it\'s not representative. Don\'t let the loudest cases distort your understanding of the system.',
}

// ── localStorage helpers ──────────────────────────────────────────────────────

const STORAGE_KEY = 'biotech_progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch { return {} }
}

function saveProgress(chapterId, topicIndex) {
  try {
    const prev = loadProgress()
    const updated = { ...prev, lastChapter: chapterId, lastTopic: topicIndex, lastSeen: Date.now() }
    // Track furthest topic reached per chapter
    const key = `ch${chapterId}`
    updated[key] = Math.max(updated[key] || 0, topicIndex)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  } catch {}
}

function getChapterCompletion(chapterId, totalTopics) {
  try {
    const data = loadProgress()
    const reached = data[`ch${chapterId}`] || 0
    return Math.round(((reached + 1) / totalTopics) * 100)
  } catch { return 0 }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function parseBold(text) {
  if (!text) return null
  return text.split(/\*\*(.*?)\*\*/).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
  )
}

function VideoEmbed({ url, title }) {
  if (!url) return null
  return (
    <div className="rounded-xl overflow-hidden" style={{ position: 'relative', paddingBottom: '45%', height: 0 }}>
      <iframe src={url} title={title} allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} />
    </div>
  )
}

function QuizBlock({ topic, isFinalExam = false, onPass }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleAnswer = (qi, oi) => {
    if (submitted || answers[qi] !== undefined) return
    setAnswers(prev => ({ ...prev, [qi]: oi }))
  }

  const allAnswered = topic.questions && Object.keys(answers).length === topic.questions.length

  const handleSubmit = () => {
    if (!allAnswered) return
    setSubmitted(true)
    if (isFinalExam) {
      const correct = topic.questions.filter((q, qi) => answers[qi] === q.correct).length
      const pct = Math.round((correct / topic.questions.length) * 100)
      if (pct >= 85 && onPass) setTimeout(() => onPass(), 2000)
    }
  }

  const score = submitted && isFinalExam
    ? Math.round((topic.questions.filter((q, qi) => answers[qi] === q.correct).length / topic.questions.length) * 100)
    : null

  return (
    <div className="flex flex-col gap-4">
      {topic.questions?.map((q, qi) => (
        <div key={qi} className="rounded-xl p-5 border" style={{ background: '#F6F5F0', borderColor: '#D0DAF0' }}>
          <p className="text-base font-semibold mb-3" style={{ color: '#214C91' }}>{q.question}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((opt, oi) => {
              const answered = submitted || answers[qi] !== undefined
              const isSelected = answers[qi] === oi
              const isCorrect = oi === q.correct
              let style = {}
              let cls = 'text-sm px-4 py-3 rounded-xl border text-left transition-all font-medium '
              if (!answered) {
                cls += 'cursor-pointer'
                style = { border: '1px solid #D0DAF0', color: '#214C91', background: 'white' }
              } else if (submitted && isCorrect) {
                style = { border: '2px solid #214C91', background: '#EEF2FA', color: '#214C91' }
              } else if (submitted && isSelected && !isCorrect) {
                style = { border: '2px solid #E24B4A', background: '#FEF2F2', color: '#991B1B' }
              } else if (!submitted && isSelected) {
                style = { border: '2px solid #214C91', background: '#EEF2FA', color: '#214C91' }
              } else {
                style = { border: '1px solid #E5E7EB', color: '#9CA3AF', background: 'white' }
              }
              return (
                <button key={oi} className={cls} style={style}
                  onClick={() => handleAnswer(qi, oi)}>
                  {opt}
                </button>
              )
            })}
          </div>
          {!isFinalExam && answers[qi] !== undefined && (
            <p className="text-sm mt-3 font-medium"
              style={{ color: answers[qi] === q.correct ? '#214C91' : '#991B1B' }}>
              {answers[qi] === q.correct
                ? `✓ Correct! +${Math.round(topic.xp / topic.questions.length)} XP`
                : '✗ Not quite — the correct answer is highlighted above.'}
            </p>
          )}
        </div>
      ))}

      {/* Final exam submit button */}
      {isFinalExam && !submitted && (
        <button onClick={handleSubmit} disabled={!allAnswered}
          className="w-full py-4 rounded-xl text-base font-semibold transition-all mt-2"
          style={allAnswered
            ? { background: '#214C91', color: 'white' }
            : { background: '#D0DAF0', color: '#596CA6', cursor: 'not-allowed' }}>
          {allAnswered ? 'Submit exam →' : `Answer all questions to submit (${Object.keys(answers).length}/${topic.questions?.length})`}
        </button>
      )}

      {/* Final exam result */}
      {isFinalExam && submitted && (
        <div className="rounded-2xl p-6 text-center" style={{
          background: score >= 85 ? '#EEF2FA' : '#FFF5F3',
          border: `2px solid ${score >= 85 ? '#214C91' : '#F4C7BE'}`
        }}>
          <div className="text-4xl mb-3">{score >= 85 ? '🎉' : '📚'}</div>
          <p className="text-xl font-semibold mb-2" style={{ color: score >= 85 ? '#214C91' : '#C45A44' }}>
            {score >= 85 ? 'Congratulations — you passed!' : 'Not quite — keep studying!'}
          </p>
          <p className="text-sm mb-1" style={{ color: '#596CA6' }}>
            {score >= 85
              ? 'You scored 85% or higher. Your certificate is being prepared...'
              : `You need 85% to pass. Review the highlighted answers and try again.`}
          </p>
          {score < 85 && (
            <button onClick={() => { setAnswers({}); setSubmitted(false) }}
              className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: '#214C91' }}>
              Retake exam →
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function DataBlock({ topic }) {
  if (!topic.stats) return null
  return (
    <div className="flex flex-col gap-4">
      {topic.stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="text-sm text-gray-500 w-40 flex-shrink-0">{stat.label}</div>
          {stat.fill !== undefined ? (
            <>
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all"
                  style={{ width: `${stat.fill}%`, background: stat.fill < 20 ? '#E24B4A' : stat.fill < 50 ? '#EF9F27' : '#214C91' }} />
              </div>
              <div className="text-sm font-semibold text-gray-700 w-12 text-right">{stat.value}</div>
            </>
          ) : (
            <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
          )}
        </div>
      ))}
    </div>
  )
}

function StageLensCard({ chapterId, userRole }) {
  const lens = stageLens[chapterId]
  if (!lens || !userRole || !lens[userRole]) return null
  const { icon, heading, body } = lens[userRole]
  const c = roleColors[userRole] || roleColors.scientist
  return (
    <div className={`rounded-2xl border p-6 ${c.bg} ${c.border}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c.chip}`}>
          {lens.label}
        </span>
        <span className={`text-xs ${c.sub}`}>{lens.subtitle}</span>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-2xl mt-0.5">{icon}</span>
        <div>
          <p className={`text-base font-bold mb-2 ${c.text}`}>{heading}</p>
          <p className={`text-sm leading-relaxed ${c.sub}`}>{body}</p>
        </div>
      </div>
    </div>
  )
}

function ChapterLensCard({ chapterId, userRole }) {
  const lens = chapterLens[chapterId]
  const colors = {
    scientist: 'bg-[#EEF2FA] border-[#D0DAF0] text-[#1A4D8C]',
    investor:  'bg-[#EEF2FA] border-[#D0DAF0] text-[#1A4D8C]',
    clinician: 'bg-[#FFF5F3] border-[#F4C7BE] text-[#7A3328]',
    policy:    'bg-[#FAEEDA] border-[#F4D4A0] text-[#854F0B]',
  }
  if (!lens || !userRole || !lens[userRole]) return null
  if (stageLens[chapterId]) return null
  return (
    <div className={`rounded-xl border px-5 py-4 ${colors[userRole] || colors.scientist}`}>
      <p className="text-xs font-bold uppercase tracking-wide mb-1 opacity-60">Your lens for this chapter</p>
      <p className="text-sm leading-relaxed">{lens[userRole]}</p>
    </div>
  )
}

// ── Progress Timeline — accordion sidebar ────────────────────────────────────
function GuessBlock({ topic }) {
  const cfg = topic.guessConfig
  if (!cfg) return null
 
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
 
  const handlePick = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    setTimeout(() => setRevealed(true), 550)
  }
 
  const getOptStyle = (idx) => {
    if (selected === null) return {
      background: 'white',
      border: '0.5px solid #D0DAF0',
      color: '#214C91',
      cursor: 'pointer',
    }
    const isCorrect = idx === cfg.correctIndex
    const isSelected = idx === selected
    if (isSelected && cfg.options[idx].result === 'close') return {
      background: '#EAF3DE', border: '1.5px solid #97C459', color: '#173404',
      cursor: 'default',
    }
    if (isSelected && cfg.options[idx].result === 'wrong') return {
      background: '#FCEBEB', border: '1.5px solid #F09595', color: '#501313',
      cursor: 'default',
    }
    if (!isSelected && isCorrect) return {
      background: '#EAF3DE', border: '1.5px solid #97C459', color: '#173404',
      cursor: 'default',
    }
    return {
      background: 'white', border: '0.5px solid #E5E7EB',
      color: '#9CA3AF', opacity: 0.5, cursor: 'default',
    }
  }
 
  const feedbackText = selected !== null
    ? (cfg.options[selected].result === 'close' ? cfg.feedbackClose : cfg.feedbackWrong)
    : null
 
  const feedbackStyle = selected !== null && cfg.options[selected].result === 'close'
    ? { background: '#EAF3DE', color: '#173404' }
    : { background: '#FCEBEB', color: '#501313' }
 
  return (
    <div className="flex flex-col gap-4">
      {/* Question */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#596CA6' }}>
          Before we begin
        </p>
        <p className="text-lg font-semibold mb-1" style={{ color: '#214C91' }}>{cfg.question}</p>
        <p className="text-sm" style={{ color: '#596CA6' }}>{cfg.instruction}</p>
      </div>
 
      {/* Options */}
      <div className="flex flex-col gap-2">
        {cfg.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handlePick(idx)}
            className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all"
            style={{ ...getOptStyle(idx), fontSize: '15px', fontWeight: '500' }}
          >
            <span className="text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
              style={{ background: 'rgba(33,76,145,0.08)', color: '#596CA6' }}>
              {opt.label}
            </span>
            {opt.value}
          </button>
        ))}
      </div>
 
      {/* Feedback message */}
      {feedbackText && (
        <p className="text-sm font-medium px-4 py-3 rounded-xl" style={feedbackStyle}>
          {feedbackText}
        </p>
      )}
 
      {/* Reveal */}
      {revealed && (
        <div className="rounded-xl overflow-hidden" style={{ border: '0.5px solid #D0DAF0' }}>
          <div className="px-6 py-5" style={{ background: 'white' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#596CA6' }}>
              {cfg.revealSource}
            </p>
            <p className="text-4xl font-semibold mb-0.5" style={{ color: '#214C91' }}>
              {cfg.revealStat}
            </p>
          </div>
          <div className="px-6 py-4" style={{ background: '#F6F5F0', borderTop: '0.5px solid #D0DAF0' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
              {cfg.revealBody.split('. ').map((sentence, i, arr) => {
                // Bold the first sentence for emphasis
                if (i === 0) return (
                  <span key={i}>
                    <strong style={{ color: '#214C91', fontWeight: '600' }}>{sentence}.</strong>{' '}
                  </span>
                )
                return <span key={i}>{sentence}{i < arr.length - 1 ? '. ' : ''}</span>
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
function ProgressTimeline({ currentChapterId, navigate, visibleTopics, currentIndex, userLevel }) {
  const prog = loadProgress()
  // Start with the active chapter expanded
  const [expandedChapter, setExpandedChapter] = useState(currentChapterId)

  const isVisible = (topic) => {
    if (topic.level === 'green') return true
    if (topic.level === 'yellow') return userLevel === 'yellow' || userLevel === 'red'
    if (topic.level === 'red') return userLevel === 'red'
    return false
  }

  const toggleChapter = (cid) => {
    setExpandedChapter(prev => prev === cid ? null : cid)
  }

  return (
    <div className="flex flex-col gap-2 mt-1">
      {stageGroups.map((stage) => {
        const color = stageColors[stage.color]
        return (
          <div key={stage.label}>
            {/* Stage label */}
            <p className="text-sm font-bold uppercase tracking-widest mb-2 px-1"
              style={{ color }}>{stage.label.split(' — ')[0]}</p>

            <div className="flex flex-col gap-0.5">
              {stage.chapterIds.map(cid => {
                const ch = chapters[cid]
                if (!ch) return null
                const chTopics = ch.topics.filter(isVisible)
                const reached = prog[`ch${cid}`] ?? -1
                const pct = reached >= 0 ? Math.round(((reached + 1) / chTopics.length) * 100) : 0
                const isActiveChapter = cid === currentChapterId
                const isDone = pct === 100
                const isExpanded = expandedChapter === cid

                return (
                  <div key={cid}>
                    {/* Chapter row — clickable header */}
                    <div
                      onClick={() => toggleChapter(cid)}
                      className="flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-all"
                      style={{ background: isActiveChapter ? '#EEF2FA' : 'transparent' }}
                      onMouseEnter={e => { if (!isActiveChapter) e.currentTarget.style.background = '#F6F5F0' }}
                      onMouseLeave={e => { if (!isActiveChapter) e.currentTarget.style.background = 'transparent' }}
                    >
                      {/* Status dot */}
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isDone ? color : isActiveChapter ? color : '#E5E7EB',
                          color: isDone || isActiveChapter ? 'white' : '#9CA3AF',
                          fontSize: '9px',
                          fontWeight: '600',
                        }}>
                        {isDone ? '✓' : cid}
                      </div>

                      {/* Chapter title + mini progress */}
                      <div className="flex-1 min-w-0">
                        <p className="text-base truncate" style={{
                          fontWeight: isActiveChapter ? '600' : '400',
                          color: isActiveChapter ? '#214C91' : '#6b7280'
                        }}>
                          {ch.title}
                        </p>
                        {pct > 0 && !isDone && (
                          <div className="h-0.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                          </div>
                        )}
                      </div>

                      {/* Chevron toggle */}
                      <span className="text-gray-400 text-sm flex-shrink-0 transition-transform"
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}>
                        ▾
                      </span>
                    </div>

                    {/* Topics list — expands when chapter is open */}
                    {isExpanded && (
                      <div className="ml-4 pl-3 border-l mb-1" style={{ borderColor: color + '40' }}>
                        {chTopics.map((t, ti) => {
                          const isCurrentTopic = isActiveChapter && ti === currentIndex
                          const isReached = ti <= reached
                          const isCompleted = ti < (isActiveChapter ? currentIndex : reached + 1)

                          return (
                            <div key={t.id}
                              onClick={() => navigate(`/chapter/${cid}/topic/${ti}`)}
                              className="flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all my-0.5"
                              style={{
                                background: isCurrentTopic ? '#EEF2FA' : 'transparent',
                              }}
                              onMouseEnter={e => { if (!isCurrentTopic) e.currentTarget.style.background = '#F6F5F0' }}
                              onMouseLeave={e => { if (!isCurrentTopic) e.currentTarget.style.background = 'transparent' }}
                            >
                              {/* Topic status indicator */}
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{
                                background: isCurrentTopic ? color : isCompleted ? color : '#D1D5DB',
                                opacity: isCompleted ? 1 : 0.5,
                              }} />
                              <span className="text-base truncate leading-snug" style={{
                                color: isCurrentTopic ? '#214C91' : isReached ? '#374151' : '#9CA3AF',
                                fontWeight: isCurrentTopic ? '600' : '400',
                              }}>
                                {t.title.length > 28 ? t.title.substring(0, 28) + '…' : t.title}
                              </span>
                              {isCompleted && !isCurrentTopic && (
                                <span className="text-sm flex-shrink-0" style={{ color }}>✓</span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Welcome back banner ───────────────────────────────────────────────────────

function WelcomeBackBanner({ onDismiss }) {
  return (
    <div className="mb-5 flex items-start gap-3 bg-[#F8DCD6] border border-[#F4C7BE] rounded-xl px-5 py-4">
      <span className="text-[#C45A44] text-lg mt-0.5">👋</span>
      <div className="flex-1">
        <p className="text-sm font-semibold text-[#1A4D8C]">Welcome back — let's pick up where you left off.</p>
        <p className="text-xs text-[#C45A44] mt-0.5">Your progress has been saved. Continue at your own pace.</p>
      </div>
      <button onClick={onDismiss} className="text-[#596CA6] hover:text-[#214C91] text-lg leading-none">×</button>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function ChapterPage({ userRole, userLevel, xp, setXp }) {
  const { chapterId, topicIndex } = useParams()
  const navigate = useNavigate()
  const chapterIdInt = parseInt(chapterId)
  const chapter = chapters[chapterIdInt]
  const currentIndex = parseInt(topicIndex)
  const act = actMap[chapterIdInt] || { act: 1, name: 'Stage 1 — The Problem', color: 'green' }

  const isVisible = (topic) => {
    if (topic.level === 'green') return true
    if (topic.level === 'yellow') return userLevel === 'yellow' || userLevel === 'red'
    if (topic.level === 'red') return userLevel === 'red'
    return false
  }

  const visibleTopics = chapter.topics.filter(isVisible)
  const topic = visibleTopics[currentIndex]
  const isLast  = currentIndex === visibleTopics.length - 1
  const isFirst = currentIndex === 0
  const progress = Math.round(((currentIndex + 1) / visibleTopics.length) * 100)
  const s = levelStyles[topic.level]
  const hasTakeaway = takeaways[topic.id]
  const isFirstTopicOfChapter = currentIndex === 0
  const isStageOpeningChapter = stageLens[chapterId] !== undefined

  const [xpEarned, setXpEarned] = useState(false)
  const [showWelcomeBack, setShowWelcomeBack] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)
  const [deepDiveOpen, setDeepDiveOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const isFinalExam = topic.id === 'c9t6'

  // Save progress whenever chapter/topic changes
  useEffect(() => {
    saveProgress(chapterIdInt, currentIndex)
    setDeepDiveOpen(false)
    setDrawerOpen(false)
  }, [chapterIdInt, currentIndex])

  // Show welcome back banner if returning after >10 minutes
  useEffect(() => {
    try {
      const data = loadProgress()
      if (data.lastSeen && Date.now() - data.lastSeen > 10 * 60 * 1000) {
        setShowWelcomeBack(true)
      }
    } catch {}
  }, [])

  const handleNext = () => {
    if (!xpEarned) {
      setXp(prev => prev + topic.xp)
      setXpEarned(true)
    }
    setTimeout(() => setXpEarned(false), 100)
    if (isLast) {
      const decisionMap = { 2: '1', 5: '2', 8: '3' }
      if (decisionMap[chapterIdInt]) navigate(`/decision/${decisionMap[chapterIdInt]}`)
      else navigate(`/chapter/${chapterId}/complete`)
    } else {
      navigate(`/chapter/${chapterId}/topic/${currentIndex + 1}`)
    }
  }

  const handlePrev = () => navigate(`/chapter/${chapterId}/topic/${currentIndex - 1}`)

  // Show certificate full screen
  if (showCertificate) {
    return <Certificate onBack={() => setShowCertificate(false)} />
  }

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <div className="w-80 border-r p-5 flex flex-col gap-4 shrink-0" style={{ background: "#F6F5F0", borderColor: "#D0DAF0" }}>
        <div className="flex items-center gap-2 pb-3 border-b border-gray-100 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#1A4D8C" }}>
            <div className="w-2.5 h-2.5 rounded-full bg-[#214C91]"></div>
          </div>
          <span className="text-sm font-semibold text-gray-700">← Biotech Unveiled</span>
        </div>

        {/* Chapter progress bar */}
        <div className="rounded-xl p-3 border" style={{ background: "#EEF2FA", borderColor: "#D0DAF0" }}>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>This chapter</span><span>{progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mb-2">
            <div className="h-2 rounded-full transition-all" style={{ width: `${progress}%`, background: "#214C91" }}></div>
          </div>
          <div className="text-xs font-semibold px-2 py-1 rounded-full text-center bg-[#F8DCD6] text-[#C45A44]">{xp} XP total</div>
        </div>

        {/* Full course progress timeline */}
        <div className="overflow-y-auto flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Course progress</p>
          <ProgressTimeline
            currentChapterId={chapterIdInt}
            navigate={navigate}
            visibleTopics={visibleTopics}
            currentIndex={currentIndex}
            userLevel={userLevel}
          />
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col p-8" style={{ background: "#F6F5F0" }}>

        {/* Welcome back banner */}
        {showWelcomeBack && (
          <WelcomeBackBanner onDismiss={() => setShowWelcomeBack(false)} />
        )}

        <div className="flex justify-between items-start mb-5">
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">{act.name} · {chapter.title}</p>
            <p className="text-sm text-gray-400 mt-0.5">Topic {currentIndex + 1} of {visibleTopics.length}</p>
          </div>
          <span className={`text-sm px-3 py-1 rounded-full font-semibold ${roleColors[userRole]?.chip || 'bg-gray-100 text-gray-700'}`}>
            {userRole === 'scientist' ? '🔬 Scientist' : userRole === 'investor' ? '📈 Investor' : userRole === 'clinician' ? '🏥 Clinician' : '⚖️ Policy Maker'}
          </span>
        </div>

        {isFirstTopicOfChapter && isStageOpeningChapter && (
          <div className="mb-5">
            <StageLensCard chapterId={chapterIdInt} userRole={userRole} />
          </div>
        )}

        {isFirstTopicOfChapter && !isStageOpeningChapter && (
          <div className="mb-5">
            <ChapterLensCard chapterId={chapterIdInt} userRole={userRole} />
          </div>
        )}

        {/* Topic card */}
        <div className={`border rounded-2xl p-8 flex-1 flex flex-col gap-5 ${s.wrap}`}>

          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${s.tag}`}>{levelLabel[topic.level]}</span>
            <span className={`text-sm px-3 py-1 rounded-full capitalize font-medium ${typeStyles[topic.type]}`}>{topic.type}</span>
            <span className="text-sm ml-auto font-semibold text-[#C45A44]">+{topic.xp} XP</span>
          </div>

          <p className="text-sm text-gray-400 italic">{topic.contextNote}</p>
          <h2 className={`text-2xl font-semibold leading-snug ${s.title}`}>{topic.title}</h2>

          {/* Core concept — shown before content, gives reader a frame */}
          {topic.coreConcept && (
            <div className="flex items-start gap-3 rounded-xl px-5 py-4" style={{ background: '#214C91' }}>
              <div className="text-white text-xl flex-shrink-0 mt-0.5">🎯</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>The core idea</div>
                <p className="text-base font-medium leading-relaxed text-white">{parseBold(topic.coreConcept)}</p>
              </div>
            </div>
          )}

          {topic.introImageUrl && (
            <div className="flex justify-center">
              <img src={topic.introImageUrl} alt={topic.title} className="rounded-xl"
                style={{ maxHeight: '260px', width: '200px', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          )}

          {/* contentBlocks: ordered sequence of text / image / video */}
          {topic.contentBlocks ? (
            <div className="flex flex-col gap-5">
              {topic.contentBlocks.map((block, bi) => {
                if (block.type === 'text') return (
                  <div key={bi} className={`text-lg leading-relaxed ${s.body}`}>
                    {block.content.split('\n\n').map((para, pi) => (
                      <p key={pi} className="mb-4">
                        {para.split(/\*\*(.*?)\*\*/).map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
                        )}
                      </p>
                    ))}
                  </div>
                )
                if (block.type === 'image') return (
                  <div key={bi} className="flex flex-col gap-2">
                    <img src={block.url} alt={block.caption || topic.title}
                      className="w-full rounded-xl" style={{ maxHeight: '400px', objectFit: 'contain' }} />
                    {block.caption && <p className="text-sm text-gray-500 text-center italic">{block.caption}</p>}
                  </div>
                )
                if (block.type === 'video') return (
                  <VideoEmbed key={bi} url={block.url} title={block.caption || topic.title} />
                )
                return null
              })}
            </div>
          ) : (
            <>
              {topic.content && topic.type !== 'quiz' && !topic.imageSide && (
                <div className={`text-lg leading-relaxed ${s.body}`}>
                  {topic.content.split('\n\n').map((para, pi) => (
                    <p key={pi} className="mb-4">
                      {para.split(/\*\*(.*?)\*\*/).map((part, i) =>
                        i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
                      )}
                    </p>
                  ))}
                </div>
              )}
              {topic.videoUrl && <VideoEmbed url={topic.videoUrl} title={topic.title} />}
              {topic.imageUrl && !topic.imageSide && (
                <div className="flex flex-col gap-4">
                  <img src={topic.imageUrl} alt={topic.title} className="w-full rounded-xl"
                    style={topic.imageFullSize
                      ? { width: '100%', objectFit: 'contain' }
                      : { maxHeight: '400px', objectFit: 'contain' }} />
                  {topic.imageUrl2 && (
                    <img src={topic.imageUrl2} alt={topic.title} className="w-full rounded-xl"
                      style={{ maxHeight: '400px', objectFit: 'contain' }} />
                  )}
                  {topic.imageCaption && (
                    <p className="text-base text-gray-600 leading-relaxed">{parseBold(topic.imageCaption)}</p>
                  )}
                </div>
              )}
            </>
          )}

          {/* Two-column layout: content left, image right */}
          {topic.imageSide && topic.imageUrl && (
            <div className="flex gap-6 items-stretch">
              <div className="flex-1 min-w-0 flex flex-col">
                {topic.content && topic.type !== 'quiz' && (
                  <div className={`text-base leading-relaxed mb-4 ${s.body}`}>
                    {topic.content.split('\n\n').map((para, pi) => (
                      <p key={pi} className="mb-3">
                        {para.split(/\*\*(.*?)\*\*/).map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
                        )}
                      </p>
                    ))}
                  </div>
                )}
                {topic.keyPoints && topic.keyPoints.length > 0 && (
                  <div className="rounded-xl p-4 flex-1 flex flex-col" style={{ background: '#EEF2FA', border: '1px solid #D0DAF0' }}>
                    <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#596CA6' }}>Key points</div>
                    <div className="flex flex-col flex-1 justify-between">
                      {topic.keyPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-3 py-2" style={{ borderBottom: i < topic.keyPoints.length - 1 ? '1px solid #D0DAF0' : 'none' }}>
                          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                            style={{ background: '#214C91', color: 'white' }}>{i + 1}</div>
                          <p className="text-sm leading-relaxed text-gray-700"
                            dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-shrink-0" style={{ width: '48%' }}>
                <img src={topic.imageUrl} alt={topic.title} className="w-full rounded-xl"
                  style={{ objectFit: 'contain', display: 'block' }} />
                {topic.imageCaption && (
                  <p className="text-sm text-gray-500 text-center italic mt-2">{topic.imageCaption}</p>
                )}
              </div>
            </div>
          )}

          {/* Key points block — only show standalone if NOT in imageSide layout */}
          {!topic.imageSide && topic.keyPoints && topic.keyPoints.length > 0 && (
            <div className="rounded-xl p-5" style={{ background: '#EEF2FA', border: '1px solid #D0DAF0' }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#596CA6' }}>Key points</div>
              <div className="flex flex-col gap-2">
                {topic.keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                      style={{ background: '#214C91', color: 'white' }}>{i + 1}</div>
                    <p className="text-base leading-relaxed text-gray-700"
                      dangerouslySetInnerHTML={{ __html: pt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why it matters block */}
          {topic.whyItMatters && (
            <div className="rounded-xl p-5" style={{ background: '#F8DCD6', border: '1px solid #F4C7BE' }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#C45A44' }}>Why it matters</div>
              <p className="text-base leading-relaxed" style={{ color: '#7A3328' }}
                dangerouslySetInnerHTML={{ __html: topic.whyItMatters.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </div>
          )}

          {/* Did you know block */}
          {topic.didYouKnow && (
            <div className="rounded-xl p-5 flex gap-4 items-start" style={{ background: '#FAEEDA', border: '1px solid #F4D4A0' }}>
              <div className="text-2xl flex-shrink-0">💡</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#854F0B' }}>Did you know?</div>
                <p className="text-base leading-relaxed" style={{ color: '#5C3A0A' }}
                  dangerouslySetInnerHTML={{ __html: topic.didYouKnow.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>
            </div>
          )}

          {/* Quote block */}
          {topic.quote && (
            <div className="rounded-xl p-5 border-l-4" style={{ background: '#F6F5F0', borderLeftColor: '#214C91' }}>
              <p className="text-lg italic leading-relaxed text-gray-700 mb-2">"{topic.quote.text}"</p>
              {topic.quote.attribution && (
                <p className="text-sm font-semibold" style={{ color: '#596CA6' }}>— {topic.quote.attribution}</p>
              )}
            </div>
          )}

          {/* Stats row */}
          {topic.stats && topic.stats.length > 0 && (
            <div className={`grid gap-4 ${topic.stats.length === 2 ? 'grid-cols-2' : topic.stats.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {topic.stats.map((stat, i) => (
                <div key={i} className="rounded-xl p-4 text-center" style={{ background: 'white', border: '1px solid #D0DAF0' }}>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#214C91' }}>{stat.value}</div>
                  <div className="text-sm text-gray-500 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Watch for — pre-video prompt */}
          {topic.watchFor && (
            <div className="flex items-start gap-3 rounded-xl px-5 py-4" style={{ background: '#EEF2FA', border: '1px solid #D0DAF0' }}>
              <div className="text-xl flex-shrink-0">👀</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#596CA6' }}>As you watch, notice...</div>
                <p className="text-base leading-relaxed" style={{ color: '#1A4D8C' }}>{parseBold(topic.watchFor)}</p>
              </div>
            </div>
          )}

          {/* Pause and think — active engagement prompt */}
          {topic.pauseAndThink && (
            <div className="flex items-start gap-3 rounded-xl px-5 py-4" style={{ background: '#F6F5F0', border: '1px solid #D0DAF0' }}>
              <div className="text-xl flex-shrink-0">🤔</div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#596CA6' }}>Pause and think</div>
                <p className="text-base leading-relaxed text-gray-700">{parseBold(topic.pauseAndThink)}</p>
              </div>
            </div>
          )}

          {topic.type === 'quiz' && <QuizBlock topic={topic} isFinalExam={isFinalExam} onPass={() => setShowCertificate(true)} />}
          {topic.type === 'game' && topic.id === 'c9t5' && <Stakeholder userRole={userRole} />}
          {topic.type === 'game' && topic.id !== 'c9t5' && <ReimbursementRoulette userRole={userRole} />}
          {topic.type === 'data' && <DataBlock topic={topic} />}
          {topic.type === 'guess' && <GuessBlock topic={topic} />}

          {hasTakeaway && (
            <div className="bg-[#F8DCD6] rounded-xl p-5 border border-[#F4C7BE] mt-auto">
              <div className="text-sm text-[#C45A44] font-semibold uppercase tracking-wide mb-2">Key takeaway</div>
              <div className="text-base text-[#7A3328] leading-relaxed">{parseBold(takeaways[topic.id])}</div>
            </div>
          )}

          {/* Deep dive inline toggle — for short optional content */}
          {topic.deepDive && topic.deepDiveType !== 'drawer' && (
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #D0DAF0' }}>
              <button
                onClick={() => setDeepDiveOpen(o => !o)}
                className="w-full flex items-center justify-between px-5 py-3 transition-all"
                style={{ background: deepDiveOpen ? '#EEF2FA' : 'white' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">📖</span>
                  <span className="text-sm font-semibold" style={{ color: '#596CA6' }}>Go deeper — optional</span>
                </div>
                <span className="text-sm" style={{ color: '#596CA6' }}>{deepDiveOpen ? '▲ Hide' : '▼ Show'}</span>
              </button>
              {deepDiveOpen && (
                <div className="px-5 py-4 border-t text-sm leading-relaxed text-gray-600" style={{ borderColor: '#D0DAF0', background: 'white' }}>
                  {Array.isArray(topic.deepDive) ? (
                    <div className="flex flex-col gap-3">
                      {topic.deepDive.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                          <div>
                            <p className="font-medium text-gray-700 mb-0.5">{item.label}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer"
                              className="text-sm underline" style={{ color: '#214C91' }}>{item.url}</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>{topic.deepDive}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Deep dive drawer trigger — for long optional content */}
          {topic.deepDive && topic.deepDiveType === 'drawer' && (
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-full flex items-center justify-between px-5 py-3 rounded-xl transition-all"
              style={{ background: 'white', border: '1px solid #D0DAF0' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">📖</span>
                <span className="text-sm font-semibold" style={{ color: '#596CA6' }}>Go deeper — optional</span>
              </div>
              <span className="text-sm" style={{ color: '#596CA6' }}>Open →</span>
            </button>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-5">
          <button onClick={handlePrev} disabled={isFirst}
            className={`px-5 py-3 rounded-xl text-sm font-semibold border transition-all ${
              isFirst ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-gray-200 text-gray-600 hover:bg-gray-100'}`}>
            ← Previous
          </button>
          <span className="text-sm text-gray-400 font-medium">{currentIndex + 1} / {visibleTopics.length}</span>
          {!isFinalExam && (
            <button onClick={handleNext}
              className="px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all" style={{ background: "#214C91" }} onMouseOver={e=>e.currentTarget.style.background='#1A4D8C'} onMouseOut={e=>e.currentTarget.style.background='#214C91'}>
              {isLast ? 'Complete chapter →' : 'Next →'}
            </button>
          )}
        </div>
      </div>

      {/* Drawer overlay — for long optional content */}
      {drawerOpen && topic.deepDive && (
        <>
          <div className="fixed inset-0 z-40" style={{ background: 'rgba(0,0,0,0.3)' }} onClick={() => setDrawerOpen(false)} />
          <div className="fixed top-0 right-0 h-full z-50 flex flex-col shadow-2xl"
            style={{ width: '480px', background: 'white', maxWidth: '90vw' }}>
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: '#D0DAF0' }}>
              <div className="flex items-center gap-2">
                <span>📖</span>
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#596CA6' }}>Optional — go deeper</span>
              </div>
              <button onClick={() => setDrawerOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-light">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {Array.isArray(topic.deepDive) ? (
                <div className="flex flex-col gap-5">
                  {topic.deepDive.map((item, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: '#F6F5F0', border: '1px solid #D0DAF0' }}>
                      {item.label && <p className="text-sm font-semibold text-gray-800 mb-1">{item.label}</p>}
                      {item.description && <p className="text-sm text-gray-600 mb-2">{item.description}</p>}
                      {item.url && (
                        <a href={item.url} target="_blank" rel="noopener noreferrer"
                          className="text-sm font-medium underline" style={{ color: '#214C91' }}>
                          {item.urlLabel || 'Read more →'}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-gray-600">{topic.deepDive}</p>
              )}
            </div>
            <div className="px-6 py-4 border-t" style={{ borderColor: '#D0DAF0' }}>
              <button onClick={() => setDrawerOpen(false)}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: '#214C91' }}>
                Back to lesson
              </button>
            </div>
          </div>
        </>
      )}

      <AiTutor topicTitle={topic.title} topicContent={topic.content} />
    </div>
  )
}
