'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OPEN_SOURCE } from '@/lib/constants';
import { Github, GitPullRequest, GitFork, Star, CheckCircle2 } from 'lucide-react';

export const OpenSource: React.FC = () => {
    return (
        <section
            id="opensource"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs uppercase tracking-[0.25em] text-muted mb-4 font-semibold">
                            <GitPullRequest size={13} className="text-emerald-500" />
                            <span>Upstream Contributions</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-foreground">
                            Giving Back to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400">
                                Global Open Source.
                            </span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed">
                            Verified contributions to production developer tools, Kubernetes dashboards, AI platforms, and editor frameworks.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {OPEN_SOURCE.map((item, index) => (
                        <motion.div
                            key={item.project}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="glass hover:glass-dark transition-all duration-500 rounded-3xl p-7 h-full flex flex-col justify-between overflow-hidden relative border border-foreground/10 hover:border-emerald-500/30">
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none" />

                                <div>
                                    {/* Header / Actions & Star count */}
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="flex gap-2">
                                            <a
                                                href={item.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-muted hover:text-foreground transition-all duration-300"
                                                aria-label="GitHub Repository"
                                            >
                                                <Github size={18} />
                                            </a>
                                            <a
                                                href={item.pullRequestsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-all duration-300"
                                                title="View Pull Requests"
                                            >
                                                <GitPullRequest size={18} />
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                                            <Star size={13} fill="currentColor" />
                                            <span>{item.stars}</span>
                                        </div>
                                    </div>

                                    {/* Project Title & Repo handle */}
                                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-emerald-500 transition-colors duration-300">
                                        {item.project}
                                    </h3>
                                    <p className="text-xs font-mono text-muted/60 mb-4 truncate">{item.repo}</p>

                                    {/* Contribution Summary */}
                                    <p className="text-muted text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between gap-2 pt-4 border-t border-foreground/5 mt-auto">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-medium border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
                                        {item.language}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted">
                                        <CheckCircle2 size={13} className="text-emerald-500" />
                                        {item.prCount}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
