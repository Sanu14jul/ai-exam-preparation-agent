import { useEffect, useRef, useState } from "react";

import ChatInput from "../chat/ChatInput";
import ChatMessage from "../chat/ChatMessage";
import TypingIndicator from "../chat/TypingIndicator";

import AIQuickActions from "./AIQuickActions";

import { sendMessage } from "../../services/chatService";

export default function WorkspaceChat() {

    const [messages, setMessages] = useState([
        {
            sender: "assistant",
            message:
                "👋 Welcome to PrepMind AI!\n\nYour uploaded PDF is ready.\n\nAsk me anything or use one of the AI Quick Actions below.",
        },
    ]);

    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages, loading]);

    async function handleSend(message) {

        if (!message || loading) return;

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
                    response:
                        result.response ||
                        result.data?.response ||
                        "No response received.",
                },
            ]);

        }

        catch (error) {

            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "assistant",
                    message:
                        "❌ Failed to contact AI server.",
                },
            ]);

        }

        finally {

            setLoading(false);

        }

    }

    function handleQuickAction(prompt) {

        handleSend(prompt);

    }

    return (

        <div className="space-y-6">

            <AIQuickActions
                onAction={handleQuickAction}
            />

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

                <div className="border-b border-slate-800 px-6 py-4">

                    <h2 className="text-xl font-bold">

                        🤖 AI Tutor

                    </h2>

                    <p className="text-slate-400 mt-2">

                        Ask questions about your uploaded study material.

                    </p>

                </div>

                <div className="h-[500px] overflow-y-auto p-6">

                    {

                        messages.map((msg, index) => (

                            <ChatMessage

                                key={index}

                                sender={msg.sender}

                                message={msg.message}

                                response={msg.response}

                            />

                        ))

                    }

                    {

                        loading && (

                            <TypingIndicator />

                        )

                    }

                    <div ref={bottomRef} />

                </div>

                <div className="border-t border-slate-800 p-5">

                    <ChatInput

                        loading={loading}

                        onSend={handleSend}

                    />

                </div>

            </div>

        </div>

    );

}