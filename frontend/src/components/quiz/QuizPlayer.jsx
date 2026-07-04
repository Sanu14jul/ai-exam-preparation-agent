import { useState } from "react";
import QuizResult from "./QuizResult";
import ProgressBar from "./ProgressBar";

export default function QuizPlayer({ quiz }) {

  if (!quiz?.questions?.length) {
    return (
      <div className="text-white">
        No quiz available.
      </div>
    );
  }

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const question = quiz.questions[current];

  const selectAnswer = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [current]: option,
    }));
  };

  const calculateScore = () => {

    let score = 0;

    quiz.questions.forEach((q, index) => {

      if (
        answers[index] ===
        q.correct_answer
      ) {
        score++;
      }

    });

    return score;
  };

  if (submitted) {

    return (
    <QuizResult
      score={calculateScore()}
      total={quiz.questions.length}
      quiz={quiz}
      answers={answers}
      onRestart={() => {
        setAnswers({});
        setCurrent(0);
        setSubmitted(false);
      }}
    />
    );

  }

  return (
    <div className="bg-slate-800 rounded-2xl p-8">

        <ProgressBar
        current={current}
        total={quiz.questions.length}
        />

        <h2 className="text-2xl font-bold mb-6">

        Question {current + 1}

        </h2>

      <h3 className="text-lg mb-8">

        {question.question}

      </h3>

      <div className="space-y-4">

        {question.options.map((option) => (

          <button
            key={option}
            onClick={() =>
              selectAnswer(option)
            }
            className={`w-full text-left p-4 rounded-xl transition

            ${
              answers[current] === option
                ? "bg-indigo-600"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {option}
          </button>

        ))}

      </div>

      <div className="flex justify-between mt-10">

        <button
          disabled={current === 0}
          onClick={() =>
            setCurrent(current - 1)
          }
          className="bg-slate-700 px-6 py-3 rounded-xl disabled:opacity-40"
        >
          ← Previous
        </button>

        {current ===
        quiz.questions.length - 1 ? (

          <button
            onClick={() =>
              setSubmitted(true)
            }
            className="bg-green-600 px-6 py-3 rounded-xl"
          >
            Submit Quiz
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