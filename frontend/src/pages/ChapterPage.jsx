import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import chapter0 from '../data/chapter0Data.js'
import chapter1 from '../data/chapter1Data.js'
import chapter2 from '../data/chapter2Data.js'
import chapter3 from '../data/chapter3Data.js'

const chapters = { 0: chapter0, 1: chapter1, 2: chapter2, 3: chapter3 }

const typeColors = {
  video: 'bg-purple-100 text-purple-800',
  reading: 'bg-gray-100 text-gray-700',
  quiz: 'bg-teal-100 text-teal-800',
  data: 'bg-blue-100 text-blue-800',
  summary: 'bg-orange-100 text-orange-800'
}

const levelStyles = {
    green: { wrap: 'bg-white border-gray-200', tag: 'bg-green-100 text-green-800', title: 'text-gray-800', body: 'text-gray-600' },
    yellow: { wrap: 'bg-white border-gray-200', tag: 'bg-yellow-100 text-yellow-800', title: 'text-gray-800', body: 'text-gray-600' },
    red: { wrap: 'bg-white border-gray-200', tag: 'bg-red-100 text-red-800', title: 'text-gray-800', body: 'text-gray-600' },
  }

const levelLabel = { green: 'Foundational', yellow: 'Intermediate', red: 'Advanced' }

export default function ChapterPage({ userLevel, xp, setXp }) {
  const { chapterId, topicIndex } = useParams()
  const navigate = useNavigate()
  const chapter = chapters[chapterId]
  const currentIndex = parseInt(topicIndex)

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

  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleNext = () => {
    setXp(prev => prev + topic.xp)
    setAnswered(false)
    setSelectedAnswer(null)
    if (isLast) {
      navigate(`/chapter/${chapterId}/complete`)
    } else {
      navigate(`/chapter/${chapterId}/topic/${currentIndex + 1}`)
    }
  }

  const handlePrev = () => {
    setAnswered(false)
    setSelectedAnswer(null)
    navigate(`/chapter/${chapterId}/topic/${currentIndex - 1}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-200 p-4 flex flex-col gap-3 shrink-0">
        <div className="text-sm font-medium text-gray-800 pb-2 border-b border-gray-100 cursor-pointer" onClick={() => navigate('/')}>
          ← Biotech Unveiled
        </div>
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Chapter progress</span><span>{progress}%</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full mb-1">
            <div className="h-1.5 bg-green-500 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="text-xs text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded-full text-center mt-1">{xp} XP total</div>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <div className="text-gray-400 px-2 mb-1">Topics</div>
          {visibleTopics.map((t, i) => (
            <div
              key={t.id}
              onClick={() => navigate(`/chapter/${chapterId}/topic/${i}`)}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all ${i === currentIndex ? 'bg-gray-100 text-gray-800 font-medium' : i < currentIndex ? 'text-gray-400' : 'text-gray-300'}`}
            >
              <div className={`w-2 h-2 rounded-full shrink-0 ${i < currentIndex ? 'bg-green-400' : i === currentIndex ? 'bg-blue-400' : 'bg-gray-200'}`}></div>
              <span className="truncate">{t.title.length > 30 ? t.title.substring(0, 30) + '...' : t.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">{chapter.title}</p>
            <p className="text-xs text-gray-400">Topic {currentIndex + 1} of {visibleTopics.length}</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">{userLevel === 'green' ? 'Clinical/Research' : userLevel === 'yellow' ? 'Industry Adjacent' : 'Deep Industry'}</span>
        </div>

        {/* Topic card */}
        <div className={`border rounded-xl p-5 flex-1 ${s.wrap}`}>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.tag}`}>{levelLabel[topic.level]}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${typeColors[topic.type]}`}>{topic.type}</span>
            <span className="text-xs text-gray-400 ml-auto">+{topic.xp} XP</span>
          </div>
          <p className="text-xs text-gray-500 italic mb-3">{topic.contextNote}</p>
          <h2 className={`text-lg font-medium mb-3 ${s.title}`}>{topic.title}</h2>

          {topic.type === 'video' && (
            <div className="bg-white rounded-lg h-20 flex items-center justify-center border border-gray-200 mb-3">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-1">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-white ml-1"></div>
                </div>
                <p className="text-xs text-gray-400">Video content</p>
              </div>
            </div>
          )}

          {topic.content && (
            <p className={`text-sm leading-relaxed ${s.body}`}>{topic.content}</p>
          )}

          {topic.type === 'quiz' && topic.questions && (
            <div className="mt-4 space-y-4">
              {topic.questions.map((q, qi) => (
                <div key={qi} className="bg-white rounded-lg p-3 border border-gray-100">
                  <p className={`text-sm font-medium mb-2 ${s.title}`}>{q.question}</p>
                  <div className="flex flex-col gap-2">
                    {q.options.map((opt, oi) => (
                      <button
                        key={oi}
                        onClick={() => { setSelectedAnswer({qi, oi}); setAnswered(true) }}
                        className={`text-xs px-3 py-2 rounded-lg border text-left transition-all ${
                          answered && selectedAnswer?.qi === qi
                            ? oi === q.correct
                              ? 'bg-green-100 border-green-400 text-green-800'
                              : oi === selectedAnswer?.oi
                                ? 'bg-red-100 border-red-400 text-red-800'
                                : 'border-gray-200 text-gray-400'
                            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {topic.type === 'data' && topic.stats && (
            <div className="mt-3 space-y-2">
              {topic.stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center bg-white rounded-lg px-3 py-2 border border-gray-100">
                  <span className="text-xs text-gray-600">{stat.label}</span>
                  <span className="text-sm font-medium text-gray-800">{stat.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrev}
            disabled={isFirst}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${isFirst ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
          >
            ← Previous
          </button>
          <span className="text-xs text-gray-400">{currentIndex + 1} / {visibleTopics.length}</span>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-all"
          >
            {isLast ? 'Complete chapter →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  )
}