"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createItem } from "@/services/item.service";
import type { ItemCategory } from "@/types/item";
import toast from "react-hot-toast";

export default function AddItemPage() {
    const router = useRouter();

    const [form, setForm] = useState<{
        title: string;
        description: string;
        category: ItemCategory;
        image: string;
        price: string;
    }>({
        title: "",
        description: "",
        category: "Reusable",
        image: "",
        price: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createItem({
            title: form.title,
            description: form.description,
            category: form.category,
            image: form.image,
            price: Number(form.price),
        });
        toast.success("Item added successfully");
        router.push("/admin/items");
    };

    return (
        <div className="mx-auto max-w-2xl p-6">
            <h1 className="mb-8 text-3xl font-bold">Add Eco Item</h1>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-white p-8 shadow-xl">
                <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full rounded-xl border p-3" required />
                <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full rounded-xl border p-3" rows={4} required />
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as ItemCategory })} className="w-full rounded-xl border p-3">
                    <option value="Reusable">Reusable</option>
                    <option value="Energy">Energy</option>
                    <option value="Waste">Waste</option>
                    <option value="Water">Water</option>
                </select>
                <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full rounded-xl border p-3" required />
                <input placeholder="Price" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full rounded-xl border p-3" required />
                <button type="submit" className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-400 cursor-pointer">
                    Add Item
                </button>
            </form>
        </div>
    );
}