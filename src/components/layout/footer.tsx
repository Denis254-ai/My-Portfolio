"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

export function Footer() {
    // Basic auto-fill logic using URLSearchParams (run only on client mounting)
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Parse the query parameter (manually to avoid Suspense boundary issues with useSearchParams in static export if not careful)
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const service = params.get("service");
            if (service) {
                setMessage(`Hi Denis, I am interested in your ${service} package. I need...`);
            }
        }
    }, []);

    return (
        <footer className="bg-muted/30 border-t border-border py-12 md:py-24" id="contact">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    <div className="space-y-4 max-w-sm">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            Ready to create something <span className="text-indigo-500">amazing?</span>
                        </h2>
                        <p className="text-muted-foreground">
                            Let's talk about your project and how we can work together to build something unique.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="#" icon={<FaGithub className="w-5 h-5" />} label="GitHub" />
                            <SocialLink href="#" icon={<FaLinkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="#" icon={<FaTwitter className="w-5 h-5" />} label="Twitter" />
                        </div>
                    </div>

                    <div className="space-y-8 w-full max-w-md">
                        <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold mb-6">Contact Details</h3>
                            <div className="space-y-4">
                                <a
                                    href="https://wa.me/254758769865"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                                >
                                    <div className="p-3 rounded-full bg-green-500/10 text-green-500 group-hover:scale-110 transition-transform">
                                        <FaWhatsapp className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
                                        <p className="font-bold">+254 758 769 865</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:denisngotho70@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                                >
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                                        <FaEnvelope className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                                        <p className="font-bold">denisngotho70@gmail.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <input
                                            id="name"
                                            placeholder="John Doe"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell me about your project..."
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                                <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© 2026 Creativity is Joy. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={label}
        >
            {icon}
        </Link>
    );
}
