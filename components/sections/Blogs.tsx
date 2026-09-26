'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BLOGS, SOCIAL_LINKS } from '@/lib/constants';
import { BookOpen, ExternalLink, Clock, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';

export const Blogs: React.FC = () => {
    return (
        <section
            id="blogs"
            className="w-full py-24 md:py-32 px-6 relative overflow-hidden bg-grain"
        >
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs uppercase tracking-[0.25em] text-muted mb-4 font-semibold">
                            <BookOpen size={13} className="text-purple-500" />
                            <span>Technical Publications</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-foreground">
                            Insights & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400">
                                Architecture Deep-Dives.
                            </span>
                        </h3>
                        <p className="text-muted text-base md:text-lg leading-relaxed">
                            Writing extensively about Retrieval-Augmented Generation, 100k+ RPS distributed architectures, event-driven patterns, and database concurrency optimization.
                        </p>
                    </motion.div>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {BLOGS.map((blog, index) => (
                        <motion.a
                            key={blog.title}
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass hover:glass-dark transition-all duration-500 rounded-3xl p-7 flex flex-col justify-between group border border-foreground/10 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 relative"
                        >
                            <div>
                                {/* Meta Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                                        {blog.platform}
                                    </span>
                                    <div className="flex items-center gap-3 text-xs text-muted">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {blog.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} />
                                            {blog.readTime}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-purple-500 transition-colors duration-300 line-clamp-2">
                                    {blog.title}
                                </h4>

                                {/* Description */}
                                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                                    {blog.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-foreground/5 mt-auto">
                                <div className="flex flex-wrap gap-1.5">
                                    {blog.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-foreground/5 text-muted/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="p-2 rounded-xl text-muted group-hover:text-purple-500 transition-colors">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Dual Platform CTA links */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={SOCIAL_LINKS.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-full glass hover:bg-foreground/10 border border-foreground/10 text-xs uppercase tracking-widest font-bold text-foreground inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                    >
                        <BookOpen size={16} className="text-purple-500" />
                        <span>Read on Medium (@kumar62.shivu)</span>
                    </a>
                    <a
                        href={SOCIAL_LINKS.hashnode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-full glass hover:bg-foreground/10 border border-foreground/10 text-xs uppercase tracking-widest font-bold text-foreground inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                    >
                        <ExternalLink size={16} className="text-cyan-500" />
                        <span>Read on Hashnode (kdexplorations)</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
