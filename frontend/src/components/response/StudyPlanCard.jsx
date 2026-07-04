export default function StudyPlanCard({ plan }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 space-y-6">

      <Section
        title="📅 Daily Schedule"
        value={plan.daily_schedule}
      />

      <Section
        title="🎯 Weekly Goals"
        value={plan.weekly_goals}
      />

      <Section
        title="📚 Revision Strategy"
        value={plan.revision_strategy}
      />

      <Section
        title="📝 Practice Tests"
        value={plan.practice_tests}
      />

      <Section
        title="💡 Tips"
        value={plan.tips}
      />

    </div>
  );
}

function Section({ title, value }) {
  return (
    <div>

      <h3 className="font-bold text-indigo-400 mb-2">
        {title}
      </h3>

      <p className="text-slate-200 whitespace-pre-wrap">
        {value}
      </p>

    </div>
  );
}