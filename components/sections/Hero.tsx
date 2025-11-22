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
        bg-[linear-gradient(-45deg,#0a0a0a,#1a0a2e,#16213e,#0a0a0a)] 
        bg-[length:400%_400%] 
        animate-gradient
      "
        >
            {/* Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none
        bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),
            linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)]
        bg-[size:50px_50px]
      "></div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
            <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"
                style={{ animationDelay: '2s' }}
            ></div>

            {/* Content Container */}
            <div className="relative w-full max-w-4xl mx-auto text-center z-10">

                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-2 mb-4"
                >
                    <Sparkles className="text-yellow-400" size={24} />
                    <span className="text-gray-300 text-lg">Hey there! I'm</span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
                >
                    <span className="bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 
            bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                        {PERSONAL_INFO.name}
                    </span>
                </motion.h1>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl md:text-3xl text-gray-300 mb-2"
                >
                    {PERSONAL_INFO.title}
                </motion.p>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xl md:text-2xl text-purple-400 mb-6"
                >
                    {PERSONAL_INFO.subtitle}
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    {PERSONAL_INFO.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
                >
                    <Button variant="primary" onClick={() => scrollToSection('#projects')}>
                        View My Work
                    </Button>
                    <Button variant="outline" onClick={() => scrollToSection('#contact')}>
                        Get In Touch
                    </Button>
                </motion.div>

                {/* Scroll Down Arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-10"
                >
                    <button
                        onClick={() => scrollToSection('#about')}
                        className="text-gray-400 hover:text-white transition-colors animate-bounce"
                        aria-label="Scroll down"
                    >
                        <ArrowDown size={32} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
