import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";

import { getDashboard } from "../../services/dashboardService";

import {
    Brain,
    BookOpen,
    Calendar,
    Flame,
} from "lucide-react";

export default function Dashboard() {

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            const data = await getDashboard();

            setDashboard(data);

        }

        catch (err) {

            console.error(err);

        }

    }

    if (!dashboard)

        return (

            <DashboardLayout>

                <div className="text-2xl">

                    Loading Dashboard...

                </div>

            </DashboardLayout>

        );

    return (

        <DashboardLayout>

            <div className="max-w-7xl mx-auto py-10">

                <h1 className="text-5xl font-bold">

                    👋 Welcome {dashboard.username}

                </h1>

                <p className="text-slate-400 mt-2">

                    AI Coach is ready for today's learning.

                </p>

                {/* Top Cards */}

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

                    <DashboardCard
                        title="Today's Mission"
                        value={dashboard.today_mission}
                        icon={<BookOpen className="text-blue-400" />}
                    />

                    <DashboardCard
                        title="Today's Quiz"
                        value={dashboard.today_quiz}
                        icon={<Brain className="text-green-400" />}
                    />

                    <DashboardCard
                        title="Exam Countdown"
                        value={`${dashboard.days_left ?? "-"} Days`}
                        icon={<Calendar className="text-yellow-400" />}
                    />

                    <DashboardCard
                        title="Study Streak"
                        value={`${dashboard.study_streak} Day`}
                        icon={<Flame className="text-red-400" />}
                    />

                </div>

                {/* Analytics */}

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

                    <DashboardCard
                        title="Average Score"
                        value={`${dashboard.average_score}%`}
                        icon={<Brain className="text-green-400" />}
                    />

                    <DashboardCard
                        title="Study Time"
                        value={`${dashboard.study_time} min`}
                        icon={<BookOpen className="text-blue-400" />}
                    />

                    <DashboardCard
                        title="Completed Sessions"
                        value={dashboard.completed_sessions}
                        icon={<Calendar className="text-yellow-400" />}
                    />

                    <DashboardCard
                        title="Learning Track"
                        value={dashboard.learning_track}
                        icon={<Flame className="text-indigo-400" />}
                    />

                </div>

                {/* Progress */}

                <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">

                    <h2 className="text-3xl font-bold">

                        📈 Overall Performance

                    </h2>

                    <div className="w-full h-5 bg-slate-800 rounded-full mt-6">

                        <div

                            className="h-5 bg-indigo-600 rounded-full"

                            style={{

                                width: `${dashboard.progress}%`

                            }}

                        />

                    </div>

                    <p className="mt-4 text-slate-300">

                        {dashboard.progress}% Average Quiz Score

                    </p>

                </div>

                {/* Weak Topics */}

                <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">

                    <h2 className="text-2xl font-bold text-red-400">

                        ⚠ Weak Topics

                    </h2>

                    <div className="mt-6 space-y-3">

                        {

                            dashboard.weak_topics.length === 0 ?

                                <p>No weak topics yet 🎉</p>

                                :

                                dashboard.weak_topics.map((topic, index) => (

                                    <div
                                        key={index}
                                        className="flex justify-between bg-slate-800 rounded-xl p-4"
                                    >

                                        <span>

                                            {topic.subject} - {topic.topic}

                                        </span>

                                        <span className="text-red-400">

                                            {topic.score}%

                                        </span>

                                    </div>

                                ))

                        }

                    </div>

                </div>

                {/* Strong Topics */}

                <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">

                    <h2 className="text-2xl font-bold text-green-400">

                        🏆 Strong Topics

                    </h2>

                    <div className="mt-6 space-y-3">

                        {

                            dashboard.strong_topics.length === 0 ?

                                <p>Complete more quizzes to unlock insights.</p>

                                :

                                dashboard.strong_topics.map((topic, index) => (

                                    <div
                                        key={index}
                                        className="flex justify-between bg-slate-800 rounded-xl p-4"
                                    >

                                        <span>

                                            {topic.subject} - {topic.topic}

                                        </span>

                                        <span className="text-green-400">

                                            {topic.score}%

                                        </span>

                                    </div>

                                ))

                        }

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}