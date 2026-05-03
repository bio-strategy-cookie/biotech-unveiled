import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import chapter0 from '../data/chapter0Data.js'
import chapter1 from '../data/chapter1Data.js'
import chapter2 from '../data/chapter2Data.js'
import chapter3 from '../data/chapter3Data.js'
import AiTutor from '../components/AiTutor.jsx'

const chapters = { 0: chapter0, 1: chapter1, 2: chapter2, 3: chapter3 }

const actMap = {
  0: { act: 1, name: 'Act 1 — The Promise', color: 'green' },
  1: { act: 1, name: 'Act 1 — The Promise', color: 'green' },
  2: { act: 1, name: 'Act 1 — The Promise', color: 'green' },
  3: { act: 2, name: 'Act 2 — The Gauntlet', color: 'purple' },
  4: { act: 2, name: 'Act 2 — The Gauntlet', color: 'purple' },
  5: { act: 2, name: 'Act 2 — The Gauntlet', color: 'purple' },
  6: { act: 3, name: 'Act 3 — The Reckoning', color: 'amber' },
  7: { act: 3, name: 'Act 3 — The Reckoning', color: 'amber' },
  8: { act: 3, name: 'Act 3 — The Reckoning', color: 'amber' },
}

const levelStyles = {
  green: { wrap: 'bg-white border-gray-200', tag: 'bg-green-100 text-green-800', title: 'text-gray-900', body: 'text-gray-600' },
  yellow: { wrap: 'bg-white border-gray-200', tag: 'bg-yellow-100 text-yellow-800', title: 'text-gray-900', body: 'text-gray-600' },
  red: { wrap: 'bg-white border-gray-200', tag: 'bg-red-100 text-red-800', title: 'text-gray-900', body: 'text-gray-600' },
}

const typeStyles = {
  video: 'bg-purple-100 text-purple-800',
  reading: 'bg-gray-100 text-gray-700',
  quiz: 'bg-teal-100 text-teal-800',
  data: 'bg-blue-100 text-blue-800',
  summary: 'bg-orange-100 text-orange-800',
}

const levelLabel = { green: 'Foundational', yellow: 'Intermediate', red: 'Advanced' }
const levelPill = {
  green: 'bg-green-100 text-green-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  red: 'bg-red-100 text-red-800',
}
const levelPillLabel = {
  green: 'Clinical/Research',
  yellow: 'Industry Adjacent',
  red: 'Deep Industry',
}

const actColors = {
  green: 'text-green-700',
  purple: 'text-purple-700',
  amber: 'text-yellow-700',
}

