'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import { Github } from 'lucide-react';
import { ProjectCard } from '@/components/ui/ProjectCard';

export const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            {/* Background Atmosphere */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm uppercase tracking-[0.4em] text-white/30 mb-4">Selected Works</h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Crafting digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">masterpieces.</span>
                        </h3>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-4 md:px-0">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* Repository Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <a
                        href={`https://github.com/KumarDhananjaya?tab=repositories`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4"
                    >
                        <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                            <Github size={24} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-white/20 group-hover:text-white/50 transition-colors">View all 50+ repositories</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
