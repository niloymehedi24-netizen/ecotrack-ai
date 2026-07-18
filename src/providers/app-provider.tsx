'use client';

import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <Toaster />
            {children}
        </ThemeProvider>

    );
}