const takeaways = {
  'c0t1': 'Trikafta transformed cystic fibrosis from a life-shortening disease into a manageable condition — but its $300,000/year price tag raises the central question this course will answer.',
  'c0t2': 'The questions around drug pricing are complex. This course gives you the framework to think through them clearly rather than emotionally.',
  'c0t4': 'Peter Kolchinsky\'s unique background — PhD virologist turned biotech investor — is what makes this course different. He\'s seen the system from both sides.',
  'c0t5': 'By the end of this course you\'ll be able to explain the drug development system to anyone — and advocate for policies that actually work.',
  'c0t6': 'Content must be completed in order because each chapter builds on the last. Treat this like a course, not a reference document.',
  'c0t7': 'The single biggest predictor of course completion is making a calendar commitment now. Do it before you move on.',
  'c1t1': 'Zoey\'s story is a reminder of what\'s at stake — behind every drug price debate is a patient whose life depends on access.',
  'c1t3': 'AZT, statins, and DAAs are not abstract examples — they represent hundreds of millions of lives saved or extended. This is what the biotech system produces when it works.',
  'c1t4': 'AZT went from an abandoned cancer drug to the first HIV treatment in just 25 months — one of the fastest drug approvals in FDA history.',
  'c1t5': 'Statins are the single most impactful drug class in history by lives saved. Yet they were initially dismissed by many in the medical establishment.',
  'c1t6': 'Hepatitis C went from a chronic, potentially fatal disease to one that is curable in 8-12 weeks. This is what a breakthrough drug looks like.',
  'c1t7': 'It is highly probable that you or a loved one would not be alive without a drug that required the exact system you\'re about to study.',
  'c1t8': 'The Investor\'s Paradox: investors fund drugs that might cure diseases — but curing a disease destroys the recurring revenue model. Understanding this tension is essential.',
  'c1t9': 'High drug prices during the patent period are the mortgage — a finite cost that pays for innovation. Once the patent expires, drugs become cheap public goods forever.',
  'c1t10': 'The Biotech Social Contract only works if both sides hold up their end: companies let drugs go generic, and society ensures insurance covers them.',
  'c1t11': 'High out-of-pocket costs are a violation of the social contract — and the fix must be insurance reform, not price controls that kill future innovation.',
  'c1t12': 'Patent gaming is the most visible violation of the social contract. It\'s also what drives the most justified public anger at the industry.',
  'c1t13': 'Even industry insiders acknowledge the tension between innovation incentives and patient access. This is not a simple "industry good vs bad" story.',
  'c2t1': 'The drug development process is the longest and most expensive product development process in any industry — for good reason.',
  'c2t2': 'The 4 stages — discovery, preclinical, clinical trials, FDA review — are not arbitrary. Each one filters out drugs that would harm or not help patients.',
  'c2t4': 'The FDA drug approval process is rigorous by design. The alternative — faster but less certain approval — has caused real harm historically.',
  'c2t5': 'Discovery and preclinical research take 2-10 years before a single human volunteer ever takes the drug. This is where most candidates are eliminated.',
  'c2t6': 'The IND application is the moment a drug officially enters the human testing process. The FDA has just 30 days to approve or reject it.',
  'c2t7': 'Understanding the 3 phases of clinical trials is the single most important framework in this course. Everything else builds on it.',
  'c2t9': 'Post-marketing surveillance is what caught Vioxx — after it had already caused an estimated 88,000 heart attacks. The system works, but imperfectly.',
  'c2t10': '35,000-40,000 clinical trials per year, yielding just 43 approvals. The funnel is extraordinarily narrow.',
  'c2t11': 'The overall success rate from discovery to approval is ~1%. This is why investors need a portfolio approach — most bets will fail.',
  'c2t12': 'COVID vaccines showed what\'s possible with unlimited resources and political will. Tecfidera showed what happens without them.',
  'c2t13': 'Accelerated approval is a double-edged sword — faster access for patients, but less certainty about long-term outcomes.',
  'c2t15': 'The Value Flower framework helps quantify what a drug is actually worth to society — beyond just what it costs to develop.',
  'c2t16': 'US biopharma leadership benefits the entire world, not just Americans. The rest of the world free-rides on US innovation investment.',
  'c2t17': 'Criticizing the industry without acknowledging its global benefits is like criticizing a hospital for charging too much while ignoring that it\'s the only one for 100 miles.',
  'c2t18': 'The ecosystem requires all players — from NIH to VCs to CROs to patient advocates. Remove any one and drugs stop flowing.',
  'c2t19': 'PBMs are the least understood and most consequential players in the system. Their opacity is a feature, not a bug — for them.',
  'c2t20': 'PBMs sit between drug companies and patients, negotiating rebates that rarely flow through to patients at the pharmacy counter.',
  'c3t1': '$2.87 billion per drug. That number includes all the failures — which is exactly the point.',
  'c3t3': 'Biotech discovers, pharma scales. This division of labor is not accidental — it\'s the most efficient structure the ecosystem has found.',
  'c3t4': 'The acquisition cycle is not a failure of small biotechs — it\'s the design. Scientists get funded to discover; pharma gets assets to develop.',
  'c3t5': 'Judging biopharma profitability by looking only at Pfizer and Merck is like judging the music industry by looking only at Taylor Swift.',
  'c3t6': 'Without investors, very few new drugs would be created. This is not a defense of any specific pricing decision — it\'s a structural reality.',
  'c3t7': 'You are probably already a healthcare investor — through your insurance premiums, your 401(k), and your taxes.',
  'c3t9': 'The NIH funds science. Private investors fund drugs. These are different things, and confusing them leads to bad policy.',
  'c3t10': 'Technical risk in biotech — the drug might not work at all — is fundamentally different from business risk in software. It demands a different investment logic.',
  'c3t11': 'The portfolio logic of biotech investing is what makes it possible to fund 100 companies knowing 90 will fail. The 10 that succeed must generate enough return to justify all 100.',
  'c3t12': 'Even the best science is uninvestable if the commercial logic doesn\'t work. Understanding this is what separates effective biotech advocates from naive ones.',
  'c3t13': 'Getting to a "yes" on an investment requires aligning science, commercial logic, team, timing, and valuation. Most deals fail on one of these.',
  'c3t14': 'NPV is not just a financial formula — it\'s a way of thinking about uncertainty over time. Master it and you understand how every drug investment decision gets made.',
  'c3t16': 'Even obvious medical needs can be uninvestable if the commercial path doesn\'t work. Allergies are a perfect example — massive need, broken commercial model.',
  'c3t17': 'The antibiotic crisis is a market failure — the drugs society needs most are the least profitable to develop. This is a policy problem, not a greed problem.',
}

