export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-5">

      <div className="bg-slate-800 rounded-xl px-5 py-4">

        <div className="flex gap-2">

          <span className="w-2 h-2 rounded-full bg-white animate-bounce"></span>

          <span
            className="w-2 h-2 rounded-full bg-white animate-bounce"
            style={{ animationDelay: ".2s" }}
          ></span>

          <span
            className="w-2 h-2 rounded-full bg-white animate-bounce"
            style={{ animationDelay: ".4s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}