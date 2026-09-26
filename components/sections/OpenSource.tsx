'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OPEN_SOURCE } from '@/lib/constants';
import { Github, ExternalLink, GitFork, Star } from 'lucide-react';

export const OpenSource: React.FC = () => {
    return (
        <section
            id="opensource"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm uppercase tracking-[0.4em] text-muted mb-4">Open Source</h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Contributing to the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Community.</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
                    {OPEN_SOURCE.map((item, index) => (
                        <motion.div
                            key={item.project}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="glass hover:glass-dark transition-all duration-500 rounded-3xl p-8 h-full flex flex-col justify-between overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700" />

                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex gap-2">
                                            <a
                                                href={item.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-muted hover:text-foreground transition-all duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                            <a
                                                href={item.fork}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-muted hover:text-foreground transition-all duration-300"
                                            >
                                                <GitFork size={20} />
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-amber-400/70">
                                            <Star size={16} fill="currentColor" />
                                            <span className="text-xs font-bold">{item.stars}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                                        {item.project}
                                    </h3>

                                    <p className="text-muted text-lg leading-relaxed mb-6 line-clamp-3 group-hover:text-foreground/90 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 mt-auto">
                                    <span className="px-4 py-1.5 rounded-full text-xs font-medium border border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
                                        {item.language}
                                    </span>
                                    <span className="text-xs text-muted/50 uppercase tracking-widest font-bold">Contributor</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
