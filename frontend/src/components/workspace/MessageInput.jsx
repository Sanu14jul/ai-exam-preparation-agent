export default function MessageInput() {

    return (

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

            <div className="flex gap-4">

                <input

                    className="flex-1 bg-slate-800 rounded-xl px-5 py-4 outline-none"

                    placeholder="Ask anything about your study material..."

                />

                <button

                    className="bg-indigo-600 hover:bg-indigo-700 px-8 rounded-xl font-bold transition"

                >

                    Send

                </button>

            </div>

        </div>

    );

}