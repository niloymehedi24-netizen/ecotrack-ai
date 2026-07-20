"use client";

import { motion } from "framer-motion";
import {
    FaLeaf,
    FaGlobe,
    FaMicrochip,
    FaUsers,
    FaShieldAlt,
    FaMagic,
    FaChartLine,
    FaHandshake
} from "react-icons/fa";

const stats = [
    { number: "10K+", label: "Active Users", icon: FaUsers },
    { number: "50K+", label: "AI Recommendations", icon: FaMicrochip },
    { number: "100+", label: "Eco Partners", icon: FaGlobe },
    { number: "1M+", label: "Carbon Saved (kg)", icon: FaChartLine },
];

const values = [
    {
        title: "AI-Driven Precision",
        description: "We harness advanced artificial intelligence and data modeling to deliver hyper-personalized carbon reduction strategies.",
        icon: FaMicrochip,
        color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
        title: "Radical Transparency",
        description: "Every metric, footprint calculation, and AI suggestion is fully transparent, verifiable, and backed by climate science.",
        icon: FaShieldAlt,
        color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    },
    {
        title: "Community Impact",
        description: "Sustainability is a team effort. We connect individuals and organizations to drive collective, measurable environmental change.",
        icon: FaHandshake,
        color: "bg-teal-50 text-teal-600 border-teal-100",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50/60 via-white to-cyan-50/60 pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_20%,rgba(16,185,129,0.08)_0%,transparent_100%)]" />
                <div className="mx-auto max-w-5xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs mb-6 backdrop-blur-md"
                    >
                        <FaMagic className="text-emerald-600 text-sm" />
                        <span>Our Purpose & Passion</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl"
                    >
                        Pioneering a Greener Future with <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">EcoTrack AI</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-6 max-w-2xl text-base text-slate-600 md:text-lg leading-relaxed"
                    >
                        We merge cutting-edge artificial intelligence with actionable sustainability metrics, empowering individuals and organizations to make smarter, eco-conscious decisions every single day.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision Grid */}
            <section className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid gap-8 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-slate-100 transition-all hover:shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-32 h-32 rounded-full bg-emerald-500/5 blur-2xl pointer-events-none" />
                        <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-600 shadow-inner text-2xl">
                            <FaLeaf />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Our Mission</h2>
                        <p className="mt-4 text-base text-slate-600 md:text-lg leading-relaxed">
                            To bridge the gap between complex environmental data and everyday habits. We provide intuitive tools and AI-driven insights that make reducing carbon footprints accessible and impactful for everyone.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-slate-100 transition-all hover:shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-32 h-32 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none" />
                        <div className="mb-6 inline-flex rounded-2xl bg-cyan-100 p-4 text-cyan-600 shadow-inner text-2xl">
                            <FaGlobe />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Our Vision</h2>
                        <p className="mt-4 text-base text-slate-600 md:text-lg leading-relaxed">
                            A world where sustainability is seamlessly integrated into daily decision-making. By leveraging technology, we envision a thriving global community actively reversing climate degradation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-slate-900">What Drives Us Forward</h2>
                    <p className="text-slate-600 mt-2">The core principles behind our platform and community.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {values.map((val, index) => {
                        const Icon = val.icon;
                        return (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="rounded-3xl bg-white p-8 shadow-xl border border-slate-100/80 transition-all hover:-translate-y-1 hover:shadow-2xl"
                            >
                                <div className={`mb-6 inline-flex rounded-2xl p-4 border text-2xl ${val.color}`}>
                                    <Icon />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
                                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{val.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Stats Banner */}
            <section className="mx-auto max-w-7xl px-4 py-8">
                <div className="rounded-3xl bg-linear-to-r from-emerald-600 to-teal-600 py-12 px-6 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                        {stats.map((stat, index) => {
                            const StatIcon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="mb-2 text-emerald-200 text-2xl">
                                        <StatIcon />
                                    </div>
                                    <div className="text-3xl font-extrabold md:text-4xl tracking-tight">
                                        {stat.number}
                                    </div>
                                    <div className="mt-1 text-xs md:text-sm font-medium text-emerald-100 uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}