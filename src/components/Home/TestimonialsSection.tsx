"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import Container from "../common/Container";

const testimonials = [
    {
        name: "Sarah Ahmed",
        role: "Sustainability Advocate",
        image: "SA",
        review:
            "EcoTrack AI completely changed how I understand my environmental impact. The AI recommendations are practical and easy to follow.",
    },
    {
        name: "Daniel Lee",
        role: "Green Startup Founder",
        image: "DL",
        review:
            "The AI insights helped our team identify better sustainability strategies and reduce unnecessary resource usage.",
    },
    {
        name: "Maria Khan",
        role: "Environmental Science Student",
        image: "MK",
        review:
            "A beautifully designed platform with an intelligent assistant that actually understands sustainability goals.",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">
            {/* Background Glow */}
            <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

            <Container>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative text-center"
                >
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                        Community Feedback
                    </span>
                    <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
                        Loved by People Building
                        <span className="text-emerald-600">{" "}a Greener Future</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        See how EcoTrack AI helps users make smarter, sustainable decisions every day.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="relative mt-14 grid gap-8 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group relative rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
                        >
                            {/* Quote Icon */}
                            <div className="absolute right-6 top-6 text-emerald-100">
                                <FaQuoteLeft size={40} />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 text-yellow-400">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar key={i} size={15} />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="mt-6 leading-7 text-slate-600">{item.review}</p>

                            {/* User */}
                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-sky-500 font-bold text-white">
                                    {item.image}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">{item.name}</h4>
                                    <p className="text-sm text-slate-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}