'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { PROJECTS } from '@/lib/constants';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
    const featuredProjects = PROJECTS.filter(p => p.featured);

    return (
        <section id="projects" className="w-full py-20 md:py-28 lg:py-32 px-6">
            <div className="w-full max-w-[1200px] mx-auto">
                <SectionHeading subtitle="Some of my recent work">
                    Featured Projects
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16
    items-stretch max-w-6xl mx-auto justify-items-center">

                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col text-center items-center mx-auto">
                                <div className="flex-1 w-full">

                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-purple-500/10 
                                rounded-full text-sm text-purple-300 
                                border border-purple-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 justify-center">
                                    {project.github !== '#' && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                            <span>Code</span>
                                        </a>
                                    )}

                                    {project.github !== '#' && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                            <span>View</span>
                                        </a>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>


                {/* All Projects Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href={`https://github.com/KumarDhananjaya?tab=repositories`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg"
                    >
                        View All Projects on GitHub
                        <ExternalLink size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
