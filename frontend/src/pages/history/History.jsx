import DashboardLayout from "../../layouts/DashboardLayout";
import HistoryPage from "./HistoryPage";

export default function History() {

  return (
    <DashboardLayout>

      <div className="max-w-5xl mx-auto py-10">

        <h1 className="text-4xl font-bold text-white mb-2">

          Conversation History

        </h1>

        <p className="text-slate-400 mb-8">

          View your previous AI conversations.

        </p>

        <HistoryPage />

      </div>

    </DashboardLayout>
  );

}