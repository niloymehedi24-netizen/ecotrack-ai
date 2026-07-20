export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="mx-auto max-w-4xl px-4">
                <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
                    <h1 className="text-4xl font-bold text-slate-900">Terms & Conditions</h1>
                    <p className="mt-4 text-slate-500">
                        Last updated: July 2026
                    </p>

                    <div className="mt-8 space-y-8 text-slate-700">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">Acceptance of Terms</h2>
                            <p className="mt-3 leading-relaxed">
                                By using EcoTrack AI, you agree to comply with these Terms & Conditions and all applicable laws and regulations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">Use of the Platform</h2>
                            <p className="mt-3 leading-relaxed">
                                You may use EcoTrack AI for personal and educational purposes related to sustainability and environmental awareness.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">User Responsibilities</h2>
                            <p className="mt-3 leading-relaxed">
                                Users are responsible for maintaining the confidentiality of their account credentials and for all activities conducted under their account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">AI Recommendations</h2>
                            <p className="mt-3 leading-relaxed">
                                Our AI-generated recommendations are provided for informational purposes and should not be considered professional environmental or financial advice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
                            <p className="mt-3 leading-relaxed">
                                EcoTrack AI is not liable for any damages arising from the use of the platform or reliance on AI-generated recommendations.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}