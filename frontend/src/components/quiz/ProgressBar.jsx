export default function ProgressBar({
  current,
  total,
}) {
  const percentage =
    ((current + 1) / total) * 100;

  return (
    <div className="mb-8">

      <div className="flex justify-between text-sm text-slate-400 mb-2">

        <span>
          Question {current + 1}
        </span>

        <span>
          {total} Questions
        </span>

      </div>

      <div className="w-full bg-slate-700 rounded-full h-3">

        <div
          className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}