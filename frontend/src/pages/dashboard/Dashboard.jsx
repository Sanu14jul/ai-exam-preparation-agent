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

            console.log(err);

        }

    }

    if (!dashboard)

        return (

            <DashboardLayout>

                Loading...

            </DashboardLayout>

        );

    return (

        <DashboardLayout>

            <div className="max-w-7xl mx-auto py-10">

                <h1 className="text-5xl font-bold">

                    👋 Welcome {dashboard.username}

                </h1>

                <p className="text-slate-400 mt-2">

                    AI Coach is ready for today.

                </p>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

                    <DashboardCard

                        title="Today's Mission"

                        value={dashboard.today_mission}

                        icon={<BookOpen className="text-blue-400"/>}

                    />

                    <DashboardCard

                        title="Today's Quiz"

                        value={dashboard.today_quiz}

                        icon={<Brain className="text-green-400"/>}

                    />

                    <DashboardCard

                        title="Exam Countdown"

                        value={`${dashboard.days_left} Days`}

                        icon={<Calendar className="text-yellow-400"/>}

                    />

                    <DashboardCard

                        title="Study Streak"

                        value={`${dashboard.study_streak} Day`}

                        icon={<Flame className="text-red-400"/>}

                    />

                </div>

                <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">

                    <h2 className="text-3xl font-bold">

                        📈 Preparation Progress

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

                        {dashboard.progress}% Completed

                    </p>

                </div>

            </div>

        </DashboardLayout>

    );

}