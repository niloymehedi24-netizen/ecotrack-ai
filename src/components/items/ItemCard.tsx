"use client";

import Image from "next/image";
import type { Item } from "@/types/item";

export default function ItemCard({ item }: { item: Item }) {
    return (
        <div className="rounded-3xl border bg-white overflow-hidden shadow-sm hover:shadow-xl transition">

            {/* Image Section */}
            <div className="relative h-52">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-5">
                <span className="text-xs rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                    {item.category}
                </span>

                <h3 className="mt-4 font-bold text-lg">
                    {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {item.description}
                </p>

                <div className="mt-4 font-semibold text-emerald-600">
                    ${item.price}
                </div>
            </div>

        </div>
    );
}