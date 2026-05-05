import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ChapterPage from './pages/ChapterPage.jsx'
import DecisionPage from './pages/DecisionPage.jsx'

function ChapterCompleteScreen({ userRole }) {
  const { chapterId } = useParams()
  const navigate = useNavigate()
  const id = parseInt(chapterId)

  const nextChapterMap = { 0: 1, 1: 2, 3: 4, 4: 5, 6: 7, 7: 8 }
  const decisionMap = { 2: 1, 5: 2, 8: 3 }

  const handleNext = () => {
    if (decisionMap[id]) {
      navigate(`/decision/${decisionMap[id]}`)
    } else if (nextChapterMap[id] !== undefined) {
      navigate(`/chapter/${nextChapterMap[id]}/topic/0`)
    } else {
      navigate('/')
    }
  }

  const chapterNames = {
    0: 'Welcome',
    1: 'Why develop new drugs?',
    2: 'Where do new drugs come from?',
    3: 'All about the money',
    4: 'Why drugs cost so much',
    5: 'Brand to generic',
    6: 'Why insurance matters',
    7: 'Problems with insurance',
    8: 'Confronting the threat',
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md px-8">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Chapter complete!</h2>
        <p className="text-gray-500 mb-6">
          You finished <span className="font-medium text-gray-700">{chapterNames[id]}</span>. Keep going!
        </p>
        {decisionMap[id] ? (
          <div className="bg-gray-900 rounded-2xl p-5 mb-6 text-left">
            <div className="text-xs text-teal-400 uppercase tracking-wide mb-2 font-medium">Decision point ahead</div>
            <p className="text-white text-sm leading-relaxed">
              You've completed this stage. Now comes a key decision that will shape the rest of your journey.
            </p>
          </div>
        ) : null}
        <button
          onClick={handleNext}
          className="w-full py-3.5 bg-gray-900 text-white text-base font-semibold rounded-xl hover:bg-gray-700 transition-all"
        >
          {decisionMap[id]
            ? 'Face the decision →'
            : nextChapterMap[id] !== undefined
              ? 'Continue to next chapter →'
              : 'Back to journey'}
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [userLevel, setUserLevel] = useState('green')
  const [userRole, setUserRole] = useState(null)
  const [xp, setXp] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <HomePage
            userLevel={userLevel}
            setUserLevel={setUserLevel}
            userRole={userRole}
            setUserRole={setUserRole}
            xp={xp}
          />
        } />
        <Route path="/chapter/:chapterId/topic/:topicIndex" element={
          userLevel
            ? <ChapterPage userRole={userRole} userLevel={userLevel} xp={xp} setXp={setXp} />
            : <Navigate to="/" />
        } />
        <Route path="/chapter/:chapterId/complete" element={
          userLevel
            ? <ChapterCompleteScreen userRole={userRole} />
            : <Navigate to="/" />
        } />
        <Route path="/decision/:decisionId" element={
          userLevel
            ? <DecisionPage userRole={userRole} />
            : <Navigate to="/" />
        } />
      </Routes>
    </BrowserRouter>
  )
}