function VideoEmbed({ url, title }) {
  const isYoutube = url?.includes('youtube.com') || url?.includes('youtu.be')
  const isVimeo = url?.includes('vimeo.com')
  if (!url) return null
  return (
    <div className="rounded-xl overflow-hidden" style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
      <iframe
        src={url}
        title={title}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
      />
    </div>
  )
}

function QuizBlock({ topic, s }) {
  const [answers, setAnswers] = useState({})
  const handleAnswer = (qi, oi) => {
    if (answers[qi] !== undefined) return
    setAnswers(prev => ({ ...prev, [qi]: oi }))
  }
  return (
    <div className="flex flex-col gap-4">
      {topic.questions?.map((q, qi) => (
        <div key={qi} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <p className="text-sm font-medium text-gray-900 mb-3">{q.question}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((opt, oi) => {
              const answered = answers[qi] !== undefined
              const isSelected = answers[qi] === oi
              const isCorrect = oi === q.correct
              let cls = 'text-xs px-3 py-2.5 rounded-lg border text-left transition-all font-medium '
              if (!answered) cls += 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 cursor-pointer'
              else if (isCorrect) cls += 'bg-green-50 border-green-400 text-green-800'
              else if (isSelected) cls += 'bg-red-50 border-red-400 text-red-800'
              else cls += 'border-gray-100 text-gray-400 bg-white'
              return (
                <button key={oi} className={cls} onClick={() => handleAnswer(qi, oi)}>
                  {opt}
                </button>
              )
            })}
          </div>
          {answers[qi] !== undefined && (
            <p className={`text-xs mt-2 font-medium ${answers[qi] === q.correct ? 'text-green-700' : 'text-red-700'}`}>
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
  const maxFill = { 'c2t10': null, 'c2t11': null }
  return (
    <div className="flex flex-col gap-3">
      {topic.stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="text-xs text-gray-500 w-32 flex-shrink-0">{stat.label}</div>
          {stat.fill !== undefined ? (
            <>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${stat.fill}%`,
                    background: stat.fill < 20 ? '#E24B4A' : stat.fill < 50 ? '#EF9F27' : '#1D9E75'
                  }}
                />
              </div>
              <div className="text-xs font-medium text-gray-700 w-10 text-right">{stat.value}</div>
            </>
          ) : (
            <div className="text-sm font-medium text-gray-900">{stat.value}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function ChapterPage({ userLevel, xp, setXp }) {
  const { chapterId, topicIndex } = useParams()
  const navigate = useNavigate()
  const chapter = chapters[chapterId]
  const currentIndex = parseInt(topicIndex)
  const act = actMap[chapterId] || { act: 1, name: 'Act 1 — The Promise', color: 'green' }

  const isVisible = (topic) => {
    if (topic.level === 'green') return true
    if (topic.level === 'yellow') return userLevel === 'yellow' || userLevel === 'red'
    if (topic.level === 'red') return userLevel === 'red'
    return false
  }

  const visibleTopics = chapter.topics.filter(isVisible)
  const topic = visibleTopics[currentIndex]
  const isLast = currentIndex === visibleTopics.length - 1
  const isFirst = currentIndex === 0
  const progress = Math.round(((currentIndex + 1) / visibleTopics.length) * 100)
  const s = levelStyles[topic.level]
  const hasTakeaway = takeaways[topic.id]

  const [xpEarned, setXpEarned] = useState(false)

  const handleNext = () => {
    if (!xpEarned) {
      setXp(prev => prev + topic.xp)
      setXpEarned(true)
    }
    setTimeout(() => setXpEarned(false), 100)
    if (isLast) {
      navigate(`/chapter/${chapterId}/complete`)
    } else {
      navigate(`/chapter/${chapterId}/topic/${currentIndex + 1}`)
    }
  }

  const handlePrev = () => {
    navigate(`/chapter/${chapterId}/topic/${currentIndex - 1}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-100 p-4 flex flex-col gap-3 shrink-0">
        <div
          className="flex items-center gap-2 pb-3 border-b border-gray-100 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-6 h-6 rounded-lg bg-gray-900 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          </div>
          <span className="text-xs font-medium text-gray-700">← Biotech Unveiled</span>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>Chapter progress</span><span>{progress}%</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full mb-2">
            <div className="h-1.5 bg-green-500 rounded-full transition-all" style={{width: `${progress}%`}}></div>
          </div>
          <div className="text-xs text-yellow-700 bg-yellow-50 px-2 py-1 rounded-full text-center font-medium">{xp} XP total</div>
        </div>

        <div className={`text-xs font-medium px-1 ${actColors[act.color]}`}>{act.name}</div>

        <div className="flex flex-col gap-1 overflow-y-auto flex-1">
          {visibleTopics.map((t, i) => (
            <div
              key={t.id}
              onClick={() => navigate(`/chapter/${chapterId}/topic/${i}`)}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all text-xs ${
                i === currentIndex
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : i < currentIndex
                    ? 'text-gray-400 hover:text-gray-600'
                    : 'text-gray-300 hover:text-gray-500'
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                i < currentIndex ? 'bg-green-400' :
                i === currentIndex ? 'bg-blue-400' : 'bg-gray-200'
              }`}></div>
              <span className="truncate">{t.title.length > 32 ? t.title.substring(0, 32) + '...' : t.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto p-6">

        {/* Top */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">{act.name} · {chapter.title}</p>
            <p className="text-xs text-gray-400 mt-0.5">Topic {currentIndex + 1} of {visibleTopics.length}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelPill[userLevel]}`}>
            {levelPillLabel[userLevel]}
          </span>
        </div>

        {/* Topic card */}
        <div className={`border rounded-2xl p-5 flex-1 flex flex-col gap-4 ${s.wrap}`}>

          {/* Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${s.tag}`}>{levelLabel[topic.level]}</span>
            <span className={`text-xs px-2 py-1 rounded-full capitalize font-medium ${typeStyles[topic.type]}`}>{topic.type}</span>
            <span className="text-xs text-gray-400 ml-auto">+{topic.xp} XP</span>
          </div>

          {/* Context note */}
          <p className="text-xs text-gray-400 italic">{topic.contextNote}</p>

          {/* Title */}
          <h2 className={`text-xl font-medium leading-snug ${s.title}`}>{topic.title}</h2>

          {/* Video */}
          {topic.type === 'video' && topic.videoUrl && (
            <VideoEmbed url={topic.videoUrl} title={topic.title} />
          )}

          {/* Content text */}
          {topic.content && topic.type !== 'quiz' && (
            <p className={`text-sm leading-relaxed ${s.body}`}>{topic.content}</p>
          )}

          {/* Quiz */}
          {topic.type === 'quiz' && (
            <QuizBlock topic={topic} s={s} />
          )}

          {/* Data */}
          {topic.type === 'data' && (
            <DataBlock topic={topic} />
          )}

          {/* Key takeaway */}
          {hasTakeaway && (
            <div className="bg-green-50 rounded-xl p-3 border border-green-100 mt-auto">
              <div className="text-xs text-green-600 font-medium uppercase tracking-wide mb-1">Key takeaway</div>
              <div className="text-sm text-green-900 leading-relaxed">{takeaways[topic.id]}</div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
              isFirst ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            ← Previous
          </button>
          <span className="text-xs text-gray-400">{currentIndex + 1} / {visibleTopics.length}</span>
          <button
            onClick={handleNext}
            className="px-5 py-2 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-all"
          >
            {isLast ? 'Complete chapter →' : 'Next →'}
          </button>
        </div>
      </div>

      <AiTutor topicTitle={topic.title} topicContent={topic.content} />
    </div>
  )
}