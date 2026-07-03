import DashboardLayout from "../../layouts/DashboardLayout";

export default function Dashboard() {
  const cards = [
    {
      title: "Study Plans",
      value: "12",
    },
    {
      title: "AI Chats",
      value: "8",
    },
    {
      title: "Quizzes",
      value: "21",
    },
    {
      title: "Uploaded PDFs",
      value: "4",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">
        Welcome to PrepMind AI 🚀
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
          >
            <p className="text-slate-400">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {card.value}
            </h2>
          </div>
        ))}

      </div>

      <div className="mt-10 rounded-2xl bg-slate-900 border border-slate-800 p-8">

        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

        <p className="text-slate-400 mt-3">
          Your AI study planner, quiz generator,
          PDF assistant and chat history will
          appear here.
        </p>

      </div>
    </DashboardLayout>
  );
}