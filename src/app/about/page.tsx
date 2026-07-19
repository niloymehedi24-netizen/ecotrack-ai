"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaGlobe } from "react-icons/fa";

const stats = [
    { number: "10K+", label: "Users" },
    { number: "50K+", label: "AI Recommendations" },
    { number: "100+", label: "Eco Partners" },
    { number: "1M+", label: "Carbon Saved" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50">
            {/* Hero */}
            <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-cyan-500/10" />
                <div className="relative mx-auto max-w-7xl px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-slate-900 md:text-6xl"
                    >
                        About <span className="text-emerald-600">EcoTrack AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-6 max-w-3xl text-xl text-slate-600"
                    >
                        We combine artificial intelligence with sustainability to help
                        individuals and organizations make smarter eco-friendly decisions.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid gap-12 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="rounded-3xl bg-white p-8 shadow-xl"
                    >
                        <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600">
                            <FaLeaf className="text-3xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            To empower people with AI-driven insights that reduce carbon
                            footprints and promote sustainable living worldwide.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="rounded-3xl bg-white p-8 shadow-xl"
                    >
                        <div className="mb-6 inline-flex rounded-2xl bg-cyan-100 p-4 text-cyan-600">
                            <FaGlobe className="text-3xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            A world where every decision is informed by AI-powered
                            sustainability data, creating a greener future for all.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-linear-to-r from-emerald-500 to-cyan-500 py-16">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center text-white"
                            >
                                <div className="text-4xl font-bold md:text-5xl">
                                    {stat.number}
                                </div>
                                <div className="mt-2 text-emerald-100">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}