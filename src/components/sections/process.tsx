"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        id: 1,
        title: "Discovery",
        description: "We define the core problem. No code is written until the 'Why' is clear.",
    },
    {
        id: 2,
        title: "Architecture",
        description: "I map the database schema and system logic. Scalability is planned, not patched.",
    },
    {
        id: 3,
        title: "Development",
        description: "Iterative builds. You see progress every week, not just at the deadline.",
    },
    {
        id: 4,
        title: "Polish & Launch",
        description: "Rigorous testing, SEO optimization, and final UI detail sweeps.",
    },
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    return (
        <section id="how-i-work" className="py-24 md:py-32 overflow-hidden">
            <div className="container px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-20 text-center">
                    How I Work
                </h2>

                {/* Desktop Timeline */}
                <div ref={containerRef} className="relative hidden md:flex flex-col gap-24 max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary -translate-x-1/2">
                        <motion.div
                            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                            className="w-full bg-indigo-500 origin-top"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={`flex items-center gap-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                <h3 className="text-2xl font-bold mb-2">{step.id}. {step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>

                            <div className="relative z-10 w-12 h-12 rounded-full bg-background border-4 border-indigo-500 flex items-center justify-center font-bold text-sm shrink-0">
                                {step.id}
                            </div>

                            <div className="flex-1" />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Timeline (Simple Stack) */}
                <div className="md:hidden space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                                    {step.id}
                                </div>
                                {index !== steps.length - 1 && <div className="w-0.5 flex-1 bg-border" />}
                            </div>
                            <div className="pb-12">
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
