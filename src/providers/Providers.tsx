"use client";

import type { ReactNode } from "react";

import QueryProvider from "./QueryProvider";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "react-hot-toast";


export default function Providers({
    children,
}: {
    children: ReactNode;
}) {

    return (

        <QueryProvider>

            <AuthProvider>

                {children}
                <Toaster position="top-right"
                    toastOptions={{
                        duration: 3000,
                        style: {
                            borderRadius: "12px",
                        },
                    }}></Toaster>
            </AuthProvider>

        </QueryProvider>

    );

}