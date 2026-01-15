"use client";

import { motion } from "framer-motion";

export function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.04, 0.62, 0.23, 0.98] as const, // Custom soft spring/ease
            }
        },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Background Ambience */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.2, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px]"
                />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container px-4 md:px-6 z-10 text-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto"
                >
                    <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
                        <motion.span variants={item} className="block">Creativity</motion.span>
                        <motion.span variants={item} className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                            is Joy
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={item} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Crafting digital experiences with purpose and heart.
                        <br className="hidden md:block" />
                        A multi-disciplinary approach to design and code.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a
                            href="#work"
                            className="px-8 py-4 rounded-full bg-foreground text-background font-semibold text-lg hover:bg-foreground/90 transition-colors w-full sm:w-auto"
                        >
                            View Case Studies
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-4 rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground font-semibold text-lg hover:bg-accent transition-colors w-full sm:w-auto"
                        >
                            About The Craft
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
