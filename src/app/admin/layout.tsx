import AdminRoute from "@/components/auth/AdminRoute";


export default function AdminLayout({ children }: { children: React.ReactNode }) {

    return (

        <AdminRoute>

            <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50">

                {children}

            </div>

        </AdminRoute>

    );

}