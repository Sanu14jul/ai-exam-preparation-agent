import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sendMessage } from "../../services/chatService";

export default function NotesPanel() {

    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);

    async function generateNotes() {

        setLoading(true);

        try {

            const userId = localStorage.getItem("user_id");

            const prompt = `
Generate high quality study notes from the uploaded PDF.

Format:

# Title

## Overview

## Important Concepts

## Key Points

## Examples

## Quick Revision

Use markdown formatting.
`;

            const result = await sendMessage(userId, prompt);

            setNotes(
                result.response?.notes ||
                result.data?.response?.notes ||
                "No notes generated."
            );

        } catch (err) {

            console.error(err);

            setNotes("Failed to generate notes.");

        }

        setLoading(false);

    }

    async function copyNotes() {

        await navigator.clipboard.writeText(notes);

        alert("Copied");

    }

    function downloadNotes() {

        const blob = new Blob([notes], {
            type: "text/markdown"
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "PrepMind-Notes.md";
        a.click();

        URL.revokeObjectURL(url);

    }

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6">

            <div className="flex justify-between items-center">

                <h2 className="text-xl font-bold">
                    📝 AI Notes
                </h2>

                <div className="flex gap-3">

                    <button
                        onClick={generateNotes}
                        className="bg-indigo-600 px-4 py-2 rounded-xl"
                    >
                        {loading ? "Generating..." : "Generate"}
                    </button>

                    <button
                        onClick={copyNotes}
                        className="bg-slate-700 px-4 py-2 rounded-xl"
                    >
                        Copy
                    </button>

                    <button
                        onClick={downloadNotes}
                        className="bg-green-600 px-4 py-2 rounded-xl"
                    >
                        Download
                    </button>

                </div>

            </div>

            <div className="prose prose-invert max-w-none mt-8">

                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {notes}
                </ReactMarkdown>

            </div>

        </div>

    );

}