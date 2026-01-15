"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";
import Lenis from "lenis";

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Mobile & Tablet: Native scrolling only.
        // Desktop: Inertia-based smooth scrolling.
        const isDesktop = window.innerWidth >= 1024;

        if (!isDesktop) return;

        // Lenis instantiation
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            // In newer Lenis versions, 'direction' is often 'orientation', 
            // but standard vertical scrolling is default. removing explicit prop to avoid type errors.
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </NextThemesProvider>
    );
}
