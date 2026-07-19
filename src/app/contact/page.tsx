"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50">
            <div className="mx-auto max-w-7xl px-4 py-20">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-slate-900 md:text-6xl"
                    >
                        Contact <span className="text-emerald-600">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-6 max-w-2xl text-xl text-slate-600"
                    >
                        Have questions about EcoTrack AI? We would love to hear from you.
                    </motion.p>
                </div>

                <div className="mt-16 grid gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="rounded-3xl bg-white p-8 shadow-xl"
                    >
                        <h2 className="text-3xl font-bold text-slate-900">
                            Send us a message
                        </h2>

                        <form className="mt-8 space-y-6">
                            <div>
                                <label className="mb-2 block font-medium text-slate-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-slate-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                                    placeholder="Enter your message"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 py-3 font-semibold text-white transition hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {[
                            {
                                icon: FaEnvelope,
                                title: "Email",
                                info: "hello@ecotrackai.com",
                            },
                            {
                                icon: FaPhone,
                                title: "Phone",
                                info: "+880 1234-567890",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                title: "Location",
                                info: "Dhaka, Bangladesh",
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="rounded-3xl bg-white p-6 shadow-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-600">
                                            <Icon className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600">{item.info}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}