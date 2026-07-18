"use client";

import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaLeaf,
    FaRobot,
    FaBell,
} from "react-icons/fa";

import Container from "../common/Container";

export default function NewsletterSection() {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Background Effects */}
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
            />

            <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl"
            />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-600 via-emerald-500 to-sky-500 px-6 py-14 text-white shadow-2xl md:px-12"
                >
                    {/* Decorative Icon */}
                    <div className="absolute right-8 top-8 hidden rounded-full bg-white/20 p-5 backdrop-blur md:block">
                        <FaRobot size={35} />
                    </div>

                    <div className="grid items-center gap-10 md:grid-cols-2">
                        {/* Left Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur"
                            >
                                <FaBell />
                                AI Sustainability Updates
                            </motion.div>

                            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                                Get Smarter Eco Insights
                                <br />
                                Powered By AI
                            </h2>

                            <p className="mt-5 max-w-lg text-white/90">
                                Receive personalized sustainability tips, AI discoveries, and environmental insights directly in your inbox.
                            </p>

                            {/* Benefits */}
                            <div className="mt-8 space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaLeaf />
                                    Weekly sustainability recommendations
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaRobot />
                                    AI-powered environmental insights
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl"
                        >
                            <h3 className="text-xl font-semibold">Join EcoTrack AI Community</h3>
                            <p className="mt-2 text-sm text-white/80">
                                Stay updated with the latest AI and sustainability trends.
                            </p>

                            <div className="mt-6 flex flex-col gap-3">
                                <div className="flex items-center rounded-xl bg-white px-4">
                                    <FaEnvelope className="text-emerald-600" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-transparent px-4 py-3 text-slate-900 outline-none"
                                    />
                                </div>

                                <button className="rounded-xl bg-slate-950 px-6 py-3 font-semibold transition hover:bg-slate-800">
                                    Subscribe Now
                                </button>
                            </div>

                            <p className="mt-4 text-xs text-white/70">
                                No spam. Only meaningful AI-powered insights.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}