'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
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
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-pink-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Grid Pattern with Fade */}
            <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]
                bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
                bg-[size:40px_40px]"
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium tracking-widest uppercase text-white/50">Available for new opportunities</span>
                </motion.div>

                {/* Main Heading with Staggered Characters */}
                <div className="overflow-hidden mb-6">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center leading-[0.9]"
                    >
                        {PERSONAL_INFO.name.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-4 last:mr-0 outline-text hover:text-white transition-all duration-700">
                                {word}
                            </span>
                        ))}
                    </motion.h1>
                </div>

                {/* Subtitle / Role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col items-center gap-4 mb-12"
                >
                    <p className="text-2xl md:text-3xl font-light text-white/70 tracking-tight text-center max-w-2xl">
                        {PERSONAL_INFO.subtitle}
                    </p>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>

                {/* CTA Group */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <Button variant="primary" onClick={() => scrollToSection('#projects')} icon={<Sparkles size={18} />}>
                        Explore My Work
                    </Button>
                    <Button variant="outline" onClick={() => scrollToSection('#contact')}>
                        Start a Conversation
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <button
                        onClick={() => scrollToSection('#about')}
                        className="flex flex-col items-center gap-4 text-gray-500 hover:text-cyan-400 transition-all group"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to discover</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent group-hover:h-20 transition-all duration-500"></div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
