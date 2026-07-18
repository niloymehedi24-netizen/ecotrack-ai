
import Link from "next/link";
import { Leaf } from "lucide-react";
import Container from "../common/Container";
import MobileMenu from "./MobileMenu";

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Explore",
        href: "/explore",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];


export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full">

            <Container>
                <nav className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/20 bg-white/80 px-6 shadow-lg backdrop-blur-xl" >

                    {/* Logo */}

                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl font-bold text-emerald-600">

                        <span
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100"
                        >
                            <Leaf
                                size={22}
                                className="text-emerald-600"
                            />
                        </span>


                        EcoTrack
                        <span className="text-sky-500">
                            AI
                        </span>

                    </Link>



                    {/* Desktop Menu */}

                    <div className="hidden items-center gap-8 md:flex">

                        {
                            navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative text-sm font-medium  text-slate-700 transition hover:text-emerald-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
                                >
                                    {link.name}
                                </Link>
                            ))
                        }

                    </div>



                    {/* Actions */}

                    <div className="hidden items-center gap-3 md:flex">

                        <Link
                            href="/login"
                            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                            Login
                        </Link>


                        <Link
                            href="/register"
                            className="rounded-xl bg-linear-to-r from-emerald-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105">
                            Start Tracking
                        </Link>


                    </div>


                    {/* Mobile Button */}


                    <div className="md:hidden">
                        <MobileMenu></MobileMenu>
                    </div>

                </nav>

            </Container>

        </header>
    );
}