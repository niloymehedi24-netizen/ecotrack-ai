"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaEye,
    FaEyeSlash,
    FaGoogle,
    FaLeaf,
    FaLock,
    FaUser,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { registerSchema, RegisterFormData } from "@/validation/auth.validation";
import { useRegisterMutation } from "@/hooks/useAuthMutation";

export default function RegisterPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const registerMutation = useRegisterMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: { role: "USER" },
    });

    const onSubmit = (data: RegisterFormData) => {
        registerMutation.mutate(data, {
            onSuccess: () => {
                toast.success("Account created successfully");
                router.push("/login");
            },
            onError: (error) => {
                toast.error(error.message || "Registration failed");
            },
        });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-cyan-50 px-5 mt-25 mb-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl border shadow-xl p-8"
            >
                <div className="flex flex-col items-center mb-7">
                    <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl">
                        <FaLeaf />
                    </div>
                    <h1 className="text-3xl font-bold mt-4 text-slate-900">Create Account</h1>
                    <p className="text-sm text-slate-500 mt-2">Join EcoTrack AI today</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <div className="relative mt-2">
                            <FaUser className="absolute left-4 top-3.5 text-slate-400" />
                            <input
                                {...register("name")}
                                placeholder="John Smith"
                                className="w-full rounded-xl border px-11 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                        </div>
                        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <div className="relative mt-2">
                            <FaEnvelope className="absolute left-4 top-3.5 text-slate-400" />
                            <input
                                {...register("email")}
                                placeholder="you@example.com"
                                className="w-full rounded-xl border px-11 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                        </div>
                        <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <div className="relative mt-2">
                            <FaLock className="absolute left-4 top-3.5 text-slate-400" />
                            <input
                                {...register("password")}
                                type={showPassword ? "text" : "password"}
                                placeholder="******"
                                className="w-full rounded-xl border px-11 py-3 pr-12 outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-3 text-slate-400"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Confirm Password</label>
                        <div className="relative mt-2">
                            <FaLock className="absolute left-4 top-3.5 text-slate-400" />
                            <input
                                {...register("confirmPassword")}
                                type={showConfirm ? "text" : "password"}
                                placeholder="******"
                                className="w-full rounded-xl border px-11 py-3 pr-12 outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-3 text-slate-400"
                            >
                                {showConfirm ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword?.message}</p>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Account Type</label>
                        <select
                            {...register("role")}
                            className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
                        >
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>

                    <button
                        disabled={registerMutation.isPending}
                        className="w-full rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 py-3 text-white font-semibold hover:scale-[1.02] transition cursor-pointer"
                    >
                        {registerMutation.isPending ? "Creating Account..." : "Register"}
                    </button>
                </form>

                <button className="mt-4 w-full rounded-xl border py-3 flex items-center justify-center gap-2 cursor-pointer">
                    <FaGoogle />
                    Continue with Google
                </button>
            </motion.div>
        </main>
    );
}