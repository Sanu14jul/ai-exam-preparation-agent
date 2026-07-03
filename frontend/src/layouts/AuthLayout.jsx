export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-700 via-blue-700 to-slate-900 p-16 flex-col justify-between">

        <div>

          <h1 className="text-5xl font-bold text-white">
            PrepMind AI
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Crack UPSC, SSC, BPSC and other competitive exams with AI.
          </p>

        </div>

        <div className="space-y-6">

          <Feature text="📚 Personalized Study Plans" />

          <Feature text="🤖 AI Chat Assistant" />

          <Feature text="📝 AI Quiz Generator" />

          <Feature text="📄 PDF Question Answering" />

          <Feature text="📈 Track Progress" />

        </div>

        <p className="text-blue-100">
          © 2026 PrepMind AI
        </p>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex items-center justify-center p-8">

        {children}

      </div>

    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="text-white text-lg">
      {text}
    </div>
  );
}