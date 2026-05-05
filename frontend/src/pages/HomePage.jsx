import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const roles = [
  {
    id: 'investor',
    label: 'The Investor',
    desc: 'You deploy capital. Every decision is about risk vs return.',
    dot: '#534AB7',
    bg: '#EEEDFE',
    emoji: '📈',
    visual: 'M10 80 L25 60 L40 70 L55 40 L70 50 L85 20 L100 30',
    visualColor: '#534AB7',
    stat: '$2.87B average drug cost',
  },
  {
    id: 'scientist',
    label: 'The Scientist',
    desc: 'You discovered something. Can you get it to patients?',
    dot: '#1D9E75',
    bg: '#E1F5EE',
    emoji: '🔬',
    visual: 'M10 50 Q30 20 50 50 Q70 80 90 50',
    visualColor: '#1D9E75',
    stat: '10-15 years from lab to shelf',
  },
  {
    id: 'clinician',
    label: 'The Clinician',
    desc: 'You treat patients. You need better options — now.',
    dot: '#185FA5',
    bg: '#E6F1FB',
    emoji: '🏥',
    visual: 'M50 10 L50 90 M10 50 L90 50',
    visualColor: '#185FA5',
    stat: '1 in 10 drugs reaches patients',
  },
  {
    id: 'policy',
    label: 'The Policy Maker',
    desc: "You set the rules. Every decision affects millions. One decision can determine who gets access — and who doesn't.",
    dot: '#854F0B',
    bg: '#FAEEDA',
    emoji: '⚖️',
    visual: 'M10 90 L30 60 L50 70 L70 30 L90 40',
    visualColor: '#EF9F27',
    stat: 'Policy shapes patient access',
  },
]

const valueProps = [
  { icon: '🧠', title: 'Understand the full system', desc: 'From molecule to market—every stage, every player, and why the system works the way it does.' },
  { icon: '💬', title: "Speak every stakeholder's language", desc: 'Understand the incentives of investors, clinicians, regulators, and payers—and how to work across them.' },
  { icon: '⚖️', title: 'Navigate price & access debates', desc: 'Understand the Biotech Social Contract and distinguish sound reform from oversimplified solutions.' },
  { icon: '💰', title: 'Think like an investor', desc: 'Learn NPV, portfolio logic, and why some critical drugs never get funded.' },
  { icon: '🏥', title: 'Understand the insurance system', desc: "Why FDA approval doesn't guarantee access—and what actually determines it." },
  { icon: '🚀', title: 'Be a more effective advocate', desc: 'Make decisions and support policies that lead to real patient impact.' },
]

const stages = [
  {
    num: 1,
    color: 'green',
    name: 'Stage 1 — The Problem',
    tagline: 'What problem are you solving — and for whom?',
    desc: 'Do you pursue a rare disease with high unmet need, or a common disease with broader impact?',
    chapters: ['Ch 0: Welcome', 'Ch 1: Why develop drugs?', 'Ch 2: Where drugs come from'],
    chapterIds: [0, 1, 2],
    icon: '🧪',
  },
  {
    num: 2,
    color: 'purple',
    name: 'Stage 2 — The Trial',
    tagline: 'Bringing a drug to approval can take a decade and still fail.',
    desc: 'Bringing a drug from discovery to approval can cost ~$2.6–$2.9B, take over a decade, and still has only ~1% chance of success. Do you keep going? Do you invest in large, costly Phase III trials — or move toward the FDA with the evidence you have?',
    chapters: ['Ch 3: All about the money', 'Ch 4: Why drugs cost so much', 'Ch 5: Brand to generic'],
    chapterIds: [3, 4, 5],
    icon: '💰',
  },
  {
    num: 3,
    color: 'amber',
    name: 'Stage 3 — The Trade-Off',
    tagline: 'FDA approved. Now comes the hardest decision.',
    desc: 'Do you price at $300K to sustain future innovation — or $80K to maximize patient access?',
    chapters: ['Ch 6: Why insurance matters', 'Ch 7: Problems with insurance', 'Ch 8–9: Policy & wrap-up'],
    chapterIds: [6, 7, 8],
    icon: '⚖️',
  },
]

const stageColors = {
  green:  { num: 'bg-green-100 text-green-800',   label: 'text-green-700',  border: 'border-green-200' },
  purple: { num: 'bg-purple-100 text-purple-800', label: 'text-purple-700', border: 'border-purple-200' },
  amber:  { num: 'bg-yellow-100 text-yellow-800', label: 'text-yellow-700', border: 'border-yellow-200' },
}

