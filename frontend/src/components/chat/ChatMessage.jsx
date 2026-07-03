export default function ChatMessage({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 whitespace-pre-wrap shadow-lg

        ${
          isUser
            ? "bg-indigo-600 text-white"
            : "bg-slate-800 text-slate-100"
        }`}
      >
        <div className="text-xs opacity-70 mb-2">
          {isUser ? "You" : "PrepMind AI"}
        </div>

        {message}
      </div>
    </div>
  );
}