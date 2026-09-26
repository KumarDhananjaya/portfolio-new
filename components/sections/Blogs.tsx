'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BLOGS, SOCIAL_LINKS } from '@/lib/constants';
import { BookOpen, ExternalLink, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { soundFx } from '@/lib/audio';

export const Blogs: React.FC = () => {
    return (
        <section
            id="blogs"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="w-full max-w-7xl mx-auto relative z-10">
                {/* Chapter Story Tag */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Chapter 04: Technical Deep-Dives & Essays
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                </div>

                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono uppercase tracking-[0.25em] text-purple-400 mb-4 font-bold">
                            <BookOpen size={13} className="text-purple-400" />
                            <span>Engineering Publications</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-foreground">
                            System Essays & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Architectural Notes.</span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed font-normal">
                            Deep-dive engineering articles exploring Retrieval-Augmented Generation exact-match fallacies, 100k+ RPS zero-overselling architectures, event-driven microservices, and database query optimizations.
                        </p>
                    </motion.div>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14">
                    {BLOGS.map((blog, index) => (
                        <motion.a
                            key={blog.title}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            onMouseEnter={() => soundFx.playHover()}
                            onClick={() => soundFx.playClick()}
                            className="group block h-full"
                            data-cursor="READ"
                        >
                            <SpotlightCard
                                spotlightColor="rgba(168, 85, 247, 0.2)"
                                className="p-7 h-full flex flex-col justify-between group-hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl border border-border bg-card/80"
                            >
                                <div>
                                    {/* Meta Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30">
                                            {blog.platform}
                                        </span>
                                        <div className="flex items-center gap-3 text-xs text-muted font-mono">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} className="text-purple-400" />
                                                {blog.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} className="text-cyan-400" />
                                                {blog.readTime}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                                        {blog.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3 font-normal">
                                        {blog.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-border/60 mt-auto">
                                    <div className="flex flex-wrap gap-1.5">
                                        {blog.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:translate-x-0.5 transition-all">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.a>
                    ))}
                </div>

                {/* Dual Platform CTA links */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={SOCIAL_LINKS.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => soundFx.playHover()}
                        onClick={() => soundFx.playClick()}
                        className="px-6 py-3.5 rounded-full glass hover:bg-purple-500/15 border border-purple-500/30 text-xs font-mono uppercase tracking-widest font-bold text-foreground inline-flex items-center gap-2.5 transition-all duration-200 hover:scale-105 shadow-md shadow-purple-500/10"
                        data-cursor="MEDIUM"
                    >
                        <BookOpen size={16} className="text-purple-400" />
                        <span>Read All on Medium (@kumar62.shivu)</span>
                    </a>
                    <a
                        href={SOCIAL_LINKS.hashnode}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => soundFx.playHover()}
                        onClick={() => soundFx.playClick()}
                        className="px-6 py-3.5 rounded-full glass hover:bg-cyan-500/15 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest font-bold text-foreground inline-flex items-center gap-2.5 transition-all duration-200 hover:scale-105 shadow-md shadow-cyan-500/10"
                        data-cursor="HASHNODE"
                    >
                        <ExternalLink size={16} className="text-cyan-400" />
                        <span>Explore Hashnode (kdexplorations)</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
