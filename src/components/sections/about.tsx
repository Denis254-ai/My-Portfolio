"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]); // Gentle parallax

    return (
        <section id="about" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <div ref={ref} className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden bg-muted">
                        <motion.div
                            style={{ y }}
                            className="relative w-full h-[120%] -top-[10%] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
                        >
                            {/* User's uploaded portrait */}
                            <Image
                                src="/images/about/about-portrait.jpg"
                                alt="Portrait of the Creative"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent mix-blend-overlay" />
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold tracking-tighter"
                        >
                            About the Craft
                        </motion.h2>

                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                I believe that great design is more than just aesthetics. It's a conversation.
                                With a background connecting psychology and computer science, I bridge the gap
                                between human needs and technical possibilities.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Every pixel placed is an opportunity to create joy. Whether it's a subtle interaction
                                animation or a buttery-smooth landing page, the details matter. They create the
                                rhythm of connection.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="pt-4 flex gap-3 flex-wrap"
                            >
                                {["Experience", "Design", "Frontend"].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
