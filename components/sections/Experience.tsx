'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { EXPERIENCE } from '@/lib/constants';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="w-full max-w-6xl mx-auto relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm uppercase tracking-[0.4em] text-white/30 mb-4">The Journey</h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Future.</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="relative space-y-12">
                    {/* Elegant Connector Line */}
                    <div className="absolute left-[15px] md:left-[21px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent" />

                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-12 md:pl-20 group"
                        >
                            {/* Animated Node */}
                            <div className="absolute left-0 md:left-2 top-0">
                                <div className="w-8 h-8 rounded-2xl glass flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-start gap-8">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/40 mb-4 font-semibold">
                                        <Calendar size={12} />
                                        {exp.duration}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-500">
                                        {exp.position}
                                    </h3>
                                    <p className="text-lg text-white/60 font-medium mb-6">
                                        {exp.company} <span className="text-white/20 px-2">/</span> {exp.location}
                                    </p>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-2 shrink-0" />
                                                <span className="text-sm text-white/50 leading-relaxed font-light">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/5 text-cyan-400 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
