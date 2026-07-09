export default function RAGCard({ answer }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <h3 className="text-xl font-bold text-indigo-400 mb-4">
        📄 Answer
      </h3>

      <p className="text-slate-200 whitespace-pre-wrap">
        {answer}
      </p>

    </div>
  );
}