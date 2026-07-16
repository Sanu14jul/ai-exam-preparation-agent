export default function ChatHistory() {

    const chats = [

        "Modern History",

        "Polity Revision",

        "Economics",

        "DBMS",

        "Operating System",

    ];

    return (

        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

            <h2 className="text-xl font-bold mb-6">

                Chat History

            </h2>

            <div className="space-y-3">

                {

                    chats.map((chat, index) => (

                        <div

                            key={index}

                            className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 cursor-pointer transition"

                        >

                            💬 {chat}

                        </div>

                    ))

                }

            </div>

        </div>

    );

}