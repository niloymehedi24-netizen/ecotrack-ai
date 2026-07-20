"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaSearch,
    FaChevronDown,
    FaQuestionCircle,
    FaEnvelope,
    FaCommentAlt,
    FaMagic,
    FaShieldAlt,
    FaLeaf,
    FaArrowRight
} from "react-icons/fa";
import Link from "next/link";

interface FAQ {
    question: string;
    answer: string;
    category: string;
    icon: React.ElementType;
}

const faqs: FAQ[] = [
    {
        question: "What is EcoTrack AI and how does it work?",
        answer: "EcoTrack AI is an intelligent sustainability platform that helps you log daily activities, calculate your carbon footprint, and leverage advanced AI to provide customized recommendations for reducing your environmental impact.",
        category: "General",
        icon: FaLeaf,
    },
    {
        question: "How do I calculate and log my carbon footprint?",
        answer: "Head over to your Dashboard or tracking section to input metrics regarding your transportation, energy consumption, food habits, and waste generation. Our system instantly computes your emissions in real-time.",
        category: "Tracking",
        icon: FaMagic,
    },
    {
        question: "How does the AI assistant generate personalized advice?",
        answer: "Our AI engine analyzes your historical tracking data against sustainability benchmarks. It then formulates practical, high-impact suggestions tailored explicitly to your daily routine.",
        category: "AI Assistant",
        icon: FaCommentAlt,
    },
    {
        question: "Is my personal data and account secure?",
        answer: "Yes, absolutely. We utilize robust HTTP-only cookie authentication, secure password hashing, and encrypted data transfers to ensure your privacy is never compromised.",
        category: "Account",
        icon: FaShieldAlt,
    },
    {
        question: "Can I sign in using my Google account?",
        answer: "Yes! EcoTrack AI supports seamless one-click Google OAuth authentication alongside traditional email and password registration.",
        category: "Account",
        icon: FaQuestionCircle,
    },
];

const categories = ["All", "General", "Tracking", "AI Assistant", "Account"];

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const filteredFaqs = faqs.filter((faq) => {
        const matchesSearch =
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50/60 via-white to-cyan-50/60 pb-24">
            {/* Hero Section */}
            <div className="relative overflow-hidden pt-20 pb-16 text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_20%,rgba(16,185,129,0.08)_0%,transparent_100%)]" />
                <div className="mx-auto max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs mb-6 backdrop-blur-md"
                    >
                        <FaMagic className="text-emerald-600 text-sm" />
                        <span>Support Center</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl"
                    >
                        How can we <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">help you</span> today?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-4 max-w-xl text-base text-slate-600 md:text-lg"
                    >
                        Search our knowledge base or pick a category below to find fast answers.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-8 max-w-xl relative"
                    >
                        <div className="relative flex items-center">
                            <FaSearch className="absolute left-4 text-slate-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Search questions (e.g., carbon footprint, AI, account)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-2xl border border-slate-200 bg-white/90 py-4 pr-4 pl-12 text-slate-800 shadow-lg backdrop-blur-xl transition focus:border-emerald-500 focus:outline-hidden focus:ring-4 focus:ring-emerald-500/10"
                            />
                        </div>
                    </motion.div>

                    {/* Category Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-2"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`rounded-xl px-4 py-2 text-sm font-medium transition cursor-pointer ${selectedCategory === cat
                                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                                        : "bg-white/80 text-slate-600 hover:bg-slate-100 border border-slate-200/60"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* FAQ Accordion Section */}
            <div className="mx-auto max-w-3xl px-4 mt-6">
                {filteredFaqs.length === 0 ? (
                    <div className="rounded-3xl bg-white p-12 text-center shadow-xl border border-slate-100">
                        <FaQuestionCircle className="mx-auto text-slate-300 mb-4 text-5xl" />
                        <h3 className="text-lg font-bold text-slate-800">No matching answers found</h3>
                        <p className="text-sm text-slate-500 mt-1">Try adjusting your search query or contact our support team directly.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredFaqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            const IconComponent = faq.icon;

                            return (
                                <motion.div
                                    key={faq.question}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                                            ? "border-emerald-500/50 bg-white shadow-xl shadow-emerald-950/5 ring-4 ring-emerald-500/5"
                                            : "border-slate-200/80 bg-white/80 shadow-xs hover:border-slate-300 hover:bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors text-lg ${isOpen ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                                                }`}>
                                                <IconComponent />
                                            </div>
                                            <span className="text-base font-semibold text-slate-900 md:text-lg">
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${isOpen ? "rotate-180 bg-emerald-50 text-emerald-600" : "text-slate-400"
                                            }`}>
                                            <FaChevronDown />
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 pt-0 border-t border-slate-100 mt-2">
                                                    <p className="text-slate-600 leading-relaxed pt-4">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* Contact Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-3xl bg-linear-to-r from-emerald-600 to-teal-600 p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold">Still have questions?</h3>
                            <p className="text-emerald-100 mt-2 max-w-md text-sm md:text-base">
                                Can not find the answer you are looking for? Reach out to our friendly support team and we will get back to you promptly.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-emerald-700 shadow-lg transition-transform hover:scale-105 cursor-pointer shrink-0"
                        >
                            <FaEnvelope className="text-base" />
                            Contact Support
                            <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}