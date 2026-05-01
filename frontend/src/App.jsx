import { useState } from 'react'

function App() {
  const [showGreen, setShowGreen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col gap-4">
        <h1 className="font-semibold text-gray-800 text-lg">Biotech Unveiled</h1>
        
        {/* Progress Bar */}
        <div className="bg-gray-100 rounded-lg p-3">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Your progress</span>
            <span>0%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{width: '0%'}}></div>
          </div>
        </div>

        {/* Chapter List */}
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-400 px-2">Chapters</p>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-800">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            Ch 1: What is Biotech?
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            Ch 2: Drug Discovery
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            Ch 3: Clinical Trials
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Ch 1: What is Biotech?</h2>
          <button
            onClick={() => setShowGreen(!showGreen)}
            className={`text-sm px-3 py-1 rounded-full border transition-all ${
              showGreen 
                ? 'bg-green-50 border-green-400 text-green-700' 
                : 'bg-gray-50 border-gray-300 text-gray-500'
            }`}
          >
            {showGreen ? 'Hide details' : 'Show details'}
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {/* Red block */}
          <div className="border-l-4 border-red-400 bg-red-50 px-4 py-3 rounded-r-lg text-sm text-red-900 leading-relaxed">
            Biotechnology is the use of living systems and organisms to develop products that improve human health and our environment.
          </div>

          {/* Yellow block */}
          <div className="border-l-4 border-yellow-400 bg-yellow-50 px-4 py-3 rounded-r-lg text-sm text-yellow-900 leading-relaxed">
            This includes everything from developing life-saving drugs and vaccines to engineering crops that can survive drought — all powered by our understanding of biology at the molecular level.
          </div>

          {/* Green block - toggleable */}
          {showGreen && (
            <div className="border-l-4 border-green-400 bg-green-50 px-4 py-3 rounded-r-lg text-sm text-green-900 leading-relaxed">
              For example, insulin — used daily by millions of diabetics — was once extracted from pig pancreases. Today it is produced by genetically engineered bacteria, making it cheaper, safer, and available at scale.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App