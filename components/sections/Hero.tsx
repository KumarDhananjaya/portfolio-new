'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, MapPin, Cpu, Zap, GitPullRequest, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PERSONAL_INFO } from '@/lib/constants';

const floatingStats = [
    { label: '100k+ RPS', subtitle: 'Concurrency Engine', icon: Zap, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
    { label: 'USYD', subtitle: 'Master of CS', icon: GraduationCap, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
    { label: '5+ PRs Merged', subtitle: 'Global Open Source', icon: GitPullRequest, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
    { label: 'Autonomous Agents', subtitle: 'LangChain & MCP', icon: Cpu, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
];

export const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
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
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[8%] left-[18%] w-[480px] h-[480px] bg-purple-600/25 dark:bg-purple-600/30 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute top-[22%] right-[15%] w-[450px] h-[450px] bg-cyan-500/25 dark:bg-cyan-500/30 rounded-full blur-[140px]"
                />
                <div className="absolute bottom-[12%] left-[30%] w-[380px] h-[380px] bg-emerald-500/15 rounded-full blur-[130px]" />
            </div>

            {/* Matrix / Cyber Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]
                bg-[linear-gradient(rgba(14,165,233,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.15)_1px,transparent_1px)]
                bg-[size:48px_48px] pointer-events-none"
            />

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
                {/* Status Ticker with High-Contrast Pulse */}
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
                        <span className="text-xs font-bold tracking-wider uppercase text-foreground">Available for Roles & Projects</span>
                    </div>
                    <span className="text-foreground/20 font-bold">•</span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-500 dark:text-cyan-400">
                        <MapPin size={13} />
                        <span>{PERSONAL_INFO.location}</span>
                    </div>
                </motion.div>

                {/* Main Hero Name with Animated Gradient Shimmer */}
                <div className="overflow-hidden mb-5">
                    <motion.h1
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.92]"
                    >
                        <span className="text-foreground">Kumar </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 animate-gradient">
                            Dhananjaya
                        </span>
                    </motion.h1>
                </div>

                {/* Subtitle / Role & Engineering Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="flex flex-col items-center gap-4 mb-10 max-w-3xl"
                >
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 tracking-tight">
                        {PERSONAL_INFO.subtitle}
                    </p>
                    
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-foreground/[0.04] border border-foreground/10 text-xs md:text-sm font-mono text-muted shadow-sm">
                        <Terminal size={14} className="text-purple-400 shrink-0" />
                        <span>{PERSONAL_INFO.tagline}</span>
                    </div>
                </motion.div>

                {/* Floating Highlights Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mb-10"
                >
                    {floatingStats.map((stat, i) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                whileHover={{ scale: 1.05, y: -3 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                className={`p-3.5 rounded-2xl glass border ${stat.color} flex flex-col items-center justify-center text-center shadow-md`}
                            >
                                <IconComponent size={18} className="mb-1.5" />
                                <span className="text-sm font-black text-foreground">{stat.label}</span>
                                <span className="text-[10px] uppercase tracking-wider text-muted font-bold">{stat.subtitle}</span>
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
                    >
                        Explore System Chronicle
                    </Button>
                    <Button
                        variant="outline"
                        href={PERSONAL_INFO.resume_view}
                        download={false}
                        icon={<ArrowDown size={18} />}
                        className="border-foreground/20 hover:border-cyan-500/50 hover:text-cyan-400 font-semibold px-7 py-4 rounded-2xl text-sm glass"
                    >
                        View Resume
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => scrollToSection('#contact')}
                        className="border-foreground/20 hover:border-purple-500/50 hover:text-purple-400 font-semibold px-7 py-4 rounded-2xl text-sm glass"
                    >
                        Start Conversation
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="pt-16 pb-2"
                >
                    <button
                        onClick={() => scrollToSection('#about')}
                        className="flex flex-col items-center gap-2.5 text-muted hover:text-cyan-400 transition-colors group"
                    >
                        <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Scroll to explore story</span>
                        <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent group-hover:h-12 transition-all duration-300"></div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
