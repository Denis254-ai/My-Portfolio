"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/40 py-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© 2026 Creativity is Joy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://github.com/Denis254-ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><FaGithub /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><FaLinkedin /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><FaTwitter /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
