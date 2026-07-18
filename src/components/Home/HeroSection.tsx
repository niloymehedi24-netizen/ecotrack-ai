"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLeaf, FaRobot, FaChartLine } from "react-icons/fa";

import Container from "../common/Container";


export default function HeroSection() {
    return (
        <section
            className="relative min-h-[70vh] overflow-hidden pt-32 pb-20">

            {/* Animated Background Glow */}

            <motion.div
                animate={{
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className=" absolute -right-32 -top-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

            <motion.div
                animate={{
                    y: [0, -25, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

            <Container>
                <div
                    className="grid items-center gap-12 md:grid-cols-2">

                    {/* Left Content */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                        }}

                        transition={{
                            duration: 0.8,
                        }}

                    >


                        {/* Badge */}

                        <motion.div

                            initial={{
                                opacity: 0,
                                y: -20
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: 0.2
                            }}

                            className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">

                            <FaRobot />

                            AI Powered Sustainability Platform

                        </motion.div>

                        {/* Heading */}

                        <h1
                            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">

                            Track your impact.
                            <br />

                            Build a

                            <span
                                className="text-emerald-600">
                                {" "}greener
                            </span>

                            future with AI.

                        </h1>

                        <p
                            className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            EcoTrack AI analyzes your sustainability habits,
                            provides intelligent recommendations, and helps
                            you make smarter environmental decisions.

                        </p>

                        {/* Buttons */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: 0.5
                            }}

                            className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/register"
                                className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700">
                                Start Tracking
                            </Link>

                            <Link
                                href="/explore"
                                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">

                                Explore Features

                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right AI Card */}

                    <motion.div

                        initial={{
                            opacity: 0,
                            scale: 0.8
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1
                        }}

                        transition={{
                            duration: 0.8,
                            delay: 0.3
                        }}

                        className="flex justify-center">

                        <motion.div

                            animate={{
                                y: [0, -15, 0]
                            }}

                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}

                            className=" relative flex h-85 w-85 flex-col items-center justify-center rounded-3xl bg-linear-to-br from-emerald-500 to-sky-500 text-white shadow-2xl">

                            <FaLeaf
                                size={100}
                            />

                            <h3
                                className="mt-5 text-2xl font-bold">
                                Eco Intelligence
                            </h3>

                            <div
                                className="mt-5 flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2">

                                <FaChartLine />

                                AI Impact Analysis

                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </Container>

        </section>
    );
}