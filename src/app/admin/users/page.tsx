"use client";

import { useAdminUsers } from "@/hooks/useAdmin";

export default function UsersPage() {
    const { data, isLoading } = useAdminUsers();

    if (isLoading) {
        return <div className="p-10">Loading users...</div>;
    }
    return (
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold">Users</h1>

            <div className="mt-8 bg-white rounded-3xl border overflow-hidden">
                {
                    data?.map((user) => (
                        <div key={user._id.toString()} className="p-5 border-b flex justify-between">

                            <div>
                                <p className="font-semibold"> {user.name} </p>
                                <p className="text-sm text-slate-500"> {user.email} </p>
                            </div>
                            <span> {user.role} </span>

                        </div>))}
            </div>
        </div>
    );
}