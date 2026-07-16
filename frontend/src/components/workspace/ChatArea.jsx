export default function ChatArea() {

    return (

        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 h-[500px] overflow-y-auto">

            <div className="space-y-6">

                <div>

                    <div className="font-bold text-indigo-400">

                        AI Tutor

                    </div>

                    <div className="mt-2 bg-slate-800 rounded-xl p-4">

                        👋 Welcome!

                        <br /><br />

                        Upload a PDF to begin learning.

                    </div>

                </div>

                <div className="text-right">

                    <div className="font-bold text-green-400">

                        You

                    </div>

                    <div className="mt-2 inline-block bg-indigo-600 rounded-xl p-4">

                        Explain Ashoka.

                    </div>

                </div>

                <div>

                    <div className="font-bold text-indigo-400">

                        AI Tutor

                    </div>

                    <div className="mt-2 bg-slate-800 rounded-xl p-4">

                        Ashoka was one of the greatest rulers of the Maurya Empire...

                    </div>

                </div>

            </div>

        </div>

    );

}