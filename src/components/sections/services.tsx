"use client";

import { motion } from "framer-motion";
import { FiLayout, FiCode, FiSmartphone, FiTrendingUp } from "react-icons/fi";

const services = [
    {
        id: "01",
        title: "MVP Development",
        description: "Full-stack web apps from idea to launch. Robust, scalable, and ready for market.",
        est: "2-4 Weeks",
        icon: <FiCode />,
    },
    {
        id: "02",
        title: "AI Integration",
        description: "Custom chatbots, automation agents, and intelligent data processing pipelines.",
        est: "1-2 Weeks",
        icon: <FiTrendingUp />,
    },
    {
        id: "03",
        title: "Enterprise Dashboards",
        description: "High-performance data visualization for businesses. Turn complex data into actionable insights.",
        est: "3 Weeks",
        icon: <FiLayout />,
    },
    {
        id: "04",
        title: "UI/UX Modernization",
        description: "Redesigning legacy apps to look modern, feel intuitive, and perform flawlessly.",
        est: "1 Week",
        icon: <FiSmartphone />,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 md:py-32 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tighter"
                    >
                        Services
                    </motion.h2>
                    <p className="hidden md:block text-sm font-medium text-muted-foreground">Scroll to explore services →</p>
                </div>

                {/* Swipeable Carousel Container */}
                <div className="relative w-full">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="snap-center shrink-0 w-[85vw] md:w-[350px] bg-card border border-border p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group flex flex-col justify-between h-[300px]"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 text-2xl group-hover:scale-110 transition-transform">
                                            {service.icon}
                                        </div>
                                        <span className="font-mono text-xs text-muted-foreground/50">{service.id}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-6 border-t border-border/50 flex justify-between items-center text-xs font-medium">
                                    <span className="text-muted-foreground">Estimated Delivery</span>
                                    <span className="bg-secondary px-3 py-1 rounded-full text-foreground">{service.est}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <p className="md:hidden text-center text-xs font-medium text-muted-foreground mt-4">Swipe to explore →</p>
            </div>
        </section>
    );
}
