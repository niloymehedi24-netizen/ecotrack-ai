"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaArrowRight,
    FaLeaf,
    FaRobot,
    FaChartLine,
} from "react-icons/fa";

import Container from "../common/Container";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Background Glow */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl"
            />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center text-white shadow-2xl md:px-12"
                >
                    {/* Floating Icons */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute left-8 top-10 hidden rounded-2xl bg-white/10 p-4 backdrop-blur md:block"
                    >
                        <FaLeaf size={30} className="text-emerald-400" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute right-8 bottom-10 hidden rounded-2xl bg-white/10 p-4 backdrop-blur md:block"
                    >
                        <FaRobot size={30} className="text-sky-400" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300">
                            <FaChartLine />
                            Start Your Sustainability Journey
                        </div>

                        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                            Ready to Make a Real
                            <span className="text-emerald-400">{" "}Environmental Impact?</span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
                            Join EcoTrack AI and use intelligent AI recommendations to build better, sustainable habits every day.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                href="/register"
                                className="group flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-600"
                            >
                                Get Started Free
                                <FaArrowRight className="transition group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/about"
                                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold transition hover:bg-white/10"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
                            <span>✓ AI Powered</span>
                            <span>✓ Secure Platform</span>
                            <span>✓ Sustainable Future</span>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}