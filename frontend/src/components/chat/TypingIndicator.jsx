export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-4 mb-8">

      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">

        🤖

      </div>

      <div className="bg-slate-800 rounded-2xl px-6 py-5 border border-slate-700">

        <p className="text-slate-300 animate-pulse">

          PrepMind AI is thinking...

        </p>

      </div>

    </div>
  );
}