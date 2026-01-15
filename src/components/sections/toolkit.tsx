"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaReact, FaPython, FaFigma, FaRobot } from "react-icons/fa6";

const toolkit = [
    {
        id: "frontend",
        label: "Frontend",
        icon: <FaReact />,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        focus: "Pixel-perfect implementations",
        tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        level: 95
    },
    {
        id: "backend",
        label: "Backend",
        icon: <FaPython />,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        focus: "Scalable APIs & Database design",
        tech: ["Python", "Django", "PostgreSQL", "FastAPI", "Redis"],
        level: 85
    },
    {
        id: "ai",
        label: "AI/ML Integration",
        icon: <FaRobot />,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        focus: "Smart automation & agents",
        tech: ["OpenAI API", "LangChain", "Vector DBs", "HuggingFace", "Python"],
        level: 90
    },
    {
        id: "design",
        label: "Design",
        icon: <FaFigma />,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        focus: "User-centric UI/UX",
        tech: ["Figma", "UI Systems", "Prototyping", "User Research", "Wireframing"],
        level: 80
    },
];

export function Toolkit() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section id="toolkit" className="py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold tracking-tighter"
                        >
                            My Toolkit
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground font-medium"
                        >
                            The weapons of choice. A curated stack for maximum impact.
                        </motion.p>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground max-w-sm text-sm"
                    >
                        Hover or click to explore the specific technologies I use to build digital products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {toolkit.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onHoverStart={() => setHovered(item.id)}
                            onHoverEnd={() => setHovered(null)}
                            onClick={() => setHovered(hovered === item.id ? null : item.id)} // Toggle on mobile/click
                            className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 ${hovered === item.id ? 'shadow-lg border-indigo-500/30' : 'shadow-sm'}`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} text-2xl`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{item.label}</h3>
                                </div>
                                <span className="font-mono text-xl font-bold text-muted-foreground/50">{item.level}%</span>
                            </div>

                            <div className="mt-6 mb-6">
                                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, type: "spring", bounce: 0, delay: 0.2 }}
                                        className={`h-full ${item.color.replace('text-', 'bg-')}`}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-muted-foreground font-medium">{item.focus}</p>
                            </div>

                            {/* Expandable Content */}
                            <motion.div
                                initial={false}
                                animate={{ height: hovered === item.id ? "auto" : 0, opacity: hovered === item.id ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-6 flex flex-wrap gap-2">
                                    {item.tech.map((tech) => (
                                        <span key={tech} className="bg-secondary px-3 py-1 rounded-full text-xs font-mono text-secondary-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Indicator for interaction */}
                            <motion.div
                                animate={{ rotate: hovered === item.id ? 180 : 0 }}
                                className="absolute top-8 right-8 text-muted-foreground/30"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
