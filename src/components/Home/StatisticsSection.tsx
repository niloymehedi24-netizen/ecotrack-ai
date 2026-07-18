"use client";

import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import {
    FaLeaf,
    FaChartLine,
    FaCloud,
    FaBolt,
} from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../common/Container";

const chartData = [
    { month: "Jan", impact: 35 },
    { month: "Feb", impact: 45 },
    { month: "Mar", impact: 52 },
    { month: "Apr", impact: 68 },
    { month: "May", impact: 76 },
    { month: "Jun", impact: 88 },
];

const metrics = [
    { title: "Carbon Reduction", value: "42%", icon: FaLeaf, description: "Average improvement" },
    { title: "AI Predictions", value: "98%", icon: FaChartLine, description: "Recommendation accuracy" },
    { title: "Energy Saved", value: "320 kWh", icon: FaBolt, description: "Monthly optimization" },
    { title: "CO₂ Insights", value: "12.5K", icon: FaCloud, description: "Data points analyzed" },
];

export default function StatisticsSection() {
    return (
        <section className="bg-slate-50 py-24">
            <Container>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                        AI Impact Analytics
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
                        Understand Your Environmental
                        <span className="text-emerald-600"> Impact</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        EcoTrack AI transforms your sustainability data into meaningful insights and actionable recommendations.
                    </p>
                </motion.div>

                {/* Dashboard */}
                <div className="mt-14 grid gap-8 lg:grid-cols-3">
                    {/* Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border bg-white p-6 shadow-sm lg:col-span-2"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold">Sustainability Growth</h3>
                                <p className="text-sm text-slate-500">AI tracked improvement score</p>
                            </div>
                            <div className="rounded-xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                                +28%
                            </div>
                        </div>

                        <div className="mt-8 h-75">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="impact" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="impact" stroke="#10b981" fill="url(#impact)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* AI Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-slate-950 p-6 text-white"
                    >
                        <h3 className="text-xl font-semibold">AI Analysis Summary</h3>
                        <p className="mt-3 text-sm text-slate-300">
                            Your sustainability score improved because of optimized energy usage and reduced carbon activities.
                        </p>

                        <div className="mt-8 space-y-4">
                            {metrics.map((metric, index) => {
                                const Icon = metric.icon;
                                return (
                                    <motion.div
                                        key={metric.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="rounded-2xl bg-white/10 p-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon className="text-emerald-400" />
                                            <div>
                                                <p className="text-sm text-slate-300">{metric.title}</p>
                                                <h4 className="text-xl font-bold">{metric.value}</h4>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}