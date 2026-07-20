"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
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
                        <FaEnvelope className="text-emerald-600 text-sm" />
                        <span>Get in Touch</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl"
                    >
                        We would love to <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">hear from you</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-4 max-w-xl text-base text-slate-600 md:text-lg"
                    >
                        Have questions about EcoTrack AI or want to collaborate? Drop us a message below.
                    </motion.p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="mx-auto max-w-7xl px-4 mt-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-xl border border-slate-100"
                    >
                        <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-32 h-32 rounded-full bg-emerald-500/5 blur-2xl pointer-events-none" />

                        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                            Send us a message
                        </h2>
                        <p className="text-sm text-slate-500 mt-1 mb-8">Fill out the form and our team will get back to you shortly.</p>

                        <form className="space-y-6">
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 resize-none"
                                    placeholder="Enter your message"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-linear-to-r from-emerald-600 to-teal-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/25 transition-transform hover:scale-[1.02] cursor-pointer"
                            >
                                <FaPaperPlane className="text-sm" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 flex flex-col justify-center"
                    >
                        {[
                            {
                                icon: FaEnvelope,
                                title: "Email Us",
                                info: "hello@ecotrackai.com",
                                desc: "We respond within 24 hours.",
                                color: "bg-emerald-100 text-emerald-600 border-emerald-100",
                            },
                            {
                                icon: FaPhone,
                                title: "Call Us",
                                info: "+880 1234-567890",
                                desc: "Mon-Fri from 9am to 6pm.",
                                color: "bg-cyan-100 text-cyan-600 border-cyan-100",
                            },
                            {
                                icon: FaMapMarkerAlt,
                                title: "Our Location",
                                info: "Dhaka, Bangladesh",
                                desc: "Come visit our headquarters.",
                                color: "bg-teal-100 text-teal-600 border-teal-100",
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl border border-slate-100 transition-all hover:shadow-2xl"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`rounded-2xl p-4 text-2xl ${item.color}`}>
                                            <Icon />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-base font-medium text-slate-800 mt-0.5">{item.info}</p>
                                            <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
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