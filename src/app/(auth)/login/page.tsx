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
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { loginSchema, LoginFormData } from "@/validation/auth.validation";
import { useLoginMutation } from "@/hooks/useAuthMutation";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const loginMutation = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        loginMutation.mutate(data, {
            onSuccess: (response) => {
                toast.success("Login successful");
                if (response.user.role === "ADMIN") {
                    router.push("/admin");
                } else {
                    router.push("/dashboard");
                }
            },
            onError: (error) => {
                toast.error(error.message || "Login failed");
            },
        });
    };

    const fillDemoLogin = () => {
        setValue("email", "demo@ecotrack.ai");
        setValue("password", "123456");
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-cyan-50 px-5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md rounded-3xl border bg-white/80 backdrop-blur-xl shadow-xl p-8"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 text-2xl">
                        <FaLeaf />
                    </div>
                    <h1 className="mt-4 text-3xl font-bold text-slate-900">Welcome Back</h1>
                    <p className="text-sm text-slate-500 mt-2">Login to your EcoTrack AI account</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="text-sm font-medium text-slate-700">Email</label>
                        <div className="relative mt-2">
                            <FaEnvelope className="absolute left-4 top-3.5 text-slate-400" />
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border px-11 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                        </div>
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-slate-700">Password</label>
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
                        {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
                    </div>

                    <button
                        disabled={loginMutation.isPending}
                        className="w-full rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 py-3 text-white font-semibold hover:scale-[1.02] transition disabled:opacity-50 cursor-pointer"
                    >
                        {loginMutation.isPending ? "Logging in..." : "Login"}
                    </button>
                </form>

                <button
                    onClick={fillDemoLogin}
                    className="mt-4 w-full rounded-xl border py-3 text-sm font-medium hover:bg-slate-50 cursor-pointer"
                >
                    Use Demo Account
                </button>

                <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl border py-3 cursor-pointer">
                    <FaGoogle />
                    Continue with Google
                </button>
            </motion.div>
        </main>
    );
}