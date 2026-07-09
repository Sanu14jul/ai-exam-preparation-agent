export default function UploadHistory({
  message,
}) {
  if (!message) return null;

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-xl font-bold text-white mb-4">

        Latest Upload

      </h2>

      <div className="bg-slate-800 rounded-xl p-4">

        <p className="text-green-400">

          {message}

        </p>

      </div>

    </div>
  );
}