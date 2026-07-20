"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useItem } from "@/hooks/useItem";

export default function ItemDetailsPage() {
    const params = useParams();
    const id = params.id as string;
    const { data: item, isLoading, isError } = useItem(id);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
            </div>
        );
    }

    if (isError || !item) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-slate-900">Item not found</h1>
                <p className="mt-2 text-slate-600">The eco solution you are looking for does not exist.</p>
                <Link href="/explore" className="mt-6 rounded-xl bg-emerald-500 px-6 py-3 text-white transition hover:bg-emerald-600">
                    Back to Explore
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50 py-12">
            <div className="mx-auto max-w-7xl px-4">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid gap-10 lg:grid-cols-2">
                    {/* Product Image */}
                    <div className="relative h-125 overflow-hidden rounded-3xl shadow-2xl">
                        <Image src={item.image} alt={item.title} fill className="object-cover" priority />
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                        <span className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">{item.category}</span>
                        <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">{item.title}</h1>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600">{item.description}</p>
                        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-medium text-slate-600">Price</span>
                                <span className="text-3xl font-bold text-emerald-600">${item.price}</span>
                            </div>
                            <div className="mt-4 flex items-center justify-between border-t pt-4">
                                <span className="text-slate-600">Added on</span>
                                <span className="font-medium text-slate-900">{new Date(item.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <button className="flex-1 rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:shadow-xl cursor-pointer">
                                Save Solution
                            </button>
                            <Link href="/explore" className="flex-1 rounded-2xl border border-slate-300 px-8 py-4 text-center font-semibold text-slate-700 transition hover:bg-slate-100">
                                Back to Explore
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Information */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mt-16 rounded-3xl bg-white p-8 shadow-xl">
                    <h2 className="text-3xl font-bold text-slate-900">Why this eco solution matters</h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        {item.title} is designed to help individuals and businesses adopt more sustainable practices. By choosing this eco-friendly solution, users can contribute to reducing environmental impact and building a greener future.
                    </p>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl bg-emerald-50 p-6 text-center">
                            <h3 className="text-xl font-bold text-emerald-700">Sustainable</h3>
                            <p className="mt-2 text-slate-600">Supports eco-friendly living</p>
                        </div>
                        <div className="rounded-2xl bg-cyan-50 p-6 text-center">
                            <h3 className="text-xl font-bold text-cyan-700">Efficient</h3>
                            <p className="mt-2 text-slate-600">Optimized for better performance</p>
                        </div>
                        <div className="rounded-2xl bg-emerald-50 p-6 text-center">
                            <h3 className="text-xl font-bold text-emerald-700">Impactful</h3>
                            <p className="mt-2 text-slate-600">Helps reduce carbon footprint</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}