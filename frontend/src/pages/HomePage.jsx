import { useNavigate } from 'react-router-dom'
import chapter0 from '../data/chapter0Data.js'
import chapter1 from '../data/chapter1Data.js'
import chapter2 from '../data/chapter2Data.js'
import chapter3 from '../data/chapter3Data.js'

const chapters = [chapter0, chapter1, chapter2, chapter3]

const levelColors = {
  green: { border: 'border-green-400', bg: 'bg-green-50', pill: 'bg-green-100 text-green-800' },
  yellow: { border: 'border-yellow-400', bg: 'bg-yellow-50', pill: 'bg-yellow-100 text-yellow-800' },
  red: { border: 'border-red-400', bg: 'bg-red-50', pill: 'bg-red-100 text-red-800' },
}

export default function HomePage({ userLevel, setUserLevel, xp }) {
  const navigate = useNavigate()

  const levels = [
    {
      id: 'green',
      label: 'Clinical or research background',
      desc: 'I understand the science but am newer to how the business and regulatory side of drug development works.',
      shows: 'Foundational industry context',
      examples: 'e.g. oncologists, researchers, scientists'
    },
    {
      id: 'yellow',
      label: 'Industry adjacent',
      desc: 'I have worked in or around biopharma but want a more complete picture of the full landscape.',
      shows: 'Foundational + intermediate content',
      examples: 'e.g. BD professionals, investors, early regulatory'
    },
    {
      id: 'red',
      label: 'Deep industry experience',
      desc: 'I work in drug development, regulatory affairs, or finance and want the advanced detail.',
      shows: 'All content including advanced topics',
      examples: 'e.g. senior industry, experienced investors, regulatory experts'
    },
  ]

  if (!userLevel) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to Biotech Unveiled</h1>
          <p className="text-gray-500 text-sm mb-6">Tell us your background so we can show you the right level of content. You can always reveal more on any page.</p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {levels.map(l => (
              <div
                key={l.id}
                onClick={() => setUserLevel(l.id)}
                className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-sm ${levelColors[l.id].border} ${levelColors[l.id].bg}`}
              >
                <div className={`w-7 h-7 rounded-full mb-3 flex items-center justify-center ${levelColors[l.id].bg}`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${l.id === 'green' ? 'bg-green-500' : l.id === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                </div>
                <div className="text-sm font-medium text-gray-800 mb-1">{l.label}</div>
                <div className="text-xs text-gray-500 mb-1">{l.desc}</div>
                <div className="text-xs text-gray-400 italic mb-2">{l.examples}</div>
                <span className={`text-xs px-2 py-1 rounded-full ${levelColors[l.id].pill}`}>{l.shows}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-200 p-4 flex flex-col gap-3 shrink-0">
        <div className="text-sm font-medium text-gray-800 pb-2 border-b border-gray-100">Biotech Unveiled</div>
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <div className="text-xs text-gray-500 mb-1">Total XP earned</div>
          <div className="text-lg font-medium text-gray-800">{xp} XP</div>
        </div>
        <button onClick={() => setUserLevel(null)} className="text-xs text-gray-400 text-left hover:text-gray-600">← Change level</button>
      </div>

      {/* Chapter grid */}
      <div className="flex-1 p-8">
        <h1 className="text-xl font-medium text-gray-800 mb-1">Your courses</h1>
        <p className="text-sm text-gray-400 mb-6">Select a chapter to begin</p>
        <div className="grid grid-cols-2 gap-4 max-w-3xl">
          {chapters.map((ch, i) => (
            <div
              key={ch.id}
              onClick={() => navigate(`/chapter/${i}/topic/0`)}
              className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-gray-400 hover:shadow-sm transition-all"
            >
              <div className="text-xs text-gray-400 mb-1">Chapter {i}</div>
              <div className="text-sm font-medium text-gray-800 mb-1">{ch.title}</div>
              <div className="text-xs text-gray-500 mb-3">{ch.subtitle}</div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">{ch.estimatedTime}</span>
                <span className="text-xs text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded-full">{ch.maxXP} XP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}