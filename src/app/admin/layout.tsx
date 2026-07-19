"use client";

import { useState } from "react";
import AdminRoute from "@/components/auth/AdminRoute";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <AdminRoute>
            <div className="flex min-h-screen bg-slate-50">
                <DashboardSidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <div className="flex flex-1 flex-col lg:ml-0">
                    <DashboardTopbar
                        onMenuClick={() => setSidebarOpen(true)}
                    />

                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </AdminRoute>
    );
}