"use client";

import { useState } from "react";
import { FaMagic, FaLeaf } from "react-icons/fa";
import { useRecommendation } from "@/hooks/useRecommendation";
import toast from "react-hot-toast";

export default function RecommendationsPage() {
    const [formData, setFormData] = useState({
        category: "Energy" as "Energy" | "Water" | "Waste" | "Reusable",
        budget: 50,
        goal: "",
        livingType: "Apartment" as "Apartment" | "House" | "Office",
    });

    const { mutateAsync, data, isPending } = useRecommendation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.goal.trim()) {
            toast.error("Please enter your sustainability goal");
            return;
        }

        try {
            await mutateAsync(formData);
            toast.success("Recommendations generated successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate recommendations");
        }
    };

    return (
        <div className="p-6 md:p-10">
            <div className="mb-8">
                <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                    <FaMagic className="text-emerald-600" />
                    AI Smart Recommendations
                </h1>
                <p className="mt-2 text-slate-500">
                    Get personalized eco-friendly recommendations based on your lifestyle and sustainability goals.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Form Section */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                    <h2 className="mb-6 text-2xl font-bold text-slate-900">
                        Your Preferences
                    </h2>

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
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
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
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
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
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
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
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                            >
                                <option value="Apartment">Apartment</option>
                                <option value="House">House</option>
                                <option value="Office">Office</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 py-3 font-semibold text-white transition hover:shadow-lg disabled:opacity-50 cursor-pointer"
                        >
                            {isPending ? "Generating..." : "Get AI Recommendations"}
                        </button>
                    </form>
                </div>

                {/* Results Section */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                    <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900">
                        <FaLeaf className="text-emerald-600" />
                        Personalized Recommendations
                    </h2>

                    {data?.recommendations ? (
                        <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                            {data.recommendations}
                        </div>
                    ) : (
                        <div className="flex h-full min-h-75 flex-col items-center justify-center text-center">
                            <div className="mb-4 rounded-full bg-emerald-100 p-4 text-emerald-600">
                                <FaMagic size={32} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-800">
                                Ready for Smart Recommendations
                            </h3>
                            <p className="mt-2 text-slate-500">
                                Fill out your preferences and EcoTrack AI will generate personalized sustainability recommendations for you.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}