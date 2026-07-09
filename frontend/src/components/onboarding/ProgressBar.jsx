export default function ProgressBar({
  currentStep,
  totalSteps,
}) {
  const percentage =
    (currentStep / totalSteps) * 100;

  return (
    <div className="mb-10">

      <div className="flex justify-between text-sm text-slate-400 mb-2">

        <span>
          Step {currentStep}
        </span>

        <span>
          {totalSteps}
        </span>

      </div>

      <div className="w-full h-3 rounded-full bg-slate-800">

        <div
          className="h-3 rounded-full bg-indigo-600 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}