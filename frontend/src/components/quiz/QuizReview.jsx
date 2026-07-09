import { useState } from "react";

export default function QuizReview({
  quiz,
  answers,
  onRestart,
}) {
  const [current, setCurrent] = useState(0);

  const question = quiz.questions[current];

  return (
    <div className="bg-slate-800 rounded-2xl p-8">

      <h2 className="text-2xl font-bold mb-8">

        Review

        {" "}

        {current + 1}

        /

        {quiz.questions.length}

      </h2>

      <h3 className="text-xl mb-8">

        {question.question}

      </h3>

      <div className="space-y-4">

        {question.options.map((option) => {

          const isCorrect =
            option === question.correct_answer;

          const isSelected =
            answers[current] === option;

          let style =
            "bg-slate-700";

          if (isCorrect)
            style =
              "bg-green-600";

          if (
            isSelected &&
            !isCorrect
          )
            style =
              "bg-red-600";

          return (

            <div
              key={option}
              className={`${style} p-4 rounded-xl`}
            >

              {option}

            </div>

          );

        })}

      </div>

      <div className="mt-8">

        <h4 className="text-indigo-400 font-bold mb-3">

          💡 Explanation

        </h4>

        <p className="text-slate-300">

          {question.explanation}

        </p>

      </div>

      <div className="flex justify-between mt-10">

        <button
          disabled={current === 0}
          onClick={() =>
            setCurrent(current - 1)
          }
          className="bg-slate-700 px-6 py-3 rounded-xl disabled:opacity-30"
        >
          ← Previous
        </button>

        {current ===
        quiz.questions.length - 1 ? (

          <button
            onClick={onRestart}
            className="bg-indigo-600 px-6 py-3 rounded-xl"
          >
            Restart Quiz
          </button>

        ) : (

          <button
            onClick={() =>
              setCurrent(current + 1)
            }
            className="bg-indigo-600 px-6 py-3 rounded-xl"
          >
            Next →
          </button>

        )}

      </div>

    </div>
  );
}