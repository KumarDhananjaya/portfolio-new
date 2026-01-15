'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        technologies: string[];
        github?: string;
        link?: string;
        featured?: boolean;
    };
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
        >
            <div className="glass hover:glass-dark transition-all duration-500 rounded-3xl p-8 h-full flex flex-col justify-between overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700" />

                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-2">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-300"
                                >
                                    <Github size={20} />
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-300"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                        <div className="text-white/20 group-hover:text-purple-400/50 transition-colors duration-500">
                            <ArrowUpRight size={32} />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300 decoration-purple-500/0 decoration-2 underline-offset-8 group-hover:decoration-purple-500/50">
                        {project.title}
                    </h3>

                    <p className="text-muted text-lg leading-relaxed mb-6 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-1.5 rounded-full text-xs font-medium border border-white/5 bg-white/5 text-white/60 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all duration-500"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-3 py-1.5 text-xs text-white/30">
                            +{project.technologies.length - 4} more
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
