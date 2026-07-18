"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { useAdminAnalytics } from "@/hooks/useAdmin";

interface AnalyticsData {
    month: number;
    users: number;
}

export default function AnalyticsPage() {
    const { data, isLoading } = useAdminAnalytics();
    const chartData: AnalyticsData[] = data ?? [];

    if (isLoading) {
        return <div className="p-10">Loading analytics...</div>;
    }

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold">System Analytics</h1>

            <div className="mt-8 h-87.5 rounded-3xl bg-white border shadow-xl p-6">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#10b981"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}