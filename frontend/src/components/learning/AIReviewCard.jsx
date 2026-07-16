export default function AIReviewCard({

    score,

    totalQuestions,

}) {

    const percentage = Math.round(

        (score / totalQuestions) * 100

    );

    let performance = "";

    let color = "";

    let suggestion = "";

    if (percentage >= 90) {

        performance = "Excellent";

        color = "text-green-400";

        suggestion = "You have mastered this topic. Continue to the next lesson.";

    }

    else if (percentage >= 75) {

        performance = "Good";

        color = "text-blue-400";

        suggestion = "Revise a few concepts before moving ahead.";

    }

    else if (percentage >= 50) {

        performance = "Average";

        color = "text-yellow-400";

        suggestion = "Spend some more time with today's lesson.";

    }

    else {

        performance = "Needs Improvement";

        color = "text-red-400";

        suggestion = "Repeat today's lesson before continuing.";

    }

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-8">

            <h2 className="text-3xl font-bold">

                📊 AI Performance Review

            </h2>

            <div className="mt-8 space-y-5">

                <div>

                    <p className="text-slate-400">

                        Quiz Score

                    </p>

                    <h3 className="text-5xl font-bold">

                        {score} / {totalQuestions}

                    </h3>

                </div>

                <div>

                    <p className="text-slate-400">

                        Accuracy

                    </p>

                    <h3 className="text-3xl font-bold">

                        {percentage}%

                    </h3>

                </div>

                <div>

                    <p className="text-slate-400">

                        Performance

                    </p>

                    <h3 className={`text-3xl font-bold ${color}`}>

                        {performance}

                    </h3>

                </div>

                <div>

                    <p className="text-slate-400">

                        AI Recommendation

                    </p>

                    <p className="mt-2">

                        {suggestion}

                    </p>

                </div>

            </div>

        </div>

    );

}