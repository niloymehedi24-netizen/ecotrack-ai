"use client";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";
import { FaChartLine, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { useAdminAnalytics } from "@/hooks/useAdmin";

interface AnalyticsData {
    month: number;
    users: number;
}

const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export default function AnalyticsPage() {
    const { data, isLoading } = useAdminAnalytics();

    const chartData: AnalyticsData[] = (data ?? []).map((item: AnalyticsData) => ({
        ...item,
        month: item.month,
    }));

    if (isLoading) {
        return (
            <div className="p-10">
                <div className="h-96 animate-pulse rounded-3xl bg-white" />
            </div>
        );
    }

    const totalUsers = chartData.reduce((sum, item) => sum + item.users, 0);
    const activeMonths = chartData.length;

    return (
        <div className="p-6 md:p-10">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                        <FaChartLine className="text-emerald-600" />
                        System Analytics
                    </h1>
                    <p className="mt-2 text-slate-500">
                        Monitor user growth and platform engagement trends.
                    </p>
                </div>

                <div className="rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-white shadow-lg">
                    <p className="text-sm opacity-90">Growth Trend</p>
                    <p className="text-2xl font-bold">+24%</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total Users Tracked</p>
                            <p className="mt-2 text-3xl font-bold text-slate-900">{totalUsers}</p>
                        </div>
                        <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-600">
                            <FaUsers className="text-2xl" />
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Active Months</p>
                            <p className="mt-2 text-3xl font-bold text-slate-900">{activeMonths}</p>
                        </div>
                        <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-600">
                            <FaCalendarAlt className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">User Registration Growth</h2>
                        <p className="text-sm text-slate-500">
                            Monthly user registration analytics
                        </p>
                    </div>
                </div>

                <div className="h-100">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />

                            <XAxis
                                dataKey="month"
                                tickFormatter={(value) => monthNames[value - 1] || value}
                                stroke="#64748b"
                            />

                            <YAxis stroke="#64748b" />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: "16px",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                }}
                                labelFormatter={(value) => `Month: ${monthNames[Number(value) - 1]}`}
                            />

                            <Line
                                type="monotone"
                                dataKey="users"
                                stroke="#10b981"
                                strokeWidth={3}
                                dot={{ fill: "#10b981", strokeWidth: 2, r: 6 }}
                                activeDot={{ r: 8, fill: "#06b6d4" }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}