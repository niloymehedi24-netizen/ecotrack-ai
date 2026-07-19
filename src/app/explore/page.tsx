"use client";

import { motion } from "framer-motion";
import {
    FaSearch,
    FaRecycle,
    FaSolarPanel,
    FaWater,
} from "react-icons/fa";
import Image from "next/image";

const items = [
    {
        id: 1,
        title: "Eco Water Bottle",
        category: "Reusable",
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&q=80",
        icon: FaWater,
    },
    {
        id: 2,
        title: "Solar Panel Kit",
        category: "Energy",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
        icon: FaSolarPanel,
    },
    {
        id: 3,
        title: "Recycling Bin",
        category: "Waste",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&q=80",
        icon: FaRecycle,
    },
];

export default function ExplorePage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50">
            {/* Hero */}
            <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-cyan-500/10" />
                <div className="relative mx-auto max-w-7xl px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-slate-900 md:text-6xl"
                    >
                        Explore <span className="text-emerald-600">Eco Solutions</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-6 max-w-2xl text-xl text-slate-600"
                    >
                        Discover sustainable products, services, and innovations that help
                        you reduce your carbon footprint.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-10 max-w-2xl"
                    >
                        <div className="flex items-center rounded-2xl bg-white p-2 shadow-xl">
                            <FaSearch className="ml-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search eco-friendly products..."
                                className="flex-1 px-4 py-3 outline-none"
                            />
                            <button className="rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:shadow-lg">
                                Search
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-4 py-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {["All", "Reusable", "Energy", "Waste", "Water"].map(
                        (category) => (
                            <button
                                key={category}
                                className="rounded-full bg-white px-6 py-3 font-medium text-slate-700 shadow-md transition hover:bg-emerald-500 hover:text-white"
                            >
                                {category}
                            </button>
                        )
                    )}
                </div>
            </section>

            {/* Products Grid */}
            <section className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                                            <Icon />
                                        </div>
                                        <span className="text-sm font-medium text-emerald-600">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-slate-600">
                                        Sustainable solution designed to help reduce environmental
                                        impact.
                                    </p>
                                    <button className="mt-6 w-full rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 py-3 font-semibold text-white transition hover:shadow-lg cursor-pointer">
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}