"use client";

import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is EcoTrack AI?",
        answer:
            "EcoTrack AI is an AI-powered sustainability platform that helps users track and reduce their carbon footprint.",
    },
    {
        question: "How does the AI assistant work?",
        answer:
            "The AI assistant analyzes your activities and provides personalized eco-friendly recommendations.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, we use secure authentication and encryption to protect your personal information.",
    },
];

export default function HelpPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50">
            <div className="mx-auto max-w-4xl px-4 py-20">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-slate-900 md:text-6xl"
                    >
                        Help & <span className="text-emerald-600">Support</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-6 max-w-2xl text-xl text-slate-600"
                    >
                        Find answers to common questions about EcoTrack AI.
                    </motion.p>
                </div>

                <div className="mt-16 space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >
                            <h3 className="text-xl font-bold text-slate-900">
                                {faq.question}
                            </h3>
                            <p className="mt-3 text-slate-600">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}