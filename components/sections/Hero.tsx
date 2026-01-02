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
            className="
        min-h-screen 
        flex items-center justify-center 
        relative overflow-hidden 
        px-6 md:px-8 lg:px-12
        bg-[#020617]
      "
        >
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 opactiy-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* High-Tech Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none z-0
        bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),
            linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)]
        bg-[size:40px_40px]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
      "></div>

            {/* Content Container */}
            <div className="relative w-full max-w-5xl mx-auto text-center z-10">

                {/* Greeting Badge */}
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                >
                    <Sparkles className="text-cyan-400" size={16} />
                    <span className="text-cyan-400/90 text-sm font-medium tracking-wider uppercase">Available for new opportunities</span>
                </motion.div> */}

                {/* Name & Title with Parallax Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight leading-none">
                        <span className="block text-white/90">I'm</span>
                        <span className="bg-gradient-to-br from-cyan-400 via-emerald-400 to-blue-500 
                bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                            {PERSONAL_INFO.name}
                        </span>
                    </h1>
                </motion.div>

                {/* Role Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-8"
                >
                    <p className="text-2xl md:text-4xl text-gray-300 font-light tracking-tight">
                        {PERSONAL_INFO.title}
                    </p>
                    <p className="text-xl md:text-2xl font-medium text-emerald-400/80 mt-2">
                        {PERSONAL_INFO.subtitle}
                    </p>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    {PERSONAL_INFO.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                >
                    <Button
                        variant="primary"
                        onClick={() => scrollToSection('#projects')}
                        className="group relative px-10 py-4 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore My Projects
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <ArrowDown size={20} className="-rotate-90" />
                            </motion.div>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
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
