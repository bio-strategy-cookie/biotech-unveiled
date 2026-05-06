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
  scientist:   { bg: 'bg-emerald-950', border: 'border-emerald-700', text: 'text-emerald-100', sub: 'text-emerald-400', chip: 'bg-emerald-800 text-emerald-200' },
  investor:    { bg: 'bg-blue-950',    border: 'border-blue-700',    text: 'text-blue-100',    sub: 'text-blue-400',    chip: 'bg-blue-800 text-blue-200' },
  clinician:   { bg: 'bg-violet-950',  border: 'border-violet-700',  text: 'text-violet-100',  sub: 'text-violet-400',  chip: 'bg-violet-800 text-violet-200' },
  policy:      { bg: 'bg-amber-950',   border: 'border-amber-700',   text: 'text-amber-100',   sub: 'text-amber-400',   chip: 'bg-amber-800 text-amber-200' },
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

const stageColors = { green: '#1D9E75', purple: '#534AB7', amber: '#EF9F27' }

const levelStyles = {
  green:  { wrap: 'bg-white border-gray-200', tag: 'bg-green-100 text-green-800',  title: 'text-gray-900', body: 'text-gray-600' },
  yellow: { wrap: 'bg-white border-gray-200', tag: 'bg-yellow-100 text-yellow-800', title: 'text-gray-900', body: 'text-gray-600' },
  red:    { wrap: 'bg-white border-gray-200', tag: 'bg-red-100 text-red-800',       title: 'text-gray-900', body: 'text-gray-600' },
}

const typeStyles = {
  video:   'bg-purple-100 text-purple-800',
  reading: 'bg-gray-100 text-gray-700',
  quiz:    'bg-teal-100 text-teal-800',
  data:    'bg-blue-100 text-blue-800',
  summary: 'bg-orange-100 text-orange-800',
  game:    'bg-pink-100 text-pink-800',
}

const levelLabel = { green: 'Foundational', yellow: 'Intermediate', red: 'Advanced' }
const actColors  = { green: 'text-green-700', purple: 'text-purple-700', amber: 'text-yellow-700' }

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

