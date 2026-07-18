"use client";

import { useAuth } from "@/hooks/useAuth";

export default function ProfilePage() {
    const { user } = useAuth();

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold">Profile</h1>

            <div className="mt-6 bg-white rounded-2xl border p-6 max-w-xl">
                <p>
                    Name: <strong>{user?.name}</strong>
                </p>
                <p className="mt-3">
                    Email: <strong>{user?.email}</strong>
                </p>
                <p className="mt-3">
                    Role: <strong>{user?.role}</strong>
                </p>
            </div>
        </div>
    );
}