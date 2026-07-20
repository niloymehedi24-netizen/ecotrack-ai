"use client";

import { useState } from "react";
import { FaMagic, FaLeaf, FaTrashAlt, FaSlidersH, FaLightbulb } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRecommendation } from "@/hooks/useRecommendation";
import toast from "react-hot-toast";

export default function RecommendationsPage() {
    const [formData, setFormData] = useState({
        category: "Energy" as "Energy" | "Water" | "Waste" | "Reusable",
        budget: 50,
        goal: "",
        livingType: "Apartment" as "Apartment" | "House" | "Office",
    });

    const [isCleared, setIsCleared] = useState(false);

    const { mutateAsync, data, isPending } = useRecommendation();

    // If cleared locally, ignore backend data and show empty state
    const recommendations = isCleared ? null : (data?.recommendations ?? null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.goal.trim()) {
            toast.error("Please enter your sustainability goal");
            return;
        }

        if (isCleared) setIsCleared(false);

        try {
            await mutateAsync(formData);
            toast.success("Recommendations generated successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate recommendations");
        }
    };

    const handleClear = () => {
        setIsCleared(true);
        toast.success("Recommendations cleared successfully");
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50/60 via-white to-cyan-50/60 pb-24 p-6 md:p-10">
            {/* Header */}
            <div className="mx-auto max-w-7xl mb-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-xs mb-4 backdrop-blur-md">
                    <FaMagic className="text-emerald-600 text-sm" />
                    <span>AI Intelligence</span>
                </div>
                <h1 className="flex items-center gap-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                    AI Smart Recommendations
                </h1>
                <p className="mt-3 text-base text-slate-600 md:text-lg max-w-2xl">
                    Get personalized eco-friendly recommendations tailored to your lifestyle, living space, and sustainability goals.
                </p>
            </div>

            <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-2xl backdrop-blur-xl"
                >
                    <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-32 h-32 rounded-full bg-emerald-500/5 blur-2xl pointer-events-none" />

                    <div className="flex items-center justify-between mb-8">
                        <h2 className="flex items-center gap-2.5 text-2xl font-bold text-slate-900">
                            <FaSlidersH className="text-emerald-600 text-xl" />
                            Your Preferences
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Preferred Category
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        category: e.target.value as "Energy" | "Water" | "Waste" | "Reusable",
                                    })
                                }
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 cursor-pointer"
                            >
                                <option value="Energy">Energy</option>
                                <option value="Water">Water</option>
                                <option value="Waste">Waste</option>
                                <option value="Reusable">Reusable</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Monthly Budget ($)
                            </label>
                            <input
                                type="number"
                                value={formData.budget}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        budget: Number(e.target.value),
                                    })
                                }
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Sustainability Goal
                            </label>
                            <textarea
                                value={formData.goal}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        goal: e.target.value,
                                    })
                                }
                                placeholder="Example: Reduce electricity usage at home and lower my monthly energy bill."
                                rows={4}
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 resize-none"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Living Type
                            </label>
                            <select
                                value={formData.livingType}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        livingType: e.target.value as "Apartment" | "House" | "Office",
                                    })
                                }
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-slate-800 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 cursor-pointer"
                            >
                                <option value="Apartment">Apartment</option>
                                <option value="House">House</option>
                                <option value="Office">Office</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full rounded-2xl bg-linear-to-r from-emerald-600 to-teal-600 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
                        >
                            {isPending ? "Generating Recommendations..." : "Get AI Recommendations"}
                        </button>
                    </form>
                </motion.div>

                {/* Results Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col"
                >
                    <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-32 h-32 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none" />

                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 text-lg shadow-inner">
                                <FaLeaf />
                            </div>
                            Personalized Results
                        </h2>

                        {recommendations && (
                            <button
                                onClick={handleClear}
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-rose-600 shadow-xs border border-rose-100 transition hover:bg-rose-50 cursor-pointer"
                            >
                                <FaTrashAlt />
                                Clear Results
                            </button>
                        )}
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {isPending ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex h-full min-h-87.5 flex-col items-center justify-center text-center p-6"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 text-2xl shadow-inner mb-4 animate-pulse">
                                        <FaMagic />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">
                                        Analyzing your goals...
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500 max-w-sm">
                                        Our AI engine is processing your preferences to curate custom sustainability suggestions.
                                    </p>
                                </motion.div>
                            ) : recommendations ? (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full overflow-y-auto max-h-125 pr-2"
                                >
                                    <div className="whitespace-pre-wrap text-slate-700 leading-relaxed bg-slate-50/60 p-6 rounded-2xl border border-slate-200/60 text-sm md:text-base">
                                        {recommendations}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex h-full min-h-87.5 flex-col items-center justify-center text-center p-6"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 text-2xl shadow-inner mb-4">
                                        <FaLightbulb />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">
                                        Ready for Smart Recommendations
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500 max-w-sm">
                                        Fill out your preferences on the left and EcoTrack AI will generate custom sustainability recommendations for you.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}