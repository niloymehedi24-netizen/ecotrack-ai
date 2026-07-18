import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (

        <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">

                {children}

            </div>
        </ProtectedRoute>

    );

}