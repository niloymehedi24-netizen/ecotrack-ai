"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getItemById, updateItem } from "@/services/item.service";
import type { ItemCategory } from "@/types/item";
import toast from "react-hot-toast";

export default function EditItemPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "Reusable" as ItemCategory,
        image: "",
        price: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const item = await getItemById(id);
                setForm({
                    title: item.title,
                    description: item.description,
                    category: item.category,
                    image: item.image,
                    price: String(item.price),
                });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchItem();
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateItem(id, {
            title: form.title,
            description: form.description,
            category: form.category,
            image: form.image,
            price: Number(form.price),
        });
        toast.success("Item updated successfully");
        router.push("/admin/items");
    };

    if (loading) {
        return <div className="p-10">Loading item...</div>;
    }

    return (
        <div className="mx-auto max-w-2xl p-6">
            <h1 className="mb-8 text-3xl font-bold">Edit Eco Item</h1>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-white p-8 shadow-xl">
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full rounded-xl border p-3" required />
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" className="w-full rounded-xl border p-3" rows={4} required />
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as ItemCategory })} className="w-full rounded-xl border p-3">
                    <option value="Reusable">Reusable</option>
                    <option value="Energy">Energy</option>
                    <option value="Waste">Waste</option>
                    <option value="Water">Water</option>
                </select>
                <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="Image URL" className="w-full rounded-xl border p-3" required />
                <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="Price" type="number" className="w-full rounded-xl border p-3" required />
                <div className="flex gap-4">
                    <button type="submit" className="flex-1 rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600">
                        Update Item
                    </button>
                    <button type="button" onClick={() => router.push("/admin/items")} className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}