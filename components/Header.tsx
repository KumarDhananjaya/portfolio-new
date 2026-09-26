'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { soundFx } from '@/lib/audio';

const navItems = [
    { name: 'Story', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [audioOn, setAudioOn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                setScrollProgress((window.scrollY / totalHeight) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleAudio = () => {
        const next = !audioOn;
        setAudioOn(next);
        soundFx.enabled = next;
        if (next) soundFx.playSuccess();
    };

    const scrollToSection = (href: string) => {
        soundFx.playClick();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Top scroll progress bar */}
            <div className="fixed top-0 left-0 right-0 h-[2px] z-[9998] pointer-events-none bg-transparent">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-75"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <motion.header
                className={`fixed left-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-6xl ${
                    isScrolled ? 'top-3' : 'top-6'
                }`}
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <nav
                    className={`relative flex items-center justify-between px-5 md:px-6 py-3.5 rounded-[2rem] transition-all duration-500 ${
                        isScrolled ? 'glass-dark shadow-2xl border border-border/80' : 'glass border border-border/40'
                    }`}
                >
                    {/* Brand Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#home');
                        }}
                        onMouseEnter={() => soundFx.playHover()}
                        className="text-lg md:text-xl font-black tracking-tighter text-foreground hover:text-purple-400 transition-colors duration-300 shrink-0 font-mono"
                        data-cursor="HOME"
                    >
                        KD<span className="text-cyan-400">.</span>dev
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1.5">
                        <ul className="flex items-center gap-0.5">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <button
                                        onClick={() => scrollToSection(item.href)}
                                        onMouseEnter={() => soundFx.playHover()}
                                        className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-muted hover:text-foreground transition-all duration-300 rounded-full hover:bg-foreground/5 font-mono"
                                        data-cursor="NAV"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-2.5 ml-2 pl-3 border-l border-border/60">
                            {/* Audio FX Toggle */}
                            <button
                                onClick={toggleAudio}
                                onMouseEnter={() => soundFx.playHover()}
                                className={`p-2 rounded-full border transition-colors ${
                                    audioOn
                                        ? 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
                                        : 'border-border text-muted hover:text-foreground hover:bg-foreground/5'
                                }`}
                                title={audioOn ? "Disable Sound FX" : "Enable Sound FX"}
                                aria-label="Toggle Sound Effects"
                                data-cursor="SFX"
                            >
                                {audioOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
                            </button>

                            <ThemeToggle />

                            <Button
                                variant="primary"
                                href={PERSONAL_INFO.resume_view}
                                download={false}
                                className="py-2 px-4 rounded-full text-[10px] uppercase tracking-widest font-bold"
                                icon={<FileDown size={13} />}
                                data-cursor="PDF"
                            >
                                Resume
                            </Button>
                        </div>
                    </div>

                    {/* Mobile / Tablet Actions */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={toggleAudio}
                            className={`p-2 rounded-xl border transition-colors ${
                                audioOn ? 'border-cyan-500 text-cyan-400 bg-cyan-500/10' : 'border-border text-muted'
                            }`}
                            aria-label="Toggle Sound FX"
                        >
                            {audioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
                        </button>
                        <ThemeToggle />
                        <button
                            className="glass p-2.5 rounded-2xl text-muted hover:text-foreground border border-border"
                            onClick={() => {
                                soundFx.playClick();
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                            }}
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
                                className="absolute top-full left-0 right-0 mt-3 glass-dark p-4 rounded-[2rem] flex flex-col gap-1.5 lg:hidden border border-border shadow-2xl"
                            >
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className="w-full py-3 px-4 text-left text-xs font-bold uppercase tracking-widest text-muted hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all font-mono"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                                <div className="pt-2 mt-1 border-t border-border">
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
        </>
    );
};
