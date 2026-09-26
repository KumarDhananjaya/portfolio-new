'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, MapPin, Cpu, Zap, GitPullRequest, GraduationCap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';
import { soundFx } from '@/lib/audio';

const dynamicTitles = [
    "Distributed Systems Architect",
    "Autonomous AI Agent Engineer",
    "High-Concurrency Specialist",
    "Zero-Trust Cloud Builder",
];

const floatingStats = [
    { label: '100k+ RPS', subtitle: 'Concurrency Engine', icon: Zap, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
    { label: 'USYD', subtitle: 'Master of CS (Adv)', icon: GraduationCap, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
    { label: '5+ PRs Merged', subtitle: 'Global Open Source', icon: GitPullRequest, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
    { label: 'Multi-Agent MCP', subtitle: 'LangChain & Tools', icon: Cpu, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
];

export const Hero: React.FC = () => {
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % dynamicTitles.length);
        }, 3200);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id: string) => {
        soundFx.playClick();
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 bg-grain pt-32 pb-20"
        >
            {/* Dynamic Animated Ambient Mesh Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.25, 0.4, 0.25],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[8%] left-[18%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1.15, 1, 1.15],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute top-[22%] right-[15%] w-[480px] h-[480px] bg-cyan-500/30 rounded-full blur-[150px]"
                />
                <div className="absolute bottom-[10%] left-[32%] w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[140px]" />
            </div>

            {/* Matrix / Cyber Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]
                bg-[linear-gradient(rgba(14,165,233,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.15)_1px,transparent_1px)]
                bg-[size:48px_48px] pointer-events-none"
            />

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
                {/* Status Ticker */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-3 px-5 py-2 rounded-full glass border border-purple-500/30 shadow-lg shadow-purple-500/10 mb-8"
                >
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                        </span>
                        <span className="text-xs font-bold tracking-wider uppercase text-foreground">
                            Available for SWE & Distributed Roles
                        </span>
                    </div>
                    <span className="text-foreground/20 font-bold">•</span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                        <MapPin size={13} />
                        <span>{PERSONAL_INFO.location}</span>
                    </div>
                </motion.div>

                {/* Main Hero Name */}
                <div className="overflow-hidden mb-4">
                    <motion.h1
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.92]"
                    >
                        <span className="text-foreground">Kumar </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                            Dhananjaya
                        </span>
                    </motion.h1>
                </div>

                {/* Dynamic Rotating Title */}
                <div className="h-10 sm:h-12 overflow-hidden flex items-center justify-center mb-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={titleIndex}
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -25, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-tight font-mono flex items-center gap-2"
                        >
                            <span className="text-purple-400">&gt;</span>
                            <span>{dynamicTitles[titleIndex]}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Tagline Box */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-foreground/[0.04] border border-border text-xs md:text-sm font-mono text-muted mb-10 shadow-sm max-w-2xl"
                >
                    <Terminal size={14} className="text-purple-400 shrink-0" />
                    <span>{PERSONAL_INFO.tagline}</span>
                </motion.div>

                {/* Floating Highlights Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mb-10"
                >
                    {floatingStats.map((stat) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                onMouseEnter={() => soundFx.playHover()}
                                whileHover={{ scale: 1.05, y: -4 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                className={`p-4 rounded-2xl glass border ${stat.color} flex flex-col items-center justify-center text-center shadow-md cursor-default`}
                                data-cursor="DATA"
                            >
                                <IconComponent size={20} className="mb-2" />
                                <span className="text-sm font-black text-foreground font-mono">{stat.label}</span>
                                <span className="text-[10px] uppercase tracking-wider text-muted font-bold mt-0.5">{stat.subtitle}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Primary Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Button
                        variant="primary"
                        onClick={() => scrollToSection('#projects')}
                        icon={<Sparkles size={18} />}
                        className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold shadow-xl shadow-purple-500/25 border-0 px-8 py-4 rounded-2xl text-sm"
                        data-cursor="PROJECTS"
                    >
                        Explore Project Chronicle
                    </Button>
                    <Button
                        variant="outline"
                        href={PERSONAL_INFO.resume_view}
                        download={false}
                        icon={<ArrowDown size={18} />}
                        className="border-border hover:border-cyan-500/50 hover:text-cyan-400 font-semibold px-7 py-4 rounded-2xl text-sm glass"
                        data-cursor="RESUME"
                    >
                        View Resume
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => scrollToSection('#contact')}
                        icon={<ChevronRight size={18} />}
                        className="border-border hover:border-purple-500/50 hover:text-purple-400 font-semibold px-7 py-4 rounded-2xl text-sm glass"
                        data-cursor="CONNECT"
                    >
                        Get in Touch
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="pt-16 pb-2"
                >
                    <button
                        onClick={() => scrollToSection('#about')}
                        onMouseEnter={() => soundFx.playHover()}
                        className="flex flex-col items-center gap-2.5 text-muted hover:text-cyan-400 transition-colors group cursor-pointer"
                        data-cursor="DOWN"
                    >
                        <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold">Scroll for My Story</span>
                        <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 via-purple-400 to-transparent group-hover:h-12 transition-all duration-300"></div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
