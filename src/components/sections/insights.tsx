"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
    {
        title: "The Psychology of Space in UI",
        description: "Why negative space is the strongest element in your design system, and how to use it to control user focus.",
        category: "Design",
        image: "/images/blog/space-ui.jpg",
        slug: "psychology-space",
    },
    {
        title: "Why 'Slow' is the New Fast in Motion",
        description: "How mastering transition physics creates the illusion of speed and makes interfaces feel 'expensive'.",
        category: "Development",
        image: "/images/blog/motion-fast.jpg",
        slug: "slow-motion",
    },
    {
        title: "Finding Your Creative Voice",
        description: "Finding your signature style in a world of AI-generated noise. A guide to staying authentic.",
        category: "Philosophy",
        image: "/images/blog/creative-voice.jpg",
        slug: "creative-voice",
    },
];

export function Insights() {
    return (
        <section id="insights" className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold tracking-tighter"
                        >
                            Latest Insights
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground font-medium"
                        >
                            The Signal. Thoughts on tech, design, and mastery.
                        </motion.p>
                    </div>
                    <Link href="/blog" className="text-sm font-medium hover:text-indigo-500 transition-colors hidden md:block">
                        Read all
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-4 bg-muted/20 rounded-2xl overflow-hidden pb-6 border border-transparent hover:border-white/5 transition-colors"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <motion.div
                                        className="w-full h-full relative"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-opacity group-hover:opacity-90"
                                        />
                                    </motion.div>
                                </div>
                                <div className="px-6">
                                    <span className="text-xs font-medium text-indigo-500 mb-2 block">{post.category}</span>
                                    <h3 className="text-xl font-bold group-hover:text-indigo-500 transition-colors mb-2">{post.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
