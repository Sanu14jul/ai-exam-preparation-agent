export default function UploadProgress({
  loading,
  progress,
}) {
  if (!loading) return null;

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">

      <div className="flex justify-between mb-3">

        <span className="text-white">
          Uploading...
        </span>

        <span className="text-indigo-400">
          {progress}%
        </span>

      </div>

      <div className="w-full bg-slate-700 rounded-full h-3">

        <div
          className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}