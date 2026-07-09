export default function QuestionCard({

  title,

  subtitle,

  children,

}) {

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-10">

      <h1 className="text-4xl font-bold text-white">

        {title}

      </h1>

      <p className="text-slate-400 mt-3 mb-8">

        {subtitle}

      </p>

      {children}

    </div>

  );

}