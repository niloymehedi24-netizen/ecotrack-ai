"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { getItems, deleteItem } from "@/services/item.service";
import type { Item } from "@/types/item";

export default function AdminItemsPage() {
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["admin-items"],
        queryFn: () => getItems(),
    });

    const items: Item[] = data?.items ?? [];

    const handleDelete = async (id: string) => {
        const confirmDelete = confirm("Delete this item?");
        if (!confirmDelete) return;
        await deleteItem(id);
        refetch();
    };

    if (isLoading) {
        return <div className="p-10">Loading items...</div>;
    }

    return (
        <div className="p-6">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Manage Eco Items</h1>
                <Link href="/admin/items/add" className="rounded-xl bg-emerald-500 px-6 py-3 text-white transition hover:bg-emerald-600">
                    Add Item
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item: Item) => (
                    <div key={item._id} className="overflow-hidden rounded-3xl bg-white shadow-xl">
                        <div className="relative h-48 w-full">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p className="mt-1 text-slate-600">{item.category}</p>
                            <p className="mt-2 font-semibold text-emerald-600">${item.price}</p>
                            <button onClick={() => handleDelete(item._id)} className="mt-5 w-full rounded-xl bg-red-500 py-3 text-white transition hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}