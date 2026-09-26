'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { OPEN_SOURCE } from '@/lib/constants';
import { Github, GitPullRequest, Star, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const openSourceCardStyles = [
    { border: 'group-hover:border-cyan-500/50', spotlight: 'rgba(6, 182, 212, 0.18)', text: 'text-cyan-600 dark:text-cyan-400', tag: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border-cyan-500/25' },
    { border: 'group-hover:border-purple-500/50', spotlight: 'rgba(168, 85, 247, 0.18)', text: 'text-purple-600 dark:text-purple-400', tag: 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/25' },
    { border: 'group-hover:border-emerald-500/50', spotlight: 'rgba(16, 185, 129, 0.18)', text: 'text-emerald-600 dark:text-emerald-400', tag: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/25' },
    { border: 'group-hover:border-pink-500/50', spotlight: 'rgba(236, 72, 153, 0.18)', text: 'text-pink-600 dark:text-pink-400', tag: 'bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-500/25' },
];

export const OpenSource: React.FC = () => {
    return (
        <section
            id="opensource"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-300 mb-4 font-bold">
                            <GitPullRequest size={13} className="text-emerald-400" />
                            <span>Community Impact & Open Source</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-foreground">
                            Verified Upstream <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Contributions.</span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed font-normal">
                            Direct pull requests and features merged into production developer tooling, Kubernetes release managers, GenAI search platforms, and rich-text frameworks.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {OPEN_SOURCE.map((item, index) => {
                        const style = openSourceCardStyles[index % openSourceCardStyles.length];
                        return (
                            <motion.div
                                key={item.project}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="group relative h-full flex flex-col"
                            >
                                <SpotlightCard
                                    spotlightColor={style.spotlight}
                                    className={`p-6 h-full flex flex-col justify-between transition-all duration-300 ${style.border} shadow-lg hover:shadow-xl`}
                                >
                                    <div>
                                        {/* Header / Actions & Star count */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-2">
                                                <a
                                                    href={item.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-xl bg-foreground/5 hover:bg-foreground/15 text-muted hover:text-foreground transition-all hover:scale-110"
                                                    aria-label="GitHub Repository"
                                                >
                                                    <Github size={16} />
                                                </a>
                                                <a
                                                    href={item.pullRequestsUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 transition-all hover:scale-110"
                                                    title="View Pull Requests"
                                                >
                                                    <GitPullRequest size={16} />
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20">
                                                <Star size={12} fill="currentColor" />
                                                <span>{item.stars}</span>
                                            </div>
                                        </div>

                                        {/* Project Title & Repo */}
                                        <h4 className={`text-lg font-black mb-0.5 transition-colors ${style.text}`}>
                                            {item.project}
                                        </h4>
                                        <p className="text-xs font-mono text-muted/70 mb-3 truncate">{item.repo}</p>

                                        {/* Contribution Summary */}
                                        <p className="text-muted text-xs md:text-sm leading-relaxed mb-5 font-normal">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between gap-2 pt-4 border-t border-foreground/10 mt-auto">
                                        <span className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold border ${style.tag}`}>
                                            {item.language}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-xs font-bold text-foreground">
                                            <CheckCircle2 size={13} className="text-emerald-500" />
                                            {item.prCount}
                                        </span>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
