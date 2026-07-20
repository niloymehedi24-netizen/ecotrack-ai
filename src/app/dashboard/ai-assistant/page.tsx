"use client";

import { useState } from "react";
import { FaRobot, FaPaperPlane, FaLeaf, FaTrashAlt } from "react-icons/fa";
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
    const [isCleared, setIsCleared] = useState(false);

    const { data: history, isLoading: historyLoading } = useAIHistory();
    const { mutateAsync, isPending } = useSendAIMessage();

    // If cleared locally, ignore backend history and show only new session messages
    const backendMessages = isCleared ? [] : (history?.history?.messages ?? []);
    const messages: Message[] = [
        ...backendMessages,
        ...newMessages,
    ];

    const handleSend = async () => {
        if (!message.trim()) return;

        // If user sends a message after clearing, reset the cleared flag
        if (isCleared) setIsCleared(false);

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

    const handleClearChat = () => {
        setNewMessages([]);
        setIsCleared(true);
        toast.success("Chat cleared successfully");
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50/60 via-white to-cyan-50/60 pb-24 p-6 md:p-10">
            {/* Header */}
            <div className="mx-auto max-w-5xl mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="flex items-center gap-3 text-3xl font-extrabold text-slate-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner text-xl">
                            <FaRobot />
                        </div>
                        EcoTrack AI Assistant
                    </h1>
                    <p className="mt-2 text-slate-500">
                        Your personal sustainability companion powered by advanced AI.
                    </p>
                </div>

                {messages.length > 0 && (
                    <button
                        onClick={handleClearChat}
                        className="inline-flex items-center gap-2 self-start md:self-auto rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-rose-600 shadow-sm border border-rose-100 transition hover:bg-rose-50 cursor-pointer"
                    >
                        <FaTrashAlt className="text-xs" />
                        Clear Chat
                    </button>
                )}
            </div>

            <div className="mx-auto max-w-5xl">
                {/* Suggestions */}
                <div className="mb-6 flex flex-wrap gap-2.5">
                    {suggestions.map((item) => (
                        <button
                            key={item}
                            onClick={() => setMessage(item)}
                            className="rounded-xl bg-white/80 border border-slate-200/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-xs transition hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 cursor-pointer backdrop-blur-md"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Chat Container */}
                <div className="flex h-150 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl backdrop-blur-xl">
                    {/* Messages Area */}
                    <div className="flex-1 space-y-4 overflow-y-auto p-6">
                        {historyLoading && !isCleared && (
                            <div className="flex h-full items-center justify-center text-slate-400">
                                Loading conversation...
                            </div>
                        )}

                        {!historyLoading || isCleared ? (
                            messages.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 text-2xl shadow-inner mb-4">
                                        <FaLeaf />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">Start a conversation</h3>
                                    <p className="mt-1 text-sm text-slate-500 max-w-sm">
                                        Ask anything about sustainability, carbon footprint reduction, or eco-friendly lifestyle tips.
                                    </p>
                                </div>
                            ) : (
                                messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3.5 text-sm md:text-base leading-relaxed shadow-xs ${msg.role === "user"
                                                ? "bg-linear-to-r from-emerald-600 to-teal-600 text-white rounded-br-xs"
                                                : "bg-slate-100 text-slate-800 rounded-bl-xs border border-slate-200/60"
                                            }`}>
                                            {msg.content}
                                        </div>
                                    </motion.div>
                                ))
                            )
                        ) : null}

                        {isPending && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-start"
                            >
                                <div className="rounded-2xl rounded-bl-xs bg-slate-100 px-5 py-3.5 text-sm text-slate-500 border border-slate-200/60 animate-pulse">
                                    AI is thinking...
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Input Bar */}
                    <div className="flex items-center gap-3 border-t border-slate-100 bg-white p-4">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSend();
                            }}
                            placeholder="Ask EcoTrack AI anything..."
                            className="flex-1 rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-3.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isPending}
                            className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer shrink-0"
                        >
                            <FaPaperPlane className="text-xs" />
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}