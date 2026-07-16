import { useState } from "react";

import AIReviewCard from "../learning/AIReviewCard";
import SessionCompleteCard from "../learning/SessionCompleteCard";

import { submitQuiz } from "../../services/quizSubmitService";

export default function QuizPlayer({

    quiz,

    quizSessionId,

}) {

    const [current, setCurrent] = useState(0);

    const [answers, setAnswers] = useState({});

    const [submitted, setSubmitted] = useState(false);

    const [submitting, setSubmitting] = useState(false);

    const [score, setScore] = useState(0);

    const [review, setReview] = useState([]);

    const question = quiz.questions[current];

    function selectAnswer(option) {

        setAnswers({

            ...answers,

            [current]: option,

        });

    }

    function nextQuestion() {

        if (current < quiz.questions.length - 1) {

            setCurrent(current + 1);

        }

    }

    function previousQuestion() {

        if (current > 0) {

            setCurrent(current - 1);

        }

    }

    async function handleSubmitQuiz() {

        try {

            setSubmitting(true);

            const orderedAnswers = quiz.questions.map(

                (_, index) => answers[index] || ""

            );

            const result = await submitQuiz({

                quiz_session_id: quizSessionId,

                answers: orderedAnswers,

            });

            setScore(result.score);

            setReview(result.review);

            setSubmitted(true);

        }

        catch (err) {

            console.error(err);

            alert("Failed to submit quiz.");

        }

        finally {

            setSubmitting(false);

        }

    }

    if (submitted) {

        return (

            <div className="bg-slate-900 rounded-2xl p-10 mt-10">

                <h1 className="text-4xl font-bold">

                    🎉 Quiz Completed

                </h1>

                <h2 className="text-3xl mt-8">

                    Score

                </h2>

                <p className="text-6xl font-bold text-green-400 mt-4">

                    {score} / {quiz.questions.length}

                </p>

                <AIReviewCard

                    score={score}

                    totalQuestions={quiz.questions.length}

                />

                <div className="mt-10">

                    <h2 className="text-3xl font-bold">

                        📖 Answer Review

                    </h2>

                    <div className="space-y-6 mt-6">

                        {

                            review.map((item, index) => (

                                <div

                                    key={index}

                                    className="bg-slate-800 rounded-xl p-5"

                                >

                                    <h3 className="font-bold">

                                        Q{index + 1}. {item.question}

                                    </h3>

                                    <p className="mt-3">

                                        Your Answer:

                                        <span className="ml-2">

                                            {item.selected || "Not Answered"}

                                        </span>

                                    </p>

                                    <p>

                                        Correct Answer:

                                        <span className="ml-2 text-green-400">

                                            {item.correct}

                                        </span>

                                    </p>

                                    <p

                                        className={`mt-2 font-semibold ${

                                            item.is_correct

                                                ? "text-green-400"

                                                : "text-red-400"

                                        }`}

                                    >

                                        {

                                            item.is_correct

                                                ? "Correct"

                                                : "Incorrect"

                                        }

                                    </p>

                                    <p className="mt-3 text-slate-400">

                                        {item.explanation}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                </div>

                <SessionCompleteCard />

            </div>

        );

    }

    return (

        <div className="bg-slate-900 rounded-2xl p-8 mt-10">

            <div className="flex justify-between">

                <h2 className="text-2xl font-bold">

                    Question {current + 1} / {quiz.questions.length}

                </h2>

            </div>

            <div className="w-full h-2 bg-slate-700 rounded-full mt-4">

                <div

                    className="h-2 bg-indigo-600 rounded-full"

                    style={{

                        width: `${((current + 1) / quiz.questions.length) * 100}%`

                    }}

                />

            </div>

            <h3 className="text-xl mt-8">

                {question.question}

            </h3>

            <div className="space-y-4 mt-8">

                {

                    question.options.map((option, index) => (

                        <button

                            key={index}

                            onClick={() => selectAnswer(option)}

                            className={`

                                w-full

                                p-4

                                rounded-xl

                                text-left

                                border

                                ${

                                    answers[current] === option

                                        ? "bg-indigo-900 border-indigo-500"

                                        : "bg-slate-800 border-slate-700"

                                }

                            `}

                        >

                            {option}

                        </button>

                    ))

                }

            </div>

            <div className="flex justify-between mt-10">

                <button

                    onClick={previousQuestion}

                    disabled={current === 0}

                    className="bg-slate-700 px-6 py-3 rounded-xl disabled:opacity-50"

                >

                    Previous

                </button>

                {

                    current === quiz.questions.length - 1

                        ?

                        <button

                            onClick={handleSubmitQuiz}

                            disabled={submitting}

                            className="bg-green-600 px-8 py-3 rounded-xl"

                        >

                            {

                                submitting

                                    ? "Submitting..."

                                    : "Submit Quiz"

                            }

                        </button>

                        :

                        <button

                            onClick={nextQuestion}

                            className="bg-indigo-600 px-8 py-3 rounded-xl"

                        >

                            Next

                        </button>

                }

            </div>

        </div>

    );

}