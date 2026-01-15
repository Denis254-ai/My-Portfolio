"use client";

import { useState, useEffect, FormEvent } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export function Contact() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const service = params.get("service");
            if (service) {
                setMessage(`Hi Denis, I am interested in your ${service} package. I need...`);
            }
        }
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., Formspree)
        alert("Thanks for reaching out! I'll get back to you shortly.");
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24">

                    {/* Left Column: Text & Contact Details */}
                    <div className="space-y-12 max-w-lg">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold tracking-tighter"
                            >
                                Ready to create something <span className="text-indigo-500">amazing?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-muted-foreground font-medium"
                            >
                                Let's talk about your project and how we can work together to build something unique.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <SocialLink href="https://github.com/Denis254-ai" icon={<FaGithub />} label="GitHub" />
                                <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} label="LinkedIn" />
                                <SocialLink href="https://twitter.com" icon={<FaTwitter />} label="Twitter" />
                            </div>

                            <div className="space-y-4 pt-6 md:pt-8 w-full">
                                <ContactCard
                                    href="https://wa.me/254758769865"
                                    icon={<FaWhatsapp />}
                                    label="WhatsApp"
                                    value="+254 758 769 865"
                                    color="bg-green-500/10 text-green-500"
                                />
                                <ContactCard
                                    href="mailto:denisngotho70@gmail.com"
                                    icon={<FaEnvelope />}
                                    label="Email"
                                    value="denisngotho70@gmail.com"
                                    color="bg-blue-500/10 text-blue-500"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 max-w-md w-full bg-card/50 backdrop-blur-sm border border-border p-8 rounded-3xl shadow-2xl"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                                    <input
                                        id="name"
                                        placeholder="John Doe"
                                        className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:bg-white/10"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:bg-white/10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tell me about your project..."
                                    className="flex min-h-[150px] w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:bg-white/10 resize-none"
                                />
                            </div>
                            <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-12 px-8 py-2 shadow-lg hover:shadow-indigo-500/25">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 hover:bg-indigo-500 hover:text-white transition-all duration-300 text-xl"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

function ContactCard({ href, icon, label, value, color }: { href: string; icon: React.ReactNode; label: string; value: string; color: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-indigo-500/30 hover:bg-secondary/50 transition-all group"
        >
            <div className={`p-3 rounded-lg ${color} text-xl group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="font-bold text-foreground">{value}</p>
            </div>
        </a>
    )
}
