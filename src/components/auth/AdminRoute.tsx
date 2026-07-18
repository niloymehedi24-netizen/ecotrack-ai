"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AdminRoute({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [loading, user, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="h-10 w-10 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
            </div>
        );
    }

    if (!user) {
        return null;
    }

    if (user.role !== "ADMIN") {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-5">
                <h1 className="text-4xl font-bold text-red-500">Access Denied</h1>
                <p className="mt-3 text-slate-600">You do not have permission to view this page.</p>
            </div>
        );
    }

    return children;
}