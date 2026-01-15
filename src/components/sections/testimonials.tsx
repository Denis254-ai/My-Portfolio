"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        quote: "Delivered our MVP in record time. The speed and attention to detail were exactly what we needed to secure our pre-seed funding.",
        author: "Brian Kamau",
        role: "Founder, AgriTech Solutions",
    },
    {
        quote: "The UI modernization transformed our legacy system. Our users love the new responsive design, and engagement has doubled.",
        author: "Sarah Wanjiku",
        role: "Product Lead, FinServe",
    },
    {
        quote: "Communication was excellent throughout. Denis is reliable, technically gifted, and truly cares about the project's success.",
        author: "David Otieno",
        role: "Director, Otieno Logistics",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center"
                >
                    Testimonials
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.author}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card p-10 rounded-2xl border border-border relative overflow-hidden"
                        >
                            <FaQuoteLeft className="text-4xl text-indigo-500/10 absolute top-8 left-8" />
                            <p className="relative z-10 text-xl md:text-2xl font-medium leading-relaxed mb-8">
                                "{t.quote}"
                            </p>
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20" /> {/* Placeholder Avatar */}
                                <div>
                                    <h4 className="font-bold">{t.author}</h4>
                                    <p className="text-sm text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
