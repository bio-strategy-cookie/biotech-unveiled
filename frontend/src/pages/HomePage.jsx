import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const roles = [
  {
    id: 'investor',
    label: 'The Investor',
    desc: 'You deploy capital. Every decision is about risk vs return.',
    dot: '#214C91',
    bg: '#EEEDFE',
    image: '/Investor.png',
  },
  {
    id: 'scientist',
    label: 'The Scientist',
    desc: 'You discovered something. Can you get it to patients?',
    dot: '#214C91',
    bg: '#EEF2FA',
    image: '/Scientist.png',
  },
  {
    id: 'clinician',
    label: 'The Clinician',
    desc: 'You treat patients. You need better options — now.',
    dot: '#C45A44',
    bg: '#F8DCD6',
    image: '/Clinician.png',
  },
  {
    id: 'policy',
    label: 'The Policy Maker',
    desc: "You set the rules. Every decision affects millions. One decision can determine who gets access — and who doesn't.",
    dot: '#854F0B',
    bg: '#FAEEDA',
    image: '/policymaker.webp',
  },
]

const valueProps = [
  { icon: '/System.svg',         title: 'Understand the full system',        desc: 'From molecule to market—every stage, every player, and why the system works the way it does.' },
  { icon: '/Speak.svg',          title: "Speak every stakeholder's language", desc: 'Understand the incentives of investors, clinicians, regulators, and payers—and how to work across them.' },
  { icon: '/Price_Access.svg',   title: 'Navigate price & access debates',   desc: 'Understand the Biotech Social Contract and distinguish sound reform from oversimplified solutions.' },
  { icon: '/Investor.svg',       title: 'Think like an investor',            desc: 'Learn NPV, portfolio logic, and why some critical drugs never get funded.' },
  { icon: '/Health_Insurance.svg', title: 'Understand the insurance system', desc: "Why FDA approval doesn't guarantee access—and what actually determines it." },
  { icon: '/Advocate.svg',       title: 'Be a more effective advocate',      desc: 'Make decisions and support policies that lead to real patient impact.' },
]

const stages = [
  {
    num: 1,
    color: 'blue',
    name: 'Stage 1 — The Problem',
    tagline: 'What problem are you solving — and for whom?',
    desc: 'Do you pursue a rare disease with high unmet need, or a common disease with broader impact?',
    chapters: ['Ch 0: Welcome', 'Ch 1: Why develop drugs?', 'Ch 2: Where drugs come from'],
    chapterIds: [0, 1, 2],
    icon: '🧪',
    headerBg: '#EEF2FA',
    headerBorder: '#D0DAF0',
    iconBg: '#D0DAF0',
    nameColor: '#214C91',
    pillBg: '#EEF2FA',
    pillColor: '#214C91',
  },
  {
    num: 2,
    color: 'cobalt',
    name: 'Stage 2 — The Trial',
    tagline: 'Bringing a drug to approval can take a decade and still fail.',
    desc: 'Bringing a drug from discovery to approval can cost ~$2.6–$2.9B, take over a decade, and still has only ~1% chance of success. Do you keep going?',
    chapters: ['Ch 3: All about the money', 'Ch 4: Why drugs cost so much', 'Ch 5: Brand to generic'],
    chapterIds: [3, 4, 5],
    icon: '💰',
    headerBg: '#D0DAF0',
    headerBorder: '#B0C0E8',
    iconBg: '#B0C0E8',
    nameColor: '#1A4D8C',
    pillBg: '#B0C0E8',
    pillColor: '#0F2D5A',
  },
  {
    num: 3,
    color: 'navy',
    name: 'Stage 3 — The Trade-Off',
    tagline: 'FDA approved. Now comes the hardest decision.',
    desc: 'Do you price at $300K to sustain future innovation — or $80K to maximize patient access?',
    chapters: ['Ch 6: Why insurance matters', 'Ch 7: Problems with insurance', 'Ch 8–9: Policy & wrap-up'],
    chapterIds: [6, 7, 8],
    icon: '⚖️',
    headerBg: '#B0C0E8',
    headerBorder: '#8099D4',
    iconBg: '#596CA6',
    nameColor: '#0F2D5A',
    pillBg: '#596CA6',
    pillColor: '#ffffff',
  },
]

