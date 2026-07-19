"use client";

import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function AIAssistantPage() {
    const [message, setMessage] = useState("");

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold">EcoTrack AI Assistant</h1>
            <p className="mt-3 text-slate-500">
                Ask AI about sustainability, energy saving, and eco-friendly decisions.
            </p>

            <div className="mt-8 max-w-4xl rounded-3xl bg-white shadow-xl border p-6">
                <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
                    <FaRobot className="text-2xl text-emerald-600" />
                    <p>
                        Hello! I am your Eco Assistant. How can I help you today?
                    </p>
                </div>

                <div className="mt-6 flex gap-3">
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask something about sustainability..."
                        className="flex-1 rounded-xl border px-4 py-3 outline-none"
                    />
                    <button className="rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 px-5 text-white">
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    );
}