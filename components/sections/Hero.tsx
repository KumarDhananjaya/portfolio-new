'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';

export const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 bg-grain pt-32"
        >
            {/* Advanced Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/15 dark:bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-pink-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Grid Pattern with Fade */}
            <div className="absolute inset-0 z-0 opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]
                bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)]
                dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
                bg-[size:40px_40px] pointer-events-none"
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass border-foreground/10 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">Available for high-impact roles</span>
                </motion.div>

                {/* Main Filled Heading */}
                <div className="overflow-hidden mb-6 text-center">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] text-foreground"
                    >
                        <span>Kumar</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 dark:from-purple-400 dark:via-cyan-400 dark:to-emerald-400">
                            Dhananjaya
                        </span>
                    </motion.h1>
                </div>

                {/* Subtitle / Role & Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col items-center gap-4 mb-12"
                >
                    <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted tracking-tight text-center max-w-3xl">
                        {PERSONAL_INFO.subtitle}
                    </p>
                    <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-foreground/[0.03] border border-foreground/[0.06] text-xs text-muted/70 font-mono">
                        <Terminal size={13} className="text-purple-500" />
                        <span>{PERSONAL_INFO.tagline}</span>
                    </div>
                </motion.div>

                {/* CTA Group */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                >
                    <Button variant="primary" onClick={() => scrollToSection('#projects')} icon={<Sparkles size={18} />}>
                        Explore The Story
                    </Button>
                    <Button variant="outline" href={PERSONAL_INFO.resume_view} download={false} icon={<ArrowDown size={18} />}>
                        View Resume
                    </Button>
                    <Button variant="outline" onClick={() => scrollToSection('#contact')}>
                        Get in Touch
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="pt-16 pb-4"
                >
                    <button
                        onClick={() => scrollToSection('#about')}
                        className="flex flex-col items-center gap-3 text-muted hover:text-cyan-500 transition-all group"
                    >
                        <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Explore the journey</span>
                        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500/60 to-transparent group-hover:h-16 transition-all duration-500"></div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
