'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Zap, Layers, Sparkles } from 'lucide-react';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        technologies: string[];
        category?: string;
        chapter?: string;
        metric?: string;
        github?: string;
        link?: string;
        featured?: boolean;
    };
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getCategoryColor = (category?: string) => {
        switch (category) {
            case 'AI & Multi-Agent':
                return 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-600 dark:text-purple-300';
            case 'Distributed Systems':
                return 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-600 dark:text-cyan-300';
            case 'Cloud & Security':
                return 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-300';
            default:
                return 'from-purple-500/20 to-cyan-500/10 border-foreground/20 text-muted';
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            className="group relative h-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="glass hover:glass-dark transition-all duration-500 rounded-3xl p-7 md:p-8 h-full flex flex-col justify-between overflow-hidden relative border border-foreground/10 hover:border-foreground/20 hover:shadow-2xl hover:shadow-purple-500/5">
                {/* Background Dynamic Glow */}
                <div
                    className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
                        project.category === 'AI & Multi-Agent'
                            ? 'bg-purple-500/15 group-hover:bg-purple-500/25'
                            : project.category === 'Distributed Systems'
                            ? 'bg-cyan-500/15 group-hover:bg-cyan-500/25'
                            : 'bg-emerald-500/15 group-hover:bg-emerald-500/25'
                    }`}
                />

                <div>
                    {/* Header bar: Chapter/Metric & Actions */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                        <div className="flex flex-wrap items-center gap-2">
                            {project.metric && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-foreground/5 border border-foreground/10 text-foreground">
                                    <Zap size={12} className="text-amber-500" />
                                    {project.metric}
                                </span>
                            )}
                            {project.category && (
                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${getCategoryColor(project.category)}`}>
                                    {project.category}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/15 text-muted hover:text-foreground transition-all duration-300"
                                    aria-label="GitHub Repository"
                                >
                                    <Github size={18} />
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 transition-all duration-300"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Project Title */}
                    <div className="flex items-baseline justify-between mb-3">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300">
                            {project.title}
                        </h3>
                    </div>

                    {/* Story Narrative Chapter */}
                    {project.chapter && (
                        <p className="text-[11px] font-mono uppercase tracking-wider text-muted/60 mb-3 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            {project.chapter}
                        </p>
                    )}

                    {/* Description */}
                    <p className="text-muted text-sm md:text-base leading-relaxed mb-6 font-normal">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-foreground/5 mt-auto">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-medium border border-foreground/10 bg-foreground/[0.03] text-muted group-hover:border-foreground/20 group-hover:text-foreground transition-all duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
