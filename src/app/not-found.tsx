import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-emerald-50 via-white to-cyan-50 px-4">
            <div className="text-center">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-cyan-500 text-white shadow-xl">
                    <FaLeaf className="text-4xl" />
                </div>

                <h1 className="text-7xl font-bold text-slate-900 md:text-9xl">404</h1>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                    Page Not Found
                </h2>
                <p className="mx-auto mt-4 max-w-md text-lg text-slate-600">
                    The page you are looking for does not exist or may have been moved. Get you back to EcoTrack AI.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:shadow-lg"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/explore"
                        className="rounded-xl border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                        Explore Solutions
                    </Link>
                </div>
            </div>
        </div>
    );
}