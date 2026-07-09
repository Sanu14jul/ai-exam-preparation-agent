import {
  useEffect,
  useRef,
  useState,
} from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import ChatInput from "../../components/chat/ChatInput";
import ChatMessage from "../../components/chat/ChatMessage";
import TypingIndicator from "../../components/chat/TypingIndicator";

import { sendMessage } from "../../services/chatService";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message:
        "Hello 👋 I'm PrepMind AI.\nAsk me anything.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async (message) => {
    const userId =
      localStorage.getItem("user_id") || "1";

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message,
      },
    ]);

    setLoading(true);

    try {
      const result = await sendMessage(
        userId,
        message
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          response: result.response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message:
            "❌ Failed to contact AI server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">

             <h1 className="text-5xl font-bold">

                      PrepMind AI

             </h1>

                 <p className="text-slate-400 mt-3">

                    Your AI assistant for UPSC, SSC, Railway, BPSC and other competitive exams.

                  </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl h-[65vh] overflow-y-auto p-6">

          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
              response={msg.response}
            />
          ))}

          {loading && (
            <TypingIndicator />
          )}

          <div ref={bottomRef} />

        </div>

        <div className="mt-6">

          <ChatInput
            loading={loading}
            onSend={handleSend}
          />

        </div>

      </div>
    </DashboardLayout>
  );
}