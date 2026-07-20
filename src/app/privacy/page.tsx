export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="mx-auto max-w-4xl px-4">
                <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
                    <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
                    <p className="mt-4 text-slate-500">
                        Last updated: July 2026
                    </p>

                    <div className="mt-8 space-y-8 text-slate-700">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
                            <p className="mt-3 leading-relaxed">
                                EcoTrack AI collects information you provide directly, such as your name, email address, sustainability preferences, and interactions with our AI-powered features.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
                            <p className="mt-3 leading-relaxed">
                                We use your information to provide personalized sustainability recommendations, improve our AI services, and enhance your overall experience on the platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
                            <p className="mt-3 leading-relaxed">
                                We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, or misuse.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
                            <p className="mt-3 leading-relaxed">
                                You have the right to access, update, or delete your personal information. You may also contact us regarding any privacy-related concerns.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
                            <p className="mt-3 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at support@ecotrack.ai.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}