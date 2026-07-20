"use client";

import { FaUsers, FaUserShield, FaUser } from "react-icons/fa";
import { useAdminUsers } from "@/hooks/useAdmin";

export default function UsersPage() {
    const { data, isLoading } = useAdminUsers();

    if (isLoading) {
        return (
            <div className="p-10">
                <div className="h-32 animate-pulse rounded-3xl bg-white" />
            </div>
        );
    }

    const totalUsers = data?.length ?? 0;
    const totalAdmins = data?.filter((user) => user.role === "ADMIN").length ?? 0;

    return (
        <div className="p-6 md:p-10">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                        <FaUsers className="text-emerald-600" />
                        Manage Users
                    </h1>
                    <p className="mt-2 text-slate-500">
                        View and manage all registered EcoTrack AI users.
                    </p>
                </div>

                <div className="rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-white shadow-lg">
                    <p className="text-sm opacity-90">Total Users</p>
                    <p className="text-2xl font-bold">{totalUsers}</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Registered Users</p>
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
                            <p className="text-sm font-medium text-slate-500">Administrators</p>
                            <p className="mt-2 text-3xl font-bold text-slate-900">{totalAdmins}</p>
                        </div>
                        <div className="rounded-2xl bg-cyan-100 p-4 text-cyan-600">
                            <FaUserShield className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                    User
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                    Email
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                    Role
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {data?.map((user) => (
                                <tr key={user._id.toString()} className="hover:bg-slate-50 transition">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-cyan-500 text-white font-bold">
                                                {user.name?.charAt(0) || <FaUser />}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900">{user.name}</p>
                                                <p className="text-sm text-slate-500">EcoTrack User</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-slate-700">{user.email}</td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${user.role === "ADMIN"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : "bg-slate-100 text-slate-700"
                                                }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}