"use client";

import {
    FaLeaf,
    FaChartLine,
    FaRobot,
    FaHistory,
    FaArrowRight,
    FaSeedling,
} from "react-icons/fa";

import Link from "next/link";
import { motion } from "framer-motion";

import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
    const { user } = useAuth();

    const stats = [
        {
            title: "Eco Score",
            value: `${user?.ecoScore ?? 0}%`,
            icon: FaLeaf,
        },
        {
            title: "Carbon Saved",
            value: `${user?.carbonSaved ?? 0} kg`,
            icon: FaChartLine,
        },
        {
            title: "AI Suggestions",
            value: "12",
            icon: FaRobot,
        },
        {
            title: "Activities",
            value: "24",
            icon: FaHistory,
        },
    ];

    const activities = [
        "Completed sustainability assessment",
        "Generated AI eco recommendation",
        "Explored renewable energy solutions",
        "Saved carbon through eco activities",
    ];

    return (
        <div className="p-6 md:p-10 space-y-8">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-linear-to-r from-emerald-500 to-cyan-500 p-8 text-white shadow-xl"
            >
                <h1 className="text-3xl md:text-4xl font-bold">
                    Welcome back, {user?.name} 👋
                </h1>
                <p className="mt-3 max-w-xl text-white/90">
                    Track your environmental impact, get AI-powered suggestions, and improve your sustainability journey.
                </p>
                <Link
                    href="/dashboard/ai-assistant"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:scale-105"
                >
                    Ask AI Assistant
                    <FaArrowRight />
                </Link>
            </motion.div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl bg-white p-6 shadow-lg border hover:-translate-y-2 transition"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 text-xl">
                                <Icon />
                            </div>
                            <h3 className="mt-5 text-slate-600">{item.title}</h3>
                            <p className="mt-2 text-3xl font-bold">{item.value}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Section */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Quick Actions */}
                <div className="rounded-3xl bg-white p-6 shadow-lg border">
                    <h2 className="text-xl font-bold">Quick Actions</h2>
                    <div className="mt-5 space-y-3">
                        <Link
                            href="/explore"
                            className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-700 hover:bg-emerald-100"
                        >
                            <FaSeedling />
                            Explore Eco Solutions
                        </Link>
                        <Link
                            href="/dashboard/ai-assistant"
                            className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4 text-cyan-700 hover:bg-cyan-100"
                        >
                            <FaRobot />
                            Get AI Advice
                        </Link>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="rounded-3xl bg-white p-6 shadow-lg border">
                    <h2 className="text-xl font-bold">Recent Activities</h2>
                    <div className="mt-5 space-y-4">
                        {activities.map((activity) => (
                            <div
                                key={activity}
                                className="rounded-xl bg-slate-50 p-4 text-slate-600"
                            >
                                {activity}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}