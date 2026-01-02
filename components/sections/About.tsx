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
            className="w-full py-20 md:py-32 px-6 flex justify-center relative overflow-hidden bg-[#020617]"
        >
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="w-full max-w-[1300px] mx-auto relative z-10">
                <SectionHeading subtitle="Architecting secure, high-scale digital ecosystems">
                    Engineering Profile
                </SectionHeading>

                {/* Bento Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-16">

                    {/* Main Bio Card — Large (8 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500"
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">Digital Architect</h3>
                            <div className="space-y-4">
                                {PERSONAL_INFO.bio.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-gray-400 text-lg leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                        {/* Decorative Gradient Line */}
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                    </motion.div>

                    {/* Quick Info Grid — Small (4 cols) */}
                    <div className="md:col-span-4 grid grid-cols-1 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:border-emerald-500/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                                    <Award className="text-emerald-400" size={24} />
                                </div>
                                <h4 className="text-lg font-bold">Innovation Prize</h4>
                            </div>
                            <p className="text-gray-400 text-sm">HPE SWARM-IT Hackathon — National 2nd Prize for Swarm-Intelligence platform.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:border-cyan-500/30 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-cyan-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="text-cyan-400" size={24} />
                                </div>
                                <h4 className="text-lg font-bold">Zero-Trust Expert</h4>
                            </div>
                            <p className="text-gray-400 text-sm">Specializing in OPA Gatekeeper, Vault, and cloud-native security pipelines.</p>
                        </motion.div>
                    </div>

                    {/* Current Focus Card (4 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-md overflow-hidden relative group"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Rocket className="text-cyan-400" size={24} />
                            Research Arc
                        </h3>
                        <div className="space-y-6">
                            {[
                                { title: 'Cloud-Native Security', color: 'cyan', text: 'OPA, Vault, and K8s hardening.' },
                                { title: 'Distributed Systems', color: 'emerald', text: 'Kafka-driven event architectures.' },
                                { title: 'CRDTs & Real-Time', color: 'blue', text: 'Yjs and conflict-free sync.' }
                            ].map((focus, i) => (
                                <div key={i} className="group/item">
                                    <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 text-${focus.color}-400`}>{focus.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed group-hover/item:text-gray-300 transition-colors">{focus.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack Card — Wide (8 cols) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-8 rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500"
                    >
                        <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                            <Code2 className="text-emerald-400" size={24} />
                            Technical Ecosystem
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.entries(SKILLS).map(([category, skills]) => (
                                <div key={category}>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-[11px] text-emerald-400 font-medium hover:bg-emerald-500/20 hover:border-emerald-400 transition-all cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Interactive Sparkle effect could go here */}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