export default function HomePage({ userLevel, setUserLevel, userRole, setUserRole, xp }) {
  const navigate = useNavigate()

  const handleStart = () => {
    if (userRole) navigate('/chapter/0/topic/0')
  }

  if (!userRole) {
    return (
      <div className="min-h-screen bg-gray-50">

        {/* 1. Hero */}
        <div style={{ height: '60vh', overflow: 'hidden' }}>
          <img src="/hero-bg.png" alt="Biotech Unveiled"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
        </div>

        {/* 2. Identity bar */}
        <div style={{ background: 'linear-gradient(to bottom, #0a1628, #111827)' }}>
          <div className="px-10 py-8">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2" style={{ background: 'rgba(93,202,165,0.15)', border: '0.5px solid rgba(93,202,165,0.35)', padding: '4px 14px', borderRadius: '99px' }}>
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span className="text-sm text-teal-300">An RA Capital course · Peter Kolchinsky, PhD</span>
              </div>
            </div>
            <div className="flex justify-center gap-10 flex-wrap">
              {[['9', 'Chapters'], ['152', 'Lessons'], ['6–10h', 'Study time'], ['AI', 'Tutor'], ['🏆', 'Certificate'], ['Free', 'To access']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-semibold text-white">{num}</div>
                  <div className="text-sm text-white font-medium mt-1">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => document.getElementById('course-intro').scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 bg-teal-400 text-gray-900 text-base font-semibold rounded-xl hover:bg-teal-300 transition-all">
                Learn more ↓
              </button>
            </div>
          </div>
        </div>

        {/* Features strip */}
        <div className="grid grid-cols-3 bg-white border-b border-gray-200">
          {[
            { bg: 'bg-purple-50', color: 'text-purple-700', label: 'AI tutor',              sub: 'Ask questions on every topic',    icon: '🤖' },
            { bg: 'bg-yellow-50', color: 'text-yellow-700', label: 'XP + streaks',          sub: 'Earn points as you progress',     icon: '⚡' },
            { bg: 'bg-blue-50',   color: 'text-blue-700',   label: 'Certificate',           sub: 'Pass the exam to earn yours',     icon: '🏆' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 px-5 py-5 ${i < 3 ? 'border-r border-gray-200' : ''}`}>
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 text-xl`}>{item.icon}</div>
              <div>
                <div className={`text-base font-semibold ${item.color}`}>{item.label}</div>
                <div className="text-sm text-gray-500 mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. What this course gives you */}
        <div id="course-intro" className="bg-white px-10 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">What this course gives you</div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 leading-tight">A systems-level understanding of biotech</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This course equips you with a systems-level understanding of biotech — connecting science, regulation, pricing, and policy into one coherent picture.
            </p>
            <div className="bg-gray-50 border-l-4 border-teal-500 rounded-r-2xl px-7 py-6">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">By the end, you will be able to:</div>
              <div className="flex flex-col gap-3">
                {[
                  'Understand how a drug moves from discovery to patient access',
                  'See how decisions in one part of the system impact others',
                  'Identify where and why the system breaks down',
                  'Evaluate policy and pricing debates with real clarity',
                  'Navigate biotech beyond your silo — whether in science, business, or policy',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Value propositions */}
        <div className="bg-gray-900 px-10 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-white/40 uppercase tracking-widest mb-3 font-medium">What you will walk away with</div>
            <h2 className="text-3xl font-semibold text-white mb-2 leading-tight">A new way of seeing and navigating biotech</h2>
            <p className="text-base text-white/50 mb-8">Regardless of how long you have been in the industry.</p>
            <div className="grid grid-cols-3 gap-5">
              {valueProps.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-base font-semibold text-white mb-2">{item.title}</div>
                  <div className="text-sm text-white/60 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Who this is for */}
        <div className="bg-white px-10 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">Who this is for</div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Built for biotech professionals at every stage</h2>
            <p className="text-base font-semibold text-gray-800 mb-2">Pick your role — same system, different perspective.</p>
            <p className="text-base text-gray-500 mb-8">Everyone takes the same course. But your role shapes how you see every decision and reveals how others would approach it differently..</p>
            <div className="grid grid-cols-4 gap-4">
              {roles.map(r => (
                <div key={r.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="h-24 flex items-center justify-center text-4xl" style={{ background: r.bg }}>{r.emoji}</div>
                  <div className="p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{r.label}</div>
                    <div className="text-xs text-gray-500 leading-relaxed mb-2">{r.desc}</div>
                    <div className="text-xs font-medium px-2 py-1 rounded-full inline-block" style={{ background: r.bg, color: r.dot }}>{r.stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. How the course works */}
        <div className="bg-gray-50 px-10 py-12 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">How the course works</div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">A decision-driven journey through 3 stages</h2>
            <p className="text-base text-gray-500 mb-8">Every stage puts you in the middle of a real decision. Every choice has consequences.</p>
            <div className="flex flex-col gap-5">
              {stages.map((stage, i) => {
                const c = stageColors[stage.color]
                return (
                  <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <div className={`px-6 py-4 flex items-center gap-4 border-b ${c.border} bg-gray-50`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${c.num}`}>{stage.icon}</div>
                      <div>
                        <div className={`text-base font-semibold ${c.label}`}>{stage.name}</div>
                        <div className="text-sm text-gray-500">{stage.tagline}</div>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-base text-gray-700 leading-relaxed mb-4">{stage.desc}</p>
                      <div className="flex gap-2 flex-wrap">
                        {stage.chapters.map(ch => (
                          <span key={ch} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{ch}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* 7. Peter */}
        <div className="bg-white px-10 py-10 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-6 font-medium">Your instructor</div>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-teal-400">PK</span>
              </div>
              <div>
                <div className="text-xl font-semibold text-gray-900">Peter Kolchinsky, PhD</div>
                <div className="text-base text-gray-500 mb-3">Founder & Managing Partner, RA Capital Management</div>
                <div className="text-base text-gray-600 italic leading-relaxed">"Biotech deals aren't just about science — they're about navigating a socio-economic contract. This course will give you the context you need to thrive in this industry and advocate for policies that actually work."</div>
              </div>
            </div>
          </div>
        </div>

        {/* 8. CTA — role selection only */}
        <div id="role-section" className="bg-gray-900 px-10 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-white mb-3">Ready to begin?</h2>
              <p className="text-base text-white/60">Choose your role to personalise your experience.</p>
            </div>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 text-base text-white font-medium">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium bg-teal-400 text-gray-900">1</div>
                Choose your role
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {roles.map(r => (
                  <div key={r.id} onClick={() => setUserRole(r.id)}
                    className={`border-2 rounded-2xl overflow-hidden cursor-pointer transition-all ${userRole === r.id ? 'border-teal-400' : 'border-white/10 hover:border-white/30'}`}>
                    <div className="h-24 relative flex items-center justify-center" style={{ background: r.bg }}>
                      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20">
                        <path d={r.visual} fill="none" stroke={r.visualColor} strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-5xl relative z-10">{r.emoji}</span>
                      <div className="absolute bottom-2 right-2 left-2 text-center text-xs font-medium px-2 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.85)', color: r.dot }}>{r.stat}</div>
                    </div>
                    <div className="p-4 bg-white/5">
                      <div className="text-base font-semibold text-white mb-1">{r.label}</div>
                      <div className="text-sm text-white/60 leading-relaxed">{r.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={handleStart}
                className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${userRole ? 'bg-teal-400 text-gray-900 hover:bg-teal-300' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}>
                Begin my journey →
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 border-t border-white/10 px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gray-700 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            </div>
            <span className="text-sm font-medium text-white">RA Capital Management</span>
          </div>
          <span className="text-xs text-gray-500">© 2026 RA Capital. All rights reserved.</span>
        </div>

      </div>
    )
  }

  const roleLabel = roles.find(r => r.id === userRole)?.label || 'Learner'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
          </div>
          <span className="text-sm font-semibold text-gray-800">Biotech Unveiled</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-medium">{roleLabel}</span>
          <span className="text-xs px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 font-medium">{xp} XP</span>
          <button onClick={() => setUserRole(null)} className="text-xs text-gray-400 hover:text-gray-600">← Change</button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-10">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Your biotech journey</h1>
        <p className="text-base text-gray-500 mb-8">Three stages. Every decision has consequences. The story ends only when you bring your drug to market.</p>

        <div className="flex flex-col gap-0">
          {stages.map((stage, i) => {
            const c = stageColors[stage.color]
            const isAvailable = i === 0
            const isLocked = i > 0
            return (
              <div key={stage.num}>
                <div className={`bg-white border rounded-2xl overflow-hidden transition-all ${isLocked ? 'opacity-50' : 'hover:shadow-sm'} border-gray-200`}>
                  <div className={`px-6 py-4 flex items-center gap-4 border-b ${c.border} bg-gray-50`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${c.num}`}>{stage.icon}</div>
                    <div className="flex-1">
                      <div className={`text-base font-semibold ${c.label}`}>{stage.name}</div>
                      <div className="text-sm text-gray-500">{stage.tagline}</div>
                    </div>
                    {isLocked && <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-medium">Locked</span>}
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{stage.desc}</p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {stage.chapters.map(ch => (
                        <span key={ch} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{ch}</span>
                      ))}
                    </div>
                    {isAvailable && (
                      <button onClick={() => navigate(`/chapter/${stage.chapterIds[0]}/topic/0`)}
                        className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-700 transition-all">
                        Start Stage {stage.num} →
                      </button>
                    )}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-px h-6 bg-gray-200"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-8 bg-gray-900 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="text-base font-semibold text-white mb-1">Complete all 3 stages + pass the final exam</div>
            <div className="text-sm text-white/50">Your certificate is waiting. Score ≥70% to unlock it.</div>
          </div>
          <div className="text-3xl">🏆</div>
        </div>

        <div className="mt-6 bg-gray-900 rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gray-700 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            </div>
            <span className="text-sm font-medium text-white">RA Capital Management</span>
          </div>
          <span className="text-xs text-gray-500">© 2026 RA Capital. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}
