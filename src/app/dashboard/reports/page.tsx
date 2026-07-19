"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", carbon: 20 },
    { month: "Feb", carbon: 35 },
    { month: "Mar", carbon: 50 },
    { month: "Apr", carbon: 75 },
    { month: "May", carbon: 90 },
];

export default function ReportsPage() {
    return (
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold">Environmental Reports</h1>
            <p className="mt-3 text-slate-500">
                Track your sustainability progress over time.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-xl border">
                <h2 className="text-xl font-bold">Carbon Reduction Progress</h2>

                <div className="mt-6 h-87.5">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="carbon"
                                stroke="#10b981"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}