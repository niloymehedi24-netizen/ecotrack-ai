"use client";

import { useState } from "react";
import { FaRobot, FaPaperPlane, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useAIHistory, useSendAIMessage } from "@/hooks/useAIChat";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const suggestions = [
    "How can I reduce my carbon footprint?",
    "How can I save electricity at home?",
    "Give me sustainable lifestyle tips",
    "How can I reduce waste?",
];

export default function AIAssistantPage() {
    const [message, setMessage] = useState("");
    const [newMessages, setNewMessages] = useState<Message[]>([]);

    const { data: history, isLoading: historyLoading } = useAIHistory();
    const { mutateAsync, isPending } = useSendAIMessage();

    const messages: Message[] = [
        ...(history?.history?.messages ?? []),
        ...newMessages,
    ];

    const handleSend = async () => {
        if (!message.trim()) return;

        const userMessage: Message = { role: "user", content: message };
        setNewMessages((prev) => [...prev, userMessage]);
        const currentMessage = message;
        setMessage("");

        try {
            const result = await mutateAsync(currentMessage);
            setNewMessages((prev) => [...prev, { role: "assistant", content: result.response }]);
        } catch (error) {
            console.error(error);
            toast.error("AI response failed");
        }
    };

    return (
        <div className="p-6 md:p-10">
            {/* Header */}
            <div className="mb-8">
                <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                    <FaRobot className="text-emerald-600" />
                    EcoTrack AI Assistant
                </h1>
                <p className="mt-2 text-slate-500">
                    Your personal sustainability companion powered by AI.
                </p>
            </div>

            {/* Suggestions */}
            <div className="mb-6 flex flex-wrap gap-3">
                {suggestions.map((item) => (
                    <button
                        key={item}
                        onClick={() => setMessage(item)}
                        className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Chat Container */}
            <div className="flex h-150 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                {/* Messages */}
                <div className="flex-1 space-y-4 overflow-y-auto p-6">
                    {historyLoading && (
                        <div className="text-center text-slate-400">Loading conversation...</div>
                    )}

                    {!historyLoading && messages.length === 0 && (
                        <div className="flex h-full flex-col items-center justify-center text-center">
                            <FaLeaf className="text-5xl text-emerald-500" />
                            <h2 className="mt-4 text-xl font-semibold text-slate-800">Start a conversation</h2>
                            <p className="mt-2 text-slate-500">Ask anything about sustainability.</p>
                        </div>
                    )}

                    {messages.map((msg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[75%] rounded-2xl px-5 py-3 text-sm md:text-base ${msg.role === "user" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-800"}`}>
                                {msg.content}
                            </div>
                        </motion.div>
                    ))}

                    {isPending && (
                        <div className="w-fit rounded-2xl bg-slate-100 px-5 py-3 text-slate-500">
                            AI is thinking...
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="flex gap-3 border-t border-slate-200 p-4">
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSend();
                        }}
                        placeholder="Ask EcoTrack AI..."
                        className="flex-1 rounded-xl border border-slate-200 px-4 outline-none focus:border-emerald-400"
                    />
                    <button
                        onClick={handleSend}
                        disabled={isPending}
                        className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                    >
                        <FaPaperPlane />
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}