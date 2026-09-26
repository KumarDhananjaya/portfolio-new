'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.header
            className={`fixed left-1/2 z-50 transition-all duration-700 w-[calc(100%-2rem)] max-w-6xl ${
                isScrolled ? 'top-3' : 'top-6'
            }`}
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
            <nav
                className={`relative flex items-center justify-between px-5 md:px-6 py-3.5 rounded-[2rem] transition-all duration-500 ${
                    isScrolled ? 'glass-dark shadow-2xl border border-foreground/15' : 'glass border border-foreground/10'
                }`}
            >
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#home');
                    }}
                    className="text-lg md:text-xl font-black tracking-tighter text-foreground hover:text-purple-500 transition-colors duration-300 shrink-0"
                >
                    KD<span className="text-cyan-500">.</span>dev
                </motion.a>

                <div className="hidden lg:flex items-center gap-2">
                    <ul className="flex items-center gap-0.5">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-muted hover:text-foreground transition-all duration-300 rounded-full hover:bg-foreground/5"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3 ml-2 pl-2 border-l border-foreground/10">
                        <ThemeToggle />
                        <Button
                            variant="primary"
                            href={PERSONAL_INFO.resume_view}
                            download={false}
                            className="py-2 px-4 rounded-full text-[10px] uppercase tracking-widest font-bold"
                            icon={<FileDown size={13} />}
                        >
                            Resume
                        </Button>
                    </div>
                </div>

                {/* Mobile / Tablet Actions */}
                <div className="flex items-center gap-2.5 lg:hidden">
                    <ThemeToggle />
                    <button
                        className="glass p-2.5 rounded-2xl text-muted hover:text-foreground border border-foreground/10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-3 glass-dark p-4 rounded-[2rem] flex flex-col gap-1.5 lg:hidden border border-foreground/15 shadow-2xl"
                        >
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="w-full py-3 px-4 text-left text-xs font-bold uppercase tracking-widest text-muted hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <div className="pt-2 mt-1 border-t border-foreground/10">
                                <Button
                                    variant="primary"
                                    href={PERSONAL_INFO.resume_view}
                                    download={false}
                                    className="w-full py-3 rounded-xl"
                                    icon={<FileDown size={16} />}
                                >
                                    View Full Resume
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};
