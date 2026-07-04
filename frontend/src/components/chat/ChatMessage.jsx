import { FaCopy, FaRobot, FaUser } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import ResponseRenderer from "../response/ResponseRenderer";

export default function ChatMessage({
  sender,
  message,
  response,
}) {
  const isUser = sender === "user";

  const copyText = () => {
    if (message) {
      navigator.clipboard.writeText(message);
    }
  };

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex gap-4 mb-8 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
          <FaRobot />
        </div>
      )}

      <div
        className={`rounded-2xl shadow-lg px-6 py-5 max-w-[80%] ${
          isUser
            ? "bg-indigo-600 text-white"
            : "bg-slate-800 text-white border border-slate-700"
        }`}
      >
        <div className="flex items-center justify-between mb-3">

          <span className="font-semibold">
            {isUser ? "You" : "PrepMind AI"}
          </span>

          <span className="text-xs opacity-70">
            {currentTime}
          </span>

        </div>

        {isUser ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message}
          </ReactMarkdown>
        ) : response ? (
          <ResponseRenderer response={response} />
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message}
          </ReactMarkdown>
        )}

        {!isUser && message && (
          <button
            onClick={copyText}
            className="mt-4 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
          >
            <FaCopy />
            Copy
          </button>
        )}
      </div>

      {isUser && (
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
          <FaUser />
        </div>
      )}
    </div>
  );
}