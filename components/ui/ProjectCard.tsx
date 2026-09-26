'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

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
    const getCategoryDetails = (category?: string) => {
        switch (category) {
            case 'AI & Multi-Agent':
                return {
                    pill: 'bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-500/30',
                    spotlight: 'rgba(168, 85, 247, 0.18)',
                    border: 'group-hover:border-purple-500/50',
                    title: 'group-hover:text-purple-400',
                    metric: 'text-purple-600 dark:text-purple-300 bg-purple-500/10 border-purple-500/25',
                };
            case 'Distributed Systems':
                return {
                    pill: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border-cyan-500/30',
                    spotlight: 'rgba(6, 182, 212, 0.18)',
                    border: 'group-hover:border-cyan-500/50',
                    title: 'group-hover:text-cyan-400',
                    metric: 'text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/25',
                };
            case 'Cloud & Security':
                return {
                    pill: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30',
                    spotlight: 'rgba(16, 185, 129, 0.18)',
                    border: 'group-hover:border-emerald-500/50',
                    title: 'group-hover:text-emerald-400',
                    metric: 'text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/25',
                };
            default:
                return {
                    pill: 'bg-pink-500/15 text-pink-600 dark:text-pink-300 border-pink-500/30',
                    spotlight: 'rgba(236, 72, 153, 0.18)',
                    border: 'group-hover:border-pink-500/50',
                    title: 'group-hover:text-pink-400',
                    metric: 'text-pink-600 dark:text-pink-300 bg-pink-500/10 border-pink-500/25',
                };
        }
    };

    const style = getCategoryDetails(project.category);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            className="group relative h-full flex flex-col"
        >
            <SpotlightCard
                spotlightColor={style.spotlight}
                className={`p-7 md:p-8 h-full flex flex-col justify-between transition-all duration-500 ${style.border} hover:shadow-2xl shadow-lg`}
            >
                <div>
                    {/* Header: Metric, Category & External Actions */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                        <div className="flex flex-wrap items-center gap-2">
                            {project.metric && (
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border ${style.metric}`}>
                                    <Zap size={12} className="shrink-0" />
                                    {project.metric}
                                </span>
                            )}
                            {project.category && (
                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${style.pill}`}>
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
                                    className="p-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/15 text-muted hover:text-foreground transition-all duration-200 hover:scale-110"
                                    aria-label="GitHub Repository"
                                >
                                    <Github size={17} />
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-500 dark:text-cyan-300 transition-all duration-200 hover:scale-110 shadow-sm"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLink size={17} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Project Title with Hover Glow */}
                    <h3 className={`text-2xl font-black text-foreground mb-2 transition-colors ${style.title} flex items-center justify-between`}>
                        <span>{project.title}</span>
                    </h3>

                    {/* Story Narrative Chapter */}
                    {project.chapter && (
                        <p className="text-xs font-mono uppercase tracking-wider text-muted mb-4 flex items-center gap-2 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            {project.chapter}
                        </p>
                    )}

                    {/* Description */}
                    <p className="text-muted text-sm md:text-base leading-relaxed mb-6 font-normal">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-foreground/10 mt-auto">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-foreground/[0.04] border border-foreground/10 text-foreground/80 group-hover:border-foreground/20 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </SpotlightCard>
        </motion.div>
    );
};
