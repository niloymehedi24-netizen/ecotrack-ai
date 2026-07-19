"use client";

import { useAuth } from "@/hooks/useAuth";
import {
    FaUser,
    FaEnvelope,
    FaShieldAlt,
    FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProfilePage() {
    const { user } = useAuth();

    const profileData = [
        {
            label: "Full Name",
            value: user?.name,
            icon: FaUser,
        },
        {
            label: "Email Address",
            value: user?.email,
            icon: FaEnvelope,
        },
        {
            label: "Account Role",
            value: user?.role,
            icon: FaShieldAlt,
        },
        {
            label: "Eco Score",
            value: `${user?.ecoScore ?? 0}%`,
            icon: FaLeaf,
        },
    ];

    return (
        <div className="p-6 md:p-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl rounded-3xl bg-linear-to-r from-emerald-500 to-cyan-500 p-8 text-white shadow-xl"
            >
                <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-bold text-emerald-600">
                        {user?.name?.charAt(0)}
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">{user?.name}</h1>
                        <p className="text-white/80">Sustainability Member</p>
                    </div>
                </div>
            </motion.div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
                {profileData.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.label}
                            className="rounded-3xl bg-white border p-6 shadow-lg"
                        >
                            <Icon className="text-2xl text-emerald-600" />
                            <p className="mt-4 text-sm text-slate-500">
                                {item.label}
                            </p>
                            <h2 className="mt-2 text-xl font-bold">
                                {item.value}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}