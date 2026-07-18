"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";

const steps = [
    {
        number: "01",
        title: "Track Your Activities",
        text: "Record your daily sustainability actions and environmental habits.",
    },
    {
        number: "02",
        title: "AI Analyzes Data",
        text: "Our AI agent studies your patterns and identifies opportunities.",
    },
    {
        number: "03",
        title: "Get Smart Actions",
        text: "Receive personalized recommendations to reduce your impact.",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="py-20">
            <Container>
                <h2 className="text-center text-3xl font-bold">How EcoTrack AI Works</h2>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="rounded-2xl bg-white p-8 border"
                        >
                            <span className="text-4xl font-bold text-emerald-500">
                                {step.number}
                            </span>

                            <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                            <p className="mt-3 text-slate-600">{step.text}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}