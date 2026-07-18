"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";


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


export default function MobileMenu() {

    const [open, setOpen] = useState(false);


    return (
        <div className="md:hidden">


            {/* Menu Button */}

            <button
                onClick={() => setOpen(!open)}
                className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100"
                aria-label="Toggle menu"
            >

                {
                    open ? (
                        <FaTimes size={20} />
                    ) : (
                        <FaBars size={20} />
                    )
                }

            </button>



            {/* Mobile Dropdown */}

            {
                open && (

                    <div
                        className=" absolute left-4 right-4 top-20 rounded-2xl border bg-white p-5 shadow-xl">
                        <div
                            className="flex flex-col gap-4">
                            {
                                navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600">
                                        {link.name}
                                    </Link>
                                ))
                            }


                            <div
                                className="mt-3 flex flex-col gap-3">
                                <Link
                                    href="/login"
                                    onClick={() => setOpen(false)}
                                    className="rounded-xl border px-4 py-2.5 text-center text-sm font-medium">
                                    Login
                                </Link>


                                <Link
                                    href="/register"
                                    onClick={() => setOpen(false)}
                                    className="rounded-xl bg-linear-to-r from-emerald-500 to-sky-500 px-4 py-2.5 text-center text-sm font-semibold text-white">
                                    Start Tracking
                                </Link>

                            </div>


                        </div>


                    </div>

                )
            }

        </div>
    );
}