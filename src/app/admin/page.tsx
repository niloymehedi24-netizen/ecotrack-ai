"use client";

import { FaUsers, FaUserShield, FaRobot, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAdminStats } from "@/hooks/useAdmin";

export default function AdminPage() {
    const { data, isLoading } = useAdminStats();

    if (isLoading) {
        return <div className="p-10">Loading...</div>;
    }

    const stats = [
        { title: "Total Users", value: data?.totalUsers ?? 0, icon: <FaUsers /> },
        { title: "Admins", value: data?.totalAdmins ?? 0, icon: <FaUserShield /> },
        { title: "AI Requests", value: data?.aiRequests ?? 0, icon: <FaRobot /> },
        { title: "Carbon Saved", value: data?.carbonSaved ?? 0, icon: <FaLeaf /> },
    ];

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-4xl font-bold">Admin Control Center</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
                {stats.map((item) => (
                    <motion.div
                        key={item.title}
                        whileHover={{ y: -8 }}
                        className="rounded-3xl bg-white border p-6 shadow-xl"
                    >
                        <div className="text-emerald-600 text-2xl">{item.icon}</div>
                        <h3 className="mt-5">{item.title}</h3>
                        <p className="text-3xl font-bold">{item.value}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}