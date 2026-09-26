'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SKILLS, EDUCATION } from '@/lib/constants';
import { Code2, Rocket, Award, ShieldCheck, Sparkles, Terminal, Cpu, Database, Cloud, GraduationCap, MapPin, BookOpen } from 'lucide-react';
import { soundFx } from '@/lib/audio';

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
                {/* Chapter Story Tag */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Chapter 01: The Narrative
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Side: Story, Education Card & Achievements */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground/5 border border-border text-xs uppercase tracking-[0.25em] text-muted mb-4 font-semibold font-mono">
                                <Sparkles size={13} className="text-purple-400" />
                                <span>Academic Rigor & Production Craft</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground">
                                Bridging Distributed Scale &{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                                    Autonomous Intelligence.
                                </span>
                            </h3>
                            <div className="space-y-5 max-w-2xl">
                                {PERSONAL_INFO.bio.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-muted text-base md:text-lg leading-relaxed font-normal">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        {/* USYD Education Feature Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            onMouseEnter={() => soundFx.playHover()}
                            className="p-6 sm:p-7 rounded-3xl glass border border-purple-500/30 bg-purple-500/5 hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden"
                            data-cursor="USYD"
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-purple-400">
                                            Current Academic Pursuit
                                        </span>
                                        <h4 className="text-lg sm:text-xl font-bold text-foreground">
                                            {EDUCATION.institution}
                                        </h4>
                                    </div>
                                </div>
                                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 shrink-0">
                                    {EDUCATION.duration}
                                </span>
                            </div>

                            <p className="text-sm font-semibold text-foreground/90 mb-2">
                                {EDUCATION.degree}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted mb-4 font-mono">
                                <MapPin size={13} className="text-cyan-400" />
                                <span>{EDUCATION.location}</span>
                            </div>

                            <div className="pt-3 border-t border-border/50 flex flex-wrap gap-2">
                                {["Distributed Systems", "Multi-Agent AI", "Cloud Security", "High-Concurrency Algorithms"].map((topic) => (
                                    <span
                                        key={topic}
                                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-card border border-border text-muted"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Achievement Highlights */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <div
                                onMouseEnter={() => soundFx.playHover()}
                                className="glass p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 border border-border hover:border-purple-500/30 transition-all"
                            >
                                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted font-mono uppercase tracking-wider">HPE SWARM-IT (2nd)</p>
                                    <p className="text-foreground font-semibold text-xs sm:text-sm">National Hackathon Winner</p>
                                </div>
                            </div>
                            <div
                                onMouseEnter={() => soundFx.playHover()}
                                className="glass p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 border border-border hover:border-cyan-500/30 transition-all"
                            >
                                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted font-mono uppercase tracking-wider">Zero-Trust Supply Chain</p>
                                    <p className="text-foreground font-semibold text-xs sm:text-sm">OPA & Vault Security</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Skill Bento Matrix */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-muted uppercase tracking-widest">
                            <BookOpen size={14} className="text-cyan-400" />
                            <span>Technical Competencies Matrix</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {Object.entries(SKILLS).map(([category, skills], idx) => {
                                const IconComponent = categoryIcons[category] || Code2;
                                return (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.06 }}
                                        onMouseEnter={() => soundFx.playHover()}
                                        className="p-5 rounded-2xl glass hover:glass-dark transition-all duration-300 border border-border hover:border-purple-500/40 flex flex-col justify-between"
                                        data-cursor="SKILL"
                                    >
                                        <div className="flex items-center gap-2.5 mb-3.5">
                                            <div className="p-1.5 rounded-lg bg-foreground/5 text-cyan-400 border border-border">
                                                <IconComponent size={15} />
                                            </div>
                                            <h4 className="text-xs uppercase tracking-wider text-foreground font-bold font-mono">
                                                {category}
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2 py-0.5 rounded-md bg-card border border-border text-[11px] text-muted font-mono hover:text-cyan-400 hover:border-cyan-400/40 transition-colors cursor-default"
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
            </div>
        </section>
    );
};
