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
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-[#020617]"
        >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

            <div className="w-full max-w-[1200px] mx-auto relative z-10">
                <SectionHeading subtitle="Solving complex production challenges across high-scale platforms">
                    Professional Timeline
                </SectionHeading>

                <div className="relative mt-16 max-w-4xl mx-auto pl-8 md:pl-0">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-emerald-500/0 -translate-x-1/2 hidden md:block" />

                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 mb-20 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Connector Node */}
                            <div className="absolute left-[-32px] md:left-1/2 top-10 md:top-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] -translate-x-1/2 -translate-y-1/2 z-20" />

                            {/* Card Content */}
                            <div className="w-full md:w-[45%]">
                                <div className="p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group relative">
                                    <div className="absolute -top-10 left-0 text-emerald-400 font-bold tracking-widest text-sm flex items-center gap-2">
                                        <Calendar size={16} />
                                        {exp.duration}
                                    </div>

                                    <div className="flex flex-col gap-2 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-cyan-500/10 rounded-xl">
                                                <Briefcase className="text-cyan-400" size={20} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {exp.position}
                                            </h3>
                                        </div>
                                        <div className="flex items-center gap-2 text-emerald-400/80 font-semibold pl-12">
                                            <MapPin size={14} />
                                            {exp.company} — {exp.location}
                                        </div>
                                    </div>

                                    <ul className="space-y-4 text-gray-400 text-sm leading-relaxed mb-8 pl-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-1.5 shrink-0" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-cyan-300 font-medium hover:bg-cyan-500/10 hover:border-cyan-500/20 transition-all cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty Space for layout */}
                            <div className="hidden md:block w-[45%]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
