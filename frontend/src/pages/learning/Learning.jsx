import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import QuizPlayer from "../../components/quiz/QuizPlayer";

import { startLearningSession } from "../../services/learningService";

export default function Learning() {

    const [session, setSession] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [showQuiz, setShowQuiz] = useState(false);

    useEffect(() => {

        loadSession();

    }, []);

    async function loadSession() {

        try {

            setLoading(true);

            const data = await startLearningSession();

            setSession(data);

        }

        catch (err) {

            console.error(err);

            setError("Unable to generate today's learning session.");

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <DashboardLayout>

                <div className="max-w-6xl mx-auto py-10">

                    <div className="animate-pulse space-y-6">

                        <div className="h-12 w-80 bg-slate-800 rounded"></div>

                        <div className="h-40 bg-slate-900 rounded-2xl"></div>

                        <div className="h-56 bg-slate-900 rounded-2xl"></div>

                        <div className="h-40 bg-slate-900 rounded-2xl"></div>

                    </div>

                </div>

            </DashboardLayout>

        );

    }

    if (error) {

        return (

            <DashboardLayout>

                <div className="max-w-xl mx-auto mt-24">

                    <div className="bg-red-950 border border-red-700 rounded-2xl p-8">

                        <h2 className="text-3xl font-bold">

                            ⚠ Something went wrong

                        </h2>

                        <p className="mt-4 text-slate-300">

                            {error}

                        </p>

                        <button

                            onClick={loadSession}

                            className="mt-8 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl"

                        >

                            Try Again

                        </button>

                    </div>

                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="max-w-6xl mx-auto py-8 space-y-8">

                <div>

                    <h1 className="text-5xl font-bold">

                        AI Learning Workspace

                    </h1>

                    <p className="text-slate-400 mt-3">

                        Complete today's AI-guided learning session.

                    </p>

                </div>

                {/* Recommendation */}

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                    <h2 className="text-2xl font-bold">

                        📚 Today's Recommendation

                    </h2>

                    <p className="text-2xl mt-5 font-semibold">

                        {session.recommendation.recommended_topic}

                    </p>

                    <p className="mt-3 text-slate-400">

                        {session.recommendation.reason}

                    </p>

                </div>

                {/* Tutor */}

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                    <h2 className="text-2xl font-bold">

                        🎓 AI Tutor

                    </h2>

                    <div className="mt-6 leading-8 text-slate-300 whitespace-pre-wrap">

                        {session.lesson.explanation}

                    </div>

                </div>

                {/* Quiz */}

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                    <h2 className="text-2xl font-bold">

                        📝 Knowledge Check

                    </h2>

                    {

                        !showQuiz && (

                            <div className="mt-6">

                                <p className="text-slate-400">

                                    Test yourself after completing today's lesson.

                                </p>

                                <button

                                    onClick={() => setShowQuiz(true)}

                                    className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-xl"

                                >

                                    Start Quiz

                                </button>

                            </div>

                        )

                    }

                    {

                        showQuiz && (

                            <QuizPlayer

                                quiz={session.quiz}
                                quizSessionId={session.quiz_session_id}

                            />

                        )

                    }

                </div>

            </div>

        </DashboardLayout>

    );

}