'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { PERSONAL_INFO, SKILLS } from '@/lib/constants';
import { Code2, Rocket, Award, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section
            id="about"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Side: Bio and Personality */}
                    <div className="flex-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm uppercase tracking-[0.4em] text-white/30 mb-4">The Architect</h2>
                            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-xl">
                                Engineering for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Scale & Security.</span>
                            </h3>
                            <div className="space-y-6 max-w-2xl">
                                {PERSONAL_INFO.bio.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
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
                            <div className="glass px-6 py-4 rounded-3xl flex items-center gap-4 group hover:bg-white/5 transition-all duration-500">
                                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/30 uppercase tracking-widest font-bold">Hackathon Winner</p>
                                    <p className="text-white/80 font-medium">HPE SWARM-IT (2nd Prize)</p>
                                </div>
                            </div>
                            <div className="glass px-6 py-4 rounded-3xl flex items-center gap-4 group hover:bg-white/5 transition-all duration-500">
                                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/30 uppercase tracking-widest font-bold">Focus Area</p>
                                    <p className="text-white/80 font-medium">Zero-Trust & Distributed Systems</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Skill Bento Grid */}
                    <div className="w-full lg:w-2/5 grid grid-cols-2 gap-4">
                        {Object.entries(SKILLS).map(([category, skills], idx) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-6 rounded-[2rem] glass hover:bg-white/[0.05] transition-all duration-500 ${idx === 0 ? 'col-span-2' : ''
                                    }`}
                            >
                                <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-bold">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] text-white/50 font-medium hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
