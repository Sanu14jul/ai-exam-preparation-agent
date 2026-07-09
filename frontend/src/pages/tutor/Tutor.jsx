import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { teachTopic } from "../../services/tutorService";

export default function Tutor() {

    const [topic, setTopic] = useState("");

    const [loading, setLoading] = useState(false);

    const [lesson, setLesson] = useState(null);

    async function generateLesson() {

        if (!topic.trim()) return;

        setLoading(true);

        try {

            const response = await teachTopic(topic);

            setLesson(response);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <DashboardLayout>

            <div className="max-w-5xl mx-auto">

                <h1 className="text-4xl font-bold">

                    AI Tutor

                </h1>

                <div className="flex gap-4 mt-8">

                    <input

                        className="flex-1 bg-slate-900 rounded-xl p-4"

                        placeholder="Enter Topic..."

                        value={topic}

                        onChange={(e)=>setTopic(e.target.value)}

                    />

                    <button

                        onClick={generateLesson}

                        className="bg-indigo-600 px-8 rounded-xl"

                    >

                        Teach Me

                    </button>

                </div>

                {

                    loading && (

                        <h2 className="mt-8">

                            AI is preparing your lesson...

                        </h2>

                    )

                }

                {

                    lesson && (

                        <div className="mt-10 space-y-6">

                            <div className="bg-slate-900 rounded-xl p-6">

                                <h2 className="text-3xl">

                                    {lesson.topic}

                                </h2>

                            </div>

                            <div className="bg-slate-900 rounded-xl p-6">

                                <h3 className="text-2xl">

                                    Explanation

                                </h3>

                                <p className="mt-4">

                                    {lesson.explanation}

                                </p>

                            </div>

                            <div className="bg-slate-900 rounded-xl p-6">

                                <h3 className="text-2xl">

                                    Real Life Example

                                </h3>

                                <p className="mt-4">

                                    {lesson.real_life_example}

                                </p>

                            </div>

                            <div className="bg-slate-900 rounded-xl p-6">

                                <h3 className="text-2xl">

                                    Key Points

                                </h3>

                                <ul className="list-disc ml-8 mt-4">

                                    {

                                        lesson.key_points.map(

                                            (point,index)=>(

                                                <li key={index}>

                                                    {point}

                                                </li>

                                            )

                                        )

                                    }

                                </ul>

                            </div>

                            <div className="bg-slate-900 rounded-xl p-6">

                                <h3 className="text-2xl">

                                    Practice Question

                                </h3>

                                <p className="mt-4">

                                    {lesson.practice_question}

                                </p>

                            </div>

                            <div className="bg-slate-900 rounded-xl p-6">

                                <h3 className="text-2xl">

                                    MCQ

                                </h3>

                                <p className="mt-4">

                                    {lesson.mcq_question}

                                </p>

                                <ul className="list-disc ml-8 mt-4">

                                    {

                                        lesson.options.map(

                                            (option,index)=>(

                                                <li key={index}>

                                                    {option}

                                                </li>

                                            )

                                        )

                                    }

                                </ul>

                            </div>

                            <div className="bg-green-900 rounded-xl p-6">

                                <h3 className="text-2xl">

                                    Revision Tip

                                </h3>

                                <p className="mt-4">

                                    {lesson.revision_tip}

                                </p>

                            </div>

                        </div>

                    )

                }

            </div>

        </DashboardLayout>

    );

}