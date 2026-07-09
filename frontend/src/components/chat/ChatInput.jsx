import { useState } from "react";

export default function ChatInput({
  onSend,
  loading,
}) {
  const [message, setMessage] = useState("");

  const send = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-4">

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            send();
          }
        }}
        placeholder="Ask PrepMind AI anything..."
        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none"
      />

      <button
        disabled={loading}
        onClick={send}
        className="bg-indigo-600 hover:bg-indigo-700 px-8 rounded-xl font-semibold"
      >
        Send
      </button>

    </div>
  );
}