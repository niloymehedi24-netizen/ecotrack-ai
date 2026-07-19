"use client";

import { FaBars, FaBell, FaSearch } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";

interface TopbarProps {
    onMenuClick: () => void;
}

export default function DashboardTopbar({
    onMenuClick,
}: TopbarProps) {
    const { user } = useAuth();

    return (
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200">
            <div className="flex h-16 items-center justify-between px-4 lg:px-6">
                {/* Mobile Menu Button */}
                <button
                    onClick={onMenuClick}
                    className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
                >
                    <FaBars className="text-xl" />
                </button>

                {/* Search */}
                <div className="hidden flex-1 max-w-md lg:block">
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search dashboard..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <button className="relative rounded-xl p-2 text-slate-600 hover:bg-slate-100">
                        <FaBell className="text-xl" />
                        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500" />
                    </button>

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-cyan-500 text-white font-bold text-sm">
                            {user?.name?.charAt(0) || "U"}
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold text-slate-900">
                                {user?.name}
                            </p>
                            <p className="text-xs text-slate-500">
                                {user?.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}