import { useState, useEffect, useRef } from 'react'
import { scenarios, roles } from '../data/stakeholderData.js'

const otherRoles = (role) => Object.keys(roles).filter(r => r !== role)

const rolePositions = {
  scientist:  { x: 260, y: 85  },
  investor:   { x: 430, y: 248 },
  clinician:  { x: 90,  y: 248 },
  policy:     { x: 260, y: 412 },
}
const CENTER = { x: 260, y: 248 }

function EcosystemMap({ userRole, activeRipples, completedDecisions }) {
  const roleKeys = Object.keys(roles)
  return (
    <div className="relative">
      <svg width="100%" viewBox="0 0 520 500" style={{ display: 'block' }}>
        {roleKeys.map(role => {
          const pos = rolePositions[role]
          return (
            <line key={role}
              x1={CENTER.x} y1={CENTER.y}
              x2={pos.x} y2={pos.y}
              stroke={activeRipples.includes(role) ? roles[role].color : '#D3D1C7'}
              strokeWidth={activeRipples.includes(role) ? 3.5 : 2}
              strokeDasharray={activeRipples.includes(role) ? 'none' : '6,4'}
              style={{ transition: 'all 0.4s ease' }}
            />
          )
        })}

        <circle cx={CENTER.x} cy={CENTER.y} r={44}
          fill="#F1EFE8" stroke="#888780" strokeWidth={1.5} />
        <text x={CENTER.x} y={CENTER.y - 7} textAnchor="middle"
          fontSize="15" fill="#444441" fontWeight="500">Drug</text>
        <text x={CENTER.x} y={CENTER.y + 12} textAnchor="middle"
          fontSize="15" fill="#444441" fontWeight="500">journey</text>

        {roleKeys.map(role => {
          const pos = rolePositions[role]
          const r = roles[role]
          const isUser = role === userRole
          const isActive = activeRipples.includes(role)
          const done = completedDecisions
          return (
            <g key={role}>
              <circle cx={pos.x} cy={pos.y} r={isUser ? 52 : 42}
                fill={r.bg}
                stroke={isActive ? r.color : isUser ? r.color : '#D3D1C7'}
                strokeWidth={isUser ? 3.5 : isActive ? 3 : 1.5}
                style={{ transition: 'all 0.4s ease' }}
              />
              {isActive && (
                <circle cx={pos.x} cy={pos.y} r={isUser ? 64 : 54}
                  fill="none"
                  stroke={r.color}
                  strokeWidth={2.5}
                  opacity={0.4}
                  style={{ animation: 'ripplePulse 1s ease-out' }}
                />
              )}
              <text x={pos.x} y={pos.y - 5} textAnchor="middle"
                fontSize={isUser ? 26 : 22} fill={r.text}>{r.emoji}</text>
              <text x={pos.x} y={pos.y + 16} textAnchor="middle"
                fontSize="13" fill={r.text} fontWeight="500">
                {r.label.replace('The ', '')}
              </text>
              {isUser && (
                <text x={pos.x} y={pos.y + 32} textAnchor="middle"
                  fontSize="12" fill={r.color} fontWeight="600">You</text>
              )}
              {isUser && done > 0 && (
                <text x={pos.x + (pos.x > 220 ? 24 : -24)} y={pos.y - 28}
                  textAnchor="middle" fontSize="13" fill={r.color} fontWeight="600">
                  {done}/5
                </text>
              )}
            </g>
          )
        })}
      </svg>
      <style>{`
        @keyframes ripplePulse {
          0% { opacity: 0.6; r: 28; }
          100% { opacity: 0; r: 44; }
        }
      `}</style>
    </div>
  )
}

