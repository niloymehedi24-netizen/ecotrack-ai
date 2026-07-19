import Link from "next/link";
import {
    FaLeaf,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
} from "react-icons/fa";

import Container from "../common/Container";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-slate-950 text-white">
            {/* Decorative Background */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

            <Container>
                <div className="relative grid gap-10 py-16 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500">
                                <FaLeaf size={22} />
                            </span>
                            <span>
                                EcoTrack
                                <span className="text-emerald-400">AI</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                            EcoTrack AI is an intelligent sustainability platform that helps users monitor eco-friendly activities, understand environmental impact, and build greener habits using AI.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-4">
                            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-emerald-500">
                                <FaGithub size={18} />
                            </Link>

                            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-emerald-500">
                                <FaLinkedin size={18} />
                            </Link>

                            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-emerald-500">
                                <FaTwitter size={18} />
                            </Link>

                            <Link href="mailto:support@ecotrackai.com" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-emerald-500">
                                <FaEnvelope size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Platform</h3>
                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            <li>
                                <Link href="/explore" className="hover:text-emerald-400 transition">Explore</Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-emerald-400 transition">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="/ai-assistant" className="hover:text-emerald-400 transition">AI Assistant</Link>
                            </li>
                            <li>
                                <Link href="/recommendations" className="hover:text-emerald-400 transition">Recommendations</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            <li>
                                <Link href="/about" className="hover:text-emerald-400 transition">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-emerald-400 transition">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="/help" className="hover:text-emerald-400 transition">Help & Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-slate-400 md:flex-row">
                    <p>© 2026 EcoTrack AI. All rights reserved.</p>
                    <p>Built with 🌱 AI for a greener future</p>
                </div>
            </Container>
        </footer>
    );
}