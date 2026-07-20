// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { motion } from "framer-motion";
// import {
//     FaEnvelope,
//     FaEye,
//     FaEyeSlash,
//     FaLeaf,
//     FaLock,
// } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { loginSchema, LoginFormData } from "@/validation/auth.validation";
// import { useLoginMutation } from "@/hooks/useAuthMutation";
// import { GoogleLogin } from "@react-oauth/google";
// import { googleLogin } from "@/services/auth.service";

// export default function LoginPage() {
//     const router = useRouter();
//     const [showPassword, setShowPassword] = useState(false);
//     const loginMutation = useLoginMutation();

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         setValue,
//     } = useForm<LoginFormData>({
//         resolver: zodResolver(loginSchema),
//     });

//     const onSubmit = (data: LoginFormData) => {
//         loginMutation.mutate(data, {
//             onSuccess: (response) => {
//                 toast.success("Login successful");
//                 if (response.user.role === "ADMIN") {
//                     router.push("/admin");
//                 } else {
//                     router.push("/dashboard");
//                 }
//             },
//             onError: (error) => {
//                 toast.error(error.message || "Login failed");
//             },
//         });
//     };

//     const fillUserDemo = () => {
//         setValue("email", "demo@ecotrack.ai");
//         setValue("password", "123456");
//     };


//     const fillAdminDemo = () => {
//         setValue("email", "admin@ecotrack.ai");
//         setValue("password", "Admin123!");
//     };

//     return (
//         <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-cyan-50 px-5">
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full max-w-md rounded-3xl border bg-white/80 backdrop-blur-xl shadow-xl p-8"
//             >
//                 <div className="flex flex-col items-center mb-8">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 text-2xl">
//                         <FaLeaf />
//                     </div>
//                     <h1 className="mt-4 text-3xl font-bold text-slate-900">Welcome Back</h1>
//                     <p className="text-sm text-slate-500 mt-2">Login to your EcoTrack AI account</p>
//                 </div>

//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//                     <div>
//                         <label className="text-sm font-medium text-slate-700">Email</label>
//                         <div className="relative mt-2">
//                             <FaEnvelope className="absolute left-4 top-3.5 text-slate-400" />
//                             <input
//                                 {...register("email")}
//                                 type="email"
//                                 placeholder="you@example.com"
//                                 className="w-full rounded-xl border px-11 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
//                             />
//                         </div>
//                         {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
//                     </div>

//                     <div>
//                         <label className="text-sm font-medium text-slate-700">Password</label>
//                         <div className="relative mt-2">
//                             <FaLock className="absolute left-4 top-3.5 text-slate-400" />
//                             <input
//                                 {...register("password")}
//                                 type={showPassword ? "text" : "password"}
//                                 placeholder="******"
//                                 className="w-full rounded-xl border px-11 py-3 pr-12 outline-none focus:ring-2 focus:ring-emerald-400"
//                             />
//                             <button
//                                 type="button"
//                                 onClick={() => setShowPassword(!showPassword)}
//                                 className="absolute right-4 top-3 text-slate-400"
//                             >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                         </div>
//                         {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
//                     </div>

//                     <button
//                         disabled={loginMutation.isPending}
//                         className="w-full rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 py-3 text-white font-semibold hover:scale-[1.02] transition disabled:opacity-50 cursor-pointer"
//                     >
//                         {loginMutation.isPending ? "Logging in..." : "Login"}
//                     </button>
//                 </form>

//                 <button
//                     onClick={fillUserDemo}
//                     className="mt-4 w-full rounded-xl border py-3 text-sm font-medium hover:bg-emerald-500 bg-slate-50 cursor-pointer"
//                 >
//                     Demo User Account
//                 </button>

//                 <button
//                     onClick={fillAdminDemo}
//                     className="mt-4 w-full rounded-xl border py-3 text-sm font-medium hover:bg-cyan-500 bg-slate-50 cursor-pointer"
//                 >
//                     Demo Admin Account
//                 </button>

//                 <div className="mt-4 flex justify-center">
//                     <GoogleLogin
//                         onSuccess={async (credentialResponse) => {
//                             try {
//                                 const credential = credentialResponse.credential;

//                                 if (!credential) {
//                                     toast.error("Google login failed");
//                                     return;
//                                 }

//                                 const response = await googleLogin(credential);

//                                 toast.success("Google login successful");

//                                 if (response.user.role === "ADMIN") {
//                                     router.push("/admin");
//                                 } else {
//                                     router.push("/dashboard");
//                                 }
//                             } catch {
//                                 toast.error("Google login failed");
//                             }
//                         }}
//                         onError={() => {
//                             toast.error("Google login failed");
//                         }}
//                     />
//                 </div>
//             </motion.div>
//         </main>
//     );
// }

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaEye,
    FaEyeSlash,
    FaLeaf,
    FaLock,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { loginSchema, LoginFormData } from "@/validation/auth.validation";
import { useLoginMutation } from "@/hooks/useAuthMutation";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogin } from "@/services/auth.service";

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

                router.refresh();
            },
            onError: (error) => {
                toast.error(error.message || "Login failed");
            },
        });
    };

    const fillUserDemo = () => {
        setValue("email", "demo@ecotrack.ai");
        setValue("password", "123456");
    };

    const fillAdminDemo = () => {
        setValue("email", "admin@ecotrack.ai");
        setValue("password", "Admin123!");
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

                <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                        onClick={fillUserDemo}
                        className="rounded-xl border py-3 text-sm font-medium hover:bg-emerald-50 bg-slate-50 cursor-pointer transition"
                    >
                        Demo User
                    </button>

                    <button
                        onClick={fillAdminDemo}
                        className="rounded-xl border py-3 text-sm font-medium hover:bg-cyan-50 bg-slate-50 cursor-pointer transition"
                    >
                        Demo Admin
                    </button>
                </div>

                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-slate-200"></div>
                    <span className="px-4 text-sm text-slate-500">Or continue with</span>
                    <div className="flex-1 border-t border-slate-200"></div>
                </div>

                <div className="w-full">
                    <GoogleLogin
                        width="100%"
                        theme="outline"
                        size="large"
                        text="continue_with"
                        shape="rectangular"
                        onSuccess={async (credentialResponse) => {
                            try {
                                const credential = credentialResponse.credential;

                                if (!credential) {
                                    toast.error("Google login failed");
                                    return;
                                }

                                const response = await googleLogin(credential);

                                toast.success("Google login successful");

                                setTimeout(() => {
                                    if (response?.user?.role === "ADMIN") {
                                        window.location.href = "/admin";
                                    } else {
                                        window.location.href = "/dashboard";
                                    }
                                }, 300);
                            } catch {
                                toast.error("Google login failed");
                            }
                        }}
                        onError={() => {
                            toast.error("Google login failed");
                        }}
                    />
                </div>
            </motion.div>
        </main>
    );
}