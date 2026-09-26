'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/lib/constants';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { soundFx } from '@/lib/audio';

export const Experience: React.FC = () => {
    return (
        <section
            id="experience"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="w-full max-w-6xl mx-auto relative z-10">
                {/* Chapter Story Tag */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Chapter 05: Industry Track Record & Production Systems
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
                </div>

                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xs uppercase font-mono tracking-[0.3em] text-muted mb-4 font-bold flex items-center gap-2">
                            <Briefcase size={14} className="text-amber-400" />
                            <span>Professional Chronology</span>
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
                            Engineering at <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400">Production Scale.</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="relative space-y-12">
                    {/* Glowing Connector Line */}
                    <div className="absolute left-[15px] md:left-[21px] top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/60 via-purple-500/60 to-cyan-500/60" />

                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => soundFx.playHover()}
                            className="relative pl-12 md:pl-20 group"
                            data-cursor="WORK"
                        >
                            {/* Animated Node */}
                            <div className="absolute left-0 md:left-2 top-0">
                                <div className="w-8 h-8 rounded-2xl glass flex items-center justify-center group-hover:border-amber-400/60 transition-colors duration-300">
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-start gap-8">
                                <div className="flex-1 p-6 md:p-8 rounded-3xl glass border border-border group-hover:border-border/80 transition-all bg-card/60">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border text-[11px] font-mono uppercase tracking-widest text-muted mb-4 font-semibold">
                                        <Calendar size={12} className="text-amber-400" />
                                        {exp.duration}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-1 group-hover:text-amber-400 transition-colors">
                                        {exp.position}
                                    </h3>
                                    <p className="text-sm md:text-base text-muted font-mono mb-6">
                                        <span className="text-foreground font-bold">{exp.company}</span>
                                        <span className="text-muted/50 px-2">•</span>
                                        <span>{exp.location}</span>
                                    </p>

                                    <ul className="grid grid-cols-1 gap-3 mb-8">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-foreground/[0.02] border border-border/50 hover:bg-foreground/[0.04] transition-colors">
                                                <CheckCircle2 size={16} className="text-amber-400 mt-0.5 shrink-0" />
                                                <span className="text-xs md:text-sm text-muted leading-relaxed font-normal">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-amber-500/5 text-amber-300 border border-amber-500/20"
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
