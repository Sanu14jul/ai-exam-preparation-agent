import { useState } from "react";
import QuizReview from "./QuizReview";

export default function QuizResult({
  score,
  total,
  quiz,
  answers,
  onRestart,
}) {

  const [reviewMode, setReviewMode] =
    useState(false);

  const accuracy = Math.round(
    (score / total) * 100
  );

  if (reviewMode) {

    return (
      <QuizReview
        quiz={quiz}
        answers={answers}
        onRestart={onRestart}
      />
    );

  }

  return (
    <div className="bg-slate-800 rounded-2xl p-10 text-center">

      <h2 className="text-4xl text-green-400 font-bold mb-8">

        🎉 Quiz Completed

      </h2>

      <p className="text-6xl font-bold mb-8">

        {score}

        /

        {total}

      </p>

      <p className="text-2xl mb-6">

        Accuracy

      </p>

      <p className="text-4xl text-indigo-400 mb-10">

        {accuracy}%

      </p>

      <div className="grid grid-cols-2 gap-6 mb-10">

        <div className="bg-green-600 p-5 rounded-xl">

          Correct

          <div className="text-3xl">

            {score}

          </div>

        </div>

        <div className="bg-red-600 p-5 rounded-xl">

          Wrong

          <div className="text-3xl">

            {total - score}

          </div>

        </div>

      </div>

      <div className="flex justify-center gap-5">

        <button
          onClick={() =>
            setReviewMode(true)
          }
          className="bg-indigo-600 px-6 py-3 rounded-xl"
        >
          📖 Review Answers
        </button>

        <button
          onClick={onRestart}
          className="bg-slate-700 px-6 py-3 rounded-xl"
        >
          🔄 Restart
        </button>

      </div>

    </div>
  );

}