export default function HomePage({ userLevel, setUserLevel, userRole, setUserRole, xp }) {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState(null)

  const handleStart = () => {
    if (selectedRole) {
      setUserRole(selectedRole)
      navigate('/chapter/0/topic/0')
    }
  }

  if (!userRole) {
    return (
      <div className="min-h-screen" style={{ background: '#F6F5F0' }}>

        {/* 1. Hero */}
        <div style={{ height: '60vh', overflow: 'hidden' }}>
          <img src="/hero-bg.png" alt="Biotech Unveiled"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }} />
        </div>

        {/* 2. Identity bar — deep cobalt */}
        <div style={{ background: 'linear-gradient(to bottom, #0f2d5a, #1A4D8C)' }}>
          <div className="px-10 py-8">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2" style={{ background: 'rgba(240,178,166,0.18)', border: '0.5px solid rgba(240,178,166,0.4)', padding: '4px 14px', borderRadius: '99px' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: '#F0B2A6' }}></div>
                <span className="text-sm" style={{ color: '#F0B2A6' }}>An RA Capital course · Peter Kolchinsky, PhD</span>
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
                className="px-7 py-3 text-base font-semibold rounded-xl transition-all"
                style={{ background: '#F0B2A6', color: '#7A3328' }}>
                Learn more ↓
              </button>
            </div>
          </div>
        </div>

        {/* Features strip */}
        <div className="grid grid-cols-3 bg-white border-b border-gray-200">
          {[
            { bg: '#EEF2FA', color: '#214C91', label: 'NPLB Chatbot', sub: 'Ask questions on every topic',  icon: '🤖' },
            { bg: '#F8DCD6', color: '#C45A44', label: 'XP + streaks', sub: 'Earn points as you progress',   icon: '⚡' },
            { bg: '#EEF2FA', color: '#214C91', label: 'Certificate',  sub: 'Pass the exam to earn yours',   icon: '🏆' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 px-5 py-5 ${i < 2 ? 'border-r border-gray-200' : ''}`}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl" style={{ background: item.bg }}>{item.icon}</div>
              <div>
                <div className="text-base font-semibold" style={{ color: item.color }}>{item.label}</div>
                <div className="text-sm text-gray-500 mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. What this course gives you — cream bg */}
        <div id="course-intro" style={{ background: '#F6F5F0' }} className="px-10 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#596CA6' }}>What this course gives you</div>
            <h2 className="text-3xl font-semibold mb-4 leading-tight" style={{ color: '#214C91' }}>A systems-level understanding of biotech</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              This course equips you with a systems-level understanding of biotech — connecting science, regulation, pricing, and policy into one coherent picture.
            </p>
            <div className="bg-white rounded-r-2xl px-7 py-6" style={{ borderLeft: '4px solid #214C91' }}>
              <div className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: '#596CA6' }}>By the end, you will be able to:</div>
              <div className="flex flex-col gap-3">
                {[
                  'Understand how a drug moves from discovery to patient access',
                  'See how decisions in one part of the system impact others',
                  'Identify where and why the system breaks down',
                  'Evaluate policy and pricing debates with real clarity',
                  'Navigate biotech beyond your silo — whether in science, business, or policy',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#F8DCD6' }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: '#E4745E' }}></div>
                    </div>
                    <span className="text-base text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Value propositions — light blue bg */}
        <div style={{ background: '#EEF2FA' }} className="px-10 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#596CA6' }}>What you will walk away with</div>
            <h2 className="text-3xl font-semibold mb-2 leading-tight" style={{ color: '#214C91' }}>A new way of seeing and navigating biotech</h2>
            <p className="text-base mb-8" style={{ color: '#596CA6' }}>Regardless of how long you have been in the industry.</p>
            <div className="grid grid-cols-3 gap-5">
              {valueProps.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5" style={{ border: '0.5px solid #D0DAF0' }}>
                  <div className="w-12 h-12 mb-4">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-base font-semibold mb-2" style={{ color: '#214C91' }}>{item.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: '#596CA6' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Who this is for — white bg, navy borders */}
        <div style={{ background: '#F6F5F0' }} className="px-10 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#596CA6' }}>Who this is for</div>
            <h2 className="text-3xl font-semibold mb-2" style={{ color: '#214C91' }}>Built for biotech professionals at every stage</h2>
            <p className="text-base font-semibold mb-2" style={{ color: '#1A4D8C' }}>Pick your role — same system, different perspective.</p>
            <p className="text-base text-gray-500 mb-8">Everyone takes the same course. But your role shapes how you see every decision.</p>
            <div className="grid grid-cols-4 gap-4">
              {roles.map(r => (
                <div key={r.id} className="rounded-2xl overflow-hidden"
                  style={{ border: '1.5px solid #214C91', background: 'white' }}>
                  {/* Image — no text overlay */}
                  <div className="h-32 overflow-hidden flex-shrink-0">
                    <img src={r.image} alt={r.label} className="w-full h-full object-cover" />
                  </div>
                  {/* Text body — flex column so stat pill always sits at bottom */}
                  <div className="p-5">
                    <div className="text-base font-semibold mb-2" style={{ color: r.dot }}>{r.label}</div>
                    <div className="text-sm text-gray-500 leading-relaxed">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. How the course works — cream bg */}
        <div style={{ background: '#F6F5F0' }} className="px-10 py-12 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#596CA6' }}>How the course works</div>
            <h2 className="text-3xl font-semibold mb-2" style={{ color: '#1A4D8C' }}>A decision-driven journey through 3 stages</h2>
            <p className="text-base text-gray-500 mb-8">Every stage puts you in the middle of a real decision. Every choice has consequences.</p>
            <div className="flex flex-col gap-5">
              {stages.map((stage, i) => {
                return (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden" style={{ border: '0.5px solid #D0DAF0' }}>
                    <div className="px-6 py-4 flex items-center gap-4 border-b"
                      style={{ background: stage.headerBg, borderColor: stage.headerBorder }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: stage.iconBg }}>{stage.icon}</div>
                      <div>
                        <div className="text-base font-semibold" style={{ color: stage.nameColor }}>{stage.name}</div>
                        <div className="text-sm text-gray-500">{stage.tagline}</div>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-base text-gray-700 leading-relaxed mb-4">{stage.desc}</p>
                      <div className="flex gap-2 flex-wrap">
                        {stage.chapters.map(ch => (
                          <span key={ch} className="text-xs px-3 py-1 rounded-full font-medium"
                            style={{ background: stage.pillBg, color: stage.pillColor }}>{ch}</span>
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
            <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#596CA6' }}>Your instructor</div>
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#1A4D8C' }}>
                <span className="text-lg font-semibold" style={{ color: '#F0B2A6' }}>PK</span>
              </div>
              <div>
                <div className="text-xl font-semibold mb-1" style={{ color: '#214C91' }}>Peter Kolchinsky, PhD</div>
                <div className="text-base text-gray-500 mb-3">Founder & Managing Partner, RA Capital Management</div>
                <div className="text-base text-gray-600 italic leading-relaxed">"Biotech deals aren't just about science — they're about navigating a socio-economic contract. This course will give you the context you need to thrive in this industry and advocate for policies that actually work."</div>
              </div>
            </div>
          </div>
        </div>

        {/* 8. CTA — role selection */}
        <div id="role-section" style={{ background: '#F6F5F0' }} className="px-10 py-14">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-3" style={{ color: '#214C91' }}>Ready to begin?</h2>
              <p className="text-base" style={{ color: '#596CA6' }}>Choose your role to personalise your experience.</p>
            </div>

            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="flex items-center gap-2 text-base font-medium" style={{ color: '#214C91' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: '#214C91', color: 'white' }}>1</div>
                Choose your role
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {roles.map(r => (
                <div key={r.id} onClick={() => setSelectedRole(r.id)}
                  className={`rounded-2xl overflow-hidden cursor-pointer transition-all ${selectedRole === r.id ? 'scale-[1.02]' : ''}`}
                  style={{
                    border: selectedRole === r.id ? '2.5px solid #214C91' : '1.5px solid #214C91',
                    background: 'white',
                    boxShadow: selectedRole === r.id ? '0 0 0 3px rgba(33,76,145,0.15)' : 'none',
                  }}>
                  {/* Image only — no text overlay */}
                  <div className="h-40 overflow-hidden flex-shrink-0">
                    <img src={r.image} alt={r.label} className="w-full h-full object-cover" />
                  </div>
                  {/* Text body — stat pill always at bottom */}
                  <div className="p-5">
                    <div className="text-lg font-semibold mb-2" style={{ color: '#214C91' }}>{r.label}</div>
                    <div className="text-sm leading-relaxed" style={{ color: '#596CA6' }}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleStart}
              className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${selectedRole ? 'text-white' : 'cursor-not-allowed'}`}
              style={selectedRole ? { background: '#214C91' } : { background: '#D0DAF0', color: '#596CA6' }}>
              Begin my journey →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={{ background: '#1A4D8C', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#F0B2A6' }}></div>
            </div>
            <span className="text-sm font-medium text-white">RA Capital Management</span>
          </div>
          <span className="text-xs text-gray-400">© 2026 RA Capital. All rights reserved.</span>
        </div>

      </div>
    )
  }

  const roleLabel = roles.find(r => r.id === userRole)?.label || 'Learner'

  return (
    <div className="min-h-screen" style={{ background: '#F6F5F0' }}>
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#1A4D8C' }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#F0B2A6' }}></div>
          </div>
          <span className="text-sm font-semibold" style={{ color: '#214C91' }}>Biotech Unveiled</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: '#EEF2FA', color: '#214C91' }}>{roleLabel}</span>
          <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: '#F8DCD6', color: '#C45A44' }}>{xp} XP</span>
          <button onClick={() => setUserRole(null)} className="text-xs text-gray-400 hover:text-gray-600">← Change</button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-10">
        <h1 className="text-3xl font-semibold mb-2" style={{ color: '#214C91' }}>Your biotech journey</h1>
        <p className="text-base text-gray-500 mb-8">Three stages. Every decision has consequences.</p>

        <div className="flex flex-col gap-0">
          {stages.map((stage, i) => {
            const isAvailable = i === 0
            const isLocked = i > 0
            return (
              <div key={stage.num}>
                <div className={`bg-white border rounded-2xl overflow-hidden transition-all ${isLocked ? 'opacity-50' : 'hover:shadow-sm'}`}
                  style={{ borderColor: '#D0DAF0' }}>
                  <div className="px-6 py-4 flex items-center gap-4 border-b"
                    style={{ background: stage.headerBg, borderColor: stage.headerBorder }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: stage.iconBg }}>{stage.icon}</div>
                    <div className="flex-1">
                      <div className="text-base font-semibold" style={{ color: stage.nameColor }}>{stage.name}</div>
                      <div className="text-sm text-gray-500">{stage.tagline}</div>
                    </div>
                    {isLocked && <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-medium">Locked</span>}
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{stage.desc}</p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {stage.chapters.map(ch => (
                        <span key={ch} className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ background: stage.pillBg, color: stage.pillColor }}>{ch}</span>
                      ))}
                    </div>
                    {isAvailable && (
                      <button onClick={() => navigate(`/chapter/${stage.chapterIds[0]}/topic/0`)}
                        className="px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-all"
                        style={{ background: '#214C91' }}
                        onMouseOver={e => e.target.style.background='#1A4D8C'}
                        onMouseOut={e => e.target.style.background='#214C91'}>
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

        <div className="mt-8 rounded-2xl p-6 flex items-center justify-between" style={{ background: '#1A4D8C' }}>
          <div>
            <div className="text-base font-semibold text-white mb-1">Complete all 3 stages + pass the final exam</div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Your certificate is waiting. Score ≥70% to unlock it.</div>
          </div>
          <div className="text-3xl">🏆</div>
        </div>

        <div className="mt-6 rounded-2xl px-6 py-4 flex items-center justify-between" style={{ background: '#1A4D8C' }}>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#F0B2A6' }}></div>
            </div>
            <span className="text-sm font-medium text-white">RA Capital Management</span>
          </div>
          <span className="text-xs text-gray-400">© 2026 RA Capital. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}
