import { History } from "lucide-react";

export default function EmptyHistory() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-12 text-center">

      <History
        className="mx-auto text-slate-500 mb-4"
        size={60}
      />

      <h2 className="text-2xl font-bold text-white">

        No History Yet

      </h2>

      <p className="text-slate-400 mt-3">

        Start chatting with AI and your conversations will appear here.

      </p>

    </div>
  );
}