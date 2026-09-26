'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import { Github, Compass, Cpu, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { ProjectCard } from '@/components/ui/ProjectCard';

const categories = [
    { id: 'All', label: 'All Systems', icon: Sparkles },
    { id: 'AI & Multi-Agent', label: 'AI & Multi-Agent', icon: Cpu },
    { id: 'Distributed Systems', label: 'Distributed Systems', icon: Compass },
    { id: 'Cloud & Security', label: 'Cloud & Security', icon: ShieldCheck },
];

export const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <section
            id="projects"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10">
                {/* Section Header & Narrative Story */}
                <div className="mb-14 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs uppercase tracking-[0.25em] text-muted mb-4 font-semibold">
                            <Compass size={13} className="text-cyan-500" />
                            <span>The Engineering Chronicle</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-foreground">
                            Architecting from <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400">
                                0 to 100k+ RPS.
                            </span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed">
                            A curated story of high-concurrency engines, multi-agent AI systems, Zero-Trust pipelines, and resilient distributed platforms built to endure production scale.
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Category Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
                    {categories.map(({ id, label, icon: Icon }) => {
                        const isActive = activeCategory === id;
                        return (
                            <button
                                key={id}
                                onClick={() => setActiveCategory(id)}
                                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                                    isActive
                                        ? 'text-foreground bg-foreground/10 border-foreground/30 shadow-sm'
                                        : 'text-muted hover:text-foreground hover:bg-foreground/5 border border-foreground/10'
                                }`}
                            >
                                <Icon size={14} className={isActive ? 'text-cyan-500' : 'opacity-60'} />
                                <span>{label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeCategoryIndicator"
                                        className="absolute inset-0 rounded-full border border-cyan-500/50 pointer-events-none"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid with Smooth Transitions */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* GitHub Repositories Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <a
                        href="https://github.com/KumarDhananjaya?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full glass hover:bg-foreground/10 border border-foreground/10 text-xs uppercase tracking-widest text-muted hover:text-foreground transition-all duration-300"
                    >
                        <Github size={18} className="group-hover:scale-110 transition-transform" />
                        <span>Explore all 50+ repositories on GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
