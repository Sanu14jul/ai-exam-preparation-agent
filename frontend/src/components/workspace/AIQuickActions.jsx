const actions = [
  {
    icon: "📖",
    title: "Summarize PDF",
    prompt: "Summarize the uploaded PDF."
  },
  {
    icon: "📝",
    title: "Generate Notes",
    prompt: "Generate revision notes from the uploaded PDF."
  },
  {
    icon: "❓",
    title: "Generate Quiz",
    prompt: "Generate 10 MCQs from the uploaded PDF."
  },
  {
    icon: "💡",
    title: "Important Topics",
    prompt: "List all important topics from the uploaded PDF."
  },
  {
    icon: "📚",
    title: "Explain Chapter",
    prompt: "Explain the first chapter from the uploaded PDF."
  }
];

export default function AIQuickActions({ onAction }) {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      <h2 className="text-xl font-bold mb-5">
        ⚡ AI Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => (

          <button
            key={action.title}
            onClick={() => onAction(action.prompt)}
            className="bg-slate-800 hover:bg-indigo-600 transition rounded-xl p-5 text-left"
          >

            <div className="text-3xl">
              {action.icon}
            </div>

            <div className="font-semibold mt-3">
              {action.title}
            </div>

          </button>

        ))}

      </div>

    </div>
  );
}