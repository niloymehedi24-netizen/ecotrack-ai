"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";

const capabilities = [
    "Carbon footprint analysis",
    "AI-powered sustainability planning",
    "Personalized eco recommendations",
    "Smart environmental insights",
];

export default function AICapabilitiesSection() {
    return (
        <section className="bg-slate-950 py-20 text-white">
            <Container>
                <div className="grid gap-10 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold">AI That Understands Your Impact</h2>
                        <p className="mt-5 text-slate-300">
                            Our agentic AI analyzes your data, reasons about patterns, and provides actionable sustainability strategies.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {capabilities.map((item) => (
                            <div
                                key={item}
                                className="rounded-xl bg-white/10 p-4 backdrop-blur"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}