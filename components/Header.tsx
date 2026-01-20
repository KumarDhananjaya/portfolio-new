'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
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
            className={`fixed left-1/2 z-50 transition-all duration-700 w-[calc(100%-3rem)] max-w-5xl ${isScrolled ? 'top-4' : 'top-8'
                }`}
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
            <nav className={`relative flex items-center justify-between px-6 py-4 rounded-[2rem] transition-all duration-700 ${isScrolled ? 'glass-dark shadow-2xl' : 'glass-dark/20'
                }`}>
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#home');
                    }}
                    className="text-xl font-bold tracking-tighter text-white hover:text-purple-400 transition-colors duration-300"
                >
                    Portfolio<span className="text-white/20">.</span>
                </motion.a>

                <div className="hidden md:flex items-center gap-4">
                    <ul className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant="primary"
                        href={PERSONAL_INFO.resume}
                        download="Kumar_Dhananjaya_Resume.pdf"
                        className="py-2.5 px-6 rounded-full text-[10px] uppercase tracking-widest font-bold"
                        icon={<FileDown size={14} />}
                    >
                        Resume
                    </Button>
                </div>

                {/* Mobile Trigger */}
                <button
                    className="md:hidden glass p-3 rounded-2xl text-white/60 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-4 glass-dark p-4 rounded-[2rem] flex flex-col gap-2 md:hidden"
                        >
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="w-full py-4 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <div className="pt-2">
                                <Button
                                    variant="primary"
                                    href={PERSONAL_INFO.resume}
                                    download="Kumar_Dhananjaya_Resume.pdf"
                                    className="w-full py-4 rounded-2xl"
                                    icon={<FileDown size={18} />}
                                >
                                    Download Resume
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};
