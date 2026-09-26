'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { PERSONAL_INFO, SKILLS } from '@/lib/constants';
import { Code2, Rocket, Award, ShieldCheck, Sparkles, Terminal, Cpu, Database, Cloud } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    'Languages': Terminal,
    'AI & Multi-Agent': Cpu,
    'Backend & Distributed': Code2,
    'DevSecOps & Cloud': Cloud,
    'Frontend & Mobile': Rocket,
    'Databases & Storage': Database,
};

export const About: React.FC = () => {
    return (
        <section
            id="about"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Side: Bio and Personality */}
                    <div className="flex-1 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs uppercase tracking-[0.25em] text-muted mb-4 font-semibold">
                                <Sparkles size={13} className="text-purple-500" />
                                <span>The Engineering Philosophy</span>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 max-w-xl text-foreground">
                                Engineering for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400">
                                    Scale & Security.
                                </span>
                            </h3>
                            <div className="space-y-6 max-w-2xl">
                                {PERSONAL_INFO.bio.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-muted text-base md:text-lg leading-relaxed font-normal">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Achievement Pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="glass px-6 py-4 rounded-3xl flex items-center gap-4 group hover:bg-foreground/5 transition-all duration-500 border border-foreground/10">
                                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted/60 uppercase tracking-widest font-bold">Hackathon Winner</p>
                                    <p className="text-foreground/90 font-semibold text-sm">HPE SWARM-IT (2nd Prize)</p>
                                </div>
                            </div>
                            <div className="glass px-6 py-4 rounded-3xl flex items-center gap-4 group hover:bg-foreground/5 transition-all duration-500 border border-foreground/10">
                                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted/60 uppercase tracking-widest font-bold">Core Focus</p>
                                    <p className="text-foreground/90 font-semibold text-sm">Zero-Trust & Distributed Systems</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Skill Bento Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(SKILLS).map(([category, skills], idx) => {
                            const IconComponent = categoryIcons[category] || Code2;
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    className={`p-6 rounded-[2rem] glass hover:glass-dark transition-all duration-500 border border-foreground/10 hover:border-foreground/20 flex flex-col justify-between ${
                                        idx === 0 || idx === 1 ? 'sm:col-span-1' : ''
                                    }`}
                                >
                                    <div className="flex items-center gap-2.5 mb-4">
                                        <div className="p-2 rounded-xl bg-foreground/5 text-cyan-500">
                                            <IconComponent size={16} />
                                        </div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] text-foreground font-bold">{category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 rounded-full bg-foreground/[0.03] border border-foreground/10 text-xs text-muted font-medium hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
