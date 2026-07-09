import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import api from "../../api/axios";

export default function StudySession() {

    const [session, setSession] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadSession();

    }, []);

    async function loadSession() {

        try {

            const response = await api.post(
                "/study-session/start"
            );

            setSession(response.data);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    }

    if (loading)

        return (

            <DashboardLayout>

                <h1 className="text-3xl">

                    Loading Today's Session...

                </h1>

            </DashboardLayout>

        );

    return (

        <DashboardLayout>

            <div className="max-w-5xl mx-auto">

                <h1 className="text-5xl font-bold">

                    Today's Study Session

                </h1>

                <div className="mt-10 bg-slate-900 rounded-3xl p-8">

                    <h2 className="text-3xl font-bold">

                        {session.topic}

                    </h2>

                    <p className="mt-6">

                        Goal

                    </p>

                    <h3 className="text-2xl">

                        {session.goal}

                    </h3>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">

                        <div className="bg-slate-800 rounded-xl p-6">

                            <h3>Duration</h3>

                            <p className="text-3xl">

                                {session.duration} min

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-xl p-6">

                            <h3>Quiz</h3>

                            <p className="text-3xl">

                                {session.quiz_questions}

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-xl p-6">

                            <h3>Revision</h3>

                            <p className="text-3xl">

                                {session.revision_time} min

                            </p>

                        </div>

                    </div>

                    <div className="mt-10">

                        <h2 className="text-3xl">

                            Tasks

                        </h2>

                        {

                            session.tasks.map(

                                (task,index)=>(

                                    <div

                                        key={index}

                                        className="bg-slate-800 rounded-xl mt-4 p-5"

                                    >

                                        <h3 className="text-xl font-bold">

                                            {task.title}

                                        </h3>

                                        <p>

                                            {task.description}

                                        </p>

                                        <p className="text-indigo-400">

                                            {task.duration} Minutes

                                        </p>

                                    </div>

                                )

                            )

                        }

                    </div>

                    <button

                        className="mt-10 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl"

                    >

                        Start Learning

                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}