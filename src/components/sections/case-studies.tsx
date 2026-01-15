"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "NeuralFlow AI Dashboard",
        category: "UX/UI • Development",
        image: "/images/projects/neuralflow-placeholder.jpg",
        slug: "neural-flow",
    },
    {
        title: "Stellar E-Commerce",
        category: "Mobile App • Strategy",
        image: "/images/projects/stellar-ecommerce.jpg",
        slug: "stellar",
    },
];

export function CaseStudies() {
    return (
        <section id="case-studies" className="py-24 md:py-32 bg-secondary/10">
            <div className="container px-4 md:px-6">
                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Case Studies</h2>
                        <p className="text-muted-foreground">Selected works from 2024-2025</p>
                    </motion.div>

                    <Link href="/work" className="hidden md:inline-block text-sm font-medium hover:text-indigo-500 transition-colors underline-offset-4 hover:underline">
                        View All Work
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="space-y-4"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted border border-white/10">
                                    <motion.div
                                        className="relative w-full h-full"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl pointer-events-none opacity-0" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold group-hover:text-indigo-500 transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mt-1">{project.category}</p>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link href="/work" className="text-sm font-medium hover:text-indigo-500 transition-colors underline-offset-4 hover:underline">
                        View All Work
                    </Link>
                </div>
            </div>
        </section>
    );
}
