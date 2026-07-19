"use client";

import { FaLeaf, FaChartLine, FaRobot, FaHistory } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";

export default function DashboardPage() {
    const { user } = useAuth();

    const stats = [
        { title: "Eco Score", value: `${user?.ecoScore ?? 0}%`, icon: <FaLeaf /> },
        {
            title: "Carbon Saved",
            value: `${user?.carbonSaved ?? 0} kg`,
            icon: <FaChartLine />,
        },
        { title: "AI Suggestions", value: "12", icon: <FaRobot /> },
        { title: "Activities", value: "24", icon: <FaHistory /> },
    ];

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
            <p className="text-slate-500 mt-2">
                Here is your sustainability overview.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
                {stats.map((item) => (
                    <div
                        key={item.title}
                        className="bg-white rounded-2xl border p-6 shadow-sm"
                    >
                        <div className="text-emerald-600 text-2xl">{item.icon}</div>
                        <h3 className="mt-4 font-semibold">{item.title}</h3>
                        <p className="text-3xl font-bold mt-2">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
