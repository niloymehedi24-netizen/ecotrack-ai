"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaSearch, FaRecycle, FaSolarPanel, FaWater, FaLeaf } from "react-icons/fa";
import Image from "next/image";
import { useItems } from "@/hooks/useItems";
import type { Item } from "@/types/item";

const categories = ["All", "Reusable", "Energy", "Waste", "Water"];

const categoryIcons: Record<string, React.ElementType> = {
    Reusable: FaLeaf,
    Energy: FaSolarPanel,
    Waste: FaRecycle,
    Water: FaWater,
};

export default function ExplorePage() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sort, setSort] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useItems({
        search,
        category: selectedCategory === "All" ? undefined : selectedCategory,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
        sort,
        page,
    });

    const items: Item[] = Array.isArray(data?.items) ? data.items : [];

    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50">
            {/* Hero */}
            <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-cyan-500/10" />
                <div className="relative mx-auto max-w-7xl px-4 text-center">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-slate-900 md:text-6xl">
                        Explore
                        <span className="text-emerald-600"> Eco Solutions</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
                        Discover sustainable products and innovations that help create a greener future.
                    </motion.p>
                    {/* Search */}
                    <div className="mx-auto mt-10 max-w-2xl">
                        <div className="flex items-center rounded-2xl bg-white p-2 shadow-xl">
                            <FaSearch className="ml-4 text-slate-400" />
                            <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Search eco products..." className="flex-1 px-4 py-3 outline-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button key={category} onClick={() => { setSelectedCategory(category); setPage(1); }} className={`rounded-full px-6 py-3 font-medium shadow-md transition ${selectedCategory === category ? "bg-emerald-500 text-white" : "bg-white text-slate-700 hover:bg-emerald-500 hover:text-white"}`}>
                            {category}
                        </button>
                    ))}
                </div>
                {/* Advanced Filters */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <input type="number" placeholder="Min price" value={minPrice} onChange={(e) => { setMinPrice(e.target.value); setPage(1); }} className="w-40 rounded-xl border bg-white px-4 py-3 outline-none" />
                    <input type="number" placeholder="Max price" value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value); setPage(1); }} className="w-40 rounded-xl border bg-white px-4 py-3 outline-none" />
                    <select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }} className="rounded-xl border bg-white px-4 py-3">
                        <option value="">Sort By</option>
                        <option value="price-low">Price Low → High</option>
                        <option value="price-high">Price High → Low</option>
                        <option value="name">Name</option>
                    </select>
                </div>
            </section>

            {/* Products */}
            <section className="mx-auto max-w-7xl px-4 py-12">
                {isLoading && (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="h-96 animate-pulse rounded-3xl bg-white" />
                        ))}
                    </div>
                )}
                {isError && (
                    <div className="rounded-2xl bg-red-50 p-6 text-center text-red-600">
                        Failed to load eco solutions.
                    </div>
                )}
                {!isLoading && items.length === 0 && (
                    <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
                        <h2 className="text-2xl font-bold">No eco solutions found</h2>
                        <p className="mt-2 text-slate-600">Try changing your filters.</p>
                    </div>
                )}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, index) => {
                        const Icon = categoryIcons[item.category] ?? FaLeaf;
                        return (
                            <motion.div key={item._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className="overflow-hidden rounded-3xl bg-white shadow-xl">
                                <div className="relative h-64">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2">
                                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                                            <Icon />
                                        </div>
                                        <span className="text-sm font-medium text-emerald-600">{item.category}</span>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                                    <p className="mt-3 line-clamp-2 text-slate-600">{item.description}</p>
                                    <p className="mt-3 font-semibold text-emerald-600">${item.price}</p>
                                    <button onClick={() => router.push(`/explore/${item._id}`)} className="mt-6 w-full rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 py-3 font-semibold text-white transition hover:shadow-lg">
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                {/* Pagination */}
                {data?.totalPages && data.totalPages > 1 && (
                    <div className="mt-12 flex justify-center gap-4">
                        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="rounded-xl bg-white px-5 py-3 shadow disabled:opacity-50">Previous</button>
                        <div className="rounded-xl bg-emerald-500 px-5 py-3 text-white">{page}</div>
                        <button disabled={page === data.totalPages} onClick={() => setPage(page + 1)} className="rounded-xl bg-white px-5 py-3 shadow disabled:opacity-50">Next</button>
                    </div>
                )}
            </section>
        </div>
    );
}