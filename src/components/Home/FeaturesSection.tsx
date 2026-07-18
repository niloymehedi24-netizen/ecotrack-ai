"use client";

import { motion } from "framer-motion";
import {
    FaRobot,
    FaLightbulb,
    FaComments,
} from "react-icons/fa";

import Container from "../common/Container";

const features = [
    {
        icon: FaRobot,
        title: "AI Content Generator",
        description:
            "Generate sustainability reports, eco-friendly plans, and personalized suggestions using intelligent AI workflows.",
    },
    {
        icon: FaLightbulb,
        title: "Smart Recommendations",
        description:
            "Receive personalized recommendations based on your activities, habits, and environmental impact.",
    },
    {
        icon: FaComments,
        title: "AI Assistant",
        description:
            "Chat with an intelligent assistant that understands your sustainability goals and provides guidance.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-slate-50">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-slate-900">Powerful AI Features</h2>
                    <p className="mt-4 text-slate-600">Everything you need to make smarter environmental decisions.</p>
                </motion.div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                                    <Icon size={22} />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}