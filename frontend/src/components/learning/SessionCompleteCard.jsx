import { useNavigate } from "react-router-dom";

export default function SessionCompleteCard() {

    const navigate = useNavigate();

    function finishSession() {

        navigate("/dashboard");

    }

    return (

        <div className="bg-slate-900 border border-green-700 rounded-2xl p-8 mt-8">

            <div className="text-center">

                <h2 className="text-4xl font-bold text-green-400">

                    🎉 Session Completed

                </h2>

                <p className="text-slate-300 mt-4">

                    Great job! You have successfully completed today's AI learning session.

                </p>

                <button

                    onClick={finishSession}

                    className="mt-8 bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl"

                >

                    Back to Dashboard

                </button>

            </div>

        </div>

    );

}