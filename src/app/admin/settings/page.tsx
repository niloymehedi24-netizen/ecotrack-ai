"use client";

import { useState } from "react";
import { FaCog, FaBell, FaShieldAlt, FaPalette } from "react-icons/fa";
import toast from "react-hot-toast";

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        aiSuggestions: true,
        maintenanceMode: false,
    });

    const handleSave = () => {
        toast.success("Settings saved successfully");
    };

    return (
        <div className="p-6 md:p-10">
            <div className="mb-8">
                <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
                    <FaCog className="text-emerald-600" />
                    Admin Settings
                </h1>
                <p className="mt-2 text-slate-500">
                    Manage platform preferences and administrative configurations.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                    <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
                        <FaBell className="text-emerald-600" />
                        Notifications
                    </h2>

                    <div className="space-y-4">
                        <label className="flex items-center justify-between">
                            <span className="font-medium text-slate-700">Email Notifications</span>
                            <input
                                type="checkbox"
                                checked={settings.emailNotifications}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        emailNotifications: e.target.checked,
                                    })
                                }
                                className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                            />
                        </label>

                        <label className="flex items-center justify-between">
                            <span className="font-medium text-slate-700">AI Suggestions</span>
                            <input
                                type="checkbox"
                                checked={settings.aiSuggestions}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        aiSuggestions: e.target.checked,
                                    })
                                }
                                className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                            />
                        </label>
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                    <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
                        <FaShieldAlt className="text-emerald-600" />
                        Security
                    </h2>

                    <div className="space-y-4">
                        <label className="flex items-center justify-between">
                            <span className="font-medium text-slate-700">Maintenance Mode</span>
                            <input
                                type="checkbox"
                                checked={settings.maintenanceMode}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        maintenanceMode: e.target.checked,
                                    })
                                }
                                className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                            />
                        </label>
                    </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl lg:col-span-2">
                    <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900">
                        <FaPalette className="text-emerald-600" />
                        Appearance
                    </h2>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-slate-200 p-4 text-center">
                            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-emerald-500"></div>
                            <p className="font-medium text-slate-700">Emerald</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-4 text-center">
                            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-cyan-500"></div>
                            <p className="font-medium text-slate-700">Cyan</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-4 text-center">
                            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-800"></div>
                            <p className="font-medium text-slate-700">Dark Slate</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSave}
                        className="mt-8 rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:shadow-lg cursor-pointer"
                    >
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
}