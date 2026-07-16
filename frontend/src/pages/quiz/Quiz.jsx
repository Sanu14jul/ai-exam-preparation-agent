import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { generateQuiz } from "../../services/quizService";

import QuizPlayer from "../../components/quiz/QuizPlayer";

export default function Quiz() {

    const [topic, setTopic] = useState("");

    const [quiz, setQuiz] = useState(null);

    const [loading, setLoading] = useState(false);

    async function createQuiz() {

        if (!topic.trim()) return;

        setLoading(true);

        try {

            const response = await generateQuiz({

                topic: topic,

                number_of_questions: 10,

                difficulty: "medium",

            });

            setQuiz(response.quiz);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <DashboardLayout>

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold">

                    AI Quiz Generator

                </h1>

                <div className="flex gap-4 mt-8">

                    <input

                        className="flex-1 bg-slate-900 rounded-xl p-4"

                        placeholder="Enter Topic"

                        value={topic}

                        onChange={(e)=>setTopic(e.target.value)}

                    />

                    <button

                        onClick={createQuiz}

                        className="bg-indigo-600 px-8 rounded-xl"

                    >

                        Generate Quiz

                    </button>

                </div>

                {

                    loading && (

                        <h2 className="mt-8">

                            AI is generating quiz...

                        </h2>

                    )

                }

                {

                    quiz && (

                        <div className="mt-10">

                            <QuizPlayer

                            quiz={quiz}

                          />

                        </div>

                    )

                }

            </div>

        </DashboardLayout>

    );

}