import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ChapterPage from './pages/ChapterPage.jsx'

export default function App() {
  const [userLevel, setUserLevel] = useState(null)
  const [xp, setXp] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage userLevel={userLevel} setUserLevel={setUserLevel} xp={xp} />} />
        <Route path="/chapter/:chapterId/topic/:topicIndex" element={
          userLevel
            ? <ChapterPage userLevel={userLevel} xp={xp} setXp={setXp} />
            : <Navigate to="/" />
        } />
        <Route path="/chapter/:chapterId/complete" element={
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-xl font-medium text-gray-800 mb-2">Chapter complete!</h2>
              <p className="text-gray-500 text-sm mb-4">Great work — your XP has been updated.</p>
              <a href="/" className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">Back to chapters</a>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}