function QuizBlock({ topic }) {
  const [answers, setAnswers] = useState({})
  const handleAnswer = (qi, oi) => {
    if (answers[qi] !== undefined) return
    setAnswers(prev => ({ ...prev, [qi]: oi }))
  }
  return (
    <div className="flex flex-col gap-4">
      {topic.questions?.map((q, qi) => (
        <div key={qi} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <p className="text-base font-semibold text-gray-900 mb-3">{q.question}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((opt, oi) => {
              const answered = answers[qi] !== undefined
              const isSelected = answers[qi] === oi
              const isCorrect  = oi === q.correct
              let cls = 'text-sm px-4 py-3 rounded-xl border text-left transition-all font-medium '
              if (!answered)       cls += 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 cursor-pointer'
              else if (isCorrect)  cls += 'bg-green-50 border-green-400 text-green-800'
              else if (isSelected) cls += 'bg-red-50 border-red-400 text-red-800'
              else                 cls += 'border-gray-100 text-gray-400 bg-white'
              return <button key={oi} className={cls} onClick={() => handleAnswer(qi, oi)}>{opt}</button>
            })}
          </div>
          {answers[qi] !== undefined && (
            <p className={`text-sm mt-3 font-medium ${answers[qi] === q.correct ? 'text-green-700' : 'text-red-700'}`}>
              {answers[qi] === q.correct ? '✓ Correct! +' + Math.round(topic.xp / topic.questions.length) + ' XP' : '✗ Not quite — the correct answer is highlighted above.'}
            </p>
          )}
        </div>
      ))}
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
                  style={{ width: `${stat.fill}%`, background: stat.fill < 20 ? '#E24B4A' : stat.fill < 50 ? '#EF9F27' : '#1D9E75' }} />
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
    scientist: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    investor:  'bg-blue-50 border-blue-200 text-blue-900',
    clinician: 'bg-violet-50 border-violet-200 text-violet-900',
    policy:    'bg-amber-50 border-amber-200 text-amber-900',
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

// ── Progress Timeline (sidebar) ───────────────────────────────────────────────

function ProgressTimeline({ currentChapterId, navigate }) {
  const progress = loadProgress()

  return (
    <div className="flex flex-col gap-3 mt-1">
      {stageGroups.map((stage) => {
        const color = stageColors[stage.color]
        return (
          <div key={stage.label}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color }}>{stage.label.split(' — ')[0]}</p>
            <div className="flex flex-col gap-1">
              {stage.chapterIds.map(cid => {
                const ch = chapters[cid]
                if (!ch) return null
                const totalTopics = ch.topics.length
                const reached = progress[`ch${cid}`] ?? -1
                const pct = reached >= 0 ? Math.round(((reached + 1) / totalTopics) * 100) : 0
                const isActive = cid === currentChapterId
                const isDone = pct === 100
                return (
                  <div key={cid}
                    onClick={() => navigate(`/chapter/${cid}/topic/${Math.max(0, reached)}`)}
                    className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-all group ${
                      isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
                    {/* Status dot */}
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                      style={{
                        background: isDone ? color : isActive ? color : '#E5E7EB',
                        color: isDone || isActive ? 'white' : '#9CA3AF',
                        fontSize: '10px',
                      }}>
                      {isDone ? '✓' : cid}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs truncate ${isActive ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                        Ch {cid}: {ch.title}
                      </p>
                      {pct > 0 && !isDone && (
                        <div className="h-1 bg-gray-200 rounded-full mt-1 overflow-hidden">
                          <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
                        </div>
                      )}
                    </div>
                    {isDone && <span className="text-xs text-gray-400 flex-shrink-0">Done</span>}
                    {!isDone && pct > 0 && <span className="text-xs text-gray-400 flex-shrink-0">{pct}%</span>}
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
    <div className="mb-5 flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-xl px-5 py-4">
      <span className="text-teal-500 text-lg mt-0.5">👋</span>
      <div className="flex-1">
        <p className="text-sm font-semibold text-teal-800">Welcome back — let's pick up where you left off.</p>
        <p className="text-xs text-teal-600 mt-0.5">Your progress has been saved. Continue at your own pace.</p>
      </div>
      <button onClick={onDismiss} className="text-teal-400 hover:text-teal-600 text-lg leading-none">×</button>
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

  // Save progress whenever chapter/topic changes
  useEffect(() => {
    saveProgress(chapterIdInt, currentIndex)
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

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-100 p-5 flex flex-col gap-4 shrink-0">
        <div className="flex items-center gap-2 pb-3 border-b border-gray-100 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
          </div>
          <span className="text-sm font-semibold text-gray-700">← Biotech Unveiled</span>
        </div>

        {/* Chapter progress bar */}
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>This chapter</span><span>{progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full mb-2">
            <div className="h-2 bg-teal-500 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="text-xs text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full text-center font-semibold">{xp} XP total</div>
        </div>

        {/* Full course progress timeline */}
        <div className="overflow-y-auto flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Course progress</p>
          <ProgressTimeline currentChapterId={chapterIdInt} navigate={navigate} />
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col p-8">

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
            <span className="text-sm text-gray-400 ml-auto font-medium">+{topic.xp} XP</span>
          </div>

          <p className="text-sm text-gray-400 italic">{topic.contextNote}</p>
          <h2 className={`text-2xl font-semibold leading-snug ${s.title}`}>{topic.title}</h2>

          {topic.introImageUrl && (
            <img src={topic.introImageUrl} alt={topic.title} className="rounded-xl"
              style={{ maxHeight: '220px', width: '160px', objectFit: 'cover', objectPosition: 'center top' }} />
          )}

          {topic.content && topic.type !== 'quiz' && (
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
          {topic.type === 'quiz' && <QuizBlock topic={topic} />}
          {topic.type === 'game' && topic.id === 'c9t5' && <Stakeholder userRole={userRole} />}
          {topic.type === 'game' && topic.id !== 'c9t5' && <ReimbursementRoulette userRole={userRole} />}
          {topic.type === 'data' && <DataBlock topic={topic} />}

          {topic.imageUrl && (
            <div className="flex flex-col gap-4">
              <img src={topic.imageUrl} alt={topic.title} className="w-full rounded-xl"
                style={{ maxHeight: '400px', objectFit: 'contain' }} />
              {topic.imageUrl2 && (
                <img src={topic.imageUrl2} alt={topic.title} className="w-full rounded-xl"
                  style={{ maxHeight: '400px', objectFit: 'contain' }} />
              )}
              {topic.imageCaption && (
                <p className="text-base text-gray-600 leading-relaxed">{topic.imageCaption}</p>
              )}
            </div>
          )}

          {hasTakeaway && (
            <div className="bg-green-50 rounded-xl p-5 border border-green-100 mt-auto">
              <div className="text-sm text-green-600 font-semibold uppercase tracking-wide mb-2">Key takeaway</div>
              <div className="text-base text-green-900 leading-relaxed">{takeaways[topic.id]}</div>
            </div>
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
          <button onClick={handleNext}
            className="px-5 py-3 rounded-xl text-sm font-semibold bg-gray-900 text-white hover:bg-gray-700 transition-all">
            {isLast ? 'Complete chapter →' : 'Next →'}
          </button>
        </div>
      </div>

      <AiTutor topicTitle={topic.title} topicContent={topic.content} />
    </div>
  )
}
