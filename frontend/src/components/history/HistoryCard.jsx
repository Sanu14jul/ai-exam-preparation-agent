import { MessageSquare } from "lucide-react";

export default function HistoryCard({ item }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500 transition cursor-pointer">

      <div className="flex items-start gap-4">

        <MessageSquare
          className="text-indigo-500"
          size={28}
        />

        <div className="flex-1">

          <p className="text-white font-semibold">

            {item.message}

          </p>

          <p className="text-slate-400 text-sm mt-2">

            {item.created_at}

          </p>

        </div>

      </div>

    </div>
  );
}