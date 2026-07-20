"use client";

import { motion } from "framer-motion";
import {
    FaFileContract,
    FaCheckCircle,
    FaLaptopCode,
    FaUserLock,
    FaRobot,
    FaShieldAlt,
    FaCalendarAlt
} from "react-icons/fa";

const termsSections = [
    {
        title: "Acceptance of Terms",
        content: "By using EcoTrack AI, you agree to comply with these Terms & Conditions and all applicable laws and regulations.",
        icon: FaCheckCircle,
        color: "bg-emerald-100 text-emerald-600 border-emerald-100",
    },
    {
        title: "Use of the Platform",
        content: "You may use EcoTrack AI for personal and educational purposes related to sustainability and environmental awareness.",
        icon: FaLaptopCode,
        color: "bg-cyan-100 text-cyan-600 border-cyan-100",
    },
    {
        title: "User Responsibilities",
        content: "Users are responsible for maintaining the confidentiality of their account credentials and for all activities conducted under their account.",
        icon: FaUserLock,
        color: "bg-teal-100 text-teal-600 border-teal-100",
    },
    {
        title: "AI Recommendations",
        content: "Our AI-generated recommendations are provided for informational purposes and should not be considered professional environmental or financial advice.",
        icon: FaRobot,
        color: "bg-emerald-100 text-emerald-600 border-emerald-100",
    },
    {
        title: "Limitation of Liability",
        content: "EcoTrack AI is not liable for any damages arising from the use of the platform or reliance on AI-generated recommendations.",
        icon: FaShieldAlt,
        color: "bg-cyan-100 text-cyan-600 border-cyan-100",
    },
];

export default function TermsPage() {
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
                        <FaFileContract className="text-emerald-600 text-sm" />
                        <span>Legal & Agreement</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl"
                    >
                        Terms & <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Conditions</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-4 inline-flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-xs border border-slate-200/60 backdrop-blur-md"
                    >
                        <FaCalendarAlt className="text-emerald-600 text-sm" />
                        <span>Last updated: July 2026</span>
                    </motion.div>
                </div>
            </div>

            {/* Terms Content Grid */}
            <div className="mx-auto max-w-4xl px-4 mt-6">
                <div className="space-y-6">
                    {termsSections.map((section, index) => {
                        const IconComponent = section.icon;
                        return (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-slate-100 transition-all hover:shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-32 h-32 rounded-full bg-emerald-500/5 blur-2xl pointer-events-none" />

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${section.color}`}>
                                        <IconComponent />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-slate-900">
                                            {section.title}
                                        </h2>
                                        <p className="mt-3 text-base text-slate-600 leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}