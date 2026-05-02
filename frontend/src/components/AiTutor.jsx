import { useState } from 'react'

export default function AiTutor({ topicTitle, topicContent }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `Hi! I'm your Biotech Unveiled AI tutor. I'm here to help you understand "${topicTitle}". What questions do you have?`
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMessage }])
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: `Thanks for your question about "${topicTitle}"! The AI tutor is being activated for the full launch. In the meantime, try re-reading the topic content or move to the next topic and come back to this question.`
      }])
      setIsTyping(false)
    }, 1200)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all z-50"
      >
        {isOpen ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1C4.6 1 1 4.1 1 8c0 1.5.5 2.9 1.4 4L1 17l5.2-1.3C7.3 16.2 8.1 16.4 9 16.4c4.4 0 8-3.1 8-7s-3.6-7.4-8-7.4z" fill="white"/>
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl border border-gray-200 shadow-xl z-50 flex flex-col overflow-hidden" style={{height: '420px'}}>
          {/* Header */}
          <div className="bg-purple-600 px-4 py-3 flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-purple-400 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4 1 1.5 3 1.5 5.5c0 1.1.4 2.1 1.1 2.9L1.5 12l3.8-1c.5.2 1.1.3 1.7.3C10 11.3 12.5 9.3 12.5 6.8S10 1 7 1z" fill="white"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-medium">AI Tutor</p>
              <p className="text-purple-200 text-xs">Biotech Unveiled</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-400"></div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-purple-600 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-100 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question..."
              className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-purple-400"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center disabled:opacity-40 hover:bg-purple-700 transition-all"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}