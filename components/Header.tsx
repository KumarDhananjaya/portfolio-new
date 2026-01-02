'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
            setIsScrolled(window.scrollY > 50);
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
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 max-w-[1200px] mx-auto px-6 md:px-8 ${isScrolled
                ? 'bg-black/40 backdrop-blur-xl border border-white/10 py-3 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] shadow-cyan-500/10'
                : 'bg-transparent py-6'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* CONTENT WRAPPER */}
            <nav className="w-full flex items-center justify-between">

                {/* LOGO */}
                <motion.a
                    href="#home"
                    className="text-2xl font-bold font-heading bg-gradient-to-br from-cyan-400 via-emerald-400 to-blue-500 
                     bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#home');
                    }}
                >
                    KD
                </motion.a>

                {/* DESKTOP NAVIGATION */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group text-sm font-medium tracking-wide uppercase"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* MOBILE BUTTON */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white/5 backdrop-blur-md border-t border-white/10 mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <ul className="flex flex-col items-center gap-5 py-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 text-lg"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
