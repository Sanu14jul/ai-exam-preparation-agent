import { useRef, useState, useEffect } from "react";

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
        "Hello 👋\n\nI'm PrepMind AI.\n\nAsk me anything.",
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

      let aiMessage = "";

      if (result.response.study_plan) {
        aiMessage = JSON.stringify(
          result.response.study_plan,
          null,
          2
        );
      } else if (result.response.quiz) {
        aiMessage = JSON.stringify(
          result.response.quiz,
          null,
          2
        );
      } else if (result.response.rag_answer) {
        aiMessage =
          result.response.rag_answer;
      } else {
        aiMessage =
          "No response generated.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message: aiMessage,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          message:
            "❌ Backend Error",
        },
      ]);

      console.log(err);
    }

    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          PrepMind AI 🤖
        </h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 h-[65vh] overflow-y-auto p-6">

          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}

          {loading && <TypingIndicator />}

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