function RippleCard({ ripple, roleKey, visible }) {
  const r = roles[roleKey]
  if (!visible || !ripple) return null
  return (
    <div className="rounded-xl p-3 border text-sm leading-relaxed"
      style={{
        background: r.bg, borderColor: r.border, color: r.text,
        animation: 'slideIn 0.3s ease-out'
      }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-60">
        {ripple.icon} {r.label} sees this as...
      </p>
      <p className="text-sm leading-relaxed">{ripple.text}</p>
      <style>{`@keyframes slideIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }`}</style>
    </div>
  )
}

export default function Stakeholder({ userRole: propRole }) {
  const [screen, setScreen] = useState('intro')
  const [selectedRole, setSelectedRole] = useState(propRole || null)
  const [currentDecision, setCurrentDecision] = useState(0)
  const [access, setAccess] = useState(100)
  const [results, setResults] = useState([])
  const [choiceMade, setChoiceMade] = useState(null)
  const [activeRipples, setActiveRipples] = useState([])
  const [showRipples, setShowRipples] = useState(false)

  const role = selectedRole
  const roleData = role ? roles[role] : null
  const myScenarios = role ? scenarios[role] : []
  const scenario = myScenarios[currentDecision]
  const others = role ? otherRoles(role) : []

  const makeChoice = (i) => {
    if (choiceMade !== null) return
    const choice = scenario.choices[i]
    setAccess(prev => Math.max(0, prev + choice.impact))
    setResults(prev => [...prev, {
      stage: scenario.stage,
      choiceText: choice.text,
      outcome: choice.outcome,
      impact: choice.impact,
      result: choice.result,
      ripples: choice.ripples,
    }])
    setChoiceMade(i)
    setTimeout(() => {
      setActiveRipples(others)
      setShowRipples(true)
    }, 400)
  }

  const nextDecision = () => {
    setChoiceMade(null)
    setActiveRipples([])
    setShowRipples(false)
    if (currentDecision + 1 >= myScenarios.length) {
      setScreen('end')
    } else {
      setCurrentDecision(prev => prev + 1)
    }
  }

  const restart = () => {
    setScreen('intro')
    setSelectedRole(propRole || null)
    setCurrentDecision(0)
    setAccess(100)
    setResults([])
    setChoiceMade(null)
    setActiveRipples([])
    setShowRipples(false)
  }

  const accessColor = access > 60 ? '#1D9E75' : access > 30 ? '#EF9F27' : '#E24B4A'

  if (screen === 'intro') return (
    <div className="rounded-2xl overflow-hidden border border-gray-200">
      <div className="px-8 pt-8 pb-6" style={{ background: '#1A3D1A' }}>
        <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
          style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
          Stakeholder
        </div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: 'white' }}>
          Every role shapes the drug journey. Yours matters most right now.
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Pick your role. Face 5 decisions only you can make. Watch in real time as your choices ripple to the scientist, investor, clinician, and policy maker — and see how the whole system responds.
        </p>
      </div>
      <div className="bg-white px-8 py-6">
        {!propRole && (
          <>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Choose your role</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {Object.entries(roles).map(([key, r]) => (
                <button key={key} onClick={() => setSelectedRole(key)}
                  className="text-left p-4 rounded-xl border-2 transition-all"
                  style={{
                    borderColor: selectedRole === key ? r.border : '#E5E7EB',
                    background: selectedRole === key ? r.bg : 'white',
                  }}>
                  <div className="text-2xl mb-2">{r.emoji}</div>
                  <div className="text-sm font-semibold mb-1"
                    style={{ color: selectedRole === key ? r.text : '#111827' }}>{r.label}</div>
                  <div className="text-xs leading-relaxed"
                    style={{ color: selectedRole === key ? r.text : '#6B7280' }}>{r.desc}</div>
                </button>
              ))}
            </div>
          </>
        )}
        {propRole && (
          <p className="text-sm text-gray-500 mb-6">
            Playing as <span className="font-semibold px-2 py-0.5 rounded-full text-xs"
              style={{ background: roleData?.bg, color: roleData?.text }}>{roleData?.label}</span>
          </p>
        )}
        <button onClick={() => role && setScreen('game')}
          className="w-full py-3 rounded-xl text-sm font-semibold transition-all"
          style={{
            background: role ? '#111827' : '#F3F4F6',
            color: role ? 'white' : '#9CA3AF',
            cursor: role ? 'pointer' : 'not-allowed',
          }}>
          Begin →
        </button>
      </div>
    </div>
  )

  if (screen === 'game') return (
    <div className="flex flex-col gap-4">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Stakeholder</span>
          <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
            style={{ background: roleData.bg, color: roleData.text }}>{roleData.label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">Patient access</span>
          <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${access}%`, background: accessColor }}></div>
          </div>
          <span className="text-sm font-semibold text-gray-700">{access}%</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="flex gap-0 items-start">
          <div className="flex-shrink-0" style={{ width: '380px' }}>
            <EcosystemMap
              userRole={role}
              activeRipples={activeRipples}
              completedDecisions={currentDecision}
            />
            <p className="text-xs text-gray-400 text-center mt-1">
              Decision {currentDecision + 1} of {myScenarios.length}
            </p>
          </div>

          <div className="self-stretch w-px bg-gray-100 mx-5 flex-shrink-0" />

          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: roleData.color }}>{scenario.stage}</p>
            <h3 className="text-base font-semibold text-gray-900 mb-3 leading-snug">{scenario.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{scenario.situation}</p>

            {choiceMade === null && (
              <div className="flex flex-col gap-2">
                {scenario.choices.map((c, i) => (
                  <button key={i} onClick={() => makeChoice(i)}
                    className="text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:border-gray-400 hover:bg-gray-50"
                    style={{ borderColor: '#E5E7EB', color: '#374151' }}>
                    {c.text}
                  </button>
                ))}
              </div>
            )}

            {choiceMade !== null && (
              <div className="flex flex-col gap-3">
                <div className="px-4 py-3 rounded-xl border-2 text-sm font-medium"
                  style={{
                    borderColor: scenario.choices[choiceMade].outcome === 'bad' ? '#E24B4A'
                      : scenario.choices[choiceMade].outcome === 'good' ? '#1D9E75' : '#EF9F27',
                    background: scenario.choices[choiceMade].outcome === 'bad' ? '#FCEBEB'
                      : scenario.choices[choiceMade].outcome === 'good' ? '#E1F5EE' : '#FAEEDA',
                    color: scenario.choices[choiceMade].outcome === 'bad' ? '#501313'
                      : scenario.choices[choiceMade].outcome === 'good' ? '#085041' : '#412402',
                  }}>
                  {scenario.choices[choiceMade].text}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {scenario.choices[choiceMade].result}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showRipples && choiceMade !== null && (
        <div className="flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Your decision ripples to...
          </p>
          {others.map(otherRole => (
            <RippleCard
              key={otherRole}
              roleKey={otherRole}
              ripple={scenario.choices[choiceMade].ripples[otherRole]}
              visible={true}
            />
          ))}
          <button onClick={nextDecision}
            className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-all hover:opacity-90 mt-1"
            style={{ background: '#111827' }}>
            {currentDecision + 1 >= myScenarios.length ? 'See your full impact →' : 'Next decision →'}
          </button>
        </div>
      )}
    </div>
  )

  if (screen === 'end') return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">
            {access > 70 ? '✅' : access > 40 ? '⚠️' : '❌'}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Your impact as {roleData.label}</h2>
          <p className="text-sm text-gray-500">
            Your decisions contributed to <strong className="text-gray-900">{access}%</strong> patient access.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          {results.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-start mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{r.stage}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  r.outcome === 'good' ? 'bg-emerald-100 text-emerald-800'
                  : r.outcome === 'bad' ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'}`}>
                  {r.impact === 0 ? 'No loss' : `${r.impact}% access`}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-800 mb-1">{r.choiceText}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{r.result}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl p-4 mb-4" style={{ background: roleData.bg, color: roleData.text }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">The bigger picture</p>
          <p className="text-sm leading-relaxed">
            {access > 70
              ? `As ${roleData.label}, your decisions protected patient access while keeping the innovation engine running. The other stakeholders felt your choices — and in this simulation, they benefited from them. The system worked because you understood your role in it.`
              : access > 40
              ? `As ${roleData.label}, your decisions had real consequences for the other stakeholders. Some choices protected access. Others constrained it. The system is interconnected — every decision you make ripples further than you can see in the moment.`
              : `As ${roleData.label}, several decisions had significant negative ripple effects on the broader ecosystem. This isn't a failure of intent — it's a reflection of how complex the tradeoffs are. The stakeholders who depend on your decisions experienced those tradeoffs directly.`
            }
          </p>
        </div>

        <button onClick={restart}
          className="w-full py-2.5 border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-all">
          Play as a different role
        </button>
      </div>
    </div>
  )

  return null
}
