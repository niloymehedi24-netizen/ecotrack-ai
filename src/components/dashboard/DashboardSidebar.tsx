"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    FaHome,
    FaUser,
    FaRobot,
    FaChartLine,
    FaUsers,
    FaCog,
    FaSignOutAlt,
    FaBox,
    FaPlusCircle,
    FaMagic,
} from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DashboardSidebar({
    isOpen,
    onClose,
}: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();

    const userLinks = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: FaHome,
        },
        {
            name: "Profile",
            href: "/dashboard/profile",
            icon: FaUser,
        },
        {
            name: "AI Assistant",
            href: "/dashboard/ai-assistant",
            icon: FaRobot,
        },
        {
            name: "Reports",
            href: "/dashboard/reports",
            icon: FaChartLine,
        },
        {
            name: "Recommendations",
            href: "/dashboard/recommendations",
            icon: FaMagic,
        }
    ];

    const adminLinks = [
        {
            name: "Admin Dashboard",
            href: "/admin",
            icon: FaHome,
        },
        {
            name: "Manage Users",
            href: "/admin/users",
            icon: FaUsers,
        },
        {
            name: "Manage Items",
            href: "/admin/items",
            icon: FaBox,
        },
        {
            name: "Add Item",
            href: "/admin/items/add",
            icon: FaPlusCircle,
        },
        {
            name: "Analytics",
            href: "/admin/analytics",
            icon: FaChartLine,
        },
        {
            name: "Settings",
            href: "/admin/settings",
            icon: FaCog,
        },
    ];

    const links = user?.role === "ADMIN" ? adminLinks : userLinks;

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-50 h-full w-72 transform bg-white/95 backdrop-blur-xl border-r border-slate-200 shadow-2xl transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex h-full flex-col">

                    {/* User Info */}
                    <div className="p-6 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-cyan-500 text-white font-bold text-lg">
                                {user?.name?.charAt(0) || "U"}
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    {user?.name}
                                </h3>
                                <p className="text-sm text-slate-500">
                                    {user?.email}
                                </p>
                                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 mt-1">
                                    {user?.role}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4">
                        <div className="space-y-2">
                            {links.map((link) => {
                                const Icon = link.icon;
                                const isActive = pathname === link.href;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={onClose}
                                        className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-linear-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                                            : "text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
                                            }`}
                                    >
                                        <Icon className="text-lg" />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Logout */}
                    <div className="p-4 border-t border-slate-200">
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50 cursor-pointer"
                        >
                            <FaSignOutAlt className="text-lg" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}